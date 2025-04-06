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
    "4ddoqTd8uFqF5RstQRXcQsc4Bk2xQSR8t485BUbipsccs4nZWtsX7QB7uwYt3FkSsLYCRD8jTfWdagAQh6iEDnbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gE2NufZsT5a4KTmNRnNGnZe4FvSuep5pGUruCZzhaVFaCqwXUVvuJDrporQ8VVRK837Z7YbMkx1CT8qmqzh3wdD",
  "key1": "3MfNxH8rh9iKD4qc6Tj9hLaigbAgCEmJ75nNzkUegiSfK1jeg7DjV837Vbep3QrxhRzjT12L2DJVec2xC3Ehqsab",
  "key2": "2xYsann9ZS3C237zzJ6J6RTmWcHY8ftrrMWr9wY8eoQjKCCRziGinjmJ7GUNhkpyzPkp7TDm2JwQnbTsCoRymmEj",
  "key3": "36DhEmvoXVJS3MVwEtJDcTdKTFaw6zPADk4YWWnVvDeuLsasaXnJPKYoV1C77Mh3scFp5UyBq2hQwoPLP6SFvq39",
  "key4": "kkKnmqp1qVxseE3LS2rQVHKjhL1zrMkTxpjsgwaCp1NCK1hFhQrYYvLZiGmE1jqydmvQdzNSLb6GtHaUJMeVwrd",
  "key5": "SLfRjATpJhfkU3pCPBa8WAV4TosW5RRAvKqtFLdm9aAHbT3bCAEnkyPmoDJUgoWT7hYQQuLxUEMkjRBKes8djVq",
  "key6": "27U2XGQVUfW2crnk3M4z1CmrGYjSyncXsGvembXqEA9GgMqCkL1QpVnt8e9syDRc95rxq4tv9oZvemAi8nHsBFpZ",
  "key7": "3yGCxS4yobu35yPV5s2eLD9SDMux4KVzyRnvm5HJY6LGfDVgwLjbtskesjJs38QD2n5mqtgFP5kPzAU8PX3z1SV",
  "key8": "4TKzZRT5wJFSkEQLJnTP5rKQ4nrFMXjrSyi5FXVFUxxzn8W8zcCokgyGh3r4P8GYvzM3KskNUCDZK5AjXyRNKeV1",
  "key9": "3oTWnhAr5JmLVMKsbYFmxSjwcLMmESCMpgGgBtZoKp28qwS3eCwzfytJffWeAbUndparey2UHesLjdXhkfnE7oRo",
  "key10": "339uK4KoAgBJKWSSMWdhSKfLNhCdkkay3kpXViU2geLiqWV6u8JTmaHtegbxmbGRCcfygrHQH2gxPsEauyzQgjsm",
  "key11": "2hNPCVRBd2LXYBw11sW2y3SYNjsNNwvFNVquRCBZdTWyn9zXHeN3sStEEMc3uUw7QLNvCxpNDLTPYWM46e1u84Do",
  "key12": "qFEvtnjREt6dedW8Qr7kgQvGABqRGmHnz8ET4tK1iBjsEe8r7thC17vAq4XhyexHcYjx9c3XJ89ejiwAuMsKSoq",
  "key13": "45c8RHJe3dg4PnbiiEhH1T6DLaj5JrvgqyNMDPL5QXcrPzWJYQyBWve2VLak8x7vey4zqY2GS6iTphsRUmQU3Foz",
  "key14": "2sC7t1HW2iqM972HdwMteRaRPJy6iYLUa3j9hVQmKamxfE8gPuh6n94fJszCburkfLhKioZ5qFAkw36xFmcgPVhf",
  "key15": "434hBLAAz6ZU3toWhWhHwgZL2BCWgy18XCLsYGY7PK7XgHxwCfzGDU9vpBmhAnGKh6zVajhMSzV4n8R9xXuYY6cm",
  "key16": "2rJn8BukD3i5a4vWtYtxikKkb6w9HKHhDmNunWxVcrqu3E9TzdN7q3uYEf8TYqoCWd976KDf87Xq9MpF9QmaBUrD",
  "key17": "mk1nWK3P7HAbSa97GGqbhrsM1XnuXQi9W7qMyciWiQpEq7oef53YbPh3nBzGfLCb36whPk9uieBaA8Xqs73QjuC",
  "key18": "65ofJCFH4xM8YPe4V3YVxE2DS1d9LhXgYCvS9k9PimFhN4xAjtLoK6q25JuB764UfV11xQ2Rats2oYg6KFVjwptU",
  "key19": "55EMTURnz6An1WW2q3jjegzSJb5DGghFkYTDjihBYMkHUKpRYR3H3ve3b89A8WxDHjtwUreeHRZKwRnqkaAA5YDo",
  "key20": "FfX5xo2hfbbWwDjHTs43bHusLTFQUpi72qsuf2Qvgh1c8tWhL18aRdaCvXYyMJ27iyu1iVQHeKhWJAax2K8xG5D",
  "key21": "KVU9DWFEXQ1b3pTMrz2QNrrJFKHSyzmeEscmcpeAvnQaYKkTDDsk4PprEqGMzt7ZBhwnzaDvq4y6UroyBrK3BJC",
  "key22": "2mwPKzVELfqQk4g7UBVMEuDTL1bN8otwGXeJ6skQKnpbu8MoAuUxQeybeu9xuxJCeaQYUxv9ZXei82E6H9tGb4Sa",
  "key23": "3rv1hiG4xJbnutZtMDU3R1nsUVBfYXrioYsPxzqTTg4BeWW9bfw63RhEP2GViUVg1eoxPwiHN62x8GCrDokNz4i4",
  "key24": "4JxNKB98MWKGjqi4jUgyBGjZqWw2fSNsEKesfvro7EJzut2gMUDAL7oFMCy6QfH8ivGute5RQyTXzwKNtqc9RDgp",
  "key25": "5nyaXfWaXyPKQmZLRkFU5gPW74eX9ZGv1f4U494LRKYzAEnn3bS9z5BHEjZ2meyFtjT97ooTi7kaJSEisoFJUANs",
  "key26": "4m4ZemGQD2M7wkQmPtp6BkeGwwiNbyGaoMPAvD37LTSFoEhSurXuNyhBJXzWCSYNBJ2ipTiK9jp43BHjuu3uxSVt",
  "key27": "3iJsZadDvsvMRApY3MKnY2JpEdCWrsE5y8QdeUAk69ufz2d9LdiVpBwjvqx4iNnLYXx5gGgnADi1BT9kjyiwoJe3",
  "key28": "4dW3fPw1fc26H3TphCdHyr7fTG3gK44c1t3xmWJiVsonmneyAAwwrUL4HBVCzFJJcgKWBdKEyyWUgsviJQQaBM1D",
  "key29": "123E4tC64t17nDcjKmmsdtKWfm4tp4mx5rA7ujC6ryLe6haow2jn8X8ERo2h71aXdEVFnT7Zxvc4Wvx9eFim4cj2",
  "key30": "3FHCZLtMLmJFVJqt368MGyHjGZYh74PL9NbV8UjvouVwesQxqpZ7xi1CBn6aP84ideDhmXRJQibobw3XwxuuLq2Y",
  "key31": "3z8Zbg6y7MkX9u9wTscrqCAf9JtUSiU1oiDuiXZckburqRHJfvUGUa8xYv49ci5ZcNL1hwdjCUqGXr1NwYzfFCK4"
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
