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
    "5BeKaPacF1CzzQKByRZNH7jqG1muJMmMyxNDyV2RrCmCy3Ys2SHiQYTvcjT9HqbmrCCpo6cawXUS1EzwNkZ2Ge5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9uCG4WTJzBBzv1a6Mgp17DvTAoH4omyefT9hkA88qMYoeHsUdYwUaVgUa1eXajEiThUfFXPBtfS1761K7tET1J",
  "key1": "2jmBmFD4DkeR9m7f71cqzUaCHNekK9bpbEZGfvJUMPDtpwNgmvXmCr8e8oqU5RMqPnKKckWeHSPywwUSfoxkiNCH",
  "key2": "T8DmEEB8dQSHVKo8M4Cx2xyWXBsvnywtW9PyYqWrKFykgTy4d6GuLW8EeVjy15tiPJTvrw58neMufDZ5xo5BwEh",
  "key3": "5Zxy41j6NTWF2P6TjzJ3tXBp91VGKpb45gBVwwmEDsHd9Qq695GgmMh966yNeda94Zs7RRWg4kgHhm9RBk8JwmAM",
  "key4": "4CXE2GYWiHXPDfviHfyUiaL8uwLzJ96gvTforsB7D8BPh56eXC9kK3KZsa9wnUuNXzv9dYYeZfDFsUM6k61vikf9",
  "key5": "2oBCjs1Bm87KLqrXxDQroqXY34bEDKwd22xTvr6X4DBcMKVsd5C6suCdQd6f7dHHGXfE27jxQj6dKfsC6iw4GGCn",
  "key6": "4tCoShfZW4W5eEndKvAbXvDaVPZhZgr9ohXhBfNRR9yMbReR45vJXBGe6jxtyTZzBmLoT3xh8ty5SmTpSYwCyUrV",
  "key7": "2k4pwiJq56rAngMmNwGKZQ579CMF5srAdEY5sBJfx8CMwXcR4v7YTrxvXDW2KZqUy1sjkhFWVrYLzHFGUiQBpXHU",
  "key8": "5Kq2DHz12uohbVVdTyWRk4wGqwpCa3mtFoan1nDL37LMVZhBukzLpvTLyJ3MMvLueo3mKfE2CKiupz1op2MJCwxV",
  "key9": "2rrUFAr7ojHBPmuxRNSjUA4cnMYdSbJtackp8Y84s1VrsyJ6qP7oGW6NSCgRWpa4PGyZcnLXEKTyRSUBagoaKY1c",
  "key10": "48Epem2W5PvdgcddrPmUU9aQDoJLA4sVtLNogPJuBMjUQ77eQjTFua3EtBuN6RU4r7ANDvTjpKHakWQNpweuChn8",
  "key11": "4bX4nTfvmDV8tZkvcHPjAerM6u9wsDjptkBFH3mZ8h15zhCAZSj3sjKHXcmMm1YCMtU6fKGcjWEeEvcjJ4UqjEc9",
  "key12": "4SnTmprUdWLrCQbJgP57Xhqw2uDhoHjV622gHGMWgjgSAieMdCbUuT38d68gdrrATbNkJbKpAnJ12fxGv3KLWrM4",
  "key13": "2bm3HZHwib1vPUwJ1fCurEQBMaJQTn7tZBe5op8HDQg6iMcRSzAGj9oszhGTdzN5Mg97KpkXzmRqQ4vBEFa9cA4r",
  "key14": "3ijNHsv8SXiw7mrbLE9oJvXKsYeGvnJnA7xLuXhKbVk1DYZ4yRp19jst1KAFp7hbzdMZ8qya78isTdwNYnerxn6R",
  "key15": "39n37YjNn5VsvTUTPYe6SAYb5TTenMbKwzdXVsZUR3BQmRf3UwzQCCMgws7o5HwDuNXXNUqkcUz9DB9xGhmX8dHt",
  "key16": "EUrNiiPFAcyrbiYeqDSit1zvyRQSWVjMFKCLSdKBN7Ev8FVA8nNMP4xneoHmQxv4XDLrk65sQ41phLv5tnXYtqB",
  "key17": "61K7TqRTVr73faugQz3eh2c4DctiiUbyu6trTD6C7wyf6521AFJEThEuoYH1PFLgU8xoBWNUSPLjzvM8JRFxyYxB",
  "key18": "2uKkn4kAWAGLhgSxXnKWNZctYaRfWTY8EA4AoBRbcX2nULPJWws5pJevTU5kfU6xQmiRg84QEtx9h7s8NUMRk4pM",
  "key19": "3qRckVYC4WoseSvgCuJCejebqgQH3A5tGaGnv4jqEYiK1ny2DCQ16gjeWTbtNtM4YVNTFeWz9qBvzsyExhxcy1vP",
  "key20": "5Vaqi1msuyjbZECHVnoXMMjxydmUHi5B63okweBbpKYXRQ7mQeJBtPa8G1KgsnHG7gsN5ccrRRBGQQnEHnB7KUQL",
  "key21": "3zFubYuNoQ2sWndDUVQnyGRyCHHi8AQNDmQSLX78QQC3ARPYMBAyacSJDPJ51upESyTQRErdizhrvn2mnU9KvAx1",
  "key22": "4opQQc38Dp9XGtceAqPxq24MHA8TWt3rBVTxV9AKhCYDronCwpm6C6MkC2ereo9dMmA3rXr8J9NVwqP7Kkr7TJ8k",
  "key23": "5ehP59GRNZQx5hfAL5ZqeYARdCaAB9sfbFvV85KhYjNL6NowgZEJLUytM8Guxq1USzF7GKuos3eQ1L1bnpLD87Ur",
  "key24": "DFPXKtZFvVQwo7qxLxRKA58yWPQwGEpJYHHNx1YPaLWa4jWeWBYzjRqkMu26Rd1abmHTEa8XsigG3J9DUpT2bFk",
  "key25": "4pj5dniNXwzz4kUjpmUYPydwRiABwWVWDmAPQxYEvjMPrj9Zx3Nz2GeYykoSk17KRgRboZr1XvBXdc9PbFXCPZWd",
  "key26": "3ZSCSUk9HzMxqDq7cCHzrBfCBL6m5zQafhRir297oj14is4dA2Cre5iGbTJQqiUZ5yWpDCwRswUUTpbzg98ezbiG",
  "key27": "4cG7pSvxrYh8odc74C697AuokWvSpMAnbYuPZAMZqfMtoYnQW3ZZV5PdSamjpSAU8CHW4dBU5sKhMQPYDRiu2EcB",
  "key28": "4zoFsjRAWHKgrrT8KXZ2fgCStfGFMU9wUCctCBqTarZG6d5WcmNwTYtbTq7ayTG7CjgJfRVzsviBCn8A62ZVgJM5",
  "key29": "3q4wUdcTYpU5ffud3q3mFGvrTKBNxnFRSxBkVK19J5cNKgRN5LxpHLvpoMsj7P7C6BPAxAaoJACBmeyhtHt6TExR",
  "key30": "4EJbB5rVLM5fzngz6Rxxdsd1hudZ4qVU8e6R5oxEMzeEwWiKs9gmEmTScKodyZGWxP5BbuNtPz8SgmhVUykqqART",
  "key31": "1eUdk3rPFFA8Mc93MAtkKCX5ZE6dEnHNZBt24sbdqPRks38qRjyQGeCnH7LFMsGQkGfByuFhvQ7U8Qxup14VirN",
  "key32": "4cEqCBtoQWV1WvF2XHM3ZdM7yqW5bakPUP5BfcgF9fxLcx3Yo4Hy944fv2jwSD5PtDdhzkmDsw8LDnfQkEfbTHLq",
  "key33": "5d9mEvuawZqmnkRKsymvhV5xHiFLDr6vV3YYqWirBuqLhWYRct9HbvDZVjzPadxjkYKkyaCCi1LfcB7vzfDBcjGG",
  "key34": "5EVj2xTvTB53r6SLfWyB4eHqxhG14r7vChfSr9XKUnPvz89g6fr7gYWBW9nvGp3vvFPZAv6kvW152YRVLedCYYbd",
  "key35": "gFFspipWdqw9ahQHtzcovPT4v2m6MfBPRZncCw68AYEsVU8sjbJLBWfSUUcwgRwWisFuLXNurPAnYsA9NDJ5ZY3",
  "key36": "2rPEdo7Dn2p7zoMgQP5vRgkhdjrNq3J6CEDS13N6TkTcjzVNanLqHHmEVgbdNkTy4koLsPKpDJzYi2dqX8VR3FG",
  "key37": "3ad2tAQCnprExbG9897mRF1jVX23fPbx7vxjSx9YKnEhaEk3XBVuZtWJ2CKfU82BWfb3jqzG3ngsrDLJ6AB4XMTW",
  "key38": "54osRrGqjKvHzzPLcCttytHHH4UbPymwr5FayTrXvQmZM2ncREpGHdXDqqvH1QUuhSqSZkDLPsJ7dxsWNjNiVRSf"
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
