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
    "2atK8N2dXRdt8VbGQBvS4ZJBc8nWRUEDLEWpRUr2RZajMind31yiZJBjFwZc2gAhRiC9DwxwiETHxtDvG5dcQtjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHw6CFJunsdmWHzf33PXGNxurqiJC95N5CpzLME8mjiUT9o3ixhgR6BsBo2gKoYnaDnQCxiFLjDjPh7cp5n7Rcu",
  "key1": "5PmMPpDSu1eTxKaTPYHLTAuG31ji8r8LmRhZVDmwsb2WACCbxTSV5s8U2yCYCZC9dMSGMPdy9fEeyKfmQCd1cNEe",
  "key2": "f11Vzer9RiwHJ4HwvQwK2fvyo3Bz1FGShPvQFCkxVZPTr1KuacntScDczjBUSibNVotP89Ufc9pyFceEY3CJxz7",
  "key3": "4VF1CDG36NNP26rxhknJnvxb5ARduDuaz4UfFsezLhcsJ6arv98K3ziMu1ycJpweRQTm22PqmU6fPZ4c6WMA272S",
  "key4": "434qPbTK8VFUN5bqLrCZ9c67pQrvbGnZBYLqaArHiDYPznErGoD3sjZr2QPaa5AjXBJQQyyUg7ZDgtgji9pjZJDy",
  "key5": "4iEkGVS3ev7ieyQP7hUheWnsT3FwrHUK6seafzG3Yme3t9mzYyqmgj8uzqdwdBcVuQ4KV6sRs1iVpSbn85cYmvQX",
  "key6": "2mYCSn1pAquZ1KP1xTZ2gUwGHJkkimYejbMJruZW6EbQhC9cvhU7DwJxCCXAby32jBjtXwk5NuugbRF8r9SSZRAE",
  "key7": "egejFg51YJNkEWHB6cmxRv87E1quzo7BPV2BEaY54uGsr7LNnW9KECWooKeofKzj8FfW3hxMFRV2hAjKqxPSwNe",
  "key8": "2dKgCJijFrsXgCFxgAerKxKTx1wYwwesG6fMdnZoFwsTC3JY9Ryg5GMWQhFwkU2CURP6pL9AdVf84cv5pTZtMkZy",
  "key9": "5ciDP8otUvsPLZWwEy4Cb5MePkQ29M8TEFRUp5BxB1S8Ws56TpazZH16ZtTfTQWYUaTr1JUDhd4SBF4JRpJUWcLk",
  "key10": "4Q2DY3WfLwg184cJKkGDBkxZ9zzkP4ErWZNVdqcxrUTNpZVzZxWUfpncZAce8vifFUGuZhHExQ4mh8cmtgmjwEKM",
  "key11": "4F812HWaZYenT4FnemqQodJAXoBezY4FF17jWszMhCxz3s8Joa9RFG4w14GD1uABghAUndYT7iuUADgpKAmhoimG",
  "key12": "4isDDS2MBA5wNQ4kEhr48Lw92FpqVScw2NhcigkA4aVqTEUXXzf4FYmdxmomQdTpNzvRxSQbYZ6hXGaAqK85qo6R",
  "key13": "4cvrrXA9oSewnox6MNW2jUptqrxmT3vQ2koDULqnHsZbSP1DpWdiGEu93HVvQqmrNAd8gCZj4iWFbHD7oS5ejy1B",
  "key14": "5g6EBgDNJQ1c3JBgnrThanzken1265tPfoBFzsrGAnKpWEoHoB3nVYmuQ8eB3MTMkNKDspZ3CwcEwop241PrAe5M",
  "key15": "22YXcGCP2xP4ECjFf7rjfAS71vQdKbwN2so3Vs8PhJJXjBjFFXvKsdyvjJVUgXfKjADCogHgmG8uTUtK1hVciopr",
  "key16": "3vbH1Ww1WfEs8wdvzfTdCeEJgRs1hh7UhHxrxwy7qw8YAEiDeTi3cJmCsqe2PEQef42Z4y8pZyJ1QpjHdAJonHws",
  "key17": "S9aKBwbWdTcgP3UfBVbCkhJ1M9cUez6nSGtmTYg2YvpYibBVWkGUvtopMpabQFJd49yUM277CvxscyVxsuq8GuS",
  "key18": "5jf5JRSovvmAQCkqqjJsKne1S2ACL1d1JxwDGk7rqKCbMdCUYXkvKUGbth5Z5fqP9L9dW4H6mNRkQsoAATWinCWV",
  "key19": "4dF8ay8A1CB13aUg2pkSSEYqqJzndcgCLxhVm3mF3cpZcY9TJpoXYyYHgg5ikCPDvqPoB8udqpqitWR6eDkJJ9Qz",
  "key20": "LKeC5wBaJJtAMz55aDwxDogAvtrL3vJSR78V2Xwknou6x9WFsoXwTPoAo4pYYxWmSbaLqQVic4DFG2bzfmbaLMD",
  "key21": "3FXsQHuiakcNAa5EjxDGQ9BpA537MdUZ1ZUJEvX6RvsJD4yTKJpC2WPSZre6J3DqusGRQH6qD9Q1pqnj2Q8sDBxH",
  "key22": "5yx6ottDvuBofvSDAkRhH8nvGjX5z7RYCMMEgCR4MMTzpSt98tucg4gzQ6M6gWaXSRdE7kQXZjPa4XB5LriiNJAq",
  "key23": "2Vb3zu5bKaPyfnRdhZkY8KVDCrUZUadSYgEiAb7Zsc96He4vaoH4HVbnoyAG8m9Z15i8UdhvvB5P3zet4Zq1p4Qx",
  "key24": "5KA5csTnaK49oX7YHQpTtGsGmGgYLnjLkk6FA8Mpii2wuhjjGkVYnJkhtZuauBSe6rVj7XGTjEhtWuMPMoBETzdY",
  "key25": "S8Wt6qYKyJtBZ8F4sHG5DfmTB5PZab4KRTa4qNddKXFuUxufanMVHYRQvuha2mKgxA6CbHmbhNE5oup6cdRSzGq",
  "key26": "2oWNre2rG6CakGuAGVXozwp7TXHeJP5xnzjZFjnTR9zpZCzJ2m7zzcD77Kt3SKsyX6xWtqE2vYNkSJNrvRncWjQD",
  "key27": "4HAAyG8vfbXpaiMnw1HaE26q8AWBjvEe719QAMQbZNkE2eb5e6BUhtMm6WcjUS4Fafo3wFiY9NmeL4zNqk2MXSez",
  "key28": "CG8hnJK25eDyEhLpduuBe84Ab63rdyg4DSyPZ5zUxhZFHBc7FZf8JPVevpUjLPXdfm7YbCqrha1FzLwf27x82bm",
  "key29": "DPuUUwNMAWzdmjKUgY6EDYrkKGzcjDs3ia1e7chxXaGRckaAdiwjwn2shk9XkHYAhC38uoejm8Md1eUJvPhQiuF",
  "key30": "Mvm1fXGn5AQX8oV2uCbarouMmy6NDPMan2Kd4gbbCv13ZpaPR5LhTAEdXsDj12VuGSFjFLZdc3Zezu5yLWrDuB4",
  "key31": "2su5rJSxAqWpXjXaNmgE34PxrhuXT5fvsyVCykD2TTyzrntjsE3xKb57SazVBjffR7YTVeEz4XiMxguKXtxNXjL5",
  "key32": "4Sx7FkEDp2BXrgQth5iCy4pw8iMKtcuj29nGomvgZsaVidqtPuSi1gFNBF7YDxDZsqQgeymxh9HG7EMWJ3rCipZD",
  "key33": "gButbUCQTHx8E87qU5EnGwpVaVsx8wW5XhyB42yTmfwx6AByz5nCDijvmouBFwD8b1g4LMTtYdP4dTLJxbt5rmh",
  "key34": "4g8aNMoyv3wSCr9ZSqDJs2mUEp7DU8MKfLBdywaGe4Hp1kex94SjpbPWWMYb9TkbJgxZu3YpkACXZAU9iv8ucTip",
  "key35": "5dPw7ECoBwya9gF56fWvmAaDJ2sAsyy1U8dPPJz4RoSKKK2WKEtEq3epvGxzWVLR56EBzJQgqLwqpCXfd6FxDPkG",
  "key36": "5sdE4SGjZaegdzSs5Z3vkZcZyNiwJBpVBZdnfxSviSVbv67nBhkssozmJf8f12MzTNL66gyuC7KK7QE1AC3q5HH9",
  "key37": "yayELDV9zXvzi51Ei6rodgULvNJv8eJKPfgkfU7q3pquejfPzcN2fi7LxxCZowozu2T4h5PN8gmD3NsLqFEwxrX",
  "key38": "4d7UPp2obYsjEFEyto46MP8ZAkadX5A5nVCejPgMhhapCbLY2BdZcxxaYmBDQ6YdMy2TseRAedwZqeRye6ZRHt9Y",
  "key39": "2rN4DesiLzNLrepcFFHJa6Dhvv7U3vuQrG3rFowsVUomYuvgZW7JtZD9Jx5pZw9TFFSY1c6UHV3oy3WhFTKxW24X",
  "key40": "ugaAeA9iuxKNY47yVYK6ygbnx5XStcZnCJvZYZfVbqGDfoVhnW7ri7DLav3XGyqiaLD7kSe99Gcqrdb9n3fPvw9",
  "key41": "5t7BPi5WRokd3kRsxJK3U6KUNmJiMjHHHA29m4W7moLajj9RFoyVvchWEUgNSasWUz2uEzmMycDv1E9fNtT3Z9wy"
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
