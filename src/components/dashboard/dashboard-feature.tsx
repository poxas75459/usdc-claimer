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
    "2nf2vr1L3ckrLtidazTfvk2BPGgDUPM7Yguz52hnJ4Xqt8Y8wTFZZ17yLP25xt9qxyRug28Zzn6wirds4GefHXU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdMYVLsm2gaCQjpvtHVc72fsLDC8zSEYfk1jNP9RWgHTjuE13yMxQeZYgiwqUETvHsVnxk34qFVyjSkYjgXJ8Y2",
  "key1": "3DzCQhwuXUMx7vUFtgh72YyskcoA4a2dpYNwCqg9oq9ggFNc9gyuyXqoG7LMJkC43eL4LNxK8JwDHsLH9wpg1Eoz",
  "key2": "3pG71jXAJEmnDp5qBg4N2UJBwG5mfThgBmSwcALBuu1wkdbJU1wrmS7g8T5WP2TsHkUFs43YbG1tVtC8UoFNC7Cr",
  "key3": "2SU2rEkq46EsX4cq6RuHA1aj8B6uPj42c5x4QtXrWdLnwH47ZFHJyJnRBFds4w9znPhwhQ2Sy6NKXLd2kLB5aAEC",
  "key4": "122LqLshi6e8Y6PPP1XKXhp5J4La2X8YtesCjKjBApGA6U4FqSsVoqS248ytssc6p8rxhFJc3EGDsA5QxuZ7QpJ2",
  "key5": "fHY7Qw4iC7FttD2qvFSMx1FkozQdPRhzJyb3AUDibs9cPUmmeLhNgqmV4UoZF5Kr3zKevvrELYzGYukhMUnyyp3",
  "key6": "94TCy89bxiTA62pYVqQDWXj3Yn7SafDxzfSUXhcwSw97Qg9ru3NgEMFtXB9jo3cUJJRpBdZyaBqXYcP7iBzj7BQ",
  "key7": "4koh2Wic4hvTMWFDtxbsW6ALT88vBnSTJq7etqvveamSzSK4Xwgaf3xXe2agXmdwtyTtyJWsbb6CJZfzvYVkeukR",
  "key8": "MiXX3zqL8nJPXNjWJfKLTQiCAD6irWBk8wF2YQzVm3QakSp5Zd3Vooa9uWtfQmhpfJgNKpQKMLvfxwcW8bYmthu",
  "key9": "2CsYGLoLwQYz5NBAU1B3o2WafLwG2R55y42cPKNRULNteeNg8x3jvFbUj4NWeN8cDWWewtRMJzT3ggxPTLkXX5wp",
  "key10": "29tTy7PF6eN21EuvRVGz1ggjYAGRybHRmzvXm9rGSqndh5vvmprTdM5iT5B8AtZWf72cnSTQxMexR5bRdgYDLSxP",
  "key11": "52gtvSTFt5sNjsbsapZkh3FudN5BPdviunyCJovuv7VHrUBUQvesYf7QEA2nT6uhwbRF8iknz1Tmtcka2chKhkRH",
  "key12": "xZGC1A51gDdhvAN6jcJur6GhWwWiqQ4gLe9Yzfr9dFBRzfUTNeGNGkFsMGH9iBZNuusCgmH6QEm1v2e5DBcnLLm",
  "key13": "5tJpcf96P2abvjMUnQtUH5oxjyMs2V5ZJdLUSQjDsG2UzagSFGooy4XchBJ7pZJkg6TLGxgH8hKjG5Kv1zNC8mKx",
  "key14": "3xeziUpA4SbmMkHd9vmPupCDDNSmPNoqzQBvU7r5GbA8CmqjQYcusg7ichTZowodwzLBDsQc5qmDz15BkNcuFrP7",
  "key15": "mjidrcMkYQg1JbXFw3hkDbJq5m9iB9uVK36bskV595DVfRLcMDgj1sDgG15n2ugEi6LkNmknzmKw5H8YxYxWoUE",
  "key16": "4XsFUXGX6M6vBNLF8ik6mxC2btBNs1LuLT86y6CTFWbFhVBw837VYFp7rH1E9HzGiiGFZE7AWs6ci74WaGtf22DV",
  "key17": "V1XtZHWuP422tqDhYGWhWXtV4UfiEaQikcsrTabNk2j7Hfy1JKSPiGdCABnYFwHqWwHp4RTErt2kB16A6APzShK",
  "key18": "yij8ChL5sb9kXrE9R2t6g91XmGXX6wsh5amWw1WM3r827tCeQo68BfKVzRJ9Ui2hEeAdAyVwnXtwn518PZkihPK",
  "key19": "2mRQLqs3GvvtCLmvxyTbETEhr7sfYQBLB1BHZV37wNPB9JtrjZWRCyR3BBbHNzLRMhsjCdtfQihvqUPK5pDCRQ1R",
  "key20": "47BAYWBEwMhUygvRoacZV7bBagav9KUXNPN8kkkvsyxiuzRPp8Xrc7HesA5WAUHB5wajw8pkUCQBnwf8ZpkYSgTq",
  "key21": "5fNfht3ssE9tHs68KfA7qfmhN1HDrihvaYBRkRQMrG6edz2gZZUjgVCN4qmKhh84DP7X6ECmopZ5zFMzY6JBYy4Z",
  "key22": "5YyLYALpaP7VcUUjeBQvhNWEUFv8bBsPu6Psgua2M4dGN6mzpFG6F1ZMAYXyi9LpDuD7mnjx6uvJp3y17bLJGvuX",
  "key23": "e8tG7fP2h4U8FRM1kPW3ptmk7hQVstqyrdpzucReVmdSAmw8fJWQHfoxDLDK3ySBibM5rwrEMGV6hP2CMmsehhr",
  "key24": "51PzetJ1z8EAngupGSnCySbRqCDnTwdvGgLVj94Gy1GQqaRKdhQMBbfmeS1C7ezAd6Fdnzz1eotB91w6iG2NG4V",
  "key25": "4M7cyMJ9HVYBEbE9vQi9MFPw23Bikhu6eX6DH2dpY6YhyLU23nEEu2p9h1qYFSsebYSg1aP3HbAYen9iccPTdS9A",
  "key26": "4ufJsVC8TDjZGdDATx3icrp3UCjpZg8iJAH5DVX3FkH3MnPZxHPfQcgKzewD1FYZ78ByHJaqWCUeAXoTMFw5sLVo",
  "key27": "Q3G49oDvCcxmF3yqonZpat38gK9wZL7sDE7grMTa8wDJtGKAaDRj443LyxW7nG96g1TJiwKRAEbWpfhQNnpfMBp",
  "key28": "z5eHhjiEVXdm8mxLNfRyaX8oyq2yN18wY6DSG8L5UkpjNnhU6GupA9RjSZMMpTZoKWj9VVVNVwU4xoQcQXXsXuD",
  "key29": "5MY553zrdjEmYasrB2AykHGPgVtrD5GQn1tvtGquLAVUPyE6QcqV4kiytJA4jxCLMaBhQyfzXrButNvY8WyJPGAQ",
  "key30": "3RHKy1TgDzhRhq9BvHDjX5xUDxmxJQAfx5cWeLTcppM78QfjWJ8SdjAGMLDX3PjLaMcUuEyw8Cg75ZHHftdmdKV4",
  "key31": "A1pJk4JNYDGPckEJxW8s11S93k3dZohWFz2i8sEBpgH7YdQhFBmXyjja4wuQffUR7azcrsDnWsMoVHQyvuNVAmH",
  "key32": "5WvaX9LowVxnMtBSyXXbQJEom9H4jsMSy8FZZkNj6Sdzw4fdVZxG75u4xcPdo51he9PkEjx5FUkvt4XLD6XVrkUg",
  "key33": "muv7H3EshY76eXRq87234nqLHUehYehAuj9sxVy2nfoZvXASxoZg6AQnYhA5V2G2qyg3AxAJtqnT9TwKNDfzYCs"
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
