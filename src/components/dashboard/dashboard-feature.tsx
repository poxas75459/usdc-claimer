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
    "4moDfJ63wxQV8d1RRPhcpgUof93ckwZRVC7rhJs5h1xV59XGDLRovHuoDQML3EDuxXgqCgt1WAEhzvLd1Cchyk5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvscCVgTYn917dxwSogMShNEygqgHi7KYJR12vqdzzbfwG9c9nVW7jP7rWU6SDziHW8pmSakXrfaXdKTU3hwMXj",
  "key1": "5gLbYofLHtbGp1oGxFYynKgSriaLUS3dpD4Smk9bD63PCGbTi9Zn4sjrtoaUvRogL6FTBRKae6ozaKS4Y1z8MdC1",
  "key2": "2uxfjrE22sesfpiF5Gctrmf2CagwhtpnSz3fif5agTE9Yf92svwLDzNQjTwR6NVmKZqy99TTq1CTAyTQtJGrAzC7",
  "key3": "3j3iRtMB87pa7XPsbzsoj3mYW8MwUt3DZsFHnoRa7VZkr5yWdFmFArkpNxTPyQEpijTHK9uqjm4m4qjtjeGeezNc",
  "key4": "3mxZWf13XmdpewLxzmWom9QvNVM9QL9ohuoinuQbsdWyjLMS7sp2EarDAd8fptx7HDDT5EzAtSTnjPpTfQbfNk5b",
  "key5": "ZCoYJG9BsjJnLXuBjfLZHGuPV6adkVUrDCFs4xz9H4x9R6phDndv6T7NhCTCSMoN5sCVjoyBvmhN5MY5JqB3fB6",
  "key6": "4Ds5HLnRg1TnogkaJjg7pt3sVZ6NevvY8U4MxrAdnLNn7jCDAMPWoSJGpTbGmGCzbcTcesoekvgZaskHNBWhWNYv",
  "key7": "X2iWyd2QDrWAZjbXXMEKfzLyJ4An5TvJzpMPHQMC46c4dM7cNMkvyCQA6RNVVC16ytXhcAfT5uJogFs1ytXk5Kj",
  "key8": "41mao97o2FRWUjhPyCjBa3dZ7pmczJ779wGgYN4RWzXfExj38584LmDuaVoe4KrK95ExULNnydjt4NyCwLtE6b9m",
  "key9": "rj7DFSW4kAb6uTxSVqYe5Vyg6eENmNyXv79nPztnjqjdLwbvZ5zNXc4zqpB7YZU9jextnyvVVWycTejH6ExnRjh",
  "key10": "8XWLWo9tpVfeis82ZkUTWQ9kekcYyMQtUzXTbjnJxzkzY14MNZU9HdVGfSJ9racuUgHDSd4akCbjWQdjhGoW8Gc",
  "key11": "5MSh6A8QPq3cGJAoQqHzYCBKqEiip3XfppnoKqGxunFL8xgDrebmRSKTT9YnSxL88wfJwCaeN9WMP4uwfMiWuhHA",
  "key12": "GTo2GjFKXHfnWoKPVpXY6AuForp6YxfKwTbXETG4fYYbTH4U7jsAXx8pinvBmSbvx2239UpHpgBLsJ3f3AHn6pE",
  "key13": "3H4nbjZTqXQ8rZVqJRAo1BYREiXDZ9ce2GtGJYsRRQzysEFEBbGaMkbev1LQM5hqmppPw4mg3Q5KSwrTWeiJpmP8",
  "key14": "ZW2uNC3FrSwtRYa6Ud7fYBT3p9aLie6J1S4oLPXNq89fMUFgbxW1KESkPQJXS2PTGxrz9nLsti9iqktta36jsnL",
  "key15": "41dnwQrG94X9V7TKq5UnebHDsDesShyEWznf6v2fQqsAFvPy1mEaJhMTrb9HaBXu3DJ6BUje4habQABsYFJvr4k",
  "key16": "4TWKNtQTSAvj1CyB9W9n4UT4PXrUXKumAyFpEme1SqFmFydC8YBdSCiZ9ZMKPkxQpZKbwzffWVPd4MAbCYBY5ikc",
  "key17": "HtDdLkYT2HaFsvnntHwZh6zWdXqvcDZ4WUNoeGVrWHF4LmpVzZi1Xr2tKRiw51qUNMqkLAJaBaEA4hQMoasXaJH",
  "key18": "22pmk9nh7gStxeL4NSD2UAN7X3EEAi2a7kuEDMTRu9jnvw1ZxgcKE4EbdogbbPuQ8meM8ZR7Qcuvizi4S1F6cQ9j",
  "key19": "C6zVtfae65RvtEn5SuEc4bMDSmevXGCjH24aGc2DDbGMrxQwfmjGQrLW9aEczbXZB5pdH7LNYCPa31cGyHQkRrN",
  "key20": "2XuFk9UbnVH4gogNaMtqQfnKmfZjqXdeJz9jLddtJF9LC96xjcvwqbFXg4LeTj7pygJyyEzF7nJsbFEiwxmNRWVu",
  "key21": "25dTknQP4KwX61AXhCYpP1ZPpf4GbbjXY3GJ1GoJsAmRDvZiewwXPWi5jg4XQPoRibdzM5USVjoEPLKtHFYz8XR9",
  "key22": "2r6CBCXwSYEfZfYXB6sUXy2jEsBDSMmfFHn626KqHLsjcyDxdDGA3a3PXHNKMnvtCfQxmEaDLRZPL4dLkSPCb135",
  "key23": "2ZEBSAGEmMTdH1Ce7TE4s4H5bhpMSNSxhWD85sL3RbTYs1z3xvRHwkFbSCs7YBExWmS2z2TuCHKfzLAziMJ3316V",
  "key24": "4cXPjgS8FcAKn2KvSnY3Utrtj2u55aPE4jhJfD3HB1TZtJCE9DmYFizHGqyF2dPFFE4zMmDAgeNq7EAmyJS4s4Hw",
  "key25": "4iYjnzVSDCnm1pdzBXshivqa9xNLof83HLNNc13cm4BbRTRUfkzuxUzWCBGab3gidU5rgFxVcQCHUzZPubyZ9vHU",
  "key26": "5wtwnbevYtccn1v3p2DgXkw2VbXzbBgCShfLctT2RQgPDQRYsfqfCYtoWjWS5rmDrTQZQr4aWi8NGUFBujuUeVMa",
  "key27": "4DwqqhqGLQVSc9DZCVKZx88KBZrBPesv2hwd6kPBfpASRp55FFfTHuM9QfmRhov29NJS2ud6MB2w81WHHh5WYFyy",
  "key28": "2F6XZ7Eq3B25ZkfAPRRNnxC4L6oDbhUG92dfc7vov6vVkTz7StAga6QvujYNVdeyHHpsEoKYx8LFSxRSgHHnYQ4Z",
  "key29": "3yUN7RUkopAALrWRQ86pGgjwep8GPZAv6L8QVHxEE7ZibeGD7proybxwmC91bfa8CMg4mnZckR8HBmvAtynpkuhW"
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
