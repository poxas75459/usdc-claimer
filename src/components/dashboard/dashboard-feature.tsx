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
    "67bP5SRPHByACGDaXhqcEtwsU3nz6phUym1YgUdVRAGjDFXYDqH9iDj53G8XpdUd3XjHh9SehwFizQGWVR8Gue4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wg2hCyoCuC5tKtAb1wKpWg2gjx9zJSdoCc7xYjs5qvCHLNEPhpbtzDUmB11rdL8qJP5FZqtdDyotpPguExxyvqM",
  "key1": "2ZKZRi57wxxjRzLmdqstk8wj5ibxqN4SZ2S81dZmorZ4Vbi2bWaC2A3kTBcDMpEiSomEF5vU3TB7bQ7megn2XeYy",
  "key2": "2T22tsUD8zdqw8vEWrqJZeRK9v7vLYc2edB62wtAggqSoDjja5aceCqjcZ2ydTzPxdhZHrH5DTCSXuaw8sCnwsVa",
  "key3": "eNEVa1XEjEipZ5vGAA5THKSqJer8JTAZ2BoFyaimMwRB62mBygvh4eutQ6ZT78DG17SVnE9LRTb96Jqe8Uxsvgw",
  "key4": "2pm23K9toUVqVGNnH6o73j8BZncvK2sqzAcEayhQcMBmVJjMkWiZDez7i1gvbweWVMT7SXqzTo8uATCUtCnuhjJT",
  "key5": "5Qvccp4KqGhfAgMjUBvxQr4cL87X6LtLguyTG9uTLVS4J2T1AJykaUkCwvdz87bN8DkWhUHF4UqyJ1kUvhGnSSJ7",
  "key6": "5ttjckb3mFw4GgWaQB1ZU4fVzrQtRc2scz2trR3UhEmpE8zRncn6N77Di9buVK4k9VGDMz9q3V7Eitnh293R4uuc",
  "key7": "5TGaG25iwE1Dr4R2vvfSUr2ffGN79QnUgvPbBYhmqnD5MJY9kVDfttxnLSAnA4rTSiwAkdt5CY1uj3sRckCLR7Nj",
  "key8": "4PUwVpiwGgbKcgd6kk5ProhszWAuFBtiQEszwHuCfKyycR5zDHp6CMXgqxrc9B4pgXDVAzdHwqdDiwxDSPCXWqsd",
  "key9": "3WNaRN3ZcjBFLHXTpbfAY4ogcnoR4Tsc8C8ZhVCfBtzkvWi1h8STmsqqDvWS8SkoWXz5brkg3QQDBH2tkxKejaRb",
  "key10": "3RztoiYeT5xogMFfCTsNWfKAdUGmDbBawKbXYB2Q4ANiDWiqRYk5AT5dTm9zwwpqVGaWLroNZtKS5mAyPQZfzR5",
  "key11": "4kXjvfr5Fvt2nKuUrKr4GXsTjbcmLF7BL1Xbq6tyyFbYzcRiXYqrFWgwAiMLhpWozpqo9xte7bsWNVCXWnxJMHB8",
  "key12": "4tjyJW1AgfFG7pVbRLEgVHKD9g5aTGbGFZygEGpu5xvKLcigYz7eFjTGrzaT3TtQE22DYBkFPGUgEJ1LxhLYfvCn",
  "key13": "xHHTY4CRmyhfBJkHcYhHbbqQyeXCcrQ2wVxZNWmPurzYnL88BhQYdUxeV6cjMaa1U58PPtFrXYtAJ5SsVcm5bJb",
  "key14": "4F4rGuyuAAQ82waRivWTKsZfLyvNCmArbrHAaXrQw2LSAPveGag2Kb8CuHZ8zFoKvsLeqmmFUW37QBBV4sYNc91e",
  "key15": "4D9dKo41P4KWGk5HJYkukvNBpafNaREFJcctHZDe8iz9f6rMfVWUWoemrq5xktE7cy4GsShFq9D2zqcgXm2gfrCk",
  "key16": "72V1LAhjHuLM7s6wizmrKcnLupLXpi31kESjsBKhfGDjjwvh2hsgBpBn4SELPNQXjNTuMUJGF3yvDYcbfsf5auU",
  "key17": "2dMCfq6XbKbcfMQyhCHRhNSkusXVCMvopUEMrQqe7rsAbfTVZqkYM6vpLwT6fb9X4NhBLGBXWCmm1oBdSPvPWfuF",
  "key18": "4yXNHvn36dEkmZWf3dXn7CU9znxYbrUpNSc97PeLcNRp1Wvxw7eZHAcnRtEZT8fJ29iUZJVBcAS7VFGceJybDypw",
  "key19": "5MhTU61eR6novUabbWteXUbXxDtN1K4jo3NzvQUYEqedZbgad7DgicFjg5FgXVL9qqk1x4YKQ4mdpzzJmFiB7KhV",
  "key20": "2iG55oSPmnJSSADR9FVHcZmi6ye6R7o2mQXWpFz1H5DdcCSS2giLRr45kxU4Kd9dEjnooHRAKQiEFAe3MaWPFqY5",
  "key21": "28EnzN7AuwLNbLNPatrr56b5Z19AbXFtfx21GAahancLsVk3YUxRrNxtWRKHddztfQ3y3VvbukWvwHfqc2EZh81z",
  "key22": "5xj2Z9fMU6i7JTEV18nmsrS7TnjPK3mmRnpjqER9QsKLdBuq2TSWBTGyhXKUgUwXT1HPkKPcQ8zCZWXk1zV57X9w",
  "key23": "3mfCwqYNe6gMBfpA5DdMj4H5Hx4FetZqXjBNUuPUDJ1G4o27kw5GnRxUnUCbdv3fifi4QCqjazUDK581n9WZnQgU",
  "key24": "5z7RXmmoEPHKLE47HA1RX7eXTKjbm1WNSJR7aZX5E9BeWrNcaeFR2ewrcjJoDZNZKTKhuwzc3vdm8xDt3u87LExU",
  "key25": "4gKKeT5SmBFq39LzDXfNxGigUUrW5MPe9KyqJqqy8VcJweQxTP4BEw6QsZoNtziV7PHSv4GLqVT9ap8nUo1XRUtL",
  "key26": "4jfLd3QLWxAPEXmyVwa4RhuzDpa1dcqaHo6b3G35DoAeT2qwthKoYXYF9HddwfR8AHyWdqgQLSV3msAKYmkH2iX3"
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
