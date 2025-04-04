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
    "4rZVRzU6VqoxqgpDdS5FXjes85DNgzqFenRB2S8KL5ui35x4PU7Rv7iEdV65w7wmgwnLez9SCmV4EPPmmivKwCHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytbF3MGbo3eHZPShYRPgayQQD54EfxsR3bRy9SHpWrc7Dy6nvDvjwfgynjTKzvrQ5n7VTFCobbVAJJCgCp4wm3w",
  "key1": "VV4eweXqyhgWfA1BF2fDmBRZ4tej2gkbhk2dz19EGBjLV3JbmpExT8M8ANBAzBpDNwgA2n6rFMr11p6yABtoYgJ",
  "key2": "2P6JxJuDsnrCRAYptYsbQc7hW9fJ7z4Sck4hgzHuDrN43HBABkUgqDBE4FTeeUQrUkNUskbE3hR51T98GT11oJd7",
  "key3": "41SHfuNDtK8DiCKyU4Kh9kvPckcxctEPK2sHXcJVbuyvaa86nxP6cM2AyTrpnFrqaNgmC4z5rajskFWruEAYgaaz",
  "key4": "3ZozWBix5ugsWP5vFnL3Yc2JUoPiuJa1Er373FPy7v4bGFqtBDJQEjMPwayNZaDspASFbp7bsDLve1J5hYHgsaDD",
  "key5": "4beNNnHASNm3WEBvPHdEob2MHBzvyxJqqDMmkjV9SwJWrdz6SFYUyy2yuWWfVUkY7eBNDVQFDs9VxQrYdip5HD64",
  "key6": "27rEFBThLgUiWz2DHKkVFNeSRgathvYPhSwYGjyCwwURQ3pi69QGwh6KVpY16baC3mPPwfeGmfuNBx8DEWMQUu1b",
  "key7": "42n6z2Q36JRa8gpa4UT1vjTAzaa22Vf2vbeRVRzT5CaA9EDXS1uLPd4zkN4zw67YNKrM4kZ37EoDLhcKRMNPQyPP",
  "key8": "3fjhs5rxLTDW7rF7Buo41qu4aN5M1xZx8yVaGKqPHQmvEXuU16nWMBD9NeTs7dcDMj98ALByAhcyUgmgQnqwYQtv",
  "key9": "2kqRL4zgtsEouPzBXVoYT1MMCU1duaSx53hwF5A3JD5xDWoeidMeGJAud2uJCLrPVMTsrWk1F9xHD1N96FwnCTPD",
  "key10": "2xn98SXn94FXoDLZXFjLP4PXvuchxd5rvunf6Bq1gjGZ2W5sqisFiXKRpzRs6Ux3rSjGXXUxRbN1iLsf9VENtPck",
  "key11": "4UUq7qtiqzfuTCPZRDv7ALTnvmjHQb9ik82FnhBA4Za1uX9GVJDiSAKLs9voE6g7TSJ4hCYZwaFmPMsmijDCHMu4",
  "key12": "2k3PkEppp3RZd6L4PrEXgWzbnFTavg2GsNvRBWk9LU6ft2Z7MdReQ3RKbCkA6XZk4nFsqkFZyzGhSPwnsqWu4Jin",
  "key13": "3GD4UDFAZ78i8w8TjrCvccMARma5ELGRkzBrKPUBzHEiKgDtiURMJ9LtnK68gCtSFPX9GXirnaZr5WCSdg2seudV",
  "key14": "3YdRfXUBMM15Nz88dRMjeEJvNDvxvGSaNc9ubxSg7c3tpoyqYfie1CGCvBZEKPViWMvBFiVDDHegxaFCcZ2wgFG6",
  "key15": "2sBmbPG9VPbGLKUmFD7vphG2GSkeLvRBsWazEnT7ihvQoxf7S1o2LidfXZm4yYhDayX8ZY12FyMXbi47TGKGM4sY",
  "key16": "5WpMmxsAGaajng26L7bZhAWy8CtbHUuFQuZjaCyxsnwrL5wW9FGeAutJVpQc7TBab4Ah99m6Kv4n8r7ZjhKmjXjh",
  "key17": "sHGEEgosePjs6z41TqomkUGon9FNQyb9VhxKLHwApFN9qQi1UR9dmhHmw6wHFihwBeWHie1MS9zTwTu6RGvPRDv",
  "key18": "2o4W4qay5dxtKPfC99y4huG1qwkJ3fqeT3uQQ8ewB3wr3jdYNuiE4iq4DMJ6KUgkfnwXFRy2TqmTH15AbwySPJs4",
  "key19": "XvvYVHNyvruYiJFgf8xtkHaKY66fVwsocFta1oeCsYdiKkANGhN9qHYNs6P1iAYrAmsAt5MdybEJxdxWLFxwP8f",
  "key20": "WgZyTnaCkaB7na6ThN79ftRpBxYNLcrXheyJtwkbGLAsmzhwrqXAgfBnjNTzYR8HA5zi5YAR5UNrhTh62fL7JyC",
  "key21": "4xteJJ1PJ9FzDQcdVH1BKxk8owRGbg6Yg46Dp2PebJixiDJcx1srvjpcfNpc5jAUSqS3nLVVfgDpGyJt4HYmtjLK",
  "key22": "3GmkUF3TYn7BDrTmVSzVm49cNeQRdd4hDduwqtpmHvednNpkENCL4vTToxXjHs3pPB3hDKBpwSpa3p5taHdiaDss",
  "key23": "5riFNTvyihGpfBUrVqGRx7xkBVVvSp5Ww62tzK43Qt4Mt7KUjtHUCU2ZgYJRUixiy2kypXGh4f1JpkmdQEUUarX9",
  "key24": "5ZxfbBVGBh5H4SdoKo2NN1JzbQyYyQ1swyvYKMsWB3oa6FxaD6cgzD1d9ACCojgLRtqKMKMyFb8pjGsraW8AZLog",
  "key25": "hV45TjBUDPtWGe48HYLi8tfCsv1coeUedTzXwFkuZzaFMU1FAs4qp3oZi1kApqgyjjeMgz7htimByX1W41rP5Ka",
  "key26": "59Efnuj5kNqVSdeWC7Bz3SYPeBmP5YiQepA52D7mFm9an4o1MLYmSWFgNxxbLkM3TkS95zLTdAjri4sUCar1W374",
  "key27": "2ARZvuuL5Vzk6vKtmXhfsdFfpUM4PaJvzupmikZtQKNRxo6gRZFzrLfraST3qbvQR8Lc5W4wYBb4jo3qoUrpGWeR",
  "key28": "2gmuqKfXBN7nvSPq2PXv8ExFUG3tpArXwwcyiA6EjNwL2HDoe4SEi3gwQFqALcsHq8au38KcvZ5YvGYH5LJFw7Hc",
  "key29": "2GiACHQQgi5rYMKVW7eRaAsMWn4TS5SQoE34Y6DuWCyhqwaaccPJgGjrycA174cBePmMXrjKDH5aJVxXvjS2HXLR",
  "key30": "66Jjpa4HbAyppuVHKaHjYkvx5uajqSCCjwUkk8Puf1QYVR5qDhwyamEYdg7kTbMUWPVU9Rg8SzqWAtB5SF2fFjVB",
  "key31": "DMjzJ3rZr3JV3vXTU4PLd6zvBrwKXcV7yNU2a4hw7YhmHEpCpX6K6WSTpWaYwyLiW2CaxWYoUnvUFeumrVAeFEG",
  "key32": "WupkvhbbjTzvFiKUVQCZtFwRPBvXNdZqbPo5iUiuZwuUzenzE7yjMtq8sAxvTWXL6cQCqiXmrx7Nr3E54LwDCWP",
  "key33": "2LsX9fuK2GmoaB7puNEtojqJZgmMePEE4HF5YoCd1iVngMh5qPfc7hDLonbmgY5ne9Ci9uJXpmTmgZzF3EaWSLB8",
  "key34": "3CVGBH8jkduyhwZSFHQnZReCyCGftz11f4zD7xsfXDwrxWQN1cYLrfzXXxuyGSbEdShakquuq7BKtgvR4Chfnfyt",
  "key35": "4CvDNQQc5JBfcXtAPnKxwkiKvGVuJcQqw4QhWtjU14gQgYUk59jDxSSRfWavzdzxUTG3ULaAJs1A4jaVBXFR9TwP",
  "key36": "5F2K5bPp36YzCuQdJiEDWmiQKJjNmUnaS5dQYXwDCJsLrLFo27vCHroDUu9q3WwUDcGxn2v26oZZETAD9ng2Nziq",
  "key37": "rpVhh8YSHAJSXm68Q5H3WEorhJaVqk7dTwSLfGW9LxBZPb8r3pEejPDuX69gxM6wKuvSpTaFJN9jDd8Fc4kGkAd",
  "key38": "2SfDcywDvrLpVryjHdafco8qTzfLcFpBFu2swhm7wdFNBHzccV3on5KpTziENpRKxuekSn9Z5drCZwTXAvnBf96i",
  "key39": "58iAoGG32kSmf5pW98MFaHCaNh85Q6hGnQ8Euqg1f4ztuM9TEHZ4tt6yiZr44z36xfteqsDkCKgSW53KKqKFbDyc",
  "key40": "gfZZHKLGuYUGKGDiL6BwaGvB5Yk1iecy5e5Ev7ULdK9Ji8aMU2AiPLAsYZ4rmUpUV67DodYrk7q9vf5mCCbaBkN",
  "key41": "4Ta1ADboRfwgqKWGnH9NPj69h8y4TikvVzzaH4G8gmkBoYtTNJaWqCXnmdZEGMww8iFerEtXmUpDxHYCQDqF8BMq",
  "key42": "CYybgNu7f1UeJuJicpQ3gEhBWwkAMieAVXdW4BHM4JuCzSsagvmf8Cryo6AWfEseiho4JiGhXnQmGCjdPxMnbWx",
  "key43": "4q3dUoGJ9E6Hf8VMoHf1xPyv75Aa9AnYYmHcNkZgJnMaRRMxTZGxbUABTTKzhVrkhsdR9W2T5jkNu5uV2pdaNZYt",
  "key44": "2Xo9rKnJeX62SLZchqoep4oJS7yGdrEpJRcwVc5yvw1J9dxn4gEBY1qa5qoAxb7XBXTsQAWawjDBt2hzXoZ64rGj",
  "key45": "2LCbF96LQef1Zu58n7BRX2EMYHQrHJ6nWdwnHnkRcsRkDRgh6m5YEMNvs1WquXKHeXuA1wiEqayWVMpKuJJYu9gF",
  "key46": "3CMNPsbrgAo3CgLRquC8bcK5wisuiv5wRs19xDrDbEsGWxpD4NzJPLbVQhvaSo9FU1h1G6YLxe68wh4n5vvCVX4L",
  "key47": "3dsnBFZAysXYMQ4LQbtMbqcg5i8ZmGkNZsTF8GegQ4pJuP3mTtKrRuyZ4VLaeUcFCDjDh265UQXrgsSn4ZSvUV3H"
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
