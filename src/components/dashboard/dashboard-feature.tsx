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
    "23VPK4rBmCKPxP3i7qNvdS3x1txmscr73AF52TQHsiPoQdqUx5UfqQy6Q8U72q2PNBxP1unVWCCoFNux7kPjZMpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBkHAgd5xnTTiMn1wcbx4xjS46jXJyXRLHpNfE6NsRWm71yXHUR68kdPxzPifwF5SQB6GzPGeyG6sfhdtmcu2Q2",
  "key1": "3sZdZDaffunWqyxhGbht8DMMEKgWSwED85YQut5WJstUmMQ3nNauYD1JEiDUfBkryLycHiuGkpJVcyLM9rF75Ckh",
  "key2": "2Y1DNbVyTPpVJvHmsrr77ttCno8oXrNr6Cy1JEFJoSeC55vy91twQsdGe8sTCXpRR549FQjpmQ8E3N3xJ6qAaGyC",
  "key3": "3dUpbNG6mmn2LfshxzZpRb3hdKUvYmCguzXvXNDfUPbwqmDGxwNEHsTkDDDhCqgxQ9EWfEEccch6W2TkfM2jNmy7",
  "key4": "5ctGAhYmGbsy2ieLefXDsJh7UF2jkg65kVM8mhbVAXzzNGcDDR8v2m1Fz3D3ZhejyUQcvfMLJsatHcMQQFXqMwGL",
  "key5": "4U4Q7awhrfTmnD3h6dxqx9HN8rzPNm7HT6heQRsmZMZhKG2uYqvgVDkGT7pKAALjbKes7egJ8omGdP8cifFX7MuE",
  "key6": "4JZa4EEdxt3aXyV9p8QyLH9fMFGBjevxcqf4SvfG9UKC8Lqo6oj4ggLJaRE2Yut6fpPGSre3sodHavQTUT1fdjXw",
  "key7": "5StAvGd6rz3y7qxzfp2iAPTGBB1kfHXoZChY5a4WzCTmUo2oSUtEEdCHk5ykF5CLXLV8ZmnnGuS4m5QdmaoMi5tg",
  "key8": "5Lgx3mUY9weTWzjm64X2ink848rDSrrKxY5B1APGFyh7pgF1bUM2odf4oGr6Dhq81GYE1hFWnqtxdvYx2H3rgxsf",
  "key9": "2YWdvZRfN2QWftxeuNuw82Yi3Q615mGsRjTHK2BT9Mg8GYeEsrSGrYUkmRrhcidtxbY9EWXWsoDrJQwSo8VvmrAE",
  "key10": "3yzEQTD9u49dk2aRKKJ5StPxHGDCPJMsqShU6Xf5KSAfmd6iXzQcYHDE4Sre9o7yEWUmhqUjFZvCv8nooJS7uLoN",
  "key11": "3oQSdm3ZddjheNSonFYnwWdkHDs97ejQ5BERRiBxwYNjHKYrrE8R2et5ekpFDxX9BnJMwAJBQxzi6Mbxfkw4uu2a",
  "key12": "58pUpiUYxKRtKNGK7V4dMcVJ85eL3FPpBPdFnEVc6snqT6h1BPNqwEp6Drf63sQsDDCxrZkEpPWGygpMK4XM9nCd",
  "key13": "3J9w1VQtF7WsuyZ33oTzMd4jpyqX1Akg7xBeAbehEuJ7JQyVJsxoWeTasVCA5qgiCKUZ1M33r2mRiLssesvszdMn",
  "key14": "21DTvcgDhsue9Gg4tbHnP1LAYPCMHKU6wyKKxjATRd4qgNPYVrtLpJmQMb8KaarGyJB2Fi5iQ8CNzVnJjX2f1wqK",
  "key15": "2ksYkCvEqk83xFg7BPzMcjx4A5SxwGD7SeRnPNAis2a1Vcb1k3YEGjoPtgrMmNpNhbJrnJc8HsQprTntZzkE4Bsx",
  "key16": "5pVY79YBopDYsnaz1HU4BTybJ1g3VBPZ4wzjV2g6WzP91XfFEgNt9FKetA5XDtC7G2MkdGrVWEAr7ihN6oE8io6v",
  "key17": "4hYd5DFZGYBs5CC1ALhzCKWZje5CMbrQ341C6hrvQVYk3Vw4PFZZ6cz61FMUK1yy4eX5v7h3Qq4EadxrRoV3zZU2",
  "key18": "4vQXPbM3AdY1W96hRmD1CSAZBmSm1xhNactVLDsUBbjBJW8SJy6jPhbhR6RhEm3veuX3JLh9uZvKu5YTCKGGTGep",
  "key19": "4w5tQzvkEzLrQ9tRWRqYicrDqgGXPjKUYc33BrwL5Jn9oggWXJ45hNL6mDC8ESYzGxr2DjgK7szRZMtYJPWGP1Hd",
  "key20": "57d73ZZdntpthBKXHABxocHDHAaWQowckdUUH3XhK5q8kE7s4f9VNVPRSyE2nhyXH3xTqJjA6Dn5UeujotbFrAjf",
  "key21": "56CpM8c1UQopWQaTydjZzbsLCbVSFLyjw6TNiR2mQ8593CDEEKPoNTs2cjLhUMGSNK2LFCdUo6hbzp9uW5w7hT8C",
  "key22": "2AnxDoctTjLj8HnbNkLPhFzRfo8qeBfnF9BebLW2j1HyPYfX4HweNBg138dXeyDYTFsQrGgodWH32wWjGQbREnxS",
  "key23": "5xfC9w4hfp7jNvSKeYW3p9QjPa9YXSe9k7B7maH8nkbVLKaheFLRtrZHuru7AkZfjBhDacsbGET6TwfZhKqaQXy3",
  "key24": "4D9gy3FBydUT3ZLXtmS8Ae836244BJiVPhcwW3wEaCnrUTo5my4aoMrALz79b5SNefFowJowL7MeDoRdvhkFUGc7",
  "key25": "4gv3asWXES6uYdWFgrCcJFTKnAhaRad7eEhnFhM1kkUFD9RmQgxAsatruh5ZHTd7DMnjTrWLVAMifF8xQyUr3XH6",
  "key26": "4EJgWvaPXr6o5r7hDPpS8jaH22cj9LdCrQcUiEJFnXT1zrXftj2kzQNVgWR94om9cakJmDEEfUG443mkjoae2FmD",
  "key27": "25hHg1e2hYni5ZpVQfxhAkr7nknw7HPvhFuGRbXhoQ6AUUzQngABWn5UWyyPk7tHQAhjNcNf8qNSJTx5f8bgJZpM",
  "key28": "1d2iicZoze36FT7DAamHjtLDJ45FmU8H8jAFQCCDEqUmwpFqNobe5graZ4BEvMxTo7wBjEHBoGZMRmq1uhKr6ni",
  "key29": "42ScS9BcLaYm44vPHWg2TEGDq1YdQFaW4ncajZVDhZZCzM8BU91AL2zah8JDSni5sQAu2Lgk4rhWhHpYdxbD1qhu",
  "key30": "5VsXFgvXpuv5qBZzENQWMBP11je9Eh3ZrUzXM6vH8SJxBE7ztjiqSYxkmaVbVe9dy9vbBLz4aH1TNYNs9HJhJfzn",
  "key31": "4cTRVKL6dJ5e6caarauN5vp8ZmSrKPuxwuu6AD477pthqQHRq59s9BxyamoJSnE2Txau3K1iNTLLVaUns7mppW2C",
  "key32": "5bfiEWmWgW5ehh2uJNPm3KJUGQ16vx15TrNnyUgpts1S9hDwQKaPSEn3gpV8xf64xbtAJBsXmHcCZHRUW5fVF2Hs",
  "key33": "4ocoV1xbamYkk5Bhjet18RKwSNirVtix5BP4LoutCJzUKpsGxwPbS3whWM6QVBdXBqfHkmBwgJQArjK98V5MMT5P",
  "key34": "uo1e9LxH3bmZeibQMiijerdMjusDqn2TSRRor9LprFuc6SPUz4rFcbR18Z5KaJsYcvsBVxJDo4jMtUemsRrM6Vu",
  "key35": "3qs69KK7RaL3VPoQMqm7sjv19t8BRjVesC6oxuTf6RJJfvXXW3uwuVmsFUvwp5B7FgwVejU8QvMv6psaUN4xa5i",
  "key36": "4ohVEHYkeHKqHKcqaQJgVSeXaopGZvWiRwKFaxVdwh8qANhpcEKVfPuKtZjo2GDvZ2aCJtFgdygZDHTgXk738m2U",
  "key37": "5geG5BQtaAYY1uJFHfZmFdHrFnVwTRMeqtuKsY4DMCmcByTNymMR6RJct1n7d5pgTPNPULRezd9oDTv6xsXp3ygp",
  "key38": "gvrrB92FHWgjwMfvU2KZ5kDE7dQ2EpQvzAKb2dRNF6SpLxzR63KLbvsZRZamXN3UWhD3MsMhyqA7CNxKxMSg7Sg",
  "key39": "4JS11V1WodxpuQ1T6be8xDxqaxpPK3RrJghHzbB8xKS6sSvrsgjFU63GG9xJg6AKJfqzmQ2TKCL55d1a3kUJH2uU",
  "key40": "2q1DsShpPEEeh2ucS6xf5zzmz3AfURpsjfLVC6AK753zbVChvt3YeXgv85ZFdNsqbMjBLSAL3u3tmWa8TW7Ygonv",
  "key41": "3kvhSN1WHvPLNQWDKBMun24YuwKc6QFWncq9eZo5dmDH4WhgRxFKt944po4X7MhV67K2rtGNPZ7Fk6uzEFgvjiah",
  "key42": "5YTqKMzGu8uhi6M9b9uG8XRw2BfTQmL6s2eu7dLjaVDxKEjt5w1AChSTwexw3DTwAyTvNFeAtibnZVaLJUjonhAn",
  "key43": "5cUEovaYQoPovyqw6kGvDjX7pgCjhfdQ4PUHvxMkY9pB7swshP2Vkm7LiFD24RPKFMfH8zk5xNqBJYaqUAnCkoUq",
  "key44": "3vNxSyRup35DaATqRLDaz3edVLX6UGbNrwPMZws4gqqpyUoe1tqrduRztdWoj4MdbaXAKzpx3W4YdtxsgTsW7hHo",
  "key45": "2EyRzoFcWBbADtAWVwiGP4JDmT3AMHRKqNeR4n5vfBNBA6JtkqyBU4pbeSQR4Ga6qg1oFWumVq8SMJ9FkKtPmokw",
  "key46": "4grpt7wR3hKz2vvM3eYD2P4hAtAPMGkZQekntmD4a4cbJvxnZ61aqyfutwRrHar6FUtWWw5o1Aseqiw3SqekGXjx"
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
