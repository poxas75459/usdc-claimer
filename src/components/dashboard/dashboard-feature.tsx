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
    "3iqHrU8v6p2RfxB1MoX1HGooFwx8CWt5pzLsm4pwgZzNJmnjuwXyzBhMoh4w1Kwo3dQgvJbnXWKuWhjgoWWiAoet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzGFyJA8xhEjBdaUVG4SoFrurmA8kUUo5FvtMQkqUz2K2rJpMkGgFTGUjeeHsyJxEpiZ6Nmja5gi2VvcvZ6bH2H",
  "key1": "2srL1KfmRw5mJqYL4XTg3AgmXHywJbpvc5Nc7bJZY8yCvmEG9hNikJFpESTBZQ6idhPZjBoab2aYvVqGa4QviYiz",
  "key2": "2ym2GMpJFhdjaK3EhmbcmSL8wx1TL64Sr96WpHnGBB2f3dsngmE6TDYZkPvwnqC7R2Q1pkYMpiZ7GHEpda5HmXeS",
  "key3": "3yEC956i9whqKHH5CTzghVX56GzYUrEzXRFSt6yod6ghSYmKMfhFXAatSfJmzxvTTPWLdSZeQJd7abRtb8L1fB7Y",
  "key4": "5bXAVutQ3tKCyo6JLdbN65KvM7Choy9FjheH65VRNKSYGdwPMGRnxDxHdxDaUE1b6neVuysCnduv2TZpXEnHrV9F",
  "key5": "671Z6gJmcuLcdjuapab9mh3QyGEwKYSuyrXxkxsvU7bDscMyKBu3CKSXnCX3attrbpTtFVjRF9tgsXjc8FJFrjFa",
  "key6": "GoYQJSAX7RboKQrMGMWvynQV4TRFJYndVdxqSnK1XwX1PMQvoYV93WJrPKwmatMQpZP2g3XiSLoGAz8vUNFJGqT",
  "key7": "3HDXR8tGUB4MWe7Bc4meDYQA5L631f8Zhs4PdkAnaB6iniDDKBAgeAKfigWy2zX1YCKPKwSG3j5JLPV7x39vNE44",
  "key8": "3SBPdfxFZAChrThfAWNXf9vQJZTomNQecitxTwssuYqRga8PHDuuBQmxXjMBFx73afoPhFs5HmPeQaJjE4WReeaX",
  "key9": "2E2hESbEi5kLkU9w2A1UdrVZ3iUcW78cLjhRabRaJnQezJALFKwzGRWSEj9LCzDjgv58zZWuyDFfTuYyF4Li5NEe",
  "key10": "4EnSTfHMDhJjFQgrtEpZcKLsigFQcdfzYKNGzzfqVx4Aum1qVkUwH72RezJZiRvCY5vTNCuDqCBm6iBuuF8mzPa7",
  "key11": "44p9RKhAr9t8qsPLqUPaPQbonMzKWjvLpXZEC3TECQbVGSgPocDZqA1euo4X5VjzPdNJmVye4L6Gd2ZAQwB7siAF",
  "key12": "8RaRow4juD6Q5AE4vmbTBngBWaoxeF1KvKdrGfiMZ7p1hCmxjNtkVFSaiLEmMzS9NwBCz92wn7VcnP4U4gpJVvF",
  "key13": "GgPcofe4bZV7ZuTpoMZisTKxnEzoh2mjebcgd45EM5kwk4F3dFigiLh5o8v9TTT5rTaKU4VYyiKVx7HKwG3bUEd",
  "key14": "4RcfQgnUBkKok5Vk9BhwSaXAFDCFHhJsxdYWkzT4mXcrnrQgyVycfhfUMikfdeSxnJrafMKoTuLiKQEXU8aawuMB",
  "key15": "5vF5hyXtPDBPEQeK1iL1jtRnNo3ZbVS23eKaWVCdKM21EfVPB9JjFvLHs3kJPT41Cihay61Q23cL8MccLztyzSkm",
  "key16": "42qHEKgh2KAwVm9b8j5kRYCbkZCDY2TxN1pogNKdEuHcMJ8XUfwPSNWF8PUoxNxhqEHd7oPZwKtYmCu6UFaKCkeB",
  "key17": "4vKZBLU4XiG93vELAV6qWmfpUoChkxjUx7AAqBsMfqf4memr49eSvNkXeZ7opjdhvgXeXQkiLeXsRqGuugLhaDfD",
  "key18": "62Vs3i5LsgFCnNVp9Vd7CohNw6EBoEV6UdxhNY2VhVLC1A3mt8ZggfCmcYaxQjoKHpZTMScvvYtiz4qiigvumq8C",
  "key19": "3BGpzfNUwDddfx5DcZsv1oWbvwLvFvyyX6ffCAWtFtm1JqLpriao6ZhzB3FBf993XG2v14BxFjjCD3hDU5VhLPYb",
  "key20": "5Auxfmqrkaq1xgEMo4CPf3R3hHKpnJyDBidbYVUf1danqp1w6NyRYdpjV8gVSz2UYTqtQbAGVYW2waa8qdkT758Y",
  "key21": "3JXJGQ3fGGGWUsvanEHPBoWwxqMHAR2UTAKqXsjeTLVyKo5mdh3dGWXhHV9YP4HP5myry1ynEHxKF6Hv9AQthW8b",
  "key22": "4jAGkb7StzMBY7qUnDirM5hx1JmE9r3m2EibjLjbarSKB2fMkzW8hj1oHGKVzoVuAtAmTXKjbPPGGxsRQmktUZJJ",
  "key23": "3w1scZuSw39pjNfW5k93EhTNoB9GwUXRuk4pjwmyCNnGse19QTeLKSyC7epBDpEf6SVyW1QvoHhATx2pbgVPoQjx",
  "key24": "5zXu2wif3VcSecdnzWEBPtWYLqGPxJpx5J2XJPAQGRZn7NcZEgJqBRULuizZp9iQDFrGBLT6pyeBtxVXtVxp5deE",
  "key25": "67cuUXJa4VnHHbQ4EMtgqUwGaXDARzzvXSZu6UbsppwcjnDtrtoYU2ygJo769yaNZbUyQ5rzAaKs582xz9kSAFhk",
  "key26": "61woojyHr6dCgMcyWBj5YoDQ2qNqtFXcgASxkJRq8iaaqi4SUjdv3v4zXYTicAXypAknpN8nbRSkUqJpV79MRJS1"
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
