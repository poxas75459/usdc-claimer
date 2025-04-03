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
    "2sXQgUoBv1wyq8e6jsE8Cpd3hBL1VHL5QXnPFfgKqjVagCLJeXrJBm2DAmiqHHUKz3BfU4caAbeZM22JqU1Nvh1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbn1sR7FWBRWrWVK1MJ8dmDLizzxjfJ1QinbfPTUiGvoBissHwi3bK6QQQTRHveVzppnPkCYbXCFXeqWZmnb6dh",
  "key1": "64VETJGKw61qn35FmnT8j7jEtRnyMwYUKEVVpgxbyEx1DUBfvTtRB2HJT19VdTygsnP1fSYhipukz5fwjQZzetSZ",
  "key2": "VvMx2SoVdzPkY88NwBmyQWTS9KkxrgM5299hEgPpMHcc7mHBdwPy9N3wKiQkWkybQQyp4hbAyfzPMzn2yhqHRpY",
  "key3": "4ZBV4nWFKoN4s5Y7d31tUph94S8RtFXYPFwq5WVc2ostKshmmcdrk3PwxqYwrijxMKNB7FKpcnLJcktRk7c4c6fm",
  "key4": "5Qy4ic4xdj9tND5n1PEAeNCw936BkBBRNDiMRqWavWy1G68oj2ewv9hfvgwPZDr98Jo2iwBP283mzeH2GMSPrKk1",
  "key5": "51MRNb6iUMViVfuSe7Ldb2m6DsBaznT26SUAa4kCKdFbVDUyCpEvwoJLpZV5LwFLg5i6svoZc9DpnPGuYFqzdMXx",
  "key6": "3mX39xpFHwuUjHJViDrMhY7CwvPNaDp31KdisxXR92ZoxjNz7RY6Dq7pEeQEUod75y4bgrDUzh9RAGKUdr5SQ1H9",
  "key7": "2qLynzQFaRbkrVcWKj2m3PhDtApUcQGxboWM7doWxUVM2R4YwEj4nB7n8WSx5gGHs8LRpCAHf7zpJhj8h4R9jbxF",
  "key8": "hkEK52ApnUfvo4dZnBhaEpufcLvL3MaQVQM74s1NqqX5yNnLL9cTiQ8ruMrriXQkYAbfD1oHaZ4t2S2duPxBLTJ",
  "key9": "2LJHF4BmfY8pBnUP7ZAWdxA91cAcnVBB9cuVh9bEWZCSbryho1SUYSytqk6JDD7JJfmPpCEZXbzgGg9FFgVM1ofr",
  "key10": "5fRDkkvC78Qh2UPeGVEWrEVVWEFZ7NjKiVtdikrBX4uRVxy9Tk5Y9Va5HBrWsWaZGMEgbAkgrz35YstPMEBXLhUs",
  "key11": "Rzww6CyDFZjrwBXNT79uFa4WgKeY1Q51inbn2yFmiM5QJG7DV4yUVL1Qo5RDK9QKk3eshZhysuF56h2hfeX1eCh",
  "key12": "sus7iBMauL4raGdYCBnMNGiX6tgTWXJiYPHCiQ6RrCoixQd9JLNSBnVTQsU7HoBcsTV2NH3W8ACW87aCuRpWAbK",
  "key13": "2urujW46jTKx6DTiBzTxKGvmxwYKsTHmCXM8UrcDGwnrtT83Jb7DASS2womTA22BdXDqjQNfbESfnyA4jeXkywAB",
  "key14": "2HuLGc4fWKtJgWFfuSNFNVks2GEmP7Q9cyLdzp1JPnGYMr53ki21GTfQ14TdVVFdQmWqcd4YN3CMp4dzn884inXX",
  "key15": "5Qww2svwr9BERYsjBopxBhjDT7CBS9q9sCSccD4gPsAfyfJQtmt5yHReRr93KnKvjnpoVwNx5BtvCmazwWERBuqD",
  "key16": "2JEqmWtqv2wyX9uKEHuCWMrMf9c87NYenYM98nrbYaNRCfS96VJry3ptTkAg9PeevyzmkAnAsJCYJnrJss4qKvzp",
  "key17": "52XJyMqipsCJbqKsRSHYXTpB1GzD9QSNPtaNFJbxBXDbB8b5JuaSZwL8GXFzbhv3J5Q6goB1LT7EWPCaX7NFy2cM",
  "key18": "2R3rs4WTDPZB1EW1xoVPX6m9LBkA6xtWPgTEFGoWHoTwjCqKrSommUQzBJASp8DGwvGMx5yUiGGyawdSYq3VqVNg",
  "key19": "47h24Tt6ECzZH7yZp6G5MtvquNfxisYDuebT2zJR5on5EkReAy6Z6cMa2fLgCaCk2RE7A1XBMiFZofzQQp1sLQN1",
  "key20": "2t6Ps9JKKS49tcEgkTLiF6K817BUd8abvR7jit8HCpdP8z58Fe4cwnmDLKR6kgXa4EAFGghQVbNqhb6Hk65uwN3E",
  "key21": "4ZzFKteSuLDE5iYyMp4NHEdPife2qugsb5jioBaDviq6aiyN11JMumdVc7VUoG1HKJ6CfUuzoqy5coZbs8aockLY",
  "key22": "4e2938bfa1KKUWB5LiqXUrWK1SUKAdpZZvYJ2a5jdo9aocXRvQqwdpKXTfjwYnYKCZMhMSU2AfKG4iziGnUZmfX8",
  "key23": "3f4fscaxnH6k6YK31pUEhwJ428e2b3tNkjN4wuLjREJx8Pzsm12p7Yp2jxD668qbjC59GCyAHzcSCtjtjHjWE4HC",
  "key24": "5yYBwSHXdtcnQWbMWTEZdJEQDs9t8gy75D3c6oWGjf9vP2C2Jgm6C63oGpjmMDo9rEaC6gJ2ouz5fZ1FmNoNFZaD",
  "key25": "5qxjofbZgX9nV5aXkFyvM5itdXb2Szd5ApECmyYTJkKMax7SpHt4hxv8AqJAstzpYPMNPCtTXpkDYP7fCF4ybnAR",
  "key26": "3eauuM3sWDjkWsHyHYaRwSn8s9nLWtSbEi2H9kR86RkfJgds18Jz2cMDtQhYSvCN3JDQnRewc9wF6NqUCzpov1Hi",
  "key27": "5nxS849cbGak1SBhpGnUhbJqZiNXC9LiQnwn8NmrHeCYgktJMKH5c1cXjGujJeoUPzjTj4jFiyKddpTAhtQRqYye",
  "key28": "2s7ALHAB1VGth368V7MCX11fLYEqaEY8W6j3WLjj6py98yM6YwhvTWsZVBQXiQmMFvdEDU3aJ5fyxWdXBHLQj7wE",
  "key29": "4ZxpZnqJq2KLraBHWbrDtHXYsxZEUzbVVPMbp1KTCR2JfQhPnr8jjmjFsMChc2x2Ec29P3rYpFpqZNjn4oPX6RgB",
  "key30": "4CuSg469xxoezuWXzNbDdCjMGT9Wyw489sxAS4f5p5GnReE5Z2q7U79okZmMeJhJNVV3efuXT4saKrQTjJE2RMf6",
  "key31": "2KU3kxs81w5ym6B7r9CaV6A8yvoKs5W4EnfNUs9oe1xqxJvVRb2eyv6b6hVhcVVvqATG7MjonsRpv3qFSRw7TQDE",
  "key32": "2AMaXwFRUf9Jk6oUWg7K8HAqqU6ouqie4jWAzs5gKjr24LdmoK57nyuKYoeBxsnpMwHo84Y7E8F2NwPyn9pqG2At",
  "key33": "Ssy38Q6mnhRxnY8VxrUPmMsPkQZ2St3uthmAYfPc2CgX2RWY3NZoAdRZXjBTokByNbFK6sj23dQY5T9zDQ8PK1S",
  "key34": "4nwfDvCkHCGneTkNBDVnfmABwxKQSeSV8rkvsRm98uamZfhGSEVJyuUksXGMzh1p7R3SrpBkM5GQCHpf2CGwtt5S",
  "key35": "FYktCwNAVWU5gSABjMrXBthobVi9ZF81v7TuwU95V1525xisdL3tQ986Lh6xbspSHH8bBGGacXtoP5RJ23uGabQ",
  "key36": "5bfAqtCrdhoJoyqwGf4foFBh83SWtJrMgZqJXWcRMzeDYZbYzHTfPnQz9ZgAz2YP8yaUC5ZLzZ2enFn748XYo4cC",
  "key37": "5BEx4a7pJWwLm2msPVi34nhBy6z232VTJzL6mZkbJ4U2f9pdxU3w8BqoZyuxKiUkFBxQovsvb35kwWt98HzQbPxN",
  "key38": "5DGUuChMG4ZmpT6P9wdPkf9QFXgE2k7voNiybaCvAd1Jh8RN6P9p3czAHrbJrnCuSqy8Zw3Jgqgs7BxsHM6RhP6F"
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
