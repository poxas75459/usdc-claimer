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
    "5GpVfxYtsmQBVTCgjuf5PRquAsnPKsJfnKHFNfGH5Se8y58bGGBDEmMqTAcied25V6NpF58S7Qdne5qjbpp6vRzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTwH7UMox9s88FbWUbbS4PqfkFVMY4GXDN7WHuEvW7PwcW6HfnD7qvt8diGWVZTgV5c9aH644R7LXirUbXhKb5e",
  "key1": "33VMzYfYAx1DzwdWNM9wWibnZd3AXVULvjo1GJksgG95pMLG7bfzaVdCuyjCnjzYuJ1Ew2KK3NeMgc9GnCRAnNoU",
  "key2": "4bFN4bj8NB3GX7q8fcA7zJQaQDKSdJVy45d74iQfANozp96rzzJQbdF3FqUSb7SMz8GcC4x5fWq6UL7NVA7LNcL",
  "key3": "3TDUz5kTo7n9iVeSy4P95yzJA5aYCpjbASau8NLDEheHCsaLYTJTJBUzHAVUEyFFk8H6EE1YgSPiNi6XivM2RECT",
  "key4": "2SjwjbnbUNdBxYmEJkJDd43rZz3MrVTcxpbfKWLJoQgT67uSWdsuWPfTmXufogHnk4D26tRz7nDnh317kbCMH8jd",
  "key5": "dbe5Z87cMKZZeQzo5i1jyhtDLwiJNhStNWP9Fkn1dSBCRoTxduNJHAK9W1PHns1pNt29ctLPGYYAx3tieyetKE4",
  "key6": "ftw41rKE5kqcXbWMSrPuy1Sc8EcsX6wEhUNiECeQTe3JFkQEDNbxG85BA6EQpeEHXHVQXzJXz1pf62nzKFSQqLe",
  "key7": "2izH8UfaY2Cb26v4ovNo9RW5Abn5QWtEBMz4cCQ2CgEmnV6dpS3T842xTKji9EdGucLymGzzRLfY7gx5WAN1QXR4",
  "key8": "4FZHrNnht6VjZtDWjsV6sgCE4VrYFy7zQDksPT97KCpDG2SrZUEijG7B6kJGtiYkU1ty43QswCQbsvLv1ErkbTxP",
  "key9": "347wnfHjyrjFJ8rwm7vupMykX7VNUGSHMxjmjmCcU3odZ86GyeUCk7As7R5VJURiAvUm2CQ5quYB1F4pudrhFN84",
  "key10": "3KhrHLz9z2cqR2DLbRw6dKcfUxsj48LS1o5y34wZeREF2Hbk9MsTfpVzihab9udmLFxiAW6vRMG8oDQq3ePDJTun",
  "key11": "5j6Y82ig1Sd9dXTnvWCUChxkrNjNKca2si1H6s28mp5AkrL8D1V2QP9rXYpFnWr9i4HfPmUD77ZNjTHmWBQDgW8B",
  "key12": "59AJbNLLnV721NnHLJ9kgUhHzUS5E5EkKBoX3Nn2PK1L47jkuJs46dQkMjKvxjrd5MXwFEuNsTnzba8WLpHnCmpt",
  "key13": "3bkhymqoBcDupYeuoBuUQFM6CiRAPGXcKwuXwxEFezCx97UvdDYav4jmkvNDNy4N4CEKNpzfbebhyAy5RJDUzhxQ",
  "key14": "4c9Hgm1iD84fx4DPwhjkF8YvmXhg1CEPp5hnMm97oHWRegPQGkA8tz9PFLFnfgjqjxdMWoZpfpt4zmNPjVr74vPs",
  "key15": "vUcwFahBZX8D4yPjRHGaoP7KJjrhUY8bYHSzyXPapuyv5QhgdDtpr7vhDABio1rfu3DYEJq4bEz2EoHr2aPq9y6",
  "key16": "vEjbbv1LvkxWAxY49xamsf6UwJSwwrjBoQuBCpyJd6kNfBcSQ1iBeTWFpd7aRsHu38w44h1oZmxDWHX9S3Qf7w8",
  "key17": "gRWJZKHZjEu1kWfYjmSBFY9bH57hD1X9xWpVbhY4J1Nkx5EFJK6fhTpgUSuqUhwzZ3BQNyuHjCWVhWnuJidCeRe",
  "key18": "3k87uP9dmGK4CNUS1NmrS364uBfFxLKeVtT64deyC5P2MKEH3Qk6NEYC1ddRPTodehQwrwvJSkyUe4weQaqqQiEW",
  "key19": "2CPj7ogbedVhNgmQsLEdTn86hpyo9XJdqirmcHKsGSJUzedh3fG3dhtVPhTk8rkrJvQzyUY3S3hW8GiD3isoSczM",
  "key20": "3rumZD2J663S7bt47yhjwMYL5Cpe5htRgvZxuwoRtbeouRt7XEx8ECbtTGSKaHNxt2VX4uyJw8GMmpdGh3QkC7gY",
  "key21": "5Mn8kjQMCQut9v2QuymxaX2Fo2iYBphFjcHfCwmGvmvmXcmLmdu7ig68gaJh9cVNvvgWCivfU9BojahQkB1qek4p",
  "key22": "4FePyw6Sw3CuBLx55A8rBdi4o5ziYEkNmqj9sWPPdqX6XLDawA67boKhZAQs4j7HbeResVUCRLZHY6KbEFuv8PMx",
  "key23": "3JRaibw5dbFpoSDAPj44ktxnXQanythmYEoHGiBTcKiJ8VSVBSmKYx9K1Xx6prxVtDEEP8bs4XebzBKGZH5riSzm",
  "key24": "36tA17thDU8QSd3dHc65QZWFskazqGbXZbdxj2D869f3u1yMjiuRCECvj7Dsmk98LjJsh9FYReiJxLN4HQQcWXZn",
  "key25": "4QzxAs9BZGxcLW8FBbdQfAH1uC3zLRsTtWMcozCt9GrvicAqunzHaZcNhT8ZnD95jzdcivLVwHThr3PSU9y2QbpL",
  "key26": "3ztWEkTmBMtLGSMVtQUrBVjB8Ewt1ZCzhpa7tTsxYGXx3RWZ3c8j8ZVbPFtn3cEweVJhqcTzsMrT5SZayXV8qz78",
  "key27": "2EtiZQJnHFqzzmuR7o4wJQe4jfWa6GiC1BQ2us7tJPJRQ36PX9uuTEP1i7W9RM1nSv21UFEv5GZemsG7RJo6E6jG",
  "key28": "2EbDfU3kXq1ij41mv148S5ouWjyAs8YjmNwboEJm1g7sVwQMZHyU3K3UndacQ8WFQ2F2gAExB1bkUDFagKzXZYfv",
  "key29": "3pCr3P97q6dbVkNkGw8upAe5apTQYM57Euzn5px5c1WmwZYxSfSV4U8TtFRTVih63J2a6DBD2ggeSS3uaFqCKbtX",
  "key30": "2K83JBkmeXmqUhou3Y43jRUuMjDdQ5yo8AwGBTzQSgiFFhBEnLUzxT7TGZmkCkr45SuLMRWZK6cnDhj6P3acF6Vt",
  "key31": "5A19e2mJCzo53rpfX5qhccGQMDJkzWG7F8JpswhWdZC56ht7Mcbs8PQh5iSbAHwDWLAxQAq5CgFxcNkEPVgRsh82",
  "key32": "62YcF5xUcJn1qwt3JA8AAnntAQdfcJZsxNJqux6toQoiqWreZN9NanvgQmkZsWYV9JFvLBcDyha2SL6pgES98kFx",
  "key33": "dK9zim5UARkdQVXwMP16iXpiCtv7cKCFVvaZWYgKMyC4NEREAUkiGivbb81FRpKd1p4c9rzNPbF8gZYYq1dApAa",
  "key34": "2f64hxHAcQXCbLWLu12pAkqfGYDVmFqZnb5Gfjh8VY9Xo7BC6zTbgCNh6sdaNLRRULZ8pZcqPXxH2dhChAWbQ63V",
  "key35": "64uCKqJ3NxVANxqvALEpXcnbsemd6H4rQM8Pp25EvNhx5SBHAPErEpkTRfDFSL6TTEJJi977VV2wo7URcDqPeAdw",
  "key36": "2D7akkar9M5VBgZZ1WT3Ck83HyDdxo6UDUjaCEZ6vykfYpTne8H9nnRzQiDxPGUoehDJSQQwm8zSS5q4s8dEcs5s",
  "key37": "3wSqxMcDBdHbcibaiP3oBQvSU4yi4ZRaRbNzox2pVoFG3NN7VQYF74q5mqiVSRTkzmTce3wr5pnTkh3MNNFo5epG",
  "key38": "4coCjz1h1Jh3RijNVE3WjsCcUQgW9v8qPKqjddJ3AwAbmKNYbW4RPwGWgDi51c2L6nrmdqssw8EPk3sWsUZmRbnR",
  "key39": "5B4bqjvi3F8QYPHKSotBSQfEBKP5qysqpcgWznrQVFg54BQKzGJy4i5YtxCzxdDpdo469X38FgkLoWJJxqqRNJaq",
  "key40": "611b8qMhPJHW5KcDFjrepvQ1fWw461AgqPPLoHSnhk8dTB81mAayKVbNS88jXL36BZazUDiC2MgUhL9zDxvxM1NG",
  "key41": "3Th55btsdGuuu9knJbQ3wmz2ry6VHMrDLVKXBzxypN8uDmPiEXh2kw7AYq7YbiWnAeGFDjrZmGvJ3HG99SRRGj6d",
  "key42": "4LBvS2kQy4tNuVVcgTNLTpsSiBGvUu5TEdfEnJGUw5oDxyQb9GJ3UzTJRnPpV68PueZNxERAPVvk6CXxdxvjzEGk"
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
