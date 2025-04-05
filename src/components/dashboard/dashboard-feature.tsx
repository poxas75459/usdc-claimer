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
    "5HF4ytLLan3tvpKWqm2gUEabp14vmw8xWNcVWyBELeMGUUmfcqXfcNbAZcX6pf6Q46nk7Vyau7LwquDVRkt4NsiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7LbxGEJhBVzVFjyuZWYhXcRMAYTzKZGwyfjw9fUgAAL9xbNwfFasinNQ8777CiKqJfiVbCbJ7se7NypNw6qTB8",
  "key1": "5BvxiDJUzktgRPDhKYwvDmLtzdV2wKwudEDZxNGhjgMeVGz8BG6sLg81mphfJdiLTfQ1j59udHMCdpfJid2A7DUG",
  "key2": "22JJr2KFxebDyJEJfBykAbPqE65RpixbPWCpAdpUwBVoLW1p6LGbjqG73wf1BezQZk8hcVsd1SSNYHsTb3BVhar4",
  "key3": "BWFCJvJigwNqp1B2cHworsmAPF9oVEBN4MvqjAfESVDeVqPStbMUPBgDX7D6aXpFadv3JhQwrMENEz1fGBW76Yj",
  "key4": "59WxbDrSy9PmLQprCKqa2GDfDw7DgbNMa1EZLKE73yrpAFUTFMKmzH6ZuwB5bCC8MEZW2zAbQoUWL7nbKi49SUCa",
  "key5": "49Ti7AMtWUFBD7m4KRuvQRfjTkyhCEAnsoSgFstZrLGB12NUmF5LZYXB1TLZmn9Bs9CGpsRGfDMxWW52C8Gu1iK2",
  "key6": "aNJVVoo4Bw1eRRKT4DYZJSsLH1y7mVwRjU4FjdzF1WZmbpnFAh2bETMjgqyjo4KX9FDHmfeCZaJoh5rbeScyfu3",
  "key7": "UNQNH4rgb9AzZTceHmj7fKMkiUb6SrXFk72XKVS2Tmn9MtMvyr6Aimzup7bQ8bG1UEZTZ1rmfD5vD1ZfaQtyD5t",
  "key8": "3EWWTxoRgYr7stze3rfyku5RYo7NHi1dTT4WhbEuPQWjYSWwBU5m9xCxKpNwWycxWnLkAL6yKwUQjdKefsCBprxK",
  "key9": "7unT24zKNSRpUa1daGtRNhRkX2w2okmzU2XV2SKeHrgsRhfRZtB9guNkusrJKauyQ7mvAfWisj2YQaSWeyZ6Mst",
  "key10": "2VCK2yAerX4NmLQrKkvprZqJ859DJD5YtALM2TKvTSRvrRQGGfiJ4L7tPJ6cPJqhd6RYi6gW3V92PqNRCFvpZUwe",
  "key11": "3MNaPHHsAP7SM2HoJczuur5TVPFot5TuHUcQ1maPftCRgyCUBuQqApDS237YuVpgA2FMtHN18AzUHXKCewxZN48S",
  "key12": "39ZPPRWcEgnsRgv6GhNtKeeZ2CKZ4aW1HKhkmDNX5yC4KXfNnVwvc1cLwbjmgpS4tAAgfuNrZpo3wfL9kgBNSbqE",
  "key13": "2eTNBr8XU9UKuNKRv3YTExB67FSBiGTAfhzE1ntuLV2hhc5zLxtM5tCscGuREL5nKVXw9oaABZNCkjp5odYFQUmd",
  "key14": "4wZo2DUEPj9H5PPizrrPqnfWAVFDkUrznNgYqsExho838rDgAbXTiuUYeWy2FEktQCZTmpEWKHCFPjzsBX9FveFY",
  "key15": "Xp7KNEPJCd1TipCT7cRkCWHqAvzPgdDQLvoiZkjJaWSG31Yf8wAVqDRQ1n5r1rLvw9wM6894pz9qmsxAr5XFNR6",
  "key16": "4iDgNhDEivsRGPFRLspVYm3iaRZtF6SQzR86U491bC9q76wqb49u4oi2V7DPrbhFw8yQUce9qrjRArFWHD6dAFLW",
  "key17": "2PsB7c6VWRbjz1HK8chZTmJZnx7Gc3RXhR4xz4LM5zJU5yWK5g6jpjZ7xKHhsTnP97JgxRereS8HrZTW72FiTFpA",
  "key18": "4AqgQdRQi6cfV37aEFDQQrSYoKM4RmUNsNrNDxayJ7k5j18Mqh3AjRr9m4v9EQ54VVwa738i1CvFZJhyZYp7m85K",
  "key19": "4FSKi4SQnXYZ7ALQJmvvCjBKUokDmsEBYPLEzpJUXMWQdpoAiREZmVHaDLeCnnwtFxuagk44Dh3ThzXCscyNWv6B",
  "key20": "4w2KvXBvxEyPZzJyhsuVkMLa5nHAHvykbdedHXR5tCttboyDcqtvbE2mV9U7RCjap4ktNeHHGy2n6t2fz4d4WWpt",
  "key21": "2Anj6G7fAPeV3RgkA6wnWw5FJ2SxGiAkLBvxDeeigxz4Pf73MdCwHP6S7ioSqJ8QdxeTBPFBmZZAV9c5rXYJucMi",
  "key22": "5WeUU3bmfjDXAw1wUKA2SMQqdq4nQPydezXqwNHWsivSP7jFVPkMCEtCXn7pFSjPQqsMFkPjNJkEczudvts8DrH4",
  "key23": "4iuww9UtSZTowDNL1Qjyh1GBPAMFMV5AruiwtSbUQPRbQ7299tCdQQg2iVPBa5DB8R1Jo3QCaz1BYWgys2PEs2Um",
  "key24": "34YTZb5zGiANnKgAd3xynLCS1HeAHSBeg3onCr6qDtk6fxy3VTkm71D2QfZjTrVZcv8vRaEaui5DvjtAvoFVwuLG",
  "key25": "25UzmgGevJdvPKWvgeNbdU3SAUzeW7XStFksK555ja2h7iJ5hdVkqczHDVa83p3i8ENA7qDWAwwPzRSuj6EpQ2cp",
  "key26": "4ZNri29Di5hkRjuaFQo5ETgu813wq5ZtXTEYfhgrGS5rGnVwGwcaYLvoStHXAbhJuJhGHG29knXMJiv7KL5qS17g",
  "key27": "5jr6rYPYLpUFv4mUHBSExB7YjoBXGdyAxBKEi5U1LisKTuEeRv6SVBiShU58WLhio49bNcK9CT45Vn7oRi8mcjKu",
  "key28": "35BF1ut9qAFoaJUuF82TS8ADiVYFgccnfz5Wt75QMqfVN7harfHLUgTgkjRY98ZRg1xT69MiqF5EPaB5UcrW67ik",
  "key29": "ZEMoS5hbCTs8BDrjJKpNJ4VMNNsGXe6T4c5aazfj6A97E5g6mbEefgeSdL7ejaJBBYoDXUF7VhjjVLCHPFMDRBm",
  "key30": "2UU3bxBUxHgXmNDhW5ioMmtxrkEywJ9KGQhDqKhqtBDGGFAKhEDsN33TSyt9Nrf2y5EqiK8Hj2qL1WPEpTY81XA4",
  "key31": "2Leu75dzv1Y8fwtcemsYpg1DQWNR3iFyRfxRZgdF6pdMVFrAYLkiYk9dRpoHkEdHXFSCZRDa3K3sTGFCkZGkpLjK",
  "key32": "2VUq5amkeczxTGwYtBiqZ2snFUMHPS4xWHnP9USx3QbVvAxQYwdDKDkSLSdmrfsLNHJUt4UCUFPMxzgT3SiURcVS",
  "key33": "5cXUCKsrW9YimaNPQUoA9JdWNUwGZSXdjYcrSKF9og3ymAHug2cZjaFbhXTFBZufHrgoFUw3RupMfE2xw8LUcaAR",
  "key34": "jsTRPZMa4BiT4iwN2yHmv1hnS9DNeqGYr9Rihw1cXhhkH8pfYABALQF2fySbEVhMNGcUHeJsKw6fjDPU7hkZdnK",
  "key35": "mpiYjxcKD966dsNnysiNynsdVc1h95s9YWyWsWt1w3bYT7CUp1z1n4nzXy2fjjqSHi5wTrzGVqhfZCtm8DmBP7E",
  "key36": "AmW6v7QVoaH39Pvx8YYvvzgWVDDs3n1xmUDb2CE6LTKaxnMtEJoBUACJLQC9sbnCut7gUFYmDnVu884W5Fjex53",
  "key37": "3NH33gHvhs7ZYaMPiDyYPDF14yrAWockpk5ejtgrJgF9jFPnMndL75ReZnbmQd2p5BFea3PSPHHexMdsqVkkATMm",
  "key38": "5BhJvrndWGbbN2Wcoc82TxwkSb49MUFoYMAVXXb2cMazUqynejDqmLVLHwLirvRmuTGgbBuqivgk2uTk1JYLG3rp",
  "key39": "5oTCQEK9LSn2tPQA2mV6iBAMnGkyuHJ3eceiiG2NVLv43iS1eZY9UWpLRcGmi4gzdeYzs6uzUJF9S5qcwaw17JZM",
  "key40": "64QPcAd9m1GYx2KPACdMZHzfTRASi9ERXU7vpaAw9VfnBd3xbkrNYWYexsFozYRe7sXrZ6e3J6RLECcNv7LMqteY",
  "key41": "67nn6hXbk1onejvvMgrVQMVJ3zxRCkrUw4oRrCwWWRD3ReTiorgac9ZbD2n325sudP7Nqi2cjM6foKH5VKwYrM2y",
  "key42": "5UaxXCz8j9h2t7fvys1puNREz9bexrDcYad4J5shUmBrdiJiGnfULyK6XH467Tg1D3sBxCcRw2oMFPNejvoW3i97",
  "key43": "4AFW2DZcQuzxsAsuijZSMXc3pZ9mKzNjs6aMMVUJmePJhoBNk74iQXbuQdkv7eibUt8WxjSVgSjJ8rgcAap5snjc",
  "key44": "2XjZnwz7BVVbxBoCy2ZaQtTxenaWaAaJ1NVPkcLdPS9SsMjehqMjsx7vmwTReZbSFzp9fAv7Z4YJBBugj9qS6i3J",
  "key45": "2x2VZSngkbBkBSsMvpieasJjZvr7Vzv1JvKucv9jXux64BwR5AY5Zd1jc6z3vdsaNgQT9fjPr2spVzBK1aMCPfS6",
  "key46": "65gwK8SxxfRy8KTHm33AHNpkQKFMUFPmjFPHrDX4ZBZ4AWXSUzJ4Jx7xRP8XAZvrFtfSCuaBUXxmxHNgRyvvcs4t"
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
