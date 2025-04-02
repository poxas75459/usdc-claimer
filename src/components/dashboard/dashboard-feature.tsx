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
    "5W2RXV8GAPv2XGeekCXwcY8VyjBjJnxgBDyBv5Q9EwvXDixvCFahHiuXS7acnLMXfnYkMaBdxepVpXpvJhXgVJRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAULK8aMBLEFcFjE4FoegQvPV382p6UnCqZzi64keSfsmCjVKJFFYX7v5kkbQMLVuC5K3aj8pi5Mw8cahB29EDX",
  "key1": "41oXWELybAgRPV3cZPjb6hcN2QnAqDvaVRccxFW7a2e711wYsBjQs7tAxQvwnhgiYfsEW5D7ALxxufRw3a1Zc5XR",
  "key2": "njkRYQC3Pm2gGQMUEbwquGzsLuQpY9ZqjFScpHxYs4VdyQnodUyBt4SUEbWs4XwnNmtDnnyX6uMSnBca6P9cJ78",
  "key3": "46UqV9Uoo325t6bEeireMmRtgQQXyPWeG6cJzmmxUx2FKEKmkN6qddgD6UJm624GKnDzCoYp5ohFPhQhhQyXt11",
  "key4": "4Nuc5znvzRXyoZDBg4gH6HXjiGpytWZVq6FCvp6qbXeBTuj12Qm2URRNMxT1foiu5jg5AeVywCSSQBBSsTKr4n2",
  "key5": "5YkntRbU4iTEtpHfDjJRsh4oGnCTDzimruLmfkX4f2x64VxnsGcheojhznW4tqmfGGXeKauHq4a9TF8P448UySfZ",
  "key6": "2YbcEW8tPwbXPnErahDUAEvcSuL5pWbJ4FubwqbysPSKqxzw6tNKPr2Zra5GUPa5THYjmFB7HyWqmfJ3DyyUg6hK",
  "key7": "32YNRBcVhdt27QcCsnvmeMXPSETPDJRpmpSn94ZQfcUGSFa6fp2ZytF9eVzeWB8mjnhzmqhkRgJNZKtjPBP4bKCU",
  "key8": "4f6Yk62zxhkQHjQJqzar2P4wohNbC8w4dXaKiELgtPjueNRHEaVwyPKTXUXDmz7K4fryToZ79JFE9QCRmGyuKD1A",
  "key9": "3u65Uz1Cg6tUZVF9SXg97hyTtx91tX6y6N7HwgMWcPLGbGijLiXtm5tABgmLJ8HQ9q6ADicbek1ZRxNJs3Co44xY",
  "key10": "X34dLCgesnZbBRuQJiqVSDLRUET7AD1JajXgk6YiknBqg9EuWyR9FkcCQXfEdCxApF46VkGQ7efLSTJB2vS9nEe",
  "key11": "3Z7ms9GJFbQDyCKtzpdN352dnqPyGdy8y3nGHq4BWZyYV2QnwWmrCeeQe5aFyKFoeikLX6WPBGCES91KyRsMpFEW",
  "key12": "3jb9AaonnivYWVG8pAe6CQa6w2gHvGLT3e14YueHkh6hdobMJKYdkxKJyfLiRzoC22gDxkTWtsoaXwXkXZ2fhpQD",
  "key13": "39CXzZGf9TwJBu1qHuFVsmiDmfxXeDiQXPJs6oGzvyyyK5eKqxtZWSLdMEix99on61MLaUwTqW5MpEDADWphnNBh",
  "key14": "Hcn8feciqprjgd2vrdTR5qYfehLMVAcN6JCrhVk86gnKNCZoLeyiFek8g2cByLkNgRcmoLho9LANozK5i5HjP17",
  "key15": "574FrN3oZ5ampTj8pkFLCzj3Hcj66m3MesUvCjYh6QAvf5mnS1cbxVK65pgHWjnQSYKqgwYV1GUYENPJUYHBLem8",
  "key16": "2t6ptxmoWTqppDCJb2rFzrfXujmMVxTuMd7grJNWdWyk1LsjLdRrA1ZuYcdkmkwuGbTyXtchUH5VTZabPQgyBrah",
  "key17": "ynfHZutvS7zTrFUfhXvHwShc3za7RTtYyEnPY9icMtKekZwtbRjX9bRRfPZ6hUyGrQYjJgFRpZRygBpbdBknxhW",
  "key18": "2UQgfzdrzv4bJePuYYwP1DE9XcSbVLJxwZ33hvtb6ZABwLuFthgXkGRVQDmoWAT1yzYcDLT2BbHWCBnBg2dr1sJG",
  "key19": "qfUqqGg5zckdv3a7MFuyM5mgPMbdCARZYm96zSHhHf4uHhmrnzd5XF5sTMB8brpE1hewa1hvVLGjo1EGnQRqePh",
  "key20": "5Jjn5shm4cBvkpAqGv1gmPJDFvMVrtgsiZD6hyth7jt6yhz3Zmrs5B5Ubf5hcuoYACEeTC6DgmGcqKYgRJwiTpP5",
  "key21": "189CeSggokZjZRkwDqZ8jWNC75kf4XS7cKqi7TejhM4Jak6VMCHfhzjGA3VeZf2GymuVyuqRa57p5i6vT31fqcQ",
  "key22": "2SdnRPVHt6u6ZNM88BP86Pw9anwt8N7w2tt3Yt7ycrnkPT5nuPeXhBsP9R6kVcR4v7wzajNxzS59FYDUb4s4o4nD",
  "key23": "rSPKq3hUMFBspJZoqab227hFPSDpRzyZthH5zKkLZdVJb9V2XEKWck7KbLR75tTgGjqkyBwYrVVj3CobDZcUVSk",
  "key24": "4R2UNXQoX9LrD1Uhz4zcVH7H9NVsxgohrVh3CKbesJK13esj5yMESHPenU2yiVwthbH1rfSiNBfFfZ7coRVQgLSC",
  "key25": "5CCFedeX1hrcEWra35SMroyWLZ3SMcxv89Kf5upT7RpuDJn8kRwZTsVQnpPyqMLvGiYhNwZYkaYnUR4etPyTjup4",
  "key26": "5P8iuKrgMGKNXLbWPsNL4rKRXPqf7uoPwhDuJbCu7xTFidvF3j1ByebonvxYEsKUXEoMs32gPsyHmA6G9ogCWbMP",
  "key27": "4xMAVAimwo48CbbMozH2rYLT8JqLpuctzofvBnj1zzTPiYq5ugDqWAWjEEBfp9aqYMNfH6NMrrhSVEWddv6xgwcP",
  "key28": "1MntY4PnyoXnqTHxLtkZwJpUosernAzkfwiQAKnSmtBZgbtwkoAu4PNJ4uTeWH7RiTaRHgRZLZ62rScVN3YZ8vY",
  "key29": "4hMES6cXH2cqaqZn6uq1sj9vE4p3GdSTU6uZzis4UqkXbbxiGyDw5oJG7RcR3uT7BaoTd3rD7DWCUbX3VgS89nH9",
  "key30": "3cUxnhn8yaX7dEwwP2Hr664SKnYLK8po8ie6z2C63ejMQAbV1oHsW7C3abBKWwmWcsDj1yjyUVpWpQxdGWz5VrSR",
  "key31": "2RSQi3LaSJBqXJc7kxJvjs8QkCiwBoQ8b222R7dTmdZQ6ScqTfvBSxQ4mM8vWimSCydk4EJeUajHVxL1eHz2rrwq",
  "key32": "UN9p1pxWdk45ndDFos53zZq8wUCQrQsoyGwPYNGAdRAuEpUPsprbcbwEAPHXxawpT4V3hG5JKpVabAc4T5dRzox",
  "key33": "4uHd5MnyxSWet4TZ37LNoTLeCmYBE2okXjiG1LDUujR9y8kcNv7YZFmK7R9D9XH92geThFumdxP8ko5VQY1TCH89"
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
