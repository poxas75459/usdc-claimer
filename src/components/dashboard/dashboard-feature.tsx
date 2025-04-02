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
    "3Y8up1yt6EwargzDjJSwnTqp9jyRUjUJ8NuCoMzzUmCzD1NabJ59ARtHkxSHo77io3sH1mUXzsEcHRrZrJF7m6Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kc8A21L5ysWWVNeQkivt4xK9WtEUjVH4dFpkjmPcsbXgMVzxgsPCvRisqBWjhf2Upr2tCw3jNaBYpqD8mdUY6Si",
  "key1": "2yBwecKmEvQy1JNsGHA2xBQkdhCrvq154FzkCnqhJRUBc5SoLer4uvEAmSXodsX6GZSg6x3eGcWcZ6rwTJKyxRhr",
  "key2": "Q9Z6jfHWUyF45wzD19ktk8sbUAs8wJPxUiyPW5tH8B47Li59sLwN6483wFkJLD3T3187pEVjoc57vrNMEgNRKwh",
  "key3": "5MPG7JwXf1d3FcwnXEE7v86dD2s6D5kKxgFcibdUWzg1PF7wVEVMsn63y1NRQdeakMQx8HYdgoTLZhnKDDmYSjXz",
  "key4": "2AvuKZj6suL7jBC8hcYEjRtVzc3AnWYGpycCTiWddMBD6CShGyySyTZjgNSqN6nMU4RnGZfNiLKMm4niF5Yv7UwU",
  "key5": "2bkVmzfjGugUAjwU2SHiFzwPabG1y2coBVPSNXrP3kQbxodY24MVdSzUb8oogzcQWheoAwiFxxLyKdLLGdbcNbTe",
  "key6": "4Q9KW8HwdkyWr3e95uwmCa8AGsXk7TmKAPcfCPdPYHHNh4UfzVkbuupVAUZaUgrpfD5SU6uV1Acr6F3BUzoXbLBs",
  "key7": "5j5QvpxPv2Ee8N3gYdLNvhbkbnZ7byHhFsvuseRQ5tz7eoUrpLqxSN4xqp66NcyJoLz69WtaXuRDpmjnzwVJ42Bu",
  "key8": "4C4fqqAJXq2hc7hFvSb2fCgVVJGfTr19ySFNuyCmsddb2tVZGpigxpXQVkXaQGJ4RVBAdBJ7swgBsybutDYKuupa",
  "key9": "38qRqS4dyz4FnmoRfumhrR36GmFLnoumFU2KbX7bPGWo4udihRjrwCVhQ6sNdy6AWEjJVknS18xgt4VFvTpYDFLp",
  "key10": "5nx1xJngRXksjm24pmdSWa4jque9k2FgY6Y6EL4yRykiHxWdBLE5HkRGGUwp1NYRzupouDzUhRimKgsfnRnGGZdB",
  "key11": "FKvgwXPnhXqVFJy7Lb1Dd9iLn61FjFUgyT5LDUizB4Q7yXwiEK2ibqP2SMZ9HL8QPxLPqeAMZpM9TruScy8shbg",
  "key12": "4vS5XtcbfFAHwMeFF9YndxgdckSBTGozaSVuuRxqcU1Ep5ogNkVwJLqo7ruwn344cwGWBwFy6VTH497UXcvvuBdi",
  "key13": "4RhNmvc7a2DjV3i9s6XEfxkjHHUr5QkhEQZMR9QvNynUMSTvVYyMn5uPGLjrtN9dmzrb9gQh93wonCVbyR6s7aX1",
  "key14": "jhpES4hfiXTUiPdH8EhENFzmrKvBUGwPmq34zxXuzmcnBUw6wDQKgXQs8zkEEcvdSjpN8GUv3pD1R6NFwUe9qWJ",
  "key15": "37GSBRhfMNg9yrtuz3mTRijE5rxE3ERQ5fmNeeXixW5mW3iGzrKo6d5o5BdAE6LMHXXHmtUtYJXViz6uKbbRhgWk",
  "key16": "RkR2tyc64bko5rasAnpKVKiwAXMKz7CnJawkzp37R6dBC7WYwV32UYGmhYDrijN7WKFXE3r8Uxq6H7npVTDdbij",
  "key17": "5zDvPabcKSLdkLGcoVBLGsw2yvjFmkDSocMpDCC38c95WYS9UzNNXhh44fZkWN4SvGrdT2Rcd1dN3VeRg8U7SZyR",
  "key18": "5QCthtdzwcMDKwccVYor4wqKnc9a5JtXaySb4WGa2M3mME7S3J3x3uAA1zAXws7irgSHKgsDbZL1Qmgj2v23ZGEJ",
  "key19": "3hFcS92gBcd8wc71uUW9tBHiJFp69J9QqnQM7b1WPNEqXj3qyr9Ertq6it3H7nPg8xU3t4wAGNnYnuaiwmDDgTH7",
  "key20": "3JhKpZq2T1EnwCJ48p3eVLSF8fR78xWZFQRiN3eDBEiZHTFHL4McJ4bgwDSQcXcQE8aaDb4hLqyw1gyr9Euvi64n",
  "key21": "376FGitxFdg4r8uHVw8wbkCy6MwuzgKBLZKrS9CpoggzV9k9R2UT1BHP5p3tRZqRF6zvXuvSYPsHbzgFcLfH7DFq",
  "key22": "5ppTmoPmLgwaicoos8WwxC9dXWeqBRT89fPQqjvQhjC2wVmeQ4EJ9mAMxq81uUSrVnF12hPLn3ASm3uemrDLAanC",
  "key23": "5EoCs5JDzPsC6K9ybNb4vHD7uB9zCkqezJSfKwAkEkxtBsEsZfNCshHcSVukyFyUR2jzcLhTDE2Bq7t1VkkXxC5u",
  "key24": "vFC7jCFqdiEAe2ngpGJi8khpZoqdWk1oci33gCMaJHcZQCCiaqqhm77uSmSBGurWK5hoqKU4SbzwXc8SPWqtKyn",
  "key25": "Nfv4yEbknbgctkkDxUwQQuFxArauMHpr6R1nycegFLhhVaFvyc9Xas43EQu9kL3Pfnw3sYF5qxReXMruH5QUEHQ",
  "key26": "5qrMFsHZxPHwUmd8X4gRGAoN1j3mBKqQXz8ToPMSPP3L899kd8BUxexCzSoSSv2N2tYEyDxQTfMXAqGUSPEmQZMV",
  "key27": "fZNS2GzVoUvdAcybheLAiyocY3hbP8oUg8DVYLQgMu2Wm7hx6jgzNsgrNgJRbQypvk8HnYZoV8L69zRF51zz1Br",
  "key28": "2Y4CPsfgqDJHrLC6Mu6FJzZh4xpmGNpADpWp4AVVaHdKNgURhNTZ9Jfqtuxe2QZG1xg5sbkumSrsprMeoCazwwoY",
  "key29": "5cqdqGJdYo8UgZiE1yx9JeR8xjEHXC2rZYL8nkMiSGQzpqZd2tiF1pjYxW4S3aXQEQHUrVc2DZmLSsYPdPYQnNNR",
  "key30": "3dnfmF51uz3rZ1R5KrHY6kKF33jaF1bbWHFUjcSv7HfeXbGXzNdx42AvnxqwpJK4s9gwAb1g9FzpTw8QJJS5YZLa",
  "key31": "4dPUDMgyBbidHnKGe2eGdoZC4QKXAGR4aWnuFm9iVgs9n2gNgbd59o1roMtmau6AkLoXoANpG7Uk9E83B8AXXv7L",
  "key32": "5bfgduE4buT6ZEubU8tfs6YE2z6RAnLPCYLgkCXgYHyfFGt1bco6NjmFvZM6v4mV8yDhtfetANNXmv9kVFobvbxr",
  "key33": "4i6sDMrcsq8PTSjxp5UWoKPV6jFRu8Ln8v3VDeFDBgwvV7GM4XwdMXpFHeksBg8PEX38F9cNDf7FdTijcJuGzcnx",
  "key34": "5e6qdYd96koAbWcfKokPcdJSKhhEEWHKngVBKv4XQoW1fWsRjYAprFQM9zBJo9VDgrWqTVyCQMz5f458GMCy8Kj",
  "key35": "3LYUeEUeY2TDSgm1VoeowXXEMr3k9q9qHh5u244djemxHT6cYS8Azro3BpXpX1Nw51mMdTj8v3MuYB4Lk8ZLSyDW",
  "key36": "4jRSaN8sjhk8m9x5wZjUUd5mcpZ8Eou97ERvMLhVnRbTMCbQEn6uaDZLSFzqSdJJQeXvmZXkn6gvsNuJ98SrMXY4",
  "key37": "kJSeZeGD4RekbxYF6cpFTNBvsH6w1zVtb82e3Kamh29nfWooxQQzYHkR6dqSVxFzR8wZ1jZau1tFZwZpmhysfyZ",
  "key38": "2kVJGNxuQiNnKYCt3A4CFpNm2kaVMs2Fe5aYs6S1ZnEVgKGSxqRZ4rD9HFUaovMRY6bVh6TQm2qNwbP441TRhnGC"
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
