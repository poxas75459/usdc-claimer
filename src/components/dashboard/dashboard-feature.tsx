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
    "3ih9on3RUUmcWnAtpRWaFL9ruw8SEusiNvpbcmCztmzbCXtbtxXiLVqKdLwDRcgS5hmySfMZER5LusgWJxpGP3DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CimX3o3JqYdSR4TS9UpFqM4373qkbeKpd7FxuQzkKYWdcm9HJiokab3jDZJA3tCCqRBHzfyQznmBQ4AzHqHS7Mk",
  "key1": "ys8BFDKcetdvxFY4SNuW28FUZVVyj4MLRmHDMbzUcoEPiDLCTrVNTcyWLMk2MuHownpjmEjCHVazTmuah86Y6JG",
  "key2": "5Q1MwnPLtUXLUcgK7ZoKNE44x8xR2sBLQ2VHtdXbkRShGmpbfGNYtBQxPQWnfEsSpAodPagmVcgvsmwjgvML2B14",
  "key3": "51CH4YniUQ1S81PrquEaGZovgfMURAoSnRnmPdFZ4fU3PT4Zc4eUrHkGi6PiM8Bckstk6DF8naYghun4Ap84cuEP",
  "key4": "5bDwYGddbKAeAJ6tKhsmSN2jbyFoWGd9TV1srN9N2Hqr9tFHmDJEH3QVPMks8ysNVVRofFL4pmpDDP9at6bfaAZB",
  "key5": "5d65S5gntG5uV3wBAwr9NrCJV1D979jY61656rentNVeZHFQiHN4yzGC1nJXDwXtEBepQ82cbqgeaxZsyqwW2w3m",
  "key6": "MFGicNmr3y1B54LGS9DvimfFTzt9EsoL4zUmfzHn49NQywjf6aNdRA6nKKua3v5q1NCdRPqG9XSdtY9rnAZc9PF",
  "key7": "5ihfSxLQ1FJWhoxfBWLKej2R811W4k3QzLiAee2rRQ5d4hzqadbcJ6f5ZhMympUcrVMqMcPDujkjs8Tkmmar4wTA",
  "key8": "2PEVq5j8crqRjdwjqm4MFP9Y7gejAsHTBLqKrS4s7acqfFo66WvBhYZyHw32rFYF75M1mxTACLAdSpxDWhZYV6N7",
  "key9": "bF1b5FdxPqRcKeBGASYgbQTPZZ6tFjrhLFecPN9HwVYUcbKZPpfrk7hjSaBA6AqWsBEDffmB7JQNqmPpr7uS8QE",
  "key10": "D4rSRECvZx6NVaLv9pDgRGBAVyZTUXDuVbt3iBhZ7ngJXQEBJNNNKFXndtrqVskzYdooF1pUhZYL7RMMZASVewa",
  "key11": "pFZ22fzVybMwoFa3Xu1mHW52wtm1jTct4ezxrdvTFWbmUkTyQV1NEqT25r8PSyaNgxCLiFtva2fPTS2w5tAvVhE",
  "key12": "2vZGJyjtbefq88bogHYJVY2Lc7DSVyyZGgvov4JQBy86qr3X8itGFr2qi5fdHCjiXXs52MJyqYCV6iCyr4vjWq5Q",
  "key13": "2SLT9gxePizTXpDxWSSiMpMHTEg4XH438eZAfGFH8mF4jfHx72gtDKqc38oqPjRFsJAgoMYmzZtb17APiWbnTUdU",
  "key14": "3c6jBojrvp39ds75sukPVYyy8PzdmrSAChjTcWwLHPyuYoBXo1gZ1wQYmNmz4MYd76xiR2s2MwYCPEmp6krfAJQf",
  "key15": "25pfjcqoiwyv2kSzR7AfLr1SFsq6cGByWmdKmB5A1jpLBJaDkpHP28MGgogmiPasEMMCc8HCumkgpXhBBv3wtXsY",
  "key16": "3XZwQ2Cci2ATkMeTyijxq5pRa1BiNy8vD1gFwGD8W55VNT1YDU12y4LjT9XnhTe3s5rQxPuTpPuVmwUD52oFHauG",
  "key17": "3cBqWzkXMjn3f58LTdukA8PG4s2bMHgrK2rRbKc8w32JuSkHPJFD6jDQeWa666t4PXg2wbs8FLfJsQkTrXum495i",
  "key18": "Wtsggz7i87ckiFmSM5aEH21W7X73YLmvf6r9mbDP8Gnh6qnMjRmhnuuvWnbQ6W94qnWnTsHJdPdFEiD1zXyFPwG",
  "key19": "4gLWDzdUeh36eKFBz7eNqCpBpKRpb52Xy8dSbaRnEWohgEeRZfE1BCL7Y4h6KzVwWu38dDizEgdTTuNFgpqk6Bri",
  "key20": "4WkoCMkQqejnTG13T9mMNYeia5zST31iTdnV5N4bgxYSqfS9Gx7bowBNTeymvvnmpYLm9WciiZj9zXNAdgWsLjCJ",
  "key21": "3XFMpqBTdLX8vihxErEJ7T1sAYJ6iLujSeckEtePguKyoT1azSyPUFGt5ipyGFv8FY13qjHjdP4hu5sVBUdtbVed",
  "key22": "3GTRSPFR5nf6Jo4A1CjmAr33gSFGLhJ3jkVBB1uoCtM9tPinBZXX9L4VYQAbStDJjchpufVR7G2xbGFHVAdjASdr",
  "key23": "ujVHN4patd318gm8Q7rYTRwkyhvWomFuMPLxiXFhfRUzVtQTRVNY7WSfh5J4cZBJUovjRJU6pwAAfuS2bkvd7BD",
  "key24": "5xJTp5ZkjNyCBNK78VgRVXCfDaAS2FAfY6exQCzxMyCJxYv3cBM3Db2e2cQ6jKLwaExvvAD3TVvBmuA8JeHyuCCj"
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
