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
    "5cFS91YDAWYZk6pcxk56bcz5vU1ZhG4KN2Cvt2VmRoKHzGvRafRcF1k2h6egLDPu61J5Jyq71tKMEWQPFJJ48pQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Z9T4L55eR4ofszqEQ1AsHi3YbpHFmRVNdacUCfcK4waj1HmzbUGSbNn5SDD3cn9dyRbtfMvUu2LQ3VGFVKBBeX",
  "key1": "53MaLYTk5ajMeLW7RRu43EydkJZYUZajyPTRRAmz31QdqUGiratykfwoKU8gGNmJq1nacfEUSGSNYn1ftj8HVghd",
  "key2": "VHUzFDayXRxhtLa3kf7iDneXTSfVp5s5Jm3zGzPoThdSMSQX4zkxwN99H5x4wf7aXKqd5BqpFt3PZJycmXcHrn1",
  "key3": "5r1hTk9oFWDfskQhu9Rj8sZ7k6aNy67E7HtYWAURtuXQAzoDxbxu3PPwdLmdjn9EFYuthpTd9dZTTWQBkcvSSSCe",
  "key4": "5YwgHWpQQYXPKo82ihrQtHhXvFowFnaZCCWPmSZHyHx7TZkSevyAZfm2PyNxRa1JZhTQyuWUPryvU9jvsYtyujQP",
  "key5": "3NFtDD2MdcQ2HpBExLKJkKxj5phFG9uizAwGRoCQW9eNg9gf1iRp9dsP9wgumMNAHDGSkf6iKR4KRei5FvKU7W4P",
  "key6": "4vkqd6zLfC4oFbr1N9uPgEhNj4VuXuM3vmkG25EnNs9MFV7t1dXbKdES4yKt1p4fnWf3zCsfUhkDyUkMNamsCVtt",
  "key7": "3Xp34bpsbYtGXZZWBQu9Fnc9jbjdTQxFq2tDZCkReUaZbh1Ub9kkJ7i7mCjVgEz3U3fsbJuoFrau9QdzoLwiETWB",
  "key8": "5XbZhibSxWBibzHhVRdKEpenQKHPiqAV7jehUH6AzKMDjZUFDfSiW8PEfzCnVGyPfTi5ssZXBkyJohF9K9ZsDoXC",
  "key9": "27Fia7iDh1LPZWt131WpHLNU2P5Ee77qZXUkXsamMF8QcYT5Jec4XJVGs5YS1GgRez4fcsTCZW896vKS24ugNagS",
  "key10": "25woviHQGhUCmT7njSpdyiz3iWCjasBaQY4kdbFig2w3HCvpnwACijfAxDE4jLicjRYizv4F5mvmjjvAwEV5HEa6",
  "key11": "5G79fQ5jBLyXHLTUeJ9vzWvMdQAkzCfiAFVLw6ENNB7km6nnxDgrYw5tYm2qj23tzVc9V7TM3Qbr1k7PRZjc61tN",
  "key12": "5QTj4U3nX7s8eVhUwzNwr9MXX2ZbAAN8w82Ux8C7sjxP2inRJ3qsqtccWeoAQVFMPx8V1ajLF4EW6Ck2VmxwBbUr",
  "key13": "2p3K1W78bHP2QqXgs9KFH7jEnE9v5PdZL4uMBoShWwRrs8RJ32a2yADuVXuvrjR7k2JAZisqhLBnbXX7drqdhK7y",
  "key14": "35a2ARpnCzom4wgwweTWT88HSmHnXnx8orPH1Sm9HCbzmyhgMhFoRMMSLhLtfQPUzdAzx7UbsZSsT3EhMLiahZcm",
  "key15": "5ZymaLRimf1W3nBvn1csJCt8Z9VMeBL8nNfhHpSJi5Y314mtUMs2ePyDTocNqNFufisF4k4BLKbLLWSGzVpVfhAY",
  "key16": "2rmAAJ5zx3QHeBn66ZH5qHwWevBRXRhVFxJCekGYTreRpBvXuqHRsT2rczVgPmWfa9XX8GRPFXcuU3tKwXe7GRYm",
  "key17": "2MEAq2PQS1Q3JMDDnKgHYVJYfF5FPbHjUAm6RXSaJeiY1UPAobZFgodxVcKoqGjCAYoG5NgeBe66kdkZwByVEEii",
  "key18": "2FWi4EUYDDGt7247J7zuyhJ5FF2YuzCNFWFK1ehutijHqkVtLMWAtjeqcjDQdrUy7mdCFJKm3suHjHuvBy6qU8ox",
  "key19": "R11n4YRcCDEQSbh3RmFnziQ6KJgi9E1sXjsnqJwQ8Suqcaz8wShHX1a83836prRw4h4fBLTdMogqevQ1b7cwmaW",
  "key20": "42nSqCk7jzM589PjaRMtk4qXpYUjuuXk3p2qSxYiKBddstuhY4zDN2ziVB4G9bA5a2h5L7VAAHeZMa4xzqFSTpjY",
  "key21": "3RFvbBXvKeVCikZAG9EbWedMTaARHNH1EyTZdPv1Fn1Y3Fa1ydwbkRy28L6hpe4Vm3Ue43KtD1g7D9kagCQJmpaG",
  "key22": "3g6VU76DscG9ahdRpGAtMur2rRq1nzu2FSnxFFM479ZxSeyPEEv5wgzgLchqbzsznKybdqAS4KAf3ot75XhJwdwi",
  "key23": "5VQB7DKmQp9GxdK1Zno9jTTcZeHNNYcMMefPjm4gEhFERTUgX8ZvkXCCf5pNcnyP3mkJWq6TbzdjFSmj3vVanASs",
  "key24": "vuwAxzpsmkX9hvqqHLxFHzwe88eEHDee8oc9FhNXEfyvczKQMFgi7NGynNfSX6fTgmTpqHWKDSuuj9Wd4YfD3Gn",
  "key25": "5Lvk2foR2mq1FRHJQiBnYy2d98qVRp7w4tLCB6yFGWTAd4Dui3E8XpjM8AEJ23Zm5aDNpVTRrA3bnyewNpqehePU",
  "key26": "4NRA6cDCYeadZ8tvRS4kRrzFs6aob9tjKxh4yN5yLx184r2z6kMDJ7sJABFxsd4BEmbWXFKL8arfHPKJD85oNoeX",
  "key27": "4P8XYj5bz6LiuDUcoKDS1pwjfJg8Y6DeQuBuczVbrBabgrj59QyxnYifkDhdwPJ9mDpznoPnKkwePwNTosbLMyWR",
  "key28": "6128wD3PtSmpLTiKz63ErSmfsqjpJPdfTcH77VXMoDH59vwtcGTUAUJZ7KqQrGst6KUaKRstTkHPJJVS4z75KRWf",
  "key29": "4Y686sy8FBs7tmWR5zwHxa1zE13n5x21s99mLAbkhxX2S65hkZZh5Gg7VJAaqwuivhEdLZ8JuHJH9VieijJqEgtL",
  "key30": "4S4yrGYpXuzBi6vtqBELEo34e69J5TT4bFvUyhtBsntrYiJ4QfRF7QvRxgYv71rnM8o9NtAge3DSBN1FYXXoq9v3",
  "key31": "5WPDywFQrUo8va4c59UC57vkajEiiQ4UfMHxRuVCqYZJQM2obTdKxPxAwFFe4FQZqwdgEGaXRCqGX259ALNaHaVN",
  "key32": "2puJuY4EcCMejE4PpcSnSeTM5QC7dToFnHfQpqisPWKc2abqgQn6kSKtHENxUgD1knGNFCYG7Gkhv2bk4w3YDgkJ",
  "key33": "5j54vuazTmiW7kBRVoAySUtCQf36pcddFthzxVwQut2BddtRYgxoSCBCao6erXrehWDwS6guMdrSoNu79WXGtDov",
  "key34": "53D2snasFUJMHQhAWUMGdvJz73dsUa592y3yRz9RtAEDFxPxaM9pg1FgsnohmX1gEJrUeWhckuEkgoXjeVVhQpqr",
  "key35": "5chUbVPKTw8pcLrXibt8wPYFrNko2yJtxuvAQtoExkLbM6xpo2X124LyQpBarvWZKdTcwanFSF175cYdDEULrb5C",
  "key36": "MpgEXCy42JBBfxGth6y9M45BcB638Rs3RambvXoTKp2FAA8gatEsW3fRtwBGqPWQi9EdBNUZDHLiYh6N15pkAiP",
  "key37": "4fpDhMprc4hdt49bJZzWxF6dqUiChZfPzbvosX3SWPKyLpu9mn2qreLrpKBLtjGm8wrPYWVwv4oV4WtGrioirCFQ",
  "key38": "2sSUh56eTS5AkkmancpZHqGv5qmim2RiNMwDobQZVaZQcugzBZimgKYtM88h15aTE49R7k4VL8UeLpFGhHGdDejF",
  "key39": "nFPY9gmJpmQGd8BDeBXRKsCtqxiwboZd49RPZpCEEdZgNWCpvyzRZa7xW6oth8vt7Mr7ZQzhYnMW5UEiweKiPX2",
  "key40": "27EuRfEoJj5vZEWfgqRhsNSuYx18uuz4ZPm6zV1FqVCJfp9hw4pCMo2iEhTZKGdEwCwySVsmY7XN8udEYKLTUs46",
  "key41": "jYgqKee1K4qZQ9NiZLhXrMozJPHxF1Kd5pmLzrQkawedpoqbvPP2XinPRsseEMRok4a4a5HT1Wb7vqr8ZZ4aCj3",
  "key42": "4HGDf8XxtUZkFLMrFTbDjZ24yRvy53Hy7wKTA13aoqFs7QBFCpfRP4yTA32sWDWMfmrZxHqsa1WDJ2qtMQxrXxLp",
  "key43": "4u3wbnLhC4SxjH4H4LBYjCDg6hYY5NUf6UkEGEuKa3ssf4evESAMuSiGkUTvisLQxELzg4LfnN8ybzpd5DYRiQfm"
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
