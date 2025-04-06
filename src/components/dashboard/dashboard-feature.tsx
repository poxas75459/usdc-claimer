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
    "6MiZDqpTjxokEpVqUNFo1hyqvFzm6w3xgMm27HTVHPbq3WMSbdiXQyPSapNeSkbPoxadUjLC3E7PgjivX29XQTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btxpU7jC92J9q4xKPhvW4VhuvFgbUsWBFPP68g4C1VAJScdgvPdv5RGthLqJNjFmXcKyEXFVaMFa7M77GGS9ew",
  "key1": "5PbRLAdrfxt4sFYxu773RiiTNPjbwhYfL7e8faJHKEox9LL76dZrpkKZAQSWT6Q7Dsfyd9whQYeBermMRDbgEUaB",
  "key2": "37KMUZ1a34iqHLsCinfE4mWjUL2pzkCRtBp2QFU6N4hp8hZEG8hEAccmGrsHpZX5s5L5mSoqQG7rhFxDmzZ55pnM",
  "key3": "5j96VvAiqRj2M71T6VeS8BsYoGdbEQCLvFHXfmF7vHjxH1v7H3VMtF2n6VAjCfVhNBytSKsVJzyhxmzQ4sq2KGLx",
  "key4": "FiJ5Eu2cZQWnz6DpdFLNaCc94HKYXkSGPv1y9A81Cca7a4k32YmmNUH5LwzaoPgjW5UDqgjauZDS1dfqRoASJ86",
  "key5": "5cdUgHJ71JWHQmTxQP38itHYXLXiWBfSKAKwvXqaq5zYVNB2G8KFnjuvyzBaEBdQrJHKeCcYpc3WMjBWo9ANoHXn",
  "key6": "KqCWEo8aBG3yhbKwvHEpwKiaCeVpMLhLJ2JJi7awrNXjvbRQ6X2b6oh4jZynNvvSaRs1cQhUzMXCpvHNGK3M1cB",
  "key7": "FMFNPYCmfVDkysmN9DQcS1Ew2Z7wFdYj6dEMYTLAY6J9z28Ac2wEdezbhq2AND1Umdv2G2JEDCgiQQRywneRbT1",
  "key8": "5qeAQC5dZthmVYS2Z3Pan3yrGin2aTa7v8inudzeNMZpSFwdr3eqFXXvhLn3XDNt8DjknLPkY3euhZwMWK59YmL",
  "key9": "Fb19avCuN8tP4AnY4ZkUp8MwU6tVhbmnVfG6jYEeGAxByM5dJhtcvHMjkqqgnoa1gBmxnt6htxUFJ6Mq3erwWUR",
  "key10": "5XRj9PtFBm3R1aL4JQmYa1kj2WxUtsFUhfjh9xhZhETiHEJUf3Myfv4NTiWrkTqk4zgtExxUBtUnv6mcsBEjycDD",
  "key11": "57iTJZF3f2KdioSAgvYzgD5fbJ9276rs5B7geMKVMDAb3DqQnu2TJ9Uo96bMwtwzSfQxZezBhFwUBtBDrjU8gR8v",
  "key12": "2sKV9SCXuPtcHYnZQQ6ymnJtvox6PsYpDRkncADAJKMwWuD4AzKqqwCAeWzV38FN2CNHzUJVtX9b6WBYmohzbXgC",
  "key13": "39ru6zFwKXN9JMynKvTJ7MQxD3xGxLshEVAdqFttgzKpao8Yd3LcZtgdo51qjeSo7WiYc6rb3bjrj8fmE7CLU3K3",
  "key14": "3ecFPw6rFZhLdKKiARZYtvBPRe8sRfsKXEnDBcL79qE3wXfdrT9JLV4Tt9TfPcHhGrpCDr6wdQMrMBJPwDmykM2w",
  "key15": "3hiQtmFe3sCAEiLaVHD4adnQxkcGr78cdJ6cvFqDgEpjEYnaAdaxr6pU2A1SNCZDeCKUe1H3rufeZnEhiuzzWZKK",
  "key16": "EuVPGMVbchXMovsFWEKkb5hsNebcSMNA6uKFxddY51cqy6BhMhXcsWLTDVYe3Bv7nu6hZEukREZCwh3Sk1jzcsj",
  "key17": "4BM6pN8WNyQmGfqrKoAHyP8CSuZQBMDRgr3DHSQ6Uqp6t9Lv6vsuHtgPDaUgUQVEby9fGLoFm8vx2W8GCFqReNti",
  "key18": "4uyGKNxp7FsTx7jSxJqkVPVcvNnAPhhpCWe1DWchQBM8ATqGrgzR6mU1baqppNkNsykppKHgszv1VmTvDYvgszSt",
  "key19": "DC3kkiy9QzGANe32U3q6n5rHA32bJcghH5NfhLwA9NWUpXt1jjES4miSFtRYDTAmVTs13NcGu9W2p9zy7j4DN2Y",
  "key20": "4qycei99Z2pHJ4EHDosiUwefBjhfHQKgMWG382J3sUr87zbficoswBtiJVQqf3f9yMaq8VYpLiKyB7VGGXGy8wdd",
  "key21": "3Zban5AxbXRTJFrmAkrdBgz8Rf8PFQmz8kJSL6XMFUM1tvAb9Six935RqNd6hjYYB3NU3TVCthLHfWTNfJhqzt85",
  "key22": "65z7VQKFBfWotA6dHM6ed9oxyPAhVAqUZ4GyD5mWFRhaQ1BeHq29SVji4HZBztXgXDPPgeytirwpjNMZXQAH3Q6T",
  "key23": "3h8xPWBdCMNvSfGBPK2Gh6s61YxJYJfRBbtfhq4QWveWNxTAisrVErzD9H7WcsLrVrerrEe8dRtUCqLo4TRwjvUX",
  "key24": "5GmrGXApBtT4rCs1CwLfZLPWMtyU86y9DDzZMwKPR8GoiVmLdMjFcpsfDcpiaKQxggrsPvdUDntVNfWvaG8xXCjM",
  "key25": "6sGPTWVwW9Qw7vCEPJC5jTgcLko7akYkUUr19qtVQQ7yoKrWmqyLdtNNqxprPHpQeKfDmHBFJA9drSukQwe3qZ5",
  "key26": "2XWQwqnHqJseqZEASXGrXQU3hBUfKagPSF5B896KVmQJQJ44kNE4TELnTsNjGzZNh9xA24kyapyQ4BBvbC33ARzD",
  "key27": "3hG8L7BuH61sQqeP8NsbT3ErK3Mx34vAHauCz3vWgb13DVcwv7rLLBBU3mi3wac3tcGnKa7qdgdUnhR84yUhwZUL",
  "key28": "S7xnodZrQKjqCC6gYaLjzPzvMohbzCUnuWAkkrKUdADuZsjFN2PZ2MDYTrG2LnSKk5MeLR7DLWLFfysBFWhkQr5",
  "key29": "3WVfhboxqANThgqMUKfsH4FonWdBp7JjPjAv7xZMUHz4pkeHBoXRpEQ3QSCpsLrFzgpHYJ8eq8a9pk6mFNJDFg8V",
  "key30": "49drBbruUp1PVWzmeDrjErcpm31x1WWK5hpfHrpFGjvpdj5tepsygdKh7TcF3gDHKbX8KEsg1vyLCvjbXJFeK1tA",
  "key31": "mPBRYf3CBUeCJL5yZNU67ibyFPJJtcDD6ae3TtQAbabfeePZDYFMwcrLHzVT6uiBt4E3vaGYiMtVK1QmXrAbWKV",
  "key32": "2DNXkAyZwNUd9tLNMn6n1WmpsePhWHGZeFAivxSqsmyRi8h7gzSnsAfTvmVkP2WkAf1Cy7jssvSj1U4ogKFRhwQ6",
  "key33": "2wxpLLnNH2Hq2qgYSC4J9S5msBtGbDmDseAUnnWHzQtioue4w2fjBLmaVJMW8AUFRTzbZBoLwALCZjd4SVfU4cJ9",
  "key34": "2jkCQEVjqDzrKtmgzAGE5Cy1dBQEZjRguuifxpyun3kv5bkVQbkFWxMNzW3b2MrK5BpndR3uxhsNNCw8zCbk4Y3Y"
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
