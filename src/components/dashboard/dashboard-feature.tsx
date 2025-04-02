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
    "5n1ESzXctPu1WGbVjgE9ZVRxiAhD83YZ3BrWyFb3eBD3ESP9TDPWop41sfZRMGXsJqkZRDWgyiKGEBSAqXwDucL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRAaY7fBZL5fRSvMW7o98uZJYir2JjyoMQrse1rfxLdy2vvrCBR3aDLafCqqMKaFK94hwtzRdEWtCynsk6tNZMg",
  "key1": "2EdeSVV8tyCfjs6yRRThhvrUFHYNUkB2usEvLwcK1MuJFRAN1UEuvhqnRSszTbqApMraatucBhT1pe29TJQVhr1u",
  "key2": "zeyGBc53ZoBXLZcbUGVpAFq8trpdw6vfyREn9AcTd46EypZYDt32zoWwjaYnmbovrVdYHVzgBJYFuBYYnawwfR2",
  "key3": "4wD4a9iyHKKrz6muJBenB1mfxDUzEGz8YivD4WQrHNHq2GkXFtd7xrwCZzys7tE6PuwiSfcmCPj9j2v6v5xq1gY1",
  "key4": "5DsQs2QCmaEPifNTKdxfqeZmsB3THenR1gjsSue17pp3PjKtkpQu597Cs8MqMyD3zj84BKMfzni1dfXaaniEEyfi",
  "key5": "4JRWM7b7k7k9NNiT8TagmQxywb6gYHW2RqLUs1RnPrYSSh8FTuH6MZ8pwxSEjMCDfgVHvGww1kaE4hJ2e3pRsJqt",
  "key6": "4Ybz51AD2jV4JQAvKNgUChBPKDrEJhdZUj3ixAVonGgFDsirnjjcRG7Wh7Eqbs4pvogYoi9x9WQ7o1fjKPc49AeS",
  "key7": "2N3e66AMV5wWn7H2ZwVY7eaP6BeaC8onAb7us9zg5ZcRTH4HxQbDR4e8ruP75MHNkJB81u17qMmAP2LqKTEE6vbv",
  "key8": "4mHshcXfGhhQ5s2N6N4Jyv4WepLm8pZoWpUz5y5kSyfMW3WJkAuasbGQYeXesc9PRgLMNvA6ZgitweJJSZYkoRcm",
  "key9": "5pFJXRufiW36a4mEK32Sp7QptzY5EjaqDnuJMZcq6avmaSbc5Rx7zVk5RSu94XqrdXq2vUNhDpYHC3VJsqyXf128",
  "key10": "2JgBrYZyZPqVbya7HenSjtVWkhdgYJ24B8FZ9LHRwSKu4wqQsqtMxjtjrJ4PqnDj3PiH4u9Wgy4k2dhcC3NESVXE",
  "key11": "4qgwS378GFNsBtPWM5QfWomGtZPM2ixxLQDpuc7gEEiWZgoJVCwt26UrjP2tkJ46vNVaWqmg2KaMRGVYmMP1Ex69",
  "key12": "5VK8oMdekL7GXfAPJF5NPfxzZZJ8ZvCvwu7CPZrR4FEUVvJWza66JbhxfRVmNEYs6SooVWmUS9fusMHvPGxk2YjV",
  "key13": "61wt96n8rdoBWSpyt3rzeVVUpB1SRYWjL2Jhj68iekqpW4pUwG83hMHxs8Yczqxoq6P4xRgL44hV9RUaNSFu5qsQ",
  "key14": "qHDBrHWXm8wy6bZ5Q2WPjUB4HLX5YiwV3MQ3ERVbzuBPdL6hgjvYejCCQmspVZSN5u7P4gH7sGw3obgZ3BKWNw7",
  "key15": "5cZnQHyThmuRv2PGeLuGkbby7szr2PrAJRbdnFQRjPoCQ9Q3Vpg5CRk9LieAYwdtEehCYibiptq7auJdwQTEoALZ",
  "key16": "3pQKnDYvujWQ35AcNRWwk1n6sJ1MefpgPM4i9L2ad51YYGg4oSsWLVoBtL5H69QeE65bH9mgsRnZNVV9bzpLckZu",
  "key17": "5vZNkZMPA9iopZcsp6NRLnjAxTN4iVMvJtgqCCYnedLPdL2s3H54sKSkzrfeNThs5BB4EMWa7yiQVEV8ubRVQth7",
  "key18": "3Uo2pnUvFvuGiMDPjZsG6fTLwu22geeovitwqcmN3oDQZ9M4mf7P72Wf82kDJiPBvEAepqYmvWvWRRig9vs3hfY2",
  "key19": "3A8QjM1i71yyjdaoRvUQx4PAkfsBVYvvWDenxWAHsyKBeuZNTzGUcYJWWhCpWxGyLcb4UJxW6S9pX2VzxPxhRetd",
  "key20": "34CyPBaEqV19bfuF6t6yqBr4D314tBe6vvwzHR42t5r7h5yaTAtefGP2x9hRwKxEoLoq2H5aWUAkGL9Jm7ubjzn2",
  "key21": "598kbG4GG4fZX9HqqWjA2cxC7vXh39CNWp6NmCDVnKZciDaYpZBjwYWuykt3WFXxcSkDG36tyGaYwA5hcsJRoLCu",
  "key22": "WUroz7aiMFEFd3XV4Vzjw2pcw9Nk4fGf49yKk1pFL8JKJ3NtqWqY19uoYzEp2izNmTMWFPisCMc63Vn2sXSzYtF",
  "key23": "4bbSFHgAL6Fuc3gy3hGn37oYSSFbMY4JgkaAqU6R8kwRiSXYieEpHZkCvHTFSpE1JeWJVWpzhK4PbFgrtpU618tG",
  "key24": "49ywWygR6DHtbPwu72k3hK25V4HiP9ZSNwzYsGw79dmXHJ33tMhkxWKQvBueV5W6wGCS3vLByAtemzzsUZzjvKzY",
  "key25": "4y8PqBNZQLB7sJLPxjHefX2o5773tzjjQnvgKrbwn58E6dVAnkaEaY2uSST6TcvvjVUVMGbNV88ZSCL2XbAhzRiA",
  "key26": "481dyVnF1qwLawEqWXPCQNrLAk6MRDZVKvaVuRMRjSPCKT799CMG9yVMauoPoSMjkAdWNnKHBmcmfABNchjYqCf3",
  "key27": "4XjMoMJh2Y9idr5PbPfAhYvZTxDDx2u2DDsaGaN6XT3X7N8VwHRXp8pLaLtkL1vq2FXewMpFoTXPss3hGyjofBNd",
  "key28": "3qH2JkS1Pnvh2Mzz9s5ADXG4DiaqhtSp5ZBZDF14DHWYd14CH12BBntfTHemg1opv9t5zMC8iZxQCWDJEeJhRHWk",
  "key29": "2kr9mdEMi6vhtYMmEowfDVPpP9RzKriFYXCvs8HrWVdMyCFDDbB3rnkBKMFSCeENBPgZbvD235qjEatCS9L8fQH7",
  "key30": "CPMCskFgrVDBM9zRngM1x8bpXsk92LuMkGgHZauR9fzCeqKEUzswataLp5dVNGqZa7mwsFUsuNKYGZo3TVgDemG",
  "key31": "4q1S8zUcpwSChtWyb4p6cx7qfbm5KJn2D2b4zaB3ShGjgYM1Gcim3DWsLcGWm9drB4CqTeBrndxcA3YRu2M3NNVj",
  "key32": "RxUkqmqLKP4FNzyQ87oUhdj5bz8U5UdizXST2f3knTkRHMdZQX7of3q1MXnSNQFjHmSkGyB3aS7RNh7qpQWxBHe"
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
