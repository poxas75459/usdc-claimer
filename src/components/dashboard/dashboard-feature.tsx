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
    "35vMYwa793N21fSLXbXrAg4YqSue6P66BVZwt7c4h3Um2stizsU6mf5qyrCDZ9mkaUd5bootQKpt1Lg3CNLiXiab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsuB4hMdBrfvYDsW7cyZto9m4kVhzfpd7T5r1pYAhsxVeWL2w53PKJdM1yL7iTJgNuKuBRtQAvQzGwYcrHiML31",
  "key1": "5eAXTXz44GKrx6Wnot8SjFanWhXyiyaQDLk5q1DhmBaC9rhKGBQxF3WXW6VDL37fbR42NrhBro3Z9GfW8oNSYsAM",
  "key2": "62Yr8fus1Ak2WApauLpmqukFrM2rRnnURfkb8fuhQBQ7zRdHnpzFRuMvMkUJKaZvMzaZw5nd33dbVG2GKsMbnwDZ",
  "key3": "2eWoGANJXyrVi5qFnyaah4zHDafe6uxtw4mMbX5sZnjBtTaC7r68PD2YVmshGj5Yxa8dNXr3V8p64j5uJCbedGu",
  "key4": "4D87SEUYMmLHavyspEtZPzmhuFNru77CEopBVQDouaxqHu1sx93Bu7fsBbtYmnYkdPeExnQD3Yfucfm5M4KoQnPN",
  "key5": "4MaEMbDkpMtTnFHKpeicmuLvveF1ZyGMiB2LJzU3WyGQ3Yfh8mejRGmsDv4DMeVwbcJksYQaaHshRR2MvdB7qu1d",
  "key6": "2Bq67XUMCMGhuW23Ki1X1PHXXmWhx1mfGPqSoKrtTfRL6WUY8m6of1wgt68X1dpQW3EFcQgQrYqx9e56UkpuLcEs",
  "key7": "47pnfu57F4mDW5rk3ETPu4kX4H1iCUVZZX91sYsHFoFbuRPeurSZ6sc4PYniCDrLjiMRbSZzAJS1NgvQyZRGxGE7",
  "key8": "GGcLfPAj6ihiidp6x3f7RXxG5rjbDRzDAUKsakDfGNq9bkP5d1GYwTZw8odzLKUhSi77Wtqza6CMMxvCjvViKwm",
  "key9": "4e3LrjsiRCe6HRDbUqYbsKpgVtMJFuSeumyf6c89zrMxJNTnZm5RV6wmRDHccGYJzPRkD8C6Yn5vfkvwwt96JUVB",
  "key10": "BabmkJkir7WPy5meBFHfozVPygXHomxS2TPSKHqNAGcruaRSwHN31c2Bk6xNZHtjWKZ3chPbuSf2pNtUK1jXrKE",
  "key11": "pGhNVcYbN3j29GWorCYGdRGqTnsTHAMLEVGLWQ49uXLb7izE5AWMq1yv1JfBjaKMrW8KXhjpivsTLpnHak1cyRJ",
  "key12": "P9tr4efHKuTHzk6NKV8myNMJ3S629o476HZPsmBvRGvMjSUWdJypnMSEyHUz5716LUHi4kRW4nVJuufud5r2dG3",
  "key13": "4iXdwAwKLF318azBQ6X2eQXvE3q6VpjVTiM6RtWTQiwuyAyuB3jbKUuRpEWpxNW1r6Yw4SWmGvRcS6ECQV9diBRF",
  "key14": "31bJi8g7kocQCe8wj6C3MiNq7qESqxjsiuWG88ezTXmH7axvXgSgr45Rd2d44CBx4QU9ezgdFrTbUWKZFuH998RJ",
  "key15": "4ZHo9MvgcaW6nGGPkPQ2pEUxoN1tiLkZbNTeGg9heDdRsyRnAhypxgmDU4zAWCgbPXAPZ1pWM34CcQH4b52F143B",
  "key16": "4tB4H2oyjogoP8KmrTdSKtmLsNApAYeF2vZm3s6bYjY885Fwpz2H3i5t2Mj3Pq7oY2RUGEbs4X4rTHfFEGLAwjJN",
  "key17": "3Hot7mLX1zk5EfF8wz25awMRURPVDhmXPGjaKkT7hWnXbrbdZ3T5Uo9meyFqhSqw3v8JPCPQW8f3t1u3phrw76rQ",
  "key18": "2FoxdzEHRQuWu1iktzVBuZ2mud1qfkMFCLsopubbHUP2kbNz5dS8PS7pJCitjYyKEWXhmbNMvamD5SmTJNTZ1xu3",
  "key19": "T6t6wNZYNGrNU1pDx7kfn1ZvnZBhsE87mJA87hJaVWaqKEyLFTmWPgbbAEQn2SNmgf3BK4npanR85GYZNFRa6Br",
  "key20": "awzjHymKZgnYUg84riP8hhyYyGDLuHg4QDxqjTS8k9Sqx5e8biAWsMBQ7jeqMAHXFD8u9UQMG9Yn8Rc7PUvJLLM",
  "key21": "2BgBHhkz9d1kvJSYzYRZPThnmurASysSYGeKAebGNMsdEPPxbdWqUYqdVHL3kv4uXNfcso7f2mvXSA6zhSTgAtRS",
  "key22": "4DMJeP2ZdbKzLPNrkvDXge3Ab6m1pwb8A8mPwntiCEKXoJG2ee9H5YAwthxGf1tWsyud3UvoNX7e5EwM5bSqug1V",
  "key23": "5WfdgjQ7ahK7TvtkfssotSALS8Pr9a2ktPrcvPpMYEdaQh9GXyZpdyS25kLtqAnYUsX2WhyvPuwaJM5SZsq2Aok1",
  "key24": "2w3aqHLo6AQ4z1SxzsLjPV4W8mZWtQPB6dKunn4esvJUQ9tUdghLsk2HHJshoZsQfgR4dFZCcWHXwcEDpdJPvs9A",
  "key25": "3ZEYEX5WSV7ggGezdgsoMgxyjDUZXwewCY1QHYF3L6eFtmisEZEG2ZR8w6no2hKmAna5podyEjcRncHt1UzSbXrZ",
  "key26": "b4dRzGnaRD7fTPreAB4xs4AnqLyqEJ12e5GB7zXNMFgG86BbG9hQofDBZtpN348ijjuaMNs827fEcUfgk65S6b4",
  "key27": "4Fi464meKUZywiACm15t8LwhodJ5nYS4TaK6B2NW32drduRpfyjCJfrg7Y6WHmxfEwiD7WF7xW6SHENCBwFRg3wr",
  "key28": "51ibmTaNJDTKtiS8tAL5RLgPdx3adD7ez97AfRCdehNRBoNjB7LHu5nHSgL9dFHe1bbZXPwsYTzxLJV1ou95rehh",
  "key29": "5R5unNsVdxkpeWRfLeiTXS9J8CAyJS1vvDkB4HVhcrbUhwca2xf51sn3TDskVrbGbA31Zqt5mgr9DuDSLu1DgS7K",
  "key30": "4bkKHDaicZ3Zy4zm79d1JoRVyaKsKxZbHykNxbVw6c7ZqjqUe4Mt68HkqvnaRC2rxcBi4pBEGaprZinPVyPnNiQ1",
  "key31": "4hh6gNqFnmitXmAD36FE2p7WF8NZWz51RUaCHuqTCqLY2wNK1rY6AnERkHHFU8yw3BUTArU1QHtMH6Czmv6arzow",
  "key32": "KkPDMq24Q6wu1A9mZGe2qevqYknfNoU9KBFUSCuuw6MqqRDT44ixCxUJhZ16jeHPQjtNTg6wkgLtq5QikcWxurX",
  "key33": "2bXqD7wdSLjvp5P35sUg2ZgNReNeCEFm4F64n77H4RDWXqEcDuyqzcr9NXaaFg5uba7WFvU6APBaoEpeLaqygjPN",
  "key34": "2ZSWvbhVc1N9TV8pzgdZcziBJrr1ACRcHxSKtERc8GSvij63x1YUXCgZsFhWhVLF3Q5nGeSBicRFcnhEiSAc6b22",
  "key35": "5rZakrDLmfVKoKxi4QXmBno7SJY1vJFfnXceRKK6Pb5uLGeRnn2bPfCQ2ALgdbRF1AaudkMVQtsPQstR5xf9NF1k",
  "key36": "5EHYPkmnMhQfhjGxnJ8wS9M8HMccD4sWScd1ZUP59r6PD27FLp6W1Whpuc5iiyaxBu3WrCjCM8r4T45HFSTNvBUs",
  "key37": "4ic7UuX6xeqMmXE4XTXYkNaXdaHV9Qtg24L4KL6yzav7ev5Kmckf4gfkenrWLaDTc7ogEtJmReYEcsDaRZsRcatm",
  "key38": "4oP3buC16MisZ2p88eSfMpaaRDetBntPiRY2Cqyj291QeBCHcovytYzwgujTiAowF51t1sE2EW131HWPnRXrR55i",
  "key39": "39JPjLwfEGsww71B4qJ1YAFwJAw4k8aWV2mVWsjSf8DN1nYieHtp82ysSQdukshTrVCQ6MqeUP6nsazKehK9JmvF",
  "key40": "5qKTVsWhwT8mdpfQGfTmtfPQ7zXRJKTrjdCe1hQmETShgVK6NtT5CSnagnyeoJ4ZGeYF3BSSUSbeEohvtBueSp1N",
  "key41": "2icA3GabX715ctXWBUYgRxxT31ymUHVCFaTkraM6oWPqzge8uJXgFLk9CGtZEN4Mquv4huMGcYoBYsLGW8tFvpp1",
  "key42": "5dMqbS3UVsWvhQ8wMJHUoG7P1HfKXjhrFCzHN716BFDyNvsNGfEBgXXt5gzXbMvM37PP9fCgeN4af4VYZAMNuksU",
  "key43": "4KurjUeQ6pMe4dU5NHTJ5AHz5auJZmWYM65cxNUQfKCJugL9n1WNCB4bWcUPUzM9rt61Sj4cgmr2uYwPq5LYpxzL",
  "key44": "4LUjDc2wae8zpUq1dsCk6SqEA3MR4gqEU2d3hFqbZ1UZP3LXd5gsxpLfsWvnNdJsAnW4kqP9BBNyddEVmfKxFq88"
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
