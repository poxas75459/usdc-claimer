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
    "stHoHhMWwQCa53kRCsAgGTZWvknHnBKh4WKxHEv84gXLgjgzkdcFfSpETNb68mv9U4Xnk5LwWWmhobv3u4bHowF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAh6KmaxhhXyR77W2bevpWd65M6UadqH8TuKB9orNJDDXFSLsm9vDzRYLykY9Qg9f3dwooRTg36tPvhdDMHbvFS",
  "key1": "PWjrTx3HvXCY7Kf3P1rusiJRxEQ94ELgw8dvwRseZq5pNqHctvc2FT8EoRcQbhcXc91TRBUyDwUhctZ9g8cxUqc",
  "key2": "4dqFWXoXUUNz64PqYC32gav5mi7uFTMYg973cYMTxSvG7n3kJUAgbsMSmefVnCLnmbpUxm19mPiodw3G4GHryz52",
  "key3": "4zwjuu7HKy9p3QKYxd4WG4LbTBQZjp5gzPvvhvu23gnCbnTKER4d2UkTb9NFxJWeXX9fT3kfjWyN9KZXmXdfV8gd",
  "key4": "3LWgk8PHdW8wnwbSLs4pQBTrEFDbizMCUnYTMTRreTEBwvx4iJFbfGd7veS6iAnqgQKQBu5hCYrXMDAd8ys31cGp",
  "key5": "F7B24pvAZHWDMkwKtNaoR7he8AKSRoU22HimLpXcWvBNc653HiSZrAK78ZyaQUyGAZaQb3K7gb6GzCwGUsuXT92",
  "key6": "3pVTbw4mCyEjDwB6eQwCJiE8qqPVRN9EDpRGrJAF7MEnM94eTzmtg6aX5AMjd6bnX4HpS3REXgY1ufDNviUkwvRk",
  "key7": "3oXquisGRLuE8PXaKmnM5Vph89ACuyfKssHHPhxH6RNhfRVnVz2Re7PWJGHti11J1SjxJSczKWQ92M2iHtccwgLD",
  "key8": "4voucyezTubBKUrnWNHkAm7SkDg8yHkS5JF8TmffRCyV4gKnXZxp86Uc3TTT6NLm1EkVgSbmAfrEoLUTXTX5sBpf",
  "key9": "P4bZ673r5Eksa4XXFZDtAHZcPhUuAXYJ6bVp41B6zCerAAEBiU4vwQcfLoH1Amkez6yZp9Xwg3RpNwp8UhiLZ1R",
  "key10": "44hEQ7w2DxXX3n3BYFvnf8h6BkprdxxDFPK89KjLT2SWUX1Yh1DiULR5CbzieeqKtaScFErn9cDLvGhF8CWSVCE3",
  "key11": "2T9qpmrJY4jhYSWSoPWESAJobKunN5JWeiLVn37nUazXhbfkQL9JZ6WLansMYvFEyJmmQ7eQ18qDygPB8Estvm5A",
  "key12": "2i86MDpT7eVHkdPtYJmZmQvxJoVwV3HuqDjyuw1Mn2PLejNq1nJcJeeuQ9816m6r5B3N1ZyHDWwnBF3H4EduFRGu",
  "key13": "46M5nFMXYQgHgTfGHdsWRuRnUuUkU3DDet5fwYf46dqZ9VmCRnYCiZMd15mxdjrxp6xdi2o7Z6vRjbZYbJGHiee3",
  "key14": "2VLhH2rNoaYfMfEyzubT5dqo22W94voTDPpLBiKEMoPxfLpMS1dBt7mxiiG1HtUxcpkyvGUphfpDmZkCAxeGCAFP",
  "key15": "4Grg29V23RiiVGAiX6eCUiZg6ssaG5q6wio9rkyz9tXomMyg44jAesXjeE1s6djnVeUWYkumCSu1VvFfXn3w79jN",
  "key16": "2yETFWUEYrcr8tgjfGzvTAaGz2Ks42avu4ETAB1FxNb2G4U4vZnEwi4fiP59qd9o3iRD1FJeGfFf5eScHBfVvJPm",
  "key17": "5Y8Rzxs84cBCvGnwVqsPuAsWM6kbN4R5aFo13tXuGWAdiwcVuzzuRirQ7i4xSPnBZz2Q7ExjUp3EjtwpHKdWMdzU",
  "key18": "5JCG75n6dmDJCazeQAeWnp3P7jdWQKFcFirZvwzQtd9j7MhopyMsgCnQYfETUgd5Sh8gWZGRD9BoZpsALNHDwr9a",
  "key19": "4isLexrhGXyezU4UGFzKV8gPN9UQA93oykPAb66jwRZxtn3ZFBwFgBhWifMUYan6N8U4WNzPYYX7PNDD7WoNNkrs",
  "key20": "5FVAnHurb719k5EHnikmSKKH2cQiJC16N5TT5ZwMiTJQuWL2qaSDQUcFeQtPmmW5XYMhhR1itvKYJrwSK7myaRgh",
  "key21": "28Cd2hChHYrhPNgusF6EjoEhafwiujsbewSyuXHpqFKeC2dEEk8acsYkLyyApXrN9ikJZ11pFfG9hABPUA3oX4uu",
  "key22": "eEGEKPTCArseWY1Hsq2SmdgoHoS8LBftVJh3TxwdN3juELPPWUu5hQiwMt6UnoiAoop2FGBjVZqeAocu4AxsVJz",
  "key23": "XWGrQrUZTmGF8HcECb6KpzqxDScw4mV6E1uG4Dj1TaEh5qw7pZKRENneqAHUFhwQn2xGg4wQQTA7f7Chd6foXo8",
  "key24": "3dnsdeAkdrWZeq4pCxBLd2bfh7jaRVPGSVodNZdFSLKmzEyWRK2qzRHQcBCkeiapcFavKa2vHRQTDQEUSXM8M5zW",
  "key25": "4xLaX52aq1Z5aCYe54PdiWuyGe9Bjb6qNqM2srifibdvt1k8cs4FwtXQ5FeGq6mMZCVqQEonZY71NUB33Bv63Q9A",
  "key26": "2rYv3SjcQQo81c2Ve9hySJVvdVeigvoyU22hGuWFnUCpGyrqBDp52GvND3K4ziepJ87Pc3qr5GQDWLehnxsCrs5v",
  "key27": "axNf6oMTVt6UeJAXtGnrpC5zzb5jHt8hKSrWUrAn7oGW4xHbT5LQaFv5Dy9tdNZK6BXFVUZD3GYX1vVKwEKM59R"
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
