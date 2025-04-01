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
    "2GcGFTcSkJhmu6vN7GTMypHoG98jtVQMQ8V3XMGNXUnAm6Xd4TwyribrrSL391ZVbsU7b6g8jK9ZcKk5ZGEK4dAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cvx7fjdRZ26Xq8pt3hB8rvMn6Y6nqvZA72yCzAcptDQ6fVoTQgb6AD1DXTaqTgRsaGGKa6jW4ZRfEi5YeWduQb",
  "key1": "41pyvCZFwvyKEGLJpLRbAFGLDz3pRf8ma91QwUzXCUu6Km6PiH2HBgesNquBQ1Ufaw7SB2VBHQ2ipFLSqkdX8gF8",
  "key2": "3gsJwv8ztzJ3Egs66EfVm5i1N1eRhMPmw8dh1z2c17MkR6m1mB5fVsmMbas1qRpu5v8GwSpvoJdVf6tb6TaKZtdS",
  "key3": "22pSAr4xsSJdBUxPR52QqDNohZm7o88AgfQEXnGkjpJuDUSdtGcAXtg7nS4Hec7HHcz6obQSghAdc2moxC6KuVVY",
  "key4": "2yb1RBkLU4MA4mGNPfofmYHmk995RtjVDDz19EhfHmsu163ydbQxLBVvkTyN2ebJSBjABWqrsW5ge29b4bLFBWu9",
  "key5": "5HSgYKQ1GivXHVfRr7QJxMc5z9rKgPnBtVwJukzi1Px2HjUVH2TQmdEPt1B27RPovaqyyw9fzGjvDvZZ254wrh2G",
  "key6": "xAh7XQDUbYpT3P9vNi1deDS6p4vqsscintY7LtspSx2PNJ9C5HwX4b9TRyEPuW59C8BMiGm2eAqL9X8YVq9Sg4D",
  "key7": "52AMoGJwFwxnVnGzdkSpLLbp5VXUdX3yTBBusmSnFZKMRJCyq6S25GU2fnCxfMiFe21gYNDUcAPnDn8R3nPvvEK",
  "key8": "fiJwck5qTX8o5oxKxPgzJAAqCPyGjba9AN7ojfTXeY21wX7LrqL2sBF8XJPhKTAmUzufyjtuJBvkKj9u9s8aM6t",
  "key9": "5NHocHJkoXZNHvGhArvEtRNthJtk4q6DALjCExzKhRPHueucafWQu9f9zu82WLhSZGbAaFQdbNWA9RRBSx1Q8qGh",
  "key10": "c37NmbDEH8MThTy7WxN9dFfupDUvdJW4TVkaujUNJ4Skb41avDFtbSqJJdUrNg2szA1tYKoPfEZ719kenDguZ3Z",
  "key11": "4Bmze7pmaz8DexrT2DYYFYrr3U8Tn88mf4sdJGNTLCmJp2Tu1UL1YS4TemB2h82LEKhWA1W1NwEZ6LPnZxFdZLoa",
  "key12": "hybqhsUgzCiSgKkbC9dpgmowbrtCYZdyngrGJqBavPBek6ecWG3CiBP3yLXrSoC1MJ7jbkSmmBi1WpYT17XgbeU",
  "key13": "21WC5YAqE9HoZtzfP1k94QLqnP8qEB6yc8TnzKEtnX116Q8QQcK4pP3vbhvBc4wq62GsPG23fEZPcXopZLmqdC1j",
  "key14": "GotpQ7o5cMwTZ6MiL1GTi87Ged786qpeh7qSfBMFVSTDvQo5PyzLcDHKK64zKRRfhkVptNfdGPqf7CVNvPTXGz7",
  "key15": "5E4bbnxufovfU1PCTor8D6f3JkaUpb23wencKzp9tjuqZf8C64545a1NW7Jwwe2RXJ1HYgjyWsTGP7wLjHNJawcj",
  "key16": "5XV3m4AHXkHyfLhfdEYwHgFyXVL1biCdY9YxN1KDT9beoPo2Ypx22kqSzx5HGNg84iMARyck3vQD9MjfpkdsyMJ6",
  "key17": "4ji595McaiH66Svyf28D87mg7Digu82TSvz2Fto6t7LVP5zevnHhnmizkhCFM7t5udfTR7eDZWVrA29fopbeZtjD",
  "key18": "5F2XVG21to482YHnQgmR2MwgpFTPT18WLj3i6dSoyhGLxs5Zaap2kdDks4j92TVZfVnk4LuksY1hEN22sF9EpqQP",
  "key19": "2kByvHf1B2AgzttCN5rCoVbmh4qoNCzu3AbcfbpLeuhhgT7nTPwm1EweXKw1SEWgsF6ALBvq2HHhxfyPsLbr1qxB",
  "key20": "5oN1K9bxYHJ4K7HwPJXV6ixRyUzHxAYhRAxicXmYzBwkXnLcmmVKyjhEio6J4gawJoryGLLUbj5aKfgwWaZajQ92",
  "key21": "335hUbzyM6FP1B6p2YJosSYi8hWBxk1nZsCnt6LyF64zyEoPwqw5faMBEtDYrC28jaXXeCMWvtfiTetMZiewpK1q",
  "key22": "4tz1rHorijrQBWwj8PjBTyaXhrb1nrqMkhN44gvzKTKor3nr7wvrKrMyTL4m7FUvMXtL12gPfJMzbxwWnTbx51KY",
  "key23": "24P9tuRDxge2jqUJ1YpQ7nVcPpymUXaJ5Tzy9FrbeHgVoeVrWEr8384hbCCRnso7ZCDV9EoEYaLJw6BVqSnTTsPH",
  "key24": "3S9AZbq6M7ZZWpANrZCJcMdMT3iojvQiAPeomYoVMesREK2XsipmyicwEdLjKG7euBArimoPMi4CC7hQe5Q526ms",
  "key25": "YYxEdwkgj9eVkGxPRuiHdGTSfdYBPuhtFDJ393s6KQoPFX6kh6oeH2NYSLSy8DndNBx8dMPgVe8z6TBXHbwGgjv",
  "key26": "2d38735sHxbFYLigFgYnnqQiJuvVpQneBd3MMMtNdY2CyaKUse8LY9P2vJjPyD3q78JSY3LgjNv9YDqBcLCmRyUp",
  "key27": "4ZuULtn6nDAFsgK5HmzaUTRT74dXNUWpKrag4tRaKbTZ67wwNAqRUgfhj9P7ndi9kwZ5nZW7bXjQm1R8GPfRr79H",
  "key28": "2DL2XinHHCC9AfGcjo4ubgstZaMLrXHYH4pkVgRGaaVeqMXbGq3ZngcmzE1pBKW2MLsapt7w2uHUJgb6LBATFz95",
  "key29": "5pg6jc2ptFL5mviT5QcSpAUvrBpEkBj7eD5DGxfqJY4TTjbVxQHUT5r2FBnRzzVjuUaprqUPBZqbYYA3vRnvUKuN",
  "key30": "MTzvvYVQFqtZDpedmYwwYVtE7KrSE7dvK1CsCoeb2c5BkXAQBupgya7KYkx9DanLvSaTNwcnzTNYdBumZNfUoj7",
  "key31": "3iBpv77km3wbd7qeZnLamSduX6Ri4VZ7nmfaMTV7ZHrvsTJhVY2HD4fpS97tdWybLskZEVtgT8wm5U8Rs5EmFAfd",
  "key32": "TL55xMrtDHv9ok1DRnGsH4dRrCYxkUYrCAj2FvwkvB8SwQWWhKbzrhhwowKz778Lq2aY3cXRCadYKsqvB3yKXdX",
  "key33": "WBqXA6JEQE184LycyTBnr9WyYuyHpL1LibAqHf9W9fufeuBdj43J2Dkmtw7KNzAmi6TsDqPcGqANjd6baqYapQ6",
  "key34": "DHCuQrXNGpGVHbL6jM6T9YYStdd4qYYEscc5oP883dfL7Za7CeAFTsgpGvbwKbwoBmAT7pxC8PfxpnVNULiuL5V",
  "key35": "bdPk43yhJ6Zhgja7qVMAQVMRLPHjhAK7pFMuo8FuGuqDSxHRFCEMui8y6HJPQePyrJ9uoaDJ3C8sQBUsQc25wXQ",
  "key36": "2GWQGqRpWAAfkk9QbkA2qZEnpkPQysu6WHBiFDsSN2av85tytWDMUh9uu6dx1y4hXUsubDbP45knESUATRYcwRvF",
  "key37": "3XVpjazA1HFL3GJqCyDJqbJhuf2GGB4fzSGAZtkB4iNs5qQG3ivSR6xerpi1g4bmgcuhAbo9GEhGShgfUh8fZZ8E",
  "key38": "5KMJSZZhLBerqacSQ9JRJ8V4fofxrTVfQT8XptGcZKjkfzqfqCXeS1NrvDjn5LCu28cfca5gve3H8ZctocSsit41",
  "key39": "xpczAeqQYyc2buzBwB4dwDkGexCM2KYshwjJ39SXmDEKapAtywg8XRq9RLE32YffoJPvPozSERLvYFYkyfC7Ukk",
  "key40": "3MJnsowu2wQSiwVK9Bd2zKj2xWfZxu2txQxMuyT3MrNHeskfYzmXzNKAW356KVXqSfphGhLbUpGi6NGkUcNdkfLf",
  "key41": "3gDHWqMeRhgAssdiwk2B342dd9kGoR4aoTwxfd6BYxALzyArkzVV31YiRZ5Pjy9nmxt9fEgce1NEXFyUhej681S6",
  "key42": "4mHdRiSsQbovxdHEG2bKGwH5QuS7ce8Dy97EJkz1Mh9HRUxLGgAYdneFjNs85i3gCu4JQwjtz5qDFWGJNjZ8S87v",
  "key43": "4m3GuCzh87QFBiBYBa2DCS64qECwFM51564mt3GcMGo3kS3CsDXjQF9CBk3enJDyUGZ8tuZ4yRnysv3BE6JrJXqH",
  "key44": "2zEHmBUwQoXbXBrpChB245UdQsAyrYtrTL9wdKUMaCNHS86YgLKDcyUmV3muKZMfjgF9BrDMWK3ajeAqN3WnFZEW"
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
