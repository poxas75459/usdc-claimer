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
    "khkiyyfze27V4FLNCRDtFqozifLhUzCLrwK6XgNmBL5Mfc8wzDdXTh8nnrqqnwCusXTcrUSiTQchXk7i4CxFuAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFCm3SatiDBDvZCD2J6dMGG9GLVbwUp8aL5B32wnRTojSTuQJw38NNioj1D2MuURCq1U1nprav2UHoQRhSyFWEt",
  "key1": "5tag6TwAWFqucx4P8TNq7M9hEJ67XJdfgc7zFB2acqate1HWtUs6FvR2AEHhHzVQ87Zg8JXCLjzYEBQsz8nPmXKi",
  "key2": "5BP5sMqw7U2bAsnGj6RazRNPzmdNAwyFiicfrCbQsvr4RJtAmAJSepiUyGMZDBtPjFDinoWTYn5MUH5LLYYPpLh7",
  "key3": "3nysrkweMpXb8YZtxZQZw8ihVM8KnNxb2NDf4MxUhY7Hz38NzTPegUfadgJEUiAerxdpQmvw1hnCngA2AU8XExob",
  "key4": "uUiRsMM48Twe66KZGpfoeGYsEHJytDYASLBouirzbmbNwTDz3aU8ak9dr4o3S1z1YNz5a4DfCRgWTasZmQhvZtv",
  "key5": "3dddqFCBN1CRZx2QhryuW9AFEcnKtJpFnerxsZWEJroHKrHdNrhw3MVGM8kGr3GRXTvbir3ZJPM9wVDTxg8wt3js",
  "key6": "4yoLmoA59DXRbd1nD7xguHvQzTG6nwcVsLo5hM2ApR1JW6tb8ZG58f6hzwfH2bgJDYPjERt57H9NkYCeeJ6wNVWn",
  "key7": "FWH68GhtAwL6DbjMzPFv8gRLqMdj9oTnzwmZ3z8di5y1fxD4bAoLtmc7m5h1Z8idoQuBrzPXHpRbNdBVxQB4xvp",
  "key8": "5sgnjMZUY7LcspCZE4Rgu2fw59j45tRxCor3kVnZHqMtW6SBWZjPjEYZYWaanH7xPM8nSUbZkNdjfTr6fSmXFw34",
  "key9": "4FYnHarf434APradwpvtW5WaKvUpLRmQEJ3wRbyCsDX6gKEMp9PmQziSBvNkafRrrm1aeHr7XQFmZLDXqkJkS613",
  "key10": "62kzRfbpcKqNjbd7zFFhtYoreZFQWdqDYPm7voyGkP3sbCpMKwsUjw3z7Y5dhNrL4XjySzBCfaMHYMRWFGZeLhqx",
  "key11": "2CSXZcCPkVN1b18uf6VKrVECtNSQbcusr2pvkCcJaLAUQijkRZvCbASssdY3vDouszVTS1WpZ3WJ4K4kyheJ1sXS",
  "key12": "5irCJCuAr26ahm6btH114T6DuMRvLgmXKHdroAtzZy8Pr6Ew98cVLHjkm533dTjatcqgpgsmsCsmPAtYSufeSaBn",
  "key13": "5sdXqMHUzAjwBpQRenoVLGyk2cARGBd52Go3G8iN6RYnLtfsdda2Z8zjfeFtH6Yh9JkMiXucz82mVd1hP6odkRPR",
  "key14": "3B8GuBjd9pDN5nZxfPv9zj3AncRuURqBN7gWMsKiTuXUsC5vvN5QYbYGEQZ6JiGRzSPk3pnzJy8vj8M1yGGwifhZ",
  "key15": "4Mdak7ShkQ2pYNivCfW2JHFVcVuE56M2FYHTW3oSsFkVTB6PWoxKZPrrSKZo7HDyJYgWBsLHTpp2yY7MaLwLudyP",
  "key16": "5wVTVr6XFWvzMNwKxXSHcRaVunrY6ZASWVjigy27cQX7y7Piu6TjNCfSntp2ontQXaeTMqUz67GANBNvQNriMvUS",
  "key17": "RcD3yPQGUmSU4rNN6hg9qXtrDjAjUj4abTGE2dJZNciBmm78Zwwq5s8h3C9LpnArNAm6rTGz6q6gnVH7yXXGzkT",
  "key18": "5A2a7jBxfSjfAcPBfgJSjg2qxGkENDfg1wmoFcGzdDF5BeWpeby1q3bfrRFhh4jZLAsP2ttRazKmtdSAc58LYLh5",
  "key19": "eg2wSs8UnDiTYj5YPVNP6Kz4xAhpx31xKe5XbrFTMx14WgkhJXhSGub8184F6g5LtDJ4vyAZcYbSbteu2fKrWYo",
  "key20": "2q7BRj9adPuYwkpyULZLi2svPASFPL6QLgouqY2o4s6JFosWyp8XFB1mp9iXHnkync5cDCWVxtLSJbAS87mCk12C",
  "key21": "54TrVvn5QKWjsTb1bkXnZa9uYKqjMKKq6f2PaCRqZBVLswxtoTSiTRUhnxPvua1nahZddpWr5N3G6ZKhiHpJaWJQ",
  "key22": "J7MQiQXEZ7piqcDA6XnQLodsT2DwCuP33qA1iUScgDcc86M4wdyDwyv55zKozVTp3gexM1c3f5w9XWqN1YVYFec",
  "key23": "Fz2QgHTWTMBNzZkxfqtastxXnwYXrK6aFuetK27mJF76tt2u165qkxmUZXwGDMMYQDFXq5rLUWRvtP4vPAkUpFd",
  "key24": "2ePC2iRsfSXdFjMtzrDY13SwnsgoEq8onRQHPid6tcG7RiLRC2Qbr9o3sdQ8yghhWY1bsCRe3k5DyDgn3yFPNvcu",
  "key25": "5R6px2KdrJwr51rxxxd99icJU1unqTUxh3biiWDc5mz7FRifQc44fn8jj3vrdE5NiL6kLt4aU2U8qWEhpuLvs4Wr",
  "key26": "iTHhRWTYUCGgfoEjgDQ7ooEjF1CKfEvPY1r4ZsczftM4aFDXzCnAspBa7QCGyNSYbc2xXBoL79VX143KJYRSALz",
  "key27": "2fz5HMDZKYUtSWj4MvFMpAddo17RKSRw64dSBbCv6iAoq6motsrzpg8v3uQrZ8bGZjveC51RybW7hcA9waJmiYVx",
  "key28": "3ndCmze2tNK6oyrjvhpVTf9qGbRv53kgh481FSar5cksWXoM1Q7NfFy7rQ3WAxB9odmm9m7n9imTLf43qGRsMWQp",
  "key29": "671J2CDBaqXp4tf9Nquafmc8jHt4NkhYPdvePrmCf7VeTx7vYoVXh7VcEi6SV2tSvxH2YVyGJKLmUWcEjroeTbth",
  "key30": "4m96v7gEUcr2kPd4Yojjxn3V9ZMLuVnBhJVFpHUYd7fg5oaR6M63drZCYCrGbFsgGkzzvZp55dTJQLftFsXMDEnC",
  "key31": "6YWSmXcZ25Skvpa9AyQSjbuDHcpGAhBGomkw25e6zEsxphzBuobJjVbpEMvygpWkFaftE8qrugYoZrkmqd8k4CS",
  "key32": "4DVYheBdAtwxEvVaXeYE9dPN44GAUCpSFnKAe99iuVgPRQPt8WWkfPPFmECUbjEkJTSVNtqmDpZVBf9N1p978AjT",
  "key33": "4EdESHSiTr4xM7Kx7CAeXZhwMmbeqJef4zH3DPbLBcSSvGYQ18HeTGQPSXb4vdDst8tCaVEFUkzJogo3dYszEvoD",
  "key34": "4yEuZqw1TQ1NV273cQzRZxy2crqKosrbUc8EukwHfkQXtTvZRWJ4TpZxDbFw5d6Yc7dVbJS8GuzV9rjmq41W9yMJ",
  "key35": "5qjv2xATNhAPjUDw1PhHXEK7sfPKWtzs3Gwspe2iR9HTzemsizGBUimzfMQnzLTvtxifZHEvhZ2bVF8eKLrB57kM",
  "key36": "5b1PFMMUrWNy8N6MCUPX1FoTeciH6KnQW8ULZjeUKpqkPAZWbbxirP3yfS73NNkgekBGvE98oLq8KLn7oCfgjjWz",
  "key37": "4RAR2Ew2FwHNdhESToatgP8J9KR9aAz1H5GmwoD7Riyx3L1dGa2UZACrKvJSdJKHRMzmJAp5eU3aXuSY6xR96dph"
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
