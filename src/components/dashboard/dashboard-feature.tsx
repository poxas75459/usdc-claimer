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
    "YBeQvg6p6FvKcaGRx3P7dViKzq5L8YEPUPyzvYXBXRQZzP9UximsmF23iVm7DKiCK1bCpL6eptZGNuMGmU5id26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vTDckNnr6sUvj5BjCn3sjf6bkaQJhoHvgkew2SYPK1Vxnqw8jfuMpgASrBDtf8vXa6R6nRF1kntK7wfC8pYHqSy",
  "key1": "34q51Ccu6m5wF4FxZdv4JApFmTzoiQUUAdefNsbFXLQ1iRvwCc79UANRL9QT1wkAAR7KpQzmvapBLXfNNqEYmBGf",
  "key2": "2FWmTuU7EpmoY779eN23Hf6YUG8EwcTTkZbjFJYL8y8UHcPFJUKLz88YCyVaxnn6GocyDDxgwwn5wc34Hes9XdhQ",
  "key3": "pZ7pTWTRybzcgcPuKS5pKyk6q5KESsaUkiozMbRxYje2UU9pjEnGVMaoeYzT8HRp4LHCWvwjmTkq9AAWSPc2TvN",
  "key4": "2ueQKWA2nVG54reKeRBfUafmZnuU8xgL893DXexc5u1jLJHyWxJrLkVeSbDHJG8UVBTdhZNgutU78JTLNLUUxsZJ",
  "key5": "46PkqzjrbXaQwvPcjLjXZrCH8EoFGyMe78dBA2KtBwGayoLNoUSdktTR9rXMUYKu58tHQS6tQwZB75XwU8V7xo6L",
  "key6": "enjhBJXedvxGyBrN8bzDSoeUWTqpJ4s5RhmTFTKARMiCpXLULSRtgTAsQKsLc9rQZJ2Bk3tnYRRDKDCYU1m5Xbc",
  "key7": "5iN1BpL8dPLLnjJM2UxkMzFzYyoJ24JLfhFED9vs8Tviqbgk7LLaqQ35TUbp6Vswcr7wo66Aj6RayHYFzTXoqJRT",
  "key8": "2EskMaYnGWB3mhXCbn2A34dwYsCnWPDj7EvkSXP9jVgE4T2xojmFGSpESEAtJAG21GodzEDnJTcYFEQa9i5XzEBf",
  "key9": "4zZmgzwai4DEUwXHFvt7kgxhtcf6ZXUcWxeXhyykcTsEhQyXf6QhXWw289kbjTVrz47KcpXKnmyWAxzAN7eCuns8",
  "key10": "w5Rx3jfAX1zxfqaYZ5U3Y3FznR5MxCWG4DyuWi8RhfoGxprbhoVLwzyVSpgrLSzaaft8fHFuyzc4M1TsYdUGHGz",
  "key11": "5pVgriXqk9kxkzTuaLyjzQvVEZ2EQBzxfF5yF3eNx42G6ZUAdemcco4MEMPoAHrbqb8ixXn3hMT4tEFKASMrx5ab",
  "key12": "5uPSz7sJHuk8JbcjbtTtK4wGWjNtRxoiKn6C6dgiRq8nE1aqyLFZ1ofB6B7EthFsTJaRHYcbkdizXhG9hZP5WmE3",
  "key13": "67aUGJ9TcTGqejcq2hzNWzLG11PvM1detkLHtVozVEYuMpNawpQM5KVJrgUmTPusfYu3PHXiXF1bCpBQXkSUmBbV",
  "key14": "5nFyEmuCjkxuD6s4UwUb3uVrEx3BwnE4s4rWnxCjn1vBt1bXu6aGdmRk2TChwPzuT6UbiaJrfQWNHbJkqRNUVdkr",
  "key15": "4fUTN1wjmci9oF4Ua7HqS2tV42cj7FHxHRVoZEKpLWNXLqBEEiAswZmUhp7kCBCFyxVQUPL1ZBgk11LvFN8B63is",
  "key16": "3dKb6emDvSarj9rSA21QWxbHmB3NLcBTsuii9Z5wxrnjAiNKG513jzXxKrbdMka1ZwHYwQHX21iVmc88foLPTJC7",
  "key17": "4sPXv867rbPxufsgfN8LJdJY93naMYjo2mBtgh2Q3A14xZgB2fPboPS3LR3ubYxe5rZD7DoHTHZo1HSySX6GZYfb",
  "key18": "4g5dR4yzbyDsc7ZzrjcJYZw9Q3skDJSNQEftkc2BGxGoK1VnBPQvzE9Zg5GoGWv1NSdQFu3E96dDy5Cq7wT4MK7E",
  "key19": "5RSc2Ro2bHH7EAkf4Zy5twmjvzN3RZuQhcz9CMZ6GaG95yEShQJpcfx3yJEvHRA2bksMbCc5otKu74gx2hbZMSwH",
  "key20": "zCJWU9eWa1jFsYYAucFc8qN1KQ8F8Tppez4UqtF2Qhi1Dmq4hFJed5FHrtf3ZzuFUmBNZW4ARdDFWToF3sr7Ko2",
  "key21": "3fM2nfpCoUbWTf3QYZbwzfBnZa8sV47YhbpNfrjV2TVLf5RFLYTnkgDajd8F3gMmfbDQUKtGncdhUGzHGFoVHrrw",
  "key22": "ZfzQ4GjL4MDuNZehPtpdGPkTa3ogimRMCxGVcHmCCBG9GzXXimbxXeNuMQGBY252GwaSFbBFqZRzqkjUtWR4XXh",
  "key23": "3NihxhdC6BuWZU2jR7Sv2yQ4o7CFS2rhS1ucb7eqKtTHC8Srje6NHQVZvp47YDsXm6312Zp6CtqjdEjLcgNS5DGE",
  "key24": "4uaGZkY9e67NFbQFWph8DVhwEtd6Q4ouz9DSyqVVkJA4saCxgiSGFY4iANByzQcX25uYSbJdd2RJSeCyjmR3daNJ",
  "key25": "5L7X2nUDusv92U2voUpe3hAGTRsVF3Z1B8W7u9SphJgYdAUYnrxuiWP2XStZAKCCSUuBHyBpJXjUvk5FGGDeHjd3",
  "key26": "5uNaZkGfp5eaAhx7NJfLzJgQftAxWHF5XH6m2TSK6cSnxWs7tjHWZbzeZWXJ5NgkEVExkxMVuBdJPEyfwCw1whu5",
  "key27": "41As9MKScqUBpXBSjDGef33fZWzg26qYGAXXwpJrPJqpfLhtSJgbagAXe5MLLgNBrDNM88daAy6HiDJFyHHC2fna",
  "key28": "24XHqciuTH8q1GMdjnGUBVYokKBuUoe7m9RvH86dVaS6CodJPxeB9mj9STQy8N6zARDjNnffoadRn89v3kXhVFj5",
  "key29": "hvdYXDSQtD59YNgb1PCkY8uaA3MncQ9YY6hbuM27gEaiXD9FtLwhdR42WjSvgMSo7koVhSp8i89hqoC8ygqweL7",
  "key30": "4VLJ3U6Gd7Aawv6i32TJE5WUCjw1D2YsfzaHgLcurMKUw26RePkxCq8dLdhdrHVxPuSFeeNYs7FCo4oZpEVcX5qU",
  "key31": "4qLg2DuqvX541yYK3MemS6ftKdLXTMuyKXwY6azV9YA4PvvHZMbXK5DsBGKjLVhnFmzABBmbEAFcGyRY8RDs3E6E",
  "key32": "5zsoEePtTD52Jo7QxeZ7aX3F7NASoa9yPeF5NDuZHnQbtmEY9ePg8TX92MpYfmzo8PzzWgkcMDTpGje9yiL5dq7j"
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
