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
    "RADL8JG8xM1YVLC1mKjf495MUocvAkErFFsRKFtkXkK6HpJJ7aWLXcCXKHXVK4mNWKvevGLu7NCpxJ97RvffXLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjYa1smaXkzLKpKMNFoGLXK2TLketQHFVAGHvZ25HrBmfvqfV7m2Y6T2AHLtAyXu8kHmWoVmzPHeNBDqsy7yqPu",
  "key1": "5QJuDMjbMsPasCrm7sKd4kRk89zzvGpvGDWryUk1B2vu6QuqcdWZZD9fYU3DX1KEhLeUZ8PdPLGjFEZ4Hjn5y1io",
  "key2": "2MsrELsZF4Kfnuo9fFSL3Mk1qzycNzNJXnPtdJMGzr6G6UZ1xNeMmKzcFQaVdkxMUb6e3m9jr4rMvjM3p1TwMy2e",
  "key3": "22CbxiqfkQCSikN5WbpzsM6aY5PQfEuG9wZe3xKzFJMVPDzfrd1QSH57qaj5dy1sz1gCJEvJkUgYYv7SQpxFcxUR",
  "key4": "5euoSjE5uupR6JUsNJXi9pQSFr4NkwiEc8a3pTUzM5KQPjhUoJJX57i8se7HceXoqmDxSCjSAuArwkMnn6CbWhkf",
  "key5": "5ofrWuJGyBue5XFsHraBWCQGJ3d8RDTar853NqDS62gFee3tYb5iLTTmLgC6cceLZcHR95jW7DwTWck3To6hr2PF",
  "key6": "51aJx8o1MidgnWJHuojvzsH1iBVG66xfVVCNvriQtMwvB2vo9ZCKzBeoyyxjkEERNhYV5jh8FFhaoxDLSKTZv8cm",
  "key7": "66TqmSQUY2KgaPvhW7qE1jzQaUGtb8evKi66ab1Jgcodm8WKWscZD8kzGL8eQN4dbGeN6iKikxWKJoUR48UPMnbW",
  "key8": "3aAK9a7AfR8sx9nMjHDd8YXrDwi8hkB2ENvfbjsgKbb9rqwYosuiMZo79NBG5zmhmeiJBujZ9f6SJe9uqXSnchYo",
  "key9": "2KSG1YaB1aphtMBu4oYwnU3QJ4YEiNUoaPsBHoNZgEzDGPUyy1SUgzqtJftcuqC5STEvCJUSJLtPwWwhhehn4U9N",
  "key10": "5MkPYqZPzoxhtvjSmZVD2EwbVTWR3pyi8PGm3MAG388gokLcvNDe54HHB6BqVBhVbTUXnFHd3EJWFgu69emm5cqj",
  "key11": "1cXDkJ5nrcwJFMJesJtUsSSWSfxG8ZmFEEjapGgsMYMLNzAVGDYCtg1zCmqkAoVJghLNjvSXnTLHfyb7s3QUeBw",
  "key12": "5s9bcBsRg4euybyR9J3a6awhi5HGJWYrDfd7uZFjyN5PU7NDPwcoxe9L6jGDPM7tXHmDE6DYjevzRtttaLyNwJsY",
  "key13": "36AyJYqBtpvjPpJq32mHC8iaMyrvR6fCKw5QZeNapnBiUtEiGovKVKGKYEq2ptgUtSZPuwAxcJVbkUAsPeS4sfXN",
  "key14": "637fuRt5Qjz9wHpRS7TaFY7mHYmccbEW7pgGJmd2iHSSZVB8RUmSvfPowmtZwEfSTBDXKXuHGJTCmdRCe6r6wieP",
  "key15": "5Zdf2YFTu7Q7V7FfyxdvMWV7gqo4aaQXKpSj6ecPvALbpJRunsGwkzpKXCE6UTfLZZMa3WRr61WvZNW4QFJpEaTy",
  "key16": "5h1B7hR11m8BT1WuVAWaDJYzxxSKrQqFRcg5KsP9Rpbj1bLpDxfoxmLH1NiN5VfSdMfLbfHridWJbwh9mfs9eHHv",
  "key17": "3cddxEzJgPF9zzosvrxDZKtSPZ6Cmnz5x8CD8ETVYeBwbqhXAC5kJ9SAwWw7srwY9dhUkaojCkpG8QJrfG8bX3EG",
  "key18": "4qMbsz5Hw3cbqGkap474Y8pyZ2sHFM4HTj21UuUL8M2sQ7uLhT7CZk17G2aXpNkcv1o5vFgrnJgsTGqT5h9vkJGw",
  "key19": "4uqgBc7yscZEKsBCXudfwE8m3YFxjhxAdpfsB7smRYechSK2cJUVzkhVbcVm9kD4SPj9doNCZAWzYBeu9DKUqkfN",
  "key20": "55rFQmCNXisUi9fNbFKNH3KZJ2b2TeqQaQYvvBMaSjF6GcXy1mZskyL6z29h9mz2KQoNihZJhsbNCGKhe75nLpWr",
  "key21": "2hb5xDtMyTXxWQzBVZq6YL86yWNeMus9VUbdeyAuHVwvoiVMyMFCQbFtKGEGGNKabosc4CZFcZYuFCo9Kzsz4rqg",
  "key22": "48qmtcVT2iRLxRnKJ9dnHB3zLU6AehNHjZCnbwGuN4iB16oZuguiidgVkw6t8D8sbC7QTk6jc6DNm7qdsNiHcW1a",
  "key23": "2vJ1eMJQXp4oTFE2dszBz6FAsWQvkxx3BL78ZA7AQBnqHauLxrhn65aHcP26DQxd6H8P2YjNh3q7mdwF8A2Ub1vV",
  "key24": "4WXRfzZfJV4ZR7u4RFiVdQPG4iS8HWP2VVA8C2zHQvJy3AtdpX4BtotAHnwgq8KhvKjzVVYA18qfD82GmFZnwJkx",
  "key25": "3usnYfyfVNCUcuTH6gtNCb27MinR8FwYRFhGRRii8zggpPXUXZcAW99FBXUrrYF9LGWa3AviQZwRftdTmrhMbacH",
  "key26": "3aWafALEoPp33wDetVrbz3xsFYvqvsHQ7nGcu7HG89NzgunhrgtxwHGuMNgCTeQMPeAZSo5DwY8HD1ZiXmFnf4YB",
  "key27": "tAD7ZymiSohuZfvVcjSmVmtKpPEiz9RcJUimLSdbJTToBSfkr37zjtzupSNjGCdfLYULpVoQYS1uCcEkbhnc9RF",
  "key28": "HftajQKvZ3BX2EtiWDWapoeVpLYFuGDnwomLbdM2fh8GhtRbcMbt8aVAsRr61axHpSCYPnhSW1Q9EaqNz7EGYdA",
  "key29": "2BdjcrnCtZHu3fdpJmjPLBo3VoCBLdtX15xeVST6ZGysA2rExTcjELQLosnsGFMLeyYSQuwXWhqmn9K7phiFLLfB",
  "key30": "kZPEsdStuoJi6NG5KCuSdjYZEK6A8bVRSWJUjVjKMsBrkY3LaGhYjsiMSukPxx8RvWzB3eqCuZwyTbsoEeZDrWE",
  "key31": "4wko1DgfgFkV4C1SpnwgjqDNiq3kbJz1AjpTkzesCpt48ZrZG4UkUTnRawxJQKXYUCYUSXXKMpzQV67RviMPjkhZ",
  "key32": "3dzRGEivZjK5sspBcDjP2nD8a32SyanSip8kbUJfu9kJdSVvRcjrfag6LRCSurzHHynNSqVnviqa1nfeKgkWYa3L"
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
