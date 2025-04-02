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
    "5PyL84StYX8171B6xHgobNWd6CXrmsTWcLMiu8TM2RkkL4FKNFXanMrY5Y8owuuxh4jSLR2W8mAVJ4kUydkj7fjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NW1ZoDvdAgky3fUUBnmHjf4fgobKxLkuiuEbGR5NCsHi8Js1wTFvfptzWerKd7U1rLcJQ78BPFCqMkZ2bPcVL6Z",
  "key1": "5xUeBP6Z9BeLYQrqYpzXkttFpRQfepxMuQ1paNDaonNL1kFnVdxnms58891doPXUdDGxYaTkAGxH3xr4zmrpkMGG",
  "key2": "5DwvdrqFMFFLf1a9LUm7riwFUzV7rtF7LSgk4KaStDtV8UibvwC5ZxcGsVnTpBZMNHXFZhhy9YKkPNBJZjCYW3He",
  "key3": "5QR8XJARzmoB7h51oM1WJkDVUbw3dGyBS256f25DavdW7ck3Jw7hrkMMSGm891X6sKTN8qDq1x9PQnUCn4ge7jRR",
  "key4": "5Fu1wtK2UyTmsgvasKo5soSiUniZJ7meKmYQPbFywbPqq2CgCE5T4dVZwbtR23K7dUC3BcGYSSzLrGoWBmwaPjYu",
  "key5": "2wDdXL34sEd3PuBTEZHCf28tRPumv3cKUnvMzv94jqPJZDDZdHPowzbrTig7uGkRTtLxeLc4NzGg3SAkp99CGnFT",
  "key6": "5skzfEAnZN5js7bbPRnVqr5qcST65NSRpC3qJ3zR8vcNMSTDPLLgXFq5eEipoAnqDVhEgV1s9UgTyBkbgkFYSCjZ",
  "key7": "xFkg73iXdqFv3e9yNoWKjeqML2uKTvD7KFMJamHWxtTNJaZmnHUoLjdmQNHAB7TD877JAkr5mazDew7kYz6e4FN",
  "key8": "5rS7MPzMoDMa5q5totyMs1Xk5UbqnC7o96z3yQsbkQGTZf7CHZGxQ4nnSN7knYphFyJatu22gtM73dhpqfpeHhKF",
  "key9": "216ZVXTdXXBSuNuinKrjCm8GpcxTVrtH97w5XaPfYoWeTXoZ3zvJJUyLhMrHYgxfKt4EaqoFYJYzxkvoRmJS5LUS",
  "key10": "58jDGZkYAgVdoTaU28Xc81ansi1rFU5DJCEt3muRzUU59d4SeWkcjFcQ35zZL1An6vrrZvDcJAD3ovv6MhPo5omf",
  "key11": "2ciBDTdBjQeVXpVBx53fNQafDrpyf5rruqBkSjF6qpRwn1CvNkEgguz2SZEYQUgvpVnHZZipZAaQwHQibQhkNr8t",
  "key12": "4UQvgkDtVa4zVLp2SMbEtviDX4habnbsNmmHuaNJvy1MXNdw4pLtbWpHnL6QBChdNfPnZHKh9t4Uv5eANHPcf5c9",
  "key13": "5wYYcQUmADei3Rju51dCfziszecCBg4STY7m98TfEVnuFEzLtsdBjemgvJTDV3g86H5WAJzSmA2NANYX892Bpy4z",
  "key14": "2MPkSVgkpGaNTMTc645NvK3Pcg1GJLtfQzAd8mpnmHND2AuSYpHkY3aj2QJoiuKytEmhsqSmZBUxPqh9tDr3zzWn",
  "key15": "ExkXwrTS3L1JCYnwMJpggF9uf9WkXaqfS9g5xcEZiXakULjvCkFHqjRbbMoSxi1gfgQqa64sArEeXFLwKVBFqVV",
  "key16": "4DnRa6zSVUb9KXYQ2MpyCHiQWWSwrxn5vmy5Qsh3ungbfvHYvciAEaHonn5W2YyS6uYXuPFKfdLXe78oZqjfLhVe",
  "key17": "pLiQvy3DutP9gXEs5HCtJKHXyvqwmxnWGNcDp5Xhy3ZWNiXtkUAA3BfXxDCXZbEdJYUHAYF1L5rKsaSmpbZ1A1e",
  "key18": "2SfCghr3iUVsrgXASVbnhcQgRxu7J5pbdr7iPUTYb8qRFRFhVk8beEeWXMvPTRen5H1QXDnZn4FEiwxB842FgE4U",
  "key19": "46SZC1Syo8h5bNGwrKzBEGiAcwnKb5yJ6ii324sHx1r5xK1tR6HmEJ1yzv82cAGHd9v37BrxS3BCRn3jp9YLwLLo",
  "key20": "4tc9CutpaucPCHaAnGYNJwFxeC7qZKs9K3GZM1BPsnmmMY4Sm3RRYyDzDu6stxvucUMkarhJCxgXHoHg4REK5Upo",
  "key21": "2vq4i3n4d2JNM1i1JQBuXoL41ZxcZg898STijRVBhYihfKVV4kGjkTk4Pd4AKPQvuN3S7pN1tDxZ7sJ4csb3nc2Y",
  "key22": "3NzWhRjyyahmtDLoCPHU1A5bMNUPNek656BS4aVPqkBoFsyyRNDKsfUjRoV2niWRzWBWmTLez5ozJAQJek1izsxm",
  "key23": "nTaU6F3tdZHqY9Db2237BYvmk5H7XfKyszmB49rLBXCkvH8e7m9FWojMwMhpu7Pd6ViRJDd9NkV8uqmPUacVbyc",
  "key24": "3NRuTw3L8FtUkXtR415SzEhukHTVrEoBNC5LvRSWTuJV9DyJjdfPp8AKACFoye1LYwU7CXtqWFBDBJfCP3aqRhYz",
  "key25": "5Dk83N8bF4UXqzmGDog3PRWu37acJm2e1iUPGG3FDyFna9FKtyfNjH5xX2NHtRjXrkgZZLCSaH3PuCp9wKqp5avf",
  "key26": "5MEphXxT44EaU8GTub7DE5DfN8QgijB3Exw1bVv1nYotGUhY32biU3r7mzYLKdeZY1svzVtYMZAJDzbd7t17Y28t",
  "key27": "5XeEcaUHE4LCBFGhopwMeShTGcNg7awbr4qhWjjySieEtz76aJPVWYMq3gTqMV68tsrBThrDrCb5MXZ54m1y9uuW",
  "key28": "31kVtUpe5XLbMzQqkjeqQmUPamf1Tzf7vkw9Ks1JCXLTBFBC14No4dTh8qCc1N12X7PWWcm4m1M8EPFFZNJTgJQ",
  "key29": "4aKWAKGaS2RJpH9GsEURnpH1Mu9n12YYEMoaQi9fvRuHFATpxvR3KAgEGVGHuLdD8jJdmdciV9LutT3CYvEsxrC8"
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
