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
    "4v8xpecT9HZmHKqiW8bcBhSZ6dmjum9Qy7z8ED1Xd6FWVPLbGP4j93q3Fsex6d53spqifTseDssn669YQ6TfY6NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wi98L29yEY8szhUtyn865CtBnJKsbADHiALbnAU7GB9zW8bkDFKpkRGTe3gdJKUKUVW67QcSL337vpzKW7YLfdp",
  "key1": "5ezTTbtGS9ar4LwHeBZMN4WdJtPkozJuuXSJvuLjtEE2mLUpMGHEULf8JUgE77UcuZxJBqU8Xz5ndR51mAS66ivS",
  "key2": "5G4ait29oGVZYvCwawPEKq97ntGwp8GZA1deXo4X3xR8TZ9Vq3rHzrGgGFxxQZAvkMMRBznVm27ep4Nwtt8rC7p1",
  "key3": "37mEFUFSN8oB5uRXKagwPqfJXa3GSwdSv18pdsyzy1NnLkhqz9kH3AZFw9Lh73uACkabhcRtcgeMX37uP1XVjxRU",
  "key4": "4iz3GA9BaZtJw6L5JFLDCohd4tEBRaEQvJJXyV7n6wexep6Z5sx9M1cXLaaPJLWJgiMrjFHQa2Bzu4EnSXmTP9WZ",
  "key5": "XeKnP9FHwbWhsz7hhq8gSQ4WeYxRoFUXstc6KztCdXqZ5gbhqN2CCsMkhPH2oAruv83XEvuYSrjWigvXRUKK4LA",
  "key6": "2koYCTwKTnYn7g9zDJrDcgyojFYbNQ51mVxAH9HLBrmZG9uQBRqwLmoKWMQiS8zzuqn5MSPNa7539PHtavdbsdiS",
  "key7": "5HhjCSM1Vkx3qKVESCLZvgFNMpiJYBsxYBaacPbLm8eb4SbWAxrLX58MtqvA9UP2gJhimgbQf5xgDYSMrbXCpK18",
  "key8": "4YXuHqEsMwGc38JPvEK9UfsY3m9i1FAtT5u4gWN1gvdkqWqeVjo2G2bJqYoDV7c3csfX3PV4ocLG4hVbtJ8MvZq6",
  "key9": "44FRGa3KwLELYKvEwwPa9dHdhaquEzvk4U9h1Yj835AjgKyczM1fD5RHw9kzaYGZVHi8bTRhBKwnMLrep2ko1z3N",
  "key10": "4bvqYhBrawZLPbi2YgH1xkBULavvTFh4ckehe8jsck2vd75StHLF1Te2MXYrFRremGfgVPxYXwZowYeqsqLEfTBq",
  "key11": "KwWETSEtMqTmNMUCxnmu7Pu4Lu4T85ZQ28bLVMevd9x9fCwYpGkjJFSsUkkS46RDW5wATDWmb84dzGSZ6AWM961",
  "key12": "5zTQAr1eynx9bRpHMzCU3Kt6nu1bbR3KL5nJ8bXUcyku5An7gmgsXtQWhHqvziWUrmiqBtP3zCZNDCD65UPNQ4MQ",
  "key13": "2KoZ62Jp7MpSZjjtQnVi98defCQ2J9p98crkAxznP9uZNGR9YaxnGgFHY8fVrcJQ4HGGkPPLHDBTNEnmug1nNiXT",
  "key14": "4dQYEozMiMVcNnBHAzYbMsXsJcCAYd9wBoWVCvscruogkxHAvfe7gDxM1eN3BrXn5XkHkj2eeNpJqAVrZ9aGyJ34",
  "key15": "za5qNX5RazjsbDaM1EPhn28MDvLWiifA8hBHzP7A5h8e7ZqmdakBToJYCrJq7XPdfevzrskNSZi2CPLJRR5AzWV",
  "key16": "3XnY3YBx6WDRoDkATyg93rfqqk79efgoCfc2PjcwpivccqVphqeiyzBu65FhdM9s3CpuxEFCSAxunefqYcjQL8DD",
  "key17": "2f9H7PYs8JxARv2YB2zndcrtkUdYtpP8v1d93pcpQZSCPP2motQtmXBUgtCbsqs6F3k57C9WnHmswV33iTJHctph",
  "key18": "5DNG47H36GhQQ8PnU62BRWou328Kx8FSv6DpfUg3Fhrq9udyBpsBSg9mjNF4y3c3JS4KCQksWh1Jfh2n9pYKmS46",
  "key19": "pkQKX8buMKYD8cwocwBCmDjVVzEqjj4eQLJFJSdtvwFaPoLmHAcMSZs3v4XYFzaAnxSXHpqGghmE7CEh1P5Ew6H",
  "key20": "45hCGuAro49PJmgCtaNMR9DxUrpWusZGoc349H3PVvetpowwYa7pi3PQktZmZApHrP4VcJS4w7ZfQxVAdCcPs8px",
  "key21": "5kwbSPeR23mQPx9EUvQZnL1bRBwtDd1bYXxxkUh3j9mx72xdLEaXzqzMm7UjYXngmoKeCLrQE6e8zGy19cp5QkyG",
  "key22": "4GGLCfLdArxAxYfcopWsBA59ooh2iUzfVZX22zzyBKHTMP6c9LKLq1q34gkurcBva6tsFF9EiNc41pfsTZE9G4BB",
  "key23": "2ZLnq3yXBsrWYsrvAT9GrcCeEp7mDamCm5ndNreSVRwfzmTJ5p9xMBJAYui6B7vqJNesArcAoKVhQUz8KJ5rKoiv",
  "key24": "58dstKjdUAsxc9iiUYk7vBpJf6jusquz3Jcs9igioHAGwqivqmaT7ym2Dnbpwx4NZZSfHGnNimYxR8tRFMwRbJgk",
  "key25": "4QGf9KofFzqYoP71WfhUioPH4sJSweXWXv672E7m5iwaqYX3cRmd4GyjsVs6MMQUxPzv8ztJUBD8XPJrzFToXr5f",
  "key26": "4UBUPTWQiLZwCs5j1k7SLREzCyCBFh8aXtgYq2G9HMgwLszArdWhcEvPxGUgdG1AjbtKEa9uzX16DEGW3ygpaNN2",
  "key27": "3yB6X1pfe8QtdjcB5pBZs4n7EXDBZq6NUjQEDXqA2egeDfqQYqn4t73GsD5M3pLCDJ4vDyy1MGdyjxhX6u6e5aL5",
  "key28": "3xajEznQwLPVfFKxECoYB9S7ZnsAAyuvGSZgXNTDVFETfrNFJZ83ZPLZ4DqSfMnHrqVBposw2KY7NDoWyndZwQ4m",
  "key29": "35yURavn3eVzcWHNgcxJenSeqR8KMbpEbZnM93G2SnorQxY749a46546aTp3D61atDb9DeNCct7S1M4SKhPkkr6N",
  "key30": "3cZjuwMkWKXSU7jFpS3dXYc8N7TtT11dV1yjc31CMiQdznuMbZa4G9edPaD41CcHaKy5VDt98z4KZFwBv6xu6K6w",
  "key31": "5ZHh2YWgfBrwafUXJEYkuqMfa41LWgsRRsQsBpU3SCCph5jt5tj7xjvMHSLWRndLwLDfh2iDMWEB22JRPAEGXpHD",
  "key32": "3p93oKWsBfv6bUcUCuHWnJJZmdvZm9XiGKjrKXjVk6dbRrDGMWN7dGTroHhjDaDzUsnijwJxBtaRsWoNZ7T1Lbdx",
  "key33": "3yHmotQjb7uqHWQ6ZLa2B4x5DxmFwq9K5ye6eBvXUspni26qdo2YP5Vz7tUqnRWzCrBE6VFUexzKjk1PfMTefFQ5"
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
