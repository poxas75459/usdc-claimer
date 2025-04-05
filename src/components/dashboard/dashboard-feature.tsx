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
    "2eUGKApYKfoQpmq8CvA4bpu1rgmNRJxzbVdBTtxNj84cmpYCBQe3KYpyU7pruUqJHgjBobF87HTKmuhs2ATa8ywc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQxL48knmmePKkW5ev6YGqDw3zNGjy7Dpad8QFmhCxhVrXUCHVbiWtMYYQPFGCJGDCe1F6DyeHqx8kvQPvYx4g4",
  "key1": "3qxrEpWACRuEyRofQKXhJBYpSz5toJ3QB8eZRHifnaM6RmWcJfssp7smMgLtzYkYLaU8r4FLiPWERXS3rzA3jfpY",
  "key2": "5iGD5ULvvwUbQvZqNRrBM6x9AVrQDqns2Had5H3Nv5yqr4C9LmuKEzaWvjXiMDcRqujaVWQ9EJKmh2UskD65xrvg",
  "key3": "zKSuK1QiX3Tjv3ZtBqbERCMJwZv8n3TzKXVeW1aGvkAx7XsQbG71bcQVepbrFqHpBT2ELR8krPneBy4TMYAB17f",
  "key4": "4aS7WCzJFF2bcQqnxwuo4cvoDjbtL1GP4GaMmoo8ZMzcyLbsaiwFd3xuxBiz5p1cQhYPgYK69ujKE56MYoR3ypFs",
  "key5": "5NDGwVeCkxhdYCVgNSxNjMEMVtMwSyYoB881NegRAnoCYehJr1mmnX8vH5ocg1PuD2HarKXzGRXAgmmMH1haWYRy",
  "key6": "4DVLL9X8cxVdqiNpzXj8PfYcfLQqXyNBqJsMz16NS6cp1MTy2rDYRE5vFi2GJigiJEPHm6V5s1SHmMRooTEDsBFK",
  "key7": "4UEG1Qe4Gwu8f4eDuxzWH7TXR2wytEyA8QnM9KXKGjUAsezqZMvApgssKvEPf46xRTpGAtMHeoPCs9k7e8yirxV9",
  "key8": "61tB8dKHddnMneFnnchqd896QeiLhdDzUxABhPVAHTXBcQT8NHq8FvDqbmosyT712hcBmLYvYMFzDCKANR5Egq2G",
  "key9": "EFRdYLkueeYcc37n95QSfaRNAYTzbLWLjfYtREUyC3rjyB6RFVWHFNvZiJ5veZLTum7UfqvzkfcDztmyaxEaSjf",
  "key10": "4sYCvpTMtq7SFUtrxQ3eu7ywxqY1uimgqA2zAXFTF9VPXMvxLt2q6Kc7X5qjKpKH3EcrUVztTqnfEFPPqaHtwzJz",
  "key11": "4z6aM2mW4ngfbAg9inPfqb6yDeGPCeAWMvcFkJfFZ4qMq9UKisV19jTPgFdFwhguzmWXvoe7fhHL3h8Jr96GBnxL",
  "key12": "2zUbYiGsJeW1HDZ9jLMYXPh9cRvRs3sy4Fh12C8pjXkqxYcdbsay342DQAZP2XTVf6Mf2xs9Ko9QLvE2NRuVtpWU",
  "key13": "4EM93LmbDKXeHp65JXPQwwE6WZfuBskpMrPhUxuhqL4oKUfenPaAHrAryQXD8N3xhepGCr8MqPvpjccptQYZQJAk",
  "key14": "5u2iL5cwdAye6MzimApuvsgnaw3R8rT1AUXntJydSAhxDv5GsG6g6rvk1iT9fVkrb2sshLTXZouLiTL7d49aRJpC",
  "key15": "5rw1vSaMLDTQnde8JDzbopNL9nRYWEtP9q6dJSDV18dN989NHyQTPB91TpFKRzsB4fx1eLN7SojftdTYJ272cX2r",
  "key16": "5cqwp3hgWbYe7MZpchFn2XUMNnFHXhVwesQmuuP3F7VmzTxGNBN4phJgTuUcGZycxTXtSWMbE8TRSkRqR6tnJPRu",
  "key17": "5tPPFh95Hi7UJLhBJnbwwezAHfeeDUwRHuDQBADMmn14SVk73avA6QGRATYN2eC5eeZUHWnHu1mNHcTNvrk2HzcA",
  "key18": "4MzBjqVRJD8froSTyEDf2Y2bCiWHXfNDpiWWjc82QPTF8asscYaC2FDA3CnhNcNwTfdV9qXRvcknfSen9mYEP8Wp",
  "key19": "5gnq7gCLxKxQvTK3FNX2zK6ByHerAP7EqonVcTWGySk5J2r1im3XXg63iSKWZPAehAqC1FYUMrBqrHNMSj7GvSqy",
  "key20": "2ZoqM8vWovvdq4fLTeZzZWLsjS1mpo8CRZ772E1GM4vqYRAT35erKUPvw2Hbmt2PuEHfUSwJzKvdnQ9kCCwPPFG8",
  "key21": "4pioLsmysfR5983bssNMDZD26LtjSY7mhtSKRETpBu6ipUCGjLJNKxDBJenN4X9Wt7HjSPY4SgzRN4dDneo62MgT",
  "key22": "4QEX3Uvc5vKwFYq6b53cJBtrYs9FLp38qJ6E3xfiZELh97DvW2ov1DcGJx4UQNBiSuZfkLNGLBoEjUbPUaucQ5ti",
  "key23": "4DoK49qS3E9FXqAaf6HfZMJZLYmjQsXuhCT2XmrmuhbLEm5ngBx1hTDmHPLfM2QZSr2Ct5DWoHAEgzzUik74EHdy",
  "key24": "5Ed1PN6savGKnGJdcTq9eVxv8aEKWzfZFioxFvWi5cvzodEHmKgmMaMUGzqBnuAYtSAYnPxTbJhg7HCCheYFV7wD",
  "key25": "5Go4j1QovFKk11JeEk4nGTsiFeiMYHQCpMjSPbCJxGbapd9ULXu6RUT7KdUCXL58y81voTddhf72sgPdSnoRXUFj",
  "key26": "4NEGRLy1qe3UE2VwFEykuDApSs1T5QaNFFgYAL1SVTkyLfPyBgzB58rMMCbUuUdxr2v5NLzK7GF5yBnq5JYJqEqL",
  "key27": "3hDmAZstJungnqB69DU3jhJj7bbNm9t98bww5nUUfnUeB6ijwifd7kP12HPjyv2kC71YF88ShRBs3XtMrfpmgb8p"
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
