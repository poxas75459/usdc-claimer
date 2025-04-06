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
    "2vHfTLoTKPEYe8QG1DdsS1dapiS15SVR7voe9fZZLcFm6qdzLkh58rvHyxBThA3KvtBfZP99vUGANjGY4RXexGN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9BuVLcs82hRTWnMMUMmMqgSveNS7aRdQMffTkEbVajTKjiRDJqtp5XBKXDMxeFAEJjRV78RsXvvnzKcuHDrr1H",
  "key1": "bJT3na8dSqshPwYAWYsZaPoxHDTstYxfeu6Hej6hLaNqrsYzhq2QTksufoKSjHCvXdad5ob7CAFRmrepdC2LULJ",
  "key2": "3bw5XYx7JsQFvTrxJfXMFPQ8WqgT8WXXZZhcS9nkz7Yv16HxZvQKdd1SCF3efZPKYFpSo1ooXrmpCTcxccwWAmmJ",
  "key3": "3r4mqy8aNg6uyRbP3Y56p1aRpQ6VXNq2a7UB4DBuuCjsZTtAQRoeMCRbjsM2ynb7ukKmdd5mKp25GRy7tJonENMv",
  "key4": "2aEQ8FoKiCWR2DsWhEa26L82f5FcMRmQkf2r6KXqfoKSHUJT7PSm83w9PCd78EzcNqJGtWgPaNL8H85r2ZXgmwRj",
  "key5": "3BJkMMDdsguX8Hr6Ae6SAwbundR1q2gk9QCfGReSVa8JbjApHsYqyu6yRd9h5atVPLurNcGAktJtgYYqJjcJz2Ef",
  "key6": "4LYZEAJwoGSHyCi3nGcnGbHRgvdUz71qXdsjXShFgEh3yJ84eaN9f6vu7mt5jHo5bEsqFKaWeVfF3wfYDb3XbUvN",
  "key7": "veNwWm5qKmVyEYroZFiF7gB9vJu3iJBGs5774zrtcS9HGk9X2wD7rYZ2ja7LSsbZT6Qs5e1DCqCdH32jXtRfbPv",
  "key8": "qFcWEkwQSAaQQW4c1WFj8igA37SJdqqa6Rjsh7edFRujS1Z62uYiXG3Wz7sUqrK5i3WMowN4ZBVv5nuD9CE62Go",
  "key9": "3ZFcQnvyXSgTFCPHLB5J7C923RMud52WncVjNwiEaReUWwAvEWhzEMATt2Xo4EfdizseA8AC8aGhWe2YuFb1VWuY",
  "key10": "24vxSWoP88H7v8en1kubcUKmgaaLfeUBPwK63obQryLVs3rYkVVDdTUYrxr6BPF8cK9z8AfvrfMHCHJuYeUTkM9B",
  "key11": "4BRAtYntH6aUca9AZ63ojzC2kg2MBVxg7hZygpHx67sVgoUBxVE73HmSGPGJz6Ha2p91x3ot4iaavfMYQtWgt1wY",
  "key12": "3h3HNziisuSuDFg7Z9UWErtqyogPBg1imDswVXxyvjxKYvLZwxWFEYE4rvccK3sthBgNQDscH5B8kYsw2UKBzaeA",
  "key13": "5pMRGKv1rDBQxjKBRtatzV3iu65L9ETyU6XGuWCUYbSJq7B8jF1b1NDhzKL2p7xv7Ec1Df6vPiRynS2e6ndXsH8d",
  "key14": "56gg2VTbyAVqmWYuFaSGr8zAQYUES8xSyetU43tNPHRuRsF1sQnFBFkcid8T72zxRP3X1kbBzfhFLBgE8QSTuvQM",
  "key15": "4zrQVaEuL9tLUJkf7bmc2CJaoFJFMqowFCcoAXRjQyX7M9trpwU3CBvmPSqPiSEeQsn2XPW5koMBYZv6aeYQXWK7",
  "key16": "ChgHVhKFXguBb3sFcKj157ahjy6Xr3YMDZdEgeDh1CtoagQ7f79QNiArh8NVeFwm1BgJ5W6uf9aV8ZNkaS3ZKkf",
  "key17": "2y8eYDmMrtQgGeLhEFgmSuVTiPsDkNVEcLzYTdsmZ3g9xfAyxzvEGFdxV7Bp61nd637cLm7nvjLPzvSHcZVVs4Ey",
  "key18": "vqxuRkuBE2b9xmGvgja88o9p232acyNveGRi1a4kwGCFuzMY95jRTzwPrkZL3BxgEjnnjCV4RcZqepZ3dLRpKrs",
  "key19": "52kYWmMzwF76WdFkvEzd7mJGBVFLNN3cKMHnV4SQhGkhG22m5aW1q1xzyaoZcf9UA5br8EEKJDfpKWPy9eSC7Z4A",
  "key20": "LBMZWkdj3MJthJ9cNFEZw7PaAZSaUimzhjrarVtxEzRxPdH4dzuVer87m8eZCeGgra3BhNFHS48E12s9n19xjvn",
  "key21": "5rcdLUcq3cWYsM7FVuTNtojAmdFuPK3FwJ2dt1vpwq5k9dYVRj17doSVUqBhvaWZWjwyp1tss6CD9fiXzfvX4Nc7",
  "key22": "ga59H17A5p4tBkawT4eUf7sQZaxtKwsooYcK2kCYp8WC3yeGmpqCRi2eFKyuoeDQbK9jHXdNSNXbr35DKQowKat",
  "key23": "57ZtPdzYKE5QTobrtfztfVjvYLhfcWmYLPsLDajhTJVE1pPs3H1ixipWC82qH86gTXqGmDme9L6rrgvdFFckBJGm",
  "key24": "4csim2wK81kXtZz4zo7xw429RJv1mm5f2mmPJcEKyb7nXjnM6HnhMfjFEa5YHvyRYUmaepPYy4dDbxqNGfWKkBEG",
  "key25": "3mSXKaK1ujBSkJ2LCQ3TvF9ps7XgvLREdHBFM7crZPCn8S4jJKi6rU7xZnWFJECSeQ8d5UBfJjgNs1p5mpzyv47E",
  "key26": "4RQqJhikgVAAMtjy252vg1EqMkepKDhM2AdjBTigRqzS6xk2EZPsgY4NJhjEiijfxCGfX2LhbdyWNveQ7kZzE6gP",
  "key27": "5cM49nZrY5ena49D9k2rq1xhd3aDT91uvfYSLdbBL5i98iJLL8tAbNCCC6FufkRF1xb5mbki95kW1QTT5vnZYg8R",
  "key28": "5uwcDw93gMy9bjKFmLzQvbayJW5dHdr4QLUYZdLN7bLMSQaJk45spR9kRaZMky6r37sCQmAkugP5mzE8XbCEwUfy",
  "key29": "3oi1oVnMfuFbKQPQ5mXgNUbU1xRL1HbvbguvAt297yTPCTcB3shaZPVov2DRY1QU8Nstw8iJeJzf8Svm435R3c3S",
  "key30": "yETXwZM3UqmvU4pYkVEi9J4fo55hmSobBrEfaDaQTPh9J9z9G7jg2NXy8AQeycnwGoxqQRyN4DdcArGyCmSXyfR",
  "key31": "3P7SroS3png6cPcRMTbTEv2CMYHEvFmnSRLqQHPmNrdhQBrexNq3DpcL6Jdh1TLQSg7QSuY28yE67a32uwrJEdKR",
  "key32": "29AgXvcDjMf9u7CDQgfZouNuQRXxXm3TzQ2cP4EDMHsbUuWYuhB1nrL1BmuzE8iPh2oENjFfGuv2bLHrRsJNSy9K",
  "key33": "2KHN7NbybB54XckWsaa7D6zGYh6BzdJQrgqyTAHFi6n6kAsk7AsmqPg9qJWUSwhkEnFCaZ65eN2ZEV3y6mFDyjG",
  "key34": "3NuSTPyzdDjU2WCHyghCT8AVdbXGsJ1TMbGxXCCJrB9qszFBG9hC8DSxrxPL6uxnsRHhLBk7FFRFtxC9SkDTLVmt",
  "key35": "4MqrCDSTgAGHG9ybPRg9JPidCSZ8kq5cfzr1d53UmXHxryYYRkGuqe8bbQEBg4JZgtj5bvmUiaTTjih4u8eCgWry",
  "key36": "4TNm1a5KMPMLzvwcMPLkhNDat34Wci69Ryftr9NtpfJyLd6rbuhTNB7FUY3hzfgUyDG9PdWgxqdg3ZC5Tr3bbFEQ",
  "key37": "44ScDn2rVnSXJ7jxLUAFCfCXim1LYR28iy2GXoMSwdQ6HHbYt9tLob6BBHV27KKRE5v3uYFeM7niWAHoF1AoZfkV",
  "key38": "5QekoqywyWPJetDp6BT91ugMLTTRcRmkGFLcrKuW21wEWzGPCRoWQT5TvXtUhGDj1uEyZ2dVj1YHyyDsV9GfbgpS",
  "key39": "XJAtTYktbwm6cmtojhagxtFrpnftd4whJeJmCiwwXAQZfakDYSJ4JLeUozSRDtGGvYwDwR1tt1fdTHB6KM7q9MV",
  "key40": "3A6KWK6jMnLvoFZ1nfCpxFffZaouXjjPosy3jq16nPZef5MxZTLSCkPFMnYUMG9QAw4FkqpayB3j6G5mvfzzWUwZ"
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
