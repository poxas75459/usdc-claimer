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
    "5rijUsV2DVWbauat6DjQ6brpEUM2XXd3BqBS1BqKCXZxMYZB7jVTz1Q7LSW692hCSeKoAQ2YibVr6891QbyDqZLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yURiHZsAcGQrnbmUWk95WA97qDeGBFZF72g3Nz4EuLaB3Sh9qgpNkvo3FyjTQXSTxuPSPSF54j9X51hZMhft3tu",
  "key1": "3yN5ojB3J9Ud2Q71yJUF2UMK8s6JahDYQPHzrWQ4tuKkyx6FqoBqFd8CgHjk8k9aAv7X8kpDYuuQhJoz9RFk1pNe",
  "key2": "3rKtf5tmnCFvbWozThjaWzP6Q6fFBdyzCrf7EHyUXAi9RD19eHV4cf4zHQNVjHaBEKh2JfLkxN3Kpk5FH5zJrY6q",
  "key3": "5bhkL11FWcGW3KETHAB6ZgCjxRYmP29BnpxRTHZ4rFCAZMi3zo6RBhQKAAaeEUpRCR2VxwjbmoUjfTbgTFnugtE4",
  "key4": "2gCBZyGiKWbSbkGStRSWYGS5qVKY5mfFXo4AhAoyAomiRTxsw5szrkRZehkQHeWFNWECmgidxU6JSCwcKXuSLtu3",
  "key5": "3BSe99JGRCUBoQ9zQ7KEu15DL4R7oQmL3E6LkYbnLEJbEeQVizvHYqP1pcYYCTHLd1zrab8kz8p1xgwK6BGvsbaT",
  "key6": "4TKfxkYorzgcGrmcHnqnUUiw9YhAtqye4oRKyg3UBb7CivZCdScRworFn7ECM5tJSHzttfDKdW3z8uSWzrXBJ1ZS",
  "key7": "3Ji6SBSwTgihaswKrEFdbRz7iWk3Auv87yxhaBTwisPpPNYtBXPYCmqTX7QE3M2XiVhpBgpyPUzBWsiS4kV8G3oe",
  "key8": "3Exr7V4maVHzagQcFWZ6dM6cdtQdsegPxKug9v1qwdPgoifJmSNtnmJtPYhRLNuwdWvruzrDXFmv6ijCR3SKxFpQ",
  "key9": "5jEjHeV9ywtXdVgpsuPCVWVD42tND8drqKMA4skYXttZAhpRX6cvAGmdHj4PCrbcXNsPnnjUf1KvRB6j83EuSxtJ",
  "key10": "4nMA3oLn6monFfM5S7dbTLMqT9DR9STvojHGQ4fyxxeLidnSTga3LAnpaGTqWAizjjZ1f8cFf5faVAtaBGv59xeR",
  "key11": "4TbnDF4auaGz9iUhWT6cuWsibwwU6TWn3VgGnhzR9xDjFqtYc6S3L8H3i5iZtLKJtxgGJqv3gwssEbh52xtAhr9k",
  "key12": "VXHbz7aiyQrFzqerL8Udc5qPzrjznSjRf3NzjWsTY2QG6XVzt7gvTvATQYD8LwLiJSUepbwwTdE8vVDkzwPhPJv",
  "key13": "3ZtJPJU7C5KTmAe7d9sGAXEfavFgBcxHNd42wBWGqKfJqtyW95RKWJsyXDXvwcRGzNz1VJ5KuVYgUKhWcThgT9nT",
  "key14": "2pcj8qakcboJYMB8BeMFcYL46Y14UGu6kuKseVuW3owjkanZKGumAVpPef7n1AkfJ7oKwo1wpLHHPBxffBDe1Ptn",
  "key15": "WuL6LRvE9YgCuCN2QTN3mCtXtr6WL8UhCCy3Qtr7rFM8qJqTvKyiaQ6QUrZwpEqo2KSmQz5sGQLfCSHHYStT8Lh",
  "key16": "4ffNr3dqbc47qu299xt18C6eLSX5Qw98zLm5BGgMi8GAyPADfjLeTrHvqGtJeVJABnFtkySvH8KNQnFJTkzhb6ZV",
  "key17": "3DaGFxpRCDjKZC2qYFNEhV4vrvJdn1uH71id3WKCZJudRjEfiV37sp6xRgWSezz3z2jTSDphxFSBMenF7CLwMm49",
  "key18": "5krSxn3Dnz7WjpYiKzqCTujiBpH2y7VEsuLcrSzfRKvcfLRPCZ9trvW2Gjkv6NAfhLqZdGywN1tFftvUEfNjnx5Y",
  "key19": "3UTDjcuLDKhSRJSyrZEbUidFPLNSGnQ6KE1wpTpQmBQ1ntbyPHvTtDeW9Wwz72WmmKEnWFzoqn6GCZw61Rzhbt7d",
  "key20": "5oKS5CWiGvr5eK5mrhkLP52YQkZNJCBF4R7cHfjySCwLzJxoVg7un6ccHrB8UJWSKDwF1Xwkq5GyuvSAR4Dte2i4",
  "key21": "kKwTWSK46sNFkkXnCTM941KPcwTJo7ENkYWYcjCFz1isYymYUkkdoX8KmL8ytc1S9X8yKLFxGrd4vtmdr9iT42x",
  "key22": "5CA3CCGWX1sxZSiPe8CLHTP72d57RHEv2hbLUoHydkQX52BybMYNxqLkZBZaUSARKhcMMDqFJNLSmLiyqXDLcF8H",
  "key23": "2NaWczVMxkRj3iGSBwMZatgY3iAPMsnvHLpienbama9bZ7Gpv8rc5J1wVVqc1r2uGD9CtAiXi1f8XEnR9y7t8MCw",
  "key24": "wGsbjodTxzGRrBtH8jVZjzLHzmPF5psKGN4ATZL2CivB1c9ufhye2a7zGB1jVUYFHbSWa6oE3sofKB959Yg3nyQ",
  "key25": "5zoj7D1yH4zbeMCCFFRiUYyYn2CtQVdDi3begNiw77KYDzjVtVbm9fncoUZbVqgLousNFVrStyoEmCeGkbKqLfcu",
  "key26": "3tpqxh8Bx3SXfrsEMUyjq2LKnu3yeMZTDdyRqdVRyrtwaRm7xNUtRgJ8U63PdaQRfxX32Vin7xWPi919SWZBTDGV",
  "key27": "2NSECyAnVcLoJ2n7pUb2M4812xmdbRfizVbowAN16ZQmx2K3xoLPy8D2yd8qkk5z1CrvU4tJsm8iptaX9z1uuK3H",
  "key28": "5eCBszgphhSUUupjD4v9vWkCGcAQdNstXAuv1buVxdYJH6yxgu4ja8W5Nd2NdbQpsTFVfz7SHpQdSTUHxSBTV1TL",
  "key29": "d2LC7vqroZGQBMdW2XCKNU5W4NPaNXChGaqXbEzKM4UEr8w3p4dbwh8epoUGHE2eNc4j6TemdPMmJsMv1h7dSv3"
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
