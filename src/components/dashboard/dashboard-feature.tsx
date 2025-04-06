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
    "4DoX9fh37cRGetKyY8eqK4QAAAdzZ7ivGaLULfzqv16kwJSBGzbnYLHfbs2Q7XrksT6T2Zq4r9VtxsBroYzkVt8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ePMrmcY2vnfYAFSt4iGw9cxj88Sb6RMYYsG9jgmPDzn8sbYAwzwZAbHMPX7DGYbRxwGt8FC7eBRsbgP5MRB7QJu",
  "key1": "5h4ekFvah7NXxiS7U9ue4wYVxofqgGZZrrYbxF81n2ugQBSX3r5ZVeH1bLgLfjPZGzg19jmwiUnzVZGx7jwnnkbM",
  "key2": "RH6sYF4TCSNC9mPS6XmFWK476Vne8M8wnAmy6cw71sU8MRRHd6bZsCruYxe9jWyrUveX62qwoGdKe7dCJ4ErNQG",
  "key3": "9vSHiLWszjqEKd4qvmFD88rGHJ6ib4mi2N36nijwHgK6oe2nMaQtTcTz27fYmnEaZfeBrwoiq6rczdApQ4QU9qi",
  "key4": "5dKkuDAuFif6q6kdQCMuhP9uqMYaPhaLL19eYXrGL96focTjq6y8Y2Xmkhtz4EKar83oJhaxutbjt6BPyQZjwmbs",
  "key5": "3j3iyKd5LAYEGZsvH7nm6L6f6GAMjxJFDp9doN6oQT2GAeenyf5NsUXbaLcgJjh3bUcspnY1UekYsDJgN964bNuc",
  "key6": "4iAu9yhk8SjRC7pmzieRgkErqsfhNsBEVw3udvmmK9Ma6BB9urMJv9AoyzTvm6TFrauGsj4ZdYgkwoHZyex7v7Qu",
  "key7": "5tF4m7G2YLZf9ikSyZACEusMTTaDtacvMuxb6pbnrsmjpnDxbYcP1kn9AVxfvpycJsNjBbQ8YKiJhwgYqvCjddt3",
  "key8": "4iCKYipv69ktvc5GJNHyVaLkCyxXmcdUMX28HBXVCsyHyxRaxYeEXnQAb65oRqXLAU1NvFkK98v8M2Dk3gEtKqyT",
  "key9": "53NSMxUDjFQS4G1KQdKsbFtqXRtuTHv2jFUZrKDnWTUQwhELn53NDWNapN5K2mjbirD2mi5Xk268vSdpkp39WGNr",
  "key10": "cnv48377JqRTSj4ewQj4ipAxT7U57qPRX7Zpmh6g1xgm1tPVhQbPiDN3CPmocAowhn7zVtxZximkZEAzz5JguyZ",
  "key11": "3cFyr2ToYwYppsEZ6qSiFYRffx4gvvHmGP3a2ptmURQnDVWSi5RvbHbhAqDAVP9vLCfRN9rtshsQYydatqVca5hv",
  "key12": "ohfHjkHtqYW5jeqfEktj13oLxUvLhEYP3CcvVJRDW9932Fppk5aQCGSjTm3cCuUycWwCM1tsSj3cJyFYK13v8oC",
  "key13": "2TiCFoj39kzcMpb1sa681XiVHTcf7GvgPbxp8a26XSpegXbyiauNnXAu8LLhDh75psxKJixGNqGcG22iAcas6Ho4",
  "key14": "5PJ1Dx531HrFsJTWeFLM6qaFqqrzHPUqhbq8RTDvUjoPsFPztMZRG2DRbYwbZS7Jc6yFQxQxmpR418fy1uTetW5g",
  "key15": "29kGRhcrbqp5kwVwzFmLgCoUeaE5c2vBgQ8RFB28F2nruFXqj8USQGTeZcwR6BWNfLs3JjkDKE2V9UEdhEBxG8UH",
  "key16": "4z1Qcug7bdbspx1PsQjbqN8Jqhj3aZEo96TUSLw5ZNRWiBEb5YyjBdPrh8Lv1WhJzPHXsGd5h1M2T9Soa94zWdR5",
  "key17": "2rGFfnu6SUDVREDBkdtKhr1GSmkgwyLpDppyCuXXR4owRLUaNGKuZtsq3NbycZVL1tyWRVQfb8m9UZ5wj99hnDpr",
  "key18": "vvpEWYRnNPrsozq4smXJVmiT8i8hnCU9QaCVhea3cmPiG55EKLiSUDFfDZJohpm8ki2v4eAWy585GaA3nr9WNDe",
  "key19": "4NsnhW9W7rTy6H9ACTg8SWVLetZcAyLovmStPPn57p1pSbfXnAduP4TTvb4BHw5EMcnZZKipgcyNsaVTvXSK6hfr",
  "key20": "LNZnHYDdmns9UakZWvbD5AdPx2wfcqBf3sTckhB39vwH21D1PNfbLanLupBLwrscVCqcdKfngD642afJpDiZb4V",
  "key21": "4KTPtvB4ZfH6xYiPykLyYPnoWEMNa4pXd1QWZr8Yap7GPjndbNqkrs6HbEEMFcKoFvqkRVVit9z3c3VVD2wm5qUF",
  "key22": "4in9bfwMs1uajP4VBFtjtyRPjsoEXxhCgkFaeywRU9CeSap4A9N1dKbJULi3XD39ej1vytMG7xiabF2JbHWGcXQV",
  "key23": "2sxrqZCg3pAeP9hRhtj86uacPLKG73YSZV2z5qjDHa7nXwXqKRwwrnjSDtiDoc9UAzww9YE7vbEd9THNY5yfQzdH",
  "key24": "4AxYfXEnCFiDvRx64dXBZd5mfyAnX7su6zi1xSWTwHZ1oP9yXxFyT31dPVjxBfMdwvMaimye9H6bDMpdBYkhqLZ2",
  "key25": "5trZHZznfcyDBPNpCXypDRyd5e5YGEcsJTYL7NaB7WtjAnbfW6pPV3B2Agfv99c9ihvJfdEBjbUcdhZp4Mn256cJ",
  "key26": "3czYFBbFnJUgVffg9XRoFvzFkrpYP74ZeSNvTfx84SN7s69VV4fMPGvPpttNtUN6Dh3x8edAmFqFdURBjAWdfCGs",
  "key27": "3UpyaRJ4fKvX9Ua1m1FkR4XitYXzMCMajmTRJW8URz63oUbrqj7dFw2zBmv6VwyMcHpRkSQisttuYRwbpWwyU66Q",
  "key28": "2gxNKUwNSujZEYbot18RhycLve533smr2pkW76esBcZob5phkHrj3SevknUKX25u2ujFZLFaHnDfez83Xgs6xDbu",
  "key29": "KsXRYSdCBWW6ZLaieqtqjiwiQgv6TmHqnm4m37w25ZKPWLW9eFvynRqG1iGWYxKbLg2Jok5nmmjKjtAuuQBLtAt",
  "key30": "3Vn6Bebs2ToEodkiWgh5caW6k1hexX1iUA8XyfvsgXCCuw7Rbb3Px9xgDzEFh7WgkvT3TWd8JswBYCFbMtWdpmr2",
  "key31": "3sss8i113sQSfBLSMtjmGC6Ly8aaRMX3Yr64NkKDAeNYwJrPHBMDmLce3q8WR47rotVXywHAcCCVwkWoXDZdKeCr",
  "key32": "3L8p8oMqWJeMKpqApAi1jLWjbxrK5WSn1kkvT5arJGw7YenkVHfuNWToXs2SYirv8nniygxjtqSFB8MaXEGtaqyY",
  "key33": "3Ag6o17HnS9BpGc5m917rVENuffx2KzGAX1JAz9MWLRhvjwsGVDbZBsjfNP4sn1McBLUt5YocRATA6NE4v7HMgGP",
  "key34": "35dJucN7fCg5vzELEhZR7qmaknd8f4ZHuPBWoRT6sWBVv4nbfjqbzZXfCLyZmZxjXr5yzA6JnuxZrHekG361Ua61"
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
