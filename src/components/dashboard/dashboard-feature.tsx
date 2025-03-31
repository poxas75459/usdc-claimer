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
    "3jAxngeFzbMZru5dCrVW9cQ1CYNBiSzv4UhnUvgxY7j3Av5yu8jvR7gTqspa2Am9Mg5N1SWSNMuwyp1JWeCryP69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hx1iBHT4Z2uido7mGWsamQn463KT1fddqNtMyQkpzLadCckbUSX6MVKJSq2qjnGVQusX5fwd1b3QrajRJjJVpdX",
  "key1": "2dfjz7H4U6fajmZerPq9f41SShHajKApaNKuxK8mYM2joniKsUKBibi57M6DqQnKah7tm3cYx4V7FYf6UsN5zUm9",
  "key2": "4xpHmMMzUbYzM6RzXcJHU5KSgceggUefnBPmwLuiGKksY3oovdUC6ySg8mk6vErejQ6SbjWdGAjG6h9Q9AugwJFV",
  "key3": "4o6CNVMu8wamgfJbCKqYgBmfVoyhnbZyzk1JuHuqZ7YLkWER2Bpp6wgyiujAmKw1a9NDJgzEjqyUgxMvB3eHBcc3",
  "key4": "2W47KQqyW2nJuWBgcQV2MwUqkqEpaPeiM3knJg1kF2oi28NqNM3rnotjgoNBepXWJqRwnnyBW9868DZG88XVfhtm",
  "key5": "3ch9tbWBUeqNhfrLJ1vdK9f8FuGcseUarGzCf6dLejyyWpujWDf67MqCvSVKYMsJkEQ8rRPScMxA98TPHfDaNe4e",
  "key6": "26qNynyNU2i2BtX8CtKEBTy8hm85YfVpmjiFQHv147EGUXY3mmPgJkmp5dzesfS5Qoe4eUqsuByJr8M2yTQ1gYif",
  "key7": "xZQdmDCRe3i4sjoVWjfkQVVYrt5ipL65PLWq36SPofy1pkqCMnqnP57FanFV7So93CieRCEpLSHgo41UYxYEh7Y",
  "key8": "e8hxyYuBxNCRn4H1BxktvGuACGhRdpzp1tyfTiWGuMeGYbVPMEB9q9Kh2YoGPy68rMCcHn8RkPPnv86VwatPkDT",
  "key9": "2xk3kxrp1npfsjmRw47NfHs2ReiERxVBubJhbZyVun3seCJQq8Kz9ChuUnU97UhA64eThVu5d1y8C9KzfTyCaKGL",
  "key10": "65p3aTizeEcT8YpUGYDqp3eKjzmhVurhgvfUBgAFsmdSuehbAWwdHH4qqwQBrknQD3FkibeCshrrMczZ49b1AWfT",
  "key11": "2aFXS2LVPmCyVGLJ71yqJNjstzuNNg8EjooqACLSNyGqZx6JqNW3xEb93wtoqxHaa3gBaoh2SHTUuu26N9RfEpk5",
  "key12": "41Y4UFAGuFUiifnQYsE5C8VdGQqcuqEuhqLZvjfbUn8QePVUGLvAEJfYCEYP41z2hxYD4NHJX5XfLbUHvu75fJm2",
  "key13": "2hWGBscQTG49KDXAg23fD7NaXKwtNJaVQFJ5VC1nskHkFPJ42K3E6gjPUbiT6GLynaS51a138VMU1buAgoWENgR9",
  "key14": "4wsSa1ax6RpkdxWWtAL7w1izFbxmTuhSHGNnLWSTRNDLbNHWJLwRo82uCg9rUEhgpyvdmearzotXyXh23B3Dytmt",
  "key15": "BQekmBJWsx8rdU2P828EhfBabfhhKkF26hxzvU1c2A9bWXx2HstFL5s7yPxSaqm9xe4TcYWLGQ3kit7UVChBUe6",
  "key16": "3qzFQDhoeZCNZSWvshK4JYgtqDCQ829nvPXEouES4oExGdh3NkC36nCmnJV1atp9bK5HSAbnQhpW2iyzqhrhj8u4",
  "key17": "5ZUvV6oe5ce8WM8ZngFDLFoWQaQZnLmw3uYoqEveZfunAAre9tDoDnWJyhd68NQW9AZH5Uvb2o3GxzbNYU28xJU2",
  "key18": "3cMXHUP7G22nZAP1RkoXV3HEDoS5tpmYegLvWDyJNXhUvSggxwPkjMLhBXsGZNJW1z9eMuiMcAXrpc7fYzZg6bCW",
  "key19": "2q9SqHDiTDdXGd5947bhg6YkPKbkUahyMX9YtE16kK4EdVgrTUktRGS3oeDg2K2ptEpvwSUAXx5H8bmAqgk1Qmty",
  "key20": "3zdVHH7oTEkDmaoDuonFVkbyf52QJ8ftaWHt3b2XbfZbt8X5VgCzf5j66q7ZaGERrFK4bKjPbQ5z3yg44hawkuWX",
  "key21": "3WBs4gfxGcuq78FZMwPxXG1m5oJZyXm5qwRxmPbV29NGodqyKhzCpaacg9ewduH2NiikhZBbPeYRRQAJ78QX43k4",
  "key22": "3gcwSaiGP6WC7cDBQSmoNMLnudr2vd5Vq1PDtrDfEV9k1CtgXtpVAJiqAM4WzEHRP7cncTUHGz5pFUfLzwbwooju",
  "key23": "3ckCmvi7JTBSnuzkamL3AeZ2CXadrUByr1Z5fhuqCXp9jvobyt7EmBTMhH9yZCVr6LtV6vfAyteezSi6R9r3DGZh",
  "key24": "nHBDMo3fje13mG5N43KSoMj5fBWmq2qZ1wMPr4gREmTXmToi9Jtdm55DuzJ4cqapQfadjsi59pje5kqMGZ4weGV",
  "key25": "5p7GmWV4CQB1rc9PcYwPegQ5ft2ZzYCxieK2CeMgewuj1y5Ha3uBmF6b1k6QfVYP5M8CHw1DXBX62CwFW63kYumq",
  "key26": "5oRPH14m2TZCh7D9AXD9ewAbmPewqaCWd9poYppPpHVHxQhUgHkTAWtSPhwnsPuiKhLXVzi68226tASJX4vbMFoi",
  "key27": "2Y3iLaABLx6DAzv9PL3qCRXWV2yarsLkQZKXTzPY3HcuRC8mMHYU5Hd5vq4g9GLLAJPyUg1KvmeSRcS6u4dZwrWB",
  "key28": "z8fEk89VWvjE7oxqQ9BiUrkdQrywCvqDso8Q5AWhLfJiU9p9K2He2XQpyM2igkxpudUTeaL5U5yhz5AnCJD2igt",
  "key29": "52frPs98VGTJVCUBNi2eurP7gP3rPY5wm1RM2Dg2b1sGuZgrWpsTt5p7a3y1syebUpdptrQaVpERbc7KZCZAtL1t",
  "key30": "5VBpmRD8sKEd5muAd3p8vMx53w2sDqTjJyEsrh5pyDBRKn4Kqu9Jks6aG7jGtcfpWZKpHHTVmxFE6tekrQPrZtmx",
  "key31": "2chMZ8kV98pvYLzqutLvqfGZ3rvzCxns4KYxMtgnDNFR2X3NVivVKqX6TBtBmSFJFjRyXq7LvwGQzoHqG3458475",
  "key32": "khwF7GLsir18iHrhxpMR2BNhvxHcQhxpfuGcSULPx9n5bMYN3vgr33GchLWFLZjG7cgdZ7v3uvhjfQKnaaZkXhg"
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
