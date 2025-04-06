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
    "5y5pHyCDQMpCCt4vLrKC547jUMUm7yNP3yvYYxJ3QkLrxWbGEmYVARHK1gYz9XXY1XouifXo9zqrXKpdTd413rmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcfcmBaxzs1wc2MWYbHHZirfC1aVAfqAXixzgtedtucHqUmXtxyR8SLFUA3zjhYpt9bK8TgDKoWmr8RSmnvtBKW",
  "key1": "4QJwFLqU9H4FJBAZYs5YFL6DQwWbodKjsAeTzjhdtaXFDXRvXD37CHgcjeivLz6ev7nMXHZrkW2HwJD2nepzBasK",
  "key2": "21rMEzf6k6MmWFTPvdqHX9xa3jzwFC2rJXDLmVJ9CtRvYmebzRnjn2VNqmN9pRFNB3V8VfpLoxvndsXgpv14dVw2",
  "key3": "T6s2ZHeYSnrRshg6tbwBZ2nwxSFYCc2UPR387YYgHWqegyNfKPrwHebMRAuofrXNs2pFHfgTA3S7Ji3JqmG64St",
  "key4": "LiG7YcahE4AGVwuUYu9yLwsrhNZpxxdVgxShwxex8si3oHpdkLfa8Xiptvj9YxjdQg2ps3g3yys8vwauvY39prf",
  "key5": "aLF8B4nNMA5QWHr1V4qtjyLf56NAQyQCH6hiN3Leev7HNn4CLrydq17WwqFTBrhKmq1J8QAVQgAAfvzHNwW4MUx",
  "key6": "2chDh78ddnmGqAdzGNbjLBVFTYC1ur2wLdPAoAdfR3iDbuX2xSNudyiY4EJfn4563gPWW6g1XzYxCdyTmox64dgz",
  "key7": "QzkvhRhP6H13RdTjVazoEHeNPDF56CiLHesqpnX6egHEwfVANQnVoacFujAvoYpkzi7KwwenK6PGfjzMHezQzKt",
  "key8": "4dszrBp3KBMjtAzmYEV8BQxdryh9E9g4hsVtn1Sr8fh6ohjKWkKgYHY4jGzA69e1gjVXnLoDLEwwKM2T4UmsNC6T",
  "key9": "3esux35f8fF1mGF117M8PptHeFLaWj3tEZ2R5QFD3zjiPEXoGxCer4s84GBhPB1omTmDuupB7LJMWrpKr6g2ChkK",
  "key10": "3pW5XN8ADc34RYSfRF2v9gYNQyNmt1kHxjKRRB61MSSLhC2Yi6UXv8QqSxqyxgVzjaFW2As47y4HYtjrWoz1AcRV",
  "key11": "3GtWLV86BHsJkeptNsV79hpxyQTNwAtUbukbrgGMhWEonRQcmCenwBPxy1ShWeGUMqWfvebqdMpJi9HxRTfzcBD5",
  "key12": "4Wdrd8mScJoPHwH3oZVWQ3Q7kgQzZzpNuwA8YUD4bX9Gb9a7Yf1C9xCE6E5eCD3RXYziQMzzYaEE1nYnA9VWaHDm",
  "key13": "4HwHZVsiCqaTZ7wTZ7ozwhNed2XZGxVvoZac9EwgH6dnMmCsZhN3qYFTTKWPPykH4m3ZcBxXuLhpbbnkM7QBSujB",
  "key14": "2KuAdW47PwfdQRkTeMChXoza58K7p5y89htwsVzZzxKRCSfqmVRfnJ2UhJSew4uGLb13FUfbNpjQNF5cvzvygUWC",
  "key15": "4mBxbkh4tyWcudjSe2uaLVUGRYsTe6ZvUWLYTgS9JZ15JWtRFWKRr6cTVDmZNF5sXEF3CgjyK2YkFCAdCm2KMEqz",
  "key16": "2W46MQhKQoJuCfhFjddHpZKtNR2Gvekwfq95NQAoFJH2MjL75gBNZxVemaEZd41nDgyZVK3b8dyUgv3BBCZ4tX3b",
  "key17": "MGRiPdDMBE4mujCNDmGWNpYV4vbdmEkcZyDybBok6kKz7JsYCHpHEhXuxx7VwxeoZyTA9jZGT3xPcooj5WvA9mu",
  "key18": "23DQTE99RZTNiH3RNDjTFAigfSic3PyuuGV7G9wV96BK1jfJY2LRV4XYdaexiBN1WjVgKF6EPH59oJMk99h2VDyg",
  "key19": "2S25TEgA1pCvyxQ3jvCwtiuv95imjtEbkippsfQp7MZiiHEVfjMHGKNsnkVRZZr7iypDNqnmTgUPwyzepiZzMS7R",
  "key20": "3acVfKtFvDzsegkZZZmw1587JnTo8JJBHQuCx429SdPpF1vXhSfnXUvVCq2qP4WntcijevfQezbw42FHSbUMKUS1",
  "key21": "66iwfekot5HGrB1HSxgjtYAZtzigFQCiunQ14Y6Ms8h4D5bMWzurV5PZomZv8ydk4Gzw5YFCsNPV2Qm1AqLFBPNB",
  "key22": "2KX3joDXZSEDfjjDmAk8yCV1mM6qdf3Sgi6acmbNfJ2ih8HwLJuue9rM1ERhoR3BPQC4js2KBc36ADrAS54vQMVe",
  "key23": "S2cFKKuz5jM8eGdY91YVNuy3E36hCdbDHa8FyneRHhAF2NFJbrychFg1xvQes21peZFPUBpBZP9ZwWgutG5c6U5",
  "key24": "2JTRszRkwbfmtRCtBDgXxuFQSvVDvvjZqrM3erx5865TQ1dSrt5ekZSpd6DiGsAtodQ81DrHtAx9j9MTvAiYhW6f",
  "key25": "5p4n8zrkVcPoGPYL4gZLMR3bbuGpaEaGxZNL1GoQitBx6k47NZpTupbXATxAmJhSkwBQUNNS3U5vbtobQjudXDL",
  "key26": "4VuTmnH9T3NTAkSn7i4YuWmN3f9XX9u1SsVF3B7i7r5NJRRffByynshWph5DhwowxvasFRMjK8Bydx1y7KGHNBbW",
  "key27": "28oZTFgpHaFZVZgyGDde4CuVbg5zbzSG8WzZYJhJsQS3uVVWJWv5JDj166C8d4dJ1a8ioBj59HTheGdMqiGFqL8E",
  "key28": "339vHsJ8WC25YyDVqcUCRgfUFfSbAucdxa9fpgcLNtqSFsWYbwCPFH1Gc5DeWtdESpf1TwLm2QyZsfWiQbCzGTct",
  "key29": "4cUA3N1ncgTDieNKtexWjYi4oLHw9UeRiCK1YanMgVmV5Z9X7QAVyxAk2U5uf9tfsSwTUBbq4dZRrxMHk7ccNYyn",
  "key30": "2BZz6wxaJeFh4VUa8wPuSunmTDmJvf7CzVxKFJ4w8xEneUbyrU4x3MDRu4A7oJ2MSAWbzVKWenasqx4B2kgNPvHt",
  "key31": "5rhomZFKtc4XzSSvnJMMfRgKoBzKC8ykw6oZiTLQTqJuo7EqzMBL1YCttmus4uYPz6nVVcYbcVFo4FxfPmg9jf7Q",
  "key32": "4nuRw3pWY3o185QRcpzT9fN4JrqoPGHrrUw9afmYpoK1KjTzXmj7H8XH66WQECs7ho2khcHThKQVGsso8McsRatZ",
  "key33": "4hmQ7wyWWXPV7NNmEbZGoJVacpXFmzdT6ZUCD182pyf4JPGL1xMd9UkiA2vytHxGnjEuum2vbMbPNQmHoAL6ASza",
  "key34": "3Je9yBQcVp8hysCxxXZLnAmKxQ69cfxjeAdyc9EgyK9qXA7Aexm9Ce9iW3tATEquM2Wfca6e3RQVdBmNFbjLnPbY",
  "key35": "3CD5wSJCFomdw9NqYkZPwHTc9X1YJQjqXpuYzSFAyDT1mPy95GDXdiqmpjGu4zRNCXyVxS8Zr6SWB92ejrCS8hCT",
  "key36": "5MQXtEukFyXrmRJvfhBsCSaRweRzKNpCA2vHUEk5Ai4UYXAoX7pKCk4DWrJc1kXmCAWq7Y3swdjrwEK7LAAzLbG9",
  "key37": "5jvAV7KN652jNktCBcfENe9sCpJU7E2WVUWm4zfV1Wc1UCfiNPbCcXT2j599gd1dwjFwaVHQwnDYwzU7NbQSYL4U",
  "key38": "5m3fePBPmLeTaWZUmcjZTBqVTvXNv3RWviR4bygem95BLNbXpwLjAGwM8PPDjsW71SbUAn1aCgxZUKorbUh6yAGY"
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
