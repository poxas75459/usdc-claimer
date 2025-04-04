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
    "53TLCEJwUJmnM4oKiqxdqGcLj5bh38cBs3fwLHBBbY7k53XodHL4qhkW5obBLcB9k7R51RmEPnZLkBsMs9787AaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvrCjwYqNETXpEXzwbDW61dxSgi87g7xBjMBKwbTRBKw3inxMKjzPxomkUj2rJETUJBtzTiRwSVEy7wbpmvMCVB",
  "key1": "4R9o8yaKshjRWG5PPaimwSpHYCL1cjmbhcfn6aAw6efHvwV1fnzkDbbvVtF8Aq3cTjMRMhqn1Zy6HcnHHzXb7f6P",
  "key2": "444qXsKYBLU3W8UrYBhQLkzizhPuhyPNCweS95PwWKqjPGrnjZmpersLwZoLjYH46NyXUMbQ6Az5byL4gASJg3bw",
  "key3": "5RKtW47kPTUWh7xLh2kckrCy5yffB8TbCkB7CA3wS7ih6djoow5pvjpZAukciKh9g2FMAASS1ttgXqd2T8PsFhrA",
  "key4": "66Jj2on9VChZ4b5TJuHJqa59bo66bPyuY9gGGwUrHstdaUvCoVH3qJGLzSNjGUQysJTshpkkXqmBwrEpBLp2Xj6q",
  "key5": "AUmHW42yMZnu6Ub8kECfYtLUYQ2HHMgco6JqRPDh5PzqDyB4Wxmp1fi5RCpavGCxEZ93Dm8bJvoCgdVNeMmApg4",
  "key6": "2TaWbEgtLrQgN3SXTiyMNfAk2sGbWoUDRtichmRJXXBMrAzv6QN9LZpLRQ8EYgBWBYW7QZRS4oahrsqHYZE62Nzk",
  "key7": "56tam5q4ohBJUWAPeXmwXuZHV5uf4Y5YgEkaRQznXRt9HRzMJgWzjTkjBwLhjSy6LhAHbwwuZHTtW6LDx3L9kc2k",
  "key8": "3V3VYYTTyiz4xioNw6NquEgRUY7sLucPzCESSNowZfXkwLqSpZbxjBjUTpUVmzkuyFqBpebaAdGWPXfGRJMkmkPq",
  "key9": "TJaEWcfqsooGJ5SWsNYWUh9wvZJYay1yrMCakHCkeUwknfaZjmvToqfHDt8ZqUyDyZ4cF3FxrrWCrSq634DY6cv",
  "key10": "5ZWjZdgxVWA7oLUYC1Yi8NSwkbsx4K1PXTJaSceJaBjdLRyveLLv3pAF9tz6q3rb7WhZtKTpiwzjK4LubyeJZsYu",
  "key11": "3t6rmNpGKo4McAdTtSNRtu5EYrLAVooywurgYLzWJqoTZsrzRpKGBwUmvtRBBGJ769wwyv1rojwyuH7nsYUeRw6L",
  "key12": "3Evjmj42pH474KSY3vwNMMBgLsnyPbWitUjYmKSspbLtyVd4pnekAtj7bdfRB9h1hWFjH7BoQ7hdavELXVJuA5za",
  "key13": "5YZhjVABsrEeub9CN6KzG5XrUzurQqYfy8zQPqZJMhpBWhMLDuzxN1mws5sAnidaXcTM9aCwjiQ3RzTx5XVjvHCk",
  "key14": "2a71EbgB55etBsZcKkXaLgEcPf7vKavA3UBpBwAKjiUhabfJp6RrQv94qG6sZrF2dCAFv37DQCmzD6BsrPBmp5PU",
  "key15": "53h2Fo3zkNTdrZBW39G1tyYKTnetpc2uPUzPzHaKCnDCDMcQEwrKnGG1f2DerH4cXPmH28AiCfLxrRQ76bnx5JLq",
  "key16": "5KGbbnwws5SkDPfLZQLjcn6Czy768PHrG4eD7ogLUKb57FVveZ6dM7vbcPviyRMq9seJc6giPSxu3efHn4C3YqHo",
  "key17": "3ytXcujccsdQfACdE8mU3tcGu1ZuoSHFyyBFXwJmAZGyhwjZxro7LMLB89NJ1isrWVxoN5UQEwwZZyTRbH65fQzv",
  "key18": "5QRQig4nY4HCcCu1HbQcVC3TsVrtDufJ19E2NZNYhCpvvVQqNjLGMukTXksYX5xmfREGZWEFY8eGcx331eFCXECt",
  "key19": "3QtuP9CWyzTJEFmHHdFonCqKeprh84vU8p9vAYPkj1Nq4VDvZLocwQrux5BnZy4YvUUban9kyNgRaT1L23SQ8y29",
  "key20": "35PQ59jsP2VQ1BfKXBxN5CjfNTgSU211BTGXGFwDGPrLoLeisXqyKUrpPAAi3n7Seqhr7exfhqpDVijgS5xRKG6f",
  "key21": "2FGYbfrEPkDN7krJVhfNb2NkHYcjJk1PxzHznKr4aQkbHeQo7gFp5sxghh3GmMCQJ5EVVPYjwS3Cc8mVy9JDuHyz",
  "key22": "3CnYc3DRtw2mnAbAV9a4pkjp9inNANxagNgw7Utsnv4AVg4BAhva4ndKkzD2pGNChrpwfczwoEvduv3897zAaMVM",
  "key23": "4TiVid1uJBQtZHBWtZMzrZNgdcJ1zseyJ3tK1a1XNawEtSH612yLZbTNucPnVCw75AwJF4d8DRF5bzPbhGxNSEqs",
  "key24": "2SwKgpvKne4kynWu2oA9GPgYFke98eiEjw3btepuk7MzSTGYrGc6QWXtCSd2tDYwKqUdC2RxCywKALEiCszTAS3f",
  "key25": "4mokNV2X3Ev8BZVW4MFrYrSLuYwU55hcjf8bkVqoupMbEpFPaNb8AZHXtoBLv4RwKLDY213V8E5XUJDMHZ4tsqAc",
  "key26": "2Q6tKQPV2FbEBMEeHD3FFuXxsa4TxspZhWTTDmausd7RVRD95Zb2RmaTm2HFPSbicEibxMov3VgjMxojnJ6w5bhQ",
  "key27": "39jEEAzAXggvmMUNLCtXeZ6xfzC9Sb9hEJLxYBCKsqi3yLxxtnkToqCZh4uGhUQyNyqPCuADg5YaVUDX5XmfDSjP",
  "key28": "2YJ8NdQ8uPbmJ8uXCzx771QvDoxJBAxjmCAtDPX4RRJXQZGBaAxtzjg2djdMujbJnzZnotZYoxPDes9fUUpNiN4C",
  "key29": "3xq7SVJXfS2qUf6Qbn8UgbchdYFrRcgv1dSWQUK5ZYofqArF3zCeP6QJZHA8tEsPw6yHrkxo3Dzn4EYDNbYbjzNG",
  "key30": "4wPg2S2z3K63ibH4Ksg6rZ38FREpKhbKBKAC9eZZCR3jyyCZwH6q1wp8D6AgQ2m5WDqnkhujuEBqVyFBgzu8FfLu",
  "key31": "3ktFqaWRNz7Rw9RoosmaukGHVbJohXRsQ7oTubojXHUuPpa7xgeWPcQUYXbTmxf3MtLPRd8e5yXxW16Sddgi1KeM",
  "key32": "3dBuGhfKW1vz5BWpQxHzyxZXSzoo2H6c7HzFwYQ5prtajPat6EvyPjqzfdCKava45N3xjJbrj7V3FhFkUvRLCd6K",
  "key33": "4CnyvEgN2hQAbigXYXNmjc4TYcnuuFy7ChXndCMxU7PhdYhdtBzXVzBmUTwCuCFs8tLyeBW3oaQ74rhAnteJv14d",
  "key34": "2FS6mdS8Ea8SZvaaK5NdxMYDrpBXPYcsg8GSzNxZRuS2MQBqPfvpXXgzKjSbFMwJGygfcvYb1YWabdokHDCxnHmu",
  "key35": "xCpfvR5vX9J8SfhsvZND76NqUzRRxvKHx2LL9a3t1wTHAbBghG1L6VJjLYNkC13DWgCbcy8ie6syAKgUfdH4tmN",
  "key36": "35MoGQBYPbitB7yJKNrBDa98QMNwXzsuZ23tZqaE8VF8yz62BVzRJiHBg7tJWWkDCqDWbWKPhJfPGgEMesUFSSAY",
  "key37": "3u265YueZ4AAmhRsPcfE1rbcQbgAUfvVrWC2rASPqeCuXs2oHEnumVfa9oWzexofdrAX8ZB3T18x1cgWd4tBiGnk",
  "key38": "31o192HfkG5h96UE6hWD7FaZpeTxWoChdg6rgwNYuZW4mPMAVifYcLRFSRDeGmsciZ64zjXoP1vkXfaJEdQepfh9"
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
