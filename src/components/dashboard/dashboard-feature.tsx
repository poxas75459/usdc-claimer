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
    "ha7wLEoVWf8JUYpcXz7FP7qxPGJjaq1J8cUtTZm3sKJTXW5txxz39hCCsKRmYTJpzuqDiAEVF7VxsDgsfgwLzyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YaAAnc1seoC3N1A3jNXYp7s8pevtrUSf1yFa5K8JQwNUnQVzU3wm48zPfAfGRJZhnUXLmAfRfZPSV3jnQpYwQ11",
  "key1": "nCkgD4P9DhCC5iKcBdFQ7cELuYQYw81zQ7ge5UNWNdVQkNmJxMmLj6dVMu9UbgaYmJ9vpCZhpNuyfVut6mW7sXu",
  "key2": "4GKFjLvS5dpgwEknCdVUTsZGdabaEAF5cJWmvLdzECaiQt4eCLzF3WcA9aWfY7K9GuL2KESrYod5cdfVD6Vntwf3",
  "key3": "44H31gC5RwPfEtHdz1L3xLEkHNyJ6vEyqF261rVfPLP93ERNYL6wd647AA9tDeZtDpzrDaBPvEQMFjxTd95HVuQL",
  "key4": "3GAqjW7nFLQcNyMyGc7zhAZkcyfYcQW52Wj35mrB3rLXp4tBZB3pYUBeNvFKu5mKX7jBck8rfbSAQ5XwD2UbgK7E",
  "key5": "XUoSyQKaXgZ7Ryu5zxgHfpugn9PGdcfwKdGcZmx4AK5KtRmzX5NhEFcShdEnpTzNrtxKgXFmPoy7hjgS5do3hXU",
  "key6": "62w8XUQ9gUY9hNm6eUbaRabJh3tQuA9fRqjAM5dH7Wvmf1fRhVpRDMMRcs12y1oXrmRpgA6mp7hwkjtUP4AxX68c",
  "key7": "5Xf4P5YfGXyYb511R5NDn7ENbGm4uBuvKnX2Q6Da4zbZyT8UCjbnn2gbkTzpKLWtXFPj9h5AWs12z5szc6z4VqGx",
  "key8": "PYCWp8mZm5qAh8F48xqaM8HeSv4uPR9yXDc9zy8iUeJhe658MxRPX15uGktmAQQT7wBSoUFLQCEbVHmK4JQ9sxT",
  "key9": "2jFio5Usb4DupDicwT8zJZAKMoaz4EH8SiPfuvkyVxM5jN9GdDyguYn1MF9x2BJhiFuinB1kCYhCnygknyGd3nqm",
  "key10": "627QVx5LYKxLJp1M6H7J5AhWbRAGUzXZiQ3ND5nJMaKq4s2HfjxynriTvNS5rjFQcJWjY9RJyQP4X6Tu1fTSAVgQ",
  "key11": "4rdgjxEbBtwVY67zsSpxL4uNbWUPs6wHD6yUzibLkruJh484TgCVLTKbrryryQZM27KBHP9CeU6gRqgbNnvgcgv3",
  "key12": "xXzWH6KEp4ZU6Cmb8Bg1CKDdCVEesjj3bWiwiWQ4VW8GEvmRwPx279wc4PLDA2FwRibFmyC2AvkxNnKbshNDjFV",
  "key13": "2QVDrTQ2FrePqhcK7dJgucNLuXvWrTP79NkzKniTTDGn6xyQiAzwwSLeCsqhdttM5soZBDeTj4FsMbEftJsJPYRb",
  "key14": "2mqbqznbUCNe1mQ4ve44bmRa3RbGoCGyhYJCXDRmu9vhDh8teD3R9ivkBx4Eiy92pDuCVvUE6Cf3yuZj7JZXej9M",
  "key15": "5iC6WNwAPbeSKV84zv5QXQZiCM16tUunjSeGuUYqz771vPM5CztRsmH2ianmqPAcMsC8JjYg4v9TGFEyXGtm424H",
  "key16": "4dX82aaUswT2Aa65zDJvreZ42kNK35GRgyZueme82MEPTf9mLDhdVagputycm997NSPBNEqPyNLwyGAbBc5LwiAN",
  "key17": "5wphPFneJMTdKjg6LAR9W9io6mwamkyMLJBTwGEKAXz37ARQTFvPLnxaQoMTgYyuq3NmuuNzdf7p7QPqGxzBPKpo",
  "key18": "65tPWxwV9uops6cdYZo9qBd5z9cJCPczad8Wm9kJEKTAvnxkexy3PscSXKoEFju9ujhEUuv9gqWAKhPd9k7j4d6L",
  "key19": "5k7yTogu8wbNJWEBnyZM3C88yGZGswz6BMtfKFjfbdPmMfm4CgLhWR8dNNiKravgafq2wuHvq9QoYDz5d4ZN8m9i",
  "key20": "5MmouB3irG8eYYCwy7VEbEPn6BfH4ChL8xfD7SfMxcSthCXiYiWahNy6Kj3akeghuWmNtGm3emvrffEZz2cCbt21",
  "key21": "WvgVrLknZuXaeXQKU7MXreNg5bJhEnhh8cCvGEVBEZNSZZZv11EbAvnQh8bYPLUyqLbeeV4WwLFKkf4PymCrNCC",
  "key22": "iXZacyZuxdTcnuXR5ZguZUwBm6Rb98MoszJvdKcoWWNujRPMENyR8zomoiJ5WQjfgSbnx1cLj1wLPfrSRC8ctvR",
  "key23": "2CmLnimemWVM5QNVN4wcxbzyhCnQ96SobbJ1ZpPND2M9VvhHZnabWh594KvbcpxRiGuXJQZtTL4FsoHvnWDtBevu",
  "key24": "4uT4fm9DsCYBnA5bjvQsSL7mWjx6TY9g6vLfNtS8uWk1mgewtWJADZ4wycPiGnyyahiCEeekXNm5zcrCf6qvvBMW",
  "key25": "43NLJ89TW9qNChFriiyaxqos7k32EyhaupLkhMFDXYrmQrZKreQVchykHPWbPtAYJ1LyS9vWmm7zgMSRHuh3XS63",
  "key26": "TGEY3wTutUbnrjd8TJSxpihzvCvrUePuYoPLRNrgSRbYZDMaCxC9Aygs6Vm6mjky7Q7PPMtQcToPPEmUBtwKRLU",
  "key27": "3Ygzud1uShbmRhPz8J9FjzHX9kaJtZCwMaN3j6SggunmiSL4o4xwVCXmHs8SgXVcWcqzMtG9rbzy8377881qmQX6",
  "key28": "4iMegmj8Yb8iaAUZGhoXML8VoZ1Ag1MwMmiavZAUomTeFCejGjnJspmtpufHAVnQUrBchq9SRMpitnCzYtBGznok",
  "key29": "LsDo2RJCYfoeDurM2r32ccnFqfdUqafpT6ttW1kpTtneghjeHw36pZtfPcm77oLL24oWP5FpMvqp2mSztRewixY",
  "key30": "3x16dfEJFSLpdyeQ9n54QRd4uymyyLzNgws6xZw5ddjg4QM1HcdBamNd4jeiRtNBTLtMmb5e2ZnZuRZ52RsgkHWG",
  "key31": "3191vfowDkzSGcqBWUYqSkS2ZkgB6gKieQsvgVthawzLvn6HNJAdRUH5WqPefVMvUe9eJncLD9mNsvHTabUvCADt",
  "key32": "4jkuqhUSfMX5P29Fnes7zVaZGuwEHqH2sScpqrM5GjUuqLJWHScume2i5oPD5zjycFCKMVhGRxoovKAUm6hckzU1",
  "key33": "3G81y94GL21Z22ZhotfggmftoytdSxu9vkt1hvvDiEwL5RGj5w6nzd4wmqPaeEANktZrQ172uBtMyFWuiu9thhN5",
  "key34": "4ph9e9eW3p8B9qDBfn8f6MJTwamJHCS6umDUbpQd3nzySqYSH8YYKEsuQbWB9t9HKav4FBtJkkf5UkU1Q6zsHmFo",
  "key35": "Gok2BRq8TT8kp821fB7HCyhPtULeaC2aW9GdSg8WUj2K5sRD8ddArUx7596KJSVCm2dBnyUAHRcmCaJ8bbQyLLs",
  "key36": "2DfGZWPzFtiv2HXd4wfNRK2Af12Wz5etALBc12nCf1rysJmM1Dwq2efFrUmzh7uZDkVHCJSC2vKr8Yd2Fs6qD3jg",
  "key37": "4gWBqhkPxsMaxdUfAAoo7iKo5VQJUwS3QJbS32eCqw7mW5qFTqr1DNPguGvJuR2CPFuKV3HnX3SY9DwvnttnxAmz",
  "key38": "31bFBGXzXH9inMPKn4FEW1zonB3o5S3tdaMFrHrokvW3a6sCRCrFzo9DdWamLG97onLUetFRysKbJ1fVXadELKFR",
  "key39": "4FrR43bTtJFyLk1huexV11jn7SLBPH3utzSmUMFAVZovmy9Lf2QfAr4CLpMEaU7MM5HL2Tdb5BbWCwZmpba99QMR",
  "key40": "2DDctqrFczFQHUXM3G3eVnuSsZ3F1TwbJmyjKKLeeZAQABLSfyiX72mxWNLgL4u48FEM4ZZJJhwtt2usvKLx6SQF",
  "key41": "3Xybzg6rwUWgLoVvixf7eEKcZjEobSTUNfU5w75no8wyDCMEBFfj3RA5P3Y99rCRuYCjVu7Y4rwdeFozQWTianZw",
  "key42": "4Ud8KGQQD9ytYUo5QUUecUPXq68voURQwZYpiRFFyJhT2soJ4unqaxpEWwFG6BFdmDpLWMDHAqV4iTRhUbLQgvpk",
  "key43": "37gy1AJR71fNtRYKPyc9ge5QcW2jYXsaAhe9Rgwtx4TfpX3Qthokb4MqbxLYBHVa8xxPsg1sMsMKmdEWmyaSPZKz",
  "key44": "4QH8SXXtqaz9Qeigz4YVijHbjAanJ5eDJgrDfih5ieqLzhih3ByEwJjAPBz3GdQNp6r2XZbJeWJrKyF8JJFmhG7v",
  "key45": "31ngxejNujwCStvWPKa1WtCNSmzmX2L2NUDTZwtyctwA3NrG9gma1oxX5XAHmpHxpj8ixreW3LJFASHkCYSp4DYR",
  "key46": "HN3AJofvuy6UY9Pnvn1nBdzCXB4EcRFo1crawhtY13jqvPT91J4Q6TNBi2MXf2YxXXPNpwqFkJJom79qA9itfai",
  "key47": "56NNupCWW3CRFTfSzZ3WLGmrPYnpNAieuAhJeGdH21ZRubFcb39SLfp9bLBEBt2Vw8piVDK9h3R6EUNw2WSZUGU2",
  "key48": "5TAnPxwdtjqSKcERfT53GqvSpkpvNdag9NcSQaaFMbnUhdcFrjq8pzyNFSXTvbDNfLZp92euc86Wcy6DYA2JtkCW"
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
