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
    "2DFEgEVrcWRagnkVW8dYLCcBfmiuCPcbrFeEA1wxSz62AVQNtV53HqKG3qsm8bboPnBEsr566aqLaHmku4LGmAAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dE6p8EEpywKsnHpASz8iW4fCuxcC4xGTT4DTVFx5cA84Lb3Yq3xUygBJfQ5cM3mDPVoiSoruu4QmYp4Aac4RRaD",
  "key1": "4ZUE8EEpdkkdJN9a2AX9i7RJAzx3tCv1xnpv48JBXjt5guKdrvbzeGAQY6hhWQrCCyjRJvjTX6iQe4zMRFvBbuhG",
  "key2": "4Qc3S2Wk4wnLdU1GDgGwsjFqJ4LUV9wWF6h9Qr9H4GRdcc57ztDwdNcpXLRwfqPYaJwi6LYCv2bGAwM4cKUnF3L6",
  "key3": "5TqURyU89dwYsB4iWAH9H6PLnn4qLSzRMRg4SDHioLQjypmsYbkwDtjA2mZPr6BtNwoz19639EdbKMRkBzKdcXnx",
  "key4": "3ghfDgUtZsLGuqEJuLdk69zwcb6rwyYZqB8PVCpFfYU6ANJ2fSAAwpePN2toMXYUGu1cVyWKWrn2haTLFKuRv99Y",
  "key5": "61NRATHMfwPAsqyarCkEUztRuB6FmTQHiMsJNAETVHdBs9rvajWwRsSRgskAhPxeyBuckkQtyiARmxogL26p1CRL",
  "key6": "3fdZq1xsFXBtSHCTLbWWDhUsfiZAXp2CjtFvRngbxBtoigN7bpfmHq7ZvTwDGAhcbcRYMQUNw68aNnGgmckQ2fY3",
  "key7": "2DYa3PG5JnRLieaFFFm7rqzvW4BU6CfVi5DPkdTHNSuTHkCFw7uHqyutyEfHhWaRHrX7aorKiMMJMwNhure6r2Kf",
  "key8": "42UBf7CjmWye2tJSnqM8oR7VZe58y9BLPUeRA6XxW2zhETnPth4DzmZbf6qHCQDvctBjRDqU5bnobtBCCkrmYVkG",
  "key9": "3JdLMAKbqY1rqbmnXnXbqpvUus1usStGkJdXrMKw9xXRZeeGcXpAAFrzE6KcGGk5p1PkGh1NQ1wrTPXBGi2aGQGB",
  "key10": "nPK1Qm6PjG5ezHtaByi2HkbqSd1zTmWorVM4bhsejo6b2rYna9dohjiTw5i8zxSFHdQwBb8yhED7s5SsH9oJX19",
  "key11": "5ZVwCShB9a32p4vbVUTPLNhVpt2kzKGTLmhSHxQuKjKgAThaSgpVCvdJaPEcdDqDfardHvok19bmGJgZgKj6amzQ",
  "key12": "34mRn97t2Uq5PzjMtyHfgvbeHBjaLVQtyiS5DcRmv25TfWm3y7T4w5CjQ4vvbBp1fFp3bHPCqdX7RxknPnRqaXQt",
  "key13": "3QLr3uqprXLKnSd1UtzDBhrKrMXrVjSNr6ijEuJ99utE2PeKfDBZiQZSwMbqoKA7N1oJM6MRcHej57yrJLeVnfjn",
  "key14": "5etRucWzueySVJg6D7LzHgrVyEA9vtByH8od3sfJxoYEShjYBy6gGdayMygCU1Zw4UyPXBZpkGGwXfedXSFmUGRY",
  "key15": "zL9NM1CVnXeQEwLozbqq3YSEZqoBVfdkGYR5VaZg3vrVH3AHgXwZjXzYSrrWMrzJ5VJza5CVQujQaMeq5JcpnTz",
  "key16": "3ywmaaiCQj6QfbWu7Zqn4ouA3R6gyCtgKLD9nJCFGn4dJ73fdTGGxViLvQdMMcDToBkR66UGW1gkrvRNiXuZ5PmP",
  "key17": "4RN4VNLVjyf2fdDxRRfspHer44ZeH8SiKNkaF77akJj2B7ovEbKFuPAuHTvgPsfwsP4xc3wUkquvihGtkJ8KhWy4",
  "key18": "5LjUgJ1ixYs2HW3jSa3ZmVCup8ZfpUr39CdPTmeqv9SXN3qKtWZjPa5QB7aPXUeppfxgADcp7cUYdkGUepEiH4wo",
  "key19": "64NnxTixQ6GEmkXZ2aFq5peDdoW72buAdKxaCkD289CyGRaPTSeaGTmX5U1fxtnmUva3MwU4kPPEv2LQzvp5H2Yx",
  "key20": "ju44tRkNTUWbkscrqCSMaUYaQTPXPsCLoDn12atmKN49vnTVf9r6kaTg3E2dLnKpwmU2E5BrpeFECY5ewp8h3Ev",
  "key21": "5EuGWDvB18P8nTB35a3PzRvMPQTnXtJxPuaoy6Z5MCm7JFXwnxa9LVJgonh65k3m5vSJo9X7wPmrZnqa7opqF271",
  "key22": "6FEoLAtce4mK1sWvXpoXYCex2yUEKZLCX3N25d76g6XhACCiGKiA6iPH16Dfxvcskvbq5pE2XJ9jF2wQ7ZoJX3w",
  "key23": "5XAgv1TL6HLivVAKHQMzg3oBBVNWbtA9uN92QHPrjvWjRkiZx6pXH2fFzSr2m7Y7s4Fxi4eKVhFCcWaZfqj48o5a",
  "key24": "58vjphMNm2vowids39gT94DV32b18PYNH7fpGV4HQ2gpxxyuLAtKJxDZ8iZ3KirQ6xxBY6pyn5yoEPLc1pEXtWRU",
  "key25": "PjWcwHRZa8Au2XmyroFVL5v3UVGgAwS51nN6HudxvDLeMokkKCtufhKcsCVKBMX99HBhJ1ikHRXi1cmQCiTeyqb"
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
