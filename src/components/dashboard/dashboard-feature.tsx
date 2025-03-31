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
    "3DPtrqdNzFdcRuwuZV4AErGzGeDZBABnuNHnWQDbNB9mokkgFy6Bcgw69qmAS1XfBqNSfeTF3kmyMrqau35MyHsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FTmSefdCFAp1tMYKDNdp1YJDy3cXFnH2SFPCwZUXZVMYtjVzy3QzMK3NLr8TAuvKYNEyFg9Qxbtg5tSx4fL331",
  "key1": "H8bsE8kdBuehymSnDLmKT5AdbRwUuCd2cf6556Xu3VMDrD1Ka44RaXXFjyYrKif8EKnm2RnZJ9YEERQfz7VRJUU",
  "key2": "5AgScjfx29XLq6RzachHSukCE3WesySLdwbL4nmXH1eLey8mQGXR1L9dmeBeJEnmX8UefRc6aki8SDx1q9M9ayJV",
  "key3": "4FniNLpzCLSmtKk1dbEdvg1YnQdTowLLFRdNQsY3MxkCjueCzL2zhRXVEsMqzDbrJzkz1zhJX7crwkeAMmSDSvUV",
  "key4": "3Mb3qHjx3rpudjwnzK5DqzvgBFkD1maLQ5eZ2mQqpBURNDVQKyRr56WaRjJh5QritZMvH7hHLBq8y9RCCwgMsRbR",
  "key5": "nEcoysXNNqY6BSkgsA2bYCa5Rv8gqAwXf8tNJePaaJeNswGLU7WAWhQqQVFvLogsGQWEkeiK5JsV9T54xKStHr6",
  "key6": "2VhEcmwiqELiYNPTEgz3hM1ZMNsR6SgwwEHwFTfQaUtHCzrxeQJBXdQ4YJBGuXus71x62k7Be1VC91QEvp6fXgt4",
  "key7": "61Ars1EM7Tfm9MZwhtMVQxT9SPSxmBVXqj4eKVwQ9KaDDqv4y1iCDc4i2bQoqkcHJok9Wi9BdgEEthrTWXxpVig3",
  "key8": "5B6mmvpsK3sNYjQ4CGxUz7T2e9Y3rsfxNEH6ULThwjxuYHgGQRR8CQJrFPueKuvc3Rik34J1cKJuZbZrvcyy4gRD",
  "key9": "24VuVFCmbhTpneZ4gigPX9kPK9pk5ee7gZeRoL4SJNdYZmaQoUvT4NLXG7MARsVFvrnQRmhYwqXpbof7qRyrZbaK",
  "key10": "3zFymJs4UMcjxPUzZbBQa9bty7QR3P8ic14TcsvmCVTa2R53mLeCSQLaFUnjJGnHF7vBjHVLB9HZZsrABdDb9VLm",
  "key11": "2UvK9R4njnxdKxwFUUxVdQMTq2JWt3p9YKdPjM1vjRrMExCyZvnywsi9NfPAY7uUe78NVrhk7XQfx6B2k23qTi5r",
  "key12": "3jRNRSSjmsSwobPcofreNQ8x11ucoiZEbAd7K9ywGPdBo4dvw29xdW9JYookUJvSX8jtaVojD5cLstsyez1nVrsd",
  "key13": "nsVTmE7ZWmBrCQZSdXDzaBvTpX15ZDyXxy2sGfkYrGtHRU9EvMGBzYQzVGtQhAbSYNLdRPMAinPWqzYG2KVuCiD",
  "key14": "5MrfXpRkrUEPy7oAdU6NHQcPzJ1MkzxNvJLfj5U6WT6BCUdWAeoJ7DJKt1FLKkHpzpemv1cW9aAcpFFZNNjhnuts",
  "key15": "633exaUSgEdfoWg9Bnkj2Wne7Mj5T3oznAFHxurnv4ABCa9BED8wQdGacuYqHw5YpzH91Px4ecbQvJ6LtyLTqTEK",
  "key16": "ncNsPAgbapb839uci6QtsZxdT2PQsRgt7g1e5BEhYthTQCS982FGh7orPzbZVY9qZJSjM8uC5RxLaMrP2dLPTcd",
  "key17": "5YpYeVfXnxDCybdCQTDEuAFjNCPaPxh3p3EidJd4kMX8r1jiv576JXq3paZXJGqXnSeJNMsNoSK7ekN1Deg9rWaz",
  "key18": "4rBqMx6Y6myhgfQSRhTsneFLX19fqeyqudgqpjSSyYjA74B44wRfZS3UNvRL5XhDjdVSaVo7NmFvrxebW3S3gzut",
  "key19": "5MPkwsgymuqnyCKSu19bh4Ze9UejhmoDfVVCU48PpqpxfYnUjKxsKK2YsVJ1s76aTyDv7R7zr9rmrEhwExgcDfP4",
  "key20": "4nc2aMkAFcoC1vKNvAUcckx2KYt9GhPxAF8yJEfn66UCXrTbzFSC94Twe5bWjuJ1oJ2jex8jPM8q4nTRp7Q5dVjo",
  "key21": "5tfLKNUN6VUEZEuZtGwtL3GfdYmD2u672xiwwbuA2noehNVzN75xCVjLXypnRvEGDPut1kfJMzzqaLZ1NcMbpaUF",
  "key22": "64hbGwsfit5iMwwN66JPU6tEFp9gGa7PJj9J597pApKvpqQWqyWJPMmh68ooJnzT5Mh1Cu7jkMm6vjN8FZWCmWa2",
  "key23": "2LtN3Uyog5Ee7XdtaqvUwC5p7HW4j1YvrL3SBA4HwYUDGBpXWes1yAHQCApJMgZnu3RfebiALKttNyzrSEXfRmgK",
  "key24": "5vQA858omjPkNhnfLmLmQfwCvdpTdaSgrdpNShpiy8zhyYLJ25zGcnJ1Ui5Lsxx6UXFbRbgfmay3g1HFxQTWj9BZ",
  "key25": "3kPY3Jae6FqTVuaS26sm8T1zTLYA6aPoXarZZzoczrS4jjtCodqdfLaabz58hceKQPv8v3dNuvjv6zrTKw7rDrQ9",
  "key26": "2KzBbPbWkhGtHRMPPjtonzNwW5XRMiXBGwgoeuTAMPBuE1Pi4swyS73juuGnmteNBuhWorWBXtfgCLsaZGUcR513",
  "key27": "3E9CZnzSibhb962hniVAm8V3tJCfdwNRd1q2maLZ85rGjckDdnhgnjur6RsSNr8PD7o871nrRAkbfuEFM5LdCCJc",
  "key28": "3GJqg5aT8c9hBndkgoXSBfgxfu9WvUfCAs1chrz7dn4ABuW8XHA2XXfotU8Sv1j1kmTn9KYo41WcqjxiLFd6Y8jL",
  "key29": "61j5aMDxVvoZjaNo6qRC7nUigA5TtdM8zUvmK8dpEFkUVFwC3jW2nePtuwGWv59esKvqdNRkByyQNse97TMdfZHw",
  "key30": "26GdHuyiD3EiT3F8xL9EBpA2gk1vVFpmHcZPYSnPGAybbHK9qPg7ViZTdw1XYy8st8HHh5kumnM24WakgFWFeepN",
  "key31": "YavfsRCsw6oo4WuiNTEdNyNC2b121AcMBcun5eqx3PAaR7P18S2zwJ2Xukf8girP7DTsVgwUxe7mJk1sBAZ4J9u",
  "key32": "2ADo3zaKNsDgdp1Yq99Q8YUYrGh6sJohdqCVLJKYhZ4zgUzmy2VRu8b3PzikLu2WYucVUQ599TxxbGe5gPRfoEfA",
  "key33": "5pXKRq7QHFWD7rfa5fk3S73mFWm4ViDegvtu3xSu5arqzq1rwVBQxPtzqXaEWvEeg2SRKLyMZxtFYy7j3DQTxmrR",
  "key34": "2WeFLLLLTVyGEhGvSyreQFZRyQMeDEHMVxUJ8FAJkWzvDYWcxLn5YYnWaJcD6AEBPVY6gHapWJymfnP35XXriXRH",
  "key35": "654sWcrLwx9WdmuGK6H5ECeMXe7rgAwPRkPPyrYVebQvbimkwbcQbdUTNZhSJoCWFcF7w87j2ZtcChw13V4QbEys",
  "key36": "QvkSZ2oi5LKdgZGq7AqoRXhhQ8d5gfzsc9MiLgbV33mzxo6t5Q4rr4pFgiBrJqRAVFKBPD8TwLEUcXHfY1X8Rqh",
  "key37": "3WjqRc5EBTRyA8gU7gBEzqiJ6J2u2CyX5No9oM2WqbfkobowD2ySaaCP3y9vSbYTrnoM1oA6a3nqrZpqkk5XFDkS",
  "key38": "4VbTXArvTS5Dy9MZR6hcQWB5HFCZtMKGn3wBi3vqGwchHoxSP3SGKTvn76cK1NcdJ9PwKTXei6JqsCfvc6z97c5u",
  "key39": "47X9Zw4jwJouRKWDDRS9xip4YHS8Yk3eyRDrvCxSbQenYNTcFfyf5MFq1hZCz9YoUnwYgUjyo2k2bPjycsafjh2T",
  "key40": "2mUdPWS1PRtBXpYACVX2G1ug9pdAHhUfEf7MchAnaxET1jEMLdNEnFp4qepRaVSNfKVsDHasobmKjGsdtecTvKa5",
  "key41": "46kNYCnEYMmDZthMZDRK1zYasGjJfZKfyrisBFQT7Fz53KozPPEwoVkPT7Y6oX1ZGQE7vGSwC5eAx2HtxpbKs7xq",
  "key42": "447p1sUQVH1wap9izpooXoR4QhVX9wcALb2E4aLgsk2nnYz9ozTB1WpWxFgqReKeFeszQUqapfuVgLTaUCgH79Xe",
  "key43": "4vfDWWS6vgxoEWAKdu3wSVwqA56LEKZSq4SQAYpnM6otZ2xFjihDLzW7BZPE6SMG2nzrRaqfNS3ZwXccqiNTPNtN"
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
