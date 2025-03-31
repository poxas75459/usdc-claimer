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
    "3WpcoLnjMy5D77xdyFcDguX1dw1ktUEAi3HR2aCKqvWzrMEF4c6jeZbGujJNmxawyuGS9VLyxNGo5SUs35M3hEXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJd3imdkWexXBmKfUPuPMuf1cxL7DDubbjJieSfrkwPkPJcUj57D3Lo8StgFW3agAi1oJSYVnuHVufhpN3Yn2qj",
  "key1": "HEiyEUyacxVr6BYpW3fUYuEw7b8bYsadNPEsxfKNTKq44f73Fr9DTiKijpmCPteWMFzy24AugVN8yh4RXbwAqog",
  "key2": "2Xkebwor3jdadZGLFCf13uArLmmP9nSPG5agACRcfWMK44igYpJz6ENuwba3bPBJF9ccAvpE3hP5XiE4ezKRgL3t",
  "key3": "2x7LbJhji5c4JuupmKeAsJm2KAAgQc6C757py92vzCXZQh1DPtRmkDhTsrfhnJLA7B8kw7xs73s6PCnwT3hziC3t",
  "key4": "2KpCud76acJnRWQBACuiffSL1KBT2LUVP5CgpfA25imd5zPMtSZDULoi2x3n9v6HUQsf16DLzQ2u43ZsWzmiCscQ",
  "key5": "2Nz4d5ztiwqVqw65BMk85rC6Wf7fQ2vMfJ17qnvjdgYt6HoPN6qZwVN2GjfhsPp8v9DNdMySX4km1ZZRLYdbLKCp",
  "key6": "3GDfgeUMbaZFjYVZPgnnKGfMHpmDcfRzndSBJb35v7FEuEhRpyZVghFXurPSz2owYaq4dnqV4HVG4fn2KCQ2opYT",
  "key7": "2WomN9QyXQP4eQ8Fe68F4MRmaw772eB6NmDbNS82NSKWtFZwAPTRinybsLCk7CP8P7Hu3BhU4Y5F4poQwp6fFWDB",
  "key8": "5gdcEGGWbCermYq6wVpgXqJsuHdp7mofNF36JLmLSdLr7VGcXth2MjbwCN8AMmuW5NRzrgzZkGveqEz4rRMrQPSv",
  "key9": "4L7PMkTdJpWZrxwcs673PoaZEBoqM52pzQ6d2AhfVi1569qSsitfTcqEEEpJAAgrqYASbeVkGVxuzp17AJ437fN2",
  "key10": "3aT5yWhQZXSn9uzFdgcWx6t7oDXNEignx4EseSn7KRChs5PjPa8pcWnTD61sgBGZGodSLi2Yg1zCbxBWv1aAnTdb",
  "key11": "5SJcvdtTGWP7LcfYasrbawNMhsFfwYrgeP3s9m3pHhE37ufmy19MzHVVvGntNAvwgJ8czTuWjVANZEW5rF49NBvg",
  "key12": "3afEWBzM1GNwbjESckYxPEvDHqk3dt6at6R4yJaLWr3rofjRuCjcG9qNL7vKSg1qgpst8FqcGhdWVqrxtiocGjZP",
  "key13": "mmGyLjWnvW5RJgEoYB3i9pxsLR19qRvuBJYoTJnDCvkzsoDJGvxTeBmn4MVM6rUeuH5akCvHakdBXi9VwYFN95w",
  "key14": "49nA8F7sTW4bFCNBkmXeQoMypqW9VwZhxpWc5d2GNDWX97ecYWMtqF1sQG49vTjE4TSfb6h8K1hVakXgtbpBnsZv",
  "key15": "54FXtXKnGw8uYKvzPgnTJRp26UXee7gdEAczcLVgSAG2sT1c7xsqCd1fH9Moe5THuLtWwc6qo5kRDcb4j4vW5wKh",
  "key16": "5zm2UD12gZaF9aer4VLxX6DvnRk4WJWcjzyjPQRLJooWePaUdZFaeRwWXiyc7i66naVJooUY43eKfhZncNj69RSv",
  "key17": "2WN2YJjCfKWWaarRdtKqYJZ617uPvY5THVzUNwKd7bey3PU74Av6DPjXzq1U6sakxqS86Pi5QRnRWxRXRxdgDDi3",
  "key18": "3opBZgM3uULPYbborwfMKSLjrTJ1tx7JNYpoM6C24bruDnhZ3DhKRcpcizaJXfdKtvY8GNriGoDqcVoqRXYf4hZr",
  "key19": "4HdSw7NqGyNRzBM5mUXdBNM93NejCJ1ESkVyYpVbGbqTxBn6m2UfgtgGNpWW6Zxv4ixvu7yB1BZafzJdAhUB82UH",
  "key20": "2pSr7bMfmUXKJBkGji5ddC5hncZ7v97S7BethZGKqGCrPpTsQCtLcRh6gGkejVwCh6h5vM1X7ta9sqxTDk3KUwMi",
  "key21": "48k35rkMwbwwSXA5y4uw3QnVwngVHBwVGt6j7JurYm8iwwieWbb9YbMHuTu8qrrWuhF7CX4wDB7wjsbnoZtBjEML",
  "key22": "2t3dDdmEFQuNQs8DDWkptFAUsUE7GEGPwYQEZ9qp3BpZs9u91WqTARzZJ259DuLC8N2Vb1rwe8e2cevQ35A1L2LT",
  "key23": "5qZLFWeifpxMaytJH72AKLVV4s3ZTUszjRpQc84q4rAPZUnN19DrzLiEBgJSE1ZPToRTnvu2dNreh9mx19yfSBUj",
  "key24": "3KddDMZZHR1VjTtsrdXnBLjgitbCdjbDJ2XwZNFmmyrHU7gjnF6UTHBZZH9TyeprSNekzmbJ8Xt7yaZ3byafLrDL",
  "key25": "MEq4MA34jbQNiXeV8c9GhpNPjdqUVCr316ijCfw1LGKko6yRzsVghRnLXSPn4iEYdwgSP1YBDDjVzzFE7a8qG9d",
  "key26": "3yxBTz7159DCcJaE2CdRAAv8wk6vJjKvVJwxdbFJ1mWQWty35MhV8uPTaJGdinx2fiecP1ZixQqhG6a688KPHG8b",
  "key27": "2URFo68pDJT9TAXv8vc8pPcVEfApe7sYvZ8AU3e1tNzTaQPvgQ7mrc9fsqMTXRcXSuJzmidCDL5DryBqvn8zZ7MG",
  "key28": "5GBAbFMrWS8PxRX3yyUQbkRBjmsnN5Uwx511jvsTPAjebW6xctDtDMPqospWS8vQ9eBCa3Jzep3NEDx1MQPUFv4E",
  "key29": "2ckZmVAUas1FTTD4t7orjzfHoXH6aLGBV7bZcRd4zsoEHj2GGPYCybufAcZPeAhHDWZ6EBmHwaw4RqTFGyJAYkip",
  "key30": "3zy9D2ZXTyxD5Y4q8RpTbKRthh7CbffjJy7eSCQPVBu4gjZDaGt2Ro6sqnoLjVyaXpkFTV2mrPSbugJYwonAza1j",
  "key31": "3i5HvWLfcXZVhRbeCtC3d6eRfLoufVQMjPQBESWc7asFHgo6SnzPYGmf2Xum8s9sGFyT1mxr6DUmzaJAtDyBTHjk",
  "key32": "5XhZWqJisTdfXEA6jhZaiZtaJUygxGk9uXihLudUT2rZqrh675XLG4r9GTPzK4SafvP1anjk4Ae9hJuZLx6gsJnJ",
  "key33": "3BQAUVB88GwEBmpzHACkBQNDtLG7PCmwAuCUXo4yyfoR2edoSWRCbzHi4j6tiZd7qts2uwnPStq1jKU25vy9g7mx",
  "key34": "4kBQSraxknNy45uZMdqodE2pndEcv25dB5rdAQaEckSi4NFNhqvsFSGnih7q1pVBatpNK5w4Ws9q7f2KxfyMtG4k",
  "key35": "dYwuuLFAnZ1QZifUHoA1t2h72vwTgzs38VJorYCTtKpV9roeaJa91y9cvk8ASRcEmsoghbi1oCWANv5LMAuyGgk",
  "key36": "UtG4dJdy7jqrrooePB71VVm7gnop3vJMdyjD1LYmyp7KK2LYYokqLv8qhP4FfXQp5ZFAoDyLVwhsqQpbAgPsVdX",
  "key37": "kvyGY4iLXn64zrYuA6FjDbnwx84Mq4xbidUJWBvumd8chPJcRHmZMLj4ibckQHKHrPD8tBpgndZJErbuWd34wRz",
  "key38": "PP1sZT3GYs5m8jPLW9Lvr3ZKDVGqpGaqX875Zc5nyZdba2z9bThGFVNBH91egVQuXJu6hUCTn2QGaLVT1WhLJJA",
  "key39": "31HZb2bCb8RkwkYBTEAJ7k34heZUidTczRZg2Xu6ovKNMqFEVmhGdx8pP2m9GvkSzDDkJuUQ9hAV2nAnnic33KSH",
  "key40": "4mDT8XHNGL8S4hHTQTmve4dNeeWQAsXRh6ZSZSJy3AiufzHC1SjXnti2DGKbijSWpTUf4QNsZL2K36PB1aHFSh1K"
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
