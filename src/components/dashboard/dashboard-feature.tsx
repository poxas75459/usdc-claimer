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
    "5C8u3qAXFX2WF3F2MeUcvZP4F5sMk7S4HJbG1QSkdpBtM2N58q6hs81nVZWBNsDD7yicKFNbEA1J9uyS6z671jC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJGzKEWF6iphhzcWT5rKPyQbai7WH4mfmMjDVFeNVorRFHmjBdD92VrGXQRbDDKQ1WArUBby1wos95cT3HutnVV",
  "key1": "7qAZEidjgyBfYY1CMnySesjmeGtQTVb62YNgzGV8DjA3yehCjrHgQEv4FiG2RqpMRd257G5ANPofSm3NEWvw8nR",
  "key2": "4KSuAxpxvnEfLNUCmPKXdxgGXmQuRwqs3jJnrDP9cB59cZZGspz25xZAffiZuVXxsERAiBYrEcLomUXYJsmGETx4",
  "key3": "25v1XBKxyA9YCUGJtGNsQxvG7eNAMbUg7Mur4Beteb1nq9EipGPWqnJcaMj2Q3hxxw4zQmv1k5et5jYJnZR51Yua",
  "key4": "2Ctbt9v91NF42ayBwUQKuTs35YpPJ3jfkyaTeCmteAouF3MWPu6TvxAjKqg2o6oDscAgKyAJRsDhkd4MqZKrv3if",
  "key5": "4TFXj3MVE3acuUUTTijUq1mEB9JY1o1oGjxmHZMG7eKnbnXqS7QPC7pKgR9ZrvcM7dAN2gbUgd2WxLzBQXZqhRoG",
  "key6": "3ihP8ftyHWyoXhKcXKyyagB7qucCrHNhALXHqTnUEd8BhWiNsZy18PPNAk4tmvnVqgEKddfTHSNdSTm8U8UGX3dU",
  "key7": "2G78AVqX585pm2F9cm9QNETR6gzwLYjCQJNroT9hTK8Hs9kbeahB9faMMDSMKVfeFD2WZzjeW9wh8VUmL7VJojwi",
  "key8": "2LQ9v7oSSbYeWCHTB7yWBpZjCu6o43knzYFiZx7NWpotbgucwUNUiC3oXzeyvNi2zTbqVrQhb962t5xhj6VSgM9n",
  "key9": "4RV8f3Q9US6ZnTKdyEmfMFq8poFiAn5ikdkbypibCQop3AqmKQvykohyae3mUgyg8KxJ9tsXzWNuuWCeZ85odSW2",
  "key10": "57iVfhkKxcqGgyv3UPqnpeBcz7Rd8cbRrV7XAFbCvsA8BqqZUeVcAvmENmbpjWga8NaBiduZbb5goTQvwDgsKwBQ",
  "key11": "24ZKB3iF5k5SxzjtWACfMn4G8abar5N6iHNktMa4FMm346Exv1VFD6dUc9PdYjeQ3epWv8uAvnnAv1y3DLZXVjrp",
  "key12": "hLzG74VLGvtYAcqb1SfLjzL5asoPWeCAL4GJuEpWPh7aa4j5V3bfKYsB8XFDvmAP1bnEXRsGPwS3X6ETSKJj8tf",
  "key13": "2hmKt38qKcQwCsFQBnuZtoWMjHzjTxdxdDvrDEnJCBa9RjzkJXTmFMzECcCqFwMeS4QJFi6K65fsHJrsVzyc7vyF",
  "key14": "4xZKystXE178tn8aMcdTbixTdLGD5VsJ4B5NvG1Sg8zAGRLVYRmj23yqeDjCor67ZQ625R9V2zhoL12soBb39zzY",
  "key15": "rfRw3sKhu6vQr9pMNegUYfC6WMoMKtR4dsSUvyH9NpHkDNLCt5rwGWGpuZ7zGW1zhs7czbVuuhFz24xM2LiSvQ3",
  "key16": "5QofwLEbT2eR5G8GYJLTLb2d2BADkjqBpsKaPXK3NuGsM2wT141915BREByUTH6vnmE95u1Vhq8yEu3hNRKQY8q7",
  "key17": "3UmUWSmYmMubP2Rm3FkeB8qAKAw2eMWXQ66im4Z4XpDhmCzoLJPcmBQBgs2BfHuxKi8YXFJMszizz9Z23VhsrAxC",
  "key18": "58e2ysQfriuUWoRaNxTc4ALx4YyVhLAujRvH8nMmLh43Bs6ktb7QisjB19AEX4Y1eBv1SEXU3fTR7xLGH4Jx8BQV",
  "key19": "5Vt66mCzZDoYDBCB8n7RWjGwiq5jAYSmkwYS9PHeRL82cJ2BhhRAzy568S7LWRCMdsdUCSteyCzSeWKg6dKneQoX",
  "key20": "3xHzh8SBfuUGmnWSXEqEFu9ZXAT6ipQot9fjQQNHLmbRnX3TbT58ZfaeED9Gh7sX5j4svbJ1eHdLjkjAuZng3QH6",
  "key21": "5bQmf3G5JukWtAJMmxGu6mYcJGfxQFpF8mr9vxkPbJ5gzviHddm6TxbCay5TuBwiPucbSNvs3c321ciFtZnTiVFJ",
  "key22": "46QsP8awFjHssYLBondGzYTGJtgwyFVyS2wBBcj9MhHoouCaVAPHXBdZW3QhT2TeFvwzgzwJwq4PZz3SDBDNL11p",
  "key23": "2iXbqAEy6hB42Sjz24kwSQH8Xv86XhyMidNgstsJCuRdr7DNTBD3TJqSWAjCtuZYVy4GGQvAV6DpqFjfKyogTvhV",
  "key24": "22KJvHyMecxdkF35vbR2LVpwaEY1p8KdGoHQoiHf2ALSDpHcH8K1oXRN2XbqjxqxRTVUaZ5FQ5SLVTippEtpeU32",
  "key25": "4nf68uqDqRZxhUA6itt6ZhCpiDRUgE2QQjXoHJ3VBY49GzGKJe8ux2JkjPFySotTkPC1ndwXyf5gxLq8BC51CoLH",
  "key26": "4zWNCo8TdEx2P535DvbLZXtEMcvT2u4FfCj7Tk17ErHk6KnwJPDbtf8AgNSiP1Pq5TQz5i67vnsPXLRxrbx9BP9v",
  "key27": "239j7iajiFr6w21SEHdwvYE1bTdtz3aoG5pnfo68E4t54xmuQVDqm4v7uMmFswPD8Gh8cq3NAG2ipuRhe2LQNX7K",
  "key28": "5ut3wa3rmJgBi2qrYZhLqXf2Samw2tykAXt3byhnZCyg7BNotddGwbk59wdAvjmTPkY9FBRFYnAMPHf4aA3CT8LZ",
  "key29": "yzch29P8wGUSMsr9QzdE57WbV59gLQXvnotLFHZianpUtZaoxQupK2L9JSJBRpyuPm3bXCSd3P9ZB4xztSHrsjV",
  "key30": "4Ejpz36u8EUGNpt2szwZ1YDuQRhsBH64siDW9aEAgLeHd22ta9b4DzDmfZKr5kHojyptrhtkJQdxQsePXnbyrCFr",
  "key31": "3BMhwQ4UCrYW1nx4c5aq4Dtu1zCPus5uLNFRvoM3b6uDUAvPWq2EfeT5bNZvgXquyAxerTHSkcHVK48qR17s57Z4",
  "key32": "jPjP4DEKVYaoEr83bxotU5qvD6J8i3XaiwdzJDmPHp3WY1rUhhCVEm6eKoWbXTmDVGUe6isstFvRXLVwch9at7H",
  "key33": "4A8Pa7nWuRcmfjywwAL1a67xTe4pmmvNZqZcofXGwgA4z2SMtvsPVXLZiJ1bmFgX9vCsE5rghN912UkEU7zrzzKi",
  "key34": "5RvzmowhADsCPPzeqDv2Qn3nwUT8EWiLCbioKkpAqZ4ScQBpbEaKJuwyYHpMUmwnrPisZauYv75bLhv9vssLVBTR",
  "key35": "v4zaXWmSq7XqdR6m9xuyq5N9qN2jc32UFwgMyUgnGLcfczv8RkrQah6wEMptqXqRLf7ftBVgjWFRTNB1NXhvrad",
  "key36": "FWepm7d8siVnsvWGvSNBD5WtW2MWp7uth4aakTvk5KfLGr84jUToNU9eQxbqnGRQABUk9M4iXXzWmfmE7M7nPxf",
  "key37": "r8LagqCtKrKZyqZB618RHztn3SNSpWQ5mmyd67DMEWXZtJ7eLeQJoBreUX1nETCvS8JmL5Fyw4GyHH41TsaKFuJ",
  "key38": "4Fg7DN2hVWxf2AShD19NDmbKjgXh6XUPs27kzhsDHKPFtEvNxZv7q3ZragJsBBdbYATq9qCkXcwy2THzGjv6zeR6",
  "key39": "3ESktEtQV5AozdbogcnaDfwMs3679wbBk2qGb2G6QjBnzgEuPp2LR9tfk95NQttFBpH4V1aCipgKGbXznnq2wydi",
  "key40": "4NYaB6XkSFd28fT5ycrRiX6EfB7KSGMS3ZdnnUhk94qHFdrJ4tjMbygXTfZSwVeXw4x3vstd2VH288XkfvSQy5Dc",
  "key41": "3VKRgsh35voyEStp2xMFDZmcQ6aX4a2BD6imedZcLEhGbD9DP581mVyfSSudu8JS2TsTWARxyxupW78iYMPnjUz4",
  "key42": "XLuLACP2bgsJ4f7DcRkxKcAzLce4kXyTt6NYNyZCugSQVZESRRG6W8SosAJnkXSgHWTKZN3uaLWmDbJm486hewT",
  "key43": "qTGUF4nfWrbz3XC8X9t4wvgQAwv5U7QHnw7aEKfqwGXC16ECvS1FAvk5cNqQd16YwzBsBPWghgAMpN8xypa3MzC",
  "key44": "3RTuQvvhaa84sMz6LTuLC8Awo2FgCXRQgQ2PmJyqXGG6kf39kK2GYo275sVkiUAgeefp7FgAFj9Z7dFNwuK3nk2r",
  "key45": "4Gta5AitYXGjpg7LtKxCKVkGt1nr9xJxbDwmEkWmSi4ehrFZyLu9bnk44AcQv7YViHs8aunxryGjoL1BrgFpBVia",
  "key46": "jECYcUFJ5o7GkLryHeuq7XDNTWP9wtKhMz1BtnhKJ1rzxFpz8gtntr7kdM7UuMDjwPUTPQFinWBwZPjg6wZbZtN",
  "key47": "13yA2QpCBYUvgppHMjvE2mVPh1aENpzvLv2fXYMW7efPPkRHbtjhWMwGsgfjWBXF3HWq5kDbPSgLXCdbSJUjYi9"
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
