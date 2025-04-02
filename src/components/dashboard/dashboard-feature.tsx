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
    "49GqG9RdWj5okgCTHre1GLncFRQ1UaXZpSS5mZpFUGz1pKrMKvJtsD3TTcYT9VdFMb6ZHxvdEKhqBa8m48GA3gwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBbCwh4fVazF37MWjTzQ11VTUZrWdNyhSQTFmz7DgdRqA9KC5fiYtNGkh1KBXdFwoibLPsuDgvoyGLzViQF9exB",
  "key1": "4MzXheoEzBQUsqN77i3vHmj2jKHY62UkLy5X7sc6qypAM8jUfUbF7oY9dZ3z4uLUNigKYsCXyFLjyFaWG4buMv6s",
  "key2": "4SshoeU6eLuMcJ2gkdwLrgqeuYyxrDx5jKyMb96wPMxx9Sh1MVBfukYrZ4X87qcNmJkp8X2jPT5sXLFZFtm8kthX",
  "key3": "4pzRc8qQgY3TBf2Q9S4FdLceSYX7p8BVfrqKuKhwSNNqU3eJxdyqJWJk4T57dgjDZhKbXHdLs1K1VWubCF4wRW7",
  "key4": "3BAhP8MuLrPZGSHsSTbYNTVf6ajBcQoW41NCCS9fvZdQLpLTqVtAWL3vAZymEp1SboXy7uroRv7F18GDbyNWX2AU",
  "key5": "2GL2SoZtTUUD85JM6iW4VdKq13doNmkAtYkrRjc5rzcyHHfvzPCS4S4VwT51MxByRcf9s7XBmbUzqZtKWS3jJUPy",
  "key6": "5wrrTfYQrJoAmUDp6MB1q8F3CJ2wJVyFNB22ifDSUwphQeURr83HWGrCVooNuPqJXegWCoEoY46DUPDVdxjk85US",
  "key7": "3F1Td8PzxW3oWGuobK8zhDq7mf3YPUr5pT9okqaNUZPEmnWogg389FfHmVBNjJtwiWi92abUAZdcCVG7dr4FGbPt",
  "key8": "5NLifhNgHvxaS4dU9dy3DvmDd9MgZVDYbS8QQa1yfEERfVYMFid9cRqUJiz5AtLm5NFN3LRmCfWaGYyeSa5CwihN",
  "key9": "26bZjbpHBVok7TZ5L3zJLYQKN7jwEijhC3EAQBn9Do555eRQsLYPQgEMu5CRZ6oVRN9xApFWrK8VjZxWEw8iNXqe",
  "key10": "3f87sonSXhUxi1hVQg9NGvnAKJ2gUi6KiUXno9iqQagAHUMcYMxGzQr8fBU7D5Sc9d4GsLrovxbTnnD8DpFcm5U1",
  "key11": "4vj7mCL3xLdFKRJg4JQAcV4U6SAjKhnhWfDLMpb1CXukvcwjnDhMnpLnNWFgCHFVEVywaCHRSg6xNpjC2vGeGDAa",
  "key12": "2hD5VWc9uLkPWPUhriMQmwn9ncdDjfoiqVu8mxUc6Rmnfxu23ZVU9xJ3ejBv2RjAosp68EbCxF5ws9F38oJcojcV",
  "key13": "4HmMQeZT1smhspB5c7VRtcZ1uSVnxogNi6BK2GMSP3GyWPV6GU1u1C8HPNQxkQ8mBMA1P6Q1jfuRczpoyvYxPS91",
  "key14": "3qHhrit47u4pCDjS2cdV1QLrcbVYNmAVSbuc6ZaDqTLcYeyKUqgnDTSxwAP5ZueoPC9PDkAEpFXsvWH3QAcKbhVM",
  "key15": "3aVqoToKX2avca4K4L4vU9eJdPWWXkEWZHw28innWETq2yHUeucXtfHXGaaLjMgJ8K7DHX8RB6n3dE1LjKZMgzqv",
  "key16": "5RYYzACusj2zSV9i7E7VmvU7iu4nh3yGhcbWqHyx9diUQeVsGJt93FuJFW23zpQvXBrtPNyUm4eFEmzVNfncDFiU",
  "key17": "CXU3Va6St1LurSAoPQG1uxMAALkSwPctZreytrADzuQtQxuxBHf1Qae5L8ULqrR5a4q88FPmoy86wRZDCcA6vo3",
  "key18": "2AJpoiiiARUC7m9yFFMNwXnoJxtuR2Hs8yR9nMGUuetPxmX95QQrcvzuvtBCc7KoEN1NXbcu3fcFjM7kd8fxG5DD",
  "key19": "5zX6UmpFgQwMXconLdDVDiB37VpFda6vnQcKis65HuT43EqjwnUEK9btWVTYNY4H4ys91djkZJei4EPayHyfLnY8",
  "key20": "56416REvP4xpk34DMbL7BZWVwK1QwKWsvq3boesfXq8FBbqEC4d3936F6LTohJQDMv23WtGNGH7mFbsnK7YjjfVX",
  "key21": "opeJ7XghdzB3D3FAqcZy7YNTHnWKxMosiTMUCff1iVvdJTrC4bFA5KNQ13uVu13UtYuFFkN6mFLNwquY3cjF5oh",
  "key22": "2aerrFeMiqp72sNb6u9Z45xt29GR7f91vRbPp1Z82a9ByQwWWWQLYVuU1XPgUo7HEAYYztbgfUr4CuvuFEvAAH1s",
  "key23": "4SNcHSTmm7eizU3Ma6GuRnqdZvcG57qmx3j2BFoHJqabBzPgozCgNW7AJYkESoES8GFmoyS8Wz1Pc5SgbceQ6h5m",
  "key24": "3PLEXVvuKo9CgKPenpgDYpFvbvvSnZEemSy8c2MJ48F7xsCgyWNDzQrzp6P7wiCBNatG4LZsrzQXCY5fZU8JWQEQ",
  "key25": "5HxhW3veSYzTDZLkZZDNUnFY5F88szDsBPe6W198MMD9HVfPF31kQovTJcuiyhSWhLU3uqRWphLg9kHZRtbJJuAa",
  "key26": "3Pnjqr4bxVD7ReUWnman7MHk2n1dJJfFJJ66hJuMb5hM1JZhm9t1mDnQU7ZMYkGgeRDm3MRdCTGJw7BE8gc2kfKV",
  "key27": "2D8fwgCkiHpWJ8FVnusyfuPpER5Zg97qRA7vpTNiDuMTAcgQke1vXyR2XP5YKV9zwLq1ZhAFc6KgCfe48QxzLP6Q",
  "key28": "55LLAYzYgeyeu36BgyRRZQZg427fjRZKohQpiQD4kJTBbQREky5PeuaGT3BGy8Kh1ez8GfqtYX22BkjQpbCs4ukP",
  "key29": "563whS263SZirrarcL4pVeLVdGJXh7DhDm6qZJRKkTJSQMop7jimzDhy9q4AXSFSvYTRWkfpbLm3fdjm9z9fQriB",
  "key30": "4EgWLeTfEPGPyH3UyE2XECbSco5miwZcFq6WYhgjE7NmG4WtYWZJSSNZougWcUfpLwMDrNW5JQ2cTWdRASqD7FaX",
  "key31": "2ywZjnVCsDH8LNkQABjMo4YhEPQrhFAj9Z1p7Ex9g9RFbJWmGkSxSXgXJiB4L9avCBtXGuRTyn7UoGGHKMSdXsx6",
  "key32": "Um8g2K8Ywpruvc1KG8XnnLAQzkunSdXjzCDbCY6LugbuWBqJX45QATScpm9uPvkd5ft4huRGEcTNhM4HDs51Xbk",
  "key33": "26SyAaMzkDP7vXhjACRoFvSpg5FZgo4C4e23kwvJvCa3mTyApieVzAGH1uhqhLaFbejQc93jeWYw9hVdfBaAUh18",
  "key34": "47vJr6yEhz6Yd8YKB7RrpMwRtwSAx9CRRdEcwkrS223RAuLv4CftfD9xixjf5YRF9WYGWwij5XZBvS5ZMszTSH56",
  "key35": "3YzR2Z7nTsJKxYx8q971qf6bjAQryPm5ofmdiAXeSYFTdsfeEdapVbFXBpnrrJxjgGpUvSrZXGtETVt2a3EnQdnF",
  "key36": "4XCJgCFKWUww7U42SuLBWnCvdoE1KNUyPdwGc2hmGok7X5FyBjmcq8MXLVSeYTQ2EGdkVdPXHLMsWF1o3wnHkvKw",
  "key37": "2Pg8TkQx693fNKekvU74xKAb5Xoafm4AKeL9Cd6fsyawVgkWBqJ9ofKekMNfWGLtMyjP5G1NwVw7WsWSWFVzDdir",
  "key38": "5fA9o1d7yxXLnhbSdrGkgG7B3qxFiNbMkdWzC9zyZJUbyBZPbK8VXNhRbwNz8QF3VY8EtErp4AJMK2eo62ijbSqU",
  "key39": "uHYd6E1bUBGQKnTr2KwyVdhHYS457dCAtGE7cyasUxqHApv3JMKx43YPDGLdMdRvjJPkoLCVq8GZd9BiiM9htcH",
  "key40": "29dgyJgUaTATZs9SKNkN8bhBrhq5mAt8qYNBPKr3ohA9XHqFD84EBoWbmhUCRH6XR2hSf4sfBtdxpZnVp4QsDKZs",
  "key41": "4vixPpKQrJR3uQhjktJFM4ywbLcfcQtRdQY3TNemiW9Z66m2h7oghN2bFWTxNDt5LEUkzFjz2wVy8MbnXPrKZKUR",
  "key42": "5FBpuFw6L8od3Pt9adztzBSy9nSbSLnwf8LuByfLhAx3SCDmpJaGTjRgVD3zXNNEkDNSsqTW73JXSoKfzXW2825S"
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
