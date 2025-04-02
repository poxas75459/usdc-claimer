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
    "3Akvd6pid99bwqGxHCxg2aiBwBPxsPJgZxKNMAzcrUDmtzSvfBud5QXF9UfPDBJRFjGCe17eikhB1ZSteGPjBJVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSAwQZRXqwDxiN4pdwAv4ZFpfQcFMmuCyf5qqtUTePyGgbgsos1HkHoBJbRckpqeL1G4jjLYM7uQupvMacP3x2u",
  "key1": "2NLfGD8LEEUX7f5hVc8ZqcU3f8uVK2kUFCh2WGpUasLhTMSkvyTrbo5g9mpQu3K91qn58QQKjQUJGFSXTMPDodbr",
  "key2": "2q3cCCXWAK7m66oL7Shc98gtpVVDe4B4W263DDUqmZoRT751tksCDe7p4JdYLkVo86hGXrHyg4DWkrxgCUv2DRmR",
  "key3": "2JEj3uvWZuf64ugH7mneg37tEsxeE1YBAqwerJkQrZSBnXyxcjPJAPYqCLdys5372Kwe7tNFBBsRaeTfNKXtvmPh",
  "key4": "vrYbDLkSrmkGSGMhLFM8mfQP1Z7TjYACsAic7gBVyqzcTQpDGXygxmzC3h7qAiYH5UgXZn43zPLxAYVknwhgsis",
  "key5": "5CmHvVQbMuzMkkRHC7pocvrPBzwx6MiwvJ372BGD2SyPEVjecHcfoZDuUsLrrM3KnyB2TcG72ikPJjTMEU5Frztw",
  "key6": "2myDLQQt87cPMRHgmt2RyQKjbEjoXTsVBJzSyLp6eDZweNfjoVwFWJ9X32gPbufKr6s96VXqFZVQ5anzg5GZqq2i",
  "key7": "3xPDAubP4EMJAq53eM8vLwBrWg895MgDJdZ8TdYRmNtuQfWdjAP6dTK2szksH2WgkbjS3jxcdgVfnm8mr4RydgH1",
  "key8": "ffTqhgJ8WDJHc9wf1L7G8xmKs2jY4RuvRWx2TsWdAkURQZce6AQubeRi9YC7B3NJVf6jtH2Sm6bfWsACTUCVdY2",
  "key9": "2L6MxqxxdTKySYwEu2BUszkt6NEbug8xa55Txk6uT9i8gAQv5awTBC5saQYD1Ypsub3zYdEDbQbnoyotGB8HgjKD",
  "key10": "4aPZWUv6onVpSdDv8JfdQpSaXFaQv7bUN3F3AezB3YHBj63YUkyp8dMEgS37RXd4tz3ueb6ZXCAD6zED1uELX7ds",
  "key11": "3jdjhG83mkRXU3aUBSX7zaBrpfzmaTCcBYoTNwAnN25Fer1rC2iZoGa81e4AybmrJVJNdfVyYEkR1nkpiT8N3DFQ",
  "key12": "2s4FdF3tTV3jBTDmNaM37oVo93FBm6e9vctupgdzJ61uGHMStV2cmDgFfRz5XaA9iQm7D4TeL9YAJR93dCFM6QNM",
  "key13": "3XPuYmJYSEvY99MAUEVfkmkn8yqbRq1iQGDCwLic7T4gD2KUQ53QVLQo3UgPTfX4wjcKqfuQG8aFQztqwqhCoX2X",
  "key14": "3Ny5ZMbJpjKhv1ZhJ3cqV5VEDkqW8q9RJhWDAHBjgzL7cebGqHLRjdpWG76E1XNW8vE6yghzpBWmPhoyXAb2Hkys",
  "key15": "2NPHXKVJLAJtn2QBSngXCTYAur5C9ChRXvChJBxVo1Kq9PR7jEm6h1qPyDqx32Jo5FwauoDjkCxsG94wUPSsahkx",
  "key16": "4WVzyvqusv9xyqhGjVcvDp4HrCERWu2WC6WpsVncA3Q6E4PfrnDF2TRspzPXUTJZgiMnb42Ep9Rh4ZDLKRqnLj1",
  "key17": "3D2tyvz8M7zZjbDWmi33mXdd5cUtnebZKEggwhiCsDMck8FmXAJEskoW7LD4geWyE8AfSBCR99SHc9vWgNh86XJf",
  "key18": "4Yzcy5aVXB89T5iD4kptXbxvRro6sPtbC4gfGuU6nn267jSwSf8o8mzS6JqNUhUCUEWLX4UJVsw9qDSv43hcTX7G",
  "key19": "9xJGgu1zcW3hSpjx8bvhqGWWw42xR9KXLmKcnF77mvWvtaPPeULeWeuFjEtBvgPZdmVBnyE9Kw4KeyNEZFuiQMY",
  "key20": "5JPAXHXWHURJvJSStTvG7LMLYxFckZhCP1wjgKnmN9xdoSDEnxcsgTqJkNcMoLDBQeYj5m5wD1uL8M3srEzUKF8J",
  "key21": "541e8syXM9865GLMjxzoCDKbSaRaqbWELFG5jMnG1mJfyCNhkmbVKZiG9BvjVxzT6PfHnAnrLHqCeBtNTLDEQpcb",
  "key22": "DxxJskF4w2Xh1qbnjRnjUgCH4FU2guc2zb8R7U2JJneFgxByQn519dN8RxUQdpouudqQFsfhtVH5x5eTSabkWWB",
  "key23": "5euXcoAgj1TsqivXmNQwJzxB7SYfFzSfKBirirjmfMwwW1rBkfXbcHo9hY3Df9Qxo4viv4gQxxCqEPZ6LkvuVUMS",
  "key24": "4fEvxRiKcuJ3nhfwvWQuH2Lp2VtsrrTUMGwTAUSuithGcbGr6UrC9A5CSsBELCBCdRk3WzdSwPfQ2ZtUekJtAzqK",
  "key25": "24V7pEkeeKdGLmWWuBZdn81SmwXdvkxHtAfqgDiTzmhqWBCPfT2cr3HEuzkpdiexJjYnpMtbsTsLrKcTKYychNqj",
  "key26": "2HTNTs44qAuybxYZwKnnXBqmJRy9VkaFKbYfw8mhFoaxwGnChtKT3AUgTJqiPrQf1EiZsoQG6rboyJZqxNhQUXnQ",
  "key27": "3VCpfwLKJY7dZE6nbPpm29yyj68M94fx8YUvzYRsYZsqAah4woNteS8P5AsLiaSfwauo4VHa9aiMANdCJyX8XCAP",
  "key28": "5snMYNomdr9opjfPB4HHK3VW3ESnUWUJSGpKDiB7hV3Wc2uZPRkGqi4iko8Nbsz9QsjjnHeNUbLuiARBK622vjXq",
  "key29": "66keEwwRG1yaQeC45qCnDv4H5HCLeE39sse9YTqTFKxnn3G2bUp61YmbFfYBbpywJuMLjgsefvRCphJ4dX6Hjwtt",
  "key30": "vQpjP3zLAyBxpFR9yKhGMw3989fjASZFmbuwjU46gLBAPgMnG8ezjNJwDXK8M32Wqp898Zo3FTm7Kmf7u6i4Ue5",
  "key31": "5KPavBQngRDqQCgis5DwHS4j4TeXBgLurBT2orNyyibtJT2LrKz3vPQxvD1SggKypqwVu38N45Bvf6yuQQYBC5ME",
  "key32": "3H84kkjaivu6QtpqeHdxT68kwJM6EU2FRyu1s3mFqsnxh38ZLz564Q6xFSmwZ7RisRvKHjjjToxjh7iuFKveweiD",
  "key33": "2QSFHb3Nia5sviChAUhTrZ2jQLsg9XbEoCNd8DmEfjEaYytU1HQuMSTF9PPxSLXLmdvNKx4Jknbu7rxcxe9d2a1t",
  "key34": "5xMLFgi3adkDzsq8WxhnJ5KwHtDJ8DyNChGPsLGethBtfCCGJmvKaEcVGok4fojnYAALD7b7uJztLzRES7UTHRo2",
  "key35": "2MkqvDWYsnCoAXkF8dKtVUgtgoDTPpMcPYg1AuwQzcxJs8BN1rPhSfR9YFkSypJUpQF18YDyJc4gw2eKyPEefnUv",
  "key36": "5ph598VfjWAqgLawPoiw6ka9RYdUYQV6xy6BFWX6kgMEWR1VL8w1MC964P3FYHZg52LLGYbf41aEkz89TNwDiDZ2",
  "key37": "SSKqW5y7zxWNPFZfVnw3ej8GWb8cu8iYy78k4BsDZ2D8JEL85pcT5Y4pKTQoGFoR7teuZwXKqpyKpAmMvB5DfpG",
  "key38": "3k22MXXgqw18qqBW4tN4G5nzhwBKrPMAUsNVQ6Eaxn4rVMaiKWVFKV4KdiDtCHhNnRSJSCnV2rqU5gZemuaoWuWs",
  "key39": "22xAQXderhTR4VDBsZEp7FKfp37t1hE7ktNHF52X6eAEW76XXMFE3F7AmZPkt6XtdqUW1paKcd2HwpdCR3ngKprV",
  "key40": "4uWVMyCP9WxYTVwk1PwaYhPrqBtqabBnMSQUS4XqyoDC5cF1GJZ5sKih3sNfnU393UepFUXKpAgjBVbHZKSSz8sq",
  "key41": "2c9AtXZQkbzvKV5bbQ3QUzzhbLg8ezUyQmZfXnjMF6RdRMfP6cy9GP1wNTi1KUASGqoR1nNkRyuUXQ3zzTHUNX8p",
  "key42": "3jQ5WhtKjcYtuXETnDy223CLb9Kc92RAQvm1nXnzkao6VQgZphXd8NUAsQXqyEwC4gJBBhaufjkvGNNkF2mtn4nm",
  "key43": "4vgLeWLNcyZucjy63iJ1CHofva3QtTSoVrHjr9a4r27FrjHcynRAEg4uXA1pKez8zUDpRgnG5nb6RpaSyrRWdXWA",
  "key44": "4uSxwccJdv5LYXmLoRVhjNEM3EioknF4vXaG8EKs4GpPb57cp3jDSXgnAPzyoc1D87vLrsrwg2hMwSVSBcmAFhQB",
  "key45": "RXBY4PphHiktqXKk7qn4HQ2MuLdLwR7p9QPrhQ66pLW33RXk6yfFncvoeDaiS2KKR3LjpjtstZ6xVP57msZd5WK",
  "key46": "2voL3jsSErTf55hhVLRbGSsZDYApjku2dRVMu3kbuPYfFrornau2YTNfexvXsVPYSEnPBGEf8hnfBFAATYmq4cLi",
  "key47": "26gLNBBsPsJrkhaUp5kfLjaN5cya5Gq7mzsYPoGszLQXPDdx93MKAcu3ofLU29MPTdgF5tgU9M8DXDwXPAB2vHgM",
  "key48": "2ePsFxgm5jZ27YCqzoTnhD8uAJx7Qi8ZtKPkiJKW2PKPf9A7zRmh5JiBSSXA2Xd55VN1FiVGuRqTpvcLP55vzZNG",
  "key49": "36Yd3eAMYszRC5VTew37TXMewc89TebV1R4KwTE6wKMJwcFeAWPCg25LrhzwQpPYa9xxGES2yUifAQorpWnwdBPB"
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
