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
    "5J8F7YLA23sDV7HN9fEwjBU3xae5dvVmWp1dgeqhtCgcE1fShvSGwDCyQ57pyPe1hpjjJHY9oMKHMiJ2Yw6yha4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbTT2QRbH9dC6xLP1bTLUbU8YeuMtQUnYkbk6bYtSGUmiyU4fUY6QwNArACYPB3NE1VSrhtqmigrdfF5USRMPLr",
  "key1": "4dMxciQEh9ZrPP2dWnB8Nk57ERYKB8VqmgcqjtNCMx4eB9PfZPeYPaVUbCWNFJGirgxNgezixMPtuEjqtUvbv9Uo",
  "key2": "4Ce5ADXjDg1nUeGbZoA1S4SLUo4UfZA5G1WN3azMB7wC9QpqzwLf92YtMHRv8Pn2sfz2UZZQAMqzp9CToGVo4qYG",
  "key3": "4cFw6M16i7qLCkEqgV6Fz8Y8PyBEm7FofDYJmDhM5aAFw4exj7Uy14Z5yudenV6fdzcYz18YxntQXwZpCRYzTVxn",
  "key4": "2Bm4j7Ekthx4EthzvWyms6f1QAPsWTZ2HXfcPSjWWZ38Cc6TNLuL4SgHzqX6DdqV9jqRYyXopxDSUWxchc5rErr9",
  "key5": "3ZnV6TaEyz6z1YrsruzYSPEkRpMZ8gqEot3CmnePhrC4FbgyoxKFWAp3nW6hddBt2s3N1RgVEHf83QCWajynsrpB",
  "key6": "18fmbrhZA72koRbUs7CXNm8mnPaCXtYctJkoEEzswMpw37ZMnGQVufMREP7SZjFHhpyv4btensSfgvXHsKuH9Lm",
  "key7": "38HYYim1nvMdHHYvBZUED6bc1LzQiUp1XyspqciFKaH3U92QEL7C3iKXn7Yr8T6thWUrHDAVBunQPMjyAd2JTUfA",
  "key8": "2pEry6x2wXKwbhuYyRsZjuhBREdRqgZUvydoUVgEAd29XNsawxj1xiD2k7ZYvGFU9STcXZbiGKMDJiNCioAAoqaJ",
  "key9": "3YP2QaQzVXuYz6Pv7iRab3Zvz4tG7QMjPRbyAb32VHwdqucpAVQqCdk8iLEq3Jzstarc5FpCEWG5aYqe36z2oxex",
  "key10": "5c63CpJJBmTeTGiUs2h4dbw5H5cwtNtMBhGoKrTU5uqfVVPh4prV2dkSPufom2j7QDY2GqwiJenTLJY57QTvRFr8",
  "key11": "3nxxjbUUZ44ooWKF7DQuFLrRgJPyFJm5i7neUCMM7a9WuMSuw1wMUXRsumKcKyAJACiXfjAGUphhp4baRq67fP8q",
  "key12": "2qCTubKtzszRDs87VziJoEE7a3HFrDiZT6g3pu6ejNKwMwxSFhwSBv1cw7VjvQ9HnsWJPvDZAqHCKQ59p3cpoXHk",
  "key13": "5Lbzv9tTAWoWk9BGPSyVodzd7KMfE5eFLDsKJaCjeBYKw1frMZb3BijTyfqAxVT2Q3EdpA9oJ4578LfGhuYFn9gC",
  "key14": "42zfzErbSSmA5mTRfQyiMz46ysfyYfGpTbVtqJ8q9GAzzyYRLQ1w9HdXKuj9GhyMBX637UUKdu51DPdSiKW2n275",
  "key15": "QLF7oEw2uV8UkyeAB8fTezJ6uXcaPn4uzyYkaB7zTgkov38zdJqW4a4uFnsHXMsyPdt2DGrqA3xU55NcLo7CNrA",
  "key16": "33FHsHSDvJfgW6mHBtgje3qt1bcqxMczfj5A9kCCJB4tNQeWRzRD9Fy4nXW5Cn9fKSpf9cetMGiB6VRbycr5FFZF",
  "key17": "3WneuSmKZxsNP29EnxDSHt8Eeu46GLNg4dEzbHHedofVLP8SkXNjdJsJo1eZKoN4GAYPw69UdKA7rAKN9k5ATnaV",
  "key18": "XZUS6315NFy6Y45BuSE4TjuRe1ixCbifGzkGwdycppwGDG5kwGzcSMYK2wQYotaNX9KMsnZonA12FkQycDwDcdL",
  "key19": "48uyPtBBVYifLtkNJKW74XUJz778BeR1zsTNc8PLopb4bU7T2PXi1CQMY9HjpuouVBSLS3n7peQy1CRAC4RD1Fj1",
  "key20": "31KqMFx1nvGxyL9s6NNzFbGSt6xMZyLPqxfhijyFeZQvcFw5ZtunqrWfyjnyRy5NAzkBrbjsmFzdqPWEYweGmz9e",
  "key21": "5EqGYY1TnHEDVxWnkr5d8A8wpcpGqoqpSthrst1NZSy5cibeSMwJoD9A1E11WK7noPKMkK6Ar7SvYnoUv2WUfCLJ",
  "key22": "VtJ7WTh85cptYcc81NAWQWdyCnjhojdNzi7e6G2HEER1BmyBGzBkDPHxH7ghK2ZXQce4wXwDYWy1DKSnFfZAaxH",
  "key23": "5axSYLpdYuRWkE9rsrAMMxkidQx7AaY6HKR5BAFUw4b5m2Q5Ura7mMtvph8x1jE1kUCHet72w8GP8jEab9656TNJ",
  "key24": "35jWBfDaspyyWtggK1EXb8RctRx7gxkpctjmR4yBkrFLrbZENkoKbcbN6N2cQTuwvazFiJe75EgEbg5q8Qc1WKcA",
  "key25": "56DaiAH9coVwmzDzqQP67PNDPdzhas5inSNz3g2SuQw6m6TpiQRdU1dKEEHnYfWX9gRUi5HxXnwRN4vCVpgHoBN9",
  "key26": "3BAb4GqogXViSf46FoCLT9B6Ke8poubGep7oxFjrpizM7AtDDJYZkRK4gWBV9vYRRYixGYe8iL6KmTsQRZSJXB7F",
  "key27": "4pSEKWm8viYQtqyUyuNZtGRTP4asgdXE9KeyfUEeXbDY9qMgqGLTaLdJPE5hrwU59q38aQ7gywhRv9WufY93bERH",
  "key28": "rJLSfMznwakEFbYnZeYuCCe89BmQVtzsQhSnKKhPSqwb3eWDfhxfffnwf9yh8NH3K8AFc1DENcsDG2fYMoECsH4",
  "key29": "2CoGZJj6YF1dCTJWfs5rKxgQyCZ8M4XjN4uNydSVRzybEr6sDo2GDzRehmJwdHdT3enyzMJ2zuNPkSeRqf6DcknR"
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
