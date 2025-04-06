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
    "371AjbomLpY9R7KDkjAcRY1Vf2WL82pFWPc7xJudboF6DfkmBYzxjT3qfjzGnhe4keRRyeegLeZ5CpcFr2LqNVhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZtSAmHoPewDTpQPfR3fdsgVW4xTEwuk6K2KbSv5NaDDwkwDSwanj18sspsBjoMNGQunivTDNb6AdihGYzYoSDuh",
  "key1": "hb2pAMpGPWXrBGuWYjP91G1yxd6f6TLkfKjyAC6X1hsPfNipDURgDS8Z97MJii4oDru2txPNBJ9zdipXLih1sEY",
  "key2": "5rG2t8wD1HmRFUNAkdFPBi3x845jAmbGwRPcHshPNCWzuZzbvTNLYU2Q5LEwpn1byU89s7sGX1W4BPi1e7QSGhsa",
  "key3": "3oQt3M8Vr9aYEEnPSrZsN6rd9uHiHjsfZurSE7Wda4q88JYQRG7uXWCLa6nmRAmM95EZrJXqBW3wnBExDkJQpsZD",
  "key4": "3me21eMqUaaWZg4AymfdLd9EAuNVqo5o5n3UdiVMtQGQ8Lw4Zrqvr8xTQzofcJe6bFxrLA6sF8eyxKv1Xu4pBLbA",
  "key5": "5k6kg2T94voyA9px2utW75ogBhhFjCTfMWifYo3oer613CTm887nymcQHwZXzQUab7FdpTv6G3XQExM32dEZQgjQ",
  "key6": "5VHPzyvqYrNyizQMzgNfUiCXF8TXX8Xcb8E7kdG151krsndcPVvcwLMM2VGsKhYvddiq9qkdKysxB7aoHeyPm6d",
  "key7": "3MHWGZFixTWcb5wDUe2dL9jAwv9wA1usDpfCtk41KpjRfe4Y96DSbcgvjHV7988YuwFCUS2gSEfbQzRVipFpd3FG",
  "key8": "4brek4AwvMcnnXMPBfS94gvwCKvB3YWVTn5noWEbFrSF4XNtc4zPGvZe9MQk7nMXU5zGiRhUHhg9VxwPcXpnn1PZ",
  "key9": "5gtnBsmQEgJrEivLemokHJ1h21ZVDqi5QrkJkYz1i8Frz2u5nQgxH8mumZD4FLyHx76XBy4EpUZu4nMggxQMivUo",
  "key10": "63ma2oRkNcWbNdbqyw3iRXnpy7cCTMtyCGrbnKFaf2bSpSgWoH1MQCkNa9o3sqxzMiTpXpjMVPcuTtY5sw2zZ6ST",
  "key11": "2BFkpWLRwMHFfwbVG1M9jcvRnTqD51srLfRFV4LkaMjZjM8bmQUMYSbFikRVE5uQU4SF4jYTMyJZNrYp7CNLKA9u",
  "key12": "5NoqNYG5KEPPqHpojvQpPXXMArRvwbhixbq5aJ9REXSWbpnMgC1dZVABoU57h7NygeF6UpqubWwUJP4BFZcYDqwo",
  "key13": "4d9G5BHoHPChDbZHYyyhWXLZzNzGjFTaTt6KNhqDMwpuein4aywksmJNMq2mSeucNTAEuU5WmT4u86WxH1ooURF7",
  "key14": "5d6EjWRogWFtckQbNDYuPUFpQtUPo6FccDajKoQz48ycUSnHsXweppvK41YPPZjcA7m893UHexzDsu62zU3wzQsv",
  "key15": "4GHxubtohjoB5FrGaHdXLuuVFHmWCihLrbA4JVVHKDitEnsYNqmjAZadyExmfpZsBccDX14f2zsW71Z8hSCpLe62",
  "key16": "4FhzJhJBZ4VpwmgLDAvAYbgMA9Y3XfGHz85cQidyaD65fYPcy7mBGJ4a895iaG94gAzZEyEpnUsDP9coDrmZXBrr",
  "key17": "RHHGi5JroJdhLgWWfnh6CCRQRoFEa2X8hqPUciQso9Rk1juzKs1dCdgyqvnwXLrh6RtCctX2MWod2LYAeKfV9vp",
  "key18": "CUuVPHuH9e7ziDp6Xa3PRDTQF6buvFNDRfCUEJwEHb5AczhmfKyWmTo4afFiu3Z3UYnvT37gTv4RVFVEXSuaUxE",
  "key19": "21ZXpjgK6ABkExisHeQopa9pZ7AvaxGdrLBy8jjVxYsYAtc3dyfY1tnat5XLzgJMSM9ehCXcgLwoqot7fJTzoW79",
  "key20": "2XypL7Kcc7an789o2aQM9TQ8C63cUarCtZTMrmfNCe1N9hdf636YthQd4DXdXFZ71eYHkWRPN4aRtmWY7f16m2NX",
  "key21": "2ektPze6Nnoz6wNSGoEnpbaM7KGwDL1KauBdvUVYT3F8AZb26qXs5hfa8dyAVZTGCYqJ6SwYgKMBX2mkxXboitLM",
  "key22": "2GQiVAXxpKt88arudRKT77J9LCr2i1jznTcimAoYFdZGDg4k4DDpJaHnekXmLs9tkaUr8HYhq4tebJsNRZKESCji",
  "key23": "3ziYEiLGLmS8Gptqxn6oiRAHBDjGXBbSWnmmknBYk9ffKHXf8jELPYr7SBjrQ6auUeZyUcaUhhnU4LgbaQ4cymNt",
  "key24": "Cg29kdzUstBT7SfMZ5hVgZgxEqjtnk334JtZ3NCHEYDAiB2BgboG1JTAGpRSDAF5FpuBQfvpweDU1gwt8r5VoyZ",
  "key25": "3nvsDeuU5vdyHjMWXfXMV2F4q4TADQAM48Z6etGERKEBG6rm1oAWXiY3muWi7uuqMZ5rqikXVfDAhrn8joJmq5V",
  "key26": "cxcEoUHjJg5sFq5m2dKkpAKdfpv8KPPJFUcXPRnmN9mbrMr5cXFrubBqsFXrbhrioYhgpgvTEvn7Vh8ZeTnnune",
  "key27": "4Eqt8XZ3MiGxYqYtjXjTDbuiq69CbezwKU8zXQQqi7qZNArKHXDSfkbcUGjuwzLbSMSpwiik1s2nZvZ41peoF8ZV",
  "key28": "3FJJ3Q52rZvju16b3vq9o5jPaWnL6P9su7AkocJZHywK6vDhuq4xqAkSYUZU6pfGrrCNiw5UcaQvhH1UtkLiRvFp",
  "key29": "2J4Z52X4TcBxzwuFXCRVPPX5qtiPdkgjBcKh5LW7YLnQeXgFnFv6ZFCwPTLzBTY6dJuARaEZbV79qo7UZJBBTKsd",
  "key30": "4jy9HdpF5EHgdh2kVrHTekqHtN3kZ86MUojKkqGMrok3yz1WZrAvdig7PfrSNUfywq92QuZp8pevAxRdKTcRP7Nx",
  "key31": "s2KbNGiFLHYcynsjUhUgofsd2DfNxqWFiYvKV1q48DehTB9TJecTrqeFSHmY7B24cqbDLg2u41G6xxH4hseYeLc",
  "key32": "3mYyczhyzputVx7gpCanzk9Em66TBZYAechD6ynWBfgJa5cajibyCCdjZheeVc6RiPdqLwwbYiz3wZtroYzV8XLw",
  "key33": "5Agmjat7wbKpc1DajjX8LASMskFfjZLNu3Fzp2C5TFMopUvfAVRLY2hEvMW9aNCzfDVHSUjrY8VASW6te1B8Dx4W",
  "key34": "489Tyd7CP9Nim9aC2dUH4HscQLvkrTyNPkgwS4DW6ZuD2MWGKwwZTPYwxZZP6mtTfSMf4wMQgFe55RwFz9P7TWWY",
  "key35": "4zgSjz4A1VTTsLP4Paai5LwcdAy3iPkdZKJTu1YgGuuVL7RDpnoRq8M61LrTeSUg2dqtLQQugRUyqu5E8z48ow2o",
  "key36": "5D3HYCbWktBQYWjbAhdQpMyZoGUuZ3Vob1eqQHZ4a4UUJY3RJYv7ThhuLkvu4SPYbx1tnLk7K9BmLqpqM9MTmpzq",
  "key37": "2UEWdXt56PgH4ZjKDvidrc9yQgPBNn3kDR575mNJSZoFTiQGKpuAra7raWe8NRoN8jtmbZ8n7LEPBynJJnjDzS8W",
  "key38": "2FBmkKy6VZiJW7SZoY4XxXFpsWKHGVgThsZpZbCKTWKpmNXYg1QYHEAkGYc5xbVjSpXzH1xhBpuPiovpmTVEHvyj",
  "key39": "2mYoaFokHWjdiBwrucsfAaTnRu6XYsii6KiYGT5VLqEZz4jiQqxB22M12bufNQHFD8ARMnjhXyH3UtvMjMJV85Vq",
  "key40": "38Yh1wKByQPF8yTL6ieDAijhYoZAY4cDfnTathdA7npCqmsVvTMDGbeaegzVwVQE5N3fjWpd4npD9fHfSsVs3ovz",
  "key41": "2A9H7KBn6ZbbP23kpuswMgQNVihaPxsmyxP4SiapAS8Xvk4hz8f6DTPGSqtYQGFkvng1YW2mF1WkTPzqBj6bQgFQ",
  "key42": "3ajmpCCScw9ukJmBi47VqmWMpXuVfKh2Q4V1AFcXXEc6akmbubaVAiLiqYZUdSnBXjZwyZPeCoZLH266EbFe2WA7",
  "key43": "uvRCwAzbjqVy5urDgbgGpzLXVEBcxGj1b1YTHPC6RcWK1pf9QwUkk4VMNuEo7SKKYMCRtqfm4YPkVBna1hu1srv",
  "key44": "3Ehk2PnsA8gj4UTViT8jw6SkGFJdHDZMzLvfQqDqkXh8pxKBcA6QS1DJAGVB96ryEmUdrjkghkUNVaJzzHES2WYd",
  "key45": "4jAR9WY8TiBxepMEGUELJzfFc8WvwpsK47aESHhRQLm2YiNuMyqWuphtTK5n5MdeELycvRQzbnSyQEVFpieDXhyK",
  "key46": "26e6LPyQGMo2ym8jjWbehaNUPhzFF3URuJbeXu8AA9EHcQksB8zQp85uzHjKniBQT71M95meoVaGUobHJz6egJLP",
  "key47": "2wdp3zyosTqfxefXGvHF2NrEu8N4Mr72mZrejTHwuKp2EWjip1VWnM1mryGAhYghkLfRtiyr16dRaypooeJAEoZP"
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
