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
    "2BrzgX8ETsBXgxQT67761xHaXSQtxs88BET3xSi4dcbdBwDyMRZBu7DRTkKp1fa9rfbCHZfEnZoekGu6ZaVWoEcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owQDy3i9brgNWo9B2HL5M2EFBxLV3GSLxp8SBbTuKymp2k7tMSE9FsexnS3vHtmGCnsfLPRjqMPg5HnUZgBFqCi",
  "key1": "2mv69yXM2EkcYGb9by1FTafraL7Xu5bUDTNvZqAjCmQ6G4pveA2mjC7GxZebmzaT1ZXGK5uaeBunAGrn9AybroZq",
  "key2": "fQy7iHqstgC31rPRZwZy8P7PkHoe6XESrKehi5vLMKSxhaw1SRTJuSDTc1AmfSxLrxAw8tJ5XzaB3ZruutjmqhT",
  "key3": "4bz88dXkRo1aMistXCG3NhH1xd36pNtQscxndYCMVQPFnQmV61JS2VNwpQzbmDhCaLg8bpdgiAmLcgDkRkXNhGwX",
  "key4": "3gp9EXPQ7Axg8ubL2YYnKC9tkG6hjxbzKCdc42mjrnYDjkf5To1EaouKNd4TAaYCoEnrmW8kmM9WTvbphae2mEw",
  "key5": "2hzuiscPynqTtVbma8Fjqzmtsm2soZs1mCFkyCowQhpJUkcy9Bip4gKEzcnmpnF6743PS9AXJSdSYK3oyDwMJeBC",
  "key6": "5cmUgF6Y6EVwyHwcvtbW3jighryXPhqXzehRQRhLV8wwxR1pu6dKzcsz4Gv4SYTypmBE8JR626TLiVHR9YDwcSRd",
  "key7": "3LwZMR4WnDZwQB7AzrecNKPGqasfsYbxs4bERhnuvj2nR2iXqmaL8S26BskLbqTu8nwRuCirYTqU1a3dthTCcsye",
  "key8": "3fxzsUbxqgVpSVWdNEbyk78CiR9a4CSCJrEdosBWbfGQWbvXjBDPEXVVgbfGXeJJ5z6vVcWa4QQSkZ51NA7R3S8A",
  "key9": "NcE49s4Auym3XjByDhANNDFNdppVMxWdCezpjSXGeKCvqC6kjmrJxgdaMjLVhX2YSYXC3s7SUXCRJVsmCqnHU1i",
  "key10": "3mUWHTeYWvQdGuyFemgFE9Kigf577UuzRAcUf21YhDhcCfwwY4zXQ6BcXMAhM2MyAbQCBtdhmqc9YSioWGjHoTag",
  "key11": "4AwSfjVz395GdwAGHhuQYwYm1ijK8mUc6gvEbDHD94KXJhekEY8ZhSLEQqfVRzf9HyDhvpKojxW8ZmPb2NyF4SEr",
  "key12": "5Z5qvqEqKXBsGzTw4rLaKCB5q3jdkdZ3VPtcPxkdznymPAnSVzEnipsajioFTe8SyZJtLorwK4EakehtYwqCVfwC",
  "key13": "MbqauyEbRpzLZE2cZsb2FpdQ1yp26f3HBoiTpA6JNX6779x615Au2rw4pun8fnFD8u7NiSQbkSDaJZzx8yLcw58",
  "key14": "5RAbpS35SY8m4xrDuZQ4jUudgrj1HGC8YRghozWMA7vxLh5xeW7jGy2JzxvWdKfgMCbXvdBvsBocDNJiSAsxYmiP",
  "key15": "2XziV7DQopiT6NdPtxJ5nyvUFHwBFzPnbJRmrYYrEMKM2Z4iAN28vwvnQ7mz2YUhkPt6PXHxx9GKd9ZSTAcRUBRc",
  "key16": "4XYr7xUMQZddKbVwUNCQXRTzsNFwrAAHVdk4pP5DdU4jBuoq5mPgkKSxZjtmyNdzrm43ADeSybNUkPahT5pZ1yaX",
  "key17": "4UrzUkLJ1s3xNXDGqFJQFB7k7pa7vJYqfAzmpxdWYknzHqX9gyqB6HsGj8RjHqMzMsFaoiS1Difxw4Vr5KHcRvB2",
  "key18": "4YmgaZ1VCAfKrhes3q5LcjWGEMNXMHW1GbPpuAC6GDNk9eq2JnJZPHNiLsw2ucbf7TsvkFtThcauJkryVdRDEQ9K",
  "key19": "mvrZkwEjWjRBnt4re8GPWAMejebcPE5xi4XLNgkyDxn1NRfJyycpzSSUpJWP7fVLKpBtkxsHSxHbnJ7CurWgKBq",
  "key20": "4R6ELmGoymzQeYLD8gQn1fTYK646wyHtDg6yUPpyjWiTpUiX57SbzDRXS16wSQ2TLa8TcQT3rgP8VHHZGdgnzJKz",
  "key21": "2YRcnuBzQG7gJ2N4Ypf9CFJ4DySYrsAVERgWhz591HgbQmRrWsPYQ5Mhp93nWs7CTYoLcZtg4Yk5PiEaa1pTsufU",
  "key22": "5z42925eNoMiQCPkFYy4SYMvRQNoX6StdwwC727C5bNvkCBRkFZRTqWhQPki9TvuZXBX5f3psusAS8vj9P8ybRbt",
  "key23": "2Gp6chs1SkjZg97HTygQ2RzbTSgsT36mM7aYSoB98nK1GQnaVM3ahLBg1Ajjz3VT8e7KgJJGZpqGdbFYmXUukJEd",
  "key24": "2VhZ9LLSZ1nRQNhHdVGpCPgnaSh5T6gPcfRBP5yjMDZDtjX8FcijGXWLreNhjFYi5tZ4vkgFS46ZrVR5mHJ9cWU4",
  "key25": "2KhLKeB2uyy9J82KwhnTbDuJAUC3dTQVi7CCaRyrefViCETBdun4J8GgH2Kf19fcMQ26pFWXPwXRrAu2YWrXCWNZ",
  "key26": "39uYWZkVx2xdkSerJbRTLfwFy4FqpPurpmuEtNXyWAMZ7UTmDXNJyECd23rkkZkDAtDYZLE5S7BZcJ1ka1eLgWZT"
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
