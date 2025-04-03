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
    "5DLm4LfaW15SLnYpz3HPVWUCZJvAPLnt7DAdoJLAg9VLAkDpUDDzY5kPe4DaSPMELEtTGjthEJ8w9fXramfChG3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWY2aMC7fqPgvfaxNYTzyXx3CEJwMGV6r3p9gCnbJMJeXM7nJMkfgGtFdqzjM31CxRLQbei6JCXfjCme7Bx6De2",
  "key1": "5DvFGGQ4DzACquCjNkRahPtjU5MUiWsiSt9QnwCHLTYtU1E3yftWRUNN85synY93T1dQtsHC5sjSvLqbvaR7rAop",
  "key2": "3jZUosTBLnqQwfkxsHAW3T2S5cvKQvcvrkJjXuESSTVi48hdiF1BSWp4hp1bx6R2W3oBTVnp1VFhqddTMbqgmHpx",
  "key3": "4NENDBcRzs4EDQ8Fqw9GEgAc7twK1Vzjyhf7aPkRvU1JAKCPF8FvZDs7uWQd5AvSLSqHca1yQhUAnk1fxXRVWZdR",
  "key4": "2D47HHTK7YpXVxMDNmb9XRk6RtwhNDEUyZvmzCQKQk7bqqWxRDKbH7PuLkm9Gx3VQEYca4nwimD4zXpzEhtGWVFb",
  "key5": "W3pjWN7XYrNfyViJvQQzUPUvVc1o2vyPQJnS8pG197C2YDajYDt5XBeA9xVEwHs6Eqrf2trGbwrtBweu3C5UU8h",
  "key6": "3GUDsgqv1xyjM5RUhb1dDFxb4ZuNutqnnGCmnAWztXg1yAPegyfTL5q5EtnCM4SNzDekVLK3YgoiAdCk8YC4f7j2",
  "key7": "65LRGHv7M7NgXAN9hJNSLLKGHSS182YCuyvDG8FMkfeW3nTEJswUYGnoMFy4kK6yNY1UpAWK62axzDjTu7Gct8MZ",
  "key8": "3Q2RueAphvRW4Ti93JQPsw5wWUXifb14ZevDBmhtf9BKxVWacDe146CLZYTPjLvLwGJw3GNK4rB6DmtNXfU8jdiG",
  "key9": "kgbQoVyKy55SDk2Aubn4A464AryaYT3h1NFtsJ9A32oPxCAvppxnAjGnHPQ2aQfUiQic5QicQX8rpBz385ukjAf",
  "key10": "XMcazYHTqVLUxouUXrJfi24turXCBYuWsV58W2vKtrAKmbteieT7Sib7GTaPLuDpcBW1kV7u3VHmorZHWaefMtg",
  "key11": "HbSoXg8hQH7x1psui4qSU1sokJgVcCdbxPbrqJ9KFAuzQRkknxss2uS6m9LKVmEp78KLXfdqgseEKiYyXvR5dhj",
  "key12": "3CAQbAfuxBBrHZV9Qmvt9PZXSbsyURutP6Wb7woXKxKvdyfTHcHTU71e5cWVBGBFC8JWvCaxVDDXFWQoZdYrJgL9",
  "key13": "5KJMtThfffptYRpeDaHKQL62CECJjq1yJq9zD4TSgM6A87zcbWFTczoMbRB2VEevcpKtrCeK35KFfBPwLsujewFx",
  "key14": "dxUGe1rR1aGC1gG5fEmtEvNcnxhhVQbwhJX7GnkMouEU5HTBdEGchEDDXmyXH6yrhutVbW8HVxrabGc9p7r8ZkB",
  "key15": "hdtEgo5HUJoKYzEyWo1T2GLDfWtv475E1HFKUn19NMDHvdmobSrJcy248XMA88oupPEVkf964d9WnRH4kP2ntjy",
  "key16": "hJyHZKbwcSqkyKNZUKijZ6cRXp85cgXhYHTUbcXa2CT7PYUceFXaTiuDKrbhNBhfcsviFmBxvPBJK3Dzz3vpsoH",
  "key17": "5VPZ3z1EJzSwxKox3hb9c1ZxG4ToU8ku3BoYSyx1Gggb4ypewxLQ4B77kLoFpenTGTjn2jPEV2bT4F2UBzpaabUa",
  "key18": "4y24gxz442QLZVXcJmRiwUeT7eFNxuPv5x3jH71QrDuC5VWWVDkBPv8zbUAS3QHkdhvRMWo2czTPqgXu4JdY7AdC",
  "key19": "4j4iL8MiQ7h9yi59SKp1ZUKEcjArPM3NaYAsPzncruNeuZj4KNodELeuLFNLkGKbapw9egCCcycBtFKLyBm1bc6V",
  "key20": "5G5FRbs1CYm4XaESRifVhKDMeFMZa7neCfC7ZMxxrcn19Y2eNkmzRKdeEc8z79GHi2HLvM2mU1gUGnDnBr7p2Z7N",
  "key21": "5mshh1XJFQbMSvmnwjS61i7W8BU8LB4WPGg8z4pYo6WttzGJZDzzrJJWtpL7dB6kNgNiRQhtGRGf7gUaA9X9F3Q3",
  "key22": "4Wd5aFiuVaHzYXgzKiUN1C2invNfUkhQfLLmNMPS1XLjDRTegdb8rgjNz8CB66gaZHsWuBgde72qebXqcSz6Jtdh",
  "key23": "4XhwMnkFQqk9x1R7YFfWwsEyUz5Y5QzqPqiVBH5cKFxmab2v2R68E9WcpbWMVAwuW6KMZyLyM3Rgvhzjsp69dvwf",
  "key24": "5GyFD7thwwRFfwuLwWKbKhQMJyCLMo1LcuZ75yt4LvseFGuDaACQ2BZHvdrvKoMzmacLcBfVx7XHSF5cdZhskUsQ",
  "key25": "5hDDgbViqY8mLTxVnWLMBaS9qu1JNw2uNpeMA1jcUGPCD7EADtf3ojC7WCfRhw5CZ3FYtBAavZF8dLRSSAWp3WAz",
  "key26": "5exEeb83cUVYoVYGYJ51qokSVoV1DqNLizozryVzHLFdySanXoD7vNyCf2BRByvpLuC1mp9PdCXewShmujBXNEiU",
  "key27": "5qgKvih9FBoFg2di9JYePVR6Zq6spLAhJFzZQthTraAsf3nmvWa624fVfwUWBbDevrqFhu7Wrx9b1wJeo36XrHcE",
  "key28": "3gUZ2gj4MHWWKhVWgJoVhmNs2PVtpS1Gb5ggei77wcufALnxiA9AmsUt1wJihhEhPaX3wP2w6AXECdcH6MY9Du93",
  "key29": "3shJSNCecEYvKubsM761bebKcttTJDuy7Dy6QNMhYD5wc9TuGVABN58UdR2ikN8YoezzGube6bYYx9JZMpSrp71P",
  "key30": "3rF3sVHt3Th2ENpcjqymXd6MRLpUGveaJfE18zaXsgu1G6fCbABB3TkAXpuXJ8kZscRxxz9RXXpK3sZ9FA8SyPSz",
  "key31": "5LuxJwFpHRqQuNBjptbHjc1cpc2BYBTK5NCHNxmHk8nnzTA4U9Wm4NwtVdF8nYy9mUUKqww9nLyWDN4yJygyLCvn",
  "key32": "4sTJBSV6rx3vFWvbtRfbzo2oC5RkZmM1rD9cC9iG65ZXVfaNP3jwYNsWCPWwEHeCyShVSaYLU4J2Hiy6BduVjJFp",
  "key33": "XHdc5PwYpvTcvvnrYXXxKeBaDg93cu3Ej8jp67sW4jN3FpXgpynJCHbTTXo6Mr821okMWJHpWwqXkYr6AgkB5P9",
  "key34": "3QzLkRv5hP6yPewvDakqhuoByZTaBjJQUn9nWKJuGfB1XWLpgAPTptjV3KcPqezLjS8XvUiDcuNVrJCAxPXf32vJ",
  "key35": "5uirA3mnY8THrQN82dVaKcWTSztUgEHNBjqCTWx2eEapDvvPcMbocaGujnEf9bPdtaovfmeVkDkdKW2kaWffbpRm",
  "key36": "2cQDFB7q4LQmLhh5dkdnL5mbcnC69Ptqak3rjFpAMjV8zwcgYRTRQKwvhJ5reFzytkNQzhLgtAbnGqgCoUn4vy2",
  "key37": "36acv8uXf7QwFA2vfy64QY9JEAUAoFkXYe55GgZDkG8EHfvr8pxHtCKKvPkEVDdxuaXJsLZS9aXyjjFNTwuhX2S8",
  "key38": "45r5c7vesZE6vD6LTyPrCuFtUkFAescmrff8dcBzfGKzWNxDx4b4tEvmQNqgZzUenMAYVdbVXi2fGTPZrBrbFWps",
  "key39": "4gqfuhkd66azEZqMGcHfZrajazneVKcrmYvBsNxThSFUdtbbJkjWZaPEspbLAoos9k3t2UPNQvALuDPtEhK67hEg",
  "key40": "3bnMoUmzSnXZWMRbee3ycyunLetL9QGHoAo6UpQQ3PenVvWuhvMAifygLncDPsHWkARNcU1x35tyD28VX1ho54ds",
  "key41": "3RJZjtZFR9khoc1FfYubFKyUg6nJCvqWtbrwuvbwcfpFt2b6EwbeRjVtteFNR8EMimUhUJBauJNCwTGToYHxpHkY",
  "key42": "4MVoyztz92YytrGYFv7KqjJioZ4ZzCw7JxEhBb6pM7241AHS96qmWd7zcSvwULGPQ5T4oBGTe78CDcvsyfgHpXDh",
  "key43": "2xR6hSPnn9FJS5udfhUMjU3UEjeN9C3yxhrRmbk2vEpbb85wmtFP5mW8SpEUc5zkuqvxPpFCGNNjTUfgFvXDPq5N",
  "key44": "4xHMeq1YZFGrVra1hsYdeTgCdGMAFu7S8gcF8RRE7ejuWAPxToK4LBSFxMetVyVAjW97EmPRucwWgzQ1TZCQdu7d",
  "key45": "pTQJJjjuqSEfi5WgGb4kwGh2Bsjsf4mBePvxCfoj2Low7YLzTPG6LavgnY1j59EmfQDzXuEu22muW1rrWeqjM74",
  "key46": "4Soc79zsts4dkBuRd9QmLQ966vB5LyRqK2ecDhkPYk4DSFJqqKbGLigRk1qU98nY6NjP8KzNajQ9FkFKupbQgteF"
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
