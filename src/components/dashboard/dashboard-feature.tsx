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
    "58KsJo5c8hXba59AvCZme7tXXmcPDWFydJXF4hkrBZJTR55e93abvrxUKAx5WzLdtqq7WRx6H1BaqjgErmNDQavC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQW5QaEUa7oWt3kJ2uuWTHt29rmBE9sAVkAoX5wvmGA3AsBgGTXzYaVJadZ16RfwJFUKqz1NKJqC84pzAUaCNbK",
  "key1": "3Wj49ep3aYN3kPAw1HVUcAxmMosMbiwL5ynCDgsdEDjoqobEX8i79GqsbVrA1Pez8HK7GshtCtqKHcEABtTZ1khZ",
  "key2": "2WPPjiYrWDbBsDtV8PrQnYLShHxGAtyjbCSwgK7QnUxW7UpUJNsPgrbTmANEmxPcbJA8EAch5MXG2M7eD8UCWfMD",
  "key3": "66GC6NW7n3t4Lno2F7DGZZowJv7z7GEdLLrZX2RKZMJYxkZjsfTWt4Xu2SjdzKZzCXEKJTdL7mows9cUMHhXEYQr",
  "key4": "4UPo5yQgW7MwZK6gWcxVVuAtVqySK4eoohCiXftCT2ojYfQjthMj1tcpD9Znt9yQaJofxAmpJhMW8yEB4smkGHbu",
  "key5": "5JWpVGcuM7yTLJU4yLrK3seUw7mHjqZT99y9gGtC6PVPr4NwDQ1aWDAppuVwQ3oAwyNxKYMTKhjdvbBD8158UAJa",
  "key6": "2uaE5tPy25NsZxEiX28pPZoJ89ZZpvR66JgYEq5VLVnbyoKDcMJVJiSZ1vubLgLUX17w46xrfozmE5HZzoG8o7Hp",
  "key7": "4s6bFWXb68aenrLQKbEBZBp8XwDU1BJuAMMx8cKKP9Z3En7hvfXqpPJMuZwM2cHjjfMFsqaFoB7E6qaWtZno5tD5",
  "key8": "3eYgVS7aT5pPN9f2KL9X6PDJs4cEKuCUGpPWrUnH41q5rG2JXSMfpckfh46u1tuCsuj6cNN1qU4LZ8CE5HcGcPdE",
  "key9": "4qNyW7QAZYh2b5Lh75YeLCk5pFzQGD1w6VDnAUfzXKvwfZyEic4ULiudMTRvmr1Ci4VJ9GKPeF3GpD8BnWjVZohG",
  "key10": "3QBu6abz7sHXaqjcQ8KcWTcGW4gibWmEREVfD6B4PcyPPS8Z9jD5oVU6UP1AasDkvDDnPGgKKr2ektGEkernp37J",
  "key11": "L2eg1EoVypB7iXPzSxsurjGJu1qskRS8CUP7W6nsdeANTcwpCdw2x5q1nKB9ZbrLVUWA4gmgrD65bJ1dSrtKBwT",
  "key12": "3e9YEfasYFxrJhJEUn6HfETVpMxeT6HjA9dCex6LSbrppGYSkUs31ncpWMJV7UqSMFDpAFAprjorZpM4eY2WsdFs",
  "key13": "2u5KutUdEHoobmrrfzfGMSPWZrn7BcWx5E4xN28pSHaJ7zHeg4aEzup8axFxXKnrJS9DTLMmyLZbzQ58292Qt9wc",
  "key14": "4rbbTKZWFMMZeeYEFEEVDKhJKUMyCY8QFj31FFTwRxWYNA7T5BPbnte2skCg74aofiEgwJgu2SoqKdnmPYcZn1vh",
  "key15": "2oF5syEn34sQS8vjnDAogUQb1DuvoE4R2WNnw2fXb2S5uRyHC8N1zb47NSufuiLzxNRcL2k4GAt8Pnacnhi7MN86",
  "key16": "3zWZUntbXDpe4tLw9Dwxef6M6TSqDcWdmoaRZgQC9jqoaHeAjWeiMNWurqUumhxpoxVzVYKZsBUuvuk8dFZ4humC",
  "key17": "5BbhwYxAx3HB5rp8bMVMz4cQqSavdhGwgHqm7CPAdrVa552bqWpBoErcfCGDsqPV1d515Lg3gqTPZjscx4cE1ajo",
  "key18": "ttDM9ygfU2NREKYLJKjUV9RAen4QJwjMfiNFaGBFrwhYvQXX46t7bStv1LrgvAp4f9HLWq1NeNPpSmM9sci6ScM",
  "key19": "5zHnYrPawU1CkdD3rDxEW6XSkdBqkF64wmEXRoqr9tNpWzE3UwxmLnvLNaFnocd1tCDgupPgrATLaBecRLhHajL",
  "key20": "Te7yEnpB6WiRqFibe628CFEv7j7d3KXgDqy73wvqChiW81kKudW36FxVDyLKZSgjscXcfdKxti6ThgSQi75xhWu",
  "key21": "5rVF6vZrgvvVWYkLWdECV7gM2Vn5pVPDZDjtaiEfGaavvGCeCoVvuGesJxUxev945tYmZVXWiBZQXpivMvph2GJR",
  "key22": "2bLUZbH6JATiFnDJgHMmy7V3oLRrBZEonEpAa5pfbxf31WUSm6Zty62SWWR8CarkeYopp5npLCPiUZuX53Jb4aqp",
  "key23": "427KRnNycDFBoXpqn5Euxa47boMR2EnpghXciGS6W1PYizdUaGpudAmkueve2sLwNXvgP36BRJyFDG6ttPworqD9",
  "key24": "2BU6afK1SHLxNFhQjQfM1kBF8mgLMfVrXXs3hKPYGcywq8j8XL62i7BMFoQudPSk4f6T5cyctZmVjA1r8TnWBqf7",
  "key25": "3nCv15KUop2HUbKcNgqYtWFLVBH5aFWEKpjKffY1CkcW41ijkMreueoyK4gZrfkVUi49wkMDMMes4fBce7BBgDdP",
  "key26": "4p9fkqY4tweL31F5yXygeN7hb2eeoycaASaLdGQpqg8yaxXrJqEpHAQH4Kbs6yQT66TQPCqWeRcFhC2KbZ1abTwK",
  "key27": "kxw4w6znYVpdEx4CDgyASGMpRebGJ4pxp2B95aLF5AyAdaEotT5mizgFGHTU3nmeg9trWZ9NbRaet75UAayDLMP",
  "key28": "2zBHKH9rr7e1xtN7CrKB3q6hk9DigCm3tnPYqP6kscA8VMGnNMrUsCkwB7xFNd67DJG8SABuBRiht72TaBhonHLg",
  "key29": "3uSmG63szymXD7QgnpCqtqoAD6SvqvVn1t8TEjZs5q8XAjJz9qJwg73M3r8pBj39CETYX3UGZ5HFVi8wjmed2zZi",
  "key30": "DGppK6mdkHfZuALf6zYtFxUDcxn8VJASs9PEUeRSwfVxpex61UcQc1wuDML9CnahPurnaXoND9pv1QnkBDiu1Hy",
  "key31": "42PHf7ciVd3QSTncZsXgJTJfVA7aMT5KM62tFtBJ8vvtkxMvV7C4rSWdT8phfjrF1QUcu4GYuBaENyUGQ4WKzok5",
  "key32": "4BifrLDszKT2xr2nwUNde8pdvNNyovrGgKWRWn8PqcPVyWPhH2XgP54jJBx7Sn5RhLmJwzEJ2KNXVH797X4g9Ug6",
  "key33": "5ZAnhpavq77yo97BNHhk8Za9f6J39iGvZ33CzUNzNTBxTjqAza7VNacrGwFomJLzFuxbKTu7uK5nE4J6tHeZ1FYm",
  "key34": "XkWNHYQLxyk5oUhoMLxmgao5VHfGxyNgbZj4QpSJAaDq3W5b3Qh3sg7dVmQ1kGfgtDVZExHoZq7Qp7dnzebrktT",
  "key35": "4rGHqzRuHwaXpcy9QRWCt9XvBkM4KPrKPhnqC3qRjnMgkmE5SaG15LyAW6ni5PZ49mXEkFuFzawX9qZeSW4hn3KJ",
  "key36": "B4jtWNrLJ5c6i5QHbvHD3R1K5FoEgdZPvmuayLkptdM6YaArGeeYWiQJGqizNnQrACjPUnsNFciStRPpyNkGi9d",
  "key37": "VcFdP2Qz1Z8skGjRtm9jDaumMBmkJUcLqWygdzJm7jB6X8tYrZRRM83aX2NzzgZLvPbevzYe8o3cxivqMThpDvs",
  "key38": "3DTt13Buf7GKEramkVbeEgsAt5f3fy2CcJiYtNy26PxRmqhFEhVaGMQxKSLGC9hfjFc5JS1L8yw2o6U6aCNzjqFa",
  "key39": "4qXhHKhZeUb14fuoAq2reNJP35kPHBrURs2jSKjLbsCDSYLCc9XmB5A8k64hC62aGLEwZjwJ191S4pewKwpjF2oZ",
  "key40": "32djqAXwc6YBpiRNqURNPL35GgJqd3tKEByKoT3VMzu8VAnhCj1dmH5uF6vYUNdZgocCUEkcRnzdxu9CN1bABacQ",
  "key41": "MikbukCurkgtQ5WmfJDmJamuPzEzoV7CR5JqaTq4zWzkgJZ5czwkdPYSaSLPuE5eDGCJhkxCUmAEgAGNwtdAdpY",
  "key42": "3xJxxM633uPu2iikWjZy7uZU49vZ4pr4wQJJribjTv8nDoeqHrx6H3LjhUrgN5LxhpHW8x7UVokYJpyUac7xUZv9",
  "key43": "66Zp4wnxZDu4iyu6mixiFGMs5GJZLPRLBTGNHwCSDJJMfXJNrC6cUpuxTqUtC61Z9c2zF6JJF1LR4Vp6JkULm24i",
  "key44": "51v4ZSh2nScv9zdJjqZy2e1tbckA4efiEkVJWiXz6WphJ2RkcMgHQt3ZWrjakoSZAUhyzsvB8dv6QTHPT8PsvC6o",
  "key45": "k6e6G3BMv4CtNHa7KfNaD1aZJNP56WnU3kWo6NAmn1DKKAfP8X5wcApPb5gRLTwNPfTVdrEmPWLdk5PfmUcrM6u",
  "key46": "2QKTSeCQk3a3RTuxSdQUkiBo52FyRa8FynQK4LbtPCRixcdUGQNwEjXHcD48N6mcRokRXhDfLVHk3kEzgxH9hX5k",
  "key47": "3qrY9QwqgAQEC6Ew61cNBa9gZYU5Xok4voTog3nwz3ysK38yxheHFmm9HVAHy1TVheZZtyJhhws1rnKPFxgZ9pJ8",
  "key48": "4MJ4Ybt9U42qVcrdy7rS1qn1tCeWGZpU82gnsGiUXvTt5suq7XhWRY9kNtoEXtnLsZvrLihxFJeraH6Kz53SGiPR"
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
