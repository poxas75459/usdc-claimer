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
    "5inmCU6tYN3NH7nMeN5SF2dqu4MrYX1NQStuSLiuGUrDE6fnyeKPPKH7jgiVdtdjdq7GdGQn49quQ1YRSGC1N7KT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juLUrixN1MgaVnHBWhQ2DhJsbvqBfyHgHWjmxQfGZSVyuR5u1iwLBwyfdGpFpBY5B82BqvGdhoVLj8VeNAwKWbX",
  "key1": "4j5ziwZXD1gyETZ95anUubEVUbsyB2QzppA1yLbUz4DZZ9FK2FZzLy96BZfaYBHNqKCswa2YFYdGgbWmSoN9x7pF",
  "key2": "5xwy1a6AVZaFcLH6auirC9dayU7gfbdumzNwHYKT52ubGKwHhKkby9pZ5AMm5PmeZjv55272CgS7QYezQzTUKhS3",
  "key3": "2HteJpm8t4kAY8KdeUwnt1fsgEhhpT2w7fBy7yypB1BX3e1FB3W3XD29nZBBDrhyiPhn8Bvg9dUQMjco7Kj21yDX",
  "key4": "25JCUvp2nZfPSeQp2r5qxnbwxjwrvnimwi82Z8FsnMDvTJMZquqDJtgUdLcfev8zGJo6QYmGrM2zU9mZh6xoX2Gb",
  "key5": "2o3SnBVmHPtymp2K1KvsWQZ19wwkVnj6Yg9FMxLqmXCyyTxNCHRv81KVwVuTALr9AJCkhCmCKDuTvqSNdvSzYBjR",
  "key6": "2V26Mbmktb5VKXJHeBVosXM1znyFhn3JeeZbUXJCqKpAARRCoK8tgNB7mVMKqerMYHj23ddVzQihL4ErZqaLX87R",
  "key7": "5VcSBTNyHexDxfu39yDLhRGQ3evg2ynMb7PdkYAp13mWuw1wiHo49GuXe8dCXgp4LCCGsVAgsSnzJdzYhpgGVid5",
  "key8": "5k6uo2xNuLyDcNpYNiu2Ltd533y58Vd185VneSHEaPyo3TpdaxvGA2WjrL7SYSAwFoM4Lk1tcLJkzeZ15M95qjWR",
  "key9": "4Kmy1QQSxwdNhJrUASszXaFg4Pseok5mdvRafjUrqBNjTziYa5qPZynJAWCps37pBXFBbqPiWTMahCXgjTyNh9Tg",
  "key10": "34Me2nHVC318oijbx7ecSJ9qjK33rqNA32aXe9Bj36Pdjswrt3Eu3NZ7rU5S7tq9BTyVM2fU6khb7YtnmLErZSps",
  "key11": "5SQS3yqVxw5N92WJPoh7gV9Bwcy1Hw4z7MXbUf8mMTMcdTQ65udGjGdQAVuycgi1R5yhav7iAACrJpTiQEB1WEqq",
  "key12": "2m9EXfmovaxVqZRtjcd56zVsKTfnp7qGhDFnF37zLmreBiSC7Z69uXCxeV1cfSu1UTuJgun6VcMMhJeFBvm7NSFM",
  "key13": "iyJ178Tm1D92xNWop6PmhSZ7tzeWvFPeFuGRwACqaUYpsY7hcKKfc1ddKEBHP1ZtRTKa9wQxfx3uq9JrmngtHmR",
  "key14": "61JMx6hybFfdRR9PAuggK9uefFn2xb3iC7soT5LVj4Ln9d3vAvQUUuvCQPxikLyTtLpZurHRnvtefuXvPgppBhDn",
  "key15": "2zBPEikQkkrMHLt8rJi1ajRHU2dAi4NE6CjVop2rx2N3RukqpKhTBNdodeW91oc5VH7JhtcgFPoUtC37X5HGpv1A",
  "key16": "3cMgHFctvF16Egv9XoibCjc5hq9WGwGapUVyYFrTWzCkLKSuo11HaZkaoiFkQ7LcoCfZfN8ffpTgpsKeMC1yxv6r",
  "key17": "5sqTjvXi3JZj4Dcp6s8hYgHev6TqLXwiMdMQa8PDNjB1RdkZZz2TCxLcqsSsMCRNrzZX2E2CLoQ9YWMqnCLetnGt",
  "key18": "246fzjgBViVXrF1WDj4wRzSn685bNW67kttZFM4VCMxPCuDXZofhWVHMDVJsuto313VyN1Lj3umMMPyXyscVMTBt",
  "key19": "5TEeF6z6VYgee2c2UohXXaDX2VS8goyiBHYxN6E1TRvYfcUULixqBH1kptmYQw8LfPV9E7MkeVqUn4k2jnYqhsjv",
  "key20": "22zBjK91rkR4necgjL4DVguvsdqH4GTJU7fHRCfwWRpBj5YHmCn9cN7LPLYYtZgyr4W2BAUzy7TPctSTe4xCVz5E",
  "key21": "5rtsLT3RZfPKBA8jq9xyTiLfDTEc8xfb3jAX28d1qd6qnb1Zpj9yGrHiaMJXAvgamBB4rZ5VppEtg1eF3fx9hZvp",
  "key22": "5jt17xouhEHgT3ecTyr75yk2vjuuKq4dkhqAaRBzNrfbkozm6nhQ8DEQwEAu3eF2tJPvaKEKa4WH2pyzymALHRkv",
  "key23": "3hBxz5XB12auA2FYGfgZx4AkQW6Ju59G9DuZeT6TW7SfnRqf8BgGRzWjShUkWe6Bi31cmDgkT1rU1L8kVTtGQnTu",
  "key24": "3mujc8LgdyrSn1NqcrPR79jAUawt8thGU1ujFWjRFEJrgaWZJF185EJbFAKFqYLVkh4X14QVCHxhHn8RJv5ohCHx",
  "key25": "4RA3RevygnbYn9ehwQoB9nxbJ1NjYdD7zLXYhK1GjqUNfz3ijfjMezhp43yAkLFjm2Tz4PSidVT5ypchfWdjUMao",
  "key26": "318iZh7fRKb3m6ktiAkQVXZ8xhP8XgcHioHr4m1LsqTrRWZm7Ks8Aqu5qXSPLTZMuQMb7huzSRzumSBFuKVnnXZy",
  "key27": "2FtFNTRpncRzbzWnDRn7tKZtUmCobAT4h4qhN2DC7G95b32CfoRXjUx7SnRELhcoiRuHnaxaMfoCdRPNKkM1kuSB",
  "key28": "kFUkQ596bTJ5YKuyr4Ka9mWG2Z8cA7zygK3wgHyodkK9pnwxGrcuqh4bcTuzUvuj4tQ3KA6MqKqpofi7djff66p",
  "key29": "YMyCvtszcTRnPfdo48ttt7LWjdyzqZaDpHmmrGXBtRCt24Ez876c5xAirkaoAVwhXyBtLroiVWjETze5k8HbNtF",
  "key30": "4cL4dHwiSxkVaT6UgfLHSoXSu3WJHMWuUbDn17Ez9T1X2CFdPUAGZNmesByR9NycFXJv2WC2649W6XPviWf5k7Js",
  "key31": "qFoy9Fek5VqHwLM3sRYcJZZveR8dyNr1GmLvLq3BjPToq5XAbWZLDXtYLHWLprziFHXWnP6pYHfeHZhinzLBrK2",
  "key32": "5TTodnB6eraF5U3w2h7V73tqUaCHJ9Ybpnoy73MGyc3kmXAMFyCnyGupDJHGm8CXos47XQRQ4hqMuum7sRPmoPeB",
  "key33": "3c6VYsX6ESfuSoZqY515Nun4ZUk4yUQS8A8BeicNEgjqR8kswED3yX7R2fGDgXae1gMZiPwC9xwhaasDsFBTSLox",
  "key34": "3wRiB1snaJRAUzV3hmAQJU5nnNbmnms38hXQhfm8FTdY2WthJqedmPqfiuQAcuHgf4Py6dua7cB7Hw1JDJERNyrS"
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
