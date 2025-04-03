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
    "3xwy8y8XXdcYVa33pRJZjopgnaMSRzhbZAk26KSFXeXM5iuJWxzR62fquMtinLTXaiMKoYkqpsnL1oxjbE7KFTqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3PYLr7JvFUt5nRf71nKGQrWvaayjUoX6LXWxytPYB79ARw7eKzWdEsnzBRuc1NvVcV1mj9HetrBkuPQYFeCv3N",
  "key1": "2ZEftDD1cgMDYGqT8Rp1AkuZ2z9QLT9dyfjjaJyCbC3C66EuwZxCUdtgR5FiqP67Yg9JQUBaGRgm6pXpNyCqwQBZ",
  "key2": "3UmuHJ7hkTHPYUabF4bow2D5b56HzegwUVUnBAqpjZBfQDsHfY4WzS8YwKYqp4XY3o5d7Dwbuu71EiXAHdb9yYQS",
  "key3": "53pvS6ZL98pcYbNyZNHYQVRLzZQxHGnt57dDCWwvi377SEL5ctw5BnAy42y98UgXy9xufXciGmMk9UtnmgZjxF7T",
  "key4": "2XCEM7bRQcKrJmWc8TQoBGTVLktoaA23ShaWaD7LksdTR6qxUjMvGFXow5ggyzGqZ4LPkW8YkZ4oDWDEKmPnpbFu",
  "key5": "4s2yLuWg5h7xfgNwuznR4CbmAWWKLwJEbxscQkWxnGfA4gXD1ZibXxGmVS7Mo4xEC72Vn3fcM9RbwAh7QMNcEoxZ",
  "key6": "3VvqzMbNNuv5rnn87xPp3Vi3CzvHxc7fiYZh11S2jTmRACS1jSEfy6U6GBMgf89VjQP4JytShEu3wBkoUyU99jLf",
  "key7": "zcHx5GVzMtS9gqD7STAgLTq5Hj7KhoXsu6eFGJp4wGC3aik9khk4Z7bVen7KGkKyYgWPoSCb6CBsJvuAvuLSMVk",
  "key8": "3JHJ8NTKK5hFD4YLcTFnAVdWzeHnF5KhBoRytkKz5Pi1DRRumU8BAk1mh3QX5mEZpHcj5ZLjoFaSecQsFpJRWFbL",
  "key9": "52NgRrUzHXUkraEHigjJ2GHPN5p62wwZa2bYzUwioDQGsMoQRL3Z2L6daVDwW3Wuwo1GrfWWZPy6iKBLvRrq2be4",
  "key10": "2b6KmqFGNFoJuiUrLuyM1Xc8NT94GVACKU58HjfD8JgyTARFKuNHcS7HRUck6tDMcDnw2aWagJ9ySpQ3RdPUKkvo",
  "key11": "5nYy45kWeGLhRnbubuyCHc5jck2SHPGZtkSUF91taUGruasQJMyDZvhD5qo5fCvzQtoqogVkgoGQpNAxnjeQRBcU",
  "key12": "PhJMLezQJDP59sF8dXff9U2JA3VVhdDz26pTfjEN5HDJKEeAmZXhrusuDAQKMuUzUGjUSJx3VpQn7AXSpggXqnJ",
  "key13": "GBUqfU8VJUfByR98LXLFKS5frPnUkDhujcMHsoweV7zNqQV9UtUuDMBDhoxDLcvZFRfNxA55KU6JDKemm2SrBoP",
  "key14": "3qox3NQuEadYvvLxnwtmvZ8RP5fr85BUwxW5PNdt8c7ZQ3irKakUGjiJVbKrhGW27wtBeNfFFLpcXRp7rRDmpSHy",
  "key15": "2BFc2ECFfVPrhrGmNDg4iqftXn7VLXnWoxfzgppHtBkPbnY1pJ5wnsTbqYJFYgZsKVyyWHu9kDMES4qXf1EjyZfP",
  "key16": "3MWybVYz8es32qr2zy2NewXiLt3HkNf1abfGqCDt32vUgcTvtXHYyKSNy5PZvsaYcumiXEsc3SXTPoKAw7dS1cJH",
  "key17": "26XYuFiySruPPk2ZgJE6azATWprecAiv5y8gugdm7p5MKVFXRY6TbEd5G8t1R8BoM38dvWxnM3WKw4jSWc884Spy",
  "key18": "4dvxPH2wDzZkjFGaMpDpEK7B8f5RYVXpdg7DNnP9aA51uPFzt9AY8gPUpkwQQacian1ekpRKs5HDp633NvP9kqBe",
  "key19": "3zr6PvE9wDDwxJEJxS9bmUzAjZUiPJSmejjaGLDHev7LipzPfThrszsWZut9468eLEg72XJAPBtFxUAq3o19tUWu",
  "key20": "314ZS2KkfZSLtyAxPeK6Q8ijB6d4vQLPjkgh5zZx35FUz3rz1nwhNFQqQybDQEgkUoVjsHPUaJRrpDHUVAVhENg8",
  "key21": "65U9Le82VRMfJVjRVRb6rk1VrUFhuRvRcRETZ5HK3k3bJUUnp5FaKqBHzCzCVjSGusWb8wAcqkSKoGGd8g7bA97f",
  "key22": "8sM57iEAPZ99Thie15vKrgRtPzgSXM4obWru3SdxFGfNKWmZ8tK3ZtcdnXEHZZt4L5PDm1ZwxcX7YwXYsVcNNdS",
  "key23": "4iN349C1oF2giSDTmFFJ9LLPJsPcRDtKd71K23oYJqpwKgtd5Se4uU45fKcnWHdq77uiPzjfedf8y6L4VZT9RQkX",
  "key24": "379VLB4kyr1dZjToPZ4dHS3gDfoGZEP4BMWhAF7fFvV8RgVjTohkp6sGEXiSzuSgQL1Z28pa2ZjrBf8HeGJbscqx",
  "key25": "5onQYfVY77eXeDKrtHijvgdf3bQMpJUk5kNuUTr5futnWnmfEk6ZQ9XbzS4fboKP2nsA9AjYBRFhvqpaYo4w3f55",
  "key26": "4aGHhDhUrFFbEJ9Wn79YnGorrvfm9KJsm2fY3kVtecND48iaGDgQn2B3GhLLpv6uwK7423pJYPVWarENMSZyDtfZ",
  "key27": "5UdGvmAtf99pVj9vZ2xYRmv73tj2oQzxYb9W73gLqAUM1wt8hTvz3MgwTsM41cf8fnJC4Z7CGnwshdah5WEHw2Rs",
  "key28": "27uNfhG7DTY1xqU3LSL3DrL5yy6iBYRCx7pATkBnFbwzd2oXmCBhNCyz7B45PYNCqnVDMyKfseTP1PpzLkpaXatQ",
  "key29": "4MbuW11boj6mVyyMcX7Vf6sfCbuCerVZvAwTHRuqM5mXNEmrHAgiiyMUUryNRqBZc1GmA2FRtA6a8awXD4WWEmCB",
  "key30": "4Fw4KWLeTGzGSi3dMwQvkWti8oDhL24hE8DGp4vNkxDukwxRN5HSZXW3YwhSm9hy8ocXc93ydDqPDyosRuusNKbx",
  "key31": "2TW2Ys6brXwAVpj8xQMQ6qjm5RyNLA9jY9r2Q71JPjbcyhaNZG2pzzrPgGiCWQJguxAT3M8K1NCcTGiXg6bt4NWs",
  "key32": "4W5dZXKcGfhZ15sDVSsxnCrrYY8yBph4GSPkAeux2fZtKkQyBqp3yS25RAwQjpyvXWKHhVD9DpBKr1bSnnBMgAGK",
  "key33": "488B9ihALpurxnNFdBAMRLqwmcT9wNQiQFDDGH2rMtQvgPJPrTr59qjXvQFy59QrjF4SojJQgfy925k2hZcB8WTu",
  "key34": "zHiWnxBJJ1nXhrdhjkbXuDbeQ2J7bCF65HaHML3XAHXz2nFVsTq4TYFEMabDVf3srvTkuxehpvxfekzJTm42ks1",
  "key35": "5wcf2CEEiy1whUHZYU8d6mtUdH32A7qpptcuy3VxDrYRQLSFpGhapTDRfizc9bs8Y9smZ1YQhqU4fEu7UVj4eJwD",
  "key36": "KtyoX8ugY6gu98evt94tWeEkNEoBhagiTpneCgQkoRZoa4YFxwToh4jvDc92zMXMSomViACVxoVjntG7aspaAbk"
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
