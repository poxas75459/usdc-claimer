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
    "49wQbtf7P6UDeGe2a772VvXE4smWY74fzZqzg4e1dWcGcGGkEaevvdyCzYiMaaZbTGp3G9ov5BtHALcrowjQVba2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TANeJoCo6i7NvoDWt4hMyWsLsQJCaGZEWd3QrfinKfZtoRXUDhsEwu1tH1BvQUBeWg6sZaTdWdysyriXHf977nc",
  "key1": "36YNUQ38Xf5QY2Uc5ePqXhpvtuY4S6BHqjaeyNnFLrDxq6gWNBTZT8EK6YRRSRfvxbyVDhzRT4L4PSHRMz9YbVA3",
  "key2": "2tg2XoLsAsmRKcztL3kg5CEqdkxaSCwzt9vdqnqzMCB8Qzgo6coi3EHfmZa1xQp2tqBcgtpVBCFfw6v7Mcov6EB3",
  "key3": "qKGhUgQEdFzKXBrc16bRqrQjRo4oHmbTMiDDhAbZySuWuXs5UpbGEeKbi4oGgaE7FmYg4rpoqKVpYPcUGiezzvU",
  "key4": "41LgYjkfyDMHRm9tAwEpSjhGqi5etk6xyCYQ5MXexMdCwEzJpynBooNwzbzNM6ja7EY7qnp6jm9mxuyY69MYVJd2",
  "key5": "3nThWyNC7cScbLr2K45im5LxgaxbP7q5eiFACiC5jLZzBT7EtEZgfG735apeV1ZCS385tV2r9Lu4669ZzaJy3E5X",
  "key6": "3hBAahDKgHXdVJXg6CFGTgj65fZsmTA5WyfJeTVn12vfp6yjqRXvmh6vPQKJ2gDzKBrG1vpVYnax1gVD296PSjEa",
  "key7": "xndJcjyELpWKria9yb1EiGqffgQmAiWwF9hTu24ckHdXoo9Rm9ib1xxhsB2UAbXxLqY6JXUW313z1YEhUpUYA1h",
  "key8": "4WTtQUpd1S6X4i7WT7kfsJEQp2Uidxd5iA1uqJx985mpjntR9GW9tEC2a9T6vk7Us7UukGJ3sMQo21a2bfghZWNi",
  "key9": "5szAsW4516ReE2SB6iNBn5sUWwDDRRcjdos6fK9eeM9VdKa225cN6zFiBiz2LLH3JKJtPapyjNBVJS5aLn8HkqKM",
  "key10": "v94m1ujS1ycLPPc5HbZCtYq4GiVegA5a1sMCBvNyDfHukKDNRYoF7cUHj9w8DPd6cG6U7fyfDZUzFG5zpHeSkgC",
  "key11": "mRgirM1JkyaRNDNdmVYGhR5JshqZudxTRYKTfWVpK2S1Vjmz5vCb8TYGXWFhC3hJobtAN5X8eMrEcVLNiJorge7",
  "key12": "3YmXwWcGbXYvxZBaLAmp8KnnaXxLLq84SKwdJUZ5ooburYxQaq9h3qo6tFd9f76YWUiE1XsaU9w4MKEZNbVLZstX",
  "key13": "wWijdZBEYtQn19K5aZE1XDV3iZZkbcz5h8xQVFPwiQa63mBCoHa1YCRA58RK1A7ierPLZ3RQq4PbdMVhttktZaQ",
  "key14": "3xMqgGUX9ktfKR2JmqNpsfTgp6oP6EFHdKH2XXjejQB4SUcJzRD9KiFyppXRpxprfF5Vt4dHmyEacLHGkbrMCybh",
  "key15": "5H5is4kYEp7Vb2madrfPV84cBDU9AVDrfAanDNBkAWEP18yPHSJc6peLwNd825sFFZeC4ipmULAJViD9Lv2rdZTG",
  "key16": "5iXRCwGDQN68SkU2935Us4Kq5cggAR8jNhZQcXReNXUktbs7ce2iRWaZumCx1x6g8t944J7davX1S59JF8N9WmXM",
  "key17": "3f8SE5h9m7ssB83LRzCvNS1VTiAhAB4UPESYTMV7rcK8e2B565AmaWhfkuaeYN5qqNBdXjA4WHSzdLLS5X82ByYc",
  "key18": "5Y2N5yZVF1HZMEzcQhKUJnVKv9mXu9nNFemZnwX1ZSKYc5Z6XfLw27bz1bvPPBKYKX4y4evVzSUGe2LfdEPcqHEE",
  "key19": "3RDkdyDzPghFaVn9UV7vH7tXkg3HpoqUdyr1hKnbamYRdnzBNHsL6AShuAp9sy4w3wbYEEtEN2QLyyHBapYY7Fmg",
  "key20": "5aZHZrUZHi37cUkGqinxS1RBpEgfnVL6NPq4sdj6CXXnFo1YSkB7PG1xTHvi6beyo17nbnAD1a5TJyYsEjumDhUp",
  "key21": "4Yay1C8WimNHPCnbs8Pss2mGTeVyMEGkxFMVxn2VqVUUqadyPZzdB8bZ99uXq1y2sn5cyUZmvGock6D5AchWjyj1",
  "key22": "2nKTUWh63gXpR5uDZMFcx72rwn3qGu9XWfwv3Trii96CVZCTTtLkpBwUoDKRKxTZvj9VjR2PyswzGNT2je56vreF",
  "key23": "2zemeatYZFPUvxwkCBp5LUJVdaYwnDouKEKVwQbkx2gNb1Y4m9roa86pNTjXdKLWxqjeLd2WYqPXLL3Qkj6AP5Pr",
  "key24": "4yRd3VWhZE5C8mjAxfVkx6GBisvkinmZxwV29sNKVZRBLg7CSZcuH9EX7UdWhAYTjACQnn6uyfxSsx8f1rfhxSup",
  "key25": "5E5ya5cuCaxPTQgp7oMxqxnT6iNkFD3dWsUZAPpZMamsVeBTswa1KroSUyPMz46QTusYzwBrgPamtX3PXsTv8GuU",
  "key26": "2Q9xqTG1ej5ofirmaUMTQWvgDNcfs6VbdJfjDKHBRbf3zkQufendzaPoAu4H9i9mCze26V3jx9th7y5tTyoTwF4Y",
  "key27": "4ou4vzJ14EEwch17zH35XDsmnrAKVDvMnu64qPgSCUTeByeWZRqL75TPeYkRnaVSBh16nzggwTE2FL4rnCu8x8mt",
  "key28": "2TJVP5fDkhaiBJ8ZwoBWo7vP3f9w7hNGigZeLyrA7UbSThWDQobzTPPk79kXKGwmihW31uQ53z1rmxC1hjm1bNWG",
  "key29": "3q4ibbGQQdve9Km38WEV1K9qxN2buwdKzhu6AhkN3guPq5suzzngZPSZJD13Mb8QHZe3oVqubfzYi4qJNAyqhwHs",
  "key30": "4Aeub36t8M89LpLgur9ejB3ygAmvkhPrrULigFg4H1uxVtM1CM8d9VvdgWaNU1La9FxpPAqkv7jcPZzPCeeHkLce",
  "key31": "odqZ78VDuJakZUEYBpSofVqc3c3CaKWH2tjdftvQTo1d1DyrpcnSJTtcUMjChBMdYwLiuz9RoQSbMjyv5er2DvH",
  "key32": "2wZBS1T4errDxwcDRTLXR6w2qugAD8H8BFcFzTcZ1Exv2FfkCrFu3KY8fNzbkb9WRgnv6t9JjtoDMVroru2cGCzU",
  "key33": "4Nr6uNzFdZTKDWdeNcud7v9deApmZK2eCjFZawjnAvxge2HPwHusHNMcVwPZQTb4f8rtLFD5E8dMQEoeVrvDX46Q",
  "key34": "5KqFyCYptuehamb5Koqw3kLzb2dgLBjkgTfzijnvKdAYhHz2Pc6wGj8N1k7o8NY3KsGewDUjak6JXeFkjEaXtuHq",
  "key35": "eqk4GPjgFfqziPDDDCqma93jKiVqp9XmywKUQe2jyQUdnXiKSQHZd2jXGdApwHeTqmaNPpZrprhwKmM3csFNijD",
  "key36": "47ADkcXiFf1ZQgEigC9kQ1Kp6vKn5by648P9r6NRzYm5dBXNrsfE2xiESvURFq6yMZnkdLnE6Mw6vuLh8BpJxrm9"
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
