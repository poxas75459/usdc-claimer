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
    "4ZVusnTiN2eGSZrp2veAb6y8ouZunvSRJwWJeUHDUF8mMjwzFNVyUUZmeSJB8zqqaKHxCczGCXBdbfgXVFSRz34R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qXYHrCsckGATZXEErYQk4gav7sJKChvTTSujZB2UHsB2uPq2cjx12GcQZXUDxT6Bzrxes4SFKnHE4dw8V49BKjH",
  "key1": "59JS8ja56D2g4rWBkPTsX4JE7CKhrENit15go12F8iQnGMwwXJ6nkiZoM1GKiJSdiN6MqtYk8U3nMKXPxX9PZXwh",
  "key2": "2pbx1QBj4bhrNMf1NzwFogUMEcoTbgppSUGzaJDCwgwEAUCftepyjrvQvrECzjKETHrCs6eJspUmZRpfpw7qgrbB",
  "key3": "63aVC9PaNUc93b8oPc2tBuikoWtTBpJr5bQ8AJGvCse6KqTZd9HWFvuhBDaDhnwnS2ouZLiMZtWCQFCx3JJdEg5S",
  "key4": "2PDvAkzyRsqY5ZGpeExpUoY3soyUXMSHZniAftx5igVU3DcaRHZNUxJQ72UY9tv46RsSmBdFCcmrEm8yJgJsXN71",
  "key5": "628bw3299xZ4LerzabcKrn9Eu3wFTyDbeHMuaDdquNrWRPYSvpn2jc9j2fCf4MWpYME8EjAW5wirVF54YxZcbfDp",
  "key6": "46ocABKP2JYjnKHmz6qVF78uHn78ayybd8tcngB5gGTSq886LTsCzq38eZyBuz1onthK89cFUH964TiMXzaiN2zf",
  "key7": "4xRdzh2WRX3y1Rx979q2bLYQr9qXxM1SMnTH3nLc3P3Y87stVcvzL48yphuBXvaiYEuNgpN1CPZ9nvu1KjhxQEbc",
  "key8": "3orqJBZaKtJ6LQh28haVLJTkjyWf8VvRvnb8srpmQyeJFYqDFM4riSzpLjBBXTXZ6Av5p585j1Swwho4zVvE2PNW",
  "key9": "3WKNZJgNLZELMLcL72mcbnhAh6wFRF4393976XxFAGE1C4Pi6epu4U2aagBoNAQZiyfrbK1gTjMeov7HJFTr9dyX",
  "key10": "4kFRsgPAfeAN84jeZngdMpTzBDtn4UxaPe5vAhPX47yLLgzz5N2qkN72UEufFLcF3tpUUNVcykXhtqhe9gzYuwDM",
  "key11": "3VWyqRtctfZH3RjNxCP27WwmGVss3EUTjW2AJwsj4KCwYKKwwGHS7YDbuj8gBGUU2DCmxVHiD2SJJKXoHMWubAHN",
  "key12": "36ahneffspaLyj7fQPskRjymVYCnWhC8ZGz3tXDQ5g1kt8ShPfaL8k6D3paWj1j2ebFkbtwgrTrbgpis9rNUnUP2",
  "key13": "2kCi8o3uETRTwDrLsqxCSLZ195pmF8PCWGWu3MCdgtMtTV1Ag5NRgUoyW2g3kER2ViUqpCBBE3ruRCYs7i3AhYid",
  "key14": "4stckgFtzi5YGaxAETSqjTaZwAbvdd5o7PZArhUaLdzetQJo4hp7Y5p16KZooG6rAYHBUhVQSa6T6R3HuSpTpbae",
  "key15": "5mRiD2YNEhoHKxcroDrMQZgp8vAxK2EJSok2JasafV9dvzMM2kZDm2o7TRrwfJmB3xizLZUo1hPTxgyA9b7pjp9g",
  "key16": "5bjuU79V4mrZd15CSeddK3emkELPZmY1mSXwEdVe4MvmBYPwRR1uRwrSgWHFoU7s4yk1Jpeb1EBP9sSJxUWCzJEW",
  "key17": "5vsJKY22xMfRavzKXpoDxv3XjbCsZZegB5rw4xfaPVcarmepBgimUSbdMzCxd1MnrP9Mw1rHjriPLoRJsoy7PZje",
  "key18": "4rP31qHoU7XD2yqvCBqQnFALMKbnwgkNycx51UjKKnB7ZFFhfxTToXAFAdkDyt9wC2bpT96pPJ4Vuvgzr5NaJew2",
  "key19": "34Yes35F1csp7sBoLQP9ZATNeugeLgCCEqy6gwDuz9pb4KJqhfzAF8vZD3YyKbYNQm6e4UhAk6gzuTaizHc1ZFF9",
  "key20": "43vCuia2t3R2rY3gF8ggJmywvxssFXMR5eqgqEgfzDutui8iTEGwTdaZXigHs5pH2cay72WxMCijsZLFKXR23XTD",
  "key21": "5d8KPPBbdN9gz5nZWm5WjogaNbfvnz2EfEWCx11gbDLS2Wizk97TF4eWTmMJxoiu397mwee1QXnveSdUYKYhL1GM",
  "key22": "36xj9ejFqG7QuwTgAx8RekSqeadA5NJkc1PuNguSoeDks5TcWdEokyNRTkwXtAAsfw5istuemfX1JjTEgUwgoaTy",
  "key23": "3eWEjBWYXjMBs4Kh9EeqoBD4g92TyybjAs8o1ekkwVBrZ8G4fe2hLS2cbKzheKdTvUxm4oD4vYe9Cc8nfVZCFDFs",
  "key24": "4qbBodMRS3WRWPNd7PcfDUkwTuy6wTAGcgGZB3KBGAqzb8cgCCByMEBRmspsGGSqMqSYn4Jtpb65A2D6cDDsgYgT",
  "key25": "CUC3Nf11VD7mAVjqmkmSyNh9CoFvBMguc1hGJgxTSz5X8muEFnSAeEHVhcxSjnFGowQtCeDaqRXDfNgV2gSZVo6",
  "key26": "mgh5EJBLHNxrzgFj9TsiPCcw2MbP69zUcx7JSkSjaT4GxgwDPLcGSVeamesDgYwdxRAXTpz8Jkdr3Mt53GkvYdQ",
  "key27": "2VNZ4GhTCs18t3WZ42nvvNDsRBEsR16j2s7sb4rKPRMZ4t1c1GmjbQUFWGKuTYJ28gjiGBVv3ghHN9ksncFxEzR2",
  "key28": "2bnH2JHLnshUvXsF1vxx39n8A91h4zqUenUpRd7JCpEmzw19ysv389CQhPaRkHWQyEbwMZiwUJqhEadKaU5MuUnq",
  "key29": "5iz4qvm4pf3MVDNPxHz6zhqpEybxLdTqymCGiqLRUVJKUt5XrakSWU9mUMReLdDmnzYTSryTAxHmgpjQFenPwgJC",
  "key30": "5hSkSNctTjxNCVSixQBaYdRqG2Hca3XLcLUV6LA4KMWjv48V8GmocjEsPzrbgEyfmtnxRCfM3QQKNBAwkHNekfqm",
  "key31": "2YpQ2PnR4v9PMXwpKdE6ABXzJSwXSbUZPCmwtMENEwsR6jaFV814zbgwyDq6u1Br6nsuGqm8dCUr2qHWauRmXEwi",
  "key32": "99Yqtbngcvx5QEw6oA2xNnjNN1gzXXtK7Xt7rCMrZ8ZcCWvnEihrEzbGuzM7NAucWhzsP8TB3AUT5b6PccxCfNX",
  "key33": "48ypw4v4W6G2b4Mp7g55Nwdx2qAS3LrzHGHK43bKatd5QFCeJ4RDK1QQaQ1bkAe7818peTqHSiSUyNKwUDnDSycj",
  "key34": "5UtrJUHmgeCCQbKfweRj5vYpNU8jjmHEpRZ4CwL6iU5NhZMwV8E8N4hmRZZbXtLCHENcg3E7LRBVvReHMdQXSm3d",
  "key35": "5uxHLNnn2PbskvtDydh1jttJhA6P526ydSCRYdiXpgixCACRttx8sBLkfjavbdHGiPqDLzqHUcEnCbCPdLNpHn5w",
  "key36": "kSttdg82GpDaZ7QiQSoVg2pRHzqtLLkD723cGUAx4vz6jJs6eDpwfMXB4basqtzW4UnHAFtFP9AQQHhRGHbJ3fC",
  "key37": "3Dso9ByvBVK8omWbkvJQmF1NmbkBLfDxzw29mmUirADaPN13EEfkw44muG3z99qgF5PXVyKqyYYfyudgMC7Dn7zy",
  "key38": "4UHw228tHyTQnCZNqDNTN8yhKzv6H8HJi6EvxigtvSHVCnEb6kg53pBvRSbH5AZehH7WDePw46skXp8XH69qbd2q",
  "key39": "2gYNwya4SZyMfbjx57WrWCB5iw676qgU5mio2YbemFAr8KV1DwPrTfdWKczUUQ5bcpjnZKjxAK15GzBvPEY4GYEg",
  "key40": "2JUF41vMyC9srofiNGnmQMdVw5P5oFMv8JSEd24SSPLv8HYakq8zvGkyDaRW64EB3n614fPtGDwyB6bqhzFWmsAL",
  "key41": "287Ji8BpakYbUBC4wHQFDBtDWSdfmL3mNQWVfz7JexAxjBnSWJGoo8ZeRGNxkE2J8xvBPKPF4YvrnFwV6AvjG48B",
  "key42": "2z5vjEzpp9Dv1r9YMKiv8pvhHjm2UyY9CX894cbBofo7yd6o4ma6Y2dTDL8SHzQnr671EyezdoSiUA9GagTYpTZv",
  "key43": "4LCcNcytQFqzY23ot8innXdGWefYzYxKEN5W5xwAjubLzDBnMUBCsk3JR4NL4ahnNUWoZF51FbBU9MiEQvyzy5s1",
  "key44": "4W8Nmb3zGcVneyRLNZL5jRTMHBkvaY4WTiRn1BeQZmkPh9GDPrWuAgNTFbK4i2HuBUL9zTKoBU992J5FwrG3qNB8",
  "key45": "5GRC3YmTc9GwisK15J7YLMn57BM1fsYXQ9b5T7ZfpLzpQBFoXQB99zdUfKbzhPxBULJZVUVfX2i1UmBjDj3d9fCd",
  "key46": "3AnSx1kU1ptfytiuFxbvLhpwarFfV4ToMp6JLiFkCgHjAUEPXcuLqioVGQZVahu9ZmNAwa7EBuiWqcD5eC7hE1o1"
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
