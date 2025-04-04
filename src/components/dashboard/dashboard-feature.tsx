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
    "516yjakqciTS4ZkhxHrc7TP6qnHi26YjvyJatRgnr6wWM9CuKpE5msD68FiGVwXkUiVskzcFMhjwmQDYSBdZqX4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBSubB6XsmeZkSwjuosEeawunRWifQdfd62MEhjtbR81ZftvBHPdHmgySgT51VEFQkNWS5LycvmZKp4iHemHJya",
  "key1": "3XppyN5GkBX3nPNiqUfKYvQc7KTpmJ39W8CQJ6muTstZqHCm3hhPgCwCC4s5N833ZW84Pgemgu55fBYzKXwMMEr4",
  "key2": "2xVC7vbM32X6rDH2H1sAnGENz9bNDkBHc7usc1KhS92ZLx5WkGCBNTNUNdAEedUkebszhXGXVTzjeRiqpjPSK13c",
  "key3": "5Mh1ACR6xJfT2dhWKSFeSmVctpURhTyWARtTgPiB4EVzxYabxWjYUEC6Eaquczw9W8pJbayb5QwTxx6ykkQKjUpy",
  "key4": "4Ue86JqMteSptNLQe2UsiReCm8NtjMr88XqKWLv5SsmMgMBWuhXKMAJBxSuMjt1YmQhGzVLqgeKBJ2yPSRGvZ6cH",
  "key5": "2wkLfUfPrTQ4KErZASY7q5jPNUyYuMmhrsfH1cwk4kcetCAfVentXWrZFhPizKMv7xw351wRySsjHz76HWXB5VRC",
  "key6": "5DxzhnqcKzLHTXvBrdPXcdtXWk5yM4hPkA72aNzFstvyEzTtu3KiZ95KevqGW3GthrucSNRfen2qcyYe2zNyA1vm",
  "key7": "28G7kZgpcJrbhmWSYirNZ3ous3pfvamrow8wxeuii4yFRmfxByAR8mPrZKSN34WZVSuSqzZu6dtfZi7d2cusjiCP",
  "key8": "336XD86ibMZvqh9vr52QDsRYc1p1oipCSpQ4Kn6KcMWfJtVs76dXrAk8qDvREVDQCNcx6oEJ7kNJ5ZQQS1rQQLZr",
  "key9": "4Cn3oiVLCpY6ZizwavMNFn1JUn7JJdtXoVjqGm4mi3NM5KuehPMhbGtZjfPs51QwchvyFFbezfeN3MNGAQJYNNBY",
  "key10": "36KxyBxaHdEQtUuNXkZ6rgwq6pfgw6e9ZxHBLLKpJrnAvorzX5PWiNmN6RT6w414YQUeqTrL5BQfvKyrK1yvE4VH",
  "key11": "4o8Hvps5DSgMeiT6Dr18g4QHMGQSZhGX2SFWGRwTtARx7pUpikp4od3kCVLNMjmH6eVqWuq653WTHVrEbjfxFGwg",
  "key12": "3eYxQocKUpwGSuNyamfbamJdNMdzK2RAY3AbhG5bGFWks5HSuVNfAomHDUSKLnVjSgyModAeZAoBZ2d825Eh2byE",
  "key13": "64GLf76PqQxSPhmUiXraKRGGTYb7FPu92YTX5EWWmF8YxD2w41kdtmjqCLu9fQ4eS2UWM6PfA5M1gj7mAVLShxpJ",
  "key14": "vDuSTVArCzKsnR3PyLVDUpwE9oXicbYxgaBFAq6SnS7sdEnuVFwM6QCDrbZDKriz6c8UcuHHJw4FX9yrr72btCA",
  "key15": "2LSEVeRj9Hm8CZiLzsdqYxTk2G2tCGXSyaabNJ8QA248eLELmPGWQB6ySRYH9cmLLxTePBMvrCaMeU55wxMpn1Xb",
  "key16": "5zhj33aaS3oRTsFato6B2v2KE2skJnyFoxT7WaNys3pqaZQCpqwdHZtJXMFpnWXxeKyY4SzsMHEZMHejExUx9vKz",
  "key17": "TvgkWPvk2zx18QbyBaQGjwYsEKuFYwJ3vyJfJTeesATTdsgFgbJFHfug849ouLXykoVpkpxHaKyGtGLvWQf2ChD",
  "key18": "3GzN7SR6H2urHPMyh9nnQ9dZZ8pNzkUvEMRj3BF5F98VUnCLVxbyeebempmyoaQUTCvcZLdJbbGxR1iiejTPdnNi",
  "key19": "HaGvJikGe2dS6V39b3WhrowFCyDnuQXcjJYXhn4CEDum1dyEuCrwhQDiqe4BfbRzgxUvxy8i1GDb9ZwoBeLfmaS",
  "key20": "r7Ppj58xtGNoP1JEHsvTVBtMaGPGmsXxh9d344YnYsYGxLHDMhXoxG2uZRxFpSPc5KkS2saqKHm2ixgnWi7hPv1",
  "key21": "2YDRkXBVcrrQ2eaUQQRd4K5bKZ8deKMwvQ9d7fjNQnmdKsPfZtRGqp7bdabbQgrqunGLkXvQhqGr71SmWdv4Fcrk",
  "key22": "2AnDCRyTEnHwFBYZ1xPTJVKay38aDUfXVWSFgbkJKAE8eVhAs2U95Cv6Bx1iAxbQTHM6aR9dnVHZfBJ21mkn3Ns8",
  "key23": "46AxuPxpAoB9CKX9E6f9U9wEwsEHxPrZPeLAey2JXCnqpNArZnJnursaCR1fUQfJ2WfUQs5PzapsLSkEXHKnWFd",
  "key24": "3zoFSvxD4etf8xyUUqMkcKqU4gXdpBqF2m1Ptvxbi4SHMMWxGM26kUFNhjD9VftyzGtH6N9pSmnA7kwdUdBXi7iL"
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
