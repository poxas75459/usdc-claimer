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
    "5ujfYhgcHYVu9GUSHnM6cF1J5EjTdHbS3PWUoYLYRmtkED6ToQEAfcv6Yni3Q853sbfmrFL2hGCWwE87iphLQKAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hV2iDPMRfY7LEkNYseWTfQeBBekYk7zwANYhYDKrT8NUxQce5dTQHtrjwtrDq9pByzbbMupctRVWFwqiMDw6EUp",
  "key1": "4Y5je9inzRKKEj8F6p76e3Ks6SGj9adqRLpr9JFpz5rAqGJByzav2jyiswgoxu8Dd1QT8UhE8UNQwP9N3z1mLT7d",
  "key2": "3TLZzHNS5xBmJDmwoRCqc7h461vAdnLADsHAHgZBNQ5G98zMYssF1PomzPTcnKmnNrW3rMH8g3NeB3odgXu5ZyKb",
  "key3": "3ZWitNmGhqmWQLHMG5dvMiSWvR76VocFjQAXvUx5SfHpFjoLTuVF9iGKUq8HT6F9SUDxzha7jCc2YbyemkQCtj4n",
  "key4": "4X5oFVt4Y7L6RPvdjRir1ZuvbL56XwB87mLLmyVTEnDrmTUwwYaZpo6SwJgcEs3VN3F1drwcF2x38pYjUN4ow41V",
  "key5": "WmYsffAhWmCsmERhSFFtBHBPyrPoEy7CXAVprTrCH6nM85ZM6hYLFdwjnFe6hBiqkT3tkvRXW5bP2dU9R8xo5pR",
  "key6": "2k8itENz4EtGrMNmWsXRjVcUCksZ1gBDqLo8mkjPMk1zMxKPHHe2DXyKbfTTRnLh21P9fbnQVzXCEcapWRconQko",
  "key7": "2f81GXoFrL8F9F5VW9PUd4sGC2MCSthAoiuAqDKY4habRuhDUVNmdn55vPXBCpqV7D4J1EFj3fqdNrwPfkCkx2LY",
  "key8": "2eYbKujYt45PVgHVAqdGsU4cdVQNiWSw5UpHFvaHwu6dBoWYQqGwj8aNUysjkmsRu8oi21CifCt1SZ85xkiPdtVY",
  "key9": "2Fvkrj3L5bSe6f1sDAeq4fyF5GarQB94AUm3sVVb4A3jRXTNWWrSf77ye9NDat75kKgNUJMyK2Pm7Vq6FchND4dK",
  "key10": "3S145urKj9KM5uLAfmjp1Myc9YnuxpVykxxzjf1fKMpUph4ANMYnZw3kkDmohnti9jFR4kJCkuK3npHiSQ8cAgAv",
  "key11": "4J2dw2A4sdj7FczyxgDf5H9Bez3khsVe21UYJQat5UmyJNzQtAJpQW55TFUCXhPUMDHzvjNZTiUomYxt2LBd95if",
  "key12": "4cp6btWit2Ys9MsRsB1rqPnS8SRT4oUcT84SMzsTqzFoc7cf2jKsWWJhDtwPAFvdbNX3Ey9H6eFHmwk1tLfCEN1Z",
  "key13": "2aogPEX8svwZ8LZte5Yvzy3LrNTfzQbJ5Z4iS4ppsomZy9vt8bf77HqGwTGLwHjvpVwLz76EQ21o3Dy2zBJK2aHM",
  "key14": "5fD4nDXQB5G1j9pwEEh4xVcPbt8n64RjRkHsg74ksPHuZneGNmn9fnuLx7uVYrSjnfQ1RGE7RudyVpKcGuYXfRwV",
  "key15": "FfM1n2k829yV7TZGaYKDrn3ztKRVFGQreQqAKwaHxCzdqGW2KPekRaG3AYpLhT5CuSuNKDMJ1BhkYwC7ZFNQ9gB",
  "key16": "jsxUwikspifjjHK1x98JVVvDLySBGQtjM6JAkXiaXtQcCBgasNnTRov3XgSeSkQVgwFMjDPhiswcjjR2gy8TnAP",
  "key17": "3gtLXW4PE1t3LpKjnJVDdH2Ff7ng8Hx87gQkRhkgb8CSNVJ9hTSSiJmD2GWJEuEb5DshtASvYj45Hb6FNzpXXdtV",
  "key18": "67WcTPxiiaMURsNy1UbCUkK1AGroNbTov3J8wuRnUeARdeVixhC4TreyU8GVxko63cmeZphXMRYuboUemtJPxV2k",
  "key19": "32K7JDSPo7cHzZ94xuxh3HLk63AqApBR4nLemJSZFTPWWok8p8RZEEVy4E25faCLWb2ygWGjowh2oCa3ToKpguBP",
  "key20": "3g1cawn9uXKZbQKuARZZT2gSPbirz4mZciQnXnsgpt4Wt3iEni5JAtHLkpKTRfXWcN6hBqNh3VJcpLJkySKk7hZ6",
  "key21": "CezFE8Hdv3SwMuLWiMYPyKpbv382seZEDTd4p71nk1KpKiy1MYr4MmoyRF2E1xBDNfyGa7Ah1ekb1hrpZppb3nQ",
  "key22": "2uZVu3Db7udbaBhDSCL4pkgze9tpJt9CjCR3YZFrDpNC362GjP6Xb5ZG8dkk4VB2hsY5V4NBKiPu2FJfoiMBkCu9",
  "key23": "4SNQocJ15Ts2hVTsoK8NHmx2a5L397YBYHNNHcD6r7pKQmBNj1J9iz8VG48naTqUqWjrcECJmRV3voKaZ9CCRhKx",
  "key24": "3XR6hkeXNXU7JxkbS36srNLeFw9MoNtr7SULSdryP18MUDsci9nbGxbsZhBj1kHy9mKbCsAWC6LqcX3g6s7pCRqC",
  "key25": "58yzvyrSKExPdx2TcyWi5dPuwj9BDNNryZe1WZ4Kg8uvg2LC6EPTkt5fMRbFShKBWaRL5XBYm8nEUweemtYjdGRP",
  "key26": "2ZssAVHpiDRbvCuCh5U7ZAGA1BTPMHpqV918gF3fKj8GJgEwUoHkHBop1yGwQjZW8rGBi9vnrcBynveStCmCcov7",
  "key27": "3H2FoaJB6srtEbw7pABjcvkCq4Rn3rzyPxCz25XbqXVRWFpMhg4kqM5EWiUKuc3hV9vy5JBJ38W5EtRgLbPhC5Z7",
  "key28": "5BZgWdzs8x56uuoqo5DV8AFPdDusgNy3Cg378Li8XqNmhutvCRUZxA5prACXfR1qesFubqcUy7cxqQcxjSYNDs44",
  "key29": "33QMHWjYHzHmSpwdo9zjhSWxJCFydhT6YpXetoyQsT6Vd5kBoFk5tqpaHBfcZBhL1gwkAeaLDXzSHpvWZsL8QLa4",
  "key30": "2WGqqgcH4bPYKottcsZz7zQ9nPFMJnkMULiyfKbhua8bCwZVqphe8K7trEgwrqwWvzfDDH6QAT5BDdjRAnKARYew",
  "key31": "59SrTDWqnQXB4VvXgDSYFBac19DKizao2qUb8LaTK88XgN9Bpj5mo3khxzPF5ZArKC1xn3ir3mftziuPLtuL4AGe",
  "key32": "4eZNyESE9Na51SQUYSqMffmRN11DNB2VEdkmdVjGnV7xHZd6XzeLTEdYLXek3TNTBPG9WF8Ypb8xy8wC7pTSFHZn",
  "key33": "31TPYBdjnGTWehk2PE1bgD5g6gA5diGU4fPYVKj17j3i7adR7vFw4dd5paE6VDQzZ4oBkzqCWsGUwLp8q19FbLbL",
  "key34": "2zWRAiveGKz4Qe7qUXzyMsT4GaTVjXkuKoptLkM4nsfiqzTMmEaUnA7UvM5YTeFUSKjiKcpJ3x29ecaxXFy64ELk",
  "key35": "54HQbR2S8UGqHUuW1PefeyDy7YHuwimLtYcdb57D3CL8QSLsYLFDHpghs8JFsqZ9w42sWRtNpCJ6Ap1GeGXrtArx",
  "key36": "4yqMeQtzYBNjXmqo8Pk8K1VR49zK9eGft3igtNGFp5LfQyfrhwMKWB3iqnGmJe1hKUVdDNJRpTWMBoCfNp59qihZ",
  "key37": "27fbRku9ZXweB5TuCzBp92vHDD7oF6hsQv9PR8iB7seroyigv9qyKoszvyrJEMftCCASDcfkGihwumPBufbvfMhk",
  "key38": "WdnpuWDRNB2dqbgxLu1Ac8eqXSi7wE5nUFwqzBSdbwWxKZGxZu49UEqEcMARANKag7KwGu2JaB7qjnJMguLUmoS",
  "key39": "3SGqbCdTNusQGLemJeZ2hB4v785UZerQU8G3UKXHac4Nq9fe7YgJhw3WZBWzcB8sSesV7HqedQFqmfcXNeNiT3mN"
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
