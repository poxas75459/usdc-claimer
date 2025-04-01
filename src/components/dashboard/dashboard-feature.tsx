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
    "2GGtGEg7rDUYt3RRtzjxdRsg1pHx8pihPGHF5WxBmdhJMt2RJ3tCMf38cnv6wh8qMEPf2bDRPgsM7EwXyPLSLprt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmisqtBBjZVCgEJG3mYC24gdzSjfu3CamuF5LvMpg3U6PXEGvrEjhRhL13JkCH41DeiTvZD7NfyxtgVSm99txKi",
  "key1": "5dALvtTicYWqXz4NXr7xRjDQ5UXhL3R3osg1ttNnhy1XH4LphgHFq7izHG26MyFBMe4kV3v3HHcjyLDu366hmgTF",
  "key2": "4DNTn24vDbfFKX58RXfpJZ5pgxcBPki4eMtkUcEHvcVLgjbnTKCGof1vSW2RSG116m8BU7Cxv9vQaHKyjVSWH5co",
  "key3": "4E4dpMgBM7vNo89MswG7PKT8nEuq55gMprX8VQCpn2ZmaSwFGZ3mW3T28NTtJavAWYwcXDJQdZrmC34FPMCSdahj",
  "key4": "5sBn3mHit31UxDMWrHoAFHRFZZ1KHJ6JwCTew2ojmSD2oV31532qbJncHGNjkXVV78SvnC3UnLo25fdUdPdQTsGr",
  "key5": "3UoAj1VnJ5vpLrxbyos1iq9i1cEhNdxw1UaVfrC8DLyvKPCee3Qc77nohSQ1wEZ6M8LbiBkWt2pz1CdVWY2KuF7S",
  "key6": "2m7FTzEL5H8UBabM8QPAkuyz1L3F8C3rRySc5juVbnQndbsbnjKuYJYH6MEZ5ezZjiEJ7WpE6yTSusJVeB3bGUV5",
  "key7": "48BgSnDzxse5xq771qcgKWiFjAuWgyHigsnsri5UfiJMcoCvpvBf67if5BYMAWzWZaLHVujbpvRN8pSv2hE8QZA",
  "key8": "44vwT61ejogQJF29ZfjTSCYYETvYmfCheJjP5jySMnRgAzGAdjYEGh5KbSDK7YjXSQP7xXNcWWAm83jLemadn6wr",
  "key9": "3x26PWf4Rhb1Ci6mnfLM46TFfWhBGe4mmhoVQejjD7RLZsJHC2v3cvbLViQKX7gkZkfc3sGqqa2SYajUDKFNcJ9T",
  "key10": "3tXKVMVhKx8xRubxSbrSCMCUXKGiNXb9RGLbMNMYkm4jMm6YHBB3qEZPmUaUJzybtTSM6mMe9T8aK1bCGJLwemqy",
  "key11": "4FVsUQJKSaHjKXpN71nJx9vwrR5g4WJyZPsidB82Fts7eWsiCJLDtFQbsdV7bj4UBv1duU76rHy5Ln7yJjDnvGca",
  "key12": "5k2uSmRb4CnR3dp1jR9jdzfp2BNBDMyuUsn1YwH8dPseSJudjq8wqnXYEes5B3fh3QUgX4VrboFX5QnHFK83HyTd",
  "key13": "FXvxX1HcKMshm3iXScNZNiPdAPGoxudtkGVZqcxhrp4D5CsACq3j4AETphBqd1fMoLTiEdRS6MpNSLcSACAL2e4",
  "key14": "2gpof7G8hyUTPjyUSNufo6bmjD7extc4xydRSt8af3CSA17EWN3WK549zhfG2Kq8RQv9En41ncUD3D5SjoRtLMRz",
  "key15": "3NZ9wL3u2SDcBn7TrHSDgQCwBZb6UgWxzWzUUBXMumyNVrkDHt1hiHnBboG345nJzWyCMfg5hHvkqEnroCvo7amp",
  "key16": "2u9UvuSY2xGpufnoeFu59CcmcTmWAZFS9b5s1zFTCmVYS7Pk7Efh5d8xoDg6wU29UeNTyCF1fCjbThygaob98WPZ",
  "key17": "5C5JTd5r6htj2UT1Z4xLdZwqek6Z7KUZSaW2nPsxtkFNPgnPCVYx2tdjmR9hMUMuwF34eLnJJUErWDp2jd96zsxX",
  "key18": "4YxBKD7Xg7eLvLou7S61CVr2w49Q7ZwaRRQbiMzZPg8ZXwvkSHEBHmU66HTwpbw3GK37AMBfg8MfC4pNfdADPiik",
  "key19": "5pLZDDVzSDAgsV5uFZHorFRo4ivXbEid6UiwNKaSfbPi1v3G3oYvejUGXEpCFV7fZfEf3gmKbeoCmgYSLHiLtNYY",
  "key20": "58AmQ1UNwPJozanYMLQAzygA62t3TaHKGa5BAHVVfL14pnXUEzWQk8VfozDzNQEu75V4XjocHWbW2TRRiZ6JmCKi",
  "key21": "4fpinrumaArUAT5QEf5ns1JzV9iCcz3a2XYTrXj4w2WTkJUWgsCSExvmSHQqF69SQUq6iqScSt9grKaHExZALYUA",
  "key22": "4EN2gznrFSohY5xnXPaahjh3WrJdGi95c4dqJp7dx95v3iXh63N4criQJs65Fgr63yX1h7ohfLXaUYqNLqtcdmm2",
  "key23": "4GSFmWRBCAY4XfDW5QAT9geYoH9g1FT926o2K7GBBmBRFQdjRqpHUaeSKEY4bg4End53JhUeuQkgqo3MXrTJuZXR",
  "key24": "3oSKD1QeHRLgFZqbVXTgQ3NCNyD1AdwoMDd22M2MhhoFXxEMdy81jie2Frn7Kzr8ZgHMSPMpJuQ2BqW4suhQHgeS",
  "key25": "Gfq1srDwfDFw4UtkyGbvW5xZ32Tp2jSdNVDNJPTnNkxK4VbVtdhF7rFLdZ9YdbryNAKX88Mn6HiEyBdepHddt33",
  "key26": "2KjLDaz7dYLMEC9yZVvSEG1XhGjhKngEaUzUP611SNfkh823KoX6YEXTjAgQoJzNYzM1gk4LawwXWzz3YoB8UsW9",
  "key27": "4hDdA2UBsdukYHjTaamrknim5uYNiLWxZ56jfyseGGNQW3SZU76CCg6Dzf2ZmizoTpZbbSntBgr6R7osaUpWzPfo",
  "key28": "3QEer9xGQSpRUXLN3pyF2Xy5mbWQRomJpqV2arbQScAabfVppciccdVUuE78xaNmQ48zwdPWrShbPrLSt5dFngXD",
  "key29": "36o3drUh85oAVRPnQoEoh3QwhQYZeArkgpUm4STQXxHM2gtBhVjZF6H9MwNnV75LVyknEgGXkmDYV9Du4eR4dnZM",
  "key30": "3WsX5XS1ts4wWixHHVK3b154y8V9HmrgKrYxwWJLcVCdyaSLju1zdd4yGRUQ2e7nY1wtGa9fKYuhYDefEepNUrkh",
  "key31": "5cF1ccw3YfkYiARGBEChTF2bAa2wwp9MNmJKeRuTJhekQHgq73cCdzpjvEPZEMtst2fFPKzZugDf6crGujfxFdDR",
  "key32": "4bVj2XNhRGJBgvPKUCqE1BBX1eCQz6Dzw7BpocsvTv9K97FJo7e6NYMFRePUMMTtvKA5852FvEvvdmNDBBNAfFeL",
  "key33": "4Fc2hXiHJpZZhPD3bCDhVwwWux8LiGcMYsy3zyrT8PXCiBQh5ZfrzCEXNNdsvByWTeuWDZErziFRNDaSG1HVRMMY",
  "key34": "4jj9ApzSMUDQG8kdNRAjk11V6BoTWwj3BtcdpLbHAX3z9oj2WTjeXzd2CuWf5QQkNdzFm2AJAABnLBAmBV3NAKZg",
  "key35": "43LP4Jr9k9Zac8X7evQUFUoxqdMZEoGThPTa7WpvQSR18DAiTTVvzkJcaMMCKPgyTp7WshATgTGC7CEZpoVT7qiE",
  "key36": "vhQwBqYtFEnYHwa64yXPGr7zJ9HFao4YCro99TgGZmVFfncv69RwSQHe8KQFDzrK7TFdwcfnhbvoRjBkGbEuDdd",
  "key37": "3YhGqsjaMzTLrRxWAtVxLcnyfE3wsKx7r7qx82s49iTmAZHZZ7HeNSLfmkQ7xMsgzj8MnshwsiBVf5JWctgBZ6rm",
  "key38": "5rLNqCYdTCbwYx9n5zSjDeT94ALJtXFT99ynx49yg24t64UWUq99ExDEbyk7L51jh6UzKLXimkRV57xbUfwyG8nb",
  "key39": "JudV6NzmHX8KG8aSCM1GciPPXGybENV1GNn5yL3tF63jz5AnsqTpqFM78ZLAXuVEeMcHa2U37Un5BPNbwWpSCRH",
  "key40": "5N8McLXZMYtWihusRkSnSGjKfafBeLZeJ1U1c7rm74XRuEfrYgQT9h4uDd3a1cHGkHTpwVrV1FQGhjhfTBq6ZQWm",
  "key41": "37dLih82NFHkiu5oRCoRtDMgHBK87nmfdz52mR3qBy7Svm3AH6b6ZM6J95xwbGhWvPevuwGnKKsGpUrHdZpH2VTE",
  "key42": "v9HN84M4eKBye6tvdi2YENW2FzwhA5FSBMbkzvRZo6TDzYfyd1ZQq5ZK9miy8RGPkJ5xRa6o247Re7UVRGZqyTB",
  "key43": "4nVT1BiELjfkAAXPH4YyFB1oi3bVpsc6rTFgmbFoswkwPkF1o2psJwr3HSEUtvg8whqm619kPXohCaY166Gza9WN",
  "key44": "25yGRUumEndEriQiiSFdgzfQ38fPxWYzJrPaMhy72PoPmz6gkDvxhNXSREwqMSy9YreHoHGvJGeGTzzczzN6iwEn",
  "key45": "2EvGBUHLup1AvzD8XaWwYrp8L5fYvUes1fN2NAXgbVYjJZSAxPHdCpt5EiSXKDDGYZyEM84HxpqEc1zVRoNmuepc"
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
