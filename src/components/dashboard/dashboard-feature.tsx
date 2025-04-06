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
    "4dT9QEoU6vZeBfgJJz3YEnGVD97W3oAJAxnktch3cGr8fw5wo4RQozWXoJMG2a3Gju21aJDrjXbsSLvh9rjUxKKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4bRCjiBKeYxoNzAkZxDuyEukVyEWx2fGxLjLgFCups1kARTzmr4H2HLgdRt66a1sGhgUtNJaN7AcyyvxP2DdVo",
  "key1": "4mw9BdMQQmcR9hpEGZtKUmaxQEVsYcLe4mXBNaGnSsf3UPJgdAcmUzUQXKWjiXbT5rvK2gX5Zr4RreByAddzVdHD",
  "key2": "4MBZkmv9DLEA7RNA23nG7evnGPYEmUS6CeytPhXXoUJhBBBUEdG1xbzKp8JAgHZ1JipJNDcYR7EPPeaVZk6CckdC",
  "key3": "gcJEh9nFKwF31c2SXDEDEdtsUBTMbeTgCjeu5SSrgKjUp7fkVqjFsDJ9q14knrjvQedvrQLsWLUXct8QQiiBQiQ",
  "key4": "2y6Lwdh9Bj3RzGRK4U5qfhuREoaZTr8KVGdBbSfVyqyonJnSrjwnSoEhwNzgkHmzt5YV4RhiYrXY77HsnFYUUnbw",
  "key5": "5oLNYrztjHXvVZJFc61SNZrStW5PKQm53GiY6WhwzEyUFwqUsGuNrgamdG7jhdVVbt71ihh5vj27KjzxY65h15zY",
  "key6": "42mRvufMJiEaGJWr3DmMNcHze2fX6Rrv6p6eAzeTWSsvEbAGkj2xPijRMdhf1HV2zNWMSxE83HXfPdoWVYAdtj8j",
  "key7": "3Z2AYmJqDXMzwHt2nWgr2pZRQkMdadHXXK9rA2BCx52KnVZmR7TXuM61mxB7A3pcnjBxi8cgUMxoF8kNHCT1k6yj",
  "key8": "5JQghcUuJe6VvESuajommuVRbaNAp7vL6sSLE1fnLp4GC1kiPRvRqHcswJzwVL4PrKuriD6Umh94A9YhHeoZZ27q",
  "key9": "4NioxT2fjeFXVcz4MNRDmKZF9TXQY3tyGV7CbSRhAWG3aGgzHFez6QxD4AkyM3G5phB8bjyqVUAifAYbmRTXKZTG",
  "key10": "4LtbKcqVDpaXC3e32HMrYtKRD7YGDaXoH1VhXtPae6mUiUxvFmpCJNNt7H2PYnHy8k3fFGc1hA1v6VbGrEes95b8",
  "key11": "Atf3geDeDyKDzHtMc5xg37mykPi3pcpDLLH6G6Y8AMDA3Zb7hiScAtiRLdRBYtYjBu7LJ8BgLJDqJegCJnmTbE8",
  "key12": "5BZeYHethkbEx9ck3Fx4Qoxh4umbbkjq1rGammuhnAgdLvcPxcmrQ8tNGWowZx6dGJejFGa8mtVPQephm78RvJdP",
  "key13": "2Ar3J5TRviLDeddSaeUSCuXQaFVuYqrktditAnYSBgX5Y7M7GSyN7WhRh3fXqN95Uui5YCgiJq7748gHmEZnqcjZ",
  "key14": "3YzsyPj7UissQ4oMpMKWEVACZgUifdEutVVGC4o8H52PwsWWLWiJsqJdSDhGABnhwTDU3AEEYaWX1ZoUq2SiiqBZ",
  "key15": "2LKReLiNHQGkpmynE5iDfkXSp7SPTXPXDUW6cSvByCDKfLqX5BftkoeBsHpSD2L2fxbAy4Jv2Vtw3x5BNFfXxcdT",
  "key16": "UqX3fpBv75dqTzphy3C6yLPeVa9qCpzycr8K1hrhDwszUsLmu2c4DsArwocywfnmA1uWX6pS6VsBy1KxepbX1kg",
  "key17": "2A3dU7Q9wzrJGWEPhAGabGxaW8UL7h46FeHRgrvFzi9yLi8rN7Urt2gPAgkNmMoHqCeWCJbbfPVNMnZgCTSQQo4a",
  "key18": "2KRPpZyho7sAywMij6yxNHASabSfNAqKBuCSZ2xbqLDirrb9BD76NJ8RoFb7w8a2PfCk4czyPvLc4w99SdzvEcQX",
  "key19": "6MVu93mk5y8zA61L2gTR5KxWEi1uaGkar1uG6tZfYbXShc8xeWnXZ1QJw48aDzi8x1VYx5HA439Yidst7H6Zvdn",
  "key20": "n5vam6NVZ99ZjBYc1vm34t5VmuM31JQwefVNu3shweMfWn9w9fXSMwqX6YNphku6N9mETcu7VBicEjCNdCFmfEM",
  "key21": "A3XJjeyBYgANH3m17wDyimvUJCYbyD4rJhxXpm3yVcawFVkK1bsXu5b6XoiaKQcpvN6DxYEwqe5VF1w2zuyothE",
  "key22": "3CmoPvRuweJJNEKg9PiDxJiBRaFsUMqWoxt66oZY771RLWqD8R6dHvcoubsHTo2uC1vYcvTJ3nqohFJnRRvfZyb3",
  "key23": "4UZvYdBxU7tUH4Y1ULQw9Wrs9oMPiB57x6U38Qp12ambdXUTjCXg9fiNAx8qduscWK4NsAtnnY6KafCA2ZkB3a5P",
  "key24": "vNtDM1nvbgwRhejhtYTcTTrcMk33BN5RUXC2a21vHp9MHQeULsEKHFhbv2AoGnGRrsTBKUfodotbxwy9tfPxyjR",
  "key25": "5cMQxKBfTooT7LJ97G5CrjQm8o6YdSPsAZDGsinLQon24hJjkNwN8wx7prAHb8jsC6zns9RhL1gUJFcoW7fTqnfg",
  "key26": "a4QjMAAJhvPq8J37HDaDGA56r4d9LBrUyAmZFtSArcjNzkyhPqQiCxibUUrBP425xUtErbsmr7ZLvv8hR1BoRzm",
  "key27": "53fXLaL2VJkR7DvqmCNx5gfVthtqGwfqexAuNUaU7RX2YmrZ8FQ3VU8Q2PEBsSrexycx9DurW4uiZr6gWbK7h2RF"
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
