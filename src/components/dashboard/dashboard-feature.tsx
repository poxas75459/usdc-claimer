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
    "61qtM3UbGo1e1AUGvAf5jPSUVYGFfN5nrXht1HysbsE3zTfnjnzbi9vbKEvXz9msE8Ktr1zkUc2q3yGhJsddpiR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crNQAUrkb9c7uP1TyugaTs25eLeCgDehFVGV4DgaUsmNJX4gnagdenUAE9kMUAcQMgrw1WQRs7J3yp6U1jJxBwR",
  "key1": "2yEZdDUUAQ3VGPqPF6AUEdNuE3nh3W4VoBz9wpbNaMFtFkM9actXowS1s8cciKhZaUR2CahVbmsEn1zfFAMyiew6",
  "key2": "2F6dy4ot9aesJsCSeQtZPG1GDrHsUQgz1NH7UpGLBMSdU4M3pRm4xzQv17wkJWAPH4BsjwaMQ6CUo1sJdj9p3wQe",
  "key3": "4xy7yoC4kLAkpakzL4uVDFzDeAiZ99B2by8akWk9bMB3QoneinwRDBBSD2QEYauGquDxEg1Qjw6te88Qu6PpzbH2",
  "key4": "5vXB7WcP7huEFugbcaep4fBUJyg5C1CTXv5d5SuxYw9cZ4VsBeHZwitKnT1udFFcH1pZdP13zXAYEo3BR7pMPiTw",
  "key5": "3VB8KQwpuJe6bxKr6ta641jGG1PrWP7X4cqNb2K9Y55efCXAXfRBhfYSvLe11ErEEVXSB6atKgDu4oVmELSL1YLB",
  "key6": "3zot9nFEqQCwVGCGNkTdL3kTZ4xjN6unkeQ895j9QjPJsN3CXUDZx6cnY74Ux1Gyvv2D2cKjp2qYwDqWtFJhC9ea",
  "key7": "467gbXyBZo58zWhsZCF8sYAZUm5dXEqKc8PBQvfYtGu8NsBRJhKckxsc62434hoqq3LmGasaB2M9aXuKdKi7FdJn",
  "key8": "4ZzhMA18dTAtxYeXaP749w1WJbkZF5y7WxrTPG4o21rnS4qJkejnDuTF5okqQUEmbW4PPQn777rNx4sijJek6nhW",
  "key9": "48wirUVaoMED3UA1dRWMt1wXdZoT9aQeYqxPsxRLWuRR1rtRsU6WcdmfFqUm5FVxX4PdzNVqdTEQbuE2e1ZQNycE",
  "key10": "cQc8JZCwRbNwAknzkGbAc58Kc7CX3WMRgwAqK6xZBFpvijvMUcbBvNM1gEiWVZhCmHmCQXcr5DVGg7uw1PX1f8C",
  "key11": "55UbP1fw9ubYUqs2z78xJjk6WvWEuxxxiczkSVxhZrk5LjF1cPgfp9i9mGky3Wu71zAVMhwAgyEv6bHjn4kyhVuG",
  "key12": "9B5raKKd19USy3WxLUgG9A2QdQfaURczezJ6btig4mNMqGx8dFuTtYbzTMEZbyKKi6KoLeycznLoMKMTxGeHqRF",
  "key13": "mdS7Pw7ePfpzxKDcvMgkMNyWWTntz6J9XJjGRRh9RDw4m6bdxn9yaoTmAG2Vg8RkMU6hA285aV9ftr8LDrE8mt3",
  "key14": "7sFSdaKpJGJ6xM3VknF3KtnKh1K6Gc2cmWPafWVJG4s9byD6TgFNSjp5K9tizN5mtcf6NV2TmyL6qsVXb5671iq",
  "key15": "58GTfzXJgB8QF97R32VuTm3EZZeNroAiX6LxJkzABfBfhXg24qKVHtdWTjQYZhYyuFkvTFuP8N7FszEfYpuPcd1J",
  "key16": "4p5ChLSDKshUFbifbMUGS7MNrLJiq9VEYSt3o8FEWh79aTTvAQyPHizjGBVDa3praGB2UEAAr2FeYTpRtFLuX7Nk",
  "key17": "54uvG67fAb8frdSo8EWd1hxYpyfu8Sc9KCypZfsHhxUE95ypBHniZJ3Ym4bjVT61B6qDusbMfgp4jZBCXNRZtSrC",
  "key18": "2Mr3q4f3FwNoBGV5hHHBRr8pSpdPUUMgyxrXMzv5JDg4tg5GvPrb27UtrPaDzKitRgbQKFJtGyRmqAeLTQe6Meey",
  "key19": "3sMssrwfmpiZ5rxkq6jUx1PhQ2CosUGSJnCMvSuH7n4yFVUa18uCzasG34pMwVdsRG5MqteZW6kesAvGwCnVK8J",
  "key20": "4aGb21pvM5dy1aF6QgFsxrWbN9DdGwAmXrB9s1WEtxEFBsMXfBpfBi6QZw15eTpAYFumGbsMsn5meFh7HEfmz2mr",
  "key21": "2v3gX9Nhv8GS7oon5Ty5Dx2jVKLQj1THmDWVgaHW1xnM234kZoHCrSqKit7Tieu8RcTYUsRzbjYbzpaNJjH3Leyv",
  "key22": "kL7Mjibus4MWJeyFaYhTY164U5yAqFngTcBs8Q5GVnUWZys8YFf2h6h9zKGqH6RmJr7QmLJWDDQDHNxJ3tqBs8b",
  "key23": "5GxLpvyPbtToPXGKSJDKtqtbKwK3vAigea153MJFufJWz5SWxNk8KCDawGtBXw632LNRtrcJ2KoVtGjG4a1aUm78",
  "key24": "4ghdDLtTXijhjtR9z7CQUiugfDn3fa8tFiAEFKACX1My8ZUodTCAPeu4KXQbu8TfCU5KWXhVB9mwv89NE3FRSyvD",
  "key25": "q6nPvoCT6BWm2RRyHEyjmn6g392GZnDcsco7NYmdZXmY93M93KyunnHKrENyVrJWtnuxMPCDH949HW3ESfKA8Nx",
  "key26": "4wmNL6Tw9sCTxHncGeX8ToPKXnazGZKBPJYnkvckQKaYodvfFbYLZPQP3vJPWoXfn8iztjJ8qsiuUEGjnWqXNPAZ",
  "key27": "3DwUgMTKWYrTgHsYBAmUbU72TzrvbyaWCVU6SL8fYaoQ6vmQ95rFv5g4rUzUwy8VyV37LiWyqQMrFu3MU27wCXrC",
  "key28": "38nqxq3YXAU2vJYaXsuoH9uvsVp7FEMwjDMWGb5PuG8SPXQwJhk8aaQUjafRcDeuTy8mwa7C4BWLBzXHw4u42Sia",
  "key29": "5kvL4hXe5CNSEDYMRrtydU6L5Zkc9nYGsaaRykbQiB24o3sR7fnVrvzhXBTKSnfzLeduYmja7uV6wcTXxGh7KRej",
  "key30": "KswGCSqkQ5gKmz4SNAaLt6F9PbSY8PibF1VcGn8Z7cKVgsjNx4d6ZuSYic4FKu7WZxXpcWJhVGw9QjbeX2KTjPK",
  "key31": "4VmTWKaX9eMy1cmy45fZRYhhTpd1Eog1g7wy4Do9VsAyJJRWV4KN9JJsx87f5wGFaoNJEfWUYn7znVF29XT4mSW2",
  "key32": "2bhaQAaGCGsFaPczEcPgpzGbHdDzRgBTzcK1X9GMuWx9QEPVRiAzGpEyB3W9xySuwbGS5GsfubLk8cwKSUup8fgg",
  "key33": "5WwyAaXkfZwKZCpUHsQMJ6UuB1AApbQepfaamygMcwXw3DG4uJB5V2MniyWmS9Y6YKhSinFViDHjB64g1HRQAjbX",
  "key34": "3D2QHZwniuKiCHvFjvZDa3EgTDDCizF9oTmfgpKTDZhEooapj44P5HHMDmeeJsEe1J3XV5PbxLpXz7ef4PLy1xcE",
  "key35": "GFtFm4ziUzmY9rhKAb2oJBiudpoTLJkP5feZ8Vw5XifszVj7eF4fGMTDU3WeKuAHeqttykTMcXorYhtHpWZWQnW",
  "key36": "dRqvRbGyq48sVF6HVHF6Ya8VUQXzsL9Wv8359JdRf33sz48tQo8zeeuoGHV4cAZCh1EoVdP2wg38uKifp9jEgXL",
  "key37": "2tXjtKnfk1oznRGx5bw4nizQCYesKdhf3zteEzFTx3uuK5UiEnFmHGKmTbVuiuNtKyYW7KPG8uWNy22Lm3xAyB78",
  "key38": "3w7DSbysXBrNon8vhhtoNzqLMzCf5WcX1Rf3u24Dc3Qfu5d1HCxV4MnYh2z8bo9vUWbnsR8d6F7wGMCAsszYRyJW",
  "key39": "3FBnPa4Fbdt6Mp5d8UDxqkXHZyoSzSN7EUWSXLygNXriRiWkcA1c91pE9pz4i1MbJsqYivZtPXe4KjqHc5zK2WUj",
  "key40": "3cNFpZzTejxhes2DhybpYwG69J45HzHtbtZrvFH3xikcsMFyLKZqNZyLvcCEfe7KLYgibY1CskJ5ZZ7y7ZC32S6G",
  "key41": "2xJRt1vxiVtqBNmBmbnmqw19fTTbzxG2cNDQ6jgLqLdSryqrBTGyvrnGKohazWP8GvPaxtU7FhjrKyZvuzYtpphQ",
  "key42": "ACL8K2ZCLxsTy4aP2A9WRimQm6RZuE3usfyuzKxnzmnSGvLtJosJoUBjNG1gWdtc3VVbveGZEhLy5k9GpQBDfEf",
  "key43": "534GnzSxQmjnm8TvBDFAviPVchzgwUv8DWSnbmZmhr15Ptn2HLrWD2UpCunik2Rs662AuMARxuuvkYWnHTMm1sWD",
  "key44": "4bwVYLzmwUAKdqy3JnbNHCbXR9xuHKM38QPTNdbWpdJS48EssDtiisPsDeQ4ztivDAkAeaCvZ9XBKg6owLiJDuDj",
  "key45": "3ps8iw5sj4ZESxgKTFn4LmXUNw6AoPS45m1rsTi1qPfz6orHZxinMA6BjkB2J1tTnAbdNnM7MdqCzvZKPmJmjunQ",
  "key46": "99Qgpen2HvGbmYCyNJPiDjqUQqmg7trPDgpb7U9DtWrmvqaGjhvBGcbpADargZhydFe2SeGFkMXAh7aQtb5MGHc",
  "key47": "21Rm9qN7LC3iRW1PZzo2cB1GVxC5Q9ALaNYhp58BRGNSwo45m6GCnxWTRvuExrRSfU8rNGaKTXatDnQFEaZAGBkW"
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
