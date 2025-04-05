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
    "3T5mfcg7cbGT2Daok4Wxnugd8yE1idcyr7a7ymfGA4TQDGSyeAVMTzZpAjmSHTN6vV86R1TAxDy8XY25vs5Z92qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WU9bA5XWWQwxEzX6yBPFLuJAMjny76YA8VWHL6cnwGQdu2Egrqf9kSkwUmcHCdt7pnU7Kr7SR7NxncDfebYr8Tu",
  "key1": "29ioZFJzkn3VURpnLJ4cmpFE5HTnUry87VmAjAchEHZrN1WE2V7NHY2HNzbrvmyX2mij1VCaSubkb1V63LNYLcwS",
  "key2": "2rqjAKFRHfN4PFJwxNzjrfWaBbUVy85ktghCYiTDy6AtzoWWHtu58RCNtx5owQzv4oN9fkF4z5A1P5ucpyXwXtQw",
  "key3": "4gnx8C2Bm3uycjWb5Ni7e4yqouWcBDZXjxkHe7XmQdGhveEdto8Zab5PXVejNboxyfdaE82TbFshfjZZtmd9cKJJ",
  "key4": "4jSpp3bsGSFoJ3jgYrKPDW5HdnEt5gJ1QPQ32wZfVzNMuXoc9RnTPfy5gpkr7ZVzg9gbZFR8fo4HT7svrx8V8ov4",
  "key5": "uro2FojGkfCkTeTYDjdkDzDQpdLspW7pFtnEV2PLDTVzEpdFuK72nGy2e7AF1EKjBjNWW6XZYswRJhBjFcZtN4F",
  "key6": "56bPUvTrf3uyx8iMe2MAjmoPvXR1YXTBQA9EBXBf2vVTkaEPzFKmBFre1qJygcvRgBp5uPCpKjqNmEJPrUrqjXC",
  "key7": "3eWuh9k9L3wV4UpVmQ538uWB6bVSwqYhVqeXtG5XxktnFE7J4PZtvdyJfkNCEMuBd2S4vAk7JCVvrMBgLK2SKEx3",
  "key8": "5xJjybuGCimGCsVaoTtHag68qK9c7NgyWZqAPQbxyDdhVi6UqCo6codAsFTkVX5jEC11naU7hckSAjd9Wpp2j8mf",
  "key9": "5Ppcm1e2Z5hKRnKrhE4p5JPFqaJZrA3D8Y1CEhaWBAsMGEnReLSATsKm9DciLyjxioCNvVahmZ8hLgta2bTaFvzt",
  "key10": "3y4nQmYseijunGErAcRoAj2gZabdwnmdGyUQ4q9sxfpwsGDJgynJewbwkwFWjucCGGU3CbGVnWLUHTdw3aMkTpxZ",
  "key11": "811wUkTz3JjpdGamCDgFwByLuGgY7LwDBjSsaiPgoSzF4CFqyywwGPpkJufM4SwrvRcH6UeNZnMG7GTkb3jsTU8",
  "key12": "UunaPALmm2oQrPxGWSpHjyq9FtkpmXvEMRAFtURqps7diViGxJw4N16nMxdm9WDSbP8qEHa7AnN3hYzgJVqD14z",
  "key13": "2e4iLTAYxpY2xJqNEiUx6s6R12phATJCGjQBVjZAdpQdjZEXGah6wy54iY6zUamcRPrJ84i4u96j9nTXeZqKBjRH",
  "key14": "51EBog7diziihdrapzxLRg5PfopSUBcFxtDWFYdHCzvdssQxPNCEYHWZ1AgkbGbxqyQonwzJnTG7BTJb6STmeLwa",
  "key15": "2dTz92NHinsNdtrmyGLmem6BPdZb7dNFxPqRGdjNDRdQMaX9BzMvH2wUyBx318iYxxmKooRcaYZpa9sSZYZz29rN",
  "key16": "1mPKxyfyw79K5GvrJGkgWxb59n3q3oHfGoUWwrqxzb7fMJFrCxyqpswe5LRP3rpCe2bfbo5GjTPNMbDU4ewmcMd",
  "key17": "2Mv7tzKQpqqHKL4j6xqpJ2q7Tj1BEW25pkj7QiyHqD26bLqHkXugn7au9nj3FaGGyUdNHEffkTRGNMsE1KckoZH5",
  "key18": "TdbNa3prHeJEsqbjm9KK5ShNathSqX71jXJS1L6sLEqz11PGDtPd7tV6YgoXNSPyVAT9cGdcym7FdUnQQHmbFmB",
  "key19": "44PJsH785bkBRboNiTSk7DhEsFoKD9jGqHKTzsfCqCQQJpv6y1a6pRGyTfrJiXatqsZpDsbN7YhATQE5F4zQs8p5",
  "key20": "9WNsxGSK8P9D5D1ncWWab25P3vxsooKZih32cP7jxF7pqhzJV6xpcNB6QMUTWZEvYmJknLyf6RAv8XN14UPfC26",
  "key21": "2v9Upvnnb3bixt7nVS5wDRMde9wi3pMWh2EBWWcERj8AynyxKVqXbfpUBfwYqZrRjrKkwgLyVqj5KL6k3MyyDfzq",
  "key22": "3gjH4PXBFxK7rK3G3TY8y7ThbX2S7fXZLdpT7S8X1RChiG7Qq8oqiGYNZGFQ6aLkdxXcEVoCdnSf6gGVryGXL2X5",
  "key23": "624S9zy6jigL8487gwGMcYXeQVa85e3EgVpL1cUzApYhYWt7szZv1JjRfDFq2DPEMZueUUFqyQCVvjAenhFmGzvn",
  "key24": "2hZrjj4K8qqjZziuM8x5DPe9gfvTkqLgpvdixPEwfk4u8xAYPoD8ZNfHwTyJJHUfCyLc2qYXRxnXqeXWaGWb6WPY",
  "key25": "5KzHKUSHMx9JxjKazSkyHzvYLsLYDRHsbCNdA4YuH2sHAWNeWsyMGzBzhb3VBv1BiDKF34A4FYp8mbp1icJpkq6",
  "key26": "3hEkwuADpyRn2qmk5h2hyyBbVUa3PUpwH9f4Dc2RLPXiMMSavQMQtvzZRyCqQbuNQ3VwXf31mmuwSYnEYpGjgdUm",
  "key27": "2nfhNqPNhsH7jP4QUbycys1xMhJfYj8rQ7NUrvE9aLsggoJsooE1QfwaqNWaXz9JYshuLK9797gfVjvXHsgvdMAR",
  "key28": "35hS616yRyf6WBePuaJ4jy961kCresTWHh8EzXgrnghjoXb8q8VdGpGFhBt3mWU2qGBw4LH5bdMx5mgtF3pJyM78",
  "key29": "5yuAkLkCtGtZ7PsyE4MsyTN6JFU1F861FjKpYihPELs7VWS2KKY9xwkzqaucvfbjCT2VnRRhVUa2P69EXiy3D1Yp",
  "key30": "59tXmDkeJ22wg9iMZEzxeW7CH543JAMw6VB8zKSZ7cjYLkBeL2FBBWz88jAswhRv5BPy8ECcTxcMtgFXoK4UpbEt",
  "key31": "TCeJAEt2eEppFszPom5usJaTF6poHV9nh3QKNjJqgk1uidYKuJyJqtJCd8963GefHhB1BRB7fW4e1vyBMvikEor",
  "key32": "2ZCqmawSfhVkwQEkriHMzopyUWWyTADHDbRgYfJouJFxFd8yovAVHtA1qte6YTwqndToeNBKrnLgchVV8NBaYX8n",
  "key33": "5QETNxDowJAZCreSxY68X8mB1JA7iaPD56AVMSJcr3o6bHFzjf6wvURViEzqXNpEf76sQYmQbUd76QwZgwB3yU9a",
  "key34": "kutaWBRhLLc46v886WahiWoTo9fqB1Xh7itECvVADAXgbgAnXwk4CEQsS7E16wgG9wxEsjWBJz2gTREuJy6J56F",
  "key35": "5jF5HheedEj6iPfSMjJgV7eqfdg2xVWkTWqLrEB9AxVMbz9SM2FmUGkvzmYHX6kJAVccFaoUKcaJUVM6bqwt9A7A",
  "key36": "4mSE3QgfzTnkUm4EdrW4XiKxVJY5eaRucKca1JcUwmt8wyPjYPjcggwdYTaP9ZJyrMpYh6bC4AGenzHR6Shmxmee",
  "key37": "Y4k397kVp9tRSVbbCg5iZCiL5Y3zCNj5LtPPaXtautwQsvpZ2uUirUJZ8YsZuEnG7Y8zpMQdDdm5kM5CJm9MWr9",
  "key38": "4VgcSVvRp8LTaeqExgDZZT8WdNDCretDQcHREiioCGi5G4Mgjsuym7xR8EGXncUJpJcSmDzPbpG3KZ1XjMPzbtuk",
  "key39": "2y8STPbKrWuMvQTR4TVh6bUQbw8x3DxN6TzMM9wfZPBYXJKjXP4jb71xXkbNau7WTEawkUQUq2n2K5T5BmYSBqh7",
  "key40": "5WFXq42GYcUiA21JG8sasd7oMX54Zmrgm685kHcdh2QCTL1UgKXaDaoyFf5jndyJx9Zvw9JUXPX1Nub1ZxJZbvjq"
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
