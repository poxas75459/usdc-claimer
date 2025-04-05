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
    "3ZAF6h2LsNSCd3XqwRmzpfGZfHLe7cg1AdqXdAjMsmvCZ7Qt5DyertLrtxWt6ahyep2SLtRdWwgHTR37eSRzVLtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmDXybqJ96wrhySR67BNW5NRgCYTvBRXLCmoRtxRnvjHJJPf3i8YHQRd3HF1woaSoZjKAoDoPsRHHQmZhWvmSio",
  "key1": "3jGfR2Jnet4ruX42nAWyUew4ZPZuVEjChSkfZsenKgWBHgr8do51t75nZWHHYbJUX3JAwp9XzSmhU7BHvLrPiQDp",
  "key2": "v3sRvq2kEtRSWTBbMQwqEkgXpLNHvtcP256uvEiv3hFskExKM4eM4dKyuUvQgjsNP9ATs5HrUnv3fFzmNZiT779",
  "key3": "3yL6Ax8twd9wJuabw3hxz6vCReA3LLt3Nvis6NUp98SGwSAgeuvdzHskUxUAw8k5Ybr6ZJDDsWDWcbMuV8p1eX6L",
  "key4": "wqCF3vEM8YQDPgoSVG7QRXzXyheiZVo12hGqk47kWVTEj66ytaQh3voZJj4raUrJxx5S56tNUuTUAuHGKURmB5A",
  "key5": "5BwewZMN8sWQftRZR7tkLRRCWcEZHmtKyyH9265Y8oiaBfsNZb7GF7xMQp2u3hGVn3ckMFudxHSbVw6jQqNEN2WE",
  "key6": "2NKVGyEnV6HHNKCm3xjYJHuB4hwUtvE8bT6gD5YxyK3uNv98rwDy45fhxSMWDECn8vG9KYehjXv4Lie3djbhiyVZ",
  "key7": "4S1ZjiHVRaNvKQPRDP1ggYktcPVg42nLyWi4GMiNNnGxJHvyVGFDV6rvcwyd5M8rutXamNa1ejRGjLdmWnrPhg3C",
  "key8": "3H9v7ri92sMoXA42WHiHbTcENF96TkDgzGybQoP3jbVdsWrKptb5Ncf4MVn6HbV2238PMjCUpT9FVckHEwHt47xu",
  "key9": "4mWPTYmscKTbHnc5PqKRHSPsPSiRUVnzxJCVEtd8KuHYz4fMdS1JNSK9PdbQt56zAmk6GpbgJzNo1QSYj7KfDBEJ",
  "key10": "AGZS3j2asSfULGv5XGBDstvF2UNAuRUCwyoPbuibKaeKiQZcD4aT2W4u3PNZV5CtAdXKotRL3pprejSq4Sf8Zd9",
  "key11": "tsBUTT9GfB6yYFyHT59Uim47W3S3eYruMHWWnQxX8nYMZyi8yCFvBFPsoe9vU3cVaGgAtyGMGD4wc1BL91yKiNb",
  "key12": "3HRMwGGuAYFFAxsDYaAaGM1GUSbFAZLzWvrCc6jNjrLdFQag951YY5k4hNYqkSQW3eNA7QAGWd3cr9VzsMK3Udge",
  "key13": "55o8UpcdKuEBvJ8JmeUeJDePuNnasECSY64uyhB1AQ7ypCigWjyiQ7cgmPBag1Xn6aQTCgwXnHLjw8X8JRYXqGVt",
  "key14": "2ByUiDXVZcP4wAZYfekM5CEBgnovoGbHNhjaPAhNq6cytKCbJDM3ceajHFavvrVZMXYE7xXnS81CL33Yrjrsqwtz",
  "key15": "3YgPyiotYo3N1Jn96C2sbzQeCMkZk7zEDCUfd55eXtm9iKPC4jwJSHt7XS5qPXJFo3f5J5vQqkYy6Qtp1Yi2CHc3",
  "key16": "5Rbd1wi1WdJtuuKfXB1G6ryqa65JUoQ77idADySWghUhi737hm2m9q8vEPinQF7duKofHuidEmxBkf8ucZJTBfwx",
  "key17": "3Qy4yWN79FJksJwWNL7ws5aYqQVRJ5TWAyxWDtnBsUJj3SUosTNGpcHGXKRcBJ6vgWfkx5HF9uZAy4LGrAkXxswn",
  "key18": "2FwGpcrbSSo6wbhvd3zNeqzG6b8ULCPdZwAwsZtzEsYCnrbjvD8b4zu5pS8RewBHKEe2VxJiHXm8pkHMBCGHH9fk",
  "key19": "2UfDGd13vARLNp7qzoAQd7Hv8L9ZVV7ULEU11y4V4WiAraWPs6fcR6namQDfADq2zP5zGLqX6aPxvKMLucapUduk",
  "key20": "z85NKbZATLVjbZEDVBjERGo3j4xCyT5AC96aVYKwNboqQHQoYmPjss21ipCTLf5LU7Y5sztUWhTw5rYvuzh9JGm",
  "key21": "4D4wLzRVzaUA1SnDosbkHBu9d3dGqapTttLvHaDUfuPMmtx5QFh2jxVWWqaL9TAvFN6rdmtA3YWLZ2L5j5S8gga5",
  "key22": "28Aiuxqxj6xqaEg6XgrosVwCAjdCqTwEEYLVuwhgwxGPbrEV5bnc6YqzsPPtvBAR7F6fN2jsBvw5RoFUejVPSYKT",
  "key23": "47BHCb42efdzKtYp1Pbr8fxnzatJWairr3fA6XXWR2Vd2Lca4CeC1dKhnN8RipQL6TcTyyznrWgXW1QZJN5nYoq5",
  "key24": "3qPPFgg24abcNttGw4v5n3ZGqh5B8cefiA9wXKBypPw1csUYGoFZeBQPN6ovcRbARRPUjLSV2z5ZPFWgYuyty1Um",
  "key25": "weQ4QgULgeDgecmGmBqjcV25fEu2Pi1Rkhkk3Mzsqf5ni4BFqc7WHYZwTLreDYVdgAUq99iEa5MFWjPn3iYQQB8",
  "key26": "4RPvnmY4KXMY3cF3tjKLTmjTS5cuzxMxbDCQUPxibx9z26eW1oC8Lr652GXsbv453f374ZCMHtWNtajoLT1n8m9z",
  "key27": "4EMCk7s47i4xuGSHmds2UhNiCbXZUDksEn4yHDpVBbLMxKXdSV9nwXaDW8FrHBvEdsXCYiiYHP1c2LDN7cqgFQAG",
  "key28": "4VSG1o77EdAkLkbrwgk2XGC8DQB4safaQBnutin8vE8bLEKoo7m2uFV1YdezaKbonmVTqLsiVPbWGLBNzmmagJqx",
  "key29": "5q8aA6XqHUVt8qhZ1zza5gmocf3umJiq8dAp9JW7N4v1eujv2RwS1kfL7bxLVsE5jg912YEFCggK1Ez74i75k6Bb",
  "key30": "b2M8Ln9cYMDopPx6gdCdZm8edsNgACcaX6aRhsbeBx2gFvKHTFR3LT3uavmsdbR1gsw6qie17j3UUJuBFa2z3gb",
  "key31": "5Qqm1deWVEqMNaDPRLnaTvt8AmnyUeC1c4MFaQEUY4cytPhJsZMWW7kGjR4UC5GyfRehp7Vwi2b7t24sweLsa7vW",
  "key32": "3WcVZPcHgiPPcEZ32eBjcFfhgEzs5xrGxo9XLg1DZ8fLUDmXo1aN4FokibekwL9mtteHZtVSfJpTYBtvWxGoDuNE",
  "key33": "5XauoEgDr3Ggx3C52KzDKbkmrMLfkWHNZsySzkGAEv3c39TkmG6cyLYvfuf8ayvsXGRmpfKY5oKT91M8cjiuoSor",
  "key34": "2JvWEdUnbecsmTwM4JFVRxjmEERwzkiB21XRTCryzfrmH1DkFTwDnAX1trnsKF7RzNgUtHHzzFYrE11N9YgATqYc",
  "key35": "5UrSvSkmY1bW47LNjzvJiRL7oxCMDAUp8Ggp5KWiAFreF14AKERBGrNqkHz7TydVqj7hbefPThy6mu3PTr44dHrp",
  "key36": "3MyezxNCZGND3gDTmmeEXPv9TwjTrg3c5bQhH3e6FjkS6Lztcr94tcHQxGrvb5wTMji7DbstN6RXkA3sykJj11kF",
  "key37": "4526Jmu3wQmoZzpsnEkT132FM22ZZwGwckiDBN2xjhcNW1XCEGy74g1RGq8RtVieFc5Q1UyTygAhw4MwMFcHKSsd",
  "key38": "5NakWaQN9UX2Jps6FHPWybeFHjkDWe9SquRGdLrf8KrMGmgq65bwZZUpwh6qjwKtVnd9PZXdsbqHYEXPCEszrHJB",
  "key39": "3FA7QxHn9ZC122Go2scHHqPd9oMZvvkPcrUzHcqxLPSvWuW1tMWaGgi4tn4JHzbidPk2X5KwGfSYyFLWKyb6QD9c",
  "key40": "4KbaaHU6SVD1JveF4sKuYuAzRXAtKzERjBkNCqFENfDqifzJEn5UALmLtcN52ZEdWUUC7eCrecDEYgukaQrhKfzP",
  "key41": "5QfmipuavuUu4a4mrKTU3cwGWfYkFopT96WJ3AsWWTaTYZVLSgeQEuocRn2zHrSEKsGQqx7SWW53beR3VFArcusx",
  "key42": "5ivsdjMa7kNrPw2FsSS2DnDisMZ7mudmHifhs4y6GFsyFHoyH9EYg3ciYbyXLLzv6KFvJYxmsT9CKQ3n2kSYxCtV",
  "key43": "2Rh2Grwf5vBtyR95TuDNsHXSjojPVPRy9CMepvubPWSYcUMainPMcXK12qpXsmh19jNbiAbCrGHoMPgasAkDebpp",
  "key44": "VMCx7QUgenqgGw4qTb8LRmvKw6d9WJFRdZzKxzzfyS5SztgaQJfgeoAWA3S4u345HP4DhX2Cged6nR5yjyvcTre"
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
