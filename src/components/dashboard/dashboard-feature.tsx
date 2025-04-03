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
    "D6sAx2bUiGfZsWGkB7kxNmtdswNx34QmFoWAWhDhHBbREQ1EixYBwy99kx7RsDpFiiM7bJ6cLZMFaJrSsidjutP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XghDmmA2njxtqev6EA4Yi6QDMioYPNctm7x4THRSczqzeQvqf9PgQcT6u4p7KL565a4JFbnNHX5w7o3BYbV7q3z",
  "key1": "32bhn3ewCYZdeZStVHtFXzbSAup1RPZ7srBDPumHp358DD4njxsTC3Xvu4iC2XVS1vanzjUyfxAmbUCQzYnNaVeG",
  "key2": "3xNPSz3nEKpxnkukZsVHaJnjZikwCMdSPVu6t9qBRnBFG6gooupAmVFK3ucBPwL6vG6CnXn1gbVPTkxju8B5pX1E",
  "key3": "5kwghmDWpqeUQ49TsgsrBc2fyYRRmJEnhM6Gu7Y3ReCGhgG8DiwFSUF5DBczhj8NKMY1FwPLKq2rP92zfD1tK5eT",
  "key4": "4Y4oCWNyP1WiHQzDLUMHV5FBP8MNZvH5muqpSjxbcjj1JYXH8dyCXehnA26LdFmW82TGxB8uK8hRomjnMDiuuAMq",
  "key5": "5croz2a7B14BoXWZ2RrhPme8gL83WZeEDJbE6uyQaTAXaVdQ2DKv46JBaz5xpf2yURoARfPs1iSqiYnbAeXKzRmA",
  "key6": "uAXheJi3QxmLFr8oTFSv6XR8TJZiY38aKWC5UAbhSHvbKEPtKTC9CkVcHuUMSSxsBphcbXght3hiuvAugckuUV9",
  "key7": "4iGQqvHmGSQ5DMUMRKYG7dG9SfqK2KrJGHCiftD9rYJ2GjkJFxF99Kh3idk24qujt8hQyMfVD8RTCRTD5JPedhSo",
  "key8": "4ahT9xHHbgMHhHsuSXzQdgJvobCnNJoFWrVtzY2WzWg6qEHgFSJmg1bW3SEaTF55jZbLMj2BoZs14eM6xFLrGo8j",
  "key9": "5AZTaoiZ8YBR6rRBi3kwACLkZtCjb8mwLHLqW95hvpssQvNPbXuQFekvM47XmNjGCg5PFTeTnNEdt7jD6KddmZcM",
  "key10": "558HjW2eFR2U2xN8SE6uBSwPVmuZ7VrejzVx5RKHRuacEs89WeiuNkF4D9YDEju5PFGWM13pDeQTY8T8ZjAEi9Xp",
  "key11": "5GPtSsvHdjMPyyif2xnmTxv4LXiC5qSXnRPgTvLsHcEv4NTikbhiHEoj46YVEcGRhoT6dbLFxqR128Hmu5nafGXS",
  "key12": "4UpvY25ZFv2DKd8oSghd1XPe1NUNjDHRt5tLkMovP9quqMW7v8uvXcSHdf12jtSWva4G7EsnpvMgAR54bVhm8nqR",
  "key13": "55NGmxFWAnoWXTqikCXErwjQZSVLYxFdxxVQ3nZ9V4j7hz6WzE4XGhxGZiPE5nJtuxbufaPdxgHSRTFFrPCwY4FF",
  "key14": "4jXNcqc2ZNZsx5BoNXniWRqdQFiaTTqoTWtLaQb4r9RDodxkRwXsVFeRgPcZsTfg1TK3utnsLkNkxPUhwTyfMKmx",
  "key15": "2Z8LsCT7wX3fz1YPrxTSJsYt9kSK9XMeKD2XK5L71Qd4msjXbEmoVHA56fZUbmufBLcwhh5R544V9tR88dXWPybn",
  "key16": "4K11BBjL61fN2woXTLMiN4js3EMNosVVD9otT9a4GBfXPZiaP6cPy4H52gJRwQnbJ1pbeDAXtd8LbjnHg6mDXE16",
  "key17": "2kajqdCevUYvWB5PbwN8eQ6PGzYLHDpRN5eoKdFphC3evkbid8wvUd235y8MTQDSggxAfPUvWqW8y8pv5Sd9xyRK",
  "key18": "2Jb5XjcbtFVfqmz93xfazgDgVokwBV3TbwARHfXYA2mUe8ZS1UqPN86ayL21UNza7PefQMBWn7Zuszg8QavnYzHq",
  "key19": "2sJPc2e4RUu772PSAP14KBAzb6WAFJG5GNKwaYfsnEWxvtNNkQB6PjtWDSb7RGnBkWXbh5Lqyh3R7mowk3FF5vYE",
  "key20": "5JfeHsp8fjCpWHQrjaaz1hNxU3B8UE7Qx5uAwcJ7moF569puCAfLLbCKxdmP4TP1BgifNBjQ6AkZhWgY8tdxhteb",
  "key21": "4ouFPSu1NwS2XGotmyprWcfkuv7oWarNQCNpKwQDRSSwFUTCsPnUWvzLknKUvTEG2iETuY73s3KM91WWXrLvBfee",
  "key22": "3akwB8yS98ZLikitV3TCsX7pN2yTrwxK3SMgCsTv58PKL1izEsTTaYsZk5i2kGmeNqgG9mRsW392cS8W37bsZd22",
  "key23": "4ttL4WuJAwa2L3chBGbLH7mMA8xjVJsu2zYNTzXbkExe8EJJC9WqR2BsBXYFABvZEKzedzdmWkpajpH9jamsU2r3",
  "key24": "5ygGmN4yAhc7poX5CiNiAXu6rGnwRLrYjV39CvWJaTnVRYqhzWZLC8esgNMu5jAaSxhexuPFviBokAAMtS8U5sSd",
  "key25": "3G6ifzxFwx1Witd5b9HxMWzMc4uHrz6QV9RZtiyjvezwBmigKpkn1CRVmbKzWceBDJmvK9btqj1PUHgSBJK8BAGk"
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
