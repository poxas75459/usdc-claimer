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
    "2anMLs3WzD5APbWiQ4ug3AFp5xtrYn5abQaaXvKvs94X7MBqA9bGb63RjmYPPh34wo1p73bGKJFqyNvtG9Bs7X7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eiAkrn5hJ9jBRbYV6nKLnYFWxPfsLTKy4sjnrKvxs1v2L7HhtYK3gRTDKYBNxU5xPBW54pBMSoaeXnhQ6qMLALG",
  "key1": "4zKEJLdCiLEYZH92cZknmqUFdDHr6ih1crRwWQ24gZd7HtM7UVFUCuvPNvLiAWFSoguqvuoA6NTR4hbDJYZtxkN9",
  "key2": "48QiBA1kCQGFHK14GoQTrrA7bfzpTDeEzYUjNhBP5c8X3i8i1t3zzDyVmTuMBQxn936MgXBixvnDKF2BuGi3KF4n",
  "key3": "5ztCButdhia6i8RMfjgk3DZzaFj2trqt1Szr71dTxgHmXgSLJDxpMU27oVMduiokn57JAJEswdzHmGzHu4cBUCy6",
  "key4": "5fT8S9HxxmT7pWPPjqkQrqLCMS9hCEWxUCFdUvhhhjZp6vWfmvCRe5TiLLofn7pM9SXVNvwbs19EVcb9rSQ8WoSS",
  "key5": "4WECBUBdTEYhnqAkrPGG68My3T3mM2JzVMNiR58V6vm8tNiB3ZruKGHdyezE3THYrBagYGUh4UCTiZ2R1tBiFAwt",
  "key6": "oFGgY5HhuRhaDFpyE5f3Z6aWqeNsajSorTS66t2DvF15b13ZaoJ26eev1qjZ33pLAX56m1VZTrumPSNXxdNFAYP",
  "key7": "ArFgvjcbSuDWT2F4iHDXviaA8gavm2rfZuRWqYWsJw55fCgzkRVCnNRTuZE73DozYsJpwJZ4otkKq5f2GGNBhte",
  "key8": "3PNM1SZnCXm838ZYc9enXGzYULoGk5gGZwAKNUH2h8K8Etcd9q6dYjcqqJojRLzmb6GCzmKMBpHgM9D49UYftgpv",
  "key9": "4pWg5tRrPHcrMNTtL5AjA5Yo65wrfbKkQuRG1RLcvfnvFgxPZGY1CFHN9uyfXA8qgDsubSt2WE8TWP2gkWaMyQht",
  "key10": "5yd5nhmTtuS13CQFp2KrBfr6rE72sW5m1ekcxwK8YtHTo2zHLaEyc3sowkUi4CsjVgzH1ASp7mTLURvxPcXzGS5R",
  "key11": "55ZsZz4kwC9x8jVSFXvefZtChX1dirp5WFyd4tfdPYVotZniN9utXW6HzFyWn6DKXwifaFFnHwkx65DFNcrWxqbd",
  "key12": "4XMT9qL8P9pUCRZsWtmHneKLwMViw9Ei1D4hMKMhy3pTKoE4pKgw3AwMuBhb3WTtNgpybemvc7JBMkPrf3RLHUzV",
  "key13": "5X53QLPCAaRLQ4h4cbvQa621vsCgUoG9p1tJBPLuaze5U9WLExQjB6qdLUkz9NwtuyZcHhaZh7vnLnkZwby7JXmB",
  "key14": "5qYRC63eFuae8e8ef4jnok6Qnoya8HVYGELSrgnAEQGcNRaLMNXzbenfzsCjH8wqaDuKZF9kZV21mrAFKrd33HoJ",
  "key15": "J7VDUXYkhqMyxiuxAinJFJKQ99mkp75taW41yCjcQGQLrEa1Ek6bzXiYPM16LeQ2CCzdU7dfg2mPnxdAiR3ttF6",
  "key16": "Ymh8dXxHVMPMaMBUm67fpcyDghF3CNXiDz9b6SCndATS59UKVEJ4Jh4MA1KV6pNyt3PRi8pbdhozEqR5CRb6K7o",
  "key17": "5cs8mfgYCDaNxAPZCQSXUXgKuwcRvQfLq8gm3V41dUFj5gPygpr3RgRMQTv9DF6cahZs7A3qCMJ6zDeKFASNy1hn",
  "key18": "5tPd9pDfQ8ja8F4JrihY89SWkVYLmtcsU7FXmt7eckUGGTQh6jWTwdy4ZkRbrkbN1hUp2weqAY4RerVW5DTYaXjo",
  "key19": "2nBPn97FrCvBeCa76LJ7a6FShkna1ApvadHBcneNnViVwjkjm3hSUb2qc1AAiKCkhz8WjyKLKdxuc4AX48W5arvb",
  "key20": "5k3tJt13tjpE1ndr4KKT7uVnhD74fJHBqe9NMuRMQXEbTA3ru1uVczAtp3jvPDYSpqqPaGsauWH2tG6zsHEo2KMM",
  "key21": "4Ktmn6Hj1ckMHXkA8firXS9RwNqvJAFgPeWQw4zNsx2x2HoWcpgSay5rN2mHctL8VPZpACGsz3taH6N2yKSXUufh",
  "key22": "389fHKVZRQcdWfVhnBj8u2NoYdqKLGwgsXsyhuQ4C5HVpdv9Ae4Qg5MGvrsH58hMEkLFYrUadJJvrzkoksfHEE3W",
  "key23": "CgBRMzPbibPcUkp2aK6tw1W1trvByUyYHU7vNhkBY2CbXjKQ4hyGAGRW4f3roCLtm4NZPTzsbPx8uHZUeL4j1cC",
  "key24": "2qzNj6hw3XSwagzVZR2fW2pZiqi49Wry1eMbFmaSycp64uFFthy7mQZtt34rDLK9aBFLYyHrao6bEoBFofV8f5w3",
  "key25": "2Q2VLcBBpMTbbmXhGf4oovAkPg4cPLZuj1FQtAjeXFZB6nESZxVWqcdcL1ZxgjKX83x7rV7v91kvD63nBX9wSbGW",
  "key26": "3rDpgyiyJQb9EPrZ5shkoLYPH3k9Fi7ePzPfLSaasvPD7RizChMcJs7Q4K73ZhqFu5KA96BCDdVNT8ujhqv3GDsw",
  "key27": "5hLuATxRXZToRHtiWSxv2ffvrmuo8njkzds8BNHrZMnNJugSV3fXn7PX3D4966p88Mxy1eQLH3vbe9m5mtFnAn7",
  "key28": "3nc5VAvBTRMV5NS9smecuKXD5Tni8QjUwfVxwq26xmRp17YwiKyCrWSQFRpwe7FyD7K17xocGJ8t2DJudjH2kX9N",
  "key29": "noAGGL5iXjJFueTHkTY23PggHPbcWe8iX6i9i3zReGZwYWK36arMZ8K5FLAtzzwjqWqWNwrKnbxamyvZf9t19ht",
  "key30": "3x7c8Yozze6D5johngwhRqT7Xz7waskMFJS5pPyuerQZf1k9JR4VnmcUQ9qYLT8QBdZyQAoJLmse3iF2Bjs8h7Us",
  "key31": "5kPYLraH5GJxqZp1buRWLWSqSk9BwMwTdXuUfXGqDrWp8J6RvTESM82Hy16heEashT2CN5G6dBoGCHQ4iZP8CRRA",
  "key32": "47zBwLAv2RU1sw23ZW3Tq6zxh7dxzQVhq8dC2VaxFxHxP5RMDuHGbdaWmog9PgQH2hhjLDcvU1JxDZdiTbWZiG5N",
  "key33": "4QNHz3cFwPeJoyq2n1QDwZz9Byf5WGEtZsoy9nbUiAoVwoDstAY1bdCjLyWNwhyBnwixyACcGgN7hAur6Vj9QeEk",
  "key34": "51JZLQQmHLenPVa16SmBs5fqE5WMyghCcVkfU2tQAMZEMtPzWUJPND471mYZKUCqegbiDLWjNBZTsohhdzrP9qzm",
  "key35": "2hktFW5LJ58Gc61TBah28uQLcCot5jjqGzohmn3vS771wS68SMqZqimf4bhYgyoHgfb66bZLXmmuuPXW8zEAGiNe",
  "key36": "Un3hwVU6FMCYhPieA4Yyf4X9fa85odvAky2ZUiGPhMmFcTTFJk4NK9v49XeyAuymvA9Y2h2xdPjz6K7WLJtppc8",
  "key37": "3YAZxQCGQXyDw16EqUcTehUpMuMnTpV7PjfvLF4XBL5ADqvYCMLfsYMmudRwWSTffEuReKBfrdHqJcWmoqbUJpT9",
  "key38": "2CXRK2X8U2i2Ja9in1MQGKaDr8vceWYZ6YLFyRq9oYNSZ5kURAAYMRrCeavMZtbEV2bLeoQ4VAXDQkvGfx1WnRfx",
  "key39": "YnEvFGMeUVHSK41sSSYmMoL89W8MpWmeRfmzrwJLvzBjdWGvdg6kWprWvQRYRKh6UoDoSsnxfje9DKPvRperN5W",
  "key40": "FmDr3bViqNmyoLxaXEfRqMBPg4wbmV1zFW533vh1RvGn2mMQrpmtsMnja8bMnDbJdPtvHEwvxoarQ2cxe7nPiaU",
  "key41": "sQGjVyt3PEYstyPdx2BvdnWqbwkHGLTjzzyQehw55jXRNUGWSKzSLU1Jt7AUsXycaDrqycciaEXdKnzdpKascGS",
  "key42": "2q8nwe4cwP163ZDDVj9hiRFVbFxwG6sHj3PhkTfiu6CfQtGaCjMG1UxZLnnVJgtWgfXnRUdytJGmZi7Ao5Y8buPU",
  "key43": "59vyxe3EQxpMmvGTwbdreLrZfKJtq3kkzW8cJKb88CVxQTJeNxHxYEeWGhZCBBzRNxXMewThPJ5Hsi4XGhLS5R6e",
  "key44": "5jtLHRdgecgTP7YBSyYfPtQom2AuLkRs9xx8J5YyfYVKGGQHgq8arHZmv3CR9v1Q6kyxutfcZskMjwvka9YBVa9k",
  "key45": "5yZXkPGzevU7QsGVMLNtPuHxQmJXHVAfJjzULuNjSXox151RnbnHK2VjoAPgpk1Tivq1ecf4XDYqDPxRaeRadpPq",
  "key46": "5LvUoJWFBDrfKDoyKntrGKhgwevNsdZZcEXSdXvM35uBSobw3VTvLyG15qbZqXwNLxH2kvM2SkAeFX6GTYokw82p",
  "key47": "3B5VVMrtga93ukSyzFrQ4u9UNT3QYUzr8kqsP63K6twr6aasbYySpxYWR5EPopM4VQmxzAh5B2yAudaghx98rz73",
  "key48": "5Rtk17ZPskdtUhGhT5zsHTXbZhaesoWVnSpPU9shaJkXZPFUzVe78xmXRkcuVGPymRySyP6vRfo1Xe7gU8sNkKN6",
  "key49": "2NNXT72MTwoRSjyZbGPcgE1d8hhS41ankeegt9jBYxtwZmmETi2MLhHU1SDbKdFLKnFjbiMXs5LXSnzSmq8eGrCJ"
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
