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
    "5hgkwTXzH19nRSFP3xYtpNqU6JNMe39qLdW9jYcM8u9PkVTU15a81firHeuBkocPuBGH4ceZ64L3i5SRAX3BBUzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtaPMT2uaGYYQYx9yJqJQWmehLwvfFWJfsexvvzuS6ZbMnvvEHC3LG7p883WwXv38wnjNki1VzWQjFLAAVp6VaG",
  "key1": "4AKYQzVgxpgHHdrww8hnK4weNReb7hFfhDaSpRx4qyfjGHs8RuEtGQAKyP2WsVnkm4317ihw25XWVnyr663CKvNv",
  "key2": "6EyNezsnjciTQ8qHH3R9kDVW4ikrYSPteeRksJmqSLE2GQE6X8DEioBnrBt7hWbHB5DoBLmgP44R2y6DMPavZHL",
  "key3": "2NkNUAQBWKmxFua1dkG6YHk8pmYgNZMsW9ELVmR9dywQpj68shrHTtaNadkEKdJFLgPNnKssE6mATzvVuWJsSA6w",
  "key4": "2Ng8X3gWNo4J5PNKnAt7hubxBTvWfpt8h9fL13BxW6jGbLMpQVPkVSpLFdsxzHkG4mbxQLizjpjcymZJC3zSk2wr",
  "key5": "3URkViVhb2A1fHwUY5ycAKcoUVg3qJwnjps2eCLvPtVuPRg3Qsnjr7PbmGnJ19K6ThZGmuTXHji7f5VSHW5SQCp9",
  "key6": "39Hu1aZ2jPXdKDbZrDjpepqvbvym2Bs6xVYAvG4be2g27swEQ6EtUS8YREcTcEJve9MCwaERnhYfzXSpxmv6FY4K",
  "key7": "RGBT7A1mmeHVeBMUUkP3aR1pXiVHyVsvZBoXAbyZRuhWrZGHPQbHpKE3roMCgD9ZjXQuDE1mNfjFe2m1P732Gno",
  "key8": "2n9XebJBD1phxf4iiCTuSCZ2UEVwaGpUE4h7ZAFZsd63Qn4gmPL7oxMZJ2nuLpRf3zDTTrrBYzYraVmHufJrMxPg",
  "key9": "ruDFj9HBKJyv3EsRJMBqYbhu3NfWcLywC8VLkz8CqBUNcqRUTdnVhJynjWG6NeHf2vtgBcww8cJkBGbTzotjw42",
  "key10": "2kSC5kE52W98XJN4x8okrBaPHMFW1cGhwKhunVmSUfNefx9M1qMUuXCvY11xCB46pcfK2ciuEWjDcWGXbkcXMh6a",
  "key11": "san2EQQ7Baf8BH6YAEjeB3m3Jmag9XeR9XCVsSQBTwSGneZssY8dAUAPPkSPZCYLw5LKbAmhZx6gZMbeVNQni3o",
  "key12": "5QNzRwWEm817RGJhMAbR8bpbR467s9EDQfRCxBkv1EcJWfj28yhQFEZhxFUVW3PYQDmqb3df6AhHTqv5dHPZgC5u",
  "key13": "2R5CNZgheiLJmQtG1g8gF5cWQfjA8oyWHY9h2d8PjDkEWdmbTqWb6UaGD6tgbWSTxzsZtEjwVZfq3XF957Y7LwPg",
  "key14": "4fZBHuY2WrG6YjF6qYQpdANQMRYPi9fKGzTt6CsGrLUbBFJCxaq1zJJK3W4x6MZn8x9fqg3RYuovtYk7B5SSfo9j",
  "key15": "5M4846NPpxm8VmicT8JBbwAr5eXiAPi9Zwt8rJ3R2uea2hJ8C5TfgJ9x2LoMbwY9Cr7CB3cNuHUj1hAhFvYvqVvF",
  "key16": "n8GHcAfmT2cvLkc6pisZVsfdA54AqJsQEq58uDnApUtMfT27yahrgasuF3EuvXJ7bLJKLr6xVgAfByU4CDjdS9q",
  "key17": "2gVQkv9mAG93sqc8Yroukj5i2ESKnRkmEDFbM7pxM1aMriXjYsnNgVHzTEYwAMrMVF8qcPHX6mLkZMmPF4aU4iwv",
  "key18": "4o3sAEgoGZtjy6G8xososGx6wC7P7kFnbtfNWpuWyiCyjxijCMDf3VtisVMzDAR9c7RDKFotDHXbeQvYvfuvqYTV",
  "key19": "2EHrcz18YcrPzoCyuBHstSvYgYc8m1b92wk1qYGfMPAyz6Ntye5wB71m5SuzGTiU2C6BupDczmaxqL6PQoyPewJb",
  "key20": "x7CHQNseW2EiZGW6qoSSNTMo8xhRzAiJ8hh6MC4Ke9CSTPPRbc54eGK792PrBYxmQUJd4G68r36AsjfhwVjk8u3",
  "key21": "3ax9bVYBC6wyM6oz6F9wu6XSwawxLzAcFf4nwGNcFVv18DNmMH3AjBMy2YC9Ey5dfw539s7PJZEjD22F3iowjyua",
  "key22": "5Bc1bHxr2hsYiMCeqRxqMvzpR5FFjDDoztNqDgWHqQWgNZ7yC2Z78GsdWjNwZdhr31CXndoCSmwot3eDuA3htTt",
  "key23": "46ZoAxTxBMBDnMUTzn2hGQq8r8LYEtV4nHZREVtzZpLKdoSL1TXeRZ438PErnV6JC9GPrhNMahwQzKv5H6Nte4b1",
  "key24": "2yxdTHmcrxJomyze86hAWcQ9j7fLcKpcdrMS4yX9fH3jYzQVeosKe2gnHjpvcxbeskAZqWUsYuUkCzQ8VT8mb14k",
  "key25": "51FPv3WMkCUQG9CKSpJmkuVbpnckpjRzDTopK4recmWhP6d9zQxqyh5JQJhDSvge7JRxJvaoGMjAY2o2EK5yaAue",
  "key26": "n4L7qFzjyNBFvaazbNwGgriR8ASX9FXLaEi5DwvRij6qMwa8CGVhC71GwWZAet61ZbRfFxc7YvF2kJCBaS79JNN",
  "key27": "4DeKnNooKgm3x29Rc2hHU8rReiYjJ4SKSiH5LA8XmMr8AS24QYevXiytpyKnw3grq7Jz194vm1enkBnSuERMqVGq",
  "key28": "CDwnwvMGiXdDWR9mzGLdaFuYevQF3XV82KjnNeHTfcTbwNnkCob5CCHKScLdRffUcm5fqiaM7GCzsr9wRfBZst9",
  "key29": "56UetfiNYjbAQcphsE1NyChTVn2j4G1D5ZFcj2oZAGQeemJLiN3TD1TNc1FsukgMaJ21a3DZzySW5mZTiwgAy73G",
  "key30": "5DBzrHwPArngkCh5uAx4t2vEbJ3kXNVfndCmDx4D1TT5V8eiV78RxgMqJz2HtE8aTv7tSxvpeFEcryC5M4CsH4nF",
  "key31": "n4rdkj3d26Z3Q98Bj72w6bGJ4csRPPDKgqumJxCrZH4UTyzr2QULSKR2ajB4agKJqdrnT9nsE6zEEY6nG4aB7uP",
  "key32": "2JWiqaUCBrxSmcst36MmT4Hh7DzRGUoXj48YUZJTdbRXRAzk6hGYv8uDAzBqADQYggSzMZe7Vkwk1tdpL2JspwMN",
  "key33": "2L41cj9f9KztdQJAbfxzbdGVXx5sXBmytrAzzfdkuMee6CFsbnbe1PNLi9cYQ3zJpUSqw4wAvej9yc21fFxjEsMw",
  "key34": "4SM6GzNBC9YSb1zdkmYBTxcVegCRy1PrxWftQjmXufjUBhResWQTiz21PrjXWtsYHnRjyt7osyZBS2BCjvCxGusX",
  "key35": "2p5BoipTRf9jkw2UfQ7YUxayRm3qAPmqi7tsD8R3hAMs2DALpzycCck4URnRxznbLRFW8VqW7giVQqkx8UBr9DLx",
  "key36": "3VDEQwvJsvxj22cnCM9GcMvXxuBVdmiPu1kBtLrWjCBDepj6uo6cbVhYyk4GGXWez69rQwfr2vDkwh54Z9hHa288",
  "key37": "oJknBHjLtYnB13SUr6nVSKt9t7jBK4mx7MaVpG2NPukxsrCmoc7HDVCPWvfF3DSBknYMCQAAoxy4K6LUyAS82RR",
  "key38": "TkF6KREgzSHCYQ2WKC6JK4BTU7PyMCiE8YTiNcAMqkpcFkvjRweBVaZwP1PP61dcCbN8s7BbuKrzgrCMHq1Ap4i",
  "key39": "3Aoq5KuMUTi4BBW5iE8D95rwQCXkd1c3CVPjGpVfJP3UHhjFnb5Bnba7oZ9Prp6EfYdB8smEXdqJxvioqND2yrm5",
  "key40": "5XeRtQrbqq1CWLE2pckiBxzirDK5foRp2q9GAiiKLrPWB1U8mkzbMJbM45YDWbSeXHiXjY6VA6eM4L3gTvGMrtz7",
  "key41": "2b6LHyLEWH1sdR126pmrsTDTLs6BNuNF6ADCz66fXqmqPErDd8cCCvjQi5WbACUzxPGoP7eCDoECBkFbsWZ6n4X3",
  "key42": "4PSH8chCBtbQ7FZpyzbwiPwPqrcRxzvSPGVq5UAigvCN2XA2Va3mmga6vmv2DAscVhyDQuThSvTfNxchfuAdva6u"
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
