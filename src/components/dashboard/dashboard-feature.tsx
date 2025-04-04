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
    "2duc8XyfJbA1tXzmBe5GR9oHFxkdkErP3TfbJ5xuzNPrfn5Eo23oYCJZiksGUzYeeVGHvmwZjrEejBAMn4XuvhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uG8whRzvX9D1rYv4aky8fRRXtFzstXwsrKBJcXHEvJ3Kxrs3bVSKYj6LAB3WWumqoTWAJANHjxukbRFh1d7wxm",
  "key1": "3YtW6t3w3ytDdUYwBXGLWBdtjVyA2nfB4SM5x29gQ4UDHzT6bUDC4nVLNeZmdjNnCAu9VNK9mjfiMcFSb85qZSoB",
  "key2": "5VgQgyxMmydNBMY53DHQupWTb7DuZjkWuPAiSgV2o4xrHEyjxXAvMc3j8Cxgvj6Qse9Xo91u7TigugUj7cwNHLPp",
  "key3": "4MQ3QqPGyADss2svbWHGPXN9XMTMemM7evPcukj2JKwpoVmHEpQjcjcvxrAoLSDNGmqFvYgQ9aMDjHEqeddwaRVu",
  "key4": "xkMW78DTqpcpChhTMAxVRHnYQqpDPB1UNB3Gk4Lmgh9xqLVguWmg9EFQ4MytZLv7m9dadBTK3npoDDZR83k5US3",
  "key5": "4FUYYTGNNvHHhJUZUhny44DkZXzqjCPNdn1vywAYeQVq2PZZ9pG8yuAnqxFKTHWyA4H1DVX6VhcsWnFQrHGgwWJN",
  "key6": "4NvZGP9M7ENKKZrjLrzRwCPJ1qKHZ8DGfH78CHNKKKG8skQUoEErBwmadZTQMqo4obTxSYJffcmG88AJVwg88MRr",
  "key7": "3F3GYLoT5yDH9tXviwboCCYb3YP7HERu7KAbzhUhi7mtSRBBKS63Gx9cfjgecDmcP6WbT5uqqrXhMHyJNLYq3FiK",
  "key8": "632bYtvVva3fytf1QQNXz5CS9bs5DLDWUAXwa8pWUKmxZnjwYGLoApajz8rvU6X2CBDyeKz9mWqngeSfuN5cgeAd",
  "key9": "5kmHxibeBebFLfWRo6D41vpc7u5vRK8jrc5AmMZ2uu1nF43ZPXfHLokN2Gn3TnNTzYBtGj72G49M6sahEzC7QBRy",
  "key10": "cYTqEAizfJN8QV8VT3PPnyVbsA1YRd7ZMf6BDaKYULxnQJrysBe3xukmkVwmFp6K2Kz884wurXvJufLGj4weyZQ",
  "key11": "2LoSGUwu3bFcgapKfwsKCW9eUWUoGmXEHpjvY4wJ2XfvXWer8uUdro1rdL26Cww7S7FeLfQU98kgiiAWc5zJpSAW",
  "key12": "3s7366WWYKGgryvCjgTdNZEt6u9bNuroikdJenQ6ckhSczDxLyKWbjiPCVvTTi8rh733LS4VaagqeTg16YyoiEa3",
  "key13": "2LDexeD23TwPTt8e6reFhrndvtncW6kX4yqtviChnNgotLsdaY682Y6ksNDs9L9F6wtkCfx66xdoQLTf4TJZQVHr",
  "key14": "cKdjsLQ1X9rHuxvKJYts6mtBXZ87X8w82JA1v6C1dnZquigGe2rD81XoMZrn5uMDt4gFS1qUE342oBDEPEmQMZB",
  "key15": "3MjnPTH1h7YWMSkxvg3fdr4KPa4PrfbuKYfLnzMzUFGGMwg7tVBzdTSq7p6J5ZvdVY2FEZpHhRGQPCTN9oiCmPja",
  "key16": "5dcEaSXyJRGdcaPTVDaU3V1yc5trV3NA7FymF7zUk2SKrQCUWnzqkF5HmDCWFfeayECV5iEcaQ46Jxh4qRSPYGuf",
  "key17": "3oTCbryfYofEsxzE2Ao9TWtaeYu7GPuJxvxkNQwqvki9ZfRfnwrrGhbM6p7dCKGEVzyufkrcEit8kwtadU5XXuTw",
  "key18": "3RCw4Pk95fKkrPi7q5fjzfAjJkLr7M2e72i8UE59hAbrsEUvMKHdHx1ghHTGEzWgRDU5nfbyeVTNFhQuFo7BdRV2",
  "key19": "4XCDRvgs8ppXqo44Re2fAsfTeYNgGCrqhyKvrAC7c2vouc6xmkZNS5dFrgDA9deGPJvnWeqP2SNSLV8bNdknHrj2",
  "key20": "2hmVXxbUnXLw9HLC5X1SrKiF27bGm5PWbXKBuy8yQe8wAB9cksgkcX9kgPzgyGtHTgPC3y3DFJw1WwTqJFYPSm32",
  "key21": "UP4owbS6TufexGWCSuba83W31YWvvQWMsuk2A4Rz78EdcUsrrnZkwhhHCNA3J8bUztEgsdDjBhNMjgwH3X8xhLv",
  "key22": "3Dn32qTyZyuHLCvg56uyckXJk4j3iUNJgf4NAXreXnjuVVuFmntiQtF7Wxk6QGWgFbrU2oV96g5mnDuCm9JPyckj",
  "key23": "2QzXrcn61Pym21cgQ1b6qBTozRsZbc7btshUawWtnZuLdRfTFv49y9FPJsk78MAr93ssAuvHdqRYtRbuuiZZ9cGn",
  "key24": "28VaN5d7fgw9uZffQjsk6dPusVy5AmmDTrSaKiXAP83zhHuK5aFEGKogMpqxUWRmGybMRJU28a1twAMmJLrUKc74",
  "key25": "4SrmaAYPtcXqsz9FwJ8seftTN8oBzP1Ra23c9sh99imTYdrcnERdHku1t4ozUSsxEr3CkDnVk1pGjzac7FXta3Ha",
  "key26": "5AVkQding49qSmxk21iBHm8tyBB7ePeaCuDaQW5pLP72j5es9kAP2K4JMgf22aE7SSx63zCNTKWYLG8fm3EsTDVa",
  "key27": "5g6UMuiTqFcYbEc7YZ7pwriwPn6XRG5K9mVXTtmwWvHvrMcTwnBFZpvDDZuGGMN9LvLbXwcXutNCErs6bPYyCk2v",
  "key28": "5cvrdypUiiDfpzBVXM56FW8EY1iKdGKqWJQ34MhhHqYr3bicr8V2v8dtxemdBND5N4d1YtFFjFrB7qjVfSHFSKma",
  "key29": "YUgUnzD4hr17sN2b3DNwqWhsk9oso9rMFEpXVHWFSmZVRCviAxsHHku3rjJCyQfofzUKrMTw78j1iM9ZH8UFkqj",
  "key30": "Rkz1RzGXFF9pWqtoK4A5BEKucUf6XikxDny9qxqDV43uuMdKkRiChua8amoLQhq6cH3tth3LYHiM3Q3NHLWeN6Q",
  "key31": "5wcXk3yYTHs6rWZSq7yDyHHWAjRCYK9fimxgTVSmYhbEj4QhVgnDLZY4S1BLh6sPMaCwCNJ22NpTYU8cc8DLFmvo",
  "key32": "5TCJv6CjmyRyveqwFbiqHdLGKVw5NqxzFxXZ4epxSrTXBStF2ZJPAxzGpAPY2wjYT6pujRXAa5YKupcZSdoYjKoy",
  "key33": "36DyVUwYrH7QKbrzJn7UBm7AiPWL5eNQyuTfdqBPerutvLZ3mtHtqEDv832BLXk9voUVHX1A5voAfk7Xhzcbb5Qu",
  "key34": "3DHWAG5qvzZqSnGp6Z3aoXx38SoQiewtXcSANHbYzEj3AMFRAmNhjaCHSpopxUHUECNRhWKnho5w7jyVNiQyGbTb",
  "key35": "2dRdySn3QB5CVaRi7GFUQAfKJ5cXmcGPLar3JcanLHEWCRoCGkewEV9BaShpacrVE6ux7sJ7ovsQFeyu6VvSap4s"
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
