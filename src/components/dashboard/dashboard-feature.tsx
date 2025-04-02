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
    "4vLu3XZynE4gdJxeFhTPwVnHTcQhhHP6oGExmwEFuhv3NixinqKYNK6TQvTUd2gmHJcVS6XTFFBScpKwBFP5UkiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ow8WzN6mNh2TajeBSvnCHLn139NMyBPBNMNB49sDFfycqQJ8zUs1e5FTMy4JJyya3nyQ4kkvam8NmRBdcBJ4sD",
  "key1": "3XKMdRshcDuAK4cgwDY3mqZstwpgAEPshPSX6TCSPhzENCv6mgki9m6MJVQ8n14z1RLvewSX8Js65bAxZsox1uwz",
  "key2": "64QLWgqnMn2Wes8ZjjzbDrkxLN8MKE2ssEhciuLc59eypKoYY9ejdVRvPijcTfp2542w8rMNMzsgELGQH944pyJS",
  "key3": "55nA8F5TBJRwDWMb4m9yCyKLZxboPMaY9NwVXxfaZAws4oSSqfp2WcaCYc5X2Mc289gwcBk4GfZuAUXEek93nkRQ",
  "key4": "28sYReZvURbgW9vfGjGX2mxy82r3mQ9k8CVhbxS4ULZKFMQLczfDyXgSrnQ9rodFvis5TizDoMMJACM9PUpqPGAj",
  "key5": "22FgpZNHMpoXpHKDZHZM6CxvKMgGJ2YDxosnrhwVYZ8GcmjRYuGyrtw6y1QfJxkesv8ctdVaaDXhQeYgrcirFm1C",
  "key6": "2NEQZNBPB4jjEVbEaMR1beXXiKUPHGu3BQFTRLzhu9XMyfgrUvkdvGsQwAijmJt6v2zXCacYJ2vhQCDmZ1T2teYP",
  "key7": "4X7K2QezHqBV434pcjoRguRfkGoqiwdoZpuUofU85hNEL8ESXEd2rgZKWxj4TJ45RVTPtTjmMBvz5K7vf5KFffer",
  "key8": "4wsLr67VMN2vFhzFGZd552W8uVtqv1emypwaZkhWQCnrQccSfgxKvsqCsh4DK3guibeDjQzmCAqzeCFcfwftTxCH",
  "key9": "3no9z9eJfHNV2BUNqVbQRcVk39x7CPLXjvaFgiGh52rZdXHNvYy1q56XxvUdchiENEKHgkHzdwrQbR8qTinB3SdA",
  "key10": "b2tr98dk497Ppm2djqba9c4mpFijVBjMNx2mZcQADQhskYjaW8oFycXA7PrxqTCAdHeXpAUUNBHLwFbfg5MDt7R",
  "key11": "4LboEw8fFao2gGKRZ3J6k2KXa4zmXRciqAGUHXfVDGaQpQqhsNF4ZY7z334WVnAZvdhpcKvfJqWTTaVjda49hXQ9",
  "key12": "4dqVBj5N4ivzjkeN3SBhTSqm3muCVT7vzq8T6hC45Kgbj3Q7naZ446vFVpY3xybpfXTPswMGMLu9QbK6P1hJrRLW",
  "key13": "5XJVFDPb9QzH3f9UE8jatoKE7sqPCZgpWHh6PhNHSM2EKTtDvhVu7cGfrpr2GTD9eKirKDXwZbFn7XtMaBG8jMUz",
  "key14": "2RWHjAeYcgjVS1uvbUZzswfBBi1sEWBLh3qeKFWajYP8NgMUAyYKAumTERiPXZFz3YXLi59ot7gdYZLYcjZdH6zi",
  "key15": "45Y1eoCmhfRejs41Aoxsg4pDvSxU6to6sphXn1pJASK9BrXFAwDam4PmsmpN4KxyxfEBq6qm267EQvm41mkLkBKu",
  "key16": "2ibT8c1jAE4nvoPqWWURjFEKC8rQiQ33QiRQi9uD67X4R8DPeaNTVjhNS3MLLKf9oh5eVZ3Z7pKPzcbkWx9bijUX",
  "key17": "saG7rMrZ271CrGzFPBEdpu3PC4Ca8wG4Jwmzu8NrGJXQ32qHKXwQiaAW39KwetAGxpVRff3zFXRo7BHkxYSgMHR",
  "key18": "3UVRgveHHnuotKtCRkyohM4AihXNHR8MWBPTejttccGS2m3hMP36Ek3RmYXJ8NA7GbaswWQM8EGbdYm6qne9oz7L",
  "key19": "4RfvNWoFDH2qPxf2psG4qSM9cHLLgxQfpbV8di73GkaXJwCvJtks5tSwiwXuKZMEr9qeL2YJVx1u7KzUqMWcmQX7",
  "key20": "3krghvtfjQr4bFDroQdu3rzSKFyxc5fKx5UZCY3iP4BVEVUZNsaCdKa8SPRs189Wrvh9bVLcYDwsmn9KvRQNYUgY",
  "key21": "5VCoBp8gp8LfGSSKgbHMfq7BHny2fGStNdjARtPnjJXcohmCpTnuUsWrgGG1wyK3hfrmAhgPz9HhnjQcs6opkHjS",
  "key22": "2jX5r64CBzNJNRAxt8Nn4bP3WDVp3CWRWuEmW2DWh72sNNC2A1SmGfA9Upz2xXnKYzo6Gwt7npnkxDWbTTGWsDvg",
  "key23": "2dK6qwfAUTqPLCEFL2fob6ActLvAwJKD6zrXzPK7X3yYKAd4yyuVLrYsgYbKMnEAqDn5L4qxsL1F1iaF6mRdedLi",
  "key24": "2kzc65WALEuiwQdrtPP66C88pKQeMthvrncVe7WWqiZJPH3X3x84wK18R3A8NdyVobmzgPNFjxifFKSJD1n8TTq8",
  "key25": "33B98XqEUyjNdQncQrPUh98iuFstBGJNdWfbb6kt8ZUEz4mrapKyPnaYQy1vUAvQUkcjHzTgFxxs9c5wBXn3CLQp",
  "key26": "4vm15Qxn1ekqrSg11T9vQXWyZ92cHNsgyaboeAzmgYM4gHeVondevdaoxe6aAb97dedGopTpYDd9UshXGAYYWhv8",
  "key27": "4gwKNbEsRvHUZ43MdxqRRz66yGKLagwNFLqG1G5cRsncbthaZZf12XsCuWTbTm8rbrMp2ehw2kZB48ctfhw1Qyef",
  "key28": "4TVTJRZZFVP55veF7p2Di3d3Vq6Fa8MVKufaES2Zrt2ZWf19L3qSfheyPSkdhdA6XN3Sm7U9HZcwCtzJaAjN61LL",
  "key29": "4sF4Dcasy9Zb4gGNgodt5hmnMZn5urdCKyqfdzmmaTXM3whAUHfiMyAGXha7GwEgmqRu8GXCCkaZ7JpPZURuyja1",
  "key30": "WzX8g9zxDRL2gC9DdhTFaqd6bFPGvHDwsQUJZ3nx39pbWcjYeLDChhpQqVYD6XyjWY4W2oCVD2pHDrY92V6WPke",
  "key31": "3ojK1nArmrxwGML8g13vxit723inCGJuAn4eshcHNiFsV4sSayQriaV42Tp6Zdi44ujh5EDnuLW2kv6buF4Xy6vQ",
  "key32": "2Y7k87RVEWczCzn2fFUAtmGhMfWmKUmEwRnwxrUn4yQioS7LbHyrnf2Hx5L3YzPcDgc83ChWGUqrmdPByQCpjDvH",
  "key33": "5qtVo484ExD1G2acLooiVtzSqbfQikc9uen5gcbNpBZhhZJY3A9wXf3C7tE1iheQ4zbz3L6pTk5NYu3mHNXR9Mr8",
  "key34": "2RES3h9gQdoRMnk79YKCxb95WCUXiPHvWoGMkHjmrvB9f7tqn1VFTbS5frWsKqGQqF7nmWpN2mxuHPk9Y8tbxKW8",
  "key35": "Q9jKeb9jtyFCyx4UFmT8WmdywymaNRx2BpnJmKTc79hsgEJvWpuCb1Smrzajn2y5kurY5fWfMrTiNk5LLyQr9gA",
  "key36": "4nfSYPnEpuHyJWJw9vtEodXZDR4saoyoYt51Jc6WXZah8a7x4iuqr8d8R4Rt69u8NyHDUhQ9ELXrn3sLWRmVqUhQ",
  "key37": "4hvxoWjbnsnD6PQFjpbvseqhvvJ49ys5QLN8RxttS7w8sQxHzDNgkHg6h9ZUDaCae15cKZyCLxd6J7h7BfvvnJ7D",
  "key38": "5d3w4ahW5byzazQQpWswhbjaZErCfh5m63P3r8r2FrSFm5gEpGJJy9RTa2mjGGv7WdERsTZfiP4qNK5jmCkZxDLu",
  "key39": "3CYz3fMtA2TyoDs6uKv9f31gH3KVF6t6XE1kmRMG6zipwukBPSfVdkpeBsKeYpN7YTUtUe6cpN4H45xUiQspRPir",
  "key40": "36LRyYXJfbsxdXUytjw1rscosWNiotkFqVCaGzQXX9ux7qn5rQMaYqkwrM3np2CUK5Fika5W3uosE4RLA7H3MVwp",
  "key41": "4sGVYTFPFL1MrVAMLhNjiC4LTHW3Y51BdoLNrhm2SMXtgnwjfihYyX2rPmmfVWpL7YmiVVdhC7joerrhsk4HFQKC",
  "key42": "2oXeb7FZdqNZc4hRzFEtr7oUKnefV57AoZMJZcB8bWW3qxWLCQ65EWUSeccN8FPhnJwJdL65RjzQYhYWpk4Q2FDG",
  "key43": "51PsqSUPCmcbquvTz7VgZZBcyT6SdYtLwtHs9d9eghrKMopyR43McJStBdxDmGTygYgRTp73W5P3erYH3kDMrQ1r",
  "key44": "23GQoPPmYQPCP7HxAZ2sJU74NvPxYqgmeUDCaTSBmW16JTmAX5GcbLEGunShsYqLtTg9ZGXSWEi3ZRCFN16YJC5F",
  "key45": "T9WvPw3ZzUSQ2wwPWr3FYQ4XAqBc6BADChRmSfrLWNNSeKe5JkaChmNt3dSmsNmz8Ng3tgf6xLzgB9UoxDLS3gL",
  "key46": "2YaKAhc6RHx69pcesx9gvB9G4Hhba38VUtq1iWMkn2weCHy4CJy5kaBqrExdBKpWpWJVCQXyZrWZYhirXpHRmmxJ",
  "key47": "2XcpvsgeuJQv5d3UrD3kVbhAVwep3MrsnHYE2AUSVPm4qxSPp3xYcbDD2AbFjwV7p6742aJTbHhyi2BgRpGqc3Fh"
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
