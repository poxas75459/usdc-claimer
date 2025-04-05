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
    "4gh8LWbYGXh1KX4QFFt8VGFV1wpBFxJrmbujGwqUpv5sn69PdvG5k4wHfxKjDGfMDdRaUrgdiGh7SwcEuz5cnWom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eE4mMXEZGN8J8PJSGy9wKLwVigcrVrmUW4i8fBXMH5PpKq7N6H23hbtM6JuiD1kWFyCbAWzgXUQ9DC6vNztBANr",
  "key1": "4ifTTpRRAVnkqommAq3p6ojPPW5YkL5AJsEgB266JcJNty25c7KpoaBg89aJ7k9sqKekRafr6XHYbQ7sv3KCsNcJ",
  "key2": "2E2UBDTq2pTBdzoztdrDbjwLmcbSHWkNUhctMB1qjwT4mkJzDUCtc6Zs61mUH2UPftpKQnNqCHyMUG7L1Qd6VZJ1",
  "key3": "5LoNi31jWqN9ZduiGjDzH1xHxWs5siMRJSqXC3BM19dTGauoY3wn8GJSSRrJcq7eCCuQ3tnrGaZYwnnbF4gxLS8K",
  "key4": "3qJWY7stR5U1hYUmc29SWQD7qmb2pMaJiRDn8BoVpz5LHsqbsTRYwPeMWRrYeBC3heB7JHKjcKriKxB5rApkzqey",
  "key5": "4ieap48RWzf8q5gPyxP7UjK2EYCpWwhHPG5crx9mMKDBxZdkcXr4atQZxxh3uQrrXAkJTx9Un5eDqtzp8pjo2z5y",
  "key6": "2VhDN2fQSYZ2uva33AJJ3vREE2wcCWHUUzh6JfCyU9vtQifSNqzjWthCNdnFxP54Pfe6D8ib5c5fFAySmPedTM3u",
  "key7": "5ghPfG4xuAUEpr8QMX96MvWVeyfdKVQQEzSSWPsUJjizTHQc5vpBG38cmxPh1qJUM1LwqbxRHmPBJDotvaJoUNDT",
  "key8": "3vtYrKDa4r6JJ3Pwxighg1aiG8mWyxLNDoQqo5rWDYP6S1d76R7mfER1k1HqkrwVQfEnWCYbmweWHFU8mqkArJ9j",
  "key9": "43XYUGb7QRTufyCYwYHdX7WYRUKXLiaqQ1FdsepJWtMYSGV8aCfxnohwREsh2m85cxJZ6gmF7DyrtR1DNrHunn8M",
  "key10": "2xtciTzbZ57zKdUmcPR7CvzX6GRSiDQxSJRgwLsTAdzzu1T8Lmppo6MkBSo3yrJjCcDehBPet8Vw8BqAQuLJ8m4C",
  "key11": "5ULAw8dP4oxvs5LqzxLSvZQVArEvoXfRd4TiE8fEHe1JRV37LEk4Tkq4seQnYn8ZUDdgmdeTHtjoKjVhR1WaB2Ng",
  "key12": "3q4zWRrU2Z4Rupnv1C7RrLjkuouDTm8dC8Wpm459bs624yKfLasVc88p4AWEYZ6wWy6bgNnYufFyWzipje6B6uzo",
  "key13": "2zMthYbZrXdZ3QAThDup27D2qRQFVeYs18TJNg1kzjYCXrndBVBwSgLa2AM32VktLwZ8hnv6Zeretk5nAerjgFJL",
  "key14": "sDq2W2KQNxz4hgSS7GrfS6EzYJjBkcAXbpbyk27Uf3Y9DtwhGytNiQDPDZvHpQhMvLZSsn189paEgRwe6ecbM5g",
  "key15": "2zSZ6vDcr6e43AUdySTHEJR4ArZoGFosXkNLAF9mnoLWne5zAR2x8dVroK2qP9TTxmio1PCK6GRAAUaczmsTtNNu",
  "key16": "5xWHCt7nQ2x52NduVT4obVYxPmX1D1ZzHUY9do4p8W3VpzX5vRbDJPCVWiR8vRdHfzaEsvjnYEuZWEzPAf6Zpi2T",
  "key17": "4wPZwmRFYtXWdrnmk6JrYP7qHgu768BZ6P9fFkkm71WsJTcR8q39RRkXhTV2RYxLE4RcouHKv3fo3HAwHvnYtPSX",
  "key18": "37py1NXBzH3fb6ce98PhaT4uZ9xiYcXXFtCAXvudT2UHruQZ1Xx9wZ7JBdZY1M3HaGbCJ68EvutuiAjLVLF1Eac8",
  "key19": "3QAYydSMNKiuNXVnJ9aKBcFhKzY4PVfWKaXr51AELShe157KqXvd5hk6Mt7Jq4nm13ivU9TobbPsAJaL4Z6VqjD6",
  "key20": "3mSmWsXTud1Ajng39vbfeavsE5HunhrSTPFerb2nfZcHgQzd1Bj36V1L4ngYBmv5p5XTDXKgi3KAtKWsy33jdNBR",
  "key21": "5evBcXofGf9NnniKmR9K4VrBjrtbKevUwdRrqp9BKGeng1b8K3x5dkyQ1ThE5MRMNx85BxtAXfqj2YnavCHosBLd",
  "key22": "4Dpjf4zt5QmVdGNh7dcadJ3vpbtUacbpG7U27uZZWwuCie1TBFQ2BVt3AtpABkrMuegGH7zfzmXWKZjaA8HenqTU",
  "key23": "35F4bqQfbATKuhdLjk7wv8zMw8Yn5PMEsSSGhVSsiyBLAUqtaYyN2pxCYJHz4cfE4XYZTdGsFiE3HzpZko4T3tnS",
  "key24": "5HRVZK6ERdhCFBHxRemha2NKc9FvZcPErHS3zbzhdijscAJya322rA1RjhZs4md561e8PBBbk82W3SLxMVo48wFG",
  "key25": "5kHdX4HARRDUGucMrM14ANn9QXRQvgUYmN5qUC9AsUjZhYWd7S6QrQJ53KwkwgAVcQzyX5rUyKzc9bR3MNsjduRs",
  "key26": "9nv8QrSLycGFea9cvMstuQzcjzVxUqhsQjrHqAhCbvJj515h12iwB4DoQ4RoBaB9FBBmkctpDxUTKiGhrqLWBuz",
  "key27": "4ioLMYXjjUV2GewVYTACQkLSCZ8DugBxpzmoh8r8JEGGKQVLHToDcs8R5vhcQWEssA7pU3aEfHa1pkCDcMB4BKcd",
  "key28": "2HPiYD1i9GN9iEF7WQNu2uzCcxTqMgxXANWZBfzh7Cddc6eiQWRq8FXthCWuhpSYvnv2gKjbuedkdFoH7KwUemGY",
  "key29": "5incQ3PpWLJbHYeBnB1gj18ubwsSqPady5ge773uE5f1xNsCi2Hp2mWLZxy3LGT6bXK3T3t54FkCCzFpaub26yRP",
  "key30": "xL3d22sUiKMkqtpeacQyam1yah4n6jES7eeVxmH15hmvHEEuWXxgDxguNuDFkKAaceaaXSFWMuAsCUQxaZsTfGf",
  "key31": "4Dv2KtKRsdNTjZo8zsL1akTMYrFVgZFnosvCmp8ak1H2x1h9cPC8j1oXt7SVHzasV8Yz8nA1zetw5scH5amcVZ2W",
  "key32": "4f1M5LwuZTij4RiehgAYoiDpJnZEZuYAzSpMSnczKPQCUvXbHp9snxnnLjqsKaZYe9RTbyFGiaaqhk4QPN4mHKxV",
  "key33": "27gLmpzxQRwCyaphvrwgY2oFU3AoRTk5wmtcjZvbSkYeFsLYtCLonUyjwVFo2d53CSpSWfv8jXHooc1KR5N7Nr1m",
  "key34": "4KePAdSdH8vbc7uwEM2cdemTYWmA2rvnh1yt2LM5eELo5ieTbsMg5a8AgXrffpgNWdwsyvGy4SrdT4FbjmsPyF94",
  "key35": "42Z5938rcCzdH21NiaEZdNpm7JHZxoT5hNSNibVWykYr1jsoG5NSVFoYwH6aEEojNqgjVrDvAhW56JSJJseDyHAR",
  "key36": "5PZ93zQyHsRpD7ZZn9sJowSfNWe6HTfg4ZSQPE1LoGv6De25HmW4ouJCF2w31qDQGWFBNw56YmJu6N7xdE5Dov8K",
  "key37": "3jZgC7o4FWmTSyuq1n6V28uH3SqnGfqJPjszbTYiDsxPM1R7CcGBm68vvAuDdVMfRWSPSJ4eJLZf9xXUU3DMXaDg",
  "key38": "2NKUjB11PmLwZ7rG8buEEk2zbJckAr3za7wgtLxS2zMJKJggxQBq8HKGKpEJwj7tHbkQnmTMrVABB5a2ShhRWy5Q",
  "key39": "2XwMyphbcM8d2z7JkVcQQMgC67aScYtkJ3ZNoS84r5ugUzD9FVGKC92tVv7tywDUxfB2ZE1ki1PzkVPyrRaJkZCF",
  "key40": "4zpgfcCcPYGoscXdKFyuesHnGxyhvxe78Kby92dcng3AkQirhaaRZ3gDHgcpFK42Wv7JKdv2JpHTdSV5mcTFsQyb",
  "key41": "5BtAMHKTB4u3E1T8NkdynJEcCDzYQYWxN9X3L22YgZ3hxJy3XDPp3rwB8p7iB8xxtGhz58jWNNoo5hb1gzmxGTmm",
  "key42": "5VgT5agSmqLBh6aDb6EaiEUZHCaoXkJ3rvenjEJLRMrSQ8WcFTWDsL6hRsawpYe8c9N621azug2Hs5qumP9s2dwX",
  "key43": "5kmbHmDQbP3y4i85xbFZr47cZ182q3tPSE8chVYYEcmBq15XVdmBV2URQJ8YgvgTyAMfYFWisNorSkYn3baMj7c6",
  "key44": "exmwZmRJBxYULsJT7WVc1fwUH2PGitfXFwcEWKk8JY8dYsFKHRHTFfsf7HdVPcQH4a4Vj4ie1cnSRLePG8sw5bq",
  "key45": "5kTz4Srb8FecbaLsWRzKrSn7Np7LGb5RrxotE3shNW4tgTQsRzWYvcj7ZisrYSkEmz7xtk3YjzKvDs6eHEPHmZnk",
  "key46": "3q5nSQsYtYA5hxZDiNJTByfnqmLrBcDFXu7gTD4dXPeJvMbnAwEhTMJd3d4gNdxmB1SpQs4LKdCJcaUQbjUAsXJQ",
  "key47": "4nU3FVbjVJYhZGmBPxKnapkxpJfYW57HgatdmV1ktbNiY3dB9N1eyNmXsVGGfXburMgkSxMxfCrin9zzdzjMH4mx"
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
