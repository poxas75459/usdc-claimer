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
    "3UPdrDVqE14NMLzRHpiJhft6sLfGkB4kgV4neZpX5EEdR4gWgTVfqyhYid3Dq4xkKCJw1QimXYbgP6ed6F1RygF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjHGhBs6APnPAVXgvby7xk1TXhLbJPeqQfTBp2EXJy2gfBW8NPaZu1XNo8jpS8RFqvTH1oCmhPNH2MAyiEYznZf",
  "key1": "Uon5HS91CNNJpN7VqWk3g8gFekiQFNQvHT33k6SAxmYvC8Lx6i486wcPmwos4UssxzwscEs3SAvh5pv6S4PrMqf",
  "key2": "rSApsjxP7bEdANdZjPtobiwTzM65Fn564oLL2WnEed1WNYxUqtqka9JPBgWFMYY7MVMfygnVDyZP8y7sidbcpLr",
  "key3": "37fpRhDxmDubuKYLZsjDsDw3pN5Tt2xtZAhU1gecC9SSWteAaQZdqMn9BME37szqpn7xM5CqNDDHCmPJpLXKupmy",
  "key4": "3nZHXbcDifVT5YXHiporPcDW2THxHrdbSdTVk98H6iDpM8ipZTh4fTEGE7Fy7BuwocpnRCwEnJHTpPPvFrnJfAEh",
  "key5": "4vf3HLQDNeWxbCxqbzxY38paUm8YBvDYxj9pFVCGgEymyBnLfsCemynbq5mD3jAmw2CCqz5heZcPP1dys6JiX1SR",
  "key6": "oXsd7sJRo7AVcXjeM8RVnvLe7H1cbKkaUb4hhWyNes9HzToSSVyZrgB5BgXkYgLSLzvaxFqCEtoKLPBrPJ34aqn",
  "key7": "WvUQAgfc5pwtiJcEPkHBzFG3EgjmKSmfV395eTvr8fVvBzFyXsYcQRPE8WN9tRoSSzXXUFhwCzjwj61gwLGuj5u",
  "key8": "3Q3gVDWLvvohR7z8q4J5pL1qKovAZVUhR3qG7sWNNxPt4Z59eaHTBhLFuMqkHzKbipdSFByBNuT1eN8wQkD8Ywwk",
  "key9": "2vV4xjPBegZTbZB5msHnMRPgLiMF26FBvQovZbddrwQQ3H29y7aNoccTRTjunduewECxPjcpoSXRmFSWq65f8qoE",
  "key10": "4HrmU2gASUa7kRj194BUVYisioDjwfgGkJTqpksMU2vL46KbNs3xLjnX9oX8UjwrEW3E7k4KoYS9eYD83EbjDwM5",
  "key11": "1Qr6Noi8fcRgV5Rpqawh4uGdZFa8Er7Uc7YShtpEBc3NpGG1h1YwhjFSD3TVbuo6Qz8qDgg54oTvEtpcnukKvve",
  "key12": "5x1eDVhZPXjx74EP91oryzaYeAo4HykgroZgGqK97GpTqsXhcUvbmPodeTEM6rF9mFkHLjGt3F53L9h7uhUi89A3",
  "key13": "5o1JbK4SLzagdMkFCyK9KGNRw38gd9sxBPCSmDpySfue6GPDPNd64K77w7ug1SwwTTK9VRT2mg1PXfbLpLndnsa2",
  "key14": "A6v8DyshrMQBoNrZTRu3x1idHC3wKG3Sitq4WvvdrdAwUpHafAvpMpPs2CMKHa4XhpyyNtUawcxytLWuNoFtktj",
  "key15": "45Kf9Rv1nq4CCEqM1cjqrCxS1CE39nExoffQYjek1c1SwQuwRSR3dJjDg4jnFazNYWpJdByRDV8kbk2ks71cXoDR",
  "key16": "4FXHHJKLvFz8rKSi8G4XRCp8Cr8jmk4zy7M9rogpyJ9fdypgQK9wS6B9FDnyf9CjL8RXzwmukTu4FXeZ1deJvGN8",
  "key17": "3ZWM13aBuqaJdb6ypCHQFcTeq32uZY4iC7EmmhDGT7GKmxCG9Y4YKjiPj1rAZymuqav78eGBjNvpkNTCRBU6zgbf",
  "key18": "3hutM5kt3ttuiPRzNgjvjmwUSs9jvHgjffzzb2qoxSG5ie8MnUVJbmBmeMwRDHP3FMKy4ABvGj81Y5gTwj4d1SrB",
  "key19": "WdXQao17gw3mtxAvdVxqUBPMEnQvoBZkuVTRfznbywPdHk7af7KzzFz9ViHrjxkQHidbLK5JjsBGSmeYwrpF6D5",
  "key20": "2Qb5PC3qn8BdomLAbVGCaNoP4YgptkFwUwoNyhayghz1HhwZ22kSUqxrgcpW6fPeWoLBqbuSKY5PPCN5kfZx1qTz",
  "key21": "3ceYLMrXg22Zn2Z6QmoLH4xPmk9rgSqcmL9ELxvyKUSG8Q3xbFRczH216mtSvizSj5mWssatQJoDTUuhdrZjFA64",
  "key22": "2yGTa3J9BWPpRiXtN8fbTY776qwMBQhDGDZ1kWSYW6ZodXmiTeuTh57muppcc48nqh4zsVjVTv1dofPvHrFQ1wBf",
  "key23": "91oncJteKC2FP4XqbBfjQWRW4hp3wZWCL9LMf13EwciBM1nxPtLNyQRN9iuQ5sFFMxynxGwaY8ZRCx7YXoaqkV7",
  "key24": "3z6Yzk8Eg7poA1wXBaAkQTxURHEjqXNc8LNXNrsdh327rik9KHQsoEcTw8AmkXygmiGLgqhCE2Gmn9154irc2uqs",
  "key25": "ZSfYevCXiLaHb24HWvc8GchxXjgGE3huZnND69UMjFPQXsmybetLcySMXM7Lsk5jbDYmG3NPPBjLc7mQpcKdrAd",
  "key26": "5195UJQfLitS96ZB9qAdXmnU19aQQEMp7nAW7kqJYa1P1QfPdVrD1naJubpe5MprXZxBsjthTdbaHxfHhaDwNpn1",
  "key27": "3rtKafMkAUxztKBB5GAmg5AE52VXUYhoQRkVcEpM6eVuGswPweUUYyngs9GQM5vWb6xogMMpXdw3wqZpKVAeVfCs",
  "key28": "2JpsXsXpaeAWb5XAws6iUBzKg9YZnymdLe9k3raKZ72H1MHL5pyaSS1CYE1zbBtDDuTmA5yjWzfjrxJfk6qBscqS",
  "key29": "2TWPqoRqPnZ2Pd5g5AbNmEqXw4qSarYjjkQGGkbUfaWKaVzCRR3m9SScQmWHZuLTK7vM6Lzk6CTkJjjNqVfzStD2",
  "key30": "495cVVFaB42naJ24dQho2J6FMhSNSzLdHTSgvknaNLyMDvz1ZYDfTN5bcrbjF9x8EQfGa7TMKZTju9aXWkTwxwjV",
  "key31": "43nMsUx8QprJHmAVi89ZUWnBGWe5RvTvdreP5D5sDyLUFbhgyUDuVZhnoafdtGvCxEQbDBS9vKcdkg12YGWtH3gY",
  "key32": "2PQFZ6d5CQTrpChW4Bm8d5apJZ1hR2QuFVzbZSg2rfeyiwTonuYC8yYja2yeKywDn2HSDLwPHwZtgWHqD7bKpscJ",
  "key33": "2gXHgkGv8X7LMAP64rj77cCeQhvUTKX6Vd9c5PWWPbr8fy4D3jenC6eFQM5wCHkXxmJfyh7jAiD5rEn9sYo44TPt",
  "key34": "Z4yNa3rooBuvdYHwqQCm4QeonThVJb3gAQSkkfbv87PgLubsjdGa2ieHtnrzUQ2sV2uzgECH9NmHJ66v1ewD3yJ",
  "key35": "3gHDsxdaL2RrRDR3CaTJ2iCiyHbUdVJ2oyP22JK5yHTZR38gy1pHvYGcHzc3e8RQh5BJVR7bsFH5kAxUg5qYc7eK",
  "key36": "35ZjM8HUZ89HgzNyAAeKctP6oYKK5UFTea2uvTGjonU2UWhDCSBs8jM8jf5ovNjkouivtkw7w7X8LumohYiMcVHE",
  "key37": "D9Hjj74i5FLh74d3myGXqYSJjbdoPSbc1pZqfp6JSLmmVFZh1v4THEhVbuXdRGQcPCio3JZeGxut5ur8BxvsvRn",
  "key38": "2ZbNyNN1wKtuAQbBUM3sQNgSV4dJP6dvLR1fVXZhnqYFZifaAYxvwXLQr81UrajeK6bwkHV9VE5pvpeGwG4yci8",
  "key39": "4E99CTNSbje6ca7UZZZaYywnjf5WiufoxJ1Sgqwxm8haGUAP9Grpa8pWtmTjBH98ebZ7hKqn2fgY8W2BynUUG3PT",
  "key40": "4t8QFa2k8H15gbptvXtojzhuovdYSDSaPrDdWrBiTaVH1QFrWVZswZDVV4qnxN9XnmZ9VTjByAbegzTQhKDVoFAS",
  "key41": "2qiuhXoJ34WVmVNDGvwReBZApY4BzehXmN2SpmEwQRzBEMJaeiTgmrdo7knNZ9TYBfoCrnuMPDuqNxujRx2gAq9S",
  "key42": "35B9xw44QHqXqNDZTWfxS6Amb2RCvFQsTbgXhaeLWQCEgWwS1wkZucY2p55aE1WbkF7fSgdQ6YHGkZ6eRmMuncpn",
  "key43": "5y44KBHJE9h7i8P51VYXk9VhXirxVTiNVEdVjNuDLvcqfYau8rtTTGAM8CA4FHVwADKqn2LpCbmBtCK7yYLKisUb",
  "key44": "2qtCmzKxE6fsJcPscj7157c4DPGPtMyHhN2YZmNp3E42381WryuCe1yM1JYmcy6TtZi296X8YQ41nEy9VgXXhZc3",
  "key45": "2hVBxun8djDEJggbwvWCWgkQhwasSg9Kpd4vJikn7MUS9ANroy3C5oBAGVcLjxUegwnkPKLX1xt7DngCSLwhcqHS"
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
