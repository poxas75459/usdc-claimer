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
    "5aExHavqULm8dMxrDU39aKuTgKXpBXhZ9WigEtgwANK8wTu25d1H1eFX35U9qhmKV2DBr4kuyqoRQ9azwUeGoJ8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxzQYYJV3DQqGU7wmZbpPbsoLcUVWMzbEyCwGpSsuiweUwSBWQFogBVf8DrT4tC2T5n45sLxpjM3Kti3WVetz53",
  "key1": "5x3bo2xB5txDbsforuCpJAgF1KyTd6iDZgAo21Db9wNLvbVL1JQEh6p6PRLnw5DsiPcY6FfdsTCg8ENg2v44FDTb",
  "key2": "651ixi6bXgu1TJNcffhYu1iGSEAzzM2d1QyfFZK9iSsJNs6jG8pHGd79Xx2QWM79FaXutAgs7ZptkWJhSAssW1D3",
  "key3": "3sNewfAAuaTRQh8uabbcmQkaeSkTb2W1q7BzMbSQyvQQ3bUTtKyg4D6zxgnFyt9Q72FnDnHBzUKtyHnAwiLZYoEb",
  "key4": "4ArCtCKN82DTRVa9yUJdvRSa5HsA8QPWvF5VXWqVDVb2oawcGXtQhKa5pgHoPSL9tk8fVg7Pg7XVcmXFTwchFacP",
  "key5": "3EjyTaMakQpVaNjzTfPuQnZPJNb1p6DNQwmyMHkG8WffwktuXD91CvaeMixgMEALsoU9QnKg5VuodWLWPw9bPd1o",
  "key6": "5M2sB618zTc4QSQNGknruXveM8iuQbd41ve9m7siAHMWPKHqv5HWkkaoaT2dFB8GqKg5WJFXeLDjr1sX4xADhAeV",
  "key7": "Q3v13iQUsev58NprcePAdG7mR425uKqqe16EMC5AqbvsBTvVk9Tne9qy2SneapNLH2Kayd4qQarpiWByRtHMZaX",
  "key8": "4aj5zb4DaE32WZmcwWi6ra8bTC8d84qXzUbWi8tRV7aC75Bf6zK4Fde8X8hkjCcG4qm2fi7kD4U4W9TsCKddVWAy",
  "key9": "5zQbt18t6LbrFzNH1eJ5fK3Dnr2oSuoHR7oDbwrDGE1ajGENR9YpPQU2GvbCokNxam9XDSikvPkjyP6xxsDF4xJh",
  "key10": "tsV1QE8KZBbVnDsSYnmaivrBVvSsBCKr1axyQAkJsA5RwunuZkPHUQWaNgsBdcUp5A7gQ95zWkgobf6bQGpWd3A",
  "key11": "25Xs9WhF5HnrDmVy6BskceSKavhLyHnTtodrDqxTQRVeBwxAWXQmKzw6mRF9nMWdXT6xkzva9nXA8dSfReHbpXPV",
  "key12": "5ySXYpUnPC5cRL8du9CtS13PQsvfagGFxSMAsGsoFon2HHwzrwodQFc9erPosvG5Y7vPazteRYjeRJ9Wt9AY5LWZ",
  "key13": "TwZ1RBhrLTW35V4LeUXCoFzjo7PKpjBPcDgnMXLch4LrrNY8KqQRsdDA2CB5AUgzjqkzfkFoqWpcoYghpLWQh4D",
  "key14": "4BUvPVUtbUYkN2dmG1KqcvDSe4AgHvpTsSQofAie8Fw2k8b2B9E5YudezBqavKyFTMPFUamBNEbi9Xou49HxUCai",
  "key15": "rn16RjZ9xhVFnigCHYq8tesmrwFjNiPCtDJsNnTgi8zbb3Qzqa8bqHBCRf8BsVRLPNo1KgMADCvF2TciKCRkxXA",
  "key16": "3vYHBx9UgV3i6SUfwjEECPi9eAtPRf8kuaNzPqECrLN23GRrqxXXZ9AMuYN5NaHcnTi167n86UmoY9Ud5AywhoV5",
  "key17": "67AT1cR4qARJjr4iKxKB4XTWuCqDnAnxVD4rAermkiWueL5wQrfiyaBYsgnbCkCN7moDh2gmtPDnwx2bqgAuacq7",
  "key18": "2q4KED8xhNdfa57A8SsqoQHwkxKjZCz9SMbRRWVCd86Dw7q6j1p99hD7233SqQsj5hAWB8v3xQEkQZ9kqyu8qTfi",
  "key19": "4sE9w97tLQojgLeV4kB39aFxQACWHwZtL1Spx4k1K13KoRrUXXfhNVeTT7qxJKxu9XfGM1uuTsStWwEJxHmBobiw",
  "key20": "QJpBTzRSNKCEoXvUWY44F6je1EXd3YHKZxXS3eWJdYnGHHKruTUt87P5QdMcYSsHU12q8n6oWe8sZafyKaqKV7C",
  "key21": "3rGNitXqPg6xiSC32cJnurGfsofyrGRDCvUUiV4iMnQLdS1NC5nvm2KLH9ACRfs8cH2vqEVFXb3d8UsoYKisg1PX",
  "key22": "5hNpzJNqgFz5qqYeohgNheL4E3uJWWXdVF7816BJkuzeNMn89r72fce44wpwkY2M5VWBQ7YkAQAKidhXMxgCph32",
  "key23": "3455FCnEDc3aS9RPTbRRBpMNH3mbHYs2Bxpy4QCrpwAXjPMfXrcwNa2saUN3Y5MfpJzG2rWHzx9MvFtv32RDo9By",
  "key24": "5FU4mndudbPQHwXNh6povMNcnEefHZjPooaY84K9DBVXVsZLttHxxowUKCwdqYr6rSaNidYJhUnczVvdDjN1xRno",
  "key25": "3YEkKGD1yaEf3o9YAA7BrZyV2jHxoQqsL2oUJ9zFy6yHniRkxFikS9cvBZV2QwXN9d1ycVBxYTM2DUUNZEF5ehXW",
  "key26": "4Vfua5i4vaS95LJJPGSSkXaq8KzputRiZ91yYNNG9xRFxnVpJr3qHmFBpv5U654HV7ZG9CZe3ttZhtsUvf9QbRaV",
  "key27": "4NdogfMwjJC8PRttrXJivNagGcZQNCiHVcTUdxyAorbNYTiT9494pv3hGGgC3rcgctciLBhTdPBEnEZfx8ML3QZC",
  "key28": "3gJJrzxZ7aCaX354ycvKKRQeorweRkcg1sFTD3RxfELkBFGvbL5yPa5d1KTsxwJLXidBaoQdC4aAtKxEgjzcxHoQ"
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
