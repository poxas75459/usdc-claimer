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
    "576jKNjSwvepemK7fwAoe3fvK35doPh4UhjhziMbwudTbtqtH2EsDApidruoNHrexuhYvqCF4CWWwRykjPdiJJvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ha9Z8NGJKNYeAX7RzBwtkmc919rGDE7R6YdaXmghN5cyr359oC8GdsrZWKkeFAzqeFsm8523YepCL1aDd8ot2ga",
  "key1": "5FwXoP12u1eFPK4pn3WwPsSmJMAcDusVAxPa5dxjsbCPzvkCXJYvVyXyFW4pEpGVSPyW3RT7W7v6nFtnC62aa1Zt",
  "key2": "5SUAsEy4yNXxSab5oGxQ4v9vtcuQbk8tkJZbVkSJ4FLsf3vvNfvcAJiRV5qnEZb7zHGzweJzxM8XNiKu3nGrCzf",
  "key3": "2VPbMXL9Y8Nv6BDkMYs3AYmozSXL6dp74rbEKLpuXWnjXKjb3sZRNYZrAhHgzPRM7o6B5HQo2WYYtGsc2KHPSfEw",
  "key4": "4Qt1LuDMABfrNvdj4MYLPLGJBVnMtcajwU3xeJH69GNhqUL4vrzTNYHvtCLJg5WpfxoUmjsJSbCoMyH2HXqme2ge",
  "key5": "VEQmW9TyHmMJ6HHg61PbD17BjYxfijDk9XoScTpDL1nknJp14a3qjj4rVoxTE9LMLPpGY6xAKGaJ5RMN6U5s56L",
  "key6": "3Nk3PfQBiL4f3ReqQVn9xn13xYS1MPjJXqLvKtdt1BhBurodZbYG99sQ4Zd6gzLk8ps6uQF4sYrrENktoyVfb887",
  "key7": "3G8cw7SmZU5WyzZNU5cR3oavVr6duWng5DNxLvBH5xYzTnz6LmjTFUDzXYCDsjijueFwid33Mj6A3wyLbMyp1UsL",
  "key8": "3pLSWF2kkmaQ9RorX31UES4m3qDZtabBXjNzxctSDPPZH1ngpyCpeSzwEy3ri6GPzxXwBe4yho9r4iF6KRb8Awcv",
  "key9": "DfGNxkfRqNdbqD46Ny43gy7MKitEMbN2tbKBxEiXPFJyoJgoadxGLSp5d7sKu7SjLUzCaniyJTnbgKyW83ytVcZ",
  "key10": "2gBB8aggbKG7hC3P8PR2HMsMemgfnjqV43tTNMnZ9ysmNEQkZR8UPtx8ZsRCFG9By4LhBr1Yy8EiqNGDvMSrqYaN",
  "key11": "2NqEWYgcL834auA7ey8RwakTJ7nUELocPZhzoEoxoSjJf94dzAg9AStp2hCK3DWYFLcXSkDjmhjCPjcNfJKr8eAE",
  "key12": "5bTb8Ux5KUjoVxbCzuLFqWTPnh7LojwEh3ezaEX8ZgTAiC5ynzT8N6GUY5xVYB4ij1XUEKTWBTyq26Q6Mxs25cEa",
  "key13": "D48XZZz3YZRS7pmd4jfUDVnYoKRjod3Qt9MKoqs73Za4KrUjVPG9zpfWDk3kvoFwyzxejLyMt6MNqvJNw8B8s8o",
  "key14": "3A5GXmG19kh3RB4agHmViEFyZBhKrA4p5of8WaRDnq9cLuidi4fPq7yV5YKZECsd7SUA3pnBivzhUkf9c6nB6JHc",
  "key15": "5ddqC1wyn1ZjgfZW5bJVhiv7zPLCQURF9MmprzujxVEM5TpNuxAanZjkWL2PRpQAqvp8SexRiMJWRTduwZ9qz4L2",
  "key16": "4PfshNFVaKDXW4kptoassoaTTVk1k3mgUnujwsFqmqA8AthnLGTtnHF9Yj2D61GuiRZfnSrxCLhj6EzEJuaSJCqs",
  "key17": "3SxP5muMP57zWNWYrghhfbZnXxFGj5JKS753a1nUyxE2iGxawsufc8dSoaSLZMqDCV1gvWQM4oxttvU8BpDXGn4z",
  "key18": "UstsPSBZzXd4dWGV27mUE5Td4vJiEPaM9ECn9gS18Cw2CowqFaQEGiLbaKevuDUjM1eEJgKVh6pZU1RZDQwzYrX",
  "key19": "5VcdDdQPWwSjkL4TFx8XpFSmEUKML7xCp1YLpyZLgEKiyBBGyGAg93ykGuwcW2atTBeGmMDd52hqCpvqyv7JauCf",
  "key20": "3q8aDgwBVGvtKGEXkS3EaStn1J939R9K3VAWWxBrT2pJ45CGbesDm2KFe9xiXaxd5ercqtAuynUAmiJJjoT3g2UU",
  "key21": "5nqZRFyJwsAJpNTVfPd4gzkWSXH7j3ajLeApShepMLGSw2HXWN6RAsVoJ3E2QPKVifEy2ea6hb7uCssk8cnQbkAd",
  "key22": "4nTLVLxAuZfbHD7KGnoYcaByP5f9FEFDp9zwxCu6JFXLET9buPyYGSGJ8yDbJXrAEutNrUzH8Cd12dZUaHwVbngq",
  "key23": "47ivvzNp2a2JdGrMbXJDh4TGpuRNKEqiajj32uUBpU7BGL44ant8JBzj9x7A47spbWyxxf5SC7SnUYcwpWqcmtyM",
  "key24": "t582KkbdpwURyjDCGk4qtrCTA1JDCKJuLFPYPF8K6XXiQPSvL4V6UkgUAFBxbzvPuxprMNJygvYvsj6DeVhybQq",
  "key25": "3eTLhgY6Y1Ho6fAyqfSRoBdVJe8t9PXj3RLqxkrteChBPiSnJ5XBu3vuM9zD7m4QxbTCP54P3JJptFM3Dr4PNzzM"
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
