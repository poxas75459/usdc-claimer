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
    "42QD4phFf2gMLHMfx3xGEVUiEKgxjWvaZNSMNsbyrs84poWmhp1SU1fHFf9H2CRn2RKScVFYWWYabF5YGRuuqxYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAr3xFoenjtFJozAgbsgRnDbbpjm9EBTGPrb1Ei8TA1sqJHrLWAuVMruMhHe66j8VepaUHRPqJQkFRY8Yj7LJt9",
  "key1": "4d5uuaNgS3oQ9XCK5cbKd6FdbPwxR4DmFbZmQssiTeZwecqEL4EAn1vyTCUv2EN4mUndtbKFrdEE9x7YK96mPdBk",
  "key2": "3icYueiqAxB9yqo4NoEJLegUL5cBw1TkJiFpnobQ4VaSRuZq7JMiH8g6nMHF8x2Uf78aHiURTuA63avh29JnQW45",
  "key3": "4htqajQAW754Rsg9P5Z9zzfgrLJu4VCdt3NwdPs21mdJWZ3yhFY8XFfAgXZKsn6nE4kCenauMm13f7cKGxLEZcrP",
  "key4": "5rCPQX8hnfHWZNBaWLWivNZpDHwQ6zd5UAyf2if9NcPrXWgV6ACNB7UQgtUoHkkR4S1DinvNKMUvDtpSG6ASBCvF",
  "key5": "faAUhVbxoms7jiEBmoHSYoat7w9LMebNXtJizw3pz5SBeYiJL2USqdBRX4ZzSrRMMV33r54q6V8oxQdVnXWWLBe",
  "key6": "5dudx5adp7vj4xvzr1BgXUnoKca3RRFBgNMvfBNWiYR4ZUqdQpEE2mkLwWs8QfibG6aE8axYbDhPQw2mQEg9dYid",
  "key7": "47M7FVCBhHgVXHyXrf1ynr64gMJHfk6ZvBGysVbzSBEu2Pe1eGa8qz2cxtDr6SuR37PNw8zUG6u74VCdkDqKAokR",
  "key8": "AmdxEGU7eHrS9iX4LW7K3tppkBRqtFsrDkAMaCbLRQJJqETsMQFbqYUNbJzttRkNswcjSTadjiFowXCPNutXZjv",
  "key9": "3KDgNU5YWMubWm6q6vbgW2KbJckKR3n2MiEMrJ9mRpEwWDTcuw6jx6BWh68o4K33zvt4WgWeqXW49Z9evLtSKSrB",
  "key10": "4gghhGfxJ7p6qCyjHo222kfN7iJj4NqnWkrRU74b9SCTiaBYcHDKgsC1XF4uv6dVFK4peAaRDYnbcjUuQGz3Un3o",
  "key11": "dWVtqdk73jVXHwevjFpq2Tmcr7ubGtxWGtGutb39XEufDHxrchaJmDwxjMHxFDKtt2GH2VSrgozhj31sbD1z4ah",
  "key12": "5AywHyKaRmStveK7GfBPWXdbWUfCHaxZ449a7A4CqJa4ZDwhmAWoey7rSXypPGNm4mnw18MfQpyuWnYXWUnheB27",
  "key13": "45UMM4gDXb1qV4jLxbDYwNgB7iftVqPC8i9LxQ7pqAnPogzb2r8gYED5muSTNMsD2UMoxhCUTSHE4Hmr4Y2aAPML",
  "key14": "2eqPkDgZKr6idjT4GFPZQL6WA6F13kvjHU2hurJD4vm1fFyHjtJS7zBYUaHBXAdPDcE1bqLJQdapJs6YTWwcCf7C",
  "key15": "3k54jRi38dzEZEBdb1djL384gRFexqvmgz9nF17gE3NW1E8QkM7Sg9o7HX3jgUqotRTPGkEdkq3HqZBLLr5AgoiA",
  "key16": "2pSSTkWEJNqs213SH3YpRWQ1pUrYrgjV6TgQUfhDMdRCqNpnpkWfTa35qEtw6Dd1YMDhr6gZjQinDPEz7S4TXxMq",
  "key17": "3CzBtC8NFuxJ6AzZ9fJh3Yx4b8LG281V2UTYwqMxJveughzozYY7jDRGYCS1TDd2hxayLro9YJ9odYytSZ1MG55M",
  "key18": "nVE37YnTKi1dvDfpon5P5b7CJTiSRyspYDwGi2QcWbfG4cKhCb6gvGd3w5vvGgLC8hXCr8hkxLyfCkS5JELb3LF",
  "key19": "xgPJQ8ensubYwtggn4iw1WTf6N8w5mmK6EFdgeFjyv4xyUJRZC52K12UiyprRYyLA1rNfiL15UwuvH3a4W62TWr",
  "key20": "5RkSuHwqLXuMdCQnKnMY6agDncEd8uXzWQE9eZpc7L42UeGvmqskLDptnfu4bYGR31FQpde4cBhXhDR6Lixt3d7P",
  "key21": "4UZJnNDMgRmL5Sj5Zgas73d8yfpwgpZM5uRSr9TiBnfqAynxvm9dYP6H4BJVDcJURMG14qdnxV26QB6NDDEvTDMx",
  "key22": "cK1KzccHACRQTZ27X53iHxpcp6u3akL4NBbAcKPZkuR7p8AZhNQsF2rr2TenjNHoY8GLZdeCtX6bqaXcxekarJ1",
  "key23": "4wYdmgn5hnJXzaYkJx6DbB8aojoHK2XvcyeoCTn8arCJ1iFerzERWx9BGZF5w28HQQjJGSKTqBuK3Biz9SZCgdDJ",
  "key24": "47kVTg4noBpz6eZznK2QiUPbbQCTSsq2zWbpvQygswrsfRgDk7hraWTWMsycFwEuXyPUPQ5ciJCxHMjxpjTmjnuL",
  "key25": "5iFXDcbdCcWj2A7wduLsC7WbUw7i3W8pUZPLegksyFwqKLvSFAT2cizjGbwSb8Sj4p6B3Uxi6NcQfhSSDHZzNe4p",
  "key26": "4okigPm2oii7VJAmTeNMRtT3vV5my4Nn9uprdnqX59kpAhcJ5zMtpvFYR2NufReodKvpWHp9D9svHvMDZ8ybKg2z",
  "key27": "5AxaUVuxCbgjJ1tvogPhrScRRJUARUbQbh37Pidy8QdPgyjzpVQ14vdoUKhuY6huQCW4qBVPKxa1dK9nmEG1weD6",
  "key28": "2sjtPWvKpgcQNdbfNaQEvzXzHJ4xRJgzq2MTPZhCmJWExan8vwp97thCZs24DP3ykjWHz7WwH8xcrXVgXQw4f3ht",
  "key29": "2zisTfFYFdMv1yxGM7RY4sMPug7YDFAUJNj1J1bMWsPRxxttsWuWcPNZgjGugtgAiGYNY2hyZKcjJcpxSe2496b",
  "key30": "41Xvn3VSKZgqQ17X6LQKUXnCn4hXGKSD615jSyaqFs9CXEPmtgML3q1KBb8mRuk3wgMwcXKxcHP3869DxtAKJowM",
  "key31": "2kRo1aCER7A392cYAfaUctKpdfMKZgfncsqEMTn89qUAzUXF5UPKPNzLNjC9HWdqGxAsyfcwNcWd6BM1pAXx4iEX",
  "key32": "4hoyJs3QNRrjvJkhE5E7GZ1dgqtRJmdLxaPXq9j5bk6NkGpoTjS9oJTK37VNFiaGUUkMWxnpE5vXzsWMQeJjq5s4"
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
