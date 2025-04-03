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
    "2gk24GEco3NNJF14bN1Jrcb7Gi3am6U6CRd3r64UbF6CgQsz7CdPoJXxz3ojHz2Tuwr9RGHMxaZDSeaD8tGJaRkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tD7qDhSK3MADT1DpuWngXx1MPmAqpj6nFcPMdNY9ZJGSYno3kuT9yafYHCftUD9Nxotdy8KYuQmYNsvgh6oatb",
  "key1": "34saGyVfrkxaVirCw9VkvTs9hnMKGosXswuXqCHGR1kR69Jz5VhZLhx1hJfcrHczcgw4sSDKouZPw9XVoH8v4tSH",
  "key2": "3YVu7cv4YjWYNX1SNWKAA27WofawAvYmZm1eWovuVMarWWfiks16LPnKKAN2kiK7cvSjrrbGJJg8DAAwxTGvaZ5D",
  "key3": "3t4tFee9XUbERncpLrJcn4AfScAc6cQimfDX1uBAmz96UpaQAxoXV2DqmuU3riWrngCuenu1VnaNrmzvABU2WVGH",
  "key4": "RnR4X8MKgRkUjRP9qjfosD5CEN3ZMttkspzYSdkny8pd6J1Q8UZzoZ7r98V9xcxvrr6Aieipuq3PY71mUBJh4t1",
  "key5": "67EJGdKMsQsA457RBJmwnTbcEKLmzHfFc6WV76jFRQ4CTZxNJXDMQz7uFBk8QLoKpajgQrWpPkGr29gFztTsqM9D",
  "key6": "2ZDDqorVMsZNnmfpHXrnStifj3auLDNVEiofKhek2yXbUGJR89UpY1zpCP8xNmJZcWf6HQwn4vJN6RUZttepvjtC",
  "key7": "5edr7VqKv51GsL1d9E9sSsowEQeDEVmTCKZKqADLdzZrws4YrWjeDDKk2xRCrL4WvWtLKedKoEHaokj7gH51F9Em",
  "key8": "5EwGrZz7P28DHdmjdYF7Muby5K8kpXnAD2c52uDyjYsPHJSaThFmeMiR53pZsyHWSTXv4LyfqfLuvLNeWngGeG2B",
  "key9": "27Rd7Z5DWn7jr6r6XSY6QyiKUz7Co9FCYscvfqTG51Hiw4rTwyCBr9tAnyPqSZooEGguZ7hYYJ39diqZYfPmEN1H",
  "key10": "a1bNa4YpGTfpsmuCV9zzmUwyXCFK2NhqNfT7PsVGmcWhUaeN9KDRiP2JPsRANSSaQ5mzBfo5MmwwfLbxjHJruC9",
  "key11": "cPf5gh4Rh9q3FUN6f43FdwyMQBaQtDNaaZ81yvCAJEqBSsDSa7pxuffKKNn7HQx5x4WUFynNQQJg7jJRQxctmKL",
  "key12": "4XdH1PkwjHyeiH7ShipNaQ3CNVk3UvzRrDwv8jmehBwBrHQGddtZ3iY6GgeRduaWUkEHQYcZfwDvfj33FbivXY44",
  "key13": "2wjM2cVHUx7vSKdFCHvvGUrshqS4dqfWUWMgVJjRGPS3kLR9QV7R9GkQTVDtH79Z1KgzGh1NHJLof5MKanqjGxqq",
  "key14": "4gor178ck4SWTrawmd7PqbfiK8VFAkq1YnkBaQnJqj3DgVGXPEdCCQYeBEMPa9fUrGnHANst5Avx74ghoqkmgAW",
  "key15": "2ESej6w3eLF5X2oGNCoSwsszQXtoUBd69XJoaG72n4iSHymfFK2tGwymdwWg9mYnxhv1iAkiNtVEuu9fsJ5Bv6oW",
  "key16": "w81D6hrc9aVq2HsuJ1xfuJG1ZHpMcW5MaZ643MeJEkUwwgM2AV3EViScSsyUzSfowEurYmRKHp3BwfycQefJtz3",
  "key17": "3nqGArqN1UPPb27Kde5JN3VHUpMBSBTs925ZZdJQRL8xLTyzohavGCj8dhr5GzxUhXsNykw5K24aKwbxtCetDta1",
  "key18": "5LTPzaD7NS9ZvXRYT4aMfBvFrpZNG6i3r3Y2YR2CxUa4JnAu5vx72w4JnMRRnbcQzsdcAUD53MKPnxDECuxVknjZ",
  "key19": "5mjncg5BdahUzcADY4mQbAi95VkmxQn419yV4rQSnBkEvZ2NA5MSu1uD6KQjXpco7dkBgonztLQMn5NmkHLepkAw",
  "key20": "3KF4nQdKh1o4V8ybdFbWjjWQkPWRK9GfBshBsdcxpwtFSjBXLEXX27mtj7f3oNptoxozUJiUeJGeSLtC6bVPS2w6",
  "key21": "5e7QTSw3quEb552gNGWFJYFgExUvMzQ7bWsNKLoFPefWzUiuTdYsyX7VajVkjmboBSHxuM49Xs6eVJx3mBvtsm5H",
  "key22": "2y94bH5FMsUveygHYf6utn4pMgiozRSWzdk1r4mw9FFUiRNNy3xCjKQJufaUNVH5YVSRNfgadhyzuJu8VF11v2pC",
  "key23": "5k9dkgRvyDHtiGqVVCHZkQe2MgRsYJj2BRW6hhz24AAARwBXCT2Y7VYb5shYCWbRrkVHpiJKuFSLuL8pxa8y653T",
  "key24": "3zsTXZGBjtCBmzfP2MrTQXjs3SskiURUbMYEzFQJi8y5qW6UXggUmvT1RjWkfzKk9N42UYTJiUZ6jL5uZTAdzUUp",
  "key25": "bAS9V6pQKTZqx2Pj1AToiZTQgweE9VaPwrWMTpdYzJAdr1YMWfVtL8JwTgwK2iujLncPTd4FbD5MyTW83Ftpp9a",
  "key26": "cy21tJ7siMzBDb22SG4PKpUNNQar1CsvvDWX5yNjtgF2uxY3vkjuifUs1wRZvjkkqDLg2V2tUpgBx68cA9cEhAG",
  "key27": "2bEySXJ4QLLRAaL9DE78NQqdtCsNkUQ9guVreJoaw1qn12EEvG3nPZS5KHC27GMFFe3spMWZDzh8DPUfe6EdvLYs",
  "key28": "4qaWVbKFcLiCrYDf4ebuwNZFgMNvQVQwLdSBCZ4ZXQJR1vDeAKPXZvdsak7PHW5yoerjPg7wY8iu1Xtv5daHG8Ya",
  "key29": "u4pLmuxKXnsbZzk3Nx9YswmARszJdnfdWLnfP5oEcDTGBJrY72PtXt2fb9UbLPGCuHKBJEtHMP2mcQ153SsKZkZ",
  "key30": "42XNvUhZPzNHuX6XFDqkGwq7CwMih1CzMniNvDDC5eKMG78TueBJyPb6cJXJ6UDHDnK65NYiNEy4jBcL4hkT6GdN",
  "key31": "2ByWK37rPUrJfLfRFJKecVPgsphfXqQeuvWXKUcMKMjpvKgxuVz9MY2Y1ZWoFvRtr4h2pRwEviuG8TBtXqPxE3jS"
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
