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
    "5zYein9UNWyxUN4cpLCdvYGmuop8uWyTvKJKWjTdmpMeZ8cKf1HzCnYiDD7cxPR6ELWuB1J7kZ4qXtBXaUDekmoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2UP2BLj1FHggQaUC1SpJFYa7gSzzkGZxrLNdh7Vt5bQKt2SeZ8ggWsDzdwcR25aZYZHDGEQrCx1wtnvAsDKhGZ",
  "key1": "2Ck27K5QHgEtWTY5gwKXE2CCzfGTHboWy8CudEwEPUpCDk4i8482AxgxSWkPrmov8TdSuvQN7VaELaaS9WXuEhsM",
  "key2": "3ibYYWYzm2vhPPPSZkJM36kHkUvmX9rtVkE4zf5XpzHaAo3ZrEhL7Q6ZhEW4ZGoWtcLZXguHYeKzD3nNp1xJtSbh",
  "key3": "eL61Hih9NnvXGLVsq3puh3L9sz8XLuJm5YbVPrTLpxsDs72GwPpm13SP5tVGMCpt6UrPBn23UG28UYqeBtZhXZ6",
  "key4": "2kPsxwhYwdntEW1YRK8h26a5WKzpq9eteE9mHYptvfMyZ1RMLnwpktdHePSq3McNgbaS1edmBvn83QXjT6JnFd3t",
  "key5": "1m3gFvpAnecHDJ3WnVmBiLaSvPXa2ntNPqgBHM9HVZADmFv5Q6WCoJrFLjLTJcFXfyqHSiLtPvRSuQrzGKBspV5",
  "key6": "aEa3N8zzq7LmfmsNhSgyB7DrPV1JxgkvQSQsYw3suMPhHhsuBk1ueDF7J4ni5p7b9fLpqic7evazVePZjMitcxX",
  "key7": "2UVXfmqZGTYc1ZhDQk5w32wWiEHh2hy1c5YSj9V4ibwAtowBSh4pGbjt39HfcxpnEcHKmjqL8AoBQasgset4mrkk",
  "key8": "5wqHZxGiwuPf94VuKsj52zx3HeJ2iSBwPJVFnoKjG8bTh67pvWDVm8gaGF1eMcgiSsEW5vdKiecCKDTLAj4jr5aE",
  "key9": "GdH2VnM7vX92wQoDC7VgYqFPKhKMtuSjzQQhV19GvAhQiCVwqsE4bjjs9fmfXgAY4m64s2Qyh3ocNnTSuyoSxRz",
  "key10": "58XHdwUyfqgvZFEQyzrqy1FxaXPE2YwbyY1Zugm39bnGAkDFNtkqPZvzLvRcdDsDrYGpGtMVES58mv1yLKw6Mzuo",
  "key11": "59YUZ2Tj4B49raxcHmUnZYb9VA1dPmUPJrQ3QPAHFPbhFR3ksJmbCaAzWTZPmyFpAxYpFn3JZpVp13fsJatWcY38",
  "key12": "52Ngig4mbkWbEsQadD3gxru4ecWKnBURC3SzsnivWcC95LYqMsjK39trpupEhPg6dTP3kNA9nwEdnFrT8SxwouhH",
  "key13": "GgXp23bpcF2CFbuGUtXieEDgdfeLW76vF9StyGGhm25fy9HbrGRBkWt2wiW1W3GSyR8t8YragWCgj8vfsHVcZWt",
  "key14": "3NEXk63qePfNx1PryHBpwGXFeTjErrb4defXz5nwitd75uojV6G6QY1VrjR5z5sGrTRh5wqH4iP2ECD3hBvmLNH3",
  "key15": "3BgHsjETFMYWR8MjmnpdhmoX7kA753QtUz4UYBndkqKs61CRvkmrAhmSAuty8GmpreXczjiniZnnXv2DgrW4mRNT",
  "key16": "2s6ah5zvtw3TVjCJRhV7GCYLQ8swhfi5CTeCTR5SGswfL4KBAX9bLehxjoaNLtdbcZ3H7yDyJsKSRUZjMo17h4xx",
  "key17": "3a6nhrZ2qDbWb8wEJBmaq3w9ANuby6CgG5XbkPgD5desjfSdwTyps9tu3vTnTnsTzuyQv8ZJSt9BFzBhDV2feESn",
  "key18": "Pyi84no6b9HPpZDTydRRZcc9so4bEsjBhRWGaR585cRQYkFTDV9t6zv1qvntCm18okqoUka9Vbj2khkGSjsgBbq",
  "key19": "3JudEu1ySVsYR9w4ci3B9cURXGtKj9VregnyjRDMkggxaznhYZMw9TjMoXTVZbS64TqSK7NbmDg14QdW1Us747xW",
  "key20": "5duZ1DuL2PTEbUo6p3DAReB71HsreqetZfbM77GzoGkyWeFEByjDYNi7P8qYe9UzKLTwgJcHMNbtcPSuyTJ2t48A",
  "key21": "5askRxMSrmLkigXeZtdVmmg6mE1NkWBGRUJ5ZBHD364Zy9emADM4aUW6bdYyZRKNrg4h628TDeU6zev5x3qSL4We",
  "key22": "5os6MWv3cxgqP1WkBwfs5RjLnHYssdN3312UeGPsUA3gQsQnUDuMQNaoU2xsszLhyjUDWQ8K2nzWDBcvtGG1APv1",
  "key23": "3F8KGZJPLi5TSZLqpCVhc5RfMH81bELxxAM53dUh5Ca5bb1H3nuM2Z5UpcvNHktY27Q54cc8rPQVkLhRV3y43NM7",
  "key24": "4twc3UAFVqvy4xpXDktoYNuicT3fJJYLoK1LiiSm2zraGuSCst3GNFn6Gy8UbKcDJkUXVHtCpWxyaX94XLFjWc6R",
  "key25": "3W1igiehHnQY5BhAtqRaTFDEwFudNYJAN6reR3ebEThpxrD7aEK95KJJC6YQwN4RKwaKQUNAMppqehgVVxADsCNY",
  "key26": "2K8EpFr82t2fk3aEk2Ge1dmaAQdJnH7qxYRFtECBvcpFyh3bQ5aAQuCpkmET8drCk6sb5WdqR1zV82X1eRAax2KJ",
  "key27": "4jHoTR7uHFhNBuZ1jvR1eHDMDMW5ZyiRzckoTWFT2Ft7kc9i2tR2gH4jWHNvxXwr615vPaqEAu2No1CVm3GToHeT",
  "key28": "4d74X19m1FTrqT698QXDKzFEuFhD3NMbMYbwMsvYoEGzThZNDGfFgTT3JcwLQfVS8pLEdR7z81Z9zsBmGnLcAdqW",
  "key29": "5CahFB8qGTb7T2jXNzyzsyyjUedMBU5F2uUr1pbvqAfcWn1yG9JC8CFYKbQbMNQnH59HUBSWKHNUJVpXGRnPj8Ps",
  "key30": "2VTurGatN87MDKrsQirUqDwoLU2zdvjvUNA3zWjAvLMgTWkmQtBv5bsJk47rpL6kdbVvg3Jj5k6hFxCFrKJfcHTG",
  "key31": "5HLXQavvwiJi13t4G47joQm6FcRemAi8MVZ4YgUguVT6KeSotUXkWNVDQqRV56ZubqKTL4VABi1M3kbMEvdVfK8e",
  "key32": "4KepWgXnFMSAoQkzVwK1CNRWQNSmcQjAffUWM1iNjqCyu7wbqG3NFVFEP8DmqyPZL5JmVMVc7GuHwfnKdtExvNsH",
  "key33": "4BAMc44oNrULi6SWMPbWt4xp9g2uioaw2ogtBtPT8YRoXfraszue3zq99v9Q8qJ8iMTtxy37iajd1DvPcZFoHEF2",
  "key34": "32bXAbm7RyC4Gg1p7N8wCKY5HZGYTmvo4Ustouedm5eYD8ZgpFdYGJxN7WWj4FQo9HatjkefNoDre4Ga7UThx8ZW",
  "key35": "3a2DWi5cgiC7TFSg5Frj3XbG8EWh3wuAvjbG9V5QUdZKRmNHbPBooHJ74PS1XZnkCgeoXQ6n1MpSRgaq9Z599JoL",
  "key36": "5F7wSrwanH5K93eS9Z9ik99xWW1zSis5JvxpQVfRuqHXo6cW2cHnCJFyUvs5orjoUeAiBxfGW4UVnP2f119foAXo",
  "key37": "4XtN1Eg2tj7HE1b6SE1UQu1KUpVZpNNmMSnyU75sCyDLFQvqfAzQwzksFQU1LHkAr8G5qUd56YT9zM5vjXdBrmwA",
  "key38": "JQdWbWkLrUZgDV8aQpqLsjEYVjWEzRzdCB3jnJoBzgxvkyHhDS9vxMFNKYKonDFr2NZJp78uJotUtagmK7vnWEk",
  "key39": "2Ud68mdPcxGxkfuPmbgKzEwWkn5oWH38pmQ4tZxsiJ8VAgtfR38QTR4zNT65eCVpaNGtDaPpHsbXGVo4jcajPhMz",
  "key40": "5hw1pYujSrNF9BnZxU7qTc6rQK5Vg6XUexkCtEG9QsxKnM5JBZWuujLTirHfVge7z9JPPcBgR3uWdTL5XXqjSgR1",
  "key41": "2LKgq2uArES1W9yJ4VsQ46omosPLtvywH6G9yyhqnWjv82cCZyxhD3Wcp3mywBpyvaKYNqBWECEaTv7Qw5eEzSXj",
  "key42": "5TmphtpJHrfhDn7YdV1ponM5S6gL3Fg8KpKrtnmRh7TyyREdMgMgm3mNkjSB8S8MtbghVQ4jwHQxBY9NS9N532Ac",
  "key43": "5iCztDJL85iakrDLh5fc7HAqXRTZSVS1MYWRzg2kDLDyZLV7in1NhKkpUHXxNNb7kgZgRoh6MvuKgwEbCQDZUC7W",
  "key44": "3jWTXFdmLgKJqt5zGzYhXj4PYPXdC2iurK4WDQf66EDU6hyfTxdULmceRpXPZ9JoqM1qgJduHoeTstuXKZBc9ZsC",
  "key45": "65xTuN6GPRw62JUuu9vZYr5N6LQMwcTLm9mDmkLBUrXDSLwhJ1ziXxWPpXNTEnXnVetvTw5kkXm4K5PSbNdPCUd",
  "key46": "2uCdfJ4BXeefhk623vz9gfy2bif7X4NFeaFCo46WyT6vmTJHzKU9MjhtWbVvx4bPC89QRnjmQ9GCLo5xUgqD587a",
  "key47": "LwSa1teT4W5HYXWSuxHNia2xxati2pMNG446iT4V3jyMQHJ5GVo5TFjyVZsF5WVc752cyu5UgdUk3PutCWxd47f",
  "key48": "3VmJoe3hbnX19dVQoSh5mwUhef4FTAq3AigHNMEXENyUfMZi63SEq2HfohFQXYJk3NCKmnzVbnt2JVHnqH93dZPs",
  "key49": "yrz6YTgUsnSKgFpUCCik9wdAiW73Sh7UyD1dXuAdCdibuvSuZfy7SPvnLGcR3k9V4yfim5q3XWdHXJTUzhQXAf5"
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
