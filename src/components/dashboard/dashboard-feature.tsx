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
    "2iSsvHT9kBML6rwrxE3fn3tnKTAUvDoxjcFMUjPCVAvFXEQAEtkw7vVvYLZvXsgnz5kqJGHpXdDbTWwfZKQFv5p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqgtLmbJKVYU788D5KzqGGkEXN97eACX2Xjt9g3BqHx8bXtiGE9uadNqp5wC3fgZgjm2mMEezyUmESFaUkYjYx1",
  "key1": "3pWEaQtC6z3yA38QoqBmCxvvjXwYq8KgH9uyBt8jUu77ufu1RjPGozBb2b4LWnXoatDrQHeat1ZzThdebJy2UvoT",
  "key2": "3bqdMUtaj4RTvZuraQX2nbzKoG6PE6Rb9fJtNoK86bvqVuhCRTJJyjhr6xQ93mpSYq1i3XPiYhat9VmYNvCyD6yN",
  "key3": "3m9zruELAGcQnfSqTc5hdDYJeeEae5jipZ9C3XiRC7JbgfYZYh81xdQ6GFBUUCEdaKEBbEdenjYKUdRKaXovnhjg",
  "key4": "3dUSEGPvZMnPKMM9RgEeAHsohYjKV2rgx3bLAbEKhMgsVu7N9T5iTxiX75DNYWBGqeude9VFhX86c74bJmfJay63",
  "key5": "5fcQXWwtCrALwd3gYaiQ7PnsaedK939NnSbUFVrP71MoMSZdRPpsWAuk2AvQPszFofhXCSdacyciGyqN8hQRARhD",
  "key6": "4zkbsyXpPc8WCKGoXphsjBJzNDyBwM2MBG62rFFUTvq3PVhaeTiydmwnWJUzMZ26P37cAhyvjeNhbekBvkT8mvFd",
  "key7": "4qmC5W7LigXMP16FNVqBVj81eri1p5c1XZ1JwcQWeHW9SF5Zih4oSzRywyasvW6E1WQ81aosw8vhuxL7TYxQJBrr",
  "key8": "4vvb69c6kumUbSR6gZfjpJnBC488Ba4JqwyZRNbPAcUQpCXBrrmn96NJGHS45c45Y5HNNNo5Na7PYPqyVQpovHLS",
  "key9": "2rnK8Sq5SFx1kckZYkDrMuKbg6VHdT7pvYoi1XHdHegsvgNsBnBz5q3ZiymB7caFusAQtktEYp7VHvHkj55D1S1E",
  "key10": "2z9b1T5oSWicvm416HcAWhciLMMAeTbD8kMiMACdfCrFTY8GHmZJrFfNjQBbS839sLUbNTZwoTmnUDQqGkaxffXy",
  "key11": "vnqBUCwJPsh8GYizzNZMnhVyTKHWSRspt1Zxeyvn3xM3Bwtk1uNQkyAvybqWXN77G5zxGk5gGN2p6hBMHGeBvPi",
  "key12": "u8T99HL3fbkCSJ7YNuUz8udqk3p5JSoRrSNipSciNV9ByqGz7afqiYJiWEJ8M7R1WT1A16U2u967X1aiou7po9S",
  "key13": "3WSD7PyZ4d2yNgnMVabgTZCTm6tuwiqTv9yMbyFdAGSzaFVmi8cNSvV6cSKr66WfUsFp8K4odo86sz7amN1VRJh5",
  "key14": "yBYWifi1DWYwscYkDNwfzhAKfeLsEBXVHTSh1mwMDRTnbKgCry9wQRu68LQKkmgp9betVVSjb11Qm4dqYQdHFHA",
  "key15": "4fcn9frz8j2dyYXPcPd3XUp3RNLsFrKrQgp53uM2eeWgsKCzmW68xByxLXjstKuLyC4GQnxdRH84TRixcneoN3yd",
  "key16": "36StPumLXv49Pr7yJEushvsaYLgqUa27ThSoEjsuZtwYgFeEKnttV6bqBcyFdhGW1TWKR4YimC2wDJipXGc4NVD",
  "key17": "43Jn3yVZMkgVcTatdh4RkcULjUpH6oKLVJrHarVJABcdk8h8dWRCyG7ds3kMg9LFP3uGcwMmBw3vGkwPrD6ucxWY",
  "key18": "3hQiHqmgS7Zc8o4USc5QALu5L18xsbMNQbtuzgsr4DXdaLbfs9xYE2Km2Ehe6jYJH8LZG349uqfckqhqvpi6hAL9",
  "key19": "SgLUSPGab74M3xqmGXxcaDSKqD9XUpdNT27PNuPmGC5j4orAquJGcD2nGV3jokmTqCFZYseRRjSTokAgpVvTpsp",
  "key20": "2vG6rgoiZSNKqK3v3E8Sc5hQc8wQkJFmGxWvNHoYngmfUTdFwN9DwegJuKRbDwM3A7GoFwMsJcczMj3sX2oRjXXE",
  "key21": "58uzxHMD9d9KYCDYPPyEUtYFXYzyE48RtCG6DjgzAoBMFFCEV8w7X5zRgZwiGJYZmyfAhtupBDsYf98F55uQaPaH",
  "key22": "3ytQpzytHTVGDDivb3KSVemJUg3eYktSgRx4VMZgwKo8v9JoyuFk7NZmzU5T9dJBRgf241jPaitQFBVSM6jRWMGY",
  "key23": "3Xcv9TLj6PTPGSXAXtBvU87yJ868ncd22ZoBd8zHqzpmJah7hiHNJRL89xzK1s6jaLxXdRtKCzBGE15sEuUxhCGE",
  "key24": "3aBgfdACw6PEiGMPgHhzySsJH4cM6XzkoKcwJwWSMF9Keoj9Jpsgf9xpJaJNNTho5x3dAAzgHE5gGtF2ajjRhXpu",
  "key25": "4PzH1qj8mpEk9eMdV2wzD2pJxpWr7vEYDsYfh2PzjVpgizLjLtp1SoXkFK4C95uxeFR2EjAtTTfh6eTqEiUP8xki",
  "key26": "2xxjCMWLqqx18VSuMaPFFDwA4TeNu3KRPU3QQa3osGRi6oEZi9rZjtveFWnSRhfxnwh1WsRSSADMmnA4QqiL78yh",
  "key27": "5Ss1GojuCKhBstFdL6YtWagtBkXqh3as5GwssT2mZkmFtYwg8PieJJiHmoLttEshViFvKN2UfKD1CLo7AedSAcpJ",
  "key28": "4VDzEtgzG3jJ7tNyxpCaHTCENDVh7aJTK3yebsFoycby5aQ9qggUsMQKfC1s4WYz5wmq4syCMwruYA7kLUoCC866",
  "key29": "3Ezk3y4GiXyCR1dJbpnv1CNC2tkqZKSuoRcjk2MUdbUfcQzbMkM4UsJ5ie2SXkCVUbKrnEpZE3WrXW2TiBGoFt4N",
  "key30": "2Eawoi9CmLZXs9Y5MjvD3QfddLsMLHx3iPv1gX5SM6Peu82F1mZmApGMQ1cxNwSwnC5P6RrRb7ekGkMw6wh8aNza",
  "key31": "24yhknQi5zFqvDfvmRaBRwR3bFJgkWrEMetJAsqE8gBDzLuZ3R329zyYJRhVorRD7k4F963CofokYR43JJxLZ2Wr",
  "key32": "4qfbucddt2vtw4cFhHKGrCNEdPjCn5dzC1vcSHbAkhjKhqHvUoH7jebJUoRWn9QbHmqV2CJbxE8X2edy6XDYNCNJ",
  "key33": "5jMS6VgkZ6dxSb1zywvkvgdgBLCqDZ5Bu2avzr34sMRVVtMuXYcQTyJH751812DRtst1p5H1o4BruujHdiHuVeTt",
  "key34": "5x4FbxsfsoEfeuoqRVq75BLwZrAw3TkhsPmPvDaN8AabHTvivtoWpvKHD2vDJRmdErfXfvApLYBAMrNApyNZpVm9",
  "key35": "5AQ56Cxof4QQodaa5bDf9XBCRwW2xtA39JnNhY4szuPXQV34qZA4TikjUiPj94tXeZLdRXe8buToJeAWFywuun3K",
  "key36": "265KiYeXW79RPS8yeQfg3aSptHrBiq2txAqqCKNvLayg9dWBUXEh15CZjUTDRKUBeDgXjqfCCUxszvvxz3pWvck6",
  "key37": "4mvCkzzs5WzNM2y9CCzg4MMob1jtAERHA91UNK8sV5j1GGntXnGJj6LZYNgJqmb2qiDHbJ9xP1AkwaBF6tjzAykT",
  "key38": "5wt9wTDzHrPdmb6nAUUaNpJY513TWX87tUf9wmrdw2FWJZnrT5giGLG57oLS3uu6htMGyu9YUJnHWAwpzPwtp1np",
  "key39": "2bxtvtyYbugiYE5TtPDejFRJ6NcaKvNHkWcDpnJiW3zAjuNoGM7XictFxrV5dprZWXKF6D9NsADikt8iSJwWsgX7",
  "key40": "5RFjGQFu73L7NzdiJsuhTVNwFfBUfqKKt1wpmsmTpE9Zm3XAwrsrftr6V7xYWA8ahgGhhKny8i2N8T2TudfoHuqx",
  "key41": "2oPePc5ytBCKtTa74EjwxJC75rNyqGzjnxojeJSZSKigLTTJEMN6Z9uRubeDap2M4fytPxkkbifY21okkh1n1kM6",
  "key42": "3Diyj6xUEz9mchLcAt9gRPtF1PFrSpkkrQZ4GhCkYmGB8nteBiSSnaMSeJ2gaRXdrvHjUjQouJViaCCchnrUFqHy",
  "key43": "2BWZgiS5e53EbGt3hFLWcHrfjkX4PZYk54tsv5aVqNHbkWAhbB1eCtR6v1iyKpk5PzL4TA5b1A7qKqfTEXu8wJrA",
  "key44": "vaNkvfiS3FezqBDondJWS6HDMe3RyYL74nVcDHETcNoLy1mgFtNbSgvURaRH24CfEKKnhu441fWfDHifurwj71E"
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
