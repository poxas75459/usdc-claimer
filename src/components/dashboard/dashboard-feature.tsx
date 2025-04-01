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
    "2REHahuj17UT2bzTNWXJfP2nXgG3BxDStGDSuFvzNWFiAwPRmkxcU7Fnog6MTzNceYCXDwN3tJBtGeRbiXdooqWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwXaNz49dSN5atBdrm3JFGygYdzqTZD8c94cxSP5MrSsSXdKya2pqsXbuGjAFQP49JTHH97K4m4JdW6jDSQKYKu",
  "key1": "4KwoiJmcH8P1VqYFiYkAbTyxe93FuaNB6PngUfSMRDMcPrDEB5BWmbzb89oxYxzzN3Zt3GpRS8dBDkiSmrJD3dBN",
  "key2": "5n9gMunz8sHpjbJNninvk4uM74zvavsF2NN1k7q2LZEfk53dDjrXYYme4ftsMUwi5TmgAKzkpsDWDpMCsHCxLomk",
  "key3": "3VXZfdDroy7iH4jamgBDTh3xCcTFmdho8oLtMz1FuQnUrjH3omzCuB77Q5F8vH9wySuyFoFgGW5t5yfuRtDUnPDV",
  "key4": "4ZuMMQa3RXJiuhhHBrgLRgM4XfTxBGteBpo9J2Y87hNDHL6PLcs679RLzJdxENNuMd3Vhx1eYUDYUonEswEur4xR",
  "key5": "3ecKKwKS7NCpFryeDJsv8ik2uDQsVpQBw85zpmnQEwGDNzHfbxrzbp8QP1LF9xgK5WDcPmU4nMreQMD1hqYybbM5",
  "key6": "2Cd39GaB5SbaFwQJTFY7kgBG7wTEj5dQauzPZPrf6cs6x24k16fYbJpV1Ejax6AJVYsjLt6Nnxhi5E8vX2MqrdWG",
  "key7": "5cvnqx3Nsonu3fL4eXC11YvEQ2usTYd3qiv8FC3D55UEvgfvD7igbvgrzLwrMneCYwXqJQQu2SCoUW3tWoCWEQfn",
  "key8": "4AXvGfm2WhXp71FntMytKG7b6xoVCw8XoxJny6PH72CpPdgAgE31ia1mLWq6ELKJnHGV8WdDQ8LJ4NfJw1RPS6SB",
  "key9": "42gzhQLtjKyiumQ75fg1rGsPLPdofGFy8A1Jzm92v4njbJFtMq3pgy7peMUEsLSX9u5Towp9AzLrvMhRq21dPjo1",
  "key10": "4R13BfFHqXKLmxB1kFUheT2LMqtsukPJEUjxRYre3JvppcdmtieTgHe4rkxwNzSZtsSubncbttBdKBypamFH1Jp",
  "key11": "2BCdJgez2wMExbxS94X37jFiyK2kzQbKrHQvRSAK8DnWBcUKeSNbsJnEEqaVpUJw2HYY4omgxibvuQQ813mG8PoX",
  "key12": "2jvjRoo4AAptbg8YqjGD6FBr9XAKmPMnKgQ8DsemYWZDXsA4udHvSigUkfu8r5Brcs35Uebau5rRTDBYrBvueCEW",
  "key13": "oA5kUo1zU7W79CEJY8z62Azhx248u9wxmYKVRQXbdF5jxt2J2r1Hma3HK3s7sZLHhFgj2FuDLYBbobyg9zny4sR",
  "key14": "39iLemSMGLfyCseurimTYD72wcAAhF3tbeWfiMUQmx64BiqhpJUFGEbcJHHmZu3KYYfmNeMCTnncM4NbemCKZmcm",
  "key15": "rTSz8qFNPG4UXmnD6AYQtdRWhze3ih7Szx23cEWAKPTca2KiaoeVnguioVCGZgv2dwTb9dymfViH5iWp7tTDe4q",
  "key16": "3tq8YqNVE1x6si73zAZTdJxUm2GvfJmzHxZj2YG3S7HAAWwiatjfo1eGD99XwR6SA3sjDdffczxPCd73sPFcc2rE",
  "key17": "5oTfVnYEeyZbE64SXeVUdwStbySNVD8qGnKGw6Z6543AJvTSde3iwDrzEDsdtRjJ7HqDQi4DcEZGFHcQcVXEHMUq",
  "key18": "3obrijmhh8rWdKDgUT3imYBaWU1fgce3bRRX3VHD3Z5iNGPqxHG5mMXTmTfhJxKFveMEmZoXcCrqy4Wtdy1jqHZV",
  "key19": "ALPznnkoUGQfC9NshYrPwdqzKQHvffbL3cPnmVt5XRkiBqCXJbhdaE8RhDSfPg5nq35F77sqUzdY9WtSAensgNp",
  "key20": "hJvj2jviHkqP4yqRrULWkqe96gWytTzcT4ZKRrgZMoP3L6WTJxME9uVkFiCGd7FaRgrVWnfvnJkx51QTqhBcZt7",
  "key21": "uoKFSQdzuSYLVMm7GDR8XpiVGy4mAo4DJ1nZM7NYdWkazsipSijFup11KzWsq3cy5YhDTaCaWfwFbu9yPhyXdZ5",
  "key22": "3qFjAMVJpVaGW6yLpiVZPxETdgcW7KiMSVPHWSCYz5LBND8aNuqjaTxG8ubugHtZrgWa8VZ18Vat4kZpK5XfsNw3",
  "key23": "XkWddpyK9EUmk45YTUsMmSgwuYAinJ3yq7zV1wbXkNwHTBrs8ngShe1HTGBJG9ijDFLcfVEUgjnW3ZV2JqmeHQY",
  "key24": "51yfySUXEJFzePKVswNq6fVehketxmJDBTJ6uPD6pFxf5UCJq3KQhCmu2WJVSYVEH6Vd4SJdpmcfCAi3geS8YrTS",
  "key25": "2LpSMrBHbsHh587fFzb3SSbhey74JV7iatPCCyKCtjw4PS7nNtRVQkpeUXiqVmvBEBGL4k4LRktsaifFWEPU5Rko",
  "key26": "5xCVRaYesqUPtufnkw7ia7PUGY6AeuMbeUDRkt3EMdgfaYZuzzZx8sM4nfeAqeAYJkeKEZnAKyvyUNq54LCujBuy",
  "key27": "yckdyFqLSLtuYnVRYYeC1DbmoW3LiuMhxjdYPgHKwVF9JrKPsYzB1JKZivdacPKZKsYkPM4LsnuZzHsWzYeWpoq"
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
