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
    "5nUiAfY1HsiMnqmKfM8U8FYv24L2gS7euYbLGwm4drmjTDJqiFTLzhFfR4CJDbuv2U8bs4ESxVPcPSuUogWi5ARz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9JDn4hNctR2rN8KpwFZZj2LjC8bBMcGkmr2nnmFgLRHXEf1xmxuDQQwQ7jPVePGNG2m9sbPyPdVSWgN7gzPub",
  "key1": "yTSL8tEUbgE2XE7q2L6WmwHyiKK1mMNjNkERH7QcGgf8PAPCxzzaZT8KpeH456Dvk5AZrLz2oF4KM8QGu8gQsyu",
  "key2": "55ZS1Mz6Jk7VNKDGeVEAsZM9WbLLtRwfdXoTHbtvNgnohx897daRFijfa71GXbVvPug4TMTkN7U7gxdBq8DgJnkh",
  "key3": "3NSk7nDbD7yMvTEjQMcqn2MEmPW4bMqm57VxN2jUCvD9Q9gPrZ1yqXnAU1yMqzmaKY2Bwr6epUQYxsWP7T3F3ULc",
  "key4": "4ekvVHjsVQ1twtNjPGVzh8DoZ8SEgNjNg6qKxquFRnwPmUL2XCrjri9UT4jpUPokhYNGoGcaZZn8M7JP8iJjQ9hu",
  "key5": "5FXnvNNLy4KZrBQXeBt5jd1FfnnUcJMc4UBk884zujii9qZ7GX6Cwi7Dp6rdonKpQHg4jCg12EM1v4pHSnXrwe6M",
  "key6": "3qWsD1U2Jc1a6LESkB6TCyQZZdQej6jgKaiQqj4izpEERwT5jnd4EkmhjdMUv831sR9XRMXFFT3aq3CskBT88Z79",
  "key7": "eVidSGKHXqzA8yf9rVJuQazvzYgUyqfV3K4jD5zXFyQ6PWNM3d4T4rGP8t74ncs5h9mgMB4PCaPMf9bt3hSNvvn",
  "key8": "2PNydJxRWh38UhgrMKdhjLftkmrFbBju1RKNnmxSB7bBDnTsTF3pWUYojc4erFTr5YAcFQcucJkjeTPQePW1zLer",
  "key9": "2FhHw6m2QhYeaFta6vmJLLsHtju5hWjT88MUfXi9WBc5xRcfLufApwWVuZdAPTWvmZz5S6fL9zLL8GZCQQi2Frkq",
  "key10": "3UfDyZzpodeCwVkLQVpxQd14iP9Sm3iXHLZJEV1VcqWZ8siS58n2WBJrQGRpUE2MJFrh3zLseQgeZj5dhrcMgrVz",
  "key11": "5TfN5Zn9ym6Sc9pZuPAkqtZ3FKrmuRgxopRrRxwiS5atuAyF7H6ieyNcPgst1rDRaR4QfT3V3yVLcAK5MsgjyatD",
  "key12": "5WdscLDNXV8DrX6aGnwcptrxmZwttZ8bANWxr3BxcDiB1aGWvtVKQwENTe8jhVnjcG3ayfUB3WeLFu5sKR18VU8e",
  "key13": "2VH8AcgsEXp7iQnW2d6nmnBx93eborVdqygMosBUqB4hEp6Q9MHGTkvXHLZvh18qWtoVZm681FZds7SjqKyUN1ku",
  "key14": "8JQS96pneVjksm7vH26fbBk6aLEyhTsDGrETpp7i5RRMtavjCqEHwrr3E64RuNgJEgi9FDPtRHRT6QDhQtTgDRp",
  "key15": "4R8DZTXxf4EniEzfmmFL1NwJDuu8CY9JdcwBBeCPRWchv3m5WL4YvUBDGxYwFyYguWGhckuhcJEcqYkt6VuHYVuL",
  "key16": "4u8HtKGmuFeK8yFgehkhz4iJ3ggojPyWpB4UAt4AkTKQe2HWSE4iAVgG5PjBhgfkUitr9wiGRCDXsb2fmPpTiaig",
  "key17": "4hmgWXQ21V68tDAM6eEqvErVwhLj8xxXJs9fM5tKRmwUPpVscAHeSzAmpEF1HYEdMfkUNTswAKtgwEMS68cHJMoB",
  "key18": "4RDPFMjuvvsJSStTjxb7KKuzDE13vtXKRKacF6oFc5rq1kH6Jgc2tuy72X7uArDPX3XsawrvwbsXPekKM768eAUT",
  "key19": "5fiXhM7A9gFqCLohJeLHeWYjJrHiCj88yw338daqoodZryXjzk6DrfTkdHKm1u622BS9jAYUuWnpeFUAKcwM7E2D",
  "key20": "PRDnC7B3F5mTKcr3gAPMZkJQuanr3mtjbDNBnd8sAyCDKgq58ZnWtr91hfmn3VX1SnofJURmhLE2GmxDPGcpNLu",
  "key21": "5bLVhVDAw6QNGX7bcrsZRopJxHZwgwCLuDidTsLd7oY7CTUPyBsmTQWfDTASTgrwUSCpgs7Xmf9Gd2KphuhpRF2p",
  "key22": "2K713NCnC9A693wy7TzGoUwKJhKdxfow5gxXE3dfHTn1pg75DAvSjZYQZ6A59rN8ZzG8p6fTqJWNQWm1gUiqRspd",
  "key23": "3i6V9nxy5BKLXXaZsytej4RHxYQaPRTSgQQhdWGcH13ixcaVPkeYabqNmorcDM5sx2FpuNbjvYzA9afv564TbAgB",
  "key24": "51V16jQGowUGnoYdWK91YTu97iqGaPpsm5sYaK6VNKMrX9wx8rk6W7onQX39sRH1HF3kGqvqUGzq7veMWbNe5hxy",
  "key25": "49Dx9uGp7RhcLDGcmBmVTMDq5eGhPWghV2AwkfFTmABR9A2ZH7YJKpHd7bB9WVZfRNA1aCiZc8vyaV9ctiQuab2S",
  "key26": "53LMVzy2paTKyrkAKJNMwt7CZ5J3FxGbxhHXt2T4EMzRcfQJz5g9amcbauzjRsytMN2c4jTN4LnUEXwaDUbYfkWP",
  "key27": "ywAtvkjjTgz3cVcXRYX6JVMFSSYfkGz1hTaotcz8qz5fAuEApQiebSn3f5NiVRz65zkVHj1zkrjtyQ9PidWFo79",
  "key28": "4JwnKa7WADQdvQdMMP1mHRefCuMEn72wnwjLJKQ1oBrvKny324Gv7GjjPqiMKCU2LD1TsPkyLnyg12JHvLKyFStn",
  "key29": "qESRUZ2y2mngZmNGKs6bY9axGyQf29oCpkC3b8bEe5qzG9FEZXd4fmf5PdaU62GnpMnQAiwGbTeBmXxtixDTD4R",
  "key30": "3PK1QFEepYsbWvCHCiayx1pAbtmBSRaWYmzahuFzM2y9kwSsXHvT46oMWtvtKK2e8xi61oeWVpX9PgNuWcoMraae",
  "key31": "5dfBNGmUomK2oHcJvQvFitvbJhkNUbHrYMJKiLTxZjUNF2wRfvANEGrQ7kNV4MS1rS9eobiQ9zsQeG3pG31AAHEi",
  "key32": "4L9mAjkbVXh1BiXyaUiMaAF9uNFxF46LahV6kDnwZfyynjvMJZ7dfXL4cA6aGJjQCoYWRa7cnJmomj21Xx4qzCjv",
  "key33": "4v17xN4Fnm54dKMVaz4ypbaVCVWifkW7g11K99oTDD7jysSK3hTYAWScfud4bqprfxMnVD7oQQn4HzmJuyq4Gf8P",
  "key34": "4aZV3S5kHQvJ5unYrTzHxgWZmnpYu7RUBHqvup5CnEKM7K9s7yoiXdB41zmQ9Y9iTFrh1a1X9GLCibkKm62mn6Wa",
  "key35": "3JdEkRVRCbsFgk52v8K6nk5SbiNta6qPi8qyv9SoAgLih1FYYr5PSVjq7LXBnFxdQMEk3SFZymMmp83rWSnffPFi",
  "key36": "3wn3r5wWSBsSGSQ3mPNiDZ6fQrF6JzfTgSwn2r57DCQL7Q6S7wb7n9yPzedmgahh3SJVuQHfVJNysaNZHqmdQfo3",
  "key37": "2qbpNFvUusA8AJt8RstEAymM3WjJ93Vyb93goEMjAaLdaq4kx4cDkF7RFTZnn7KUXsovx7e7quMoipAq2V5enUTt",
  "key38": "3wekvr65JmTUror3ZezkCB3a7Bbh6KzGMYAvJt3GnsM1BRSZzCYsHMW4m15mZsCvMoG4XrLbodhABN9VKohP8kKf",
  "key39": "3E5bKSsjWuBb93WkEKqT7xB8oURhM3Pd6qPp1pSCKyamzuX8nTTpXDRCTcCSMtMhA1pPmASncRw8LSMA7ELGo1NV",
  "key40": "4KEN7kgFUQtSDWWRoHAJx8ZsrNWVYzSt7H5if6TjDb7ngGjaZ5pShHV1RYUnn8tfKoky2WzMgnSnhY2bdmK6snfA"
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
