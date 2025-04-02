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
    "51Bf5heL4agSUsmDxqrH4zPANNpovhZGn1XRToHrRoe6oKKTFabCVM1AXKXkC43A296U1JrkrxWpj6hGCb1oQ5mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8FdP69fhyQ3SxBMtpgqNuJRYR3eMvcSY3nGvamFnQxHW5gpVPqWTUvFguEMBwD31w48x4vEEtqgcetNCAsH6xx",
  "key1": "3wTB1Th7DWBxDrfprGqakcYZ2YmYiQ4PaZsKM63mSVFs3gUPDsxzc5DZFeZwTcmzairSo7bsjBjZUHhZy7sjnJHA",
  "key2": "3CBMKAKHQAb8Ae46j8roZpyVoDAbauMjqQFF3W4Rvh83U6TgURa4zShfo1fXjNDHX5bfrwetBtLm1nxU1njJXsw6",
  "key3": "iURizLM5ULgPgtELmVXwCK93WskGpo5Gi7USMPkCJEPzZxhuXFv4FZKwMjWDsCGym38kqvdwizrqaUkBdjKr55g",
  "key4": "2cYoKAvQ6MhBT4ue1FS2KabcBY3pauFbH95ZxBqfUwymZ5rq8eQGce7zswQEQtL3N7qR26oTjmZudWbL5MktjJXo",
  "key5": "64k2bVwxSBzZDUbheTKQYE4dAEe6rjEif5pLoSGzvdXrueytM1Mh3Kj7uum1z9AtQjxi8nd3Xgv4xUeSRuu8wbFQ",
  "key6": "528NntENkDRdFCx2wYWWChM3Gb5BMPqdczXGiZJPGggnWfTKgqLQ89Mf4iEzX97zAFgXyYhawnbSZdzAbSfXcTsr",
  "key7": "4orLtGrqJmsGbaMe9coBnc1pnLnX54KgBFQt2fD4hKEGfmFZaN6jzHLFBrbRKZKhT4Qi1wBrXgrFbnismYs4Nvm2",
  "key8": "kKGsAiUoHnZu1M29RayvNPhdfMZC8xbp7qNWWUGGo7EnU9Ho75D8UxEa48FmYJeA9neF3cF8RYa1WhGjoczRViE",
  "key9": "3NFJrnWkKEgyVtsRxyMuhxWG67rEdimmKCr5d17oMLbwAwkSPU2GqvSQRLb6jQJDRcLrEQFVdnE8sQxKPysRDdr2",
  "key10": "3CUbqkzNyHoFJkQPY3h5wD2WVfpNFdcfui7srFZvvY3ouN1Tt5NSPmQ228QKcrzkng9nvZqYqaisEr5dPhtdcdHw",
  "key11": "5eJ8vScPuafWbFgghqUFkM9PJwD4sszvEq5uaH3ruqtcWhk7aszmtbhEVfzpZgamxq6UgfesdbxVyfzbLzwiWpvL",
  "key12": "4gwYUq7WESTneeU1k2QKJqBkHhF5EL62a6JbJvWsRa12ajFNuwbXcJ2t6rMzuDqKxEz3J98h5zevjWc5vthNkvN5",
  "key13": "2LwnURR7efxeukX8D9k5YwAvF3eCrnC8n6msu2BvZMaRKeJPVo8ehPBsU5LzASwEbCwmqTm1mub4v6Tm3Ft3y6Z",
  "key14": "52KBzkBPu3BFMSkv5sU5gQRuF62TXcQHhGcRS1H1ULRbHeTP7Z5MueUUvv5xyBDsTDFdmPPGj5DsbCRSiS8mKRoW",
  "key15": "SmiarFQ6BgJ5rUJcrVqN5TzV2kpKDdS8ZvrCyFZC5R7L93bWwJDJDPaAJjPfy4K2VspR92kV6cK2iaPxwMKtPFs",
  "key16": "WvJCgmtMk6HNmB1uuEtqtb46FAkzVJECMxuwoQWAKRiyroCPycCQjyD9zCPMR78QYZS6T7szmAK5nbKnX5ERNKg",
  "key17": "sDLJvrL8nM7gGHYhVAPpLh2HLZAPHD1gB4y1Q7K2Doru2z3QhCcozHWQWsFy9evRoWQD87CTrVsC4n7kmWbnW1K",
  "key18": "4rB5EQAXmf773FaTKDrg79sSWaRsC5yXiDb1E5xrLy5kbRd1fsEMAqyCfELh6htK7dXkgX5bYDhXbpFYhniphPYJ",
  "key19": "4fFAxqitfBExdQVHnQkPwuGG767QVQSebFqdyJ9aEbXLprqzxnopqfpfa71gpLqAmW4c76aFyQuxBmLktQvgzNQy",
  "key20": "63JHZseDqd8EncAW7b2ehQgms75QfG95FzQEWRqCVWMYsXDxGjm6vry1S51MJ7kMhKmPJjHCp69ErX8zgi3HpzFV",
  "key21": "2LTTKUP7QPEBFozuPFMDvsxrG6ZNDjvGCj5sXKi3oxneYXPCyxthvcWfQdgZqfAeiX7C2rvVccRiFGejRyMN6YKF",
  "key22": "WPaiNE4nhJAQ3TZhD8xAofCkCvd6U42FfuXri6XUshuXwRfCPWsqZX3MjH1aHq1BuGZ54mSicM7sNYxfptT7tk3",
  "key23": "5peGZojxY5bY9i7qstny6mCiBpDjkTbARWxrQjPE8s6ZzJPqt4Nff9pXETWJwkCHPKdcSssB7LViEyiNd4idYTw4",
  "key24": "21tSTtG9mc67iuRTbuUoHc8Fuz1PpZV4A9pKnR6N5614NTrLab6nxeebNZ2EwvfpAaQqXBWDveCFhjkQSWTbZaJx",
  "key25": "2Gb3vGmDaBEnV7YTj9sBDoNifQFhsNaTSNWwLFRDqV5LTFPfecrhYSjTKdqakPCaaXRgBYENKw6nnhJFz1z7GSav"
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
