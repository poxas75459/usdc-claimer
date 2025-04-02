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
    "2AMpGTHimizrasdF7QLyS5uaRSKUJ9N5Z75LaZwTrjVA1nVq5vj7VkyHrwWGnSq1kcXFLGz5qnuqpiDt4X4kXXU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLGtECgZ3pAvQLdx3vqkd1m2p3h5q31ZJttwLFzbcwh1w4Yt8Dg1DrzVS5Ek2pnMa28FZkpCWBpLHBFrWfe38ik",
  "key1": "4tnR2MHdwwkct8bZzTQQh7d72PNQW5uYsbW5S93xm4K9RxCutaRtyqraLACki6Tjue5P2xtdwWp1MxS8cwK2zE2m",
  "key2": "4ogDAbL2zLZCE8ERZ1zW1iSC3bnDcUqZVz6WGJFm4KYiCLzjbh1CbiYFcQXqQJXqdZNQ1S6zN5wMxhcyrghn6MkE",
  "key3": "2SLEW1iiuocE6B6jhfK7zUj46uKe5kLTsyj2k3mW8mnkZVQozhDZhnDGXHFXKxacvuLeoCcKSfkEvpzf2vkyD3Xq",
  "key4": "4ApEMQgSKvzNTLgzwa3aTT17m5PNYNtcKbLWmZtbmYpUzVVZejTYwDukB6vnAgLS5UyznLRf68uMgc8Z7achjKv4",
  "key5": "61twNJNWJMVx2f9V3m8bVRKcM5ugVqzaiQneGZsCVyJLbdHgnkxLrgCevpf76JUHLzTKMJqVdqRKtg5HN4t6nP9H",
  "key6": "24Dra42Tb4tXA4u3Ah2o6aKjsYVEwaQvrWSgmhQDga48XGm9AKbeDpYitkDKyb1qKWJuwo3jjnFEfxmp1iBuabj8",
  "key7": "2n55RysrCnVjKrrhJhR3hSEjSrPCdX93Q72DAL1PZPzwVXJJj4deHKNAbux8qKWTeuTRtjviYZWpkcXsKgYTUN4V",
  "key8": "2UFgpHHVD7AePAA8RRkLq1S3GhmWRMeFinLVhDWdDjfhcwm6cXgq3sCdn4teVqFyiAd3FxJtxx8odzQQXyH8gf1B",
  "key9": "5WU4nxVLRuBqLkyfkP5AZ9PWUryruMFZ92WjccsSbAn3gXaVPuaosPwmA6zffBz5diEx52eZW5vL2iFE6RR6W4CK",
  "key10": "NJTMPnmce5niwjEqyRRBXAFKex7Ju2dN7iwCdWYFVtbdY2p73krCiUCbwBdPMnYXrswnMUcUM6GuJMpd4snTMHZ",
  "key11": "WArkKJyGTGLP93BCYBuddUZcqJasdE4GF3oL4L6CMuQPXFSms83CbDtADTPMVVRbxKjC9dwVLmdEHMd4x984XYv",
  "key12": "4kSwttFfdqHyHdzor3h5aDN4Wbr8AZfZeGJmkMWjeoiFeUwo1jfDmCPPJVUds4fDJgaBEQSdRtc7WsyYQm8EFcE",
  "key13": "42EdRvKURdRgxSTwqr7XNdLpYAn1k2QfaYJyV66nmCAj8GMtQZNHfoeFUKvM28W5uiFHHqDGJ4ibQXYKsWa3bHCU",
  "key14": "fLD8EkpyVHQauLzaBaxKB9R9g9Lv47ohAfzkT3fHdVME5iqzxZWq7cyqQNZNFMZDBvRiMjzHPUJWjyGpkzCzxL2",
  "key15": "2qsEigLNeJTUCcK2BqdRRUVC6KogfnKRAs6Y3HZAYxrCvSKktzS62HbMFZB2j1jzErtenBPCsyTsCdqdpgJoxftW",
  "key16": "UM7LLjZekJFUaMGzE8RbaoqRQtAyGRVvZypHtHPaoK2Vxq4RaZfx8xBRsexiYTRGS2kQwGzsJHwkM4BUv2MLJi1",
  "key17": "NtMfahvTt1C25dQBVDHwvsP2ofTexRqnHgPdWE8U5MxFddbXZCFSGdwen9BT81TjdNCGebczhZEjTbi7EBWizop",
  "key18": "2U2V4xBRFKHbRsQfaj4AzTo5kGZqNwm1s1pMiehG1uEfiZX4tzak9z2LCtnfdby2Zce5tm6sXpxQtWvujMx82mTA",
  "key19": "3TWwTCtFM1DyatSNqzNKgPyiEzwg5fzApgz2ECcE6wiVKzfLSqKdmujUBaBPbYvPapaxEFYU3KhT5TPfYUx7zaHk",
  "key20": "4YteEAa4s7JEDDms3VcXZ3MrTXd2P6B4tX29oupg7NvDAoQL3vQ9ty2cXvo5tjZtu55NZwXxwLeSG3bnjca1ZiKK",
  "key21": "5sL4aPFbUoTmksEV81TtWhPoYoNPQWxZzGH4tEPCpMDHHxC4p7ToJk1MHm83M224E2XavZahm3quKR4AoYUBo84K",
  "key22": "2XHhXhQoAf8222Z8oF3qCFDr9wweigbw3Ss4muPdbGs2aHpJDyPpKF1PBqGHHHkSPQSsWkq6jKqMBGnNfoHBqTPL",
  "key23": "22wmM4biN8cTzmqiEFchnkcK7vQhhAkt4To7xFGgoc3xAqdk9YL3gvB21c1m2z47p2xsnwShkoErJJGrBBaB1FLD",
  "key24": "33WeM6udRCBAWFJzQ71H8Bo3QmnvT6xsMwwWRVEK9bPjcWnk8ue7qfn7ZqHmDrSP4V8e5ikqMA74C1V9QPiYBNyk",
  "key25": "KpNG1RBVbodUNdoRYsEMrYbJ7h2jaQS8qZ9wEVJ1qfWTETvx5zNwHHwciPWm1sWWSgJiLSsW88hLNuLxJkCoLK9",
  "key26": "3vfLer682bZDZbdUXxTBZjvoZvwYQR8cHMH3U5TLgjMxX6ZU99dCY1uhKCS8RffH1N4jENQcgAVKmPJUqsfP5Jtg",
  "key27": "3d5B8VPF5umS6Bq513cdNbx2PNpCRd744az9tfHUxTLWW8s3qknvwkcxbMK6emT1bcih3shqiTPyEdazeofnp68X",
  "key28": "5wkPPzZath5BHdds5rbC8FnLGbrvvhruuEdx23sWWCmb4KoLRwQ9qFFqzQ48HLYLPoRpmG4onzc5b8C8PGvWAF7W",
  "key29": "A3RMp5A3vQnaj4vymUfcFMGp2bDkFGgSaJ3BAJfaeZSpFvsyHz2vCxusweeabVX8ewRPwam99njUs4AHQY86hKJ",
  "key30": "4dA8ucv2w8LRH4JH3wMDUyKt8fDjZ8FUMqX167jqqiqsNTSPDZLxoL1CDXAtJsD1AmnnmftvgjFFkujB6G7BnmDj",
  "key31": "3GPjP5moC6ETisQ93L6GcsXJuU7v8MxCHXPJkdShrEQsL6AAiTnh3QkUNFS9MMfJbgZCbK1xqYsWXnQ58L3nPVdB",
  "key32": "2wLy442gutuWyrw68XirjrvRSKfaQxrM7Y1h5dM1mY15RNojjV2k2SpaAjJjEwmaUg5wa7m1oJfH9PwZzR2TLJAP",
  "key33": "aW8MXy1HaiNrszq55kHxZ3to4YiAt4YuCe3J9Ev61fa13Xw2GYt7A4y1qg5q944AkokyFEmCrHs1JzVoDhYkneV",
  "key34": "42BmUDuWjR9GMgfUpJpV5tUbuJ8sHy9qmosuQ8ym58fkUCsjpKvdgkvzvTpmujAGETbDhinGDcEXi9RyoJnBmmRR",
  "key35": "3BvKEusrN24u3i2kqDd1k6iP9KQaeYYHq6SP5HCBoBTFL1hLrVQqLzfeBrHA4q2noVuHYwi6qjM3PWfcVtajJ1og",
  "key36": "2vjmUajgnXLMc94cCWxAQ97jvvECP69LvDbKB47BRq4eHZtijse1nHQ7D9Qd76SgdNLZaqYLPzxAdGHPJ7m2hCQc"
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
