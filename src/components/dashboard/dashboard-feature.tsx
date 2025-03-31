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
    "2xj9Umiprg317G3mstJztCYCpv3ntPv1edNiJz6C9Ut58YuBWQB4zoYw8kWQWxd5g5WNoqMMAzm8kvt8iveGE3kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RN2Fi5yc1Bh5NfvAcjgPKufsSFNvnFZXRdMTmNbrMneq8DGAa93P3NYNnmu1gUc9DvGTCe1U7Dm9QGew4FPVzta",
  "key1": "5rwZfYnRnHoPm4XunzLzxWf8XojuVvyUqRdEYhcsUEUQNUrJ5ukBPMpcoNLbPFHQht2CL6HQUpbNLCogM2uGHtuG",
  "key2": "5cUZJ9MCjpZ4YfhYzGCoMQfsDoz7Lb8GgxPDZHxRFpSfnxgrodHfhfJsNtmyCu2GeTYg9ueCDT3Vt6t8NXscUEWk",
  "key3": "2vq91fyunWSDGng6YKx47nNcJo5NteZCmWyGcaDdPXpsj6MUVCLtUjduaDgNeqwJ8oCZN3m9dFrXHmWdJMnoJ8L6",
  "key4": "2AxeNNTy7TMUYSgkChLnxzZE4JFettwT6Ppig1DVJEYnYiVRjonmis3wBpuLg1jm8UiaHx5X7zhFpWq6uJNWzvwQ",
  "key5": "Hw7Boq448A935xLpRSRYQTtTRY7tvTPhqtbpHY2NqEFNauWrPJZbUmZDUwxhYCT49EYUVaUZ8CHPtKzMNqVKBsL",
  "key6": "ETxjpiWkGoMAHNa6M3fisMNKtB199woKYP5UsuEGtbKf3qmpxyUv2tyeP1N4nC7jdYchXKeWs4A8PWQT7oNaJ3Z",
  "key7": "2rmhxPZkYP2d5P6NniFQVKVSDUPt4sj7NHJHRWNyuFqU9EzjP9GERMxK84fpPfQyGWRqArHyocGidwZRBLFAt7Ae",
  "key8": "3muFnJVoesoihYr4Xw49NsgWBqSE1NFrEn4kZUsR83WFMqAgSaKzyFoT1G79VAmRTR58Ci5Ufd74TGu3VkyjrpGE",
  "key9": "4VxUb3NozghrxLjKBad7gbQcLKcyjhbFHu9Y7b8JY9G9U8JmncfpZZS6LHPAYDD8dxqFLkTauDp5CEViLy11MPAX",
  "key10": "5thjniz9mnmRP3qytzTvYruTUG9XWoeMWCFxXpA7v8T2uuNgmHghThutSNdvnmiP37hxGY58kPXi2JDza9dohc7G",
  "key11": "gyYCmaru77NXGYgJwTbEVjUMGtH8WMQq4aZdtdf9fxMR5a68vUygYuTG28RsjzSd8pgFAgEM8JL5jhWgtk13qyw",
  "key12": "5dZNQrNoJa2S8FZbeDDjXKpmeZw6GmHbgiNW2pwZFWFziKZRZhJndFuDyRz8Fcu4WBz2N3yr5gJLbjb1GVBfDqrG",
  "key13": "2MuXStT2LMowyJnSR3pTvvnLaLJpcmmQzQjU2RdQCJ1EuUmD4Hn2rcDoz5JvEBRq5fkopWSF9qc57VW5Tt7ouJ1k",
  "key14": "4y8dZGNdPSudxPE2jaQnvyDz13pFdew6UjJC9mWGvpW8WytmcXtv7mx9K6H7kCrGcFmyWtdbG662et8PGLEBzghq",
  "key15": "5gF9CpRAP3YUuqksgrPzUfL5YirNfX4vsHETdETvmUqJGEGahgqSms5e4jazYvizZZzhJtLPNd1jKMTv1aEw7F1c",
  "key16": "u5mK2fGhEgs1jctcTzhrHYYmBRQdRrqhUnQHd6NUFJtDeKy5LgMRh53pFSpGC9zunbdPoUtsGWJ5xhhtamT7ZEL",
  "key17": "4AV2XYBY4WVnsMxT7FomoWWvMnwKYqud3pTjykDkv8S9Mhk2BbeBpZmzfgnSUGWQsrTY28R7zDT3o7DcNs4LCMvr",
  "key18": "pgZ52GU7qg4MCJ7VQYkXcCyocJdVqkyZCE8DvEBXZCBDEQw9Y3pH46Xpvuef4kVGpF9LKDoQtgKgurioQMw6U8v",
  "key19": "nkg4FfuUn4eU1QonFFZJyVMuAegJu4VbXDeGGrj3R9AiEfrXHaEwNWRqrxBZ9GNiczKmGVRkEhuRehCuGBtmo82",
  "key20": "3nyR5AKfheFQXx7nb8nqt4o2FTWkcuRd4igqQrfFdFzTCEqzCoikz7Q4DNduTBmxpjPSZqazjAZ5B9pMbBL6DusP",
  "key21": "56yfP7TzGRqd71VaisBABpw4iey9qT33e3LnY89mnM67AZX66S3UpK8Kdc63gfSbaKdr7HwvnwLaqyUWLqLDQUWK",
  "key22": "hpAz6gLoPqrXqnkf9S3HWwpWd4edrQucJnFhKsyZUoGnddScnDfJk2Avne2MdnKTByBq1swCRAhbjEAaXuoQRLd",
  "key23": "3Ss2Vqa31adJ5Dv46MvdFyJURxsN6bh7Km4XZ7pZxBnGqJNwYdWaDCsgZk7Vpfk4m1R6DxjXqerbs3FV6iKVnVrz",
  "key24": "4Ckw9boHtQ42gYN7fF2x3GdpVkoozNSpsnEGJYt3T2bf4z8NBeXQmpUP3Dm8tTBntPgKpHqFeZSsKiauZa8eWe7K"
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
