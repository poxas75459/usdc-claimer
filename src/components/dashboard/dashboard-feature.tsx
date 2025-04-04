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
    "3zwdiNxXEs4LjDX9TxTD1s5w342Aj8esmEfLsPLbrjxHdNMRZmywnYqrtNjmdCqYAzWcos8NKhpQtgvfL3XiKHmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNZWZ6D5KL6VskTFjVkHLM7RLENFBukeuKi4NE7Q3cCWcUfqy4tqsW6KjsdHf1j5BPRBu8v6tPn3EHn1AJhdwte",
  "key1": "4fVNWrtNciFPfsLXuJiEWWypqYevNg96SSqR4aSyByyxKMTscj2CFmc6gkHF4SHjofvSnF8EjPsnkvNXg426PrE4",
  "key2": "57bD4nU8rVAQiyn6AdyvYH5Nyr5SpBUizUY715dZ7i6kgBgGLVWjFhVAiJireWcqZca7CEVibbSud6rsmyC9xgnN",
  "key3": "2eZ5dVNwTwyRpYuTK1z966DAP2cWCRwsmzNxiBXXC9VaR1R2GFgnwLTw787dNJ7rZ8BLyBXfNhqCWsMfK4wu8bDU",
  "key4": "4UkBrzuuxEGPghCegnAbRrayGTDrx4aQfQoiohq1vyEF8RJyavCFiNNSjwR9YgT3vkMFWhRKy2mDZUfNVkRV3Nvj",
  "key5": "5H7nxb5n94bLseKNzfNJM4U5Dp8PTHg7YThdyCYjqGLU9wkdK3Yv9w5MYTa8ZofZZWSTmGnxCJke81EyhcezTVsg",
  "key6": "vTWwNZCWRvMMynyLJCiAtFodvw6gXXVWDz72YPG85iGsXxeyAPNg8R57h8kn94ipDhSBYjAUu4yN4guN673BUo6",
  "key7": "5yoSiz11SP47xS4XUYRDuQCeYtVWEuSihxwxzygz1KoBjUxbVxnPe9Vjcqn6ANFd6xktR7fTXw62MWu4rMKG11rs",
  "key8": "2zLgBryeWXJMCct36WBfysbLuGVR3FhHiUiDzHaPECS1inihW2apLMjdNg4JhE7f23T25mkd6tZ6T7gDptPSAmt6",
  "key9": "2g5Hkc2GXL9n4ss5YJJd6UnaLr7ZjL7jurbCcb15KG2cq915onuiz3qXMXKtK4BmMa3NgghWtGDriyYLPHqfCa1",
  "key10": "4dHtKHjcfsfPETCC7WcGYx6wz8zcef8RGCwfwuvJPZ5J6LAfEhV7aaPPGbuzFK1WFAGebALGqrTNKkuVWTk4eay6",
  "key11": "hSnfKAYy6EgMT9BqBDqKXpphCD6SuRjLXu33WGT6vQuchB183nqjCzMJFAV4aedMnJp3DYD2PRsVJWwtJ2yGETR",
  "key12": "2KT8mfCzMoBEWqhH7bn6Dszy3kQ9VrKWusPtnFo9sLLGzmg1Qi6NxGb2EVs59HSYLzJQwn1FvKavBSfipcukvndb",
  "key13": "GGKY6BKCDGEh5grjXtvxczhzoQxVYbAQ9teSmhSQw24x4QDFzLnGoF6fQ8FAph8ZRzQ65LvuEGyfeNLJairRyD5",
  "key14": "5Eue2vTwZnEaYkWGA587vcaygePmSHEcK7iKXjj7gLVY1Pt6DY9oXB7up2nEBnRB2V7kBBpAuvmAqBAVSVgDGT3b",
  "key15": "35DAtFzfzpbDeR1V1darAK8BJDM6dK45dxuLdDxNM3PiusL4KNAk4hx6UdLkgasseCTrpefri2tXr4qoJMzgoMmc",
  "key16": "5gmzprYR7DjPqJVHmBwkUCGzno469JXwEgTqNTgehoxfjwLsi6jTMNkogeSBFHML1DJmLmAQUCcjDMoa1vSUXuZe",
  "key17": "4ifAkVKRY57WER2gAFBJ7wLuNrNRihP3ErWFKfKk5GENrgq76nVjEfmqg1Q777DMjeVRS1ovAnWjKi1Zz3z4cPN3",
  "key18": "3eC6Y3ihso9MjvDmJp5DCLoQTaCKPGZpFTZSndYqHapsrQX87f3ZAJAe6zwK6eY56Mxw4uFoUJF7kce9vnr46eV",
  "key19": "4DT9daV53RftEmB2kG6jM3Nuon5ESttQZtQmExw8AnXDNttHJfJARc215gXoyym4iWmNMvXzfCWqXUPQBmSCVGHX",
  "key20": "EAjebLGKTAgzWJaRbofAZmtQexTqoUrthVNC7mVxMusdRwtrE6H5f1PT4iNshaQMYKqUfDFZSpZQ4SWG6eNkcMG",
  "key21": "2uxrKCTMPYqgbcEm6MDNnGs7wQYaBK4QoHPqiX1vZDDWh4Kj7Mrhd6JebPCuSthqhrgR558GNxSveN2vQohkoeAs",
  "key22": "YREugda7HAi1ice5MmJseBmtwqJcFHhZ8K9x4Y3vBRGB7P1pSHW8ghv5tbHTvVDFguGgHZx7SHPCma6JJhiYhPq",
  "key23": "2ixxbsXHGJtdQbvTM3TBbgYZ2dmpsFJ6ZcB24LBBjA9guyzUMYLhq6E2B6ur1VCwxX6K16ArJdnwdkUPXZSkqzpx",
  "key24": "57VuHg12r5zCeiQ6XeXUMdqXzNPZFsEwyn1NZgvTmEUq38W6voQdVUirmRMcHAa7Qpwd8XxnkipTeRqirEnYefC3",
  "key25": "2YLJHMaRrSQ2Q1HyacRw5npkUYH7NKoWwwXQtkgbSWwrT4BxohGzn6dg3wEJcFYGPwxUdYXyMw83TSCCReqiyjba",
  "key26": "UCsVSFBgH5A5iYidUzCPQehcqs1hgL1XVcri1fkmWSbjN3ypQpZuXFYVkNP5BX2WYbqKvJou2VRRCVxj8ysCvaE",
  "key27": "PvwUQDoBmEBQxdWJgsPXqG1XiWiAmY8Va9e6DNwDrPnQWzHtkVjhZZfLn2G1AgzQcajDj5CE443YX7RfPocFbXc",
  "key28": "4sMbUgGuTRrhZSYi54DM3GQCrVcCJhFbAG3myKcKSzDpSmbs9SJ9tAD2aJNgC4A3j3DjLkqdocqzmbvFED4kZACJ"
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
