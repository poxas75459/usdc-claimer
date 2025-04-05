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
    "YcH9HyXUhp5vXAiHPdwcZUjdzBWa1puNBBkju7UBmF5ne52NNJL54uZctBLptx7meioyRbRf1mQhaLMrqHtHJ6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQxACWEguBarBwCqwKAdKp3AcdeaBtMFMndg2V2AYCo2n3w4FgAhHiZUcRtAeTQ1h3cSrBAFpEBaCodrKjjRmSM",
  "key1": "5iG3eyXfyQuk4TTS2Fk5rEqAdF2pXu86LbGJUA3nouDrMvJsMMVpYrcdxJFAQXrWSy273DPpH5QHCf3VunyeLrhK",
  "key2": "5RkeqYffoaTUqw9momy21ngy7YMKaTZ8LiG7dGqiPQnnimALmhCxdvmioVY6nZpyBGvnLurER1V41HpeuBXtFjfB",
  "key3": "4ub9R2tG6LxMZGLf4uHFr2fUgoRV4ZkCXCe2s7oGa7LtjtBLjFfDSUaMmBhEVvQMHEz21WAxRzK76bs4eWcHkav1",
  "key4": "6KZ4ML4fRbCpKykm6NqyKTpQB5BUq6hmWo4qScRZuJMoDTr1A78eKRM3sq7Vjg3X6Sr7ZbACa9wiLEQXSCvfN6s",
  "key5": "3KD716utTvYr4qH2gg2GaiG8g53tVieNdCgwuwLAjLe7GcChpXpViYSjwJV1JWUJnPxNiQrD75vqLb7Hhg78LZRs",
  "key6": "3d2zoTEfbig7ypR5aL5KjyVD8uVH8obRQHZ8ZBQDm9k8Gqccqi12JpXHcuchfvadZRLGT5BCf5LbA4Gnhx2zinpb",
  "key7": "52fM9HACff6tWXoBE5HCpywUakrVpk9omjWpjszNaiZmAVCS7RTi1T6gpUuQXCRwBcg3GqfSg9SpWa4AyBaMGjUy",
  "key8": "272cctbzGRQPaowcFaFjLstTZ6ntmpAMa1yN5PWBTU7UMpzEruzPLZd2bbxbfd1M6wjkD9mSzEmaSCeyrzqUKJJn",
  "key9": "cP49xwXcZ3tChpsa5h1EVkZtcxnWtmFsDy9TCvokP9Y2NM8a8JZ6pY1bCcAHCD4S1hkrw4gvAPEzZrCFYBGbiTn",
  "key10": "4t2oPXNenZdEozFrNm3r4LRMToLGGnYyTgSrCx7voFocks5LRHzWWQzNatagCNybQLLnw5LLTfBauvFVvCLMXvGB",
  "key11": "2GdtfZi7zxTP67iGKndjXoZzteMC2Km5zMEZsRMMbGFs4JKRNtimTtQH8C8HAx7m7A92QM19nSWiii7a5mFGqsdJ",
  "key12": "5qCxBdQUKWY8vjtVNseNf4oX24a3qWv68d2jeVZafPaQY9ssfXneifL8xMxZqEvdFWdTB61sGpEqmNBnV9jNhARL",
  "key13": "3kDFwe3SMbxoVSVfsA5NQRy5Aewqpc8Yf1Ax8KCaeqPHKCzETrNe9XY3bBnFKFT83WoyeiYCzo46wQiusaeBdFLC",
  "key14": "2ZCjWmR7yVJpcQWmxMG7UkCax3HpEbzZHUpHqfS4Ek35ebCrEPjXw22zFNMMgTeeTzqTyzWpUgKzmUbnHJMjZy8a",
  "key15": "gkJVMkzg3chczFA4MeSDGswtVyoAi6fBHYVzNG3x3vLt8XcoWUyj17UajunQxgQSozrkKev1au5WFx7CV1FAgxe",
  "key16": "nNT3JHSX4NhYrcJMxz8omDmneQEvJtgtuzTKVx5tAfiH9SpQiYDTaeNPrgwS2ArrjVkNFpWZPHkDWP2HdQ1R8jk",
  "key17": "52bwhTvsvCq4uzf1WSvK22DmJSqukrwi3NXkskDHQcTSwm7SmqUK1ZJvpDvXSr8ntix6FhFYmLUw8C1mgcedYTGC",
  "key18": "3XDjUJjXYXU2MbvKm8bmwBqXzBwZGX2sVyg1XY7cWPXkHNsgDQHyDwBDMyeo6d4XQnn6xMCrWPfLo1Q5gcQn8UEk",
  "key19": "257qt4m9XGKQKExp8akZiWc79NMApocKKHvb5e2jWvKVz4Z2ykLwvacmEaHhCLsBJxTk1Ac2bBg6yHArXJqx6Kes",
  "key20": "3YwvGqdMiiX8DS3KPGLJEQwJBnrATFL9ddJ2AsCMSDQi6EEMkvpocLxPqYn84nthYhZEAp5jgqPm4Ji3TNrPucbo",
  "key21": "5Ws4bfgNq3VNfGR1wyxVbQCCqFEoDtvB5FBo3qn6QdCdofRygpiBcuFdcifHP69uF6MWJ3kY1SkY523dTdtGd5FN",
  "key22": "5UR5rDoGtSaPr135c48q94TpPQgXqk98VwFaFzepAtSz7keRJ6Z4VbogtqvG5DsbA7aWT4KZ8CKNLvArwXY8SgFd",
  "key23": "3knKecER44fjDMcqzvrNCM9SgDfas1KXNWuenxWAyZh9a9ZGWSxUscQNxfPCvrg5K26kvryf6hpt18CfwGAa2KBm",
  "key24": "5kYUEP4k12pNW1kzThm8JEc6e5r8vHnuFV9CAvnJpwFa29Sfb3Dskzfww84A4YKpGCXcEmMASknAXj8iLtjdPhys",
  "key25": "2KTLreH9kc41XapkoECe7BSXJgso7kTmxATmg9zyXjhSWKPLKhzeoqmEMBrVNSTMcXsH2t2mkJ8eL21acPHjtmeQ",
  "key26": "5F9dHLmipMrhZukybNJnh2ZVXRJzh4Ecq595ESjromtTnpiAMVJSBfKyGm5i71VnYTJ8fzS4SzN2zGAmp1ZqZa58",
  "key27": "5SmXmuJrU4QAaVwKgsSFRiWUZnGXpvzNS1QtwLAjLFKfwDygKZNXmhCTW6aaDZafoRgEoWaFFSr7PnFkx8hyKhNa",
  "key28": "2u3ERFjog7naXJHT9wwemHAYMnCBbEJHkS27tArj67cPBKjSTDRLZPVGCwX43pH35DLboqaNK1tJdhjifB3LWVz9",
  "key29": "eKxGKF2LEyvUeJVkP3zy5xvrT4oHRCAtEF6Pj26SxScHvZ2EgKXW1hGJAvbPHs5XYLhbAVVLQ7HGMzw1trbqDBa",
  "key30": "2fEdicDuhJ34JVPykU79cpHAY8g4eFcpkUWhEfymkBcJMW3Mk38dMtx7RwXarveYvTeRrsbFoB3TuC4Z7Kncw29g",
  "key31": "gK3WrQDLyDhhJeNZN29hu2g91dwEGZzEfFNg7VPPS7xdDCBcFgPoiZzpXGsQpJ6byrSeQBMwuqXAtLZyvPqoHkd",
  "key32": "5b1EinUbBhvtnXRKoShzyi1tY99nwisB5uST3DeBY1CZGyuA9YW5FWsacLk1czpvZGkJLryUzKac9UaEJNZeSCyn"
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
