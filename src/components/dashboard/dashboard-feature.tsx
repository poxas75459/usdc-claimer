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
    "2khQj4hfRV3C6Doy6ALmkcFFRAxy48sSAAuEpmSJ4vYv8Y5Sp7DyNLyr2knaNtW4Hbvhbk3CjyMSL3WqMnzAKGcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWwXhXHWX2uaVYLwuezurNYvuok2bpq7dpL8RPzNeje8HRC8nqxm9DRtP51qsZv7xuQSLJBAW3GHi9MRDyZ45yJ",
  "key1": "4ZSYgrs9obJjThZdA39ZbNwYduk7YaYJhrkmqCBiUXg6HgJcJGC6LgoMaH9F4gBBei5vpzGmH1ZYYJiiweFqo1C9",
  "key2": "5BYaC6zQRftVXzKyDKdnJsjfyRPYboingoMw8aQyxBDtNHqKJtNwDqZtsFUvWfmufMQam4YzBm4jDQkB4auWhLM9",
  "key3": "2JiKbGdtJjzQizJRhWqpUEbMfzkmVNs7F65RnKSHEsD9WgSiiF4Y67yzd1ZaPbi57bP6mQUPwvAwh6LLgEbnf9Sf",
  "key4": "4mU8NZBk4Av7sWqGRvgtuARMKuxce5fA74vk2Su2S2u9W52izL3ENzKoedADbcqaxjJKBafxFz3Ebh6raQZAkQQH",
  "key5": "2ZyUUWjfxHwHEX1iPrHbzTrJdsqmPgnwXFcpGsvJz53htNpHNPZF51J4ZcLmTQtVyRZhy4yqEshnvDfrYYfQHbvs",
  "key6": "2ydTNU3GvzQntKqt1QNGx8CAMXa4t6atqQ5JNZNBv9Xj5MTHmaguyv1bQXdnm9GRt3bbc9Ujx9LgX4BAzc98qd3a",
  "key7": "5QxdXL6jKk9LhUo8UM5dFEMqz1q6Q3uYoG8MwiwYNy955gMkMrRz6WnciyqjduRR9bzXh8EN7H8KMXAG62aUnQkC",
  "key8": "2kcWJprzS7BVivLhwXQEUosX5ASEecJY7wtEbHx7dCgJHzaWhSUmi8s3WAkVCbjz5KSouyi8aD6eMmWzw7vpaCwo",
  "key9": "4nR1RQepH15ZPHv5u5dzoJpSa8tKvPNyZYtw3i4Co3sxGXJFWQfPZHS8wXe5h6DC4j77WoEG9aeJPdmE1v87tzp6",
  "key10": "3H54y5vXa4eLg6SoWujU22uSPBMn4tj422ecw3a37UXowPydYeFDGeFH3xAVEdVgveCvNMFiC63i61otPjYFxbLH",
  "key11": "W9rfzzM1yhL7QbV5MLTKktAS4c6ztoimmbNULVob4cUWtZVv9ybwtabasLkFZNFc5VY3iK3u2yEHVzmnpGzGpeS",
  "key12": "vhTfQqVHgsDYxJkUeMrejrjp1CzYMaGRFLtMjxwDkYRi58R1KgY4YoenfDaifA9fMeuE3Rbmh7aB5gfRbVRR936",
  "key13": "5trevepz8g3jJ4GUacif2ubgboFrTyco2vNxUfeMBFQLkSD8mbrFH7ZNb9BEotkJopZMEwHfW2C1aFBNyWyLDrXV",
  "key14": "2NzDcjmgLiPwWxHjpwE7zPE57mPcMCyyURZ29rwDJTQ2aaSFQVqRUNcr5mmMTZ5pTAHJKcQGA7EVdHhqt68AenbR",
  "key15": "2DcWXyLvMKk874XoaWSDpRESV814nw2Jp22iiVVj3WLQbVh6RAwGzhH63F3jTE2NNq7KFNbtU8C3ZYzvCHiDEgMR",
  "key16": "4hp1gJANSnc4LkJ4F3LN7tVUx2SYGpMPj7cfymuxmGhJn7uSkj7XmWS1W3oDGJD1v4rHbFR5fjZPEPS8613PMUBC",
  "key17": "jVrStPknJGQgknrpGQ5QBfENJK9QibQVopagT6CL8qaGDY7uqJGiyjynDMRcfewvVbVurPj5zWN6Sf2pEGydoLR",
  "key18": "53cqLufUKN5hi9cYYrUKvifNuXuu9V7ES8MkEYgwYxDAJs1gMjjv67npRXMfZaSCYAHmSt4MS9v3XpfE5DRGXeaA",
  "key19": "4qCNHuVEiFb4Djq6TZjcUEMhrWR2ZCQGwAm9jyrEtcUhTCe5RSxdPVdoUWGXNTcLApw9kkJTJoAiPHow6YqNPd9G",
  "key20": "5dnrn4M4XucXPZrj6Dt1dqYpUSBNEERVFtY3e1kjCjotC4bxtnPNpJT3TXcYxsXbw9AcUG4LSbXLwWvianyX7qUh",
  "key21": "4FVYz4RTNVgB5PR6NoQJm5ffwpbtrfRz2zQkUNBS1ch9YHXpJ4LXFTwJs7ctxuNinQFfmjhduEwAmbBpRYQmDsu9",
  "key22": "4wzxifNJBKNtVG4tPABvoA6cBMbSbtzKGRbhXJhSsWzEJthiH4FGLM36dGHqQZA5Cnq7BnoqBhi1AeDNa7BHMWsU",
  "key23": "3WZ6RMKgpTPfuyL2e1LAJSfbNAzx4nWybUuSDFq4oBqJN4u1Ay35oFoV2oDemxQjjpv89Z1yNL37Pndujbh3R5eV",
  "key24": "4qLV7AN812zDuRUQoS8NSSMrgZnH52Hvo74SYSMEf75mamnjfE6DUe4Ujp4EPk2aTsMddHPsixhM8RLy8fLjaqEu",
  "key25": "41531Vy8aK2yMGGgCwr4T88Yii8RybnEkrKSTubpJBhVXoy2vB57dJifbWdK3F8Tg6kCo933RtKk81W4JFXJsNJr",
  "key26": "5ADd6S1E4BFmR43gv3WEQtokL8HHR1Jm79PL2XsYpk2pUWpCTvvadABw4WTva8EdwNGJcNsLh5ExrBuSZm7Gi4eY",
  "key27": "29iFRYJJBcwUbnEvkavXAZS6sTH4csSRQzk7GzKDKqQ9EbhKvcog6QS3n7nhuaddMxB6E6Y6c192Z3jMwiJEWGgR",
  "key28": "3b3YoGvNzuUbhggwdzptdCCoFRmqeQGRMHZhfF1ATPNSkXzPuE6DPURZGjKoc1ennocDkaEFeVHEhD2UQoSzhaui",
  "key29": "5ZivjgxHfs8k8azqsH4FBZ9jT4Wf6WeBT2aU5mkwWW7Xbkh7d8miqpCAe484g7f88Nt4Ny8oKf3L1ahmyyTSVm55",
  "key30": "3RJMKFseyrmvZVRKCiwusG7CGZoWvhAPKWS6jXMqAk8ebaujjdXaGaF4wmUL1eeBuwwSWfkAzqt5aTjrmV1eGGmr",
  "key31": "4zPW98ZZexwD9R6AEaDETHw8aaRBAu1CQzwnjB1cbpjeXj8UqrJNahBBewhENS8G1fkA6FfdaGQgR1K6j3Sw3hrB",
  "key32": "muZXegXxdKy2Dj9u7Kh87imanij2qS4j5WWg5QafuQcEh5bzQT9VvdCAGWvkG5tgBczX9rKidiDxPhW96KLVrFZ",
  "key33": "25XqaqGoTQ4LXSPQRqps4U6QCuPGrshYrP2JXZgZcdyoYJcDWw6bpQ7WejH7EUDy59vKCW11cz7LTZszLfswPumy",
  "key34": "23UWuzbgreF1WSmN2fZrirn2HbYZnJWX4ZiWAtuu36QVbEwTruFvzHmM5UXdGocAqC7v6py3ArTyGvPnwUTnjzTU",
  "key35": "5oPDc7Cc1wUPExRzBneg3y84rFkmHNBtHAJF6eRAYgGFo2M2BnrTswGYbeusymP5srckswGzbYT4Fg7eJYpLCD56",
  "key36": "4GUyyxGCtQ2ogDMbZGGiWPk2PLwdpQjEJnWJ6raX17oHzFQEawtqZRpr44mcVSAA6SPiPNUKoxAfWZtYaswz4AZ9",
  "key37": "bSSuWkBE58rTayzWVoRt3uQserjhSVBFkMBwmdZr7gyC38MS3KHksaeFFJdrzrqX11Y2joaVvuEAVrR4nkfGmyL",
  "key38": "DiSwkQKGGXGLgq8H2NZGPfyEHL7wH2m7KbpGHWyP9VpmGu5hdx2V5zw6j9JZPGsbby4Vekg6UYnK1wLNHpM2r7h",
  "key39": "2atyLVwCkQNRWVkqFBNu2e74T8g4Kgt1oC4KbwViJiaEtAN1eV2BuGouDE6Lco4WkyzPqSnguLtY7FaL9g3LHBHK",
  "key40": "2KN1SxkLMYrPS4VBBhG7gR9e9hRjwRRmZisqPoUfRiUowuc1kLg1CZJVjJ4t6uRckxDxnEB4TBUFQaD13wxvt8an",
  "key41": "2pkfZnQZtLLPumwAN1VKspDZqTgSrh4UEh78Ztq8wwExuwUhNJd7rNFwS1xLK4KunVVXQX2P3VjBiAEUop6NTxNr",
  "key42": "MXHFqN4bfnTkxshbAAP3dWE5zfr7z9XjEYcxGXBh5FtDPLhAFtR9Kf12CQoJABhsuMk8Vipct7CQMdoxtD6jNDC",
  "key43": "2NJ1ywqhrjU8M9gHykSCW9cnQrHyRqe5GsKeA6bGECPaFkxphkfwX4bREKBM3k4UnxVeVYkygNFUzRxjx1EXqrMB",
  "key44": "4xUCRAkc5DLfxWHiZmXw4EogSnaE9vwuVkJqXNSstmnd2PcDKFMWtXVToqtK1jaSVhYwEKKgcHZQokUq9yysCz5D",
  "key45": "3U57SmAv5XLTMnA4kYcWRR9ASuMS6d2tZCWbobSQDZLRuv5yTTNZrpWKRs6qALbnAStXynnqmcxNtVwXsMM88M8Q",
  "key46": "5T1qZqPNXYTdYnY9rXmgNzVbkkRM46XxgrZQtnCtqpu4roXZn2PXbhGuHrUaggrwa7JRP8zxgv932demseVuwYxY",
  "key47": "4AzqpjmmVsxvpHdYXAhSUHHkR4iMaq8ZWFpGh7PBTvJmb73eA4mdERPQpcU4vrZe7r9gcNwLdwuJUpAGvz5b8pLN",
  "key48": "43W2fxL4et4LxwoHpN7ikrY7f3S1C6wHZHQTPXkV5xNJ2QTcAX48EpbrgZ9wiGdyKCsZ4bJGEKzyRz7XZFdWufBT"
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
