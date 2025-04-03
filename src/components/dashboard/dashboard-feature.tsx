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
    "Y7rwHdj7dpjP9PV97Mvqb9fXGamXpwvayu4Z15RiS6r8Rsd7hdiYuxqvxs89wYsLiY8RmfCCRKsU8DBn6SUHHFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9mSyfZ6L6ojH5Kz3eJrFKw7RNoYe9Kre6SEB9pwVYd34x5DuBGiB6aBoyY9ZHCXo8Mok3P1bDXH1uDhSa8n9DP",
  "key1": "3DUwCihnznvv8pj5qi3EVyg2M5WpvZ4mLaUBiKgddS1tyRRYuc2r85tjEbEacTtukvzvqgw2w1s3o5yANH5t8dqK",
  "key2": "xCC77nYjzpPzFRaDuAXs6pEdR4kph4m85UrYBysLgUVHK5JiCwUF9PzTLn2VXAwZwx5iwKvz6eoFSbhUNWmabDU",
  "key3": "fc7m1iB8KZvU7ES4uaV8RXEznNCjWh9ynhpNvFhpJtnLJRj9FfEdQFhP7r3aPf2DeQTNFb7a3pRJJxapCw6DYcH",
  "key4": "4AFHh46N5wWnhAeiVi4qyAGxJVBCfmXUTFFQJTfxrDd8oskXkfzPtnmVU8YEUG1NNzPAgAYhHxAy6yRCjSDwWoub",
  "key5": "43PTRxVhCDBBTKR1LAbU647ftc3PGdckNnVdQgDgXWG6sp5EoAYQa5Ruw26LJH33Kt7w7AUc5A9VfWXTmKHFM9ZP",
  "key6": "5xc12oQ1RLzbhh9Lq8odF8cHn5MJayYfP9RUafSR7Lg9aqBvmr3RzuEWK7g2LLM5B4DaKgNx9W2aW3xPAkvRtQcV",
  "key7": "3oX5F2BFveP8gN4mpuZiPSDb5QzF371q3xgJJnpkbimRrbkrb7csXnKyYcMPDMhdjRMRKZgHbBK3mfd4xsDLU79A",
  "key8": "14BrMhqTrWjFzBx3kYb9zd6ACCt5JcZG5sXVrGHqrZHWJs5i7S31AM2cSonY78cTcW5iX9qMnKYiK4ugHAfMkyq",
  "key9": "P7PcLDj4HHsAhutMrDir5cc756vuhzpLhAmkZj6fMqBrxK8W1oEt3M2vWeTQzqLEeHZbzMyGXLTpNfP86jVBS9p",
  "key10": "4VQRqjnwK1WEfRgVYzftGHSskcSnK7qaWLzLtxXVKSqrNmr1oHhQphQgZAqekPvdYqg8pN9iFeF7F6gyYLZPckF2",
  "key11": "4xWCkYj8myd77bXVV1ToECGnHvRsZHCAvucbJyjJfnz2RAWwHfk1b3X8KKebKw7Ff6eSiBknFg4gA34WqETYDKw2",
  "key12": "3H2dpqrUEBCks7gfaniCVD1qB1q6Pc1PMSqpr8UydECWnBJFxdiotfMP8pf35c2ZyMgA38yD4Tei84mV6JqzNT3N",
  "key13": "wb3gYQjSsgh8p1kUay3GoeDUUd53wGZEhmhZ91qPhL9MRum1sMRAgcrebrhNfMJ6PAHuUiUcPag3ze2ygfUTWTQ",
  "key14": "5Xy2ws8dtzuG2BqNQVeoYjUHYXZbQV5kxMqwB9g9riJ3ucGqb7P8sUrT9b8UxsBUDgdyEKGjpro3URJHW1qSNShc",
  "key15": "Ksd6mK1cmPtumCnyGmAz3fjegpvrSDW38AqBxSS4gkJRz2LohKQVaypD4eKCNZuGQptLoZiesVm47eGMihaUStk",
  "key16": "4Tr5epW7NkQ62Mb4E7hznWbHDGg1qx2S773cmFj9tyWdWtjHVUasnGnMxcwEmu3bEdkmZ6vWH12CyMsAXVqjjXH6",
  "key17": "5h6vnQvmMbgyLan7KAPCQWowGC7wNaYSywDU7N3jkUo1hq4CvexZ3KubEfgjMPkDJ1LPuWWyqEJNnjXCBrpM7qak",
  "key18": "2MbQcZ5K7oSV5gcW83segT2C1HcCCkjULWCG6qm4G8SFSLZbzoehkLdVNH1aa9BG13gJqTL5NqonHp7wF8cyy9vt",
  "key19": "3KhWbXfwM8qC3RTCwM2x6QmbLVByf3FB4J3YXbLtRFJdSZXGCbJmQECL8vdoboGdqrp7cpTxRdQ4kBBi8CjK5sYL",
  "key20": "3KWSJ5RzEY2o22rvRNoGicEiWqf84Z4FFKkVE7NxNhwPCfb5dPv1G6nEpsAo6tJUhk9EMRZwSaEMcojPTHfzKyji",
  "key21": "2j57inQEsCKx67Hfds8d8JdaT15BQkBahFvTJ7QLUMC836GgwuKtQxiCLkbcxRU5Fk1YgRMauiKFVxA46QyPrFtu",
  "key22": "2wsC5HpDEZGCKBqktCDQX7PNsApqqWLiXLPYs66Ftu2h4gxtPdyeihYqLinrfktmkNLoFfV5ftsdSmh7GznuLQ7D",
  "key23": "328SkahYzFawgRHeuGq3G7N61nRo7Y6kw8FAeVMdbSdwfPeCyHZ7DCSr1Jjqz4JLJqtcQvdczb3zTNcGu58YsaBX",
  "key24": "5VeA28WC5LbcqnXRQDmJkCx1JSMba1Ji1vEBn27XvjfAMoHFtuvVjzF4Mkp3G4iefFhC1amvu3nZjGLQdy4mPAEs",
  "key25": "4GMsgERi9RyE6dxg6xD2F1PqKVmBW9Gi6dExH6TsyfMsbceuCfybCWzyDxmyqpxUnN8V6umSr3MJEt48RmbS4BzC",
  "key26": "4fJQazNYG1hNpq3Fp9UV9GFHmD8eN2c8GKdM1bGko5mJbAA5cfnnPpHuqJDD5mHsfKtqkVCn7oavFAVCoPdghLSe",
  "key27": "43vus69UfxyHDgbiva5z3nRzsr5fbxLqZyaiXW1LbgJKG3dsWCGw8bNNhCkmZzG9aVNoqGW8GdopSUqgfj6V1huq",
  "key28": "5yxMVLZS11XCxVQm5EZ7Nn6xSpKvtAEaTLVhkfWsDi46G7FEopSwY4bZMAg31JWgKMeEY8xqYHiKxaF85tpTdAHj",
  "key29": "33C1bDzhfSeWEtfgj8ezD2MNHmxqMbcEZpcaCLM2kYeZTc89JeWFi2TVnizucKvSck7bkPD8nAfnXD1LA7S22Mw9",
  "key30": "5e46TBuGfj6MvmXhUn6VoKMXX6ZfwSHsNLffNNJHA9cPQ53MsSPF5Nz75L85rq2RNj7TGufT8KqUPZx13uwLPwLf",
  "key31": "2M1fwTJECfvMRvs3g8DTE2tLScGv8akdiBHtJfujpHD5QLFAguiZShnqjG6Zp1jqHvDanwNUAowxJt7F92qPMtGS",
  "key32": "2dFvH35peUGzHoKaTgDsnTMoWUyr9KoswKi93qriSUXVEnNHgjfraMNaLKRZkprtiYTdV6P5ndsnBzE3mHWLz64w",
  "key33": "5FY8SvDHRpnB4KYkKLXmvCSbP9zjse5JqJ8Ji43XgptcXT8sdpecNMkKdbEvZpeEeQ7tWGGTtikpz6xzt1FsJebG",
  "key34": "5Cn6je8nekh9n2Gkqz1MtyC4trgXSLTSWRJzrk2rKUwvT3J1RM41EQSFYPCdbY8oZJ1qygL1EoK6FPD29hUEiTDt",
  "key35": "99f2aL5aMHpYsCpa1T3uyFDXfsh2SehbBPKYgXZsAyPV5MixgYgRyMMD1p8vy9uNhXxqq98Kewe6JH652NKQfcG",
  "key36": "oG8SGGWUBFqcRAUpi2P2WacTtsJt2VsQbLahgzLt8pfK71CbixAcwRMfsEhCojrmSUqh5QL9FTY854f2hUeo7HA",
  "key37": "4toqjoRyE8sfF58JVuGQM3iY7vyyV2LsJDiq8RNm6x4nUMHrMYNzW87u9BcXghrHcdmm6DuEpPsCAHgYZW94Gi7w",
  "key38": "2xMiTACHKPJM7vB5vGkJqW1fqMYYADZVT1xaUgfctpzikmbCyqbatdLLJXtcpC5FLe9at2huKWeQoHY4LCtqVuzs",
  "key39": "5JsyRq92XAPikf7Ttu1J6GFsAXTT5vwP69gFp3azrncsZK5XTEChTp8KqrYmVAQcJucA2BWJcBackNsp6LXzqgyk",
  "key40": "35AycZ2mm6q4smkqdj7bWZaoebuBbf9JWs8i5DHmU6xSuToEuQLRVpcGAqnh4zTAQJDeu3fWwpRwVFUcjULas6FL",
  "key41": "4sKBLUiBCk1XXRAHBb4f6wbrKNTBd2fYDvFVM8iteq2JjHJSFz8RzXaSwTANwTe9u15dKSEzQXzexTYwJueEJXtr",
  "key42": "5u12fRQfE1LuPHa6i24Z13PoNKeo2h8w2eHpB1vGitKnq1AXbrt18EewibKrJSJgaCwnJGyY9jEi1DLtBJR1vmrP",
  "key43": "3mjFpVLtTesWUn4jQpB7X7ehPuNSmgBDiFe7UaKJrSbkudUbrguZv6YpDSSpcaTzwFQsvGxDgB5HUmz4jdMxewBd"
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
