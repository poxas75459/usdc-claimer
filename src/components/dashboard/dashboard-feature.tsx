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
    "2NAMEXeEHD4gEDE8aZVVVmH5MYoCzzB42JgjdrxfdLdPg7hGdRV6zdpZx64vDRTBQKrBXdD1KbYPYnqf9Zmyaugq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yvtzgVdeh3fTiCr3cn4pGnKcCEzhBcar49vMcwRkNbH9XdxcNcgCk5uG4aMwoU7f15otVx1Q6PzGg6ZCVif2Wtw",
  "key1": "34UB1rrb9f5fujoFLitvyJeyRZx4w11JmmXqJqu4PyYgmPJLg2V4GLJqHj23QfySRUH6h5TxBdbmXunHzuH4wTuh",
  "key2": "YnWk9NZ9fxt924S1T6rfQNwLFcuEago65KSQx1Uqh1ZP178UhfVzfCFG5gdp6TxnNPBZJH7XL3MTWkAkXSnAxLb",
  "key3": "5ZQ7QWwPvq8VpVPiSqgvByVFm7aqrACL7v7vPWtQpGg4fVZYFZKKbukkmhpAT6Xf8M54TitS8HKPFUFHyY23nXXo",
  "key4": "5coEKZobkLCkenToVHpXdFUbiFxJdJ4FLF2uphzzt4DCnAZcKhhBcRqsArZyDdvk6HgRhQG8gV6oZcBBccpf43ku",
  "key5": "3VkgNpR8ow6jkTaxV2o4Q8S4gepnjMLXWoAEqkWCMgsP2Jc2Bc4BPJieUNjov4GN3RH4JZmkp2XPn6HXDCXn7yrk",
  "key6": "45XjVQ5gBq2zcABwB17dEPvcjuLoVycZcTdHfxzjbTcMysgw1ZuW8ANrVS5SXvDg3s6uRzxFBEYiJx3v7axrRRMh",
  "key7": "5uszKXYUwspNdMCs83hzGkhSBbW798rcgi7hu47WUQRqwarWuz6soBk27PSRZXd6h4zxrGotQiwAVcPYcYU92zNP",
  "key8": "Jf1BeVnoByvseaWERFHv8ws59ZkxSEFfQQgXvDCK4Rd5o8AuNBT7Sc9Eu2fmMrMfSHaADtkykU4ejBXneWGs2bf",
  "key9": "4Vj5Xkre2smcTsB6L3vnBFauQxrAnx8QPV7kyrCXfUGJqaP8EVR3aqzdABVt3xLqVm3xLBVHXokSuVeXZhLCuLuL",
  "key10": "5BTyKk4sYHD28uPP13VqDH4Myh27MJiP5K1iF1153UPoyDDh1PYtJA3e7yJVZM6vG4M3XHnXdFmEBvG6hXQRUADD",
  "key11": "krxdu6ZtDj2jPaq829bEhMiwcwhBzSf6RHfZ4jH7cQqb4K8ugZVvH84L68JXsuf2XnKnfAqUWgcjJASbFn5pAtS",
  "key12": "3ArxYGeLMsttonYbHiQtbFbgWGUTyX3bh9HqwFMcWHqhdvo8phkSPToNiuMFBK1HEwxcJWEEhbjzkwaEuh72o9bG",
  "key13": "2fNN2iyBMgeXoHqdbAp5qNfXaSMb9bKzj9GEwXRJf7SVeXf12CNy1fSkNFHmN2on9UtABpUtNNmuYeE2F9sb4DQY",
  "key14": "4kYuBZDgqZ7X8vJkyS98XoQV2re2yWkoVYCkuKvqvPemAAAsheGH81cjZtFQ4PUv6NZyWdXgoBvMzJjKv8bTmbDE",
  "key15": "Nst1P3RqqKgmJrSx4GGJXLm1aqHAY6o48gVqm11cutWEQn9JSegNR3TMM5SGHgzimR4sT9sTuq1o9iCApWnaLFN",
  "key16": "1EPKrvf6HPSChGdzpWAUfYkYcbSAoY5wmngKpS3FPuAguMkhyDVe9nFobv2JxyxjkHqSRU7SFmxyBy3y99bkWrv",
  "key17": "325Swy3Rdf27qZofrGTtoNvMBPfhk75WcRQ9UXtDh7UXE1YEEkLH1nKDUsbY5CJ23oDi1eJBZGU1A3vmGWHUyoS4",
  "key18": "5XBsMbKrkfq8gPJjsycUxx36WJ5SmWMS6RyhV1pnESd6ocnSauieqysYZzLeudLHsMDHwxosAwLSXGqyeHTYrwaY",
  "key19": "4tfDK5N3n8haC8ToJ68i2UWJhuWJxMXFUMTjzCBaDtSwztV81uygqKMHcLmeec83tG8qgwH2ePJ2q5cD4fvBUciL",
  "key20": "5FogaoX9LvWrJYSfehhj3tnREjEL2X6RpJtEighxrdCXHu5i5AWyHvnx9qfuN2SguxTMtz1qNhnEjeGg4kP2ogBA",
  "key21": "35XjsJwYqcR6Cxg8sXHPzrZex9rTg4q2htmBXh1J8PMzZwSCZu2bbUZL42Y8kqD4QHMFraz9r92qngshGMUw3BXj",
  "key22": "36nU23ek42SRDBtnjepuVR29osTASTvuRR5rz7NRQjmBcvt9LUy2d6oaXk2ew5AND34QCYo1GGuUbBdwSuZ4jFP3",
  "key23": "3cNupRZVbAmUVkC4vgaHafe78hXJzVAjYUkPKNnFAEvCQDRsWj8hsBjoEwXQMyokNdYWLNYKoGdBqruDmPCXkYNy",
  "key24": "2L5CVYhQvz79dNgP2bzXkhVRXQdcApC5M3jDN29UVS3PhHP8wGKqkpsW1iH4zPFpX29xMY768NtDkMuUEWgjJ1kT",
  "key25": "4qjyfhBPKuVu5xTpnyPQBY55E92XXZowhVM6vRWGHrnq2bzGysvurkjiPS62xWJ9DXhqvtMbeY3ji4GYePUxXXyU",
  "key26": "59GL8KkyeA3uQ1oTKZwTedWtX2zPAkbLrgVC92G24ShxznbURTsoHRF6KRbUQAN2961iioB6fpNcuZsVEECqZmXs",
  "key27": "2Q68q1h8tAbACrMoH1Dr9ECvuJepcxQmvYfTUauhRPRrzZv5GhohYL2adaZabVfjNfZs731evm13GgxAYitttWaR",
  "key28": "4nZ7uqRECWPYBJ69EEKQsztSZ38DJh5bnkfbwpjLfwTTYL3JpiWyk76ajNL6FjM8ZAtszzH19mNU86ADgQ11b5ts",
  "key29": "3os9AJidyCjerxSWU8ePBzXfqvZs2iGFyZCeWCNhU43Qrugr9gDwpKabr2DcwEn8qaHdfihD2d1f3PiThi3s68in",
  "key30": "26az9faYWGpqboGahmJFFAk953tVpDzUveT2vdyf6ySD5si7iqdRrcegd3hXS7r2rwmoGtGFWora6ApbEhtKheU8",
  "key31": "2JxL5zkSDaHckVipRfLkPKrG2og6fs4DPUukE1n7Ek1DGk8ypwEdmGHA2KzbwHpt8nHvfpq7uPr4mHBXRgTNWk6u",
  "key32": "2cTNRUhvYaenh1rxKX86GvC2BQexn54q4LKiyVZhjd13hHRdMXfL1NxnggXVL9WkXNfrp9ki4zRDBZ4runMJAbMR"
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
