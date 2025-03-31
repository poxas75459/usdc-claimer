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
    "3Rfv2B9a5LaYXBtBZjssi2wD3s6GsBKxTJc6ELZLfCn27mGaNidGd7J73xs66XdzcTX2w2ukg7RgtHyVfuMKrqLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wdypSkT2PVnvEUdrEwMRieFY51ApV8hquXxxcuuU59v6Rw81JwCrnouLr4y39P7nWsYHB6gjVMeic37NrFfXNJT",
  "key1": "cvGML6i2ByQpDtcqoJ2DgnYrYVzvTm2psmLaEQ7QoQ12SXEd3zSmqnNK3otMmDTpxAcw3czCSv4c7GTELf6jXsn",
  "key2": "Bjx5Xk3bWeNgfdjQ3WVMcgCDhsuGnRFkmNYZarMf1HJemyEHuwR4UeohJ4KsGHUvTk53vcKJTScu1qaNoU5Lu9m",
  "key3": "R3dYYa3yCnhA3gHX5W3AWLqcBF8A4nvB6kVnExDBzp8FGS4gwbnRKHVDQD8Q1UmDr7CAeAzF5tuUCncEhnoH7TA",
  "key4": "65aJNn2DyLTYbz47Qt9RBMYPGGVfJedSz45Eod97XzAKydQS9Vkg3uNPM53w7p5XRdropxqUZa6vUmTduh6kesi6",
  "key5": "3stszP3vEhdt7dsPP5ikFbWw4divU1gm2jhb97tRkTZqvT2hMRHMuoT7z4fFYJzi7zRZNd9pq7pFUt2mqXXs1aVe",
  "key6": "47kmC9fHcEUAf5cWGh9hGfVn7bns585NiWJfSJ1aLiy7925R4RJMvg21EwC8ekBpJVoaqQz2fJckd9xyjdNyYrir",
  "key7": "3ZXNysBFo7Vf7TUYXQKawFTz1pCsF1DPXkC6xGymfQZqcmhyRUuymWFyMTnD6CjSrLF8wpSyFxFkza7u3EAhgkR",
  "key8": "2aoWTWYTAsFSRq3vcmeikMqkm3FrCSfaxSgH7NBFGAvRRgryHjaT15ntscwpZ5REVM4dU37LpDjFYfHh8eBDjBfN",
  "key9": "61gQsXWPRrnxQ8SDhVFzu2fvkJ65wbJBMzfBhEzyvJzUmpPnqn88VgZdYgDcUbY5DmbCnWT6DVowDF2mHJykP79o",
  "key10": "6bk5aks2NYAYu85kgRLYYVPRYxQcdfuhrLvqdtX4N3cV5czGZ7zo14kqW1CChkuEA1ePAPxKQLhWGJjdaQB6AnP",
  "key11": "374tFaPn1ctfMrypzped7TtydH72a1ZvbXgR8MmCcjpnQjUcBzXkJU4NU7ScVsSnGn2oyAE89wpc6bo5vuWjibDM",
  "key12": "JfQfTU7Pt9uvryDDKpZGmtD22sseQpFPidDN24Re3jrkXyGH8Ei5juFuKoouY7i1TFN7k8qAtwo4yVXCKFbJQjs",
  "key13": "DdcgwpcHbmcYSfCDEGZnUxWcHm1xDnvtqVCguCkUygTh5XVeAjiRR1JMH8YxFK8QnNfjhjUKj2rkZz74pzLtLrB",
  "key14": "5AaYendLbNanPGwe2BwRf987Yc4dKVApy6gMFyqkNb5M1QXTGotjiu6WJnJK3hYxto25Zgdte86n8z5NapV4dkN4",
  "key15": "54x58pfKFq4z45CMFDyNdYn1PxsNUDzfzAt3R9W6gYVbZ54zY6eyLZm7WmMXXCLBeVuSexhYuTbmhHFdMcvsFz2g",
  "key16": "3cK6PihAWmXoFpzp77UUy1i3BsZyTpzZBm9aDcgbahBtZEEZug6veuf2kbcz9re9Fm9ubh7jz1NSKPz7u21kSyn8",
  "key17": "3aen7cpntKdfoETQMkSySLSTU5nCmE8uNdciByWYph9MG4eibB5PiRmidUw6Q3zFkz7jmpAKvdeqn8VmL31xQkD6",
  "key18": "23TvSu9B7CRzus62y8VLtqcaEEyb1CYBkJKu5WKqnh3oVMRwZUSbHWYQ2Ucdasa55Yomt3u7hSFeDVSeqdQ9WZi5",
  "key19": "5H9jCUi7GB1MgiEjTe6mGnGgAR5itVfqFaJV7PiXYALDgyBhP8QE7vrYHcNzH8g4KBJ3oqoFnVG1mVRTZoQ19UAq",
  "key20": "4kJX7LNA3Hu61sDANVR3H996HMXhb181SrQWtX7gsPc3uzxzgXLP1B4zSaFPT6tpZys9zqnHRBAGWHZqsUTeCMHZ",
  "key21": "47wtAXzdkF78mWAcoxT2e5v7ceL9PFmjWMueZYrhawUaiNbmRCmQsfbBeFjUqrwStBznDEziDhyar9f2X4dwGbL9",
  "key22": "4wcfDbyoekd24judf2CUY5zbdjJm8bQn72tjJsJBoUugfDfkbBA2roBQ5qurMF5PJqB66xK8gusmQSFFe82wCgPe",
  "key23": "5MEA3oucUPysniUmxn6tpvkts4hbPFibEuFhy7SWcFH7f8xsttNJAiEF77GCwZwZGedLgsGrUau3H7citnVrXYL6",
  "key24": "4tZYtNQivWR83pjH64riRPp9UfSB5ZWgVY39VSsY5X8r53NsyafoPLH7arddigQhd3XjbTRtCZKW6YipZ3JYxhEA",
  "key25": "2XJgpRs4GtZjstV6QtkxXBo87mPWUCSF4VQ7fPoC9JYCZTtNhh9Vt88rJFQhQDYbtZGrVoH7cZtZ9FyJLhW8wwcK"
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
