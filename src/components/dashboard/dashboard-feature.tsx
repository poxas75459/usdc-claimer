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
    "4Zavf8cPHVSxuFAjXTc3mQGnL1BLVwWWkijSj3zX1ouqniYKZ2pwbyRgJeAFyPqZweQnTfXTeqtpYWvfgM1xNVGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFfW4vb53aTPv1dYo1jSeqNibyn4Xq2okaYzaaWhGwFFb3PeDb6r94bg3wFrV5JU53DBVPKFLe5KevxqkAeJKaJ",
  "key1": "4CYY3MgTEaEYZTgCpNvFp3Z5KjYo3GX7xyasB22RtHCsonxhE9rNgB2emwquNf62ithouJJrAaEy6Z4mcHLSKGnS",
  "key2": "4wVMB2Jr8aLbHz7vAv6yS4dXGpNmiS6yE16WxwPFDevU41TZV5h9qPeXaVUs7gGxPfsrWExPM7fEx6VJtGbqLTFe",
  "key3": "2byYvCyF5pSJ7pk7B982ULrmKL2T3bPQdb4jAoPyHdfiBk1QGAm4iyxJ2azyphovd7U5fJsNMyNgpWUXTjyJoTyt",
  "key4": "5Fc8RJYMUhjKQswoQUNoRxAonPho6By8yt3jhHUCnDomhiGppoXvtrKLTeYHCNJ5aunEXxWG9sZXyt1dwffMg8Nb",
  "key5": "LJQaAgrppuXpMAERrF3geSYH1Xf3C2G69DyhthXBXXdNeZAQUVFzP8eXn4tKUDvQYAV5noQnhBj9dUQ8FayYHWL",
  "key6": "4qWK7mfDHuvU58xEzx5ji8Sie3o8kpuG2g7fyzZNJj89tHhoKvm6dj3UiRegD6Z3JfWzPuUp3Ltgtxh9kzCMMy5y",
  "key7": "5JBWmbPRShPjhJahhG1fnZptf797PRqvGPnjkaRnbadCs9JoB9GD3gqNYe87LKdZqofWSfX2aehtzN4mWZkeEizg",
  "key8": "4s83u9KFy7iLNk5JCvcc4uuWJMG4PTMYApwGSdJeYwgqDmRYSQuN1iHWXRUTYUyJ4GvT1crpqdFUshBFrMgZVBky",
  "key9": "2Hbx48PmgQsh7jU997aAUbJF3nof8Drm2jCPqeUDfHzuhrsDEaCxELVxRzimPLc5mDSsnLGXbs64SHmreRZUUGt5",
  "key10": "5LmbvmjmBDmtmKiT4gsA5CoweY2yF3RwJW6BdrTTJ3AxoF56fLabx5aSMsXNfxRxGXbjXyXMqWYAUhfcYLvByhG5",
  "key11": "5MCtcThu79uz9iYnxxoVnxYynHo5o9qc5ZyyBM2eGAxP2id6pNx559A9fBwUyVrzpHtWR1XtgQrhMYxAFSj1XFDi",
  "key12": "28VBLmUUFpE57fqGyS8EgX3rcXoe9NwNcxJVb1FY8bKP73bxDjnCn3F7ZEQcz5HsCWsn3Vz7ovDEiYwHBZwNtzZu",
  "key13": "r6TfmAp8dX3uxzWyGCVCWvFZCeq52E1Vqt9zmZYj3wgwMacLKxz2NssxrUMUXYif96HPVpr7xJ2QZxhQsbxF2pA",
  "key14": "5QSEAwVc1Nj1BxemrE5RdofHWiaeDKc37h6iaKr9cwTvsC9sNXn35N8dyJoMP4XYm5seqEpvXxKaBWBsdLsZzNeb",
  "key15": "4i9YsiuPje728HHm5u49hSUuf7iahju7S2Do1aoA3eJAP25zpGJHCbgRYwkhxJjNjdc4rmge5QatuBHQ8iLch5sw",
  "key16": "kVwyJz7462MURKjrcNfHZXZb5f7ji73nBkA6t9F5dxEydFgTtCLxYD25AaUBp3UV3q2gkZzEGiDQjLRRnXhCGHt",
  "key17": "3uCpNcC9rEjp5LSUUE6f8oTPcxT6fU6C8vUM5vkhPrNDDtaD18Hvjw6TC2WRpNMpYUmVif9tiBDit6kkzhVMGLFV",
  "key18": "Mc9i6egq6eXChJfq54Bcxw3Pq2zb8o1buAwBK7hivqd8mvejPQ3GVPJjPpx5WgVVqMRhJjAqwJNiiUQw7ehkn3G",
  "key19": "2Ds7tfBuLBhDLkbD1YXQAZ5LTksAtVCLsSF6a8QT1WmrTkNi1p4PdxDGC8XDqBWw4yMJYYMQqXkd3HZ8bVNGrkUd",
  "key20": "577D3FR3mvGCH4JWpv7vDwDyHxifRUSo2Zb6JcHg3mG5Nu1rRaSCx9pqzWTLCngpVekkoiC7rwB7ve2uxHCfYbbe",
  "key21": "5C8aRFATJxQKtBxciHHCz6XcNhpTF2nmGmEitBA3Mwok4YhTp8awEJLPpWFHsSCDD7NiWRtEJk5opw7KLE2pv7hF",
  "key22": "2JiPT8ytvhxK8jB7ASZWurci6azJiFGamnebYEY4GmyzVLftY19FdESm9wXxLw57rLXUFEgzuFogeyQD2wz5EeWP",
  "key23": "4bCxp9nc13TPKvPkbNqAeqLHUE73PtXXzf6dR2Zi2pBUBCitsZsTAAoZ1PaiThHekVcctghFEAu3kEPtCrLa24Nd",
  "key24": "5CfuwiCv3xo8xVjxAsY4fe5CvyE8sjJe28CDohFmf4eNT9wbcs5KNG891cTzcQ1rZ9WurtFcGY2Q5SDCFxJ1PYgy",
  "key25": "3tVfpcWm4z4Vad2afEDfiDorCDBHs72cxcisc3mACFgp7jUHkovxSm9j2vpUgQcxmNk2TZcA6rqeg9KmTyL5G2gK",
  "key26": "21DNxTWF9CgKnXCSwvZEFwn8oR1bxWy4BgWT5vty9N91i5pzkuvbEUr1ABHWiukVuJxCoYya7ZYxfKPWB67hjkrV",
  "key27": "4oo9f3Wavjnbix1vGe8aeRjaE874ra7ich4DGLW2ktgCptdK5oAPmX2k6yL2LaA4xSy66ahq6ersjvmnwJsXp52R",
  "key28": "2qLFyfzvZoaxck2ppp93wbUit6AgZqiCvnE8osadrxakVXs7WZeM1ErVNHEtAdxcDsHVRDpCMLubjrXu1Ff8fNjD",
  "key29": "2EvCa6BMEnrcYA2ANfpT4D4MqMQBxhWHNk3TRpALkRbBFVjr65zwUmYLMhnLRsZKnysEhpqFbKBkspEn3NVfKndZ",
  "key30": "4k3PYw7VCFkaHzWYbBCWvTa4c34D5i9K1TQDvw46xWk4WUxz6tyyhYJp9jKRDRjeGnub4d3hJcCHgs9R6qtMKvVe",
  "key31": "LhQayBasbXk5mQggAtSg3inkUf9pfyeeWkxfUQaZPx2mAsJ3LGhNE9ti29j9WMBXT9jFocex4qZypfjFaQiczQa",
  "key32": "RZ6vbTRmiw1dEcPhqwvzrNwWXgMXYi5E2tpokzAFedVTEkua91nPv5mUoQuvYKoadncMGbfaLe4MDqcLLssp875",
  "key33": "4amNkLGss84ZCKeDSbsJKxSnZkS2PGaewDHMa2hBWd13i4HxTeZrTTaVbty2FqsdWYiQZaS12Dnm68ByjRwZ8yX",
  "key34": "3hXe65ff7D5TpiRYapkLtLACW5aDn7JXUi6xzsvi1G3WbZw5RmVjNurnUWZGFCTbr5qvr29FYLz3myJwRTpN9bSQ",
  "key35": "4E441H5L3uZFtQZc5aGw1byQbXG1PzzdBKDTFUEWPAZgXJAXCMBkQHWu5Z1sz8wrMjkHvAPqTBXTUW3jqgo9BRcj",
  "key36": "56nuoD8CSvRbF8Lz9Eq7g2eN37hJ1kCDSdiwDreokSEQVdYwS6cd3VVxzSakwLUS8KqK8bkyYq47puZshGKYxvNH",
  "key37": "4suGj8QHwzGqEo183xyxWHq4buyHLJCb9CcmCrKSNLtmzoL34VDDwixtm9wGbZi3B8crEtG5jC3KZxSHSw9fFjs5",
  "key38": "qJkRdhLXif8q9nM41YNaQ73QL1QS3rFBvUB3XyLR7TCK4RXrcpfj4CDdvXJwpcB38gMPvFVVM5otrMamyk4GEBr",
  "key39": "5cUTyi2jpRffVctrr6nbxCtj1wuMhtN9hR5bXnXNfMUitgtbLVfmt5MHezprK6kpGedhPXTH6Cj1Cgiw1jUiyyda",
  "key40": "rgu334eq6UNtR8Zg11uEq4i4pdeeeTLP3bBPytUvezZdxQwgEzgibMc4Yfcet2FYLs7tpGUMEWWuNjL6dvY2jg9",
  "key41": "UDnVa8BDp2ruRT8tDpQuopeThuRL1KUnjJUhkPo7kUodX4BpuVy8gwPn6igjwxVWf1sXY1mPPrJEfb2ozzdcWcx",
  "key42": "v6QwNX1HHGzzi2EH6YwsvnbqF31qtxbRrV8mLnsfRszxpuBxXo3azKVPsxuMYrmzvn8QXvCoMQXKA55CQ9PgSuV",
  "key43": "4ZWKZrD5J2vPumYmVoWS79FLAU58X6WJskNHrn6VbyW2XGx5NA62T4C5BWr6CtDCdxSL8co1GskTRDgRLQkXxwJ7"
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
