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
    "4CyMhBTqR4sTeWh1GfsqgQMVscto8FPEmv6NxG85waUAtQYnv6iCkScBjn3GJSsviKP3SqEnBPBG9B5LFy1nmPQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37uzMvcQvX6VGSeNadd7M8FGjzWHpJVXWwkap75SCyavCrMyqoMfU5cxnVo6pgEswgZpi8g6c1GHvrmnz1ybGDaJ",
  "key1": "5ah3bsx3htvUbN9ARd8UM9u9p1GDNL8s8QXYD5hMDfjk9PxRMtN8SPcjGYbb1WyRpz1mxHC9LtviAmF7M998Vqsu",
  "key2": "63ab7AJBMGnCS8CB4mkRR2PS4XBnfBBHn4JqDd8DcwyMMcGo6Rf3fCXUFCQLh4CebRx8E7XXVBhCnwqkE8aFKrH",
  "key3": "5H5TNn6mQBp3FyKiyPMeHEtGXcpKe4Zx1SbUfJREEC9H1AVMcci1BUJGL8Qaf7nshst3pGqXDeWw3EW1c7QyqjpC",
  "key4": "5rpxurXLR1s7eHeGXAuCKm8P6W6Vh2Jac187NkHR7zcr1jRVCk5sthUpgYge4B372v13LJacrSAXHQub2FzrEdg1",
  "key5": "byDWWFpkhoEhJnzCCDTWpMNmT2G2SjyYPJZ7xJRYzubGuuF7AwpNZYtQn5nrHSMYz2Qo9kp3tjK6Ktz7qhdW2eU",
  "key6": "4FGVXf8yEKAtFmKjdjbCrBtXzYvvAFVeseX74md47zBiaoyg6KaDk7GHfQqBTA6mXe33MwxW3y5mb2ZihttLAksT",
  "key7": "43V4bGZohe3PCEdFCg3RKEmLzBFMJASR29xdawHv5jm5iUHPFyX1N24R8W3t1tjuQ3DY5zJb437vRBF3MJypJCcL",
  "key8": "2kzA4oXwgqUwHmvJEKDTa8vVRyH7PVENfzbHRJhUaK1nuMTMeDBK3DRDLvNNgSpQXribv9CkettLv9bMcK9nsJaS",
  "key9": "3QeXie9LJVJE7HEbxfoxKhaZwYeyXnUecE5DHCAZe9PPvhmD1v9WRFQaEsjMCxxVuJS9X7K6YsgqCXeopv12F1jK",
  "key10": "2SRgtSM7qM4h7LX9GK2z8McFdacTBciU33Bdusp831QUWbhoqWENwbsF6dkZ8sHq4ZFPDHQMx7VqPZnZJkUc7sGC",
  "key11": "2nVTATFGna9tuEiYKGva2KmaGwiydUFZyDPhRwj7XNFq8jSkmRCE6WCqNDSnmQsRhSP4aG6j1Exxn1qKHELGzTRQ",
  "key12": "2SJJ3PFqCYoGky6Q3NbKfU8ZxVfA2n6f99uVwx5sPH4wDVvxLFgxGk3o3drCBMRK4pKQqE2jJHapGTZXcjo1R4rG",
  "key13": "43WsKATngDcZHVBbz7xVmV7vKc8ikjztitva7qeGQzXETSDRCmaf8tmGVEtJMiZWhXLRDRYUwrcqSdYBCAkbpbu6",
  "key14": "5ux2U4hZ8HCbFftBT8521fgwdpYGsKYHn3C3HdpntiLfBtmpCMePv3PYbHrbBdSNWcy6VVzT51tQ9PT1YRU4ZAHb",
  "key15": "2G3qBdtQ1vzwjdY5VRCbYL8rJERt72tvpa8kGLCpLN4PmasoJsUXpWhHfG714xppBRXZokcWBbRBQsJj2N7N8s56",
  "key16": "4fFC9u272ey6ESBfWMPZekVYzpf39cFauc3DMRU23iBadH6dZrmx6RyEtMpmRMpcfbpkB3PE3VXuBDXWZQZ1nJ11",
  "key17": "3f9Z9BQnvFJB58aCZJ2p4Doc4N37iDQHGqdvweskpRPB39459JqjmFKrSYW5d5raGPPmcnBHHARvKmfWFdCAsUPm",
  "key18": "4YBTBzSrVW9H1ZCcfB6PEEpCEk6dhapPTaF3NkEZztumzFc6EvnY7knECK7iYwUC6bdsZDBTY7bYM2hRRhwtgMk5",
  "key19": "4VbnKzosGRv64BXG5tJGWbQG89hEuoMupLyRre4hP933n4S6rEG4uSsMnMXcaTTatAofh7uBzncZxaxtRRscdqPg",
  "key20": "scjGzF4FfSMgYE1Qx1AXLz5Yz8a5JUS1HonFhMWDSFk6hYjjdfMXkaGm3WSbVm5o6GmMjZkX4vSBP5FFrmj4RVb",
  "key21": "3Ao6QFs88ZGdRRGLkuLy7ox7psZj34mTMyLUW97HLiTbi2ZQ6h9g1ntQnj7kxP3rSFLs1KbY6nAsyCsHVcXBnB68",
  "key22": "3ih8dZEHUt4cN6PvYK6ea82RivchwyRecyf46Go7mbcP4fZXQEvuoZb7zzKnAkbLb3FmwNrGoGYDYyS91BPP5c1x",
  "key23": "3tNrHmbHUPmBscBHUgAmVGRviifbiotfRyH2XQrMUFYWz2Azh5mEc5GExoR4MQHLFcw2moSwamiKZanWYbbHur9V",
  "key24": "z1AWBrFGZFnH26cyhq1LqYwfgBvNY3WmSsQU5hFCPpEjEuhMKUuETJnFuZr1Sk6TCE71tDDSmn7aqt7dQcwsNtZ",
  "key25": "36c6qoALGZcxmoWb4R8YLruTADgHFjqBVM95atHfYpthgvnHRC9xGbzkb5T5PRqr65MyZUCaHzDPXtvLuAz79R1g"
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
