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
    "6SBtxaHhUiF6HJmQhXk6f3qZZmZo2gSN1U5hEDbZ5sGxxNK9JzjcKmAR2mBW793nVSSkYnsq3amHhjAniBvACvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mv487YzQEbV2bh2A5ksVnvsof1oAPsJcZhi4JDoF4hiym2Atb1USmcQAfJGR4K3aS7ypSq6cCpJhm2zE8DVVGC2",
  "key1": "4NdyS7Gd2t8bLqk41BnidyRW8tHqhhHwYe2kZLGWGBsJm3NkcunoT5H91TfeV9q5jYh9ubrd8873cHFBqfF6GJNa",
  "key2": "32AEwLaygGqeXLgxrDLueTpyi1m4XjUGbByDsVZHXDEz3hYnhQDCg4k9FmD3erH6Nf9Fxy1j9Xa933z5QnRFx6s7",
  "key3": "22XJSbvxeSFHSnNGofpz6sXRcgwgKMgJ6suhwsP9AdVhjUKkxWQf2P7Bcij3sov7GfFLBwEdDngRdox5qEyFiNS9",
  "key4": "39KFcFBc8RLxK8yGgsV86s2e6qZFdvb7UKJZ8cmZyYGYT3RFQhe82Uq8R2yeEmYsTJyGJXV2DcosyTaa1VBFuVVk",
  "key5": "3p4yjqDD4KBK4nM3KC7K32BzGVkJX1DVemD5BrWUy8rJG4svZTe3SYTWbqu5Xfb4Psyv8RzNuGrU19YvZLXc3dfk",
  "key6": "5JNGdKEdvQxMJtjow8zey3Enhg3J9FFcurQDf4Z2Mk2fYCuza49rL6MZPUC854Fqh96xTNLcDAs6H8BRkwJNb1t4",
  "key7": "24qG41hGpJVWMrvupTCitEkm8vZGRZDJnKgkw3iUSznVgykaGQ3zvhbJSAtM3U2WJdu2LDYWwzA5Dw1Tc6bSXe6b",
  "key8": "39iDViiqb3sLpsHKFpBYR4XqPME1bJ8mDNjdjyLpwhdSsJQLzZ77Yu6UyPbMt6VesjXUFgzVYBQ2JPBdCtdigAze",
  "key9": "4rUepzwgKCpCH3hn7kBon7sZb7jF1bLKGeE45GRoJNVKUaRR6tVvoCaALSE1rWDZ1Fzf659FGBjRe24k7vybnSC7",
  "key10": "3ayrBkSNi2dngdCZyzwzimU4aVSAqpfrCvtF2eXK6T6KPfhdiuRpchARdizL2b1roNkVG4NWUewHkmbcDx8o8FjS",
  "key11": "2UrxN8i55FJHJmFSYqhXPQcqANbDnbzCqjcpEZoEBPduekUZBCwYyfSa4V6T1UJG2dZekUcuQMQkyrs8mqGuvptm",
  "key12": "4hPuJtLbsFg2966R9HEUFKjfYEgdRJBiQVyw4k4YjGwbwXoQkbxk8BYnN7MF2czBKZpNGFBdb4uq4ghadFVRQy2e",
  "key13": "3R3DkHqKcWcDWtXjMFVCUUuzm1iP8dcSF7TDHxBJL21XNUQeou8YeZuTPvM3T4e3cNY5RV8tm3cS5AV1VYXcEeAc",
  "key14": "3PdB3jNRDzrcGGMsiXxaoPxXCD68yjNaZxhffLTSTBMc23Q5BGD7zu3XAQUjJ6usBSr8EywZgrY7YxTt8AUcYK3X",
  "key15": "52h4XuKWLxFAP47FrnypQE2rkpFGEyUfkwgBPNzabQb7FNNUowHuYNbHqYHWpFv8sVA99szHrBR4fYskGzWTYTFk",
  "key16": "exRmdiqPJ9BDAxdVpXJpRxfKgdfuwUZoRRHD8aQUGNbKof2gKkfX7U34YsxS5YRXrmAMQ3gCwrdorHYKkcvnH8q",
  "key17": "62VCJLFAE89q1hX3gn1GZg6xhR7JxPtyM8z38WEfGyNaincyHGJD9pTrHaCExcSNwefHGayS7R3NWfE3F3otZGkM",
  "key18": "4bx8WutyknWTKP9jvNEsQtDJdEek45euf6qeN4M5fadjHubF3EyHNnr2qLE5kkFqNbveVRkQskEQ1q3ukh8osScA",
  "key19": "YKmPQEpgyViJKvJPVBoG8TYg6MPfqPkEoRdUUGKgVqGTdr51SUJ6dBvpsSeGnStJXJt3832GUf2rTw8qnspR2bf",
  "key20": "3pRo3TGGgM3hjLTxHYZhdEDYzcCtofX1LxWGzaD12gavU1fMbpS5snRKwjFPQC79d6hAdUn9jjiFcu3nspahfWZn",
  "key21": "dUnzd46heFpgoVvU4XgjaHijhGcFLum6YfRQrjfrAwzTKwaVBV3teP6aYz2s11DSQsyEqEsWwQweG5Qsji6VAt9",
  "key22": "3CbrPPYxDupr2L5pnbxHsHgY7TqYhwwEZX4cNHHaU4sxNWjP2g6n6j72mfoyY3s417jmqEx6Mv5Q8UFqhYQLz7GP",
  "key23": "49apgFnP9z2Xrbt1iaVXT2oTvbV32XuiwWqkzksi1ivp7RwmUqimA8oETyMGYQ4o8AZ58YApFAuXtQWTJAQ4wpvV",
  "key24": "5VN5B4NpybNb4L7LY1hysjgE34THPc5V73DG1TNjBfst9FiXTz7qHMxmReBStBc3hgwMHQ3rbYigiCG6PMRikXrr",
  "key25": "cfswJrhYkJzaUYDLwjoe4RnSXBuRn2gZqM4UG1hRWp76wivqo8htY5XW6nikUiewf1aFQXW3Pjco8QJmitmkrYH",
  "key26": "5eRyQzaMfmMNKL1MLDAQBQsYcALbQAwWDF8GrvTDf6usX89Wff1WdxmadTAVz6cubpkjrmX6erUM1TjDGyo94hqe",
  "key27": "ud6LLm8qDCqHXv11gt4BKGjrCVqQj7QhRme66yJu5k29yLxT7vgpKSrFcRWHjVaJE4ifXp97mDg28r7L87oFJjC",
  "key28": "3bFk6RRpANE6PsCrAHvg8HufxcFyTf8ak6PHfwFvfqNpKQMcHaqa5Bj7BqN16oCCsU7xruavVMEH6MsHaToPVGw7",
  "key29": "xfUNVf22q2fuvdSsDb6RbfEVPgFdQLHWHpdUj577GeWvJZurZwwWnuX5oGVH2ppud7ZjPQJcygEtiVULbyLsToQ",
  "key30": "3GNf473mFdy8L2rarRP5tU3C9LHbCKWjmzH7tLtafvPLGuzQ8FMCTceFsnHvRJiZCoRuEABJz57MKLVf1ziNpWv7",
  "key31": "2Ld4VaopGD4pZMzPCWnQScDrsvh7KU5LiW6VQ5jsiTWzSbVyCCHmj1vztDgNwPTKLTNTHhEmhazcWnbqZEQHVSn7",
  "key32": "3WNeNb9cFXcJgUwnWr2WjFYfALg7wZgvJE8bfsS7rjs82m57rzvBoPYq3hYnUwc2aUKdHLsyu5HGuSrzWwLFTEHY",
  "key33": "5LHA8Y52PSs4XC2g7TNpXSoxX9zJbgP26gAJcUX2a1AT12HFmiGehHHZsWfJGL8ZuXxBSKy1JhGmGg1P8tfvimHz",
  "key34": "2TSAM5yFTXP4AAkkW9ZWJB2iwHwF2F2Ja6WCjiPLL4hDNT9mPSXGbZsHg8tM3ARkPRGxyoVdX24MXVBnY3htw4XZ",
  "key35": "5sLNqqD7ofPzsEtfMSP2s6YrLM2HgWb3WTm6p2br6ru3ma3Ap7xcHteJJHK3uTseXArJdFFCp4rmjFniVEhUJrZL",
  "key36": "3NE59S8BHW9qrMiUpKFv4MSWNxfhL9exchyvxfzbaefEvM2o1rNXqF7ySCNy8UpiPsUnRmDdvqtznvd8CeXVxvDZ"
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
