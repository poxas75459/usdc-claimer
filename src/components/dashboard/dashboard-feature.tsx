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
    "65hAcP7mju1b5FfFuKkXYMLneJA5SuGQEszpb9RN2SsSk7znBpiTT13a9wdr8CzEfcr2cDuk7fxXv8Rn61ugFCJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsndH8d3EqjE2gKrWGE2FqL42HZ2jtSDVQyKmwRYiDDzsd76MjsHGRvKkQCrD49sEZUcgq67CzM5iNydrHG6uaZ",
  "key1": "3KKVnFY8CvCrj8Wwcn13hZvWiBXomSm99JJFA81cZt8UUpq52Pe4uFKa6oyjxp7LeXCixrS4FvwXyAu4UUuXPjvP",
  "key2": "z1PoXXCZELz5nsBuwjtMf8z1VP4mcFfttxVDZSVqtGz6qQM59EC2TnvAGJo7LFS2GyqJACQ3EEa7WfG44nMZ9ut",
  "key3": "5bjaQnFjWi14F1HJxKw7QfPm9zLhgAbMimvqqopw1y5zimKoja1cEbYJ7jwpZDF1EWuoRR8giXc3kKLuuxA5skGX",
  "key4": "2T5fda5iZuo5mpLgKm8nXd23jwbDeMQxNHNqasLJYb1fd1Mj76RGYjARjUiDdf6gSNfzGX4sHAiHUEDuggSLqJsD",
  "key5": "4gEutFmtLoJ1K2HPxFzfoTE9cmz8SH8WgCtXzFFVmKe6icQzxDvx8r8dpsboi3UKp5be5nK5gE38yiTYD5wakSTy",
  "key6": "4bWPhXyUU94Rn3nDdP9CPaRfLdGBWCCDNjmcKVBMP6ez89S5RGzRyG9ob3VDmBcQKYpmmwgdvgay7eXUbyNvWHK1",
  "key7": "3YN7jCdnPsqnTVKS8hEcipRDVk27NA3wV53yxdNJNtnTke7KngNXHau7zR2mTgt4iqmwX6wcWjxywt5gcZtRPw36",
  "key8": "3xWJJvqosp372ufaiy7FhTUmNRBxAM4NMKY8FvEN5wSyCm2p6ExZ1LRKmSnFDcrRr42BBtV91SmHGjWTNXPmgD18",
  "key9": "41N33AF2eQyWEHi5M6gmGg3UtWQfsyHt9XcTMsyyw8LSoSxtXrNv4jG6F7JrBGWoAzxGykirCtMEBz9P2xyBu7zp",
  "key10": "5z4itVFGeV5SAnUdNowd2MajrXgx66QfYZBz6g7nDzjrQJi1tU57jPjErbUbniJinqXB9JsNsVyfzCKivCYQwaSA",
  "key11": "2juZBuvxfH7YBoehxooDphCxhs6McuNUMKyCE2dT2c4twcz2nG3YJL1GyxM4JWbX1kAhoesma6Y18vzwgDriVsSZ",
  "key12": "4Br7M5EfaF3Mox54iXGFsiu4KhV7FFdd9K5A5qbjTbMtHs3CwAii5ddkFszKiXSd43MPKFZaECBQeAEH2XGvjwhy",
  "key13": "57DSSgK87J5FTXybVsjcniDGkNw5uUwDATVxmW3ErEv1ApwZrpYAzGsNwswuZ1xRVTbWNmyC9fpTAxaLuJGypfUq",
  "key14": "3Sxqwr7L9HNe5MFh9G3TRLH7zs7RMV15zM1QYvoX17vsE8QwQBu3TJyEG2T2J2qEBbLdsaetyywfy5CyUSDtmWPN",
  "key15": "39PZw9qpRb8CGvNp8YqBkK7k65paSDRpaH12VonYkJXXYaxiHFVVboZHiSKY25HGeKXUQEHgM5MWtXd39TEdwa1f",
  "key16": "3Pk796J1SmghpzrPxn83GkMLCT3Lnqnteegvn9QeCKoRms6GShs2eY92N1QADT7ibZaMMuTsg1dECH8ezkyLWENi",
  "key17": "3CaaVAYS2vnU8LViFQrD2BEGbsY7tuUBZ33GSPeXwkzrsE9eJKbGVNkTMLUnKaDerN2MzvVhu2QX2XSDqJ3sLFPb",
  "key18": "4CqPV1nHfjWfPPuxZBcSiFyiRMhKLPuDKbj7PQU7GGrP6xumKtgnvyaQ2KwekqBELPKvuVRUFHGAc68fTBopKcGm",
  "key19": "4W8jkS5vipgApSRonDR42dU4U1Da6r2UJJJYM51UQGSRQGcKsAaR3X762h1mn933RsN7RFfzy1syzQ11mtwSDEV",
  "key20": "9VxTizSfFZNQ1CqMGixa2erqt2M4HzbNusj4JuJZ7Kh47WK6LPf5YQqzuLdgjDBcXjxN344WzJkroF9U29RMLZE",
  "key21": "5gyEEcTTNPvDpLGXUKDjohYwebzweAhHasJgZazZ5CHQcgwWzoxznDwUmjRotpw4QMKKmgdvbFn8zKWr1tz7PcKC",
  "key22": "2umKR94wuGXWwWcXPsNSKtcMenANcr3WKa63HquMQX4abPZkGr8fiVksvN3ArZsVLkbKhTTMcbqwtqq94nCJ6oJ8",
  "key23": "2zCyZjxaqLbSpSM4wbXFY322toY2hr5oxJTEGCAock9WH18AUWMLSd5EqiSu2DVUjunGPnKNJ7rWmwrcMXRcCw6N",
  "key24": "3BEVKuKFGWgfeUWtQc8qCnV26TAYrr2LKSyuLD8zZGUDY85H6enBMidAMWYyY8X8jTutM7N6M25LzpXnXgr4ca7C",
  "key25": "5BFoT2JqUcCzniLmJ2xzAnsEnjdhqWq8xxLcEt41wPYqE9BFdK2QtYqkhmBq36yLiHwz61jaTfMsAovHGFRTMq6y",
  "key26": "3mQbHJG4GV7vsTm91HP1rCSqcRMxEMMMnVvjZC9F7KvU8mtJW1kUjDZpAWXzrSRAUkVgdGSc8vaFUNxUg7hVSqzw",
  "key27": "4zofqTcpbQ4yn8Ta6KFoyguQ9AnfarNknngopJaq4by4dQ6k94E7SVZQf7Ysyo9L1Wrp33PrWatgUKheGtxgcnLm",
  "key28": "24DfUR2HccXUfRF7e8EqXLztAd2tBNUS9UdxFoaEAcusGiZ4vzsFEbGdBDqWh4bw3QBDsTQQFZbzpASJjhTA1wBs",
  "key29": "UKvo6uKaih7bhrewpFUqzzWv7eEGt3cG9ypAhFrAKfayjHbQA7cSu8g5rQUnfjgXPfJb7sCV5zCHCe54KQm1bse",
  "key30": "4RqFcDKiL2jeWWtqXTgbbjopCQdwQWRhNxT7TUynMhkCmC5hGMQruTiQnJPTCKyxByWEczP1bMWrm9rwykv61en3",
  "key31": "DSbxuaajCe78QX7rJZEaz7kGG4oRH6sSQrx1zCfYrbvyHKiv1a5hzU7Pci4CdBspAYSRaRzGUSTtpzLGevt69Hn",
  "key32": "39CyAbh6f4LzXNo3SgWbWMH932YZ2U3EWJTeQUUBJSJGBVFLBhUE8pfMH4DUU3Xw7RszqNWMAyVnW42RevgENjyH",
  "key33": "57z3WzBBAVEgp23JWXf7rMPMSxhng5Be8assYqCWnP8EmffBS7GZrmQ4fvwuKVWHvkn9GxcCxvndMHcFZPE6iNat",
  "key34": "5KyGLjPwVgAuB1TnsW1ugpgjJ7kqha6Mha5jfrr18ssNL8q1Rems95VA7o7C1cdTk5VMxSyaNPhvacnARUhaUvpD",
  "key35": "2tNfXEL7u745dArstj4VgWtzsgou7E8fMbWUhTz99GPoXey7oMU3wu9FukBFVVqdLHfvtCAXxGMEYzV81Gcwqu9G",
  "key36": "2sQ13u4pX9qHu9kAqA96UoczkDGfmY6s3usPSJCwzc1BS5gPjwWnZnUKUcrNySnDuCk2NAh2M4H9hz4mGLyk2VTi"
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
