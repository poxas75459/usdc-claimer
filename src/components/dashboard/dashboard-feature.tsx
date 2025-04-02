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
    "2ZKZRn3Ye38o5e3jQkj84D2sZ5pFomvEaVeHKdA8tCfBwPFW2Gu98RZ4vWrk6csBef5y13BZ9TnX285rf2oPGqrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2huEbbG3pzAMtL2me5wLnodCJQmLQArAX22CSsMR365TXuQ8U7DaQZLTvWxb5r9NZsJbPaNPMM8cQMMQFYazYfJu",
  "key1": "3XSA6g9GrLQ4qKJj98k8gHtQ1qJ3BhkTVz6VyS7u1rfemv8yXjE3SW9ys5sGfyAvWeuzuCgSKJ4hDovnZ4XEvCUw",
  "key2": "4gQKSne73ADYye6CWXwBJkCLQDdfSB68bCLSBmFN2BQCZjDsW3m7vykdwrmz8AJwf2TfNBr56AaoMYGseC2CvYGV",
  "key3": "3zEqC5VL56tuaq4yqZECBNLrF3iMCvtfo8jG96MgemVTjWL2LXG93M8VpSBPuE5wcGw6oYPw1C3yjxkxT4jt1rPm",
  "key4": "nc9eNkKo7WzY89eyW72xN5TkRrbWJxhSXFffjrGaiPKiikoxurZeNnqaB98PyhjijTnnyKabUFxdAP2VSj61gN1",
  "key5": "3EVXm2V4uda9aBriHqUyQuUWc8XJrPHABNv5SrBnrcKwg5AwojeE3vKbTsffbuSNzWN5S77kwiTFW7bBWP5gDFC2",
  "key6": "2pbtm6hQ6mXnTGgC4eeWqYJFQf3pu91zQzViSwvW96Xk6xeyTgMtMCYLKvcdsxkGcfv1NdBaBCh8EYc3xLrse9JV",
  "key7": "2aTtgJBdWcRg1ag8wz8NsX8sJBkG6zxsu2bkpkz1McdxDkwkMaXtG9o22tCBPE6mEDoY4D5AQX4MTZhCQ1xWN9UQ",
  "key8": "4nvpse6iJBowtFChJDfUZKNUNxpB27k34qfScSBnVJKGEgPL35cecgFc7eVvgZPdiBPsSS1Qu7uxXUkRCrwFqpfY",
  "key9": "2UTu5eLD6m81iZDTi8wh56GMv16FwVfGnKVArxHkZYUFWsFC2SU6kLFaqNntYoZeupJTFDdes4Y2GydAKDPvBeH5",
  "key10": "4wTfaewU1tEHb1phGDzDGsT5sopNvMeqdPNBMCJ4xC6uWFGKzYVut4GT8HcHBdkcsjvWgr9uUpWRkF5nA62nrz7E",
  "key11": "drDuUBBQjmvmP5outduCVGxHsCWSB3ZLwGPCzVFdmoY3TYwu2AGHxGwkgeux6DKz5kx4xVex8NqP9QDrXp17H7B",
  "key12": "5kRQr3tarbrCgbhMdzVLMxeLPTWuqGxQHXzwyrnAdjC2NzBYAwR1ZfmvVHEAuGvKw8heYtgQvzrmD62ZxVw4ecxG",
  "key13": "5fLBrurzBNwzSgmDtyCp2DQ549szmB3MUm5ifzLrzHDMub2G6jFEHNgVpbTXPXG7qH6JutxUxajNvsjBwYCxFSbR",
  "key14": "YkBj5uCp3mssJWfGMUh7zGW7N4ZaFEZKSHr9ttVr4sDmgCAWxDvWgkNZsiF4fyTMhRkmJuWwbJZhqut1vYPhDmN",
  "key15": "4WP12AJRwXekyJcfR4RQDscg8HTJhYRx9oN15ReUZTFr8QTuuVWbESjx3SUsVwjyU4HWyHcnZ78UAZWRe7C5yP4B",
  "key16": "5fU7BGtaRjaWr7P3pCCZ7Hz6vwjAJF56Vn9NRpuwL8jDGPtPM6HgaGiEUgeAFrZJnvXHfhgqGzJdVa49rKRefqHz",
  "key17": "5AsKasYiM5kPAHtwYyyTYJ6QVMCMdjHrsP4U6jAC9n9t7gmY4KfsCzemMLf48U1fsHBK24779a6oPL9EM24kGh5L",
  "key18": "27jPSjhhAJBHdZu8u37rcQS2ibRexDQ18A8Jsq4SLSwJoo2BEDcXBZFGs7VvPnhan5Tbpk2RvBQUDJ8HbTLdByfN",
  "key19": "63kX284s2evVNmY8ZaXKcJZqmkFyVLRtSiMKJMj6h3qLnHXHZpFYWTgwm96oDpPPbnuYLX7NdpNujUATTJDytG8H",
  "key20": "4sAxnzc5WFLzku4m5vUH1eRHxZhZiR6yHHMyciL3fNMyKC1GmYxK1Jv4Ht9jrcKKkA3PS78yDnwXzjHXjYtZFXZ9",
  "key21": "3ZRtJEaviHTqmAnAoVGFyPQ6eQAJpdeMKnMvJxxX4MSjvDigtbtUeoMRyybbrKNZZhQyK5JbN8FAuoPNSGjAEBKb",
  "key22": "3deEZUs3nuUjzaRy4Ur98BYAuh3v8cZgLpmW3gwLJ93raHjf7BMn7d2anrJKYVQtYJpq13JKBCkeuDZiPLhZFUnF",
  "key23": "4GR9TCgvkZAuaKwiVfLBynXvpreShdwZCpvcB9KrHzf2kyn4UWx6fM3ULoe3R8zcSDif9Vwaj34bwdbb4TTtE2Qw",
  "key24": "4VVfo39hXucCreasKBUWDifdNAG5n5BCcBWXMgCZNAKNm2GRTWRR29KJeENnBhnz6jHSRFjHEKMnL4fiL5LWUcXX",
  "key25": "MsQ3E7EpycZc25PFS2m6xTVg7X8GTL2tBZ38DQGMpuijMn7LRWKisHFDy554BqxUV3f84xJngf5aiDrFKY3NZyw",
  "key26": "RqruyTB2AAdRgxGCn1vukxrYpE9yVeh9A4mhGBmRufsM9VXWSDoDS13AfKYEgn8R9qDYrBH6v2G342GAotN3oAa",
  "key27": "2EBqGSMLoCbHJRwZyKigk6xvfuBXcY8EaABBQkm3aEDKnKvyEAfvQa8dgn25cjcWLfh8n8Zr8yJpU6im848G8PjV",
  "key28": "3LiJLYL67WnyebySrWVC82sut3Mtw92MxfS4XxA819MMkSNUDFcAZ3mDrezyb5XWokZeXetTLodnLqKW5DHwHwH7"
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
