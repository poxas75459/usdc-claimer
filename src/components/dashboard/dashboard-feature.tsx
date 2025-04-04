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
    "62X6LufcQHAd1j95ghiXZhgpMLPpBjuYH4aLhjZqQaf2xv9x3p7x2Z6n5trdnCj3MhdjcmZEUJ3mgtNsFEsW3tLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPb28PB5K31JLTGQSVn7mohWf8Wxn8zHyNgrkfRvCUX4Z1StecCsaEHrLYwwQSkm79y2HLT6gGvj6Zf1AawpVnN",
  "key1": "5WcrEjNFoH7c23XmK5sbnN2oJWcU7rQNFWqircKEZXSQvBcgJgGRaFA98Jak4DjKZw7vhK96p9q7DXpfenZqYTV5",
  "key2": "2njf8D2HHwJjKE9ixjq9RNeopR2wEhMqtHYXuoo7cEUwfES6Qx8WJK2HV5vhQkiDHGsafN5Utr22WnPRq8TkP2vt",
  "key3": "31yJwzgUioVxxdNQftZcA3UmsgNYCmFwUefDfiHEzKkghLpA7pxSKnQVkHMm4CnW1jNynRRkrf4vQn8z2rCbTVcu",
  "key4": "Dedz5FKAG3DHaamXANVC7tkn7sFaVfgBGEdsW1G6YH1Sy95SWLjYnrDQcgkHZvDJ7h8GKsQVcUc5dGTZB2TPSnk",
  "key5": "491KDXgL5XHWuFG9sK8xCChmdChHi8yJRcJzn9NbtUGkndhH5kifWK5zmcrKVpV99cBbWpjvGACUsHNuj7ZcRAR3",
  "key6": "5DGUANgkBdK5YZA8SRgs1PMERk6LpYkzhdWLcFMGCGHGyDMTr7vAcn89ehq9iTZ1iFeZ3p2exfj2U1ShQ3mckv8q",
  "key7": "3MoEQzf81oMMu4rYHzMEAU4XMQQPHVMSPCqAWaqpXQRVVZeD36ZsXwV6CCQwxuVsW693fS6gVQUpUKQfVQZGK2Bw",
  "key8": "34erokPw3ddSvqanyHbxxHAnU4TK42r9qvmMYRbp3J4U9T8YAL2wUmHe4bLqmtBMD47LhDnG8hnLP8T465Uvu4BC",
  "key9": "3JcpA8FRJZm1BHyLvYTrR4Xfhh3uBq6Ri9yHksS5ooMAAfFZ9PF59KUuXVvtdjHmZPynHY7ohLZwcX7amb1oBXaR",
  "key10": "2AihbqAEJV5ZNGRwChghPoDwJ7hb9xYwfRjWH5X8NRDwr3H6BsBaP7FHHQxbZTk1RiZoRPCJSggrMCFfCQQXjNmz",
  "key11": "21pknMFSMaXwwGvPHheTYYSnpx6hFwGHNTNo567Km6NcJDP2oGWesYk7pHZRsDPBscbMUj9JEUzxEecnonNs4ek4",
  "key12": "4p6Z6wN5CCa9WmDC96WcMTP6bR6JCFpCkm6A4hnHkCHfD3GNkWEnixWcusaukxp3U8edD2tzan7rn3c92dnDkRA4",
  "key13": "4m694C3SdDDah6Hf6CfnCPvbEgrTC9bkvzYyPGnwjYZ1HAMgWq6VSjg77BuRc8vsN9xfkNcanWN46w4ZtceZyirG",
  "key14": "ey2AZXX5M84z43rJYBTyXBRXou8AwzkjJfWke56DSYKwGuEbsvD9H8KW3uKqEExZ6CNAX2aFrNgUSMTBYhHzA17",
  "key15": "FMz5C34xA6RWkEajZE5Xu7xeBJMSmba1uPcL1A36LES7mmyV9KHqaBVWmCPzdcTvsKYAjK6Ba28peNYCdNw5Pgh",
  "key16": "AKu5W68Rb6UqD8t1hB6uL7Sr52dKB4RWWRmLsPEPPzxQgVwRTzUarDCttVppwgazTS788qD77qhEp8HrYLrn2fk",
  "key17": "2ZK2ycDF1mmpqtwqayZZP47DV2sCbrwMMQjNQn9dHaLUUdNbqE86aDfDAckUYDRch9AqTirwbkXWp96EznfnB3xn",
  "key18": "3rWv7Bo9NBUrXVuZRxer6FrL1DbjJRjb4JecPc6mWste2jtshxMa3KYPMp9hTFZDAMFtsebZsTzVBUM1YaFGBE2z",
  "key19": "4j3qETppnXKDXqEhpa9YfntkYbsUZArKbX9vwCe1C6ZGALPkXLhUZsEM2AvWx6ZgQuzKH3Da574qcGW725xX7JEx",
  "key20": "37qL3h2qomAxy8ycVwtUokKtKHSoiiWYXVJHYNBVfo7hpV4KvHxgV36Uhiy7Y9s2afdoZWcVWdrMyQRsn1NWhVDV",
  "key21": "N4VRx7wSzAmq7ZFPH2dA3WL1atsE87DrAzey2yCtaxi8GG35q3qNQoJSaXCsx4pvMiograey5uJHa2WExNPe8Yn",
  "key22": "4QtMmPQtrNhXbi3Q5utth5e6kZ53LmrRid2BjVCGEqiBbP1TpZbqGNTwtHiDRPHRgrPLXr1M7CMV2zdNqDQULpHs",
  "key23": "Kc7HxhTNJURoAJjUSJK2UkM1sdfnTyktuXoVfM6FLR3va6kCuPPRg5f2mKLe44N2ET1TdB4ZJPiTVGfUyCXJZo7",
  "key24": "2Q5AfHeze3UVFkkHDMa1NM1p9KvGy8srM9uEBWmosaoYGNaGGxd94MWBUrU84cLRdZWF1QKum7QzxHZzsygTSHPE",
  "key25": "5JS36wGbfpPjZdQcJwL4axxUga4ppMhLJVzcBbfJ9fPKWuEUdBQXfKy1bmdu5TWh3QrcQp24Rj2gabJvf6zxHfMB",
  "key26": "5WdRGqMcTsVSXBuQGB8nR8E4xcJdKqr41LGpYpNaqZ9CTzoFuh593Y5Bc3ZPjkpEs1b8wqnL9tJWjeNTpvmHaiAQ",
  "key27": "2ArHivqQRS9ZAkV4jD6D4h6PjzrYqkPajQt4AYPFSJghvpCYaKqyAuXfN9BckaNGRU7p6iZXqqdFkmjzDr9pFSyy",
  "key28": "B2apvo8NbgDBjGP95Eq4XM1oybZEfLGYUdFcaniZngYsqaoAiGrQ4131bDJ9w63Kbkv7NwUPYWhYhDPBtmRgDjh",
  "key29": "2T7RkE1WjXXawgswgSZiePWgX79hhMPGvbz3yPUFo1HyS5toLuU6kKh1oTrsWqVi3BWbB7dEKUG8ynxY5ZSk8oXo",
  "key30": "5AnFPSCakGfpN4MomKzgqHhoDmNEMrBXwaHUdnvehb9JWjXewNruH1He3LeTPTDhH54x7C6vfhSgMNrJDFmfUQji",
  "key31": "4K9RGME42PEECGyAJZrM8VVEMNmiaMqvYbmyaAoPuYCVTdNNGztaH4xYgptNC1qhRWeVzkCbmecLEzHrpEMFD3Lc",
  "key32": "5Tv4ipQvJZ8xzA1XU84qVXH6Q98wxruzFiveZE7YxurH82tRzmLqoTJBpVh4FFg92dwfcs72MSavrfHa8RLm9Bqs",
  "key33": "4vbrko3gQmcp43JJqNLgKZ9BkMxoBYgTK2utogHhW9W127chYXaPe3cZjUacF3LUDX2mD2YtvKXUkynZKU4Pfe2D",
  "key34": "8AvgYCRGosC9WGDsd2L34stPRb5Mbdak5G7a4dmmUe6gPbspoB2kdiutFRYFCCjsmvpWbaQnhfydqZJfsXuxmJL",
  "key35": "53QPtFyYLuK91LSJeZkyVJRcU6TnPJ5snsGiBzzUWE35kX1GE66zbkNoMVzvZxSuyafZ1xqXY12qLKNS6JJQ7YxD",
  "key36": "4du6eMJ7p8D5bfQXhaPWqyFu9cw9bL1MPboqBKgo9XfuU6uQtMqHyHxysmeBG2didcem1EDNcE3EmdFSw5hUjKYU",
  "key37": "4Bf4oLcBJDy6Vcq1JrWgJwmVZxTLFQYtjSnrNhyJZafeh5M54aUN5XzxHePaYumghtiQiBsW7CZnrHf15dgaBW15",
  "key38": "2F4WsnFgsEmhS52Z7rdmSGdz2eURtndzADY8VgwfkSf4QZKtXyzw3Ciwc5fNLQE5ANSPrChVr5kUD1wUmcVjSCjv",
  "key39": "nn6pjMnuEjHydg9KYEoQwAvnw6JomiVLVakmYYqQRs5Z3GtbnjxAuE6qWQ8wH32jSSEGeZd5R5NbD7qrRXRd8Za",
  "key40": "3jKhuA3ebDj136bj8VDNv6QYfg7aZPq8zAapmpnYyGtKgnGXheH8xSotwVKwZFpEK7bXUYbWJiJEUvxAru2iYtPR",
  "key41": "3i2mx751KvzxSVW6d6PG9HuYdXHWgK7iLLopnZkkEdfMmNqjQBJjZE9zmf4eRCb1ZA48CJbPvdArYi5ehLWQSBGv",
  "key42": "65zcEGZaYqDnrkZs7SHZFq9RyRvgdNbdN5Drsvez1iaNhUeqBYZSKb5HAKojX8EcQfjjHCBuZdgi5xrUVBbshPWN",
  "key43": "28Asbaar3UatDp3wEHgvnxL2qsJVH1GByT5VfEbuZ5BQ4c41vraQYXriWukUVeNt4gEN1Eqtc5ASDPaij8YydoJp",
  "key44": "4PkBGoYvi127w3teZNARxcHMEyQmKzzHjbRi4jszUj23JAJeMbN3kxpNhkeTg3duSnerm9RC6q1df2HYDNGZX9DE",
  "key45": "dYxeHDSiVE32zWWqp4KLZYvnwmyEjnvo6HMHfcS9cmfF22zxcxVLjXbacPi2EWwcQrBwuPVitCsPtLuB8Q5mtvr",
  "key46": "4umLn8hQAkE3yiZVJZgy8LbbAjxxRrKYPvnteWxFbF8trn2QxgXz8cC7TmLtoVrNvG2uVDrdQT5wMVNKwGnXvnLZ"
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
