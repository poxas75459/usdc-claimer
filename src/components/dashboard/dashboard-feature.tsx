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
    "5ZRhkedgQgVqV9C1zFCsnRauvKYxHGf9ysLPexFmfUnwi4WHjASWvyYh8XyaUv2YR3LSEk4x7oaHRRcToH3pZyzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64G7Bv2644VG9RKHG6nngyU13UQ7WLZh2Q5mJ4hyggqb5psEFk2V9VK1zh4mMkyAuY3aFh8FtohhJAE7J3cuYMHm",
  "key1": "5dQKtNSv1xrXRbVTmhgeriW98ema3vT2ri686LYzf7jq2eAPKvVjLQGcYny9aKEZ9JhMBQzCMgaxiXKQByVu9ujx",
  "key2": "5JZ2VXUcUraQyuKGNqtUCwnLXWF7NA7rQybpCFJxmD2v4GBZFah9V8kJBHLisjpd7Xs8Sa5WNxUeRJN6zSaJmcB7",
  "key3": "23And6sF8W3N5UUqbniAPaKmrjifqraQRvASTfkaWuyUSgwbULaTevdx26oGMyA6Q3NMFgrxm8WtsRMR8JKwLHW9",
  "key4": "3h8XN9nG1X2HDaYuvwHa8bsVh5gB1zYJq5BAX2sz9aYkEAJ7ng3s7T5BpMJu3jogmiJQx8NWBhdUDwNqxmeg4iLK",
  "key5": "4JUhhZp1awcJL8Ccztm1QGeVzMGgXaTiVcKLnJqKNjRBV4D6RFpv38JwjoXfWAkRZ7qfTYtdaWYjUJ3mQxQKeAaV",
  "key6": "5nsAHs1XVcgfgFwyDu8SFNopiQ4MuZB5uFN3m1vpE1juB9FYY5969uphyyrELopvz9TwzgYxHssaii3rqRPTzm4f",
  "key7": "4tuoZEPVzDfEkjDS5iP46nvghp1JT31FyNyeB81Tid7FzRQP1VExhgSh8DkzvsQqsLVcgv8dNLJ8ZQqmBw3u7grc",
  "key8": "2jrbWYeXULcnp4PMAYjCguXARqT7GnE553VkS7D8NhrmBiMuu3LbUS51w83Zrf4wcsyTtcXyRb3dEdsL5jCbFHJ6",
  "key9": "51ohfDUt2A4GhE3ZQ8Kd7oCn7fZEAJjMNU4P7PuoDhzDJRqEBkHc7xCE1XwM94TLWCKmf7YSQLgW6Bx3326vSgTT",
  "key10": "5xtwtxuGsYwoMMJEz7iQVXviZGgqmBviwX6GXis5yzkab3V3dfazhbdLNzzQehCnHnXEWFjWjmfuYxLF5Vves5XM",
  "key11": "4Z7YFM9Xc4bGwKbYrDY7hf3JCGqZgRu5i1wfrTDqn9Eifqp4WW9yGHtgGtMuhcvWnobfSvEMXgsq4NQtyi3NwMPn",
  "key12": "3zp7tHjgexci48i8fkuwiUFp7oYgTywZydoGyDpZczgV6fDYy2gJgWaCgPacZi3qM8TAAJjeUcsQbhmr3eSiZj48",
  "key13": "2gjXcSPxN1smxRF7CWe6AZjRRKJtNav13BXMJH34mSohNKMm8u1bbbWiWKrDXeEKSjnpnNGUDcp7M85AKCdPzQBX",
  "key14": "41y3KijhCuDc8i3kzUioEgvxVNJZmBtZfKmAaPTPXdX9Qs42pWWvnet4XWtXEQwQrGbtPenYCyYhx7V6vWe51enw",
  "key15": "wdHEWdDjAuZyAB3ufSzvw8PFmihJ9FEEWukB9Sr4y7go6v6dGmo1fV8uHgcYTbGF3ycPxJCTTLNAVABDT2KR6zZ",
  "key16": "2pmy4Xv1e3L15rucJM8gZZpthSQNGsj7KdyULT35WyrETDyHsqpUF67JsfaF7gWo1EcSKHw615DrwmieQuKZ7xDr",
  "key17": "29BoyjTfcQumoW6fjWnGsjEaw5DUAdGZAYQaFJN9Rw153htK6yCpDySoeBzCywEE1Zju7ALVGs1snKYpAmjVuDd8",
  "key18": "Afj69BED9JbzN9QmqFyzKsJprmzFEJjRJxWMfVMguDuarfQZhB6RLQx8emx6LJPsRAsNUDtJAcX3XgAM2AdLgLb",
  "key19": "5CRB5cxrKFC7fDCJEtxiP24Uh47sDSpzWDJTb2A5WMU3EGSoC89QQbwXVuX5ZTtMkAmMXm6oz6fgXP4E8zhwrwXQ",
  "key20": "5tYKpf2kHDM5BT6KBeLrQC9k6UeYuQBF8tby3nTeoPgKGnEC7Bc94uyBU1pttrQYgnzD98JpSMu2pwYbGDQaFUSY",
  "key21": "4E2TuUpAKefV4imUNkmhYEM6VEhoUomZjVkJUm63ouL86UwofafiNGp4HVsFyrCicrbf93LFioiuWJJxi2YoQN6u",
  "key22": "5BvhT6Luaer39FLexisdXasN8cSdE1Vmxg8KnKBdRivUVhZY8nPxLgBD1ud1xu1s1FrpsgFrJTPaQPdZeN4y8pG8",
  "key23": "2XXRvEknZBBv5rLMaQCLYg7wgyRWsQP1Xh8TwXhG8dgL5hyyn2ayekwFrTtH9mXJVFm8oQ7g2ZYQ9iFbXxuPY6GA",
  "key24": "2a6A1knLwKJiY3SbhWjbVHPNniNVUQymUWeKfzaaRfJB2npT3bkhTG7K4PRbJTu69ewbucesMDnxz6rdrwPm9wY3",
  "key25": "67ERqQV2wWzcsFXnTrLFzUCeohBf8AHg8z4cv8xK4hm8MsWtuyg3LrcdDxWn7zuXgsqKkmm2rTPNDoo6Bt4fe55R",
  "key26": "5Qk9tWcJFdj8NHLJMg8KzRTxEPAembjbNsHPPCKFJCsUs8Mcsa7PydtVg92dN2wdKaFLqFjg4HLtCVg5WemXUJTY",
  "key27": "4wCDLQzL2819dJioCpQ2gdUoGupSaiCarJ75tmKZYBfyWtCHEpMNFPKqorGyBMpZYAHqEUPuv2SD2oLCoMeGKL7i",
  "key28": "2NY1sKzivqZdcH91cXQMEUEapyfG2vWxAtr1AMn9WxnztdNDHK3jTUAj6SnDfX9Vj5uBBWLAHzNAq3Lj6WkQjzEH",
  "key29": "4Mr7poBYpwgzNSKRSD2PNBEAF5mkUCmwxXiJeVnKfNDQztnne9GovTvKE2yRsubmgiv5rpHgSBop5n4ypSczyR8d",
  "key30": "4W1AEpguMMxShfMZcR1Wt3F5yN7tqseX9WSgJBcNffzCNjFfCTeZsZyRPneyMBj2EPXja75M6cZoYxLf39KuYiAA",
  "key31": "5Tec8HZJwWkztPVCvBGnxZpoENM96xWNcQ2TdTbdRPBoweMMzaj3Rzj1oRuCnyo84NswWatF6amTrjpcFQ1wuBTk",
  "key32": "44SHAsBEenytFA996XjNduUW3USL63ZAHSW8GTfNS73o2wAP2PBkE6PjvFqvhbdoAyhLRwvKFakmvkF6EKGQCf4o"
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
