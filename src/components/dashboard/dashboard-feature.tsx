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
    "3jCZys1WwX6Nm2Npdajfyuq7RhgkBuZqGWZqETH43eKYMU65tNnfD2ZFHSd5ykcxSjBRzx3kBxwdFFBGNHqkEYRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kn2GFyEYJKiYwrgbZgawqkfwZyFpPKdLBcjmHUEFQ9nSYDksXr2tAe6aWLzJipsS2UDt1DGzyk3Fx3AJaY1yW1s",
  "key1": "HSqK18Cu8RnQ8obeQu69E5bcJwwL8Tj1JmBBfLg7z12tYMEg55MvGkwNJkMyQhoA7VCyiCucMH27yTXgBYMFacA",
  "key2": "4k6B9tTcbJTtyu2ZV6jZgVArE3wGG2FUmjRSFhGdwmzBVL9XQBqGmiugoLB1HpkfFHEM9n71H2QR2LYxUNVYq5HD",
  "key3": "Qts1pn5ERoZBHYF9tgmqqUh4c6NGs2vpPwDwRPvEz36qxk9mawxXYiwiLiLikTjsLXs1vfSAv9dDmQFf46keRmu",
  "key4": "4mk9NJQ2TPBLndxgu9wh1oV2Hq8duuXq4bCD8CYrAtmCLF76M31s6ttgYCWyNrPnhCHgHGy5DrdeoRmmfhgiyLri",
  "key5": "re1PaJYB2JbtAHJEtwyMb1rZSUD3TysFyT5H7nutDGCWC6GwLphU8vzQnhVLx9swHy13rg8vdpbNmKmb2cTcNUn",
  "key6": "26xRreUNCxgJ9eyKSHzke4dnbBVDZ32cuADkpiPMiThJ9JyJAywK5jPRzgnthCKgJSNx4TYsNJELphDGU9on81VC",
  "key7": "3ZeZoysKSs8XzDG3nk7tTjDHnJXEyUWzqdeegxjHxDqszsw9cP3bqrKuBgqd2ZiMBXpmihs7GW915arQn42xhMYF",
  "key8": "3bmtYd8DPS2p4LYNvpwaBjMAVFQnJPsGqwpBu5jc6c2kDA2rokMKijHLmB6UrPSYJbDQ9A2PLnoTAxSVSPn7BDR6",
  "key9": "39pfaNtrdScJoNWPpbpfDcdgDjDcxxp1sbvuircsgFwHgtSL4mUg79dMf93vbCEt59hDc2aDs2FmbNZNsxSPtgsH",
  "key10": "mVT8FST8V1NS3qGM78eZjrHwCvEoua6KgmfphTBg7Z4A8S819ExidP8sr4bPnY9q7MFVc6Ep6rZqFR1BRnr4vd7",
  "key11": "4T8LZrWWacvLA1Pk5JHVsCzWYrB2HKH8WEyCtfsSqD9P8iM2CiyxiaLGWSULU7FhfXR8Ze1sCC5Fa46jkiVriunX",
  "key12": "26njaq95ZomZyQxZ8EDU2Z6QWqnxoaDhfrcKgViMv8dAwsWKAET4tpE3yLcnL2qAhTyTFuW7TNapgtyzaisBf1k4",
  "key13": "5NNNh12hWQCkZhFmxXLN8TYMTFKfJeaeLNkWwDKmB9derkVxggnMCGKYHC3G3Gv4A11xAJN2oD4MmQDMC2qFdSCg",
  "key14": "4MonNF8DGyGh58udVnNx9e1kj2Sw3Zf97b76cgaHf33MsdRThNtJv6hb8HnK8D8YDZYepq7zao95Lap56u4rD6dx",
  "key15": "2fYEScoyvDX4cMwsHisrVSgWDNq2HVhcywSHbHdFx5hf7kZLgU5C5r8EJBarSKvxuhGx5iopXhHuGCex11frsm2Q",
  "key16": "EPnRUiko6ZcvPwKKKrrtASu1vvtV7ZdGkH8jk1q5TkWixiUQdd5c3RtniJySqeK24byyQghzAqPNzib1wrKtNFL",
  "key17": "4H7ni6ZqveciUKtYzh25CniSv1DjNgmvADNNN3SNMUkQdd3upMkGFCVQSAzig8WrLf7WPsASgNGDWF8WkaTcMfEf",
  "key18": "2mptTKdd5Hr3s1Ukc3drYDRr6X6nVotm4YfHgYBk5EqNs4UrWmD31hxVYa932NZznHVB7WXfrZ5ciUJdYJmT2YmD",
  "key19": "3bJwC95dbatJdLvPNfzdsz7nTJaZmoRB3EsJT7en43k4KSy1anjDima7AtH1SdD4RA4BwUuab2CABJD4ujYasRtd",
  "key20": "6x3X3sWxKX4zPLJsPGpsFWJqfUVJ3VvKJBLfKNTqWgZ2UmWnfNoYCoeYvHSvbvHHtj9Rxy2e1WP6pNtnb4gXNYd",
  "key21": "3stAnwJxUHRnHrXwwPG8fR6UcwsUngyuQUUqpokkC5RLH1dPQKCXkfWVTwx33Lvig74YMGvMG4FEaLf7b9Aa3PXD",
  "key22": "49sMXoWF1xifDmjcJMd6R8aggD1zLqhstWpATL1nWMTKJHV4eoZ3ShAakF62A7PAijVU9cQygss9FxzWLAKg7hD9",
  "key23": "5za7DexVyyJgv3iGm1eCctubyavi6TjfkSmvQA7Fo4PpjrSD1MvknVMAzqyd5zoRbiK49yaRMsndXyVYr3ocKHBW",
  "key24": "2kStXJC2yNTNE9q4BsF8EVsPdfMaEoHmANt1DbZvMBeYPxoeD5BBfxiyQuoTUB6NicRBt5zLAYfjrZ5WRESLcV6a",
  "key25": "3u6AeaZfp3sKodi7k4NjEu46vNwtPzwfViTRo2JDSDqnhYTN8wjkR9Ko3zFLgLHXERofbezaTPvL7NN9TTi3mH4m",
  "key26": "641xP4fHVQV3CjLV55K9ZuMVQuZB5iBqtXfbucXJkyqRpTPvqJDx8wKB1PSwWhPBxB1iAmzT2BYc13q6MZNbbs4L",
  "key27": "JLNDzgkfxHYbfaXNCY5RcArB435xXzXwVV62RcWMaD1gNaeGdWniL3v72CRMAyPLMcakPt8EzkuxcCauZmPo7F6",
  "key28": "2aH6kC3CMomoZutEM1JjdtDQqozZJPqLfQXkcpX978Wjt5qsm3Ct59zV3LVV2D9mCvZwXNuzCySP6EcrvD4JyHVu",
  "key29": "2AxWFGmz94qQW9Cc63WeKx5rfJCjWusS5yEx8qsSnqBhXtRo3bsk1TQtUwKCWDNoraqji3wecoU9oHNbzaim9avy",
  "key30": "qrCBYehttDLZbhsnY1231e3z79hDEGEoSpmRSEY4Z19fKToBLaZXG5LxcUjVvNQNVZJ8X4NwyhioMRywZD73wEB",
  "key31": "5FZkQc4zU3Ga1f6eVXWpfHUzwXGLZcNLJHVQStymMfUMrq9hH234BAyHmkVa7HDCigtZBV2pSq8xLizcBX4HnWdy",
  "key32": "4hqMg87UKAjfZxmACU6bRrEboZmormt5WbkNpyBTxA9d7hDrqukS98PcXfQQvfKXeznMsjrcwCbSVh4m3PgzoZH2",
  "key33": "n5P7U2ys4dfvjUyCw7hr9aZbhjJ4DW1sqzM4mmGsPPJ8VBTssacuion2WrTk7QfCrtQ2NRF8HqVP7ELBAj7KP8u",
  "key34": "5reBTA2wuhZMw1BaTwJucqyGSNcTuXCJTPm4hpkKzU8sYTLMT7pFEYsDS79fSwzGqbH6UGwf5ALgnvTQnP6PdMsF",
  "key35": "4FKvf525kHj23BzZR8ghHc7UvE2VudBP3SAT3gT8WgbyYeiixMqchp9AFjTEbZa6eEA4YEn2BDQ7s6a3sD3Xdoj9",
  "key36": "3dp3NKfRXf5UnLbEK13nXDz4Vu9vBFGMFoBingdt52hPRpoDfXykgbsnVDbeAuVeWxhinxAYeovAtH7xVwoGC9zp",
  "key37": "4g7TMYPKtBxsW4PNSYsjLbYWMMzF5kDrh3i1cDH6fEftMsvizGKXvbXb3mf3e3CbdZvnYdvMNLuG4CGNGjKaEciY"
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
