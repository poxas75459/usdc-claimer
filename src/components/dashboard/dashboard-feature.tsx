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
    "2Q5NoeVVHvqfey5PPJEt7brmpGFFLWTsTLemXrPd12Lq89ofscksWqsq6dinWqvyRYCScxZ9uEhfZTSTXUv3785F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzCJ4U2jSDhWRsTeVMw6oLgbc4XdMLge1sYZRNnm7f57DJpLk57TDduzKSmuscWmRvD5Q58n7EKzyvA9SunFBgG",
  "key1": "571MzAGqULTwDMMrVkxad2ycrmBL3YcBSiW6x1V2wnGkJPz5fEtfAu4wkfNSdH6JXNEr89koLjWTd76mMgbg2jjh",
  "key2": "5SygemryPvmDbpXhCAtJN1JGe1VMg439EcSunQLMRdDpLqZaUbSpqDG56D3uDZNqycZa4YzoHPVoTdZ5ZdjPiGfu",
  "key3": "2PPu5qb39SbLmv1Fi4ZpShGXLq1xDZGknsqmrbtK3EkJugy2dDmt1QkyJ1CmvkwrzBJNiuN9XJ2USkw3XDHEqExe",
  "key4": "3B4ox2w4uq5Rvs2X3xZAvb1BfpqPgmoc8rYhj5HMnYykGLQyAEDXbzXh1f14KkNCFK5yduTSkAZrjFVBauEVkpte",
  "key5": "2jazbFYWURvz2pL5FT9ga72vs49eF63WY54fyJetvnEgFucQkHgtbqkwwbBASCWLBPHS8unQBz6GcJ6VVuCRxxhi",
  "key6": "29cACsCPxKqMWScJWjTYJGHuTSiicevkv5cJCYdoZTnd4Nxtmq8TpFqbuJmyqMD7W8cMtYpLkUcdgtiRWc6r3r96",
  "key7": "3CSaGVxpXXjf2jMNYdkE3uAvADEkbpRf99eS8ti2csDK4gC9sUju39WWnWP87VUeuUCjrKW65GzBc4Dj7oN71RcX",
  "key8": "iAHHKbFAvLBpWGg4rNoV9sUqSH5uzMwxvMk5YGbdoAG4tktJnu21DbErbgZ5EYuw2cwro9h4BkwEHW1vWfEpfZK",
  "key9": "3xeoSPBnvyr8CndaAXDGEbSeDFcE49NaiDArA5wYpKf51DELGeXE78ksA43LthmbCvs7Z99QMGjrocknXhJtaYf5",
  "key10": "5rUhFY8bwzUc8tqgTBYABWC1YX2zgRU5khw7J4ZJ7yeEeKQvo2Up7tJoeu8QpL468LHgqR2VGjrAfdioCu6FeW1X",
  "key11": "62ia9dMToAkJNMZRvNNataFZz5Sr3k72fKgMt7yZJdPwMEq9bPmTVex2NiTJCkaKGdBRupTXRLjdwfAnyXvBzjP3",
  "key12": "5JeK66rgfQFyQeAJwyuQ3krCJdhTaUW1hWGoYhRPyqjMZNgJ4QxqKpxtBnh4VeNzyv6PPbwGdzSaQEUc84ywFsFE",
  "key13": "CSnNDZgVEvNxU85HBr6NDNhauPRnxd7NF9Au6hxNb6YnF5gsdwL9MpQJcgtX8CEJm379NiKx9m9EQjRwAZ9EAyj",
  "key14": "5FmdH8GGYo4kxx3PLHTdnU73uWXGiBm4r4tsnyME3FYfXSynjCVZnxtwDyhcwYq6MLZAs9jDatGR8frRAjdAkzRi",
  "key15": "2tVGc47HMDweknPWKGzyY7dYzZE2qcrRxGTGy6xzbwuNM3mvqHccwZ1hmisvB57SevMu9N2a2KRKeeKtaTL2QQS6",
  "key16": "2EaLFYm97VxEJZvJKAP1GTyGKinVJzt1VwVreQYf7wTjxs5Yz6GFh21n65GydvReMQxRAJHWDwahgHfv2MTdarec",
  "key17": "2DkRDRHEMvzMdqvLGaXFZV81uE14UiqiXBhraYtCS9nyChiC9qmxoykhM2zm7ReC3wYgYYUZvj9tZiDGLHMFXxbo",
  "key18": "2MzCTgzmmrZ54zzXot3nTMHF562t4htZgaNsQwUE7XYaa235742qSrtnvZnfJFgWz9apaKk9AKC791bgB1PcrYPi",
  "key19": "5Ut4RnELavSYNRDJtzwkR5GBMTKABrftGTk98QGn3gGPdxpVvzWhQmBzQJFy7bEP1c6EVKjADEfwMwbNuvJxVrAy",
  "key20": "3QXa3RNfZ1aNCzvCrsjFMMaMHEi43i3JCcEUeyrMdd6ydLh8oaHPjD33NarBMrfu914EffoudRayBVz4Z7cQq5aj",
  "key21": "437cGM9BTGiEcki92BDzSQYbSGXvjMpJwgtfvjc2rXW37J74P6A5CMMY3T6wAWAhEyxEVkKGU7B7UhyDRB6Mbpk3",
  "key22": "64Ym1smT1QcyjxKg3RbYkWaMXRswyyXz2ir1AzkBGfaXtjdzRGwj9MpEgTKzEwF6tedueYPEcb3xNBmXRzyAcTs",
  "key23": "4mK6oxTGLeRzyzXS9HDJQug9ZoyPfYbc5wJDYtUWmzANuZ3Vd8ArEVPdBBn5tr6nTapUT8seSqoEcbiqJqwAtiUw",
  "key24": "5Sim5hLhTNdSghpgcSdqdcHWuqoDFV7h2NbTZtCKASuYZcQXTh6uDEMidyY81tV3Qoui3SqTwKbzZuZMvBxzrEYX",
  "key25": "DVKqp66DzpEW5vFokBwJtdv3JNyaHaQJQkL4bqg5Wqz1juNhkW9bcahJiyjDxipspe68jAKULTBoiuWg78sntEc",
  "key26": "3FoonCAu7t2f5XPGQaUMYaaj8oTbr2fntRm43y2NaNVif6L5D2vqEtRVACasWeHj63TicJ9csjWLJzsoh4JQJ6zg",
  "key27": "4b8DCcppyjd8nKBPQ2tk85kcBqMjsfsKkvp1UNPDADpxeDKAyX8APFcfW2V1tDnUqmfMUYEw5EEbwABbpvS8Ndt3",
  "key28": "2EmNGj9b6QiNFeXksTawSFdWzfuyYi4cuoh9DCxd62kWFh7NL9rV4aW3bqw9mghwyVUi6hzm6wvMUYWZHvQbHeFB",
  "key29": "2ZF8rLeZTyL4ZjJH8h2XV1eDTHvwtP9nhxp1XiGMtjBDAJyGQhPmrn43dWxy2CnuYhR7KJSoZPrnG7xgFRwJx4wW",
  "key30": "2RJpYNoaLX9DNgUo6C7vnDYtG7nJrdq8QLrCTSNMBc9YmiLcRwcFupZqtn5GSFD7Mm3B1RDbetjLJ47FzE1LEAFz",
  "key31": "4tYjjTRLvbfGLma4bukrdwibv6nwedih3LxBX7jJ7wGF88k1W75JPLZa5UiBmrkyRzC1x3Cqr6JNjkYeLivvJjoY"
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
