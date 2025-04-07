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
    "ct76nhuH6wvkXNzP7cTbWjvuuyNtStgDJGdhgqR2juq4hTn1dNK8C3H2v2TC7P6NxK9GEGJxcg1x2wwRkU8srpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RZxS2WqjsGNF4FYVGQY7zHFHTwhVTQsZ5mHHHBc3Ck9R5Ua41S1sta6ur9GY79CQcjnrcCiYEwJXUq6Q6i11fj",
  "key1": "2hcLCxwi4GAVoW8HZotGhhmx1qsBtRfd859zurkYCwwV9GKBxSzPtiNAAcH8mXvDcXq5ubihcyj5jV6j7cBKdMXW",
  "key2": "5ZPYF4ptE7YRaM5gAn5pMc1bLTTcH4GpR3mi5BJV18PJudimAgMUm62qfEhgiUDnjaemJXcWxRCPP5qiJo8mwmTb",
  "key3": "4Q8VchpGm8Y3KGvm71Gqi3YQQeihZZbFngUKwie3QMNjszmjjD6YcsXF3y8xpmRhepaSKivujpRNhLnXR3NPyZ4f",
  "key4": "2vvFnKdZt1VASwgGAbrRHGeS7mcYPJ18sWf1use5ebUSEfobgUswWGrecSwfbD8opq4GfR2m9GfFvyinMrr8jSvq",
  "key5": "3d7HrPttBdpoERUqBgNDqfddJ9ojgYHgHLzK2uAricKoYbArPHGy4ENHw5aYmDxSti34gcvH1fogYfQLjPnHxKmH",
  "key6": "32f7KFNkJR4e3mMkJohW4JvgfnCDcGcQCgtLqeAdmFVYCDS54QZjM1XXvwifBCAsoZLk6akgPSdwvuA9iedvtDka",
  "key7": "5AAsKQbu52qQ8igFinL8HGzCza1eCzqxiEr61y5K9JMugMx76QhTBrwkCDVfvFJNHf3GcauxzeTB7RbB6CChpbNc",
  "key8": "5VDL1zZXJVbZQY9YmHztaVQ4G9c9CD79PAFUKPGLTok28DPCPRnkV7cqNs8Nci6wnDPxbGyr5HyrQxvMDXckPuyV",
  "key9": "3UkrzPHSmofGSCguiYUTgRX5RpnmRMAU7XfUNRXehzeVu9PNig4nyYmG1JpJTQArvKapHLn1sYufJqf1ZMAPcuqy",
  "key10": "mD15GN4pXuxPkTtMpKgk1MMfJKd42Rdc5UFTv5dNA9E1CcbMx6fyWTBE5XFE3FWTmobWaAqfhc3dmBC2Ncd6D17",
  "key11": "21SCpJ7yovuA156BDvULWNMFbaSji4Bpx9MXBCd8DwBrq2LEcPMiPHNtV1i8xszswN9a7YiLkKus44NKg77tZEuJ",
  "key12": "A3zo45RAJLo3symEF6WdiJqdC87hwZBU5CgYV5vE8YXcMG49Ar2XVqNNte1ws9H3AHS6PReceHvPbmw3punmcUm",
  "key13": "2Rbdtke8Rrq7mVtVftM16WkLd67XXnXejbHpvvVbJKMDkLaczjbrhVSE5Tu7BQmgn6u1DF1hdRRtDpqmn1yWEh5r",
  "key14": "5QDooTb6samofbudaudji7g6ie1xYZVfiygDbRj9DUhFAkEhp5FfrNeetrLijTLZs4WEn5oagUXaJ6YN2YL859Ej",
  "key15": "3fCgxi5kbEKGbPZULbw2NuyrTaWx4RvBMyo9KF2Kc7TeJoSKF5W1CmsNwUN6834pxZauH6sdbfnCXhe3s55kcm9P",
  "key16": "42Y4aGeCQPWCHBBEYoBTB2FroG515uZCb94yv6msrEZVqsJ6j83bP5WNmX1KeDH1erztCP7KHYcQPrZSMjFupLHg",
  "key17": "65buUBk7h5Ro5nErGvYZ5mw2rqr6kctG17ydLUETazp6vHPqUegzYNpNkFTw9yNP5HmRrafy8dk7Tq9zbqh5xgwf",
  "key18": "5KSq8iAaoi1dcPdJfZ7GMX7ENGFmVjCMi6KLA71KprnQKR6mAMSyCcCMoDUuaXAN3itBYRj4QdpB1hn1Q2pEf7m",
  "key19": "3aovoW4AqCywJ7XTtCM4Ccwoe6YfZdmZnevfGfbHsXTefudU4r3R25ZTeG9eCKShCPFXZANPwbCxLU2QufG5Ad6B",
  "key20": "24vGRxBFs3TyJ2we8JyV3hehc1i93iakies1hYSWZELUuBr1Xw534Qq3AXCBr87ncfENK2FskC42bKZPRN83DEkG",
  "key21": "cyFpz5vvr5pCBvJF5xQCJAM2WnmzyQEs8xGrcSS9Eq5cCjrkS22CjWKkLYsEa3n2LQzjc2c7hARd5MwEF9vkeWo",
  "key22": "3nUK9W4H57GCwDmBSrgTXwuYQLVGqsE4Zscn9w1bN2yB4qDpC1u46XqeYGs1ZVL1yT3GfS3veiuYCwWwL8eGhmkz",
  "key23": "5xgKKFs5yzzUrqUid7FWFcDmjdudSE18YhB92Lgqju131yZqebYEDxmtmJPv3PbzRX9DE1DEN9cSvYBYyKzvLzhj",
  "key24": "3jXvwhv1DkPwkTuvxgQMmzEm8ACNosSNVAWAs1JAxcVoyMVfVD7pbNzNQojxTnaTN14BUbWw67qBUiMTps82WmKr",
  "key25": "268SKEvoB2wYGX3fAJc4AUBpwQc55wRiQo9z1dT6FwXpcns6mTL2fKgNBD2UpuwCjUo6PjS7694nAvGRea5kUuL9",
  "key26": "PgbxGTkbdmdNnZgNfrmrTs6NW3auK3Ra7BzVYrdU9GaUeS9nvG5kBRhZ8bExA15A23EznBLHqnVfyQFXSg4gK5s",
  "key27": "2rc1Y6Z5vAFPgrsHbY5jkQS2d7jfyrh71htUgXfsPfW2UUH5MZpHrMHfgNHsFhNrLv1CerXKokRrNS8XwgxsitCN"
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
