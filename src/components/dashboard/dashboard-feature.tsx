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
    "37tq71pzw8wAoPnGpcf43mQxddFbgzkV8Ui7HZWZdboCE3h5pBnSfeJeY4qwKQbZ7PtJPeZwyyW9qEqoeXi2Ey42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEYY8wdCNoRCtcgRU2LbkDHSsHtJGPjQsjE2ehTmk9Ed9nCetqm3ZsWmNFVgExq4DiFcXh5YVn9puM5Fji1igD6",
  "key1": "3raXfWESm5Bfuguy7zRHWQ1BfC7LVTsTSpRZEuXm49gyWxZMXRwJHveqDM9ZWoEsZr2Y4AgcxLQexKebb1vZYdxL",
  "key2": "3bKxkp5UrPXy6deWWksVCVPwZXfFRNxoELigSqqWGvcJmNN7dJ44xa3tTqPxzcJNxy4A6dPU4AkBCb72pZnQVCx4",
  "key3": "4bRbi1w1NyDYGa2TcRFmgAZ65ZEfNAdE7AQGYPrYZzh8khe9dxQKn2hfpqzCScftasJT7rfQg645obaPY5LEdbLc",
  "key4": "3iT2pvypMBvQxmccwhYA3yist1ttzPo5TFZuXEhyBQ25Wgfze1qESVJQWd71diCADxysNAx3btJXGy8UBMdnfrCF",
  "key5": "5VWshHaPjzBFcx3sRyy6wsa8FUBzEmthZn8Sm3KukPkWDf8jFQnRdQ31z9pF7nnfVVYVGTYnqSHiT79e2gFhHsbX",
  "key6": "3P4WH3ZHkdRgKKkSExAwbY1rGWEkH8ugjWMhRygddfnnb6jSBfZNywxpsxiMnUeMDpkxU9984NjSELbKNB9YagUM",
  "key7": "5znszzzqFEUEJ95DKEH9XgpQEF6wCGeMz42w1CMg6CDgXeud96iGYVZ8znVrmUCN4WnYcoNiqZL2NwXD9fwLuZhN",
  "key8": "5DuJRUnPMznAebkGbr9UWscQubwR1QYKsxFMos1B3asLqNnW2Y2jqri8cJNQWXWdZ8HCWrEFt6XcxBaTSGzUHjba",
  "key9": "5iZz2SPho4GDAkqKpRtfc1E6GwEbhqU98tN8tvAcEpH2HuxS7tPhHSL81h9CDTpax4aT5asZtMgrjNW7jKiS3ERp",
  "key10": "rS6UaLkzJ5Q2Kfeix6XGBgdxC8zVtbPFK4xT1jhyreGc51QzHG1vAnQMA2gj9VuDSLbDsYsWuDNXp1pZnEZhcFj",
  "key11": "NLk2iPqoJ8mUNkyEayd21WyubaXMTdTVm5NN2f4bvDx49yVuE3vUVidZGFU6NsA4daJZFZu4emZHBChuRtLBJg6",
  "key12": "3qNBUBw1KdgPQ4UFYSLdVw6ZYnbWpykhGc78vmupdMNGvx8zVY9b7sW9LA8QYfiohBXn11PfnhFxCS5mW9FxDdkN",
  "key13": "5hqQ42phRAoLU9749j3cEeTynLF7qrpGU5f1eJWVimMySnAMFzYWJbifAsAtJkKgabpjcPQPEeWyXq28M6ZTz9Fw",
  "key14": "4gi6MskoXLw458YRdPVw3BRTu5DmD6kwdcXKuSCNV6UWbhJ914KLwjZyZaz13WC9v4MT1uZjHqkvC7dZxT73ud27",
  "key15": "57HvD24EAwA99dGK62PUmmwBHbmhznuM2Da1YUd9LZ8imyHoK1e3WU4426apxcbV2DpdRnbT9HFffm1JrXFvhS7E",
  "key16": "56utahYpNVJ5Jfsj1U9L93PcfPjMZdqzL5DpEvmyqxbyr3idkKKMrfDTXGGJdc1LhD2hAPoy2eAQKnXTaTW1NXun",
  "key17": "2S1PfvprgRaCXSWqz19y3s6aVq42z8XUhpmsYU7X3jGxG76s7Fk41XuQuAm1rQdyUYf1eKpyJQLUptnei5uFE4QZ",
  "key18": "2L5tBRrbbz9WdV2W4GdZQ9xGA4rji2GbdtbjGJxwfzBjVsSKcKHqV5N6pCQs5xXxM9hwhCCKTqco2gBQV6JCMC43",
  "key19": "2J3eUf4Q4dtP9nC7GBzQFAenX2vs3HL9z53zrjBorFyRKaFRiko4PX4xKaiK27kvbtNq44pDkZUMBS7UV6bBjoEH",
  "key20": "3H5CtUt6madFTWLZ49RmoyVr8XFnMhHcZmExVdYXMb9r11zZapjGAJUGCRoqa4tB26ouSBKJccCdWbiPWkRGQQwf",
  "key21": "P3Fqd92J5icwvLnbnttPnmHeqnv8CrNFxwqPiZAe95zWj4T8h8BNzCrB917wALSG2iyb74JZ83zCY7tY4mvG5Ki",
  "key22": "4M4LkGqwobgRsWzT4KcxGZywubrpw2dsFpBRbBeQcXshDNCJxVJgLbuowKkseUrdoff4MSjQeZEi9Gd9UfD9HySM",
  "key23": "T8xVan5xhyZ9gzvGkLjxhukZyz4FZMXtqXhrcj7mjKEr7VjRnfVLsQRBYT2j7wWX3pQP3vzTsrY58K7Ud9b1qtF",
  "key24": "4bxpGHDEkyhvrvZJthy88hbN74pgU4xbpaWSxPftqSAmwP2yRHC6y46gTjj7Y6drncXzEr7hPPp92DYEm63H2qwL",
  "key25": "3xFgCuQajXCpYwN7RGWqJVuCDukedNYKRKLuthpVVdYBvZ3AUwb76s7skMmWDNp6snnsctVPb188UpuqsPHE6fcM"
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
