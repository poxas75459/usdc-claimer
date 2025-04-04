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
    "52a6taR51zj2D6pitAfmyKHDHAamMx1DkFp2W1d8ufkafQPfUwKrniMQosL8b7u6CrjcsJRJmqcmnCheQkCpBTc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635AqykS9w1msRLHZPCjfcu4GFMpE9MCHcEEDZ5yuVujs7QCURLHEk6trTL8Qin5VxCxePRPXYLmp4XGe5kh3XUx",
  "key1": "4mo4CK5hbavuFTioCybvgkSLWy2NTn6wyEEowa4Qka1faZiwubmKkEMJy9er3tHjD6e8qJFwDaQ8fN1vD6hYru2e",
  "key2": "5rQwWCTUFChmsJJAa84BhmSPHrKJ5pnknFoXvgWeUehBW3RVGCuYrjpYjmrHVakq92Bvkpgp1EGJ6AVt2kftGkk6",
  "key3": "2bt4WruukWQQUWgA8NhH1uNUffJ2G5ai2TZ24j8WxwHT9X3wwfcrMNkstzxsPuBW6mDRQtkQUFoHpZjBBnQJHVr2",
  "key4": "49B9z7NwLQurvviovrxbNzcJUpLREXDvHPR5JcXr7oAJkUgAuW75xa2pGJBnpDhRwxEubvQrMvq3VJpbFPTvYjWU",
  "key5": "3x1wPos8xn2t8M3AdaT6kYJh15Yamu1vGfkvTPvo856GSJUnAU866VC6WwSvtJjamrLqEeDS6PqN7AUUPf9Ds71o",
  "key6": "2irppgDkmoMjm92E8PmQ4xD2W1ah9gqnGsaXTt9zxNmJqCTcxLESbefc3YL8UsfZzLJFyLETMy86PrjXx897hyn4",
  "key7": "3fTT5ij44dSLC6uVCZqFwR7j8RL9pc4NyEQiMJ4Pf7oSPyo2R1UJX3emA7Ntew7DckSGsgCngaZihgaMq56hngqp",
  "key8": "4pmpt3ecM2rYQZWrio5WHQYEEDh9XrwLuTAXFXBcjrfsTukwUL38BfG6wV82znKTYzx9PymZSpAR6F2YAag1V2vi",
  "key9": "21KgomAuxj9ANJHRcfLnePThruoSUzatkZyBxPkRNXUhUd5BquWSKyVbYuWRczAuBScB7u2t85Mjkh9xvBJiPfQY",
  "key10": "3wdX5ehE78ueidUJruWV8jVw4qk7UU3guLd4euh9bLP71GBPnPeCobXTPc5j5G6i5NmCyBZbX8ML5Uf5nRD6yrsb",
  "key11": "3wLGCdvwVvQ79c36e36S5pGNfRGMpDzgVLgJekJVFhyKK1XRBEvEYiKADmVPZcPVyduja899mkrDxp4hHQMDUFyM",
  "key12": "2kfTC6PtvT3Aa4nyGHd8f9QwLTMf8xynBfSWoxq5P5JcUdcF3RbgG81oPz2cq4ytjL82cysw3yMWyH3uV7qJZWWk",
  "key13": "5iogwRsPvpceyXYYzpZniDgv1hwFQd8hUf92ELYt4VcuD8LDDHh1BhLEFPvHguFAqmpsambXMBHSjr9ZNV9XX5oU",
  "key14": "47MwaPkzxpPD2yhAm5vTanrsCD4BePdja7CHdHJxaBiCUTCrksEY1zAAsPcmZEHK3sAz7nSciE4Dc9xJX5ChnuJq",
  "key15": "NQdSaAnUYr5wfQQ46Jz9QNQsNNJuTB8fwe94QmTAhq6Qno3q8MBrAtAEdsPgJ4NkxXLHmtJj5mvpoScm5BMy8L7",
  "key16": "3WQGQy7bkfQ468eP7uoc7jokc86ob6iRxSfPWhCSJMCZu5Ekvmix3Hw8QT4K972rFapNQsJcQMSzULuidGJgnPTj",
  "key17": "3KFbicSCjp49yd7sQng22hkSQpMqidEg787Q9hZAtUaXykUZieTunykdVcNPmtqc7ikr49PitRMfa7WBRK8hPzkA",
  "key18": "24gdgGBC7RcoYkJSVD8gypz4jZLQRo2ivrQFLBF9V1SwsvR18Mat5qRjwwemBfK9bd3k5QdDFxRZKSt7Uoh8567i",
  "key19": "2RTQsKKQh7MDYShKgroQTn4AiP9WV1gaZQugWgAbT9kxn5uZtTZVqpvhuZunJgEphnDhMkHyFR9nuqqL6bEWaJmf",
  "key20": "3bsoF5ur6BnDkqEaWXNjR4HTBr83R7HY9xpWnctdn5pSCyviK7jDuqRPFpWHuTbELtGGy3HjBybkUNgHZqFc1hSt",
  "key21": "3gcwEzpbXvQFBES542qZcEANcahRuda7x9dAxi2KC2aArhB2vaZfWk6vRGdrhhWo7XyqDnFkKMMdcBeah1h7TjYH",
  "key22": "2W4998iSdFEeZ9DgXVB4NKf7M5YwEegJNnTpVdyYMn9WjfPJZ2zAYvbDB3ttx1jbciLcR3CYdMZnjYr84n45Vhaq",
  "key23": "5AfQodShQmJQjocKMZveGHsqmJEoPKsP2NuqqnCHassyPJNTcUPFAVc8UDcJwqC4aLjBYNNeFyj1uEnNF5oHjbQF",
  "key24": "28wmgg9FopRXqtuwBo9CTBEsaNBqtwfwMyu5m2epuNt1VLwrHeKszgu1Eyge17Zi58iYFrmJHt8uhNYAgnYJXCMM",
  "key25": "31NhYB593jisW7GzGLritjyRd1xkGrXkJsWJvFPdMLEKtgzDKPS8P5F922TW4sDSKCrMaWmR6kBrfS2tsuQyBLse",
  "key26": "5doktVarVHDE7Uhfu55iH9AmLeCr2b6Q2Bbws5WmQxMuKyJvQGA73aFqCfNnWpZ5TpaRtxJmb4RRgREU9EKReai5",
  "key27": "3jzYA8FPeg56P4u4z6uPQsRMLjpgxdhV7yZiSFEhF4gB5A3CS65GvHJH2jFSxVcAqD4zmRiutz4hJdHR189y99EF",
  "key28": "5uP2DMbRAWeticDiUYcBiCwuasHNQENSicF77WGkV2jrrPbAKz43gfxWPFFPooUX6N4KT5ReZEHoWdMu2jrjVkct",
  "key29": "5rwww2CFpYYyvS4jWwEkzYNBW2kgguzEZzY1yE3uAopsr1PaTw1CuyXtjEsgepwqucHgRiW3HG7UbHeEgF6C87N7",
  "key30": "2xMWzLr59Vx66g2i23K9z9Q2rSwhrsYtpkRyxbavxeNYjMYZCrtw1DS9hsCA1SQgJMcoBg8iPZxjGEsRxzVViFC4",
  "key31": "1NWnV5pa53iUgd9csBSFmicd1h41rC9v2MMF1ewc3GUP1ZTAFCEjzkG7qPusLfnJzGktoXX8DanwNKYKqeJmBbH",
  "key32": "fuZtrRLA7g6iFddgf94y5ngMx8n3rndABSoBo4U4AEuFVXTdkqdW9rdkDFvBbr7Zyptt74VVMnhvb9QXAKdDgXf",
  "key33": "4BJyEmbsKJEgLeV9Z7VfRtkqQbtEK9nEg6ezS3iPKnToo4rYZZ8YeeCarH8Dt1Whpq37UAHc86dbhxWvHAME43XE",
  "key34": "424nY93eaMxtBFsNfU5gXykqcYkkrDV3xUR2frrMtE7MxBj1nEb69o1WDQJrHDiSRVBfexsxyaYM5gc4GoSuazJ7",
  "key35": "2Kw1uTuM3nugo2YDdK8a6gRzn43FjW7bAtH8AVsUwoyiH8YVLW79Fwz9LELwMJVnJCzHKAfrFWqiDgPActuyLoqy",
  "key36": "5ZShCRu6LhqUuSTeyUxByJZMo47VEpa4tVKEjYHBigfgqjXSz5m5bRHhh2b3Fzgu5t1frr2WYynQxbZL52NiLD9P",
  "key37": "3HVLHYnCQhHLVFzTsfsMKdAWYdaSPEfyiq9EDDDUrg2DyDQZcEgMWte1iXEK8imjHcvhDsmJr1yrrm94BvkNSj5A",
  "key38": "4M9seH3C1C2RxkamXjBV73R24wKVGgTKQZnuSEWS21VGQHZtQ6XLF5ngxS98VjdNTrB9fx38Jyv1TbhcFJM96cCw",
  "key39": "3gA4DPCdw7tqA7QgPUyg9ZqVuSRdkDcLJoMCM6qAU9LcoPnbRPdSwrCX9idNiCEH87estoHfPocy8inuK2haXXHs",
  "key40": "5n7THTRCFpnZf41S17cQyC3jx2RWeVSUzcLaqU4Y3gF9Hw19DwCCxoGQ8yjYL1XorasKE1uxdcvpDmvMAo6k8EVG",
  "key41": "4t5QPMv8LZrLV5uci9fS1PH4L5z7sGBt17i2L8unGtyvHipWqh1wqywquRw9kBZM5ukpGqwYup1NNUVAL5jYP8um",
  "key42": "4UKptomFmkQrKWwbh3Y8YV7RgpCfGJddoYtPkoC1M4qCiP3wxGPsTern2xh9yQqxeffe99wYBwsp9ge1Yi8WC3pR",
  "key43": "5uQ7jqJmUKkTcF9iprqt5LXXjKsh5oiYZKU3jbAJLei651vKYiQGG9bqyo4sfbymKoqeAdLtS4NHjWfuavLLyYEd",
  "key44": "53Gueo55apHBWK5Zc4y7QioLRTKVGLXfN9g4W4nwaWsfYccU1JEUaEXDpSdo6Pfi6vxVgqmneHZFjEHyaU4QrUYK",
  "key45": "59yzWD8sAfiqVDHbdXtQJyqm588wXfZN2snwQvKsomo8B3dsNEPo6zXgqXKbiSzRwDhpEr3oX5srnfvFMJjWJCfh",
  "key46": "3VuSWvXMcin4nBrCqjMN4N2RGwjbrL3khy2mW9uwvehwhb6Ldp1m7dzME5LJiDwLjpwgdqATtwnuKjuKBtsfWKzU",
  "key47": "62X5G62RTNXvAhxUkqwDe9PPorRk4p92JxSMhZiREbfcV3EL7BnqCKcvZjKwxeGqVUR3Cot6r7tXhkgXKHxUgfBe"
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
