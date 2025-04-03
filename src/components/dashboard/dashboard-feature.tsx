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
    "qKNFpUNXPy56grBDNKjgbvahzemsozWAvf1m3Wimhd4EGHv2Cu2VDBDMfn5Z8pakajbw6386Q26uLLXdTFLnHZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HdEw3KBWvzGpnxB3Nku34CtepaN7bfaxv4zL56BBMxDwfXBxUMNNb9Ca1jQyeqKj1TogC2oHSN1fxVvU1XEh74Q",
  "key1": "4yfSdwnxp95akQT2Mow4t3PD8m3WJYDBNXmJ4Z2JLRE2Ui3c11kYZXSppks33Fiexr8KxZD42a3BHoroBE2zwAQu",
  "key2": "2YNi3vwUpfG9jnuK9bL5iKucNYKcEx85YpUxjBs8AstrZErgmPVA6NbqoPmpu5rQ71wizhzVATLzwCP7q94Uq2mj",
  "key3": "5DmWysvnHxh4xYusM2svyWqSD1KQFR4Cx9yE1GGxKpojghrERZqhNsAHsfLJEbYaLZHcAFEYq4fSRTYPaYUXdVuR",
  "key4": "2FZc7GZP2UnWa8BjzbSbKfL4VAqV3kpVNQcchPijrrBZQhhr1rYzBtpBsAnNcVSfKCQ7FXYm9ULB7wQbRHxXMHqw",
  "key5": "3nEZirEqJDhXW2nwz3ZdDmK6mhd6rFk3hXBkUbN9nxsnZRDX5k5uA4c6uj3hxXgKYqZDaBWMinPWxhde9fXwYYfP",
  "key6": "3WfqnEyFZnM3iQR5qamQDTpzcNbHxqNLTitZQ7m6cpZStRoSQ9KAj5HraMqFHzWQsZzNMEX9GR7G9JjgqZzyeqKD",
  "key7": "2ACERmfd5WMbMC2LjKv8uw8ULvm4KLHkVyqrJiHUgaQ1D6oivPLo2xy3UwtY4FEP6PY9e7c3jWFEdzgC86TcH3nB",
  "key8": "2isxRKQTfoTUiqKh9VybgA19WVcMakScDGL6KnNXbVX2V1qLJzHDka296Mz1dBgh7fPPsJEvpyFpAcbSwHxrSAne",
  "key9": "2isvS8u5Jk3cARo2kQMQpxbGamYM4Q5jmmUzHhdw7tCPqgWpRrzDBRm4s4cycTuprzfnxX8Wgg8SDt6viytbQZ8g",
  "key10": "2VqTSE6jGcpvvoLZADPdc6BVgRu3zQjPMz1sDb4xLW69REya8dVdxLHnuJgFpWNHNcwpRwHEGr6X5RQ8CK7hVfWv",
  "key11": "xYYQCnT8JLAWnVjC2siNhq5yr4MKNJWs1RVx6Zyfbd7SUZB4V9Zkz5neEyQEgDN2yLD8VUXKXipcvUWe2jRzypu",
  "key12": "3isyd64qAU1UmfF1oJu2gUTprVRZJSzVXQnQdB4vLAKCMeaiFLR1KETQDNMfbHmGYJ8J8UtLA6BwDXvbU3Jbcvbb",
  "key13": "33hp8rRaerTZ1iH1gxnsJ6zWgiejirRwE8xUxHwsKEJSGqUJUFAVpoZ1GFDTWKMw3CaHaixw1g8cZUQFkQoFcM8c",
  "key14": "4s3ofqMv9KN1QVTpvDuMFSEuKpqKuVfupsE5JYTcnaBw8gLcobpDKScb3qJK6g6WjnGS7ZTp7yxDYdwctUG5Rfy",
  "key15": "4hVp6Nqqo1bT975nY952L93kppJUNe59ZjCkiPV2vK6hgaYCmbkgrsfMM1MooeJTyGp2EhkMwMbnrHxK3ULq7DDy",
  "key16": "5Lh6tCykfytXFALYQkcEfapvTTBoQ3tKvYuskpFJQDjzyVq8MEcBRjXtK8TmA4NfAbAhHc12rHh9yPVdM2q2EhiB",
  "key17": "2SXbBoGT8TaJ24QHYi2vtn87vfqA22eEn6j3Sq1u6cab9yennLBu1VUEoP8J7azvb6fsr6dFpUdAX1KPowMg9qQY",
  "key18": "3LAnLkvD4255AgEovzx3hoiZpAjE5KiVAfEzUyf7ug9KjgagumFtsW4SRV6K8ZWu4hzByDVbBm4HSPPEnK6xfHbr",
  "key19": "49412pkTmxq2C7NQHEaXwprEerHvwPdKHeaJAm4xyXCmgD3UHjDkh9dbmEmYVzWCFyDi41tF8QFRkRWXs4ZfhkFH",
  "key20": "4Z3PeBoD7PgRo6jycgLAHuhpdwdoSRY64pFnAkgjvJKFgVVea7N7fZkuAngd92xnoyLwtv5UursaaPLb3RHKPPbu",
  "key21": "4zXZ8KauvDQhtCtxZ1AwgTPha2Smy8W8zDXX2a2phtGj1uEVAzk1FUsoLfmtpG2DRv93x2b8zL8MNAb3fCkGmnq5",
  "key22": "3xntk18NTyGGU5ijC4MSZGL7oiUazZiXX888tLgmynMo5goQArEZLGGHvweuoe77zGG5ZwXKh3QiTmZuBj5ukwP3",
  "key23": "3iWhGfFWvbn5fGst17y6RQyukfjV5jGarYvz58hWHat3w3EYcBCqd9XDp7m9MMAkW5nEizCUssdauSp1w4NiiKWq",
  "key24": "3VpYymWNurSr1uPm5S7A41k7kk8nRnrQw9PnJNMufbxLK6zGuWCjYfnqe6iGzWa5hGp2EUjuuys7FwfHFkeqkoma",
  "key25": "5NMAD9EpGF4Nr7cEhwaivxsA4aSbY3fckAfBH18B1S2aryQukcbrtKTPSSBz2ZpmpSmkJHR7ufw8h79NecR2BsZC",
  "key26": "5bKxtZwePykagtTc12pjP8vpXd11vu2yrZc79v8A8p3fU7huhg3VUn6SyVCX7SDwuXigiyfmQJgNXyE5vbLZWQa5",
  "key27": "3vL4vn5SDHNDi35kpX5JUDQgF1iDLh6RwV3i44jnJv1sjeBbVcm78UTxuoW46sSED8zXdJQeGnZJrXjjhRgLctN3",
  "key28": "2uBpphkBFebkTdbi93tttoZSMpVHBEMSbAS1rUMYVUzdUJU9piWNZbKA9XsQN6b3eeYEZLQKVpTVe1WhRJttQ5GA",
  "key29": "39Pj1d8bTGDZt17NKXhTmKm5kAMQ23sZf8ix4EFygiY58b8oxcdx4zUkcwKTMPDT1uZBhfhTqrQnSz6hcsnL5mj6",
  "key30": "4tdah5E3WjfyAQwnWjikBELQFWVshfj6Vf5YFEVpRqq2fkxRjw3wqmf8wRimmoYZZiohBuMsoQkjQMKYvjgqxEwR",
  "key31": "2TDDu6JVHg31TCmErvvDKh5jqMNKR64CfJvMvkz5NV5BBU4PGbkCVZap6eArodRVN7fzPCnEXNKVWp5Cx9G5uhe3",
  "key32": "5BV93ZyJVWK8bthF7u3uBXxqiico3N89Am1ginmyYi5nQFPZ48W1rDBw4ttyzQBJwYEm7Q1F1VjdygppSBAZuR3G",
  "key33": "5MtA9v6MAaEsaxCqqiWVEANrxWubC5ybFnLEAy5ZikDqpPLpGvZeJKWjxRCCLbPbYRhB94d5ZKsutbKvxH2SVKkt",
  "key34": "31JjfveRNR9P9mGj9kaT7j3NvM7BNtJmnkG2UmUpAaScRNjowJnUe98v3YzfErBduLQMXhHazuruFWVG4xZL9Rr5",
  "key35": "GPUKjp5UPf21nxZrWAVGNv3gWjDh2uL3XmZ3oQ9QY4hWf9rTVU6XFqePQUQzW9gkba2Vcxdi7uuGgHM9DuggymK",
  "key36": "4B3oZBw2iZja1FHQrFSZy7ifd6Bd9XGXm11QXXnbZPs5ZQX3bfaYncVqCxcKAXiZCLuZF3igNFHy3ECf2Js8M4bZ",
  "key37": "4pke1LTW9ZBPEXH2rLgPrhhUX4DBFp6fRQGWdA4Yd47MxXZUs6wvzx5fvxPLD5c1aYGbFxdL6Ls8GnauaL7Bb8LT"
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
