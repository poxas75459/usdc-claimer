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
    "5q5PSTrtcCJ8dZAGYQKTwFB6QeBvZMEA6WnnvYhR5iUYV18CjqvLM96eCxyrbFcpWtQvx5gzXg4JTY75SEVUBk1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bg5H5TDJfJPXm3AE3Vvmj3MoEBi7KubUxHbo3SsZNbAEF5di6PvpoVsB2ysTc15jcHKft58aHb2Uw9upuUZPLai",
  "key1": "4YUfscZNbCtjRfuR345nrDSPUHFi2jDkuBnhLzDPejoN1a7HbZXriFRzmj71RtSvJriGuc23sRnj7ALnPbbR59QG",
  "key2": "uwjoKFtKTwWs3zJTnicBv5ogZXZidGGZkHNK3w4TKs2U7RG4ZS1p9jd3da5xauRZRwkUvuN2hE6VP18hSRPnwjX",
  "key3": "MQtNVA2Aibb7aqmks8EAqSyDD4C1hpehQnd4pQBvVHKChLe3oqbqiq5bpp1ydmwfcpCRCvBnekFYEgbnCu8PZ3j",
  "key4": "bS9KrLUrWDejaXB8sJJoigN3jbFUbJ3pJhnmYsne4zeK394mXp22ahcp2p9G9Rw2cUg5j6RwKVzXajfhjBS2aKj",
  "key5": "h16b9tAU1gMPCXjzMkz3j9nBbFxvRGSa3EDH25PJAFYdb3QRWVzMMTYmmKcs4iPsi8e8CQQwfxcY8CcE2AUbQuC",
  "key6": "37ZpWxCkS37nTueFpStk7MRtJkFhZcp9fGTAehE5uiaTwSMn29m5wcCjigwqFxttHBuXFxBGBdjyyqw7tsYGZH2w",
  "key7": "sHeZVgwuKwqBZPcp8frWQiwDNLuPJQNz9PoMCNFj9TjQMoj96wRd6KtKCrJWHmGQNxWYqLxJhBAsVaJeutcpjRj",
  "key8": "4juJuyXZnQdMqqXfAdLdcdCFub6XFp4BjSp8yEsPPcsYvuDhrQqmnn6y1QgYppvKaDJrQmCeWu2ASvbmMUosvafH",
  "key9": "D5GS81eK6tegUzfY5wiExHa2gwedtt3WpawnSiQrJiCSGcQhJ9TNWFCPewamoSDarhZ46tkPB1igoD2pnNq8BXX",
  "key10": "FqqJET29MEhEP1LKd145N5VxkaBwz7yVd6sbjqxA3dS6toGKQKQnRyfA9ptWNaPQYtyVTHajW64okkJomiHjpQd",
  "key11": "4EPu5y4ZrNYorzqLhaPbfupifAoU1aBLjPYbpspvdzPFBiKbyavUWZhbSHtq1RrXp8Yq5Tj8RNFD7vHhmfMQVGNi",
  "key12": "5EqWXC5XuveQtLSyScShghwHNkiJpNDkLzQeCQpgRN1Uceto59QiN4nHLu5dvFjNyCKWmXdNWAwjwRSLgKirUinN",
  "key13": "2jqk18LbYQdZ1xBouJLBYU14PhKB2Aa1mnSWBvKfK18zYzCPkCsiAjia4zYSQfBjSt1w9qvbdazArwgh3Naxc22j",
  "key14": "3sGGuBFnKKnGw5nvnVccHp5hmaE8xwufkU8HciGCWVP2Jit469y6wfM3EHKnfEnJ6Mn7c1mUzAnPCTHGB2hx5ePy",
  "key15": "5hmEL1u6u9oREoKvqT4VSSXwjjzUU1mVdK38MyuFE5E6PnEYq1R5masA5NG3F7GBgL6v9pNdc8eaqjQpgAW9WFgu",
  "key16": "4qtvKgGHNKfAKVMDJVZhabJrBdpXhd8GYnbW9H35NqhxFmffxuYTeAnz3WTfSDBCTpoF5tGjojNg4vYR1cHX2dda",
  "key17": "5msTRTKgZig19mS3fbuuFRepW8dEXVf9R5zoCZeNLfK7HtCixzPYcp7YiKuL6N7R61kPUqMYkhuN2SN1WWLVsDtA",
  "key18": "4pfJkJCCbAZezS5H5xwf62zgYFHodFLkFXD4AgdZNf1EuYuJxMNjjDxS7ng3ju8Y9bTXe7W1uhHpxWi9XKVme2i4",
  "key19": "3PDCuEH28FDLTi5XU4MaeVBojPRvcP7kbBbB9bUwX2QjjDxrj8Fb56Xuu31X1MifNGtDKzEQfrbycMBY7oiTTGtC",
  "key20": "5rQosTxZJXowLxpvkEGtYj5mQ7U5CbASzjecEYv4uGXz3oh4LPW1znymfkRjEJkMpmyUEREZrSLztUToUZGB8u4W",
  "key21": "5MyoLqNVeR4Ao221byTWkYLm9q1cqvuf1swKDJc8K5nJ6U8Wn9VKqkxgP6qsw7iu6fY1rZ5uvnRxfX45hLuVFpDs",
  "key22": "21DjcqLNW1CUFtALHswchjt2xGQ941M9XgVEpQYLng32Gjwz6821uKdY7dPbdCjx29cmQ388d2GMdyom53Vhs7L9",
  "key23": "2x2gWdQU3ZfHs6aVNoa5zcZGEwaLHq5VRSuqK39SkQNXELkxXVM2mMS6uzPMWzHLcNo5VetzmDoQAeBqjcHf9hFp",
  "key24": "27eJPq3VwbVBC2KbSDmSmgdYjfFnuwH1LCzWVUZk3zY2MDtHVoAFebBDDoKajo26xDH3jUNve6WoKVpb5Vbysox5",
  "key25": "4X5RFAThTuk5mGtV3pcwY22YJ4GRTWqRZkdUbP15p4j3TV5t6yuXhpa6vUjkNhPDCcvkNKe7HrUSkQa9BvM5LTmx",
  "key26": "66dJdm88MqekF7X6x2Tf5EDP9UH7F796z5zfg92qnfMs9QqkhbhN6GT3HpPvay7qPecJiNh8d1jrQ8Dz6s4ktfx7",
  "key27": "3hA8EkXH4RZEbWWwR76dJcxokusBpoMoRhtNGVGMNFT13nBYLnVXRRL4SguUTWEH5UxGwe7BTdpc54nd6rLvNx7M",
  "key28": "2YbdAahQCWGSWBW26QxGdN5vFzGtzCK1jpMHMyXz2LjDGyCB3mR2ym3uCY5VV1UUkGVnRQR18PtCXrZgLCpQbRcg",
  "key29": "4HJ9kswgedHQR4yubmrt9gwpfysTz9ATVeHGJcsVf9Dyq4PKdPEX7byvb5jCYLGZEbP6EQHbZvpoZveSzrDiJcFh",
  "key30": "dYXZCT6zNBjbTybAH931rDUTgZjyiTBdqiVc2S6NNspFSK2Q4Ez6pfnXzh3UmpDXp8nGX5TGnXnBzVmGzd8deZg",
  "key31": "36D4yxeh7PunLjZ46sHfoetDpMYwu4ezfpY3HkcCibgAMtmTMmufTj7vKohGpTE6sgL5SpXtBc1M7XkLqtgdh2ka"
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
