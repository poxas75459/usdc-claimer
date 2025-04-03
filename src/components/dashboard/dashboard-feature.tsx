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
    "2LF3Eg5nXze9jCe5KK9qHWXaELT71y2u4bs66Q25KT6vtawAs4sPyexqQ7bnauEZWdj134ft6bnYXNnq6oLffk6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUHB9iCaUB7pnMkKSsQwxmJcvo1KfBgC8UxSdaJYDu595wDfUHHxDX2pE9vqjVXzHi9cypyJhYkS35q6WPGKhLm",
  "key1": "62EZhwzUPn2k8hEqkqEtMYu7eFyJrSHRgT4ZTJxEMVvjTWKwmqRPbest6QA517nsf9UQnphw34e6koi8dhGf9yXe",
  "key2": "5AAhLME4kxb3GVciZuDvuABJZrC7Z8MrTZ9H9miWMZ2RR7uq8ZZUwNFgXHd6a4mHoMSre1EWaWmnxWHMoEZnsocV",
  "key3": "cFH22DmBLZ92H7Dj5awppDzYM15bShGJJuG995sdoZKSVrUs2ct4GB2dbDcvKb4zqVVngtor8L2QtbSccHyt8G4",
  "key4": "jJEQXhML5S7DGBFmi4NuxSANtHe66yPhMM5oH2Rq3iBqpii6gPMCgiGQJe8m9YkhDhYqgunnJYgGyv6UXZ5qwex",
  "key5": "4n1uA2QgYVhXrCbTuPvxfBxYvgEffyeeuMCoZJoZTSAqpRmtssfFd3z9t2pmD6LiMgv6ds9xZiL8y5pcWoxxaeT6",
  "key6": "5GZKkLrJu8qjEUYJ2zBuK4MzvVEQUsrYuCLow39F7uHpbPjPkmfoxHkM7oddoemWCkyd5LuiCTBmKc8E1PELXpHj",
  "key7": "3hDHDLEk7ZzPpU81GyEicr7dCcSADQELP4yFQv3dvYY4nrYxHYR4o7oL8xHFyueg6cyhEZV1tEciXzm4fAYpf1xQ",
  "key8": "23o8fYj3wG6Yj2vC1q9THwFdczNsoHzmpH4DYcmrbvgwjAQpMuRWMb7ivMHhp3Yz9yKNHm95vGmUsGrnwcx4f76i",
  "key9": "4nuVtVGQb1MyvoPwoLUg9abrhCQJ88DRVqVMTp3rnSLwd9XfYKChzk39TRHTRQuMvqF4tijqQs4PRM94vEdVC9DP",
  "key10": "3Mk9S9TLPnD3JccDyLQujhNRCnZiJmbdBsWJXPCVZ313KGrh3WTLmkxRJ6Jdf8CRnc3HPdYYXoXpfBhMMvH2JyM6",
  "key11": "4WJnekNDqkebkdsxEggEVrhhogGk3WswySVyxEFQbUuUxQPHFdMLX6PZGfT6PMEbZBwyfsc811piSxxRs9jqFqHp",
  "key12": "4DMTTPkH6syz4ghjdxQ6L21fMEWuWPosViPM5jUHduue5Cg6t8RXVsNkpdhVdeYUYvX46LGodQ4wVvLhfpanWAqy",
  "key13": "4FFtYPR53xvz5RwMBfbkWy1kgvoZuAT5Am8ZpBeUGk1BzA31PAAst9XfVaDNj7pSi7FW4apStzJHZjsJpSvQDfFF",
  "key14": "2wdDzZVcku97Ti1ZbomPTW9uaGwJxrnJ2vHRVCra2d6zNKPyF4CRgBBtLNJHA9aZMb3jrzueWp3BjnNqHf3fd1Jm",
  "key15": "51pqwv3JCrHN1EJPMaCmMjybGbEhKrWwAWRx5H42tEWY5ABFgtf2Y6TprzX1jeKPWaa35n8jbG3FciM7CaijFYgA",
  "key16": "UFPmgKx2c9TgfjFtMLEBWV4P4LKZt6tL6TXZkbHck7GKp4GNGkiwh3sj3iMLPTTvw6uXrTmZxPQ6goTZRmqdNXV",
  "key17": "yTwiGsnPSEZq6jPRbC6QxRySdbV68sDV5rdRbgPDX6yDvQHVSyP6DrvuyBnUo9nTvTkSKcD164h9b1mdi9Ag9td",
  "key18": "2H9BFTXSvbEpwY7kMNJ8o9QrZNrmyasATpMiEW1WnvRZ6jwGxiq55TCoFWXRerRg4byQAtXUtmXNuF71LceQcNyK",
  "key19": "4ervagyZvGmUMAFHEQXZeauatDBoHZmtyBRoumyBLUVNJjtgeQRSDrx8VCVBxdBHcywToYaQnZ6yTUiESLbZhZV3",
  "key20": "3dn3xiKofMm7RX7PVpKsH9B9mNoM2ZaXmH3zBbNbH9pPTGfqKdtUeScwWMz8X8Tio3Gqvx2oKBoXQxWXRnoNR7n",
  "key21": "7L9c3JiuDdZgtpuUwUC6emZySZF6aKocdcKmK9yAusmHdDJmhkTU6ZqkmCTAXZXs3q4MZXuFEkgne2R8prMtaRw",
  "key22": "2EUfVhUaWySQTKMDfqopV3BPQ5w7gWv1nAQeANm2o941W1pceQYF8Gc7RkgJV7ZYGGPkCSV5a8pXXe5dsm9kd45f",
  "key23": "cSmvcYvcySRqcY7nPQGhqQkCjZAyYS3egFYAeiDHDezhPZAA7Qm7HVF6TjaHfoCQdG7EgHh91UcMuRCCBWk99c6",
  "key24": "h9q3b8KJNnkspWbBxqkHt5y4v6kHd4qRxpkcVJQSwgrRC8CH4p4iGXQ7ZVhLH6AvNnLKwDZoRHnVoxyZdVk6LXL",
  "key25": "4rKhcYzU2itMgTKQvCExeaadEHyp5dYo3Xrnnrms89LNoR7b9XfbTPXNiQFHgsXeZWwPVAitqz6Fi6CLASSjzjSe",
  "key26": "4gnuQkecsGJBky5hCh7TAEqWfkUJWmNeRGFQ3osotJqdVXKVNRBcoQDdKe4dZ78tNdPAngftheFXN4XrkHaEVwHG",
  "key27": "2KCtUrpGYruX5PV8Jp5G7d382EEyW9oyKpXrNqS3qJ79tGRkkiN3DRECbmnLAVW9NiHveosMtvpLm6vwas9YjPAG"
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
