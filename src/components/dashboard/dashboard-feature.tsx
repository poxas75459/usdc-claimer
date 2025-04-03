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
    "nZzZVNXGGvkRZ5eAdvJ63gdjXzhny7rCwPspvd6WwS8BFQXP6sfsPdhTCshersdy5mLu7udsKKfDhF7uF7yqApK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJMrkSMMAaXG5qi2DKeTXY5AxFMfVPyskb7iDUQyvKiMRnfuW7P5kf4YxtcKj1ZzoDKhtSVvVaQEegxnZmr2Xun",
  "key1": "4PXJ3m1rf46N5rYfFEGaxgzyaB2spwpjocsiaJ88hG7rEQmoCRcDLFpaMj5n1BrbqYcUwVa5mo4owQtGHXBcnY2h",
  "key2": "5Ugj8Y89m8MToGTA3B163b9dW5uTKZZsZfhu1dq1Rxg4wUzgwdTGH3aZwxR6GRvs1eHwTJVoDfX34VszrHKGigm4",
  "key3": "2dEQ2cC8hytrzqKs8sJpZBi1acCtHuwLd45yQ3dcd33AuoLpHZzAS4fUoZcvyTDf7TkzqjgD2ZbuEmYAPrHD5BiS",
  "key4": "5ctLKfv2foWfGapnEwibbJCmadutgXTjt3bKEhMvRXs3JZVmJ6bXvoQnM6oxtVNQTwCSpZT3aN7JjamxkKwjTXGN",
  "key5": "5LNY7K4MCQq4NUsLYyCZj5vD2LsUfd9DfN5rryCB7LUijKXKkR6gCBEcef5aVzmXZEFvXHa5i9yz5QJ9BkmsZeGa",
  "key6": "po1n9Wr9TeSoixXB5GVQvKW8ZS4euJi64Uw1DUJ2ZkFC7L963Nr2hjQwnApwZowZXz9QGmA8zbHKr2AzLSFa2Fu",
  "key7": "54N7VEChpNiQqiXs6gbfaeDsNEmstc8zWe9WULP8skRw3UxgSBt9Mu2M9GMWs844x4Qxa4S7kT9JxKtJnCQqSdkx",
  "key8": "2zzupq46sthG7fDbGeLHotRUH5qrqaQQrVGXBqpeT9d7U7veEwMs8k1qv6g5sTTEnMyuHKH4yZJYFgueGm5VVj7Q",
  "key9": "3V9Y5rdypzC1eY7rDC2rEQhc8avXCBkU3sxVmbmfWjevZe5ZZ4pAWuNir2iQNabH2mXUhiYgygEGeENzAkRjvFyt",
  "key10": "5UmP6jNqKQJPu9bA3AavoZpbHS3EL7tTpHm1jEafzd9WHRpphjNvEYJbtr43hF5PHtWGcNVWeF8mK2LRKGjFkq8k",
  "key11": "3etUNf3ThGQRotuFHvnRE5sKxzzkhWKR7DgYAthkniMbrRQWKZJ3apvET9wifcJfNmLsR3HCpSvontBtkJjw1vRf",
  "key12": "4TKv4GqAnMMbJtMotGQPeUrTVdW6hdBEEXByAHV2s54HhS7a1G19VSNXw2794NLEuZeu9gqZcV3ATGiEVtK15ht8",
  "key13": "4SbBswsPLW76mguo3w45gYFfYWLsQbqvUVYxTPyFBs6memP3rrt5cmdobXcVLCCMzyYoAegm6pVVy3jK3yVeh8pz",
  "key14": "2gxt96QRp9gpNgpxpq3U7TRwQayyrqxE8eRQXKUbA5gCMNzKfKQ5QbRbK837Vn3UoBoFFgfQTjLPvDBcE3FF5EhE",
  "key15": "3XmjXStvqDfXobi3nDbnwrHTe1JVGBpCMYgYuB1jZrmBdN6nHKfDBrChshPbrM834DLo2nXzbDjgqqkHVayLxA7L",
  "key16": "4BEN747GJUijevr8LttVkWb36KtXyuCuC2pZfHMMvEa3JgppmwfMDijAuyqox7u2ZV3UjR59xJLEemUTqqggZFj6",
  "key17": "n2BdAk7ocip8dC9jVqC1WtZDxsFPRDJQm1BpbjmQzNyqJxar2ousDSBjpH8moMADwnVBTLSJ2iLR4LRKYjtLnMv",
  "key18": "46a2Tr9xkcnERkrpdWtqTfr9i4J9Apq5XwrXxNy1p46PYVKk96rSgXRQbujmDKRVApdWwNW4MSnvMcfpreBJzibo",
  "key19": "4D38qabFfhZozsesiCa3A8tz2gYpgSkM4LW8vZ6q3WZK8PFzzT9Sszz3Y7xznrcEKE5Viw1278AA7Qn5wZKvBFfd",
  "key20": "38FzUaYVnFUGhJKpN9tNPCXnWxZTpUdUGeZYMz1yxCrAj5bDD7F98Ud1RxPYMiMUcjY8S5jZkdgiGXQETNmCzC5W",
  "key21": "575aoajSgRHuDxr4FNWTJEiV6iVFe8MFKS3JN2JqDX58f9GMpev16hpHtzMHiLhmHHDH6T1STPf15EGvjbgujnCL",
  "key22": "5jsL9u9LCk3hXVSnRkK9wc6Fz1LBGFr8HCJsjmc5TjgRF22RDGMKhKe7zRJKJ5HXx5MdLZYJWMBbbNLgy7ELumuY",
  "key23": "54RfbzZGWLVwy7Rb3gBeXDMFCvWXwgyFhYFGZu6byR5UrUqNaCYR91wEU7rRsubbGQABLjfKnbvrtKBRFVWbitGR",
  "key24": "2uRnmFPPSKYLBXDEBnzAvgEnGKZC8AwKJfZbw3Un2rZA989GgiuVypWNRfLAbmGrvCNGCLXQLvQpzi8WexsUFWhN",
  "key25": "3TZu9J6vLBqJfLbbgsdF2mSo6PCfLBvMVpSoVhs5CBvs4t7wJqz59SVgMwdTCTYPMkWqDzNC7cxX13CLkQiLVrxT",
  "key26": "3MJ6Abub4VhDztrLvgkTm3mb7RtgZFuStVUbNLs4GzjZ2BeXPpXEHDvidSc4HjRda6KfgLzcWek8q6pXPZn9uz91",
  "key27": "3CASD8T9urir6FwMDetNwEANrehawHGpxwap9oUQBy6N5TbcvwnupGbhE6mYGft43x7oE9suRaPwZ3UGREFWNzmj",
  "key28": "JzKdBEm5kSmV1JvYB9HKzBuxXP6xr8GHxKYjPNvbBVbDaXDYEzfeYcc83LL14EGwyaVDqKSrkT5QPu8h1BcuNTV",
  "key29": "4zoYYk3dBuGMc2v9XLEtBfwHhEd3bbUqgE6D2rARJ1JnKZJVsuPJC5TgLmXGUy1PMgc35e6QrJEESu7sB1g8fZio",
  "key30": "3zSDZvZdSTXY9XETWcdFX5u5Z29GELA8kFwWu8Jc1ecv9c82gsJD12RkFGna7QrViSBqipz7HSNkyDwJRb5UEZi2",
  "key31": "4tigV1tvm7r4rA8BFhSffxdnPHATsRT6XxwJGhT8FeZzYD19Uxigffvo519iHusCHBAPZ5XJMjyoo3BBwe9NqfRh",
  "key32": "29PXTFGynAQsM7oYCmDhYsmxykccjqmBc9rKxwNqAsBcHSB33oDAGkgTY1vWTZ5YUTFUh41mJ3j9NuqWBsBNXtbM",
  "key33": "5An8hjeK3b5VB98h5A3qenXGCnZbYaXPyn6zXyK2K14BYb6EjNreDS2rSicrRz2ou39d9HaamUxAxLWFT8xCPjjk",
  "key34": "3gB8yPukxNwxBGrWuNaUihDdQJb1MJzU5Ztgyej8c1dXQXx3bzT3hcTPAYpdsvzBkVUJGCKFyZtj8jPLdnhe1nxZ",
  "key35": "3S7Hs3FkL4z3yULTUCSgmRXGmXcrzLP3xJEWehS1NBDpVcCdCuCrABu9jqLx324wjJpxw5eKGBbj5tsTmeNg3sxu",
  "key36": "4xnsWMpB9tPd2oUbMEViobBM8mnbKFEoTzTGgsUrSZVFAb8jbAjJ7crBxaNQkq4VfDPbcSUcSqW1CMmmMUXMdAuS",
  "key37": "3qkTVhwvWtXLHgnp1wSfu5mmqbmbQGZfDoA1djrn8HKkn2p1fKzJrjweu4GUJQuKw5yD1qQaETAnxwa4LbWEbwZ8",
  "key38": "592v31pfaiR974ve36YvFtdgd4ATeK5MiJianuswLtiHq4BAu4kGQhM2qvWzdqnmLucFmsVYQbv6iQCeK7KCjxLz",
  "key39": "58mh63uLCyingSYicbnLLTwLxDzdSrMz7t6BEMYPFVR46NkjR3iPrywnBW7V2LLRJZV5q3F77XVHyppYmPwh8HgA",
  "key40": "5BYggLEoRzNv2NC8J7viQaUW2itCiosLdbPmzqRK12dBTz7aw5oxqMWeLyTWu5peYUe457GnCzChEvoPo2VKDPHp",
  "key41": "q1H3i5mjwpBnxzD9mL6RbbrhFLhqc2VhEfbvQC5sh1rZYFztKt3U98y91QvmbfRtca4wKkVw4otZHhYMDJwgPP8",
  "key42": "ivWvAwq6v6LcRzy48StGWDvJGDrBwuBfYAbpbYT3NvDNojmRhg7xdSRj2pGHUoPWioWKP8Xuwcmmyg1c26xhbmV",
  "key43": "65mcyYPeHSju6sD2MmoyYuDJ538b8anxGJRXCTTybPm4gNX8LKbyzGJqqAydCDUU4d6LrSRqiCRcJxsbfEjxRJWZ",
  "key44": "28UwP6QiArktoJu8peCBjPDYn4g2YdunuDzaLDmuHSh5YRG5oB1uKF4mEWMxDynZ8BVibNGATnqBQ9otovpZED6V",
  "key45": "3QH8xfKJy8zR6ha2CfeDHK61m3fgPbWHwFNfaNUcWytfxYXTtA2ZDcya1dqmhU6x4dbNt7YvgoKMD5yvmU4oNTvL",
  "key46": "36Rn4w8n12oeS2JX7SBFKjQGDMJmconPjcLdDBVoYWMAWeZJgApyQQyAfEUTssMrCktvghwAaWWxGwz2juwFXKjz",
  "key47": "33WHob7qhqqLsnF6kJoTQwUs8dzfiLEe55ZRvT6AbNTjUUXGdQDjdmjQMLUdn44UGe3xhnN6trpo8dqivz2HvSiW"
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
