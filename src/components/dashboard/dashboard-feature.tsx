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
    "XtmoPy5L9WVPnp5zj5ms9LHDjuwVM6JSxfGcZFzPiwzK86wXRBmc7HR3r4Lr3SdabrbfCSmiPEyNo8ugq4uRCNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEgfPUHZhA6WjDhxKs8RogeSfuKw8Xiv5hscQwExZ9HRjvCbL42PMgQvopQmmqYmEqaCyPxWqvuQA9eLtuh3TjT",
  "key1": "56nmGi1HPJQzM74vwg9iwRv3PmtGaA73gYZqiEDtS5a4imvGFhZ4fgcdLiK467hk91abgaHmyrmnG49fQhjpLrW1",
  "key2": "3NtN5DQvCQEGyvrN7KXnKBq4Tv4QmnQSjDAJTf4VB14hCkgsvUgQYxf66w9ZK5u4TxMc8LJpp3CztVRxb2NtAYkF",
  "key3": "32LBnMc4WSbN7uJH4WM5TMw7h89iNFdNfuVy1MjQGr78ABQ9ERuxknLZRHhLcUCAUHc97WAUNAZVXtYHWDVHfxQ3",
  "key4": "5uuPq686kJ72vT5wL3EV8HrXUx3UEv7QbSaMksXEGG7qpDrZhL9qmDvsJH71FtZwzh4nqb58dXAFzMpFHHvPWN9c",
  "key5": "dQVyyCa8HV3ME5zR7BY26YyE84Vp26vHVjo6krwHWJwcdoEKM9y8CzcHLBTByCU9mXfhtX95nmgzZVMm4tdQkHp",
  "key6": "3JWkPLaEu17dMgWbH9GbLLtnzL8H65GjZnBobj1bVweNxxE44H1R4SwTBcm2cDahvqAQUw5qSJmBAF7yBj2t3kwu",
  "key7": "52iqcBEaCsWmQq74Kbszn4CcYEsgGMAFBKNCt86mmVTYpPe1GwCfztfo17Z9Cyd3f1dFKGUQs1mk6SV1cBVVFpyo",
  "key8": "3eGZyUUYbgUZwKr1agEcBA81pnVybEGC63qMupVmkz452NE9cZRBdN4CcK8qs2NbznwiVrighbngs7S88wijfSWN",
  "key9": "3fkvgRvNULjsQ7Xus8J1AUpmbSpYEmvJGp68ZRGPAbSUkwNAidYMZmHCUD1tEQMyVPnZeHUsDEWN7hrBdM4ngYB3",
  "key10": "5o9JPkd1Xs2XrZd3pdsb8XkHsHVBowQoanX36JtyLgyobVgC5i1KcxSu1o56Pw5Tb4DzMMoVrYDRxrGj3aw15nZu",
  "key11": "4pRiYFDiHXboJ1DUpRvvj8gdNSviaEM1aJC6tjuAivfpUZoXUUqFXkHmewaHPJxhnHPG9gqy5oCxTVKR24vKaLBA",
  "key12": "4BehPERRwLXjQNrGcKM4hV4BcbmEPEg6cdSNhJpiJMkp6KBD1MZoo6F1abkVuJQCE981iWTthJues5tA4U56GF1x",
  "key13": "227ekr5hp9Xt3VEsj3kBTSCMoPRWnqGrarCP4ugzH91uxrTTAmnybJumxiyKZaNqcfCti3HxFm7Vv3D7tVDRKCfx",
  "key14": "3ArdVyCAex9AKbjbsZ9UobLvRg9U23RU5PdEgXdVTD9arzUhoZpgeRg52FGTrGfuvYLjCd9ScRSAdDV2XbrQbfb3",
  "key15": "3m9t6vUfCETXc2Xn1ygaxZZQhjCtcDVTNhop2kMtQo4s5EoeWuhz7EF4sq8GtQBqVkY5p3saTtS4AZofxTgMXxey",
  "key16": "2MCjYC87iJHWhoNgjgzdfAcdAaBTwuFdkdVUNHy4H17C7fWmoSDmn1bLhGNtwN27pfiyiRNKkZmtYkYQEvG94Whd",
  "key17": "3UJ3k7AobAc1GpSuWmNibBMXFcMobtxkt5UjSdRsSkHppWJnCN5juCbVUHQjUsFZP4uwC9EWNW1bb7kngweqM1q6",
  "key18": "HvdcNVjwQAgPZ1LjKmmq9ts9zkN7iGuLAKZuMMQQeW21Up82vXd2EEG31KTYYq2TAgRktZVAzrNkkTXD8NJfVGr",
  "key19": "4UCpRHr6uwGhC3U3LgLk66w479RtyqVJDKEwswerM1bbdKhRMZ9Z7Gc1Ba4oQPF1caK4pts2dSVB9X4ZnYsA6M83",
  "key20": "3JqS1MbRjZrGaSR2SQvZdAnmJ4SYKfjLBe2yjrbLie34euRrHvEvKbypMoodDL4J1hSVkvYwA4ngWD8sJEgbjK6z",
  "key21": "45xix1FVmrhv32hkt3J2wtZQVU5iubmYjaXAbh8o18Ka149Y1K4Rq4vY3QmkxZvCyyPTfercL8xisejds79sWPh",
  "key22": "26gmuzMcqjtbFsyAgQSxgPT6ptiT7bxCNkoapHEBFFTvaib3J7Dxt2smkXav8NZuMucTvX2qZUFFnmuxhSuEXn97",
  "key23": "UYsi1RwMg6RsraRTn1s9shyudpi5kbiJsV3b7XXfRMLFPzz2kwGosgLkQdZpJZ9p9cyw69CE4ZZAAxQZe8T9odM",
  "key24": "5e29JLa18PumiGfyUzwcfTMv1awFJyNeU4vHAiyhciR8QWVJ4wyC5acWwTmdcP6vnUD37j9BfrFXEnVHoH3Bhk4T",
  "key25": "UTGPo2JikbU3cToMjVFME7SJUsCMfBajFtR3t7H5XRZkm5CmFPmr6GMyNjr9duzoZER53vHG2egeV1bcrN1jXsG",
  "key26": "3fYSD8KQNKMjm1XEre7c4vWs8QQ6Ypd1xAyjwsgHES2EaDyAYgYsimcU4Jjhv515nvu63nccDPM6NvFCcz5LFeDE",
  "key27": "2HhmH5HM1JTka92X2Rdex1Qu2CK1mofysSKwY1QtY7sofdarVbYVadZ6FLTQnoVCHyViCqi8XHf1WmRzUqgu2ssE",
  "key28": "4VGCqbzoBfbR7ce9Tdain9PJiqeRFSLDiC5VDCwajdqPTQtpNfjJFEsdU9BYUTBqpaDZd1uYekkJo57j1fTYos8W",
  "key29": "4GZWFKzc58MnYmzn9VcUV12J6jbP5xH8W8VNdtik4uX8TDf1Te3rB15uGfnE2y48v6BaWkRJ8e4686S9ENY9DVCk",
  "key30": "66oeCLnYWdnt6rEuq8L4ZUEmbYqejyDMTPiYYxagTaEEwtj3Nn6YbmduhqsPsTYkiLsPjZH7Q5nsBqGs7Ldt6LYj",
  "key31": "2qGGmkZ2cm2QAfDdgqiF6dzXSRrhzSLWqd98z8ZeiLJuGCNSB5rmpM8VKVQhUdSEafhmC9EiJaaEjJrARZYTS2J6",
  "key32": "4BMsGVsS6WTtYKa985vnjUXzfiDQ8UeFch4QCiLUibMqJxej7LcpsWJMwobh8gHWWoYaX6pqNWT16KA9cTRfYyiP",
  "key33": "mrmGs1V2r87NeTfa4oDadrU7t3vTkZ4EgXNNgNke6ZXJQTi6wK3uVbFLwPDyrGyrBZrbvAipqFrsR59TfDHPfE4",
  "key34": "3DsdzSH5qzdib12Fi5qiJeUWesTSk4ixC4Jhvon6LXkkYX22c6SV69GMpQtbKFjZcmbjNQ4fAvVDw7CaBRWwK2rD",
  "key35": "617VKJ91M5oTeVYCAkAm3JkBFzvwkR6cBxoLEjxKa1xYCKLR5YYEdp8d5k1dk8E3e6Bhi6r1iNR9u5jg6iQ9JiNp",
  "key36": "4WVbRQiPwELPQufywLfCS3c1Wa5n56DzV3ce5B6oEPzkXPnfFn4vChCxhNYFwiWh4CZ2cmMuP35y7B7y26Y1AEwX",
  "key37": "4GCo6zEuEvZNGAwnWw8Xg5xeTxxUa2zd5mtnprcfXc3qhxLLHBLwahGpNwg3LCoZypDJD5kYGAPNB7AsSamfoqq9",
  "key38": "5sDK3vk9DDuemiCFtTtmBm3uJj32dozzTeuJahsvFAaq4fCjk9KyKJSqmB3LsVGUopCBAx8sMfhKw8w9SS3yDC2y",
  "key39": "JtoPjzzSZUm58VXJQJSU9Q8aNAbChdcYG7eSQzzWC4aphbnnJ4pJ3EJYdYuyr85SKspvTwCgN32BMcStLVQBoYb"
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
