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
    "2Lf9VUCfvg12RST4cHYVSaqm1EyDuhs3aXFxZ29hyMh9UDnrt241kmJQrKwAfubhiKuhoNnpjQwn7JXRxCE4ffw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wz5kPArz96tfEiRUcU5meuASedCBipfQ8Mr495mdoKjJRYVsn4SQFrhoXhMogtLf5CzKMTQwvAXGnHeLPuhRABx",
  "key1": "2zD22QkqjMmaZG11WK44MU1LLgcEd7qdZw33nyNFFkNMajgDhyppbAZXp41Wptx9UMsxeDtGPT3KKZgfWpT4wQ31",
  "key2": "5xVingfYNkjwBNYFNjgJafBe1R6N7a7PUsY3MHkWcqYzQZdcUbxr11FLpBnwuEBHFcD96BU5pg7Zp2TBz5cqA256",
  "key3": "3JcHzAC8zJkREy6pwnoRBqMpS7vQgWL9dAQLCM7b8U8CB4HTAdkuVzPb3A4RqKr4xyNsSb1VuGK62xT73omp1cbN",
  "key4": "2oPELUDzWd6kWREpCwzqJvjRmKwGCkEoQVoW5p4mKJX8KZ7Cq4GNgMVBqV5PjdfaxKDvkwoTBCSGgnZphSHJ8gPv",
  "key5": "66cLtZQ6RU13D968qeCn7DwnHNpoKNGJKqZXdSEcmaSEBa5w7FDrEwNafG5QD5Udsqv2ShgKjuNWbFeDWzAnM3Ei",
  "key6": "25wwZZi42wo4X53Hw92u62y9KRe5h4UffYQYeRdjVA1grfGfs4MHW8sXRMPrGLPZpnWXXyuoJYtr2DeLXhHWWzwv",
  "key7": "2BRRdqit3x9HKfxBUiczuxWxZ2pYYper7P7qsQeAPSqMAs99NNETfkCQh4DniEWJCKFsjE8npBK13giwwgNZZttC",
  "key8": "5MLhQ2WtK7VEVWr3uVitpFaCCy6bitXRRR7ZzWEwBvuP78roiSS9MkBTvuhqBS48GrmJ288y2iwRPKJ9nZdEPyff",
  "key9": "5Xws4UaxN6YNEt6s6NCKvjuAZfAWAXWXhpziK3AKF3eksfHQk2HsQUqsaSKL2DrWW63bKKKeCzYCUoaALWPKBeC7",
  "key10": "2MKwNe2PmmrwZDq7ksbbxKfirGUj51uwHRVwZPyMJVBEYKuQ22bsw94dEz2TMxmr9vkyYimyQScR5Cm23qQTUcpL",
  "key11": "2cEzw9bs4tEwKBvdLAcgAapTk4NtjK3x3zj5mMLmQwqh8qY9J7ACjFYQYNGuYg6KKRCczw42U421QvFHYeTQDUzq",
  "key12": "5Pje7pKBkrWGCCMAMptPouU1khFBFMxQS2Th4ThE34jCqZP584Zwfg6VQg63LEnFW5rdQttTmM9UMBUm2BBMrBph",
  "key13": "5ZFMxymT7R9yhUgZZ4rn3k1neBwFozVaYtUv5jGfW3RDJR3FbwXAC26c7uCrrSxgZBMppLdhYTg5Hn5sb3cxY4yX",
  "key14": "3xjUyfBwKxYZZoQ8fCQNws3hDQF82k4D7f8GWz9FUVxKGANdgV6QxfMG5pirDrxTaRwqbUGV4SVFg9yFd9sMTv9A",
  "key15": "4Srt2hM1oY2xd1WN3ofXdaXsroGRMpMQVwFMMPGHgfwkC8KEjvma9nCre3VeSRvP9kLQrNHKfwYADsdyeDNCjn1L",
  "key16": "5sU15JRVE6caEZUKMBc1gXfkGpY3cztL5vUEpodZLrqoN7Sfn4FE7u1oD2ssSZ5rSXi5zdtfSLFjsjTQcXr8QuaR",
  "key17": "5XxF2fjmbCbkufietB3S2CJixaE3CJHrcpcYcEDPHce9eeKH4Zh8unC1nHFXfwYJe86hHwierbXaeVzdC5Ze1AM5",
  "key18": "5WveQtEFx7QwJwXqKs1xwB83Rc4WPVLufsAL8pfXq9USeVufURubvSh5VBeu1xyjaCiRaDEevYUEGVffinCwTM1j",
  "key19": "THKbnKWZsEbCsQFYfwK4by49zysYkZ5vsCuGsyA3fBHR535cKYN1SZ4E2g7X1xwfGQprqPRQoJ9GaHCej4BM2SB",
  "key20": "47JAu2WJFMRy5pdFub1quk2HNxqf8JBcLspf7o8P5StB7gJvjvvbgiTJ6ou3sE1te1zeSBaGsRz2mDMnxg2sfbP7",
  "key21": "61MRgP4tWBSXtw5qbqxqDFKxmLwjN8nVvTqdMwTT9eqBEdWEuX57WDQYWE8eCXYAD5AF7TnodUGJA3BFrzUk8tQL",
  "key22": "5bDRwjF8iRFCqNr93usiJXBzmmVPqFgoXyKBsvWyYHUznDxNj266zTu4TS6bTYth5btQxKnsPcfGkBF2Y98Jh3HF",
  "key23": "2sD7WzNCZLUoRbNLLvjSQj73keBjPoMGLcwCDL5gEx43qHFrSDZgnwyuzRY2JND8khwAAXv84tpmzviJdNxpm6Bm",
  "key24": "4AtjgGSCjWr4oyiSHtxtoNBa6ckvRApUmt8cP9JRhYaQCfQ9zUKb47wL4GgKQ1U5n8V1M7GHBokLx2u4niFwfB45",
  "key25": "2N5yT2KdBfcWBxJ1ANR4cL5K4U1tPuDwFZLRUghstKHJCJNgpV2bMwQfybzxLZeyTE4kWfnJNqinEwq136SZSDr1",
  "key26": "5RjkjMTdWkhfqNTv9mRzLUe8gKpQtsJKTnKP79x6uJve4LgB1q12MjnEdCyHQ3Vp4a6Zeivq9CDHR9yjpMGGAhEB",
  "key27": "RcWMjxhsrDFtSpmh8ngnsnG3vEM9XBBiu8uQ4Z7PdXGK8UiTMwPNJ6TWL4L1H93msRoqEWaFghEyzSuMqHrJ1X9",
  "key28": "M4c7ER6CnGsKQm33V52xVRsDHZrBKeuq5r3ypRmPFeTj3uuyGbSZgaxxpDtowA4XcnbHzHYy4Bnjne25w4MHdrC",
  "key29": "b2SsL7gRzTa5dBKrtvGNUHuNygNUT8xaZ6csfBnRgJSXukZyknzg74WxyJjDrecWhbDo8J9HbHpwBqEAq12bS19"
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
