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
    "jqh9fsGQXGoTueNdh3f9NXn7GEuykV1nbTFwWeZoTpkqFDC5NvFjP189JshkECz5jeR9o2trqy1hWiRi3eC6g7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExCqMLUiB1Nug4YJ7p8PkBg4ARpQFVqyhJZGAeVc8duPcmvJEnJBjWVWG2XufUXERZWXRFTyisGBsZneYu4P2o1",
  "key1": "33scQY6SdXseoJPyjQx4K7z39afSr4KjgLtJHNbSnJpm5oSHBMihRWCZS9Lb7V5AF62TKDHBmC9HY5rKgJiSLq9b",
  "key2": "62vAUpkgYJ8pAjVKx4vEKs9CEF1i2g12BMs1g2KinmfgUe3RfZtWxPvCbyYZhmPrSdR84XgfSowETq2a4haUrFdC",
  "key3": "QDCxJksrsGUPHf8o2ZpVpwi1VjwxqqBap8wYwDzQKA7PJHjaqtdnxdMDDw72vLdDFQEkm2SPQLQ2ku3HxTwQHgC",
  "key4": "3rfeVe6JkHfV5FzDDK4DvTszDF2gfBwVdW2EP7juvaAc4cSpxNoRtAqsrmRWbhmqcAM1PZ4fsLdEd19kt1Uh2ebC",
  "key5": "2oMrhDRpK6p2AbvBVJ2iHKhSeAnovLykqEzfjGatWPcGkaF7yRpnCuTv95ZNyWQHK9YzgUT12fbtHgF4SVsk3Evn",
  "key6": "5oNkukQ2F27kfF4q99k3tM8dv2AzyVbhRyqmJ2q1eVtomYReabRW8cV5xX2DMFV5RrHu3oHd16ReNmcqmHQZUrAd",
  "key7": "3VeaBmMPBxeR8tYUtXNr7AiHiKL8EFwi87zQJCU65wDpcbkVYy8ET2PK6T7YDyDEbYFfftAdsPpkout3QA3UC121",
  "key8": "5Ns8UBfBDi4zEzVAxHcjFide9SfyAmLKYGGNVowiwyN2A9P1xf4ox6wUBitDsjxC2LWUwCSSk5fDRyQLUeUkPe1r",
  "key9": "2dNALME7nTn7jhpcP3ZFE5AcRYwsRmsVQSyhBSoR5DQrFU6ZrkxLpPYSssbqJidDQZqNkHt6ib9adQBi8St1WRv4",
  "key10": "4mNgrAWgJHRDfHQMQBniyhJP8MfNFzBB9P1sHuKMwDJqgMiMhrEbhmxbUYWP4TYek257GWef183eD1vgax8FZwe6",
  "key11": "EXBtPc8t5gfxC3VoHzuPXJZTWCYaE3HEXHar8oF2WFLcdnm3MRp17Pab2Hwz9y7sdfYmbMhe76zQJzzyodmQDAR",
  "key12": "2hdSFhAun34Z6TU5Uv6L6WBxzYDKw2qBvfindF67VQp6bHcGLzkUzYwdd5G6vgsLhbwk8hNJCTdDjfVmTxZcXuqd",
  "key13": "4ay4xnmKuuqNE8NvhyvdzL1tREbij8URic79Rn2Lip1zTJq61AprHkXMeSQKr26sVffz2iCgotjAtt1g88CncTZx",
  "key14": "2F1fW7PkLKtda4tozzk6MsAMAq63g9eSt6ejUsrs6ccxiHU8GJtZUDhtmF8ox3B9UYtkf5zYA4KC4GnrrLqghV6d",
  "key15": "TsYPWoTeA6T5QkMCyZvre6C8spVDc3nMGF8dSdmLpRQHXhCD4oQMeQNJ5SWMgqbaQq3UhiZjFN7eJQhX4KoFrAP",
  "key16": "2UfqTovkZaw7cs9s5xeAH9564ZeDnHsk63R7m8z75gCE6kFLrFdmJ6jpuPLvyQbJFyL5prVDUtury7MoH5LCWg11",
  "key17": "2E2RbnT9RLaCBXQFAUwayPL52YgxzJDDRJMNavDPyGd6dYZAAWrohGL3YnYdCbFzfcaKTBghtHRf9yBwEjwRHJxW",
  "key18": "4UJujfhjgXGc2r5wWJoNfybq8qi4vkGKZijddF7QvAwMRAMi2Ci19ZBXy4uLRTF7gVNPpmJDJQ2xGz5RBEFoAjrT",
  "key19": "2Qpu5W1H2U5BeqiFkWNsAxdidXUh6tQPmJTBzBBCgL8MpqFZGRjwZKGAMxsYfMgp16QSTGUpAuNqEVrNi5mJDyiY",
  "key20": "oPGaoJKTQ17j4NvaBqYf9NuM1qrbfcwMKx9U63vMMp7BM2fzFZWPhQSJRJKm6TXqaDQZkTgkYnM5fVwytZ2ML7Z",
  "key21": "2JzXad5C6d2UVcHkqvvCsQhF7asBPC3wDvepkGfoVm1CCUTxb4FUDkQKPzXvgmSBzg6WnGKofWGzaLqsxriDSMFf",
  "key22": "25jjhh8GMjtZd75nQvvd4u6ZWhnqcuMT6ha8gJ4LAZrzP6r3XWQv23cra4N3xx1bT6KxQWbda6spxueKX8hhGuJ6",
  "key23": "cGKjf8dKVTFp5CgWYcjsQU1MTV69ENDH3xCsoMKcsCSy1RTQyDoTXfJ7Y7eFzU3AgXj7y9PArADwTz5yKZkWfdu",
  "key24": "5u7BnMPy2NyyHiJouVUU9APco3bdbDkgTkbBW8eo4xWArHmjUR49JTN3wiR2DANrirqYhnQnp8dceUQhBQbhziQf",
  "key25": "4MSkyrR3kDnz4Fq86Wmz3s4Z8tBLwmnaFfdc55F9f1FEWp8joq4D4gsvzXLrFMeZKUDPeiZYJW5Xs9Frd5BDaPC",
  "key26": "442nVYqH2Q8Hyx1YAkWqaB7kN2iPptZAA3rzTZZFk4BU7smWn9Y38zt12MpNiUNJySEwicucBKJn7f7BFsqnXAGy",
  "key27": "36Ter9adYcshZSGHFoGucchbAwk1VTWfAQuGvS9NcGXv2Z4zAcBhM16AYXzYSnUmxDwBUUtmGbUex6LxgNa3P4Jj",
  "key28": "NNUi3AzoTRFAQ2L9ETKixnBuaKXVfozmiNyxLT45LJ46s4eg6zaiHAFG2Q5v4swgYLn29miHRazzzPDCdfyqweY",
  "key29": "2YDbwsBmG6imw2via19JXoKvvUypXfJu6dJ2xnhpsxFCNmzyYyR9DdoapfVUggZcnrJtAYwT6G2cLoUDEdSBRQdd",
  "key30": "3n9TtfQnAG5pyNQkMhfbTWGfih56x9oZAgYVAy6vwMyy9izmDG9uGCjjQfJLTnW3A3FbXpyfi7psXWjK7JTEtJ2A",
  "key31": "3mnSmx2UdHKCfNgJ1voaHwVLF8vipoa5hvF4tBtSfEZ8qiWkFrfpAKgGsrH49SQtrkanegD76aLhMxRMZYDG3TPF",
  "key32": "f1d7hYXsftrwjLjCYj1G5qAMVowNVGs1EP4BPYd7gPvYNFZdEdRs9MAqPLpV9Xnew3HGLSUW6xbXdnsmLDCVcuM",
  "key33": "2HnY4y2k22WpxmkuGEGQK6uagD8h2SKnQ9ykGqoogpnzVWHGQiTmCZ5qPX32XVad2kyF3vF3FmJnZfDesdLzgqnE",
  "key34": "4na9nQpHvJCTBzZgWE5eJY3VyvrfDs1PHJfezPyVT8AgY12ny4KMK3QRYjRkWjJdMbNCFPJf4ow4QABjGTpA2tpH",
  "key35": "5Rb6fYYfJSGqpLz8NUVFMF2AFgjnB3vsTbQUgefgSnz5H31nVWscuN3viDjav41LAn4DiVNkKMKp6drNsxvafHrT",
  "key36": "D5uysCakCRN5sviH8XUvXkUGqBk2RJQf3AN6ZSBNPjmpQXZrjpkch2jDwUQWStCzfPMTLjYh2XAZ1bpR6ayswLJ",
  "key37": "3Xqg4rFaZhfYj4so4S9uFDoWXod295G6TbFzpGAutzy6EdTYekcrHxUqMC8S4vtyyokuoLCvXk2QXZbv7Pg4XxBi",
  "key38": "3tUDnYNh2TX2jdWhF5odrqF6d6JN6WLaMXburSsJxuv56afKndu8KbPXgi8yLqo3NExisV48FqTdfbwY8YUaxSJ1",
  "key39": "3RD7xLstkMf3G563q9RXDnT6eitq6mzB2Dpt3ik8z3j1AtNNVpzAGw5J95QQzeyPqhuwK4PVZYYnmBbWEYHe7Rgz",
  "key40": "3CLytpcdU8L9shyESaMSknGrrZDuJka8LWECQebJH5vXcvtBCNmZkFioo4ZZRUQ1mJHtKZnLYjwpm5ou812spvzd",
  "key41": "342ygcizS2siyV5Kg6ghWafxeqpsiKhLajnHQsan4crj27AMtFwNTaRCc1ZJo7KBQmvJ6d9k2f652noaLHu3wsXy"
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
