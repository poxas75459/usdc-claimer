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
    "5c9UPz4G2rPCw2eAbxdSciLLWHfjs27Pf9rUMamujgSGMUWGBqKxV8iDLpBWRpKKyNY6ajjycieCqfSjh3hbVsbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z46Scxwq3PBy7R9HghUc6D7JsEDfXCYd2poEpFzsosjWxrPNRViwVLQrAp3Rkyy6Xvc8NRyw6697zZUbkYxzH4P",
  "key1": "2xEta3r9BUu8j9yQao9GQaF5krVQ8QQmjGGMbF3DWhVRJUaFcLsKpUV9dJpNw27v3LcnKLQ5sSZ4FyEWXzhXPT8w",
  "key2": "pvYTK6MnsWH29oMcPX4gwtJmpTWzX7bZuYbKT8we6kw7TX4sua4JzMvURwCJN2wQqDt3bhHwaooyhFVjRJb1sYa",
  "key3": "5wmt25QWnpeXEiEAEspAbmG53PkWkBk4pDjNuJtW3pJuCivR6JXHyYvXMsmGxZE6LXsxaZEaRBiLaCFmgYfPbFRD",
  "key4": "5scFVaQ6TFJ4oQX8xK9xg9bwkx9AfLANEBe9fHb8Nvvk7dd8NgQxKRY6Anak4pnbmHizW29YaQ4MxDwwyhRQgMB4",
  "key5": "5D4xKZrcSYKQKSzUQXGuybs8c7zFzsU5cEok85nvgw68k3ZWEN9AjYP8uT3oNRHd3ZKFw67qj8WKwtnBwmj6pmZa",
  "key6": "2m2WGEvsnKzCq4GDr4EgvQ9ggojo1xmt1eX8TyUbLb4HhjbFxKmnCi45APUSCAD87nWWehyK88xv67ZsjJzHCxqb",
  "key7": "4bA8T6p5xtX1FSKrmmwQPJoSFgdFv8feLbReb95HXPjW3G6fNtHUr79QXWgwDy4iPDVtoNF4BdwksBnL5zQFUG4W",
  "key8": "6775TXGZ1DneB1rADyrorBnPKBR4fYNsLtzrvZicRrTMziQ9qJQL5DzzDb5Pdg8tkP7twLFT7prBeN2svrBWZoQC",
  "key9": "2KQ8sQ39e8LNB8Rx8V6MmDmbvhcyXao9UhEN5evXZJEBPMLnj9Mp7Lth9nx4QGU3ynSgmSmzZc8ghqF9TQ1pnXMK",
  "key10": "SBj1rL2A6CSRuhTfUajkkhHKdTEeAAZSELz2kvVwFT1i9UrhZaUHunLwwVujh2hQBUYp8Sj1NVFq5VMzomG1apV",
  "key11": "ogLqD7do2oPjRp4r4kPZcbYi9YHMpNrtNfTKbVaVHobVTkJ9mKtR212FBq9r36JLiZXjc6NBtCTpgrSJLmfpDp5",
  "key12": "4Fde9SWaqcQqyh6MoVCxLS3ZU3QSqjQ5MXRr2QExTqouDti4SxjMzcBAsCkMmorKzk1rVoM99RkBHhmJ6GfaiuVJ",
  "key13": "2zUNmc7mg5QfUfFkPdHxndeYj7BEzYcMjtKfJS4Ae8JJ7UYo5Kx6XBQWdArP6N2VcoBoMQDogw7Ysm7mbEDgk8Up",
  "key14": "sNsXug9vLv94f1RqVHZxk2hm21KsfMcyRh7wcSJ3HYzNkCBumamB2Y466vKBrKkNTwu3dtLZvg5SqDAmdKCGLWp",
  "key15": "5mhYu2U2skpLZMxcdvyDkAKWqu4B5dTAT4WhVrnu54GcJgNFdZPTPrESbT1M4WhEJgYyHtbP9j7XweyhfAt2CYtR",
  "key16": "4cNpahb2sQdFuLnQ7Wum1RdfEaMuaxgq5RRwfesirxsSwwd7xga5avqwTX1dLW8V6fPTUiB84dkoMbe6xJE9Djnk",
  "key17": "5KchY8BsEQc96tLPKGo7c45jzCRiNiAbRKyE5o6gh5TXv845nRd4wnRfkyp7LPHbkedfFssVJZn5N2D7avM8gyQX",
  "key18": "mYMWdAzCBQ9WUZ7zDsuWdnM4br8cniGKbwrRNfuesoSkY4nZN1FVA9mDJL6dMiQJ2HcFYeQeGy6E1Zb1maTMgdW",
  "key19": "XjTSWGGRSMq64eVRHnAyypJdeQVrRV4sqZGHz1f2DKEPdqJFKSh1D9BmVFqHqZ2JpdWmssJcXF6sq4dEc9oKFWg",
  "key20": "cx5bhEziF9efVg9s36txC2dQoj58ybHH9VPaF1oAfbqLoN448kWZWp3WzDrGpvBsoiHaHb44rhZmfSZ77r2UhxW",
  "key21": "3Fomqjybd5f8hdG3Yo3RHeZHZQ1v5NJzkzXSnE6UcatY9QymiQfACcXYzcdSGw1KtduPYJwAhaGAhTFykkJLFYAn",
  "key22": "37f4Tczq6Bbueaj2i7FnD3AqFgy5GX96EnzHxB4aaHJEzkSt4u1hem3WzoHPsj8XQQu4d8ZjQEgWVWKuq2HnDaBD",
  "key23": "5zaaTKZouJdZCMTuK5ZFZAN1ifxiGggrKsmkVBcU6iGi5q8D8Fe1qNsS3Nwqubrc5fgffTdzxRjdvq6UYFcsMqm3",
  "key24": "2eQKjrwdUGWucwnG6rbMtTMQCz2YWKs7fb2VvMB4iUaskfhdUHXuK58sfHKSn9HuAEq6P2rqAuS1BPz5gHqF4Djs",
  "key25": "2zoD8BB4kk5BE3UG4SdaWKn9ze3XxssjjVmH2r2yjZ3ddT52JAqsuBx7z8HMChaD4945NupLxrEu6Jm7yokUfovT",
  "key26": "53zA65HyxfadZsb9rzrLKu8WjEgnPSih4g1WZFnp7dkRiTmTvPSMbUnr5NLz5iV4nX1rC93Tk9Q39n9kd98DXYyS",
  "key27": "2M9P6ba99qhf6adL4wajQ7gUPe7kaEvsJ4ERxz13XM52JVfFPsJH9vyKwQRPXixzsYKTuR7t8LBQB5JnAy6c29QS",
  "key28": "2ZnxbowjdQeZRXTxbvS6akX1QH5ahDS5xHTTVJkEVBFimoKAoXwez1M2eX99iA7YiCjBQcMfhxhSBHWvPpttTe17",
  "key29": "3Cgvhmdy8zARW5LwH4rNEN7VnGS1K2pqhh5QCEP6DAH19e5bcsNqKtXn8Wj2KNSR7VB2eLoQCMwC5ZnPQ7qQdKs9",
  "key30": "LEcHSnkgu23dHTjWMeVeWPb1HEYTpaX938sodWs8sHwvCxqhGEP3y9uHZVbiTykss4qso43HQ4a5md9HQXYkAkp",
  "key31": "2SSUVjztNZjJZMrs6pND1L2dr6m1P3ukBDw6FEfKya1trd4tWvRVpf9xpsQNZZQavdGaiwFdnEmJpZN8WSdFzHTS",
  "key32": "PQRy4HWuh2brLGK46NRwEVpCXtBpeH2aFyXy1uo1FV7ogTiPfmFMTnn1CXtq1Xd5H9VuJ7X8HuQxG3Jfj5iYw9q",
  "key33": "3KzNQhTZ7ZqiMjvvzGDULmcGe1jyENMKvUfDdLN3soZYnGHetWd2VvZvS25hfWesS36Bb9XHBDkDqPBvw8q5qmEa",
  "key34": "3rzYEctS9DBgcFYMPGkpYNVKPQYeheAULKk3NPYAwiqNERPqp4NqvLTPifTfrKY5fUQJpPsHZ5a2fVsAQrN2ZVCb",
  "key35": "4ZsW47ZJhqZBFijmEjvv1S1f1RBiUG6n4MxmhkATAnGFkX4Pe9MBkuFVTRqvMbH5fiywiDjYBEcpfJFLThfWvcV9",
  "key36": "24xU6qWrWdTPtSHMPKfN8tmWPR8Aq2jQUrMToXazhGx1cfUgdWGYfbmMtjuDJKy9G1yrahYRX2frKGxftYxSghRQ",
  "key37": "Ko553FmxtuE119dCbsiccJGQHcd1CAboUVVuBZmh6ePWk7ckcucooVGSpzrnjRw7W8DQsswpDnqSpDwwkuAsdsx",
  "key38": "2cf25QzQy8qWrzm14otV9dmUR7j4u5RUtyGBFvrXNbw6f9DMDi6skLggBw5GurapT488Ce4Gm6Qmv3Nm9NdNHDck",
  "key39": "52cvr8xSzS4uUBbjzog3SGPnyk5jGS3QbNsgPtiDhx72UiKRoGEFkH2EvRK7WuaRtb983Boxd8Yx8TPpedpZ9jBc",
  "key40": "4q5PMpnzJcTHuJAEeR5SH98EHFmR9aFBeP1g3b5s2ZSK4wfdoqVGTyvRafn54dUDkUmhzighu2ZPrE5AigAmSeWC",
  "key41": "5oa9pbEhokANj2rT3s2J3LdJJakyVLP7HdZScJGUMgAYvfvmpDveqjqff8mRxmcBWYuVyrXmdao6D3L2Evv2Wrk6",
  "key42": "xzDJAQ32XyJMwArSujjTVsLJEyqp2aUpXCwixp56NNVhzSGNj1vHQV6PNHrMKfLDbtUfxrACe3VtbpRuKUouEmy",
  "key43": "2ApEuHRiAn7Cpn77gRTB1cHehU5QtNfvKsVJnJDN5qP4UjeZw49JbHXfkhLJkuWTSe9b4FEwAnJNqErfe5cxNuSQ",
  "key44": "2TFM6prfuoPUih3TCMRvdDHroSziFRAgFdToHwUE3L4WyXKm8W8p9BMGhwdqwH1MSQxZwstYLfpykzcPosRZmBu9",
  "key45": "3U5xz6uYzoWD7P76ArAoRNSNYknreaQSJavxJepzRTxCc3t5poaoQzcfX9dvx3zwr24UQYyqoVwj42DDr9pMHtmz"
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
