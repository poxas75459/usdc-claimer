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
    "4utynkiVVfC8eCXfpcWqVLJvtFd9oZn7xhWwKyxNwDsGuat83VafoTTpvXzYJvUTQLr8iNaKrH2WMyzC6ckft4ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZfw42X3z5KuMhceTduZg6ix5YkdKG4e6Aw8a6om5LjYWed7FvfZhiz8vDaAx6JFhYrUZ3nYDLck958hkHrh8Wz",
  "key1": "4BVMJwhsg5xsBZjqQyVPJ9oYqbLe69mb7oRdxwhAnc4atovRHK9y2JiVM4xRqcq2a5oH7Gggv3h7YnF2wHZiY4ag",
  "key2": "ynmBWqDbVR2Z6GHHL3z87s6iAENMiTeCuSVF5fo84sDMPp3QKH7HxqUgb1AyiQoCVWP97zYaYvhQQg49YbqHTre",
  "key3": "5MJx2BPyzCU5WFJLZThQ2XhVWwJiiZnGEx9mRig9WwCWQN8v9ZYB3gKhKVaguNJhv8WUABXCWEzfnE1bSeHMgAaU",
  "key4": "4fckUcjCt8QsT5BPQXgx4rdre8ToH8c2f8mx3z5Sg1b5UDTyXngj9epih7yRG764owCdXQNm3xVknXPyCArzWeoc",
  "key5": "2xgf4F4rCgywdsz89VB3MCi18xKeoAYgYZQaFNQMxtz4hvGJvao1BwFdcT2mdMuBXTPTpw9ppJrpAKGK4BrN3U4j",
  "key6": "8zF4un85qnB7Vzj52zHp6EA4A9oJKsSrt5zpNuy1cV9dcPRFkU9YH7Y5xgiPgmgnS2cSJbbeHQ94xqG6t3Y8te3",
  "key7": "BjnjyLjqetajvpdrE2U99uWfm7s1mnMemhFBYziNr9dHh43MG6Cdi8xWTk7As8t2rJ3BP8a2gHdgrWD3CM1JgMg",
  "key8": "2Y1ebhvdGd94Z6Ad3snaAJauof6PtGvAPMVCMqUJSS6536W4YALPQcvzLoRRsBatGPNWLr9KspwczvPVfBNhLoS7",
  "key9": "8miir2d49UC61VhyrrcTUNbQ74PXzjLftA1dyXbac7GG6C1N5ENGPad2AbAM8aYnDfsGUmqamvhtYEaHrkJYTzL",
  "key10": "2MHd5LNSMejcoNuDSxyfeqzRSXoKqQSz1eeXfCSGtKCXx5ePBmLc87oWWEszmiBYQsmp72GJimz2rzzfJ2hqKBsK",
  "key11": "4bpu1pvXGXkZZKyrHqSa7KutRN6osAWT1W2YAn5xUYpBBxPaGobeY47Pszhs2CxBwpAMumLVvqFWJUB7fRii1Wsz",
  "key12": "2FAgDUbRt9zVM77gN6pBnXHZt8C7cyUz3DTcHnjBpGy8WuUa1Eb9sA5BMpUR6gEaQFKCKbmtZNoDPLVpPkanEj3V",
  "key13": "5RacWucHKKKQCX4oJQZ3DAeKFPMmTCdxeGu3xPhBWUiMwFx664gEdnN7AXRNTL8vzAYgaTWPuJLExNRyEKrK2PfE",
  "key14": "4JWBzv68uxGXDpJ8fJiK12xAMNVQKvoHiaBuHQwnhtdekzTvRouRhSKUd3TUjvUnwqpVdApcswFisJNWXFDs9dny",
  "key15": "5A7rK5vAFxuthGW23gSoVqbdCiko6ya5FJMweRsbbDwM6bu4rhyY1QsZuLEbUmBf4UrYJhqzCnJExE5fdFo9K5r8",
  "key16": "5ZCrnzmWfTEmudrevPTpq8aWWt1MDwAWMbNmWZg8JzZiDaPNspsUWZPbEA5CDi8AXu5u3f7pY3sDg57x5AuVoFYy",
  "key17": "vW7CLCJH6YHxQSimcuqCymeqd2frASXyekrBvTZZoeFqBWWbA3xUaNfPD759BDUisRBxLL1j7JD6HLwUjk3iUVd",
  "key18": "zorZzVwaVcEC5vQaBa7vDSaDMFrq3xoqf47kXVmBssCEPNJKA11YuXC8ivqoJ143F1TfXBkBw9YmMfPb87LxJ6Y",
  "key19": "wY4kuUin6ixYENmtWP57rFY5aERJFKMkUWHyNqqigj8tTuhJqKzUSfMyiHJ92k3eJpzZac9MApQLz7HeQzzbDKt",
  "key20": "5LaTvpPFLA1WiSmRWHzUTZLNjfb6c2dWLnxhQKczEe2pWFZM5ek475N94wemQPRS2qZyWGGSyZYnakUHVgcQi1Ka",
  "key21": "4tQCjucxCSDe3m4xiBVMQvt29NxyEU25qwB6r9T4WkWbb44ByjmeKLneUucMGNW5TQGdWixtBGZn8ugs5A6uBhcJ",
  "key22": "4eeuW3oVr52iZ53yEpMpD7iWwtyD3rUQbWRAsaPj6YQZ8dqJqvBphsocawuyFPymRT9QzSnUkLkUeHSb7vsF8sfC",
  "key23": "22YrTxuaoTRqt33HU74B2FiTUG48XNPNTc7H5SwJcPW12jEu13wFfr1eAZd67dwBmLcKXmwstcBzhv4hEzvjBKfp",
  "key24": "21vWwq8y826wQDPkDuBdcKNcaLAoTBcmNYCP5z5HTpVYgbSynZ2L7DkzbnAFrynNnhf6uJVg5BHCijEcpAqXcmk8",
  "key25": "2trYnGojizF7sHtZfLvvXkwPduCBhHvxuxzc71MD356xkqBq7h9Eri4YtqVaiguach6iYyW7LHoPkoqk2u4NiTb8",
  "key26": "2qA2YSAZ7KvjuWfaij44ZhgWZwxxETC6EZqieBSnTUo5Fyd33EGR6ZrKWa8xXQdryo3szH6fmAeD3KFtH1q6nHf7",
  "key27": "5RhzqyXAkGQFtKtEieTucrQv4PjKbqz9rvkGesotFm3E3yu4JPCBRanMdDi3ByxYZQBFq7V4cotJcu3i7ZRDcZ5y",
  "key28": "5MANyhGwauyt4es11nRt4cvVz3sCWQDwazQULJ1JLJCWHtJ3PYjVkHYoQd4UhPjwy53qNTotM21SiGKoNsU8LHXL",
  "key29": "5BrkTfpq7wMH4yZb372EN4oug5QvJ14kvYwFSh9rpj5qNET9X1GFw3KdJFomeirAhD36T3tuzR253WRjGRRLeAjx",
  "key30": "2Ffr5joYkufmUhf8mekH22N2U3WTspU2PEPBTYCHHZtEYz7u3NoRDiUqCsP7CeKTxuLXNynCQwYvK7xeT3La9sJd",
  "key31": "4BHLtKsi9ZPWWR5nk6GrNc4MMyHnGykLggCF7Juv1vCcr1xMcCMw6qu2nJ8yVXjqz5ULcxGMXWCkb41NtDVjGfYZ",
  "key32": "67TTzBdQmjgKQcXicLAobBg5jw8iHMMMFfuhSPn9yiYMpvgWJS4hSLcizMD1pfMTQeZNuSiqeurEQDiqiR2BgsXx"
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
