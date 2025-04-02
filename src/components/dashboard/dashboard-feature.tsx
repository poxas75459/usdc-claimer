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
    "4mxpFhicbCcNYJvjFStkr5uwQpbbmcRjcZtc1fiodrVs6LoiTfRSGKH5LFWwfeoLykQH2cUiAGDuhuMS4sDw1uPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PY83erC5UtW8nzMmG6orbCySnKwb3Vs7Ldj5eqqEJanb3Ese5CtfCRvo4yFiz4WC5hnwzHCytZSUNXKkQUF5rm2",
  "key1": "6o8LwnSj1c4BKiiBuiCgHDau8xD6osVLB3GuT5Y74LR1gLZMEmNMqMb3G9K9i4LcNTLWcBMh3BrNgKnAGPnwu2Y",
  "key2": "5NnJ31qc5CDmZEtz5qEsNSHMNH6vCVcnmmRwFbZsotbVvZkxdB1rHSE5rXqSkFRGgQ1Xnu1CxXBGRugWWAYegfUp",
  "key3": "3FopdLw27vq6VPvE8Hs8CKsSWiWsrPrEMh4VozXiiB6WmAnpsD22VzQPfc6USYE2AdwferW6bncgLuHU4iFHeSfu",
  "key4": "2TBJ26Tf7E32nhFGmurkULaZY3xMgw44DkkCo9D56ZQ8eE6P9QmW68rYfdcDvraqqFWa6yPrkkGBYcRbyVB9tXjN",
  "key5": "5HzgiRUQf5LmFStYkHanHS8WH269fWpcudZmtLXCQFUWLWSauaCYZ8DiEkA1YMgj37agDwh99iPvgJb8jByzd4fa",
  "key6": "2BRyHrPECoZG8kQQzix7SJZcmTfRGZfMKhwQWpqtSYQ9Taw4fn6hDqcEUo8yYwsjrhvZSeEiTj5R4pPTjDLCMka",
  "key7": "2CBrLiVWVmdkmzkpZaUiaVmokjh7SedyjyXXrnPftqgNaKKFCMpNr4NeqZChE14ZCR2UjvVYNZgXcYpzbtXepSLP",
  "key8": "4zV2ZM12vHagKQhRhrWUtv3QRz12kKSo3mkejebQgoCMJ9tUdgBNzmd4mJVkrXWrAV39LCG1d7KMnKwyysdbudSU",
  "key9": "2KVnVASPmmPVbBZum8sDZhzCCEBMeksRb9bUMWEKYXbXewbqCxr3GvTsrUw3kxEepjmGYh1ESQDxH9aLefF5KHsZ",
  "key10": "qZq8VasAHAo7C56zxobbiUFfed75uVtuS3VhTVhjcejT3WQSsDc75yavPF7cZ3CuZsANUwVAqmGb7DGRAvx5E4W",
  "key11": "37TVKKS6WmgvYJfP5nxn7DSmCJCu24CSVfHAqZMC1fR9YYxLKPxNrrBmzboTLFEE35yNKaPckwQvQ34gQByhmKmC",
  "key12": "XFhPuHt6vynTn6jqdKtM8eV3VyTHm92G8bdiUEAMSaUBK8LW4ujXfbTXFWX3jbyJTVFDB7PfbtkjajQBKY11bWk",
  "key13": "4ybZ4jV89EYgpqb5vPS2GsNvTaQjoafUTUmJXjfcTojUN6RXH8MqSVhB54yuBiPaF7LSHDBveyCjXKJBZuLLteUu",
  "key14": "384Qn2ZEWW8J2fNJ1GzNsmeQcC8vEAm72HSikKuArp81EajwpvxjJCpZfJnJZET2jXLesJ28Qb9xFjWBLKf9Jmxm",
  "key15": "3AwJvpsMKLEaQS7TFnDA3g4f8CTmHKdWHjPMt7Tnva2GB6PQmtrQ7aShHnoNXvbPC1cvvthb6mP3r9mHfMbsycQd",
  "key16": "4YtMpDWBKC5nFWkB5HrSfdz5RaMphgMWMGqNLUE6UKDZPJWkdmh5ryTc6i3aFmdz3thTMHiptegwsdxJxdGq2uCF",
  "key17": "5WMJnYffpsxeTc9f8D37VHd8UrwsyJuyKp1zkUYujDJTcoMbSEmfeQrm4kR5T2J4iNTLEwzUF4VvgfDZLXuKewZw",
  "key18": "4f7vJB1MRdQKZnmDK8GfqSmtAquf29mTL5mqeZfDLU5TpNMnMvHawn75t5BqmR6ufAsTqYcZKMzNMQV9S9G8y4NY",
  "key19": "5uFitVmBKWDgxM1bhxNWFijk4eaWaSipA1RXbAXxGvMMibmmcAUz4nVh9dFjQurJP7Dhff3GTqpfT1Y5H8HPd7WT",
  "key20": "62DAySFDqNUdqV5imbRzAKo1Khhiow6WEw4B5aGzGRykEv1rS68QAXTqLXEEAT39TAA2CdBUEhewL8Qe6Mh5gSro",
  "key21": "5X7e1QG99Ah242JHMitTmiGDPMXyWhTGKj1hS8kndAK48popzLWxwhP8Y7PeWz3WrZJr3qNUnegfGEFAGJJz6hv1",
  "key22": "4URm6vqeGxkP78iu7ew7jJUFRsTQjcwQn3yUUhYNZ1XLV6dbmHS3M8iTdLoazVsKQhkRqyWavgWxk5pdSNuiKc8D",
  "key23": "JZW5uBuxXrRJwXyyFSQkmZDyFftYEV59BB4wTTmt1gTxHmHVbYKYHUUQPUsuKZC74ZruBz5FWX3TxTWaVwDhZon",
  "key24": "49eWoineE39yjsEuMJNPGCsGXVv5cVCedw4DBLh8wwjMbKNFfCvawxzoqcb3Cj3hQvb8Jqh6wEbAy47wtpd1cfS5",
  "key25": "r9Zv9VV4NK9hpSFcnaVWUWqeX5FmSTD7Bg1a7VLTyMtJscdaz8Y2tmc4QXAen55SpUTzcF9wbQ4KayBmzJoARgi",
  "key26": "3twwbTaCJBawtbukqh2QXa9pTZdXyGJEBH59tDqHxdNxCXAAjEXwnwrJXSiHeRv7b9yPyZ4EaJe2xZaLKEkVo6SS",
  "key27": "2a2axSJCEc2TYqDi8M6KcsWmtyHbmCfi58byi42tZ4DgKTixgcAVRPeULz3gFRnS83ysSwxbcP7Q8B1Gb4mrstBY",
  "key28": "mtjVyqB5ZVqpQwy1xcgi2KyJ1wCB5mh1pVrc2NN1kG5ZUMut3tZbRYDAvSY8vny3SveMcufdhfaCguNDV4wVEb7",
  "key29": "5EZyFgg3yhfYMz1HV5wCubrtsCZ5cucpH3qhkm7VgTxkHgYmsgqjGW7fRRtAogg8D1Svyb5C4k9qAycLvVUvHmtA",
  "key30": "waacbdG92scLU2RtsM4tQPSDqJT7uJR8cTGeaDbP4KbtZc2xzQLr9DG4fnXke9rkzyy8uu7J8QXSSE3qtKr5Zje",
  "key31": "WoefreVxbPwscdQ739MhXd4XiqnVLXobgf7jeD3g4PFa9sFLoJa1iYxVmzQKKKR5Qfb2M66i71CmCKFBACdFC4C"
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
