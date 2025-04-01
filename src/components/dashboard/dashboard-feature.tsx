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
    "3inaYHi9d6xxZCGADbrEUphi3Vn4hVrW77bDYzbAHuDUXw1b562MR7BozHusFPt5cDjtXaZSCCJs3zMqU96vGUVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKfa4jvV6ynmFGeSf9Bz1b8LDybFqqH4WNyo12itfqqaz2AjceTdg3FBKgD6Sj7ed2Xse4YpmWSju26f1KRE8zw",
  "key1": "4o5mXxmRQqoLQqxU2v3fyqRfzzF3k8EjBy1y7tsSzF7GXHiPRm1kbnCUffqB9r8FWuL6pZWVFyJky767RAz4xLf",
  "key2": "56cQU4i8gRdpdm7ieqzdUVEkQCZY8nx4f8YR8VkSkyuAyEggVaesm61Bg17JMaGrWWTocMfZVas6jz58gfjFFxjz",
  "key3": "5covg6d9JD9zNg68TuDvvxDEpNP5qeX4i3NALRFwje1JzNh1VyAy9oiUqfc7nkrByXkxUFKCaKrtAXNvEyFr5kMC",
  "key4": "7tcyHHEfkLNEo9WAq7KhNetCDaLMGs8CHhgt396xcjVypVsZeXkcqbGpyxypUa7AMmDLK9ymfZLSxnaQj1jAf6r",
  "key5": "4CvxyqWgkYC4mx9qZYXvYCfzwdo4naC7r7tNgiXLWWUkEzQJ75bnZEkeHs2jJ9WqVYG1syg6uMNwBD1M62EaJZ6e",
  "key6": "5MpKsassZjcVN8S6Zs7a6mcw1Ax9cpeRHjKPahdzKRxUgevPghDddcxpKWna8hDuhanFwg4QN5UfbZr4EjAXXZmh",
  "key7": "3RmkT8j1XMp2GbVoC8wWzjKWMKFYXmm3AXKHgGzYn4VEoV4nNAYgHGyVAMmeyZVZKTbXz2yoaScxzAJqQd5N8iqG",
  "key8": "3adZuZqr4AMdZwKUM1gkNjTyQFT9d6c67koJJquQuQoSebDvG2ysfYKCVnHwXUbVV4KuRSc5GbY4KBnYzC2F1hGA",
  "key9": "481QV9wnPdxaLBewpyCUcmgoF99W1f1SGXLxNxDhV3bT6xGoTibrXhrKndHfbvyhbqpCLBC5r69xf1vk8FaZGXLo",
  "key10": "3dpNSf8JwcQJY5ykYUTnZ9FVxXQKvJ9vpSXwgwJf9xzzpPgtwvms23q4mnTC8DHed9TjAqMfpTyGEyS7dHV8DQyD",
  "key11": "2EAJ31QZJRy4WYCjxEVfsW2731pYkivBwTMtKAtVJr1V1p4tWAhUovwfNmwbqKko23M3CyAA4GcWvCmWd3SaaeHU",
  "key12": "2zZtTr4YoiHZDqdJrfjDSLnCaMZfmfHpyUPMHFHDDiSbx1XgWAGLX4qo9qcDBpEQbAQyH5iCnnWUwuDKTEKvPLJ8",
  "key13": "66hXKcr2bMbkzJ5MLHLem33yxUVCyrPnwyqmi1hJ5szboyaKXpSFtQq8ZTrAmZZSdQf853UrNASa9PopQ6JD1jyi",
  "key14": "4BtjiKq12zy88j2wWrsdAeK5YSBw3TqFPpVfaC1esicDELN5zEJauCTk8y5g3mYKitaX7ZiAAmAZKdhMqb55VnZy",
  "key15": "4zZXeyQJaUjX1vszMBxEXmtWnX76sXEX3mHWesD49eVawDdrsq7sAnzmsj5nC2mZez6fQJJWUjD4wGKqcs9gwZer",
  "key16": "5U2QZYg8KEjVoMm5cbCkkxAUVPYH8qY1kykZZPMcpCjcDshnqYG7f7J9EbDBfRJKb7VFMuziGQUScYVr3sFU9LEj",
  "key17": "3o6D7baA13hLugEsXJUgv5y1FeFVrut99qLpHHvX8edzLVRXbAY3BT75szG8TgoCsejooc5W2EFRQmhZvxvwVv1S",
  "key18": "3UXb1wZ84SKDAEFpU717JpxXnEMqyjGVD9hHPdvLgeipXHjWhFss5rKaCAWWa7L1eMFXCqAoHR7jeVQnJDsPc4ov",
  "key19": "5tkGvnWnuc3iTz2gdJpneDiN47vBH3X4forPxoqRXyFq3VoAH9cRzhMZj1CuyphnVbfv2hKS83mrvuWwUffb8kAB",
  "key20": "5Y4jgshxNTgqhHJa7seYnLkFgVX7bQW5KewRBUezdjWrEEJXeoL1v1aCUQ1gXufyRMgpDQHtQNrHAWvqVkvLd1eD",
  "key21": "3hn52hvYVgfS1zkemESYGR9QoqgUMAmhE6taUkfhcbyTWaSX9VPe5Mjfdu3rA8vycdZJXL5EVSxioNVWsc4kK1e3",
  "key22": "2uz5YbCUDvc8zmmeL2w55cxN39Y5gCGce22g88DceAngkHLXRC5UrzfPfow4FAw1bTf8SBTssrQ6QENvUEAzLsqs",
  "key23": "4tsQY44QEwJfKzS1C4dKRfGyLL4JJZ2xhqPv5SoyRRjnVBcTao9Up2p4UxEv264EgzxAGYxpT8ctKEG7nd7ktgsU",
  "key24": "22nzmh42zDVAkL8naTdgvscS2qEtqW5xM3DZjWWozv7ueYYRJ9SpaUaXhXwweURKy8NLQcQLYy5NCrghNMXpBPRz"
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
