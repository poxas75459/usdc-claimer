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
    "4sC1FwU1hEB8rkMGy85onc4hRySc6nh6Udrge4hnvtXHEwrRVgtwuHmdCjKTCkjEikfQsgyPJrsL2sT8ZCx7C5Yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PbQ3rGQgPgT5jis2meZK6g6TKy7yv5z4bBxfmUtcVQH52eeFVe7TDaov3rULJX4NopM5Ngor4pSL4yB59axzvCs",
  "key1": "2FosPtxJGKZ95GQcZWo2A2TGLGCWc5TswQ9uKVsPJ3w3qxWbXxbpMFuhH1vcGWn2kUBnxdsk98g3uCwqoDEbAuBw",
  "key2": "3MtbVEogvu8vLjgCgg4t3yMcopUmKYDSDQuzBt5KLxC4Kf2JTZGwBDgrnXnHJKLwsyEcb48DtuAoxfuME3P6U1Ze",
  "key3": "x98gm5z3N4K21zn1zowNux7hae5QeSSMCE1H4G29GZJBGTJhNcnaJ5E41GdZj26KM2YFHT55UHj2pSSFu1FrxaQ",
  "key4": "5GSjDxpZGcDHJYV5Vmoxn8K4pAVn2RCA4zQZEpkkvBnNbradVikjyhGn27kMSCjFNGXMfnZ3krk9j17RVwVjyH96",
  "key5": "3F9RCE3CfCmSzgjwGFRsjD6ttRZeoi2AxCvUXjrwfpYmmreDtqWzCkofeqZfTpVaP6Z6fWEoqUfojif8VdY1RDK8",
  "key6": "4hgafQdgzAZTCEURSJBioLRKG6Abs36KKfLfubQmwL4Dc8kcEPUzm2SsrRNw6d1MnHYpnDA5H2tFyhP2SFaRhVZ5",
  "key7": "3N7UbDLEtT8VrLFtcjc4h7ivj5nJitwY1i846wjpCT9WTwUoqZevzw79BCEDku9T76qHBfXLVxymXrPeArd2yL4b",
  "key8": "5t6gcmCCoudzAX8TvUBhH8wNGP1U4LcuHEmVAtYDoFQNzedbgqkT3TZWVfk4eyE3CUosh4PSa4jauwLA75d7aVWX",
  "key9": "4ysJ6MVFJnPurboNLTSXPwBrtsXHeFSxHEQKxxCEf7JbvPbBvrLPm8nHryo2GQvkBcsX6vYfRyJM5sjF1GzAGfmm",
  "key10": "5DgYj4HB2trUNpYxVsxYptqphTUXJtgSAkVEY3vw9tkZ57UqYtgnJkemkziV1z1Z554KwyeqzvzqSkQ9qdcmUVy9",
  "key11": "2YHd15AHT3L1W2hm9A4ryZLzsb3byDWRu7imaJixpAkizP15n3vDWLcojgWy11MWBPTKnS25a4XFyuhaNjghUjGM",
  "key12": "4d92KytSgS8fk6ohwMJZSi1ASCcZ3BUoANKnxztf74a2jBFEwRj44uL8xibTuTUSp8p1bfrV7L8BbV4EKWKHr4w5",
  "key13": "2sJDfg1niM6Fk367bRj1oJFvPixHaGEq9mLPcp22zJR9U8pjYstXc7o9PzLnrbcfoAoYKbXzppTPsoGF9sph3pDG",
  "key14": "5LjqGEexeh6jrCsg4dPuaCMJfPryfJ3nwUsgzXdPknPiXu4t7se8gLniu9L7Uii5jBVBDFWmqwD8fmRWTH2bsQuX",
  "key15": "37iq1EqEQLNNwm86hKh9mh8DXLobQFzwGhZwGECsMbXuGcmeEKVRPy7YF9evzSZmBP37MbXfV7X475cw2andZsJX",
  "key16": "2qsfuJX6vF1aMerHE1VbZnTKdKaAijFLgsommctD6PdMq8BAW53xSvDVByALxuegJDZ78GVEe5Lr6YhzCDY3Wko",
  "key17": "2GFZwGgguhiyrReo4TfEgUVyHYuYSBPt5eW2Kjv36KDGSuVMT4QziX6ZLigxh8MA7kR6p29V1hg9ehokzyBUfPo8",
  "key18": "42SR9uyUMx9R18rD8qjUR62Qgfgoaont1scGjKCRWtv2R2uNswEDRGUR76V5x71nNz9YnqUnn4UY4BJ5DzHJdaVk",
  "key19": "3ejoQYoXr2bxw3wJgNUKxVGzXH5yahE5TwBNkb5wpYb9nnf2nVErzBc6VfjbWJh7qewPtXq9bbXDxJBQtUxCMU1S",
  "key20": "LdZTgrVdAEBZ5Pzd1FwmPewEy9YiJ6Wwn1s2jhrouB1PrszVf72NSy9DQqvKevb2PfDYpKzC54aBAcT8tiKXqdi",
  "key21": "5SEaWD2CMoyE4xrkk5qp8PYJPjcd8KZUMDEUqCgDqgyv1WMTgLn68MQC1epQhKSM3kSCziwN9NvWigFPA2HzV13J",
  "key22": "5N3vUX8joDFcrBK4WTxuHoz8EUsLoH8yWMHbZVeWnNf8kyhYA84gNChC5RzWyxkoF5qsEjx561RsdWgLtN4VBn7x",
  "key23": "QzQbwzeVnTMi79vSEomRfgeB8fRyajCSadyQdGqCe4NNw2nt7weqF2HHj4xHjWVDQDuMQuU33G7XqqJBDNNExEn",
  "key24": "2nQRdy7V8vA8EmofkXANEntkCXUY7dTfVFrT7ssZDSMqmmkB3QeSTtY3FUjwVxguRSGMYSf22jzC5EV7WeC9opuR",
  "key25": "2bxAWsYf5RrKt5dbDttUnQXZT6eYP7CRLRzrj8hvoMYwc8Wn5pDr1LBxbezAy4sRbCPRC7Q6qXct7bHr9Jd3QDMk",
  "key26": "2axKRz3PERoAcdx9creTwBbmuvvhZWw5iQrKjTLddsMjzvgBuZcyZoc68i4FjaHoSbT79pEjU2T8ccZQTjTTdVoV",
  "key27": "63oM6npnTKhQZLMnPvcYqZkdWQBoQbnVTcjn5AAdc9aYbd1fD2xk8T7zx54nsKA4pmGgwbcL8ZNAQeuLt9quds2t",
  "key28": "54kXPrQor8hUXUPmNSqeMVuKqGrCrTHHpZ3m96ey6xsj27sUyxsZjpyJdw5qPp4N2NHCq2Vg4uN5vvcJ3B5E326T",
  "key29": "3Mcn2yPYaAo29bAvjXhc9fchoUWTCFp5NrnrFNcSMw4VBmwLaQ13ctqW6XpgTkUKAVexpqpijitUUvozbTz2vPEH",
  "key30": "5apKxXh8sJgZ2fkyzqwWUCBub5yhRoyoTqUhcfhyfa6RKQ1YTRFvwbUnfzUYWaXcswosrhMYGjzj91sBBypu1bsb",
  "key31": "kFsxnhbQwQpUgZijEh2Lq5d8trdn2qeTKuqh4gfKakD2rg2B3szUM7rrfgyd1pMshEXJhRqWkCbG5AZHEad3ZS8",
  "key32": "5isKNbYB3fDc2jgtqp8FArpidy9V7gGJrSU3mV6vCVD98yKaZSEhTvjtUj1jqXADP9P59woLRR7z7jBNvSygS6Fx",
  "key33": "4aS92EZJUTqfbmAMmG7Bw5qMwsoGvK8pfT74AFz52VaqKKGKGdR6GtQMUa8QMAKMra8hwbTCpqLbrvxEfkKiX8qH"
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
