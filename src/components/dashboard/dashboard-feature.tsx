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
    "2AW8DqUWQe3JQevMkGmJHUHbxtsMr71fTqxjr6MR2syQegpNaRYwk2hCuZ5hDWdeyqBe8EZxU5fhdcKRW5Uod55S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPzTo2FY7CDoPWw4kAE9gnLEmAcXFGqiAkwYkiRiTEUAUAJaJXAVmU78Epv4SwiB5jeMxitwTCDRUVPe6rKRfVX",
  "key1": "2jZ6FeejJq5ckdqvqfUdmSqDf9HSFay4Us5dbuc4M76jc78g2JgAuTGQ9x7uve9RrefFvPwsKTVPXviVfPHnke1i",
  "key2": "5VoLioUyircCH6VDVveHu6KnGf5C3APPZQ9w55CsoVoWN1ue7aShjUf2WJw363MZh4a9xPa6DiK6ePunJPeLeQBM",
  "key3": "3CVA8omeQaXWZFfpLDCiEyWGCnxtbgrJ7qsbmFnzmYCuQJciwpqKPCSj2Rnqi6V2uMvTNWJc3cDuhZuB6sc7XSh3",
  "key4": "2RDc9v7bS7fQ2o7DmEuJe1kRUUevXMa3os6daV4R6Pzc1zjy1bJsBumNBnBTWNbC48MG4MYc8DtdvX2ikdhwzDC8",
  "key5": "v4BFm8V5pkHLmZgnfVmENQt4WZRt5sRukDKd58nTTYYXeENXceF3b6eNZYBiUZ3puMMJctLU3dzVZaoMxTRssCB",
  "key6": "B29bP4xkiLKzUFBCkj7AbNZyyRp6f6zZe3LFLHzya28HrZAAT6uCkxZfvNk2EMfD2ve7zF2uqoUFyyfvkBk7HUE",
  "key7": "4L9JjiihqLvLnVbVJEWW6UkqMBEUUeXbXF3mLgE58ygtj3yqQc7GGLYUex28FG5xvrTmKxGc5MUzppGLzmCnxMCb",
  "key8": "4jK4nCPgMk6xmfY5gpHjFAZ6Yv94TZ7dMZ5Qde3NXBPAesk5eWiefPnQokMdJ8MPqCnE8S5M2Y2pCbHFMiU2uvR8",
  "key9": "4GVnAMAiZdMPK2pfwsxypM6AYrQ3dQAQJpPQTm12KqjoFK9WDyFXp9ytvzKNox1gSzV7km1k2TAosTVqEgXTsJWu",
  "key10": "3asFWXzuHU7E8iAfQB8yBTfJAHuawV1MhPsPcbh3mHeSj4YixXXKdxomK6HXvzavLwCNfHnhHywazLnXwvkoU1U7",
  "key11": "2b4WgPigKSxBoKeQWTyGaGcVbkuzBA9Mk8t9qjfqshHQbY471EXcV3pTKyFcvxLjsgC1d2VfuMSyT3rVxmnqeSTP",
  "key12": "2Qd6MppuRVuyqs8GS47T1viqzvYVej2DbkwcBqDkz126BShbWhKRD5Vs1n9yStuL1SnBxVsgdkdZeuag5qTQzPAg",
  "key13": "5pxvnRGDRcr7ChEvRmPCg8aMReqKM3KCpoKMcWjc3c7ic9ogxd1SJcb4U6rUUMhRXJyZnDtXTqCPQcBxUGeWx9p8",
  "key14": "4nnHf5e2JQP49G417dxQLKWNqoHbgyAqMu9rY2GZFXoV3Zc8eFPPDdgpha2tEtoc1vSAAJmkHSd9uZaraBwjWNp1",
  "key15": "rK1PHbCrKeBoVeMgHZZRc7gqhjf53Pcjy7jBR4nKHFJN54wFTxrEae2xvdbyMVvkEDLuePRpK4MgcQSviB7fZJQ",
  "key16": "4X1oDyZSpn9PtQwSEcDa3THaTGjyZ73ByVHK74MKRkwR3FjHks9Zb6rWVNrpevBgCvFL5gzFEbindRg1F2t6rZn8",
  "key17": "4Co2iJ2ENFn8jfbapXcLqrraPaovjeUmWxkqHtx3oacKM5qCcRYU9iSE4jugt13emwupbqnsLeF4YtpxE5tMtBLo",
  "key18": "5EkynniRFQXWP3QfmtVbYRq5V22PnDLRWyKRwu1yF1JSELG1oDExrknJf3Vk8sU8rBBPz5RrVXVQWvoLkuVV8jfA",
  "key19": "4waSaoXtZfALi1SPbKvrD7SS8nVtFTHScHWpGTKGkSf9U77mJDvhzLLWDLWRvDnVGSKAtzGnBPrMrq7UZ3veeamq",
  "key20": "zDdeL7nZNEQWBJ8MgpPyksA5a5rMqfKSMDMmhx3aKZCQ8X4ChU3dG38draiAYUQRKVuKXYradsMef2r8XyDzMLy",
  "key21": "2oWbN57RR7H1j4q6VR9p28Bny6jqF6V8sxeQh2yqs3YUJcye8ki5K3gZsEwvFTtcE984xZ4LpQAcDSgQz7DqSjbj",
  "key22": "5NmsLXNGgFMVYpawHPaQLvfBb2Cbh24spunC2mmEEjx7LQaBXaGL13JPoY6CJsKgM3rkY1xgnbGSDaKSa8P64JXJ",
  "key23": "54q36Hk9sHRQGyNrSLnTXax5aiX9xoUTPiTwNbfB2B2jMXw7aiXh4ELBs6esLMTz3BW3t7c9rrXCHNtkRf1P1QjD",
  "key24": "2YFnoo8qqRRomrNspi3UZ9Q1guivAcSsS5fPa6HXGEmqxNBoPDJxonCgMydXQYLGHcF1CgiHmapFDaZ4nGAmEaue",
  "key25": "2K1yD7mtCsrpFETTfLdnzGw22KpP85DKB6pEFdHNJMFj3dc6ubL5qNsQsKRYCvBSaYkwXTDswavDiCUcrozUqBsn",
  "key26": "2ehzBpTNFSpfz5MNtWsj5eJp8wQNqPFrsYtxLqeyqF5qsRnafULzekZhTE2C84x1ETN3vYjjWqbNdrXVGsvfG8XX",
  "key27": "2V4XjptYvHSnnCu9kCeboSfXQxrGXgvHd2TfmH2fJqQWtmJjRhcYJVgT972e4ssKkGv7woCfULRwz9sdEF9Ftpjb",
  "key28": "5FA8RWshe76FTnUkhKRfwNiyyMztCE1A8SNdeiGL9PgM5naNrsdNj5YJaxZ3NNAZeeZCdVE2Xn6jACuTMuEhQmQn",
  "key29": "4U5jtyDajFCuZZASxWX8sJ9ZAVGDn9C1QZffeLooFo53T9scyhNBA6CYKnWrcnmc1CHxu3cqoEPdv6u54NACQGcn",
  "key30": "e6ppLkWVqU3VzjiYet3uzQKfCAKDq9QCL9bEAoafrgrGJZ7xumPvGvvZPG6AYBGTsuBq8PKPobHG5dqewYAEZdy",
  "key31": "4Ci4spbsqXzYzdA8tMpnNPXj894wt6hZzq8LQxhB1Kov9m9SMrt4DyPnisbhpNmeZddsJdKMEJMyaSkXgex26gVM",
  "key32": "2JuxuPQWuiKvPiW7ueDBr7iXEYRJ7U3kLiqR9wphbchynDXizwfies6DR7P9hDy8kV15DRhHhJVJXGH6ZY173QZV",
  "key33": "4z6m324e1Cec3Z8ajs6QYnCAsg1tv8GGahrmWonG2Rw6im4yUb1UA4KZ9KoKjA6h1NDJjVirubW2kbTPqwBzSTG8",
  "key34": "516W8opHu5hJbG5a1JuwmWbfy1BBHP5NPL4hkfZBe2E5K3jMi9FcC8ARMs5NVTVTtmJ4fkxyV5yk7uGn5yCFR14C",
  "key35": "VskDZSczF24adHQNiSf8tDmM35b96isQ7q2nC5ucJhUiUqM49n1Yz92GAX47GVf9PWRSLsoLRcczjcpnqYzHmaL",
  "key36": "4P5LujzLXppo13BaEf8WrbKuJ42pVcf9fUc8F9Nrw9MzVUZFY5Jkz5vBDreW78tceRBazwLQB5TPUYY9ubwjkmU9",
  "key37": "5w8N2DDqUKu16VZ59NNszyQTpGwQSZJo49ZXvFGLeq2A21Q46rkSveuMBdVX3mUQGQPS9fpmNpfFNsi4QP26JhQ2",
  "key38": "pGAGb2DJvnNvHfzyZe9vJ7Npv6WnECbZJSjLUPPKcusBFGCXnwkvhJyrMWtLfkqM9T74dAt8B8Wrgo8Z2q8AnpB",
  "key39": "3ZxokufbWKUdzNNMc7qpijKNqUjNq8q1XuCUe6FszxEGEqj6jeVbz9aMHkGANrUuHoCcD3M7xF2ZPybMjKRcMTs7"
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
