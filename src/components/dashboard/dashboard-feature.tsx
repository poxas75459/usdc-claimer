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
    "WR8M4QY48pvPHdxrQrbNj679mAv1VFa8WijCmAGUMWmdMaqwjJoxwmfF8Nk6eair5nzzsou3vyfzYh619QFyttx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2absXdzjxBhztjNoKRJkBCSjDrKw1ctdobHpvjycfbUCVKLFU5SBCCgVfPSau5CZdSdpyCAP9rrPaipHb2PVQyR9",
  "key1": "ZRvXHZDuQwPqZahStBC6kCaETY6U2StG9XCeofQyKWLXfPgk78MGo9BSTPhKWQ25CrUREiD9ibKoHxwvDEoLvhw",
  "key2": "2hTQ5dhQxa1paEe3kNjmyih31tYw1eHk17dbCacSzWY6VhtQRvY5CbtmCaHLAFdpgUqxpwSdLb2xsYwPS6EJ1hy3",
  "key3": "4s3WiMfAazhNUUuwcAGwzJ4Sg4t2idowriA7BDSnDB2QJx8fo4utEheGBQnzkRb1x8fDziAY7pmobdKP2pSBQGDZ",
  "key4": "4wUQ5YGYxguYxmnWRkNZtqojScrfbAxSWg2wpQerCk1AUhh1nVja2b9yQa5SbPACaDz4ZNqm6jCwE1c1T5rsSdBQ",
  "key5": "5qxuKUSwzSBny7xCd2LHNKST1YKM81THbUbE5oLJq7qpWiQVZ62b59hJjXSKyoj1XRYjx2y8mudXicmfA3vjhNs9",
  "key6": "4FLTbLKcfV7T4E44e2NZxgyzmeywGNzkmPzr5S3jrwB8CHbxWTVQCis94xoj4T6mowKgZF7YAGWFPeDk1qNTvXhQ",
  "key7": "5Jc9wB4xjF7q5kkEiFSBn43GcpJ9KaB29q3zpke836WFcpSePRpAWRy3tcRDbvFzoQnHtMLULrbAfbpJt66XtSmd",
  "key8": "3ZK4ASz8R7Za5zGWrrU5BkxXjxEK9V6zTDrqE44Qs8ykBAQLnz1tdCekLfrkJAe6fr6YBZ2FewjeTAeQhmU5CTLh",
  "key9": "2E9bv5De984CKNfRDeF7ZeGRvCAdos1xfJArUh4T8NXam6B6eE5q1qiDB4qhfAevT6KYjvUv3d7cEarpuoeYE2sw",
  "key10": "o81cKPQfqUm5GzWxp23w7kQn7rcZYAxEMRYPLo977sDsKDsF4SdcZjGvzAPnJfc184pTdAQbsVx5qkKKSmpmFL2",
  "key11": "qksDN8CtRFzoRfwwKFjeCM8ifHQhicK8aD36UmK79RcVpTHBqKFimoUAKqbzkvUYxfhk7fAWU2cGBJPPXooRgZL",
  "key12": "27kTjCogakfq4ab7QG5cincviyMDouifKzTJ2j5H4C4nvz4E69puH4R7tBPvBeKCSDTVx88BSqXkYVHU6rZvpfWG",
  "key13": "YQ894W8dhuXqsRtzEsWNXFEdjRM9jA15NxQU72rAnKWoJadAgNdZKWW8poBAELjbCv5LvhhFC5EXePKvPogGg1q",
  "key14": "5AULqypSzCGuk6rSzG5cc3CPXqBEBcvUKyi8SDJDDoA1kAx4qD97wizeG6yZ2WLxamYqjzYbes5FfbNm53idJTDi",
  "key15": "s7ZAY7yZxLJZTA9xDQsu6AkAPuiua14BSSviEyLtovu8HDFQ1bsH9XQzu7bRBrNXQU9xSGsoVQR8btQREvgampA",
  "key16": "5cu7q41tG9iicMHsKjbSidEB97V4x51KQTc7SBhUPeMTho4Pr14k9sFrY8wkDkvJqnfCJidQH6oVgRkjRzAmQaJE",
  "key17": "H5igsEAKdgYGQpwEkWnBMgxSC4HMnUL1aGLd7XXK6Gm6DhVKAJwWZeZgFkGLr569KLWb3zKnPWkLjMTgKFFPmse",
  "key18": "4K1YMfCy5c8PNAZZUuXQxxJ6cFoZdGx1o7uwexL11bH81qW6HdbVh7r1JwdbBYJZkRQwgt3qTaT3P4nNk8FhxZyJ",
  "key19": "38U4y5yxN3UP7yiLA4ePdJyNJ7iK4FfgDCsqmBmjbPHaCEKQCWh7KiJYD28vRqKE11qFj8YqKDyy4F3Jsopp74wS",
  "key20": "g8pSG9gt6t9BXSBTCwzSQM7uyQkvf1Ee1YbyniDnuSgAjbp2YCPAP9MvwxEAaX9TYqWxLgZCW5KqZpj6h83V1Sy",
  "key21": "3Z8MkF9Qka9Nncb6pgKkdVpbJ5wfeffbLjuodKS5DwSg8qk7WcbmLCx1x8ryFWdP4ikuDWsiDWeMx1UmgrRZYG2Z",
  "key22": "67bbLup89k34LfX4aMrKfeo7EX78PckyPevJFEvwmMTKfewD2pDTcTkaA3H7cX9AeW8zsB5hC3dZvdES7GX8FdAQ",
  "key23": "2KTWacouvaYd9FbWHcBr78BmqLwJEqJ2DuBG4QMkaitankJ3ykCqoxvozYmZeuXLvx5wvQWKQPsBLE1d6nu37iJz",
  "key24": "5JbxSF2CKUcB4hrwtE3zsiNLRvvSZniaCWKBHzbKxSrNdqVj22zxpXEstTbQsD6H3pZFoknvgzr5vrnchq33zKTr",
  "key25": "WN5Zn7zkoiiPDmmUJT6Z9SmSDPxA2yfXx6fwVKdeGRDkLhMGCe5WMhyobmkhyB3wYUWR3Mnhw6CGAA8LXYwPzwu",
  "key26": "1of1nnnf5pfbPwDAaoD5WWPz8CBes2tN4xQL97YdeEH5N4mHxx5xSPZpw8SGDc6PNoBtYji3yfenPP9o9xDuFRN",
  "key27": "3RVqBCL5xH2nG9rLi4pQJKfreqtLFyzjGVEMeci9Ps8a1f7qZXDjK3w9kvL8iVHRgEo135bUTFHRcyzqoa9W3HbU",
  "key28": "35qt11H3k63gbQyq96DfKc2LHbrJaba8oHpiTGExyAT7cRU13K4YKscXDwtYhVdARrGCJYcZqVJcrzWh8eAranbQ",
  "key29": "2roZebuRPsbUNT7gnrwgUpQ8gz2X1BSdEwkR9sWBqaVHHc8F8tGsmCuPtA8JVq3bWsPvqzw9NTpe6mnDD9VpZna5",
  "key30": "3UH76oiFa7wqQyZvGaLGCMqon4jVZEu2E75idrdAMnbUnkQ2sx6YUAkVKWXLoyD3FvHHg8hFnfVpk87YTuQVPiKS",
  "key31": "62hoN6At4jXmkewDUuoDsDpaTG5KjiF9uHrCB3cWDobFgKvbMPu3UWaGSQD2qjTPGcFiNPN3pM5aic7CF2sdTuqL",
  "key32": "2PkHCz8LJb5K2RUYdtQS8HdBLf1HwNwfovEXUD1mVcW3v3hH79FhYETrxjfcUuLpMH45Knqvn94z7hW9CKkHeMSq",
  "key33": "4q5Grw2ewDhKaEWdkaiQpankUUyLnN8qgciEqRVyEybPww3c863P3PtfK5ifACGRxyQnmkHLhT6HPMQzgAGHL7CA",
  "key34": "2KAKR25ZiC5FmyAJnd4JW1ZtMJu5w5VxvF6hjULtep3Z5ADWPNu1MHE4CD8TY3rsaHP3NnCvoRgDibi87LBo3wQQ",
  "key35": "2jXgt7FXrgEEqcXcFUFSsf9J6Gmsq8KYRtYTH4LZxVLpMwW7UAgD6Twkf6t94Ye2fLfnwqawuU4tn8uNefoJwPoW",
  "key36": "HHYiuo1ktY636YCAqbGHxvyEjgrXmGA34WWSzyNU6XpGmpAosTBnYXecsYZwCLpZwxh3XeDAsMHFQYRcjqGuuhJ",
  "key37": "2rwN7KprSmFvGRjAatzNNDbskKwfPZuGk3C1PVWJ266gcrzYCfGYGu95aTkbzALrkLNN5tMN97SraSPtTca1CMgn",
  "key38": "24JysHMyDahtYJ8s22RpuDW1reDddNXRzARLutN6mWiG4RQnkePANZCYnQzGQSYmoVwDYt7ZkaQxrahFYQHUqaQA"
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
