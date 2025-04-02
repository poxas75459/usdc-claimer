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
    "CrGxdK6xmtJdui7giJEr1ib9kckCZAaJTSSLaWmUHgpqS1QQ6hqnZDnxtnMCFCSK8MWSCcYsFt9zKwMPuc1yip4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bqwb7Rw9QJjkDJ1WC7H2hxYe7Rv7BQYR74sd5LZrtvjndJ6oMW35NE21jLL4NTBjEqzuQQmkqv4Eezk4cHUVRz",
  "key1": "yyTVT2pzMM2VAfyneGsFibfVmFXx7W5BaTezmngNDFBLpHY95HiPfr84eagqffFDPuUWd1drc45Byswq8s4Qfpk",
  "key2": "63bpWNmsH6wWvy66Ra5KxYbj2vbcF6jaHravBYJB4FwjTRotppevPFTWajbm8BQhZXdC4nq6m2NCkaq7p47SSBjs",
  "key3": "2nVLoV69dW2FRJndFR3Z7B9fQKvE1nSY9JHDjA3hnWkQfVcDh6whq9wobEWjwvQCBTZ7TWGyG4g5MqaR2k6d2iTC",
  "key4": "2Mw7xkRVzj1kDm2Uu9nf9VBnAURDbAzUDJByz45giTXKYzHYxcZBXUbmSz9uq8y6hz4Vuu9aJwQJWbHbMxBvj3Ni",
  "key5": "rdW8kzqojyaS7XYXbbp9HDZKP3KRdzE4LSJv4ErJUxWBRP5zVbiPknd3oZn52tv78YuK3QB9FhfzjcxvZUpbjy7",
  "key6": "5U6iMgzHY5RekHbsf9tvdTWby7uhcrihdbHCH4wVy39qj1s6RAgjrQ4nnKpKvhm1HWSGWN9KmE3ebKTfSQpvbJZA",
  "key7": "XmWUvMTts3Y9VVYKBWCZncebutPQbaTfwCfV1cFYj2919spLFsDXTHHwESoobSfbvuN1vKu3PzbJ9CDYPmGsLDw",
  "key8": "3BdP3xJjXmHzkHVf5H24PMYXPUFGTQ7R7xrkszCVfQn612ftAgCa26pkqH1Gjw9pzFPXBzqSwjZgriijW2JB8tsZ",
  "key9": "4LZgcfBphTsfetfLoSupxT2HoK6P5nRwyBeirUEVZ54zP4E7x6R2V26kJFv8adtBtZDJocHibKHcraV4FbYcK3KZ",
  "key10": "2F1TqzGWLZF9zdUXmprETLFoRpZhCrYZXaMXhacSBJhiLYyaVkqpJ2SsgJKS4HjykaL3ZDM7aNUkZi6V4jY5HFGg",
  "key11": "2uCgCmQYJPKTqiXj9ZDu78aTd1rS1AEzAm9YzdG1Z2wSApHCKewdTasjBQw9wJvcukkmZ2wFLTADe7yhooMESGQ7",
  "key12": "5BCi3gtT17LPeTMuCoJJ8vWbutUhPiTByVSD8Z8frzEHYiaAwVHwdiLscajMyua67Ks8HveqgJkSgJpn7SsvHVj1",
  "key13": "5SadHczmwpxuQwfGrvFtgpz9zgJMcSM2p8ctFHUWqfmgQ4KTwQrmsmnGWZJgrepW9zLJUk7aqAxhKnfJAayASiwK",
  "key14": "48EERTU4CmQ2vVo7R4R6jCgGVWc9ou9uaDCeC56FQQ9CUk9QkZhYgwdJ8PPRKLK3UCGAhG7fQBTMJP4Vbqz9faHQ",
  "key15": "3n8mzVV1EVRr3mTKZsparfkNcU9jbAt8KfsLeA4W4ExvVAbMiAqSX42dhT25JDQ4crqwhhcpojVycYNpASQaJHQv",
  "key16": "32GB2CduoZpXmLzjwJYYqiMHKCnYYPFtP7mUQPaddjvfcSNH9HfxC1DienA9BfLXJ51jSN9abhEA114VM8eTsgTs",
  "key17": "5ctEUkektb4V9GGqTASVRnAwJGVfCqecu6qQtLLUcMQcpsYWHk44wXLW12GHKAKz4aBRwzCV53nPjiyQKDfqWT6f",
  "key18": "4RWVcuPie58sewUn8NJ86VvrpiEqva5LKb12BSB1ksfSikd62Wvq58oHYatVjrzPALGcRDAS6MLZadRLnosWzr5g",
  "key19": "2ycSYdom1WjgSvYkuFcTKZKgy8nBcmkUgwPUGhKmrVnARtRkpM9LyvRsUc46tyLkgbDLLBqysgNKhaXkfkKxEEMP",
  "key20": "2nN4k2QZC4fuFs3jzV9KsryGJiVjfnMhipD42Mphqbh2WuMyAcsqecjRqXgRGJHQepf1KajfoLnC2bvS7rfTfQMN",
  "key21": "3RjAJA8NMGBVNcdRzSNhRY72HkaHa57KaVRU7yL54QZ88jiZP57z7PW4ejqftcD218cY8ksBsJYAaykPRFAfvPPe",
  "key22": "4rdafnhAL1YgdZSrGft61CZhLassGrj5w28YbtymGZ1wo7xKvFoNby6xDcJq9P1MHzuD4ZWUTyMJhpUxoRLfeVnY",
  "key23": "5P2NFj23Wo4F65Byf25HWK2hMXeDAyRJoY4FYJ63Q49NUAp7ucQdZ8S7WetL3UE9y9i9ZpGG5bK2EssjPnUUUrN6",
  "key24": "4MjN3di399bNHPnFBASErFHzyV6B5mNvvMYt2UUzMg5VS95jME59LfTSXoLFcW55KjpP9NToQuhHv6m5zEXncHi5",
  "key25": "5utgdtnfE5xMysYWeV23mGJD1a38KsBDcCrw3fx15pHiKg1hC8Hdqm357eqc567aGVgVPtFCy2XGqNeNoRoAudTa",
  "key26": "zgSe7HykhWJEyhMfziuXPm36wJvFh6g3K6VEeoaz1eFYck29uTAgHUa9aM3uuSyP9mVhqPqVB2Wi2bFuyiaA335",
  "key27": "46aQjvH5VnYyjXVeHRNhuV3kZdzuY8t2AYdLepzsufw6rsYT1t7Yp6NNrBipSXgGqU8MD7TXt6Qx4rHZmyyib3fV",
  "key28": "3xVjaHsL4w3qGzubnbiBU6m99UAe65SWC3vty2fvi7n5AFrh1PzipMDfJoiZcxGouoHfPqwM6i35X6yqe7in86ec",
  "key29": "28J7p6jhaoSbq5y8jec5DYDYamwc3sdGXFKnJdhiyddZvzqp8mpqmZau61pVmq4jCsZPTc3QcnEV56NwMWJuwFMJ",
  "key30": "4R4NZcfyEckvuYqwjd1PUtNkkhpJrubPw4ekYwG7Z5aBTqhNK4yfEoTEdawSETKnQArqbSoshQ1fk42jhuA1co1W",
  "key31": "3aS4KcXu7rAtcLaoVV2wA7vAkgoNns1ejrB93pYr9B3qMuSuyy3gqNoMr5ouSP39SwDA3QNmEeiQq899QDqL5Y1N"
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
