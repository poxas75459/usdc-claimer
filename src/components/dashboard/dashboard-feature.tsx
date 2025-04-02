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
    "3qbTnVpRi137mtTwi6N35tW6ZX1uYYVxPHuF8mw8eDeMo68KjwJZ3rnduHeoxtAGJL8y6ThFvw1BW6LJL9S8fhwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sUqHgoHKYg9UinXMui1nLvssBLeFzShvqUDPmkZWipSf3RrJggajE1BFfYw77a11P9JxUyVeNKgbAQyappRomNi",
  "key1": "3NJRQh5Joaap6LfEgHiq8HEUikNgAjkfR5qXEwDdPNf2vZ8ZA4uBvHfW38QGU83L19YnNEAdwccREQ9eKjGVtVV4",
  "key2": "3PKgzobW8rJkBn18mvb8DJDtqhxUY5LDwfMcCL25SfmCa4zDRuL6GAYS52ENRMsvkx5ix9WNxKE4w3oHi7Aud1F1",
  "key3": "iGNNijG7cGWE8C3mtkRPH8ckPEy4dDpsPqoiFNcTm7EvpibzsABSUYVNr3S8w6amwnzyYSyQDu5dwhV8hfU6jcQ",
  "key4": "4WRUSNfbjBkn2EHkKvsNa31qkkYGFFzoaSoaieN3Jc2iJMPBso4FhQtnXM5Ti6A8BXT6GdheApTDhKwS6fqvZ8ad",
  "key5": "3798McKUjwTSeNps5wDxn72x7FeKDAsNvBYHnG93QNb6oRoeQZMxxARTdEUxvmgMQ45iUmq78eLprUzBAYpk94on",
  "key6": "2pPopS2Wq9grzWfjkyQQ3F8yQL6xMGQn6SJExWJkGaVBwjYC4anynqeB4E5wcme5rdhREkHZGgSUTA3NpTv2FTmk",
  "key7": "3GHjTBhP5PwuxugFgFFLh6btkKDpqqqCHM6LD2Q3MpUd2BL9gm1U9K3S1fiPHgJscYiUmCN9ANME9pwwKWBNDiYF",
  "key8": "4PmUXw15bxExh9XiYYVZMdn7gEPV15Q6viGJQpi3y8PwyxYRbPpVFmaNFpi6BfAhjTqbS4BYBQEwQgcY9A2Uuihh",
  "key9": "4LYRuKVjgYoACCVkqkL6uhF7U2599Ni4bS4YWPqmidg1Mb2Uwph2CJCnzTAn1kZyXTq3mRfKSf2g3p67vXf7Hrf4",
  "key10": "4WGFgQgx6Warjh4TLDvK5mzMcEhNuhLXQiTmeMXh2XGFzppmdwwRmeFCE3g1ZHMDKjewVNLJDEm4LtxotucRSQ1k",
  "key11": "2Pgjsiuq8PZL3mx9fnjWZSfPwXPAqaWVKFF79xyvPamiVbYmXeevFoVsGk38nDNFZDnSV6ZY6GjDaBCnZAVp293A",
  "key12": "VtEsHBnNQE3wSrn3wwtSZ54x9Xcp35MhMTrwhUid9J4ZYSHEEb879xWuReSwhTZmvnRjgn6UrtixzZEnP4uSnun",
  "key13": "MnJpRZJEEGYV9LXewjsdLFefnNyaYr1kpZT5goJhg1p1Fc3V2WBHY5pYSwgUYSFBJqn9a7FrsiCBDvxy9J8EBs7",
  "key14": "5SKdtS5e5xgAhHkaSAwTmbqjSoh7LLGPZrk48zWMLYLE5vuDRhiHtSg2uvW82sXuL3yHRzXXvMCZpPiaLC3E3kLc",
  "key15": "Y67ZEape3Qj2hMsdJRTtwrnzjLZTuZXrxLiNDscsoWDPGngM7kfMEaYctc3ohRdCqLdMcX7skHATSnFJtGH2kvv",
  "key16": "5FGVoaifF1UFok8pJQPbhv6C7yXBFgHvinkDVXcxsnbSSvRvfRZsDSU81ZopYbcEohWVtEqMt6KNTvwLANamSMzT",
  "key17": "99aUr2ChEz3hAuokx5tBKXxFPBvrncM5wX1g74sHg3XiwdbxyBcEj9RmEGieJPAPC6rXFWNvYDxVpvPRMQZjMnV",
  "key18": "2VrZ2nu4QU8eL2RGksc282NYvLJvJcfeFApuDYdM9tw5bodQaxDWkYKYAWmoUzYTvehyymQSYa7nutWhc6cPRAhn",
  "key19": "5rTrgKDaV8iAHxAV1mF9MgnCsAzvUUa4pu26fM5KvEgHK5nvwKqMXvCop4ZtKVsrZF8mx6G9kP9w57e1dHovFDoj",
  "key20": "3Zm7d9pPcx68cRQ3oW2MCtv9Lgb9QLvyD372ss78mGnQGuLUmHGULK68hP9CCWdDJMkawaNDd7FgmvspPG1MCeKh",
  "key21": "4xt7UCZBm5FmyqBoVAYkH5jKDCYHQ9Xvg166i6yon4goJaBMsCzFJz8H4T3S9WsMTAX9kg1rwFm7UsKw892yhvCF",
  "key22": "5x7rRNB4c8dGzQGLzYaofr6saMvNevEgXEsYCKu7STCvaTeDcKdKtxeCWPDpuZXZpvJ6RdEZxSb2nwMnMgfCPcxA",
  "key23": "4zraeP17XJ6Vtypar2DhBPoRu2VJmt8M5XjwazmSNcrysxcbokWgTAUhPpRskBYwAvDzWuNxG7PHtt99aDydVw8d",
  "key24": "3TupyVcqCZSaCvMbHFR8LCbumkYsz6ni8iicKnRcjrTAbqhyNV1E1X3vRgbd5oHpsy7DrNinUKdJBFVkEkBp2pUg",
  "key25": "2zeb19P3CenhA5hj7TtQLwjFP4GPd483QrFGekyXkme6RGzjvgUSDjE6agk9EZ5VxqRiXvDBmdBeok8qZhaWYC72",
  "key26": "34X1UKo629tYFu9WeaoouZc7EoTcBERiZJ99AyYmkUoWoJV721fH6nBWoEUazwZW1oYUigcBGEyEW2kmh4xdswn",
  "key27": "4krvrqCyKZZcp9dHog8ypVGcEJDKt5xr869AJmNfYmYSR69u58MFY7MiAxvt2euJJCxs3uhbSpR5TUYpuicP2F4N",
  "key28": "6zxNFRqLd3MyRr2nTHf8BT61ysgTTYDQMVhBSgitegfPbonao6qJwvDd6z39zDbXqMdLJY1XppgyWtnJbi2pYQY",
  "key29": "542XnbwyyDJeyoM4ra65Ru1sSHnzamhPAKzUdqTEscy8yFCqTUciuYX5uTcaPzZCEokZFErF6JWfNnPUWUk9Pzkz",
  "key30": "3YZq1aEFaMb2qTCNs9vfEfu1L2i2GNFthessaA32s7FWXim857qgqFLjM6j4vG7pKYGSfeKZmANTeFKSaanyCP1D",
  "key31": "5k4SN3tia8TjzTX54HMkEvLDnASgh4Gy1UWXGXhs89tUpqwBFnkRdTeU1ZBHdCXpdms7esDc7BsJiR1tmHsdJbqh",
  "key32": "65onYhTkB2LoZ4eyMszHrhUYCjUktdyGfexg4zarGjhqWRm5S2QvZbjkNSJAWUNQCMYUQsayFoPFG9yUXVRC4Bw3",
  "key33": "48v56nYDyEyJYYb9a8NRSKfgN5S4r1Rcbura5Z6m9gVCpwiUtR13pRSX8P21XDwgoPa5Xgbb12S91K9BY1dCxJRq",
  "key34": "5ZNybuvFUBrsJGLWeAzvp1h5prRVjDQUN5Q7sFoXQssbSDV7kqbSZZvxK4rgsbAeowPc2YRZrG4fbSge8KEQwVaH",
  "key35": "65y4c4uZwrw9ajd1nh6sjUGTZyfL1SkZxQoA66jGRpFQWKVVz5Wkvzs4MUNxTLdRA9cjAkYYBhSeAMM34e5EmXfX",
  "key36": "451pia872ra4dqziJFkXDxZDfLKfJLWrro363WV3vj7w1TQmL2dtLB6xSn5nWzrs1BCeawB2YcZehGok3mjMJdCW",
  "key37": "3aZPHDjL5VpsyW3tBU8B2wvMZLwXsxmDnyRRWSWaVKCLThNgb1D2z4dU7S5FPDYp26BjZT8Qs6jU8YYbSXsmXVLm",
  "key38": "53sAXYMajkXUxUFPksfTuHqJkhEw5TMfEzb58VLbrMTQ5x5hbGdZ8DxGaXFyE7PhzugaccpHK3ZBD7NeqDuK39PA",
  "key39": "3zwSsGhsg2sCk3KN7jX4UxApwG8nX2vsqi354LFEuaRX2q14f8gbJKCxqZsiNaHzHQxkfL98wF32155goyrT3TZ4",
  "key40": "tRUp8PedYAZoPwFckudixWrb1EF5tpENVrL5S4wrpKvo7A2j8QcjtZsYEcRLFzkMqJyDdGuFuJURsQizCpjAdeL",
  "key41": "4V8ffFdpxDhQaATsX6CP9roq26mhcEMvTy2M6v8MYf5hKiQ2VGqibAjcT84aebjY27yEQ3PYWKpgH7mgkwy4z9Ba",
  "key42": "QgN6TgH9sZDV57MxEYM9hfkY61SHQT1rNUjubekCXVBqa5Po4G4sCFYFZWAUCv621zij6TQcdFdrGKNaqWq1AH7",
  "key43": "2Ji6odjqRAHLzzhU2iLg5M6BPRz1sqzcWTpy7UStChSYGQCGRyjpmTKKa3wrWTUuHrUyz4RkdTGmFe585kyr2voX",
  "key44": "2Cxim4gkxF9m3NTt4r4v5A5WupFVasrHVDiHPQ87ZPGZPE1MRyWDX5JzDCDEDTMrEzj7aDLagt9pZbLrjDrmGyJE",
  "key45": "2Kxmg6uy9jbzArQnCkDP7ZNvogRst7iTr15P6R3ha97gJSms16MPFcsDXYBssqM4mhkZfBaoUuHjgFUnR7uZwA1t",
  "key46": "5Mdyew3UWmtgovBvjWQwZDWAUxfxGZWyhDNiYTZ8xUKHUFVZhAtKS6M4mpFWizfrfHknET4SkEfouqLe9vEwau9r",
  "key47": "2R6syDuYWbrXcXohHHh2cRfHNLg8AYiGAvzdPmVkQ2Egpa9WwCeDK2rfvimRCYp9xE48XPt1SmX2LkAPrNfw7n24",
  "key48": "2e89Q2R8MpVwFnN9X6zKpbTRRinPR4dS7X3osrsKvCgSNBvfoYMh9bsD1VJYt237UpkczZeQSaQDytokxBxtPWUe",
  "key49": "5gbDi7BoZTsi2ZDWxbYsjAiMmxT7QvaYXiLdGkXuXUqeqQG3aFT2Z78W8XnAURDfCXLUBvcQ7KirtvVq46G5FNyA"
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
