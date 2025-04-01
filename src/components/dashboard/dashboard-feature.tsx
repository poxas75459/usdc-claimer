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
    "4nLmY9jdrbSHH8PAxktyYPk6vPH5fsMJZP3rgHRXpmZ9DGN1EN3uzKTgtWcw6CbJTxAHafg7LfRuAUMtTMGg7bYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZdEyRxod7YpLGKk5zmoP7n5pUJ3KhMsEZWWEevtZpny9BFGK5oeawyKQgQSCLm2SXE2i3CQNWaRekQXhGsr2mt",
  "key1": "2hXEVvfKtX1MK6pnYsWCG39BZYgKgLxrchxPxJKHcV8VoeigwaiDLrepznLjLWX6p2q6f3YiorN3tWtuw4CGwA6S",
  "key2": "2wPZP2FWju2HCUuJT2wGvPTrQQWBPAJ2bZiBbMYuk5rZx6K1KSUJpqhzThXWNhNNxqwJQSVLeo9gRk6aaciSadP1",
  "key3": "38cUkNBBXTvbesKgTzVV5PzsuBnbCsejF5AmDQALDZSedFJLghEAKm7n9uaXLvhc1ebRDREsS816DQWPdsbvzcpS",
  "key4": "4DpLRSxhQwfAoZs8WAZ9TNY4q91roSfHUWtfgvGL4Nd6kQEeDpV78X73rBygTDuc6XuGbQHhSnzDT6Ujt7trgWMU",
  "key5": "3LL9iqhcM72evYFZW5ysamABwcNJVTJ7UtHKHViMXubryhNkoS7cbVDaK1w6Dvh3g4KMrANA1xLCHYUBXCQQeDUT",
  "key6": "5Rbwe94oQ5JEk9LoRXYDwdonH6hmKDBwMZyps9SsZe5mZ7fmHXRSNiwtman6mPKLQkzu7zJWA8y12uaSHBsxDQsh",
  "key7": "23BbqYtaumSDNW4ZBiSGgMGAaQubK5YgyRGEvenRGcBTeQkT7623uRpjDALQPQL2KLyxwSrfKz2UafnWKE3WiW33",
  "key8": "577Lqo2PAsd4phRinXjDzLnM2jADqrAfLbggCdRWu5r8MAEdfTYxsMhTn5ynhTdfc6qSYEHag9Sa1J4qzaxBHPc1",
  "key9": "4JiRwiG5p2w8TuKpuvHUYsj1cFGiJfovbpUcT6fSRdFG3YyLMPzFq8uTSQZCTkPV9DUVDBU6Qe4z6usxEp5L4ksw",
  "key10": "33A4JnaYnQBgEh7E2AdbY3BiuLHsQfsZqraT7iVGQbtG8GUWeP6djsKpzsVf9NJhcogQtAfTLxUQrb7BsjUygsS5",
  "key11": "4SD8RVj8Jff7UqiwVy1t58KVWHzqAhUwFrg4CRoYoAwDnzN13gKeV1Sazz32Hw4VWsXc1EC9vQ1jjFhWz48N7fpr",
  "key12": "3AzzTv76C1wJxstLiAnLbMwiV7JiX3GUbHv1AtbUGw2qez7RcTXCKaN5juPY4cZNHiZwzhrNiMcYwCUfYRBwpEJb",
  "key13": "3BK7bGXqtMEDtUDiGvRya86F56LANqQSHjBUyTxSChquWjKNoX4XgZNq6vTtBJroFEQnQf9SaLXL2yNjbWFeR3Mo",
  "key14": "2CbqMHG4AAiCrvDATQBZkNXdWiR6wq3kxa69WTYcwAp2sLETdLRauiuCRwv6X23fSzVYCJSPiH5ZnrX9knpLxmAt",
  "key15": "3C6iibV8ePUT6nrSBdZ91EZThCGa9QXB8esG7KP5ieWNYUVi2L1HpcLZsfW3V6mj2AtE75yrSNW1y4toTohCkcaK",
  "key16": "4vFzprTpxRvghUCtN9QHwqthh7ZQjE4JBw25ZgU11dHVsb78iTdPpSDQb3aLed1UDzKqEcNm1wkSavHXfp7KJxC7",
  "key17": "8YfSNK5MuYQrQugeeMnJ2BNaGnNRXvosHUZbNzyFKE1WADzvf8J54HmXejvpzWDezKNR9i8DhRmsWRLH5UVDRD4",
  "key18": "5K1Cg6QsWXtKSLEsGoV3MbYAvqsQNaK4b6LzhAdHB9tkDcfV1KvJjuPWpasGr86Q1mhZwknVuYX7k5QzdXsWWUdq",
  "key19": "65qeAyoePxd5bVMBfLKRNij1LQ12B1J1KTjzvwCSu2PTDw92ybH8NMmeZe2of1Auy2o9S38DG9vF8tupouwEjL7m",
  "key20": "5UeH5nwGuUjYRCG8YwRBP4cw7tw8zixpqEjwXVtReiXNjNbRk9pRrxXo8UXqGbVaunQuaEPw2FQLJ9CCnqV41Lpf",
  "key21": "5xDpuXhDUrwb6r1wVzbsbytbMpGyNY4anWdCqXNePw86PfPdDjjuMuiCecuBoRi29iCsNheZfPFgyXGgaknuLxkp",
  "key22": "5n9U2Shnazgz2SSk8Gr2ofZVqoCc3DqXRBz3RudBeagwoJFVYJGghffYwX6D3opiB6dsXJSoxBJ28v62TcvLburx",
  "key23": "55CMjc5kYFKhV7BHtr4UfEausqxj2twV6BBxkBa5GKsZkGCrjvnvuaUddm877e6qpjeiUuPRJo6awZwHVXz2YjKq",
  "key24": "4JiJCnF1aX4G5A9TAoXJLeCNnk4uMMXLRhcFCAoNouR3ZXaWXj1QcQY6KYL8s5STcK4qaAN9rZvTah11GmTxU5qn",
  "key25": "2GaK9KdmUQQpM8A8Ta3G5jC9GuYc89R8bxyUtD5Mcy6i5baW4t3JtA8cQBoUaVma4zBXWmZW9g2EA98mcAXeMGG1",
  "key26": "41nkRYT5HeekEmVM1swDDiiCTXNHwTKi5rgjqMbYka7WL8RSq5hRFQGUQc9uKPHNVD6mSeMCHeKybv8P8eJvEkxX",
  "key27": "3YT7s4LcWa9K1fNwWJP2CQNBB4PHtCQ6vc2kpYdZ44P9b1DCGqk6bWJbsswM6aX7rZBoCEo2BJcZD9GWnDE9qKbJ",
  "key28": "4RgbwZfAS5PU6WbnZNzNPikZ6CRkwwYk4pno42GB4ere6MMz1DSTAfKABeyjffAoKcrxa6NVdcUr9x9ZweSmqTLw",
  "key29": "tFd9iRy4rP57tLzq3Hk3zgaCKaiUL5kv4Tv1NBDRixoB6vfBTPpHfbPnSP9GgzH1vYMTxEPcgqr7Tb4T2nPabLP",
  "key30": "599jBKLnd2AduZzdGcxbsU96t7FjadZssXd9ujufU68NHewVykfsXSMv2GuM2b2kg2JeWUP95yA6bCsqWbk5bfDB",
  "key31": "54TGcBKS1yMZ4Hg1ygon4FaK7CY3WfcotihE759RY8WQPPevBrBewadkYtUdwhjKNYunNhbhJu3ML4nKtQ1b3hy3",
  "key32": "5DAr4mNCwzG1kgVN84qomQNnxdipYrPuAY4G6XRxcWzuo7FB9bLiwwqwtZd43hvqweW688MzrFnMPXpmmVqrrKZt",
  "key33": "jXDcZYojLpPageqZq3DhTNifRbBgFDqsNQ9rfy6TBoj7hBacNpSuXG42VhEjToPTN2m7W8Zp8wfSXuxshJ5hyMh",
  "key34": "2K7R1J4woVcMQkBMj1Dp3hjULbW7VCTvANJzXLZxHAVJynYtHuq2fjP5ffPHoxd7PjmAbYiDkDZgZaw8NxZLWEUv"
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
