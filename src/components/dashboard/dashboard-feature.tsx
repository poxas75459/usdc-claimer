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
    "5LVCzrPekQq7zt6D9jC8uvVsKSzok8sc3RfC12MZPobBXa5RVj5Pb9E2nSDuRTVTtGeeaQKVvTg3sf3N3mCnBnix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9DMsKk9PSZM2o2vZnePYkhG8MvC6yb1fcQdCBTKjMQShnUFp5n2CgD1xdakxoTS9x9pwSfkPcwE6SSf8CQHV8E",
  "key1": "2Z8mSmWNCXwG5q5GFCPiA8xMmcmdMtgsYPjYrCvUHWnwz1DzMqjkK6AgAvCck76ZqmicdiLsssXJqfxWXkhtVLPt",
  "key2": "3zd3QaaDtRP9UPjLpmVLaKh1NM7WEUbtimAzmuH4eW2mSrWTsfE9vJg3bihHZoZVt1vPPQuTjRJ5bhXdJER6J2dc",
  "key3": "2VYU8qK7RqYyBPBa8WbcFVjxmgRT7EEtfGJ9PQjnDKKN4CUy3dYnSTVZrArJuXRQiGt6ogtfM4BaUEg8WzMyVgCW",
  "key4": "2Xnzhm3EHNZnp7rRNtAGRVgjMa7Hjq9xKGnw9Lmz1ThfLiMhurkNeTEdbZbLSu6YyE6V5BqJCadGJ9nFCYoGvart",
  "key5": "4uBjVkjepN598D8YLBPP41g8UXPHWap43eMnaZiTpaxnyxs26JNp7gnhVSR1XohDXDcEuWZrrjjNv6X91N54HRMU",
  "key6": "fM2NuTeZRdSTVfsXDAkM59fh8mrxHNss9Ned1Cp8QJRy4yqB69C2Dsz9spumAvzK9dgHVXfbEYT6LZgLoWz7nbc",
  "key7": "3bH3kNz9buoEATESP97QvKvxoK4CWChi7VPh1CEN5dFcg59NMHTj3cLXDW41Kwd71jXwBFjbF6mqWHrdJaHMrD22",
  "key8": "4FmTqRpPtaoXWyP13ygJcPq7fe8rPvQi8bW9S5HjKS4x44AuY2MrgMbDzxgRTdpmzW1r5BtzLybhq2e1GXeT4ps8",
  "key9": "37YcKH9rxzraLapTnXt9aZtwQBHFA89MfW3S58WQKb8VeXBrZGarHLjrRYxncbfjPVeKboPxWEhFxhu4AvxA8p1j",
  "key10": "3dA6vvMsgJv8fdn6HEiJpfB1vVikFPbs3wiJywqzfT18qQqGGGcWno22WMsMnCkWHvtcmbhpQg11kD2T7tJN3g5o",
  "key11": "44AAfjgdxxRtTFLrJseqiURgEMkvbMPFinJSnBsnexA6vutucLfERYLBT2u1aqZ8Ha3vFMcSDCMEnW15oTgo2WUy",
  "key12": "3vLNqHMBFaYziadGJ79rfME4J2Qk8VRX3eQPow5yZ4LG5ubCWFxuq4Gp1vAGZ8Xp7PpMTctHmaUNGdt9SrZCsVe5",
  "key13": "2tU5PRZAhvpKtGcq6QhHXw8k4dTYNP4zwyJuSBv9fEzY4gB8uDraS3ttmNdcHFYHcmYkDomUxTK49YQdETPrpDfE",
  "key14": "3ccj1PF5YUXjKV3SkDqJa213PcP8ad9ubDTAjoin3nYP6Rq7oJCpEWi45Cdw8aEmiWetZxypVY1iP95d94ZmS3NE",
  "key15": "53Y3aRrwUcBnHLDt6jrrGe8Cio7bijJ8fp8RnkPv9mLnxzAEakBRgMQK6QZTMsegfvvFBPcJC2mYmRZQpUxAtetp",
  "key16": "3e83aZWwX3tJcJWqB7RfvDBQyKNYkj7rYArKZf7CFMiApyWhCLGm4QUxFakC2Hw5NczTFJbMYfFvnB57bz1hWcqo",
  "key17": "33Tc6fovDiYAiaFn6n2pW9aEn93nUEKaNtMd55N47sAQ6Pb15bvCrAD2UyxUmUu2YyqrurvUtXFVyhvFW63qqoVG",
  "key18": "upXufwgaLrzcveYDMmAFiKwnp6jjP1pG1pzxBSYK1Xe56XTzFWDWx7t2zqa6MHtz6h9rAZMMutqtMZVsXHjyPR8",
  "key19": "t4CcQpWZvEfPKupNBM5idxARRUCSpGDBRfT8dbHLHWNmSvyveXJZ4vAznxUDMi3hAFF4DaNkV5qgystFtpswNep",
  "key20": "Twrqx592KtMpDZNBAKmHJwd4AH2wsrpPmdGjGzgYjUshJCTd3xGT2WWoCAHhshqV92XD7A36pVEALTB7Czmr3T4",
  "key21": "4Ez4HZboDHpCA5tX1w2bEDRx2BNiEcw3RXqTVqcpZBHib7Si4n9ybBM31weRZgfh2DDjx8J8jAF2fZxyUGuziWZ2",
  "key22": "6twFXHfyoh393rEhSaCebW6Vvu3zVkXkurW5iCF6ER5GUACMb82cLnrYVQCyQDQ4CGkFzmsDxbfn52ucytAEHJu",
  "key23": "4wTsdN3Z1y5Yz2w6zcNeDyerUqAfBUNpY5XaSGTBH2FrwmFMf2NUDtJ8WSedFambYuQRMupuGvqDieod7i8TXPuH",
  "key24": "5JQq9L4FG2xoCedCH6a4i1UCPah4JcSsc83ybmrsM9GX2MLDY8VjsaGHkmzhUhtnQYWtKjVBxu1kpfuLTqM8uj8B",
  "key25": "2tEEiSn7Trw3pU4E97qSixcLEE7q5vbMPfoGodrPBotJALyU6cajsrwuoswXmLF2T5C8iANBwQCTHBc8XEinHaT6",
  "key26": "3Wc5sog8BptFF5JppAY5udsvUuscfNQGBtsaRFk5bFDuadnU8ueB4NXB546uHze4Zg3pinL5XZLdyxvdSh8HwCbj",
  "key27": "4UMWdRLdg1ruDAwTsAJEkMEp12fW9FTkYUxNfgFL7oahq5FE7tSAGnAaM9xLTpbEhgZksmdpVpVSBsak1f45ka1Q",
  "key28": "249pmoWRbpNfEfTRtwbDDePVYFndPxjAsQcpGUseo9ZKDMb2TiRNfDd14Bg4FZVyEygpiR1zup6XxRyQNRq6nFSo"
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
