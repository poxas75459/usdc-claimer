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
    "ibzttx95V5odxP8d1aQfdyFgRN2RK2Ma5niLaKMtce9ZUmDZhaTcCNQNutm7gePwxaTTqGrvrvJ9sN3uqELa2nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2955NtkkSeTw1chiNPJmXRQ7LRdUTAXLd9yyMHn5fWq82gktxjTmrEQ4T4xegbboXDgAjbWdUCEgc6KSF9NQ4ihq",
  "key1": "rR3kUNfe4iUyUXFySN7QcuWT196CLRNAv5zLHakpMwnbmgZDmWr91iWJUPwg6WU52KLWkaAfze83X6YStAXAVAe",
  "key2": "4ZgVfDYWtP7FoUVcssD7XB7Kkn9S9VdFXbc6bfaf5mDh54usmvEzpJCNFe42G85SsUaAwktRdSp6SiMM3Y3F213w",
  "key3": "2awnN8LkSJm2DZtPpkQJjE9WigczEKLK4J8F8bsUcQABN5qU6uMii4PVXKtLXBajL6NstNC5mdMHswUY1jATjaAs",
  "key4": "4bkJYBgZoww3UaGj56GFQCvDgjiSNtPxMi8QMiu8KaucPFMgzSCFdXwu3xT5c9FTquFkDxwgoCUwfXFnsBsVMB3d",
  "key5": "569stHnsD9vPWg1HbfXxeVrcBQkMoDdVNxZuSkec2H7cyHjatiEnyCp7Dokn3JRVwucFDr2Bsuo2fJJq2DW8MNK6",
  "key6": "5657Jn1SfqgiEYEQipkNhgmXjWnyQEhv11ncfGqZQSyHZprBTHKuQSib7gwP7XmNGPrct4N9jG1GpSXVBotnQs6v",
  "key7": "5V7RmRdy3cYNYjeRG4D5voQAtX7D3pJMkKJeK8AWgXJntorJtFsaP7ahULaeAeh2Rqo8SpfpbBt4FN9UGXAkazjy",
  "key8": "3d2g5Vv7jCtx8hog2zYQSsWM31Fni2YQdj8DoZAU985qwykK2FTWiGG1VWPh6aTJhWtSTh4izeyRbwZ1mXePaZ6A",
  "key9": "3QLdtMndVjVaoj9mF7cCAKiERUegkgtqb31JXbyTnftsbrFxfU5trUFF6w8ySDAvc21nbfPaevVS8zQzbomtQaL3",
  "key10": "4Cg5c6vqpZBRFCRRpri83Pvw4N5qYXkceUXRCYmpiBZ9GhbYSNhT2mQe7ckDzyu9PYdm3ZX2bCNW6DMiKQfbpfnv",
  "key11": "2zMXFZFmGbS3wNY4wBKRo2AiyYXCXkra8ue2BDdWESW1G8omFsMpgNCsFrnmWrtQkBuqcsbMRZ5f2JE8WiysiL5C",
  "key12": "ZS7pfFimUNvXg94VQWHmStXJ4BmRqLLBmAePZTFzkGLx6ARJD6RbVqP7ergru5BRYxYAKDhKYSR1rGGXZvfNZ1v",
  "key13": "5QdgxLuw8uFiAu8FGqZbSU8gnntHBkEek3GXBRfsBE47n9aTdFY3nWdZjmeca5nwftVAkwmpTs6JgEjHm9QA5WBT",
  "key14": "5sXZv4N738mRNcUuUTgW992quAUMeunM3Drvu6RkuVGuDLzRxKjzjGUs8FVFcadSHbWGWnbHYbocqmaNctTTogPE",
  "key15": "2ZtBbw4wiKY2CqSms9xx4w8U3tbyQAx8ZtxfNjsbXXxtq8rfoG1hKjXvQhGeMZi3ZsgbQ5Muamf5uGohPgCw5CYN",
  "key16": "5xGMkaTVsHYE9igNZ1u7AGNNjXNsuNnvPJtfbMMu5zz9hNh7g6qXBGNCCj22JhRhYJs1tPufG7JdHHMCHzDiR82F",
  "key17": "2NbNP3UJTW8acY1Bv5TQgvUDvL1GhE6GKhMyRSg8nr9V1fVYtAti7ZVUot2m4krfmwjhGWF4UYQDZrJPq4uXgrPW",
  "key18": "4Knx8BzJNkGPqAuiqzrK8xRfwMrZtPC2nMoJTPMjrbWzoAYA2WSFCgcSZPVQbdipjh9sF7NUN1j5ATZRwWanXCeB",
  "key19": "3ZFFYuMudDiaVRjgMpcTPmwCiH1DMSosH28U2medQqet6yEFu7AY9ztZsAS8ZMYFCCmFUEf9FHBZ1yfyzeuS5fkp",
  "key20": "EQ87tHmekccSg8hakdP8wZm3CbRVm7t1jStxFwDdWRcPaSiekZWpoZUVBmVuhXeWdMs2onEQ8RMHq6xsXFpzr7K",
  "key21": "2WK9hqezUSz1H2nKzMLMBaiusAk8DNkjYMjHiiUZT6DbAcRtdC9wQWUM3ib2ivfXv3WKcinrNHX13ysj4eHgfD7G",
  "key22": "4WT7WfnfkAPixdM8T5EJb5HoGiGrQHyQAXGreq44hXkiXSawbpLRscmwyiewpkc8NrhjXsurMZgtWJgDYFf6Ph1y",
  "key23": "4AYecA9yEnbB64YBBn1JHST5Gpg6z83WL75JdvNGc5QL3T4peM3KdxDCPTnaCX92WFR98W32ivbUZLQujBzodNj9",
  "key24": "64KrJ2BFHsL4PfA14bKqvMmjibYST2h9M8TmB2eawBT4K7oVe2S79Bf3uVMtG6aMgfDdaZfzf7ffKLmhWTfSMQkP",
  "key25": "3JPM9ryAQTfVVGfYULi621KxJs8rdR7jDCjRXxEn9DSsAkNtjghZmFooDd5v68KyG95uqHPnYVpKs44AypS6JJte",
  "key26": "3HMozbUMNv7L4xnLPV9GuakR8K2KaXCYamVLruXHrUFtU8DcMXBy8nF89nSsZKdtCQNbGwYzoJNqBUehRK9deHMv",
  "key27": "38rr1bzYMXG2spub3644nmK2j4PKjt9tKkwm9vp4tVFextEcrT76MGZW6LWXb4GvZ1HkNg7pqJwXE34UkZD5xseT",
  "key28": "4nDvuhnAicys9ZrcbJKEe1D1gcJimXJU94nLuGjxjV3pVeJ8kxyfgKxndxtdv4zJK3WBZxAttSnaWz5B1BTycHiT",
  "key29": "48qy7VwDhCRoZajnXQsmepBNAYq6rcvHJqDtsRRYf6bMhmbCXLGw87V6PQPu1TdqAkbUbA3xXoktkWJKCM4o5evw",
  "key30": "2oguYWVttdUXVgEM35YUdD6LGoKVNywufFf3CPrPGWRDiKDHj9737MFwzfjyQxhBa8MF2tT3yhm7ijYAWSrQGZSF",
  "key31": "27oxGBQBj7dzuzPaX6pyAQDtqFHahFb9UYKAj6r3g7EvNijyeF34E7TkGer3kGKYcR5C9qNKPgF2V2JSnNZdKb6p",
  "key32": "997BdT9YUMgf3USzJT1LVmboUe8NjtTaGiJJyBdggzgRGsKaw2jVs8iKNFjZ1iK89TjW8Lfhn13hc8QAwE9VdPi",
  "key33": "cvZsp5XiU2yYLi3YvDoHnKKsGjUZKo992ojtfKvH2Jru9c9EvUTXSZAuYshyYtREwD5HQet8vVfBhKxY9TQw3fQ",
  "key34": "3DufkxU9Gdf78S7KLPnXWPXAbQbN5xXAiXxD5i3V9KaxcZM7vnE66CQ8P25PfDSqb4yPu3EUiutyJDQzaSzhVo6s",
  "key35": "4jTZhshqeG3bFVuG8MtobmCRzTcURVZHx9V2VDBopKo5Z9QYm9aLXYqpeSFrX1J9PN3MGqW83Ponf5figrZh3MUa"
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
