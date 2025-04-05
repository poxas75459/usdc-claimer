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
    "3LQ9zAdjYmiqHw8izxLCQtUnuzEzRJRDHQZraSGaX6Qu54UgoQTykRHpMLE2PgkArBk1TxENPQmMejsrtNRKwmLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFmVw6Gm6sLoHGNAYbSHpqjSz6Dmz8VNXqv9zKEcB6zkZa8rJbkJGucvaKvTcDnKUZzPgP1QgwN27BiNE6dY53p",
  "key1": "rX41S8FKvsyYoEVUYonrnemDMcByvCFZs7Ai2zmk6UCNryryhMJ9MUi1djab9fKtcke6qkqCRUKnoeyDvzEv4oz",
  "key2": "5cN7aaW9oy65kNz1Tfn5m7YYoZAs563VQgsCXgEjEUHuxvsMVHeEkWE75uWQCuWmD957a2uiKvpzkHLkpMBqw1nJ",
  "key3": "3Jvut5ppXjSdx3vvwxq8YY3MiYkrSALAPeYcVMrH7FCBZvHguXTd8ZBb4qdfWMj2w74zwgSpxzQsMYWvXz46dCuN",
  "key4": "5EdiEQKGBxTVMZZg3SwzhGSEJaD2uXK6p9ZiFUyFMHEeH5EnRjHALmfyKXjDrxp4y9dJLbppEif2q5gqzQbMRBzk",
  "key5": "34MTVg69jH3YaRXTz41K5ZR5gUJDgFhcPtbnXCz29h6L6sf2o9jHXP8a9QbEtk82WiVZjf2tky5hNLuzGKCeohBm",
  "key6": "DRVArrFXnF1PNowNyaB8P66jzMpPpaLp8MyRZjxfPybGnYYuBxENUc9qNmjQnmDXJPUibV2uBHje4vNBGhGNJFU",
  "key7": "jstqzPoxRQUijX2JkLmUSpTCdUuoVqP4ruVjKLqEFNoaJkSKcWMvQSHhCp9UxaCVpEDay8cFugU3M3AjWXCy1co",
  "key8": "3SqXuFZyZEeHVmXBfCVGdVKxtWibYx64QuaVGxsXHsdAFow9cUg3VThhPo3ZWUdLxL53BpbMuzs6XbKczeWbUPzP",
  "key9": "5o19HsCRiT6x8GHcdEVgCm2JeaiqwHFV9yJjSjfnXmv2CrN9WfJLMcevnHHAR6hq6HtM9NeFD8k2TsTVERbVkBd7",
  "key10": "23oXnMd1rbN5i2CMuM1PyycyR2XQvy3yHkRtJUTRV2xLtcWiGVCPUShMoL967Ko7cAVcPKZKzQbvBLRbcuPRV48y",
  "key11": "3LyrDKHw46nrwcyyLAFTKdEgBsHnWteNoaB28smBzDyRgdNXKioyQpATEYsPdDhj3iiBHa7FkyiF7znHjj7jtxna",
  "key12": "437xqE4ihLwmPZ4mEvAcBc4vjdDyTFLDHfyoMQfoXu7yMHT7TdupnhbNrVB3ZUwJ6yzHvn6LiYKayPZUQo6jxYbp",
  "key13": "3s4P5fKBvUy5f7mkQhUbA59WefZBdG9GHCPEz4tT8FVfc6bpmN9jhnamhbxgSqthVkj51Atu8XDY1Faa1BcgtuLR",
  "key14": "4S1xhSSgS93HGEjhmm7tSKmUnLv3dEBTunbyS4k7MdG4yqFzRjgowMCpkL2EhAJmv7yupKUUfEPAWnwR2tpTCdYd",
  "key15": "25EiZmf1ZE8cuZ6XdJcfPKjE3h1XezTzY6zSTCzjU9P32RL6Pehrf1AF8NFj6EaiABi5ceG2ZwYbx2Pz9kxSGmor",
  "key16": "24rnPZmLH7f3ZY7WDiroW5KAD7ALzvr6xhoTi1i7ZBsjXyb7p1mCpthnqfPWhyNNBVh7QJmwZwnbWrDA8J3LQZ3E",
  "key17": "2v6V54k5n51ma6bYeaCBXS6JMCRW5JRTjKTRpU3E5mWcx7cuHMYod6mqbGfvtczmVCdugpeZokiVN1eAME2nbLWi",
  "key18": "2XZy1RWPuh4mfmuEsL6STNGspvL8Vzi6meyNLNggtU5kuQKjtQwxyPCRtCi4i7LiVyMFwMebdUADmf1waNrxxhJq",
  "key19": "2NREdHacDwFhpTSyNh66mn8Q3kikeTYAN6S1gn876aPJQ5dkZmRUNcyTwqDm5s4vzY1GSUcCLYq3Aje7X9fcuBaf",
  "key20": "3vJi9k5EjGjsvrfMkBjLLhYcLD6XELYaohs6x22WpRVY4XgZ2SRs8BdfwqBVybqXUtiVPxVY3QAdRQxu2461UqqM",
  "key21": "3bmNVtPEZJVmmXtMTQ3rcXMpHoscKZMCq1hno2RapC2ecb7FQYmNzD9KtMDf9o8ewsjzyDXpeRcSZqoDE2sKp7vi",
  "key22": "6WT6GQXhXc67fBCptWiEeGuQhQKFaZEg9N61sNVSzB4GhqUZRf7kcRe3aNHHwATPM1T4QMEQPgigDqDpTAXoFgB",
  "key23": "5HLJp1XwKnFmJ4b1XUQCKYho1fr4K5fdDyr68LTGzZxRnsjos4ueHYQ7GY1krsSHkVYxCJVqfiQjUf8NkNCBFs1R",
  "key24": "3hg6rd4A26o7SwD2Y8nEUQoF9LQc6xFHaBi33h4ZiUnzN8As8ertxC9mahs3cTDnJqDyzvTWnnf6KrpQZj8fhMaD",
  "key25": "2au61WQGh1dNdzqHPmedvr67BA8tCdjm5uckMAJ3djXoMW2mrpF1UftkmtjPV5ErBRtsfSva3TkmWkUK9uCdqNw1",
  "key26": "3fmZC8wdM7fqRa8XTkugaRzT4wAWUnsDWrVZcqW61HRMC8d6iRjGjQLoLizfm2aKvU1yPd8sx3S3SKhbHEyPdoM2",
  "key27": "k2KwXtYoJ9mYwAhXFTLXYVJ5MNCE7qqNH6oR1AyDaUWMxNJZ28s7mYq9PsisJSq6joxnYU4fr3Fterc8TEzzLq9",
  "key28": "51c8VD1VPzPfHPZFp3hH9Y6n2Q98aikDRWW6cosihff3zKiWc3p67YkrxVBqZcbSHSz6uCLHoXF3FAukp6gJaem4",
  "key29": "3ryoxSUZFjT5ACrwmrgHzt2WZ2BACgeALAxxhpvJmq5zX5yPup7oMVydew9rD8y7jwDEVhTgWtHoDViEDru77uVq",
  "key30": "53GfpGHrrorwv4YW5hg1YhCujBYYGu2KjcCjy3H7nbp3U8z3aeSXu3WHkL821d8PRDVH7eK7yX7AKG7FkcNkN7S4",
  "key31": "2gBQx5cvXVqGtMmQXHWZz2WNJ99mZJF4kaNcodoCyyPUVnPmdF4KzQpQgnxSYBRpjkwexgrKW1vnZWApChxhHLay",
  "key32": "5Vq5Q5hS3FHzyY38WfCXnnCEq9kgkxPyGgz9RJmkTDmGS8gnpXsk7PBvsADT6etQjrzwMKEXbzvvMS41ZCETY3Yi",
  "key33": "vns5dbkFpyRq4dbT1NtkqafEWXJ5c41Dhf6mrpQ4s1W2k614una2Ufty67u5d7rmJjqsWVFsu7ob5bumGwRBqRL",
  "key34": "3z7ozkCRYxezwhdGiLDxgLDMWcfLa9U96cVReFRAfD2EKjGyqHHSVMYbqpxDsExbTpxH4aECSp7NUG8ovCp3WHmG"
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
