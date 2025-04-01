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
    "45Zj428pVN98Y5y7qGhzbpbqRR1S3YGesnvS2RUKPA4QLtcB8CX9rLzMm9ykcqTd9yeciFWAUPvfAhDyLHphefVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UnodW4HSYnJdHgZ6HAGa981tdB69UF5ZPqh2NMaCLvr9h4QwrCRo5FWbcntX6tnM7WHb8CQShLCE4ggQ4RrJSHS",
  "key1": "4dPBaiiTwuv1cR1LKehrkhSRq1id8nswuCsnzM9fa1g3MYvLra4UjyLxiRriCWi3GKkFFhqFFscr4nacvXzFRiHg",
  "key2": "5253fHxf2A2MHnpFgSSd6RdkWGJQ7rr8TiTE9i4d2zCcKwUjntLg2QiUgX73ysPYAZrpEsMC8zHA38CRKTtSeeJ9",
  "key3": "21kgXazi7Cqrrrt5WyyVRPWF4qLpeaQuny4Qa2PsyNem4xTCCUMdsNJ8AXkcp7AGdAkEyGKLdiTTtQU6hLU6f4ea",
  "key4": "4RP1CoszMG8EsVR1j2CAoRUTd6HRES3Da8sSGKdxisiZjJd5ZjG57MzYNk8r4u2A4czUHbR6VNos181zUbAQa9WB",
  "key5": "4nPrSzFyBEHPBLMRcV9c1fqxqeMvhgtw1YZLJ3rKMUQ6ebdHq7NPo7Bnqaz2bBvcX6eNeuzZ6uw3QyWZgqLJtu5y",
  "key6": "2n4HDbv64uxv1MSwBJZanAcfzN3ExLcQ2nzB192Xa6wiSSbzETKGbS9uJB6b1yLXkCAcULLYdXmzxAySkYku6Auv",
  "key7": "3Q6iAGdpRkopYEooh7dDpfnaCQsXzZbrDEAf2zXVW5pg1vKXvZEF67K3B8zb5mHxtxQv9tSxR2G8RtbCr9ovpM4o",
  "key8": "25f3dHae2SBLyCryfCfC31b4ZAuvyzfet6Qwuovi6PGgpBNWWn9vdGoRD1rQ53ckCuYBZkHBqPw1PDpyQNkRP1QE",
  "key9": "ZGPBQzTiM28G1JrVsqQEyU7Rjny5C1apfuzHyAtMGJvwrxrdGYqvmDArULNg7VP3J3axibbAMTQMDyCvXvchzg4",
  "key10": "rt6bRsBtUJ7HgwnYDKdXEppjUiYduKXWg4NxPVak7Sdn2D3t4TyizVezEqBWiJjePKmsvvYY4SUgfKYVhUZwhjU",
  "key11": "2KLjnuRUYhynvJUvbiLAEujBybSF42GmzG3X5MAewYvFqyBVYF4hSrRYhPQVcV8q3qQKPmM8Ajer3HFb2FJWZhVx",
  "key12": "5XLdciYZZATKTHK3hUaBXnow6eDzeKaBh1Tf1qRUPAi9LDeTqUYx4i69hHvAxx9L6BdjZfd7691nAoKS93s9kRCs",
  "key13": "3a1a7WgGA6GgFs24mYq6Lx8ayhHAYKZ9kBMAPsNxknPnW7mhvoHQE5TGfWkS2v3MMfjFZVcK1Z7QQe7oiZsQCYF8",
  "key14": "2PJWMgagDTTJVeqkRsfVynUAhkAExbQg51SAXHu8AqSZvDZYPFPKpPpH4TWSZCX8M563Ezs2tN36TcSdMiSSjgMg",
  "key15": "2LwJLpc7e99p7doQhd5G4kU62gpw6u5FMc96P8fFDwXX4HMJkBNPkzRN36YwQMgHyyUmAmpKXVfKfeVx8nrNErP9",
  "key16": "3Auhn3yGrt2oJbspdEdFiHfrqmZ4aX1QjpqthZgFKn4BmxodBFcAFtJvnA3naWU7zFXvqUL6ATNaoDuBqYukAFQF",
  "key17": "2zfqNX3uPivGbhQPosbSQNFAieqnVSf3FK7JVhVUvdjkGbRRBpeTUUSisrSE76srpkZep4cRtVjoEwcFKus2dWsV",
  "key18": "274QBiwCZCJVrGbe9ksQuJQH6jqrrVte3aMQV1DL7wHwtbkPQAuWL9EmHbqqNWkD8zZocqsfqfJFXy72neqXFZXz",
  "key19": "4WmWp9CsduVkJiu1cruazpqeqsHFAK1TqruMunFD7HAVxiVTjFTQV5pwgi5Beq9yJa4MDqMXmHHZW3GcPJgmFEM2",
  "key20": "2zxaWLeY2oGZWFkMCU6t2HBn8mTdSNtYGc8fAuFqDRaN4svbu2xTavhdzVapiv6EbFUQpfnfR8TNoru28ytUgZs6",
  "key21": "42bCazCt35BngvNGXPtCfxnUctfF85qdj1VwYFHF4EEJmNUe3FSNccij2K4XfYhsJHvfAGYcRgZQyUV34QqxfZDN",
  "key22": "qP6uRN2vWdMBo5BCUZJ7rhC8GYnTDszWxiaSMiPEJhwQBzjaawwMv8u4xdnqC6f4XUoQaM6sufzMoPaMu53C6pQ",
  "key23": "a9A7VZ9cPoHkGKtQTAkNZ29uPgLJK6VEUdQgks4LEdV7xCZwS1efcxi2CvaqarwLeUC9Tmoe6ki4MYXUNTq9nX8",
  "key24": "3wRfxrj4LFc4W8op2pr6ZEiHSJm5x9D5LFQWA6LimRb8Q1YQsCYYGQ36XhZMFXQf236XuCdgUgMkCg6QJ1XVZdtU",
  "key25": "5iFwG3q2CstRXeT9Z8JatorqDmxhYo3fx9eaxXjX2HTuMkaVKGW3fqehzP8acDcv1KCQF3QxdynvCJHkBwtfB82f",
  "key26": "2ddznguVXk11D5Kn8YPuGFJN3cQVC1ysaSikdFo4AzEiF7ettNbEtw74bn9J53Hg2uCsVcSCL7nUvzQmrTfCrVEm",
  "key27": "5PppF35hzgcHXJ486AUHDejzna8mNz3oYgsBWCNkqyNnvdyKMyDUtWUjMG2bFzhvT34Ug5t6YhAmxoNEZC2jZZUb",
  "key28": "2ShadHops6ATPNJ6McWZ9Ss1FQ3GvDTEzGJzKRgLXWnU2hnPhQLhC8HxCJoRM7zzAW8JbgqsfAs3miYr1LWhHKFb",
  "key29": "3JBbHTjh3DjszD2KcjKTN7UGj6hdQoL71FewMo2NqM7Erd72hpmzTejTeFiT2MCAqoSrB9wXjjm172mBEcy4JBBk",
  "key30": "2AwCu7qWQFeqeJDgrcoFgR4p3mUHMi4nyMtFZCPYtXJZMNbLWE6gXmHLfoUbuYdU1T3Qr58yBN47Zcy4c1P9c6EK"
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
