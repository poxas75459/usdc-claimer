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
    "4UEp5nuiZ1jFetsnYyYnxqgymoeaC4boKU1tn7T1xHd9yrhxkpeL2Z2ugzZvzUjUPDxhXZgAN2sKT2rD6V1vCZuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J135KVec3ugj1zEzjhgFmEP15g1z6AQQBZSoBrhGg3WJh2Zi3bZUV1gN4mUfXYJapXni5uBcbQ8tRFKP1GiMK7v",
  "key1": "5hSU2RAoEhx16XQ7VC4BgzVHN2kjTcW9zVDojVwxNUG2yXc5hnutQfhooDMFiGaU22kz5hNN5pbR6DR7LPJ7zvme",
  "key2": "3hCEz5rg5SUTZW4jtnACfpMUkLKErURgCpmzeA5XXTUXMKUZmh44rVMZHDB2xnyYo3xrH6zkSf2Ykse4DdbW8HAa",
  "key3": "zoRViNwrmKX1QgHXAh13AmQb73FL3o8pTaMu1s3aiJqTQdH1GHdGvNfG6tDnSnu97qigr6bD9WLeN8mSQqxkiNR",
  "key4": "3k6F4EWdJif9H7i4bwT4Cdagm9UXZK6DbXQhDubJJey4UNuDgRGu4n9hYqf1CedULVGGW8Fm9Tfr7haDGq5zBbYQ",
  "key5": "akf8HF9h9uSrGRU9ZEjnBjJAwZNpUxMm573LSASTnbTZUtgS5ER46dxNR7oWJxpqf8mzxDbfzfLgGC4WMFeg7eZ",
  "key6": "592opMhN36ryojVFPm2gkmHtPRG5VWcynAzVWaMs58qGXAdbcak5UMdMtmt95AmHPjBESowVThdq1WWSU6Jxus46",
  "key7": "dCj6ABaSRQccsrwR5ApJNu3kbRuz45HK5Uz63cRahEpQjM1KfF85pZ3BwSApmCk8cscMn8gu6RXPZQMiXhRRb6J",
  "key8": "44Z5TdsWiwMrConksfcjFusBDzZQSxwmYXfuhohw3d6WdiyBWaFePjwvau6nBwjdUre95A12BymDrxb4FQ9aBh9J",
  "key9": "dxdaxbLZ9LV9sN3QjLzX8Q8A13TYP7argqgtnqRvhFZrkB8qjfB4DRHkysNJG66rYPXMcQj4jvdCo8FyZZGSjQj",
  "key10": "5JCCaaU3cdnjjSMnddoY4X46fuNuDsVh15q8PueM5KknamHbk3UQEYVvrF62x5UtutGjaW3zUAJzfda5rwsrrdqk",
  "key11": "5ceWtvtT46xPy6cuXkoJtffzhZTgRG2Sa92NTPQT85T6ecDwK7M2of9t8fG88DNSJTBSxvKKGGttdNHv1UAHSdqo",
  "key12": "5sM4NkonMxEaE4sEJGjKtLHUEwDgAhSno5PuzDo3d6S9HhZ9oxczfz3mr84QmdBA3quNsmKUDNcej5jWaJ8GMZMg",
  "key13": "4SnFTUZt5isihNoUkK4jEwN2Y5fhY93QiHR4h2SXfJPCGcV3rv3wLhSeuvpBcB6Jm7iWQzwEaSjiFcLqRU7Rf3r3",
  "key14": "3BsmocJ4SVZsrMj6knpytMZzgjDgD19whUPqisAQz29fnTNG5s963JpyczrPKyoR3idBZiFtV9vz4DnpZ1Bp5Vnv",
  "key15": "i3GFLH31wgtZnADhgVnfKEFH5i5ueXSf6bRQ47jXieQhGUqD6L6ntqmdGBtYSFNtZmcjhMn5W1Tw9wrr2oxokj5",
  "key16": "2srpmNzSHto5Ze4kF1oEqMENVcSdrBbWWccCTcmGdXnQVog6zsagYu8zn4X8ZiopR5MjJ2QkyWgKCsgdhAj948jB",
  "key17": "2ZaKdsviwe6hm3ZUvgAvU8rPdd8v6KfS1d7Jc874EnmaxsJCBymjQFoNav7A9MvsSUqZgcsQhoogA5atLaMYsPm4",
  "key18": "yfrR8RjYigSTATMms1g4rbsqDTcrcUHHX5CUq1uwcWPuakjz3j4n9xZnu53JD1JJ9gspgdXWibnKmjJNz2UaUKx",
  "key19": "5BDGnD5Zw8wzbXjgCmJAAKfXa6iAzHDrfnGiqisvukGEr7fE8yN8Pjh35yVmff4C8urTnxdhfdKsyJ98DdrCuzAK",
  "key20": "3tbnJeAFi6K6HmWyw5ekVBy5F74SAbE98r195ZBdkM3gBfu6NzSJ9E6LzWCrpV594ZzWfKmM2RQs9sk9yWPUBD8d",
  "key21": "3BZtmaX5rFEVR5sDvvXorxZRe6o6Eh6xcYk8juUNgZAPAGGtEezR8boNNb42eueKx7Z6pBqCaJBjBcD7S83aV5P6",
  "key22": "5w5hAUYoktkA3R3kdY9QqfYr2TbCQbR9d31dquChDdVtPPvfpPAfDgs8e3R3AnSXuuQN9EdFdbjXTKLBPYEbN2Pd",
  "key23": "3dbb6bNjbdU22ah6KnmTBRovVDUivYp9kQX83eU9KXPpLso3ysq5XYcqgmWeajPVduUQSuWefViLxmcqiPtKNsSj",
  "key24": "3wGtSajPCH2Cs1w8EoS9sCJtS45nCwiD55HDBcftAuTVLrgDxSHw72swSxWiyLAjdrkbsUbBCX39b25wYv2tZnUg",
  "key25": "3A57Bx31JHhinqh4uVrbd93Y6msdVWzisiq75ejCbnfJNyK788P9BPNaFfetiHvFqXu55WjKZ7Dm78TbKDdg4iA2",
  "key26": "4HoiDdrh6LPxTSbG4dWUokm5xNTnyyFUSv6BeH6kTSr9KKVBEVafduqiaWCrb7Y2wXx6cXDdkCfMTV9zKJpeTdJN",
  "key27": "44SQc6GoTEJWwtCTjh7yzBZooXtTvF43xgQ6zGQKLXE8f6i3bboFjaTkLg7mua5XPmMqxiN1xR1JiYhLHvjNRGNY",
  "key28": "3JgHYGpj5PHhvUUxt2pBu1tdtBFdK3Kwq51MAhPhdR5uj4jfSaE6KLqNhFpfCmtKR1nagKPBs2mSETNs1Yjstkgv",
  "key29": "51xmSJYngcLqZHqXiBFD5ZXHXYHWqUBnHeZv2wppxTGjQMGDsbtZb6UHQnFJzqDZqLWhMVa38ZEgB4FnQkRWqYL",
  "key30": "3iUDLaa7pJYtUZyQtpCD9zRA2eMsXrjcr414myr4xesm5BbZZFJozid3XDiPsuEpJTDitpjvLF5U6uyPBvsLw5T1",
  "key31": "2TJ3hCPFHy6n9sP6TzNczqBaAayJu3BXBG3Wpw61Z6Jx2DgMiz6f8G8o8mZxtz1n24Uzjey6CJhERiythQw2uwFc",
  "key32": "hbfFBjyadd3hTFUpUC5VamqmdfKbcZuMPFmzSQ1YK4ECKvvuvhv2Sp9vE2svnc9xTSaCZVyPg6eyR9ZaD8Ru2BB",
  "key33": "3pR5ZCHgPfER3shpQvX6ixhR48hRa3khXuV1of6ieWYuHmvJieAEEhKQmoRT7cNCBQrMfcooYTxdJcNuSTgz4KU3",
  "key34": "4T3ueKhGS2A3oYWRUxopkSYdP3nw5bBGiYSry91Z4jvTYyVEyKPkjwiNgwwDbyNbFwwLjyhizCpxbpqqxWEtQ8v1",
  "key35": "4Sv8LSWTjuDNdjN5XSsmD9WHKBaVu1KcjiZaTTmCo5RNqNXeTWdDXSpAQEhrZhLTUfQoAxaXfvjCRGvB3EAzPrtt"
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
