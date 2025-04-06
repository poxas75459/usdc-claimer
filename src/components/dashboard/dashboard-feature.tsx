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
    "5imt9diH2y53GwMnFVStrwMMzsNF9VoMuxFZzTmMdY6q4fBdYD6GFpgM8uMPuNLCZx2KVgVNxRJRJ6vUwqkadRGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzFx6rzUTquKcpeAXXXbNvQj7UL92vq4XrKMyGkX3zhWJWypByLpsu5YtDW8iiyshJFUGf5b25usKGGRr8XnKJe",
  "key1": "5pkS4spfw7WyzxJv2Sihib8bPqkfKFB8soGU6GjdaE5t6gGXz6XXt84uaHmJofGE9UdQYjZ1fd2xYSstrRUChtRA",
  "key2": "5o8Ey2fLA93gMzLfBf7HwX8vpT98Vxw9g3kmNaQxLhGo3cKke9bDQfFgwTcU2Fn9pxhDzH2UQPxRQEvQvaPgyn8z",
  "key3": "4SEkzw4ebjLBTs6k5niGTb34gcwr6rXFb977amoSXAPvD8SMJtxscJsqSQSJyd36Li9ZvaNzAPDEuaEevBzqod5F",
  "key4": "2sFGDpxY6c5DdRk3LFj38Pb9R6rc6P28CCpFVDgVsgawPNxBb5VDi2ANHriqKdd7HD9kUwSjebBoitKMct1v3DX9",
  "key5": "2rAkfKKh3wcorwDVf8fQkqSZjJUDTJoHmxVK2qjSSvKMoGxjvmG49ePF4o7bjrTzwszBfCJfqWsJEQhLhro1YyX8",
  "key6": "5tKp1YXyAWbuoHJgEV3DBKi2bK7YG67w1M4dhY1VuFw3qnYyYELqeux5HfvqmS1X5DvF4nsu4yja4Rv5nAquw8YU",
  "key7": "wRUwQjzPf8heXt8C9odAcrYi9f1UqYtjb4UHfN8rmhEgFsenhgADWhE7TVLyyh4f1a9e1Mfac36k8GTByG3NsQT",
  "key8": "4Cfm3sXpv15aHmdAXv2YyYQMq1Wq8R8s5QvLEjEiYK9x1AL7qfeBYQZgWFuoZb1JdDZTq4whHUvQ6YvFUeMbB8YC",
  "key9": "5c6hqrYAoPNJCKwD2wUhhYWZCgt61n4yU633C6YgNjih54MZYuDSMFfTrmigtHZzfhXnFkUrtVq6mdUGv6bHJBXz",
  "key10": "5wh7nofZSSFZuwvhMFQ6997Y9qec7BGuTdqqEFRLK3yTnSXJUDzpkR5BPGRAPowt9u4wP9HN1DZVKTMa83tZU53v",
  "key11": "4kvdr9cKM3mF3J98A3ttw1KVrDiDhsM9bzn1F15HfU546t3rZHrZTMwUhHdtwQQhJQxgfUZqRsvUUN9nzydeYQ6",
  "key12": "4xxGcP9pauC1t5LsynSihXWLa5kqtQ8mu9wnfysXxEsfbJChZLZdgTophiYEvipyZQxofckxEcjZYF6ZFU5uaifM",
  "key13": "5kw2VJbSawkUVuAxPkpoDDAGwFbdxv3wjjUSxERDx31RXxoq4LbWUatQypqLmgdjzjfLE5c5SyUtqgvh1XRZEp1g",
  "key14": "5aSjkYUj26VAYohxexbTNjaRV3i7YtmxEVVdwNfeYLUHrXybNQPSx6ULZxy75bFmf45KNUgVZ2xE19Jnd1Jve53K",
  "key15": "2Jto4ujsFY6SaPxPMCcfntond4SDARrE5ZjTzoKG1kWBeGZU5qerK4TP2rPDS7q3aMhUzJHMRn1GzSEerAJkZHXF",
  "key16": "2s4Kj9vXCAKJpELcFZPHgynPsZPKVd3DHV6pAmBYap3Sg3M1nZhfKi2JEMrfzeWHWPytVW1rRUA6ob8sFxss6Ayb",
  "key17": "2PWJWeUb7ByrQnYusFhF3YmFY9vZgoy968WiFKSx9E7jwJjG3BbVkMLFrBxfUxFwVnVdjdDEzL2ooLmUGh7avdw8",
  "key18": "DpUTLHfZqiVh7573rw3CVDGEjRngg4MhHJ1e1tHm9K49KB5TKQWXH6V4ChKj2shZqckSWzyvWWsu9Cn6MCY9GL3",
  "key19": "2tparBcM1fm73zHsHPGVK7wy4iC17Ti6VgZeQSY497qhPh7WkaCkpS8sCaxfBwhxaDWea4LJyNPEBbVxVTGZCX3x",
  "key20": "2dSwivVwiRiebMrD55DABwCCZNpRiQ2a8dsWxP8zi2RrYdWfn78SgHok14fUXgfkeqFJN1ri8isPcXSupUuqnFBz",
  "key21": "3jm1dGd9Uug1ni12qqCimGJJRq7MmScWxgqrsPA4WDMFcKgmaGTk51N3mcxnLYUdhN6Z7bkEC9pbZcKZSg16udEF",
  "key22": "wh6GVdq4Lu9yhZzBffnbx8e8bsV3JuPzYZyqeLem7pEjy6UBhzBcfUHKisu6t5jUsvz1xJBQWTAGNmxn1GMmiUo",
  "key23": "2TN37t8GDqbfeD94cdF5wSvyxufSFAjJMF1XufVGNBCRJgHoudQTqkCNL9J2gXsHePWK25nnjXxjmJxa6SfhDPJd",
  "key24": "5F4qjdcp1X7VXixLdsMqtwGi2stmaxuzfw3vof83WErGa4ZVrn51t2QNN9MEVcokD4oCW77Zx8GPeYYkYQ9v9dBW",
  "key25": "3BNEasSqcjY5xvj6mFfJfgTnqshBxRY6ncpW3tCXQhAX8Z2fC261dxYaEJvwdZ8CKShWydssKDiQYEw4NNuSALAf",
  "key26": "51gmwrce4ygUcbJSTXeyX5JBhvYrkRdwBUZBWnG9Uz8sPdP7xwYYvfLiTjXKismuRB1TT5zvVTqZdYZj6aXym17K",
  "key27": "2rEBd7JnEpT2GtSpwiSMEwX7Hh5VYfrYWbsm3FMsKW5wQ6hx2fu19iZuqMyH2vr3yQFxNxJpfrZFVTmi7xPgaCUQ",
  "key28": "3hdzK4hAG8xi6tCmwePZLCCzBPFyhuMbg8UwiABm36sBtpHrwDbbC1Gp1JXJA9kPmuA9ryVGvSRZZBL5u4AfCHVh",
  "key29": "4UisXyw85zf3y99EKPHbR4buLUtQDDMEqDxWP3QyUkqkV6qg3WpTuw7iEHPDhEjzY1DaDnizZnRnCcHbrqeSUpWd",
  "key30": "b3u42d1ngUtaycaHW9vePM1GK4NPgjphg6QPfM9o6X2sXXUza8CQhXbNmTSiGHFU6jHXMgfv2kLx31aAHGVTvDU",
  "key31": "2NECamTK2aCJapkuecUjW41BpA8kPwa6NcZVVBmpBY9qrU9VnkxLjDA6ixPwZFif9se3iyek4QkLWf2ezsZn9BgE",
  "key32": "GFrNveFfd7AWBcgui7AdTWvLT1wZ7z1miTJ9zzRj68n15pUr7Yf8QKLtU6KFHiZbZVeFRDboaPB2P8i4dmmhNoi",
  "key33": "3iX4P18WtXFtqtW4Vh3ujiaoFpyjsC4jqm5SrJYHWf4XxJm3wDrC5GkGff6tqsyX6vYzLVhvPvUpi4fFWXyPMZ3F",
  "key34": "3CiTUhaorqPKkmrwokQdY6vqct9c5fTxgxviGdGWWrAjC2ARBREpmtdb3Kkuaq5A5ZKcWafqProEVfUwN8ZLGD6v",
  "key35": "67V22nW9wiDzVWeJqQbeSBrq4dLxgksqm13NSAPBUzTZzTmkBnb2GTH1YVEEX1BkPjeywT38zJiEcqkckk4bym3t",
  "key36": "5cPS91XkEnETdMW7anXV7tehmsq1yHfhze2P2siDK2KLWs8iYWd8L7NGs73iLtrqJCtVtn9wc6Cz6enabkjGQBUh",
  "key37": "4ZiwrEXqog2ufvgrP6QRGjdTifYavKUdq1BUtuAXj5UYX1vkFf4FJh6DPCuTUD6ecX51TH2T6SXQXwE6nyMNbh2Q",
  "key38": "HEfUKWv6iem2vgKHqLUz2uoDsJhbzZjoQ8KZaH4mif11LUexC6frFs9VK9iamet8Djjp1X1pb2bvnP5qF4iiLxF",
  "key39": "4PqMsggiii6tzdxxbTiPuhR8YPnhNhk1QA9WaNE2rC6RgikioPDuWpLanickZFy8Zuvx5MtNVVYx49F4Zwes7ytf",
  "key40": "4Cgp6ScHdjYgbGRpYFPnJx2kzzhzYM9titmWJDQpa3R2bBdEJBMMcH9aMmGobDWuEUNN48ZuvyRFhAtnwvkZVmjK",
  "key41": "NNZoxMVKtZ7jWVeATD5jZNuQYyTHt9gYAGdZaD4uUfu5c5xeeQhYHRpvFKhfgS7SsT8LMFTVJ8xMRpZSLEaHVvS",
  "key42": "3q7dqEAkUfUYXiNZHBRc1i8HAMCPTAruLhWqRCZLxmFRFWwkn1Ggr5P99zt97XkFJEHtEhqSW9SjSEEtn7noZDdz",
  "key43": "3JvG2LYVP21K3Evuod2GN3TwGAiGzGNk7iW78SBZCH53QrrRk9UB8bsxvoe4ZjSx1GQGJ9xBiMY1o5xnBK4YrJJ6",
  "key44": "558fnia4XBQv9NpDv15yZuUgfKcgKTiN6rf8C7rdLja6JG7oyQuKZUaWTRf4cg5btv9Vo1Kw7U6TDiMA2jSdygX",
  "key45": "5kMoc9R9ctg4vbfsbBeAfFo3C59Z69Dzrpq4rWbWsPXsLhWUYTGF5ukxaKoS4MK1N8ksLJD9SrHsADTUrVfLvRj7",
  "key46": "25if1pwdiaLMbBsN2wLrQXAYXSRZLHgVNVMgMFcu4RikChtgDHSwS9RsfpgEnAucL4YK88MtS8m7QEUs5VZUkVi4",
  "key47": "3xdTSh2hr3DWdZnGQBD9R4685J53MUg8dKvMjdeVq6tzBKomnUztqPkiGkM4EQGwG7DBFD3j7itnh11Xc4iMHNRj",
  "key48": "5qkiySmRgv77TygqXE1Ygug2N2YoKvcPurakCdj6wiE71CFb7JyEusFk6ZdxguQkbT5QQRZkwCVRBDXSVw4hqcUL"
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
