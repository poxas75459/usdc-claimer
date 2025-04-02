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
    "2YYMv85HeNeSa9LvYtSvp4vs9qcPm4XM9gF3AZXV2NCSzxbTxzq4kHV5MhPsp9Hv45FHsJyxhRCZsYfYrJycZumv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "126QhyRJuDyVYFMhfoRN3uG7ccyPWCxbBGKMGadDkpiVRQywnvsp93g5zy9JJ7c7Qm4tYNbC7aVNPU1CZGi4CQys",
  "key1": "2J5iNiSWrA9wucGMEHUXvN7N96Zpm6P2xtZuveCsCTqRBE7cjT8FosbdhPru6TEUuS3GqtdE4b9fCNBGKPqZLrP7",
  "key2": "2Y3zzNwJFRaLD723mUbxh69rKTqjA1L6zyG4CEAAvM89iNYXta3bjyRGrjD8PKTBgnJPxPKJM4hwrrirGGc2hpmn",
  "key3": "k644nsV1T9HaXtaDiGc1bTb3CncNiBr37eq8GSkzSQ7ifnuuLM11vmfXieZvfB7HWMuXdDBStHLUVPWvettwmFJ",
  "key4": "4sZJD7gTPBahHmpqXRvG6RZXfthDoqiAPNs81jrBjMyN5LohhsT9RzHBbUQqoqdWWLNDrTfDh5TCqzoza2m7gYZ",
  "key5": "5ibt3WvZ2ZAvCXC7RMUCVe2HYwYCRKCG8E31LQ8YfymN5eA2zAv1QG7sqeqhAvQ5548cM97xKtzADT3oYh2eUL42",
  "key6": "3kgmztJrSJjbuTnH22ad3tjnNpWaT9Jokap6WjQzXYJURG7NcDAByCxZ2XE7yN2ujwXWbNAbriGjaMSWjJiRKsK5",
  "key7": "661YKzfdu9B4jujPwkKMcDtABWED4aRrtAwCZ1v8N2tLBYX1QxFjK4xN4nQqobmABXMyM9GjMA5KA6pgi3yT63BT",
  "key8": "24hcE46jRwpZnWWBNzSx7ZZ5DSNnm6GMhPiaigfCb6Mf4w66oQpWtwbzoAh2haRPnfFSLR6HscXoWLwecLNag8YB",
  "key9": "4vjFEV1L7qcKV9kw3L698ZxrckjMghyN97Sw8yWs2aryyCNw39Tfv6UgFzcz5UiBvncrUxpsmL1ApDvWsurtke6B",
  "key10": "3jxyEKE1Rhiv8aFYMD35dmoJ8EufRRCSFvZvsMP3GbZ51xSwAYDVk13Sc8qpna81fa4tm7Pcf4z3SVccvLEMn2L4",
  "key11": "3W7ucbgVZhDWf5Wjms1xDNCmRZ9aWEEAay2rnAUsrrZk2LJrkCKxkSk9qqRmpXDSXThoqhGv5mzVePkaqRpnQUdp",
  "key12": "Nb7tGYwHtTcymTY6XRLMrjVzA1dLVAiV6qhfahf8k1sfiapoXkWGeP8UMJTjExFLjwV8mDBnz8Kkis5Fy4gZ2Q3",
  "key13": "31HNycTagdGH6Xro1iEMz2rTMeeryJvBhrBZ8qjX9nAneZBnpm2PySE6ziZvDNec2AHUdEszccagZmtzUtv151Ri",
  "key14": "2mN4t3S1RNXDVtbVhF3ZAXqs734Yd3KMjaJUbiq9fJn2hcwTVe3am9m1Df7BaEzZuJDGi5WyTNyKcszWNgJjZxN2",
  "key15": "4cBehszP7cdZMhkoLJH6gQG1PMeCcEeisoWCcMrfjm6cdAzN3S1YoAYfr4fVRyJg6aPLjW2z53y4zUUa5zibJQdS",
  "key16": "SsAoshFHfrcNVgCW7VCc9Fhmvfwu7DfyiKhwpU23hshxhUugnjSg74uBYoB1iC86G25bb3ZerxnAmo25trvuxAF",
  "key17": "3K1n2uZPzxpYsR2v5PPyGGVNbD9wtfonVcMMmY5sdUrtcd8Rg8QMqe5PXYPrD7LZXRJymoFR1kXMCqk5duo1wZC4",
  "key18": "4qZmpG9Lzau2i9XK2hitH5m7BTYdeT2oJSavCAPj5zh2vmWcM3Qx4Qs4Tbk1mNxtvV9cyTXhki1a7LAnkHFUYSFm",
  "key19": "3yvnWGJX6z9qwHjKuunh8dJa9YqSXnWEYNbZXWHBvSrWUyemXzSZzDsrhnnh66wMoiK2ehKRb36mm4NTvUMncY5K",
  "key20": "3AQwodEQzVQxzr2QuikKfSvVRXQqqLyZzy9YZY5gq6YqkRFgDLrxpfycJ2zDuCBAhd9HfBHq3k8FKPLvgKGcxhnu",
  "key21": "2RKSJRGJbDXFcKAMpWaXJzW3w3ZZpTXXCAHtDAJy4A6T5XEKRDzUjGm2QK8ytCmZmszcbdMMqEWTzPEywZVCd7kp",
  "key22": "56LACr7KxXsTn5mZz2vKKmjj6xBdjiHSCLjz1RiTJdYvkRGAaxCGFov8N6momD3byhk4v5EK44DPayscMisXHpvv",
  "key23": "4PtySqVcbzBCy5sMETSDhVJd57fsbEcrBpjeAwy1VqrZXuoZsGsMaob8DVnPqpWZeUWJwih6zuCX4bZnpin2akmW",
  "key24": "BEL8dcH6pFTMLhq667kszKwu2DrxdKfM3GGFqxCcYSdsmCu9EMDK7pwBdMUKdW9p5WQSyYG5WUqYFNQ2ywq43Yq",
  "key25": "5JsGCDdVHpuwaGLftmwbrfY66QYCQ3qALK8VdGWChhdVpq8nCnqmChznsrx9drW9x43uj8ayuwPnRKLBzwFtUAhW",
  "key26": "3irk8GCHL1QB7eMjeWj5QtVGsQK5BAeAJA7d426YhuceEe4C3Hn5jk9rfBhvsAa1HWnMMnLQ8r8ziNFtZ2NxvYCF",
  "key27": "En4pZgqYCiRFsFPAksgRFMYr8ASATrvrGKNPKS1KPFdLpH1wx9xqafJCTrSjciCrfRudnTJc93E7xkU83sD98sm",
  "key28": "4dUrLNWW2tmximqwoxHsg8pHEsvz4dQyo2aywyEtcFocfesKLTw6jmXbRfGkQznjqNmrAByBveTEDjSj8aNfkykE",
  "key29": "vgjmYmGNuJdT9CLdcZ6NzxRGrAi5frr34xGpoc8gd9NCuW4mWKjR551RYgdCsoBVSAT4MxKhb3AWEERbXLsXZCG",
  "key30": "3JF1dCit5qiMMGwtJZzRoP1aSuf1FjRLcDugJ4izNQv69p6sQ31gNYhiEM9V2AD9pYnit64m9WpEdPuo1k88fdxy",
  "key31": "3TjXzaZ1yRke75fCKMwpLs2ANPLyz2d5D6YmTxZo2Kiiz36oxDCVYFhtyGTEXLv6U1Mdq2NMHzKM35E8cTK5ht6A",
  "key32": "3JHLeS64uqKQyVpJDysmLnTUcT1rzKYoPLoP7XRFmHnGorU1u7QvfgYJWphKeYoRsWk1UMXDqc4BtVQGfv6X44Jq",
  "key33": "2rFpFXEsKJLy2gCAmpbDJo9KprU24L7rKs9LKXwDqHUX7bu44JaPEmHr3tFq8JwKLfuoVVQngxKzFYVUsD2yfwgm",
  "key34": "3KWURnojwZyiupaiBKdTfyjWABbUzEyHv4h7PBpr7spgANDRCV7LexrCRaTQKJJ1yeZLt1BW7i9DVTaj7vBGPUMg",
  "key35": "2y7K5LJ4QdcgSejhqVL5GLyyTFD3HEdTbpfeA1yPEwZqgN7855TLhfa7SGEFWCyAoGec5LtmGCKRegAziwP59KNp",
  "key36": "p2vvp4t3gmwUJLb16dfx4YgB7HnXxhsi3cyMJuoLrk8edKUdL4s6A9XhiMubBT7RYpH3uD37FDCdJ7gt17zMDRx",
  "key37": "29APZQzD3Piitdby4abV1X1SW2fjobpjdoAnwsUg9czNsGQ56KM4oZnjAVYEumQ9L8nXmBG3zERGYP7UsSKxszFi",
  "key38": "5Rn9g7bCVgZq1P65NiRFfohJA9H8BEhz8ex7ejMuiwzwKbHUYEgTWuQZqveXxZBuhc2pLWbQiaw3VgZnzwiMonVX",
  "key39": "3AE6Ngzvft4osb43DLCSuweT2LEyqaHARxwMoThLZPvxZDGGPLKddJad3MMZB3cozmt7rU6RAXJp4Y5kRiYEgNSX",
  "key40": "52QsM3Z4afofPmomoYK5B4KMywPkSSRApQGXTDnNL8x3YQigz7x54dzDDUX9y2utkYYPjw965JXjxFA2w5yx4e5N",
  "key41": "5e7htrXsUqNfiP14hDgXcTwNuaJ7JLTN3AoBcCnBHTgyrKdQfanWA9kEJzz3Edmz8LKs7eCrtkcDZRy5dcXgUvGw",
  "key42": "3AajvX7ZurLJ9GZjtxufK6VKyqZM1DD2pw7L592UumfczqqP39x9sUjBapns3TyFYLnEnf3tzm5c4koGy1nYf4wk",
  "key43": "5EVYQRFNu1YwgSGdu8w8EkfR8V5TAu9yQ4irkPbEPo4W3UQTcqLtC6cmxz4UpBR4HQjHBMSDBeZm47TCy1UeW1ya",
  "key44": "33bEwAEjtQtr9L8BnR5CHRpQysxxxjXGg1kZETnpmGDKTjsgbSaN7UTux59VApdDg2MXuedVNJRDAXNhrKN1b8SK",
  "key45": "4EXRoFbty9C1nZx6kuyDUZRMoXmHhzv7FKhkaX1zWjHFqUs8qPX6mRLA8gU5KUpDM9265LVwjFy5vVSwJyjoWYhp",
  "key46": "3du7uw1e61XQuLmWTtXiTRyRYKfCHCgnSkm7dMfjYHxSKzucHUB7AuAihsPxCkKVDvwqGg6EkknemrVbJHbsQe3T",
  "key47": "3B5KMd5aeC8ruRcHYnc5HEqqZ7dZdKj8u57gTEFYDhCntLMBdTLC4J9Zm3U66etorweKiAutQEy1Unks5na8aZnn",
  "key48": "HZSsU3qsMjok91a25j9t4AuZcqHcMmyvCrwax7B7ncFs36hBdgcWS2eubRxhkq5wTHTxmHAMEhfqfiF5sRkmKPE",
  "key49": "3wurzAT34PDdfLmSQkts38aFy3WWWXewEKtVYsBNem5v384cDcRYYWd8ncuSSNYvQUXdHeQCjM44osUTNg6SZCmH"
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
