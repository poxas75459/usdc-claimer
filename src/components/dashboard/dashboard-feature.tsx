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
    "WZ4kxE75XmmQi7HTUeQfrfKLbpgi6b1CA13ebrzbpE8yWTBesmk4vNquMwoiseiZozgsTrmeLNFnTJagJnUvYpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBu6DxnYDckp7htorefg3u9npq5xBPnqR3biknTs7m3jjYd7d1bjo4uVNWtPZCBhjowdgRZvNHwknY4gNVjtPTv",
  "key1": "58sv1NZXmDAQNSc9DHRujTrX7fyYqjGjbUrimKohpQxUgkYYbo1dhcsjV74biquSZeYTuEm33qGwarR9SBQgWrqG",
  "key2": "5GrLU3XLdsj9tu7JCFPTajaQAef6PceQ7MQJPdYiuii21VoqhBnD8mj3EBf8PAzr33EBJGAwgAq7wU1rJZyE17de",
  "key3": "B6kLGhC5fAtrbTZBHphvbKnKgTYQSji46Xb6uXn2Chi6QocwmQckU21BxnQfwCAdT9D1YKHbWi5aeScV9JaRH3m",
  "key4": "345wZ9F8yZG71C1kp1BrxUGKhUvKNcfMQACajEsgRg7mDfNSpMiRg98rSmghxx9BjJub4b6BMmLNCkJnjaF4rEC8",
  "key5": "2jQxyxebCdgqtZVFkYnQLaNNkL9mze25QmGGnz6SJerjWve6Zuxcz16okYXBUUdsWSYW4A5c7vM747VeFhyjYegc",
  "key6": "4GSB4cRSSeF91TrvNqdPV3XuaPBFURhJ8RjcT2WPV3KUvBmL6REhVSmpuLH14orpinzE7e4QMUxdiQtxRkdHhPaS",
  "key7": "39AP1D2hoXyFaZUpTXwxHAQvjcX3oP4taBeJqUUGjy1WQXoN8RgFwGvVyVpRLiuUQh54FenWy86PHKKH1FD6PS6c",
  "key8": "4iwkMmV5cSpYqV6HirXJHeHhfphQnoH7KWuFNmmxtb1xW6KmDAzs9dgnB22w4A61Vc1uDGfRomtgvaykn3Miguqx",
  "key9": "57gbSqWUzvmnGxg9J4vDSnFhbdQ4Fo9UoT5jbUeQB4cBu3MPWzN1DRvs4WJfbaNbwTcqwu7jwhv7FuRB51yx8Mvh",
  "key10": "4tD3hkAzYoMdjeLTeQZD52BmdfpxP7WJoaW4cWcMcrj1EMFkRkorprYnP1YtSV4hW78aZpcqbjBd3fYR7NwvAM4z",
  "key11": "3e6aoSoutLUSBECrJsixhfKsSTfLWYSkohn6hLcgL6DuN8csiUVcJoyz3eNLKhRcGz2XdqqKswwBz88jC4TiTskd",
  "key12": "49JxHKcK4vjJVJhQrDpYMifb74u6sdBWBEUnJT7sWfWKH1nRSDVB5g1AjcaUEyZ1KYBDe5zrLTuJGPh7Y7sW47EE",
  "key13": "4WWJKHUvbHxwrG6kDdrmxiYYmn47qhJXo87HK3zUHQnCsYL3jCq43fpVaRDvLkaNJKh1Wr2ZzJVXP8jZVxzjvSkZ",
  "key14": "51y76bo2SZZARQLmUwC7NHRkgarG6L5oYuniaH241DrVHirrpYBQ5B6wKUZpKNMj7iBbXFeNNYx9nJkJ7Ujd1H28",
  "key15": "5MkoLx2x34wdHSdY9dcRw9StdPNVw9Kgf65Kf8LZSkUNHeAedcnGghrnupBPZjs4axuSsdxo57mGV2ppqhZcWHTk",
  "key16": "5BxCny9tVUi4Xu6tcKVxkaaGdgobp8mUAkppxTKqhs114gxf9BPDKs9LmdDb6hizZDJUD6H2Sg5Asa1u5mw33t3M",
  "key17": "4KgSg7G95PfHBNcvF2ra9eekqP3VWiBUyMMUW8cuWhJJXehoFQZycEjWPqHXdtNRFveMSDM3tDmqcnJEPvUb1XEt",
  "key18": "7fhdKqvsTaZ5PqjupFVbNUNnTrWEttBm6Njf7DiHDaEoLqTfS7e1dWFkTxaw5yc4BSU8yzVFCQ2xDbovbXXGhGn",
  "key19": "2NqW86MVdM23cNM8ruuaiJRHNqwsEdheeyn9YMKJjh1Y68Nfa3hihQmiZ8YWPXRh2hKNZLKAx4QdXqJWNRqz89KU",
  "key20": "2vL6uPbDLSf8TxExdqsYXJ2dHaU1mjco7eutuykUcrkuPuyj9vzxA4LgnmKj2g37XntCiC3jxwNQiTkd4yQEqget",
  "key21": "4sQdnmKY52d9huKjFgndLeiTKvYaHafQdhr7E8xiiKwcFivgEQvRFXgLhqyVfsAf2Xndjg9t2sctRWiWoYoy7GYT",
  "key22": "3wXHgc81fcT68vU3ECUo2qfTH8qcg1Zyo9xMNTr2Rh3aBomJYcaBWexhHJH8f31ph7hVKutdwZH6Q1MpJ2V1JuzQ",
  "key23": "LddfYb4hg14JAwSdFRAh9xHs7BQCvBaRJeK5vDzuCTeNB2Gabfypin4fNqSXDixSw9Cpw8ERDc6FzKSvvYBvFFC",
  "key24": "wtq9MawXFczqqVNjdkZHTuGFKkq4CUKBGByZVyWnypWz8dL6H5ZVGKtbEw7NyFWoFoh3V5DSZEGjNNhZV7gJcWy",
  "key25": "4VwKNp3WeQF3mpvSbD4phsd8CVX1Jbm3jezD67LbgELj1qF2PFCSZxmkrENsPp5HEVc6SH19yxsY95QMVsDJCcPA",
  "key26": "PyVUP2ADfPD7g7frpaX7dcqMhdbWF64dHCETXyFZpgUZAmy5VFkKLRatnxGbyNyP5erd7xdLwFHNPLtRcTSNmtS",
  "key27": "5qjemwkRjD2eaPXZ3Mbnyb2scJLTiTRmkJeHD142q7ek4yrgaXwhXRJLLydKb9tSgBQzegFL4wtBnmXUAxuo8frN",
  "key28": "2iC3nPx9vWXPcSLKS2UnX6VehaoRXpFPXAUmDcBc3XTUTrfUpvUuzcwGXuuGSCNAMVzjuseSLv6RkZgd2iQHpsaa",
  "key29": "TsoC5cDuQLbyfUUK4QLruuTDt9BMHY5TLSwFW8PZviYya3mtZHpQBZmmQmGNnjGoByr3V2bEazRPWUWQrucfMVr",
  "key30": "XfP8z5was1TT8amtHPBQkLmEt4RZPHNNkpewWTXaGsADZCvf2uHS3TzRn2GGFqqsFBBU3zYgrofn1Bm9ZAb2acP",
  "key31": "5AbYUrVfxXPPAyd5tb9HFNMgq5AoCCJLtgDnXaejkgES3eJ2dUGhXkuWa3UspoK2n4WajeecS16CGpEdSWxKBkUv",
  "key32": "2uuctws4bifvHg3Bnbo3oSwavMq9Fh8o6k5RZJzTFWqfjNsyBRuRizXP6uXDaGJ8Kt6vDv74hJW4VXPfmj7kyri6",
  "key33": "3f8CErYJyYGBjxZ3QiKqkjdw4j4SMkBYpj1vKKormmJRUDP2YxxP3hzwgsqcs77dhDZuCTCX3717nbFRHdg397BR",
  "key34": "2DfBYBvArGNijGGf4yLioNntnE38S65QTJCnQExtY9neoEmDxWQAn9zSdaeyWrtKhMBcheBvpTXLgJwmxgjhm5Ea",
  "key35": "3xEd8Lxc7m1aVqPhotJEVXTiuJ2T6dtmPVd6SM3m2d2VUpAviXL8ydYHWzDQqiZMaRHWEMQp2M9RQzrnsTkQkHUe",
  "key36": "5vP1YpaVsj8PkKDfxW9jxznAyRu6ce81x7Mbk9H6Di6TNKL6dBhGuuooZxtnBG22DgHodYn5aAqPkWBmPdTxLYXH",
  "key37": "5wQqUkPz6N2o2DBQyH8pFjmpM9QtBbcS6x8XotdbUGF6yuSsVr8ECDs3emVb9qoRpdhWDpBebLuptw6LaP4V6MYm"
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
