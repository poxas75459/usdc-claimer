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
    "4EdgEha7Lfcto6KjtCtfYSo24yLXRBYDMcwBfe5kiDVWjdR8E9A2DbQds4dEgbUEUUjkApYQ6qXhQuSmxoJYdasq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Fq57vbfdHNuaHzziNBAT4tDXHuTk8yAnABNnBo37auRfsYEzKidnuoj1RzPumWHsmxMAmxYw6Z3J8vu5aRB8co",
  "key1": "2t2H4s1hwXkTfHuG9VHwKvKr1H25gUH9uaEA2kiVHBmb4Zwat17z3nzNcLxttT9hfkxtDM3Mon8cpKusEfmW78fN",
  "key2": "51nAtTdBTHZpHjFY9o1yqLPKXdkrQoq58qDBLHxqhzwaDPcFjJL8QYJRX3mMPsm73sUH5M7ckp1Toh5reNkKcjAN",
  "key3": "4KET8wPUJm1Hy9MqUaxKQSKt7TGz7sAwKUaJqcDkibK2DtowbjCkLMaNTXZrQ5EBjpdimFKNuK6YBhTLk53S7d83",
  "key4": "58xwVMGuqwpG5cR1Ee1JZ3SVtYotYksjTnBSyNjW9omPzsUwCJQUvRB7rZahpUooyUS5aNHP1zQw7nwk7Jx5mfEY",
  "key5": "66xAoFyeg897utfx7vwGQ99KbQ2D7zm1SWCv7KQpk28VAJjr9diE6dgaupa7w5Li8XSd8Xdfyfv9p4cNW3nUsCBd",
  "key6": "3mcFy4zoeicJd3iptjUi3moW3Qk53N14YeHQGn9yThi8NNo54ndVLpJzB7K9yCTGUjdSyKRrVUafDKysggP9HDu4",
  "key7": "gvFgxCBoqFGyPAqG62e9Xy55JEBgdA6aCtd3vk4i2Rw7U6GVLMUHB6Ekj6yjzrYATvY3WW8GxDU9stceRJLQjif",
  "key8": "4emZ9gxUJzkjYUoLZedhdHHLPx7WHNcR8tedvmd1y7x41s9LYo5Zv9z74sKK1krtfbfsUJpEpPZXUiyamZg9bADU",
  "key9": "fwHy6ddkV8RLJFrgxws63dYV1s5cVRKjPGuMfyzgaJuFwerReaCCdEG6MPw5z5wvnEZPNQC2FWRBemXiyRPUaxA",
  "key10": "35J7bKUQk8Cb2sKgCuKvfm76cvZbLDCf8VMVrVHfYiNkwj2TQ9NDFfNuLssiSzikPgGgKZ5fjt6nnmufVAcgsvE1",
  "key11": "4AUGEnW8P4VVWXuYxherAx5gA85ogsuCK3yPSwZhecJSyTLLRVew4sRrwnu82SpxFjkFCFz2VW2AXaFKc5XhrcrY",
  "key12": "27MotuAYEwLxd2RaWNttTNKUdyj53DU2EykEt2nsb97A1B45wU51zHQC8EW1Ke2FC444XCgKS15ibfM228GDFR9W",
  "key13": "aBbi1Cnk1etWRcPm2GsWkFFNre6grm5HDjLnmNyUShUj2hzfZPT7W2pT3EAzwZsauhdmAg39PqpRCw6V7nSb8TZ",
  "key14": "Wwa6CeARyMg1eyASNcVSWHMKF4EVgTteSmekoVRsasqhSKF3gyCmV9bT8ZW1W27m6rsiSG59zqVAK5G2oEd91kj",
  "key15": "3pcSzJbq28bajnq2hqB7uDxAAoXdqDM1g9v95nseaEnNvUmhXacxtZ2mdejL1pkVUX87YNpUA8dwGQq2eKpUhrwT",
  "key16": "3RLaum71FR9bdU2J2Aw535Nc7S7xoKPr3VE9phqYKwwjVGHyGaqwyn5SC1bmPd7UW1kctNnrQ59AkfnumSFejMgx",
  "key17": "31j4k8irotYSDJv3WdQEwXCAsBswSnhxAfPaK3Z9yx6EuWNNZ1pH9wA4WTVw78dY46WyE4TEjDBCP23bsLYbN4dp",
  "key18": "5EUghHCVjzUigBomoPB41DAGLAWQXmtEcXPqUyXRvLztnJW4sFUcDss8PPtnFyx6nJv8KjhF56c6rzCvKT747X8n",
  "key19": "4E2e9LfqLXztqUiSEBctwuBLvXwrmi2XqEnY9DWHzJfd64J5veiYRo5cD7joMZSdxSzxKSLzXKH6qRhLuCYFhaSM",
  "key20": "2XWjERo5f4zNvPU9NsLgJZrhKccFoEUVRNqcJPmq4hALL53UBffNBdn175NmfEadD4EiqLWm4U4T7zHpnsNdyY7q",
  "key21": "2EB2fLtv7HcBDHDfAqShY7Urwo57EqMtzS44c57uGDJaknohssHh2NqeuWwrhDadhqkzDcJdq9SaN1wiCdsh9bxd",
  "key22": "N9BNSHGThd5JtjKpiWZr3BNmVSHCxPKZUJuYbCxbQ25ZQPhRxxHYbckVpVx7zSpSGSczyuZotHFgb1vqhpV8xX4",
  "key23": "2Rw7F7HxcXrZuWWzdFYsenRrNSxEKfTjuMeJWk4w8aU8Bwi8iqXPyPwqUJN5tqRR5XYdMJJjwtv1TfmWMhztJcfv",
  "key24": "5vxE7KfAQQkG3gkiAhT2Mpa9Us7HSBitmkgUnHrWq9bCqDm5H2evGTzs9k2uLwqGRKjBRVUTtGZK9vYoKmrVfbiR",
  "key25": "3oUDaDAh4FXXURLmNoaaGk6o97iRT33WSWKg4YoATn9ii64DGWionY36qgq7XBbHx14hWCJe1Gnp3kEUP687VnRq",
  "key26": "FnFCZRZn1V8h7TYUiBErm6dDrXrCw111bT9m6zUKJ8wkCGB543wLb2jAR37hKzcMqRoAyhxnZp1K2roMNXW4nrD",
  "key27": "Ds3HJXf1HfFrDF8s4mVrrSpwdCTSUfTkDa8XvkBQf3EagkJ7jbh5DrdT6vM6XUw9u3ofLuj3CbeD8FZTYEMFpME",
  "key28": "125jswc7T9hr65MU4kPJjf5hcN2scTcVkAjrkUjBZtb873AYs9tEERayqu4bDMLhmF5znxz3F6ekyzhMZ7itS9bL",
  "key29": "2SWheyb4eeiRQYkK2WUrJJGP68fK8jt9uPnbpQYJTj9c82B4N6GDufdbRBpKWRcDjauokVPy7CuXaPAvnV7d2hEX",
  "key30": "3hs28HtsueSoL2VXvt3QPgVedwTLW4LgZi1j3NFat1UutGp7htPAAgvg4Gz89iyFmHezbKQeqMc2jA4HqDjQYeiY",
  "key31": "4hRypEW12t1XTC1228giHXWGXtW8y327TFk1HwRF1AduV3Hav2D4Y61NqeXbBuNz7de9yLsPe77iksRiBaLUb8xJ",
  "key32": "n5uLpDquAhfqTJpYXZiMZJ3Ak3UQnyfLvrRgMUucnNgp74zRcfRN3b2tKLoL1ydNXtKHVscwAcjQMEcRWABn1Vp",
  "key33": "pniAR9kD4iKtgbsW6M4fk7dn9aWmeE6ZdLjMM2fx755fBzFh76VyGXAWEBFx2yfXkNYdVJELB2fWW4ocCnkizTB",
  "key34": "2pcWE4q1gV8xD6HhxDcAgEvN6EjDcaCuZQ1NyK2njtu8ANttPvBNyC8uV14jaEJRGtw3f9R3FCnt2BrpnAuGRh2o",
  "key35": "44ZrVGytiGBirRv4GRAKVi21FYZHo19DcSLLZezwseh4rLuRpnxHD5mhGhT8azWui68GTWwM5zAKiJ3G3nAiAw5x"
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
