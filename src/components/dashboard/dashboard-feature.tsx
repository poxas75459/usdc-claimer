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
    "3rPGv3UXeDd2hwFE9tFqko2SoUa8S1nTtjXXGSemXELnHzKxYaTctpKVcKr6HJH2fC6F3fuWdZ54fyGpVq6vwWkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZ3GYYy2PbMkm723bccECEuRxDMjgriVGg8EFD3snehmfmkHghVMpMXrPNqL2NbH6paF54Xp4eLkC8MtEnxRNPb",
  "key1": "2QDMKSx9BGiWHPwSyKkE7zE25azyDL3FskwKBLn6Kj88KmFrsEtSt1EmJst9prj3GTZuiR2xNS8sJkKXBXjh6oxV",
  "key2": "5ZadrYwfQFR5T3HUx6CFWRH14XktnnWpVuDPQU8pfzXmSogKWyAfckgmB2VDqYdQAQ6ZyiwQ9zoHxG9BS3JU5kca",
  "key3": "4kybm76nVL9TeM9eo8XqLEwsRGx9JzNA6rA5oY3sLW5VhHTzgLJmwkyLfbRXPxSutgTcLg1E81LeBMoBvXx7rpT7",
  "key4": "2AGi3j7T6ZVgh6hDg4Rud6L6hFP5Uev4G18eUKKKUwvmqVU68JJ9yLmkzt3dAzawAgKaDLH8cBGtCGTq3Xb7f9xq",
  "key5": "39Xn9jinRTMwRbBQTNZiLLW92CGQvbJocEXhetG2mck81dgtGJuKG7nNPcCEdkp3YBYhqnST9pa1AnLBu1BXiSvX",
  "key6": "4tDDDpk2CyZ5o45ZRijKffwH2VEFj6sNBxUrU5duMK6P2sqWBrErU2jXXaqW7bL4CCwrB3SECruyjHRRrKiso2zY",
  "key7": "5MbhCJgZfY4qh3gAa8QxBECuH786Kz8Ux26zUNLywPH7Q3PL3oMiSYEYi5dsCi1bQRcpAZiJEwBGZKKNza8sFASc",
  "key8": "8K4mU11ViFf2mKmHJMZSxrBV7CjFwnggSwfihYN1cPFB572AJa7T85GUqVsjToQwsyajuBT1JBbd4JdxzU7xawj",
  "key9": "JvTZZ6ZCqyqh7qb1WkcM1ZEx7ZDpdH9oNCKSg4FthVjjCGj8KdZazfZHFpbfBuvtktunPL7QJCxqMDSSD14dch8",
  "key10": "2RZ1XSKwNJuqJQH7c6NSpBVqasCkwMZU2v3wakDFKa7L1avPnQHpRvg9EAHBgXuhQawBEJT9VfeCC1XYv8eWt3tL",
  "key11": "2wf18YL4cYMCPuxmGstnQx18VU7u1KbCGaAgCDTGFiog3KXSUoaH6NQDiaNvfJhV4Doy6DktEGrNR2LYmMJkdwqC",
  "key12": "5x7sSvxucGEQHc9CBsxebDTQw9dgygYR7zzQZLbme46WeLvuxfZeprQiTxmzAXGwzB1SAhwzUzfbK8SeogHEsVAC",
  "key13": "wDiQC33Qid2ohKXj3Sx8n5mqYS69MBm1jrBWfkiKYPcRTWXy3iCqgvWvj4yevz7ummPUreJWi6rjdBm9p4QnABj",
  "key14": "5kHEqEYTHiqBaxiakezkD2X4RfoVzZwqnqaFSinxSQswQk5epDpyEJ5oFf5Bt9TLzJWfXo9Sor6udnZ1FdBjo3iU",
  "key15": "L5bPW7hgkrQsDNHpAW74nL58qMrfotVBhC8GzDHLCw4eh8gCnYLGZwVQsLU7J5nEfbgbUDDXH8MK5AWGmiLe2RH",
  "key16": "415LbuK7bynWerQG1L34kFCcvmPqnZpN9PYykAvQJ2zzDzeHkLyqkSahNB6MjpSJeaVkic6t6Zru7CbijUQwCfRH",
  "key17": "1YS5XrfinS7XMLpyfSfPecD4UTEd7GCvQGisPYbQr1ZY837JYVc2fSydaKRRRewiV78BJnD4CmU5gWeSzEpKio5",
  "key18": "25eeSngPvB83snHqqBGSa28DUbdi2cEd8EAwveNu2z5LoTRkGMUC9MRgZ63HDWT8uokSyyPEJMn3uZJVtoY5GtRj",
  "key19": "3rumKYAdfRopYoFcYkN4uw3UpvZMvppSw1w8VVKfAJvkxHTEuDVXmu4vGpEqF6vWowuGioPCsFyyD1231ZWAsKdf",
  "key20": "u6ifnohoJgMxUFaCmMaoQUksVzDWvFumdi9V9s97C96UNPi7LeDSrU7RPdxnyWKStGq1YQAXE2oqKV7tC976RHB",
  "key21": "2Vjj8KFb6oSpLz9wM25PQBsqdEjDSEdeL94pbxDbexKjtorc21A1fEBmW79WkAAKxWshdr3b6Z5Q5SacTuCSiZ9b",
  "key22": "4JWFEDkLjf8QxF2Qk47Fw2WDhbA4U9ktVzymK1b6Az5jP4wjisCAzgeSMCHF32kgKMKMVfo4NqD2gUsUf3sJwRnJ",
  "key23": "bLBZ15ChJbwh3FfGZSe6umKxAwRjbCy5ZSLC5RgCp56XBEHipXAQfnuPagGWLzY2FKq2gBZ1ikoRERTDxrZSZqf",
  "key24": "38vQXtVFeCefyCQ6d3gDuqe36PoQLW3ATAcv28uCqVsFf5BDJpsT3RodHSUG1BZ7qMrNorsiAVwxWyT9ZduPi4Go",
  "key25": "3nr7UBXpMKoFh3ZXxMktW4uBHaBAr4J2VfspVmxCVgxRfwjEmcPoHEb672QkEdv9dmXt7f3zQG1M5YqCCCGoCLSi"
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
