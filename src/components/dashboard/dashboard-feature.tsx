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
    "G9483sE4iu5QULc7fsdctHQC9ngGMmqib6vPoHPjwvJ54VKvJ7DQ2ik98xcymATNLmBZcfJ1jYugoaz4EGiqtfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62712iZ8DWskovZxVbHHormD8PAgitTB1vGodZq8cM2Svq3VYjU4y8KsVKZCUvJAPJ6BRpcoQXKxh2qbRthsMCFS",
  "key1": "5ExCPTmGtdeYxXLeg9wQ7j2Bbei5VceM6xsg5p2cumhJHon9vXfjPzzHubU9KQkLJUTUxDE8hDHDgCzXQfz5Hxao",
  "key2": "7s2fxR9fvAVyBT42TGMCpQhnNmHZTka5vPGxwQeqqUJnN4cqh67Tiksgf7Yin9KsQybNpoeTgiTukbpAQHM8m62",
  "key3": "58fHnAvvBjz7Pdqa66EHBiDQ2iPfBfuD2CACY74jn2BysWo6yxFSDjGzHmeL5ckruvByms8YNLMbchFESy2zSmiH",
  "key4": "3aZxZhSCbYjYkrYJgeG8xWvqNiMEtiemVcE1Y9z5hjxx2Ht7ra2Hs9kgVDEngpkurfXRAjX9AJcjqkoxigvBZLxv",
  "key5": "4k8sGjchKcZrrNPsc8DbxUWNPLA8kBpG8FzdJ9Yf7dfNDd9Tpsopi13tFsepX69hWxjEuqjxBEnyWSsrEBJa8CHk",
  "key6": "3sp2fUapqRcUqAsx2FVNBMrbiznM4ruP5RBfwT3n7Wi5rY4bHrwhKscoGiKzLUu6zfVQn5oG9n2vrtDUDCL4dwPn",
  "key7": "2qF5H7HwhHTtY2EPrXhc2L8Rw8vSdDi7HkSS44phMV8UBS3vxzGdkYKUvkge5jXpA5PwDXFNsfDCDh5bDgWp2v2q",
  "key8": "5aEgJmFieCpfBVGpLsAMkNqZa2aGbKpmii8vtcdXLuW9f7zMwY5eNnQn3Bg3Ac2fZo9fSuMf3qSqnQVDQjcwXjfW",
  "key9": "3nTTw9HuuRykyqrYRYSGRpbkz21kMAnR5VbtPXq8soatGFPRDnnGcSfJapGFZ4RdiToq6XK9mKiP6eDuDYwuJTxF",
  "key10": "VuEqsCyrukqThVwUL9PHjq9VP6DJ1dUhqVqP7nw8Vtb7ZgJwxRwvtevUpnfZhZanbX8dnsBLe198tCysv5mypzC",
  "key11": "2qDPigd6NoByFBfuWEQg2Jfkg6EPNUKbNSNEb9gum1oQ1BYzEckb4Zj3ebmEr7gZCSxAhxBiJneqhPQoAJhJ5mRc",
  "key12": "5mFdxzQqt5zhnAWTFfndbftUboSxTrmUdLY3cWgvLNTK42KfENvcWMVrUBpVURRnRXxyMBrHi9GcU3mkgYMSEk1W",
  "key13": "2kC7NRrLxnxDCAXQxjaq7rL5cpSkMd8pLrwCg5N387CCL79MRBSGkmgQPW5WhBUkhB4PRvecVqk9D3qvqBdFgCqF",
  "key14": "5tSqBLnLw6b6sMMDmtgsxBu34hnh9CaXse1MhJ9LTWBhfn9UAwvn4QAZm6SmwEpTGoynbZjrLrSbt6jjUTHWyg1G",
  "key15": "5S2KdKwkd2VqcXkzjx5zXCZ7Bbc8AaLeLJcKHqWiMpkYkBQ5KBNo8XvrNJCcPB7wkY9gt1H9LjBtKGtgJGxSjjgi",
  "key16": "UtgyqJubiZ9DAb5zb9mqu4ZGJ7oJW3VTxxVMDXDoS8q4yUKJ8GQ3V7uYiRVScT4p1rMUKKECzetDrh1jxGbE1VD",
  "key17": "5LEpUuHwBvFZBfQ4VmtE5MBXwSuAoxiEydkrnJ3syiHiMyQaEHsFaV6eUgw8qf9Cd5acfB7PQav2BVc9a7wCA3dJ",
  "key18": "2Y9RsiaCbgjfhB6tApeoXBjbshXyD2WTLGUhV7UKkCZGd4hkms28fTVwrvZnjKkcpfXGrNxGe53gNUZtVewWJC7E",
  "key19": "5WbBkQRAm2j1m9pvnSGSf6ipyNWTVdaCjjh9tV3jj9hvSxtipYjzy3i6uDdQy9RMWMDLHregsNu2vbMRVPpPm9oc",
  "key20": "4UBztiHgwXHPkrLAw2dL7n3NkfjeqptEVNxDpWJv2s9oTa7WdoNfgHodVC8Xb6pS5rLWXSiwKMD9pwVEnCkot1Z4",
  "key21": "w3x3HLAnJxz8rMBUmgUwENVNNUBm6oZCHXfD11csxZynoGPmhPWX5HrNiiYDXmvnL75JMPizBUdtpg85pFyT9qu",
  "key22": "3GYswUc9sGeyy2Tcp32LDX7jZmnW6tYRyvkUuMo6rZMsuVdtojZPSL9va7ZrmTVgKk9zdJDH9D7hdtEozMP61Zeu",
  "key23": "4MEXp5WbvBDaGS8SJ8L6C5FvqQwvY3VzcTrAoxEYZnAGqCRibC3ifQA5jx74wwLnRnmLFReAPqZ1eAHLrPbjBc1d",
  "key24": "577v2wTfgARctHqYrdf1ZCiLCKQGtqEqNzkn5rxRprhDKnfqWLFSmSxHeAbeqCWr8d8VkRFaUXJfc4DauanBt1m2",
  "key25": "8BhA6npKBJb7hENLe9ArS8GGnTbAsJe9nrL4kS92CbE7tnVFkj26fyaPbyopBFtKpxLGHJTd7KAE3xykaTVF6wJ",
  "key26": "2VyWYSuXDNYvuMVy6pB7RxLHzXdPBZd9uND1CLJYqA1pd7YsRC7Wij1f9K2iiBAjfDHtFvCdn9V5inpGr4tijuTG",
  "key27": "4hizwADqcz7Sb4ENy8dsEoY7r4AB2iWUrNSMgZv7G4NgASiaqkmrBjXNKxK9Bj7otjDg8GmQa57fiKp7mMFw7Qcc",
  "key28": "5usrVwGqyov2W6TAn97r7NvN6h5F7nSuS8EFKTU6QsWBvibAqZkvfE1rQpPksYBFZydR4AVai8PVTczkVpywfb1G",
  "key29": "jGTTf6Wxes6vDbUR8GwGfsSXRuDo21mnyEdJ7Z3UJ8D6KRav4mRADN3JJQ8ZbP1FRW9UWNXUjvNyH2mUCEouDtn",
  "key30": "5KeJjqRRTFx3gCHv6q7ZdELjYaomM6Gk2G9797JJNBUQX6HQ5BFccM3PZ429nebyWfxQLK7wHE2Fe36zhp3ppbs7",
  "key31": "565P1DviDrjnEgwL5CaWAy5k42VLmLSY24zYSmrLaaTBhKwQxxRi89e5YcC82aXFfM4ME8nbHwjJw1rqByq8NHHw",
  "key32": "5VmmsnQ799xRoMtzGErH7uwPXBmLRgsADA1SWYjTGqqAXREqvXocWymzL2FdcKPkVvnnPPTYMtgTPKYiqXWKvVCr",
  "key33": "3FMKRCya4BPA28aqjvizUg6atYNemJyanbbB6H1wuCXGidikkLmYRTtqfZhSZxK6WpQw1p5KLrheMVBCCd3bihr9",
  "key34": "4AYGqVjaPyp6WcvTuAVY2tCjvH6uy5h1E2sFDc6xk1yYQPEviopq82MeoKTaPQNg8Y6Bjdwua9BuMRpk6VMgaJcP",
  "key35": "2p14EgFrb3YUD8RMzSJDVoahUnNdFZE4wa1VoR5FJ5VU1YgHyxPKpCcqcTuWPcLaBqq8j56U9XVuRrxw5EzML89F",
  "key36": "56nSw7GL74n6GRc7sN4UkbnMHuqLc85fTRBs2PmQx1Ri7B8c6BEnbRXvRFEE2KfaYDHqjKpC6R6eYqZotTnuLiAB",
  "key37": "37nwXACpwjDH8sKCy2kauVdAv66JTvgaTeAyWJNK1W9s4Nf6S1pULBtgahBND9ajvzgmNqgjyV5SAkMJsRF2bj5J",
  "key38": "3tLTWpb6bBnLhJRnn2dnA7EqR1UiV3xYq9EijzqB8i2NPLYMz4LhRWuKdqDgGrGhfsTr3mnohazPutGaPvSBDrdw"
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
