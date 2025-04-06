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
    "bSPkoAM3gaNK71BKedqQpiJmfVQv4vnSGfPfPPyQZJCGtbJeVY8ytNDDFZuR53wath92ccmcaaheVbSnnWhn8Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyyEZVefbD8awUEdnWbrenx1NYLedAU3N7TUJLnYbbUDbQBUkkXvmQRUiHiQB1CvwzshqfdBepAYEPUy1uyHsFF",
  "key1": "3wTn2qjn2VhgCmwpdrbc86Q8qFFvC7r7kmJMgYejCu6RU7f6MQ48xQw2tCTeEH9jwWSDX5wdvyeRhjA6av6nnYYq",
  "key2": "4wmFiEdModiv5MTC9CK6AL1pdB1FoPbVeNBVxhpsyUFJAmyn5xpfvXZcRq9Zjq5Qn31SoXPEnYd9mLKQ7hCEowAF",
  "key3": "5jYZ8XDUBMLaRNyrRwVskejRMmV8KqozVWnqABLRKEVfS4XnnCNNTFXjV19dgUh4b7SpUTCXBBuYxwwMawHRkUZv",
  "key4": "4QmLje3YMbXcKcG2Tj7MjgY89wtfjVdgTWk8zynvHE5YpDGCwb99Mv1g7HGneFDft9ZhDjDHh562rTJwSSYQh5KK",
  "key5": "2tVKgj1gWtxmqJuhq1drTVjgzG5U4fg8HBg4Awe81DuspZmQ1YyZMNKjBpnaGjj2bmqn5B9Rgb6wgD6j7ifTwwYE",
  "key6": "5f6F3YR4ERA5C7sjh8HP6KvF6MNk9uKE448SWMdzSBR4qAmtCNjzwAo1VaEQ12EWyyQtb1a663RGwPsZNixgqDoH",
  "key7": "fYgcKWxG5yFtVjnt7WsdCrHScBvvUTEgA3NfrLUvEHFTumh7fRmQNkA5328tZRJgCLZMrp86nkePohWkZSaZrJx",
  "key8": "41UxjqM1uTNnH19Gy6YnE1axZPV3GAj15nG3D7LnK4s6rPrJTq91UqqBeHN3ZqXcMdybgD23ZDkZzhTh6H3A8WE8",
  "key9": "UAuqZ3EP5wChBFrnRWBn8obijC68o9UEHbobKcZZFc8PMjzfhfP8LWp6FTuuM1g31jiRSnaVbqBDHT9qASooMsP",
  "key10": "3rJ3zHgaUzsXK9WDErmYMoD7MowHKmQ18SisWnLa8v37uhZvdh5iGqCx6sigwxRmttiDwRuQrc2ReQUKRW92agiy",
  "key11": "2pcUPmcEgnCDvMtD6UWiHoTTK7zS2fYCucmYVvMoXFN8NWY5DC9AeqA95qa1VHvvrGG88M43ms4VAwm4NvUGBrfp",
  "key12": "RAvmkXm7Sr6FLZUrm68ty8JmcwiuTdyhS9yktnPQEC8RUBvLRvy2VYSoxF88fVrftVPes4A7B2wKczeTD9LqwDb",
  "key13": "48eh6PVhMzzeHrRHgR3ZiA6Uux2qRT5Hdca8LDp4o9gKBidQrJz7W9gt1453jYaYxHrV44UWLxLAiyFKVLKQ288j",
  "key14": "2apnmAvMKYDQ6PYqrJ4efN974eNdVYFHAMLrW9qR1z6jrono72Ut5wU6uBnWGWjQcey1QAzLNnW6Sqh8ckzW3ztR",
  "key15": "3UUTWkxDSpghEST4hwpfMsuYqC2YwtWDJ2eVeZVCN2pwH3bbM61QsoXcXWsBgxoiwRMn8X5j9YXqRXbJDWvvAEag",
  "key16": "5wFQUP35KnYM5kYD4qyNM2HnTcLSLig7S8st2HxuwGfvQUiYQngmY9qAyQcf87vy3F3QntHJ8yPDAKfjiUkYARCh",
  "key17": "TFJnH6G5UpEnr5GFo3NWN1YHufL9J213Qe8egJEc4KzXACxWFZ6GHjxyvv82KkyijFnkjnp1QtmxonXmdJWCbRP",
  "key18": "rmAbKLbe5zdfezu3e9vzoPtShh7jrqMSRGrR8kQY7dAh7WB86gN9wq5cYqYvSKeUNsZCKTJqNkUSdqocrneLL7d",
  "key19": "4tH3nGZaUKPuAMBLruKykYDr13yDAKFeawwmgdh77ue8FJY7KGxRG1xZDY3ooov89Gre6QtH7PNzrWAAxinsNRNA",
  "key20": "67NSLH7Sd8kofqCG9Qh2JMQXQsx5v4KNAanBWfLDjHCe8BH8DAeNK2uEtipJ6mw2dR8pyy7PDFnbyUkSVDESTQTg",
  "key21": "44mYCDBiyYBGvrCAoDBjPsyQeBfyZ32mm9FSPd9itrjez9sgiut4xmYdx4LBPMa7Bd3ag3JtCFA26e9VUaUodHpd",
  "key22": "4FxZWvjEhiRqHwXm9LoJUVTLuoAdtj4pGmYC5LGR5H3Y2CnxwrB217gp472j9UcT7i47b8r5nf8zGLfFJEMLG5oe",
  "key23": "677DMz8dZkp9Mta8ajGxEXLP2sV2n3xoaJgyfMadAKUacEb2zdtiFW4MrmcK8FHyGXWvmUbHJT1DZD6bgURG3RTH",
  "key24": "PnzX3YQTA8gvRjbw7jLiYxDzUCWviS59WzGnYw2BYaSBa9MNJAHyBdQoMcxNhxCeYZWMvAi4DKPrShrZtLS6FD9",
  "key25": "27BFLceKt1EBRG1uro8VJ3o5xi5Z36hhsWGQ1rD7gts1v144uSrDxrbuQFviq3GYbAtD445Q5UEzvd7czMgvEjzz",
  "key26": "5QJh6TcPMwsDSP8aLJbBMXU7cmaPf27JcV5uUjJeajc7GWya1jz2k4UnpWSCJ9LhFswRRZMudtpCmCHWXJ47pGDT",
  "key27": "2J6kYHctPBzd1TvKKoJfUHBVQuFue3ajq1XgcVHcAv8w6zki9qL1me61PXZDfYw2KtRtAbSFY4PwuMXtEAPcn935",
  "key28": "2VrspRpNP5NJGQPSJtBAZVffFTuVn6UioyQ8J4fA12aD3SaL94tLRxWcExE6vVRo8z4dxm72vabhqKpB69gm2Z4u",
  "key29": "4VLHfBJTQq45pDgcWLFHYfRcD7yR5761D4pRiFNgv5rpBgxtPm9bsSx2ELTcJ7ws4DrU4fyHA9KfYdV1hQq76v3E",
  "key30": "3VVox9d6PSvCXCMigCTq7qhU5Mxy1dpMkfY5GXk42zAqBkoG8P5gy7xz9JwktdH8MUiEcffSFHiP33VhpitVYtfe",
  "key31": "37fQS3iFDGminJPobn72eaVa4VnNkbWtrTdDHngqG7PgeYwkU2HCeKnXyAFP5WSJwnt71mA5Y8j6fFkVsGKo3SRQ",
  "key32": "31fTTqD1FpwsrZ4m2s6iQsfmLHr7map6ZZ8Nwbk6LND43xp35Q88gCW2eWDUAW8WP11XDf5f4BeFLqgrrUhMo2D2",
  "key33": "2hzqvM7BN5jRdtktozg1N3K74jJFU5C4BrQ57A7qG5iCryMxb9qmC92VVt5Nm6NuVxx8tXVUhniUp6UY4GW4wJqG",
  "key34": "5SAKrVABJR6W9MpF1nZvBCVgzzfqxqX2HXwJpQAbspXAP3wzbzwnVoUfAvXed45sYRdASXTXsrffQNVY6dt2RQjU",
  "key35": "vUhpoQLUEULkHkNUCr4y6ktjMp98mv7snKuT2wBZBJvF4XGEABJv51a7izV6W52d2vDfoxuN6jqkjUTykAkPCxe",
  "key36": "2vGwNPxZ56Ubow8rzNnCJm2nnvYrKV7UyPjCo1MgvZ6gi1CKMKQkaHv1MSChFdFrqxrPeHEdPFXq4KhmaE4trjoa",
  "key37": "2yFJ3krXgi8TvtFETsmoPtmav4J79Kdb2Svg9JzhizhEwuzXxsZNHmGb4w99Ubjn3ZTKf6gc2oaUskUNnQkwXXJB",
  "key38": "5GVKN49awLB7nTYxJd71HcjEqoXmwYt5fbckTpSVKbzpi5doU4Eot1YUTBQsTGQ1g588Hz67PdfsTFGxy6TxACyD",
  "key39": "52hoFDyBDTa9sBZxAdie9a1SEQx6oVXxTfT6xAHLdqFTgntLk727QK4d2s7DY8EwG7fs1JucD6m5yy8tAJVuhxSj"
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
