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
    "5AXfzvok6ad7zx8ovBEeYpcRhwB9W8Zo3hrvKnizYWefPeU5fUwc2fevL3oF3vBWDncKAfkqE897hbKhqJRC976Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWHigWxJimTdqiEdWbt615U8MKDDUi4Miz3oJHxkVnPy7RQMqnQwwHSooSeVmL5t6Ufg7ydnRYj4zohJJacQHTa",
  "key1": "4Av7ruKFRsRPTUW8jKktACiHWVghp1dRDnHNFM5jgQ3p4sc27nZNj4p6d4gQajPRcW5ZTJvxg5js47rLKa5BLopb",
  "key2": "5PzFFtcBw51P4yF2A7bCiLfSzAq6BbcWtxchypdCiKMBxYYzz3XFytGFfqeeUc374YCnpum4NVMGqdbjHvhhvi19",
  "key3": "3XBKq9m56z8e3aGQFuUrKg1PdjE7qdrQHZQffag7w2e1ei1ziR9szAjbFp6kpEKmdymwPQtsqFS9U4RrnzsGHzUu",
  "key4": "47vcQJ9fLN8KqR768tEiVuyuMSDbopJC9p1DVYj7xnmUkVS8cJFGQ4AxSTACifSdTSxNoKAKs71cXDZfkwM6un6w",
  "key5": "648E6K8uyRzAzBi1ypTbjauNQpL7FyTjSskQBvzgzEqK8EzxhQQBQBSUtGwVbC8bSyDnLXMU9MrAJoLf6BZK3HBJ",
  "key6": "4tBJq8o1S9xuYwvFjySngkKwsgiFrbaxQH8hKxB71Rk65soGasfGhxtPke292V1V6EkGXu6muZhkiXpjQhhcQUpH",
  "key7": "Pn6KrTysykgFicGVjQohk3i8uuzXcXWDXFQBLaeCsgqmtVNmpuVCaAK4Hv2g7oVSYYh21eBCgeAo2zipQWFyUqn",
  "key8": "5ULnRgPbA1pB49vntVRALReFaZcyE4Fm6U1dX8jCccfRjXULnhBTb6xFpZABGNBQAm4bLt6WP2Sy1gRFm4drLx2T",
  "key9": "29ynZ3ygtTNFS4pRetYHKMH8D3nKCPZuuT9EmR7rMgHK1nzu5hLiPNp4K1NhgzGZW6YBFYEqRx7YJgM93dhhkPcM",
  "key10": "2TxwQF3ACNqbpVhNguaky8hU7Lq7Z2DnfdH1QVg6As6YjbReuJTCiA4wSYEje5Vc1hyQnxgVcXWV2maCxBadDF5N",
  "key11": "4qAvTFXDF2PvEQSvz8wH7PRvA6rrYw6AiKB1Rm9QX9VD6MAG5xYpfgyvi5hcXNRsDfty9wjkcTo1SrBxzbrm1kjN",
  "key12": "3Uw9FRSPR2RdfX5GG6ZJZCwEZv9r1iLmX4fbYiU92eU87uwnUhiw27LPf3Vw9K8SgbpssQiJRUV8ideGGUDQYqyH",
  "key13": "242aULHyG5bhdhRq3Bpoz2aWxSm8YTpigZC4ARqKZZLsMwibzz1zyrKUkbYbb8SACZ6UbLzDQw4MKiEQpUSaK4Su",
  "key14": "5F2ZoCJGxdK1F36xbgoqUjHYtYDJAJZmSu6GXMjLqYTuFvivdc2fHdPtdi2EcYVFg1xKHtVKTjhCQqEMMtwbHQnb",
  "key15": "4ZeERKtVy3k7kkfwozMsiQB9sTuRsTZm4Tk9zFfPxht1DWkjo975J4oAC1TrzF1w7nrzCrF6WJ9HXaXXcMZzwwqi",
  "key16": "qEW83FpGo7MdheNUsQYuA4DBLffiubksRBA4uTCMEBcgfovihz1yVtfEuuQmeHGouAup4X8bQJgyFKsodxUHDbW",
  "key17": "2hkuKrnUzJsFh4KzKcBSrNxwMpdQsGmp7Ws2YGj5oUxQiiZPfpbQZhs1Lbfvz7jwtDg3Zn2gAS92uTR7Vx9x9rGk",
  "key18": "3Jrrk5Hh2HYExNDNcW9jQq2BCeJsgWJGbF1BSzzrT33nHxXfbqMYXhBMx4hm7EFV2Asj2R6Rh8sTdTqxWndLJdE8",
  "key19": "29My3aqfZnFQxHFz2CD2szDaohN68GuBPPNNoGd321jpxpW2idWk6pAiimtFcp3gS5AtMgfXLMtgLzFuLkVEsDTh",
  "key20": "MktkuCAFnPVrWVVYV85KZeMV5ZoQEbb5hFg2xKy5wBJNhPNCc22mQ1ovDaUnxK39wwrayCiBURiGo9UwsKBXsYv",
  "key21": "2GpEJWhzMA2iKPcWp1uwdnK7VCyhuBYhu3WuoRDK8u5fTTwdXKDj56bYwSEpM4MyyZAaxhkkVJEa61N1APQntqJJ",
  "key22": "29qQDpR9UWx7VTycmXstp319biwatQvF4gMPnJ367ihXwu3fBixUByaBFfpXWP8oXu2wMi2ZWrGUp5W9cS1bJgvR",
  "key23": "22GPJK6m8XA5jRbVDrFGrPz61JodZBxRZdWs9uBHiECArYcUGYHN72bkEGmby94wkso54KLjAiyy5uN7yygmf66V",
  "key24": "2SVbF2iUCsYDfvW9wRBGKfjAfwSCfKLEkncHRLKHZESaYL9rF9wQ5GE4AH76BcRDy1k9YPg2FKaodakg2RxTC7TH",
  "key25": "2pB2hppGHErZueUorAE3fnAQEwGpXRN4hFZ3WEVM2CbVQcqphYikFz3TAstZ69pBn6F8ukqVKrpvd7H34HTy2fkV",
  "key26": "3EhzbkfqeapDnpCDVw3gXvZnKBAtm5g8ZKzBiaKUqNou5FfxNN9yM4CuNmKHuQiNKBnagSBjGcZdTYXAT6mMGCv5",
  "key27": "3FreSsjYciXq7prxQJPn9JrRAJVMU9C67mSypPbZ11v9nk8aZNNuy2Z5CokTkLqGTNNo9nyejQYdKobJfFJxVMSS",
  "key28": "4SqdNEPimZdGhiRkCSA8ETTgF8ExSLzcCxkTWSXve3ba1u8TvXM1CjBmvxwGGhwUjnBswtYAoEVgU5zs3U5Rnkf8",
  "key29": "2E1v7rBWBgUMFptAjxL8MEFR42yB1fcPjNQSTyGc33TzZ5Rr4tLc849o68a5jxyhiQwBvDR3qA5CCxgEtZZpCUb6",
  "key30": "3XyrSukgmwqfk161pBP7VFsV7YoMu4UvRuB4jjhB2pNy1YKQbJYf8Wjd7uoKHqGxA4qcpmNXefe3FEzzKVaJmba6",
  "key31": "5oiJvuAd6B5UTbSgXLL2JSiXnuKYqnN2f3fmxXHoAgzfKH3DeisVxnJBUSXMjm4a5nLJVep9iaM9gXjAfLuFmqh",
  "key32": "5mXtisXHRAQjSTRi6axYXao6PtDA5GdifeVJtUNdqYCzBzSj5z8L8dpoSVcJsMskP95Y18Gdov8o732QuMdhbgxA",
  "key33": "2uEa6mU8e3wup3vmo4fBbKzhjni7EaPcvfXGzRJZ2Xnht9DTbZL5KhMqVaG4ZdoTYayiAxxZr83nH7tSCzRrenWa",
  "key34": "K7GE7msCHTUjZcgxZoS8HdgeVSehcrDPrEZaRqoB8JvqhH8zmAgweDgKpYEHKdB4Pi1gCMKYKJEGgRQAoZT5Nod",
  "key35": "5jpJP5fNw6APmDhk1stixyiVuoS3fVvAowU123SQEdeC7FnCYJo22XLX3gGP1vQSHejAhvtbLv3tCsRBCAcr3b4q",
  "key36": "3v1M9f9V8Cs1dFNrbW3RVrdESoFQasHep6DNEs6hQdxdDHXLvW6PEeTVwFomJgUvGuGEhgcqw1hRkb4Ctb9XCbkw"
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
