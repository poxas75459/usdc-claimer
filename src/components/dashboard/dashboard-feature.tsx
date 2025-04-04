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
    "65DcNEKiWpUa6ZEN5w7RnEqjF37dDx7wbscNPrvBcmtQzc9ZdMM41dUuxG45fk8NHvyrrAZDBs9qrUptJ5scgEH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQRHBBRDeTjyZAXkAwtohrJU3suR4iBedbScwUQiMChpwf1aT5yVzXHG5ywMKuvgKEKoYuPp6QJiUxwxobLVwfz",
  "key1": "4b6ESyurfNPLnfAPzJn5p6oxExcfLLFTgLLnGdaXknkCiXGDvcXNtMvRxow3HS7cEtnaZYLCZ1pae48hNN5p2BqN",
  "key2": "3VFkXPvd2vcPJ1xU573oRVBvqpwD9bTJWCgj4wQ8uGqsfBm6SUJKVVeGna8cPxqUAioDfdfRqeKKux5kwjnL8JnM",
  "key3": "3BZZSabT1iXavG7PT7XCPDhJJAMsvYwqJ6QukaxLF2zAuA9CPVqEsRCv6qxw18oYap5ZvAU8GHcjdC5f3VadmqSr",
  "key4": "3N61Xm2nqqQ5kYjdSCC3RJxcsV1DKJZMJ9w6Sw7EPKToYrF8CoUkbuKGh9KxgNPNhPDZ5F8nUd7YgnpdKuiAeW2p",
  "key5": "56X9KCX7tLpffbXg1U38Ge1aG94QB7o8ku9F1AmxeYnCsF1zxxH4DA6W4UUgLUHhfyWeFWiDaQRX2waTLEmUo7z6",
  "key6": "4RfDeqCdh2jz8YH5ETU2Z4s6TAhSeEGuKySnjAdqxm1QZEjAJHnGKS4QLuqqdDviwwcSf6vJ29U8hVF5mRXfFw1S",
  "key7": "46WdtHBjm2o8Uk9FTrtHCh7oLezhd6ZkAid3Q2VLPNr7xEXaiWHDXDVVrtdkPTd5WySR9hFEmqT3DTfMRdwx1evo",
  "key8": "5mk3QdcWtzSTB8GVcsA78w7HHVxU6VA1N6VoammR9fAQv5tcudnbXoAcz7n6YnoikxQKiMECoGv9djvwE4xZdiFg",
  "key9": "4usKseVAbdQ8dFd96RLH495amg3T56YVogZFvzjspNYHq85VDNkZik4KTFz3r2Z63Aa8NLWxXpyYrbE5v4ZJBNmg",
  "key10": "2SwpGd79gkpbku8YeE7DNyUMk5oXTNSVFzaXkGWZL3ZNeeT2SDDLerNU3ewB9p5LeNsVKoN15P1NeEeZ9oSRg8Dp",
  "key11": "4QjNPAWbH1j5BxdxperZt2HEW7KM1vjyKgdJkV6VY8BTnbQFAwQMb7VpG6LmbTFVo4irEp2QMENtP3GgvNNKS6My",
  "key12": "RrDLUBn9NrwCNL1o7UnbvBxk8UpmAhwSiAedGzwTwjJZAnRZpXbHKvxvxc4fLiGPGgFNz42uQtNJPEZoSyc4Ms8",
  "key13": "2t4qngixdomr3iRsM7JEwgZPcFF838Gw6WYwh6WBqYUnTzJ9UFb5HizrcFLWA3pDKigQD1x4mqqGA2RLaJ3NHKez",
  "key14": "5StNy8PYd8zhssSGEN1D2eeVge4BizVTwZQxtK4Q6tVhaFiXKEpivf1WbwSjVKQ3SKr7G4DUAC6fnhE7RXnqUmxS",
  "key15": "5uCpvBQvgcNqTbXC9khVdRdKqBwMnp4t8kkZFSgBPjP8ErR1gE8WDGLf5jVeBT1TgKURu1zjh9sbXCwpsWs6AP3j",
  "key16": "yg3E8MgWsxATJBgNctMXsvsk5tjzdtFUaG82ZG2QpD4dFU17wWgSfS1kAaqR7Npbiun4GVchVtz5ecjewQRVQ4E",
  "key17": "51mzMmBeyVUbHTRj9LkiuxfZV8Ki8f3enFA4RSH816UCNzVEV9YCcnzK2g983oyfiunSNQwXreKZJQGseDxrZqWm",
  "key18": "3svjbXR3tmuhhZmTS9X4FW1Ai8hRS1KKh2fcWdog2WFrFjDU5ZDjgZs3ejpakq2RHBgZWb8NZCdbrpCzqDKiZ6Yt",
  "key19": "3QHvRcDrg9aqJUQ4AwHjK4Y6Mw5qFu17S6qXngPCjMWTR7heiFYw4gRyBUhxN5DRdkwiSwwsNmjiiz8GAkKwQXzX",
  "key20": "6aPnwTZoZtZKKm6C9fD8Gdx6YY1V4QgChFeVJR2o6EGdzEyweBFf76uPt6yjmJN2vgP8mpVQrd4AkTT12vQLxSG",
  "key21": "2yUFu3g5CC2zMxfmTMp4Gcors99STaDHQ4fbw5f9EZ3EuAwSCcagnVn48P8nrKVxmEw77APP9AYdq6m6ojWjQUqi",
  "key22": "5Y9sRTqiJdCkknb7je7U6aCARvBhrPaq19SgXh9XAsPFZnGWAGMa1qyWa4T5Ywsypa69Su8LpTBDDqNhsRwAsYoV",
  "key23": "3mKbC5HFGYyCden6ohVtySrUaGEyvLiXpxP9bMU5wJdVsiEDwe6NkKXnd3neQBLqJUxTN2xnj82PBFqWcosxT6To",
  "key24": "2msreiJeF92FennfsupdYnKkXJMi2a3qZCnZfLLb7kug7n2hoJuWVATjXPvYXd6JXtty6jDEdJextQRqb8iCWcKS",
  "key25": "5BR3oU6pZszLpdZ89juqpANULuDX6T3VReNacTHHDSpzpnrh3A6YPj75ESp3jMsDtmXpugDsnVwBngiPW9CJ5CYx",
  "key26": "3uW5MQAzi4JTvcEtUz8R2Ny6ugfnYeQEGnykxCfqPkbxssHrtZMmna98mwqrgg1xbCq7VCZyfph9TYn6XWfibcm3",
  "key27": "2jeqCvrz1LRuT4tr5E6ZwDPhckKH9RinxikmzyVgHZJjLNymAWdWTwcgSWupgYAdd6oJ2LmC4dDpdRUDc5T6Knfv",
  "key28": "C1KHcLnpKZkEzdstGqikNqrAJyfvQGpPnCidmaJS3iWXoRx5SGd487hHqt1vjYgCNWwcaUBbRwNhQa6TNpbBuyd",
  "key29": "2oc7EErVdhjEMdKrJPUR4cb5WT6QSaJhn4jvHRxLf2vyCmYc5eReY2hF95bdeoN7qyxmx39LNSFL3A2zWhNMG79b",
  "key30": "3NJtUcmBGJ77ynbewhfHFLANDjGhXHaod4pjFpew2WBkENcp7YsVx6vNEDrV1jCTZHHbQYvb2jrP1T5iV7mtU7DW",
  "key31": "3rRA9W8Y1AD6fsrw6q8enAReZ72v4NccoG9SUsEo7Lwi4dxra4YoiSzQ3cZuCZd1uZ2FJ7s9RKj6wEn1z4ECHyis",
  "key32": "4jqfMfdkoWxYsZ6sKNQWmiTaDzxcTCuohpy9Ngtj6ivB75eUmQPsyzANGm78y1vZtbFGF88FQcFnLc3qaw3kJdkS",
  "key33": "Ng4eeq7PcsMEH9khfQe8C1FFmFT6YdvuELA3vZFC6gZ732jCebcQgVvFb5cHMDTWEuEspjxbP2a5kWpUSfNzgw2",
  "key34": "3TgJTsWSaXv5pNXAY6UqUgfU4q5FRPfhXKJHmU2ibgEz5y99R3dKbVscGct57XQiuECK1vqqHWQbPGod7ztFMpz2",
  "key35": "5pdLvu6KThTwdCiaxR79bMssSLusUJntukvgMDzjDsNLSCUQ1edHUBR6eauqnNrWhXeR7L4XYu9RNifiXFUwwcoT",
  "key36": "27Sg4EL8WU9uFuoxzkPELHo57kSKeYn97kE3smorYxMUKYBu1ShhUUgJxGBdnSQp1rfgqvfUwAJnW7f2kTeof31j",
  "key37": "4zh7uPbxiRj2yhzHuEWoNQTtZ3wVgf2osVTWy3xXzdbyyW3CWSGgXhZNnm2RfFXmibjC39zeMB6pgz38WLa2kso9",
  "key38": "66ovNB1XhQdHGuzo5QMbFnrsQhitJKC6afeS9Prkyi3oYAvjsQA1a4KoXgkKeedcy8hkZWXpiugeFavvNFMTisXG",
  "key39": "2dSydccH373feHqbkELTcPDYcaGD5sahp9xMG9aiVyYBg8GTULgeyev2XsxZz2twfVZh5PHxXUqh2dkfZA1pqrpw",
  "key40": "22JZxFAgcz8AwotvMWxR8PYAsfysw4dDQJC8LydiHaEj28ATwdzqcEvvDtLTKk6qGVjX4EwHVZLCbXenA9FXwhrG",
  "key41": "3XK48uBRGeKwhdAbmm7u6KkKCoG4u82dTKtS6mmULVtWjYHesaF5mATVcLzvExd6b3Ljv44xTuDUkYwtUSUtyKR5",
  "key42": "4HaY5rGKLUNJc8DJ51vsDTUkmG4ZWkXZNRU4x3NJUhFG2WKF5HSrks3zmEvoSzAqh4ZgVu8d4qc7uEqQXFeQWtP7",
  "key43": "4a5YzMA1FphQePd5JX9rnUirjV4MRPJb8zpQC63iB4F1XQGApDuFX5xrf2uR8oDhjeGwNuCRXtWR6tZ2gnc63qkX",
  "key44": "3DAe2zofGkEtBnt2pFPpk8dL8r8qyGqojmTgwvEF9PM3EpioUkfjwF4BGHeFjWLW3xEYYea7JhjU7EsKVWhqnDcJ",
  "key45": "4DYASVqyY66tjUNzHzapWb8Q8Zrqxqd7qYjrWmQUh78oAzjB8W6fYRKf3xqs2RQ6Lki4iuAgVHG9LrtorPYgj3tH",
  "key46": "4GRZPZgSjgiVnQbpsWn19sUcfJmN3SeE2v1dWMgYwLtS3Mk6L3Ayoqup7RW5h1chr86igs52xpAyDs8uWNAzFaB4",
  "key47": "4wqXAQKjHKomUo8g1w6pRJoSGy7J9jC9hB8tHxcufoFoPsoM2ZxCEUAe92ct896GhPonqLUuffKRqPxFnRGUcRKZ"
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
