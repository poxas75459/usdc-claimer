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
    "qQDnuMgnwvjqDEkfQgi3KiV5KuuVBwVxadakAmREwGtyRW9ot53HhhCBi8hzSU7MByd9eCDjy2KhJJbB74U35iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QANvdyH5bbcLxu8LVEw7VaNVR4ZKM6CHbPwZs1HsvJAvC1WCUHjDpZcpNHsVdLJcY8oyCtys1tWkZBk6gR7jgn4",
  "key1": "5dFiUU7iqioPhyLyrAkDPYzSu8UHYT8EcRULMe5ghExch6UKopdEBQJoap2VmJT1bRVFtNUq83vReXeA9YNyz6gG",
  "key2": "ndQwzFfFLaTYo5P5wSTitJEiQLMqsz6WM6tN9t5nQJFyn3GqXmWebo3CD33MF5mdRcEugd6Ddm5PdEhEG9Hwbe9",
  "key3": "phaViDHkYHmFndooAFqxo3UPfk76Hhx62RpQvP56HTYN87jmXU8Rb6yoi2iFki6vEVHFBQgQodMFi5QhRptQZNJ",
  "key4": "66iEYcSPDSC3exwTfJKwbwupnMfwevxPJ14jUQ7BHZNiC9x6yR7rXaihBN77s5iw9Md9GxgkpVWX5hyABjNfm6H9",
  "key5": "595URirGTmSeKpccWuzYuEsvQPG8zYMcXZiRG1evXaSFt9EKNATmp1sCQx6UQ7XeP6LufHquS7eA88mHgoxp7Bnc",
  "key6": "58V1XBQ7STVSu7aV9RsjS2E3CU68a61aX5SS19rddqUAfA8fo7272XiuQsNmFgharRscaZp7qk7q73HS6Ddz4xRQ",
  "key7": "2vUTRUymYzNgNQdN6ps33bnr6sKNtztaU12ET4S5Jj695QADANyvaeWqGE2ssC8AZQ53H1XD6YSWSD8u6Jh2eAcK",
  "key8": "4WSLKQAnqMEVzETddnBYvzoTpaH44rCQrCR6UxCcsdTnpadoiV4EfbUYo58us4sjN8fWjYQmJAs2SFgYCHr1wc9U",
  "key9": "6qvUEkT85wdnZErMvVMA5XwMdLC4PKxMLLv1nYDsxYRBZ9oUfCSCcomjN48dsxC7bxfsCghnG4i48FeNyuo8wVD",
  "key10": "peHLkoVELsjQooZX2B4r74Sn2y4yQZxJXXVxH7pDrxg5X4ydFngze1CcKgCL93RgyBCToWfk9hDbV9EKMnrifzt",
  "key11": "5iGoFDXg9GYw2tcqj6pNQLRWecDVjdaVUxbdEkSsaQpK58GiNtjCzmSrdZirBKFCSXyESsRqv16mxMHNRk8rXFXL",
  "key12": "4vjTAbq3s2GHsyTXRXowCPwB8hoxkdRRR9voxbqNi3NT5xCbKpoq2NgH5vgf6AEEMAAoQsMHKNoTF6d6rBSfEh18",
  "key13": "2znXr8hvJQSmgoWFzaQTcguhMkuJKTisaoa3YbQh23yPZTAQzWc73wvX2h8VrKWj2FXiwW761b3qimxv5sKdMm1W",
  "key14": "3Z2PqkGDhheVaJUdWYAFq4AknsMhNsujf26zpnNarXmXEb8mud2agokyhHYJwBbJujAcrDV49WmgQsLws2s9K8qn",
  "key15": "2RSZhRCp8YaparXhXtwPtDoEfQY3MF5yo9T7TdQUZoX4WWsaBhEb111e2YugXQRYn19Y9mhYoTt9Hvu6jnzqc4BG",
  "key16": "63o7wmQGJg1BipRXoUv4KRqx12xJ64vByDGHU7hU8MPkKjTPq6kArLSijcBLHdvcTxEBZri2pGw5ab64hEUdaMKx",
  "key17": "2pwv6WuPi4RK5qJi3oqPJHv2TAej5S7cvCaNXJdyvuUzEJ67AYSmyCRZAVJrBASjcHG96hxMtC5PTe1J1ESo93Tz",
  "key18": "2Z6W8uaJXjgN4Y2xmtTDBaas6sU5r6qfa5wWCCV2wnvZPr6W5XxiVFvBv3TPyoxFp2CsMo4r5w3bJkN8SgGuKzMS",
  "key19": "55ygrnT7kokgNGwUhQk92UHc98JXL75rQSosEoRzkT7hfyvdLBiGy7QL5sn4PgfLcdY3ZqwNxHiPRiNL7A3JEm7q",
  "key20": "5gatvhUivjXZ7sMR1b2zbPnDaJMPUi4BEZTM6FKUJGDn3YhU8aH7octHAQy3dyjmQLrNGgrVBruFP35qjXMcRqZD",
  "key21": "5D637FtLXpFxGbmeoVuXzBnvJKcTmpisJViF2ZtGJamFiEYgXgU6Ks3Lr8boZQhdzKqFEEjkKEsAbPujh2AeEyS9",
  "key22": "4ZgyrWQZTurbLQ5hHyQPnFCKAqRAnU6kM4bj1k6CQYP2GpUzvadPoaAv8vH6XsqA1Y1ZkhnpCB6XzDHm8De8Kgc8",
  "key23": "4gENiq7cDzZ9eWYTvMeN7aPzsi1pJqE9ghWy53cDtWsDqaExZMQQp2fYyysDX7j9hKNYZuaXZFf2CSFU9LfuTTnZ",
  "key24": "343BvLZ7CQ45NTrVN6KwNmaLpjVCd4JoLW9ug2BzY9UtSKcvKjTeAhfqqDBwEHLqnapeU8aBM267T51kJjmzBeLq",
  "key25": "2ecMdzbdsKaZ3PpKLZUwkvqf9nu1eKZEVFBa3n8V3ELCvZV1FZAC69jCjS2dyVy5rPQVt7HUJGMxiLzNAvvwgUVa"
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
