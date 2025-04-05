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
    "3Xmdr5TY9hpV6mazqUj4o3ZvX5YHjPjxfVEoAxBvKHvff6jnbJ8K9PpfM4yPoKWN5vicAuFS6t1x7zkYuhmdhWcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ynxVKwJXotBShGjdsx7fnXtQ3e17eVzLaqkYqBztW7zrWi12Z4BNmKVgGgqZ8DzX5tRebNSykRPLWgxXZxmyp2B",
  "key1": "2gd3JvgzPcFjK3R4ka7xcWuQtiAdyQypn43cVjSaexAwRETDrUPeTeYQk5zdTcVpEJugYjgCn5n9hcGgyRQixpYG",
  "key2": "3SbjsBQfqWJNwFx69H4sGddUXhu5Q5a9BDtgnHUjXLoafNzNKbX44m2PeQTnthFBfZ9gZZdzaMzvWxsiUPZh1cvh",
  "key3": "3n4YpRE6J1BaXcswKrYVHJHeQsmSRKXtnnwcdBQmoxPUVkQteaSJL79mAhCWsN6nmKGzAPXFCrKXBDc4U35pMemi",
  "key4": "5puQmWVoSDFeqDVW3Ec8EUJeGgnNFpaZgzYqc33w8RyD4qhBpfvb8bX3AUpmS4X7A8Ro98CrMgC3YACqGLah9rE8",
  "key5": "59ygrHaTLiZWiwi3vgGu7ZgYQqGvWPDMsKiNHb9QmYf2vPuFhGrBrc12sCYTd5tdyYfeUUDD7P2wdegD6A5r75oF",
  "key6": "2Lst79SyH8EsWjn69DT7fRjFXqL2gyxhTKUPNUP4Z4fZJefwU994cPu7kKJPz9xPzHaQ3e97RYZT1yjxTjviXJVY",
  "key7": "5EyeRhcFGwUKY87Zey2tmDiHuEy2R3HjGqrXKRRgvvM8Z9Xpb7VEfhGY7xtxZi4qjednp4DkjXZ9wuCYqdEi9dkz",
  "key8": "38rd6x2pgQDUjbkzFRBhcXkw2kAX8vj2dTiGPxxRmeAGjqDgkgcrXitXRHt6W6Ve3CUE6NbrE4Ave6PQK7BnEJuu",
  "key9": "4PbYQbyK7t2RhoShQTxzib7jSEoWp8SV2jKqVa55M23xKWMHVviRAqwxWTSRQRuVf1d6VZ7ALD8oVjFYGXyRjE3U",
  "key10": "4PfxJK59MD1cSP4W4HKYMWVwtxQxR5GJDPZo6joGcjEc74Q2gDMze7rutQijccBPboycdYjjxYFAPyBFcB7QCTC4",
  "key11": "cBm2wo2tiiDM9HSzdCAFFpXzC6ZTvSk6S1fEF2zHa1cdFum4y3GS1WCMk28PsGsFAYPuJicv96VCPqHgBHezQbx",
  "key12": "3LzPcxTW7dQphFcbTp7WFr3sc8cwDi4D5bdVF5HqLaw9PuysWaYTb49ouoBbC59rP39vUn8GviS8AVJWbFj48Uv3",
  "key13": "5R49mHWU98jALP3GnaDSCKF4ZAmYQ4EymgCxLg7LCAwR3ojSDS1Dyuyu7XSNbK44zMkCpuT17zNaiUgoqNPEX5Ta",
  "key14": "2LupdKpFtGotrTTqWDXWjj6QGUZr4gadqB9sYWDNxAzuXweJ5iFm7mMPEmyPt33dhcNt3TPvzCCPRbHKXyPAyC9k",
  "key15": "3ubZFmXzCrcjLUWq567ZhBwnzDSLuc8NCxBE9JvPsbHgY5X2tAXqXrg2peT818cTAvt4wp8CsGbda6gwWyJrBgsX",
  "key16": "2B4QdP418pEjyA6v43qpbwYYnDLPQvCLcKdxqig2wLS6cyr3QjrD5H6jB8PXNTn7XtX58q41PgnujZEwxGmvfjsS",
  "key17": "2jEcUpTF7z3BiJAug1L9uQmcatGg5kbas9HTsa3wnyCKXoswB53XvsegvQF7kedMLAZyJXjHVQYbwdxPYw2LMEyv",
  "key18": "4jLYqNMSU6yrRiPFT8FibREPkHGyrKmcfnVbhXQFVms6nXaxCrxcPzPkXUiBCZqR4tDRMbu2Ym2BhPRPxK2fCQAS",
  "key19": "2ApAEV54cFqb7MVaVrPFowkWNtPuDhwD58c14E6VPwQ1spqBL1GvwSHhTwks87TVCniofuRniyjYMmg3s4qB7HcU",
  "key20": "5omKMKc2w2Xx6PKrhZvf4UGgvJWZqRvB7jaMaim3Ai7t8gEwak8WXJouGBE7AU6Q7DCNkpjKngngwm23h6MhJ46",
  "key21": "2aWi2N1DZ8P7sjqJE5N61LENhYYC2XtYbJghHVSYEYRhKjjxsELEKaHs4wSDzNiSZuSZzZmmh7ufMK28R7sr2UWd",
  "key22": "4hkERZ67baRXjt6cUBSQcpZSZ5UQeqMxKGzu7itNx32j7n9Keq4NLuPzGVLiN4NpxMzVeaessJWCYwcbpcyq1MJE",
  "key23": "3ftbEL3J3JpdcLpDdi4tKSQ7tTMTpdmfqSt6Bxm9z3iRMtETumMB4etLHXTLDHWAWh8agCbkajd2VFoQJY76GVeE",
  "key24": "5wvVYLJ6Lrk3CoUU6UtyAnAwtBkXvWLqpFiG56uxu1XXVn8dpPDCtvJBETd1R8dWLiE1AFMqEibsmZL6i8YV1fNb",
  "key25": "3CdMZTiSu9nVjJAzmqGQCCSJYGJCd3pn55JCq4x5KdN1J8PWGaJqJbvJbTUnjp1yZxuAoyCscNMJcCq3rWLq9EGy",
  "key26": "223uLHiQfD1ps2X5LFV7vcUZSoc4xaSQC2fm4YRKU5JVt3KXnbSCFvcyef9tqC3DjiBaYAAMrq95MkU7ZYeSneqt",
  "key27": "2JYidJVXoTmhMezmKaniQZZm2G2bGbVBSB2aKdKQYwvF2UmpKqj5ciLfcXK6aQSBBNLBnndUE3AY2ExnQBvBxmq4",
  "key28": "67bAv2FwF5vF8Ygo3xWj7AkZqS8Ymg6zeHLaifFVmr8PB3fWShUDsUHSaPXTzx5noWT9DN5tA6tiWm922Q82mHfQ",
  "key29": "5schG4QsJq5o1553EGDrYpR5eKcB9xXuDSjCBR1CVf4KXhY8fHrqNDVUYkGA7XKb1XeufbeaL1YGfgFXLiWsHR4Q",
  "key30": "38txqajZCAuJuZCGdpKTmypnz6c4eTqJVs4nzKdKKcmFU9Zu9MWMqY7KYMDDed7zgwwHufgQqgCmrmUaC75ePFvP",
  "key31": "3EGhtogmKNmFMDcdpzi3KAprisqnZzzy54ro4b6VAPQfwwbtVT6yjMUE19jVt36UKf1N9rLWm7tG6RFKQi4gMEvU",
  "key32": "3sZE5364L7qbxMe54mxz6XPhjdmbQejb9zxd8scnUJGZsZMSJGQXt1fHNHpsseqsDihsj7fjY9JVdtwo9VwxGxPv",
  "key33": "695jd51ahFXeEWes5ryZV3qDquQPaptDs8v4wUifR7sr1i8qxh3LaJFY3nBmowDZwEM2hNLhTjNbJLSy1krgqar",
  "key34": "T2Xteb6aF1kRE9L8piRrR7oXhcWJAhJUpERJSonGSkpb4uKgaJaAizZxgTXeSgpWDKENjvtvF5Bj9GgbuVxaC4h",
  "key35": "3G9phscdPiScxwYMNCVkFfx1t1PDXSoRKND2wt25LYDZe9qKUh5PT5CpfeGrDQMTscqQGTbbhQwg8s8cmDoedUER",
  "key36": "5cb5QZmKXqS91C2YfZryPBsQkow5WP9jn2QfDwUxUkx85kKj6eSN5y4P3hf4sF7vFvYD6QduqoKBA66Z5Bqcrg9w"
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
