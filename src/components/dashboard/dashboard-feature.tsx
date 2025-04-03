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
    "5pkmoWRWuS6rLMfpKBu4kzWQAknTNchVBjM3ami2a8iK8J6uXb1WGCpLP62XUam4yRumEfg3UWgY3sUbN2bNKfTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVoKF8gPDYcjgzkjutiisPPGczbt59n6vV8f1Ji6NRUrLBpsTyyngK9FGZmUW7oAKs6cZiWJZ2xRSsRBX4Sw1Li",
  "key1": "2nVqhB3njUvb1JuW1XupeBcYEsf5XocH7yF9bRqWszRDzWkUGcM3TQKt6cN4cvQKsZkCCvhdnnTRUrhsXcySsScD",
  "key2": "3H5UUZxgqoQw1fKck7DUqRfQuw9WgFCghENFmNZ9th8ANUehRWSCUFA2VLU1itxBz5kp1DaKeY1iH6VtfBbiMabU",
  "key3": "4uQYM5QppTSaLL7uccFceqwo1oP9Csi8F2NqQijS8L2awikgkzdNHpJ4HUTYdHwHdJErNyeZw6RLghhpA6jUDc9H",
  "key4": "38bzAro4k6zBigDN6VsLvifEcdNzRxJcrw7cehYWfUSGNHGMivorb1BJ8xWyiWY3rYThLbzzqBNsTfpcudKxVHmY",
  "key5": "4jSqMAvLHSRrCnwdZd93VT8zXEFtfZsXXrLcqp1U5LwbN1NGH5SKHYwSgXr39oQzRaTYPUARTJ3LECGXSUqFnLqm",
  "key6": "5Q59WrDaF3KnKkzzTRxTjJRimXNXRy7fUHsXnKaCvy6mi2uoZv8mS7KggW5h8ivAjDgvQoVRFkZmhX6d1buxbnTn",
  "key7": "5g8ezCHemQfoyvxETkBgLgmHMvgPevE5GNFiz5Rmugqk4KGpq6nTV9E6U2otiMeWeqFcQp5vvMHZGtkd6UFxWo9z",
  "key8": "3vFeKrWzzZybScwiqGhqT33XzNZjEg28ojTEuiubuWNXvyWjFNZLtfZHUnfVeyxiphGKCWZSgppXP4QcGmQu1Ygd",
  "key9": "tp5zSxADD1hGrb6QZ5kVGHKZ5z3Ejn8GKEXgz6UNEPa4ZN5L9Y9cRBvFZVBtR4gKiNXu9yQy9FLDwTo7DRiEUxR",
  "key10": "3mN7amUVah26tVFkojULAn2T1z2HVWcApg6T42dSNZfxx6ddRdUzveaw4qMu9tNUaEgGDuw9pztYK9Wc4oFwZpAD",
  "key11": "4EkCpAtaCqox8Qf1gJvmBs5AkqNevMcco37nJbe1QDqaj9Huz44ZwjFuW74mra4pGcg5zqb6di77njTA6zYVC5pW",
  "key12": "23BuC6AsR7Kub1erkpyL96LXrSrS7uMWy1bQhaonVJ94ThtHoy2tA6Xy2NUCrY9KtoJhTdy4TmLXAqQveSbPtD6A",
  "key13": "4q464NAgwzkeVX1WjTjJZ4xxFGcxe5a99dNM62dtre1Hcf9fwPX54dtrmb5TNGzp6BHSGXqpYpr2YjSbnq3FPJz1",
  "key14": "h2ujDgrU8NrzoFxVuhY9iULiJnHWTz1nEZWn1KHbuyGK9PznwksA6rv8pGHMBFfXjsTo2RdThWgAHM6DtmSMUHB",
  "key15": "5EHYRwbBtLQ7Xuh9W7uVwHtiYooBsp91h3YhNs3TCCRuoCbEj2MQRK88ETzF7Z31QG8pN5T58AKDUTpV9ncZmUpj",
  "key16": "3yxedu3kVCxDY3ZwWNy9Qc58gyxvqZu77V7Bfnazee7AUaG2BueqfcFYwLvueheLoSAqkJk8H1nuVCPEFenVdPMi",
  "key17": "3gJ5aLSah1KNcoSNnDdURRFLKicYQuFUrq7Jd1TKHPqTGah85hCJJbTH9cuxriCc3HVLTcAaHiQ4Cm3uWd85Zfd1",
  "key18": "48CzwCPaTriQA6h4U7wLQqe56TKfXLEHS5HoQgRCsL3G7qEX1xKkbKpsqDoTeqUVSMq8FVxzHQopqQc91QJ87zyf",
  "key19": "5KtxvKu9YXDYGvgQNJd36zq3AnmckxVDerD9QsNsYQbQRN8iptoxC4C4MeCU8sFf9bc6WNhxHeCzJEE26jppyTav",
  "key20": "2cHg4BeiB3YrKkXgUQ15HLJSBhEAKs4wt1HC4Pxk8nDhLsoi6sVhvyAho5wYGcAf8Q2KApWnWJba5Gar768LThi8",
  "key21": "56Pw1fev1CsKJVDHPYV9SAU1owd1oiEUwTrfPNVsFx6yqdqcUzFB3kDMXdZ8EwiDh1kZCN4JzBtEbvYrh7Cj6MwX",
  "key22": "fk7HwvvLJqLU5gqb44k4yRZ6Qj6HYMfaJJdN3FQ4thSftH4vXHsauicfr84BcrgAZHXTpHvMnad6nf6WQ46HbYh",
  "key23": "hDbSZF5fs8jdsdWp1NTaFfnS9GnyFAyVi2ABkm3CfEpBNAdXMR8G43eDEvm537m2wXux8dqJmRxwHVaxhPFWUEm",
  "key24": "3BSg6sjz4pf1jbpkyPeBWFE55Yy99KZxNQrdVfuaPhrE6apZQvThy5yPAJkyTa9D8kBr1B8waaean3dFDh4ykxEX",
  "key25": "2NBskRZsnxuF8umCr6XNj7ZEsQREEc5n266xRXbmeXJM7ojKusyVc1hoCLFgfhtbsx7bzwFzpHBRKUWm9cKfrDkd",
  "key26": "wdg8uqoUKjM2war1Zegwk2FZfrKNMDcRbrd3oq9cankaC8HzWbT6hX7Ty3ScL13pmqmY2TK9Jk6NkCuXohn4GC1",
  "key27": "34kt4pniiR7Lm9nxYYJQgktjKfbt4aaqS6ZF7uh6Xv2TnBQSyufbJWz8zXU8SbgicHVgRAondcAqj7QAK91Lf9z4",
  "key28": "4XY3qT8MXAh8pPWW5JSzJsfFRs7euNk45dhD2tH71L95cSKHkUnZZw5mR4zf8NrbiDL2Rk1ozxRDYh7nTF9TtJc4",
  "key29": "DUCLyoZ2L2UXwPnqSTqK8R9z1diHRx7Khmij71YeZdYhvXsESDaoRvFcMQh4WfF5SMyUNZ9DW44VL1qoR4mNzKg",
  "key30": "22GeHRsBH9VV1tCmHyHyLLMERnQ3xW1fpYdm67n3uHBUz6iV8orNzJb83KGmcKzAECFAnKV8RbYfWtyZNi6ccP67",
  "key31": "3Wm8WAoXQm7J7EZ1m9f4UrmiMefHQLeAHZ1hUioiyjhgUazezRcWBgjvvGNXyUJvn2Fgpswxk62Za34HGAFvd2Pt",
  "key32": "39414YMfXNqRk15n7oXsnG6oYGa2xTqS9hHJK15B7CJtseZUG2zHRLphcbNbZwzt5AXcAc5Bbt2nJ6MTiVxQ1K7H",
  "key33": "3WTsG3pQyfQPYwgDNo1C5fFxgeVkHwEnQu3NANRahVGAfEPixMCufKhvtwy8y8GXC2h72wq2QkSW2SC6Czvw8ayQ",
  "key34": "63XuWcj74an6QgTnzuDaofDP66dQsPcyRe276KLPtBZKhv9dUNQRdbMHy3nuneCAhe7cxMRy1zgvn93pc9YDiUPG",
  "key35": "5zpposn5vQSSvzRDu9Trg8i7mgw8dJ26QBN2trMK5mmAdAsS3K7M2W91BEkDWwyWgYYkW63h9AdMkoJvL32tuCLS",
  "key36": "5uZZpKVCe98YRHjMs5vR8nUKbF6KNhjrYjPfRZAo2sQ6wHFEP46XbfcPqwb38u5ayGyj8bGrxuLBMT2jdV7bQRwQ",
  "key37": "4VszJmKCD4opQafku69MWpDLsTjYFCu4zP6tjsp6uB9ETpDpJNhfs5VXGSvtZf7tx3y8dB7po4MDFDiaf5NrAxgJ",
  "key38": "DLeAmWhC8duQQZGLFhgVb9VFQ2deHruXY6XfQPTHssDMf6fg5XEhpkaxa2RwzVJx9YJwZF38Fty6AQ6tcqArKg9",
  "key39": "4FhJrNdqwg6KRYnZzTuzuEREUFTBGirKHQNxUfrN7o5ffbGwXvMXeL5Pwkg7RJyyrcavCEXs8VypWqoDzTMtnNcF",
  "key40": "3qV6ompdsiPtTeBtJgMnUxLqTw7asCUdLzhaZwYTL3XnMYvAvEsqwhFXbFUniatUwgmyXKADkSY25cwgRNrupMSe",
  "key41": "vW9dqHMVpC77Kstf16HWfdmtquDNiC7tWVA6RpjunPqey9gfSSP5DTYPWEQ35qKSfCiAkYa6MfHow5AQympdhZN"
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
