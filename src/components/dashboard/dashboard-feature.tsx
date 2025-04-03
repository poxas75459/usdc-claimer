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
    "3JN5uKzg7RXkp6RzDmMdP39V6rDaRdrW3URQ8duTpk5yGKW1ZXc68Fe1ub6sUmGcEKqVQ2Gd9pbh92zGFo9mp5xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdxKJXdD3i4zPXQuaYahX8WK4sZ89vTweBQ1bMVMLE6pjve2TBYhACeQbFP2DyZJBVNQnZP2kmBizxW6MRMiyT6",
  "key1": "5tgfKLW2Z6Jtqh84hdWsAmjhELMjvbyaKnoCcAH4BkJB5V37AH6bCQrs4FoCaE8PJV34B19AwMifRhKKvQ7SrhxX",
  "key2": "3ENYGKktnmuZu7UHjg9rZmU1dTEVi59TA8S76f96YfYizfeds5LGv349cNBtWTBe7tErVvJcEaGws4qgiLd5y6re",
  "key3": "261DRqEiT13jhXmW6rydHrtMuRQZnKZCJpQ3rXNZ4xoM31w6Vv22zFAJg9J3t2uTx2yobANG9HtPR9dhtRqxPast",
  "key4": "BMVMRVQku3i3638oMiBnS7eDwCAWD3vM8Uhosbuwk21Mx36dZbnoku4WJ6joSD3XpCoa2Df7XmnNVRLnEkKVvjh",
  "key5": "2ksLesbsZsp2U4xtT4Jj299TgSzurFRiuJZ6pFjnThK2rwmLbqcCdETrEFE9fbLSWTs4LQr4oDHXeySWmSzb8gSx",
  "key6": "5tjzgS9YqHEdDkgDQqKZmFL5kFi7si9hepnVGPnP2k6n4SGAjWTm1Fm4GsnfEhwDhs5kghidRcJ8Ae6AfcwpE4DC",
  "key7": "2eLN4tjnUHrb5mawBi1cE3h5SWpdWboxgkYn9k13VwMSwvtguizDNzoKaJkRttoAooiXqLW6Kat4DzNSRf7yWiJH",
  "key8": "4ZHPvL47hgGyZUao6DyCfromtiFaWgz2P4iw6bGuVncSHdJYm3HJUy2Jummy6Mo5WzMFu2TFwPTgVP57kXnQC6ch",
  "key9": "4rJryCRVyTz81CVBehNLBH2WS9kreFiTr65oB3nqe2Hdi5Yj7VssFY43Y62QsYHFyTPov4LRB2tdCtpD6qjfbdbY",
  "key10": "5YEB3EVR3yuZavXdrEbAwEXGZZVptyNzNKG95W5MHzt6Ww7Cs7ZvUhWEyU8WZwSyQCzk5k8heqz7mLN6hzt2ZHhN",
  "key11": "2ThMiEEK3irvyXntrFTD3j6tHZot525hPsqB8XznsGCg6KDJQvJ6FCSszX7gTwH3RqNA5ALKBnQ3SVgkP6oyzh7x",
  "key12": "w5q51YwFVKczPhRqY6LeMwSaXeGnYkfB3vVKrxTAK23wB5oES7thfAGjWAvrTpeGEf99avTfb7oyCFkQz8oLsrJ",
  "key13": "4PKKcrxunVx2NdPu9gEDu3W7G6hMQ7B1QZMCFaMgdFjvTuUuTQB918dpPkuApotUvbi4ya3LnwBfmmqEtrjCVfvC",
  "key14": "58Z9XBMaZg3smWmtGHv7vFCTmQMHBhAPnJnL9J9wH4D5hSLvASMH3gSF4hm1muR5nktmpDsd4QqVYNg7Mnxo2U8k",
  "key15": "3FRvcLeKCHZhGcNb55PvAKbDbP54k9A2DxiQSrXC2U7Lm6VTpZMS29rdjKiVi3JK3u6ruG22iUv6DCvsUQ6fzV1Q",
  "key16": "GGeuewn5bx5qPsqg6HKMrYnZRq3XMaszEuqqgipaUpGmbkmGTYAtdurfrU8aGNdGsupwugyN1JQsAGXaUsbL55P",
  "key17": "2fWA2Jm2QcHZZMcfBwSAu39pP8q4q3xLTbRXVKfHAsZw6fSuxoPC45KTmjkWjPS5epw7JJsZaXW2kEhCzvXcSd1L",
  "key18": "mbfJ8Gfde8T3qnM7B9tRz36i79DjiKzhLR4ad5JXuCJme5rmnw3xa7ChGnGxeAX2NBjsUMpSaERjmovxQLktwAs",
  "key19": "5LmrRFaXj3cvsKUmAMeubRJCsHdqtvCEwwqHzESbmKLDPNcm4ZxxSsqem5Yhwhg4rZw4BxEzio6mzxPAhJHTo1oJ",
  "key20": "5y2WbV1n9aDYaUk5CxQMJn3KiPrE2kq9MdcwWy84tqzymq8q4niR51uCTk42rycBSBW1FoWMBxy7VXoKwp3fYRUx",
  "key21": "5JF4cLXSVs7JA5c6if8441R9e8HmAge8qBSfTCqLCtcLpTt5PysY27aQfmTKJWxThXuUTKieCaK6TAFa12C9vueS",
  "key22": "2frnLgHma6nGq4jTg4YCmMBgSP6KuBm7HgWrFx9Xig6WqVNxefM7MAnT7tQm5TGvzfk4CXWW7hE3MswYxjoXdaSg",
  "key23": "ZbGxXi2Gf2EaFjw1yGyqbwwBuU74VF8tfJ8CNSS7FefRwCRysq9S1mMWu4dLLtUDZZUBHZe9ND7HnViXy3unXwN",
  "key24": "66puF44bHghNBKiNRwGwuvRmqdpZRJKhM2SyKMQPhKArKBFRaBjeuWBiEpVt16zCdVG42RUcmhGB84tYbXN5Fx5x",
  "key25": "etiG8fGmMUkNuRV81nxakepC49xgN4e5bnFmMoP7RYg5hHF48WB5dvQKDZzy6mfW5nnC8xZqSc7YizJmTkKmxQa",
  "key26": "2pxDkGWL47fysyC8JEFsQHW3cKaigKrcHjF4Qp3WyTn4PAc5z5Q3xehgfgHhugS3HDFFV98eke725B7PwH8AQHy7",
  "key27": "328R6H96WnzyyZDJq9yz2ute1DJprEFxShKnFBHz36Un4sLNRioX12fR2QHB8Wo5qCEY6jWomhuEaAiR26UEgpBR",
  "key28": "3bH8exXdbdLXogCwGcrK7HMWGdubRfVWZhgrqoNKq69XxJVsz4Eyoc7XDsAUqM2ZQ8iiGfdB69UX7NEQCDRACVQj",
  "key29": "dGwhqB5Yw8ZnYUx8RuT72pk3dP45UZMb1edX4fPmu3FRWhKj7TodfAXMBWy4WoafSNrq5WMsANcbnFD3b7zfJJT",
  "key30": "BE7roHZiDeRveQRh6iVJAQWruQPs4EdLGsfNm3sLd7zrHbybnc71mNp9MM49xCDWkkzV9D1dMq3znDzryEXwkzn",
  "key31": "3bY4BfxDvFpYftuG9CfxvAQEy3cfpcBDBAWXUuCEL4CbuZ87E74Y72ninNvYKK1cke8oto5Sst2Yor6VxUcsyNus",
  "key32": "3dmnJNfif6tQJJTVoftgGDpeuwBCiMQEurN5qj3Y8VjoN7csFp7c5Sq6c75djGe2H4hcwGmZH8KxK2Ym781d1cfn",
  "key33": "3vSVN7D3kh7kr5JmdAHNEjgvngqV7KtUfQX8BtpRk8Uo1bGg4wooye9BtTWjVfyoWmSkXLqsrQKvU4aK8gGghrXq",
  "key34": "5BRbx544itmD3dmvxnmSMd6CPpurR5vTNCKv18EJMLkvuDZSkt2Gp7rE9tVQfxaodkBQ6G6ayHRADU99DUEvodHC",
  "key35": "5f74pu9K5Kkp7bLP8B7TsbjqZwB26Qmubsg4auQFAW6ruKQ3kSDxAShpSGcfMWHoPoWcbW57mvsd11nN4wuWK7YJ",
  "key36": "2BQSJzynEs1FBmTWM3z4tVGvmSumvhNmvXrpLzBYtrKPEPLzqNXsppzzyp8BYjMNJXc17PXaehhBNiY4FoSaJ2E1",
  "key37": "4UMxPBVRqDGQQZtnfAqWS4KruBrEqhHu8abyAufzTsbJp6Xz9HdutG7br65271Dzv2zxmK2hRTetiv4MzxspsxnA",
  "key38": "2pLkfW445wG6XzvtSQX1sQLAEqjoxCt7xDVjX7JLeqGCvMZbDHjqqzBb5XzkXQQr6wWnmtMYgLSWfAvecAXU7CEx",
  "key39": "4AkmBH1S7u4fRThL2gWEg1DxSBAdkfzkunTppFDUcmoonkNySNprSkeYejKXR1XxhHLENepYWkffNp8prkbPGMGg",
  "key40": "3tp2QmvLs7Ci8GbdUmoUGyc6J4T9ruNk9T8M3mtvNTRVYoK8qQcVBzvdqqvvQ2Yfeo2dXMEaWQq7c9san4JQwaFg",
  "key41": "kLBGt2VNmPsrJt3TbjDm8Z64qAggHyGNJNSzmsT9Kxrwh6SK5Mtz3AtmxxLFSpnKeSKm5toz1cUvBHaPbdC8fjn"
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
