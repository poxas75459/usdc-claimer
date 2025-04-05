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
    "wnF8Z82ND2NSojRPouHeZ8L6cSP28FrJQd3ea4CB1ZZJhPtwWFB2bQvUAbd6be8FS7vpUfj5wmnekwD3ibAdLfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtHzZC77s6DEHJsCe9jXvSjMmt1cHkJvuh8geUXv3giEQdPQGtV9burNso6fEfxjvrouu6GE242GHwmq7z7ych9",
  "key1": "4PPnJqviszHDjBd9DmJ9RN8A9XmyMrwEH9BpQZ5ApvpzUZNb8FQTYbWK8byurkjY4TjMkdWxxGBmfURUorZojyzR",
  "key2": "52YpbmLMKvN9MYfFLKQSt5F5NZCktEA3bdRvwFTvyza3iUYWsE85P5vr1nTFnjrfL4TubNnbAKCmtSpXWDiwjkMz",
  "key3": "5R3yWiFChsA72p5VQNYGf4M3eo1gUnD8HVfJBNfTWUE2bkTx4mhLtARDoyCkBBmeuMWU1bTDnV1fz7ZDrX1rsNdZ",
  "key4": "3BABXXM69QPGQqpuGreKyTUE2A8bXASmDSZS8gBMU24ZsZgXgmSPyCU6HvrTQvVdSxf7ktKU1UPBiFTS6ugDp3uh",
  "key5": "2HM6j46dCWpfeoH221TP1XV3iXVd7wF52AJJCqepB4BZV5C9B2R2CmP3fdusXj81oi19ftC4EEUUJDctChiQASrC",
  "key6": "3biQgZzjRA3XRLwpmp1tYDF34fs5QNbEHoXbNgLcHd4vAY7W9woTgrBJo87C7HeRd1PNbY8K56cFS2Vkse34rq5v",
  "key7": "3cFVbL12e8g41Gx6XKKnWqko834gcvRCMEZZ8SBXXHo7EEDzHULP5osYfJ27j7yTfTLuw9Ze87FLcZoteYuC4nUu",
  "key8": "2RgFuhJyV3mwPfQjBuc7oyiSGHPgMe8H6CWtdyP8BAVrqKirQxJDPWa8nTpc1oqKRTWUeQfxo9owNQsg4Nv6L32c",
  "key9": "jMeJs44VdzLchbHwKg9jxgBinEC9Q24nnqEAiiEc3QyEyskRDdyEJfucpp7tVJa4K9waEJndijNTradqMpW8mdL",
  "key10": "5Rstfn7SmPJBnd1JD6XpbdtiZXibdSt69dMmmb2M7G42Sdw4riwAKmss1SUsZ486A6zawuAr31sNPA1kRB9GgwAV",
  "key11": "5vJ66AgAzBdxEH8vXrJmVLEsy5714gjuR997JK2LJ7jmNQc7sp8Hvatkj371mtGHDgEQsuWrUWocFGTabP69SsvL",
  "key12": "3s2AUonUZcSeD1jgCBA7XXgWYuZsMLhw41EaLcAyGRrq5q2e5vv1t8XYFHvCB3CfxCAhP9xaj9cZZQBc6tjLz8jD",
  "key13": "3zAoZthyCB7Sukuj7gFVpnfHqo5JmYZJKaXZBkYr8HpHzn4nq82toPACvK6TnYGY8BY52tLj37vRPLcmjhQurZB5",
  "key14": "3DEUHrsAdZqDD48QWV6yxnqjdFzQUwp6yrLY8r6nY5uVZUvJDzzn9DXpAVcZrKoG4nKAh6RH9Ktp4svkDNExgcPr",
  "key15": "2QGpgsdpkoEST1fVfHt9t8BWTkoCupMLT7FfxqqGZrjJhE3VaVw33xDFwdqpfoCDKzCa7ymUaFoJgBifUnGPcurj",
  "key16": "tVwuT1KiohPsrQiiLk1t1m67UbbrUQvUL7d6AB7iLJYNv6Mwxx4C5nZozz2umRQb6Rc4bA5VaGToigEG3etQd9c",
  "key17": "c8xvyVSDmZMgfi3p9PwAU5i95uW7rFBNfSfhFawTpg3H6ojH8ptqr7XZ3RxdBNJHt2jdzD1z5YdbCa1Tq6kckqa",
  "key18": "iHy2jA2UCLw7xjq33RTr5TvHkfwZyspuVZK3tQZscFkNnKHdZytKBohCVRVrhpYgJH1SddN5yTJzCaPEa7nsMoT",
  "key19": "9FM3eA6ftH2UUfCz6H3wHyX8bfj3vLVLWxcBVReydFjdFQ4dr5QhcPED3KRHuUSCER6N2JiS4aNBhojardMYMx7",
  "key20": "4te1ZFptuLFT6hnnA7uL7SoFxobCN2HZFb6yVRyrkCb1bXozi6ytwGAsxLSt1oTpErrU1VMfxuFgMH89echmXii4",
  "key21": "5N7CE1iMgvRKnjscwyfbWYrMKp2pnxpHLkTo3ApMSfLW9y3QotGtDiFBKCbk9uXewSVpx6724pUD2YqhDpiAdKfJ",
  "key22": "4sgVmeS5vEeJg3RXBCc6tcT7KFjCHw2ENY35DtLPdLhNBMJRTmFGSozvKyVHxGYvT4UvDA7AYFuezjiWFAvPFDhs",
  "key23": "2DE6oH7inhJVdCLwyc4Y2bcDhv7P6KQ4z9Gi86G6JBZJ8iSmAgZezhVs78T1g11ZdEkHxftMaiczGwBbSkRh6w7W",
  "key24": "441aSQRggEhsJKqN2wAFzzxfqyUCYPFLse5Yj94XyRERyb6UzAFkQAKNbp5FSHU7nr14adCusqpnheRP3JTiPNsm",
  "key25": "3sXXo3YBwFDSE4T2RBMQhDWXE3hQi9ED1mVBvx9bPupkNeEcs6cYX2QurZfit34k95P9XqmPTLst5PChdZUv6fEy",
  "key26": "P5AUBYKiPGRMR7QPPStKCtNKSEEahQxFNfuEyaTUZoVJCScr5uaP4iRSAG63UAgH1oeM1HqfSeCmKANbGPr7Mgy",
  "key27": "3tLmpHLePpGWyaANwaHzqtWfpXegATHB8QRAhWhHuU5WNi88dgvfafYdafdCEEN4JBYdTmAFLE4Jkb1spBLy9fuf",
  "key28": "kYLkBWUT1g1BnG8LMYwvJusqY6p32FYwKWxamsRGi87CS4qWBFfgAG1wrmqmfR9vJnjJ3eVDXLoVxfcF5XbUnSm",
  "key29": "2VMZjDYr68NwAzjyXK28n45WfdGoJaTLk8UJSh1RjWG6Bmyf6dg9w5jCakHHr3p8ZE5CutqahPfbQMkFC8W1oYvh",
  "key30": "4hujBnc9uiKbJvpDXLX6RV3r511viomY94u1BzTKKvVj3pJPfD726XZCS3TafKpreRZ2r2Uob4Szuuz3gWrKGUUG",
  "key31": "2vLDLj41fgtgYAwqdX33zP64CLDSnMbc8cpuzSrcmW9JVr5jkGmJ3ohcs2Zi9jGGc19jSJLPjpLF7vvCDTTNqJqr",
  "key32": "2yNuDVenB1cMyni14jcLohaNDQmKRU2vWYo5NDdCYyQfTdtNh9ob9sC7AhR2H6VMtPtEyvKaM3jo9HbnUX32wtqw",
  "key33": "5rVgTh2sXxgYSX68wqSZ3PXXZRq4h3Ckw6BrTELJpaaZZvrwC7M8Y7GjwUbPo7dG27JGiUAxPhtsnYB9qTAz8pAH",
  "key34": "5moyMiQ51LpM7VQPGSvLgy2SVraB2mYCXHkEnZxtfdi7apd5c1KByodyfanWtfxnPStndW5hA884FzwEmkm3SCWS",
  "key35": "2TvcduvsRyeHr7fs5R55FdYNEJ3RPCRVbTSCPUEXwfJ9hwBqoCeV3HxAyZo9ja7nzt7VB7MK3bzWG21jYTpa9AAP",
  "key36": "2NaXCZmRoBaoygGpyoCovxVr9TsdiG6PAU1cp8nJwWKNfwcsvq5gWtVzyMc75MubCJA8pTAKh31zUiMM34NrHDDa",
  "key37": "55czs12vAEuANzh7KmyEciAVQJFSLoG8XjWkWrpmxEPLPDUSWZwwmupqumuAJQdBqtLXYeipmPhGsXs7YALqptPa",
  "key38": "4VATSSNS4HUa4Kp453oji4fQKzc9BCYsrwjaC1df63ct5dxNjwuvjY9uvvuQGidJFQzHpszxoWFS1jChAsvYArh1",
  "key39": "52zLFyaz2Aag6fa4nBPjqdoQ9VrMq2vazjeFJ1zE3Nttt41tQL32MKvsxjWe9XJU51uDgDG3HsY9vBHJPwkSSF5T",
  "key40": "24doLTqz6LhJw9QDb5bncrBLQP3VFBdRoA6d46wf411q7H9KKSeeqwyKZErS8SZSqhwVwdqZpWmf5xhpjDXoyKYL",
  "key41": "4xQ5beTNEzkXzkcYNZXgjzktEgZdE5JGN4AyPRHDBnwVuoWLiS8sjiKJj748iVAy5UtMsxk41ePNPrVe28G1mf9w",
  "key42": "2wGtezBt9NgF2tpic6ziDQo1CYy9Rtbvx17ekkckvNVoWT1Toz5mFazqzc7zn1EQMkm9HgvgKeDvv7CL6DLRfvNZ"
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
