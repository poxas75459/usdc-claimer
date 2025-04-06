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
    "22CeDLwGh4khtTRqj2bGYKN4WWz4mfKsMxAeGkFyHZd5UTQjn2q7L8QTWZqSk8LPw4hWLa97Wi6WbCygv4GAGyCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNKDJqcZFCEbbJwnV13k4CmLAiaPpnN4o5mF8fAe4NLHnVQU6WDSdDPqK4S1gdjosF8TtuMhbh37AmoaW39y3yo",
  "key1": "hnKHNsQ2vCGLaw9gQxheLCiR9yhUoMGZEWCzd2kmi2KyM71TyjqKWxhLKfqqVF5zs9yE4cg2HyCvSkw45tBDt1J",
  "key2": "jsW1bp3khWnr5on2ksoMDEypU8S3cx79m2MJm7bgVNNRD8mv6mLSM2FStqhsG1oBtLGXDcuFjofVHhoJjHRMPNK",
  "key3": "4NTZGv1rGjiUjKBquRPsirGGuxjSMr3qQHfrKZAu1ToWXkentPHzCTq9M3NetTgWJetKR2XCh54RqKef1uvp1a8N",
  "key4": "5qkKedjNELdSnSPYvFLeweG6B2jT9KtLoaKZnVdxntQxwAexXaBuPSqrkEHhsyq74yfqEMrz8pq9gj5Hzd5NipTD",
  "key5": "5cuEZ6shV9fVSZTQypVDAV2dXmyCVnAhVhNu5XDi2dJV8T9gDe4445eJZeiVyRRuZgizQG8rD5tijvSFi3wiK7DK",
  "key6": "5XWDZdi4MNicQ4uiTtmdq3e9VRsX4q5sQeVy3PYumFkY3TzmbAzH6ERVoZH4HxoCEDnyfWrjwsEqj23CodX64J9w",
  "key7": "5eTJmTnd8yLfPEUrtxAsf45ZW7V23Jo53YWrUaGGXULck63cei8EqAymPepTn5Lg9PsvikG21UEjMJxzsRWpA2gv",
  "key8": "5yVjyohVCDfbah7PzaKHZ9Akrm6PvDjSnGh7UbamkZjiqqpkHTWYWpFR5PxDTqSEp2iUeWJWQTmtZcoLHGHLiUwj",
  "key9": "2XW56EGQ8CD4dvrPTTJsKAAL6qFshsoPCggwCWF5koWPdMPQWvfY7tQTqm1igT6pqzhXwL5v6HzUnLu9YbkRhCHJ",
  "key10": "3wMSXpyJHkcSwFizL2TbwWXNY4T3kXMQxFmhVhjps9YDiW3WR8JFZgsfg875zM8utYdQDSUFFsp1avLZEhS8oqZX",
  "key11": "3BLf7kMxP114PPRUtvPBLAEifHs2VTXNWZ6tPQLg2TsW4QJESFbxEc3U86tY4f7QdJcVG4H29Wvixa2uKH2cBB2J",
  "key12": "3jjXL4nTTxWdRa7gkiaeYNH1XFot5RoUAX91QGDfHXJNqZygdkBdy1xULVSA5sWCVT5A3W5zRzwhk6txsrGxQpqD",
  "key13": "55NkdeyBdSgn8EmCm6wdUPWSbbe37AZJ5tLSbkzHG6tNUtoN17SqzHLcT18WQsaKdeaqEUQUB3k3iNe96dwj8Zx1",
  "key14": "5mXYEBSZNsQNzMUp33FN7gd6pYNYayJSfvFhPFzpWisM3wN4Y2aAiAuwPNHRu2bFF9qLm2Bz1udQ1uqXg4YeofMy",
  "key15": "3DjzC8AfwtxYZLi4U8Q1q2vNbFFATCw2oTRRUKjPpsjxhMB7fU26pdEUrprLEaCGfv34Rz9KPHNA7H4DjeMFjmjQ",
  "key16": "57wDj7wgiQwuHUHXgSEEgy9R6KCnU69pjVBiboDAAZg4ByDSuTtdPG7NQVcrg3txkvo4LNo8YznkwpVfnFjbPqck",
  "key17": "5bWqgkJ97XwyBPgbSEowJJ3UfCPh8Lv8uFzRyY71Tnzk44BcgNKS5xyELqbtr2Sdvh5XEwh3KKBitvvMjTpMjkJZ",
  "key18": "3mWAH81TCN6EWgHAPhzgTbPZZnqLhTVjeQX9k3GDLgCk5Z4V39uj2m3fqovubLQWHJpgk6s6rptYGkK8tPoATWB6",
  "key19": "2Y7Ckm9Pt3D2jjtwkJDy7aHDJQYcdP8RKSgrXF1g7Hi5bZpzFgnj74wXjsvKANoUou4pb7NSRtGEy72onEvMGYVR",
  "key20": "z5Rw9ze6YJ1FZNsyUXvontnsqUEBBY9naJquQGb4dMqqBmuaxaiYFyDHnjSX9XUJKzAfG22pfi4bZZWZWcw89uz",
  "key21": "5p9qNrycHswgKiUs3VTU429AbJmfJRzjpWWYNY7p9AneQrXyz2kv6rGssQ9zkNokm4LHdQu2bjFFcBVhFqmFYBvX",
  "key22": "44srvJ1KTKwVJYr51GABUGFaHDBq3DyvJRTC4EJuz2TnEH2j7Atx9xnqzUCmAue8sjPsAGfK9JzCdXBNDPhCquhF",
  "key23": "397ncd4ByHZyCYL19775tH7WTaJvcyq8WMWSyFqkYwLKDGxTSGhFbHXRzYyRiLtvbHDSAd7PWwxLL4Knes5wCt5P",
  "key24": "4KgJx7uhqteu7qPzP9XK8mTcu4ALnPemvCg2tPuoVB4LqfEH71vPkb1tAhnxRts5V4vdXF3fZREjaYW4QmhNhZSB",
  "key25": "jqQ2Apzu3NuF75Sm4NMRfpuJSBj2vNmG2axGjTo3K5TenxhCduUYDNunydHtWU7rAzpAPSDNKKiMf9Z3EJi3yZN",
  "key26": "2r7YnuHNj1BG51WYb79KCs7UimPwdmvrcmJuZfJ36tQtRdpN3YZmG6WtpdVSZrrDWu7dFJ2cmuuGxdC6H7DvpDif",
  "key27": "auSGEhr9iPxFyKskf3h2x6zuvUZp1gviuBaNXVxndNGU6eXDtSnWsQzH42RAQGscXyvivxu5zpLs255KyTTjeTo",
  "key28": "2Lx8cbUF7pEVLyumGZY4Hqx6tqSG9UnhZ8e6HGv1LjUqYW9xaaB7ZBNGK7mboQyYhiFtrkSHHsd59fqKkyVrwC6G",
  "key29": "4ov8F2ae3ink4WJaJzNzSZ8gKDec9KDqnbDfn5txhcYZh3XmKMUfe2ENrPk62gvbVqCHF3JwYqi7gL55oo16md6Y",
  "key30": "PLkKq3B8h8ano8xXaSN8FD3maFUbsdxwvLHNWHVKE4XLAiyVC6rZcyPJcKaDEgdpnJEqGJchFzw2h6qxLErvGaG",
  "key31": "4zqkCcoL4pUDR1Se3b6GwYBFmujLZupJ3DMeufr29PWQVwWtjKbm6jA3zLTWTeP839cPvmTpQQt8kzPD8Mi1fTdt",
  "key32": "4Bsb2hUC1SmV6ZNfrM5ju4mvgfknKRS7WdSq9uNA7eXPbeDcC6gTEaA8A3M4pcSNZPmVe5Wr5MTZZ7QoiACqT7qd",
  "key33": "k13Z3EBEHHY8GmP4yBfkTEW7EFKMbGSFsLzdJP8B72nLfGcR4BHjuC2DPm4FQdLJdpzE1y6Dj14xoau3Wm8EjrV",
  "key34": "37tJgJwBR4AKyakNyrBYejfgSE2f2WRySHYDkgzUSiooVhHdjBbMD5Y1tqkT55BvGqXoYgRgkHSQtJXvoZJxcNm1",
  "key35": "9u3U86Q8LvYJTJBaVHbuthRYzMBDUuCsc2tGN6URe2a8YgzgVD8CuYyzRVef9JFdhgR69qgBHthUbwMbgpEqo3g",
  "key36": "3sPvnabj3xwX5Q3Rxpj2EJc3o2VAUaq8SDgzvcfzyDbGdNadE1fbdYX3VBknL9qeJ9Vtg8rjKN7V9PaDTx6PTmCE",
  "key37": "7xzdaC37NB4ESrrtwM6RJQejfJ2c4n1hjLHdWwabSpYhWoTiiyRoQ51R4dropACwTHBCea7RZKsoP3m1zoinF66",
  "key38": "ZwGRojC7MDQYBDvM2QLSrT69ipoazseZbLikWQomqTWoWHgPtjAMr8CwsuQgfyvHsBnxKjPtA6Jakt7Ai8gN877",
  "key39": "49nxCAUQgCPRpGSRqnu8a8X2w2Hx7mtsNYqM8v57s89WAhSapWFkaQxNZpeADqBfL4GJnirjjew4xuWv77WEAm33",
  "key40": "3G7fZ8HvpKz7LyyX1foYdCByFekkupW1qRpJ1hn8D4vJyqqArH3YdaFfKi56sNnqV11zNpQ99nHw2xJhcQxZakog",
  "key41": "rED2zjNLmiS9yJ7MZGbzR2YVbBrbxJmxBxAkdBcyTXamPSn4tx11VxkB83HsegzwQhk86n64QyssuRaWAW5VJbP",
  "key42": "3oyB8R14eszVh7kmotKzCCt6AxtdmsLAxkpu4cjvM9FGhCKRE5uHhwPWJEJEm1duztn8qBTW4Q9yyAchQZPrUKRb"
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
