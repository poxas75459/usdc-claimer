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
    "2d1QsswfBBLqgyyBqJgn3U7kY8kT1gkH5Couw5xv7q74jqQNymc8vNVaZ6pwgXzZSJNXpsQq6bySRPwtYCe3Ep4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G9Mi1wEbBUg3jSBekHCREwpLpfbPVmrZMWaH3VzuSK6sTTSLmjHZJsaCkkv234CZLktknidkkCxhgWmfbaQDoR7",
  "key1": "Ut6ohzsfX1qsNZdnGKuy438aM58VgZYSwqpKRx1WxZyU2G78bDcxJgUhA1ZWmM13LysPw5NF8h3VAvfjGaERudG",
  "key2": "gSJZ9yH76WVL49FY7ye7w2iFN4jufKgcVQDY8dwyLrJkdrpWMerjT6c7VRTD17VqdchSUyXYir8GdSEuMJi36EF",
  "key3": "5gxUcwTEF8XTNkauzrizmtRQgrxboQhAASDjk5wKY1Fdr2p6EA96xmpWUP4Qjy2UW3VyuFdJNB8z95EmmYJHQbUE",
  "key4": "5ksg3fLgjWGLjCYqgZx7XFuKnRncDDnAaYVYXR5JJoGpSQAL7ovxBkD9QogaK5TRbXSCJcKNXDnHYiYTveGKLQe8",
  "key5": "3ijACqtDfQ81yoM5RFuScxehRBaxHmsYaypJemzmRppX9wQHFHgjJq3nLJEHSJwKTSWGKJ7fDRBn3j6TtiXVknpf",
  "key6": "4bgTG6PJspxkdJxWxvAcbUaj8tWCCPWYLN1zV2tChqn2gyVAa1zWizMW6MamqADUTnkw9pEf4bqJgKNF1XJKunPA",
  "key7": "5SAbxnVjM3K9x3fkxcSuubLfw4zVZ2oKdjcZugXpoVzrY7BqsD365X4hBrjYgA5WJULmUpgv2P6zdWkNfoG8Yeup",
  "key8": "59D14nXYGLgbaqbUoU6VAXeMf9fA9jiP17s8NjeDtQ3pFmF5Xr7Qz5Vr1UYtYHf9UqVJhtbyq4FmSJNHfBmNcsQV",
  "key9": "Qv5movCEQ8p6TyTMC3NRoxSnjuXN19eeMVKhqkjG2TdrpQfp6Qp7nzAb9eQ2mszV8iyxX3NdG9n7qzppazjZE4t",
  "key10": "54GHee5Jp2C7jTPpAwfS3Bmqfp6xZKGyfDESaATA52fHpfpRZW6oRdRfrczXLZZV1tj5cP3doMmG3biMX8PMfWBU",
  "key11": "4cHnez3omFpAZ3e75rmiicTWoFqKKunWdby4aaj7gwED9ZGkvzNEyKfFHnewS6ZfacXC7AfmsACfr9KyCWSiAxPU",
  "key12": "MQU174hKeegRM7R46JxzAGXDz41oyQRES5fXFNVQhCAz5ok1zUm3j2r9aVV4eHjSc73KeTvjnH9GmLzdegzxoed",
  "key13": "2L9L8kTn5o5dAkmdsF2uNnfrdHm1iShH7xk6dAvr7Rcc4ETYrpEDkU2ejbyWzsVDnipTQJHxpqWSZfSbQYxBXHo2",
  "key14": "26a8Pq4iuinik8mtJWxrkH9Nt5NUT1ryvZo2FwC9Q6yeAKvzgkoRsYaX6GfpugoCJM2svJykifmE2wqQcGJRdS3s",
  "key15": "4NDp4evyUgYkJDMLj1TmpegpBx55YSyvSyTrNbjuS6DmDiMFb6gruPEF9i6vN6kCCPcJBQtpmPXjhbotbtAuB3vF",
  "key16": "4xQwYchcX4goVXHp9JqTLzxTqDWrUtvvVcPsHV2cjgxki9aaGVyVcNgH6wHNt5d6iLfVWULZgzjaYmyEZvoikn8R",
  "key17": "499meCyRwS1hQXttP4wVmJNL9WWHzFNRRMCt5ZP5qNkn9YxmeohAVGz72JFmyrGvTgBiBiDoc5mQ2JGq9eq7A9c9",
  "key18": "4D8uFNKWL3mUysPCeXTyhtydw8CJUFziG2VWX22DMeBcBUx7W73MAsAwGnzamLMRDuTZByCHUVfEgVh1JyMkMTUn",
  "key19": "5y1ry78hpXd7nUSYMpXiNLMMSZu4CPzLXX49fnhGQNpW9W1WbjMwggdaW4un6xeDFEyhJcNGQTNt5K4nPTxMGzbM",
  "key20": "4wYbVaZHiEDwRbLBEZ8XCR5ahL7ckFSnieRYXXW8etzsQB6BV2P1kUhEEj3xuyf9PPHJSPtJTY12QmkviLyw2Tyx",
  "key21": "3F3CeLLR6fDcL26jP2YepMaohw1RmX1JdGbPTeETdp3qCFgqGfR1yd33FHnrvtV9zb9tTvxogrppsGLVnnkbuVvN",
  "key22": "sRJMXJ6J1mzok3JtNsivtgFNT8uamVk3wTh7FFnxuAo61YadqYbcBdJRW5TrmWDjWwFwdqes9t7npAXkkCkdoaU",
  "key23": "5CNWYWrgNq1Pd1ubXCjz8mzk2QN5rY4ainCGRfUJA8Yr1aCDbANq1qa1iswozfUasvyhQptjYwgatg8s7mmXFDgr",
  "key24": "FdarrLqRx9RSzLi6hzzsd6QGE745tzkiysEXcXWyhFEg5EVX3My2K3hrxSwYcFDqNLaRFjCHsWmNBE2YDNP98vb",
  "key25": "273rqw3aAvVFAXDx9hwPZkwHwdtEQVCc4kgSy3925euo2xHw7nFa3NGbsbw71M6jbQ1iEqFXRyNuXZsCEJxmPkmD",
  "key26": "U4CYLto8tsJU7NKaymuz61Do7DUzhCTArWjaQh4yeuD7zwsZh9GaY37UfWtP2C1A1Yq6hZtWdcsbAqaTfrSPiVp",
  "key27": "heQ3QYYyC9AJSkTjD328ZtAN32F2Facj4NjUYestQWc9xTjjmgWbJZiYCCCkfpqb8nYFGthu3XdVibaqswbxs2Z",
  "key28": "3SVvDFGmpaVKvBBozkTiH23wmGmbDA98AqNSS6cPjr4X8jsG2qVKWpkmeHB7NYRbLCaFDH38cXmXj8iKZs5UD793"
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
