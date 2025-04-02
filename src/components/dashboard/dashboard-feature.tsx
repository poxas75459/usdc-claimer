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
    "2iFxJQXhpooeT1btPMuK7jCePR371v9iKzXefxsBF1K5hMtm1swgFtcyYu4MtW81hcmNNHa42qY5YYpPjpfsKMPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oC7vhRUNLUCCEnv8cS27XrAgB1wBz7XR2a1UN919ztUQhxXps3DmcLAr1fcYZ8sWuvvtTzAsNDv3VsNrPuj3eJ6",
  "key1": "56fTNwi8zPQFmV4gWctCb6xU6hXX2Nuhi6mkKpRcb3FLEmv1A6c2aC5mWqDfXSuJgPepjGpGQpdkaf9STNRHPpKB",
  "key2": "H5ZWn51eck23LhdkDqRR4e2uoFp2xKpFHUCzefdNPfqGaFZkcAQmh8RurwQH1FZvwk3TM7QtWk8hwuygN9mNXe1",
  "key3": "4ZPPhYSHtWgcM3G2mdV5mrcv2p5f3V8pfjkDLayuvXX7Mg2e1wpvgXUvN2Tm9wYby6RiFTru8392wmuTCEpMsda3",
  "key4": "HvhXUhCL7JNGmztZtBHmYNwJ1pnQDfd8AjTaH9E9k4ojxRVKFKD3Ds2VTix3UAyXa6Ect1xhRiKmXvMPsgUsBu3",
  "key5": "9BAxLQv8x2tDj1wtztoDd92nGK7vjfXBK4qUsRwCkbaDmwJjHCXHmAhozdwL65ojstbaR79dXrevUXGBJoo58MH",
  "key6": "3HV9tdKD9pa4XxWUggDxC6eZZRphgWQPGAZ7cvRQfyRXznwYW1wJYRpgC6WAYVvS6G8skw2CWosLryfX6hfUtcb4",
  "key7": "3zKSmYFDsn5wyUX9D2qk4HK7wjz31Zq6ANAETkobUV5KVpXsuWnUnq3Q7C9jBEWwQHgCvPBGKSuuCdh66nSCayZd",
  "key8": "ufbe9drZxUTHruDBSAVZvJVNkqJNrvsfq29ZRfpgfL8ycircHwCBaZNpi8BC3oPT5JUNaHEnyP48yGGSLtBNNgW",
  "key9": "4V4pXjR2RdvHVPcwMrkMbmvuXNnTM6CTXqgfkM3h5KHse8MwjJruY4Zq9YP6KCMnxfHE2rx26zn8m71sXwbWNjHS",
  "key10": "4SLjF1Q7CwJFfFqnPyq8arDPawDxBx1enxcBhmfNB38ZquRP3Bgbp9MoBAd3HMdgznWu3YiX1absjeCW1cEwELAR",
  "key11": "5gSvJds6yzHasS9VAgrewkiVw9ToJ49oFyYzzG62LifcGJwVsK5at6DpmgAR6hNzxQWiApxskRVfTq4ND5775KBk",
  "key12": "2gvdLiPsAttrjG2eXXbrTShWHHHmXaKMQ4Ps4Uhh4fEDdVMJbWC4tW2NpyMmoenFxnYdbVjBmEbs9CeB4LQRSXqv",
  "key13": "5Eze5LMwMUR88aZQ42LDT8D4QULm6Utt4kpAKedGCGXaZoLt45LUs1GHLAQJPFqfZ5QwE4Eab38rzpf8JqZmHbCS",
  "key14": "2KK1JZ4tQARbWFdKR99LwFMSRAcZ4fJJJ7rqzgT38X9Wt935kbhUwu3A6u1TDBQo2iwzWK1PuxSYQQVL82UGndHf",
  "key15": "5tWmwJuVnw1irK81JQLLtTpMZExn9P17GYF3hSjVhHYLXgcgFzQYp9Ngy9UReCKKZFTUQjRSDP2vcHTDZwckgtPF",
  "key16": "65QcjiahN1GbuJsyrQC9aV8va5PdVV2igq7SFmgz3CgVGYyYcV8Gh6hS42M4rR8hnAN9D8AerCF7aZrafeCzoYjH",
  "key17": "59eK17FnWJNZ1TrbeUkhtgBr3MM3FXXgyz8rZ6k5v4aiZ4h5o5rk71DvB7D4S6gUMxbdfvPGXdtCwqKZ26qHZuK7",
  "key18": "4gppqnn1jL7kRBWCjKiFVydju85YwP5FT4quPTHN2PBz4JyBV5EbTbrwHjoR5wYdBKNpbN4a58zrfwyJSsY61bLK",
  "key19": "oHkiE8E7WwrGVdwLDRQr3GEEwNwfEyEzhtcwnvuFrnHQ2sB8dS7XmCJn5hT7XQJhqNnu2q28nbWFjcqhhS8PViS",
  "key20": "5cGydxsV3odNRpvNjH5oWR6wbxRU73dzaqa5QPL8FroUnzmcUiDme1wAQjcirsvJUD7PYtJdBhyBvsDbMWEhPg2k",
  "key21": "3umjbE7xQbAvneMwsKdjE1ozVAsvxzAMMNmAyJzbEc2DeB6oZjX6aHieyhCKT4faeWXGXv12UgBSudbxLA9MeGe7",
  "key22": "2dwR5iWmL57TKSBgbvPFJXr88DxUsGekR66owW9dCz3yb4zCGfWgrtvL15bkycxSjRMyQCrjhXFVeznJQqEBUyvW",
  "key23": "5WpvjMTShZtUsWtC3zf4Hf7VCX1gPfgHSs9pvpoNiBcYGq64fY7rn981GUmDHmgyZDPCQTtPFgNh2X9fWgAEZGE1",
  "key24": "254wEwuHi7DxnwkFBWifsnRFRAAAk9XH3LAN4ZdJBMtVZGvJbXcV9vsMya95RHLZHCXKwCrwFFgEkUW5n2SgzSox",
  "key25": "5g89GRRe76RQVVP4L8TNxj1N6uaKAH9e1EKWwTEXpQ89hqWXgwipNSatVtBk2EpdGnFhBiBAHKdBvVK44EHL5WZq"
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
