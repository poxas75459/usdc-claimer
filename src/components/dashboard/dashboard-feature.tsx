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
    "ft5tiMrAf464YU9UYiJ7BSy83u69V54iv8xADJZATxkSFp1x88cDCyfjWqjSEGmbd3hDarHDYsbbDCFauNRUqWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XubXZTy1SM9R241Vb9XdULLrfHhrqxf14NMAKPPE6yLeF33wUvU8uuRfC3wTeYZWuQnQsrJ2QQXS2SBTMVNm9Vm",
  "key1": "2BpXXLqPwKBE7r9oYQgAyMXzeFg4p76Vv2RSeAvR24H35A44zeR1BDWPQ93uKWfXQgdNYL4Kr4y8ddSqSJBpu7Rg",
  "key2": "5rUsNcjXDgsfz6CQTrwdodU6QZ6cRxWxFNyxAMPbeqamHQJYTu4P4i5J6FvYzUcEnqQ36YwgVsxTJbDPWY3HJboF",
  "key3": "5m3UmnwLRnq5shiEz6MJGgk7SecnzvZHDsjk4G9kMvi24D2y3iKHtD1V8gTwFaJsK45HYTHhLQn6MMoaDsbj1dBo",
  "key4": "3ZSagLwZ8x31srkAVfekaeygLbu4aHMRZvPn4QnmpJMF3ZL9XcwaGP6SQZmqjmCFoDFzQ6YCx6fkit29NptZbqCb",
  "key5": "4s9avaeS7TrFpJrCJvXJcS6gaXGMJrPjQWr1jHfg6ymFRgBUCgBjnGyVJg4LtUaEJ4XtATZ1Ex4f4mdVkujW38go",
  "key6": "66cKqQeAW6KjBox8AEzStJqLqw7JpQuF4S7hwuC9kC3QqLEh5Gp6yXpQt1UDDYin9vGVSwLitF5fTHDXf9bGAJ19",
  "key7": "4mJz78DwgAfvzAjQuh6VzxyPPqxdMVHFMuiczjoVCu8ZvaUgay1c86WNreVECG84RquDwPGFS7WTHJgq3AYxWNNj",
  "key8": "5nQtFPm6VFmQBfqwChR7RkaWQgJEKyNC7uRhVRXmjZ3ANHLXmj4JNpWFagGNHf6yoyYAJvrvagUJFicYuZkuRaoY",
  "key9": "ER6wyYMPSjZxo5Ztm8nNfXiPD8rVfd5eNoVUyyLsyMKJtjKUxY7qLa7Fr3TrieYAYw4QSpMo7SUTtpbCj7T3qbL",
  "key10": "3a6uosPv7za73NnqcnY3u8vi6G6X4Eo3fTThmCnBcXSN88KgdDxwtyBF6tVGKedofE82zXpn7NYrrYRLQwYFKqv6",
  "key11": "3qnixPUNFqtxs3d4TumswRt6qXpxUq1rr3Ccbcr3tsaov1BCUjbgFY6Rcz18EFBQ8yNxtpmzauehKnV5bj5faQaP",
  "key12": "3uFNk8K17UnQBnbE129DrJze3t1FkvJKYT9karhm5EAfjCey7MpQDMydkLy3hshkMTfoF57PWThog7jYcmJmuJMX",
  "key13": "8xiVkwXfa8L2sZzSp2MNVuQZriDFgPbXbSbkhhqybGracvp4QrmcY3MBLSGVUzHTPsAMNLxgkMkHygutHtfT342",
  "key14": "8wzLyZV2nNKEiKHNSLFvTiHTSLKahU3f2MQDGbVjwW6siXcZPf6k2NLczv7kQ9QQ3o6kZJT5LU5gi4xvwQpP6BD",
  "key15": "3bPgfgcAmXHNf1cJPtVaHYKjNDCb4vCv2zFkHiSAJJDrPQ6RJJnhbcuir7iGJ6aTkUWFBwTLLUXt8LCM7Pk5Vj3d",
  "key16": "5i9Z8TQmXvjBa2YzJ3qVTn3kJ4LKCUiXdKvEdjftWKC51UrGMJs48KVfyhc1jQcdpLrD6aMEKWX26XEbs7GcPKhJ",
  "key17": "2AA5tu4NvAHBk8fncMjnnqyeHoQQs4Eyyggbxe4w44CDdT4hETMpZYmW7Xe3XReVGXn9jqE9RWsADTj5r1vokBLs",
  "key18": "55DiJ7Koq2ZhmM9VJn68x61ZoJdUxra1GRgukYc7eYvjLSN74dnDPz6AMx9cpqiJuAP8Dg3p3gEjc5Mc9cNv8pJx",
  "key19": "3Wkv7zqzLpR6hGRDpmGyceKXhZjV1yenBHZBk9x8Ls67KSZ134dmMHorBoExWW27nxi1sUnMExgjP4F37rTANyxE",
  "key20": "5o1pdMFhC1K3CScbh7KNm118RPwLnnMZL1utLQMqJpBMVnzoywhQxSkGw6gq3m2c58bCHwvpAnFjDY2F6dvmmG3h",
  "key21": "4wN87NCNsntweKqmb4DeXt6kVYn25RPmi4xZFuadc6XRD8LKYfpe57G7FYuHTF1HgTpwGCg96Kmu3od4h1gvmXVT",
  "key22": "PpHqEC7mvWCq2q5hQg4xDiWYs8jojLeTQ6E3oVQ3EZMKKwRePSQncW8wJn2ucWLMeBepXLxayV9vtjbTwViPdGp",
  "key23": "3n9jtP1eWTfq6oKWcHQb1y642SbAWdhqu3BetMrs8yhXjGe9ZZeeACPs2Witr1iv2rZGUhaYWritN5eMPtcngqMy",
  "key24": "2tpDGkSUYX4ySLgXxqqj8mTGvpDAw7bmzMMXpiAG37oaCmfaJh6S1FrVLj9bkqN2MgedKHaK4Sx7yx573Ms4QU4c",
  "key25": "5vQkyjZQUXDzCySoBUoCfBJ6AQ38Vxj8tFYVLMWRXsxrFqA1jS93L6UyuqGpSx7aCqQRvcv5M2R5j3u31aSQ4oyD",
  "key26": "51j7C5ZVxgxboK8GVxPiq3xUBuM9ZB2MSmPENKDFcskxdyokP5kKhkPZyBuHddoWiWVjshyh55VtQmpJJDpvWSV5",
  "key27": "Gp5YNFvPPg7yc3VZGid81BEBqE6HYttm4irFhx9K1VwrmrHvaermdcU6fyARVbiR6txDKtBF2HbkFi7Jo8Auzp6",
  "key28": "5CybvyhVhVTgEdssDoGzxFF8nnBZPq7j8eYNYSAXFF9YV8XNAo8Convf2ftqXG6CjdzKSneY4sCLdgszABqz6iN8",
  "key29": "jtHf7SjgNNDN1mai28y6YGLbZjr5tyQGbmNjRDs4sX9iLJPAfXfmpPumQvtv2AVs8nhpgvms3bLePkhAh6BcFjw",
  "key30": "LBLreDPidXvKYJn1KMgxoX7cLW77oLRzRi8VPkkx8aZtKoc7kwVbfAnYFFZRVSMgLUmbkjdEjcbrmSy77XAqmzQ"
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
