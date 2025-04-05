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
    "2PWkYdi9q4vDJys9H4MnqrXFzWLMbmmp557sNSQ4xbKSp5akP5EQLbsTiXbxSAVnn3FsHKJQWpUiZFMaqWy5EuMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxs2vqTEq3PDpfhZBNyVrnrG5ywrckotF7BRD1UtqsgQcmvHNDA6wpSc4dNpjymSWLy8UzgfVbG3LUoDfqitfJE",
  "key1": "2pxTjzPtUoTArNHUm7qc8pRgkGa7m33JmvPtprwZux81HEnNEYVqt8gCTrKMGZ3f2DbnTSkA8ExANA1tM5tvrfxa",
  "key2": "4aZBYzeiabbgE8927m33ngk5wiXxHzYb33DGMDi8JvrSvu5Mtn893GWt6iBg4TBpdtBUcXGUvuQarjiSXxPHVk7N",
  "key3": "XCA6FQZBEKxpTd9KH2F57NkDC35SxWXHJRStmMQBDYpYWcdudTCrXcnPicvegtXtHRZE5RgrszYPcbegBF3wKZb",
  "key4": "3xpZviqjs7Jb7Rsm8Dnirza2gwbeHzy9Jk6C7ZFXX6YbwRU4H8E16BDf3Bm3q4gZfeZMepzqSGQmsZ89wNNDJKVJ",
  "key5": "38nNcBpXMacyfJMpSFN5DVKBAsYWv5JZaomn9iLkfWfPNeYtCtY5c484z71345cRpx9iNkTTQuEqoczh24bqB3Ng",
  "key6": "3QAE2GY6G4TtGHwRFbeqgUnPiG7awfP48Sjgwn6Ugenmn3vMvVaJ5EEHoDBwVEJkf1wg2nJH8HJbPqBqYdnhzEQ4",
  "key7": "qhrfmTzcnDKnoBhnLjdCK1e6PZ5QvwYx2teWmwXRPgWNLhiqB7aSk9DZhRcSQmFttMzDDN2hHtDQZxBAhnVtGmh",
  "key8": "bKdDFa3phyJEpJpuJtNfkMruGRC2rN2qrHDToba3ZKajgcB8eWsFo1GLNtFV4jiaXKfL6AE1ZTWw2aVTvitz24B",
  "key9": "2iqecrJZKoFELF6R14Ev7RzrL544Q2EfPXxkHEyskWYqYV9aDbpknBhacrbmAMBUFL7V2WZ3Rd6CyqesJrMsKNzq",
  "key10": "3QwkYxBtPSgU94WcDdEi9ArbtamU24EbCfoh4PJpK4VPxq1SQ3vz7xvjG5FY3c9iXzVwJj3JhzVpQTNFiXHH3CdB",
  "key11": "4BEBbkHKwJMaRSzDrtkFvoqqMJhGyhX5MtautWsxC5osJnAMVBLqjHuZqsF2xHi52qZTDBkgog3rdvJgGnG8tNtf",
  "key12": "3AtZBFWBVrwdP4tFMG9wffY9ef22ApyAiRa3XJiBb4nMasSGCnpP3uG42R1rqkaw28gA1iqLDoS3PaL4EyMfuzDL",
  "key13": "2odfcj3JRCkX4ULxjNVNGb2wazJeXJFiZkVAJ44eev2Avc2yvWNpAdCXwHz7Fyoui7QnKhMD1DRo2sRx6zf72LoB",
  "key14": "2gRsc33CabqkPRVL2qNdmRGnkZ6hM9J5RZYZEMKwboefmmvq8CM6X9PU3MbHQ4C4PeWNDjcMKdoxN2P3mch9FjDB",
  "key15": "4zrMYdc6bEuFQyVEthp4LhxuseB9PQFEJQC51avjEK9DoeAqcSWws3cyund5unxDMk2h4tK5fApGuPqG4XnUgc1k",
  "key16": "4uUZkAJCF4UFCB8KX4cK4aeg35ivBUiNn2NmkTBpfpijoGkU6oZeYSaJ6MTYyLrQY7dTg9FmDucPPBMP2Z8eSaBY",
  "key17": "2Fm8UN4XPtBMpLRe8pi8PtTn44odwK7W4J1KxCpjX1SKkvGTxohyEoiXVE74hKmNgRFi5jcBENXAMpQyHhotmrZz",
  "key18": "2ig8E4g8KhfxRgPed4Qs4r95fp2iH3Ljj9SqNYSD6DAetzExTPkSRfQj4tNGUHEJFbCaPg4Pu8U5X34RDbL6XwKy",
  "key19": "3EiJpaoRaWuG9b2nRAocJnkFokgmx1MWuNET8J3VVdr3BkwCH4Wg3VT6GUAdzQEQcf1vSPm2zbUL5pgGyde461Sp",
  "key20": "dhi5UYHzV9N3KfNeHUwMM7X7vFoFsuzatL5YuhtrE6SrJMBPqJcQpLSubVZAouBA7KKUS1eUtvFez2q62RgzmGP",
  "key21": "2ZV7ZAqgunCA6rKwttkKzEjhHabrGwjCLXw4xZ5cfZiMyBciSHWkAjLbtzHuv3dA8rinUF7W6Btgt3bmYtpW9m7P",
  "key22": "2Uz4mjPFR21Svc1t9vYuMLLiUzcJeWyc9A5bdXtezaPvcBTRvPq95MmEcUzMovvH1NAkRy9HnJtkXVKqjRUqEzNf",
  "key23": "cUAWWM7y76jH51UXa7FeKfKcikzARzuzfrXkrbuiyYnbrnu8V9fNS1YNJp1nLbXzXYvWq7ZUZCB41juJrjMKKYw",
  "key24": "2wR2wGhGfchoRM8EARi22XkAHc7EVJz4jJwpuc6kqr3Z8jhsnHVF5wsmUrnQDVYcyyGDjfZwXd174Y8V3eqcYvgD",
  "key25": "5d2E5LLzj3sppK2wjN5ch4sQu9Ppfh5eCpmA1rTbUw9bYJUtgpYdC3ogYAtnwcV7JqYjh6KMUsZa5AdCikX9Heb",
  "key26": "5NuCcrkfkagd1KxRDQK7vabgTq3P5HmqcVBAcUMeJhm6yJmkA9aJxsAuSyWTe4Kqtb575L5idqXQnDhAShDGxtgK",
  "key27": "GhRYAG5PxThJ8YJ9m5fgoGwggdhyFBrxuz74ggcp5gwqWLgejFwgwQCDgNfqLFNoxb8LT4YqhnUFzTWnWLWU4G1",
  "key28": "4CbRW2KpbrUAHqUhbkhX2kNCAYHe62TQZ3yPtcQhuwuBb3r6Aucwaf1DSryfyGY7nKK5XDZMq5QWZq72jrz7ZjT6",
  "key29": "4WbupPv1rzHP9B8xuvBxphcH1c3eanUWvbBNUKG4moB1qEDHx72CxFvysNiEHR7kZxZD7mfcsBYdrvxwguY414P7",
  "key30": "5UEs3jTqpCrcbb4kXL2iDy7BwejnSUPs9jQmQR5KAjfbWjYFehHDN9wguMuVxPTm3cFFXSxRZAGM1PBQwL5roAFo",
  "key31": "4koZCTT6aaTeBARXfAbrV8bHtJfyWRR3dg8W3gSPDHyrZD1BmNDofhyQded5DsHD9cGYmBTXTCSJ1rdHjcA3nvBn",
  "key32": "2KSRHfw3TCmKnTnEAe8R6SEEdnBz6J2vGNy8dTG1CaoaXxZm3fchJjWwpSaeJq2tZ6qAiXNzAUPCiJxSJXunZevX",
  "key33": "3so25tohzz7dezshgsHghSk6M4baeoAi4Kc3jzgqFvFGqDy3nYTvGnCyM3N8Pox8Y473SoUsW9dzt94cAdBZciaJ",
  "key34": "2tLhUkHUXksuLfztg5btVUAje2huC9cy7AqNyRsv9o8CsW2dGDwrWyYVKDUrJXNBxUwTJnAByVvJ852Fwn4KjvMM",
  "key35": "5jCpiiDVnhPvGBfuJPEj25Ar97DzZewSsTJBsxvQGYhQYm7DVhLCECukxcrPkJpZVDQmqLoZ2414B9EYjCRFgtQ2",
  "key36": "4qE7dXTDYrmYUaMY8YAQrifLBoqmvyHS1o5g1ojjLnmcBWK6tNjgCiM1unHYkZS66L7PEHxV8mPnR2tAP4VmtUL9",
  "key37": "5pKP9FnKxjQYUFqQ9QtbJx81QuSBAVCxovFLdusr7Wq5HQMWFMUeoKJmNu6vhMbL1EiMLPZgZaDiQs1xF7JsFTN5",
  "key38": "3aZiZt8AUYdQddJoHTkgQZkQxX4WsG19WQLpzN7VWNdyHvqR1bv57mdWPBQPw72wjk5xdcjCBfg98gx4oBftZC3H",
  "key39": "3QfCc1tntRmEUdvwDVKuGBpd3ahHJ8UcAwWFMEQBQb7PN3cTFvXXz8JpNXQXj9oxVc3HC6o6ewAzYyrPwai3XFg9",
  "key40": "3GqwA8sG3ebSTzYERXGSMGKtFGq1QTpFo8SbG4gKxThT2TXQWsVcmwz89gt3XkVYRbcZP8YkEYCbDa6pwGnsKiuM"
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
