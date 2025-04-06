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
    "4WdD99RfN2PBLpMowDvhV33eHhUwgF8aVsDmeVb3vK7M9ukm5z6CF9bAeUFExfU1oHncc2WdDjmoQu26efs8bncY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tg5o7pFuEhz7J8j8A8zByF8jvKgZK1tUVFZh2KV3uz2tKUWR2YsCu4E9Qh9BJccKwBrjyWALNAMgy3S6BL8M2iC",
  "key1": "2ap8Wf5rtbW8He2nPiA6cVVwPGvmAcZJeRkbUJpgPKwz9vPBghShzqWdQAyd22qUPsC4ebEq6wv1gcUDjTBjyqgD",
  "key2": "4n9qookxpZtC3eaThW7Zo2wePqpQWybiXSz8wSsYSKRma6T7nhFb1AU4fdSibHhhQTbD8F6Pwpv3tLq8YYtEeyuV",
  "key3": "4ZzWGwxcdkRbUYTtYD6JCWSFnphiQwjg6bHgfSwgXguw8aukDdNPchTbTcoP7g5NyrDrDWGcKk9ZdFnGHpkRymjN",
  "key4": "25Mank3upUZNXto9tJRnRdSQMFssg6LgxHRbkzzbSQE8VXLrs8LJ7qExgQPnPuqZrx3B44EcRRTdSaS7J7r7jiFF",
  "key5": "2kou7PBHkDxogqkKDAgSHAqzTsJkH87sr8Qy6zPhRYbUhvyZKszYoFHtAtEFCnQrsNTbaBN71gm7smBTbCrL12eE",
  "key6": "2nZmTkyCLtBX3RAgPwpZM8hjiwH6ybTppiVgw7bNGrfdC9mKg9BHDGpimmqR9baP7DAKT9emJNuLiXHxAJqj1yGu",
  "key7": "awMvU1WNZzBabvcokohLQnZzkddSx5ceDvzTRo1msQgvu398qCPfif4dK3Bt74KkdmpduhYLbtinNwLxCtqqcHg",
  "key8": "3pSu4wAozLJM7y3f19TTzYYL9N7bu69s58jcSzvpgqPJ3L66rUNowwxGSNbZitpUJxfpoKQv4UvCud43EdZUeeid",
  "key9": "5rGRqxfsM2Z81MrHDhYGQSwT5FRS7Ww5CGfiwe3krYp6xrcxHGXZjjm72hyhikbaPVSAn8bGeNsdZbC8cLGdsYvb",
  "key10": "49oHM2WSU5xkefMi8sMtsuQVvHP6ctCnyC2CVfBHCMCMgi8T61mQmjb47Q33csgkNyezTQ7TPJ1ECRNGtDcqChPr",
  "key11": "JmGjvRwDcg8YfZQYzRaMrdv1HggVhMYwH85BdVHbBxos3xy5Uq7YJs3E9GdGHHUfHNKniV6LATgLusnTWymibS3",
  "key12": "KBu88LwD5Ev9tr5tjhDe3T6ghi2X1K3YnVhAPixZrha7MAiEUUnUgp1wcJr7b7K7SnWBbT2JXADRpndeqztqbT7",
  "key13": "5zGeRGhMq7PiYPjyTD1EpRSiGGj35jASyUsPYQbZd52Jg1dcQx26kdtmFc6SKQ6oSQjFcdjeSFVu39Hasn5FjM55",
  "key14": "5Za3TjB414DpUE5QjQqF1Dua81MBLZvvFfpfnXXBBx1qYq7n3mFJtKkHcXHTbLw31RNkdyaUJuBiJc5BZ5zCDbNW",
  "key15": "2AzCKEsYP86uJZZpMQqqmvMyw3mfXu8PwFh8Q3bPshJ842BQtc1ANLrkLgz3igAWCSnwWmmrkNQasX16pCvvieEb",
  "key16": "5yFmzRGJBxqBY2g33Aq3y6CV6eiWFVHFXHceni9ULdwYTJiay6siFrN5mcxcSxSQZULo4PvNYdQHHUQrA8Qt2ekm",
  "key17": "2yrwiGjhJzByRddyQz7vsf5GFu3y59uxsKNcqvDQtaB8YFpmu1r6es7EETEXi9869hRgMiDtFDYyYBWj3m8qgYAG",
  "key18": "55i9sPjGrKPK6SgbPb4QRYswsKRjQHFRJsu5wAhZkoGM1ycvswYoarsTE7PWsEDgkR5Tukj95Psd1yJhhsw6Tzhc",
  "key19": "4PjhyLYcXJJkDbvgoLESfuvDNwht4TSv5FuZCWGYWSHKfBzgycJaHfFkBuT4bW5o8JpTpWhpTWjPqF4TZZWijkbJ",
  "key20": "25nwPPAxLMrnSpuvuJiypGA9B5VseJTjNrm8FeZTNzi45REx3YBXeYgeaC8Gd4GTmJsaoRf777ZNQ4SHxXXKNi6G",
  "key21": "2fRRHe6HccYRyhDkXsUJr3CxhBqUTYZMfQMKibFskHWKnuwv56eYwJ2F2eTtMp6heRmBj3xsdvpHzMnq1ot4QW4Z",
  "key22": "3nkPzsbuqTr1XrADLQLwnJofCoe8j9eQr7V2H7sraWQhqN1iQbwzEENK1rW2FxgpWVoNZu1mHWofxMPYrz4zNZyn",
  "key23": "27z896Mu8eHGjHUJWWAa1Pc8pnpqH42rFmaGd31xVwP5AeQHHDXR87MMiZ4vy6M7Nqk9YufdeRxZAjMWwuWP5Abt",
  "key24": "3fqoLHhBpCdtEaa85uAHq4t1mTPpNcQa65pgLePknoDRqC6z8ApDxMEXzEWMF2tndFiCod2WkAhjdi7uXSBtqi6Y",
  "key25": "5kqCrBvNzpohYSakdZcK7gZzLau74cH7zUEqP8CC8fa7Ri7ZEYuqZG5z1eyjaXqJshRbG9VCNyGMu4Zb6HM7QTea",
  "key26": "4uMtVaPgjXTvFb2PMJtWbTkj6wNxDAfbiBhvxN2DNiA2sEwegZ76XPhZjuPCvGm5S2QBeb3ZFN1zCzVshaGdcZvd",
  "key27": "3WWo2m9Dk8reN4BGqUUe8ij69iXxptBTnJV7piLdkVrh7w1yNP8fbFzJJoPro9dLHwCBzJHSVCEuHHN6SqNixnvR",
  "key28": "3diGGih1smG6u4xoxh4BWbfQYXn3Fi2SUFTUb1jEBsQj1U2WaPWxZd7hpsPymxnkD1QnPyCFgSaKNwHJ7fxpzUbR",
  "key29": "2PVRxiAb9ou82Vrz2KNHmCFW4PhQ7QY93jCiLdAGEKTPve1NC3DcUSPX9Adw4ARB56SeEwRaQtsJfuaGfwkhvnnr",
  "key30": "2asWMfbiymq5GxVwdWpA1Tm2asH3LNyNGBvK6egEpE9fX9Rp5iEo42Cf76pWdkXWgcfu1znxsvS8mLrGuTCBz1Jc",
  "key31": "4wsNBugavNgLZH83vjvf3k6e8CtAe9QVuA9DXfUjd9q6KpgsSjG4nNBFUKKQgVnEMr9zM9FYBEhZEAKSx7EyQQQG",
  "key32": "5puFq4qR5BxV1axeDcCq6iAvveSThW64kKxiocWvm4rLL5QpCkGhr1TSTrAEDNW5VJ5kL9sRxWohBSLQaF642Uii",
  "key33": "5knBDj8VhMEyzCkauYKyeDaYAmAWfSNZe53QQrZgy453wCMRM1GGYHseZQiKfUxfY17ekzm9aRJfPgDcwj6f62wZ",
  "key34": "2XUbseaYB5sr6bLKT6NXjbYbZEHTifkrLuRa7JHm2QzHb2nEKstKu6qwkmK9LPJVfL8RZcjVPBzvyFfb53JvgQWy",
  "key35": "Y91QXV2X7ZjDbAHjm61amqfesYxaMdHZJdQaVrdZMw7T6TFVohEL7N2rbHGQeRUma4jPvJUzgkPgjGs2tsu5dYC",
  "key36": "3jMpwU4bNAMF4DJH3bXmCH7kenfGY37iFSSmfEDTdh33uf4JGBrKw7naxUcjenMSRWapjgpsLMc1kTEMERgu2PSz",
  "key37": "33yKDMkNJGvH13XxqMPp9MeAHx863mVtYbmPcf7ZjFsX8ZLqZfQWWcSZyCBargsC1sLbva6V2TXvCwrrFuBNM8MK",
  "key38": "2xeczt3jX6VdU51hiSsxDLeieiqpvWn6W4SomtXrfiU2uXcV4JxRcioxbis92wiEWGAgxec78tt6qbactP9hqN7Z",
  "key39": "2sPFLyVTvi3LdwdvjvthFa1vKqtNDg6ys7qGT5McdmHbeTuadZocq6SGoPUJcBhwiHSjxFv8dLryVTUHn2igiss9",
  "key40": "3mU4iNrm8VsrdouDoaM3eoRaZmL98x6xH41ju5bUwVVaCwdKXMDRGh8sJ9wm7dLGAS7GWCQKqFr52BkNAyrHzHMu",
  "key41": "3Jys3BfDBGaNf47Qv7wyvgYU5bfr1zHZpCWf67MVS9ws7HfLFm9wq5MfuqxYCV9QUbSBNgvNMTBJPn6pjdCYj6GH",
  "key42": "3AVHfHCS3BL5V8ojTMj73CCZku6HiAAmCqR2W2RXuwwzZzj6uub8CtENdHJxeveULDz1isxzHfbDJyTsm231pjfq",
  "key43": "xadyMvVQENsqxuVsjv5Qezeub3ScvH6c8BTNbZV1b7TddtbZL5qAWmzarknYoX9FG2FxRZyztAoMLLnbG4gRAkg",
  "key44": "39TReWp33p6TK359Goi44kze7hTzme2YsHx1eDj4Hc85bgxzKXe5sgAWR5TuHcp4Pr37byoAKBpjvUhVS9gcdReW",
  "key45": "4GEDUfZEJA8e6wGYNBo7i5qSL6SZniUFbf1D92dqiGENPu7WuzrfSLrpDMtjr7kL17dnyrYJuPaoKm6Qg8psCj3D",
  "key46": "39VvrdpaHGu25U85YvbF3VfGioG4j6gPyHuB1GbfJVGzq6wTuV1YXHxCCdhy7vQsV7iEV8bWAvaYATbHq9TZdFgc",
  "key47": "49VxUAWw1VQpaGfDV5FUosqwM4VbZQ2mxx3M2BhgonzuHYQrQ8KWUi5S7Hw3USXR9vCgCyQm446eZfckex6RPLXS"
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
