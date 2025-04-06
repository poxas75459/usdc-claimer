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
    "5PeMbTBZDPdyMgGMT27coZEnYrZYR8AAcvarBJcmJZc5FMgDGdBWHfWNRWmvugR2KJf2e8jDtRtPinQrn7CUbpy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yaf6XaMmKR2h6oQveYkB3GzmxW8KgQ6KfYWDPmYssf19MTQ3HeZQpxBezhA4gZrUsq2ho8R5bHMju67jjEJhGx",
  "key1": "2v1M6KnVKx2QRv9SETRh15ftBr58jmTbRpJ4Cjy7d75VLBEM77qoYB7m5oTDRXs6W3G3MR3izENGXJxZNfdLs8QK",
  "key2": "4jd8XVroJxW2VFdZUjqYsTMWScue1rUqQEyXNtHWaqwGWNVYYBxEznNbxiSM2yYYAc9fxiRQ1ZCYjZA8upp8mdLK",
  "key3": "3pKdq63hSnzXm7EBRxC2XYTD8ozC4QiqMSzzDxd6NkJ14QZa75d6Uxkz9wVywX99WmoAixmJRNmtyGEgyVKr3DZp",
  "key4": "5ZzLDVH2m7EsJoNERuZPgzoR5jTKYZ64EGRQab13HUyHEqENj7ZJijJd8cw2EJNvVRLABJtzv8bLFMFZ74rNucxh",
  "key5": "49SQX77K5LswYHFUtg9m4tBXgyFFhtu2VX1KgXLtnVtcaF6xWFrgP7atJzUpt6krFkTWgqScgebCXeUTPM4Gz56z",
  "key6": "4saspu7tFDRn1grHh9vx3TotDJpSjwRkAtDWVkAkryS36dpdUfBVZmvJT3LWykR5L7cFrxHLyMo99NQFgWkbYfYo",
  "key7": "38qpUsMMhZYwWtXrGu8c3SGWh7u2L6L5Gkt6j1462C2UUvqz81Db67dReRzaaTYUgQnprzWi6BboLoQdhYjF5WPc",
  "key8": "5orNEABnBEehRCKK7QkYmPkxNXNXbdH3vWuTRty3i67aJirGfry4safqEQxAy1RLEVJ2qhymrmF9gFSEbjxVmLwD",
  "key9": "3qqfaWwvRWZu9KBaZjc2QuCjSYjNkpGGXtip3GomtWZiRjKpvfWAfanx77uDGwBTgYswxfKB5g1VYKCxz3m1NsHE",
  "key10": "3jqMEixu4mJ2QDrUZjkycr8N9ts2NuH8fZRmwJDmaS2MeHLwAZykHiw7YfrrBtAM9ZyLu214a1ZaghXBzTHSGb1",
  "key11": "57xvxG4Tq1Pi7Kn1mVx72Lt3ECm7WFTMg9s9h2bJjTfT9vmEQiMMUdgVN1CZRq458orp6kTVSyrDQpKbafkJyWhw",
  "key12": "29wV2TyvjDrGEUrqe3WAiZjkKdPT7k6VFzQx2ZCuCMjK8F3XBLVLWHtCu7WaBcfTtBQAjMjayCUAij2A93Rt6aaf",
  "key13": "fMtBA6J7mggp3Y8786N4yHC8ivfmkDHPDToHPqpGRhJLtDmfPgcKtRX1MbervcQvJZn4GwS8tQcT9tDYm1M4FAF",
  "key14": "2P5dZg8eTi76NEPayKAwjtpH4bWT36hsyuW8HG98U6q1PU5HYFieziHdEnGw5HvtsBVwrrqyYtgayWB6TghqM5fx",
  "key15": "4vAcC16pw5R1JbqGYCQsjPyNE2BSNEzLpg9oNfSEvowM5byYdjHBNcxABmEY5h243gtFKHfGJgRc82ZU8CRmKYtz",
  "key16": "2hE7mj6ZkRqsoufoAcsga4e9TCVSZDGD8aypEf29ARxzVDWRg96AQfibKm2vuno6NSLPhHL8K9jrbeWASorhVexx",
  "key17": "dJEXVEws2b3N8y5zGitzAhJHUCDu3DgCF3BvHpVG4XEz85AimsYTVfiGW1J2YxQYaTUMxRDcrhV22b8g4MrQp94",
  "key18": "4X7Z92yDZz4TGurdbeFBJZDGKJjXUvsAScfvuRCq5PSLy9Vmp9X1tK6RW5R8RZcqw6NufsCVHXC7ZHa9YDKYU6EF",
  "key19": "3KSCUHVRsmkmRiVk29ATESMJefVeeQZaiakrJPP2BeKANmGMAC4UVkH3TmT4kJzmNBxCTSVyFJFAHHQPbCRZbtRi",
  "key20": "3uni3PtfKM72sxGdFKeqjUsq5KfiCoANz5myu47RBsaWoqLD5asGqSxcmepevowiW7GWxBrNi5CyYJmMWi8YvXCh",
  "key21": "4Tu1aHnvGCQwd6fufvRKJ9NvikFouLzoLg6uJCz5qGSSxbjqtfF4SeveDYmNY46bjci8JSP4yxkX7Fz8Qouocu8F",
  "key22": "2as8D3mcuJpTQE1bF7UfcMHjaj3TMdx4FuiXBAZbZimnoQSCWiscqqzojKpF5rdWVcNyXcpgVqaFf4GPbmMzuuY5",
  "key23": "5tjjY1qbnTnAziixqzc84yzwWB8qaYMcLiittdjbbUWtPHp2ub7wcPSTKBSgUeTrBVtqsHcryQ4x6r7QsYFySbLp",
  "key24": "2UzVVPSSBNyLJvzTqTs1MbQGPQAcNBtvUj3DpYAW67UA774bBiGkdLuE1K37WbZUieEjYspS1kiXjCWUDfHPkrEE",
  "key25": "54AVf3v3rASLqvsPaBJxDVL6HCSheQv8b6WU4WMDPm14ubE9cuQxWcJ7kgsGdqnqBAAqxxdnnNW1a5tVqtPE2Bjc"
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
