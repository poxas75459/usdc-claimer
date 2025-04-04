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
    "zxio5UhxHeMNnn3xF2W9vnwebFfU8iUfNNLBvyR1aPDdp85stxtQexZBA8eu4TcRW5BCLtGQJAuR1BqZNVScNZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFqQZbD74ezMRPpaj5Y7UY8gbU7UZw2TRbWJQqftZF69RhwTb4wfGAD2zxVTnkJ8dr7pVy2yCHQYBUq5v3SYkma",
  "key1": "4bfSrrnH4VS7QSNKiW4yeCoRmGcAcyybPRnMpTY1eQBjjDBqmYo57yeyA4GgAjzMQgQURPD9CLVUPJd1SqYVMZ4R",
  "key2": "gnahWheQDYm3sMFzEg892kPfTBe1sxHjHY9ytbjpqx7F24uWyYMAJxSH1yFD8dRoAu4zpiKwT91oZbxEBhw8Bs5",
  "key3": "4ih9kmionZiiMr9PScSFARtgE1gVPiQfj1masWwZSEN7tnYhYcMyoL6zhegCC3YHEmKv9H318aQkEbGXLvCKPmgh",
  "key4": "2nAj1rNPh9cPdUaJF6VNhnkLA9FprxfiYutwkKbFuccXzWwLLLwnG6emLT6gj76qtayiA3TWv1YDPMJcWLcjqGau",
  "key5": "3oTAxuxkw2iYiLTmozJWn7fyVD3YYs8GV8AoaDnB3NRpRo9pPpzHSQej4fuT2w65KYqouNdYvhwmZBRjPsXFPtvo",
  "key6": "gr1kk2Z6KehENR1H9mwijHEwNxW9Lcme5CKapVLuDydwjnKTGd8tcG6Vk4LTXwUHzYuEPcyhHTNa82NEqjPjrbN",
  "key7": "51ZKpANAtsoRazFxvaiv49e8ZegtYK4fti3q35NQbuLzSZc3BTeKVpcdB4C9vypvXB95mN9AgL2hWY3adjpGgefc",
  "key8": "2ShTtjnwokzMyFttfUZTUV2F8k9ye7tXvNGjidU5sXKWekNhGq29qZwM8i6De17PWjJKdC9fWK4m7ncfCDKBWoSt",
  "key9": "5ZbXEcFzhy2CQBZzw3namTSEDvJA8ziqKawrvknT932MC2sK8JiSpZa5woWdZeSKWebw8d8cXeKMny8ih4EoHCwG",
  "key10": "2qYC7qSw3cwaHNpZLzbqLCTTAPGnTfd3PjQPv2TKxKTxDyXUcNPyz28QmBosaF6kb9SDCSp8N6XfBLEiC43FgLoq",
  "key11": "ZL64tBZqeDqkATaDzFKzYmYphzm1PFXKtHu46QLuoD4cNYsqxTxvDXTbwCpKiD5Q4dbA8iXvNbN3YhTBKsJfJvw",
  "key12": "3myXMP1hSc4b9Qxgzrq3sPfDMsU8Yqcu9HWWMAbmNzGbu8ahW6kxGvBbtFtgZdTR8kyL8kMHxPAwJoYUxrtqL1dw",
  "key13": "4CakDPNcnM2cE34fR1gwnBq2qaES5Jwu2Kd8Dm4sthjUj5mnJfDu5naeiMJXu4Urc7Uwjo8NcQrkUZXLAB7Cxu7H",
  "key14": "2L2ToTuoPdkEr2xN3u743u9GWwPXvPT8WtmJ2zSRMEwkziD3ezpAmsQ92chESjTFZuQ6JfSKvx5jLvrTaWFeNNkZ",
  "key15": "4bWtEcyYTQY6ESJfd1jF8NeMC4it9stVbRyGT4B9CboFjibbTHjk6EMJzQnChXj8cZmTvL4CAbwjNb3i8aW73mPf",
  "key16": "3gPANBVZL3V2ctRMwBKfcjXUJpQUSwujUP2vE54n6PoZ97YbF6AQ55NN8SJ1SCmo7cj4ssA8u1Hw7rBnfghtWpQ6",
  "key17": "51nNv9HvAx5w6vd1aoLPwf7xZfwEmSwyWoBCoEkMxXNcXAcS43NcFfV5Tq1u7gFuM4erRJkZaDK4hZ5qJj2aAs3W",
  "key18": "bae9xmALsYhgmZAZMY7jQUMMJnQ56nADhLsqtJZwP9W2U8GxMCekCwA2eEj4S5CC4rY1Qb8Pmj63PeZ915xXxmD",
  "key19": "Lq52qUueiA8EnsuL3ZNa4btEeAi6iFheaTjhChqNApNtfuYTCEsepkex4riBLxwxyJHhCJiKPSN3wGeoz174EvA",
  "key20": "4nwWZ1K1pCxZfMHTmDKF1zajiCSGFGZmiEfGj1wxt4WA9JRURWJCxeUt73oqTuDpKP2yggS5Rw1YzZqmk6fMT8D7",
  "key21": "2KmnGewui7b6R5qZw13nhE9jyHs3dhoBGuusXzJijNGZTiUhxZPXHKARhwLwRmwnbrGq48BVtnukvPGd6TXZCgRe",
  "key22": "31Sez8Z4jeBmdZGkp4C8uUWzempeJ5kEN25dy6pR5HUdbiRkGKgpph4EXEYxLcz5vbddDyhozuRP5BYpWeeLrm5t",
  "key23": "KSj77iuHwFsBcbtvagUf3ArGtQU7hWt5gmVfxUoasxvNXRM28miQVJQtWJc2s4EXQxqwJSKX9U41UQhUdPbEo38",
  "key24": "aKGCtNDZmx4sTirJCQBhWMSD91NRy7ovpUXk7Ncy3NY24BhoZotp8jxTtA6jShPkFmvRKgs3RHQda1q3bL83X7W",
  "key25": "5uEcNt7C9pxMFBPT4TQCs1N2AXtmuZjSGUFn2BUeiDKQLE7cuBJK711q7LnXm7JN6joJB8cPCnkFZNyfMYTGjVfP",
  "key26": "2QWpEKGAbRtf1qDv85jGhagfRL1fgkMfPQvSXxhHf41s8FzRNn5WFWcyDFbMBxjMJ1P13sJ8gD9YHhWKfFHTqB9u",
  "key27": "2gGRNvdR2J6AKHVUdRpsHZrqE57y6Akxg1gszm3B4usamNYDVFaEQBSyqwnnRhhk8jMgYPtXAJcoRA66yrtnHLJc",
  "key28": "4TJj73vTexRViA8kQoY4KziYouBt9Uk4Ri1CHazSJ9CeUHsFSD4qdvYyk6RV6DRNzWX9qRp6zn7hLn2u9PcW2Unc"
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
