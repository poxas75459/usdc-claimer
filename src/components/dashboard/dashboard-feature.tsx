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
    "2wWCT48JPHZ46fS6J9kKeq1pmdfemekKFjAWybnqFmFZpGNbdxJfEyc1SJaGUCXH5ZkyptYHgLgELN2xj3iqgyYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t91bnMgRNdtyo5M7VPWt4HfHFfDeRme4HrppPx7wStZryqFbQacg5d8ZqR4Sayxj3AZyXX5PAKTcjQ7PPs44x9s",
  "key1": "3pRmHdFpibHzYHXumXx7ueWqu57Yd1vzZH9McypXc7W3b3mj8CvdM8UUeXLt4PWQnG2db4a4pJbjsGxrkzcpGLmL",
  "key2": "4ALjy7phcEKVNsfiffUvx52mDqLBmWs8Htc7yg5hNYBFnLvANaCmxFRZWnRKmUy849d6Jg56f76AoU3wrQgNKrge",
  "key3": "JNwSbpHoX3LuLL95xHsRFz1SpMm7BitjiXdjQviJdWbPRCWMx7y5zEYp5odGwNnYzDrxrmjWAZ34bwGRanb5f7W",
  "key4": "44CnDBFTuyy49UW9pfQyFT2Y6jT2GNosEmet6nUeQDEKdNFhsyBk3zwWA7pfiGS2WKdZ1pDLooo6e6rR9mNTyBDp",
  "key5": "24yM1bX1mMeQkxD7hLqHzeXdHLcAsjJSr9Ws5AHAdEkuGL1b8FqKpJvQNqEf2YgQgw35iURaQTnUEj6kfDSToBBn",
  "key6": "3WFffLHG1SnPNTCg7GY2TQrbgeZU5Y6t5S4hUzyaqdGLSE2YL3R5t1LnALscCTiEnsm8x3j9tCmD96uNHcycwhQb",
  "key7": "2nQFrpfCHNyqE3nrEdudT6iDUQzn2KTFESvD5uV68zWAYJbY79tfy4fL1FYe31EcsvTHgpJmTKXbZW6YrjY5vH4J",
  "key8": "5HULrJ2ApHWt781fa96JWfhw4hKcV7q6K3hWPP7gwgwgB2b6Am2bKnXbjm9ZaFV3eRjsTMNLjpsi8yrVeA1LcorG",
  "key9": "2NgVn3MEEf22YwfBMoSXnaHseuKJ7937gMkfnBanNPJzWS8qJyzj3Q8WpJwArTB8P2jM47RzQeicLPMkJgRRrwYx",
  "key10": "2HSD5JwX6We36V8KoN4hbVEVktTBmuJT6oVfibDntjM5dVc6dLZ186T9G2JW7rbZk1GmvHVjK6nWwSgs42wQTS2n",
  "key11": "v1nf5VX8QwRUZRZE8qDBAGovqW8bXsXqbeRgQg8ChkgQ8GNC9uSbHZUoi1QDn3mcf6nzhGrLF71QKdWtSgogoaU",
  "key12": "FCYQzZ5HEmzqMLHeznQEq44ugRzhEoBHyQ5dWgG6hqyZevcaXjN5xefA1H4AVhFN2jLVQPEPiWTWgA5PcKPVYfC",
  "key13": "2HD7LmM2F6Bce9MzrzG9FVRE9Wuie6U7jTeVsT1u77xbohvT7o9pyRgqfZc744HNMQ6YvcXLtWCmdY8JAcULioss",
  "key14": "5sG9q4HJTvF91W4V3cDSSv3kNMTcteUK2g6zv6LVKR2SJSt9C3mTv7T7W8H2kvCKNNjVsmRNjKuiUFSSEci4jm9H",
  "key15": "5R5ieXUtKHREsKa1EG3n6v1XP8aVA8n4evxKrnJBYSEiQNphNgetMZVQGJAkN5qRto2GdngSfG1mwnEGqAERUNJA",
  "key16": "2Ccttu8o4TXvKkYyvZbiGWoU6obJWjCGD6M6FCcXsTqQQL9qQ5LE5YPQThhvgxZa3ggLf9Ux6MNfBxUDpAJTwZnz",
  "key17": "4d3yGrabVt7f44LAANtDMMY6Bs1aX7jj1kLQ38zfwjeQMrNsFAWg4rdhn1z265mbGeSV4Q7LKPah7nH4SiynbD7V",
  "key18": "3ceY959Tq3VK5G8fxw385xAtx9aj37JQgbq6c4s1F9QzCmMHdhcopzYmqJfmkLRHrcymHLbna9MESp2QpX3YZe7D",
  "key19": "2DVUvJEeN4BAi7SdboCPDYjiforvT5rse1EZt9LuNUYswvMgs1GxCB8d1QZEwGwxyFabc2TTqoSN4SsrQpAkrFYk",
  "key20": "5Qpk5sEaAVdVqxBf9B1yuxC1CRar1ZFptxHRi3mcLvJk8k3fyiEdtuceuuBDvNvfhZsj1CuCakoTB7LdFU7XgULE",
  "key21": "55zPy9pXPySdHTEzn8YCgWiGJ8u8hmtod1B6ohg3JwcZYnt8UjLDuNFtY3K95qjtaZEw1M5KtYzLjC9nR4sB1z3a",
  "key22": "Jju171exigkDZNeJzBjXNvUt3RS19W3sSYY2kQY4MjeLg8YqkxZ9MepWSgPgpyGueUrYXMsLwLfRj8tkuiJ4Lxx",
  "key23": "G438TgLF2LjXBC937ysdeW5dpkX4xW6ak6nSc2ViEYySJciStTfVJCdd1WCMB3cLLLj4ry8W49zBiN4E5o2tNEM",
  "key24": "2qseWnLQem8kbxFAemUrjGvGiCZPmtJhjsjaRuHR8Ed96tx4xUestTALgVEmM1Fg8xYd7B4RCHSWhUxMgvadhjvi",
  "key25": "2aNnXEuzp4NBxz62aFewewsqJAKpezA2JCTsKjWJVgJdw1WYmAATGzz5wEvocmVfKMNQVatm48fFbCRcFLRN1b6U",
  "key26": "5nZQpzQSGgLJQVuWCaEB16KcMm5kKey43CR4awZN9zbRe9zJg4EYRHc3vau2ghWF9hvKyLtx2y1iqghh35SDdk9u",
  "key27": "4T1dzisBErXDFVoZp5kYaGxNMr9a29NtcmhRNSiHNvThp7b5A1tgkWSxSsBhBmxNDVPZLtn1zB7nemVkHU5ugS56",
  "key28": "YDF7Nm14x8gPyfnRpqzP2ZHoXX1s89CdY2bGNztdgAYx65hun8tW6wmqXKAJPYKWAVPRgFNn7ZUwM7P1U7dyYAy",
  "key29": "3HLAaQqTTA93Dfu5q3Nsyyc4aRMo2DTFrxbdMazyq2htDdsW9jTvESJpZsWRgqHYSZxs9arpD3TRFaqZ1JM4vHFo",
  "key30": "4rU5xXfSjjPKHAyQ9mpzFMjp7Xri6Xg7r3zUvghhQpDam81FzakL75rGUAU3gR5M5E1zjaLrDgyBN43M9Vvp9Weu"
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
