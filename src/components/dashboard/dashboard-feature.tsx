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
    "5PpzmTzQMMTy53oadhhkhzJyqKvJ1APhPcTMCMb7iXdf8L3PrJwNvRUBwU3xJ6PzTtMV37BoiM82izwupbV4xzxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZoqP8QwQoXGSuUoobWfGgz2P9kEiCJeLpeoY3Z56hgiBfovQGsRgSLLz1CbCeD2B7QfiUBzs1iUv1ydXi1ZkaK",
  "key1": "61iJs5ucfTLjbvEWjjM81QQqMz9uU7hVQtN8m1MJDCcxqtFquS7bXtEeVS1JqCSUzGYZvStwfApRsgwZRcoiXyno",
  "key2": "KSPGGX8muDVABwhF9x7rG8aqL1cVGo2kPHsafd3hvRtE1SWiYhdYZfdBaxwwz4JhuHTi3S72ysFaxe3cDsedL2c",
  "key3": "5WkXtCkNJtLtoLorJBWRScAHF32t4Y8G9DKvSGaAB6R4huwuy3agckPwCWzNjn8atvQeuvTvpnK5EdxHUTsn2Wv3",
  "key4": "4DjwZ75y9qLQzwdK7ieDfSoDFdZgAjDGjswWTRLj96Q8bpiP4SxGHwDwWb3MMRMfDha9iLuSsL4EwPsFSCFyhPtp",
  "key5": "5qcKUodjKcp2xMUHTDnNHqoquKJzGUKtoZNLfqHzs265LhACE4ZbsKHaAzCJ5EQyD7HjEdWd9VYMGC8LnyXTXbkE",
  "key6": "RzPNpsNEJPeguLYi75d92RetJ242T1eEJtgdNtthsRtYe3F2B36o66x3tkmV1S2nzrWYfG9xQ7VMUhmYKfP7K2u",
  "key7": "26cypMjkMfXhKHZD5Yj1EVVLWKfQjjYcPXFBroaq4KEB82GdrvXN4CgpwwptQU3TUvxHcyFmvB9jgD8qqRvj2c8o",
  "key8": "3vZf77bZjt57AVsh3yyJN3VCcPEZ3r5uw7xFMoUeF7snj67rPsfYFhHiBsANvXxEJZQqqV2mm55V3kcfkiX4Z89w",
  "key9": "3CtRB8aVX4JnVKWM9f6zSTRFVnSUxpwarHvSZSm19fyWiYbuznggTpCAeNu21gkPmGmX8hCdupvgrVWE2gPBvt7C",
  "key10": "2WjE5XuBBA5Q9ga8kZYmqSRW6EoxCcrSXzcqwP8EGukkaZ38UcDTkFwB9WNtkhVvoZyfE6AZ7Zvs3b8yCjbbKQd4",
  "key11": "5msa1dVakakLDqdVDo2W6d9pQ5ShGcvGqfk55Te6hwEUmG9M3nDqATYgDo7EDnGtxvTidgy6TaWWKQ65eVnN16rq",
  "key12": "2JBMNEMyyimGCY1xfU5Fv5uMtvA7TpqnokoZmAvbzydjSPhhaZJ1sAFwgYPegE59xTBWcfNcegcH1dYAZf5scaz6",
  "key13": "JrC7bdFRFR3GZg6m9hiQ1Dr8qHvPsnkGyNHoK57mrbe3PA8S2ezn6szgkuwGBMHgJB1hcvFUDb6AA1mZJ1VrVjt",
  "key14": "4mWJrbVsGLtJYcaYCkwbsFQViYz18eYcFBC4MVQLhvZhaPRf3b83DoZ6mhqJnAZysyqZQT7puxqdca9f2anLCdHf",
  "key15": "3zaPHxbG7vBUMWtpwizdQEpkSdPjD8EBfZVi4ZcAeahS7imPbYEhBucTr5M8fStky1RpLzSbLkgyGWxxgUDcueEd",
  "key16": "4gTptHuqB9jBMHZ627TxAGmsDiPQG2B7cUysstSScv61bmNcVBnafS3MgMu9VHBQ9iZjt83iuViDV16ZDF1CLiSU",
  "key17": "4eggJ4Nzrd344itu3gz8ApQ1BjLPPkA3Rw3j6bnVD7fa2zJzpiDagsEHZNyToEsdcnAwCJY9t4tgkKmWH2ob7oAX",
  "key18": "4eHWd1FpphTWEQteu11bnowDZ5uXYG2J1tjBPPhp91son5fJ5bqYoFi6A222H38vD7HL1i1Z3qo1QMyDEvKPpogK",
  "key19": "5kmEfooDQzjaqoMwJ8DxD7byDYXhr2tXsVrk4JDtE6ezoZzUAYneYgEqPkZPh62W2YymYJSRmaQ4RdshsUrprUbj",
  "key20": "25w9Avn8PAgWVnwjh4jXSLqy53yq1M8kZFqgti7JFnHKtBJFbBTTzNA9yVEqqg4ZCVAvPA7tKV8j7UFT4SMggBbS",
  "key21": "5gMoJqxrXqRPo5QPZ2b5VBYQapfgA6wma3wUzXpsEYWZpotr4hx7W5RYHiPySpgQpLC8dz7tG4yfbzLDWnRP4kMM",
  "key22": "3rKdF47sSRcDb51R92ucnTCDwWFURcPxzFc9ksguAznSUqS9tcQvTsNwui8nXwep5og63dQ73UC2iyXSnVrBxeZZ",
  "key23": "3cGjTPrHieLhbbrqgL9dfCbbdTwc3TUNJCVkPTAoicoWKqNLYbW2oFt5c3ukxvPz5Am1meNZqhSKRPZE3q996EfH",
  "key24": "4HY9wT6eUndJS8voap1mYW46i6f4jjRKReEVAYtD381HNjeusg9GoCjD8noXpSPnRTVango62wNawntxtqDAeqeS",
  "key25": "4MJNgswptxLsixMNC8m5HAmkEdmb9a8wGpif64HatehFmUH9Y7gQSEuJr84gkAErTysN4jdkAGLYbAegkBSbqDv",
  "key26": "4kwj2xjpDP8QDJmyh7TyAh9uuwUrCKDNF1kne4yK8pZLd7orkhCegM9YXfzVC7g81u4Jzv3Nv5yVU5H8vki5ByVM",
  "key27": "2N6LqeABDLoeuGtmq6C91UoLAvGscbXaSBdUsBNKvQTRe9ok2VbKqfPV6bRf5t6yLundtxFcW48eoyVL8CfVK3Y3",
  "key28": "zP4VLoLftZYFuk8SXsfXvaVABNdKmcNqYY4j9p4k5FtyVtq5aiVzPoxiaQrcZWBG1J5CY189aZyGCeXwnFxjDmk",
  "key29": "5Q2RRXT8KuAdzvoDKLo4WoEMZrbThVb54CwCCahNct7hGuAoR9UeT3ywUq5qcKBP2vTVWGxnaZB74YE9jtvf2dTs",
  "key30": "47zTLKrzUnLuqiWEHRYGoo2zuDvHbmr2F84cnJv77gCRqm7yWDtxUVyCjc8w81KGwgkPVcwpoUEGXPgmHkMwpciQ",
  "key31": "4cBhxf6WtM57Der9afeZApSrgCPTammBSpyh9iMymFQ57DLNUf5CVRT7bJ27KWBARtEi7ZFL2MvCQ1yMjpu2kQu5",
  "key32": "5gWsP6TGPRQ42S3iTFcm5Lv1YCLLkwy1fYDGxsMn29Y1LvWUb2PeHPev9Xr4R7v96xUskDncWrAfgv1sXHcLtQkN"
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
