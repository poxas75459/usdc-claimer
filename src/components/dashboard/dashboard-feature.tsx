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
    "45hG2sTa3sXvFWnPvgUeantzfvccpMT6p9pihX3puh1jhLTxiKpQkyxTnQdRa9WLx6J4jdQdx4A3zUXc7myDUytD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quS5uyJfPkcgHySH1oa1CfPqjrnHwvt6GRapBF79u6fHxjctK5tL7gJxqSk8VTFyGhtWxBEzvhLTZm37MYBttd2",
  "key1": "5GxU6q8YA5M6dPfCqSDMkzbWFujEaGUHLacyBbGPjgEMUkPjaBfh7XYjQQxJbbwR9stqknYUuD4nA8SmW5Ach63M",
  "key2": "a5zwEUMWJ4zj2dRUgnNiAXma3PXq1u9UKFpyiRpaFP8cVb8EvtVBxVhKS5z5ZzxEy1QYck3vxbXzXQ6jA2kSnK9",
  "key3": "34TteZMzazjw9aA3uBVJVUKKfTLd8szrm7gStq2xGmrXrcUQyBiSCxjDMpVQKRd7B9VZkPjCTUWRJ7NqQvuYDUuP",
  "key4": "2makodu9iYcSurUKZ15c3JHFinWyJJsYdjroGBERtfuY2Lmqsc9v9p6nNCwhSN93Ys68gJPYANUHWAJ4CHjJTmb3",
  "key5": "2CfjKGGPJ6xoZW3azFVNXBmDEQHoeAQaYJba1krRW18SrE8daXbzYe2M9EaPDSMoLXWDWJSRdhuiRJVyHb5qts5d",
  "key6": "5596SzFjSEEx4SUF48sfsD1cJfBDcsjdDag4TNB7FBnwDvjsQsX4bWANhvy5WmcRq6VNaH5VeJGCHb2QnayfPKDw",
  "key7": "5HPJC4H93Rw1vfSKjYwMHKsrMR3K5yHxKnmDBXoyE3maRQ6Ajy9VJj4zSj7PCFsikRvRWM54VXoNYbSYCJfnoifv",
  "key8": "3vBz8hjfN7tyXUnQGKf35ikbvBAbRKqZKhz2nDsDMfG6ByxmtvYT4To8qwJ4XmLYogY6kzz6BSuxC1hsAFVWJXZg",
  "key9": "5YhnK4o7nBrLagpoSbtyCpxzn9bfcJLJt1HkG7qrgqW3H862x314KvgcBbanE11U2wrxfkgnLWPjrJjGWoUo4s9H",
  "key10": "TnpYixRKTfDZAwuGUQdiBAR1f9Ef7rAnVeE6tWntw9tFaGtzEJT29XSafsSRJyJEsbRctDom5Hw7BsbGJ6bRfwC",
  "key11": "5rCyStkQyzBC5xMwH71pTjD9Ub7aciMSyyiSfuiW1dRQqxvpE4UbMcU7vb5VSpSvvJPSNq1oQJEwFEJJUD1fC32h",
  "key12": "5WRHLXRwuPAXK5sMzKe5JbFo2JpKZUEU27LRooBohd46Va38Csvmcy8Q96PsidYKJ9Gqd12aZwdncCVbPLkfyU9s",
  "key13": "xHUjP4qUBCR3qyc7o4QcmFYBjXw3SkxwnxX9AuQbyKjsSopAHgyp2tziz7xC3F9pxRtwGUufxyXNiMqzk7Sjhs7",
  "key14": "SGQeqPdob7FFJQc6WKZqXMtwCYMeFmdtHdDg9GnLBXA66GpueCay2N3L25wBnnBN7K44tGpDjf7vjCGepN8wRZv",
  "key15": "41CHJNDbQ8N2WpG1KD2S4Lsp2Kf8J1TRG3ej4uGPo3so8MFfjpiQWWsMgzWTARmTSjdgR4HX22g9YbmPTBgvd8jD",
  "key16": "5kDkU6VqFnbjfR559EetBd8Me79tfnpjhjhK39Yn5iB3BeXcDB9bcGwP2JJaoc3ShW2Yqfdi8c56W3PxToejPaG8",
  "key17": "2pkzcTxUgVtudQGov7Xi2oppnwLbcKtefinAdhAiXxfzCvCANkCCsJsVUrurkGoCo9mTAyyuHiu9rxAuoUDg9TtW",
  "key18": "3poxMW9eq92Ha87Kf3cPVL9UvenL9pEMNsByxQ2JaVqXJ8FeUfXCzFx2UgK9dZoGQ9QPXHU4BxMpmC3PTPMg6HAD",
  "key19": "2YukKGCVRueaS5Ymc994j2DFPcHVFNNuMtAv96ySXX2MBeAjGHs9TGgnmPBuyv3AfQ9fbVJFHRkx6xZHB9F5au2C",
  "key20": "5FETQZQtSQSVXA37uLCJcaZsA79nUBpE86tzUqjnsyP3pqBM9tjQ94DRqbzrNyYXDtFPZtxAZZexwA2fbjYDkk6e",
  "key21": "5Bi1XhaagYDyYHrdS34JaTGUv5mahYFvGZHsvFKGimJmfQTZ1LJ7aZ3zAbaEBwMUmu3BSau4UYqtxQmMg8WG7Y1W",
  "key22": "2P621nt9GLKrUDoA68PfveVkzNem9UFbYwjBhfCmRRuCSek8VQxUMvGzY2rqrdmpuvQFagkYgkmmGQ3AynUHzQ1F",
  "key23": "3qNuVbzeFksDbVsaqQAWrc7Qcwu1vgZWV1TeTDy61yBtE3BeChpSwWfXgwk5WqnnJe7JMA15DCSjK3jWBJYwfHM8",
  "key24": "2Hzgybm4fES2CG7GkpGEGVmkoiuBiAHxCC4rKvU5vwmLQex5x4DZpbNAWifjz7bDTA1iTSJDGDK8xiBoCnUG8njD",
  "key25": "5CTHLywatR1Sm6Jmmd4buFdMMNpWBUX4JqcdbgVzQ3rVhxELN7KZQbhMGFm2b22twg3pSf2qHAb7q3QEHWCcEwAt",
  "key26": "3HiW5BiLoPgSrCU46Z4AmhcQ44xHmArWXqZGGfkScH6F18Uf3TNGar2cWRsNEsp8gAG86yxMmhabhGUzReuWzWj9",
  "key27": "4u7Nr8h5gpHu94ENWjFXx1wMnV76WwnYq8QzPDouUKdZbHzPtBuyprf5oCJPx4KDZGsK3KPdugDJFryw9zHSWtGF",
  "key28": "64Wfxi2BMzyWcFkyVERZMBBAb1hWMo2WD2DRzvVrWKgtxkeMHMzgxe9pxMqSWFduwhEhseLwRu7yQ59sy2sEnHYU",
  "key29": "GZRLW4pFsWg87zK7Wa9fofwL7ogvXgpoFHr1v8Zn6aEsiusrV3Jk6fhGjhXQfKkkLRvC9uiqPJF1eL2kX2NTJs8",
  "key30": "628SVnss5Qmf5fGoYX7dc8ME1MNKXTBXwPRDqNYDnb3EhEitMayHdGfyJMwhQPk2ZeFja8beba1qmSYHWMM1q2iz",
  "key31": "3guFoHsQqsvxukKnJPtAuEJupS16LfQGHrVAy2XmNg4t7pwP6zCDZ1NapuN2kLNtBCiFsPikhsmaAV6MrhKSJYpN",
  "key32": "2wHxTxceuGPuf4h5hQmKr5GbP951PTA4Ztsxob6eHXWuhatfpZ2UgahT7uC8DYuC5z6gWU6TKCqdoyAW27F4UdaZ",
  "key33": "2pSUzw4pHrmE5QJ3rJhEArpBpa91a1rV52yWTHMGRjxfhmEVFn3DMjwRRwhQY36B6B4d4LWVnNKVV2s59MKrcLB9",
  "key34": "9paKagzALWMqUSvT7cTNg3H2oyGRXsTdpJK89mrEEEnjDpSBqU6GtX9dBcUzk5DnATaaQGWjqD7WuTKE9Kck6e9",
  "key35": "3uBzdsLQwokpaTMYh46DscW47CDJDTHJvBRVcprnAUhfDGSmPa7HCA14bHvqMgVvbX41ytuiCqtoemdDwYj5h98g",
  "key36": "2vwbCkYQfJGUSPL8EBwzntuobDj2ZhPYrvfJuQK9zoe42yX6W8t1L1Hk4PyCFyWf4jLpekmovGbB6jD49keC2LrE",
  "key37": "5Fm7CUPm8BcyNKFqBc7hYJHhytfFt1NXufCYD5hsuuJq1RSZtgBLACehQYatm4bhYuZWrb6ZJ8A5C1nu2XvrKD2Z",
  "key38": "3CwnxiNnZyj11KUyPX5RpvAefoGTfPBhPxPDG4M3RtwzcYBSHZnriL1asrxqZTcZBSDzSWLc3k4sLBANR4XHRSsp"
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
