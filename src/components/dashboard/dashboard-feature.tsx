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
    "CooGcndSLnfXcmyBiGAow676BpvfTr8w8SdJ3wvU9yorU9xoVrMpxSjz9PUdXQUWdwxaCA26TZbC8h51Cgfd7Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3im2zMvi4FV6tSszMDVgrAaR8CtmMG6BiHprMd9rKNUrbQEKCmxbZPuHLM1AhzXcvhuqs8XVrdjxib6nLEWGgDS",
  "key1": "2tqhrY52dZuCKDfW1FAdYU8WmBYQRvbGfL9pWdQ9a5QAA9LsLACeQbcjSUtfTc78fk9a19sST2Y6uz7avyP6c29V",
  "key2": "5FX2MvgiU3WgakUNMY5TvH6j8CA7FxrPvhzR6R8N52ADoFT7f7UiD7pWruJxmbwwDHKRhyYGtAe1v9YyXj84Ueg",
  "key3": "4Wm44nc33ubuS1FEzDmNvcYnYRzUbeDpbBFTH3X9KTTZXWm7VPigqnFsjm2JjEx5XvLBBhUxonjaCpQvjD2xUnqu",
  "key4": "5pjJvRvADwYWiff4y5wZYo6ukxFL6tsgbdFavLUWnzsnVxf9pTQyxkYSnLwTJ6PaoeKLegEgXkHbcGgkc4a1Ly2k",
  "key5": "5cQB8qwgXKuNvtX1qRvWnwxSPMVGQbXWVHTgxn5hbtM5AFMDToSC7FsYiG35B1eDEjvgCW7iwd9RGMh2vbjgAC5d",
  "key6": "JoJyNLj4cinDue9jKNeXeemASJgyZKuZgYfQpByWgnGnaD8i8TmH4PKkYD38YLaS11TNs94EUfFZq1xXXehxJph",
  "key7": "3HvLmPudXSexuQ4QC5YomKJ7oxusE89EtcoEv6mfu9FvVEZWqpuRU3zWLJxsPnSahYBrFFiNK6b2hqbKzt5KE5Tr",
  "key8": "64sc8ua6fKJYvWcrqbyjygy4g7STPCdotw5uqXeAovKQtPghGkLH5daExtLbWkvssm3eYLaGWTQmgJpBjCtE1uPX",
  "key9": "5nNJWVUhW2hURtJCjAYnZDVj9iVk7Gz6g2DMA6ZcNoLBXydeLkY3iAi1o2xwzi8CLEu7bYhE3wNUvWAsRmHyqtkc",
  "key10": "pswNDLqw8FARmC1ouGPVSXQaHGQrvmqGm7JXeyhX4UecjKT5rzggCd99bHdrwGX5v7Vg6mvUXJwVZH9daughgAk",
  "key11": "5or4k5hDy54duFh8QvBLX7odquYJfTE9RX8xMJQS1B2x2vutjesF4Wo3tFw33QNqQMmzCKNvacWaqwosgRJb18d2",
  "key12": "4skD44D47tLasuX8CzntvSyPoFgbHSxyP1Wbio9j2DJ8yJRP2orSe5AvhxjpJkDQ389h6v1r292ogfkGZxj8EmJk",
  "key13": "24CohS1YdNjcrQqoKCu43rB3WC5D24neCtpp6chQDLKkbu1n1JtpP92bGRoC9F8Qc6oA5bhV8qjKXjo3hnZJYyCr",
  "key14": "4amMqHEkeG1u9ttejNR4MwogAgQ4VUKPruYi4LYCwubkya9uaU7nkCWGvtEwWZxJAZ4dpzJu3Ed4Cfdj5GBzXZvb",
  "key15": "5R8XwpYAQeJL8K7U4uN48YKsrFfqzrVTDtGRYTsZqaJfmuwMmeq4XQ1Twot3HtLPuv88mBG7CasSaE9huDNNvsTa",
  "key16": "49XK14Dcn9EM4VVyhYS9UeD8Gx2J2niFNaGYHsoh3XFzaMaDKoJ5ud6US4Ltr6qdousiboHenVc9kv1whjwg196U",
  "key17": "4qszqRZEE9L6oBnaHK38RJphQ8TFd6kf84gYgTEaDn9te2tZeofaM3SutAh9N9qF6VPuiLKg4FVDugt5pGvThwEL",
  "key18": "SeVwpC12874ScoThU44CncSN2D4hfDManF8rnj878cMdSAySkHoPG3fAQVeuVUvh6Zru5HHYVDK7UG5zYDYUk3T",
  "key19": "28bjDWzekFgDD6erwQppxRtUrBDZfHNpUusfGHL2RAEtoruvKfwwSJjpBgJ35reNaMwgABkH13i3N8A9nMFzYAKP",
  "key20": "5pKhaGREvdXcTfwjfNoTCD5L6BmN52sJ5rdQBHe52TiJf7bw2kkSxB7T5jbKyz1AFniGgiYALGx7KSPLdjgpRU2G",
  "key21": "K9yyxx4wpq951bVywXL9SVYwF2CahQsDgCtNRAgoH24bTk1ufu86mc3TWr4NWNAai7bEic6YHV6XPm5jHwNvUhp",
  "key22": "5mQzvzGsV1o41taUC9Wz5eHZyXQRecDqqHtDcPVCZswbVDG8s4gD8YoCfXA6HcYU288ejrcHpXDiQiknPRi42gS3",
  "key23": "jHnqZeKcuRLSyo1BZrZpMwjMzUJXiZiTDFH1cXtcfmmVgS2ddrnsc15Tk4RiN1kacneGqY6wZTC6qeRrbfS6BxP",
  "key24": "2BeGaTMb32JSXZoVWG7eJd8E6npZJepRgYkSbKPU321pu6QF37Aa8a1Ym7wvDqB9E2W3TBwhzfg1AyAsTPPoUVLr",
  "key25": "3Ga6xc5dgYjKHEv9Ay4cpcgBFrbCdGDm2TpiL1UCXwGNeGEwWu9AEkvV45FwnspDj4FRqx2ZkCV6LLDZ8xGKJeFi",
  "key26": "MhkkUek6g5E3G8AVBuSDZCGp86BTVW2hiYCchBEW19HLWsqj78AiDhosUvWTS3yTVsMYxT111rz6rJsySYBN2ov",
  "key27": "4A2CtFaQRAGoZWKWRYeTn7KmZ2ELEnyfgcnGBMG9XSHZWgVKeMfu3uFWVkXxKPypQejQ6AkzeGeTYtkPdEP6YkKb",
  "key28": "mt6ZdxbSwBUnBCi5JYHcK1g7BxaVHd69nUJZvVUf9b58AYP9Ve74fTwRPT69DCmXVPEM1z8fW7cL2PADkvXRuk1",
  "key29": "2t69G7m19bJVpDSTFszdD72JR6pxSyTSGsM4uWnrPYBdJWXegV7bJYrGcp8Pb6vETRhYG5zEat2dKThV46nqE4zE",
  "key30": "56J6DKyqZXRsUHgGn4GTfMom5Ahrb4eJhCHnT2oNBrJhXpAqr5Ji4LDLxKaCv1SUQWNQi4AUX2BkcVYqNFncjyPn",
  "key31": "5hNn2eU8qBSdzYBxSMeAG1CLkpfAKRCqgmgatkfEphsU3LTuKgRTs5pDxy71s6WNWrUgQGnRVSBmGj93Q5nfiiiZ",
  "key32": "41DF1LNpt93ejSKE9riHKVAdTJRwQMeNxgNe5YopTQ6G7r19K5ZYD1fhyyqP94okpDwtoQu1dmY89SnFoLf1cuSm",
  "key33": "4bxhYYG6wruiERM8z1XmVvxjcmV1xLTj9Bu3HKkrxRBUh2TqeK9Nzr3GM1m1GBc3yMbrFRWNSkjF6RkKSSQRWuPs",
  "key34": "3LTRCCMKysgbkeNJZDXAdsRyNz9AKUi8U9BDm48BDcT7huDn6SFgMy9MVTrrn4cLptGu2Hf7EuRaeUHJ92x88sPB",
  "key35": "4Tax4zk3Sa6T1QFcZ5fitqJ9RscpzNbXFJutS88M4nRKzbo36Z9VJiQAcTW1aWbacxXeL9rfPPjXZMq7Wqzt7AhG",
  "key36": "3WwvEiTfr7Ys9LCSzkenuyUdGBCnGxMcdqZHRDzyQV866dH6jZuYNa9qR4KWpt4iSg1Fu81ja6hWmArNpAVR83My",
  "key37": "5iYVzQBRo8uSk2SfbqB2b9BXuXWKqCmBx7RYC7XdQCueJZZHMPYidFjDe4NXwKg7FpEk4Tke1phPvdokXdWRhZpi",
  "key38": "4XHUyPLnkSi74KVg27yikKBt8k5gEAaZE6dMfP63S4E896RyYNSFFmE936ZHSiDMUgurMv3qyxJwCPbbJeQ9933o",
  "key39": "5c2QgWKWjVv93fWi5BSBmW9pmUDevK7ie1764RYSwaRkYcWotTP5o5oUiyqc9Jbr6YwNXdqPhPaseRNj8k37fBpA"
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
