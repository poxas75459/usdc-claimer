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
    "2iHfX7ApJ6iJovxF5HqSpPCmxpnySJTuhDKTU7LURhKnyzBTq6BTq5hEQ3zCow7TK1ebPm3CDov6pMT47RJZtHuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6vU9vf2xWr4NdkdKy9owbULSK5XzZ1VffRYtETgnJoeNxUuntryVMHaLLZwxo9mBNcefuZ53kv5mLaCuPuWkXV",
  "key1": "5so2sHm2NFk6HQ8yvSTXRDg9tEEYP3jUzHGoJHKw4PBqrkYf3yTp2eBvPVLdbz44NV5MGZnKvQ9t5R11Kpxbd9nQ",
  "key2": "4MLy23KbMpBKcKY8Jn5LiHXrfR4oWGo65LT7QKLjNa7EzxSwiVmRpNFgF62sxU6PQAaQc4RjQioJQCAYXCynSFwN",
  "key3": "31bGX1BXnQjhWAacU19SK1BhNT21iGdNoQ3BkSiiwzQ3wDmT24b7TDcURwFGwHo2osrZ1R2H3xKQrrmc4KXSZDh9",
  "key4": "2aqQsegraVdogb4sPbdH7TRSwFNKUrVYke6ojgANzX574ayDSpYPnqtCaafjQSjQiJXJWcavN943dd5gSwnfNk2K",
  "key5": "2KgTuooH9omevhTs2r6VJ2r4H6cVDA1cXyfY8MEWHMu2hboqF49SWJea7kYQ5MkMm1Ci439z8ZVaBAUqXNtUApXb",
  "key6": "2uJkMHgQ2WedS4pdW4sYVAmsvELfLvjGg8Vq98Fp2M8swSH7ahHQrXF7RJFw6rtECgcXCB5ae2R6a5ySJSQESs49",
  "key7": "36Wwhy5jKTRjQUyg8KM3RjuTJ9mge46MRCoqtJYiB8qFpzywfjpAVfx93nw88MmPm1XnBd7aJKPNxG5Y2pGuCapi",
  "key8": "24tnZXrWrL3XWG36R2EXPWtYjHwzPChP8Se1di18vucSX1fbWywvE9viPfUheNC3PQTD2T5U71bAdXJEXxN6oKAf",
  "key9": "3G4GMewYGzsVxhQKPEU3qtTX6T1u1tD5GUwS2ToV2jWEFnXYWrffSeAPTCsiSaEB7Y6xQYHTkJgYwuLsqkwA7B6b",
  "key10": "3WFzXUnFqQwYwyWPuKo73KJ3aTJJnEVv7mUsVs3BsTotHDRME84HADFrHHU9rW1jzUaU3CKxZmvL3QAWXik9VGA4",
  "key11": "2bxjppgBnnxDEXfffSsAoLAnhdfDFgGeUyUkUhFMXyzXcRcmXUHH3i33wXxoyXEyz45LSMJUdH2v1aX3zKrj8QLx",
  "key12": "5raHaumwvCmeLDwNpnAUafCkWF1cpgJwYJsjz8dsCzBTdksYshyKCXS3XQK8dn2gaR1E6kbNiSfRX25gK1gmpWPs",
  "key13": "4i1rZLixR6cN34aan86r2sjnndkkxSyLy7kCZDmiaVMRPE6snFNNdcYVVCmy3hRe2XMUWsuEAMWVuH8PrwLy1xVx",
  "key14": "4kfVBUsp7519qS3HRZbumq8LNkyH5GAvD7km43gsaJL9r8Rbj2uLZvkqCRFQp5V7RsFMqQhmr1VfHftRXJVArwYh",
  "key15": "4vvGTPwFwhefiYKpE5iCyyxDXTW1eWww7fVCJN7j5UC7EnMLNA6yHRXcUS2pGTayZ4geXRNRMoxbhB4ANrrreqWA",
  "key16": "4q3VDvgNarxLHjUhBG92orwc7KRCF8nEm6EppN7suuXKqndn6JNHUQRhZcLBbqCq6Ai2HtazKYCMWU7fitYfjU56",
  "key17": "2B6ivVDvqBemAXtYM9JW3FLzHFqZMMFdbeWRhjRa6bvuyJXWatkkYMA5K8NxUoXYsqGiTvSbs9LZmcoxDtgXT2jE",
  "key18": "5bRt77rqAnQ9oPV2TSAZuXpwZA4ja9ew5N8e9UpLdor6ADgizqATmQFzeN9aUQfKat7XR3aq1L8S9BBEuJ6bV3wK",
  "key19": "2WsGjUAwQrtaw5ntt6sbn9DcoLbxf8uXxNR7waiYVSXkrnKN5ugtBES9k52VkAtQvYiG4V2kPFcQeyLG2W3YH8QS",
  "key20": "3QETSvszjjE3zXxKgNfwxNQGmf2E6qjQ62zQr2pj8op56wzWJagLb5bqQGsjYRMecFyuMqr7t5XAnvYHZqPCvwwH",
  "key21": "5xA1txvwrJDtDyk3rVekCeSkybNKzj7VS8meYZWiWSnx4ZnMopgXbYgZ17v9uBy2EW2rkdF7VutH87gvWDfDvJZ7",
  "key22": "5cqhMK7moLsGZjDvAQGDqFRfEXFxgLxFbda1YXraQq2wq6gFD3Hzn8pANLCThRr8LsoTJGZoaUPLmcU5MnipdTni",
  "key23": "2zFdG6CreA2AAx3a2hZe4SFnDrjQgNBfzD31vLU5LW41DL83EdozncBR4D3MVDjcuB96UE3sDW32GqJ8EX9keQAW",
  "key24": "3AXaHbypcBN7CsybswapfYMa1jTSEdTtnbdTC8fFqbthDj9bYirfSpqe9QjyatYm5HXu7C4VBY749WFFtbgnBH9h"
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
