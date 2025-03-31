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
    "2WmK63AZjXTjpAcywcRt48SqQe7dZwMm9i4BfytPsSC4ijCUYAuJKFdT6czAhBZcE1EPh3nAAWHermkcPsLkRu27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BiLzSFT6DizyKsQnswpcjKn83ebjXRU9VNnEePVDTbPCDLtt1cN3pNeSHZPeoa8FampKosafizFrFb8kAi1NULm",
  "key1": "5ENhTBoKueMMFg5GjSzCJcRwvcqr9TfHfYmav2dTSe6KS9ZWQUXWvfH5Fw5vqEdyv3wtUy9oLtPNXZaqcaUMR7JE",
  "key2": "38JKiBHr48woHTRnXnXiW6qcao8yyMegurGKYFfddTm8Xwc2jy56RnBv1JeNcTKUkJ2dE7oPDZRkYwHjcJrxZKD5",
  "key3": "KfjpaxTkqxTNoCDmHnrt1oPKmz8vg3V4BxAEPz76tCyxD6wG5VeXeZ72H4EhUKZgDf8UUTnvd5TVtKhBUtuRWSD",
  "key4": "5raQsHSdLcozQsK5FMpJCb4rvwfHRXHqdwHzuuRb3cdasnVxbjEV1JfD82UqCLae26WsYWJpQCYVoRuP7aC8fET3",
  "key5": "9Gn4YgTQfYfU2vDXTvXtTZpp5CRSBugUSYJqcPmVdJQnyGTf6fdfq1huusWdkJRPjGa8dCUDAkt6xGDY1ah55J4",
  "key6": "5osuf7vtmdCtvWVMDGowpvqDCwAYyjkwojQExekJW96kSfCdA2BwUB5D9HooRLxn9rhbznHR8mD5H1K1ND6q9fjA",
  "key7": "QSPqBemNs2UVQKopZJGtd5E9r5LjeVXgwb4rZUKrisWkK2yNzsXDfusw1aW76bcrdNvJPpRwTQ5mfvq3bKZeXSZ",
  "key8": "3pKjsaB1HoAbAdfBEEqMnf8LWQN2J58MXVyFbhpcpQeZsscgVYeXsK2J77EnXgaNETgHqCmgGTKN1BY6Wz4nCsJF",
  "key9": "2NjgdGoP9MP725zKHUCTpMxydCtgwbhCyjYZ9EEMVW64Zygwyr9n3TiWX7Gz42CVG6YrYQsmopXTpXBJgMFvvNtq",
  "key10": "3anwJ5HxwiNd3b6Rjsrv3ggAfo8Gupig3wQWmEyp5cKNmorjbW5pwT1tvS3C8NLnJa8aRnJQgjKMZHJcmkdxsL5w",
  "key11": "5uuv24idhZcxWdQiodPtSa2BqkejK7iqR6n1hkw3PZCJG16i399Rx8fDr3Rw8bfAB7jEWT68e2MK3e7jKroFcu4B",
  "key12": "3UNpjGjrKqFVmsDcNmp4TyX49pgSDgQPJqqj8dTndArtiaRiMxaa7cAaE7yzcsoAxHzoLTfysfLAaxmL2nAxeaDu",
  "key13": "2C6q5ytvvx9WrDkQPNrZb6npwSEmG7Y8wfqr7inMpuY8j5x8vgBn7J2tLZbaQpK3KLVa6xnm34P3yVVcSzLz2ttx",
  "key14": "MEZZafUpEqGRtbMzEjb35KRPdVWzrrxvpHScuSavw1HjNGnywBYmifZr7Va4QnRxQSGL4NDh92vADEVt8RrxTyb",
  "key15": "64uQy68coXAxoW3RSK4AMYcK8dZ7vKSbMyya3hUAj8UeX9AtocrZu7JYEipXnR7JN9PgK1Yxwppswd6xDd9v2AiY",
  "key16": "2qCHTPvV7HLqgbVtSHeMxnBYYeLwU647o3ZnTYAZYD1A5yAeQCk4cZFCmNvv2HKoEB3h2Kdcv71j1NNHsVDMoGW4",
  "key17": "UcF5RWjpyYX6PqLin3xAEUkuXdRQyLbJLPbuTCsLvp559ypGHmszGKfmuQku61wm4bj8irRaKiyqHvike7AnLmn",
  "key18": "4dmxLMa7SevPvzsjt6irLc38b7maRp1femjb5Sqobytjyw971KXevGKedDj86cBf9U9XwTrDyM31HWZqz9CLRoFw",
  "key19": "e8Lnp3kigaY1aG7b3GsjJJuneK3Pq7gsfZiUrD9iiNjhaosrrkkm3jddtxWM3oWTSach2oucppuhphNMGQQosn3",
  "key20": "4hJZT5ciR2WRrwbKkgAUao2saiGASJBBbtKfBWAMjXpDwYMkDqiLi492AwUjckArp3AyMDrxqho6irkJ2RAU57LL",
  "key21": "3oLGoGcnJL9MSkea4c7EtQLZtwXihDkzwzzkAKa4RgE4Jo7tKTEC6YRevLQCpH9oKxBrkfiWcH7vvJhSN725Z7Rc",
  "key22": "YLzarStmyKgm2u9RPe75bAgQny4qib4F8FLdABpt9ribToKQY4ycWtp2iDMJrFjEeo4vyHuEpWjett3iL2u6aXz",
  "key23": "5Xy8oqEX9DzEj113RzVDg9114nzNJSNvcw1NKta8VGHNx4oBYjsq58ZXn2Y6a6gELZWqeq9z5wyrXXuBTi37X5ZB",
  "key24": "3B3BhLj338YrVPf65cSauaZe22otLjVLKHLZUu9LzGBHrE6iE2DNL7S7QYgqod1kpsz6rc8EoWyRH7FCA8ckbdCf",
  "key25": "4rYx9tTuCDH17GBxCvXKxGbkQTLSMxnq7GK9AdfojnLhW9vgw8RG5WALhNtvFkxcKSyiiX96kcpvFUGYcQS1rDGB",
  "key26": "3CcgsG6nSo4tcVTmWEEAo9UhigioUThxuougYfM4f6ojCoeLuDVonJCPN2GX2AZWiK4jfX3XZ2jmP2ArVv2Fpgwp",
  "key27": "4XJQCAcm2ihLfUyWfPFPStHU1PV1QCAdAnW6qb1N5CBa9sUi21SF8P6ViVXLneDPKrY9nhdBtvDX2Dt5g2s8V7Cu",
  "key28": "5XGeYTLZT6cDeXLG98NQ8dZmuqg2e1hRNtggkCAKU8ckuVdZYkQ1J3G53EX8fUuXFAjyJ9n7UQcWQeuY3FbMiqFX",
  "key29": "2HsL49nagXUY2cy1VvfLAx2JZjmhZDH8sDXtViygdMbQCUfoaM8wFHfqmG1kRamRfXqaybTUVqceDYe6nGo6ATBN",
  "key30": "4VWQ3EwMke5L3Ax87qrrkDGRkXsYeoHxJrGDtEhEMm651wxNntA8AgBYfUYxYwBEMKJq2Tou17cSj6M8N7G942DU",
  "key31": "3Y4vfnKpEkHjWVVMLik9byTP5wNmRUT8agChFEdFyh53T7AYHxFj6jTVumGcPijqHFL8YNWWSjJEuq1k7WwS9j47",
  "key32": "4zmZWCXCY5KEmqNcpuP5SAHM5tQA21KQEqQNA6cdvWi2zCLisXBDP2KRXDYYhLRg5RqM41Tu2A6jVgR67UDSRLkr",
  "key33": "53DTQzw5msyHLak448vBt7xMvMMTbdjnVA2F3fhQoURX2ucaeGfFAt1zz7VZeJpzmVKtk2LcvEVy18tiMgdQcaAb",
  "key34": "3AeVykZXbscB59kvjgCEFC6XoawBmLuXJqZKKruzbw7G8xxf3rfBW44tyHS9GqmvRFWi35xajzuxZkYpSxE3gNKi",
  "key35": "5Zb7FTy2jvZ5yve8GfjEA3j13WfRrgHwHSL3yMPvbTHyvmvJ68AiDXSuTD8cYnZbJ8A8EkGvp7UGh4cfihV7k7mJ",
  "key36": "2kskwFriBhfSLM1irnBqTKcmcSWSSjc86SxMV1mX7N68RrzfMbxFTschNo6RXoYx8fB9BuT6ugQgcf25hjm3okM4",
  "key37": "44CMbGjFyRkTLuLf3rSTcueCaxsdy7FjmA7pfnjEqfQHW4R2QjupDmsuaiLa2bgec5rFZ6Ju4aAd9tgJ2Ya5VysP",
  "key38": "447AyEC1Feyucw5AjDmRSgyDTJcCo4yyY6nRzkNDj6AuuTGvcso99zgdX2qug7WqeRhLrsoc6nDeBmDGG6JQVepC"
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
