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
    "26VCSH7f9PrfZ1ZCYhsFK897NCqqkJGo9sZ6VWC8bs1cyYG7DKHC5cCry8hnGvSPf8MS3r8d4MJLoq3Mojibvurt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvndgxouzEoNDD43f9nZS6FNHg1KhzRDyNF4s9V1Zom3SkzUWhihCzLaEt3hrHmv1MDQADsuMJNdS1FYthDrkZz",
  "key1": "45o4X7Xu9HNVkzb6BhByhPSMQA1uS8RbcuAUMKvboaWzf1RGpyszFtfWs6JTicUpKe3QsoTdDwbvENAMkwiedhHk",
  "key2": "WRjBTp5TKyfvvAxeTZ94hEBqaHNU4y46B7Cbu7JJe5mh2RoNteDEmXMbPTRcy6dAff95fe5BCjKFk9ySWth5MNd",
  "key3": "4w4o8UtTtJoNj6nEqBwy7U5zVjFmaW2tMj6tAizMKnVsgQXsgWJRfHoFgsir9mtusYsimoHuNsP7oGvrUm295p1Z",
  "key4": "6SB2KNytzz27mQKU5AbNVNPRji59qKJ7GJ6Kj3DDfVfJHYbf7ckGDBs7eZpQDocFFpchgFxiGk3oZU4cAZ7ekxk",
  "key5": "4c7Bi7qKBqNm6zW3tiWGc621rMa9yYkbqb3LhWwWUuXcyiuzNDg42uhL23xhFdSjNwk1hnESNr7FqrVs6m1n71go",
  "key6": "65PSSJja4j8LCECMyvdno5YTTtQ5HxyKRD3bDQcnFyT8Cn9Nc2t3depxsFjsuA8MLZk19c5uQoFkJfopz2UyeMga",
  "key7": "4EAXpbBH6CcCDSaQbvtpj14akWJQnhvw62JSSN9gEUPgqdqvPEKA4vUCzdoNRFwDMCq1M2529TNspeMKa7pkyyx5",
  "key8": "662XLeGCQsZSWbL6jEn9zR3bXCtC2bivxVc5RhgXzVxUJp7X6Aeo4SMmGmjnDRaqdETQGRxkymHW7B9ywW6PaAPW",
  "key9": "2EF58uDkrRxqYsmz92sgU2tA76tQibinT6gDJVTjXxGyV2AgyzzviJFLPGxw1ehrdfXtdLmtsbRoTJL5oTYNE7KH",
  "key10": "4i7zgE1PuZc9npTGzuLaHA7wzYQqViXuZdchYspSoUEYSZxeqFRapqHZGJByqVyDdkYXNfQDQ2Ejfk5sGeiF618c",
  "key11": "GeU7EAa9g1HYuahBqZxd2aMME9bzSXJW9FiyBxDaoF3pauJbC5CALQVskeACZLqetG2n1GbzEYweBsY9o8cngUr",
  "key12": "3ikw6XjoepdGCPijPao6DFfLLvovbnwLwoTd2sUdexXaNbrkwCkPPypRXbDzjvxH5jjZn6wp4iqDcDWaQZPXtNkz",
  "key13": "uDocMuVXj84DRzfdvvjr69cFXJAKi3GLjAg1ar9Rq2xQeTJjxnwmxjeKfkHtHQrvKgbQHzmMinge4Pwqp1rYGXU",
  "key14": "251V3Dko8z9nVDJPV1oi9FYMj3RPbhiidb8rGyNQdCVy5MhZpCFiKPe4EH9pNriEp3jxSbp95obY1RmTftsxhVwz",
  "key15": "3CZJ7oJDVTJEQgb2DiJXUSuDZ1aoBgek4fvURqDhkcmePwESejELvZeSdMC7uSGP6kidc6npDHHorjZ4s6t7ym4d",
  "key16": "3KLR5Y8KhRLpedo43yd3C9DaAfxuDgL39nJ2heykaGoznnwLLR2ARxym4NZi2hDgHvSc8ooMrdmL1j782jvNbSPx",
  "key17": "224hGKKPA6proqu6Z1Yt7HomVXsUBcB66MsTzyPQB635uqdHMrWTAqEemqhSGBbNyGgoBgnbnbPVLicWRMPQWEXf",
  "key18": "zbPjYZeBSXZb1a6hMtwuiG9rDDpA5GceS8fH19syKrbumaVhVKtrJ3nueVfegpNFmXe3Yheq8UQNKPZZmWrGEpw",
  "key19": "UzRjeRQhbdMAHoVm6pr45zQcsj1nSV9qPZUCQTncRmVekMQ1Ue9p5KakQL9onnTUnwKHQJv9sYgdiuqRAucY8oL",
  "key20": "2vzVJTpYvBcAfNHUwiDp4BgF5jvXn327b99cGsF17wqiGFK5y7kbFKXNGPttvyzaF8hFZC2AuWTnf7r4dU969m9i",
  "key21": "VX7L7DxnaaGiVPfjWxGX4pocgbo6i5B1R9iRSDjenqua98WmU4HXhaZyAwT5tVmUVKv9LQL9mD8gZ95QN35zQtv",
  "key22": "zpHz1efLSEwS84mXRMiLbNz88b3BsW8XDXX8EiU976LKzNECLjkrva91EtfW2kgqP2ubUXZkuJ2vNspUPMvhNDt",
  "key23": "3Xw9xZzWsjiVZ7hjsaVUn5iKEmbfbMNGahN1Sv1eBHbcmMM75jD78i3Wf9XydQgL6QxdLyPiLuPFCaKrrvGFVTat",
  "key24": "47ks6fJajxJcCEpnxrM1V3dRVchjQ9wvQMYyNTuurhJ25b5YeP85W7g4W9YRdEjm7ACELcaeozaUyfZAb8ARR8Pd",
  "key25": "2CBND4BtCrrv2rJZzE9v8b47vEvhToQqsDQUZq9iK9NKjUKzsSQqiMK3y56Es6xeSKxCtDdwq4xguKJ2fo4rSN4q",
  "key26": "3SxUSU6iuNJcrwwUYkMaZFpEg7wGsyJtouNfYhZKDGp2oaDUKubENSYk9D4GpttRU7qpNCMf2vYiGNqdiybfZTZ",
  "key27": "35JVKZhduhi2v3eLSF5quFi926qr4prfqeZRk4t2JfFiJTeArM55U2DpZGveoYvw6gALSM9vJmYbWqfVw5cJuz6M",
  "key28": "2pysFjTj9cB4QL43uouBAa1CWAmVxtFZjS3cFioSzV1iLDRhkM3DwExJSme6yvJ9v5gciuGrT5ujKabwhMqymYu4",
  "key29": "q5SzEUFV9nMDThqaBPJEtzNa1YYk8KPBoN34T85qLV7w5xU4HMKvq1s8oTo3Aawtc4krRGPbcz9jSSe3k5zwjYD",
  "key30": "YxsEpvD1pkG8qDCbqPshfDZK8hqjVGG8H2zwskW8A1r165AbUFETtrJgVRc33NuwcA8Wi9pS4Wg6LprwT9W9fht",
  "key31": "2wtBGTjos7iWS8M42RC1FTPW6jAtbWuR7FEAguV6rKMmDQCM2HfiLtnPZ9NfHtgVmeG7mv1weCr3SWjSfKvHVhqQ",
  "key32": "4dgNm8eR2zuQmMnkCAokPHGHUqXYBPxasAw39zkA4VA8fuszsME5k4eapgfSMCQSnJGo6wk9rNU8SoUWwM66zmEp",
  "key33": "26CMQKK655crbT1DNgRTLmTwzHbtAssWMRNauf5U3fKSGTzPhVna23CoQ2n3TmrkqtqdeSsb4a3yrjRZLfJoRhCK",
  "key34": "4XKAY9GcBXRoJYCDQXKy4NvohVkvYwCnvtNwJKxHy4tXUWdrDDQERhUUA4UwT64n6Fh8YjxfYBBgcc4Pu1LAXGe1",
  "key35": "4X3wgj3aNduWgz7MQwcY5pQR7zNMT913ZbReTajy9BkRxsJmVm4p8sLecAmSoJbRvjtve2kXmDH6dBxMKkMsdzff",
  "key36": "2C3miQHh4a7WaypaJTNoZD3jk4TPEMto4VGtPXJuagJnoFXtAqBsVhoicB6K9x52ppdjrdtLzUyPpkCo5nbehRZM",
  "key37": "4FKmRrrDgnCC1t5CKogD1Jpj6Nm8KQmaqTFweA56fg3Npc4NE18qM38TVMURqXDSxRa4MMe8xyWN3LB1Bs5DPKkn",
  "key38": "4SrZbsCK265YDnB3FREh6t1MQRu9Bfx42dipReF7KfyRHQno97CG4R9bDqsfGfEDLwLBTWAAdqYVdHXfBUCuMXJj"
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
