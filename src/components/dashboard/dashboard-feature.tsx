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
    "4GGZ7PtGP1LcfHT7TZX5StVqZLnTFQ1foDQAjeuGRNck4WWkyRVbLYVEQSFhSjFykJt9qU1N1BtyrUxqRBmZCE6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ZB2G1uq4MQiLSgQhkTinkRcTKducGdaWZkZsSq55TqsV5NPPHS285Q3agPYgMvARJ9pE2HkvumLzsQ81Vj8rtb",
  "key1": "5Bsya4sCeGVY3KkPowABxPwBthALPxRyuicf7vPZMvvkiM12BsoJ2pnkV3DeK78F49GhswPRcfSDFMjrycy7LJvM",
  "key2": "2MHbmQiNPQeyB45XyrSecfPnnthXFAs4hGrQFHDkm7gVBTPAkf8LHvr4FhaDwqGF7QM8y5eUbS1F2v7MKHPjKVXo",
  "key3": "4E1BFYQxknKPFiVAHzr8Y2bb1zPmtYwDpYYY288R63hAEQuRKNaGwjXzvSnGRowrJKGx3s8ctj8xvufGvMp2zpWJ",
  "key4": "5huyn7pxkGQotz58V599eB4DH6AKUU9fEvo9Uu5maCB1V57KmFoYrtve8EgmiarEzkbURoFjPQTCdoXA3KidkEvc",
  "key5": "fNpdEzcCvG1eoAJk8xwaMdXbX5iEkSk134jgc9LEVyTikbmFcjpjUkAY1vxK2iFvkrFELoHo1TvihBaBvgEriS3",
  "key6": "tZD7Vs2Pn3LnPipS8GVuK43EKh14HXCYbTeQEqhoMvbEH8S1vQrQtNSefK975yP8yJt3AGkkU5RvdPYUUijnDUw",
  "key7": "1mJ1V1HD64nv2P5wuHporSZn5bvRx2vGt4dHc74ZpWmAB2QNfnzGj9tBTtKi6EvcsUm68Bhn72YXdNKrKi8yovV",
  "key8": "4LbrJD88Lh5h2jJbYKBAAriz1T39evpvXKhGL6yiz5doCHsxjUtZgd89FR7PcJMikZAt3LCL3eF7XpswTvFSsyDH",
  "key9": "5NV8qUtgqo8dVeUHNzDHcAuD17KH9cJ4AZ1EFbfxZEY6X72e7vqN1pESKx2adfMGTfiSdRLTktWgqabu9rfM5cFB",
  "key10": "4E4HAs3cMi6mX4jifwL3n77boqcHzguaxYMbd2KjGhDYxhUGhYRVG81RWTtsYNwWurtBtZTRHXsbXp33VFGejkoe",
  "key11": "2iBT3FFQGmxPVFRxF9zjdNAjT8TLiqpJGJEgTPLJ8a2wqDvojfT3ugTp6ZvSFbwnY3VbzNvhxtKXJFA3BpRRo9Ke",
  "key12": "4HizZGCMzUWNaL6M3WZtLtYuq5izSCR3y1c3GUJCZHtpSiMpYXmVZLPg6axeEFbrutEKSPHu8VLP7SGmbte1ArwC",
  "key13": "2LAPnajfLDJiAvLrpK4VWioFm1zGLrFvAdx88hqD8q3yhYVw6PpzL7XCUffBsKvVDtmbiBP9VXo7iZiC8rmsSKNZ",
  "key14": "37onaBhZ3xpQmWn1ZcW9fqp3P3eTaRFhaVSsHgqrkKfpuoWNvapv4uoiC8WxgZNYuk42qdjxQuy7YT3J6pRCsUsc",
  "key15": "5D5c5rTYwaD4mEezAin2PsvGYFtZC2G3X15n5LZfsb7Z4TrNY1ww5j3mCunqq9MXVTPhKUgmNysbjUetYDVfLeZK",
  "key16": "45Rbanw67XP2Qk2VJ6kjP65WywuGyQcsq4zkE5ogJB8rWsUgoKDHFCh2ge8AVHLcArKUhv9Fbnd5V5f5h3vvsBaW",
  "key17": "xzWUUkGqSwoEt8Z2CBm6tjgKkvS5KvXchCEh9dWxpcezcX2bg72pNxSzaqvX7T4zfQQBUrsLCMVAAAiHUkNNmJR",
  "key18": "2MEtXGfZtHFM9iBwEXVVdwqpZCARLXbKG4NXKgoezFuX5jsc1o9zqD5bCAe2v2CMM8xvreLdMSjerhSWmKumnVyo",
  "key19": "5rXsUofmFPnu6tJ7raBCXSZ3uvint5akdjKttCuUgCp9ZFRJNNpNE5yEQ4pucC3PgXB37hwjwW6fttz6jUXYhpTL",
  "key20": "2Fu12W4cRtFA6c3i2Tw2NHM4stfqMCqFvWn6DHcV24SP2YS4uZypUpTURPuiwi8fWhbNDwjASKRdwFWgvzbt92h5",
  "key21": "4MqE7RxMnf5Lm52rjHFJ18nD866AsNUNXpiNU39DH2r6K2moJt4V48wd7yaLo8NzyP2dWUCN8PhvKxws7oYbCjKS",
  "key22": "24cJZeowtwWGisGWkFC49anmK7f2XGt6r2FuzWPqpGfSdBJMxbeUiUa6r33cZqfzgzz5K1SkLV8PVZ3uYG2ug6Ka",
  "key23": "3wF6wA8WMrYPP1369Hd8J54xrzxx9PFajzBa9CuEQVitdPfqCZNML66SceTZwT6zJBamotE3hRoLd6TpdJqbq7Wq",
  "key24": "57MF1fi7S6GjwZKvaXvZsKWLKugUh1MZvfs3fRvS81Kvr5skyV2MQY1XUcZ7RjrfEFfkmWQ4VM1aiTLZe2YXA55c",
  "key25": "2xMhmStL2zaCiC18nZdv6iajVgdcByUjxwe2A5eA6KGJ5QxgYFwmBZhAQkheqLKnANGn3bmE9gr82C1YcEWgLgp4",
  "key26": "4SFDK7im9ELh8UR14sfWGyupTPWYVTcUFZ6yYkNQBAqWzhnNxLU3pUtBDtmyVoXj8Zf7Ea1rzdwiptpJqu2DoWu1",
  "key27": "3SXCUNVDh1NK9zf7737DZJYiXSgbNfyk8AiBQWWoRhVNQbV4YiYpBDvU7TE1yZSo9UH8Yj5BnrMMjcUzyZNLqLC7",
  "key28": "5RwLwYYk1uQQJzNgcY62dydp1nAZvec4TevgdcZDD8v27dk77uKrssVN5rXqVxTbTHht4RqgubeTS2c1RtjBbq6r",
  "key29": "5aSFHWybJ6kBTTDJCeYKRuhnAuN3WHKyysWQ6tiUAi9MqUPbTdZYfN4FKxZ7EE6TqXTj5g9izYbS2Q9yAGAdxaJf",
  "key30": "3tBDDUK2TUzwQKeipXMSsuDx6ht8xWwDCySsbMiHgA1SwoC5JAMsHFTmV8CgzjexXuPPAeSLTMoCP98vjUE9nqpm",
  "key31": "3nrzrazemeiPYw8y6mX9p7qeW2rwNG4NXm6p4b4cmADc9b64AUPMuVtinu3BEn14UbunNmCDMsWZnj9hCgVT5sjL",
  "key32": "zApYVCkQQ3m3jyNCdgUQHYWiDbW5ZkSooYFuMvvB5E2EjHaPp5YK2RD6C3qp8yY7tUzxyTPrZH44UPizfSr6avZ",
  "key33": "5Qy1iaUgagtziewJCzDXM4BB38TCuAFLLoQxbr8oVnug2Ru4obzHXyX4gdFPgeR1cYoSjKgDvDS5SM2PZm33ujES",
  "key34": "4Y7iTwnNGyYFwM5yRR1A4T6R6ku6aBbZK2Avm5TzrBzunqrVsKDkSgbi5ZvouCAXfAPW8ibz4PvCgb3QiL4X5c91",
  "key35": "5ysscjSKiX8f1SACy2qeut6P9nbYjUKt14mp1haRmYZm5xCJdKFYQmwAxgJuHYKARnrpNpfmXvA9kMdFfyBzeNNn",
  "key36": "3co6FMByseopZH58jH5MH6BcG68UFy3MnSh276HkcuYXjMvCKG1U6MMReXGihVX5HUEnDTQeXNU3yHAmgTU4KkNn",
  "key37": "3WwdRXTXo8ePfewyH8t6J2qvKZ9JSP9WZBaQMBZre5mcU968imnV94PXRNc6GwW36Gwqb6NBNz9q48HNaR9rCb2d",
  "key38": "4c9DQFhhcddq5giqAw6FBV3AUqy1ShRBxLQyC672LhK15Wtxcyopjv51LdT3cwd2xHU2biMFHMSUDA5Gdm1jNh2w",
  "key39": "5rkzTQfMJaoJpmNepaFgmRWg96vfyJVDoKE188Gyh7o7X8618DPzGtneajUgkesfvMtDpz4uUg65LBUAGsUUV4V",
  "key40": "2JpH2ByvZVn9WV3cNJHvGVmcH5s3GHWJ7drjeEFfdM8Qx9fhTMnkEhH4zrSRG1MHX4ptgedhGpURT24fbn4W7kMV",
  "key41": "45ykTGfUrRgKQudxZMtD5kQtwWkxmHPnW1iH6HCXaFuCN3gZ8aBEd9osEfDsoQEFrFPr18sbXipAfLWY2YVvSBRr",
  "key42": "2aeDrQMog9MzUoRPfYGxQhfWrs6ztt2oMCLSqA91gfkHVCbZ71j34FUJZXCr2bPB3y2brN1Q7TDL1rY8eVzEa1t4",
  "key43": "uJmLhjinMntNGTfpXG1LJfKmTGN5gRvtST461YysF8PEWkda4xjqhPn8KrTngEGDsVXe4C5zzGmj2GEqhNQkyLg",
  "key44": "4pFgb5UZLKPfTzpfRRGRtTJVhE12jmh12C9B2fGd4jmZ36F2mEHeivJcBgpQnFQmD3borBgyujNnSeN14UD8drhW",
  "key45": "4kP2373TeyBWAJMATczP6VF9GN6NnJvB7tL3hoAHdPgEVQDF9tEai7RMQyv5A14uziTSMPkDC65N8TidM6mCFpi7",
  "key46": "4erEFrHBbYM7Bsc66dhDr3Xq4Q9nMCjeEiqj648FEyg5SgJqqMzuMNnz59TgcwbejdkUrDjpPAQg3wxEFMyuDgwQ",
  "key47": "5eRaGciEoLgrbXJS9ckR63EuHKoigBZEJrN2DB3BBjZ2Uw1aD5rMv1HiwL5pLcWaCnmRxzTYx6PKYFwcSd9AidXW",
  "key48": "5VpEVM3E1AyGmyFHuPD8wBfhRzQDjKy8nhNgteKQHwksAeaH7gWtq8aH3Q3mnAB9wFEdPUjW4z2bD7iYNgKCZ8B5"
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
