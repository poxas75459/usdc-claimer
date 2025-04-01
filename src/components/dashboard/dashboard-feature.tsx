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
    "3C5Dx3sx2PoQMWrFnNindeXNiLUGZaFKX58ATKpkMQh8YstaqsZwXMjrYEhsCgPZdpxUq63ezR2kdUboF5ATXSbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfq4Yy8kAKUguH1DEnGifnnnQnW4UjAgdG6w46zWB1T9jeMiZKyqju8rTgtw1ZdtyKRBBpSTS3D9Kz6bPyRGYMM",
  "key1": "3xAhq5ko8o8ZaxCHez6NByMQgoQybmRVDq8jChTvqpMVToKVkWz5uWzvZvbzyu2XAAqQ1X7m7Fa5JnDAYeYXM3jv",
  "key2": "4sU3D62uCrJGkitxFgXuRnSJGzvMJim4QKTnNWGWYwJeMBZRFoKVNt7k591TyJiktSzU9ZfBuwFap7qoWcGy759P",
  "key3": "qnSrDrcxomM88SCP9vUykhGGZ6p6yqPHdMVyPkHkiS2PFUheRskxKdDGh8AYSotidQYsWTcw5ZQ46ocT6sXr1BV",
  "key4": "31wSCLd4bMxTCXa2FfYTGCRu6x4Yh7W1HT7Z3aWTxXfBuRq4F3qbRSMM7fbxiJpqUCUPcHFb6x37zfWoutsAvjZi",
  "key5": "2qzmRRaSYCDqywMdmf6bqNqb1Vh8Dv5gBLKtF4VFYdY7LSTPSCaiGC6UqiAbnb8GYgSaGaGBydvmXpFzN5GZK2KV",
  "key6": "4WfSzWgPa6vvWZL5HbsdnTGAQuZpBh5rr4MyfH7CtLbe2vt5LrS8Hb524JqEZZd1Wu1dWGDdP7Aqqi48b1qCshH8",
  "key7": "5zfjvrbBo7t5SMjGrFSgik4yr4rwqf35JW8ph3UJc9KEZcGabuPoQsZfc7utWQHVEFVGHich1yHZyVNARmoGRwf1",
  "key8": "mrcrVJLdKvNhQNebfmfEYmYdDMH9K2sne2eFfZ1RaU9VB4KFj2wpNtTSeqaQeauYNGPJdy7FX63EgJdvNcC1V2Q",
  "key9": "o3z8u8vPT9oXwwtbcR8CMyh2BpPPbdGHSRUwrFDbmtnpqcj6zAimhpV6UgHB6E7oQu7Y8hRMnwBr9ZZD5tsiwBU",
  "key10": "66pnH83QW35CswAf1Ew3WczBbLPnkvoZgmXLESiaEooEdB1yCQMSdrj8umPg4q87LwbUWFodDxMBKqqEWqsjJzTz",
  "key11": "4VCh9XMtgpirmrWkUo2tTMxdnnzaTuwnaiiRZrKd4hRzPhschXQYuuXGKMSTqWJ7EfFN9UBXjD9fmnuZpKSRV7FE",
  "key12": "2hQ7nnyRHdk4UERsoLERNWUjH3ern6TLo6JHVJAEpH8hAYng3sQAP7LDUv3ZbYNychJbyBYPQkuG6ogQqqwCkofu",
  "key13": "3Si9AmhLeoNyXp7N5FVzxJZqwxKmWSvSmbSCbuMABdvLZAnZbMguXpVeVzqET1etPv8kzEGu3uP9Y7Qi5XWU7tQs",
  "key14": "5pKAAYXGEHXgu6SutaXf7vN8789FiuSmatcRaqg4hrMLP7n57A7LzDWzMAmijnjoP61aXo4N4AotFBkvgMHexgD6",
  "key15": "2Vs3Dho7o3AzrNARqj5h1y4hKTzjyKz38fDEtaBHmVwaoDg4zS9TCMWtAY5dGqpnUFSb6qPnPdYmrCrMkL6mb3sT",
  "key16": "39JrMbU2ZJnNVUKmtTQDffPFUQRpLE6LnpcGUmUEuCcWTrfbHXkGA2ePVbT826uaHiYbEisyVPsD1TN47ck4a9aq",
  "key17": "3Q6nDqhhqQjy6uCCjt8SeLDEW3RCrTKJ5G1Kfv8QcMJzgWFquJ7WUdVLfTwYXeMQ1t9kLQMiSK5cffcJLWXR4oaN",
  "key18": "3xupsysvkNKJFkAqjKiaNp5miTtyapZXCdRnxbkF4GKz9H5NwqE5W6omAJoWkpauhm3oq4kPCLnKMg3Rcc22X6hT",
  "key19": "41S91MtrKDihAQMoQMAZoR8WUBiL5Xm9qxbyAx48SZ2cTxWWoS5FUrissfx2eZ12hcWicz2rUtCobbQ5tT3V95nt",
  "key20": "5swTRngME89L1uQCFyyP8LJmoRn9Y6n39NY9yvLvaRoFKSKZcSC1SEbrzP7AKAeX2hTnKuxMnjGF6hWL4PoYuLXG",
  "key21": "3We5QXEHR17LBwc6c4PtPDLSzBTT34WiVzJHWQdeNkzyoT8fiNVSceB4ebNgzN68p2PqfPyndu4LZXSY8SfafXm4",
  "key22": "4ybeoA1MeuzAbafnzxe3HgVv4DKSHonWdN3Q9pcbLHFGQZf5LsHLmQabAiYR72Yqafocjw7ouog2QJXFj3KqwSAR",
  "key23": "tdiQSiYtiVsd3a7iNRgM9v9UWvNJtrRdi5tEq62uSBJqCfwUa5kYXfUXYs7JsCZw3B2Ce5qyghuFa2u52JNrm1B",
  "key24": "5uwzkxJG7BPhPjcb4uM5gA1HotohQvEdnNfwzHSMKuxfhSe6dUmU7PicnntmvDK5u3wGfRnhMekHMHqkz2nKBoFb",
  "key25": "2sWN1aJRJewQwrhmKMvv4z4tmRELMcTMKprm4Y7EjzGoUvQBTgxHiXDUZUo2J6x27dP7CyknpwzDaGhdRzPXrAkz",
  "key26": "3nWqDSUeWiV4d9vCuv2Ka8RWLojYVK72NWh1KwChzfboYDfKiiqT6nupz4LVfP1THuvd8kyTi4AKnecCKwyrsrsh",
  "key27": "3dZbKHPjfJ5HswgZ4otxDUmzCuEYe77ufkQ1ZCHwtL3tefz7kbeKaSECjS3R8VoUSyGo7G2bj4poPvs1bPFC8HMy",
  "key28": "4Ky7zTMd7kCWDoxQyEafZPkceXKRUVX6aCyNn8fUpJwEsjysHwbBbj7Pk7rTD23LHUa4PpQzgFTGScBmqe1fq59S",
  "key29": "gYKutKeobp4kmNYTSKzJ7xNn3cxREWBtVcDkdARmyiMAQ5sj32SraA1FALRJvW132GTYqowQJQNTV3SsWu3gS8i",
  "key30": "22ZbNvWv2jTEZNhGTC3p64ec2Z5SSrcAvGX1wuT5x65BaLDZjAdt5NMPeMqFQwieAMjjQ8kGkXcVX7rCiJCrXaYy",
  "key31": "4s5K7JQXXbArSmsRuHrWkpdV7pB1QV2cw2ehN3QAESqvGwwqSG3SQQrkgqsLDncnXT7FTWbstYwig594GzbfCcoy"
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
