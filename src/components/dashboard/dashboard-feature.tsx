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
    "xZbr4d6XZ4EsFLxfsxyGDJvUDZbK5tiV9ZQDrwuzqVyHULSUR7AvdyCPEBwwxrtgSaq4Hfxs79bkSB5j5gD69vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gjr7nZGRiGK4izbkenK1BsMjTFjmQPCe4jUAZPg49LUJdvuwXKbfLPzfXpnLKrkAcksU9gjb2cNpDW792tkXuqR",
  "key1": "3CJDkf455Wqt94veHWVi8SYF8AHhsnTXht3WqW8iyBfrhKaJ5EPEwDwiE1rwAsLc9D3HP99wnZ3nNNFNS2SeCrkN",
  "key2": "2KdsoEjxBnDsDJKv95xvQjV4kNMENSSkirTVDDgzUMsAkmgKMSRBDimYsK3e7466VAdwD8fcAjCbxp1MXrYyskLe",
  "key3": "4JPgrxLdqfiAC4izoxsxXwJTd5WcHbNkEb2mKifuUCDPzVgTiuQpCBh966egEZMt6ndGVu5kssDA2hAWDtZgBY9q",
  "key4": "4UsQ2HFGgBphWoQ783e9JKWjNWXyFnVqxd3gTW2Ltg36t4kLtYpcmbxiwFM1AUtTR6pMjm65PZrZwSvDCynr8K8p",
  "key5": "djSzUseUK1QrgwYNj6uf2GAKMjgJwTVHXkAYPDzF8qJ7WyASxY3CVPhLkPT3fK3EgupwakTxhLmmUL1HzP4GBr9",
  "key6": "4guuZ6yf4pxXsbkzHUGceZpBgXW4KNfpiUubCotdBaE1E9uCJE5PFan9cP6nUgMD9QjGhPZHzbZA76hkHLmMbpYq",
  "key7": "44wauTmh3YwjfLKMHvhABV1cdGQZpuEXrLJqKRfDNPw59PRTtuiyxWfJMUtSriMfJYKznKPRRzUq3woPmwc3GwJa",
  "key8": "4s49Xkgqn31BthFNMNLGsaQeFyYH4y6aGy7pNdy21aEozk8LoUgEsRKSmoLufrEMqD6MCqE8Zq5kx5dv5jckKkMX",
  "key9": "2Vt4wZdwqVvvvdume78AkbqAAvKxGS6ZVBymhfvgNkJFmq2twv5pZmShuZfUPyVhtyWgmqmkKnqeLMkSjM69ubBG",
  "key10": "Q39gCePwk6eVQNeoFHNahPDK4ptqJ5Qp6Z4ezgaX6q7DWpqcYEfFYd4o46DRhbHyHpz2sxqP5pfbzuGRzTTGxeC",
  "key11": "5qJAmPL6xGuqfV4KhikwD689Rt6swt73ptyAeA4J8ifXAqt7LwXXdCEtpZn88TcxDY6WgPpN9F9S2xwciAr1YtbE",
  "key12": "mT6ayykg1ZTnrgXwA5VSHvHgxZqiAPwmaWPxwNsCjFvCsXu84SW6G8eLGGC3BGt5FFUJYfCGC3o4VLj5tmYwkAL",
  "key13": "3xdVLYepHfntCpG1LnTYkp5Psb9EyTXWLB3JxNf296gjwbLetrd4EN7JoPek6WMuhW83bc3jCyEsQXwHdsQJE4PK",
  "key14": "49jSyQ91B4yPK2kXcitAPmb6WCohfheJM475Ehk8RZWFMYqBSRXwkWwU4PrigQmp1PTfgyANeja4uFEY2uxif3KQ",
  "key15": "zgTNHKAwssS7wnmtNu6ot6BHcC7g9YSUMWSjTaWDaVMfdzDjCUfXj5b7KmUuMHqoLJd6FZSgFwVtQYxGA29BRkE",
  "key16": "34wNRMGVQu99n28tCp62ksxqijS1DjD5pTdbKx5M7ZBfDF6PRpNTcvhnyu6PthuU4fWCkDZUAyqMVdGeBGdscXqW",
  "key17": "3auS9S7L3DSS4Q2DHan1aLVUyfW591mYvkx3YyJKRU3Go8tgafocmRGCdx5p1e4auUULRXt2ZJ65diEGNq5PMcXY",
  "key18": "4U4gDdVezz9gU9FENGgW7P39DfsrPMYPmsrRuAi6K28ZVU4dW3XhxTmamSHFUZepbvrTLfLokkPrLQdsz44aMY1s",
  "key19": "2WUBWjyUoTLAKKZURwadNXGM3iQTCr1MWWNyNm6krvhZunLsg16FkexSpMRWUvoCnMtXE3eZN5sKrGgCYi4frVeg",
  "key20": "2EtPNp5ZA1wuSfs3ZTtEqfiUji7WrVZyWonxHEV3N18KCzyd6ufN1mVj3UEDjLQ4LpRoydjHcgdFpiVe9aTJ2ZXG",
  "key21": "2Wno9LHW4Mh7Wy6vQEsMY8vnZvNnWMNxEZGnd3ibMDsYgRGXoR59v2mEU5Hh56M2oRgbNgPmQQfqqo5x8i8n8Xvi",
  "key22": "5zz64usLRv4DPZhQP8RSuHGUMuLhHaCfxwM4zcFuF1KnE9zcuzvRQCpCHTYfYZCU3d71x7bTDFDHdBkhkvv2oTU1",
  "key23": "3K2Eu9euig8wNJyR1jdhcy52y4mBqdwEib4sN5bcsHUB6hAC8CkcGqm3bD4ghBpmxwPyCWJ8F5TinNjfffwZYQ8j",
  "key24": "5EgzwAwYj3xd6gX5FSYfoX6JuRYeYkVtRwCDDtSzrnhv8fhiLtdscWvL4j8qFUixMhJcRsdeobH2D9cmGi64AGup",
  "key25": "3H5DUw3b48m4fBmPZJCtaF9k21RCFZDBdbzCE9GC65yxCyJT3xFW5aBQeDKDhJqP5j8u1pBJCeKCfj4g2Gob8WLc"
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
