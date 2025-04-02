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
    "5k5YZVmv1cqUSNC3YwQM8f32V7fkrEeoGn4g4HcH3nZy5FmhoET9djuL6HrG97jpco6YvxJLD6vBZJpV3oRjvidi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61V6R47MoqpSFYiod2wvFvp9R5kDDaDTU1p8j2NEnSTfeavQpiTZyP1TDuM71xtUoy8gFFunvFFJTmz7GM9a9ap6",
  "key1": "29Qzp6wjPtc4rZayoFcUHvCSE6zXn7Jpw6f3Kbm2idPgd4ABizdRF1YJfz2Cf2oGpySdF3K9LnkA6Hwuqzdwiwi2",
  "key2": "2v66KVJsmx37WrLGYMW87F1FKvB1cx4gmQNSiJEi8qUP6qiKkZS4MH7kZhPxBCDSi7STDjdYLxW2nhom9gTovGZ4",
  "key3": "gJjkUgpj5BdA7imWG3S6waKoJ5nTi33AuoakuiNrDMJP2Zro8PiE8UR4bVCQFypDy2rKgB6vLE6dJX9PaXXMv2Q",
  "key4": "2ounWY5N44PRysj1mkXd5ymQ2aArqUe7Yt2LrbTkzMMJ2Q67uz6PzFPwGeNHjFJMbRDxzkmG6EvdmR6toBM1Vxin",
  "key5": "5AkyEwtiSt6maDYXtNLp4m7zeZCTZtp3xTjzwpjUiFxNSpc7Fn5vzamNTqHehg6Utx15y1xKjdYVHrh5inXGT7nZ",
  "key6": "2gict39Fjag1EyoMr6xD5FyQ1LrQkGxTVossV7PE5t11HcvXnPoQJX4QQv5zceXy4nma5CQigCf599CYGu2o6XBA",
  "key7": "5QzmfRerqd1rut8eLaxXY1bmoLdDLme2aihf2myMVmu6Z6gZ31gVpg1YhHJEQaGFnDQr136XUkGZzZ1g1JdQi6W4",
  "key8": "5YzLHyAQ2vQJyxEZ13PeEaJn1TeXrLAHApDy9sBaP1WUi9StTF6HUfKd8hpWAFyspZDrn197pdmByMKJsXGs6jkg",
  "key9": "xquNFFdfXKmjaRK33fmKX4fcZQLqCtRgjpumNdpphEkQgUKg9psZCcd5e7hUfgGetAtoDjCzB2sNLAAXBN3TkWn",
  "key10": "5Gmn6xh7y7qfh8t3Eb2d6UKvWZMn5d9o97ouL1Da26geP6UHetbMG9hLcWuNmuTTLSm3nUPnWb2Z4565WPenXdPX",
  "key11": "1mpjnMGotCoingJSopjHLPqoEwd498gv2kgxNUNR2A5gMCzFByqH1igt9zRCNqYXCqNLpPsmc9PyHGE7MTrGtXL",
  "key12": "61a4z4XjXa5GVRT3UfJGpEckoXw1Q7gTPpxz6HJ5CMWENptTnBVeexCUCWe1Keh6ttSdkfyprKYn1rP7GDkfuFCJ",
  "key13": "5NESvPeoBQFvFAgQz7RUuE3QBvh5CL7ekFDW9uvWW7zjPxG4qCCWyHyCQ4t4fx2W96d4UKUnUbdSYfDTZzHaePCF",
  "key14": "51G3P9wSrHxnqBUM9gkxscjnBrNXb1UoxqRhTMcmH6tynkGoerFJAmJokmfHfDa74XadZzsSnki7dxohrCeCfBWM",
  "key15": "2usnt2keDKPEGgox8ZmURtJu1K1AwjDZqHQzSdXDk3xZrW7xqfBMzWNKXho8g6ak9E9nhFiKjpfxzmVY2F7LonSg",
  "key16": "jKHNFRorjhc9suB2oEvxcJFdqgQyWQSYQ1SNVJfkxE5mF7JR5B8vxb2c9Ji8Kowihj3puk2unEHGPhHRudb13wG",
  "key17": "MraRgBjRm9HQnSvodDZVTgf74s4967iknEtQcjwLSoXfqduMKGCKoSXLugAPnwXCbQ78b29gjuap7JRBrXkHiBu",
  "key18": "2tcMWuVQwez1Eerj8NGE6WdDgPMr1nTMJ13VB5MBbkgs5apRrRvqXgbpbyccQtjYFS3SFA3JuT6nk2hJsygULB65",
  "key19": "5xJUojonDcYsgrKzB6b3fvG1AFYoC2zR8CVNr75oLveAiVpehkLoZtpeMbj5nuy823yHJPHY7EurnBqx3jwDufF2",
  "key20": "2W6iT1nHfTktoXRZb3FJ1K5tdNWJeruesmP11PZ5KqJ9xjK7yV7rzJcN3PEV4vR2v4bgfTk8fMLg6sQdEvHKt8LH",
  "key21": "4294GwGy4nEku9UZx4yqc5q8QUT88Kx5pNbKd4prNJgtm57f8CKqRQwrpmakFFMVudhNFXiUvjHFHvcTy2mo5NZ",
  "key22": "2YvatmyudNsRaL9R1XfC6RaRgX1hCkPxtnq2FBSDdrGvGkrZvyu3HH6iGiA7kLiSRss89R5BeedCAcuvvn922Zz9",
  "key23": "123uXGVgz9RW65bwn5SmMVQUzj6jcYBjPv6xrJKwarfdX6YZMy2keQTLP6aZACmAhGCGWK1QV4DDzsGztwKcqwCr",
  "key24": "5bqDSMbXbdeRSvpEGozQBHLgDJNdD7JAPtNtJAidWqvMCPdGPMgPC4LxqLESsAF4xvbmn78igK31mMKxAaPxpQGj",
  "key25": "2HwQ9z4WudRTJz4JuCJ2q1GHsFjsmHJJGuDdt3BCqkj8KsH8KD8d5tZsWGhBjqRiATxrhiTmAgSGxSqSJ5T78Tiq",
  "key26": "8ctEJzuWgk99KSuBAzGjAbhX2u36Hf3YP6Qo7SVUDbBossdqc3Hs1hQhyg44Xdr4tHbTYjwq7p2qempCirJ3ccT",
  "key27": "3SesS2ghHWpdkSWkcvKY3nBV2K6izqRLuFp8MZ7tT3DUjXuxocv2zV8H9LF1Wg9Fo2iu4e84oN3nhJDyDGpVEJvT",
  "key28": "3sKPbTCGqvdnaKpgUrtjAd4aNFTJyLzRBjDjEsAimnPxu985no1Vq7PUA6EafXmQvKg1vHzHMznP9TwNbskqLVyP",
  "key29": "5s2zfRPttv55JjSDiSmkMGiAeaF4zh6MZUSKHPyx4ePozJFGf3ajJaUwYbjusVjpshdcMzgxz1RJAe3ACW3sqspK",
  "key30": "M8gTyCBmwfJxMLLpVi62L82uL1nyqjZ7EyvVrzbCKtrwAUivqyxdDNzfQYymt1Aue7kfRmFPCzC8nZMKsiiYtgV",
  "key31": "2gNdenL623GtCeXmQdWayaBtE5ZoW21vFmKiJBUxsvxZN8bwTigJ1aFsDnBfdXohtisv6Xw6i5y2ELm6FnriManb",
  "key32": "386SdiS5DAoAScQi7drJMm3baYcKm7nfvJU7SETGZ1vp8FuRUruQchjpYJPhCN66zUXmgWstNDtoTPGx7QwP7q3z",
  "key33": "2hmxwFHVkjKaB8uACrVGBsEGBySTg2YDfWH7P446xwMUBbzFKe1w1EkUNNugMad47SB48iZTLaoXreh42pRQB7U7",
  "key34": "5hZGETjrCVuW4pCL65rNKeRcgPo6pgwdPaZxX1jcbKLEyT2h2Z2qJXXp4yuZPboQoNREmdF1FTHh2yA6oun2THQA",
  "key35": "5RTCLP34DYmSsAohju8MyGrNRiQawe17Xu41Dse7y8Ft2BYFym117XwMM3sitjNA6La8jSA38dmYsPAzxtUJXs4q",
  "key36": "2MfFmBVCEyoLRmkbdAGX6uzzxQDhbLaxtij2hYH7JVzzNeVW2g8WiMbAa6idLYRVELDquFVUpa6aqzBpX4Lrn56y",
  "key37": "2rQC151RCB4CdrKeWxDTt2JL1enKiSHoMy3TXYqtxmJmVaYmfoXw1wZnFH18uQtSwGGmtqcxebPFbhzQxoPc7fZW",
  "key38": "3PvmyfZbpQNTAErwcM5rejRZSNzsSAXuPT2J9utPUVLp6YoVskR5mmJiWBJReZNBEYbJAe9GZHzYshz26utMPtWX",
  "key39": "2CUZhenhCNqZ281Spgf2Zys1e4Vd7CbdYvPMyWUWxEr8SSE55qVzWrQtm4d37GBMC1XKHrPphvYztgTFBfk3MTRJ",
  "key40": "4brLGmHZCYauxfaWEPnzLj4aQuneh8xgJZMU6uZ1s6AbouA8cexxUAb2ELN8sYeXfn62Jhf3LUu73VJTcNwBVDTN",
  "key41": "4haSdfPXtYbuNnvPfTVTH15ddVSWAkfpoMgdQgKfHF34bWTVfnRcewXszGHhXAs9TmW2YQNMGqhT6me3uBRvLBS7",
  "key42": "53fqPRhN52hchx8NEZkLwmMTrXxKVGqDiuwgVqWg1s3VPhibLpuAPVRjowgQ99v1cGoMzpQnbSWnicNtJhE2dmNh",
  "key43": "jJ4yGsR3vg7nGrXQvA31CuqTG1NJxVYDpmh2SJfC5PscPodmQn3h3XvzDGookqz6tBGH1UwBYWW3t2CAeFWuCUz",
  "key44": "LQtGkRr7gADAWvM9fmtGwQbQxHPSFoRiWXtfxKjkz7Sdr1azcY1gZAq7QF4xZD8v2nNQ24MXJxfPnYKaQxhxF8m",
  "key45": "4DqVt5Sffd6VMPK9uFXQsFnKMjuaqoA24rEm4oA7MZwpaCEFg6uKpXVMXxq8s5vo3fuJzgUxPqkq79qEJEFHwo6T"
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
