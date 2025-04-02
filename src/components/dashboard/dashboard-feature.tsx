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
    "2QUeTvhd22TXADNUsygfpRJeS8dzZnLXKDWJT2WCoTQCtmHxqmoMeGebPgynWN1nQom53ZQfye4wAU34CCdZ1ttU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRTUzktcVmjwqjswJjts6qnBGjZr8gitsYQzYT3Gv2fQB1tc2hDTFJ8smq3LxzxZkF7j3eCihYwWdNV8NuNUN82",
  "key1": "57SNtJb3wAGrf6vmV6oJ4yog3AXU7FbRxjsAuVery82brFqDbZpLEocuRkrvsZ1CugYpXoatbwy4RpTtF6LAaoTM",
  "key2": "Hy2mgmfKMmhgmBP2wP6fm43zddxTevN8B2vsJicnvBz6AXpZG8j1HQdBBaSyHPPbAPED3tVrNft5Db8V6CwpoUC",
  "key3": "5kd4GqXJGEn5AXUG9RSBwC5A2KttskFcu5nJGL6JEktZYjVYyhX4mxAKvhRyAQy3YGMGda2A1pFtbVmePjgDmjJN",
  "key4": "48pJmTgHwUVxrzpcJLax2rnQ3JK1Roo5HgWxtKFzybpb9rM9yFi8H4eBgnfDP74A4kXBio5c9j6QjXLwPjS9RgrE",
  "key5": "2um7VMjo4YNNUjWoTv4vPLkTqMCBkML9VY1Co5ktn3BQByaDYtTF1iTTaDXyFJFHfvZQHrncee9A88eWFp8z9qBN",
  "key6": "2Xz7uq8C6ALNvq5QfhaZdrJXcWtP1GxD3sycUc8JB3jiGCeCafjL41KC3iJWw7xJu3AFXPuDHcXXnBgzdtUhXWkF",
  "key7": "2TJtaC7zx6beuChhgCPKsB13jmrpRGYZuxB59VLmCX9JpQYSr1EUygMES7MpHRw3tdWaHhYor6oDwjEsmYTpMLtj",
  "key8": "2xQQNLYGNFMNS7oywvkqEfoX86ZCDW9Saqon9fnh6K7d6p9ZpnbZ7yBp5yVnkBBv9GuELyo7uFjirimnwQYZr3HJ",
  "key9": "36kWFBpStjjptoB17wz7zwBq813ZkCzsPSz1bNx2L456QxJgbTAbRRZb6TzpWGBhyT5EBcuCrGoiJRW5nD1tCmkC",
  "key10": "4U46pNgFwsgdt2TTFzYhhJpYHSSKVXbprvRJZEELhSjRFukVKcADhqymu31ZUqTTqDspf2YkL1d1u7D2QUrDAZF9",
  "key11": "36r7GDHqVQAh2PqCGebhHgkvweY78W682MHxFkLbr4a5b3pfPnWCHf1V575uZEHyvKa1SRfU7imc6hp5mbJRPgNv",
  "key12": "fM2ZLqohoW3zVRSdU5Tki1GUdNvMmJu5RginEZXpYaDBHedmUSYLxqLCqNWkgU3zjFUwSVtf3KP2iEfJ1r27oxT",
  "key13": "2aKtQp8AtDQLL5B5ADpwpRn21xpxnhQuVQE9ZaGttW32LH6tJd11DpnhgfADBDw65pos8KNaF3FNzQi6LbBFNN1y",
  "key14": "5xT7UF8nJwnVZU9RcdEo1zEopKcEbPpKahP9V9v4ijE8aTuXNE4vtwt7Ka6RHpjY4f4uWCPcQqzyLKVWzJu2tGpJ",
  "key15": "3RrDq3GKzjoi9eMcfdnK3DbD9WkkRvLLqG2yAWUi3VBgNngj7YM3hvP9jkfb1VL6Un6GsRCtrCp2JEapGyAKsaHB",
  "key16": "59PyZKMHkTyMTDvfn75kCnQ9e2mEXL6rjJszzgZCMjX8LCFocSnPCBSfbovoEwBqfjRXR1MZbosAedqnijccpAq7",
  "key17": "3FgEQ4hHmvKPTsHLrEdZ1hWoYAtgrkGQm3LWNNeq3cXW8LyjHpJbU9VUo1yiztrYBSpv4KTdPKyrZFzE6mZVxk3n",
  "key18": "k74AMw1KEDs88zReQqqZpusTwhdohAov2qDERZ6KEDGa9G1pmPTSjZ7HN115JZ4R84ciSPMy8Gy28DkghaNWnGi",
  "key19": "CYqhPDJdf5wQvhwbLucvzBNX3e8k1TSoQMsXbUdmKy2Uv4Q1hCVvKv6cTYAr9DKRczsR4iwBsiENJ1cdyxdh2bc",
  "key20": "n9VoKPD5YvVZYGbyLM1YdpCS481fMC7juCBvowxdaGhAddjEfVYFwkSSQtvKfzGJHNXRR6aiuYnonbNmdQhTQLn",
  "key21": "2cMTAmPdkA7RKkwnNEEDvcP8WTXfB1ot3PbmqSyJC19Hd4Dpy42sKiBSDeDrs6Mr2xYto8NuTzhtKTwApYWBnk36",
  "key22": "41JjCN66VG7wYE3aJUpDjVmVhsZsqoGb6ZwkDjBpebDnMpMo8b8mJaVKNGft7iqeyhAaNxDckqJs8DfRYrLoGwTN",
  "key23": "tWRekXqvVJqjZwskXfhNTrrJFTVjh4BbkbA3as9vwXVukaYKM7LGobPLJF1G3FMhgZAvmkZ3jWiMRRhr9WwTb8d",
  "key24": "2gJzs2QQtG34trkpFAg6ovFvnt4dRXHnu86PzJaiQyLJcv5Hv2rSdbrkEAcXE69fQpgT4Jwz9HKCAyyTvmw2z6gt",
  "key25": "26CMreSAuE5mkHQ7Ldwxqpb72wQ9piU7zVn9eJxxcAc8FSt6eRVf9axoxR6c3icUCT18ni5nEQuLy1vBrPSVGyhQ",
  "key26": "2N5ntySDMjofob2vQXF9uaTQrLG9beeMToQEj4XQuaZLh1AzDVrrzXiNEFen7LrXihLv4ip6xrCYfxed1RdimdLH",
  "key27": "3qGdiLCRyXo6Hz8JhRhB1V76W8eGAPX2th4DjJZ38ZvyaicfGYxR1dhAzaAP3k5iVWEN4G8UuKt2qhxNSd9n5wM1",
  "key28": "5VArAkkrvjzLPEy7EZqkqUzZLY2RPgVtpkNZjQyue3zA1UEo8LgVUcAUb3MaHATkBRBEnvkEWQ2XoFzMvoyZB1Yv",
  "key29": "5x2S4zo3u65JYSJr4xxREvh3Nf7w5vzWBAsJNShufdLJGGoghFDeiSMhgDt7qeq6nU2JMxfwASkgqCkqsw4b9v9f",
  "key30": "3rbNzSHPv1au7xftmaM4P6vcsNX8BgxhZ1KWFfop27pG3RMscytQLJdDCEVi1574oJBs15PxjW6EKRb35pKTDSqv",
  "key31": "wqrBs8cwHf5qvfMu21G5akiwWmsxzTg6VUUEbkfsjdKvCmDLux1d9tyRutbEZWEcA6XPq7yf6QD59mW6Sj4QLPx"
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
