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
    "2bxTCrWNbJ9GmNeKeSX76L2zMcfgwnhLrkqJuo1GwB83EmgKqt4xVi7tnQJhWLovAa8FZUSgEVdAd3DxNZr8oRiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRN1YDWm3LzxbtQnQ9XK7PaSPg4dA3wPpYMEEZ6JR2pLMW829T4PUknfFedP6B3aqtBVUUGDSTQFLNNaTB9qjvr",
  "key1": "4UuJR9FBTrsQgPwJSQFFsjcXTjMmHjp4fhh3FfNaEiMcP2iSXB3hwS88Vb3SeLxBqrQL1zakE1sgePSr1PhdLbkF",
  "key2": "45AQVjxVoa8aH3tmQuy3ss43B1hCb6TRb6rkUt7fsz4NRf58iGbh6pqetBBsyXAGcyroprNBbwKXsR4dshiqPUiG",
  "key3": "2SZm9w59uyNsGxeW7eTvMHHEDJSLcyPaSCLWbQXkN7Z7gex3yzxfzPByMH3RgogbtMpavA1BL9apoF4rpMtwGwFy",
  "key4": "5J56NDgAQvMRRF56nL3izDgYBbS2HzraGyW9gT838dQRfCdZNXZ2m1uhSBJTnUao3GmzisKCzRejWPMt2schPF8U",
  "key5": "3DuLXRT4JtTdAJVPgGZNNCJZngnGoQvrGgMWi9qmRAprGZE32Vo7AMRXRxZeQZPuuG7G75kqZEDJVMuCdeuXz9hq",
  "key6": "4v2nymz1Z1oK9wyrYZAUtAHWpPHcChg1hPkAptfwmmkyTNkFSg5wPLtLfMzNqcT161uGCqWW6FKiZiawhsJK9HuJ",
  "key7": "35CNS834mfQ72cjURBMVPBEKHrzzuA8oG22uZ6PsCRBLFns1zpL3UuHV7KcNLKC3U23YFHiq1qstiDRv86cqnbno",
  "key8": "49tmvQiMcjboh4inFRDRRAJTjhw7rCRWp7oGChoJgFSiikXcQD2sJ6JJcKViiJRKHTxTfFAxqRTNF8UFpLiGNQBw",
  "key9": "5sdqv5bqcPcY6BXc1TeRXA9EmdNS2fwWtjSUBQFU4jjNDvveZCXdw27tea2QagLTpNvQZW2ZtTj8igVj48QXwYMC",
  "key10": "51rs2vbdg6tCwbAWNtNQh337vVYskYFbaNqc6FQe96zu55wwZLEaRh7DRozqn91erXkzUtqCmjQU2jZquJNHrViu",
  "key11": "4rnMCdyyrjT8vmLdAn6c6ipXbfJSP4PRV3GUQZZAAwu2bPBHH1JAGBBnGUMuGd6ErFhUMoVoDVT14NyKvBBmbqMp",
  "key12": "5dz7V3MJTrcqXVkoXiwrEsfWXrecRgcWSCLjxoHA7r52fSRRwpfgkjdwQV1ZN4nCxywAWuerhyYQVCEY614DcbA8",
  "key13": "2xkmXX31o7oy7vCuAuioTuj2XfeRoyMFem5tgyZJdS8Q47mzEbxyccApXNZuXSs22j99QVhcMjQLTNpv6mwVCst5",
  "key14": "5VKT7KodTPGKSe3Vq9x8ytmpEzEtFt1ke5AYkUmfxYAuWtTBvYPEeXEiQck2mjBNdrGKuMzmHWUhgpUn7t4yKSdr",
  "key15": "4pARGbuLKcw4jo4sYartrgNTw2EifqGgTW5teNdLsaFsd1Qz3KNpF9GXKnGGMGVYEYyrWnqxb8hLq4x8mvGHZfAf",
  "key16": "XfuwdAzkYHjz2GJxMCmgTboRCoBP77qbPdqjTus93GyXhC86aADoFWnw8hJ4h8xkvVDTuvn9SrQvRCuSJ2fWNXU",
  "key17": "65Xphq4KKXzb5ub89sGfUWJoAVyTVPVv2zREkLmcLA1XbUJ5c3SPft6UbnYZnFGhFLfiTa5xGTStnzN8UkAEzXoY",
  "key18": "UYDWzJxErxzhx4TrWZcyXzvVky1oWCjAvv9SpakLkhAAtTry2zQjjSh3HwonWm4uheTBpvgKJ5jumgwDT95NexR",
  "key19": "2AdgMMQTNMNA7QzNczfKDmBQ4xpB1Vrkmyg13i215fRPuVXzV68UVczQejRGZKNx9CHeeykbR9PNt2marU51ovvu",
  "key20": "4CV7VLP5E55adpuLFVAaDpeovupUpCuYKV9GGa6LskQCQsAVu13sVutR4dAaca6bCRz695wRWkGLCnPLkCkmXK6S",
  "key21": "38qAqKGGXYdRWZHrnyhkt6cHQCTeorVbUR2z8LrjhocFhhxdSsTejLQqmS6DxLXVG1AHfpHEeqPSYA7zuAAQxqXP",
  "key22": "3saFBtUmoSvmQP8Mrj5TLb2PF6BRniqE74uerGvHj8VWGKE5tFbBTEexS11wdx2YRCkjJPkznLBuAYAECdpNFaxo",
  "key23": "4FfmVVpNyGp1vdWVhNTpSMCov4hBPBqVEZb95McRscCgdUgWRWCnsQZPtFUN4qL6ExuraNknuTVtA21mHUz6btSq",
  "key24": "4DdJcBb1xD9FyVBPAgx1ANG54k3fkccwZnzaE2xhM3B5C1WrTEUuDWFhVJGNTnsC2weWVc4pRjzh7qZopk3NF9Lw",
  "key25": "4QR7njhDNWRr1oeHWuJF31TgaT9EBbYwmB2MHcrCsgDmzm5Em2ZQ4sK483HH7gXKis1kjNiKa8XNTJeEHxwik4nH",
  "key26": "4LGCbMCti5cRCXUYYTsEz5tAUtiV7WU9KYykRrLpznVvvAmNuwBtvDwaajFvzUuBzLSMg6r9K1BgP3D2aNHA6gYe"
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
