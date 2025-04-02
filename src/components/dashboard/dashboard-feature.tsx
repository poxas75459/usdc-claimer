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
    "2MidhyshqNybdauZgpWE34iT7XKFLiDHBwtLy8CRETrG6qeAgJvmLYyKFPVSLHkEn7Zye8v8SuWtyygsNFchBvBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3k26dCFwEcbEBdXyYdoiCXwNUxFYMcujeo53R3RDkmvPrVc8CYGVsTK3wTZy9RkWyHgqVvkhoCdZRZvNu3439Y",
  "key1": "75smx2awSMX6SN7vxmad1sLBDW5ouB8NjvU7c2gXeU39ssCbK37DveEbMvPnb4B2QQSFzLixx3YQTzd9zx6gd6U",
  "key2": "3HahS232zgLtsm7RwT6tFmYsUpDAZkx5kL9UHA9BZtDcF3L8Cd5fbz1z9JMPdrMYVDhC7VMygpGa8EPQeYqx6Zsx",
  "key3": "3oxU8PZyqvkV8CXVFWfQtuF1cHPN2bTEa3GTxJHa4yBL9TT3htQTUH71sEGbZ8EqpjyzJ8nW7ZBmw2E3vT7VxNn",
  "key4": "42Xv51NLW8k1bYWxtWM4DH8QDwjKuDwjQsmbeg8GudqSGxzhan9jFxrDQTPD3DZfHkjifnbaKUyDA6siBrRxucXN",
  "key5": "3HVZqrS6Eaznq8Dx5KZkgXZzA8vjcNgLZsAeRGYSWKcARhqvcqhCb5D7m1ynftbxaq8bn54eZRr7fD3qXmYg4Mqp",
  "key6": "3iFT4b9586t2nofEeuwZEsNtpR9qDhV53YuzqXXV2LFViUntvvBJqxargbhqnNNQCxWbDHnUYYSaHWa9EG4eVXSx",
  "key7": "2dTRPyioMSiR8C72SFNvwomyw12Bb5NPWtCNWGb2UHpiE72Wz31zSVhbhNqaRvH9wiMZqsijDB8D2hMmqN3YJWjx",
  "key8": "MTqVVFWoc2CYesP9JNfz8w6edpBVCjAqeBDxqpCveZR5WdEg8guktMwvkHE611jqvyqCMpL2zjdtysgf8SopyKC",
  "key9": "5fmvR9MR1tnVHqU27K6D3WBRoZikBnK4T2YunZg432mfxkWJ8fqxKuiUhHA52S9r6phRA2tddRyb3k63dKP8D6RF",
  "key10": "28UFru7NJCa9VcR35aTaQXGbW4GAiJvAsucfS6n3pwLqrEzX4sZkcuYScdX1KNe8bHDGLmmkwHu9t7N1P6bzLpUN",
  "key11": "2umkeZaTLpTysqgRgZZD6fs91x54ebdAa7ZnGEXUw1PyfGFc61xTzpvFHYzoSDmbg4GPZ1jGjBKNrtHJ2ZsNAmGC",
  "key12": "2QjmKhBxfAQZefSTPbF1YHcubhi2VGcULYkBVnzpjNWcmRqaYKZpgj7MMXy2B2Ud844dByTGSP5fLeerUDgZ5CkA",
  "key13": "3Hg9JEVxxPcJoiaS5VT9cch2xQzYFLSUzCoK4xDiEwn5MXo345mfizriDkRkbLGAbpfzh4TQKRVxEaVa88Pm4ucg",
  "key14": "WwojitbpHPA78C43ReygctRnoESnZmDPcESSDCJFiUaWBubsS5Z8z24A6jWUQa4xuXvJijuXWojNLbopnF7ZgDG",
  "key15": "4JnoP8c8AycuQz2FbGx97pNWXsNfD1aoYi49DUpkArB6kQMm9tAoXjS4qCejADhV3Tk1v1goEdSWnfhSihq97ez",
  "key16": "2KdEen2iVB36ihF6hRFLpmHSPN7HBAV3hsZ4qet3dVXqDua5itP5WDxNqmZC8pAon7Tr4gGDLnXXE7Xgt7YnzABU",
  "key17": "5uB3xXDkcLaiSgP9WYdZL1VzfrPWSfr5etJr5JG4BXV6pPG5pemMzeRw6GkjFhmasd48yedrCgsTMx6EPhQ511s1",
  "key18": "5nu8pkzMZp5M4oU6tYPGD2zm5BnXD67MTbiVEVAPBphBFWu1ewQornYtE6jdzbxZjtz46zTR5E6rFeB69QJEqjfZ",
  "key19": "4wZK5g9Pb8E23QbNqzR22WAwNxCkmPsqcaWhxCLu4khrwAJ4SCpz2hYG5FFZUs6T6rEmsdiroQqARgdzy51TzSDj",
  "key20": "4efbc83RKqNTWKdNxN7bMZ7fKVEmuSDwGXK5J7kP3v4FpfueXTazHa6KkFYmULFRbgYdfjvANosxA36BVM3vuaiz",
  "key21": "4UM5KsUMn2o9vp4uVrnuFeST7D7j4NwceW2o21rgDvjuzNwqSirTaHVHQ9K8JxkRqc5d1qg8dzu4zMvEqiXZohfB",
  "key22": "Uchsf3u7GXW67opGBMKefY9ZGYz7gUZtAVCsYKsMSiTawRqAyGgp4QZ2A8d3fxGpHe5SN6f2C76DTJDYLtZgz4j",
  "key23": "46MnyPW34KT7rqNgZYKuJidArmXJoLmdQ6WxQJ4Z3s8Kc2Q3GuBQENMAzRMLYKiwkrSxPAoz56MvvJGDAfS2fNJU",
  "key24": "4kKr7XEdhqiymaa8ZiyZae9Z9ytJfVCaYY1mem3qmbnKjQE8NGEzKwqGvqkTHVELWGmPZDKbmdXUBDiQ7PnCynNZ",
  "key25": "2pScFsSfJYaBDtJEAe8suisX8kLESCqNUi94TDj1LCTqbCWqg8MyRgP6SXVMbLKU8nJyKzbfGSU2g1L5QX2DVvLK",
  "key26": "5PFmsmBossdznHZn8Qsfh9Cp75fZhFXLiTo3tpJHJmUkL34ydvP4RGQNXgc63FD4UJ9C1zn7ZGd4PMGZfTse7gBJ",
  "key27": "5j7hLGpEV25iokssZJweaA7SD8c1EoKKwmgb92ikYKgEjquZWjFvxKoC1AdkKGZ3rUx7fgr7bNZdokHYyeN7Ew8U",
  "key28": "5uohoT7jQQwKMH8UaUsgCKbuAJDXp39uXvrhKqUxBNsJhwYP9YZCrejjhEoGbeJdyKnKiQ1kLdXxQmHT7YKFbQqT",
  "key29": "5mXjhtK8vcyxLc8J6a6jg7quZoAa6gU3LUeYufPeBMyRaijkt1XCNJ2vh5j53DwgsW471k1j4opGWtQWRCtbtvMk",
  "key30": "5P9DmPv5SWaJLNsRNBiDL9JUEB2H3kwgoxuxweUYeaB3TmEEdDBNB9hydh6hvKSmeTzqkr59KFmk9q48Q4EZm9vo"
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
