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
    "iRst4rQWemxMmjHrpLQXewU76xxVYbVRuF3YGCGtG3qTjw1vzVCCuyb93nrGgb1uQgNu3jC4egN3RAa6q19R9fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6Uy5QWbAPoKh32VGCmtvwKXk2cYuV8Mejcj6oreSf8nAxzj486WA1o9UyvvAqWv5puSMz21zbz35uu4Ws8ZeGU",
  "key1": "3kiUz6K5MyZxy639MSst5UW93RiJff1HbdK21LqZhoeKajLhzfVhqkGST5yRwvQNEakBVySW5JeFqqFnM47xz9ER",
  "key2": "TRDBA68KkP65uuRiVcrcuUZoufjPsu38JHT4mjFX39rVCRDH1pCWS2bU6JRss6dfQLtqw5Xt9Uw2xeEBBfiA82f",
  "key3": "t7NwRZc1XFAV5RP8oMZfLpsGg6GHcHpX7UUNXbW8JrUuGxPTirwG2ow3f8ShTLseeh8cDqSxtMXctQAqEXVBL6a",
  "key4": "5PF7gd7pc97fXyr2kmzR2YJja3g99fn22cJ2DkMmYxEQECQ3tmqJRxxzcw9e79DtQpHBiqxMbMpgFfd15db5nmyi",
  "key5": "fvRs8CwwpL6nYYUWASK8sGux8Wfiw5S3ELnUP6ipXYEAgzdeMFKGCeWZkn61aF3hEw1T3yKo9ru5Q93KqBeJrLi",
  "key6": "4dxwNmrHTPdjmY1wcAmvXEJcvsHYNAUXHLX3VrqdqzzfFRUTDSsaMcnuCeuhLTQF4jZKX8NiUeL5GqA7jwvgau92",
  "key7": "4w2s64RhuJnsYLjb5VMmcWG19QLmi9bCrjuP7pLReWwSiJfU1njVuW3dd8KFm24DTerQ8SeDUe14t7FD6oiC6SRi",
  "key8": "5PrpK2sn4yRxhZr2VPiFvugPFsWzhVA8fHbmWe2LToVA5m5oUdkS6ro3kj1qhe8rkE1pXBM9u4ZPC7AHTtpT2QnY",
  "key9": "58AqUBuijLVmn6Nv1GDJ99bXmqSwe7UvJkdiqBMm78P2NrfeE4YLq3AnPjjqZiaf1MTD78quqW5si3LDpzgzYcBj",
  "key10": "2cjQXRf4Lnwx7mLUjs8XxGBFqdjtbag9SENq2szt5RenTWpCpu1sYPQAbs8jGbf5bczNe2FTfaFbE3ZtkAXJPPYe",
  "key11": "5uX3DwiNMRH9TBSbGMdzkkUzmqwETLu6neeeNQCBoZZa3Yih3WeSUvSWrHSiPsNrUBJ9DUuT42PRqTfJCVxm5xnv",
  "key12": "4tcPsdCijTTxsHv3NMRKPy23fwBNo9qXBhnGrytKQwBGY1xvTsKMUPBbpN6hVDZDi9eFQCzTwypGHq9jVfwhKLxs",
  "key13": "gFXJKSKYvrNN6cjzqAJv9sc4M1YiiBM716MMTh6KcDFjQ9nqQkM6MtXUy1TMXNHA7fRm3cHaDBycXmXajeYG8z9",
  "key14": "3XJDJLJPpTKzYBPkYRN7VkwsDqCQKCt2FUc6y37JC1StBrrYfm51ZLZe42nnDHB43RZxwmUfFVChkW3JVU171x6L",
  "key15": "3DxcpK5EBWohF4E9MtwSEEpLivstGfXS3XgYcJp7LDdpcveWugN6Js96aa7okVLwhcYEZZACNPM4LSA7SWFqvUA5",
  "key16": "4bZFNVPF8aR1RjUFgztuNK1cUYDonA8aS11A78ynbbsSBFmNPKCgGL3PqK5q7xTntkewuB3ugv5mLCEsrWZNsVmE",
  "key17": "3qswUaFX5R4zJiHkL4fNp64SGFwY7qoUexzrZmVi7yKZwXsMBnZMbeL2DBDDEPQ3WS5B1r6j6TMAp8DnbEBuhZEz",
  "key18": "2YdP5bqwPZbKwqx7VncypKPxyGKwzYJR6QuLjFD75ahfkkzLWHb59ZJB7LLZSm1znmanaqHtqi6HLMenPEZy9cNG",
  "key19": "4NKK3D77WHYTpSeVXGBqBbJobruFBv6AxY9RBa5Lm7p1VkDPEntHZKjFSdzrh2K2LnJKjvdsXurmpv57SwdjZbFS",
  "key20": "vcjPXzntD7AyQ5w1qa6wj9urWYYCVq1ZHmbimAzXX7qzre1D3Vvs3NqvH5JkAubQvfVmJcB6Zyk4owgCGRoQ6s1",
  "key21": "2ntwjfk1SLr5tPGKja17gGjehqfJKPiaJZkuZJwBduw3tKQ55ef893jdGbvCt8MMZ1NAAWTUNzjUS2pLyohaegXi",
  "key22": "5y7BYHAbsyuCC2qSqGN4QpmeqpWwJr5SzTztpwP3NhDyrkDxeG17WwotyYFbAh6kCdP1Y1wxQ4dyTWWUkw9znJUF",
  "key23": "3Nk9trg8yc1n4QA4ewrmg1dDvBFoFYkTM51V6UwSLrMhxe7dyXDGksxidzuYeKbVrPkC3iFXLT3xA9vCdSfRccmj",
  "key24": "48whzhf7zEaDk91XtqfKmVtfCbTk3eQmNjME8GcsuzRLNkhqV6ZNr3LF1u8GrjsuC8HfGiJoXQxne3QUoZKNmzFn",
  "key25": "65jyVmVtPcbFzBroz1Wy45QJNc14ZXBGDdjP1zZXmdz9VH2pEr4FaBAcUeYQxGwjvm3ASQurKYaiDAGKS22MTtHC",
  "key26": "ouCcdGNvSSVhRCPeFG1h1PU4yzmYayqEH5tHYnphuMcaFMZ9sQynKMBNznEcTZb9y75gUAqZ6tMxjoupyrKJCGL",
  "key27": "5wmbEwBBBJgrm8LcYWbE2oJemqH2jtwufqTajwi2zUvNFtcQE7kdZBdjrk33c32XetvCuLwqpKiSg8YCqj2W4TS5",
  "key28": "4RsbXWa38TmgmHBJQ95fEXHX5q52bfGAD5MK9SpVT4h2KD88Q5coW32DuDCamEuuqpyKHvoP3GUJ1vYv6SPMMpbe",
  "key29": "3GeinYbkByjKR5zF6JLM5y5ZsMJJ9wEcYMwW5XxeYjNWTENRZ1Y3b6k6uMM6mrcE8J4N2YhGBQQDZntr5Jm58V3A"
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
