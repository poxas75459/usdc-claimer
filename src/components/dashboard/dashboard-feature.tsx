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
    "2Wm8YmfZwgQpxQZ3KJwNJFrQ1x7Zjrf3iZZCsKVCpgTHBR3iJB76uBQFVDg6585BJP6urWs8u2ejmukXzKHqerGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqML73dYGw2HcSp7pnSNoaucHkT2JQSRMurkqfWgxwUvTGq6KDv78ePbRpB8qcSxPen9wC4kz9RYCuLhRUniorH",
  "key1": "sWRcFrQJSZgLyaej3c8pDvNtVx3Ku4sfAZat1NFPskdUMjRVoc9JMF1ixen8aYqcU5fi7B1WVmts6B3WTWj8tDr",
  "key2": "5BDgPiD5ciV35UJf2biezvBYbn9yU5fqeeET5Q5XynpoLT8HsHiSD1ZZqDA9NSQ6wtHWHJ8FmD5RM4sbW1KKbvos",
  "key3": "3BVsmLzFcNLLV29EEePPZFfMzWcgAhTAMmS36gM5CSjeFi3HnRyJUt9xFWzVBasUhkcD9MTePAKSp3Bh3mHGXntS",
  "key4": "2Bzhe54h4g3NyyFjVASqmjHXgQeyCrmJrULunn3dKk2fxV5e1PW9ceg6oz1y5G2vau9D8bm24KXjwpiGNcUNd7jL",
  "key5": "4z8FspM13BqVp5jrtbdRzMX5ZTf4TJEJP3btqBf8qwTBZKRiMn8ga1sdmehL9LMUYZxcgZhBSv1XV7wongszF3om",
  "key6": "56CngCBWdhs54bbmKmZApYSRo62XVmBfApTgDY3aXtvFBs7CBcURML3WeumumgRPM1K7jLyiHuPzrRRGi8LKo2L9",
  "key7": "3TK8qBo6dmJhXggV5nfwEzAfZKs8s5gNTt8Nz8fSsrZsp81q1kpARtCdiZ5HssGowxyS2UR1MN8D7KFLQanp9vsk",
  "key8": "5mLsRZptL8dozfsjWHGbPrJEsxXDZCxSSEGDEac7To2wjewNz9Bq9bbqj8XRu9eCYyE1WGbYfMYYcbAuHNLDquhT",
  "key9": "2piw61fDYqJuSwhuywgUsNht1e16DGUoNoRMZsDoFxuP7pMKvSC2UojXwQHsLgwNZEq28AJV142BN7wEfPUhzjXS",
  "key10": "2Z9L912HadsswvDa9hZr8kbhcpkdx23bRymMVZ9JWkxpzK6dixA5U3UfkxXDH9hSzuqvydCS6vqSsR8CiKegiAvX",
  "key11": "35feaXfm5kLonrd8Huu5QV79SSaZ6B3n5sJf1R4oPsBCUZa8MzqurzxqtdGBhwUdck2v4jJUurCd7NEueCYSybeB",
  "key12": "5yY9DUoyzW27aK2bUku43vxfehmybFmehsDgonizz5mM62k4dXUvd3fdAEVPi4AbLotZjLCSYGoAEYoqk9ZovR3n",
  "key13": "5veskdQSGHhCMX1GFkhsdHv914gomYAZRzAVUBqRj63SvMyhFvhstf36vjJB4Vg1NZh8uUzNdfUPDz1JY9mShiZC",
  "key14": "2gNV9d3uSUH2rQw7vQo1ZyCNJDRXfuj8UJgG1BL1W5zmPACpSPFswBvCPKaSoDSh2ndVZTf6cE2i2wbDcv6XfyjG",
  "key15": "4RxUEGgyrqhvAWTvgfJJuwAbpujy8BDp286Lk63nSoVpkzhMXwL3dEwR3YhwKAvRtDkBahsSgy83kFCo4W7x7sEp",
  "key16": "3kaPYsYdxkUZH6AGUyjEcn79j6cBwjAwfiwnuWbiKdoJGE1VdYEpt6oriwdKxV86PhTr1LRBqx3m6yUQ6t7ZiiEf",
  "key17": "3UxfCu6SSVAZcYnD2yXZCuF9FAtH9zXXsdtFCsXpxyazAKrsG4zaRHhfU7AP9c3Z8hVp813aJhkf3RE6y6ku8cwp",
  "key18": "3HoLXDg9PFbLJRaS7De9gFnVGd31FrzwYrnrortdY3wvwdc4QvREam7nXQ9jCHmapfyHZ47cBBoaLCHNS4WEjdxB",
  "key19": "24QmWQHUw8syoWmUhwPknmzSZv8q7Gf1d4wEQRjwUc8KnY3Uf5NSFAXW7dvF5qkdPcWjX3C2mm68cyF9C2cPVSVw",
  "key20": "5jG86nBuSj4QoafaS478Qep4Zu6ZoD3MuEthx5DXy5ikysrWAhG9pdEy3h7rKtd3xM4AETwwLrsWd4mrNcW5KqHT",
  "key21": "3ShYtv1r2ZgyLTiwGK9Xqqzs6KLaLn9TCgsp6wDGfZXRQ27A3ET1HGmSX9xkPomZ6zG7Q7jfrAbJJZQQ83zNQUk5",
  "key22": "5g6Z8To7rGsXjAuEwRuPCpmZWWrjhE3rP3rFSAjPKRJpPeZfwYYgearTzzzzKDE7zTXyboGdHzj59BeRDTw1bpN7",
  "key23": "ooSnw6QbNwcUr7okgQ3QDSBiXAWr8KaPQ21zWpjrRjQVWEHakhYcehXLostxWEuPnPhzAFzvhLwkR9baJKBhUD1",
  "key24": "5HM2ceNb5AnzjmtpffT8MqB8xhCNZLH4S7bbSuhdZ44xCCtG4Cnh3bqRPpcH4nL6mQB5yfER1r58CvSHcruSNjjm",
  "key25": "5mvzuh6ZyvJJ6umLCfJEvLRvS6DJE2d39K16Tvt39SvTH2weJp8Gb28Y35bzU53NtdhBiRSEMJpyVnHr5553yTch",
  "key26": "4fe29UeSd7kBoKdEkwTTNwnFSBz5Vw5oiR6UF3wRiBd8XyGLviLkwUbiJji8x6UC1SmTdwCn9AntyL8omePUVAsm",
  "key27": "byk7aQw5oXQTjue3XbQAgvmGAngDS6WkHwHpmx3nXc8zDqmxsqJcFfS8Yr7ezoyxD2tET3hw5y1uBu1PDCQey5Q",
  "key28": "8VN1ofysB7wC1Ygmdv2J28Y7ht82sAoU32xymNTMSsz2Lg5DHpT2H7feNarSsEomREFWU9fu2pfpxiJXN8w8CzB",
  "key29": "2n1q45RhiSSdgAsVBUo2HvShXY77wxfJVLGdFMZeKDPoCcf9RsDVN9gEtZf6iSNZM5uGoFfQmenZXnzqkEdP2FFD",
  "key30": "4y9C4gQNf3xYbAYhJYv5GVWRzDHH29GieYvv6uV8CHx8iSzu8wpUX2akMjSF12cCrg6Bf1jDj3mZYELnXx7WgG2H",
  "key31": "5CigaFp8pjnwSXiJnowBHoJTK5cafkfTP9K9wcwhM592GoJhHA3i3wuPSCujERT9wJYtSJVMNvLyDcEg3pQnz9dc",
  "key32": "2QoPyK7XSfxz5bMMgHNwiJZ4wCr1oUook8T8PnGGB7kaXuDEdTcDKBjNTdn98yHvyACXGE952rLbAvefPKpWgE1c",
  "key33": "3kSAp53Wg7KM5RSTiteN7YUBT7WkNqnXTuzD3NQuB7SzyopqC7ngoPWyAHVbVU3vXRkXQcuw7vuFuGuL7PcwQPZa",
  "key34": "3SRYmwSegxA8u6BdTzW5Ha2qNQvRtnF52Q814mgrkKpVjgVEub3kT7FwN8K8WcyZvJqqgvCDTof3PueoQMTScLRq",
  "key35": "2E3JMQwcGw4gxfvpN9HiWFMmEuhprkaDVrqiqsqeoyE3n5hEF9C14m8FWsbSaw4wv8Rc6rBBN3MECpRdejhQm4Gu",
  "key36": "5xxDUh1y9oe5FYxvXXmQXsbiHXVrDUSa6VZkxV7iN1Bhhkfb2zzHatSQa1U9BK3W52o2TDdoDQ97486XkpsNq9ZW",
  "key37": "4TEdr19cgLmdT1di3FDfRTUBfVw1xLaAjXGUfghhNDPynYgvnTxDJBPjXUR4vJ3Wq3VNoD9uYyAPh1heeFKu2uVj",
  "key38": "3nVhZ6WA3ae6t4X4qiDqUmY9APz91wB81QTKaqtwwFsAfNYqeRv6YZepQpQPXtK6VUpg82zikbhHcCzrB16m6Kf9",
  "key39": "4rqTxrV3KCkunJ9JRqA7tTps9xgK5MaW65oSfCCS8FuiL5AGc8rrDMckQS6Uop4GN1HD2x6R66mrURYCne1q8h7B",
  "key40": "2BtYFVjdJ8ewzJXEVAhCptVCt9wJuzWLipGXURMazdhMHDin6hJxEUSaJjyo47VxskYoTgZLHp9rm91Xwdb5wZrB",
  "key41": "KSL1eH8UHTRWWRGcFi6ysM73ksBbroMJzV4fZZqbwoCFpLfB4RnjxwEWB3DEki9cMCm7tc2Tc8wooZm4TAdBHN6",
  "key42": "4BncBoK92VJRLuS3RtV1Rez1xKHGKCbdUx25hxy4N7TpzfgiJSc5ty7NZFBh6um2742G7jjBFHTey1WuUaKmM9pu",
  "key43": "5UxPnaQpyhPJYpNMsBHG9GVTAagePdtbG1rzhA899zeyE3gWneTa4ZdiVjeX3sQQgrWzii661e1YYS4CYS2nkGSN",
  "key44": "3B776aVLfmg3JzynKwTpjW42Y62zkWA2QK7Xgk6wjkcdE4xAGWs4om9ZZ2w8VcyRApASUpQEbQNts3JG43gE4AAH",
  "key45": "5UVMxY2sUdzju44yEUM1B5SKVYhxcG1daVdSs7ZYgjpzVXJNBiAwfiGk4ZU2d1PhPyBtmnYoN25p5hHyZTbg8bdp",
  "key46": "2foJSLbHg7fFbRNsMzEdegQC3RAqbNgfW85VTaCRnrUANAzsEwKHkZacjyEBAMyKiB1kt43p5SpJxcKRKDhSPuUN",
  "key47": "2NUGQBCWXVBXR49qiP5skWthnnft4exZmTHL2AZHLi8aRW4dKoaYarbsRD2JoHuhnCwuEqF7Cm9ANjjGLcWiBGsR"
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
