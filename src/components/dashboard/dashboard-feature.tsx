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
    "QeJXcLbGnKGHobsiXJPAxF46LsS25xBPpqTmNoE2XBveuqpGoYSbGYFX2HKnfkHcMqHeKSLgmqbENRVhWGnfXwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHiRkpVPaQqwrJBNzYrhsyAuMn8zJgBKmhtbYEfqtURLKiW1qFMq6DJSQE1M48vm2Gvag5YvvRh3VS7whzcEWMr",
  "key1": "5tpo3xcmL4KyRe4rS8mk2pidUTs6ZN1Zj6n8XnVpXaiGgqyLzQadLFhUW7qQysK7J1rnR1bFigQvQXh268QfZmvH",
  "key2": "4qfKvdW623g88bML3dDpxcPzb89AeWxywCGy3fe4Q8QZzuhbq8t8EnSxiMqD4P53f1hGQ79Lvyzc774HhXALuKCb",
  "key3": "62Yd1HkQPnuw4P5V7EdwRTo6ucSeP3eUoGRE2z6cjen2sjnzfEZZetZvQt3FEtFS59mdt4oTiobC9GtnqSAwNBTM",
  "key4": "5CcCNSDZur7sfver2oeR1svUDwaUt6H7n28gJXBNHoc5CjhTHX51f7vSRiUfE65g2Ci88ynuB1FhfDyn31eJVY1g",
  "key5": "2thok2ZfNtNoR7WRXUDrUbtpf4kUMHzBaBvTYspnWhAkLQXZMHp3MrP3BBMQ4rJhfrHQ2pNcCYBCWtc5pH22WXNX",
  "key6": "3TFDstcGrJdrJavLfkUijgVMXjFqoqb7DyWDYyAD82N7i71oALgRQWnx5ReMkoRkV6fAyJobFy1v3c58u55bKDua",
  "key7": "5mRBMkaoF63XjyeBRM4gdY6Q1r1aY2ge5tcX9MshVsDynz6LjcVnECuUFzv3f6foAKshQrqcZFzVECwrmDETEnFA",
  "key8": "2B8ujJ4rECDVDd1V2wWXdKR4iN9EhWkAb4xzoZNJXWafBytYtu5Rkxv5jgLigB6p1eERDphLbuebyKsPo7n3xBZZ",
  "key9": "4mV6eGkAeKAP9Sbq3DAfR5Q6VCLbgB8SCvy7VHTFC77jrjsgZCU5hnMKiP55fa9eTHD5B7iAYh2bQWJfH5xY3w3g",
  "key10": "bkkq2Q1gZcwNpFQxgxmnUhGE6RKn22SMhU8n6LrTSuuxFq46ou973tzPkbfiFevVArcmUYZSUgJMskgWDmr7ViN",
  "key11": "2WK3zQjd23tkmRkrvhxSExgmwcJQErUv4rAZA4M23wyHJZShrV8jgsPGbr8BWNgS2zgwmY1jvnwreNv79F2TwMpK",
  "key12": "3sLbqdDZLk2hqfSYL3w8uCzVWMHbKEf9GyZpEquTi5cR61cjg6xp5nbsSat2a5j7a7F3Faqw8KFDEzPzUPgaLFiN",
  "key13": "617cK8sNEEcxUqese4m2RzjJJZSQSe9GzB48iYZwZA1LP5GSCRxZ7mfBDtmmyaWo83ifz9Db2PrTXDr5SmXY5URz",
  "key14": "2CP3p4gwwnnabhqBxjPtSxQDGgBJryTZhQ37ZFPTA2UYy19oLDptZEeCjUwJ3uMJPBbP8D3RcH2hPFWNVZ2d9hTR",
  "key15": "5PZGh3P2T5xPwYdZvN5FVpQEpoF1nkBwaN9UVVHQdd2JJYZrBqwaPBJrGSFvbafr31cJ192PtetSfsQZc5ZL2cTh",
  "key16": "4xDiwigJLXuoaEQ2SA39AEfTUQWjHQEvm96WZJxRzeAhZK3yoLVmdAZE7G2PQG6B6UgayZswocSaEeWbn5Sei5eG",
  "key17": "65HjtEqW4SZ2FE8a8eX1hw9rQdT5iLrPM6bJBA1mmGV6HyFuv37iGBr6rTxYwin26H1hphJFVuAtFFYsJ5eqfrSP",
  "key18": "54V3prPaAdrf8H4xvhVP3b7jrPwLN2LwvGUY8GXhZoVpd6YVnjzoGqHszLtsYCWKSt84DvRNswmTJmxFhwDA3Fzc",
  "key19": "oD6icNhJVkGwiFF8RG3bWXEYW4ssweGUnKYV2SJrV2hUmwsDTYADHw46TVK1PT4RBPtnBqExy64soksGsHRtNdg",
  "key20": "4wBz6zN8H3cQbgfX5fxssDotKAwD6NmiqCfFsSQ8ZBXCxPGF37gZTFPj2rSJE67zuu5jLirN7wKtY9wHCyP9fkUM",
  "key21": "4hvqTehrEp9NaLYkuaGXGUoPDTm8LxeGfJgzvCVEyaNiCSLCPrbhMdQoDqwf5HXQ8F38MvbGy54KFfEP7BgQZn8f",
  "key22": "5dWRYBowSZ1HYeqtk2Xd8QbGa7s8MD5WBwgZ36T8yY1gqzgPP4oG2D6diAtBWnPbhtPsvXCfRDa4mxPfLqe2CBjt",
  "key23": "7ZFHky2V6YUjJkQws69WvChEmzCu5oTcmAsszDePVRRmvFZ1GU8skbw32tWtok16cdUz9HMpmbxnTMy5NLYf4TN",
  "key24": "RZJPFQf9J2kAnVcVp6kv27DAG4a6DbNtkjxDd3WV6PrcXXsMBK87JFPG1xvqjEjMZjnkuurkzGyp59YnPYRZ2o1",
  "key25": "3rTNxrf48FV2dtJrwm5N2DqgUobxREp733D4EiL6bktBU5nqQreXKUJJ28NhfNASVkfJbRGgCfSgY3w4STWSaA5t",
  "key26": "3F8no5CCCg4XHDHp6nSt93iYR6cMzVtk4bUmKPqGjz8GmuXDGZpcbAi8nM4M4EP219hSVdJKynJVv5A2vPcgKNGF",
  "key27": "5sMp2d6aFbD4uF9fBQTRdRAy6RJpS4NtvD7jjARFBffohqvp2uTuNjwoYuVHyZZxXMdWmne4GsqipWuUrYgE15Ma",
  "key28": "3HWffkaxmeUCNifGnCT4xx1DcEmDsB4np4aE63w6JefAshVemA9pbkpCfV4nDZdEe9c4FAnoct3yfyHPKGYa7wBj",
  "key29": "wxDtb2T5gyA7D1SZb4e93b2ZoBUrGtfoaBMd1XQQVwyPCr6LRUbBPPAunXyCeNcRmTtC4AP1U5BCFBN35Z6z6bf",
  "key30": "1A19YfHj5wRbTqdVY12S14r16Q51QWEpdAYeNjaTYDufKJ2jNmnBFNV5Hv7WJ2cYUrkcbZpZnXWeuYuDe6Xfcpe",
  "key31": "aCJzx9oXoA66S1KNsUPtLpD31ZqupDwWCCTiuVxzh65awWaLrPuzmwmfDb73Z9x7gvCHnHwmF4oNEN3MnKark64",
  "key32": "5nhgGpzPsnFSebUxk9scBphsxxoeUrxBkQfmffmzVfsjBCit4UL6wfRdnr4PeA7CnmtT8jnLJPx9f171E5SuDPpe",
  "key33": "4YD8Cu42ZNx7x9j7KJUFjTeSLY4nc5pWxtyspDmsPMAvhGmQc2WhxFhARsZdDjwZHorfZRf1owaPa82ZALwBFhjV",
  "key34": "39qD8a6bXwK47DmBgp6DbgbycCWRGLGBvxu7skD3bSr3KLVYouf8CAnak23c9TjkKoRKaBPYnpQVGegz4kZosgSR",
  "key35": "3mPEJJm8jDS6KXKQvAp2c41266AFTJqx7mP4z3fX6evz1gMj2q66xHaHyzj6mFQQJapWwPG3cbvzrC9PjrTLTaCP",
  "key36": "d9ULsHC3zxfNZyFAY813KYjP6ZmXcdgNBXXNGFc8EXmp72fy4dtk8knfhNTDJKe95EkE5jqTc4on92A3f3Yr1aG",
  "key37": "3SpTfcnhFrp9CHWADjpDpJnbsKgce9Zca2WZvto4c858dUbHrQz6i7b3f15CXnDWTjFLetdnRowBhjFtBDWFMcGf",
  "key38": "5iLn255uCQ2b4Sq6HAFVfq3ADj3Mxa9WCoeKS58f9eqijuh8pzRiUx2hKF3TdktLQTtmcLhAchvpY3Z1u4boz8SZ",
  "key39": "3VgT6SaMTKgZuvM6JEyzVu6zB72u72o3cp77pZehzLrkU9UQFDftWgMRmrNQopv9ibnSmjUkZ6mv3AZwfPLfw74f",
  "key40": "2VR2Q9yLf5pGdw1QkEbG1duiypj3avhWp1s7Ckj9ZUMiBRrfah5bR6Lc1LNtexbgq3LHUJspc4vHu8VWpUs8HqYy",
  "key41": "4ZhT3cJFkGZFPS36Q4M7AqQBXY4csdMzmV5DDEdq6ZFJRzcE7UYYMcai6d6Zg13kdQcyTMh6UenVLnUPuP97eCJV",
  "key42": "62KBFMhfqgrwhAcJQiv8Hiv1Fz4hBeMQzwQYsv8ZG67fi6nYN9Dy7iDjf3yTDGK5XYk1NMNjqwnrBKQLe6KonTVK",
  "key43": "4kWcDmRXWwcumzkXFuNMMAD2VGHuVAGR2QTUUuFYGYDED2n84BB4auPSj65iZwhUnj2G3qKwcmdJy3Xziy9TeQsQ",
  "key44": "5xiy6SSGjWAtRcTXYYKJTSiSvFotQpYbanyZgGGbbgVhVpXSFNmJy3a2pJPSgXN2G6ZjKWRcs28Xj7shxL3KHuod",
  "key45": "2CzztS2MFMK4LvPnYF5hTL2NpBqD6Dubize9bopbYdepC47g8bXyVFyfoaJ3YbYJE2F3y9PDL1UVpNjBrTpUeh3X",
  "key46": "2fk5Nwja3NVUHTwPG4G871cBnDQKokNfYWKYGtSAFajXi1YDGkmN6kgxXxHbQpmbVrswXohDyFHo9pHU9qRRUgS7",
  "key47": "2tKH7My6vtNnGxTJjXBrmMzGW7NRme9WAxwojzuoKGsDJjJEiknaWtk8Haxsb8G3SiNCHv38aKWkiawzspLH3ygB",
  "key48": "3CqU2x1Ah6F88KDqD5z8dd5en5sgRK5iRjveXTSUZQp2yNBK8VPRAiFrFbtVdadmgUCof7JPdmPAXRA8q5Gg6SZ1"
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
