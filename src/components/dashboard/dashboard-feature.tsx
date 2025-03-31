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
    "2JEjM3Lvj75Nx9h8cMf4qDAjepLXUzQDDtbsJztNc4KbLxBrZiv3TJjJU1n11c72KnqjVz7KdgYMBpHwJiShd9pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48maqeRsWjFZSxhVBZqqhrreH79mQ9Q3kaRKx7KCKDp2VZSHGkwZoT2gaWjeUHKXmynknNAq8NWj76z7pqbMaRPn",
  "key1": "55Vuhp1q76C3U1siiqLbZdkhXYcsm4xd71ppkKkHxNPmFogLJPecrWTmvLNQrNbMbEVd7eXthRe6nWTr812FUurK",
  "key2": "3TMPpKWvSKgZorewxJLyEf5vCkM3ersz9VREZyHi3U2kkypYXPajPkyRX1RwDKy2VNNZSZtuJC63Huk1LbL2dZRe",
  "key3": "4Q5mEb2TNeNeqvNaetE6uCZdaPonkXfgzMSfgoiYamycJK5BFjsQpRBk6J2SSNmUZ8EWuKdKJK8T1eg9aZJHsHeh",
  "key4": "2tzXbztiFT5mWudAvCmV2EXc3BQ4UEXy1pkdjq1Lpdh69qLDkaNHEgz7dfpqG5mL8mj4VhHPoim46jaL2bdwiFYw",
  "key5": "ncQSTPeNpq2FhYCS9qSa6jrSAr42swAp6jdkAQL5eHjsiWQPLJgaEaL3dLtACLViMFuBqTSduwyt5fRpCh8rHnx",
  "key6": "3vrfTSDD6Cax3EyQGB1tKuyoSVbnZ3K3ssTewuVTEvV8BhJetVdEMAW9jTcnvXYwroGrwBd8YrWCsycNyuEQXsMz",
  "key7": "52Ui6U3AL2zw3t9sktZLiAwBTojrYfUQXSd8hn15SLmdKpdw4yxHbod3J78iVLkxufbY7QufgdorgbVWB4NVYczi",
  "key8": "VKt5s7j6aF5q3DW4GY42MMDotA5gse9HDXMby6AdywoDPKFhHf4uwdKAGKuLsKVQw9F4DRzgb1AxfAhh571C4Fp",
  "key9": "5GvrwBj15fDErM2yGS7JoPdVnLE7Hi5bQEzfKDRCsvBFW5tqdwygMvnnyEx1pHmyiNvWdME3hKDmkEkHitn4hPJZ",
  "key10": "3NAhPYLoYK47wsnCaHRiaEvxQC1eR4BRjsRcHGaEnJLaH3jeywXukCZCN5LVNZHWJFqZBWWhEmHEkR9WpkBSMq3W",
  "key11": "cNVX9wFuSZpRUqR26DWw9p4rv2XaRi5wQNQYUcmGpRMkK7g6wsP1oL9CffvsQq5aAauNrZdhg5vsdaHvge972nW",
  "key12": "35xJHjuiWGSV4e58Ki9vugGE8LDsR1cVUfuP97BqDwW7Rewos2GYHsnQ6WjujB3S2KAr2j1YHXVfy2wLV7YAmCdj",
  "key13": "43zrTR5uAG7DJU4rfE5t448suV6gFDNwcJo4FvsPehKtsFg2Ti3muq95ZECh3p15d4KCtUaguSbfmcGeUPxZWFmW",
  "key14": "2BZk9J1S9XFv3TJUass4AsBcEcjF3zM7pJuqv79cGwF27oxwVHebsiDh5JUrKJ7tcjcKvFico2qbfPkDmhGcerjb",
  "key15": "wWbNfJV7BQfXFunV8mJedby8BmFhJPBXuVkeKPvjSDjeqaRaDg9BZB1JBBVR8DJBRTo1QXw9WTeAB5zfs99uLnp",
  "key16": "4Jt8MvDLvNBA5JirgPjyX4mHK9SkbU9oZAhAg592whEdea2ahbb3TQFsH7gkKKdJbevE39n4zjzhbvGXhvjCaa17",
  "key17": "5y84NyKX51jpJgTJsS7TaSAfgnyvsizHkPZidH6VziMgNT54euxP3WdKsakBe35xa2niSJLrXzrV4vMpR98tm5so",
  "key18": "2daF9fy2nwaZT5S4mHvVVaBEAt2M1mmP46DkR8sfj6difXpXrBZaEYR47zxVpDUoq1CHkLJ8PrYDMAVQHMr3xoFd",
  "key19": "3ggakgmV9A1A342jVACUvMrgnhtJu3vyeh6WjgHNxTxsjfwpkHQQm4rckUjUWQyQHQxWdvdsTDkDBnCv2qrmD78U",
  "key20": "2WVBLP3DCDUpRquoMEHNWaNXUvLPVj58sFjy5Wz11qW9xTqHnFyCt6Ax5f3Ts66g9uzQd6e6gLSezq3Fcfjh7NVj",
  "key21": "3UiYC6L38qz8FotEf2G6vcU8DkZd463zz4A6ZTAB2kJG5b1gW7GeSenjPMEZ8s4Y1UYhYPH8hXuXSb9yWBhES3We",
  "key22": "56efkpFxBDLGTz1rt4qBKwXqp5xw1HQKAdffuYvPLMVNYU2EFcNqhvcmVFBULZcf2a1yGiPs3tPsEHTzLAac4mo1",
  "key23": "4BWe3uPzjSbiNiBYdDQQDdDiX2FrJvxMGffVo6wuzo95hHzFW14VBVPbk2R9xzDw4wmKtu5b8JHzneFrs7uvUHSE",
  "key24": "3D335WJzaPyAM1kkHwA2wkz1PF6cU1dCWQVWxyQ7ENGLDPqFYgWmtBKaT8NhQATfE85YeAQUYz359tzoMFgjcyCe",
  "key25": "4ZFyw6X61wjSEJyPESsfaLBbBQ2AoXdCmmL8gQYLEcGGEXYDjRfFuiwkjiytFAc9jB3XgKwvXLC5kJEop7SBD6e7"
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
