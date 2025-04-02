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
    "29Kr9bnox5w9mAcCURUvrNDexVW5KVHhC7Udsg9VGRX9hqoda4nWPNmsQMZY8aSZtB4D373jF5rDJ42gUkQkoky9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yw5JEY7eDWbhkqrsF1S1y5vGWfSi9etihDpsFaJokiVEGRCEKaArUDkFJKrEgM4g79gh7LcSkFcP2sSMuaXEAZv",
  "key1": "4scTFmQLQwvHC8BvCS9TRmyfxFo7v76cRBhoUqAAzgn89tFUygLk5XwWEBmMryfU3xU8myodY1xDhqgmsWmrACVk",
  "key2": "PEfzvgyA6KsMykGppkV4fBUSAajdR5Toy7NQjK4cY6Mndkz82epzZ4Bfz7q2kgXvozfHGGJihnuxjqg9nTfkB7s",
  "key3": "2Uzab1mpXSGhbFnt7anw8jucvLo4kEYN7ZgVia98v2NESLTbmeXsXWBD9KN6KnDSuAwDwk7Y66VZb7Q5nqooZP44",
  "key4": "3SFjmFTCspKowJnqGxjbdrUqgRrtLS3utieM4ETVtx51PXdUcCArgzUEsHThaQuVSrG3y8Ug4G9BZUcUsVbLsWSQ",
  "key5": "4ev6CDAuhw2LW7YTwTsG6LDByWqAowSuz5na1Z5Ww1SuzCH6FStF6rua76D4khppzrHehw8tTXhYvC5wC5QTiW6g",
  "key6": "2kfE1jvLqMxbNX9RWCM8fsMzFQYF3eyFfcX4v2gm1JqxpzuopdpFaA2hcbr4WYdcN2rtM5BJj8PBrnFN5qBwSyMA",
  "key7": "jHmuo5pyTaU1FhvH8NZeYC9azQrHp1zbHqCsqg7N8q3nwZ1Mh9LdTXK36Ua68pE37XwWh1mMvgzvtBC51TgEDU9",
  "key8": "3yRBdHdZjXEygSdFRRGB6r7iZAG223kY11XE1t3nkinkcKcckXMdyYWsHgoehnmmMHZU6j7hnycwzoFvJLrNdEDY",
  "key9": "4T4Lu4SknYgXqzG9RMe5wTir74AENREJQqKtQp4RjgJ8f3JnXYYeJhvV1ppPmkMAubVxXmPhQNCDJmtgsVwvNSMB",
  "key10": "5HELLQLyDgRDHCAryoFKJSSWHfnT2rx3AU6cx9FKLC3YEnNEe5r2QvLYPKEzByFzCzuycehatSH6aqZWEiHRRsYX",
  "key11": "C4DVAfg4b7o4TQC6sm5vUQ38tqnohVku4Duz3PrDcAzJdgt5gyTu9MA9P4AqZQQE8kMaNFAjonaBSSP1vecGeUx",
  "key12": "5nPgmGvSLcbJvaVPntP76Zdw1YKBL4xtDjg6XVPddLbimaQV1vAN93wbrfcvz4MPBfqbV4i8Fcqmpr5aGW4RdoGR",
  "key13": "3YZiaGuD3LyW2tM3epwBJm9gtSRYb2TBofAL3GKs3RU2DtViKQwyhBwUGMFRCmzYdQPBcUJV6h9jS726rLjk6pgQ",
  "key14": "2eWpLmNayaM1oUZFyhDEG1rYLvjcri2xxrCKUT31xfNQ3hQLzE1ANvSxvppkUtontd1KUkyf8exjPDn9jEqfUScQ",
  "key15": "2P5AACi2VsnAJe89nSvETDscg2SPpbuzf2A9PCwTVe882r99kh6EEUbF6RtoQm53TDmAWWEY31LHKEEC1SbAqh3k",
  "key16": "4waFuUZ9By1uWhowMSDwWhPg7NeA69F2w1hXghRL8wxJaoJKCfhMkUnzHoqe4PS1ovzjyobH4WQdR3uov8G4gsF1",
  "key17": "4GAwFbz4G51xEnbtJQxu7ohLy8ENP5zYEvEsRWrk65ymVoTTf3rXWM8KJvVmTLPU5VLm72nEfGk9KAiHHkQPfsAB",
  "key18": "4LfgDdgT6sdzM4wSuCGsJ79K4PG3bVrF9AkbwauGrSN9ejFaPcAu22kiYdKTsQqHN4aFTnzdCdRZT81aqCTvJadt",
  "key19": "51cniPYFviFFPRFBTBQVAkAJ9ieLr33EG5gELx6BN3AHfSMj3kdxyvz86m1L9HaySVLHjSRpzAuLAHB5CwaAKrjM",
  "key20": "5bKWw6wbC99Kqnn691TmvfSKdrsbzNrbJD8mkxCvziwaccdigmFAiFVG2WGTPayZ5hs6ULPdQGKnLAAMM5KdS1nW",
  "key21": "4xKL7jd1tCJHqGMMkSr5kNUR2tdeWE9PUQ3DccxrMGhK3hVsR5PADSAu95Wr6q2D385iy2oUEUS8vPRRxUdhqCw2",
  "key22": "3T4v46Spy7yJgCN6Nqo3DZLtebnQdPEuw8LCVBLYx21EdCGErm8S4zdxMzRwvQs2YLSAfyKLFit5gykx5CvpXJJr",
  "key23": "hcWgWirviNTup5R7SBZ4cQ7vMfn4ykc3WpHhT17cHgDdR8WVZehdy6vpKx61UPX2mHEKJoS3wbYZFv9caqvGqBL",
  "key24": "2NBi1oiDo69jHi6K3NbDHxwJErTWmsZgQjGwxWkAFsNJMrXoiMPmA51WSVZYJnmHopGUKkKN1NKdZNaeoDeSNCse",
  "key25": "666qt6KwKewPAAEjy6c4wQvAQWgFr774a6GzpC9t5Hhh1qerP4QDWUsBVdcnaFstkooFv9UKvBUqC7UWFBcQvCbd",
  "key26": "3ZcfPrdLH9TzNraAq3gVVj4d6qa7xcpsS8DW4GNjjcBEsWGCBXbBQhvY6bVd3fG59cB1MbGzqPPcdaFjyrio5Z5E",
  "key27": "5E1dmRNrWTKnmMoabJuL2uAK9FvNnXdXvt4rnqZTXr7yVymvSg3skkKwqSaJW8YcP1FfUgSeTqxi4ie7SdBNPqbX",
  "key28": "3T9LtD9r9UcgTuGSHtohVRRpyC6U1s71aDTeerXzKxXdprdYrUchUTuAGyP6BbUz1VPmg1UAAY3v8k7aHRG7GCDV",
  "key29": "3Jg8AB55YiyLa7sDu4vZhHMKFyApQYbQEsDRxiRF6bCPF17RaRuvn6bChVzduqVmVq7KspKbuMVsgzNHnz1RS5Kb"
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
