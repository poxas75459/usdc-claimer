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
    "55rTeGpZqzVt7kaHLhjyL9YopmEZfbWPZBFpSr8SwZn1MqeSzxrbVTdks1g52qmjLG3pp1tg6LddmPt6uG2HQJV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6nMx9az4mwrSQcJmqyji5N1MvDHMdtMVroqoCXQG6B5E3sanoDVqX1h3LPAxz3kDdYMgG5qoxbh9eKAke8k6iM",
  "key1": "3P1f1fwmTscMmr9kS3MymQpwYj48su49gFPTGMY8gPVmm6h7tFwVM8URLD3ud9B3Cw5gpcSEPinRAWFUCXf95X2D",
  "key2": "4bFVkBn881qQij8Xj1ywbFxXpi8YSdrj6afiqP9NzSFRd1sPyEDrp6uBLHs584cjqwfFQckNhyuNpvRTcH5jKuAV",
  "key3": "67AgxjPzi1KGwxDkztL5kFLWmjnVt7WegKZHPdHZeuhQqNqPs9L57oany3NFvRFTSuL6qWY7FNz95gdPZxCu2f17",
  "key4": "yJ1xG4NjdGSUiebecPHUc1vEuq6K9XtoS8v7CLBSxxCfFD6tQZBLNrqNnZ4NdJfnfCRFxEKE6cKjnVj5JTNczAy",
  "key5": "2scseqzxC6uLt413tiNF9RR8TSkGe8SJos3gWPvRoFywRxVYU6WtpkLwmvfiNeqFNGLhbGEVPNJmG4Xb9ZyqceJ",
  "key6": "Uc6wb3Y4fF4mGWBkKUSFHW9zQ6ZLFs4xCQQGq18FL2UX2H4cJqxsmENmVNe77sK7oxvLm7998DVXmtT5ody3iXG",
  "key7": "4VeETqhsbZDsL7yqHfJamzDvWPNHVQxJkowGKYReDXzdHzTasr3tNLX2D3m8HQk3Tk23LzmuePy2ab8n93XD3cM4",
  "key8": "2TRV5VJtjHLP4j89AMDtL3LRCfCJHJLZyx8oQbJs8dAHiN8mj65QAkrDwPezgDN2HYGtFfrQT84HxiKhY9Y7Xo1N",
  "key9": "5w4CrK5oDLRCygfx29VgBhGXtFpTT5a8KUsn7bWLrYnzbLxgDbaQJbRoZvGEy9VeecKmWt8wjngCxLtzs2KqLZV6",
  "key10": "5pzU5wfXoPhgZhEnMQU3KD1Wt5DW6tkXfZAXUeCCxgLDywnSvDmECNZgyvWTE86d9jwP33dnmEAMG91BQMBzYvEa",
  "key11": "iu2zZG4NxdxpJhaLERckYZ15M3KhKJj2YD9nc5rws14wuvaCEGfAChbRCSUvP4mwVy6vvPYwjs1kLdV6nFFQAW9",
  "key12": "5Dadrvef5VgAuEtdUwBVWzdUFfQgFvzEAWaatWToZopGLSD85RwN5DUEhxAanf4WYAWTB2zg8T9hGXuTszkENz5X",
  "key13": "4GNRXfqrrigwpAzSp7WNmRKZT6coCJXe6cKUQC8VVECWCgvamUGmPjt8xppQFQVhmjqYy3FEY67TDmtYBzhwtb4A",
  "key14": "4r9DT3dgGmcMhPbgLHDyVYETn5mAeMRTyxDvzVsqds5hFCjRh7mKSg1RkXBd38Far2eMx8qvhtEbGAncZQoQQqKn",
  "key15": "Cs17ALK2k9gyDMDEEkpXrvzs6geeRWP9gP763prxXabcAFkzAmcHUYSgYkTdf7hvj1DFmT8fHmWQDD5DCXwcLTJ",
  "key16": "4q28ziNhixvnwpUkw5uCVMZPULQ8LnpKmiXbeyQswFyshuJVxEZMJEiSfT2djcXNaYx3gBeFNvd3Vykguom4YQvg",
  "key17": "32kBhg5UnQdcFw2VpTawp6vSUYALXJEDngN9fSB2MJoDtcZteTdSA7GrictrzzGGkVC2uRC8NHoU6fRmJS65XAiE",
  "key18": "4WvkDF5FnbcDR89FS8mkLzEr3dUrj1RDfmzETfGZ311SL5SchyqmMZwnTcG3SJ756wRi1BvgEj6fwfGBKc8tQsZS",
  "key19": "5D1uGVFuUgLoepLPigF1Lp4LPqffUHHeLF67S852B9TDRBcXFuA8t8ijNXLbuNnT1C2LK711YrKb7uNJ17FD1fvf",
  "key20": "kMzazJpqqujDi42iz2UkxJVwC7YbhtfNMUGqach8yRBffHJxMLLjRw31ZKswNBfr2pHvtk9dZzSLoazexkVhuEC",
  "key21": "84KvRjCSNWoFwGv3r92ZBcBedS7Mq4d2QPYFrdNxE63xn9Ad3DUfwtErUwQiEFfCdoAJHPsrSCAa2kthFyLNogg",
  "key22": "5Mi16Wa5ygFiHg4MPHRhocJqme6W6RphKQqjSnqyknnqYzTQ2VyMVgqUW9oF7VtJSr3hvnes4Eryn5pqMAv8HnPR",
  "key23": "543cL3dqVsq78VfwrRMYbDqQncGc5LBabqavgYeMUUNVxBaEbmXDFRCGzgEqYsDYMR5oq4iiYnwJB6XAV41RKEFJ",
  "key24": "61gj2ETWYSFuJMMj98tDQzBvDfHT6VAMMoM5EUhwTxr4zD6HxFY7Ys3mZvnzejW3CBVopMQs2XyPnfm7WjBSZtKB",
  "key25": "4cUiQ3Ujj7BduMVVtfL62u2s76PPw3Jjrg5AL4zpvxWPZ5xcTKQwVkyg6kuxgR1KcdGfJM5tc8eUxEA37N8YhGGe",
  "key26": "5Wdm6mi12VYXMapnnADKMJy22hBYHVQBw8hpBSovPDyuzCN1dZTsVGna7Et25oADserMoLk7vnDgR3JwjFEsk1Ac",
  "key27": "5jxHiU4bEn7GZ7UipfyspzChFRncizzyHa5xwLHwhhyeZe5vz8o3F7ghTmGgYAQcsAGFUnTCx6FNRtRLzFwDY3W8",
  "key28": "3mqn76aB8twTJHoD8Xtwh18ykVhP8Ey48sXYWjMfqTmJnnBSzsabwS78S3Nbgxhzq2Ene21sXjB4wixmx3h2QczR",
  "key29": "28ZT3sEqAFgoJ29Em8gw6uUZ21djnEX2tbq46A4zX3EhQzDzS139wRJSoDD7QQfBh6MC5rHUVaC5z61M1VWyDWE9",
  "key30": "5vvD1puXXpQGpCUw4ZM6hV9ktRNcmgYBxyperFwT9cwp2KdcLAzreJgdNdf5BgZY5RiEyTyS3D2Abdjhz1Nq8aeR",
  "key31": "2utY5ktkdX3Bi3bPETAqbbwgi7Y9Xs2L65Sj5GeWLUMmtds8epjfpvL6bMvqNwLZnF9bDEz7QGoLACGc9DBytV16"
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
