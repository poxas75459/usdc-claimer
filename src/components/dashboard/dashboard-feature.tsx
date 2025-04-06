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
    "5SEVitwSoA7vmRipWo73vkbCGNNjZ6n4HfSbFoVRJnzYpTFmQexqwunaAJNAYuVx8QBEzngQAP5aiPJyArJJxfrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2nsLyVziEJSf1pdJDDzGyUpvHeKXTh8EsDanUCGWD3ENpGsbvAySZyxePwT1L6LikZdsauwBtqVC82cVNwcGqR",
  "key1": "63yfNwBn5iFJHTCgxmV2o1qVFP48NZPmAN63BwrqCK557EJb949zomCD3EE6EwCKbkke7xWagsN5iYDPYkseGjAL",
  "key2": "2itJQiwuYhw2AyECK7CAr3P5hiB9h5g8ejqaKT3B37d4k2gVTNHTzojmd3diyHghtJeypDFkmGupAmV8hwvnz7FR",
  "key3": "3yHn9z3j5zEBeyE1df6qRGCvZJmki3nJkMt96yPkDjVLqJV9rrNWKjZbcfZtwW3wjTgMd1j9jg9Y9iHgNAVgeiW5",
  "key4": "3ff2MuDekH92z9GUtPxFFVGnd4pNnkdxTKqtrEgMUBEy5d713Y6PwAyGKwQnBN36X5hpkTy9Bh3PZQq2QA6iuzN9",
  "key5": "2i9UpZKBTHspxHLZ16zYPiSKv5dgQEpbyP6wzexGa5a9hW5z8A2ng5Et2jgdsm2cRvHCrTJ6TcQ8gcSuoiHeQcPZ",
  "key6": "5ZQAacxihM5nD9Y4GGHQUaNxH3qpXQ6S1mswgeV1VPUDVKnJdMVd7yytSJ6URyQPMXJRmjAcXHr35LJK8zwKxLzY",
  "key7": "2dUZC6ATsEVNBy3AZZrHiTYRzfSzHZY8vaSu4DWsQR7oKsVBivhMfggsWXXzjjuzjkhMYie6iTou4CmNneSs9Kim",
  "key8": "29sLN87wAuFLkZWXDfBVfpNn5yC8JV1iggzerDhWmvNgHQvxMCbZraFTWFGGXWfBjS9Ez29HMxqsQJfk1yUPkTUF",
  "key9": "38qZyKjtgSPcGhreHm2aPw2CFKAKm5jZKdon1pDk66fcYFbdpSw8VreaUJqGbE9aAL6owbC16Na77a2bcWqEsP65",
  "key10": "3U3YusbTRHuDXqcWf5hiuX3mbY555LurkW4iEBc8cv5NykXe7cUofUbKxhqmQiUw8aJNtBHMxBU74hDLknjCuD6M",
  "key11": "HBgGTKzbDuxknNhrWqDVfQp6bA8xjU9RStKDxSJXMuPfJtvwM4CSBLneMSc1fbumBaoEEb4ac8CrJs7bqRnMxTY",
  "key12": "4A3kndDKVmX2CEpZjf159XFVSefg3RQKxnYCQyB4KGzcJqNj11J75ZcZTctZm11kPyGTuZePmtDGH6FW68caiknP",
  "key13": "4dxcURUDVtRTgZeZcmoVvw6pzn3utRs5NczJLY1SqWYp1KyJhD2XBz9My7HDbru6q3jMUU1bMMqAfuQCRedJ6yuA",
  "key14": "33fAPm3rV5fF2J3L8CbrSFKAchhMq7FLKuCunKWPZsZRaocWhubG9AutoGrMZ18v4FEKpFyWMYETPTRwqgVSCnWD",
  "key15": "Zz96CQHMDgLQaBxyjUrDjFm3PrpDmDYqRguVcpfQ4nE8zcrnaa6bFe6vdV7dxsBnx92c6uKoi8rEM2PAajrEJnN",
  "key16": "39C7sZb3GaPNQXaES95PWiRvrQ5HhuZt35bDmdriB3eeGtzNXXQVg29we65QzY5RvTr1ptnfdjGeKvDVKjddi2oW",
  "key17": "2RkwUf51XyzTqT2mBjMBCpDn1sqXdFYJw1qoETBMxmFmo3hMmgE3QScMxA1pJR4tTpKJCFPcgrSDyDjuiNXQ2zDN",
  "key18": "5Z28p1J7YmHgeqbwVRGhSxpzFgdJee7FDETbqFHLZAtodCjxqMRWrPUbpDuCfdpN1u8ZF84RCZKum6qjGGrJJwrf",
  "key19": "5MKnzhRtcMnxCThWYSRU6itH2MKhUxDPogJJx8Q8MsjAumDN6rd4DKKULAAyni4ENuk4tep9LGNHcJJkZS1W5LYH",
  "key20": "4Yf83H1tA5ivAg328rAAgvqKv4V9Md58ZgmMusZBEndnXGb224kTTSWgQtDw2kSSm2WJ4Tf6UNWjEfF1k444wKyF",
  "key21": "2HtG2TVo8JMyXnb8G4mKHEafdPNVJ9gFwaDG4zTku9M9rCDS8eubtCPoKytGqoz5jsMdTYAucjN3s5KfZwE64nyq",
  "key22": "4JHN9nRkZhFqyrYWt5zsBWvEyrpAbJfCsy22DBwa4hnn9afxLkRZQfNfpin8RFifXCwTEShurHeuDdn2aHizqR1L",
  "key23": "27zwrgjXMwcugibcE9NnmsmM9HY2AyNmucdT4Fgni2m6fHCroPXDUgtYGU6R2hgNg9fcAiyutmo2cf4cJ6zdYqt1",
  "key24": "2ZeoML7j6yA8Xj5DUg9Cu5evr4jCsUhVMoF1BFev6bpUGG4z9KBm7FBFUAt2gWV8B36mwPSmbPRqUUoP9BJyMZ2N",
  "key25": "5k5ABp7R7SuSbRzqSc9PkscwFSMpbPrT4JdbDcfK4CD1C2eJAkpyXJTLb7er58CYXSL2T6DWQHr8CaVSo1j8thAr",
  "key26": "3aGpEqBiZNqofaNhEbJRcNci7mv4F3ArwVk2D7ragdRcJ8v5WVG9Shb1UkXHNgF45kYJDkUWdntLaQ6sDs7SBvpo",
  "key27": "4o1iwCmnVMq5Q6nV13rRHQeiKGAvNE3GTZjy9bXsicSoeuCFNmR2wNZXEchYnuk18Z3CPwdbUrkcvNnsPxSwVm2G",
  "key28": "roUcDDVSfmpqkZf9bWDYz2ApAvFvRPfdRWSn45m31aXgwfeFaXFRHDTmwSuxv4LBDcoTPEURL64neS2H6PUrcV2",
  "key29": "4fFSTQAAGANyTxXUmBzavFphwBqB1e9XCCr6dS3sGS99H4DPDMm9LMUH6WBZiEBLkcXFHdC2gxBH8QTs6z6eSveT",
  "key30": "521K7FRYupKGmdQevnwi2S7vo7CnzDkn7BAyM7aRVx9qgQavLtjPWtJYjuYTpbfNV5pWnV417BXQTPe3Mz5FEfGo",
  "key31": "4pny9doVht9x3CjXoFJiJtJShzBJi2GKwb7TvAS8XmE11HUKA8xssneGg9FfCZYtWVvT3Fer3GJMatgwAUJt9DXY",
  "key32": "3ZCFQuvLV6sTDEkXcz9PEFLzJ7yFjSB58nou3rvUUkuHm4wiiBjrwvEfoytDRMaGueWz4K7xR1yfd6SxcPLq53hL",
  "key33": "nUX5EwS8hT618YoxfSdFzRyG4hLYAPR5bEzjpoStY7HKsZ6sTZgQL94FAWDrNLnDwvq6H9LvWcZKVEMcModmAY7",
  "key34": "4dnZZj53eUKHtC4ZqQC64q782mwVPbMF2dqsjbyJECSDrtbmWmWTa5dSJjG1k1NKgWR1bomvkRhzyZhxQUsxfAFa",
  "key35": "7kAov5MkLDXJCoABnPj7roVwqdbd5JjC6c8Hs3Ln4sPo6HMtmopn77cmL24Nc8fGpT2BoEhWE8yBKh7fwrgE5KQ",
  "key36": "2tbZKWYtYzNFNvgKa45Zij91agSMmN64s2bxhf1qMCnQc13Xtv2VhFgBHuGPcyRJ9tQhdLo5VNdPB1VC8tYPzSiz",
  "key37": "2uFwbUW5qA6e6NmJuFCzfyGstSnTMLdFsjC5B6dwzGPjTU5PMwRFGQtYMyfAHxibmc5UWC3ihgFhqiF5H4X138qG",
  "key38": "41gX4vYfeoDmdU8uepSWXCSLLbfswRS2nPTvPNHopx6PwTq7G66kx7AuUFud9Sv2ufR6jcNFiMeLS6CsqrG4Xg2U",
  "key39": "2Jm9rxs9inipNRFno1sWRBfQxhmm3cr4KfFDKGqJj33tq8vt4JfgxKsC8ZePtRVmZ9oiacWrVESnHnUyA9KC7MuC"
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
