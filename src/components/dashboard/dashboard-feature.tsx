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
    "oYiDAkWgBs2ZoWY3oikLJo2SkZdBmMR8MQ2fFBP6jvGV83kjR6fVuBhyvsTxhuzZQ1RvEZTTKRcBnZjoYpcY6Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243XV4dhAm3xk1QiSNkoSaQa3YnnvbYAbmiiFABBjwCQ3jSZQdfzW5KRVird7qsNufr7XPPkgHMS1xrWp5opeC69",
  "key1": "5q9dnoX13z3SptJYMyHdncrUsTxpP6n2ZR2YfQRzXySZFFVWYoHFG8J2XTzwvndMVULrnM2ZcBBSGCVYXRn4PaBU",
  "key2": "24sQfjZ9QU6Yu4aZBQyRuRnRYXByKTdxW6yUaBYYSRv9rvsV74BveSCRtME7JszLeAMxmwJ8FXV2BkEDahCphhAH",
  "key3": "3wDJgtg9KYEjrCGwxFG8Kqrqm9VKRM7YnuF2sMYLXgweeGBFasjruJrRyPu9Z44xVy7zrXDLVm7q4KXtpR4BZ6ts",
  "key4": "2xNUb8WcHmyCnzgzKr29tfPrjtdYtoXg4AweTPrMvvCnu6sjyqaMq1iJFXgWWtH58ukaX996zZ5fzdwQuQTAYTuv",
  "key5": "3QsHWE3rNS51MmrGuYK7KZFdfekf7n5BYKJRGgybsVSfm8WCMyJkpK8bJeB1nfDDskkQiEzJyK7BWyfSK2Zvjqc8",
  "key6": "63nBw5zfastqh9aSTwynLFXZ4jkhgxso5ANWsW14LGCv3wLBG1NZ3xPm8C4AuN6vJ2rHQaYM9jcAZVzWNyJFxbHZ",
  "key7": "4EfWQYi1srZwo5n83gphL4KFzyZQE3z5D5i3jcfFzdDjvcEScm6Y2Lds4aSM4pcANKubRmm5eQwKjiNbv7r4WxEc",
  "key8": "3JHvDrSDHpYQ2wKo8htrv2hsEFvdH4VbRJRX86CEJ58VgH5VdWz9yd67ZMSh7RfjxPbgvmXN61jTpC4JKWXPWPBy",
  "key9": "4W7Y4xmQfZyc58dym7AFBDRGNcUruqEvmtjT7G6XXCCSaXJeFKGYUvNCNLtcvhJ7sAbwNS5GB3jQYe6UgByvd6DB",
  "key10": "4Jjwo1E3YaeLXq8avfnPxuSa4RwMVsP8YXSvpFjvJRtTo7wyRp56RYdvYUstYKiBtboxnGuNV5CZCnbVig1rJ3sq",
  "key11": "4gUKu5pk7fq1URhJ1T5F8tzbN4dW7pQi8XQgb9taGsV7sPgTBUxZeoZgt644KyLtuXESkmfoL7Gtkm3nDUJgWWEy",
  "key12": "2F8bQQoiZmAsbYmrgYktyVvHqvYRycEwGuuLf8LQZ5h9NyQRcrzPWG4UdqcVvaHwwNnTMjUH9EdBheSEq4VAM6oj",
  "key13": "4T91koYozu69zYiqzWF2yJyfTUSV48aoJERYVMSwvZPeZasA92mRgmHkkqeKtU6fz3322wDiM9ZgTmS8JFFFhbz7",
  "key14": "5UVck7iudHRypgNV6tv2h2rVyJY26ZwsZcjanLgTbJK2LV4jZ8Dg6RoW3vqHhPVvE5A1eoH7o1uto2U6zG49WJ2p",
  "key15": "2bNUxoA6dxQpKbYTW5jKLV9GbFxY4KmJ3HgDXNxfGZTRkN8mhTyaQ2S7pipEztH9FFtV5VpYj7ogBjaVMzm7QRyR",
  "key16": "42GvGKUMZQo1iabyP6Jn1vFT8M2JrNjQLHTyWWdbY2Ns1xabcQEzr9s3VkWFRxkm2BgVkeeRhD4s9QfyjoqjkRgM",
  "key17": "pdzjCVMjM3ixKAWX7jH7S724NRGhEmkVqjGmRBUkZtBHcRMyTqsVCifKmMibwDTtuCa8cHUG1HBqixgUW467n2r",
  "key18": "5tAnNVH8NbxiCJsRTd2PqKELeq6DnPBhLd585yoeNxvLLuG2ZeKTtFVjrau9UeGXMoijLxTwsCoWe2an6fRagCNg",
  "key19": "2XC2RCe1AgcCU9BVCdfBdaidGAQQoZZ36awSSsqYDsQKjjpB3j7oKkRfA8ugZQAU7TqmfLfYGf8G8HK5RwEDeV6d",
  "key20": "2BZnyQU8eVz7Hy76mC4N9UHw3TR9bgu8rV6uF14cu7fjv3WGE5sBh5PVMSEa78tSLeFdLmonb8yCCU7XGYpTL5ct",
  "key21": "4HKMCQhfHca9UCSypysSi9wyWdRzFdz9sYSLeg8U6bKMkkX6YLyVNgwTHdao9ssMGB3gBNxM9UdyrA6VUfNPUTCd",
  "key22": "5vnwpGrCwDhiGu5zDHSdwSgW2AHAJswzWWnozzFSkqgfoJmLP31PtoNvroqfFxB17AzjT6yifLdanQNV4Dsaz1SN",
  "key23": "5t6h5NggngA3grsPQ6kTwPdU6w2GazggnhBwY3CCgVVJEBZXbwwjoMb3BHUdsDxZZsEKpJXbBvo6ZqBQdPUpV6VP",
  "key24": "3wgNxKM3uH9Nj6q9mgBVM7aTvNwypaNyUsnRr2p5DGifCdEPPD6pKTUAMYxzy7n1ScgCpJdezh3BMLAGQxXMRjFd",
  "key25": "2LXDfcBkDJx4Pi9K7RZgiuatvARdymc9xRTzUfGU89whc1zV7VBo7rzmBP5tZrBDfjgpFcXSDZaheA2zWy1hTULt",
  "key26": "2ff1chd7EKpMGD3jUCckHqYMdyYF2191jgtnMKjmg4gTwRqTUzPtA15zqvKn6kLUn146eSPfV83KFrdgtBRuyfeR",
  "key27": "4C8pYGW5c7fWScbXu8qvfHEr9buZdVYvjog5ktZxyifwJ63c8dDmUGPLrBwjBg96H91TJmmnbKxE8WEsh74FCiiC",
  "key28": "2NsGKQqeS29DNgj1x7SGDEozJaUJmrAScjM2gYmaDyXDhqthevNgD79M3waNtgS6RnCHkqSw2aawnCnzdJXgQT6i",
  "key29": "5tysCwbM39NBEofC9tojzE4wLTZjkB5MkmVvFquRuQCske4pnYH1QJQ8h7upp99HHcqZej42QupT6iRCmW1M1zEq",
  "key30": "YduZ6ULPAYPWjnzQinGugehD1kmkTvFRMfN6JcAXmQo7nUdjQ8Y8z91ig5ridexEH8ewShc6h5uZSsrUW7AdUcV",
  "key31": "54t2hadGuz2SduUCNXyx6jqTfumaJmjLWtVR8kuPmkL3gxgArxmLppxb4T28QBFR5iibTPMNoqfYFa4YVbE4HuoL",
  "key32": "g4Zwb2gASPsPFmttvzd7SCdtCrq8KdQoyw2VKK5BaHfAdFjXfVNXpSXoK2NfyJZWFf4WHabNLVq1NCCNPRuhgzx",
  "key33": "DvnCTWrbDEgsCU45pcJfvFVGYhCWo9fBtCavwfHkJi1hRU8GnrFxH3hmZjnHTV2Gkd1F9pjpqw95tELAopCWnVq",
  "key34": "37PvF5FNR9dEhtaoCeVkNbAWA3dhBsMgyQYLk7JuvddXLZb45zAdho7CynVdLwFDA9zTUmbS4CKU1Gr2JcAMkj1W",
  "key35": "4eXC76KNb97GyXwB8GT7z552tPP69HTKHvn75FJsszZsfnpYxKNKR492Bh7MXHcPAcpxnaNCLtKPT5EQt3rLjZLa"
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
