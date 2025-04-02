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
    "39LtvkZtvvMdmSXwyyqoeetCvcuC61zNRjj2735bzCUBhCoDg61dkiPPmaakJcMGBf6RXSqoqRkkw3MmkNJSqkJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3D42PFXBp87cizRsvhkJzZk28jVzFTZwmyZDNhtDjEW3Gq9q7dtYThj8U7bwjtKG6xVqpkqNEGtAwUBhb1fmGw",
  "key1": "3yqjtfvUgQniwyw5fcv4k788gHDPU8LjWSA5KQrpRq9NSF5C1Qjry9eAk7o26Lj7F2QD32NqTV5q5vxNnpXkkg59",
  "key2": "5VHNAEAovHegfjRT9JTp5J1PjTpsRwFAuXa9ApSPtSoabAUwfJLtYbQ3WWyAszghvq9ejXcfWgCQU2vt569uDbCL",
  "key3": "woFmwXQZ7uc4UcD1dYhFYasfUGszrR7p6kXvdjRLqyKXY8ZLSo4XSXePrCP9uqnCBHLqaAtiCST67m9MpGgbz21",
  "key4": "2t4oiFmuGoThtU57WPCZYttjWTDaq6AzMTwV2iPnQd2XQDA1LpapfjXB3DeNfi21W6YGHVVxqDLCSfW9rfYstmMY",
  "key5": "2ST7KQ7BCApSnUFzDnYqym6mQ8nHqSAMTugRXQxmbTkGYqHjjguUUe7tncn1bte67vTfsCXgcQb8JveEQ6XEdb2J",
  "key6": "2BJf5fsTUFGz2Rb2SGmrzp3wXYJxii3YPamJiao9FNe3wGx7NKYtzNdv57ZY7p7UU4bVYtV22zdu3e5e9NEksSau",
  "key7": "67mJqbX7SNNVVnRnDY6f7sDnuFE67A9F8bKpM7k8xvvuWnLKt13iJsAucQLSPBpCxxBGfxRXg56BXygJaAs8sRjS",
  "key8": "2vXa58jS3hywoaeDp11o3rpxkWGguuJvNqyg2sFKDByajkzPK3UdCZQGdpj5Tiy4p895DpoaAyJdBhYTrAthEn5d",
  "key9": "uHu2AGrSXRXfRzNALZqGb4rVY5dRouh1we3FCsufzgVaQQvdUMFcqRLFd6EzgokQoGycnR59HG22Ji6TnRi5JbT",
  "key10": "4vCGcAQyKmAXkGV9BDrDfqJL5kq2zf8V6yb8NVQXcmdBY1hG5JvzLjWgYzNnqrbXZZEcXftYyAMbUHbDYbv5pycW",
  "key11": "4VPcfzwSbfqPzrY7FKf6oQveN6USbHho6z3L6XKmQRSxYbH6piW7e4zd7283FamyHVMppdbigj7MEXsLdvrG7SyW",
  "key12": "4VfsCnrat1UrucyAb2DFWm9t2WsToNKFdpFWXaksJ2ot2C4B5K21L7e8mMZz9PjNSXCxd8qiuFiZe2wnKJrtuKKY",
  "key13": "4YsGwJERVQfavU7jwPXGkpNi125F2Af96YJQFPswd1wqDsGbfL7qg3uGNYRCW2vXrJfoMEMnaBsDeSwaRJ9gszvs",
  "key14": "KQRf5eBKNwXPo8RYmWaY84xvrK9vSXzYUH3y9XFjAwkdfdTmiCZRZztgeLnnRXRb93g8kLBxm5omQuKtiKAMM4z",
  "key15": "2M6tysaomPUjBzjZMCPvWENKnTJP7gYgkgsBRhDeWW7Lc3AAiUkEwEyiwZycC83mVtQA7gfKnFEyKCJoJT1envVW",
  "key16": "2SDsYApmr16aqJBnot3uCYfiHviFfPfe6h7yUbDkwKVXzE9YQ8Zj6DmGBnjezRNuZMyMQgFSbrLCTehHPEVLQYLw",
  "key17": "3Etrt8Qp5iq6wGg3SKd5jHhJ1xsCePiCzdwKVByFxJREdCTnzPYfiYK8Fp4EeapyoghdgkddixCHyMnQZwCWwTdG",
  "key18": "58rxukHbQdf4sdxLTDaGDDo7Q7SHUw6U3UkBbapMNk4autNJwZ1U9Gcpbpbk56nXLRR5he2nT7598pH6mVNW8GyY",
  "key19": "rMX7aHSmC2yXpuvGL1tZyb5hiE9c3bFRzZBcWvhkbG12TLdNoQBS4dkJYeA8jSKChCk829oB51Z8W2A48veTTgG",
  "key20": "3nKrjQoN1ryxLXfy7so2jCmJNLiAE5XaC79ciQD2MsiqUyPxbLP1kbaAz9WKpYk7UwKHRsxKPPg76tyYHvqJdVkc",
  "key21": "2Stb21UrCjKTyP7ZngdgegNem6NDnprx5WTNVzmsfxSSx38aHNoboy8KhPUkUhmdLzAPwbSrE4Vv7v64S8CgbzvU",
  "key22": "5jzB2e2GvvkpM6ZvEDTwkv2z4MkhemUAizZKDECVtx5k5T68ST3JDW21yQ1PJWZSEVT14tsNxghEMSQGy7bjziKF",
  "key23": "2FzuFBBgY379k8vNNTfFqxmjJou2ccJdB43YNRAVVBCYDM5kS4946i7sQ6fcBqsdVErBxxiznUejcoKDysXfpLwU",
  "key24": "5wdvhuVxLznc7f8yQdwooBH9PbH3ztyJ5LSJCp88wJqV6t58mhMv4naDnTbHSVAVfMtXpKXfWekHiUHypZGRvWYo",
  "key25": "5WgVpYj7NDmMkZCYsV3xSwvxWjUayU6KntXpV1vJrdNHc1GP5dwk1WtVz8mepeLcfGEG4V5Vau3DffN1yV5ngohD"
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
