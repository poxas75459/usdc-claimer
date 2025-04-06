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
    "3ezct52qAKRuZXa3xWaS6BxvZmGa28csmEpjMsLBQLmUKiHYJHj4Ban1sF8EEKKNFQ1XfCjcHcWwZA2mdrRG8ead"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Hyq4VfsWjedVfB7SWdftGNQGeakrWaiJ1vFBTUibUFk3ieNLnCBKCniCLFMZY8BippxXVzLkEwHxLPUod1kpgZ",
  "key1": "45F5P6WhzTNjfDtYFhabDeZMrqkCtAow2xLh9H2u5jeZimWaAfkSAwrsWmZ76cTV1TuBj57rofzvmCUbQ1dp1xQf",
  "key2": "249fZd6zZfTPHgKd82j3Gbuw9vRShBsg2dwrc59QShDXe71WWNAWS7pPwv2mBQDxwNLSanbLgJ4ZtFchko6xqj8B",
  "key3": "zBBSojxdeu8run31BPTHEWDQh5DYB8XpVWvPrjRS3WhgH2B4jvuJTytToJpkkDuLZNc7dQNnkozsVg1TBDnLoDr",
  "key4": "H6fxHw8hxoGvGB5LhNTFvhbyHyGKv9hT7PgDvPsTobYaH7AH7kjuSs34uSFgvrwsrUrhGqCgUmJeiVAMrp6UStA",
  "key5": "4BsRK9VR2XCAzJZmcGumM5tqVrtCCFV9cUx8xZrcjXocqhgtdS84f5Ba8ufkk7Ud9sAKYFhsZdH921rQCYYJFKUq",
  "key6": "4BVgPnbUhNKw5W4VhjsJhx9XnwUks3q2bQooMhwbQ87rufTwYFQaweH1RKegwpKXZziho9WKGTverMVv7iwRmhj1",
  "key7": "5V4vxvXXRh3KRER7k2YCNwMkanGTNfwYf7CKSeUhgrrAHiPHV7ttjKDGwVWegdjU9yg8yFMgD3qMbKCDBhjPhWdH",
  "key8": "5zc1qJ2L2JgeHTVrZwoTyVpCAZoRRvsEEiRvCRXeyiBcgA5ioxntDzMBz2Pst1EJbdR9c9D9iypBKpANXtQkdnvr",
  "key9": "5F93smwE6NH5GwenMju8MtLcq6csKDaDBqFsN4AhGqkjfTMMedjTQcjUQFywZiVGabApabizFhHFVx11ctJ2iHLp",
  "key10": "2wBvko3XAhMrxThAe55GxSTHahqUryzh75zeFSu3a4gV8zNkWpmrebVb75B62VjzAHxA9xfjVE1GLEwXfaTTiFYa",
  "key11": "b9UVCCERwtiiVHh4FUtXGY2LsvW9WgkiCTPUqsPVTy97HYD6ZfA1pX3FrpjECTa13XZUC8kBuqDwKALrToa4sjb",
  "key12": "2u6n8UuL4bsGZENRh4YL25g4xSGapLqM2mMyYW3jnKvoXkb7YFLoZE7GkhZbiGxBxRe7xr5eDzM3eUUrAVwrsDHv",
  "key13": "5WHK3GieetxysTYsG3e2HwNqmMQ1HLQVjLnzgjQDDNEk7nKQ5zde2swmMcC7Mq58YKENaHmjNyYfTff4vhjzHSDj",
  "key14": "5DyPrFm9wuQYSKjxsVTNfFxcrbnELqkkxxYmB5tvRU39Bid69CSsRNVmXpHM2j69KEth1Kj8PQKnmSgUvxswqghZ",
  "key15": "PA1EGxb9BCC467BAfPgbgMCVDFoFU5E7HMcrD4xmoQcTdXXoPgaNUg3iQXtZpxLvvtvdEzHCd77Ar7YRwZMp4zK",
  "key16": "3gvVt1HCKFT5SfwVN1Fk2qQYbSEZA1TSEj4KyKpRfnu8tMvA8nDZdacv4h9dt1hyhjn9nz7XZGveW9h79ZrVYUwa",
  "key17": "5kgYnKr8bb5dfbKaXtwfvVjNB4K68qSjf71Ym4vVCzWqsP9MZQ32Si7RQ4paXUwFhpPhDVPd6BpXWeqPBhDa5zos",
  "key18": "uAb3gG6biDVhewnPbqDK7C7famh6uShdfpj42BfRuRmq1Ja7Z2HDkedh9NAybnA5vonmbvKygNqsJU5fodhagLr",
  "key19": "3wYw7KRAi4piwYPC62sk9nkQHfqqdtB5J5Fjw79t7kSDSompwQSFqy39T8tsAmoQU8DwkDYevPBuRHhi7t2aPw8R",
  "key20": "kMNjgshyBHQqQ5EFK7iEbJDTu1nkuUfHbCrCACyTWuBmZY2CDXu1gJghArvy5VSYCEQUQu14Dx5AdCn1CS8ibtd",
  "key21": "3XN8Xmq14n6zK8WDe1sLaoBNwgMp1AHL4euBXcmQ9RvZ54DRkXJr7h1s29gxfQW5rswFShenc17yZ9FSCSogkFGx",
  "key22": "4hyzXiRzSE7q8X6q7B1kAdSeya6rkFRMhSzcpri8M5FNEbiRAFMuwVAChygpP1y8AUx7GiZBnUkKcyiCBuD5SCUy",
  "key23": "WbxZ2VEW3Ea2NB6SCW2UEyacyefqZsQrSXPcFu7NVigxWQ7i4bKGuNVo7qughP2JN1ibsyFZKkGZ4whsKyyqnbN",
  "key24": "5BwUK8JDrAHrWPUAXhG8VY7rvs9G3e9vaG9SWtgjrbA6rhSEbfZ6NV2RrM2XqrkW9nwG5q52AbPUnZtBvSQfb1L",
  "key25": "2sANC3eoLkLzJpnYHPvxzxXXUDXey5uZsLjomnmaKAorFs4GKCMkctcCCmzS7eYLVYgArxUw1FTw6fxKeokUPrS5",
  "key26": "5UhnFNMxNdUg8hv3yJhNV6JQ9dRdVRLuVr8JvMCxyVuWPUKPxhdQEVK8TZNDdWDysKzPwyURo81tdhXvQtULCDwy",
  "key27": "QsHh5XBKHXC4Cg75fTQF7AKFXDABtNMCFpCM2izJMYzGxq1YrBJAM62h2xZ41F75uMFaKAiBVRDG5u9xbdNmdDG"
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
