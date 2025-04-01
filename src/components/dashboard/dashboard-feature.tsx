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
    "24M4ApirEbGUoiR1o9pnZXHQtbsMwSby7j7cnnNTXi7sbZuhCU3dLpTBgzfk5ndcV4wGmxcJDjb35MbBC7DoQGAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDQov9zTEKF7Dj8Tqz839pt7B3yXgs4n8QW6ikBosXpQi8ZXxPVAaCFKRRdx1xXsGh5y77yGyMsR3RXpP93jwMd",
  "key1": "5Nose4XvfHkXGyM66J8AQKEZ7DBDBXVGV1VR5WnMQv41MKuX9mxRYP8Ty3KTTLTrergidjfdPjZ6LEVa3zrDek8h",
  "key2": "4VLhG9n617BFnreWVqtv4R5Sk7j94fjZdsFSFyF9cM69gHQvQJea9cJLaNtbSsc2ZMX5Jggoxx7swydcEA8aHYM6",
  "key3": "Qm3uA778nPMXxZWSixsHGxbhkeLtDzESWimMJDg12JdyagpM6Hy9T6g4MM23kjbpACjMJSM8a9KwjN3h7bu84aG",
  "key4": "3nN48ozr9RHnYdxDjKYqhkCJaG8RKuPcT5MRJAxA2vnPRbvNMiTzuFyadFJZWNEuKt1ANXVQzgpPeebusvshg41x",
  "key5": "ZnKpaZuFrdKPQvk1XpCXdSH2LX9oGeoqC634KJ1pWzYABH1yj5HYDHFRpKtPb5mxMBGDwuABdcN33VguppmL8ci",
  "key6": "3XYETapioqjU2XYKXQ5EiKSmg1fVMMYZf15ZHUPpdoT1z9BYRhMUzReLqUSYcHGjGr215tn7cfc5QvdfrdU7Zsc3",
  "key7": "5MXztSPtfATA9TUbKoYTbMUpfissQHHkHYRtBVgAMZSTG7ZA58HVbte9XEEjqE2ZAE32iHCo4zdyPRRQkTeLsbGv",
  "key8": "5iUCvpK2juTKXbmaEGdWzTW7xQfLVrdioBBZkqdK4nk7ngBm6icJYzU1GiWfBRTH47fixaKxuQ6PJ5L2mDGV8Vih",
  "key9": "3see433Jd7XzbMqRNyxFxg2T2Nxf7eeS3sX1zgkHpwdaQTAsYk1vdRuUpBLXsKbhiezWAMLbxBFFuL5cEGuj9937",
  "key10": "2bZA8Pfttvi8b66EB3tFNkVZK9QxBQ8dMpecCGX5ojtds7Jm1wp3kydqWvrL7LQwSJyg7g5VxM3YZJUZqaF81yRu",
  "key11": "E6i6je9D2HjZQNRPnTouFbSAUqaSqtxWKeSmhHL2YBdGb2UzKFVBCkTguJMK6YnGrFDifJ1Nrpnt898ujHgxD6T",
  "key12": "3jq1XN5w6NZdn8vnrma23ackg9fdF9h8qHB1hiMrGn5QDiqEEkkbaMu4rbzEcvKvVqXjfAaB1vHKoryPC5kpMkqr",
  "key13": "5e453Wu3Pwf8J4znU2cD8bKinvNjezpK5XnZreCVp1hhRKXp8YWCdZTAATcwVXLMqbpdLaZYiSEhS4KC3A35Aoyb",
  "key14": "3NsaR6gawfmzRvYjkGok7XUmTPo85dETRggYqDc7DG33DSCvbSThgxXUYkkJnYxLAMDNkJeEqh5MncnCMuGw3DKG",
  "key15": "5dtUVTE5EcGpA8xY4gPzMLKBjFNyuwkqMTMpLTrnDmY5aVnxQcWsLaEeBKMuH6pWHnxpDN9BdeHUYiTgdnxGDQxD",
  "key16": "4Kb2bQiJWpMwvQgALr41FkaLfAixJF4Ut4YSENBq3sXdr7DtHmTFgdwUoEj9xfpx2vKYPQd9PsqdEaXa6jtVh9wt",
  "key17": "2KjtZHn6E9m3q2mBYoxixmnV7coYd2WcYhSgLeE5aaY2QQMABgp6NbGRkbc8CwtZZEBG98wK9syw5LR4UL28yA6Y",
  "key18": "3JpM3Y49GoxnSJE5w82qph7EsaPN4gi1kogWhQGvw7pKqrnoJXU3UXfoDTZPLWGDJJAYeiSngM7nebVLobaZcwRa",
  "key19": "4BfnAv6gdKFVqXbM3T1sYNvJnMrVLm3EMFmsxobKzE1Ue3jTk4G4JHMSSMnAzeYqUTRLMDwtrSrUvo8Th2BAksL3",
  "key20": "3Ja1HgJDk4WXF3MhhFyEkHbfbJsmjf8vwM1iPcJMPymV77czoq3qtvZVoesetU8yvH3JFJsKNMAcJQ1ARLx2fT6",
  "key21": "5uD3UrQgecPAEV9UqYPfJteHkywvMwq3fHZtmtV1gHDeKhGq8uUW2Y9wF5o5ih5V23dwFdbxGKKZggwCkpjsAEKz",
  "key22": "4LdTZvyMx81SfP7W2FZ51JSAXWrAEnMMYCL4XQLfno1nLeaD1RVEHmyeTP8nVh9py8tf2u4bzeLCjiLS4q7vBSj",
  "key23": "3ZwQnb2La8f5r4GVNWsazmDBuUQh3Ngre4wHFez2fsoUTnmXfNEiJ8tanHyeuEd1x1da3RXnyZAVDCQRRdatUmWh",
  "key24": "2ktfk6PUZT4fjAMGsfTfbU7RQtrwbFiTQYV7X1Pr3tysncUjQ4ZLNyZitcvQcyNpvQxzBvyspn2rq8QesNXwZFCW",
  "key25": "2LMJzfiVpVAFt9W6jzLstws6gTwtB1ozrmY8qgjc5RNHd5UQyyodmi3vwzGn8tosZvaJkrFwgHDvun3e7RXyCQ8P",
  "key26": "3F2u7w1ngv412bGtrDteEZWpfi9BFm5voVupDCZHBzB5wJnQVFCjTCrqhkVVwHmGJ7ySAVDFb7XJa5qcgFRYFJot",
  "key27": "4pAH14Dmg7gQtJc14ZYGqAEbydztr54zqxqdtk9qkAsm1fk28Wds1mCcPHUWaqNGfrpEJv7u7CkpSW7zX6bzE5a2",
  "key28": "5PHHzjh9AcjawG1ic945ReN87HXBKpWY5AsG2ycWGVCnRZVcoA1jGBpPfpmY6gPZuJhWZqZDqpBDW22S6jWJeXSi",
  "key29": "51RaRUsXYS7vVywpqJu5k2m8xSGKgBt6q4uEeYKdLZzLVMcyLTQGQyrmiJbD1jJVcwPAY4zNKQ3aihhTQCP7tqHE",
  "key30": "fV5coMWrQ3aebgfgREEtHGs8oMwPcWDezPZ4BiuVJomo1wovJ3m6HRn4Szf7p4yYMhkQZhJwTTKJ3VesSj9ua7C",
  "key31": "5WqvZZZeZW5HCkTwdAHQEdVR4myFquUisvRz5XTLp6khnKRRuXbFniBJrsAzUWUDNFyQGDkHZqGFYtHpZ882aNWt",
  "key32": "3gdQkoNrcbWmjvmVgpq2G4ShZ7g6ViKX93P8T9UT68b8jMWaxmdBEzEfSiuDX9engxnDkDUjWS4HgWJ1FAnZjszq",
  "key33": "64Kg51zYTprhviD9mGi9ZqfEZCz4KGresUYWYGek6ECtvq4k9vVP4tWNqtvCvT62yAPAPAtMj2hNx1Cq3KeY8f1V",
  "key34": "2NTWxUXtjaopZJZYmtQ7RTTcSjaZJjVGBhHWsLdsC4GwX1cNnHAN2EWKKV2pbSnv5bB6FzfiUfn63X8s64LKZJb9",
  "key35": "4anvQVUiQ7NySNRvt4Z3eF4QevEDF3acQCmp8j8UuhYgGdcUA1SG7BFk7yLxf3ZgMf9rQZurPmdwCVvjewWrAyVr",
  "key36": "5jRBJB4frJFqo5PqejcRxw41LjdFU1ASZpCMrzYtnyRFiAeMFztZbsE9DBjmJCXknPkf4aQtYKCzpvnpS6v1ERw3"
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
