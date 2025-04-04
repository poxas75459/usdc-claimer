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
    "7UvQqxGJYX2TnFkC7a53wrp39wiMDEDc9QtmRjpnmozexoKy3oYEEJPJJtnHsRH6sH1RcWEFPWpPDtJ1A8Mi5bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ii7joVztgRRztbmNJJUoBNHwWBqGMfxdNyB4spiJdA9WYp6dbwNebGBZwrY1WWEw8ZLNj7ssznzY8A9m2G9v6Ah",
  "key1": "3P6UvQ9SwWPCvmhwRp2Fsu7MEud9PQ7G6fwZy6UpFMNGmCpXErg4WCoW3FqszK3iZau3CBpd2ad3RmimE3LuvLJz",
  "key2": "oRAfGteB4qBRSj2ssTfVxZG1D2gA7ojVmtUYYRE3Up7kwW9YE4PzgsFuxk7j6NdJ4zg1UiejLAdqvGzzj8nQip5",
  "key3": "25iPNp9HHDQeRspDu3EL8H3ZKojo66QYNCMAQ2EzyrgT7wajjb679FJPYwwbmFMbDfLhdBCxhsA2TTw8JYCKNb3w",
  "key4": "64RZCCB4gsmr9E6RNNCkm9ShQa8co1Hix1gHufd7bHHbL2WYFCzciwiP3Ee4sDNyE5YuwJsTwFzqz1gfzD65wYnP",
  "key5": "5YEYMJrr78TW6j2gZ2qD5caGeFVSGV7cPE3eJ485LjuqrVgWrxhje26g9PdytRUuSefCYvbHo1pALPBA7PhMxGq4",
  "key6": "2knrTuKq4z2qYGCfxWUZ7Etm2cSF7rXpeaEhDU7ViBdp2EZDJhDuq5kU3TqMv26Ddc3gfacsse4TR2MCmxoiUVWS",
  "key7": "2X6jwSAUs5njSzYpGHLW2RjNU5DbP9Nub2nFeb3VcpDqwWbgd4P56YPbhNtzEYjigwAZZtbJiHse1cfFXq7unakF",
  "key8": "BXxmmgR49hEDRnYPXgUQgC1ztNSUjjaQzAqjHxQqC49xNjyYLjiv5ueaSrKTLs4eoAvfvcHwP1tVi4TaTAAwY8S",
  "key9": "3EQ5PnXNckTJFh92bDQBJrAmvutTTeFMqpW5HTUCWsWMyq33BxL7JTAKdh5aGhuUjFgtuUXoGe6P6GCSvav9763q",
  "key10": "5wsi1Km544ast8UmAru7LZ2KW4vjNicGHJRMAGHPofzK9Xxxb39hi6J29YpGNgm6uKj9bdvTzRFnPXAmz59BrT5T",
  "key11": "2U6wrQVC25foLoCULpCqZ9F9AcHpeGB5MyD1BphdrREV2M3wKgk9diaRGpxrYBa2tv1sj6JAYc7C7cLDNtS79FcA",
  "key12": "2QAExx6VDWPKz79qxorpc4YVL59AXGhrb93s5PdZ6K7ZM3QHzeNFc2qAhjdGswu9GSKQsBVgxsRJfQEYPmX65ts5",
  "key13": "43mHZfTogNMeAqWmbTNJEJuhgKWWUTTFsMzrY1BQfDCsSis34H83GE1Cg963YSjtR6zTbtfMX1izvvs39WYXztQe",
  "key14": "4JGhheCRQNxk5qCAJeNGycJAvg3gYoYhoYnACWF7F1cohHPNoe1x5hYntoysxmfWzFjyjw3kzdieSp6KXndR2oq9",
  "key15": "2meufiGHuNyyn8XgPNkQAVzWWqD1qWY8BAUCFcULyqeDRGg8NZU3NfDTwohfrZEtzyoPSxeTn1yM21Y5n5CSwUd9",
  "key16": "3M7CXERehR9TX9yWt6gcstzfecKxoqzh1Kx5F3NbqpA1KE7C3KeBbu2e5uwrn14wbagr48mQgG8Fx9JaooyKbMAs",
  "key17": "27wXDWiN7RhAQrRCKJWaoxzQjHETyggXLTHr65cHwnFrYnnUUHpmy88DtjMBKPtG1DyKFSFW8L8MyZe8Mho2k4MG",
  "key18": "3cTG4EtFpXhzDPUiqviKxwV9UvsstnD9wNqKFgWrsqqbvEcRzdXFxCvGKJX6TXWcv2wZ5udoA63FYuhJ3sHoKxcV",
  "key19": "2GT1Wd1wZd48uQA4srwsMuGuhSVHxH7Ypgv7Wfef5gqzTicNbUHT4mEXe2Vui7CrGeCiqpJJvA6eQYiJNa24s7TM",
  "key20": "3W4HgrZAz65VyoXS7rWFJH7ie8VHnnYLVt2Wwzjhkk5w2ECzQu9Dw8nXneCSh9R4KSHu9kkgoRZuek94WNzQ9Cja",
  "key21": "2uC7pPqBCjGVR3fm1bammhHxSuWAY9wzhr7wqHzNr6EKeUyTiSYit4QobVNfupfV9Tv4aMeBKSKAwoYbiKf2nmFQ",
  "key22": "5jwAikXSnqhuq3zL3VHZonWnKLx3qmdMtL5b1pXzeA9evuHynCdnKmXNLFdMsgJeYygVRk3qZBc1R8iiwNHvxvSp",
  "key23": "3npeUboNbv8Yi1kbxMV148nwx7UumHVmqpCQqH2x3aUzHXBmKTQNVW3wAsyR4g347bL4wPy1TiTuuFicvJKERau",
  "key24": "3ofAxo1u5gSpSgnAmEWpxoa5CZTyxx34tGawWtwc7x67gsGtuXrXAcEDJvASA3EzfHcGCHgp5gtb1HMigdWddmh9",
  "key25": "4x6MFiPMdMETGRu5cMMhb3MQEPNN3zLz4RbuYJaU27WRV7oHTd4s5xJsy1amQqNroPVY5jaAiX6VbB3vZbjtaJCR",
  "key26": "4JGRsFwCGA8nhWiKm4p986wdXpZvNpcMZPQecC23mexpUR6zR7k9KGCSBD5T3YD7g8eCmc18KjYq3hREnAGNnw4K",
  "key27": "28YDw2YNjh3AYsv8StGSTRkAeuaGsQT6dvfJtBDTZ529zNn2Qo9LNUGnTKLGx9qKEt9p6BubV6PKLquDARdaPnZs",
  "key28": "3ce8yk6oAiY3onqiB26EzNqUTVvXCCVy3Y36rfzjyZkhgvvZMpxPjFnUPgYPzWn4Mj1hU7zycqNc6j3ncVHC4vjy",
  "key29": "5deqgrr9Zq6peyNZdyucFhYstQmg67teE1h9AAGaEby8xcHzeyhiHp66rwuFCEW9Yy83s1k5MGSs1AzxsG2MfmJ7",
  "key30": "5MAaM1rKARLk38vXxnNdM7jr32jgpQG1viiytJZ6o1PExty1vPbJXFDos1Ljia1X1cee5mLVEXnL31YpgGmgV4Vs",
  "key31": "5mP34ZWYEJtUHjRKb5fRLd2KzoMhVJTBDTxgGF2kASdBNXwNg5LN4qd7pTZDM9SJNQCPQNFA4YmZ4QT9wiV6rbaw",
  "key32": "JN23qERu7U9ZAASS9v8Rfud7h6KP4W6rwi8fWyg8hff17U868nw72rSanQhVvUk85qG9pYYrJrVqPJFoJCiaVLk",
  "key33": "61cL6nFSwKJWy9ytoCX5qfwTYfFaNYfNAyg7fPVcwKkr6yxZo6J4CK1vDoodaSjdD529wtmHYS9d7BKLZWFzZQHP",
  "key34": "3vd8QqSdhEsBGvstHsw9oveCocctnsXGp1K2bfcJr3JKMUbgwm6Jm2Lq7pa8LrpqoPNuxJqLVmENXwhWXwoDMcAM",
  "key35": "5aK2rCC8WcLFG6juAXAxtDoqMjc9rLcFfHbPrKrvaG6VP6S5WVWs9AmZPux7SiMrNrsT5b4F4bhQLaNGJiTyFKVn",
  "key36": "KLJ2omEK4azzXtSDtct8VwxPhcT6QrajByPbriqCTaG7q1po4qifoohdyxUhuQKbuiFgjfWvA1n6ZZ43T4d5DBT",
  "key37": "285b9W9qxrPFHXP4cWvsybigCMNL1CLeCiHphJiE4nuLnAJFY1J9ATceepfQN4DWVsEm9keT3NsrWKmRdDqw8gvE",
  "key38": "5R4V3kyRRFeXg5wMQzk96qHWBBxyTE4MnN8oM1qdS3s7PS6dXKQPXqGvkxPwKePoLqJeoy3mq8S2tcZpRQMTRMAR",
  "key39": "BsVGLujEQghyaoYML6H7yCrBbsAfrBGrD6gU9MHaHReS8v4FPehA66cbfZsLN4SisyQ99fDgEG14ehnodBcEk5e",
  "key40": "45nkLVTfSAhwX6aMVYn9sPCeP2R3bz3qspLX8hurLqXwsf8hXo5kaV5ToMgT8CKhpdHp1A4Z3NbkAH2awhbXVakM",
  "key41": "2msQmgmY8DjeT3gKp1XAhVcUYTBAUrVnQrPvibsP6FLpMvkGn6xTL1NsDESopwDcvKdLwxaZnvY2FE24UFosYEWg"
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
