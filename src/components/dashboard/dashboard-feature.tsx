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
    "4boJMVpDGWyfEvhD1yN1nuXvmGTMJe17Dm9NMWrkMQLJ4EgPVj79oUVb5vpXPEkJtN5H1CdJLzM13rVtgHinouAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yC4CBHpGUKVzpiUZcfUP4jCmM5jnDUT45jAC6MQBCQcuFVjf5E4nHSpVenpo7dyYWz8xJxusEXAX77uiXHscPA1",
  "key1": "5JCD6VQm8V7sjBjsVR7BVRLcwdX7sJzSpC83oYjyiFG5s6zU3QZ4xHSKFPo4f6s4aPULHbahtMQCqZr15PB5MjmT",
  "key2": "3RtXTtPyZzgzeH163Krn8uUv3SiHpyHB2cwXDE85q9Wz3imcnkfJiR4G4Qt2MFC55Zb1x5dYaVqYr55RKhQyxiqz",
  "key3": "5dUHETSNsAhmMKmDgnztYWB6oaYBE9jz8winkQ23WcVQU4aWKYVPNPyoZDMDBLCs36iE16oqLchB4FR4EQPBCgyJ",
  "key4": "4EGkbsaBeDeDQA4V4SBRjM7VVwMXhUSqNJBVCdscRZM4SKcDtRaQk71wjGW2HyKT9cTK7aCEUXjhj8uG8Pw4CeCe",
  "key5": "4DzhZaKmqCB2X4GhzVA94K7pgcLy1F8ee2xJWRn7hihqUk3hZvn5ThVMdkeBQauRFbJ8E7uJVgdGWKXZR9TvHs6P",
  "key6": "3c9Pjdwr6xrme3HzSB8KnpF7n9Jj6L8kBe1HatbDzVa5kBtXAAi5bmPjCKoyziXHnMCN7EPHDXp851KucmpCPUfh",
  "key7": "5seXfbLxpYNiwmEk7hG5BmomeoEAPan1GAXG8CTXPhEG4MAdfG2w5xEYVJBXwksjzUhZp3vrmZS2HcorPquAMyad",
  "key8": "aQbahyoKpxo6X9gMDNFgwjPFpq4gpZn32TZ6WKjhwAhQTNnACKEedbJqQAfjKtLKZhWT5TZhGRvJsRRdVsQ9LN4",
  "key9": "2fqkoe82ho1kbSTdMZsrFjVa7A8TxegNnh9vcZ1N1TtAoSXifmMCtrUfNJGceb8wADDpvbbgbXy8SCapG9oP4uNy",
  "key10": "5mBDPVft5PtNQd39CDr6Pzmd884AJvpUxffzBF38pGeWiRDo9GWQSbuFiX72uFTFeYgCuWFue2pCDUZZTvvohExJ",
  "key11": "Da3iXUfEyRnQLXi6tDpyU3u5SYUMfvfXSjPjpGggZvYCi6gPengyMS96GDrjivFXxoj7eT9r9bNe7FKkHrN8P47",
  "key12": "2S2n1Grdhbs9AaZzSPijhASsQ6fphawWzvYPG1U8eNxPgyVonBhqERQQ4XH9n13aH716NJ2JFpFzYYGycUwJLjYu",
  "key13": "4s7YhefzKbJhq8PeLL8whpG5Str5joN92ZAFKm9X4vWy7aQgHAD5NRTTgjTkZQkSzJbXZUrnZ6Ht5HmsCa2dtEGa",
  "key14": "jgo3hRvgoMkvB2RVGxiAsMtkBCmGDJPMWuoZe3Az1WqCJNaPchqC2JtfMJERq1mdcCxudPVWyPitjn4wzMgN44X",
  "key15": "4MkdBETauCbJpgS1Jo54ipwPNLLPHvxQ5KBQGoodBS8QsdaYXsjX4NP2tRhU5HoPEGhe1JtxQYdEsAy4S17jwar3",
  "key16": "2TfiuQL4HEWKgYiMMeLjiz7qh3dj3SvU8FyFQsyDpM1daX9J4Aitp9B9Cz8AUqcNQMCasGTtqyHxCUvnRVVNsfQ",
  "key17": "9ec3PYpWFffHTYpanisMj6Awvcnwu4mRPCfHnHauiXpzrERqGuggN7bmUKDngYEcHrFvbdXHdm8CHk2fYn97XTV",
  "key18": "52rkEbZQ9SGdJ2RYvDRgw9EUaj7YqPQBtReC7RfZWZEzaD6XQMgeQWFNwwpRhzkhptFAqTThYF9RLCTWxPXZEddn",
  "key19": "23GH5jgTSsXaH9YkwjR2dYaYequB5iaeEfFzMnzLH9Bj7a8EVzgcp5wtDYD7kKp2STUZP6YNa8GYnHbJoaVVbkg6",
  "key20": "5osYADn5A2Cpk8CFvKWuF2fTSkRmCcr3msz5i9BDpwsC97Yz3JtTgLstcbjQ1SQBwysjQpFYLFXHPaEF3KEZmJUr",
  "key21": "2mDCGLPgn9nbsceHgbuxaCwyrmEcVF2cPAAtNDCRjDTvw1tzcVJuaw8YBqz4GhkyjJ1fR52xSt7TnBHPFXJNaU6k",
  "key22": "eoTjeTWHXq2gSRQ9jyCX1p1detH55yJUYEuyEtqcn4FtWKoMUHA2NmiRXai36YATBmo8QgwdWq6Q5PehwXh2HGr",
  "key23": "5VxgP8wzotScxY2R6SjbioCjt5oLs3fAjBpaozVB3f6mZepTjo5fgpPeRucqfyyaP7G7Cf6LhA1drpcsGNes3cRt",
  "key24": "3jWDHCf2HB9hAGLuPfAm7JN6voSzWedJD7rUn4KqTc1Lp5FiyTEPDpRmUj9We3p5dwfXcQYYmBfwkh5iuV9DV66U",
  "key25": "2AdGc9VCn5PciB3Cnat36aecTWvSq6YiZcMy26ESxEUCoXBWMgVcyZ4hF1Gs9qSooGvePcLMd6NL4C4oLcJtSCYd",
  "key26": "2Js2WsmHao5TCsWkFWd8DkJfDVGQRMrVabWhJUeG3Z5HE3Vp5L2TJLgNcoSAE3z8TJEDBLCwDoYD2zLxpx23UmMF",
  "key27": "5WQFQQ2xRoCFnZEJSUqqP7dFiPzsA9fx8mxAARdY5ZBJ4skDHpnT3nwskgwheY1RRrRXcJ5eA5UK9F1xS45KxJCj",
  "key28": "3fXNQjSTYAKkmGjuhR8zMDaK2j6p5q3srYxqyEKu8toGxfksMgU5ub8aJKF3EdbCL1KXPdfd7kZn9t8q5L9YbebM",
  "key29": "3t9rcEpzrvWBV2WXcLXbisBsfTS1SE8txSJgM382L2BotkGbpYocuaqywgkFnTGCzAds2it2pKvKnYqGFLgNHXWg",
  "key30": "2M4i2Q3ueAPQQEhLgbRzfik7YK6aVqRikYtFiKenmb7ADetzpUuH1hHstzkfZ9FHS6pCcYtXkJTxCZsBkDM9TPqc",
  "key31": "5qUn4ZdfXGMoLaG9xzgsgCscfBk5jhTekiCWE1sR4fBUUhLyhZnCwrzLyuDeXgcCFaUfNt31eAyPXb5bcyhGBaaY",
  "key32": "2Ya1ewFjauHiWKhCZQZanUJqj8Q5ynRgUpwYHXJkZS1AyDzpGLFxNqm6sCUrwwwa7XAsWRUJGLE46KSdev4XmqsW",
  "key33": "4rVBEvnbpePtDLw3WZYsFoPQ195JSFQCJXqzJh1t4auvqhG6uNSE6ivMaqiG5gV9UEUZCCKcr4vuEDJCuoXQbVVs",
  "key34": "v7YScZXb5je9x18KrspTPNmHPRa1QNLn49zcbRg6CkEgS6oNwpedgkde29n6PR5GjcrHLrMkbDd4ijRmu459tGf",
  "key35": "4NhcJY1K1kL9hT1Dzf6r3gmv3WzGEuFd9MYLUtJUmnJ6bTRcmRDBjc6zan66gpqCJ8hiNJy8BWNwKYmmUf2aADtR",
  "key36": "3P1tNgSUkJ78HwJKQuYNybJQLuUgjB9eVvpgAxGQFc5FXTPfBmvbrT3TEftnxr3bniUsfudihS1QNgFngbDaBHWp",
  "key37": "1yhKLiW1FmWaXzMN2fzsQHDsuEkAwQKZq9HUeJNwMYPUacyj4W3efit26xjpu8sqHMcaf6EC4aR2TLMBogFTixT",
  "key38": "g4F27UJe4jAdeZAJFtPyeyviomSFANvyYKsy64uBpaYmv8b64yE87RiPoRXFcorb7oDFGG56g2wJG72EsWktyMz"
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
