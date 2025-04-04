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
    "3o21My8ChxhpE1HG8R2sDY1GaKjVshxtKtBjuGqSzfJb6rFN2wqi3rTyNQcPcWRGP8yz9pa4SZXSSPBSDY1FoQC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Tygrc1j1EYgagZDWhfJ8U1y1Kx3o5VLRbhfLbsdSDX8RDD59P2fEfBP74SXpoqM6LqZkf8S4LQtNnno1koPuHh",
  "key1": "2K8Hi49UgUFLimzNQ1w3F5BLXtGDFu2G8o78eP1zAhkJQ9BRGirxiSHC3HgGEqpXpStyq3VCYcPb9e1CRKz1XtGc",
  "key2": "HPEFYWFUq6AeSioXkSK5GT8XdiDaTtT6FBwkFbBrmuTqd54epvdMapS4bk5M2eFwWbeaZoW8NmitDioazuCLiF6",
  "key3": "2BpjEgUYHnYWd88Vnq6BVr9nww8Xa4iU2uy3ZfdMrigDDxPY5iZfKyRtL8yeWgFcivxb5N1m8EVbzrX5ruR4Cr9U",
  "key4": "4bjsJqoV3iKYYUwYXxabKXuwNGCfrHq4PowqRMKs6y6LjKM1u7RDowH1CUPXqdHFgdyZGzB6sfKAZCrNPNYNqNjy",
  "key5": "51XKcvmHf1wYXxnwqfzhvdjDDWMTH2sypfTnhbvxapfvKDVRw8gQJnnbc37dYNULZNLZY362nR6wZ4deADL9rudf",
  "key6": "gNuvEFs2Wk5ZiHerkcrJt4FDSS1gD7EDMftrxt2ErwvhGHwjXgCjxvWZGQEYjgUHwJzmS2bVghDLcg7yepqsPcx",
  "key7": "3pYvnE2fApVhGWUTNqSkGgBEwN4tLHN2QTMxtzwAYoYapSfjvQQz2qxtZNbfxHugCVNXUNQxLGj1weKWX8tkknqo",
  "key8": "4HvnsScmom9KhjTqKrTai8SXHELq4A7QLUAmoUph4FS39PjZDpwsB9egZzBentBFitsMsvZLBpK2Z9eL7DJ3WaE1",
  "key9": "5q6zLBDpJKd5j3FWowshof1jSdVVQ4TWSvkWMNk4HtcZCZQiNmKoHoFuxM8X4Cx54HEMZjZfh6XU7beY66nwE9x",
  "key10": "2kXmMhYwS3Lfak7CeoBpVA2xGMZQPhVUQX6wqSBu9RBYHnvhF7xc3mBpmi8CSQErEKnDMiz2h6UsAoHmkJB1iYiZ",
  "key11": "3vAYarrveKL8cLyUUaEieBaaxHZm43r8k2ST3Z4dYqdaNg2mxgdGEUAKEMuoYsG6zaeiMqsgtfwa8JS83tExAo4p",
  "key12": "4mzNXSFjN69iBELkhBdbcLZJMAYxhCACY1tRGTFAFNeLu3L3xejNJdZq33ngL82yRCMN8o1t76W2N7u62tQzBFED",
  "key13": "5xqBnQwchcPGZnuNdmw8Gb421LQMLqDoKrqKTaNBXBZFaptJLo319ms4ZQ68xNXYnDbda7rZzNjXdcenc6ZiWRdH",
  "key14": "4kKtBrrRgfiWTMyptAijEEmePh59bzRQhPp1daMEAmFtpBuGRCWhM3m4CanVBEE2vbEZWVuFZNxBXs3nJxjuFpT",
  "key15": "3HGeZzRznzf1vWLVmkjkJU8woqzhUcJRafzAx9dcPHGwAxvtdPSd6WdD8yHk3Y9z9phtP9gKBeFaQQMgfHGzdpw4",
  "key16": "Bn2AUT5TS88LndQc3etxifiTewWU7ErEu57ukGCMay9BFpEv3uK9Ay2xHRSZV5FfbuzbLTKXK35Co6W3i3G7sH5",
  "key17": "2tHEWf16qDYSFY8boX2GWHrcHLMD77GN9Qi3A97MGAMrfoLRY5wpuygShmG7CusDzxSMW8cDQhnGSErDDK3xTXvh",
  "key18": "2WJWT6raGxedT9eWza3GrgpjRxEEtCrPGuHkdJ5wPd5EL6dHtuAB29WHWfdtF5dA8HmbV89Ua8grsV9ePVLuPo9d",
  "key19": "3t5UfZhrDrMg1ik8SjYnMhomHF6r5SREmqz1PyYCzprbb7uKuhjtuqAyA2bHRsgvChuUeV38HD2Z87Fy7YPwTs55",
  "key20": "3N4YfgF823FCLArGKHV3WLP3oS9Zb6ZX65UDAGRkofjZ55q6rHF84Hzw9xaHhmfyWgYpeU4mmcSuYZaK1aC7tJDE",
  "key21": "WPf15u82pUcsoCDe1hhin5z6pz8XeYemy566bEKkvHfupKDSLonnXd91DN9Q6okBYrWcdmYi2NFCKHhFABLRg8F",
  "key22": "3cBCjPyiymsVPQ9Pcb8mg9hYrp9M4X3HrBMYLb8XGuMdaaTZmC8oprf2PyFA2sRFDNWpZRcqcxpb2UAQziEgWHwL",
  "key23": "256aMLdW7XMm3atm2jtk2wJ678PruUND6xxuJ9C1tfCq9TSw5Jwvv1zWth57ea1eB9e3ABYkxh5CNwaB2SLPhcZy",
  "key24": "491j4b756e5LFLAt7QHo2Bx7t6qopkCobw1DTue8GjZ1vq8kHP35JwRbjV28C3PWVo1MuzuQYnfTuo9ushyP8x8p",
  "key25": "5f6qZoZN8f28XS4kthe5xMNyJR1dkhDv2nkAbMwy247rSNefB6vCmRe9URQs8vdYxyPsjot4krzq6XEqfCCm7kpo",
  "key26": "4rzpsjgzNcyAgDL2LWSfygTkXyWxS7JbU1izfS3yrPwLaWXnZ3hRUkoLqsSznRNWNmSJ2vw7ELWnfzVutTPewbaH"
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
