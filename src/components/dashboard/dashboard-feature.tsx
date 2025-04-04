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
    "5gYUYaNcnTiqHoPquZbubdAgLNb7rM8hZrUQz4dxRTCo78ErnqGJ6mVnbWLN1f4EznepRgfMgo2pXV458oLfxaKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSxmwqJd1bpzwsXpo7RGpVqF7gxEAVBaNt2GVyJuDuibhYWSoGffUUMTqHY5ADdQpZbJ73AhD9CEySurHt1vsBu",
  "key1": "bqzjZ9JgbS5XmS73i2XG2zXbxyCVjdqHFZzGEUpmJxbhhYiBocR8QARR5Fa4yYupuWnfYucbxwTmuH6Keag7GY3",
  "key2": "4KuJMkYVM2FZHYXHHxSCFSFcBZ3h746agcVkAn3sg1UeKFyiHtgXse1fhBAxiyzPiNwSqkjwBsYjVF61tvxRfdp5",
  "key3": "2y1RFCzvRghLC3QLcZSThvavDmFWVGmkUUagUmvEKmxCHMHBSezGe9cBYcmqM4uxDY1hi2jy3VnVQDNaAXERLbx5",
  "key4": "2xhTB7J3cLnaqRWrTqkpST37iYc8rYSsDJnhYt39sqVBKFDGdWRxbJ31T4HBwyekJRqTkYmepUfB8D6cSRk8M1c6",
  "key5": "3hMnKusCE5J1TN21cHWWEyWt4sEEbXd486VDX5XH2yhLzbVqaB1fs8ojd7ap7pkkcjtM8xiv821Kk8814m2G9HpE",
  "key6": "Ka7EkRAtpW3ap8rgQdA2d2nfWBbpP4WiqBo97pUJiaQUsrbPUUmSW9TFpgvBB6bjN4QRHvPMdcnLJbiswsaALFL",
  "key7": "2oPzCYFYrecUiBGtYX3DTvLAcqgtwMTk5V1Guz22oWwkxyJAvbD68seGvr3v1x8VQE6FjgUXAAKMEA9nTjWXm6c4",
  "key8": "vJ2wM8XKBALtkcqBjoNgNZMwbtKz8Jv9vjCxGcrZEHmYt9hPbS1WJbe6gHaYdWhRFKvWKjfwxBNXD7X4ThVNUxp",
  "key9": "4R2mWHPSzRiyHg1fJTppLaR5Eye9aKMuBKtypxMyWAgbCFkrJJ7LatJGCyFzkFZouPEAdcb9hkZNujQFCKK7scEX",
  "key10": "3BYAUiZShdU27cvJdrkEQDrGCwDh9FXJAmBoVyrCnG54CaidWT5c4mzhsm9KoAxyPe8pMpySjJGiK4VmrrgHm3zR",
  "key11": "5osXfVHMeyxpE1UoFGWC7uGgETpKtzQNLp1MvYm7NhCkgXzbcYtVJePQTksgU963R1GRczktDX1tRf9NZ89RELi5",
  "key12": "WS2e9oUyHaLt7g7FX9X7oZhc84qtNcMKkYzE1ntc5MZehGjDNWGSnahoh41c5dn8s7ojh22v2weXEvnfuaQYhZW",
  "key13": "4GUnYxhfV48i4rThQztjX8d6N1zm5Zvh9BW4BBgVFZFJzUmLoYXFuSsLQji8B6fzHrS81EDjcZF3YnwCEe6f5rif",
  "key14": "2RhEB9ymNUbAKcJyEQX4LCbScn3XHUvHXUciNmu2bBwPvya2RYR94tvHqx3V9sgVDDWnyGMh4gBekdpGbfm7LBmk",
  "key15": "2dSJP8fNE4iqzXfexWf1aGJbxDHBWtLzmp7bjzDeoC8CU4fLad51twvPufcyyN9myxSFxVP19aTDMuLdiBQj8qdy",
  "key16": "rRm2aYtBCvfgfxhvXGwtdC3cSuLodbuctV7o6x4vFeJ8QyLy2Kf3EEVdC8FeMw6kvdZ1k3Sq5hNwS6yRospJNhV",
  "key17": "2tp9jUq9DmSPYg5FKux7PptDcUQS1HjZMatrar6TkwTUV5g7wfdS3x1WVRxVqz8cK1M6HLNN6x6SyAxRLdevrZds",
  "key18": "atMzuZLLGY5fBPHgdoDHmUUN1gsW7xJyJcHG4phXJYBTALuCpRsLfBdDFQWfcA2wM99FUbogKXZNp47JZNXZejp",
  "key19": "5nk2bJufdEUshm5L5b77gH8TFWBfAHLAtf4U7bWogQQHBTpbLfd2Xt7oBjRBkwyrSJiqxcy2kJsazcreb1k4rw6B",
  "key20": "65zAgW3uGJwywLdsYa5AFrgBtjobq6Z9Ss7Q59jbazhJbqRyTF6yNtEFh3pchuqC8rztZJXVVbM58HWNDX1zkNrR",
  "key21": "5fPNC6VJ9P5XFFxjE8kPmzopwSpsw9Dr1h9DEUMxFi5cPdoicBtyXGnKbkX3iipwKH8Hr3UgGeKuYczFc87h3T5x",
  "key22": "2bkDt6kTAYojgvEiYvYi61AdKGXR8rvmD7rRqXKgtFJ3duHerWi92jaZiYNcq86DedsSCx47LinoBjyJK7GXwAb7",
  "key23": "4gtcjvVinXVTtHtPkVVyzvKrLxz4iiWzkcHYDAn1fJ6jZq5QYC9w8vG9MAHmmk2NtU3BLYVZqXhJs2yb4qWb7XBV",
  "key24": "2eqv9kWuNkGSAprs2atywkeRLJE6kdVAGeJB9pdowWcnLqCrnG3fGB7yzasPCvVnMff9xEGTLjxMJADE2WNsCy7G",
  "key25": "4totkPKZKqhE9QrqtzEp7pCHRhAvYH8JMQ77uk8mNoEVbsn3SAawHjZk6jWYxocGc58Jj7sFHXiRThw4NQspzFXk",
  "key26": "35GmkQbdsrAPhk9qfUBZsKkW6PHoGsmvPg9yfqBdM338dfwWTyvDd6qvpb6LFVvRuE1j8MF7Efyhb5RtvmXoMLPC",
  "key27": "2YT12AZF6fkiA6GyBUqgZsqZZHb87pWVGSsTkjW3fopUz3KkszkmfE4rFQRHoUo23qX4jX4JCij2beczkMs7PJ8i"
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
