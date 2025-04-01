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
    "4wUkBL79FqJetczvD12hA3V5zr4AHxMsnWfxmDAUp987EKUn82LENtdLHTNDk6EZExJ9LUn4GP2Mw9d6BU19FAqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUWGyjiy5xnc3qd2n7q43E73wEP9UgkSSXM7Wb46jt7b4ncXtR66KwEsuWnCLfPns7RhZCKPH9wSPBQjsrDRBT4",
  "key1": "3ruQR2qgVibbuYVY6icwFfeWVdcdjfWPmUQmxLFXyb7umeBuRUj6BvEX7ssq7gyxxun9xpoRWVLKheqzVmRUfNWr",
  "key2": "48g1RQmE9diekvACkc4gEjiwdASR9359nsZCb4ioCNpBZxCXs5mS2LtkrpTM1wG8cWMJA6WAQ7vYcoUZMb78ArVx",
  "key3": "2F38w6zMBjh31cvmEhMFWdeQLNbw5XahPFgxYbQ1qxRpfwLZV1eeoNXHhoGYJr8etLA884TiXM78fZreYLnAxj89",
  "key4": "5BJ69BhMrdG7WXjWv6RhPNp3YsMgWWrga6VYVSEQp9xFr7HTNjZoUHdBmhVbF13PjYoGSCwxXwLx7mqzjBF7bESw",
  "key5": "d2rMnqFaUsXJDXVRwJz7hDsBfPWL5ypqSc83T58wjan4sC3MkT1LjAf12NR8jmknB5DCUTMFxdZi7Ry9EE2NPU7",
  "key6": "2woD9ZSswM8YuHbaB4Ehiy9GuLiUFdkUqnWtzYLQe6t21vBGrYL1RBKoNEskuqchP4BUJsGPMXzKjWo5A5e9B2Hi",
  "key7": "5ejtpi7W8to4optBZNgJSKsxkkZ6LLkpFu64ao9qwAKwQrVPCfcyPVPb3SQhz8ZsGpteo6M6TdCcEC82MWcV6xmG",
  "key8": "29LuLGjUf8SQ7Tt3guaFS6ULWpbafKcoqsWXi4ZAXUvZSS8NaRh8j6P5sDFZPXgUrhYYpTXjv7QWXWWxXaQVG65q",
  "key9": "dbjES9jXNo85VMVUZWxxPE3zGEtFK3s14jAfZyPV1ZV3HNSZpTcZqiN3q9VpBbhRzJmuqHpNS6LzargwLWqPwJu",
  "key10": "272MKMXtBhcWbLZKVRVmCBe17QMxkFr8Kvf6TtF1CZYqq59wHkq6gXhUqPeMLcbepEE8bdCsDio4AQRwSptDvNdh",
  "key11": "U7UeTM1UPC9QuvWXJsaR6yfHiQgsS8xXnPbjmLs3CgFCosAARXH2Y7bapkXFL86Bb6un6pJcyqf8mF9p9dYRhzu",
  "key12": "2N6RoKcFUko2toPVB54E2koqgRNZeKamxBXi4NjZuJtE9vYxioxKYes2Pq2YRVnbXFNdwUqcsmT7c9SnD4Y1w9Ma",
  "key13": "4Woh24Ckm1Up8wQXFAMK9zQN5BhnhrHZKRZbNAym3PW2L5gadeyD4DazQaD46tsNPUqD861yZjmV8Y1xegnw8TtG",
  "key14": "3ZpUA9pBRgrxwzHUDtWXMDkMMztbdornnViA9ugUpGMhbE6ktgQZyESzmpKJryWMpMDmjDDQEzM3RK5zrK9BzLHm",
  "key15": "3XzBFh4LhKakLoccdNyXNTXqgPUrPXRT7FN7rGKZgdgsCB2EUps31yVPRp2vUzrLyMDKfaxLJM4gG8hSMw97GT4o",
  "key16": "49syfcxeZzQy8tLMBDzFWuJFbeucjgLKCHzk2ShP97znfjRsgZLsQyULyQTde9mVngLFN3KDXT5guZUKnWFRjhr2",
  "key17": "5uZ7dovoEypmpfim2eyqYxpxWarvcp8zjiNRjBM8XEcqLtB93cTwth65oYaPDUULES68eVks5gHEELPHGqhAFWgF",
  "key18": "5rkbfSVZksbrAJAob44soojYdNeFWvrjhiD4M89yd9BMtGKSogwcfz93LqbDVKE5qyvE8cvwMqN4aAm6X8ds17a6",
  "key19": "2kJPiBCUj4e1YwBte2d98QcJUk1CmH44KRqbQov8NhA4XngTjnzWRBpC6WiSUcKT8yaGXUazyU4bDCn6M5kDFuUu",
  "key20": "5GB2V5PLvqGBKW4LZ2V9YFaLqoGm7Lp3FBV4uQ4wBSYXip9sofEZykVMeD1dTk8VuMHq9z2fi1TBbtag8HGbPBBx",
  "key21": "xuvpkqiNFKui9WSNfq8u2B5WVoQ28Tj8ctQak9tvV4Jqs3DUFQ4nS59gAHtRwMirZNE9FuVRxWCXjgdpUY9z1Hd",
  "key22": "BDihFK9mRF8ZP7x9HAcSaEP5v8QkwVn5gQhKFtbFkzLezoLdxT7J7ymoFFR21aLhXyT4nGgkNCaBEw7ZbkhANSy",
  "key23": "3ikd6ciALXap8TqfRP5z7dHAxCmKkstgHUQSJiQxfpXPS683K82wYAP1JAgiLQ9WLxJU9Zbp7egE82gKnNBdnQkd",
  "key24": "3g8UEzBWwVwUbnGYzBDD8KdZs1eLLrVUb3EMGoAV1vBdpGihoDnBhFR9Lf27cHq5cAKUJd6e58VHkVYcg6t7GZtm",
  "key25": "2op1JAnc93dELEzTpsyjhkt6Bor48dBpgwEqLJM68SJu4sYEyr4b2JrqnGiXuo414hiJUxRm56uAKS2ySNpCmnUG",
  "key26": "27cv22uWdEXFSmDCaCmemPR2iC1S6HeMGt1bJkQk4YitAvAM9423ozEDhfPiXPPXT1N33orkdm7wF1zZXoXAD5Lp",
  "key27": "3gzyDhRGyR3ud74yiiB3rAm1iihVDR2N6H5a9juo31f33uXbUzPAqd5dtC9jHpuCbfUdE591bo1Skq5c3ZpHx7rx",
  "key28": "StAfQS1fJCcmn7C2AhMbHZdMgbqFw9aqWHbgFgniHGRdkCEySWF2PcoXvZMPD1MD9Mqs8aHKEx7tEjpqXPoSwqX",
  "key29": "3QmFhSur9p1kstUXToD192tMwcgaaMTVzQuqH3pgqCajFqrBNvGTqYhACmVjkK1fuF5rnNLPyv2T2tbVHWiQruYA",
  "key30": "5Jp6BCd6fCCvoPS4ucXQj4KsGK9KALGMGqEoCrCNXcgeR7C6XVW3mfxZ6gDc1PKrVYjWnmH5xcuJAJwZUYbJmW6D",
  "key31": "5SKaiUxdp7x81M77nMftbMRZDnE5EyCTTHhZ1EyJDi4vF51BuLJjcNQj9sFiVgKr78hFpdRWxkvB27ufLMt77fA5",
  "key32": "bjVavvNkWJ41gCQhSFCsFSzWpaoUTA7ocbEMJSaG7uz8ztjvsvUgezh5c9fBKAvnWmZDmvsEvWREivx4e7ebZqt",
  "key33": "285gCwuWhr4zSjtaxjn7tY5mFhYNY8jfrjr7AurpNhWPaMPRis1UFxBqSkXetGqEvjm9iipU6GVBaoiWf4KX1Sz3",
  "key34": "4jj95QaTftwpDNKagiEFMA8jvwf2A2GeaV9G8gRvN6pXraFMrhhYaHvooPkpdgPhH4eQVC63oCzziSz3Ja933W4o",
  "key35": "Q81iPaGssJut2G3UKfe94x1PtRTwGvZq8FZaj2FWSRWbcAyC617RFHB8ZcNgJhWMNpLRpX9APP7q8Vg8X6zNsyu",
  "key36": "5tzotvqkzTUobCF2bgrzuWsh3oUDzXhEaYDvwyXF5rkywgyvnPx5Y6JR4Y4Y9oLi1Xq2aXftFmu4eyW8ovV4HPyg",
  "key37": "5FDqqbHsSzAW1EW5q3FHV9JV1S4DJvZ5nLy9MZVAeCZkJto6MHdkVDH4zMJZjR2jGA4Uk1hfmT9M9QizZoJZyCjc",
  "key38": "3qaPhawYUbuNvwvPsvxLFdBKgXDnLPbC6crkB764ncWhBarovTH2VNoajJvZLWqrVnbDu7XWX8sX7ek2FePRPgee",
  "key39": "642qhrCAT2vxxdJtHaHLWT28C9umzYqtjcmPe26rHE6nxQtyqBZv8vp2wooY4wTyX3dLqG9z3zqnoTfBp7WebuBA",
  "key40": "5MSdLXischs5d6taEoBoeZceXfku25RkeoRwfLiooMJyNe6imBuNEWB1UNibEhkJU8xXzuXvJYQnpwPpuhN48GGG",
  "key41": "2sbiYpzg8kARfZwnuZGquBoHBPNwsMsaUpWHewo3jg2NTLvoyU41wBbntg2ZnFRaAZAHSHtMXtn6AFiZGKFK27mZ",
  "key42": "eaNFFPfcwLX7hMP2nJ4YBd22r7BnSRZmp6rG9zwiYSmYmR9Q9agTUE5uQZau1rJLpsrrzkemGcLv1EEKtgpairH",
  "key43": "3ochkTQwi6MkQUp522eJXi2QNxEr7uyrrwti4obckstWagZVkNTwN93j4WQdGdk8Xjjxd6kdkUxwr5wACvbPGogs",
  "key44": "5BqCspSEKR52AVhA5zuQ4efS1jeBBqygvzQXFqWRxE2Ta2Eq3YSECtkUmUYxbsHugoed7gGwCUBdNrm6AsCuvQbB"
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
