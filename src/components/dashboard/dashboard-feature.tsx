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
    "4PsHNV6cG8edBTzGXtvsBeog2gB4YckKAGfDe6SLKS7oj8ZMTpMuhL1tJKVYMyoaKZFDHTqUwmQYbsYS78oZVJod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7eRtk1qvhuwbrUM6YmFXZeRqejXPdXzN4jnbDPBVCpek3btErkMhdqJ9CE9wmTTgGxYbmGHHoEiw1AQuFnmGrg",
  "key1": "4Gr1eztQogpsFp1Nwqsd5d7CXpk6ipBmsPkR14Q9qo6iin6P7ggCnchWR2UXK9qRmbLtoV2soW32YZeE9vrxji7H",
  "key2": "2LJchSSo9U2X3xTtmDWfbjraD8kvWK1i6TuQ5REMULpHpXkmY8cDqXDunNWg65G9ps2TJn58QugAMPb2U1MvzCQe",
  "key3": "27HhsoN1wrurdRnFADDu7kmhGaeRVhtRcdALz6TbtomzqJDHckrZfuK4VJHvFFTxJwYYDiPktQHUhpdUMGoQZwcV",
  "key4": "4kaghtdHFsoQsrG4FeiotxFPjDNUPA6mqEg5h6XjWNjCiSU72yWrvPDFhzrKbkyd1gQnTTpPa87JqpRv65hxGbfY",
  "key5": "2hyn7zKXjgiyfscZV6woaoEQJaLXW6HuHy4yiFYp8qiNJ7jVcNS8X6EdRzRoGpfYgX8CiQZ9TaqdHiK31fjAfbwe",
  "key6": "5SwEAKQUhgFikkNnp5h4Zbia8vEJ4keMxi7XSykUycUoMU7vwkgFp3fnC8Af3oAkCGFY9ELbHRKihXKisY6UDgio",
  "key7": "59j2qJNw1vN5HXa1Gj3fxGyMXJzhm74g1D7g7GrPjyqTJNi9rePskXg6DyFNCHKuneboqPPozu8HSXbYWGXgXi7t",
  "key8": "5qCaPNHGGD38wagrMKSFWKFNZ3UZcPbWQXt7KaLFHRWcWqh867CXwyyuMGfMEJG31EGFLxDZf6vsdfp5d2Cs4uXz",
  "key9": "2GZL3ZpuJdhuQjFR8qPF5xh1ohJqUkfFCZGhHxLcp25kUniE9LeknmYWDDEY38v9CgvSLhdn59u44yajSUDXqR8r",
  "key10": "5133fFYuty6Co52M5wTYvBo7MCsz1esc7UyWQeihX9Hjznh3jAK6QSKKyWia2YQQTGXuygLV1pcvgjg9ktsExYe7",
  "key11": "2W2mGgqEsABF5v59Dgc2KhGstNeEihLUooit6AVEEKyquio2J2TjK6rkb1FHfRqqhzbXeo8HVemDx5nLR5RsmnXy",
  "key12": "4ptZgGGG9nnGUiarRpH12GL6nq5p3BJeKjfNiXJxAVWpE9DfAveKkyZuB54j1fw6qug1Aqg1RaSJ5kJc17pJHuw5",
  "key13": "2EtokPZ7L8gMm4vAUUijX6UZ7BCfpBEmzjzuJyin13M317BcYVpxNiwFTRHrQoNSY3v3kpBbJthD7w4Zm6SU9yjc",
  "key14": "2qaMEPvsCemer9Nyt2mEspVzh14ia5sx3rgxbnmWFAqEWC4mUBnhsqzkx4gYLz34CLLF6emiY1qepLAYrZLssWQg",
  "key15": "2VotqFWbEbBs1aVZpCg89mQFcyfCEVGTGABb1wgqbUjGtMUqpuCZMopdwHDEwsxSrkKXKwtEoQhqPDNdkNTKuTdE",
  "key16": "34sVzjzMC5vUrCEudHodWBUFKvRwTkgeJBJCFDUR6yXq7cDipfL4h3zZq5dW8CYutkGFEPg8C4f8eheL7PSUvENM",
  "key17": "4RYu5xQ7dB7DSciELYKP85bR92kPCaAPwTw1rYdxyGhttWvbxjUyCf7Q6irr6UkFFX33kdBWCDq9sC4CvwnLPprB",
  "key18": "aMjERcMpb6mb2JA7WwE9PYjahTrY6b3ZRktRtozQRdi6zHEQqxJ4T5gCHjb9f67uhe5iBzFipqoqCFb1pHZgN46",
  "key19": "28dahy4hBNsam7vwiTtz8QwLyLMGZKtLLJFdZCpwjbykJdyNJFqLbLv3APVbtwSh8YpdS8RPHkAUD7U5kjfiWDgx",
  "key20": "2VQinpbrhtos6K5jiFMZH7Vy4bJYdzHhr8VFEvwMhez9eUMwjDQzBEgzuVCDsAwPtU7xDSDmCeX2BqTJrBQiovu8",
  "key21": "bYX7c3CSY8VteHS3LGApNmKXDYvTqdWzbDEi6LU1iwHoCRFNVvy9wvS8DD96kGzGYTi8NVN4JwVoWnW3FstLiad",
  "key22": "VUbKgTgA7LvEY7Th7L5kwfKrjfgopHk9gtz2ZqGjbdGC6aefhUDajYEqXiiyLo8uvYNijufxhkzCXKfW8f2VoCx",
  "key23": "VxJvse8G3GvJf25LEpPrZEtx962EM45c5dCNnC7vtRYQhjZoDDg3bpGtXsSKvXKxDefXRKSGoN9iSakWu1dCmBH",
  "key24": "43LkV8Ly2JDfQh2zRNTSGttLMGmvYgV7NoBgNAM9sjzD7rs2LsSZMnQShv2N2yh5dfmC2Et2CaTEAVpfDE4JGSUD",
  "key25": "2pMT4oroAHn7oQ8WnYZC3nLTx2B73g9FHib3PYhPwxHmTLSQmeQNqGxKanmwvDX2mJ3H8p5YNAXvrf5Yum7p8D7R",
  "key26": "h9uzX3CpMN5o2o4KbFjtJgjxXqBs7S6emMQHm92W3qVnuimwRayigYNc7TDAfVLfSvD1R4Fkv5CjH4mFdaFevGi",
  "key27": "2A27eMWNVMY8xV8kcrYZmWpYvoEBfDYLToGq5mENeJJhgqASSQsXDmfCGHydndPnCcDx5kdGUugVQnV11Hoc8V7D",
  "key28": "5sHXgjQGGN7AZAbL3kpZstYQVuvx3y6huxBnSDMMSUMqF98g5LxaVXiTJGE2QnLaWs5hcxXbdY1kDCAWkjLzwbu5",
  "key29": "Yo3idu8kyj57NaQQnqEHkjzESFRShYdQtGiaoHx1HxgN5GkXSd9Xoz6xWD93QUJ8i3RXjfkoPLbTi3cMsuKPkkQ",
  "key30": "i3gpp4gc2PNxWZHHzNT56TamPgxarJGJePATw8xWrYjHDSHcTA9semY4vfyxawq83Ef6eVbDNf8BnhQxet93rMd",
  "key31": "26sh1CNACkiqPpHgLuMyTp3DS6HtS6wbMcmnzDN49tceK9SjZgtiz1fGh3P2k8TJuvfgZkmowR17Y67dunTdhyf9",
  "key32": "5Q6bpM4yAm4KbTJwfoJ7924PXxZv1XjoieLAkytpBFcRib8hJGM66jfbTWzMCNr3HJDWzckUy8epnuoWi2D91S1r",
  "key33": "5FLuR6yc2gtpriQ4XGP7kqQciyQ6hZQPgYT3FwD9MNB5nh8qn7mMe1SMJkyN5P7tDpSC3kyaAYMtm6tvR63usR5y",
  "key34": "2Xf4RSRE88Ev8oY9H2nQ4WmAahLRF6Z66pbgd5ytWPxiRz1RMYjzPawN9pWTZUfKbEGagCTMnLgKMpjHzcgF3h12",
  "key35": "5rRxWkMqkP3FM1tnPvQwX5zyjLAZAfkdDvTTVTWLjXNPiobwZQfLi8LmkNWTkywakEDP8oUGr8WEL4M2oBTpxFmP",
  "key36": "5ZAPN9pwRcsGDGUJ3A46VG18E4aMpevS5oqwjrfjsbzwLihdZJTTs5xJvWEuCC8KinBvB2Bhj27kNGoHW45mjkot",
  "key37": "28afqyW3RPK8MRKdSHaHx1vqSGxfAkZ8X7UPxwLjEBWTmgTZmaGmb5Yu3UFsDoAMNsYWYheK4dA4wHyBmg4zZELH",
  "key38": "2WTjjow3jQZ92ZfKoNNfa6nttmXWvzkVtnNKXiPkkuAG7K4T3gDSHvYUrwCPSraz9Zvvzne6w3DE1c2Y4PS5geJE",
  "key39": "54swEExX6ZMmHA6WQT1ijcjRB714NvKd42tR5zeyM9z6ATg8GdtzBfhNYDaVyV9pppcRnisVN7codCunq8MRkqMm",
  "key40": "hAZzMQL8RfK8riCMc7wXHZBvnX2durkBSRqCaqg2gQtrwHAucgPbt8qBtTnGjav2NH21VYLbsQhga9bFP3PDVuq",
  "key41": "23MyxRDJGB8vNF8R5UrcAZLRpP1BtPj8wq2iNHPTnkoum3b6aty3BgEWAtWyDkqTFe1uMS4aTweLEPg1i3t6aJqL",
  "key42": "2af6dxNXEqienADPtHzB8xxw2t83PxHr5wKqmNzHfpiE9QfZhDcNByHYQpcZJ56LhoG9N5RCu56ng56LGHUREw8c"
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
