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
    "27XjFjBfz2zWwrqNKy6nWr22E12tkBCeM5ykGkmivNow4F6RRUPVjzfaH9DX2SiKLBZg1uWAjK59rT5aRJV3ftJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYy8NsWeFPHcv3fSXVNYwH3SWKL6BvCJTDyME54u52k12jrAqsVtu7jGDfGxRX4i7yqooCtmXjwaovaq1qz25on",
  "key1": "34aX7XNWuohb8mj6hYoS8zEXoCAYuJKvJtCKL7TVYdGyxa8Nqpfgb6ZCrFe7EEcP5buytMmhQ8yy5dhwipfHE4Nd",
  "key2": "2GhAHENK6Sgc2MjR3j7LrxZ9cReahAmEHDN4NHMUZeiTwqzLQRx7ePKTYAjr8o7WPxx8dvEchcQGmMEuQywtrAqF",
  "key3": "57Bm91rZgiYvNg1hYJamukhviYXaD1EYaNrEiUDtRger66X3FUGQUqo7azW1MufMtAkVccp2rV5PfTNAvHYmZyj4",
  "key4": "4vsMfE9zyXpqRiQZA44hmBDB8xwU39WdeR9dWMkjD3kSitr4ksAY9EVrm9C1AtHvHLV2H3ACe4aLdnrfjWbMa4sx",
  "key5": "3awEQEnbMZAvKU4T4typCguaSTvyNczKnndqSCpYNTi4SdEsHJFAJKB9azJSW7UXkge6suMpU2MXkbrzNqE6krDe",
  "key6": "2f9NS5cPJCw1wZg5F4BrTovUYsg6NVdyNWAqCfzDfVphdxzwtvN9pYcS1nr7SP1NhbPYcB3FnZZ5aQ5f9rkPKQtw",
  "key7": "23mJKiN8DBoib4gVnmG7JLdRFGtaxvrzFKQfDTK7WBPCqADJ84y6GLoHVQcU2sny9b87v9ZufCh93WKJ96A1djiD",
  "key8": "5emGGU8NW2xuQqmXAZwYXbsWJxfqYos8Ps8zHkkhQ7AjrbTDMehiWWfujnzarK6W4VaSen1xxCFgoAfxK2JWiw6R",
  "key9": "UvpC5HWr9Hj1Na73QFeggmGBnMdu1uWVEbJc9wBqsBrgibzKC3BFhyEbJ8Y35YnMNRZYoY6728DS9gown4AKVoE",
  "key10": "2h9ojiUaZpKkytJofAEe73hZ4cV1byiN6pYoMNEmZFEsHsRBdUUF6v6Kvxia4dQMqSyezbkZyhCnLR61FaDZzQpJ",
  "key11": "26GhA9Yewk3Tyvc8W74rMyTV9AY9iJE2FHCbuv1a9XWUuzTC9DmaeyE1epf1cgKkA7rgatvYJRZ33g5uR5RswXwU",
  "key12": "4mVpoxVeuPpKEicedJZyfo1eNY7wNdGmHqjoVBtw6esU6H1rPWgWNNaa6h75qM2kbbuGjZ1Mq2htU8Um4vjMuvBn",
  "key13": "tt1PUZeGhEta1BFSDqHyUAp8bzzjqe9fkVidUGaKH57SDF2ttC2nujAfjYEnivdrUi18hT1kE9KQa6ncKrg4DhV",
  "key14": "gGBAKHQtLLz7QRu4ip7mJothjN2hshqcFC4tgpSfC34qXtnHyXWcMUWXjg7EYVVCnW5TPZv9YaDTGfMYmwh4Pjx",
  "key15": "3rJ9w2zJW4rQUKMEMLHJN58QD9JDVgZCQ6VmWpXf69RVn4dcTBpU9vivKEC8pZjxCqpmypadgBqaNBJ756hRiZ83",
  "key16": "nrxhPDPWc7v9FRdA3zauNMn5KtmYUc9JtPgR2NWH47TQewnngLKjTZ1Keog2ZPogKwFcnZdCGcgmjTRTgNhRtiz",
  "key17": "3QLVCeZrEwWgStZ4kMfaj9D3jE1ireHgGbexYU6rx56DpnDeAV1ihCKRqfzPFfnt1mrhufpNaLsgUyEKFpjENCD1",
  "key18": "4PVL7KvgSuFg5rzdFE3y1WAA4au6xdCny3TCKKKe2LigXi95D3z9VPyhu7aUFppfrkvyp9uxdDbF76z9sksLReN2",
  "key19": "2S5zWsRX7m1tUV6PiqHAojjw5in3c8gh6BY9wyCM9oRpxqQXjkrLezLSFzGwpyUabnZ5SM8S192T9WVpNUFSmqQY",
  "key20": "34kikyUXrzYVCJntQe7VnkZft1R945Bn6i7EELdX3UjfDdjGGPnYF2aYoJn4V2ZEL4C7EaYHmVnKech325njgA3n",
  "key21": "3oDjVYidJQoKf1uCeuayBxUWqPyAgAki5GXxJU5GStSpAnS3eAwiHVPpJ8QBxsNpQNr5PV7ZgzTTZdGbYXVSRjDs",
  "key22": "4PE8F9NwWdQFJRyWV6AfBMiveeXmiQKHXsybK1KMZXvTpGYEsxMB4VmiSzYdgfBDXn7saQUEkm5sRaDNmk2R8kgu",
  "key23": "5zMWXg1drjM2tEgHXAmUdRX8XsqDVAhKZ91BsqvbJ9BG58bQfkzH7wyVFg6mCRmfUffH5sQF63mBU1KdogAsX92D",
  "key24": "4HHA7ESby47sgdRNLb8RAuoqY8V7xBJRJwYcPWurX89qz4hDfcE4auWTJJVJ2qR8gzehaAtgb26faavJNqBoKa86",
  "key25": "5wPHz5vK6KsDpXBd6xGxLrQ9HTV2uDs6556nqVDfMLr3eJmZKbXL67veb6mzbQhKgw4ioKefoRvgz6JBy1iQebu5",
  "key26": "3pW5RCdaR2nTzM5piNa1FLowEPBUbRt9w9T6uQQT9YjdY8j28nRipUoQSdsPnFBQAf4WcxE5HUMCFcSbpXkvFRR7",
  "key27": "5E6L2B547JkS9FPf4iRz7u84tktUCG7vNS3zbC8n1RjdcZ7xY8ENxaUQ41bGquUUUpQVptvsuENYpyb5mm7WuCqh",
  "key28": "2biafMpKbP64hxikRPEfpmzujr2bq5qCk6qw2JdSfZQingBNdNnmCjAKHy52vsWqFmGuWMMkpw6mqzjTu2S9T6do",
  "key29": "iELKvHQPTBE4S4xiakW3PiASZ1VeDHbEwv9i28eh7emVEMpdxB3Tbs3h3Z1HGM2ZYkwu5CR3DqzMikRkssiQ9gy",
  "key30": "5y2jUXQayev6uhRC54Uo8bqoxfxMqfW6MGWf4bQ4Hj7Pi4CBKKTfXS1yvBtiuXri48aus4DfyrDWcziEse3LFgQY",
  "key31": "5MRmLKJJd3iENuP3NRHUTwXCVofGAPz7riSr1v3SRfprXcTZiiXcJ6NRsrebK9cGDuqqCubSrsn4qnUqkFkHXJov"
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
