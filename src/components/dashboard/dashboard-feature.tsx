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
    "4w8RScqWHRjRMZKEY8NDvsBsHFMnyc33WLjAy7PjRyuV2rcKwcVwK8PCzuDsVKECfvEHFPdFnazUnHYYJcQEchJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NamHX96g2rrCHcXC6L6crZ8NiMeGQ58Vxe3VwQ6oCLyi72QMoBWVbZ94jZv8SnNnfFRVD2jxQTbfeZe48c1nSSF",
  "key1": "33ParLqWHBGatdtiXBefyvXhMwA9B56QeaCqL1tcdAn4i51FhZR7kKf23g4E3geBBAW4pAg1pfYwgm1egpX28gw3",
  "key2": "3QrMTwMpGQTanLLUZeoNo7YLm2hTf3tc7uiG8FHmcXZSqh379ANKQfPFL52dnXuheaadMJ4XfL7MeQe7EvD9R6vG",
  "key3": "4x1YNudVPer6EC92ziAfsnMTCwegsLmmMs1Cu8wmEoTZ878gWrMXNc9GERYWdwzdSKevqN2ogZnDGwioSEfo23Rj",
  "key4": "PYK5VRjd7CGVjhczM7pYiJ3ynQFE1wBsyWA7MsAanu9uY7nDYnPbyje3yKrQbrsHWBggyt8XHoLkJ6FsZiASqSg",
  "key5": "4ye4LYeoPScoadsSANMmguBhbVzbDn2QBUq5pAdiE9M2RZ87uQmBVHUrdrHiBDbgvJ9b5nKAzWXzXqEgaeVaazXT",
  "key6": "5Av2HE97YiCwMJSsVJYkxc5xbXUuvVpe3qS6VbwtKr1Ry9gRZpcgUDGRaMgDcygDpc6SdENsGYbk8aS7m3J5GTCx",
  "key7": "aVWkcbxsPt8ovJ2di4Q6SQjz85Xvsv7TTJEpy2bidELBFsqjH6gBPokvbirqGBM46AhHmnXkLAfhjgYWzTHDKx3",
  "key8": "4cAYiSj35cpLnC2U5zsPS4PxY3tEUJkhbdkTQwTGyEv7hM3yEG3U7wkaTjLkqvtbYU78cJeu1EYmLc5j4n4MNAsP",
  "key9": "5c3toH1ukDixUDcAPJYVPUEDREuPZgBnP5FXLzB2jMSDpFdqAQPV9KFoBtSeYTt5CVVUi69P2gSKNDaV6h9pyRiH",
  "key10": "2pXfqHjLBJiiift5dkGvngbTbYaXEdRumheRYAXspDfKnvarsjgWMdZK9soNkhsKkhmQ47x9xQJJioKwri33GvYW",
  "key11": "2cdkYS1UWDSdS5fhYBix988VxgjD8PWqGKN871917cnC2Vw8wBX2GJVYyNUrLpnzyiK1ZprYyxVvjihJaCVnmjhX",
  "key12": "3UFVDXrNViwQEUb8cNwXio5QE6KMfy2UXPaVhVCjgZhUMiMiYVQayESMYGrRWLf9pDo9SFviaaRV67fNugEFMdrM",
  "key13": "54nGL3QrGuaxwCDEQgPuin9meEstDSSEXYzSNnV7HmTpKvyA4sFKmN3QRBoYt6yFB3n44NKm8ZeMcmzYSsi6Dzcy",
  "key14": "5aQo6tEjgRJE9cFKKPDCP4eqPHVhjQTE5kAcefSsHzNYrJownSGKzoVBq2C4PSXtsQGK42rJeDa6nQykq6F5zHwE",
  "key15": "T3haccfDjHVnfL5ux7ZBKponLSoYib6qgbqm56yKeFBJ9q1ekcdtoNTdWNGCdytBJBwSADFNpxtoi1bZdZez27z",
  "key16": "wS3Nojpun8gDeUSARzteGG5UHNuiP6Sd6SC3CPAvNUEXR4J7UhjAybVX9MbcAy1taBxR8DtgytXn7LTWowuR9B5",
  "key17": "5hLNheF34cnjZvBQigouZmqqws4CKsaybZWUzhRhhSmm7ksEhWgSmrmkMri97kPf8r6Ts2TpcmgGRr6Muqri6CxH",
  "key18": "66yqgWmbDZ1YjxkCoZg29JgnYQXVPGb7HnbtHHz2SEuUAzzTwuvuBD6wtUBLf4hYbKD9prFMv5fyvPsskVZWo8CH",
  "key19": "2Y1nazWpE3SjgW6ztdmzKAeotoTMNHcrW7BNSx8tAXfgahho5KYUNH5tnDDb4745LkwBkHUinEixWNPwTZS9u6aN",
  "key20": "3WHtBMGyjP5AnLGJLzxZHXLD4YXzxHQYiCVNf7KD83AL9Fsu9oiedfxa1HH7MzMMkSGUpGPQcoWvJunQ9tjDNd2V",
  "key21": "2P2jkaET25Ls2gWeD7hxNd95w8GXmE3pyFeVjj9PDzo4UUs1Wx5C7ooE2eqP5AqRruhjB9rh4rSQRdxJKexiXZb8",
  "key22": "2AY9W5mcT4FP6Aoobh9WAYvA4ZHsZh119AgeMg5qYfNFupWnoxVByae6kbdyJAgYAkdVtKJNwYBkXkUSc3EYXxsZ",
  "key23": "5RKZM1p5E38dNCjQcjxAgZKmdKdGKonLDvjyt2EyFYL8viPq3CRwCSbdZnZgZJgjYuiPGYkKSm39S2tzwuqTHhZf",
  "key24": "2JnJYN1QzKoUkb1CAQ8QwsNyQPFc5rpG8JCF5k8bxHiEYDA7yA3ebddDSicc1NqPPfGj7i4nYUXAHDbRRu4NDMzW",
  "key25": "4NtoTXCQmNPXXB1Ysu1jrMMTpWVY7fSHAnjZgCuJCY8QKoGSWg5fvLc9FJVsXQW1nUG7JcYCFbLmjiyY4nnE1vWj",
  "key26": "Q2pYrZvjdjXsAVnb42GeEdHoNKPbwXYCX2bCbaV9XxN1d5uvuhN7Zzgw4gwiTSMo3TycjVBGejQ4v8cLVTZKDaz",
  "key27": "4UTEz8t3a8Dhy1ijxMt7kxzwXg5FpNaGp7mGJrzSvq5rBvSTSX2FPxaWh8XC321uxt9fyhDNuj165FtsKXEC5iek",
  "key28": "4RLh1Y4ncSfKZjTgxLwFGzu2e8MYNqwcRyQZken5NqnnxtRSbkWzxGLEskbQ6csx38McC25pvayMNdag6viLewLk",
  "key29": "4e62u6oho1VmfDxGnR63tiGo5rU43kmM2Sg5UrfoyAJeUbf9GjRrxs5a98wKPDRyUkSL6r6VFJXmkDRmW3UbSiyQ"
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
