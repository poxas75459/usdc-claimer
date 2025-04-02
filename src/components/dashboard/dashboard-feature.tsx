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
    "2PwcQzAdvxYcs6M2S1gSxpyUNKTRHxnbqLUaTFTsRUL1JTFskEuu8qBxgrGPHkJEbMbLdRXDHDR7axoCqUgBt7Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGapFsAHTWssMATTbT5UPrEUipZu5UzPwXbraRZ2u75BgDbaMTt2Y7NbKFezHYke3EjkiQVTXeoz8DCijR9d69R",
  "key1": "2m9pMyH3W2ecGDCJgUVtCkG4n39Q54sbM32UpvQmAU4eemKvGCtCXMDH9JLct66uMCGdcYtzdw2k6mV9R4aRuPXy",
  "key2": "3TtSjuPS7xEs9oGHY5QfnwV2MncsDzuevZCysZ4rPWLz9z6so2YrvLJ82e1VV9xvVwsiiCBFxwbXEVVJYGSV5sZe",
  "key3": "5UNo3hiYMyytK9WL4nyePA9MZiuuLuzoqgYRpK9EYjgUgUsiiMHAq2dtshsEV67dxL2PhHfBQdeJkUbDcdSfgpjC",
  "key4": "26we9UvyUmTY7fV7caJtZQkrGBdX2ESmTmzRFfvQXL2D79kPVoCdZ8CHY3dcyKKcp7x53Nxim6QRgHmxE3xtp2bK",
  "key5": "5McqBMFH2DuRkNzZdCwrGpyyrnCKa51dNrzcYDZgmQ9mNhpZknzxS22QLmBWmDfYJbx6MN73y48kvrwgNnJes3aJ",
  "key6": "H5gQTGgP7KW9jHWZZ8y1YH5SY1esMFcoDpKyErJD29wH83MjbYqPAihRxSAxQWvbqoYav4JTZ57ECR4jxDZMorS",
  "key7": "JLVZ1zeewpFP1MbLGfK54X6tFFpkdiJXpftPtr8VDCqJEkfLCRdMJy6Ab5P6efWhTeaQz5yiUoP4qfHKrhKKkHk",
  "key8": "4fqPx9GbaHZybi2oK7UHZ51d2RD5VWrVNf2dyMmhfDBnYcP6pwjCDST8LEuZzaAW3QmCSQ3gAVeaY3hMxMtQw3yS",
  "key9": "5RuvHSmBFiMrY9sXL7mS1w41AnHbg4J11DwNFYpQWzB2sJcqRANjRhm9Dxs2JxG3Tf27gVYNxaouh621xkpjqo7K",
  "key10": "2cbi3QkUDBXPP3LminZhxQp9m1NYtye8vKwWiw2rNuJKUp3mJ4fr7kFYfapz4zeEJAPEK9aE5SvjZyuAL6fZE8VV",
  "key11": "EW5E2BpNSmq4mZ8JcrSTXbqfHoGrGxGiq7avNKYvNuwGhgSrmtRNrNBBJh3eDNhSg5LXLRuhMQ4H1uPGd8NNjUe",
  "key12": "4wSisbmLqU9V2nkM9qKVfegFRnT2Fiqs12L4XsiFxSQypsR8TnMP6rQ8yK4RMQgMuVjnwVG9LwqYmLAnFYF6dY3C",
  "key13": "3x4cbWVQJcUoCeFgjzj8wMwDVHcEmw2jNC6aN68ZbGS5Cqxr8PdWreynU6SL3JgHuR3JycX6BFSdn7EdXasfoTJh",
  "key14": "4y3FptmhimTTprJVu1PUno3vDrzBmG27TegqrSiTY5XCVSeH8G77vcz6x3c4LSKbPjk42s7M6HjQ9RjGhdGqYZEH",
  "key15": "5TnL3ojq4AFDjvvMjUcaRBDuHC3ki85ZnqmVrgK4ddXwvgLuNzmhRxwz6FjBxqJyXbjAmoSrHRXWMoLhW5sVnWzA",
  "key16": "5w7jTHwF1isoVtz7u6ZnKd8Ckqvo4kHrSpTLw8SURgjZfn2Xuo3Xp2PxBsLnVZLUvM7TLWyZ4YTxN1p4jtLmP82K",
  "key17": "4ZBFdCKpcQ9WB1RkDK6jfscQNg6Sg2HjvFrpYJ65UJVYE2KnY19161QgfiZoVyA9FvDEfBKJ3B3M8kJBUELqxUHa",
  "key18": "3e4f7v7T85pKZbyKN58uajqc2MbT9udBAJWymbnat6EXvpGvzhsxzbY4qhLXpu4Y1F6D6VLLGnBfKCLEuzHSjb1M",
  "key19": "5gbK2azirfzL5Tndnw5bBXaf9Zc6RUEyk8gWAdeYS9Ze7aD13U1KFHnf3JFSHfENU8HQJG1YjL5U6vyMRnxr1Nz",
  "key20": "3mZDDAa1cTgphpU5i8KXmkbZQAqCduGFrLVTsd9QhdiyKJtdMv2NnukRB6tzfEB8C2JvMCR9ddrU1hDHFYvEpaUA",
  "key21": "35Hzqk1dEWT3xZUvPBW6fXGg1kaC9x3Txi9Mq2jUPVmf2sN4VrzoB92jL4DQhMJeoXb1Me7jXGpvg9bv3NSvF4XX",
  "key22": "3amis8FJ5rrC5DxWWh8E3z6bjV3bGvkM9ZzyYGuGSzSdov7qz2aTX96VXq3LbEPhw8oDJKg4BrMExEbB9caegxKM",
  "key23": "bDDA3RStynVN85suh4qKVXDiCVSPLhHfNu5Gr21TZ5yrsoaXGMhLcdD7PTgCAX7qDtU1GawexZNBec5XavLhhd4",
  "key24": "2RakpBnEwDPHN7QrYp25zg7hyutcCirNkWeGvzFjxnefnwKvkHgNanXzuH1NyxPHtvCSYaSZExNCWGDzfDQ2BEhc",
  "key25": "8qfwkTkvJSEFaap9ma35YqN6W9HbgMqmae8wzb5LmivH1L1kWYxFetMdwfEFaDDtEQDPrs5MGebUAZKgmw6KdFV",
  "key26": "4mEJWwxtK8z8pgSranzAYg7LNJHdEgWYukzBNjfDy7F8sQ53k6WLY1xBVTPmN12ZBk3mxP4gKQNSst9bXzkrM4ie",
  "key27": "4b8s5kWMgfZR8ELi6bYLYAiesen4SAMwJv1SVYY9nPBvuTYUKnZ3KmjNRVWuR4DAByaVAqv4dRh1WGQbZ2MFSZUN",
  "key28": "4FNcV2QRNAn4b4xS93TJyjaBrYkJ7qT1UiVPF5Txx4uBDkyx7qzKXSWTXZBnGxpKEqe2DxEQjoCCD8PKpSw2w1tT",
  "key29": "Tm41xy96C9xpkvFvHuMg89WxAqo796kZfh2UcXxTrreu3tnBr5LwPKvZ75x3pqJgky31AeC9hMUxLJGPbAqcYiT",
  "key30": "kbS7Rc8LdNEpcS6DT98794wRFLN5YovTNmindJfPWYD2WGHTcpZaEe2g95npTec1Kc35BTtBN9ksUiq4mrVXpJ1",
  "key31": "7L4K2X5M5ji8m32c2McwtbmthZutqXEPrx7nZziDGfRcQmqiZJTmmZ7Hi3SNisCELHZ8zG8wQLhrmApDZzKeMaS"
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
