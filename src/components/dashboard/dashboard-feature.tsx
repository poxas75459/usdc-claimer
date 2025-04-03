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
    "3a6Yuvj3M6VTXg68Y5qk8zSx6Qt5HNUrrALPFhvsTZejbfLhN8Hv9rE2SfLWahtL43qcZ2rwenQALnffd8W9V96R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bDDNUikPdcfHYpnm96M1k6QmE1iC5ekrHHatpTqHMNGmAR5iqYQ1QTDAovRGXbckZTCFU4VMaypqGB1X6wkr64",
  "key1": "5WjRSrFAmD8f5pFn6z9VaKJBMRWQ43iS18ECcqcBCo5FB1Lg4WTzn3CHJ417MNh97iGhhsb1w7ZDPqqGzBDXceEy",
  "key2": "2YMx5UNRboCe6fMGuzd8QKLr6JZpuGhkaTVKeywEPvFW3UFhGFYt73FCJjdzU2mGrs2nXYCrbbKQXV7egGpf2MP5",
  "key3": "Nqt4gFJE3GNNc6Q1AcTvz5tZeq1U3mCLnftunUhGRurM6KkpeF9e8m2pcE4k4jyu2ak6wDZLAymfpRpf9ftEgx6",
  "key4": "3tqvveLUpDuUCwHzPnm1EkLRVKWyV3cyYexQxDv8n6jh2qpgPGbJ7avLParV5bJgPki5P1GXixhV4S4gX53RU4NG",
  "key5": "DuSSv6jPXBvThKRupB2sAszqmDVERHC9T4GDbsz8tnwBrziPcpZQ1CuD55q4zPbhcNaZHugvCWKnvBwumQxVmJo",
  "key6": "yvBLkLAgNHVULiaGHUkpo4awBDogGS7McBQVwummihqyWorTgcdbpRgwoMAg7f48rCe9bGJiZXy2wx2esLvuDj3",
  "key7": "2oSL7MiKMR8xzKUwtE5fXkCVtx5mbZHj7tGUwieS3FoEhGWmsEDAwcUGq2MsoS8VzpRG591CRDcPUFW6xttLYXLD",
  "key8": "342CfrV1g6NduLAcBxA9Fpz3ZuSW3jByH1fvGhJbuxi5Xx4nDn8UkbLY3Wb329X4aafLTefnRsdn21YR2GT1hkLL",
  "key9": "2vZFNY2gWnFonzEFWFVi3CBHNE2CWrdUME26f6cc8NwHuTeqz6KPMqQgZpHEeatRBo85HTfq1BnbVdjWEJwkurY5",
  "key10": "5VgVHm8qZnDo7jPeg89xTn1w11humGgwE7fBVhuDdYH8s6XMTRXUyKrQdYgkWH7E5Uu3Zzq3GwYodja3NJ4QQFR",
  "key11": "3fmAQz5NYL9QWihAp1XBNxMSpER2GBudYMYnyd3qmYDsGMYrQF15UYEXEFjCVBdZVV8gvkfWYGHWQDMmNcmgF6Le",
  "key12": "wi96WZwpQFHZ9svAPwhUuASWzVspV58ERuQF4ZDyAYCqBPJzY9WJBnygd2eU3cxryUEpkLs5kcjUcQs1rYtYvan",
  "key13": "3FsbvJpAmZ1kjXjbujk8Ct8BaurFAdr1oPPpFTT4ciFssweA9HN7W9ziBxpa3G5T8SgWbSgzf6EtrYsfsLt8T16m",
  "key14": "5HufB97L3AyYo4pQpm3YW5Guk1JooiMhYGawcXXsWSYiZYNKwNHvL1cRBv42ZzSwFtJ1zvKF3kqb1FAfw9KzAxiW",
  "key15": "35zNuS9ZrQHgecoSspKUiSSrsTZGj2CDBYj1SL74HAEUq3hMAGDvDR3p78xiguuCNeo8WzdmC432yzndC8hhUSbP",
  "key16": "3HifaRi9ZVkQL2AseNofJqtsjGyzn4PC4P6eB3KJp3GRtzSnSr3A2RiT6QDfCiM8QrhCFpHkhex7QsKzH7Sm1Hpw",
  "key17": "297WCqMUQUrNBL6Yu3T2PnBbxN8cZuFz9bp3vHqjuWB6aE5VNQiEkEMcYVLVcYih6RB3iTVNZhksYUz6G6s4YpDh",
  "key18": "2bUTastBepozzWfXrmcnBTghsvpDFCVGWV3ZmeHgfEy2JuA8LWaEvTZ6YDFSXLhdTzmvhfpH8rH5bsagLtgiiv3Y",
  "key19": "3QcG9cLkWKLAcxR4gPUz5rSKhDv2t4REDFb6agnKkpuQ9qq4qJWAjvtuF4huzBbBo3Lkn1C7iUH4fB7177X6jQCH",
  "key20": "oE8F41cMFN3Mm6KeSNSSuvsvy1Ez1X8AWwqyt4XCuE3Swmzq9dKZFgpeG8oCU9tA98T3UNKW6PZx2kgx4gF8Awh",
  "key21": "2Dr4rSQmPXwQPFkifsPvmLRcEEBGaiK7HX5HVS7cRm2RmQ5LtTvQFrfXpHiqQ57Go8x3NsWkHPrKpDSv7feseUkB",
  "key22": "5cJxcHYhuscgkqXr1SVjB1hVDyzQNkQ71rdwxFnEJqRaijhEyCHr3p3oBusP9AtUQrNz39EaJ3Mzm25r3hZkbZD5",
  "key23": "5j2czWNnrTK7Fm9sVWcXCLiPP5UyJ9kMXwEQWHvXpeVTE34nSNkp1WVL14stBgrRbXau2ZCpiWC7Gu5kfZ4x6oE3",
  "key24": "amAtaRZGw1p2VXDrLroQcvavM8khq3p3CHMfBbwoJ2W8QohymCd42fpoivH363Sw6PRRiLMitv919DLfHmcNdnm",
  "key25": "45BKRU9dFP5VacAeCjcingz7WheDx7KPMUmgnJJFbn9zDhxzhRziVN4yZWUk6eS5eZ88iHf1vuh1hhTgifnqWA2",
  "key26": "4LJPtoJCPGjB6Bx9icsLKsaTS1HF67E4aQroVNHxc1HnR8WX5XqGfTPLkC2QXCBCAT3KcGQcTun3ZvzX87LoP8HY",
  "key27": "ZzubdHe997BRLsaCtTPLXjz4DZzin9Crsq1eemThrwk4zkLBvra7nRxRP4eNLutPM1ZEFvD4CjZ6hyoFM15vBWR",
  "key28": "3Z6szqRzpMWKqvyL2asTAJNznPLee5gGFDZZN9mFTo6LdpiXifGatNokiwx6MEHuRvpZEbvr7voc9KWujK2MzHD2",
  "key29": "4qaB3kwME9ub3PuweEnLcfVGyS9tWSTM6PGnuF3UBmcEjQMgopffsNuhVUN6JDBKd1FMXgno6v1yZ1xDmUWgaGCG",
  "key30": "5twkxWA4SZDG1siztL5QuRqK8nmNBDYNHiwj8VruTiiygrgXDVbuMoWgZmTuVi3iwVsqBsZDKn9BGhYEHX1BDARe",
  "key31": "3hs7xbhc7KtNF5cgTUTUeBcfyeDdZxpf9hTV285dtnc7ofUtBbTLQ25qrTsQgk3THSXmdi2wJxzZzq35NyvUtuYd",
  "key32": "3smQXciHLCDqktF8WtNrSvMz8U1UTrmPTXP4DoQAN513cag6oXipzLLsmetfzkq12gZhy4xWNoS4zFUpTPc1hGio",
  "key33": "3hoX1LjKJZ27xvDY4uRhHJTPvTW9GKRB6f3gz1JoNAMNXTXjv5ymjdiiYXaoxRjFk96qAhXyTVEzQB6XdqmsXss4",
  "key34": "59sbgvt4kp6vJpFoXGd7dzr6nkvybm48dFZ1j1xXhkHnHjqwL7ZRhkDAvVVtXkGoXn9hMSi8RWmG91Hkp5a4RWE2",
  "key35": "2LyFtN1aozqYBuonS75yoMbVQWNmkbKFNUwZnYFXfbUH529VYLG1NPpUfURt88LJqZGcyR4zRk1TLcudJhfQQF3a"
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
