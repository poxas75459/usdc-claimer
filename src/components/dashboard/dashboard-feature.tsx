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
    "T13CExwzhAseaHbzkRZrJ6SwMwEhDKbX5uvEPVq5Aqc6kpTCrcPg5joH54Pv7itqXGtj6jDXv7RyYgzkyu3rPMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGbW7Xjn4BLcDNKG9t3vQKzmKEhjtB65qKthwpeX1jnwjHmQR5vn9EnbmJ8Tm6acDUwszp95KonJM5vHvWdG2wY",
  "key1": "3wRVaiSRV8DeWaVVk6gzvmA87MACFDn2qYbEuWQ4DJyeW49o2nk62vtmk1rmtqV1YivjWeCbyXtmxqZFYLQQfHQh",
  "key2": "3pFk1uKiKVZXqtXHWzxx47ptndJh4uwgKzHQdapEkX5rvvpcUEJToLT7ty5tGZpdgrATvg6up8kkYPUUaQoscVEX",
  "key3": "5oHtracLjW7MdjBBLH6DovPaXQ67WEmLtTzqQkFygHzcsh8VR5AEhoTNjzRju3xoXzyS7tBsvTDYRxk5DRzNW1KS",
  "key4": "2p1uoWNytAJ78j5mhPRSKNFQhKv5bXSvnYsCA5z9oavkz3PRBQxME6QVjCJYoVo9hndQvCV5GDUnBYRZw6m5zvZm",
  "key5": "2saKTpQ2WadUQZVwxbtfFvvjvrSeDjP4i99fbPNfLok24BXvSxEhBYd9bLRGbZtf692gESUbWe2yUoueHCk73BUJ",
  "key6": "5scorcYUCdQuwvXQ592aEesmEFq4GQQjXZSBNpooiZNwyJjZ1MvrmUyNTQncsf9cN9hz4JT8V1YpBcfE2oo3ZD5W",
  "key7": "2CkFaq1dc2GxcPNC38Lj9TYh64KBVThp8abUQ1GT1Z4dTAaaqY6SpHRNup7C7BVwjrGAZcpPxP3JGMHnbkFLPUxM",
  "key8": "2LzQkgxqXrr5AQbFT2J91pDtD2BE1D5k52ta5GtDcHVpTdL6NT2dsB3JVVfSVUT6gtqeTmMMLHRv3RYfVQyYXXtr",
  "key9": "3aiP6wrwkartcCniDFM9qBuzvmJEUEktasMw9qhMVdodqX5E6um6JHDC5k1PNfsehfUduPnBjWRpjKFjTx3v7Tkm",
  "key10": "3GA87Qe4S2pqgtiMWSyrBAx6oRbJNjnjeGow8vDav2Kqonh5HRksHXk4wWijUwsnVJoBCXez1EzpFVgTpfunhcya",
  "key11": "65yEow2spPpyeaxozfxLXMf36MgbLmgxEkJdLTCCaESdjnG3VZM8ZZQsSqoRnvxatNkveoWAJ6xVJuexw3WvpLCR",
  "key12": "4875s9gqsCsYhiWYVdriYYxJ9nB7GSg7XdQ1XW38ZCD7HKXJ5vAvwoqwXcanwHXAT3LU2p8itjfPBybehkwBKoF3",
  "key13": "27u9cXxceSejRBt1hmXeQrf3Voby9DF1gQEkaLL1MRoSnSYowo3iEzaggPe29KGDRbrmS6N9gNeG92ELV7QksFWA",
  "key14": "2jVspsCshWh7qM7vUBTVyniEpjuv3cKkMuxnSnZN6QPLfLuMfaB9kARK4a6jUq8frG9gnjTc4hBcq8HNhwURkJAM",
  "key15": "3pNwC1o9NuNQT5XFMLNZJR6BK5NDHQBPuyaWJLDMHK2vWQvH9XaiRsadaBJRPpXB2Z3WAzcWieEkf3DpVJPKK5tS",
  "key16": "4sPEzxqtQxptdsskAibWo3pege2BkTUsmm9w88FqYmMj1o4wpWVHwjKBhgUPmNuCfcFkFgHrAvrgU8jD8ZGtH4h8",
  "key17": "37U4uVz1Hyh5fR7cuJJLumgK4emG5C8X7VgFR9AcQ6L1VKyJrCBPMjLYYiv9rBa4KJEYRHBGXwjPCEazrgQLdDEf",
  "key18": "4KE6Huc1wKKAxoJKpJGctUDEFNzw6dq4MgdeNGKqW36zV4yaymUdyhQVMfm1b394JHiFur2sxYwToSLQydHLo8FN",
  "key19": "5kux151qJpotdtKtWYoHbBEWZB4gmhQd7kKX28yU71mDHV4diRDeDxLSireNs8hbFfcJf5VgBUsSwcLmamXcqyC7",
  "key20": "3Ez4pNAzBxNAGmV1S8pjKeJJP7GrstYVrFXZaTUmQFnWvWUyA7ES9xXREghUwZqESv9LihzFPV5Nu7MATJGnEiNf",
  "key21": "5JNVbrUL1UYp675MqkEpoqhiHdXe6fySfED18GdfERdAf3vjgmBT28bCeGvJm1cM3aaj7VaMtCR4uVjnMEypfEX9",
  "key22": "2w8U95NQSr3VLCxdDhj9N9yhPFF9szh9Rw7XShi7AExGNDHkpZRGVrKdA64xDuA7QgKAniauYFwTsUyLhXD8rdme",
  "key23": "3p2VQvJCfWnykzpbtTomsnccNpFkPSjHNxEnbqJ4rSojQdWBnEXNqfQoinQ3MJAww44pY8frUvqZbEzQDPm47RMF",
  "key24": "5gUtyGCek9ki3i3C7VSwicRkdwbEdSSXE3wtfnVBupmMs7gCLJyc8gRs9M4ZAt5FbvjL2aQLobhqYRGG3DZFfb2s",
  "key25": "4pHEG2j8hpW8STdcwKtDEJN8kX6MWdR8z5KVThvV42o7v7VM8P22RZVcvaaQAFNvy9SCRnSZhaMvX2QgfxeQtHjP",
  "key26": "FJ1ZKJFKaQYbnJug81KWvSDWpfEWyh43TnWQXTxN4hB95sxZPxby9ySRHupdooj9ZCceW8J7L9rXBnR392JKdKF",
  "key27": "2knbP4nUqGZgqMUD6ZUunEkW4WunY2DRYDCcxvCrG6M2MxfKn5t34RhMX6gpyHsz9m2VwR6DmwVmuPHVHro5grcP",
  "key28": "3SZPk8EN9WsMWVWc1Jt1M4NkRGmD9Sxdu3GdRtEqneSqbriE84maDpRN62cv6wZPbUqAxAgUBYHzMw9Vqz7o6NXB",
  "key29": "3J91qViNzsBEsdFmCEG4cxoFcMBtoCe144JqvERQGb8VsGm64N8guSkG8ZxjhJzURboymCLxGcdQ5gmthDSQQeR",
  "key30": "2J7kJtcNPHoiqVsW98RqgEwzzE75fvf4XiPfkaPvcMZCTHejRFE8WWhUdWcMYzxhoofiusNohGkkLHAE65B7RNZf",
  "key31": "7hKyAwXQkdP4fz8rDtxqcjNBsbmppKWw2Zqhodf1Av37Z3xtXQPUiHD3Y2LJauic9ZEfoe9wfVQVVRFNSjmY4UJ",
  "key32": "3wP6LDdhcvayzrWL5R2jH8mh7AQj839aYEuS5Hy6FhKNwp6e3Kigp3tDVA9NsvqoAjEpaDPoXBZ414XnR8PjEyQc"
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
