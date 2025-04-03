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
    "XSumYHY5db6PHEctqiidKvubtBHdY5aP71UJZdgnKnU7rX2Wkx3htJxAcgusTTQDNG2s9HBkKjwVajTmfpt3hvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8kZyuwagjJfc5wjQQgtMLqx3hbtuL7vRFEQbFVKEup9JSh91nNtKDmExJ4Xohg4dpBMjfWqiXdhFQSqNnHDy1T",
  "key1": "4Sj9EKCaGA59H9zNQBpZrbb5KRiVp8qg4Q4xUtCbmgfw4RvWyQUKbx2YpGy2BHNc8jULdFpy2CFCYSc5GXU5th2a",
  "key2": "XoKvmcwNg1iqTuxjmhV4rs5832mqopShAC98dLGVy5r9EtQkMDXSmA3jAc5utY8zznmjTZbdSeKcdwtX3FfqPZg",
  "key3": "5oCqDLmwrQuShrgYRBrxCxWrPfBzju7PN9nuA5wJ1bGMHwn2FHrFLHzCb3wc2p2BG6L3dXtsnfEWkAuZGrM5peG7",
  "key4": "2emzoJLZMEKxjZo6E8ZVdDiTKhZJtRcGo2hLUCF1tzeKRhgdxsZaQqk5BRpAfb2qWEdnGCjwc9u1eZ2SV5fqHGf8",
  "key5": "3gAS1YJBmgy81SpRji5bGEoiJQ55gdeTZX6TVgbaK5ENaMcmAKHwzicf1m2YyycKDy9bmJnYXeXDstDXDMeXvu8D",
  "key6": "P3oBEZuiiomCzSRHrKBJ3YffK9eGEPUV9jdyVX5V82YgnCbnNxymAD2eZKcj17ZmuJUo6bCt8bQy6i1P3wWNrf3",
  "key7": "kfjEoNS9vFcNAMtPSuYhrXBscQr16g3HdAEqR4RDxnCw4KJkKYX3xdQNq8PNagSkEJ8uUcUWCtRa7zEJ5Bku2UK",
  "key8": "rJvA9tMM7KBDs4poe4k6brJHvFMAx5tFQbvQ4jop1qNHd1DL5Hy4i7EshFGDaeUAzwtpHJGVXb5KAywQxhB4i9b",
  "key9": "5oK89qstMRGqYQv8imqtdiK4JBZWxBLNwzdWGsky1RU5vwHvo6Voy5nothh4XjNvjFwd99tkq536z7vkenewaRs7",
  "key10": "3WcQXR7E7d5aQ7TeCJSUqPDNnxvsborcrKpZ71G8CvnPc5zY3rET6oBjfcNCpSAmedXTNE7X5GcmNEoqSi6ep5F2",
  "key11": "2mNusjxfhxpewBtsmQTBrLaGwL3N1c2kEThmiq89YSVEjhLEiFjPBF23DjZaASdkD3RNig1GBrEzQCmMSSugyegy",
  "key12": "8uSv3ospKW2Nf8LouPgCBW2rkQ5FvfkojvMh8PLzpwZtXvZ3UMFuB8Xc54b2dCNXBpRYjUMr69kz6yHvWyUqmXQ",
  "key13": "2Y9QpkY3m9oqQiwb3MhwGifuVWRWDH2kXJnyCGysDTRtZbmHwwD6EU3ZYRGXMaKmB6hjFEJ8FS9reUCJbGr4euhW",
  "key14": "5AWbK4W9mKiViXc4yEdBMrR4jSNJNDqfgV9aNYf5HDMPebuaUjnt4MFCsh5kae3o3uXt7fhibqC3TssaHbp3Vc2w",
  "key15": "2zm7S7KbyRWtqWZ9e8bhPAFRTj6RSeneEP726k9WEPGpcN3dzvFdnXm9bUZbQGES5MVKiwwEjsNdTcDobzdsoBVT",
  "key16": "wLhr7DDHt6ahUoPx2xBH5t82wEePmohVbgbk6mJm2zT796u3GfDatWhufynkUisf6yRNDzdfVgsjTZWe75ben2c",
  "key17": "5qvSvGVY3qKmi1X8XAR86gh6A4CbgnjNX55RMX33ZEJzv2bjTc4oLoafBV8niWR6WLPz3Kt5h7nTxHfXW1VB4DQ7",
  "key18": "4aoeQLTHu6snaf9Z1rm3CsHZXdEzCbhyk1m8F6rVA8rDM5uiwCN4U1c8CnGq6XWuxxpxDMVHUHdfdxv4cjBNNUbY",
  "key19": "518X9DH8mAm7B9aXNaqHSEfyQJoM5nsuCN35LqabVVxw99iQ4DsFBs2kY8GbYoMzUxQArELpqfZAQajTnw5jB8Bt",
  "key20": "4CGFuDqFd85ZfWUJXf6JhpFezPrMCSo9wkxa7X6DAnAGQ14TLQ4H3PuM94PgLMYLtCrdkUs3q1EM1STs9P9oEdun",
  "key21": "637gcmcJGvoEtG7YjzcMC7R7Nz9w9xvm9S8CouKc7U3rbaKze8ryDn7GfAFArcx96Ns9YpEgrnNCvyG6tJTdSJbg",
  "key22": "65D3QujXLqHgLi72Pda2Qx2pfK7qb6WnFbJCviD9gsnsgKWXN96UTYmosG9XmxDMGdqeEbswKcCoQQiEtz78uqWS",
  "key23": "2WF3cg9Q6c6ma7qZcUZ86SnfE71gwcrCRz9Y6xN4rS3JnH5swmXjDe6YDW4G8vZrhUZ2o24bWXmMyrrZNJ91jnWr",
  "key24": "58J386b64LsVScpqAYCYUmyFKdof3kGn9F3iuXMn5XhMTtCSSBSCMR7ByrBNpzdSZRVRZ9VoDid3ZKnH1wPGwHKM",
  "key25": "4pYT4hsCSp9XsqL5FTXxnojGL7iGQPoet2tQ54icxi1NDLZakntzAf7kEKuffQNSGbWpHjPmH9HcAFJsjkP7vfEe",
  "key26": "5QQ5qZYPVV8nxjzoqGPT4KCfMHD6QZoNf9eCYm6aR57kC8m6osi4NAgv9GBm6rsRR7jnxFiSA3PovsS1Sr4jrpyy",
  "key27": "2KKAY6yLcUajRu4WLJ1ty6fwUZwsfrDKvY48wC3L9LHN8PEnq1r9WoAv3Qf3HcNeh9FJ2t4DfZcBihsask7qFBfQ",
  "key28": "4MvZvFAKQb2w1y2UJkRg4uU77dByA81JoK5jN6k84mo7L6murgXZ5jN8LbftAE8XmBxKgNtbJGsmxVwSa8cnw86t",
  "key29": "4kHdSjhuY5WNgu4bRvNdLgH7LV261dCQkH4BdmLu5udtDENXkmc7qmb7JnvkgMZ7kjAD9NqUVwwCV2QFEEsX4AuM"
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
