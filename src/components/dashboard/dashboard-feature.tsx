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
    "5YgebevNNRBE3snKLG1w8G5QUuU9VyAuxAX1T6hY3gy8uc12faQi7HnQJQjms2CjogWEytFg8kReAND3YinAXgaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3caUQDEUgSCLAk9Uy8whSAt8veGkgo12SjfxRLv4dp8modxbKtXJfvgwDcX5V2FtP2NuCN5YGJ5MG2A6LWAWrsTj",
  "key1": "55f6a96QRDvbmyY8hE66Gs1mY1EL4NvwHwFpsMJ21uKHL2DsHsh94E4siXQHqNEX8g5yesZVZ7gZY9vpycKWhdVF",
  "key2": "1kXnENExCjzRSxW5kk2nXhNQKhoheXvvexRJaMtTaWvad9hBmcd3U8EEHBwXE4hA325yGtSgvLAsHdnFdbBSP2M",
  "key3": "3t9YComENNZRxuAjvWvD3Erc58syQD3qfi9Y3y9piueyS2AesSYYun5JXCNFtAHT43tjEm12dK8Qe3uVGbQmW1Ru",
  "key4": "a4uns6gGSErqvrdZQKhi3ibesnm1cC3BbUekvTaVd4ys65J93R2Z4UqJh49LmkZh5J9XnHYLGH8UBsHKhuAe3y4",
  "key5": "2imht463rXarLTefPxYGaJL1xVeP8himtmCwUYnq9BatJx9bRH9pzRBdHTVQt3Mbu6v9zwq9xgqF8Hsi8DHghBpe",
  "key6": "8bosyxjSRymrbhkQemBybke8cwbwBHhkReRuqjBKSC4n5gCaVqNzbs2BxqJQu3Vdp8D7A72hhyogiSPvvEZpUWy",
  "key7": "Ni7SrRdRp6sZe6VyfNbAR47hU5XNjEorCEjh4Xi1nU1yCYiLrkJFiAVFqxczrDnFdoU4xSbL9eisDZ4czJrnTZN",
  "key8": "2LkvijDSdoovn7EmtCFei2MK21rhKT3oT2GtPsGHJBvt36GEgLX4rT2YKjq76nyV4UyGiQVhvYRFfE1juUcd7NBQ",
  "key9": "5dEwoNBgPxPCSML9LD48kkRfRo5gv8BR8rAx5CibQnroxv3ro3KYqLu4HBeiyRB3HgmEHzu5GQLtMBzKxq8gbX5w",
  "key10": "2eadYCW6AvgciKSox6tQNErY8mixzQitbzXGxtpV37wDruwQAecKg5R7ki5wqsk8f8b6mr7QzSqd8WoEws9CawtF",
  "key11": "34iejL3cDa8yZUEwSRJysRKmk6dKho3dsWoEcyxjaw4ZScibucL5vvv1mxFb7DE1NCPpKjryApa9Yr3ZdxUZrYzA",
  "key12": "Qy6Az54qNoMcfmriNhNphNMi3FzNe71MnqEWbCg9fKxBNEPBfh98jwCRh9PKgJs881GxfuLdGTXfFk65UTXDtJz",
  "key13": "GxCrPgeuziZmN9HqSN12p8YyuYpZxVVRpPuLCdfDAnW1wuJ92Zw3d7KpXMQWDFr3jNVEenqXsQ4UECcL2ryXti4",
  "key14": "jPdLAo1dQYrshTu6Zb6bsa3jK5EANH8G1tfyBhhYfy7aEQMXvDyxjNSpcjQDwdW4zo3DfBEfMajQ9ZXHygybA5S",
  "key15": "2idLrZuC1tJbV5myTVbTGR1HU3EYD4aCCVd4bpVcCwYShR3rVFLvRCrwGV1q9fxzZgeUfMDf31MF1yswcSLVue7i",
  "key16": "5xffDKc2xsoyF5MvHiGrG7yEteH8hgXMm7sgyTefyiCf7NX6gY2UEcyjADG8z6pag4qB9PtBE96CGsoj5CpDYCi1",
  "key17": "4Y6SA7ePD1JQqkbiZaxppBJSAx3KVBw7yD6Aj355V32btPAVqHWHeKLBG7fCax8Yy9AuydM3FwZF5G3Ua7wWGRfm",
  "key18": "3AEYjRiYYQsnTacHk82AcmCoYDGm8Chp4HNzcxHyTGVdaw7fHaUnXaP8DyqGB9m11ZQSqFe3r8eJ944V9uvFJhTd",
  "key19": "5PFxA35kGP3ESLY1XSya7tBuWG7wd66HktKDV69Bj8oR9WzBR1k22UXt6KV9YxzwQyD7pLQYT8qXYYp3BBCXYX7z",
  "key20": "36xjKDVqHdZFdY6SeyUgA97sk7pqriyhqRLkHCrgNeYqyW7ZRUHV5VdgiZX93NYHqkDfQy1P9UMWTDLd6T6fbAaF",
  "key21": "5Yo45MJ2hDTAykf3hsS4EvQaAUtw5oPxUiKSSeKzypxgWH4dRD5v15cwgETr9fTUrUzPRMhjFfA4d5JWM3esACoC",
  "key22": "3TYnY5GJBAH8LGHLkkLP2js4bd4SkNKmX3tyJqV6dnkRGEPEfG5JscNTKBRY7hTVjKpYGvg1ff3jZ2z6abQkUMhH",
  "key23": "2qYLaiUCNSLsjSYAqV5DZMJWvujZcFwAGcLfzyBp8qjc5h6VgG8U2mJrsUjmd5Ngr5HcCN3vwTZEUNpstBFGgPv4",
  "key24": "56k16uQ1FSJ1NfKFVH16xCoc1BkrYX4aCuHXkfb6oF3Ufc2b3TgdpVhZWaRVfSb4Pq2QHfz93yk4UrXLkoSisCdx",
  "key25": "KCuJhLnYY3dtLgtHa8N2hQDm73m7haDWk9X2vuJxufB2e54UwZVPQDwLvqEZx1uqi2HAay3PNgxzwfJCxoSdBw2",
  "key26": "3zLRm1t8bdpBi36FybKg5zvjr9fm1tu7JFdNZLiD1rsTBn59LifUA2BUbfbBaV8au1F2ZNKEoc8KgsYvn3sU4bPn",
  "key27": "2q2PMP3f6XWV4mmuzXMSnBoYyFJw8woyCQ7d5D832naddLT9XSdEtV4iEug7mMa3SrYcYcvtbSEvR1Sa9y6xvnDU",
  "key28": "2qWvp4SAYrp1a9jVkiRSKyJtPhRMrBTdU1aPS6bn3JJeRR6pHgF1BQgd9qcQUJGe8BCvdbya1A228vQUts3asiNr",
  "key29": "55MqtN6FYxW5Weuu8mq6EpgnTa7KsozuLnfyCRUXdjcaTzYwm89597WF1e8Z7ooBJgRbP17p1MCFC7U5T8XYUxQi",
  "key30": "2wsBPztP7Uc6baJnjS7HjSLNoQxHmcme4KcZtq8eAcd4vZEEQBx8q5iY9Qmu2dvD4DBybmEfhaunAAJAH4yCeCiZ",
  "key31": "2QDTQNS8xLGJdggCM4MgBwR92in9bctkAdZvCoeWSC6YZK6HadagPTN7zYDJf7D957yXeaZ7KZBb1qpdHvABXGeP",
  "key32": "35nVKbJxjfABFyNFnkJrpHgMQYcFRkvvUJYEhYzdEV1JUR4SXPEocXhPpPFJZysSYAReytBHwiKdXPZdc5JFXXAC",
  "key33": "r7ALJUcnV2aie6gS5cPCF2PyjUYnoQQGGXabhZ67L6mMjyJyumbNLaPdKNvLXbZ3Kvj2V4W4KL2zKQCZV5rix8W",
  "key34": "4VzoZxnZNbEzuoGx1DYQGnTYMNEVhnLfk16hmmVLBSZkvXKeu9pYJ43T5GJx8Xt5SJY3hPudHYBnhokLepvM7TCg",
  "key35": "5Kprx6xTCpQk27QWmcJ3y13qLnwEKBhUMUeJmBXFra2eU8pmrffLm7FHgfLBBq94zG94Rz1V8aNBsGS7QfyJrs9V",
  "key36": "kU9mdTCKjoDixZqpHXHWGGyQrmEtTqoESKeVGxBTg3bb6tEWotnbmTfPkCxHL1wxXMmabkS3pezbqs3LqhjPAd3",
  "key37": "2zrF9Q5uzCMpctxP1uq2XF7rAMFmqnGXWvbcv41gCjpk5Dkj6WWNC7AFUcAhQ8KYn4bjaaY3ZsY2iYFBhGmKRerB",
  "key38": "YDnD6LyiT11Ru65W6hU1yEzwFQpLJfpfpLxZqHn3Dnf13SnchbPJXeJJPyQhYdM5dcUHbYz1ChwmWmca7UtKNZ4",
  "key39": "2DnwyGprMBvv8sv27RSV8ZEsfnzydPouCsEnkprXVWg5ztwTXkukHCSJXWXGBV4iz1EEhRS25dYxjgd3U3iH3SPP"
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
