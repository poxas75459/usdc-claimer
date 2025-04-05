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
    "1V8iMeV1jDzkadRot4giV4XLzeE5NgpYh8U5y2ciBGFh6RSVhU723BxsjpmrS4SEnk2NUnzXdj77DFSnsLGBTKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXL9rwMQFbRvuvke4nU6hzg99qrd4WAEU5wo9tYm8iVmSHiE7bSfeDDh9PZMgfwgqixe6EXtXXfPk5JnuKaWYPk",
  "key1": "3QoTkj55uEERDvUt3xp6G7D3JbHM5cfMNVNW2yV5uM1EbQ3gPf8Fy1viES5a82ULk5HZe9FhDNXSQenF47ZhL6KC",
  "key2": "5YStN6CS86Eh1ipE6N4C3VJCVnwrcaRvpNcvbD5MeqmeCTLVCmCi1D4URhfnw5XBRJztDMHiS3qtxHJjk81oXdzx",
  "key3": "5p7gUB9cyRXrm7JJSmMuhqqAAabxfqGrCEUs265vL4UMbQRNfEvcSThJKiNiKTXRPAUWNDPHGq7ekMY39T8tP9kC",
  "key4": "3iRNx3EgunMBQ8ELQJV8nf9Woqsa4ZUoz4ViXCpXtBo8hRGF81YkPkJ2oZQh9SSVvy7BVQzi337Fn2DqqUfa8uKe",
  "key5": "VZpWYW5Rda7cQc7bdyod2PFRhyXAdcWQ8cZM7gpXUPSMaUvrEGH3tAZtfVyWoL8kyKZ6fQqd5hRYVJZ2eEduY1f",
  "key6": "vMHE9n8z7PthbnuBjZk5GwLg6bpS76vUSN5Y5zGdgrF9tM8WqVYkAPxw5HuniL9b2yFuoN4it6T748Lxq1aF4MP",
  "key7": "2eq5PE24oUtpV4tWd7be11ZVJHgLmMhskx1YqDj72d21g5fTvnXvxfJV36rHjGNJDZnP5xV9PowoJDuXPrYXam7y",
  "key8": "2aY5pAsFwCeL3CRkjPd3oqW45LV2Q7rq2y3hNfVmvXYdczM6umwWSKnxsUAWj57bv5VU3tnm9EbE536Q7FMauPHS",
  "key9": "44DmVZk3CAvqeGwssU8SuFt5bNEDurJJPVBuivjeJ8KFVdvVrSfPiyet4jERsnyseS9KKPVYLV4Xd8yWjsfBViD7",
  "key10": "5mExBSb3DqheXBkadgjz3GaMzUQRbRm83YhiA42QnEZzzYh9aRHCbeFCUNg2F9uxZU3z2uJZSZVwQvPN8LfgYkgv",
  "key11": "2nkkTtn42yVVrx4EZGnzRt6KLpV3spvaRvXRxX3NqzKepSn4DZ5g6ApySsfkfFqM9QMorBCTN7rnKHyYYgYu2ddE",
  "key12": "2PGLARF48LrPagznnQ85qzp49KpqYzk36jgQ4Z588BR5MBbDDZ1CChVpCRZ9aDxsocWjZuqVKXwMtytJUn56v5Gq",
  "key13": "5aB2xcFzWQajA5kg21BsPjmNoWAhn2Dr1BaCvpyVnivNZ96NZmTZ1BUPMgNSb8dVsW2jH2Y6jeTnsT2KQeMknPcp",
  "key14": "ni88oH6TG2ZaP8m5kTC21C1MP8ewKkQnePET78AcsUFEaKCtZV9PGMeeDgaSm8wRAiMttuzvHYxxFaPJQiUFxCJ",
  "key15": "5nnveGRrdRatB9F2net3awAUfGnVwZc7Y2cKz17pRhc2z5bSmiT1pXnihBfcQu79XXYE42DZQyznbuBbaXSvuyXD",
  "key16": "2VSjmae241L3VK53QoKVEnxKGDnt5UWVmQTJ6ViNDULksz5eVLzSLgJHos9SjR6Ph37unJPQANww7fG1hiH5kUS4",
  "key17": "4FnFo6iydwW9UdizkRGxUGPDVBQfSKNeqrVutGRH56oohFUT7cxcuVdYVHeuSWVgvoeupLxK9ZswzmVjSkeKckT3",
  "key18": "4TxaUFeBTs7R2yK5TQ7gR73s356H9iqHZBTH3WECwpDmJBzTBDayPXwWRG3NYW1oVYeENuC1ztnKLsbKs9BwURh6",
  "key19": "4bgK2c8wVVJPzqBRV9MKpBE8uAZvyLZkNgMecnzfJVEnf5p4SXbSzP3a8HuQBP8vWjCo1utaspjTzBctx7RAgErR",
  "key20": "2QJnCqqBFD2SoZZrGvTgZqTXhuXoSJNgkxBBAiyJcmi6S6ZvHRpTrFEeAw8ppsZ3Sg4wtvLFYS7PtgAmECfGNYCY",
  "key21": "2moWxF8Uvb3JQYK8T4GQqNGskHeDvyseThhEocb3WGw5fiFt4fL3GYdVcJeBuyDYkSaYhPmCc1dggkmJaGHbApYb",
  "key22": "493MtTRLhk8KSzXS4DjE4N3G7Crs1AVGTpk8dbnhun8bNMP8xuFNn7vGd3FJafN5feBSy3PSoQscmBJw3b5JrMQj",
  "key23": "toWr2WRYXChtTe5jjaMaSJP3EzSrKPp4ooFvbjuzuR1eMfrqGiZTLHnVSQbu7UiweYafTh92KSYGshusFTtKQ8M",
  "key24": "3KehtYhApt5kD6CMbNAeMdogwW2sx81GKToKy27FtfoDAnyrv3hVXWtxs2933SfJw5R3CE5ivPreZKtbqJUY7o63",
  "key25": "4F8mPnay92Wm8SgQiY6p5T4KSRZugyVQdfPASnoFNC5KDT8BM2bvetFEi9u7AFHYX6NtH4avZmbJeHFnQm7LVLrS",
  "key26": "4xnzkejUURYHwnVJUcxKnABD3gsuNh6jWUg83gPW7v9ZERfveMBYpjgvNu8vMyTgPgZPTfmU6TG5W3aFnbpBrX13",
  "key27": "39igT4ARsZCdP8WX4SsCardLHWbkryPjnzh6doBxrNZVk23vvpPAF5UquMzs8ovfgb2nUyooep3CeAFCcJqmdRE9",
  "key28": "47kcgZDqTEBbpkho1tr2vZkhohZkrFvHByYXBU4qSYwUT9eQVyv3vNj39h94h1fJpx39fBpELtAXarVTXBaqaWFx",
  "key29": "kq3iqTt5kyaQAFcGMMWXpeTMYU9pmUmM7gDYSLET1yHgA5RJrry1u2P5MuUkVcM4BkLa5jKEcAHkRRtab4aVaJ7"
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
