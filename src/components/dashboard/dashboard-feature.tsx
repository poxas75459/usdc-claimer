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
    "3wnrUPPHN5FezECCqCvskw2q7VXibksPBxenkpsBqUguM2c9R5jT9qmHHaPCyCNLMUf3LF3jF9S8MtunMtN7vaz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5sagQ9cAcVv74stxjf1CSv7NYRNzgWbaXNqFXq1YAtaCiMGup1pHNjxzkSPCiBLqx7oS6sL9igzicxiiXzxJ7B",
  "key1": "5EvmUjGnpCrHYPnnX1i8zdB6gWZmrpkjvniuHrBaVKnuXYLuMAMHp438eMAmwZBAaXgYxEvqiaD4mLrNxgxFvZwH",
  "key2": "4MNE5XAghCyeLzRb8BYQ9f56EyZQWNKPkPcCz7QpgvrrXT2d6pGxTrp2jizcrzM4u3ZhA88C2hMruGwxF5AwTgts",
  "key3": "4qDcL2dQdbqBcweGjpuS15yTYi6raMpSMQRJnuWxXAz7PtpxgMtVe78JcVNZhGE3VtCd87BhLDtVPwFBmzkjca4P",
  "key4": "2M5oNjpJLh6SpP3gohWgvv1W45Qi92JxsDU6VHttkJseGQUrADKjzTRM5vUPr3DJNj4nx8BxMDVCH1Db7u18JRSW",
  "key5": "2J5Rau4A8VT1cBHk8EP1C4jP8j16LEUFazKg1m9ZhaehhbR3cgfMWrDmmjhLiLubwiNQakcJVUCUZ267AyiK5owu",
  "key6": "2Fr5TJ7p6tM7PQSWd6ACLAPxPMTbwgE6L1conHtngdSBUkoNd9a421JEAZ2PjMJFGKfE9k6wcSPhUZu55P3bv3St",
  "key7": "4GFchZPdFkUG52jUboiLJ9A7rRaUf5s7Jami5qZ54T3bxVegM5mCqFzadz4483mmhfcBeXhnjpHxC3UWdXYfEs6V",
  "key8": "3wVowZ2bkhqJEjaiXDGbdFu7o4dkfUhzabvgbDgCwsYFeTwXqtW5iaGxcCYgWJNGsZnzNykMJAZpghqDb5JwPqjF",
  "key9": "2nV1eQ7hHnsmhKCRzHLDQ3tjpzxrisZMu1rW4xQT2SFAGwxFkKFyaTkhgXPHbEB1SnSeGbZ1omsSNzhddQmXM3JF",
  "key10": "26cTN5DZ3bkmyL4Rqknv171BjjRbyH4pz8GmZVPGpQ4V6xsB3rDp4ryo2UJEfHEE3isz6mRe27GuwtLdGRqGDaBx",
  "key11": "2Za2t5Juq7QcNDCUML3YHWWcqB4MMLxcDAaAWZTVfJxiWnVbmbyrXGL3hjX8XaxDmTAXdyQT5B6GLw1swZrki7ub",
  "key12": "3taH1SNSDWWPtza2xueTjiUXJQLMfJLZRmp9b29yskhLCXxY3LzqUUPDxrYzL7kupL2MCMFZtmjKokz7LqwA3Kw8",
  "key13": "5EQDHVMAnEEGVLqL7NXpV8eNZZCCXomFvSfyXU4UQryadNW1C6mfrSn1QxYZy85xigSC5ZujUdZdGNdvhxzEXjCM",
  "key14": "5d1h933ny8hMnL8Sci1oNkH1UDj57FeiTC2bJC4rqsuCx9Fiq2N1dNdPLGpY2BRyAeizgDxATC2KFcBrmsvhhbq3",
  "key15": "4Q5op1gt2stm4vgAZrZm7nwmrFrDVVPWqDCkJsFq4P3ZJfVEcgPCMffFERfNRRj88SernBntSqHdne1MF4Bu7JYh",
  "key16": "xF84o7sGSz9RV65TXnniLgjSuHVoe3rBFGpFF9w3eywj2hVBqGjXF7KUQydXJ1DY8p6dRCz56yMn6S8VumcqLHL",
  "key17": "2UykVMBsU2uBoyxj4Q4wZvHyLEvy9pa5KZZdJLrs6s8wKTVr5zsgihKZQSs2nNtBZmehH72DqkiuX73yYdEna1Mc",
  "key18": "nLALopPTc1HNr8AFw6Mmf1LDiXNDsdt8UdrLBNShpH3Hs6Xvi9H2Fk1zTKCguQsCakcRp1bCV3ZEA3sJCXSrCJ3",
  "key19": "39A79pB1pUvFHBpFaqeGiNGfaomM7Mb1rPipaaVt98biQ9EJrMCTqH45ZeGqiZWrrqfBvmiaXQpaoSdvES3sRtfV",
  "key20": "2zwHWv1QdjtGmB9edSNjA37cKLFN3vtQpeXC4DqppYENdkVCbogbDQYS3jkQ56M8Y6ai1CSUwM87MzV1h2bVhNeQ",
  "key21": "3oGQDitWk3uejhxN95d2Y8ih15oAbpABfUBd35cMw9hWMBKULYRCGr8JgGpqbr4vHhpZK7qpu9Nq78ZPYJyWtq7E",
  "key22": "3nmYQjaq29a2K7qqUXDFpCz9ETZ3Tww5YN2RXa7dWn5wJGyigx7D88MpTYw72BDvdoNjgaBw3TAPqCVzeR1TUa8a",
  "key23": "3FTpoi942KqKjbTn81M9JvGA7i8JcwW7QNc2QFAj8DAkKfHj13eekncANY9X7JukhNzTTKiVQrgFwFQUWz3qsiGm",
  "key24": "2sPHg9Lv6UySsJSHQFzSprHLtG2VfN4rwbA6rVFTGeAMXgs2WHWsWHG6a9JTmqhkzHLU1r1P6VutS8NuiJVUMYJk",
  "key25": "5rYGHXRMznVrwTKuG1Q4rHMQsSTvy8F61RqS12D8nnK9QAjgGScfaFqtDzDheGvStp2noVP8CuxFvx1yu2wLkdjG",
  "key26": "zdWkUsVgxoZva6yLNML9o1P9gd4Bn8VVBWLfaY1xG9L844cdkbqzgTQGBEooMxvCotCrsxTkiTCNXnEwQUigA9z",
  "key27": "5XUpzrJo6u8QkKgspQymg1rABZ5bSKYwNBEty1urJ2Saoaa4aAABoSvMiaRs5xcXMo2y7kVtNfTdkhcC1JWtvpqK"
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
