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
    "3p8mj747D6HXYArpreSFiF5cubPCHU13KDbwnAnzWzyqsQ4v2CSEdAM56gwLzG7Hf8WrS4EZ6AZpv7CSJgkNahxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQHBm4EeEfvw4UmbE9YSpmMHMrftL6FuTcoBdnnKFTYC7SkEySTdA5otLtAZA74d5vqXNBtQbhha6ZFfrcdbweC",
  "key1": "2JU9LSEvmtzA78gziev5cbN38eQmWsi7smprhLfHTPPJ8RJcJwqAi5KpRdQ6Roz3dUzLnJtGE2t6mqk1wAK9YbgF",
  "key2": "FKLSn5wK4vUxqLorGs77vGBUnC9m9n9afb37WfXuXb4aAXBdhhBDrmyXrfQLx5b5XjNS1Dk6tLsPeyx7Y2iSjVm",
  "key3": "FhU72T9gUaKnu8Sp3UeoLwVYHjtdKPJBx9a9tBursTtdorkuUcu5CaKaD9Wjr6t2GYosTuV8rK4w4nLhELTrH5A",
  "key4": "3ZECF6JVo3Hj7EY5Sq8PHemKVj7ADeHJGPP7cNKXuNrUGAQb4RY2MuWddfsXoBziL7zZNPW5M8EWPfyRv9UxR3Wh",
  "key5": "44VXScxM8R4R9eXHXbrRFZnnqLm4aVmoc49RQUEzbaDPtTZEVZTRBrZBXREzHBDFuWHx6hd4CoSBDDBxej2wRP4n",
  "key6": "2utCvMGFBy3suD7SZEcj5A9Av4XXKbijeGM95ngA6q3jAzt4u2s9U86QxZ7efNnLbvZGu8e92Xq9NFusZXsLExFA",
  "key7": "2wjGzoeDj89VQjWA2rMp9Gi7JE5yp35GxT3UpJvTaE9gFDkzHoHk1T6ZTceme1nDqu6h3am9mkYy6as7DaLfTNKp",
  "key8": "mhdbQVhR9kYnq21nZRosz1fHXvtq4ppWHHopfunAkn3KaVAMKaknEay29wWP8eW9KWfSvLJvNHwDGmwz1rjbuzc",
  "key9": "ABiG9cJ3egSCVDriEsT3UwDaPrAMPMAyDw7Ywu8qFr1c9t3iSdSy8pkGXaFj39qM4EyagY3jqFh36YL7t6Qn4uU",
  "key10": "57RGL3iVBgtZ7fu6nN7ShMjv2dHQgmWqLVBqWGt23RbhBreUEmHUqSpcaJFh1LogrFC3jiCadw8raygnsmTwQxPU",
  "key11": "2SAph8wU7L1EhgtWZkHPp217DUN947gTMidh2D6dJtpBMYdCjCTSdddBBA8MRLY18Xbs3HpoFYK6LbjkYfYhZd7o",
  "key12": "21xQQjDXYXvpqstudTWz3ahv67QcRXR2NbpS2DHsEtWr4i8EseQ6jkQmcfHfY2PhPwqM9zht1JkgNGK2Vx169oMu",
  "key13": "5svY35uw2EQUsTFcrU2fm9PWxsZcjY1FGQKoXsh9Awcz5dM3sL9xFTMTXWXZupL1RANqpuP3g9FPvNWG92ad77kv",
  "key14": "2cCYPdnzpyd7KwpRdxGTdUxk9ccNofjfUmeX5RgTqCvvBFbXSBDyEGcuTaSM8nxDioEkuYjwhVAH4X4UCu9Qw2pZ",
  "key15": "26CduNakyVrMHtmyh5nvtjV8A2ouQExB666Tc6GBVrS2qqBKZJDVGhNTDCUzaLaZK3V36psgjr4F3YCZ7u77P9TE",
  "key16": "3x3xp2Ef2LRjgQchkSFD151N3GS2cJ2zpLtnXnMK3oqKVbfgXsnDyKYYzidcYcQFKmE4W64H1hUP5cGc5XL7jqK6",
  "key17": "41X6K9unZWur6yK3ytrrms32A2JMidEt5xsz3LrVp3R1Qu8tfqxaQzN3oSrEwBSYzY8kCjSXNCaD2m85ec7VYZRQ",
  "key18": "2JEtrCutNCi6xdkeZjQ35jy21zc9meCmRjzfJ5hEDrL4zHqUkmBi1cs6cyfsDYTEnkuC5e2tBG7TfviJvgL7Hmgs",
  "key19": "5zcRWhEP1fWUGzNbJoZJdocCyLWH4Tw77DU9zFvP8R1CvmxPCFVUpKkWLeQhDH4ZqrcF8smZci3eFFA6SJUnivRT",
  "key20": "3c7Xwd58x5NVRxY3ZfCviuP99zGqGTqTifqZsWppJ7FbCj9ccpkvkTZ7zQSgeJzaNHhjPQLL9hB8SajWCoApk7x8",
  "key21": "36iEdTmBeAVqAy2fPiiiG29LA3qXjEAF25BJ2AqJy6FmjpDoXymw6UvGN2qmETZW6A6LBVELZUh62NvYik6fWpoG",
  "key22": "A6tLSvzmKdM8E9RMMwFHB1nQDPNF8EMjuRj7fVwFHFFCKahybdKB5uquhAsjxPJv34WRSuPpxz14HkbsL6XCqVf",
  "key23": "62wezsbfbYEixKsVybDvyhaDBATtXKo8U8cwiqK3VCuJS6oPura6jsYAXJMjHx3mptsmqjtQZNMW9c5Z4UtNvge2",
  "key24": "3hcmVQpAkrRktoGGbjsErhFVkdsGXV8o9ivb9UtwKG9WjZckYLr3LuJ3TYLLVNbbndFjFThGcxcDRDXe5kLyMoSB",
  "key25": "5NgM4PXMfeWidxWhzn31GhAwS1iCyUXFDf5qwnQkmUeji6QV74hQ5bq8sN89PAfiGN9gLVPNKNyuc5y2WHJuTkfT",
  "key26": "3thngVTcrDkRRNrMVhVeL51vtvfnHvwjw6EpPmgFHR2jMzB63dNiuhSwfcnUuxCLACUbSGHgFxDQGnqupDFQnTG7"
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
