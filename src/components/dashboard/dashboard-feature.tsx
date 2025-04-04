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
    "2jG8JvCB12TWpq3UYzTCyVD29LxYeVc4vXphDwTNFJ1iwkumpUZLckKnGe5hdvNknbhTAj6Nx6FnWd8bHMoX6Yip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmW7W6b3GnWM16qrWcmucXmtqYi7eKpWmYoJ7XuzHaSNWyP985sEycyxaQz9t4EZbhv8vJpb2jVo2ihfKKcYJug",
  "key1": "5Ndiv8QVTX1eaaJgMqLP76P3H4uf3Xmxa5MJZxU75cMMy3tz91Zv3peqESpBeL3iRof6DCZiVQn4v11gGRh8pF28",
  "key2": "tMMDNWLoXrLuG887VbPQMhde8jHeqwjj3yrxVjmNpBVergfTKdXLvHMVnz5nmrccadEbcLz37a2wFG2hHzTdfVF",
  "key3": "5BkW4RxYPTLGmGEL5oxrE6EbUZnoF5YaGQAUohbh9KdkNWPiToRVQzJLuHQ4RNd9yiR9ZC4GAK3ZLuFPq1oKPkP7",
  "key4": "27X4EYPeeUS37J1AQFdvRUqW6bj8dAXwpHg7yqFY2oq5ED53XmpfQMmUuu8o61cYSpyXfMqUwe19rB8ni2Bcg5Az",
  "key5": "4DxDZuLmmHqyADyrWfQufgfFqUBMqUxfqJKyAimAaz4kjdnctTw4xexr3zmDgrMiXuyNaWHee7yiEEAXnQLKjG3A",
  "key6": "4U4tBmXVvKVssq3ApcT6afcdHLH8QmCGaJtxGb5YH8QUo8kAzrYrBw7Y5bwkN9JGY8fG1uDbvR8gQY8M2xygkAY6",
  "key7": "3cBPyMjD7R4GanjDCm1soHvgLnUm8ZKSV7cB5KjSHWyxCMaMs76kKfRNxY7ZcKUQP38AiCJQxZvAyMJfwnXHUMt3",
  "key8": "5RcaTyMFVKj4kGFwCa5nN8Wx49TMZWJvgPwR4zoibp1pHWmY2FCq6E8MSgxEfTfpaTbPiamAebftgsFBd7woCqTJ",
  "key9": "kmQpX9iN3sA5xZpttTyuwbch5rhgyv5pNfmfUyQwFVrx8siJi22tWFJQcvwcbqDVK51zNzETKJ7ui4Nm7Sg9TDL",
  "key10": "42DcUQ6fcnxvV2gEuxb1sWsQ6ehUGKooqHdEPtCJgfPq3SDyoGWJJvNUAEjbRTekqmqm1pZ3sXVGwiCnEUFTxFxb",
  "key11": "5rTKBRxaSBTrNV5wGdxag42BnreF5qcD3vidZYoz2AiX7ZJnaeh2GojZjFUuhoRMcjm5MeGxCEW7mQqSPaPcjjRB",
  "key12": "TA8vQrg5w1DmVs8kesgjjkx7QjPZyGvQMkwvDzYuJXex1Xgc9WpRRNaBuWvC164UHvkTaLVEvWco62EVcCApHtw",
  "key13": "4XiZcDPn3oseFrH6c8pK4Kquo5SDEeYt8iMyK4s91dgWrdfz7J9GnP5P3as2qhERBCNtxDPfveSZW9ngkhijzuuZ",
  "key14": "2ywLyaoogUq9Cqid6ZzhS7iEsEKK6jXVGviTmgu9rAKG6QJBdXdXriyZZMUUoLrEF4QTZWEx4JqwZyLhzKj6kKqi",
  "key15": "45b1WR3nWw4zTJyWvGKFC76wmwMkoWdMZwBFwLPyftB4WixstkUFtoWbxtYyrvfYsqCP1LE2osMAdvm4Eo7fMhwR",
  "key16": "66muqqNbZ3ZFoZgnXQx3zPZgBPoSWRH2npu1wpdj6CF9jxmr9XSEcBKAtuvWujehyqkQvgN9zWaAXfqKFk47dkcs",
  "key17": "5WUm6EMmEfnPY7xrKxMGmrJJYGuC11oobfc7yn3b3PRaX2WthQMvWbV4f94wDnCB3VHiBv1y4TXDrGJkUp1UKfVU",
  "key18": "4R6sJxq2Hpx47izhcBGYjhUEkEvhRKyJ4WnxRxrMn6eje6E4HByJezbRsZYWeei4mZgmUKhs7jd5uhnKNmc2B8nX",
  "key19": "3jd4x8V3BfvhXQcjMFFR3H2FD2aorE92mkGpRL8K2FSSoFH9ac1jMkWwjQy5jpTFtZh8JqE5eaE6mx5Hq5SWrViV",
  "key20": "1UXL9Gdi4gKJ8UaRSrugdRwWrUtSfPkdnYKK121Q6idf5UYUsW51Ax6MQD3cfyp5RwrjQ3zyM7EJNZZotAHCkag",
  "key21": "2Tvhte8fw4DLnWSiVyeo3RjUdK7a4oKuJrT2KC47xV9M8caVaSHx5fPws7ZcHhjpapGnGXoYkpmBinopQZYEXVsv",
  "key22": "37Tx7AEFeQe9EbWJXf1b1pUVNq2jqtR97byHK73vHQ8oF8TtN7LkgwbFBtF9icxbCp7heRqQTw1LzvqSEAjxByQw",
  "key23": "fuNajSPCQ1TdfeFvDGUFqVi3fqWZMmfHtA8ttN2JHfkqXpJD4RPhpTWSMxUp819kFTNUMNr1UiWRCgfvE46dgx8",
  "key24": "4DReJwVtBcwfwmQjm4qBLepwrqxNiCES7kMpfk6DEAgSGfJ1tpbT9Lf6BaKSXtnRvBqcnxEFUamACAPB2MPBW5w1",
  "key25": "5E9s9uMLTAXB24wZmW37u11m6eypSt3mp3tnQUrc8wKK2Tax8uDX2yvZSxRoEhHqq37V1fwi3UZsVuxoSKAWwuQy",
  "key26": "p3iDMGeLySr6gH4sDmQSUXAn3gbfdxx4ryFJuv4KPaUqgfWsVx7ALD1nF3Vdcb2VHF8da3EHiP9qf4Po3jb4bFc",
  "key27": "3SMSAcsoJojfhimDz7qRhMkyAHfZMDLF6DLX7vZripWywzejcNqKQVA8BDmY5fgGaJqkMkcXaW4k2BJH2Ty2vEdq",
  "key28": "zeG3JnHuZH7fyFaJZiRXjqL1rNjAmejTtyo65TejwDNZ4N6jYKzWA6CVhgn8HCqQeDSQT9aaSFJ3umPJFMHA9GK",
  "key29": "5yJ1EbaKLEXBrNGZY8scUvQDFep3DNa8B49juQbnyu2N3bB6HdHvndHHgap7WFfM3XeVPVcWMo9z4xDj5V8pjvMM",
  "key30": "2oS78h9DYYuWKot2hwvtFD44VMhANXQvkafP3TABtPac3CKHajwcYw16Rwzhtt8YVthGsyhE5LYAQWpMVVH8bUzP",
  "key31": "4aFZuWztjNvHFiEwB1JUvfN73hdaxCPDBzyh5JgQK1cMRNbTyNwnXmi6pZYJZr6UbDJtgUN8tq6mVKkgZ7xig3Jh",
  "key32": "5zA5hDXG9StwGKuoqRBfnVa7BUgvHkEufV98P3WLHxbGg1CWWPx2FYxcemNmUtiKKUcamvPHZdGGjVHZK3EdjfTC",
  "key33": "266iGcGrZDkKHn9rhmDyBZBxWpQLGDJBQgSt4artuj2HQoFPxfWcGDLrCVq83PbcMQ7SxPvr9fcZesSVSVCsaWpU"
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
