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
    "5LAwvEMk3EbRLGSNwsYwmtcDFKtQ88uvEgBN5Nnr6N1PiQuzDjUuP92U3W2gw8T5BtDVwUMG3sNMrCZDnHkBxZtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rjJw6DPTFCZEzCJNCKTf6u56HRpnb6RGuyfwQ41KkNqW1xGYyjdcHGtVudAqNToPHxkWjWiZv6QaWE34FyzZB9K",
  "key1": "3Y6oAPN1fgJG8pEMTpATVRV8ENYbz2fsHh3321EQunRpoLHcuM4B5173yThBnXN2g7mDXTPDMrAM7ojHQqerUHJe",
  "key2": "3U7CbCACWuTV6kXYLDK9gMC4veFbR95xmAS4tUURrMmDAYPVcf2R81NY6MziciJ6sQrYqqnGWRR5tL97gJ5z2eS9",
  "key3": "2g4LPzdXYiRhiNY5rAuFVKxntN3njwaWZhXDLVBCYujGYeMDkgsZzdKL99JupGUXAivVtFZX8MDRyktuTHhMhAvn",
  "key4": "2aVQ9ck5A1CmCMssWS6LMBgcHCvZH9rShxpdaPEfQaMNvVVShqVtRVnN3zxGWVQJLLKS9xq6deLzWMbCQFb2XFAT",
  "key5": "24mQx3dGVFBJSPGHgbSWUAJebqyue1CxuECqh9fKQJbdwfbxDMLucuymtRiUU9pyjnSeyFyFB4AJCJAEYXSx4Bou",
  "key6": "3YKmzzKFKnrR7Sy3aKpuevz2ZjW1Qj4bCyK2hA43K6LYx8CqGE9uL2DAt61XWQcZSEzkBLgY6pyvAyLg69R7Pe57",
  "key7": "PxFyPA5nS1YeGH9ScJQgZwf5hvbQdD8mHSzjsKQ8FiQ5kLLuH9HEPZQVQUQvsuV6Xr6xEWxKkHFjU5Q5Bae6MUs",
  "key8": "4j6Uc5dxC78NTKhLg2RXGqcJTMWfvWkUw3ZTnLcCyd4jxTDEjRqxaDt1aNSXwVajLEwhT1ABM1pqjjUNWR447NtV",
  "key9": "yF2TLQEpPBsfHQes4Zc7L1R93wfxG2Uwm7BNrY2YMK8EzoVwrcWoD2AUFZP1JgTNeAWJbsxYTmQyhajBW3n3zsC",
  "key10": "5d7YE6xfuymRMeRsBz2wVGS6bC4HD1mAeoE2V2aYhxDTkN2KFFQM9DFdfyMZfqemWJwF15PuSf5XtKLVTjS4qLNX",
  "key11": "2NDaiTUQrs9GujB6urDSZ6TEaEiNXz8xuze4tBaydP5wX7iL7An1XWYeQgBZtnBcUk8GyiFof8Q1936FnMCWAPvz",
  "key12": "2qf8phDoFCWDrRfge9NXmjeaNinupsL2anksSjnzqbefQeLGJxcnx9iq2c5xtgTutgNysSoefkKKevBfYmctLVC5",
  "key13": "4tAgqhjAS5zVMFnq5PCBmhjiuWZCxGJoZPnJ2zMAW5VP6z3L7rhmpNaczL8nnk7r6hKzKqQ5gBFXpw4Mh122xJE5",
  "key14": "38Y1KzPSyeUYS8kbg7TRP48AyF12hhoKitejbJSDRahFPKFXRKxbdqAsLgWnscZyuJL4r97kS8bAN1rEzAG24bBT",
  "key15": "3pvWukVB3V3rf3bsDxhTB8fFJ9FVjwjEdEQHTHMhKP7k8fffG6yL7N8ULWqRCTrUbtqqfZjE5VWE4vY4GdgknVXM",
  "key16": "55oGuhzQXXgpueaxLVPNg6SPzekjtShNhP89JaJZaz98vFMuwRxf12xPZQUqwJ9hZ8wa7GtGmTWFZCSFst9MirTj",
  "key17": "3HXTFXLhD6WUkNYMEWWqMThx42fo2MoVZuRT41BmZUXUkwYL4Pv58vwk1rzXTrHkVeiJE2hLosEPtTZBWaruqdVy",
  "key18": "3TQkiWc4PD4xrpAJ25EZySyXbpvD1oRz8oBm3sLGxxyGxHWrfcPjE4KFa5VoWSg5g23JGmbYeMyZvzn5veMxpENA",
  "key19": "5ovLCu7YtnmRgxgn6p6WTMidtUPezriifNfMxSBCT5HSZdZ5hM56wYMVGZikYpUnBtFn4nhEiaUgmDZSiW8odHKf",
  "key20": "5ziivi6PQx5zKwdXQw5Fy5FGC1JGuw4xcrA7npYysLm93q4ioW46HRPPEKCatFQU7Dtkwr4w2yqp5bTEhyBTDJVt",
  "key21": "3ws2gjcr1hysKWTp7C3nFzptZQn4DJEjTPte417YFnN7jRi3KHS7P5TrzRTmoV8ZPde2WTkdtNJAY5DTF1Shfsy9",
  "key22": "yperhEDsZu8KCEenYbPzxQmU64UsGeAF1HWJGVeikzpX3XvucmamgP5YgGW2111pgHF36PaACQ3YoHtBfXocqMp",
  "key23": "WpFNHc4ieNNvuE7rf8TJPPpBEBpx7mGCPPZztGUC8wTCRAuJnFB2BGgRSVX6tXz8nG1QCnRodDxfbP51vGfKegL",
  "key24": "2YNNXD3hh2SMo9vfgywtbbQvDxndHBSMkobXHwGwqqK8iYRiC1XqD2CyWLrhkApextDb2VsNFYjDwC3DP9hDkKeX",
  "key25": "282F2yXtyhdzagdCFjNscsf9Jj8H6TAbMB9VVKjxty9bmJg9DcE1kjrLwmky9MtgTR8KnFCWxUzqkbQfm4h6t28K",
  "key26": "2FsQaBScaXujFWXr7WjgNPqtMa3aG2JcDg7MA4EtHoRpnhSQUkdWX6Q9sEaLkq5pj8FhPTRsGRpRAdip1fe9cjin",
  "key27": "FJAjTHKbLt7maDsr7CBtLs14ABCu12ehNQjQ6v9j1zyF8ait2LvipDZ3rhs36SxU69TPSWQ9DWtvGtADzBB3NPB",
  "key28": "48bsmKeqCHAQGJb6i1RQWtXur9G4opT5XVQPyHmPxLYh4AbYtmcL7cSvgs6bvTQPXSvbB8L4wdACyTCouFse3LBq"
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
