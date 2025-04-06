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
    "4CikQ7NGjmvCDvCMLRDt5ygBmAnvqix6j3xjPqUTyMHssAqvCQNXXnVMPF7eCeVbK8xCwUYmdc5Uy13jhFbUimmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvGPTwNGaJnPk47SELYFTZrQjtBkY6fRyCt5F4giKvdjbYQrxSYwjJu3442HJUaFgbpAUUzHiReyCuE5PoAxnQP",
  "key1": "4t5kYdAXPxaK7Jzv7pHY6KhGQUVK8bNujdbhPvfVvxsQVxRUEkZixMmLtv9hofvM777TNpGeVy28wPmMqazLYWLG",
  "key2": "8xLyTBciQGExYibBjAar9bViSoxtU5ciUkj8rpzdBkVVgjt8h2o3RuAuC3XMsc8f4BknB9RwZVMy7FGQ3u1xqZg",
  "key3": "2mmQpdUwMU2kA9qB3bXwJWev3KjkDC9hmT1EBLHqRSF4y3rSY62nKPcBEy1WjvfwnQmnsRNMViD5QzF2e8ztaJiE",
  "key4": "537UmCEFWUSPqZinWFJrtzWuxvazvt8hsPnDgv22BGBHYVnVjHXwHEmNw7VJoqat81ouB8wbfPMGPCTcjXJAovsj",
  "key5": "3KLScArD3pHBLJGHRm9Ffw8EaGyG9YJZ34bRMK69vKdt6cCADVYcSobzUbhbUWVH6EsyAUnsUsyN3KBy8LUYs6wm",
  "key6": "vgFmSU8nfdoKK6jQkR9VR7WUd1V1wLJQGtNCKYe1CFM4hEXDBDcaNBB4CYsCCecqWmqjh6cFWtLVWheu6xAXSK2",
  "key7": "5tSF5Vdxebni2MToE3aZUqQ9FQaGMNjwQ3rdNA5fWUvgHPzqQqVzC4CMtwBh3wDriT8yyH8HWbdC4yRNYM2pvDsP",
  "key8": "ZRyfywtgRmkG4XW14xDUkkdQLt5JhWeQGZi3UdGPGALo9TFXbyvBJ38zeFvkoD6nZSzP3BZt1gtAce35wYpB1Zu",
  "key9": "5nhCBJohMuhv2uE4Fi821cHY9wMrow3v7sqUrn1wzpT6yj9bCZQ7UPen9Q5taXV4BxkBg6iXY9nVhqXhq1aUVuSS",
  "key10": "3jsh8TVAP1endqXhiV3hpYsYMdKxvSLc149HpaTRmbk4SNaQxpF44vv6zfz8Stp5q3RizgvJYydWZHa3N45B9ci9",
  "key11": "33yvxKPG5MT3yAh9uetvWbqmGFUnXqVzoLNdmioTit2ApUQtEuPSqWSzrmDjqgQdqGjutGAGbZh5dhTePBGiv6oB",
  "key12": "kr3pqNSAKqzshftPNcrbVoNt7QbBtZR3231wQ1MHfB1R6wSBbWDZim3q4PhcDmSt128uystqfaDg7NdWrhriU3d",
  "key13": "5tg2ZgzobrPtUohPLkwh9K1YNn4s8Mov5yVz8uWmiWkwSuUUQUq4VEyYH6wgQhZxXVwg2QoS4TfUDwu8x5WqUDii",
  "key14": "3pyhnkibamGhXrqWTVBeYSG48JF4yMHXmbYka87fUBmC3Nda92BSoLiURHeg3WEx3dRqgXZADC7XPYsN7ZBHTgUa",
  "key15": "5X4S7tXjmA2K28RwGK5gVrQsMAoqktS18hj11vkt7ytBAiwL2FCKUYFthb5vNRT6qsYxZiByALkyaxQLp9rGWY4",
  "key16": "4H1VWN7cB6gES7ha8UbRG739RuffjTE1Z69Kbi2PdSx289w9fd45ajTsTuXX3yY3pRPPF727ZpkktBEUPfHzU7Q",
  "key17": "vVeGdf558Xwq8UwhnVKfcroMBnCukNoU7BjycPMQ1EDnyEjyqerKE7TV8ay9mdguXM4nj2gui4qhngKSZpmqU6s",
  "key18": "2h6PANMijSGMr6Sv7sco2XELHo2W4rKFdPvy69v7NqLPwofQcLwRTNx9JUQ1yM5KboWs64vjHvw5fdoMzaWa1c59",
  "key19": "5hPHWj5d8uMfQ4m7j6vvXzLN436AsdJHwJGeoXWNB4pgM1gbzRTSf2MEnz2ekKV3frh7HjcyZVSRwL6gJ92ye4Y3",
  "key20": "67S3pUVv1amcKLiB2RnB9jb6yZeQqmMGAaELh9eipZVEGamDEpbQe8KLAvwMiinaeps9T13VAn2keSZWC7N9QuvH",
  "key21": "3yLjo1PLWFMvqxrwbVPLXRK7ENdTJMQBjW34aT2zCMkZ8fyVdmxELZCM1pKpfKvPVFPRcMkAZjK7ouUpMBKYdCBV",
  "key22": "64NY7wGd2L7sNo8FKwzFJVc3wxhbgBfcB5apzAtgfGKfMaohNFvNtA1LZ4xhtadXLxonkjbnrrCw8oY7TxktzhHH",
  "key23": "NKkZhKgBxDgVzeC3s6DB5rsXa8t7HxmRDRevQkMQmcyn9zMH54FpuvwHVrzNYqAQqywaqRgG81E2Lfk4HNNs7Gc",
  "key24": "4uMZRUtAqsbkFwoazVuuemokEhe8uLTDr5CUjk9ZiLfp32GbzxwvEcjH7Hif2CaUkcpZBs3mm3MGLX2fN3bvjEk7",
  "key25": "2Dh5DaYV9nQGj8w8k2LQXut67mwcZs2e2TbSQamcWcY1qT2qDV821ZPw7mKVRJ8X8YEcqxYTevBSoZGZcyMTTmH8",
  "key26": "5hrqDbdaRcBHU6rakqNLadc9S6CGtdJdUWV3qK47MzQx3iaUaUaQLbXf453U3SkSdNGFdR2j5b2a3Uvdh8615MZC",
  "key27": "3YvvKmTEG9Z6N6XvWnMTosHzorwitCs71zy9uGho551YY1d8ESEgoN3RjWYihaKPWyAxeuG6RR7GDKM7eVJd5rBa",
  "key28": "5gNAumReqWALoCXxf6YsV2TFs1sYxKx19pognS2JXTVf3SVHxrm2PYPKdGEP8j5dt26Kc5uXwpVA8dUPwZRyS3ty",
  "key29": "4tTjh36NMLg7GygtJKcQviVSYGTRr3eBWxYDVowcnZdK8oXpWEKMbfAmHseEyV6nbH3CpSuHreVmBzxsh9GV6vEa",
  "key30": "295atoQdtFXGF7obz8DMjVCf7awNfDPZ22EonCTEcYamBJdZut7AsJgsiATsxfo6jbU2j6VxwBUPVE6iZVsHJaXS",
  "key31": "5abd38kRTa9HxJ2pCjfjqSaL1Segi6uTow1AUCBEsh8dmvHkHsmoXhBG7acTJQMbswZuaY3dh9DiNGYPsTDryzCw",
  "key32": "9XfYpHVrk5CvG9edTUSPpv41Pd1P2cYWcxghmkYcTmuvxKFU5qsRWhqLWsVgtUyfeQuRoAm98u43cQbS8sPbUGV",
  "key33": "2h4BtY6zgQyLrJEhMpmdV7Eyhp9ECmkhDYPFJCUvCYKhZCvLTp1yAWHK7XtrNsQzjAyk2C8XP6VUA6GTAPifAUSx",
  "key34": "5b76KWenWuENjVbXkXyBtLfFJViTYx2KZuPX4dyv7DDsRxKcs29poDQ4bTRrFtL2aKrFWreiFSzJd1fAR2kzthoU",
  "key35": "sdVrsKwNUe577PsYzfUE9JPZfaYcrtcM9VLYYqrTqY2FxGL9nMSjT8j5t2qj6KMwRgbKSCCu7KVseBmv8hPaUkx",
  "key36": "3n6irjFGX2KDxXj78w9UzNKXUuNYMKbY5wNN9QGFL9vDC16jN2oyXuN9Q3tezmYByg3biunHDa4p4pqARvx6bp7y",
  "key37": "wQF1r34zgZkrGGenMw6iaLAZ9w5s3xNQECeAEWhLsuBYSJrFHrKdbDVoNgdumvAWRbRihhanGCj8MzEZQFM78P6",
  "key38": "3D422DCtwfven74sKnNU8o9fmt1BXsU3bUeQ7FTYusn4dnuRPsMViwYrg4CdyqdG39yRDAsdDWcgw76itUc6jNf5",
  "key39": "2xJCNqi7pCTtujgxQfyLNkY5qv1fZJTFmrXiKKid22J9DtemDJtwU9oixVn5jrq6xEgqrP54s6qL6oxqQCtN6Z4n",
  "key40": "4Xw2mzvnVkEcQtFi4B7iNLVXGVhb4qpMP4Kvkf3F49tRn12uUWH9NH4NgX3v2CkpfSoMb3nvKV7jDfsCibk7Hs3f",
  "key41": "5KzSV1JMee3mxBq7ziZtiYU57G9dJw4ZpfDFqWH8T7u3oimAeHMiuUefFvifD1qRP18fPtW8NvS7nJ4VkiYfpebp",
  "key42": "5eTKGUqfNejf6ZDbyfc7Piyh9ajBWjPFnTwyzio5tgkcJAYmr8ReRX9oTmNE7fCBQNHYKJ92L86Dia5WMGjf31iu",
  "key43": "L7AU7bzjSxEXUynLBrH4qQb1vkcZPjrJKWb8UMJjLFmHf4N9gKuPD71DHBS1VSVpCKU1hq1jsB1bKWCzspcn6i8",
  "key44": "57t3WwdrrP5JBaGnYcrNh1Qn4fFUo6gcjFw9f5Nj9XQNG8DeWbbo68aApiU9AdMd4YEF3TGPhoJpL7imWXzZqdTQ",
  "key45": "2PjUuurwioqZ4psu2L6Y95aKSdPw4zBn55GYDTZQqaexuVktsJYNmyS9wA8zjhLPp3bEPnv16V4wnF1jiyy25WvX",
  "key46": "4Fgf7iib2Ssmq5W1nHcrTQS5FgMPfUnp4NSqGpHyrp4NwF119FPe8Uo7isiGtAxLmYknH4vjXdMZTgaARuAYfYw2",
  "key47": "4SsrzX6JUv1g5DwL22i8QFN3fLYfkJ95Xnfws8vaxtjxRDBxcLdkqvEMMNj2zaumdfR1dsy8eKt7qN91prDLdLpQ",
  "key48": "3TJ6gsdDsfCgzKgTSR5kfesDSW4Uo3QyRvuAzmvEhDRRjD3P8Kz8BBvmxYGEomVGLSrBFn7rB8xFH5XmQnzN4abM"
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
