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
    "1vY3L8FZ55xZs9957FzDJ7KYdzvXGpxwpseLhu7P65E4QF8DFJAHG3tpDi3ybm8q3r3e72nHHGDUAzwH9r6b8qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p35jZ8ZkwvUJsUFTkX2Dj7yAKoZgs6wj5DUJV8mbEHqiEpGudq2jKbQyJH8WUkBxcbbMtJLTTq7BkJzVXycZjdU",
  "key1": "2RC7vQ9Uooq84ct4daLXAPKdJwNe38dMi48GjUA8dtW31abp7gur5JFJSLoHi1b5P4hQx7Pg8Ud26nY7GJnRhJhj",
  "key2": "K8DoMDD13YXKLpiPuHfvVkLSpwAQAcVbSNgypRgjA4TVrtgeYQQLWA2ZxLY15fD2B9gKL3wq1hzDu8YhpP94N4r",
  "key3": "3jDtxNgsj1exj7Zv8bnGanZBHh1dwZ7MdbMtJVmJu5v9bLjqpEYJSrUzkJMdp5es4fojgobessSRhYirx3SSuxSD",
  "key4": "4NWwxvBzMddgv9PY6ReD2tuKzqAidRGyeynFv6vCKMCK1QAhW9QoGKXjVPVtwCNsZgycPLHj8kpHvw1fCHS84Nrt",
  "key5": "5kqVrg2poJSs6gqThoctxoZQFh85BHn4jAnbRfvH8uEaNJZckipUSLwWKJyGxmyuWPnkqQapg862RtH2XpnoxQVK",
  "key6": "328bwLKjtNw816UnAD9kEx1idHvrj7wV6hguakXkbXjh8RRb1uUW93J4U8A7CD1SmHwyqmo7en3hQZoMLh89tXVc",
  "key7": "N2bitr7x3GzYJqdSNEsqZTz7bighftnMFD2CqPjfftEGnVoW7fdzkcu5ocWgUoGsir6heJQMuXY2bQpPmjRyeKu",
  "key8": "3Vf6dhgp9JS1rZgYvycGWG4xMkBtxZqvxNLH6N9EXWTx9vDKfmEZHUHcWVaXgMYCddWeZrywm1QRTGMo41SzHUqy",
  "key9": "VHTpqbhSn5tHJ3WhnZWAHZZZJzJmbfdnJdewb1h2BQSuFrV7tibu2KUEjcqQp1U1CosDTti8rsyFXpYyJL8r1qg",
  "key10": "3AeCKFipDSKuNrgTLGyrrHNxZqnCwDdMmBpB72KKDcz2Fo1H4UrDZZmwJ56FxWwkG7tuc341sqjZqYo84D1iSo5G",
  "key11": "3Y1NmLRcodcME5PJRsWBvcADqWnqBos54UXcFjocTcXWi7t19bEh8QhdgYzUvHMeMA7qXuhjUNmUgNhnPQqqagbj",
  "key12": "3mjFdrzBNKssmSV1GKBDmWNP51qtkj3PeFw53GpdUndGt9vZqzwYP7Nqb5SzovEmTTfBeCpwfjMFozbcFSopwSMf",
  "key13": "67XndDvtpMAktW8m8wwuHFBRSTP9PGP93RdrobFnGE6BAFBYFgrdg1KQFdLgeCTyV4v5ruKoUvn9gahnoaTZYYBU",
  "key14": "31PWtj51UJPGDVCvuLuCd9c5EjJ3y24cphsM5ayrm6y3V5v4XMaGo7rQvZ38SPK25WMLNQuvMqe5Eirn98WsmcMR",
  "key15": "3LZKrrSSWq17KZMAUV8JixZQzfARDALz1fR6feVm5pkH7baLoBfnYwAoutxN6uQBqta48rbcBwUeSuGXgUwPLytM",
  "key16": "2LEEcvrsVpYkUAbX7mPQ3aQsZdupJkCXSbnsuax5HvA9v7wft6GvczY8pX8KNfR4WqWeK8iXMFXSBNQtLjqoHGMu",
  "key17": "62s98dAk76dsCQxHEcyuoyujcsgGKhanWKwewg95VvFWUr2Uk4Cw89kVSZF8mSVLKvJCb21DeNaQf4hezZ9CZx8a",
  "key18": "2YPUNFnhTd4L1hBvj3i6oanZWosZkW88Dgzij49WM2Vkf5RDvjo5bowMe6otCaC6x12u2ke1ETnsffc3tQcRR2pB",
  "key19": "4AR2oaJtqEsgmWbi7zXJTZSuR34BRBNXM6BiAs4odFmds42JqzLZBiqkXrzQYoktznHou86MQdM1aBedKBncqAuB",
  "key20": "3fRKko3w66NJkpJBxVtD1oXFnnvSUo9oUczp7cNsY2bZRw9pVz5ghznsrxrbYPXXwS7Z12a4jHFGp2jHoKojmEgV",
  "key21": "3GUmqp39VSCYSJYCihMZ6uULtknBQwVHiZGcZWH9oitJRPC7WXJQt6eGLEUbomxY4kbfJjcJso7WUYagy94dPRqs",
  "key22": "3c1AxixnFewt1C4khVrBjbno2rF6jCirz1dS7SeB53UfB9bdtc2WH5GBAfQJxrhBvfEucNNFzW3nZcgKbJsZXRFk",
  "key23": "2siNMEigQWGbTAzU3QXcR6PSoWmVgMr86PmR7CU1MPyr9f8v5MtFvowxkhAJf3dPDcWuNWm3Nm4ybQLSfv3YVgeQ",
  "key24": "49vfVvvXuY8rKcbYGpshg8KYSr73sdsSRSH3KVy3D6sppn2QERW1gscgDvBimqfBSPoWmU64kRPj9Qdk4Q22eZ6f",
  "key25": "2mBs7yvVBugmkKoEFyXrg58SuaeqD8qisBgCk8gxkRvtHEMXZ94gZMwNiSgCqVAd69Lojfh2vsiRLUAu9mnVV6UX",
  "key26": "2c7zXB8VP5U13dP33cN9jZpdMBu3CfYS6JM4Yfr88tpfhvnkL2pFKdw5Di8oD127aG5Q2umAzHC73PF1zqBmkn9H",
  "key27": "rACdb3HmD2uRKTx5zVSNhgmcNzxcjB1qmn1HJzfKcCVhgGTsLPSMV8APjRzt3BKraWnSmQgBYeyzzx2uMT2R5od",
  "key28": "41c2x9aCmm9T8otM7UwtjxF3jLJoW3Y9aLXYo9wop9WUrQN2PWFX1dwN8zzvJrJoQTouAZxdneFKdyeuFNsPX7LR",
  "key29": "zTU3rCaYK4o9cvpnR5FYVbo5uavByAcwcC3DUQz7uzo4sANTAezbmhkLqJtnmrucrhBk2C7nGcupji8tvNtWkEd",
  "key30": "wEwy4xX9nxc7p9XJCMHnrpAnsiSR9zNM8CKPtWNL2wxuNhF2USu6ZvLqkqjHcCfPrykvfr4AbGnZEHhCdr4KVfV",
  "key31": "ovR8QkPveyTiS8xjX5onknz7t9qoeNMVKJzWEt2V8KEt2JK6xaZyphgP4rC4Q5FzubyNhPzN4ZXKBSZvSdVpGNA"
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
