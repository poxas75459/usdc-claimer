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
    "27B48H4eL3e38cHGynNE5h44aYjQPLHTvBGbcQnfH6yYQvnHzPSPUTvFpvm9Dx1Pm5SbCdvgWkPpRGpQPTdjCiVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cC9FQMrY5w5S3C2dsrswQBP9rDj8SjL43k6AE5Yq1pGd6gtuqf5K4XiYLZns2gsH5VyDL5S2icRQgQjxb9UbdL1",
  "key1": "rVUvcRUMiZAzPAFmNFcNf4mpQCfd6ejYeHVj5uUv9T2vfvbQ3DpobmU1szVYA5FDg18MPUMzJhSeQbqdrUo3mYd",
  "key2": "37hSyeQBEv3Vsr6AUYtVE9msBbKAF57raQrXi82bLddV6LVv9vUVM11q3dbiBW2DBUfTGeM9RBg8ZSc6fFYsS2GD",
  "key3": "4QFHTpAFuHt56dST3rGpWH4mmqVQCEFDLFD8Qz3Ppm3Jpqtp3Np47ZJrKsRy6WZFLKrf8AGAnfQwp55fSW7KqPnV",
  "key4": "5b6gfrWkExYzFS6r15sycm9Gv91KyiYXJAnaew9qvvxADZZCBdhLbEbqzbMSyeyAjWyrPeq5NDTqxMfuA4U1y32q",
  "key5": "42P1vvQPNTt795PG8kGB8gUwhwCmmxuwCQJk2RuNBD8mBm5UDwTZxPaXQUnCg99HTTi3KUJPKbzb8iMZXf4M7nip",
  "key6": "3etnxyK653jkLtjw7rVadRarEXwhRscZXsaWWAVzE5L2aaZnNAx685ejgRWeCbFRdRqidfiAuiKuiJzDaSMTzrL2",
  "key7": "3vSYXRQ6PzoUrVBxFeMejSURpq3miLTk6EihhaUHVTCgRDTSMC5izhGBRufkt9PfbaChyTBsEZ73mTTHWszHn1Au",
  "key8": "4RE4VzkghW8Z74zoPMjPBigWWchpmCWMSUB7SS1joicRcvnmPT1Znokv1RPG79U8nwAit2MWBgJwUsbxKb9iYcTR",
  "key9": "2aW7PieRu4aajYHbiv7khRNTVCBBk5QSKP7K1kmzyZkEV5ekdUVhrGbCH1FeSxWSSrA4xVzrrYbTWXtKDnYQnNuj",
  "key10": "49z9xS5kAkhV7fd6h61Sjg72gwTBVqVchn6hmniVojhCr3LAKpBU8iZuhqfkXxbG9E7offmocaZH47eTMyfwbimL",
  "key11": "441c5kKbMRGAffE2TfrcaCz5SUYoGwKvLyJ9eSXunoMhF1piFb9rxqoxTEwYr6eEZZY9LrYtqNgGf1Ttz1Nbvjdd",
  "key12": "3FLHoZwP57s9TyRf9vr8CpkfLPdJnMWzBJYyyJc2eaJJYJ4Egb7hRoTea1GSUDDmva9g71ewyv44244vw8GmgjKR",
  "key13": "4jx4DqXGnc3FPdtKPnYaMu7eSivnQVMqmdwXvoHxuGCCnueM4gCK59jt8bCLKqJKi5LCu6Qno2aFygQ8VwVAQPMo",
  "key14": "2xSrFvZkBDSabDjJq2xoMS787iBzHqVdJu8LBCX6bSerZeTqFY5KBYYUNB3vHjHPck5oHb1coWV48DheAiWwZP3x",
  "key15": "4bL36hW4f3BMGsRLumuGLXy5ocraMQRZWMDkTgRMjDhLMtJAhZ7zGjhocGUZxWxbrrxci9EK7nN2KRxS4i2k9Cev",
  "key16": "XdZ3YNHraGd88fgPyKDtGTVDpb9du5tDZPkPey3nqfqpmVZxXKLG2nocYdQk6e8GmGwoG9yLffK2BTa962tEvVs",
  "key17": "4D7TCvMESyWMjaEF1EbkzRad7rmv5k8uTeSd74ebaYu5iVjsAJjxFYFxvMNR6he7NnAeyTHsb64mvW94b6RzjYNa",
  "key18": "4KzWA9BpRVhWB2LxztrinFVqJQQ63mALqJfsRaTVi5bgF46FqDZo2AoFgy2qXZXEvPkYmNt9NJZGADhSjLg3N7BJ",
  "key19": "568WjNX2wb964C9keDmSS9APJv1FWJVuu1aX8S3keahNT33HZzuT1YtMsRKyPWT4jzVDYAFEq7mWMKz4abuGjgA1",
  "key20": "4TkaKjy22KnPoksBf3QFkv3XpMduV6b4X11PA4uaPnRx1VePmL7WCMLFGzVyNeC8k4X9chPeGDJmapUArzXAqG36",
  "key21": "36oCkyo7BZrS5SLNhK1o2SKAD5Ma2cvBwhwusw28wUPSJ3Q4WZCRi9WH3HGuLtsD9Z1MzzKDbouD9KMndAWXKaRY",
  "key22": "kEX4a4RDPpTdVaCHg1oCK28GEL57MYdZxCFmNa9BWtULmj79tBr7x4NaGVp4My1C6aWrEXB9GQZhq1xFrfRzw3X",
  "key23": "3TLJY1FZf2Wrjpvk3MB4wMDLux1Td2c8i2AD9MvKNUmr9xpUQj6eJN3QDLhsbnBa8xPYLwZwtiB3c9tToc88vRfb",
  "key24": "43EJeiHiPVMEZ4yubFS6HwuLr45A6LRTxRrYPV6WtyB6jJFDhmc5H3oL6BqxY12VGMeYmompMjFUutfo92bPTTUv",
  "key25": "5aizeUEEwzCv5mY4kd987RyJMymwYw5wxpQ9NMzXywhppmsqDBwx5yZ7oNWrKr6AnC8YG8NXNBrziacFDBxZTs2",
  "key26": "2r32bgchUDBrFujKvewvbth4qnSaFPVRubBjPuqWujsYcLjY7gcVn56h9J7WyQZMtnNd1Dcxrovct2fqvFiofANP",
  "key27": "66azqKTvfajwBykKxD87uPjeGki9G4eznWERx1a6yJr4U9zaVjbTdgf6yZJeFPS52RUWDgNQnGsy1wv7jYh52B5X",
  "key28": "2kZDjBokbPYZmwSNuahqQKvbQKy3pHnSijsVMYrbYJ2Y5DMQr4waDg5iH7nfBAbHh3t8NUgUgmF7s2VCXXeoepMM",
  "key29": "4wZMi6XpbaCetzUtVEezkH6Y5158dzL9mf9nWoQX8rnzGtCsaoxvpT4KnKfTB4ThXvhWQnci2A4UDu5hU2uD8aoD",
  "key30": "4tdy62PVFXyDw729UjAN4mjU1GaenBXKUNZU9QESzb2NCyUw4MTWYSAcziKDxF5NEncEQt5zrFQWk54Mcbh7pxVV",
  "key31": "2T5xyLXhhutpVt6AUH5CZcg7Mbu7hBFWnUwdTbyPGoDEGx2PGdcbDRRWKs3i9pNaqqe535Lj6MeFmcAh8ZXxsUQj",
  "key32": "3Wve2xvNL6ZckdYdFxemyu9RrdNeMButQS7KM6ywxFGRsj3eQGMFBUfCLWBFwvsGCk8dtqJuWg4xEMte3sfNdyrg",
  "key33": "NQRESZXL73uzsxSyCoP2xLst9dgLz6PpzT97pfC5HL95eupqvPrnA1wCB1wrRKAfsCJL131XM3MTxF4weYz9qnJ",
  "key34": "5KxBuUexKmBtnQpmoDu9x1NY34QY7Spj4iCGNhq1a4kKN88TwCJAaTUAXSeLrofnUUPPjwrmBgkY3x1J6YAkvzjz",
  "key35": "2MdcVNWgZaLGL2MJjkjPeqC6KmDhvVU2L3v3VrgcoGiDyJzZoRiSv8a2AmPi4JLt6UtCXMsFy4kcLM2QpE3YQFxQ"
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
