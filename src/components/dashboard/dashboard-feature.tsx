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
    "fYhCHYNLQTyz2nbaZcS1LstHC97BsmjpAFAaUQKenQqrEwJnLMbf4A8V3okcb6yeoFa991TQGV2BHNZxSCkDgVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBnU4udbygS6HbVTGHbZGPDdfXvTUA6QvY3j9v1hLCAqkvQaAAXvYscABd6gXcJdpzLa4VYDd44tmuSs5sazs29",
  "key1": "5kQx3QgStsNqbyjhqeXeZZQ9eR87suSeftrZtVPQixCPDCWN6c3or1s3QDduc5U6AXCD5CQGxfGdswsbDoBJDsaR",
  "key2": "5DAM1Q4sWzQbcxb5nCGThYYwtAVUdKveSuEZgiKJESEiyFusUumcBB4g5nCUPHJwV3xJTMtmi3NdMhU5taXKrKCZ",
  "key3": "5TqxtWWokuibWqfFrfyT3hTBc33PN4VcVGYYL1RCkh7NZ12TVANGzZ2yoYK29vbkeEHDGvGn5P8k5qUa8tAxeCdQ",
  "key4": "2nA1EX6r7Xhqov1seTgstK3PgNvTEzev2A8vcpL3dJWXeuurd7XihyQyC4Hc9HdcbhnhVmBfJzuZsUYsNWdApsTg",
  "key5": "4A6Y2iRhQgXvThEdfhkyvbKQXEnEtHZfvgpDnWDQ7zHyq5K9ZarzKTnkgGFT9KygVh4eb7oDtQ1xfM1LRs1maB5H",
  "key6": "5XBDhfJQkv7sqkAzay4X5YMXBnju7uHqZhGkGc7EasxGS9iUyyJvbRNUSRLdJhAmLbx5XQXyLvyced39EpnvPsPG",
  "key7": "ybfoCgcDyR1HYyCqmZ4jZwR4V4TE6QkoogtRzKgpS7gji9DgTyqyb9ySoYMhTVzDzYHKqtAYJKojUYjEEhsXEJE",
  "key8": "212sjPz7acnkE5Xvudo7ea9HEVe5yte4neDU15kAeg3AcAAnJhAbp7PK5s9Zy7D2gQqKuajZTAkmxrWYViQP6nhu",
  "key9": "3gCp3RXA4pANUCK8k512quouXNXAQHuYXzYFEhW8aZbwB2Pnu4J5B2oSj95R5AHpnwG1Jxru2r6zyqSZGfVwPYuM",
  "key10": "4uFujHeg3THWiVLyvEDsB8EbpisKTbTEDqWjsiKcLNYgYErUP8g7vNiw3QQUdsfbL5S47x3VuNjLb3ki5va27s9e",
  "key11": "4MfsCefcMJbdoFW3zK8irZgu372fHvrjgXaF1XS5RaX4zuncpJJzD4aua3zTkVtixnEmf7st6BfupPeXAsjL1Etz",
  "key12": "4imB2Tof6Xyvp5JtsUFv3b2CMkuHKG5mbCT2AeMGo5JYb2KHJHu5D2DHTPKDheDbsqSvPtgSzvp637G6ATvXznfy",
  "key13": "4ErJgEhQ26oeRSbCXZbkA4xiF5Yhbtkcbnffgzdz2UXYzgJY2nGsv9i2fwhRPrzctzDp8ARf32VaRsNL2VSUiqc4",
  "key14": "44kxkurc6qZMobJriuELkBBuPmzTv8L6wLwRQo5WuZgDz9xHJ1hKSkr3k2csCwNwQdD2TrD5FCKXa6RzoywtU2Nj",
  "key15": "5sBTcC1st7RDN3EuEbzwUihLCW2hbf9V4FfWpfA5D1tfTQYNWmB7pojyYfg7NoAqSrZVMypkhdCPgHYsTqa5P2u2",
  "key16": "4GvXS9RaoG6KVftCbgs3t4CsZEM9wCvEen3YW9hurK1rR49vQaKXMcpbRCzuQuU8iRbCTWFcK4pjKJqAKUbs2Row",
  "key17": "5mQwZHZEovaHxRnyQ2oWCgCgerW5Ns8LH6JFoHgt6R19Kiz7QELuVSthsFnhj3YEXQedcmMzN8ag51Rwqm8hbrRE",
  "key18": "5eLUxa8AGpYyFiVqmTzxsTecy7aqGv2Mss42hRVCmuNASiwkA48SKtWHoFDeTA2guGNGBBAn7wF35mJUgWuhJ3yB",
  "key19": "2mAht8hJRTsz6WRooqzGkp9G2YqXhKTqh6iUrTnef8mJDgr8JS5LztEMXhv1aSPcLUA7Cn1CKkkeEYSo9xbQnWaD",
  "key20": "23a4CK3TpmieexcRhyntcPJJnbQcoNKX3axKUcazZsfiVQVfqjAWpABPLe67tMDnqqFPmQfQoX4AcizhSw3yqJQW",
  "key21": "492x22ta4ibYnSz3SWWKcUCN5yWfovpB946iAkojuBxtZirWaqdRxotej1hi17jb1nTrjNH58gNRtychebPHe7Xh",
  "key22": "q7ETZAKVX3sN3sbUikUi37ggc6Y3pz8UzKjCQmehV78YCZDmoF5NFioaV3cXpQZDhafjACindJorFZfi2vaDbLD",
  "key23": "3SvKcPLCsWYBLPqvrGmf7vsVBdzfzcP1Spf39NMtYRbMRsDQRouAJB67sreKuxZ5NLLXdJmGrfcRvwmk6cSbm78M",
  "key24": "5TPWJLtQWTXNNHMi7GUUs1QYLqCDKj4aZwBd6XETmYUHSZc6dbcYMDFvDFc477Xfq2yxCbHnfAj3Ne3noEDEp9fo",
  "key25": "ysPYvEmLC49bG44ekHyhSXDSM9Nigi3WzAJgGcKk9fFj2M9fWrxUFZF1GU4yANdrvjjAKrJMNV4bV9nD8pnXM5V",
  "key26": "2RPXcYh99EMseAy9cqre8x51fJzakNLaLuegQfsrorwPi2ZPzvCEApnZQnLaujsyAi39dmVeLyjmKPKxQBaDa2bu",
  "key27": "3Ar87yyeCiNboWTPLY6MhSDa8BeN5BnJSnvCNE6KDXxYewjLjXo7kuMopYckrri9rpjehxvPnn6npuK6VShJ5wxG",
  "key28": "wr86qzf7EzHAskeWsManNjS67cf8szj1DY582VXyLvGgoRk7JWCmRYTgLJ6Uzf4R5zVRj9YUoaUiKLqguDFbmjn",
  "key29": "5vAjYKA7KhXt3k2yCFYhHYMaQ2aSxC2KpQjf1vPLPmC1GiRYxuYrWLZnzcs9kLpoac22ouCWmda3W9RmQHfbGQaL",
  "key30": "67AfWiQRAvGQSCfFHH1YeQS5gaZPXnM8zkLNVqmDoJMygbEbvkL93kXq6XERAgqZ1CN7ZJqmWmnv6y9rtkCzCp7E",
  "key31": "25ou4Pf5529FhH9n5LuT43Sv7j1mScojVqhzTb9TuVec3EtJudVX9U5bvBAhk4YgoCG5E59uxsXfy9rYMVEn15NY",
  "key32": "61mgWSj94mHbMiCqzkL5iqnCGm72XXRa4NG1eNvcrME21fakwcoUm6eWtT4mZhzUXASetA5GNWgVFdm3Me2DYUYc",
  "key33": "3zX5iaWNt1UCfrWaJB143f2a46LoFooJWXi9M3ou2v68MQ4xWUZpLDwTDwDR8BXuQHmRkaHazpDEGtYodb6jvZfc",
  "key34": "2zi9jWZDCLwc3JS8vLnpQ3d4GHKAEbjRcyRqULPKiFSaP38dYdn9hFENg2axrdSRdZb1Ne4P7GM8HQL3mLDRvt2e",
  "key35": "64rsbXohB9ckcjtU8cLJmQpf7iHjAf7q95bxnfg6X1qeKxuX3ucK1S1Nx9JXCtEBA9DcR28XFqkfS6rmPsACvs9p",
  "key36": "m2WP4w4ny92KdGTBj8bNcTEw5z4MhdRPFjtB3Ghy8NsH8rzDgZn6jHTizcPchVGZfpLnRU4CDSukf8xvSDGFfaL",
  "key37": "e9HdYG1GTf5XsdNEnzc5fLgfCh1GccPqnNES34c8UgEXtSvi96hrpox2nC1ophM3GeDN5N7WBsJGHtRmMek19Xh",
  "key38": "45WKTnk3HS6BToEACAXaFnDBYxB6ty15PY1Bt9iYdWBXgHHcKwzKhXey536K6h7mvJJZrVxsk5vc8KnGCPwnZhFa",
  "key39": "3u94ruEAWtrJgH7vnM7m1Tt6weiu7N4JKWzFJepKANBXPrUZPakdMBDTjJWzdwn8NeHAZfXkfoRCqJPbLjvd9HNN",
  "key40": "4coJjaH3J4qV8drPymoGn17HtaDiEMmo991tKLMwB7pfrWdGcbheSRErjJwDpL9ztxCUNeBKA4QfazsaDPaHgHwV"
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
