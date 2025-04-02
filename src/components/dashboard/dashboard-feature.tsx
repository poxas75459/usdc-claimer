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
    "5q2a2RBbvaGZad5FjtBmFKeBvCdv5uQs4CGmf5Uov5jjTTmiUH1H73xkNPW6Q5r9mk3Xovy5FP8Ck9tviBZTwaMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyaaUAmQibnwLJFshMGSY3Z3nz9yJYjh7oL3WeEfrKSchYPQ69w6PVEfDdhBg6tS77xzRsTYPs3rNadwYVRw7DF",
  "key1": "5xbNbB7tqWSisYABYhCi2WLefeYeHNvkJq7x3ABmetLCzwuYjkDw1m67VX1HdHQkejxmJkdxgVXACxj4CV2G7Jsr",
  "key2": "3uuZmXPUSjvEFpLXvMGgysJ61VHR8kuVc8eZw87Xbi1jqB1R8vAmqD7VJxSArxGFsZXZwGx2Gyv5z6ayKeYfV1EY",
  "key3": "Y94UPKWRthfYzgYJVyftDA3BiVWooEUo1AHA6SBA6hEzdistZSgDx2RaYvNw9S4ABy7Z1xr5CfvPAkHzJXa2uWU",
  "key4": "2bNDf3VbkThwq9RMPYniAPMytrN2QPaJ1PTSjMGXuoLsFVwybRX4FvJmWnPqKKr4thcA2fEEpwbSDKmtmNT8oPvK",
  "key5": "4F1jMZxzpMAhUEeuyJtZMC6FoYWvrq7xL4SwV9osKarJxsU18YX8mfP3CcvdhPmKTPDsSLSesebYeZrct8ZHE6Ft",
  "key6": "5PkekVZL2k1PeuRyNSJPVdw67t8TTgbUDqJDxsKypuRfT66oqhyVmjcujqT2scgXFxPx37WG9EeVCusiheoLReyx",
  "key7": "5jsTMRnLZnRr6zZEurTrA8RbfXUqUXcYF9J8zyjKvEzdRa2TjtdtBWWboxc527HCSJL1XqzgEn9KkioJ1WH7K3xQ",
  "key8": "5JEQSLAPHoRu3naFomqN4ujZAbCXGqExZXRALrxhQ5vL2ufrQEEZpTxYAcrg4NMpZuLJutjTM4hfK3o9RXcRW79X",
  "key9": "2sLtRSSmJwjwW1pvcg6EAwnr6mzCsRTSFKAV1J1Fh4RQVB2eWwswNfWxoQexLJM43HpoNnoFqTAHZGC4Q5a61EpU",
  "key10": "5TcYzRjnZfiHXJvUrSo1SKQBTv2AWjhgSjcguH3iz7Zj2D9M1cSqoqEc1AN5VpTGFVMgAfSnZzMuuiE5f2yoD7qL",
  "key11": "2b5XaBoGL2vsMebnB9kKqq1j7QUoKbE8r5TqomebYUdjiZUtj1KVFnrmSJMaCktFFiq2h1bKNHfN8dL3yrJCMicg",
  "key12": "3XevUcjoMjkMabUr4GLMv2fUzoT6z8yP9M31h83EixKYUXNRegsK7tHMVMbL65GrjkpotJeJQ9CyEeiPFRaCLbkV",
  "key13": "2pGi68bdvewDeJPHyL2z1ogVQcNEA1tUX14YTybVtU5EL2YUP3Wt2vXQ7rvEH5v6e6Di2BH7vuuZ6996JsDm6dr7",
  "key14": "49LYkDCLMwyDVMv12WrdfnBgnJzFEYYMK2BBsXK8rFNJ5RcL3UUL24WeKLcvZE8RNPeJ2TXZUvTqivqG89MGnpug",
  "key15": "4vcSJnbxcae2rFHDX8uFYHQ9ZgDShN6eJtnNgNNy6zHY4b9r4d9R2vLn18MFXz8Vm3vPz8nSGXk7pVjW41WPtSD1",
  "key16": "5gzCzXCzF1S41nNmCpZZb1cBVQvEMzhgYbzTFr94fJ1tsKVeixdRcPxXezMvLs1cyc68w5ctR6ZCbkvzubDBY5N4",
  "key17": "47y8HUR6X8KY8QsZ6WBzTQc3HHg4MpZqxWsLUks2qHpYRhL9asZ89NqivVrofjYLPZt8j1L1KSmuVhv6qHfqo1Qx",
  "key18": "38ipRTj1gh3jXp5DMuuu49Dv6sj9fFeixqqC1eaPXbd4XPtynoUBWJrVTa7PRS2QioL3W98o9u2MewWwhhgFrvc",
  "key19": "4ko7PomCS9qrokjswUD5Eipq1YDALgmi1Qu5gwJYpK8VkzJMxhaBF2aWNvX8McWMKg6yCrkRbatrdfca92bAYvS8",
  "key20": "224ciLZVESvX5uSnzknYo5ezJ6CgyCJ9Li4nr4deUmFn68M2Esn7mFqwYGZ7vvmJsQ6nsPnskpFt9bJZ1V4n9YTQ",
  "key21": "2iJyt2PsJBmeRvkpbsg1xfWqp8GheUaxREE2CJ1fLZ6GX1rUZyzC7Vpr2FtzbsHPHi6U6mgRSYGQcGZWEhBd3hzH",
  "key22": "qBiqhgPqszQxh3o9McdFt3BhmB46MPzcPUJA5nXFD6ftyjJ8JzAJSMn7pp1rDHUjtNHe4LM1JULvtuME3VndGxJ",
  "key23": "3vHK51B7XFjRLE4Zrn3obdq2VYy4SS9oP9AkwddmC6oM7cmttKkD6M57WASx7yE4i8bXD5mfJ7wHrA6DNjm74prm",
  "key24": "4H42ZENbnoSW4FawrUCNsCLt6DBtuWq56bYdYk7R9GHyqJkkp2r6nJ3X4cS9zYL8WYk4C99iBqysVm2jtNh6gKpm",
  "key25": "4CyJCRb8eJgp9S14rMVx8kFvBbffcjY1jZqHubg5cCsCVCJ6s6x1jbn3GgCQPQCGY3roEZdUMPMJ127vCnYhU92o",
  "key26": "kaRrKhNbr9wtbwxDwvQPv72ym4QCsnoR7v2oADwvYSYLPzsNgHaX9ejFZJQmmEcEVGMf2mccmtLm2QrRz9LrMAr",
  "key27": "3yN8Jtoh1J7KJoWpXSH7o38RAVa8J66HxF6mwNvL53VmiZegTyXAfxXTzkaQUjqk8hiRt82Q3rmk8PCiDmVTzeFM",
  "key28": "yLdyb73UKHigdbSFmdsky6abGhG32cFQtYLq7H289Rjrtk9Wdcb14GJTBsjoahrRF4W4UgUhCHS4SSNb44J59RQ",
  "key29": "5ByuiEGXtmgjB1RDiWE2ud2pziH7D5u9B6tNPEuLttQy7THFeszZN48WXq2rxBTfDMCQdDjjLHyeAduEU1X1q2VE",
  "key30": "2vYEX3NabBJFirSqTP9BztkQCJ8KMWP44DEoWPgpNHSrR369Wg6J87tob8yBkLDZR85R94XRsGye4KymFiDqEx5d",
  "key31": "3YjCVftDSXmchyB2m3QfHoRjyrgpn49yPVLP9ShVs5z9AZzhkLCBbcA5wzVraDMBuN3uf6LZphpBMaMmHLKewTQh",
  "key32": "2vnmr5Che4t7W7232hPJumohmbsx5sqvuQTQ9LvdiC3e24QewTaXPMwd7M4UF5HVzGgymPqhaC62eVGVNguZxD1A",
  "key33": "5MkxGbxWDdgsCzUkjN1ugh5Jb9DxhKjNsokJ8c3xqNDV26KKJburqotabRNt35KtgfsUewio5AAPvGGEsk7snisK",
  "key34": "47zUB2RB4DX4VjLED8V8muaGJWUh2mmXENo1qZzqMFRLk6AbmvMyWXUmjEiYzEP7VrPkEZriSwUAdJQWJpYjY8fn",
  "key35": "4Xvo15xrsJvvhNnYF9UnL6qR9mkCHoZirYNYrt21XC62ue63noAJHrbJ29FtMX1rzWL7FkWeP4fYGzgwTJG5Vs7x",
  "key36": "5m4DHiFmsb9kVpJLXcAGovEAK2sn1zKwbjd61Zm5Cmcr9gzB44kZBGg3qubm4enXy4LZDbfdDmuhWQLciavNqkpQ",
  "key37": "3favPDo69M4bhJzz3YSxwHPRPU4WCCwsAyPeUC6rRRpGxMyCGz51ksQZn7DYkuVybUrxnR9E45KxmSN2CKkh7KRG",
  "key38": "znZumYv8sK62pPLu7q1c1cFEg2W3UE44TpbGNCh5XabSDixA74g9GDELYkpPubM97osfafErH5reB677KAHWAac",
  "key39": "61xsENXrnqcvLXnkfb8zvF1jXgrFYmznFWZeyZ383UhtLfHD67qqhGmTgsSSMEDfcDwoZWGv6NzuqNjaFu3R8VAv",
  "key40": "5u7LBpMCujwV3wRfhcA9ekD8jhJFgKSSNMUTNvcyVAWPEiut3DXDHdn1LyV3xS6spfua8B3N9KVFTi9FBmYM6maB",
  "key41": "2RQMeSmgvzVTpGGiy4WF9mgTLqDNaCXRne2VgPrGapMBAm9cxeAC1JuKqoCz82FLqUXb2iE2iVSwAsvKKyvpfoUG",
  "key42": "3RxAsHbnFk6Fq622eLYjhdQhcngvjQU4SDvVKDW6fyPn1Bya3H1y5x1mRuFVSG6gZAMeHGv2AT2GDpb5PjjPww8E",
  "key43": "3JvCCADvvMxM3UPy2H4JyhibubBhKd4Jmcs1jQw3znszkEacY6Wyn1qDE47QGquasbWGGy9NFJk7DDaJB4zTMUze",
  "key44": "21fQrZSNuuXXLU5B2eENF1e5zZoTFFDDZTGDTPXggjKSU5fPwLcBQJy7kUAkvbazGPwzeEsrRwVPXf7qiDg5uXvC",
  "key45": "5qtLEzZuv65J4JSxS8H5S9PSjfH68m9MYmTD6ExQYbkVgkbJgb1cHsiyVdqvcg9PseCkypogSfbQZixxR7xSYQyr",
  "key46": "2eSw2sRMssZZQghEzEHKWMXscc3ABFCHFbJSXjz5Xk7imgFAyt3TSzRRfCdvQuJawoP9vVrhrqfmR6r9S17XbDPB",
  "key47": "2dH8e5dxteDAUvQBN4wPt2AzHW9nvfJkDXaaDeYQ6t88DvSaYM99fgKMguF7MeCLwybTHWkiiesSaEZhFbzQFmy7"
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
