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
    "4KRVGAfbLy7HUMvJ7fhuWhrb5qQJNd5jUrZiPVw3T3pDyduL3BnJ86tshwrbiCdVhZce6uWmMjb3RpzZct8DDYBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HKQg4w32M6cqfsCDxA88m62RMuQkCfrUvEuAhXLM2dqBWCLDq7zRqdLTwceqUUcD53AhKrsM2BVcbKFAXM2Wmj",
  "key1": "2PsAKZ1BdQmu7hgBS7o63csALuwHMPg3f37zm2BUU2yWxY87dmj29m87xdx49GkVU3LeYmEtXFonwZJTtr5SA2Sm",
  "key2": "4w9Aei6D88MUth83JUMQEBhYpGGqcTh8zrwG4GJbNiiXkDY2NT7bw63mGq4CcxGpECpwSuVQVA5fUEQ8GSyMDjPp",
  "key3": "2zzJsBgfZopVEVKqN5mhpW8VG3c3TRPCmQZAtRzoLPARz1U62hzmkLv4yQzvxE4fSARdyMatkied2hoEy3wCMDFu",
  "key4": "MPXo4NYoTE8hQrJp2jCWbgx7VWG32acvVkSrUfbYiW4YjDKjiTEHaPWtWCfhf6PFjBwA2TyyppUdDXBHVucRbgR",
  "key5": "9gwHKb5NmnwzgU3d3S3uAxQtqjuiz2XuKUCNHJ8oajE9KYf8SZp9qLVrqaBxX96e4dK355NrzeiRYX3U1mVaghq",
  "key6": "2nJ7xzHaU5Qp6JcC2E7PDEbXbvDqei39C2cRLpCPwxwJBofJ4UWtSLW3uuDzHXuHy9Uw2LB2mRRkC898MGj8RtCC",
  "key7": "5458MpkT7UXnb3ERohVtmFMJyLJ7VqPw9oL2FFUbw963ReFAQBKpxHrkggD9zNdRXwn3sy5ed7xnM9x4KmiDwjqx",
  "key8": "WdFBruyLsDk2MavfSHVcQUkZB1UM9TBsG1tvRyMf8Yixf9L1CnMBfNteizUS6pAKiFFfgrkd6UL4sXQXRserfGG",
  "key9": "5tj1P6tdrxctn8jxYpCVi2GFUJq51pJAwxEaC2xzcZ5rThCQstMMDuxh9etbVBXQWod2eKEZcAuzfSbnPPBt36px",
  "key10": "3V6jXWnpAkR67q7p2BujHu8auTC6jfejAWunymWe13MYsuqpRGFpkS7VWSc6Mt4oHR4mx1QUBEuZ6XCXWJqcwmQA",
  "key11": "6y5ZE143kzEsSZwzoDkaxshjgReGW5fCDM34kUWd9xctma7RDwmy8dtwLKFho6yWcaXwWtP4KA92Dajsgf1mLAq",
  "key12": "bpg855JYV43dD96uhgm3xTDsMChQAT7higYRHSoiM8aqtD1EmwVtoMC5YZhp2pbcUKFdr1Smnj9Huw3ejX2iMDi",
  "key13": "2cEjbG7zF36Bb1PVWepdFEZbFLnohyAL5pVmBLGhGZnbZBnRJhMXdbnmTFb3aQt1ZbHBdwWTqhLX2r9o8hBMG8o3",
  "key14": "5cZu5NQo3GAA9NJs6s4D7AEPqgbACL3ZCEEJQNtwJzPA4VGmdnC6utczTR2W2dCwYDZpQ6SgsCnyakkAeEVWewZ4",
  "key15": "1Li9yXPkpDKC6jgA82CCnBmqr2sAjX4MuQnqjQBcRJBV6THF8YxeoR3HFQ5pEyQExNGpWWeZi7UWpQQSzxaL2ZR",
  "key16": "4s1C4VQLxjwq62VL4n3Xuje3uvb4j4kRdsFnd4561E5V96mUPLg1Cgx9bnQ41Ln1kdNSTqHzLQx8FcpB467BkHCC",
  "key17": "4t7KKrpUNLUBSSWYcQSHJQrzVhfekW3qWaoi95c2Fvy2EdcKkdjcW2ESeoLwCApXyqZenk69AMAmaQY1UMr9CEyK",
  "key18": "44YuMCTN98gU8WN6eZCFxXXZ2HZfu5i5qrdVvunTaNHyTCaWHcmhzrtt5miZ5fgVMdArLZdTwdWfDYQnTxnr5vDg",
  "key19": "2BsPgjNecC2Ch8C85jLSB9uu7tj7U5gKMrS42NwmfsAH891cHsuKTmkd7xcqxCP4actKcfEq2K3NKnVEj5gmc9YX",
  "key20": "4wYKuNipyxrjX4iwy3sAf8uyhxE6T4s8foEeNUC1DywXwugm8NCwBuAnGAzPRnKVuxi92Tbr9KSRNgLwFEtKmK7c",
  "key21": "2yFz2mvoKDJAggYqrkf5sD3cCZbgh2YXyeVTeLCjrdqqz4mYsYEeCnHf9ADN26hP4XQfezdF96Qd3WduVh8s1C91",
  "key22": "3dFXvHWzAWAuRdkpjs5iqF5dY3MQsAFXKuiqKxHWwk7zEe52NaETPxxUZyzypBkGGDVeNJurgSJQkCW6V7xYcTQd",
  "key23": "42WM82bNoFi4aRa9CQBwbGJ5PsgiQ8XVMXq9FSV14Kv3yEmna5BdibQjwuwFJnJddnYAK3hsAKocSCce4QqKRnEx",
  "key24": "36Wggw4JJ5KVa4FTsGndSH4NUuCKt7n1r8GQWiegRDidfx636Rj3y6Pk6dUDgbnnX8fd6K7oSHj3tjLyeDAMo4ra",
  "key25": "5Y4i7RVtci8YRtX5xDFeSCeGq9UjLhNV2NVWGrV3mkwF8W3pnFNpQLvNfURaEqdYCTqhssTF9mG5sH2fpQiGJuiZ",
  "key26": "4Mz7NgosRXq2VLUb6PsubwDg9Pwmcxqjss85ZgXkELva1TC8Hhuc1Bte9jowSFCZRdiJF7iNgk1nR2Mgt5n3CLYV",
  "key27": "3AmMYGC5rh5Rt1ukwczct4UoamWKex6R2vqr2Zu5XPd3LgfgSMy9rriSc8idLyXxJSnKnj4ymBBS8KuzuX846umX"
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
