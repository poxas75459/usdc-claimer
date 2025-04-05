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
    "4LvsqtQQzWDrVhjABDnNgwq23ro4tiBtwbtHzEkCdK4m7VNJtiV67qDnpQXXmnaG4CVEv8dxcYjjXpKkd6xS2eDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GoNQoXGYq3xop5cgWWLeZ9Jcy6rh4bVeQQwfpRCyiPbJbLnEza3eDmu3LVijdRBpWfhGqcv1yh1YLYTsUfAa9Uv",
  "key1": "5tFRwDgoY4QdF7kT3zH6RmdD7FnVxFYsmC3coTc3zhLhgN51TmJzufPRBhmT9tWnGwx2eYNzXkRqEpDCgkXF37UE",
  "key2": "59a9pNtCxNumatVw1FXZ3DUQVPe7HdQ7PowUccRJh8tTjkgDkRhcA2KMg4nfP6Unbm4qrwCUtwdgTxLcVQqkNXBA",
  "key3": "3ZogTtVFBXCEUw7E6aPZRXmyPuMXYmuaLHzzCEzCz5w352coLCzRtobB2YmgRYcNJYq4TvfQQgezgWcAsTR2jzfw",
  "key4": "3qkr9xYaK1jGqwRxHkQFYqB3Y6MKKxwVWNBNd3i2GoVFZpgBGDHa6sek7mpAA5aKSXRxP4E11viFFCVLNGzZ5K1A",
  "key5": "25UfVzLbnoJdVwvGyimreJnH9WdsofJg759XeBZvuFWiJ1ERmxLBDNnna7zeeHre6oFhXiAU46i3McRJZYWUuzUM",
  "key6": "4JhNM5dd7RqAyTeAnEC3kQ66YHRFrqjXe62owxxufTRpDNNUwjo1Qqwr9z4p8g98jbYiRqCtFm6iKsVCRdXjR9dV",
  "key7": "216PwEmrhThRrRQGmvN8VpzFpk2VR6wu6NaG4yXUDJqXBCWnTdhGJwKRSCBVpJNQCJDcM4SH8kGsDMhogAUyNEDb",
  "key8": "rkRdDuRCaGYiNoDPRWXjA6SyPahtpeZm9BDKs484RxoZ99fE7M96QWYDoaJm74qdM58B9FJRhMe5KZbR1hbrRr1",
  "key9": "673wdX3rk79U6WGPeTcdeSkLtLAngWkevvfaTJqs6a7JF8vjC2no6X4WnXQhK9XAd5hLaPTn7qJidazttZL1B9vC",
  "key10": "5txdA5JGKcQG2uykjEwitaUfWvWrxJ81X3t9empUueMaJg97r8Aj6CFUSvQY4ZGaMXGT2Svnew2ea2Tf6jLpodkB",
  "key11": "45ZVxd7PzZoUpfvRTQ3QSJn3AqT9KuMABfXQaGYPNtirmckXv8JygyGhU5SwFiQwKKk9zd9kqTfQaDkhNikxEC3Q",
  "key12": "53HvGENGZxVwDnuXYNYNnBXPJ7h8HMscJCvjNXNKenwUYFdW7Pcyb9gjx3Myq4xCKbFDeALGVGbs64yJnqmwjbwB",
  "key13": "2JSRKXB71BdFhrowSz9LGqvZCSyyv2SK1ZwMKWqBCL29gbAKLSxkBKgDoX27yC3d6CnHiFaA9cBbhpodVy6FayDF",
  "key14": "3weYfcz5guyQVMhHYFSBXgoh6QPCUjh2KWs887qpSkxDnh6RMkStyDUe6Kko7Kmiqtx9th4LuGHxveDBgN9FJKEa",
  "key15": "65cf2rfksPoeG8skL38gnrH7EvGvd1ujvQ3Joi52pJfrtN6GkcmJEoZ1FwXWLLuQjvqhSgzyztJwmvpSDSCTKZJN",
  "key16": "2fVe4sjLgfxdqqYBHoSkxKzHQgthieXJiUXyfSqYfehkwiRk2cAJH2KtQtcQ6AA6bmTkNBAZfok4gUqqaoEynePi",
  "key17": "3bhkNZ9RLvVr1o6GYu6GTPwdcL4aTJfG4ZjtAooXxRkzWmQ8JgnktHAwFnZtitEppfam5PCsUKZBTg5tWXxoDaVk",
  "key18": "c26ggBHvhAJQ4pBJYmcmc3p3Ww2dugLFMERrxWEpZ8bLDATsA1M4LoUp1unvSSMqFkywxZGfYGASpiGxsAJSaMV",
  "key19": "4BvDHSiKMgyRgkxvS2bQriijcDACDmcXNAcctbfzSviAqtbkdWdBRVFbVZaE7Kc8YPkTzmpNqWNUfFfKXyHCqinc",
  "key20": "iXuvuw3wM68EFXjrfomoTFAo74dCDXPA9QmbWwWA13eaW1KtVVGzz6pxZF1AbU1APvnjK2yCs47EBaV3F8fgZ3J",
  "key21": "28nJgFcCd94pnZgn3MubijJAfkc2EFoUrNzyL29Kdjc3TwnuZVMeXnVQYx1AkJsrMvH8uD599mc85d7gfUuSUfA6",
  "key22": "36rzePe3Mm2RxRB9ibN4GBsRv3j7GuDcZnVxBX3CGbaXu93Lyt4b4wGSWPciuVhnKu42yfbscAUu1MNxix1g48D5",
  "key23": "4kS3otjmZtHJV5nSR7pwTaCyyqkNuMiAFWgAcLre3WCMvzRFncyWPN3cayPAbnMh5uERvpKzhCK8JZK3TsMyrfhL",
  "key24": "3qBSwMR8tX51rtf1JXmTF7RG4asGR8oVBvwXC8JiuB4yDAdgvGtwT6B1pfFeHx9KxgfQ6yxwyjyxNbp36VM9WpMy",
  "key25": "2BTtfBTbEwTHDz6mW41AzSFU22KE7cb8R6D6g17iD2YJj1QZcnFdpyLM1vvXcr2qLyVRiFP7v793Qjj8MTCxAjAs",
  "key26": "4Q1afTXqtR3ttKDfrBC5E5fXGTyTb5WBDgkEgPSGx5XXWo4rb1kQN5nrBXUphxdT4oaiw84WyKfxwrLbALnntRZ4",
  "key27": "36PW9N3irb9J91WQKpdpWzkEkenD8VA1d1xobHKaCmvu6jkPuk9qozPorWmde5ZQ7bvoAwond9VpsUMhdXMaHUVW",
  "key28": "2snMzQT818BaXXBE21KgZSrLKkLahBgHRZLTRQ3huSHFwjbYMs4Qs4JQLk3Mv3W5SLsMNh6NHeJrLXxAodjcWncF",
  "key29": "34Sg9mVSFDL4vNVv7K4xQoaRXuWDxdzHAFHBXQwDVEzMhugwtssvUxu1L8axZVYLJN6kA5dj71VgaowmdYGpp5Cm",
  "key30": "BnvYnreJbTABp8ykiY1iZiLN8XVZYqPoYgHK4oD5fdUfrpuqzuFWDuByPm99htkMWHERbnbVBHeu78gBKQMM1SS",
  "key31": "1UWBwavGGFtgSp9QMzkFufsvYRizReZYf4CJka5NzZKd764LMczrtk8ADWT5BC8tLVCREvUX3T5JGWUPWZaBNd9",
  "key32": "2bDukjNU2qeMwet3jtdJu5mcfY2SbftEH3ku6Snig9Woe2mWR3tQWu9zvvufgPXYjKjmRtpeiGWNF2ncUZmvveQS",
  "key33": "3Q8X1GqwGVome8HadvqTJKW96QZ5sLBvdTYrMTWrYWZf4LB3CqBTh9wMf6aDCQnC9kCFvwjcjRwtNjq6N8SRu5B2",
  "key34": "2quPxNvzoBpQYKXgFBrNCc9argUVyrRsNi8PhSCg4ezTuMaiaeiMhwz7Qv74ayGKAU4AUz2fVurxA2oVQVQELogv",
  "key35": "5hPhbLS8CHVZHCJbyiJPLHMU5VCRySvkHVqCsLGLh1k4biQAySqcySEwdEvqcoXYskMFo4hDjB5j2PGjTovQRZP6",
  "key36": "85KKxtjeLDJaz3wrCXR66dZotcwzScbgJQ9UqTe4HcmvobuCVc5rkUxfhjftdQSL3qdUQfs5yHcL7JvnTNDytij",
  "key37": "56jYwF5WpcYrExSWWq88B6D3EEL827unKm38TE36oprYfMCbg2QVRMkyNfSvbfbDpUXvMDoJeJedZC8nKDMvAHSV"
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
