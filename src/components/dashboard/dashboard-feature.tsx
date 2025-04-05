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
    "2kmY47Lh4iugEMRYZeWwL4bDJpBLfdTTt9u7feEa4EdsvZ15r3XLRuv4NjFQqiWxvJmuCouKu1EHG5s3EC1G13xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsY189LceTgNzthJmVJxU2RQNxyn13TXQszuoE4myfsCgpiqeMAfUhM2gGeSwfQzFapJTFExxUGKtn5WrBv6spW",
  "key1": "47R63FhaMcCjuCKZbzHrxvBFTe9UmCUmVNqHXfTShNJRfHGWXhGb636Ndeq9hqagzeiHU9eV9XRtgFad5Tacq7HZ",
  "key2": "ttfML82mDzewMX4qZt5vKdsLbdffQBFybJqtDzrqLjChV7qf3B93DHpJsqqaRgrfrMQ3suwvMfAA6Wvip36Mp5q",
  "key3": "2obxmdiBXUjEFcmgLJ5GTrK4tzfWzXam1abBAHDDMHbo2y53CmjLMYMAenk1ncR7uLTjzhNkyCoavrEuYwNvVcCa",
  "key4": "2QgrYWCQtZhCBad16dwQBorwRdt2hJ3DBvi1jWRVz9VWhBj6M47XhjASPYVd4z8JkRTkbh8gRS1RFQNW67g4boai",
  "key5": "5URQvohoo58gjSkdEzXEUjHHDCMPqNsWgAqgutRZFeQ21i5h6mZswWnqs7zgJpeYebL5gES3Btzymy1js31h6eht",
  "key6": "2jUNxSiRVK9BZ97T9aGkQy1a9Soft1h584oqqwQSo6N6e1qZ1XXqEv8fjvmYBxrDRb345zpHFoHA4q66Y5jAfyrZ",
  "key7": "5CyaVdB7A5u9toMioX8q8ydwkp99y9oqvVaYeKcTBZv7Bswg8xPF16EoWsjeNQyUjRQqk8bA5Rite4Lv37iyruif",
  "key8": "2Y3wX8Yz4iQ7o2gTW3vLysbRouQLhjpUQhR45nvzJdTwGYmfk1aK7GDDxKmiuMrf1JDZMm8RvjmyjKx1Nay2ZCNA",
  "key9": "5AwAabYdGo2eoHP4GVnaoJ8Su2oxwvHVx7tsSCoVweGwr8t2NZbdgw55Ch3i2DNtoXLx141nBdiKRQ6T6eUzBa1A",
  "key10": "NpBKZhJ8gXZX9Y2uooBAAVBKkGDV6Z63zAteXAKjEP2zb1D11ShDNzN2ZqVwoWsoAh36HqrgCv9qeiJzmpw3sdo",
  "key11": "5iPS5X8vG8EvorvF61GrbqzGNiXtGKmUo4kZ8CJmQgHruQxnJ4LdBPGZoCGo7DvMwDWcceNnZpSH6Ucxpus3PSSP",
  "key12": "3cD3MsWeFjRdLMaH6a323Gqe2upcaubkD1Kc2BWKRJgmRygiwBYHtaWuzoRYY7eRiJYqcimFjsqpWEwSAWtdmB5W",
  "key13": "zCfhfuoMt47ZBG7szBBmyY3AXbkYbN5cP1Zaaj7aPhz7P3UVVRqfWFhGveNRhv4rGgGaNiQxrab9jjr2vW6jv4u",
  "key14": "TG67gMjMmGuoxkfPaTvKsjr7DQ8ExbAcai8WrjB9d2q2gLYBVHPji2HWV55hSBK1Jz2UrmoAbJn9dk2Hsw3CgDn",
  "key15": "seTtcSNqpnMfYBEFmXn1uW5z8pj81njDQpHDH4XeJH9Tnj787kwAo1cnx2SJgZjiBJEPEKZr6cnRaL5fv7JFvzt",
  "key16": "5sAHSBZu3uY9aqo3eZWQjapjMY6GpvrghjPv1ApWrZcnBZQKoX1vdh4nXFLT7xa821cWzKZ2EDNyUo6KtzWqg8ZX",
  "key17": "542sYpzM5w5ffaK4erCaPYaB1w6cxzQQ7vtWNeMxVFiFmVtHqtXqbyNFfWaUtBzmJ4mQ1N43ZPnoWYKfUN2VYeYp",
  "key18": "48hSuUGMfXKauSsVapFCim2PSMS6MdNHGX8rFr5UcRN4wKKsoeJe9hCpe5KcsmJM2Nrz817gVnG4Nb4i7N9nZxiZ",
  "key19": "2v8LshuMBaMJJuTXEYNStRAHPa6j28vZxsmPmr7i87AmVHf6uKHpDsSJfJcacsYENs3yzqTEi5TAaY1G9a7sEX5j",
  "key20": "2EnnzPwKXnHwYG2cSnXRAWoYLxyEKmJRm8x9jxCdq1YnJiFqSaRf97Ex1c1uAdYfSdFYydD4b7AFxfcJyRqMtB4w",
  "key21": "YvaXyddjJApaQ7NeF6QhgoyrwN2CNeWCYMWg17KNeVZK2iFPPCRAXA8zbcSvbDFfA2k4bggSPsacVXLxWJby8uc",
  "key22": "AHaZYoATpYgypZFoA7n5Q4TZBzS9NKkd4MJf9iYhVoYUQtHgi4tovfwberRSmkkDQUR4cQKjs9a59MjJmvKzad8",
  "key23": "5sYm5ch4JTDGFJqoTqCGw4pxc89kEimSAprzioK6aeAqDjXZiz7FSuadcRCsqPcT7Ap2QJuTp574jvbhrvwMswE5",
  "key24": "3iwtb3r3NqvfXPBnrAw1LrUUt6qFiZ5epiSq68chPzHL4ZPfX7R2U2ceJ4m9DRJUPSmM2aNofJAM7Nr4ZXKAPkoP",
  "key25": "38PQxjJ1wrvMhRdfgjvunY55GtQReuH18rQXimmA4vGwePucPNYkcejsDpRCixj8cu15PeCXGmEYQi9vHCzURYz",
  "key26": "3yRwgEbX4TAPrVLv9BpzDx8xeKLyy64vdNd3pMNRynNiW4aFGa71e4TWmBarb1i5buJ2EeJPgG4TkUdWt9gmrn6g",
  "key27": "5rr6nVWe2eMDamhkQnwuXBD2wwnhPhLjK9u7DwzNnopCfoyPaRf4bmCUKnUoMuB49AAGhX5wXY6kwWobVDyxohtq",
  "key28": "2vB6yMCTKuG9X3YhLAr1sNM7G1gWSoAQGsWJXPecxBEFunMtdzDH7KV1wmBQrJZjtK5tDpsrShRHS1puqiL3HQxH",
  "key29": "2yjNd9zUuMkdhhsfzh75P2pVCLkTnDUNRW7pM2WgfA3v2ioh8g5KWRE9EwvdsPJ8nvAJ35pgy3PaqyB8A4XdVBT6",
  "key30": "3LoHLtzYjXY8VgmKoy9CqmVEbUCUhk5exyqitkT1rKKA1rbT3LqYQFwKhHqPJPcp2qHNfZeTGFZsgWJVnQayqymz",
  "key31": "5snF1LRnrbWenQgtf1TXXqwnFazzzrWarwForNhKcXHgkB5nNrMXTPU4bxvAer2KLM19c8kh7kXBW77REieLR1ki",
  "key32": "4rfuXuqZ9iuNfarNga6Bsa5o46sqTRbvh3Gq23EWEPWfSCuQx5uXKCgF8Gi2GTT4RQAuJztYECVBv2VgJU5fHgQQ",
  "key33": "3UgnDre7dHwhFSPXAt1V8Cj7J8BkFP8fWUYpNNqiSmW6k74hcCN25EcZa8MQB71XhyQ7DP4cKbmxg7EF5Jyuw1ic",
  "key34": "47VpQ4fzeMwxTVGmBporDbnGz81pCZ2U2sfukHR2Fm6GM1Cyhw6fc8tNwGQFvGkxvQfggyTAA8MzNg15z1JHkgbh",
  "key35": "4sUyKKaKAh7aUexgiFR8mEPxjfUi8XAptqkkoQhjCCF39WLPrV25XSZuEJ5zLKkS9kRhMMFvwdEtRvx2yUVyhnng",
  "key36": "4s3rG3RB7NeHVcmjCWt5NVGjc17sz39qDAjKe22xynfN3Wa8jkL5vwJGfeqxj66Kg6WtjwB7d3vwDZkNSS2e9Qun",
  "key37": "5FDC8QpXFBJYpXEd7jCjNZBXS8ma79ib2S17BhJomikDRrfuCPydnALM7TU5MDRANvdM1vtJ6hRrZshPmnQGmBUx",
  "key38": "5phkBemyRWm6Tzp617xZvE42gVMeT7am1uP9cPamWVL4spMQapvoPfRq9ge2fsu1p33ryuZrS7oJ5ZFErEyC3jgs",
  "key39": "WFLSLG38qPiACT5k5t3xcaikTvyoaQHu4sRZZLEKVjHq8QWRubcZoPcwMKLvDyavLzUWHob5ZqmzX96ex4GgLUR",
  "key40": "2MTJ1SnWanS3bWXf3upCnDNj1XPD1t1o6XWpuJW1HT2spJKZivzXHuiqDd4pAqgpyQnFGwN3A1g4bvmzFLGdvE6E",
  "key41": "5TbetAdJxSSAJFapUvTgBSaKLshDk86vak5VhBYKTeemHCs65D3LDMMR3jEsLVTUkBXdPpG8zJXz7hBziLMCFqpL",
  "key42": "3E9CUju7SNXdyym8ra3FVLgnyA6eJ74r8gfi7Gr2cLW8S8ZUQfuhj8qh1Le77tSGKWXCDAKfeX643BLRhxeZr11q",
  "key43": "3kPiAshT9mFTHnfgxuTAESFd5J7JYFbuYsZpixu8zj8e7H6ofUGQAE4nLaLUcv5HkMnfZGkodsj7Z5p3DCXQVD8Z"
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
