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
    "hAZ52xrzNkA1FVSjyRUvtWJYuWDSBVNfXVePnho9x2fKqWukHJKWm2YVyoPPwDh7bWwuLEQBRr7xmpwwi69ZKx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJPk3f6fQGU5zF9UA8GeE9FUfmYguNeL3zXv5zbPkANKytAufr6YkmkcATbazpfUxHUNiWTFzPuDUrZ3fC4z4Hb",
  "key1": "o7RVSUQ5bVyTpCmbrVBkFU6ZgX5dwjn3dMqwh8LK2pPw5Tpk83qmYSWqXfpEpN9pVgR8cjPd3QaWdZZq7fHybf3",
  "key2": "3D1kQ6vXCaJyCL1kJ6d7ohJC6GeKoadMrtdu8w5wcoM8Dy1wiyEavuW2Jri8iffkWqqrN7oc6SKop8TV9negCVmV",
  "key3": "5tPScNUZ2DwDZaQ5PoB36CpY5SgRjkk6UQv8G9HkT84GHX694Cc3iC1X38HcBcjniRNFDwz6brtUmh65rqFfYV8a",
  "key4": "4Rh9HyAuMMQ5ypxfDXjYP1X25YjAEXLdKDuZF5iYFdQjW4eveiEUygbAcBnxzhuvccv9CyPJBguMPFdc1LWq87ti",
  "key5": "2ZZJfEdW1YVsjSVV1AYhcEGbSfLwxoF3pzxE181ywVLPFPhg1jht7Y4uHFWtRGfHYn2RGSZc2E799bnQYpZA4f1s",
  "key6": "4DHNmg7P1mT2ke66g5cC1YMKckG1K1oWa8aptJ2RFuxLP4NAXjxNyfW9GgFz5mSo8JqzTqCy2g8jwesTi5oLUzeP",
  "key7": "3emGt8UYBEtozkqqZrrfBVBRrCHy1vkQF4FJnvecceSbaSQBpQGEnapi3Go2RBbmNQvAE8haVzsbvNZyc7pxwfdx",
  "key8": "2ymvUizcFTitDhi2Wx6nr6hSp6pudkCQXihW9Gim7ytRPYCx92XEKiYo43zvHnWBL69ofkFJVPoDrAjeUh6UT3PD",
  "key9": "37XtsoXyNEp1TpvonArDEodCJWRNA94kZchETc6nr5Cuq7XXFyU7GpShnk4cPKYPwBW92GRWDYA6h1B2BC5C6LqL",
  "key10": "4HDtoT8avW8yQbBZbYhkjDpapwXBKbDeUXRa353eTxtiobXeWYaYuhmcrKCET7J3hXvDhP4GX16F38QHbuvoMzto",
  "key11": "3sxkJjSnXHFKwLQZhdBdHrgopchhb6LTJM9pRFg4DjxCLhuvsrdEJ1HqsiRUdjMBVoCV9Jo3KZH7zo4w8us6HETq",
  "key12": "2bRpZhSUebXPbarYhq8vv4hyrGkNS9j2QGFwJobGwodP22UFVoJgeSinjXxE7njV72V4DuwokGL7XDG61Rtg6BYM",
  "key13": "2FpXZrg2Fs4dkq6c9uJ6Ye9V8wdGvQNhJwQ12gorw7PSEdfvHQfSJg1RgqT5tifo236XsCARt9ZHggfkU4nf1AH1",
  "key14": "nvkgGpSnH7YtVFeZ4hXfWx4Bb56YZxDkQ4vfeMSqFFtCmxsfJvAHxqGyyutJ4QY8cjiX5Xx8DWycKciGfnuCykd",
  "key15": "5cg3DsfYEGcYRSojB6Qe8CupS6ndJPc9LGH8NbcCZNYYrFyWsUq73M6cxML5fBHpdAYsivqzviJTiCFfQyc4QPtF",
  "key16": "2ekguygam3kkgYnZossLeYXZmPTLonNPbsi1sEEsBPfEVWrnsxc2LUHLWW25chevHoLS5giyJStpWYnBwFoUREZQ",
  "key17": "3999PFGNgeDQeuxSMXHpULqu3KwBhDrnezd3kJQC7xJwX6QH4MHMUm7L1NsStw1GydtQ5UGGMS7U22UUqVZAtwTz",
  "key18": "5J3ugPKVAPQoFyACCC7NLJZiLdQTt4CTZu6tHErC3F9x4H9tUtk9SYQMoHR2t2rHAAvxKPUepSWkzCqvQ3ptU2cd",
  "key19": "64idaPsoodYMuA61FeKmQuBz5UDdJuLWHsaeiRAqNoRcuJYFBTzkGyLSe6pGWDSpFyCPXd4joRJN9yrc7zPmhBb8",
  "key20": "k3BvGr7WQhbzv3JbjeqLUej5o2cHomGj7CUXTzr7jaJs9qidemup5dkKQrUax6QBh9knEaApH2Jj3RVw1fN99oT",
  "key21": "2h59RENKPkVdExDBQ12eVTMJyrrTCNVouNMDERWbCTS7zuZYx8x9CR4aDF7WdHnLJyLvz52dM4ykC2xDjg2qCTpy",
  "key22": "hDDmSwRMptu7urmA3ftwqfywjAb2C5RBzbasDp6sqZXcqhud98jbqiG5AVZfhyyhjxcKZQQE32smhMe32tvfFyJ",
  "key23": "2YUMgXPNsVG8muZ8putRTC6vJoeS1UnZ7Sztgs1afGvm17LyNhx9m4ZVyRwf6UDdXZm5PTDed4SvrSL4D3sKbdvq",
  "key24": "51sNqGPwELuo2TLdyB9kXxx9vfnpPnodRNQSfPf8jYrS1gSLjQEfPiJY1YgZ6PF3rvsu3EpHw4pqxtAbpmqGZnsz",
  "key25": "4y4iM5ZkKdzD54mjSw6cc4MD3uppNaYFuJfkKi2miogrKbPe1pi5K9R8Rf6ZisqXcfRuvGZSFw91SJuGign6ianu",
  "key26": "5dKbRgDgTPfMC6YuuoWhTNi5YneVHgTTwxGd4podPgHn57v1KhKSCriw1UQtAhHMmdYRbCtU7SnjPBHvnSSmkykj",
  "key27": "5qSEgsisvfZNEPLuzoRSLhwfbENFojdQYmN5MNQGYXdr6rdVDoynJdAFDn5H8vhbs3sad1qANwE2bPA57E4AbHXU",
  "key28": "Jrt2tLbxfoKoYhAC6FFPY3i8DECSF1Cbqx77RrxccF9uEpvMrGpnGDQMqhwCcWaqvdEeFpdMkPEeRz3afsWCU5g",
  "key29": "5WXZBi7KU4h4aV653vbQymvDgpWoyhqsxaPC6FhJHbBXDxnT93ryh8jmn8hrSNu7sFFHaAtp9uYgYsAg3Upurq6g",
  "key30": "6beke4mMxtKUoopEpDaJQsTgqoyqZjMmZfW2iHCJLSBJNcn4LS6axirS1SxDT55TjMQr4CNjMUUoRdLvq6H17rd",
  "key31": "4CbnHLeG8ujtS1FYeoFJwtpg4zet84YupwftjTTMMMiRS2nuCPYWPnHcggp26EsMknpA8TjH3qGiwH15tL7ZcPHK",
  "key32": "4SyhNpT7qJq9zEeqUrU73Tq2nBpMMdHgS9TRsTcXvsfyTupXx6Svpwo4GW8fM54SjZqGUNKEtoNu2zb1Lc4iyhdS",
  "key33": "3PWrJgR7g8eVkExviGmVTfhzJiegSmqGoqj555BH83spsDFT2ovzppaWKEhZJhAiDZ27H2NZv1cDv4G4MpM66x5x",
  "key34": "2XehHKqunmvemCKywuhhP5jjoRK35zvFL3LjXp93tKv6iiP9ncxfv9DarpQxqX56vdu8tcXoeYkz23FHyWHnHamo",
  "key35": "3AgFrtdpH7ro8hWivQnDPUuM8PNtXzCNQ93RvbHsw3FPQ8gkXZoEmTpwWM8kP2vjtXy1h7hXsZNCXmbhbZwauVSJ",
  "key36": "3bS8rHZjLUkkCJsYyg4SWZFhznPJdTBBv1owMkdbdrcgsn1ziETcBn3cX6JGBt2SN6RsQBnqQqgjfuAf4EipRjjS"
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
