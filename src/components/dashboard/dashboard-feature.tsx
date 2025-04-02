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
    "45V5aYLGuw8hmAUHR8WC64VQiixv1E3tJJJwixWCzu9B2snDiZ7qnmSE1wdedd2FDRk7Faph8vXnWQhgehHAaTQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hRYNj6p5yDjA6FMTB33KLp8hy65yEjKmyo77mheXX2pXQuuYMPwi8YXbABKBELLxFMSuL5r2aeQvHbzSdAfRxfA",
  "key1": "QmfNrZi4uNWzwZE4UnWLfcY2Vjc1AvVsL17Lj8oJsmgVneH4urdZXRhqVunzXZuwfhbPppCse11WRwEiZ8UKuN1",
  "key2": "4AKCiV1CjhVxdpASfAk6g7mAViQHgAGXbinmNbVTEQqkYbdw8BtaC7DKfSGowhZuY3rTbM2dVchgLrjgqyitZ9yo",
  "key3": "5iQLtGyjz1M7ezSEwuWhSU9RieX9Gghpzo1AC7x4UqPJcPehPQPXt9yEjEWbn9MbQfDgNKWaR2Zin4k5oM23CbNe",
  "key4": "5fEDAN3as1tPJSW2zQKeLNLyKzaENdxrZckZbP4qY6cPP5GiBA5pxxMGGvBM7t4axRxAS7cUZabsTWm1xLGig3vV",
  "key5": "2rZjybdSX2QYj5eN6Dazj7pdyFMBEJy215kTHbxoLVZAER3fCQhZoWaYLxnTUdkj15pv3Ckx8w6C2yndHJ8Hsi3L",
  "key6": "4FgPmLY5zqUiQJ59jjuVyonuPEN2qJr6c6Hn8oiwnSjBtj9rDb9dANPkhDkka6vgaDzHweo8e2Y2bKrhJW46aE3x",
  "key7": "272tCkRHLhmgR1vwLzVpsBD1k8PTPvR5fuaRrTPqogyHMU5kuru3GGpVKyYwpHucaFSRUcotcq44ndcmHxNMxveY",
  "key8": "4WUfswz1SPXsLU3hDUAUnQ1oW3GDxS5ijQF3iQpTvbtfnEKSkKSpnEFvdae4dVmGNFFvrB2UrzcqHCq36jDCXvZu",
  "key9": "3RVxHibKP8wnvTTSUxFM9ff8zGrd4KA9txCJ5Vwu69agvqJk55TyourHRgPJfCAvRhQeKjSNrr7AMVZori5Z3FJR",
  "key10": "3sH9HaDLd3wEwY13K1jBL8MrGhutHGcHUyBDJoajQxxApiNaQpmMBeU2twvtp6eTc3FHi2vtA2yRSh4oBWau5YVh",
  "key11": "FcWRqVGAwLkL1v7tt3tVR9SRPCJ3r46JN3nrJyMX9qzi6uE3sx18gWEBzZq9T7gNqF4E82snsauUDV7T9B3stHZ",
  "key12": "TXN1XckhQQP2wm5G7HwAyzA9zaq8NHQ88wmNaon5L3LmAXiQzNGWihpvbSnLvCEQaGMNgDZKg45nhBSHSrukNNf",
  "key13": "14dJS7rceMjRAUbbRcp2uTaHsiNSNEDkszueFHBk28HeYhWY5JhZaB1pFHjAK3honkiq4yzfBTSyacc8RivH34U",
  "key14": "2vDkjQmKPB6bTABKSUMJvFwTm7Gp4bx53hwhiM3aMWNzpvfPdknnHBunRcXcniSRH1kYuufuwjEfm8XWVKkSarAz",
  "key15": "3sCgK7vJDbe221u5sZVnDJ3vWZMas9bgNpVoRNbtXiZut9K5cJS186YnTosWbnjNVFXRXiUUEmXHt9BLPSWar4jQ",
  "key16": "2sne15XvozSoRZQw2FfUZDP91LS4A1Cn15QDVY7KBgwED6DYpg3kNWGM7LtJ6jTomtuntJ1MEWpL18rU4L5gmnd2",
  "key17": "43UxUsRr5shf5h26dDP1goSB1xNqductDYVQr9Vck2N69BdKqr4rzwbv2AB7FNBuhy2mUo8GS26wQCBCPyoyEHAm",
  "key18": "5z8mo3eDCXnSYfB37uVVpyDnUiLUu5V67zB4337tZhc7hJShCxSu7bsounD1ZRCAqCH61GgYThiW92UeGKYvZade",
  "key19": "YzwPNk8tyVPgKz52hq3KW4Wzjkq3ZVD2nUCsbc8KwtF2cURvMjGdLWVFjyXRP9JXeBBoHds8V6gcRAdBzS3w3cZ",
  "key20": "5z8SkQVFAvN7NcZepzwsPJsvMQdsnp6Vvv2ukmQ5N3kX1XyY9KDbRt3kKyPJg1E4qRWqAEVqdwX6FFbxq9SckDXQ",
  "key21": "C57HuY8m2v5vXZ77BWzmnxmQKHY9aW8NByNyPGQ47ZxKu9wMXM1VZXMHhMMtkbUaodRN8dTitMWZ9uhqkBzFarR",
  "key22": "3zbuQpH4dsJu6Lb8LJw9Gd6qyCuDSXocQWpuYkqSEL6qAimJcDuS1Hc4ywDESWoaRW91spLWZPxSH6YMPP2NhF6i",
  "key23": "5AABG7gLKxKT1kXu9JVEZrjrRw5QrpN4WnGP2kQCNJdk1KZAktqbS3dn1N2Ge2hWqNuKpLwPePgZbpATFMN4X5RQ",
  "key24": "pvmqPKoz61QdB8CXf8bUhJc79oKw1bmJbmLHsZcHqSrdvcNMMk3XHmx4WR5z9tTnmytY61P6QFJx27YzwA5V257",
  "key25": "5n8gCJzyB2Zar9WewuijERwE21pJ4VHEWYZ1aFKQj9pALPCw8TMrSRk4Gyg4NVRLEAKEZM2w1J8XDbxZuRz8qb3i",
  "key26": "pTrE7K8SkEhZmEb5gLw1JWBCNyv81ahEWDXso9MQjSpZrf5axvRNoGn4koKa6rLUMHo2ePqZ6Qctm4vF5pus3EJ",
  "key27": "4Hw9hBmcQ42a8HTrzytZbs9oFwaTcpo6gnPX9xuxCoS4FLghYBxaNz6YmbbGhCHM3WDUHhx1izYmpYL8nX8jdrWL",
  "key28": "2hGh9k4JmFwKQK7bGFjHuSfUNYngwa4RaB4da2zLoTE2LKmzNqwmzoupwNYpcMiLsyjWWWjUouUMZyC995Cv9RdJ",
  "key29": "4Cunrr5Fx58MwCmUWT5MoD27Nfetem85xNTpyn5o6stVtETw4HeTY1HB2ZHbhhiFocC39pbC4BHQQ1M1FYL5Rz97",
  "key30": "53DkbhADbydz4KchF8sY7rvmvPpuNG3BCGkfpzqveXHy5bzjCmiB7H3CxMDNK9jGWABr4uGgK5uCmD2azYobRszB",
  "key31": "2YnfCEG7HMgTEajVHg2h3SYussBp4eN3dgTdqzCvuVKdd6DJZQq9FF9vqxXGhXba1ZsmGDmxkLo79pgkZ6HNxdVA",
  "key32": "47mitJPsSbzQirYMPUvN5CvB4MKPsTa9GcScye7tSZJvDJLoMzvJrrCJprVLwK4iGQjogy7BTakWTNH7drb4JHYe",
  "key33": "42di9fFqoPUs5oxAMD6DwZd84PhwgvY5PYbAoEk7RE5cTDMmyFE17tzGBwC6JUqX4EnBRMfPhSsjw3piUX4uzd86"
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
