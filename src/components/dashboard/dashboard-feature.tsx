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
    "5sBUpcXSuwgSSNu7E4q3sruWV8KifpUHYhXXC7cMK7Lpyfo4H3GRjzx1M8ATWwFTr8ShSccP33qvRbUAHrJUoKp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM3as4bGsACG8aMH2onegVcGAbAxmPPNhoxN11iGpVMwgcfzHMgctJxfmeJcjCoyJNpwpHinTnPJmikWp4pPTYc",
  "key1": "7MusqqzmQ9d6UdnN55TyxbTioubCCkzbfE13dTYq2KG4wuzTxBd3VVY1Kae1aqMU1fmZ1NdD1DBSH1MP6yZsBwg",
  "key2": "26yk45ZvKPeHvz48KniPqS7gmkPnrBjPuqnfotfLL3r9PfdyU1PVwZ5CXUdpytH9ep1snymxLKDCU6XFx87L4vs5",
  "key3": "49F6YwCfdX9khQBTJqKRGWr9vmxqkNuZfFtRMMcqbPBGsYdQXLYBipDcY6gU3j18muNhCbWYR3hFfdGHSYg9BErv",
  "key4": "5DSeKJ4RZHG2MQ3M14KCa8pfg7C7rcXS9g8qFULTH1761uAz8tbQcSndRsBccewQuiBKxjx9pzj1euNcPmD3H1HK",
  "key5": "5PJFLaXn1hagazvxEoo2i5LxvE2DC2GA2AxABGu5EBgzfcpcttYVaRZVYFZLxxMpf5HCHrm874ifje4h6KUgWf5E",
  "key6": "2zLQmGELpa5ZJeEk8hpiSCL8Qo2faSTzrePMFP69A9ixroFidZE9W1yrtbekn1WB7ChiLir8Wb7eAiGeKpnVBM7M",
  "key7": "N6Q1JNkogju4sdpkKSvUcvPqisQBrhrW5dpLkB3NFs6JGKzvsRjARJ4DDBGyaepo1bw2sGMCPfWYZGuyo3BVykb",
  "key8": "21bWNYEBGWeyfD9L1GFER4XQdZgkvAv8NTcxvtSr9ara7RXpyZKt1ejSGVrjrzUvHT2GtoToxoSPYRktc6f5CWXN",
  "key9": "37Gs1aKpSJsnX1E9aZeuK8P3PtB2fgsMj8we6JJ19iZCYM5nJDLNyaazmTpkuZ6rSzvknWQv1ktirF7d7afqkPLF",
  "key10": "3RAW9egqkXdqeNCE8kFjdwpnt55mJ2TQZ6HrsjjpA6efF6cKBrWwiTqoeiXacUU8iJFhXMdgH4W9gCQP9hnLXLV3",
  "key11": "28V7jjR7dUiE4kacrvED3iwc57PQmoS5EnwBV9vcVhJX7huuZnhsBaP8KfRwYfNVfAHFAQdhRNT78TxpFdNa1wkU",
  "key12": "2mGSUxvRVi7VjEPJ4R1h1454HwspPhMCM344Mmmjf2m2Dappjb45PHfn5nEsz3Q54FwKPKDAUUvmGBHvAdvQmNEz",
  "key13": "sYu3S5AQu2CP97hCynJ9rTSf9cYHaGXDpix4SgpuJRn3uvcrsmHRhdwnEihSFJvjv1VvNeg8EPiTt8yads3FomP",
  "key14": "32CyYV4ooUGGRjV68mg4qiWtxRCvhF1o7BePQCZQabgzPXdvNg8F5BmpWRseodi5XsmXwvw9iYofYS5zmTEVSTKm",
  "key15": "5YJ5s8nP2zafYNgP4Zrxdvo66a39u2MfXt38BchyfAdbCmPVJAoNFi153VrZMnLzxTWeDmTf9AnkxS9nG6U7S2YS",
  "key16": "siyiFoWvGoS6BdKLU2FJS9dmaoYNzhmm85gA3QVsCGhJxvg9XaeYg3Yn8XirazeKtcA6YSKbrUJoWvas8x3uZMU",
  "key17": "2PgHc4mhmgvWfXUxGpALhTWxnk5kMWKJyzBRPLBhJGgimTtjMgB9ScTuLPHfCtLnBfgbHZjYbtwgVx3URqE8cEHE",
  "key18": "31w3R7nUN5uYhXb7E3gLwbe7Cd2ayM2ZqNWArbez5nw97Med7Ts6S2Z7daJK4CrowC3rhakTFechgKxh8YTjFHKV",
  "key19": "4vfFNbhQD5huJ8UfEj4wKefkL8JNqNCG7xrD7Xx2MWh3f78sVL2RDqQExHFQmNYkkcq3eys3ZHZFkfYf4LbhrCnF",
  "key20": "j5STWpUjLaMiMTCyux8LsaYDMHJnPhfGYrE4A99E8aoKDZNd7oW9xSUigr6ccp5wXCxgTuHy2ndRdBachEXpM2p",
  "key21": "26MNG2XTWFkFc5mJ84MB7HecfQLrbkGTt3f2xZNR8L5nTuTg8BDCzToH3pb8J8r7f1b7AJkN3XMM5h4jZuS4B7Yu",
  "key22": "3eRYkhqgWq6geejoBDRBUm3QLf9FgAryP9qCj2EERhhgoASB1jjUePE3AQugH6fJcUGxP3Gc4EHqQfmoxAL5sqEJ",
  "key23": "fMvmj4f15eoSmzPvpvz4ZUKW43Ju8BvoSttGAyzhLoUH9WUYo1ULDxmKtsvH7WnDQR5f3smCBDR2zC9HXTRBJ9y",
  "key24": "5mXYb9iqYqnrsYJZFWZNPxTcfmBvd9MRK92QnACejwLmUkxuExZGYAUkQ33KgojJqqK5wjmYZFFUN6jJhJfHxyS1",
  "key25": "2BRfmwZCE9MRJgJNaiHoYV8fGJDSu6odkkjWL6b3p7aGpdN6qwMUSjBMaT6mKiiZTWT9DBvLN14suLLtxYuZ9UVd",
  "key26": "9c9pUmusfizzJGbUmVZgMXLYduYmjuqJjE38J9ikMqPYGBG2WZvr6SvrAezuY9eg14RT2ECCUFnhazba1Xz3X7P",
  "key27": "4sywQ6hAnedeH5KdCL129T6bSak2X3EnWqK3zPzyx3YLx63BSRhUF4b97EtK4XBKDq2ZPobtnWyg3cR4Ug6yo65q"
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
