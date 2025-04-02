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
    "3uDREGHfzyM2yRzcpkzgEqqHsaYgemZf8bKepnooxqptMvLEM69aCZJe4mBLXTsTxBUe7xwdRBU3X9S8weB5JKvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKfkYfwuMUnt5M1zegCtg6k8YU7fMeJTrjhfhauNx2KEY4Knr3TFDBkTEoYHPYyKPnqS254is9YkAo1SQAkPhou",
  "key1": "4hBaMj4oaZ7zyZuV2iz7a5ygf8YQ3K5RQjkGJLALDbz2jc4beAyqi9vbxLYvrk7iNj5XXeomPjQ88mG3LXhXZnuL",
  "key2": "59afkAddpeUA6919ySDNMqnsJQukvMBHURLDFfNXLiSzFdv6REJM7a7j7zoUvS1qr31p9MkLaExdzGgH7ssfhyxU",
  "key3": "5BYUrB4uGucMq8odqzjY36HzWpLxH4MtzRLgNhsmivxrfcrwn8QPvEdcXf5v7F2n9xiXXEJSajLkvj4apfEb2n9g",
  "key4": "3BQyiat4eqZr3NE5bwGQBrY6fzYprrFGPnjm58pRt1mcmGzLmfbVTmsGv88NzreufjvdJBLmVHLsAX4rGRykFdFF",
  "key5": "4NX6EZgbb6mup5N12D5wL6t3BzEbWuAaUHY47TJjEcSxuM2DzgW28GwjTvyEiLRo3oZmrLAHtriW8u5KXE6GdtwD",
  "key6": "5eM8kNqB93CVGCibZoMC4M1EFNtc2dyrNhiip7GY1ThoSq6xB2Pz7rwf9Fa3fXpDtuWsjsu8HDrNtv3C4KHgxQ9T",
  "key7": "3DoRmeWh4c2oK9jUkAfSwMjBNK6zLzGsM5CzdGscR59djMFVn5TXXUCMK9uRimWN1M38eaUnBbqjPn7quJd1EH7r",
  "key8": "3qA3PVotvGLHbHtFsGZfZUyB2VjoeqFWrxCLXp1xkUSrwshyJJySWGMnuLMz54Sd2v6YvNkqn2xwcEVe2ZAUdxmU",
  "key9": "4dygonjmxEryYwPvpJDwmgtdhJ1ULRzqHVdj64sZwuLBGNtC82GeYfGswh9YJidbQyEZ6H7SmYfMQfdSZsSxS5YS",
  "key10": "ofdykxB2KppFFDzya2XcxuVg8S6U9CsGunA5bkxAR9Q4BaZCQ3SYzgBjPmGdVB2i6pJxRNKTf8ehBM7jkEUnC7W",
  "key11": "39ckSAXdCyGB7BTyvs3NJrE8PJcAqJEemX3PkAoQuZdqpC8khsoYLgsXoFzh84P8FM2tg5XCnA8GxchMSQTUR9uJ",
  "key12": "5TUEPduPgAZbPi7FT84P3NnXDMDhaHnDHTzCcsphVQTz1WE2zJyV7sq5HrdEL4oUgvpro5qzmVbXkeSjzmdcBJqr",
  "key13": "5HqLgcev2x6bpSWvTDj3d9Wm8RyWf1QyZz4qccSArcxn2RByJgaSLykUZKgKk2s9cM915Cwgpcdqb8mquYWkmXG8",
  "key14": "5tdV4i2mhBJUrrdpLLvsZp9VYqQRqFQZZP75zHnBwfSwfhNbsiFDLzTrH3xSPxoVuryNB1cjuAG2hGBDEyDZumeQ",
  "key15": "34ALHoWgi8Q2iykV83UpEnWfVTs4GG1LRJdwaSqpEhr4TTgKnoqskp35y1oNWoct7TzTnZnJS2npgXZu3ExGFUw5",
  "key16": "5uNq1FxcaM1y9LBS8daTVyyWUJNeNojfCCuEL3wimNTLh3gzXAQQShd8TePpHptiyJcnmpJ5Xt6EQmhmFX2udSds",
  "key17": "W39M3B4xehSfXpKWcp4fuvR1GpCxBiBDAKPV2GyoWsiX4dKiR8kNxQmXTaZWzamaPXPFu99kjXphYjkzea6rEJW",
  "key18": "isxtn7qViuw1DwYTie1bc1WBoArGD8qhFY9H8Cm12SrkjfJApUzfVUy8gyZ75LDHxMFRLygwRnhi5gnYfYnVDY9",
  "key19": "4rusM9sxX1Dz3AvXLHwETEsoTyhohQ3b1q1sCaDmbCzTRb3MDzPB9fRp5tvTpBsFjzzZchp26TC27nfZ1cUXzePg",
  "key20": "GTKuB8vvnGQeHrqgNJvM62oaS1ENzizMFRuFnE84ivme8eGb3DxRhY7KM8B3522iQQRZSVgjdk7dufT1f3PsfW6",
  "key21": "2C8trkeAuF4mkmUZxXW9LTBJ4YC5F8efLCjTaL1jFi5PvdkBTBwqp7F1s7DrejDqJx4sB5TfyNtxSTP8DHY5CEvJ",
  "key22": "5wp1xNhEofdcSJbdhDytLLNAcz9mizGBeuPuGvGYseQgNqKFK5KPvvJ5DKatvqPHCyu3owPE6Wxc94BYgt2taLKt",
  "key23": "4WBBfW5P7HwpPi26RbuX765bDN997d1E79LbCj83Zv1RjUk8jBnAY76VoxvdiN8gJrRshQBjW5RnAXVYkN63ws3D",
  "key24": "5ttqjABXBrPFq6fXYaCfS4m83EDQzmqk4w3NknZxCYaJcpHp198fDmHmsFYwzjWkFa9Nmad1NveNBVtsbXzGEeb9",
  "key25": "3GuejGnab6GYAErJJcFSRD7VuGQ1ziT459RvkDDb7iop5hayaSPkXyZKcmu8y8m1Qho3CMzueLxtuxbqg4oD2VWu",
  "key26": "2qKp2LdLB4a9r8RDNmv5jsxhJvyvxXjJzF5W91hcmo4wPtK5MoXqGtYDfTfBA1gorv5QZkkdePtoVc8dMCfLW5j2",
  "key27": "4MseJhxBBVvjXgjnfULszVe4VbwKPMJPFtDUxXmsu67DyJMfvE5XDbYhyoMELoeCGvkxqCUKCTGCNnLRnWL2h7XB",
  "key28": "2gEZXT61dDBAvcdEqWXsLeyhTQszNbdCo7jS9mdb3t9dAcPQS9X4euwBnxvaQq9Zc1bHDFwCiwQkEBnUfy5R1gbn",
  "key29": "5iFhwqBXdaHPxFSdYxHp7bWAAFPyiDrWS6AKHM6CVAtbVSzkws74Bfc26U5GPWePGGkE45Qgg1Xwd8KiuBKfVyon",
  "key30": "3M5mCwqonCNe5aTkqUoafa5GFVQk46JhAKGnSYRxPwwUtLWfPaWEqn1fPW9Co2Kr2MPaxwTHBhdMuzNiBFxbwjxx",
  "key31": "3kszMCW9qGnDWGUab2mnBbeC9bCkphMmmFE8KhxgScx1SYH1C77twTSxZFdfJ63kPMgDx1SqFPjg68NCU8QFrmEa",
  "key32": "3gmFWTkHc4Zfrz1DE8L7VBnNyqHfoMHw5faBfhLPV635CmcEiSzFQfiNzHxSye9nnC8u6tWogcEC6ppnkZfeGR7h",
  "key33": "3RkLK2usPPauRUQET3xFqPo2LvhqMvrj4GkN1EVZ9wzamwEQYv99W9Phb1DBbA9TX1C13xzsNJDcwkm6MWeKyDCQ",
  "key34": "4qNB1ZcxrjtycCYQrfE3XXKw5EKiFyvrVsfrGGSvWdms9wEGWf8wDTwS4oUShjdNHRa2qZc5rkDYP69vrBMRF1CA",
  "key35": "ZqRrTf3t2zvZ9F3GTQLu4wutmHSNZ7FK7p8GLBY87BZWFbWJ6ATSa2NDZ9ASGsXzGEmMxiNcFWLYJzpKhShmfwZ",
  "key36": "2LLLTf1MLN8MNk97qS8as9hUiBQVcna3WRMBRb6R2BBUw2a4LaLj7xKtRvq5aQv2RiMgU2oGkE2bJMgwCLH5cuDC",
  "key37": "3uyK5EaCKbkXh9dNq4K9juaVmcSA6ZK15fhQBV9nqHHT62NrbK4SCs9cbRRZjdcrrUscFfX8Vxsdg1snuHkC4wpv",
  "key38": "X79oa2HbcGeotUAYcUKF5RHrvDFf4775X97yfiyMqhgtbXme7euvRhqLiUzvY8o1eXM49FFJdzkhXhgqy2HyRYu",
  "key39": "2JRKowkidZESV5zzCwKgP2KK8b8Qo1HnCJVFWG6fYrmRWJTXZ72J8d4rCcKEeacrU4KLaa9MfDQvwHNRtromC4uq",
  "key40": "2K8bMn4HxJN3Uh9p67HdyEJ7npqGNcWra5CKppZs62w9FWt7SDMD8hhmCbeupskWhiCNuqiEVFFGmNKPGgZVFr1Q"
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
