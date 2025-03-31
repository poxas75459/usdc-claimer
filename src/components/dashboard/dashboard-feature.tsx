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
    "c18UUgNPj7iWTKmsUHHJDfh1ageXcy4hK7DXqkRJnLfs5TqvkswXMr47qe2w9ZJq2XHAkNo3ip6ar9R9SXsEJvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaSbHCER2CuqtsDJNXZzL6vDY7KKJ6MjNV3zTTZMrNR7okGoBbciX3oUYsTUCyqLPAfXHN4J1hnZpr2r6Ec7PSb",
  "key1": "4kvB72tTj4kW6WTLNU59HoSf4GARaocCybndDaJWfCFYYDSSCKrNwixAcFR7M4jR1HoMYsFTuNgHYQeG3zVWfeRe",
  "key2": "4UH8uFBvrV4eVWjtDExjCt6AAhkim1jLFkhQVX8hqyWo6eBsEKRk9Gk8YtxcYyLMW6TsEhimXbV8u1bfyvQz6WZy",
  "key3": "5iSDoZmwvzJsXDc6h4jrTYnLq6PNggvA3fSdEc5Q8p7Kyd4vmwiF9yZbuFvpcZv6fs4SJND1FTo2U6xq1i4uuCiV",
  "key4": "5rpkRCktUMH1bAxTnsWCd9MWCwEFvujxxAFm2BRBzCWMHGaxGfYAbrczcV3PyK1rS4fV9yp72Uq4KatCRk9M3zmX",
  "key5": "4AQZNg9Hkt14xpQAm3Pb94VWbXNbipbFQx1AfRYWAyQD6Vm9uyhNgYuycJ57LToUtoirCHFPqg9dgvAMPHgtcgu3",
  "key6": "5KBuz5TBuF17kw7SgbcLQ99gNy97EhrbUC6hMwu38Qi9fQ13srQuh4HghnB2WMysANyLGr53xExeFv1LYfwN7c6S",
  "key7": "3TeSkdfHKRwArXBhAdcP8xPuCBBCvgj8hSHPuC8cN9nEz9agZuQQ7gBQNyvakmCCRzN12FSnuqj3woMqMeQGqsoT",
  "key8": "5RxU4yyuvN6b4tHRze6rtJYNU1g8Sw2Afv3noqLYn8NKshY1qpYbRzjNqquH7yfVLJApZhJivqWsqNRsxDTMQXNS",
  "key9": "2g2GKsNx1vwUeqYyrGSq4Qp3n5PRcj9htza5ZxwH3ZkUFygkQcHe2kdS1euAP2bAxjLhD6uwZQrXpQB2kL2557UG",
  "key10": "4meHSkhaAPQ1exQDWfvWFLij9uh8sbHrQXMSQoub5eqh6MjRvyPg2rdKUWa5XmbNMFpSKvkggqgLzhEwaaLji7KW",
  "key11": "22eh7L83qHgceZ4g1w28LsyhXV7o19CDofsvrygQ3rVhE8czYCicF7p53gGcXiFoD3oacd5KeA3bpyBSzD7PpXby",
  "key12": "41V6EF6BXzb8kDasjk1T8Z7E3SG8fTGaU7HBRVFWGtYVmWbyEzN7Xk3HiQp5WfFd1hCvVgeetLDKwmdsg6pFoWdo",
  "key13": "5Ue1znUo5N872Mcqj1jZBPtmAn8FecMste2NAYdmWxjKCmSuf7sF2WvyvZNKn5FB5KbNytYbuyFUbHPRhFvoRn2F",
  "key14": "3iUt3sbF7yw5saYcQ47HvGb4hR8vaHgVsUxfBKiAB8v468KZSFrCGHHC1RAFUZS2XzHCGNQjqMTZhvTUvsBwX8uR",
  "key15": "38qgpvPSTmampRZpj4HgzZeJFCZySTHxTc3hD9amTxUP5M7v8kAnCX9tJBYxwDRmhUC8yekhhY5FfVK7czzcR7Ye",
  "key16": "5PJMfRLPbtDQ48E9BEsoQvVh85mZJVzuwgE12eW1g8Ssk9Hk3HSUhsQZVhTrvpjA5i21TUQiq7KDSg3ug5GbiS66",
  "key17": "4DW6niQgcmJf8Nmd1oAUjq2cXF7AYpkmki9fCmRcvBuMddPC2DKG63iXis4wG7i82QdQSsBci8QyZnuvjFa19bdy",
  "key18": "3wA1NtrzcR3Ms5LDPwJ6kFfQCEhXyiVe1ie4xoayq7EStBXtfdre9nYvSZwFyinraeNr65f4RoEYxuv9XzZHErwD",
  "key19": "5de8eVH4pYuYroALgCfQBnuCRqvdMrE2JH7bs4BMHyFrTtKkbdyyUefcF6W6S1HQkbrzXXCHCVMxBp6seMorWvkL",
  "key20": "2ma1XgcJi3on2qd3XUnHyMH7RT1Ap6JFmaGSxgei1xQUdyS4gFG5926ypcRDtHGcJTkLqrPHYEqSoUHQ3X6pcfWd",
  "key21": "Mh4REQgipZ9tH8DTp6WJT6mRCZKsDAprBariCNNHtaBiN8Tcoy4YPWc4GgCnmNy45GmykVCGoRLi6njUjF74iJg",
  "key22": "CJKrNKtFga4kdvdGdHhBW7gCvfVFtR1bwFvxkfJ3YQ4VcdYohoLSQR2PLT4eZuQ5qsJXLR6gyXafRvqCw4RBuaC",
  "key23": "4wQ524CV494cWZjkWZjyRrgQYENfxBHNBwdzZpnnS1eVhAyZnFj43Qon4huTWafSnmBWhGgoorAF79YG6AMzKrRj",
  "key24": "64UgJwnwvZ5nZvCHASqUNizXv5R1tDw2CJ9VXQki5Fof47P4ZEpVsN8icwaYkJHPZmsNPL1WBj2MwMnNa1zm79aD",
  "key25": "5fUUrnkJXhX3avPvvHpf7LSzapLSKzZPjMvfzv372mdAVyxGi1PmJJ7qfCjMVZ2KdT7ugKtxpvyGZx2BVozQrArZ",
  "key26": "2EmYAfpn1xbmXDKiyDeJVJbNSPQtmqX18Xq1McMTeFH2y3qv7S3kLas6hwzuxTAoXew1xDrsps1E8DiSyctbYmwb",
  "key27": "2wvLbraKU67ijPtfTmm9SjVdeBDinjmEt7dypmsv8Tt1xwrxmFmKaQGcDnyA3sDFmkEqQbcNst2kYHXqq7NXKesF",
  "key28": "4Y1S52FeEQsJgxyjhWLBa5ybXFGiNRCjPUcj9SZ8K2qEi5wUk7Ku4bKrzU59MfrEUwB8abU6SDUNBY9BB4XYCxin"
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
