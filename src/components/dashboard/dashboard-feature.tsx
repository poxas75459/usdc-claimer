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
    "3ccCL6NegpSdqF9WQTNRmjBck8XPB5hXiZyT9msCL5sZZ2iFGccvob7vLj6Usec5YykzG86d2WPDE5vRQMVc25Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tE2xzmEstACtoTgaUoBUkoTNw4Mg3ZQHc3QJTQTYQQU91kDwJethmAaL1kN53Hyiurk6U6zBShW8QTuJqqe4t4E",
  "key1": "5y4hFbGyjZzBY6WYa183nAg3tE1W4zbomDsbKZqoP9omVSnr2kTH3MBkRouYHqj71WbDHj3uLsT3d6jHSxpH1JoT",
  "key2": "2XX3YETNHGwmphRmE59iVRX1KuZsoSQnvbLp2hTbrGf1Y7WQZ5YG6SefaCYNZgJrdYecx2evadRu2xCEZSKkhdDm",
  "key3": "5stj71Gubvgn9UoGfxw3TDEPyhqsbtZSgiVBLAKuLXTzofjwdGG6gw1mDFyHMEyjqqCiCwnkCkuqwBy56X5S7HBM",
  "key4": "28vhwdpW6Fo3BGbQ6pHfBj489TreRiQUh2gw1ydwHzJjVLhCU4j6vSaB7p76rQ7A1419EJCMDf7FV7yvg6Y4HyLj",
  "key5": "4yQSmwjAJbwuE6DX1AGFxGPxTT4eeScfw5uTJP9rgfaL3FJPX4JxnnrCpXHRLqiiFyqqQWfBqUSFCrbkJWQdRk4T",
  "key6": "3K9NQFfWFgK31dpsPKJRF51h78f6DCZP2jyscR5KnJb5gucpRZ6Mo7J6UaYJPVjChyntoo4bxyoNhAepxPAzLikp",
  "key7": "4DzoJGXsikG8DoS9xaMt1CQjbkoK8JpxGdb5MpWHad7yUZXdTMxijmkYAefWNMCHqjfreDBnjBaYkgpFdzzoxY1d",
  "key8": "fAkMV97RLmSzzE95MQFntzgNt93X9HynqX1ov7BkuNShFMo5pm9R7MhKCZwVPmtHr7dizw3pvNhDfZAC3tjtY2G",
  "key9": "2Dya7zFSf7rvPYfn1MuPcXeNtdjkauM4w9f8dezf1nYebb4dD9KZtS5LQCgV2UABf9cQKWAd2HdNC1d8ZzY9cMaA",
  "key10": "bnfm4kkwatEZzfe2jiLmKuibJhUEK4XZWtaLtgzqTKycHmF3m8hXN52WQq4ceFbhBZUuzqTwF85LqYSgY162C8P",
  "key11": "sMn7tXyruZC62CNZc2uCDyazJHZxBL4C9pFVoxcSiKVnX3NnJsebUKgiZqFsVsc2ZChTZivfjCMHXu1RPfZSHcQ",
  "key12": "4Nf1Mz42io3w7KqgQHJbd5Mqcdr3a8G62HYgJf4qpsypLkxtME6nQ79RtpvdMiAx2KXSXnos8Y6jJCDpms6Coa7H",
  "key13": "5aY9kCByyKRacZPZpdpgFNJiGbyt3QAScnsYugNrfj2pejAAUGavhHhVyxeg7hnZPXb1hf7R9hFaELM2HBSiiS2X",
  "key14": "3HsDxWZ71FLGXNFUL7Lu7hQedHWuQtLhMuc4rt6WDbeEJPcn1McMMkDXUFGqKoRVmznXZRmHjDrhC2Jt4EkQ4dYP",
  "key15": "23eCs5ZwzJxR8NFsZVg4bN3LmG9NMw8p4XviPBSBKqR3UHBDLpAkAWagBqSy9di8H9eEnS3WK8PTqxttcdBpt9yn",
  "key16": "3m1co99NkjPLJzSMLkVLGCKLzPjwUkFNC1WEN1uQbXDQ2sUuYvszxcFskmU8Cob8suwTMMF3PHZBFM7qARFXqhiU",
  "key17": "2eXZMpihKZCSFxEArVv1PrxcBCUWfZRHiNzkDT8quK14hZJETnDovSzaNuk9XEMDRCmNGZdzvMHv6ZRy7Rpmys6",
  "key18": "2UR9xPL2N7So4Q1hsCvoGqJ2BEdZpTWLzydvGFNsWLayvBDUA2SVp1pkEfTbALKVYvY4nxHmpKSe5wTRsUy5xNTo",
  "key19": "28sFQWqLyedrpomQLC9CJa4YDZZ47F8rFCuZcuC2ki8qr2JPcP6sFNDcjkCuLd9dv5v7qZeUcipJivZA444d5tyY",
  "key20": "5oZRjYHknX68VearEwMoDL4NCyvD14Gby7uTqpVVoqpDbBNeEE8Fx6cpLDdBQjVAkjJmufYoUU1BAiijjGVGd9Z3",
  "key21": "2FXH4pi6LDjg6V1GFHc9aNy2cKTR7tGWsTzGJiFZfN8cwr6cMHyBAGSj38sFGX2gF5af2driCUqZHx3enmaNbarc",
  "key22": "5YUtx1WGAkNkpWw1FHMvzs6W2chCKmhnRdbiAHqjvEPpHxHZbGtR8YGcKvhuZkVWEb6yRc2R1e3KC25DkWdaTEYa",
  "key23": "2fn6hfgWa9wh447Rkp9G8zMFTcYivAYsjmcQ7bkmnPGHVKp1sqUvSHbRWcNpvBEmgNdawMSPZcC2UjUu5cFCrxZX",
  "key24": "51Du3vzy1DjCxosEXMqvMQxBK8o4JsuXU4vNVVVnY6eMxFvACamdaE9F1UD61aNo73amB7cijPmBoiQBYiXx2b2M",
  "key25": "5dBSDSb2w7h3mbYQGxJPq6vfE1rEzNonvzLVoSkob1fzM2tXkwGKsBEprZWdQsNHGc66ybYFxX5sZh3PWH334fse",
  "key26": "o8zYgL3J5Zg7rqPNxBYtJ7yyRPRTQiCSMxYZiTk6d2iszNgg6FSLmKxAU6f1Y99ZtJzy34GahsFddRJGm3HggPG",
  "key27": "2MnB966W2ic5jmgoCZx3oWqiT8NoZ6PRUFtubQh6bfd7TWMo1Jm1qjjXaeNBCvwutcc1RYxGMabbeWwcNX7Du9Um",
  "key28": "3pwQro8qLwhUy9sxKifQaMLCqqnHrmPGd5x9sHkwQH1J7wDLG4QDkjf5HTZCUQdyJsBEpp1zJ8mi1eL14fNMXeGw",
  "key29": "2aJHvBT5JvY9psXdDBAEEe3JH3AyXWXKRwErfLMwL2RZRKUuGi5hn1nsbtpHkaZUfKmRcEzYFUCSQ3ehgyLaT4Sq",
  "key30": "3TY8wPArqd2r9xVSfaNDXREntmZGMa5d6cbMqAZzbTaEkx5fbWnzHmPRVnX36ZWFt8yeWzeVc1h28ti85UWAZSSA",
  "key31": "44Csouzgox9XbWBrgpnBQCq1quQRJ6qQvAMihURHjo1ovXikVcviULRLKYUkgUY29gP3hUU1b4b8JkvZP8dYbjMG",
  "key32": "5D75UQrnXND12Gkt4J8kto4HcJv1WDJeWMVEQgmuC4JACXLZn8S3Rr6fA9HdaTAWP45zu6srY6XDT1zKDeDeGHhh"
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
