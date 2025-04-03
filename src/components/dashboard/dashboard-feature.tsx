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
    "4Lb7L65WpPz8bKtTqLwV8k4YgjsR6hYULyduTYGkpdhFxEyKd4diLBPkVQDgmmQmPQi8Etu3YdK3CDTjzwbfe1xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22pQsVXwHFXJfyJdWaRnsYenXovvdNTpQKpad1WQ93Fr48EBQ3manXJr7zUdWP9Gt1cGYoZNFnMFCdxPh2K3X6SR",
  "key1": "5bzbd9AECNrNiZJmHhD7UUXpx3CQfi2QugfemDoAWJ8tLGrjXha9JhC4yBsVZpXkyLa6ZYMNk2fSxZPq9zijcFhx",
  "key2": "H4a4ZPEgCP79hr4dadoCuYKMLZwdbW2iDDxFMXBT4BsWPuEyn1j113Uxui2aXQzMv8jK1PVSK7Hxsw3TZ5n8Qtx",
  "key3": "29wtUKiq42h9xeZBXKyuyxpQD54ng9x8ZSrrD48ZcXh6LPS9bEezv85M1uafShpkRCjiwGzV1Kdq4EUtfPNwK76N",
  "key4": "5mGGrdggXTmT7J4DCt7wwdoR9t1gas9Yx7hSBf6sos3CwF8JZ4D9S9WLNfHxW7yGKJAR5RQYujkESssdM14wQgx",
  "key5": "29DxmR57QTMyUndVTaM4oJGF3PTgJbwmrpQvCV27oCpi4mYgMmpPt8G9uyCkhxoof8aCYKB5WTktF9h2Xbz8TDZE",
  "key6": "3Dsbon9HQ3sCuPHaTkpAqg6dLyNwpaqGywfjbW3p89fTA9QC2gcDLUm7aHt3mkux5ed7GJpb1g4BjiLZSwRLgdyk",
  "key7": "4HQc8ehctxW8CAh2Ks4ebG51VJbYaHCEUpjEVFPgMvQLM5KbmL5ZZ1sQ5Tda4irYbyeTUCT4sjH1w73mFmMyHmbd",
  "key8": "2D94mRFMePevYL1jVHi3k8BpDy2FWdp2mmGs1gNMuAmqxioe43QPVXoaztWRHUEekcqxZHdGUd8YdDeyV9x4hWD",
  "key9": "5wGPVCLXTu4nd1SMf2aHBjpXH8Juotv6bR8VhkFpbuivSPSV97vqCuv89QTnrXVpBsqR1Wi1yW3LcD2yRQmjGoxi",
  "key10": "5k1QWu2B31AurBijk45CfC8Qt7yn5xnorWHo2491aqJaw8APuCSDjE5aSyY65C7HwoH6efKtdg4kjAAGQKd7vWJm",
  "key11": "2G7urx6tEFFKmRLNeDXiRuibayt3rDmYA6T6q9SpRxjp6aQXths3kh2XZ9NcDwZKvC8rSvK7USYTvz5u852k6L8",
  "key12": "3JATsFo2ehv25WYAdajCgoXnJP7cchS7oJBipqhFu4kRCwS68B4edFdMtpVwt8whoawn8StTeaaCeYSmp7Nujmt8",
  "key13": "hANPJyqghn2B8Z72nM3D5cH1Dpn7nurUFB2LkLxtXscH8vWLxe2RTRTWrwSHHmvm8QYraWxQwtu3kNx1tRPSGzp",
  "key14": "5U3GPLhKBsRE96DGESpCMGMVUdhot1pHKToJiyTTMJ9Joe3H44Pu62owE4ja3f99DCXzV7Gm85695CgUd2fQrLGW",
  "key15": "3frc9Fba3HuSggKyEyRvxJuqjuDB3SHUp891dniS5qGkvSCGPCS6rjGnxGeFqdinUZoPSJnXNMBxejzuJNMy1CRq",
  "key16": "5y8U8HWLKTzgQiF1dP69J7ACJGjM6YCeSf9c92s7e411jFuvxKd7x6WD392mnfabpntPr5Kn51nsmTk2dXvELmVb",
  "key17": "5JnRxDazYLdCsuHEAS1d44EPTZnKsHouJqcWcDU7codNqnxufMXVY8A55zVoXGtqLWcHiVsmu2LbWXDboJ92rxrk",
  "key18": "5s4AHXs7supBaeqczA2EztkFr8TPcHSUSZbEfMZtwkM5YzDt5vAGutcBPJ7r7oCDQN31krHKdBw4ZrvCFSx3byyo",
  "key19": "vj4qmMdinh2Jzhqx6S5zjSvyARshqvZfrwmzDwr93y8CBTWG4uugE3LrTAGgxKQp6gUB2SXT85RfW2dEdNecXJY",
  "key20": "5ij7vQqoJSeyMwMr1wCvFHZN32ViLJMV3uroij317J3nj3nwiQimbmMDpKx6tSsGPoMn6KisoZ87NE6fRCL1721D",
  "key21": "3jQA3jvnAXDHBKSVB8H717vxznxGR2rUNd1V2p5FyTXeUURHKpEbuusGFEzDNmyE3KyzP2wmrDGKTwSWbgnPxchi",
  "key22": "4rsQnxFdXkg9WoU9XjkEtdRP7KayKGfSx2Ywh3VPos1qfwDuGzqKUfyjc9sWFE1NRZSvqbZUKsQfZdmFCEztZqxa",
  "key23": "3N1Vve7qSvhYN967TKMiqiSn2yDdjen4h3FpJdsH9HMrWk5gUXJungmELcpCD7smXkqSYJDP5NeuXXSanSciquCu",
  "key24": "3VJDhxPMcTGmowuXdg1NwjxzXA7CYxvCoCvGy9DqtzzKmLifE47L3Z6pJh3HhwcBpdgnXhY78BZ8ieRLWSgDbEHY",
  "key25": "2k15q1aZ6dXPSMbzmXYdrpXurqg4uUBC7N8zg37H4a8BaFRGQPrKjnBmqEznLzkqynQtxdedUZpi9z6qDQj225cN",
  "key26": "4vxvnnKrbcnAafCSLsP6nTwtYyh798tceg77BBBsEdLSeC1SHMMyPNAgFoVvXBqnpkd9ZqaH87yys5NuJucEmN5t",
  "key27": "Hi7hKHfpCisEZ76v7Hs1C5xNk8W9BiUXRTL6yiCxY6YmpXhMEXuwXWS7QMzciFhxYJgfmqETYiuUUTj4hNvmk8r",
  "key28": "3guz8DmC9wUxmimTNsH52Cbe8YCDtrkXAqvH3P61CMcyNBN1UVKe61csZ6GrfYjBsGSGA5dmyYcqpyQ2Jjs8Meob",
  "key29": "5VvgTEB8AzZriGvMKSGseYQasYmperwnNQ114jr812AAjarrKVKsSE6NrEvb5DHNFJDgGCghqr4QjqLPP76JDU2h",
  "key30": "3b4yd2rjFoSAfSSKPNm7YfXW5Wx1dJgC46ad5P77irHdZs1g7RkY9h2531tWJbKFX1BbaWseM4PkBRdxMwDQxPFs",
  "key31": "4h4uH6vHYeW4RKZCTZHwjFRJuon7ZUWwdeede6Pgon1NGeqcCKuR5diiBSt1PNhrmjUuso4E6Q1jXGDGvqvgVPkj",
  "key32": "37GqR8nMAkGR1m4KVQHqvy5nPneAL5SDB7FvAL5HvY4dBjCCqQ6TK7aexdEXTWbuYKUPeBj9dDaVra51b3bJHu5o",
  "key33": "47LTbvCdBG9Bb4XiRXAVTX7wuUmNXSeM7wonvt1GgC6bH69ykomczu2i6piozbeGskVEqZezrxNkKF5PmnSRPrz1",
  "key34": "QWoYNXWowfnypZmCgiuLh52TgTrCXN1L6vsTGrtDiWp3q5BqEQfdx1EuauiXfJeCcoJ37rymxShLjtm9gXyp5nX",
  "key35": "5U89jMbFrAzeJFyENMUmDkkoFzEq6YcvC5nNobsVN3QRviWtYBhEcgr9tFuskRh2HDs2QggvRKPZzEWtsZkDM4Yj",
  "key36": "4ofFXS3UEC9hVYrnFW4pcDers2Uw9RtGuKbkhTBHA2wAUPzcjE4r8jFkP1NSBDMSfTVc83dGd7kXX7ApVYLpETcy",
  "key37": "3MtGwzTJRQnnvomTFsJd862KF951mHRkTGwvjSieXdTQwDvWNfhsKBm93rLnNU1zD6xnbj8sAj8xxsvYkRWBVEgq",
  "key38": "3AqrQJdZtWA993ww7isuH1nnxmfHKUf3qqgfRvbKu7o2KPptgcTE8fDcnuV9d5vKn1ytNVShTMRRgao2HGB7KeNJ",
  "key39": "5RB74NyxVVGdChL3VaVYx7PmJpcyAacbWMYqANVXSdVcwdkDPcDjTub1LKMkD33TgayUf9K8zX1S8T7wgdzJ6kNw"
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
