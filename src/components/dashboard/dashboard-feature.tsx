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
    "a3Xyjr8A7H7yJw7NaG9ifYDaMVoAP6Q4PprpTTcMKj9qbhBNeGoWxb7avMFXSpGjgDJfPQgaxjAw4gXTh55S3MY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbrpYRFjBuyS82jZGN4rJuQChTZLj4Dj4L7MmbfCwPQeBKXyAiLKDAVKCZp9R6VegC3sbCPhDEEjUxmm1rqME5n",
  "key1": "wVxb9ynm9p6FWshQmfW27fvc1pa2MutRfruGzzQezfhXT1ErFARuHxjHGwoz63EyV5eB8R9VrJj7K9SGDxn7xEK",
  "key2": "4euzXGhRaRiNkHMepBbmyWCCG6cL1EuuSiPoEsqEQSaqsw975NpdsfgDuYw9uus6isHZCjDC2y7qFxvX7mKWUcBW",
  "key3": "4rbqiiWroVHvzRep2Vg2veWXJnxk1qBSizpGXuSz3f6kt9WzTP6Ao9qQV7YpdRqg3aCnyGrhZF4ruR37AvGNziZ6",
  "key4": "3xq2Kf6R468L46ghoUmifkj6zfha1AoN3LxroETbJVMbd51WLubfP6L2iFzgh4DMbt94ii3NykzHngvDPuD91e1b",
  "key5": "43hsdeyDTNgAs1E2E961sdoC6Lfu54EqwbBFgLQriTfL9iQ7knGWkZQnAeCVDXWggo3H1R7XdAMk41k9LKq6288S",
  "key6": "5ehr877jB9SAXYaUR8Riw1ZzSXUE56K9MQPsgfTouDB5dMfAqTgKabajt4Qm2APN4eRab9ApA4yFt4C8ZBHaDWA1",
  "key7": "s89RrBn2vgnio1fC8ykKCF75Lhwx4jBqHujPWNw9r74qN4rEXdfUb3LvNE38CQXeNyktgn8FAk56CeeDfoDEQ6s",
  "key8": "2BVU5vVX19JvLU5WLfmxhU7yaiUpMrf5M6iRmpm7y1EDvaFdpnyqDH3DnUnEW8HideBjjz1mY8wQE7ExHJQ4UmUV",
  "key9": "4MEVa88y44pH3p8F8XDcxTrWPCY36WWwdC8vHSZuZEcdVa3BkkcpQ4rETvSDqN3TjcEFJYWsbhvUuRNmA9PkzBUz",
  "key10": "9WP7D1mKUokjxWcdcpFk2B4JQAoNRYNg6sZhvyeiS2gRFt6gE6HuB9bdAvNfcpzD8qeT7UJxd5gEJa4mfnhCx3C",
  "key11": "3dS1A2foAECr2n5PpWDBCqWBdK2t6cE1aq7ZYCd5GW7B7BdjmjRfMDf3retj7gdMPt18axNj5FRyC9CugweBtzFV",
  "key12": "2andBxzqtC3j5RnvGHTdAqcKQ7F6vVDnpEgTEos5Cgk3n8CskLqTCzpnSkA9RR3W2QgeLx46XCX2mhA6aecGVoCd",
  "key13": "5mFLqyFXneZvwB6aq32AjFbeuc8FqbKvfFLBQBoHgPDVJdcroNwU76zZeePDQ5eTxzsHFHqewuXsRngpcCo5rLjJ",
  "key14": "2SGanX34jdNe1eMDLLpHy7fLveXDf3jB6F9meKvk4rgb9i1QjaZGcb8KYH9dPH7nj7uF14Hm7btnY8ijMqDuxphF",
  "key15": "2Vyuej3BpeD47G3T4hGK4nrEie2anq5uDyHBwPkBCNfKf7Z3aJoHv1KCCqMZKuRR487PJBvNFddgnUnKHxMoGK7D",
  "key16": "3sSmi46fbHqXEQzkbN1VEDDH5xaMQbawfEH4kkeUica6fMHqkrCvEqa2a2Dcq5c7r73aCwYgoScj6mrtkVQ7Qyvb",
  "key17": "5THq1WfqmPqouwvKBWcyZGS6LzrdT34QvcEDH17tie8iNK5jFwemt3YBYfqTHTRzQ96EoEzfLe3ZS17GCDmqxh8E",
  "key18": "5kP2AnPucS9LdSE9HGuvs3jB9hujWEH5WrV4isFK9kfCZ8hM5mo2MHUo3ZG3SwFutLGmqjesxuX4gp1QzChmj4oe",
  "key19": "UGypTtNTiGmCM4b5hEVPrYidLsSt487zk8EavV4p2uUUAbLLKG3EEVdL3mbBXPU9wUsbRU9ogFcQsTv6RJM9T1K",
  "key20": "2rcLCkAc55daEfjNBi8ktFgpQZ7bPcs3DnZqmWmXMo1hVx9JyL56i5VpVsszCnuXT6DZtrdihnmgmyTYFYtfwTTs",
  "key21": "4rGw4qb2iU77eV2thKgJhG1kqz7Z9grmoevYVtvoNLdebjKvFAo4k1Eh7Et9VPwm7rNRXbfaJfkWUDna1ipFTKCh",
  "key22": "4dJQmQvKDBKgeNyrmLA83m2sTxFAoEvvHTWqnGtJzo94umbLAKzPJb2J7QMcVcMJg4ShmD1xqGeRwbQf7maTmFmc",
  "key23": "5j1L83htX21qHEND3pm82vSLLHhNmQtQQfGagbTjZBnRcmq3UjDfhWJv6iLDzUb5oW5EGn6dZ5EJxRMAfEfX1xAk",
  "key24": "3Xc18RLj1XduyDS5kvKDwi4vVzRThJsAGDyfkDbFHvZEfLFkNa5wioURFhQZDzBLw8hz16FnKbCJFavmMEQvc4fM",
  "key25": "4uoLDkfXwkgbrTUbmvSLY11Fs4PJk9vuXLW6VkqCwZDv8VC65kRXucXnAoN8jZqEhFj9WnLxSbzr1u4SeYqZm53z"
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
