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
    "3ytvcvUp4v3xv5vR2cEBCt4TwBjdqg5frddEF2FUJm8EB9dacDvhbZjL9bYUs3irwLhUiwUyYcceVBuAMgJt7sj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5xYxwLRpgW2TMMhYEbN3Rae8WS8hFcMBoVSHLtu9CuKKTAu7JZ6kiarTTza8EPsKATmw1mxPQjSkDoQQ9KQWgZ",
  "key1": "2RxN9bBzKE1gQpzxsuH8SAtkEuMqjaiv98xu1nZvey3tZAJQGutryL8Dca4R9woPrNynVuXYMX7hmGCD4JH8KdVb",
  "key2": "2gTCpCHCfZJiDGC3MnaJHDmR9WEuw7j8dtKWZKKBT5b2EB2io1jAZ95E1JEwu5qXt85S7tgdkQf3vimLZgsaNJm9",
  "key3": "wc42ar9Mb64VVQJFBLZRCnppustrajgTXj5n4CdU1M8wR9fofYWhkmgD6xSiBut18hvC34hsobhBDe55xbv4AfC",
  "key4": "5CXWcXuspizivjaAha1aW9XHEhBTJ7f1y3Uskk3iwMgr7mJMqqxoDFLHr9tNmBonipxWRh5DCAgkLbjqHPbVz696",
  "key5": "4R1Aw7GBRPMyvWZDdvYnJABpTREfGkdCf4nAdfJd6CRKmnmZNCQs9vNvY39bf2kyfPhUuZT8xbSL4dMKEpctSgXD",
  "key6": "4Mf39XJYfkAAZMPZTLJy8F9SLJoNYbf5ohrR3ZL1dgdxy5vuBVaA7gZZ19YgE2bJiMtsBKtaSxfsnAQunBftkiBs",
  "key7": "4Vn9Swrd6K6rXqGfvUZmFvRkFXJPzRGBxwJpCkyxk5dFqFwJfu46xBdCtH4eriWXYmtjgRYPHjhRDWQ4zeat1rG5",
  "key8": "56ZMWSqwSwznKfgTgPvMPEsz3xmMtDPN97tdStvubAK8aGCoyFumD6hW2quvFLmvxiKFUc2NqmJsqcajrjmNWLf4",
  "key9": "5UtgF72Uaod6u9VTweHxccdDn6GZ7iJSJbcfzUk2CPpmNRnrFuXtSAKK6vtpSbFY9cHPLa3HWJDopdQo437bAcWW",
  "key10": "5QxebN7KjxM1nTcVteuoburRHvdt7bJJGAQ4uF5Afs5ZmbE98gNTHEg7AinT5yam88t14SeDzzSfH3vo2paBx2rm",
  "key11": "66JuBZwVo4yjfkQQGgmLbuATjD1ppAU3p11PQt3BJBTwuD1joTLeutmB568u6gwxxSnPDNrZCVpU4j6n1iQ8g5K7",
  "key12": "54RtRWrico6obCeXPCpvjGTYAu8XczVZTdELBy15bi9MNBH33Ho4mW8PMvxnsH8iqyVyDoJEJqZEovcGxg32YGEt",
  "key13": "5P6FYkDJCDWnYZdC2w3K6SA8kgckisXes2pTXb1isXGQmkKur3QGHsWJirGt4NMxvrZfeL35DAwCAfeq7airysRW",
  "key14": "5dYUvJXDEtRb5EQgKu7weikSZPCPVjUqnrzMeGSR35H81LfNhN12WjFiQRCpVrEpmSsCAbWeGuE3a5QRCxPTTPHB",
  "key15": "5qUzkDGX4BWc9KQ3eyNfTX6UozyeXPSWvMWap9pshWmRhXxBtFAvm5dHywcrCJ2eSxrSZrAhxAcuJdSZqtUUR7o6",
  "key16": "3ZdBkHqiSek9qAkob69F7gzLQGJ7oA7X99yigHUx1n4P4jtcAFeNqv5hqFCggQe3aHhEFTteUqvpo7yiKBYx9mT8",
  "key17": "9RTnMxk38zqoj9xbmWws7M87zdkegqcW2b9ziTUZUhhNtJMJwcFz7uRK2XgxcwaUhg7hsSgrncvWT4jrPEov77i",
  "key18": "2g2GimHuurhg1qx4FsAQtdXkbQKFGnu59LzEA3aD39WXULEtVzf8Q8D1cfcCD7dxUW3ebA7ycSZsRdj2Kfg1ALqo",
  "key19": "5WPoLahQAKeZs8SLuHQki7qb32CNamwVqo7X2zzzkbBTd9f7pPSsSvV6ebwiZuD6zdGMYbmP43jFPykxjWx9xcYk",
  "key20": "3LYmiVzYsxxDSZyyC3jmPU1NwEtxU3xpf7R3Jm94QL5mP6CXvdQGxU8cPrUAEvKgfPs2TSBwB9PvXogpvjoaGVL6",
  "key21": "3LVTfa9hFJkMiPkStqXBMHswz8FQqkcv6U6wA264BAQdstGeBpsEeA92iLgcFydztG1vZ8ZsKcKQSCaKdgSwdRR8",
  "key22": "4MrHnW5aJYBmchLHFzNQydMEHxM7QdtWR251waQCyW2NBSZhCetcisf5TA9Zn5ZJ1cGdvJjDqDJ3ztnHPvdFu4jh",
  "key23": "Y9T9n84S4T4kVGgnSDfKiwVbU9kgzFnUyqDaDKxanHoiorfB9s9S9q8GTk2fBSFz5Kva7LqydsRakSUpfBcwoFF",
  "key24": "63NosUZ1VwS1ixwjwkkmNYbwJFTYZpwMRNf9fyDabQbYLdPQDwtEtSiT1gEr923jd46koZH1hgNaj2yh9itA6oew",
  "key25": "WdSDp833iw4uQYhdYbjDjB9vEuEe4Htp43Q2WgMRJyMF2emN7anwPAoD2ytETGBpFMbopBCMGrcRiQzmh53N5qG",
  "key26": "4e5d3bdRzm8rPTP55KkXGKzA77ALjJp9akhJJcfJxCi73KNWLcGtNHWyoTF6Rc8yWwDeov5iNzz32oxCXwxZhhbo",
  "key27": "4eUcakjXAjpQtKstNHACWvjmaD5pXyNEGCR4NaSLPiS5YMFgLEBhzANSmstuwJxqEsbdgRrkhPdt1fYJEgMYrYAh",
  "key28": "2JYgTzociCXZpFCHkCPbRGtRYYL4BRj8FtJzaEc3Pzq1KvmDR63UgjJq6i9Njb4WtbMQa3XgfUKSjCUjTTrdaGN4",
  "key29": "3rJKCrARnSoz7wN9P5B4g1Xkgj3vG14ast17bn6dWCoFSLs31JxBKWo42kuYhyUUw9BwqEFBa2syEmGFwYVULFFF",
  "key30": "4KGgFj9ih6WEGP4T9xykpcDwsCpRWMUcY9SeJXse9nodR2pRJjzRbg9UoYbYCJMQKjateMpXVQ6GL73PDM95Hnxm",
  "key31": "4ThD728BcUDMPzQbPYYqWZxgSLkcppL4LHK4cVLuT4w9mtEx4aJu6T8mHJxEkneHQ88UU24iGBF4DP5eop9ciJno",
  "key32": "5XcUp8ZS2KgpyfvQX6xRXenNiqNMwnWj4m2AX3YobvadRhc9xjENNNdsZZAHpTwek4qP9DJpqYtHkBb6BFeXvukD",
  "key33": "2ojTnxY6wDrDwKFoDmqqoLZNhobxzASTETsnNVrREw8TveaPCYY4VvXrZHCMiSD7eBc7o6grWzdXEbcD8uYCaauZ",
  "key34": "5nAeUZASfFKwV4frokgnpsmX1B5RWkKHW5sThiYFFXXXSgh2K6bWgZ65Lj8gTWxRHcJoSPGyq3G3PN6qHwhgKbpM",
  "key35": "3f7NECDM9R5fMZv6PNZerGgGYV4VQvAZCq2i5A4u7kZ5YeUm8pujqFw5SViAr5zSLFf5xAYfm823o1F9NRLvTfWk",
  "key36": "1zg8EU535sw6a6fJC5iT9qqwyx6axJgnJgk518qmuP2jajwDbrNgDqZovtAs4ye4LtkASwXDFW8i1f1BfXWhBav",
  "key37": "NjaNhjpueFiYC1j2RZtLJG3AR7DXMCkpBMHGabfXgXeD2yjGZ7mSwGFXGTrWzeMM4q4HkHsPigfbAmC57XtCdK8",
  "key38": "2EKwXKsjzgdp6tGSvUkSj1iXWhM1BFXXpionxRAm5Rvx8NeGvfLigPaJSA23gfKpAzq2c5G1UZAFjpgK18BijSto",
  "key39": "55gmWSJR2ooynfFsUPGYxakq8xtbiqeasEYyoEn4tczxCqa7HrBM4TN9oie8QeVnyRKSLNV53ZbAc4Nnx9AUURtp",
  "key40": "4cEvYjEpED8QuaUmKL14K2x3YsJ9Gydq3Q75zca8bqMmwdsL9Z9smLoZk3nfDwTaPjpFxrnajQr6FVvGjVQjd98T",
  "key41": "PkoASKajbcYxAk7AZDDS7QieX7BnoiYPwivQm9J8WfG4Hotu16p5JF5jDTMEkAPYKGeMrxVbZY6wWght6fQ7ESz",
  "key42": "3p7rPP4d2jcxWoPfB9oVR9zRpJhwhfN98YyZi6hy7ce4KunEetceRh8BxsWH1qwNdGEvPvFuZtovwzhWKsGmcsLZ",
  "key43": "4BCKkGL515BWn99oQdKYkq7CHChYVGGtX2DCLsSGAN8yxooh4WF8sJyFyudwC4Rw1n9nexDqMWFBYh5hvokCuqy6",
  "key44": "4qAE32bLCDtNoSW7vxcHUX2nAY4sdwWNK6wMo7rBsoFTVceerMrEy4g3bC8eApWLvwM2fjMyLDJdurjBgdgLPRQG",
  "key45": "5Gfn5RJLWJojXKGwgqXuBEX9wfaLNEvhitD91uuGtjMjkhdVfzcURQ48KaSRHj6FAf8PTzwZBff1MM6xFkGV1C8K",
  "key46": "4fAn8LifJvTXvsh6JdS1NfvDEriuoKtj7wuSKtvYffAwy4Nbe2PT6FB9zp4mhc72YBDrgqmX8fw9pbZHvDPy5pPm",
  "key47": "2eLFynLxCf7a8CXXbDB4bS5Jbkc4Cze7rZaKfdZCkBJUnqVuJFEWkKGXDFNwNjgh3NwAkDY5EWUrTEfodZNxKyJi",
  "key48": "tMoT8y7mRjeGHDpnMzjv31k6MFra7p21hKeka76EyfyG4RRzv6uhYtZdJF8RRxcbcjYno8gBwKqXsokf2SnEzKX"
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
