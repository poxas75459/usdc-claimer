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
    "3x9ERagzijEi5DiMUfe6Jyma8FZ3vBfeaqG85WjVLaZxJBiwkQyF1nk34MPvcjmfXSfhYPWw59EuS7HSVvz2EhJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Nfq5REfeSCU6ELR7YKaewDu3J5UAx8qRfJF5HnwNjPgaqwud4asy8LLR72qHdToXYtJ1zpbbEQrzb5FwxLcGcB",
  "key1": "51LMrXaRuATfdA21UtX2FhkVNhiRb2vqPJmw2QpsxSSzKuwWnTccnPHkq9pDCuZN2Yj2gvz1NJR1hRn6XkRJaeJW",
  "key2": "5GyX4XuUzU3dZeU7eoFictZ3A4fWCdtAPxyV7Xfxr1wzBXJPpu8yZsngVW3Av1UXtV3JxdkgTotGNfccw9N9KA82",
  "key3": "3BtdLM7ttzKvsRSgsPFkqD1n2x3zpHQYECNc1vkXfMt43248suYrAik589ZSqfSZ1dzs2SEg4mLUkVfrezxirDQ8",
  "key4": "5tEyQMpbMszK1UVZAa5byNPu8jSygNVD9uvBSQzXLCr9oDhZpRHtVGDhfJWNUm8gfnLwwA2Ge67rpxcXNimTorio",
  "key5": "2JjfZ6K8Z4tT8hsYJRnB7jZkHDd2XvCtjXcDHWRtaQu5nxD1hPqwmppWYx8oN9NEKqMxeF2dexuU2hDkjGXMATqQ",
  "key6": "34ozuCPok8SnDGQh579YSLJbV5U2LuvdrtwZH2BwKcPc1d4YwAjoH2M6iZMELMJhRMYZ1mGmJ3PWHSguNCZrZfTb",
  "key7": "sBiAe8P6v8L2wKEhQQpG5hoC5QTSdkcJDTGj2TDDEBV3Acow36XsFw4hnfN2GCV1z9ua3w8mnNZ9ULuSc87G1QZ",
  "key8": "2iAjswE4RUx6eVcznXM8vad7zjU91jcuiUKLvpdA9uSwmGqtW7jjUL8sVAeJHU5fqWKj9Ff68mnDE1vDipC6ABJW",
  "key9": "3h4zkeXUMmRMtGbJDCD97mRcooQfiauQSBBipwFxWwC1zYzXLZNDpRStR2ZYQjSZF6FwEW1Lp2sZiVtjCpLs1orU",
  "key10": "3X1x7FyTDzrAfhEW4DBUazZ8x6iknv3abRLY1m7wWrMBBJJQP85EEkyXnKyU5g9T1KwCuATESgx3VLk95uvA4FCy",
  "key11": "5QidDCuuBKUceUdZtpDGwWakrx4BMiRxX5e6Nd5YS21p54qUYjWQhz63GTRsYH65MQnXL9pM3no9NBSQ1XgbuCqQ",
  "key12": "4Jz46K3wQnXNtjf82E1sqjA659dRadBKYcwwo31Jdsi5M3hom67jg6ja6K3fXzKjpACJu28yJaSmR6jp6KzJsYs7",
  "key13": "9ryVygUJjYUAq7LqPrmU9Y5oeN2VcGiEqV3kurp4zYpEUg97VsAG7euyAtKafi29CKu6C8BNaRC2QxinXe7zQqa",
  "key14": "EDAChdYcrWF87WpJL28PSY65wZb8abY5FSXzDeb4nNHbdZW8r6HMAarcq93WQvTvko5dWTeKjZnM26753dZMdM7",
  "key15": "2Zgc8bpWsfgErRJ1SbuTzQUJh5zzhKzr8prnW4F5VCgQCUMUL6VviqRnCGzc4D4KvcjnQGXU2hFWgwMnQU2DqjCb",
  "key16": "5MieP9YagbNZ1GzdXSzVGtXqjx5rZXH1tQgvGJtwE35nhdX6Ke2EWkQe2RxYrbhZB9hUUv4v6jiTEML761hVWzHX",
  "key17": "4qkqd8n9BQoz6ZbPPaBjCPjtt6kCaEkKwdT11onWzDjnT9TMgmoMDvJ4gXoGBen2UVVif2GhHFqMbMSHMYUYQmyQ",
  "key18": "4ZroqFjC5x4zSWs4BAaiyHm3tXFiHcru9JbcsLNgmEHwRjkRGKWcMBLV4g56Dbe6iyC5oegBHX7D4ACxxz6PBmeN",
  "key19": "4PJ3RtXWTAyYBYNvvspWHTdPFaSP5HMb1iXpxN4EU33Z4L8HjtpyBCiFsgC1S1ubEH6yZqsKA7xHqTSoMpSfb8hF",
  "key20": "44vMPi9Zo7rqr5bVwWN3kvtrCLTDRep9qXGG14RDptgVqHnbiM3rTNib4jGHPD6Rz4gm8nQTvsQGEe1snk5EuyUR",
  "key21": "2id7qbaFJ4jifu5Ff7tXEZnwFkANLjX8tmvi8siu4kv25M2VQGgAribtjW4YzhjH72vr7cPxik3FrGYvHiTqYqZy",
  "key22": "3gjGVG8p9eZCubo8FrQjJ9XXSzmYj1K7iDhLDgBeTdmK2tDxg3zsMbAnxJ68HYJj7iJpiZU53Ew9iXSHXeN2bDAX",
  "key23": "4XojKrnwMi94SnWrsqunbT333irbMD7rYvZHaAfFey6XFumSGnt4XaAkPXnPBeswH62fNxnc9i39CqKEhdeEsxdZ",
  "key24": "2sbp4UjQYP4XUeG5MZioJyHd7VLGLz3QHdevbTk8af5pSUJg6cT6ngs2S5waZM8xrcCqU5LSJKQn5RhKyb3UK67o",
  "key25": "KjV6y4asdvRqvc6bwFF8hZbh5sWPNi8WrFJfwohtCQTWm7fHSUXsYpupx1XdGmCH5x8EvCsiPGhJtKFesbXk9G3",
  "key26": "58YQp7sGQk9JzcmWwLCW24MJ6SdZhY5cwSDCCnLH1qUHGmqW1ySiM2GeK3xhG19BnEmxu9RKs83CPfCKpW44MVNd",
  "key27": "5gi8EDw1yRxRcFePGYjFU4fEHvdTWy4X5q35tgdHuMkQvKAZ6Q1twXDZb4VyXSLoTgCkKsvMoYWSsJU4RCu4foVn"
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
