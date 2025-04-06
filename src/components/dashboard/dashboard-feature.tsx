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
    "2AW2EByctRTCwr6zvxNuf8QtWx4mvDpRxusHT5esX5SNFEKW7PPZ5x8ZuQqjPgk2Ltx3zMMXM9ThG8bPBP1oH4wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUgMjwrvxUgLgU7bwWqmhCQkQED2RJy5XCdnMNUFt5ATAjBDepFX7gVVUVgkGSeN7uVD4BU3zAXNwvNBzNT8X4y",
  "key1": "3ywHXCDzqPzF3Rh9gf4PQMgktJ9uZirWKoqJAankASm3DFqqrcwtZNjnVxg4RSSTWDiyCpAUdwr134cWgYhk5U1o",
  "key2": "45yn4d7s7Zdhjms2ocNdiVB3pYY9WSUTHRs5rgsFPveQEru6noxtCwQ7sMwvRfa2y2ZoaNovWCTkDExKvS5XQdY6",
  "key3": "4R8LrMwto5rApEwYdFYZc6w4WBuAqzBJQHNnLFnYD3ykkT5s2S51t4k1UQ1nLf8Aew8LsQP6cavjwe1ARQTWkqmn",
  "key4": "5V5Tf8FfMTHoMJLJW6esq278fffqsYSE1fVGi3hdcjWRKzPkXE7HE33DwKYJjFiv9TLJhD4ncGdmv4uAZGi5oXwn",
  "key5": "4jhSSjW2zbab5GHbkMhTQ8abVhb1eyhUFqRpsCDscoBxvjGGKgmpNk7ViraG3ntLkCo5nzdHQBxmm4CZNj9Nkw6t",
  "key6": "5ZRSgjHQ4ahCXXDZ89WxnhW4REQn4qCVsViziMnE9AgoSci11P4DfHboQfHq5BoQKdF425hpzqo2Lyn3aTWt5Lxt",
  "key7": "4wfpcrXNRrz4xszgWzfEaYXmoUB81rrZMRvHvuyU4ZBkU3WYWfAcsrf2dwcs33SUsKXKSABbKjQcCv6qWx2YdHcN",
  "key8": "hQXVAiMdwsj3JHxTFpSfrVvckjwiCx7y6zRGvYeu4kRYV4ErUHCNYybKZDc9C3SFZUagp6hVn21vFE1XNE3mA7T",
  "key9": "2UVovzHEEsDV3x8fd4LD92bMGdCnkKRahi7XAUQewbF1gAcp7YuSajYPfoMXMM5xAJXxseNorNAedtaZbmgpFtK1",
  "key10": "4ghHS7pGY6FEJny3Ldu5NbsJvK8yFNkuDVVdNGsTGasT94HwzCNQj5o6uKTnBcvqyJKBfQnSHDpzxZ7JhmDAbXcY",
  "key11": "4xapKj8iQKWbyVYzJCBbTZ2H7s3FqqNKic3b1b65v5ps4fYqtrRkv3Z6Cff37e391R7N7MWDrNV878ogzae2shUM",
  "key12": "4LMGBznmxV5LhMYUEYV2Q6m7BpSGEFPTiDYZ1FcYnSCQTSurtBadwREip5sRbxe4kJD6a58VmTjFUz2Z8N1rX72j",
  "key13": "537Fi7BqsF8zFhnyhkdfrdaozaCfaJBHN9iVQgQaeSNubpUmiGDxpCcsVCRrknrZ6r9RuyFcdMPqkww6diGyJfVv",
  "key14": "CF6q5ffb8EQEGsK2mZ8ADkWY2zwaUiEBZMAeJNFTLkrSw7SfV5moEyJkFBua6LVEjpaJmmyzpNJ337SvjiEWmtp",
  "key15": "2uPufYwsAY6Ff53W5kFkr7t9NdEX7zD5r7WBz3XtDurVV7SEW9dJH9kZuyabHEDtZPmtscAsjwytGPG7DFTMw8Si",
  "key16": "4PgEiyH5SwtKV9iVtZmBSeF8tfecpzbN52vsD7H6Ko3uE2Uwio3pa2sjKHaBFhNuznV9pmZcP1Sg4eTfQ1eSvaAT",
  "key17": "2HwnHYpGv1xsrmYZsfqJsKWQYVyVKSiQdHcvEAqpXkJatfttewGh3ncjzyAw4G6W1zpcnbTXaBocguMp7UbQAyDk",
  "key18": "2C982suK7BjVnhbQt6BZPc8f9cwmWjwD1jZYjx9yCNk1YfnQRyrvDdYPNuKiBTdo3XA3ovzYH1448azkPfuLtari",
  "key19": "4jxPEHN8huzh7L6hJn7k8bu71tHdXRDdBuD3cAvysJHb8cWS6Ad1gvMB7bZUybKWkqWtr8ZB4cYgkk7YaKM6N5wL",
  "key20": "22ghUMfAXhctLCGfguHzhtxKtbxZMBntZN6mZCyPMA2mGGa6m6xQjrmQ81YWhpbNMqz6p9eP7F1TtT7aV8zHshNT",
  "key21": "5KUBDFJyh7LixywxoBP8tBWaMGrJoZhqou3pfRma5rC9e8XMzRfvKHzTc6zwatPXhAaeerhtKxRKHJEJ8P6LV7BK",
  "key22": "8b9osGoqBvJkC87Dq79Ukxv4T7qTCxB9NsitVBTVzuvPdq6z5shojAFKcMCCPhbY88Sg5iUFRontK2DJMC2euPk",
  "key23": "dMZhtMaUhvhaGDHrzAuRhD4KKjA2gf2VQZf3NAfosZYWJJp1YGf1LGErCp7o68SK4ZJs1Lp94bLzFqvpgoQN2bD",
  "key24": "MGQGxNfPcVah8AzDALyJdiJiiif1YAq6oYs3AARMsJihCudMwkGVi9k2MvuH69nCbzPssV8Pjs9QahKorUTURV3",
  "key25": "41DziMWLkkLyzcDNKGBqFh1j4h7PtLsvS3x4ugT6M5QKvnGNsa2S3eamoJ6WR1wYPc4tqnNQWVqdBn8HxMyBZx3N",
  "key26": "4Tc5Se3NwrrHWzC9W3KzKjyayJbUg1pF5D7wAAkDMXMobdh1p19QuCNHGJnTG4z5qafxyqgK995i3snfSZym5xaB",
  "key27": "5nWeG1azmoRCpBKN8T9a5VWWwHcxkqsh8XPvhGdQmVXfdMYTRo9AkNzDZuiSPmT97xjGVbLakY7fhuH6T2tngT2s",
  "key28": "2G7Df9TU6cyKgJmv9aj3MWE9eDUtMe1fQLtSvzFiwA1G6Fsh41q634yyHWpwEBGmK65dyVHawNPJXtC8JaZASJDp",
  "key29": "Y6mDi1322MKNrZMZVcjxjN6Smp6D9ca7JmudTME2XoeuWdDhjuqWKk2NxjDdGNu1pA632kN3csYfZ76xLmY3QUe",
  "key30": "39kj7KJewy1S1DzthYtCQ3UKx712K1KAoAgd34WAKpi3C3reURppUw5WtAso83MFZ4cfReTqXJhNWsYz9AitLQ3F",
  "key31": "3VMcJvrHQ94RcfNzxgLXNPz4YPjAEUmAAzV27BdhyGTL8RKfryyo1e8xvKK98LAPj3ScWC8FX6qGRzT6Jcz6UZkU",
  "key32": "2UBwTRib6WfE4pd4aorTuyV9KW99EofbUd5Efxp3k5RVANRMm586CTVYzAsR8GLPASAeLUfJg9boxXSgqjhBWYrF",
  "key33": "4ZSXWTxz7W4wBggTRj77hZt5oNnGErkqxJMDYuhV4k7QaT5oAbEtV2KYgLru8Y72bUETmPNwgtUgeu6KNcD7SAMw",
  "key34": "4S6bFibVNMVnWJvNpcnGbpfokAveidFvdDqW39mF2Z6Ufu1eJEe73V9w8yAzUcyh17dWPBPFDwDKrPoRTootXRpt",
  "key35": "3W9pehdy6WLTHeGPfAMbVM94jYRYsjD7tTew3cZTv5p72iL4zLch8NxrJGkjomgASP2U8fXQdqKVLN7DR9nPFtRN",
  "key36": "35Mbaf4khaBU78QDqv54c8LuRKBMHFRDhTU2VF4dSKZoBZNBDAuJM1fbevR7UpBeu3AuudmhkQX3nXWZKXd4ryre",
  "key37": "2D6eQJXqWdW8SfjEh2BfdsJoMQjveFqthjjoTRVuoSkjTjWDRw4ZYqfGz2zQUuEhDCyCnfuTEjNoH1xBYyaYKbPY",
  "key38": "4MYtZougCviphLwrP2EYZxoVCxdFU5p47jiVScbnDpsDAWnpuDpi9DxA7Es24a3CmhKR4TXSTK88pLGR85TrX3zw",
  "key39": "2uZ1UoFwW1gbm7ULerpZoH9g7GRzu8VmDA4FPqe7uThRTPpEi7wihgKw64SS6BqDsRDBX3gV5ByvNWYRwc3nKgFJ",
  "key40": "2poQStdCegZMQ7fmCbQuU8eQhsCxWZYMf8dHyjT4B3AAbVW1u7TGZg18nS8n4WmtXiUhPd7y2dgAHDFPrBG5ZsuN"
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
