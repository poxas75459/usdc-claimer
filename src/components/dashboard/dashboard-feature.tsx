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
    "2LWwf7QNnpU3TihW3SSzabYakVy6dBGvAZ9xctXagv1mxVgH3YTMcVnfjzq9EpPVCPJaZxjQiRGsZUHj9WTRP41M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38WCp7DW3nsgAxoBxHhsRe7FGxKuNPTs9TbAPGD8J888r7fzhZGHPjwoJwB9vd9Kee84jaP2o53TNnKBB8Y7fj1D",
  "key1": "5Auzhp7qGZEiENvnMVnC1NZpML5nMNuzMN1iENJSWeNEG94i4ToL7bPVgRnF6V6PkSN4gxuqL3jzUAGtiYRoYe1W",
  "key2": "4vhJDafGhyuByy1aLPFmCxVXcmoXJbdAAG1MbkDcToidabYwBLrQBTNZfpA5EPTytGZjwPUc5rfem95cUnq982Cw",
  "key3": "4UtjchTNQaEPqsAknJfm4hEuUguRuVkas5eNJo8Qn6dYdxYhj5Na9JRZSo1tEhwvLFH95LQRP1doPem7vJtjVLaC",
  "key4": "3MxBV47bDob15EKcz6E8WEjLXGd7HDkRdo1GRoZpFfrGnvx8dFPjXkLQm6z6ukBHBrDhf3NwBcDGRor7vaQfUkCr",
  "key5": "4WkiEGkWHbxE1yMsP4bX8mdPhaY7CN7aX7ViJ7KsK7g8xStXkfXd7mGaZ53T3bfwSkBdd3ssTS2qG7TF3r8Z9wfA",
  "key6": "4CSVqDv5hRBLif1ZW9Tf7ZvuAbKBQw5jHJH6Hq1V1ZbRD1iXHhfL41MG4deiNWPv5Q7KQzzkrKBrbepyQNb8J9yD",
  "key7": "3UN1yhAu9B3jA4pmHyHvAALAcMhC8DK811KKJXQUQ7LWDycZeBge5vvaPN2NAv8mUFqbje53MKotuAfWGueaPo2q",
  "key8": "3N6fDpWYgWjHPv4BLZ4J7YdcqRAE2vC9YUEHMvWbPMMRsqwGwUHbHD3Yg6wJyUPDenBvD3ZMk4WMFGEZYq1We1PR",
  "key9": "AuVnpPB7VFAG1k2YR8jLY9SxvYzHDo7vr1BSCM4YLSdQKnmeu6vy87Q5eSMTUq7pekjCasmwkS5cuDkq5f4TPXy",
  "key10": "5Mivt6j72it61oZ4mQAS4y7yfyhmqhppiuMQrw6eVydLVTuGG3CLwFE3fjdaAFkQEaFQL6FEi3X2WpSQ1C29v6bp",
  "key11": "2Pt9riFD7heVwNCJE4pjjzEhbkFnK9btBsymEK5qeg5MvjwtWm94RcWmtatZSVc3dEdGBt6Yg5zrXwPAEHnKJwbu",
  "key12": "5HVRu2ZYYhkgnqcY6dumo2mJTYP9rjVwnWH29Y1uWNPTvmJ3WWQBHuzyV1wWLTu8TtBoiqwSjqi4WghrmTFzwiCT",
  "key13": "5zDkxSEze5SWB3BkoSJK9sVJN9fk8n7yLLG2wYakkJu8s3TPp8Gm5FwL2NYdWv8LyvxcpFrMtU9QmjurznybtajV",
  "key14": "2giSuthbwh4KWoeeQd8m46napbvJcu3RTFZSW16vrAj5dhKqYhgfVKffbZtBTZMU3pPSKqUC4VMtoYyzNSnCjLWP",
  "key15": "5PTjHTMgzfHxT98CAFuiTdXiutnpYMDY8afHU6M9x5xgxmUuJPwrTL6FUyPDkZg9UbERyxyR1z48PF44d56LjSm6",
  "key16": "3uqZ5MLsmiSvBeC8XZnSpxTn9j9eNPdDNS2XLXMqJmDXRNNeF6n99GMTaXJ5kzFJPjJryRGJpsQ7fjeA8HDEUWLo",
  "key17": "5BUGgQs1QZ9M6mFGvz2BJiBFpv2VNcTxbvx85yXTRVy6PHACvyWo89uYR7f4sTtanUdFMx4E4c6MqVpRf6RdqrAg",
  "key18": "3TbkELqNJvzK3i8uYpYbb14ZvUuyjPMiGdL3UrEf5wSHBArkTxHSYAX64YDEbme3qHJWQ93FxPuvjUvyjQ5eA2BN",
  "key19": "5GVeWAhb6iDoDSA597izg14bi9gnN8Hs5qVw6CMbSLC255F4ZiL9cov2Qcrv3oTiXzcJtWUAk7SSWKStMg4bjx9R",
  "key20": "5usvU1RxT6GCt3CRS8bpVWdjKYNUUKFMLAbxKxvWedhCjGoZckpGMdt9javEteX93xcMymhHcFxqtDtbs7qyBvn9",
  "key21": "4oRSrLrvSyFsWVwFYrKZKb83oSUhi1j5mPd29W1gsPY1NoJbvPdQ8Bqw3EfHRpeWpqqJpmdbE3YLNCUzUNWhiNzb",
  "key22": "2yUahZCCF1t61sSHCx2ghD61mAtrmmxQBtwLcyjMchW2nH7bntaXdVvemcBDUf93rhbrykqXReZdNobC5gDxN2vL",
  "key23": "2yZYPCBNyHVrSPcSqwBh71kjXmJoTUu892wPayVxDhxeHbCz4uTqWfhG3Lck3af2nZoWG6LrSDgL1CfFyKcxt49E",
  "key24": "4qMDgkQ2i2E1ctsS9yBtvoKLnvbiN77ZehB9Vav2Nd9Cj777Gydw4kPuuSFegftqyxzkQ2ZLB6HoJPwwUsYT5ZzZ",
  "key25": "2b7gVZ5gK3Epd3eSjgNKNpt8JKdfvFV7ozPiGi6wbwjV5wLyL7Wk8XUqCVzWkiWsyFJoRJ5trYH8oTyaedu1JBam",
  "key26": "jKRsRsbGnS9A7uUu5P48175Q2hi8EA1DwbZ17sz1tD51LMTG7yn9MfGpm1QvUznxanU7SKwzJHb9gatoqh5evtu",
  "key27": "5hncF6tVZTEQZmprFQunQCgc83niXbKxCXqcwAAbi8yc38vioGZGcAvhBPeSRauaGH9Ypr9BTc4vgKektoGbqQ9V",
  "key28": "5n8WvGxePpQbv1hcoY6jFqMq8a4rnBUc2sFNeRe7jDYrVeoqV185vmkqmw1dfTZCJ2HSnCxArdxM72c4dkfrsQXG",
  "key29": "4RQMeWvV9E1EJn8NjwcWn7qoSSYXjBdpJpU4So8m2SicC5dt4qZtg6DZXNAvSUKsg24oHA38M3s2tyYGZrWRGGBM",
  "key30": "4qqmRHWbMsWFPuADjLmGeCggk7VMETvbnrFU7kFuye7btBfAKS8iDJyfFX12gyayH7Wctq2CcABYairMX8u4rqT7",
  "key31": "2YZwy7ZSCRb76t2G754uQy2ybLrkPw9CGyhiuHA7LJaZnt2kyjhqkkvnUbnv44g9ibzx44HQdcdBvbk1rabGnEys",
  "key32": "3jpF9zQXqLhGSqtmxodsFHNFdwaeJLdfJsYaKVphCciuDaPssSC7XwwRN3x24aUHZWMWnUh9DkNQZoS4hDm4aWFR",
  "key33": "2qkYN2WPVsGpqFWc8XM7bufbq9TH7Jyv7k7sWTG3i4DR8cNSMQy2KKGT5K7Hps3gAYLxkE5xXvMiMwn8y51hWziQ",
  "key34": "2QRWuqzHFKHPTkaKK6AYqgPwuZAaBmsUXn19C5TXhvyyd3WTsv6ATQk5AHUMbMcwNjPiia9PTFvb1B7nZnBTdjr1",
  "key35": "5ttZ36pc2bzzED3VPy3HgiyVS8YkDnxmezPV5tx2ggHAZHh5mNqRPW8UY51LUqtVS2pymzR29Q8fadRTvoaZB64",
  "key36": "2dtAabRAuXBctWaLdFhynAFbH8Y1CoAbFqFWkVKcgt3Ubhb1C5NM395fvH1wufeExGQfNuuKTFRu9VDDMqFxZFAZ",
  "key37": "VXHwYrg2hEBek8sNAqfAPE4QxpiVNw97yznA539oEK8kRf3s45pRUGVFXLGC6DPmT1DRD3RdgW963W2NX7Eq4DV",
  "key38": "GoZz9aKzgnYbprdwubNW8QmaX4eM9pP9EyCtMKx5AD8GG3AN3Le2rL3vC57r5JuBnzV4E4VbA1hapU6QjPMhzPw",
  "key39": "3bVXHwXrpPwRj6JwcHYJPQzUUeEQbq7cRXSHrMRY2tJnJ8dmsrzv85o1TNeboeHoDav9uU9FjPS44EoU9xppWW7C",
  "key40": "5MnjHMKbsoqFdmzqk8mesg7ANpBBTcNY5iebGJ4yRo39eAM7npmruDMV7BhdU8aDbocxFK5yHarSttZy4vb4v3Ja",
  "key41": "4njSzhKjSTmiyE8h2t8NtymDx8ZM6iJT9fhhpcmWdaSkKV2fs5ebS5P23boEaVK4uXHqm1L3rFHC2E8E1RH3dMCA",
  "key42": "38HSCrmpHRRif5Ya8WUq2BDGjjHsypvnxEKxJYmcPGya12ZCkbsqrqbQ5xkmHkTHEwTZwKuoGJpo1x6fpRdrTFw7",
  "key43": "51DdnJ2TW2cRfx9b86UGCRBbiT6QuaFKBQKV75ERfwLig7fiMHwvSmtzgEh7SjHFSPdBdJAoAEReb67V7XiAHsju",
  "key44": "4ufh9uCRhdSc9DJamjo39mfac3b7R8aP5nkdEvYe8z26xxoMcsd8SWK3MHwHQHY4kgJPB1eKESH531up6ij5TmFE",
  "key45": "3avyRtsiTQcxE4LW1W7gfene2DqCrCeY6whyFXfATzQkpCoBMtFahtujRAhXvdqjULmkm3KudJSZ2gxXJh5EoTom",
  "key46": "4FVLbvzr94SD6YoHoqybPvvodo6LxEJNnB1WFT1HBKrxiheVJAgkwByr71bDD7vSfEzMY7oVmVieUTXhPLhgATNZ",
  "key47": "23cLpGDDQPoQU1nXrY8QSiCZP3yHDaksNeW66zoJqMd4u4krxQiRhL487dcN5hwYnvongMvqKMJhV5S6hu5iLy5E"
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
