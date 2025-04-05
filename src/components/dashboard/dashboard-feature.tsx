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
    "cqQXZYjACty6aoR792zitBnSXCW3N2RfYYgocMnrqmNHGC2HybguV1bKwej2jubX5Gr3ShSaTDrFTxGBZhNN9NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bC8RgxVWJ1xT4QhHAWRf9YMrc3YXjSmnU9VWtFrPEzPd3qGDG1j9buZpQVumRZpnuZ8Kf8sYXUNPwwYwEJA3wyW",
  "key1": "4qtax4NK5EBcC2kfjkh1gBNWRy8KYHphiFZtnkAuP8WQToufvcZ1GJ31tgqWY3rjsUrPr6sv4XuQkeZ6vWHxoVqv",
  "key2": "29iDV2p3YH2LtUpABj48oDK5umF9uDmzZ5QiFa3BKJamXV7LfuyUuGgdTYdYX5E7VbEk2P3ZuJR6JJEDg2zYcNur",
  "key3": "3o4vrXTLsVfwUTMXBwsmEaohp8SQhx9Tnt1SwbV7pGm8yW4rNXDsk75D8ExZMn8PXkzZypKc9MLA4bAdxBD9m2J8",
  "key4": "4ZCU8AUpbXz1n1XiVw8cwk1kD4CC9sv5ktfYsaCYMLAKoH81Mx3PodXnoQ5Ad9cjeiru6GDLNL87xNuUy8huk1cU",
  "key5": "2vXVNCW97tjDRCB1mrcv1zmXjrpzN3xCsWs1qbMHNSVaurwfZdFciXphJ5TUcZYwfzkjcoA1RkhPdJ51dqf44Fnm",
  "key6": "26emNein4GbRTzzWcuAw9RxMWUS7CdDbKPr8KYgQBPVKAfics8KrTcszEaAq3JGx3o3msmTu6ekHWzZJPqUwx4hf",
  "key7": "2AGYEcS7ecs316pEJR5nNrxmY3yAJ1mCsqWDrjEg3RBEDF2YswQ8REJLLorkxYf4FsHQmUonDFhwNgjEJeYQdXtH",
  "key8": "2ZwV9DmaS4nF8HuGRaoda8Z1pssoEcYzntJs1o6GbcBHPHZBAkhDrBYGADCHtoP4bEZkEz5d8wsVMz7NShqTiiFZ",
  "key9": "5Yt7gQvv2J6ZTFgGYrtCoJGiDzPfGfYhf8GtqqnvKSPzWR6jffodcuTBhS2Vj46RgeTUap62dHoyWtv3rRxDvfHE",
  "key10": "3jDK17nWaYGTVsUGHKNYZQXDzTo8prNAUJfvsfSYaBGk3B5f8edSF12s2K2QXT3a5xuHpH74DKqQvQS97VPJB9wH",
  "key11": "2ZxqGTqbdvwvK3tEc7e71BNqyJgquVPEHtZG95tVHzYk2i7rsPxqLMZcqnuzPbmPnszJj1KUoPXBPeu68MYN6cvL",
  "key12": "33jjJv9V3dfXwSFkUHw8FWJH9zEAG7fsTjGEHPWGUEyXBuBiRFSm7BucADQ1ZnCmmeamZaRxGfjZNPCLPvmdTsdV",
  "key13": "4GpsSorLhrMj7qmLNTCGoA7qDzZkcbM4egBsKuFbEsWo7JNHHzmQ1w8J7vprk8ri3imqQer2jQ2ZpGHjxaXbq7gD",
  "key14": "4RtqRj2S8gY8UWXUxBaukKY3hQ38LKVnen36mh2BaAadJK3zutjYcgJL9p5fm5cekcyb6zaFNHhfYxYA8Fdo8Vhn",
  "key15": "35YXecRbnXyUup5LGGWeGdcc5keLspjgHkqLZrAQAucuWF5ZNyAtMkwRz2oKDdJFVpP9uEjD48dUe1g6aFmJzzJh",
  "key16": "B2X5CyD6VNZtp58ek3Q23skGUa82WDVi2ECGBzgew3DeKgdkxmRfaaGQqpTczTEF9nZAAs3WgKcQFo7BUVCVbdd",
  "key17": "37pWXhQX1z1CGfWq9v5orGmUPcZBMBWyrmwJHZtVer7Jaq2bHmSSwbTVbMc35sr4Z8wBR8QHvYjAEsuHYY4r6P65",
  "key18": "4hNCEpWfGEMAheoNFt8N1EB4jEDMNPEstkDmCs9HBadY2yzJugMCEz4q9ZZD7mCSfyzfwFh3MFYRVm8WNSkSQpzp",
  "key19": "kwPUHMGMQx6pA3aPNDjFisboTByopiBoSUumiouunp9XdtvsJ7XV21vX6YuvXDUr79oJacgyDHPUB5HmoRdE6zu",
  "key20": "5PbwM6jyyzJLUYCtEf8Bvxwqho1rmSSYpq6fJrehhigtM4JRESKKojEcxYCWV4K6rwyfe9q44jjQHELh6EienpFd",
  "key21": "5FJ3fhCmsAaw1gRTsb5KhkMrWFaikxjpK33akYvDFqbEDo1xTWrDsMTfMEFZkkD7nSowwBBTfi8zQYNbTkUShTyF",
  "key22": "5js8wECutTFHgHeP2nanCQRQpcfgf3iVQ9zK8tGu3U1YBLYcJ2eChKn2WfPGjzLi73nfFJUaQpyFHSrUsonPSXEY",
  "key23": "4GEEBgXVCMozRPkmNX58tN4oAHDYah3CfNp17d1Dd453JFFW76TaG1DpeMW3JLAsw7R23Vp9Ce5XWbHU1KBi4BWA",
  "key24": "ASphKV1iXwnde3xHowKbQVqqEJzZZ7U57iX8nXHpqZ5qA6ox97MMfWq8ZXtemQZpPjADmWpJAMbmWquTJTsUxK4",
  "key25": "84Nkpb1LMkyKp23ap9V3rBj83AjF8Vk3BZXJGdHydeAwgi91h3XWLJRzw8bwtTiVkGHvtDNMQoFfNw1ix5UmVYE",
  "key26": "5tU5LKY9x1oNy189uZdMoK15jX2SofjKmRs8MVPeFpr1noyx4WbzRjfCjwibJg6nMvjEveCMPWzuS8C65mSqSmWM",
  "key27": "5kbcMDu9TmBo42efEWhWyZ4mYaer7j4MDkbmRq7gR2J4vfUp9LknBzLnGGU9YrRFxs6Cb5nneVzGfTTxr8GHLozC",
  "key28": "2hPdrnZhb6Z7QLqy7muEmyi7iTDZvB7XZnDxUim2FcYPPHpJsZpR41KVy4nsqMGRySQ2jyfMAnfr83dujko9574w",
  "key29": "rnsY5JvM1HiQaX9Bezss4vSUP3EkFzgB4553qdg1MoSgtkKVhz8jkLYMN8uPti9H5aPw1qAWQF7HDwsRizXe4AF",
  "key30": "4e7vYcEFrCvwQTLFjKXPUs8TahQHzX9VEs9F9aCeVivGQ5WVWGMiaR4A8TfusFaYeF8fUdD7HNnwuhJWe2KXj9R4",
  "key31": "5NbZ4jq9rQKAqcupaHKEWD5g8CqeCUHFeJKy6gBD1Gd4GpzLHhqzFNpPTQoNx8quKxS8PYFRoAForkBAoq8zha2f",
  "key32": "4d3fxXUNwTrtRZRSkAdUpPPcx2PYQmEMqiZ1gqpAb824x6WHmYMRYDc4WC2vNbhBhFiQK3iJ7cDVBmHM8y5CvJTN",
  "key33": "2jzSwDVoRCMmAy63rSLpQ1vAVKVHRNJmq8zLKZwwGE9uL9bW1K8xcgJJNGUGVatM22RUczPBCmvPavYSk2wPXTjc",
  "key34": "4YtB9qnArXzS1ocfD749L5yYG5F3G9aucwCLANUUWfe8SK6zHV3U2GxYhMAdfw28hvvnuX537wYEihLgrqejAZ1K",
  "key35": "2DWbf72KP4zvViPLsrB4vyUksLMkR9WQZe4ipsd99ogD3LiSssYeDdJmqC2nEtVGoxKFPZu3xmtbjEDapbf1EnrJ",
  "key36": "5dGS9Zz55pvfDwRPoB2GKK1LRPrPxdG5oXoWwqn3T16TPz89Xa9GEskMikf26gYEvM67tWsTzymXbAzapbfhEiWk",
  "key37": "4e8NExZ7Ve6oFWgniEZzriyFKZu6jB6ubxTwb24sMoJiUPmLXdLvXcZJSiaC5TeWjKHzp4LDoaeUm6GF4v5Uyxiy",
  "key38": "3fU81FdMxPERHCekQERFgX21w1rLJmCgoMTbqJVo2BEpvQNYDCV27sNw1UnPFEXo1dykQjcmDhSfmSqmVHZwPNos",
  "key39": "5oZ997xqqukKodGdc4QGvexMeHqQMNGHSQwSbrTGtAmoumjeJUGaKP1kQfSDoCgP6dPimKFGakLRUKZg74zQS1rb"
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
