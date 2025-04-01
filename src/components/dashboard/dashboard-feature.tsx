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
    "2pGKFnjpYmUwGcTFqdM816Mx6MQZ5gts9fcctBSH5LLj496P7J3MdCbgCc5PmKQ4EtupsNjFjvHhW3p6cFV69R5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LRmzKvc22ss2u2hSmC18vy1FPQpcWPQ5pzbU7Vs79qrcA5PcLsiCKJt6AG2oCCeHvWfWhGSEkGoXwR1WEjss3",
  "key1": "kw2XqfBip34QvvjwfE1v1vTprvEacnr1CCmvK76QsJnuy4zSsmGnZuZszZ9zqYCsNk5QMHiJDkSuYybDuEvRNmP",
  "key2": "563BbJczhK5cVWswVspqJXNDvTe51bJRxfai9aPDfGFnHeUP9FUaiqKaEpX28AHFPvSUvt6grW253HvRPEow6LY7",
  "key3": "6X46XnUMRicpn1WQNN1Tb5whDKAaNUoC5pkzZnyiEdLDM1z36YqoeUkVKMyNRCWxrmgc47WSjp6qLXnTvM3ACSr",
  "key4": "5WzYgvNdfXvXFEEL514MCEdnmUVSQa8LQNNPq2e7SbQkhpfGVKtGp7jCwaetyNXH5jofAn9ZFa9YVRERb8fuKjSj",
  "key5": "5S5vfuxmQSDNVWJXdeth4QQRqotr6MUKEbegHWdnmouuc4y5wWL4C3Dso7JwmjTvm23wD59Q3eNHaJtQa8b9Sbq7",
  "key6": "4Ea5yJHgBmeb2tbfp9wtHfWWYq1pxpxQKjHDyS1rR7BHZEb7bumDm4G6CdFCYzCiTgi3pZXshyP4mDVo3dz5TjLw",
  "key7": "rYAZqKJa4xhdxsitEjQAHBA7pyWBAPbZHFnQcV9rknCmRHWyfhmf8zYMP8egshiq5r76fcm8srk4x1kbgqBLpHe",
  "key8": "2rz1kgk6TSysFdNrbGdSKrrZbRHRsPLGNJprM5cAayYt3eYbboS9uEtQXx4wyXYx2g9huSRYoM4F6sMatcXogCgW",
  "key9": "4cvG9k7eyZTRuk9JwLPtPeTUT2ysh99zTCurbV3zZrG7JW1CL9k7hvj3L9KKV389iU2da3PVRWCtBfVyHrscCSdG",
  "key10": "5Zv3JCXzwNGbNkP2SV82KbebeYZRWCSAyr7JdEjQBTErn5x8ckhkBxTnA4ApqAWTS9f5i2MZCPTpse7Eb3vqbb1R",
  "key11": "2yDqUeR6nCoyu6Ax41rQnz22VRnbEW4WtzJveDgYGwj7h6sDHXp6pXKziSZjpk25625F1RRtQMg6oGVXuw9KNXPb",
  "key12": "3SY7acWhsMBKMKHrr5tUbeMh4zhG2N4tGhgu4kwusWu6hxsS6gojKJxeRkkHAoqR6uKu2BE5UWGrbLWKx45ec2Gv",
  "key13": "5Ahk18i4mfNyFQcbwekd8ziaAsjaNKhzfRUg3SbW2DjNEeZANNMAgsyd1YUjQVLj9HA2An8FZtJgh63T7i5Gqr53",
  "key14": "4ZPghP6BhqaLvBfx99nxrftbXFETfzap9FK1hrxSm3Xod1pwUYVhxzkQ33wcKKgKVthpemaJnTmb1wPvj1geu79w",
  "key15": "3PGgYunsUpN4WKxaXFQTdHCpRxBUKZXpHrJso7L1ZEnZcgMy5w2cxPzNreEKVuPNmpyZjPq7YFT18wgGwpjsxRLK",
  "key16": "VAZeJqJTRMyHFvSN6SnhBuGb24iKfC8xPaGgQbfc115CmA6op9n7oSGLvBzwBSGQfdBioDT8jDG5Sj6aqyQbz7i",
  "key17": "4fqX6z8uEu6ziJqwifgKBfL1DoUGaAkUGDWqmZtF3VbmE6dhjnApzsK9Fwsr6ZTK2bHMpg9uikN45T2BXf7ztttr",
  "key18": "2z2StdcoR7ZvfE9GwxrncPjv5A6RZ5LNPk6MYHVQzYrTJxDRAscX3AcuQCTnUSDtVKxEbfbVfBQJKDCJqu8oWp6P",
  "key19": "MgDFKvS5rx4QEeqKAJtSj3T8LhuouG9qvw2P7QA8Zxo15WoXRosPiUTJL24M5iMsZWj8vqa9iX9mYkUgNUw9kFv",
  "key20": "DDwW95Ce3XP9yNqDE7uatSni4vEyNmWo2Ti6TVQpDTkMunCWQjDGseCSwz2VfYgtb9PQVdfm8ER8j7pnYfrr7My",
  "key21": "3SjWAHbtkZXEkbCWdeaX8RjVyh8CJxu9ZTQD78ohaECnJwPv1MYnfB62w614ZMHYaben9yeofAgQxQEGgjabSig7",
  "key22": "5tM5x5dEpBMcVct6jZ8GPjyUQfs1pN3dA3M11Cxf6sjS8QJH58jSGHdfyeQDwH3dHF8TGaHS75s4nCpi5z4ni9VB",
  "key23": "4sQuqAjFqJJfKrrLua8rM5UeZzRC3YLzQNu56WhANF32Kg4SEoBnsSanhjnS2bq5rN4ZbRkdmwkqxSn2Ru8yeGtm",
  "key24": "4AHnJ7kANJxAtfEcSLTxfWzDoLxsB9tNe9P3pCBc9MG6WVbejY4f5oWzRzZ9VMTL2pqu15X5vd5yN1VzWLfGh2kL",
  "key25": "4QEaQgBUWFfqvqXuCy5dzCQ7uj5z4SZTo284smCnG6gT2sw1VYkWBcWT3cHATZxmdohxabVvJeNaXuobhJWUdzVN"
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
