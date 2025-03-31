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
    "2tNGQuTEMdAWQppVU83YToJEj4URdFzPBP3LcFFHCXN3ceTWUF5YJ2HADAHxLbDNieBJAyE8i3rpY4qDjUBfv3zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4XrkBDcmduh11f3ngKXvE1DeJC5qVA63B6Yc4AHDsY3CFW8bowjDHk9XeYCse2Lu7Hog6zGDSMuiZToRVGtSX1",
  "key1": "WwtLqHat8teFKDrtt7vMbyYU3EDmYN8DWniHn7gSAqQVRRZtYvnVQSLi7SZBncBXRnvdAxYT9263SSgEY7YPdKx",
  "key2": "4Td4rT6WLpjfSmRzaNEfrSghPYihVf6ZSxSJ4Knwh2JS6ZCsLheaFevrxS7fkyj8Te19pxKH1KXDo4oNfsummsSz",
  "key3": "3svxhA8FSABBkcxiVJeLh1yT57VNkmrRVHBRkCmL6EgYNSJeAmYPMazeM9MK1WYwnJjpf3vfYrVJcVtjMDBzLTxZ",
  "key4": "2dcMVh6gFbUSxwWGfDmV7Viq3wokTB4yWnybQoEsQirdD6gigs1Nwg3AA1w2mJ4y3dwyh23xGFUybR2nTdXvnNeG",
  "key5": "4BiZcnYCedcDqxg7UXKZRqgUyiwugrLuNRo6mBHLjSLBM3g4iZQkg9b29SAzATKwPxXnAYLMRnSHRjR4JBVec1q9",
  "key6": "5zzcjyXrMgP5nxC5jgR8UxZDUkbEGD4hePRHHUDqCip5AWMYzuqVYhdi4aN6vFLVq7fBUBHmdeTVtQA2aSXShH6g",
  "key7": "3gXQfCMrcFciofibgeh4CHDMA3R8QBVCaoQPDNdSe9TnoXvD1bdh7Dccqhjx7fxJhVDag1ayngzjtGpEvgzLYiM",
  "key8": "5sGNvE9uANR53dikmMW1V5Rg7kdKX3FPMA6eWAgaJP4QWndYARCAbcwWUg1ASM8ais1G7zHwha3butqWpmpUSLHx",
  "key9": "4VLYbo5fyvhRDC8C3nqVfbvBCB8rtXFL9LntqeJgAS8R1HXBCmEessLp5NvB6bjUHaAY7VVFdVHhD32hFNHWLp9d",
  "key10": "se3AzEhiXu28UKJmuoWDEGhAbCXijcZD4rC9EUfUmUsai5Tusigu4gBwpwDWR4i78hXXXQDqC7FgwdZvtiQ2wNZ",
  "key11": "3nKzFae9CU4MkDcjbesjfEzKZe3TPVqL9eB6rWYsetYeD4brBCaxx3sPNzJgzi7KVY5981BMpj3zYw4ScJsEeeLh",
  "key12": "3sap2ogRuU1Gu1KsfBAgSZbUivTRm8yYKS2vgE2W3GEUrNbkpybsjB8s6esQHzMxMMLpuFNHn5Spi4Fs9VMHbrSY",
  "key13": "rX2T6JLQZmNE1ktxn3U6bMisbCHqtp4bDiGSBeVDgUDZLXX8RuNkWVndBC9i81kyaY6VDnHCAMJGYh2pAGw1M3a",
  "key14": "4e6o7MBKLgJoKXLPBAoPQ4gjJrYTJ19auRvJr77u1hcJdMdzg9pGtiG7uVXMySVxBPzzSpDhryJ2B5JZR2ntjrow",
  "key15": "FaUwYUkeBXeuvpbbH1z9au4SqGSCRATm4wt7TqTa4UVL8hyMKcnBYoeE1iyhsn8L42FXgenCTKmkoJzYaPScWZ5",
  "key16": "3Qf9kaPpk1xPXZFqcYDNaKFJQBXjLnTqPC1hcH1WQoDrKcuSQHMHcK5vaoxjXqo33cViCtpBwqJsab9vvfafd2ny",
  "key17": "5GvnVJoRoJLNSqRrUEHePmT9U93YGmQE3meZUebHLqC3JQVAHpGn61T99tgUijRFNZgdsHYXvKJfZyNcbeUqJ7RB",
  "key18": "4nqck3QyNdAGrJZNJ3taTgjUbNA6t4ciTZJPM317EB4AGuBaZRHSwEMgENYZPv9HQMXZyB9LNqZu7Z1sKQoZWGxt",
  "key19": "59aVPoreUU13BuDBnxofd8qKgXLM5Z9DQFuUVz1WxXQLdjjNSeYT6MYt8guMAt7ZYuXqn5V9zYnQpfoVmMAUXp6t",
  "key20": "3j6LbYP8k9h9ZZP4MmMmMnPEkLEx2yDeuAXhQfwc1cfjCxMo8y9gVui5q8XkQkSMjcMBxadVbQxxiCCPJYCfCop1",
  "key21": "3X7wkzGc1733naytGW4A3Nr7oVHeaxVUXxeqJ3N1ZAVTV1TWgwuih5vqQkrj95Ht4eTNvGyWdNSnPhhhG5LUCe42",
  "key22": "2An4Ge1aDTTDLYP9dj5H7fHrfSRFHKy6oimZqaZvsFbxPVuEz1EsvbeDqcpqCYosB9fWBLPhB51KfP6wVDpGTa4z",
  "key23": "2fUfZo5qpd8sJX1WdBddenUfkn1erozcgUeGFDufx4c3tSLDSnwVuUbgXXoHcvdY94JeYFpcVtw6Tmrtvr48pDaN",
  "key24": "ui5wssuxcK1RQ9kooxff1FUtL78mqKzBVCELDTPoQmSpDWNzz1vLwjod1GLWP3JcCgy4y2mb1QNgGWj56UtFTY4",
  "key25": "5mk72Y9VxAef6W2eTrBqZ7ZB9vmc2qwNDt6AfZS4ikpjmw9rUQi229aVBoUvZ6EJjcfpmdq9uEr3NQRp62a5TkaW",
  "key26": "2c4SSS8NiuZxM7DuHYh91t481YaEHiCAnEq9ZMPuRgkshwzNy8b9NvHUhQm3stWZNQCbjxpkevKu4jMr9UtmnUtr",
  "key27": "5dhaDZwjWyYWUEEjuyREC5sSP5FapuNGZcURpSmnvWG2sLY2T1y2wkQ3KQRm6gaVxziTq1NtHDETvFQrJJfTbJkJ",
  "key28": "29WTr36iwyqoWJfYk4rm4uq1gTw7NDf2bGLsGLBtnhkeV46ZSpXKLdmiL4RbfJ3C53WzuKCLTcBXUkGRzoU82cFF",
  "key29": "66JCrv4vKJVadQRqFBMWWvh16hpJU5rozETGHpgCZYTwsTWEqNxZdApDS4e4Va4herDN1vtTjchFzNR3cg5PPcf2",
  "key30": "28pb1HeCcWKiBwjzqY2EWrv55wCHLVcy9KEdnXatR58MptXA3LiicjmicJmptTdJph12LfKa7uUeKtua8vZFeivc",
  "key31": "2LVe7nCBHxN2ixMxkK4KFz22dHHhk7Tfb4qKWSwKD6yJpyvWqqNQ9BAnPYF2nhEwVeYEZvbBHEnvy9Ymoimuou8w",
  "key32": "4Y5ZnF2FTjx3Mh7FsAeoTwYJdLvfjWkoe4EBrDGV5B9a4NDaoPEeHnuPjD2fk9qahvB6USGJ4TriwLNpPQjN1JgX",
  "key33": "62yb8MFn1BLT2DsGynquHDFJXvuSnytr2nCGDLxboDeXu7sivC4XhTxuXgLRUcd2AmcwLtxQ2MbjoQPTAU7bEQtv",
  "key34": "3v68xwsrEj6qyMCrrugPEMBGGpNNJ2koLt4PyF5ZdRE9zf9aSoY3tAtQtZcFeiH34mxmKNbVcpf2XNVSrweZG47e",
  "key35": "4oAqar8qJSgHrE6y8Rti6ixuiVx78bjaPP6pgJyBf9uHsCTapH5dmtrdVPTwDMXbgbx6UcRdUbrdaCuzWPwE4vkL",
  "key36": "5GMKxA2iPuBmWvEW7tbHCcuo5kJSfyvRqBUsu3Yf434kfowxWq5u6DbqyEkHZz4tBLasvweG3CCzfBbPNpJDuzwS",
  "key37": "4LzqZ69WMmbJEE8Qhn65yzy3ekyDuH7THpjpfaSDa2HYboo4ACfDqit8ZRRQ2aNMu4Te9kZi5vfw6Ce4XMWm3Dnq",
  "key38": "58UeRfrmMYZaf9zP7uWyoxLwHcxoCE31Ffnt1XBgjthFUejgkYZUAGY5egvPxmuf6cQv5NQqjLN5qKm1cvZC2GJD",
  "key39": "4ksyaXxWD2LgSdNuAorHmjXzABBphHmj7Ff6MVANKcKhPEeB2FwKWqXhDhTQgXtaXti1P7do6yqHJrkf5BNetu1X",
  "key40": "5A4s3jqyMC8cSWavHAhvtY2My1P1ucNEgVSSs5b9jAUcThUsQrMvEcwg4mC25wP1aGrNsQedC235P3B7VK87EaQx",
  "key41": "47jVcBZCSddvwsZWAtpH89yMg3FVFaqTRsEWAjsszPZbucgevxpn4uUnyypqaHVVJMob6zBSpTVxi4BUyraLSDFn"
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
