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
    "3J6YRJdWKBiTvCTQ56TSxAmWeTooww37YXW3aTKsf1tZrxZJG4syPrzi6LHNjruCQCv6T1SL1jjfdG8JLe1WayCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbCKxVfx3m11ApPiEqeFpnKUuSEgGT8PnePC9FnU9TyXni6nyBT5eKoUXECbXyWaq3B3iP5ZjTVNFotq8qahhvS",
  "key1": "JLeTxj9Ed18Hx3yWYDeFgoWmxcoFgDhyW26bZCL1vQX96BSPLrkM3EXSjemfAy61ackMDB282eZUxfcQq4FWRzj",
  "key2": "5be6KvsdwFmTBTsUgDGD6otQy143KoBnYdNF4yskbkg4MLaUVz4EXF3os5MCjyrUTaSSa7jZZ4qu8kwDymqzTKDH",
  "key3": "3St8ZK7qzfHjYHyfhCNYyp6BjhYxGo4TrWtyiq3hAbG5pJeYFcEeXWruMqkrREmwZwnxcVLy12uVDBUxBgmNVzwN",
  "key4": "CRCZkd7wMozx7quZCns2cMXVxMdsm63R7Aa9ySp5U7vEpFFK9XLVQmfWnB5HSHAC8Zj3imeJGCHgxsBnRRcLjrS",
  "key5": "3x4obYuUyCYE8yJhjkNz9oj99qL5MVDKkjpVanRzkrM6wv917kDYw8ZfeTH8eD34xmSj3C8TL3TnTZEQX8b5A6gQ",
  "key6": "5yGxhw3f1mf5Un8sEaEK1xLZrssHWcwf77cPhVzKx9LBpbUmfjzBjBhBoKyccCMgMTfoobewdrgLjZfeX217yMTs",
  "key7": "5TrR5ThdGzsvaPSiNiKAvPRNbd7uF1NoXMbzygphcstTUWWNhYZJSWUKNGfHfUtQMkWQwHnYm2xgXVicC1y66tDV",
  "key8": "2S1yxG6NVk5BLgTJBPpjAA7cczutk7p3B3nphTFmwE9G2RXE1yjDAk9BrSLhA1FfFEPiJjchCxX3JuH8H7g869vt",
  "key9": "vyoZes8w7crnxKU79ja5P6mxzjwcHutTM3wbb4LxTGfAwNXonXwakUEnkoDEWKW1AY7XC7kt4cTaB5x26yX54Mq",
  "key10": "56Y2nfWs7hSKhd2nUCajqWBNT1Y1SSrmy74cHJShKicTuJnEaDaSuSRBWrXX6RgNPeBJ66Vtufe9uzTW4fmoUKQp",
  "key11": "2zNVptYCKXX6efFnQA29HYAjTd9QSxGExHCyBvwYJcWB31mJTfuScA6LgD7cJ9eBHps1eJrys3uVV6SkrFyUWpCM",
  "key12": "4RrJDARXFARHeZXUanBZpCtG165w1juS1bfupNCMd4CLUQpV9UahiHYyYybtavbLAbobky4wtfvPtar4zmxyFPVV",
  "key13": "2TX6iyvC3EZifZZspXvc8FkWyyrGqVq74uyoxTVE6cGNk6fSZ56nggszhfwPB6eLfmH557eYwq4hzZdZrV2JcaJD",
  "key14": "rAMJHMrVU2ETnbF2GBoN9HdCQZ21igcGwWF8yNRvQ57w7J7T1VyrnPz17FMGHTfB1QWCL4BFSR8zRALc3nKiKKr",
  "key15": "4S2oU3FknNFwmef2bxXrxLzBTzLayu3Usim9ZbBEKumQvgtwUmxRVFAPLLpCHeRguHmeYSFpDNukqczLxeef2rEP",
  "key16": "2Kt9EfLDVSceLTbb1K5ZAn9tjPbU7z2V9WD3J18pHo85focoXWs8Yiwogt3yyxYp1Xf2nKdbNM8ggyPeYs2ibkrG",
  "key17": "28WMHDe1Qb3NmodrYpCRPRYqKysftKeEc3YSvD8ym6zfrysPLJ1NXrwzXas4ECSxkRxASeXFBk5SvndRVRbVkG24",
  "key18": "5vbkzWKH8uESCbvP1x2K6YvXBwipzujSxNcCrpwpGnXbSC4r8jSHmDVKB9o7MTevKwjRmVTdgbqtfTV4Mxy6MbaL",
  "key19": "3M71BtAXjwiSQG6zSEzG4LuV5A5cjaSiyfxubn1SnZUWmgmGD15NSXAauxVTwi7DhXkwGKg82vocxwgd4JKRfTsf",
  "key20": "5hi39RxiJAnEpKiCXf9zCiSsGdvs14oc3JoGhWrE2pDceSYxYuJztsi64dVWo38WEek9JHt9QvJeoFbJZV4Juo1k",
  "key21": "2teXUqY5muCZR4ZCBQW6uioLyxgYxSyKkj7F9qHNJ4VCtKSGnziZCjB4KcX294hrkoWtD6tffPzrXPYbFegyUgKd",
  "key22": "53EHBzqbqprfaWzhcGU2wi6LPpGM9cMF13noGt8Db32VbLfVYVokatmztxH9QoLgwbifuC9aZVBsyUXHph9FC9tF",
  "key23": "S9KvrBYJXeW65XCDjy9TWr14iGGcXczQVBQD7aR7qxNrZRRJeE8Z8owiVZutiTmipjUQXwANmbTmc6na4XtYiAq",
  "key24": "5ts7gJYTtmc6M9ZFAB3NGrW1NUi5n6eYmDE3PHXPLUYMfYrZQMD5Uf2KZTyCm3mjJBtPihEGpQvAMawKtCUtkajt",
  "key25": "3LzPSAY1zEdokS6uyhB9pdxe3AYrTZeHCPGZgKayDWFGC42XvcwwExrae6jZDFMakKDuZfJBhPAirK8yxXhphFJY",
  "key26": "4LAqKjD6i2Ti8vzvFQDpyE5GX6odMgTFksqmUj4FHHcKTMrC5fFhwiLoh1zkEmh2hWv1BNLKgCv5a3KStwimAZWy",
  "key27": "eBxAvWm9zpY5WQRbyWqV3dpvfAtnbKpXwcLRazTaUmTGEgMUqH6JWY4xB47gb2BoGUQxRLaGW3EQBvDKK4AZ3ng",
  "key28": "4xoSPHaU3Ju2vFadV45KXXWg1rCjG4cLTVsUFbGB6Mw8uxNay6kjUXGMdBHfvJfJBoyCtQbZXQbMA2WNHvo8SuAt",
  "key29": "4PCuDxN2EiqdYevbMvvqzRKQaEbVYum1st9q7yH2W3sJQFncR8UcXD1YgFsroFV9V45hcvQUYPkGFbDurAoACFZi",
  "key30": "5PxLKkXuRyJ3yaq1GJEjdQJiEx73KWWhZq7NsDJsozJzKAhPS4LzuQ58iXViJi61mtPRqmP9j3SR5CCKMthEgzk2",
  "key31": "MiAkRGGUFRhDp5CUyQScSnuMS36o5dUpY5V9dfebhptDWVHRV2BfjJNZ7YdzJVpvCHg3tWL7cjF7h6xQvQmChTR",
  "key32": "5N6LRtsqepDEsaKS8AnBfTfcLHTJfxsErBCnB9k3MXRUfv3s211aDEz1FscXbTNwP5MKegpNGc4VS5xux3AwpGdo",
  "key33": "4219dujFVExu4pUPCuYcFVSi1p52ooYw3NXCc12skV2hvtz5dUAufRVLx3Q9DpNrXp4kcULzocwPZaPbcFJziZqR",
  "key34": "3J9W9NeeFw28cDjHK7K3vqChmGRvT5ccNDXwUMfJ8v3ddDgHPaCWdEkMu9p6WEt3byYUsL2EYr85CptrS2NZExoy",
  "key35": "uKdKeN5AxPcMCtStsEFz6a2RbvjD4ykMhi5J8ZYfBJAemyASiJok6ZRpTnLagytPG9sB2Bn8T7t7okMxLHkdbQn",
  "key36": "4vaQPzBrjdhfVgQqc75K6QT9Amt1oJciUUHP9NHJCJJA76XnkSjts8xG411CYReC3RRGt5zz2yrgg5sEdzRQFN5Z",
  "key37": "5aYdhN7c3T3HH2AuVnEUv6rWLqBWBCgGzDUCWtMPFCaxGuwTiGKr1n7oAUm31bgj3sRjr3pitNZyV4wBiiKnwG5S",
  "key38": "3YcRzYBBmPSR33NK83Q4gGBFm9hPoNzBwmdAqYuWvLZuzmiWr3QXzao6axFoR2SkuHpFk8s1LQwtasCnwHiNKm4S",
  "key39": "5Zgy71nLafRQgoWj5Hjt5yH2x93BZBgDZqx6EbAYPhSCJy8c3gu3M4seVSYDctrDPmrsSXytbYzuxuabgFgFTsWC",
  "key40": "3ZAynUeu2pD6zm3HTgG1g6Te2E8FpxiKgvCdFmEEKDupBek6jMoTGcCX8j91FAgnwZi8iStZATn6jd5cZ1gz2VqC",
  "key41": "64wgNNEArVbYi22HiijmrjgswNm8CKBpDJDMgJt3cKV932KagPJuXj54vwytoWXjsXbDybhishcQG5XttWwWe9c8",
  "key42": "2wN6uvdBd4QwJtLustwJFLJFtXwhka6VnS3VTLxsodRUPRaZPFS9et7CvRiS1LLxiM1qXm7iLgSwvRtDFcYfsVgP",
  "key43": "3VzbfdPfx1gjAia52hgeMq3UNb2EhhYx1ciRRNVAAyodQPCUPwpz94h8nCnMAjFupgHpa1NuxbxX5VHYDW7aLKqK",
  "key44": "4zcyZdkvNyDke2DNEohvMVXVqpTWBKEBjtbNQxH5saUgUXCv6Cmm5LhFTt5YbSmvFiPv8EfU6a5VXe46LY9dk95A",
  "key45": "4MKwvRxbybMYTgRR9aZPoVCyHX1o3epnXE89kbcr22xtCMy1Jb1LrCMQdV8YxZkEfgcf7gaYmSMhc5TPiL5WzuD1"
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
