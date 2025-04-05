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
    "4URNtFyhgrFDE68sJfrbus6phXiGbXuhgpQKqcMsWfwv96geSYdQB4X4hUs9nBz1DAkBttLb7tpCR31hPydHtQbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZbhgY8EwY4CvfB4TbjiKkeE8CMZsBy997YgazHuDWHZ9hRYJkhHFXVGFRbknWesiKWZkFPPFFjr3iyP2ipqJc6",
  "key1": "5oD7898mfs37mbipzcWAzXSgCSLBSM2k8WcBEvH1aZoyYyp5mauk6WTE2mnGgyg35iHWsw5WptY331sJNFhLrCWb",
  "key2": "62A4L3nroQ7KaXLphpRnBHz74s2JH1pDYhq9C9b8MfETAC4bU64XYcAkXaFDAsK7EcsBP7BQ4bFtHoaJoPg1hf8Y",
  "key3": "47AHbNg8YoXuLwcBR1UrakL3BbK97NbpTpyAeXBvuQLYoLFr5DQ54BPkhvMLYJ95iJ5oYsjoJa4GzXSh3NBXhzWp",
  "key4": "4Ef3o47mRpxyWvJSSrMDyYfFQyHjVeSHeMQWmyrxfMwBoLguhdHck6Sp16yDF7gDzdBaPRDSaDqUfSMN46jQTkkL",
  "key5": "4cxfqNzPuJYnojCHs2xDfXpCrkjUWQ3URRyq2T9uZDij9WFyQDkvNykTvHWaj9uyHfhQin7MkvN1PinbJZY36UE5",
  "key6": "Kc6uVNCM9Vyve1bGC4TaRWHqiDx9HnRKGbQgv3CfgyRnfjDtHicxUqejFMgGuehVvqBtxWNnaWe6s3MS9ZvGeVp",
  "key7": "49F93DWQmTaAVfQVRFX3PadbrAiS13A1wDtf6ySzPhTVdvL7bm8PqFcKavCh73JsquFdUq8JZYzs1HjNc3UfkZ23",
  "key8": "4YCGfdxyiqAG3h6mKiaXi6CjvTGjZsdXGXYvN1BB99AsNHyMJfCWfEiDenuZtGTEBUYS7b5qDuwgfv9yqxR3dgce",
  "key9": "59Syw2RJLLmMi5CHpevksQEtACJoFuuyTKYaKrj7fsDhECpGdGrUNF6BnNUNZATFEuRHajnwdHmYqM177QZEvRMW",
  "key10": "2B3xiRo3KRMUSaQKiFqeKg4w2zspgJGcB7i9A4kQ2QjuoURHpsycU1inrC7iuYiEsM75jwSbUbK2dm6f2MJ19mnC",
  "key11": "39vwDPLym6S7oXmT6M5c1HRu2QA94BpLwBNvBDcVFLNCyb79rn75fWQ8ntt7MLjoFVzbDGT2C2wXKV3KXkxquUqH",
  "key12": "4K5zxZavmD8B8R9WcQf1BKGV6d9i8bzVKuJECFHLe68tLw6rzBiDVwPUAYtEM8VJeeFnTHpkmwTpEu1dvBzdimK5",
  "key13": "TxC611zQs3UhDGrbmCNMPytfbb5A9WjYNdV4LeZxi8qCg4eyZbcFKcnrQfx3Ac2smhoDEZFkuTFgW3TDdbtasgB",
  "key14": "4YsyFeUxtmhy9y86pfBTGve97cezdXHHKSBzhp6AoD4yuuzAjiZuAqCE7YAV1nPW2qN4zAoqZoim85sdHvrTAGqa",
  "key15": "u39zm1NZ2xAxJbcFSk7ZonEXsxAEdrZiQqknd3tjtqMPptczfRVBLqoxiXw1sZyouiHpZLsiaz6pVNekvBweEjH",
  "key16": "Y1sCvNdDZraaPZDyH3nedds9nTTE4bjoK66npPBZBtuUKGvMrLndAXwGNnR28r3eriTAhmuMAKQvFmY6w8qL2sY",
  "key17": "Ljzh8TN2J2SFoaEYcwh9ZjtVEMUWqej1mJXqh97htPyWajvmtu5dup9JU9X8UiFsBD4Kp1jcGYRyGEU9rkjS5qV",
  "key18": "nqtKRq2W5wqBw8RWNyo9jg34kBZNcr2fWCyPVFyrvE3THZU3qB7nBwhisnSUhSMa3YTbyNYSYTxF4xmngp7u58p",
  "key19": "HxuZmGG3aFSwUqC8KgzD9KCjhXJaCDsB3FT9GR1sZX8qErnULj7iyQGfjuF9N5TKruJTnjeLY9w4GmSEVBUVjrx",
  "key20": "EoZCrsgzpq9MCFx9MjpJrfnTo4yrnj9Y1fKNFo9eYcJ2EbmMqudTw1BqGFb41jTP5aJpEc1BVYTmQELPzMmK21D",
  "key21": "TMZxAA6JAAXXsS9tKuDjzbvikNXs9LrFdKwrzV2iuSXHVXSi8kgxTf8gpwH5LWDHg1qzL2EdpjFmsGHS4apmxjo",
  "key22": "2Q4XNNzsY7w6yGRhbpbUgcz78PcenWt8hHtPXKQTrwRBM3dN7XcLN7ckgXaGjHhLgZFVTPWQ9FtBRVMsURbhVTmA",
  "key23": "R63q1FbYmcXnDR78KLra6FigeDjxfJdcgCTHNm2Ly1wXGEvcn8T7hLnDdrJs7b7B2d5sm6BHwLw1inKfeenUhr3",
  "key24": "38wH4fCpwSv4aGEthizFCAx7ir69HNnBrk79BupHEstH3JRgZ6Jd7LMSjoUGp3oA6eCYH9anwjpVawuPKFWimsSU",
  "key25": "WHGNJKZACtvGGUuEXYerVefokMKb1AXwM737abEYpmGchon8pYPStqZgDvVttkDdQW6T17sFXEhCZX8zDZRifwi",
  "key26": "31wyWYbzSpZmuHrRiQkXP2W1KtuQExr2DnXYRhkAfcm9HCSq9mchJ6szeuNd5q6wbS2KjxFVbP4LcaMomXyGoZC8",
  "key27": "vGu3WAca7LineY79bcaK4iSSYbHfEwLWbjzwuG7bTVbuCbUN46y1qtj2WnHq3r1XhfSzJFj3PoDeWYbofESB1iK",
  "key28": "4fnBtzuzs85demNkyWmxkxA6mKnptpnUM9Q2NEYzAJ8kfhbzhsxgduFgNjU7qVN2QyitBfcE1xiBY6y5d7ygmSC6",
  "key29": "5KDpQp66aNWkQfVWgGeXyxDQCwnGnKDVjPsmNzqy8JYpUoEEyJEwvnpbKTE5MLDTJAbwJ6gK6XwShuhRD7FT5zWj",
  "key30": "4JyjegzoiHKmzQdNB5wYQca11RyCXJyEA3Qry29rHeRvJ8ztKAi6cdoxkrG7dEZHTHQJwchbaWEJUa7JdHeaphiZ",
  "key31": "3xvEidYDznevTvfpq2KRwkWo62kAKurRhTS3P18qNSp89NapWVZ74NKKSqdMAgCVuJiURSJYEDAfT1RXxsWUzmJF",
  "key32": "5dNgvF1rVJNzddPxHEopWFezcRpQTmc1wSoXbQov9Nu1r313B2UWaacynQXtQ6LYMM8hGuxeGwEnV9xMuWsPVxv8",
  "key33": "4bMFgbZgLAkVi7dzKeJM47M5nGxbtwJSj5JGcEjMUUmhenMEWhuvmigHudxNiacBy562xT2RdtvQMLhVWbVRoHtY",
  "key34": "4hRfTsDsNqctenNPNi31SWHgNdiu9U1NPgVb4nxLMCArPwoBFA7GgkrtSaMzFGyur17JNQwR4NwxhF3wckouqLmA",
  "key35": "fncZLwyVkXQCBdb7i5kySghUN7iuSRyzkg9y1vpVdk6Wt4GUdC3XRCSoiftCSLVm6kB1B4NaWtswBrkVkP5Npi6",
  "key36": "2X7JhV2RRnjXSYoghb65R729ayX4UPDgCYMVQLTr11ABVfGoPWPYS27zyLv4ziqpJ8tcZTLhJZtQKVYaQf9HnYbw",
  "key37": "32AZbSTd35kNYXsy4na6QegWMTm32BeqxVvMjAq9C1kbVC9SYrTaWeVTnbV4S4oex1U34gosAAGA6hCPFZSYQny8",
  "key38": "ZBfnMyHnxUTYBK4tSH69VWp1Ap4ExNzX3AG59AzBXvBcvxmLqj9RRgfcup5tqSKd6fWnxSdu1vBkvCmusmGMYct",
  "key39": "UhgfYeJ1Av2VFLkTHavCMcia9pTuugbijUsXhV9AsZS6LefP8y1AJnPHTr4K3S6LjXK6G6rcrjW3C2J6dhexEEU",
  "key40": "2ncNNrewFSLdF35kuoMUDpmTc97DTdwWhbJde3L3BTgQUvxmZ58e8BegmMvgn3mRdytWTtx48Y21qNPaRAMVZ9b2",
  "key41": "4DrVsJAvRNB4W2t2oDR5c34X2fKQWcYme5RHWfVXjLZxoP1P1MqwBZ3ZBqGeGYTWZzELuNTVBKzg1dTqEAJDu6GH",
  "key42": "5uEfz8xdA9fAhmt2mroFhfRGdz9eyfBWXA4ANjQ2AmcqohRjWMEA1dq6rrNTp9umtNZXTNhgB1NNCDRpnJUu1hUH",
  "key43": "4ikZWWChKE2SKQBaQTt7TgSi16VewU3NK8ugsttycm4e4eKXNdr8TBqfQ1KcdwedJz59o14PQhM2MVUd9jcQHwAg",
  "key44": "2pCSx6ka9tsQ44Q3sQGtdQkFmiJpSY689rog34XKA5DywW4VLoiRtNskX23AvoPpJ2ActuEAQgAxfQQaUZXPVusu"
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
