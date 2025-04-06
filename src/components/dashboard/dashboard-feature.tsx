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
    "aJ2c7vYFrrwu4y7X3oc1a91hnBgw5FzCqFsfDVXKxBJXFDgbpWB8px6pTXAWjuqZCvH3qYoRQoYetSX5PniMaKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53h21org2U6q81vsGN9pzNfAXrWTbFDBB8uA6oHf7VWU7QyNWkn7dWXjjka6hgV9ZfcS6yZSjg4x2YQ8qv2uzQFB",
  "key1": "61A6rEXHs2pcdTAnJfdHRx2FzgrWTr5Zvoz381VuvLodJWauToXMMRcL6kUhAN7rcTbWXSdLW9dSXhc8mDHC5dES",
  "key2": "xTTroGyMJV4ZEwJ3sfnrKSU5XaCYXEskk4oqNMas49JRyX7QSAyEhexxiQHksfYt1PmTn2MFsNMXpxuqk9sotnU",
  "key3": "4zViegreGjWMa5WLUyG243oQvDxL8VwAtFT5oJYSb8tFkiW1Ae27n3Mg1DKYcHJwpKBmu4ptxufjS3SuJxGmSQj3",
  "key4": "3ktyETaNQ9t8Myshf5AyChyjKuvMxi1UTJcJ6JPVJA3niKyibrtLFDAZkzi92TJ23WHzBfDsEBDfMGDJbYst8mky",
  "key5": "z6y8DhKNavLqu4qi95947GremFjX5LjNXKbeMR4ztcQzZ5WtqhhBfjU9dE4v1rgQevjByUiJ5dcwLHvzRijUc74",
  "key6": "4PcTM2km48ZUG6CApnt1EHeZAPoX1iFGy8YkLAZx93GcTCYBJoxxvmseUPY2guLBJA7tSa3jjbG8w41mugWnEMLv",
  "key7": "2XETvgBTSBCQ9By4pvcuGrYpHKyGsPp71PXnBjEPMqRbHBuSmUzxJAtRfhPJdJsVyFYEpz3UnWtVSZsqTPKCwB7G",
  "key8": "3k5Tugm1D8ykTbJzL5pq1TibwEyXwAc643UsZxVQey3MTn5ahtLnCbts95QrVjLxSSWRYHoQHsqUNs5bvx1xfuKh",
  "key9": "5kaydtNapD7Bw17Cb3cynoFfwoeDzR4qaydNDB3wCoRWEAJyYDqpHxBvgut9ocGGXYkXxseRfJ4GMb6hawfbKNVo",
  "key10": "5UfwgaHDjbK2B45uQNdmKt4src7MLMb3j4DcjoNFRUmAdSUhz1qZd7AUrVw8zkUZZ8HjCjxzqxzFft8g6GpiLJ1Y",
  "key11": "2Cy2p1NZ7Ye1a2W2d39PEXP3otBcZG48QPbit26J6XEcLEB8otGHpyrytk1ssR4A4VpsKZ8N8mFVCo6oQjanN98Y",
  "key12": "36s5tnfPibKk5KCqjuf4mTVcqUqRTQX7iYK9UqooHsRj8RguWys6KnR8re3trk1gGLwckbWNpqNGLAEyykSeuyok",
  "key13": "4hDsuGHsuGhptdBqeuVc8vxNJtShTBevQD9SLqSTqTtF8AcstY435zid1ci15ZZwQpCGqcZ61SBxkZ499eDkWLm6",
  "key14": "5rjHdPPVW2v3ME1SXiEeHAHzQS2BUvbUPioQUBT5TxNEh838HpJ4bxkkap8wUBg2NJJgycLML498Xmm8n7XWrETq",
  "key15": "4rDb22byE5bDxu5tRuaqwbUeHUUr7wnWY9yQkDcmREmvnSNNHBojCLD1xYChTZLETKwEYYpM6QYpBNCsuvo3LTLb",
  "key16": "3PV14d4te2C94ndGxEWaTDmevMZ4FhcZBt3fyQdff4Y3iBEz9QWYVxhgGfhgvXpnfLDxojMefDh58T5SyBYeyiGo",
  "key17": "2K9Qg89AV45wbNa88MiGdAPCaLsQpqmUJHaLYdVL376cP6vpEo7w4rbsa5HJmAxKXWKy6SPB9THeRULzwVZSsbtj",
  "key18": "5tQCXo1idghbD1kET4gMHsYMCMCqpWdQMfYYa44z7mDobSeEVTDhQeLKYcCmUaQs1xksTa2Xk8oCKMwbTNTBvEKb",
  "key19": "3JC1Lg18czcHVjHuaeMQtVb4m2mG9okUwF9k5qpV79SumosjGWJJaTfLLcVf46ZfoUhJiuVWtBhP13JA3feFSPLq",
  "key20": "uFE6pzGZZUUNdjjNCrf8UmeH7LSHamYKAtNrR2TatXEhnba35dyGidWErwZCwqGffGyPUqfH2XSB8u6vKKmYttx",
  "key21": "4b3BdPp7FHeBpiRXfRfZjsN4W9EjHeRJwfqQuZRgqLRzgn4Td21GciDp7LjHTQoH2qRKUDyunBru12XaRDzESMQr",
  "key22": "4Lx4kvx4pQAqSf9f9zeZdSypqFP5HYgqVDj4BZzuR1ask3mkuXpZ5rD8gDVCrxyNn9faSQ8WJaPdPMDQkAT61qD9",
  "key23": "4r2kELrfWpE5sxQ75AcQ3WqecF19Uw2ACZ8MFNNXUorfrGdNDrNxhkBc3aRhZXs8VRftpz9i8br4march7wmDM4x",
  "key24": "32nh8iRmvR1prhU8XBhY2faD6UY495qzR2Eng3oAeSMVqz3w6E4mzpbBNnXiZEQAeuWr7BGByTrGvyPMtibGaQQ",
  "key25": "496scjF4BcN9qWai2qwkFBdBav5n6a7JPAxyyLq1P91MLq626sXSkhxu43Cddbv45PRSftcRpPQWgdbHTQYmqi41",
  "key26": "2m4bVHgY9UK8Gf6ehxufCSCrdhqFVvVm7thSmSa8fHmiTtNLG1fkhnqeCBBSLJVQaurdVGievHVtjKoWaZVbnZfd",
  "key27": "zd6NfU9kctzMQ1NwmifRscVpHo1YSs4ymr2ZojfLywqa52VvJLJ9nXt1VySP552P59YU77Bu67cqT4FKNzzvJmT",
  "key28": "2psGL9AJzp5PitXDLMtaNo9LW3Hqvjdk5FEjEET1ci6b9BTpFZ5x6wcxz3wGXPHGN8AnoZ6oCpp1yJmiX38aWxa5",
  "key29": "5fQ2NipoMJU1UUAPnAfZdafHGLnKJ81YWkks1UtfHx8TRq94rzRHiSPaekran9FQJPQwhxtmz6GYeuVPDrELuDbi",
  "key30": "4me19HDfnym3PVRnrzK7YqJyDRnguYYejM3pVPqaff1fKtx6c7WNMTQ34p4cGSSiskc7CA9zCWHerf8zy3Q1Hzb8",
  "key31": "VNf8X1vEW8yc5DLPDck1xJZ56sGKJ1XE9tgNL2KZiqtwMEFnTt6J7ywEyGUfvrTBkqmQAypfw8eqFKCbiELkdBA",
  "key32": "4sR971fEiJTcB4LutqunNeEMe2iFxrBKWEb59s8qUVetRN85dCY5szvNf6C8xZm31DiNUzJQ5DZVzdokdAo2Trza",
  "key33": "ozBsJ3L6ZbUajYpTw9sGtnF7BHJXTzg4SjNpfp8NhNtF73XvLx5KeuarYD6RTkXvRFAsA4C1KNA52rkkAMdvGSj",
  "key34": "3L9GYx1FQUMBSAgo3sHBQp7NGLowdAGTVR8vuVysDdxZ8q8wBNaD7QEnPVymgqzj5MAPMWXqJk71vjdi1NVJJiVm",
  "key35": "21Am67YeSfnEr6qL3obMArcbFqxvga7C8cHKHhUAvrLBJ4FXwK5wN2Lw4PsJgLB5o3Zr3Wz4RfxURqMT89XLPthi",
  "key36": "2Kc9YyRkz4tw7RfTq9pPcZADZMwU9ryc7icTUEQb1LpaCbgSCdEzqJH1tpCLf5LC5eCoHJvksBijQkXuNNmYwz7P",
  "key37": "3mGVMMhFk8MBXQhbUiACoBDHK19eW6ZgVEqoak5QJ6yUtcgkyhQgdw326BRkABXprq91vjREgARwwpkjVYCS7EaD"
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
