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
    "3fwg76HX9A9awY7gE8Fr7dtVzf7FEVLWhADjP4UqWYn2cXecjusTtN5dPo6vq2YQKou8jpb1Muk8yP8J4YjQnxZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4726dB7CZCCdFuHGwruuc7aHi1Rp8Fwa7Li48xbZgKxK75xJUnqWXXbkgNqgVE1Lq6Kii4r6PymcyGPL9V8ASJ76",
  "key1": "3HQKc7cAv9aW32GwSbwyaqNNVMKXqzKAJF1Juh1dT86nin8N9gQavd5wsVkjhkkBAVuBMvJfZ1o8FeUD3ZahY4CB",
  "key2": "m8AasajmmdXYPRYrdnXZF4a5RcYqjF9YGp6CRTXN1BU1DPAL6iwDW5f1obizmAhDiftrcDbW3fLqyyUUpREQQrb",
  "key3": "5PsuywHi2jYW8voJiUCGq1wjuvaUriN5qAfnXdQV8hiR62XvQSvdDPuWWjuPG1fJqSFuxteVBqmnvBxHufbeiqhH",
  "key4": "FW6ps9Cco2epVimzY5CguUgi2BF1eXRQEmbgi2wVY59QjU3JbhuhSMViqFfz8B8auNv6fo72K2Ueqe8u5MEJcGg",
  "key5": "3fonH5U648twowRVuYvyYxr5eZRH62tKyW8rp3ymLNpTchmBhmDhTQdpvX6gWGCxpxCQ4ELCQdZojdY24B5yAU6Q",
  "key6": "2iQ3P48ZRon8LaCKMr8sLjMtZELKm8RZimB8dCiRbU8v8oHpsH8QGU4vjwjRAZmCg3DRAUX7ZAKBTFw2LhQ7AWCA",
  "key7": "2XqhUuy1J9wH1s7oqeedzewXLXmvBbJgtX19XGst4XLTvkfnwRLtCsWkhjJ3U88tNnctjEhhX8kTdQHRffjD8bFM",
  "key8": "rzbjLKAZH7LpfDda7u9zFLS7GkZmf2oLjjhgHzw2JkHYU3V5D4CEbKFpi17DQs4zndyBYhcKR2vhWYvSYtC1FNt",
  "key9": "2M2gTgymU56Gk1KcKFNR2VMKBBWSvwZrKw37PhadcUwyaXTD4MsCcBbhv7Pi6irj3YkfrXpYmzPS52Pv9jw9KujD",
  "key10": "5BbhiTLyhppAzJvPv2cB5MJ2CEAse4jtTAfD2va9FL2rRRsDgykDgk1SUgtnBpWg6SJWHCvnPRGmw3shTgCz4QMZ",
  "key11": "3X3q21EhZpxXyGE1YLJts5dVT7P6k3c7fzC3eFeLS1C7APTEW9W5cSKHCUjbHQQWur1qE4PLkg9JSaqj9rXXhkCj",
  "key12": "2uDBqBgcnkP3eXsQXR4ztUfZbsHZjeK5PfFNoonLWBTmYdRcbhwLpPEgBp6uos2SjF2Q7NPJa7aMFPMuZ4YNAqNm",
  "key13": "3Ji7jTrEtAPRQAHKax25JYN68WL8pBx5LNnkwUrdiVb9cX8U8GksVRhdZ1ApmkuiaxVmMqmxTJMAFoUYRPTLqpFq",
  "key14": "4fZmihDKySKhzBQW4cbTCgaUwM4z1SNVspAvmhsQ9JF2HFSojUM9auLpq6AErw9dkHJgmX9xJXSheyipgxjt7R8Y",
  "key15": "2YEqchNrfPwpe4UyZ5WFmtafiah1gvUnwtax8ZLRWqeyxfr6XZD8bDrLfwx39Rp8JHqdm5HDag7ci3MougFQLsNR",
  "key16": "3JGYs2g8MmskuXh3tqxbsabFyTHbyUXhHGxVyd1abFS3y1D7UagU9cafMaxs55xhJp1PPcwvDKrCdHFzKRvbDrZM",
  "key17": "2zTc9GnWLQ1XZeVpPdEWtbqLULTPZeqdYBmKdf4WfD2DsRCADHVZUjLWXAqWG3BUamLht9e9kA5mJqnuRBCtmjCh",
  "key18": "2u1j9kLEbcnmAyztz91mLUEt9AxW4fPybmaJ3ZsUvyX5RYHB6uERrRwiTTJTr3ghNNFUGSRHmcXvVGRQzh2Lenc5",
  "key19": "54V2gxr1wKcJeTWJuLfMeTK3zshn3GfWLVXh1Chp95jACp5wkDhDbiuHcS4BKDKc4aHfKsgwtiksNwNcnrjE1kW8",
  "key20": "4nxBYZKiXyvEYezVYWTdV2BeNPuKptNXgB6AfjvcLnZGB7tcxVsuLn1gZyQ3mWViQNvZPF8nscJdrZ24ZSj3cJMg",
  "key21": "33qji33m67sq7CC2mjCmphDrrib5vPPwc5q5SvvnkpfTdBt4CJQXn6XwxYVZCtWSMTZyEnUQSSqUVuyPu165EZJe",
  "key22": "1vzDGqQxRNexjgpyRa3be1FX4je54ksyvKJzVxbJXjvJrcDuEXkWGYZkBB6QFPEms7mccVn6a31MX2rdq3srZCS",
  "key23": "342jK9phek66LyezN827MovXBTMCq4UbebzQMK8FPgJtfVqhbRkcfR2QZpLrXV2c7Bq5QKkaGebAhRG6X51VtGTy",
  "key24": "3tfN7wGUsgdRbvK6K7VveQTubmy4D6wDzgKZSK7ecbek6NLmGwzESWBpeLFpz3yHJ7tYp9aYDCJrb9wc8FF5hUyT",
  "key25": "2aM58753bxDwmQTGQtg5WkYJbiRGxkQjMLfR4sf6h1PFXUxqzeEmmPSixiqUebj8Wi36mBGud9xM73BeRu8NTrou",
  "key26": "3nVx2g82hgpXdGzuGjf5CjPqoep6gunwZa2V7y78XxB8KV1S5XG2U2bz4Q2hUPjzSsEUEQN7TrEdrMfJ5ExXAarH",
  "key27": "2PATp5zsREVeaRqBaX4TTvmaw8AyHPYRar5c6HQkwK3ryzLPxugrLZDTTnzfCLsziKgmTqTCmh2fabM1vQm8wBZr",
  "key28": "3T6wPxW1TqzeG8stA5smXQZheELN7Ygv4ERc34RpzAoD66YpsRPzUr7yLvBL4MkJ9QibRfpNUjErhWdRAZCjEaGz",
  "key29": "4VVCERvjfFUNV5WZuL7HRLsbKqTo45h6rjcxsE5SiBqXohMcXejX5U3xBdtPFXWJMUTZJBJqYeEETbgupjTwnFAs",
  "key30": "3pnPgHKgqn9FXnF8yx9B8rjkh9HnYA8Jv83vjo4Un4jK4txDmHs5YZcWbK5W4nqT8F6GkK9kTXXmQn3bcNK4FF5t",
  "key31": "2sQKswXpwhm1m2ybkwfTpfKsBiaa5NhCqJUzk5ZJgg7WHPbx27WwPXCQoRxfQjQ4w4xu2ttoxqpLyYQnVupzJJ9A",
  "key32": "3xXPbSdKQPC66Y2tFjrzQxJwjeDNH6MdaFRhj3AhtyNECTTueyLJRNnfQkZbkEjtY3XFyX6HQZYNKfxV7inMabUn",
  "key33": "36ksZ8Yk5pTXvCGcPQhWF4EVubea9eefa4A4jDAWQ1CR2UnDBK3SEjRM1L2bckAHbsHuCoEzr2voeZYEPCJmQePK",
  "key34": "2P7kw8ZT521c5hQLjFNViBNh8cigk8DAoquJeHiZh4MCiaCoGCXderaNTneBNeSoZX6srsaUoqt9oJ4Xf8egfCZq",
  "key35": "5A5kuuC777eTf9pYnUZF3bkafXEVmLKJg1jb6v92spiN3zG6uesyP1frdy1cuqt6cY3SEVeT5LahA42F5nCNsXL1",
  "key36": "3NL7q7nDiSxpAWcLjCT3KnaKqqHKuJapVCSNVMURGHX7K33dKxytvL3s55VFmFCYPu44u1KHCiYZzFr1adJNkUqA",
  "key37": "2S9mZ1P4uoUk6MobU8kk9Xbin6k6sDpEYdsLSwXpn5iSCYaPD5ZLom3WzqF6PKip7xuyJ42L9R2Ee8pShwa8rWEG",
  "key38": "5fUa9WofopuVrQoWw6ELAgG33kKLDHa6zzr7JpYpQp41p6bChECSTpWd5YwooHarFqiJgUwDLYnxMXV8ge24hHKc",
  "key39": "uJTsLcmmq69pRZb9dB6qHfCuqTFTVcVx8WiYaaHSUCSqjipGo4ysnXtJcs1arr9ra13YP7ah7wca6r9u82ixz8r",
  "key40": "4LFzCAwFM82zDg2G2vfYf1upJW6sGYfTzcEHYjyyyH3hK1JshpbmCATHC1Lq7yFyydFJbwVRkS3xdom4Hmm5vxRQ",
  "key41": "57u7WtB5YXvBnmqVk5up9Houa7m6XwKpjCmDtQbryd2yYpq4jM7eQEbmK8n6DBqcWwRbiqA2Z7YG6VKeWsymY7k3",
  "key42": "54s9gqBCxpNLXNwPrXis1wmDjKsRtcKFoLhrVY9FJPmrFXvqaorQa3k4C9k4KJsNDCxdYKW5ieEyjE8PSqu2vKDg",
  "key43": "4REWizJEjUdmKGHhtzmaKNSGBgGZsrYZVNHFi5zVQnX7MzEV5tuL6hECgoTXFBnJy5kXPLTHnzvxJAyyKEj4Sr5e",
  "key44": "PQi12k6CwxezpzMViY9CnF6kEAsXSGTsv7Yv9LjyAoPVv3oWkfvjdyUop43jhTGWQSNToLXk9CiMQD1NQhvt3N6",
  "key45": "5yWRB7kD1uKXWtyLWLfqmjy66mUzjzxo4zSwx6V8vp71ik1sQ72UEZGK3vai88Rkx9VfA9DU54KjqzEor4hxYb5i",
  "key46": "9uwDi3WNtGLdjVvTJchrrwd1qCjvX47ZN4M7fo4zmT6kUaKVhy11bzPG6XWYPYWWssxmKfEvuHDQF3gb3X6C7PN"
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
