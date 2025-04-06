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
    "4VjSZ72nub2eMpwknjnf6snPx5xxrus7Gp9XMmhnXjytAesU6V3jvxSNZ8iFoipe1ooT4r453eHbVfphhdRTec98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDfwpKp94Uy1wivKR1Fw2g4DvLKoJcaBHsmRMmstB6Bt8E18zhx6EX2mwZatTR4xRTursT8p7Kh8pXq13fCaGjZ",
  "key1": "5oCRhk3SviAwUjvzPYbvMV3nPvbpurAxe3XYSSmkrBpHQNhQcRwvxzZGnoLoWs91fDe8fAfWvnSiAK248yzy3DY9",
  "key2": "w3SfPX7UYSQXzjyjuoYmFvtiGt8ofy3Yn7vfZbeye8mZ5zC2CuB7JGL6svEWL2j4vm6qY62VpyzkaXSS3fU8Ji5",
  "key3": "4gHvhyHKmSjQiujZbAiv7C5jJCwVgi22MDAk9HMwwdPKaGDPpJ2WBUkAPRyArELDcZ4tmmG1pMFx4P7N4V53yzue",
  "key4": "5yaZgHQu7razsdt4Uk3YV42F2LkV3myx7zkKjsL2bbNxtmGwGCoMKEGXeTTZe8kbsU8b4z5HCioZrqyZg8FABeXg",
  "key5": "41Yu2jhi2t1UXdFxqdrigNVDHmSofhKxGrNLvB7VKKvNiS5YUY4FYC5pJWKR1VGtSRR6L7bW3Csu7qPMZtbu3Q2Q",
  "key6": "48YYr2YdgzfrRD9XrPoh9n7fJPinNJrw1rw3mcePEg5oZvJtXYhTcQqpJnZaM3jB2KbSw968DVXGsHryjwnK2zc9",
  "key7": "5mLSedFedLrv2dFQTW8RWBiuFMeVcD27tpDstVQzxtx9D48wPpkove1kSA9onthJA9FkdWT81XbaKAXW1X5x6ZeT",
  "key8": "4r7N9yt2tjrm8zfBLayUHLo7P5xbCE3MVybxv88vUAe7LXA1nSSVqfuyTXo684cf9aYGYE79fdPcqTbQu6CGE5Z2",
  "key9": "5D6yrRN81UTQGgp2QPsSgHvscZjZugv62oyqWCSBLsh5L3Rakn7MnSjLkpwwWZeyyqcC1sKRhKtzEGMMCt54Huvf",
  "key10": "4U5vTbgygU4wgVjpta8svdx9QWqUtq7ZTWk5J856Lgm4iaqXE8PgW7EiCzt6y44FsYoH1jDxHcib7rxSLWJNSLKi",
  "key11": "3o6LyyNuAMrHCzP2C2vCnixJ78SXeNE4TXK36PPpiMRfAVvYiM783tWCaS8xMLRuqgUdM88t55fWAhPN1kmsWzCB",
  "key12": "5LvGopWhjg5UsSiGuasTkx6EspFGN3BnxuuQzjofLL6TAwqMoXw5Lnjf6RiNionKYkhNUhk4enV1d6VEj3XhYLcz",
  "key13": "5dSmah2WkX8foV9Mi4uSQ1rGdjSi2NgDCuaCg5yNLetrFRdu1ccqJVppDDpDcvWsFuFf4JVEYLejSXZvTjm32LVu",
  "key14": "2diyoXpPM8zC9V8oWJV4h8yGaXG5g8NxKzJoKnpPjG83xkTq5BdSGN8fTe13isMBVLFA5ryHc6vy3PMnAtz7TXUR",
  "key15": "5TghS4EhL6QxG14eMTByELK14mkcWJsXRG1oDTbuRXKGaei8LDjks49Y2cqnAXDNW4zFw9cFrPyzwfsyQ9BhWTSs",
  "key16": "4QA1HjNSMpeEU3sEUYdht8D9TgJxuhhB61WqFanHXobhdui95NvfXw697zzF3D8GekgfraJ4NWvtjDekGGrcR9KG",
  "key17": "36XygHMU1qmo7ALFoY1pVaz49mvMwi3ejkeRWeaSqJx4kVYSjk6hMV6afgqJds5vxL2ZjSwD2HruX8FVpdjQ7K6F",
  "key18": "arSZH6VKPCEjB2sJ3iq9UW8EKVX6zAczJbwoEM9pD1hqoMpsmg9pisURfBjxxjCtyAvFZJ9Fmwi4BCz2iDBrYrf",
  "key19": "2cYmmrRkWXrPoEkRtes2kj82WvXZCGqNpYytp1K8hizF2xPrua6W4kFF8k44iYqLNfYd1GfNYPdReU55CnUGPk3X",
  "key20": "29qWkKWyLm3sQZYWxcYvakBP2be5fVmHmzC2Ci1bpPCEabR84uxACkp4rqLFEbmdq1VtNSWw9XMAe6aRxC6sX95p",
  "key21": "49oyyqGB3BSGwa1xBNoYyMaMCnuw7akd1LNJL4aZ1VjGajEccFU36sPnEoVaTES3hXWmgYYjCZ6U3n7XH25YKPSL",
  "key22": "4eQLtZG4JGycBuR3dhZtLr3k4Sqdc9Pip1fTVEyMtn5ZKwH5oAFDdyqREki27tzPHUFM9sbSNS9E8sthCyx1MkBL",
  "key23": "4Muh32nGfSdoqoWBV5PPg31dxqbD1cDYNsahEBEJNaM845k4M5pbP4KMPShD8XVJ3azqEaPZZXqu6Znqw8jVMRSn",
  "key24": "2hj1acQaHN53U6uHYFMHthpg9xWg1bTWS2t1vaK6XEq7uPK6C9nWv3YsAdnsTmJhXg7myx3eK1Eah5W8fj6LabrC",
  "key25": "49RMrjq4tGuAuwF3iY72imu1AxxqYprp6qBgvBScATsqSvvWCFJAAL3H9ckiHn5jj1ZryWUN6S77WT5Hgn2icZPF",
  "key26": "5MtsKKCDFbuwug6n3nUhuJVJ7GVB9kzAaxYXHfSkG7G8qfdyDrh5xk5j9DsD2UZUBjssz5aaFR9TH6XEUXjUfnTU",
  "key27": "4M4qkC8YtzJtd4TeDYFxh3v6jnM1Qfa4djT5JesdL6jwfdC1wkvRb9CoqkjEo1a2kEPn79Vuzx3DfbG7YTQkPGPg",
  "key28": "3JApdfgoZbZDFUAZhGR9mD2QxansD4FdRiBJ5QURNnSQdKKjKPqJdX3UnXoTvAKiS8hNjZY9mXJbeAQcX1PDY1v",
  "key29": "Xfq2pQndNp6XZfqDB4CjsNuCSvvAQdJJ5RBSdwUCfHXLQoV97SfabLeiDxf78NnjmkTFGSQFPq8SnzPtFqamHfu",
  "key30": "4Aocrp2ceEVZkDT7bajFT5t59ev3XH4buC4fh2fL3TbbR4JBptpKZBHGzdNzBeY29rA1TM6ZNwp66WH5AjtfdTUb",
  "key31": "4Mam1M8XjfWD9oP8FiqDXBdm1uvp6vPH4Fw8M9Yj2wqb9ucmYx4ECuusCxXrT46UqSnwyARgx74C8eaXaocruywj",
  "key32": "3L4h4EKMKqgVoNBUhFcesPMJN8K7mZbYfFQ6cLi6JvcnehE4jRnouDZN6MUkh62zTiA8CfhSHwiSHJV1o6w591Q6",
  "key33": "4z8QMsTrLkbeb1vKvYUiwt1py4YwjbUwJSh6xG3xdjCw7HTbpUjX9fLgcZ3o3TMFtH8yA3MgetNMZavaEBKH5mZU",
  "key34": "47FFZW2Bw9eVPz6aJeWoUGpeZNwLeJTZS15EKzysZpHqFjCCyJDeiGiAwFA2DM5beG4sjKfRTGjQ2zHfwHbneokg",
  "key35": "3A4vqu2KahTK5FRTWfjnNEczTgxfZynxJepQs6Tj6Wg8tWETYcmhD6rg9is3augidjmKZQrc4Kf87HKLiGo7bjp4",
  "key36": "2UMEzLsL9NJqLPPAYKn7pnYxntmmTu8kvNq3dVNTe1ngXAoBC6NszSd4VXq9sSuSozgujgi9rVgQpJ76cqZMBarv",
  "key37": "3STq6Y26mxP8pv4stC6F6N1yBJUVXR8MxiLFct5uXnVcZ3Jrm7jwqsJacxoV6Tz7ivn1YBbWP8zGQPeGELqdbTep",
  "key38": "551ja3jPj9AWxESzXNzJUfaC5yuRSCGDk2NMAVnW866aaS6WUiRvDvRBG5VQogFo8NWs5g3crRxJETdfHMYC13aj",
  "key39": "2YCRUyYC1on7HSowzjo1Kci5KyN48fYy6wJUyX3qqLagakXjtgJaFSgEeuesZDSo8TJYf1qUXSgAQokG4Te1S3u8",
  "key40": "31tqG8Dy4dckCnU5QsdCntBJ6EXnYwRUuifHWqJLGDChVwdLcmDKe2UwxqestHaNseGDa8B7pyg5YdWbah6LskFd",
  "key41": "47CWp44U5CqZpJQ5GuxDs354rfiDa84rv7CxDNKT8DTJKjeNz2VhbpHaHwGGZnRYwJxTJqCrqb2L3HLqeh25cSMU",
  "key42": "5pVC5cpmdCUXM699gBvvSeDFe8e24NMYLzQ9XPeKg2mYa1LR3JdPrnRtwb7qTvkQimrkMA3AeSaqNb7G5ZVnVkaQ",
  "key43": "4tMS31rkD4TxACoijBxmjYhesyyVUuBcgdHPBmrw5kqMVbE26ZJSGn1KyTwGoqczQc71RcJBV1FQHa3oPWEnHWdL",
  "key44": "42asBAosijQkYydiprrEKGZeFFKJ1JZ8khKYCg9vyY1ZbMsXjyfrb4jTXVZkPfv35JZiam5Ss3w1akk239FLCrBn",
  "key45": "4yx2tvQufYL8pKemodN8mTAPJPtur9kJ8T5xRURzoBadXKkLW9KjsX2ASvWrWqchBWTkPabUt9eiFBEC3nbxyXNi"
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
