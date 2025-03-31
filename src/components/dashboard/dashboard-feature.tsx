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
    "52pXHQ6qAgXLYBZFSdkAXUaRw5NR13qM7LeyZ3cuXhQr4RwTbdRoAf9QzJeh3e9Ae41QCBmnyzH2C75yKjBJ4ABq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7wvBKjm1HcYk7h5W46fDT3jSWDZXLvmiZ2pmjrwN1LvYyWGtnv32YSfQDiPbPR5t6vUfTaPspBuxNyStZyzXj2",
  "key1": "4djk1eqCpFKrzTo3MKMdHUvottjySELqdnYA8mwRqHT9eDtKqpeXDZARtJLJTzW7mGSWR4vU3G4i6jWgZ5oH4Dcj",
  "key2": "4EpVLyBm8UGRTLvdCHVWNvRwFq8GAnd6A2NUxFY1siew78Qejv5r2NriZEC5kLk2owdYiYYcAUEY1sxrQogDBMma",
  "key3": "5uR5FSpBRb6SEWDVwne8PAxdNFuxngPGLP91ZWri7c3imrMyaCxUQ7JPZ18ppsZn2An6AgpKZroBnGbULRVvvu5J",
  "key4": "3HKFqB3bh9zZFWrKJEUkdqwFb9XJQjsxrugHW4Faemx8pkiYja7qkMLYYuVA6vWSiYqBvu24n6vovc1keN8WtohG",
  "key5": "ZDp7ixYN3FCjRPDWtag61WefSEfppXxyF2uBPLumzitncSothTgRmvVZeS1ueJH2fmV4SjokUMnT3CS8uc37v4b",
  "key6": "47X4Fy8Q4Hhf1iM6V8Bss9oKVPCVMK8HJT6ZmyDxLnXaNHZDgEN5szqqacCnKVkQTsTaFubLzkdSdNyHmnWfZAAi",
  "key7": "65bVJcDUJYdMKQWpviVFY7XfwpSLA44QtUKyi5mCMkscEL13boXsYmY1P7gR5jaYuwRi8Bq8TqeU5vHHAMqRWa1C",
  "key8": "29zZB24tK3wNmHzpM9UQKERZb6ZsZPFBEfpeh5HAtZdoFtHZdyFkBQaiUZR8DeYcvQVX7RHHrA2v8Dh1WobjminX",
  "key9": "RV2gaEmqtsGFGybA8wQ1k99LdVwDXE6RsRzKFk6niWi2zp8VR8CBXGyddM4sdpNh2hyxEJHpyvuBnH3p2EavbmW",
  "key10": "2CPbQfTr92gDty2m7PmYAbHtfBVgq4XaJZWgZKGd1iCwWYVJgkja9pe8Gff3p9stNbhUPiXZWkyC9krZ3UfxtoJd",
  "key11": "23j9yhCG9B3BAzZdT49wpt8DmvQvSad9SFXtJNZFU6VZmn5WYhRYWwaV4qxQTTmYZJhPqTfxhuEgmRaF5ZsprC62",
  "key12": "3grtM2eC581HywnPsPogPKWedbuH6UrwVSqapFo4BJHfhjXtqGyV9JXft5gHd5LUGnbMerYVh9kxZ38nK4nSC5Eb",
  "key13": "2pNURLcRCjHKQabBHN49YuBL16SjGLCxqDuMfpL9Vd4SJyFp38fgubVJQVC93U8bgH3K4n82uF3pRAhkxERucvsq",
  "key14": "2n2R7Pbgti9Zwd7Qy3uJxqXdC8PAsmnxUvG6MMVbzgwvhuDxH4aWveP2x774jFqQrE6qtx8qybfQFuEgDcgJyqBb",
  "key15": "2LoS3c5ymzG7JPnyxpQtfrKM5brp7VkcE7zEsQtLAff3JqjnXFhtcsYHXwjXto8iwRu8sECzDX5QUbjUUuAvE5uU",
  "key16": "4bT86YBeKBrJu3HRoycG1N3jAi9jqn1UtFA9b6UZoyXUXYAKJsuucp12F3cp51NxWssK4fKNgQ6DLTwRK5qzkZpa",
  "key17": "5fYG9TNACpja4FfwMZr3Gj5ddyvwk2aN8chrVbKWCjBjUA6FU1X678BRQs4on4Pi7okB9adDa2BwkzX73qo6UF3L",
  "key18": "2MMbgWT6zDDMfsTbS42MaxPBzquJ1Frie5gSfpsYYxawXeu9duUQuAsTgM1HpDyB1TYVxKszaujsqFWWLTJoSu1q",
  "key19": "4sAv9tE3oZfoUNtXHnvrHfpS3Z5QABPGzeLx6f6pniVRoDcP78PTmiGFi4U2kMkCN1b3aToZEA785trQj1qP1bkL",
  "key20": "2nSaxDisDHppSACsaacarrGgb1ZabtAdDSrn5NNQpQDjWLWrJ27Gn4m41mznE5TwrHtu53wGmifSGGdZ8rTq5AaY",
  "key21": "4Rmv1rPPP8zLPUS5NcEigrokw97dD3A4QpAU8bFhFFJYCsnMhoL6cDD7xpogjhviAHLjG5oypotBYUhxKP32hFPc",
  "key22": "4gpyL3g6zu6eJHHzUEvAbtLvW6Wdx1v2G9eBgCSu7pPWLa7bs9YkU3VUtHxURJRj2ph1xt59VPfLzbRwZ2q8rYMC",
  "key23": "63FVsoiwJc2i4mD1Hsvs9TKJw6shdtsnDLNaJX2PKArsmtdJSgHWvD6m8aHjPz9uT3Te1stxBxQ1AA7iofc57Qnb",
  "key24": "3xcC7jfSuKosZQ3NuQSGyYKcYuA6tWVXLQPijDokFXvxHn843Rvq5naWsA3HuNhjgpNVkJD6jKbHeF6qsR6N2A3y",
  "key25": "5H2tVhif32Y5rARmf8kY83MECgs4hqPfBj2NzABisQXoFX24oczTxm79ApyuqStChzpJ1P534uA66s7iDcq43qtf",
  "key26": "4YoHuYwLUt4msAf7DZA9BmLNvbzchoXxcecVfUtKfQkDK3B2MLHSgESwpPzxgF7FHYy5MhMLqdEsYiVnSnk9SbhY",
  "key27": "3UdoNzpAxomCXgZdE7kMxZE4JxPB46h8cwq7HCJYmWh3ge3LLEttR61U3pbhRa796U2vipBU6XcoRj7rW3QHMRZh"
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
