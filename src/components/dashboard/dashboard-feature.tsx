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
    "2XroR1UzH4d9viHv5TtvsFyjZftJRubW6Q4j2pkp8nNMXsAqaq8gen2Rfxyqs7XgtzqaTJYxJucgw5Uj99jLZAJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLx3Cmgh8tVHxBkqAABePtwMLs7EWtdHTcLVYgiHVcTf8R7FfLKSGfJgVrC17Qg3PV3khRU2ESQ7QA53fBCYrAA",
  "key1": "wYgVSjQdLTAgxQURWo1KmBEziXYa5mN9nVhv7xS6kt75b1LrTf4A7CRSdYgySSJZ8Y12gfmie4ia7RRkQwsKGrZ",
  "key2": "DXo7rJranrRV28c3ReroKDbuU1bbu8YBiuxzsz47hRjWbTeNhX1Cuo1YiWW5b26xrHn6E7g6qYCf7aYiubjEak8",
  "key3": "5kb96o6LsqGbL5C7bMbCLLV5KshMGUZ3rapjVGUVMbcYzq4PUkqergPYwRUxQU4GKcHHq3fbL8KQUetgX9HyzGTw",
  "key4": "5sb4kQkLFP91GGfK3Qry1HtDmYpCtwRNnzcj119nhaqVqiibbtUm9V81FahjbhVT2zzD3PuTWz1ui8cLH2n4grNU",
  "key5": "5tAifXzdm5DZpEoyUjQDcHeFdiJ6U2ammQPYCzPUMkRxa4XAb1JSuorESUCEsHyVT2qMUHyRHLZRPXbiuUPx2cwg",
  "key6": "4rDDne76KLb4LwHk43Xcv5MJQVbncwKVTwdGfipke9tku413daPNj9x8LuTjRGK6reoUyPzb55Gy4PLqENqQZFMi",
  "key7": "3Wr1jVRgVGgq8B99zx1day7mvvcub1jSShiV9yM7eC9pTgfrMNczCkrJ3T5ARhre2x6rUkt1f1AQ9iKVKin4P54y",
  "key8": "7XPmwiFV7XeWUawEfsNafEGZAmZR1RjDMBWs6SCxEGnq2KL3svKUcftPp7fDBkFrmXiZ3zvxF4LjuQR2mQZ1UyQ",
  "key9": "3jy9iAwR2HjVULkxPGmAxURga9RRPTt9pMRx8MPrxCNroxKfRjL6bKAoftBjXbSF5fv8onhQjmd3BUYaokqrpsjC",
  "key10": "unh7GtxghRkDeP4Soazf9FycKp5nHB6Vr3neT44wDD18Wm5rKXtE1Wutu4tioc7Dbm6Hwbxk3KsVTNw5n4pSg8c",
  "key11": "5vxv2TyYvmberBehc5ebUp24ipRHpWPsGqvk1UDJqh1doM6FgZwYTXG1cJ6wKMTLcbj4uukbNeKc58UjiiDDhA8r",
  "key12": "4Ug7wc9VqDmsyyQ2fJUkgMUPqSsTzXYqNo1iQFqLtLXXqJrVii7E3GLVwV6ht7tLgQGPivX2dNk4ijawNwJ1QcMq",
  "key13": "wA9PqEKBMn1hE6qLpn75L7ghU9NoUrQhfHtkgmGs8MMziEcVKngenT868w4wASEfcArejnj4MxiKbyvESWdRw8e",
  "key14": "nQNWsT5v1mGVG2kvJ9cZN9MKWijHwQJywP8nc3RGs8VVzSiKhDiQuyH6yuy2kKuHaEu8nKPCvMDFMqCXcyTHNcM",
  "key15": "4YKYcrmowiNCG85bYgVFAbT3XJaBydxjd7tw3M2JEMv7Y1U65GumbjaFfV58zZjDQAcwBG5EqR9udGxn6QGw53FE",
  "key16": "3Jr3pUHW8VJGbLHMDoLPa8hjh1ncVUK7KGWBSV7YFpR8HG7RM3r2QbmUEDQB6iYsJQKvBhKZ8hcpdmt2XPj6oK3Q",
  "key17": "5j2knkVytxLeyfUDh9ze7D2t1VACeg4LGhZp1fx4Xo4TpmMF3jF3Vb8VoDbRhH1hdo9rwwGuuwqxMSBpGvMn3s2N",
  "key18": "5sRyZ42MUjutACB6hjTag8LLU1Pnn9tKCuDwAXNPiujdUdxa33D5FYAw1Fkt1DggpM9YWjV98DovHFeRNeyoYVN3",
  "key19": "4ssindQAkSEGXh9jQXKuKN6M7sjKy8bHBooZkaCKju4Ror3hfMgAx1N85GRcNsevHjNH9GrtLFawRwA1ivBBddio",
  "key20": "2U1L5ctzf8WKJvS5etcmLHuRfskPcz6mdSgxWzJQtXMw2BHerCHZkQoK22X4nYAPoxzA8XBED7RNfm5Y9wqYvdvr",
  "key21": "2tZdvtYLtGvJrotsoH13dqjuhiCdmQvDhWcq38Uc97CjEbQQk3m8CwP3X6wUgf9PTSgZz81FUjhkhfgftyqeV97L",
  "key22": "2NpUE32aqgBm5ppmM2of25gPPCEbegLLDeLfLitoYvaFmXoU38LSuTxkh7SkBZ53WmK63G7wUJXXFTyv5Mjr6v2v",
  "key23": "aDwPduHaFHDTUSjpzsK9uRqFiXW14twsJ68jexJ5VCepVm7B4BZZ6XZuRAvT67dnu4WaNiC9JNdpHt7ki35WTvr",
  "key24": "73Q3s1paCkcaWfF5R7yyAT2o95QRuqFEbub8BBtkdxTF6VjAY4jq9VyQ3sfhYVUrRfg635FR4DACVRTbjg4EQLD",
  "key25": "3cgGFq2d3iUxK8baHiuZnQqC9KVZgFmZTuu8SU73bDJPYNSj5XdFdcAxXr9RUU7mWw1S8zzwfyp6jvJERrtxaKHW",
  "key26": "hot1DzNAkErFdqXmNSzCvafQKR83paEx8kNox8bW92mojgZbERhiEtDqP4bG5p5GgLEvMF6oFdkD7KPV41KSPo4",
  "key27": "nQHXhHDH3jWx6C4aZwJchyPUz9JvDc66mMfQDUbRp8JVb2B2aPuhoGE8mWc6Ut8yjcZpHrv1ZGmbWwr5mcaZKHv",
  "key28": "2ATdg2N4sbGodFbhkkxgvJfMN4oBjmeNmgWanC4zmmfm2yZ8baykjjtd4diamvqsjP2UnLoaM6pzHiP2RmFkcJRS",
  "key29": "4rPTMbCSz7QFYVphMTVVp2nvGdig7LxTBuEx3ozE6v68JjCFnPZ1p6GVDMjD2bChr7zpxCoKH4NXQWi5myeYA1fw",
  "key30": "5C9SDFMrPWJxBRjtfuMU2D6dTFFehiFXaDW7miGKKemrWKEqzKXUadvGHxm7cCzmt3zh2yBfYTyVjieSGHD9pXQ4",
  "key31": "WC77sWKn6UXHEfAyCcfSycyL3u8D88PmQqp6usRt7qQWw9XZq7hVxSK94GNifQWYuYixmyDu3jwMrChmnFe7EzW",
  "key32": "4mitoqkJpyhJMUswokmLKZjz4HJJZ5g5QjKq99sSfN2cHGM4jVf5LEzSgssqHDfEX1H2t3FCjEdxy5nNVXmtXj7g",
  "key33": "1uFmoLGsYYYaFEc86Vi4BRzVWuHK53BkS3ZbEuFyL1bD45D7z1B3vyhmNwiCwn3wEwe2CKPo7S4mGv318tyY91T",
  "key34": "2qdn8WZc6bCjNi8yct8jhXR6EFKFdWoNFmNaw8f6JzspibuLPtJwzpQnzqkCvGoH16efiC8kq5MHxfY6Tfnnr59T",
  "key35": "675VTgEmWeZBN26khrnKR237uwJcDeWbo9sUs9L9qCGrNmp7JkvvrbeXWZWW79B2f3JsWoX9o8qwRqVsEcHUmGGi",
  "key36": "5ykLs4R3ipPcB3SFNvX7cvkhsd881zoKE6J9sbYA9P1BPAoCqBWhRTP4DpiqiUQ8xeUUWoZVMi3aqASApEy69yec",
  "key37": "2XPWcNBsu7BEbQqsf19ucxBC4L5KVXUkDEkyvXJD9tPD7bisXFmynohs88EZmMNgSq22Pnmgs6sHE45mk2McnD2w",
  "key38": "21BqjVrwaNat4x6ZSkWomp6nLSzykQhD2upy42HMkgjMaQGmG2riHropVrTNzux16BZN4u9VSq44oCSVpzEcA123",
  "key39": "ARVVYayrQAPNjm8BHL2G4haVrEnCyTCJfzzWsjqSAnCRkhKMWTVYb8x7zKFvCdo89QZVh2fkC4Am1xtnTJ5keUW",
  "key40": "2B62i8js3pMK6D8oaFwkReTopL3WzdbxZujvetEJQV9eBmKXYxqQPxy4VmrCPaaz3hsewCoJdmw2dFn1unrKiiB",
  "key41": "4qFvG8tBkxWRkFSnpWmpbaHensypZ6Qs6Fq5TYc7FYjJpvLxNRRxX2rbcNKkB8xZhP8X1mmPkmmT7yHrohx5BYva",
  "key42": "2MJGfeTVESeE2QMBfCrxBowWZ4fYW4SVTb3MYRkrdWEZ2L82NKEikKjfLpNVwaj19868BCJ4bJXR5dDmUQTNpZSr",
  "key43": "4xfE4Sgux4254W2ECBw3M4k8RkTQ52iimwbcxNv78VDZAxkKG7tN32vN9gL4fWt1krzP8p2BD6jQryhAKdZEBVc8",
  "key44": "3hShRfF4GDqdmgHYTtqv21S2JB73jjR3GGDag2H28y72emo9CVX5XgLj9JqNnwWmkH6tXouYYHeLG6wXQQWwE5aX",
  "key45": "3rwJjsT1Y2n8n7RWJkaYXNcaanEwnuhG7LjC3wtqxUP1PVULw4BZkcDAUZUeWwJ4B8WYW4qgpW1Zk8ZreBZWrQ2E",
  "key46": "4xPhXuvPCL9N7pmFHtba6QnUaxppFWafFMkNEbcEyUK9NJ6QwKdHNZKamAWyRUR5e18jNVi1gKYGbEVTYbvnTPTd"
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
