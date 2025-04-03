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
    "2r4ji23eLRcjLeE7NxzTTfHf1ka7yRXvo2juK3ZrDmWuaB7VzsSZpJYrvjTXpvHYwtMMSdbH8DQaqKL1gE5GPxUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Abx67EwnK9eQoS2Qo6baCGCtWpPEobdu1uojRCFTzETZaS1JTESgGLXS7u1sMs4djAQoJnKTDM3tsV6JTALHcPH",
  "key1": "54eLNRGQEexdThQE1UuyGV5us7E1ubj8oLiqXRPZuSMEBrpiWXJCgjjT9G7vvzN6Yhdc2MQFNvfQy1eQAsdqCYAW",
  "key2": "oCz8ZGKvGcA6wRBj4GEsW1mUzDbgsZDCvd1KfpBhgCVGbmgRcuRts4R32hNEusPgiiigyfWXMQzRcxVdsu51NJW",
  "key3": "9PDvV2ecwsUoogMgxTcaudG3ehtqDGZirrdFM1h9mpVXmGn9JgyMJPzSfnU7EsM174RhBQGGDhH3RcrgVaftdmm",
  "key4": "3JoSDLU3Wa6c7XVmWdHxeDKF65FBn7g1rk2EHNqcmKckAmF3S1vxdfMNsmsW4gDJP7DvwCcw1LfG638g78DLJfNg",
  "key5": "5JAdXz42ScdtLbSicEWqqUDitV5dh8LjLJ27wRAcgUMp2YtQF9YnpiANQdcmP8aEPJ97EnyTXBhW25rfJM4gi3Ch",
  "key6": "3T4zPtkb3WsENLysnP9bTnXB5hpwo8vX7SZeanFYZ7RffrKt7NLicB9tU7SsQM8vxwL1GwG91QSYUVDLd3eS4Gbv",
  "key7": "4JGuEhDjsuGsUZNiWHGY6NjYiWxCvv8DXX4pCWHtqFxokqSSFMf4rT7Ecezn8PqS4XaguHRmc6ASWUPMktRCu6uh",
  "key8": "2398bT51KoAjAFxE4sehShwhAajeevCZBkvBb9ubHn8QhQuiYZt7dpKMVAn1gbvoJ5b8wTDuaHaR7kwEoAN73gph",
  "key9": "4RVMMauucGuri1y32dabfKbVUBt2RLNXcid4DdqU988k8XFZ454LkCwayJFou6DKVtdRPWHiVk6S9aRJPZZit6ZL",
  "key10": "2T8nfJxxq7AinuoGdjn4Ytqf2YJfEMHTR1FPHkCsex1jzSaxwgumHxv8N51iDhKKyLU6jV1h3Sr9PjkeRREwPP6M",
  "key11": "64UT3Qtgk1xPTNMtw77tpzk8gMupHMdZAqorJG3xGGCwWQbM8xpnAFNU9uG3UvzKFmNFmcsCgpp3JXVZuZFQaykk",
  "key12": "5HuLtyvGGxKTE8hhSeyHrWj9QuWxHvwocpWSTJMV3kPcGbjQ5L7sKf27BQ7ff3tEhzRkbz2JFpxeuqiC1FUbkpZT",
  "key13": "htSFLzRvbprRJHknKxZprGZZWcvnyMACjCKQcJ5iYAveFv97aB6FCj4rxjmbRYhpo113cdH7WBnxv91WhntqD3X",
  "key14": "3kTggoaZ9suhGLcZeSLtBmFFJw3RoPQnLqv5NAZ2p9vWNMknXDjn3uD3oUmAXiaAH83BgXBpXL1zXYknbHNDPW9s",
  "key15": "2EJJyCjB8qHsVGgkrrDsUJaguVAEgQSDLZL3fzB8sWD8ERY7uavYyNgtibFPgR4YctEvPJuQvN5eTVKAy941vDiu",
  "key16": "5EnfdyEQbM7ns8FPjhPbmviS6RMsudAkSrhFYkuFJbA9mAZPgm85s9y7sFF1aAk2dfPjwHaK4M5JB7AmkDfS4qjD",
  "key17": "4cDFp28yZFJjfoZJKmLEa1inaF9jE3omYsbKv4KEGKcNytsMLmKma9TFKZeUjivjNy55Z84PMEAZgo5QsMbDZ8RA",
  "key18": "568pHJ2xYzbKvdvGtWdduArLvcF9nnJ4hVR4inzHYHMaHxHCVKbT9iYmChMPtYKuRqrRd65aMwiyq9EkqFHQ1dkY",
  "key19": "3qyVQXxSoiPUSGtDTHYnYtisnJu1cgdNJdUL7CcrJVcgFhAbgwHF7XPztWBwX3XGvYA78DGNGCN4Vc2zYv2difLA",
  "key20": "sD2c6Zo2McQ3hvucCKpa8GiinNtL3vpXzypFZHbSf8hAeKcp1gq7QesE3XDjNMP3B6txvdiDvLRGe2Uq3oP6RP7",
  "key21": "5JznrhqzBwUM117W8jEJUkC9Y8BuB3g9N2TuYPCcopbkSsNnDL89f8z38BnFLSa88DQnKrqC1CKvMfgLRxSdUkpq",
  "key22": "5evRDj9acDhLKCAA4nuaYLdaWUXx3pxwwsaHSrqnPSHqT2gz5hmkf7bLiwF6P8CRTARKA9psH5M8JCn6i3kvCJXH",
  "key23": "5aVKLu1qKcqGk7fkqpVScmqLAFZe16xeDSM4S8SKCMD4i58xrBwKnpoFiHf2dy3XfRU4HzmdgT7N7jHRgbY5Faze",
  "key24": "rcPX2FqFKXJUCUoQrikcVKWXor67iPrUnMtBMjTBsGLjBR4xFG84fsqDXypa4dE7MxunVwEbHwp1LbCTseoyhYm",
  "key25": "3MjFoGZUq4XkfmbP8b3xrnszyNoipYbaUWfJ9eHC6TvXKC7cenWTMEB1eFH184gYvqpLqDkk6j9E9TNeigtqcvV6",
  "key26": "4gq82528i2kPgGwRVBc6K3Bot3eipEeryP19o4UYYmcYbpruk1kFV9p4TdAszg7tgb6NS9BbnKQB5g7yZpPoRdes",
  "key27": "2oHEonbiZwdntFXtsfsha9TfErcHGWjVUQsJR8XNXAsT7Z2GnQGn24JmCmHkX8aZQRWA5Ps82tkgUgEvMVSgTyaV",
  "key28": "5drmiyqVa6q53Yzii5iQ8tRJQwWqdDAe2NndySz8pdmyj7u152JQe3gh9VsZpTzNdatBLYKR2K4DuZzKECu2cuTo",
  "key29": "53PH1wMLMJ5miFY3s5Tv8mqEbGJjvZ1dJogp7AtiV5kzrLCwJfbrW7MLHB22hZQWeyMsupW3i7CoAZiKHQ4S7SjT",
  "key30": "EpuJucDUsoSYk5NfzzWTPnbtdEPmjMrzvA7r6j26DHstQmy1cfw7CoeuNVX27rdGL8sYQexGi57oNQqKE4kfR9A",
  "key31": "2ofkRJYM6WghNG88jP2zxSP6kEpcqncTt6eqV5yKkUn7wmThneEjEALsGNebqafPdqE99vykggFJ1PNJvJCDULhf",
  "key32": "51Z2tnbopLxvwQg4SzNX5K2LbfMLeaMRGiwgfCjwkSbP9Dg4uh3r4En44jX8y2jmP7h6YFnuFN7hTUUghqWKgjnW",
  "key33": "3h1wMRXTkL6QW4fDPrsFoxBRn1hAYoNHkzWiGzey4skZ58DJGd3ZM65Qyn512UFLYfxBgw1EVJEe2K2xLBRMw4ia",
  "key34": "35vyk2sgokJBJJWcevg43J8oRQ34s7Q1VYmoyqiiWDBngtXpmCtZyrr6MdSnbpfgPTu21aRv13CWTPGYnWTGD9mX",
  "key35": "5k546PYLhMhWeD9KUCZMD9HjNHxyRKC6SJGtYjjyEjDVdLTTGgL2gFGTkWuXx4MbdDBBTvdzCA8rxy1tLEDhupHq",
  "key36": "5K3aHPvv67kUiAKWNduUy1WBGdXmkAtyDTGbKB4FWXxFPbw4JG7KJBRGPVn1PojBFMF73KwBypMRHjyJEmMrrL7j",
  "key37": "2Bei8yRHMYVQNZyxT6HJokxN91cAjPTgtD5rwuh3WDBLcnxG4WP37ccj3UetBtUEfErXLTGWYpJqZ18nrZ8ULZZy"
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
