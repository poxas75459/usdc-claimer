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
    "1Njx7c55McFF9vNJHVckK7PNvikTwmpGXoRTw6EdV1zYSd5BF9oWk1Tqwt6KFcbu7ZAZC5fsXAfgBEZAX31KyHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mist9D9ShVwfH7r7JDjXfyshHFZWJwWMahfYWDyJ9PVdzBiJRGvaAaLsfqKa9T1wRVjGHmwkrQdHGRTReqNh7AE",
  "key1": "4oTJsjjLddJ1boGXyHjvzhH7SMFr3G2jN2RMwzQ3XawGxLKDvBFHsHrK6D6zJZ8pXh4UA4U2Mfa9WJGqUr72b5js",
  "key2": "5qHvHX1ZGzANkeRH9wPHwrpZWXu9KJxfKGcA7RbjMcKWL5jWszqNeCZJfPntjJWNjVDjBvzSkgk4in7RKBfeRjz4",
  "key3": "3cRCfmfpxYjFB7Hkf9Kyk71yZNEmbm5aXJQBDT6tz7sUE2Ygqc5Ni5R2uogqcvwTYMfCXSyRMqyhFJgQhFMt8Fm3",
  "key4": "XgKgwkDJTPNC6MCoB5wbGxgFhEgZaHquUHjMZbyzrvy5KnM6v3TMVoR3tUxynEyXtvDQQojVHuV4x2nTYTqBueg",
  "key5": "2zaXGRFvvVGhUSR8qoh34o9wt13zyXsVJTsJtBpr3BYr4KTRUB9z52MfPBdqfCHWQPdLLZtXc6tkcmtKZpJd5rZg",
  "key6": "5oVFxGrw2rsE9jDMFkfmDDqmuN7xghgZyBs5ScAqKZEPe7Qvq8jJsSSiyu6yT67gXT3CXNQm8BoHJLi3YTdkRNT8",
  "key7": "zF6GrHRpwmp17a99EYQNre2Rm5VSs9yJo5KNHKsES3e6ik2mqJyKf5gqUzdudb3rGQ7gvKgGUEU22p1iKnoSkk1",
  "key8": "3HzpnQ7ZuERZJLeD1qEyrCDUhefeickLEnT5x1ZWWDLmvjY2g1txiu6P7x1TagpRvis7KrNYGRsRpV1sJfN8rVSW",
  "key9": "4dGte2CGQSruRto7W29Gf4XuSdG3FnH25Hd7bXC4PPaTAj6fAkRcs39ViD99aQk9wd91gVS8H5PSCoxJmTNCmcEX",
  "key10": "SGmpLsHjYaQDcye432LsiVExkRLaoqBAWYqgFwoiUmemsU4MUNYZPHYjSSJfzKL7nV2viC7KnAmDiPgXYeNy2VX",
  "key11": "2TDzTW4nsd3x7eBVBgstzDWxTDYnyyf3jRpUfR9giVQ6X956CrqPE54eUjk2QN5ouxwLkLToCMv6HNnbuoL28i3f",
  "key12": "hXMmfxYnJeAk5XBvDz1mXKrGVK6QNgYxSwVHs2PVyQMLzi1UhBgoZkYbVSXS7bg8uwmTms2ZRXHX7WHUcyz5t37",
  "key13": "2XDBKnb7wEDiUdN4FyKj3qFBiCdh3VkaauUFGTdx53nzxcw7mGxMzB5PEGmqHgYasuUNLZxnEjJbzbG8E8PJVQva",
  "key14": "4pgVA5tRzgm68LAhyxsEgZeNNvLSCGcQVJ7fzGoMfubdkVw7NQzAA54iT7JV7FN1wnadxUB1K13E6hHqSVfkFpYu",
  "key15": "9deBDhBtjeR8gdMZWqR8REtyGuUGb5XofgX85BsyNhRHZ78wtoEsUGfoAzrC15ff6AJjZE5fDqGUCua4b4FMVoc",
  "key16": "2rtY8b5zyZRFHcEgaC6oZLqoQV72UWGSC2tSCRNjqNZ5TcxQsWRTdctrYmw9wx667GgSBtLc7Ef1FyWGR8cK9FTf",
  "key17": "MgLfzHxEwcDvMaUmtULuJHpKvxgZi42RuaAcxNPMoM4d8wK5j4gt5KtP5m8s6zMe1RRVifdtqooqnYPYg1Yd4Sm",
  "key18": "3txvKdYXAzZFien8GhQ9AEKm8SrZ8EHQ2Yr3hQerf6ac2cQjicSJYAQbwnt6nWujnL7VTsGoK1dvHcHhEBkbigVL",
  "key19": "3WQ71c3Ljeyf8BqFAiPWCN7ymcbeCVS3jQ6xs1oCerBJ586EboYWdRVzhiQrXoPew2fDes7ewmDNV3KbWUyLjEaB",
  "key20": "4RpxXZjeyGvR9rWRVuFXev1S4a5asqbQrnWFsBRSWNJQj358LSihUb19EAQoyQReU2uHUwJhxJrJSjXAw1c8JcJE",
  "key21": "4Vz8SQrTE9SB7Em5PCnFCpgUhFJtNjgYSPxSUMTJv696QnD1Ph9jDHn3c7HFq8PtqLyddD5KcMYv2bmdnGVGVH8C",
  "key22": "21aURbBpjeJkwMBj1MBhgKzU2rUjHgWLEi1ZPX9WsmtZCDEassuXEcDbvxttRFiYS2gJSQgmHEWcgcSEtHu9Mt6Z",
  "key23": "4cnFa8ZUAoYGrGq1JFvbYzGH5PEMu4oCRWNBoCx7AEPw1c9gCXVSZFJqYCHwf913HsDM6uETxpG1jHXmfVRD5x2C",
  "key24": "2ZZZvnviFz7TavkNFG1Drx9ipfrboETfW185cHSbp5jTmiPcnb8PCfKi9vhQBVRjSR3xaNTJB1udbuZUYPHyAPNq",
  "key25": "4KELcy6u24pJEEHdqGBijshUQdgcUKh1EGNxGPQFrT5psHE3KT7fLPQNjiuzrRDn47ys9LKqD9B8B2mNsoVqHaW9",
  "key26": "48Y258axF4ccoSe1FRtnkejZiKmJKBgrDSWHWQ69G6dtnv3bsewNtYrKGPM6WtZtwyRkiCe1NoRmjpZgUSR4VDpb",
  "key27": "TxASS1fU2u1aQGoq2g7BnZM7fUnYm9TJsg37MyGTX8TAKM5AvicQvGwEfNZi1tSkcuoCeuQdLSK1k8uggToMDQp"
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
