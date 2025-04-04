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
    "63DdrN8AaeMAKdP8wJ1HJ75UpPweP8xEykf7TmXuXj7w2bhPrTAgHH3vjHkVpBcyCkpo9ZtZGQEBgQPKnN6aUcER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAJNqqE9XbocYNAQKYY22FsqTu93SQXfR14b5brNAdBqYZcgf7ywAM2RNDHpeKcqAr97MDusJcUHGTQSxzkBQgJ",
  "key1": "5zVT5xgSVkgRjxy1Pq7Fzdj4PHjNwXh8Zyjn5zR1d3iD7bEHKKH5azqrqWR5TegrGuQG929noh9ZaCTWdLF8BfWW",
  "key2": "36QyceEXmX2qN2rd6mmhCRPUShhw3KtBJktvccoZexWtV4AvCjdh2hjeyMGWPLFsC2XVTi3RVhFGVaguj6pTUVtL",
  "key3": "2qbDSWDsF9JrF6Xcxtu9w2pjFCzh73zrmg94QMLbwxdr2YpW3nRdU8zSx3bm7PEqMrT6L7tjc2RU2eg8dy55C8Gx",
  "key4": "ou3QczDBewiB9hBYqGjeKH77vcENybvmQJ2Vm6VhthLGYiuM3Z8Ghxcf7hLThHpV5LVX8q5Zzn7vQBJqDXAKg1g",
  "key5": "4N7wwXd57LBXpVtspa2f94Avd6ueontgT6RUncz1rWZdkExAM5ZwhoMWjkFKJ7NHtE9n26QcX9NVMziPNhJqKXAb",
  "key6": "5qNDEVffJEUQ3hFmbMJrVSwQozWy2nVxKWcse93MygGoKNsYxuZBYwc6sY39kMPiTTczkKyJvkr2s8AiiBJwg3DM",
  "key7": "4utPLfiJAGRXCsXPCcsHizdyE5nvwCrttT3FB9zZNa4nphrtHUrCGGGDyZ1Cp15HHxFdJu4qzENoDfqgaLur5UUT",
  "key8": "2Zj6e2xHMP3CrdygRUihk3EgN124ysbufhvNfVdyXaVuD6gyi8qsEpZoLnn57gDGrnwcArnMJaj2mcXfKb8YHdRb",
  "key9": "2NqezvHF5S1Dee2shJ9PfguWnTxRZkhkaSd1AxEojE1Wi2x2nu2bm9RXaumjExCSgHG4hAZmAzdSSPBt42spkTYE",
  "key10": "4ueF2sUavkzkLk52VJeWporTTKXzimz6oziT2Ze6TpyLxadimaMw2Aax4DJ3Pohv7TrffUqQgAH2Q4tuW3yFbJ4V",
  "key11": "43urNsKRzieY1JauskD3W443uro8Uf4KRmuAbSmg8ThJWNEKhLwvv5R3sXXEfRLwLwGFahF5CiTikhcKT4gGR8cM",
  "key12": "5prj18HRKXcHDXmqfQz3FBxaJHPfgthu3cC4GfX5HrChcErzSpLiL77wcgjxJeRJFZ47KingjfFLU4KmUj1Sj8g7",
  "key13": "3omD7FLBWJiWp9AHcxgrUgjHdNbNQRHT1qgzWKbqsSzXScciugartz9Xmc6igguAERULbSJCFRysRoTWUY3pQ4qr",
  "key14": "4q2z59quyTrtCGXnSVdzLBjE1hwETvbE5H3z9xbwcvszDyscQHQq4bYvdHCaM8cV5G4XDZzuaVkWaHq4wQAs1cCW",
  "key15": "55PvUWGDVNBvzRughDH92XwyQjritvMzjRWfWtckaJa67Q6BLyd76N9E2zb4EwGXAdUgDVuTcBLepBgMnZ5Wxxh7",
  "key16": "5B43zrYCDkYWdDNg7bAUuAYh6DQH7GELW7sf4WNuSphKtxrtnNjkK7o9Cqr5YYiKKzHPVZYcC6KZe45QU3FHNXpa",
  "key17": "3TjH1BdudQvpDaMtd3y5zqH8rAPDSCvS2Quge1oVv39sWaWBzihpHHHmCpM4L9ggrmJtfo7m7S9EvvexZ1EeUann",
  "key18": "3TXfi7N12yXJ5S7RvWsFLJdHdXjV5WWFhaUgZCjkXkBZ7R7BACq4LTJmu2afeD59adXTfvhAHREBiGLbN6c8eic8",
  "key19": "31v34jfR8hMUm3jHUpkCf47zk2mms2N3Q8ztx11nP7zqF8DkD3NJTKmw1TzyTqmqw35FmVygdDgK7UVRAfn81Ljr",
  "key20": "2Rmbsfb72xS2FGFhY9nVwDuAYPiMUZxi13oPfLUnzCXsSeX5U2cy84ySXfb3Q8hvAffJU9HZrdpJpdAvrnhHpXyk",
  "key21": "3bjwRtJnuJf1vi7eoVHmowjQMShBfLnSiw1jcqPTA9G8325a8BS7CamjuDktwtXxFKmVDgrgEuQN9NFiZiC1SbGr",
  "key22": "4ciRDc4DG2C8n74mjD1TAqH989XQphkS7CXaZjTufWqPBBSGb7J6uZJnmoNa7wWUdQQ4fhsXRrZf8QmMKZeNnagN",
  "key23": "5JZecuTHUwykg6SLLYyaT4ZmYVTCUNsPrAk11tSBWVobL4pqGTNkaHLovpRwV3iy3TfCSLyHaZ9sGr4D1j6yyBGM",
  "key24": "5zpzkfFZJADUSsGvaJgH919oCQQiwZVXLjF5gfjmJT78kj6FQs3dF2mvDxpMgF4ipbSNPcjVrJMXfEKMqoqeP8m7",
  "key25": "2BptfQxeKAc6SzhAv6zheTEDhngNVVmbJ1aGCUqDanaZKfmbfXLExxmxW33xEWxQr2KwDdQme2BiS2VLCrbFSzoR",
  "key26": "caLAE8J8GqongSkQn1hM4cK5ySu5WMc2Em5y2VgP3Mc1e41LgqJqCRuC1btcyMvT4dVYoRymahX5Je1vjD95uKR",
  "key27": "4HEvv1GzwJgPtL3yr8ccJxxjLbbqC5te3YeASmXSPbG3iY84ijXazMv9wJzecZg7ANy153GhwfhpHx3ifnmK5qAo",
  "key28": "5u5xPn1G7SfCpQfjF5d8oT1ipSfSaZMAMzaCeFchyNxrtRHjvmT22g5QRnmvkrCQgrEu7vpZHRAZaLAyJyJ44vx",
  "key29": "5cELG6YQP6EHknmKGp7iN2km1KtAsjAEfvrTjWzL2yX8nfDgJzVwUYLGCxWij2AvVqnQnwCoGokgEkzUMjjnJiCB",
  "key30": "2AuqQvXgbjN5vejvUwoZoF2okHyeuJ9RAmPUu57BV7Pdk6abZi6aPoMSZcpFQttWXzFiVnRN4iooSmf9joogcynD",
  "key31": "39WxJuQCd1crPUPtpJqADMM9AhyuBfDDJR87A9TFhh8mPg3maQ1YWT6jzim77SyZz68qqkQWwGL3j928PTVJus4F",
  "key32": "3jeBpLmQEAMDf5K8qrFzZvct8GAGZdiGvpNgfhvNdGrcupMN7Gt6DSsCKLC3xHZt6zCEf9wPunRDQFNHA4bVi4SE",
  "key33": "RM2AUhqm6Yx3t6pkSMZKpSmqTg5DVrqKXFg7C7ujPGzPHUJPWnwUaa99Cju1ZbEygJiHdMewGQCgjasUWStSv8s",
  "key34": "4CnEv2gxgwdxx6xk8oRjriyM29rKMyL7VVN8E8HNJyE3Sb7FwH2LskGfKiQgbcmrFiXgYeKytvdumzJP2WQihjnz",
  "key35": "4PTduH6wiickHUtUb5NcesdYEvXepPUacJvMCtpUzE3whU5ZwBnSt4QKrNtomS8t18646ZrYBEzwud33biocHg8X",
  "key36": "2sbUn6yyJrjNDc2uQXV1r6WqoeuSTfJo9bNp8UekogrJCidxhjDTDvmFXDDV5cXrZp9v8P5tKa3TJisQbN7fq5Zb",
  "key37": "4gMwcxvRQk2jjyTUKTKEguYKszzSxgxCH6qTiaLcpD9Co1fqVi29jBC4YE5kdseT8NkdyTbeGqWWWunQ7DybXwQK",
  "key38": "4N6bUsxm1CdYWzeB9eo9qDXdhE4pBfZFfumi5Bw9woaokFj4LPfeSbVFgikLDhScHUAVwredLpcxmmsMVF9LDSYC",
  "key39": "2N32TsZ7NdQ4dBBtxZHdjUqPVweu9TsWKfGx1uYHxTZadCHfEYELA1Le3yBQ5DYdRQNQKgXAUos6mwP5eGRmRchH",
  "key40": "669YpsAw9HuN6N2gBKbos6BTKT399faJ1WWYS8mG9QVAokAvjSRhusxejTVuR2F53J3daAevockR9syvUe2L2hmb",
  "key41": "4xbayBFqmSfbeMjcFRi9gehZfJhXArU8HaL3j4R9F49Uu7vHHQbQCgWpaL3ZeAqQ5xVKWLFPZojJVGLzdPq9tKze",
  "key42": "28Zu4SQMMzaRRR8NMRaGtYLz97wrK9PTwTtXuYrbyXLKJ6M9rKTrdn8i6gPgyqrUhECLTR8UupgzvjoC1JEzVZ9R",
  "key43": "2QM3BAp5d8WjcwnEx4s12cQhhd2Z9YU33LiMZGAjEWvea7Jw1rbe6UvCaogjrPiXzU9C1r9kGjxm8xsHbfhsGRkp",
  "key44": "2biekMgHXrVPkgLdd4vXo7RoG5GKMtzr5pb5Th7YhoEoofiNxPUDgXogcDMBaZpCqtgGLqE4sKGZQmi7pTrwS6fN",
  "key45": "4RUPZHDZTtQ1qLLhAuUmCu8DWy9fnvfuU6FAj928RojA5DrzsKAdXQUiX5Q6EKZ4DnLYzAkaeHUnB9qnHdf7Kgcr",
  "key46": "R5sC8MFDtnFhSXTzK1yguCLgCjk8dJ4apgBmwHRipY4M9uRPJ8wYczTWirXGnQroZBuWpdSyEsW4vmsm2E1n3SM",
  "key47": "kVU9LnAjLxZy41c1dGmYtNuhn76Xyz5UtVxt2wtreWnVB1tsiGXrnMeYaSoAmrp6TXFKoF1vCndDycqZC1tck8u",
  "key48": "4GKZ1HPduKhzNsEugWCPi2XgHNsdaviuLoR1Tcgy31KqKVNKuFNXhuicn5f69Vskha5cqEaCKhq3znS27fTEXmXi"
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
