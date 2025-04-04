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
    "fCkvFyh4g7DtKtpHizgVru3UqWr8JeEsnVMbgRAFT7LNiWLho9S1WyKBgdacgQYeGqute75r78XgdwPQvEYWfjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CnnNRj1jkphywmvw2R1HQBRq6xVnfDSWRqhpDVTQmN2d4X8JrMQ2MPyzW4fHT8NqKpfxUbGuL3mqdtErXC4gac",
  "key1": "4yycXPDaTHqkECSRRQRyGSUr2J382mENeNnj73Hpu74aBzmmLJdd5NmWP2LNMoUwyKe4j92TkkaDko8aPbpbon23",
  "key2": "3jhU9yZc3tw4bufgKJAE3ADFV9wW39tpKk8LArhLxoQHPZvfT9Kz2ufXCdU8WN6mWDRG6tLA8iB26Y1acRrHxtRC",
  "key3": "3kenQvdmbRHrWFrRe7nMpMP7JtErFHREo6Q3ujrZuXVSbSRYGDT3ba2XfusXGqvwo8SaxWtabVYsMfT7L9mEhcgX",
  "key4": "2mDLkzUgAE29UcLLGhRkcwjGkAEZnzsfTCskb6WLTcqDAnTxW1x4h2x4SwwpResjw2k1MsoaWVihbpxm12zr72af",
  "key5": "4Jxn3izMi5twQegHKiJv9x73NUjuYb18hgeHpN5hvVTwPVSFXpHfqtthhFa1To8DkFhce3Mh9e2LEWh6akuWTnNp",
  "key6": "3hgfu5o1p3VaWRrbYfi2KGoKLMRjTjCu52LNofC5P7684PT7MNfdiAJE9HaQigusCsm8vzqvfGWhoVX5CQebmhr2",
  "key7": "4fSmMDi8A23KURVdGamLBeQkpCZRouEiapJuFMSLWfXGa4BjdRLHxrKzrMQ5iDWKr2mJRRqGW9kk65SnhksrheSB",
  "key8": "45GyLFU4cUDnrqU5ypSmvYdEnqmkEEwxWigtTS4ozW8PvGfMbigxDpR5ipnjYAJ6rgXCQz4ZZxeDs4hCPZZPGiEF",
  "key9": "3getfPttASDA7WjKMn9haMb9f4BeJMGu2zye6V5u6p38hNT2D9xwnpAmT7rbZvGp2X7SLtPSSUyrM3zFsefRxQzb",
  "key10": "4aQtMmVHX5gvq6Z6Dzk2CsrMSjm6xVCCd7DbnvkFC6CF7qw9S2MXrKPWKz2mhpNmcSk57FytVazigeyqhUHiknfG",
  "key11": "2Z4yYpQqMpo4J4okmjsyxZHU16jdyKPVinTgaduFQ2WAkNMf5rBpPMg9DMSuwfvDj4kNuEB61B4WrpSC7jzKV2TQ",
  "key12": "3BF4jsaxcK3x64YRnirpWRwUDSBNTiJirFx5Et3tcppnfVsmsxY6V8L1Nw7bjCFYN55vX3uCxi1Pu8n3tVnc2Yp8",
  "key13": "4xpPQZ5T15j1sXSqkRBhANoYxFckWUWhoS516PbdijtTNxm8x6EodcJdyGmtfTDtSqvqJBtQJq8BGZVVEutwaMGR",
  "key14": "58a33bFGSdhD5NPicuSwpMqHH5RMsoxKTK3E4fXR6K7HwtkzeqMimkzrksuLi5A8xKiH8uzfm2cJQXMcvuWcnWDQ",
  "key15": "5fUUXnob1QieDEpnBitQCQ4nHqeNXpHCXhSFmXmi2wVjxqM5kqhR5G8Y3mfXC4cgJKPBPpPUGfx9VzFpcHojj7S6",
  "key16": "2jxhsmPhLnCz94VQuPCZAjFBangEDpUj8ZLmwjBS5Z81wugU3fBeAhw6Q8QexB3LoJaCYyF1peK6BEbVgqRFEY1D",
  "key17": "5q9UmTsNzdtx6TjZ4UZWh2HUWFX5K7U1b1wWwVATaBq2RrsxGFu8JRR1g4bzzWd7K3vDmADrdcXiyVSNNrvy95Tt",
  "key18": "RFtpyQ79kdvFsi7x6CLuE9xYrUUwMGjJHGCpEXDUJQoBCJ4Jdvt6yLE5cQp9jAPyoXMUkhrJKZM1oMLi8ewXZ9m",
  "key19": "FmxYV9gENBmiQYoBqpZs65i5eb2pMPtCsULZq5ESrFAZjarvXXH1twhvVNFQwiq4YcGrfZ6pmcHk9tiudh3EJG1",
  "key20": "4pLzGucLz8PtaTmqetZ2BBhqvQYskCK3YvRMjowmZ9WDSjoiCRnUsAxe4vQndM2c3d2N7t1Q8kHV9iD1uD67zGMV",
  "key21": "C9pvKeGiNMgHWmB3ENLBCDV5MHNCmZQieN8izJUqHm4ejaVLWZpS5oFg5NZNtRVDBacL9sBTwRRhomqAkKDH6oN",
  "key22": "dWb6MySZUBm4nNKqP9poP4ZvLGF3rBBCZjUzC3ebfBLc5MxASbwNFVffevrpu3f9KDFkKuEsvybth4PLodzcEGT",
  "key23": "5KeETXRXrUzcxfDLktnxAm8JxedJ2CrtZTpFuN2J5Ff3FnXavdn8wcCq9PdBgK6m1WEDgMRh5JEAWMHrxFE8mzuw",
  "key24": "5hq76g3SYCW3m9pjpKHRe385G4MMPgGEo8hZ6T4ixeDbh3ngBhc4tnU3cNgxae6zr5JVgUzVAhvof8fEfj7QEGT5",
  "key25": "3ghoqurEfMKvVtseHrPrRUJf4w6ccs6sPHCqVWCKmbFpF9e178znEvnzEGX6sGio6xwi3BNCo6jWsairLVdwZ3Zh",
  "key26": "5tEWP3XdJ3NsE4MoBZspGFJASnsRXnbDeZ81i6cxi2JKChsu9c2a4NeKYtyRGQC4YhCWCTEF4csMyhcpEp6SYKGP",
  "key27": "2s4oPRe7A5L1ohTfDfuT1eFiNedonQi4LbLdphiFkpPPyMPCgG4n11cgxSfGdW7aw17MTppTBzPRr4E3U14UZdji",
  "key28": "2vEdKpKdEVC4ECQvhAioogTQG8c3icdKozRcmPPxFYktA6EShP1TzGA3MtguAFRsSt6TA69NEiqgiVBAcuDHEUoz",
  "key29": "37umwT4QBpNU4izu8M5FTfj1cZ1r49eMhMZowMnmkYNDBpDuZmvpZ1D5joWKCZEms8mrDVjVPVyj8YP3YnnAXKJq",
  "key30": "4xF8jJbprKsxCG26YaKU7k6Z4fevv2Z4Yvq9v9KraMpV4htdyVybkhuNSyM8WdSWqSQMxMxHpHUMMqzjwApLSHwP",
  "key31": "2euceTF6kXkg3AhrTjbGbK1C9KM1Xjq3ECKa345CWDbXFDSuoj3nTzzYdRSdGg5cD2bXRfqqs9WtKQJ1yYpffU88",
  "key32": "7c3G64xBhtxWHhCR1A937m5ZduWC9YaDipQxQhCJHoug4VLJwmmoxPqDEDjLEaYnQyFvV3ay2fMKNSbqaudMcW4",
  "key33": "5fDfffZf17SN9ciUYBVSYtLvXT2geFnJCwpV9LsPJLTpjoyKGfhijumiS5jE4tcumrfNhz2o3gS3XDV4PLYF2v6e",
  "key34": "4xKnpBBSuj5DAxXxUAsW2ub4cjBL2Gv7k5WKRogJzN2Q8SwNpyqWKm2ZniJDkMm4MnekPUgExpzWNbMrZG3qpHC6",
  "key35": "3C1pBRZ8TPeSr6F8EAEGDWhNHr81JBg3tQSHWkaiwxmd5dtzvcix3SLfgujULdWKVqfQzWNNV5kHdzaoez81SzMq",
  "key36": "5PsCC58KmjD5vLNSuQfUTo74PXRN73BsU41oXt3gouumkvDbx9Sond2yRc3qybasJfJLtmp2pkeJ4CAdkdPfFgm7",
  "key37": "63FjWD4zDezhANEurbUSfQeSeyrcctBwn37skrJB63BnM9597p6qnwBHFQQatBF6HkCfjYRBejyEJSqyr9czJDsa",
  "key38": "5hZkaSZCbGwt9BaArSJEsaa9G5hjgT3USLYYf2pvx4L5uhGGu3rd9nXeS5H9UojtvfNhE6LndWNohVP8FCwnkLdz",
  "key39": "6mzuMD4fzRfPwni8GnFrGxtbQHC3mcr44xuuSr2kFdE7SjqNSmzEL4nV3CzUMHAqi2DR6gknzLde6iMNXYZLCw7",
  "key40": "5YqZqmZRgXGLbo4ZnSwbx7zFVdkTB6cmGsSVT6qM9sbGqrt8TUTadzdP6L8ZQPoJZ3TBzdSFVYV3Kwsb3S8EzSMt",
  "key41": "3uzHPjc4GA8zFuKgCihnkBn2DY1moP7NpwmcgxtFRHLi2japedB37Z3eyu3kMjuW8eR2QPDd8n4AJs72eMe3vJuV",
  "key42": "4PVj1WedYvhDnQByEEqhY5igeJGGgbUAijowRBTTRssp1PiKmjz3y9rdTvFeLPMWyTTWAVEzWuGbK565JJrrfqBK",
  "key43": "4CLAMGzxy4JXCskea15KboSiS7i9zpYnMkAhzKDut8uzdiBSPsBGAzAd64M6aRw2LDa6dJ3dwES2Xt2TZ6McZJGz",
  "key44": "5vBc5awsPdUeWGpAuG3LknZRfWRgVtibFLMxaZEFDYfQ6i5SRXBshRurcde2P1cXtPJgS2QfFcCC98u3kt2ZudSH",
  "key45": "28wbxJiJr2jjfu9ZzYubeLP18WUNfZ9eW7wDFfrxiphJXvXRHhFVCKGU2cTJvxoGUEJPbzNrBqknFKCAq7bEbpe9",
  "key46": "VRukTmJCQ2MUtgBReQAzn4MnY8PxZXwvFsR36aQtnGjiDq7h46WyxxYnsLVSeb2D9wMGHB3L6STS2ikH7JLaE4F",
  "key47": "5xdxAx5VqcbHyaFbLbz3ysTwBqAY6byCTdGqz1tE91c16xHLtrpYpwcM8GyZCihE2LdCutb2VUc3QzcDAacgUZnK",
  "key48": "5n3JGrooz1dnGNmyo4m1VJM4jjMfKPEfudtnuQPv59kWm1q7wCKYoaUGjgEeNJuGPQzEWDg5CEmVEccUh7XxfYRP",
  "key49": "2sHMGMz6RQvnT75EDKKZmjfzhiT7DovwGWBkw9Ut8KSRTvFrbsdqZx7t6hDKruaHHVEMAZxvx3nQLUkLNXZRtbf4"
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
