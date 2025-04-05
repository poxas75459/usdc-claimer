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
    "51Wg4AL5u86vxKTsFmP6CnM4k8twB6SAACpsNKvucvExHqjXH1JRugWMLpQUpaYBNiGryVMqCvy5fc7ShZDxmbKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "af1sh3QhPs9ga4LYYPqpsXugFXRVPwZ66vMiki8Q74v8vErimqvgrrzYxhwxhPR4tR7k1L1L3jhivfnnfx7Y2BJ",
  "key1": "3EwTETr7nr2QmGdgsBMSzhsMD3MDQKv9he9hwRK4BeGRDf8UzkD2JkKZQJzNCsKTQYjifCbW7Hr6yhHoLUvdG2FV",
  "key2": "3UyVH8wxnHYRn5LB4rytgjdNnPPHEaXhw8LXmYHyAgwRSuYaWfP8A8haEuyMtZqMBk5qfUrpJ96TP6ezE9aShJKx",
  "key3": "37fUsp5bA1cG6rx23Jw7SKtvmJ6Auaqk3T5ycEHF4NmUzb4skHhcN3WQpjNmBbhi3W3JEPcK8ohH2bDPB8DTNpZD",
  "key4": "57uCxHK8JrcBvsHXU6qMfGcQdg5B37WfHmC6ue1Zev9necX6vDM2LTdezxXmkAWgXwcriUfLWJ6S7uWQQuySyWiL",
  "key5": "5jccwxsni1DNELBbLS2gScTCZDtBjaHvFiqpeZ8Nz6QcCZVaPSzUx5K6ppCMCxKjUWUrxJJQpXPMASKpagNvmZHv",
  "key6": "39HhfhdqzeVDjBwYNHn53RjTUkL7Ku3x4tDaMHrDUzLXeJri5Qpr83rAFafx1BRiFjGJ1DFsXgBXu3FeUz5hzH9a",
  "key7": "uJVmNbb2aYRBkRSg5vwhQSMBSsLRV4GMGcPzg6AyvnE36fY1UmRFUk6g1n9LDJZbj7V1QwyGd6hgMMJQfsf3dtZ",
  "key8": "3fnjHh8LvtnNqoYtVUwTp1k6GWeUoWLG4ywKHhiCs5C2exs7GcpwCvA7x6i6Zbh7YnuAEcQdiqPAeLxTfDZMas6j",
  "key9": "5zu94cQnY4X4KYpiHE6oTeHa1k1DzX2qhEjLQ3dX9hsGRpUVKoZvpHZxAxSe2RXUr85YRS8k9nZiVBcTBaHn2Up",
  "key10": "499h5sjBx1VxtSHPVkNsJZ4LJtwnuFDrgtRGG6qCBwQQQ2bW6tfd4JEafZGTfLAcsb2GJSQgPvbMiHPPvcwFDBCd",
  "key11": "5HyUAWkdJNsXcdiauxnM9SpvRS8sasxUrEfaLWbhsGjLbxWLGzCspvEBYoUrx88kzCcCyE8jrFzqH5rR6gdLFAb3",
  "key12": "3GkRqMfxdNJPDaSCF6ymiKh6DbPoWVrMn4eFAHTyFpDdTfMVUKeWRJ47399BL62Ry3NykggkrP6hWQknbKoDRVBt",
  "key13": "3L8UMYsxP5VxCBqnJkgRD7qJhDD47PfCYs8Tw4r9sXftgv64SaXJkSmWeSnLmJM9QGgpmzw1QGSCgM5N96MjRH59",
  "key14": "5eZ1QsEHMyAvpYPW2SRs7cbHq2RxpT6za5HZb3vKPzrYyJhmNpKryTTCDUVTpWeS2SLZVzHm4BXFWYPvbVF61DjS",
  "key15": "2rXSYeCp8eqecEqDiatWznqDGRY5sPkzouVZQ29hAJZAKpkgAGakTHGuL5BoH5S6FUZrSBBVC5nHeKcGHkueZvCk",
  "key16": "3QZ8UpH7HQAjSY8TYJvgUt6W6v8q6kNcZY7Z3XaCjM4TufgnTkM5WmmRRmRMi2ZCc9ddUZJ64tCr1w3tvzr5oSM6",
  "key17": "4hLgCs8DDuwBALvw6pcsmB5b6M52qLajTyKgMjF3CZG2jJauhjbGMgHqP85HP7qqzZNJn9BhCcoGFcPBRsakk3Ee",
  "key18": "4oA2VJjkTGohSusk1paG1KGKBLDt2MhYjHhdiy3yCnZLu4f6HXjYFaGfiCCgxb5i5dtBQHzk4r1Pv8wpLJHP2uZ5",
  "key19": "4sUUBnKTKgB6jXCJJLdskpJxqfDDvTkM7iXuDyqXBh3T9XfXBX8uVbcLkdyvZo8VJRW2u3rCWKHpupJBM5TWw2bj",
  "key20": "cf1hq2s8UriBGAtDo1WXojWpVsWfcCFq3rEKG2Kkse7om1rTZf3izWZpmcpSHutGQHxEreLMdJmLrj35xJdmL3k",
  "key21": "1CELCLFUoU8YRGqCJrWtbuvJEiNw58MHRPBSNcSzYEmn7YTNavoNrdbSEtyETcW9gXPWaEBEHF4tFCF8Qy67uyz",
  "key22": "22BKc2fCoHmRsArvuP2SszE1VRhrCv9DmLHSijuUZvn7sPhVy4Be1itAZ7cByUVG7zBP7EuEGuzbmwetvPHR99Pv",
  "key23": "5xxBcfmemeQnibaPR6ryonGw8cySxLQVtKBkDSMezykh5aBUCXaHUp8kLi3MUSgG6L5BY771morQmFBaDEt1BQo7",
  "key24": "2i2LnHhRBmtNpr6k3v6BBQqkMUxodSsE7mfArb8Fg1rv7qaEGLA1YcMHCi5rRmRedwg8VZ56qN4ukLNLA8Q9x7Z3",
  "key25": "4QrKdsEujWW3hjByLEiCoFU4PyhVfz8w6dDHLQ7HjoUnP7H47oF9ARcgB4N2WVBWw5Zk7FbbeRxADHZhd7R72Wrj",
  "key26": "2pFHq2iS9iWbnSUc8V26M1KEx46dqujjwX3tAfucqLNmMhmdS6iJLTg8n1ShVQPbRV1bNUpet4nuuTPqcgtw9cH5",
  "key27": "2UCaLSNafWi3DM6YWwoxG2QjTz83R9btXJVrX9Bo9oatm9zP91CbWP8ZeYNC1f7MRQ1Cswu4uSshyNjPgsaFX6qD",
  "key28": "twoJ6SUUy6B7xSyiDjMJRvL8uYTGSMQh3jUkLe8JEzToGkyQwJUXiTBZjPaofZS19QNmnYGUkVATp7Xdf9DgSLE",
  "key29": "5Ans4J1MwS2jT9VrucUe1zQXTJ9wcYWiGwdXdZVWekRy7MPcFDXPZmphRpQ89pwfCk89EGVMSudvY9SLw2dyMq1h",
  "key30": "4LYwitkJzwPVnW5o8UQytQHSB3YAvkJTgvzx85X9wGLvB7L1beFZGo2N2tYuNKYKdp1meWsikWJu47XZT2YNsf2C",
  "key31": "53YfFjrmWZZ6cskmMVc85yqBdnwoDAGZPS7J9pcc2CnM3JN5BSBwBjm45hTs4fJLYGhq7Q9JzgDiGW6YJsDcZzeC",
  "key32": "373F2WKmA3ojUBhtET16zERiCjEfzK5p3hKCEMaDBubfWetWXRdiPRJ8Q86zcLU7rM5p5J1EouwfdD7dGDk5bwos",
  "key33": "5RNaAqcN1QqvRQ3pN6uPthJ5PaXe496izzsDJfq3ypQKg6HHZcezNE6CSsYWsfNmqUnmBW4E6TcHSu6HWDsBL1tU",
  "key34": "4H4L45mufPVHE1QLwxvjKbQ4t9WccrWrVmowdE1N8b5nee1ABRxmHGeLYq9UrxVXks8STS7hiJyLVgtKZshRdNBY",
  "key35": "2cUhL1FQsXvPqaQVSzAhPGsC8d9JcC3kpbJ2EYo3Hq2juptM45rEE9GQ1vbqz3Xx7BRNdVX6Q4TSWUwH6UgGDxmt",
  "key36": "5Ufvemr99CUucPT7x3E9Hjy6UgJY9V1Jdurmf8j1WCDCy6NdiHPkbFApGh5ZkPdVViKx1DFtrsbFQaWJpTWYhzj9",
  "key37": "24YMGzM25fqEepCQFgojwEAwZ5rZKGk3yEJHBmSiMrypiaYjvbK95SZ8wNCerHEdx3asHYywMF7JXWbk5ZE4dgVc"
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
