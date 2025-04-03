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
    "2ZfazoCMH8u4HaV5nyRPEUds2egfL7QaWhqatks4NgQTSY5SyWt6yfxjZWSm1pu3MVZ5tMk3P3sK3GUUw1HqZTnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GyZzjqpYGMP79nGs5qXNfK687BvrHXCYkTYNTrWjxV9rF1SGfBHbrPWALhCcPBm7gFpUBzdxFQtztLZ5pKCEYY",
  "key1": "XLEK6QKH3yrcnuheQosMct1tkrUx5gQjRNxD1yYwRihU8dk3U5cyz9TNhyJdyUXSKqkY7YT1PetAijY8tGT9Aqv",
  "key2": "4HpsBzaxdCdM1bf68EfKnbPxGnMZd3dh33wMbxbr4K47K2HP1rzpfoKxpqwYNn6HRMrBerKVN5X64fwn6hGyFPDC",
  "key3": "3v4i2FkPpuquF4WW665GtP5r8DVxUzCNCS4aU35pw6y2VC8LNzFhAL6bKYg9cAh4PDdqmReJNV2etxEQSDSdLPvP",
  "key4": "4gQyovtYK6EWMwpKnEgNyEsGfxCL4KKHEJ6HrvjfSEL5VFygjPqiw5kAYU5tfckxTBgKioq1UuZbK4EKsHR5mNBz",
  "key5": "3sL1bTjeBFUQHH5da86oBaVEeRadSgvn7fDaRTFdCLDk8tqZ9vh8wUa2yy5YJnxYnWyJ3fvjR3yh2VyYvBtPSs72",
  "key6": "4HMnFBYE4SGDwjeCA7Q38XCN3PhqEbXr3ycd9MVRneyx54V2uVheLiDQbakzrZB3SXH9XBg3jywREpnKYPYYGKS9",
  "key7": "2PY5FRyV4f8fPC3oCV7fvQGkqHdRyc31jVMEAnDJdsBZmLENTwfDmPcSxUJECzujthatUcd3sPaYuez6iahknJAr",
  "key8": "jM7AaxsVuTUv8Cxnp4BiYmxruSXiUxs7ZN5VwyzSN6PsvTJTCgySpopLdPp29mHCS8CZAWHKh3iM8DBqP9xdb2n",
  "key9": "2rT9ByYgAgxRaJvgZjZakGoJUUZ2jd2s8SHsQ12h2Kn7ZHDiTvPyhXh1VQzFTD5wdrx8EaYn7b9S3kR1spZvkNVN",
  "key10": "33N9GNQCZZGa8adLs3Sm6po7eFV7mG7kzeAnri52acguADbkB5i2Aev74ABYoYX3nFRrfzTCt4jHmokvPHumt7YZ",
  "key11": "28qXWDZNKnhiRZvMrKdpYFBFyHhfaFNzk1RaFPD6Tuzx3qScZnS2RWeeFtg626a8BUCoSJcjEN1k1uKc4M2unCE8",
  "key12": "2zFtVSrFA9ByAcNPovcyueCwWk5ty5jVWNoQ72sUN3kqSbkZ8pcTVgLXMue9pM2dXi24SBGzoZCLUgRNr4HKUJYC",
  "key13": "vj1K9UKsH3bhaELj5QYhDAyHpasas2hWfQ5miyAYVqiAYP4cfaTjW7C7HtSGirEVoNVnAwcU321HXjMvJXSwcSC",
  "key14": "3c2MqtVMgXGcWcwmuxfKzSh6sgE2ZYjgycs3qA6imJic7xAPzDtHGHyFtwqd879Yj83H8axL3x1KQmBrdv5NxMtD",
  "key15": "2zmzC7PPDbY6YLuYGH8Kr2Jtx9KLHZovDbfGvX24gJc7FtZmecD8onFyS2kuuxSYbeZa1o1bnKp9LNXbmtc5XdEm",
  "key16": "5bvJikTYotrbskjGDdGyC7SszhhfHeP2E8mpdycdz1KWmJ7YboELJiW1creMjYM1u6PCp4JUGapYYSETdB26vrgA",
  "key17": "2M2PDeV5LLz3tjtgwWzsKjzLfMYtuxT52Qh7yNikNwxEoVLdDvjuFL9NHjGuKP73r9RYnHjXWoK1MVwvqB6TcGd7",
  "key18": "47wNkgDyopT5xwJZABNr2UcVgGGEuj4BjL6dzpdBv9PRny8NXXkJZeWoMkKmbtRNmsukycGeANxUbpEhb8d56qv3",
  "key19": "3wmd3dnnP5VBXUzgvuKJLzLndTPBCp3t2QCPFvFN62zMaZFt5HLf1xDJrprZScKthaUwfrKza9vXbCMGp6GAfagQ",
  "key20": "3HJk8HL65opbrNXF2nXScegkkx2HDwWR9yfB6F8D1VyQPq4zUYurWmyb1VrpHw9Lkp1yscNodtdLB1TmS9muoLX1",
  "key21": "5L3Ymr3egU5Em7CcWc2s5JFJmamXiJFgVuLcpNfetfEc6MQs7cCj7Tpkhv47YXtjfuX3UcK7SPaLtdVUjSHfjmxL",
  "key22": "2czkKu1PNCL8bZApuaxVUNkgkhvSTaVeq6XrGn2aw4T8VXTgs46PqQWSiGyVAbkP4WSUgRyDL37nmUsabUrgpxr1",
  "key23": "4Xw3PiqwV52j91wvPFygdTonBNMU5Yge2zJ2X3ri33eKdGzD72jbzMJ727GeLJKjgY4cpgtMJREfAgerDUcEKmGs",
  "key24": "5kZ713jArPNXu3U8BMRydJEgGLsVfh5FtdTDCb9PWWPXSfdw6ihvcEyxSxqDshtQkZX6v9tv77r7CoE6eakXahq5"
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
