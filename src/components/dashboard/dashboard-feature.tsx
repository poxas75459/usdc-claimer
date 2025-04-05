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
    "4NaCXSbf7WPzFKZXnXHxvTcZzRMEDvc2XDk3LBreS6iCFfC83pth1drvYpNsEQbjJ1wAFBQEegGKBcVW8tjtUroY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xd7coyYdH4Dn7o66kd4aoyexn4YEWnF8Y2xmLYHBMJDdtFiCrqXHVGsw4FwDqucFVqdsDNcPHytfqBozb5LH7NH",
  "key1": "ifTCiWMQ4pFSCJzpC1aRuSDEAF8eAXUdH1dFqb1jTSDCTMt1oixjjj4wtF7M683tjXZ3bAvSNkaMAXpb8kNcLrq",
  "key2": "pRpjABnexrSdmZ4DtaPxi6KpasmMZErxVvWE9eM31skpEL9iaaamXquGBv4W158rAJXZLgycjWsEpp5RpedmHxb",
  "key3": "3SsfjzBuNSrPxNTNJ6h7YPeec7P74af691HTz6yBzNSPcPwrjFgL7QtxxbRVvDJi3aXYFiEepwxeX16oPefUG8qX",
  "key4": "4yEGqZHW3kqGZijQEiogfh5MuGekv2PeCDrdgzHXj33DfNxF8jMRZLFSm5UpvkVw4jjQNa5abcwMNrVcC6qKqgFe",
  "key5": "5xfcXGmv58aEhz4Lr7wuRuWRNcUskHZFBP3KGcofNqfxRqUA4UsgsytdHiWyTVtPW2NqMcaUujvh73QrPtfNHvuU",
  "key6": "3vuRjPxCSg33Ca3ckhcee6NHm6AAFGXd2exn3sdctgrCA8AEDRs666bwRn39g6FGMUj4BJDjHy1GLsSBt779fDNx",
  "key7": "3cojJqiyrh3dVx3LqLJeUFhMahrSxrcofFbArzxkHubc4VRemZPQnuu4Uba5TXbR4Yk5F2LJ7gEbDzgt6sifnyNW",
  "key8": "2rvohT4kpHw3TuA9W2KHyTLdzcYQTvPCGN5ukTHGnyER8uTpqtnnpwSWWeTCqHk6dW9YEiPu7oq6qrcgz9mrccZ5",
  "key9": "65gHddNJDD1hmZMSoVtWspoLYE2RiKhbFbuBUjygXysoMAnh7rMewPunhXUSB8mYnVVS9ez6pct2JLGTKjWgpZ9f",
  "key10": "2GmipRyjUiBLQfaxuNxFxfRmmJQqSG7u3Xt3S1a7UVGNfWYAHxAySkvdEyQns9sy5QebTKf3LHnWakvTyPbrCGHu",
  "key11": "2P4RQpusB6unS3serU3ThBDRfWRnEYEZeuvgU1r7aVuoShwEKX3nVjssErbixmwykV3DJ4rQg2jwtRByYBC5BnxC",
  "key12": "4Mn6wmk7YngUxrpjHZb6qaYVfR3MjFyi1kr3jDx7R3rygx5RLmgFbedKZh6hBUENWUUksUKU5c9Dhtiit4H9YY47",
  "key13": "62DM4TwtgFmpFZLAtsZhZYBBi1rSgBZMhCLW959hsRsNcRmXsGpGyepk6sq6DbsPWUW5zTRha2EthSwoX8WsV9tv",
  "key14": "5VxTg4cNZamrTpm34CK68RKHtustJNWY2FqtUB8sVdp4XwiS3XYBYGmzRtyT2dx6ecHhcSaruUH4PBfH76t8APmZ",
  "key15": "2TLbHLYYph2QDzmdGTqTHkjivsYcYCpE8PzfCmMKLFqHXyzLv2gYUAXYFhrGobGnUUPPU4QSahjGqbpdhUzaamd2",
  "key16": "32UckeQ5m32K4joTQoEc3emiHEzgWio7aoVBAUnJhGsSVcyCeRsS8JdFWB9nszxntRThsaiuzhEYym9m2QBJKpqq",
  "key17": "5uiBaR4n6vWRJtmaKYSHD7SVkxmwGbaCweox66Q5jPWxNLicvZFmb9MMfhiWJPHLz8rgXsVuX1gftfPPuHFwJYbJ",
  "key18": "8hQkrzbEUnwzV1e6xxC3RwZJE2rDRHdHKeNdx4HvSjMHCzRMvmN5umGJ7vDBgsNUR518r5nYTyUJj95DzFAyAwf",
  "key19": "4g6sttA9Bn8YcYg65fM67cFoYLNMgZL4gNtrQ45m9VXBgfD6CV5w318cSEg6kVZnytzFRuyyEYntBMEQhBcxpFtN",
  "key20": "4u1HDEqGw54SM8p7G5XcUtwqH2s3mhvrnS2ZShUcKEisYqDhGci5GkcaDGf1AuKhhWfzG5Ac83pQK7id8A9a4JfM",
  "key21": "CFHc1ZLThTVNcdn4G6jcW7j8ybWgrqi834ajG2Ao2d9bY6LzKfB8vNw91a9HMpN2cFHqscg4cfqr8Qf5dZm9R6x",
  "key22": "5q9brjL5CMwKrupJfv1UCnap8aqsKooGnhRCA3A5SC6EB8NUBhfJ99Z26rZH7iNzkxWCaWXfb4SEkJAuEQr7jDP4",
  "key23": "4ivcUnrEmGHFn32W293vBtUwsousAuFWSiU52MrBKrRYpxWMMLdAA9w5xGRbn2jz733U9dLeHo4cRSW5SZcfVn8E",
  "key24": "25hRwQYBMWDi2aiX4nPMFovv8mUTm8WPG2QctcGCXxsi5CiTXhStirvKtJzrjrHfWs32rxWSuKS6Basmn7egVVtt",
  "key25": "ebGuqephx6p1vZDtkQ3qpX5xvaZAPJrhaniPrkYtjrqMKp6J5F8RMQCCq3o4xaidY6cqTmazbxGuixvUdfYyvus",
  "key26": "4QJev46jRaEGXYqRss79tvFPphGycn2CWM1zN6vEP4ichuqgfY7XjBApmCXpqZ6n9sc9KUcFvHgGEBeuAHi55AZy",
  "key27": "43EBH5daXYCgKPXYRXv1egpEFy9gyFzZBWKUF7pj83d7S1PD2ogSb2vF5mcjxHGzNCeTWAYambvcp5gyaAgwMq9Q",
  "key28": "5TNpaGCU6iKBKUko55FQR9cyqBZg2MfVThBBLhKfdbADhouTHPg6gRBDHc67LfBpLRHA3DwD3fGjo8dzSQtrPQ6Y",
  "key29": "2qXbn2bQm4ushXQvxSTX1yL3ws5UXBVxXsnwywf2sosQbWVrc1LNAV9mkTJjwLhGaawTBAp7awJMqo5M6jhSUnYM",
  "key30": "M4C3oZXXJHz5qszN75dWF6bThwMYaLJM5wvSWPhUkBEh6bNtjmnj4XgWTe6Rkf2SLD3tqT5b1UXgrMzNHBuGyDY",
  "key31": "39CjYqUke7CheW8vnZFvvaaokYScVyJ3zaCzcvT5XC1uqY47gsF2EHn6XxXh3rgcz43XoUKgFukJh7PCtcBSLxzk",
  "key32": "54Ea2v5kGyeecZZ56skhYh8QZLKmmWMcKEAXizqswN3xoDR59WCTakevjEVHTvr68ZsrTkeMeWKAMVG9bQ5g14EJ",
  "key33": "5XmKYipRs3nvxMVeFgzk8APFZpuPzQByLeesSiqzB1TdPgJ3GTvBXEa3GfhBChgxLEXmGRkpsuuWAzAN8u8jnxg",
  "key34": "4Sqekh4EGHyWxA5RhV8NKXHzfEkTGkPYeCP6VmhgNqt64ohkftUXxCEb3zt2yDcSLqPzsKXosqCJjbHxxTSHWqcf",
  "key35": "22ezw4NBZLwZMEJjDjuJSxmEA9jQcK4g6gr14D6kTD1niYWjEbyGWwdGviQWpVUv3qpGTcPuCrZp3HVm7uByofHH",
  "key36": "2vFxHac4wwo137fQLpmb92X9Hvu3UCXb77ZosDpasmjrEiBtHsmgLV9nZ37XQ9FMhWaUHUePrTkKkCAkoGEQpPm5",
  "key37": "3hXDY1dXQU1wuLvmxyaFgV6d5XNooQH7vQd9hf5Yf4BfNLFMDNLkhvVzpWSSAat4UjWJqThjzuUpAyR9Na44zuSt",
  "key38": "66MesGpi8ECsP5TXA2V1ZWABAhUd3MKu5Ws2mE7xSWhQrENCncjz61gmiSxLPf7a8qQ25q5N4sMeXfFCra5477QK",
  "key39": "45YXctXgjXQcYVC3MRkenydCNLTJaw4ENgqFc5uQ8PkzhHRfqeYNnTnU8UA1JTrwzG3nqggF993664FBtMLX1s5G",
  "key40": "438QtgJe7xoYix1Ej6jNAYYwuC8V7EB8tM2DMExWwHEKYU6Gfk3ZBomKNSkJF9f3MXvNx1hDiSfVaNKVJZXoir6f",
  "key41": "2vdcysmL3aXqE3qT9iFpPKiPDRK9dVqWbBAsZNoQ19JMt5f4hYrfE7qQ5PXJp5jK2vpPowv9RRswKmHH9CBfrSGY",
  "key42": "5cVLfS3XfCPMDHugmtPHg8iXdTa8p4bvetFf3X7F3VerREccq8XddcxEN7qkPwFaTAuhsKYugTXqwCAqeubPCTjo",
  "key43": "344LPmTbWzgeCUhcTzYrso9o7WZVada8twGZwWXeb6m68kpUfYNn29xKsGibSqtDrRtD5EFHkc2dLJntM4hsrdV",
  "key44": "9giY6c867YUkFWTCSJ9gWrbF4LBhfuE7Mam6t4nQsusLCFbC3uR13nP5HZWR2Z65Th9ETsYuui2VoLQzmyvG9Rd",
  "key45": "3tbFKjj5pzNGFkBHPdB1uzgmqjSqaSiPdFFpVez8F9DAVpf2Aio5MD1gakdFoLAnFdNPdwmudf4HCukunF4P1i25",
  "key46": "3aXq4EtzzyLUAiK5JwryCbjPZkYYb5RoXMERByEa6tDta4dsFvqN6q739hZgZxHKBAVPmXnvPUhXfSraufGTyyer",
  "key47": "66Ym7c1jEsgytZVvWePV2uBPqr7eH93uSTViQe1YmfkCv1P7HCpEgDQhXfTVmsWKgGiaCyzg4dzukwTfSKmpmPjT",
  "key48": "5TEK3qfNsdsE4HqR7cjaRXb9F8m7sDgHRxYffgfpqbs6XKeA6sQFrsSryALLoZgiLqSo9yAeCbABcnNtG8Ybe8jP",
  "key49": "2RHYDJB93b5ihiKnZEHKuUUzpTc6y8pJLgDe3fR1GWJH2WuJaX6zzcKjbeTqKbNUBFMKj5swHcQsdzRv3kfuC11Y"
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
