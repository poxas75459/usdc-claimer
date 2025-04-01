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
    "ZGnaFq9YVqPBMBLmENnLVdhF998ri7pDBEbRYj8V6PTS2yWDxF1okiwegR4Y5uZkfbDxaxrnUkV8CXUgJpcewNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fP1i3FYzN5k7mH4DHyuer9S2TAbzmmKdbyZGkEPFVbVupMJWtcJnTU4i2WiBDtFJ4tLnXv8UsMfZYRDPGDa3WWP",
  "key1": "R624aiQsiLgA9TaVCVXk2Azf67jWHC2HhAhaxGMZL34Cn9F8CjRn8kqdZaiD4jdqzjMPWhCpt9HKCu6LQAXm1GB",
  "key2": "5p2JpftDqPUww1gUvhfpPkBYs3FBfGdL2kX2hRL8Smb4J4ArCmXxgiLM9xS3vtZVCgVgE5WngAMhc5X7bptfgAiE",
  "key3": "ThUJxmRPzHJj1c1Eiq3LTXKby8CPJ3Su8hZKgJgQoZNu5CVEMFn9owFdp3BJhTtu2LuePj9gqk861BWftEHN9YQ",
  "key4": "5w8tfxoahwiJCEhmYYh2vZPUh9Ebo7d2CQ1NzWngfjNS1unVHUeTRkw9P7auA6ypfBJYMZMzpNb8yr9XvcEZCQvx",
  "key5": "31drU26XErSHb6x4D6ewHngVcuCpA4ccFYD29xEB6Xs3xU6kiqywHMcREXFZHy7stoMahZEi1ZUZ9XbrQB3aM6Gv",
  "key6": "3hAqhV3sAwec8DRucsu2ehoYU5w9MPqYJvva9fGS9rSSD7RVq2yG5X1Qqah2dMV3zd7jmESaEW9KdsuYGGqL4KLZ",
  "key7": "iVzcYzfNEMjjZqYYNZV1YmjfXByv5EvUK11eYhn5QMg3NSAkNFshGntZULBeBf6vdo3zjMubyjTp91BL2qnpN3e",
  "key8": "5a2oWt9noEjxX8af7PW4X8HdPJY7CuMwCSYgoih8sHBYk6dDGGfowLTYE8DqkkZhXY5RaZSbF5AV92jEvuvrCJeN",
  "key9": "46o7CydaSeYPMNRDTMJEyCezaM3gfJpUsA1p8a6qs8KyHz1EyZw9aRC5jfrHzGsm3joXbdouwHNpBtuFnjKbzXkA",
  "key10": "2FMJayyRyJLdEDAJWiNtNVFyZPdu8wxhkLrXP5zGteCRk447zJwyz8r21DMPggMaxwjuFzjzCwoHGmRcoZSbKoHS",
  "key11": "q6SC7QH6NbVwfLRNejzS8ME4H6sdUp2wDn3TZHjvih3VM1bVGTQoEXGTAzkDxvsitx5vvfWMdeP72PR6Gxjxk2g",
  "key12": "5SJmyAGqwzny3xdQq5H4EYvbYsdBbNuhwTbYDvN7g29RDJG9ARLpGCraceHgrwNSEAaW23qgwyxU76ZTwfnAqHgk",
  "key13": "49kr6LyiDYkBNwRXa6LRmrfoFkkU164MgPTgwfNRjMGy6odBjcXsLqZKPfmM5jdr3kN1RWn8bE8vpq4jybRnJ8kg",
  "key14": "z4KR8JwnUBVHXX97sBKzsa2AWcMRnxw3ZThLvUt3cBB6yCp31RNsZgNkauLfX61Q7TYLMfoURLXpxsKj7He4bwn",
  "key15": "4JzJDeCaKKGNm8xYwFBBTKDeJ85tAxV6AjPz44UfesS9fqEdZWUvpFJQ4FvtsGNvQsueDxFWSpq4yMzNpqnR1FiA",
  "key16": "3AwSuWYCsNL2tN6188NDS7TQ8qhfFkqZ2AMA2LSbbjvkGWJ9vmp3R7rUvyUQtccspb6sZGw2Gxgvmsij58aZwZZT",
  "key17": "4ZnsvGQ52tVVi7Xp59jYt4pjjXhyiNe5fZjskTQh5Px2ciEuiMqbxKjzmQqzYFmZrpyuXoEC7gjGRe5kukEJwujK",
  "key18": "XvLnipTFf7RqvWAaYHiExXKJs83rMvMcX9kz3iUoxdJB38Uw6rCtd9VmWjuR8JCECa7ni44yMyFzNqcgmmz6xk1",
  "key19": "qrDtGgx2LMS9Qd7rzQTWfcv73iunp6VekQCY45KXFrYggKNR4JsKQ7c7DE28GBfhv185BD9ut5nB5eUpQjockL1",
  "key20": "3zPSo5XEP39vUk3VjK7xk9M858EeYWrZCm1QdQHoXNV3pRbS4JdxTQtkednYNgoNzGyvr2375hmtdZZwTR3BLE2k",
  "key21": "2EP4SDPnxWuzPXHf5xtYFTRD2CjkVnkQDSxo5F5HDCg7LdjumAtowbjFLxytVPi9urbcnD636zhH3T3iMre92Cys",
  "key22": "4qpRMAzE9qP9muXs3i3CA9G2UvJJdmCLJuzS8JJsRsjLp4oPfgYFai1cBNKLFxrHftNGxZ95vyh4cD4a2sn47DbK",
  "key23": "2iPp1JJodysJTnR4zCnfU9idGaAYoHwoAKF88693FCnCL7aaPED8P9JR5jQadi4kaoNGsgyfq29RjHLwzZLQVZ2R",
  "key24": "23BXpf3aTpVg9Ck51jC1YZWsCfEtA9PeAnVhbgDud6k67XygvbQ81gN9XYc2CTjtJg6k4nA5wogkuLqhQn9tAzxo",
  "key25": "DuptNS3qXJr9XAjECWMiRnTjsWWtTBQZqB1aZQGq3DWJL5KCcAnHqb793rJLf95c9eW6HrYPxJecNUNMFMmmAv2",
  "key26": "34vLCpoCK4DtF9tkQxNvebEiAdYfo1dt2CuMujizY4Q5732pEvkatRE3GGEWDXhC6zo3zgeZfASBLpBmDFyvVBVh",
  "key27": "2vqHhvQBzJJ61w2YjqFvE6Dj9JfAGeLWb1QLN3y6bvBfWtYG9zPvGGyKiQ3fcNduUw1rGwXbiMGGGJTFHsnam5LC",
  "key28": "34tpLF1CjG4zSCT31trpifRBmGM8uhGfyCGYZWHDkhCgk3pVfPuHzdZc1VxDyBz9fDH3ozqPZkTA3va55gQJQwej",
  "key29": "5VW3e599mviujSfiQWUc1mMEvZ5uK3e5sekVpsBNmgg9owJr8V3fFeCj3yMPPHKNwWnwDopLJCNdbKtKF6qpYNwq",
  "key30": "4tRwyaJiLCebVwbP8ipiz3pPZpVTChaXHWeZJoYaBkdfHey4KjampAiB1YLsPFsNvQBcrY6XmeMc6sFJeznrhAPj",
  "key31": "3jEddqFJKcAfZe394sy1iaSbPJueBZbmzTbcdCnKX9mCNU132MtbHDkFmL4tM1JybWk4QvyFdvGeW3bHaBYFcCRd",
  "key32": "5sRgCCnpJ7fGtbF9jbYSgLt3R4td9oeimFmGkWnYAzzFeunnGDE8UAmyWT9wqkczj7uP5HLsN35xXMB9fjqkAGZJ",
  "key33": "4d72ZgWiuLpWRMCUPgup9N3XE7FkxnSoCjUbzA2FQZbY3ZuXt2imhLUVF1ya1g1NP4btYeLdGALKdtcw1VUpvh2j",
  "key34": "52z18QFxEhM2MdTjZA4riKJ2CX3557Qz79tcfgqrpJ4hJ28ac9tABcjJAkjvWiFe1vUTwLHAyiKb6bP4sjmyNtsa",
  "key35": "4ycUd7BqA12Xqs6L7FZccM8pwQg9UeoaZ9QcMkYws1nqtc5bX7rYi9HfkkuLhpdY7yuzVhfeD2ZgyEHXKyrPEGAy",
  "key36": "6nLnxbX42eSCrWErEFVdhPosfMSZ1P3UocheLskiYyFd82mfdDA8yyrzusheUVQae9tL2prVk32m96HY8zJa2FP",
  "key37": "3FsAUcniEZ5VDATgGrMXF62abX47AwNTJXkZhPD8yRbFqj4NkKto6HHRKa6cKU5t7ei1vssG7RNrhBi6ZN1ar9EM",
  "key38": "aPYRMdH5Bq7GXygbiKHkhft593wYm6BsHe7qK9L2ZfJmd1hESDF6BM2AWqASyp4qEdLNtmh9DEzDWGnSriiVop4",
  "key39": "5sB1ibqC1LwSSki4JBiQYSn6DJZpKtFtWogRjCyorrnkZG9cFdDmXk5TTnAATuZ6Pm32fK5JvmQNoHjUfDDsgnqn",
  "key40": "3snKP8m2ySu2DPNUjgr2XWH1oviBdEB8BBbyFqsDCwb8RgFkLQSmpj7fs8qkjLniH9K9ZKdn6rx2u7koSEBChjNU",
  "key41": "2yKwF6YEbXgszZet9wFyqogaeuoEAyNx4N7CNL8g7MMdTq8Qh8sxj5TBDWgT9GimbvNTUrj9xbwAVMosN4AREQ1z",
  "key42": "2KUEoFUxKPfgEh7SzrsuwnJ9tfwkG7xqm5QfqCZGYAnFyuctvACnkzm8PNvVoPU6MTt358P8CkaND1YhF2GD8ZAd"
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
