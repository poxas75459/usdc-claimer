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
    "3KgdwNyiL3gnshQx3nyVyMZskRiFkbmC1wqzzFQukETPK9AnJRpVu3Wyy8VzhpP1V4aqfCFtD28E9eTS5cfeWVjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfUjq91J7zfvWLikJJsLLqGT9KDh2LEYwtAZLWDLdpcUDaz4DtmWuHvnALvedkkkY9nhFN1HktmFaQ8YRmv6iqF",
  "key1": "1qenLnzSUSpmM5zrpyVD31JEcuqNSbRasyjU4RkbFf3Foyw3XTT5pY7ZxD9SsURbC5Nm4H5vehjt5axzfKu9eno",
  "key2": "2B25jSa5sMBpmYT5m3zB3PBEbNFU2zst5VLKaH3UJZWDcc4nxLQx8b7goEVV9HEV7hGTXRWfPXm1mAaeZxGhSYxi",
  "key3": "3PUeSgmg5beuYU5Bhd7bUHuAS25Q92FH4RCx1Zh6nSJZhY1Gk6riBxhzera87yK833EFACXPfBykx8n2kwjD5hJS",
  "key4": "4GvV2eU2EFxawTNrw2hZTZjNkNvDA86wxNb7wVUmDh57awj8HbzNqnoLQW6JytkGu5vjVnzi2xaK4mTkKPP3n4Hb",
  "key5": "J8iG44Ec2s6uQNziMAZzrabaSnVddc2dExxR74fYJskxfS4aDeWZBNwywtWbJrxEcc35gCB47T6XqoJuCHiMXwb",
  "key6": "3Fukc4LXw55UjS45YJRu1rgfrZJVbKrmAEaGtnXXZnPhQn1AF44pesnnGtYJxjUCU2vV2KpKMZD6utuEEKxJv2kA",
  "key7": "3TpaHSqa8qjGxapajWbGXffgeCEZ6UQEMYSRgrbQKXJnQ3HV8x4ugK4YZp27yJx4QVV8cmxcL7j9C8qnnDnGmSDf",
  "key8": "tTpqHp96gDUM2RAawAnt2Bbm13rJnYfhFAJGjB7BQxVuk1ffbYELK6Jiopea1KvidxG6xp7zzNT2dU4SGQMGFsm",
  "key9": "55WSRk9e2ekFVUvyvzSWxc1EzW8M99RLLwBcgQ2vpHY3AjQ4cUnaciiw8QE4aj1UFCpBj3spBps4jKnfjtmHwj1X",
  "key10": "3XnhLzXCx68VApxMzCgmbAFadCrKfZQGvpFH8JbgszdCBotv8jMuKZdHkCDwJ1pPoC4EJmxyhULKMv4TE1c3aeUs",
  "key11": "6166QdGBnf4qVZKzvxLs1wytBp6EqW2pJsLYuzzDGscsx86QHpVYpU64ZWQ54AfqWbAWnrZKAK9d3tU28vUVLwix",
  "key12": "4MPXu6yvX4NsPN3jc9LCQuDfbURZmUV4GCjBvEAWPQfhX8TA3cYoYpP5WW9NbMSMepJTsYxg774qEY2saU17Cn3w",
  "key13": "5E1dPCp4yEYqsXzHskDzaq2gP3AXVxVp8B5NSVq899jviM1nJJqEgvoiAFM7AtQe7yZoLDUn7fzbCkP9jxQBm7me",
  "key14": "3qyrMUypZBfaUya6dDJHZfDNnBYVyBE6tSVcPQXSSnwB3yTGteXm6j4CgcfHXCvYespiWA8aiFhNw7bgg4aiT3hK",
  "key15": "3W6N1KdzHVco4gFRg8ofuc9j9M9KM44epTVLYgzMiWzLHPhu28BV8CHddKubL5VT21t2KrU2hcfRr5q1VuSRLJy8",
  "key16": "27qgEi98k6vWq2D2Bhzi1XkqYJY4qpD5ujLYryd3Eo1pA6cN9ECUBAqjkUUrVRURn6EwarbnAA6zR2FWJSCuVtxM",
  "key17": "2VTjpYLeFnybQcRxoNwnTw2Y1MxArsmk7UwZgU7ZK6DWJGYrFWy4DzcyhirrHBntnqdT9GyA2L2Ztze2WQh6eXHc",
  "key18": "56V6yyE62tqW8zrza6HbFUHXDY8BiPPCfGrnzBvXDusWXurDAfSPS79WtFNNRUPXcBH5zi17u74SCoXMbagDHDDw",
  "key19": "3vb7eW4q769xLmW8aU9P5ktW8eXExHBUowuZLDMGpCmP8pjGibqDwSvi3cpbo6EVwsZjTKwfMbZYxgYnEfGb7wQK",
  "key20": "4rk9X8fnpmMoWYvS9JF5DUsqAfyZVXKvVttTjrfy12hnjRuk5uYyBEsKpwPppLKSToszstRwjpgrmeaCnA7nDLgq",
  "key21": "2gQyX4GLWBJAw3cSQd8xVG9C4d1oYzAsSfWEUZLRq8QZZhfQcbdjy6Kk8Yt8BBa88AXPWK3jaLPKsthiyESd5R4s",
  "key22": "2TNoeuT8cxBQUP5yMtwUri1U5jkGYKHh2iMrdqAQ2U9tY3gZZM6JAJ7PpFif2P11hLBo17Kb6UKX9b6r6FJ7qvwh",
  "key23": "uNnNQoWEXaWD3DDs3FrH6c622PANABfUQTmQw9TYM73bh5KYHDDEsJoQgsd1pQotqcDxzLDwgQH87bAgHDQnZeN",
  "key24": "AbgMqgLJWKFsNuJG14nQJvWU78yajAYzdx5yenmmMUsvGPpkqTHpn428mut1ZUA9pDeKZ7ZT8RiFtqQzGtFUN8d",
  "key25": "3RBYxxLF2LicMyGX67xrXDB8Vow6gysRBENXq2ryre5GWqakv8iQakPkHF3pmrfKo4RvaVfkjEJ8ZvjdY3JkRE5x",
  "key26": "HMjJvCGgHRo8gA6rgt11rbLvYJUWvQ6582raVnkTpRC1v1zEBaw1PRkS8RJgwyJGJd6YGA4qWNNQsSmrdGz9uME",
  "key27": "5RiGmuV74hqacdtFF6pK1FXfWBvgub91HMvaGjdD7wDqZQzBFWjQ8QHYhoMFGKwKAiZ1S9XM5WqCPuYs8QbXJJRb",
  "key28": "5yGjajWZxgrczb1CCTizy71a5L5NHXJRd7n6hTdfyBqxw7pLdkeFdwG7AmzKYQvZuMdzNUgXrusecki4iuU7d7ZM",
  "key29": "5ARhDx3QnRaP6PL3ZjDZSdZfXp765PnLWWiUkfr61PAT5k8HRVLxPCEoCcpxUndYSaUqLGqQCYmMyBJmb2vQgnF2",
  "key30": "XwDnvXebJ2L2nBmeds36s7gtWhLsQQraopgQA1c51JpfkH8nBoDKCGZU1Y3yc8hCQFdLqymjQ3GbAX6nUP3sBwe",
  "key31": "4nimEYo5Xdk246tzQWriu4j7JH847efWE5u986cJ8Enpp8r6QijqSMpL3tmii6fNhmPnmpU8FHXkjrjCKbC897Zv",
  "key32": "4GyR7dJoPF1bnRfxTJPH7PV6RasJLCiytKXq9LiivGGbH8dNaHasE9bUJ5XJ9arMmibd3KsuFbfWepfDz6ibQdJF",
  "key33": "42Me1BHZjFBbEaSX2pgS6tAhBF7Epf2UKMfTFCSfJj6KGfWapao2LahxWHq9RJBAjg2zCPPgpdw8Ana2nJjZW6dK",
  "key34": "3M8oveEM44LeQaiHa7kGTnuFoGMZrTHyVeRaYUqf9HmtRSU38arWznGkxq1xGHB5Bs3Zde9eZtLuvBW7Bntp6MK5",
  "key35": "2xxE7Vo8wy39Pw9eVxRRPkWpMmVJ7vGk1ezXLweoREAthpJJ34Lu9uFV1jvoeaGVzHKMbW639y7WRTu2aUgrmfD3",
  "key36": "5BZWW4N2yC34xXyT7x2UxWx6pCxU1A1H9qsp6ArjsrYDrYjwCTs2477Hkr5eqGGmTimEVtwVnPQ6RxrT6p9k9qnD",
  "key37": "3GuCCKgbcS4mVKfN1FCTVqg31WxfQpsmZpXi7kbLDyBsSq7M9AUeAxzpduHUbWBnipSF32KtRMFmoVCn9KUwFq7m",
  "key38": "67kCdcjoeZgavdtSetDaivaoYxbH4nJ2PcRm8M6YuYbb5omDjNNbeYNGTD6GvpeVQncbTE57ks9BwRc7jgohb4tX",
  "key39": "23PpYk2jembjFip4G4wCqf3SSYrzzHAjd7RdH3qikToR6FMBkQKA42jT8DojBvKx7wk9Em4a9W4H5EobbE3AeSUV"
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
