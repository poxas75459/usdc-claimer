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
    "2teJ6iLYt1qGDn3KPDCmfo6Ny7qUyhZt6UUG6DLLriZHFshjS5XRsPSjzFpszDoiFwfhKvgXfVCdSz5MVDeEBfJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGyL22XfgcgmaBCYuJZF1scNjjc1BDsVpD93uy4ujYYWpCQqjX4UjFDM3nw6tZWoDamH7oi2UTQLCPdL4MVQPw",
  "key1": "2hFGSbXfG3JHfE995wR549S6Y4GZ3Evut8NgvmL74W1Ctu2M819SuLtbEqH5jsjHPVQGJU3mtWh33Lv9KVXcB6nT",
  "key2": "2oSeTufJPbM8BZEYGkqdiAstfmXGtktuppWRzk3GN975vkWBCw6oziaQoXKBQTYVhDTDYPoUscptAfbZ5DZ7L4FD",
  "key3": "2QLAp2rXZVkwEeK62LKirfm8PdZQzXNDQdZHJKvmpKggrSv3GevwnBA2HniYZJ4hHihYkEye7nBhw7ZJJW5UZPmS",
  "key4": "36hh1BjAaZtNxomJCHf17aiJuPhdo3W4UKLqhpPS94FJFUJHLLTn4xDRPCAuAWuHtD39S5csVXt1ZFi8aNAUrNUo",
  "key5": "3Ew3jQms64GnXyCGYmzG8EHPsr19SpQi6Ge6ghPsYq3igvR9ioSwJW3GRQezD9tQQvVUkA5TzZQYN4aR2pQjnqKg",
  "key6": "3mvGDPhJvcwRgNQ7zkiPoaEyBPwSJVxdgNVWcW7waBqqZ4Brj5cHwKVns3oWfoX1RE7ksaXD3k5QXEH7f6KXjKf3",
  "key7": "4As3pHdsHCnwpdH36WRVCRrggxokuCxKUw4KaHPbQ3RDr3KFadmx6kvGu5bXuRrzGg8Xd3TGgiaUuj2sSkg5PT6b",
  "key8": "4Qj4QoQrSXrAxF3sgBJZn1JpRC8nvAsk7Qzt8GXoFHnsxi8iGDnCMZYFUTPZWamGhW3FyvFfBTb2Duxuz7cywVg4",
  "key9": "5y5Qgcms7CmDZVoGhYS34DeQBGFB8CjSHfuEEZ1hKXpQoXhNB87yrgkDXNcZrpoGTBio5EG7vYXt92YcfwTVQ1ek",
  "key10": "3SWWNtsPcFGmxhgJg8F9JVZKEtdQi17SwUTmsp5bKKmk2tLH91FViu6uTedX6LeLkV48gBvt4ZEVyirU9AqvNt4P",
  "key11": "4tEznM8HAuMJTLbDt6eFLm2Gq4Q5AB9n3fr1kjuS3R9tNqGfnBovVa6ERr5eUTknGvUUvQawi1oEEWKbZ6PN3kNL",
  "key12": "RiSiaZsKPKhoU5DpfDzdKbuw8ZEDXYh11mYgCW3RimBLYTVjEweVH3UYvTZu7k5122CZWYAUAy3b3nq8a97vfux",
  "key13": "2DLSrb4pXsekRYS44aZMU1quSQHLBZd7FjarTVDnG9EGEQRMiaQwcE58fb7M8SFMZyX45dU8LxDL94Th942eubL8",
  "key14": "1rxc5q9BhjVR6dMvMAjRJRr6UTC3KBKVMuJBzVVCb4WUDkYEgpKGHf9DWQSb9TetsxhehbP9zQ96Cqd4xUSZuxK",
  "key15": "2G623CFRtrtFHLNwoDfmsQ6WjFW6oP2Vv8oCDWV5pRputjZnescGUQS2fHY4p7jUSNJ5CFEJz7fT5PVw2FeuQgMW",
  "key16": "h1hNPwyBi8eyDdBrQ6GRk4mjUaBMpAwzCQLx8Go3tsN6YdpmcDdVNaYttYreoXSwyVnfvRYVY4p8f24B3xk1DDU",
  "key17": "4JFxidCwnRkYsMRxnidcS3NJfTRySkNj6eHNkYnp7ZAQemp8uif5eGRDizH3i35SwoMNmTfiHLbZTjMs3pnF5WsU",
  "key18": "51dpyCmFi3y8y2eRS7EwH28dkzxZuc5hdC3DouoSvc2LuhquXVJN7x8nk1JgKue3KJQd5D7vBnfa5f3j8mG5agn7",
  "key19": "5XG5h4Ryb4w65uRzkmswWT7A78pmz5brHVGVsHsinPSk6f79cSymbQNayA7df4fjVgjkJhkdXWQRed4GNeqYTGS8",
  "key20": "59m84GJtLKWbHk6Uk4ytGZ7mJExs1yaPCGoxe3xc1HpFkMkvjev8P2pnHub6UEnhPezy8H8ZgYUULNwg6Kp7TCJq",
  "key21": "DcdS7QbTnMxWGqknijNGC8xAKrAUQtiHLbxTynArBq1F1Vah98oebAK7atSYPZdbZXamSSQBKFMWM6A36DpbYwT",
  "key22": "2oLHXBpYUk1NekBCcbEBBzijApxmeQ2Sag8VAuJUkHsTSya5ifVP3QsSetVpCVnJ7q2VHAKY8sbYTcLAwWBi8rgJ",
  "key23": "ZfpwYuAR2NpD41hNmPXTA32W7f9MRkui49jzipWqzqb1Az98W39kGZWquu6ZoSVN34ZFBmmxFAqw4qYxVtdHyGx",
  "key24": "2qVRod5zKLpwV7GFFKEsnEjnVbXrpNCteWTDd6PKKFqqqpQ37s6yZR3SrmrBK6AX72pGBgBTdmLQcNtaJedZ6ksG",
  "key25": "4ADeDscxBGqyYcZFh1fwK2zpHduAPvzE7WWq1ANE4kJ1ZHzfgco8JCuKbJZfGngCiLcrSMAisr3bZpsJLajrzuMg",
  "key26": "4pHERhSY4MdNeqRMBFxpuyQQGmmpE86o4WohteHpZDddcpuHJedeQjxCTjyNzuKYiwCV1Yt36SSb3GG9RQaBD7Sj",
  "key27": "4aDsy5aU2Xnuns6bKBuVMm76jkK6rnZK5gEZ6cM3aRGy81RjN7iSZQLFtp9vzxAXxRnErRCEJML9yAxznca7C53r",
  "key28": "4nGivutFWq2DRzkZW5cXAb66hxn7k4SEWj3SicAwDEDXEh1YmmFkS74Ba1tPvqWGUz9ZFSszZAowwgL5SMqk71pR",
  "key29": "3JFkp2RGmQtCxzU6MXtXeAPXeEh2T7E55dQepnprS6gHy14SLj8KBQqwY9nLvH1MM39PcZ1353t7P5pTNohVzHNM",
  "key30": "4jr5ob5gmpZGjPu4C4jfPJJFsSVNH1fPayGbziPhHRBFakziN4o7Q6Dz2fXChetedzhDAdK76SK6dwmxWL1Ba8a7",
  "key31": "4dcEznJidAcCekm6xVaLiCELp5tJ873K3u2VexwL8UpCaMjgxTehRzM7mut9dpQtiFQhtXXSCGKjQ74ZCWkn3vtR",
  "key32": "2KR5ebxnPJarNSbZ65Ae4pRhRWKoMdb6rv9UcSmmuLFzV4t2bDNUpqighFmzgjb41a4aezegziwa5Zx1PKBRhWkc",
  "key33": "2if9SDKjTrvw9UUur3nSuhdGb4pPqkhF1VnX5JGVG35yLGWoe9fpgE9m93F9CatLEPBhJXTG8jyMs75eC8BoaKe4",
  "key34": "5KN6MbT8En7Wmyjm5AoZSgJYFybEMpqRnEk8pM9mLM7m5bnaNtV9hVJ6TidUFDZDrtJbVupmML7zawpsiaFB25iN",
  "key35": "jHNUdQ67zic1ChqFYZ7ccyrQaaq8h5B4hmAEmhWfrGhtwMxoVtTqkwhdyVgQiU3P4EvacGFy2xwZyNWXTZ2vCC4",
  "key36": "BcgUxs62RNbTpKrhP98xwFnbBNNQ3WWTDBjHfjxN8f1nSJZWADBEC3mAmkGzThomtztbGhNrq7FkBsGsrT18HJe",
  "key37": "5Teu8L93BJgA6oGvwhqrhR2Hgt2sJPvkQUzAkqj5saQy5v7cm6BZdZj6Ei5ttutq5QaqgA3vkMXj7j9N2U1wj8WV",
  "key38": "5YQrpxte8pMzaAo9sbycEwVJ8YcKsbhpVwEquFbyKRXJyM8YMWdWqXmPzGwEyv8cYwdzmAeoSNCdSoZN699xn2bk",
  "key39": "4ZtWcBZAx1dQsQx3xVNfiLAUKrj76FEGRJHH1XeGz11hs7Pymc9d7chcZAKZKSZFepBRsjh7dt37JEvwG7igbKnX",
  "key40": "51md7aAQUFrv5AH1DtB6fVemq9g95mztX6wjZjbnrNj26FdeXfDbNJqMTQAuYU6gwx7NBCSREcebvovVqU1wNdJd",
  "key41": "3CBbPp8mB43Htd6KXDJK4WD8HBGeQb6uacsvB56tT779MJ7bJDHVEJLAW6ZtaHX4dScpw1asv6oA8hp8uxH4t9xF",
  "key42": "3PPMNtohk9kn7aCjetZ692z4FtWAi54feTBEvien9hr67kUgRdPaBxcfbXkw6jz1geGayd1Ag8HRefpwWcuXpFCE",
  "key43": "JgYBVoWxfv42bhrTSPT3Qo4je2CpdKUqrfD8qrGWd5v9mTCSn27Jzk9cphcAL5pVJMp3oUykBQFmded8FD1g4Kc",
  "key44": "2LRxQpNc8wj2Z3vhujMQGEDjBzFZe7QWHYj3AL4Anq3y29g3BvizE8LfoYbtKhExQAQ2GmCZ6L5t35VojidLgaRf",
  "key45": "2aB7us5suuj7PWTcDV2uxkKswrCMz9LkNXV2sMNxXHRuyArPZ3DWdS7nNR7DKVa31zL61MMN7u2t6RLLwX7zoUuC",
  "key46": "4YjQMzr3Rt6HczRsJLecNreebS2QbzHGNML9Q6VppBDLoNPRWC32scdrwAecZQb2XJ4vsZEJU5jz1QJ861oJBmes",
  "key47": "2yURv8bFM4UeFkoYCoHNzzibq7SczjWTXC2Z3rjEW55c2hVAkumGtuB39v9EuvZwjfdoUDe7vXzGHKqbKcNc1CaJ",
  "key48": "4NyrTKPdbQsqU6Lfniza3e4epGXBdsJtghzhg5Qh3nfzX4dzfVKHfFTjnts9zDo1zXs3VENZTKnuUjZVBwn6s9CK",
  "key49": "3bVhv71XmKv4VVeWxrwp4pAJEUrc1nbCTyZXgET3SEcRzuh3HGHccNo3CMKGcxZFfb4asgLwNw12oohAJhLeDDqX"
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
