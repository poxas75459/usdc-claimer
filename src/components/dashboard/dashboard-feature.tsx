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
    "57h5qAuDbBzWpqeieqCpNVJmpbEHNnGuwYUCHM4q8RbcB23euq9daCxS79cGxkgk1mBLRycWC7MSqwmPg2EC2Fiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qw5Y9hnwNqV6LqDGfm6UtRSyg386bQg94EBFvvvhcRYpyCRsWAijkV1UCJkPMm7N4kU5wGAfTDwtruAeyaq2T5o",
  "key1": "MyWEM8b9Y53wGRB84sYc7v3gHgcov653a11VYbhwk1e926bR4b1X71mcTPS8Ut2UZQhwA7jVEcpPckNcPf4vN3i",
  "key2": "4omXoTsowqpNn4jTQMo7SQ85Szcpp8miJ4Hsy76oWiJ4nbAJ5vhgKW5uvSkZPGB7eozu1PFJ2pUFZraogVe6CMNq",
  "key3": "2rfPSuFD6xRaMQpSxgRLX9FxLYLPoFDY4Ea1uBN4VabhJZmLEF5ANWstqckDVaUbGAoCChjH7udPJNXe4rfFD79b",
  "key4": "vukwfsQ2vvXek96sGDAZnbn3N4QpV8CEm4p1PKJGuq1wgDjJqfk7tkechCawcUMPZJ8iLXJ6sukvZGcpER8VmZC",
  "key5": "2yUeZWWxonzhEzPiYcmH57jNgVbCbD7EE1Wxxk3EUNfvatfUQqnUcLnqV4HV19pAyTJvH9af41YpbBkjGnefzFqc",
  "key6": "4E9r5Lj1kGeA2wxCKNa1PJrFZpfdokD3JWQo9LFRH8cQZpNQSBPSFpqeiqnxCyuRyjw6v1TZuEq1hfohW48wcfEC",
  "key7": "4ZDn6AHoUmAqFSDAgCT3QxDxB1LsuLkP3yPasdHusVtBP1kttVos9F33csHkcHhqnAaSrVWbw1f4DKJYyJsiN5RU",
  "key8": "2xk778eM87zNbFZRHqeZsS4j5dLD9XJmuAABHJ1rsFzNYSrAwKm7XCLGvDK95EfTZMc5WVZymBUpSRQyxLVrNqLT",
  "key9": "5DSb3dH7B4ZqYqLSsUPeNDhKJeeZsVbv5uxfveiHndQWWec8xEJsy85C84h3PJizNj9nYiP8psrqBWvb92RFLPr8",
  "key10": "651ic98paAtN4YpE9tr7hALW94k3A3wPnQwUC8KsCwCu7yxW7pppMKoHUbaDct92tpMt6VYWbpq8Cxd7bcPfk2A6",
  "key11": "3HEjCjzUsW68sKNb94XKCFJ6UJda1y36vTZuHVqdR7B2bggMS8Nvaz3BqVCmCxEmoLKmwKQ2JwSWBMhuY8RJecWH",
  "key12": "4EpwDR1VCF46xqAC9k6F9VoQ78FFCwHqgdBhZP3BPcvakhJVEAxqBFmJ3is7q16Xo34SdYf7GMRYd27FZfe61Ac1",
  "key13": "5McJioA9Cz3eVP6EpYrqYp7BHRt8wF3XUCWNoVj8FrockKjcFVRxP7wV7mVhBxTm6v6jBnbEjexS8ymSKqdfMzBo",
  "key14": "4Wjh1gLNWrWMV76feVbuqwY6hVQjWgs2kUB7wKqp4HRxJhqiejcFgNm6rEhoJTkauFjJMmqhq41Fi47V91QLEQNR",
  "key15": "5ghAYZTPUyymwAcxYnkAmxbiQke9LSKj5ZqFowieNFq6CHSDSeVJery84L3U73NXpuPHKPcmpLySqWaauX8aWsms",
  "key16": "KuC24GSkgkdkbHkTFHUuVuzN5vjUHQUugY6yHfinAhyZ3Z1xvZ6c5sDkNuE3ZBNd4uJBjDEufeo9rogquWRqHGy",
  "key17": "3NqNzwAtJfcCP8m5Vzg6xEXWNkHSTzQbeUnamYyh9Kqr75R7pDsm6CSTehrGpUN8EhRcTG6fJTy7kFECgCPCoVc5",
  "key18": "2WwgznTkwMCSXGc83r1wN9MEVXe2ZYdBHoQRgmCoJNTscWh7G1GjANcasoJm16jUfvPWb5LPAK7sMB4EFQsMLgQ7",
  "key19": "4b53XeV51URU8t12JM121iPa8B3pKNwB6cH1UrRSYgUKSocepZnoJU9LwUTyH88P8Jm3QGwwTd6zuidmSRvdEyLn",
  "key20": "4UmxvCbVoh93y5Q4d2RQpFM2s5Z27RS3jAPjJen87FanTUF8q8VpvYTVcMNBMwAUxCTvVWtMXduza1SoFTA1q86N",
  "key21": "4f769mK58qvBMDzyiTHgmukxmRNBQ9yCW8MwaUPbmbJ4r1As8UAehV3BZpvp6SJEBoZaDcZPyp7XcH7XnLbi3pXw",
  "key22": "5y5CL6Rm4USDbayaJ2HbtckBWizynnnuzZYLUTUNXV7GyquiP2PkmCyQGP9rHSuTCstjjMnXcWrNBSpDzMnd3vVq",
  "key23": "5hWz4NjpWQjiFyrF2mNbUr36vYPX3BmVRWhdrgDwhoqeCCH6Yh4JXLiJA4f8zePCK3TvJxi82FyNUNfzp7YBRRqX",
  "key24": "5SzqPGPPXtuDhcLTDeGwFS43V1APnwKxQy7SdPDvtXsmCvUDVsZMoYwQWmpFNotkMNdquyx2VDGQyXavcUthkCHC",
  "key25": "Q9W6kEJoBuZVxcSmhrvDwFtWa7cHMT2ys9LnnMmxU3eKJTVMMjbQbxp4SSeLuzAmKyeMtRajsf6XHf2wXsSbFKK",
  "key26": "2cmSCZYxoAkaVod1TeU4ZCNLp3mr4vL1VK79xp9kdHFRGbpma56Ptac1GDDW5GZTP83KTWFqttZLRu9m4Y1qsdKw",
  "key27": "2KPQNWyHtsdBcvRdKRGx5TjVk2fxe5U7UdV1BGCrXui9fWkPof11Qp7iGH7ynNnthRLXpaNBQeuxE3H4FLoNF5Ss",
  "key28": "5bqJxGS2pBXHdKLYHomo6joELXgor1a9voinWKG6oXzajcx75swiDFjiCpBPyyLc3Z8Dv2DtRjGqtMVtjmtguQcB",
  "key29": "28nZyRJrz3zsyd4G89qSg1EEsSdjf4xhr18DkFRTVh1Q3kpKtvkBNGGp1Aq65s61pUNmtfd2ptFPvP3ap6Ke5FbZ",
  "key30": "3G9xbEXDT5nVFhqGQT3c3fE4yCQJeooNKQo85iRnnHCxFEzEcv6UFES6SAaUoZKU5rSKeAFCN5QWV14J9fUMwTk5",
  "key31": "3aLBEvC1GkHDeEeGDiKBK9bvzZLZPbDzEuqqMuisvycYhaX9c3HzYj2RERGABx3dB9h5VYFbbqCeczYLguXorNPH",
  "key32": "4pMyuSzFrW6k4qUkpCCSUwmwj9EJGsc5izhupKzLTW1EFU7Ro43hv8J76cXkZhT4iod8JeykmWLnRdkUTYL4a63u",
  "key33": "2Mfvcma9h95NFfYDCGyE5JHy6MxmJn1FSWkEWjwDXr4s5Bwn7K8LnQzwoXBMq8d25b4t3uMfJWEfFbBjG8eDMk9F",
  "key34": "33SjbCruVXrfvNaxv48QXgGS9oRT98gLKoM6z9Y4MKETpdY14fCbTVVNaaFuFWSADJWuP4Sg6GqZbMD5YwiSKPMQ",
  "key35": "2d9Bo1U1Yvky864x7yyKTSfd28eaBucJg8z8PWgEmNgAY2NyhViTUH4dNpVA6fhZP1gJ7PMsZRu2sy1cxxp544ab",
  "key36": "MPQDGSxXAhdkjAnsbrjtymnRXMnPkmZAkuUMHfA6jhgw3SxrQBDA3fY45ANzm9QugYtRHq6zNMiNeVTsHn8eEgf",
  "key37": "2AfkZaNjze4xo4J7D8qkvKMCy319zjAM7CzwUFNTreE17yfbX5hDZLEM5GVR4uDrhJTxaSan5gCu596rN6h6JANN",
  "key38": "56Y79XNasv1cwLbTWAArsjv37VhzB5rD7Ldkh5Xt4gsuGZ14dxtgjRexB1prbLvAeyqbVieM79rjsp7wBRAAooCK",
  "key39": "nKZcnMnuErPcDpGn93ZfkyWaTQ9GtjNjxa1sQ31RLx1WWis7UcC8bM7BQPSWnDcXXidk2kAVqaaLp31j6N5w37M",
  "key40": "hhwBGtqi8A4Dj7NKVu76meNtLNLBrBVJZTnHsjg5vYsFN4cg28bZtJQ3itv2mYR7Vgd367WabcHxn4p1WhLdu85"
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
