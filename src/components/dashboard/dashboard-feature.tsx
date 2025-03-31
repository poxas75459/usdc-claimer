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
    "2qDU95r9MtA4Mp5XgnWuodizRhBi8EzisiCsujMcPVr96eQe7T3KFNewhgo6th1CP5h9BQo7nCw1AECWB3M1myJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1A6UwhjvEvY7F7b4yWs446e8p6aajxrQhGyRiJFBVZ3zEYFJZ5kYzDpdgxNESjEG5JS2knhGp3aEx8j9GqnwFJY",
  "key1": "jx1GMMr5mhJ5zWoEYpsRkypqKeKCUfm1tvmz75yXu4XbinuuSmr6MZ3BbwuuG6eCZ9oun3ESFLpkQfeXDLkPjkj",
  "key2": "4Nepa9ricLWuyrADvJA7GiNTiiwNRj9dHpykozFSJZ2cCrweNiQKpuC5KxKfgX1k2aPUG8hoy54Auyz1Jb6eQbTm",
  "key3": "3boe7nFTww16ijz3SZU327ht3oRyo7G1LzehRfgoi6bon4cnNGsWzHP1AuTfe9FQMhLz98vQVNnoabduZfm1bFwd",
  "key4": "4e3JczaRZxZCCaUk7PsUhhX2Sx1bJXDPoPu9LP1E8L2vHo7U2qMjDkbdFxdn64d7McmuQsvhb1JqwpUVGLeqbR8C",
  "key5": "52G84w2H7Ar37L6hbAQmpqDguJBPFwXHYG8vihBq6KgUcs7feezY7Sza3VndDqBYSnEtp1HvjYUTGuWe2wupBoXx",
  "key6": "2p3FkoL7GeFhV6tTZ1CJRsBUzVSbkwGSCBsHFRixLKMTEbMCheRwMUURE5VmuqSY1zonCZcA6wfAfr1AQ8Xvk9nu",
  "key7": "WUL5HG5Hjg8k6Xz97hsm8XPBJ33prU5ofeQcjmyde5Fd5BPSKjaLDj8639bdi6fhmRWGmqgsvRVS2MA1FZhQWLA",
  "key8": "unKPU7Bryv1KbMxHu7x7UfrACMK5KvKhwvMsMexBbXsJcpv1xMo4NvK1nz9GtPxiSTSbWAVeHokic4FFHD3Kh9w",
  "key9": "2eDYTaNokv2acgb56he5izPJ5azT2Wv8zXVAPZjDZEZipDWbozhnkUASC1NhnGzoMfRS6FNBMs7gHGbsUNDuGaAf",
  "key10": "2GE5kiXEkNpch36gpq5dyJMs7R3cGjwymPXFPwtM3t9YqRGWWzs7WLMCMwDMHTieyhPrh84GYzDSbCSYzRvFzSGj",
  "key11": "tSWmQKxdu3FafJT14WZdBHdNWjkKVdWTcRd5cF14DKP2CQyTKWe2T3ESXPbbntbuCjEnnqqn1wUqW5jfyD1dsR5",
  "key12": "tUVszXRfUsvyzqeo48NfMJEgVhLvErDHR6oUrYi76Gvw3TA4bhC9qp8gkAymccya99g5ymX27f4H3kj6SbcuNzo",
  "key13": "3nCs5P64LLxjLRHoyMWsRg3ZejtTtc2ER1SLtfycHq1XeTpmTQMn8UKdviZhCAByaTcFLWWNLEcaJgJbNB5R5BeZ",
  "key14": "37P4LydoaTT8aGPiYVTGGxNMhQyYoDJCta1gyMdPcbkGk77MciQu1hC1oj1tvZZU3CJPVYimHkqTpe6kWQeKfkN",
  "key15": "2PrQPqpBvAh4C1bjJGkQuFcAczfUyy1hT9ZiGh53UULzVo3XrqDQYtdMEjRgsJipi3Li5uLrXvZkBQmJ4yztf44T",
  "key16": "2cbUicgxGnT1khEU7dYCawjwxpUje5oBf9btCgdnHKcWSL8PV4nk6sG6qM8LCdCUMzrxeQUsL3EYYivXnqCb9hqR",
  "key17": "5CLXTq4pQgc6p8Mkx16U9SJfatdhFrWDn1byjAherBd3bDC6tjxeSGVbwXU56ajkA3nQiHAgabjRZTVyHrr79skF",
  "key18": "2a9VFrY6wawhdCb2EHdeFdK5ShzMx99WvRFhvUwF67zoFpywXyZ1jYZhmk7a8Mi4hDZ6oDBtPiBReUMdA9Jus6rP",
  "key19": "9qzFFDveW7rg43Qf7tSqN91SipjLxrUSQ8u7NPvzgPbhNor87XrAjQPWxnh6bdoksBKCPhGqxsKBXPmRejkWN5A",
  "key20": "56qhJJh2rBKob8fL799gu5A6RKcGjMh5ruRocueAh9drS2ab5yUtpLtVUoHLznvXSg3zqyFER9yrAAgQnfkfqGgg",
  "key21": "mpdHc5154ax8UgRUmRrx7gWmUBsUu4VbPgxGpc7W7FumAmbJEWKxXkfpXuxuiRyVhJmHHh6iARf3UpUfeiK1z1P",
  "key22": "4homGrG6gok86h2BJsiSh8q94E2xUNgbCLcCg1fAHiZoTNXpQkyVeDNWkRxc8SQCnC156pWemwZjia7k2XJHs8xu",
  "key23": "5NV7QHHfmPeD4cqtBU8p9Zg6idt8A243y9UfBtW9thqD9mWMAPR5dSRkHpMCjSxmJyRzh1LPJJriVUCthuuKAo1J",
  "key24": "3HmFemorSfdwQewCFznmRqzqppLGqPYVhDoJkuBzuwNfP88KgQvPGqVcGfaPjVWwowP8LfaiLZccLP1tXSPBTkjR",
  "key25": "562Qy5in4H1nnydQ9xE9zgAZvP1inqGYRWYmfKMhBmCbWhBs9cYb9QrY5hLzekMJ1ZFxXGq8hXDKBobM1nW3AUPn",
  "key26": "4VR2qznWPoZmfSMz3hKcwMqkNBLFdL588TkdCaeAEAnd2utbCZxEgz1qtibx1ynYxuJfSBGGHnnMMM7MxeD5eL3o",
  "key27": "4VJ4dvmQn6ky8BJyzocU1xdVoJgYGnY2c664KW4tNWUrqtmrSF88EVGwiRYZprRCXWs4JBmS4FRMKNGqfbKNugob",
  "key28": "BgxXMP8RbmfjpojGFsh7mk7B9s58LXAPsxJbYdY1oudbcZfDbMcouVEhTiaV1KVXZvjZq4HpW4KsEzFsYsmDdhT",
  "key29": "5XChtR2GaxU5rPwMKCZBZqWuwFF7KfGkXbVcNjagYvmESTheKK3oT2hBaisozYGKVXPAcX8RCYtFJXZeYPoybXx4",
  "key30": "4g4a6M6pBd1MVBG98G167SGgVwinCbJTp2bhiPZ14Yw14tv5HZ8CSbG6iQkbQzMFChgpvC9zSFMeb4yVwAVfp7q5",
  "key31": "4hvcR4TSqQvuq3U1DJvbcWWLfV6rSfoBn8PCd2NymeCSmueVGrcGf7BDyt8GKvj9eotBoHHWayWX2924Qv4yRcGx",
  "key32": "55VhqJ2dYaRAntkomWKyjCv3qpQNYDpbUAWWMLoDrdtDh5KSv6PzCChxgTZ6W637kWZqm8fyDmapoicmKYrCKFgn",
  "key33": "2dX4DL8XRceFMyCPPNX86sMYLmrmipFk1GVmP1jScTFoMbj9Vr6kGrMhQtVsrqxjx6vsx47WWAugxDve3yWhiHCN",
  "key34": "62wTtyzz1j5SqNBteb9kDWtDESiwSWZ32NKTc5uD3ye7qeSUm4sawxNiJi2og45FiELgRuciJ1aQtpD6VM6QxRBo"
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
