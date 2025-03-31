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
    "3bViQKPp9qvfs5o1X2PmnnM6ooeueo8LEN3ZYdvaAJpzsx2z2dDTkEWDrQN2bANDS1iZatSLbf1woxu5SYu5A74K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M9XakNiZSRd1xasVc9PnQePgVJoA2mHw49uSiM8kHkh7V5cZ42WmwHNYQ286yj7UZDHA22qhYvnShFY1AL2TNjo",
  "key1": "2zzkyx9Px879oj2LvpQQ9jaAtJSNp7exmDWkEuAzwTLhyTJRuwZK68Kua8oGpD7SJCPaFMaftHWzRucJchxfdeZL",
  "key2": "3VFtrLu3t6K6GKuoKDWa7f31qDwX1KyJUzBNoFZcmyVhofDze8ZQ77afokh58XZRwjqUkydxBmnmXUHui2e8shQs",
  "key3": "4sHu7m1vKY3zSqr7ymaJRkjsXxi7hvhmVYn9GiwmCvVVpHH1KAPCWZZLXaBQE2jC4pw7ai2V5H2JgRv3QUQPXKvS",
  "key4": "2hbBrZRA4dN5ykPnRoqKNiy4Cnu9EgyJFEEYqubVHosanhnLSYwsHSB8q9uHH9AnGc6y9rb5iVubqVbVku537s3h",
  "key5": "FZfCv5eZtsZmrpJVqZiHkQZRLZB2DztAKqXZmYTNKqV43n5FtcxWxVQxXUz3E3NzULWXJXpY9HRL7Kv93ggHBLP",
  "key6": "aN1LbtV6gUhx8PdoPUb9dtjjPVbNJJyJihk2N4ft63Dur1v9xJh59kZeh18imWf8RqKUD34eAyHcfKZopmPyKxw",
  "key7": "3vBNALsXDViLsyrS4arku2m89ejVqt73yhcUdJpT2jeu2g6zMMn2q7xV4tvn2FZhKW9jtGEa1TwQXSRqJtD7URc4",
  "key8": "5RMhZEy4V5xN4kAPU3eFuVBvJ7aPnPbFQ7LDr4525LJxsPvGD1WtEdR7PYifPqALb8e9X4WzuJcWLKDjFkYucsWu",
  "key9": "j9FuD3eYcrztnN4pPqgXvZKwWHWM13bNSDdicTjquMJAmKnAxgM4q7sFTA6gLRSEqYduDLqkgjfVt9MDPcPZeMr",
  "key10": "3rVongDP58tLZFv9Fjxh3Mp7G8RLrXpiwzYFvtaXdHAvEWc1E8brJUSbTAnwjaPKA3iRehGCKks2vbwZ73yiwRFJ",
  "key11": "32ojKk2wmNaN7mPVAwpG3L4y5SsjGKXHQXDpW6rFUgkBabGnhFJwCcZkuwtMDKhDekCXFKo7x8AbQYb1Yms2PcjZ",
  "key12": "5pSTk6rCWXiFV5LQcWs9zgHX1dA341CLiX51QGm44NQ7VvKis7hE2jer53SeNUzMbcWMaF44Qr6EghgqVSpz5jQV",
  "key13": "3BQEGjapQ8catSwpctSuW1gh2Zhu22hVLqkTvrWYrENa91iMvrxAoatFNFLpqTZZTBjdyYxoQq8n4EPkDA7ZKqjf",
  "key14": "3y1yp8cQoknQz5NWstUgNVGCJ6MPjrw5LvhJymthsCBJV1iuFkuHHWgMmHKHdyDsddy3yt3nrvMrxf3RKEJTtenE",
  "key15": "4xWwuxAKqjiu2cByCyLrhaN6aVN26VC5re7wmafGEqURYM9Ydw5b5wCRBtQkVqYNVHAkHAXFgwjQdJetM6WyQc3F",
  "key16": "3qcHr4zujLk91VjZEm6RRPmfzqGbePnSmqtzv1DNrbdv8VTEezcwihi5eZiowF7RfZW8nCeef3iiJyoEzHvGLNqQ",
  "key17": "3kUzfJ7YGucg9mPzxkhRsKiefV8k57ZS2BsamyMomKJr7gfnb8KwoPYKiQTfvfJNUBvHZ6GLohX4tjNc2g6a6H2f",
  "key18": "2k2GHSrsCbJb4JPmqy4fhoednUb7QC9eiGwQYrevPSYEGL9t7u8UBcmZJ3iNEcZYJLmY5x4hy6Z4P95W57zWMVQm",
  "key19": "4nKrA8QV8U1v8F7yyr7Qi9GjVH79ejuQz9wCW6pC8epT6ayQSqVDos9GwiXDCmk77AtJoUaNErAPnGm3aYWDHbK2",
  "key20": "2VPePPdqZ6dvGTVhxW6zSTnMfmtq2ihYh1FxtAf3gKfWW3uomHJVDTstg6Gi1Ke6qMCKaVVtedott4NRpQtLBMGX",
  "key21": "3FCdVnXKbrY841t7gxKhncZup6pi9THCwqpWR4thRRRzU2GYNMsLfkwuPP9sFfhsuX7fowr4jC3G4sxj6MwAcxL3",
  "key22": "1Um8twuUhw192wuRgcYZNHPTEEcokTz2i2tPGQWf42ZyEkH9cMK8CFvaf7Jc5q5cLCMSm4F1xVBW2kaXXkCdWgc",
  "key23": "3a6MQYsCfetFkCoJfUtYe4mZY4t6Eq7T9Cc3qPYHWRzjwJtiWmc8wewAjqP67mpSMrDmJmXwAk1fStiQPSijVqAx",
  "key24": "4arDUzrCM76kJ8YmUCBiAbrVEae2uvMz9NW87micUeVttyCYWAwMRg9K2JAHANDzhxeBH5vsfHVvoa6VLxDi86he",
  "key25": "4HBeSrYrvcaQgQFGfrtbxXiaDHNAWieciXmpuZniqfyXXmMniAaCayuk2qV9qYr4kn4ebiryuxgG8UXPEP7jh2Po",
  "key26": "4oZiAwa5ZgvbCTnyZ686e72eYNucyBiEBmhAdKQV2xfzAT7aiYni36WLPmUxf5Ka9VDs8atRAZeCMWPC8gXQrMiR",
  "key27": "5KMFwhZEKwjDUyhNJyKhPqayWBpVZM66eeCLmuVKuMLQXzZqA8cWB6bHZs4ZuvMGH4cNwitZmeo4h8ErEjUeckqR",
  "key28": "c5wPj4trCCMAvC5xsJbHTjb5jBbrg3N8X4ewbtfq4LyeueHEuStGFGmaoK5WP5MUvdqTFPVgGVrQviLzZBhwoXF",
  "key29": "5UabAoHEZuQFCCei54suKNrjPWQJR2Q6zrHjKAkSKNKvxzRN9DckwfbYMbubmZREEJQ6ggGberstt7y1jSYCmC2P",
  "key30": "4ws2iEpkxuDxshw6X7EfAfPXSYUxYdcCb8C7NMJQs3UgXD687h1ftsP5oiGuVoCTbpZxqG1zLeJerLWPugZuLvN5",
  "key31": "3eHVy2Rn8D9MSHyER64Q4m8pbNuFuQzEwCzkY7nRjhBVq2BJiexCtGQuK8aRfLTqjURz7HYVdXaJ4G6jWwo1ENTA",
  "key32": "36krzTJLgagLA82MPXFknKcVpP4me1nnvooDCzXeTtVQ6admBvdDgtYJ6SCZFKPqYKLkjfM6oS8YKdt3fPkGKPwQ",
  "key33": "2MVe6anYRLDJ73trTXBjsF8Tx1vnNe3Ma2DYJc8Cfm5RFYDKnpqe9YggaREqwu6ys1XTq78GCtiaX7UaTzAiwFVg",
  "key34": "mdWoo1i6b64UVGXqJbyEo62ohjaGRNhExHg6MWz2PZwNBQB7XxLTZpZsz297JzzdeaNAiJW1sEUmfB7pqyKopAr",
  "key35": "2jE7DqL3N7Psq9CYrckg7AxKY9SPJjYMCYd52hEr7Mkaif9JjF5vZ4icuoqxK5EDL3nFEzZoE7Q5NXYDGJM1AJor",
  "key36": "61KLEAXayh6bf4nmWvbdngwf3vFNQbcjN5Toy5aFmVeQLJyBftmtZdN34GDnCM6oaJPs8YXQKuiCbiuJY2c1v3AY",
  "key37": "N2ctgHA7HDD6n6R7W7uuErtopXXqw6eDsiMLtdqB1yN4tZhUCzYuva22vXwhbbaZfir4U4S6YzPoYJWnSfvErLB",
  "key38": "3viGcE5ALNjfrnzaCuHKSrCux3YpqcR11gu75qQj7tWXse7XgeLoK9n258TGNqbSrHyNgSnfvWEWdfqTq9FdjnsS",
  "key39": "3Jt4mogKdk3uHgG97kzZpQGHzD1iAqraGxR5o67hcG6oShN6yR4WLw3DYvCrCyFgxy9RvnwcNhv4nfnQf61Y4Sxk",
  "key40": "3w7fCVFtPiUd7P2bTyzfj3ZG3uA7KS7Ro84pj9RLhE9YktHiDbSDywE5pCC1kKjcZDHnRwYqDopi4nF5pUsBvcSh",
  "key41": "4JtoqEBgGG4L68BSVUVikN4LPCPxVnEAisipwSwW1YpU6ebutH2cbRiYBVzWCu33hfLzaNYQRhuizCYfqoMTJhoz",
  "key42": "5azJmVq7cH3kyEpdeB1gmwRKGvjkTzrtpC8QpV327TeZA9si5HkBeT7vjxKVHXk1eKUXPNVZf8tVd8zJ5F4voVzV",
  "key43": "25NRZthoLTgpya9ip65jQ7pCGa7XNvkbG6eLNNiJ7xaJ6EZReXaR1uYunkTssUkTD7YYsF119u4WecGnt3yXhnqS",
  "key44": "2BvCzdBZQxvHmkH6paz5udbdzwTCAyBgKQsLdiTHa9gKXDjvnvV3FJ8EQ7o7zT6ds11MGBr9ZWyTYs4dBJ5Dszc"
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
