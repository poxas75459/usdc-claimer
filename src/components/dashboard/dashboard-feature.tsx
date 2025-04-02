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
    "xs4qtrxY3vzYNsjKujwyywRp9zJYVB9Ec1aLaqsqYDMkmuYSAnRBj9hZL4MwaB4u2hZDdC8kMxQ7nh8N6qHuWNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDTaPQwsF1BUjUsgLZqWsUj7DYckEVem1TzQDkdYX14RnWoHyN5JDRbe3Cb5JYXEHj5xz6BhKMEYFci1t7cuDer",
  "key1": "kGheomesHtYZyTsHKrkQA3run9iXwodwqeYMuD7FWa1N4mpcMi8piGpirpoGwAcjSZC1v56dsy9qpy1c2v2VKZi",
  "key2": "5r4VZDe6EfNHPyctHebxh8xeTj1CcRw7Mg4XwkhUCMTJ9FvXUC7cvc8smXih5sYAq3dHbKxXAktxe7afMTdjRZ79",
  "key3": "BK45TAXN8sgMd2wHYM3w8z29k1NQTavvePzkGyWguoKRziHZ8MNX9xLtBB1qfKGjsvYqBNV4y5RgV7A4zbM1LRw",
  "key4": "4FFEUFrkc1S9RBFQWudunxTx7TTBYJa1DMmLozjZdT1EpkDChRoKFkWbvKofCYhismBUYQ6xKGQS6teqbT15uUtV",
  "key5": "5MM95HPgL6YXf6wk6RG5H825Tsouu7S7jsM6C2uhchD8TdhCz77z5DtT7xHGJQxU4Yge9MzQELLvawB4avcDyLsB",
  "key6": "5ETCLtzQqaA83cRZbavL83uqHxTUYd7BUhF7GBE7adQhWFTRkYxTBsp34KnrDmhrKFstgFQpAo1cxjdJ4Ac4VhGs",
  "key7": "5ASCm8HbirL9EkCWxU13CuuXSN15tAD4nTipMZCXiaobXQQZaXaSddysX4vCcGggJC8UTiLiz9nfTxQAZX6aZSfG",
  "key8": "5WwpGBeatqPjjTQMX7TruULoDtMRreVHTzZegrMcMr5h3VTcq7cMDWkxG694wkSxoLCZ94hid7raUaT8DWYGi3Gs",
  "key9": "3t4LqN39WThFBJ2LLBFKamXeviDUw9b27D8yeS4bN4k4yJS8bTUkQNAmhaEEegNB8cfvMiaYBPZZzNYwR1VZEoFR",
  "key10": "2et5E2hiofzrFmSG1CiFgsZViaaBNE9EWmcsDhDNWa8qWcbpji9VYsxBfoAGp3eRzPn4f4qcG8jWsjwxcckFnHSm",
  "key11": "4QAi23jke54hqLUgFMVX81zwpitHgVM8SvRaskNXcgePA3AYWoxQTBF1rJuXhmQUYmiU8ojxTe8kWGebVhPaVU43",
  "key12": "HCPw7dtNEiV3cTP64YMHQL8EjDyk7xMEHyQNrqE4gjoApjRBYi3KUupfzNcFSBTVfQpngPJ9NGBcBfxQ9Myi8h3",
  "key13": "5FPjD1bfA7VeGBCeqLJiUhhYXkqh2HY5zF6TXGi5iSeKuaWLzWpQTcYtgi6Kauyv8be1z2pzPnFfBCWVspAtdTbE",
  "key14": "46xxKU5wZCHnbJFBgxGWAE9oZK4EBP5ULbpwpCuCnFfnjQBwpvf1jXqfZKn4MCxy6rFxUgV6c3QQHbgvBePNkJ5v",
  "key15": "2gmRLm7kRp9nRqoGhm3mgiZhMWf3JuiMHaffCS9dvcNqBCnp9uqjzEKFQJFkN9oqph841BHZJAj64Y7LTwi5yQ8V",
  "key16": "3EtJF6vzu5Pzw9JFpcZrCdfEubSmn2DX52hAZAdpr8c2XeXab72YNadYSm9EdWdh1ZWNpD45REAQwDpmLxhwFzNN",
  "key17": "4XQTrKRCtLSgtLf7cb2PrajqLm7fvDSyUy7UQTDRxXzMt4itVFBdD91hQagLtGooDRt3aWFh3AgGE2S6TdCwoJ9M",
  "key18": "5rHNohey3mjB9PMxdwFghW62WYiMpeZcCoXQoeLYY63wCXVFRWoeXxRiHAekStZBZtm6wvNoWyGUcJKuQw2C8TMT",
  "key19": "4V9zioZTfN8LmrgAn4AM5eWEAcf7sJHuGw7ZeZzmfXDvoFFnteBdBawshPwTBMPhWEPzLm2cF9wNTcUNTnEYRL3L",
  "key20": "52D5WFiNfFVnna9dVdq8mJ8AV3xu7friSNy52pq4dMnjuLnyohYGjq9vJJN5rTsXBRHW4ojxz6g8qBYTtnutUCvb",
  "key21": "Fsu6VmjscaGGhTeguahM9FJ15LMEZMrMNYn4WxB38wtKSPxt3m7Z8v82JYL4hjcGcqvTwdrHpysi4tjPVwpAGHA",
  "key22": "3i1oY7XcgvshwMCQ7ARnh4R1jmpMyzVwanJvULkya4GBKAq1amByU6zBwJj9RNdBxXmK1ekNXmDNFqZbHxUhHWR2",
  "key23": "2zjbguacP42RWTcfmru6twJrmJL59QyK8utFf9P8mnuX8KbdK1u4EMqwpnnZ4ZyjcxXgStGH4sXsd4paaes8yVPH",
  "key24": "33VK8FV9suRAYTPPLunVf5NHMNaHi3FasRGwzz2XWMrWPTnk8B9T2DxmjrczoAZpLGE7M7qofkbFQsemryMPoFkP",
  "key25": "JBTnKtLTfkqJaMPYbXJjQ6AhYxHGrjvpwAyMdhwj78NpPnKYj9YAMCVmPiE2U5vPny2Ypt2N8BL5exu254SPNmX",
  "key26": "42oC1966ssGvo2Vo46EnG7Tav4kon42jFgzsrngCJN5i8UEVCaoywb8ibZ55WgTkCcuKdYsF1dz8RfbdQUnnmiKZ",
  "key27": "3YWDuTpMuNyjt2aNY9a4sBi1ELqrRk8zt6vkqrmWyAKcxoSx8TFSGpbB2WCQ3xXmfUX2p6dpWvBRjBbjDM2SwkTt",
  "key28": "rBPsa8jXa2zCfvsHcsUjAy95ibEXVeEfMMSgPzghmBGAhUYJ1zZmibaboQSk2EgWUQzgV5mRViBwgT2BgQ42TNM",
  "key29": "2LiYdom5zZ4A8bEDStDLuPYa5yqXCQNoW34V94UEJpozPfNtBT5oxi3kfQ8nBSgVYf9wGUPESJyoZniuseHUHX6t",
  "key30": "5tL9yqdomgNJpUBrjhV62oJDy82CV9T7vkjWjgoVw2oaoUkUUnwaKuLihceFS3jmcD5B5uZv9WE3ujgMHJFS35ai",
  "key31": "4ktmNYNRCxirbvUbXcoUhUHxBe6E3nCDxmY3S3jm9AcqD8q6FAJA7x6d6dMoqH18zw5GscotzZcyLZXEAqcFHFDa",
  "key32": "4kbAEjqyyqLwEFGXzUoB38KxduLKESdQAwVUUH8WETS8oX4p3ieA46emBc3VVDwq8eUseNY9ZbCzZtUdaQAXtE6x",
  "key33": "63dt1K6sWTzSLgKZ7M7AEevzeNFfbUMhnC6noEaukuvga6rXuUc1bb8GrNFvaG1if7QSaoZ2ZhRg5m5PE8GmVfgf",
  "key34": "5GyrpGYT5aaopBVMqAjcJ8Xj3fz3X2MUAb84x5tCfBvhuoCFqKeRvaxHeMBNTxcwKvNCE4DnXrJaxku765umpscC",
  "key35": "2j2ARuNpsVjaWbts3n3N57Zh5oUzHT1ddKTvipb94EvpSimnTKLo4DPnionVm9wxDD5XVfCTq6dQnMv6NPGjkJVM",
  "key36": "3ct2YJSAGZwCfqpSBxbwEP8WJgxAgTNp8XX8XGMXt8HFhVd3YWRXDUgTF9NsdzmKUs1ubYmQ1YJCFVBBFTC6NWod",
  "key37": "2kq7jDMNG9wvWfdTK1ZH7Kk4Cs7JdaEj4fdsCLnoufwAB6zPgZmM3KPcETy9RoNvpdNx8T6fsssXfvPwjRijoN8y",
  "key38": "5ZommdTgGaztBYTwF8j7TDFd3RNqs3aNfkQ6wfQ5pA4geu7g5b8m6JMx9JmGtiVZTiBXnY2Hv6edMXvM8wDewWRD",
  "key39": "vwjxhB5QAtyCCRSuFvcZDB2yGirPw5WFBdTjR8FkjZ5TmoqDj5oqWMpbZygeYgr2E8eW3Ccu1cCv1SF9LxrvWSL",
  "key40": "5zgKEM5kPPPPovBxFi699mndMn6vntxzsqN8mxR7GBJPn4yNpw5SEUDCbyqJ97f42aU1RxAbxfY2kqf6yyTKu6hF",
  "key41": "TtdYz6HJAPLTKutNYveGNcFrEBrWdajsAeyCQcJaJWQpxL2pJ37yL5PrqAACM4rVmCeqKN8Bme7GV8XSdqqFyH4",
  "key42": "2uT8AQXGXW4YqKrXX4MKqXdjsruDm1dUZ19XGdmS12sm6pZJ6jEQv7xJKhkncvUscvPZurVJFppre6P5JXs6zN3G",
  "key43": "4eSijTvkPGRqohGpYUSKGwibm7r3ND1dKEbH7RmmKBzVFocFWe9JVmHBYM6gNj3WhYXQFqkdWKXCwMWDvN2FQyXn",
  "key44": "2SX6MHwX8uFZjoerAx9pUzkvHyW8gmuirrJLS2nVvwGcybU4b3wLYnyY2xujFy7emFcYiX1iQ5ws7AuqnnnywUyG",
  "key45": "3N5VGtw51eDthNZs8RbxubVt3Lzka2QnjgtroCgsS7hREPBqMrKZSm9xf4KXDLVZms1V7zpuLhZ86gi13BFv973"
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
