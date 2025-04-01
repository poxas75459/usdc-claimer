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
    "3aCsLWeha7a9KAT28ftS6HPDruuPXiE2VhJ1iE7g6WLi6ve44s8XribwjRCQ4bxe2JhYfxLmgXphQAZdbSbsbDzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdwLBhfsJLBYedzJEe4vzDyHFsyRrDP1vBp8y3oBd5d4k36GhBxMy737WwkjuunRxYgvg6c6GyHsheocnYNLpmv",
  "key1": "2shx88VAxwtXRuHxYCyG6fdaSXbp2zKncxnATa8tjg8SjkeFR6TzANVV3XNkkUuEtriKnFyTBicqdR9oB8cQK8Ng",
  "key2": "4vWZ68HN7jNu5g4jGN3GTsEYXunqQmqgo7XUqAWu2hfiuKAwTWgsnQJEA2dgwqhwADJu5RaU5bYP8bUFNJb7TDhA",
  "key3": "EVBixfFeWhdkRXFSzg6NCMS8b8JVWjw4kU72A7BAcu8ntCo1R2e2a7zhw9kjhCZFTquPyUxTv4c6UqRwcyUFRxa",
  "key4": "5JboUDbPB4V9TPg9Xko12cEfHVZAyF6mdrJpLnDiF22yijpbCU6Tc4Lf71W6HHKzVGtYfTEL9g926RueoMfZjL4B",
  "key5": "KkvFbCMXjvQAtCEGSYW6mjgwV7uhYLmwrCCxvK7WYHerMN1GZqcDa4XVXgsSJAN9YuhDj1NiSE14n6daZ8kZAFa",
  "key6": "5Ha8dmFyStecsZ7NL8CmC8KNZ1Bgh2NsZCeStCX69UAGA7sbtKsjrM4ULoW52rwh9TxozdtnymvyxD3pAM63VbNi",
  "key7": "21EywZXFS2BcGqo4bbBvrugawvM2he49FrYTohYWaa8nK3Uff79trG1ecP2mkKQQia1iH99GpSdEGkyqwsrhy8vE",
  "key8": "2NFiDVVSfQYdRimZRHwzVmzeTpt1ZBibJjtXKZp97jN29jU8xP1gMU1W7iYs1UJV7EQrMGpToxm5Wt9qbURexypW",
  "key9": "35ASQLRkWiASgQJvwUkG4ausuVxj5a6TgKcS8iukF82fYD8WhK9gDZo7pvpJ781HFvTQ1uMN98tsMRHt4dbBkBCb",
  "key10": "562S6K5pxquXhZcc1erSfZbGsCsbWiqqwhBzPTJ6fKtrdPvGCSD1JyKBH3mxfd6faeNhzwLGN2K2D6KsSPafT9UT",
  "key11": "5Uev9QTLRgAsPUHcCT9swKGyqdv6wYpF1fcQJs9L8px3UfRMXi2F7pAG6yAKeK99pR3UYiV5C9uC8utBfZnkTNJ5",
  "key12": "4YxXnQoWAV4ci2N4sTjEYjU5L2jCAmA7qBaq1Bqy66pnVupXfBMvRYt5hEKjKoPJfV5PcZBLfRepFQ5SdHPFdz3z",
  "key13": "5LhXLWhAeNUcATmf82uAuaXjgkj2zcehZWuuL8LL18WMDwi545BXaCVw3b2AyzNuyduBkRmehzwM4CXr9AMEqUdk",
  "key14": "4xFZUSSeQvS5iCNeCCon215fDfvqVtj72VjyM3BNs9N84moBqsPiQbbSM8uoKod6yXE7xyTT4CmWbhBgXPTggBFd",
  "key15": "2tF1jQoFH73iCS1QgHGAJESjYVYMNFQfxz4GWvL3iyJ9Ro9jGy2rifhwDaXd1aSPN5y5qqwDka34D7MR3KHu39kh",
  "key16": "dX2RJDwXhUsTXfv4XsqMkCXHyL1bwx7Xoa1ypkztgf6MaqKnKR3U1sULJ8kNdP2GnLxSefnHsED7wBeGLYS7CKA",
  "key17": "42UPsNowrEUj8pBWV1mthLqzt31fMCP427XzhrjSZCUfVK4cbKPdafJUGpjP2DNVVXc77snYBjpQWigZzcejPTBL",
  "key18": "3PPSf7WxYp3RP7mC3BJNDXirZ3jsXDLehBfHZ1EKY8QqscHcwoATfVnZZkFNGg4U8GcM5ckEXyrKuwdWDE1eyTEB",
  "key19": "3Gou9KivzmnsuTC28tdAM22Xnmcna1SM2rKhZ2pscXpX8VCXpQAtnJzkFxyGu8xx4rYBbWm6Drtx77bcKTu3HpJh",
  "key20": "5TPEM2pU4j4zSnGvJCSaXxpRKc4wrNvVPbRbzKLdgxkgPc3gLtLqzM5CZiMu1vyH3vbZ6pYHiAWjShUrtzWqKm6v",
  "key21": "5SWfrhSd8dfrvgC5jVpAwC3vm1A79YEVejQg7rBgRyK9hEgJXxCHhA1B4UiLQrddpJWzJasawjzHabjj7cXgRj31",
  "key22": "41Aur18tZ5wATeVWQy5JmdjVPk5hiDjXotAn1nng16Xn1vudTCmbVCfNEkuQRvWH8JJGDiNm518hH38nrJaaud64",
  "key23": "5UmFtNvkjNQg39e1LhnkwRQTV8mR9s6PcRwFEmV7VFRE4ivqsuwPHxUajETLW5A5Uof8Zosge4f8GLWzFFX43h8u",
  "key24": "2si6XL7JAAk6SMvUmgdKBVaX8ZPtAa3TYzg7t8C7iLQgnfLx8b6Z5rQNsoZwbt6i72tj1uskAUEMZ4GCrJxMAoQw",
  "key25": "REwXpu2qXgoFM4oYyewAHD4yoA38ZY2QQwn65NLpBAaPWdZ2vVdkwpouDRhYKS4DH7iHgcEFndncPxmZck7L4cn",
  "key26": "2C1k8Ub68Qw27Crb4H7v8Po9wHxVE3YC9bYeeZddmqhnbninveT9emhx57mGEEzqSExL4UdG7VMaxaC1yvvFz6jg",
  "key27": "3bV4ebpzzUVbtiKHKvvQJiLUAKb6K147Qwk4Qi4QPk7Mc8gPM1jPnHuv8HCM2u1SqCbEjHa3p7sr8fk2eCnWxym8",
  "key28": "4y167cWV38qYKfqwy5R2oZh8eR8EVcJhwp2CPkmGPX89AS4n3ky5zjfDwoHTTEL6n8xxDp5s1V2g262CihZ53PKa"
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
