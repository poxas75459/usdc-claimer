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
    "2TzQczhTbVcTfSyPnnNW7BehT1go8He35whY4mAaFGPv36YcFG6dKV82dj3XzuQxroodco8qGYUjtbmH1GE5u4Tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtpKTG6gfGpcGzaPDGKB9TF5rxw72Nmzk9n7WNBg9X1FG9mzyZ44E9JUkb5hWw8U15cdtzuEFtragPay62QcnVM",
  "key1": "5v71DVpw6SUVcfMYswj59iYkVLPAgmYzZCMaDnhkpXTHAUmVBkaJ9KaZLLMKJoMPkAPMEVPFUuUTGx481SFFwSm",
  "key2": "2M2pCYVKXMGADbc9krCq2zZg5ZoFfWGTECj8Y8pfVm622nZ2DPAjEwwKMopwaDy3WakT1DZG1boYVsE4pnCnmsAJ",
  "key3": "2U374AwCuw9dFTNuW2fnGh3FbgCeDMfwEo67jL31JUzEhaoTC8TxZWmmtAKvK7T7MYcvw48QYsDarAMnLeSDqUpu",
  "key4": "5GqMykEbkWBoihX7F2Fq4mSE5SgJSKHpDA5V821WxAdFVdYHZodi5svL5Q1uMTq1oc913kXHi4icbVtHhAJMVttZ",
  "key5": "5T3R7au2nvqZmRXHUHx7NqEADpvR7hxisQTL5UPV8VTW3AG4bt51hFEyWnFuQfVZsUbHM7sGA5UQU8vHLoMHjriA",
  "key6": "5AbGfs4q6DbzZxazVEBDarjZGQMSgJoGE6uvR7kBQgGrsSYXadn1ABX7rwRzprHekrZmVjQb74EVu2tHeuEgxyGJ",
  "key7": "23MK8fcVES5oKME4dmrdH9vsqmD8AoiDjZCLtNAb8StWGSxxvEW12pVFRUcCQ8s1UwUfRqvGmXL4EMdBXXQfA9UB",
  "key8": "4B4hGyzZmeorTvgHYFPDUKn6GeVpGQSX3PwCRAPXW3EFNwE7ovCncCzyHe6urenZrFWRNJryohbEYnM86BKnoSHc",
  "key9": "3pD1FEQDcCAR5NL8byp2MCR5GER2wjeyFBaByeEKtfPfQP91ZKirMuqHKAib4RRrBY9sJRUmAoQ2XRgDJHsBHQpw",
  "key10": "5QavpViQpmnpkfFNcVNEkKJvN47Uuw8pmWJsPETV9AjXgMcdn1oBXFFN1xP4QHRbeWa9UfGb62NzhmQ578nfnp7H",
  "key11": "5TnEAsC4tJUpTyamYfrkTttWXSUaeLjGA7VtH1wKA5MPUkw2d6LMoar3DvSpFuGTH8D6UbGjcGm79bQhy68rdT1F",
  "key12": "2Cqjrn8AJpz1gf5AAjPyXoyGaxpMAqT1YK52mPibEv1Lqe2PZzm7JtvHPKHMUig9nA69YDfLy3H19sEujir1p5BS",
  "key13": "gSqQCxeCGo69PNTcHshE5psv1McgXATQwTSv6rm9wa3Vkj5vx5oAmsBTPUV2ZdtoiPG5r5CwsDUz9SvQbGwJKca",
  "key14": "5hvRsSc92hhsJCciFK9wqB2Zxk7GQEGAuVNiStXjpTsoxe8UTRLch7BLp3rBYPYpmRzGcgRRZF6rucpLJXynkLi8",
  "key15": "2HZuVLLaEF2Jps4pP32JZJq5LqDP44o2kanZG1LMcNP4f9mfXZGp7t1dcBhH9WDU8fSUjxezipXK7K6SMC6tWX8",
  "key16": "2WZae4yMATLUJYDj1ErBYT36YAYUPnsBCmAMgmj983YwuSQ6THzjyhMmi3PRrmzDzGGefYmM3hQms3x4DBqrQ6a4",
  "key17": "YEzFbuc94fhrr4TxxzeCpMMrX5xn6XuV6uxskoULB9CcGBkGoEqzkpArA1zChZLVjiT6B9v5Ph4oKrxnt4Fui4j",
  "key18": "2FqaSnmFwKDhsxfKqNGoJbV89WNhMXXEJvV6bJRVXJq3ak3KmoYftoqR5kWh13gQYTp5gRoeKrLoEWk2E2L6V1u7",
  "key19": "wyBXgwyR6guF7dpW6kJJXr26MJPCZDfno9F5dwJ92FSdwz736nQECginntnLt7RTazvH6zoQqRLmRBtssgzPWYy",
  "key20": "qcPVWi6a8LpTXUZGodCtsiJWtFJygAp4Q6HNRJSMbmwv5ZHambbMu73WKDsVaUa2btDS17929LQNcMhJ9JY6uaS",
  "key21": "HMpGFqrvihp1QcePHkdzm2ADDGK7R3uBCJJP4tEnbmAFDf1N3QVG3Ehye4RxvLBnuSc4B9pAwYxUeDCJrZC1cwP",
  "key22": "XQezXqCpXUoWV85nqsGUd4SkFnayBbLFYBDDdrEpYhTe55VbCGTbxCtKvHE5yELqZXhDi885FQFJeqmwW6QDWHA",
  "key23": "4o9UsGhCBG5f8ae9TgoiBKc4KkMeyRqsKcNHfcep3wXSZ6gDj6XNb7A7x6zwWwVK8qBAEkm4Yde6gNuzKRn6wYCp",
  "key24": "2cXPw6PGqGdBXAySC3KRjeqLDC1jZBaWhf4ybx9hWoahUSwFy4MKoNysasjxyZmYUokGJG6Bi1sRYCPPpfcw7gU6",
  "key25": "2B2jrn1JGujC23HDDF1sJPexdYNBqTAFdmsbuW12PGYVRDgeKuEFoZdkQBmfKiJBeMZXvQLgARz6T1NQZyk7ezNw",
  "key26": "vierGNmD4NGDVbSfzj5qgXB6fMypxE3RVpZUgvvjzmimjprj8s9wGMGQGP3Rd6kC1xUHi5Quf2Z7Wi16H7aZjbh",
  "key27": "qMxQkwxSjhpZdZh3dyKBx7Aj9u1aZFdNw4i8h2hx1ajEain3SU8YYbe5Cnwdx3RYEmTp72puh8SvKK3gHowqaWT",
  "key28": "5CWTZ2tTsCesia7ictTuo9szLWG83yUtjecB5cKjLCWs5tDocg6vuBuQS2tJRBNUcRFTrZTVKKEyNN1yUDHxeLNZ",
  "key29": "2u7Z2SnZCzz9RNZnoc2dhcu7c3RyeUMJZebUuSxnza2YtHdKjbEhX9p9gqkgvLMxRedMtw7wbN85VkCWKdpvqCwR",
  "key30": "548uchbKxgL1zfwcmcGKX31aBfuU9C6B1ezmUndS8xjBfqhhCDZ7iKewZFhKxwdBrKmjQBPkPkbNU4aGCYbr11P6",
  "key31": "2o94be28BqoWsDUK8BWATvdygQPu88hjmfy3LTzshYg5EzKF6y8yxdBZHmjkHnfjyhRwSNbSi1MspnvptHJeHeqz",
  "key32": "eCaFHbJtV9MxLBMc3Fb8GiQQJrvgnmBztQCx4nWWTHcQcsYMuaqffUiZEbymJgz6bXyEYJKAmvHAL5zsTQAncjH",
  "key33": "3K8zBFx9kVhbmFHC42pi12sA2UTa34autXEv9ZnEBPcsKY7njMzth3wuDUZguHEFvRgY4sfmFURtpxDvJNtHkWdy",
  "key34": "4SUdBzc4bZPHsUN4LCPTGCmkZKXGfaG2faxqrwdKCHkEz9vE25arNWZfrLLeRVS3mnLEvhD8ZJAbcioen8AN44Lf",
  "key35": "jjztDbX4HGrMjzKV41kjPDsByQbTjGYsTQANPYomAxZZZ2a2JoTsRJYag3tp3WD6LipSWVD5wPsybjyUtsw57SW",
  "key36": "2XGn2FyFYxTkZRsuRXahRetXyPAS9fiZeBVsf4ARpGf3CdD2DX3YigSqq5VYMN7QBApKaneNCZWx6rMi3JJPJeM4"
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
