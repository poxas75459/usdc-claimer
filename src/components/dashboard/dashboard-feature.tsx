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
    "2a7pPUCa3NgXogZEPKefwxSxiibnnrUWPXfLhGe3nP3GFhxqcDsF4RjeMHxsPA5fjJXJBkTP59Cyhb7HF3jXDPtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AuRzCQs36km126fM3imuiH4UdidrS2td5sZLqRN7Woz2QWVko4BfEAbdbFheXX76b5Sd2XmdfbYpFFi8FYj6hk5",
  "key1": "5ukhXahdX6KoYH64eQwA7Gbpj9mok29HPVZ18T4JKxkN8qeyUmqmXAxecH4oKoxpjs4kJWFpevXajBmUXw3p8N1s",
  "key2": "EnnksaP2eYWhT8VWk6mwss68VeoTioUE9tx4SoBgshfSuMaC6rzkpiZnGp26h9Row2kiy8gEhSP1W5nM58yTvYD",
  "key3": "3aDqzS6ZKYXw9gvuSo4fgukXwcr45SNYJSCUV8nnCxaZkJJ1hiFLdgBgnKV3sr73hxrAcZ9wdYpW4kjfoqWoX2yg",
  "key4": "291uA7NyzfJXmdXKwAhDHXS8gnKUxHR88Rvs1XbBe6PtkeS7n6TM6gXwBztrZppZ5Pk4VPs8B4fRrCjnHjGQv8to",
  "key5": "4LZsVELg59x1Jzvyoqkb6zWvQq9b6qzd863BfAeeznVsYL815FvbP8NT2xznfpkMaTyCbSqZpKVt1rtCppZAsH3U",
  "key6": "3SJQeQQJ738W2AJwLibTsKxnMeeDfLVcX2KVpvvfBSrxeHy11TfPJEum3u68zcwJjHCQDEqSCALiR1dFyqS9N9ik",
  "key7": "R31mRMnWLkJzv9KRbjXb2qrTFAxBLfJrzsxdLZvwuVaJiB6hSioctBG9v6e6tE7aJ8yEwAvQ5LQZCxDPHzamoe2",
  "key8": "3B71mSxDWqRk6e5U4a8szLZ73qiLrqNwMKWNZuQdspxFfwAsLv6DipPPgumkxyXyMjabSwAodaAhDzMq2iW9fFge",
  "key9": "38XUgQZsrwfsVN8N8g2ieKRT9wYdfMGxVT9ZAkBdv6B1r6ytzD7WDvwuUaq1TgUBPe8bhWnytg4cDe3UmswgqzpU",
  "key10": "5HgisuLa92c1eY1g2gDzTW88xqggFgZ7NnxpT2h2VyDugFcSRKs2Xa73eJDECkpqBVqdRzThueWmUW6y4APLATga",
  "key11": "18MCGJFGcG5Hx7Uedh3btFDdKVADBVMiwbKeE2ksbtWwHVQ8QW4JFffyxtQfCr92gH8BebALJRxqE8nYtBpTmkq",
  "key12": "4WtgQbkYQDoAbW4kjNNEhtR8NWQBaZBDw9Mx5jSS2Av25ekFRS98afNk6MMnw5jEvhnRHDZ75FPE4wURRhAbM1xH",
  "key13": "5UcPr7KCpvBQMV2ZQKc1XXkX3HBa63Mcx23uM8NEQV1tWoU3WwWEZUBDykVQyargk7ib7ZPmB2HU4ykTysrYRCUP",
  "key14": "7CdPjHjgqkkNSoqYvbNT9uZmhc6q6XsmZLrfLpAVVovCZ1kPBTedBaK7NurWMfktBoc9pqPyKaHkQzLWHiJmij5",
  "key15": "3XkaycKybM55AGsRbNp19RpoMQLohraBygVpAHBqmnLwpukCypLR2o6kJUDgY1GUCt1H7QCoMC6PEKCsHmMbG2p8",
  "key16": "4fdV9oYcK8oiVnWP53JWX93KVY71RrE5wkmJKra5f4LFt6vGX7H8nZCnP7zLWP8LuczZW7gBafxwPWkzNp1tpvB7",
  "key17": "5NGSumTqh3zmjthX4HadK1T5YtEuHDtFp55hkkcbaJ2f2AcMr21QzZZPbU6GpjqVgwfVsooXJQCkahjw3htPAJtj",
  "key18": "4arh6QyW1KhtLk5dZD7Ek6YPwqagWAnfw6vrNbBU53K7cyZcRqEBVMPGpiFtacQt2WhqjAXbXQ8iULaaL1MECLMs",
  "key19": "4Kv91VPQtitong7Ah5ejmcMVVzbPLJQNKMEEkVAFRNgvG9PMQUaBtT5MiLVgqYyGZMKU7YEQQsvjCZ2RuVPA4XVh",
  "key20": "3EE5b27XBUQW2FDHrUfpk2DPQ6zXxtrcMoJCvDZ8be7VWtwGDqT1iQ49npwNYwNdhR8JF7kyCBJLZWmG7Br619Tt",
  "key21": "5p91R8YbJez4osTdG8cqjUumvvRfNaySJkrtDCQVB7rksYhHCAcdihZDjxyEupMCrRoRNrNqLp3gUxX7RknVr5kp",
  "key22": "22XJ552qxhCguw3q6qsCvvTXfHqEhjTs4SzKFxWrQ2hStGMkum12rN8Dg5E1sqpjUgrAXsAovUBUjPrQhaaNkhpY",
  "key23": "3cimpzGYPpoAv4XszeBHGsXqCxN5RKQkLTS5n6ecvR4hHEfzdGdn86A4WcKERuZoCV4ruth8AgvS3uYfJVMvwD9n",
  "key24": "2MAB4qqUKp4XN4KFa89X122xQnwDCnwT6fieUEEDPYAjv83zK2oyae8Sf2jia1u7vo4x4bBbLxP5Rnnv4bUNB2sG",
  "key25": "3djeJcbGGJ6PNFpgJGP3Xmaw3VCjBFeCMVWaYJiALVvuDjy86XwDgcm2UNZqRuevJwmF698XTiwtMdWCZ4Sxe5Gs",
  "key26": "NSBjVQHSuNY1GU3nZxkrUrxACKC2YgdDfYt5LyEksU7QspwkouMSZYSDn4MgkJFBXcxraKUnBcq2ddxBNvazteg",
  "key27": "5VTQWyxT7x9y6gXzH7STmaPv7EXLVowDoT2q77xsgpKVgMffx2QtowirZhm8vZ2XNvsqrsyYbqD3BLNyBChv1Ar2",
  "key28": "3ruENPnen2QunKNeLVbMMZHGXwUr7edJXb2iNhJxDWcJZq6qLzBfnh3Ewwd4BNRZpv321tE6P9r6zAyAueqAx3Z8",
  "key29": "3PTDcceGvNRNKV7iN4MQr86mbWsK78Edb7EC1Y9G2PL7duea7tpAmopJiRSECRbYRk87FJ5feNB1Nk27s6BqaaFr",
  "key30": "2bxi8L1EMFeeZLtCnLq2YQv8Zy4qoha5HhCCdYRTk7F3Y79zkaMxed87v4TaReYRzxp8Lq7ScA9HCA1jipCP3oKc",
  "key31": "5f7dbNFCCXPCTRwt2RPa3r3ediTxJu7juiJ6PTzg2pHfCqcF2d1w2cCnpJC9sNbhh9RYZ2qyA4vZ1kdG91gSnz5d",
  "key32": "38p72oWZzGbV4RueYSMKEjZs82355JqbFkLh7kYgsMkmnaBChMgF7xacbmcgvb6km3SDUNKwPkmU4VrSnCRkuyQk",
  "key33": "KNPQMoejp4GdtLa526NkLJVL7fj6rEoCU9c1D7PYxAvPqvxLxoRm7wmQdMKbFMg2QFFMeXSk6A2Lh665P7NQ5Hs"
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
