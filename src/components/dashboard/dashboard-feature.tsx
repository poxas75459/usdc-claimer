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
    "3cfX29Zx4D2XpokUZCvqeJtefKeufUXKAGedTnEyei5VMNaWma6AKRQCJPQx4z8XfsZAAn4utwT1Uk5PxJrjksPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESbGAyyexW7T9b9Bh8T6sQcEtdpywLP7EsTPbEo9ZNCdiQFZtS339WxhG9n8mBm5yVSoatAiGARqEZo2bw5uXKa",
  "key1": "3wa92WSJBtevQUE8ngTk66s9wLTbxmghWMWf6wuMVfZWt8LF6TBzGqxF2Ti2xcW8Q5kMJc4XRYrxNYAZ6vZ6wsdY",
  "key2": "2RLudMzRBkBo7bVq1FRKqWTdSUJ7CE6tJeecTntqURhWcDaV5H92D2jhhWBbK3vJ87FaJpyCejSTf7uEke8e1GPp",
  "key3": "2CUcE4MPA4KG3WXphU3uH7wcAynUq7xNTXwgj1gKey1NzDhh6Q65kjJLZW3tu9zrSFwGukoR92c6yX11vYcURJBx",
  "key4": "3US3raPJMAMFeyRetdcbcbr7KQMVk2e699XxveiK1PocrMCnzACCrL3Hna2QxaHpJUeY7UsB8ckp5f26FwGn1N6t",
  "key5": "5q64mQ3hvQeyQ6bZx5N3TvzCAyeTpGYVy3boZnSYVH9HdCFPbsnuK8SuY7588AQHGdzDxKc5j2jrPEz5WoASE4CZ",
  "key6": "2K1pGQhaDoZcHEuhMMeapowLHmL2EPcbhQu4ukdYT1K2L9DCSWPiSfJQhzk7thDqEXrCtYeemnMbtyNkp679nfrj",
  "key7": "4F8gyqpC1JYi39vBxCYMMeXEDxpdT5bKGAgLYcavZZ3VQBzGzKgMLwRdyXrsB7TCbxcLfz1qtJUgUY35aWNajE4Y",
  "key8": "4Lq4r5CFfk2TQy4A1etVCLeFPCRhJodJX9VkgRd8SmkBqc76Y5rEtRx7ZWi9k1q3f2GvRgVcZF6ak8afoeEgZruH",
  "key9": "UPNqPhMiqD25sP59Nmp9NxnnvhH3uanywrXwg1Nx9qc94qccrH7h3tQws4hHuFQsrqKar5Woca84SnrgUSTLixs",
  "key10": "5Q96y3wEYQNMic36ykX2FaZMxUJuQWAKR6JjtCQDDwJMwU5J3KbTB7XJSdxPdwLNVmMS5eVyFW2BEorKUaQwvrJr",
  "key11": "3rp6d3sWyarxiby6vHyZdqLqzmYfZozBWVvruUBNXBx8WcAoVtSHkou8nFFLBWj8fa1Ym26wX9Z9FdKMiyNreqqT",
  "key12": "SRSX3b7us6wg1RW7BvBY7QWSbYbytA8FdkNW5rgHRYiRf4UGYjEjMCyyr5MTg2RruvPKnB4KAsRbUXyRiUUbBrS",
  "key13": "2YsiSpyguYPaynUpD543MNcXvWmasuHX6DtLGgXrCQhpuzUn1WqKmZv75zZWqsQJuhbc9fEnqQhsyVGqvq9vE7m9",
  "key14": "3qdbhwVVpihBbjPxf87DLWE8gNszBDiuwMPo95PYZs6JBqL5xYyEfJ8N89vPJr2BMSSk8yoB5zyHur6HaPiJEaCK",
  "key15": "4ZhY76hNGhM8AeMUSbrfi6X6CmPDKXdW35Fb7jUzuAods6qc2X63FUCLU5LmfmrB4o4vJJDT9i5Fe1TCvqwzqZnY",
  "key16": "3Z9v8nJVPMfquwxUoDgHKYx4QEshwxewtfkMsEeNBaGaKbARHpTz7vPi3my36ybHVQLTMZkg1gtE1WsvvzkbQSEH",
  "key17": "5BuLf5KULLmjii23k8MhbFyGWfbst9EdtUkoG1poUEfWNCdmXgfhzAnSFTWzqfXai18dxB35yKXP5WjfDL7zZ93j",
  "key18": "4XcYZtuSKLKGW4NBRXubudfRHh4MmtoFEtK7F2iCJBkUj8Ge2aUoRDChgN4DcGRYPToYUHd1qNC7MjguDKLhQ9Z7",
  "key19": "2ymLVLbgccdbFb6WaickNdAWahZyiinMH21j2birrXQvCWWUWpFSXc6TkfkrX43nto2YjWcPxskr8K8CqtsQk33K",
  "key20": "4bZiBZm41ApfxJ4RHEeekhi6BW4J8BkhrCqvfiF5QyeqLxuTbgAig11B91qsapnJiMUBuBerwPo3xdMTqekpe3sH",
  "key21": "2FkumDZikdsM8PSw85noAD9fmUQdX2HXBfaumEQLiFRzDJgQ8EVh32PGbFCyVgy73xjWbMZN9qdMmVNikFkX45nT",
  "key22": "3Scv8HnbDmDMjbyGzRn6kGhipPTtYPg8LzHgW1vkEyHWeHxUmcBQPRiwCNwZCT81tuWC69K3CHumN8cR4v3X2hE8",
  "key23": "3mMCHQnhBJ4CrskFKHTWzAHeSL8RyPKh7oKHeMVBbwtmWm6iRKbfn24FoePTDP3n9k8EX1JbudG9TLbwUTZ2nrBa",
  "key24": "34yH5aGD9r7YpWcrTxerKN3yUiPnPjCpReBPaeS2k8PFnwPvWwCtZyy3cMfbzdg3SCccmSa8k7CCD1gASvtX5puC",
  "key25": "2Z1x1cB7rva38t5H5QfDSmVkHdXVq5qUNPiyRtv6EhtehHAfthMQnmxxATVjuVf1WBqFHM7FP6qSh28m7FabXPBr",
  "key26": "218s4SZUW6xEn1QHPebovUQtWT3r5PCf2MxjaAYjeaL1BsL6veTPQMxNsKwwrVe7hnAmDQ9APshzZt96uvBn6FbY",
  "key27": "nuWJUHuKgd3wXeA3ZLkks9tpkY5mLHtb8cNQKBgVQeN5ofBnwETeJnRdnCkawoQUReHFTEMSZu5HuWYo5iKbqfk",
  "key28": "5cDwm964jFbdVYBmgDDvHPThukyiUoXDBg6bvrPJoqYNiHmzGSZNuHnyJgZ6ULmBwmWubqrJGkiykaQPEVc9YkZq",
  "key29": "S1nC253EnfMnpq1Y1FS6h8Pr8aXekXBQjxbQFCMvy3TbAwNrDdTLVLfHKuA5YnWSVs56jMaPh43RQG8N3MdjMjc",
  "key30": "37ki5hYeZS76j5m5XRnB3vLS2vpbq7qdL1rN3TRn34zSmDfpjiYegoawyuVAxkRtBTTdaKjq8agkmrKh7YCRvL4o",
  "key31": "4qExQXi1tzkJCcGrsF5tUQrTCd9XuVC9b3A5h7RwnuM3sRvf4D81Y6pmcXqhhbi3WFPeuHRA1mDyaMCQwPisnyYq",
  "key32": "5hFkciUvqM7otmy9r3LXyB1KTTwk4yTgotf7VBqeHBT78tpFaJdVU53Hi5LMEdYRHRFQfdB6SSmmfKEVAx3JNKBR",
  "key33": "5Ki17GvsMAPnvmdsYff5FdsgwYJSYyFfg8inBxQKKcqfTUoNfmddQ2RmGzcNYCRCfa9XZDNDywVoUhWuBjTbdTcE",
  "key34": "2jeXgU4iqoxdv8Y9ddvScjVsC6CDxo9szsXUAj6MKw5MVmtGoS6AneYVzqL8D5LN4kAgqwjx7PAgVzSZ6rh4H3m2",
  "key35": "3zE78kufoVhykFiqWWQkxcSKCkgFtD616LE1kJwMhZ2teW63NZTy8Lon2phHdhfV3skou7TPdce6MDm6CMvjtZBb",
  "key36": "4HiahV3hiEtBokTdkHyp7Kop8hfDHKo67b51FVeWa8EEaGWZMdLq5pToDB3xc7VMPGj3PpCaUF7wD9Z57oXxpBh8",
  "key37": "k4dx9EgmWk6dgMvRvn7DixBYrUNxCHrP666BSa2PaDE8aRkQhmmtYBis1xVFwWZuVdu8BFSum3AmTNUJqnp6pki",
  "key38": "2UhCR7dJkFLynyCzNMzjV7Kzt2in7dmg6o5gABn6acfn5TfUHW1GkwcjCWLAdk3MAgwdqoY6cWruwm5EYS3BXthd",
  "key39": "sXfdh97HDbsiqoBmzAbqNK1hU16TNKpgrxnCuZMzsoqiLCxRFrf8FhFuqjyFNq4NEeXvuG8XwAqvYD1Be46CLe9"
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
