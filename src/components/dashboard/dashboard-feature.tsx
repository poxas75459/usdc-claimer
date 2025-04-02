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
    "23D5eQTgBBeATndXhS1fAojyQFQJ3DdaVsX9mCFCWsqpkp1aX1jJ99ZJRy3Qzv7aUaCsygZkt6SBBFVXP5Xza7o3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHET7cdXTfwSiUCNdGJ1TPiqtsR6rXfwt4CczWa6fJh9qxdxBoN4HeNjcMstbj4SKHcN7kW3Miu883BpHQ1FkeY",
  "key1": "2EH6qxnTZCWRhuFbzgVo8JmWpCGeb1EHCWhCeojMWSDsNLRh93RTWnzFGpQWzAmF21rT3QtNikT1PKo4bWg2tGNw",
  "key2": "4Go1fgtZrG4gxX8XbPaoDMkHcod5U2QSysYGVPFQUPQtFEUboUnkt7tYZWK8RrS4BBFPJjkr4jP4rurPQkaKGJiW",
  "key3": "mMqtrfgbdpRVeYQ4SARRYmNKEWkRiXnEwfmRbshuVKmTWBZ6iGB2eprZibSULmqBDrghYvi5YgXXJzyQdXn6zL9",
  "key4": "3ackNFr4qzsrMkXfrMazrcCMQ3U9qNGHap8n2jPYWSeECQxTFQcVLs3RNLi8mc4iUqpjt8HfK7Nz1f5cXMA5nQ7o",
  "key5": "2nRrrpG5V8PP3hAXEAcjzNuZ3EJdhCGwPayaUzgFCkEjnm6eVbAacYvR3kYtHdYFsHmUaB8mdaVq1v9mgpyEd2Mm",
  "key6": "3qEZBposL9oeW3eBE3rwDJ7gaSfS9UKzGvE8dkKNPAZhNxLHjiUVPCpzxkUPzuJuKyD4we1YrDwcQUtvnX2wpNU4",
  "key7": "4oKYSBWRfrVHS5rv7HM1CU2XiogvMfqjTFeYwkwNtu6cST3sEaxErTonqhCueZfLaoZXHLmsnHXqf5irP5Z7ncPh",
  "key8": "gNam8XS8nUAJSwfYyjE2pVGGjRSVbRrSvEWciaNVx1sbNAyMmynqYf3diYTQdVvrSnyZ5nF9p4Aa9wZddSr9AnJ",
  "key9": "651DPHsHR6PtKdXxrWWY32ZYrpmJFT3V6MCTHAKFMEAFwT3mYtfjrrgVedRT7YFgdpus4fdjrft9WN33r9MkVZ8k",
  "key10": "4Zi1AH1XQCL4No7Le2Cpo5arbpCpQxiyiLgm1BUMK9qojSUg3EUQCDkVjN7mLJ1orEE32nFMaPN3ULEaywyjZ9nR",
  "key11": "M5eXRx9R9k1kWXvdEVFX1KQ3WoGAqXwYp7muVhjZEnBG45yhgrarkNTAtsnJsnEBVJ3dWzxvcvtpi3TANPiJ8hG",
  "key12": "3YTvXfMGPQng9FTyEGNBLHYbAd4Qv1YUVvyxKoWQ1QQy5Uw26vfjj3tn3XyZMcQjK9RNhbPoav7rXiv6Z5VzB7r6",
  "key13": "3VRgfaNrcxchZKjp5Kbq7JtnXchmWSVk1DFGd1uPPaqA9Ro18XFqT6Sh5oU4ruisYohVZe8pVM38rW63PMuWWUbk",
  "key14": "5euL9xYDcVjPSY5P6FKvsRXxxqaQxgU7Gozn6AycphLyf3mvYYYTx6HZskimZERFiBd6CFuL6V2Th4otMiD2tJhD",
  "key15": "ybzUb12peWSrU2kkMC7e4Fp7FfakHErJEozoznKg1cQgsRJAHEgTeo6WUXa8ehbZSe6PmhkmZTNfWV8LAKb8CYV",
  "key16": "2yWzDXSGqwxzx2thcYVMqBKPvatPRdWFvxDSYNZexyRvD7K3cFT32m8nNezDLcSUd1fLVTYQmqeTz4q2yexvS3S3",
  "key17": "3iW1VLD4EAJzyMSDEKwuHLfZUw1W1wteSJ4qbTmiZrFLBheYsscRrQpFJti5aXfAgdw9pqGtjMu54HVgYmYUU6U4",
  "key18": "36R8e2fPhtS9AQTAzM6tZHVpzcrxqEPtBqrbyWrJaFnVZ9forT9CUTrTM57SCwvUwPFfsnAXda36Sd6HgGBtH48Z",
  "key19": "2W5F2ngZqo2K6VH1AW2oDKn3sDSzWt2aYPsCshEiWmM9Nwk8k1kRXT5jDEp3A2yiJkq7HuKFpuZfgerDACURRYji",
  "key20": "Yr6dGCAMnxFiacpgrtNnQTFrFUMjSQiYKvCxxhQ7zXd6RhjBNvPVtgjCL1vdyMPK3g7Nzv9esN2dSaTmY4otsjn",
  "key21": "531nKF8XAGZnrYSLwh9zPTd7D29XkGPdqXZVnyH7NETnJQCat9kqe6rAx6MxPAYhnCp8fmcq6mM9nQKJ15dJc5Nf",
  "key22": "38eNXGzDs1jNEpkW5iJpQPqYXq4n8sHxZfwVwhchNwbu8RLhNZFGh5MLB2LCj2tCGe48E5EgxnDYoY2Bc7tnaxbS",
  "key23": "kY1zJ5ydhUpXaT5ecGrcotFP3177RL4ey3Qu7gaAqZVwNCfX2uyPzVBGWZSawssNLTDE5RbUxQk159j9tY5qv35",
  "key24": "2D3EuBJCbqa7yVwNvS997nYmFMHb5cXjmLNBcqA4mUsQLssvkDiEqfHC8qxHgdhxgRkgUVr7JBVZGt6fbTcpqYPZ",
  "key25": "4jksXZ3AAAHtfffXg4t2W8dyKRKDBpodsUptx9pgULQhD7JTowGqMtFzhfs7WBCqVomusQMrK2tmrxk5LUb3jpiG",
  "key26": "569UGgs2wGa7GuYaChMYfGNTisSqeVZHWGJK5Ucvz4rSmpqSVZZa96pMEdQvnRU6cTFvXZZgu3vmPZK2BKKErAo5",
  "key27": "3uzbQRJxbGwEse2phrLZthHmDtHRHqZSq5TXFRLVt9bv9HiUMqGCBVUyH9yqPPdP3ZAx5259BXafaWzP61ccPN26",
  "key28": "2gQaZYCf6sZUQb3XzbMx8R5bH5taVdNSeskLtL9C7KoGssGPRVGQnsUxowhjLhf1PXwKtoT7tq9b2bZrth9feYHJ",
  "key29": "48ZptwH1iU3DL6PyF2YNTib3ZtZdJ4zHdAGXbK44zKgWshwtveyn5uWxis7dSUKUii33PSB6VbJvA7X4cAPdEkjd",
  "key30": "kiD1f6fUAnw51yBVedPKq1szLhyYoVaW2rEaX51nxH6CUmadhRzosAm7LUeSmUooLhQYvGieqsChhVYQrQQAAG3",
  "key31": "3xDqMkQNstj8TjZLwZaafUgC8R39B6yqdwshEGpWJNuAvfEer43V9HyitV4ecMRhZTrXyZFLHY7tKNmLGWyqw9xC",
  "key32": "2ZEemHX4vSiF4k9P5RvkBD13u8nCcchtW1s7c71m3GRZXnMNREXn7JAz2dutjEtL3iErPHqnQXvhw5UWHbBC8g1z",
  "key33": "4wjL4AvsgiVj5XBXZng7e3WmTvtqUXtVSyZUS26TQNnhmtMX7uMXEkyQ8UprcZoYbqgh1L9FYR9JmRTr9rCg42Yz",
  "key34": "BfWGRCntkVGFYxYv7PY1W1H1hH1XYPaADiWxqtyKFV2TcgnPVdexRHC8DJH8yrCVEg5Y1GRL6XEJTfG2KNDS8Gy",
  "key35": "5NiH8eYXU2ppML2oyGHjmvDuoCm2iSag7M896aZTxdKpG1yLDF8pCz366ZfgVFAkvwjTcJ8maScvWHTmfmJqTU4e",
  "key36": "8RdQCcaibwDrF4athcHPog3PGFEf3tdT5HyVoKa3ESdySDXhv91jschmiGpYi4N4UzvBg3Qu2iqRayfXv6kGYCF",
  "key37": "2eQdzdgV11dxGHRRW1Mecb8rDJcUAtkvyAEJmqjiHrRw6wj67nCUt5CpEg3yF5iN5ATJXRTthvgxxPL3qE1MBHCv",
  "key38": "3V9aQEpAc6t8AmvNL9ek8tmjfDh1d75h4QdAw99YfMjx3ZXsjsbUCFiZWC1vv1LvUHMCLcvGRUhvWGCTrwzydVzZ",
  "key39": "4bf8rTXzTdT6bczKKLfShGSaz2LsGFjN1aMcaBJcoWzhWXeGw3QY2pS6ugQ8mcZ29FGKdsG1i2A4CL2dQBHSHDtT",
  "key40": "2BDenLrviK8oDoiqSwsx4X8RUqgo18Mani78fDsdhQPY4RJSQXRQHxuLJbzirXvZ43uXWE922Kx3rKYj7CK1qXtV",
  "key41": "33AsT2r6wWQW9rY1HSCGtvfn3VY7EhuBGzc2QwXECewUa2CE4YJTDJhGdyCvGMVU5JwJCTfMGEZeZogiF2unvqVy",
  "key42": "5enREhcPSd95ZikGgJunPU4AkjtvLUmCvEJjKd9b2akLeFGWGkeZcFGvKtt9P5qWkZT7eBDzsU2qtzzzy6HHSQNX",
  "key43": "5VcP2JMs7HDQtuQYaFeCU7u66oPoFJcALD4ABJMsJ1YBSD5mCJdKm9aLgsSFvNJiU5mp7ihTUETyb3zTUmhG6opJ",
  "key44": "m8kKnUz7hNQcoNgaCYrNCAwx3qcZbnKBwyeTx1kuDeBE5nMprmcVWWmHcr9ZaF2NcWEqUBcDd7qgWCyT3DeRSKU",
  "key45": "3mSkeUG5qG5XFiPEYzEm2iieeXmH5bA78XNea3PJqvjnUbbgiQyd7Wc6Wo3Ezw9Kt92kuUcVSSuoki6QWrVAycy"
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
