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
    "1z7jzaTnosWv87osDeVwK3ki3Wsz29ZzzPjJV4JD7ZoxHsemPZzemdcEkoLghWdbGGBe9zCBSvcNjuN5EsgEte9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7chpviChT63w3z2njV9cWPndEeWtc9dGRfwDfiTmbkfEQXXL7FwNSpzTdHbuzFDnCwMQWPJqn3Y2EZJhKDHK54",
  "key1": "2K6jViyAUHLUJvXMwz28HeM7dBgopHaBmdr7eUv64aLfCbJPLhSbwnqg2RdRkXghhWur7T3jd2QpWG52eeFgmVVd",
  "key2": "nhKdNYyC3Fs1QeXpPtyWmjsLe7H1Lo876XuSf74kP43GFHntCHnQPjYCjsWb4mDmn8xfXgbEunTZxREXT99nDAr",
  "key3": "2W193mQrJRwtsbssHtUmBf9Tv94s5irFjLs5t6iGxzSGoJncbFjfCwynJxrNwkyhrkpJiSvpg51eLpWqrpYcVwFe",
  "key4": "3J2Ud2JFPuYNDEyaAx642JG6wMm9qT4XThsuPxJUbEaYTyh4HfczNZQuAfNj1cAXaqQhbt6nnKnxvJdjU1qtoc72",
  "key5": "35EoHCKyLsuQJAzdowGAb2VXK1mHV8KAxyWdXwwoQ3MuQDHYfbLnqvDURBJHv1FXD9a6fUWtGS2HGYfi9rHiGg52",
  "key6": "25gPrVg7aJPxJt5wTuRAQg8DBDgKzUKftDEPeAvv4wnEYJ74ABwuxhCLFum6E2YgbbKHaqE7KvXpMwDZDNTw8Yju",
  "key7": "4UqaKLV6iKG7X1UHxZmmSSLjXK3Eiv7FJPHrpaP4qj2ym1NaqD72P8mL8rxnQzugHbq2tZ32inZW8uc99hj1WPux",
  "key8": "34PW2nyQZcgNpwqKvH428NrSQCyfLLcaYtXCc6KGnLCTGJztKK4uzy4xuTozfJmMuEzhEbSF1q9U4j2oTwCa8zYS",
  "key9": "4S9ofT3GPt8i1nnMJBUPvf3gQuPmYDw5WbwUjP9uqK1tzKCYVQtDsp2ZaVeNwKLX9Kgo29MYvJEjHUQAWQ64nQQA",
  "key10": "4fziRJFpfP32sU2NgMWgdXeRFzT7iTd36S1TeT5Poc5CZjcf2ge9bd3ZNQ4JFcysU6Ax3TKzXWCGKNNHzvsFdVgc",
  "key11": "75NuMaPhLiwseSAmzzWB3pJUBvGf1bb7rXFxeGnGvDmTgr6h4GZaDpcSnwc2PjS1qHoQmUyS6sr6n69kX8rXBDu",
  "key12": "2bBWYoiiWjbMeaAjrLuVRUGj1BoU3ezYorZeqM7BSPjQP5jK9n1JESobcJpRTQCwvmrB4jKjMK34ioUmBZFHgswE",
  "key13": "hQLqpH4vxmpwGtnFLxH7BKdCrUgoUaa98k3FsJF5eQ8ydu7J6FNrdxzosGsWosJBoznUKcnFsbJhme5X8oABwEQ",
  "key14": "5JiBjmuLp7jDAaNXZhC83VN8heqKzFnsY1y1AcgXVFrkR3JA3X2bvJunrJ6qFNqQq8ee3jstx47WA3ycqHQz3Fqv",
  "key15": "FdYgjCw9NKXTuJ3sgpvev3Wn7ujuFXVyGPgLyg3bNYeBgZcKBBXcDJ9kLKBx1ECSniy9QgQTtFnE8iNbgVhVU9h",
  "key16": "3uQaMJFM23TFzXQYh4kqimvD6yzK7pzagjjs19uG81i9ityAGREQHV2hSHfUUfhxTsRY52JsH5MCHxXCUUPDmA3X",
  "key17": "3wFcmu7emov4y7TBL1gzZDxTSD2PYsYSdA1RjecwYXe6rRzBxDQVS2Et3t51f8C8GyBzuDSAbwLtmnxRBXEPnqdE",
  "key18": "4pPhy5NBzQMyLZTy9ih69rMuPDknNTWhr2QVLUDHXdVoaLKsYJ7swcXQmybuN9N8t2i7pBciDDWFrD4JXnRhokU1",
  "key19": "3HBGbZMSzbRGTNZuRTWcQRsXZ82sG7HmuXjPujdagSRfvBcggu4mauhy4iRSfv89BqQ9diRtYY8s2yK42STC2z8g",
  "key20": "4AYf49pNXqUjgZTnu3xX1g4MZy5n1UKXiRf6uJyk5oKabLWAdVajNG9gS3UVmfEyfKP9MY3EGV1V7ie6M9nJayZU",
  "key21": "21HUzE1WBn7YZQPUXfgTCpACJRxRPBe823JcLja6LSNM2Fs2SNsHm1bc4JthxWxV1C1akuPqQBwjrwG4VVKsPmch",
  "key22": "2CWhto6TY3aEfe6Am6NFsxAKXyEMyTESMBW7e3a4LC4gCwukQijU9HfkWUKh3x9UBUZpZdRRXJbEVRkJvBGSHt7n",
  "key23": "CKUrrdrAxxpbmE96i4Nyqwm2cB46pKmrFf6FjD5krtgJCzZjCDc7nX4bcZfznG8SXM2AHJbJitwKqmkTvvnV6ew",
  "key24": "576nkHrFQ3Sew7ZDXibnUr4e7DBf4c7BnfAn1WFNdzjYewMAv6sKFrTWneAFUHnC1xxsDYih6P6PnAvP3kMsY6pd",
  "key25": "3fh2U4PjUydEnbWJbWADyzFyZxxGYzZv4cEsJ4FqxJ1Bxp46BiRkiETbu7z1ncR1f7XFtsCpNLQauFu9c8fBa1qo",
  "key26": "3g8cRbFwj6MHysypuwe5EZXTimcseuWguhAgcPEdfL169L9XnSa29mzgNMDBmz8vUrcunpnSaPHpYZX4srJk7xfC",
  "key27": "2WTx9MibRJ2CtvnFo8x5N4JZDpUonXPYmRAcAaxpp9KiZsnn4zhAmFh7rYqx9wYx7LC2MK3D8ny5nGZBAh1UwLhv",
  "key28": "2D5zdvZcyYyUedFUbUXRBrjebrYHWHW22Tv9wh99hjRudcS91sJxmkhJJkhmkYzfAGwss3U4bPBnrVtbhpfkkBmh",
  "key29": "2T1rmrxt19hzh3qa5o8B7xBwkqPRUbNqNj9sp8gKWSzvnh7kJRij6BA7pL2LHWrkSgAjPijDyx82zsNeLuDn1N64",
  "key30": "37chzWTxSartqo12WYL3m8y6cyfiU5E6cd2JMHtWrbyQzXQx6vboXWSZ7AZHPrt9SVQHjyFEptnzh5cZ4TecGNv2",
  "key31": "5z5FjijJBBDaCzTB4G6s4GmRA9Pb4BbSWLep3mRXE6MniAwqyfrca1k9C9gWwSZAv9Z2hC3xffSwfjzA4cVmErME",
  "key32": "46EThWwmD4XCCSaX3r4GRmMHEduoVkebQ1KeXbfshbu1ZAWtpsNJjxTxatTxdVCaSrov2aWUgL7VcBHUgUKsVpoJ",
  "key33": "5esJvLLuyq2SPVnEHHDvtse3iB57xgq2YUQypkvgYgLoW32R6oemurWCzibSk1h5kqWxQfQuVRuSih4BSHr8vxZq",
  "key34": "47KEAzFNwS8zroRbGhcUWCnpskFMTn1zx8LctDxqQvv4GAjHkruGtCxPaht7CsjaJ7ihz1Wt5JMUHEgJkTZHfQ5t",
  "key35": "2WuHU3xoZtKLdziMrP8zsMc3QeABVQoxWJPyfSb5a2jS983tgVaDP2suhLZHyogEZF2cACRhB8hiVaM7WMAUycZx",
  "key36": "4eDYeoPF9joUg84R9XMb1x5oVbzFZ3SovrYsjhCSkWYvPHy6aV5d3d3zcorg2d5UApzeR4G7UKVKWTrVt3UcpXqr",
  "key37": "3pSUZmaXYwkMtDNzz1YpK4gsN91hLSrhAH87KxbQEbAbYFJC9crkJAhWsAYWPjte1VT2LubYupK9cYkzNMAcEwtk",
  "key38": "3S4CZsV9Y6nstpnveN2gKdKVbK5dZx965Xqvnca1kDePYheZBUq6hqinB9LZcHFfG6CVd5xQoHpJuzuVwjod8enk",
  "key39": "2r3iw32KCho78wZS6qESX9Vng8sD4U7juJk9RgNHHcE9QpgyZJqiSE8hVWSpmzuwoYLfJ1zNJ7gw1gjVg5mNV3A7",
  "key40": "3Gs89ia1T9hppvY4UVbWxerL55gmP727AD83Ntz5Y8rC7Fa7zix3CkRGmmLUsC8oPSBoixpTnKvfovcpdqb8kG6N",
  "key41": "2xAt8dAWNkp94afhgMcuDuaausnniiTnwLnAxRoHFa9pZG7F4dvVHS1rH5d2ui7pZeoQM3JmcPC3oKABrfqnx5sb",
  "key42": "4SxjWSu3YE8imyKzyaecowELHDUHBX4nLgvoTyj5qCJkzGiL13b4Mzpmw5nxHPsgbTxoz4HKKXSqcGTRcAGwfrPc",
  "key43": "pHxTQzEHahuaBxZKsurjBnnatwadzhHqGZhqRr5MSf2sVH5k1cwwaFPmTZcj1CTsdiw8sojQQHaixHq6sNfYJsC"
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
