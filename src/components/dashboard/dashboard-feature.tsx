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
    "56G3N4jSKhpEcBL5cfb1PeFwmvv1aBV9C9UTv93mg3H87WyiH9rUbMcuGRkWK8k1QNBUu88nNUR1PqN6iw2UMhWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfQz2M93BGCusfBZ14YUyWJaDCv5mRLTb2KnzUGepV687pTuYfq42gJ3BKpdpgj91319YRWGR6y7WoodZUJ4qWa",
  "key1": "k4nb2nSmPQXkBpJ9ZGjN2GAQMLgEVWSXoJMPU8yV1gcptpVQMcrytG4426SZb635rSLQY7Tv8XssmqwYbK7JYst",
  "key2": "32acQPaWQHUPXj6vC8bqvQjJ2PrEa3bVBMye6oips8qAVkVuSpVVgs1xDj1Ug3XcLJQgVERGavCoPW1VF2e7NjC2",
  "key3": "43hJ7h2Voek6msxWF75Tus76i8ZjZnHEqPNAWueCf8wUKukqtvo3PfRLYvHGm1KYRraufhe2j6qzdMELfNS9kaWL",
  "key4": "61WaGLh27bDjsuLiPUzP7LsCupdCyHFk4tAcCr9otmQWJy2RfffTAPEzs1HjhZcc5RjSiv5PJHaMzNKJv4uv44KD",
  "key5": "2n2fyjBozmxAsZmvgasmTvvm4c7AKrhVRLzavckPRfD5cjdmuCZBre4RwyY3CXLaZQv295nCj6my5Y1Jd3NUbHxp",
  "key6": "56CLwMPjNgMjqKZGvMJvfWKRENskMZvZBc9sehX5YYpV5rmc4NmH9JjZiUn2gvvsW6eMYhAhVPWhjWkrBemvSB6F",
  "key7": "3nZxd2JEA3CMzvmtfDJ78ekMMCUhXcjrV4XXGhaWMYBdDvbuajPoL6C8ksgPRu5M6GK6KqrD3pbs7pwNKgP1hnNM",
  "key8": "39hvw33igxhNyUEhLCGoairsguK8ox1mhPUmm3Jiz1hcu7WdP1oyzLUuaQQ39zdmLNE2yosNGoKPwcPr1NhJRaHJ",
  "key9": "3YPBSwUSWpjfkHjsviAzvdrvDgduRrJt5CuFyHvWDSBTzhRJQax9ZvsKrbuUzeY8FMVohYqEwHEq4jpuRPk7BzEY",
  "key10": "3EZViNtXdzJziXwHnyckGPPcbSyQ4S3t142Vkk1hn4hH8Kk8uZhgtFmgTTZzVGM71X1d2zEEjqXknohn7jgngjdK",
  "key11": "9WSdcv1TkdT7FonzevZPhXR9RyAHu3PDC2C65SYVm1FYGN6ogQpe6pp3hZvDrnt75bhU3kosuJqVVXxadzd7CTE",
  "key12": "3cQMxBZuo5iCiGx5ua7iB7TDJcwZqp9vZhbvrahe9XS9pHci4njY4v9nvvuYon64mvCq3WmU8s7LDzw2awtvGjR9",
  "key13": "4Edz3agtEqps4d85rx2XrgE6kMBp4L31GUWph271kDkV3UT8dABm1b32kwpUjJ2TdgTiYuR4AiTK1NjS6crumeBx",
  "key14": "2nyjijXSwpzpSKjT7VsntWg5FD7bQLy5PDNJJjUsRnccqLF3NtiGEPVHccDHYfE3MgQ6EiNdEK2492ihQq1t63yw",
  "key15": "24csmY8W4oBgRc94v56Te9vpXoARUj4rn6yPvHg66g9yQQdqDFR71SwFPLHSubT8oRgPkNScRWa1ynein9bRX385",
  "key16": "37c82cnbQLBd4SaneZEG4yncqTqwpj1rr117qSWXtt91AfQkBhgKjECtJgZ6xahUAV6tNGzdYdkXEGfPK2DVkAQT",
  "key17": "5uN6jLGFScgLK6kTXki5meTQnsZFJsEhfVSHJmURq6Y3oyBZW4FTTFSf9ifcMNcc4uuEEZE3DAXFBXsWS7HDN9eU",
  "key18": "2xm5NUwY6APnt1BLcomqSF8dGQwEae5Xuw1JZLnFh6FuexwWE7Yyr4YcP5Xy4sZRQTujuDWui6HYgz1AJu2Ts76x",
  "key19": "2kvY6Ltt4q3d8JuYSAMS922SuMBC62NBuv5Lz4WQmY1y2mP6p96ZevnmeKUw2PAFdQwcrq8sehC4o8RXb5TTY4VH",
  "key20": "3buBfzTSN4FuAYvZe6gGFvEe3uPmbTy4qPmoDk4uxc9RndTtei9SQVR4BkbEQvwjWchQUdhemUoaHXEMs11PyH9k",
  "key21": "2jxEio6PivKWMARFT7suYzoQAPV6DRQLUaqzyG8qGKbyjsPcXJv3E9CqMRJhhb7qAq5YR1qY8t4NkqAKEPAUG59x",
  "key22": "2Dua3Pb14zsJfmWEoYyjYqaR5pjF26FvuJjgr6SoSN2Lg2bG6xZELpzcwDjoV8PDMYyWueUNSFSJv8JKoADeWHCW",
  "key23": "4Spu5KxBvPWKCyjsNfLUia6yCfaLjuRHiD6w3c9dkE46b13mB135sdP1FSRyFkGzvmTNTxjLjsR8iKKbdsPFb9uJ",
  "key24": "5RY1vBARX1XoS2TxyU8VYooTGCP5okcMNLpAfVmSauox61FwZJcLw2sFwsXtsvrkrHE8Feh3LhjtfBiQpPozrVN6",
  "key25": "Y487qhoETxNySjACvCm3ksFMnY2LR6GPu1eN2NtChdaib2wrZFziR4BzReEEnqSqqqq7NzrTAmfjfEXEgkWb8ER",
  "key26": "4mvt16EfUyiQ7rVanvcFwwJMSaNB2S7EboBM9tJPeKxyZ72a2QUABF815j3UPpg7CSywvezzUMFErHUqd6puLaWR",
  "key27": "4qDA1dN9gAEQyTkD4sU8pvjgkxuKAZ3KL7ddSgNAFDj6rgzowkynyPGHeKsWJbTUUdRotVFFVXgeSbjsboGWPGdH",
  "key28": "3YprX5NKRPcyCKTbXWFhesGCcH9De9MBh219ruECG9SprNxTuzowuQSz1W4fstmfQhk3uKtKM8rUunyUwJw2QoaL"
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
