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
    "5W8ZmAB5tnXumFc3m2KvRHeLeebH546NmZt96b9TneGXHmRcPkXFf41y2duA4acf4b66CPjcP712QeGXiBuXkuxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARdCYmrug2Ypy6jzN8xk4MZ9bMvefanFNbZ7kDhRLQ8hh1aHHMWbLKkiskkCQ8xrmUxUSn2y8S2gYVq1pmn69Ce",
  "key1": "5BSmspJ6TP31Zq7RcuMiFFQuUETNLK5FtksEryk4XsC4XXaSYL7fY5VTzrQqt6r5n4MUhSJUuWFCes5KnJiFzXqu",
  "key2": "2i4asSMUirghdrQqDbSuwXxW1sbiucviM4zpqMwYY2346TxKpUpCnQXDvZWko6n4iXrGehXHCsvSVAWM2nffDmnT",
  "key3": "3n8hPSZgRA3rEmMbqK2PZ1R7N4VN9p1AxpJzQVrPEPEAepsW2GF9oeRZaauCMWTSDCc7ec2MSrZB1Vi7NoLAZXiq",
  "key4": "4yaB3Y15r37ZDPwCdQyMvWPHA4EqLZ7cN1rWTZJ1SbHD7AUoZfW9qgZjgxn4GFeqXZb86PoGYTYTDg8Vp8A16DGR",
  "key5": "3cLXK22qAX6vn33k7hSQDuMpmVscE9F7m1jpbxGRJX6kgp65Md83eNXh65XTZxBLWXXVsy6HJPN3TEC593brc7pA",
  "key6": "xMG4Q5oQHN9AcBghNJTTRM9W6voXmiJWqk1r4VsqSpxnrmvtZFdgbc7ykrZgLbxpYcYz7qDmnN8nCuqUGS9maLn",
  "key7": "9C3REZyJqsELK4STFiRcHUBkYgtpwwuvB4vupJ9TjBabw6VeJmE7tGp5HqKRewtUYxyKFFSXjgFb1LF6EDQ14ti",
  "key8": "5Zbx3s5kSEsrECi4qr46oo3qENkjm2LVEXPrXmWD7dzXRUNcQee3ajyHuJSVALgDiMTZer18BNZrC26JKn3azKdQ",
  "key9": "iP91Q2XRwcnmLLSz26NGKqNNvardTLpeFs1KhJzzDh2qaudp75gDSjeatxuXihTKtaRcUA5WER3BhGAZKGodDu2",
  "key10": "2KgBQffFvzba5SPTCBnGJ71D5B7ERYJUFENUdjpjiDJreSA28zWoPxzK9eyH68o2z14QvQor3XtP19V5j3QtGQir",
  "key11": "Vzzy4tHk6PdWwk8r3cii4i4mYSceV4m4MGSZAosfhAGrPWNY4QosW8vdAXAqs56R3nNfYGoij5y8PJ89EdFptMC",
  "key12": "649dTTTB4csxPTMegHQCee9zuSCF97ZXxdm28YgocRJWbsPFchzYtt35LCd7Gqh6J6h9mxAsd9CFaWGxaPhsDpkH",
  "key13": "EGjfE1Voh1WUHVwCr4Vt2zaUXfG2FW8xyDFHf6hFpCsBFn8XmL3AEgLHbQscMwg4MTAMYXsqTFXmpJhddu8XSkd",
  "key14": "5QdFg45hwqXb1p1XzcRHrXMTU7MchNBhyYxzeBvgfhVvu5NfL9kFoPSaQzueWG597AJiab6ZXrariZDesptjuvrv",
  "key15": "5C1fed92s7kDmttbQtWcD1zpE16PVMCoL4Fma5TowHUjpqhMWpXBmnNXzYotznt3F7Du6PuVWWn5fWFHnWfvJ1a2",
  "key16": "2ZaUFoTxoHc31sneqhH8ea5jdJcKnX4q2LgdX7cA9UHuVFkESP4V5vdDrM82bbNaV6NYvw6bnivGhTKqw8XKHhQ9",
  "key17": "1up6c8vQfva5RiHUzxidNwRAfrKUGz27tMQp55M54VS3bkKtd7pxkPV1rJpbyfzbiXoLSpf3M7VprEGCVFDU3x7",
  "key18": "2ABox1i2eMAhx1HsKj1JT33kpWvx1M9fSdZeqLunE8ZEXYjcMVB1eJmLkVEqgcvYcXBGXmJG3sXopnLTsqJWWrvW",
  "key19": "4ZWHgUo8N5v5yM5ZnHYWDCA7z75UGnEq2Z7qT5KWTBXvi9uf8AZqsdHC6AEo4ywLmX3K2ATRsvHm195bornVDTbV",
  "key20": "feutboRmoHD544HfBiXN7Z1QXGiVc8EFCSZRW12Xu8aEwpZpoKwGpcVzGArT6dYGmsmyNbhr7vVTCdWrJxKeBen",
  "key21": "4Z2gSo5vN6tjiNED9WaByEqj9obDQWcRPzDDgGyfPYM51TR8smyXY3wdiof1EvgxJhYQ7oSeYWsLkVK5mKKiXgDt",
  "key22": "3XteiH75GAF8AaaRguKicYwtm3KjgKfo1brqD6rF2faiZB8h2zJKWxmkzrp4QoG9C4ppHR3AVYpvrEC7dTpzSdwK",
  "key23": "3tuJbSTcSUwrayti7Lc9KykperToUDfhsxRLXmNYmWENH5gyWHLBPWR16Phsvc3NCyqytbyi3uMCsuHrfoYpci2L",
  "key24": "3j3VD7dHqomAyrZ8CXGTSr8ZsAZ4WfdvQiZjxCgzWXjPeK74Zs2FqVTvcbdZyVQzs3JKv1opWpHUR7Qxv5QVES68",
  "key25": "4dmkkQ1KD6bGMm8a8T2NCy1K8KSL1TQ3H2uJFEAXsMvJV1KWy6xYs6g9njrGuTAXHfcTrgVd5gQGPvdq6GvEWQea",
  "key26": "23agqj1F2vboS71Sq2qYw85WVhtU3nLnjQwJsJfuSv4aMXtTK4otHCQqL1qWWEANF2V9GqVCVWyaK4XUtWxBPkjg",
  "key27": "2E9VRzLarawb5TdkSPdiJz4FyRecXoUDZbi1izGtZLhLN2xCRpksQKQy7HVBw33AgtHn4PdwvpkJugJ8z14ZS15J",
  "key28": "ZUvQBCjyUDZjCa8hyR7hbL3SKeXEo9csL4ZCXwdpsxVfdY7H7wZ9ykNdHaXCCzYZ3qmrYZ1migWnW3seKsAcXjL",
  "key29": "4eogvhhFqZHBM3j2iyV1s3KHwNMe2kC6npwpiWGRzDt9MtwBDE8r7ADuKMSRo2CrRnnWjgVVFBkvybUuvkeDZKr2",
  "key30": "gBa9powoHNHq4wS29a2xgG59T479AdNW4UfA1tzYEYhRzHRAoamm9oZXs5jH3dMTUDivW3bZY6wEQ5iTxRL8V29",
  "key31": "gHwmoTxjZzqiGszjZjFxhK26mkozNNdV3PyNDukVQCtVhmtPy8dgeE97ZBeBPjgMWJKYc14qqt4L2ZPQuUyr2GS",
  "key32": "5omzxpaMZ5tnKtGGdJmajJenEvKvEWBLZGYGj37hxGpVocEgLcwSFT412tY9r3g7cM4RpU6e1nYqd1aeyA3qJKpz"
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
