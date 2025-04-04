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
    "fB7XZDVpTruJYDygx2twnJxSVXjqdV6LmF8gsfeeDsf8z9uoy2T5Zncw15T6Mqf1PUvs4DqCmyADFF6Jeak8Cp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzLfZLNKMkfKvr3SNyD2rvMAkchCokzEURpoBW4jTTb8Scb1EzUN2fHrdBoHHV3pfhep3kqMPnyzH5BFwwUPUcH",
  "key1": "2iG56wVzs3HN3nyCMYLLF5nnpnFy4FBiCwtyPAMqL6UGC9VcyBwZ8PSfcXt7XiUXfNxuug6tvXAiueWxRCmjLYmA",
  "key2": "5Q7i7QUWbN9jbU9FTFZvaL73bPZvrRvCHBCFqADDK4pPrPm1X3VuiiBM9qjRzVUjFQDcVJ4RLDpP1fZXivrZke3U",
  "key3": "anLraENDnKDm6vPAzZ5JXY9xfewtg3Awnbdguocx6ww2n8pGepcUtpu3KDFLJnMJk8XBH7YKd1m9Ji8DGgujpht",
  "key4": "3dAxZxajVcQdLGJRcdHp7yDFqwejq8cLfTEJtdzoRn9yV5V5CMhwC3WsvPaLeZetHhrA8Y2HJJY85qaWuT6FvT3J",
  "key5": "39xJGwBwucSuWAoHQCrp7zTfFNe9EU4kAUVBeJNdxQQ9Ekw4UZkpJz7LmA6ex1LHH4xkf4rKBgk35sNswFjWzEMC",
  "key6": "5nxd4V9zS7oXohCvHHxdHA1fgKQyrcGUqXyUQcXC1AVoXvPfYBq34WY18cfawqLLZqyWX6RckF6CHUXVisHfGd9i",
  "key7": "1AMQPZA4h933BzXYJzKhF5sGrS7kxVLbS5ZYYRQdGhStMVCqESYvPDyGgHPpjUbMtopQtSW5PxmV43sJPeobkXy",
  "key8": "4YQpNUFdunbJ1bqMXgEtdCNo5suE3dcQ9hHrRrfaBvKXQ57Afw4teMGSbLPv2Tjh8jzr6tQBFgJuRCqzka7y4UWa",
  "key9": "4GYnNxUVUrPdmB1uy8ufz12JAaRYR8mG68Qe61X2WhGq4uHMPAkeWEpYqkQCnj322b1AGzCsXXhyo97oWzAZ3J3",
  "key10": "2SHYhj3GqoX5a7KoE5NYE6D9qMMsJWjMmakqrTd85CFpuKF11VGJbR252L1cCPuX3dCCQjm7veiRs3BkKk2EjNF8",
  "key11": "4f2oqUYqCezuujXrLgDQn4j2TxP3MrbuXAQ8TZGq4nQCPJUXSPdxSyxD1TkSx39jkjn6PfTZTCsVWMi5ZAW9F3BR",
  "key12": "e2qggQq5q1SBXPM7deSjRMgCBKU6cAd9k9DApULprQ7Bc9uhW82cUSLqx3gpEHYdKY4DMwYrqZsG23mdkNHNNsA",
  "key13": "iSqVNhCbnqMvkdw9k8tjAhUUzTWcd8NgtqBrv4AVzQ9v632NftQjbfX8p8fkVxnJadVjVSQMY3aSZGr2cLNw3Pb",
  "key14": "ZEdT57fWMVZfXeK7v3jowZQSjsxb5sLPM8eik6youctke9KH2FfzkVMbkpFGnCHejF3N4M2KyP6jZtNsNJNEexv",
  "key15": "2qd5JdV9xmGfyk2MTR48BvVC5eZAenV3JDmHBJze4cxTaW2wEbk11pJx9L6WBnmSHC7B9oEK4CkMe2SxXyjMttuH",
  "key16": "a6cgU3V7wd15hmmWfXn7hFB8F1b9toYgrm9yzr3yY71gUjvTZ2eBswHqiW1862YeqQ43Dp32rS4reqE6pDQjCcj",
  "key17": "Dik8jGU8vQFHvQryXsWkUvXZz8Ndy6jVHyhnvXEHhsPwaXB5fnYPFAi1cZCskzjkNAkM2nZnvcBZXsGqosNs8x1",
  "key18": "3hAHj1mBLeeAFRpDaYtfrTCQYauxpJeB85zNY55NDFhjJYpVemvNad1Z9ssFncva3sR6vpWFQRmBDAj7aCgGGXUU",
  "key19": "2FBJBuoQx9UpQaUTeWtRei7Chcdp9ZUdJBW1JJJcDhDuVjRpDkqtVSxA7jqhjDjxc4c5X8oqUs6gYzSKwVSqWhKE",
  "key20": "2tyKxeZ9HtBDPxdxFgY4faibhvNSvXEk7Nr1Bk5k7M91JW526fPUVqNX4gDWFLbqgDRtksJ6Kn6sSvZpTJ9fpPf4",
  "key21": "3rwewxsuM2Q6emRndCrr8iwNCnWJP3iDqUACDvFSx5noaHdLPbPjGWnLwAo6tPBonb81z4KiXx6NrcGmZyqVG4Gv",
  "key22": "2fiNibumdwnpVv1TxDeYiMEhzoZV9bDUNXjnQswJXBT75xzBuBn6bfUhsP3ckSpJkgxjAnjo5BRiPZ8ASUQ3kJyf",
  "key23": "5oQovmsCgSbQg7sUmVeVAReim9JQnM4oPY6VYdKn5h22VHytdbiKYs39x3PrJswA5nbwmmnEoo16MLj77otAJJKw",
  "key24": "3TwLBUrSww3s5rr1koqpiWrtwe4K6fN7e5NRwx1sAGvxTksHGgSYKxW1uGgMegR1CWKj7EG5S36yPVVADXJ2vNaF",
  "key25": "4FAFUNohjwvKA7p7gGbRYHm32fQ6WzN3jtq5d1rj6E93qbTVogmwz7LiBKQSYDLmnFb6HvaD7psm3QhivbbU11kN",
  "key26": "59o5q6NMBZzfqemhzNAkYhsaEHWXwvE4PJt9Zv8hmYjDwB32tXFxZhfmhqXC6UJxQkSejKV8b71wNvJrnX3La4GM",
  "key27": "4uZ1SjJhkF8QBGJruP1WFxrdfhJjrkKmZ5gJHz8dbBeouQPxRKyLDmCRd3CyU6hGvXHM38yDir9QA4os4ZqY8vVt",
  "key28": "3jNM6wQRif6N6ob6mLVsR4NNfvSfvfLUzxA7fY6ALJEESy6XKn4NMvMVipeA7Q91cH2szYx7syKsVBKHmdgAw2wT",
  "key29": "581bHotpNFepL8RWB4oAZtP2BEnLRjLu8Sig96BMS3sTiCtmCpfitnka5kZwqR3x1zF9y1ZyqBhB6rixNPi7PipN",
  "key30": "4NhhsVF3BdCo1exLcMn3JyDMTgkvpVtiLPz3iARDzKS3T8zWmwuG9WE1Tt1fWFSgmRGrQQ1oJzcnHpC1pm2H2K9g",
  "key31": "4j5GZ8Rxc3wK69uttXGzgrGkosbZmYdgdjgoiDd8JWnsgJEXQondkgHrJuCNv4Wqv2dL5KAC3RbH9Emmyxzbx78x",
  "key32": "4HYwbphtQghWTuNzhfdJ9XZy1cPqqHiq8bkJpVsGGB3vA8s8bTbBpF5xcCFrafbFt4NJoZnAUKFGRFNcuKRYboo9",
  "key33": "3yusmM3MF24SfnUabyNo2hoN86hKs4nSAE6pDCAxGC4eCEzgGa13RqqS8qAXrmmvJphuUvCTwb7kj1yxRcoDqVQm",
  "key34": "1eDqtobJfvwfTaY7FDz6F1WfNN95Bac4VzWqTmxezToysw5mwGiJPWzKf5bCNKunZKicrg9b6xB5VgPWj6ZKRJg",
  "key35": "kMW6vd4ZaAGC8zj7p6KnUqBYi1sWCAcBvXsyapybrTuRtz62XWqhruM5ZU7ot8oDxeedRkBEFbpDYUbBeGwTFej",
  "key36": "267pFN4Hp722uSkbJoguWLDUfZ6TgGgsd727PAvTGkWiFdoiWD2E9NkQi8ERwcdeDUwXvV4Cxv5fouN1VeSrymfZ",
  "key37": "hWK1BKNZyWNixb9gh7cQzjJ3oFkJjL27Mm5SABzeqzFbuLXkkfQ4go7sr4ZcW1gTxNusSH6N1w1KwSpg1bSNNts",
  "key38": "2A79iRztwKBwFFFEurqN34DRYXT8FktHz3mQnBgcPRmT2DPUgtDupb818GmoPfEdSg5Z7ZCDrNrz6gdd1r94rExW",
  "key39": "3shgZw3CeGbkC5FBjAwU5TgpFZ95LAQc5KSoXpKSCroAs6BKfbw3p3HvRqjfpTxSdT6LwhzcAW86P3VAWiecJTmP",
  "key40": "5VYGkArjSXbPep6uRHrnjQFFp3XdofiArd3g68zSrC9QkvrocYMMqTTdVz1AgLfFgzC4Uoa4XcxnrzbTCzTeDyYv",
  "key41": "3JD4fUDeJFV6SUS5rASWLha75FR2a4hThrnMsz9kNLLv1wKCGtHA8SRy5RDmKocingfEHLqu7gKDtpSGGefCWzDx",
  "key42": "3BKotBbxnrezspNYYqKqqtMLTq3EnWaAArJyU5sxmoykJdZyGvGZzZQahvexStEcvSzt1m77HwkcEcZQh55Zinp9",
  "key43": "3M1n1bbqdCARV6TaodRwtoFYmxeFxm1DQnWUFB6cYr2S6oAx2f3tLrWbkr3TYverFcmXCgR8omxpAsFPdTPUH28F",
  "key44": "nVBDX9iBo5N2RZWNHy4H9idv5wjS4nckeGCYRFDFnoJp5aw131Y3TSUrTa3GiYpNiJcbh1fN3DteQz9fcDFzUYc",
  "key45": "5fbR6ZsUhqmJF9E53jNmMe3QTftjHArgbj918rHr4AQEtosubkb6p7MYyF3m6aW4rGcRqgPkP4w2D33d51dwEwsr",
  "key46": "3Hx8YXircbj7HLZApn4zvhCQ4H56ot71fgk7BGEQyQzvgVqzjJEkbJ2M5ZcrFQcvRrztwzYdggg9sTD6WdPLKKwk",
  "key47": "3peeKt6kA4JbU4r1t32J9Kqrit4aDXfxUNBCZHxNSwZaBe35NEH7qcn5KVWesbCoNGLTnVaKgMJQtxoHcNnHEiuq",
  "key48": "3QdDbcZDeqCpcpZNa4A8Kc13TTNvHsQM434barQQRyD63VxRzR8LuTrzekesbFyEkvLaWwrpw8Egx9BL13CY6SWF"
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
