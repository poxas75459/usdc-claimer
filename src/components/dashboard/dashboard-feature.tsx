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
    "2FLo3Xns2WhPo7hRUrrmbAu5UJfho3oFqZG5wv3LLmvefZgYpFt2B5bMHUKTbpPGaSdiCst1QXjZLt8bkuKunjKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1EanRHs3X4XESLnpdgYwrr3ZjqoV5N2iLTUukk4VwWruTXnpL9Pm9X11F18E3hVA7fu5B2fBCPm1U6Tyo92oXX",
  "key1": "3sS3ATbgpcYmDoyEhanAbSTrZjbKnQsCt4RRWbZyGqXJQGzVhPzBesA8tN9rmvPJejJDpb6v1pMGh39tzwMXm2zu",
  "key2": "52MKv1J3xTfy8LNYUtuzgStTXYWbgeqmfnRkaEMNMsrCTNmoPxK8z5JsM2cgbVCiiPRqwhd3sTDRBSeYCyPwYP7r",
  "key3": "5xUWBJ8T76QKNSxFGJZqSFKY5tmwtKnwitWKFmWYZpMq2VjK9WeZFLcumCAyA6LF42RjcNoHusg91FdVhjZCgTbK",
  "key4": "ZzgNHHj6pQn3XAKwSSeFr3yXfSvF6k1v9MWDdRdpBFmURC3LqDDEULbAdhy3FnftTRUejV29E3skWvEsN85WjWK",
  "key5": "x7im4AcexSDg4bgKaoQbY6Eqm5tf9xzpdNfT9zr8JDdqVe2KLcPStkTidLcWwsfJsbC58W1M4PhM8EhUCaPfRuq",
  "key6": "2dSscdf49HKeQoYbTU3NNtstJp9ukpUXDdjCmjep1WCZHLJyi6SCKQRWfBdSTtMApig7nRxm3kGwdpEUytjpfJzi",
  "key7": "39nQ1wJmVmk5uuMjuUUZiaDhwcdujTrq8H1CdZhY842rAACLjRhLbNQbA5j9BqUZoZ2mRYwSzpYhyXZR4NVpG9om",
  "key8": "3zUUZPycFLstX4deKDBaGYTU9TVK52Xb4xovYZwBkdtdfhvQvo8W9prozVSvpy9zAokuyW3kAXBFsTJgemFgxDWw",
  "key9": "3t8BZxinKkRL3Toj77b1Zw8pD8qRtpkGYdd37w2wj4iH3rqbiKajPKBZjKcuz8ZC4tUbfKQqRjCm2VEgFGhwSLYK",
  "key10": "3HM4jZrpTZgvCySCu8uYp1qLM3VoL5fTi8fGm4LWG5AJ6PddfJesLt4dxkansCWTGPkp2TR7oUpXsezrrXeC3EkP",
  "key11": "5EtXLpUQ3e6pmdKnpfsyPBU35muEipwc54aj1Gu1X9vaEUgbmc64j7bqzfmW8aJ4uajKFz3xSRi634QiPGKSdiLH",
  "key12": "2NQPn63q7bP3kZeu1c1veikQzWaDWVkjTjJW1T7Q4NV3uxWP5xGQ6yYi3p1VGNAdHwJg2h9g78TLaFbqHpLLULfg",
  "key13": "36cwMxWD25385bwTWyT1W88dq2SXxjyZ4Rjt12rHaLZcEV89YjNuWVBqtaphK5mUg88vXaKQBd93cYYMjHF7uUUa",
  "key14": "2H4Kf5u8HMpTTUxmU5NLPrcqV6VTUE57DmxHXEvnN8XnyzqCbXFHYaE2LE5sa43cEWtZDmEEjRvVDhyJybEU1cNp",
  "key15": "5KcabhFuNrNk4eaTJkYppmbSgbxMWhGJAYTVEAK6sZw6KwLvFQpJB46c37gJaXbtTdzr5HTGCqU1zz7uf4kUz3GL",
  "key16": "4nswv9CY5g9f8YuoZRr77nos82haCoC1Q4TwDMRJCVDaxERCjoNoP77gXxdC4vnLiJ4oKtVsTxme2WfERZMFvG27",
  "key17": "2g7hGBSfryhgUSNxe4uDBvccNwx8iEFXHuK9CVqtuzP7TznX27iHjC2suNHh2VWgSUZkWzsXwv7eBw7Jh7nT96XL",
  "key18": "5qzR6rXCDx7rgZWgZBmLqy94R1DWDKwesEb3kWJCedLMarVRntExDirNzWpNXLvnXjhrgqWjZETsHAGdWM3BX2SF",
  "key19": "XGngQbLV1jLTpXaByfSZRPFHsuS5bK1p3F9Fd9XXR2PAbNLN5H9Rg6PnbLLkj3xnfPJLtLbP7Q7JAsDtFwXxbDg",
  "key20": "5eCh4td3mdbfNhVn5qS9LzoamB43Yfr7MeqCTZnHNsgNKwgpvm2xAzH9kLwzknwQD9xb1WrhBWFRZVqj4rFyE8uo",
  "key21": "4JFAHZMoeiPLaz2t8ozKbHFNfqq2LjXzuCPAqk6efUR9ry9psYEbHzSfv6TGnAG4ZXNj2Ye6cuh3QQmpaGPoLpry",
  "key22": "4byZo2a3KTi9xj4WwMZvkiTMST64Laa2cRKp9Q9moSwvDiw4FeSPitBj2bnEEyu9JSJxs4CZjo9XiKJJtBXvNrrt",
  "key23": "4411GEJmwKo99xZHx2QvpEj7CKxL9uQtwyPx3WjMvuu6mM9j4WscUqpgY9AN9JnartLffZmJyATWT3xXx2cJLjxr",
  "key24": "cEdauv2uyed6WXxTh5kkhFm5Sf7JPPdaXGBbUpPyj1P5xQgJFJCPiX3xsT1NcfrptPW38BnLmwvzRunpP1w1rN1",
  "key25": "5SxZLLM5mHJy7AprPW5D82tgno1wWaNBR5BJjEnKz9bhVTUGbhA762TjQDicJdEk6MeTM3Rj36NqaEPh2HDFKgVW",
  "key26": "kbchDTE3DdsC5czmusrFjSYb9WBWkJadLHHjCqYVavd1M28VLrYbgMqUNEfgkHjW1c639TXAArTJD1VEBnBwH9V",
  "key27": "4kfiAq7TraxfuRDFnSnEwMuCXgHTJ8BSFLYi9aoet5ASRCNJsocULrPHnRUWWbmU1wcxCUR2xw5A4THbaaHRNKnH",
  "key28": "4sawTGNZsvJY4JXGuLFyDMZ2kBuqQWNkxAZMJ1zcitUxKQDe2BSuzRw4GM41J3yCNLgn6ncn7RJYEjDHPYxPD6Rr",
  "key29": "5nUHVmn7N5HFkPua9Dse4VVkzdwpMdgczPSa6zQSSD8bA6qZypgSGFqy4opV21SpJxeV58qm8R3jBNVtZpNVou6A",
  "key30": "56JpRBSvDhaA76SVtS8P3mhQJJ5LCJqabqAjqwKsTnewN4Xzmg1iXZtJboAAyQvZPXXcrioraMDWdWzTLdiatGQ7",
  "key31": "5zqqaMjEfUsnFfffMed9rRpsjC722fMttL4e27AqyBHypsYPHfj97KaQFsoNw62ow15y8tSXZWQBwpjkoghQMYB6"
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
