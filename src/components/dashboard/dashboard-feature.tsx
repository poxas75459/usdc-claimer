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
    "Yt85oMHz6MfY9vEVigN122fFmtQA5ARufdgxGuhbACEKtPxfqxrgXyfGciZujxqqiLcnsWmUBYmZUXmbBZ7Ayse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFheK6PhbD6qpDh3rz9cFVEMm37KTyWAu6W2UVJQ9YmsXEjgGsLgME5A7vk7B22aX45AXLAa47zWtdM986piDaG",
  "key1": "5toZFkiwgdDAUrGn7b2hJSjw9mxEQVJKEChsro4jLAzeFFTPoEPEd3EwaeXmpFPHsHHTHF3amcJEQLUPzxt9QHRD",
  "key2": "4mQ2UXpAAdTnzcf9J1hUUFNjbbowmXTDLsEGvJBYot4XDWAmWStJvzV3DrMabyPvu52wZBdmVGVG2Wou1bsUXKeL",
  "key3": "4UjYxrKJUUkPq5Cbycy2Cpjfgp1eX6iGBfAptjdE1X3rBWTt8hHPXTsUdJkSZzSxNXikPGuoTi2oiG3DmSmSBApB",
  "key4": "2DaECtjaNLXHbmqYUPR7y5h5AeqmrAzR48m6TnQCrFFgo4eW233qr1D5rdcGzd6NWEW3kJaPMotegYMBPM4YFbj",
  "key5": "3Hv4UsaxTL7TQVFxE1dV5vjqAFAwTCrRUa1tRuZY1iX8cBB6jU3S5NhmGKRQDTfdZGdfLMUCRQePxGZkvWYnUhm4",
  "key6": "G7Ch1Zw6YaFK5v4VSzGbdGDaQEsg7RgGqc2mWwjc2W9CPVRmpbiiWXEFa3T7zaaQmCb3eNhuis8h1mpAdM5eK7H",
  "key7": "2SCWLkFX8GxiN23ZCMGZE9Qu2ni1Wa5AdgAVmKkRyUeS5jhakCqNgLFiiH54LoqeiHMMyTqLyw5bFEsfSs7SHQCC",
  "key8": "4TxU1ErtcpQLc4inKfDhRVkuKhdWnHrXptAMYcJEj5Y4MKn4gqriPfDj3yhGrPdB3ug7icxT3TkBLmndet2cT7JP",
  "key9": "2yFWpXXxbveZrE81xWY5jNGbu8DiQoafUD4jmcKs2JuVj6pCNByUw4FPMUJb2Seyd19zXVtztsSnifjdseCBK3eq",
  "key10": "4dWrPk72GptjqZC1GViNtqBhJgwKeUqBP1xNnwDPjj39MXrEMXzUe3ftS49hrf72M2VPRw59PzHdphwk3B8XQx1x",
  "key11": "f1PTm2yUo2GCf3kwnKYN52CMPBRLKXTwwsiPwqmQgGpuNAoFK76stLVQQjfivoihfo41W2Ke3anGZdgRSyUXnLt",
  "key12": "66i9kPdJq6D55QftmK2uFLAgqKAMDS4x3XLvf2heRpjZhg1XCSPqWxwSJBGrgPKDQjWSrQ87gTeQiTJoccEZsGar",
  "key13": "2edUicffWnRwcFenz5ciVN2qCaPkvd6Ec6UQkWBWZXcKvDrpkCXmGJi8j2uXCYx9vPUzXcx2oGEsqrUGR1tjZqKp",
  "key14": "5Ydt1pQvNCaedbM3AcjuQ2MUpUSs6jGPm2aJQya5oMSH1cdxuJtPbnzAXzXaqVp66G4BZtNj3t2KaNgoGkqXYb6t",
  "key15": "44yW9WCUhCwwH3xnPt4HcbEetQuXxG7kyrR3mLgwnhpVpA8XcGfMbzeP36mrZEdqtugZAASm2yJ7gvacfH5Kugbj",
  "key16": "BGP3GNUzXDpKtwr7G5t7AJGonWtAWt2kCAhLueuPsccP52SGLaoUCp6fCmJZFD874f6Rpeu9Av8bQUVwCfvKWbC",
  "key17": "4ESnpukpSuVEDEpmNrWHUFjkz6QL6F1VawjnuwL8NpP2smSqMWsoJ4R8kaZr3nUgf26W6aBkMrw8PmL94HeAxpfJ",
  "key18": "2asqN1pkhzFdzjBvWHZGpDDKAymtor5MHD6EufDARfj2NysWq6m35es2ANcNPwpUNJWnzwnLPovS3FmQAF59kX2Z",
  "key19": "3HG3qX18xuyGuywFuPCQksuR8D4SPiPP9exa1a9jycHndkbfdQ4m4AoqqA3EELbV553phvoomYgCxcNygG2xdPnE",
  "key20": "4AqdHh68XDMnVUYR82vMdJUVm38ZzwQBd6rSqgx4tELumPXv1jKvmZqCXxe43kCpWihYMmCptFYwKaK7cwAx7yQJ",
  "key21": "52QWBGRxuE89MBmudopqZiBtcgGHnx3arjzfqAQagJbYNe9ieF1be6B7zrb7V7f3uTdLpbwDPJkEYdt6v7se5EqY",
  "key22": "5Cug7HeZz7pKnE6qaqcY262f5dWftwwn8giSELxiPQzZBoKavzQKdFQTrRu2pmZGdpWzacRyGxM3hiPXdSFPR6Tj",
  "key23": "4e29JhduZiyyh2JVnFZ91BwdzRTDnjCjLaShCoF9bY7CJPgZQ7MVu33BZbzxu1qU4341hP3MEVrae8ja7FKnW12F",
  "key24": "51J114AScwu3xcoqa6AwWuMCH5NxYhV2STMxfcE8iHzHd7aukTQbsMsCUjPZxLp81iBu6gRRocmN8Gub6SvG624F",
  "key25": "427kWcaTM6dCCEHiUFGb7gL8HdcP9SB5bYHkwgqRUwaLjy1uTmKfJ4Ni6Nu4E5ucvaWXqDQrBzAVCWQXR8wq3ijG",
  "key26": "2LSckqjHhm1ztjWX7d22keCTGFVCagiefubDhmcDZe2yBC5MQ23ZqBx32G5nBYvGdGRNSn4WRsbMk8qwmxVCTVK3",
  "key27": "3ED2sxzKffkvfBAaU8nXGkzZr8xzHJN87LywUK2a5DNbtkt2vT6c7Cgrafjv8Ucte88ELhvtwJ25z4dAtdKtZKXS",
  "key28": "5xjrz3hSWf7y8k7RbKYZg54vqVZ7yWJKmdVkJBruvHchhVranKR3LTVCF5b4quo3znsGWUtnm7NrvohUbBSwNaLd",
  "key29": "4FkmvhHWcPe7KFwFkdQ8qMSJQTxD3TeDG2UgZf983DiG8U77Gje2KMdXYrmgrtwWgwShFQe5bjRDsQTpypv8Ldws",
  "key30": "3yYsC79VAjK8ksN5Kw9KPew3J7vC49uPjBFHLdLSBasNjbQfyBqkWemwFJHNZnX7fTGNUXthHZdaohkNBsgt8Dps",
  "key31": "3cSVDL9pzytpeRgKfDPgKZQqRrQQ3V6CsjrmqsAQA5CAiHtrCzk4DsG8oyDuZq4iXKGzqqmfr29Wmh9K3PEshGZE",
  "key32": "63hBZz5gXsSXPTHvuKAmhxq5RgBMQs5q7M4y6aiSNoYc1fHayqWTELLEd6s9cffQqsbButiqGfK1WeZktN3uuhaA",
  "key33": "3TbXVpa4c3CkZoZ8FQt945nQAWnnDMuaHHsu535YRn9nhCQSt7ZpSwkKnkDxfLVYHnBgyLLwLt4JbNszFuLJKSXZ",
  "key34": "3bBUKoJpLMHtHho7zw4kRm1rxK9LuRtCcjfCvGMyYPA5fUcbqiczH4peQYHW9HadFKqhPf5osT4E3Wd5MC96RM5t",
  "key35": "3FnBcZaGU8mZZ7wNTS987T6CowkmWqL7meqc1gA8jYU1Jvzr4afqGTRc1YFLTCBREi4qx7xPGaJ646JVpMLEeLxg",
  "key36": "2NW9GbBpzGeDZx7YdtYhqiordrc6cbdN8U5CXPehHEosocanZVQNZr5Nx931xYhuhCwbpC4EDm43GnFjK7mRLdhX",
  "key37": "4WaNrSgdeW834obyZ62MawXUT4MNpnRCj7Lr5wETUurqD7D922ZipFTD9Tyr1nHYee2SNCAYF8NX38T7Dssdmy7a",
  "key38": "9vVTwfz8eXfBwkGhCvLUnchNUvhEjYxULpZ8ETT1mFkPxPh5EgV2mhxSb1rVUdntZCpbwkCVDe3cTgwP9ssD9Dq",
  "key39": "5ncgwb8zqWQ2ic5nmC1WmxdHPvemXbhcuub985W55yy9iW68mVRvJm3Hkds9mFMTLT3V8BMek53VJQEicj1gVGeX",
  "key40": "49wkahHUXw2XrJm7ENeRkAxMAQQvYtD5vct8Nat3RVnKXBzK42AcLVi6bizNQG4SNyfnTLMXYCGrqeenbYKVyoco",
  "key41": "WAWVuFwRQ3ARWgZarBUdXkxz938Ngc2mSzev9MUMMsrjeG6C2g4DivebfHmUAj1xW8F2YDFxYZuDLF32Ju4Y4rZ",
  "key42": "5o6F2u1NkrkKnkMP49W5akKs1p1qEMNdZdvafLdyeDyQ1BkeffJyMB5twLdBAuK9xUKmu6tDBsXmFohTAx3L9ezM",
  "key43": "5ZGSdAkybLXrn5euhbSK1Xh1L1U7Kbo6ceva9xocu7tAMBhu6hN5XJa1EEgmW9U77tMyKDcfEzzE7nm2k3wR5P7q",
  "key44": "2xMvWfnUEtK9YxHvAzfYjFDhNWsreqzMhptH2DbU5n4sVo2Yfw9BTmY9mdFuXBj4635J8ze95vEBoNvxHRDjvGD3"
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
