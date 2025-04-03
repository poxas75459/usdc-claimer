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
    "588zZY7xGN2qCzDHoiMVB6i9QTi9rVKdkUvaiYFEkUU3Xrm29K5EbHBs4q1AXy5hkmabrY4opt3ZwNDhAMUtwwbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ou7yWb6rdtFcqoYA1PfYr4sMTcjRVCJ2hgnQRG9Dmmvc2jSydNbEjNJEeqsMR2A88Fc7YJ2MehG4Qcd6zT4qB6q",
  "key1": "343vEwTCqJuQmdCqLDTZxPT6TekzqFsgA6usyDyZ76C7MJSvQGJMSquabQuBBvr3obwrd1ta34QyCbt7ppD4AcMC",
  "key2": "JKACQNyLXV1DujvcoZvdi5EtMNM23SK6ayB7MKXTrU5GaBGWW168Qp8U4AZWm1emtC7B4Lagpp5FdTFGbxj9ev1",
  "key3": "3VVqNsTDq4Vk3TnnabeebcvMzNL22N41PaN9EvNCVmSWS5Q9p41vXBN4UjU4xsqr2NrDMQQebpMBLu1qbe1MUzcu",
  "key4": "37oPYPiQKVoRw8xmKHJfiaPrEgEfZvwHQCwpQ6jRn7yD5cPPFLCXrscLdJ94XDJFoH6LqHreG9oBT5y8D6EqMKYM",
  "key5": "4MGPdskXW8gTb1pJiYsZpXcvNw1Hzn5pAUyP4ifTgs4iGVVXVasqVacCgjeu1ziyzoHBJSSdDt7FzxHjFHzhYshp",
  "key6": "5TBPLmi6wgR2csti1LwnxRz7S3hMwj9jhc37BTLzhbL3r65CS6mY8bgZ5jawSzJRbcSJPTQpqeUJcdEqM9EmNx13",
  "key7": "4CTrGTmiwTe8xNsXYrnWZsVArdRBG34thbyxeFAVZ9weLQk8nbDmUyj5skxTAnRxRTLeZL4UzYSbk46rcqMoy6Uu",
  "key8": "ksFtDaZYA7iDfskE17R3rJtD5jwZ7LLJDiJeZ3L2q4H8um3sGkqBgiunjMTUhnxjAiMH2kv7TQZn3TLShnEctLy",
  "key9": "xsP326gjUzrUXRZaN88bznS8de992VzVfM66Ykyj8ZmD8Tf3UFvrKU67WKAU4HtjR6nKyiJHPTx232hsNA8U8r7",
  "key10": "5WkxFNxStmv5wrUbemmBHiEqaoqn8z3SAjAugcVCSApBga3VwMB7mszepmaezjFDQFiZ3Ei3cdW71NRqBWiizpiP",
  "key11": "4FtkxDm42CshkvgKdqEd8VWQbPuBE6fQzrMEiQZfhHwZnQFq8zqQvcTtzTVZ9s281bZWJQGok363Xu3jJAvJGo2y",
  "key12": "3xrBpBxiFGSTQPpsUpHAK3SXNLz9qxzN4yyrsJfF4SsQtHBkojfwwVkvrjHqiQ9DVfAMjs8MyxVPjRFibD5k8sHP",
  "key13": "25d1CFKud1aBpdA8GG5VPjN5NSrjVuN63iYMuHpsUf1MaAe5knVoE2n77LhsEFyCNtP8QEjCB79jLkhkiEv5F4GU",
  "key14": "263aSygQxEWhvKQKfXHF6f47KXToumDfBYMfUShpyVgNTphAaWJWBBcy8gpHhsBEDNUH1JrTvEjee8JXaoTzeCAz",
  "key15": "3TzzQaAJ4KBZuVpVzNTg1wvVMvL9uZsyNCjfowhKAFxb6d79XA6Q3yWGE2MCLwkRryCFwRM3X577KdCLDUUsz58n",
  "key16": "2rGz6zSrE5NKKRyRhNyHwESNFbiSEyszr7uJLRZwkqU9iD2s7ipBRYQZujR3sX3K98n1UyL8iaCkvn6wxqNDE8DU",
  "key17": "4x756Xjz4SiYDwp5ZPXGhpgu9huUzpQgiaaLVnNKEbqMkuu1Aj4Ma56AQHgpyGxWbXuKBvui8BcnhrRNhugVBcWm",
  "key18": "97N4349b95137hXXaGNY39sx3rQ42U2X15MeVg3BGJKJTQfPtPNiHdPy48S4AWWjFqZmdzhJge29M1Z6T4sXfc1",
  "key19": "4sH5xRQybz1zoevTKUySZVLBsqwjefezfHdnA5k6aYdkrpup23PF5goHHpNqeoYeHWvXqFckHm1Tg9t9EyMa7rTi",
  "key20": "4C1533mftKwksaQ9Uv36J2DkQfpx5tMEzY3bkJLcMHZSD8wb3cucHoNC6LJMxGzBbyR2wiH6s4y9xsxvifq6pRMT",
  "key21": "ved4oXn5wPmakH4JE4HWiiZueQ2pV6cAQvpw6huxKvAQk5pVExM8gut1kD9jdsgnF11eJQg8GzTkzR2TuvDDMwb",
  "key22": "4wt2THHvuVKaHQMr8raoyEdMdnSHbyVikTnh4mPHHiCeXa73Qf26cstam5tTAoopHJYhjrmB4JJwckb79Wf96SXi",
  "key23": "nxSzbx9W6SurGarkNH9eMyHXgBrkivE7SgkHSZ322atcE6kT7jqQavQxPzdTRELEQFDdCGiG9UhKPUda2UL2rv3",
  "key24": "5z2yR3bRf1dJGM9Ung4EnxdPe3RsFwyWkuCPoQNTrwP6dAX6Nez6ynkY5Pzi7whG1qpbvXQvGpETTaZGPtvhssbt",
  "key25": "2LZEZXGRcC2L4tqjbXjqegtt8hCNxMMtvtV5HxwjgakpE7oLGUWHofJLQhNnE1WtzareRA9d4ckgDbE2X7urbMXt",
  "key26": "c8uAbqeF4wg8kiBusMd6idgu6PZLyeHoo15KiqjNUNLXY9GCDMS2fFMDkaiLQomUgTgHcfp5CKMHd1KFjeR5fuF",
  "key27": "5vZZpz3iRbztuYrhiKLmZPFEcDuhtaL1Anp4Pf6gZndmxJ8Eyh8ttgvA8fbaLSekqjLLfG4k1tNcRuqDiQauRCY8",
  "key28": "3mEN3fPT4b98HQ36B7LYcXe5RYNU9T95Wz53E9TgPfbCn5H1E4MDw1XmL17v8vBAMeasjZc6MAwsZhnbib9AMWmn",
  "key29": "2tYk9smC1REGsy42L4PSNwPPEXhQQdmLzomeMtRL1Lokq5ttkhsh8PJguw9yutnm8a7ji2hV2J1Na5LhDKD15wU4",
  "key30": "jTjT7wPFQSpPyCek914UWFuosmAQLgthkXAjzQvzLC9r9pJbyyhfPRDJoixaL78c8gBtndrPPVrkerZvH84U78p"
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
