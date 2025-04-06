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
    "3DAynfEFiXhd2QzSCnSdp8X3K4vb4MafUL3h3fXb7vSPGAzWULVtLBtXPz3B7TSbNuqs1mUuKfiZaBNNdLb634uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuYcmtLRh32RrfziNQjrQuchDRSgk3oETEk4Mocd3RUMGsCj8aiuj1dtxmndA3QF8bHa8iJvvMFeF6E8PxStR9U",
  "key1": "4HhmKbMU1cGACZkXK8FV6G8rYuUVezkEf13bKuqDnp6Jkkxim8d8JCZRCzUmzWEXiMFLJy4CE5FaFyxEFxuRjfdS",
  "key2": "331uEqMtgf6dyzY49aAacjo2r8HFG4TwFuCiYSFghu5jc1QBXPJhrGDUtaApSEkqxrxg7ZzEhZRXu4haw3s6VCa7",
  "key3": "3WTG7kmgTN1WEJ4uxZqZomnD5Bc4TBgo1C4QCZF1t571dB9Z3kfmc5az4wkptUNUFbpZJ9pDpzusMoUwuRLJqTJ",
  "key4": "e1rZ41NhWXuABuKcGSm8Q2od9FjNQ5nRK1G5mKvRqCb8sNfRXRv47Fgs8vTmBXL5PvKnSJV7cte8Hf4F25EZiMR",
  "key5": "Pr3gcnbmi7qQY6HSpVA7gzccnKygUCrWBDs4DgfJ8c2wbfAd1LH4rC3sR13vJpbXG22uJs2CxaJ45ZHzVqbymr8",
  "key6": "3fsVPHeZAM8Gspai9J38csaSAiycoWSHYYCyjLGyfEidDY69a32i8K5TyXvSduWk8Dqbskm4hBPXFDuUqsYq9X8t",
  "key7": "1m7adjccSaw3Zs4tZgoSPK5iTdEaeonn5V6S2fX37AGnXTDnQ38Zi5pLQnFgjNowoVGG9MsXtm7puseU66iQSHz",
  "key8": "5YX7Sexmf7qt2KtLafhj2B6gCvUWJvuXiRiWdrMZ6G75afAyjfSy2TiAh9xKSBqHgdB6yKYuvbUECjHsqVbVZ71C",
  "key9": "36Vrb6tdvdTGaLYtoHQB8p1VWLVN8YJv74vVEify6tu8ojoWccHYQ5xZK9QYrXDZZSeNvUGXCjuXrdtNVAbpCwXb",
  "key10": "4F6AKzdQjqp3fuqxBHQJK1oZrdDrJGHuaK1VNcdSnqQHp8sqBBDQYJhmp22Ucv4RBZv1e8HJpKdmuUCpS1ZrjnzG",
  "key11": "2341PETuLdWAd9KvU9KP5AVJzNSwgVd5vXeettw4pzVHpP9SP9WRtxqMqxTNxKoyHAWAW6giy82oyacGWXZeE6qm",
  "key12": "2WqSUDqMWg53GAXS984YJsyXjfm2Eu4RWcmAsEyJW2389PLf6tmuhEc5GJ8xX5sRz9WPbDZFm26pURL7bexRLee2",
  "key13": "5ubcqCoVx2CsA7ExTEagkTgxwJEpVfkMd8WQxVkeQ6YcAF3E1jXUUnss9TNiX94wFTJBNsVKajPdvBzAXiwDCaek",
  "key14": "3JQKVWRGsV9bWN4stckZCsmGWwsdBPinLaRHWTcM2Cu4Gtvk1ehjPud1zKZTso1D3UBrT5uoCnH8pAEPoAuW2Y2g",
  "key15": "5TzGkDsM94YaTWW5KCnTXgGoz9JnnJcNX6EFuEa44AJDGjSydLMis5duM5abE3Q2mQtR3uixvGwVK28x2AaYFJa9",
  "key16": "4uum6fLLGFy9QJhj9qWMrZGHmmMGMvk5wKsxxswcT2cUtLSoGWTYQLDngAK6WzdCHPCYqwc8PMhb1cjF35A1EGsV",
  "key17": "27Jnyi74gFN28LwNznnt347xPRgiiHMonNTViX6cHK48rAHMTj2aPA8JNa9SoUj6ABQ8W8cGnVvzWYHZPQaKhwWj",
  "key18": "B8pagpXsSCHpNxPk4pmNS7K74ZRoS8hbfa96nUEqhtgKjnKG5d66TqaH8omc6NCSEUkACL3XC45A2Tidcej3PMY",
  "key19": "5GYoP4Sz3NVVUJN2fKMu75PqWpVQVmb69YxbiDUmSv6NFipMBLWEMVXmXJUJTgcsKgZWyNCdSFKjc51EHFAMEaww",
  "key20": "3XVmBgEfxxT29mECDRK5d54cCgBMNUppCxZx8QkLqCV8cLDf1A2CrTk7iz1FnxysyGVE3zuCyW4gXs2T2fZ5B8dk",
  "key21": "29ZtN6bYXSs6VbhHA1VK1EdaQCTuvpsokTtjfT8KY2L8kUF5LcaUFLcg9MYP3wN5QgBbHbZHZi2mkKtPeHXDw5dj",
  "key22": "2TkcXfmxovD15S42u1SgKF4rhtg4s4uiMeviLpJWrbftR25NBkGcm8rorb4oy8UqRLvpyxyGy9nTmRrsgX1sPwof",
  "key23": "3tyBogvAg4TPAuk4ovy9dvMweuSYuCm3yfZfyABJcjRSRm5Pz2ZVBfPx94CUCE4NaHUK2fHr2MBpKxhFKCSP3Jb9",
  "key24": "5mo7ybhfGADeJbydocNyaMYkHjGq2XrZEZNTKXqCQbFYae87hSaz66cRia2b8YdS4nk38pXMHNy6bsAVLZaF4URp",
  "key25": "4DiB1496dWvXXidF3x6iAvgnCV4LUPYHVhVrQ5GhfPFpc8tb6F1wgZUaPfAj6QCiRZJAgv8zzet3cd9VhMkAWx9E",
  "key26": "4yZKMYknSUVfyiHUgs5AvLUtLMUxm7L9QF5MN6nVCH3pEE4EtKqDTPCjtzzqvW82os2DirDHFccJ1dQYc6GpXfR2",
  "key27": "3Ehg6B59VBRcrGF4uxXvZHuyNJpAo2eD1XHXvUfedy273C7p7sd2g6qe7Zn6zv6twGuJYiFWCpsf37juMfZbDLtJ"
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
