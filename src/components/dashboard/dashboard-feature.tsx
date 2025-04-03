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
    "62BKC8HHPaLKEgzha3Y2eLHsRFmKmUJ74iCYyhuWXcjT41UUcmgLSFxCvtTY8co2AHC42EAngAYk2W2GnpytyXTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d8F9NexvurMmSFfEsZ67RdoUYBRGR8UQr1M6RkotmHjs5Pg9FJWh5e3ddq8NqkbXTe86rxhi4kCT5TVXe4UsruH",
  "key1": "53AFYJVjHDLgjdxroJ8UjhugpNA3nRcRZ5RHgSYdFJF2XN9BLo8UxPUGDsaZ6Fgam5DkAmLDNdkZGCVzPTU8EVfq",
  "key2": "5KRrvCTDyz3MKr2da3tYeffx9MZ8QSB3FiP4mPFo7hb2JmDa26ivyaAC6jaSzob3bc9oAajkWmUNb5w5FEkgpXj1",
  "key3": "65n57oJnCGHLT6PfJwQ7CZc2inE56jYXBMvr8AbCyNbrAi8xEFSB2R5jBNKPtZ3ztBuEke3pN4jWhXCxspKzqHR5",
  "key4": "5W9tXjzzp5qmFg1SYgTScF9vVNChsVQmuvUwj1bgqQv27nfvEZqJupDUkLn9XdwJtyvy48mfQ1o8QbmAxZSAYtNy",
  "key5": "4iqwUDSC9HJRKg8rsBqw9SdshEXTSHAVnQyJ1Le5Uv6sVVff3QVLW19LXGk636NboepFSjbLuyzJLsrDSnsZNBRN",
  "key6": "2RTcwekRnHrCPcoSm8ULkrKYPiUPZVstZn3ZHsJgSNFiYoJem94k6cAmTDmjXBox558KNpnCyDYjsDkWHzts67xZ",
  "key7": "2rt4PsxH7Zhf3sS7NgUXaHsuSVQgEPBZDcSrraKKJx8vqebn9DKtcD81LvfE6oR2KmtqvsmpRMLmae6zEQciEWR1",
  "key8": "5Cyx4k2MNT57ofVWmowCKyd8ovuaPcfXUEgjkrM1Ujjy9f4Y2pG3W58PsS2MJ4SmaXFJCVK4qdmNa9RnHnH8QW7u",
  "key9": "2BZ29Tnr15ca5iH3dfXeE2BvLCWWCxK66WeTyrJGZX4oQJG7GLdMrbymJcs2xvRwygUfxmku554GwNvCr7u3WDfb",
  "key10": "4KUdRNCcBe1CCSGeBaV7BZqR2xt5gyPWDhd46cw4ZKo2fDdtZLpezXNgqxvVirs3aAF8W6dy6koRiM2BT1zW6WeJ",
  "key11": "4rue3tz3v6PBZCDzkJP5jgPbiWZCEqcPrsWYnSrRmT6FiXn2apRbzjuK75ts9WTrHC36vcLyXrqDzj8GYJNtswo8",
  "key12": "MZhMRVGaGz91DEiEj5qWMjztAtu1pzVGVF1qJxKr9U1SLS2qDEtYtN86NEfzmUJdKpwuvgpgyY8kPjZS8ztyPSe",
  "key13": "2wyNDJZ97CQ3kDvYJ51u8T3KpcJpT82Pzi39xMKqhKrMLgGprjgMMiot3QYY516RFW21dAshPCBHLS8j96WPX8Fw",
  "key14": "7fvBCvuxdeNbK42m4bvhMsAGSTgTrnpXuBte43PRF9WkVabZLzNnQYjAHNAeCHmr1386GdVY4713p5R6yxPQZ6R",
  "key15": "4TteyJ8dfVhAcFKAfLcrD2KCkhhdnUacWfMzfXDypupgqAmw2SHo8azVpsDC4YMgfKP1Gmfh8Y3F4LnQ64oqVPTJ",
  "key16": "MymnDVwjKN9PTKYjp25cDXV7mrNXEkzp4fQaGVyBbLXDgnHW6nGE6a4ZjwhLtXUdqXAXVgUBSQbFUqJxe8znH2H",
  "key17": "5TuNUY8JhetexJg9Za9HxPoFD4bc8MJeoTSqXSGpBeUmgfvkxucaXgdXxhLgKfwR4Qbqin9yfmEX1mLToAaV9FtZ",
  "key18": "4cBKQLxFgsLpiDEWywZm9T5kFv63VcpUXYzzLcdehWaERRhbjHY6L5jg3STLyy5BWwGjfBX5ajTn5iRj1BzAs6LT",
  "key19": "4BvifzjVKdLWEXR1UGUNt6JhGLp62LDzj4jyKZhWpsNj672VEJ7WYN2k4LeVAAW3R5TrBs3cMS52gUPzRgSmm8B2",
  "key20": "ywLCWAJeu9m9nkXXieSsYcjAeutKFZ5cW4Enf6EjZB1C9C1ZA5h9sdioCnMy6MTX9SeGVt2tvoUVzTh5rebcqBT",
  "key21": "5umXezy7qLS5LhfkuUbJarBi2rbX7edJr1sEy87C5oZLLyT6fpGyeGbhwbHL5rm5Yh2gPW2wvABaqmuBT5mKpbF1",
  "key22": "3iZ83E47JXUjMN6nJ8Ld374RANKKfbiCE8cjFUiDSFiNDpYkTko32MeYX2JGMnp6JhkqzAS6RyqYTExoyMufcqnw",
  "key23": "32yuqRQDkA9sRCMmrntEqsWBTPV62zYh1W5k1HCj92mzdQkrFJsRiy9S9HwocSbqwDxhxUAGXEUpPtTJXXfRKSjU",
  "key24": "2LMk4QtaMEBae9179isC7CGhwDPETnJD4c1rgPQp7cRhiLPLCbRUJuirhfWXfX6Ljh2U8Fy5DZzCKsAQEUnEX9iM",
  "key25": "4iWLmSx7p5eFHJacAah7qHkvYpiJLFRrxPV6mYo4MVWp1EdNc7i3KzSVMgFYrrdgV16yCoFaag4qqwcoKe1QEhGZ",
  "key26": "2SyDp2zNSoS8xrFPXK9c6Q37NDVToSDpR3XmqX437AB7i3hFgLC4oxg4X4HfBa65Mu4PK6jzBFhkMyeGM1nzgxTG",
  "key27": "3sedhJLCLaSgESc2vhZrww9beWruoNngD7VrYAvnapZvfa3qERoc7fsmvCUtdgzPJY19YUrVHbH8ZFotRQSdTUdc",
  "key28": "44NPVdaFmLBwrS89VqcFED9TnKBNu3xULzciVakF4YTMKdvLnhUNL6orq6dSUcDw8hGPqcmWPBddV3a7W64SQadL",
  "key29": "3kZkqgqh6EvQ2jzWFc9FpWyQZZuv6nd7eUudpxpBLRW8Y79aBb9AWUoruuw37k1RtkVrun27DmnUJjFEvMawdgys",
  "key30": "c75EqQ1i3hgUxbhiksMCF7RJRAf49qp66jQPQSs3Uq4FqwcXFuDVwoXaoWjBBn3RWfnKbiWPou4JbkRxz8Fzs4P",
  "key31": "54aZQJXcv92ndHbA8YyCkcViwKRdy1nvaU6a4wwUejUfnr3bkCv6Xmrnr2cvk1XbCscy32HKJRmiKJMqpughE5m4",
  "key32": "5F9HTgfPbgMWhiJ6nq7LdrKrg8WLgy34md4ebJrbDzxpre5To3ctbfsW12gtWp8SaU3vQ67YjESuxCiwC6BJp8Du",
  "key33": "4cFZgsyLR1wbZnUg91nRiqP8fDgUjmjxzG9TEc2zxvfkS35BDhZ2HDQE8kqtpDvVPwpVXKjwKCvyzVToizWYJqdZ",
  "key34": "3JmpkF3iHeKAkfFLrTgodEvmsEQnPK2WxcEAt5ooS9KwCAUQFqgn14W9mFYjLfdcH1naNbdPxAzQ6ErMsLSUSwBh",
  "key35": "3U74GK41Ff6868VykFHomPS55sfPWqUL2w2GUo1yNWcTyGzrTsniQVELVRzbWYEgFZ2MMosnXqt6xXYgsm6AHDKd",
  "key36": "5v9gBfTF5k2FmZfJCeQbi7oGsiJDiQUpGS3AjAmtUDHVvtnkoQ2C7be39xtEi7dApg81k4HPh22JQAWoJt4FVYyU",
  "key37": "5P68e5R9SgwUTtFCZCxqnrwTgKwadvxPiSszsdS2xfatSi1XdCWDQXrATpZsyJetkw1Z7713UbCMS7Xmm9mYae3m",
  "key38": "62NN7PBUUyJZ5Fhna5MUwNf4jKZerNfcZuQZK1juFqvebhuLsqzuceBd6th88mp9QBVGyH5Ae4fjLjh5yHuHN1dT",
  "key39": "YkDcGNrNAJfLQ7HzKHRa2WUW25p4eFxDpoTwsxP8zNCqGvMA8vjTTDYoE4K9hV3JJZbkNqiBk2Pm6cvrwzZL7yn",
  "key40": "5wzbyFXamH5ruDL4VdH7oczDTJk6beYLqxDqt7bBA2CYYxhGY2S6q7ivbQaxr5FRKfiAG9cSQrfE9P6YeHTEaZx5",
  "key41": "5cu4gXmkMxNuyJhGCW6ZJ1rKCXn6WWLiCiBbs5Q5a3Pu1VyM63ag2YBreyabk9odooxbR7MdMx2V3LdGfwWeKLWD",
  "key42": "jETwJ8MzrBRBZiwPo9KWmdvd4hSvXREuwvmDwCMbHK8px7SHY7H1pdCKikhn5mTEDmgiPh7zqca44jwELgt7BGC",
  "key43": "3GUkAcqAQzH5H5ovJNPT6tLJoJW6sNchdNM7gaoCDYrCiaQwdXEnrvhfSdT3m3aTdAXKJ3fav7TddrgyGc6Wjht5",
  "key44": "44H32nf6KukuibSZCN9cTZL5uXixxX4Ag2Tj3E5HkHAPXdFQx9vRjpU7GKb3jxFHh5uE8NroPzUuEkeQujzY4MH1"
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
