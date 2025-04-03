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
    "5ycQFrXbj6MtVHa2pa48YRyXQDwHfMXnhhk2vfG7y3GXQuPtC8C9wJBYguDk1bFag8JkJ1wcm7EvaKxCMoRhdEyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5DB2R3HF5vAUQDpBgp4uATpQXCgGNW4gVdUWAS2whc6hWibrk1Hr5h88z4vBovbhiwK3f9sd9z3wvYyWwRQHng",
  "key1": "5XfQ4ZxBbHqWcvsrBLpJnd7kGuZEP4sPoCqvpS4NaG1j5e9YkqhVgFpBvwcNimHNBG28JtYVghCWmJt38ofGRNeJ",
  "key2": "5UUHzx3qLky56EfLt1aojVGxZwsJPK59TSW3GVFvLZAiuCk1qBWQX8fCW6YuWFCEpXwqdDnYV5gCUngsZKQFoc7e",
  "key3": "X2bBJvixU8bR9hWJJkrXNELMtf6wGEQL7JBRZGDurUQhnLwLcviH87rsLp2AYsKPeKgXqgzRo6hY8whvxr732A7",
  "key4": "n1aB5nzEB3z7D5tehnR9mNv8vaqecy4eUetPkuh3yFPmuCeMDCocrBcB3R16FNbGxdhSMWhb2sS8WmeKuNFR92A",
  "key5": "2PadQWj2XDFcGVvbbCcSTMiFfsQjFUFtJa9sNPtAcu9g18bRorCXd9Cd6vH8JN8bPd5gjtZHGoLpkWrggi89XS9r",
  "key6": "3QGkFe4eC8EEcZE8UFvB2mwbwjwYLxJCuCqK8BNgLjfY7EG4ZmVx3gMxdi4TqfG5HEVqBFQG4PybRtyNJr2WCBfa",
  "key7": "64HnpjynNEb3U7NetyfLY23AoMdXKezQZf4MoaekeqkyqvLVVbVvmhejuYbporFE5NdApFeFpgbzWMMVL3KspPGx",
  "key8": "2Rv5n5x5A7b39Mi7P2BH8KTLH4oM7GCwDkwHrvrp4r8TZzeTtUygWzggESqSiA3d5CjCgvvZNxAjC7LvzihDnjhR",
  "key9": "3nMseNoy3LJvJTWRqygtfhxdomA1pzcSAGq56CtZrS8gQshCbnaUuCUSc532YhLEDSJC4Q67aNX9RyqxmgYrgsUW",
  "key10": "2cmpr1fhHBq6QagV28amrYWsqqHYVZTK59EwZMiPWepn3neRDfepCgcjqXmC2daNyxhtMM5DjocMWi6tdutKnH4G",
  "key11": "rquGUVfBeLW5QaemdTJse6R8sQX7nsadyAq1byQB4JxoMkmbBJvwrdLRv4rjRaKkHSB87WLvtcSRmHgNQmtrqCs",
  "key12": "TpTZeLXH9NFtUeH6NDcn5FkkQh1La72HTe7ERvBk3vcKHr6JTgTYH1FbhH2SdYrXMzVjADhNBdSAYTMjkPiGmCR",
  "key13": "5hNNtKkf39LFfC9aUK1Zm52U7FgVafnhnZf9ijRxvMyc15FuuMWvmgCQqB5KqzE9gUFkzaeMevCmFojEhAB8vYum",
  "key14": "5vrEjytW858kkmScvQHfq8WAnV17t9QxtTezy4TUkG6RNskG3hSwsppWHLz8B1HW5NjTJPMGKPykPjJHibcZ2r6t",
  "key15": "TpVvc2wGae5bftzP5i7ddhkrwrxyuhRaz7NdfbPTWTphoYakeiAAKJYZoPjfMChpqm6ojUJzb6NbHMKgTmKucfJ",
  "key16": "3yf19RaqcPUBYmYznDx4UqEo3pDun2QubUeiPRcZgGNGk7kKtUJj1nPYYTNd3vGtf9mR9GnDWXs9JDDmbzmqHfM8",
  "key17": "2A3yavPP2tepPWpJhVHyPv7E98d5xtEuXGgmGvsGvRCyuwpc6QLEjEXh8E6LjVqdx4HR27nU4FECwL8G6M1ipLBu",
  "key18": "kPAApeQ6dBAJiJDvcFHLA3KFYMdxf1nhAQYCpxQafYzy1Bxx7QUgzt9YBDMGCaSHQxiABBYVK745RB8rC8F5AYr",
  "key19": "5CKhHqVZ8NutXCsei6LTjU1WVmFurwv9AeYLM4QQ8hJ3zvcUygcoLQuStNTzkk221k75514CUDCzVBVi22urou8g",
  "key20": "tH6t1obcy5NF9eCyHvztLEVw42Yagc2d8MKUKPi8asg3vUquRnXAVpBywP8XuWgbzwNxBHkPmVEauDYsQrm3bpM",
  "key21": "cKQDoVgQR4QLkfs9SjXyr7pUBv7fwZEa7voh8rw3YypK7pW1xJZaZdnjEaJiiRPNr2kBsQM1xjGdeAZ2WPvR3oM",
  "key22": "py5as96GJo5CNDH5JHjHrzhczVDPVZoTmhgLzU91iENeDswM4ev3byLw1quoKk3tMMHX3ntn5ivQJwqLBWJfD1v",
  "key23": "XexPEmV3HmyRs36bEpCDWYBwWBfwba5MXvxFUWwqwZv3m4cbHahTescdty7pXFvuRBYkfAue3G1prCvDmbWjnTL",
  "key24": "2L4k1TbzvQ8JfPxZLHWyUf1XYnSaXGXpC8mUHxF692YtKVsXRNujLmLWU4vVJfTozA1KxXYbdjDoEfy2K8wnSJGa",
  "key25": "wgfLgN8qpTaMwojcu5QEif3ig4uPenbi9ZUB1honTsZSXdW47WrJ46pj8NY3nyB7NamB9VhTGCk49BzxgTXmhNA",
  "key26": "34XFmAzG3QRxvLTC51UA1UD9k8dcEj14X6U9rh7gWWKhtsTYBEo2DmRjxjrG3fc6bihxGbVvko37nTqzmuaayA2m",
  "key27": "STgJz6GrrmEg31qAvRXvmgXnvkAxtvBdhWm36mC3hbm44HpGjXqpJ2UywVQiViR7r3pUXSasEW6HKJozoZ2oNWN",
  "key28": "2eCe2YSCzM8PHTBrVQnBTgyp4PPbH9dxXVhC7PR1UaQvgQ7Ere8PFx6fSxiPwrGLWkAQiHC7tAfZ6yk9LiK3JYfz",
  "key29": "4sbNDmdPTr5f2K4mnUpJpyz4XyEYYMVU4C4KJDD2o9BBoKWUcxEsKzf5ETd3hyZBiJPiG8yKV7vrijdoSkygs8ve",
  "key30": "3KF9jDsqGi2FZfzUaLX3WPWQrDr5JBa8zbSWs3c7nNEVN7CviS4FNBAhRAZoQoRATeBxyYUUpRr5afMK2aDSVEWu",
  "key31": "4MjmHQaqEyVe2PCXELUJUHMuABPLsnXmNxFwhoPuPZnSk93EE3f13N6NDR8nPTCownxhfUC4qHYZ4iUJqXe4qo3V",
  "key32": "2G71n3z6ayp1i3nhGPRMZBQcwG7btsjCC5xdgVLg9NqtbUa1Dpz7Hzu2trPsffjNcnEs7fapTL6L7pJBCsuXqizC",
  "key33": "23kmCaDZwJqEXPy8Fqxr6BQ7wHQSjjMoki2LPtGdwgEy6qAMZRTaHpA6vgut6DpLAdfmeQWJhbmZkkcJCGUxgB17",
  "key34": "BR4CfDtAyvazcKiWwqUeQWRNrRRYCTM1sADQo9vigwuUGKNUCUDQwxQtGoDwZNZcYX31hFcqjjbrSrtmML1DU3T",
  "key35": "hcbLXMnMMzBDVEo5rxhPeCCEK3XCU7QdZq7tMthGwX3SkUzL9w2F3CEy3wgKGAo45y39AdYucvkBjcND5dZGGsD",
  "key36": "5y9i3D8R5RzNGXE7W92HCA5xNKA6TtN2kq9NuhwC97szQY5PZPi8nt2BRgSAYBbmU92LqP5NoYJZebeaMEFajpCm",
  "key37": "47SULuypw7M6npbDynGP6TcVGUvfWfQC2QjNTFszPp8imyRS4Dx1b6JZyf4cevRd3vm8eWHqz4pb6XHmjUoTZCWn",
  "key38": "5ycuqFRuXrYziHBV2NEzbQdN6Dn2BvVcrUsCqALmPEF3aqWR8Nk2MGWQKQU7DUhx1n5GLZpCnBMZdBr1SGEvT2uX",
  "key39": "2Pi122s4cemW7T2cXqmqWqwizrzUpX9Nc2KCQYBD28oukvxxM1PXZokBzgiZCVTqc5JMNpnRLdMtgpWCYvvXfGdz"
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
