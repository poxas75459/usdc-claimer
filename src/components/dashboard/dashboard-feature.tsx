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
    "5tJ5QEqWgvTGGF7jh1qj5apHV3SjQttXQcMto9FiW491rtpAEbsrAfRH8thzHmAh9je6u8niEAb1TwJPMayPVoGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5qUPm15Vbfbmnz9VYJz8X5S5XjvnULr69AvbjVGU9XZ4zdEdXrekc29itQX7jjzc6SigyfaMDkAkMPw58gLoXa",
  "key1": "5SyYB1Pk2RhtkFSciE5tgbAMpoDF22a5jaY6xP6TfLG3CSsXN6EgaNAt5sjipbZPtVEuBpLBKfJrPG2C66M9xpTu",
  "key2": "3fD9xRDYCQDs4xzSXNefdsXMwDePxHWX6pxKcwqnG4ZDkMpqfjugCZ49hQPhVy4DCJ6NuWKXQr7CEq6vebAi9HHQ",
  "key3": "5fpaCdYB1TRiw8XSPtWg61uLqVrTaALR87f1WA91rvSeFw1Xg5icy4aHaoZ8BHtnaT3S379ZFU3NP4XM99dikCKC",
  "key4": "onjz9me8ac31d8g8cJhW9iN2t3kZboETqifhqqoynLsbERcWfUmnuhf7LY32tYDQy5ESRXh2oH5CyuXWagJPG8g",
  "key5": "23Hj7CUnBH1LG8fE9AbgdsjHdta5FhkypaKJwX44NRVSZwM2g2bRcR5ZnpVq4ZsUhyLf6rbkMBR72nBrCbTRuTMA",
  "key6": "2yBLTM4tCmxpc6mpXS3ufPqW3q94YvkXcgdhqJqDiFGL1bGibpMPvb6DyCCV5qST76Y2Hm5YB89nB36BpR1ubw7X",
  "key7": "42EbcQkSSPYLgruqcgmnBPLhTb5hbyzeqTTGKaNudcDJgUuW6e3hREGsf3s4hT1wcDXCNTpBvW45xQKrS3rSGEio",
  "key8": "3SndNSNbpKvcrEVFd6PiRDU5xUj74gRMJaXAk5S4tfnFKxYKpQjb6yRfJ7CCY3vtnshH9AYGZXd5keBvfK1WsKxz",
  "key9": "4EZnvxY7UxeoqhmA3D4Qct1mch7Wo4jSSBapiwaDjc5j8qfKZCsR86dHTBwkTeab8Cmu246gMwK9aoeGoQRYmEY1",
  "key10": "2Xmnbk3S9dpnUKzJLxhBZfsNXkAsFtGQ5BYMUezAfZouVk6SnXhjHTKQn13MkEMSzZC1XXr2mgi38goN5iMuXcYs",
  "key11": "2F745FNYc7BNpoSZJwkSGR6mQobusQieX6wzcUm9CybhN5aVNxNSg4X3wZps5xBb3pPiDaBrmGkV7sNfyd9TeQPG",
  "key12": "mHkxv5wyhCMS8qUSbMSQcM4nEdXAiBpLRGJ2uSQyLtFfUgzX1oAehpjmtWMg3c2ZN1fdxCziSZeQq5iWvfDe4d6",
  "key13": "62gMe1US93pyfF4jFv1Z6VqznEmADNBs8qZZUHq4RXJR7FQHZt2AXcBkggkDniSHBHTgJQPFoWVf89vMQTPcwxWD",
  "key14": "4RnpErXZaBgCJnjm9PqsbLZK2yNzEJEvLS3JysA7oYLz2JVmuWMBY9JPoKsWkuSwwFh45JTGLLC5uegs3UR4ePeG",
  "key15": "3emBp6SUwQ1GGnZctu17KSWFvgXx5UQzhy6iZmb7dEZGzAb9hQNBoPeCJQqarBibrdKkhK8pGVpvMuHrdbopTeCZ",
  "key16": "442Q6S6Mek38Jk2hsSmSBr8JFU3zGnZipQPvA6QV2T7wDDeHG8PpqT6YfFwq2qe5jHWFwyCofBLRCAnmyafoVNtQ",
  "key17": "31PXQBDCcp34RHBvkLCqDpa5KJ4YRzyDcRt9nQ9LGUVpM43DGG7euuYNCxkuZcEzzKHKhj2ZGuRZYg4riyHeVNtN",
  "key18": "3FVUTWfVCKaDUDbJ78pA8MM9BcKbvfBYWL4jqFRQeocFh8RXpwCzdGdAUq7ocmjnitp1n1pVmJkyW36cb7hVHLn",
  "key19": "3pQ7GpvmuPqS9X34TC4d8YTUUm6UEJ36mYPxmBmZvgePEBWdYgPh2SD7qxrQsEv3iX3WV3Nk772PZ9WJBEe6dVfo",
  "key20": "jUsttixYPmxWode2TgNFJoKB6NawdqGjs6VAfps5eu48XUihx7G5eF9whpwC6fYQki9MktBZC5mJf9NnAu5wV9W",
  "key21": "5bjD7DD9kbSPVAJSjpLw9HqPs4jeFXaWCsUPJo5t6Gp2PnmjCQzd5YMVvHho5My4fdYHgPz2anT1ejEwmhTdeTwA",
  "key22": "5G3b88KtFyjpVuvDtRstGCkT18uKWtfFJhK2E67QfTv6R2S5j9Ges7VJMXGpkXQnQjK8pn5Tt89xDA15pRiCtzST",
  "key23": "4XsHxbwSuNykQZPUBF9dEjJ8JpEKJDR5vzQ1Q2kZ9Csk5iPAKAJEXMB8SjdxejwHSrYCFpP5Tttti7pVk62KGcQR",
  "key24": "kxQqyZBRQwom8mUeYmURA9gGn1VkJQSQzPyrFYZWTyDePsc2Y2jMqm6qvftdy4zXtHto6prvJJeedttbvWPz1M5",
  "key25": "3XkZFCRgXkNZDHLAFdVbFeV3TYgh8Apua53ynuPzsenPKW3eZV8xvnd6EACAScTw9qKPGifHJsf7qAN13gq4Ptpt",
  "key26": "N6oBA4Jb8962ZuZq5CeJzGf44PZKRb8b8o9DU2oixWQ6VhNrjfwTMBuFh76WDu1W4UqgKWZjhwgoHKtUdrJwq7W"
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
