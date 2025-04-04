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
    "2Abr8ZUHH6qn76xr9cVuxwZdwP4ZBFbbQSDVsUp7m9kGQRyijVrUR2NqHJ3DWSjBXzQz4wMDY58WZMCxr5VHzC1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xA7eCLrTeSoyHF1eV8kDJD86TWKsBDC3LazAaj4wBhhmZjAupg6xh6kf2kZnRsdteFHd3L8jDQvXnr9TB2T212N",
  "key1": "414gim4YiEgii3Nwd4uRVGmXWizvigjzGoy3xwuTrnXMGVcDETu6zist3imjXxegdBgh5uUgvP7J8XNeyRGqhwJ4",
  "key2": "2SBEUncrkq5Ay6u1tgPTMUuzfbJcxyLhnqUFfV7jgETe85MccTgxcVV6q6RnZ1Ys4i2pcytntva4r2gBbz7yzdSN",
  "key3": "52Qpyw7RhgGWfeaLsJq2n7d2jDqMm6dDa1wto4oMTC9Lzzcs6UzghsV64LBL56TAGqq2EWea6SCQmn5DoP8NhFnC",
  "key4": "5FEiFmSs6naSiNZiGCzEdiwg6vBMETMs2bzE87FA1Cesfeau9McCv5ibzExhnbttCcsKceAj4xoVQqhUhSpcpC9V",
  "key5": "3EdTDzEd2tMZ7un9M9vBdmi9bdx9fj3tni1tKJBNz21uwaYpPhYwusqnJZWBH1oXNNqhEoFhYtiAcz1JukKykcDV",
  "key6": "xJSP7AStExm3jHQKxT8bcuKKyua5cWNmpaWbGTTxgXwNEmm9Lz89EM5ZrN4nbp4GqVUtsLwKUpwxsXgeG6o2xCA",
  "key7": "WosZGD2Kh9QwYZ73VJFUshHhXqBuXDfgo7a1s6XSUdSKET56Uec4J3UtoQhk4zkmpKDCFHo56gRjA5ibhqhnwSj",
  "key8": "aTWfr2tNnWCvdqpkKwLFk9HVeeTyPCyMg6vboFcFJJnePcmhyLz3kkpJDfay9UabGcKm9ZFoqBHXVUFByd9ij8X",
  "key9": "5BgFKjosJJeJc9ME2bpbCjN6K6UMAV8s1p5RRSRTCumyw2ViheLyX8vRBrwPt2HR4tEPhQUiEbpU827tvsZSKeUF",
  "key10": "4fpgCDZPncy29PacwizLbHwEFJ9csjN1JmJSnkL8BPLV3Ge9Zi5vRkvKonXWzECM9YjjHm2qdQKfd8Z2nfLG8RPj",
  "key11": "62aWtC4iP8EBS4nGhu3heqUJa1JyycqVcTyJyjGaAb3gnYQW9CLrveAz5jnE3RbXMpJEgB5HampqSXSzCtFohALz",
  "key12": "hUqzCvYABVTWJGT7zSj2swYJERits2CuiP1hvkjmFY5YijU3ojceh9ZhVLQoEAqz9dDoNzcCHuim3TH5mccUnnb",
  "key13": "2ndmzPwRr4pck3yn7cwnm7uUMNpFd19xHFmCWs1n13J4wcVdGLCmAo5HXKL3Fft4fSQuYW6HKDc2sLUA2vbb7aEG",
  "key14": "449yZdASQde4oBujDuQwFgUxPAQJJdER8xuS9uYfPn8uShHGGJ7dsbfnNccGw4C8tRrjwT7YJc4V69kfgFCGf4ys",
  "key15": "3zhn4LqTbVW5ojjs3DCMe8fdstmDMMmGvrmQcCsRM4KduyxBJ8m8K42xiLP41vJbToz4dkN9qQnmvYnphwNHzkuB",
  "key16": "4sVSuzgdjKLuV2fAiVBpVczihL8R99VJNqiLEkzGsWAeVqDKX8fgiwfwc6bcavUZ6zr5z17xcKUDka2QXyJtdh37",
  "key17": "51UBzEpzrcpmQEWPMrhxzS15s3sx93aTyhusRC4wnTLuBiAedjV2JJ8yFNThR7gcmeN32VHnrvzGJxrBmSy4m5W6",
  "key18": "2N317ZuTZiDd2KfRrz2mGkdPviMw4vBaHtc1APyRKn128B4BCKr5kfrCdFKvLiFHr4QaiG7ugYxqvycUA2RaxSwG",
  "key19": "2YvLBnhpwo9Yy5tbjNrvbhhnRXKpX2f4KpzoWRJScnzPHS4ckmAPE5MMi3kj8y4MQxuYX3HEM21uHpAYGqeVzt6w",
  "key20": "rgaeQxAzAb35r5nCG3KrrCL248gMcMB3TaMfgugRXus42qUU7HLwVzEdvAAUtKGGUojzMPqyENzu2Uza1EyzfdC",
  "key21": "5FMZheQzC1ffx7mgSiaH34Ao4FqPSkYvCHfpBXpku8qZ1n1VQcoSo2hCXKoUM9riAQLU4swreyoxLtuP44v74m67",
  "key22": "4TJ6eheJQVx9NnnZTuNf22RHd5z5GRzvnc3xR7vxu7k6oKrzKdoFbNApjUtVjPDyqQNVbcMG4uk9eiQs3HqKi9Ty",
  "key23": "3F4mxoeH7achbiDdTnint2Lyn48coyaDsYH9vF9GJb5EzVMTks86f6dbnFpxxGA7VuD1Bu3dMyQray8rgvkUh9NQ",
  "key24": "4iSq2jaPtxsSmvk2D2PvPNTyM5rodgh9969i6XWEZyNNZ993ehBnRaL6Lft3d8mbxSfPBRUMsXfVLyyQasNTcaZ9",
  "key25": "45RQd1tgZvEQeuA92GNP8ngM2ayXYYAusqvurfZRTarUnEJyk4BRZq1fArLBimSJJC42mitNCkuFKm5sEovcG15H",
  "key26": "4Vo3yUsay3UcL2uXkfXqxiMQAGibNdwCqyv1KYKUbUWjoXMTLWgSPHWyKMkzj7WDY9fmcs2BjGriKLZuyB16FGCX",
  "key27": "26d8KDA9T6z7mJDpYUPUPZCSq8GsvnLJ98Y1qi8ywuPNJH6L6JoN9KP4qXhAkJWaLJZmgo55qtmNjas9ZCL3StMt",
  "key28": "2ETFSQqwsA8LChRdN2qgLxZvxru7tb42KGwk58FNiu6vC9isEsFS6KbEmsXgKjSd2v26HRQTzPZTmhWnALfnWJXC",
  "key29": "DLThcqZo86iuvETTApvZgXjQFF3MBSdNJbTHgHmArKKXwtAYp1Vh1vMnxLw9S7t4TZdupHr2MVDf8m4aEVtnPfR",
  "key30": "4mTBTfdoCsCYJuizwJ9qpm38pGtd3ngn3eM2M83mx7PmjsQSpVHd8z6YE8ZBALztUpH73Ri9kgLEtaySGMngGhn",
  "key31": "BXYqngiMNP3NuHmCP4gDz9ZJq6JKX7cndPctCkLuNDxukmeRfQzwVZDHnsv2RcqRGogMmY3eYNZurQLbX8XXMgH",
  "key32": "5diA6s2hTn4JfPU23ZyqPDbYz5xErPkvuZVJ9XE5HUCZ4LvfgfTEbhgWTF5PNN87doiZk3cGS4qsQvmaZ61BWPc3",
  "key33": "anWa7MFjCbPKEpASADNjrPEAXWiqp77cQnnJCxaTfUCZ5JLmYrtL9exXNcsKxQu4S7g7NLWup4DxanvSShE1YnQ",
  "key34": "3evcDwu2PtJ2SnzSWC4LCsarQ3d7FrBJ3EuzU2cmytm8Cktt4Ui6QT6Df3VPVkHUTjYpDVbxLWZxVewLaLpooreV",
  "key35": "3hDVdBNsd9dpDvrhN6hQbcfpR2B9JfyZdfPXSZP6cij3nN3ytYKk1s9kW1bSRPCnaeZA9ySjz4tgYbMsGk76y4zi"
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
