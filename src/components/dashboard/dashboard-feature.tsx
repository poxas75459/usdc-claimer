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
    "44Po6XY1SSTWVrvC4hWNA8P7yWpuXUDeyGDKL2Smz8pkUT8QoRQZfGHGxHM4XczgmgnFTzkFpa5y1XZfF3dy2k1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299DfuN4aL4SSiPKYWNpbja8GjM8u4gwJv7fanhqWSksDAdQeAtqWa3BNyoL9Bs4LydZBXyaUeRa8rWYRdK87DyJ",
  "key1": "3MTMPR4fJTaEqTk2n7N5rCjFapaazR2fgHTAZxEvzxTXzrn8TA8pjxGmH2ND2R6mNc6C2chwJjuxMk2xn8BJ441f",
  "key2": "3szEUoQ7gWA73mWZG5R3S7LXWRkV6R8pnNaT7FxMUcATvsbKKjxX2eC4BBL8EwSxF3z7A5FS6MK98dJJUwecvAoc",
  "key3": "4BfHHXET1PUqnpjEdTgrty4DdXzULJTbx5ewArYjTqDW2DGHnDR8aHH2CTCjk5Sufq9jeYadqtw7tz57kiGsineH",
  "key4": "4FTKTusjcA41XYhVE7L8koveo2vbLVuM7AWKrfvAsm2zCtiKUX1b2aDyEbZMX8Nkc5qURw7DesbEVMn5QcByukVg",
  "key5": "4FyxvddYUhXibv2JSFE5S7hTXBLyhz5uAa3TZmPxhsq3WouGr8eDfkQ8sLfwiiKU5Z3ZU5dndCDkZ2EqKKgMD6PJ",
  "key6": "2aERAeJFwt1CiMy6BciGC3AhA5PEwwQczbA1MrWXetxtqJepMdPbqA4AiAKvGtL7ApsJ1t8hCd6KEaALW2oQZwbr",
  "key7": "Pf7NwyQBwpmoPNF935aFY6q62Ku1Mq5DRLy3jFAEw2Ns8LZaQMBGR5jvLhnakgwcgGN73KL2V57gph4zjFyrzDo",
  "key8": "442cGpfNND5Kp5yMDoejgMd28Hmk4RrcyLZKLPCu1y6gaHgSUcmXxDwgTFNdTmGBK1QooMPiujGsXQK6aCSjcaKb",
  "key9": "2aA1Z4EnbEor8NE2ESXUxMyJbaDV3J3RSLsPUQCCWEh6SHzzumiPzdKdQrvTJUTyBZFMDKv5F53XLkNb6RMukXU2",
  "key10": "BphVdphGNQZt5a8awijXD2mdUBknAQdZFJH5bi5zKABsjknSgVGCtXjLwpHpYahSvL7Kvh69JcMHxSjiqaMpMx8",
  "key11": "2wEKkMLPTmFa439LombSbJfQXEpbrVMByfynZk9aupaxAhXEEhWw3H9JxVi3UWtgSP5LUUo73WVaVRKy2Avux2rg",
  "key12": "2NZH8KdNe3bCMgjVqwVDs3zExyWtivkW8uebUCRKWjA7kuPCkuLhu3AkynhE11tdSncmrVeeYnEAPJdLyErRG3B",
  "key13": "56DYX45dQG6bKBYp9CybjvSyopE8FugautMZxYLErefnDVX7kcNSZ8cWQiK2bvcKYuJSQz6Jo3S3ScZnARamEimn",
  "key14": "5yry4sNaRueWQ3t1JWnbXVzR6H2nNmWwbhkvVwfeMStV8k38u1r6vyyLb9EMRiCsaki8oKCsoxw7b4K2dC4N2K3t",
  "key15": "26y4jJicyae26nTSB5x6k7Cr99XSN4TnHQxeus1nuTQKKgZTP2u6XbupxYweqkBCudZsYFcaLkfJJZHwsn4uKYET",
  "key16": "4JnsNpRbNX4gKtB7VVuPpk4n5dgP6mtXPcpLeoovBheFmUNGjYkG5fT29gNFtwsuenJ4LELzf65ENfiEw3jw9WrK",
  "key17": "3AkcPmw8CkDCxU8vGZbUFvu2bfJWMvTJUSUDaBAkgfrbg4wpdB2AprSiRR4W29dKVeKjSwr8m6njFmvNM61XSrdb",
  "key18": "oJmb2m7iAJJkaUrF7vqBgxC5wmnZ8n23Wtq2KH8CNQF4daLRyTkp4YrqzW5oC8qkyfhtugEiQHkcrEphKgLvmud",
  "key19": "5PY4qLhDxBEY7j1AzLkGRSvGkBxjZUEyDzWgBebUzgUTFQmqC4NPhav6ffEERvajGyUpbB9cNEkUJo6ZouEDWYEH",
  "key20": "MvMnZtER5oiSef2n6wGivqZz17wRMZAtUSL8CML1Zs1ZvAsAGou4v4RNpPeSBHqQS83mTLLXqBgLhqXLAxKJq9z",
  "key21": "3PNe2cuS1zFAAUkdXPjhWf17qaxkRg7TRzYbdtXTcFR5jrtUYLrQuAhEcjpWApZt2Tfnxk6aFAGwAWLX9xHaSsku",
  "key22": "WEpxbbWLN3zhBmyRbidFCWoGqVWqkE2xtFdtAxoTWF6B6c2KnyvFzhj6yNPNsi8eUpCdY2BBv5sPELtpqmsdZjR",
  "key23": "5bUnaygqvbx5NKidNZnN3PRo1wx3msRhBjQpNwDS5pQUpPSSbdNTwjnsE1rkib7pZ83GgGTvs819AcV6n5xciUA1",
  "key24": "5iL1vqy3ehDoB9bPPWoQbbWki8xXgL3vh9HtYLBU6yfdLtyixyvdGG3Bnq2nVg5qvtPRdVVhNzm7Fz8aRawcPeZx",
  "key25": "2hoJrtMEm6XbsVRbqo7cAZB16Zwosrqgs9rfqwfboAGvcWEEWCNfvo6JKFc47PRVqYmrX354Eqdga5wkz4ZoJCdo",
  "key26": "5pzYmJKarwD9TvFMNWyYbTrr2Bf4QG1DsRnoetQAaFEZro62dUxzTNytvgjvqgZVksq6oGn2xwmT2AkeNm6kZr56",
  "key27": "4588QkL1obJqFMGTsbQTyuYMZ2si4rn6Y9uaJxRymp5mH82rPBBpNL42QfWRyWDYkWgGGY6KrekCe19BufChNMUC",
  "key28": "5Dhu7bgwjhGbxbnQES7XS5aHbQis9efocyjuP64NDv9Qm7UqEqZwtBFPtG984qeRnVCufEm4nxmD1q9RQ5NByDtC",
  "key29": "4y6D4ogCgcfAQ5Ygdn11qLNJa2etEURQPJBdZAXRAh9hbhMdKe6gBpZ81CuTUytTyr185mYZP5fugUeoAQP1WTe6",
  "key30": "2ykhkR1611usMs8Fze61bkkdxTHDSgGTBPeBrYsQw8D7J4CutmdmYr5ZnQPQ4vFCC5ANxSAbunC458ngt8TXQHWP"
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
