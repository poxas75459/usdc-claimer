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
    "24zxiemueTa8iN5N352iJ5FBHbJEocdXckKkE4aEiLHo4iJPho9Zxkj5oYF4zhVtbkhJuCpPx3Zi1uM8mHsMzxX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ANKftdMMy3ZMrqnsqz8UX7H3NioGsVLft657EUHCYbc3ULAA8UHkjxRJQ4eVHhfXvKDnC2EnMj9a8ptzDyhc5N",
  "key1": "zoJVuX3kTMA7tSKhDzpbM85AP3Hrz7v2uEUgWwUQFrwmpi5gGYYkEEpbrBzgVQRpqVoNDvG2nTTWkJZCHmRtX4v",
  "key2": "2tjcs5kmZR8xadwbcthzUoKtVUkiRyzBjH9HtnYsp6PZEDLaLtzFEX2nZqaYMGQKZxDopkGASSMu4qAEJ748LvpG",
  "key3": "JzBScae4PCB1o1qiXyjSPezb4Uapg8HsQBLiVQXMe4cAP7tnSpx6sTKZRyxe4XMSZ1K3t6bEMwZVfLs2XxXEWKk",
  "key4": "3S3PykjkfNy52naavKk4FvTeKgMSKeVm9eRgTcmgF8JmuHtjB8eNiH9CH3WkexaSifZo5KGcEzbC4DYwgMCdQjDr",
  "key5": "3CBUKKSb9SjRLQkEf5yhD9rgm2MszoHdiQbwZVZbZrvvk55yVxdigvXHJuf8XXsEVmQz1yFwftZTd4MfocrGRQcN",
  "key6": "3X5QYHuFMQrYgcXBo9VgM6HQuN231esZU4j81eb2koCtd5vpZwPworUoGtvfUS9UuwXC22jUStsW73WLRsrDZwmE",
  "key7": "3Az6xvDuZDh1mqgavNxrthjWnzMRLoGt1bkD5dDypsMcSGLXRWNZmSsN3aJf9K236jD6QeTvKTaYThDNE3Z6LtDs",
  "key8": "qLEVePhJ3o5hqSvH8KRLdGPBRS3RTmqyBjBgAMM7dtgLBHT1dDSjDQ7HFC2unc68LNFpZAXMMi6jioBZAxNgSpc",
  "key9": "52j4geaRbW5DwzYXL2es3KWysassbK3N1W2R8XbJuQi8xSeoiPHnbtXKVXDTe8mPrQiF76GeTspevffuvJ96rURQ",
  "key10": "pCTPqBJxjJPi2TTpuA4E2MB8NkXeaJAiou8P2yYvmJLKpW7nBVt2KGnNE66BiUvJbek4uGdYCZ7VyBqa8M3NGM4",
  "key11": "2B3aZspowe3ohH87aGkdzAD3BHEdqtnJ2DAvU61Wukkb8bcigPVJodqyGaF7utYuAzssCPX4keAL7R9BfQv8YJRA",
  "key12": "4EnNjHvcH7dDMqCcBuhVWgEeGhGXyfmwUAEznB5pjSBFANtwbXLPVV9ffki8Webz4h9y9j4eVgVaaQ9xH4KH8qAM",
  "key13": "5oaXQuUWSBxkcFj1YgA4CTrzTmWwr3LMwYAQm2qkWELbQAUfntCLm2iPC1EhHd3R2axr7gRbePbPsjJShkDqDN7s",
  "key14": "5iVGuDYJXfP6k2BtUZChCarPKQ14MAuEYwPGfWywC6Kw62GQPMb8rPzn43jWnqHGW8cK6shcLodhiRZ77dEViRek",
  "key15": "2gfn11ZZJ9PU8ZBam7tQfuSCCq9SA9WSvd5R9N6a8HN4trzVaeQGTMZz465rRZcM8ChW1QHVyW5yzLez5WCB8tsU",
  "key16": "5pwTcdNthNNku4doEorfo6uWtHTe2gwJyAotPpJQy7jSq8y5w7LdKiMRfkxWCBQ5gvUnZ76gTSLLsXiV6azkJ8vW",
  "key17": "636DiVA637PSZxbA2oq7vA7bQxZ2i4BMCorVGWsRoKw8fMf8EtLVw8B3cgXyy8q4JAXoDYsZRSKjAUxiFkoEz5aU",
  "key18": "2JoJpG8oLdpoZNHrxaUZbn5ajfsqiMDq6rVRCs9cm1CH8yQxcoHjrmqu4By5BnbLgQfUCMbqTtm91CJ4vZNENkgX",
  "key19": "3UnpQrJPhhnmNhB2V3H198k4wDFdF7eYCUr21rEGD1gadwT6ATvZjuUMAK2dPc5MEUuYfEtQRFG4EXpmd35WwoWi",
  "key20": "4mPPSXdHxr7ejip9VxmMfgdpX1hkZzgjuFRbwvB3rSujwEurgHRhTwAQXCZMpYwRjnRMMrsZSYhTuPA3SF3Aa3NH",
  "key21": "3CuKEePHJRvrkNQAcxPAhTEZ3reAZbBhQYezi5yVFTSBayFSj9gF8Wwa5oRoM2c4c3aGC5CNupspdkZUZ7ZDuA2Q",
  "key22": "5d4mCqaJffg5Dz8APSMFoiCVfhpHyenWhTn1Eh9UzR7HCa6HcSUWKnKigPfQJm1zcdZrxLERE4doYrFHFApAao4s",
  "key23": "WTaBriizQjCUPozba3QPksuLy2SJD8RaKbe4xqjk1CQ47Fza5k3HB95Kvh967H2kBqdZcCwKUkULb1efqipYJ8m",
  "key24": "2cp93Mkuqihsy5DuNC2tRr5XTVNXvmsNae2TwWKikCDNY9jgaYtJJVroPoxcYycjCggNnwxj6UiDmKsJYx1jU1bx",
  "key25": "7WkGKnRJ54ihtwLeNWgVDvAwbDdMZA3DTf8wzM6pzNRRVu16DEuASr81Gx6aWV15WHz6zk8qfbCx5AttYFkVEx6",
  "key26": "3ZQgAGXJ7TwEB2EFkZh72qL8mEqAR8Gf2KkwKqfDMTzDYQnxSeo6sJ8mw3wbzaG2tDZoqnxW6Hpmtg4uuUS3W1DK",
  "key27": "6383dF9hnnPNWbE5iBYVHuvdxZzSogatfidJoMfUGGzpPzov4rCKBn9da4wajBPTYJTpHeXKeDFV9Xxmo9bASWRM",
  "key28": "2X3c2creJmSzKXxdZ9iBDx5oU7MRtuoEmzn9cK5frg5d8s2saeS3ZLZPR9peB2ysWdjTjmwAxhVn9Kh9MbMyCJgL",
  "key29": "2guCV4yvJxC69b8xuWpzprabP8d7Nze327qgvr5APEfpYjqpuwKJE91Ja4S71wqUeQjckRheK8LGY3bP6B17B4tW",
  "key30": "2mfs5HW1hA4SCeFEdgsGwvBFEvd9pCgzbfbHnd6EUBREVeXo976aBLdNAf3mrgeZogo1JUFwkUeiuZ6VYxYgD3Qc",
  "key31": "S7c9gqnHrE5Z2joYoFDhq47j1htoKiBqp4xZ2c8ogPaK5X7aSzbWcq4Dkx7LUQW9onYHPQrko51kbhoxNBhpLhy",
  "key32": "YgHsZCiuzqYFUppGVAWBCJEiYd1RGmhNPeATQEX5j6XTJn3Tfg9mqAQwRsqkBeC618whvvBXGCsuSpgg2TW7Vmt",
  "key33": "36LWqme7oi7ZKYadnoq4j8QrZNYPCsBWoZ9BtcG4NGjQ5x7NVf2gzjnMHnLHF64t5Q5g8563jEnsTyEtJtoGGbDk",
  "key34": "2aNkTTJxfAGETef3EMD9ijdEma7M1YD186z69yTq91QVDhZEhujcUHeipd6VvNYBYQGxkAMFxzyT3TxmK6L1XNYs",
  "key35": "2fef9T3VvuAczVdFyxjNYdqrKJDrN1f8H2yJW1Q4CjBeK89oASqZQYeyQHnKvzaeyqguhtic2pyNPDRjPLSGUzdY",
  "key36": "4JvL67sSPfK5hgLrRfUrsswaDZgt6kKak8e8EtQzhurXsw59MknsxcoEGkXR4LQKY2sBt6ji4ti6ZPxasjaQCYKN",
  "key37": "4qjxCVXz4yXv4oBcXY8aLDGM1xNm5pjYRtd1iECrnxYyMTCqTwi2LHTzxtp8MHHP2GtPp4UjJVJQnfZ5kikcewYj",
  "key38": "5Htsy6qwZskauxNNsUoBgRngSZD3TXU99cy6WvF6iyV2BZhoh37WoLKJyfsm99p88vcdMoz8B3bnoaQbNDJy9KaE",
  "key39": "2Bv2iT86EcVYE7PmbceSy89v8LzDq6SmEUM5gGahBfc33iAB5VT8hcByR3pZmQVn3Ei76dQhKS1rkuz63ycTntpg",
  "key40": "5Th6DNmnHcM7SZuicQYttVrXZq7ALGTGUfrFXx5mzpPH4Uzbv5TLcBzm1C6YJXohfJfTNWGoZNpuZdSCe2NxM3pE"
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
