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
    "3hSyXwYouviuAevtxHhVn5xD4KLZEiVVmixTYNG1UKYDxy3vWTtH6Rd8swEo3bTu8e2fLzHquYqyz91SmyQmA7Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvxcRiL57VsdMhoDg3tWErtVMY6VY5vuLrSF7FA7kqrBbpZp6Gq8PqtXqtav3FvwbvcjkbQsas5hBheEDKv91Pg",
  "key1": "3w16z9N77VZaDXcY9bf9RrBYzZahKaYQ41J3jAnFFWdS7m2jmk7USD5d2etkznTtSTwhPp7doV5VbCPfbWmC3eC6",
  "key2": "3VMgxK8U97FiGoiQvgQyQHXZr35E8bafgdLykbPQc2RHVv8iDd9QvgxK38X86HoDecjY4kemkE9mnPMtZwA3MT39",
  "key3": "3cnvCVGwGypEDzeHrwz1byvEVz4KayZ8fBoA4U93arsYCvuyjqSVNKCVPMa42Fc2ncAeqyrKNCfD6t4wG8ffUpLs",
  "key4": "3GKFKcdwuZevm2w5KePb6tqBKyQusLGrtdc1fB42Fjj5r4py1ovSEHRjNTsEKhkxCfsFWZfuvERekRD4JA2JQxvn",
  "key5": "5P6NSRsLJ1VwU441EBu5x9Jy2CtrgE6c69aZhGXUDaBNMjPxKKqmSWSDL8TJUnjCHCwZAAStHWJQRnoxDTqgSV9e",
  "key6": "236sa59DVpedcXp3A6Kjr5A8XTeUrnboBPgWbf9T9z6sEVjyF1b7TDgPXYNLhgChnnvnpTPNmR6Gcisa6i4mGgcS",
  "key7": "2qk6Qep4MCz13csjzdWJtPvL3PfqnZhkaHqNDzj37ajd7FgMvFyEMExazuVDhjepGxFaV8i8TVPYTgph9jPAWDf6",
  "key8": "3HiGcmwiHiVeAeDsGGVYVNzJxxVL1YiCy9sJn4ymeHpaUmZ8hx8szXe5BpuWfNCDq1TQo6Gj6v1tHq1ChajrPjqB",
  "key9": "42MX9rRAXTkeF1RX4ehEbGhdNUP7yP5nkHqHfpKcPhGbhXnrktSeUE3Hmr27CJP7TyiuRmVa6VxGhidU9Q1kUHNt",
  "key10": "3nXdDo7eyq56N2zU4uLVubtREjK4WvYdS95Eas1WjBGSbphCdrCxKR814KfkKZZAgDftSiZXxYzvXX9BvrNf8U56",
  "key11": "2VYvfE6VsJmHCBdgATSAsb1zknbne5WD4T4SsewniKjJoP7YTipvYpKXKojiS7g3w1cjDm5r31DtoNXUv8GerrcJ",
  "key12": "FiUhqLT4xbghdR5BFYggibN1vbvmhGzz3XnwgQgAQXmnQ6NyKhqNJoh6LSRdFsYBixwA8d3oNKCfu4NWwV5GFEU",
  "key13": "32RdTU3PjxTV5wfhgxEVF6s6EjZv5uD6HPauX8MhAKVnG1JfcU9VfWf6ZsMboQErQwqqj4w98FPCSmQ7xB8Mt5TL",
  "key14": "3mY5gK2p1AJypVxR67wZHBVbSdtYB83vmcLC3puBSRaiB66wMt2sstvu2EXBdjWDHQm7U4MffDLgce5huKt4fLNJ",
  "key15": "4F39sUz154q6BHcqMeWsfyKjYfAk7xekUjrsseLU3FFjFAyLoNsWSpAAwM3BdMmY7vVLn5NB9p5oAZXuW7gadUhj",
  "key16": "5gP8ijvabiRTCCWUfGptKtCoypp31cg4GcBGedXuUoiTnhk63xhD8TgkPWd3dcwaGa4gz8rTHbo2FgXSD8jhdd5d",
  "key17": "424kMxvu7nJJpwRJVw69A2jo2xRuZP7P8aqENGHKpzG3MAATTNzBqFd9YCEQJeZCuX331drkF9aDvKNkyR4y1Wy6",
  "key18": "4XeYsPkGuTfqAi645dR5cwTAy18MikReZhuieCVGt4hEPr6cwa7piA6jyfHZFbz9nZthc7C5fwqsoY3iLww6QYp7",
  "key19": "5UL5antMX9SUog4SunQnopjcDyTEXU65BRKrwSewPcq9MALsyLcZbAKNrLJeLVCNmFpjcBcQdYrKNXpKARM94Tpd",
  "key20": "5RjrmwTAz1rWEsf38xZZyG5W9QmVPLvBRK2ap6WFDEPJ2FEcDJQMa3U6nrw8S2JQwuFdbMnVgEzosfxeWmre2WHE",
  "key21": "5g374ow766nNMDiEH1hSdFw9mJ2EaciWVLCPqWK6jHyyJsvVF62QADMsSSbLwhoFLhW3zxMYvRtapTCgQzUZ9ucM",
  "key22": "5xBRmaiFTZNEK26vjX6he9A7PRmxZTSqdukSizVRHsvmH4yEhh5WdWDuheiDRormFodHMLwd6uDHrsjigz4EVDnJ",
  "key23": "4NZcxiHKX64VxLLRyJG68mqMEDvx9bbGWHK1qWBsjdNswKwgN9JZRskZJ24YMDDbbtP4RVMf8PjE2gVzgLzEvgUY",
  "key24": "2mDWTozJWYbKcp4pg7xwqkEJ8wxJnfLC2Y2b2ospoKxXEYKMff2gvNKDyhcTA2fjg2YonEZ3WurPTZYBjKrGdLYd",
  "key25": "3u4wd8ATVwFFxvhJeJPC957NRpUqNoUcsgGh15YHxL9yJsATaMSd3RdjvAAneTUreV2iUVAs5FmNHqR2qXxKvxZb",
  "key26": "64uSv6FcTBwbvA7Gmf3mUsCe1pBLeTmvXtFssjRYqjogbYy9pn8G7V7oRX4HgfRHSokMM2VjHMggp1aet8jsKoNM",
  "key27": "53eGayUYuUnPo6ixrQSZLw3dFf3UaX7sAvJ2ZJocore4sCTCwXBpxom8rcYGSeBW9VLN4XMqQrDWhZj4ALEF5ojm",
  "key28": "2uGjScAm5qNHfKi5GbK81aYPAKaHHP5KC23NY8uQ4hw2gHVxEHZnL9txDTyhSDc3CeTghEHypWT3ktB41gK4NNX9",
  "key29": "3DPVbJvvM7FbAbefWpjqzop1WpgUuZNZN2Ux4gjou4em53XyuohabBJRqHQ1jLdnqZL1nq6dScxGRbMwJvZjQ814",
  "key30": "4Zr1FdmCNDXKgWB1Z6vN8yZgW6Nb63pxPLfH5HmyZFe9n9da9QyvhD6K9dX7zJ7MADduRwH2XxmnqmSQgGfcerMU",
  "key31": "58MGBWPQfqQ5YbA3SofHoM2SXD4ETtiEtkPe3MuwUDFMSfRy4bcXBK1GPy7UMS8NqxA3jWqaqmSPVLhFuVkBpRzW",
  "key32": "4dqyoF4i9GZEpCyBrD4WXqqaLieDVYmyQkHVPRopFpMGcJWojuTwMQNyuDodM1wXHnAuRucH69ixujpgNHwsTs29",
  "key33": "3UJPE4AMcNcFqodgXWTuAqrMo2RFKLAA6ieW6q9KTBpnQMfzxxMAqpTkwudVhYsxCxkGHMUAZ1mX9k5BNh9yACQt",
  "key34": "e3h2gGubBDowWB8CSB8QQvA3cTHnNAZb8eunVB7Ds4GcjnD864cVHyXEGqPgZDPBNtK68eRHDrA1sHJS6ucj9fH",
  "key35": "4tZteuY7cg2wJHwm9JPLfeb2AdPZkqgm4oFNkoozgkLuERbFSUggkvQGHTCPZVEPbf2gD47143NSUEyzVtDxcadV",
  "key36": "2RKiFBXsd5xe5TQnv7vjKVrhjMt4heki4v4pZ2TpzDWX9TWG8nw1CjcWXWugFqFC7T28gkT3NAdQ9XTsfUANky94",
  "key37": "5BpUFnXH3c1zQySEuwvty8CBcDd6S2k6muuJQ2bk4tW5fuEp8Yur4jj5Yq6x2315aju27wP9RtCk7hzVmYquYQqg",
  "key38": "5g8FDCDFcLSVC16h22KDAEhTRoPBMVCw4VkdYamg5uGZQEGhbTjHtsmfwWNS2dLX8xE1i8TRsxNWfu3hiDzpKFuu",
  "key39": "3WAh47ArvmrNCg2CSNrsruhencV2VBVifh3AvqffNNtwcRvjcFpb9VmTp4S6eUNCvLtNNqR3NaZwnXaaUHo9FsnM",
  "key40": "3xjqxJpehs1WmmPHYqEpBe2B8v5XaFxQYqAMrbzzzq4Y3m1FGEAAJjUXmz3sQ1TK1CQefk3zQMmRyhagUrXGDX2w",
  "key41": "2EKknBLBzYXYcbbjg7FioaocXsk2SNhLB5c9uwbrMyUxonPuS9Btyu9M4bHqBtbWbtWFBY1cQtmGBUkGJj39zqeY",
  "key42": "5TBwVqTeMek74ztLmjvkZykB5b3dhJzSNuaYMpXUdcWsayKQVEJDxNZT8uPgbQQHLruWJ8nNjSHStNMWB9hcyUiR",
  "key43": "3TnCNagECwUZJvNY2VCST2qDR5JC1o5Wr6CYQskiMvurMPJiAmgLwDus6JhzTShinL2yEEw2ikcLosgYp48xDh9k",
  "key44": "pafXSxkXGL5Ur4W7EPw2qeeiXz7pwhHvn8yHiJaYikqBMTMh2d7Nes1oZ6onjdRZt9q4poN77WsrsLP9WRTqSom",
  "key45": "32wQVr4GUdHN6A8CTJc7zqfHrY8ZGff289ftxhK1oyK1zjWDxT2Wu3Yw9YgG1X9rnKEcBKCiiQ5VoJEEhQST9nvy",
  "key46": "ujgN83n9KHM68ySi3ThUoD6Hg5mUB2KZamRBEqokzeWLBuTBjV7YijjBLjZLiBLRGBMubLkwP217r7ojsX9Rqim",
  "key47": "2rq3mBLxi5R3kS7BkmRUQqbgtqDv6PTri7x6KP4TA3CuHtWzNwY4kgUFhUy3BErhqAmUkGWAnA3pKhbmXrSBtLYF"
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
