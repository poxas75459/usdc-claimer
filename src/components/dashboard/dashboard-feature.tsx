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
    "2QyDTW1Kkva1ijxFTgHxV5RJpCLx7KonHx993yMurT4mXWWEoBZEbwcw9nzFzdYCetVBbY7CSd8zRJp7PuHnsSXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nazZZDo98Sw3end4iJ3EWsHT5eTPTs5HnTrSvLYxWM9PrCeqj7i6rbHRYah81oDZSWq3szerA3Rnm8imu6d8ST",
  "key1": "4JTacygQPfBkR3PpcL5jEBd1Nd6qm9yyLKvgm7HtzuQE3u9kmFtgjBrm1Pkm6UZVWELpqkA5GZ92fgfWG2sFC7i9",
  "key2": "5sT7hU835uggvnQaabD73D2gqYoVJdooVUcusDFZ6crKEmuP81okEEbxgBoXbEsUGTv19HiQubQqPVNVEPtTgFrL",
  "key3": "WqPwDDiohpnfw3PmSxD3TXr7V7Xpk9NZC4i5R8zp3TtRkXvBgnwfDZc5hUcvGrfF4j3HHvdouFB1TMdafFfiy2v",
  "key4": "2K7jv5FP19K6gFd1TixUP7HxM6unZxGb6xSVZoBd9XUaiVzodcM5go1d82GE25rA3A7QaJSFueij6YyfBU7MVxoE",
  "key5": "5hdyjCq2H2eTXTrd1Sc9XnmkUwKfckZRh9pKk3FpGvSd1peT26iUg8CiA6oTokZ7hzwshDKUH1xVMzoXePKyYi1e",
  "key6": "4vnRH54JMP7ExwpNtcLJWopL9GjeY7qbhk2gW6ax2Er4jPrASBTRvJzvnVaEBMJqFDDB5yFCCDduABMweNvkA2N1",
  "key7": "5DZdm833zTTzeoHJLK4DuJGeXQrwCoWrvRcinnkho5K5RF9ngtYteKpZc4AYsjbW8Ty9LEmQn6qiBNe4wXeRcha5",
  "key8": "3UyLFnYKZk3zHpE6qHyh6kHMyLbM3xJ47N6o1M92AGte5zHmsdXcoSVeKPyy8PYCv53cFT4xQdxKvwoU5cbyKZ4z",
  "key9": "4kDvjv2F8Hx2FJWmfemryBjavTxsKusYt9hQ43ztJxHVL4qbHJgTz5tG1KB9U3dui889Yz3BPCLizKTTYC4iwBNn",
  "key10": "5a5uZfuLQ1xc5yxEKFqUtkAvDsN4Uprh4wSun7G8qgUgMZF3sm6otSrmXV8ThTfbKbH3PDzdx7Zz4JV5mAr3qsQC",
  "key11": "Y8XKZYkL5Ffi5gF2x5kYoLFk773rTAQ9g5WMS6z86ExYky3iMxWMi3hJyvJFYHtFG2vz7yCLo5CKsgA7tvucBXS",
  "key12": "2SASstCpLCMmo5Gf6NcqtxzBH4E9tFdaA9KC6ESKivdTBPhJyjNMNkGHKTkFGirLfeLFzKSAQnxUTAYihij2Q84w",
  "key13": "seV3jC75matHScg6QQynfynKwh7wQcJfCCob6tGS89Gc71rsyeF9scZW3ZMSiXj3TiLFNqUto9rxrbXbMbbJovY",
  "key14": "5wYREpKgeDvLKLxQanVav2SDEQvttXvqchCZ6W7hFJxnrSFtYLeGQLjw8NYP2PVHtLZqk51imFMxaj76kK6TpZwm",
  "key15": "osvAysCzfkjvD1rYnXVzVg1BkXTJCwgWqcjPVc3xtZSUY3tbCkLH9NT5Aunn2uwVoWmyVAKrX41W8hgk1rgxh12",
  "key16": "5k41sE7LskNdTbkED1QBsJTwuKJXXSCMqdhNVPYvHLdUUdyDNqZh8zEPNVbFinat42dekbh5AbfMVfaTrjRS2dit",
  "key17": "4Acni7fLxpNUVnPPE5TTppK9KaFciZuhg7SrP2Sjohh1Udgmb1ufHRfWJpi6SL6HUKUmeSy8GaqyJpqRDR9ULPM9",
  "key18": "31jasNgcDj64FRDYZfbDstnRwcngV4AmBg77fSgEV4QmFooHtop5oqoEKqGq8c1kMASUcU3EP2NfJzsf4jSAYePt",
  "key19": "MC68YbebXHsG9LALbfbSUctDwj7eNRJgUUtt77MtUeNVGENno72YP7qsr7xUNZeBGRVRwd4V11d3rhW5tVtjznc",
  "key20": "2StvKChdT6PNdyWYfRBAA4JA6N8Yqb6LHJDci8L7Mh3Tioiky8nEZExRMaJmfC64TLT3DrKSarA1a3ffeKFA8HW2",
  "key21": "3BDbwDMLJeDCSMSLcvu42cttqKmXc3CVX8GCYUEjW8PFCwtCiwTGmcNRxrx1rqBHbaGxCj7jCMBtEWaon7njkhFq",
  "key22": "2oxULmhN8CbP3Wc3FH2rrMV9kvP9TeqsWCDUdZTkvneKrLd6hD36CbfnKjKugKAptYkUgD7pbWauqcKV47LmsYWR",
  "key23": "24sXPSEfemRWCaqgvrDYhZ96dyyU4W4YRXrM7Rzrx25Qqc9Z8d5dGwbVvURQhWLCnbZEi7ibDnxeJYAgqxazPV4F",
  "key24": "349q2rBNtB8iEVoNoLQt5J3udpVHAJUALGkyAn5DbmqVMARtBWarEzQzaN84s53F9uVx4UF6t1CHJDGY4rcBAqKJ",
  "key25": "F8D91Nj3HpUvvViWxQdRguMVYdLWnv8Jay7ZmBNH5CqRtezZYubuDdoHto3xuXrBEU4S1hc3zMH5KZ4Mmm49UL8",
  "key26": "AJonjXBqeG2JHfh6Q2cNMepMLyGVoq4cTZZPbzTxPGZgh3Hj218SQkxxsd46bhKqVcW4eSmsr6c1xDFUYfGWu2z",
  "key27": "3mkh8P2HaQ7Xkjtfi7PKm6ZJjtuhDYYxHNPogW94Ba5CW6Cqr4P5PSCfuJqYkA9NiXwafcg5cnzH6Cy794GgPeS3",
  "key28": "41W7umELZj8D9CCoSWdbNYND26hFuszWz5h5axZMCRvMdaWnk7j84jgYNNY9ZJWS7KEp99ojCoswBeZmjHX17xUQ",
  "key29": "4RuFLRnbo2FHo9cdbGCi7tiWJofLdkkg9DLit5VVrLiTVnjETUvtS4BtrbaDHhZ4FjVzsmbozsdoehVYM3hJmw5C",
  "key30": "4HCB3riaBbVDwTLQtHJMQxHWSCNpMsmRWg3MAzy4jxcd1pgbUeSaYfUsqgRr2j43dreEwJivHX4N6XoY5Ueskfnu",
  "key31": "K2GeQvQQidEttNCtiiENdWHmiVFfgx7fah3BwEQvqw6qEJX1hjq9k1sJFuuwoHDNWaC6cUngyHM84Dod51U5kru",
  "key32": "5YS1ufC22Kt6xGRJ62cwJCHMG7DxX1bKvMFqLKhZ1YHHXzmQET1LrgsRPjR8zQwMq5bRVF2FHwgiB5xTco8G4ue3",
  "key33": "2Hmbvk4dnRdW196d8CySU84B33sp6vY4bC1dXJawek76tr7KrqunTn1VWe4zrCq7DgjR4Lkv15RVk21oXu3aPfyz",
  "key34": "47iPXBFMPanEcTTJdwcQLDgXsQ1VSwSm1Lbau5Lch1PUgHE5eo8hw52RmeikU5StZaEe8qKaZ88UAGjA491kJcS9",
  "key35": "9UM4JLYyWG1JKS8DBGbFExDxBsZ5Rch5HRx66rfh55T96RuJqzKFAP1RUcNkJfQvHjQ16ZLfWUTcSdCGY8cmJwT",
  "key36": "5XKw25R2M5dvZXi3zvYntnGPjqUhsJDA2pijC4coroP7rACHutjahMnQGvu1B9DNReNbzPYoeSHCvB1W9dBVVt11",
  "key37": "3Am77wbiSQyvhEywWCTn6eJbjs7B8oUMsMwwUo5wyq4tYaB9n9qTJSuwKmtQfxUWMEy9GrXw1pFigD9fYKwjTuCA",
  "key38": "3KM4kYuNppTgB52FagX1DLsBk6bjNUHRifQiDyJEAfoRJtPAFxeh4CmhbXbB31i29HzBvnHidomxogxTVC2Wvaj8"
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
