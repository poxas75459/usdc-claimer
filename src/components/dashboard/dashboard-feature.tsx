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
    "29DdmGtM7nExm2EDDLqP76CSsro2oU9WJjUjLujkxw5nB4MYChfWjQgEqFuVPUMswtBREHdgq6F9ojYTk3xAM1te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Lwo2NcYQvuYQrMSBfJ2rjKvjVPeZKKJP2PsPnGmA2SQPYcGHDAA4EPFPFUL5E6avKq6gxLk3SLsGXtn9JojafW",
  "key1": "3GhK3fu9yk6waF8GR6by3ESU13CXGe5p9su71TbhwXZreDJ4V7aursFiyeAsnahEZ1Nxdr3q2TtA5cj5pDU7NkL2",
  "key2": "2M27depVpx21863xHJM7XyXCctKW3sCNcaTaT6Fp2JB2BotPMuYaSJwSWpj2GQxN1wRfkR2f5YjYZ2ptcw6TGt6o",
  "key3": "5Hu9rkYorRp6jCekvUNue56mTD54xv89ns7TqBDrY1o2nsEsz9v2j1FHeYHNCGYWw9vcomfFynbbwp6hTasDYQgz",
  "key4": "5uYZS3CKKeCjxiRC3E9itoHxSZa4GgsxCAVttJpL2E6ptu3cZ17KJKjJN4ZTcQxYhHJv3U86iq99Vp9Wa3qNTV1c",
  "key5": "3bYAZccLpnikKTHcYJCtZhY4LaeF6M4a2kGaZ2M933LUj5n9N6apxUo8igLSqFTDZscEYdhNzyHjZH6eVcKZHEVa",
  "key6": "c8v5Fo4hACh2JRfni2v4XY3R9SUUWtV7Mk6VcQxxjhpMUXQ1CpJAbHXDyXoLhKYju3tiSuvQ9BvwNTvQw9LKvj2",
  "key7": "28bwBe2DDYuJm3GUqSaNo2XEcqjr3cuQKkSWYRmCM92FFfVqLvTWmR672S3J4ThegJAmz2vzoGpy6mMehji4g1x3",
  "key8": "3gTnyyLo3u26vu6AuN8EUXudLJWZDjSXDqRa23kZyehB5iHX2qcP99QPkdq8M3iS7FwHQeP6oGjaC18Zw19puu6L",
  "key9": "Eu6E1fkFXTYzC3M7f34ktepovKHDW6YxAvSQTcPfEFhygtRWYTWDuDFnYCDwAEfobzPuNEHUBbUZBoMrRQVvpbV",
  "key10": "3tVmDsRxKkRK69YftpEjxsHEa3twmxhEUjgHzo2Zre9ZnUpHBeRSJpMJ6bwG57vvFoaoP1PwdKPmyBRBTkDbgtto",
  "key11": "5tdkBb3EG2vpWQd5LSoCjSSEuKVfVkAjEKpDtGHetWUAErbuNmCcuT4vxNxV9P3seq3XsuYcWNv21jJzRKNqQetL",
  "key12": "4qbSCndqrhQxtdvWz7cvkv5JKctTPs9eCdDnWGwPgkrJeWrQm9dHCUx5bodzHvH9utpRojSprv8bpuEYvNGpRmmy",
  "key13": "4K1LTLwtyHUv7Go1A9tQpg1jWtJEWaaxZEbx3Co22fuoBHN13vpfqmYEEYrY9woUQzAv6oCxYxQM9WC1cydtG39R",
  "key14": "4nJP42qkWKmvhHSbWD7ACDi2StAM6uSeh31UxdV1CMaxRFAoDaNjdQ66LrwmcjRxHo291QbVuSAwNjwcSNmtvfxj",
  "key15": "2yUdboRv4XjisbBVGCeDEDVAoTp525f9y7G7sQeMh4YfdD7phs5fEj2JpfvZZcNegb8SEA7qEi8cxWxQV38N84D4",
  "key16": "4ZP7RQWoC2PLsQk36XnJHuu6eL1VvitndgWPeBUHhYz8oeTjf35d24rE1NWT6LffcHzpwYmbNn1gyyVU7KXBicAb",
  "key17": "mnyTYFL4WbTN2xLVNJgRy3wMC7tzrY29AszEWUPGWv98cazEneXqwueKMjYt2NtUem3b6Aeu1tRyVKXRhQ2kqe4",
  "key18": "3Vd54wr8grTV4iEdLSez5CzMbsGPNyuNVCtespdj3i5uNio7VViVST5aT3yfm2HMrH6QnuuThxRytKQqAUkCFHGA",
  "key19": "4kongTE3qHPFXMVUBFrdETQAC5fn3GtYzSZANyrfFdXRN5hXkayke4Ua77ZznKNug8LJ3GHRb7z3U8vSCQhEReGv",
  "key20": "3Mx6AVZ4bHvQoTsMUVSBFD7J6ew85uU2r8PaqwrBLWyCCAk72cr9PU46x8S78xqpfdnrS7SzgV8XKajwkq55xjAh",
  "key21": "5JBFFFfdgYa5XUgiaMqQtbChvgdi2oA8kAmJXUWdSQUFHmXwpTZkuYX1ZWwh4GcLBQUe61zw5xWHSHkVmps3HwQf",
  "key22": "4JctdCyXdMMEi5ozKWif166sMwttNJ8868dMF3htq7r8dwfdxJyJ6BLwNoY2AvW4dAKYyvUEE5LYqvP5F6jyaQ6W",
  "key23": "35X9sXDGYuBigoDkPTBXhXUnLUxApH9E6dh7983i6QpseftLJBRYtm3HRfZeX5fEiCvfpvyzSGVtYDsqhLzdpW5L",
  "key24": "YFEimttvTsfSyS9iBomkztNWFvNFM6c6GBawhnyBV8rdLSbX4R5UFC5BnA8LgirSHMSfu2mEWivQCFN1xn9e5jo",
  "key25": "123mctFLrDvPQtZtNi4L5CXSpK7A73R5MntnA121o4usSgSth2ZJW7TeqBNsB9ieT3vLb5X1uhQGh9FVtXXYKmb"
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
