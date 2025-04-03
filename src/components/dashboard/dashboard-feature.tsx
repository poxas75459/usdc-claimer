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
    "2hxqB9ye7FDk5B3RCYSHhgJonLJJHucEnDzSZpQV1C7e3RfdaxmWuZaKKctkweUtbmq4hJh1Vp5rVL8zyYWCEs1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MGT9JVtZSGGNiF7aYAZsczcaDZPAm6jScNmw2fyK2U8ugaNUXfXdZVnM8uAA4p37DNjxz3KTnFyYhL4o1g8Aan",
  "key1": "4tFMqahzZUGhfamv8icRDbZwTfyzQBhmC6V62gqWgmSvW6QmxDgAied5VHap3NPJNxBd1FyTzJ6M3kQ5RdT9B2Jk",
  "key2": "4hsFHmTaDsb1BAR3QgD7kn2Zi9rrsXEPNJaHk4awYgA1XLVVyZiGKW7mLxzKzru7qZBwc9EvUdmUBQBjBMaGXXd5",
  "key3": "2W5giEyxsJ3Nv2WmLo5xvARS2Bbogin6PkijmwyB9KbZ8V37krWHbtRaV1bGduqSAa8Q4x6pGjyvi4bdSg9iKShQ",
  "key4": "5heKXUHJ26HaLNs163bFVjKb1Snzfz4o4Lk4yjf7jgCai8oNBHfcuBE4hxXeX17uoahCFzv6sEmTDpjJB6tqnUPq",
  "key5": "3euYThbecpGN1dS4namJcEmAYjwYE9ymHGhhKEYJRdfYLv4SSysSogJgZd8HkxDkcQy9VyB1jwK5o7mu763eDhuH",
  "key6": "3PQTYQhhQkrLLfM6Vyg6jKKQNwoFgV25XgPBkLupgAeLVgbNdBriHcfmjLNAx5thgNp3AmS4kPAzfjc3sjYczuSF",
  "key7": "42QZDUYydT8q9XMjXpfCRcH3wzrx5LfdNKNNVNYLi4BVcQmtowqgqZN15ebx6WXE3rqumgXGf7Bb1eL52oQMmy3U",
  "key8": "z8nZEgmKJk4NrqE5BG89HFrYb9t29eXh4rEb2f9qAxyTKGjvYH7tcNzneEk3vMJWvY1Y4Ufde7EoPMK35dvDBWd",
  "key9": "5sMhk31AH1JwAfZpmBwPmJ2gpoFQ34BULjtSLRHQQeJ1AYq9jcrVpjMuDYD2qedRSvQ2GweNwbSGD8FwMQBwRVU8",
  "key10": "3xzTG25x1CNzXHmU3sXRdLrKDXb1ZNkujyQMQddZefJihzkFVmedTK8ycGCkrrr6RvYzHs6NMKiF3vCcWVJwjr4m",
  "key11": "uHkxxjZaoWyrdaTGJWajYeMowEPh52yTqK5wKBPRg9Mo9JkJ7H9j8iLroQ23BQ4xveGgdL4Bcjtsw1j3jJaWMcn",
  "key12": "3rvLzgt8ULv4n5B138AXBZBdEhpN8F3g8TnPdWdj5DZHRBrnZqyjdCWo4aGb1VmevoPyCcyDC4HcE7yMCZCTY3fN",
  "key13": "3swunsBygmE6oNJhd3g4mWC7QC9xWWB4kwsJ3Ri6qboY4ZimYvnhKB3ZdvnYRiLA4rFdo8wbQhEHGJ6MZSVXfUeN",
  "key14": "3ffifwEnW1pgXUPTunrq2734BfWhMCJmugbU8CtamUEW36cuUdgvoHPDpWFNtrtjsLYS8GGqhpwHsiYgpYZgi6Yf",
  "key15": "4oGvoPBzbvC5vXXsiFUfZce4PBJn4fbgZoYkg1Sy6B4KyjD1iQ9d1eXjovRRZeNGXv5QPCBqb43P9GKbrzKdp99j",
  "key16": "66Lrqto1tWWAJK1b8VqGRhff9hogb11Lf3secarBs6cKeix2QCG9Q9ZTsipiRb1gZFbnypTtdu76bByCRzerD63Z",
  "key17": "bH7dM92CbxrFYx7LTdrnhEZby1QPYDjqNfVTar5F8w3GutsMs1wdjMoGWwRppZXyXwbTW4KJzngE3B9SKSCiKb2",
  "key18": "3zMhVQs9Uf3pNS7Syu9SLDWuNa78wavpYPy4fBVCxCezsZdWypY8fvKZJv18xY9Rw1b2CpeAqZvAizcoxAdPEXzF",
  "key19": "2xmfVmSLB9cR7KF5X7WHV5m73e2r2kAMR6RXG5vARybMToF7vdQ448JXetJw7LenARSHLNGY2YZzim4wN51eqEfG",
  "key20": "5uFu8L8jWjGEKxCaaDtJ1oAxLn4PPD436CvsjuHMpQ169bnENfXbzyVM4RQrP1NZL2E2WFiPBZBcEgbUKndQScZb",
  "key21": "3jGrNRQD3baM9JHjEwgDckimxiKa7rHDbQYDrZacKTKG5zgRM1PnfbMUsvBPiVhZzzL6J4CjhU3k8rVwHhyQ9RGT",
  "key22": "5ue2VMq26o5oWwpRvJJFds6vcnhP4nRZJ5fvL7jUfrYFCnio23Yawtf25qzftfQGGg79iMiw8HzYBxgnVfLQfbC2",
  "key23": "41c41h3TFhT5vJh2q9Jzai3cXgjYU1k8rpVRNc6NZjmmmLKBCcnHZR4bX6kpNDLLonkfHoDRj4XHthozC84enyqG",
  "key24": "3Abb8UDYXpwa6xDEjSzxW4oxhxBZtYK3cSoirqnpr96RKSTDxuddBRFUVRvV6dZq1xphGwJ8gu1b1pZPYbmxV8nk",
  "key25": "4cjQMwFhqpA7ybTv2526TDAvZHRKbD6PXGtVCPUfJzVz8nmGq6ZnBZcXLeTQwRbuvXhKnPXkQaXUkJsD5KeYGhzd",
  "key26": "26YTPQKRrpivHykyTnJKfR9pFmDMPrfpmWyu4c6BuXxaLYGpTM5C2NZvvtWQPTxJPX6knHXHTscRTSBb9NiM5iN9"
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
