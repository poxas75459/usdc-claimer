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
    "YfbXuZsMWNqHqqzje4T17poDEx6A2eVPTuhAH8wdaPoCPgU8ZE8b6J5LZk56hvQAFZeQsUj6o6YJVBfZV3Cy6Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RbixQVsL7MUCeQx4nBDuBaD1Ruxnr3H3bYrpiQekqsHHfKxsYm4HPXLsBBm6rAwKTonjW5YC867AUo38oM3H26m",
  "key1": "2psFwvEahv4FLLDvu31q5g32G53BTU7oCeCrzAt94wy3ysve23z23V2A6MTu8Z22ge29tv4AkzkpatC5Rv83ZPn",
  "key2": "5ejQ9J16q9f17GJRSwiz4sHh8uBxkYVNko29NMAkQUUfzbcvqgSdPRbTfNWK4AxUJCDoN7bvfYuHgvVj1uVXFvZ6",
  "key3": "2kUP9y86pHRjwhs95YM5iC4sLqKkawJXmgsnGnQzcEbmA7L38VJ9vgz7X2cN95BYqRo8dR5zWt18KotFdyS9Q9ZL",
  "key4": "5eWZ28E1z98K2436s8hfKwVu3H3UEgmGwVUcHqf4P4gFo88WxA9kvp2dYBVMiEBNRm7T2jkCR9yrGLVN3HSnQmHL",
  "key5": "5NPyp42wosn7Tvi3vs5xrdw7UXfrdbwxwHdTTRQGoSJsX9Wqe3VKKSM6VTyASAXD1hHDi57Vp5v4yjVtnYKdKKWF",
  "key6": "uMyU2Awm8gRdMoAi7VAT9oFSsBH9TprSTnFXj6ajhTXet8uPiHTD3u5NPzsrG5EL6F6qCASqBFKecUB1eKXCBjf",
  "key7": "qXmQomZbZEvsfn7KBKrinencnSCCuWR8g4gMz9Afs4ewrN2QANfGZBkH2GpB1cSAShSfFWZLXkUX5Dw1saAM5gt",
  "key8": "3dtHVR7NQJ3x1AquekmHJrh4YMxxPP2pfPqhQRTqTVwnWWgbivwvUhXvKrYccTPzUvr7cj2mbn1vRpo2euvh3vHC",
  "key9": "5P5xs2n34WDNhPBVJzoHrMFmSr4URT2pMZDDw2BKvqM5JYD5pHVgCT122U4ePcEmUu6woxMosGFiCGZQYuaSJdxX",
  "key10": "4A2U7XF3YgUizFLJV3bGg34CiY13iJ9Nwcf2igyZKgxTtM4UsR6So31ibWccsTxH15xuyiGkvMgDZ5XzbRSB14ho",
  "key11": "4vSmqaMDDib2LBTuerwqSxcF1fNUaX3JBFZkYMRn4G9eG9EtxTXHiw3MzECrgWzD2QCXfmFHAZ5nm3G64XdYiwhk",
  "key12": "4zU8yyNB9TRccHRsq3rLnGP55TS1xSDroJ8ZSekt4DNkkZWmZinBcNTqfvK8p1Bja1164mTwKDudsWnUkGAugThR",
  "key13": "2UHr5husMGovP6cFvM5EnYVtFrGAuzwphhX9aL5LhLQpduqnVeiibXaMHQbHnsoVSvC6TXjUNTMQL3MJYsWUAXCQ",
  "key14": "31dhyKv1LGxrJCLz9g9KHwoyMmRBWfwVG4v8fbZdLgjGDn5p5jU2wvvxuPMi7JPDgpq9M4qb6PYfczdEjrCvs6S8",
  "key15": "4mQ7GHJf2pme8LWG3mso1Nbg6grV4juUqfQvwsYZkfxF6LZGamakhZNMatefmJHV8vVXFcVXUykFq1uo2zrKQgKq",
  "key16": "5NDrGBJQTJZn6AvtoR46LtoScvU1w5nJXkdwDqqEKUdreRRRfcJB15JxWqvn497w28bXbjCoKAf6qbwWwWvmocaV",
  "key17": "ZHzdxZv69ohdtFMgh8JedtRpKQNj3PoGqgXRjjkkXSp3A2TDtyD8RUFkTyxFKaqLQNfsi1o9wqZKSPRwFQHACr9",
  "key18": "4jB1JjgwHqDctLKEVxWkXcuaaiAubRcVQYNzKDeMtwHMQHoyZwQ4BTn76W1LmkywukT73kHJBF5CWkDYq3brT4em",
  "key19": "Kpu76APgqJedRDAMVcak743VU46xdnZFgPHsAKDpF1gwQaQykpz4ULwvgbA6E7T6YT4m3DV5NQDM2P7zNqhxozD",
  "key20": "2bksyyqipPGYF9h1r1ABSQ6hsMxYvNg8jiLC6n8UcL2CegGyYpgrEvDmPSMPLhxDGp4fWVNKNCKDnAqfcVk1qY1d",
  "key21": "5o5T6vrbwy6w69RACtRn5HQbgNJRW5XDAupA5WrojsKcx9vR7YQxd6NA7yM2n38xjCEroxByonFUFbtiEYQCN8DW",
  "key22": "59adxrtKUCA5PreGaNxR5jtkYJ8u6cUfvAThpP8L4LkFNJQJDp7SoJGHWLZW27yXfqovzBCRxYMgqbX3t76iVvT4",
  "key23": "5jmC6SSphhma8o5asMAJmGLDdTWPzyqgnFx1GCTuXVUaMoDgFVtLq1fkYbhGoeMPgN1Rg9qwD56z6bSNwPzaP4iC",
  "key24": "ZjduZc1Pq7KAMz5jmYdRgNfq3m6hnfmFR1vpq6T3RXJmAMKrKiSEpdkrSSbGULRqDggAan4oP9tppDJJcf1Q3v9",
  "key25": "U8x3URmBUpW6A7QM93KpyAFx8CGz2nmx5y3fLDUoVJ3va4mP9CCSJWN6x1cx22VmUoh4V2qVtci57ejSNJH16H3",
  "key26": "4j8kqF7zKN2raz94Bu3qqmNRU8Vb85z1qmvXhFu4NGXSkxcvha9cWGeGucpV8fGx1gzzTYMNWgXvuXnLxAKuLk5",
  "key27": "24PRbdH62hyk2dTs2RiXgoeBRrZnB9jLnDLCL1Hp7e4YgnoLQb4hYTsXHQyRQbWZjkLJDgMEqmEBQR79Zh9cAYQS",
  "key28": "2ADQqUuEbDwVSsD5wGzM499KwLtYaUdW8kn5CLpA1k45EoPYKzJqPJwizsjecCcxVgLKe3cVaim7YQaE5WHHu3xj",
  "key29": "Mf88cTfSqdSNjThMAm1bW881aaE6nqRr3zcUHC9Djc47zqg1icphEF4PwwmphLL88FuDXZToVX9XEmB2Vb3dQNu",
  "key30": "4v1RPKgzimaZCS76jVPaW2c6je7okLhKp5oaXfKfoURfsmHgrDfaeFRfgmEgHu8MTMKvzQLWnxj87N8uzdLz4VDt",
  "key31": "3FoZrq2LGvD51Jta67sopUe9EN7FExQXGBZbfaqRdcuXBKRH3UZvSx967r8AvQKy2259bRFkHMvtC3P4WaBXgyw7",
  "key32": "4YiYjPdFGRYXsFbv8CPArFMDmcpWyP4hgscKs7uL2R2h2mGGQUv4ggSXw5GFX4trnx4UAPevf53Zga8YZPmwEDrB",
  "key33": "ChDo1aLo7Mq5inJy4gR7uSh92R4FDXvDiEpftenaAXJJRKNFgukDTQrTZNboKmXS9KKxNq36hdidWcQgpF2pYv2",
  "key34": "2dX4ttmyuKW768ZeYELJy3FcZAQJqEhKtTQEtXJm2GteThuk9NdrpGisw6MCeFEnCx4fzcZtCoGjeC6etyoHG7qu",
  "key35": "2iknXgMjFTnk8FnZA1uSkvmCa3KFEevvg6yWL7oPQJzD2hMZDfgSngCt87aAHAyB9aGMNPV7JuB7u9XTGUeSf83",
  "key36": "3dYPiG9yjs7tZ9gWc7pkugr9t2TaZ9M1JJUh6EUB1PEm4VqRQwqSS1meuJqKSKLR2NqGNQZDNXLhFwf1yf5Qqmx5",
  "key37": "2nNzu8aPjdW5o2pWbiDPy96UydH5CEc7UboLzRkSztBZW2nfCaBTfEoN2B3tcAvuko31YUwKUsRd2MrpdvEovyK2",
  "key38": "WNZvjBegwZWbR3vmzKQuan6bH6inizmqsRHqN5F6cjsL18rkLcnBArv7AFjtU2JwJ6SRAHu5Lo9ek9ohoLmRj28",
  "key39": "kdxuQBs7vZ5fjQvY3DCaM9LbHw4QV9W3zpuXLTkVefY6WQEzVknpEN74gojqns47vJuMNJoavtVtQEpobPX6YuV",
  "key40": "3LDhhk44iNw5Fq5nasQnzbjhkwSXs9sCtS7M1gE2FbseGzFHcZeuw3Ro4g5aRC8gLYBo5qrHuiq9BJKwAyUJyEsg",
  "key41": "Rb5ngfj7jLQRCSFa4tr7j3dYwct8Ed5Xze8yfBNeLYy7z5ha9jD2Q7Ro5SAHpZQTEsyBG55CRL5AQQ7XhJbuK9x",
  "key42": "4TTASWZV6CSTCrUAYDS4uDGdf21VhuQK8AU7Ec4f5QQSTzDzLSqQTQBdern9TNQAqksKPV1NiseMkWWrqgDDz4d5",
  "key43": "42iUXryeWVjD9BCENgowvkcMn7Q2ycAZV6udH4U7iWG52hBQnSuFXZfwzmSAPvjvcMTPsFPBx2FVUbVKsDMGA88H"
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
