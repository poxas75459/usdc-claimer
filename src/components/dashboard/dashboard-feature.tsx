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
    "3QvbYeP3iN7yauyUtJgR5SZQbC8mnpJqNgpntCjq53udGHSRtEaPwpKe4HNvxX5P3qJw4w7iJ5xHJGMSjs99p4am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjywSaWp7N6mhBA8Dws8npBbk8uMT6EzNBDy6sEvM9ghSvRJ5mNf6numwf2MVU6Dw7zTeAkJSGPta8VfcyYbjo2",
  "key1": "4si5vKcLSxQUYp6212u7Re8TotYUjXPeuQH3GDcHLdERwyB1Y3UgwRgNcVz6SfbYTLk9X5Pgq34Wf6SpHtrc39dV",
  "key2": "BBNXF3ffBVrFxxBK7tjYxJT81QVY6wVCq93moYrwUApqDf7qLiMhmFBfayX398jZ7gPTUoV8jFoyGe5fpi6zxEz",
  "key3": "4eDB83cPZNJJxEiJvCgrTs81UCcgBkoW5sHA1Dx621sA4kXKnbbdXDYqZXUvmzs1rRnTmJsprC3t5xwruptRXU6v",
  "key4": "vpc4ouvT5duUisqZ6QDtD84eZcJCqb8gNaCeWuFJxQ5uGZ8skJDnfToQzFHRutyNvRWi6L3St8XhgtUiXUT65Jm",
  "key5": "53YTz3YiNG6Lc3e6QeEyZafCdiLZQfox48fM3FSUXdS93mdjzdaMuGxSMpmo1uk5mLs1NNwXqzEkgZ7jj14qHVB4",
  "key6": "2Q1n3q19FXiw1uUFBgsyHQfwVhm8v821WFL8QoGFAbqP8GiJyqwKNTKpRJSw8Miy7u2tMNdeawE5wLyxXeeVpcDs",
  "key7": "5vsMKrZ8eRZSonaGNgatr5YoRHAuDgMF72vbLhZMFJfGQhY4RuCb7rhMYh5YLYgoLQsr9DQULSXtdARuLVae1bU2",
  "key8": "3yJEeEMpB8iCRgq1Wv9P7qWqqACnXyceTqz9E62ieYRovu4KRexi8Fm8LzG5XDcJY7sBVorpntPHdPjhmy8EKRxY",
  "key9": "5NLg8PRpBG9WREzAfzy4b4bkdSqYCVytBpzM2bAbDuRSXpXKy4huWpTKdTsDy248wYEHCRjxcUoi9WqrjDtEroW3",
  "key10": "4B5zAnbw1MD8LaJzwEa4v1bjGm8HYwNPeEoB3hivr2nPfkmn9txsE796UtCBRJdnqXpzbceziMpuuhDHx7mJBkjM",
  "key11": "3AW4YbCoePxy7X2fXQT9Z4j3eEAMF9SbjD3NCgkpDA9JD3DYtDsHnqU5YYKijgBcPu4a6N5r2QBB9K7DrzqYfnsF",
  "key12": "os9GfMuBv4JWz4fHRF4RdsAzNAzAqz6fHoECbQDHiBdhxDFPpsVToJDxoDskDmxVkWMtWs2fcVko64HfFSizK9w",
  "key13": "2aJRLBLzWzvNw6vQ6q2T17iRX3CiAjoqabz9SC2JdT2V4dsyUnz8LoJ2aPvaTwP4B6c42fE3nT4jyvLsxP1RP4LS",
  "key14": "56fQxE4Ry9DpVnQdLgFgrQ6mFZgCsUumwsb4YWNG8GFCtWfx9caiGWrpKfXRufrVBRPZcbHsceq4e9gNmZrTh3MX",
  "key15": "WAimsw4po4Kq9xbckpTwSm7jX3voobBLsP2EWUb74Qp2zTLXcFh5yVbX5G3Yw1BBLUxxXXtbkKncR2AXxg2Xrvz",
  "key16": "3Wmw1MuYz5ng3pC4rC7M7eWvdiH2A3aE7FHZtDM6T6fh8qF87PqXd8Vkzv9eLUTa4jUEJvQEZyo24DsNbg6GVGmn",
  "key17": "47KQAC1AJbubpCHk7sFwaWRXjAfpLwMtdSix5etd2UFmhZt1QQzM8QPZdvrAT4b7t8Krk7utVwJFqd5nsPqEbR5V",
  "key18": "2ZkiL3kRvTfb1L42rX3qXvYMP8TayEWfk8nuDVdjoNoiJAHnvjvyLHbCAo1vyTF2cLStUQ2e3szzS2JCctZfVEss",
  "key19": "5kH7hsXbSFPEkGAgjAgKzjAhgWgCyXKyt5eigCvBbMWJgKrKkXCQQYd3hixU8pyUrdNjurhgsc2aZfJXACLS3BtW",
  "key20": "3dfmaWTGQtJPNJoVpT1TG7jBjsYCvaPFR9rXBoxWf4jgreBy57y7HhyshGwkmLTtiR2eXUAwQVQWcLyodCZ9AqKp",
  "key21": "2FvY9CbBZ1vSy9SbPvGRxrxPNDQWhadXA4fdpUt4SVo3pyaFhBLTPKmFtJ3tgmGNcyXWeQ6oENu9SgtgfgnY6xxJ",
  "key22": "4wZzXvRM4LFdz73G4Je7iwEBDgRL1GSPYVubyi1szaRbNtGSuFkqD57YPuwytVC5bKWrqYZ5ctqqdkZAx6Gin8F9",
  "key23": "5URiyTgrgQzyBJMeaSgdbux7tPbs9pJApr68mRCL2YSFfFAoiNfZntGmhDnTr7UAPayjjtswjJQHZub4SdN39wFi",
  "key24": "5y324xw3jH97tmqd5sM19qCXf9GbukHwDRaNTP3AyuksxknWJDb2RFyPnMQa8Be4o8scLBBruX4Gb8egimuqZUxW",
  "key25": "3ACL6SUyUyjtfy3mg7A9odFUn3tdeXM7ueMubKejxWDAoVpCRJw9kWHjRUrjEUJUtkZcMgzb1ARCk8jLMBShDD1L",
  "key26": "4Ztf78cX2gZiqUr6Bzn4E3DimrqeJNhnmFze7qKBhbZsQ1KjWxDVvtVQNKMqCXp5KzHMWSVrxGKWZ6XJGBgj313U",
  "key27": "YdaeJY4TJ65kXA6e5SSHsTy7NG2ccXqPxddvQiNUhzhGNcfS9kNjuME1kichMVLYvx45choJP29EPUcYBVJKRmT",
  "key28": "2iFXc2X4fgXR2aw1FstimBMF5xFB849F4oeF5qGLaaffzdHJ5b4kCVfvvnyhQLyPwCqM3dZKvxYeNkJaMKbNYiDR",
  "key29": "25D8kzqBqQZozThzf8jZ67xKisZyZ6ARWsgVSssDE4XdrQD4YZ9REqXhpLxQ7Lp4Yxb2CsWh9YzdHKmpeudFSv6a",
  "key30": "4P5o5kqZafB3WQeV1hbnFDVc6E2HVqX8qwgcH3w4XPESDCu471R6M4WVTKJDwkACcMXH15SDTNMGYmohPeG3ShKZ",
  "key31": "4xJKQ8ReUoPtS1cE2cVNiHhFRH9fmnS1Tb8gkcP4HUdfqeAxMYCc7kMVU6y6pka3U9X4JKNMh6dDuf39pjyure17",
  "key32": "5r94EtwMmzjsAeWbzyqM2vRk2JcZNFQRBGYchvz3LmfnPMfAoJ59t6H6VdNQ39mk28jEmLWJL1aeEasoH4dz6ZXj",
  "key33": "2WGR9uJq41CjPpcaUcBUxwBwLfHt5RJCsyFw7vpzrPwEqyKnpDsZkVp6MNWh8cgsny2tt4f7pSgVFKMxKzqNaWx8",
  "key34": "64GaxZcUNC7trrKf1GuRjLLwTevaNF4B23aV6rVev3dX1XEHCtskwSJFvPCBn93Ykf5L1s4N1yoCuJM7b779KyiJ",
  "key35": "5rbVqcKvuzaUsZjYYtBBDZ7WtWsHyYLg9zSHcPN8v9GDDwf3kngzc3KburUdtAQCctqQGzs6rZ1NbLegAg87f1y",
  "key36": "UR8LLFBh81GwLcQCE5XJZyXKpUYM8epPKsDqwxehKQpjaNik8sjy5yHKQtyf184oQGUgjS8J9aNqUiFYtP4cTtM",
  "key37": "53iem4KzN34eBQrY8Ay6d1iu6HcfMA6b4Gfn484B7JNriCNK6NKKSZpPYxtF3dB15qhmjqxESy2HBYJExhLNReAe",
  "key38": "5PSEWx49vnvobCSbyUuAL5eCxo5HvrD1Fsu6X7LVgkTuLMuy7wuvGPWpkyoPV5iPi4Wy5tJJtu6K4uoAShixisB4",
  "key39": "2yq8wKGuh7gpRt1LiLYLgoc219tkTS42sXrx99AsMRGp2H2NUQRdKfy3hizTohex9GKgBJ1f7VCWs1264TYG2eXV",
  "key40": "5hGiohrzo2Xx9h9DnmNUPRdUazdgVrLHnix86v2f54TaNwFQfYE9u1rMarezGQf9KdQKgbAR28eYETXyMsndCodC",
  "key41": "4cBhxWfwrfNTPEZpr215VVdhHPGhp7omQty71XwFcEBFXkL49y8ADSJwQJxy1cv9BbSkueKQ3UmQZrMmDZ2cri6n",
  "key42": "aAkkZaxoQ2GNUmUkFT3z51mhKkXTNA2xdQx79GmVAx8Y8DGhvHMKrM52PM9q55gkGUoj9WbLqAKDvdMiyGcwzp8",
  "key43": "fQPC7oJGvTQn7vRA9Ga742fxc4h6QVWVq7gYLBV4BdnGpNfyzAhyM7Ss5L6qH4V2dNyqd82ejkxTVo22ka77Lmr",
  "key44": "64TtLjkA6jocj9WSUSdyVYooDRhvzSsRqLebNDJz2s7yidPrE5f4SZBGcFPrsFWbBJ9dSuA1Ah53BMbUtvGQUbe7",
  "key45": "3YizCk3gimdjHhMpb6RnZ8xnyphneDmsVsAXKJBGfJ5Lj842dtrJ3zqp6Xe8whCDMKHQr4ZpHMCMvHDqPnFVSptU"
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
