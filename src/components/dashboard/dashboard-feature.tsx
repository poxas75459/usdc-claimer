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
    "4ZJUoVmPVjjf1aK8LY89NLWCGEHVJQ5maQuG1opK2ieQtp79PkxiBPgipBS6dZCvWrYA36T52CZn6P5P4t9TPLfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isZruXGmEc1ubDQNk6oFQrcu5M1xdSjBFB28xMdVTDPppiEzY6mEAHhPxnb3F7sqvzgLkHy3HcgoXWkZsXehjh3",
  "key1": "5hW9QDETfsVz4GiDppkb3tTbcHdZodvdYYMkWpkHCdBUuPSB3Y95RbgfbdbwsrEUUsBK8RtXn61KJpLLEs69RrhL",
  "key2": "5DimSh1HvkJdK6YKssXUbNVtjx3muRuKMUzEouNZwxRWG1HykwMDDMUXPuinGStehBYYrJVuzjHjGEhXtCMVS7HX",
  "key3": "42BBna1N4K246iNLrLPgN1ma1Xukr6HM7AkcxJsH5SjG1mhPejxEpa8d11EBp6skre8C6xMmboySjYYzkTMMyCrG",
  "key4": "4eVmAugPkin5U4NxXmyYqVcjg5pYaUfSxgZ9gQLadFLBYSSzJGxV1vyEBzJ8iSLqNYpbxLBMerCBj4kHYKY2C4ZQ",
  "key5": "55Aw8qAsFRxXexeCN7g9CPLikq9me3gBws3PpsQgSNhffaR7GzmwYLCR2F7bh8M5uVHWsnWDm787TjY5jCb5L3YW",
  "key6": "5nFZEH4u1kCCmjQgvWbqF1C8EePAuEpMvjWCJbXGp6iUhhKzPuAm6HZDY5YneHn79DoeLpjBCYUGgzt5PNdQoJYA",
  "key7": "4goZXxShugmTjnXjBVqugABJb98Vsi7KxjR8yusom6uSEE2nCLzebkagb4g3dA5QPKDxzMgP9Kweztsbr6ZDr6qQ",
  "key8": "51D2pGszQQpG7TUukUXo9wuiRaXguCTMC3BcFGTSA7hndyJjWvw8k7WhXXxsKvkCYcCh3PYs2XXSZdzN8324uwH9",
  "key9": "34J4fznNtt6cm64jnv1coZwzoeHtQLECd3TTyb8SQnB1gxXooX7yopjiE67i6DbzPKzhJUjNykGrxmEGEa5vmqVp",
  "key10": "3ApCn5yi4qnerCWyLwjT3qQUHdzZQEt2C3zCp2dh8rPkatQzF52VLgcjR7Gu4ByFTyVynAFbeyhPGtMiuMUZjHrb",
  "key11": "d5vh4zW1ag8PCVxZjm52fetyqxmZzqkdWHcy8ym5vHzi3MqWz1nMR8TRdsutX5NMSwmETcw9mitLDfJ7tzjRh4U",
  "key12": "7aLFYSHfKuLQpDhhwpMXg1TR7U6qUmMxE6rRz148NsmdYED1JRfhqv6MXUsuZdxXsytLTN3Cp1A2X4S67JJbW5Y",
  "key13": "66d55ny1R6DSjqDtHUau99bGcghxsjMx2JTZ523UzCSk3zrxJdsTQEaaWoTw2AfgAsfZyJET6qqzuaw4hZwcjdkL",
  "key14": "5cd4J1fSnfanVv6184Wfz9HVZfyYb9pmB12BxTjADgQ8CSXbeRbRbkRHPRJkE2bb6eM8me5ujjsQaYFpKzQWfg5J",
  "key15": "4n4Wmo9zyYsZUtk4UwacmjnKnQx9PntNngwBfkXU4YFbd6B1hbbi4wcUokYF1FqHGKVHUYNJN4e85WTrFkiwXrtr",
  "key16": "4pRSptnKDRHio5n4mkb1BH3xtpk1a8uKMtvohD6kJuGEyVsRapMiNehySL6xiKy6twZcHxw7ciHq35gsEdE8ZfCi",
  "key17": "6533d2Y69ypNZB71y3Ha4441DtgKwKE6k8wnVJxQ4PLxFqq38GhGfqwGsnwWLAtxHdM3LVovNHH7raN3AEK43pnL",
  "key18": "3Yixk56tTUU8UArxyga5PBCydevCqVf8dV8PF7HGx38tbcErDv7LJQhPKXdWg8cbfLfeJVP55dRuvHB6Repxj6Vz",
  "key19": "2nvTrCJQ4hSgYGWaZv1C95mQFSTzbH5At7GBj3vxxragvZ3TVouwS6W3T6no8BAbMZizj5dUnmXtyzqVubZWgMDq",
  "key20": "5uBBMSqNNyVyuCB7EBJeZ1wqn6NbQe1UDaikAeKZSUCrfQWkSNG7be4znTFbpyvSv6Fpd9fCruqivM5WqfsSvh93",
  "key21": "5g1y8f3nrg6m4234pJNto9dbV3o5MQ8Hh3yxNjnQ7DnxRNRtVkwtUQShM6ASjqeRNepEG1gqqoGgAfhafu2F8nmZ",
  "key22": "4x2QcYQa8By5ZKkCwDzNEhMi9vtXWSM1cbqSd6CFqDaYWUEcvGTeukouaH13xVQyZS3TtjVo5voKRTeTwbfE2SoS",
  "key23": "23SqzBTxhKok6whM8JCb2QrPw3ff66XCy1uX7a7xxnzqERw6SsJVgcn7zh4az9s2R2NyJsbC9tsQ1Y1FghKxHEeK",
  "key24": "3KaQTNRXs29RPeNoLT2jD98msMzmJDNJmFr1edTwsZA86XEEw1ibGfKCd7JnmuhJ3nL6aD8rcc9wgswCCpT8yQ3s",
  "key25": "4tFxAaouniiDoZZmKkfNWwW4JxtEkkQmdiNQMRBRV3X4FbXHSjw8VDWJ7D5gH51cMhocZLbtPL4UU2tzyBsm3A6T",
  "key26": "etYBtDyHfaS8bFwco2qBNrEWS1h8zB3n4HhcrQiybFSTcVzmsYfuJitjbL4tmaf4NPswVtNv8v3adRnxpa4i5je",
  "key27": "4bdiMDb3KqcVEPkPdkdd39avsWtu7tpSdMhe6xReYM2osMCMtD7dE8x2Fknrn8EzFCiAxmAGUcQkd3mmzcAJ1RWc",
  "key28": "31HZAqzHNDHt4KC9kbJQ4xyjia3NGNUuQq49t1oC1ggBxeMxFqVKroS5PCMS7ShRyhmPvFQ29zMtxA5dfqZUv94t",
  "key29": "2LjvLd5fhGNLQdZLg936WWKkC4PRHmKgtPZiLUx8LMaynBxU3GX8LdRaVnK4DRsE1yVe2wqawU83F4hcm1pWDQtG",
  "key30": "4oB6kKKkqBGP2Vje8ttZdLmJ34PUFRZRSkkTHesvRN2xJYxuTvaZHGNey75shEaec3sN92dbEohb6FL9quY7pv4A",
  "key31": "4yB3UAQepkby9UDSE36MAY4Lx7aTDAHBm6j98jAeJYJ9iYg5sG5X6nK5dyxJeVZkcr2Emr1W2HrBJY45eQvFa6gn",
  "key32": "eQbpKBw5S3r1sadNbSWSSWv5ibuMdHtgvAwpNieWKNVtpHf6ymH9g46QeMQqFpxzjuvKiC66HzpFE74JQAPkgip",
  "key33": "54j98pxCsoL94JStQe5TANLwGJWMV27k5aLJtzvARc2g8cbFxrRp34NGD42ekiaMUGJkTnXCefr4A1kXrL527wQ8",
  "key34": "4VbFTaC8GwZfUDbVqK5aCGHg1FEGgPqmKU6KfYJfxV6qABX4z7nJFM2CTDM8Py1wftUn2XHTzfPH8fF93oMw3CRC",
  "key35": "5d9kEkCvbciqAkUJYEp3hRQcnqq5T2muFXUHr1dfRooucUBeprgdRRzjBodV4pkxAsAPPnA2nVFv5UDScM8a2AU",
  "key36": "4GeqUsqhH7mAPsYTNTDZYsqLwEwgV1hAfGMXZkgQyB57PxADXvCrCZzkFVia2EeYdutdGjjVRZhVRdrD4ag6DzPN",
  "key37": "3cyXe8uM25iRrdT1kDjtvJwHGwLtibcM5PaiPUR7Ugn7586LzZviasrPQaftyJhSWCLUvFrMcLH4zcZA6bVxZB9A",
  "key38": "2HeFToPBXRmHitPg5R7qtephxeuJeW9KP3fR8QGTjjFVcUyeuWYjAR9QPFW9obtTajusyLrrpNVXTX6KnmPm5af5",
  "key39": "5MqWo728JG38NqBctud8cX4fDWnZjsv7jRUqKHDRdTRhptetU5FVejhmS4U11EV7WAsa3R6DsSvTwwMq9UGcfXzG",
  "key40": "4DceFhZfFREMwqh1VwhrL1zbP79ZArqSN3doRmBLGdH9GddHV8onirTbgh6TCV6kVxa46KFskQy7vRW9pFwTAh7o",
  "key41": "4g6PaK12zQCaM37qficaPjgNYx48XcQpvL6qsbLs3P2gCtu6YDjDFuWjTkvQz2KHF1VkaXrU4B4kFE4uEwoBkqA3",
  "key42": "3ghiraNUjVkLiHEqQ6jXhNTojy1bBkRqYAX7cBsQ7m9TYYDdap4b1kahZ6BC8FQuSBQeF4PR4a6xAFfz7tGvEZm7",
  "key43": "27zxQNwQT88XnGDMh3fTPTydYSpjMu2Hs3f6iGJDaJMYATJXNjdTZSeXpm13NspFJ7CstVs7BW9ftSNwmsGCkVL8",
  "key44": "rSH6eKSGUqHzAGrraGDdpikr6KGpmUzxzKpkLoQWoV3rMjJ5Bqq7X5eaqPKYpExtszZjaYPQKQbUvVhw4SWm8jS",
  "key45": "3i4Hc8pHPComYJGqVsF8CGu9FFCwqzNe7XpLjugsErx8an87AjzTXGELLEke4WNXggjbiHvicnfHT3QPqeknQkgs",
  "key46": "25BkM3zk3Xbqg42FuyZDHa4RN1hmq9Sc4Vx7bpeN2ET4MfGKdrPjJekoN8A5fkpAiwQGkvWfvWwwe7ikkKsjAiK7",
  "key47": "3zNdScBaG8BB6C22xwFEzzGo1d4VCvhgCLn2xRiaLKBrskt1Hjiypz6bk7Zv4UPa4ozCxK7FrjFz7KUdJZHvpLS9",
  "key48": "5Zee8HegqicPn3H5MBBrWzFmT2YqYp8Fo4MJbBTURm46tn98NEqbbuPrJKGi4JMA5oXDMkSgsnFT5UHy6aBNumL7",
  "key49": "5nseMEX9R2DhxcaNCU16faXvZnmj4V9oSBiZ8zXFxf2XztRXVGD2MKTf5CmkyH3XFGTtC2r9tLww8gdfHpj5TJyq"
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
