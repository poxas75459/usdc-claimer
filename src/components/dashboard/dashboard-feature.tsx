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
    "4vPbyqCW4aiBsdPEv9cCBSMmZGqsnXPfpY3qnoB7fYX8AcKohJNLXQZyGGZoYQDH2oU4KtvVHxBTLiLufmDT89De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7MbXHMRYhEMt2a43XdvjUU11usVL78wTXtPci6BTEdaCdQ64AgA61YUk53tKaMR9BdVouUy2Dt9vqZGUDv3hdE",
  "key1": "2eQhVq8Zbb8tojjpznGPi27W9Mp4aimG2XqmZ3jiHHMeXnA9JA84shh4oBTLyhaL14EWEysoNs8Fg3Xeqjoap5BP",
  "key2": "5wHDoPGGncf7vjijHJRqpGVmtXBi65kqVg3p6c7TA6HdSmQMrFRg8ZZJLujsuJw5bfbfWWx5GjxmeoSMp5JFGeJ3",
  "key3": "3nfTmwjxtGHRxeZenC8R2W2C3eEvohY6o9WMgHo4Qq5H8RtS6BY9t1es9yPkS27yNh3qMza2seYKGnjejRyNUxcV",
  "key4": "3iXW4rHAaR3NkfVqfiGDFWQa5NvG4R86PoxXs5f9EfomYC6uu1xmPTjfKDdjXHGZR4giivemSpvsatzgQhovXUmc",
  "key5": "2KSRrZcX5W3jrQxLjm3kxFkrjo9fBnv1FBmMvTXGEjQPnfuEd1aq7ejhF3BwQ9Y1BJ8zSo8wSQ1NemYhQ32kGRJk",
  "key6": "3Z3znDC4oiJ2BNJuk5CjWfu2tQ13abJF6hbfyae36S7LBZtARhQnJWPQ9j8B4DFQYBVqRH6LUB1A6kpBhKtZfnPs",
  "key7": "2atKf4PQc9kjBGR1omRxUbZktkQEKczZNt1zzy32iXkwPqHPYwy11wA4MQQJDpa1XBpRoKeKUkSrTKkKu13ZDugA",
  "key8": "2vwcwngbUa7QbKPdNg7RNzW7gectsreo6dtbNZZY2qTEhucqJmWjpgb8BM6LrVsaHcERefzXg99NKzRbkb1bm6hA",
  "key9": "2HwhfZqYvFFdtygq5ctK12ntVMjnejPt5vvwDSKwipZ6To9iboJV7c1obGdaHXfUbfdEhLvpWrFYFxJziRZVyqNi",
  "key10": "5KQwaQ9m9sGJwHut7KgiSPqSSAWPPdx7Whcucf67aotbYkxoMDhUEbhdGXXQzsizwmTYTR1jRU1f3b4LQMaJqoey",
  "key11": "3AeSPtD5gx2Pb3Uvvi1rKe6sSsVMy7chZV1tzAPwRm7UaL4xg6avzTyPMGSNVaowKVVN45E1PtLmJRATnVp3jZYG",
  "key12": "5EPim9wCnKNKKthjXy5F7KXbDwhCS6gZJ2TA6sMD2NzGhYMVC3ZpbKZ9S8wKosfTFhURShALdfcGNzRk1Wcabxq7",
  "key13": "PjrX5HnrUaXV12QQKGwzJBG2xBRYTk4BPKLRRFMGLrMBdYMa3BurRA1Kr9xD1axLYLruKQe9RautnycgPBkQfGE",
  "key14": "2gsKPptynfh4RWCF9Tr7uLnX6VsN3rQvoN1DmwLZugyPaRreBdr4WcBRhW97LV8cPGJKW7jHBRTh3ZS73c1tssC7",
  "key15": "2ZDRHpBQgpwXLav1YcaihZpqcVuJFsKLdMyzT6AH57tt5esTAYYdbFcUL6RZaRvq5kdBP7YvFyJzcEGQvbLEg9hG",
  "key16": "aQWNB8oceHjbfGZQgoHdcR3qabqq9YZknp6A13hFjJjmaK7NLUxxSmzRs5XGZb6pkAwVfgQU1ekc2VtJZFVbCKa",
  "key17": "42RyiinYUhsgD3kbBCtttgy4ifqMkCuCcxvVSsGNaL9fSUS9kowR84bLM7u8EHgDYnaixAy2d4oShJNZkSHGvSSY",
  "key18": "61199cA8snKqmscsjxEDDieFY1D1vmdWbtua8x1bfpWRv3JdoacLRaCRTmCxXbvHsYgKBrmEWj2CM5kLxjfv1cci",
  "key19": "4Ra9dq1DGSnLRpiVCN5vbdHbqLKUnFwns3SL1jFpuzmWMWJi7XJasuf8cvVgMeygNkuZ1eqbfv53UQ7qVan7PDJT",
  "key20": "4ZV3814EqjzQcdkLvE9C6n6LkkBULEkMct3Z4YaHF6EosNUABGV5CpPMhn2hGLBLSx5jABAcEi4dyPX1KrYSwUfn",
  "key21": "4qz5Rxi5CDYThfTtX1aHLCyUVoeUou6ESy6Wh2GNDsxP5ouhiWRmD8B4BnqkQKEq89FjJmVTkLdPwPS5FK255sAs",
  "key22": "5HP3eK8CBJCHmNYgRymk5uFta5XCxDhRmtw9svQAEShZ4HECER6xE55GbHXNF5QC8Fcd5WAt45GKkK2M1SdH2wP3",
  "key23": "5FypUa1h88V34VwtFN69kUJ8ByFgbd5hzQH8vTJV8qvcqTQGeGdhCRKHxbsWASBxwbJ1nY3tvyDRX5qeJjQ5gy51",
  "key24": "2NstZK2KWA9jnjMJaj68Y4CbK5YXoHkurqKw8H4qMK4vegfpHqaArUwvkppJmLc1VAzPnCgTaYbaXnkSchNVwwuy",
  "key25": "8zCtWgEpGyTK66EqGEw42zDcgoE75K3mt7eo3E3JHEgG7vVNztodVmCMVmezfZ1QepK3xYyGLHsqvbsvUApFcVp",
  "key26": "RrsgMsabH9xNpCz4WfhNRv3hPcJr3XHpkpAQ2Yt4wSLPLZcPnHcndiRBnAK6cVRGqGF7QV9GhDzkej423XAXPmS",
  "key27": "2cKV7QaaY1J8pGhproPXpK6vnZV4mDvSnbJoMhDKRbkNEkuGBK3Qu49mqdrw6vDc5UcV8VPMJt2uvh2sCNF5ugRP",
  "key28": "5KNFX6HrtXPvXkuxh9qFJgEnQ9fe6ozeSGsYHbUfg2gXZvEDMkq8ugP3oAr1uNqQBcZbHgCp9en6Bd9NTyj9KYTj",
  "key29": "127MmaShkzFYCEmSLKHMEDsLGsVuXkXUjAKW8EU66erwSNwYM1PuKtbvWJZp8vNwh2FA8AoT6amacDG964nBBXVS",
  "key30": "5GEY5Eqy36czgXj7D37kAn7fnQvFj8qoBDK5knDKyopECfdezpf66S58CvGecbm9P1PzWBEa3252WVSys7GYFXo3",
  "key31": "28Z1PakXBaWzRFhpVgDZcdhN65dDCKtifcVNuhRz3LsL9RGGXtp9bg8fsQUhX8WgUevSzedHHSzDPyYzDgEwRCmT",
  "key32": "4tVDeCZYAVoDs41apvqe9xMST8Ma2Ly56LruNWUKm8cJc4XLF711QGk2oA8esKmqfAzeWmsuwUdHB2sF6XwHApui"
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
