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
    "3Srk4PCWPyFYQ62epSGnNWWZN3NfkoSFzEfogmif6wWwm97yXi9UR1V5mndvrpd5Ezca3utahbtPgWy5mFaYDFvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mM5gVdJaYwm6dvBpqwmHSfTVJQkWpcjniZ2VmR9XLstF4t5ro8ecXwaQAZuAEJTV8rSW1uSiZKwY41QxwKv3Gfi",
  "key1": "4cjYnArDmHxprWNkNEdvyhECDFc6SpZryUs9R27NgSeReaHrxNJQbSkSWyrzNwzJup5RKqYQurtUqf1EjLMAJipk",
  "key2": "2TX91AaTiLDCq5xa81vNirvSQvtbxfaBi16ghXUYTmDBiWhLr3VwCjzWGd8B5GshiTCF9eRAaFdijuc1TAveYBqf",
  "key3": "2FRBPN1XQ55m1MrmdQfpKDQTAUbysT4jckUgXNVkxGdqnwBE1KNQftQZRUPexFyp2qTPu6fJ53RnAFvqcF6B5SM8",
  "key4": "2QRYDD5KfateKM72gW8BwLLZqXbqpyVLW4iTqXVptzTUbvyUDMXqmytSqWu7JCFK9M1anMA5mhB1JPbR2UEuS2F2",
  "key5": "3aNGBW88bTbewtCE2G5FEWA3kCF8uzbpxbRTRGZafFBxwf3PH2zG5FU9gbK2b1nExjV3hRoGKWFxaV2pVH12KLsQ",
  "key6": "5yKcQGFRjsDEPgxk2SogNYhRn1gXiA6ZrjVfTR3ESiJFbkw96LvE5MRgzwKnj64rJcvcf2Rn2VevMGinDQKmZtoL",
  "key7": "nNmUUun53YV3n9KPNVhNFF8u4S9CdkAUVYRthobMjxe7WKbYzBWCcMAhM6tZR446Cn2MQSc13mj5KJQz94AXrD8",
  "key8": "Hfr5kcPcCvpYdTzK8YYKZVs1jd3EoHn5M2xpktpoz4ABiNNbGXhby9oDHrNbubMAH3qwVKiH2UbaB2uqfVvekaG",
  "key9": "2iVFHK2KyTVrwrLQT9FNCAx6JQUMNhNii7gHq5d7fUiRvyevNfYNPsXyoq6d1Va9CybSt4VjFyDURqf3sErAQEds",
  "key10": "5k6f8dhWhGYpqYApkAVxPcyhgkczCB72ZqDF2ZaxNAQ7WqSKchL3DuaXZfFJFuQuC6JCmemxQBnaFR3NQgr6xPwn",
  "key11": "3Pdpf7472XgQoMs2BvBu9PYpq8HVM64Tuqdg27ihKF85i2qrZXKz74XLQz9HvFL9wsXPXP2QGmquXEHwqVm3CNTs",
  "key12": "54ki3kpi2SYDjtfM4KDdkeKzsFVM5nk3dKSPqkAyTm8riV5apUiMuS97BZbZW5YPGTLfjHLtZqZasj4n9Syq8gq6",
  "key13": "2agN8Zx3gBGmeQFFFTEocaax2JXLBsHuvzEE3tXDx476HEddGSX6dEFJyiV3ia7NYL9xipsNcjRi1xrz3u2qPjcH",
  "key14": "3oqhbvmyYjCGG4122poZrJKzGfa1qFWKsdaiBiNbVbGo25MYSoG9wZ3UJUVgLMu3U8FhA58KXY4dovyShFDqp1nr",
  "key15": "5aAc5eUZ5ELTJiesEDuz9RvLLQe1ziM2TogKUgJveQ9yFu3ZuXHtEq3UPcHZYykzE5G6aX5Xo9ApyEBChRo7B7vu",
  "key16": "5zZJ7D78eQEBYQT4H4ntR4JVCtKeyHSBut1tgfDCYrf7k1StuiZar1zKmFtb3o9bwdJuJcgGKUSzaN533cKQ42Lm",
  "key17": "65HnaN58sQe6koj3MZ8UpeDeMUfVrwgvnHLWhEeJ6NA8BxFWrjt5Cgn8YxSGkwBKY7y5gRa7n8TXmA5oqRkVnbxG",
  "key18": "4i4QDt8tdS38oG7ztEsZ87e9vQexG8EgWdQVKLcmkbCUPuvzq5Ri9vkU1RqCiqsbBe7s13FPf9GU3Dtu8cwh8pRk",
  "key19": "3ZzExHUTgnRAmCD9dpc462eL7MjF1ZJqtLCDy9UfFD8hDGEHhWnTEJQoiQHmw6HRiXPGsKfq2oKNtMfKt9AP8fJg",
  "key20": "5t9exjZtyh9yHHoTcEWFvVp25QSdJzuRaGMA3MguZJeX7FoB8ekC2z1crGCjWGvaUaZuRourg7JFpBR784bm9FEi",
  "key21": "UW51uboFYL8XdHawCEcJ6jpSCmVpPbX14u5sYP5yxoVWiKtfhL7dmedbfBfY7gKe78YeHYLCsG5SJDdmUxEtopc",
  "key22": "2mE1ruepKtYS9zLQchEqAAUfm7dsZVvwwvXcuRCSF429vxiawMusDy7GQb2PArzffUmcLGw8ybtDwEwA5Ue9XkeR",
  "key23": "3G7MEht7veumkdnEoqHhd9h3uMvBw93awWc6LWGpTG8LV4myEk842YhL4JA4DE6qJHRBMor3HACY8M14CcvyjYbR",
  "key24": "5VB8qaqfxuFsUvK8QB7G4Y7u4fCQHarpAK5QT54usSGaszyJ3g3cHnaKpsaEGXKZ2rh2dqtgbhsT6tCbkEva5hnW",
  "key25": "2WjPftfAYhE22vkiC8PLhLV2JmbBMQGGzB4QtXHfnjq6uryH5hZz74nmaQ1dBExVKKVjyJdNYKVZ9EAnHV2osTPr",
  "key26": "64uHRzBEbnbrBjg7VUwzBRNEEqcuN2wfBzeFQdQvyPRUCn3kzHBhJ4svm8Uq5qAyXDpCFP7WP8FsCBaEhHmhFD14",
  "key27": "4FfVkJQekYyScRxtVyLxkUQJJrWbEZ1FFbUFf6ttySgPnM69rUfFM4hsa143tTQFcJKitbCM6qutXhUqzDGNC5BM",
  "key28": "4TbjkCrGrZTnDpfrd3wQXYg3CkH28d14WSVP5k8CkijaXcVMTwzrdEPJL3rqve2Air2vSKQaKGYfkNotVik8kS2w",
  "key29": "3ud35uiXDbdSgwBpumRpmvPEQkZVsQW3qdej3Npc11fX6N5Bcw5DaWDVutfaBKcNBZ3NUzvjMS53hjgwHvTj1JZi"
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
