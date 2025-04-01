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
    "3UGfs3XHr93V1wjpwWpVADg57vL5c1RfNUEn8RWuJWW79e1TU8CPEGn9JQKoNQ9isj3hojo4QW8y3QCuY11abhAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwFTMwBUA1HCu8hgJyuHxktyBKMdEestDeiRtrZa6vS4GxC7GvpUj8PPAoZf4tv1bHrV96JjVNbYfLoPfYwwCcM",
  "key1": "yrr8S84R7WC4Z44xHtgov17Wg1zJAqh7avf7FKb5Sor3fKNNo3g1iUiFb1WWxeGCPnhm6KBPGrwrTcYaS4As1zM",
  "key2": "4Ku2Qvr9oqGq9TvxDkDAgjYdPJ3BKVQEpoxMiJypiCapTXK4YVbUexXPMxjtp4Sen2sD5cDdwibrHJXP7q5KjUGh",
  "key3": "427u6eRGfMwf6h6iHNiJcVzWLkhNJncXvfypRGhBTnTrFrSdsVv6DZ6dngCepANvKBzJYsPDgxmqCPZUH3LfkbZw",
  "key4": "4FZZbVHx3RzfrQxi6NZzQ5Gw1SQoPqNnr2SpuMivZiubvB8w8WPMm5Gh6FbYdcFUSmEUVNxzCD5zbtNEaQRdPWhz",
  "key5": "3HRzTGNsgh7AnHTMq5uw1piuzauvXwZrENouawq5qT52DkAPwQ5Di2r7ELgVVLHamWtUVvnsKQ9ndTs5raWy34Jy",
  "key6": "4LNpdbh3D7kC45Wkzv6oe9xdXJ1zuRMY9n8C4igyXqcfgz99JwFH1hPDmejizZPZ57ojn8RidLn2GVgJmzHcRSSz",
  "key7": "8UCLGmCzWqbgwpSpVqgWspMv7L96WSse4PNxRQoZqbyvMR2J76V6dcUF8d2LLHDghbXePr8u2nM8cR8CUrMdehz",
  "key8": "XdAM41F9VYZMweYiSbLc7FiA5UY22uvu78CwtidMeaKnDhHhGiSYqFiG3ENcoPpDUnsCFUoEjXfq82jGVwirvjF",
  "key9": "4p2fdhsBj6cjcwQs43XmXES78syt2jDPTnA5aaDGordHjSUDGueMppqiJg89VkzA6jLMBEZ8mU43GzwHUyifAzZG",
  "key10": "tpwo33rFqqsmUcuhwFm9uGdocjvjsp3VfJmX2pEBdryKbgFLZN2W66BhMDk2LA5M6nccFr8tHi81CV59FmdYhGn",
  "key11": "3FaKNCjHsq6zw3rWpeDrvuUmCoDHaKcmVHnANFHYxau3WfoTjP14ugk8LwKigLXaRNuD5WmRkdaBy4SKVmkDx4ND",
  "key12": "4nVYM5TGq7DMdQDr9W4iyeyCdwNUHnxWLJFBwQh3wFYVGdLa9Zu6dQPtE6mGjTiXuXGJZVf9CQDCGYiPgTGbqGQy",
  "key13": "3Fy7PF6tHRe5y7s8DEm8aaxDkwzgwSwrzZKVbzBX7hqNqNFB5EfJM8zFgotvhSY5ep1mrYKy1aaZ4obK5BX7eTnt",
  "key14": "2YynFP7ehqMiBCBpaAUu2Yc7qeGRH4Jh21uCQ8HkKnEVo1LfwKNAxCDeyKN1rjUpE2DEiDa3S5GHovkzJ4jQMjA5",
  "key15": "5GTUUygiCAcTPG6Rz4AXXVEAYw6ZWCywanThcTNfCqzhHotP4roWeTQo78gRoNDVrfBmv8Mqj32Xgj24x7vZS75z",
  "key16": "5sgZjCGrEodyLCv3brd6GAUTJKLJhXWbH7wSBqjqtYruebuyhzFAeVpZ1YUwmokZVUGdtcN7N7VKGoCBHWDv16jw",
  "key17": "xaesbXTVR4cmLtRAoKFDuucLpYxSuBuVx6hkXi145eJJfg5vSaGLGkANKBFZhdrYN8gHF7JyQR1VLWC1PgxzHMW",
  "key18": "21QkV3HmfNp3LLBWW7Ji6Vmv8fth5F8NRPrqd2A6XcaEJAeVBuyc3q61uWt4KGsC2Ls326GePBZAMfn3geUD8WQD",
  "key19": "2Bp5gvLdF3LXj9WKPCppiFdgfT9a1sfJhJL1VFCYCZ3qonaTACzSWVxjv7u6fw1kKEwQJnUsiPMevjjHLfGrxbYx",
  "key20": "2Hi5j6jFy6yxkSxBbzmFXRKqFQRocJ3oDUssyEbJVmbSUEfKfT5cvSnPvavoVBrqXYgfU8NfLx9PSVhgjanj61w8",
  "key21": "37xZoY8ZagPSzQxg6FzhRw9Y1s9gzPuaJx8yytedUX79RkHmg8uJeVySoSFn7truTmvYwaSYu96icit4ac2TdiiK",
  "key22": "4B7Z8VRBTifpWwsxBhrHP3eWfLNjpfujZSXg8QYNWPd6ZwAFBwH1Xacpp2U8cqrhc4Mwp9DytZT8zJFeUVZG3y9b",
  "key23": "4XohXGcayLCz9RBGSmkb13ekxRAKN6GtQdAb2dQUqR3Y2fXCd3KXy4uNCcsf38Np6shEoCyLDhJms4w5c3p56Vki",
  "key24": "2dMVX723JJ4yC4GSBK7LFjDDdpmC6fwXHEt1izyQoHXs2kDUZGkZCW9mizBr9zS1BKSBznqdGagWCDLBSxd5QUsS",
  "key25": "tey7dRoeMySmCTtHagcFcMKzUPQH65cnGGSrDSUPkgN5QNMKrRU14G1pqPNwhhdgyqye4UxPKJEUQtZobfHFJLm",
  "key26": "5SNzAGoz2KdmrFBmtMGFujMy77CxxzZtRjNdpTAAXNeWg6K6xmGc1VaUC99wfoNT7Xo8mDKLzeDRhyDnY7VGty8k",
  "key27": "54tJn8xXqa1kNArQJGUYSie8joRgd1TC91w9GiRHYmmfqn85xPwpmQTau173cqUpoaXVkRPtkWiGhK4hmkXAaAk7",
  "key28": "4fR97UfzPThNLoD6Do6Mf8PJQNRojsj9weKg6NT1TYLv8HhKXF2TbXvYSWjjvHDTuvX4yDsQKLB7Xkm8jGfpz8Xg",
  "key29": "5uxdnKmhgVbNY9Kuef1KzLoAgFD19XWCU9SDGGP8XsWkWvbXaNvYNkCQy8xn2PKepkUjdr8zWUtSY8PD4Cm72Wng",
  "key30": "daMxVbhs4Tqry7o7uRwyC26QuQwhJjUn8uEME2NwX3kkwyXw55LyAXuZJsZYptL1ToqDAbCFKddeuzPpAYQq6Qb",
  "key31": "3ygTzGQQinncSLFxmQEBP9YUE9K1zVpNPFzMMJt3eTErYasUSMCkVfJXwLRMCS2ZA2fjgUprAfZKghpEgUdpuDAq",
  "key32": "2bNuxT78gezrGFwytcyKwkxNBr18h32znW3C35PZsUoLiNBhMm8AHTRfqTZaQ8TJKskvkKy9cRLX4L8L12tuKmBQ",
  "key33": "4KEZZ85eVQf2VLUPZCVyGep65p53PEtBexSM8HnY35d8MVCYxw8YrMsdarDizNCNsz8sZZ4CLF45NoZuC6zRDTyQ",
  "key34": "3s7EGb6Du8TSuFaSYn4vh7J3TL73tBWRarZAHzQUvLWmRZ3SWF2duDbSa6cEmpXpJSHK2kiRRJVNx1A7rhW36w9n",
  "key35": "2F1VXCzemcPuCX6N3NdMvd6KoyvvPkLR4k4rGUhs8VAUNAxTSi7fi6iJHoEaKCKq9w4qA1U6y7guPrV3yhfHK3di",
  "key36": "54EKz445MYpt59GdRkqaibrmVntBvkwayXHHmjYUgAJEgAhRtz7JZdo1Ndh6Di3bxhRJdJi5UCaZGMVwwxhAw2B8",
  "key37": "2C7tXLBQ83s5zxjXmxsGxyGYNh63R5FbuK2jHWXsjmKBYN4aF5XEgsxu4UdSBfdNpbQxk6xQKsoJcJMaJYhspjr5",
  "key38": "3xP4Hc2Qzr8XzGAdmiBd3teXPNaYW4phm1wy4sSBh84tzr7gFFrhE4ULUYbm7Ju6zh9xELVyMM2nmCK4UpXB23Hy",
  "key39": "5kMPmYMAWykqLRFLRsQU2Fg6cWyRQo49vr4KVG6sjotYzQvUcqvQBpbBdwdxuhaV8n45wAiFFMLJV2ZveDQpiruU",
  "key40": "2vQAnbPymTmQh9ciZtTtpJqZCrYe4XJqxrfP5xtP2EJwTn9hEvvHFYqaCV7bA6EuSygBY28MivDA8DjLaQFYxsAB",
  "key41": "4UziskSBZ4C85gFRAA9Ybc92jpNmt1MjjDNDqZhExz4tLTdrGsbtdzmo9wHbzUkobR1X2fvoLT2ymVN6LZYBjs9W",
  "key42": "5pPhiD1mTS7FuTexprNDypmFsdBhCadgEVKjt73R9Cpko7mEnbZZcKfgrehtguHHvjYRhrQr1vfdvw9wDEeDugAL",
  "key43": "22Ak3xAhrjFc5WSb2G8ove4zzqsHvjoNYPxfnDmPNwXCAPpERV6otsjMBZxu2Ua7EVyXTKQe6yinvLbECLr6pev7",
  "key44": "32998nNTY6zSyusN5qJ9DiLfj3nGp16dVPqNGx3QGCDnQN1Xz21CZv8HMMh8qGshuSM8gm9eFHQTSzscUvkZiZjf"
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
