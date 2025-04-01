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
    "2rM3n8MGvn76oFTDyx8UCRpHppSzy6DvkC64cgkpnpWwVZ4k8f3N3ZC91UxtJuKdCNrpqT7jVcQVrSWTVQFYZAAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZnWKDC2Wgs2ZZ3PkS4c8rMcKHjE1RDRAeihkZ9n2gaxJQMwwb65JANn8Tmw4U839TsjGfeTj3BcaeB3c54L9jG",
  "key1": "5A9YGSibpgHWYdKUW7TLreCvXT1g8hiz1zYa9rVczuHCVRz9rhaB7kdR9MWxMnxcnLjDd9yJ2FmdwGP6zodUsRRr",
  "key2": "G33aizoeKE7UYTtzoVRroFeQB43A4gfpmJZVNzMpDQvqviAZKfYBce7ov8cncyTiVdtiEKnEcSmACUsMSK7Kkz3",
  "key3": "4c6E2oz4yrVusyewN5y4iSz4uyTDp1dwzUMbpjrec1d2q73GP51d8MrbYU42PmwVDXGwXKZXCwu7D6xACxnC2XYh",
  "key4": "NYr5Ds2dJoPsBQHQWguGfPR6Cm2JyWTEvTa6wZritrEbu1VvcZTTJfiBgLpRoJD3Ghkycr1cN5kFPodUV5qdfVf",
  "key5": "5Nt5LYiTdt257pkmJghWqUf5zkiBrnSCvhmem9jfm8VV7ZkTQWTRbmgfe7pzVo5bkzHVS7x7wq8WpUcSdTz6WeX3",
  "key6": "4nk7Z6BV1Z8UghwAVgMczPNJ1UxjiuToisTLpHd7pFb9qbLZ5mkda4b1RDmb7VQSLSqSPYePVKBs1eLihdkSKgGz",
  "key7": "34Du4cy8CiixtigD3hX2XXjt3FAtMbZq6ynQdJeo1sxwRn72GiN88nUhpLHDx52wovQpJfsGM8WJTWXAmzvXQRm9",
  "key8": "2azHc7SZXJMxGUW1qYvUqkhsdfmac278ffXWzWSJa5JnAodUcdx1wQ5fPCx1ApNfFvKxunQ9oryhNDLWNV1r5hJm",
  "key9": "2y4ZfwMsroyAKpuqxMoi57cGSLjnf6nHi4czdCmY28upF2cNSVsGCuJhRJXrkF5QUKn8nnt7jyyrMonXqK2ZhzWR",
  "key10": "5wsYmJcijC3jhEJxJ5EJgzwoSdbdXtKftom4tjkeqBvcCJAdY3eSwY6Wtaf6yZmALRj35CRcPCVQBQFwiA7vz4Nv",
  "key11": "5ZpxNvMTpaydvR7G1cWmwvYLffXECR961KccqT823rUw7PF8PYWBsL4wqCqexar31JCdCmqgZx6zFfmFBggAS9P",
  "key12": "5559oHiYkL1y2kVd5kMiBDgTzsSoeh2to3WyJ9dZLfLYdcc4dtUAq1nTRDT8rSsuZiUeeNXPrz7s6BXvco4Gjkb1",
  "key13": "2rkRSHxjoaAbdmXDhhT5qyLPWRkJr73X7MbKGzTu6NoJbA3ULH1R6jyfoyUXBJtWsBeF8d3eeyMPUc99gFV7fJz7",
  "key14": "3qkrLmLMjmZ1Nk1zM4r32wcYNbaiQiZ99DpLkd1i6J8oH29wXvCsRhESdxZnVKqQJpPZvGYhfcPeUPWdL7MQjgxB",
  "key15": "2GsxBkMVTkbS7PbRRqBFaoWiiAeAbVyBqmTVmTJ7BevNP7iA6B8Bt26QttHZ9sRsTYnb2mGv2jwPS51BZ3UdJMRw",
  "key16": "2eN41zq5rDSp6fgQxJPFxzJkdvriA22YzH81XU8RGEr97n42hZxLazWgatnAtKiQfe3CgNqQzM7TYYZ4tSGnztqM",
  "key17": "StJuSVMSnYmWtipjHG5XXmgLrHRH2E41SQ1VRvPvQjpwKqD8hWMx1xySmcDQ7DHHbYAfP3YGE56iYQr1NYTbdyK",
  "key18": "5roKeZ1cFq8Met4hepnzAq6oP4B1b6NhF3jNoT9DTw5JH2RZ28ShsyxRTEZbZvj2VaA28M5ph6xuWGX97cEJ4rWT",
  "key19": "4GqgQrbiVaVFcb2i7Urq4oCQf7yu5i3m8WUMiNqkRtQZahJG3yCBLQwbj3dAUAjmrZDL4UcvGCeoV46VoVwPLpiq",
  "key20": "5BZHXpxiDrm9UyMy69sM4b8WKPcuuFeKcwHB6JNj1eUvNJxzQ6TJjFFt9hzofvAuirFdLkdvW32ZZ5SgpU9za6AP",
  "key21": "5g3NczAtYqxBo8AQPNJ2DcVSMWGgYzsJLDUSkKZ2G1xWnYiR5nTvhcc8CBVSxor3MyUhWCXnyjeGuZyFeeUnQ4RN",
  "key22": "2bebfdSNT4rdKxVKc2chiepGwTyGAmhpqDFdG4CL2VpQ2gnL5jqfv1Ge2HSgkwDuBBGp8HSiGGEyEXbiNZroTU8J",
  "key23": "4nfwLw5gYJoQSfiqNMv7PUEP7sxmHkrrP5N5wibYEfNWh6gNrQtRNCjnSUMYKGXQyjiU7ABn2jrA6r9UizTfpdr2",
  "key24": "5WkcVBei25gU3ML6SAK2dB2dGSE2NWAw8cqHSMW8XyEsDKUSFbQnnyiS8nWTGFjeYJ7rT7e2HFop4ABCNeDpsd9h",
  "key25": "38y8aH3thY5MF9hyGrzaq7wnRTkvW94Tife6EFGvbX3cRivXk4aBnXmrcsHYs3kNAyQMuk3c9Z1opZ4jzDqzLCKT",
  "key26": "2vhQzFt7qp8Yi8UptB2xAenuFEjQkGwQSLTi9btT4spwTyjZnJUYeXSjYBae2srv5RjDL8aRYFECtnd27fbCnRK7",
  "key27": "s3uH3xKr2ssXBBfiGTx3JuBVazr8qdXD6HvEL8s53eNaJbb4nYbnxZPcc9aEQp8cKsRAEvJYTXN4PXshZ6pLfgG",
  "key28": "yaUbc7tXQ4ZLJB5dioKxWnQbjqtuQdgR8toRzFZDqwSkk8gZCcAxNEUaEZ7nzNGEYnr9CMvZAGQHPbdwK1yDJAj",
  "key29": "5UyFeA82vp4mzHu1FvuyFtD9CrAThak99uJPuuLD6LprwWoApJFA7R6Qk5PiFBSsT7kDEHtcara5S61xToFvFern",
  "key30": "9q9npk6VxheuNXeVjHc9p5DwN8MvDDiaU4tEjW4kcA2pZW3nNNXWFuPHk4bfm9dkYuGGbh4XTHeHb3m28XtHXXc",
  "key31": "5Jmbqm6jV48oaSSqBMnuyYmEcSEYexkUARumtDZsFayuMsu9ahsgfjUPsEVfuj8Uht74Ddc6s6h1rpfbLxFHELdi",
  "key32": "4ERPwdaRN74bN4EeSx4Pww542xC9RG1KuU8eh3wi6fsPWHWqF4qGPThFxEvwjYLJBthPa23tXfAWBuZdqnZSuHDG",
  "key33": "64yYZzhXRpYZKrtqZve2R35rUPLS3R7GR6ZpcJdaxEsASbu9wa9MGqMmexUwc6TSf3m93fbn1qG6V87m9icDH3x3",
  "key34": "3gAPA1Vgr4ibGKmvcUtKoBMRp8xZFSvDEvrgkCiu5bz5DrcWa1BhWt5XXaHk8wL4SK1HXn1Gc3Z63sSCBYfdxHYC",
  "key35": "4NPTXFFQeVWabFx5tWCx8iVkHywG4oUJaru6Kg2uYaBSjvjeXCMhcBPXzCRnn3Nvm6AB3UnhuBZVTgBups85vLzJ",
  "key36": "2FBSLmk7yvAYc3JTz1qpK3rDZPABvgey5JKwL96SvUNpdbYuvBXjeaQexzJTJuJhrdSXLYAoEnXy9i3cCGQBxqyq",
  "key37": "3VU3aP4RCN34GKvrZwGtG6EQo4w4LYsV1iBjLgpXtF5c4pqJrQGJ4FFpAX9DYsu28DRo7ZEZ1fKhKy8ASbv3G6sW",
  "key38": "5ZRjwYtsfw1HD2sxQhucejM1Fequtb9Ls89CBzScKJWn7wenc5a4m5sFqpW2q4GqGYPM6kksGi6VSS1xR1UVjZM7",
  "key39": "5zGHGRk9kVZvmRUk8GhH78sZdBdExe5ubwZGpTEnuJ6WUfwE9jYmc296fgoR1WGRWujbT8vLy6dxKAXSesRESLhP",
  "key40": "3DsPnzBv1oEHwLfLgVTgggESdJpAG3FPZCrn7v88oj5Gm7i5zrK7z4zwRPd1ETKDqo8E5oGUKJfZEe94oo6HGfvF"
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
