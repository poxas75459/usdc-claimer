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
    "2BHN4fweDq7LY6SnfXf6T86Q4hCazSsSFUgo6njDaU4QL2LLEXFZqc6ZPcQrTnhD4XRQXEYb3XyRpPHrtMJz1Cwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22sJaito1MwqZGfwYBS6EGHCAg2Aaf9bdeZXPgZyYK7zLwkMxzGQwnJos3WeoZJFqCey7tBjpbrXWs6VgkE3dFxW",
  "key1": "3SpDqeKKYaAcqb454zPbXWpWDT19P6yk9N5wWkLSHQ5QtdnMVeMLSdsBvK9N6HJ2hBWeUcjkUBtZC3tuUybJn688",
  "key2": "9bdTfTD6YdcqLCW24dacFtLj194Yx8jWK9R3YczdomdudKexyB1NVssakcvwuQuwr79xnxJbFWmLbKg9tdv5aA7",
  "key3": "2MfPReBYw6jzYbQPwfvDKrzKBi26L8c5xqP4YtJC3A5K554st1NCJ1Vjvh2x74HGqeeZ7CWzG4ttFBBzRvTUbKRS",
  "key4": "3S4wHWNQcXBJ5MfhUguBELM8V4yvpsTGNREZx8QYAKabhFJshZs7yzh8DPEDpx5T13Rp3pB2z5ZyxktBQyrEAU5",
  "key5": "4NStmX5hazeyWLibmrzpNzTJ6cG6WzBLiypD4vWoJMitfAKxGCEWHDZUyQXyJQpwfhN1uTath3br58bUtQ2HCxnE",
  "key6": "37JgTJ4UuPX95i8ULTs8uxyDbKN72TwCSHsVLkqScPPRvCXQfuXMQyZZUhGLQiGYxkDNBfW4SXo7KbZPer2Kzv1R",
  "key7": "32PUpNob9AduzPojsf8LwNkPB79trzrmrB5Thu3gx42nvcG9CmoYzNx7tcKYV7VDPY4biPwkyAN4sD7tDXkrt6aH",
  "key8": "5gGYbwUxHx58sbUY78MAr47k8u2NzEGJEWhaxW9FbHgN4vX8S6TWx1Yji2FyBXj9tea8gksJErwnJ1ssLdX9pUGq",
  "key9": "ykfsgH7S1GQS1EGGuxq6K733mQph3GKdzGXTapD9jeBm73fXHFatfkLVAPy3i1KPAQpMgTT1qE9Ywirt42jbZrw",
  "key10": "2yUuRx6ZTgisJeV8SgUnfh5NAV97Dgs8uDxGmKA8muyEJMgsRPAXAfEmHpNnSGwQBzfa3YiTL4ws3QQ9iHyWw9U3",
  "key11": "3So3RDmz4g18iTiE3u56oTNL61vKyywMfbjzm7cYP4TohEy1KVWp9QPceXpum1XJkFK4MpzAUJiBfVxcnyzL16Ay",
  "key12": "WN2TzwBRqdPAtTeq2qpNVfYbqcHbCKMCR6grr5n5JY3tUJsD7R4CzUKTAEGaHQNCLvEBc3sAsGW8qyD8htMaybc",
  "key13": "2fo8pdoyjCFHdofpWNkfaR1ZAF7MYFYJrWuhy2yvUYJGd1xVZHemNN3T3zh4jnWw72FSrUqG9iKE75bhxwdBJL89",
  "key14": "3gK5A3E4VzMDgxQgJc6XxN65ZcfBCBe7whdBJ5dbYqhLRzr6CPihjbe8SzgJB764BSubxP2QHg1mqUYvACQe59eJ",
  "key15": "2DKZt8d1SsH89kfWLsYDcpL81955UBDpgqnWiT24D7oxfWsM5AYPQ2LSgLMYb7uufcyMp4RbwrQNSpEP6RZB8qKH",
  "key16": "2x6kxBhcv9yCKhAR5wWhw6uRzQeDc71GgoZsVn8vE3nX797CxVwrsboLYxkVDkhcVkxkk4KnMjNAW2LuyzzFWJhk",
  "key17": "2dV6MbRBAAyQPyBgWbEopZbe6HS6DpD1CE9ruwb9PHnroPKEswYo3dM1uZ3xfSzrmrhxV7c9FvJbWHwSgbkdJpYX",
  "key18": "3rYnxjNUc3rWFPf4E1BMfnKLgdyH7RYDAe3L29Ha6dN3M69BiRcDoYymkQhm4iQ3HN1JsqfXF6LPFkraReidisS4",
  "key19": "4JrrA38kssbtscNoFXFEjcxqqRDFuxMN4MKyYDfvdoJ5sEQSw3yLkgkb72wBH7MCKSacyVRHxa3JVVXNBHEFuHKd",
  "key20": "3tooXp5gaUQL2Au7oHN8BcxsJnYJkUaCQg5kkYSXTALa74sVcSdK6uH15rBCDBzW4ieEgxgM2Hb7ggoZ5KE7bss3",
  "key21": "3UEMxd6kV2cy3qBxm3tmoHjkMYYVJQcmdFJccbTo3caiaGo2tzcZyBKz7qyz7gN7gGnYpavNUr5hSn7hQkoyJmVx",
  "key22": "46pLWWb9wHuR7NzrgpfmBXCQZsaYAcg7qAKUUrFwn8XueP2UFsvft3CYTozGFso3fbeTjRWhWXsKfKbwrvyL8qwg",
  "key23": "LaCnEp9Js441u4GPrKfPUQ9s5cK5ESJRvHC5KNB4UQVGqpJRfTwb48XnapGf64XMcWTN6Rpuj6MEvoWYGFz1Cmr",
  "key24": "3trtvXFiDRv9Syr9ZU4ADRBhniXpR2c3SDvtNyhMSXVsDW8V1cWENejXkhtG8aF2LAJbj27UrVfoPmDpjzDk5vf5",
  "key25": "3CceQPYKsYtXwHfDPC6U7WF5cH5AVTkqMrQESYY4VwADUAc8pwF6zjRsN8JPKEV41u6wg13DT9uQb26DnVLsqAm3",
  "key26": "2CUEqwgHagdfvz77UcvgrL5AF5wEd8TmneM1ETyFbyE9ktPGs5CDobtyn4SR7idiqYFaVe9eHfuBJ1pXmzip3SY3",
  "key27": "5JAPSTKHn1oMoREnS83PiTXUF8fTnuZb1ZdTWRqWAe4dzYXbkpB7vJAurUJLNmgUC2KCpp6xaKpFeXDjsddDWdtu",
  "key28": "5UzfGPNNn84m9EvSLiGSZUakWLhDce9JZRpVN1QKyZdgf5AhyVj2uPVh9kWV9fbVVvpBaKChpp838eziqW1DWjHX",
  "key29": "5kXyLJRF275eJXq8wRmDtb8nVfch52f4ENVk3qVnVfjSvtwJ8hVFbMakWmxfdyAs2tQ3zaS5wZAheA3Kfz3DKKSi",
  "key30": "5Uc6WW66FwpXBPxz5X5HWtoSMJPxQomDwVZVJnkMMZtGjyaRhzc5n8tqogktn5YFz35eyACkwKbDWyPz15rbQn2a",
  "key31": "2iBCP9mv9htAFe1zHUi4UdQ3yNcgYuckMHcyQXTZsbpTcSWQvsagf8CxKXXorWDeNh3tpmLC4v26AxoJt3JKMRdc",
  "key32": "3K7wZYwujBjk5hhQ5ogvf898SNVSoYya7ywhPGvHcXgtWyUQsUsw8GLALETU9sGfnQqF84KK1JGb8fNsrc9t4qjH",
  "key33": "5uSZHxWbn3LBY8oQoC88mCQGZV8i6Cw5AuPDwSv2HBx3YMQhCJSXxao2G7BruB4auZXhMdn2fNr93cdk7Qs8R6iW",
  "key34": "5U4zK3wgK2TqMwCyF8UNQ215Gtjc9hiSqSG33pRDc71HZx1B69Gjbyp54kz6t1LnUNEzJ5KLHCXZvqas6BG68fXa"
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
