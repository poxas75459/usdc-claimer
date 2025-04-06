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
    "63jCMQkK8NVBZVp5tofzmp2SYWy2DxpythqiGC4MQzGnWQ8JbgvuG3Um2GqVdbH23Dw5G7KVv9i6dNnHbwQX93BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDcMRD5UQW2GfwZW69Bdf7vBeoBdeW1Hkqs2Tok7DKEvXAnqnBKiVKoxhj1tivSMGpd4Qh1GsL1maKx6kHY4HWE",
  "key1": "S6tiNGAP2HK8cZLo15H6sJybn69H6f12wXTdfovUi2XsLBUt9rBC5ecMwspSDsR8SH4nHwYMsTsBweszyVBgUvC",
  "key2": "5fgAiNbTpcUXZrEsay8kHKSgeBhXmHMrCEeAzGSMsu2trJ874sUbtLSwNJ3N4pPCwQ6nMSqkx12LhXFkdjYNPtdD",
  "key3": "gsDYPutNoNGzUSTJbYUhwQcmQKWDQ4BzZFNL4wtvfW3zmqgWkPoNCn3FqkEM14xWiGfsy1cR1JPLPLK84FB5xCc",
  "key4": "5Z4iC4iLeMrPAbjgoRn1wGSuAxjApqX64YJnXWVMms8JJiutJZqFvSX14Rey3Uv5brTv3ZzZBBwbBBjaL4GJRk3f",
  "key5": "4yTtgexM33i5ooZu42mdaDTyzpTPNMmcDAM8skK2dG6gpuiahk5rHCCHSLJJjGF6fdAmPHohjuuspNVUusfCVtpV",
  "key6": "2e8pobWpjYBPpmzKnjerkfshoF915apKX2qC6wWJunEZHXUR1FKD97eQgyPGodqnKPDirbS9w1oMSPPbZU7CQUWH",
  "key7": "2MaQ4e7LTwg4d2LmeUSQD7cXM7G3F7pGN6eNxMutwvVozZfDq8BpH7Hg6Lg6Njt9geep6jVeBDZ9TBZWno9tjj82",
  "key8": "5Pnr7Ng23Gy5ANwGLcd5qDUWgobjkfTypzLfhkAUK3Csjg41oN4YDRHKzxF7NECUHbVHtphDzaDqdLcuAc2xEWoE",
  "key9": "2nYLYhMBk5pcHbCDq4kiPR2tWg9vzzfTCmgsgZWwxiNqd5D9rywmLZkKDzixgqjU6UfjGe5gx2gGLE9z874Bs13r",
  "key10": "4yRLqZkwZE9e5c6eas3Xbbwji3hXQzjhqCDA1SPw7QSgNV2rNHqKEYKh7Bp9U7ACLvqaUwLk41XBs5eCCSz51kj1",
  "key11": "2Bkxbw2sKEs8W3kysgGHNqjHQhWALi11AN3dxMyymGF1LPeDZcagmFgxmg5ewJ25HFC8DUDQPPryBAm9vXVR9u9D",
  "key12": "3W1M66oYjzgmmudYDogoNRqpSPHxtr34tfhRVQhDSNMmvvT1xJB5VAyD1HbnnLHzmksxYdG5EjK6ZYFegU4xheLx",
  "key13": "5y1zom44YUtaFr49A1DSVtxYEv6FR5ZiSGKnxE16uxPPx9FRZC1GVmCsqr8g82rpBRN4VixMHsC7zNaUSPiPtzNM",
  "key14": "5rhMAADkq5wniyY6iKrqsgongjZgPnu4Xoc4KQLWG7VwR317VtFnESGsdZKKM9nXnHXy4EHhSoNV3z29ehmErMNQ",
  "key15": "5WRNNpYptedhaqNr13eAsxxDUXYqVwyeKrAxDFaRFT3Ay6RS3faLCdwT22CGMfN5JtzYkf6QN2BMpg5HDGW4U2Q3",
  "key16": "2zZQRu64apins88TZTDBRCmaXBKSQnoVEYneikftqdsdNFNqWapjakFRHfk3gUqnicw5Xye82HzQzCVYryZkpYgd",
  "key17": "2zfov3Tr2B2F9kYRfXhQor2Z47iJ8EV5hFmMm3dVmJ1zMZKMnqg66bKuxzhSJ8dmAqPpN1eigfv4dwGNj4yUHgxp",
  "key18": "uorsvdMncto965ynwGfHgxAqiPJ6eJTPa1ZmSsYqXKs6mRv1Yith31bnqRHZqRaq6zMSFGyzC6tBVvFisGkZGyS",
  "key19": "3tRfcFpZNgCW1BYTAJ9AacrceafYWJxegUDQfn3E7PkXeis8mshWUsV2dcdYTKW5VGUutZxotsKfb8WsWifoXhyM",
  "key20": "zZaAPgXMCwFn6yko3tycEHssHMKBRPwDjRyD4jzVzJuNSVLUvps3GC9ouRU3ADfUdeTazGxisvZRzzNjAoNM7jb",
  "key21": "2A1My4bNv56tcL1Hs1qhogoz9an1oDNo376zsFfmZSV1XQmHi6SoqeiVBWYNCKBcpfmyir5bg2ofz9S4rHT2BoAR",
  "key22": "2rCRWGMQKNVNseNFqvMp3qvCsDdMfAekidtm36BoMpkVi5RHpEzj6JfxZanP2ZUFmeNVoraKztqZCF3Gpio1MST6",
  "key23": "3MKq4c4iLKAncZmXj8QRY6kbE4bp2aj5KomUKkStZ7Q6VBVTNyYjkJ8E9j3os1Jdw28HqBrdgSYNGNtR4LesmAHZ",
  "key24": "2FVcwYXsuJrrzGeL5N77RWRstrAumyXqmLAD8VEiYHoCtFjrjHUz9Jkp5BYFm6tJf7kZwejARmkeT3qTQYBmhpKc",
  "key25": "Kwiz2o8xcw5yHbt1fPTDRpo9qYfUTgYoztPFQkBfyqwZQenS5ny6HzLv7rWWXCFYFFqF4GsbRzzCdjF9gGPJJ7P",
  "key26": "5S5DNNTRBwJv6ejAhJNVU5KivupFDJr8Eevqq39d1vfdkBgCuckbcoCaU9ZY2NnD3UG16ZXjaPJyZc6iY6VvyLgD",
  "key27": "4LQZvA8E1zkLNzoRcrZfAXGajXiNGbEuxrZF7u8u5eMSVQCv3NiY6zzo82jkrzr4xsSSbBGhDPBWGM4B3rDNZEzY",
  "key28": "3qY4BczTb3Gq7nDPPXNFhf4B4Z28Y4FpQQnmaSdFmBtqq9ZSFimAZBGXVJNSapNPZHhAKD4q4RbWVuxW4AaHfqHe",
  "key29": "4KhJK1F2H4aHDL4d4BepwYQ2FMhESjXbGJzRqrnnbxu8JF8nEet7gtB2ntNsi4vX7PPrDZYYKteRLEnZBkR83DoJ",
  "key30": "57ea5nbKXrktmobVx14zZ5x1egVhTTt8UvkA4DiudkV9wAj9QAzzzZw8oKrtscvNoKyCxoPdSR12gTr8XjxXDip8",
  "key31": "2eusxpPuphvkDKgyYzQZaDTA3qhLpGhZ8pkQtAqnjWFwLVUjv3cPSMHwZU1fkFH6tdp6qVNMGAkt8U3tigadxxcP",
  "key32": "3BLCZJQcG27Cu7cWsvUN226RzXRaDeFDDATUe3HMpwSGbkqCeejAb43oN62mr2Jy7CxgjT31Y6NJFvbpKjpcu9Vp",
  "key33": "2XHk4QyZ2C1WHR1gGp5WA629Z99MYeYX7gNqLYf77VrioepKEXBLxpQrYrxxuASJVmL6p5XKqZzituMzKwdFxAzs",
  "key34": "2e9n6CJLYw78sh8xLhw3a3DBm36WSyMDRNG9WPChVCzQTBWUD3bgkfkVnb9hVELByESaL8UF89rvzSW4VzmCfWnN",
  "key35": "5hhB9kCyRKZXoaydzP6jnrHvxpf9LZAoKwTahZVC7qXs3MGpLUYkNNfacqwMVz2FmJy24gDyzE76AacrHCVeS5yY",
  "key36": "4NfxU4e4semkdgS11o23k27YpmJWt7o48Y1ZkjeNMMxUt7vGrbGqd4hmjMW4xMrx9XTYxKnUHEM2UtioGbof5LRf",
  "key37": "5ZomJ31Wh1n3Gs2vjviWphLyz98FzD2UW2zhiTRVCybgsSyWV9oUaPA1uyQFBJbuqgiqrufQZnr2FTS22sayKbZv",
  "key38": "5FP4WHNg28XjZSSUMvYZqyZXoo5BXcC9THzj3rYJHe1wes4DZMFZF8hj9s7Xb4n8V1qRC9bakWF4UGpuFaX2suUa"
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
