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
    "VMqqJVJEu1aBjrbWtG6wRqiJwUoStbyfad3wNEdzXDz4J34h6EnbZhShjCBRysXoVrigjbPFTHcWctEM85XMvev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMeSqtNGypwRnBJevdSzxSe45wCpVpxqCvmyFwXAH3zRMUUVL6XRp8uezhHLRtton286CCGoW8jYXbGwWcv7fqW",
  "key1": "3wVDcsFpUFxtfkM8upHSbvoqkcuY78QB8gXx9adVg6xgifv4uGeTA6SX52hBUXo2aLsH4sr9nAGXgL9Fnt9LJd4D",
  "key2": "2jWadBTB8XYCfyziM9e688Td5yBKfD6fEWgkeuJ3Vo7GC2Eqo5rENATEhL5Xrmb1RZhEXBMgW9TtvJqqdhADFjnC",
  "key3": "3DCwmxUxUcNtLVAf1tBU1P9HxqkqKZWLStvALWQLG5Ky6PESChZGEKiovJgz2m2zGSDSEjf1kmvNVoieiahbw1y9",
  "key4": "62fus2Kkc6tLKACgHC23ZVQjzsPSg6Zpdh9o4yTm128BgUgLfKB5BE5FaYN7wQT75mMJmtJ2Q9D8UgDSaTH6SKUK",
  "key5": "3N6a5p2fP8GkAB1DTcUqytKDEWiPTkHQegwBKd9XUjCm9Hpq39gzAnqH6cYzshK2rZGtWqDMuFYwcaPFuN6d4uYA",
  "key6": "mr9oxWYgbXpKsYurVfKUTTLmxTsguxtvxEsZtAqCPEKsqFvMyJjXxZnUc613dA4Y4JBtEoWHeoNjVrHarv83jbi",
  "key7": "3Lj8zvojhaQobqko2a9mvoxsbLF3xW7ndy9duFHBmStYnrUD3d63wzvQ6EWmq1Nmo7H7foAACMXxdM1ANPLC95Wb",
  "key8": "4ymhc6DBRCzeDSfDfYgKKRvu1hQRFkAw4iEniDPGHhE8GCRMyauBnLiYfikiED449vvg2Q2WhagDt8eoWusHEGAy",
  "key9": "5curRFeqDNuvKZjx4ybZbHa7MLmPok6K55K4N3HECfVMVaEZoEThW86bLbuDsfX2ob3LJJUmcQgwZmvzJo7JAmSi",
  "key10": "5qzKVyDZMjoRWrid63qzAocMf8rvAsZjaPJGvM33KPWktY17DS76hJcU1pgWi4NkdW7SV2SYKCPduMYa8crZzPsM",
  "key11": "2DP5x85qWrcEg67NwtPYVZkKeZGKwfoBVfzUKJoJ3SqfiQq5h71wxABGqCRzCJ4XCpmQnfWpCtTcTUnMd4vxfoSz",
  "key12": "5nymiBxM7BYYvT7KhW28HbzY3pneNjHtBLey8dfuY1zfazG9LmFiH79rh6YAutF1rTYfTdq6gkXQXFEVtWxqwGhx",
  "key13": "SPMBfzrwwbnD8JS1BwGv1TyeL9H8GPfWbduPUHH99JrKsVeqCcd3CfkeSew8a5wqmq1vjdgAQA5aiTmTypKEJ73",
  "key14": "1GJRntF2Mz3NuL3YFATXoKwrMxEc6kJc2GhSjNXU2PmTTr6s1Wpu9JQRJurrtXUNaGGSzqdtvHz97VZfHcEpTo5",
  "key15": "5xZJnvahu3nhFpebdQX1QnUZMLcS4RygaUsaFhYWHaE7smknr6UmeRa8DKzTjtpYN34Dkay3cWRQcvWLewj5wz92",
  "key16": "5drPUsPEUqWHjFL2WDL4qMrfhzcUhQ8NP4qXuisfpCbUS2iMMGP1Whkb5pqTh7RpkXCwhYNxBUbjtQLYH8WEUXA8",
  "key17": "3zfos539kkJyNag2NBm8rcgRa59wT1oAEKUvFys497TMwWiofg7HbkiXLWaNm7mCnCzzcJX2nuqgtGoHjsBMMKfs",
  "key18": "4pmYfMvSFpL4rjeseS5DsbXdbuZs7HAn1s7mEK1qwswMhrvAA8uJPYs2vbfXJbTnPuMM7irCDx6EQdpckoaKjnSL",
  "key19": "3sVhokJyNZo3Z8ajcrSRTkM1RwMphao6XVaLuMGAAR6q2L4q1ihNz7Uac3nvg6dqK56jw2K2g4VYFSM4YZhYudG3",
  "key20": "5bY9M9JxHjMghiXuybh9nMCPx8vDmGwqEuusKCTFaAA6FinUqedXZZMGQByJYwyqmr8FxGidnRrZyz6J2qVBLUit",
  "key21": "WpT5oeXYZz3khBSynpNxYpoZWEeF9hoUvqcPyEzFfcsra4kMa2fP1XuXhNVsB5MXuFk34CoGp6kGw38QMJavnxG",
  "key22": "4Znknby8krhqBTBzNok3q5MzT6PrLM6PNSebDWk53CVCiYsrttZdrGPEqNM76hzMv3cZGuG6QcYQ3XXFJVKcM88k",
  "key23": "3gwUNpraSoNtk3j1vASrwtC7s45YxGVtP1143vVXsUMc7jLyE6SV3roeE8dzCrtHrAAfx99S7p6K8wYz4bqiSHmU",
  "key24": "XYg6aB1exdrH2vFK4dGtXKkVHxk5hmty8sVQtBdC9XygBFxs8UHjGGPN697yk7D9mormiD4ZDimh2Cfs164SZwi",
  "key25": "2XzzU5AhrGBJPUmT4FAxp7khoRU1VjxjJHP382gYrwBB5wx7xHdY3uboGWhNdAAKptvt7kEfmTrgjAY3T48nCZGp",
  "key26": "2cP7aPEvETqcwm4cHv5UdkCYQUJBFrqYboN9NF3ainqFrDGYGNmQDZmki8zQEKgdWifhVWdqWZyiQZMU3NSyCWSP",
  "key27": "5ShJJH2JDN2owTmvbbS3we6kdtoRGVAXzGLQ11jWiEBDaK9i8GNgbK3bYNVfe4mJx6swzx4cocMDFouB2opQjCt1",
  "key28": "34xbg4LymdmyU7FQi1q8974Tc7Xa2izJMp5sMSYtNf8CuUja4Esdaqn6njLoXnXxcgFBSZMRJ6mNoNRDEroRiHw2",
  "key29": "2JPvZc7JfyQvwT6RHb9wsBbjppkTUPAoTyRbfZNQpir54eB9c48VCdyZZfSX8qrhnwhtx5caj5GuHeGnF8wNs6Ec",
  "key30": "5DrnKkYEDY5gEv3GChsif5FHiJP2djeGbqZ2jgXWKKsAANor6mGpwZnKJAsDE3j5bq6mwaUZPvY8zSELwnTGSLDt",
  "key31": "3DtXWFmhMBrwUtdFw7neUKLmYNWhAbS4y9oBhoSxxQ8Y9LxoLkLozC733Et3SXipfaHQQQ3zu5Ui8efWGprjZxXS",
  "key32": "2aiEBSj83ekz41AVGn1oXgTpVLd2giBxZuSPRV4yT68r3aVgYwJoMN83jnrHGYkDaiFmztrdMUqe6HwAgBRh3ADp",
  "key33": "4tyw7i8xaDUzm7XHYFUpppceATdgMfTwwcWv5FTksExysAE62m9YtLNwNDtr1K398nzbFvPnAmTLA43BmN5D15xh",
  "key34": "4V9szpt2ZjU9z1VfqX58WfD8qSynAh3RwBvXKgmdn2eLu3Y3aHTT5taWHFLJniuXVygJdS5QysJ1bgXjbmWgwjsJ",
  "key35": "5e7Cs5vYdKKnHjcBGSpjZzQJVgp3uqZckjdt9VnyNH2WBzRVM7mPLeGzyBibzAVfzHjW3hCDa62pM8JKw7BdTU8s",
  "key36": "3a3zeQUMrnGrAJRaPMqsNwvMpJmM14JKiog35Letm1eKwNY3ksQguoFnawinYXdFps476w98jXnYZVHW5PGqK2EG",
  "key37": "4y7Sc77AzzmwY1rC5FqGtAPuWngPYThv7nzhDwPmkKoNmy4zdAJviAhoLdGTUmmP1vHreBshAXPzuru9yxqXZWYo",
  "key38": "3pt9xzNjYMkSwKh6jVbRDHqigkVj5RGbKiq1LQtKSTTZVSvNq87ukLFDED2DA4fevtX35mT5oEgGcdWzeUju9pUD",
  "key39": "2hkV447gNtPHX6a8ydvezRtjreFGyN3TpJsJjQEUyTB2mUUW1Tmr1N8bKrCNdSCfTp6XUdMP6Q13FtYX8BKMtouT",
  "key40": "5ZPjzL2Xhd9KfxJdFonSpgqY2cQJ8gpPQHVgQNw7SDRBoGWa7vPBQA224hhAxjojoC3tf75cB8ww4Ke1T4nktojm",
  "key41": "4qSbhmM6LWfrkHL2rt9kypXgyDw2BaFn8EgQ5zVoVvasy6FD44nmtR9LRHP9grdi5cUuVuGHvo1dg4MCkSwVYwgx",
  "key42": "3vP2eoTxABuYC1oPoQiCfFusNEFStyfrKNUihRQsYZB551dmvHDWp4KonVunpMG1PUY97mchnYFtLp227pZMrG4A",
  "key43": "3ubF1dEzjXqRWfD3situUuuwzhC6iYJWhVV4Mj34EtYDiiDqVpV8a9qE834qWY9kYj3wkViHcHq9VLChsZbUrCgc",
  "key44": "32B7rKoVPpLkuFJi1uFogwhijFcaLRbuAccvpXUAdu6frjeYFs38MdpqeqbpMKXiFq9jgMQiGRsWiaxaTdg3d7ir",
  "key45": "2phXzF6JwEDsw8mF9dUincp26n7DJQsEtRuwvJUjbDwTTy9wRaLzjoVBFW3zXJY1cMQYQFHtf5YtN8DV59UZ2Jqk",
  "key46": "tnoDH1aCaPCyYkWQp9D8k4fx3inJG3tUTEgEvnR4m2beas1E9MWBEw1Y8daXfbnZ2tXkYoeqQnMp8tXjrhozYyR"
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
