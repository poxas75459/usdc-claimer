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
    "N1tyX2ryNsyeBVZwFcrwxfbsQuSGZidJwHjashoCmtYrRFotUZb9HwgGpg4MaNmb3aUTyMPF62FpEZQZxyveGb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rijr6ZbstfiU7pZDq1jinGm5vFQCPpKihRc4qM6EbJe2ivnmm8Pck4jtjnbLUYRSVtwmUUEJFw4BmwMTHuQzjrg",
  "key1": "3f5wniud71uTEr7mAbT8bEJs6U1arENL71VN8fMzHjvATEJZamadmTpCT5tQ8AK9auPxgYiAzEEVfFTyUDxXpyia",
  "key2": "2Ur9ANfRU5yNGMaCbDxtzX1zqvyMR2LvMFYoixNoSwrpia49QVpex8KJY7YvcNzMwmbMSNR3yspwciD7LA7upydu",
  "key3": "43gdgGwEqPMzpTB4Lo7XDWZc3xV9PCteagJqGoeASJiDZvDP4QCX6RMgjqXtkpCfDM5syCvQuGqVkjX85sD5AGry",
  "key4": "2bnikw4abenn7wWBin3iWTmdrUQyGyiHkBkafnmy9V86G9iYhPNeF6cPj97UK9Mic92k6dTigrTd4gii8BJE9vBn",
  "key5": "3bEAdEZZ9La1hL1fpGFhmQH4Rq7D6U3fQ6UxF5Cmr52cpAq896k3VQonZLattqCuDF9CFeuHqEpiAfNikrxxMQzG",
  "key6": "5i9rb6gdswaUyrgqc1cVJ7oVkmBQHeaauREYwMScRY1bRi9Q5eQBvGfqPusWRagdck9tD9AeJf2K6jx9nNfxeewo",
  "key7": "GmyGgZh7PfrqFvqYUCZKkRUQMWPnL8axQL4LtiBe59RzqntBQzp2vYLDRmwSTVzNCrFcCM5Xef5uhMhNPk5XnaR",
  "key8": "2m2ii8zAMHD3vefGuF4QCSATXCkeiGNjQUFFoRtKFkkDfaPDADmAQBK27xZa8pTzxjsijKC2pyC1NKYG6bDntzMm",
  "key9": "yBhenVJyhYKBLLQ6yDd6YQtWHvMKnaBNLt1q3Yc2xRzxGrRgxR5gnWeqTwo2oHhVsfDxLJSJ7y3Z8W4kdLkTHsS",
  "key10": "2CTNzFqcUmHSVKDmBk769sB7RbBidvnjsaaCNpvR9LE4DcgWYmSVQ985Naz6HK8ptftehzyPFay4MpXrijYuTNEY",
  "key11": "3mWbeoUPrPWSyV4N1rve6CDZ9Yhsnps4MtrHMArAD9BzT1xU1WJiJF15tnKGCHFSq8HDyUyWUZ6yNiJ1YqQH17fh",
  "key12": "4DzUAoBEn8AY8Anbe37HEZiYEW72JbvDJnEyjvAZcbfTBgKyEkzy5x1geTzd7XKJDeRVZmdWDSHAUTsYhfwgP25e",
  "key13": "YXzji1W27JjvwpeU64mrPXocQXA6DhYtaLtTwLnBqESDxUJfXqiqkRKoyuKZsgCWCtveCSGivCuRZxnYLPYiPdF",
  "key14": "ZyMzHx1JjvbKB3BsCF5aCCJa8dB5hemUAPRkCE1RgJ8VuGVEzRzqG7Wp3CaXkmDc5gKvNP9N194MzbFt5axsSqR",
  "key15": "51Jk5Z4h1xbRmSYsduVZZ3qmYNLwFBCseEbGCZHhUdWKraGYuHw1h6D6VKi7KgE7jY3byJdMdUoTTaNC5ZHEeJvV",
  "key16": "5o4WmFSAHZEAQEUUuMEBMfvCEKxDVR3yS631FQgTFDGb6fYTzae9xsvGgQzMeDrmw2fMHQcQSgHaSkLAEwwf1Qyd",
  "key17": "2X8GavEvVXADzdei4cd2KwhnohmSSHV7NFFUaxropcpzG2kSar52Dj1nrYr1Uc5FdnRnG2CE4YW6k3Jv7ti3c2mn",
  "key18": "5RKtHGSFxr76C1W7aYSpbWSM34xrMvFQnXpHqWaJfnzgKeFf64QdzdEjQFKke57RafR9ZdLprMtWNAy8JXPEYzvf",
  "key19": "4VaDNdFNPVBsWRgvBeEyHYneHwad5g2aTn6YoBxRuZuY8ydj2QU9wRAb7mAHNLcSDyLCXFDp3ju6vN5jG9bmjSa5",
  "key20": "3PoHmxHa1K4Sk4UJMWBWazxVxEFPXtQ4wXv1KXHaiEn31nRbfPgRajgpm84a8TcuurUGhXcP27q5EwjP9UNEf4Rv",
  "key21": "3aSBqxRPCt4dh4pyZQUXN4Lvxhdv2d94TP4B6k6WMoT3P7ey5yEbgTC3V9Yc8THYSkepmXffEfw4cEEeDNFsWJTS",
  "key22": "2TwpMgPSSekNpp7uUrVjVqzvM52NnyKhtFCrFg1kZsAwNcMC2tAvuVk1UfT7EFHPu21WhBL3qGgraQdf8LDvr6gW",
  "key23": "TExHrCJL23Bhm5Jx7JBF7ki5J3B77QDSzBeTr8YQgBPf6iz2BmbgUpDQt6G24jnHBWxGDfqpf3ooVNJQ8VVxB3c",
  "key24": "eAEZhZfTtJzUdDsmsrPp9txUpryVVL5Vj9aTU1iMF4NdCZPfg6vhqgG7kcpB4RDPEkJNxqYgPKyzeEao1hdm3D6",
  "key25": "AP4ZhttznaRVesiNZ48uqH6U6ZHzyUzYx3kbQ8yN82BcgZbwCc2nx9Qc5KNzM1gcgDx2LWCTHjeyyohLbKWAXXz",
  "key26": "25ahtoJhaHcizi5LKntQhkvqt2b1ag9ku3Ntg6ddLGnzesNE1TcrY65K8LsQHRZZY1MXhJhuXfrjmwXyJW7FGCwL",
  "key27": "uatrSERKkeghfcfkMJ9VXeS9fk3XHfPHVmG5QzEViq2ibQysL28FDsBL8iCgbebMv5nre7iSFHtCXrcqatdQDnQ",
  "key28": "4d8BLVH9c55YFBregUDqXnY7NPnhQWjGvayRGjQwrXosnY2fHRjZgHUJYVCDimZXrvZUJ6NurHkJVRZR8KuWMawq",
  "key29": "59t8n2qqhmuBzVaPcmhHvK8meRFCYoFmfFgaAfbmRvqH89dFaT9tPRisqJyEGHyFfo5c3Loq87ef9x7b3fGL7PRZ",
  "key30": "5m4sxqVT9JMsGKi64b9F8r7mL4rd5rAY1p2W6SwPpve6VcZ3isWEoQCkuqgH7LL3vnyjvZ4YEKsLtdBCi4PRJgyg",
  "key31": "LT8ivWuyjMWmrrt48Sc8SmZsoiQ4AnsibcNZu7VphtUu3eAtgxMYLKHjg7q3hyZuCmKmiFXpZpJG7G3WNetngAh",
  "key32": "3GPHFNd1kvsL9oyCEQrEz2d792pSKyqnvAdQbn53ExhGAUTvSkHU8jMnxzkBBZ7VAiLTckX4tLcGpADDAysVkWvs",
  "key33": "5zVkqCZqs4m9C8mMADUoapS21EXZ3xtW8SRY4pCuL9bnDNiPKQ8Kumkz3iZHLnCAkZqKYdNurVL4WU9QgmMqYebN",
  "key34": "2QwguJV3FH2f7gf1ciCews5kA7JDLDgvvTi5hn7Ff9jMJWF1JDfzNmjAo71WCA55k32pg3z4uYxeJVAE9CccDuxw",
  "key35": "EvrjwZ3YdFQbpSnx5rW9J2i9RARNes3ZpeNumKzZ4AhUuPKeMNEvBdvY4enq2ehPbrAwrLGrVeaKCz3wnYPnbAt"
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
