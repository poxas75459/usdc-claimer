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
    "4F1ucRzsmNuqt4S7xtbrXrwAHrAH9mckVKrdxmJnbxTRR9EnosXyYJQcjU65Ur7vvYQNut3gBBqbhP5iyqF8cCQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2cjzLvVYZUm8xN9uZBAs8ZjdT1ZAMVjXs16ooGcvGe8zWqL9yA2V5ezChbA7p92dayQ61s9y5pP1pyTvThhWay",
  "key1": "3m7ivuFA1DevcBKYoNNPNagdkjUbK4FZ7PUNEcwhVWBZjAzw1JzZQmo5BjmdYGBVPoi6cp8iKSkWxshrRC7Z8FZ1",
  "key2": "57ZqEb9ipj3svraHtr729WjdJKuD5h9cPotrxuUYGR4h77MLzQRGn18esLMtL9srd6MgisDdojV9uF4UhkSFDjot",
  "key3": "3EvXJMBWjZZjHnXVQMcNQsFFVq7M9efS545keY7wN6Un4QhNPgU3BqKJJVzBBqjaHErpMMnamvffysEhNdN9vnzg",
  "key4": "4RorvMiHWhfrzxHpozJZLpAHn5LWz7mH4pFJsi5svw9axZii6GGAkPTLHVaVsuETdP1nHukTp9bSeLzFnsHRpk9a",
  "key5": "3wL8UefrXt11fDW39W9hnZhz22qFQ3MatVA9sWaaMz47LAKCKkkkMxFxDwwh3Hxz9eLFVpVXQctBQUPzxh4irsXt",
  "key6": "3rxRkx1eNxmmVN9BU9sJs63K7v8zu9jshwr6T2MpS6AdW9mneWg9tJ8JtCTKN43nVdWTX59u3HvHkMZiBv1w44WN",
  "key7": "3U7FQCTyKycgDNr4dvWqpwBMohDGFs4Sm6xKQz9bEzTpSx65yS6q67bkiMxopVkwhJSsRsW9u4BwLeRxTRjjKryr",
  "key8": "2W56zDeDpf4dZ3XVtfwr21LJEa8rU5NDhbt6kkTXWwwgMxDjZCNoQmkxZNeqtqm8ynRQjDPz94r7EcJMabRBnfqw",
  "key9": "4cnpR5i5D56Z2opRkid2PSKbucrgH2RkvYmaRvXG8keQ9HbyJc4WWbkBEc1oDWbeoKJAYQwGiq2pnDPe4eUfySnc",
  "key10": "Cp5okauF1WaSfaatqgHZXXh6v1yFHTfjKdW14cNnunFfQkV6zMS4G6EAKNJH5UVt3KSkHJxC48WEPPQEQtp2r8T",
  "key11": "fzY2kTXRLqnF6jzgQciGA9RGY3TcAa5J134ucPVTJ3kwcgYiBzDKNYTNS3LGfMC9RWV2nvqvSYHXn4ibhSFijXC",
  "key12": "4p8XiZpHa45yHfdEyhTt4rzitBS5npBifmLm56MqPcNwZNLzbakhtyRGpsz3dmCsY8YbAReY3cqHFagBswUE4P4F",
  "key13": "LBY8ckzeBNmJt3HuHVjk27BSfnqd6jhYzWdYCCfA6Y7xjFQ8x1JWuG6ydxGXUX5EJyQP7PAZobg3kcsbvWt5jVD",
  "key14": "4AuLoufSQ6Fp2azyDdZDnwgAoCyacqoyvWJEPiXMppLxDfrnvgyeAFaSDMnw8NRvcfpnXcwSoPJSHWAgK9NcbyEX",
  "key15": "59RDGkyk9w2XetCk17LyNm1pgUZGxqYtUewGYBDSUJcJzKiiSewkHfvxHm5d2oTdsg5jy1myFpjEjTTSPN3FJMGd",
  "key16": "373y731wwMSw72sWoW5zkhwH84JoTNcLJUBCzfAdN7mD347EpV8Rk6xzHg3Pi91zBeLv6eC73UkgtjWfaCmF53bN",
  "key17": "qhKJpTvoMNACN8kHtU6xexbEenus3S4PJKUyCJa8nZpjwYURQRNPC7K4u8Hxuv3kMxvuo28CHk3T59u8Fq78yYy",
  "key18": "5jWEZbFN6SC4ZKEDPt8T6nGNdDrFTGiMfLcgGaCLw9ThYgrjfmAZxNnS1gxbfVGFb7ojQc1ux2pd8ACn7dh6LsRE",
  "key19": "3e8HN6YRQoRnguscKo7f7GgYWVtscm9nZM1ikgU6MVgwJTwJ1GbRB8nUv8jyyrn518Nd6vzfHexgAtkZ92QRXMGg",
  "key20": "5ZJwjm8Wnrbxm97qwDNCu3VgfZP8vUmdcqGhrKzzDKAhyHcGqa87LoF1H1HcYXfS8ozYUNUy8E2gEhuRG99juX6",
  "key21": "33WQCk1S51xs1uCPMDLwzamrKTqTdt1o4V2JfCQvm9Pb3JNhhPNbXdMBYe9Gc9DQjEfd5oRmf27JaSXW6TMyrZHJ",
  "key22": "2T13QcADEtjazgntNobyEHoP8jQ7AkT4guvjcx2T3TT58aS2E3eUniJWdUAPSPtfwk9yoNdo65xGjTs7s6ykd4WA",
  "key23": "3dUQBVaDHDxj8syTYhYWrmRy47y5UvEnDNxRzhbYvxB762MYBLbnrPjQg9dkuCguj3MmPCxznUZV6xMXeoqdDVBR",
  "key24": "eTmA5vDJLU6ASB1jCm7hiauUbgSsHNVCVHY62XvS38BbxvvKDa9fVbkaUsYgr8ZLEGgs4dY5pUVTtjBgTh6gK2Y",
  "key25": "2m7RxMnchjs9JwUihoyX8DVWAemt48p5fMNxHruwRS8bTjxuuKY6LTcFfJVTJC7J6E1xnkYahUU7JdvXnDEJRTos",
  "key26": "Xtst9d8HGV1e9dtTG1v5YeufMAJFM2FKpg8sF2MTiuJ8bfE9RFjh6pDz9PtRqDp9mDfoo4MoYnhs5n7D7sM2ZnZ",
  "key27": "36p1XfDHbUV8gCEkfBJAKS3az2wnetct6zrGoyRg1NtDFSU2hWCC6g8kQ85qWc8P1WQLut5pyFL9YepFA5DJe4pe",
  "key28": "4x2t64cPk9bWwe8b3Vu2yZZAcALFiBeuuprXVVcagRH3GS4b9CeFpgRvK24d965DJhYEbJNUdA1vgHudwzGGGFkQ",
  "key29": "4UuzBZrN66SbuUTU2AfT89ZkMzqLGaNmqN2gcDWDbiE19naqbbCJhP1BnqBz1nq75Fe5TQ6ZnTB2Gf9zoZUbGn8K",
  "key30": "23JD85AtwLb81Nnv74NDAbWrqvYm2FTgM4ssxyQZjKHfUmh3LjdGtgmsazumKuf9ZP6eGMTB8T5iaaYJXg5zHkP3",
  "key31": "W4Dc7xryfY4t4r1s3Ktqhoo58n9bPAxiebusCVZk3biYP6kocJStSQMAsTzdM7FL2xNdNnQaVZJwUEhS3KdwecA"
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
