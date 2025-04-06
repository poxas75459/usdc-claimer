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
    "WjFquGNLSYd7Q3HTcrV2gxfFomM6ULvdEjuqoJCYLWvX3QG3aSsBzRz5BJcezAh7vakw9QCnxaxz6N1HAENYzfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4c7T5QrCRg6hVTPYsb94pJd8mCTJkWpFRcmbawWGLrT2S4vyrJwh8SKLmSmqZbjErUQhAgUeUm9SiZRz2jgC5N",
  "key1": "5ChzsQtcSU1iAG4ZEJXVKtBwDtE2mh4Tash7AiVUAxTVhmn7b9fuRvnFi9oY7FQuWEVa8U6VKHvgM1aZXbqn4qor",
  "key2": "4kiKXVC2bpwVet5R7uJt3eKWDFzin86xHxWqSBZx77DuWXzrWndCWujS5pDs3L3dZhLnbFFbD1e69BNewhvJEBY9",
  "key3": "5k39RqX4oGCTjr2KjVHMNfhk8EtpwnbQjUzeprBC9FXc27vthUkzsxn1L1uDQEGkPJHqftGcBhkiu6nftGZfDXGj",
  "key4": "5gtfXrtYKLeh3QG5pWgnc9bAo9FVdE4QNb2LsAx4bMeJAWzY7YBpCwSgVokWniCo2sWcUwmiEPqhxF9zZkyzQaw4",
  "key5": "5esb7zCR9zP6vgSjVmeuW65GH45r8fNpd1KNVMkkxckxdHWGdwQPh9zXTxaM6G3kY9PReDBAoW6oQEjCgVEp9xQa",
  "key6": "4pj5nMZRfQyFm6vAJKVUqHevvqEWL6YSok7ZFaYWzn2fMs8pCEyHNkXavTqCM8D6wPBJ7jEGfpQmR3oge1oNMRYF",
  "key7": "5PNLqcK8XxuPDDcPmr4KkqgrhQ6cwi2m258kDzBRwnMq6uZsygA2546e46U5v5TJftV1bwwGh37zSzKcLnSBYWtL",
  "key8": "2QnJ95XHBqwb4ks6aYyjg8gAzq7StLmxjcHbZU8YuvDBowhYEZvNnVfNxqgJPQRzXMaoYbKNPbko257rKXMhCbJM",
  "key9": "464hmxazYF3UTLmFi5iBjWJHd2eDBEjBM1Pe6YvbTBMEekc11vLKy1cZoRWdqJW4WHjyxnNmaFniJai4qJvukqBe",
  "key10": "4fEy6srYmeWebyVhfZ2msTKr8KtoRzoTftnfrdoWpT9RufmNBvz7jpez1AUAzPwbXhbSpUFB5WvyjXtisbDyoW3A",
  "key11": "4pB8QnBTzLeE4BhqA3aYr6bkinboWjhQRPG3KjWA8hPagZteM8Q6hyXRhGbPpYr19e8isM85N9h3BcPDaRiJMquD",
  "key12": "4hee5XvwWBSc6uwUDoUnZ26BHhKHsQ8vLQix2xKTbvu71RmPHZsAcZpeD99wyF8YGc16nntZU2ejBXwnmK3MnVP2",
  "key13": "57ffo43DMDWuReWtnkDjL8CumdsMGLBH8Cdj6YGzSPNhKrFqAGos3rUzEyyCT6eDdQbEReXbqiuc7ghVGe785DXD",
  "key14": "35iGwJsjbsyLCAVVxucFzNaBM5oookQc1ujMLtaC395mkog4H7vL7RJ5nUSrX6Rt7iNXLm5BT96jSJuXyw6rfzyY",
  "key15": "5hU2Y1uKSe4bK6CxYXM9BhYTjwGdufskmTYQhRV7Tv6PrihqCDtLVvMZbFGKCSGGNfGstqNkZfUz7NbE3GrjnkSv",
  "key16": "ywnyVtVRGbjeuGP2wvNyYBdNwTu7UarpGTZkRrG27CdNq1Bdit6cpmjW6T7UbhPihWhmmb54ZngoTmqmY7yxPgt",
  "key17": "55vdempzkZBqKSRGwaVutxauMYmYUCbrGtardxWpj7dEVfcv7dDaLspGmgcPDr5ay3ehsunpHTTSLNPkxq14bxx3",
  "key18": "2x6bu9jXphP2fSUb2S2tbQiycwUFNGXw2m78eXou8uiAUbSK1ZqJRPuVSiVwJzQxFym2KEJfmb679JCGTf45Ei2T",
  "key19": "MJKgfTC6xFrMjh8tvwuW3BnCTt7Ze8mjbWh8KyuE2kAvddNmcyDUh8cNL1QUG2QgcYG3JoNxnHQVs9jTZc5uLhC",
  "key20": "4vyjb8vJsxjCQXCrMguGmQDFqrmcHfZTpuqtcSLrEQmyKidEJh47VJxXLRCSYDw3pmhNH1wPVMwY2CiTurrNz3tt",
  "key21": "5YpLHabxubpW2u4GBLgcF3JVeznq7Bm1xX4kcMAdTKxkeCFdJUbQidKRDg2NN7dXofzwZJMW1AQxduaEQeKLTnme",
  "key22": "3LoRGBXmocyBr296njG8a32mvnnLWj6ypeZYUuguNu21Ju17TfNB7op8JgAv1vScvsdUXd5yK66ir9FV86zKd6LP",
  "key23": "2FR7yXBQuTMYzYPV4VnWGhz7wbwyXde8YFAgpcG49rdTexZCW6K3sczrT6MmBZbAsJdWULUn5EjbXjjCZKuJAMLo",
  "key24": "LnwQPbKTU3inmrQM2aCuULUiJeHLCanh2uzmSiJzxRo8rzJqiJtxkyYEJhdHR4prMHc3wcUJQYeHz96fjqP7ef2"
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
