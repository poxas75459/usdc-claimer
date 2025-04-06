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
    "4qnkJTYUVhqtYLSARYtfrR1zP9NPUnMfHjvrb9g6feUnPw12UREiy7tUawxcqtoktw6X8GaEz6rFd7A427BeNN3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZkf2Tq7p3x78k443GLhq3Ckj5WxGppfx6wZXfC3F4qmJtFkV6NGWyHbd1wxqB3fvawEHJrw5ELQ8WupUspKu8S",
  "key1": "4V2MZXx1F2V7MHTartTKhyrk576PYunm18iLQPN84MxkP9SxmiXY7yRstUNyxQkR1GnMeLx4wQWy1zvg95MZziL1",
  "key2": "3nwtuD2HjvkhcQjXTKUvVHu8amJ9PshcSzDMiFNWXjap8zSmZxMukSwupcsftre7SxmkBEGzHvHAZSvKEdM5btJy",
  "key3": "4iGYZPZG46zKsTB8coLfghw1EvL5Q31cSrfM2syKJFrgCn6Zt7sfJKJyuMgKvcAEn5aF6AvpduqGwtTZCr2ffVQF",
  "key4": "fcEVBa2SDny1DZ24EJpyv1HGJskuUTfJJh3j7RTptHspu8BMhbM9J6kZteiUafawt4iUBqxWJq7HS41a8ybc5YR",
  "key5": "678PQM7z6fWVQsm1BeDttakPUeFNVTEM5KbYxKkGwuiAUca2sSpTpRsraP8AC8xHXgc4hTEdXJEfAnjNUy8cPDkf",
  "key6": "3Wfk1p6NSwhq1GfTom82ZBYQQLYpURzoeHcaec2S9dgF4KzsMofwbmosyT1KkXjGZ5VccY9iXRazgAQZeEyvQX6T",
  "key7": "8LHQwGWcbdDJ9fnXFad18B2EfD7KXTwYwRuA2S7hFaYCB5oFRj9MjFizDHScQPcAtvSqzdFLDwzrb64R46tZcmx",
  "key8": "66RnLWax4RPCLpm1gvgGRu4ihiyoKcx4yuppgTtAaqwqSBMD4qnAv8bHyDYMYbMvTDWpzouJK4TaAuRGrCY759V4",
  "key9": "2shw7ym4RHDdhSL17bGCz7B6XyQbasZFotqnQw6YmpAX18BGvcT4VK9Spacc8BWKcU8EPqDKhjWS3ZHGcfFb9yCV",
  "key10": "4E5QEMY4oJwqM9BRPeKz3Dgri4283RQZfeHapzYS8ey9nMe84KncHnYLYS61rydV3mo3DLJEmNfmRHJ5sDY5wY59",
  "key11": "4XbTjFD91dmxu8yxPmS7Zu7ZM5w1M8m51SKaV2gH57H1pJ87nR8NRkDMjk869aZZ7gctqcGs8mazuJ5ock8E1faN",
  "key12": "2wtgs9Jo7xm2i8fAy8tpFyHd5SpNrSbMxcoHHjhGieGa249gqpYyhzppN85ivZAL8GoooEjprS5egrVGN2ku5nmp",
  "key13": "SyS3MuESBn5dEFNQPUoovV3rBhD1gX9DonSz4HYJ1NcqKiU7kGhGaZKBvDyX5bkB7NducpycR1GJkemHTkDRcGw",
  "key14": "3LKiqHcWNwMQnr7M2cR5Bwn7Abiz8MTeAYDJrvanXemWPvtLyY4QxWD4Yym6y5G5bESxpoLSK8YML76bQ644i1xR",
  "key15": "2XgtdmnfDctNu91RKH7uS1R4yamNoDrfwxUFiDc6M5DQmEZfm3mM1whFj5bja8qfHUCeB4oZDg31dGZx2kD3drSF",
  "key16": "HVmTreAQMeDATX23DbNqvSKGE1NZc8zJK89m3Rbfm8pd9APqk76HWRz5DLdyPA39LcuGirzt471bAqby3HPhMt9",
  "key17": "ukEEAsAkdNw6yMmYcXSoSN1U3uUKC7E5v5kvszwbbXCq9E42eD1ebtEYuuAy9bQzd3gvLvqWPz673NBHJtCTUuc",
  "key18": "43GStGBScBUBsFixvtcJ6mjmLC9oQXbqNxy1FuRbHkHA189nAGWzqLd4DVxnMdxuoXAAybi6ZVtKQdfHSJ8qCUuU",
  "key19": "56nihFxFaYpzuWKUyhaKnv6SZDEjV129ktaD6ewaDEZ1Wnt3zwiJp7acuDmHzkKmzis9oyYTB2r13RYozQ3pKyym",
  "key20": "PsvdRzijmBgxXtv3YGCkMzViT95vJg3oeLk8ktxaiy5DcVvLEsPh3uvpXNDR9K4SY6YNp6WwcqKX6UygrwMWqNj",
  "key21": "4ewitt5zAYD55Kipsqv4MeTS7NQi7VqYmbubMXS4HiMJjQ1NDKroS5WzTgsTfzeWnwLQfH7nh8For5xNwWPJ7nbX",
  "key22": "2DPbbwoR6mGMiSVG8beQcy52kfVBSp39E1qLHw2S5wgAWi2K5x7jXLjHC6wg5jW9KHsQPYNAu9X6MJM1DyiUuqhT",
  "key23": "5GvbTf11N44QWjkcoVnyAVBFv79VCMW6gTHjFUosgJ2eqvbzKGZusvaV1WeJtTnVBJU5bcMsvGSRonzco2FzTCi5",
  "key24": "5iC22rhejPxesLVWGgE8niuP3gUqqK1kouGEttTZdc1Q8SA2JprAGMBw8z19MPr1UPF8J4TXtEQqHKH6ECacEuHN",
  "key25": "3r8x1PxrjuAkfAYXqioRwvLhxpJx1YFGT3kzeFM3o4Qj8damJbDMT371ZoZaMeCaXbo3NpFvX5mkiWFWdbHdP4Ru",
  "key26": "4YCmSFceRSnkwocJwQ5y9YBowA2uFc7b4aSUmCdM4SVd88Hd5pCFNkNSKmp8izkLbHFTmpxQGMftPpmm2E62e36P",
  "key27": "24RzmYZ6o3B7D9cfj43WEMVcRqZtfiEv4Krs74PmNm6cskaYgrC9U3tngGSph1Bz1ta58ffVRHCnr33HbALqymNs",
  "key28": "3Ff9vNixLtcRmvoFwbdnC55VFLX7W3jQvsj1SpUCqshYGSQ8sqFRdiUfG6yPopETWVLQZt5y85dy7Kw5yStt2AKP",
  "key29": "Hy52XfC4CubfQfbbdfQw7L9anzWtNUfuiXVi5JWYCMpkbQmGUcpuQTzRen1AYkRzqNEx5wgF3ghbXsUXoQ16jsR",
  "key30": "2fJhHqTRGxeSA24XD2w8GZqd3VZ9iQwgRrzXCvKk6HoLPDQKsLz3pQZTdZqmAHNvKGnYyXdVPPyKvo8y6Z9SQ1oS",
  "key31": "4mu2kT4ooG9wLEaKddHqPgSJYip39fb3rz8UuZLEvRXrEGNeH8tzoacBuY9EZTEtgdu6f8idAnT3bHHiuoEnubV4",
  "key32": "3QAYxAUPYRmxd7YgorL2WEECE81gYqigxWAdy2DUS6LgJ4xALdKttAb3yYs27TvFP3SzbbKCVTwdPWMjbqaTN9kj",
  "key33": "2daTk9yVneEuHd2NS3zhGbWVT4iv63vhfjGAaYA1ULr8rpoeygLiZgRUreij4Kp6CaXzQ5tKXianSmJQytSE11Fs"
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
