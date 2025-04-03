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
    "3uimTUc1KBk2uDkwocUhL7MhhRoekbGNHg7Lr8kdrhJCuJVaXsCpw8v6jTkoVxSxSKW31EHQnUXndxhH5CG3MSKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6pWDoNnJ5RdyUzAMN8R65LaEEsxaFSLwVKJCFAsJwdToP8jhhGgZ4sTHtinVXJy9eFXiyQjdVhriqxjMTi6x19",
  "key1": "2Xt9pXbBjUn6ksedAD14kHhUAfVNohmSeUjdznTku32K4KrEmoBXhx5XD1QwK3j8g8XQhwdLxT2Kz9gRU9mezA9d",
  "key2": "2zmBandrVa3sqQ1dMFnPK3dsFY2j8jMUpw1KELRi85mj3oM9T8WVzMDATpRQUttiJYyUM4QmEHLhZaAv4E9BqehK",
  "key3": "4kd3SybqD3qPV7MKXkBBx3v5u2DL3M14uzqCUxZnMkcsLTkDxJeDXHDXp3jXkjdDANXTu4xGh5CJP4AoDczCtWDp",
  "key4": "3xhcYCnTyy5v2Lfu7VzVrxr5PVJ4TWT1MhVtvFPb86aQsr3Ui3n4JJDUFYUbpxYGEw8gXcuJceDATDrAhCURqDMY",
  "key5": "5zJbLsSuf6pBtn4f6mjjPC5irZaDdkLt1rwXvNGMG9nKQ2WBx5GiStnaCHDqyZyCC5mH7NLm4riv8QmBZMZeG7Rc",
  "key6": "5oF2GBi6ZJ3rpxGvyfvxVdmZ7UjxTT3vCBUbZG7rPE4ZomLadLNX1yLsrA4qAH8E2TGtrCJNo31Kz7euCjB35BQM",
  "key7": "3PQK1ZKckdW41bMypT8yrtUrsAor67u7bFwUUKJRZ7nTGQQC21MUk6WuQNJHwViLYE4Njr6FJj1vPsqt2cV7sq1x",
  "key8": "4MDA9URrq69vVzF1y6EYG9EHLwPePHwYhgAH28xYNqp1iS63hzr7FryQ68KqkS6x7QxV2Me1KXn646ndyLKjJduR",
  "key9": "4Rz8hHcKF7V56pk1cbSvsvqtZFYFdacxhwFYzDkF5DVntJD811VDYUJiUKzyyz7zD4x3FCLXPwiqpPNttQz9PYne",
  "key10": "fBghZ8E3L3qxY4x1xnBXJ1R2ULhnADpZh8yLzEU3t6HYHWvpXJADnhUnZsRkSK7P5DLKbBNvvo2ayg9CZkqbHNX",
  "key11": "23CG5A3zS7y46sqmoU5xCD6ujhwUhaWY1xJhQyuA92VuaHnvRWRjgBDo2w2BX8Rbb998gokSjLYDgEXwq7mtrupY",
  "key12": "3sGhitsEQmC1dLHQwNzpptzYxR8M8rShK6yurQb39oALx3Ef8HKquirQwjUpmbgrv1sM4WbHYKxDo8TUeM9dek4B",
  "key13": "2pYb286CSyakiqGYyDbtsJKNFD68TXuD4BG6xqZMSdBnKJbnfSsn9EQx5kxbhUi3yJrpDjAN95ZTct6czGCbcBhe",
  "key14": "4Z4f1cRymywxUGL1tkWHAnKsztUfd95NqM1XTndQy2XZ9ziNHPc74WT4PxTTNhvCze586vsLb46dPCXarAjxgjdS",
  "key15": "2ebmZzsq2vF3hbLud3TdG8qNQGdkCQSnmN411jiXugW5xSNPedA431EvS9yNSKy77bS6BQQZ2UoaqrsfYQTFaJHT",
  "key16": "4Z7P5CWkfpNYNznBaEv4SjrjWNCz3U7qobEanpr4ya52KFezANQpTZnGqHqThrWYf9LYo3zMRquC4sPgyYDiiqYG",
  "key17": "rzMuar1zqiPxpGNdeNJZeJ1KDgf67ckYwhRMCt8oipJkModWWFUvXzwHAHxquZUV45e3THL3GG2YNXKp4VFdkiU",
  "key18": "5WgEyc3a6nRTJJcxEMrwTLx2zCd3E9YRi7tuzXKTvPj5d39Xw1c5WaDRV2v2yD16gVMTssSA3zfdGLDHnQzQZoFY",
  "key19": "4FU1EUYVP7k4ev7u8psSw51M3eFXr1tjCT9yJcbEMyWpfjLbYA5p9cKZawhxN1J16QQUDgS4pxQfTARW11pgJ3YG",
  "key20": "5P1D8Mxd35yQF9mYbzJqqPZjJRGGec1jZcMih2zmDoYhZ36tMirsCm29TFEJ1SogyKQ7HjJ1bJypxMZThX4nkg4",
  "key21": "3SApPm5bovm5ESL62dwPD3PuKXKWM4fpFQP3sGU8uofPLHS5Lkr7maaFxGvDe9Q13SpNsjjbMTqDiKP5RkMQMTCb",
  "key22": "479bqfRZpJixQpYyDWxeHk845jk2HbY5oEmSytM9HDkPqXxCXsiK48NyDefFu8j9uhDg7xB7N1QDXP5een61pRet",
  "key23": "3fXZ12efbPNm5AwobKYj9NWpUjyvumZSsiRKLBTjaNaeHbKDm1qrmc54oPCBVgUNcCWmqekq9GzJtEsMPmcdsffu",
  "key24": "4VjPVskegtBx9xxeUNQwnGUPEP2wNasneoEcCVyCqKNrXFZcuZybUn6kmfvW7KqxDcmVzCgTmd3MGCNLzWgZWM8y",
  "key25": "3DFQHTcK3wD9UvbCWvqdWN4Gri9WjDQhezvCkveKB8VqS5JwjWGkwJ1SsexbVaC1v2hr2oeV7wfLSYf7ky4QkWK7",
  "key26": "5oswQPqqL3XjBEP5Bvw4Xp839LhU4KnHLLYeXzPePSYjDepyCQ2LVTMfUjKBeuECVZk5gMker1FKGu3Y2pXPoEV2",
  "key27": "4Sc93gA8SRNw2JUnwZCrs2ycbL9WdxwNrPu5eTdPK5MZ7pLGEXwqUHUPp1QrAxBArhfidsyZHzbLyH99EGDUSCgg",
  "key28": "3LFQcxASLwCLBiBz9zvd4hxTiTQbGem7xNzwt4fK35jmeiAXczFvxjjJF6jV4GYZNFbBxNct97i8K6wWz6JUd1qZ",
  "key29": "2AEEYah8gY6AwtXVCWcyceNJKB5LuDw1Uhdvf2GLHUVe7ku3rWpmu1JqE7GKp4PsVvsZKYdKYbi9iZi95dN1nPBf",
  "key30": "N94SgHBfAsSyN6PWR7tXK4C7427FyconzSsCQjj1MKMoomPVgA8JLG31Z7dXDziAzBjHDHDSmidxDvJVH6Rb2yd",
  "key31": "oJyyQCR4ftDN4mdxacZysLpq9PWBMvdBtRapHvdoVYLeDeqYLwfmKUgw1u8fBiGcaLMS6ov3dHqcSrEFqwghmVM",
  "key32": "42UnYMfNQ7GEDyMieDosUTRYUWimpfWxf3jvC88eSsjnj3TyK7aFNrAqQ3QQiuw2hYzGs3ecyPx2ZKRjrMr2TqhQ",
  "key33": "3RMiGaFLYCn8YUyq8pJVZ66wqVX4BnnAbiJfGRAJYnAVDZYq63wUU5bc8adS5QkV7Pp4jV1wNSB5tkUA3qAcZYkv",
  "key34": "WgzBf79rBnMaubeYNxERUorZHfSqDeP2mkCXRcKDRq39D1VQwGrFmGyL7d97nLuRcCU8JKaaBhV4uk6Ebkeqwmk",
  "key35": "4XURuj4cPBxBnoqPPhiFrVVgdUEmyxqWNDmTRzq5CpkWsJf2qBtoKNfXqTn9PiUcdALECBrtibvzNihFnsZr4vCp",
  "key36": "4TyQ2CdNTCa2pPWehEo2JnRSJ3JmJv7AsapSbRuQ6yYmD2ahinoC891Cm9ySGpvFtuyvABZTbYUu5H2TA8b4a3gw",
  "key37": "2c6379Fb7fLx4E5JdpCkbtdeE1YPyH2tSQZ3JDEEUz9oVPCZokER6GCTZxgw4a5qguw9ECkGV4FYmswKpABsLXwo",
  "key38": "52o6wpuJNoMLVZMWfy2HBSXN4DBGSzs7y2s2TeeoegLLB1z75vQTz3Sk8DDieTTMT5fW7uZkubvjq6uAn7kPW26q",
  "key39": "4TKxFEtW3maqdMDMDgq8VPg8YpoBHEJ8RmQSTaP1bEZbgCqeD1oaLdFzjiJcCk6m9HwFXuuboEphdU8J33w9DS4W",
  "key40": "4UmwfrstUvi31bzgbeoWs8A7hD47zrTu34pD6FPpeeLJ6dpkEwpru8rdRWvVS3A5PkAY4rEcium3yBcxreeTTkXy",
  "key41": "3VHphDHoq7LQ4gfjjpGE8EengDJsKQJHqJJpHQa5FyFEySsEhv2ak7ZjBidsuRHvoW1DwNj2PuWK8T5otTDQwb82",
  "key42": "5T4XmASMXzF5LrP3qSrFt5yrmUjz3zTpsPksfbhqvx7uXELHVeyDDyizQBEucG1h2CPSAg7ME2A1dGXsUZTarPcd",
  "key43": "38k1PkcoTyUpujoRaHNU31PPhbwohurjU73f28HHwxTcZfVr3KXfuUgQ2u9XNg2u6yY5gFjDDMye69YJSt29EGK8",
  "key44": "4ne7iviBokepCCfwPSkfngyhusfDeb9MGuXYAvhgSWFpTaVgNQgDocfaMQzinzVNDi2fpR4mEPFe8dW2Vk2FGsw8",
  "key45": "5QzyqJK2YLcYkLBFyEkUgQtu5kGbhViguuMyfULbt2jrnfV8wL5xsMJDSwdSqpzJaTqSV4wPXphbtQTdgPhYatHT",
  "key46": "4EFNwRkvroS9CQzXLVwpBcUaFgTVq33d8MKXqW9YoUMf5gPLhg7wyijY4fG37GvBG3rBBZVL7kJe4okpLuQibBC6",
  "key47": "66bKWXiwR77qhVSzb6Ft9heLUrZRngDtGZEv4ssuDHzRmtGgLVa8SB3MzWR5D6v7WBEV7svFvHxX2dCQCQKZ4zxS",
  "key48": "4Maq1DVDM3Ag87hB4Z4XBhy5qfRKwhWDXLcG8KYx8agkJ2cZ8ckFrmaJ71YVv6Sn1Am7DKxTnpVKZazqgSKGGCqC",
  "key49": "3X2xpzzQKrVg9ThjZhvLHKPUKGa16dmxoqbAnyLjwQBf3AU2N3kHq5XAvmsdCibRw3XQ8UkRZ4PdgCuS4t4Qbvf7"
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
