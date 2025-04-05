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
    "ThrY5Yg4BdR1dxSM6DHdqDMxYVtrzs62HDJPznB2frYq3DUgBHo719WY26iuASHYrvtcQfa1wbHeUweuPfF4hb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aVYm2wfpCa39Un9E6ZwHsX5BAvRjeZYH2x2VCp6p6XUtBLV2Kg3G7qbaWdyDuCPTNjdhCmRcDv9nTQitp9f6HzW",
  "key1": "2uHyuXUJnUNecKcVeLtjt8LeypEE5oMbSGrtEWPSVZuSggAFw4awzX6f9w8CKV2twVZvKYPo9Cyonbnk6uaML6Nu",
  "key2": "3qxGDHMMSFNsmoREcmS4tkDrf8jWTKXy8Xy4Rj3gCMBWNo3Ckm7PXa2QtAQDvSyqH2GGQ813UGtF39dSoz63uAPu",
  "key3": "23c4n9PVUcB7DwV3WCvjQju3DBsrtfkdtG6HgszTjBGWacGxUuKAecxuLZhfDe68hi9aDJyV6P1mCrpLPPsSDAf6",
  "key4": "62JZP8gaGh5ngqmqmcMtpmfWS4Ny7rswZkq4R5nyFoVW3rB528M1aYJ7q9tHa35KDjGPqmp1keKKrCNVns8oKuw4",
  "key5": "Jg241DvhasnTzUmCZxmbB3mCWMmiRG6JoxPUHRHrKXENnY9ANy2Dz7qErctz8katSweLZnDV63mrcjwP13nQcPX",
  "key6": "4y9RoJDdmpEEzHLz4uewTKfxnjFouukRGc6MnemHCubtn7zPcNaaahKBgXtTXB19V9YFJ14JPXEPVK48uwpyPwYe",
  "key7": "2ybYFjXuxUUPVxD3WtCZzcZ8inUd16xxYqnvNDGkFWeVDHHNSgiuPkgG9FLTkGDJQw6Vi9QWmzqSC42UfFKvn7nF",
  "key8": "2JKM5eVc8JrnkkL7XnffgDGMorFibpow42LJD53JKka9BkN6LgxGLv26Y7h8CkwJgZ6jVmLdJnPGE8JmWKDGgxGg",
  "key9": "oVWH9QEBVn6iHJCG64VCam6vwWAW9WLofce8QXexBPy6CkivQs4NdYkkTKU6qYSPG3zLJeYozyNJHYsRVCYWTUT",
  "key10": "5J8pjvi9soZEuuG5gggsCkMN4tVuFu88XhmYsfXLyRpYbpp75GPLNxxoG83jgBGS9xUcxiUPCtCHxzRT95DXVtrW",
  "key11": "5sDKzsVv7X2VVjbTy5ngiJZ4sg8Qk28Z9roiNZdy9FSyo5Mp3KRfpe2bworZkn3asU7o5hjXA8vreKMeioBAXmL7",
  "key12": "4suJ9wtams58BrDXU235kAApjZPCQQmiRSwuVDLT6m9mPrApBFurc3VaeKANPbTteRDKcb6Md6seo7sRAwZCyw7m",
  "key13": "2rHrEbm4FvwGAXkHUXu7RwgukyMxvt2FMPHDY7c96ANhk2Ts8k3c3SLMuAUKg6KYsgLgjsNC89siZpbm7JNPsFUd",
  "key14": "2erxbUeC1PCL9nJYcp6cfFA6KQk6yfiGxPQrp1eRSs8HDj9n7qzCpFwfFscV1wi93PehUCMEYnfktBQiPkquZQS6",
  "key15": "5ePS16zVdFqAJ3GUXNq4tLvW6zhAUzh1QudkwgTvvTeCKAxXqGNgwS3Hi4iHxnWYSWjQviszKH9b2U3DZ9fzLJzv",
  "key16": "3s5mSbFpEfJHVZ5AsCWzmvTZfyCLiAbAWpPn9UL9u8KYwXhcqEmT9F6xrzV1eAHZP4xFQ4rno79veRzJctzi5xSh",
  "key17": "UyxYXDLYqr577wfhRwb6jX3Ebfvf1SdXM46vDCVxRoHkNcBZ3oBB7USrPVk8rdyNVVs3Vb3Y7L1MkPJcy4WR8a7",
  "key18": "58MJPAxdjDYas3tCMDd9u7kyXiJAEe4kFjTvgSMwUrC9n89w4HtuW1hyxV92XiEDjY95kzt8YSEfyMWbx4yUFeob",
  "key19": "iEJW1HsompaFY7FQoEdQA2Jb63GzK2ALP2mqYGugxjq1UFrS6d6eBer2xUVNdZ1siQf78oe6ZE4245kWxTr94nR",
  "key20": "3VxSKK9hkMFgc3mbpgo5x2S7U9XbkPDDUpDLrsYsVXjnoLp7ey3GHZi6UoC36DQ3pzbpKMLKkuvsX622yM8AotX8",
  "key21": "4cYit39nmkdFcDpQeYdME4jFYfKnQ1EHq9oYMEnVEaYQutSLYxCuamrrnzHQtJtUGCrZVSqhrJyLLpH4N7db4XyF",
  "key22": "3FMBV6ZjUxxrTYMoX7oDeZxZhT8NhhmTYiMFkUaJzz2tE2fh2YspND5gQ7ijBGZjLozEcCKZytUnDR8oozkgJtCq",
  "key23": "3aYx26H2RQwuDCTEno5dBjcuqd5xre1FngzTPm8Rmka6NVa6acvbeaN2GUpjHcHdng2BiTdVx5yQBojF1dHZL9Ej",
  "key24": "3KRefwNCqBtgcKzxRinrQnZ1eWxCJ9bjNwixLeQrbp9zrTVUQLen1zniaAhxWqo9ojFX2iPDv6dkWJ4fE48L9AP6",
  "key25": "5t6bZx66PSpGanqJBrqgyojNUSh6oq65qJsXLzNVQNEJh6ADXmCQsgz5Nqg8m7LEccmzPPsSm8KobyWS4JAraV16",
  "key26": "2Fxc6gx5xMLzK6uY3W79B5gNDxEKdgPV1Sz83SCBjwyja69GdyQNXNK56WXUEYRa7wAoD8RHFL51J1nXFNjLQpmV",
  "key27": "3mGjmgcDrgx6fWyvFVpPtrFkbRZ9XVTGijdeg4M5h83wSJU8ZXsb4HwQ9EYLyhBy4xJBHbXjqMyJBhWvvBnbhxNq",
  "key28": "3r1ucfndizKwXjyH7LNYft82Fqe5ANFFpmbh34o2rm6KPgqjojjmxyCwQQAQ8Y7MtMKn66HLEDtqZocuc1c2XARg",
  "key29": "2XSE2swRr1nphqFsY3TmJQEGLBbzKEC4zdZj64ZXF9RRsq2nVZwocfJmZHLfneiU2TrSsRxDsBReMWHJVhYRa2p9",
  "key30": "2qynagq6mJh2Qm8ojsHdvvZBai3JkiV9JaGxRJkj9GbLKpGD5aeSbhJQk2gku92vh6puVjTutf9qrsGnfATxM8ri",
  "key31": "5brcftrbfUAtQ8DxSQL4qKmmzAvb4YA8sGh3TgdsWyeJrcXNHFFjb8giqx9Ppv6Xjf3Ffj5UKHVW1A1v7u1u4cZ3",
  "key32": "3fLsUW3nURw5r7eJvfDTG5iKJEF5r61oqeBSBqpkTR6K5JFjwnjpXWYW35JvtnN6orUw19Ut9yrUVMYJ7spTnM79"
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
