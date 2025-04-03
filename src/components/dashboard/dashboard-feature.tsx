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
    "5NZHHdSgBJprnLJCePWTzGbcJHo6FhPc3jGHHX4T8mP5t95U5RyJq6DUrQmn5KZE6qERihZV4x2HXzrfJfuQ6hhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hxw43zX6euQm5eXYcTJVN6wexsWdfTCp977BM1EgDhw9Y6dNfJ4Yu1gkEg8FnER5BZzUzvnHE4AZKZFauyx2vWw",
  "key1": "XDQ61V79CHs7tHqmEZNvCtbwtqKtGKBrVxzpHZaYEQeys6vvgrGvgyzAKwjf5uSM7EnVisxfDYj3rEE4cd1gSbJ",
  "key2": "NnfJ2JJyNNe6iWbx515JKE4ib3oSNnqKZDDZodpxX2YjouRXZEgZLjeTLBTE1T23bmZAg8EVji68B4Yb8t6CWRV",
  "key3": "qqUnyAKFcbbWeySnNBkYHZhopsBeHRxK5EefLxhy5cYt4AxALC6nYc8DeFn3K4rzhyE83cYiVYndEmeFtthBSQG",
  "key4": "2yykkJ2tAsFm1y9hoXAuQGjTQxGeEg3znVwBzFMFcSJUoosAYuGgrW2yCvQUFaEzuE4yNDE8DtCAvXY6WH1LWssz",
  "key5": "3zbvJ37HcZatZ5xb4n71kkPVk3VAxZZW4Zti6rUbNVm9MLU2qAopyrPv2bpKndZqA87rE7Y7ryRqvxsg2F8yZBxA",
  "key6": "2Z8JgFEjE8rFPSt1MabdyKL8Pou1djuPckA8qMpiEBKug2eHUciWkJY832b7xk6W5Z3VRkux4NoToXXGrAGRmxSL",
  "key7": "5k98A18C3smm6AknqjcX9ssCZDptRA3uKKhaWDs2YxqWfSqUGtAiMjFKNMTjSS9s3o6X9k2qFwEiyLSMGUr2nv3n",
  "key8": "4skGkDJeAvKgTwWdrGC5NULTmdweABfuYZnJ5ufLJtHrg7JkUkaVBh7gC4r1QcVrsAdFbMqwDmc834d6ckr7e33x",
  "key9": "5c198rPwzbwkvVyRyPx53nQ6xUuNVRoS3EH8jK1MTzuf727XKtywDpfesxYJRQyak8CmgmXuGt2WbJ3xofcW3GX9",
  "key10": "3bKBkG7AcmESs62KVtyNck9Qq6zSV7hsrVCeeLWjiKy7cMaRtB3pHQ3ZkWWRVMShxoARc9mQcS9tiP9Gfds7JBr6",
  "key11": "3JFFFY4CU93LjTMoYzvEf1JygynuGECaQ75de321xdZzFZCAHaFChCxZuHmzWZQi7485yottFqd4yznuQCgnWCt7",
  "key12": "4EQZUjfdkwd8gcz7uqzoVFs2UKRuJSJn5SAFEQV4vDBqN4XYKwHLeFhU1No9x8c7xMRimMj6qF5cthaPNVSffs5E",
  "key13": "AYtuKosETF7pRu4DBzY4ijr9hYjZi9gMCA2ZbxBevqqAKBi8MU5nN5DcvupsrssfxwGAsyjhnkr1yY3YeLEytfo",
  "key14": "44n95iMM9sxxm23VLMhAq2ADiPeRV1ynqgJGWvpyMJNEKJbetWqSHDng9fi4stfARQD5qtwd7bFH2vPYhX87TjiR",
  "key15": "5PA3Wurf5AJESjpvJz36CAsZ9kQrPN2FygSW6NW2H5D6H6U2dDaqqCpKsD7MCJ6h15tcGAH7oGgJEGBWZsMx4H42",
  "key16": "3dFUvtwAnFYbnyw4RV2EPhrVfQc2UNhs7qbR5YBiDpSS763zTNrauShTrK667Czmx69VFvoTBLdNxv3SgHHv2dz7",
  "key17": "38kZt81fgdnBs8ymaU7JfwSYWfM8rSAYj7m9eZpjM2U9w3JqJsNNjTQaXN9xjWLg6TBX55GweXNrqu8BtbCg6c6Z",
  "key18": "5LUXQTqhgpkNsh6Lun3WdYABocfhM3UmQCLwS2NAaj5EcUexah3xXwUVifafXL8iqrPZNVoddrxj2zwbkHN9oz8P",
  "key19": "bga7nFJPctCYw9LyL5KuXmnvxp4eXtYVHeJtDdC48wxpsC7CEYW2HU5au8TSDt7dsEX8nC6xtgXVebkPQ2kiocP",
  "key20": "3WAL69TDj1bVr1DSDbcUHkKz5B1QEKemcZ2hiQrWZESoc6DPMWJH2UdYzCBTgQidEwbvPzHYxAxyaTsgYGTze2NV",
  "key21": "5pa45vHxCbj3KMr59JiEHAEyMJRyWdqVg3WfG1NYZdenfEnPfSinLRr4wynQmiahiKdw22DduYafpiX37FsQoj5E",
  "key22": "4uvMKDmBzX8UvckRAXXeeVWwJqM92o67eWRTLEqCQEAFk1M6zqLaY6WmT9CCfnWBtFaBFoo1c6cMQJ1AfEaxiicm",
  "key23": "4tmurfXSzvdfwFyagTpi7oUqqct37aJ7vJwUhXuM1A9fwLHhf5XZ2FUEq9jQapNRKkvbYeNWJW4R1qeeuqf5eN8J",
  "key24": "pV1CQ2zj77j8eCxKDWnUxEmT39QyFx5Hza9FbnSRaXbHTPbgj1c36pPgysS1Z6wwaEVn8oPcRx11XJJtLUTBwsf"
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
