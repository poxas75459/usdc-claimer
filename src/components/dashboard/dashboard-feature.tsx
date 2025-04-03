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
    "4Ac9GQo9sU6FBgnCfjCr1P7cbjDreogXSFeg7bEMqCmmvJ3wQmnWD2S95t5RkttxmknaqiiRSDCWact5SmYMMSjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ji3ZGKTV7cgmaTaGtfB48Eucjm1yeBjSksU4EfxYdVsrLRpPWB7NK2tNLWfj2uF9werhfo829N8ZHGkmN3NT9x",
  "key1": "w1UZbdbUe8GExvJVoi3Pzn2PMUjwZGBanaAmWaZTLPqH1SBiCBmXsXk9wE75tsBG7D67oAMWvezh2hHBcYw218w",
  "key2": "kebSMa9bpYwERziEFv6eDrvRjwJGXyDMurAdAjN8JoAoZi22KhRE7BoXFhwFjckGswZX7WXpLQHKXqp5N7dZvsn",
  "key3": "7g7qEi5o5nXc41T7Cx8v357rquGX9ooM5rT4RmBUSJUvYzs6Qob8rJUMaR4aDbGgjNAtSuAyDQSBKVb8fnZN3no",
  "key4": "2QBK31VgYT1eGcuLnNsevd5wYSwbwQNoyomMPxv6dqBZeFieXsnzRsnbCN11ReH3uzbyFG1Q24Rn3HepixQ9uay5",
  "key5": "5fahQYvq4yAUAyBEhUirSRj6g57fJLK3CZ9waDqAiz74TyrQEXKaDh2Kf972wLFT9VQfBDrbqZKkdsHzYu2FLzUo",
  "key6": "3SVGMsbLnHfTfn2sbRXuDJKLuqYkst1YLqCESxELUyik8qEhzQtz3iK3Td1mfu5NtA4uUyfEmWmRm7Jp4ve2z2fq",
  "key7": "37Qni1uB89R52aee1zpyweKte7AJCz6nY9K9vBYH1jQy6CdCSLLuHcLJQJ7oHUAYEjrCUg8n4B7A74SbZYRBUQM6",
  "key8": "4V9AhkQuwijeq3r87WXbZZ8qmgmvXuA4o15eRrRM65qL5XhjqyCgCVz3pDJXmfyqyXJdrx2e59dnkGkXRMhLx5bR",
  "key9": "2WdiYXPFJHT3YnzCJFzKRuiRMXsmFJoEoJJMdg16vxH4e8m8GRFkkXHdu71EbfqsJzAwqgQyg7unc1DS1ZxAcj2u",
  "key10": "45vLiWMagutV8VrhVCHUKPes19yxay3vyrSdKBKsvuQws9z1yDXNgLNo63249Arv9GvWS57oZKoRowzPi7gZ3X8M",
  "key11": "2teAyMwsHS7izdC2EzbffmnB12cLZtu1ydYoDbXEzkhCPXJmyMrsCgEfiyWQLLvcaDsQo1NXBpkoViUpH5jie2kd",
  "key12": "2VrvTf7ihHdpTJRnvghZnmL8YAmrKpTiEjr1wfoKKz5onX3h992DRHvscnmvWFgCRhkbvXnTqmy6hNtrEaBHt8na",
  "key13": "2b6uV27no4xUyDL85UoJcVKKFBCTUDz4R17U2cGBmPhWkxRNZ1abMfsRMFPLWrHgB6pKqgp8KZB2TA1SiSPPKE36",
  "key14": "3dGsmVCGm4TwePqzVXbCrnd2NJtDEVzDyyuJB71pHgzGuWUa6ztLcMYykW3t7unkzYEdHZEcQ36tPyGHGp72SUj9",
  "key15": "56mmGqfewf95GU1x3FSnXM1kDy4FJxSUNpC3GDfZRe5LJDamNSyBfuKwjMKzCER7saRw6jD7kXkrgSBhc42gNTUT",
  "key16": "2P4eT1hYn7CPZUsHNZ5RuiuXB2WR3MZ9dzofYZbxftfkZ45xizWGMvmgjDQ6162TmXm98wus4jUzzpgBT6YmwYmL",
  "key17": "2cJbV6N8vTB1ngT3u3V8sxFMmKouiUonEKeCpcbGZMhZjqaDvtrWs7fQEj8HqefqYZGBiShxKSYnkcN8trngVyA5",
  "key18": "5iQizfor4FAaPeDtHukaozS5tko63So7BchB8okoHwGVueztCVvYECht2KSpYSiD6Z1oCBKwWR3G8StRCHw4jrmE",
  "key19": "3q6N33WRkGnHWfrzqX8dePQBNnthXekWn1WFxfrSBrU8zjQnK1RbzNJMSVya8ck4BoYLL1gFk1hMwj5Lg5x79pbH",
  "key20": "2b2GArMuYnPppyS3v8ezFvu973nyQdjWF1Hpbnv61yF4aehRnx7UTiyZeHVLw7Uv68YpHELfAYEqMGDoZt6cvzgf",
  "key21": "2DXKdWuRLxhXADTMPobv5pv2Fr84F6qWf76xM6GEXLRCu2kgvkkFYPYbJCYNsPDB8aXRehb4fGyVR7j3WwaA7FHd",
  "key22": "2XMda2QNiRGDNfiEtqtJGJ4MSPQWZVNo5MTBGjGQSkCZMDQe7C7VXFpFHhx788EvyYYyenWukvv9JRSWW2WdVJed",
  "key23": "3SHWA9k33THzR5f1E7jJHdNJJQ9cn6xe58ki8r83WrR7a8Vi81YTKNSSUaNRbBwVfr5NNyLyJo5AGzGQiR6HeV5B",
  "key24": "5Lo2UpVWQoUNoQEKgFj1EwUWJWxR6eZ3B67mzP39z8EXzBuukFpLKg2muKTYFGiL5isu3Hm7UWJbPTns57M2snr2",
  "key25": "2TE2ykerjTxX6dqeJypGMSCnJWZQZJhG56JauewM2EnPMAGWBUdRxnMP2fus8ni6MMUSnyV5oK9xssDGxLhRAKj7",
  "key26": "2Y9bjj3eUTQk1qfPyxsapELHRha3fZsSdrz2q6AMhQSVW7xLds8muP3s4uAkn9sFcbdKd8Cq1AH62jwt24zdBVwP",
  "key27": "4VwfPiUbmzpP2vwstwrpFPW6wjB7rKxsaGzFLKfTizNbdX6JxjtpbRJzHvbnbEZt476AjmBHkhJrfejQyw8ryxqS",
  "key28": "5hARGXLCfGScZ8daWLitQjPSJRnYWivgDJJqvS5G749XusC9sCcWeQ3fM1tYmxqY5aAqkDupbVzFupibhQMHeZsv",
  "key29": "Z6UzYZyfeq6excn7QPQjBxjziMeabYUGw5yjcv5TD6nLqTmjZ6YAJ6oQ8QGNxsT1FWQo3aEgHawyFsCSdLWNn1R"
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
