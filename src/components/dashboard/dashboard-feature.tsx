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
    "28sRZv4XKxgqcc6ahDVEMubx4XM6tGaPq6th62JJxtwRZmKHrjQ6gBQDdfVssHkFF13isECZtTbs7MoWK4tovHKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4ZEC92uRnFvZBJ1craxA8ySKSjAr7eiUZfSPgX7et1YP14A2goL2GFNwpvY3ZuLFGCuN4rcJiM2AJcutXhNGcj",
  "key1": "kmiAyk78GEK7NJR3DxBvX23CmGEhTc7bwfr3eb1znPKau2mdPCHxWbt6AScztTai5ESZ8UzcnPii4vzC9m478Qm",
  "key2": "44gtormBSvrTF6VGVQ2c7SXjCNYRjg5osKKZHDfzDZK3GSdsMkqPz1p4p6rFsyFCQu3drBHjnuMrLfvymhrnarQf",
  "key3": "3v4qWitS5y3Ln4xWcswuedCzeKn1wikEfFNAE7rVMju8UcFR74C3dzdu1T8peQTNY4dpGb8G9oV9UKhyUNKyhd58",
  "key4": "CTYaakCPjocMFB1mSmuj5bvMYNo6wKCfy3z9WxMzRznCgAXdkv3756TqmG4eZ5H71YzfzrsSfCeXXLMmbV78vi1",
  "key5": "4TM4u4VAzwQBkjPanZLKu4M2AtB9cXUHdXNhT1mtWoD8ZX7GT1vTxNVTiNztnD351wGskUBS8o3qYEZKeP6GjnwB",
  "key6": "2TDvawMaznhuNm2tE6fpjCcV67wNN8wRHMMQbuLzazGuHaWDzCCi8ciPjZMfh5XnV9oLtwQh9rjjJDwZf9rgSz9V",
  "key7": "WuHP6WqEhbxuHT1xUW9pGVyBa6TuV6jxNj38tWacWmE1FqwBDuimFPiF82EncehZRSRDd1aT59ucgfvmrGu14Vj",
  "key8": "5DcWwPUqdQaLtERnohL2zXrXLZxFXTEYhfvDQFDnTGVJf5udHrECtwP9CMkBma4r9rRcs61esSTKRSwYa9PeJRGg",
  "key9": "4Upaj1GyEGe1DNZqtg5Zg5UMjHGjEgffyu9yAUtJMw5trUpxMv4y21R61vUsD2zKZWpmAtgCw3KXkV78HpJ1nv46",
  "key10": "4FxtQmCJcF5u4eVhVjbDhaEiJtNfeqqjLN4DJi37Lw7oQm2Np4PkPcAqwGnrVrFP6PXS93BgUm2pyKdvXFueDDZH",
  "key11": "5VUA2tFQPzrnJ7FFnGvvJtho4Qk2CJ5HHMQdJxmi4r4VCFgtzH9D2KXJ39cFcYjB8LUarUTQ95ZBu6FDEjssXUUE",
  "key12": "9VndkyvMbxidjAnjRcEP41BiBUwCvXuR6tHsDKVNPQf6NsYY374PZEdxe25oo3fQsdG3ZYLESnjtgWzD9jCYvzM",
  "key13": "3rz8jjVAbG6JxNp5M38W8irwQF9r95hs7QzgMdd7yRhZxDhEDdg4eksfZc31ZJJdxNwgcvgfmHGumyyU6sByv9mj",
  "key14": "3i7Lh9DMbQ8YLENmzkMvVqqBDG4MRFEUMhpvUf1M6vH6YTnp7gNzdypkqPMf7Crn34aApZyEYoWjXZA1CLtjQmYn",
  "key15": "4iyhiyzTo9ksU9a64tfXPsYc3hkogXS6d4tmqCw8sywruLnHmrBxWcMLQkuuTBjwEKydaEdRjvwYfctmR5w8gUqZ",
  "key16": "5D947zEqEo6qSFPLYVBkyewqgPHFMmoLU7T1njD4s4qyRUB6JwM4p3pxFuRQBM7PSziLidkQhBHaVrF7MWGB14FD",
  "key17": "5nL7GkkJiPkAZPZAwAG6iZ4xziC7ayb4MPRH1zN9BzmDoPoF3yb6ciQM79dQhrcQUkahsGrbm7rxxYwQUgqjYQnw",
  "key18": "4ZHbyf3ji2uobTbqbwfWKL1orw8wfQzrbWvfv4sLjiFXcSXoGsvPXRV9bhLKqMhJYcHVQrMM4ctnCASwiQsuoCXQ",
  "key19": "bR7xNJt3DutZVXk2r6FzpTeZzMcFq3bQ3bHSPM2uaNdoAVzXe4Drp5cT2gHX24S8zQmz95qeKDiiSrRXFHrc9TZ",
  "key20": "415UdMHwnY4h1fNRmoxjZ4gCzYh6FPh432WR6jDkCaNPgFM5VjtXEG9fSuSSC3u422zQRnUkP9EyKzLmGBwyp5PD",
  "key21": "2nHSyznrKiiNsUFs2dg8uhW2jSU35mL78Yjudo3oW6iUn7dxrBNsu54xHo3Gcw2nCUdiPoZiqQqtam4YaP82G1Rr",
  "key22": "2QuQ8YF2t8aXhm2Y28S3mF45bcnk5keDGVL1tXnA2TaGM4aMFTop3p4Az9rkzvhF7xQfDFhEzqmKanPGnxLeoaic",
  "key23": "4GX73wtb3nYTS3WuEai4fRnwBMoS4vjy6Q6aPgxbtiHT9r87ZBtw7eWtVRJKxSZFUwYwsBKchUJFW8obEPG9TwPB",
  "key24": "4JBEMz7naA8fqGiuUE1gs2DJ79tj59LawLWBjtB7X1extNNYfsn4GXAP5kjMAbHAhV5FRKAMt2AoLi9bJvzUSyxX",
  "key25": "5eJH9eGB6APiVkZu9aQnEmxCZ5j3yWAkDK9QVX8Ckp2kbehnEFx7CNsqVTsDJNt2hVTUzNXJKnWKiq5rsa8R1xS3",
  "key26": "3knYWb7iaHUB7YvxGGMPJ2sdYzRixtXMTDrKh3SSEMfcuuZ1UrmfuPUKS3cGVgKYytnArrfK5vaqR8Xftf2Vxb9u",
  "key27": "3MQeWEDHuhGohc5sCnyj1mXvdGjmUQ3ipwcCcZcFLw7Fs7GYb8FPFuuK1wB9W7oo6ji2Kq4rbrc2kBTCP6EVp3sJ",
  "key28": "2FaSACMzcynHd4wrhamssy2AntcNBbnUPVxYGi29L8gLTYJHVrSwEJxTi3kRA6GkaZRhSPr6uHoUkwvjZm6GsXNv",
  "key29": "4wMYWGYz3WFdHyo1kY1VwxUocP23s9sa2eevoj2Di3YHbQLyP8AnUoqdfhCUmBYa1jz8ZWMSbgSZQmd3C3Gr57oP",
  "key30": "rTMKJFXai72JBtD5rgNDd9rgRNkWFFSDFSvsXyCQwiuGhPU4hmE3WXuZg7UVgrcPz1sQfbVQUDx1P84PUWbq9KN",
  "key31": "2pt6vWwUoXrPynz9spskYDBDXgn2MiYuhgCkS5KSwMEuMjaoXUEc5TiMzEyVU3gXrQKwvqVErSUjS5YX68jAWc4g",
  "key32": "MGsdZDo3vrCEnodZW73WKD5a8M5uQR6cTJmVYiVaxwzjXP32Vkq59CE1qjr7YHCziyFYwGNYuHDFkuG1qs9bjjo",
  "key33": "2nKELQAEhTSEZN45Hgz3mn5nRBU8fjZAFfRnG7Qw4uxFhbSWMiMMeSfeUNE8Y4cFx2rU53yqvgJv7kSHBzz7p1H8"
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
