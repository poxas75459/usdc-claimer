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
    "4tCc8UCKVcj67azVURNqZm8GKyfhfRFiQUXkmAe4xUfBBGQFPMtbuxVmFLvZUyvbewBexcvmULxgQMwpdUFzRuaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cy1QWWZHdeSeLBnRMMdYK5Qm6AW8pyAm4HEGsaBKThEnmCAyqAxdvBEsierMVHYtasXY8D6HiQt38vzHSbQ1nUv",
  "key1": "4BVRJZaDDHHw7sfafYPDVyN5z3bByPbiQozdKmHQQKwRqZTz2rCTMVxbjEh7oozJ4Ue3qiU61LDifF1em3TA1fr3",
  "key2": "5AAoT9iNKrvb4Dvcxgq7wG1sND25NVb7st9rAzWwFBCmh4w1XJcBhgKwqJQRqHiRjsiKoMkhwq8P4NgKqJYoqnRy",
  "key3": "4tcChiLquJU1qPQTnpAb6U1h2CZ7VGUCooiJAsLgbxai9tAQpyAqzdkY3hH4Y1jLdQskWc4k13fzSbLyKbr5hbjL",
  "key4": "4Qf88ciGugMuq2WeRFBijRYSQxDF5TyLisCp5zNFoD5XcvP3c9ZNHHwgUxDSukc352eUwekCD4zHM7LYLMSY19eK",
  "key5": "5fkyRPtFd98VG25DUNiHQwYZhLRNWGNBHD7QLEJbksSYyNs1FoqiQoFQxpPk9PMLRF2ExjL8zcAcEh6SY4SvosvS",
  "key6": "bu8LHySPrTqJDiPMzbBvng3iB8X66PvHwRYuQuBaRGv9AkgVTPzJSekxTgMkiYyqEeSWqUDK3cqRULJ8QXcGudp",
  "key7": "58QFnTAbc3Fc4JaAVuPftFSaPxmeNqzMkKEJ35wgKmh99Rikr5zqXdC4hYdf8JNpVjFQnbJ6T52fJ3hppFjFiLHt",
  "key8": "5Y7KsfLh5kf9PozZCeEBcqp6qs5AwBbRrMtZjKi9VGBdPG9v6cWLGymKcj7Gs9icVH65Cw6sAogSy1cznQiHKjZA",
  "key9": "8BDUFLjXTMNfDpbDpoa8yqTroPxR3yqGqFaKqRT3LLffQoEia9s7jhW6rbexoMXEM6akYTEqJm7TDztU3YacSP5",
  "key10": "56KSz2WLCkjpkKzYwugrGAyvTxgHawDiLpUMBheDXch9roxCa5bUemecj1v4nk6DjUozgVGf55Pp1NJufxWjcgGe",
  "key11": "5bYzHvwN1BewPGR4ab9HbqBgvdeGEVyLUZaUSq6XAQV3MAEkg22KGkqmmJdNGfehx4BddcGBY7kWqh3WjVtNYbZX",
  "key12": "2jhSAGjfBfsL1ypuvSvVmcJSF2vdkesaLM71HBBn4rqfikoyXmMw832JWvJjSY1JUYchTBaip161HSHT8vEzGH9r",
  "key13": "gGwEpmvhW1wuySwuFpvHuBuWEVNxDNW6KanbwHzuYZpFrSQVrrGevgVXykPEEvvWJaE9on1DiKCb5U9BopdCBgY",
  "key14": "5gP4MQBRTWip8h7ZvTChff2BaMD4VUfrZfjA2yTXXcHXNwgxtzu4GKVZgipV9aMZnVFKv5NyoK9pAqSY3Jo5jrmu",
  "key15": "8dStYFRwX8DbnWMBxjD6WfZfAH2rK2skWkBKG7dPsK58rNVqUv3QgUuAUYPxZ54CFfYPQUSntrE8Pg9SumTxBei",
  "key16": "4HRUdLPXT5Ff5m14aaxVbdo4suEtKcQoJCP2igKJ6XVF38mf8TZ5VePHK9MBmP416prcs4zgs9NyC9eoNTPN7Cux",
  "key17": "WopukAcAJHyfCP7AENoifu27LuT2LWMtHmrMZ1n4j52HCP36V8RPM62AMyBwrcgnAsMKGPRscEAwdvJTJii37Uw",
  "key18": "2MR6S8NXAoHrDczcTzXCVSCfwQQWkyd4fZ7ahXsz5gfzrbYbwGYhexa7GPagf7RAq9BdZyfKsWWRcJfqVtvSG1Lo",
  "key19": "2ktY5sNDQvxoWFWxFz3n7BdJyv27uyyCBSHXYbnGT5LbC7oeoeA1YUk6fKPP1pziRtkWvR1W8YPDQcTkVE6M1yjN",
  "key20": "5pDqMYHCu6oS6nxiNYyLyt4gwgZAx4iGkJaxpW5N61i79FavtXX9mx8LsXbrVweqm8cSjpaypP8x3UuaWQVadnuD",
  "key21": "2g5hNh1Hb5UW3c64ZJ3SSb1AUPg6QAZjDVW1RQbDuBJt9kZjXSB3DHarz6JmXtZpWB4KkVetk2ts621Ew7gqnjxr",
  "key22": "3X9mgnevSqVnGzpSocgnmM49ti4GXYVMwNNhBzRWqnAFRH8VcqELKS7aKCDiR9t5nzJZ2QpdrhjkaCTYiwyCeRFj",
  "key23": "5NhRFrdTJaLwMvrH4WKFE7dZf3ANkvkmFEfG9JgDhnYwCRmMResFtR7QTLkZpZdBNLPoDUU57e2MWSbYfrxFfo7t",
  "key24": "5ybikDvybZpsdt3TUn7Ao7fzmX6bc2tHfb7qup4EpmPwTGuQrigYWYHzque1gu8CQV47wspm79eXHpCCyvTqpyNE",
  "key25": "J5f5CqsTZToJVeaUqLVCQXVeJ11SJSkj3mbdQ222p7hB4k6zDy1WzeSTh247oTQ7AcByndEeeqRArJaYRFMjcKK",
  "key26": "z5ihBfFdFRtcSEgepqYtD9KwdaeAuTYCYebyPCznUxEU9CeEwoiGGwWm9zyLarA17FzywkRLYaKgmGWApXWHyZ8",
  "key27": "3zdeu4KdE5puHPDhZSNAEjWpNfLF93J2KPPHzLNYGhqA17jMqb1yYJKdKm9QezrLRoAJnotnfFFuE3XWV93krcLz",
  "key28": "2c55g2K5hvbEZJVZky73hWSb4me2r1uErwjhs7RS8fQ38JCYUitoPxT9FuRuT3FCW6uz9e5zmV5fzyd7fcLUsaGN",
  "key29": "5MtzP3VD5h8pR7thECMfdbo6HhAMoRBK7MjoakoYzTKYYiVBTu17AwvEWqTPUgPGvu1yZMk1bKKcyC6gpUTEBXc1",
  "key30": "5bF85aCaRKGRUfJBD3ja8ibGWhyL8TzeBuBZ5YcL9w5ZeZced3s4ZcJaK85Vc9hxTJVdESpuBD4NdP8sR3F66Yyj",
  "key31": "ncDm6MGCDayWVVGeuH7iAPgGGzoefLWUSrHJAdCkG7G5o29pGqkWA8Y5uUemXwCceSQqYkisCRcNVaQsZFQRK1S",
  "key32": "yENWohervrHHU6RHPwegMZrE7E8sPy2HyqxPH4Pi62TX4BuRADDRLq9czt1TQJ756sfRHqaDPb5wZgAsZTUVkmD",
  "key33": "Hn5YaSiUN494c4ep8uSU3z6J9qqbuD1H8wakP497yuF99kXRu429Qm7yX2zEVbWfjC48FcTjDnHpmVYV6782rLP",
  "key34": "rTfLoWMkFNJnhAP7viA1DTpowX6rxZLpQyfikcp9dDue787P1zWqT4poKaqu1VRE36jFJSptjaKtCEMredzZiJa",
  "key35": "oGd1ZzfFacGn1sSq9HNfL54FCSrH6b6VthSJzK2zZ82F4SRdiJFWQtAPwf49xuVLGwZEA6m1BebzukWo6CrCRnd",
  "key36": "33pSmX7A5H63sqXYCpevj3DXwAQTtWGPWryCnRc6knW6YvhCVni9Xy9nGQLoSNEaz7oNwg9E6KZvABvgmEt6Nxr8",
  "key37": "62FyowRURste5MFbeSqPEEimoL3mLyzXxu7KSuSvyZEvxtQuyMoubGAcsWe19DbFzeQH11CBjTNBuo2tZVvbgsi7",
  "key38": "4Yz7shpuHB3nY8nZU1oye1nTV4oh1G6Y1XEyzYKEkdkfzQwkSQNGe1e2y6n5bapUfYe1He5VAVir6xHDLY6zna9d"
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
