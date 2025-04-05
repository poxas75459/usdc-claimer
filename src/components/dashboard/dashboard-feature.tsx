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
    "2XXqP9h1v7Yuv8E2wWdM5TjSDHR1hr1Dn7mErhpomS7K1hefGqZVuvnSNaScbhz2dhhifnJhZtmc33j6cbuedhre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8jzwZFuUtz5KR6qv9LQ9eacsVcgtQH6ZPamXhNUvDCbK2vY3U3NcmX2DaXzTtrpRNn3WjNbjzcPKD9YPYTxATv",
  "key1": "EpwAGC7qFpcGRzPhFjo5aErEC5Y5DgXuoEt9MQU94tKtLeo1jYJSxPgpc3ZsskNz84CS4CfeZ8RQuKDXX7xnpWD",
  "key2": "378Yiyg3gmcYTNssNt1Lg3Bo7SnjKrcYaFVq9tYGFJihqJavAwRUEbqTqNQmVTWxg24tc94G8yanpB5ZQDjsD1CD",
  "key3": "5PRbT2c82nbEXuhCponptC8ACMLUFzWnD2rzn3dok8DbwuaoYmowTu39bcxBQJCifatkVh7XqFPfqrJ1zkUG5B7P",
  "key4": "5YbMW1G9SRd4Yc3Paco4zbxkKccWrSNo93P7tQv5Sr3XmULzM4UmR5ZbKt8G6zMhFfvYJVUbKJR6FhWFk6KvzknY",
  "key5": "irkGdiXQMkQmNMSqnxrh5HY4rwThERczjF9hJ525HCVeVpaiMeaCY6vgvEBbiJbHXHpBP6hc9STXcXQGLfHwDsd",
  "key6": "2JKTT4yK1CYXt7NvVyvnzvLABM179ncmQGeRLXuMq939Fzpo4ocuL7k4qAEXFoSKNiQgfeUDnFsxqPZ5hjUexu1Z",
  "key7": "375Xxwp8B1yGtR8YWeH3RfFaXLDFugHuggwbo5TbWKw6TEjZVyNPg4yjKfx37BwFNbYfHehm5Xgzg1FENkFepbrt",
  "key8": "2S4KxMBJ5CidMPanAJusjNCN9M99SinYXMKe5xgt5TVJAMe1QbGqLLHnJSWVjYVPfUEPfqsg5Kp29GemJCvb54xB",
  "key9": "5EpHvgdWSpY3Aw7u6rtzTANh5iHBtBcnDKcb6yKqF9xQQ8NzfrDBQxf7bESYDFYczpT1oVE2zMsdbHnnGCX1hxtn",
  "key10": "2cgsA9WcUd689ZV1BgHidhHoga4S9TN82Wm1sR5pPhggJB8awRDKGkGYGzXbXRNzZd7TJdqMSuzDgi9w86NGYHM9",
  "key11": "5LqpT7SJLav9KvdDfmno885dA4siaM2EhsViJHousAWoKFGLkYy9SKUiNhmvKnEo6iBX3MJLToJHpjBjCxH5xLpL",
  "key12": "4zJcasQxnSyCGtpbCS1JetFZVwaMbJDLE88bPNVKoKe98FqvWMqx8v8ZsRQKt8ScDiFUUcgvH1jkxUFpfXyqPTBN",
  "key13": "487eKNHdF1i57gZjSgxSJ2nHXbSVeCfYpTsP6ZJBW8b2ByX4WAYkDSLqfDyCr8FpHSRQftjTxE4gbVJ1nQ64fV1w",
  "key14": "HXWbyPUqsnjVwF23T3cFuYAXHBQeK6GhKpW9tsQjnirx4717zJxgRJEn8y2tjDv2RRXeAonSPEUVEkB59k8DYdn",
  "key15": "5ept3Lfvd5TnWDAUMRetkKKgbNewNE8KnGtNyL5pBXKcwY5RErhJSP1CKZsUvQVHgb3coMsjbEWq45coRnsVuFRy",
  "key16": "i9GMfpXqfK3R3TPvydHbirBYyaMY8B2AzjyWAKzhU7aWtmZos9mV9zW8NNJr6G8NpL4BeouCRekS6hy7SzRsV1f",
  "key17": "2FLju7WPfmybx1STQzSTBhTTMUaqXc1hkCg3iRc8RMgs1FqkXk18xVWmFYgxLE7qhzWbgmegDkHbtyUQKymBfHWi",
  "key18": "2RvJGhCoeVFS9QjGEXqRosghQTf5LiECpeSasmQctHcy6BzLKFGU1FBD8MfjQvj7psTy35mzkk4eJCFuFXPfcZN2",
  "key19": "4HwmCm41V4UP6k8AzhcnL5k1G9JMdDPiGj7mBu7PUziZk15FtgDKUTKpB4733vQdAYRAnr7pE3NzNFoEbETK8R1W",
  "key20": "47RPgk3H2dFrWqPwh1a9ndY4AMFuCX6AcYKUTmNF1V2pPTpjdYmLkJxfULxR4Xxo1qVeXKFj1vHCLRU4ypqNvHAd",
  "key21": "5UqYpgj66fabqa7HczNPs7ZcbWdTwhQD4Jp3WP5BBFchd3jktrQNn3bGq7KQrrQocdyyKnhNvV9ipvqmRVBWQT8m",
  "key22": "2Y5J1LBPj76FvA5zajRikx1vMeHYQXbDWYhwt1q7Y9QjpmmwvRECdPBDCkaDVkaqjywfpkDhoxahPK9JR9QfjZqz",
  "key23": "3pJmkCsx48Ech7SF69heXKPCmSwSNXdCd2xFfZGVWMTEzGbpajQD1ekVa2qojTQXfEjDJeYW3e3E17Beo7dehp5p",
  "key24": "5F4HpBosz8S4L4paqxCbmWqkYqMfmDEXEAEMtEKx3x6Dgw9ZPgatVjjqdrXEvEXe74PoHVfP2TvzA7XqZWEw77CF",
  "key25": "BZkqJ8D3BrsKmhyoDn6SsPEE794tFBsf9Um3hVrH41qLXyKeopbNyfmpjHMDu2nZko3oJx4JfZUoYwTLAYoSdWZ",
  "key26": "62VVvvbfkyxsMrzvZYApYGA2UHZMhPbzXE4vBTXHoPvJTNPw3SegJ61TJHcep1atsRyWPJY238coBCsJzfBqpJuS",
  "key27": "66BdLK1cn87BtFkTv8w5ErChuf6fbNvs6QApEx5qhThjcZbU5wrx5RfDvrEU1thDyPFHErtpnhSs1HiG5j3YWGVt",
  "key28": "2JqYq5U65tHHzqNXZiWcwhJHvzo8XMjVYLrU2rJmQcMumQe6Zng9rJmfuGMyBy72tDeYHrrBz5fS3wzTx1CTAXvE"
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
