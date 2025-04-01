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
    "utU8qt7KqKwdmR1x19NckGXvYWN1enoK6UA3wyJyLmD1uarwz4Sgn9tdmRKEKdP9Qs9sMtWhvx87sLJigzmDQh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5osNne6fPpm6YeTq8cHBVFEZzc2TE3CvzgnawemvmXvMaWAKTcWypWHvisqX49oLH4aQkKy2J72PzNVBB94z4axZ",
  "key1": "3nPVRcF8CM4Je1pk4gMenJyhEFmitjKPp6zY9fQBoXN2H19muvmfZ3EnguzTCFzkBRBastiBxJpq3LLY61fmgCBj",
  "key2": "56wTwoiTtMZUsF1xKsp9FWVWWFYkeDMq4UkdM6tpArhaHGkVfTCPbz1gSTnKJbX5rBge169xm8NNgo6ZJsUc4vXV",
  "key3": "48yHbruM4sRGjSjWuRGt88yJwKmvAMXvNUDwknriF1HiH6favzM3AJK4o4GiTDG5swQ7aHWyXqhK71oGvmPc5djJ",
  "key4": "4JCpFf23ZWF43BVJejBwkEQeZJifG5GQmZHFXDW5PdQNz6PMTjVSZsx6PmFLN5BVL9SkuC4nm1xgJ7QS7ozBavua",
  "key5": "NUKro3rATCYiDkoCvfpSbGu5SkrufYHEJGwbAaxpFwyTJ2KSZ2D975TyS7w5JYzDq6PMVEXJNrdNz3oKrapU1ri",
  "key6": "KDYF8dMnHUuKv921tTZDWeSAx7pdaZQJQ1y5h5x5uQXeGUKjoik82CdudF3JSuvvyM6YCuxY3WE9GtiYHWEtjfL",
  "key7": "AUmxP3BHhyxz4zh68GDDf165GP35gtvi7LffzMrYXGBwSYPJ6565SbXLUEQJP1MoPHxDQVZkha1nFchVKSrUgev",
  "key8": "5mH3wcWvV4dTXJtP29Vj9H1qEBa7QuRpHawjgDDqoSGFfhecqFDgifYywwJzNhVDKLSCfFjW4VcMHU5fP7LSY1Bf",
  "key9": "kCVqaSb8pGAfjY5ig3GjgEEdzrJwpbkGoBHsCXUUgc7H5S63Br789AFuGNs5R7nZ26MA1RBEto3DupL9icZGBpP",
  "key10": "FwQP1EVcTkdDeeBVkfkzyoHKAxD9sBHM7RgCu3MQuprxfAbVJ9Ua7JGnHoaWHHPxf1og4SG541WzAWziRWf7Npz",
  "key11": "vh6hwbPayYuUzY8BEW9iNo9ELMGPA8J1muYj9mbXd19PN13E9TcEJTpoRBWkCrEYXvXoxUfA1udZUV2KiV8LbUZ",
  "key12": "5WdqXKnJyoG64inM8kjuGRtnBRR7ycPkdRqd9yEn76PFTnFAK7iUPtBRHcDMTvbsokFa3QPW4XjeyoJpTMK8iD6b",
  "key13": "5YwJohFG1Cs1Yzq6jnoSkounLBCxAgkcr6fvDkatQ5YxLqbGGnwcuZj2HDsydcDsBxh7aUAcJdbcPsxeF88D9eQ",
  "key14": "3asqSD1zBCzPNZmn7m5SgEaEGbie2Vfb35hMNg2nwLfwnLcvotzQhcVxLgUvGBBRSfD8W1QeFDqcER6gicYefUmK",
  "key15": "2DP9fTDCZ5RvQDEDVnEfA8PE2Zv8z7u6NtExkgVjeB33uQ1GaLE3wUMvmrcXj7jiKWv5UXt5e7qxBjM1LStFgTbH",
  "key16": "2rVvg3u6Qz3Wj36JjfGDzmPmvWv33Ua9stcErQ1GcfYMisfYTqQcEjgdGv5S5yg7ifTkdcvM4xq6JbtWhEXTUm4o",
  "key17": "5VWNvB4zJufxkvjj7A2Wd56STG3vN2hqKb3LFC9Zww1eNu4Xdc3fBUzT8n7JCoNt7gEjMdDtaDAPQhspfMo8MpFr",
  "key18": "65kKX6oMmV4ez7PMhHVjWzDfbQUJwgYLqbJTe78qN5akAWiBjwi8gsmZ3iNhZbifnRQ3o5q9WYPsKGPPtSBtbKQp",
  "key19": "UqFUZUuLoCzbJCJ4DVtoxKe5XGHygkU5UwryWSDAHo2p4HpuCyxUZGD4j8NHyHWL1fNgyk832FKCVoLZJbEjLTa",
  "key20": "2fBmZEVj6jmvLScDjZfnzbK2cFbmbpcjS3UPCijAjZJEg1rzLwEduQyCoic3ThZTWFa12g6hgWGzvu5wSNhZuQew",
  "key21": "4mB4TE16XFNq1iiBcayGNQrj1GM4vuHXKfutPzLt4dCaXxrGaBA4AhtM1LVMxy8zkaQCS6DdoNQ8mNZe1dEuMvSz",
  "key22": "3QdVavfPpcokTrC5Uaxr4AzkkjExtAvKMEroTSveNs2zBBjgGny8eTS34feV666DQzsBKrD5ZNkVT4QspPgP8Jay",
  "key23": "ukgfcbwJAjUxdBN8XhbSFVQjYhRrJmwUb4BHFCXjRmPV9zxk9Kb28SWcBvVv8iPh1b73ACMHMD86yxfigKUs9U7",
  "key24": "59qFB7Jkxxxe1Br8T8CgwTc59fSSTHgn498JwM2Wn1YBbmLGTLeoYhCYd8LQyWdKXHUX7CpxSqNqTGRSXSNSCYTV"
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
