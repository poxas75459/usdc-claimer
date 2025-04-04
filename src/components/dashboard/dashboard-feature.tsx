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
    "KXvMG2NDYwgU8gX6AE3MTHX9QnQLFS7Kh4581s3GP6FCwMbkddNDMZhPHA4m9NUX6PizJxYqVXZdRnMbnxuiLzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRRC5cd8MCyvse3yXSmKmoFLE9HFPW53oeA1v3AgLHJXYRJ34SaV7U6aXmKNi4e14rJCpEmuRxPUGd9WjcqJxmi",
  "key1": "KmHnnpNdxS5qdzGdcBaMX2einXPjYazryksoZy2ybrYtULfoawnSTWCw9hMSRMzjC12xJnCShamHS3ghJ7SnzVU",
  "key2": "4R9k1bqmTJinecEeAHj4L5xFqT4Z165hWQroQjv1yfHTqwFa5tqDPWaKbZQPhKMnkmms8vyKdPWo8mLMEF9e6tq",
  "key3": "43QfYH3Bpg7KnTzaUg7rVATQ54GCmGzgdeptF4wRhKDKFxCYMyLAznCMdKFSkgNrfiZmatDbLim6vp26uMxqEwrX",
  "key4": "4hKBmRjwbhZ8AZrafdxRgeFxrHjZ82QtiG7f3xfJRUaxbvZqr9A31KhGLiQmtHH2kwFQY1KQbzFrGEnH2CMVzrSC",
  "key5": "2L8Qzi1Vra3N6zaJMf9FVHjWdaZaGnN21oR6z8oUsdN4G8nreoSdYSVkFa8unRJLEPuGDLYcZHMky6jonNfxtzeL",
  "key6": "3dXnMuN7ySeAakDUtwyuW8GgzRJYTdQHdiEPXuQ9osQVkCCqT9RrTaup2QeymmBzNa8cgvfGjedtfESasvRdrd77",
  "key7": "32VeSiyT2RqwLcTVVUx9eaRSjB6oXr9vTpcEWcGg9ubodXUwpCRjaNFX8AXgV4XPkrn4Jm1ucpdAGm7zoGu9xjES",
  "key8": "25qvJjd6wWt7bfLo1FSkSjymHQghfAvk9fGu2ScCCCjf3K7H557LP5D9CRJmAuwjGX5pnm8egmmkYDEpL98aA3GJ",
  "key9": "XPB9DFG2RnUuv2Kvxpao8NpX9X65iiiwAyZVh6TYo3jivQ1UoacVUrtikqCv8hdDsAbLB9nP7T48Ykuqqtug5PP",
  "key10": "2ynhndXSvxvQNbfMtLu91hjbY4FQXrB8QT31kvmmsWiWJQiuRoabppDhVQNbAmZWPwY3Y1oXo6XHjQuTPBuSoe7v",
  "key11": "5BMgVPsXyCnmM1k87RWitRrzD1HZU37dsY7RXf7fjAYTSS4Hbhj2iGoM7m8TBW8woSWhR74y3d8ktw45UV4aq4w9",
  "key12": "QiVaEgLJXPAfv7PCTpRUhd7yz1RpDBjMCmqERS1d6gfRA6K83GLRQgWQ5Gv4ecVsGuT1D62UehGisNeWXKMGV8F",
  "key13": "5doYtsB7qrP5ar8LVLXo5DKBVcKigd7YpeJDYJt4ekdW4ME2eMS1us2YcPM8RnP7pUP3es64iYnocBuJuAw6H6Ax",
  "key14": "3o5T2fVeZJFKDNwjyPgsZs5k3kH7iK65CLw7LCqFhE997jVQQWvoLHSkZZXnoJDAWUmJvjvShQXJBDvwhC4SYL4N",
  "key15": "5kQbqkLQm1tdUVLYhthZjdFChm2BsaoytuDwkF3XJsbs35t4UNJRYSvAtuAyzza2bL4hpPLK5Nb3vcoCZrj32Lp9",
  "key16": "4Qnh5HmtCu5Yck9auysdqyHy4Ky7MHm8PRKN5db1FSDjfnV54YnfTb433VRkEnmY3Yf3tpZppVY2g9RUgAszE4i6",
  "key17": "2vprvdkEVVKiERGRYMtnhEeMPW7VPkacZFvN8XvJAetdE5sYj9jbjKN7XcaUqTDoEXgGvH1gnmzuY95733oAGQB1",
  "key18": "2Mm2WKui7ZaShfa7HuhragwMVn8wFUebcsex2r4FaAQGVxL99U5UMMzm7ACagFFX5NFiphZV3CCDXibdkbuKkE7p",
  "key19": "2NQXUcWMZcVLctSKbHJFLqN1DqkrRYpTDR6scZAtsyLq23cxEJ1NPBQ4GNdsDoGeDcP8tkJGNTjz73nxtq19EXFm",
  "key20": "3dbnbntswU8Cr8kZ7Qn63ZEsanh85S3anrXH4qSBUBcoUcRwfnBCPSRLaZfmiASc75djgMJydu2LV1BawXAMxWD7",
  "key21": "2ZGUJTyo1WCpwY6dVN4LqTrdo2CbjmGkPJMaaxxt5cxuA43Zg3Mptq1i757PuEup4ss2qNmBgjU2EXiE1dJUnA1j",
  "key22": "64Tm3mD1fDK4gNSAevGtaN3inddvKS3niHDtxrhmJcgG4nPDwxdSsNkgMzizS8eeST79FFE19ZW2e57pjeytzPEV",
  "key23": "4KRtXXApamK92qVzi3jDqqtETEkSNpEV2W7khQERRMFMi6SHFoyVev8bPY25St9kPbdiAjMwhitb2g7YvEbXFivT",
  "key24": "336HsVpUFroVvY7fwYXQqCpNdJ2DsuqzJaFATKeUvQ2DQNrciDuKh2oBzcXdyYD2qg3GNtCxsyEMsZzo5dBDJM5D",
  "key25": "3e4jTyAgDNFUPgz4fu6J1wChr5TCtnkHh9U4qSARHDWSBXas71pnZ1yNvYZwMtkN6t61d8SvGC2XAcfcL6LxHXYg",
  "key26": "NrE97Szn4ZRY97xGvcphcjouBfedJ322pC2Az9FEULYjJnYckSXUqoTGL4m2rpD7xTcqNm1WVaLVSwDCnw9iv62",
  "key27": "5r3hAzKo7E6m2XAT5zVzeqRydY9LVn23Anqy1Te2o6sx9B3XNrUDdJTpoK8R4UWxe3wawYjaNHPfaMLNHTCTfGJv",
  "key28": "3HxKyZajVcjWTiDjqzMLhSjsuhhK2SyQnGyCevpLgXsKFgJcXmj68HYgdTxp7Fi5NDEJR6xWmC83LmdfG5jwFvRi",
  "key29": "5SfaD2g5rqRCmPrvNSm9tNQakg1xyKw7ZHqjDy5K75q1TqjsGrUKxVusUuHb1BvDMwAByFqxhYdPir9D7eZhPbA3",
  "key30": "3RzYM91RUExWGbVP3RuGuwCGos6fqqq7NVBqqFxpAGTd8Fcdx14C3vHH59UAYkzdfCqmrrvJdxSjfyScUKGN5tRG",
  "key31": "4d6rxhWmVTXe62HQeC85AkX1rTXWpYFjGgAVQAsx8Wu6qY17Cmq4Y4qtBFbNXskdWMU9UahArrAPD9My2UruxMiv",
  "key32": "2zVPjDyh9woQxrm9AdVgmZk7hitGT9TgRX9Hi76ggseQ4h9WZtU2kaqewg3xYxB5VPGySnFvWzV6XYabT83URL5K",
  "key33": "5pgKRtqbYToLfqmSCZX5kqeWKdAtRGECbcEbJGqgtYCwBmJXMfdtuKMT7NFz5Z4VguVMhwM1u6yLXBbqv1iB39V4",
  "key34": "4h9yqtkndUorXZ1CsN8Aa7m5zDcBUGXKDR7cv8NrUei2iyokqVcnQtRQbEbDS8ffkDDdSVKZ5ee4E8G1cYEgQ2Uj",
  "key35": "87XHce1FZQQbzGLWENLXjoucYFcCmZHaqYoTkSUDXM31fkwgRHHHP5jVcWFDig2HMGUPnjGk9f212YJpKyjys28",
  "key36": "5qE8MLSP1s5NnbSHEuG8DRU376MTCR5FdQBXZLx4MjpK69AyBx8T2dsmraZ3qU4BZRpFQekRZ2yVTmYnbjcwBqex",
  "key37": "4x8hDwGzcqGAMKTe4zyGipx3pqiKDVKkUAf7bbraqpicMXfpwxfozRphbMqtrUvcL4qS8ky8vs7HysbiEz43THMF",
  "key38": "49fMfPMQzg87GZodUu8EiQnyFdHv5Zz14j2M1axREoaVPJD4ErXBDruRzw8fMqCop6vTj2TUmXvpZ6AQ7k8tYQ7B",
  "key39": "2zNs44Dfy7LiYjNh9LkyLTFiZwK6UPvLmhhBaGhsiB427HbEepFcVApPNdv1GKyLQZsCvDo9cWgSDfUxoHMzDqFE",
  "key40": "2z4oSUNwmFugrSMtpQKUgYw6rk4WpFUHYJU38DJQ9tXqEGrNco7F1BTijZTXBkBkmWnbdCN4x2TZirjut5v2avkY",
  "key41": "2ACjrz6wUTQxvzFRNZyR8zjbtctB1k71kAT7U8rBZyKtkWo8ssAfQvVfzTseRYhdHiMscW7c95n5tz6KSRoXbHfW",
  "key42": "wXPeUjaZ6bwa29MzamG7HCUQ1o3iHLMAvwh3rSFnKZt524hF2JP11Sw5hNTB5YVNAwmgtU6Hc8PjQoeVctRoFAt",
  "key43": "4yvZpt78B7vkUnupN8b2r4wCJpTM1i2NfmHxvbtCDtHPgdZoAzTg6e9SiwH494Z3vd8bh12TnmYVNrCa6T6pvbkM",
  "key44": "46obH8pg3pUvzxqyccP7JxM46KRbqxhZ3twGayLTQ5Xg2WjD2jTFNvv9tzgGvHVcRb5tDFKTwH7vye7KVg3qFMgJ"
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
