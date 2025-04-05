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
    "47AqugFTz5crGeiVxuvCatSPuAENTaRPM3fMc5kP7aNSnDEPSHfXEoQQuP2nkrt96KgDqhDvfHfQtiv9bhbSLrL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qo2JvWyiivfboRpwLwVuQ1jRW1KJ2fKyBWz9wAhZfJBzkcvF1Sn1XgcxQkzdq7e4jzvLnQ8Cqp8qX6ku7iwNp4T",
  "key1": "2RyGxJRoiKmJiegMRsnr4Ap8L6Mp2eEzhm6BrF2fLUj4rYSCZ4ERJDRcq44Rnfq64iRbut6Y5gc18PahyqV9fn7t",
  "key2": "5rkNLNAggk81AWpUWHyyM27tSRiJhBFVbvXHUbYtH93gW6Qd4AcTDHGz25oP9WMbvTrXw6n2NqsNqRCQ9VBXaeZX",
  "key3": "2sE5EYy97dFDFZSH5ZS2R1QaA1Jt32hwLSiXZdCxAy7TZ98NP7ixUUfhNAf6RiUatjE3pdR9GZRSoD2gUQb8ktC6",
  "key4": "3EZnY6qdsCVdfVjp9y7bh6JqmwNcdYMsrjqK42Qtvz34fwrScpi3SLrdHWDCWVaMBYSiEpn5ZTfg6j4GLx36TWJv",
  "key5": "2wWmokW9T4NbcRVmnb2kZBE7LSx7Xmt5iq1he4paEajSNPoRvAgRAotfyjaxaC952f1GQfaYDvyrPcXC2YSg2npr",
  "key6": "3iwZGoRDQhZD33PqWMfNfQ7YryZ2EQeWSSeSML3UeiE1gKJxo37Xk75x2x6fJt8wuP4yP7xRFWszGRvdV481LkcW",
  "key7": "5rajzQ3k9VUxz4QEXxBceN4gPKqo1wjzCTkJmjePwh7dtMMizx1tWDr8cVCNMKwkeqBqFoq3CiVecyZFryPzH1hq",
  "key8": "41KXRJwG8NitezXKDgxjrNuaxLzYor6NR8ZtmqVptqFmScKCdhxdWfbxuS5kirqGpXvBe8Qu47utUKbSbfHGZJZ",
  "key9": "61AeCXCAZ6gQJTjt4oQ2p5YXVwrd2qkkYGjhdd7Zt2zp4HYFL7NAjgGMBJtdA8kkMSBQSVUEvuVJnRoDt9SF37b7",
  "key10": "3R6bPf3hWR2zRho7EsuH9d9eto3z4nc16h8hnWVXbSYHP4G1bpjRqTfW5hLThUPdvBhLsh7XcgdeYZayH7oF3GgZ",
  "key11": "2AoKzpoXg3QedPitnfgWymLC4M1NAGT153bkwTCwsjU1HcKdJMZrTjqkCxRi8JEFDMNym8hCSCuE5JFE6h5q4XWj",
  "key12": "Jta515xqPgcR95k3z9Qvkzrhb4RE5H1kN3mGMW5LuhG4xfbcMFD4TCH5h85N4en6NZkhVvxTsppP1RtqDWxMxgA",
  "key13": "22Siyt4sKRb88GrKsWoL4MLvnHN6wjW8amnZrswtyum9bt5qaecsRsGsY9ovK3r6e8Tf7yBkAo5EsuSEx3LH2qY3",
  "key14": "4RvZ3AZXmMUPcYJd3Yk3ndy9UdFWr5V9egy7NUFGctN77PHHhc3tpwqSFNmYMrnd6b6z7XkoegMXt2G4JPs4jyZE",
  "key15": "8szVZchFN9VKqYCVHJreFwcQjG9K5Cn6Tg2N17UR1CokFkCSVSfYm4X93ZR9Lj5TCGSmv6KQAgm5WhkfTbwXRyt",
  "key16": "RjAptaYpXRKDpu4ViMGtKodn4GpQdrzcSwJ6kyNtDDQCpQSyzS5F8WnDLRMkZsFEp5ctNgUho79LF5cXBfAJiEh",
  "key17": "3phxFJJZigCHQqxsJDmtC4RHtwCGgUh1Wtg8Mfv13Jn7XXAGaMjy2zpsJPRfgJeDqy2fPF8VxLE2yGSMcmz8wLuj",
  "key18": "3t226zoUt7N9u3m18c16PYhZbjtXxe3kCTJCK9xmjNER1po5Fvq4b23DBvUytMLgccpxiaVVs6HhtnKkkhNpNBbn",
  "key19": "9JjGnjBANhyBuZ4Tm5cb5pxQtLNcwEEjAHVrVTUBc4sychJTbnvzLYpTSnxFBoCxJhd7vtsc45GtyvrDSTRgsJd",
  "key20": "5cWR3DRduE1vJatRkXCpugaSb7Qhhd9WZR2f8pzFQAWwtWmMkTNwzhAPDh71qAwiva2iT5oqkPG3hwUCvTNcKQMt",
  "key21": "Ac8zfxEEx6vLijgQyzVZvztcs7NMFLMkNKDugNPfv8TSisUmorwuVyoRAmPaxKxaDGvsNJPvmx7CFLJzFGy9JAB",
  "key22": "3Z6BKWnsMRwcQmrTfLFyMCnVyZeiafZNPVpMyqfXiSJsCUn5egDVGDE7buRxtmv88r46B7zXcUuBfm72PUYb1yAo",
  "key23": "3CcuL7YJ6naG2DhDLbF1kRWwDdpd1jKEbNEU4kAGuCT9HpPpat56gbBUgZW3y1RVq6tmrhgGCzGQQBMLEuffYCRD",
  "key24": "33zHiiReLvbj4YMQv7evtWywDBpE8J1e8VG5ppkHBJvJpyRFRcRYdfiSxgq6gUJVotgAPkisvZB3TbmQbbjaoAPb",
  "key25": "48mSp7VrFnMH7EWhh3Pm6q782vG57u5hHPojAMGxukFrtE3VfnLQrrk5RmtvLUQy9auZNWLeCNybpzzwBgMr9DdW",
  "key26": "4bukNqMaZLuzvCwj2bpVJL3EvpsUmKsoPMBvLxXXcz6jM43TSQgw93zeuKU4ebxiNoxkJ54pdvvUYSvJosaxdGPj",
  "key27": "3CsisPFpUKoVNa64h6LdaBoqK4iW73XA8EGqJGzCNE3kvzpimJzLQPmnBbDeu9giMNmRHXnegG3oTEerqFsjagx4",
  "key28": "4pjGbguNXJBg9ewjinU7ePqksAdCKdSKdMKe6jhnZcXZPUgAJTeRiiVz4PmcMCXavDkK11NkTKyBihoyrmR8AodP"
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
