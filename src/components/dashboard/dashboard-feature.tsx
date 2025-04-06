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
    "vrwKWNHi7UV9QmrzksEXCfE8Ee5BAqxDp7MMzvJjq4zhHbeaK64zo5T84Jdfp54TPC4m8DpdLcV66jPDYuBhGoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zz9qUgSaFxTqChF7KfZwYswz9oL5uw8u44cQnumpdzCUCxwgecCmnHBarJwajk6nRkD3e6YC9izeMVjX7nfz6Bx",
  "key1": "5HG3wRaTQXK59vVn1Se6SDrt5PZs9qJyAbd2cJatWXf8E58vgPGAramzFLy8HmiANjmDnB1qKXwAiKR7qKgkN87M",
  "key2": "5sV9TwiU717FyQ1qUwV1gJktRqkpcKAfwRcPPK8i9GfBcPwsRQc5Gxteku3hrAmDnx3LKHmM3v9wvyHu9hdWPTzP",
  "key3": "2VDTBgD1Sneo1RtffbiyW1ciHpUkfpaog94SiSGZAqstEfQqTHg6buNjXsrQF7XYFh522avyFjCysutHzST7ZrRs",
  "key4": "3asqwMB8LDfhBrAzWNrDJpiwkuuQbxCdBPZstDtXC7993oTC61jq6d6ztorUzJisEcHWC16kn4VNj33k4w6j8NwF",
  "key5": "3a5J2aoccGATNaZYerLFfw2an3qPPGdrb5H3ggGTgss9LQxEAwXeYifrKGgMasXNEDjWHRQnQnR1b9pJdpHVPGZi",
  "key6": "38YF3Eg5Z1rWx8EPAZ4PWAsvp9Xzu1Fm6fqcWmp4wRPDpEJseYH4kVFhZ9uBB5VAReGhT6mbJ9NKQgoRsWWVcNJQ",
  "key7": "46P5FjKrfgUPpcpXyNrEq8EVb6Agqp7D8sM6Q1YYG8QJgWJNSRW8TYcs2UbhYGLsUSDT5ESyfkYAxp87yhdum4j3",
  "key8": "4cMwtXkp9ADJPw7froWn78FtGBcwQsS7oCwGuAci637nGD3jLbZjZ7Zrg47nH3tnQWyx2GpQWRYkeo9aFabyAMEn",
  "key9": "65ZdBYAf39uCvsHMP9VuiPk3oBs4RX6Az4bMZuodU1zUohZBX7ivWsH68s1DxM8Nocq7Us7sc4jjcHtmQEY819z7",
  "key10": "5drMhn3mThSC2B3tm6TusmHHAhhbLkVHi1x2PwePyNRrw43hwJBe5ASkzWmBhX9qiuXttNWCjnxNjH5WpasNm1kg",
  "key11": "41GpWdqwse26Fi3F5W2uRwA8tgYUtPKLuggHRmJPTbN2e82PRo2kzWEqg3rpAfa9atYuGPbV4X24WYmfpGjK2GfR",
  "key12": "2SotbXXgPUgE8ZHKmVrqjn3xGmTWvL59Jh3eULxmcsmTCpcsgvcfCw7zqK7nkbMrj1xu6F9xQymQngooEanEbsf",
  "key13": "41E5E7Gf9FovpWuB6NhkWGjyoA27q3Ua6cZz4HgMBiViqaEs4WUuVeHauWJ7YyL2WxXm4vqdkUhjAJfDJqvxsNmP",
  "key14": "673WzFDywB39ZuCGFEc2dzdhygoqCTPMj7dBZuGqFaW1zQrLE4srk32cMRCDwpWjHHr5eLzmQXhCWGAy3dcAj8hY",
  "key15": "47QqiVYKq5iR7mtcAZLtTFJGJxujEGEjS9FZawZ4jDBbCc7u16hCixhUAE2X2oFQBj1SetiMUuXU7semYFJcy6mu",
  "key16": "4BdFpaeakX1BBBJzoMFh46QUgkSC2x6QaqSXafhvG8jz5DP9M2V9554qdhisjA5unR3qdXZiHVd6bWCSgq7fH7sc",
  "key17": "3SxWMgJ5TFsM84PEek4eqVoX1JuUKy9uasjW8F6pVVk8RhK7kteCrBeQa9ToCxa5RD5RsfuL4anRnYpc2eg5cxuh",
  "key18": "3J6tHznaEgsMnMYcvTYoPKnugUxhN4boVg7VGkVA7ekoeDx4kMc6PskmirXFNW3apnf6JHGWewdeccC3PhDU6tsX",
  "key19": "2VXHje2jmQUH8cSyijnf6L6g1qs4i5eZhHRCMpknF4dynNfRUwUrSZvCgFeg6R1na6raNrmRN5tG7LHfaLJ4KptV",
  "key20": "4cfXHaCFYJpw5KMV4BqZvNYTaDBEyumsecHvPxv1r6an9Bwx8nW2JCEM9su2ZKJ2dsH4utgyNqj8refPMtwQcb7E",
  "key21": "5Mhz8YMakYUdjJPCLKV3MpRomN4Ww6RFNtcvFNUQoMREhbC61Bix67TPB58Hew3RgzFAVknART78X3fQiUKhSH5i",
  "key22": "2eMas38zChQNRRsXpUSWrEgt7s495e7zNaW9APKnCpB73AAVwochpGJq7SoJny7HNhgqCP1XLEY51mH5DWpq42NG",
  "key23": "2uwHyVo9Kg81QhP8A63MBLXoqxdMP5yCgZY2bx3Sp4SrcWsHB94d7KQ93Kk2kSGMCvBDAo9TYpgGYDWtBGBwFNRp",
  "key24": "4wMCXgFzAA4wByZSS6GNUiXwdmx1EeTgNQpjCkHrFDWQpgdCN7DY1zkFADDZjXG9vxqu8Ui3nqVpKf6AW5xAGZvK",
  "key25": "2otvgJ1WKai2Bs7iGuXDoHaADpRXQSzB8GnHXoFMjEHdh574Ls3nQ1MxRLqG5dyfgHirFm8aMjWaEQEG3TF1Cioz",
  "key26": "2wpjVo97Ekdxua2pkLvG2yis92cPQ3tY567JMADdXwhC1AW1tH84StjjZTAYTayRWb2xkbBMTdvBJJqjvbAqysJh",
  "key27": "3DN2tdW2S8hAjAZ2TgSsFiQPb39XC4RvCowwCLmu6DUdC9mj44kJFjYAqQsQ3q6vHbuPmFHvKjG9vs5WB5193jiF",
  "key28": "5KrXNf2UgdY4maAwn9UrNWVWz7egc7JovV52rPbHEVFzyeP4FWE4BFnyTxTXb3FeYZTyyFv45pKiXDnUbh3H4UZ7",
  "key29": "5mdU5qrzR6XV9Q7HLdX5EFg4LEqrpsoFe1ZLVPzyvz23AskYHkphVkWQ4TGWxyuCqcBcrVxMezK3g7bpHbU9a39",
  "key30": "3e6cHemP3mxrSD3ZS7suiCzxH8xEpnAihedV5SCbBUBrFZTP6Ze8MbSFSzTu3BCBaUUgH17yCzhL75Tw98AwnLSp",
  "key31": "4SXZAGyegUF7rZkX6kETqRJwR4M5aESmAUZmrqfd9p4GEMkcgsXPy6vd6DsQnvFBsKTXYzzMYWNoZsxC6LT6uMFt",
  "key32": "4Cq6XjG2YpSNH1xDzDxxnhe4r96uMtGxSuuvusHNvi3sJuLqVA1EmQhUSVC2rQKZKnwgdwVY6kaf3nTYYWamFnPp",
  "key33": "2dHqLeMGVpbNNDfL4yyuG9D3Den8CgpR3ropN5ZfQTLK9ug3iYd8EKk4LcAWUwMTR8EXo7PvyTChruBhkM9MMRLp",
  "key34": "27q2vumhtZ8fMSJDLPPC78ABUjkaaBxFRddqnnZrKYUgphoiN3kR3qa8jj2tj9ttYqD69UrH1UQx8Z5o4wbGRSro",
  "key35": "5va3sUb2BzRhmgx774ZCi5apsnnHMZB4kGo9tKXz94M5dC1V6NGX3vCW4f58RWdi7etxk67qtJDAVaaWrWb2MpFK",
  "key36": "63V1Py3NNYP1wDx3g5TE5DFbthWLs4ynuVh4XKL5saTZdL6dRyo7jp2gsQWt5cB71ZNVRcWmNtk6fQPUrWUfRhMS"
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
