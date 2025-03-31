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
    "3NscUqNZyc5BirBiGU91ve1E2ZVMPt2Kk77Qftzfaq2hDk6Wcs6SDFvLpjDiZ48STmb8aAX6UUnJcoJyoNMayF8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZuBxo3hxFNMcviZXTDMQpRuvVjU8JfbXnn4fj1CoWipExJ8NAy3ho7vghyepTgwR2ac77ybHUQVHaNfXjwmFgjH",
  "key1": "U8ZhFHG8TKAFhkWu5MSu3eEV41NqapoceczpxjuLiW2mdqRDu5boven4t8dpaPf12F7RS4wbcK1P2zhkNqKyuTR",
  "key2": "5Hd7gsaNu5xGGPboUGzcC3QsjoNg3WoxrBMHc1CSp7MZTSsehmrwQcnE5qPtRGieLfJzaXoaHdGShidtGK5jF6YE",
  "key3": "oLmip6JAz9Sq6ZcFUgrMCa9d2LC7zY8rWBf8ZSSbYbfc7rEhcRymRPfPEsZsh65nwd9gY3tYkKaoGMchwHeNbEs",
  "key4": "35KygdHXdu9a5LmfcDxSw6ugrZwxYQTxhvCiNXvZ2b1kxBTcx2L8uN2VHwJfUMCW1g2k64PRckfNwRwkq7tTCYcA",
  "key5": "2BbkvPYSXLJaEci59VgCjSv8Z1B6TKiroR9aBQymtHzNqGDvxc9APMX7hvnpfQppm5BRzzZmKVV8hSvxSDh8w7wC",
  "key6": "2QxBrtHd2iyojPnezhEx6cs9fb9HdKxMfPmgo8z2CRM8A8FfVohgn4GKCHYtuhMMe2Xa8n6LCDniAY9qvEC4Hy9r",
  "key7": "4jUWgyXwKc7g3WtP3mXM3LvuZuyhguG8mgjR9Tw8ioXDZZkbSToBnJnsHmFH2DPoMf2RmrEa8ZFoP624NVyHnMob",
  "key8": "k97wb4n167KxhX264fwTUHjgjmcZyQZQRppRgt1UQtzKwUYaDPLf1uzAoMvAbaAG7PVtxdPYZrp5zRCYt8qC1Zy",
  "key9": "5KoQ9iQZY32dtkzq6M8mjdiUndBGUMQzovGtZAPQdccE3auka3qPEHKBJPm2jYjUuGhYzYHnKcNeW6hXDXbGJuVY",
  "key10": "2gANwC3EonHtULW9M2Hkc5djrSGbRxVa895qvmVy2Xt7mgrkpGXxuzWpsJXzQW3eHhKpJiGoAH8rjQhjdi7YTdB3",
  "key11": "2ttNat9JU9BsRMKwujvCnj3RTUPXsNEcueTcbfkUNQwTzXhaqSuU1pzhHGdW7BaWjem9VxRMNsCQgmubMSRYJ2q6",
  "key12": "4gSceGf4DHW1bRLAHYwRfxHryim7J86utx1cRkXQsDUxHfVmB5VKKM9CjzTdaH72PfHfyPRuvCt2p6rmo3yABDwK",
  "key13": "oiWyDQvprMuSqKfT3KSdZpF6BcDjmZYJMr44HeuwEntjh27KfL17VdCzxKdZcijHa2ZmzRjspZ3K1rJcYDDGzEG",
  "key14": "33KHSMD8okoGgkGkYtgfNkK1NmTm5K3pabdSLEGbeJXTwUWjCrgt9ifwRRiguqw8vffH7Q6W5U8eDCRwJtyVmEcS",
  "key15": "2vars8EUUBgtSvBqQzFYQS7RaHxWQZbzGKR1E2atwV5PYPUYGg8rVZQxuu5stFaozM2HwzarihrvpUx7xBZh9Vk4",
  "key16": "5gXZtjWB8ZJAS1nY83PNKDLVFwMKTLdNKGnhmisiEPVYH5vQcn6XgQmawwTaeYJuym8niCXf1FxXR6UrtZn5gkvH",
  "key17": "3pPTZGJUGMUCv3DarRQ9s92UDxTkgLNDbYaUAzDRQautYgVnefvm7jNUNLbzxXU7YGUB9JVMhJWqNUGc1qNa3ij1",
  "key18": "AQscGKE5SYf8fiJ6xmKm2xgaAUSQJQSRbp1UDkJnQfTAk74dQnqvMEr6th7bruGXyBCLMHkoQs54qUo63Y59HQp",
  "key19": "2qNpMNUiXjZE2XpuRq5evVM9iGeYYZAtYxmT1TUZXZ4LYpfdcebvKUxnWk7BKmHunKTbHjmfWKHXxx7LnuYeoEoR",
  "key20": "5ENS8FEtYuMRq5npmamMTF2MMuZms23tGq84mZKCuM4YW5FPYJ3MHWLyhPBdo4DLYq4zh3zYkmi6XKAECd7xS5uf",
  "key21": "45tjV2Yw6UYGzT1Paq8hp9M9x8NwgQLwiAoJVCa9L7MuFtSmTo36wFVkg2gFspWuKGgYtTYT7R7xJJjWrgjV9keZ",
  "key22": "2vtTpEnm9MYnkQom4Dq7gNpDWZEy6cvQTJXoGZdX5ugUShR2RJDueggZMS4374CkfYf71ozUbrHbb2uHyGTY4QCj",
  "key23": "2EU6rZys39s47yGCHrmttH5aXDtf2ecfrabm1p11JDQWcEMYCkdS1yGVbuu5UPM6sZhzvwh3imKbNXmajEF9ferW",
  "key24": "5wgXuaXY2a4zBtVoZv1FtKX287zwXT7guTKMvYnwWnGQA7G6Liv5FiYf17nFSfY4Upme14VJ6mGcSZECEpsfrito",
  "key25": "2vyp8VUgN91eNXgBThhhN7Rvyz18E4zEAEPPUFQC48KseKx2hzgb3KWDSRUyxrYggX7ppSSE9fHyTLcwFgYWTX12",
  "key26": "3mwmMm6U9zDde9BXefNRnHVcJjoP9GzTExp3CxAVmRSwQnhsr5S9RPnmQosx7Q9dW3hwqydYLEus7GZA3HtGwadu",
  "key27": "2huxqy23AQ9W8xGGi36ZVg2Q8GD6W3wE6KVuJLSdUcife5XYMmKZFW2GXA4Hmzg5dxeD8WRj4YzxtBLKfZafXYUM",
  "key28": "3WAxd95jJK1v11LqkgvQinLB912ZAxU6Q3DVTerTfUCymZMmG4TakQskVMM3PdUT5wfNpDanipe2snqzf2aWGfVr",
  "key29": "5d44pQNvNS3aAYKWg4d6BbsqaRsus867XdVKnxUafz1yGpm2aA4ZPhuccC9oYgeq65Q24stSvjnQicMCuzjGJbq2",
  "key30": "zM7NgCifjcQJzTHJj2mchYFaeDtFDyfbQBm2NU8BYzGHdJ1axHjedQJpM9oseHMgDNL67NFihYD7DNDj278CwgP",
  "key31": "4bUfAxkQL2QDNefBrCtJUF8XMikrHdnjRAvyAAYt29domkZS9ifudqKtqsZ4qV79xRGM4yhgzpjHgJ6PuS4AyRcr",
  "key32": "3bJZf2cJUR5NRwN3WtsMaDY5W2tpizGEVUbEhyKtdyZzUcvVMiGX4vhPnftyEN7JkEY3GaWdo138NU7WYDYTfbVQ",
  "key33": "GJPtGNJ1y1krj2CegfL99ajUKDtM4Yj4bLiQaNt3AcwY1whznxyj3mFyhafdq7f4uT22oiai4sP9ukR2GPyabp5",
  "key34": "5N4AGoAarvAu5ELBwba6kjx42cwhUdA9is6J7DcxKDjpvBKnptmXAW4gtQZpsfHwvVn78CqJ9YMq63BnDunDfZfe",
  "key35": "3j1UPXaCJqrt3HZG4F8SEvgsKvWEHg8A7MThPUGoDvsft73B9hyyFSYrot1MQtPd9nuLxTZ6kU1gE4vnKvgEuBzL",
  "key36": "4wZasHzhFAbtqLY4B4QH4a8764CevvkN9FKHXhpSyrfK1VjXxZzBQryD1XZC5KAifaPSasW7vzkjdBqo6MNxRESa"
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
