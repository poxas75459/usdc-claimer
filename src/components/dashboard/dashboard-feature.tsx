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
    "2dGA6nKWcpHTjgCMadYx8qDmbxCD6o6BtjypPWKnyWDJaPLbQB94EYfBdHgHfg68TAXG3THXHET1M26gSmjybxqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MM6WKrBnWNiK5woVYJDfwB1LAAbm7w7D8twaYYunn16mgscBrqa4KrWbRKuG53ooDybgwEgseBWuhM3onuErMLr",
  "key1": "2q1tNJexDTxUaNKvHR4H31BgUeHMtHDdnAFhrKRKJRNDvF1JxZwMBRgT3Lhc5egxvVdbKA1cr2Zqd9JyR4dcSLv6",
  "key2": "BeV5L3Ly7gRoHBi9K1PDqqB3ZAxBMB77MbyYv5V1LmFxTKVyXkD6FHyKZBuhrHEYyGAuSzYsUj2QQZgjUkpTrUf",
  "key3": "2cNbMF6NdM942v8kizXZpxiE974tPh9UC82aPd86Dds53aGEurtQnqSHJJTfg8H6qMAGmKMeKMqGsC2ygz3e7WVJ",
  "key4": "3pUqmdbR4KKpuXDupB6vwhXQfxtG3sW88F2HKDMKUvks4jruRj7heqdqL3CrNzfbuSvAS3LjDRLQTQXRiV4TwgB3",
  "key5": "4LYxcLtaU2484A7QmNNTCSE9m7uesEwZcrpqe7YBtuq1mgivCHF5rRwnMafjK35aPGYRji2B9Qo7msDtwFTKCJcq",
  "key6": "4HETRwjr7b9jLez2G9eNyN3CZwwdLKqGVUUcmHZ6PthqbEYVNS8eRLLgeP2HydVys8bzphs1uRA6dYrb16KBeGHH",
  "key7": "3nASZntGy89RHr5zuw23BPDXU4U8kFnp3g5wK2FqMVRbtYYs2xA54S2AgufL3DCY1L8Zy7Q3e3YX1cH8JxQx79WK",
  "key8": "3ip9RVRQLoSbMLzJNNVvLvhRAG68Xw6CLUy1dKN5gs2wvEmMPriQjTwu6KfFPmowQaFyoZnX79eKeNQW5iyAg2bW",
  "key9": "65kv5rNw4gwhGU1gDUaoyJZJBwxRXD9AodzHCc5BALfU2889yFBQpC1R2cebNAsNGJZZ8hR9ePKeTtHyp9pn3sKD",
  "key10": "3RA2yeZtdk4qzc6ZeKTJ3ft1cnKs3iCYKqXYGY28UaUZjpVjW5MpA8utMLxi7uCsBYRCGTEn3YhsrRT6wKzqUxjh",
  "key11": "4kWTGZA2pPW6i5n485wHMVTajDfDo47Ap5cpWfWnGyVe1Syr9boE72hAYuSyWj8QEesC4T4E3DKvFPgNdJrj57xZ",
  "key12": "ptMXMRrQPFbFibDYnYBwQFdzwdW3ToFfdCmq1tMSADMpm5jT2HVDwu9X5s2jUiexyWivYRbvdShc3qjmq2awMiD",
  "key13": "2qeRtVVUnFSKXREtRjGS2dcg7fk5nvX7wY5FXN7opRCXC3FVN81sKNshFNTj86DV6PhhjSoxwWhEMk1szE6gY1mu",
  "key14": "3QUxU7fePb6X7YhBn5vvTfrkREP4UNhv5yRk5K22RmubiY31CqEjmNHBiYPHe7wkUjZhctGiHNhKu6KwhEVWxZit",
  "key15": "RLo1tyssCUeQT2aZfctTHyaE9R7BS3exFQsFwbzxQfUJAs6FDqZSjaBrs8YT7tmDh7NpfpZg6mwcQd2b8nxEamG",
  "key16": "4QKYkkxERBwCfWFK2WVkxdrEoTtk9Qj5qNyXitfgHSsNZXNZoaZ8z9d7y2mdYjRW2JCDA7m6norye32m8g6R4LhK",
  "key17": "3e2WegFnQEFTPoRK2jEWbspUQnexeRwyUoWQM7kRHpA4jWArjSuT1pBJ1B8cV5kEpVt7nWuvgHVso2pX36nkfEWT",
  "key18": "3hSqDkiUW35fwkESbpE4Aupssv5qWw5PfDCJp9cTQY3GzXcNdH58xNgTPgDnsTZ5zfH4VepaQhy1Ffyhuon2QdPw",
  "key19": "4v64QsuMiqsojw8UYMTNz9x4dAd1mAAGZyKkSd5oQaEUR7oKYBxQyrEeDaAuXC6Nppcu4Y9qC6T5mU2Jx5m9PiqY",
  "key20": "3gQkcK3K3e8zHXD1kr7FM82Bxd5sMJPSEHwDhryow9vLWn2YdKLEAo9VZy47Bfj31tHcnCcN8uJ29kwt2fCFHKN2",
  "key21": "5CQDnk8mwCFnfq68oooBTjeDj2fz9vn3Gt8jziAceUsSypet6gNRkapJfeEYFmwkarukQA2rZPHqnVWF3VhsJyN3",
  "key22": "24mwfELVkNwXZmKLLGroi52qM5QrVtSzQ4J5JJ1NTsBB4G5DrExT7zeQgu8WXQrLbf8Xtuwv3mfidwGjTku6MkXn",
  "key23": "2RX5UATkmQRztwbULVPqTWVeYyuWnE2HSoAsDjpJGmRnHzy3YHTxFpnFaNe4i7y18aBznfgtR9pWCzGjYV9LpiiW",
  "key24": "5ja1pmRq111Kepmh31nqHvzxqJ5zSrradyhUSgECEB1sSGnz7gTcXmTW6udq7XpaYcuSKvZwHqYXD7jLVwdrM5pj",
  "key25": "3CBmZfbiUjFYhXL6eCW2SpJTXGhCMudFmQLGStcqTuxL5gx3uQHsGQzcMNEr3442XHdciKug3iURTYD3km4D6dCU",
  "key26": "2XuKFtjAD59ZeNH5sCweQ7wjVE9LskFE2gXTxGRBpWaNKu6wGuTHoZ32r1sU39UCxeu7QbULNaReavJk945ccvQo",
  "key27": "3nr4F19cJ9qxgUgZdVHUnrPxF3H2YYUhukGgsN8kWWs2BygxBTjv1FX5wF3tHmPsWgbQfEuFxFnjvxLVo1YSfPqF",
  "key28": "2iP8ECzcWGeqATH5e9BTS4ehzM4fu9thKsug9tVjdd3W2A7Z8nZYUu8GHP653g8jSNn9KVV3674rcwWijRNHo1tJ",
  "key29": "2RBtbmV5g5czuCwFVLB7yb2fQBZjaTYwx1JwU86zL5MQeFrzkJaDV6wdCcUR3GZvqeR3xLHNgzVhgwcksBRKrzWq",
  "key30": "4WwrG9duGVomw39yDvPZdGWUnKz4hzszx3Qv24fvRKta8WZ8anYdjkAcU2U9MvmjSt5hwNHJjigJhmGvaxNREfUZ",
  "key31": "3he9T8qoriZn33GEu9wqAJ2SCvGPEfQLgr4zedmyViu7YemL7vk2ow7Z8R4UFCSL7cTLD3PmgYMvjyypBdZsgCzS",
  "key32": "AHJmBkyWUF2HbxpHyyueDuA1inA4vheRBdGLRNKsgfXHH8HotSNhVzXAPc3tw24VkBwJXS4KYFY1GKEuq9egpAp",
  "key33": "TjrZ9Mv4H94uNBanbkJs2ZzwPvRrHC7uMBTMF3VDGoA1u4tUYFS4bznuZxjVbbdCzBJQ1nwids8wJ7CXseA4eHa"
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
