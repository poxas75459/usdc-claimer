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
    "Zo2muxB68wvdd19F5WVxANBeg9UPRrPRYvWEPqYXAX2Rd5zqKopZ78WgmYrhkAUCw1CW3H1KY56s33aK9Aat2NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2FFHx9ZpqhmsF3U7qCNnjXn2veCXYEx412GMxB6jJXqTQFZ81CDkvonY4mBq6MMqr78qAtnQfV1UMVQzcE4wNC",
  "key1": "5kbkwGdrSwxeV5C97QfVvpo2iao73NuLfGMQNWUT3Mhj7V69oyEBghgi9EwrUeJfgtWhFq3ogpuj36Hv8sMGxLWy",
  "key2": "5imeY4e2rL72EWuQksS4f14JapCVK7vGcXFsYLp2QoHfq4AR6hvXT2wmEvX6VmweE2jVbqRW9W9utkDUv7Vfd6JN",
  "key3": "2iiRc9gcreQSMr968v7pbgGMHUVeWHahZhD9pkXPfBGDD8VKyC9eKVg43hotJCLioxeWijeGn6UWm8eiknZPZSL3",
  "key4": "GtyNYTiq5tXoPgSYEKHos5FtAvQzqrhJSxVBYwTdTszvXKTSd9mYV1bUkKy5bfgm4h8rjqohmrMHNbVQz62LWE7",
  "key5": "2nfwdouH53R5FX9kVjCXd23bDggvDZBa77k3mX8DrfgnqXuWjjDinEdgxAN3upmaoJEivt38nwjT8XGjHRy3FQ8c",
  "key6": "4umD37bfdvQq5Z5rGvjetoPA5gCQ6xs5exNRXG74zmAWD3GPN3M71wMMQvvoxkgEU1VZhpQPrtXxgR8xYDifHpWL",
  "key7": "4Vr2PCXCDDvf5eJZ4sznCVjwfL7UY1WcQetLTXdHh47GdSBPxpqbHRdnVyNmR9LkXNW34xznVmvMRFXKshLttnHD",
  "key8": "2wSeLRxWMZJyXPjHgVf8BetShcCcN71KucSjLowvXALFVRFdNxcp73yovvEBx1qmVguhLojtz8fVN5RR5ttKrZym",
  "key9": "23w97r7FUay2svRRPZG6gXGTzYrgti1jx7UpmbtWxy8siF42HXHEN4FsPYkryNKe9ABhUg9nauLAD6Au4xFkUTB9",
  "key10": "3cBfYS9Z69CvRyFsjgJG6MdtjHDpQWQZTtXDWCYkLjMoVwKmTZ4MnKZxMNoGEuJm3H9Yig7jK5mxTcd5xuGgdh1v",
  "key11": "28F36ND7oMzXZfYUtUmpvAaPfPPdvhFLaiLripGPSX2dcqpKLKRuaASCuJVzSrYidEJs5hnKiyS94jGTAeqAJ3kc",
  "key12": "2CV6nZosyPYcSLbwMAEJtNzhMQrh6d1d5yJa3frv9sTkEDQGAEHUoBzNE1qUkCmFF8wD8pvT9N4LQbBPB7L4bv8f",
  "key13": "3WCGi7oDpLjZVKghXJZDNmRFxWocutKvzD7zBNYAhMh73XbYobA5HDEqhGhz3tce5Xdh7Ld6Q1ww9mytMTNQJL8n",
  "key14": "5Y9AzhYwqaYNbCJcyX24fckxCY2S72r64JFMRTe8D43AmYJvxXqxrYPmAuvn8gAbpFY8GWUQwzBPbPvKtC7LsUZR",
  "key15": "f4CFmcSgqWnN1iXH4VToPZ8FCgi4VDaSjfHVBfTj2kMYJn18nKtdNaESmPgFXE2HkZ5cFn5wcByZrYKBQi9CJvD",
  "key16": "4NK4TuQzCzSGAxXSyEZpExYC6LHgM3yNpjesWPd5fMVbEYycnb23sFR8qF4Y5eCnj8xwUJWrJaTq57DWfY2gBydj",
  "key17": "3E49TqRKQvzwUhN7ysj5GvjWDNGvpw7rpj9z6ivnkZhL8CkH9KBggJRhZ5ZDmSjRv19RneMafr9ZGqovYpx1Y7Ho",
  "key18": "46LJ9F6QjqVaHFSYW6YTBpjm2BfkkGDNsFcT3iU2njfvYfQgxZppi2kQcGRXeYr8eYguzo8tt2j3XB3m9iL6SMk2",
  "key19": "5MX7eKUPaAhBGZi3fo2paYbRyQHBXx9aNAAU7cWnxid92L7kvXH9p5waDx5wmBpn5sw7LDwXVEpSeR5vC5zDsUnc",
  "key20": "sAZHVd8tb6QBDAKAWrT9SBkxhiLYVakcoMcypLRgyMajwzqkg9mfwAGefm4w4QzouwjdZZJ8kF2jTN5TJNJdqQx",
  "key21": "3dTVQ767A4LFGfJHD35oZCfEbRsujKovwCF8sb79HoTKfAmZbrbXc8HvGAmgZ8KfGWNzyTdXbb3ypFBqZBSkLWQ1",
  "key22": "4NuRGfbQh1LPchwmM8UZf4NmghV6YitqpmPfW1PStwgaHhdqG5oufztcvhJMFiTc3xEXvWpVfyZuiWoFEXvvkCjY",
  "key23": "nP2LhoCb6g2yZKkYYKU8DJ81keeDw9q8n7Kw4fcDjM4Wrz6uh28XxzjNRz6MJ7i2ycGN4ky9zwxtbVsBBYqPjAn",
  "key24": "5teiivEJjfQhomJgw8s4jk2g67FguYkW2u3JZPtkKxfA3J7DkuQZ1LjVNL1oXycCeBxT79TehZGkto8K4419cDsL"
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
