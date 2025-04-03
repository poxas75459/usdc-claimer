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
    "2WQj8iDYE5sPQmyLzFrzszUXtJ6SBGZGshtVAmsSgC1gVoNUdh7X21PYZEuzyy3z55STjskkAZUVonDDvuyvReWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eug7DCq3BKJqvDmRvKr3pC77piyyA63a6PCYNATSx15zuMp823vHmczwhBgdSgqp8gGouJ5NWrgbmN11UygBgi7",
  "key1": "3h6oapAF338AZ81f4j4c61Rxs2byraexKeBmkqq6c6norQtVh7qo1LQbeTXVFGk29mnTPukZzsjgaqBC9gH6VaUe",
  "key2": "28NrAxhN5HW1iPbgHmkyUmYvenoK5ainqBcNkLPURebav5dpbomNpw6aGpN2p5u6JpxsXFtZN91sXQKu7C1Sk8CS",
  "key3": "3f1jwHXJm2NcoTkfQ2NjnJ7JpCne3qbEaciGppH89AdvCU2oz7i86uJN6VrFoiBhFuZ7fGzQ59z72t8b42kC6GYp",
  "key4": "fqVstQiCEJeBbz464fYTwYsdeg3nBCrbtxvnoTN9a9yRrXwRGhcC5jUgagAcYe2nyAm6rD9RorbAMUvZfzUR9KA",
  "key5": "317W745RKjr2fvrfNMFtfwhXVdfrpj4VmVcobAWUadsmRFemhK6r62eKazYve9qfh9EgAZPDCAzYXF2sJgEmD3G7",
  "key6": "4MhVKF4TYY74d69cGxKxbqfA5mHeJzKfxNct24ZXP7BbDB11k56YNY1L4GpigdPRaVX2hQMX2u582Fir7yfec1v8",
  "key7": "66a6cCKfQgoUVf5QjMsG1CPfR7sEjwkQWN83NiNt5JX2QJjbXDzuF5dURskX73ForFaGEB6CrpGkA8PMwttVPzEv",
  "key8": "3P6wvwF14VywNWomMjo6EuBk7UAK3UY15sLndGPVztrmmVemmgygsrEnuYX9osqdLEqEXzimnwRWRcaSbkXtFUYb",
  "key9": "5ky9P3gr5FEzC7LK7g5LaxnqiDNNXtD4y13yLyF9cp5g1e4gewoRnmjw8DktzzA6z5kGvoRPsWF1CoaVAr8DpJv6",
  "key10": "3EBnwYQhNXPoU467KHu6mVka2Wcf9TdAjrQhpc6wRGFEYUeVz97v7Z9HTRgSJGDWR93iSzZkP9Sg7kngrMiUjrx9",
  "key11": "6MJUY2rGy3siiDMvux8QPATzdBE2vv96uWr6s6auec8SwHBbdUc1NEw5y9w9UwjhUHXuZpMtmXXBHc4N6sqXT4T",
  "key12": "4KCCJ9nz9oJWduJJiitHNojM2CmaS8JsATYMC5KxJbTTGy2mq5jEJTErgHzKnssd4G3DdtPTZJJeNjKuqqQgKEcE",
  "key13": "3CcPVVKz1v6sh33ntfBGLZyXSUSqc7Bi96PW83uCf4ubTynqYrodgC3Uv6s26eGq5C4okAXbQztLCT3RxKiJwRir",
  "key14": "4Z553Bu7vyWpuL4GQamK9x5xGPSqR1aVuyEkNYDissLWcuVxRAShg1PJFXHSs2w7LGrvbwuLP4eFJubcJ1nK3xoR",
  "key15": "YvpT3KmJgz9pUcQf24dqRGvAurQvvw7cuYguni31BXzFbmFNEcAofuDx4R5DDBtYppKVnkqjcv1iq4iwMcoixr7",
  "key16": "3Kf8zvrSjLgs8T6ipww2yF7qpxeyWco94iWwA2EjsMyTNXiLbdVZQKU9aRbDrzYUpNgYqAQmCE8Yz3nopcFx3XPV",
  "key17": "219YJSnde3aomqRnvfrrQDrkgCZ8dRkdGxsGcHqFZ1rdHoXGv4oqZaZkouoi1vnABd1RdzmvewiCPN4oDL8BXTkH",
  "key18": "3AjHWnhPVRpgPjWx5x1r8mxMHmvVswkyegLHJAFqWeX7vGhqB6X4HgzzZQeW9gohdFQDucPN11mTv4fixZpAcMS8",
  "key19": "GqgStmNUz6ggpd6RShihYJybr9MrF7ckiUtNsjufPxZbSkFcZRajDWc7PQBtToobQcSHoAN8DbaTgMSRgPtsKGC",
  "key20": "4pjY6PfD7tKJVtt8Dm4xEWpaDE4tQvW7vK2AAysoEo7YbXYSsXAa2DV4G4Xh8Dh2fWXo5pHFPX8RNGNH78gUMcDk",
  "key21": "3GggHP2FfDnog5TmiMYtK2v3CpkS1q9eADKCTLMaASMdy4iHBdG8NWXX3oBUDRNc7mgyGe3aPAR8eUGSQunEiprd",
  "key22": "33hUkCYLqQhrizALnZNpKn9ckc3CaaU7mhoPVqg9MJVWy8PTjzToGsEGSzj63ot5ANYneN4f9Mi93BwYTAXUWuHW",
  "key23": "2PUgG9YwvrSY8UA8Mq8AnRhzxmjwCmiSARPvDuUXJfwq2SKAgGdWMqbKRH5bFdFGrargAmV8ybv25wQCC6QDnsNh",
  "key24": "2Y3DdUYeRnTHCvHazg5aszKaxWqYW3YKpv8fZrQPL2MqCUqWjfgo3NLTwVJ3hXWD2DWHYfJQJMrH4zRvZqprp8V2",
  "key25": "3fmvVNpWPv1WUsYvFWFJe6mDmHMb5vCQ6kk5Entx7vqR9wZWBLRBM5bRSScaV4XTboy8EJmmgHXCj3jtB4aab57N",
  "key26": "57QH196BfdS2BrCNRKQFickHPFrfgs2dpgcJexnqNmaGAnG4pMnDHSE2EEyLLuB7eVY2iV9Jz9Lpsncqb5sHHhMp",
  "key27": "4yD3AtrNt3Gxb7jM35dCWPEemHuSQkNYsPSHmebdFsBdivp2GpThtbi9szM4wFcR3WK5MJQDaUVWiCDHpEtVQ3Uf",
  "key28": "48AnQAvTr2pkNWc8Ftrb57LesHumXDPyJ6pBCMMkmqBPRvj9t7gGhPGcepMnQuLfUf9c9dEypDQgitH3mBzEEtmA",
  "key29": "3grYKgcPtNWShppNahiThB1jJmomsbUhjWz5vSUKDaUqjM1Aiq7HmYpJxHrJy2DvWw8pyKNkzAPiPQZKv688ULmF",
  "key30": "3n5aoruQXi1d5HrdBx4cEqXNCa3YjRai81wXqtjYGB7SNkHAqp3xJ165JibKxj5x2u3EvSdUVKUf8LnXYs4oRpfL",
  "key31": "3BQyDHC5ptnm1DXVk9QyY9DNJQCRM7Je4ZTDf9afYFUPwokRFsBu8wJ1oqXwCaKrDxv1uQDs31rLnypErMu8hAsN",
  "key32": "4tFZG9u69mgjorMkdt9ZGYLJKGvGdXaQhMZFs9yL6dnTpqpADu3CWiuFT5vweeB5nEnkgBKQanuMvWSfq5r9wyBj",
  "key33": "28LYNZpiK7EWXN2y6bRg6jdPYfs37kunw2ZoXCREuPJdEHGDPoqsoKHxCLekLdEFxHFLx8DkB8jKubcq6PaWJquZ",
  "key34": "3GcdBNzyLuuB2wMijCARAMh4azY3CJWCRUpex74NqRmKibQynmEQY2WHtoC1TLft7N7YTUE6c5cHNakcNQuP49BP",
  "key35": "4YkN1BbZip9EToRU3BNZwcaDtNzBGKDLY37mPJuDxVayudVVC7gysnEZKvwog9mfGA8AHY9BzgCYvVpN2rJUoQSM",
  "key36": "4AvDhNYECsTuKkmM98dHhS1xd9z9XZYFmgm1uJNEHsdLFdkGMg6yx1DGKgd1kB7uavhZobFAf25coffffb7frM9P",
  "key37": "54w7QHv4gWP6ryhQGJEp5ERhGfWPgYJY1fWHjeMPp1go5ppmvmb4mwAYwAtf4JJSyjvhfac8q6v9rFQQnXrZyQWY",
  "key38": "25Etj6EaYDmopXjGoUwZ3SwX7ST9jvRDrPmG4Vn1wgPVpTzWdrmyagjfdyu2cGtP1isFMQnvCHCwY4X6aaGBmZrd",
  "key39": "5yQ6Lmr2a9jK3MfRfepDYKUzDztystA8rgT7tcmrQW5fy8GknUuv9UHfQwLtnxGTZu3JvdxDWdNo1MEtPkK7U4mZ",
  "key40": "2wEQRdG4WLAbimjhy9psmYn9xH8w3ZRUETt4jLZPCnCAxFEgcQ53dTERNDDEHcxhZECFpVRsVXuaM6Krt1pMk8WP",
  "key41": "4vhZAt3HFrmSjFUyzJwuPmm9xtk9i3aN92QHLBF6WC4vmahBY6RjHhoooJPb96hL1hw4xNqBYDN4WwvGkbvXX5GT",
  "key42": "2dQwZCRvaFMvxWqSngWgPnRMb1UCECbVDcdL24PXAByxGcdyG6cXscxDbHkhVQLoYJdn33hH17f5aiEH9tSk4Ekb",
  "key43": "2Hs9Zc74B8v27wGRS1scVdyBzgHsHMrrMVU5kyFZeBpXVMNmvUZ9Y6Qz5v9hVzxLwKRTTBVqRAHBLkDDMnNwgrS4",
  "key44": "3xqZ7ptXt6wiabeydZhc9UyJGtTEWC43wTTEUVmdHeiAEbp7D9CC3fbz18mAqdwh72CT7HvrJt71LgJqMxFBktQY",
  "key45": "1v12n79PH6MqZnacJMiyRmUoxuBQVQDntsc9N7vzu1xaZXrieGLu6rjUr2SNCpkXCVxKUL2UrPaTMzbvo7NNFJk",
  "key46": "4EEoKKikMkL9Ab7b1m12pPrZiiydWqsM7TShkmgt1RfyJqLceei5JS7Stb84eoETpvreg2xfLFcHh6RAz1oybg3F"
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
