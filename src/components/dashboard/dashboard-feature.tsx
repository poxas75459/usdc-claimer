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
    "3x4qxFNCMJoFurDpfhSH3kR1yu1GBdEYm8TroVtyGn57dJzxNtwLces8cRPKk5jWJyBBPqK3E7PQ8vej5VYejR8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzMKjDDTMYE4Wbcz5y7S5s8qx5B5Lqe4kqt7TUW2G49UHQjwo5grxGnnnX31agfCdbForderr2atCJFhLyw9SWe",
  "key1": "2EXcwzZezaSsCWmFNRa2Mqomen2RcWiRzWLgxF3ERQb1VLXsRC5yU5ozRU3HkF7W1FuEYRhYYWcEqyEEQgNjcd6Y",
  "key2": "5YxmTSRyM99F3XAx5BDccQrit4Mdp9cxGrdngckUMeRB1nRL2gnxQazaGdhuLkhea9jYNA8hJC2Z2ADFeEHT2EfF",
  "key3": "4Y1kuZPDwmzcQ8C7iNGPmnLAkLAv4vHs7d2nrkouuUdFdwJZeyp7FqiBRGZPScKuLaPzZBWSqmBJeV5dXpCRpvmc",
  "key4": "2CiFgXA4GkQ7C9VEo7hpTnzkh6mLWDNkBJeC6HzpmQzrcZqcUpjnR8NJvhD6k3EpFPJAuc8HYJH8vapjyDf7go6w",
  "key5": "4RT4eQ53UKJvmGUnbY9JbQzoYYh38p9U486piXLeN8qaExp1E6UeEPFmKApauDaTmZKhMaxiFb79QF3ze7EPncd",
  "key6": "4LSz63qK6pEoaUqiePKdBXmSKLY6GMVHotdaRyWLctn2uwphtN3pPK797MszYiqrTEtwGH2akuaKEgUKi1JRxiGD",
  "key7": "4UMdbqMz5KrXfMNUgbeBQuU5kP6ZrNwsThXu9EiAxMrNKDLVUuVLHzdcGJWLV9Mfi1UFyCSDm8FE42NaSosaUmku",
  "key8": "3uYckyZai8DhuYHFnhVUji6s7P4umudLZeCv5rbRX4g6WqgJMFdSFcBz3UCKPHgqq1Da7TxjNzcWYmEtDdBkJF39",
  "key9": "2amciised3ZcjJXgjMh2TmeRaKx2yKUzPLfxb464zXfCSQ1W4oo3s9Gv5hj132U3hNqp7CuYWquNmeQmUkFD2w3p",
  "key10": "KwovU3rrqe1WJDLDwPMyNefJA46QXEjzc2T9nyJH1aFWWGqTpdAdE6go2jFgSyVQNZUM7opjDAb3JmsHwDNPVBa",
  "key11": "s8QJVTsppctHSfPDEWuLZYVVtDNLW53j5M5MwEyQwHwXEx2LgzkLbsUZJYGppP3AUToY7enPVXv6aQeuB8uh6sh",
  "key12": "2f4pMg79rSoWSxUxW9YTguAps6vvaQhEAUXPyXGg3DZW9iKPZAZGvoyS6j22FGrUUaxKax5k7SGtXz592DLD7GvH",
  "key13": "3kiKKkLw1BThC5of9cvTUWr391Fe8QLAbR7fnWMBfCCsUG5EAMT2AYCUhf3Ukzfz5g9oNVBuQCwE4rn2ex6VCcjT",
  "key14": "9WitgDPHoWwK9kZsnc6mnGU8jGvkgS39uTmcdUd9uqSJxMb4a6KZSFAKz8p6PnTsoMzbBjemgMpWFLU22XczwUp",
  "key15": "7qqMErsatrA3ChAMNAnYMmcwRRwmak6sBnvuViaLVmvsvhTHNfzDdpq3XozpNf1sz3dSDe9q6xgvhTFzoMptdJi",
  "key16": "3d8rZZUPGri2L3JG8AzJHSzT8YQgyFtTbRFAF875RUbYJQ4wkLNHnqCAJpCbzBuKesMCLkXYaBXDTuh3Zec5YMPR",
  "key17": "5pwP3vtqmTxnnzCVKNMHBn9edZfmtx9bvVAkuuFPLd3xsTattjF1NvX4RjB6rs51yk7exG2ksRafDETafxwek9Xm",
  "key18": "3u1jX3vQG6jfZjWXdzjy4JZ8MVREejRRKgiiRSmKVEi95XYpRuGbgKVhPkEKuE74RFdi49gbsdTtBuKpgBJ1yH1x",
  "key19": "WkBnWPLyJKry1n4rEjQ7JxSGjYjASqMypwwUuiSwrTxhZ55HZgPuU7ev66t2jJyvsutGmkTaTLm9kULfQg7u7Ug",
  "key20": "5FW38n62bC4q6osxk7K2HNUA8yoccEA2zgZfCYUcY7nHmNs2GGTborizfoj2c2DYBVWiJzrYoBVYFSp9nP8BJ1PY",
  "key21": "41EcGrcUFoWknhwHUMt5thFj3QBjnEJEwfCxRgfRtUnErcDLsNmvTpRvW5DrU5mNBHKY2c94EW62a35qMw94pAq4",
  "key22": "3ye8wiesepAgWeXxd2G6Y7FqeB6kDLgmVs8Zi7QHUf7Y4siTHnn5ZiGuaaYpNHw3w8Rq4JwfcvkUxgVLXqvA4Q6Q",
  "key23": "65ggusC2rjsak4TZvS7FSZVNvJrzXXRqAy6Qeo2DGrBGEacjF6CeSu4dghG7Y5GkEDwHjbWoqtTE9am9gDu6nN6r",
  "key24": "5J5GQNdCECFKgbxKXV8oaeBv3A28ofUWqs6AiJbCVuoTir8UduMAdA7kpw7cGmQG4TQeUYmaodbhygrte2i1cyii",
  "key25": "4gSXXUoRptvvSsNyhfmveqkkwSaxtV7PsWonJtAr1XcHDvYkM8sY3kuoc8JdcAiizQckru3U2AEy7pApj2qtFW6p",
  "key26": "5NkkZQrRPJrKKirZS6RSmUtSc74pxGSpghrk8oatDSYMNT4nzjKYKXzchRwV8zptpv5QEK925cCzdVdaHVa9ebfK",
  "key27": "5eia8hsRvtMgDo5uS56QCwiVoHGaD2H5zNJv6PCbScUohcKAZHxjKAM4RwQie2G4JTpCxFSzM4W4tVaQEwi6io3D",
  "key28": "3nrximPv8q6TAwKRT3xTWApdrJ1zk5sAEv61iA6ZPPQLb6fx5L58XU4VEHWVh2SfagcLZMzSeMf6MPFds67LTX61",
  "key29": "4Vr3F6TXDadSqKpDKi8nExoQfK6XSMJVTwm5AGBPsLAFPy8DhYKDHSXbPwmHdeLUqAZoj7ZgekwDpWAQ7xQrzUgb",
  "key30": "2yMWXRFjjik3oRzy5j9HKn1q4zupFPt55MfCyXsCCDVxsccJT6dnQgL8dJCSmVmXEzhz6QCJz1HxVf9S2T7anXVG",
  "key31": "2E8gWubEARSh57Eo1drm8VJRRWjk91G3rPCttqgXLaVL6jbs82VUs9WkRdTtwTJRtik3jKb4ayfqAK5f7D78jsJV",
  "key32": "oTN3kc3zHVBAG2LH7ocPK8oNBeLQ8EptXD7JmxAzHAg3CQTjUrcaXeJFW3SbPgY9SKTbm1MdzDaaGSLM7jK9kRB",
  "key33": "3Z8CErxk5E68pQbyJeb4ghDpMCgMv4CiPFR9CZR6dcJHmNmA1vvNxrv7rE3fdr4Z3Q8bLKNMutRkupJdcuvTisr2"
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
