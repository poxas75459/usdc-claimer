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
    "PQiD49htfvwrHfsin6XB1fBuGoBCbdCSxJ7wpjuX2M49RKPd9nUNCJv2SYePHPgVmvgy1iNjwpAdwGfM8cbtXjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjaNj6Q4bRecpC8sRTGC3FdXNThuKtJcqDgpsLab41uMe36vtWVnmBeyQAi9hS3Lbc4j4CHu97TBnzygXdZRPwH",
  "key1": "4Z9mz6DZCYJ5YiuRqC4FEfwCpsMGp2cY6zVcM66FYbg5du4gEwr2DFWhY1Er24UJFLB1vw6iU6Mw1H4kHV6mqcVg",
  "key2": "4iSZGWKm6WjDFNH35fQEBsF6Ubuy59tTMiRroQJGxcfSDxC5cpBe5AFAuDeryQS6xRmyFWWJiKaJxn3tctmk5SbV",
  "key3": "632c84vgPbsByLZbLJFKaqJu3yb7AVETaXKTuKU1jhRnEAy1ah9o4SsGYVAt7RWmBj2ujPBMmQhn1opEFwKdT3Fu",
  "key4": "3nTGRwFBgVG421A61ub4z8oixMpnoCF6nRUzowjMgZGFNGuAxg2chpqo58Pnn1mPS4J1QNQnyiZUSrbfsWHezwpg",
  "key5": "4kCsocdXk7BHnMpQsnYksmcPw1D4YF4KZhX4f1FfcMQ8maxfeLGSnyxDJxWTSjYZn5J5on7fNoX9sBme1pgkfYnH",
  "key6": "4cBd5QgzMrpSvguhG78hQgZkyB6wd2m8YhZzhxkfGu6Qr9B3iNRdfCB5UPGrownVicx3jJWzjseoBc9GSWGvpti2",
  "key7": "4hQiH9BBohZwT4K5Buv7Rz5U6sLYSb5jYJQSj9DsPe2Dxv6aVsLhdwbjAVQnr4ZR5EpDSAcW6CaqCAGoWFTBeUJJ",
  "key8": "5kKs1wAGdNszYz587izmiyPC1uzbVE2WjFFcnySfa8hSrmLNHwnFwjk11be58iMFCehbVpkWq21hsPn4vxBhWH1h",
  "key9": "2mP8ZVmWyWA5KMqrCCnyNAa1KdjgqikDyuLLhCfmdfxuUDd3mpj46osSJaSopbfyLpNeHoP9FB1HrbU6n3n3aP6a",
  "key10": "rPQ2G9cZdZZo3jQCEDYFeRX4zWqPZGn97nZuZk75DsAe1zqJqNACy1P4CJiDaJmEkXRgpTJQTjuUVvQPS8cqC25",
  "key11": "zaeB7HdZbZW9FjELQne8Wc2StnJGB3tfPtqtEuiRgFpL9ctj6EEWoWgpxhryFMEtmUvV9ZX7fFWSGY5RxSxEooX",
  "key12": "2ur5B6jcXXtXEDKNXWv6uyTK46ACDQXj2RxgdDQHikCYhqWA7GC2uQ4tcEzDvQ7aNfjv2ujJ27VXc7mgExKeBscj",
  "key13": "3MjXJuxiWR3iAGGdB9G2KkN8qf5B3uiDvdxKrnUdsDZvYAGLwzednrp6rFyLaG1ZgdxuZj23j9n5J7Zt7GzQf4az",
  "key14": "3k1N1xPfrbcvetvZAzbiUPPTkvEWhb4fUsprAADL2wbuv7cdgWXActP1YE6yGg7pkaoJ966KXj3BoxeFm4Eppn1w",
  "key15": "2B4L3SEDcVArfYWjqvKTGtedLiWsGawkcubh6fr94iky27jafyAt1wCvDmany9ruBWZLrETQfdSYZ8VJaddJgrWx",
  "key16": "VgksjNWmhaCDbFmficDLwMkUkSP4rBgYp9Z1TkiHLeTUYsdVT9wuSt7ciNWNPkPnuCNdzBnqERzvkWbaSb4oPmH",
  "key17": "5bidPdyssr3kpNJHG6e8aXJ5jgwbpxFCFHwXVCc2v7pQTSa3bBqXYdmGz9CwgKEaahTaHpe5bkrAA1pLRHBzzhW2",
  "key18": "4eSgeAfQTXTmWQ5cHP844iNjvAJjVWFH3jbdkSTSmUjHy8SCzfTe25harhEdr99XGkRzLeYeUQaYiA9wvr5ZEzys",
  "key19": "3FhWXUD8WHCwVMrYjxHd6aFzUqT7rt7v4ayvewKqjH8AfKfDioZSnN2mjUE4KvABuhhwwAggayqbo65bSij7qxNX",
  "key20": "qVq5aCgXnEFCA6c7RNct1NNdBrcAfi1zYuei9pE9sYJ27CGvwKj4TzvDqswHrKo3mRT9T9ap38PwP72ADtrQAmq",
  "key21": "5g4WJ7UYC9rnTCsSdG9MvR7U1yyVATYf4SUKcykvrdQVNr5kEaKezsBgcSowK5Sr7FySmUG1FK9wSfEA1FkDVdYi",
  "key22": "CUiaLzD6NQUT3yWCdFypK26TYCJ2h9JgcmJDjuypaE7rsUzTUqM43FxZw98y9i7R9bBbGvoEtzF5tgLXWbYzb1N",
  "key23": "3GTd2FHsqa8EktZbDEpC1xA17n6s24tjJ2cfGyMVuT8UhxpjsoCVHh9EHcmT9aMunWcB7Fnpa1zHwmoW7A2Zg5WF",
  "key24": "4QSxCKdfCQpJGmCixq6jBWf7e3BRXRGJcN8n8LACrNErogMw2AHDUQKpg4vhr7Yn9SwCZ9cdGaepDPUteWtw3cWL",
  "key25": "3d9cL5qHqXRjV8LYhLbUoWmPAYe9fTtutQAEJvi1Qzg7iqbtfg1Vpfudydvpo4gj4nh2YDE1r2frS1P4QuHY8z96",
  "key26": "4oCKJn1RBPPh2xFPoG5yswS768fn9cE7ELePC4XDujZEuW7CrNfCy7UsEMuHmmSfw1Jzb2cFassh9QsiWhLogc44",
  "key27": "3vMJRmZFdWr4HKYXv8smKzNGaJKZYovkdsphj6NbFXurP4F3crHKTEsV8YJE39Aqn2mKz9wFRVSC1J9KXW7NGx5P",
  "key28": "4FXs544qCkepE62yeUvyvo61RzXY4ocuWBwpkagtHRwEwV6WULftC61UH6Ld9p667QyysioWz6n9stgTecFZdJrS",
  "key29": "2RSAqpMBNfhRKRVvg9FgcXGa4wgotm2nmdatrQ4w2QboYdekKADymEZZg9tzqBcmeL6nyHHuS1jYPG9YyGqeuoPW",
  "key30": "3UieVqCHkNaNkJ2w8hw5mLtmQx6yfgfe3pCAHeihvPjLMaf4q1biem8gYfYVn1Zy8Dj6B1ssHuMCnqwhHVSzqXiS",
  "key31": "2JQsoCsBbLnUd2QebdXMjvzXJ8GSG22feF29eoqJHm2ohV8PwW1Jx2icTk5LjATRCDDbg1H5x4o2GfQAB4mW4Sdw",
  "key32": "5EZxXNbF36Tyc96tezogoaMWY95fLJWDniEFJzAYyRRBxgwmFmZoqnkYTSpvcVpq3FfK7AtFSsRRDQHrHCGxhi1M",
  "key33": "4cgDGqtgErzGFVBqkumSCCpegfzvLZR2Ak84RGTZu9W5dV5U3nguFFyurXZPitcVwhMzD3x3i3E4iK3zXxSoSkdp",
  "key34": "4a3aJQSzh1M7fJmKfGkqm5k2cZqicDUd5PGwvtAN1i7WNFtPYdZDHg7AbDhR9VXJRbovUkXTy265mAVbqhcWTUUh",
  "key35": "2NHd9AjKHJMkubuQNx2YkP4r1LwRA5bgbgJ5DzJsRYAoFkMyRWzANKp371RQzcYnCrB8JKqkqjroSGVawZmaTpqt",
  "key36": "4EjwTN4vRgRTB8Tkua2JFPSxUMCxpJKGhGCExv4WQtRFnEaHBpBXejfuGBtHNGrEEyLRNz5y9rLPTnryxnxsSaNP",
  "key37": "2WJjX36gUpQAd8SyoD1foPHxEB5VpEKx4Du1vUFutdsfbYUcMPbyZEEm5dvJG9y45n5am7e93SN5PXJaRLruoT6c",
  "key38": "y8LLH87QSoCnxYjh2gKQztWXWWjir6i6L7ZcEpTn33aqXDJLLskqPe4EHQWvUieNLKsLjisAi66oey9LyGzvb4w",
  "key39": "32xxspULqYAyMmvBHcycqtDeNGTWqX54X1Z885jWfWM6bA9hoNV5Jwo4qhsBCobG3fBUSHyAJXzWyK1HbkzLonq4",
  "key40": "oBzu3tAwD3ffhsXcKdPsX1sxpQrYezBMxDLzRteH9RVUfDz4ik6SPqG6ZQs4aWPppp7c8BKb7skiDxG9gS7YYeA",
  "key41": "2ZDGDiV8gBv2jzPAnpYrU88pNjLYRvV2eeBWTeKiUTDeXZY2sWg21Rmwdu9qcPJy4Nz4TgCVWXkHUrEocCdAGNW7",
  "key42": "64kzAGSjqxKqbWi2EohJ8qTyepMoHmYxpX7v9tDSFHGAbdBJnK7yusYN7aZ1BwAaUtNSJuWVa82NjyQCuf1sqVfT"
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
