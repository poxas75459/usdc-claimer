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
    "3HbHHy76bDJBqUBcxDCriigRLTwedCTr2QEh3ZFQ5JEErEssxz2R3iRNy2QwtbSGhHP9gGvUyZktAn1JZz5MhNSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPwgLYFF4hJHVUGnbnREbE5yE6FruCAqTRWR5pyDs8HPLUogWcxGkMcMCbd7qMwHoXvZm8rszSkr88mYNB9S1qb",
  "key1": "4nhist33DZ6T56yjaEzu9A3xhCXTHmtg4KifWZrZqwCEJzmnTtLUf3Xpf7wEw6FbJG1c6qCWm34CTisP6DLLU6xF",
  "key2": "2pjdfwCGxEA3mdjf5XH4ge3ctsE32oV9NHAfnCLw8nb8xVHCrWRWox5KtjLixw7pqTn4DexsM4boqJ962B3tmUeZ",
  "key3": "4wS1Q168CWmmcW4ipFxvL9TRpmT4VM3MfjBDKsm4u3aKe2tLyzBoF89kcY2be6yh2jZGJUFea5GfyurtFcygx8U1",
  "key4": "5cowms2U4wpFuPYshvFuwRXkBuLvdVAGyNpEQq7mKutqpFmNPq7NBQjjQZuKQVDctZRxnihGxgVNebKi2Hb45Ebi",
  "key5": "67KZxby9Ninyxe6LMxGL3QoahuVDe6pH6chkZ8MunXNLrjUsoKuhhtSE9bKSY1a8BRN7o67GtDeB7idwABx4BR55",
  "key6": "2wZJHYY79fFAQQBR9QfUoPgznTAbPJ8nMrCqJWQLVArBitFnSvxgMMC1jCJhyFbvFPiKPE6D8Jcx2UBCePgfHXVK",
  "key7": "5zYqtK7SbBuqMTxmCH7UTrPW2Zw2uBRSacTF5hVaG9FsEJr1saJnGFLBGK5tUiqbWb49dJ98dELEmrTTPeGSrUv",
  "key8": "2xEq3dLBAoFh7S2G5VWJaKghNRyU52APuVgdjC2Ak8nJEBzqT9ePRsqViDVZeUotFLRZqHD768faoUHUgZ2MsE9g",
  "key9": "2hwVfzDgPf2QR2RpbUX4riCtDts3Ng2Q35nGVQqKFvzypqxudW5ym4ChRpR2jG8u4J4ExMAXUoyHJhgSZUSE4fnW",
  "key10": "2sQrTJ8c6tvMG6m8ZKbnX4sB1jdK631wgY2ChcNP265A4n7ReVKJKzT8atHRSdt9uo1mes36c9zitfz3GrbjCCib",
  "key11": "22CSsmuVWDWtRkNJq4zjuiybjX6BjuWoghGK2jWAWw1KMfM7q5r3ihQjwJRKaALtGqeXQq7TRXP8CA2MQ9Rds3X9",
  "key12": "4chhbUGDJmK6vcHfZ85J9E7qSdHXV8ULa3s8BwghYbmtZF3nHkknPVY6miMkDUCT1zLhRNhg3RYVvMxhKgJwN9NC",
  "key13": "43UxstdSvTtnfdaWNNncavZJq3WaVbvrMhjA71Kj34qzN9xK6TvGnyUASQ5Q7JBqTUkWNwcgzWCtWQr2ooQJQeE",
  "key14": "3KAGQ9qC1TbL85TPDFHzvXLJZKBymzhUk1ExfX97hSWTtxrvojTuFG1XNcn6dtzrPbXT27XsatGc6pkPLShTbTMC",
  "key15": "4xV8qMz6kwQnGjdz9fD1yiLG737iBPYuu1ZVbyL6aYGJkLgdXryhPhFq4UZ3ZngqEQT3buxJVtP2jQgi5u7xuerE",
  "key16": "5rXi4nusMUiiTBQrePcv9NdxzwoTUJWK5zg4JaU6HT1d5ffmYvC4dLSnbi8MpAvUCnWLBQsb25RThRuTW7ctkuHY",
  "key17": "2gfzCXjL8FZMTnwgX5FsUDaAMTsFWCaxWEmxj7oKAdZx9mizjFyqxagtbaVS8Y6dAwSQM7Mvy3ZWyq8zx3o2YGLb",
  "key18": "3USxY38Xa9obX1aSGGyxfiusYRyDLZUyviyPD1UgAk4zhFgpfamw5FZ1eL5JJaUbTc6sMD6nkgHS8i7kmhUh1ehw",
  "key19": "2JH6DnZFaFdvgV5btAAzM9ir8zsfp22kCMWxWpdQU791cFS22C6k5BKvnkjM6jeTtjkEo53Yexize7ejHwfSFSTV",
  "key20": "dbdWx6gkgg1f3FtDkLyGguDmH47GXfeh4tCxZ8NDwojHZbvwd4Wxvjxj68No34PXyAaepToXPXT5cTLZpw22DS6",
  "key21": "3xCfKh4zSSErsJyiZ7HGKjxrV7QPx5yfuH582GmvqxUKpUAyGtusXEp3sCddNBBNdWCuxrJ49eD8NKZBEV5aiarQ",
  "key22": "2URgLyChr55rbAM9xAgkYzr8ty77j1pYKVQZmUpoeuCLdAwWwJBmTasrpoqDoS8tALBuvNUERij8cL5bohkzjSKh",
  "key23": "2n8mN23BSmB2DNrwxTHWHgfz6bN6tY8ezVi2uEgAMPbKwgYepGEJ5xeC6VHVtcuGcEWrHswjYCSXZdqtwZhxusV9",
  "key24": "492u2ZLy4reejBfpQ58kFvQzqeuiTP4XZiWgrnMU4CBvntRXQYgEtSFG22LL9QkSYTCeQEdGA7LcosyBjesEa7Nd",
  "key25": "6QeABVK5hktNmMchcBQ7V8oo4UnGJ5aeH9r8ZpnmiqVsM3GEwNkzxe9QR2jPomckFB3yS9Azm12w6iSdHFSpYUT",
  "key26": "4NvfYqEeRvZ4ucrLvRYzMvhSZEf2h5ZcKAX5DjTcdgL8DApTXzr2LVt67dNXcCH2DJ4vps9MXLcs6Er94FPUVHY4",
  "key27": "2oGKJ9MW6jVjscnaRDcBs2jU7ZEdrAgAbxjEo67eFT5QYbXNcfpdqiby7LKCYCvHBWEgkXQmASTC6a4uGnWii4bt",
  "key28": "3S6dzxbZq6x2c4nxp2tka3ZceUF4EfRM9CaRdq92tTFACxg4yagMzZT1GspjgJtXuAyn6TZeX9XBEwSkz89EsKnU",
  "key29": "UGzRcN1XkJcccX7uu4oKR6vkeXFvY69HRwP9M7uVAQFd2A43L8ySAc22it4WioyCvBBZKawWtveY1znRyEdZxz5",
  "key30": "xMTv8ScAzLXbtpVXBDARonVfqJjMLk2RXHBaSQ8PRhUF5bxDBoeU3wRsCRaF5fy7iLkoK87ZtgJzYh5RSvEe9WH",
  "key31": "kPBxFRGdMHv2e6ikq2mEbE7SbbBcGmm9ZUHm51Xac38vys4hCESyhNjacvLiQwuR8fnLmf9G8A92LoSHYN21GiB",
  "key32": "rTTQ25n1ek4WvpGVcZU7XYewWuXyRZ1bfUQW7PiZpi1DYVq2kqiyqsC5dC6A5Vap6GLofJdK4z4ynJtNeq2iVT3"
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
