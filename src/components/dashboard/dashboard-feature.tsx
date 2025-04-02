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
    "5uWjSXsMZM2kkMGBt7ctMajdnc2TEy7fnL9ikSoNF5pFzG9GHNWJREKL9bWKEBr44qzRPv9sATjmQRuAgLBfBG83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vvtq2xyjzbYdBzQqbi9NhJNAmxsfouATaHu76Db3Gr5yxoneRf7Atmm3zqTfjgyddopqo44XLPAikNY5w75ZiDz",
  "key1": "2s5txEU9wx6sXetsEQhevppoch9CmiddaoYoWJE7hjf9Dk5BgKF8YtrCYZubYkUq8GNXe9XZgE9aeY4Ry5Bj1g9N",
  "key2": "2LMY1oTaC5C9huevrny4J9eC45KbrKdGQLM85Nm4CvazmVvRu4ScDMVrqYghp3AcDSmifJn4pBWzFXJo4bqQ4z3G",
  "key3": "45Y3WhFozZimSbM5xhEjSXAvzKfWAwV2YTdaa1VRCQaM5LL7WJF2vZXAQfXz1w9GY3cTu6QE6KzXDpkruix2fBQB",
  "key4": "32KPJ4ajUrVVjYXHYT2WTSRSfkZfGQVew85hEyWJS7pzezPqUinLBJDtQsizPrj7knaUDiEP4eerK3YLTpf2m3LN",
  "key5": "2iAtZSanzKAmG1T7TogNJocvZ9te8bPM5TQCosVSSJQmVSjpyS3UFc8wyJwaWev1hTvSeyh8u5Xamx3HYpRCUUsf",
  "key6": "62nxWYb2agaNUpK8ffdkZMdhGzai6q1GM5wqiaVpJxXxUfj93QUC1h6toVddNcnMjDnvWo5KDyszt6LUhwCLNazz",
  "key7": "4boa9UEzvTCF1GXnQtcrhyAPGKpTfcRt6t9D67VL9zWXSMhRjayDPkS4yQp5dneib2U2hTNpj3xCTRcEdFfiFeUr",
  "key8": "3hxwGt7gcdM33fEGJVxCNTosy6cAJFyZqCrmH4jYrJBtw7JvBV5oMiBVwz2rfXo3tWQSgk61n31MQ3zNC68yY7yi",
  "key9": "5817dHgtxM1VFhtLqUP7dVXtqiTPtFAonvcWaF4farYUxNtvNvCQwJ1eGqDvFy1Rt6AHn1sNYJrMp6V25PMHPMCZ",
  "key10": "4AwzE6QAt92toGGqZo6rYhbCEUFWH4ZgkQ3PtfkSDDBbXcMkU7dVVSvQYyqU1zY5ucAaeAjra1zoQwD7npgBHwJK",
  "key11": "412DCamCeZ5rFfVDzpJqaszsFDcp2nJWTp7HhKfJeWTjn7SvKHYRotPCJ9mQw5YjL2eoPfcnQBN97MRWjZr8c7W5",
  "key12": "2WVBUFB55JvJEyUCjUGdPMw7wr9hWVnEMYKGBEJmf2Zeps8MrZZpgCpvZjLr6snMfVcpmniDE8Tg1oVhWBwBFaVt",
  "key13": "3oo9JgKvrnU8sEXZn3bcD9q2jH1zJaZTm2w5qs7FUF84KquoYuJLCkJPjNWyntzYAxM8agrprX5A8Kvbnew3D1mJ",
  "key14": "5g5FZyFAgMiN1U6GsBRp7FeoAzYuU5dwh2Fid1kh4Q6VLhnYpYBMBVgh9k9B3ichpJ3srtysnsKMQqfLHfCMmQ1a",
  "key15": "3jYjWgCVmRo7hyjSZCUL2fXRraU2SNiE9vhpEtkf8W7pgLrrSgcWwDpfxgQbsjyEomL4iodzfJiUM6joECsDUn9h",
  "key16": "4wmuC1sNpGthfspHGsCfzCV4c7xYNcegNTT68HVREpX5kfP1CVuMDNEcEKTYGy6tY9nHycqcqBTuzmw2WqNk6yBr",
  "key17": "57MrkpW1ymGGrh7njpmwTF3wA2PSkenhYmWrU7NoQgrTzoqpFLeLjhMco3ekRk9dQYYu4vWZFJsdaQjX1B3Ee4Ke",
  "key18": "2AvtAzSVz4bnDVNmZ8BWff1NFLDuuQaEi3K85xG3AKGmFQB5J37Tm7Hu2ntDyY3p6sZUMgBhf6hGg9SdfyJLf6jB",
  "key19": "3o17szg93FJagnxbFm5ojbsbBm3VcHx9vVRB9SvaDyXEgbgzMHQGyrQtFSvW7QHY3a8PfVaaEgAPDo55XCHEHcHN",
  "key20": "4fZTfSh6ub5wDBXxbQWaYcUD4XScWfVrM1gJs3UUUTP4esW9jygp1eFbwQQi4ufwyxgCin6RiauMiGgs17nNyMXa",
  "key21": "3nb3v3y8w5fo8ceficuY91YHzLX6GYXdrXGAF55KHBwqVmm5Tg8jZhatHtby8Czwo7dTf2u4c1aZjHpbs6qkkdTa",
  "key22": "44LYE8vcKwxSJi1JB4yKosDDpZPY8PbCH6dDpXE1mixgQ6hgVuJQ55VE3wgV5HjfRWHGPPX4k3qhGPW5boyRoCPY",
  "key23": "4smefkw22i4cQ7VhC7Syp6QW9yrCmy452qxossJMCBopihktHcsrAuweiHhoFuJiB26YNN29H4mJqVR6vAPsQDj7",
  "key24": "5t5LGZVEumpH3gBiniatLZARu8Q1hjwBTVJQseY16GNxk7oAXSDXLkT75NUXr5QwJFaiaZ9xsGTQXRMvrsgqfuui",
  "key25": "2V8rbFR4DeD1EopHye9dBN9No4VZWmy1gtr8MWcYKJZnWnc31bDtSvJTuYFNQ9gpVzwV7SKBYtmEeamrEEtzupZ5",
  "key26": "2yUe7yXXioQKj4asDbxoKcryhaQgdQQ7ASy9UGzWPGDhxsVoLMruDFVgKJfSNUwxysshGFFzwnKQiYM6MXVJqYV7",
  "key27": "3XmoekzikMiHTEgX3m2TFk5pbQhqo5wCkn3BaHCZQsd3ygG6WUbR9Ujy15LGZEmiix5JXWgZM84KjjDVtqRNgZgk",
  "key28": "raZDAAQLxstmHvgDPocbuvTK6QD2PGEfrAEM6WmsyeFJrwDoR6wNDd6iCVd31wyLA51xggvbrdBcfcTMe4vjJ4M",
  "key29": "5u8brQRD5wFdrZvGfLqTTzTHg2ckoXsFwmYNT17AKijfU654hX3qv67VQJaTpyhMQWdo4sSr7g12bsQDU6UVf7NJ",
  "key30": "4SPm7VAsax5H41DeHJDtPWwi3V9sQ2m3ryubcTsCtRqyhJ5xBLLHLenMjdfr97obnrwvweK7Qy2YLKep41k3kSX3",
  "key31": "4fESSpAGaTKk7PBTD57GMxXa9J4UqVTF6p5u9k9sLCkriJD58vzG9AnGqwRHcHpcccnUaJ9sEydBBQLsBeGkb3dJ",
  "key32": "3uJ7YeEXdbpocyghRFkjjhrU7Su1X7N6TAP6PGvyuDxKuh8L6X1kLYeYpeLWFESwvfmLUtCeiZzoDzY68RaiN9J1",
  "key33": "5CRb4Gu1FmYKisK44VgQqDTjikwXX2aCeeTfX8MKztBuEeMwEhv34p2eSTFuE4YmJ1NMBZAv4cYQ6v1yBeaoFjo2",
  "key34": "5dyA4xcskJbzVWEW4eT3XVvbmXKvAVjNJ8NM8Revmfs9g8sc4dkhmkFYNaWEfN5cNvt3DXAkm8hX1gdDFsQ5vzdN",
  "key35": "2aQUMxAHjRuXWLGMmjq9EWJxCYvwFLNojFRDZEJ1jTfMAf7Af1CJU9gdy1o49UbaixZUWUjR6AQ75CmHg8Q3mAmH",
  "key36": "4TxU3eLG45VvHisMwEnBFjQLvyrRAz3C2doGePYaNDK6SPvVsyfudYyKd1wrQbXorgF5uqZPHVkrBJ72jCpGUyh1",
  "key37": "3pamZDWN67gbJ9G5tHNXKxpy44cYn7FejUad5WknXMWoaPtiH8bBiU18aMzpCN51w1KgnGTyQbV4gJfJwFcP6rTP",
  "key38": "5S5uTJPFh1yY173HUyp5c843VDBvpT389HPsN3KxyKhfQ5uM49nNErPD5XzyKtxDtLmhNLxLWyri965QtKqc6AAN",
  "key39": "4DTj8kSaQjiBd2ze4ajfxYzh3PhVRHEZ2q9yXDZTR1PuGy9HpFCcYCR4vm33qCbUvh5wZLHvR21rbsreL7nQqLLN"
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
