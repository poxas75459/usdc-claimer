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
    "2nF2xRGAbgEDvCQuVUMcwnfoHZytJ1WSQ7C5T8eLvhLqzJRHzN6KsDPGVwqxmFbyPcULENCBnMZTG5gNT2Kg6yGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5smxTRnKmPRaV2s6yxE7ZtyUEP1Z6crafJMoDxJSRUnnE4WVScSF5qfT8dvtH8aCg13imrTPe8D2fK1i6wpWnPcr",
  "key1": "2nuVzbkx1kazRuZ5spk7zZrbbgWQ4NwTDJxU2cmSHLJEsitvt6FPQftRWynoCRAwPooPLyL7btXcciZo4hjGBchr",
  "key2": "3LSxrg5A4wRTey2Lass1puhKN9YQWpCL615B3DuCZfrsjBoEM641MGP7vamKfAGzfCkk2e5E97opK2wqs2bwKREH",
  "key3": "3rXxbkGu3DqWDfPzC6vmexfiDV1T94QJHYsjm2XGurrbhfrtMdGUP7BxZfHPYJyFC3LjN8VeN7PtjQsXUQKXisL2",
  "key4": "42dQMn6GRqGNTgndVZJauMmuXmDre1g8TWgyuEZNZ8JtyzMkmGPRUN5GaCbALDYXeL32DVEpaj9Ujxbhd9xQ8iEw",
  "key5": "35jEwXzQxL8KUZuDGSJfNWXXCxn7ez3mY9wBm5CVzXFaq35LjJThodSFm2ciW4ykEZKgMMCXKPoCwD3LSsSbJLk5",
  "key6": "4ED5BHobEJnBVVNYSE7koyLPs6p2E7yixafyXPV2hDDZFqo6ZvLBZujEEPZdk4nydU7m7ZJh8ahzAtcAmpGKN4b2",
  "key7": "8Dm3uNVNqXSkm7fELKoMYpk4asqhkkRpw3JXkwavhKNFmuQ5jKgSVgC13QbvcDNdiCDhGnJ2gnDjZfpnohoqN12",
  "key8": "5dgtcn8b8Me8sh6BogJ2J52AHZsXtF2LU3gRKWdx375Y32d1aXSpqbaQzJXA3d8k4u1LD2n1v5frh4DkSPMXserD",
  "key9": "2mrA7PQ9qF26yXrn8vm2g8rKJU621fCapVp2Adqh4vFafoWEYbHAcQuX27kooLt9ZpwALLS6NzAJ6wHBNpYG5pwg",
  "key10": "QAgJReGc8UB24RG7RzTEwH2ndxcqqJC3zcMQq92E7Dixxw3PgEk2aqJvwWdUfvGxDo55NMuXBK7AvLauKYNEEAM",
  "key11": "21M9NYzarBGPnS6f53dY64Y8h2qQ9nE96peBik6YmH1xEpk6oh7FphA6HQ9ui4uU9shavxVwvNaqL7TfPGpQ6J6j",
  "key12": "5cNrFTQnuFZA6fwhAjELwvKKAVMmkKdXqBHNYRoPbBCFJmQFdatMEkpyrNN2ApBmNhbMR64CEvjQeMWUZLbfEcWL",
  "key13": "4h61MbQUGGZ2KVf7bHgBmUpNv7kpgpr4nap7FZ1J3boNztxDHxfnUUVuUwkBRNggrvBDY68JJfK3WyAoCgCGd9Af",
  "key14": "3dKFodj1zah7RiSWDDNRv4NSCgFe2zZvWAVyTqdKA91MNjvFLc6hUkVSXVMuDncqBa2daNMt6f3bDVUhV6efARn6",
  "key15": "URuGgxmL3UnFnvta4oFpkhVJv8R58Jpr8He1ca63akX1eQinxeUWPJJi4w8wigsPUESHeLaevmrARZQZec72ZJn",
  "key16": "Z298noNywCJr8fgXCWgDDB6uotpSNYB1uZHFZn3f7xv3jPX8LNzECN4ixMdZtCqbEzKKCjUcnWvNJfjWgocj2ho",
  "key17": "2XevkSKwk1NRye79mpwtKCqHUYv9nQ9GMDpt3aRy78kdo8NJsmyR6s6HU4JREeHgyUTpXz2ZvEaaZPNNvg8zaGkr",
  "key18": "4VUztzsbR6x7HfXZWtgVQtQXJbhucVua4Hdjn5ENtJoP4DbnbxKg3p8WFSU3s5JsiiJaErqfxAXVD825LhpwtEj5",
  "key19": "45XdjyYQfngKSR7cZUfZA5k2TTus28X6Ui5X2eea7nXSYsQ14sN1uQ2N9GsD5g2Q5V4Qybs9G6Gdobgpre8AX7k3",
  "key20": "3KJ1xboAz5EkPwFxzC9Tn2XhtHLHeXBjA2Vta5941cJ8quiKwkhC8iihpcrq5s55SV2tADJvRacVnfgZ9Z1RoejR",
  "key21": "4Kd8Wmy83ZsHvUfWPy4ibrn2EiuyJwkyS2egTXGJfYfi1wiRfSvuVgfaxKDseYSxiXKJqhUBqVWo5W4zPG13LpZ3",
  "key22": "47Md485s4n5F7wFqjtiMqo6dyGrnCW1vcvn5SCJNe4jRCWjqeQEHZinRjGZqDZ2ku9vRfX95o5kSg191Le73ju2i",
  "key23": "2onmRXwTcH1jSMTaLaZMqczPtywz4Rssdojh2fiVuNuNybUQ1m6exhHKjhPEbt4TSxCUm7Z5Qa368JKHQqk17vR",
  "key24": "5fpxRxv7JxrSy9YxTfkuR6GDgN9oHHjBX3szYTs2cJb5JTCzwb7tYsEWuhzwnnEqTmXDpCAxZUKozhEs3vEeEmJB",
  "key25": "3GYZ8aewGYSpXJxiwhTuomA9c1hJg1Eh2e9Qf9wdUeqVrZGMk37JUP1NCqBQkSgBdsEs6Cenan8o5RQ9FNrwcEdA",
  "key26": "CdG5MWKGbwDyMU6EaMVCCB1cH7EHcRvTWvMjycYcvhHkZRWrnm3LW2k5EP65trQny2jpqTZPLhcuZXnHxxnHL5G",
  "key27": "2onhKF7ZS1SpkdFXd6YzKPN2EJcZQTgJ8fibHSfpcW36aZxqAEbbs3F2PSrjJyfBEECH3v8AUar9AuLzUStPWDyt",
  "key28": "wSq7FZ7Mscez1ZAqCPVFk9E4RVFWWa2vJY9aU8ks3NPEuGWm6DMg4VSBvpTrTGHHZwCtgsXqjPY5YkVp5wF377P",
  "key29": "3uowPZeBZui75fLCA2yrR6sPEsa4NqpYSVpKyZTAQaAfnzWZ9UhwkTX69CpT6xHREBWP4LRYRfWqZmA5KMpYv9ag",
  "key30": "FcfCPtLBXd1wVouZAUP7zAUBZLCzYvdJwYGhRXXe8QJ1SrJgvB6DCdZwjKTXvNiRyC5jvMv33UvBjQUKvnKf64h",
  "key31": "ye9SU2Qkz1hiFyoocWnfsShr2ubF9WAMiLQCMXkFxNjU8QYaA9QH4VXGiWEacN5yh2ptPRLQTdbcTnakezbs491",
  "key32": "2cN4ubsWzd8csXT6sU1NuhCfyPugqwM912iiLeH8wZL4YhkKHiXvkeNQ2FDWw5ucve7eMFVUdCbchWHiDTHzVrqV",
  "key33": "5M48aNL3MkhoMwN4yThdiXmuvmCrFggGhSXy8GWVyJkwdY63JBZFmTayWwrkeuxWoC3SQLhsqTjBpvyEdWDcaA5g",
  "key34": "3kemjVKSnKCfgWxM1heBwxHFjLdpgNdJcqwmLirPNNHAbJx9CfLsJ7Tk3cHJUtcrGsjJ6dYJBHdgUVg4Vi97QE8L",
  "key35": "5mTRcSGmeHDrHeGCQAJF6Y9ZBWPxsRMwafCi5KMsirv1VUSDxghsJ3Q253hvk8ayktYXixEFS7GHSxsyyj74q8Ne",
  "key36": "64Ag1yJExhV7nMj67nBrfhDVJDMkeCamJPhweFRKfkNBv6b33xJmJ8XphMUrdo6JQaMM3Eaoydjz91vV4GFhXjZH",
  "key37": "3Rj6mhefxBePVgxHHYpJw6q8j9weJiNUShXqJjzPtVJbvLPqXQdKnKehgusjeHU9u9CHZZkgqDvH4BLtHWmcyYVc",
  "key38": "3cJZyfXP15CvuwBmJEcLHigQazfZWr6T9mzVm9CZSXXp2APyn9tnPrAK6dWbPqMnTwcfJDJuNzT4xrn49VXbVb63"
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
