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
    "46v33HG91mVYavAiLH2vYQhgWuWDMbGyybAToQAWghHvVWajv77hCDeQ3yZj1XSY8q3QXhs8jrCmyFkyMMW1EWwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9K9ZEbxTqxCqbiXsq7oLgN2y7XyabHSjjyRSqKVjbZe2r2P32F8uV7cvX9wZ2p9BkfvC2zSPLue4AbBtJ74dpP",
  "key1": "5GmPufMkuiuuWLA3ig9h5QdaiVaBD56hYRHdYuioasFMwRkFFjnvtRSf7r2HZZwzhMg85xF6W1JRaPbvU1jh6hhJ",
  "key2": "5QcVjHhk1mZspLdZWunV3qBGTqHmRCyGciaHwpJiKxWRLz2aTaYFhoQPG1K36YujnPAjbM2sirkmbfCkyF3gexoj",
  "key3": "S7SH9pDpUXgPjvFCFHe4uLCrzXXJJe3kvs1E5YCbDU2w4ddSrW6gRcRUWmnx9A9RybgC5HZsDbj838SfaJVehQm",
  "key4": "37xeJZNKat8kqsd8KoBg9KVbdNe7LiCbXWEZ17ooWppqmdKAQdc3z19mC8sSdKA2krvJvGz3yGbixBdGypjvgVng",
  "key5": "YYJ3jj9Tob6rYPRya2ivV5jUHy2XQwo8vci6kmzpcwB2v5i8e52zcm9Nmptb6P7CwpPiSsMjVL8Yozk8AUf6mjv",
  "key6": "4NuZTP3QVf6Lc7iy4YAW3T6bSeMbCJQSQV39f7m7amUNkYMPimMVxnR4HQhHTvCWEAJU6qSaiNwn2XimCF2JiFqH",
  "key7": "X1DR8kA6NNfDFPhP4fkpp2hjsFat9PQek5hLxgKBtWFoGgmjvzZ6JkRRroMAj6H9sR1yP8UZbXcFQKCRa6jvuYm",
  "key8": "4X1cVWFqb37mqKrnyw6S9NVXmMjrCLvfRNvmK52k38zZ7NAqjfRq4emnz2GeaW8yiRHSNr32F6vLatn9K89UFUBU",
  "key9": "xTYrHLeTHujWqahBQfKnNsu869VgtZdgJVDbdSmQvPkr4XwgeANc1CmrAzLR4iQ741HtKAsNBGxV88PSmyrdjvu",
  "key10": "4tjN2acuRUXz43zfr1gzcoYofgeJtoMwcG9zX2JnCQmbt6shh3ea43Mkaodh4JVLNo39JuJf29rjqaEmf4MTMuGC",
  "key11": "526Q1jrQBEB6oV9wvhRqMpVn9TFfMSa6eouRcK8weWQ1TgUjXHe4JwMNUufW7DC3odbpwQuMjP1WUo2EzA2mjoVf",
  "key12": "4RG44vHGPUkJj8yd4i4s7WdKLWYJqZVZjz26gfVoocdtmf1cZCtV2sWtKPfHGCwBkPFXN5vLuc78LR2Z5UbcQdqt",
  "key13": "Vs9QZvFok18aWzYTMehqP2TqweAM7EmDUzTYbsHT4Ff4JNi527jTN4Up4DD3dQ8yExXAPPiGTp7QdWJMNYYr7Gr",
  "key14": "3aMbcZHSg1JPBttCb1BVwybFohVYVm54hJY5kyfvgcFqB461DrLNk6pPbYkdviYoCZCquYf37XycDq2z6vc13rpp",
  "key15": "5aZaeBakoXpatM3o6QceuimXXJZUX6i43SwXAp1r4ACtf78LrNsiwroykRh61MSnHqd5RbVBSfbwUs8zrJfx8jB5",
  "key16": "dWx4UxHDU6EvZHi2WABHAfnDHL7C4RWzwPgsgXyW66HyecsyhN8xQG2qnaz1rkxqFoG1FbEU6sJMAAHEJPYab9T",
  "key17": "2NhguuCG4miWE3odKDvoqh3DHQjocKJ8HpGCzemzijMfSWUywA5NFo1ZTBwyocYKJ1CLPfUSv92KuDkkqXadBBTW",
  "key18": "4vmrGAKuDkYGtJF6GJf4ztQPsp7MtKWnBhsftn2gRwTv4R8ZQJnmFGnkBrbr6za53tsJuSiPNd6QLnpe8KZMGXAQ",
  "key19": "34CFyQs4DTpGZ4BqUMGGnmxNYkYGrDKsmHR55CQDVFFVZgrQb9W7Z7U1pnE8Zb7dUnekWFj1MeauBBiufuaqLqiT",
  "key20": "52NbLtvBatKcKxpHbpCCsqVcJ6tTo7V36aq56wNqHjx73oRmErzRSa782WMbCQbrVGsdNjS81a9bGKqe9Cz6Dk7i",
  "key21": "3NNnP3BsF3EsvYGKD2wq3AkhmAeJH8bBN3ZkyxbbiDg6WNqbDacavQGpY74MZAcPc8iWoR8padeVKaVGLTgk1B7D",
  "key22": "2sbSq8MhXBse9mufXBmhtNCh1jTa1TE2VmP17gUYLmDF6d6jgjmkiCVPL6iHGRgfagfivH2TgmuZkpASqAT3Vypr",
  "key23": "dKXuizmfjFhpMoo6Rgw919Y3qpmYfr4q8vvTz4zox6t52pkJXfVUBCoSRKrDYf5p9379YHJk9jPVxt7Rc8Y6nAs",
  "key24": "4g9vV4PGY8Rz9bMqUdZzpr1ToydCCzgdudHzc85vTFJ7TyXfCBYXHCYUpexckn8XntrqJXvJoppxtBL9A2rgknpL",
  "key25": "28c87RU9uWgaKeitZyR8NHRfJErXUtLYzuUarbQGL7FFH9XA5itRzCdhMZ8HUKdDr2zJt761PYu7kTf1fBp6NYUn",
  "key26": "4momdCmPNGNxBtdJcWpz1BW5g3U6ejNNerYhb2dJvXcnCe48vRXt44Fgdu7yBEhrNoSkKzYyPmfT5MEhqEEz7mWq",
  "key27": "3HdhQ5Xo8wjfU8bUMhxTmtqLn9myjiYTV142i8EvYCU16Dys1R8ZoHZCfLojM57csyPPkDRL3acsYAieNXRtmU1q",
  "key28": "53z7bZh34LSXdhHr4wKJuPjCdybsEB8xReiAZzX1e2jDhpCpxGjgtQ5j7UwJxoeJAKptwbougKVZRb5hqy5hXCLh",
  "key29": "VECWURpbo2b7P3rtcXK1dtTQALSKF8EmjaxkqS3UbBNyVbb4N3nM6mo3Bnj3RvGBu4wT2Jgr3y8C8gRif3KxUYK",
  "key30": "rz74UV1tAwmAiwGZ1YRebZcjubFA6hAtWJwHH35wB7qD5AXJNYLHoL1pGUXyQGwcEfdNcTgK6vWNbcJ1YtJjEQg",
  "key31": "67fWHP2FeNTUrLRcPcA12fRvXBXYsGHHxw2pcoQWvTNBWeSt3EQHD17UqVv7Li4rWQg9iGNUNQEqsJ4EqmyKtEA8",
  "key32": "2BKKrYkobuPe5a2hRe8LbbxsD62qKKjr9CTp8h7GHTc84u12c66WzyLRk7yesHnWEZeZUiVidJ5nHCkdhn74X85u",
  "key33": "gLQunWbtugBizGLRTyr771sEfsCWPc4HPEMV34WvL1rn6d33FX2rRmm1DsaL4QAGEVyFKTbSruPMAhDgZWjoRzF",
  "key34": "2oPPTKj57HbWS9VkMzpjvboQ73xgf99Gy4tnypdVgxxagq7n5XACB1V46FDxnECecMYG9G2ABVLDJaaD5HMSF6ec",
  "key35": "3mFgdd3cXdn9k9oirXxdsxhTstcJkv9DEtq8vHvUfoGmbmD7cTGiGEArfWLUXE1Ewy73o1zAMTY5vV3q8aoAd7N",
  "key36": "634533uhbECjrTYFL4vh5saEUTTdgaZzMxmk8xZp28A99HJbkbAuatNXovuMAbM8YyN3qp6Mdm8hZdJw6uB9y7jD",
  "key37": "4MEB9ioeP4wc2E5MjVa1wA9GvyZJf9QhThjiwiyhAtWvrPKJDxxw4TdudNQxfWUt2iff5vwEvd12NnTZ1ATg6U4M",
  "key38": "4uP32BL9LrJnx84rwWrfeSz7zyv5JBtcHxxQ1h18hkViwa4pZT7qhp1AcfX6DhzGZ7ByLXfXSPH8DQu41wtfvji7",
  "key39": "2veyErunFUys4YxcPRAp247sz7S9CN6sxKkW6sPzfHHrinyMYy6BGwbQyr2AdKzNoWxK4nPx65uCfsZZuFQ9WEfU",
  "key40": "5zm1ZQeVjoiqN7rBFkzBwakda9XAJYPKNgWkAVh1eustcukHDT8eDriFvpc42fwEAKUK16jKLfbaeM1yhqvnkfQy",
  "key41": "4xo8sieLpAKwXSj1D62RYbkK4afjDRcGREBtes3a1shafAUeKFKfcLSgytHujpGkdR2LsHTSv8VsU6GFpkYAPzpq",
  "key42": "ErBCDEvPjctyRttSggCFwD6oDrQmAHeRK9ue8sV8QjJdVGAf66KVp9FCexK8sUgqCfqXLVma31hHRhRwJGSRBoa"
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
