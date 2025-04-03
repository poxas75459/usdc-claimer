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
    "3y3biJu4A3ZUWuBxdhmQn5SgsJtFK9onyNMPLdt4FU2Zh67hn5DoppPHJ3BVVDwKp7pUo4Z54tGK62fug6hVYi4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ggn197bDs6fdhBDaDSVcVU2A6hLtaJ4y1mPYCSmEWmVkFKJCrCWubppvFWRarn9mjhv3xkwKKGq4YZp1BDUPSJk",
  "key1": "65ce8Gx1aom3MwWwY5LmT7rTYK6dH3VZo9fod2ZJagDHm2YKuaKu114TPktwGSi39ux3F6MWA7ngMAh1qoX1Q1ER",
  "key2": "4E8J8VmoyAy8bvx1krtA34zpP5LVEHn2VuMFATh8DtFg8HHGwmhoC1F7crGsKdjRadMvFXnvdwKGwWQaDPPNRmUb",
  "key3": "4Y54NUQ3YWjeKd3Qxs1MLkoAHUqyitFQd46QsQh24n2YebnCa15LoSqSnA5siXSnX5BLVx3sTdx7fpSiMTrQPgMh",
  "key4": "4wgC6trG3stAWzfn39ft5Y6j8RfnXmQAQAMeDTgnUM3NgEouEao7Fec5kYQjfoshwBwJk7oDh7baK2oZx5ZW74h7",
  "key5": "66f5b7LSGafajo3upQ3nrE2gZLW624AGceCsiywep6wLg8WjxGENmkj3wJu7PGKSdp4kMh2ihd9vEHMLZW7SEUnp",
  "key6": "39eJ3F3jK2RtzDjBJ7qh6ct8tycNgTkkfJmKGjdsQ62D22QwyBysVKv2V4fiJRaKPSUcfRGzhrVJ7Rjo9sEmfGFs",
  "key7": "286ZaLqzwaH2HJHeQrygrZgbzeX5hUg767TCTX7UHduUpdBhuPMuNSGMSjZHwXaDwiG9WQ5hsqcKBYNL9d7d3B5T",
  "key8": "2UbJ3nAssd62ni2whzfYt83BxDZZSDJb6PPe3fpfretnXZtoDoVcnhV25ypvQMrudosXcvnS2Ka5tq3WD32jwmPu",
  "key9": "cz86rmbHMipQ2726qkoHougLxBjnGrNdUdfGwpMEuGPedvLJP2cpCrkJPgNHitGbe4EFii1AXxpM8Fmv99zFFKf",
  "key10": "3o6MoyqWvmtenKfxS2qQRoxy8RgQ3q7BoWTeGjFoVBaQA3HyC4DuuK2YXY6x3W9ZGGDByzo2V4vYLmAFakVJe6BP",
  "key11": "3jy9mkddz3uRioiLaheW7gyJf14cwiakrJEkpwSCeANwAvdnhEu2d2rQF2r7TMWhZnKRf11nm4DZbY19tCcKAuiG",
  "key12": "bwPSrfHz69rk4jQfaGRGhw8AhgYGRhAGEF7ijiaXe1EiyjJQJ1a4qjyse7juHTsgVfsZcrCx6MtdRtpt3xePV8Z",
  "key13": "5MJXCDhcpMmCtgQPvrzhZ98YHNJCeTaRuBBeSfRg2pLYms4gYMdqwvi5kEWLqP1xSqgC5BBLfSM5y4soZtBXP2yJ",
  "key14": "5fh55Rwp6au74HgWobKCvC32ohJT2ZHWUi3yxpithqLGTz3pHrSHec7BCTAb2UF9Rjif9kC4PsyKFMuMeFqjz3zA",
  "key15": "wcB1EVv7ZvbjKUgiCxNzCUgpXqrBLHyauvzdV6zTXSNbabWzBWb3Ka85HP42pEHtG6fUWjh9casf2cehvbfpmyi",
  "key16": "faQFs2ZhDMMd5dacb2sB1fiMoiBdMpqkTHdqWrxUE4qPvK2v5dK6yhxKegJnQuJEtihvPecbzPNv5Mhfq3Naowx",
  "key17": "5z4honsYLC2D2kxa3e5DKXva7158boc3w4j8UKmXrFiJkZJAp6Gm3tumXrFWVJbikqzbqeKPQuqviGZydtLdQhkZ",
  "key18": "4mrcnwDaiLh8Q1UJhbkvYHJPkkBkEUZ1ZJKfHEKwsPhhvNA2Yt6ZYW1V6uZDrEDvQqxR5S3kM6jtZaYsm7sNVUb7",
  "key19": "3KGV2ys7n7hcW6GbsstnL4XtVqVdtqSqs3XM7yGYHD7DCSYpQas8sianC6eGoS5s5cQLMUFe68zLccKyhSdRerj7",
  "key20": "4chsXA5zwPWThfFez9jfWWdVSEfvcy5zSL24jLcBD2E9iihCtyHw4dyKmbfRudVmHXmKhGQ7wM32t4MqZRcUwZQ4",
  "key21": "43bGaEU6j1qymeiEJetijvzhF5bBpGB1CigAznKdM4gPBARTdGpW3gVBuewE344ErTNR2yxFJmZ8fsTwBSf97MMZ",
  "key22": "5dMLrLThWuDip4yiU9ZjjGULeUfoKbZ7m2c6X5ZXo4Z534fjR1k4AR4UpZQ2g8bM8Fb163opbyEHpysqzJgpgRPh",
  "key23": "2t6mKej5RmoiGWX9yTNRmDAgK6jb6ZzotDYZPRPFNZKQCa17KLcksvNqzhwzc2c1Y22TQizWKmnfNRDQnkJrMKbd",
  "key24": "5d29ahHWUwfN5GriXNmck3tFMfzW7LP8RQv9FvtRmxzbddUGGNj54gndyrzMhRcAPJaAM3mFndrBofkkxpbGzfyz",
  "key25": "26r7wZkUwr4Wx3YvGADXwbvny7fdiBjoiJkS4LrjABFbtAag6XTCgZKSUTWNqx7UvUBUq731E3myEWSMzP4dL1GZ",
  "key26": "2vEcvU9yRKSdwbCkpPBThxWab8dqKfBMwbj9kKtinxVHPQDrPWUP2qHq4kFjJdjBJjHiNHV7mu4ZdFe63WqfjdD1",
  "key27": "4nUAasQLzBnXHA3eD4xUrm2aAz9cpq8BX7tZWMXhjGDtqdfbt864tUK1xznNNtH5AyYKfBvF9tUNHHtoxqYeax7J",
  "key28": "3FVwzBHh4DASFpeTkJh826MWQE5VxSWwbUUTg3VWsFg4CxD6au28DcHQJiNZW2pMhcg89Zfj3nWjqb2exbTq1fs1"
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
