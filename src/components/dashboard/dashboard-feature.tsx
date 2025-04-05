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
    "2QHFZF1aGZ7K9YgX35g58CJJVvLyPFrmZvrWg2zuDhEikq3xchuSdmDHvAb7v1EEn7qjuCTiS86JzhEhzzSXosrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRt6yiAXrbK5jyQoF1WZRo8xQ3rXPi7u2Y7pd51cYFMPVr8WSx6CxgdBeHpJyxihKUDQ5PCSmr9cK4cS9F76W2c",
  "key1": "jgi6UdeCnrEQTRpCu41vCFotznm9sVi3jv7K9Kx5vvSHaiFC9ZezS37ATitzNHZ52YLGgght75NYE324qV9DHw2",
  "key2": "hy8yYX7GjyxUTmL9bgfUXKH21FmpvuwmbgtuQtzCQt327NE54QPwp6zDUQfkUdFvJYUVw5yoE3dYZ5SVNBWEU8C",
  "key3": "4BnpWZnutsch56yZZBHyzYY4raYpM2ikFeGwuf15HN1isiKEsESr8zMzh5rc1FbX4FYc87AqW7QvhXY4inZXwvfz",
  "key4": "2Y6meMoXeDqdKNJxocbLm2RPXSRbJobDUiB3PfqjRYRFU6FajsCYrEYVzrHLQiasnVEDT5jYfYZGfRpSfCxA3qTM",
  "key5": "ygZWvsNpE9jWEhN6HapXk2NkWb4rVPzSQZcm52mMu7YVTfrbLXfrDyYPKv8LruiP5hAX8WwweKZMZ8kZSJUx8qx",
  "key6": "8wS1NqMUNw64YByWBG6LcZfexwhUG5jwevrGG11dp1sH2sysXsuKzKU1D1DMVHq5d2spDACFpTMpRxiqPGbT4Mf",
  "key7": "2JhRzBJnV7oTHGSeWp5V7aRCfkfsXFMytBCCLoTAQJBrp4CauZrBSzKy8Li1tBB5FvZoc6cdV7WdXLBpqwiaL3TW",
  "key8": "26PXP8hbvGTkCZYAtfTLYPBok9kojMzpmu6RyvJovHfX9EJFAVubqBgVh7NcYZ1npJiy4CwCMpWvpbwfLedPcbCa",
  "key9": "6RrXQBTqffUAykqmrTwx9pnULb5Byh4ghwLTdsmTiq8HU6zzAKAz939z2e8rmEHC38gerBRAEom4R4x2eGwXEji",
  "key10": "3sJMEUrNBTfj7RRzAbz1zorXgbp7JoaoySAF5puKS3P5LQL1355zrGtTGuPz7P3HdDdwYtNjRPPdH9yYAWhcXwex",
  "key11": "4Ud13JbMR7BM6T9Q2NTyZwMJA3umwwydpocd6QK4jv7h7k3J1UtnxnaCC28iSsNzUMfimBDoG6rt69taCPNceZ1Y",
  "key12": "36FtkT2VT6uuSnrWpVR46L96r4uyRruUCaJcAtp9DnVAUPbn4Xg7N4YXc2m6eXj8XDAekME8snwjnPpo6UhAq6Ma",
  "key13": "645TvM3daEAM91JJ9GQHZ5sCGC4aPWbgZpngrqL4qvB9RXwdiA3DgrkNTTm5c1ETS4t11PPxd2cGywtN18oRfZ8S",
  "key14": "25GykJAZEu7MZBSCP9YkvPY3hwFN7FnyYGqJxmbz7Tj1Lwg85gg3Yd2HDp9vMo6Bu2r4bTZMpxFeSADJxvsAuba9",
  "key15": "2zVTNny6m81YEjo6K1n3hSs2xWVcMouPvmQvwgcybQCcSuvZtjsgtdhq9t5wcBhS7sBxh6VPw3WFKQPu7zcqyzkE",
  "key16": "GXad8wnYEh3V2eB5dr1F8uYPzRtCBRAM9Mp39AFkiBLt2aZKZsQ6j8wWQ7ByxaWS54yy36im1DE7pNU1558ujUB",
  "key17": "4nVZWp3rFBJrQ9wTBKwnwcCgQ8FtciBVfK8jC5E1ZFGrK98u97rNjLs6SVacG6avmu9QVjdYabWNUbdUSrEKy8cf",
  "key18": "4wcdtYstem3aegUCPVWoqcGgVHRrJBHdEtxygfwvJj83USWcQVunmbdYZ6isZuD3fDfmJcZ2oLJNNUsKiBiHaqPe",
  "key19": "3yu1v3troZR9hLbNoPM9aFxeBwHPNWVTruXQdDWj4T13M3NQp8RYmCHCkydYNLiQctTw5jyrMsTKC27nhd9nRxq8",
  "key20": "KBEXG3U3L2MwaanHeYK22Q4BCZM44YvyURBP3mBdyHa56jKRVqpJuDgBB1KYGenHc7DARsGR9AyTwcgpNkXbZp1",
  "key21": "5b1xTsDBJZX1TsJUG9K46477XJfGn46j7kRc2eWhGAoJAgcjDnURULkbwV1unADkh6yj4zWH6Dv1hRbfJY5tz3Le",
  "key22": "5fmZiWKSPHZrDtDHb2qjv25QzvB25C5v3GovmGM6yopCx5N32yBuR5MYqtPS4x6U7PXa4cRGiLi3T1e9vqzh4ejg",
  "key23": "4adzm7p9LLMPr6yxHCWTb8xFANNhVaWYSJRahoRZnknALisXVQnVazVVQMA6ypUdFkK2KP8sgcVvszzXtxJRCgPD",
  "key24": "2M1A1Jq738L9hPFP4rJbyZNBGjMWpUXFZX7WN4cTrtBLNd2wSyyd4VrxYwqcwZ4L3irnoP3DBbg72Dd5MS9HKVtt",
  "key25": "3B53afrV7HWoWBnH16uVAEXhjCfG1kVVLAMNaBtU2ZYWJX2ZUC6MLD8XNahJgxqB4UCQUVPJaHyrUHyGhk5VFyYe",
  "key26": "htGRj5pLrDXwZ1CnnDzbBZKmjLgr2dzC7grTT965wenp4ktzJfsav4DqeC7J39aVQSeMLKAn1XrqieeQYZ1aftB",
  "key27": "4vBzoP4KNpW4bJbhaQNGoTBfn3A4cB9aKgxzAiRqnACvzMBjCgCDub2ky1wCRsCYXVJENY4htj7L91ekPapbwgWp",
  "key28": "zhqMPsPer4fxBJd6cC3SpJ7huhQKxDpoFmtAYWDFysPtax2cDy7Nid9kGTZvS4By8NcNDeNT6dg6gcBrGu3hab6",
  "key29": "4ELsFreScSpq7VY7szTv4rs1HxmSHWRt6nmhaGGdRE4D5mkytpKCqRid2ixFqxxki6Vgp7ap32zibXTmVfgjvL2G",
  "key30": "FUijQkBXiwiE3YGtAj8KuRgcu1euMmfVMeNr2aesUodPchJkYDeW1LBEWQ1vRSruGWRRcMYrpSFZLHwZ91vjMN4",
  "key31": "27fMkTJqBJc5v3LXfWmSmV911getfL11PRurYnPW75A6q7HSuGH7Rz9h5zpGe48yonwZ1hcag5i2sohGBBaj2HTz",
  "key32": "PXFsuK5pLv8o5vK6EtaMAJ1qs5dDwKDj2Dc8q2CtPBHgCzZvS7cHNR7g2hCkz7CtjEfB1gLvt6ZCEcxZsrc832x",
  "key33": "MWM2b4422UZRts9xh1vqp2WDEF5hwMsVrnwtcbsZySk63VmRgn7PhShpkxqgUMAYMbiqPjPD8moJb8fsBxEx6Hi",
  "key34": "5VvobWrGfwWxwhQCNDWGne6eLfDsRitcD25U1hB9TfJTyYdALDyGSiH629qYqD6Am5NffQhMgCtQgDJE7fRPMVsu",
  "key35": "TTXhhJsqsGyFuivHUy4FQBAAvxVs4vc5nTyRigWeTdgt6fxboeeDwzvtyhwvhdtkpXtVt3Wjm2dWBMNbZqvP5Jv",
  "key36": "4HGzeeVK2SsM8NpEhcsxbnEqcDwdYXaJYuhsCTc2Mpr7xg2L5f73ecTSK6EEiGvsFXqtYZKBQwKye3DJXRUdJ7Gc",
  "key37": "4Rns5cqvS4W7L6STWDQYzNoqYgWV8mRdoXn9d1KgAzpdxGtZQudX9LsCZawbJhMLXpxRhfxXc7jYKha46g7GPmqT",
  "key38": "378Cbrob1yAT2nJvcgpCcaFFHutiXGM71rUMfuWJzRVVKoHZfYmrGfWqvd3V9PRKkVria7RN4CKHzBrE7vgFFtdJ",
  "key39": "28oawzELfA61SCKV3KnS48tUVyyauv6DDL8jN2wqqtAoX5sseixjMUXD23xKuNrrRYVi4eYTfFPaPAiw5fANxcb2",
  "key40": "5Z2GYikRSYSSYdoYJsvdxTwtaCDANRXGK4KBiK29TLYcRUiM9EFJyLry8bNuXqiz75XGBgsAd5Wa2hSnHKcSHZgX",
  "key41": "NqeYpfvz6Z5N1kduLJTs85mH5EtUbQ8eg2TkfKQWbMiUovUwS59Q1bAR5aMH4cacyHdAzkhsyi5UcH2z6tyvo11",
  "key42": "rzj1gibsHaDnEtSh7Qdj6DrRWa3YKpEJTmjA6o7oRSfmt5p1tSZeeKUKRmXz9i6fAk8WJqstoCn39U8r572CByK",
  "key43": "4B3XHkwWtCQVT5aCMLC78KZmemjLVPDDyFUgjgxVrsMYcaxYxWcLXKVJjMt2qDF6zhbEUxZk22fmuMLoaHXAajUP",
  "key44": "48QMQaMhQV5dzhmEL8cotQvnzkQYuuCNzBxXvZipYWVPxZx1ppQLHE4rQTNC6adiP59yupNNHSMM6nEMo18J8CDd",
  "key45": "5ui4vGJETarw4zEpak4LYWTj2Zvcc5TW3wKVDTGEDZYmLURbTNn8UXWumjQX7fwf5AFnP9jK9nJCuJw4psrDXMqo",
  "key46": "8ydG6HMPK69J6LsGEez2pfvpriqt2GMLTB412DNg5jMn2fwR4sh3NQJxSB53ygr5v45q8yhiexgeeT5WgtwwW3v",
  "key47": "5K8rgbDuz48KJs7NNHHzndPGcQNBFmSpwNGbevRcHxLYiBLviKycf5FBu82J6DtXxRwVtoTTkWvrj2WaKAhwWF4w"
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
