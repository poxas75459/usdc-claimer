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
    "TJsNNiQtzFpU6iGYPeV9vr5dVCRqnKrDhEVk4ooBSa662ows2n8fXLv5ZUoV9LNG3D58exnidms3MkGjBAEWd8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHUqp1CmKpVCVjQ5WjYs1rz8xR3mc8hJ2D6qgZFpTVabuRwDMznxTq7NABtmtCcoMioLenq1TgDGaSrFBXrWDWh",
  "key1": "441rhuS3SxB3drjXHSMHJMWHgvMJZuJGcgopkMdnVgDPD8EMHTwj5aBJVgNcBXFLPHm62w6oaf1VeKH1VnCo7wiS",
  "key2": "4qm6YU8gdFTBxsSg5x244dYzkE1CZUicBT4Tv1nEjH19HMFo3V4K38zkEiMYRU8mYvJtWzTB5gKYDX8KfiC6i3qg",
  "key3": "47xJ2XAzjUcKL39NSm6aXbcVGUbwMMWDBCFEmtDWmYow686ocufe2t4nx6MF9WfBr9UKKJfzeSsLzfnYwNgern5b",
  "key4": "9ek35zvP9C1X63dvCKtL2TfkiG8xyun1yHRsLruiEzvyTcAkeuAW28eRqKhM9xkYx2g8k29jXc89TjHccYnrbRH",
  "key5": "3MPPgpbXm3sCPiCFMkcrxuPzT47tpg1qqbosuS1vGeEibMy2biACuZGiaPThET5AWTfnbn3f3heA8jTcuzdDtcxp",
  "key6": "5qMtwUadCZjjhizSk4cELnDqwUyYpTGow6BHBKgg48iqkkfSbX8aqbArGSPfxwbjA9suWd9YUC9z792nHqzWDqGq",
  "key7": "WDwqQzcBiBtnQNBT1VSsxfY4RdH6k4yW9kzV9dCjNUXNXZWxMiUopLWTxGa2qW7pFReqranBfZ1WcHuhpvUmYuk",
  "key8": "3KdQxs7B8DMENdj5jD4Db5DwbzZHUnKSoiMNhhUt7EDxCqX7chPfW4ZWBiCCRp7Qk9iBt56TL3zRsmqChwSyqS5E",
  "key9": "5xh9FPgfTwrZ46suAsTDPhLu9io1y17mbygwQ5w3xxmj56cEiUtb2Jvp3NEYL61R8vJoKQwgtpMpEP7u2jQKyRLD",
  "key10": "2xGx2oZyRSXSYAQ66tR33huoDt6jwhtq6w7imbfE6B5iMuesKtm2qAaoX3rnjacgabNEnbMtAZ31c87B8XKCLpE5",
  "key11": "BMcheYoPgevvasziJe4Ma6bba4o1a9NvSfyJUkodYHMpQyjK5HuUCXBKWZ1NfDdRe1WePJxhsqDu4dMYsDfzpH3",
  "key12": "4LJa6XQV68ejhQsNksTiYJD4dM6bf9fYv4r8Cngj4Nwk1H8GBYk7XudSv6qBFvsGABz8NRYzinK3tDyvCUJWD2uQ",
  "key13": "5q3BgMtGo6qHJAFMJePbvBR5newY28BeGRFK1UtpsLdEV7yD7mL4k1xoCUuLw3anNfBq1bYHdV13cgCkWxQgX6Bn",
  "key14": "2kahxgm166nXPKHDci6dFfxYTRTQyJJ6xeD1zwbLMEMQe492fS3bRat13VeZnz7hi4UYbVHQoy72dyhZEBy8LYM2",
  "key15": "wv21iBwxSiGLx95SessfTyrVq8ZC776TLrJFsCjyyDNo2RJBHoq7avLXkeambFg7dTGfU11oUM222GUNrfvLTbd",
  "key16": "5XiZChBJ5eCwesMj9kevFV3imsYusVFJyEPGFfE6eNsNg7LJBjGQNcoPEcPfqHZ64U4NyzrBbcMRhgQu9y31LCgk",
  "key17": "3swbVT42CYFSMjNN9VEugmsfpHidu1UfpMKXJAN7jzDdS5YKum6mV6fKKqGPrJnv25HcVMbw7CCGmuxRMzRiCZBw",
  "key18": "51Ft7LVKSafC5czbALHTsSonRuSnKeWZmtituzgwoKQqdfXiVQ8aCr8AnV6d2AyrZ31VNTJgzyZAdMP9Ldd2z8iw",
  "key19": "42yVEvykY9FrKdGV3inFxD6sGmATSpnsDUMJrRSeStdsVR5UnhD9oQ3mxtvUPGBdye6eJf7EHLTN5XvgDp7PnRuc",
  "key20": "BSj1bVo1G9QCAKdLSHcD37JDGYkJbQQ9iFy4wvZrP8oUyKKVXLa88ZA86CzUjUZLomzBRendoKmbMdD83DPCQcE",
  "key21": "3FCskGCKawjHtkGGQeWsjxm4eXf79UHNi73Kan9ub6mMNMPomq3v8tvVbnFCaTR8Dgai6v8PgxSxvVovPhVGEst6",
  "key22": "26BBUvSo471T6NmwcHtZAHWjH8gqfhkySH4RE6qfTLgjXLKhwSqDvcX52vs7Sg6u6Q8TSj4gcSdHtEsCtgGmZwWk",
  "key23": "3CkKd359koA2s9u7EnjpKby4tDrst8xH1R7A3vmzFoywrnrX117TzRoH6Kh7jjsEuupf9ABurznEZMvCKy6pPrYj",
  "key24": "zNqkVc4nBwgDozsrZTBS65755nuTgJ66aLdvXFnmkT2GEP1sKTve3mT6VHjoNgNdhSgz5YDWxCi3ecoekq1bSmA",
  "key25": "2W16zGtUEdcDmLXatxR279Msq6rHkdv5y2zRD7NkvXn7gSENxgmrwDbNuiLRcCmPQd7BQyRA9z1yanLejuPmh1QC",
  "key26": "5MxFotwJ86pJpxoo2Ff7XtuHKdhpu2iUr6eViRydpjYp4pzNeXJQc4cHPFsGVTrwTZgtqg7uXun2QGNA5bnkdNgN",
  "key27": "5GKdbhSraQbpw2V71uvAAaGwJ8r2zq12HchCe4c7tPsNE1hsPPX3vfXpbFXUjp24KDZzQMKgpB1sHDiRZnjbNgFH"
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
