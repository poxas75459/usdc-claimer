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
    "zQ2mk25dxQaXNp1WDYXL9DBHZnRGndY7tTcntjuCNZwKABHa73gMEXdFqTNrpGw2au3bPTGiGQwMdwSX22FJTC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YbNrRwxPtiDVJqCfBQ2Vbm84aKs8yieNRa2vUcZQGKpyRM6wwcJSbP72cuTSFoyUatjpeJrX6XJtqbH7GCLXRjK",
  "key1": "ypdGLbP1ENWtNQoJZ4JktWBTjtMDsRVZPkDkmctVf9PCvDcDqCKwBCSJq6Aox7FxCYW3RkyAXgviK6ogf59J6P2",
  "key2": "23zd5srFgKSNnHKA3nUqLzWBgApGrjbndzeVLZfWNix2VrHUbLWM4sooiovA1FEm5XA2hjjDekPQTHUww4DAkDp1",
  "key3": "4uEDBfp4tAtMAhUXXcLQ35Vwjrh6aAcJ1TWxnkNwRMv7695z2hfdp8wUjnJnu4D8m6ozNbHmccwNZsXUmziUDbci",
  "key4": "3UqeoJtX2dQj8vSkQ4u8NL5H1ZYCDw46DoTSLiUPFyGcq2h7R3U9eMNbd16HWQCiuyJvJwsfgMN2Fi3TKxEpTosG",
  "key5": "28xVoe7XddE7Nef4kT2aZELLZu9LEEsL1d1yoLusgKrW9EGjik3rD7HSM6A3X1hvGZWNLyk5izmBDb1VjYsN6sah",
  "key6": "5k66KFTtUdhE7VgcP7yzg56y593jKYdJUSbuREGR5zbn6MGi1skFhSnksjxzM4x3bd1BpYs4DBkACed2cDrtE2rV",
  "key7": "2VrA8vh9ys415Xsc9SHi6UtsbaWxNBZCz6iJHi1nNFvJtksk12LrpNTe7b95fgPafK8XpZnQ2C38u5FrbHHYAub9",
  "key8": "5XjTYgwmHWuPFKxFiaJYWgAEtXsVmQZRyMKoi6ZYHqn9YoRJRrP2tFSYPVGfnefkMWFwEjGe5FBTNhe9apMnUxJE",
  "key9": "24XDmndGnsYLzMnYeovXgwphrjQPesMMUe6C5VjVuqZdB6b5GdYS6wrMDjSHUEqZVZFtggQ5HBosULxUrHdQtpEm",
  "key10": "3JvxfYrfgKS3webGMkofZy5owqxkKcuiF85ndzmbYXJUrqP9AtQ7mM8rZkwjafeoBnw9WT1jbNgXadByYUPzgjG6",
  "key11": "27apTmwDn86HSCw4BoomhR8j8fvhm1Cvm9tHMA37o4BhCvrGfmUzA6Qv5uWw8s69WM73p191k8UePpHbStRUUh9G",
  "key12": "e87684gD8nYgtH1eGooiqttMbEusmLqv9MQKheMnh8PLe9sPcUD4A8zrKBcJZ911vQoqhRKNKojMNvDn15xhfrC",
  "key13": "4DyBSfs2w6Qnr8qAitmLXK6PLt59dbLPKvfj1S956XYoAuxCCKvCYuywuKg3dtTCd9Z1Akne9yYh7RNFSygrPj86",
  "key14": "5n6HWhDgwaUpJQLpDzjQLLLMdjKvn7SuZnXLX87UjzxDhe6JhWV8S7Ds9DjNrXtTemusoWUari3abuJDAgTubDN3",
  "key15": "2qocpZJEX1xuoAw5FdQEe14Fhv6wV6CoYFEUE7q47JBhXkHHHUFEewkZ5Uhxqyn2C5JQE8iSVa9h78MWVeVFKuVN",
  "key16": "5khzEDt56LnsK9P6aBPPuL5gbnpLBtqWpjfW5WtGz5M9AboZ2vAwRdVCwFKF25XevazhuQyZUiesyng91kZbsXMo",
  "key17": "5zkHpXWKUxuNCMzCW7MdRWJpMkLMDTkj769BbMAL5aSA4NMy1MHKSPTy1aTY5zsywkPvso9g99YeFri8CdjHdtGu",
  "key18": "65UsQ9uNX6ndWtQEfVJAZjH2HVuSfinPS1CW1mbhS8Ym6gda1LEyHkP8VtuKxT5wFW6FBFzxenAE6J3X3ZjADnYB",
  "key19": "5kVawvyvLmeDfau5xx9f8E5D6p7wSSQg5JTVjtmLw3se6RaizHkVesu9sehdRNznPKQYf7zC7h8unEkcsApkKzWR",
  "key20": "58yCzYTWUoG6Ji4RqcDWxHsdPjy5d46JwhhroqEttTck8zgqen4VX4GWjkXzAez1df8px71BsM8eFYSrPj5Rba3H",
  "key21": "3Zw7y5yqWZ2ikW7dhTKh4fgcLsKenLrNpc3qTeXVQaUdVzJQnEa8mpiXnfRgDG8FagA9r9wAbQXdLbNb2N439zwu",
  "key22": "2qvDwLgpNymuKW3XgMQshSkPJbs14ZogPWMnQFGtk4ez1XDb1xxhZWxx8P3qkMM447zcr1a2vyZkGm2Qu2BvZKMJ",
  "key23": "4x6XxZSyb4SMLopxnX6fWEhz1masUas3pAMSnVReSdjdJ2HoZC44YKxnXVD4F1nBCf9fUfxwEkavvqUn3LQjSjhc",
  "key24": "4N92urY6xhxPxwNwxZcQmqknESYjD6x9seKeHcicdyAhfpfopEmzCWZbNHvvxb2srTuyQH8PKXF8kXyLNTTrcpCM",
  "key25": "4mbFz7jVekpTbYe7EyHjbsxbkmqmYKHfKK3PQhWNj9PFbJdL89Pwfth8uHBoWQAd9u7cXpAF9DYiGi6WMgJ4PFTF",
  "key26": "4qMKq6Xt4WvFu133Yo4SJ2pSJx61SqUmrAW3pF7i83PBJJA5RnbEptzDu4bkpy5iZgwms9yTRe2Tactdc1R2YvhY",
  "key27": "3qG9doYeYqvP4XppbTms4C68mB9ENFup9bQhnCHsGEUZz9juPnWiztjUc2MJ3SLqGRxs9Gu59UPJqCqo3JRBjtjK",
  "key28": "2vexxfUSCtf7MJjK1x5yNxEw7xMPzyJQVrw6h7SrpcfZovwnNBvRxWbktHzXpx9o36VrsWEyMybS7Xb8H6X6S2PE",
  "key29": "25GAPeDoVPUWHpHdB4QH9By4ff7KBuDNAZXwMchJtbdDWxJPkjVhdVBPrkKh7oUeEj1HtHV8FsY7uqUx2B4LXH7Q",
  "key30": "rDrEoRCSSDdM7ULUVsSrG1THesp6Rxhmxdu7mTjjfXMP6LNDJ8pCqtYGVY2ozBro1sTJ3PhC46hXz6LmRWWHfJX",
  "key31": "5kXSh8eMtCYAzoRYvCcVHVfoxP7dSVJvAGDPiXcWY6QEw2PAyiUdM7eWcqkvowd39u9Mf9Jaus8WG48cDbMcU4ZN",
  "key32": "5yNhtJTEJB4xokrvoSSNnw3uFx96mHqV94NaWrx43Sprmm7HgUJJ5zR2Q6sFj8xr4qhX9VNZRK9HEg4Aqx7xn4KJ",
  "key33": "2xWtbA5ABkkmYe9Zu9s7mHZEm5DD7s7EQGjzVXco68P2mJvjLvPjbwkzHXxEd6mpGCY914G9MMYUXwzivTDofMZx",
  "key34": "5BVBE6SsLgxAuhYQQsxJ4xNWJNZ2cLUyR5w2ELARMihBjXvvCmYVZ4qjEMuJgudrYhUaKDrvsdNxhvaKxkZsYHgE",
  "key35": "3T8bsj318oQbQEvNw9m6o6e7tKf9TDQmAZFuEx5keD7s4atCjzcNtcNEMFFqY5KK53JmVZLAnYhZUFFTiDh8Jd1q",
  "key36": "67qKQ2dUs3zBfWdEvy9iJzaxnWEgirKaMNbnVefr6QqQGtYxZsmBsE6AdhH9xUDfiLbLsVJ3Pp2z1JcgBcZnMarJ",
  "key37": "2CGh6NAoMuoawfE58nv7nPXWo1zBzupmWi2wddsWb3eT64RmrrZ32uJq9DNaH5zghmoXufmfN7HjyDQz7d3K7jco",
  "key38": "2BjPJr1McNidMvjXn11m6Uj5rYErtQn2nKWG7boUeJLWVusVvGAVPKRdPDoPW4LtYA4285UDPRpLanfCcDWRT6jg",
  "key39": "3kqabUisjFVU2Yc6c5n5HnuB2EYuZK2YNE2Vq1jkekEc89cQwvNYF3P3YRov3eBkcKj53Xf3EvwgBAktQGnAmWx",
  "key40": "cWFp8AhYqy6rtRYaP9DMsqq7HNPbQkYk9UdZQEJNgeFBLHFKwmqU7wkVpedMvyQXMCexjdE8WJxhWBYVr7vLjZX",
  "key41": "3Pvo78ejoacXk2bVKQDg1ESDvjQe68T3w2PF8rSVXHDnhCegHqpiXJXesg8RLEbRjZtk1CCWEBd8YYoou2YVFL2a",
  "key42": "4WxZsVhjWRhuS3UCxohx5sxbqMxHLod5EVjXuzFAd6GLuondiUu9YRCoZDXh6KMxyf49VUgoT4czKYTu9nrV1tq",
  "key43": "65m1Z7jKzk1YaxdqtWiP3aqeGLhbUWsMHFfCezbDuaPvcGwpRGFGjBgYe4wG8FKHWGREoVitWS8KbVUayTmtFgxS"
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
