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
    "2HV8is5BFc1zviwx1mwTWkhKF35EkveaTP9XiqCTgDL1rkcZFEpYE2ooKezwddtaMvzjV7TZgndbMmpsQZazpqgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DckheLYE3ophpyDozPefLrcZMAkoLr7kwiLoYhrzQZtTt45Qt34zaoBpwLdzX1AjiqUqFtEcHai6AAPHydbRKm",
  "key1": "4b7dioeehtXaryTh5Bvw8zk97guCKb1zWm5xKCwwjAeXGrxU6BApttrscFQW5XPy9QG1d7eGN3B64F6hXvUneWWr",
  "key2": "1q88zLqu44Z3jJHxZTurP6tUZbSpCVHhXJWsjMPp8x1r7HUmUka9svf9awkHFkHQQMTY3h3dtXTTisJsAFwwrzw",
  "key3": "4k4v86sA3oNyGFW3GFxDaq57zR4HTGHN2KEgx1cTfGwUui55ETgoR7FPebLkDZJEgPZgFz4L66uKN7AKo3RmdP4w",
  "key4": "53nGekM7EwupkhsJK5BsA3199oE128ZeMSx5zEDV4hkqwvEU33J2ZqD6Ngrytr67AaMSwhe1oCGMDni5vQMTfDoy",
  "key5": "3CFLrdh5QjC5cSnJGaC8p5Yya6gpwX79tqf3aGmdiCTRVWNgFuP9PCXfBSTy6xeskAQAG5qV1L7ktzMRAQxmYKJn",
  "key6": "3uupEDAtJ2cPsHb22SSJyeFeNhTdLwnCf5dsaN8zkqLgzmHEfEKZzMyRUkgATrh6MaCgJgruFYTJyHpJf39Db2te",
  "key7": "4QQrB4ce5tgAHmaFfCD44xEQrSaDpScqTSNBdp7BSx8zvJZMghgXnW1gDMLpHwM2pySeZgbZ66aZH9aKB3t7SRXT",
  "key8": "23usaUmqiVo1ya9aYLHg1cyQoYBSbQnr8KwB9dJj1wibabYG2b99oNdQ3JD7JLQytsdrheGzwc6wgrHr8GYt3pkB",
  "key9": "2eRCyowzVj7jf4xJrqbaHZzYBCjpva4ghz3PS4AoxZYWRXkRTDgrhoBa6tTZ5Yz1rvkNwNXZU7fnJhRCSH7tgDEx",
  "key10": "3wF7Kk6WMofwovTLryi3t6EmfSp3m4y7tVLwHvgXLZhcAMHycAtjR48SewnQXqysn9oNkBUrcbJFLjsEkxr7i7p8",
  "key11": "22Toman8mnbPnjXEeRWKHqNaqjj5SpdxoaGbQJ8t6z8mRW2Lz63Sv4CFi4QHx91kdX3qG124HAUC4KstacANXVGr",
  "key12": "2oP8ss3DXcfyTJ28uwAt619wS3vbxrJ3Qy6ntBfrN4nUD2tJxHLmt7VUrFFHx3S4cojHDRb2PPpp7D6yp1UWcDCZ",
  "key13": "4tiw8dv9Xzac1gAjGzEtN7fvF1HDVb92xA2CKL5gff5nZGsPwxUyjYLLiLDjvRLegnZfDPWTVEFXHQnmhpiyeFJJ",
  "key14": "3Q1RzeaS4218GkHXzAJxLN9onFLQkPGopRj7hAWm9A1EUSRonCQYTdchAaEJqUMpydZr3Ltnnv3oHfoUDPgVoyLM",
  "key15": "54LTes1SyJzeieTDhTxUXJdqmaTYCvJ5xBV9ZX91nPbEYGArRhnYbePNAwUp7hCGFt382v8cvNh9HuAxo5Q7P8Y6",
  "key16": "2sj7nG4ZuttFUWycpA3G3t2r2iEPe4Q3s5wDggEgrCqh6tEHqna3QJmLU1LjQEvygCdFAFopnWGhvqdk1PiE812L",
  "key17": "3LSn9FnM25PEW6SPjNE3qAnPsV7wd3aoYpNvifYUbcXo4uUEUSmDRYMnpe3chcTwfSADHaeFtrDeMG6WmncaEqw7",
  "key18": "4uVsSVBvRGqJ8Jp2c71rPeUCGG8eHHmrguXHjWThRpYkyM8o4kpvATdsRrQFJbaZ6iBSgDNsKFUoy919XFXqKV99",
  "key19": "4VcCXmNonHPcW9RLDeAHYnS1GK2PWg8b5QYtV7XhMDQgTTwPDWHz7ikwbkvU9WxgxYQT5oB2KHYbZVkbAaPque4W",
  "key20": "399jVj3urBYQCaC6UcFDw6QMTyZYbDewRGFHbp7wjfPqkNskV58EM7E7W7WkR5iBuNtche6zMhFtZaFUAoVDyk4r",
  "key21": "4qLBPjdhuNy4pjDaAyaMxAReRdCvspi5vCiihS7jGTryD95rdZ4Vyfg9ytvU65HJgVD9q4RiBfCJJoXHdtR5i8Ww",
  "key22": "4YLovPeUd1bay6DE2aUEvrkwACt9G1SwQx1DqT5Mx5qVocP2YuK8nL78ybCSQWanvbboZVzKZMTWj7LdTFgxFnrM",
  "key23": "3Yn2SL3SThkmhHLQXMW4fqwpNmCndXmW1uHu1fkdJUu66Wyonsu1TsqsGCF2VmGKDgSDREWFdgCCcYJauFbmDsav",
  "key24": "28XWJagYoj4nUoBcL5NDKPyQuxURD5ckrv1j8Eq7EFLxhNDT2Qvx3AKWUvUaK7yqaTTgrk9QrgDukqaf4X8r585N",
  "key25": "37R2yuropK9o3rcSXMTpEs6dvE3zjEtwnL2J4feJEsr8ekJb2yEUswUkBh2QCzc5mYkChBfGdorSL1115R8YZFyJ",
  "key26": "3LLiFvDx2JjV2jXRPj7vSadAri9C5SdFDxGggPuKqPHn3bUgwJAzPyXFyoa7JpLULnAcfcqQXHwerGpJpaMmQHMA",
  "key27": "5EFHtm5GjhUYuUNzunoNaZDFHvH8J8wqiBhu7MH7wbMivmWwiW18adH3gMBNR7uCEjS4u6ZxXVT5TsV4uNpQYnwc",
  "key28": "5b8nsLxzkP6QPVQWKabAasggY5SmxwGYNMSRVTPyN6msg8a449krQmXNYSZZGLtPZgT7SkQ7jWw4u4nf3zkHNTeP",
  "key29": "3SC5ppEkpJLt6Ujr6CPmEG2jnKLNAGmJrPRipvxW1Y9r1vHBtLAbiFThpAPY8vhowV8816gnkBdGKzZcwaZUM4Sn",
  "key30": "3vriFaGoo9kSPtrGecwMm6b2HjTEwkVJpQTePG7B4bF5hLtjJyn8TD65HqQg5RzzuKcDixETCVGGHevBxNTgAHmi",
  "key31": "dpQpx7Zu6j3uedvVvaF5RiaFCHU4kjKQ8w3e8VUcQ5Lic3usikR45Hpz1JC7TryaDpWNDo3MeTwRWVxLVLaP7Hp",
  "key32": "2uJrzUHmC5C8E83DauQQDdJxCupbD2kxh8qXc1VjcjRLSghAHXLhCmqUAeDEKgpvd3c7VRUzwS2rHspak63bcWyo",
  "key33": "2UNYpiNhbkPYdY1RDt91p5gxX3VixJHTdvhK6tvkBw7U7iPhGVRhRbFPkiFGXTq1QHxmZgsVDwa7qsvCbpEXXKsh",
  "key34": "59w9cM3RjF4cChafeFSjcNh6DnyXKQuAKJYWe5wb4XYyGgPcrxpTYNdKZ9yU2vxaz1PTi8SrEtY6fFAF1e4go3Yu",
  "key35": "4FDSQrgasRm4Mqhs69MuidAiTL26SCVzJ6dFH7u6rZX1MSw1MckXygK3384Ap7NRM646MXcjUjJTsrRFGVW94EsA",
  "key36": "4sWDNgiwsai4VEWP1b8HyPqMr3326UwVKbSd4gT2pTaqP1osdJVftdBXas2RNxtvzeKC7XZuhERBXyf5Avjy4xS1",
  "key37": "2GbZ9k9EunrfsR1VGDrazAvagrcV8Dh9X7RhYzKeH4ArmG2mMBGMnyZswV88Ems1zokT4wJZGP1WxcMWhwUUq9ov",
  "key38": "3cWQ3kng7Pj6BzHDT2vY8bgF5LDRUNYNNKo9Jc9qFryE7hxk2jqoaNLXMPT9Y69upeAfbwA47iNfm5TZ7DF5bimf"
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
