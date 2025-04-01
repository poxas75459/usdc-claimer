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
    "rTEBs8EehgMnUFcVTDcTnGma5Z3u1efcjiRNitMuzFQ53Wj7dvFfEempbkMJPXyfYD5j5j242RqpPAb4dMeMiVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDhv9BAvbGmHWc6AWZzbTkY7QfGcbkKs1FGsqAuwqtdNu9DQNVPr6vziLgJ8Q35EgdkbtLmcPtqMEiXmNJbWBcD",
  "key1": "4ByQijzPv61BzkNiCX6MyNhNqUkCk862sj1xbam6cXZ8AuNk9dVKNnAMR1D8DERQQo1PAGpGHj7MCASL73vgPoC5",
  "key2": "2739Kyb3msTg17FRXwrctumeD15EL5NSJ3CkgVVPwsEQAX8XHAdpL3FtrsBbpZN5EPNuzVqoxMzJn1GsU8oR5uwt",
  "key3": "4ziEBUnS9657QAisFuFnvoJcuJqArEuZMvZVShx6indPqrUPfpUgbBrbCTzQcc7H6FQEmkCidVf1uMsKeeJGkqTm",
  "key4": "4EKieqyN1PnbuvX2SLaGAeZrqQ2uRx33FPwBvMQi3dzoc5AQ4BRejNzhFtc8oVicMNEG2n6b6zyqxTckoxVWpMjD",
  "key5": "37Gz9hhb1QjyBtWwVenSfDrksvQP14c1kQd1me1ypKcn8MhMBt4hCoy6EN5vCKXmC2fV9RFhJqtNZx98Xy57NsQf",
  "key6": "3U9Rn1vMvYnPM4djKjQdn2BnB9EVtSGAcm5EYeStzocT1MY8iTPm2u2o6vftKetX25hpYH1s88xMywBaWKcwErjp",
  "key7": "3qfHYkRyEYe5xYfbpJ5ENCU4QHDEiW38AptAeVTp3VRT9nanGxhgCrPinhQ9K9TcXNYduTSUVwQ9bFPR5Azi3sTS",
  "key8": "3pozyTQCkMapRe4uGqA7wnr3MsUiXYQPeNysegsW31ViYvhXDsR7PzA9NtDWTUa53cm36w4ENfAzHMRb4oeVS9wf",
  "key9": "4Rek4cXvzp8XXccAt7nmCmC9nEeJ3BYAC3Pg5NFfi1bxc9tX7juji8ZBwBzBxikdCMwPL6FGWACCHPy8QMQQPKfu",
  "key10": "33hp3w8XxWcrT6TvNS1S7qMyZYrHvbeUbRaAzxoH8yQkCfpGZ2Zsv6rwAbYHiZ2qii5tiqnRsodDw9yus7t4MiBn",
  "key11": "S1B1Qcb25eCrjWKmxUnA3RGa17u5YsDwQG1BZ7mysBHnQKM27tH9qiAy9WZJJ77vsTZs3jgPWYzALFPbfs4Dn6E",
  "key12": "32xye11nDKGwXbEFWDzDd5sE8bzeB7mFqMmnmuSDeCZSGvaBH6imaZhBqoCwUpgK6MqVdXys8DUwQ9Ys7adBxyAe",
  "key13": "4nAxHLRGbnN9Dx6KWP8xNxTQnnPP6FP4LD19ToDMsPiT1KyTtNNsUVk2otQDH4AqQipp8dwJfkSqVsDoB8QYPQwC",
  "key14": "4vevWGU6v7DccNmJZCZWQkHcDM8Xz4d6MXt1wPJFB8orjhaL8zke13TYSEku4DHGn8grzFwMxbtgBUeUwUHKeojA",
  "key15": "3CoZ8NGNLg1x4UkFEAXKbyUi5bw4xCVhpgjdzFScD4qHDCnqAPrwzZZtVQ67dmMcDG825sNP7Z74miaJa44e2GmX",
  "key16": "E7syF6tt5YW9xMSsVYGagJ5qoq4XiHaE4N76aorLoBvNK33VtxL3UDcXyD1GD1Q1c4ckfCjdB6Njy9wusDgUzJL",
  "key17": "5RbvEpuSk7CcH7i6jXfDdoeqdLsfShvyVF4RDUXkLqEUJU622tHL4LcZG8fRHVodYvMntwdMYoakdRu1NhC8WiSx",
  "key18": "3wdtt6xRKvyEg1KMqfZCuQFuPEeYWF3FmyvmtwQLgCKgpXQsm4kuMZ9jr1XwRTp4NabtrqXxyLZypjpgMHHX7Ke4",
  "key19": "3HbYBtkpSnHnT5wEfNuo5i8Gmm5uXk4wCeMYhM3NnKqbXfhgdZTBYA3y1JdAFvS5bpmKxP262di6H87hzpLKxXms",
  "key20": "3So5HQ6jyiHrMwxG2pkAhii2ad8ZLLdKwQaFhQqRPgiLFiDMB7PK7EzvtXRMEEmQUhELKZJMAXxZ1FFQvW1ZjXxG",
  "key21": "3B76FnfWVma2TND995nboHzmiEg6dhvJzdNEPV2AAbsQF53sZYCX9UtSWG1LfRrNkitDKMsh8kR979bxfPkfPfro",
  "key22": "3zA5XdyBxYuMwUAgH9iuPmoQbeHbqkFeyXtLVwuhyKjZGB9ZCfwndGDKqSydAh1aqaNVgmyCsapQPUB22b9rpcTY",
  "key23": "2NHBtk3EUHvFRZjjegR1nPkAHfDt3XjUvrFR9zewk7yJde41GHAoL8Rt3Ptbyh2gVw5pYszyZgVNsvfnPh61x4AZ",
  "key24": "3kMcTG5XrnSuXj2tUBKhkTBT8qGnW7PBMQDYQf8QqMyjqER1Crhv4wFF2yCNCC8v8sghME4EahaHRaVRMcnwNgWE",
  "key25": "mTCeT8ZWDKmdpw48tHnzmbcmLnDNiHiekL2cAaWNwFuedMwKSK8ZMTSyE8W37ec8kpyM21fk9vFxpJ32Gm9c5M8",
  "key26": "xUKZPGq89X49sEXVHMcyAq338jXQYewEfonyjmw5UtUxMToACGngnBmb99mNNuxWyaVZhRU3cfBeRSmXHFhj8sw",
  "key27": "67T7rizRECyDeijMauWQ4pSRpMUEmhE19RMX7cxCpHtTMZ6ZqH47vZDqwGPFrnDRGz6JZbfSS3f3bmSVMq364VMD",
  "key28": "4yPe6Fo9u3xPfvBF3rMCaXd6ASJdvjP4Zs7L2er8HcW1SHFVdE9zzFZuotVRxvxfeuYEwrT4C8N6LjJvJ3ZBYEGT",
  "key29": "3HzzCwjghhFAiYP18dYqLZCS3QJ1r3dfTwVsr2deM8vtcbFq7XbH5xM7xARQ5udJQzU8JjcS7vuTH8qWTzHP9am9",
  "key30": "5vxCGBhhaciejC3DV7tesFdL3Q1AoGKB3oAq1TDLGNJaW6toVY2Cms3RtuthxDUCM7oLhBfxRutE46nHF3QbJiY3",
  "key31": "nv4ixULGHfGyMR4UcnWHAbTVEP1v61yvzfbcLQCoGu1nZ9yyjWsFoLZaakB2X1HePZHvKyV1ARrtJLeNsvhw6qw",
  "key32": "641oyCAufah1sL9mMSo2zbEvz88ErmPLWDG4FAnFC525XfeiEPxrfJ3DXxNoUWSgGgz1dv2MsdL58AjTjFhnxHAP",
  "key33": "5SyekbePfkm4eEfjj7eimhDRU7eSXMwn58ofLqUoPUFUafJSz58GhQoLaBUzY2GCMtaTpFKjfoANoMj8wfJKovTg",
  "key34": "2bV81w1neFLwwUmfGLAtmjkvMjHKCseMCAR6DtAtPC3aSuYrErhWEE7LLrJScQbBWS1NonUrEvoLENZ9me3BgYmd",
  "key35": "2FZNGjhUqbUefGGHcVKusC2eHp26yD8ynUZoDXcz6QmxUrB5xsQtyT6yRYNA4ZRhYiLZZcd344bJHCaZVshYuiEx",
  "key36": "4mLBXm8dqVrBb5Zut6dYeueihWvbGN5nwCKbzUTdH6TW8xgT83qLN6magnAooVsDdKqrXMd7LUXPzzHDfaxyosfA",
  "key37": "5oVwfnVeiL99Pxe2XDsb9rctXuXFnJpyy1nZACSmC59CXyUYVrNxyuZ6CQQWfaKQEibnh2eZpFL5Yp96w7uUepse",
  "key38": "GTh9unggusBUwhxw51Bs9PLkDXKx4nHsZk4Y5zcdQmjmemKJWML9XqQnF3RiqKoQDnW4e6VmzXLM7rkdh4bDtnH"
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
