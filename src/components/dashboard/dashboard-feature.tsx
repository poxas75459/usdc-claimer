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
    "3p7VKH3R84pmTBfF9b6nPGxepkX3NYajAvWxpjrG6qPW69GibTuZX6vLbakiajr8LCKUDF3tYyNQ9b7Ap2catHs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xbqPc82e15y4eQwtoZvRk8jYz2KSMXLNKBGjE1S7LqJxpqhNbUWhaXgpNMQfCkJBfFxsj2qJwM5gBqAW5RvnhE",
  "key1": "2ah4bazWtq8mgbaTFFKkWdWRbUhtwWeNCZuWJDx1SDNohvvt8kNF12q6svtRChUkHYmZyDgD92jEkzxkDKsNZ2dZ",
  "key2": "5WXMffnFGv7TMo8zHnrmvumbcVYHWjDo5J2ebMEdbcqKX6ifDAKcXGv4kbNi1aqSAbGpXfArQoiq95ufZyaQBRbK",
  "key3": "22WdRBhXHD73nSXLQ2pbPehBMuZBfp3FJaCK9sp8DKEePyPp6Wp3JayUoGg5ycRKwbQkmesGLb9Wu3fvt9Vy9pcx",
  "key4": "5Xq6Zo6fVmpJBs6HxETTd3rG17ZnNMDpURKqDC2hRyd6x5siqdmb9xNFw9pXBYJDUHVUVG6b86XceiRJSRdPPqVw",
  "key5": "Ad5sqbgSPL1jyxzBAGW87j18wwbErZ6uza7e63pBnp25ZCGer9hwaw55hoGdZZa7KAwKjBNTAefcoemnFDyDq32",
  "key6": "XJa3ALKv1kDGdUM6oMVGN7WJ4AfWoTXDZPsxsiRpEV3yRF8WXo2kZ6fDyGXsn6kqNZPPcekYMtWnQog3qTXwTBq",
  "key7": "35NkJdGpNmtedRT1mX9bFx9FbN7U5s6akG9pJvJnUmGK1oYb6WZG9VFSjfrv6zFAUic5UxaZwKzqHQUqXcmJ49UU",
  "key8": "4t2f6xNJM5MdhrWqbefTjYmEkxqQE9YvLT1JvyrtYJ6QifuEL3qJSiQr1m3bgoqP6RUMskde5V9vBG2ML9cpoyij",
  "key9": "bkQUBYPviMgdtbFF7WTb1jmrWD5BRmjUzGrDeX5Zfgx1Phsd7HUJNy2CdP55rDz8jCyJ8noDeuuzyuU8JoNT6aK",
  "key10": "678gqyNoaZwDU8GFax3vgGQ36x9nbGMz4BErSZSciko9G65YnwCQqhsW2Smu5My8CQb6q6WzQEr9ENjMYYXMa5nq",
  "key11": "56wX2hYzUfYEZtDbwBMrJHKdSA7DBGLowQTw8ht3XUSgEbYREk4i3HY1bJkmKnzN1PVvhomEAzARcXtcpv5NEhhp",
  "key12": "5vaZKtJM6XZZCsNeg1M5gCz2T4rWLwEgg1sRytp32sYeTYywKPj8ro2URm7iYyDt6QpshHo8jwhJSHmeciFAwu8U",
  "key13": "65ipT7hZQg1Bx92b6PcCKAFeALhJFLBaZ5q1kPXmBQ5LaDXVtb8TWgeEEvAFvwh2j5eVwqJ2HM4CbXP4sagQPHBh",
  "key14": "2S38J2QVHXgnhKyBJS7zFur6u2cu1nPvG3jzyvkfyvfh77zhATHS5r5LVG7nFYsxErTYsEhjMXspsWQ9GD2PZ9fc",
  "key15": "4mFknec359tyAZJ5mLfnsN6XiWLHQQpVd9P8Q7J4wqCLDTAvSrMy7Bd9xN7j4ZveAPfzgADeYoaf9EpRdj6UVZe7",
  "key16": "4ZRxHe6Lktcb3fnwZmgsANmAJA5EoLLZviL1GqV4kWdQEKUcZPCeAMzRjChuBGzLaWEcScj7Mt92xg57NtgJbX74",
  "key17": "56sWM1W8YPb1qpbZnd2YaECT59dQR6B1LdmYtWFgWQSWEsXWixUGUe8NQ3viYvvvH6LbcEaEbo5HQZPsu9kPTWZq",
  "key18": "4YNHLhPyNha64KEErRhBhkqqz9NPXyGFBWAMZY6Jkd71eJmZSGhPTFwUrLc3Y3cEqPVHREztkyMqH5ar78s4Qtrq",
  "key19": "3FNWbNAYfDw47RPRRuw2D1XN2NbJtByTx676BCYXVfBbbi9mfkkDP3VU3gAPiMfcL7xm7TjLM66b88CXgsamSp9W",
  "key20": "uPBaZDg2juA9dvCN6PZMzLuxdRniSEosiHRf7xSw5suoV77hN5ey4pQzEAPJUKYWir3KBabfDHMWUTeqvLSW6gE",
  "key21": "4eiQKYei9ZX8WTW8nEawBs9BvudJF7AzRDuwWXWz7pBBNKdSXhM5ey6XPvqML1YEBhZ13j1hnpMaHJxtFtWuYwxb",
  "key22": "4VNgZCExCex2tqPi7ZXz8g8RyRkCTBQTS9faqYHDVijR34ed7iC5U6N7sABTErBN9o5DWNRjpAEtRMjsub1AtBeV",
  "key23": "5SBADmXRbwoEEPzRZpzM5ZwVtFsEcrvycsADpSzeW5R3D3byFA7YbHDSdjH7j2YJtpv4YErxLziQyUJnHGW51XBM",
  "key24": "5E6TAYJVHXiS7m5sWGAMwMF7itKiLqpimNcSZGRsB9xTDMgXNf9RGqgzfPfzahxBCzos1X4WDRE1pL2tTdaLSZ3N",
  "key25": "5o8kctT6WpUuLNCJCcwsuidnR3eGEG5nfN7smxmP9onN3Gux4LCF4wT3z27s3mw5RMWrcW8VkoUVPe1i4RCMRQdT",
  "key26": "9kmqsisEsexMmDugvMVaGV7H6vswvHEop1KB79zFxzz3tXpJpM1F1pVmhK28sBgxN3bk3ryA9BXikm9NXQ1pngZ",
  "key27": "5mshMxYsiERuaK1RZmoPkg6HJF6vEKGSHiTTTb89ZDUg55FrME3QKSB1TcGg99DFx9hS1TGLCf4dSgxTbwhavhXs",
  "key28": "2KTkaooJYKrXCdtW3bBFSA5vRSGLxk5ex5XPbG2aGLVuuzJKK3THL6sydgH7sxdw3xCSbut2pSzP1SfVui5KUBGP",
  "key29": "2Y4sTbdZLrqXghTnzkZ4HhRY6RjDabQsUiSWGxqwM3RwPxzEHxcydNRHWDGJot9cHezfGPfRkjVbPHcA7rAauzUa",
  "key30": "2K4q4otdoN5F21mRu8RQCMzidbvAoD5ztycwGKhgbA5mZGeiBzyr1hxW1asJawudaaacrTJQMjwkvvVwSswuEtWV",
  "key31": "5tZQ4iqLbzT4dhkWB7tEqRPbtfp9heUzbhGutKd4a7UeLMugphdoenmcUhLWg1xSm7f2q8CVP21itrmkJeyJBaor",
  "key32": "3SkasdyZwcYFMqUQ4V3799YiK5RkNYskHmca7W6Ums7UHcV6dh1PxQWUAT2x1JTCyicY8X5cxTneHwU2n8CcZuY4",
  "key33": "2AQSZHUG8YvzoPwbbvaMa2u78kHz9dD8h5s4pZat2WoAjgebUVid8tmzgWpHPGh4emyx3LtgMQSdZ1bQQfvGxfvg",
  "key34": "3h2QEEw8rYRoNoTvGrXDDa37EiTgisTdWVh5swDGi5ttu8JngixUNdDuXE2HyBwN4XHv12VDubLoYx7iQxMNacsq",
  "key35": "5wfQJa8Y5kyBqWLDXV7SpgjqLBxnW1w39y5iX1AhsZPEpyWg8DY4iSL3Eo1xvAuRCamnkh8KuZeFL26zpcumELxb"
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
