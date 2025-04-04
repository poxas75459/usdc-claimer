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
    "quv4QLqd6HQfZAFd7HVfwk8Dz8XpoVFypug65Zc5scQfguFpuMX7SQJk1A3nN3bUHSGr8jNukLjLyQBj253XJyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pvhGm8HrMDuLEFEEWu56Webg7pmo484cKmpKJuYfXWbyfYhuTBzYXGXQLYdFb62hqRkbG4WWPwdvBaRAo92buzP",
  "key1": "4HLWYwJiDtHPi45gJ2Lbqay2eEADWC2f7BT42Cj99KVbN181dj5xvvJTGTUA4CH9YyN3fwQx9hJ1dmAgadtV8PkU",
  "key2": "5tR1dCMGda6FQLn9E8BQQAiimTdiGD8nx4fJRVQd513TUJZ9YMTDbv5T4crrigWG3Ct8Zw1hbEQGDyA8LgHZU48V",
  "key3": "4xzA8KVuv7HNU5wurvDGtXmEpFX2T6Y9wSFgoMbZXwZCYivTcbvChPYKZNbosSFzzV8TV7sf2G8hRNjuAHymiYcF",
  "key4": "5uZwVYpbtWUaJTwad3rPcj4v1K6MXHttXaSETzW5rVuNabKaSMA52tyqLTMNPq1xnaXtZbJ3oKRLmrH8eu2feuaH",
  "key5": "3FbKX6ZZHpyuMNX5mKWxhpKYCkfmfELc1DW3EJfGgUV6DrcSYiVTs5U8sz8SXLLndi8TNDLdKpxeug6gSbzd7gdB",
  "key6": "47c55YefpcvRXydUAaiaF8U7wLLZwnfPWv4YojNmQjAov2u6bJzoATm8U9VC3VnFS7kyMJ5N6Tb47WyBcwfLDEgU",
  "key7": "4aA3HjFxidyuNUs2gKbMmqwUru1y6JSzyPANxS1WWxuGYfpDdxDtHYaWvzMwMAQF2TG2pP3ZZEvSnWvDqf4sSqPV",
  "key8": "5vh5pzmeBKzSh5tV3Zt2soje9A1EAfP9KcGpzvRiCxnGYht5PZK4hDvRJHsPGdVqRpju6o7KvRqJS1MtPDsaBRhw",
  "key9": "4Uy2R7yQoQtve9ELVWqqiujUg63ha64uWJuYuAxEvonWuHkQDfXn5N4VBL6PEeE9E3jXz9ZuqHSJ2GSug5wdL54A",
  "key10": "3t7ned1Vj6EFUVbk9WZbTuKLqAhhzbtLEXEtyhQuMTeEXFWacWgbtFRrWHFVfzdCJD49CqKQZmDdAbqwu3gQQtXf",
  "key11": "5esRvQAHGyT2YASv7pbrjYpTRDYk1nUFCWJrtgkAavC78j4yt973fBK8RxBhscgThNqauCPb4DCVzKfaYbuop7dx",
  "key12": "TukTHPauhCvp3Atz6bLANJNdPJpVJqf4HEoVt9PZRCRL4hw5WDkM3ob8QEfveZENHrwiEtoH62K4KfErmTKNU5k",
  "key13": "r3Rbm633ZmrPqrU83Zh5PEYpSyLec8UHJyU24Nq1zMBzKu6zorsiPJM9RqDzwrBd6f7g5FGX4W6qBgR9VCgh2ac",
  "key14": "QsQxeyVT7Hi1RNUyaLXCf9vEaLdaCZKtBGLqcLyL6hQHEVwKoCoHjbGABdSPuZcuPhUsssnjC5tweL2oL9xjXuN",
  "key15": "makBZ7KzGY5dZgj4hSNnxxuPSnm7PVYTdd97aXeSRjNEk8K9go8egjBy5xRwjyZNxAfsyR8chMpbXTtmQzZYVtv",
  "key16": "5NCJ3QxFxF7gyZGVtsGy4qLX1FeBi2VRmimuAkVqhUXERWMFKBvbZ1Md9jRG48E8KcS92xavx5RJuh4Xro6ypR23",
  "key17": "28J8Lstg5BrUWdb3XuqvGWM73xugT47DqnbhynVrjE8LBL7X5g5Mo5Tn3ki9WF9QTdKWAGK1qrshU6kWo9S7nxYj",
  "key18": "42nExRJqGitpTQrhJftvf7ZQxGS2Z7pNX5bdYocCLYCXZVQPgeiH1CQEn4nJk65Eb5SVZwngYvkRAVHBra767BaE",
  "key19": "5vN7VnqTzENvPdVCjDZbE3iexK7VXGqzcQuNWs1FKWQh827ycdAmUVeWfCopEdF53LZMHmNjCCPxkB9vBGUjp9uK",
  "key20": "2mxqWbQxkMpeXmWx9b18d4nLWLXUfauc2jJh35tySXHCGWphMnwGF7trLu7Pqu9dA6Yho9kRS1WKtHqKknLpbyF9",
  "key21": "mrVQb8CqitJBMZk94Xtrt2r25fRGZZwSZqzvr8Y55ZBiWLt5hJQKmETuBuhg44H2ZiMPMrk3dpGqCCXbYL3RR1Q",
  "key22": "KG8CZk9Ez3fdb855Goo1csK7JQxkFjFefh6DsG6ozqpPiLKpWhRPQ4FGfLB1bHhMQtGvFpfZbUw4sFXXDJE3FQq",
  "key23": "4eNhfHwEzcM28x3mBi2XQsX48kpivrsTxiLpe2hBoFUG59drzMppUCLU9QsUxcYr1xpDDQ9jLj9JWZAjfmeWsXoC",
  "key24": "4L1F2wpVrv1AcchZEiq6L5KUm1STu85PHTPDGft1VfYQgVKBBdFR7iPUoZC8Wz3FiVawGkeBp8mxS9NqVuQTsman",
  "key25": "4cKiiZHybS3sVpa7YEbAtv6Deujaq6jRy5ZXS8Gdq4YiH19CP4ieVCoUmop1teGkbD7twU9dJ4vRBxuQAEdYtZvP",
  "key26": "3fgJrRgoGTSxoCUsCX1y2arLu76wP7pixqFFgMYdfqRCprZbccRwGW9WEbau4oB8G5crWhNfow27aCSZykq4vtbp",
  "key27": "1kQYrWbwYfob9F3e7gCyb2SbiF2HLSbgbP2rzgiJ9uy7kuXACSSpAZoMJNF1QExdVubDBDh2DPaV8ouWT6effDd",
  "key28": "5SrMdZYiYZwZEDXPGuxnARWAEABtng2pXQNaeMx3VZ7hpGTzuE32YywFs51HFBMfsruQxRGmg9GzNC48cQTpvYNW",
  "key29": "3a4LevFNssHRGCFnAkYckZfiGMHZpjxdLuGuge2MYA2F74MT6VXqmea3FKNGrKfSChXjsmgdCx6G6eJZf5uC2Jhp",
  "key30": "4SSUGBbxry5T84rzswC6of2oB3nanDxrTHw2LRP65XzReaHxscMSKpjWn1neogMSMvboUSZhWd7ZL15zyAno3EuJ",
  "key31": "25jJr36JCKvExy4d3PoHsn7rVQas7woh7sbLvbEEiksaYqmYePazmQbND3ff4wrbMLUU4yBhEQkntZnA7YcNNPNU"
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
