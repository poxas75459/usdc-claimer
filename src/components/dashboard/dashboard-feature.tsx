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
    "PGAy1numNse4TWwJ9UyJhgBp8mTHRFwC94AxHMGD7hgUjiUp7yEMvTPCd5dJoHwq8rEpffJXnWUTt1p7DDRMnMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25x7LEqV63r2cVYRXcBpQRsv8mNVcLtj8MDb9hHYKaxqJRGC6Mk9pEaSVSWbT43pX9vDZAC2XbsMd72qg5EREvvy",
  "key1": "4dQvZsKSm3Sd2Xgh8keyMxNPqFHdRVn5Yobk5se8HHhqd3jEbALUnwiNzyhKS5J2ePFQX3TVieLcGXjsBXPJzsWJ",
  "key2": "2kY3T2ZzPrSfAwVxfsmBJiodXSSoVcwy7gSrn2NPpfB7dycfHwYp5M7BCFfp8UNNNHxc6wuXESiCTrLcrVbrdKsH",
  "key3": "3eDJMydso9yS4DvZYKrU6wELUZP8AvpsXWNH4AUfKShAoYkDJ4mEFJdBCgBzAEDGdzjip4YvH6AJ2jmvBky4uNaC",
  "key4": "5Ahhc1mqUVUG9rJCrQygMzFjCU4vxcFvPMmUFL4F2z739eiYqe84zkwVrgMG1je4Jim2ua4am2ZZBENcMM4facaK",
  "key5": "3yQLyw6VErPFjQQ4t7rcSNensLMUmFxbQT53ikip7eTaiSTJi25yejfwMDWzSmtWJvjrGZjUR3GwiGdXkL6Qt36B",
  "key6": "5FJV4FnrSEufVRwgqiusvykcGfEg1zs5mknHcnWDJLtUU7wTMar5sEMeE9k62y4ScqNYAdpi56DUvWqtzjR5fYAH",
  "key7": "3p2gbhUh1oCENubTzAUrsWEqyVbL4zfTJjnesqFkgyn3HEStBvzyqPoZErxnJgMUPJQnmUo1H6mGNR5uViBC4GAo",
  "key8": "44Hi2KQZA7rAbrxzcdTej7sBjo1o7JP3S53KAxDvJ5Pq39nJTi6xj2TxE99KbKfNgwiAzJ1n8kpj9FLSkWTWLwAR",
  "key9": "4xQh7fLyWJLtWvtKUSuBmYreTLqasRou5miEPqySn77xw7jUMZ1XrtCJtnvGXLQBfihhaLq3kLGuYKGoBiMEAqZV",
  "key10": "3pCearPPvkCehKkLygXmgRVSVhCNZa5qLN6WzJTwqV12uov6Xg3XWTUgjcUGisvkg34NqKSKMLo5ABrHiXtpxdje",
  "key11": "quJ6j9dZBEw7wTxUjNZY5jA6AeGVZp7Ku5Z4gSgT17fkwXMDrxmjVRQ4frDRkPp6yF5najgcTzRcx3eDkz4a47t",
  "key12": "3t58iCLLFbDGyxTXYRJdQeGAMxR2Qe6GgGnb5MbbPucK7qMBxLXptZerA1YMSvAqUjnjsMYs7pvDpwCe3px3k6j5",
  "key13": "4shB8VCyVpL4f48MCn8YCexEhziBAC2Zc2kNEsHbTmnc65UmfKWXfvnHbedMeBJLu1TsQnhoSMwhas2PAvme6wbX",
  "key14": "4SfJ8D5WrNP6AKAgqrCZ4nFY58XbLYfMvgszQToa8uLcTnGNVuoSCDkVvGCTNXFabouZV97xXMYMGF9KXh2nCbm",
  "key15": "3S8KUYbqLjktvwM2CTmaZnnsB9BHZji4tTs8LZdKWho7gBnY7XErZdedW3s3HzVov6pMt5YhsjZcBWHMyau25VBE",
  "key16": "4Ys5UAa77xTAh5SkCq5XVGigW5UPjdsokd7Vw8XsiYpy9vEZkvWxt2faVWhAF14Duk7p8PajVjcFXs71N6oF4xC5",
  "key17": "4WvJAKkuVmzGNoRS7Yk8WX3QtgEjM9jpGgVTYTmc8pnPvRNLzMNea5uRKCgsjjGrwpHhRkTWv422pBARnsiQ55x",
  "key18": "8zRvTqiTuBeW6TwFBERK8nFWRBdK2ejQZYrpozgMeGUKfD7YT4KpHEFEfM5jkhZASWXsVpnrtwMw351UYhm1XZt",
  "key19": "3ydcia4HPaThfWdenjS9kyg6zRqPwvEWgd56NPVEpjyz4Hfd1UCBqc6JbrPY9ihnmvpfUi2KWwCWu9bcBcnsG4qz",
  "key20": "3PGsstairK2BQq4wpZTvSz1a1pZf6FumnLTr6y4JKH2wTnsmE7W3YbkjU3ZyNCtqueEFSJsWegBwjtWsCDy4S3dx",
  "key21": "2v5EZLGMmB1pzEMRKDXP3u1SbcC2dyBcftyZQKLmkcYWHstzn6uZyHSKZzvVCxoTN7ybf43e6R3xo9XF2DJAg2Kx",
  "key22": "36WnWESx6Pjbi3BukCbkSjK7vWF4jiWL3fPpW6agwdCcqLQ3f2xboM5Ut7nBNHWK4aRkTbgXyiNKfABJ2p4jEVXc",
  "key23": "2DG6W2YLJVxQhiqmc31gDLLpmd5uxrGuU6zb8Fm8LmimsATYQBZo8Mi9rc79cqHNosFkZ3qcGtrtE1YP6kdAYVL8",
  "key24": "62Z3Z8gX7pAqA2a7NzSEdqtSA9np4hs31uNonDhcAxSb5swaQpeX8zyuGrnWzwqwphZaKPTmq7hUkC3VgUw4rBn6",
  "key25": "26fLweU3VUyKCEBRrcnzh8h8vng3G82owk6xnschmwSDaPn36nbFCgcPQErUigBwvxbt9b3vrWkuhBuej11vb37M"
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
