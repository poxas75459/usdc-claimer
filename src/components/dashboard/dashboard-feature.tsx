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
    "iL1t6gVtyyCUhsR5pkkYjgsBVwnBVZyN8ucJwQGMVNbUALmvDsEaETQ2qY9XzBtYPtFE7ELaqcuSTLaarv4FhCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVizL6LNLoDbgbkMLaYeVLt1kh8r2fsHyVNacGND3MZPDZY1wEvLBQsi1F3bUkBYMCrEEgymbNi7xV9WuG3LKK3",
  "key1": "2EPNxhRLCQkBmNbiLtpXVJzPw26BP1LtAsUnKQfpAYuh6UBhPNUcb97avzCFR7pyGdXjSApg1d1RhU4GrT1J7qjd",
  "key2": "5x7T4KwS8Lt9EJAJrXC3rKQmxyEnBsLgh799w9Ff6whAYHvbwK8dazB6kdw7Re6uHihDbe4cU4GWPGHZaNYYYK1L",
  "key3": "2R8nvgHbrhQcjcpzQiiWmERHf6ibsK74TcpLzZwixGqFUMmoPuWVfzaqKibKvWbZP5FRu79hjpFSJodJYYJKE1pw",
  "key4": "4VYJd23LkaxmX8enaXxjSdgjrFovA2inZJiNyUJ3uxSGcP7L9r3dboGsMQaLD6mxxioEykedz55dUZ2ba9UxG6xK",
  "key5": "srwCnEyTgzmuiJNNe7iDFmUxrqwg67RaS1HNKxj55KmcWtvQSMqyqzbLZk52Fm5qFWrid8fTTbV9S2GdMRrT51R",
  "key6": "3XBoqgDBys32wSWmTWjYaPJhP1cGUoaMbvGPP4wqccpba3hgxUhX8qSaSZ7yZPjbiWY1TgTFbHid9E1bAVof8GGg",
  "key7": "2ETY7qm3JMBs8P7UbFcGBQYMwbPWZ3mXUG4ACFCZsyp1YkWQ2yxHbN6My6KV2XZNtxzJbydVe9Rmj19tb7DcnoME",
  "key8": "5n2TZtPG4FqM4fTcDGfx3BW4CBJoQiNSZEgpGt9MrJyYFYEqY4rnvftpJPcaWkZ9SHA6j573yfc794ehZLHRJ86Q",
  "key9": "2NKpuuJyj7N8EfR1LuFhT3egQMi8UWa8gjnjMw6zpHsc3rccSQkhxfgA5bUUNNEEekgeuSDxNJY8CAikwmsxemww",
  "key10": "5ZJ2YtsBht896tpbQty7rt4CV9Yh1BJs9TNjrYnbDc33FSUAp2wLu7A1Gu2165DHoX5vdCQbTkktRiDLPZvdRF5B",
  "key11": "ryb3jP8MPPdoqKq63mdUNEebhdHPiykRjEB7o4xmiJH82MaDTZpisR6eXGzJsTyzuWB7AwQ7GaGzb4hj9eUdpfu",
  "key12": "2FjUZJDPw723GyJt3nTv9itUqyzVJGbXeH1BfhUPn26cnJqf8ZqNwUjLcywW24q6RxhSsJJG7R2DFd9BwyyPx2ds",
  "key13": "RJdSCooGe7iayW46eH7ZneEQnN7Qq8PpDuUaPErvkwHSAc6KqMRZ7Pc5wnW9oxiuyStygUqcceyU5M9RdVSJsRv",
  "key14": "2ssY116RkRwuWbZPX2MVdn8H6jtQGzPDuhtvRDgDhrwD3pSH1BrzMiM9xrpwhzjnjeNcZ4az75iR1ST1EGipyJRA",
  "key15": "5cyCbUFTMaNTXZp7ohB1XQNUmVKNpy64MGxUtb932May8TrVG2daGXtD3XJxzScX6n68XHn5zHdqsTkq3Puzqq1n",
  "key16": "5JTHvqSc2qaCJJoEZnYsnQbdKeDbtJKrSq34hpQYRXcLefhCvsjwhMFSaWdUgtREtNXSX7BpBLxkZv8S3s5Q2626",
  "key17": "3ebjAKow1m2THNRAp6RMPMFSxGt7Z1v214S5JqbRVVguZYC6KpTHbTBXvZDBiqYbMBxdBKWAF4qLyXMAVbF6RgeU",
  "key18": "42ZGuL4YRucd9LEKgjUVnt5Z9LeZrkhLdni21rrSjxwyNkGaSdeLBURM9fEnQdkpu7Z8FWr2m7nRSDDrvpd5JM7X",
  "key19": "33QtiSnMifnC1BPQdENJWbGhK6iEFpZoJFdsD9qBqaRn2W5RHQzLwNvpaMB5Ayh18WeMZ4iNhHxEYUA8jbHqsJcb",
  "key20": "5eAvQJ44kiBiQKmCehRfTN5f3AJBDgVf92kxNR2U2rGyvBipgJKwhTiwjXj8oK1HZqNf7neRVTwNeh4fgEUzPijU",
  "key21": "3qTPwgiN8kcuN2Tre5kwSjywdVpKNSrRqEtBhxhr6Dog6Wx2kmYoojhfCEyAfeKjy5REY5W4V8NeFZvWYtPKGQSk",
  "key22": "4y1TT8KuW7z6EFiuUAg5v1anzRgE4Ri569aL8qb86ehmJpMe9xKdL9GS3o7DYKXTv9HgXhxHDb95PKr5Ns75Gntw",
  "key23": "5SH9d5dxcnCxxzTDYqmJ2ddwPCkyKtvmgZuw9LWMmKPXQr9wYemBJRi64H8uLqZaMTnzAeCZ3xM4BxHT7m74jyHh",
  "key24": "4ivbccV4WwCFdzJTy5afWFvcuy69yLoeJmL3nbS1RiB6tDP9j5NGEgEXFxS17fGuPiE6bu28rkw8jxcvypHBNSxR",
  "key25": "B1Bzf6n5hiQHJZHPiEdUKHP54FfhKXQvDfaCY2TdS1HZxHi5P729jQEJKf241j6okWYiEkhZGBHMkVs4kJx9wK1",
  "key26": "2WKbq3PzJzdasBD4ZysrhBsHEDTMwVXvQe8GwgxMkyGtiuNhJDCwztx9Y1LtA9P2K2kNPRtEG7oyG7QKdeq9uMzA",
  "key27": "4GFdqw8G5zibJVgjWs6aLPzcHwRerR7etR3apsCsJ6WFD9YdLD3VPnr284SCnuqGfFBMxn33tUgXq3zaMHpsLXNA",
  "key28": "23v9PKYCFpLFxGVr6KTBjnqJi3U5v4FL9PMtf19A2hgvEXqnY8yix8VmUyaGJ38n287RcH6zpqdpcWhrtduewYnz",
  "key29": "2hgLW8L7FRZ5rGqLw16mVHdNjiiFw4KHuvKi1LvGkBbzKhnVnmLQ8h4xdei2PcjT2C6fkbp95fNU3bbUq7sV8GNX",
  "key30": "56A33hUywGTiMsf8dS3khZWfsW8m6YoV9zxM2zkqWz662ADX2E4YXWRQA3xZ6R9u9p4cMeXHxZtwyAnp6q82HiLE",
  "key31": "26FTg5TW8Wy5QNhgbmhoWKCp7K6Jk1w7zHdwPA6XTXHC4cLhHexThr9GLzF9bdmmQoRocuBXVNfSAp4Z2xAETtat",
  "key32": "urn2BwrcumaoFUoS7aQxBHVUE3VB91Kh3PtKzV5jwb6iG8Gci9HWRTNfRZXN57pSD8yB38L3zsdTtTjS5gp74iY",
  "key33": "4zaSSutXohUX2PUBrDbhZWpkaoTLJot1e6WEcmwoysKRnPvXHqWZRdE8DFnzu5XijjcKwK4N9FekcAi9RbgBH5Zn",
  "key34": "dWijXoKRNiapaGH16RcwQ6Jm6k6jidsaYJRST8GQi8AsFJvpjgJAiuWNeayvtjudeaKYmNE58nzT5dDB7fm9Eg1",
  "key35": "49R6tuiY3sacUH3mFHU2FSs7jFHxQDpNGBJk8YnstQZezoc4T45UAEmthvCp2vxYsHbB23dGqcLoSNYRgJrg89Wi",
  "key36": "3EZQh85TnMtzBmpD55S5c3dFkrDmoXmZ7zw5npW28VXRQJvcP7x7QpHSEip2GaDUGDhQBPDw3jDRMi5Jw4toQdYK",
  "key37": "5tzbVhvG2JmWDQFPZRMT2xCCZdFS5J54ZzdLxZ5NhMpyHp6x8ccgbRARWp2ze4YxDqL5PZmgxoBwr7aqQn6xqdZ2",
  "key38": "55omVJwDrJo7EoBtrJTxJH8DaC6jwhdxgSeDwBenU4DBHJ9CnArxMDZRgVWRqbKhnv3Y559if5sWc8cbaQE6bGB5",
  "key39": "32fZPNAaeg58Jg6FCrSvqv3zFaV4xPuoC6b7nALXr4odeorYwDnmEwvEA5su5U9b9KuGRgquvagGMMnhcskPYBkP",
  "key40": "2aJXaN3AUdBgAKtgbALXrYieFmfd5KFm3EEoKDhXoWofoPCFLpEFeEPuQKpy7rFhrzFBqz154X8nNgZd8VgL4aFT",
  "key41": "591M6iLpV61GMEVx8Wge7qYZ1Unk3UrhpQAiwVra3LRhxTZnxichm7HhsviSTuy7KLKznEV4KvG4oLCgdkHFHDSf",
  "key42": "633Fi1TDMJTcgRVe4GoT2pH8tHntBjsVw2hAppQ3qNtYR89B8XHB7honQsQoEykdxCaQPp9gVW4QRHKJ8YgUktfR"
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
