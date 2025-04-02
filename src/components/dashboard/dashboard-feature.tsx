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
    "DYWYjUaqTd3XL6Nk1ZZoeS4bTWojt59Kni8oUh2CQeET63xas5A6dGAMTnqP6D4N3Yp6WZ49J3hJgSKZ81er4AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GituV8eH3hbSRBhwJQYiKR1vt4pqAxT9TihBgMxA9hedk8JEtDDDoTJmGoW3LSTiWqvBi4dUNkpeXZ6vB7KSEg",
  "key1": "JXgc6cPWthUyiCFraH9XKieUZJ6m6cYNR5wwnTLv1vRaR2vD1Bi4VQT6cQA2nN8cFUfgZ7t1sic33Zaion9YVLL",
  "key2": "3z7ZwgvoKZsEUGhV3r5eoyPv97EwwBYWTEXjPjernEeRDYT5dWGEehaZ7oYpsxuidekTT3ZoTMmuY7WYChbDzh7U",
  "key3": "55iqpVaWb2erdvxFwVQqYXk2q7G5TRU2Nwd8Da9cJteghnwDgWU3MZkTfZs3N8V9HK3kpA1yMB42cUSVdcbXBR7D",
  "key4": "4B5oWRwqsSkA3P4MDNUD3WeompafV1xuf4DnSsf4opLX35e7kwziSAwP9bxotx8fAg8LhUojjrQckVn8BqSkFGkM",
  "key5": "5P51uNFqsAwj8ZFCNZ9t7oSJ9vgSykm1fPcvxjU3KmGyLUrLrBjdB4UyW8XAD9C8pPheaN4W63s47SpgWqJhWLAY",
  "key6": "28mPyMKFL2KhiDFzzs3hCYCDHpgDYHqgt51qdHPXrDfoFpagsdneqnuak1ML7Sit3sjnQ7xyUMBKDBTqqtSZC4du",
  "key7": "3qSvwmx4gJ8AVBj5KfpRsZ7TeBUfJiUTvonkztbcwZ9yqckorJzxmxzvDCa5BSjdrLH3ZKgZr99pZocV2Q7rmSJb",
  "key8": "2hA7MxaAkJqC71yX4fLQLgLz4vwEMmAYg88uR7gWCBXyJjnM6VaRdqJkwSCZKsqy9jiVzmezAW53JMTDYvRbsfcW",
  "key9": "3urvmebRaAfawm2QKTQojDw7bb5KGYCSgQwbFsG4PF5dk7ocfWFEvUeH2uGdrc78XNjiVUTQfbZJoeRZwXSGt4iz",
  "key10": "4u76Q6CjRb2Uw9eetfCi2ZTNBF3APXxieK5obvfq64Y2Exz4xh7ztL8eaFtCHsDwpQr1XAUMzjPxkEr8KvWsHWCh",
  "key11": "2UwdGG6kJ7boHmL8hsVg3SqM7RoC57WZ6cmNvVpg2in9uxJ9BU8dxxWJ1iF1rBkmsbSnLoEcfW6RrRWB6xtr48W9",
  "key12": "4aP2QsRKuxyBmRXobDp4xmLcoCHM2Z39gijSgjXwLnEL5EeBGuRTJ1KmRj2C5VoQM9h7g6hycxBYpVcdsMt5bWay",
  "key13": "zr1didCgDvjXHXsi1tK8DYunEo9yKMJfB3HCuRksbQPXi536D8PcqHD2KveyZH9vGFZfxhseBxx3rwZH5uurPHh",
  "key14": "339JMvru42Azz4y35qWqBLWgybvp2V8kEjFkomnbuA9tk6whnrgAtvCYbANXzH3EbqWDgAACfjHj6MHxRn2b47Mo",
  "key15": "3gMbUZxwjY5e1L7zFNc6T7u3RXrq9aTB8c5wCqifszxQmM9QYWvJ1fJ1yE7ppA3SPBaNu3Crc4nSfj6VBnMX8F4i",
  "key16": "59PYjvCtUewsxyCivFyoSpu4Cd4tZqokiBA6rVwYhbeq1YHzRs2ud8rkKSrzatnGdeGSZJqSjJmE1LcQo95QxF61",
  "key17": "2kdvrXEq2u4Dh9Y1EpTpSLebpP73bKd5t85ZVTVLPoGhPLtJRsNtUWUH4FXfG7Tayd8ssFvEkm2n36Hv9RYd9JBQ",
  "key18": "4mL7xuk3e4eaJMkwmJCw5NXE6XRUee7MtRGAWTwJVyzXCT4jTjyZ9JT8cDMHBbsBGT7SNzmMexbLXYpzw4hvepBU",
  "key19": "5tNmpqySyJSEMxmcgfdvjkEzMTymqv17b5FBsyG4iqTJujwPfdUZfrYfzQUN74UUFzpqUftKoMvCXTuF2c3dPFUw",
  "key20": "4KG8wwuiTix4wWdRFfKNFa3pD4S1EJtpQyLKWu8kviKYcgjxdGoXc16mszwV8APvafeMe1e6YrMQR2AZUgFotPmS",
  "key21": "MUKbqHFEtz8GZVFKuqbAgsViMMuyvtRiPeSoMbpyiCMZKidJfihvNTPu2QMX6gDQMidiC9Ce4BGzT2xWgG4vJeN",
  "key22": "2MSzsQQpD1ZFVRihqWJrXVXBdA5k6jj94S6XguNkGJmSCvn1YpDc2jqy7vT4oKJ7J7KvUG5mkRTspvEAQrLdA249",
  "key23": "4G8HRuKWt4He7e3y2pR1yAzAau7CDf3Bm7RrakqLLyY9yfMN1zfKM5rjx2eGnjHF6isWKcUDNPMRcrSmESg22qDk",
  "key24": "5TsL27iqQkC6fryMF7ZkPf346iZtPCQv8k2wh8KKzjuNGP6oZNzNDjvJmmNdUSiQ3e8eTFUxUafVSxTQ3Xorb1yP",
  "key25": "4P68JDdgKtrYx2DoSAJJbpK6eKXLX3vj7gEsm2TFzAUnXgthoh8oM4K1GJJokzvtsEWZsNRS4iMBVcoXGi8cegf4",
  "key26": "2MJpRL7S6pLfsLvxuHqmS6SB7UcBZvS7Di1y7yCkbCTFbQS3LYuBnadpK1588QNn7i1Puudk2WvfmnzkkH3VCuVM",
  "key27": "2mc2SrvXwweMktMNx1XLG14YqTEmx2LJ1c1ZgHAsYGqRbmqEF4nvAFKUtj52sdKvu18TAksFvJ3kmphfmYgTdzsX",
  "key28": "3jTofyKSaRn1hp3GdTUqijNbJ7m2vtUCWt2DvMCNbYatzUVxTDa8xmPAde2719o672urbk8B5sDBStfdRiyTDCsp",
  "key29": "55ycJnBsGfXCJdgQymbdqX7pGCjNKeaVNK1Qpayj5wnArBhEGufVPCe8gKpjJN7VCtpzAsbT1mcQWZHDNyUQZyDF",
  "key30": "aVrMfNJNucrWJRVLQKB9GiZjF4QSM8jv5kjZiKBa5YL1NRMDh7Nzny32Wwo2uzAKven94Qmt3Gs4394Xy2Db8Kr",
  "key31": "3A5ZCYBnNHTXaZueeDUiLaHgFZdhRJqdEJHyNT6R9xmreHivw5w7VrXyzWDerZ2gM6jhgkA7QVDxgmejsrMsUwbA",
  "key32": "oDPhp95ajcvkWeUwNsf4Ft61NB3ddFDU8jd1ZU4egqTB2EbQrZ6Xo39XMzBQhUDfnvNz1dyvrcJdfYrHxc5M8zw"
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
