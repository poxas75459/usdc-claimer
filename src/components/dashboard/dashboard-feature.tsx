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
    "4fLwZuwWWqruKQDuBgMLTXDUjuTB3wRNCgn1wrTW8bLewXJAtjLtei65y8Beqq1R7gXK42mNiZz9r4wUfWTeiZfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfytNFAL8nNy41idzrXzk2gDhW81n7RqZzt9we3fTunrtyUjFm8xyhgDc6TmF4FXfW5ZzL9GnYftXpWXC1tCcFZ",
  "key1": "42iGcGTZEdR9eZN6b9LU1DyxcCLbKcbKCwUn2uVS8HPwNG3Wj3oZa93KQf8sVDKerQcq9gR4rVxiDUyNyyrxqdUE",
  "key2": "43oxmTxFUkHKurdfNgccEDu4PsHjYL8nNVNxzYaK9ndd4xZebob1DS2uNHCLg1GkkU3ZUYUNVpEAh6wg6jY3Vy5G",
  "key3": "VDApFzz81PN34MAKna1JUsLapPW2DBPxrNgrioQMoJvL8pmGKHFCnSY5QMN1zcHePtB84p1C12ScqD8VjYiNun2",
  "key4": "tdBMY2RorPvQ9t1Y3AQSfaq4AAiSiVwM54G2XEUZDV7ExW7H8MyN6XJ2SYciwcjDkAXgwH5XK5F9ua5U4byooET",
  "key5": "4MkUdP7jfUHaxZdNF8Ctu3WPduKqxybYMdmGyaK7agxt5RS79pUdVnxmaYifPjys2fzuaWJqcxidodnfhB3kiXjv",
  "key6": "3J9DJ6WQwyUSUoaMBfbo2fnXoqzYqV7twHQA9NsQtTYaqm2U97igzPigt5Qpx9kfnk6FcnMekHZmBYqShq7miou6",
  "key7": "KgUGp9xBFBg3rhybH1sY7XjyrZEfzJCpmFbZJUHKhRa4BGAXSgevB1kxAQfnpfZZMnQsqrQ3BGiUy7K2BnrmJYH",
  "key8": "5nxM1WGHDXS8brgBbYhoXN3N4NkKHx8DxYjzC2oAM3uqBpQ4D1KWL7GS3dEtMJq8qKtkyMohaN4wuybjxu67zquf",
  "key9": "5bRKBwkyiQdz3phYvu8XzhjBb8yqDsamk4ZJWFJxAzfadMgcue2RCY8QpSYUWNMyknmAhffYLxi8rVFmNoZ7ADN4",
  "key10": "4DB8eQnQXqNBEWbmetLYNzMgTnaFEvfpudUr5fythU4gAer79BBk7T3o3JoLB2NCGTxCGrf1LTLcHQLiLeXPKrsR",
  "key11": "a6NGDGyTh9pAaHhyWGw1VFEkw3HWrZVXUg2oV2NE5HADZMwt5aSszeFaEpnMDmBhaMuK8UiPgxLuRmqE2EfKsZF",
  "key12": "4QPxxmB6TKJWR77YSLg5fqoRrbyb6DsgtvE3mTuW1BQNP3XabXSp7kGk4tZiQXbrzVaZJYco5Ye8ampxrAVF1XiW",
  "key13": "5UgSrBqMYRip1T49tywFZcJMDGe9E23JRQrmEgzXCTinrqfbbL5V36rAhQKue1quHGuSYJc6PHZx8Boj368vZRpW",
  "key14": "2apLFSAr2xStPfu7KkgnaKUrnmVyjexQtgbtgfEcrPkTUgZpkcKf4CvJPFHoBAppYWNofWtZgxhjiNZ7kHh276d",
  "key15": "2oqdasqCiC3A1Ubz44HytKoXFvgP1aFc29zHHSmojkoDxt8iShtZFRrvGcY149NTdduURjKRjD9bQHgKCFFKAhRE",
  "key16": "4mp1vK8mUMzp9EjU27LN4NPUYJ2Ks2oMHvMNTtwkKvMp9HKH5LqCCgyCQqWExXUyad5qTHFsaXVwTH4qzJtMQRMD",
  "key17": "3NcmnwF1qFQSWooUz8hk7f4xjnuz7yrUAEGcSSj9ADoqy24mkMeaXTdea3jEChEabMf9mVv1uhnSuva4MBn6Xkdc",
  "key18": "wWsBFXw137MLhW4NocLN9qXTBkv1PHaKEfwyhKu8641WXgJr8nWcpTLitXRDT9BDuogxWsUFzHFKYeYo6dfKa1x",
  "key19": "CLaGEvobMDyUeUkAm259KfDNQ6K1TbWdpzEJFwbYqz6MSRV6JZH3na8sz1VbNg8vZwdPp7mFwZULXxcu1sSczbp",
  "key20": "3rE3WTUdEe51UU5tfDhqTusHhQNydFGcoSg1UcYQNYPqqP4zBGRAN3r8VtJ5YAfB53r1qdPAwJSTzy7Uh19zzJCi",
  "key21": "3SEtB5wzdhPxY4XJqsMYZQf7m2iExkYCvvpkAhLgfasBFuqG5DKWMgidhVXgFqT5ryvVGmUGL3yruYPwVcHjxtzV",
  "key22": "63Ab84nTrLLeCTxL9BSuw6bwEBdfU9BdU9wH2izMk3NA78o7gJ5LwaoskmgJAX7JxYCRnepoTmkmmrUhcyoqUM7U",
  "key23": "JzhaaPn5Z6rsoXmwpHhG7dW3H8uHQFQi5U756eypzQPwuJU7ZTCq3gHuW58uV6eCt7qo7j2hgNjrBHEBjwmvPzH",
  "key24": "5VJbag7cTmh2GAimhreQSiEFn6fRtVmbyk3E2KWLTyuuJ27N5gDdyDYcEb5WHnxaGksgDFz3poigbnJ7d3r3Xwni",
  "key25": "5yQyikXQHf7Tz9dowzZzKNJcduuNKf3H4EVikeCRK8xfdxoiG2UQ1F5dEpv47uz5aZQGkzatqAmsZKvC8E6oJQ53",
  "key26": "4g4m3QTXRUSmwPqdY6YNEezp64f66Lf25LmpBtH3Pns2erDN6UAfjDr4E7N8h8XP7i1HTkTD7vgfGdtgVFcPMTeN",
  "key27": "4K2CinffhEUFW6TKqMwNXwVfBbaCS7sj5DSuLjsxyGHPe4FDF6M48DG4Zf9FCrrQhTWczAYosYiFE215gG6wmj8p",
  "key28": "4GnLq9TXCqnSjfvv7oZkXN3igaCrGf22SsGxPLGVrRF2YVfcacyh2pAMEqcjNFNSQieXLchhrXSsmmwiyJDfWgGq",
  "key29": "DSn2dJR7rrm8SRVnm4s2oHq2CRqQVRiKLFDDJUgUCUWaR1SrrXXGpsApgT7tS9LAYjjJnoNApLACMgLy6yGui4H",
  "key30": "5Wde7dpekbxX2KSTtn3XUCViCMXR2ULw3RfBLWs1w4ToemhuWLEWof7aPzChT2jKRWx4w5GGasxPQFzjY4QgyMeM",
  "key31": "5eubyAw3JM93y2DmTeycumx7LwZ6XudguMCrYMxKwY26CbQT6ZQ3S9J8VvF45iw6LMRUKsUg2hh45YsLHkj2o4Dv",
  "key32": "Z9wYhbAuVSA1b3bVY5MPAJVJATYcha98SruwhPT3TdByjmcgcs6upG6RsoFnshjCMzF91h4Q1kMAdvZmGinX6JC",
  "key33": "5P5wxrkzzWMM9gNvBqjnNB5JsiJ5jMEoxSKRTD9YqbsZtfGKhYwkNZXP2FAXfCgXbD9Bx4iLzbSk9rA7FLYTocRJ",
  "key34": "5pGvrTN1xATKp2A7iabCdTNkjYy1CzsaQs9jX17HZqkeRYQ4LU2jWc52XMKtSFETBHbfaTsBuyVJkp1WfHG7Pbd",
  "key35": "3QJuh2cyg5t5BW2jfSVjLv1DQvTPAeksH15WFrDd8ERWcjuAWncASyrHinPk8BA6QWEMWxN5Ux72WGEf5BiKbg5c"
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
