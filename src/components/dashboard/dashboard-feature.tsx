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
    "NsWhJCtRuqnGYcB6EA9pjDfp45LVhkxQ1WkMy6sVcYURYWJtQkXKvKbPzSBXnq4aaikGaxuyEgzXnBrYmTxCACk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jE45iYSNFmkE6vheV2kTYPXxixCuKH3hpmPHGDV2kJ8VNTe8dt7ft4HyvQD5Vdwp3vraFt2X7ZhtrhWz5qpY2N6",
  "key1": "kMft3uWWRRe2ZiiWs1kMEHfqRSmevjKejoMUF3FjWrhASeR6jZ9japV3V8pfiHR2CCNL9Bk4yv2Hp1GPwjWy5h7",
  "key2": "3wQZpicZ744b6PpaBLPyDUyzxYxxt4xQU1P2SdqY5eP9ZEmymgjKyqZYJjBuaVgMeTWwpp74yrRVYNhN5t2xCBAx",
  "key3": "TWQNtJNhCMXT7EWqS6foa9Si7Grw86qRu4ycNEnRHeXxoBscytLS4T1VFAsQyRWSD5sVrjS4bH1GHdaEXnLGCJo",
  "key4": "5whkcSNywKzMdLbQFiYZcpNnajKjssD7TpHXgGMdQ2fh2uRqXs5z6eThDtCseAaiSZUJQukct1oN84knzfbAvxXQ",
  "key5": "2KkjqQGWMBA7D8mGkPojh7MiovEh561vgKs8erbvycsUi86Wmngt4aRDeH6CBWKZwC2aKt6HbeLJGAtdDrevWFM7",
  "key6": "2rpLnTzHactp44EuFNCJKXkHTXe2hATNkvpe6vAustUwCTHGPkmxs73ZnEJ89rPUk1czV9nCUoMJfZyTVkp5Jcdr",
  "key7": "4wcCwMFyCWzmih3bd6Sc7PVamRhrbvje43vEGBzfToNirhFRm6zdHF6pMNPqcFFKmixtJnM8sYmd79rjbfETiqDn",
  "key8": "42FFoQiyqL1AZsGPDkLF3huPMDtupBQEUUKX3AdAY3Bn3qX51ZFoELLocx9rnq2Jw5WVAB8GCxtArPawe1o8WdM",
  "key9": "2UzU35HwrnkmBTtbSAdK4D8nW1YvZ9kWwmN2uAtVtn8UdLYpcdghwVqNceFduNUqQ3xSuu4nJDLoVpLp5QsfVqGo",
  "key10": "2Dysx1hZyiFJKX3EhoEvvKEihkLYaCRkJMP5MTqoEiyuroBDtMeVZcVJZGTAGBmuXcz7MNq7Hz61MwW6g5VFeCsN",
  "key11": "26c5RoofjBrtCSwRt1amL2Di7Q8xwYWhmc6VGAPS33uFxfdTiuXLzJHGD5PXHFdv7uWvkviFeZSBR6oGek538gKj",
  "key12": "ZkGo5gd5xUBJXVVqxwrj3YvRzESqhuH6Lhu16bTbQV1ocpPji9fTqAbrHQhLUSpsukWaDaa1YBeKtWQwZLpFUgH",
  "key13": "3P4nSoanMDBnytEcqDy9QNra1ixfF1p1sRmgq6ozhN264yiZRvz3ZDVmEWQcGSGpCbhAzLGdgiePXb7rXiTgSHJv",
  "key14": "4roQB7BXFvwfWB74zWf876xuYhQbH5yBsNKx2neW9hD86mmsbXwyoP1kvKHRpMTWhdUkCNQNV2kYENPaQmVWmD11",
  "key15": "21g6ooW8494kPRhr3qABmb564bEUDftkkzHwbJSEZapEZGTMh1Tu4DEBQ5WmNeSaRg3x3MqCuSy4MnCpjtwxkyaU",
  "key16": "33Wc3QF4QWrj6ETQREpkd4g7mNochCGiqFznmE5EYuekHRPQWu3tvFokGg7hL7nahvrVN925os7pMRfG62kBLatM",
  "key17": "2E8otJthLuEWq7w5YnUAUsNcj1ef7pzeinfeyRyfUYmJzXLuaarBUpWG3jbeN4mV4EeZAri1pHGeyTg1a93dVmwS",
  "key18": "2AUMFwuweLr5fXi51K2qud5wMf2F5YP59JEqzAZ4iHrUwWhHpSjxW6U3onGNAmNqUznti6isyYz9RSCnCmkSy6FJ",
  "key19": "4B7J7aXPoWLJK5AQXDUPASXGiXLm5eECGgLFBMPS1MAKYjMcGfhyymR5bCgBGh4C9wt7HRggQU2h9dtybTZC4y7s",
  "key20": "2r6jk7wJwpuqRDKgn9WXSCzeA2q3PFfmbKP4mjWn3PQwL8AvikujDiMhPF3MgHqBaPLbkbR76xjLkHNfS9oK5HTE",
  "key21": "5sDxmSnjJkcL3YEmz6RjtDyuZwBcWPhnjkNKTaQLAMGdhPoPCYWtiT1EnW6giMsxVKcSfS3oGXATX4AYLgU5Limm",
  "key22": "nGh9srrPN265AF7xXkyCQJzFKoSfdrYbCDopLK6wySU4TPk3eoNm4CgogNpvB9ArTqMAgLQCboaZGFqjhEHqUK7",
  "key23": "2b6q11XbTTu4eV7XFHjuRRB9ZV8ogwB1Kt7VFrUbe38Z3Ckstv36kVd2nfdfrFbcAjiXHnfiA5gch6tBubrjRfqi",
  "key24": "2fYTh7Fzof3HSzwiZeUZqWktNVS7CyQSTctt65FYLQz2FzUJ9g1YNaKanBYM6fXUC1d1xkHCmJGqL71FtHYiC6o2",
  "key25": "5LaLUnG6SzcWNYKw89B8Z37b5Ridm7igRJYKReTG3v3Cwv6JhkxdUumMtqxgmm56uXKwTAB9Yx2PrN99eeAuVVBE",
  "key26": "FDGLLMrDhXJbwmb9kHf3HnYiJBSfzdnHzK5AckgcKw4bdUtp38hJmB3tHcnbXNhdbzBuD9wzyq4jCydgtG4US4c",
  "key27": "2NFhTJ1QqB6NJCkoyQ8t2baBsQLKQsVQfP3nFkhEADt2YaVQMg2tiHwGiR6q1wxh3K6WUZBmjyYMT9k95ZPaphpi",
  "key28": "2brPtDyaq5jkNdC9ucfFHf2nzUuKBHTrxH2dsAuj3LcKHAt6yNHquniyLXNikMgnErcmeEYczAYr6hVXYfsC9EgN",
  "key29": "2E7g6pviKoaCLQ6wW8uWqxHyFLS9BsWSSw6rbaXfgWhqD9zYYK8DN3RJ4VCJKoKR1pvdmuBDf1eqEr3VqbTzkMK6",
  "key30": "5crcbwj1TgdSM8HvSJtNUaVh7VkoM7H4Dx1xQUT8jDRRaHdTQGUqSeqXtMcnTtPxtkAPBayH3xbhVGCnWQvZdg1Y",
  "key31": "4DktMmi4ttvVYSU8JMDavhZvuXQb8CeNyM4TdUg4WfKnoFdBAVkPPiJ8XuoNfwzmwkB3gvsEDaToCzpzUpBxWCQe",
  "key32": "2AhF6PJC6ob7puhQ3gzBnrMkMsdGpr9W5sfpoqXZe5qsvUfbatK8pkQNFqG4RtA346T25cAiW5cVtEGyjDvMY2bg",
  "key33": "4dw31tfVztV72xYT9q3fAjwLRs2uaFqQMx4Uu42p9tr6nFEGqrXzGhokkF2SCFmqGUXrpu6Q1W3shhj7NhayH2TV",
  "key34": "475LTUp6sFNKJRMyfW2YdjQd8viGRLhHa5kH2piR9h7zasMhrbTp6R2QUpphm73JG3AfjyZNUJp1kgTT2c9x5Ku1",
  "key35": "2HPGoDvsonjKtw5EFkYSMNG9MadSnLxwpb4suoxHvb2hKg1BQTZ9FwE1CnvX7J2Rxhe5RfUAFDjsia4cKPZdppw7",
  "key36": "pVyXYWwjCrgBv9wAj6oVj6sBd2rwZsx3V1iSEf6tWcMPLZMDJQDLWNW2uZSdTGz4LnvzbWo14jCa9Ber4k79Lh4",
  "key37": "3ibT7JBAe6fEeRHdxAMKAJAkWV4tc6Hb3DyTRyxwzrUwTAKzBcrhsuqmiCTx5VHKAKoKHgn745eRPPPGwEwKgU3",
  "key38": "2Mn6TtzBCQGedzdWNiR2dYPVAbP5bk6Tm3AtMSV3JtgzLWjKs6XGSvjMWkqh6v8t4CiKrEjxJzYVLQZpSAJw75G6",
  "key39": "DuHTQVimzSfcANwVC9YR4Wjuukr9Umk5cWQtRWkzxBmuAKvuST8nxURptdW5xWNtSsoLWYytuid8sFTsq9haJqx",
  "key40": "2451xUkibLUoEPnQ6LfRjFstkD6egFbU5ti59oM3mmRWF47gjDJ4H8H9GZ66a6hKxm9AScbxq7ELdStDNjFm7rS4",
  "key41": "66NcFuSLJrKH9zxSFPyx77VUD7haipYoGc6JDauuDFjiBCMD9ZVtzDgPkMuDJGVDrqnCh6e9Esv1YcSFEnLmgcQQ",
  "key42": "464pevfVBkZmY7oKDPTiSRmgzDoq9JdP92JAdJPsz7unqjCSfDsvCXJF2ZjGTZyyqUL3YaPkEMsFeeLfGZ5kPoTv",
  "key43": "2xxjKR9qWhWnq3KYeurz78pwxyiwjuko64H1eTqnh2BSis9uSi1HFgbVK6kRDdE3rN9jd79U7YN5FA4v3d5g8Gt4",
  "key44": "3sxLLrMZFjJ6mci11ewiC1TwASBn8JdrofX96hSD6hmbbNZY6csaUS82Paj1DR4MTpq189U6rt4mJ6dDtms1u2aY",
  "key45": "5sXNrhvXrVHoQH38KawPSuKnvtguKhGKBzvasR1dowFmKk1wwjYEv3tSaLuV1BQpWT5TVQ6uVnPCsx8Qr3WQ8szu",
  "key46": "2CiQVkR8NSkAHydLstvjDsQY583ZVZtJN1LaNwABwyNom9PsHWooWdotSqoEKUPMkvhJPsZw2ZXVmUqbewgmHJWF"
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
