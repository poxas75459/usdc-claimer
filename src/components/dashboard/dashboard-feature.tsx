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
    "54eJnosQkrfZnGQJ5PY4Uq5i8eWtZtKjkFK6TdE3SwHgK6TwAJASGZQzGySaHtAvD9AvDjP3LXUmkDBeiCRZHaDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDGSdZwKj6hy7m3JA3LopBTn1L8V9HEEYPUFiAfksFNVNCqyhVft1CJUEKgdQDtMMVN7WnXm1rYfus8yV4koaZv",
  "key1": "ApKug3AWsKDwGnkLKcHvoDk7WNLLabJjQTsnNDxs3oSjhXVp6tE29MKf3Saa8XRYLwzfXTAe35R49Gf4k3sevqm",
  "key2": "MCJjFpzNaL2D1Ny5CEay6cfh4VZXAAoZ21Aq6TbxnujqsQJRGXEwmFcpDK6tG5hoRFgrHdhCGxEYwRRrKAsZVJJ",
  "key3": "fZ6PHt7J5DkEYH3bEJUQr2nkp7UN6zQPo5DFQbw6Sv7CXLrzYU85YhJkvnTSe9nsVzcqXchwAZp6MJAMceJpCfg",
  "key4": "QXFaC9DUdAbz4kjT85ePkLEgstfJHnyP3rHPJFDpVjkpKpHd2B3eruqSjpgG9q4cghn3i6SD6Fu59cMDeEsU5XD",
  "key5": "UNao2nQ81E5RNf676NWYiZRaV4cPrKnENrzDZMBm2b3U5fm4EwkzT4yZPfUEpo2yNKR349Lj2MMcHx814W5udog",
  "key6": "5ZAVpTqVMvCr8o7ksE5FqFcPTJdutRNxkgqWWYrp1E47d6HGik5iocbZrQta2tqF5KPLnA5DXhckiUyQNt16Vw13",
  "key7": "5ozNRsyAXoSNHjMCCh9bDuztz6UKWD5dQ5hmRU7hEtHq9mCu9rfFbZkmAD81NmjLpXvoJ6BXkAoiSvmzBcVfTDzn",
  "key8": "4yYTVZ5CNGbmgLx9mJVnjZHWYUNQoa5vqbp3xbTSvaY5xDZbQaYuCxoXPvfqirjoeyssGN8jPWGzxKw4CxTrQGb6",
  "key9": "4MEsq25ixNT92GPRNTBVfJfM3kLua8BYTWuubYdiAGWPh2Bt3UZ16sDfBaC6ek2dWDhEacGx6aRFcnSwDtDKhxwu",
  "key10": "3SGYmpRjXYSd431Zpv6M7nTnJdx4e5MkgAAV9SaYqPvMsyUqMz9Lszz8oqFkPUk7nEsDQobs4kLYN6bWuLenvEpf",
  "key11": "5osHXTtFhFEzZeQ6RCeP5PrUiUbePp6bfHbZP2yVGSWGDK6bNvgL5eWbPywRrgUwUj1WMsDYg58v4XUsZxSpz9Fz",
  "key12": "3Dwrzh7GqXqeEfiX61KQb4BeMf8GQpjWFKvogKm1i1KPDjiwG55dQ1drDa8TN2kHntqxnTYaJH2cguhaoTumnmBh",
  "key13": "3aM8pSUH3tvgdfXurGH44R3YHoYqGdEEMFvUz3BNhnJtBXf9pyp1CVxLbaNpiHcLisRSGDrGbkJnHuSS7ZCsbkKG",
  "key14": "5ybxAXVNYtE9jZPwVyfV1ftsxQ6DRiZBbHV9ExxJhm5MxscwGS9kcyV141nNVZgNBhNwvwW6T2K6nQjGXkdcXM5s",
  "key15": "5oLPcaWVNZ4YR3fivyGfy7iBrDKMQQofoMYMT7Ws2bkWyoFD15gQxM4kp4xwQhUiaP4LuyDs6H2jpJd4ULHke3mC",
  "key16": "5AujhMhgoeEgKvQYJe8wMNadLreouuxfSWqJA6eDAMwZFQ5bSpLd1feS39hFWAr7Z5B5R1rX4seVM9bdtjpeiGvF",
  "key17": "5TYVyryLwKd39NZo96gDieavAGbPEZqZdv9nS8TKc1rKWV9tXnt4YmJdkhHHFHuzzMcSHL5ZQQHokn2fNQpUC6ut",
  "key18": "2Z5uinhBGSv9VFM1nHHVb5YQc39XttyDtRmByKDDbjsQYtWLKgJcZTcWt8D58FLE1sSKrBqdsXA7JV5kBp2o24gN",
  "key19": "4Fkhz5WBg7VfffpNi3yVmoXbEoCghj352E1awwZ2ZjHdvKdjxeCM3SddqNfAM9QUeLDR6L9jDWHHNLqUgLhV5i7G",
  "key20": "PV9YqxxoZF9ShZTu2651g4urozL2AEAEz9eim6FYPuFk92YBKjNZikYbM1fAR1Y8fSq7Qir4LgcMgpuoLqWrQS3",
  "key21": "2PuSSa5JgXQidWdWfkvYDASSuaM4GEr1JYCvMvirrSYMsaZdFxYHqVr3DD4F6db7wFLA3XvG5Noy9WHCbJEiaXfx",
  "key22": "vMeqwivo5aFMN32Lo8FPDuWTi1JersiLzeGY5Ypp5q6sooLGmP7GBpi6wL3S29doVFZEJtoY9VH4YLkV9XRUuZC",
  "key23": "2NvbAPQ2iZtLFbSwGLcX3nYG8dnKVTsKrHhhLov3ErDBU6rvXbSEDtwRYWSQ8n44CbopxpmHqpr24ZGxSmGbqcQ5",
  "key24": "4jGLMnQKN4deLFdBb7zZeMZCDf7K13Yn5Y9wf2DpWodRzKBJiy92rb5hKk5Hjyp12h3gBTGjscbaJ2Zh2aXrGQtZ",
  "key25": "oNHygfLgxeF51WTonZ3ekewj2rPk8au4dxPUhXANgzz3P1evDAnWaoheVXn4XurWfXGRbqkh5HbjMtNR9WfLz9w",
  "key26": "5w1puPDcB8gzWxAKz24f68JMTo2PRrDnjy8styCpZc4q9q8Zo5D48YZoVms5HH1vbRuT39XAMfkWeyBmkb4nSTJz",
  "key27": "3dpDZVXheVLXvxHmCBW2C5kLtdQGk2vJw7pfJaUhfWugCuksm5komQoUAYG7vykrXf8Xqk1x3S1H7CUXKsX2zrXa",
  "key28": "JvKqdp6msDc8DKdnnwrXbnxHW5bSW5Xn3CAGHrfc4MLeQ8wBpFcMvuAUc2ras2VMhxkYB8UVACgk4h3LQfMvoLp",
  "key29": "3uuLc1i4q5xCq5YYFcWK8JfbXd6cnkVJoyBtnZYCZkyhmNAxHXz5qbVwaVMxptremYLGnZmkVgvbyUvJeAx4dGK9",
  "key30": "2D1oUHF8Lqq6Ez3aoJfgT1wd9d2hhCigqNUWf4BX9Gy7SaLCiiGa3CzT2ia28erWVXJoTPqycMS1LJG11p3PtavS",
  "key31": "dWbZ17evp1i3wYeWPA1mAwe1DWFjGdbSphU3eN9SKbg7jxeYjRGjwoqyTQZNKUCLo1rSFVwmHuo5a49hKfozZVZ",
  "key32": "2foBKGwUVnkrH8ygyGT8Ny79qg734eo3VAo9SosfR3zwoTkH7JC4hFavFPxKyU9G1cxqKhXURbuEMTCDVYjpjGWj",
  "key33": "5yzrKGuthBCd9j5HFsC3KXdkoAYc5sYDP6amZR6iE7J5P2snXMZCAwq3USfL6uPmbujj8JCZXGuxsdhwcatYFCY7",
  "key34": "4VecWD3bpd8raseXL9VXw4pqMFri5FL8fKMMgGAnHKSuxvutQpcViGoHyQQ5CzKdYy7NS175689AA9JC9Ng5xosq",
  "key35": "5muW8Dg3QtnajbkBXvt4SjDsQTKokF4Psttm3FbrY4r6sk1DepnXkLqvbjPeVFzciDhADWXSz3u1saV7uv54KegG",
  "key36": "3cXUc6C1NEUdeKAiCwwm6S45i9SKYTFySUTpj2ZjKUikjM7dS71Q7tfU6vYTcC6RBEXqojXWp3pEzBEuPFFcmgNR",
  "key37": "2bGMFLcGcaP574iNiMysZDqDgmL3QzAg1owXsZ8i9oLoFNYPk6eW9tVnqZpyC3ESUUwETWQ2fQXk8bren5Ts34Rp",
  "key38": "2juefEUG2hRg8Wx25ZpC8SDmEU8BMj4NrAqQu6gRZpNQ6pL5JVsPUFq2df4o4PCN8Ddcsyg2pRLfXUMJAz8nk4Py",
  "key39": "4uEYM5GxyVgqvgsjLjTtY9YQbtzWxsRWiu6CFi4sjdcRAArd2PCpUt51LFZJgPpEZ2ANFpEQP7TLmNgXipYnuMdf",
  "key40": "35yXC8Scez9PoLnDTwceZzcknqMbHCNC2ajvBWcKHZxrCzztzpMX4K1wKCdcZVTLc3bEMLDHd2Aya5pxfwgijbZg",
  "key41": "5FM4bzdzdF679ByqPYZWgd2ctP3A83A7NXPUqRXWnSrkmAz5sE4Q7tBeYn9S7ZzTqRkwRRnThMnk7moo26nUXqoc",
  "key42": "4uhEXnJ6mUdvpMvhcLbToP8KVMXQ3Qa4P7zD3nb8GoZz8t4uf4k5S6wBJ8kzoqp8vngV378avGcaNPHfQZm857E4",
  "key43": "5DUkkqgMnyRcypsSN1VRAuR4tB4kormhfdf8mXnm66fjRMWxxs3YzNCQhDU81EFYjBiY8NHk8TsneDm2oJ4CstMm",
  "key44": "4uWdJ7EeHLhsCjJKuN9AnhmFF8zH6ZBobPTgnDwzpKM3ozzfMvfyrpmjPnqu91yPU5LLfAp7jW6GjAu9ZBfpZAxE",
  "key45": "5ZYeniceVFPxaSAwYMSBnutg894Z1QBL8C3Yz4ZrUEdCQC9TutD22ZJbFrRjyFjgVmbiNBEBzwYytsiua5KCMxQq",
  "key46": "oVyBqLmiC3JzEPnk3TaJsAAACLLxAGFLJmmivBXJodXAvideuqy5zT87EoiWFZQsQUr6tN8xx9NqxneUTTYKrZd",
  "key47": "23e3U2wuMkFmskDzakibjtyswp8KQgMsmrTjZPrcTFRbjE4ryA5nuj95B3xfpjjcfAvv5hRAWvPWWCKhctTt3kYf",
  "key48": "5D3YnzjpHN5uAgMnvjeNJ4jpBJGfj3X7keTu5pjYYJSY2AFBe4Y1NgeE8US5JAGnaAzkoTX2Bp1A1eL4EWPbm4dZ"
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
