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
    "KYGuV63jzXJmq9ESzZsRsbizFtc3RVCZhzbGtuJ7T5RZ5JWJkhSF76y1KjJR72QDpDtBytwfe8HRtF9oMsKXtvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nP5eqjws4f6DhopRYc1DTrjDf3aw9Xkp2qc93JEdsC7vgxBuoFFXXtbz63cAKBeCvBTLXcEP1TS9sTiTTJugAft",
  "key1": "4BV24PybVz2fXK7aksEoLtr1VHNwDCu1JjsZiC88Ydc256pFJXZ3PdfNcdgJc1fqmBQwQeEsKSzX8u8oBv8f22dd",
  "key2": "2xKUbikNouTtLRMJCMXEwjLygAMSCCiW9PHj3jedehiW7JKMtjXxrb8L8w27DpL2Td7p9NBmPWieSfkYQzBbXtL8",
  "key3": "38keciSN8u5cjW679do26XWvixCQg37psjrhhRkHpZQ8t3babb5k5DeHWNosBdj2jK7qEByXCE7GiJCz4Diycqyt",
  "key4": "3Q1viDdpWKZxWShKcDoF9hXo3aN49KnMXe3JN5k2WiTqvrZrERr1aBtw6GG2bcd1fE5NUuuagsREkmzbnKLiCSoV",
  "key5": "3qvDTzP27iE5aQtG4DKoRp3cTQNPAGADrD5V9KsjjXtL7N4EkaqsRqzrrvgHNR4dwit9dpzY9uQqwqAa8GScE1m9",
  "key6": "Q5YE75jsMqdf6vBeaZo1RSSMs2NSJgTqgRY44wRBBWs5WvkcKpJkBFy1m9MQziMnfj3QeXzpRM7AtTgYtEPL2v8",
  "key7": "42ZPoTbSbM2Ap5SQtMQ2JaBCzYA5MMNiaRtcraAXaUgNuxjLQ4kMLSrm7ReyELDAA4dDGeQxvyxvAdeWQBGAwpLB",
  "key8": "22vZB6Tvq97kq73E8YdgGHe2547zrDTygyTFRdrB3VHPv3Ek5PzKaGQ6d6qDN8oEYUrRQ5nCDBx2nxuzYHLo5awp",
  "key9": "2R9zNEg3Fi7QtXUEQVEBCd93kT87Sm6MvkM6UiDxdqfnenAMUv2Hikuni7Lt5SL529nAx6u9dgQRWWveiQiyeWKa",
  "key10": "kmg5aq2SHAoADALMgr6qg3eM2fu4GFafmKRYqMobKteAEeLXqKU6wcFpeXgnvnbYV3jBP4AuWGkXghpd9XVVDtL",
  "key11": "5wyzUfyKY3rJG3A81fCAAYPj51VSxh9HAeGG6iaFcj2bTfhCYeXHCckiueh6JW4SPn2WY4rcqxgjf4Wq3yyYRUoL",
  "key12": "bLLcpF5vx5rhtUSaBWmQ287kirj5pviciuQpDL7PvmJAEKgEkBbCeLFQy2zjCJcD2f3jaMUiAtPVvrnBLVUhfJd",
  "key13": "4F8E1Q87s6K7YmrzRTnd7DBipuBn9wrrXJwxNeHTZfBgUVM8jPbkVsCHewP6bg16VQHHhkwuHcjTvx24pbY6jSPQ",
  "key14": "5xNxKM5Lx94PPX4aqjYZW1zMoPUqEkfuq5yoRRQHJfkDBBRhV8m5yg6TVmysY1zvXkZWrcRQ9VVbLKN6GyjZLaAC",
  "key15": "4qsyoaJd2NU9Xa2tTuGvKaU1ztGLhqNT1dATXTPy1szvMV4X2WjY8Mu861SkuovuV47178QVrNoiXSSGMQtKbu5F",
  "key16": "2G8ESRq6VM18Bw1SoRapgwtfHEUgr98qsG2R7Ggk6kCgRtwoKrZ8oLNK3Sgj16ziYbvB6uQFctRETJBq5DzMm4rs",
  "key17": "2mj5SWuamjahAWBK9CMJ6Bs8APrZ5p2JxbZTqWHr5a1SSPBaxKPP1DGruYb8EDojQjsUNkSugJWATnnSs7ss4TYx",
  "key18": "5iGSxQgapt9s5gUGpWRmwi276LComY7NceJmfyijsmA3Z97TYtUMsmx2oNQd9rjkJXQZotnDokdZ5qV8UJcAcYTL",
  "key19": "S9zZDhc1Lm2PVXvqKBQfPG8rpXNvkwd3xLkgxjQPBjSUEuQwzGvkcPjRfBWrNMRWUDsAANZgFrkXRbEJkeGrgAu",
  "key20": "4P8qSCLRM7AfCbrhBqQo6v7DECYtmyJjHyN1g8Dbcih6z1waW7Ljt49jBgcvjbSzayha4NTEgTDDdq2ZXWDo8zYy",
  "key21": "2yWX4eTvp18fSM2CcHRoyk7MQdEGSUSpHezPqAUi69Kdw9VaQRAv36J9CoRZUFdHostH4iwo1bLzeiAdTsME7wg4",
  "key22": "538qqwE75PnNcR9GmRZjV2TBCWaTXamyqG3qJntjCmiZ8Xf86ZUsyjkFfcVM3nAPhJS3TGEF8BsYMSVz4kt4TqoN",
  "key23": "3vGLR8LHbhfmwqmeXVd1p8j1HA5UX1PxFF46JNtwTTwwbe73Wfa4fpqbYDXcxBiazT17hfEfKz6yAa5aoz98LeGN",
  "key24": "4MMBGcCBxq9v4EYQDdKjipm1eSTVMY2SLUqb79cuYDyvH6cJp4Nvfk8uZ3tzzSHBnrK98qyC85b4nEX55RwD3r59",
  "key25": "4ynizjxHtZ9ZGztbBgQiAtCmeNbquuHcwuMoaSPWHcbgN8ceRiMhmSKdnTU8QT2sAoKLbCiJicHTKvfvqGW3Yjtj",
  "key26": "5PmgsqtMSULsPuD6U6ctFZCWfgnbFikF9fyAUgezTu4ENK4PxBNRLaUWNAwdKdqovTdreogFK3tF3VqhPkuA6PAv",
  "key27": "GycgoYFfoVZFWttCA4AJgaA56HHJtBUyh8qNi1ESFfUk34BG9Jtjhy7gE5rwLZNd8xt5fMw7xHgGF8H63SQ8c4S",
  "key28": "2Gg52UDuf7YieSUBW3pUG8JyGtBcbHqfSvsxVAUAntmB62gf64g8aQUPXuHDhnMJ46fb85pW5ZZPfAhyngezzzuu",
  "key29": "4cJFuCCweaSf3o538iztg6hAgWidBxG7JRxUrC4eWr7dF7DzqeaQkwnuMxHJfkm5zV9Wsj9a7Kf8krPyXcxaiRSR",
  "key30": "4DcMfSwmVZTdN3LeeSKxzidt7rcegv1p682vTUyoG93EFLXV9oCRmvmAmJpSZoSLYChGBufafooTD2zr6Do7rERk",
  "key31": "4Ras8sXu6NTcayeB17tVXCMG3eUmJGJ8WpAe4iriyim4WfNt7oqLcCzRXESPfmyyj49eqjkfYEo69X9daQJD2RMK",
  "key32": "sC51S51NH64KzAJ4c6J5c5xwSiRrQjdCc8HCXpDR6GbpopnBDpXSFwiLHPNj1KEDa1sw1QMS93N8jZ7AvZsn6Kk",
  "key33": "jvc7My2F47nvv5WvjuFvwujn7L2zqF12wcjD95aFkfiqy5tQ3wbLyFySeBV9BoAiCTSCp5MYbpm1LQreuRd3SjP"
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
