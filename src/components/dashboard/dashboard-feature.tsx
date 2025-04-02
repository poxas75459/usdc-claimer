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
    "41uoU3zFhYowjmyJ6LziJUgL4nNzgwAXddfQExoqpvPaACSeaTRQ83VTotQN8gxLKbPKoKqwits9W8Kix7PqPB6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXX1rVfrXFZoHkNgRnmWX1wRevXUSLc7TEW3wBW4UAeHFZFA1g9cy1HjpPvary5UFFrGTEH4LC4c3tKbvRp4U7A",
  "key1": "5ugUL4mhyQKhAG77Kmhvx3ZPY7TsoSB1grhRtB1h5ahrrGg5PeA5gNbHPHk6UCpj6avjzMjDyvmYwWTEdZHBicR6",
  "key2": "4Gtbd7K7SM9xAY1LohErkbT3kki8PDVScxpKqAU2eiyhrtmP9YvkhJAPuaMzf42V8ucfRqWzoJDouDKovKX5Yg9",
  "key3": "3Ly8aisBSJQcuJFBRQQBBq95LYfo2nHd8D2RSviU4PGnFbdLfx9RttiLi3aEF5MHwiZP2NR6Rj55qy5R5X8aSbXn",
  "key4": "44WM2jrw6dBgpQWwksgtFFV2dkCLzEymZXFKCU12n6FHzRuhv6ErfjfpEx5bCTXEaPHDcbeVz4cw5Yaf1vzepb2r",
  "key5": "2tvUVWcL8tf2QfLXkeQ4AprwbTYtvJkKmXHtjH9WVLjPeDd5dbE6uQXZydGk3GUNQxx66ciw96K7C5sbnAm1tpGS",
  "key6": "4rbGHHXzdRe2zemDAYN3Su2FJsYGzet7nWpQ6vBApbTpoj9oZF16AePoRthxUhSvE89CG3Sn53KKTThZ6T4pnjRQ",
  "key7": "4BEJcTABkr7qi8modxT2bZspEcqtMy3Nzafyocfk8M4Vi3dSY2zR2Lq3zSyd49aTUG1aNjEcDpYxUZteujbRMVhx",
  "key8": "5ozfMJpYVVba1PHC7f8PaGMSp1UXafdZyf5xVWNniJVxG1MzxEaXvhVAXg2rm9VFvnjVibVJAVZeGHddaiSGg9YJ",
  "key9": "5nL8917jRxqTWZM9d72fYDAKSrxXFc5qW5gsgUBYz347m55KnDcmVKvP2D9ZfefuHgrupfyibhDF9Z6SfSuMTQ7o",
  "key10": "3UPi3vyTHXbPCy4wvaETkYp1MSGyuhHuhSHgxWgcPjBtZcqN8hkzypmVLuT256B9PPqLeQfS3YPtwpyPV2oYCxjw",
  "key11": "2HHsAQbnXjPie338YbiYp6uxyhRauopEVsSAi97CGAhWwkryRdaEqSLnEEWTxEEYpyQVMm8iEcNeya7i7aTNshBs",
  "key12": "3B29K6k7F8tt5ZmYxC4EJ8fJLstcPRotQuu3ao4m8rWRc6P2F5HbuzARevk8UN5aSPXoukrjLWuWv8HBhrqhQ7q8",
  "key13": "5cmVzti2sVRwuNuDYAPq6953VSRntGuLmSoZE3RNmrhNTD6zhrXFSmhvrRbFBU1PJbru8mUZGgWMLQj7VS9oPB4m",
  "key14": "5Qki7BxbJ6Z6mDPzZ6Trw2Z62NfzeF8tAuDXzwUbYeHM82kSkpdLR4sRBeWc6xP48RfNN89b7h9KU15vq3ndpBXm",
  "key15": "4NC222EP2xW7mGPKA8oLpD9FaJXRsRZVmYVvBpwNx6FgPNroxouM77kyrwDRSQVqBH1LmPWnfzMPd1JFmTJH1vbs",
  "key16": "346PJHYuaHvywmehKzhQks3E2rbS7ZqpwsafeskJfgN9TxNffzuak3GcZ4WHG52WeuMJVbv3LNnrvTgwrPfMc9eM",
  "key17": "54X6rBuUQWyp1g3NpEEQgMDY8qiz8oJtGi5ba9Rm1wmB9SS3Rm1jqVeXbcTQbmmVJCkdLH2a6wrxJmQWFgsYyLA",
  "key18": "5VF7dFwbLTterzhG5kuW5VDLwM5eHkYE5LvPiW12HdnttzNZfPynjxtRiXTykApXJ1y1ZkQKe8u6JEn584HP1YGm",
  "key19": "2Sxt4iRGwYaBcNh1ocpHvYwkAbL3h76jM9epm6qaGkPf86W2QDyfbpuFEXV1uVz1eo3B3b5Tj3UQTGSK6YMBg3bm",
  "key20": "6ptzKTSrhTyBuFkdficA34kmRJapvw2GcgMNWW3ApUAwgjboKEML8asQp6MMJNHxTDjdzbQVKUtYWeB9weykaM4",
  "key21": "5o9dZ4184WXu1g8n84YPEgKcK9iaudLwg49oErSrs7Q5AoxZwZ2F67ofQXgRcs2UM7kFGXyupa78uNVhMhYdzG9V",
  "key22": "5hMyh74exTw3CBAwVjFRfeopCLhAXqvH4vudiJSqKZ28vWuhsYsamtXcaSb8rj3piqKo1WeWF8DZ62JePnZ7W9Po",
  "key23": "2A7GZPkrUAjZHXRdt8aDsHhhrZQvbABmzUKS4WnyUDQZ3nTqCbkCT4ewHpre8Q5tDdbgWqP1jx7uzmb6HHqA7tBw",
  "key24": "2zEQepzPVaTPfaa9qCyhBrKgqBBm6WuSHGcMoFn5qGge2wmH2uw1Lx1ACHG6WUAeb9KqLkYbBfvK2FSs5jrywQ1o",
  "key25": "1RGfc6AfapujPb7MVyiequnhYCuMxWfya8ntgaa6seNPGv34m9RPJBJS4MyxMad7QmetFtA2z9A65F1CieMkxma",
  "key26": "4FNCFnGFZa1UCJ5J7vCdKFosWawXAxKEdxQRMFP6QRTpdjecYwh58VEANsKTbqCCumBXv8eVWpmZBcnToKUPQQi2"
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
