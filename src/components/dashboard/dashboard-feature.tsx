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
    "41EfHNzCdFafR3n5qpPiipEUtFFFKkzRTTv747wY4gvJqyz7QyznnMju68jg4qTaKFV7UqFEin5PyoLetz9a8XXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcfJVEDrqbiByyGaZjvAAgwoqrUUuMF8odPRDZmtBV68snJnsyiSqY9mmhiX3Addk4juZHNUkv8tizTzrBChHD1",
  "key1": "xxxc8Lj6WxjTqQxjfqw9j91Rm1EGwzAnEZabSF2wF7gqzHUKafj4ZnA1r4SnANWSeV6bosvgE21dnHbC7mqQse4",
  "key2": "22pwKfi3ATYE4Kp2K8YF9ZJmQg5zyio5X643rQY3WJHkAQYbMASyvGDE5pTBzd8Cuexz9fZJfqHUzyVgrd7hLUYm",
  "key3": "5oWtoCWKRZHvcghLoYv5Ub1nLv6wH3Ajz5NQ4Q7gK6MdK9e9eJepkQfsZzLoPDsUr15SD4qDcYwjTLsCRRRX3mGR",
  "key4": "2MNjyeyr3Z4owqft35DBGbWBKkNuuXwZWWr84YiYK1cqWrbPzuaF673EXk7FM3shTFfXr6NDPwy17rCyzQZsai8c",
  "key5": "4Jm4JDLHV9SReDLtBeECb8QF7bExboLiEEuXZ64rbXAA1bGqh5EQP5UsRLaDBaTM8NiD7RvzJTpsYaPHJh5MMJsG",
  "key6": "5JvUqby3x8JZecCLaut8tVgjRWV9AVcJJb6ZnTE8aBmXHVxN4WmX3ZQHTgJKE7RmG6EooYjYEuWJW8yyTjWy3hme",
  "key7": "3KTv1SXmsu6pJEYk6oR12cVrzgjCQ7JRk9cbZFTs7J9kBsLiKF74cEFYVyptwBnfqaajUAzUtMc4EN8no3B4peox",
  "key8": "gpqupgrSdVwiHVsqLojaTBymND4VqtZ7iL26ws4zRyYWGeyC4kfLAeFhVzGsKRsK4CKcmi8KHvG2vpTFbdnwkEH",
  "key9": "hwkVFDmaViPgL9JYueorPmi9B7T1cYecmAKHjgLYAvdJVP4hvxBZ6DytzUbDwRKCc5yFXx5L6E2fNF6mA9wEcf8",
  "key10": "2WdC7EMKsybyATNaXWuq2yRxb3XBJLpUBsBave5mNrS7ewpBUkfUFohspSAKmmUcpguCQ4fKVFwP3dq6YCmi21yZ",
  "key11": "2M25F9obcBoGb9iFTjzeW47dPvhxo3XBZbjRBXESgK6xrFoZXSedMznfc7zdaAxmZxeCX41hmbUB7HryD5EuxTWA",
  "key12": "2kEr9ufJP5ZuAnQXwVcZEVZGaGqQ2yvF6MMcyTB8uDmN3AjSs27C2nuTeZWpGnv2oSSXbT2iZ1zVFPN4p6qCEsSe",
  "key13": "61zXgkqn58jUvsUmf6qmD2m1mXXzzBE7NVv3Qou3uvvyhqrxJujEh2k4W4KfH2qPifdwJB8ncq7QkFbYuf5QGicn",
  "key14": "4iVQFHzyXZ3pPhAF2GZqMg8jp8ErkRfAet4w8U1knFoxJ5NkDRBffwfFHLy6Dory4vq8eZM7XiXruY1RoxvuLvyu",
  "key15": "2y8C4A85Uqz1tcjqP8p9UaX6Jh32gEZ2mvWAvqy1ZMFLCMjTpTTY92XzgfbWMCtTVjCxKK2Lpkd9sx5sFXoxx3YP",
  "key16": "2tXghbbky4wqzqtfUawxjtBCaAB6qEEJzsFtTB83Br5cifSvrkxFhqQxmK4TU2jeRFttdHgKKuGw5DmUWZZNADVQ",
  "key17": "65W52iWHXE5z1x7QXvcUQUbLWv2DMhxVXBoVgdqkpqpj5CjtQSf5Se21u9rTnY7nYjc5kGMU94TDq1uHfJ3kebY9",
  "key18": "41pnwfKSyWL1xaj86tMbpcoZssVE7uz1Rfa3WNztUNGELMMABGWmfjYGWuoeATrF5n1YsR7gTUCytZL162qYjs8V",
  "key19": "2sCicQ9R3En4wRyGdcD66TfUGozk87pJgRkGjDLNMGQbggStaW8BmGwga6S8kPxgD4fbtiPNKXYueJPg9mgANn9j",
  "key20": "31vAWDMNZGkm6xQL6j849FzH2wcJyQrkVcSyJfgrMVeDS3BT6JR6y56bG41Eb9YGUWJwqTSekfF5txxuFG5Vfv3o",
  "key21": "64926JqcNy46d3TFK3vMty8rR45CzkesmY3ioAFGy2HDpcmrChyDVhGQXaZY39ctdMoZu6byEmJTxijhyrUPyGhN",
  "key22": "2bDW7pwofBpMThUFQc2NW9HBEKFUcXQueUNqd6ZQ4Exq3yREzBTr2QKh3ZRVJyCNZ71HsXxyPwzDJDUxvbz1vRTp",
  "key23": "pAVe8wBhHWf1eYaQ7EwnoVg4tGkBgS9nNyVbngBJ6R5bTd4Qj5JSRUbmm5VkRTNKNEdoRcjtdkGHNPwVN74MsyQ",
  "key24": "5bcFvjpa9pKrFJE4RPTKReYGfmQa6GD5wDYTocXhXjmxLuKsUeLYWy9Quoxt6raunDMuvyL6jfkf1SrXugwTf7M1",
  "key25": "RGRh4r9t83rWecCzNqBtEm3yeUdVV69dfJ2SMDvF1CE7zFaJJgdRQhLonoYCPSG3jQyMuzKZYEK8Xe7pRYMWZPS",
  "key26": "3egDa4jdGs3mnW2P3bJqcGNuM61ycFx83JNC2UvXf8vSpDEHkBvK3tmt4NGo8xi9vch3haAa9L3QpJUL8JH6YYxF",
  "key27": "NQ5kWyY5QhQhERy9CJgZmdufbRvNVB8HHp1WqAbBx8y1AVZkxbxFxdHE9yKRXYrGdkMJE3whpK4VU46mxqgvuZB",
  "key28": "cjpf42vTFkt9L67DNRsY8NmbBYBNEqhwoQRQtmaFyKcREAZTRRkHYiCqRyYNochguwSmxU9N8abuvoxUscDb9LY",
  "key29": "4CBTTLcFjzVxHXt5kz1nUpnaqbz1EbdGBSdPidGWUUB2HL2oAsUeASjN9PVfCrKcX8PtLRbFsnbUg2nXyQ9N3C2U",
  "key30": "SJarjMXsRd6Lf3m1TMh8vucEnC9Ew5H49Wq2Afju5uvRpdga9eEcnF4B38DDTeyMU4WAMEKYWcVNrojGCRA8PWd",
  "key31": "52wWYMAyyn7sUuGhfRdHcHAz64F4msa28U75jdBAWMG2QSS2VnnYQ9kyg6Cot2VPLcf7ZPTZhsa2htKFSPd8a4e1",
  "key32": "55kTqin4bPjMwwfTGpa11QHqvnMLcp4gq8zn4UszHfPyn9yvfCjdhtGTw7NecB3iiqeFaquYDn8b89keuMR1scoZ",
  "key33": "57uwRvDzNQwrpLTsJm8uh6xoJyGaSkQi3rXHUeMAy1boA6bQdjbmCFDmXzBQ9qsU8ZkGUxuRqzDFR3XnuQrxyzbP",
  "key34": "5vbCMiFNJ78ozL2dJvDDGjkiLGUDADPzn72fY7DCUBoDKDBnEnBYfTYVXLLCAuWiWPbFjA8D7nPvv7gr6MN5E3J5",
  "key35": "1VviPmKyK8yHJDkdVjpv3DZd4g2yDf7ABrMkCL5B7xdnd1aJdeU9ewvJBrg2e8ezX3rujLMFAcPwTUyoeDbnTsk",
  "key36": "3B2iaZVcATfH3zEjWTWow9pHxEJzGnnqDYHzE87c9eKh1tPonNZKikJfjmemF9QEaenoKLh6Q2GhyiENKaZZkYR8",
  "key37": "3gEUG7SdybiRD3uc4caAYSJeXnZ7hadHwQtBsrJx1oMFfAApTWhjGjGPj9MxJckRhxKMLjJi9WC5GryB3xYZVLUg",
  "key38": "38PcG6u57FphNWa99SHc3tx6SUqa1ArMZ5CBvtz9GzJU2UG7Rivm9BnjTJn7iB35jxVX71k4jJ3waCUD5cuQ8R76",
  "key39": "RfmGDiL6DVgX6FsJnWQD9P5U6wqN8W1jKNiXXoEWqNQwAguGEfHJwnNGZkpZLrbgQ9se4KxL1DLhdA8QwToTBMC",
  "key40": "5vSXivcpWwJnG4zh62K5FXCd9BbEaQyiqGqG393nYSffWf1h1dK6NZkiNgeVxJ16Pq4oLYd1EAePfYRmab527bEw",
  "key41": "5t9gg7Kr9dTPd5AkBxEtpYWWf89vLCZrGyTWNJzdHewb5Gcd55LCiyYLK1uGFMBhEVPv18evw9j6Vexr537HKmk9",
  "key42": "64kuKajuPFCXscZmVc5gK5ejkSZ5MgiFYrt9M9s9BKfDZKqw4dxhR1nmBQKjMKpgLtCsLUFAfM5SPWBEoCRg4LaH",
  "key43": "39DuX4BxNV5WXN7E7VY7aCZna52FAViF6XV9FL7ZikZPJwQM6fLE3GEV1txPVUHV3SQ8z9T4xmuTTXBfyth55BRx",
  "key44": "qcr7R4wsPEark3uJ6Lf1jhiwExB6uCs2G5fqYAMH3bAYFLybPdGcTkWLnJzmH7QtktgBoxPYVHAArfY7J9ParjD",
  "key45": "qFLSaQLMxMBJMrrCwPuyZ4uexwzwj6N3uGz4MipudPUtpHvunBwQxbPdkaZ9RTyejutU8W3vpMJdHtYtttLBdQF",
  "key46": "2cMUP7mkayjq7hiz6isJ8dJ6rvZvyn99A1YyAY5MFsQ3gdWXBshSewzTyoUZxEwLrDxuNBHY8dnCZfC5J5wa7mCv",
  "key47": "66mm73cRNF1ctwsKAL6UoTAJVF7CdzmAgCmT4dWUHLziVPdoA2AFEPKYmdeVsDhBwd6kzjx3CuWmtpqgmuSSdCK1"
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
