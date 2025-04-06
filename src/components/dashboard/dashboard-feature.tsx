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
    "3bzeuU6NJ1GmfnSh8hpizoL4YQ8XFRcpCnCUVTvN1r42rbN1m74x1TxL6TrGdfw8CzPih1oPnaHWdAB9CghEDhEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBHVZzJCe9JmT2FTkPzacqVxFMNEDd5BwCUfEegrpqBvTe8Goy2um7y7ybuoQ7Q7ps8AErSujomH6oFR7q1PZAd",
  "key1": "52YKZD14XkMrJbVYBpcTjwuTgw7seC2CDYKpun7s1m5fpU7iCfBU11b2EraEfFZvq4vfMTFSvRnpEqBCW7qBdTzd",
  "key2": "2zpbCjh9YPHCETg97YKj4ztn1ETiEJQRpYEnxcS61cYcavCCXB22TSVhk2mVePGjpDPiENC6T7wDphnForpn6PfY",
  "key3": "ud7eJgT1FPTozEdMuZWLfEBh3setSBc3gXC4cX1qh5YA8aiBKiG3UjEnUE8ebpmCK281pWWxxVv3i2V4r7pqczc",
  "key4": "61QycxumkH4QmCfetgu4m4WXSiZwUonNht6gLUjX7KS4VSc764RTNCBnwriVPwaeZ3v5VbsJL4gp2qxjXPBBEN6T",
  "key5": "2VLrb6x2CZ7p6xiKVuRb8xsNYN4BnySNxRiGZLCSi4Bnahs6MY9zKzFSAm8GJDobZyLGXkUf8QnZ2rQHVofxGtwT",
  "key6": "5sd9hDD9Mc6N9ucu6799VTzDoNq3iR3U8fuNj1pKnEgmj9YGQtQK1iKZoKdvx2m6QcZn44ZHCq51FNWHc129KBAA",
  "key7": "4wHHCqD1eBbLPrhkSizdmhTi3meGnki4zG6HmzSfX7z9YXbdBqNrP5qd8p5dQZ4GYSzMSRujaB9yL9JYXBX6eNpe",
  "key8": "vHuKMtbSJjKExhi3mgaiiurXiX1QMFttDcXRhNubQ6p7co1vyUMvBrftrrP2AcdMmnKBvWVjktMXuW4KiLPx1mb",
  "key9": "3huuxVaaFLPGLs7ysb4W3tCmGyFQCnyaCqXoVkJd6RPxnw48AuuKdSmtpBjXFn8z8fii8FRCrh3ddLS9aeb8aorM",
  "key10": "5PDefMRkqxeCD9HT7indi2zuFNQCqBVn7T9dyFyHkon16gEcRNN3FVe4WCAMwpDFpjB8sanCFLm6nBK6tEWv7PMr",
  "key11": "Br7SmbefwLPSmbjD2MN4ngAU847sjVARGJ8HpRng1qbqt7bzHSz5efoQtExqAJoMFrKe2iUJB4DFn4N66kyDTNx",
  "key12": "2exrZFqjDXueVyux1KSwcMoYYfLyALxAjA8Uu77gZ5jPhFRfRZRBHWqriwfVv2ceBbLAbHSv7awxQXs6WdYK6KP8",
  "key13": "35kfUqxXeAMWoic7qo4UUP5vrMSDJ5QKtA4PnzkhwE9FEb8AEBZdC2whjdTuLvE9b4WTHLyQscm7ACca8L5KbwFT",
  "key14": "2jH8n6ijUtVxzKYr2oe72wXBqsrWHsCUHRSk86dBJii418mxrQ1TJqcBoNWvrLQuKgSaGFLDViuRURuYtqkkHxU9",
  "key15": "5vNNYB7KaPXM6bAZcPk48EcGUUR5YJsRRVyJ1Xm7y7Ei3zFyBEJkAeMjySf9Q89dfL9oi6mBE17XJcABDKj4fVau",
  "key16": "36UMV51Xs4pX7ntycxxHr4z2ffE6ijL3C1Qon56WwYHHCGpovFf9CU1XEDXiKYZYpVEf8pGdvLFgURwvftSYJVwN",
  "key17": "3XFaQwgTBN9UX5e2eRc3M6mDWTCEqoVrrvkobBSpeG51q4Z5KPC7odkCZ7LRP3j1ypGjrDuVv1gzzW7WzBqvnRQi",
  "key18": "5setV8cTDBsJhmv1QC4Kz5ApoQ98goj7qQ8iEwiFi2ZBg478VD7hj787fzqR5ran95hmdhDLEr95E5guvw97sbBV",
  "key19": "4WBPYajrKVLRgDe5rHAKe1tqRxexysSR8ngZE765YUgRmRcHD8GozmCoJmhC9UzLTdSy2XqkgBFRxdHDuwtVD1Jd",
  "key20": "3RjbfMgPixhyqtdrZZUHRfawcmyY2V9hxF63t7v6pnNyQzAD6zhWWftmK1UvPqscmJzSz3xqLU5s1KRGuWsfFKms",
  "key21": "dVJ7PPLXEoaVEu1e1xzUC5QFpJWkxPRRCEXWPHfPYAUwrAxpehkQ6p9JTvokSyCGTQ6Hr2UQ3jyxQWeG75ZBJAD",
  "key22": "3KEB6am8q92rxoMmpmYUxUCDrhz8pLXEwJJTQrED6qafRFxLZJnMfrkeZLaENCBV3HTBCvLmeWTo6DYFtzdizjqT",
  "key23": "5somPx8dJVhvipkqFkyV4p1V6h6gNd4Eimf9MtA3Auudu73A3KQ94GG1ad6NBjYGbDmqVyviZeLW8HpY4N1D8K5M",
  "key24": "2pbtemJXQdHqr9vRKaNuv9hSBaeJGNw58JKt6yE4ZF6whtK9CtkfjQHKJgwmf2eYmCExV9AmgRkWk1a8t8CQEsZj",
  "key25": "6F98W9wK8SVc2yjmg2CXQh6cGFfZUfhHaef3zTzWWhJ5PQc9ry2JXbRpto9jq8uFyizJ5UaWXHXZhsjxsTqeBKo",
  "key26": "67DJ8sGY1677ZKQewos4MVecAjxmT2Zm3xdWBHqfjCA3PmJj1C2GK3vCERMxoY1pr9xCZEJm56pHmnTyS3wKdrve",
  "key27": "3mSa5vjDzuCvjvYSF4x7xJwryPRiynHFBZCwdFifM7FCqkRUGypxS2VwyVjQ9THHZvjTTzAtrpUJDqPUcbuBMN26",
  "key28": "267heeZBYgR1GQbPXiDBtLq4wWuMBMn9zDVnqV24EfaXFvN67ZeK3RSjum9cLTeKy2VjW9jTqDfvfcpLajNK6zQK",
  "key29": "4cYnmoPqWCLzjv3MZR9DuKdMk1bK43jALsgFHq1AD1an2wNDZNsdVJ76wLsEHh84vhg772uymsyiB3HtA9bnC2GN",
  "key30": "5xNhc8kQwRVBFgsFHbLQPwXyLjsPAyNHYvwnXbd1y1womGQmQBqC7WbopcJqCm2y53ndiQWvdYWe2Qsh4d9917md",
  "key31": "5haiGJ29NuoE1ZrryVGnZg2K5yBpceJ3FAEmakCu1a2DxMgnAdrzNmipQnLePwiBFHGbr84n5UaHDBdiBiqEGm8m",
  "key32": "4MLjLU1koTsn1VdDJkxtKaXNqLvqpJZkCBjGcUzJLUg5jyKMXf9CBC9dAYcMbQLkhrRksmMsreojyd2ctXvn39m6"
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
