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
    "5CK3a8mFnj8msMP3dhB44hHzHL6C1LJGd75QQbVwhHRBAjgFZa8wPR7tvffHdFMSs2NeBQHJYm2arfUe2tn9rDWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKxmVT9ePYnAC6tqC5K8b56pfBbtPAKXfRDZNZ2VhSyFWVuUuqDG3ExEc6WzJyX9EovBFHQvdpiGFpUiiLAropv",
  "key1": "3dvM8mNnsPGaTkFMUuR4auH3PrmvEym44t4YfuYzzDeiEZyjogugiut7jTgQmdNWgEKdMC1W7TPvkfv7iV7MQ2aN",
  "key2": "4yq2qft5Jz2wQPWueDQ62gvWdvUoKcTJeUFP1ebE8h2Dqf5GzewvZ1DCKYgrJem5brvxKR3hComH3NNdmVwqoCQK",
  "key3": "3Qm3jmTg6JsTAq2NqoCyW8YL6dyTEw6eoGR2zKVH48eY4zkKVUSBfjP7vCckw7CgjNk6WDxVrDUriN1J6sxmA79m",
  "key4": "66tQKyA4DPXPmvucBju9ZopqF3NnXmd2QZGre2hY3rxbZnjntYJJvkutS6E9EsBbogvgpa8kFawqTF2Rute15nk3",
  "key5": "PC2MQFsWHm2zCNFN5GgzK7v932qFXvZ4PvpKNJVqWAGvxhSLLcGBPTZtj4J4aSAVCF6L1wLWq6ngpXf7ivBb3Y7",
  "key6": "3tAPgbD55RwAfuwjhs61UFikkQvfphWdi7ZGhnM4Qe1W6bLdurkFvVkwfowLriYSDZP2V3qCrTsa3EL7jCTTbaC6",
  "key7": "42RMEJqMYmpPw7dH2HEeBY5K8q6yUixFfBUg7ZDJnNEqmCJRXbJzjSHztbwckPakicancwFp9uHi2n38F2TmpeeY",
  "key8": "4Jqsv4z9poTh75vGqCvV5RbL3Tqze7PrGnfXtFq5hPd33LUHAQxSMdpKpYycusNKjw7LmpTgGEVr3jfcm3rpriBh",
  "key9": "3WzaTHzbVtYXuQLAymBXysZHdS2JpfcRTuShPvsVezGC2anzbB1taQ6aFYrYQgy2tp8KQ4hw5SYs5DzbzaY5CdaG",
  "key10": "54Bn7VL9DxLLEcyF2FfhLVRHt4hCGBv3iXYgnKHxQv73d6Q1hFxiJRZe5ZsTssHCn1KqbP3eQRzX6mD5GNKaoM23",
  "key11": "5Ez6YSDR2wmEy1ZYFB62XVFAKcoovQthGQcvf7rjmrDofPBdk7CcX7Zyd5MLZkdwfjPLbEQ9bTFXAu89PWNUjGvd",
  "key12": "A9uFDezLiDXQVCRZKquU5tFfcv9v3CuUvvUvXZMd98pXapUfPt8gELhTPJhQj5x5cupXT8SuV9dZdcP48Zc529e",
  "key13": "TtLvhmhsSchWMLrH3CqpLt4dHEoKhiCpsgHWMEYUfzE81AMHmUbcCyPzKhNTPs8wAmCquDUkSF7v6eroSeqSjxf",
  "key14": "3Stf5ZCSiV9psUv2F3RrUNqAouHCV6XKhg5rRowbHm7JG5ayLfxAXMoAKFeG9pxGS9EaJdXYUT5Lzc52JZf1y2ej",
  "key15": "5Df9e6hbW6UKXdPTadsJyDX3nN4TKxC8FtH1qPW6dPTSSbfyXUpaxUWLqGQKeZq8W7WWKuLF3EhyBwYgT9W4tEJH",
  "key16": "24yEDvfbFoJhVuuvjZF6r58YYGbWvqF1XkYBdyPMMzBsu7LB5AFSatubsivhjFSYhKDhP7srN7YxszfbWFxPgQCU",
  "key17": "uT7JJNisGS3ov7Pr9z4oqnNCM8bTkHss2FQpF71LaMNHUZskqEmFyxaW11eH8XaVAQaonuZmACWHSvnTtjhKQRj",
  "key18": "366F9ySF8YuyEaMSMXMGJNE77AzD8UgJKvQwN3dARarYqUqa9nDwENey61Y6YznGRcZ4NCjwHSW9iTjr7S6WtSAK",
  "key19": "54LM5Ym8SdBGsT3QDv1kjv4KqKobFnN9YKw6JmHB6xLbNXXLxp1wegXH1UKz571prhdELNrbMuzvEN274MSBsPEB",
  "key20": "3XsBs7CG4G1YUkCpbpjhf2H4JXEmbomA5EvHAnnD3D9hAVndLEhFgxwBWHG5gLsXphCfmyu2tnu6xCqZXtWSTT5i",
  "key21": "3MruoXJFsU99HyT7kgGQmbLAiFgz2JX1RUV3F2jBaZ5PArdNruadigsmCStvyqJxDkqc3J5nMRuyED89zMYPUyRP",
  "key22": "NwRpdm3GAx3CHHgainT7HTTx5gEbKr9gdNMDb7oA46v77fxiGde9EyyHLNbbABXHAskTK2NfEjsZSCP788ZjpnZ",
  "key23": "54MMXaxFtAi5WxditsfFb5xGqHt7W7J6sqi98LL74hfhFMAqPoBNemPQXfY2GjcwgfNzUT6kyzv2oEYTNmCcy87D",
  "key24": "5Z7rQzXVqnjHPXA9zs5FKB8Lk1WYHAqscChPSx4QjTVuLKLQz5t5ao8rYVj8BtVtjV1kmXPeYPSkDNhYNNX1DyM9",
  "key25": "3CjcdbfsYY8CXK6TKUgLdZP3kLQsbVPYT9QDG3rp1uajJP6FVVdnbCS6kAhkw5edwmeWpF5EwxaPjdToGfJyuQiX",
  "key26": "5vE46cKZjRghThuw6MvjakXD6AWbnCufCXE5APLM4FfJhTLpSixQaUVDrMKnX9rabnkFYaScHMVUsSAEDQSMYtaN",
  "key27": "3Aw1M4yCvt8GrVWAhDUhTQEhpHWiqXQjKrPSJxcsNqpzpfZyhZriJvk57VxS6LTygJDeh4riTLj8dUVTH4a3MBH4",
  "key28": "43rBkbher9ijyTFo8PxBYafosx3eTBxkL3sifaYGwkrJLva6w5LS9hoHm4bWM7W9pRXtXDPSMpFKBi3EPoKrDqZU",
  "key29": "1KVnbHCN7cq55hP5E2D5b82XsWPtjP8AAEpi41pSnrPBcJpZMmvSMGHqKGwbu51VLSqTddk6FRp2Es2Lia39X7X",
  "key30": "2heebMa1xwfSp3vfehC6gP2jekWTLtnkrLZT3zHdJHZry7U2r1iWWPHL7o8PCDFXid2BabwC1bikxUAe1RjjPTG1",
  "key31": "2LFbVP2yWuRp1K4F5peXCDZboqbqgn7eEuMZFY4dzadSpJjByjprm4axdArKKsUpijiYQ8yoy6ia8xToWQv3hcEu",
  "key32": "4eP28C5zF6Dex5VkdKAHrbQGXMiwKjZgLSMd9yam9A29Ak2h3G4EPoDWs3dQDmx8QuCL1ELNQMQjytWigCShwL8K",
  "key33": "4FsohPJKdr3AzMkRg18S9rcbZ17KiUr53HF9DwztMJ6qcfZ4VS3K1thAh1E3Aim6qNJnCfGc6Szawp4gSTJF5A8o",
  "key34": "2dkcg92n81BGSpkDZio5GKKZC839YBDfy2uQyGwxeC2HRFqMrVVBFGYCirD5sCpeAX4pDLJLrdNnbXVo14hG5q69",
  "key35": "3upMTqKu26VC9r97s6hh519MkUvNCbU1dpkHKLUAAnow9e9Qgf59bCY9QXUUJx6kE8vBYRpuSmD7RHQUmaUcbVBY",
  "key36": "57J2s19jUhVUfvJV3ydarBatZniGFj82Y15jKRhaNUBvUBf5kNh2g2RxjUFPH2jZGWPfAE4xLPnh8AqZvT1rSdDJ",
  "key37": "4gTJByTo31URXuxAcN8t9GVvaW7JW2gc1baxn3ivkuc4pYWiKDVKxe9iNBpTAwW6R8yC7XJaYQMpqgDxGq8Bz1Je",
  "key38": "3V38rkbyq4pBnmfZw3mKJxzXRRkNsAyBXPsPtL1D7BphAKpXvJ8uzEXm3AMuqFbBkse88PNaEeMwDY5DHVKijyff"
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
