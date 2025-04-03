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
    "4bwZkz3375U2rkXq19Cmgy8grGLsWC8BEN1gE1xLdLBm46StCa9QouVGektXf3sipR2Zni2C3jycJPf5qfhhxpkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2q6ngd7C4wCmdsNk5mYByKrG1oL4aaFcK4mHg4V7ysAwyMf8AcKC1KeAU9F46KdHTcMyNn9SJMB8kmg37HEcQi",
  "key1": "4fCQjrAuXNALcXpgDVwxim2BDFUnuAAjYPaNQYtYhYAyAjJcbzg6WGk8qZ4Rsbx45hEoqKFbDJtjHbpj4fVyh2eF",
  "key2": "2nNq5WACwBgCsh8RSzqneiWwtieU1geY3VVXVmpCxu9QXLsue2j6Kagu838hNifr8hoWaB9nR4Qyidmszq3yQd5T",
  "key3": "2pVXE8LXAQvSFRzF1rPFitsF3Ta4EPmnwQVZRioWJ8uQThUPc4ZHdLDAPT5624gvF23GTiUY78tNBEFKYyQDNFNj",
  "key4": "2sdXVuhBFciGEChwP2P5u4Xi6uoxAkLdJYUXDwTMfcMyW8GmeL3WqJ8YqtRSnLsoc2DaQGcdFEYjgZH1WAfRPdGe",
  "key5": "3xLkXzW98kFqfv1Y1DMuyyRJWyMwNxG9pY2THaybMHrVmGCpmzRTUuPdDZXqKSj32QeZqUZGHNqwg31ALyj9ypNg",
  "key6": "3QNTj7pReJpdsCDwyw2JLH1793GYJhT3CsHbVmg7BGJZerP1PL6G6XGS1nfNNKH6cQumkvX4u5a9grk1i34gtgmR",
  "key7": "23d5jAxQv3DaLD2Qobrz7aVHiXF7c8mewEtgsGgpBq9LLkYgWcyZTDujFFGZMGbM8umzcZupeZEX1G67kSbhLK38",
  "key8": "KvLJwsJhXNisgkD1iugQVNzpjB5sxgLw8oKcowPn7pzAL2qDpVASKJ7DNMdQHHSrNdD9RvnZ2P9cZaZewN9PcQX",
  "key9": "3uqwciPUe2nnVbEqLRJ13dkehiMJtFD7CzY57oMLd7ao3RdDGDVHxVAQiaqSh3DmsyGFZ9EprNwnxtuge74rZVTW",
  "key10": "29gP7jC1xs3JMUEF5V4J11pHCpSsxFpnVJoea7R1QFuLFihvqSxGpAzVqtEuAqTDyz1ApPpumTFT6KyQXJZ5VB5C",
  "key11": "eqRUKKs51vD6aZEyyYXMExfkYwSSvuTj5Ayxvqt3PQr8QCp5BzDmNzmzTPFfQ8PFEikb7csnoWQYnGoA23K8fWG",
  "key12": "4ddE2dj1JCpTcPNSkpwVoqx6MV1YwiwQvwcKQdSfTfuAegiSkUQu9ivvXfDKzxvtvjSCncNmMnvFqZzk4fzP54fR",
  "key13": "4XxpsQHCDxCC8pQ4DnaceTfGorMMxQXkT8ywUNN7PsfS63ZSxv2Be7TvW39UoVW4GvVBoKLdWjxNxRkLHSF2LHYN",
  "key14": "3GaN9CtqdufKp3w91i53PwGX9bVJam1ycg2BdxrfyU4n3BH5nPZHkN1ypDSH6cPy21ivrAfzCzXn2dq1EX4Vd1Ey",
  "key15": "491PSVgYdqqyRv6Kcew8ELQn6yCcdpAtDCtieLSxYWXkcvQxwzZwT8747mt7vTteNa118etZUWh22zUxjHjoMM6g",
  "key16": "BfWGmfVx3xjJMJPgfxkXBg4zb4vYNV6nSPVYxAF7tGxq7RmKQaHBpGFgP7d2iw5SNYSvYr9PpmAGV5Pb9u9kt3y",
  "key17": "HMKjRvuKBTTmswSk8VfA2hqwoLHnStTzrimoLvYL79zVXL6poNZRnBQAcwM7E9tPC19qu9JjvqKvJJeagmk5vp5",
  "key18": "3B2LxchFvDc4QNCBFiTtXnc6kuYP76tgxhraaTX77AyNbjziQwdw4ZRY3kpiB9XQ32cXeQhAcpjjcvAC9MyXR6iY",
  "key19": "66bcBwz3MC5TYyMnpbduGwtDLqMv941w7SoF712k7ffTRLRt74dHsdbma3KmZCWwBoVxZQKhnhksoougcJkS5tyV",
  "key20": "zqzGmry7FzDmCrzNMYCpVPw8MdT6Hyy6m1Zq5K9Xs8JwSSSu95MYdeJftCex8PAmxeRadho8Y6VrR9BnxyC18MS",
  "key21": "5XzBbEqvNyKJJ7j6q5exW6tQDSErVRHUueWaWBv34t7HqqE3ujoFBFTeH3Bq4YmXCdB2L2Fp68qxnSXmpKf6V1TP",
  "key22": "f14nx4zZ4Jn4vhMCcTL7sPxPQLeysC7TkjhNj9Bif8VBQyrNAmox8cQfZKTPuqXsmT6KnS6kL4g2GVBCtQ27Zu6",
  "key23": "4FFVFcTfUvRdmc8wrn5JH7ERveTrPvszvyMT4fYcQhQKz7nrzs1xu33Xe6NUFUmiKPd9rPP5sT7SXYz2bBZGRW15",
  "key24": "3gy5Gdb94E52UayJdzdfqJ1gNwNHsK8u4iQ1ZUnHrPmuYU5yYefp6Cvn71zdRugFkwA1s8mrKHQuNS5rUjyFmnw8",
  "key25": "3caMw92NAd6rA6khmth5nAcThgujwnuBh8uYwcyYQo5v2S3TGFWCFbLSeCPuWSutmwvQZ8ErWd7FbhaCQvH2wpJQ",
  "key26": "5DcUKxag5BvedaVizdRe1r5CWUjwYmbd7zUCNGvpaLL6ZaDQh5gyt5HRYN4tbURg46SMM2DWbAdRrGF1wViokoyR",
  "key27": "5qi11RGRm7mpgrLVuRPu5W7BaP2sVDkjBEZe1NufNd26b9H95AyxPRNQtPR8v6k5ExXi7GfNAPBs1WtTRjSb38mv",
  "key28": "4t3QuphLH8d9ctsNfcqBixXJ6Advz17jtezsPjojMQ552ZHZMucryKFt4QxanrcTYAkKdJc5sAuvtGCgVtJXVRA6"
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
