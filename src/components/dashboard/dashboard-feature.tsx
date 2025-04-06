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
    "3658ipht1MM93TiniaStK5EB9nXNeQdMPzX8P6eij9KwKmbnSzmVXZNqRmQECawy2fdNe51d6DTjf26q8UtqnPag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upYjBxEuWJQ8HRM4PJhsVfL7ttUa26K6AcU5FA56xi4prQ9vJ9pq4R6BhjdLrY6HmM9dFWLGnW4q6hje5kBE6ym",
  "key1": "2LpuqRo2ieiDtvgRzB8xKj6yfv1KqUFYcjom8VbKDDAe3625qnDpDvXYvYhsGiGrcjtxf3qcdFe94Nnq5XDNAXRT",
  "key2": "5ybq3WyD1DJmW9AGbSSkG3N8xR2SkGR9Jcp6g6PkAe9ZegR3HJDmLV5tM11Q5X1uxUdJKJGFwWnRnBBH9CsWbuK7",
  "key3": "5dnBYAesPKQ9fYNe7Ln4fFw3KufQ9C5zqzH4HZBBE8PtMAVp1srRGBesvQexrBgnQevbcTxLYE59tyLEssSNsKUU",
  "key4": "5Mi9d8ui3XzbHnhjKRVqqbqrufcQfLQL1zi4tWWnb8pVojGyVagm9Xn96s6PFX4yUvrEPoec2wjuBrwkYCRJepTK",
  "key5": "4si9c187Hwx5HU8k2CAK4ctpZ48eHaUxr6BmFM1P6UKkCyW8wGDxQqB7h8Sp4M1urSuftj51J6K2jVyZeNNUH9JD",
  "key6": "KZwrZQtLA8f7pmEtMF79DyCFp1NBxXzjEERA2HxmVUuu8rcam6JK5RkAYecZnbZLfNtkWjjKuoTT5FLp3HSbBWx",
  "key7": "5C1fS6EWRaD1zTwxYJuQqEoARPvsWK2WnScMX6vEC5SKznzBE8DRvBYvtTzhJtitKD5ZS1QYeTDPZKJb2n6Zfp77",
  "key8": "2ZQCmNQxjf4yhssBbuFuTxGphgHwaCtAg3VnPuNWufqyHazPX1hiLfqojXSWADsHm4ddSfKXWRxGCud1rQUzh7FE",
  "key9": "jG5Fk5FcKK5WdC5k9a4z17WhxnJaKmUrDTNCyRZSF33UMaBFi8TSdxCqtcXqmcico2PRncbCzjpSBjhv7qTKbgc",
  "key10": "2RRSouquGn5FN2SbUQmpNxqydmFwDE8wDQPkZ6yazKKtACkRF4ZWEwozY9y8tF3i49SJpJfcXXk96rvsJXnLSLs6",
  "key11": "5G2hcdvPx3m22DMW1d6TkMGRJuWRctjeXoESSyFqT6LjAByMrYQkM5jhN4UpkjDdoZ3BDnXXf1sYXwhjsgth6VeL",
  "key12": "3acCFQY1HcDDdesaHTd5fcCZhbnMPmwmC7kSuCp31RqNwzwv8XTkRyE5YqZZjLVcp6upGe7kDoFsDYSfcx6qMt9n",
  "key13": "FceQy15vHHSkAADawSVXsSWwGtpLGL9b3NGfd8RdgkhfFoAcuoWQ8WyKUk7j84zucBAnH5AGG7RDFCoREv2ybbr",
  "key14": "27tGzLt2fMrud7Btk8pptdTmvzNCe47D5wcusBmm5V3TtiPM7hXuVvJPiM4UaVQsyDHwvQjv6onvDJ4qT2LzafUK",
  "key15": "3Fdi8KbEBcUSkEtJWzQ6QYDVtBNJ9m1grRzWLC7Q7oacsm4owRX5daXB832pqaSCbgosBtJiVgqYXs2x6NrneZPX",
  "key16": "3p669vNaJFZXGwLdaeb2yppyijFBaAk2znYtUug2LLqQNZzrRYRKPWxtt3eA9wE8kS6RMRYBSKYjHsfXDF2vACU6",
  "key17": "nxYMKJdPJ2Ujxcxi4zTrRXmSgYApwTbvzB3gL57sFRcLUwHqHXravy9zFH8fL2HuSZwwsBdiqoppzGtmJxyFffq",
  "key18": "FakNDTUhs7nD2KhvatD6fHy1vT5DT1K34K9ugJA2u3gwt5XyMjJZYvmjhYTLaHkyPeD5nG1HtXQL7iamo2pWokj",
  "key19": "6bTecCeciJLttT6RjpDeM2zCrvqi38qH4r8mebcFE7aPCB5ZG67twmFSpaeExfzXAKFjX9X1GtjAek2NRBtxUpc",
  "key20": "3g56Bjp9ysTbjrXfgU8jTcmeQspcAJrxZvDxcz6cdwoCDohR6VWRZ4uPjXYBUupMxjR8cMqTmXyaiFVZ3pUyPYgq",
  "key21": "3izA5AFxLTtmyFmC8PzJWRVfsvc9jtRpvX3hG4srR7JBTPiKqujv14uwoUeyNUauF3yZkfT4yLvpYK2Z8RF3kuZP",
  "key22": "ZTBEzoRecrGURYHx5o9sN8gsMQgJ8FpLFn2T9oscKWu4cR9jhDH8RMGcmMRSLDswkyLhuXbJVqD7dZgLe8JS81i",
  "key23": "3DG4LAipywZua8o6NZixKWDPTAFxBokLMtesSW8dCf6WXhzLbTd1V4nnqsR5pBV16xJaQ5oBzj8PW7UVKRWuRSMb",
  "key24": "xmSnTf86GhzjE9h3eqZ16vexxKz33LqwniBFXuSt4ZTFzRUtvfBcYAdc2fgupLnpup5vSnFgtq656iP9SKMEpap",
  "key25": "3ddEdShUKtTd2Q6xbeoCrg6SPBFW3edisALQ7dFW1dxvz6EbYjks5eSVswWij5EYNeRKSyBjEqdvcXLhcaDKKmRu",
  "key26": "4N5Juy1dn3Yd2rw184j1q6NvHyow6urprsPH65WWTkaK69J2EzdwqSmzkeAVosDv63izzVNMQ7ZYkXeLefLWu6Pb",
  "key27": "pQxWJt7awcVt69Fj4G1CZj6WcmFu2dCE3Xif8fqkWhnP11wFvG1gpz2HRNt4S7CbR9vbdECaMeewsTFyTDmAmWs",
  "key28": "43fU6UWAZfRydifqbB8Hbdb7Moi5Fp2qgQpfAxBbEFvTxG1JGQy4kSFqy1tzVjyMkkwqnpM5xnGkxpqmr34ws9LB",
  "key29": "2VHoNvB8CTJkfDic87mWQ585N8GCmzTd3hQdGqvHXquaf9N8nAG43cmxNCfUQs4hZyE3oK9bae539ewJCQWfPpy3",
  "key30": "4LvRUD9i3DhWqs1BU6e4KVzvCiFQCCFJoMpFSDSJGweu1ZmiLDcsYo6rx6iT4cjt1HXTP14vLU9V7NND5Ty6LRWv",
  "key31": "2tCZYvnqzR65D17p1gYbZVrcu6rAykv3cafwZ8sJCCmAbu33WHQQhCRit8TAPGTSRdbcgTe8C6g6gadnTRsG13hb",
  "key32": "f7nGiUwB9ZWLF4cWo87x3Yy72vrRqwVnxZgXDZ1RL7KDBvDEBzCribJm5EfcGsCWhbyAtnYAbzrSZRQ5pFoS4UM",
  "key33": "ayoTSDTD6hUKTbynhZdWPhXWkxBNqhuMuEjfWpQnsWRQ6AGWEy4QFqsNbEfjXMNy1zyVWv8tFT2az1cFLmrj9RQ",
  "key34": "3tYzj5EiUZ1YrPucFZmvGTtnejXBx7WcFwEYeMeABcTR2gVJfUcwE9TUBUPetuGPnPjRDwcJtUU6EYjyAYsE9pDQ",
  "key35": "5Yxsb5dbA6U83RRHFpZXQohLkE14wyV18pGqHT1yxHhwyVBk7tXk1N1AvcHNb2YV6fK7Pr1eSGaaU8XpCB5pQdap"
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
