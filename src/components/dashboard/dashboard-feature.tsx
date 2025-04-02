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
    "YNyWguZjXXYiwHSpoeg6F6GiQLwp99qn88q4h9YymFCgmefgDywQLMpyBEXzGrstRWLAexNX6Ep3bHzcNJqd4aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjMa8iLrAtDEqLd9NjsQNr1NBsxtcNczuciXHqBKpo5eLGaskJ2MBrUKX5zZ8Gm8vNKrExoivwqiH6yTAVhDtv5",
  "key1": "45Dfyr6SxskULMUi43hJXADnEPgPufKKb9iBz9DNoEuhTJF9Xk8Qe4MfcEcPJ1Y69f1uimFhdVnbwNAdJaj2Kymp",
  "key2": "4rXyqBY51xT9ANMMrG7Ss8ZhgfDWat6ovooAa4xBX6Yj9GtXh3AtmtpeAsMJ6Xrv9HZKkiCdRWQWmdFWgrmrY7k8",
  "key3": "5SQDkEqej61aMYRtcUaCcvHvrSUioVM5Bbi2r3GkWejLeMadfXFjNWVb1S9jyJusNnSA1L9vVCV1u4SUW43GLZxj",
  "key4": "2ZpduXBFkv3VSXaEq9HPMJiaN6wLh3Nn4JjSPH6YLyCHphxMe8gx9JdM6ggd18CU7FxGDPfm5sq6eyepr6SGwxF",
  "key5": "2VqJAjLqXgeeVjCH8MZ1mCzyUa9FB64BT4t367SCrnJqb7XLuz7atZ5KF9FcKafBEgQVJ4PbSyyGW8rVYvhWq1Ze",
  "key6": "2d1veV9qMR39Gh4zyezK7PoopdWiG2GY9HYVXTy2BeK6vQeLH9zknLqWLfZE3n21Uvvm5tjatmZ5xEK5KZS3wre5",
  "key7": "v6MhW6LHLV6Ab4riNp3ZcmjsACpwvahUXs8nQbZYzmAuNqg2JSp7TPQ85vojPCQSxa9oG7NYLa4D4dTcfWLeTeR",
  "key8": "56M84m2sPs26gxuiH6RAQsnyNX6SptM3rYmf1MUoVH1n7B6BRXAVdFcNjpgFisti35TX6q2NLJVDJSo4RnfoVv8D",
  "key9": "5KTWqiiEhNjH3An7KA3Vh6GU3zp2ZvUERtjjs6gxhGN1s92GWXWAARsRBQcqhKC6fNJJMkz5yGtvUZKb2K1KraDr",
  "key10": "5wBBdfrzjTyvku1TTyXvgL7TgffP1CvMcK9ysf4UupLH7TV7k3ZazoTwqHR8oEn7uEaZCz2pJasNSgdfjWcdWhAb",
  "key11": "44EN19q8GRzEWkKayFNUNxxCnQkuRozSN8Lrkdqj4WRk1zutzjfz6vMtEtgA5N1rnpJaACKqzLtbkVCpxEkb9pXq",
  "key12": "47mxPQLJgVuHTmL56eaHEh3WrbUMQD6ruiBUXDjmUr6L6A8tbk3vhoCPEHpf4SQVGhXMzDBTX9mPR3bzuLETJ2NQ",
  "key13": "mZxk7yu1ZBpa5jMc1Lmmw9x698rNLSdam1YhFhjYZWs4VLKcovTWv1y9sNTnGwdPmUcyp4fF2sAxjp4Rao4BFcN",
  "key14": "4RfRPXHc2NVVKr34TuBsX9zdPHjD6YAe4u8tbkyBAvSjGSuoXngA5c8uFBRyQdrbhHQd8tbBkigAVM9Fm16TnJJq",
  "key15": "FPJqaD99fmno1n3gQheMnuPSj3dFxeFpEcDHyo1F6WRi7Bm497FWN87Pas75sTTG3SsuDQVx2qvrPk59NAbCmHr",
  "key16": "tepjNH3jXnFLgTC91TxisZ2YgsvxKNTRez6R6yRnBGiarg5JHt53KZAPNU64N7SgtoxJ2eCvPqkAUJ2YKwoEepn",
  "key17": "5cP5udBKfKvZhJQdC3bWhRApKL44Z8ogm97gvsEqyTuQXxTY24vQcrc97XRD77EcMQX9A3nWzR3QJGZgsGJ4xEJ9",
  "key18": "4ux8j9RFbhmvkftMuXoFNejpTu8EZWshWG1aHx4t7VfLLW6dkcMqwrP8swqmsTwsmwN9YGWeH8qWvz8FBhm24RL",
  "key19": "39VPqc4YdSvN9v9sJS6dj96NriDkDAPyFbmoXbTWDt3QnSPqPHt8tffqN4rqve6mRNvKpvGwm7Vi2zzrTyRBm4eG",
  "key20": "3n6gSFAL3E7TnHgnJbqAMwU6amrCQzevc814LssH2C5GRT9nqP7XmgZcQYGPxmGgixbW5WXhA7XvVCWrWVAAEcAX",
  "key21": "5D6gZU1FUYpiaWQ8tVTfMeg56yCiqZLeH3U1HyC2ALAYtbR3hhyjS11RgvbS3U9kSvVvxSLBZc28QKy6PbSD869L",
  "key22": "2KZcJb41sXchtZ4JgPYvykMMomKbY7eGzjLVF3BbWx8Ta9ZTxUABic2c7bSySBeHsRAAfynX598ST9SH9g3whtDm",
  "key23": "q3XpJHjHE8iyXnFMjea5pp9oC6CcZ9bAn89D6DB8CRKdfnZa1czccwfNw5vwdbrxFL9o5FqTatUQg2uvtoocwCJ",
  "key24": "3K6Kkwho3nruxoAEj7b54Nc6dZdKyDyDiT5HGc8NMmvPaS1jFk4gXXmxNcqMcDvAtr84764s2WFfVZkAh5TWWM9B",
  "key25": "tSKFsjh2MjcoK5kjNW61s1WQPVEPQPeo4eafty9fVGaJQqc1Wxrdq2cVXqzXHHUhkMUm1b6Q7cL8U5v4owKu7qS",
  "key26": "2vXaVXegT8XafYH7KfTiG9nyEwLqvvkuitk3nwmqV8ozv54iBDTBdRHdkQ5J1u4jSwkVnXsHio9LyUbrHuVQ5EoY",
  "key27": "4NgkzYGodzM9qT76JB612gGcJ5Cgx4tc3yiULb3eMoYCcABAiveLXMc1BdGW4hdZc5H4iJD4pzohhiXSAWVTSjX7",
  "key28": "2mWyuk9YtBrTezd13HaPeNFoYRoWYqnceoNcy4VmjTzbK9536vGhg57AhDwZgtF8QMg14M4vqif4vVYgjwAc8AcT",
  "key29": "3ZCtJwmDVobcAktif8WBBZJqYMfTXUv44qbvLQoHLwmdSJcNTUvQQwkYTwfmsGt3Mpt4i2xXmihpFz31Z7U6wdyu",
  "key30": "Jt7ETX8qgJR1pqRwD5AXpZNnBxXiLnVdBB6YrQo98GDPmfAcXqQQiNsifTb2wSVc14tm8A4mqxbrGyz7myucyps",
  "key31": "2fDMp1xe6uq6T77RbjU3LFodUUhGNg56agWFTFJgNtkhbDJdWnFSYNthcW9rwmAtEsog9ZN7CdaoorujH9WSmPf1",
  "key32": "szbG2xPDSxXddvwqGTMWtoHeK3d2zdg9Mp7RrRdsewB7UqQp5qzzhB1mWVZins9jZHCF3hBRVx2Lw19TRNoza8G",
  "key33": "8GVCYwEi5Vf7DDQMedCXAFcQHbYFkrqxfb9gPThdiNZqHr5hDoNtZusYQMx3HvKmKugHvsx3aAsNe6fdvD3ViSc",
  "key34": "7BRfdppPZtzvNdWi8RzLX9iiGCa7xTbf8f3m2znxjxt3SZVz6YsqneybjegNzWC9CxpZQ1rJwt4v9Nki6yKwf9T",
  "key35": "5DmscEHMUwriAzCTPKc35ByR6ZPd5gS1eURg6D3WqYTgTpe5DHXagtTjwQ73zSTp5oj922XDrh7CK1N3iHyVwFvA",
  "key36": "5a6DLzkQMzsRX9oHp65gVw67BqeS8SsPtVELf8w6i1PA6JYBKe739Aqspy2G2W5HDpLJXAQaqyYw2viFDyKHCePR",
  "key37": "3qLb6Bz4sV3M9AGt2pmouDLqxcnEP94tpWASYK1gqrZ5zYP5UXerbQCWd5Y9mRWtkJGjE66eQRgQvKBhdTUMxNyH",
  "key38": "5SChbViACGGuABcuHZjArv3beMBtRskMw3LeCKndxHwA2GUx3MfsaxZH5fcDN1HW6xSn5h2YyBCCy9gssq7yMR5D",
  "key39": "5KTqkHbiAm3ozhNK8heqXhZYcQBGMkvpeU9PNr8uYJFLQHNGyVaBMrJ4zFz3hraYoANYJworXuiXs4RsFydqFwH7",
  "key40": "rjEya6UfuzjXusNbeqTatR1Lc1CFRZkzU9txyq5CCkeEL2N2VD1vEQ53pjxYWHb7QCEAvV9ZGXkqD6Hh67mVAAQ",
  "key41": "66zpodjRNzJkit6B1HJ6p3vNC2e5neS4ZxUMzR3ofTcorYsXSoFkQzg6KfJEWJeXy7tnfcYmMrSko89Cw6KGTQtr",
  "key42": "32tnzcgqy4b8Z3k8j3JfNRo3QR18mbxCsGLNixT3cWZjhsLe6LQkF23FHxW9uP6yshHnM4PzGdVub2TqJWa89eEs",
  "key43": "2RRAmuCMQJjyUQoRtcr1qa6pqDscUrfTUDeTQ4KqGi5ssgCMzxf8o4u8PFLqvr8s7ktVwVH7C5yVwVjzQeLPnT3p"
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
