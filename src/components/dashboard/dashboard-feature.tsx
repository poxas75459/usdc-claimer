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
    "3PUq8zZF9Ges8DKTA2ktCDxAUuPq7v36Spvh9gMJNMXJtmpoAzcqCZ9rbxNWeSC1Na1n248JpEJGsjYzbKJrBfDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRr5MUzgBhZERt8qKQ5S4wQqoiMaiSNiRXXMujyBS3jkpGZxGd1LYvrStbE4D4oMCkShZpv4Zn43GsrmxQpoJLj",
  "key1": "2kEbzovqPrDUhHjpPi3gVyLVtiSMh5yektgmjyhL9sJdoN6kG4PzFucWi3u6mqjtELeLiv7DcgZqRmzBFSg7Jftt",
  "key2": "2aiwzfbXYPFL1ApREBw2ybqSU1WAMDiVAM5xPSXRJSZQanxbke6jmHaeuTBABReKHnkHgXih1CsDcge8hwsnvypQ",
  "key3": "3bg4nxhWU3fAZ7W8EcgA7u69hH6K8XAEzjfBjCMwVyjz3BhT11UjqBm4cLVABvyGdyWwunMZbR4i48C23nxXyBBu",
  "key4": "35KDWAAjJFUJ37N31c8UoK9wh6fbzokp8VNfpPAFABTHe7uQwDEYEoFHDFdbPzwgv5mWYkUZu6auPxDYJ1PSKdHZ",
  "key5": "sdk7AQnAwEBh1vHnvG6i2P5LXB2F9p2Yz1efC5L1AXD2jx1TRRPqfHZ7hWDFo3qzWDeqwa9RUnoairF2iDFCkW4",
  "key6": "5nVHcbRQSa8JxwhwJXuddBR1f4ywkKPbKgr3yt51nevbmCpToYDwF2CcHYykkBduajjbrctoSHEXJTSEY8hmrKNa",
  "key7": "4zk1A4jtz7nBLDDQHoitVdSVjvFwXX4KU23JLnBWEqGERQrsrtvie9AjFubVMs7oCeVqGnYJ6P5hbrTPiNU4UAMZ",
  "key8": "4snVVTRTJVNgUnWTLTW9Yj1Y2F3EjeGRufSzCbYEs78y7NmvS6A2Ng5gJBpZEMuQvGJEAa3acVbsbqmwVRkjbPRy",
  "key9": "p8zuhze1NAk8XfiTyCWn1SNHnTwcMFjZ7B3mgmKGBcqHDgBfCsvkF3yfrMP1UwwUpJPpiAK7KbuQLw3KCzP8WZb",
  "key10": "2sPzJYf5bqLsBez3A3PyZAUnkiKvU6FE9d5ggvKT93mFM1M3R1ygcLvTevEXJQQMZGQ9McPu8jhYLTuwxZmjVhFC",
  "key11": "65gQRZA4F3BDqHveHYjA6e3cFRnfQc8M83fzo3c3ixNQc9dSgdryyMgXTfVUw7aWRxNbcxeVB26XpabRsFkbdk8Z",
  "key12": "auUcHFxPRSVT4bzTZFuRqHphfXkk1tX9vgSKZEVgX7KAfWkKxqAN2jW7Tui3cJstQfyBQqHrSVKQ8cKcjvUh4Zc",
  "key13": "2rGjf5yPsnsJeotyAwaXCexXtEXrqHNFvrUWeH6XwrVjV9dyZC2CEz67PwKGTVEW8e3Rw7ZrvXEBhAU99xjhrJqa",
  "key14": "414ia2oY58WsBdbpC93ePCuAXA3gmrw7Ge5Sa6JrPGcv7CStirqY7DfJFfyZ28H7VSQwqEVC5u7ekofG1zWMKhbH",
  "key15": "4V3wP19YdzbT9TT2Uoq1ttR5VTrW8N76CijbtwS1dxPHe9UCHCFpkZp297XBLxwVPEG4q8NdJe1hypcvDSFfU672",
  "key16": "9sGDyWgngF9xczKwHsdE6P82es2CZAYyBgthd4rAzwdbNBV4jgWhgsQQEJ2tfHVuAr1e7y5dGLkPghBsZcYNs9C",
  "key17": "4NV4rfLCyeAWRxM3w4KAdbjioukmBpXC5J6Rys8G183Gsqp799bR7XhHUT9ASzmyKX43VmcuNfNjA1nFiqH3ucwB",
  "key18": "GCdU4Urx4f4Ybhn7BNH7h2kdwdnooHjahyYEGbHZoNKYsseWdYMfuCcGsgGg9s5MJw7CkjMMS9dAuZ5mLFyfomV",
  "key19": "JH5kqhACpGudnTTmhWYjbcvFmNwWQKeqZptYvXURUdkAWNAzn7bts6AkTHREKRPZz21SjypMZzuFSdnDno3JLYP",
  "key20": "5DB6xt7362x9spSHVDRa5Jes3DmK2vzdkJ3g2buWW1cAk6XXDfS8Um3xVDQp7FuzaWvRrmWRdf3R2KXE2KfMw55C",
  "key21": "3Rj1TJwk4hxBSzb9GxByZTV75pwaxj7m7YhmdzKSoiX6orcJho8xJxdi4PmEBNpeFdicebY1Q5cWXtQxQMjsD2tx",
  "key22": "4EhR8DVyZBo8c7Ea8uza9Wihg598jwQvg8opFphXugAoxnK6HNibYLYDJGvSb4sBn5sLuLy6SpkzmUFN8SQPDLxZ",
  "key23": "57DkCj2myGhoqQnXJT5rqh1pTQqJRoWQGu7akeuLzaQa47b6MAchvWfwpFhXKX6fe9BXYGbnuwfcn6fz2AoByiS9",
  "key24": "5WJntSgUFiA6itFRUEJ5Di7u7KnbCn6JEV9AATr3o2ykDjwxGL5eC6MSgxG9kkrq9KVQKT5DdyteZQcZuRsJBZgC",
  "key25": "4Zom2cv1gp9RbSFpxoSsTu7q1AV58GQUqTd7EYDXTD8pdEoGoMhmLafQRUJv6LZEjs8P8uEqK66vXNEAN8cPThbS",
  "key26": "5ZemZTuGA27v9Wdg5q4iX1zvN6aJpK9m3EnDhMkSR2Kibbn5cn7L4mZaFXkruhYsTvyfz3qmTjzaT4eN6Z1ef9bi",
  "key27": "2GFzBJkeZJCTrm9mEB3Wfe4S75NtZb2wUppKgn6y3trCACjWUxvqZekWZ5nCkJWp8NNimR2hmySywV6mc7fRgFPZ",
  "key28": "sN6SeZvJdJYm4DNUQXmGTWT9Tq2ecxEZqm3CdTpPkohrL7AoyjR5wFNm2hCxWiwACC7UP6V6hdaGnfHnVRRP7u3",
  "key29": "5ooAByR5yroyE3MyimVUDw5AXN7nbuYs8xDZpxDC8ZFKAKfn8C5r6vBWST7YX4ShfghURNbqezBvRragxunS9779",
  "key30": "5QrjruooNpc1FPcMNgcyJZQseUTKFq7fhYeArw3szVzH7XUbitssFcKfjNY5Xq6T6qW7Jpdo6Rr9Yczr3QX7zpW8",
  "key31": "4fczu5vXVfXG64j174dQTGpen79Lp4WbwVkj85qiVUg5sLTFTixFLufj37UcWZC146gnDG7ugUE3TacJN551JXzG",
  "key32": "25iycHQEJTMmBBsiRjsYthxL19p79LZsMWnEMGAUw9Aofw17fpCUaZNE9tnMcAYPXGM3LC9t3hzZZFzyVvcWXj1y",
  "key33": "3VJ4CpwawDtb6HHGC5w28xqAKHQnsG2y3Hd5Zf7mGCuZ4PM2ydGh88HfbCxk6Ve2Gax9b2g8w6QbdbNw5Q9szJUU",
  "key34": "3GL3z947YYwdkYDxYJ5N6wxBHmo75HVN9Fx1zhZSYx25Ca45qy8cuWnjfsVDnVpCm9NzqW4hnTAr75tH7kWWvkpn",
  "key35": "3JALoXXDkGCTs73LkQ1XP4Qs9WzjfWwG5QxsgV23eu2WUbMQEmDUScCNbZWBS4Kc1XvxfpuxPh3GYS5b482MSPBz",
  "key36": "2YiQgR2L3vAMGANeBjdKKUPWd4eHg143XgnkDCuRRSguELsfQuttbiqckZQfrEYHBDjosMK2QHm77xKnfQ57B11r",
  "key37": "41HLA5pMegS6g4hVPgbZcZKX8oFT2qPyyMhCy8DYsg7PCuhvRgyqDqApciw77dKdVhCyarE434iqZBDxecgJCds8",
  "key38": "5QMqVC95ejkPm8m3mYcaDBeQyTuX7xDHy8BEALEvvszKJFVX5e9BAzNnSBzsDBXeUsB9sG2z4Kstct895XQr9Zx4",
  "key39": "4DHvfsP2LMEUoxLDWkFFKDnRdJDFSuNZx3mLkYEv6YsEEwqur8snPcgjvLyCttjem3Jq2qiBJaJwdiKstTxREdrZ",
  "key40": "2PHpGB5HSkwifecMcCfzA1Xp8CRqk9yaQ6gaHJ4RRDPSj6GN4CceiJ5Jx3NCU9oU8t7DqHhasay7A1Ec8tWsKVNC",
  "key41": "3qikNPMEk9fS4eLX34FGm7RG8HDA8j8fyqQbNqzjN715fjnojavuzycmokGRZ7BrH2qTgtt4T7ShJcBMJ5GbbMRm",
  "key42": "2eGnzpaAbQWhDcVGdpJzpjccqW8yNGeJHpo8diB6XyCGQUCqRzQnXCEZsNtCpjge4F4PcQUh4u4WeszSWQ3Gd4P7",
  "key43": "oiBLTyeUWo2tTFneHRH5xV3kXJ8zAaLykXNrwFpojAkmVA62U4CYpz9LXSzvYNf5S9FEicMTcgHbGYvXiUBmRJa",
  "key44": "5XiN8PRDeVyD9UTFQgRczLifcpmnn2Fc9h7BJxNSPQS5VNim4Y3vjNHRh3M5LpRxUQzC89FdeTrajgQBBvHtRP5M",
  "key45": "5axLkSbSaDWTMeKuxZJYMYs4i6z7XxsApqRiSbwg6Sh5aDgzkxdvrRqyZX1Ek7dp4fXEm8wgGZvnVekkYqwU19kr",
  "key46": "5Bnh4ZkHbvsgJSD3BzsUc5H3djire3nZFCmiEFtuq8AVatfHYb2HKQuVwTCc8FBrJXcgK1oGUR4WQN1BeAWeQ7VS",
  "key47": "65w6KkTMRVU8LPEnMBQn3UUTRRUc33xgZcQR6MpAvjaRYcbjmvmoejS39vYQviNKFYiYiVvwU9TFWnsqZhvXAcZo"
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
