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
    "BmRpz5uqP1RUSccCRnSo5nB7LrH9BtKmYzGkjLfa5U45zCwHmedwvsc7jCGF8eSBtCkSuqWrUmppYA16j7FuoqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dWHivVHRKKeyHaDb6KgmwKG7KVxbyEMi9Tu7hV5BCn6nyN1MqUUWNpgUo6J5ohvgt5Yhjicdk3Yvp4sq17Xybh",
  "key1": "51F8usRzHQguVbSyKyjztLnyYnVquUMphmJytcseLYmJivfckyQVehteq6hCixJUsjiyUtFhzL3TPxeuYPqch46v",
  "key2": "2a3W9GKdCDdJGquV8yTHTtkQ1ZpSJB2hVHz9tWh6DRYyYwYmKaEWXcvF9D5i7G1yJYMC9RSKJdgNhjDX3TdKvnS4",
  "key3": "4cZ4EMyZy2k6zaM9pc98sNgCbW6VhZSHXSvydTGYd9m55ULvKMardM9sk9j1waEw4v5wX2PHVUDoKrfewSKbR9b",
  "key4": "4EiyJnAmwSJXw7X8kFC7NY8ZLk1VoWbzEnAjjVYwcaEGMG9EGCadHgkXQWzSL2CqEv69Fb9tvyzKTSvqn3Cghw2A",
  "key5": "2ENaPUzEFGBJwfpRc6gYZmtCXEqpVZADvdFNunM3qV7BuACBLWazg6mrkRD41SryqA8vEdp2WEHQau5HQWBvKaMD",
  "key6": "57VA5n7A3BzjjudNZ8efxYgpF9LY1JR27kV591gzSJzeypUpbTjR8MbZPp2g4Qic8aq2SSdEKfbea4EEmcSxKqVR",
  "key7": "RKg693ZvwF4UqLrGQj2KqWzxBcV6LKSuB7xSm7fTAT6WzExWAHLw8HaBoG74LhZnJ91j6hmQbkoCpTD54ceanux",
  "key8": "as1LHyVbF3sAdV3gY6CkxuUgqBh9CunUHb9J8AzfdVEfdPw6vuAEoeeDwrZYm3qGSpNp7yFUEHW4JwWtoT6j2TQ",
  "key9": "2HzNwnJ7hFdhDVbD3tBVtdJpSh7G3DSurCWJdEyMt2M9681uaesReXfjatLhADHg8CAWyFrV5By1Z1KQMwWR2D2J",
  "key10": "4SUh2kBGPC3dG2yRQ2W2EjUWoUPQMhwiFAwBVNGUZ3N99o71EhLvAzLsrumux2AspjoLKtiBHwnELgWCceHPST1g",
  "key11": "4dBgNUsZNzpLk7YxuKfJ6FNGWHVWvhH2xU1gxRwfqGaPWc9cjhKS4HERdoRBnsaQKSZxKe8KGW1XAtkBeDGxNmQu",
  "key12": "4C34PGeLoB2CHnSkMc5jQbpXbaxzYDS8NaedWbduoJ2Xi9fUuLYhHinfrheAmczjfMDd2p6635jNsxGrweeXb8xw",
  "key13": "5ci8qnxdxBsBsfgJ6j93HknVKjzoh3QcKfJJbPPBr2vNC5q7Smdk9zRx2h6GQ4sYUD68ytR9XFhAWvGLuhpe5CG8",
  "key14": "Nv9FksEKYMEDwF6C7MZvYNH5owDWrRqmU72VvmyJYqpit3dPmzY6VPbTfoSTtR3gVJQzk9yFAcMQFZLUdxtVhfG",
  "key15": "3H5XxJjExK1G2UFLCQxceDJ6hcT4Vq1dbSDyfmKPFeZ4AGtnPS9gCZGgvghTofsqfZzMHswqAcSRY8gYB4KpMv2Y",
  "key16": "3pYkZ9b3Qz2jCykVeKCZTarTxEhKGQaACQVtbPaADTYdssrDmrz2hfbqz1ZPdsPRZkUdcVjwAPz8XBfYbeys7dND",
  "key17": "4pmTxmoN9NLkRWPsFRdc7VGA9xmTyXMWL9NW6mRL51yvMMQngUFnjrWwCZ6YsXGBuqy1Asv3vNdKvUR138GyGSsr",
  "key18": "4zsUwQswncJiy55YfsMasKYrCpU5YuPA7fi4HcD9kzioLLKSmANkvHJFQNBnFbYpz7w1EvoJCTnnxfUsLU3Zgaoa",
  "key19": "3DSBykAZF1gw5gEKGQhHHyNG5Xwqmup8d9HtRvCYmb2sPw23oCUQhgXLsckHJ5empBzdzN1qrrCxXdE4vYcZee4t",
  "key20": "2YaHs1N1sYxAGkxssshN5DDLJYX1BQnCyvkZW4W9c9BTw2McB1uWQvvJnR9nVaFENuqAowCduvRkzUHVPTy9JkgT",
  "key21": "2KftPbQehm2trUcbBBSiRCR9kwMUgArqrtnavCGmYQ1EhvdwndSerqHEyguHUPsNgy3Et9QUZ5GjmaMEpfzU9o3D",
  "key22": "2aGpTbnJBWfCBmdmswT73dMbvJZx46WnUkTY1UWwRkrGNnCGzyG73zWv6qtHU5AhZNDvnQwPzpHDYL479d2YW8uU",
  "key23": "26sNTwuremuMfMK9rdFQTGr9UFRHnUxGKeNv27aXUFTtE2tY2hstEQmYY8rrKEr91sTQT9zYNvj1tmrbnv4BR3ss",
  "key24": "9NzK2Q1NKoVB2L2iYe6j1x4pYSbhPvFgF1r8Aejxd581fuYv3xaFveZSDWjvUcUEjmMhN1XW8bjnDoM3qNbkXsh",
  "key25": "3ziRgnFZvqB9uwnucJ7U3AHXKkb9ZpZz67C6htFAokF2UjAkK6w59tFp8E5nzcDYQy3TbRt7ya4xhi4FFR1jPewr",
  "key26": "36cYvw37AmRPNRsiB71dAWdgRehjEtqE2syDMsWH32w1hFj5dTNCkZoWypxM5bczZTHU8Q764cM1oxwA2YT4BAsh",
  "key27": "MGZ9tU33aZje4H3w3wSL6wZQuEDC7vceZ43LH4Mh4epaydP6jSoXHZFN2HR7e4bNhPKU2yBu5rUengqJpwRxNFc",
  "key28": "24MQDMNeiPWvM6LGW8mqQdaHsVgGPisdzczxukm7g9qN1nRbZfsqa4sQ7pDNn1EVA6Dtk6pB3sThWh3EVTDdwjvi",
  "key29": "5k8jog2RDFoVmBSoFVo6YmSegCmGohqb3EJVoPCxoYFzKeNd9hUBWYXVfdGsq7RDsjMwfjvyLTCHvRGYotKmrL1d",
  "key30": "3N9rj53W3JsLHzUS2ZJcngw6MM2zJkkW1jdArhnkrw8gkn3sP5CbXcypKtURsdPEdGstP4LHdfV8pSDq4xuDKkrb",
  "key31": "57dDJjRzKfCGmHgMJkescgmVZsfLwL51Kkr6iS3WSGjkMrUjpKjsoLs5xF6gbaP4hZ6VMvj5DGEqFpLMQyc4Rdh7",
  "key32": "5gvFbGB857oFYvQAWHQ3ZdyCo7gfnhAxX3uQj9wTAXqhYH576eruoZMyjhD1jRUrUCtAkBwzsjgk4kKKui2LQSbB",
  "key33": "24NoJSJVxpDL9zLj6EFbz8zZ7rHeUyWN5pgtFdLDjxMRYAtu8AUp5ofEFQPYYWGCRAUH9wac2twhYV1qiFJznqKk",
  "key34": "5ZSmq72LE8cZMzFGuxoYxnYsuL6WCYUvLfdPsRYD6TQVa2CCDnujohybJQxuhJRkmwXDRthhXjP1HnwHNy1TaRFD",
  "key35": "3q1RoUFmKYq936ux4e94xkMRehSzgNj3ns7ogcWE3WU8TmyFuFNvBcWfDSZgW8dspXDxaTebuWN7wwKcH6CmZDH1",
  "key36": "KrEJbPQgo1KWXH2wuXUPxeapLQrYUUoCmJGL3KHUgZhruMgqTfrwG6LrDfjkUvMXnFk9HSrPz46m8BTLvZFU2zc"
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
