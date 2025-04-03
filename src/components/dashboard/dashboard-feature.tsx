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
    "3Li5ztvPm9tnhWZbSeZvRikcSYmcSbBaCJt1GVzHmKB4DBMzv7admo5PCDZxKNqxnrbBLofXvEcbBFtuAnf3p8QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bu1vv7WqMgzzSG2FsBa8Jbuu1WgJiMucocQPJYyE1D5M9nRWZqMsADq5e3ibRLrvM2RBSWKUGjHpbL77fNLPPru",
  "key1": "3hRT413tFcLZJpTGtEgUfGKKMiVCQxQjupQGqZ1gsZifW8ZdQH4bNcE1MdTRQXWpQVjUeSfSGeDAoqfWQpCnBP4",
  "key2": "23PQ6Kpu3crDF5rwjCqBC12duLqFW9dR2mRCJ9QiYdyXUNtG3mCa9EpLFo3cjj8fkZXVk3PngggHJxrNmT1Ad27Z",
  "key3": "45zzeAfJPSGfK9Pcp11FkTLMNLYQs6RCQpdDxbmD1sDtTvbfJPHAD1eQsrDihHUctkzQRX8sjhFsx83EFzfVCwLB",
  "key4": "c62hrNF4XzhxaFNBpxZn4hoLUTBrmqa4Wkypsqk4qJeSq3RmkXvPAtRz6rGry2dY6tNrJ9N6LqHGgwomDvKGJ9z",
  "key5": "47BGmD24tDvkbK2S6onckUmVgZhne9xQ5BmCxmzgrW2zJf8zXUZMnHh8U4Pm7zytnGo2NzJ9vTiEm4mTUy87sRYZ",
  "key6": "5dntUnje6RLdohHWHukbBbhgKfCTqJjJm8iVn9C67emXPTAGMBLDua2rzqgtez45QgUvZfp3cre6BDHuedfjiiDJ",
  "key7": "5WbKRSfV9TmATs6TQTUsov7Q29ha1CGVtwEsgAqcDEXDQmftTgX1ZCWpjorAXr4peTMZHUnccuRdcY9LVAbtdBaH",
  "key8": "5k9qgC5wrw4FexUbYeb4aaAXQCFu99zYBauTMYc4MsQ691NAuVcWX1dz5gmWF2wn9saQ5n3cj39iCRdh842GfYab",
  "key9": "im7DUNBcZWPGURo72AdCxn8kazafZnNP5FwKkQenyBcKTApmsc6uBM6PhQdLR947dbGj6Nqhrv8tBpugypM1isC",
  "key10": "1617fYNRGWteWdLrSjfGSjbAnm9cLWVbavdfTJNvnRxQQXL9CJ2U6KzSKskXT47cHHKQ3tvinHjUGud9rAZhNfi",
  "key11": "3JhAMcEMNdhDeBZbHchCmjPnDN24jyTRrM7cNzpMUXi639DMdFbHJUMr2q5SJhFk73fCb29VGHJaaQwKDfCcH9CC",
  "key12": "3vYkBuYiP3zvuTMwrGbwHtRUhhaiFFVSGz4C2SQ6KHvXWT7XqkipMf6y3UUvJ21wsuLAkTavBv8KjMgJzcYfHysy",
  "key13": "5pPfHHRihUu9uUzN6mUdUFvPeHQLLAy9cz5DKB4EeJSNMiTvXt95kt4y5NwwSACYHpvCpiVpEAFqmZWEuZbnZQov",
  "key14": "m6YRrXVui9uYnZmoTgLzqoTsh8BnhmtYDxtPLr3pekSLtL7xm37a4VMQcK5A6vby9v4fGgxXFdfZocEqwdGLNEN",
  "key15": "62hNw4vhoFKnKCHuKP4yfN6cdXWpMaUVtenzh1y1bsk5BvMjS7KCid7d7RNs4qL9tjQHfaWXV2MEUuXwdQ4DSLR",
  "key16": "3KwKTBJJgyjTTouWCVGgTdKmrkDuifmmR5mDuXFRjQeFdkGaDuYtAoYGaMxXicpF9vXvLDXKeUZKC2U3vLS87EVN",
  "key17": "2a2gEjED3uZtmvCMWR36LYDGQHoZjHQJwpHiH6F7qUzxWmNnxTCVLncCvRyia86KWaPUbrzRNeDe3aPJz2BCtNYZ",
  "key18": "32PS4WJR8q7VEhMiSmVEC2x382ksML8AphqDi8DLo3qchn2URTgdx4KFoAXo4GKF4A9pKyfDLxk2iuB2BKyv8rPF",
  "key19": "sz5xKynyQHVtCL7tWaaArEW49hpviK92hF386445QvEsBBAhmeexhsNZpifMBUkvZDsRifciv1V4NvGEKj2NPp8",
  "key20": "MjMMSJkSBxLfUvKH9mzVK9YG3AQNnvEw3T4hRdVYgnBntthW4CkSZJ5LdCHrveH4igRDdHWXAsS8QfoYgpL7NW6",
  "key21": "5mZ3qpBBZbxvyUgeyUEu947gxmuFvR1mqRpAqwov2kWdXSK82UNXNNLH1CXaAfDJtcMMWiXh4vaziu2ukRSNiGuP",
  "key22": "8idUMc323wp8yMzzW62DRBvT5anEzeVmfAK7uFB5NNTWsutHudR4DSyyEVMBKPEvKAU3fkNzdFvL47yGM12xex3",
  "key23": "5L2yaokHroJBaHyaS7VcaNJ1AUwXayqHPBiXdqARAzi9JF2422GPPUrLTrjisWjbghAXMVVxPUsyuJxxFp1Ubnhm",
  "key24": "SCiYSMoDqAknHUesLyvGwgptwHf4cLRhuYG8VVVHrYHCJLcdsBa9WgMHPtrfTbAmu8ikTEAjHGvgAGeLc1D8Phv",
  "key25": "5mZMX2FybJ1m4CMpUoUR6EUdoqL2t3CewNfBv3ULUdkTK87qSbupnBnkHd8JvhSbo1tkbnwNZV4kBCpSUbWDLofj",
  "key26": "6zxCtTneGWdXnT9YeD63EPssBj5EucFxH5CvAEosBV3yMWawU7bx6CnEStd5nnSHVhTNDSJ6UzsAhSRxYrLY1C4",
  "key27": "uRTvTnj7fcsTK7RkVAEA5KFquBKe82fi6EwMfVi9nGqBkQkuQaYWKAJ7coymfoLrcPg8iTdD3NPx7S1qPu6ABZF",
  "key28": "5fD94cY5mSp8hz1rSJzXHw61nqtYVe8rsMSJ2LEd56BtBvzKz12AAQeXjwUCbJTK1fjQsiADejvuYuFmCPYUmQGe",
  "key29": "4Ua4xxGV4BVAFrHwJWeExFLAmrYfJaxWMA6akCz3775viTJM1ZbuJ6tv1G1mbMuwerU6jdNrNq2ADiiKVhv2BsrF",
  "key30": "3FAK1ZC7aqBteGzvzBcf2WDfpjnCtiHAxPzdXZx8hr13uTT7hY6qfkN33PQZKmRStVHHn6BPRbms4A2f67WZxzSd",
  "key31": "2VxWreSwRnkcU58ApwFWTjs7CrA133if3rthBsUR7t7FXWhJ8UJkhWcNbekCZK1tTMWM1ZVPpx6DvzeQk5YPweyg"
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
