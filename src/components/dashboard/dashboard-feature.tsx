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
    "LSftApvF6835zLsHvVVHDh3kwksSwiUzmzLKzniC2uq3LwprU1uakivkoSPMPq22MLvYWsiCJuYaDu7F76ncEx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MK9SGwUpXhV42P8ekFVtGkk4wo4AA6y37SQrDP5BsrF9jn84uMpGWzjGe1tAWPUHSbVzjrvBCQnvBqqy3fK27Wh",
  "key1": "2hbwySWVgarscf547bYobdAT1HrxrNh5Fp3H2pn4NbKs2q7LBFJjpaWVLMYnGeWGqvf1gB35cE7swpfBvLAFiYo2",
  "key2": "5pGtKXnXdBWVTCdjQc8N6H4urRwGNL3C6no4aLpjpV4nYhzyyLQpP79LFn6ft8Srkv7S8r6xv3jVS7BU3Zh6PZVc",
  "key3": "66CQ95AHH67P2xJ6XYij2JUH3qhQgUKNKwdQMhEVnVdi9H5MtXfbZ2zDWs4KzQsmSS6LVRfeCUPWJbsLLbHktSNU",
  "key4": "5bsgEf4PuvfpGfxvU7JVshiH2r6Y1GkJqXRhaGWwjtjzTwzW4w2C4GHFoAxdSf24p4eVZpGGNrjHeFDCjkuRmBdG",
  "key5": "XjfqCbNBSCBzjemcAsbTd5eqJvMEZYFCbDktDoMNEKtS2v211V6udKBYeAWn2FFwUbo6URy5c1p7meCJCbqgBtJ",
  "key6": "3b6MGXTCmsCrJec6ntMfUswuZbS96jahY6aHtwfqXxLicgrksJGKUBAHC1T2CiM12B9viuYgTzHJLfMksLFZjjSb",
  "key7": "5wYAzokPpdsFPbtSGubqaPaLT5a3VdN6fbsqmY43ssfqkuoabPrwbrRK3NibcytXeeYSLE5WMTWSQM6cm38Cs43u",
  "key8": "4kK2EcXF4ugbB5shxynDFqufsqqymzHgkvzw2rWRd7PAv2dSmaV6mLToVuzBj7RADkD7XoyqEL6vQuAUCok8CJX1",
  "key9": "2bDjxb86mR1CYfNS7hBy97uHeeWntb2Rgukbw71jDvVBoQt36tiyBiMRoTJ9TyZPVMbLcmL7AXJMtuvZeDcyptR6",
  "key10": "2T337wnPxRtZW5hE5a2DttrTJftPSDsTLvM6YzXpjrZk8KkJgsfuMPJNJPPFYKipUkADQXrNBB7wQpqCCSMuLgry",
  "key11": "52P9wUkpWM2un7efGPjr9qZfZ7uL3uJs9vLTN8yz17sNeSZS31RgN17w4TUWcnZtEAPsW888qJkYM5ujqcarqCze",
  "key12": "dH2vwDztUgKWy2rQDeWqVCqB6T1bYhTUEHrN9XQSDcxmsYcCYnJ4RXMjSMtfmttGweboxKDN27sKz7MB8ZojSXG",
  "key13": "yjMKtxEPadoBywTpahxF9kHmLvFZw4bLQbHdUHQnaN6ewLPJbgvh3BbnoXktTzSAF8RFTnyjUeZYWwBLKQHVuPe",
  "key14": "LUVQn88SuUTbiRH1wJ1rRwvFknmZxB3GR6zHfSgC8Ho7Enp2fwgTvpju4jmedhZCbb7ih5mN2aUyZAHGTzpPojb",
  "key15": "Zdhu6UwswTuy5yJTmVPXmsYVGsuNizNi2By4cD5BKweroRGy7riWFbFqoowXMdUm3wxyv1DffhLjpTjhfh68ajD",
  "key16": "2mvwftYnvJf9oqpiydg6ytZ9mDqPKaCHQjnzSEddBCYT5SmnDwrZv7WcvzXW9kNqCPhfeqsH5yLMUd8wXVRN3qx6",
  "key17": "4icCsdjLX431P6y33kaXnMdcqyTBD1nDWrdVB1sGrE4ADvvjZiqh7V9ve4bbup2uAZYuTDgdrv9vTRqhMndT3nDj",
  "key18": "55Wsc5iPkFopy5mDfbKXwPp3jQhuMgQqSgn831pAgoQz38EuhUKVYoh9ZB5h7J5vEhtNVjewNodgAu92iwtF3EMH",
  "key19": "2H7hgquLJrRSMXhPfwe7KyZA5gTLBLLDwftMf7txUEZWt2Uj2uRF2Tx2sNXwVHnci2gmrfy2xp1HSnGavHKDYCy5",
  "key20": "63LJ9a3TN6YSc6GaaQ26Wg2WMLGobB48qLDY4kjwSLFjtkGKPjkYLrme4pNBseHtk19kpAjus298HJ1tWCqFFP8Y",
  "key21": "2pVAETzfXzPt4psPVz7kLrQcEMj2sTZrPLSrQJDK7E39p6ZVPswphbSHtGSi5ScWwbmofC15c3ECHDQ79VJvKhVD",
  "key22": "5bTe4fEtvgR7PmuYiMzi1ASRehkhxJs5Xgy3UzWssiLvLuFeWe4A4CtmfMRo9Nj1XZNm42QvvouSQZxLsoGZEJUR",
  "key23": "4nudAFMjuZ4ScRjNWfF8o6J9TbM2N2RyLuQe1MCvLMV359gpZYZPMGEqtfv12z7V6QRDywZWwxQM9RZwUuttY2LM",
  "key24": "4ms5iemwpsZhnztK6s3mSkpuCcbbHek4WpRR8utoLX9R2a4b6PKxzTrpnFEYfewcc7MuaLt1rtYkJASB4aEdQ7Qi",
  "key25": "dByouw7x8V3RAtydL6vCQbMXkrVzQF227QjYViNs4ZvAd8oYy8NKL3QHwYTyrSFW91xP8g4zbXV1ff4oFUMkVvr",
  "key26": "3JgGAumUDb5VkxJV8bfi1QFPaMKhgWS6dHFyGb5EDNXKCQeDWc4NQHQSzrAArHDk5EZTs332PCxVJQrMo7msXt4b"
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
