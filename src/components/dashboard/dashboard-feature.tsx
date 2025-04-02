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
    "2vYdt9L7UwZdZ4AWdSoQx9NfaBNucVmusQwfff5fHkPqvnwCnhinoiSS61LFa1z9oguLHT5WKuotBaTCqKtN5CSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkZNY9Mkgvawfjzr8y916F4PjVjDDpW22q6xnt6Bh2rZwx8uDmbmbHgWkoBz6SatCWzjedrUez4yjX5vvyrvz17",
  "key1": "nmY1qwCh6ZnDabhLK8tWksdD3yZiRGyt2FJs1Nhjt7SUmwKKKvRkhohf3xdYFQxqh9P5b1HbB5FfX3Ha57Xj3Tz",
  "key2": "4P9i8rs4KLU1BQTXqPLzjq6VcG9Q4o53z3nioMywbiWha36rXCJrJDnJgunBEZs7h1y6xSRee6me89xUX2r9JB1d",
  "key3": "qUN6ZTyo2zoEHsDWq9fkKoJqPfTJXAiFrpaK8Tvp8oX6KjUvFFxqrVCaRhBTjJL7Ts8FThTmqNKwiCPQCrbJ52z",
  "key4": "vP3A54w5YmzWgjfV5X33iybYSAEDpjtQQYjLazUeeHdLgFz6Z23yFUdKKeur9r3JkmVFcF13bak87ZgJUTHn45j",
  "key5": "52Ki75QX82Xv5tYBXC28iCyiZidxkG13WNMGETssNR3KhhCgcokxdtLzHggSriQq7qr2SFtGJeoX6isuR431GAJX",
  "key6": "4FDYbC9HbjvjcwYnRYjqpKvAqPaJLU281xAfJE4CFwvKfwMRjxf1FTvbiuhUP3bhgLCMzGtkN2ECkY5Z1H8xJ5ZR",
  "key7": "4tR7naRHSs9Sh9kC5W3eQx68MrzJ7Afc3RAqsmbd8diUPw9P28N6xFz5X6CkZgETTt9uELxziw42K919fmes7BRx",
  "key8": "5oXfNEG2BuEj7ukBT7SGfs62NpTnwgKTGcC69D8PLoSYy8bJANCHGMBZT9eyhDAQ3KvYMGV7gxEySkn3wUYD6xmt",
  "key9": "5PdF6jNNh9yfBGK7NX1bPqKsHkVqtZHfRK6dUH5orAE3rocTW6VeXqe74KRVRSCwioE49aUBu2SgmnmQNb657NMB",
  "key10": "37RCGwwEHQG8xiKK8rBD9vQQAcwhe8a9VjQwvon9Zst7uvDhKhHhg1vsTqENSi1f8dJs6sqFqfNxJj5UBm6Eo2c2",
  "key11": "2Yg3Eu1HBDVA6zAmujpVvDmV3sM8DuRnaTmk1yYzMCzjksFffM8dFbvit8dSvM7mopFFkRB1hELd7qN9iVuQaAyx",
  "key12": "5MVffdFC9A1FJEZQcnt1Hba1L8moXSgSViSH6Tak6TMg9iwPtFKtfn5Qa5aRtX5Vubg2B7VoCbLaLc88iKw2G2QN",
  "key13": "25B4BsZ6v8gnJYCqjNxp9beX9Pc3XH5ZQxsiCMLxUWXCQ8pCSbofxQc7nFUoVeLvNcRRCX4766LPiEnnFqmJBeXa",
  "key14": "35Z46MhXAGAE8Rsynn7p3ysww649VRRwCMdnpXYM6z55EjFzeyUKVwR7t2yMdVShMyyzcgZ2fma7JLAMP9D4AEbi",
  "key15": "5jQFsG6hiustqLCqRnoyGGG537Epv3KasZi1rqvumdBxWe8jnFmg6Dr5G4ydLqtj4B3WbDqsRZTLgendiFY4xtEm",
  "key16": "4aD9c8XXse62rT7qFaREDWtgpmEWAqSDtyvG4vdQymvovTZ1S1FAcPzt7kRMQHkp82GmzjDS9kWy82qczvY8m7Rx",
  "key17": "Cw7G7sVdN76EsRppA2soUrZHHJxQJugaoEW2TD7rAFeLR32SdVTvVxTyv7fvxxyc7bPzF8SxSYgBq36i5dg8xra",
  "key18": "4Qc2RF5FtPCNL3szfqVeHuTdse8VUhfrpmsyJEVQvaaFzZ4U9FDrZMefEsk4gYcfZFHg9fVU4j8yrJ2Thm3s4XH5",
  "key19": "3VZ2Ym6ZyNM2febUyZhkFRw1SiYFrtjsXQpvofHkJwXrNB2jNK9WDLsi9f2wHhXcxYge5MyS1cVpkQLGb14nBmCQ",
  "key20": "FRiwJ7AtYnhLrZ5Cj84tvWBVL5wdtqxf3dJv5KqqmFpwWuEXnofDCLBx1aGQ6W9Th3DKq3N9dKG8veW4V7Yfy9s",
  "key21": "3kVTg3Cr9nhxH9x91wTHmDV1MX3HBEriH3HuswR7sXroT9CSyJxkyAtZ2oxnqaqbbJ1bRr9mv7aP6yw8zAE6ViM",
  "key22": "4EBUdjmkKRdJkdAtw8QkfVZUiKHeQPyVuoAQWQ1xtsiAgm86HTBReEynTyw5eDnU9YtcRjGwiDvNDoxHHg32BE33",
  "key23": "2UQqMp3tL1osrkCizyrffPHYCcVDVRNBLh8rEzmpkqkRWtKX3JxdkVj6UGsFaMbsPbgUoDAwPuuM4edaDosVo61G",
  "key24": "Pg6as8H2KX6Yxcgm453BNcDXHvZ5gt8NH4owRQYBBATniMXVWkfNrZA8M7bhw6r3QPeCWdyiZyeGJmBUJ8JHVxG",
  "key25": "3wwM5HrPbEzQwC3psYEFsPX2kXWK4gtTYATsNGmVJnB193ZF9vjotzdNM7e95CMucWhqJsrLfK8ruP2YLwxe7crd",
  "key26": "3UZyS4J5z4QHhiAZYw3iSuXPVJqxxV5nQfdAz7TkGFddgas1M9UTysu1X9SCSSpdYp7sV9MbRcak52AMAvyHZiu4",
  "key27": "BxjhGxQd6FoDFNNTNT3fQLHu9a7pHoBwB95u7VCL9neXc3hEjbV3JnMBopeRor3EYUyxNWuqBzkg9mmy8LR3vnL",
  "key28": "5JF8hEz4eakjVA5AHnPpuVr6ctF134ufmbaeq6tVtKV3GX9GQvTJygTJDzBrfUeBdFqmJ6suzJNxEcRPfH6KrewN",
  "key29": "3sxUwXUsT5o3rqWXjtDBQwWbnxtamQGaBQCWCY3KcmDDc42ZAJ2kuoTH4LdtceaJdUNHJyDijDHzqrjHkiTmQz5L",
  "key30": "3d9RVM4RRq75ttwMkeZHBKgNLYtRC6D5z9fkU4KQ3xeTBTM7sRF5nnkq8SV5dbktnZ1t6LBm7TFZaUBi7VeL171V",
  "key31": "3VciofPp7RXqDaZ8NgdL5nP9NS7KmBvCRA6WLad33th5vPQvAToYaGMmGrBZhvrDPPFHkJHKSkKgW5M7Pq5ksqaQ",
  "key32": "64qj2QnRduGESvgiT3Q1qvuCH2y9uE8sun67tjxT5aep4ScNHSUpbThB8WppuxZpfAwn2qfXu5uF4hkEBaYss3ou",
  "key33": "87iQpu8k2BrMPpysAs7jDmpKJuz9cdBxqaw95MBvXCh5ToLhMWmBN5pNnEKiTHJDbQHqwnUCixPcfkwEHKDucme",
  "key34": "4GT18NhHD1JxfauG2e95UtYVN27nGjZ4UFUBKTC9JFeMeNFhs483joo8vUeKPXp3Wk2wu21xPs5FqbyEYr9vvrbi",
  "key35": "4Vdd8M3SNkZsNG3fTuJrwC4fvFJyap6a9FfrPU71UmLTYXMtJPKRefbDnAZdYa8ocKXXwUWsvTX5engbTs4YkRmX",
  "key36": "4WCXRtGCCRYHehRCwf7YiGAqNHuQ7GXTq5uMQDVgAQ7nu1w4e4sMocytdFAKv8qWA5Btk2S1JE4arTJL77m3X87A",
  "key37": "3SQcCbKfvJp9u6wDmbB3Y4JejQRqfekyy34ewANjUMTuErpe4TMinkCwitih9boocCfmos6sUErPuPh3QJL5jdny",
  "key38": "3imDbKeXoH7M6sgkSU9H5NPcweee3pDfxWnk3XCQrXUVaR6Lp9diy8o6ReXvE4HuCazKoiQ9kQk3ztnRht4en9pS",
  "key39": "5SDJ9hhNH1tUUJbsMtQPaR3Pu37h1vC5oHB4fC76fT69suVrrSST5rdknDZxwqAR5HrH7bWrmuB4nZjcrb8osha8",
  "key40": "4haT5WNN9qZS6UigL5Rv4qmqkMoMu3JYMUr6zHBNnwKZv33tJH1EHYJkaQD3oZqk8MLTsohaX331mnKWK7aEwDi5",
  "key41": "izAED7ncCtN4UdUw6SSFDVT16yHWqeLz13pQDiSBeJ1pTk3mSNsoxebPqxx4DxpqiXdaj93dTMmi7B8eRxXMWqG",
  "key42": "4RpdjF1U5rRbvs99yT6UFjC5HKDy5hiVWRfLvDoTRkzjhny3dNNbgphEE1BqwnUbjHiFLDdCGTULqmDSK5DDhSvs",
  "key43": "3WmdGmXhbycDzjhUs2MqwaKsz9nGdj8ZVnfYBA5wR9riscy32F7RjZzLhVuUMCbGPsp31eMu287GSp3wbWNAwcBp",
  "key44": "5A8nfdqSJhLUN5XDYNATWNZipzh3162ipuqYMxKVV2wKJNexvCwxJJk9QmddEFaSXja4A9pC4AwbN7njVnhPX7nx",
  "key45": "3jumU5eDtAo2p6U7ujaoxCo72xHhTLY3tK8QtF6oHrCuTB5xLnbXY4LLx6eorQEZjCDgGYLWLaay1qVvC8weUjLe",
  "key46": "3pMTtyYWKs8eFDHMui333BCmbz1BCDWCT4vEKiLpxYyyoBciecGZjT5c5dKdwXjSupwSa1v2YDjCoQPkPWmBrAnE",
  "key47": "4aGVQnjvMthogKQizm8XRhz6Hw4YpexxEbYmshPequFFFbw33cqhGfSFMjuvby8p8AseYoi4A8pCPfjXNKqN55Bc"
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
