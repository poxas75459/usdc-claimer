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
    "3JX4V3WTT3VXucj8PREVFob3D5du9bnqMjo8xkMksWyPqPUNTCjxu4eHw8LiFcB4DjwfqMNyM3agixd8CH4QcuFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TwLtTyHPDrKikWYosn9vnmSqLXptVxNB7E8croJULt231SgDNffQLMud9kBxpUaaK3WrJZax6tZVsRdjdamDe3n",
  "key1": "2vyv31x3qrHWJ9mCq5Nfa2rEbFXTgpLtbkWeposhtEHncD1oqP3dqL1Qgn56TZLYBwPavVzbjTgRD5BHKg146f5b",
  "key2": "3UYoQhKuYRwiMcq1YZkAEXfuQttZzSGFbyC3F2C6DDVRW8F5Jgo3Qfv8fU9otWPYbdjULJjfW36B6HXcJ4LSkJrV",
  "key3": "2kXfQFAP5waDvzADiibGbaYuvk6UfXwV9HU3y3miTSJ4zyEuEetmhdimbfgQ64nzapNt9CRtij6brnQp7EixW8ox",
  "key4": "4yfcNgZynQMB4hGYmb5A1q2UZoioXUAuQbaCAiEc6BsJnEqXE9b6aC3XdQ7vtPSfcVDkMjMS6yC1ApUuGHcgFq76",
  "key5": "mG1xjJ8tLCznBFJPowkNuUMmNDKfnUmQTQvhz5Pi3ivBJgdKth3sTM1MLnqvprApu3qRowoDfHuEFrzZJEhtD19",
  "key6": "3PEye4FMSgafjMeQnhgatKpw15U5RAwbZrXTfxvWfdtVJkHR38Q2ukxqLT5ADkHnKgTx18XPV2rhCRLZyNzt8e5G",
  "key7": "4SnBFDjxEcuFq4Lhgb5JsqMYAxuU8iJBw1mu8vUggTPW1AgCeXVmm6C2BHyGTJirXdD7ebEfrhnfzKa5TNkQcM7y",
  "key8": "bViPPzGc6BNAH4v77heLszLcxNjkt1noFsgaRngCX7mrUwUXrBrdrdUV4o2KTiEbDpkMnVSEqUfhyXJPmwPZkDW",
  "key9": "w1Q4Hrbu7rkpq3d1zquRL4KYdu14dxiXR22m5GWwZ2YMkHxGMP2oCaHGH8rw9NQbsGaeREB59V3Rcf8CPnnDy9Z",
  "key10": "47mmmhCLVPWYoyvSncnzQUmeoTMHdNhWsMcGZx4bfSXbGiuvXJmumNUM1zaGcPkExgaYQaCkdhFjnwKrnbygBXiE",
  "key11": "3N2wS5yHNz7wzudv1xTYxQpBFo7jxipueVwKF794v3PZPTELcyaVbdXTBhM7s2UrM1QkDUD5ynv2tHKDKHxWkasA",
  "key12": "5XVU1dHBKwR6f9FgfXEqCnofJEEspAbu9vmNx7ZNgvZXiMtYKDGtcywMKMoJJHwUVE4sVQ2SnpKmg3nNYXjNk6iP",
  "key13": "4FVt5MnsWLQHJCzS7N5L8URgn8hLRXE29XsFNkGmhT3TDirpMQQVGDWtCMm7iZkPMvon4CtvCw5xg1zNG7jK3bv",
  "key14": "2Hkzp4bnxHaXToEAhMViW314QC9774U7bojbYC24xnc8iuXEMhEYf8DsdsFzC1ZYCTsa5LGfF6fdJd1x86uv9vLa",
  "key15": "4AaUCR39NFonWSYxfDHkhECeNrnB3MCxxyuxvCJ3zSeGyBwTV7598xy5vdRH6NHaMZN5p5DFujHyNi1Xb9fJJFyC",
  "key16": "3e1xTL8nkEcniL5jYhk9vvx1tv2jdGCW4KoS2jjdXEFbfeKf9Vzz5iTeZuwzxneho9jTzqmgxsc8oEUxUF7CDQAF",
  "key17": "5dKbba15pTGeY8bijMnqSw41hinZzua8WF4AwsxzpNGvHWexczRGHXrf1RWEyYvkEZewhTxMYZjcrig6BS6H4ACH",
  "key18": "4BWnzzLXNK1hK4fVVyS7AZWtHtTtLfwuV2U8WfW1FeubNgsg6atMT7gcdAuyQE4YGDoH5DKFrDzcfAC5jR63fHfx",
  "key19": "5neQyY7ufgzSzQS76gon8cLZLeYdZsjf4c5pVAnezMZipkK2hZNQJ15CyHemdfeAzSwoKyxJQdVukgASQ9NbyC5i",
  "key20": "24FNzLbUXCEmW4Z3UEmGDaH8nNp53aNTQxUuhtRMpbbAb8zUBMGsNJFfa2wwgVwDyV1hTXjYQCUS9pSDvNuBP3kL",
  "key21": "2wvvDfjh8Ak6P3CYFEuyESyzgJPRHK5gaUVNrwrJHyha4y9uDif75cx4wJDVuhVnrtUwXXUr7WvdpDdGXVViVpJj",
  "key22": "4gSepigwYfop37rb5Jrre4qarSHHtQwuJhk44YRQfPczs9YdFnV6FdHk7Kh1n3ZH9G87Und9CKk4WbNHursy1qsw",
  "key23": "4mVzK6bgHoavJoFuiZ5vPfasTcsPe39AdBXzZHyaghbnbYYLAtmZU2hqTMuBAUHLP7LPi9ZH2rdCEXBDYDds9Fki",
  "key24": "5W9ASUNu4LQYrSwWSGcy3PCMmEKvtcx2nvq5DVkZrR3Lptzwm93zSx9HyuppKj1GEhLi5P6bkjnedYtyC5BLyyci",
  "key25": "5ZSLNUQfWjZz2rxu1nE5aVo1M7Ggj1qGXCywNvdegPzbXzoi4zjMfbCQp715zoyPFzEYEd7SmQ7uuhV5BWQ4zvui",
  "key26": "5v7ZaPkdhfqjQJanQ92uMoHSrujPVXuB4CwxqcMrZf8b3oYd2dRyVVeBNzUrch8XJg3BJqtohdYpLvS9oh54s14r",
  "key27": "2i9Jj9F25jBKJRfbW9tLJuFv4k8LQg2XuTRGtUe1a8ATCVWgfe3xQrTDVeTicg19VKzcK8ukNHGF2Sz7UnAJBXM6",
  "key28": "UTRwr4J3QPF13bdvoXo4JSZfEqofjdVFnjW5k5LCkMjmUai3J3bwJdcFFcNBeC37Sazr44pSerZkvFvgUrPgfzB"
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
