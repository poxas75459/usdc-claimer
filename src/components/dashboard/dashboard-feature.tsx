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
    "3XDPEJowsReVxvtygaWLLA1DT9qNaM3xYaYtaUxKkRmBRBCxfSfgLqnuaNmY2wg7ybPSNobe47Udf1NV7PZvr9RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGUffhFTt3dtqyneWSRXmPJGowgUrPUSaFgdjQ4Gb6fGP5xv4xYZbUkaAJdEvGes6EJjgAWcxeTvM71gfYz7DLq",
  "key1": "4LSVzSXw4fM5jaYPi2semFKUPaQNKYmJbYXdTvBJoAXsiBdxP26t7gSw5U4HVm2yNcMgxnvMMCaFQN5qKp3J6Qyy",
  "key2": "2TS2rMmDp8rRvrr4WVVdBurnkt3iGL12HxHN2KFb1fmT4o8Xduo1JH9LubZNkci4WTf1uf9vMuPQTTVwSy2w4MsR",
  "key3": "5k5yfcFL3qHWT18miAxG7EEZJsFw3NAqeBS6eM9mKPsURj1RP4advCRQdkeqoYgEJB7aTVBeBnqfrRjLaJV3ezMJ",
  "key4": "2yx8ity95EAsgtuSsv4WwLXLzuyQQo5dZ53HhwMFrqoSMf58x31qfw9nWhxpQQPiUmz5Rp7SSjnSq48HJDm1h6Y2",
  "key5": "62GUqeW3M7if1HBmSNsSoD5afRDTFS2d5FbkFJ8VCZGnXcZZnDXF33Ad6zJ62zeAQxmBKUodqb5BjA2Y3EGgRAfo",
  "key6": "3Lrsm2QxB9Z61iR4Wg2ax3qLnSccFDmBdrZHsZqJAGYwTLvyb49b7NZXmLgGSRZuYtKdwWnicD5MHR2RuGpM778z",
  "key7": "2gByq3CgCT337VSRwdwpES9qBcvPSKWH3zxWxriybj2Wpxv9pSNi536dnJqUMsseiG4kbQyCcN4qjMpzHS6uvcW1",
  "key8": "2ZzYY6cuYaK5mjgy91GQf4wBmzD7YwjgN6g4SxFHAztme9Xsa4e6Wm8jwF8ySUoNZjYcnoJGSqY77KkijrrR1YxP",
  "key9": "4YjmS6H7z6hj2QGiWTwRm8mnBFbZNkTf8q9qG7Zzy8T6oYNKnE48YoMCYx1N8YzjxtPSJ9Qk21nFYjAawb1g3jdw",
  "key10": "LWZPNU4wnBru9YVuC6Fxm5XCAUrBZ9VVT99SgMLRpCF2YAsaTGSkYnRdxKQj4DnL8tE5kSXq7EDYPCToX4dWrb6",
  "key11": "MfuXuWRLVEhbpptGpeFsikUoEU65bzx16bcDwactgkkoX1HTToLfhMoSH8nCuR9Los5TkjPr52N2rg2eiFArTAm",
  "key12": "uxtiCwoWSY5dacFhunMA57RSrgZXKSnqLjmaAN897sxSiu8CfYew5kjMEfVW9wLUFy7t8N8qQmwtuueoJqhGsHw",
  "key13": "5KsyGDcsP6QgEZCKnSfEvTwayazDPdGD6YpeWNHtpsVAgbFH3JBxFg4HEES74zdX1s7fSDUuEcgyzCY5DaqfqCSw",
  "key14": "4wnHdSuEWM9iJGygjCCfAEUim6V72SYaxQYXxy9pQLFqWn8K161EsXRAUkdgRXmN4rHzAzfnFgUADrftKQvtFKuj",
  "key15": "kBv1JkBjRWpL6SAgbuRab8mDcmDVabRupoEpei9gAuPzn7y4KzzevmDw7fAPNXDGwqiwCQ1XJrGL64tfMs2KHbh",
  "key16": "4dy95RYTb7C2D79ha5JiVPr8YkCzGHmd4EaUVzJ9FEYjLGmHLv8zc2LLfjnabVzGdnYkcBxHkGDazBec5hZkbxsU",
  "key17": "248m5L7fsvqwDGk2RikPN5DoCV91JFD7exyebtawixJfKQLE6CfbHY8j52GpT4Gnb83Jz1yRnp6HhNHytNLJBfTm",
  "key18": "5BZMTp7WehVwS4A4h7vUHKDuU6shK7ZTEMgRpKoMP1n2rKYSJGnNQSwzZdS7LA6TJLCQScAe8CxSkxR9NBqfr2VL",
  "key19": "2n1ceCQF1otwiLo4zUGhNDXs3mafUH6ybGCZgfbeyZ3Tmirca9tzrMLzG4jYAwEfRxn94VR7eheGYTp7xXdr2vGT",
  "key20": "4hDSHytacHejMKYoDWfgDbkCpeJ1Ua589XtHdNxYczkP6SYgKJTRd9HDrZ1gfYC2MSorf7HARZN7irAi8nRiN9GT",
  "key21": "45qDimvQzyt1yPWWRBcCWQzLvXWcXPs4fcaLteNvjR9QmsFvqxZyfBer1LPZzeFavtxfuB2Y3s5BKV4L5HaUZGd1",
  "key22": "3XftkpG3nAVSVZMncqbKJuWUbScbgAAk2PfrL5N94BP8GFTNsR8eVfZpwdCdFe4k7vmV9wm9X6Ep3PBQdhCgWRn5",
  "key23": "55gfpv1YRsQ4BkJUaczeYaioYVTFJRmw5jMxY5FpDvWy6kSoMZVN4RQn1YRpxd5v74jG27AJ2yCSc4PSwk2ogGnS",
  "key24": "5NArFQ2qejteEjyB4CbqB817rbEhYDxrKmjqJN4habozcvN8GPE7RCrseDekUTrUJEfAqPxcXEHe4GxRY9WD9aw4",
  "key25": "2eykz1jVtNzbVtQ96oqmqVpEJd9fjqNcsRPUSy5q7cv6a3BcvKx2m5ktGU7L72Dnj7W2AiSiRonqggWrdnp2aFBU",
  "key26": "41G2RpDQyZvveyHS8BW9SLtT3z86tmd7Yotz5Tdy3sqHJF1f1uVMZBWWzs5xjqnmAVeFkwHPAUqTmJ3CHL4f1TEs",
  "key27": "2v6TG5PpGmWsmcGbEPBLDBLBxeKg7cng2dmk9VvM4DVDwQE9Rp3oM5CbgLddLN1Skuvt8v2yhF7xXvBwshmihdDn",
  "key28": "4u7EwTkChHXzPbNbrpAYUJ8JjrgQXhm15gvYD1ikPBpuHVGiftGdDxFsePoomwLKk4JcEZdHKYFYNoZB2FETgeA6",
  "key29": "2tCu8QcvAgdhtWrQrY3Q5BmXXUX4Wf3WTA2nHUdUF8RbMCuNWwvsG1PM8WnJu2zzFe6Jtw6yHMZEeT5t2yR1q52y",
  "key30": "X4cU7w3X5p3a1GDfhFmKqH3Zxv32UWYCGLvNvmQ4SpjBqSeYme2MockvzpQRvse5Pcgr9N7jFWMHsh82YRgiYzw",
  "key31": "5sFPdBcSxTb6zkF87Z2c1Rs7UPmggDAcMYqKDyhLbv8ykwc9LivFpR4a7BRWKKwKs3eWrG6Z4c93HCvGwvJdPRyd",
  "key32": "5hYWeRwphtZUcpSgCdvue1zxNMNwfn2u4U1fXbwbSL2H8JihyYB557H6uL2f7anxu5HcuGAgzNreTCDoSiRgnYPb",
  "key33": "2GmWn8ErWuYsGBsNR1MGPyv28VnFV1q4ykEdMPTieVbXK6xuT523Jf2VLeCMR9UaJiPJoAUW71v8YjNUkDZnFxTj",
  "key34": "3X2NNhyKyYk6SFFKnhw7W61rK8TeDje5caGtzAqdft6j9MHRSh5PX5S96RXiXbd1TEGUZyzeFaktytWVNBaTEPpo",
  "key35": "3hGUSJRQ78qy4KFdtTZ2CBSjQYTnLSZ9VXekqy28j5Zmnw8zZZ3vk24YcuCCeYzt6y9mbWK1FmB97oWS43dJQ6qG",
  "key36": "ACerL9ybfwGhbHBoTRJYsRTBk2unuM4rKtiMWfQZjJTKofcKFJSLJFBufGvj3wDw8MZRXQNDvfd7yZBWKSDHaPp",
  "key37": "2aG6CeKHSwo3tbd1nKrWLpSUcDyDJx2TLhqqp47GrGA3F4y5FktzHmr1eRTu4ocbP4gSzjHWVZz75WnDsn1RdX7V",
  "key38": "3r7dcrHH4kTLTn8jkLQNrwDcYc5nGKK2WEdUrzjWStAyb1LzCe8iJagaZBv7Qy4ArvwY7kKainNMusR5T954AvHC",
  "key39": "3Qv18paDG6qU4GfaTskdeaQ9HhGBit7VHEH1iF6qgW9i77RX4pp53FHDyTzRcxcVAqUyCkwd7vzwrYyZpqKpzYiU",
  "key40": "ZJ6HsUFGr98ZYd9rtANg8WzY1vpk3Sv7BQPoHPvw176u8Eqp8jvV2k9mxnSAj157DqJZ6Xn3yKSK9ToEoXDKxPj",
  "key41": "RSgkunTJBwR6urmtbZ2LpUUWGMgu29dpW7KhgtNzeFUkiYxs2MNrpXP2XjRAto7iYLuKLjnEZ8nz1ZpUKwBUZuk",
  "key42": "2k2KbhtSJiuSMsYtCKRPv2cFokY2Kwse46MDCvfmuGvbamYaDGfeYVRtW8cDmiXbyrBSrPtYXpRSvYKnJJAgJ6bJ",
  "key43": "3E6KmwtV3z9iWihpe1NVvpvkEXGNDxeFLfkRbFS2SKgXykCR6Zcow4vu88RvtzoK7GCPg7jD6hSm16Dr51FYWEAJ",
  "key44": "2wKtfBan85Mzu6KmG8RA4JcDRhvMveaNxYUjXTrfAhNGJmX11kijTt5qDFDZg7LkG5kkaj3NmRV9929r4aNrQbtU",
  "key45": "81k3YJbKtSsV8YZ6rmgLf2xFzEUhQHWceN8P67oEF4Ecjzp2g64t8zKJAthtCKcbMygKWP8MFhnX7xhu7YzhwoB",
  "key46": "4iuBGcrZgWdd823C7QsLAXF9QpBMVt7JDP31mvaPBkJjB1wqFfAST1jAAojSzpiwc2TU7wx3K8ChS8ypAZeG8itU",
  "key47": "5nbVFMtGbkhYPpqK1y7TJ5HtEHasAxaqytSrsCoMimidE7MuEkw2zFbNjBka9ADgEdvTmNgva83xDnWdVFxPDsJF",
  "key48": "4v3SEGktskQF1vzNNhVrBjRybtCPQokxwVvsGBVXo1s98URBVpF5rMgX4Mdsbh1JQSCvWHsPmJ6EKiJQe6mm6Pj6"
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
