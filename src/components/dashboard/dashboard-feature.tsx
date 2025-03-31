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
    "3r5xdxK2ZoSUqBT9iW1PN7njwGyd7xLgRVbngDviVib5YbbBjNx5CcpY2aAwxGaDNMuc2swTovgi6FAGWDeywZ3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yw9DPiBfi6sqr2n6sAb5vzhRwWphU3YvoVxfdSjgXkWUNpMRKucPr2SW6q8L8PbEXd69pXh6hdFrd17eCCXAtSt",
  "key1": "vFHiZDEMMVp2qQJ5To2VsoFFpQzpFF1ZQkXzxP7Jqs9xeoKgohUp3mBzM6EaQPxrHYhSmH5iuhpD2fCHVbhCWLo",
  "key2": "2KNpdUz9tqqGuyqpr8SWcgEsZdUr7mB7yCh5W6FPX9NjdDkbY464qNiPHDzNiLWwiN1pdKp5vh7BYWxYRphNadBw",
  "key3": "4xDsYb8PWTZAFj4NfkWo8uzN6fr4C3EQ7fkkWBrBTpRzj1vtwYArtbmxhBBuG971QsxwQKKbxC6qyeKJGYg58uuR",
  "key4": "4iNAwNFR543bjkEfYN1S6NCed8EtSHV7UM5ALH4HacXN3M8uFWySQ4BCd23rfF8kGQUmGLYrB8Fi3RzW6cQ8pmix",
  "key5": "3MJjYRCKSfJkEd3rFHSTqiMVGaMJ7zYf1nbkCFiopS2a4TUKRypaztYEb1XmdkFMZ1wiH7uJVDeYaB5pf4TTHPFj",
  "key6": "64nrM448UgB71A4aMxUNCzknBuNNiDsgN4USeSNMmWtqEj6t9rEsK4XnKv8TfBqXr5wfXxcxphstaZXyJcM6P9Pn",
  "key7": "2QhDttNKYUsmvhBymu7H8kinpMM3b1XqRNkdZwa2bTZdojY6DDKwAouWNAr7fizeedjHMcdYgUDmgkZsJWywize2",
  "key8": "3ipNsPbCnFg1AECYAft7dpNZoyxCUjcc31WupDLUiuEZcq3CpHQy9ujyhT7C7pQzk1m1yjhNvUQeAoULZBU6EMZZ",
  "key9": "4Yo8w9BZ9sooFXSyEoqHrwAqhXkPuNs7SBv9toFrJebza3tXsyRWcwvALP48L1QpWctSjVWto5Q9TfvxAsyqXa9s",
  "key10": "58yoTsMKk4cFFsVa5LcgUfS5tbxn4NMEzm4YWJBivAMmbnHCVUMQSBK6dkbB7QcKxVTu3XHSwT9N1RP4QUcNNqxt",
  "key11": "5SK1etRHJ8L9SyKs8oWkYKBbxpJbR5Xb9PZ25zscUk83gjc6PYtNqWZByMi5z4BW56rYM1WuVFXjb1QM6UC1b36i",
  "key12": "2q5kE77zUCuDv4ksBvm5LSraNC2SmuZqgmYVmbYr2A9RAKeZJBi3d8wcXfyeq8WXsz9wUwVzZKDfW7JfMkhZGaD4",
  "key13": "3ybkzhzbUWLo8a6Y8mKNkQABFb1T98d28qVU4XYYUWTJUcvhPaWdKZMHVaa2E5Dp8gz5t2np8nEjjK5jq41fLDoo",
  "key14": "2RSSfDKsgF8RxVmivwRM8Ld89Qim5ZM3m1eBajk4y3H5qgqfh2JmN1rdRMFf8bGa39Fht6Zq5NnG352bbuzC3Xdi",
  "key15": "5U7i2jhU6Jor3VRaMRR4D7Au4kPPacejXbKXPXgJ9k8sFJyBseNdRjYobNU7Hf2Zt1EjdFuGUXzB3XeNoLHt9EFe",
  "key16": "2QeSbs2Ru1K9tVCKLHxizwPiJy6Bgb7fXRBQrLGK2xbiVSJL55VHWXazStvwCc5fMDe4Tasnwtj59bra6hwRiBnk",
  "key17": "32uGe75bKjt5JmwSB38P3fz3EZr3NuARFRh2xTJsWA8sNcLQAoWn5ExXMoz8DNLVnXZ2zmpWLD2UNnSsmYKYhe18",
  "key18": "5XRsinfAiHRLKMSMQeyh1nGcM4cLxR3dRnJrLdwehJKxN3JjJUCY1j9ddmG5UfVyUAQmNbSLPAgZBYhCCrgEyVxX",
  "key19": "2M4HBDrdPtZf78eL8fKmgUHZbKeZ929Pp4E5PGBmXqhcfibNwfXsCFnavwCTStsg8Coo65ztfLWxxu4BK23Rina6",
  "key20": "2APV6DSHTL7bRY1bg3W1Vzae3exVQqZUW48pW9RPKQS2pMUuxE1wBGcwyvw1AJqXLsuiiTRRAXq1bzGN9HqGBrAJ",
  "key21": "5cPMNEuD2R2dcg2M44keqqe2qndUZ2xMoL732V74xwKUvjRT9GccbmPMLhaM1CHU7epiR1FsD61CjsYV3BGxb7g2",
  "key22": "5ys7bE33SzVSK6reMcJei2pZ2b6SkFy8NjG94BZWJpFpQVEgr8oFq7XDG8cxfEQVpdFonRozzKAkM9KXwKqHHg4S",
  "key23": "4kqiTxYAdToAJMDVZb8w8gX8yzAnK95cBw8aaJVH5pFenLA2UWQPyKLzAghLCCqUfpjEgNmsawNZ3CjYmNbqtYNu",
  "key24": "5HjVfg3dDS3jBxjYMk4iNLuWy6YdBDwCscJDiKikaVMuPRXGRFhZiDj2pvDF3xo5m9tk6VmjQ8yQk5gA8JSGdacr",
  "key25": "342y3X4RBvzfN5sY5XHbJae9F6BQhG4F5Z1Z1r7u7gB7syhyTaQpF1RE4LWCqU8hNSRSB43LMivvmZYC6fswQb63",
  "key26": "25KWUv2sun32E57h3MWDxDvz24KC7K9RroTvBWQ5Eci85sTvSLHVvVqNxNxcdoXKofLQqLvq4yTc4SjKPkHwQwEY",
  "key27": "55KmewZKSZDme2VXgs5zqcjHjtEF8Z6ot6sNYF74SNKB9Mv6XYy8DYwSokGZmyzBYBejQsfBH9CvPUCaHBJRwGJY",
  "key28": "2wEiNpkGgccDrqsNQFFNZ4BPeeM2VU1YTYwZxVEMJf7gUyoDUtjCvYQN8XDqDuMEfs3aytWhn1BFqq9QhEWFqr25",
  "key29": "37u65TBVovKsPViTgeAWJzmVjJtaf9aYwcNt4WFuZYYniSH5akjFSXoG5WypZGRbuZDKCDHvD41Yp7zrRsfY4XFw",
  "key30": "kfdBqv53XCJGQjyNHXiGzfWkEFm6ngDcZKbbGLRc1wVNuhteC6uhXzhFtQBXwGuDNpm9qU4wzjX2LaY2BA6gJvw",
  "key31": "4Harp9waqgUrHScEqqum7fc2iFXXchr6Bwtmh6oy6nmVtAKP5qqtzG1kMDuHNE7SvadPU1RaDPn8ZqYr9214pffZ",
  "key32": "2zMikLtMP1M6qK2RTJRnmsKx6RBsFFnagUfQrdZ9s1eKEJ1YyCEypUdYsDa9N7QSHLFY69bWXXXbAoZSF3HoZbJN",
  "key33": "5mnnZfJb8svwZ33UwMC8XurqAWXoWAk5bbLxv3MgEY4SX28YamVRdhG6VifTWn6v61YkgTF33fhc3PCvMDTXnbc2",
  "key34": "24hjxf15fyukf8XFLyeVi2aX61m6iDbSHGz871XCx2QVaVYtt4u251cPsXCtH8x9tU3JhCPEuR8rJqNVKF7mMvRm",
  "key35": "3DFwc6irarUfdSW5heszLKW4P4utaur3TD6BkWXMDtpmdsd7ogkcR5LR2WfYZSPZ5R58jbeQZNLeTuBix6XfBNHd",
  "key36": "4qUHCnna5yH9V97Kx2zqQDcSMo7Pev4Twn27o4df95njm4PfDAwo9H4LJcVwpnr3DCYueEKSTrz8hDeQNxz6cN6V",
  "key37": "67pJ2Xo2DKWvhjfK1xHkMo5J8bovhFanMFALTqSAMSU8VVmdcHsQFgy8RGvG2fZHkLoRLb55dWR4VM2wmWsaKxDv",
  "key38": "2ViwFFGi3MyrTZgXHHaS98JiZMXBPFTX9KhJnaPMoeUbzt2ET4EkpUj17xrSypTWZxxVHtpruUUB9dd4SnA5dbTj",
  "key39": "5ME9QsWRCBxqR5BzkFQdJCgKQja7rr8jqhTR5RFBT7Ai2e3rFgLx9gttpQUrGRKv1by5RsncZzzUc9ZSZha1q56d",
  "key40": "5nWP968JPhGfe6TFs86RHTvVthmx63yiHvFdUtjGkmAjBHukP16Lz7h6JoroaPXsiNDY8EtSHkkB2XpoeCiSY9KY",
  "key41": "4AGnPvrhJbiV5291CxrfnXZyF1qSnQCyy1YAdjEEmdRBe2hQACrXfyxZQkQZ8pEHdxtiVS7AgmmvhZQsePEuPSHm",
  "key42": "2FXppX97dxhGwUXT1vWyQKysMxTMGoHUU9DGvaxvDDKdKrQcP3e4xAFwzB9aB5ViSsg4f9cS3mPewC6KEgkYwi1P",
  "key43": "2B6LzdaDYChLSLGpucPSfAHnaURWz1GWMRsia7g2XYLaNefAr6kJSESrpYFDo4dKXQSCnhhBgSTB4mP2rRrue9Yz",
  "key44": "3M6urFbjnqo3UUkocwZew2LvyFiB2HfXRsPiVZneE9oR8W2UMH13yuTm8UHvoB85YTVHAhy9SUc5p3SmwqRvs1PQ",
  "key45": "4MEotPejCqykqj6PLgBVpe6XicuRx1tp94on4RKM6i4YK5X1NpnR1RJ4DDAjEx4mvAGzdo6Xgw8J5vEL9YHfo9JG",
  "key46": "5fDzyrcPZUZArB7z8LQK61WB8aVwbBzoWKNgEjwbX156abtxKQwSuf88QujsshJAz7gPXKY577aGoCeoc4saG93H",
  "key47": "7yV2TDQuuMC1dbaaLZCu1tFSNrnq4FFj1g5NT2HhT6DrBjXvh2mXr1E71XMphWw3e7jewhRv7qx59NdhFrBzzUL",
  "key48": "5DAfvjC2bStZPWuwkDZ394jRVKusWNTJ9ta8N7NbBwHphUWbnSDGp2MuwTKs3TiPrps41w75bg4KGK3pnWaDfweW",
  "key49": "4WsB8Xu6hNKNCxg9TdUpCapyp8bGDtHaMbbQmPS6QNfqBrB6xVs2X5oNvDkJfKsYzLvSsE2hwd4ootGUd1Pb2Jxf"
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
