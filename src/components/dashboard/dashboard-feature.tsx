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
    "3WgoohFAKx1kkWoqKw3afTasZxNEhVez8oVDVFYLugqJZZ4V5fy4o5ccZgrDZcJH69mayVpVjdugMxWgmPHbkxnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARXgLaL11cLqaKVd9kNaZ1fmRZ7ogSmqHTAV7MGYsbe8unWY3Ys8sUWngm1LdRR6BMQrWHJjXrffdeuiqVMfsgW",
  "key1": "5rtdrNi5Bz3yHs8sVqJ4jQDTZiBLAszfzwz8zaniUzRwAMNoGk7N9LuXvM5DZX9NEna6zZ8iMAYBXZKxJN9FRfPx",
  "key2": "5NRkXknRBSRRSdAgSRh5TdoM9TG5ou8Y9HDkgzAtvTxWF3ZSj7rShJdsTGpFbhWVARACjBhntwYZnsKR87Czemxj",
  "key3": "3YuWUwu9nSuC6iV393tqNyFDiGENQFG5JADt9KZ5wJEW3ALPo7xwsKr9G93mL6DHiQGX6T6TJFuNz5MPATm1fFep",
  "key4": "5nPf2pgnSw5LANhN2bJCj1fbRiXce2nPYwpqyb4DFBWMwEoXhRVHFijp9zzC7Rzym2iBRoFS9V3x5ifeaXSeDEtY",
  "key5": "3JpfT7n8Xg7J8YzcdHfiTfq41idZwBUXKEKwaGbYTKEWZw3hsSu4negbRkoD2nrnz5yQvcP11diBNtzktKbfzo89",
  "key6": "3kJx42YAiSJKo5sJKM2dvi4suFXgyDjoUVjcjq2VpQtt8FaHGPmVRDB3HSx89xMrZ3KpM6aZxSSrgQ6Eear8ZEPz",
  "key7": "5Z4PucXKx6bEYZfKmSbhetjVf9DFHD85pMoF8d5Q2mZwDXzgL8Vf1ELJpjQPt7R3apBE7K8CP73VoxqgpR65cxGK",
  "key8": "37QWL14mc8H4JcXPpz51UXPtPk1FkpA8SitgAaTohRv2n7fgd8aJQFa13Jh7uTCPzKfmwdks4RcDveQCzqsX94Yn",
  "key9": "2hC9h4R3D5rVzXdpW1znjB3dQoyA6HJ8XiwCkXuwY4H35edRQ2EfhTJC1txEVkpUeuQHCHSMi5FAersq4UFtDvou",
  "key10": "3ZBzV6yZTXtBmTx2HYijrTTTbWCNr8GsCQJYNse8X9y1ypQgKGSN8xzV4Qrrunaz78DF1b8kY29rfQEBxM3PHcyq",
  "key11": "2RzwCjvs6du8bTRWLWAdEhyYaPbo5wS5SF61GNmwteSDyco8FnWUkwRss2TRPqUorWMDowZHH9wPso1Hc9iPQNRL",
  "key12": "3PAFRuJwn7wuGFHznHRDoRYsS2UqeKfrJHZvhZtFz86bGcD9TPYsEaEEpXVpKXSdUEmNZ5cbfrw7ErPnLsZRDRHi",
  "key13": "5ev13agzZP4nTY6ELuLJSrMju6kTHQMkwEMukH9stR7uVw4vS8EymGETJa5ZUL3Utwi7CY1G5dkvwCh3y9C6tP6f",
  "key14": "5tPMY6uotT9qgqswZLpToEXdtep1aEaBf3fn7ZJgNHpEzfv7VYV9ajFJULzJY1HvNp3NqcBYjosXFwnYp7pcoErw",
  "key15": "maJErrUEidajX7T9nJ2DWYGqtH7rHy4S95mH4N1sHLEiznzAsFZvKpUbazCn4hEFDzLwjpLQn8iRS2EUtrXqgVw",
  "key16": "cWvvZRgpdrHHobKt7X7Wi1g1FFNeHZbsVdb8oYnh943qtyPHHzw9vmBxcqdBqUHBUjywf9xFm75xQborp1WU84E",
  "key17": "3ZQsN9BtP5MA58aRvYSNqdM8WKgDYAzC5M5EjzuUao6VmHw56yUaJsVjhwqa2STwb6jU5Bb1UVT7gGCzyfKXPFYP",
  "key18": "5gGUArNSX18Bq6HetDc1jF747zTzadFjWycmTasbdSifV2LiEV1i5qJKQkGrg4mAXb9YoqAtw5mh4RR2mfa1Cdp5",
  "key19": "49VEVXQWH92RNTJPwc7cW31TKynSost25Lc3jWNpX8mFtVd96szw3GKwUHa9aAWntrdFXkPfYx4AsbduF7eE4D8y",
  "key20": "4WwnxBWo83HYokxoWsLRLsCruYWMp4uAHBeMnX1znzuS64zBwruBR76fcQ4ioHQ7gjMm6HXhF6vWiYKqJ7irgoDe",
  "key21": "26jwXpJbqQqcqZjNz4HRk2r97DT9BnQXzeFMx7nmG8siQVjRJqJwP5JTNY7v1oco8jgjiZMBA7XpxrdrEPi1CzSD",
  "key22": "NKuyQRH2TyT2JfpLfiyK5TiN4i7kYsw19K9rMw8fzUDCVTy1akmhXFmfkPpyJqyuAcdVru6qmF7Dp6votELeG53",
  "key23": "3BatSnWZSHNg6jErwYqRVwuUryTdic96x4Li35rbryRwfQe5Z1PyHhqsDcRpotAug5797wvbEtjptf4mkP8rebNZ",
  "key24": "4GC4iN6NHhEUt8PjH59PLBw34Qqo4QzK6avaGytXwPqaemjaYXPWhYfXADmkjgLcgSP6bvHb28idUR5mGQMwcBSg",
  "key25": "46D2xnvW7PEojiSworkWmEHqQn9MYJoRP1fR6oTyHEEUpVBhGxnBxzffpYXYN1bWgUcnM1SvyXX6xNB55JVNvjQW",
  "key26": "4FkxH3pX6Lwg7gXgAWtTqZQ32MHmuzJKb6Yj6LVH9EwTngb5VYmNBXS5mQtrZyiL5G8jPi1JYZzcPBuDnDfECnrh",
  "key27": "FMvU7MfvCNqKxXXgCaox53VYSPAsqhs8UPNmcAgkHaZjd3s2hv51HQEGHx3ev1gZKaLPqBdso6dxBpgvk4s8F8i",
  "key28": "5BnkFZkScgHMSaeU7AMWU8mLtirCnsjtdtwRnjhMMbdPK9kuZp3DtYw8ehab23dy4ejMjizsK8uJRqMH7mh2goRZ",
  "key29": "2zx9BRjFBmsHSqk75UwGo5ARVkxqX54QYMX4PF44Fjra764BW5PeeimhR9xxnuLUGt1ZrJfJ9a6NgbVAWrrgV93P",
  "key30": "2kRc1x1STrAzrYD5QnKJ7SAXYRxf2rQ9z9JUy1braF6HGZ6FkQ5Etkhmzrk2NLZDQjRViT5eXPdMaoX6iDqpdMPB",
  "key31": "mavBDBBtNM8YcCG5qeBGjf8Zmaz2nzf3pUyGbk7mG5tDiq2HWfW2DuNZK8mXxTGk6eAieD5G9sWtCLpefWY6U5Z",
  "key32": "3jfaG4wPLjJn2AT21HAgXDFRVkXPJhfwyKCFoY765FMtPc8mEfCeV3jGfpcJLagnf8WL8BffTFFJM2w3xmqDx7q2",
  "key33": "4RzVTt5AkC7hhh7atGczHBjBUMySMNkTbF8yDVHeiMDPJ6uWdpUYXuk3erFVA1yyevBaUVXVzyjn5UvP1ZS6htz9",
  "key34": "4qyXpsik4kviBiyMUJHi2mgYHPoVPEsxLnJ3bkCz3YouzYqhgKf1qgmS3KXCznDcnjk3ihM8SWLeVKMufz6rsgZG",
  "key35": "5F5KV1iSvC7wRRHxE1WFN56JoNbcVwJjyUW36CqCcBkeUJ3yLexgAvfH5ythAdeoC1kZndLL5g91tNwTdvBNErCo",
  "key36": "5c3TTC725wgLLpsbCZodBvDaAG44qRgqAXcZ8SonHmLE944cK1UMfLTDLMiJxuxSkiTNUPGZUbe988rHLoN5UNCv",
  "key37": "7EyP3MewinBY8nWiPBznqwBh3kg9zvE3DY9HEd3gPajN8TJFc41RdGpHdfhbjxoWdmCGzyocdLC3ipAJiATAPG3",
  "key38": "RANAgAvmKBU5rYnQGiZD4eGWijmnMQWs8MuDCXPA3ww9aN2G53C5WGKZqTrgDv9pRLpuGF1n6AA2815KS87DHNd",
  "key39": "5vLP8goDUaHf9iiiTyPeemd5eotc2YYfbkb9z3wpVZ7YsuDF2NfkNiY4w3XzHMWZSfE3s7tfUbUYURX1Qpm4u73s",
  "key40": "4DgsxC4eYriuSiobC4Y1S3M2jCRoq8fsAEdMLJt5rg1KkF4u2UnCp1H2zjwgtiBDjTKQjGpcrH1Kno9NCKD99DLX",
  "key41": "2bWKeJvsSCr7eyhQv3cscBGVxGmGDCvcdwyt9zjXHsejoRLzmKJvXZKWok7RxTyyLvpXjL7cShWFwxH6frqipNRs",
  "key42": "YQknMeJmMmnrBd6MNntm5vY2jQ61UNmRkb8APe4VWT4cFde4Rb9Qn5QGLCLb8PDYihx82KSBe8UV4tCJYagyR66"
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
