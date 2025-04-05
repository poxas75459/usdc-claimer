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
    "2oQXw9SDz6FT2CanSbhu4dRHFMqezBjW5zKS4j5cw5bgXUhyqYtgDCozvPuu4gBLXMkYZgRCbsgvW8Y2dcwKxysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAq9fwTR1wGTY58gFDHauBfL5tYnYFmcwxbrRQB7D6HZRQjo13Lm2znGykNVdggZQSrfdnfNJ9oQsdy5nZQjgGY",
  "key1": "5pFC7iSTRVkoqqRqhogN9zzpiMtV6QrUP8MUPPtQqxsFE59NyaNLHcydePVzvygz2rTZE13tnz3oE8o2MDervgmS",
  "key2": "5QsntFAiUdQbSrM7R6gxBuZokT9tV8Y6hiV2r28UbjvAZrE5Vw4xPKYyed2wMjNvDATJ2Wnq27FhUHJXG32gBtbe",
  "key3": "sTNwTpZr1gn95pg3ZALKszUjjx7WmWUKdDHYyAzGBs4aXrZ9F255mTToTPpJvY8wXGWJXQ4x16SC8S8HzNH6W7K",
  "key4": "2i7JP42a7QbK9YSoNm4pjnazTSVRxn694NbgcTPw8aecxgLgutXNV6x68pWjqF9BdPF5FqFmFvy598axkhVqBofC",
  "key5": "4rV9bRR8YxrY1RPfse3S4PYTd3ppTgsyKzcqVXLmLHiuqycjN19ZpNKusrAy9rFLMiymarUPkvbSPXJaGjvp1j77",
  "key6": "5Sv2xMtnVwqcGuPn1X68vMKMpwzBzH7L45Kw61oVWH3FoFKNyEVXTaDruHSEF3MgJnkBsrGmC8jx6ZMHc6RXgfDQ",
  "key7": "4vLM8vSQqC7nctnVCyFVvozQ6VAgXBVQbCnb7cieT9cbddY6DDd5ewB8YkGH6S9Ym5FmsjvbXDwKxwC7gBJ26dE7",
  "key8": "5TGYB5PwLZxUsVR5XdHroN1toYuVp6EVYA6fmKGwkJQ3WRKKP1oss9UjLAp8h6sZk7nF3SnsK2SngFppWi6TL1MM",
  "key9": "5mLgJD8ebq6PSWBzdfMbJhnumRDj2E5gsZidfjX7HQFrM2a11FnMY5WBGQcB8xPVNW7jTqpBFVJmxxR8YC7Cc5Po",
  "key10": "kVa62vq2rvhvZvuHaHruFSdURVYtK4jFFYKmJzxipC3XBTXxR16dzEs6rkVbZw2XrHrS3aLfi83buyH4urYVmu9",
  "key11": "4NzAv3cZUEQnJctytHggoDJ2vmKZbEcixUpwNeHW6NoNpBjYGNnEPvrHWREmxsjFRsuTHU5swrxXWZaAR7UkVwN5",
  "key12": "5oUKReMVSnqx5XcAi5rY1YAcAbe1Cz4Ue4Cz47Ud5XsW754ZHsCDxEmNhdvXpBowCqi9FYYwsfJHyEoSRDmGtz61",
  "key13": "3KBFSuxERz23dEkjRk3LLUhxTFwgYzeoYxgnTkYsPDvarE6raLeTpCmdizdNGXfZ9fokcj3hGEyxobiJTVuFnzPD",
  "key14": "3z8EZeFQe6q8rhY657fTDc8spKuZ7vir9vfheNr7tquK6Wjigh1LnGPoYxiQmvy4c1Xj7pJpNVUeFgBhMgrbmLuD",
  "key15": "4sxTK7JXYEDZyoTRL7wZoJubgRhsCfmGcLDTNEqSZLUaiFnkGvA44hB2FxTnczpJJgVCPkzEKseakeKTm2fiKX7M",
  "key16": "2qjCQ8FoaSrTfN4LHa7oyoYChVJJqGYut6EmFiN3kFKGgchP71Axpn4R5rEgXXcATNqfLpgLDsHQ6zEViC2xDV25",
  "key17": "jCGPTNv1qghWkwmujKc48psVxupbWhWsVY6jruWsW1EsLkdDr2ApoLxAR7XPHKCxF6XRaG8vJNWrH3Hc6UkS68i",
  "key18": "2x8HVHci443bnbzruQzsBzwrpJXYrBhXxEKHm9TG7QC8QA8PSPJTsMKa24VV46BDKVXF4MdMdrwcHwMP7PQwngZ5",
  "key19": "Amexf7cbhzhsCQBDqKa9JJCHe6ZLT9EvBk2fRGeu8GsRbzuQcspfU6urRpPR7YGF3gQnUV9vpVPorHMqWHNyMwC",
  "key20": "2g3BgH84Z8xk3L2MQuxNTjYsNZYWJugD5kaGgN67WZSVozYsc3RRZ6CgZMdza385DqryfS4qjRPGx5bzwy28RrRi",
  "key21": "5THWEiD5Y98fLJdyJL5UPrPLPBboV9gYLcipk5CCbGMKxxYvgfbZk6GiR2ZwVanun6sQHhhgpma1sM3D9M9EhEHF",
  "key22": "4qD6G4BUhGqHFtSynjruNNNskd3jbm327X7kPGfhAKXUp9kduRJrqGEBPYgRxYZH85DkWa8VwY64Kd7Gfem8YJ5t",
  "key23": "5NnDL1zcSZD8FX3sBv5GUKxDFx6y7eZPMDGKKoZQcKjhS5rMrPoojqCzhxGrLPJGnwUuXPiFr6jbbg5ZkJmSqeZT",
  "key24": "4p1Pxf5CMyJQ4Dsbakd4uKfEY54y1mf8rC4amFMCbW8Wxtc5XEgvQKYCa61sA75FmyGcYsTxydJgsckxCZZRGc4u",
  "key25": "3aunm2LTaHCUTC2ET1f1eZjSGj3znRawNDLsFao6t4ZHcBeswN6HriLvkKFEZY5MZhNyL3efcK4R4dBQRrim4R34",
  "key26": "21ER6NFvGigJEaxf6KUSQbi9tjk56xUXayQ77fWPJioTrC2ewGDpouXmEbTbsyafpKd4GtNUaBN5J3yRUqDsQW3S",
  "key27": "2u2dqYHJtdcmDxEdCFcaG87wKvcB2GbGEgsakYoUVs61MHuuLKfgDLFyrg1oGoT5rwe6y2EUosSvD5NEfs747VJX",
  "key28": "33MstJDfQQLuWQVNg7rCe6Rd64o5L8aUN33RHzestkm3ncAKkGgbWKBrCH8wgBnGNgXBd1RzUtHHQFoxYEu2iz7h",
  "key29": "qeBDD626Du1tpktEabTCiUTyvvDG3XgF4p11wwHAPttxMMXYpmKEEw2z1eNNDTVTJD8Lt32ytaGN1xGGqGqJnAZ",
  "key30": "VT4Uwisd3AEpxgZ4noUHvwr2N51zTLVmatw1stTtyHCLyH4DCsunPbH8azCmAoii7FntxFejb4ntBs65KfbBWwg",
  "key31": "2NN7H5HgiRuYUUq8dmffVebhGQ1fS53odt8KGjvhMCK8mTL44TSgLRpyMKiWrBqJhoYh7Uw4Qs4PZJH9Se6uegMU",
  "key32": "4LF4ojnq2eEx5XDT26ckBA5pFJ7ACX5Wmt8PczPRxE76HpbHeYE1cWxPtnJmFwzzM16vKisAPg9nPLDA6kCPxo9M",
  "key33": "3w36GrpjuwgDiYkNXcN5Ba5gjJFXTrvsu2R4CcZQZvfa232bTwA6Xfuu9rgq9drpLJPokGEwYtBLSmrLt4LEfMbM",
  "key34": "2vCeRJQj6yCDVe8oKoi82MfbB2aTnkCWwnW1wi3wW5cL5Jgq5ZGKXbnJZuWH5su5HufiQuRbeZd1DNuCJPFmmdS4",
  "key35": "4fNqXKVzNjd652YZYdpXpv6QrmUvopDmtn35HPPQ5eB7XptwnznB1BGZukExioioq2nWVR1jvML9CFbT2sds8qVw",
  "key36": "5TeSycjeiYqnR9KkLozdsxwcPehNDv7jJ1QxtwEHpPNPA3PpBT8v9hDbwd9RasHyZAcCA8mxJMYv3LAsceZd57KJ",
  "key37": "4Kss5dDiFx3575Jci6uCkNkJcTwqTwjtdT73Tgqb4csz9PdBSatEmgD7Ecf43qExFZrZaCGZU9vHbadqbKYHwGgF",
  "key38": "2d3g93CWoCBAXjfg3gnaqMDwm1NRcfFcV1gvjBrm3RYQqjLiAicvLfNZiYh8eMup4uqHUwRpqiFpqtjkgRhH9SDp",
  "key39": "2Z5s2Uu9TeDAanyD1K6m3a2djCf1zLMbdLTdJEFbHmoxVUu7whamFAePYjV8n7Kv3VCRPGs1SU39oCGUkKRWyU2B",
  "key40": "sQf3zZmanXdygAaaW3q2jdY33jeQXrKNrkUsaNagoptuR6oyEMZRNe8MhwapfLYfHw8GYexPoB15izxoPKS9QwZ",
  "key41": "4hujrmAsd9VVR5UJp3K79B34d3pPviUv2bwzsVTqkeGKLFuCTknpxv73TqYagaGEX15VGtXzTmL2k953ffNLopfx",
  "key42": "3JeyncCxt93qwwMyCAGZBYnYNUdShXws3DPRw7MAgMT7Awgbgwcb67jry2b6XY1RBGbCC4kmdszN7zMUviXAcgn",
  "key43": "21xCmh4woUM9ayCnxV1nxQrsBbyyadMcBWt1frT6N6s7trP9xoU4s9ARPDVGQyGZZxtvBxt1YT4H622dimaHVvte",
  "key44": "2smR7g6xavqjsU5TmBwjeKfG466XUoGnALH7wctUPFpvczFmnmo3jFif17vCx37arAVj8DzfGuKQ3pGr2tS1yE3",
  "key45": "53huVf8E5bfsAKf1YsNDNtC6w4ertPoawfmopLiuJ6CgLFDm9hrrJ3nv76FrRCfesg3dsVxgncM99gRKSFsXZ9be",
  "key46": "452sspuZoSrtrstbTAogwHGYdCJzMv3THsEATtCyKLESJCjUUWgtBan6wHCSKXskXXYVEBJM8bMhC4rntEjWitmt"
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
