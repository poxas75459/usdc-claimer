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
    "3Au3s4MUM8jdHPfTkqW5HRE8AL4WCkLpaxsDBqivB9H9AVzXYATvdVJSr2Ch4bgAYiGQuRKvHwpAnr4SR6xfVjJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G94MRfTEi55ZgpAmynXCrMQyM1PF6eGxL9pmSVdBUXtZ2cbx9Keyxn7MzW4NnR575BqDqJjCuACygpp82zHUkcj",
  "key1": "5jHq92ME1aDuaXQtFZLsPXhENKVaGvZsbrJA38o7RojPcrEaoiesJz4wWCgBtuxxak3e6PiuXTbjRvh9cv7Ehjmx",
  "key2": "hVY485ddGGS95355yFw4qWxc8avz55eomgWnZGsTiiJEHEvLcBzJLkjaFX3SfbJbsPFGr7j55PpKUYPzhpoF2pS",
  "key3": "2ey1JrLQRGbNd7u7CZr6aNVPxNe2H1EZzZt7t11wyb8LAgY6FFB6s28TksvRSeUKXBZeuVCpdL6RCTYGKs5JvAqN",
  "key4": "pT1cddUZK3FYU3219ktk1qKZffZGfWXdAUTXY8rffVqft35xQaMXLmSQZo3wcbc5cn31VGZTKUMiKmKNdhPL9pi",
  "key5": "4TxBvghibEjNm8xcEjDPUzocBfur8QCCKPAn9ChVni4bRwe6wiRp9Dw8j7oESzu7WQoFNnU69AoK1j5EWWByuH1G",
  "key6": "eR3YTzaB3GJUDiQ4GzLFy61Zxix3TK8Ea8yDpMGVHFbstNBz4cCjfy13H5pkmgDXssV5xCBhV66XDjSMXCVsWzv",
  "key7": "YZjG7qnCJpfm9FoxX2YR5x94QhuKbBSzuKV44hrGYoWCp4jnJDANH7CredQjFnSj9pdYZTRzTFxk7HJ1P4GMWu4",
  "key8": "L6FSetj1j3a5WA1FD29x1L6nu1Ms7NEUGuNhNSL65Kw1HCbNPLBRkmcSW1BAqy5s1oZhaqEgq2qUKveSWnQUajt",
  "key9": "5Y9aDQdJeDVEU5oe4EuBpCZP5Zf3kL27NuN4bEekNx2mL45zwSt8q2akqb3EWnvyn1jiePy9cdtRGByTj5WQXwzd",
  "key10": "3XqJvoZQnJSHvKtyGW7vUWFtypuctCB8JK19J5X2S4UVjkyRjuxQzUwh1yx1iuDSrbYFp8r2sua51iCm5RTJ9RKC",
  "key11": "WYEspv31bVRxkWmrFtTFYJVFVhN7kkXKkdS5eYvUSEPcpCmydx2FD7xPdQ4WMPGnJa9hBUkJiu68Q25r5xDG4pc",
  "key12": "5P74abuc9gafLJjjscEL2BZ33DPzDjd8nHQ97oHFMevK1dTG6RBNCcCVvmkbJxtGKosqSHWMVoi74hMujRQKqFYz",
  "key13": "KQbTRP8rE4HnCiYHB3GEb8qYxVfstKj2pw96c1gAWRZC4uzHXF9cwV585XAWJYSStfqf8rjJuChEhrwTpqn1C28",
  "key14": "22iChzw9yoE98aoDx2kzb6hNTY2w8p6ipBAFcXmx7a8WpzKEQCHHnB3vL4eP2oq7azCLjfvzKUjd3YzND5y6NJ1E",
  "key15": "2a4Yx3ugZyucxEe1DNbBWNX7iqP13FQT9JoaqKYnh77Fpr5D5SkbHoAuyyCtRUFJTSd9tdRBCo6oaKxGCqHewiKe",
  "key16": "YoFUAHdiCTDheEg6BBQaMTZp5Nz9JWMQjftLKaxRfdrHPhyqWQFsxPa4qRu2HmWn9hf6QEkqt62mqSGiF88LsZD",
  "key17": "4di8kA1PiSHtE6sjxvWrVNK5UzJoPG96tnhvriWbFtex5PjgiQrpx9qCfDGAJpyFpCH1WY8JSPAmjjiVNnmzc4Q1",
  "key18": "128yWHdfDRTw7aWRuPfJ3S5Tgkg9FxP4VGQqsybs74ExMRteNoaeE9mTWzLCyFrS29CWdKc66ztt6sKtG19RTcSR",
  "key19": "4mNNJihqg7Tj5yneSXTWieGdPehb12Eoj4kFbEkN8fjpgqeRv5z2D8NdVhYybnSduzf3BDAH2p1ksot8xa66w7EG",
  "key20": "4mJXamRFuotw95STKGcmHVdezTMFLVg1h2FoNcFSQeEEHje3qpJB7bVjxTRywk56kd5rhnRt7R8LiYmYqtUy1KmA",
  "key21": "49QiiTubWEZkkpsHuGDCAq2Vt38wfgM9Kjy7geK6Db1WdmBoWMacoQFivjWHo5Dqqa1Qyx6GDKqvD6oTiN3SHsvC",
  "key22": "2HZcQnu5Wj4JN8yTiryZBGJQrjQkWyfMVqyNpLik9aLNcZ6Ez1uKEXWYj94HRNmtdQjpRSB1f62zaATnR7E79TDM",
  "key23": "4vVR2oazKGNWhJmweYXGX5oHn38B477s22HRWcsL31GZy6JHakTeEka7pAUjkSJhQJGGn6Nz7MBtJkZkt5uqcx29",
  "key24": "YAyxDRUqyhufn2vX8mdKgM2apkznZnxNLuqUxccssYsKEBc8p5hbTA1c8HNPPmNVBjzyUgGYBetfjDf9KEmqDUB",
  "key25": "4gnRiz5Ho1Y6fvBpcz6GmKikiQJ1BTQD1yWEt8GvLx3bmdarwutgPYjFUbmLCCRCcL9PL1dk1yvUS5ay4sUmnhK9",
  "key26": "5iwZKibhbwMm7Xgqoi76eSY4HzKtXZma4P5Y4Ce9HrCrVD8BzT8su8BUsZsfZRJmBavxeUj8m3KPSNSL4Mmss1fN",
  "key27": "4WjDd57DPYmuxb2tvQFJ5JwskWYFBVv7yRBRyjstbF5K2zKrYCWSnBkeYPnDFnchBPKYp7CsakYVg1KtE81eykjp",
  "key28": "3dhGtbU99PmemREu7XNTGPgXtVwFLQE3XyLXZLimRnvW1ACHboJMNvjgtWg5An11zvA7AXVcdqo5F2bBRftZJe7Q",
  "key29": "2xEWhzyoEbEQa9W8vUanNbjBbQzoRZXsCCtoaKDicxjLCLUFSsTHVA3a2KhoV8sEruN6rHaFs45MJTd7X3yMcjjn",
  "key30": "5TgjFgkKH1tJKrLUv63JLv64VvConcXDZD2Ry6tZHRyup4GSv9iCsfJemK3xRcudj4CxmmGEThtvvGBiF7CTacNj",
  "key31": "4myiAQ3eVNUhYWTPuBa2britGT6ED2LGBgn2cdCk85QhjnKajAXuavV6s37eMiR8xH5Cv9DHm3ATRQgbkGhYkUFW",
  "key32": "5aEMQZbAnN9UDe5M6tGtW8rwdN9hhCZQvsXxefPk8RuKAFBvw46xjZhTq6exErnBEMTiA2u7wEZ6w5hKiFUmrULK",
  "key33": "2xRyunYMHG4hkhE8MWG58yKFcTCCQtszWnJWWnGccYrUzvtCrAG4ej5MkberHrSdSzSoQ3PRtzFhe9cdxb6V28Bc",
  "key34": "74rpseEXWFjsk5otPPih5rPot4fTjdciJhttknQ3hh2EZ1aRtTeME13HT6uL96pDG7ArVMiXwhHuWZjaZiBgvBG",
  "key35": "GyR5DL33buWXekbJXJHzeGwgVP52A5uZn395KM1mvpPVfWPLdSd5EpUy6TQwKArjse1oPyBzgQPmvUkgDXZCEda",
  "key36": "3vMBjJMRVrQuJ6UWNV1oKVgWjugGMD2LjoZqNXN9myGzjbZgaQqfBz8wfRyoN9HAEd69U7n4f3B3wAmFTdfE44zc",
  "key37": "3B77jgT1Yuku1UrPJeHWfmuVA8HYAFJWaJWJMMBJv2ZF5oZfjnLAsFnF6hoYFwFy8QPkZXvaY4JS95223dpiQb1k",
  "key38": "2fFmAa4s9j4TgjHpXrWPnabHcG7JoCeCGSUQHS177iBWBoVx4TFUnaDBrKZZccgwtDu8AYwu89ay32G6bWHZUceQ",
  "key39": "3Rw6rHNt1JXWWtgVFN7MxmtyYduUo9wqm4ahLtFb8cGFaYmM9cPqU3R9cmv1fzKTukadfHruae7StoDWDAfcqJVA",
  "key40": "64WrJTbzvr46V1Jz5Ds2pEWLKQJxdaD1UJ9DqVXCRyXzFYEdBQnx892WKzU41YVSKnyzzNAkUAJj8RxKjFdHbF4z",
  "key41": "v6Vxpk1TphRRyTBe8vSf76wcfhCcYuHK5HeymzrfruNpTDzkd4Mokn53TxW3WZ5ShkM9nH75Ec5SeptqDoypYtc",
  "key42": "2VyrRGCcUA6d9sFG6PjfRNaG85M9aBXKcdc15rEndafpYimf7jszc2mSEBke9EeqqMtPxwi2vafeVELppxxRpksQ",
  "key43": "3J7yQkHrpjUmp67Xjg9jkATK1yBZ182cy78ztt1srpU5xaJu7qMY4A4c39HkhDA58TV5KAkoyunSqTGnge7Ra4Q9",
  "key44": "5u3C3WX99tEnSEALa1sBvcZCrtB9dpZANZA5Ub8EQKTPJxWGaLNmRTVNau6kt3qcZzhsHrzTJxxegTrJrcFQ7oFo",
  "key45": "MNWLyYrMAUvMEyZRLoc5pKcaCoSCCfJwmLLU9fYA3nwHDQYJE5ncMFv1UDP7h5E6T1bfSBmBNKiPL5uPDg6rgd5",
  "key46": "5MFRYymfzZJDqJ7o5A4dFUm7q3X8yjR8U6c5GNqVQrRAjPbtRTeW8wHFyBFAWZjELpRaxkMytUboWERQFQUWMH9S",
  "key47": "3R2BunBijCxTrSf2P99SY9ccYAdgrqkpsoCWkRzcqgX6dMwhnvqSpGTxXpNE3Q4ErjPACqf1krRzN14t9oDpcgJB",
  "key48": "1rofEZgPRsAAdDfJmQWM9xvyvMNkVdeCzoYTV1MJCht5QU8TwZXDqLPE3zCd6RMpJEfzhdrqhdHXXFEAJ8qdSBR"
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
