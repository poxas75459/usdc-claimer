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
    "3ChKwHRgg3r1xAmodT365wMCPAkxCZXLzz27s12XHPTG1qbUq6f6do4droiArqp1S2UCjXt8Hv7P5S1Cq5eCQNfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ayszBEs6c1soRfsVQizoJGt2dHkYkskHDfJW2Raq2NNfEdK31rjjY83E3fRLsvXQLuqhammM46UjhMdDK1EyN8v",
  "key1": "svXhpx84tag824HxVuKgDyedgQ85g58FbGqtpepNaKExacEVhAH2naHX7SyEB25XC3k29whfL5sFxRnMe6CYLvy",
  "key2": "3SdJ1YGyrXV8LPHJjZd6DFfL7S9tLQdKq9fynByED8WoUo7AtyYqEWM8w53RE7pbCiVFrxUz4cXj6R4Mz9dWLPZ7",
  "key3": "3zGmgrYQfaNxkpUHkYJ7kLuAbwDLQqMcmniPoyK5M5CdC4NDAViPRFm5AjzTbUv8GkCa5QPqwEXgC3Re3w2D5Uqg",
  "key4": "5VJfW6Zpfpxe52tzwahwxghNhE15DY6JuNwMbBTfZaHr7DHZ4CC5ucD1DoMziPBMhyu6G3HTXf2a8HzbYvd3m5vd",
  "key5": "4p45MKhDWeJAJKtmYaJ7mpzKpVgKx98T6CbpHWAZyBRFNiep5wGLf9vDR8TzrqubPFWjrRPn3TYysCq1r8m2mJ9Y",
  "key6": "W9fMLRMEf4zcwYcJTaRWqFmjcA3X8gtsnjtATf2AsN1tf6w8ZLf7eB9D8aovjmR7bLEfK3YtcizboH3WuzxEvMC",
  "key7": "2NWu92raW5h58ePm8gUh7Gf4FnrVmvKWzsfcvSjWd7hT9WpQo9Xo8vkY84PaqtiES9C97ocQV1L4j4AGSqjtHECT",
  "key8": "3FyUcKfNbsRYZ2gjzDRj2J4tLSd3qpo12ABNb6hKiARHMeHGkg3C8PUc3scLjt2Ldrk94xGKsdZQDT3ezX5h7wjb",
  "key9": "2ezLo8cHNEj16J1fQDy9kLAckf8FCsSPdHvZtwn8J8ComQrdBgEEAYtE7hTeik39tugLoNuWGeETJRSC6rUvLpXY",
  "key10": "i8BNxSjYtjuFTiExA2HPznXsYqY4yGVZrJDJgKDaKCQxenjt8ZwSFb77hEna2PPmnhy9t7f14xWHEV6ModSQyg8",
  "key11": "4wyFQQhGjSM3S53m1ADeMq4Xzhrry5QGAsqEoR92CPGNtWcB98m4VsfjLy3xc2ZgoNPi7ECHz6ARkB6E9s3L4Vte",
  "key12": "4C1cYUqiiuh2o5axqF6q7FeJxNEySmiUvFfs7panXjuZYedbiwugwk2sXNdtL1QT1KEz4i4uubj65q2V6ZjTWbEs",
  "key13": "5vuJwCWnJBiW28A5CjKXPy86tUfq39BCafCRDAhNtWnZeLJ9jFaBEToKiXVvJfqbLgGRVVWbrNQCLLwR1xqzS7v1",
  "key14": "2pmAQ8JzRE1nDjkoJVF9VRqYL2tecmFcFPhXa5BB58obeXQzYhy6U1iVyYGT5uNgSE9iEH26bZhNtgcd4pumkqCf",
  "key15": "3FeAdoBioRJri3ywoNdgBdZu3Pw9fLd8rJCtb2BimkCCjfC1qchvCdg9xFL23VQqZ7ed4E28WMQ4kXJG7khVXpG5",
  "key16": "GMzx9ZwRS7sb6HmD2BK25w9Ypxowqv3sjSNbDGyxzGcRtAqc4g1DRE3hhVkAixz8P4ZzZb5wGoaBDremQksbV3a",
  "key17": "5hpX2NE92HoSKYqcXetH7yJjBjob1mNVzcaz1yTLvoyZZZwTXsgCpYdbdP3i1g4rhpgLYP9Lb4hPysHhTXa3u6Le",
  "key18": "5BsUahBa32wYQE99tREwzpDfyq38vEYbbyCg7ygvh3Nk9gXar9f8nKTcVh86GpMye9MD5kgi6fPTb1tfo7xDoFH8",
  "key19": "3AVAjeuExJfBNiVVoHAFi3bqsDJD59kLfqh3vbPfcy4gxWYXLzm8x2Y3LVNX7eepSQxZj58zoGJQPSwS1nCg3ZFk",
  "key20": "4r7ZxvqpbWA9KVyNGXiDVQf5YEKB4wjN5cDeY3YPnBNGypWb96i8RDQUrNyEJP8b4qpjtPH1oYvEUUf8eu6etQBE",
  "key21": "2MbndSUaEbqUhGfbtC46Vj8EhbbbAWkWm2C4YEXbCXPMWzVZi7Dpyf3ix3DXrxs2w637f6Wxvg75bLgATbYtUm6o",
  "key22": "26uEosEtxsnmMio2HMumCG4VTLbJB7GcXivf9YVYCUZGo3LWZCrWDQrj1BSCYnngBE1CWvky7XUzYBBZy8U6W2hG",
  "key23": "61TjTyYPvrL2RanWWfcoJWS6GuB8LxivW8G8Sgp3brhisDAsz4DUZ1DYmnPHKAz41Ej1pnq54WzQDxu6LQPoWoGK",
  "key24": "5CMuoHvEE67AeBB2MtUqNjGfG56zXU6t2s5NtyuHbzrhojCpixVDs12HDUQrFgHiXUmwyVNcCVTZqfN1h9sM1nDs",
  "key25": "3bLgvGBJMYfPGaGRd9vNTb2qEsz5d22oSv37hn7JmKCWiybcsS6aZcU4izWf4aoLQqRmixdxKsL9JfFL841SZuA3",
  "key26": "2qpHMW4jKGRYCCEZLd8z4xSm3LqhHNwSLSPFszfKGmNQhubS36S8E6UQ4XBjQzWqjdTTsxUvn6Y89ii1oyGLC3Xd",
  "key27": "365FkPjRXiHsm58NyEpuQvbNy5c27bY5n2nLxjqKyVGhmiUq5TbZd9KKBmQpCo9fziFSh3oTWELaWMViHaRNRYrP",
  "key28": "3nmTrrS1XxC8TqUS4duEp2a49pRNynjpTCPWBBhojebTg3BacpMFsAkTs3qCo9rEFBrsASromt9TtEzZp2HuHPNH",
  "key29": "3vmQVoQPfAr4KeMV4HtzezznnZbGbvHMVYsMU8bNqhymGTwcMdJ5WFfumegKqhdx5rS92idzrd6hUgWtDCFEBLcg",
  "key30": "5u3b8otbvHJXub6RcN3SpYABRactqJkFs82MVYuBCApk1KJ9PWSFL8nRHsb2xtgAom559z8Ccg3X6jMaibyA8xY",
  "key31": "2FkwjKZffuUZKaHMtRdAvzbRwkfywv5nZ3hhQ6egrvB11sSqzFNNLRVUuhKC4qAJB1PETbUvCEh7gCmydpDMwnMc",
  "key32": "5USc9yv2jg8u9dFXSUUxaMRJabymyTPChUpCb1s9u3KkHd4Ca3d77zRmy9ZJ4MGonWtJkgoDqo77X2FJ1jjFghQT",
  "key33": "wxbGnVzsSDauMVoijoH3DnScJUoh4btGoaP8qWjWPCwFoEvhFYtXRFoozZgSNnTVF7V24msQVpvcevYULxcAaah",
  "key34": "5AobYVGh5ocrjbxmvq9sZL6PhfvD8kaiEP4RZThgfrufTkP1vawrNeYSHs2XtakMztYuJejtw3RV5gdYigW9uW6x",
  "key35": "5VNDeJEkvcABp2rUoYcF14dDaHYvVEcxSkPF4Jsd7P8fuLSykoH45eAhMomPn844h4mgyE543pMv1hGqejrQ35h",
  "key36": "EUHFBXWPwz1KUsgdFBqD9TagLMzQKTNGiuVqA3N5DCFjF49x3k8kWkHxog8S8r8N9jpaKSMaF5tqYLx6DfNkezV",
  "key37": "5zjV5bwWmY6yuhNss4cTPu1wTjQB8oEf3a9dyYQTdZeGqBHuCnYYRo3WkBxCzyEb7sVpXRsUSP4XMLrZWxefLUQA",
  "key38": "vsqHY7k7cPaUv4gxwxH8kL94M1E1UDxm5Kx1kTH1TWx8fzNWPiHgz3g3Zprbw8trkM5ktL1XSdmhsi31zsMuex4",
  "key39": "4puJ6uuNo8GoCfm6NabVCX6BebntUQ1fhWe5crVFUT2kknehV4bYjMqKSw6VVNn84MdSR21WwMEJVWfAr9GrEhEW",
  "key40": "2pjmtRXSSnbsb91SxxRjYddiB6kt9YtDpexw3unfKECAzX88824pLtHB8jZYRjX5o4LqcmWm7vpsgWeTdwFAqRo3",
  "key41": "2CB1EDz6nUBHY9GcDgJtmc1zHXWFbGBbpZHBKfe891YTjmYgVXingWvTroRxBDnDYVBHoXkRLE94RVVgyuzuLzNt",
  "key42": "4PrgeW5xTJ7E6hp7rUTMWFp3Qke9CSGBqWTRcRAeT6WLjN5K8Ht35hLuKvp6tShsPYch6c6RVPdSEnkmWBFEaVKc",
  "key43": "5sM4H8yN8QtZC7uuKruRDfdhitrxYcxMmS2VNcmiLQg6EQHiipv4rq8EwBATDxDshTVKZWKYK3roK1ZkZdxm8aGp",
  "key44": "4BbbGSagmpMGzPcbdUzuUC2evovTwVoU5kySoyAgpDbt3cwrvavZJWhAVZSM25PayPAhtNEGyU5UJ1mBqRGf7YTq",
  "key45": "3vLPQxXmaYYdE9xUAjQZfcv9DtFTkW7RxGkMB7uwoUscVELczyyhpCoK6CZj63gQzadL6sP986QoPTNe2nswszPZ",
  "key46": "23kkNPE4FkA67SeJwhxoszHXn8vHqgv2VaGUBh8CfAzK6n35fShYVRomgzbevZsmBakggL2X4hAiH3ziH67Dq3Cp",
  "key47": "5XBixNXYTqfTgPGv3NehUeV3hvafbHB8wUs1gZvci7Nqy9QrsJrR2UYmgRNM2KsQ2tSnnCyNqXro6vCrCNK6raBS"
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
