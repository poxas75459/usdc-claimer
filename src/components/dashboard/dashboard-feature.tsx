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
    "3t8jbUsgAdLPE4WUvh6YnHXeNzvmfQqwyUFWBgvHCmtJ1s7L3CWLkkBspZ8HK6GRDPuPB3WHLLsvSjogYcehLd4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueRRAEETxWsApxVBa1TdDXgzTB1YrgeQGK3Ab5L5kGe5ZNoGS65TyiBAbDZkwoCZbpin4FXU3pDzLzkGX4vb7ok",
  "key1": "bkzwpYJVNjuHPCzC5rWi9JgC734tkhFzg3Rqe92Asxn8S3mYZ4FpEnLpBmqTbLDfNtd8ToQ5AtsJJCYkvuqwstC",
  "key2": "Kij5x9AwukYBTMhR4AejH9zZ8gLHNKu6RrSPAzjX6PNAQW5hg86fhFCqbXgHnZV1j6J36Avgg5Ph3PXqYwTt6qC",
  "key3": "tUHZVNrxhUh4UdPWJZRkUyhmg6467q4u32oyporgSWQ8v9r2uugZt1EYi7dCF7nWw3x3jKR7egJ9DbKUuDcznWS",
  "key4": "2JzWeTxq2LXGqZ5tm7HC8zqjVeTNokbEnqvp1J2Diw7a42apQ2vHu7XYwKWdoELqK4tXPLxoFvdiw28SupNmMm4P",
  "key5": "4p7yidRfF9NLh176HdoBHQe63vrrWQB56rvgScoSgsuemHruvQXxy7Y6B9wyvcF7PnG1NEgkoU1ZT4AexSsyTu4B",
  "key6": "27mX4wB7ARWXYRWF3cus9SCQUuXwaSbNbqxioSGBKfpen3QKsggrMizbTN9bdc1eZdHFwfjJcjvpkGm2iNucb5fh",
  "key7": "51d6a1F1nwhYNzwwAuX1A6WD31m4XLFyxwsNVjyzEdYjbfJ9KfrUCmEsYvW3A9xU66WcmSYgUZ8Cs3vKbuonGUuG",
  "key8": "2M6sjL1NJ9Vi2E2HNKtJL3hdfJpTMejj6kVbdavoQDeqAXP9AxwBT5qET6sPkzTM6P8UrYMcDNMJymfyzPY5AERz",
  "key9": "3DFnqHDbt6iRAN1UD7z4xUqcBDtAVp3xsvCwQNjPH78nWLXjUquvb1jWxvUf8i9uqSGM3ZvVuaXdavGFbCrsRgkA",
  "key10": "4LvoK9Qsi6TN1v3FNqj9mhwoZWYnDbVXjjpq5ZCEJSYvsz7XA4REn2Qek38QZ9aro7VmXKwnMtjLxx2ZNaVZA1Bj",
  "key11": "KVT86zwfkvLCCfvVAnntV3SF96nD752F3ACNQdnVgnt2WkriKyADTY7tKqtDwnSyRJxcmtSGK1emfYiht7dfDHr",
  "key12": "2F41u6EkyN6jTdbtND2pncMFwDtSBankJ8Lu3PfnEYWzsp2wrbcH1nU2rUwD3sHzQNTAhLM3cS6mkdBMpD7n4Qkw",
  "key13": "3Ft5SfAGV2ii8hyHMbBosW8QSRTXELZRYKjSvaqbTxrbaEjGVA5qJUtYj79rLHJcZfrYgNGtrGGRNyc5bcKDorVJ",
  "key14": "xDk47tRQPNrR58i4d3tQyQ8u3T2gwGJESNY4k7QX6FiERjLsmncWoq4JX5u5AjvDqbhLX4SWLj8KYk35g7XJoEp",
  "key15": "ZxxmZMpK9wBPNhc48iftMGzFrsHvEpypPtw49pXHnvLWgLJ6iALbhviqaggB1suPpXxNfvVQyNuUJHHJxrfXEyh",
  "key16": "4DvtwH4tUJDfGXxHrz6kaDH1o129zbJCTr44jCFGGuA4qBEor25UWwTMHMeoZ7aVwoZokuY73RZWC42PtfFnQayr",
  "key17": "5L5HYh6YPpbUiRwMWaA9FhW4EE7yXBCDMYpmxSfZMdr3bLxkRG4eXw4rGyaTtzWUopsQFZWtUVDJeZMrNPWY3ToG",
  "key18": "4C3sXRyCANTHMS8vfmphjzzpk7Hakw3U5UtZiNCzwNXr9J7oWdk8tg46zjqDb8v4qGwbuhN1YCbo86JAFseYcfML",
  "key19": "2mzXfzVYex8pdSmCr5wTGavnh5E51L2v6zFM4zasx8QrJHfLbkRnfu3iFGar7Ua26k58a7ctRGGrSAMX561syeYm",
  "key20": "2aZkkzsyquA4Ls4VKfmYAbwT3eSujwfqtXf1cVjLgfh2pzeWmfRsZ99F5acCFaAsFJtsbC7bWg37FkyCDH72BwBM",
  "key21": "2ukNtB1yUxrMgfzLci2igAHJCAes3LHqQZ51awEkpbsdyE8c6aanA8LFGHmX42kuyqQZZdo4GprZbFSgqDxzwxgF",
  "key22": "5ej2DPBuzN17qZKaSgnUn54yvTrephLiDL45VAUc2BvbanUejkfwdaFKPTT9NnouvuwxyxGnsMfWQ7JmAzo3UErB",
  "key23": "3TPfJYHMrKYBDyUKNBvP4pPJhyA3fFMnAbTmqwo52f71MDEWf6Df5r4TQXowWsufPYt8s5sx4dt9zivspHm2WZgs",
  "key24": "3TQzaG7Zcv5FHxSqj7BVESXaMYXACwuUbTJJGnQTMrmt2hvdS2BEWC44ndJnw5Bzcw8gC5EGacDDRNjTyuZJPSE",
  "key25": "2uCmyAKfFB15Zw7wqdsfctAo8ArA6sN4dAzThRhTLSeaLYPQEEY1Ak1e6bZ3PdGe8yc7MGMrmDBUMvvaBbRdgZyu",
  "key26": "SWAvWiBAujfGqKVQwnR7wcsttMF65U8Gj6ccLhFDVJwwauqvxHiDzAHmxYcpTw9pWJ24xrrTTTtpsSy6ePWjPXa",
  "key27": "Cmt6GHyMQwufJeTuPbm23qGJYCYzgH9svgPDpVajMjYo8gpR3ha92uZCAZ2oiPq5mmFocJmkNwgUcG2AUxxuJbv",
  "key28": "2rSJqPG9aDZXVkwYv5RpkwEDaXtBowTwEDzxTwYbMCxNtazjBchdkkEg462RSM1bXzCSsLuiKceiPkgtLMCVwfHi",
  "key29": "4fKhgd3TkGYrUdXYp1n6dafmrSbD3RCsggVh1iuDx2rqhQCRDfMPYD68cfqS7ZMQ2oRpiBia7BVz8KFfXMZKX3dz",
  "key30": "3YpvcKnpXuqp8htG9vhRAHKNvME71VjZxQ4QLHCvL4EsMEh6QVFMe6X5gWR5dYa7xPCeAL91koWLwNifpUCouTP8",
  "key31": "oaaxMR3L5k73VmrwvtoqqDs8wpJwRiJgqNJZx1ACfwHEy9qkbW4CkAsXHgPq4GrBB6HtFbVpFN6oaJyEo7mE42S"
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
