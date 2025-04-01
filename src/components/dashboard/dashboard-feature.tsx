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
    "2jtnHVW3ZHTGAV4sXcDmH1Ea7ByXpPYweG4kJtgYTJ6kymfwVXBbtu38Zj1DjD1JskNRqV5pxyKnYLLTk58EpMcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7vCMQ1E6hFdQ5ULWWf1deGhAYsFvdzpnrHe5JMwvTFQvNLUJ8EVLahDiicjpZbTtGJpWqq5PvcGHKoSKqmA69p",
  "key1": "4S8GveYxEx4FBijQjrjEtevyzQAt4w42bvvb7aXDtdDgzL6v2MyFaaLBxsdHPVJnYex87qi34bbuLbDzepGNHjrt",
  "key2": "kJCrdFW77G1axrg5G2enzZ5inD5WDVN11viaatquUTGmvnktuDUD7HXfheAVqwWqFqoTy5JiCpbsUWnvj6kVBFF",
  "key3": "2irz7ZaaWgUzdGYsJfQkNFQa4kfUbqSbm6FR18yT4UFYxFW4611nngfzSw94xXkp49u5G1Db4VoLrUEqqmxbxr15",
  "key4": "35scXu8EB4jr356Nez7H6Hy12eSJkuH1ZqmHmz1Ad1XQzvVgpCrnUEPgMsi9Th1n7uoKPR8jUa4oU6g2Mkw7anKo",
  "key5": "4DQKP8oPYnUb4MzD7ZuJ4qDP2LrJpKZAtgWski1ZyuXZDcAMfxdq6YZXbmsqRLbEMZBsxhPA9gG67GaF9TkRURHG",
  "key6": "4GBQaJLAh7FxSwrWeYov1vAY1436BzrxQdnjikxpa5VXQmpyaKUR1oyrctaqcrLmKt1fNVHqfrxgK5MvF14gtZWi",
  "key7": "ktEW8VivJbtiVL57a718LixfnkPguPRchiVkU5GfqbqSoMDciz82FrWjzD9hSp82XZs7KjbC3P8VDY19tXe9Zbo",
  "key8": "2fgeMrxE7kmcKZ3rQFJt6g4eNSN7U4GFS5xzx9sQ9YtkT6viY4N1u4C1SVdb4hB7sZuRW5fH1L7YazkoqP3aTWwT",
  "key9": "5Z86ft4t3vpocJVoojuAAAjkMAStnugJeA8kKbUbi3N759iBFhKnjCQwxQFpyaqGnLUeWYESdXpf6pjtFp643Naq",
  "key10": "2UZ71jaRF6XR2vg4huEuVVUby41BEjCiaWzQjMLwc5X72VU8qsCL1yipUGCEMMdneQE9gnCahLTFsBbWxN4yDFMB",
  "key11": "NUEiZuidaij1kv1tnZ23SUJPiM4KwLjtEKjpQ7JrRB2fJPf4iPu6tiRAjoHcTzm61ifLpuMtpYSJ1TzEyobcviu",
  "key12": "6288cYWR3HoBFdfCnNG9vxZhzZnoWu7Jaysdzkro87u8vgAexk8GRKr36jqt8xZg7eZ43kPWP734e7NcBXkEXZcE",
  "key13": "4LFiKVCg7k99tHTnqBiKrCeMTgGzyzPsdefPNsUDeHWizbe3atTnK4Xcc8ezXuXyf1tVfhCVreWZbJzESQkGBRF8",
  "key14": "2iE8sPiEYd9Nq59ggyE7hSFsTx2guN5snnEBBXsb1regWvGemFwXBwxH1RmKAEhMaqrsB2G897xhzG5orynnHgeP",
  "key15": "4tvPvPrsdR26LnEc1cBJjhqv5Zt62JsZNBUv7qvxBcqibwKz2eMa8k7oAg7BbQkf9esvk4KVxhZiLWjKpQm9CeFS",
  "key16": "3nNgCr6Yap8pbovxj8T7LrbAU89PeKNgzv7BqS4MJwoxkLygEorAezfBAzCwwXVP8mZraQq3ohqWADPGjwCqpLXW",
  "key17": "4RqXy8JXk8Tc98NgiAocM6WsSwDdnBTqu464LHNuRi2n9tT92AX8SQr1UDo35prEPL4WJxzzUqnisZ2jyCQkVopu",
  "key18": "276nNz9taPdoaz1cxb8xrNPDKGXc88eFsZvQzQ32weKVa23Fg5HAMPcvbMfY4zPkuVGrvNmzRv1JCS3tpTZ4RPBM",
  "key19": "3tufrB17MKsx7Zr7N7SUm3YbiihccNtgHPoopubFeMyWA6LdbJLf82SxMfRxf6xEXSU7XX1Q2YPQZfz2RkvE2UPZ",
  "key20": "5UDzWhbmDtChfdbee5iywteq6HwtWeJR9p7Wz9txs1w2vcpaXYFJkaGGpzDzuCBs4o8eehZRSKsFTY3wGB7oZnpg",
  "key21": "4NqrTZKo24jbTkX6rFPew9RkoYVADi3rP9jUgz7VxNpkLTCFek4tWRJwrJKQ6hYLQ8BuUXTpK7cN38ods7z12tAk",
  "key22": "533f1g5ZPyKt3e3vzuVNq1LvdxLaE3nDw78sDPKHj1DCvTPuanS6c7KqKDhDrYgf3q5dAQWSgLVhZyvLX4WwXuyK",
  "key23": "2cPYbhcLp87qz4QxJS8XkxLv6JV3xgvATKT82hk3zNFKTWbUMJ1hJ2y9gQx2hvKShEBoZdDaDaSmcUtsuqV6bdmm",
  "key24": "2qn5WbJeKWXoz8FjYg7mgzZBax6jqDyRD5bxDfnGcW6gR8PgE1nKVU47TFSm18mAyPjD7WwmJe94nYqqJBgwJcXE",
  "key25": "3M35rD41Yj2oTCEhnfVUokw1FD33jSq49hDaw9quGsUx8S9hcyJoSVYqg9DdLpmxBGK5Tq4636a3A6Uvhw5enhcv",
  "key26": "tpB5Ep1FzuFuTNUT5WxEdWBQNDsWHxguRc2KbHanYM1rWK5Aftzf4maZJVYBMbtWk4S3ZMhdobUWHi9ckeHaaTY",
  "key27": "uHx3xBgWzLCN8oaj9kWv47Qkjbht4Y8vGuSHktoihKZhjPRAWaqEGbA4CpSwKTkDmGxBrVBM7iwi8HVuxsB1dud",
  "key28": "5mSt8tqv16sDxJmjDsVCgxze4zP7Hbp6iwpdyKSqBawHG2KL3uQ55UPYidN4cnYnPPvu473ePMgBqUg4bZj1nivP",
  "key29": "55uRK6ru6v2MpiDhyZh6R4JSR85bgRdVaThbFJ8wbzqzVn85tMTzXpdP6brnjNmwK86aPbjKcVoHRCphwRJSuxHX",
  "key30": "2yZXN9qHTKaiqT6usUmfCcefP5Mzs7bPRxD97tFmrWdKpGYNbu4amxF1ZhdkPxuBdhqTUgn54YR7ft5EQJB1Hi7v",
  "key31": "4Ef9Zn2Wj4Xd7Qbsxx8Q23oeHSgmQPawPQY5iXY6GC1sswSr5FgVNVPMSvTaqEGoP1SAst3r8hNFspkQu7v4S4Gi",
  "key32": "3apknVKV7W3EFniYu6RaExAYpxA3EPQCzcXH82s9ZahCNrA5PpdX8h7NKUEuL1Cyh2kNs5hiGRm1iNbSe4oWtjRz",
  "key33": "56fxSgyk4L1FW1F7YpJT7Bx5GzVQbyzorNQFH9kNkwKsXKNj9S3ukhmm1tV2USUVsEc4s46zc9SxZRzbHuWF3AWy",
  "key34": "5Qffwwxu8AVMbW85kJBfGYhb4U8B3RYCDDUHuEw6FcEs6aiwXwf2gYxyDAXvZysYNTmGNiyMXLXLih9E8ERYaS8G",
  "key35": "NDEypGsGMxB8sDmFWDCoeiFuxNus3KNq8fU6NuvkC6QDUD6b2NEvXTCzFu91ncBnwQCA7FQDpphMpCyBX49DzNS",
  "key36": "3BPc3sceHsMgkTpudQPXhK8LfzXB2q2UWNNQVZ2XfixL6h1iGdQqPJTBgzsNzdKD8JK2q2jW28yEzGXbY5jCG2Kn"
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
