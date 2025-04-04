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
    "5cbjsaH9WAmhdboZKU7hdmL7rdnS8AJuZcgWw4L19QaFMfLKnpvtP58pjcB85vZ3PGkWFsSLb6JXm7CdJUvjWbg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2YpA8MWSTSJH6PrqjKv4kXxRzUedmqKmxFGtgPXiBigEQ9DPxK3HoTeS1XDWWBKffAZRJdC5PS2ProXfjgrYuY",
  "key1": "4Y2Dnp2ay3ukmk7sQf39J1PuV4mRmLYZc6GTKqZYX6it1qqKs9oPyvMgqTN8MvfhERauuamTMDj9Dfv6M8LhF3vg",
  "key2": "4M6iWkAVyyeovQtycKhKUUE6HkBSdiEAfQD8S967nrUQZkZbiJMkMm2vXqDwuedoHHaGnBUFCfS4GGsFssmvU1jj",
  "key3": "3obrp4iqxLBxsowarsQUDwXuMfUadesKh1RDEDUnzZra21feA92gbKhhQjK6EVzSpAfiEpVhNe3oy1fPiz1JZMVk",
  "key4": "5Rbqk8tUBC9NVmaWGQjSNeEhYpBabwTzdCbGf19jAEKnmrL5pPLGHUuLkTFNGHNrFdmX3mpyeBbTwKF2AiivEpY",
  "key5": "4TXBoTHCGVFg6dL3rSv6mEbH87MktaHqWweAwsZCtA6pu3TAWJ67TujoK9siEnMEZfPPXTtJJFa1GnioPQSpL3NZ",
  "key6": "5KpBvn8SyvKBKaE4MwE3eVLoLn9mMKwbPLCQ2Bf96WpWCNnmANjGn74an6wxrjucAcx3csFyDpdboeoZBRKcVveH",
  "key7": "5Pnd67pV6D3KSANqqD51YPZZ3o9esVxUyhbj8ZHNeg5F2SJGGH9YPhb8dsDms2vkZ4Bi5cTn4rUUYnHX37fDPJdS",
  "key8": "1ZsYm2DmAfXTDUYG6mJdXT6fGfFU5Z8Ng8kMvDGJSYqiZiET6qSh4w88zHDMGuvvBXxjULik5Vxvq7foLiUenFo",
  "key9": "4SXvPVh7ACifuqoJqQbaK4XZW8h1dCVmoCYmoTqf6HicET3juoRXYdXJf1iu7nxZUxvQuop9qG83Nt3t1C3ukj5L",
  "key10": "46HsMKyWW92bVkpnpxRsgjuuLjPwU569XPy1BJVYnfAHWMVMcEaMi3x6pSgiT44JB7HqWmZuP9ZZKHuHuEYRnYaV",
  "key11": "2tgeYRbQhhRA8ij6vNLUbbU8DuQZb99RHSKdcMPPNnt9RRcZxQZps2WybXQwKMxVkbhVrzjciL3WGQ8RgLa37Epr",
  "key12": "4FUqWiRQxBYsXngzzkUPNqTS7EgiREDFYR7KEYyKKjsBfU4pCKkLPSZCWWyRub5Pi66skPsmj94JmtJfd7W8bgwX",
  "key13": "TKUVLzisztniuHEqmWLDPe1SYEpRs7c7h3z1ymE9gWFWYr3EajfnzjKMkTSVQ1T5mTRGQJe4FMBPZiqGaexSqgw",
  "key14": "aBGNqpiBx3DZgUDDP6THgYuqZFWAS4UdmQ7wQWEAU5uqZNgZn6x7EreFPgo7ZWAX6zwJ1MpXjQfwdXM8Y9V6E4s",
  "key15": "63XQECUuhRuAfXxkUGzgYfVv46GhLvvXF7BSDMkAixGsd3kAVPZkngTP8ecopwmYiDvqoytGmpn7N9fqkyeQ8AjJ",
  "key16": "53ufK5553kzfTgHmD8qHBwjy6fYufNQb5n3QF2EHHYoiaEvTDyyaWa9LrvEPyaNvqiAHQpKWR8RDVTAwfLZj3NAa",
  "key17": "5CzS5zNomW3BhxyTPzrvtKXWGfjFyiN7V4n4sZnTLLoXZok81oLUdnHp2sin4vzKuHe2qA6LusnCkZwkYLejp1Rs",
  "key18": "31EusP6het2CcB3rN1VJzTS5MzmdceEkgxu3ySerkSeZ22rF4CPbyYRMtXNUmyX1Gj8fwuG36vsCkrRxVVdsKneu",
  "key19": "5vgDGxFRd7okCZEaGmfdnKaJJe8bN38meTiK33VkAhQP1f5HAk1gyx6bHTqqQn7vBnpKT6MrCrjSWfEhxxCTC6AJ",
  "key20": "2sHgcsjpHYbuL5U9AMb9F2ghFurNh8VKPpQnXxD5X3rJ6VyxhKUkthBNk1WR8aJnKY7q4mYjUEgtMMkt1tBRrVGG",
  "key21": "2aZ7LN9cmrsWsb2z6NeAQosr7UU1F5hh6DuARup9z6mhAifcgjZGby1nxYPkaz9LGsQRjRTTHDxsMRDNsSeFrXBm",
  "key22": "2y4pxCPvGHJRd39CWZpD4dfMKmzZybbeqEwMbSfXFVH7NBGxwVFZ67LCVyz1Qs4A18xDiou47gZ4Pk5z2yMd6gtb",
  "key23": "4LjQywoeWercNccrtKEnDCvohmCVma44D7NHsPs5rcrYfYaFAznndWMtaCayxkKYZLwMAhSs276uLvB51Fi4iLMo",
  "key24": "32Vu59XkthsvhxCdTeVDaNZwokZzXHueaev1tnsGprqjUJXXes7sfX9TcommBCQAKnrVdWW8naYFbqZsVjBDuKMP",
  "key25": "VH7E98JQR8nfkxqdT6eJQUbSJYEiVTuvgn2uRrTuuJmFDf27krWjRTF43uVbULQzubsdZgmngb2FVxwAwf2UKSS"
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
