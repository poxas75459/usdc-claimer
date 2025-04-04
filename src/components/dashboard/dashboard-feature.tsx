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
    "5iGPhJv6ZRj7ErKFjVMW2ByAHH8Y3Xr5DREcWCpuQa6y6vKTAVUVxj3a9HpFKTU1jYSkFkRnvJoNUSCZdqQggXaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tb3Rgde8oYHcoiM6V9SCGPE9PfwcEbtbUwpRd5uDVA6DXqSW6A7rWEinWyNXJ3FkNPvb1XM75rwcLXbW48mrTYN",
  "key1": "5x2vusBoMKrEFX57BDziKzjN23VJk9Voi8Hd8ec2bX9VcmUorcaA5kxHivLJqji7NW5QkbhiPuHjcXSEr5BjCZna",
  "key2": "9SNkKo67BuJq57DgEN4QVYKaox9zSsTwzCeG3nTBfztBoL2SCpCcxvXjvxiykpXydDbmtuRffzFGDxaqkJPZKAK",
  "key3": "5zwERBzvQTzJQZ2QUZteJCyES25mdNmtiG7JfKNrBLbDryHYcPq2F5dxRSAeQzvSWbmtVccdjhabiZY2pgDyT11D",
  "key4": "CdqQ4YKEcc54o6UBRnDQHkZs9GAPGZ6TXftqZTyQgSbMCMyBjTSRZiqh5JdY75P1jbaAW6BMm5JD2y98FTfsDHT",
  "key5": "2arkewhdDDUY25C5t5ZaaUhefiScuPYaHiZWqDXcXEd4UoZrsqKuaPvAk7wo7YX72kv3VPXuBtMESc4QCXudc9L5",
  "key6": "2foBhPf7ij5LsD5idncLrQTaxArDttohgXJn3xZXFnF2n1PpjoDSFjLUhRmr8P6h4thex6jFFkn5nVrbYheJzq1h",
  "key7": "8YDo3Fy3ZTaMsciLao8Mt1WDrgyzEQd5ZzFsDK5PooYALH1h54pYhoWgT7y6GtrbiwGxsgqcXHnnJqnjYRoS5C8",
  "key8": "46g21JiH5SDVD7qnv6pVxqg1uNpqYGQkkw3u7E7uYZZdXxGcQCxsVEzkDwnpRZP9kJXUxRwQqjKJhQsTejDgqKjZ",
  "key9": "Kz7uyctNfPuw9sQwvaLU2eTLQtGrJmhyndJ6bFcrhJjN82PdDBq5NyzcWiMtYChppGkSQm3j3D5aeHZoo72c7Ki",
  "key10": "5kG4gwbN2nvqTTwvD6j37C8i1VzHh5Z1T4FD3YHAxhSH6d9TdKAH34kTzjmWxGy6nMLg9bPXdmHUsvymLgR89Yyc",
  "key11": "3F8LokBFPbGan3ZTYaA1bm9gCVeLGki3KTg8yK7wqkSKnwvHZVabMRreCQWJgejnphcp2gLdNiVihDNTeZN37E9D",
  "key12": "4Htz5nwhdqP4FJ4VJ273N1BrtJFQmoD5RyJoZHVSXHtri5jQy5idLuE92nQ8hkwh55jdNQibn6xtGL53W8qf2Aiy",
  "key13": "48HZpPzT11vxBm2Sky98LoTYV7jMjgFqJuBifsmPu9DuBp6h5TAPCkZn2N3LiFKVTLU9afjYTzCCENxhhbxWyq4F",
  "key14": "3AqatD1Yzvcc3W8P185oa3vXy4ypHbUzh4BMkoS4nV6ERA2G5tQPdrdmbAMJyTY7ByMHh6XVaGyc2551SgdUHvsS",
  "key15": "2NSYMr4RmpKTqvygfB7JsCrBae9BqGGb2rpUCgEDTZoSdW1wffhfqLQEw4ZzT1cB7caCsgV6yvMtfEvMj2ndQbHX",
  "key16": "32LJnXUNvHNk3vpAqMnqJ6zWMXB4ix3y9h4Sd1ArijzGBkjZ2kfyBPJrb7k5gJy3xoZLQ663xBYTmrpimG6HbA43",
  "key17": "3hmbygzqx7boDzwBLjNVDMbNAzBgp3DBkswMnWVNVZsrAqVxqKgC27banNLfGsH2nLjnRs8tqdxTEASt7gnZFt38",
  "key18": "4fuuPZM7jg6spP6pLTqut36Ec5x77Y527YLs5i1HyBeXuPeZULx4DxV9wZG69kB2DaDPra7wpGbNxmbQ7F2YzyGa",
  "key19": "5rbEUfcNz7fk1FWhDe2AdhWbJRvXcUHN6r3JhgC1wSfnNyk8stHYepYEfwTfinjqwYFApi8MW1cGek8gMJkUayKA",
  "key20": "Eg5f5vqQRzfsHAXXeKwVDMSxGqd73Yu5nPYS6HmYKuhQgNHvAgf6PCEfwQwnSjadSmcknW5KraoH9oPWCi4XN6L",
  "key21": "22Bj6cu2MDn6gyvF1wWdyroLDm95f3QByTifqtgZEweTssm4zzLMg8pdL1km2rgQJMEugdNm3m79sz5spPBTTpsc",
  "key22": "VhfLMGZ8DrBcrgsc5uHGLDejTJ3SWUi9EMVKszk3SJjqHFphfztQxbUvdwhU8ZkParnFEBEcjhjiuS3PutToEXF",
  "key23": "3uZASfpgufsNeUVYZFhcbtvoE8gWgBHipTFhRyQY8QdiUFqiusHUW9NSrAS1kZcGG7mZWRhn7PDPBBNSuZkuLcwG",
  "key24": "4WWad1SP3ABWGsLG1iAspGjYrb1ddtyKXv2vpcUFb6MkppSCDzyEJDCefK5i2Ad7AA5MkZmgfj6z9n6GyMkQmnQi",
  "key25": "63CioToFLDL5SNS6WuZo2UA3mLW2A1iKs7rgHRsbnm1Uw4U1vPzgB9jFAUieFsMutcmv2MYE3Lyqvd6zLBQvTdNE",
  "key26": "36xQk1M8EFUJfvzQwyrEB4UDtB8c5SsT7vKWi5NFabE1Exj3Q2nfZF7XTE5bYwqt82EnmkyhWiRE4N2SQ63a6oBa",
  "key27": "23NzG5TwGUzGgvp4QF9qFwuNYf2PBGm8ZMJSPriVvBqU15faiPVkckpUeQDnZC7ZHdXQunJqpQfMezKzRkSsL29h",
  "key28": "PEYzoFN2KJoo1kagG781t2rbetBc4y1smR55LCKJmFgZzgkHk6Y8uAxGuTN6Jh9CNDoLWMxFUefEXW1TQEU9uSv",
  "key29": "5gmKBegsMWvbpkfnfFGEgHdVuWLUTtvwizgC1nf4BHt8ZRBpcFQ5EaZv9QrTP8v94QKSG9cjDJVS97g5L9neXA8L",
  "key30": "42dCBMaA3aanJesVfYF1ZS7nJ39dFjRm2R2RQ9rHLEf89VfVhcpccgNQoGwaVAL8bSCnq4bhEohY1dfaSbwCbZih",
  "key31": "2VUzsj5hTKbLqgHNhTadpsG1Wb4xH9d9hNdApoTyobHNn56U6VUtoADDU1t1ELhRa6QKphPXcUa3uxyKotbZGpmG",
  "key32": "4ijWFGbkQaF7itBBvqpUvMjuVbtbNKa7oWUCFrUCpo2vSVnEFjWT4PgjUVYxqHohWzhZwgUkT5kZ4U4QB9sqmtva",
  "key33": "3hZMxeiw4C1LR56caGKMnRRSq8a4594RvLkrB34YVGS7eaHcvrZVWkRoM7LQzKJep8FE8ofcDZHWw1uMcduBjeQi",
  "key34": "3NLMVQWdjeH29Bg18rzx3ppfK3PFsWuuqhMz2CPJnnGJ4zdF59wtupsqbhCbcuk5b9oCM5LP5HoznjyPr8nihe1P",
  "key35": "VECeXAbZC3uMyptws2TErkWcdZhonRGj14daALsCPpa1w7h1pSdGuMoa2PJaFMtqVdAYxf5s3jWkFS7Xdt9DaEP",
  "key36": "3ebchVRMgezKzAb6SZQZG8F7fbU3iRr4vEdME3XdyZhtm6D8hZD8hsdAifob79QFGd44Aexx6AaQkVfa79CLtoVZ",
  "key37": "5QkEa6NpwEyVN5mMinueufsA6Vpbx53vmWAecNbAbMFv8tcsZZnVCCn8dKg3zi2n1baHFo3ceRuGpSNP9kFkkst2",
  "key38": "3D9ZX3YRhZ5Nnb8AXQHanfyLdiLoNrtwRKg97fdqRrv5VYLfhufmLaKaAb3BknijbB4tQAePCK6bvBokX5Dc4YNX",
  "key39": "5uKgPnPYMnFERe2gZAB8d1S8hyvVx6W4e6BQ7tEYwgGJrYNBNq3iSc62gZpxyfXudLAPcv6NCRidzN8u7zVpcopN",
  "key40": "5PfWD7j1XyU4jXuZWaX69yYX2K8NTTwHoqRjdwq4njbr9qPXmyBhX34J7FQqKZtVPu6DtoJ7DSZrW6wPqF9xxLRd",
  "key41": "5niTHgg2nmMCBkqYjDCrXKHu9vycYc24mLWoUQ1m1m98wyCYD6fXNV754qYBgH9d6214giJLxfYD1Mko8J4NSN7k",
  "key42": "C1ucuiyZdeb8pERsn7wBiMjxLUymR4W9ueEYSsqccybTzw9SzBnDXSgB34yaGjMY1jHwbi5dwmXvgBxK67eZ9o6",
  "key43": "25qmMHFEQ7JoRaCvcCi2TE83iTBaMyNzxq71sy1aopJxZzqd8Bb88ktutdJwFPvrpgKh6rF7gRg1MgCAevDYw9Cz",
  "key44": "Nyx61JM2Yuc4CKn5gUYFvBdXMRTBWkW48Vfa21MEP7o1kBVFQvKAHWPipMQDG1a3AFRTQD5cdKE5SPE3j8SNeEi",
  "key45": "3JVg5nZr8YHo1HvLMkAUXcUpnYxfZ8WLBraNapzRxH1Faw5fegyXKWXJKzCxtiDiBikZFDk9TqPRNRCHthixQAKV",
  "key46": "2Qu9UEs5DQur7LqgjMpFbKQHftVbosyqvgvAQTYkWy89SqSvSNZPWJh1jvjvnGs3j6PT1HuxcBokzKj5fR96swJ7",
  "key47": "45dXNKAA1zQQqBd2z4unKPVTebraKXoU3SERkweZ7hgDzzJyM6RKason9yeK8Mfv9bc5zayQ2JAThPzJ5FWnY8cd",
  "key48": "cvFn9CS7hHbruSkfdr9ViqnAPAerNcbETukDnBVSNKUxrJZJSkmD41KYCQTKpyaSr36zXCaNdRJ3MaPeGzgjwPV",
  "key49": "XVjNWsJ8eTFPrWmerYMsXRvb35RfTHRBCBdqqvXnvVod3fcbbNZpZdFqEVkycgnTLPyQ42iKLSjcE1rLSD3GNHo"
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
