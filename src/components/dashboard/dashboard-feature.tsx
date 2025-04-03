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
    "2dXd7dqSVVUemcTQdzrgGEytrsbobwpbnNromUwhvnr2t4Gudi6jPhqkdgpgPEphFabtwm3mjydT3rWuKhvjFUL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yHDK8SgeQKuhyu2FeYnGRJJde4gFLyt8Zy6ypVT8Uyzzpqb4YcfqRpryoP7ebZzZRh49N8bhpZX9kqV2X8Pyxe",
  "key1": "4ZVjtmBmtpYSNnrRQBL9Gs6TXgbEWr17xsCCoHCwg9LTA4UedznvmrNeBKaPwhLGEoCSwsaUakv82eNZHeB8LNZD",
  "key2": "41UFi17Qj3UMuTeMdCYtHjxhfUqwk48mXd9XihsGfyt3oCHaU26BVbAeBChv4tEjKimMMoFpTBfeBWfFHEFRLZ2P",
  "key3": "2xBM8m2EkwjkN1sewqZAVg1PtHBYrk9PwwEMwC1A8wXK59a2svLs3DpbJWygxAi4Xq2sH8Unpy3hu45o3DYQqzTc",
  "key4": "128tcTwKbDSGzFkcMByQ1XUABDMEhTEzDfZN1S6yWgBcLSNBWBfE4UoHNLz1qyY8aYVZB4TnJmGRnLMwRqHAkqk6",
  "key5": "3o72i17DpkNCmmGHAnmoNhPxdGczZKh6zLnpL2sdHxffJGHUm3QFbD2EvuGYigLRGYMrBWr9Q5RciZiR7LjrWg6R",
  "key6": "2cutQZk8C6fojagvQELu1QcNB3pNvXbhpaYrHpYdQo1hUrGf1RWdr2sS2eYVTqJuWzCRCM9F9DjM2YciND4q6ApE",
  "key7": "2vj5sbUnAqNCYH98aeHsmG4Lfwc5vAokDjxCdo2pr2KyrQFR3P5WS1BsaUxxkfXobLXhBWjUHd5cXLZ1Xb9J7rMv",
  "key8": "28fCU7GQKbYFLr2gthDeUSDQmVkMv1Ybsqw99r7yY3X5Qq1ssXNNt3DkrVdqFryhTDmS3rLsQm7z19N8DqSxZBjU",
  "key9": "2g97g9117CbUBRwfeHzPVVqXnpZ5JUi5Anw2y2B21SxzBSQi3vcs4uV47JCXArnsDG6FB9K9oq7e8mPm6DLJaPe7",
  "key10": "2BtKhYwR5s7LyaujsRFN1SQcJhtEyyExi8e26Rqdb5GBiFZbmge7vx5GWJQBg4L8vsgnsFVqPEt5H3PNP1p7DSXj",
  "key11": "4CcLcHm4dsu48f9PpR91xhqWiSvLPr6aEqcox1wJtyUNHmd6bDB89c85Jpq6XfQusjnVaca7WPQoRZKu9nCYp1Pb",
  "key12": "eqhVGShDzvw6Jd23R1FWRFpafnwG5pgbhcEqg7XqzC54S7vebYB4dNpsy1yHXoBnAELzaxAHMLYcb1sto5oy24N",
  "key13": "4fXKEFZnUndsFx6tC2v5CEvJhMQyJoATWjSUWdfRewA5MjeV8cUxqDkzUuiUvec94fWkhjnxohiuqgKj8efXXF46",
  "key14": "3WU6uFGdBwo4EkXteK4ihQvLtYdPVoY6CLbVMKRrFs61j1nCRrzgKKCpkSmZiuNv11sQHerTcHmmZogk9msMJ8EZ",
  "key15": "iLLpirMbJN3zMssHkWUiSWZM5wk1fgg9TVBj7mY4aLxcQrCnaFRF7NX1BMGeZWfD1ztKuR47znLsd6D2dk6JSZ9",
  "key16": "2cgS6wqfzy9B4LtoTnW5x3Cd3qDWvd84EPATxmxaaqWRAXxYB3PdzAfcEsBmcDWjRQH1erSApbKsazHgbzTBM8Nq",
  "key17": "52P8DcEtL3yVykA2wY8L7hR6w4UzDSeg9NPTdHGbFsuN8QZ8udUZbaRyuUEbQdhyBekBVwLqyPWUzLVDTE2WGCWS",
  "key18": "WWu6SauaY3oTk9qG2aACtsCSKe6qUjVruum1hPte1jurbQ4LiJHhLz8qKXN6a6YmhDazYyuEDCPsjRtFU4pErux",
  "key19": "35Ubw8kGC1x9gL4Th3dT9xcV4fNW35w1XcHpmffyc7dxwviyr7fpRFq5yc7dNKjAn9nuzp9wLjVJtvHmrbxJX8Q8",
  "key20": "3r6spw89nQspCzbH3S7bu6ZdrkMMQJYRqQpmsLpTsuoTay6Z9YLsLqabp2tT8nEjPRbxBggiTGbBKZsyiAFNf9pL",
  "key21": "4GGh2m7774c42dot1ShHtw1GUtYgrSzgP7ihsxKkX8ZSNcTC5iTAhcekvS6si2XA7dugjWndZoYCv6kMaFaSkdVb",
  "key22": "5PCrTQzctAbPd3QiX9PckkuJNjSJ9ExDXh9dyiFpnSwQqZBiQAtd5fY4RLK2S33NZDZnqPPtSxvnSiWdrtTCtE3j",
  "key23": "4gPMVTTb138kNSf65YTbqc2LtbDsPa6qrRhoACTLRD44t414hL2LMXAcT46LJJi5nPGgDRi8j863p65qfL6LUfaJ",
  "key24": "3AQLqTqQN5ZehT9qi8cNbg8Bmu4M6nuAdTK4RmxpLaKGXHQj2VmPWTSL6Yf4vFKyKmz1VFtEVG8ZKqRkhAdaSHro",
  "key25": "RMWiLSWNgb8jejE2EEeRKnEafwrWvhPQD5RRvWpGko1tYkPaSFq22wueXzPPRMPb4ES5RxdscRuZJsirhhUnXm6"
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
