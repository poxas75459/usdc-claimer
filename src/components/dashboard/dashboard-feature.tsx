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
    "FfrDYsxgpUVW2d2mcjC2omHkhERrNyyQhiCrjkp7ao7rLtgBbb75LNvNZdN3CWV2nqwGcAhVRHs4HqRJPFFvneT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bcjx6obXtKq4nDKPFuhkvUHgiLWGD82zrXJvDmCduEZfoAn5hTRBQVyUDKqtYnrYL5akFUoe5yyc2caHPUiyjjp",
  "key1": "32F19ZantyK6AiPuz3KCr7oaHXuUywuY2VqZo63G73a2JC61x6CRBFMjpS1qparrLjdur8ZYRA3ehq1BG8pezuGi",
  "key2": "3J9fsBQYbQ31PS21N1m41nuQeT99YdMj2XopJyuQX5t3qyUmCjacuwNUvFKMnxiFP9QgNW7obwUXn4FeQus2WH8v",
  "key3": "5kZ3ATDYEaCcfitQbXiNdbiek5uCGBABoSUUg4mCRbSwhUPrWAu4hyKuNTb4hAR7wuou5aLaXq4i8j2BVfX289Ft",
  "key4": "BjPVeoLGW29i6zHXV6xdnKiSr1oQfwewAEfFGrADM47GxP5QCAzXcUnmk8fuZbcdMKcUtQ7rpd321wB7ctMHuf3",
  "key5": "54TECWFuVU3EJcj5wNRY7Vy7y2ruNqhftcdctVYQT7hP6Vpatp8Hnc13zazhmdyAcmiJpzbzNCrLMPkqdE86a2wJ",
  "key6": "5453oEZEaD22ZtfAiNA47h9XcSYvwWNsdZPLhBA1K24fZcgEqkY8ygbwntJJgzyhL8vDDafLJk1KUtFEYfR4971m",
  "key7": "46ey6imbZKHV6Et4T27Erei6HVfTbHKQLDwXV6YUUpPsfXhpSLqdobSJU7Qfv6J2hCyjUbzTmM1cuigbWin22Koe",
  "key8": "3UzN1NMshQpKWLGMsmkwYgLX6grCdiqsDJMCCbMuXPQ1B1vCvBmiFev4qLRLTjPLmnd97Y362Ncsvdjb3mPuLxp6",
  "key9": "5K9XxHHjBfWPAEt6kKhCYXQuz6JFjWpSFnjTQGmkpa5PCZEkLU2R4V8yGSZCMU3JjgW8xc24r9rFEphMhWmHxBc4",
  "key10": "28rPMD8GoL5a7f9PJDfHx7hVC7UVZJbMxVYEBxao6RtPyuz32128j2rEdx1ED5Hq4TwFgtiHfDVuGXyesVNdZHWc",
  "key11": "4h8R5roAh82BMm1ngYuvYo2DJJ1MuZHTt649nDLhNCY1S1ZtQZCQYsB6bkvXVBWHyKEKyjp7Po7LKZAnmFrJGP9E",
  "key12": "2pp6BdsDaVFwmwz9hrQijinTx1wx24N5D25P6xHTvMWr6kdtNhDeedLGBT2oCmWaQHuFN4ZxyjbGPiYNsGxfMAi4",
  "key13": "5a94xXfMtbxg82fmHqtqxBpAc8k3p89XVT7gQqEtuHHo7y7tW3nPxC1CkhbFfMpsCSBm9tFTVLKb61bYLjyFYWRr",
  "key14": "53JePXPUWuTv6ebZvUYUNvszTzJ5ywzeQMTN7Y7WKKo5Q7683QBhnN7rYqkqGZQBPaqHEm6r1PnQ4mrRmqPJDics",
  "key15": "89ZPjdqqVPzoYd1um75ytjWZoRQ85uEZj3BGF1QsSMA3CoaCDwrMbyHrH9S16hEXYsjb2xj4QRLJBkmq94eQL9Y",
  "key16": "jSd94j8uWV2tiHtUnwE5radLYtAbCvCLvuoHjbveHcqUrQbboBBvjMNTdwRLXtRr8VoD4RFoeVahbZXSWruTKhm",
  "key17": "4X6YHYyPujVdBWQM1sUyQ7GAnahWm7Th2cVrHBXkYim3jV4XSMCAGBTC3sMKUPzsfdUWZmaf4rKEs8MQM8cpqTqf",
  "key18": "5XxKYrjckStaD7qhhxTV3DPEvddLr7zt8HBRk4bscXjbBBk34DZQfvHFaiP318r3MX2spVQU1WFCTqJXzRNX97GL",
  "key19": "5dQFZHmVUUynFNj8fLhW5CkizrS9T96akwpJNhE7pdbDBW98RvNCU7vuzhaNctMK6718daNe1suFf4TmaYeMQmZP",
  "key20": "3SdLNu4zADpGEBW7RzwvNJgd9zsjMP5p5mXz3MFdadCEqAZyXPmhG1ef546AvwmZiNjwuxnHLzQgWM8tnsAUppiq",
  "key21": "2592WK4L4Tj7T8651RseizaJm9oLE9RkgezH1wm8qDTMDxiaWKCMMoMD4TLZ4J6RLbEUGdns6X1zbmSbnNbp3z59",
  "key22": "5vrd2U9EXGSnKkRBHksGjyFgVngn4NTqsqLXwYh4h2fMTCfdNabDp6kPT7PzihqKryXYfGVY2ERxkdR2kG18FMY2",
  "key23": "2vYesboj49VZN221MrAjbDdFLUz1zYAn2h8UY6gXrUmkx1mgHBW8AYhyvQj95ZzY4s4XsUqJJL8AqdnMkKckpFaw",
  "key24": "4fgCi9Cf4cbUaa8fRGBgMDo9yqVqr9NYdfEFSFCnnaNF57kWoXG7EV7ViXME1T81HmgmcFKCdTdvnouQao2L6JvY",
  "key25": "3XXRuFTFQh17VjZHcSqHduCsLTPgk2CYdfq5Yn3kNrNxGMMedq36iU5JmReCEG7AWxb1h6g2svLteusyQtpZUEU2",
  "key26": "4WNqKeaHodZpRtnMdV1aL4L6vRizMPYwEM9uAh1vVYrRtWCk6ko3fc5bJQPTJvwgUDcs2kAgYonrYq2YSxjb9dJQ",
  "key27": "eheEYL2QdkE1eL8Y7WbyvvC636Hina4n4aHWgitRWwF48DSt1n4YVujGRUwkksa1jXWWj23uzHXGt9uGrPzK5y8",
  "key28": "2sm679H7g5LKe86sv4fFAreTvMDaYU1HXjUoD794PQnsqPRgeCsmKEjHmN3xVxNA9YPshWL3x8jQFEp1trY7CQP4",
  "key29": "5LyznGspYfj3daxVRpV7bbcxC91PdFzBTbR3wMqdmFHFo4sv2G8h8A8tH2qe9isSLUBDEpDyGuGkr8ysxW6sdJP5",
  "key30": "2VxeUPfgWHW9GCRsZAa9KQ1DjcajoZKVHo5b15Qued4CbNx6dTS8peANqAnsDPWkYggHTNJhd8cRHjHb9R6MVmRK",
  "key31": "EFSMJiC4uY37oDSAMd83xo8vMCQRxndHgzxH6QvooXWD553sQ4TU7mUxiBmDUk6uPDGRnPieMFYDMxSwmowkNCD",
  "key32": "4d8djYuWs7bME5vgC61iwHvWxFKgMdXBjfX3oqioW5jDnguFwWBCr8Yhg5fziXia4XeBJQhE3W1U9mkw4xUreSsy",
  "key33": "2CwoeBcKfgZwqciGpAWMBNw95uizrFZ7H4nytgmsF4kvXYDajTVUR6DaFPQWtuPW68uH9aajbiL4rScPUGVyXQJh",
  "key34": "32BTH55FsdChYZMoBXub6q1PPLz2N8qahedzsHFyYr4kMzgmRoRWL2X5jbJjC8wum8tNPoMDQjyCFRQfutTXALLB",
  "key35": "m4uPZdYJDtxKT2eJoGPggjL7gEas36Twr41fHjsEDai1exeSGzuwrQNuNPJotUR4JHi6ERuKJdnVgToUm1NZ9JC",
  "key36": "YCE6EgjaLwYCn4diLRsTXppZBNKE5CrnHhKM4uXhbdvZKFuLUz9LUDHT7aMmrryqqke1218HowY7JfJ1XFhfEjv",
  "key37": "2fn7NQtuTtGoehrznhhHRWpRKeSUPV4Hf586X9H9LkQMxRFJ7RfhQKTcVhhk5qNhR9ZFoVwdHJ3cJwL9MZpCfzK4",
  "key38": "3rExURaPJpTbUa7hcbqpNQFnnGZ5Wa8DDmKY5jRcANdq1tK168FuYw8uPBF3TEA6FBkcaWiheM96b8Vo9NU8bKLa",
  "key39": "27LyjYXdJvozUaeU6s1E7EvFzYp7TAp5aZncgzdyCFZ3XAtWUbM6fXtKRPTL5YSesWYRZ86V34A7G8is4CXNTFDr",
  "key40": "Howv1KB8WKVF62YPcJPqVX2dt3bpEC2Ux1XrisPoxzqXniaAcnGbJAiU69eU4XHovwN9CeGphZiraAfanNyRF1u",
  "key41": "5La8Yo5QQNp21iZyxEy3yTWNCozsCoYgarxoHGWmCJD5e8PHExWmyi9rvqMtGBNz1MACeJLTDB8gyT7BaMiUo5i1"
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
