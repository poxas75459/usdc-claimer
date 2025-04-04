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
    "RTxcAgV8SQ2SAPQvHd3i9n6CTpfiuhjFasQ1wipU3katMDP7oN17igYPQSFfZrpMpPmdNHhBPQZAK5mgSUhPmRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmjbaxvbqMEMcuBJRjGczMjpHBTLkhbB9nZbd8mqYSkAiS6vbrgR6HT1PmLYX2MA5qSg8tZXTjZ4PApgitFfphR",
  "key1": "2ySwkrtUa1znA79VJ1nPJegGJcywHfc8NjitcqimXHkwvDFmUifG2SmVvhiRLdFjLyxqYD18rNso1TJtrK4fe1D9",
  "key2": "41QRTmQ9Mwr4Y9u5LV3bqsGU8sftmpfGTVXWpmuiNHZbXR9vtsFxsyKSvhxJReL5ryKNvoZnGuuqt8XTV259vsMd",
  "key3": "3dXeh13DbSidQ3GXRHcFaJVX7HitQk1qfBxRzFVy7AjoVE3HM55HbQmyeEfrfyePfpvvBbpX2ny8TMkXLh427teX",
  "key4": "3AG3ydGkPTvEKJEUD8eQL4FChurZXe9Ysw8JNAnvgWf2JQsEihVrFXRMZpAFSXhYm7XnSWkGyx6Bw8ZpVupdwyg7",
  "key5": "uvCuhqcr9kBenvfCxefzszme73BnJTrk246FTeWTb1vtBj5L1QswGdbo5b6t2ANGht7QHTzAfhHr9iwxZaHPqHr",
  "key6": "5gEfvqC1juszmYQQ95VoH4pCvWR9zJKNcSfAvoUJNJp4roPvLqXym9HYecbHXQR7L6MVvCmFwSw93sH6FVBJHLBi",
  "key7": "4Xy8Gymwu9G7x1FSgeH3WrRSkMDoaHguCzyt7kwDwgsdcNMchkbWH85VohiBUXtdAe3LkAtKn389pKwcqscJTbPi",
  "key8": "4rstVoTzWBTkJKzRrasfrhPHq8vCdyrZKBt7FcCyYijo4irT9t75xEQRePYneST6m5BzeD16tMpWNe4iZnjTVHrM",
  "key9": "4R2XksvuouwanbGhuW7G9iFFQpdDtHiT2mvLgds3Wg3preBnae4UhFEBkatAQo7eLseZNVh4EaLVFoF9u8ZVUYXp",
  "key10": "5L35K51192cccSgCjErPKxYN9upwFjvTrQ4mYNZY6NJtMWyrQRvbPZ9zRqVjbvYaiQrTCy4BiFtBWTJJhHJWRpbY",
  "key11": "2fKHL4QjEBbDDVAw87BQcygPFDtriLFr4oVtb4sFMRuD3duQCeRaCrgwwcVHFpBijh29YB88hP9h2FAGtbPAqisV",
  "key12": "3K7ZUwAK5iMEcU5smCpr5qCjDDuFweJEXb2jsnh3jMCx1Tc2K4nLQaxBP7qTeLvpt1C8RtGczetLLFV5QaRfVtNx",
  "key13": "3Jhmd5c42qvxZPifvUQ78Vmare93BRjw7ZV91qZFctZdKncgW9LcYB78f8si5wGVsznmemqpzLt95R7ueKwe3j71",
  "key14": "38NC19hSPvQFBuQnkPskfAwbANeiSJ1jEwMjgonXpNZD3ZiKZaaBKBVpjetTxZGTz3cqDRyzZ7G7oiPkWYCbgs1u",
  "key15": "27E9WLQ5nTa8aReTjJtuuZCGMPFcZpmgZXdh5DozeqfMvDekMfSmaSAk5MFvsMm4YrTWjgvTfsznWKHkkVbaHiie",
  "key16": "56rEM2DJVcbRiFkTK1Qh8nALVrAs2quMMYiWLekMUUtEQsjxRXf4QkprD1YpiCe6UgpFpktwjzue9TxLgLda52nX",
  "key17": "59RjiYc6J4CaBKCExduP1CY9CSbWJdWT7pSyCqjL6PqAgPJ8piSaaHBb2u8u5H4LznJRD6Krp6NjjGTup3hEHNNL",
  "key18": "2mfMU2Nh5FGFUDz82bjhsTXf1eHJiDbVoGGztJVhkcY6yeyFKNMF8j6bipv1Ab2YUaCXod5v1enoFsrV6nYQEkRX",
  "key19": "3xjwBaNt5WkN52W7pVCHNkjaMEtRsgyxFEAxkN5oVcGrRyJV2YiARWAGGm6aBhuY4tDG5QcL7raKAThzU5N4mbM2",
  "key20": "4Fobv9JtQGUGHTkifNDmk4tnshwTa77h3UpQRTKQoN1TwFpzKGE1JdK9DwKHZzwxdEnUSCHdqfqAYxYQ6CLSzVW8",
  "key21": "2hB8YvhYE3tXNuu2VWgaWB2rnSmPrfLBeiAWGmAk5ThJvp8H5SqkVsrmstqs2bGVJJBtqb63XwLFL1dR4mQGybfR",
  "key22": "2EbKpBzVzBLBarpqsKYpGENyvaTb1LaDj9G1yTwUPdDxfpZU1DoFurvPJDazDbprLHjqQoYugekAs6JKynAQGsk4",
  "key23": "494MnynGfNtoLk3E97VDYAK8UTFjvZ9ta7owridSqRKCE5x48wCqGPTZqb1ue1JDp7eLC7VKQLpdARqMogWnsjZa",
  "key24": "NFN4dka4Xp1DnvEPXgZqLxQmChNQC3KvNJpUNnuxkQvYpzKrQuLRUu8eiSVnqcmooYarhiEitnAW83e47UfvyVE",
  "key25": "45RUAZ1q5EU3ENoeFWQVsgfAGSCX5H5Cs9KtyP2tjcqnAqPK8CpPi8UytnaFcdzzy1TH99N6MWNfbnVdJHuLCjrm",
  "key26": "3NTi2ugBqvMcZh6tHem6koYHUoSPNJwABXuUdXXpZdy1nYUdECTgjiwXkYbzV1nwq5MqPkgm2Ly4pWEDdRoNwTDL",
  "key27": "3xUzfg18Tov155k9xfnPSduYbeFv6Awu1UjAp2g5BZqeBm1Zeb4ZTAMTMqepnSAU5azByv7hR9gyZcJu3EuwxvLa",
  "key28": "3kh85aPL67V9bwpzbfxJa2MUWw6av3aNdwQnZpwUSkHSoxmHpwWqommHfagJzCeSdGoKXdU8FiyJhPCFMAsRKC3w",
  "key29": "5pFW31bEj9nccyXxrV8qJn35ezosDzLPX4BFpmYYHpP7G3Hxd74f7CgTgACqAu6WoJYLnF5v13RTy9rL1iZt9nre",
  "key30": "4uEbHRDkEAaWBr2rdtuSGPy3m3scpuh47exNEgRAK2wVHEfwNP6wdgpgdsBaHZwJCfqB8ZA9wYf8H4RdRGnuVToV",
  "key31": "2dn1LTmRvRWMwrEe5Cpf4W2sir9eP2D9FwMFHnVLj56knBGqaD5oKxiQVLmKroUqbRerVLkwNbH8zfL4qURLCWZc",
  "key32": "4mmwV9rfY8vSZ4x89oHLKQvToBRSHoG8ouZ5PXpxi2Rst8exSEtLfTsi7GjW1mR8dpCSFXv26cCFdJS9bub4RSDV",
  "key33": "G7xGHBVkDU8E1qjmaoduLP45HY6Tz6sEaH2G1N8to4kYpwRxttH5PUBCpryUuSZTBUxF7BRoKh4XD6iZP6X8onE",
  "key34": "4YAKKSPZgYfEfLeosqWEEGfv18yH1ob6Ls62SU8Lbhr3YMswmrGLMLCtLpz2vxmnKLEXb2qFyhHVg2rWzqDbqz6r",
  "key35": "4ortEf61H3vqAsmbM1QYhnhtZNgsx2fq2QkRkCT4XLE5VHN8GVXxxkpxzi2nJpKhBMPkC5STnvC6NUXQi2RwH7GW"
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
