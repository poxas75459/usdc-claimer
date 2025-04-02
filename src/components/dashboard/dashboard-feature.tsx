/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "9UNuL6AhLmRa7gLGsLL6DxJRF8NVSqcYLhiYHJHZL2JxASsLcsssN2TCgpWLq9LrWdiejBhSi9TLqAaiz8azheq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bGi58MEf9dKwCDMqiEGWDDjfMP9htRbhGFWnQ7GYSgjDCiwQBgYLfcDG2STVgHn7wrcYmRgbNzDrPR7i8ybSzoc",
  "key1": "2ibeoPCeexq6fXbd94pigAdaQGT9XAAd5UfCKwpF1mVFuWj4VUNgQBmhuF5n3fkQxYRZ2329YQT7opkCdkB9i5xi",
  "key2": "5hYEMygbzGcS4cUBUW7QVzLuikhxhAXfyomZNLUbxSiihfNLDSPUJMvU5JWAfeNKxVuuUsxUFC8pvWVqD9o1iUTR",
  "key3": "4siRpLSRNB3EkPzxaENZBWrTt1yMXCDFX3quwXy3U2GsvuDuXpDQeYPaxpbkBptTRpCPpyAYd8CVZmgR2e2YdHvJ",
  "key4": "3UED4Uxtv5C7qavEpAkWD7ew64kRcT65zGaaDNZtEmdwY6Qt1WafjnMcurYsgDHD6Ss5bZdnJGNGBA4N5vRy8W2W",
  "key5": "5A1nHgwPjBL8UfxFejzjQYYsCbgiPqageNSSHtczG4uXNhJwJWsZ2qwUeLDr6nNYcm6G9A2p8YFEgortTRXHr13q",
  "key6": "qQmbscfXWpxKppPhz5NCVK8kEi7noiYVkSS9kavrxRw9Po5fFsSL6ZJ5TS7binhqoNMdnzzvGEnCXJWjH7FdCzR",
  "key7": "27Ziptu36jpYQrsjWYFg9tZg1TB5g3ytbTUueNYAGYMP94mFXuEtoQLyVTFbyffPNfZKvEpqSKnYrbjqoLpBAh9u",
  "key8": "5N6WZR5yWcsrHpAokfdd8MAqTxVLTdzNXihyDR5nHeq5N5DePWrSeZ2jrbyZGWYAS2pey7uEuW1JKC7LUx7kxrw4",
  "key9": "2UqRvJahYnnyfbgEseBubCm1MmnphBM9eSMTUmEYFk1pVAPq7VveSLQF1nB8KZQT732JbSR5RGMCBDP9QWsbNrcn",
  "key10": "3c47Nq1Bxvv5FGyRgJAmnRiCzeR9WDfBCHMNqZBT1PwsYbRJRgE6t47HmYCwjHQhvgEsrmcH56TrNsqkTAjnGF6p",
  "key11": "3a7acik4xFb38YZj3c1TmZpYaSTfuysHuRt7JwGcACXEzmY14w1JET6sSUj55PG7mx9r5Uf7iAmKeBq2HcHVgP7q",
  "key12": "2qP4noKnZ9RcK3nHBMRcNK8bXtr3j84rDouUZU2V1vz1TnVWFPTxRVit8KknVCuoWLUv1kopZUqsSqML13g7qrMG",
  "key13": "2VpjXxowLe4g4ALri8C8WvZM5BiRMN8t3TF3HADpFQdZwdtDahQygta7mtMJezYTtZTANoVf2MTTd7ka9bDeomFa",
  "key14": "37aZCvbctYRsHvMREMGNFB77q4jqPWWQX3MyUEm4Qje8ZwL4pYuqkLuonuK4YAuddaTkgsz536gmXt2d4rPdM94q",
  "key15": "2DW2xDtbRnZqi7sVAHt3jjzynpuEDoFQg5pMQ7b8e9NDJd5wxmzsJ3dTkUXmb9NcCJVyxwcAyb1HrZKD3cMS8KEy",
  "key16": "3LkvvENiaeRZMcvMR7r7omNFxFiKzxM2Ka2GcYSif9s7spJnoiDaqgw3MkNzFgwW9qEXUWLsAexsNgVxVJSYZn1p",
  "key17": "2ZzHkPTc4eGWmFSAUT4EaVCiqbBZTRsToc9TmkGJHU26KDRioQmZK46mdvv9NBnjjXHvTDdWJJtMnJzBwEf4ESor",
  "key18": "2vCfEcCwy6REnmUqaxfTvr28t6Dmq8U3toUi6WFKMJDZTMkfS4fT8A2qG6cxfEn3sb6Vm2EFsXfb5yktZCuFN8SW",
  "key19": "5LYhvxkp9Qgmcgp6uZMDkhe48T8JdNdqHrqm7FXNi3oGzBjy7aXRrYj5pAXEoMsprsrKtaXurtt2PzPjJEejyDwe",
  "key20": "36oX5dXiNxBF1xqkDbwWiXvKjf6MaiNBUcMP1H9qYSF4hRLxbwsEr3hXDtY6VeDdoaUT6tMdVjcmrzhNt9GBBiVf",
  "key21": "5YkknqbPKW2k3iJMsq9pzFsFBVRHxPbfSeoovQFEeVK2zCdTtpyitLe4sLbasmNKdMN2mHQM9K4K7RLG1E7bVP5y",
  "key22": "5EwsZjQkAmnEz3s2AwSWhm8F2FuvYX1V8CtS1VqznTTBqnNM6Do8pBstaj19skzowfhExR1t18M7GuQEeEkTwmnA",
  "key23": "5nV6Ab32cyFJtCS96xrFGq2yLNGzWZJKcmuQQ6HQMAx1XSr7zGVHSXEfsZ9xUeVrKWHB9vucBmbnGdQR7rhzfipU",
  "key24": "1wqr5B5vWB1P6eXtXVLmgyNLMmwVT67SHctySdkcqqWYfxnnV87bBpggPoTHYdkfczD2hv4nXPgiBxn36hxiUCq",
  "key25": "2XGJomfaQps4ejeRbdVWQX4oh5thvcNhwnsXEPVxBcUokWSKs6NrHEdGdmopiqa4MEc5ewS4Ywj6URmA4VCHASQd",
  "key26": "PxXEy2evmwodk89GcPk53MXJRQWCvh2JiCYZB7LaShpcRNJHFuQCEHSKTgJYgcAkdvTe7qrW32bZfbK619Kwcxp",
  "key27": "4XHZTFYScpFdxZg5MHruVAB9fkHgrG4iuAwTuVWiH8UnnbEDe43iVk2noptzjnFuFcAPzeDKS7QThd4kEyDC1RgE",
  "key28": "4u6h9bmZjpJHqMWGqy8wAT1GsE7hjRbZbZHU6whiXttTpAC9CP27hbrgkQWRgpDWJBXeunfLPckgHB8pnHUmnNGZ",
  "key29": "2TENSJHHyJPb8zZmcRUAoU4oF1YqjvhAimdQYA5MMNmASawpQq1vQzMedN7fCU4YrNwiuBYuDqWm2ruZbAvKUEhT",
  "key30": "4sVVswP1JvycSMoos68PDnwZqvpUqYNHQBgDKihCbXAU8SHDWQTDYxAKFTW2qw6koSzcGkMFAXosAabb5nyiehXN",
  "key31": "217xysxd7PpLCumPnsjyVtaRqYeScb9kDNmqSsBcjLZA8TK5ZTJ6d1XXYJkBH31SRJaF68yyEh6xgfvnLyZ43KEE",
  "key32": "NJDz6ywdaRVL52bThQvBVhbJ2g32mPFArvDJLPSzTXTg64xAfJSQio3wDzxNU3NEyLHaSGA9pWQpzEhJQXPovBB",
  "key33": "651vdvkGjC5S15LWHumN8a147vQsxMz4wVi9SmU2RFm7cu2XvFuwk5sRCRi2jDKPyPLcXyUSg3sCDBiwi7jrYFUz",
  "key34": "Us3rSmaAF4mm7XNBGXCeEANCyZqNNRCfuizdej3dXMoesC7DbGMnxir7Rih72Bupj6bXNHunHp2FwVQC1V9Gp5M",
  "key35": "3xosBDnf1YMhZyuBLy1CYUxoPbKZ6uuGhPQixbfuVdV7rRV6R8zDP5erYeFZPqfLHbL1aM19R3v6WJ7pzxpvXNV5",
  "key36": "4Bxayyk2cuyLepi2bZPYUufJT313ms6m2gGJjHh9R2s3fir7hgsLuuDwo46nBbqqFMD9fiFgUPzSEqr4aM2xZncA",
  "key37": "2U6At3SvvnuXK3E93JycHE5kVqLGxFop82KMT8Mp7XG29bqN6ab56G73At4mAark1C9mzrRPpvr7JLMMgEZXhNTp",
  "key38": "iuABh45AY6YgsfM9u85xxYNSrjQSWmDpQqtooD3wq4MFGttizHFBeo5Hu3EzmXLv5sPKJWgAdU2bwaegBkb2686",
  "key39": "5HriCRYeL9skAgKY7gLwTv26SLnM1UzN32gHXAXbG9xE5io6dNPsKFVWzzQhwFwziGacELVroibgndbU9SP2fQz",
  "key40": "4AUU57EpDrzbh2T55nsNG6X8zWBFnDgybLpuZfANiLwSQCKHWqKWcDpHvKQne3tGWqdpYVBu4KMaBJg32FtRjxMb",
  "key41": "3s41FVy7A3jp3fnxt7SR9daAwgDeDzGc2S6N8MLZ3L5QDAhHMXqQVF3AyB5sE7RaSRWknLoMEUcAocHniomaiEq6",
  "key42": "2DoedvhrSRxjCYEs2r9HMgLe1S1DtnYeWLxeVjCv3vYUUyp9KL78PFaGRqY45hvXW7fWNNFoH6bGm8Gf7RmQaW9Y",
  "key43": "8z1YrsavtRhoRpq1aZVQZRX3jHh87QifVP2bmoKbbqdUFx78s2SwTgL6GxBtQXhGNtUxwaz3g4WMd322ZN6V879",
  "key44": "5EadXtp8mKNssGwfzaNxj2VPDUGtweqfQVRLqjQDgx71hqqBmWcaVyZWeQR2UDZkHCHzd2GcFEmoZjL5Zg196CKB",
  "key45": "5eDZUwFydmH989qBRTRrExFi7h1mTyRSKDrcyqyqiBhptAYvHGAigm3PXNAAa9vs2du48GJKeEZhdd9uJADWYknG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
