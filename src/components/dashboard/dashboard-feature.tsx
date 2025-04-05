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
    "22YprMYmPJDDxQsi2w4tFtYsonZyKRnJ1XN7VXpvLVuXhuHKgsjmzAFNge1kyjZSRwaM6jWW3feEts3y5qHh7QXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eR7EwEnMhcCBtpv84bbx2Nwdv3o4yFkagebSvPCbmoU6QhLcN6csa3ccnDBfZhUUcseouP2qTNkmisiyC51L2Ct",
  "key1": "KHf6b2kMrqbfUTbFoDCXidQMJ9YzPZNpiaCYaLNfBTgDRwdUfnaB7sze86RGFpEQfJ4wARzVgjpRdS4cDf9id42",
  "key2": "tsLqmWYmXgB41EBmvX64eA2TGy6dGtnovXSp5GuXcPSoLBECvTk37ouMGDfkbfVk3FBQywZXuRrndJkCMMWPG8K",
  "key3": "3oPUvgy8caQwZSA5yavmCjUnJByHvXsY1iyZQJFYt85fpNe5geRACZsAwTrU7eDVFGjrbGBDqMUaSqps8p7bCn1d",
  "key4": "3JhALCt7YUYhMt75idBC2n4LGqGwDBt9hmGzMWG1WNWeknGSHCd8X8RkcK5enRzFNbXRDQfz1wVbMnQQ3zSNpjvQ",
  "key5": "5imzdGtx2nBB8UfVmr6yp2wQZJ5qgASfi6fiNbc1ZSwi4mvHbZvzw4mK3FtwqAdZDuVCDACvi4PU17ruSTEKSW2w",
  "key6": "5JkxWsFuD9WToxs4HMFaEhTSfMDLGxwGNEUMz53MHAfpCzR9TTo65Y2WLvjSKVtKcokCT97hERND8Djz4481WJpt",
  "key7": "3bxTqzPTfgXyCZzTX58JSGqwE8N9gr3vp2X8UJxpjMRQGBT5GRidpdnkREz3tcntjXz2Df9YZxvCYHMKkmXxKUAQ",
  "key8": "31nQKUta35FyT1T4uFmt9xgqA7mEr92TYLSdw3a4ViZr5RQSi73CNu7GECfaYJPi5BN6NRfMSRz9xVsWUFEKdxrh",
  "key9": "337WxaoRWjsYAxbZqMP8GQxfW68S64i7uiwQVv8XErZGNAw5qfx9Vc95TNAHK2DKJrg4Pk3WTUFzCrGGLiBymt5X",
  "key10": "PLTbx2M7YpXrNgMEEXn6sUyfhhhZYzxkkKcSp9g5pVUuob9XHoQoXDwPxHM6cP3vUUawdo6w8z2gSGTtvKXfamA",
  "key11": "48tfXrgQEWi9HyCmk7edePDrons9BL8zajJ272Vuan6r9XJgErZDFNSC4NxJr2H5uZDWEAinVuxJ9ACD72eN1w7q",
  "key12": "22tnf4uzTraj1mWy5GBnDgAR7Ejhed4vsTAVfNBwMyhwqUw1Zbw4gfdUxmkkN3gyvR2dct3YGYXHQdspwUrcTTEB",
  "key13": "5U99HGVEYGX8TsDN4m8K6MXSwPvGxUR7HrWbhndtoSEcygXEwTJf9ttEHShFXaX9vHSJ78u2utaVcHV7WTR3VgdJ",
  "key14": "2nubQHPb3dF6k9Qdy6eMzcxy3g51adxo6H5r4CjiVFGCx1FtzraGsvSf5fGWdx2QgNU2jeTaxpPaYDtABYbW9KY3",
  "key15": "2G9XAYSSg7UuYDcJSpcUNuAWgq7VUn3CV83Yx9gRtMc8MuA2iPkFCk6fXH7GcedztjJBYUftrZEgFTLYAbGZpzaR",
  "key16": "5Vs8Gv6CVH5TfqUi7ekTteyi7SjFZGveGMm9E6s9jpgJZivTp7bB2QQ9Kn3R8tKX66VmRnoTVox1RyAR5mu2HQHx",
  "key17": "1JBcE1eFb6WrMiGGTvCtGNw6jR2i31fxRqU1pKKKr9nn4eLQT5oo2iHybKPMu3szciGBaff6htkYvagfAz68ZLB",
  "key18": "58MTtDFCBEZaAjjNdwtzfq9kDvecL7YefAAPasSi8G24WFtFWvaDf4QSxdBWrjuxekR5PGnE3EgRveoCkgmiC4CH",
  "key19": "pmMarDeaXEpe1YHzt6DrD5ZExorZmpmCBYf2JGXfEwjVgmRgQAdhfC2qrsYoa8hnLB5F1geWKqFpt642itLvcKw",
  "key20": "3WtGMZMRZXhTF3ehFFU4ZfDFqPAy9fSbHiTejxcFTix7qibXJF8cSY7FNEjo9oqahYMSmJbyhkLHMqpPTUqK7Xfs",
  "key21": "2PwnbSirfcAkN1zYyCeAG2DHG78jp86L1LnUvsAUBMEDrkBvKfmXQAM67BZfq4R2KsuSHLSmTNdnMi8FfBcSiAxz",
  "key22": "3R2oG3hAuuMbmqcU5Tv5PaWwJJt4zNQ3KNK3M4qRYzod2Pz7cEtLkgGhnvtGzTi78WaiS8RiWVWppPtsuW9wAr6p",
  "key23": "2Barw2s7XfqDCrN2HHbUmjmLMKJjaerMpn2Sntg6csEbvHfmwFZEWD5p6cfkJvxNTTUF3UvCyRhu2FqgjsZg8ZA9",
  "key24": "4GmXTnh5TDoRsoy1RCCkaCtkAwCCRqiJCB21DXj1wLmRZ9ntiQr4A7PSGpMtCfCcUHCFz1B2NXprPbgrJibgnjt8",
  "key25": "4gSEffdNzQqjyD1uWCoiNoSEA1axzEZio76hCA4WgQGmPunkJey2siWMkUc2FRV8UaqxShNxCHFpQMtxUXXnX381",
  "key26": "2X6iBwZmUEQDB38egtAHB8MFU4xCLCstpkYfu8qBqPnjPSdrzLDkXWR6gY4c4yVDq64sksGwghKv3kxFkEGZhy5X",
  "key27": "4D2o71XyCrrukTeEwNmfh1hNjxkTKhL4U8sAqi7SaRpFkv7cWZHKnCSX19rgXCnAz5C7LEKf7x8wP1rL2ALfptH8",
  "key28": "4DTb2jH4VKLwqtiTf7MLneZQxJfCCdqHji6wf8aMvA8y2h6b1UbtRfBxDC48K5MJfHUBTWMdtHXRNMaC1y68jLzM",
  "key29": "nwv1aqNrh2A2wFR9kEyFVQ26iB5xNUpttMiWGSURAR77948hhRY2yezuqmqLfgjt4dQJQLYn4fBEZ5REHbbtsW8",
  "key30": "4uD53VhSFPHF5SS2pTiheTzzRJeSx5icJ3aNst4E6D9c4yHL6tQZNePMQjLM2oakV7u2umDc36J7jQdbRLMNzaxj",
  "key31": "98wFMX6RXP46V6iqtRbgwjdY8nSu3Pbcm2aukhh4tcgKJuUeTnMqTRaxQCyiPEjD9GVEHbnbD5xv2GAvQhWuyNc",
  "key32": "PGamBsLDfwjjG1oQv2XUT7p8LYFX8awvuFL2MWC2hpR3NDp5xhZdieYkKHEywNvLY8twAzYy5rX4gs5wx22ezf6",
  "key33": "3Ps1xDaQoBuW1FLhPLbyBqQEPcSmaveaNhw1xnzsUtndhg74P4pX8gjdNoqam35MeyNpvXkWfFcRPXapAjvVBnSz",
  "key34": "2Q71xMqtypopKNJQBS9wkBBa3yF45QBvdirDtSKCEam76VwksMExyaSMBMqRtT6xtt2ohhidFaGA9ARyc6eUJRBv",
  "key35": "37AHAQarxL6nuJ98t7Edtke4SfrmwtL8a35H6pi5v98ikpWMiLsmx23NBcKjPTbWH2ft28rkw8pfSXXQmkMkSyvy",
  "key36": "3pGEyjsBgzPQSYtwoDgvfa42HX2PqLrxrLaRcCFUm4hadhKehSh2KqngW6G5zBNLFa6XqSSdZzx2xkQaUroaQwmS",
  "key37": "3VYBXmEz2QkfbtqPEDNV2Rz9zAZ13bjxzQcdCn5AZhedDHTgFVYiWpe8xjTGG2Hv6zB6QnZJAdtBA1fAnUjmGBj7",
  "key38": "3QXuZmVkWuZAw9JAeF1RTXvBtWQjfWg9QTg1N2RPXCvt4vMapFaHoiEoMdPVSgVPcQWZV2dQuAWc1fnemp2rnAHD",
  "key39": "3U3jbAiXmn5JdvYSoSP59df3Pjp6tAcN2MKfuyipH83BTVuTXXj4iUBns6CdeWWyPksT5Jg3S5Lpn5ezoxwo71CS",
  "key40": "5u2JPVAYmAPuKdu4fVQeTRJXPNE4vR5tuG9qGiizx5Cbk8oiYVN5sfq5EXRLpE6kgi6BbdkvCQGAm4U6FzJtEBuh",
  "key41": "2APcvxPsczwRtuGAKN4YcGo6aGPvH5t9FokQ2kpASfrohdUrXGHqkyVx1XXFsRMMytUeiG6HfokULKfYNh2w9Epj",
  "key42": "2TC8nrSuMXzxcw1EWV3br4hSUsyS9m8Ww5PtsnhYgVCzQfT54AeWM9RjhrjAFHav81yowPwf2cMXdGJZq1JgCgPe"
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
