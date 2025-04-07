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
    "TkJiHgBwkLKh7tnhHWb7CHDgtokfVerazcit3WUpF3tWGBEDuL5ydLcy5DHcGc9kbADX5mtHE7MFytBLiYBY5Dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q2eatD9bio6UdXX1WT9btjoRZgGm7wFQsVRrWQyeyj99sJSCVmG4XrVGCsBs1fn26q1KEvXGaZyYYMtuSYJZQaU",
  "key1": "2rFh1Aahn9kSVMfhHaFXBGQjeXHTARvftp9KJfbRaLR75Gv3k2Dai21B26yJev6MurpWHZQ9V8AM6oFny3dTAYFE",
  "key2": "5jTcJtrJMmNowBRpwUvfsLo8rXsSJZ5Vh8Pb7D9o9aHdnxVMBzyVrBfYQ2ALDMe46j3QLMLEFC9z8yDz6mmxeaP9",
  "key3": "4NyoZ4csuyieMoFUvVLDPWwQbp7v4g3ugzn4vJikcNaZp4QkWWm7HwBnvyHnx1ovxE9s3e6ntnDggz4haeuq7Kzc",
  "key4": "2v8mq4X7RxZ6NYWhfBdpGw6uBqZ9Bed39dbLpYsTgYboJLQ1xwUmXMq3fDRwVejDyv7LqxS2TfiFhTzJMDf9iQJj",
  "key5": "2GSiYDKnCvNNYayMvakWLzYkqv7NqfVh8csuVjZR74wDLPSk6SrspunqDnhauEovpSYPfTNUpqDUs1egVc8c2MAM",
  "key6": "2JnjtKtjSnLaeTppvPMo3g2M4ya8NqAmXGqpnuXpuZwnzFBrzENgA3eqMgToyrnFCftxuBWq2xeER955j6HFhhWU",
  "key7": "DJqjBdwqPHza5HadqATQCw4LTr8Nq8L3wU1fjxRMjha5Je2K5Ah1fb5UzynG4Bms8eyGMzS5aLDRDFpCbyzS3ti",
  "key8": "2zwjDysHweT2c8s68TiRiayezBccYDQkmw2x8w76Mu69fVk3VH87rtPF25xM5hx97xUqHyHB7sBFLGrB1cnDEYqj",
  "key9": "4rFdnxpzMEUgx8hX7xaFuTjE8SkuBvQAC6JmmYnF8CR7ou4onconShVK5e1sZsb6WELcVC7ttPeoq4rhhceZTy1F",
  "key10": "38DSRAGbE7bsoQX1k7Sx8vPPU9BCRmGJcF8T97TVVjnC5dSoAgPKUxVMMq3Wuj1kVSzuNLEMeQbSPbF3remsLTfQ",
  "key11": "4qdqU1gEyEZX9E8PyN8d7dhgtx7GJzj8Ph1E5CZENzbQ4YsXfrNcmh4NCqYWVCoKqp5KbT4nmSctZKH1Bn9jBEAe",
  "key12": "4C21VYAAcsNLK7WfGi3swn3b8864DqBAJfE1p4z24GhRnRQgsg2gCkUe3i5NFLKMVpKZTbvuKnS3AQZQhUzchRGh",
  "key13": "57x1k6B9KLsww1zr9joVZrJEXofg2tdR3VqzG2WXYFw77w3YnfAXSvQ4pafrLbf6bZFkLXy7srPLnristgPhtwFY",
  "key14": "2sBEkyF1gqZ5ZusnbAVNWzwKucnpqx8vcmAHQKF5T6mYF9Km79C7mXVeFjt3qR6Gs98AwunuPB5d6TpxUPxzVMKo",
  "key15": "2MXJ1cG6Ujx7CHcGjPTG5Ay1Gco5XrD7WZPvnqQ1Kk4YzaB5c8xsGEaJFTNv7kD3w2hXiCdHbrtbnJhQn5hfU2bN",
  "key16": "MVbCghjZ1fq4wuzPgWxHAAXfhg2dH5LDooaEFirjTVXXA1USHown7YrtDt8PMH2QFwLATS8CUnEY5N36Aru6vvw",
  "key17": "5JZejrmEGDzn1FktrvJBmaoV7LVuRUg4pnWRgQKoWRvZ6mPrDieWgkezj7rg1BYyFNz9DwYmxRyJwUc7t1RBTynR",
  "key18": "25aRr6uV4ULUkQ7H5PK8JKh8urJ5xBzmCAYdnY8sqwbwgNhtDy9NHL3ZHkvN4NrjXJYeZVt4iQfEtMqdc5VC7abJ",
  "key19": "5C8ztdsVC27d65skA6RemP91MEXV6RWkPSGasyjLinyRomS2h2yLT2yxgRPTL2WAUo5ABvoxz1XAyLyhBKZ37rkf",
  "key20": "5NA3nazvg7FseQrTRXFGJDQ8DgjYjfAGQs44hiB6Mi2Faj9smQ2Dwx4D5Jt6EWsnQH4tWyWiuS8e5wxHeFwRwiVD",
  "key21": "3sLvwJ7LVYCQTSDzBh3WwSiXG9YebjsFEDtVnRBPyMkEWpFyCrUW5aTnX95kVB7q1wBzb9T39wLYtZpVxkSMh1xs",
  "key22": "2H5uCLB9t5oWyB4sWbvLxDA4KdLSk4KXCozdtd3qgisqTKEhondtMnvhLQChmtuG8XMwmnq89qHBWmgrem2csPur",
  "key23": "2Q8cK6AEHAtwSotuvcbahtkcTZfTHUbMaxCD6cpxpqXQk6258a1zEdtd8dSML5sUsVCq8WWgxLjSFnJd6b78H8a4",
  "key24": "3hWpa9vDAeGq84xWmoUSv5N6hAaqLgTtD7qthJdSagz1rYUtBeScnSkT3FBCuy7A7gxfA2oHUdTUdyG8AfsqkA8M",
  "key25": "2YF4D6Kute1cTpKRQuZYvQNtPvbZezaQwgw22eHXT9Mvxm3xBumzpc4jFD3kXmCHiW6MYAXwsgu8oYiHUHWbRJYa",
  "key26": "5LCjNdfzxrUgmFaEjnB4JXW9WiGMT1nX2YdLFp1BYHfwZSGPjKSx5oW4ntq6g9y1jPNjGtKKnZ6gF655MgqtFvy",
  "key27": "3WB7u962WjU9oAEVNuNTWxe2Jh4UuBF5guEWhQzxwLUqgLZxwGEcbMrQZ9mWTxatD9oVaqjhWeEE14tuHiqndDmz",
  "key28": "N6eJn3xgCm1cTu76s2VtkH3RfXU9vCtTaKKsnDaWFweNEUN5dJvB75Xo6ZDBZRG1ttc1murXoicTXGJ9udfjsSV",
  "key29": "5YsSpLDBdyu6tF7P96zKULNDUQdq8itPbz8eitQERdT2q9AaEDsK5bG4D76NcZzSbXBvVsRgLo2dgvQ6r8VJRbPL",
  "key30": "YegTQktALgVFg7ToczxKSXoCPS6PkB2Pi8DW9ZHpRRbtzBciqM1EtcEDB4dMPD3U1YYvAUwG3kzrdBySzF2oBft",
  "key31": "2scupADnSZp2CG9EGKy7GWtMnLGhNzZMrEawFcATwWAbnEfENbLQ2Wqf54YBSdfXH53henL9tVCLXuNjWrqHSRoj",
  "key32": "3vsMf7ksyj8rTVNNtZLcftempng1LqDhRUkQrpCVBNequNHVeXsSBM8sjkiciFdtvdbjQ4aj3sonAeGFiaXctotV",
  "key33": "5s6x3JVwnx9egjEeU9UhHgoSjmd9XrBkmAKjcib7FqaQVfXYmUj8zjvpgnf4zmNb9Rusz6NTnigJfTHWTAVyYrPJ",
  "key34": "41i2mz8SeezAWWeD8kazhMzVfAyE494A4Cz4crXmc3j5U57zhcGtkS3WEQ311PTJfbbDBaW8X55eZJEXXnqBao6F",
  "key35": "5KKjmb8vmqJaUm4wpJ7aZ758dFEELjYt8UMQxMoc1yMqVvBnBggMNr5ikRNADyFZexMc7SDGixHt2CbAGYgZU1FC",
  "key36": "KVvC9rbvuwDKn9c5pGjkdsgMftdvSjHGY1Xygrg92uzWTG8U9oVMHczQMLsjjvv3uFJguaj36hZLdX21zP1RoPz",
  "key37": "vgZ64Q7zXiH1u6fdBn9rejDG4HwuV5PA9yvZx6KP9bYgofbhC2u6yvvq5W1YdJ9fwx2uvjDD4kKrEpTidRU1LvA",
  "key38": "4sQp9eNex8y38aGKAzkC4gxRSoFXxUWBQwar3uB88tSPJp6rJ2nVrTEGuwXATuutMTuQV3YCJ3raneTFLzC14gS4",
  "key39": "3pJVxd4QUVewRdpgBftpj4rVSz2yaCRCRrya3n74gtp3ZN6it3LkTTdWRdLY6TYEMYifi5WAZqtxTaKM2mCvrFPE",
  "key40": "3mk7mGtx6tnkduRyaZEUM82XcZ3ZwhCj7gb5NkkacUdbqgLnu5aUVwgF36DrYFfsLSYgGWcaMSiCdYsg1q6zqJbg",
  "key41": "2ia5s19raBDtKDgVxZvSMzLrAogp3BXFY72YsDmcBzPMSAdFhRncCwR6zFvLy9cUQrz5XEPRbzzggNsaHMbsYoUh",
  "key42": "4SM1BtUu2uV5zetgNcUy9JRdhXdH7wJSyTfh75f6fjrxWd5w7tLpNgRYn9wV9bKrxCVdzLHYNMbUMQMEikCWRgFa"
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
