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
    "YMvWQdn4oXUL7gL1e9MX1oLGUGDHdPWP3zTcSDLb9ict73t4bn9Afy38aWJ2hGXigKyBBPZ1iCTvHZK6aaexJ9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yay9sqSVQotYwG1iBKc695vPb8BJ6tELjAW6dLWiaoNB7apRJCf7e3yoQAFGbAfo3sRiHy1dKDsNxRy68Bnebft",
  "key1": "3pfRMd8A9U5Q9fyXZcQH6KDeTVevPkDCPnzhcdQLyzAD6K6MZvH3yb76QzQnGuShrhU52WTj3sEWu84fRdBndMkB",
  "key2": "yA3DcFoNj1mcqkXFgn867Yq9LPRk1ttgxR9YpVR5qzibq1gArEtN9JXXDkyC5wGGUU2o2zcpTyjrf5NeUpC7i9q",
  "key3": "4KFZvPMx23WLm44z4Cb4XvCoSUQczm5yDDcJzCotn7ZTKk712YFxf1BB3QBoytwEfAwEQseT9N3tTA3uMbNKeras",
  "key4": "2NS9FceMfrRXUQmrmeGtdJLwb3RPbEsJJSg9FvKYgKnCnDuVwq6EPMAk4myT4V4MwnwxNDsJ19jXFTUoADXMPhPu",
  "key5": "4MvxW9PuRC6UYUXoEjL1eL4Grx1KBJZ68ymvEV8aqUmFXYLWM2B9eNtxnbExrLbnh4N4LAoWbSZu9x8EjN7czALD",
  "key6": "4nJAkV72APeFmDnVc766tapXAWf8x25kvwfehiHtYhQgUouMUdSvQMaiJ2T3GLF5SYtzcYaSsgQDVY6YWKFGPoBr",
  "key7": "5gxee72UugMuNiYUoAvesCE7E4CBuijDNHsbJQC1cE4k6DsCu4sJfhE9h7B5pAm18YP7BMEQvmnig5LSanKrJC4j",
  "key8": "4tDYc9BMvq6fBKrjisdu7UhEvWot2Z4Jsk4ooUmxQ1kGxV6TUAWMoabQ82bUQe9iyRUCB5gUb3MUPj6yjetYHXTx",
  "key9": "4FGoajxrgckZzQcgqVURtTgoQrXN3z5M6iBgtGDhQTHkYdyovtbmUHRKhRD3rrhfk2ijkZyzwDBGLGn5ZWdR7yM7",
  "key10": "2y7sg69SKERiJ31bJYu3cR4gsHtJCFzQtSKx6JzqQeWnVsRCEdUoAtUrSUX3W6wZbnmEF8QNqoUFB38pYgdcYfpd",
  "key11": "3Q1rQxx1aXp17fAFStHtgfMULiT4FeVNTd3qB3MpTN5PT8uJowerKrKEE53ozD7jUqmbAPkSMym3rzfwRLJdwqMJ",
  "key12": "3sTzaaAXdxzMMdoFQeyUyDf3u8S3P6pMY2aS89hwswQPrsfdb6yeT1djgJ6tXx256w8Ff5Rq4vcHcMvhyWFoKzCv",
  "key13": "5pMKSCnjt6wUFzAbktiEcQ2PAVFHmA8i7SqYS54dhDkaEKxnTm4G6duLRz5qv4nfXTMmJ2vvqD5fh1aSTiKYi6qo",
  "key14": "2AXYfh1ZaMz6AVv5LAJSMEPkDrPwfnjCnJsCp2vCfudikNFn2BKtyRsjkVWKoshUXV9arQKKMFqw14CQiw6VPqjz",
  "key15": "5HDkSsHN8N9dQNAnXZcVWHQ9wASywieASRzSGJPhN1sdjvdBGp2qrVDnvPmDxemp7JR3kJGgLnqgq4S12Fn4mKBQ",
  "key16": "fyqu7W3g7pMRL6X342piPrHqdsENFSiHQe7tUAwMAK4gYezsDBGLYBpj6jkfueVWiitAvt9i15fVqE2hi2UkC8L",
  "key17": "2CgMTbwkfVRMD2xoonRi8mtjuoJqg6J5zknpPUh19cdLmEe9rjdREWpMeATBK6GahYpLgqP1sDSHUiraftj8jtsQ",
  "key18": "2WWnqDFmM6SSjZEyzfkDtDoWGmowD1YA4bMgxoCdr1yd72p85ZcV5G6m7SAjg1EBRHaLnA6Wxtfm6Ci2Lw172xa5",
  "key19": "4wqHnxjs1bbq8zJbquBgdFK2A1qxCmwcuwVKe4j3wSBaMerGdZ2wSPt3orbm7aJS6YaDNXxCJUi2biYYjVnd1yFW",
  "key20": "fv5ecvKJQkFVPXkbLBrDkmUwMBtxX1svS9ct3T2qbzDusuucdVFSVU3BfMnkTL1Sy2xyHvRagHtTUSUBtpyyxi2",
  "key21": "5T64QpCiJM4rQGCncNagrR7ZT4J768PCgULXLsh6k56f6Cdv8anFLk9UXJi5MrKfB4JrQfAyG3w7ZcAT6vu6fh6U",
  "key22": "Ec2ar8PsDWjUed3eoNugLWpDXktvi5NGMFkq4JAnC1kJekz1fYLMigRZz2y73cWFEoGCQkGMoYKidJfjYh7po3Y",
  "key23": "2xMUV8ti7PaA1GUnnNSqJACskW9XsBzJuVfidnUEuBiK9oeiRYopNCG6AFC45rtGJF9DuoZz7kKEeh8BvJNeJLgg",
  "key24": "3PyBZjxCpR9oSTvLy5ad38WdBqXMNkqN7aAui7pe3Z5EqNUAhscUiKHeHrZTB1hBLS7mV1TeKVye8KinF1zja6Si",
  "key25": "3V8HGXVp4U7qMvDvDyVQMxP8FJ9AqwVPEmfYCFwMp2gb9s8NVaqKnRB1b33dpgz68conyn8s5c5BxvcQSmrGmdf1",
  "key26": "whfcqwLypiimR2h9T2ExVWGBtve6CtxfcVVnFFFh1g69tNzMp2wswjNoHmoK7rhLmb5HnsnBFzReJC8XiairyBs",
  "key27": "23qRvFm4ik2tggKshHTZTZaBQqqpVP27sngeB2kS96ABwDXJjT9ARXfBXy6eMaWQpSEsx6J6cZtZZou5ETR3G5Wh",
  "key28": "P1L1us6DskUgqoGj26QWX6kS8GZ3bS2tm2jwZMAX4Mavq1Xw9kmJp5xeoTCaTyHQa3QQMqqX7UzJN8qPpwJMLwG",
  "key29": "5kdh14ByLc5UAVvALNJbkEVGH9bPuGwKDzbxrgBwJZ93zoH9oFjMM3FmUoRAbRDPXfMYENp8YBHGb2BrawutYJbR",
  "key30": "4uW6KnoDNdDETwV4JRPxSBChTMDcshw6TgtFSNmYGSKACH1CV6ySHtKCJxG16ZjSewKar7xnqY7x7D2C6pkCCQVV",
  "key31": "nyf8HncNk9Qvs1AGmsQv8pVs6gTMEyT2H2hw7RRqHUFewndamyQDZtmnfGHX1Uq85jEdcfkCeXNAh1haVUzjR5t",
  "key32": "3v8DXfbtNXExSU8X7eykeTy1diKAbeHJ7DkA3Bottf4sRYYmWJMLGVRinKEtoWTKcsYqNSUpCm2VFUcHF1Qujzk1",
  "key33": "2QwPjF6uWSr16d8o5fkGdtecHgJXSMKQfBYx1jbuE9KK4TJKDdNvo7SmQZDAtaMRBk2uM74jeSFekEqZYQu99mD1",
  "key34": "22xg5n1piQ2Yj3ozjgkUDCutQcFuT6dmBeA6YExi1Deoq3faJHxcVbEZLTPe9NQ2zvLaGqe3XweLsJWRZDpsRkHt",
  "key35": "5ZZ2FbJ2LwNbB6jVAGtM8HmUJZkp2cmNKzMqegmMAZd86Gw724XotAHo7HXciZSFjF7S1eFnRh9qscKfjgHWuY4H",
  "key36": "5wCZeRiQniAckYXwfqRPN8dLYGyygdQUie95urHrtCpYMf3sp5th9k4iS5nN8s2MUx7HJKma9jSYLSeAZyRMSxn4"
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
