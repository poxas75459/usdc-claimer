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
    "4qThA8GvuShwh2MYtaQSKGfBPdur4oyNYPwtAmFRYwmycyZ1Qx4sphvqWqQ1gsoYPrxMq7Mw9Qy3XaH7L9NvbGVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPzM2aMFwRa7iU6hTWU5vEsneXxej6xPJ719fdJYsvDcoRNpPki6Vq1XcjnDA1PoBFLvjrKmbLLPX82t6Y1N4XG",
  "key1": "dmv22RtAgPMpWFiV3HfGvfdXVNFjXvznhvuPSV947xJzpK2mLfm4BSdmje8pk7egUoN2ViSp7m3oGYB2obeUMSF",
  "key2": "o4FfBLyQgwa7PSSW7iiGaC2rsDuUzwvVBxwTqQBHoApkqPBX3g5igrG5AD4egmTkeZgESFBE1mdLsnKEN9ruWZr",
  "key3": "5EiMcUvB6MKKEUbwKfSUm2Q6xnMc125gZSLfNJfNghHBbyb4cBRn6temmM6HVkooobCm9g8rYG4sGth2d7w6CX6D",
  "key4": "3riqhASbsXo3VSw3jN2Z9nxp6oZxbiQK2VMg6B381k7PiCnt8nSVvaEyZ64cRNxAgRm5awXxq5eQGATt98XzYLv1",
  "key5": "5W8FQvb5A6DtPRMBub5ouqAZng4kocUgi7PWAdgehBzadWH1GcPMZnvipEruoC7zvxaUY2EZP7cP6FnaxGVRboqq",
  "key6": "2yatWzwC17Y4VgpSydNWNioeF7RFEJVeF7fkjzfMmArhArNKYmJs2sBLKAyX4dSN1kX9xe64xSUdshwrT8KpK9a4",
  "key7": "Wi5RwS3z1LPTTaQHnbrNhDgzjdjnmwMhzDTEcXz85wMUB7SU1cHS7VCba9QHHVHuCxcbxtHPWVQ7N3jf2jypCcC",
  "key8": "2jZZfQwLR6yoDFX4mFJezYYu2ML5ruL9kQA6abD6yfzC7w4r7PW2itxzY3U2av2YsmTZjDRp4op9oUJmRohbBjim",
  "key9": "2WfW9ZgLkd91zSPR81vKYmc4zEhACdbrvEpQAhDogzrj28D1QaXzL7RYTjMYvhRKyz22f7ijiWvTs6zmcdVymmcc",
  "key10": "3sK2N2ce8yVpko8rgoDuapKrqeDU6eEy7uanUcBa4csnnMqBoRqcszwGNfbAXYRk2i1JV1Dntbkdxvv9e7iV3U1X",
  "key11": "efsvMyRVE2DEgyu8uP79ZZM62jUHeX9m8WZUvzEqZ6hp4pa2iiZBCKDM1M7Hof6i7CEf5XLhc1jw1RTEwcSCv5b",
  "key12": "4R5tgYATsX55eZpra7EGsZBK96k8US67QgLMr7unLKHmMZobCR3wR4eD4SBR76b5dswedt5G7YAX3WmfMTDUz1WT",
  "key13": "4v327VkzYW3WcpioqQ9DrA12wkxSZe18ikiwyhepYryhSihB3ZwVENEnCsgi5XaH6UWqLpQAef8qrGHrhs2g4Tc6",
  "key14": "4dBEwLyQe7gbxZb6VACBeScsxAaDjJswFcK8sWn3qcVh2NBsxCdHd9TKjFUCZ1dVDM22WrbH7EifhiJCt7V1DYNA",
  "key15": "2pch9EtHi2y4PhiWTjuacbwMbsGbcjhR8gmnfjb7YC22VtwXwxeC9Hda7pJpFxYKqCDcf1VbGQBU2x9rtH9qwKag",
  "key16": "5tMDnhM5xT6nFTjYik19YJtk6eL3ZxD1pLHFEiXu9HXgNqNfN1hRqmFycaFEaLWNvVNnVRkqCVj3EebGfAHvjxxu",
  "key17": "3sbZ2JqrJLs1TzC3zusz4goFoWAGDfGcEoHHPbTSVNLLtHMbQXctz489tzJtrag7idS9mt7Jn1mLmNncvs8zeoCX",
  "key18": "3XiWua1W8k5fmDR5ZTcWdasQP6G2Bzfc1Lw7neiEe6tZbmoEHe9L2ZSAKF4GS8CagovVxnfP11PUywjg9qymBqAe",
  "key19": "i1bNH8tiWUJrUZr5QgGtqnBP5MY9srLSmetaD9Vo2gP3UrnnSfnZgXxqPyPYfmpUTfaunPW6WMM4q1fDWeNHFWs",
  "key20": "4QZMLhe661shQgLmzr5xcRw3RSvqHDd7ta4Sp1E2G97DrPqNt6WMpbA1wHow4mTs4mUGwqLuxzxPkU5EYFwEZtV5",
  "key21": "RQcCGw8NbQQUexvxyF2kUHC3RaBqXVGMkL2zKBZW7Ye9ggpiokbC3NGh6S5QNzLhxLyPQSsm3vHNGECV6pqiEJ6",
  "key22": "85WDm9AzA5H77eMjgSsF3gD6yrWbn9kP48v7kVQNXThmWqXa3GUyR7REd6gqNHTfD6yHNbZPFYcb49MDfePy6W2",
  "key23": "5BDQdxNA4Le2ybzsfWSQs9LoB8QqXALnygUekQJzbiUap6gBNd6joyDgJdP34zTXB6jAAm94hm8fdTKDERfXVJDM",
  "key24": "3tNcuqYXh3YJitypTha4R6okVsMU8tqpegwcFk2Yfq5TjQkNDN4xb8TezYjiRQraQfePCBFtY3rgvQFmJiDPe54x",
  "key25": "54wmLsduqP8wsoZHoVohRDkQTp7iMySg3ZiGBDnrwURD15tbzjg4hQgWgAYhP8Wb8xtbrFxc12wHkgX4JqeL3S3s",
  "key26": "29PZruGVXBQHDerkqVKXYaowk17tcT87nH6wnVggKMsiqwsYMmgKEBKHnnrjTZCFZbenBC2fSQnzaRWiVtazFwvZ",
  "key27": "3XNT1h6TNdVKPYM5b9XFAyGwhU9pTx8NhV4y7u8nYrbdChTFeRPfMWJN6bV3xnD8zPE4svxJq1g1GBwcTn48Lcy3",
  "key28": "3GX1xs2BTwthNRh157ZHEAxRGZUr2PWUyNNSV4b4FWtzSroWPZyVBDumsU4nmk5zL2Am93m8kesYdS8qubQSKiQG",
  "key29": "3AXcSFUXtzDfkU3yqdmgS5nt47zXXLf1fDwvYHeTWEoSQ3sMF3FHM2Vzn5JUjJnDggwAmhcy1Ebf9eq1UFQeq3mD",
  "key30": "5eYAfjkubu1PvefgszW3Kph9Fjq2BAPEAHp2Zaunu3QkpCNQzZRUkMvmdexHdoLrheuCUxx7LELu7vNrMYyswSWt",
  "key31": "4Mx7E9jcfMnfCh4Su5VsvwZvgQz4nQHA1im32F4UnZwPJGi9bvAwDEnEMcsWi59Zd2jz8GQwcvX3T64VcntLEbvD",
  "key32": "5HBPNC5ztGpzypiq2mPYicGaGACfo4BCDASwoG5EbzPqVnACxQUYy3yue5W5mxQQmfVj3pdAKU1HprGRUsJNHRrM",
  "key33": "525RxdhabLsebnt4u29iN2tEkoQtMwvJ2SxTq8XTceynRXnKfq69sNtWfD7iugRpBc38bqjKrPtgkqDeXekF65mB"
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
