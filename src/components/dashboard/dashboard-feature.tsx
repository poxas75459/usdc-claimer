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
    "52uYD8nAtsgpeYANHxJ6PoaZyqmZUZmtLBQm3S3ncFECvqZeJKjgZhWZhpU2tVzZBhYJQrLypoe5JQ1VYASq87bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pk2J7Jn3QBiUDJE6xjD2bNNv9noSZzP6KJETKudz2HAp5i5UL5iQKT5x5m9zmXxgt9JcuKBspHUDgGwUJNKf55o",
  "key1": "4tq9EzY1X93U83QN8iPtt5bSbtNprWgRtuTfPj9KdaAvdw4Zvc3c24Y4QXVCbUP8SKveSKJTuwp5Ldh7HS8pYQen",
  "key2": "4jBqqNBz9om58QMzYDBXdoEGbaTuVob6P3DYYMR59yV3M338vVhkeTwhccC365uak5UiWSpud9J2xGCnHjZeGtDX",
  "key3": "LEfihGYvURo3h8FgqZTbNJq7kTikYq2iPtuc1dyUU89QvTEKJ24AePtPDuZz28GBDmQAbhg5FtBvMNSvPeaMBnK",
  "key4": "3zej8zfHMVe4gAbKqjzHMNjrDLs6DtCedEYVuAbrABENkNqRZT3qWZMuJUZ3aHtiJ48bJpp2M8SStZHyD4hndbaQ",
  "key5": "4qpcZPC65ouoXdtjZqePuMucJErgWDTHkdQXoV8kLT7xFM8e1BC146fVM3N4Za3vJjBjvhcYiqe1Rh9HFPUV5THi",
  "key6": "33aQz2Ny2qyt8GRSGnkeT1nCq1b6FJnjaDypz5aU6DCEcNxJ6G2VWWS7UbxkM6fL3HojBt5XCF6hCu4wwNk68gi5",
  "key7": "2a8uLorVcPZ14LPhgTRG3zDThoetGHAHy6FSWLiUAXwtDJjpWnBYASGydYXuiwbWMWgdfipw5iqioui9VyyEpj9",
  "key8": "54vpZxfuu4WwUgfHmJS1rBW8hn1wsZ3V7AdN9rv2WU6ozx56Xy8qToxxDvZtV6PK9ksVGZmqccYHY5sP6yDaV9YG",
  "key9": "ccWmwkokNNcyPFfbppoctx3GdMnnvgz7fuSkogo9NuceToun7xhkkJhPB7f9vMEAAHZygzvFhDgYYFd8u4hMFCh",
  "key10": "QPhpEmkZRsBeEsW8QR5BHb5YVZHRke16CBDyxmMotxfPZB1Bnah1uc5CBQCpp8kG6DxsZCxy3syWyxf7FSTA6DW",
  "key11": "5pFFVckQ2M1CyMbLmXHNPpT9EyZkkrQtuyCvvDECaFsZ4VkYWe59eZ7zFvjDBYnnvJdvidPJvHiNbzSu6y44CR1Y",
  "key12": "2nCVWfkAbsKjDgNf7iFq7Bjr23kuUNWnPLcboYuH1RkD6Sd3rZKvDu6Xnfwek6Q6vwwbnMhJjkzf8mJB34LVuZ4G",
  "key13": "4PZh4dixVQPnGLMFaLs6aAJVt74AThNS35imKCG5proAngS83ai6o2SmouWGoHZDNUiJJwTdc1cyQFciA3wxnz6j",
  "key14": "3v31DdpEBCGA5wzR42HYJTMgCAzX8EQRgvPjHt1rTY4W5ZP9j1rMkWcTXZm9wZCMujbGEJDHfvstjKGBm1bmHPsW",
  "key15": "3jn48uXvgLf68RMNMBXvRutdx3xkjrXeDyiXMipxpQCnRz6u5S8ghoAv5SnhzXKdqLSKkh5bEKFppBDA8T6emdYS",
  "key16": "5W4knwrCF4EPuxQpgopL7d9ou4FVveEgQitoYeLonPxiapt5xvWGjGonEC36cRoCgDj7snSQcH7j7wGFpUmZ2dWB",
  "key17": "5wM2LL8833QJECLXsgh9SsXftmhM7JwQkSfoEFFv315auaAwEYrRfHRn9xE1fdwh4QhFFrFjodtys6bDE7QzNAzv",
  "key18": "3ycJEjNeoeGB9a2LWv7ykwMh8DoABhCCEXeVUgMwCUQvRB2URryiVRUzagcVhqcPAcCdHGaWJUarUttCnmCnfS3S",
  "key19": "eGaXcVwKbXUtR7cnSZCQfNNzUJhf1PayNs79ZSPoUACxkwf6CeX5N2NMz1JbSiYB77SSsjtthgehgiLLNQtcDc5",
  "key20": "4gvGm3iRR3kDgnnw7ucekpZB84kC8yFNyRECc9GcKFAzLYsWtR6EVo93QQkxNBG6HhcjLQNvsD3URou5GPRKhDMo",
  "key21": "djqDPVX7B5dzhRMQfsJtQeVkFh4iMoNyuVp2JKv3UgJCbmeCarwimuQ3DMo33bU1ZKUTNN72mKGa6NuoR5kn4Jn",
  "key22": "4QekZ63u2wvXaA2h1APTps7QCsz7k5D4NJKM3KhgjWygCveNkzdMxcYDhRahwLdxgrYh9MqhrRygUzM1F2HueiRn",
  "key23": "2Ck5DsUmdT3P2E97d3AayMcpwPdhtTLzsv6z3gyNa66JDeoHvrsXZHCZ51zhDowjESspMSNRnGtLg5cHLTy29xAt",
  "key24": "4PQVdvsEx34DoBU26XtTZ6UsSxBcTdttb7NcZZ7M7pKtJRLNTfepAPxXpEHs35QpwLSiVSZhL93ZK7Lb9qRPkok1",
  "key25": "5q7Dh3Zda4BTiTzBdPv7L3Ht6rDt9SZUvZZpYAgyEgrRerQoDhJD8UH8vFat4xkccJ8dCcqitfcL8hnde2rg8iyt",
  "key26": "4dSFAjXFjayNjjRiVgGMotW7afyvjZcoZGQh9CBJFyBeuaZyS4vjJM7CgRLScT3qSiLgy1UcXJFT6TJUsTZyYye7",
  "key27": "5KxkNchFeZJhCrekd3VzrNgN4tMc22rpChAhzrHtFhTyCaNwqY852TmpcTbutkVpLAbSd5YGLsi5J3yEp23vP629",
  "key28": "4zSBKiX9DQfrM5EUiKnZa4gZscKubGFjfHT1Dqn2wXNDF5caasKyJWypqxhDwo3e24LWQd7vmcSi9NzDMmwTudiE",
  "key29": "5VBzJh1Vo7hKk8huzDe25GyUKRH88b2E3RSYX6C8fHr89K3NGYazYERy75a5wSdshuHex52qXefL6NoC9VqpA8nb",
  "key30": "4q1MsRJjhEguSM3jMPhTu3vLxKUJaz6BYTeXfyDMkPAQ7UbwQ84ar51EN1tS4jm9UMyBRMMwwsBUyDZrd59okmAK",
  "key31": "58JSYSzyN3jTF1dch7ib2zcNxJuAFaZjuZwtxJgTkcLJRQcjMUoJqAgQdXyTce3CJMdZU826DUVot7vCPnKoJS9F",
  "key32": "2TLmjvcKvVeTTYmTucu4cymhpN33cc5cpRJhq4u7itkDd7gSh4vYsjgvNemo8M6ikrqw2Scxj8hZWy6VSXyQ484C",
  "key33": "4LzRnoPwtDcq4PFXL65pakJipAXtnbv1G8Zv569Kvn4M4TZnEv7oEkjFyAEJim7dftf3YnMKbtdgbu5yZC7UrCUm",
  "key34": "4rUmrUqQS3og3EMfyZ8zjwibnYzFjqSPCs3p5MEkviRYiTThRMrYkAL1gpgycXw634A9UR4xhdL8yjETFBubzz4U",
  "key35": "5FV8Zd9sxQLWMaNzKFj6RcySmmQaffxzVZ8Jbr7MqtTfKpDRhVUVZdjHbnSvef5EH2unevLL1GXsikwyRwhQ6Jj6",
  "key36": "67FF86rqoJWjGg6Xb3GCkbxer19PmTD62Fm2csNkkvGW4swq1hqUGTPGK2BeJVvKn23T18DVQLhK7jAgHUxbHhE3",
  "key37": "3wjsKj2shnSwVpaXvxobdQsxKMUVtCLSj4tE3z37JwjBVDjKqNfdNk3b7HcUftuwnLFTYAnoXLyEebsNwQVj3sVh",
  "key38": "27cmjd18SpZqR95tBRLYT3LCFhTneHEETpxvASUfcY4LY9GiRsxFcNa3rAPpug4CgYmmfnjVa8sxYmEDiSBDhUhm",
  "key39": "5HYDUUv9mxeRPAm6fqjoDvn1PdAa9WrzSNbNwA28ZhZW5iDDANMBTkTjE7a9NWPJdvVAFppH73ArkhoZrqjWrnw6",
  "key40": "3K2HFRFP8ymkDn458wsoJv8Fq2LpqKKokAahhWnRVPSabXjKgZ7cx1yyUxE7C9fu2sBqk8B1f7MFLudo9tufBTav",
  "key41": "5XJLXwjt1niYVnpoZ7AD7q9nQsfhPsiMk6iVZQuy2Mo5QGtQXDmBZ1SikUg1XzLf6giQLXrvc3kcKgMmvGQ8au77",
  "key42": "4peC3Z5xz7Y2MQSbuAookqWAMZHyFkVDvhdUkyqsHaQ7ouYGCK2cuAQqktkqoNzSPoWFEGh6aG53uUJ4Y8vgkvf6",
  "key43": "24RGhQbs7Rjkj65UEkyZqPc8xxJD6F7dh4gZqAVzVzEcLdq4jvTtPLNM3HdzzuRtRtRFStMKZsVXgBbJMkvnLuQZ",
  "key44": "Fk7JztZ512oXaWqFqagUkcSmkMuHHScVLra6DpgJAdQ7vyVMPSUxdvdx241qc3eXLagYdKFPM6SkDMmG4nUkMtN",
  "key45": "5f7uxdrXwnmUSj5qyWJ5EXa7ZBHBE9nZqbgVaJEnyoGFvVnJYinL6LDt7D6PQoYqPLyX3MWq26KtiqxSkxfogtD1",
  "key46": "5scGUo41E5iVuJxUeh5yKZpiRv5959WX9b1yXjUGJLL4qh5XebQkBAs1FrHTh3nPkb8F6SQ2z8u5jHKJoZxMEgcV",
  "key47": "42TBXS392oS7WiX6A7rXKM3U3DLY33yYPkJCXnogJnh4XWH517z3iRDTZzp3dVxidMMY3hnMENrgHkjvhsWFqcXM"
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
