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
    "43Mnkjq183LNGJzR4xC8eT4YD4Hr97ww6EkGewmJSmXLN1nDjexpPc9ocBqQRQLtHcDw3V1jBYET4QNpWZdQFgA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8umYYnxMoHRhmzrVV4q5nw8h1GKTCGxZG98n6wsFY73zcExowVMapS1vo1ad8fcaEsqN6wJwC2mhzzrNrDivSq",
  "key1": "36vudVQ5dnTF77hHmW4E7kp9sgjX5P8hpZzNALAaokiopxnjYJ7dATNu6tdy3NDhDKB6bT46D4BNRHjL4A6n8RBk",
  "key2": "5VrZeNpzgh1qC15qJV7GNTu2hcCRNtD2zhDptp8j5DoNJKXPLvCXupHgcSN2sVYHaVMvrD1tfHkcbAdB69poU9b8",
  "key3": "oRbjM1KjiaNuuKarMjUBrAbNt4QmeMZVPZYyA2G9LbSp8AcrmbeanRaPdJfAyojvXwBspoiyC5ZcwxHGpL7CS9x",
  "key4": "3c1ysSBiMxzmsuUe6V5hu1r7b2rMoyQBEEhtJE9k4sn6VeC57EFrFfrfWeTHymMQUpcM5M62eLxWKhyBa7TV6uvg",
  "key5": "5GvQtKPr3RrM5NfNz63w8wqFMG7PHUUMB66fRv2zVcb9z2HGSfuJg78hp1qQjqqJ1ZthxSxkNAawZ7aJU4adReg7",
  "key6": "2ormHp7vWL7AQ1LtbribsvAukXwaNEfGQZ3naXdh5ftx26FurVwPBnbqpLnPusiktBo1uDYdLSJ1eKNZq5JWcDan",
  "key7": "reBisHYRGhA2ZQMdebFmA21wakuV3EzpJhtqYakd1qLQjSigFUbJywpEwb7RJMmhDVSSTkXRfyDjYyGM51URQq8",
  "key8": "39BxC3KbS8wMsL8bf5zbSr9k4VoQTuQPdZHQaYjM8NQKw4oCJkBKZY9ZUmtqDCZyvdRGYhD4amNbTWvRBve4Z8vB",
  "key9": "2SVV3aZRty4KgUrX7uTZZS25ZeE9nsCqG518aD1RYPaPdtexfctCaarf53LCCqpAJJg1NPdMxkrPqejShmKCHttP",
  "key10": "37LqYq9FoZURfUg8eriGDSCJ3wFMyuYmLrj2q4dzufM9juKPjnb6hm42BzAx4gjLXXmgZufiy52xtAmB7qpbbsr",
  "key11": "3VCgQnZz5v2gWiwXAwsZnnZcW8g7QSP9aTqyimqpK3AVWA7kBmpaK57Haio6xJWHM1jQ82wc2uEPtBHkaXiaohc6",
  "key12": "Mx1kZahocbC7xjFeMe5V69QovUA4rSTXDG2x28fJ86Fpt4i5GeBjB33rQRtzGxbqUKZ95GnuHvcbwDHQWcxdBzs",
  "key13": "3TUTHuZvuuwmkdVG7m4tSoBSfvdB5DTbCYfzfmiaku4Kc3zNS7MLMMEuzkxUGKWkc8w3psrPCEyQMvKUTsTywJvg",
  "key14": "5w3UTuLZFNk7Q4dNaUznPzXScka1gg9qUGtEMRe6VtQc9mgjxd6VBGXMQAJEJTc3tk4qUx889AaxBAZtoWo7hhTa",
  "key15": "wwKmBTVkLU3muHAN1xaoGRNVshoXWSPyAccxiQ63NVyGo3n9wqSP9xBqWmTfdzyjWMGSwAPjFriE7Y74Hw4yJvh",
  "key16": "4YeNnQcNxuWLv4qFVEH3Kcesosauf6FkjsNNwycisPYuH6VtMtTuhnUBraq5pS6VckPF15cGAS2j7bo5DKfhMQne",
  "key17": "4RV8MxqvqvRMbvKXu2BhyQ7xKzPt6jB34pc2FNPaT6XHkwEAp2rX2xyvm64MFMRgmmqgypgq1nxANtJuCRxvkhLo",
  "key18": "2ej6QU3k9CfAWxXCFntMZ13aPyBW81FxtpNQqFAB5rCpYv4bbPCjjKPB76aYJ5oJ8mqy5YQKEHDjWNhqmkv1VRGS",
  "key19": "3qAoYMHiEKvnmaGRc2Qz43VgA1WbzUioomLXqkhsTx7A5zFeAVfRGvhDg87FiGXzFCw67Tk8M2YnKNGUP4FrWcDB",
  "key20": "2kiVz2JPdELZvkUNUuadWkYuNdF4Nw5zmceAx9uFVn3pm5f8ptqLKAV4NNJrDcMUiQwVG1WhXzzyVmrZrcmtGe2E",
  "key21": "47NDTuNjdgnKa26qfanjk1WXaBWFFsweXATjzaM25rZwskJayJRvb9zSJt3M59XNsjNfZ6asmgnyCJ4hpEZMfeRY",
  "key22": "2Dg4XDPk8X1UrzZ2NmkXibaVNBpuqJRKJn2h7q8NAVCBnXEjGcxjiQUavY1R85zGzWSZmDV2fUJVFmUZ5j1xVr1q",
  "key23": "3gnttTP3p8epfqqzdof9bzTCLjx75uaQLMP1WMAQWa1wXbeZKKaexSYRNLZwmtLaj63STbU8jBhikicVZcDd698x",
  "key24": "144DDSeADjNnxMu2QxwJzb2usMZLYaMYb7GanoNMJQ6yZ3kCffdu1VKKAz4xfAU7RBsmiGPFLgjmcf69tsfRfF4",
  "key25": "5BsYmAhCkaYevwz9JcLA9tZSMBqtHNtyFAQ7C34igfrd4Kd8pJ1eheV26w8XAqzCDuXettk8v7LXK9Cd6u9qJRKC",
  "key26": "5L8TtyY5xeHZcdqehsW32fFnccSFZyarEehJk4BQYw3guyCHnqcTPsht8vP3BQPiUas7Jgq2RSqY8VbFBTgha3S4"
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
