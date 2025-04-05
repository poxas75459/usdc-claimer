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
    "3Jv6RcrLUrsffwjLJb752me3Qm27zZmQeiMaUaZJ9JqN7C6MDxub6NZtzVoW57gKQB4LEAbUR88fbnpNU4JxPNua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61vYh4SMyLNioxBT7RGvwwPkSiJcRX55mHvKPPViCcpteMD3e6x6FGeQ7NpLfBLAjt2vRUamaXEWcCAFDhCYVVq4",
  "key1": "2NbhzwrGxAWaT6LsCgzJuMcmo8rZnAXkuAQHWY7wNgSC7tsJP7v7UBo8gMa5z3WzAyxeGRTvLxjjQauNBVF7errp",
  "key2": "27LX4tsaoRCxXjxgS2YGqgLxbTJsK9B6T5JmDXcaVDRVC7U3ZA6G9u6SjdunGdKyebeCKpgMccVEreqp2cQbn4Hw",
  "key3": "233DZXbpQqHCM95HpZ55h1SkNowepSRab3GJuUbPhr8MwwAk38u8eVz6LcdVLjoL2kCAcGmcxKwqfsYBiyV6uVPk",
  "key4": "3Yq1pnRWVUnKup37QCUyW73D1GwLnFF9jFNo7w4pGmgRtcoWCpHJF7te4NFDn78LxapuN6Di327yLbT49gXdnwXw",
  "key5": "WGYxrwEChBqMJGHSrc2ZWz1T6bM3hfmXCfVbPAHywZfhchh29dWH84xrR26qkHdKgDJ1RaC2rA2vFoHo5qnJEL1",
  "key6": "4NEKMayN5DFNmYqErgYjtLfqJ8EBSZg37mBVX6Lp7GTtyhEoRhhHMG3Kn39RdFDpsdii5Jswg44Hzx1BL5WoSxFG",
  "key7": "2VYpmqad53DitGU9UXggwGvEphtP3Dkk22DtjCPdoyPDv1uku2SQ32SLyAzi3k9V5pdmrcJJguwwy36QK3DqCaTT",
  "key8": "4Cv4Ce4TGAasAr5o2h11Min4hfURbbFTwKrTiEyE5U9mwHzPtkonFNifmLDrNmSbpd8XyhtixwikTxNCJ9Y6p7QB",
  "key9": "4z1VsFFG96WSsw49hTyPLny4XsFCSwUvWuew1vRudpZQUGWmJWp463K4uDQzrZBxqke17ZYDqghcxaYEbYPARESG",
  "key10": "3G7AknWJXbhDr7HE7W865j5pP7JSGZ2DjBXv27YmbygFSbCzHXUEJJgC7VmSeZZjMbUCwhVoXKdesjkXTqX1DdLo",
  "key11": "66Av7uvrgR6QFoyUUESHRwiftHwrf5avQnFzgvpt6J6CbU2ZtgCK2Toeqoc2UgUntE1h6NgSTWpDbM9VURBHuCjh",
  "key12": "3zNXJCWid6mcBAFSDoinRhSyfYxezmehkKvdXECpdPo9uy4ucVCAdpuDScN7pr43hWQnPyAAxYhRpTEN2oiTkBHh",
  "key13": "2ZThmWxHnr18oZLvqmb82yAc96Cf5FaK51pCRm9KZSi1AsZz4JGra3vM8Nh1vvruRXvqnxCSC2RfXqFqBYkEps3H",
  "key14": "nEvqsjNjTrcSq2eMnx8aQHGYzp8fEATD75AejdrNuLkxvvgqXF7RFPTrRQh7Paai7RSenSKRApWah544F7UfzMg",
  "key15": "5kPt5Nd6Y6JySxhSG4Jd8dB2bA1igRuuugdcVDn8pkoeWiJv8hz4ky4ccz1wbXLaHwQh8vPBeeyR9b3DTCoPQyB8",
  "key16": "4abVeafcfxbrP3ZeCevGHchMvRuS2jQZiohpecq3Dnh5F7iniJJUEQKDd2vwUxHLCue1V9SngT7BWeS5hqu48Ate",
  "key17": "5jxWTHhxUtMuXoCAQ5hHZgpXfd6KcwMZWuV9HtUDjRYeebikqnbZuKzqFGgtZ6jHH1cFgZVAZ9huTW8vGaabYTUq",
  "key18": "KZwnkyMTUojDmX6YwBcAmndq5gygcQRB2AqqFSzmJoa5YgxVaFT26h7iBSKybpDj6bCvJosGvGtYitPe7UN6Ds1",
  "key19": "658HYbHbf94zM429nWUj4eAKxny3euaKnbbPpzpdUFWYu5xXvrcYS2yEXr88BSDZE7GbZJvjHFKRrQgkLPVhY79v",
  "key20": "4YgqNKCxQUE3jRb4YGooLHMNsnuLi7VnR2Fk7mmhsnsVHqwAcRCzcjLSfcAGzCVfUtvZbyqmc1e4dBFjHe64RC9L",
  "key21": "eQFzh3EVFcJYbnwT9fjFKCmqXtQMeLLqg3ywaxrxw6VZ6N6WbC2jXH4qUs9DYmXTvW93JKJvGRjBBmjH3TCrmzN",
  "key22": "ZHYVxYGftZgcTbHaMeyWpjGMaAPpMEj9QFzoLzmJvSJirDpP3GyENsKJAkAUc56YHFGsMZ5uHfUGxzPhP2brQEf",
  "key23": "2StxtTmfTjxJUF1aWvhbjGDeyadgdKfwC7p9PdntPSCnPef9phxQEW4VSY538YrR4BNT8fo4UVMwyCDAGJsDicd9",
  "key24": "4hkRoQ6XrDak5pLeD1PnTumbff1eQzcZpPBbrU4wxdiJJBEBKGupjmDydGGXuyp4aiVFQw3mhWFyTkGFv9yHwvUf",
  "key25": "4BLrm2VfkeSBje2vquybytrKjYr4YA7yJAd2ExYeSgGs77KwPqmXPhWCCboLndQMvHsCwzVW3kvpxpzdbyZzfk66",
  "key26": "3PASQG5y546pu5YfhFMuKnokT6DUNwtwoGGFSaCi213L9ix6Hic2tdk747X1fdUHbTh9SxDruSaG2RYWkYdJ1ENe",
  "key27": "UNerFJLsyoLQ6FQgTxaG6NF6Unmhfhdau2wP3oAPBUsePCJKKJ5SLRsLqWhgvVkVUSG7h2qdDdGvVvU8qputk11",
  "key28": "k1EdxCZPpoMcRZzDqGC4ptVjfbjs6uY9BBSbLXj79tyXKN4kfZ88Ln5edEAUUeJPvfkuj3mgi3wxnSwFQwztiMi",
  "key29": "3ecYLWTmUFEvTp7JVuygZS4VD7iNNvpPac5PLXXRDLBtFLG3rHD5NJHrLYhmMX8TaAtPfwNE1eLDrhXRKLVXi7mz",
  "key30": "3BcCaqehToEig3XL3GDVheNd8G1EcCqUQD2ifU8WfGM2VgUSzyZhXSCMPy4YZmkLVPH7s85fgkRQp7KzH4K78Wa3"
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
