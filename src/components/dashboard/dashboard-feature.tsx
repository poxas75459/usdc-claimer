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
    "2TASNfPgVKS7siurKSEGKaHQvzt6GwBCSzgNfctmaVfqj6mvsRDw1JwGxSnHBaJzJNmaUpzAn3UUoRaGPd5nBxZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVH6ubRtet1EyC2CTyNgsBniZce181PCHwhNH7WufRr9kEtw1p1AfunGomSKT9cL7hqvv39hnrGfUqaYbjZ669H",
  "key1": "5sCYteNqArJyFjRRk7u4c5VbzGGNZfBtJCSeGMNYKMJDTpBfBmArxSiCBSmexBMn9EMZrtm1ugyTF9Nh3ckE5pFq",
  "key2": "2BqcxtuXmwGEKUszg3pAHpkDXxB5kMSsTuWiwTPwVUyxCA4jL3FDp3WTCbHB7exWB5nEpABxHtpVfJbUs5FKRmT1",
  "key3": "4Asnnoi5FdQ7Xpcuks9RZBXX5JNuZDsomsZPryC11tDBG4eCLzEt1K97eyMcn1Qy62ryFttzD3Q68oKhkYtinpjK",
  "key4": "4jGZ86LqUKeLWzU5EyWr2XpvDXgLhRkxStDrLRw1ST3fv22E4wtWnUwvFeAjQ8sA8nANaEsdnzzb1a8AkcahydAv",
  "key5": "vQcXY79D8vwxhyxids7wNaT7LcgDByhgWA9r8ntapgRwTcrv6mGYyQNYi9aSwc4s2mSGmUWe9GzYBYBMhFBLUgD",
  "key6": "2RpJDyopsNmGoQsJZLyzjCgZhrz4UNxo7UWRLuNjhtWi37auDN9qzGVhSxzPZEK1QNmPYkrbm7JzZbBuVxM3H6es",
  "key7": "3pesBtSozfXK4yJaboJeEFexX1VptFwRFBs9qbjNLFSyJn4cnLfiZUTUB734sdyAqSXsTa7FfJ2VYgDef4QkkjZk",
  "key8": "woLtC7zRWJbpgvisv7kYpgzzN6eQJc9B4ejmYfwFhUuVckdbozFLSVDRK8XBwTSqjKq8v5dWrFZeUywZuADKEqp",
  "key9": "2mRZcumKkzXK7tXw1BubwSKi8zk7tQjkwQjRucTwv5iERmxFNprMNkuGSGqZJSnWG1jDjCsGqr58aU4TNyoYwna",
  "key10": "9LsaXB4iSLGCeMsLUqo87PfE7AjDnd4sQveqJ3b2QECoLxyVNcsbKscXZc8A36JAkf25qT2VWv6WJS69ZM1fUAG",
  "key11": "3E9v7FWkHAFGy9KejeSrJmWY7XM8gUxiJ7f4vz2fsZ9n3z5c8j9WnaSFwjgGCQdzWnb2SVaCCPSzZCXqCtpQ1Wut",
  "key12": "3veCscy8qWHBNAvpSxfhQjZZJyadHWrKS2gSxRFbEKnFfuCKp2j68djv1SCEk9rsSeFZJQWfLrZasxvBDM9wRzcZ",
  "key13": "mtc7iM2aGebCcf1hMCtSJuGKZ8f5bSmiDjKgyTCQJeNyT1Jvo8ysFpKaW8ZP4sUukgJKPm1by1S6Nphc1RuW22G",
  "key14": "34v9ZLK6vUxYQ94qxKMAEdZ5QtpkWxPn84CEWvmWkJBNb59FJFtnJJkvaQGLSyWj8E6BL2dLACWbjTYMZJXnMRZS",
  "key15": "37CeurHX83CENaNPqpKR2HEUdRKpmJE2FCqaJCTv9YENLPF7xSPjZ8Jn81yH5fsDCc3PGaihgQMu7V9oWHGUtN6p",
  "key16": "45NqaqoGgeXA5nARhGbyC1LNjYBtytGMdmyjFcJNuap9DmJ3qdcFKVJ6sFUtu3iKgcfHNcqAFMj7NBgU1ofXam7y",
  "key17": "3ixKjc6rxm3fRzEjrLMp3tJvEFWNfkofqqatGkL4Rc7VmwDSHY4DHRyhaYSYFSNX38VimM8CW5pMfcC6JQerGnBd",
  "key18": "fhErSNEkKn4dSaNwniCNVQfp2e5ggSACjZ4FSo6ZwfXKZehtYhn12MVVppVa9iKRJsvy87ksZQwdS5qibg1cdeG",
  "key19": "59X6gXdkhQMRP8iV2LV48756w8GLTLN7ui8h8f1drC9RckmGnPXoxXBipd2Pk2pctrZgCwEgFVKrcyWB1EUr6Q2A",
  "key20": "417tc2o6wyFbN2m1zLknirSRmJ9dCCPUPDkVaZHjM6HHeTBzBxGYYYBEs237WLPuD3rPoJqJ9mRukQ1dfS8bUuZP",
  "key21": "ZWq6v3DB1a5RxY5k62XXsiQmCLEWeXTuFgBU2GCM2nhoisw8A3tQSBMSxkTn66XSJ4QxmzaWzn8VU9kcMbZPghU",
  "key22": "4aTfYhtgGcT41imneRQije8j5BkYPGM3uZv2m6YXYC2r78q1fvwzB98NELtRo9Gt9W3kXYVaMxvExZWBcDZ8y5cC",
  "key23": "4TAJd8YDg6cuiJAE85k9GYRAxK7LmX6rreadpBq9KxidnZvXSRze2iKZnNWnrDT7VqaAMDMX4ndJZW7M8m25TfdB",
  "key24": "216HTAGE19H7c1hGF5eeSS9EYQbNDc637qjNEwgNhp2wEzLqWmBuvbUKgVGTKybmUdvYz9XRarfAbAwXyYdD6ENX",
  "key25": "3D5RTaNL71rLTNA1zfho4gnPNZGXtyNqkEtbBihgF2L987nuXrmonZwkd45Usj19S8sdtPrG83K6p6LWcGwd6bxJ",
  "key26": "569YJLLgUA45qZCoaNZbLTVf4NfnMtmcS2jbLmoZsFpSvWZwY5QtPvFDkacuGqCXRHskkPtu5ohvBaHYHXGT5kVn",
  "key27": "5fDyzhebzXL7bofLoayx9iTPFnNzAw53nDsba4ZWwb9XxJqhnFgTuQADrAr6hytVic8eeWQ6N1jDW8X4Xb23ZxfL",
  "key28": "5Amk8e2ngRqyzAZnp9c76cB8g8XdcqKMSmZcumCTJSa7TYpFvfyjL3UiJrDcoAq334GQAY88LVHpt8hWNcEoexE7",
  "key29": "5NhCmikWW819Rtkp476Nifd5K3vSJLwazWduegHcGkut4BZHFpa7GYFPJrwpjTRXmTPtEPM2Z4VBcSir23JvyqJg",
  "key30": "3kEHjXeJ6sFaXfqqNmFZ9mNQsCeYCwkpvGDDQcSm61symAczqwnu5sdye17eENMhZWg3EYyGFDUFXY4pxaxTY9he",
  "key31": "2VmPpYK4E9vuPgfEb3gF6PfxxfbEpbYDgjZfyzMEcNw3qkesn8tgq9AQzcdScEnU7MPbU2fbF2ZfrxxCFKCb3vxd",
  "key32": "2H2RcYWY6uFRfZScsb1vkSvvra7PxqmjwQgF1KQRHx17DpgX4BziYfPN7xFmmPnCRs78uE29Gycijarj5gH6UQUu"
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
