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
    "2YdBfZnnxsBySfS142Gv16HRRVNARhMfzhunSP2WyStkG8BpuwPHnFi3cRDA2t4xcwArXCYH5Uqcy5TKhK41u9gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMQBvATvY1XrLmpB1ybNAbj5kXUQEeKtyx2Xk4VHYu1swWwhJCbFVvgVwb31pvwvjuQ4Ff6t1GuzCCiz4xzYrVz",
  "key1": "nVBcx2AHT8FzPfovtuBYi4Qj9FoXD7ovbd56YjrrBjnWnDUPWGgqKyJiHM7LxyYWVygp82cunck6djQvPLavm8r",
  "key2": "34tXj9oEbinJqYjmLQA2zsNuqzDMFc6iVfgoTYh3pWx9MBgCxJfuJbEZf816KL3dtLxQk3Fm5jEGoVfL7eFFjb67",
  "key3": "4X5ti8jKL6zr88KqgzEKH3X6zLeejezAw175wWrSHLLw58X5gACfnrKDd9t7mwvgJKmKi5RGRzAPMj4gpgzwNuv1",
  "key4": "5QU4feHNZ8YHvivDyethJTSY2nm1R6E3F1kwePsdCLRWoWYq4GyfGmCCUPxPMHkHnyxr6yVh2hqVhqm9ZzQJfWGs",
  "key5": "5chKyJeJkJY6aJyMycY6S9rtMvsmss4y9vhUpmC9EupwJBvjwGFSVywAhzJT3Pt6s8W95U6g3NiDJJ7DhpNnTRwn",
  "key6": "4yXGwg22o3jkcVUZ6DZiWFdpN3ssDFUh342n56MWApc2pNcwWSv4iDGKFx5ABiXP1pjAJtrf8vjhiGr4899QuYzr",
  "key7": "vTfihfFnZDVVx5uhiu1HcrX6Gctc6cPB85BicVowwfYEx5xDG8xe7j8A4TyxwHQaj3ErxzQNwgj1qNzDMqzakFw",
  "key8": "4wDyA9DauGXKCzChkX8VxYHpRtdSf62hSHxs4MrUiiQxAHcVMtcXndPbdLUTRqfDRYKnBjx4ugLEUGdcB3HuSD2D",
  "key9": "2ndYaqmRNCQQjEmJY5xwr22TPDYe5BWmriBmj4EmAmMMYboEFvDkixh71zbYMteC84wJnZNpCskL3CUMLHWzZcqA",
  "key10": "4yKBiCXTYBkdSBnuqfGrmb8uPhN3BQz4VVDReyQhxZsw7yKUiwwonbToQ5MRuQcJQD7JBctwqhJGwe45bAxZzw1H",
  "key11": "43p6nXuUqbDCTexb9YbPZVEDiDcUv9kCYZQRZQskHXYyoxD8gdka1knPTHBUmqVeck4TK7JqmB6SSbS71akUDB7S",
  "key12": "5a44PpDup9QXxwVPu9osE788iyww5RDkMAycBFFfT98bwfZXZN9sqy4v4KF1DzwcEKQarbScRZf38rV6wC7yFByr",
  "key13": "5NqPQbPwWfbpSuccxv8ZJtY7qFpfwhxUWVGfPCEEdgpy3siAFGyZQh79YkvauxWmMkxWM7R7aq4oRoqQ4YqqszAW",
  "key14": "31bXZdfjmCZ1EiQDspgSJoZLqV2BnKzL44A89uvyb9a5S6w4Zz4vTJQM2CWz1k28m8drcYxQ9UA5kbkAoSHGf7Cx",
  "key15": "4X9LeUKx8TmVSmDVd36G9eM22QkzNtwLdCfpyy5rAu9pTMMJbLHFRGA27GZg6c3A27CrMShab9iDg8PaXw5LVAZM",
  "key16": "67KM9GSrU3FqQ4D7WxbEjRhTY2Y9D9JGDN8sSwf2PCU1qtKNnJn7DNGyJoJAqGtSuX2sjKQcgGai8uDHofRYXNMM",
  "key17": "4eDeK6CEAf8eJcHX1pThpFHv62zgGfoN7e2vPWx7Uk6d72RcSaNXfhuNSn3dCPa9nPDGQL5VP4s5KPDracpw96xa",
  "key18": "a8ZndgMs7QgcLJkfFJSbRMbS8HzVo4cwRpiaHMbhXGu7WKKFpnccsUrdfUtUrBgd6F8pU6bELBMfGiL3vp1DXL9",
  "key19": "279zpMB2zVtLDYrF3ZtpCgXt3fypTHwMxj3D3F6HxLCDcizr2n9uVpJe8e7CmJGbFASSm8xmxUDiDJCXNLa3F37A",
  "key20": "5AJjQEz6j3YJjiZ5VETXH7osJiUnc3G4LDQP73LAmTrqwcdJAAJTia8nLAccgSxHBNcQeHQUukfJgxRqhzqm5fjZ",
  "key21": "3rstq9FeADTuvry3wREXR5zTkEPnXndQJ1NeHg7VkT2KUi6e4dHs468jirf8FdkkRMckQPFi4tg2hfWVUNCnPLp3",
  "key22": "QmyvSXLoPeTyGh6hcocR9tYrBbAzKfB5iFDPZ3KBQYBfSCa4i2nye9Nv2AUBpU5gmqhwF6CWGmtaQS1dEWVh1Qr",
  "key23": "eT9QKWbSV4gk9qgGFhMQv7uk6vxL2cDpUBaqQp6dR7qqX23L6dViJZjwUs9F5KMaDk3Cuice46XXTJFMTztgJK2",
  "key24": "2T44sH5WDY1RU8p5mTC6tutukTBCy1V3xW2JYP5zye6ed8NDoaV17fVM9JkHqrZunXaY5KMA7AuEirP9wy44KcCu",
  "key25": "5p4tPc2HwRLsPWaPyqC4Q2ado4eEQeFtXj2nhLCrwX7gEvArFZvHw5Bjp6NjCpKdMPirEfoVHCkMHhcCgkqF3esj",
  "key26": "5ekxkdJrNrbLf1rCQgQ9DHhnKnQuLVJJLVjLcemTGzRZGPUmxFq8yhATLFdsTJ6GcRVnif4kPw1MYhU7Z8qynY7M",
  "key27": "4HNxHZRhvJjKRC7dwDKCwXoZSW9W3s8LHTGT2wJG2wYM4CXUD877qCKkq4YbaTw9xN1T1hMXR4kj1DCyZ2BJhrLv",
  "key28": "5odwkaCuRDxoRDCwrMHUUXRBQfi2aiQYayQq5yEqocmPWbaBNkBkGe3UyXRNet1AaVxb7h7XjC8mbQTGW5nSoRaH",
  "key29": "35sJ9LpPs76537fZsyo8NKBE591zcz2gSz4hJjTpjeAMmgZmfAUvBUn1UDwGTkj6FAETWbDpg1Pr89uMPBr6CfCV",
  "key30": "2PaymuV1b1rgKL9BzXhaTqegQvRAXkqWMvSL1HDq4AXzZjoJgcfXaRLLYxKNWbeQKRdPf1LsRin17WqAyyKii2Xk",
  "key31": "56qSE9ZVY9zD5U4D78ABS5Q3bvuLJqccopAP7TdiCQH4LLiGJ5RNqcf2thTA9qVqV4zfZq5WSPUKC6rjCpjAf4Yj",
  "key32": "4kiXBmz3pkCi2nQLfRERSqnqXxZPzFqFkjK8MVwTc7BoPtUxqy9doNgD3grGh6CQ8v9RWedkcxDXGC55UtzefEzt",
  "key33": "5veBkczXrNQ4CMeSvcsLVDarBH45AYS34jdkXyiRADnRxQosW3D1fk1PU22X1YFEHiMEtXMLJfAJayQihhRi5p1V",
  "key34": "2uMJiDGAWjSeqyH5XzYNqWhg2nNeTqYp9HqxTUjyXiwEuxRo7cqMZGjzHkbE4M64ALogBGMRH9qpGXwGDtsNmbPN",
  "key35": "2XuuHJYaZadfB9hJceseZXLDmsSBuGRgQEjH3aFjpRQfPgTbYVT5Msmx7ubjgtet2akCie28EVXmzEAFrtVaXY79",
  "key36": "48jBYqqptH48f52KAq3vq18UjKPCAWkmRSgfQXpFe7XMRYn48ARc1G2TJx8PYywqJsPnXUK4YNF1Joc8Q9dnWKhk",
  "key37": "FMuSwV4KtQFDYeZY4vZsE8p3vhPntYJbmwuxr7P3VCwLAfZmjYBDHjBRmHCXVG9rhfjVE7j1zh4LKz3MRHtqG5s",
  "key38": "25zuUyaTLyBkG9bfnJEVDKMWVSJNDcYU46wioHufd4qmLck8jRNgUrUkSiBHvQeFF68uyCbVx7RpXjZWDsoxPdrT"
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
