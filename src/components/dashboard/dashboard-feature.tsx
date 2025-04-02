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
    "2ViyDBZKPaf2RwUHZtv3YNFfMboMdoYLnBa6APrLRa4NfQkAbzxebCBogJFcNQAUNP1qEX4qRkFWyQNtqueYgJxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nQqqK9wSbjkRfxHiExmfJEUcEqfJMNLpsCrWwnaMMjfdLZVkxVsjn56m4A2Xcv5g91r8J6CMuoc2jgkE9tYtqJ",
  "key1": "4Sbk5unHwqGVSWE56RpeQj7TkAsYCtKds1ohczcRJQUQAShrG5Txs8s2bQLiEiw5S5DXhonaWm4YZ62sxnG2LKXg",
  "key2": "2jDGfobuy7CZHbDTPpH5J2wKD7Cq8jVsyWudXAktugnXBuYeqSzyCEiP1GtY5161sLQeLRSXhg2wU4dDdniJ6xiu",
  "key3": "4qMvDyKftw4CxhMueqQZ3G2Sx6F1R7xiLSfTwq4AfZvKgaSUosVe1TiEvqmEgaArT3E2jnKAVE3MYEaStGfPKxhg",
  "key4": "3AKcDvLmFNuZdrFBa9AURYCK233jLwjJ8yynjGiT5Ug6SidKnSkvTiBHvcgfU1uc1kLbCNWqX8YFP8ZnPbRdWd5T",
  "key5": "59nHkCKLefT3bUspShewdtLn7WN1rGrAgP61BnSeMBqkWXp8G84LN8GF9AAjTN5GHnaVBPJBmBQVMvX5QhP2yfun",
  "key6": "22LysHfLzcHPXmnXWcQgikwnCTfC9VTpUx8yhh2v75bSMdU1ZwnvVbjWLTGsssycqLWpLCfkjw6Va9TfReKS581B",
  "key7": "PbJ7euMWJfnpMKBEpXdGKmrzNeTUL7KorrZH16iKaSVG9oEPTG1CXBZKxDKDGKsP5VZ9VUQQZU9QToaHprRvkQF",
  "key8": "ko3zGM47pkV5RECYd3UrUCWYku77vvEEJm8WaTJkA4TPA4BKzyAuTTZNqufDifQPUKTjofywuAKpaxoi1kMQiGi",
  "key9": "35VP1ch218s4KmQbEys7eCe13Q3JE3rf1vy1Jeed7DZL7dPzQc5poJcuPDhNe41NTRebF47n8RanRZdUw6y2CYxN",
  "key10": "64G76uWPyeyNE8onJsBPzYdGaV6TBPyqGZQ2n6G4bnny7uMNEiYTqcLLUVKTrCsQZdmsPL9w6HHz1MBN7QqFVuKG",
  "key11": "mBgENXhgx9J4D1RgwFyzwP2tdfvdD3fKSRaZjnNPUzEni7FqWjzb3Y3uKAtNebKsbyW1WmUcqfnA5NqxrXKhwJH",
  "key12": "5MWqqHcAXavCWpGVqNBq27L9vivX2kDRSsid9AbAGKNaZoJk8WeeTAUFwi2r3Q6gQWqhDrNn24kz5KMhdooahgtf",
  "key13": "4wxaFZM9LxcpBzpMLuDpi9JRUGKhtANNeSMzaTonaiszWBxe6T8HcaNaNbG16Ud5gNDtN85iwD29GptHTw8uyiM2",
  "key14": "2UtymJf5xaqTaE3FMt8BqkDRbNH2qjcCsgj9sxSXLgqFs5ECRz9DgqDA4o5Zjy9MC6v9BkWhy2uvmvv8NDZeKKmc",
  "key15": "4Eo6RVayrJbQC5wTorbsFbVufVWYYfDdb19svaCSHnNpbv7FrW4GVUfmAv2pG2LVjKcAHEdq2ZEB8ymJfu78Wbtn",
  "key16": "2FyyrBj3b27A6wYFbowqsv88SDh1TRDs83FUStfDa4E6S4KFsahs7YH8GxQKb1HwvBr7KwnToMpm6G4QmNQxQW8g",
  "key17": "3iwaHTdjpQFPhnx8kgb8RGvjPL2rsKB81EugdXuZmDYJTfjyrzKnz97hMDi1UBQNg8Acy5xx9RFCFYhVCvmAnWUu",
  "key18": "8ZvMnameRuDopHmt1r5fRdZqY4SWpyqjQcXToeycJrnXomNDWzsJLj6bGabeAQ4LEPP7at5GmLtoH4TwW6tTMe8",
  "key19": "2wi8FzLYt2jQoL5ctGCuB51bFkaRiAt5X8M14i8RNodVtU6TicAVHyn9pZTxUm1iNCdEzi5fkJbTPRpN7GXcTADq",
  "key20": "2zi2a4L9dhDVFwJYVMFMM9GNxQdH4yEDUAxGUuvUA4jCb6tSGPgQzyYUjD7MgvZaLoNSK5crD9YevBvoDexEGhMt",
  "key21": "52HfZfV1hGcJYqdwRSKUqt6EuPdQ3WsApX3fAGF91toGn1JFXgsnEkm4KYo6SDRgVsFxn4ZuMkFKENr4XRJH4AbK",
  "key22": "2CM6fvtYy9scBxNPDTw8EBqmfNTen1kdTMzkCcg9TeoMCHn8uxJ89u3rpM87utpkAh78j1Xat3SbC22L3nY1ty7N",
  "key23": "2XCUZtSTWw4eJ55BR9DY23E15wKg15CgqSCiHghWypF5W7mQLLFheqnjnNvGPzKMzjXija6wjgYMrMq67JNgRWD",
  "key24": "22dqF1mBKNnxfdfXZjSbNqEJY5uN53SDfNmQumQVLZuefWjPPVCk2m5LAodmEkc7rqgTtMcsXFyVkXY5mjTXYXMJ",
  "key25": "2G1PiY7JreNxSLTiowTRnHVrrR1bP1upCCEAbAQ63XF7WkF1LVZDjkMwJQw4qZReBQsF8NRvPBWJJZy9sLWEqavS",
  "key26": "4LydwJkWR3yuuiki5WNEsEJyV6jQ7dERbk2jocpQEboJpYTFQF5LLrun6DUpreWif7h37kUV8t75RPyaaT66peZ9",
  "key27": "4qs1GsQSDqzY5caF2YhLQwiKWGE3H6UxvFN1fKcqCLHtLxxoHBFuyW6yjq4TewAEDuyhBndGLsgNY37aeKAx7JWS",
  "key28": "58mPYybEV41riVpo8Qzhh9YCjGTyQ5waHoJ1JhTB54PwmCLZT78Kd5i65Aqxucrqx5Djw4nBdJns9aV5wBWrrB1w",
  "key29": "5jpAZFMKnG8Rn6p92Z2UVWDiJjffT1Fx9vGUno9BXHk2Akibbs34gLGcjwijWZk8GPJFxn8wCFBKne9q2kir9vX9",
  "key30": "5iuPNUpAWnMoNfyW8mztMdvT9NEcFm5jUNiVwTmWdm2ErfrAahG4swStT2X3r3MMJmBHDErbxgzPyyGMVioCRfM9",
  "key31": "5WEBsSNXQUWF4UT4fngrQVMqWM4hPQLU9J1BsMYQ6BYJxqsZFDoTzFAVrdXDf4G7H58wX7omfAkqdiG5MuF4k6B9",
  "key32": "3gd1rhrPYkqrRbVAuaBpYBczZUuYAGXy4kziVSXsrJPcWLwXJqPzGY9VZ6HkooY2NmmZc6mgux2uN2ZNYiwjxFjZ",
  "key33": "bwDNSgbQy12N8bbKo5hdre9Y3ypsavcfqzme6xKeYTCTyrn2RzzUiZKw1Z4jtf1Y539QW2wymbkVAzuvYfBp6Er",
  "key34": "ZgreV1ekTF4WNnMmXVvGgqAtzfoxGw6eeeNorAesW4ZfTqyY5h2YuVYudmzMqzbihbVQEPSoVY3eJPs7ocsMNjT",
  "key35": "3EyzR29YYiVum6DvfSR1SEbQ2U4tHBN9QefVUV6ozUNMKiMrnPDR8t1N3D2LJUrNAPo7SKvqFm5JVAzMryXcyGbN",
  "key36": "53dBo7h1v68DZXbCZLAWXtdZb69g4a2rgi2gTPmMrxVXnpr1wm4szYrmB846nbtLFc5yZF19w7aa5rurN7DfE18Z",
  "key37": "313E5d3EaUCejYvqzBMpzR9Uuhx7ZXT6c6RfUYCMNSRJZr1H17nxh456kaHPsTtc3eGWAYM4WQHWoSQfxhB18cdh",
  "key38": "4vorEnVooYYWyJxM4n3Fj9F6Ze9LQBG9hHZVjo8k6eFvubMAiX6aDcyzkKKEKtzdVKtoQKFpwVEJkz2TeVwAMaY5",
  "key39": "2eCJSV4odhjTasSea2tPrJL512fKGVXTMVCdDJATchtPXVSbh1WkWJikHQXoMRGthLTuwnwJT567KymXnBSSoPAC",
  "key40": "36paBHbVJKbqjdPLVhS7DNN1wP9iTHdRasKiNcfAZK1eV9HqYY9huVP1T6hyeAiXjLxFgHLbrH8k3LHk2Cb1gHC3",
  "key41": "N3uwvJZvE7C5m1sG8xq7TDzPqbYMJmWxdmWqoWqgxaexybcaZwg1fAJhtABPHZywY5DTRjew7zdn1kCC1KXdZKr",
  "key42": "3Bd5M26rnGLPUJxXbNcXE8hSXimeRppURhHBCSwnUvY2FAsfnvqRnhKV1rNqmR7FZBaXEiAapKzUmuQTuDuH5Wzf",
  "key43": "GUMdymy2vvRQdM2H5GxNkEzxVY7BHE5Faa5DCjZH7mMNQW3B27jq4NRpwoLr9tWRVjSarQbwoHCNuUZBbDQkdSi",
  "key44": "2nLPHHjbbSvJ7VbUYVAaXjMetEbsXv9scE4fLs9wgp5fZquD128LtpPiKrbaduDSMEoGSeEnCgEPf68FLtiwm8D1",
  "key45": "5kVDBuZr42aYFCfhUuxRhfiS1gSeop1N6bhqjqEU7XCQr4jXUzdgKfVu6L911LnSXNbtFm9bftLQ97NimPqRo2QF",
  "key46": "438Q6PyaqXDFrNeu3gWB3Dkdb7nzcp53xqM43fq38YFu4zg4ZDr8pZJyJcRTMhwTNhsnbKxe58Rh6WF5vjm22s6S",
  "key47": "48PVsWHAswjsSGhg6fF3nUb99rjsDjKS2gcvM3si48Hup7ZJJAGZwvuyPpFcbHhV7Sbw5y33ZaUkXMakKvCP4Uoy",
  "key48": "2LDpP3NWo1ANNAapHkHsEs7P7y6B64MSb9fG8BAhxQLS67j293DmFwN7KLBaSP9Ep4FwSRmwG9hgmEb86fTcrgwe"
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
