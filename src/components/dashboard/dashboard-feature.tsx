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
    "3oWULjveYJcLwEtCKEnCxhMRdARsS5HbsEiUyAQDLsdZ88Bhqo5VgBTt5si6iXq2qsitwpXGBg9uwZdYkvGwktSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WNSyET1f9tHoKouHsaFPWvTQPKybiZsR6BfgBqSu1aoND2gxpfWaYaqurKZT9SC2Ri14e1zz8tdvMJAZgv1Cph",
  "key1": "5DPriLXDvzZspbuF8MK9Az9J8URaB9RUgftYpzjEViAfGHc2ZciYYvkA7oRpvdXSNL38Km1Wb55tmdSnNqyuAsuZ",
  "key2": "1Ravu6Km3nK3ctBYVfeAhUyDS5rx3eN1ZYjCT9ryKdAoawRRi8Do4zrTBFKQRLCfEGgkAWVRroQs7T1ei9TJkFq",
  "key3": "4Dv5LMo3QgxkYpZjbBSQ8VNoaFp3GeniJn1LCxgneX2BxfsegKRCRL151NiBdAYC4Yx4insLg26RCCPYa8F1TJ56",
  "key4": "52WovpWuohK83YMxdDEZYKY6JPQ7LnoxecQG1LqVTzK7yNkDHZPrzJQhtGMRSMu2MmHmbydShx6fWKFTraZpdsG",
  "key5": "2KsxyWqLFM4Mw6tbe2wgqH7dncNyfN6V3Zg84xUj8fjQKhrQ1B8Mm9nNEjwZ5vJkqKuJ82QG3DYQFbkTmk4Ahtm",
  "key6": "32xkcnrYjvZ7Mr2eYmw9TJqcyifpTfpF7ckD3NZ6nxyonMD7rEEn6UwWD8Sfh9G15Ckt8swEG4GYYd7CtKJewNcB",
  "key7": "2Gbi7BWYBZLXw3PHesJ9aDvMV615cbkdbzGyorrZAogJBXke3exUmzrJRdBJazp7qrm7GVFHRVSgE4vQNwPbifbC",
  "key8": "58ojrB4FjrtmHTqFpxX6mDuRZ1RMEd6VzC25iGwoX3YeEhNKnq9ymMtsmGXMtr2UNwWDT194kCH8V165sCJWoqvP",
  "key9": "2qt7X7Wg6ByvNCkMoWqeedzDU8eKrMCpqvDx8os9guQT78FucjmpNdU1Hu1vkLqkRQewAVtmF1cTAwGiEo8v4cUN",
  "key10": "2iFcUQbndmjMEBWvcwJjzKkge68eU1ce4NDLqsN2vri4AmaAgdQqyCm1WQ4GuZHQ2U8hPu6UWfAAnxoHzjo2NsJg",
  "key11": "36Qp5TUnm2Q6unHzrGogG8gzcyfSuWRzsuVu7bkZEP19MVakEEdGMTUvEHv6dJukNroocGxgeSZsv11v3UbZrXfg",
  "key12": "4YVznggTM8LRf2ifgy3hu4jruU4rF5GiZPV8xjYiicSK5Hh3n7DEwERPFjBxo8togNni1KMnEVcnuDMtFNsVUXM9",
  "key13": "m6PMmpQFMbZdAFBA8Pdpk5rTmqaYQ5oPk8wKbt6H1bt67EXcus54mcFw21e8TjcehV5zRoTbmHZpit4MPuw4q1v",
  "key14": "drRp3upZb2Lrf719mKLLxYF9E1gUT5FvBxdnsCSWLfz2YNHoBs8HKmRtwNv23YXo8ePnYvCVJMuz7T7qYF6j2cW",
  "key15": "129CaDdxmE56KUKjNPAD8muWkayduJ7Qt6J2whBH5snHJSC9D8JVSop3yfwmcgRBaNJLuEjvRfjBumVem1gEKu98",
  "key16": "5fC4q7zjjx17RaKxxZojvx4GgrpHBx9Erdody24WfbPpVeZcjh7CDr2Y8jfB439j576FEogKtcxT34RVLX8HEwNo",
  "key17": "2BT45LE6rQfp2aK89R9FPYEyWtaXgcXGGJvujZ2abZ55dkvuP3uaAuHt3i9cKJwjE3LxrXRtxB7bfAu4UwFdHSkR",
  "key18": "ADzgkDahNbopfP4fR4QCypaLpqEhaKM4XRVL1RPeJpA1qXUpyYhpgn7pQFSmVtM8GHxP2pcrV336yErM8cZe6xw",
  "key19": "4VLv7MD6HGRHBD4TAvS49yJhiBVfTkHCYgBBUixqyfCp97jrXU6ENk5VUQMJg6fHGDvwUFzzeg7HxvyeLeYnTuQd",
  "key20": "2vwWzCEz8cQLqz9NvLQ2bZe3yrmGpbi42hLhq1GqRQgjSw4JAs5BiYQe12xmus2N33LEoyAQP9Jf2aAvfboosDsw",
  "key21": "4nhP4JBGjfzeK8YtRGmeafcXWEtWvKQz7WX2udh61SCsaHgXbLkDv7xAw3ycE9tHQJTRC6a8qNe7x7cVjx34Mp18",
  "key22": "4GmJheJRYW1AWp39C1cpfrAMEdaWfkJzcWRdUv7s2iF6667uT5RcGXTeuc6aST8jUgELfduDSAX6KGtxS6VSukcs",
  "key23": "4YbPxjUa2HUXMZPDTe2ekjhTNzNkL5uMsDqHsQdH3tQMdW6L7UxyFWQkirc4zzgLiaz3bUtqK9eCWxBSZRcidAN6",
  "key24": "5ePMmxKS7rKyxRGQmEFB3hACM8q1Q4Bnf4Ei1Jk7XgvyR2j3sxm1ZobJ5sNWnoTWFafmTJLJzZ9XnZGA6ZP33Hcr",
  "key25": "62nfHKTDMtL3xMLEAg4jsMQxYDumJ9CB76EUpivgVqPQNPuXRAHuwJaRgmSKvyzkw9BDfZZWhDMFgQNmNPFA97Jv"
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
