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
    "3EfUKf4odesfwqHK3XWQBc1VBU9eqT6n4d875bZeT922AqBKynDZr5kJfrqjWLZz2V73Gqzq6HvHvJtyrcUe75LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lc5MD2aHN7sfhtVANEoan2MwzCupagFfDNBFsBJgDvwbQHyXvYNAoUosJTjRKqshu5TpznP5XtBeqJ5xY4KiTCi",
  "key1": "2WRXAok9qNuMUSaTWHu4xdvrs1P58R2DbrdsTniEN9cLh1wew5dxZ8nNL57LHnBRrbqudP769DYuc6k1QaGAnxE3",
  "key2": "4UAgsMLrfzQdnstsCBtaT5X2xGsLKFBXMwMKddsNv6pmJjCjVmj3CQxAjKiMRWYXDnc7cK3szZYBt1bULYENE1Fn",
  "key3": "249ky9xX8SvmzaeqJchMLAge5SQCHM5xy54xNkUWhw37kokFSs2xUXjbyMHAW5NWDYKFAsjFy31GNmcRwYvjaP3Q",
  "key4": "3R89trb55JJ9e4sZjkT46jvZJPPsBh6NwTurhfboDwGHFY1pgBAqaSBztmH7nukdYEYZcc4vfcWY9nDY1ijH431h",
  "key5": "5pnYgn35YGC4e8N5GeP69hCwAERd94GPNXH41VBnYQNqphxQd4uNbVwrRMiQkFQm7NzUpyQR2zpAPSzSyp1xN4x",
  "key6": "5ji8hCQMQtYDHzg57pW4Sk3cX5U42Npieb7nh4n7jGNw2HGWnDcf5gvVwt38z57wFhbVKznnzN3DqVTZE5nByf1U",
  "key7": "5Jit6Hkwyc5Ehq1ec7tqkNqxdY5H1jujGZxv8Vz3tnuStHighPkQSGAqCaGBr2QWSW7XHg7oHPsDSqWoWqxSCkj8",
  "key8": "5P4PPXNUZKnMfz813Ku9YckK4KYQa6P6p6VExofjcSq8Q4hCqsJprMtSFED9Hhrfb7auNd5GSWXgofHfS8swqjPA",
  "key9": "4SE9zqk34C8t1CYVfwy94RWVePcgTs5CkseuAfHR4xss6DBbuiQUukASZ8i6jrTpRiiSsF4KEwwQhyJpV8mmDHGE",
  "key10": "4w5MGR8VbMGBSsK2DAZZbPy5C3gWdEjEtm3J99o6gQthSDtJvFjkDvVNvAFhDGguztEHKuvfQwwizgWUZDUNzzuq",
  "key11": "3LeKaRAxRJM1WdqTtJtEY64cQPF58JGEqNfMXYQWmJDfAZn8z599C3HBX93VGXJbxYrXz8fiZTKxbHFxiGka3w54",
  "key12": "2EAA56zjtTmuMbfAdKfrfAJnWeX61EEcSDXnEsio2DsncQtSbcAAoSYNQeysBuWRpU94Pk8JRGAKR2KCDyU49fBw",
  "key13": "3yy1LHSm3MV1od3sN6gAoncQ8q7cjJ2Rs2MbNPCASthcxcwyweHyo1jEkDf3XRsNUtXXw65raX7CaHPWsSWUWRCg",
  "key14": "4FUvnfJzbttYZ7J96UMZZj4raAUwwX77ZPivp5oBZEft5mgJon1AqNRxhyz96C1suXJC2gwPbXzBZKzG6BRaufAX",
  "key15": "3JDvymy8AdGeRWKBLr8rbbYQFT2Wd7zwg4QqLfqqoeCFU6inVobqqhyNYuTdxTAHtPQyXvFP3EaBzFA6Sgs1gnJh",
  "key16": "5aRAs3zCL3oacRvtErJz9ZuLwuVngLMJgnv4HxJwmCTKnkksUkW8KEu8zbXF9qKkW5kKBy1KLpjaF7nX24naZRe3",
  "key17": "DchGPbdirkWy9JtDBmhbvjNsoZkL98PfxnfJzy2neG5mxjcVi9EiNp8JAFK6VhPaPKFP1PCJgKvCXSX21MiiD1d",
  "key18": "5L16q4cBUfSGXRPNm9yg7TSNUtghbooDADoxLxLgn74w8qLiqybCzwkN8BAF7ArVZgoE1qHqVbRRXRJ7f9si5tpd",
  "key19": "2oVRfKV8cgF5GxK2prNfR46sJ8oaxqBXWqbz8GnHzBmVUXT5pmmZDkF9S2AWRRJ5hNQHXMixZvXi57vcf5hN7M2m",
  "key20": "2j6oNcc2mMtG7Xa2gTjfwFNY7qzb2RMGARka6foU76UnmobS1wDAu35xUaFmSUVHmZhWWAERvP1z5jyBy4Gnc5GW",
  "key21": "2RoFyrgctCQPF4qnB2ZnzsXSiPYUwznRkS7wchnxDkeB5eJkR9a61CB1fq6QJennUdndwgYVxHFsGfznj5Ydf6Gu",
  "key22": "2qfthK4LVS1hjw8hbidCoQJ2cqNQKdjXXa54tUiLUqcSmHaU85XWE8qGNf2C9gqHSv6UbPAPnAwMa8qUBZ9Td4UN",
  "key23": "3ma6AJhjhBiskyy4GbkWXpbeMSLUVQkrbvgZPfwTELyqJFoUS6pqo9c7d5HyL5CiipmVwjRSMmuwTxfcpNbnCUA2",
  "key24": "2KsyWfAwUgsgif6vHuZfXuhKXeKhYLKP8wwF3opkAKxXtJtEhNvPCxV9LvJ1xEXtYsvmbrKvp5rrmegfvn9HsCLy",
  "key25": "5gQc43vxzruMQC3RTAmYfpyHzcKASmaAWYZbY8FEEguAMj9DxYhumtsNK77DtXCNq44M5X9feRNmD6Hh4sSvaxKp",
  "key26": "2dkbs476Yp82kMcyEPBh48tAKd6hJmuQL9catmQvKwuxUFEnJbKFnL5bwYWzfTsPeinx6Xv3iTStw76tsXaeQz1G",
  "key27": "CwgSFfH791ma9deQfqxDGXtPJbHXKuaMguJ5DGJRYxuTHx7zHP9rr4MJG3ajjb7ZZUgMLyrjDAnYAXFcCBzAYR1",
  "key28": "59zZ7jgBa9KPEhS56s4T1F8Qa2ccPUrnLKcHA38jeEXkU2D6khFLSVth4BGDAXLg1BuagNuES74gZvbnWuSHdU8C",
  "key29": "2p2nujyuQtpRsRo7iqpELdAzaPdKVPLZ6PCYK3cL33dkeax7mxsSeCvpSrhYRrvganN8EJwPB2YCaQv7FnpbGgtb",
  "key30": "2F9XGhrgwz78kWz92km6p4g9Pci1v6qXrHL9wEwNAAwyuyzYYXAssa6T2fRsQcvrVebJW7t2VQD8VSbYc4AZ8x6m",
  "key31": "5Z5fow5KvgUBWJQQVSawmAFYmYd1PwkrjVosbcofpKdnGbfJfsCh2NgC425fr2bRovpDg35eauv8digwwb4jPJmH",
  "key32": "3Js31HuZMRbb9Dx2MYhCjpSgSovqZFgM5RFk89dtumMwWr6kj7G8Emq1fggeu5BtGgXTUxvXJvKV5NmpxWkx1k2H",
  "key33": "2gH96Qu9wc3eA5ggvN8kPVwFvp2eMbB5jTfy8WffHSDk2Roi7dLCh3sXLit19vVn24iN26h1GuiFJQgPSFKdRudy",
  "key34": "5otsNZkrWRxDf5wg26he3E5shqJBpQSHvo6qgYDYTd31YqFgMwHJpppcF3KFK7dtLBTauE3DzNEqNDqM3VZGd2rh",
  "key35": "F3PJoWDudK3rasAdLLzpZC438tTkwqMduBKP9U9tXHAxSF3Y6Ui5dHSLAfyAmxJVD7yZtDEGp4o2xwNUz5u2dct"
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
