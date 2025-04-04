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
    "4CYKKhZVmM4u5uadYxUwoe3Ji4rrYBVEEpZWXXpEzNZHR76dua7ZtDZ69gzwsoQKZ8QqLtT6ys9tUqy7wLx4kbWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3mGwbxF7sy3TtiiEkfqvTwhgKVmAGxHfyYWnbSGBLJuGZ657FKcz3dQ8aY3Xhnr8oSmTftqL5rkrA52FKf3PqD",
  "key1": "3bPz4XPZ953RX1WFJ8RPr2ZKzGB367rTc8vzJZSxhx7A9jmR9k7sKHue2ZovogJ3oMu8ayhVcmExD4d4pMwNkh9f",
  "key2": "xEwr6v5k1B1gZkaPqkNGJJ5wZ85GqZqbWDLUuyDvMkyxeBkL44oLVxs2gx7CkVwMWsvmvquLQhDjLXBXVptPUa1",
  "key3": "5ETHMi66o8tfSEFiVuZ7wvcQTZPrdMLa4vJ9YbSY9dYjyW4RNnQ4ybNRrLPakur2Q5hWRUhZBBjjpcgwQYN5dYzv",
  "key4": "5ZUYNjs8i5NcekCMngoFqzU2Prjediq6ybiX5jaX99uhUp4gg4GnJwLELuxo413dvNopb6AVA6Z9e1ddojdbfMS2",
  "key5": "4Esi36RLk263nMiPu3rKY2YKgAqXSczfPchNsG98nv9PiFqDPxWP3CRDE8z6aSKo9vmcpEavGsBb4pWbcp9epi4s",
  "key6": "3fiZEact9xSay5r5WXZS2jfZHEzJEymgVJvqpkUd81TYSp71zXHnbQMpB1AaxvXKUSaCYrZTGECKBT7f3Sjp9zyo",
  "key7": "2LL7zEWQWnT9qFr5z9YPSU1TbhnDEhZVE1nEa6zjWfRxRWmuTh8ab5Hai5xWQYWAoYRJiMYonzofBXxk9HpEj2mD",
  "key8": "36TkvCdzwM9DnHVSGNoWg5j77vMMw5wDCE2jSYvtJArP7HzwLhuynNL3KMmMTntGDwG9zbC94pgBTiKqQWxvdr24",
  "key9": "4AG8cPBFNM26dJ2A5qDzTEJ2hup57ansfDHG1SSZawgScsjG22JoqpQVy6rEui9S88xBWWdGr3odF7PHRzm5uAvM",
  "key10": "4SDaqMVM6Sv1VbWrzi3pYsmCA8xUDrbXx2PoQTVRiruYEphJw3KqYvcT173rMwGGwyK5ZEXeWnWHkJMLPtxYcsko",
  "key11": "MKaKPZRxcd4FY28VdJvC8h9zVXhC5cwhfwnV5dxUjpCVL89HgAXZU1L7zRKZQfozHcPMVhzdnJC1YgV8pctG71T",
  "key12": "5A2nFFE7x448bdh7dnmJphYhjAroh5QMwcj2YCdW45dJ24HPrfdw9fgJw3bgcXJ7cR8SPSzcQwXb5fCfDcJAbknN",
  "key13": "4qpvWbEffg3eqUb84stGAx8bZyPcDP9czbm51wnePJfe26ShqJP5vnKdxoVCwDjuhoPHMz8PcLdwUCQtXRRVkaxj",
  "key14": "4gNd7x5kvR1H3VWytVCQ21UF8BYPiN9Eyu5dypFDJ98noCQdS5PYUJm7Kprsx3hRK7EanNRmcgo4HNQ1FB3bg9uB",
  "key15": "5kFbaJp7iZAfjt6TqngvGmxTmKrF5jEd4SBu5zb7oypr18c7VcVHLKFB7BjGDfHtm6usmQzFscXHDYBtz2kKJb4j",
  "key16": "4xe8cCgQSXx4GSjBoFgvv9W58NuQi32sJoC5ACcFT5EucmsExAxUEFpTQwS3hMuX7tz8Kv7ZTEHLMoL5WSPGzvtS",
  "key17": "3XDTu6NotG7BZ6qAc45ZSMy7kTP1fApLur1eivgeuCfHnjQueZPHV3Dww4JTtjk8SXLefgdiUMzLBY1sapFfPZp6",
  "key18": "2E9nbDW96MkBCx1gCciSXaF4qbfZg7CE5PN8L393LVuzsztNw8gaWfPXuPMY6qCsnonDtRfg8XFiWEAtyqMSZRvg",
  "key19": "qD2mdRTEkiPvW9ZghAAeZMWw46BVkjb6V96UVCCFt2J483d28PzayuqPo4jLsHdMGEBnpzEiX9CVNcMY5MY17fD",
  "key20": "QCHHKgYdTMFVAiWWL37oJ55Y8zCqTbqoVs3tZbYWj2ZNm6Lkbpm6WAQsqNbT7pXj6kcnV9zoatFRqR9R3hveMoF",
  "key21": "3jjp2BEu5CtFgHfFDfS9jBb9Ui1tQSWhafMJiHL1oPmmwgnkNgopeUSVefq6mBkEsk1A6QdQ3oiw6yTDuCVmxA8R",
  "key22": "5bU2PYCeFEEvUicvfgqbfQZYzunT8FY65uLD1raYP6yQ8GFcvuHRcKpbuoSiVFD6Ww9FQVnMnKHcLToR329xCg8W",
  "key23": "2JNgknJmebpGaZbVkt7tQiPceLDVD1Dhcn2f8x7HwVrr4sX6SY8W8Mft8Aiz9szwVX2zWjyoN3Z5jLLYsoyRYSvX",
  "key24": "59BDWjRo9kt2HempEyMzp87gnmycErDrcgtuhVCaQHKDJnUTFpQ2h3yM9gX8AvCiNcFP7KX3bur2QgBnNRjj9vRW",
  "key25": "4mKvzuvxf1gcqWjmYgAz9oEMYo6GgS54Tcxz3DTpR4mXHdTexgNd9Szg6wdKUtjXaZuYkMHdWQDXh5i3kLM42KEY",
  "key26": "43arrepnjM9StDcLLPW23b3xoSAcYh8rbPCEJnDmLyEcCiEsU7AiBiAnVD6zjRGYooucZmqk9hjtjJLsVRZBMPYk",
  "key27": "2bm2NMwotzYw2Yt2YdoGadAvTefqN7GntbLVn4pBobd5HMYbiXMwhwehHHHYnF9bCLwjWfgJzXyENxXrJCNbGjRf",
  "key28": "5mw6z2f6RyEidDJp5RxnYk5sxjymKCr74ZCeagevYUNJ9fubY9vQD4gjMBvJHoJUN4SScsroSophTVXz2XSU2dL8",
  "key29": "SciWrq5cR57DGrnJxPqK8D9c9wbARAVgY1ZLkKfzEMGKLHkf8bVPnSDJHhT21Ws1CPmq9jvHgrtKsvstwNz9Bny",
  "key30": "63JBRP13LtN2vnM8sVTJsthbRn2H4bYzyQZrfFUEM7KRMZtXVgCfDepD9idxE7mnCKme6qotRLJcRrtVjjLWtvCV"
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
