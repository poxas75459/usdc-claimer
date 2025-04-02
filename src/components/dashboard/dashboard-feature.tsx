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
    "SwEQXYF1614nY6VL49oth5NTxQXTCMtDfLAQ1F3VsFGueCUyGdMTbWNQaZ24zFtJjAiQrNEWrS9cko8PgzehpAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tchcUZGyFo6Rz5qpSAmSQZPEwmy4TYLzhQXvCyFBCdKrr2vUJNDNJWMy6FWkFCDkNWpWQ8Ht725F1ZRfVP1gDG",
  "key1": "5uVXhmjrKzk7VCEYkKpvjwrAteMYjFXb3n1eQfmiN3JzR7NoJbwMuLhkX2soPg25a3XAiuHrLsAsthk6cMmVLYNR",
  "key2": "3FAfbVDTqCM5AjVk2QR6paYxQA3m4hxx7ug7m8Z7wC18887CjK13UDdMxu6PzabAZtm7Yf37QLwYcQDNFmQd93kk",
  "key3": "4QekASU8T3MMr3TpX6mVb65H2EuTh6oHadRdRQiWy2SbwM5rkCZEqwQcfi529eRvZCrHmP3VtxbsVfKhvZYNQ8pv",
  "key4": "2in1oF7KgJ1ZkoYAZfyBq6xkJUmtV1wBD3j9cEpjwyXGW4JHM9L8J5JnPvDp8kFFF1uB8DzqhWSJKWFwmJrhKWnS",
  "key5": "38v1zNQXqyi5fh9157buA6enohk4Qg56rwveEtF6rNz2jV2ZGHtWtWamxGmFtByq5k1AcimzhcpeeubF4WfqRgSq",
  "key6": "3bmF2HU1RHrRxaxX3HxfvRP8suSvzEzUzWRd3JbcmxV4qX5dD6rt7ZVoaeeBmNHAG4CtnbfdbkueAMhGtadWHAdM",
  "key7": "2oQVnzqvytMJQYK6Xw9d8CHA9ykDDrQDVuLtimsCBnE69eET3CRmd1XbmV5qHobTTbJ8mzQLFd8ofYqdnUyq4z9d",
  "key8": "5EmUfsSDSLCBcbrKEVyeUvVAfK3J1auD3E4rGNLQqtc9K7jUQToMKbLrgFuhhDKComLuHjPt4HiKU9uhBgHL1too",
  "key9": "2jAyUnVsw8Y1rJvKpAAYarM2L2paJcku3hMYs24GPJZygKgBvKZv1nvhPe28hnwosLnWopoWde94PRZK5dAfv82E",
  "key10": "5VY8kpUE1z1tZELpJXpPJDXrwhcjt5K6Ae6XgqbcRftwixmV2662fHCPSXHbccm6wHJxJ15tTigUBEANwhPA65fG",
  "key11": "5ytQkr82z28uoZ65LqLSrtY4nC59vPcWSWxm3dtUMqPN3ibraENvLGYcrThjNV8XpkEgWY6qFFLgp6vEzwyvd1ZT",
  "key12": "5vjxMks3w1jEy1sRsrrZRKBDBM2cCwB1dZNWbKomBm8P3erwo3HMXMjru1C1aaPrfTBq2XHvub6edUCBYazxzUL6",
  "key13": "3R3qMvo2fYvQLwSBNtgZX81Xss18qbTxpniHvccavrUMRp6BYFc2wXJ4zQfuFaR3hdHJZW6scgyjZRSSW71D5u6v",
  "key14": "454UBh2pZRmupYN8mkHvTSyrHxJwKHwrAxZsPtS7u1iWHEaA7JhFbddDysUdFjxB3eUaDhbjKDwcdcnK7YZ4Q3cQ",
  "key15": "382HSBM9ufP8F1eH5zhgEBaiMWPKPEvaDuN1Bnr6zyMg8CJQ4c2WLqEc7z2dXagpUkmiAhA4scJECkEeWU7DzyDS",
  "key16": "k19SCnaPvg3hzQc2eTt3VbgGb4RHyC8TgV2Wxioz8tmXLyJfFXq3b9MyDcXAbLGTWfXdRFdmY8AnxATsjW6VnLi",
  "key17": "ZgjknR2PPXpFWmVpAzf6UptoTnQXvD2BCUK7ujL698mGPsvngjJvZCV63443oqcCm2LsLPg2bdoAPjngih7bHZS",
  "key18": "3QRbbMb8Af2yAbYhrHeawx19bUuVtYHwaLaX68Uc6fMH644cxtVssXEKD4s7X5gR4zMGGrPrRiEbg3xxyms9NCBR",
  "key19": "63WqMyN9LyoYnYEkT3jBScnKwfhGHVtkCqg7Hpk5xGytpba5TvxZyAdj4KUztoXevi3kh7KPmamLRp8PY1x6915d",
  "key20": "3afTwcRxwdZ2DG7iz1uhcF2CmVgTuGh7vTVuRVXWB4rPmuCo3ZM6Wm1k39EjmrdkH2b27LyVsJyJXrAb7ueozzc6",
  "key21": "2KYU9oojvgXkebCjJfmyaSAKnaYeeMB6wdsZXqcJ6nAGwUivLAD3SgxqnnpP3XbXZNotWoRHMCq4vzL6wTZoKoBE",
  "key22": "325XXi9aBBZFBAkZXRkU2w88iyboDeZnBWUAfDvoZupGH68v3GvS7f5M25oUeoNLNL9fWH34rTUZn2Pnwdq2DpmP",
  "key23": "4ZArMqh1UMMyb7dYKG2DcAW2jJo3D9GeKx3TeatDw7ndxDkSngEft5pGg5yCeK3MD2CVoTorXKv9pN3GshnmXVEz",
  "key24": "39w2obVdGoiuF28AmMeTwzASm1JWp54tCpyxwJfaU1gRvJcvjvNkj7jMB4WJYJzTYHbFQNEckFFrFydv6oEGyYyu",
  "key25": "21QZAQNGNoZkkgmg2bBW6ovfv7dKKA9GdobSsFcALHqaKam3bZNELqHGfPmxcgXR5GtpztUriFroTpv7487HQwsg",
  "key26": "4wuq54wLNCu3vkog1XD76ZES2js1Uy33PHuzECHSggXAt7CVVFeVnei91gvcfHiVVqN9daRJd4gqZEzD9pY7UaMW",
  "key27": "4sYxjiHRvum9sefen8sZ92NJcPjfo3e6mUSyLuVx51PkiGHGLZRVchwuk4hw3HMsJASVCCZFhmbLDvBRQN8xjxFs",
  "key28": "ZjEk69agzTn6w29gHEWtdXbUDKLqhJbr6z1SjWq2NwwhCJWB1z9zQFizk8ex3G7pFL4d2uMpUp9QcH3nQnkUjhg",
  "key29": "cwCKnyLWioRSb1YwHtAsJzk5gFur3PcLqAspxWp514w8XWeJPSaa7vttMQZepwUaj7FF3Y887qhScjqC8cswz6z",
  "key30": "2pevHtHWoPFpyBx35dXzBdWrtxpgztAGrsXk8aKN2qKhoNTtH2hY6on5PTqEgPyqiHaBKj1S6LfUJs3EAJJMQCgR",
  "key31": "36PfZceyHWTfSABSdqeUSA154YFJKAMKQUqhkrN5QiqCw1zzZGVik8mL1MRx5FqCwagJMBKwLanxaQGxR1gFu1ee",
  "key32": "5FJ1ervCAREQ5e8Vm79jpWq1JwXhqhP9v1WZ333QG8ZoC7gQTu1A6rHNLFsotSaUe2QGUN8owJvvznq7JuNfneYr",
  "key33": "pLxEvp7gdUfgJYrCHy1JwJU1rHxHy2qVF7MyRkMsuiJgqMPehJCLu7ofckj2AWZxXiGRKpWvtDBQgA9bWYs7DTx",
  "key34": "41V2q3S8RiHazJdHGM6tj21qvHPuSR3ZU3sjtLwfHU6JawLvTu4XVZ5LfeaiPLVSBnkrtVZD1iWstS76rQkp9Wsy",
  "key35": "1QDp215kUF69akGbDZqVrtNUXGMmVfSWwc2PKjihUo4unWu96ouA6vQx5nPsj8XcjxiWT24VPxA8rq7Bb2zzDtC",
  "key36": "3VNVA5N8EVNYS54yMC3RGzNC5CxJ75HwdK2LNmo7fGKobwXcMiAXSKFu6SsavA4VpWP4DyWy68ThVmQjvMCNLXRv",
  "key37": "2eQEdEV1gNPtu85LL8713ida3CsgDuvcKUueznRB1mtehQmLofE352XxtkBYQNG5AgRcxfcQb3kEvqsQZ2tizTKu",
  "key38": "5agzdAix6fYkR3rpFHwJKRm1W87MTbBbjZYeY5ZLF1WD5ufCqoQksZbL5kQwMoCxf5NPxfDr7UktPLrFaZQT78ad",
  "key39": "5cFV2YcERfpzULwuZcdqJvoV1Dg2Enxp9cRJ82UQatTsvLsF4NbHoXHEDKBmnTfjLLCG5HkgjuCH8yC8BYJw9Pzr",
  "key40": "5CFGwmSmFpwneNrPH6EF1oZPnzn1CCFYy3dEuadHeUuMwwjvZCoewiyDcthW1x4c9TDWZ9nGJGvyYs9VWB92nHSh",
  "key41": "5j9GgGS3dBhVuizi6u3F3NyV6oCRXNPfCw1zVEyb7WbttzDgMwmjeshZRQNj4zg2i7Ji7WEci7bFzPfzh4nApD4P",
  "key42": "128LQiPFL5JZzL7rkUJcsAKtUUR6JThRTrt5VRgruj74zjSasnShv95r3YQRa2FpkSB8wPz5gUQw6GnEjHJqWAxR"
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
