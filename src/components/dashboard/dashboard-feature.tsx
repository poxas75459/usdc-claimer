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
    "3F1SzGWdK63ummQUggMA3PPrF926JtMJQpFBgikY1QmADk89gRSHELYbN6oHzwh8agQi5AnT3m4L1VcgkjFKR1Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eEf9foeiNdocfzvqWmg42eZx8xYccAeastomagocHqA6jcT68uAMu2p6iPxDUFPrVGSWG6dqQoFgH5hfRpkXjLC",
  "key1": "nkhneNmShGN3vdEXdPdKVpGazd86VuFqjDWZAjBYBfrnH62vshcN6RyqzqG83RQD5TzHWtnjYJ7hAntsJFzi9WM",
  "key2": "32BmWyDA1EJphq8uCHZa8CYeEx8Zk6i1shogwG6yXzmocDYuSVqk9SferK9CBVEbYTxCPVSuLy9hBwnAdMLtrNh2",
  "key3": "5nqWTzEed2zSjFpgCq1rWDRfNeaGimMGFhD1kguStbYqDRMpcKJ7MBChP9uJiGB8uvhMK9G6eHovpgkXGbBRwSHc",
  "key4": "3fqZF9c5tMfz5neJ7CkV8qk8yydjgP8p9TJRNiwK6sDk5UxwsoeBkChEQsL4Z84fnbRDDK92xdR2TQKcxbPfFHSV",
  "key5": "5pW9hTgLDt19uKTtQudzXyXtDyDtd22aQYaeTKzzdsyYkpdUVxH7nTjb2t1hhYFyo8J1U1fZdRE3xcJsuaQVduSo",
  "key6": "PtGhGcNS1Y4Ayyq5Dv4F2TKWMctG5gXDhyCyCfFSgG4tVKTCxxaThZFsmbunGeLezcsquCgy16tujEab1Jc5gUw",
  "key7": "VTNQNddiFEqUh5dStHe3FxPr1xjg2uKSyhXKnaoFNpyxd2AFsF5NHzYi66b1yySM4nQA4QRLjCCGk3QiNRLtH1u",
  "key8": "2qGfZZHXpoyV87R78BJ7Gm5bft83WiNKqv7Wr2hzKJm7P6JGvYmDtd37EocW1aBEiirLB8hejLWaR8oamvS2otUi",
  "key9": "2TrhAAfBogEihGs1AAkBUp4xaqB4sjt5PvmzJ9KRoFnPJWkywShv4N9ShpMoMaPMKzgJofG2ME2qQWQgu9dwppHK",
  "key10": "SQfA9icuv3L7LGNFXKasgXhDDo4syB7AN9PQHxGbqQpnXprbyMn22GgRU55SezYo5cKyxKU3row8TesQdQZb9aS",
  "key11": "5f8JmMP3MB6t8QQbbRtu6ArZ18xyroLx7r68a9vkn5dbmhZAQxAoUbwGx8cqK5byVGGaYbTQiogGpFSrv6xQR8JU",
  "key12": "4MqsM3MQAhABDGvptUxC8ozSgnQBSYUpCxMEp4oizt8yymiESX2MSmeHbFtN2jyf3R9kYSgKPmt1gznJr33Hgkbc",
  "key13": "3zrNAbABoXxGJAnNEi2SkQGa3qj4JsH4huNTHEC6MNd6iJmLpr8ArBvJ2B4tPPSVK6ABNqsrRGJjWambUNr2c14R",
  "key14": "JsfxvcPGbYCXYCG1zWfeCeUFT3ar2KxZWdwRNV4CT9iGd5H6hwPMhW26rkHFavDk654t5BG2AYLxtT9T1Es292A",
  "key15": "4YkPRKjmjqT2iCqzTyQsWP5qTu9mjbGda3cWXxEioQNoc8k3Fkeot6nd4VXJVWHeLNk1umFiiBt8mprZA9JNA8gH",
  "key16": "3ygzhKTCZ9rBcRUgBLbmskBaZweNmup9sr7XqRa6usGzbRWGDkDiBckMdbsoevysdG2xiArGM6khyFAfLS6EgzJt",
  "key17": "5EdmxT9kfPT3DNMRdNiEhjtZ1umk1qXCtMn6hjS3NvwePdJpGseCvSLDihgNV1u99xem8QuizBtv2oXZnDy4PHvN",
  "key18": "5vZGLC1yo4QHTNeWE5izPxCwzkLJhKa7H8ssSXWuNSG8nBbTovSDmq3q3LFe6SgeUTMwWHqVpDhgrsjPgtwDXw4h",
  "key19": "143V3wzNhFmBtZBoRMFX4rvdKgAjQ3B384efF2oRvqrAC4qq1mKfsHGrua75BGJzZveoE3vCupxw6PQRBXoCv91",
  "key20": "4Go79jcAdF6VAHrsE5wiAxfEBgyGM1QnicnwWzdFvE9kpKohEHbSvKupDG6mQwn8MJfXTFc3rR8foz8GDtoRses3",
  "key21": "2B5z58wce3sJDrSsRRKfGHBFv6VbtkyBLjmDdyng32dbxVZLnYBi9EvnRP93aViANnjUi9d2rY3CAdNZLGo9TgN8",
  "key22": "4G8XySBaHPcDs5hccNQfWv5qa7kd6AgfwwKwU2NF4C6QpP9q3avzUrVvGM4HTch8XVJLpfY32XBkAHW9DHq7b6CH",
  "key23": "RtsxyNhrwz1qsE6xX9GSQqPxDU6yXMhgce1nzN5LE6cHuSJ6KbqJNLj3JXGKGzoBrU9YneEfptkETLD6tZo6ZxM",
  "key24": "21jo6B4c2cRfkEjhLCEX6wJLEZRkMA6mpA7pN3DW5Ye3neAXgCq6pizX6qZJs15FtXAdFPG2ruxTbH52oQCor6yp",
  "key25": "8NHxkQgAUJbymAh8Vq8V1iLzM1aBirAk7oBsXUYAWXsf1aXKvSm3zBgqGz4u1RZPwRYWUh3BEJcB8viTkkGkbu4",
  "key26": "5o6US5BKy5v8Se9oPWpXP356u9xSU6r7ApqPD18KWcznCMEbeWVvHfe15yzpgwkQoc3C7xFeain4BWQ38U8xzF4p",
  "key27": "TFdDZgFBk4xnpo21VoMNXZHai7s6s6FFcH8GvCTzLYYKVrhoB76sv1tY4kWgjJXC5AagFBVPsjh9VmgACQnvLsa",
  "key28": "5bFCAoPMKYbFU35kz9Ykfz8oy5owvRihEri1cEudQqoq6dpAhjkEt7RgetyiZRs3bG6HBA9AEjVrL9154hYc6Hrx",
  "key29": "2num92ZSbMmuoUsQxZ785pNdSLFpzV6F86nZGB6VrtGza4Nxv24JVFtAn6zT7LqU2ozMgyEUdzHieamiUv4cvEX6",
  "key30": "2c7ujprBEcFjVT2AyazndashFCzsjhrbGiit18voUooFhMuHHdTLfeUFSATfoUvYDgWPbDazG1DVUTAwZ5my9vj3",
  "key31": "5JpY7BwrrTCbwiVhwZUSrz9tXuRmiSNuWBqEZwMncsCwVtDsGnSMmTYTQ6MPcvfBxsxaxobDwNF93hiF2BvpiyLi",
  "key32": "4XTswMYe8TmA5U4rqcgvKzqmMXrPZuH22L2ZmeTMU8wt9cCsLezFJ2W51AVBYkUKLEHq15aAo86x14RL3b6V3ZoB",
  "key33": "24vibzzxGrh3x7zxxwaXoFL4WFJyfimgLNs7XZQshivCLRGHWyECk3tKeDwmW7HYYwDe6yR2z6TJnc5tmGxiDcn8",
  "key34": "tes8Cy25XNnheRx7yTxWsoSgjfxp5Co5EhBSBeiAkXW7ePj4P27tMiApRuPEmLWTDhKPEegd13Jmc7as2g4HS7s",
  "key35": "vAh7aRNE79f9UsYKSayHnmavF9pvbZ4JUu6aMLx4UXoYTitYoXJdX2UqfQhtsZ1LSmMSJq8ickDbrnw8i7gfmkv",
  "key36": "2Umq4PKuDZ3mrgi4QYMq3Ma87QheMLHSYB9arwWxLwbJ2LLooLSjtYDKjZjMEr7JZFDm7zGFD9xTWKhuBXz6KvYa",
  "key37": "2BbkhGjmYQoGQyXG4XJUZustx8iopsuu4VtHV6KNNJKfwZzaFvACFXXmSENu45Mmys87viFdVM51EoAbMMFQDiFG",
  "key38": "2X5Ana3GYvWDmGtejVHP66sEL3Mv7t9V3jgbFUAsEku92Bc7WbCBVadXuaJWmKejezS5ani4Dp9QKgWSpL9wbw7F",
  "key39": "2gtCatBKwcv3uJ12GbDWCete6KN7xXnrcF264Noyzy2nW8kJXY2dCWmA7yjnrNbst9jHCnrXSrQMz8MsVycmRDa6",
  "key40": "CvLmfxdA5h1PHwh3wgdaQgp3sPkqwfYbWpi8nKHvaQ2BmgjTqYs9SV63U2D9pioRsuwCYrGKjQiExo1CVkKHYW2",
  "key41": "npPQo73FBc1PFJvMTKufC7wnAgDSLsjkWEziM97XwrJMjiY1ajn2Wp1VU7CBAspGYTDEEM3MZJTJJJSCTrC4tX7",
  "key42": "5Y9T27iegZLKbLWGdHT7HP5nYwd1jnqGu39PcQqAVQb1mb5sXajEt8SEjcKTYf3y1DDZwxtAUYUVQNzwqP6rQ87Y",
  "key43": "5CBFBjCj7NdZSn9aMa8hNHSN1Wh325rLVTNwQDqvqwigcSxXdVW8Uo46g3Zj2MkGYFzGXkge2T7RoUMoNrGJWEXX",
  "key44": "4w1u8H3w2v7kkpejUxMWbpJNjQbrN8DkXy9emaNxNNnHdxVwc3iNNr1pAEBxJ8v1c6vxGw2swhHeFeUoArDGqkWQ",
  "key45": "UxH6gVUrg6sM8RTV91KFmNuyxpgxt2ds9K5KpJMDyCjH8K2PtuijxzcsEpBiFeJV16rSDiP89EWfA7kCTNJpr9H"
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
