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
    "jSZMYWM9ZnjoLRVk9XM7RKP6dKxUXjLJ5zWrhrUvk5MRaNxoro8TTvEA52n6oEwDhAY6pGQnBZM3pBaY7wmJEpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghsX5DPD4AkPEFGuZ2uN5oGXgECFyUWGNWspPdWCRv3Ds2knHqZKFqzfmcV1Gh5dxZ4JnHCUofJw2ftDQ1rjg66",
  "key1": "511UremMY8tYgwGrRMYPWtU2SY4e626D4Qxhx16uenKZbH8xXK2QDVhQjJPmU8skS93AmVLmPMWX2U1z1DVMXdP1",
  "key2": "22Ev9V2NN6PkJeLNKPhfoBnvFdSNqDLRNr8p5iyN6WSJzeUMDTxWib24V7VnvSgWJXasriVE9pWpqFQm6kbqLDKe",
  "key3": "Cj97ZDeZjyzCNLxLDdCibJtn93NbXP9GjmBCPqHTEQzEjy8RNRZKErkGvZkBx2YXbS3sCtaMtR4v9KA5xf2NtA5",
  "key4": "4R5oDsNA4sppzeVVxq1bbYW8XiHWc8seBs4k3V1uLcahvLf7vN9V8WgXKw97ZMQ8iJcXGfsKh7rQi8jGm6PmW3vH",
  "key5": "idiHdAWeyVjPnHSD1cXhwhgy151bkTJGNK4bbX9MGYv6HywpDTQmWTKYe8dH41uWFFrEJkZx2By15nmBkMMQQdy",
  "key6": "5q9Y6mgzheyYwiYQezGVw8HRq9XpdwomHJJvUvDD9sk3jBjT2R9ooaEpq7z1h6SEQhgCu8Qh8oi36iBqV4W7f4wt",
  "key7": "5AfcnC6tPnzd4nwpFByuxpF3hjQy5FbvnL86UogctnBbbHnAQ38wmMKhREkR4wozXrg3vUQKgHEeHBNMJgAiMEVJ",
  "key8": "4hw83bFEXzbq1k2ZPavqdtGoYRoboJAYKfycWFAPhc5R1hVJSMVQGEAQVGWTxuLGLsCeQLQ3CzBtQhAkHivKK25U",
  "key9": "2jtrknoYRwk2hWrQWKsYoh6KhRbh5SM67a4G1HjyVuLiC7TxXvC6Fzp9E7cYLqbwL48TYdVAP6nn9PNtCCFo1mEc",
  "key10": "3wG2EKXNg4y1NHdcwPNgk5tWGJ3Frg6w2sw5E4HcbKCk7k97kFQ4DFHrrMsvzjs1RFHSqU1qhnKYHF9fbkCdHR7Z",
  "key11": "3f3pkEyf3agj5EVAg5mQSmgLQAkbkF2bAgWHzdvJu13zJhJA96CrtmrG93gTPasWYnZaVGRf8BGXceYBik7Sp5Ho",
  "key12": "DVzxSgviCmE8EXQzmRikAx9gdKt7HkuyZ3c5wBx1iwT2WSu1fNHJPZdjb6GxaA41cfmAKqSQRbYFw4wyDiZXwB6",
  "key13": "4z5hc7FeiChn1KsUeD5JAxZezEc8PGkK2mr19KyMxNqpL2juHMifLnT5phMR8kou3Ez2SWrQxhp7L6P2Kh2aFYkD",
  "key14": "5m2Wd3YrXZH3xer2pVkC97UEayBrF29cjFctme6b8iusfSDkcWgdPn1tF6pGW6fYNZeSj5bJ1zaRgCn7ZBpk5hyn",
  "key15": "fyHUWNbKyQfkTgH8ZtFCXR2hxVQSQto1ShwMyx8PFGyCuHZafgXTBr97KMNGy8ns8FWYcWtDm7bYyyB8trtZGiZ",
  "key16": "mjTKYj1yz9q4kMviz48NpfYCt3c3tLMdzofzR7B5x4Y3KwqjWfioECydsc2vDgmfD24aQzy7G33zBCvWEhStUJa",
  "key17": "3mpVaZYZNUYnuemUiHJ7QG4DazxUFgzgdXgjMjaFu3ktgN9ouihrdgDQzjhRTDzAHLiuTNVs5iDsLzmY2A467oge",
  "key18": "32iTransBovfuwABRGYXsM1ANtVH95ppeYtrHUxxzAzCCJTsxH6Ka26MwofEXsUXACiELdt2kEJDEsPwcoXqeFoh",
  "key19": "Ubc6sH5GkMtPcHpm3sYPgQ3ouMz5q34KiJxaVwTMnVC62JRbdbyUrz4zwAbr9dgQsniJfknhDAsD6JwgkKN5Tt5",
  "key20": "3HbV7EozP5zWc7YpUM4yR9RyKeMtLVz3pqaw1umrcUEdiaKrgKiC5FgraQjAueX8x68Rxerv9Ten9gXxXdzpuSDV",
  "key21": "5iNMzDgWyj9YR3KaTYHSTgubVRCyg5aV5oaMyZi7CiTDZzKD7ZAGzfcUj2WajQX5QzbR2N6EoZ9TFq1sxYKc3HPU",
  "key22": "2qsAbmLZ8LbwSBnP4XCsWQzNMmR6aFmfkuKe2Zbsa7ZAERZLNf1zqxUhypm93NTvMXKwGdGV47dj31f5rUuqGpmw",
  "key23": "27oYrmh3Zu7MNfvvaJCXqkeEBTbYiYARFTYmVUpzCDBWyTSncqaGr2jpoE6MkEjbDA4VvYb9MYWSm5FknPnAc2HJ",
  "key24": "5urdoSDRijQpKp9Ew9C6zVh91z5YccgGZMwFZFyUVmDesAq8ZiibeJ4U1v9DEx24aBeGSWFaFf7F5k4wSfDkTwuX",
  "key25": "4hhVjDPW4NVWpwZK8b73CF623JYrE8DB6N8CKVn7Ya2WL3TWNFXhqfm4vf2Xip3Q69i4AzvpFwExjeDgJq1FLrKt",
  "key26": "2ZwSzBCwJXDm3wWmErnLprLkEYSehaS5qK7fiSuquHRiGMYSz2M7ahLxVk2q3HEDRiAB1fRk7LQfy2n5bfTgz4yL"
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
