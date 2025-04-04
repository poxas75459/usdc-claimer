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
    "2LG2enQFepoe5c5Y4yyfv34W7qALXp2KmRRtpeiteRHiJRY58bibSGNLpffg4zdzUerqBGJrhAYiKUDKsdhSrtdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27oyPxK8paH6oUWPcsvzh79eiiJ1xwMLAaGQWDPixeWXzt8YnUcXm4c5Mg7jShg1atA5oTUNUXuhRX87JDCn28NG",
  "key1": "37GPgDZsUMGv68xtsceyP6mLiroyr6dL59ABDJrzGUpw29L5Z2Qy64YCRzTEpHDTsghrNfFnQTVQF5Zf4PRjvAqV",
  "key2": "swAa7snLKMzfZoeNK8Q9YUYzF1TUryBoQfEwjdwB7YN1kLdfoVwFXNCyayjL7QdgX31RqTB3wWLQhmfxYXc2gWF",
  "key3": "2LhZ5nBvoScAEDp57jmfcM5fmRbnVgxhePbbDeC6MmwGEjeWWFk3LnNLQCMw8ufLSvkVfpJSZgWar7nJ1TS1RcVM",
  "key4": "5xgGb6nnwrwNnfzd1m7A9xdqM9fFjbA2wijR72oev6HAcbeKELXnvLVTKjG71FuAMLTum31RD8zZgb1pKG1UrAmh",
  "key5": "4ji29coRiW4wJKLNraiCWizLokUWLgQqXStZt1PU85RtPSR8DveTbijvHoWN7q9N9Me3gLx98Vars2wMruMtvxjU",
  "key6": "3LjE1YJPFzkbRo3iNFpADzLE42cbE1gGUSFhxo6vaguR5QBTmMM26UFpyZnshVHdnHpkaxdoQB97kiwcgYYvPk5s",
  "key7": "Zdx2BUN7L6p9Ht6x1BdJEzWEoYrxBZPk7mZ4oD3jrpwgqUjbQMuxKy9f8znvs69meCAdCxRzp6euwWMN77aYmdh",
  "key8": "25g8di8kNbd38RHF8FU5XRYHShZyPiS9Q3LvDQsbrk3C48mByLe4vxnPDcx1KAewJMz9jXGeSj48CrqMJkiVYfRN",
  "key9": "35NANtGLt5QtWCEnc3hyT51kNr1DLh1ZnAbvAen31tp3FLPXhyY3rrp86bAee8UhoPezJLucrcBHRsEzYiBBHH8a",
  "key10": "3p2VokFzBUxFMGpKCoPFqS4k9WXdn3HNj1gNRobcshc3H63AazjeDEYbGVZHgcyysq3uoSRWHD8AJv5nbFhU3eTf",
  "key11": "oWwv8hJtjTuAxPCGyJVoP1nFwpMiuktsMNnhfmtW8nqJMYhZAbih6j8u7byetVdyr5vmU1wFE8CSxHETZCjxD21",
  "key12": "wZb1524dnNn7A8U2HH9SrfD9rcs9ScnwoLgemEXLw2mSsfCU3fuLRq1CrsxdU6sVAXSBgs19kBrcgB6yfYecYvv",
  "key13": "5QvWV9ppvg88gnjqoyzmk6LWZFrhEwJmBryJp2diXqzMedfCbscgQWQsjH7LPVbxL1WTfk2SXoFJPAqD6k1Myq2F",
  "key14": "82Wc7dLjewaq6noZLFsonZWBUnf3BHaH45T3Jbyv2u9XC6ADJFkEBfK1tadEHpinGWbumFPggqBbc7nTukaS5ow",
  "key15": "3ct96BFF77wf4BAnTqsqUCnPr8BLdRFFqwn7bQ7Ap2jMT8SmJJAPUiMgKd28zGakAHEvWWkJZpndvXSDUK3FBBaJ",
  "key16": "4rzBtGnnQMQ9JkWk79CvndhCT2BJLFhNjqcZS27MEPyPNyCvnkJ294bFrsAMG5ktGongKNj2mhKHpZDgRCSKgXuA",
  "key17": "v7MqPdag99qt9gRQGZpji7tZ8THHdRUxU87Q2cjEFj7KYtrjYa3secWgS5MJMZXYpKujszo93cnmaU35Q69BYV6",
  "key18": "2Jr8d4hZtwviTYoBXq73z7er64XwZgZHC3FEebZcWWLGEdvUhGDgYHoZzYTxMXYwecFDk56FzHL7qyyfitQoQazm",
  "key19": "5cuaDra6bHZJaqgbEXPdmdTnNLPHn2rRtXuJ8MwbymH1DZ8CypBqZJ1GdPgm4JEos5Eo9nqWThFXANdh9iXdgcQ1",
  "key20": "4vBMNnePfPYxJnjDBvrN3gvkgz25tseepbKzjLYWry16GLjtNX87y8zMqaoe8EGd9fwkXahwQyaHQ7BKCqNnznMV",
  "key21": "3urzZMqBMPKGjgS4qEhpGBGgnqwpriypS7CrEc4Dmex7YAJunwFx5HFzTEo15op5yQNhY6o6tw6uHurpoc9ejPjs",
  "key22": "51CWgXvLF3nRDow1DH5sZZ3yEaySV6vu35RwUNPKcgCcJWw95UqnSbW9xPcdrPMYp4kV8FBHjprPPkdwpc31JwbW",
  "key23": "2guzkBYSQ1v7AHVUyZCG18VQpDCMU9t3ucZzMJAJfudkfk7d5abHjbQvTRTuVYuDVHNMVQugvTFWUjYecZvQo5f1",
  "key24": "4m57HRgC7TpV9fDh1ofaE9z49fcYCufQAdueDSMb9y1MnuJCxW1sCpMoZFAzfjWPNSeQsikfL34Piz51bGVKLrKY",
  "key25": "4dAKAUFB9XLL3uv7Pby2odCV3g1GthD1mtVgvNdknuBxjyk7vc9ba6bRqYCVSFNX14RtBKenKvTT67T6ctXGnmyL",
  "key26": "3BX5Phf1WEo8AiAkS2ceDZ82TpuWFMb5RAb7WTL4pans9t5zSK2vZ3x9MdU1CssoA58TVkhmgGSLKb9Mu92ABu3y",
  "key27": "3h76vz8b5mXZxwuULMCg6w5wvQtQXZAzQcneWWXMpHzHRKmCBS3uGy6uQRDFNHwFwvwCR2YGucYeq1aAevcYPhes",
  "key28": "sLT2ygr5izMd5y9KQHRF2qpxWTjwHdG8m3FPw6LbC3o1yqvSfEzoBcYVH31MNvYT5TgCefoWw3uXPNe8MTiX4WW",
  "key29": "5KJY5e7cxLSYxUdVgP9S1EVbDwp15eB8LjaKFKLzvGZGtBx8h8iXxBZujKYkD4bGKBQymoa8yo1VSKCyqVsdmCve",
  "key30": "4ChFE2htaJQj79ziQPZsbqYPvE5CCrtAtJpyDsLBjGBqiQPT9FnncuQNFuaJAeD8QrSV3FrFGrsR6WiK8s5DnNNR",
  "key31": "46GcEdHktyByuTV8oBkWDq4Xmkn8tfkpEvGaoTrDp6H9xy2Q3ZiAdfdD3qJaGxEaHRgRQivXV3odjwzKcJi5AJ5v",
  "key32": "4zafW3z8r8fh1w6m7YgD3wddv6N536CKR4Wq3NG22AwCTuzphDVbUeUosHKEa8MnTAS1UzatoMxwEiPJHewoYxLc",
  "key33": "4eqCPqpJqsb9UD4k8D1NJ4RvB3c31PHSzjKAxDnhJSsTXL8MSPdLainqe219jdzpqYXkXPoHwL6eqQkg1rudymH7",
  "key34": "28PwBvckQ4hDj4Ty8yeqAgVY34G7HPij2smQafu2ogSP4haBjpxoWm2fiUKpw4Yk3CVQVwJyyQeMZxB3vyD7hgRR",
  "key35": "2F8pjNQ8iPfTJqE6CSP89tUKASv4Z5EXK68gqhCMATTeK1wKno7Tu7QYsCj9tkf3z1W1L8Xhz9XFm7jmLQikFiGK",
  "key36": "HSSJH24X15a2Dfjt2WEcUpv9vFTggDZ24kHBkT2Q9zNETnMLYLN2B666PxQj3cS8aumpifVKis2iEyz96T9W3Hd",
  "key37": "5bJpeoQiCqhyitjDFAFoESCCHgvYLLbo8qxwCTZqr61DH1XMx9z9pMTD8yLL4quP31dDXidpRHnd1efmww4RL1WG",
  "key38": "2PjdqndmFFVxuPMaEUoNsaPBvdKJwxUaom7z2iqNoSnqKghshVQagZ8W9KwZqCayqJJXMQNnniWfhuUNfbfses1K",
  "key39": "3RzMqcJX3cPkuaaDZmMdeLbyr7LRMCNUPhmU6dYQU7YNfbRcfqz5NTgQKY3HSCRJTrCwYcjZzpgsFjpMfZrZzvS3",
  "key40": "5h5UUriGydk3iMqZp8ehniJTvRDV1i1EE385BS6Ps5yoT8iFbvVAPEaY25o1dKMZpVVUuFCAA9dAcqbR49vceEEg",
  "key41": "47r7aFDtzEyxLhxYXsGcPdmZxFfv74NtPy4rNda2kxSVwMfXk9Y2PBT8DF2nVHdU54Pwrp4wLFXubNLiAFsXoD7z",
  "key42": "5mFVo5iECPeY66AWpKEhGEQSaXurKw7iaq3KLGKGczotFfaQepC6pYL5x7Zv7e2n7xxM6G2AoxVogdMuuqamQdnW"
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
