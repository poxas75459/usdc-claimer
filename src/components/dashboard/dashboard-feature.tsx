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
    "4wFrpYBGi1ga3EUZE9K1zZkrbMwq7SAe9hJW218q6fYSvA1brP1vy53pFJq8W6ptaHHzFHDMFw65E7jrqyjQw8im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6wXJLa4sHTsAf99euGVj8nWUfhsMSEDhVKuyjZHVVGfL8nJJ4JAhfmH2dEf8VQShjeWfuwA9i74g96mnovAQAs",
  "key1": "FHLB8R51pXu3YhLcBWxNuaBVTsnQqK3DLwi7GsxVWR2pA7Gdg7jKmvZC8BPnaQX5nfB9f7ZS1eNY1i31bLygySv",
  "key2": "5kiDNsxRARMHrKCtQGgJ24H1cd7Ha7kjuqtBjQyjGUUAFgATTtsVhq2squZ8FvN9ycEu93veZHM3bK56ifUsHt4S",
  "key3": "5t7DSo89xjGi6gwPFWAj9ZhJDjm24S7sWfDHXAwAAqkm1ym7o3dTna6MYJW1yjCw25TEgndezUL1K7DHkW82GCtc",
  "key4": "UwRpzSuUYyJS2GvVN1VHwxXD1jeizAKr6q49S55aNTvouVwVwbidy74SCqPuRtxLVJyfFhaKTggAcrLnKQeYk4y",
  "key5": "4Xed9Nop7bfzR9t5yQ3hxazJGXcUMjbkNkoBKL5Fc4Cebtwryo6YPHBt7k1Cr15m4CMmnySkoh1SSyiQXNAnhsCR",
  "key6": "3wSW3wjWdsbFeNMGT7UmJMFBjg6z2Y5wYCz8PNja4B7HrSYwLJq8T4KE4NmgTjbhd3h6G2kjkCWfzS5Z5uS6bst6",
  "key7": "5Mo7HUnJgEeRHkMMVJSGidh25jHmQgqJv97fdsRGdpSKcKUhSkpTY6AxUhZfNP9w9qR6RJPFsZepQgx7iJsWW1Uc",
  "key8": "3s5D4aHAgFFf8fjd6qkfVWWccDap9NbHKoTLwiqUzAyLnEkh5KEoPevaVL3eVzZEgtxB7i4zVgGt5cBB3Zwjm4BZ",
  "key9": "48BAjLvpceY8z95rosoKLQt7dJdHkFWgjGtRVYRGGB8HHSikWkDLMHAqacYeQ1JDgbimqsWiP85vtPnvgVMi2U2L",
  "key10": "qAcaJPnqqR5f6kQxvTRxtbRc7CaeTBvTNCnDrrKDisv9Ek9mSRu9ufDga4SygXmGpLZyhAEJLUkw3B15P5soZcc",
  "key11": "2BhP8Y4dqn64TRq73rEdw6TtqCksXcMcytch5ox4Sgf2vyeChc1ghmJfYN8JTe6FKkKJ7ntHFdMNydgxyyGChD8L",
  "key12": "27vXpd4xY3eJvexhYXBXBDEXw1JfuFCDBsDMKDdxGJtDVn6X4UyARweadSUtsiNj4jYPZVAMEtw8h1qPSf3HXUWx",
  "key13": "47FcYDze8U82g2GARNTmRcbmf3Qa3Z4JkabKw8XgTNGz6kcev9kZDeEYxe43mgrdFFqnXFFiVU2gXuNiSwKdcjAV",
  "key14": "2B7VfHZoiEmzeHv1FGj5ZzPsXajqpU4WZx5M4KbFb5GJao42MfRVULSjuCDNLShsUEm1rhVpLv9t3vHcimHvCThj",
  "key15": "Q2BV2Ts26Jfn7wByffH5Sb5QSM1Ew6ocWgFnca5Q1CGwYUSr9Vn1xTdVE9M6PsHdG3T6JerDzKqo7Fksp8BkB8v",
  "key16": "5ibvKfjYkwC546bzN6za4BXCfnuuPcQwNb1D2eqaEoUkRWm5x69nzzPShCzRD4qYFJH5kJqCwwKJ9y55dYJn17m2",
  "key17": "33KiYggWfEvvMoSwHxta9jcKvZ7BaTMZrxkwAJw4PG8Cg6dBnDGoEvBXPiPug3TWMSj3uvS6bBMqZQCSYB33KJ8w",
  "key18": "3w75RRUJxBf8GvXXX84SEwFi3r5DEAziToMzFohkmjEJmTkypPz7UKhm633sMYsMMBF52e6tJ1DhcTc316khzH37",
  "key19": "561tPBhv9TRrDU8GP4PbCbn76hKXbDYAsbVkrJWiSdjRPyWeyVZc1QSZXaZDpRvnHZ8mwv5vS68jxm1FT2ww6ZmR",
  "key20": "5wiCJdukqcNEyYfp1zRs9SS8M4rHgkrzBnR2bAzoEg1neq38ix6wKcjn3kKLZB2ix93gseXh6htB3AZHXDLXX2Qw",
  "key21": "TE9ajsWGU4kj5imxeunaA8DTArHMADm2MT1DisZHcvCsqZtcAg6xgiLFMekdyNqDnur5zc89TvjpE8dyYUGDSq3",
  "key22": "6z8S5S33RFGq6ukxK7x3KXiaPDKX8MT3jiK1igtXJVyB1k6sYNBRpVpzW1RqaZmeSTT2Tc5rhSELnJwkT71qgZ4",
  "key23": "5tzVJWYsUrHLJdmBJrbbCPxiyKKp6cSaX12Lo7zVDi8gmsz5c52d2MqtKBrWmBjjMdmuDvusSNQSijeb2iPi3gE5",
  "key24": "5WaMQReXv1LMbu7bbGb2vXzRuJPfLgnSSy6QiWjxRzbj8LKBaui6FzAotZZ1nqiZeosiYoXJy4oZARWk9bxNBHs",
  "key25": "BM7f1gBzELkUaBvCYbZWQH8cjLpmDKgkmBo9Vd17TgJqo4RkYCFemHhYcf48hfQpUb4WwH17xjPRXhJVmsJuhsm",
  "key26": "22JLjMhKbASbxHttrcAnzJoccrfK5ebuoWVHtatJuBwXjcwAy2cCg3T7qUFG3NaJ6bWYT4FrexVfFTZrYeegq75w",
  "key27": "tWpeWSDg7drsaMErmiApZHjWXMFkWUSJiG86b9QirJMWwjDd8m8vRGWKo84ThcPSCyQX4X7DsN3fn5ADNWuBGC8",
  "key28": "2N8JUHitRrEUWKboELPmN7sVhHurCSqYv7L9Vmk9jmTQbwSiB5RRHQ9XLPkF9EUGNszarprHuGJcMdwdu3ySJmW3",
  "key29": "UpfneiNbKSat7JkhZNZYYTqoTogURumAQ6Hyu46V1S7NBz7HoSQdPmbNCoxKNgT7TAQPN4ayGS3JQhFDAjqUv2H",
  "key30": "53KHHYMnqJjEwy9FgQkAGTJUwymAV48sG9gp8EEKLFAp6UBb8zhGiQ2337GfzgHKsKgCAWEoJBnSaQPUsPEv8mj",
  "key31": "4bsXQdMeB32BVdeS381X6xgt7BMtaVPHmT2MqzLsFtfmozxUhbitu8Czh97umckQgFdTnm4gRnmVbmDDdxRj6C5L",
  "key32": "3xLCgh4oQJrz1YWPsG3odEf9DyRKYC8EB41Ydk72JvbrKR5xgaSPUMJYwohAXbkxL8CBtS9EJ2dLPkm2Gj7gB8Lm",
  "key33": "5MSDJsmyWH4miu1gaGBNpX3ZU9SUk7Twb1CLZbJNQ5Lt8ChTXv3Hy4w26hJ23YJnfTpdJh4aE648Y9RX9CD8mS6e",
  "key34": "9KoHTQct3qtGnrUPgo7reFh1nqhc8Ui5WdFqpmXbLp5PcH1rhm8YBMTqbk43Q9g1LXEtqZEDJGhFyrfHh4rYrdo",
  "key35": "4UXFV7Hq18UuEH8jmHrWCdz2Vznv8VMqWAxRqaC2hy5X5WDgfdzLV3HPe3e4AvCaUkUvbdRzRe1nza5hqgm2AKbv",
  "key36": "2YAdiXMP8zHbkyathU4cnJjb6GkBkJj5UYACT1XLevunxhifSvPEYr1ZAShoX1yEfM1XMCrhvYH6hqu6gZ8JyZiT"
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
