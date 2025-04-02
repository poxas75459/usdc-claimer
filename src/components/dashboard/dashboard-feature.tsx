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
    "t2oMxuPfz4Ev5M6o6yArA3baUnKAci2PjjVHYDxP184xdHa1aPJvVXyYf9jpzXok9yqfPi62AJssFx54uYRwxDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571cp6Xr4prGnmCGHkxbckYXnqEhzpqzemQQe5EyZWFnmjGWno4qV71GhTpt2zgQvWiig4anS1jK2RXj6UmLNnFv",
  "key1": "4YqRnmJXpSxAr1wvoAnDkkXtQbFLU7jvYbwihsVSsu6ySoyoU8ARmLegRKBRogoWicyKo9v8iXXWso4zEss2sUFD",
  "key2": "8DYDg9ukgmDJKNQbns7GuwcQ9H5LPGszLVJBGf2zfx4ZYt65mzzwDSdNrdDAeMJe2gPDZFYkPCGRCgJAVFm3hQY",
  "key3": "5uoe3C3FhsBHVqscrB9VsYvVnXXYPutsjj9K9mWgvqfX8fZRqYBGSQdy21eW7FAgRgRZAvEaDfctoAMu9VzFER3F",
  "key4": "49TvxFR5v71m2vNSx26jystvuWgFzZfbvBoLNqX3wsVrhpHys4pPHkxKc7h1BbF6ynoY9HoNQuxaM23S6zdXCjjP",
  "key5": "3NLDSb8ESG4QDhCYnvGJpH2dkn1uwPcfQyhzM89QVuZy4r6pqHqi7r9q8sttjx8SvLjKvbwZz9hijxxbHFRTqh2g",
  "key6": "5JezcPovLb6yAUNnLdAjtokh3i3riTQ6gFRDXXeuE2HGB5UzHceUnjyjYzTngz2Wa8aQKvHJyWwd45aKKmFowuoC",
  "key7": "3WwweK4Fj5o7uC7RTVXD7jLHYU3MLKSTKG9V9gGySEqT7ctYvn6vSQ1Eb9qiJz47TAZX5iYqBDmB7TiTvFTEj32B",
  "key8": "49MvmsE33GRdfHqE5vYW3LkHjrHqygBG6wFecGMjNzQVRCecn1ukDhDvMxHY4b4DAyRTYWKdSxsbBq5nSPk6VUbX",
  "key9": "x1UGqYrfwWYg63b4cjiJ5pGCMChQUxc8xvWibhLRM2pET7nQbS47UChtcJXML1TRUosPoCtr35sn1Xdnwjw5R8B",
  "key10": "oagS6y3yyTWSFm3FcS81Nxsdxw5nFnVAqW2c41CFk5sRWNjHX2VfXDEwq2S7QxMjf9xaJZacwR5EYAwdnCmCMXK",
  "key11": "5QjyiKVzNLCUq8EC3vSxgBJjrE34vUNELVnnBbtdc9ekrZci3phV2T3rDUKUt3gawKPeRgR1Sd5gowDgf6QjE5r6",
  "key12": "4uJTKgpfGAajpVospZzxuRFaUVY7fHa6iMqcyngs2rTugjRtawXfiZPqBLntfhFS95Tp2L1WPsd3wMkHFe7jRHcz",
  "key13": "3NxdSWQLPFME9yYm2H666vdgbFAcofNdsBg3PduxVfvtAgXgdVZkwGHeqCZQWJCxwPimtVFuwhXNBBTWqSQNNHrz",
  "key14": "43zhHW74MS1eyCNFWBQQaUGeZPptqEFfjFwzgZKUMNCatpzNVN1EAmCF3vwZjrterv5Uh3gvFxBwXjhEteGa6M5j",
  "key15": "2GihKiQyK2J4QbWphX2yd31vdG3FHDiaS7r2sjUtgMyEAcs54GF8JVezxjbuDjpjkfaFAGNe4eGzts3y4Tq6pRL2",
  "key16": "2qFuF8Cs6RZ93uqbykVM2f3zxSFcFBjf2Pmtpw2j9nvomKw63TAZrVwc23tGz5aXN4nCfYwu6jzeKVpzRH5SBqTG",
  "key17": "3sbTDnc7TGq17W5matwMguxyUecz8EEnV677cqVrsxtR8TwGZAnHqxyXaSRPqCNJf91Myaq9h6eTD2P4tCDL6znf",
  "key18": "55dse8P7n3gzvfqfczPb4AeorP81SboikDM2dasBWRSMJgusvhwHFVYXntWFXZ3ptWAkn8Vn6QQa8ZyraGzKUXP7",
  "key19": "3gcSsHuHqsSdU5ynd54ekzizkHVxVEmvXsjtxAFrv6Gqd8czUpbBCPCRawmYUs6yCm4eiB2qZ7mZH2HpqV5CSTcW",
  "key20": "y32FSaSpLJGA4nrjKpXurW2NqsSY8X1viLtUMLxLALqYzAEuTQRKB5AU4626KGDkrTfTUA7AFFioVZRJ3CoR9gV",
  "key21": "2bjUkMwDThyw2131NhYdpmVoWZEHMPYavWtoVTwPQWvHJjUNhN2wXRZqwVeTw8zJH8yGr8shV2QexZi6q3ERmmU5",
  "key22": "2eEWshWcw2PCpFRhoDS79pqDhYGkbUZdFZbR2mvV28u1cResZKZ1fgWpwPg8kT34MHYk5YjLoVmP9j6Ta2qLQJeW",
  "key23": "3mwUVwMWNpCGXmAcL33Rot4W8prBvBH3PxuUtFY38YHjxVPViQiLE6yTQ7GMkU5bboQ5RaA6ZAqxyF1hkB6PWVAC",
  "key24": "5mmiR2nuuJKRh1cP4JbD42VB2d79LVa8Sifss1G4naE89PgPS9p476CESJDcsPuoRw2YQnBJnNjDV9Lh1JRXCX4t",
  "key25": "5DJZDvq6FwsD2VfCmtnkDTwZJpHJeuEenimJ98zuaKoWnqPnyH2UqA8j3GW9kpmNkgZo4cHFXY52oWUM6LuYgqTB",
  "key26": "4jLsUdMhM6DbxWXJ9RWp7jFDKsT7NaM9GqUTkrUZaSzYevLbhDbNzKErTMytbTeNB7oQ8gFB5xvTRBmNGFsTm46c",
  "key27": "2W7XuaDgUBReRmM4V5J86Jv1RJHi14ur1HnBiExTn9G1G3FwgAH52nmYWbephdbfCGFcMbXEB1f7wBEGRY9npAxV",
  "key28": "31jK2oyXCXxWCSAVippB2JzJhbUyWD1n95xhwgxEKFZUzxkxUt3aQS5KzJ93DLto3o5axvXFHfahoQ9ygV4s1W1F",
  "key29": "51jA7Db12nfQJnxKKWeqU6qUSXisqiTc9cRvZQMkaRXo4QJE6r8ce5nDZ9Jpx535R2fLgh1z4D5itivRd2RhDxqb",
  "key30": "tvUoHwW6H4yq6a3vgpXRC1rxkjVXuc85HiDL81wM72ysLHAPNwgvMeyBDuJcrsjpkLFrX1E1mfV75v18vEPf9Lb",
  "key31": "bn3MctBbVUkwMfnokmn6Cq9ZWJZ6p6HtoVzeFwaGrMeyzsdukAgUM8ZaV1Nde9jC6RqtJ418nLF8MT5dygLGZJi",
  "key32": "549Gdz9ErBbJsmeQpghCD4dBPCtsQee1RV8fhxAqpFs8piWPiDANDcPADCeLQ3yctpmdLw9KHYWP8zcSmsKNCdEG",
  "key33": "C2moQhRUKwf9pN8GQ6s74EXediEmZV9rYvVaqPSyPtn3WHC2e8KZLS6WTFUoAyNbvxDeVqDwtx7etrLetUCpanS",
  "key34": "3UFXvH9i8bbNpAwhv1cn25NDb7m8jJxPjTPjHSD3P8Q5xGmPECe8aFRYtywAfQBAeRdUJoWf9UqjHdqnCLBRpvFe",
  "key35": "4hLkSnbPV3ds3AjNqM1u4pGTpBWed6yK6zJeKPewT9JDtcrXvBQqpeSuHGgX6xTAUCB5g3YKyrai8xRpejsYD8W6",
  "key36": "qaXtzZSHSoStPdQYcUmoRNxJFNdN9MY4acHoGUF8G4B7SG4kdhMKT2DejtPituaQWKrHTPQynNaaRBjs1b7VpnQ",
  "key37": "4PXBrVBWQwSYwhryzaKpZAENhNeU5U9PFuz6NvCJ5LWCAGvDi8CTNHThGTNA7WDwiCe2Xn9x37VuPvykcYZJyqf6",
  "key38": "5XKvCoptELY4BEVVCeLf8nRP6zb5xUWHSfXhg5rBJjHyT8VbqCLa4yH7Na7UsQkWLk755uP4gPdDYN88NUerNLuL",
  "key39": "64cG9v5sUSP7dxbzeem2HSxte5b4HdD3BWJuN5ZywtisinCzoXWLCxrztukwgu2YjPzXVLJAkvdMUudKkM8NbbSZ",
  "key40": "3KsmCBakfLkpxBthVMeKMNAafBcDRKJrGTmB1hajozYaGZphJWJUEjYiNpuTTCLqRtm8wDpZmmTHEbFKWn1Tsvbr",
  "key41": "4xYwo32PYjacdjvwZfa5EW24VVxNVCvVhHXhTYbzN8wnN6piUrxYXYRv63QHt1U6gEQFpLtonNtW5T831hM7BPo",
  "key42": "4LAUGxoD9fL52HTWvBM6moDW5tp9ZZTvVNJWyUcXB5p4zT2aCnG76GTve3RPjbr31TRA4dFL3hKJFwu3uECxpPGN",
  "key43": "2ZqEGebzcFTznPC1AfKuzitJGYfrX97aQaqDW6mRmTJL8VfG1yoZ2chdHgKizZc7UkWn3L4qoPDmnHy1HCBUMLEk",
  "key44": "3V8YzGWeGiBFPdmKkD3U11grawXtA1P4AWn3rK9pcHTduPXsEM4147NKGnhKt36aUwfZWNd59xxnvHjJRPzNn6gm",
  "key45": "4JtE7aNe9VTXSaiRNSCHp1SHg5pncdutg37g2s7fRxy8mhphXKHVTCrKksE7tud95xiBJp7V9UiXETrw2BAYZryP",
  "key46": "3udJVgX1MC7wvmWCWgjfbrWRUHJMgiTFrr77As57GN3svHzrAbAx3LAyVdvSuBvHzuB2L9JctidWhZM6CMyPAks7",
  "key47": "2YMcZKFhnyF2h4BLkV1KYwHH29Yk5BK57ZPSYxVoXNiT1D7Uw1ToTxY54UtwhXvYdmpzxJEoK4MNeQqNxKKkh57L"
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
