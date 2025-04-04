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
    "2uNJxLQAxQr5ipikFPfAPxKaCc1E4RSGNwgaT4Q7yptFtCn5rpj5bMpTjkZwDhkdJtLuhrwnQQjmLFDupecLEdES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFvoxagB4bVEnUFYePrEUu3yAaYiXh7ZCLeCfHyB1wxM7cMhaV4iTsejEZjhDQknq8qzrWb4S2W5gxFkH6c4k7J",
  "key1": "5i2x8v4GrmZMFQ7zXYyAb9X43AEWxTraPKDeUPhvvhFkDsCwy57ZhgywcNDLESPorqpkjzZbdGAjUBEDcsvXhssk",
  "key2": "2zbcv6pzav2eXPsgQW6Jn5hR1jGJeMh1gGrzypUJostW7jfFU8Egs5BEYKD5UcxvSAgJro94ihswC9Mx9ycdL2HG",
  "key3": "2YLDMPQRkndMBXEnJRRvQYVzaVHQ4HtyAM4HvBhzRQpM8W55adcwGqjZirXgAgZNyqA8XJBM2uB4eCCGprAGMqG7",
  "key4": "5sVErpDhRuaEv62jgi9ZShziSYdizLaZ5DBCsVUxkE5uLs1X2jUYGVYZuaKF8sZcweDmYuoPCZtZQtLLN4JUFJRB",
  "key5": "2TSDqV7ti6raWz8RXcHSgQpUcB5LtdKJPgUuntADcokzTw7dTC17F5utyVEuGqf1fpLnUENnqLyaqQYTyPWe7mwB",
  "key6": "1bXCZfnuhmBBWMVrqGccCbbCRtB9N7J2BQJRhCfJfV35scP1AKUNbdSKCr4BsYQZFym9cGTx2c8BUAFcTFjGjUb",
  "key7": "sMuhgm1kPnq4NpNY6VqoW8NMivWMUgSdLcdLBeKvVkRsu1TAYXcokbBUSquEVTYZJY9P2NRDkddtc4px5hh4b2r",
  "key8": "39aoWcL3AUrcpCDTu1aADjbZBh2pfT7MMT357JmfgYhgQ2AUmnEm2VjzAzvpquLWmue4Zb5UT1d9fiC4NyHhUTsG",
  "key9": "4AWrK1zqXtGXH2Se68fLFSNvoK2BHMVHkEJtG4sJbygViV7RwG7oMe4SZVpzYvixuDAKa7dpHYAokG5MAzFX67YK",
  "key10": "3K3JU6kAZPZTjQ6tXb9LgpmTr5PKXqFfXf27SQw9MqrugKu4iGt9jqpEsM4dUc4LyHWfcvk9r4SRALqAZhgKtD6P",
  "key11": "3YSTc62S8QynmmzCzGZexmS7yXfQcfMVEZe1VzS8VyDDzZup6vzt6zbXBzdkumUpgW1UFtfMGZBExtfEdffav3oX",
  "key12": "4cf49216vNkc9cNPsM7qZY7a81uKeq4UFeV832icd4XQLf3zQXpfbQ5ffD6pA3PGV41z4cqyQTAiDj6PxJdLQqjp",
  "key13": "5k761bU86jCdt3dRDBSu8YD9WxvAHBJVPPRbmYpRUD2fAERdWrKmNddVR5fe9x8SN9QH4dVPGbsxZq7vXhRXsdKJ",
  "key14": "CUxUrNSyhcy41CBy2CWWuvT4w5XGFFxUuQn8LG4Cu1PusiGxYYK4APy7Wi4vkB4ikdsQ1Au4AKh3BFqEQFqCQxo",
  "key15": "C8Po7siWXL7PrjsxxwQC99eNeyoCshNVDN994Kqd265VambRb9P92GdyQes25Yi5WxtEmvANZe4f9jgkZwPF3ac",
  "key16": "3CfV7KcWdbAQJZG2S22gRpCXRiB3tvsfrc38SxEL1xQVwLxn4n133yoavVDtnB2FG5mKVAqniJH8P2qbTCkjRH1x",
  "key17": "54mH6abgM3AznNoZHPH3qFNbPTD1tSh93XhHajvnVZKuxQ1GJMwvEXdHPu2KUsLtQwypDF8GsKbVu8FEB3qckpTS",
  "key18": "5CpKrwsLTgzVAcTHGiqDdKDTX3ZVnonwoWKdg5EfgFruC8svqXAzDRhcVkrNxgfGRcDbSHFwsoxW6g2b37GJYCde",
  "key19": "3yfnELPMp11NH1UA8dmAKFyctBcd3ASY3nGFp96sZG24wiS9Lgi47e1ZFKYxPBUo9zbewwwQihcUPpAesEaawGAv",
  "key20": "5Emk4VTdZSf8ziALmMuwQAz6PoAQbG5fxf7yxn6CAcofKjr6JKiwE8guTiqrf9FJsFZowBzEiTT1E7koUvgsut78",
  "key21": "5ASv8UrZWvZjnGFbB88zas8Pgi7gKfRzfhuLzCRmGPSBCvgCphCRc9kKznfpobVL18kS4GRHURgxjfAs4vuaAgz9",
  "key22": "zs4t3po32f29tWa2EvbMkaRZTYGKmbQyPaSJiQqKbHqom2Cj2Yh479fCo6akRcY3B7nxELiodJKfUcnHh8PGvv1",
  "key23": "4xnZKAnPHk4CLsoNvptZjZ9cyiWiYMnjNL1FTTcZe8dXgqAaqYVPqHaRQw9beUsPfnyFjDUmDL2E5ibiuGw9CNG7",
  "key24": "3wr7V8q9yi33L4Efhi9zoTKT6pxVjys4T5xLgnB6AwkWyy3MbvgT8zv2pCkbz2NZXLQNvbLcrqHotsm5GfDSmwCa",
  "key25": "29Ji1fYjjUEoh8hrSC7JSqU84mjDqwab5T94H5DpT1m8AGsvJBr8XEcLqqqJ1NYWMj8Uwj9HDSwwjU78CP8g4y69",
  "key26": "3hEZjEvby8gNUqJcTeDPMhJf4rAsPpT4TyUmTzSVfPUnN1egX3sRTvkhYEri7H3fagUmZRSQjN9T1Bu2KgzMtttT",
  "key27": "a2Lb3Df9eERLANr2icm9CX23g8Yq5D5VsYVJtLjMFH83AhUpWxceLGgLLzQkrYE2DPJ6uDRYcMxNPUJcsrDTfh5",
  "key28": "4SWWWRSznYFZgcMk1DixCPiCtckhF2DW68rSZdjqyVx1ktPNYpj651FGxQqGGVew4mBb4RMizn7SPMgaqCQvxbS6",
  "key29": "33Jkpg98DFD3d8VuZwUFa5PL3rzntygoRnAMqAtyQK22JvzrW8ypa2KuLHpE7ZAAcMgdvuxYmVsEQjsxDA6tWSEG",
  "key30": "62SSwPXVhN8hr2PqHSgsSMGGY2SoZDpqPgoKFirvvE2eX6mn9eMFesBTWsqADdfjscbQVkLv4jQMLV7P7KSzo3Vp",
  "key31": "14AYXwKBZbfoSszwcJYAgbwqkASfTzFDgDMxpfASjYcCa15UcpKRbNM3SCSEJTsoJNdBASYrqkpNzaHw2VhC9eX",
  "key32": "5SiBdueK3k2ZjapXR9Tt9TSgZiJfV2SszrXoqHqgz676JeWFLqZ9yMkxHJuHDMrU5eiiXvA1U92GDvQqNyqPYScd",
  "key33": "3h2Vg2b2gUAkEWs84QUN2RctQ8DKfJ58sUH9SayruLpEzbHo6CziUAdBAUU2nw6cWX4QzxUmTkqFxqGZLj3oFMYC",
  "key34": "5Wo45BjMB1vqWcqBjgD9TAWBtJALEnrJr5gzDE9ef4JqmCGN8vfFE8pLTpBSKVYPXEd8HGVY25E4mcVKjMaR7YS7",
  "key35": "kNHLzJ7H7cgeh4ebhqYxz6pRNLNXEZbXYkZdmGJuWBcCYS5Cfn8tt3xfQnsPkDALdt53Z7rTq9coo69DQTYXAJK",
  "key36": "4zKuqpZeBgEFoj7Hhyb8Kef861XrUVcpYUdSErnJzWXLx5Z5aCkbctmyY3Lw6wzp46bkwReAeEehirVQj3GheddC",
  "key37": "3sVtCYejj4VNxLTGSWga6ZyCogqFQtRRfj9h1njc1dMFvEGTTn3pqB4g4LAgGD3qHUyXcX5V6pd4Lu84Nc1m76BP",
  "key38": "4dZ2RwNJXQK191ALt5hyyNTreuofBeAsBdeVgiLKGjFptmGX6qgsgwHM4GK6x24KnjdWhWu8hAruydJVjhLiCPpQ",
  "key39": "5fK7mg5cNvzgxA5YuAUHqWeFkcsKdxyoZVDNU9GpeRw2EoMdygLoVEXPFQVLxaHguaPZUeANmszQMUWKRnYA61bj",
  "key40": "2BsYjjjFEmnBzCJfEuNegWoexyaasUvmsud1f5nCxir5ZgbcFcfzHUXxJ2RGNN6rqy4swptBpi9faXq7traEx9He",
  "key41": "4aLHQLQPpvs4CwCoQrmYuezYkAfXNL8frGK7zyE5bVLePCtTjcmknNygnLadMAzmHcVaAdBaHwN32UETR64HMGpt",
  "key42": "FSA1uR1AcbLuYjDdUmQTpXgKJqNzdF9RHevoyuygNNayq4rJxtqski5y6u3qfYh93Ksy4aNHc6NEW2X2gWXtaYd"
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
