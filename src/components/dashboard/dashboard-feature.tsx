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
    "rDnJRMWQtzCQMScXEXUiKWa8nfrexjLLnRukj9xuuY6QQJWdarKFYmJBqW6LS1qNgxs32ftJ6uLarmipKLvHhJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCTYs3RDUHF1GzxeyG7uf3HYq1EBnMSujWCE9kmS2zmqjmfPowdwNVGZ4kM6CgZ5NEJu5Xni7eDPw5dekHKKEPH",
  "key1": "awKt5dEFxqxv8KPYWBNuQZRE3ybDdiDhLLEuv1pxZ23GwnZ7mRvjgLKitFZxUD9jZFV4uuvriqtoxcqLgCQ5qbh",
  "key2": "4Ui3d8faFFmBD4WzumD9qbcZEswk6qGsMLjnqARw6hZQzYDSihALUXvt3UkSWo9XEcs5e16N6yRTQqouYfY1mvL6",
  "key3": "25Ku1uVyR4ihqS7uGxHGKRfh5pp1e7HS874e6HRkt9SGshei5zwyue5hsKZ4rNk7u8SpXmxvmuv9x2pcKTmXyzG8",
  "key4": "ZWo8wQ8aiRrKzYv6G3WwiSbqwHcDwRn7BEmTq5GWp6hc8TbtacFkZwiMV7P5QKds7HayBZaWBzFzfAirA2QC2Vz",
  "key5": "5uEiPZCGy814Zv1t94eKP5bsE4BRhNAXxaUpfHp47UndqEdDXF6x5a8DYQ7nqjz9AEQ5MYdhUPcpsQXYjHCwpsHm",
  "key6": "5UKko6mvAR2MktpNNTbsr65GxiiVmQoA9PScKwaw6S5wQDtgXtyTAnGVLcE77coZRKXft8xK8ZuSKBAJVoK53tJm",
  "key7": "3tbo5HbKGTfFaD1VbeUQqhDCfsu2xZdcVmp75bAWsRZMdMHEr2LxuLson8mQ3SNKwvuM9fLUqXPeSiQfcDdUZTir",
  "key8": "3DTPREQQH5eTAJ9rfBbretsbFpBcRiRc853nDwEe1zghK9LKVTRQ85A7cCUQ7wecFVBzZQjKtXjXTezCk1f7yNKU",
  "key9": "2u5ptCauokiHPmrw9n2epxVa1eeb1AuWTvx4JGdb4GEsrTLu2ZTgNzaRYJZ4peBsUu8VBJ4uBfXJb5LFHAvX9mxH",
  "key10": "5rP6dgC3zzkbaJnsTEKtj4jrAYKAsvs75ip6SbWZC78iibCXZj35SeSRsKQPnrySnLrqhMYTbHq25TL5fxzbwosX",
  "key11": "38t1TQDERwYNjNRYkvjVbJHyjwtyEvwBWZU5aJofMZjyqkgxg5m4SvfpEhJ4puktWxNCroVkMnzWZq57wnwcwpYS",
  "key12": "5Jii5fTrVwWoUHYjgt3dJyctgaxuJRgh4HVvt58SaDUnuDKQxs63Vk2KMLUVTrcmUhsgoA3zW7pW3ucPrJp9jPxj",
  "key13": "o6wt3J2ddDHZVGZE93P8FYfz1cWys6RxQWsJFYHZRRaNo9MjEReQWnyTg7CpAbvkHm89CZUvnqMAQFtFjQhkqUx",
  "key14": "2G8uYXyNPHjn9Fo3tCrM6AT7Eyak1H5QamukoJAox6UBY4Xi38k8mPXCZmMJMphqeXk2TqbyahrKzZFjypu7mwJd",
  "key15": "9TwZ9XeWCtNuxPw9qdbZunVBn2cunf2JQNMDSZnjiUV8PyJ9HyQLsKiEiYkzZNPSWmS1dRyHyQCtAtMULYHTy9e",
  "key16": "2d6RyZqCqsLLGn1ZZMVMUv6iLp94T6NCvHbjxCtrp9xe6bWAYsUecUogPnNWFpHjo2fjAhrJYw64dMNDcrVkzcfy",
  "key17": "49zDLrXVWvcLj63c9WSfpZKd9k4qqtVS5GVAssKbHPgMQWAQcWpeuMiKmHSKKHyYYiMU3U4e95GeTzAqFSMCYdWo",
  "key18": "2We8no6fJaegr91FWDUJJiwAVF2BdGA6JYNeNurhFG9oYaAC3TLX8468B3bnB4cMu91my1q7963YoDNaMRKXGNeB",
  "key19": "4HcqMzFCSejNTfECn9asdHe8kHsKD7CtAYJJy2AoqEa1HQeMDsUpJ747ANm7wZzVJEwDtP1gQ2XZi4wY7dZSQnFT",
  "key20": "655bpowJHq1iHHfMQGDHiuSYfD9TQeWwxBVRzJrXQNaTExPKRVPR8RzRw4fvjBidme7D2HqAruDMok7vWcv5XJTn",
  "key21": "2XjPJHYqUJgnx26DY8zubgHKszEa21ncMYdNQkAoT6Svq6TQVdmBKqC9tTecXxUF5VTEMniFAhT14KvpZ2Ki259D",
  "key22": "5faRch8By6CZAVsuVTwBW8TuxVAiJfQsjMqTGs6xyu6qMYnffkfrZD3GvsoKAK1GF9GCLhKH7vLhdjd6QX81MXFd",
  "key23": "7hcAr62yURuggjNeywKrz34Z6VpnDsMhwmqmHndtS2BGb1tim22HwkJekSPrLaAUNF8hFZdqtkYyW76ZD213p3x",
  "key24": "5fJJBmisuTRSEHmkMjkriKut3qpGet2WgajMkzLSRNY1VZH4qegUwsk3FTNdWgE7NHmu85potmWmojcRY51gZV1r",
  "key25": "9bqJAyr7twYorW8sbubUP7t1XrDrYAfBFgbSBco7o3tyuKSGAVAQKW5XM3AbwEDejJPnPRi1jzoS4VsWHF5EKC9",
  "key26": "3SDCeP1x1i83vyRHsjSQZwXdRRUW27wpy8KNTzub5o2jbvQmCtUk5SYWTbV4FuK9oB2k2gkT1iR3wJf4KieW9YHw",
  "key27": "497xNh4mMhSPHghj9PFYM5cH9QnKSZ4ybU8VVY6Nrodp6ZQ3g4HjHmQ1zjdGK4HdoVreyB3F1XkoGcxJQauRegCr",
  "key28": "4X626KPsXxtzbNV8hq1wMoZKx1YhfXgBkcXGavWDrDjkEjD7Rp5Y9yxZTvWP7KmTcQUGEd268rhSZoALBiMMBX7N",
  "key29": "ke2a8KW5z1Cy2ZYxasnBtsk8dfeUSGcrYppdaNxpDcu9DBeCfEM2vFNhNtGBEw28MBYyQ3wbNhrA5TNQKjRjCmu",
  "key30": "2HS4BMYCWX86rZ2aSdHwrdPsdoL3f4AnKZ1nVmmBS1JHYZzhCE9EWHgz2wj6C5rqPr81hKdKnf5TrUY6DGuCzxo",
  "key31": "2FKSS5Y2VoAL7DZbyvFamvXv7DLjwxsmxAQGLiXCskxDRAf4XRTwPJ7ohhDkwzHbC7X85U6cNeKxuLjZSkZbHdNw",
  "key32": "653jmH57bUCZNjFtvtbe4TWd6STLXi7yhhqfEFoTjjrKPGt97Vx6mRVGyDJh9oNV1rPDzU6gTsY12fxw7KQRx2nY",
  "key33": "2am1NawDEwWQ1ST9dpvQcF4Y6mM8Q2rC6V2hjP7mMwuaPW3R6bakLfEVyGC7zZ3fSkhqjEn3zDS3JADhK7c3SADU",
  "key34": "5xJPa9Ja7YwAypUBP6V3cfDnu9dzwpkrvVQUHxSuHgkDaUmr7hKvNzXMVeBmzwePwvVsddsjidhmNqPumN3ARrPq",
  "key35": "3iS2zyXV5PLbXiq5SsxKZrEmFE7jvXeX85F28Cm2g646pPYez8AMJk9Vf9aUjGoLgLW2RJt6v5Ze3GXwnSuWmwmh",
  "key36": "BYohoanPLyBo4tUAHAAGQ7KyBBy39ht5HyEvmiDhjirEavwads3ynS5EeXNk99MAgUjpYA3azZ3knAS1EhSkXGQ",
  "key37": "5536QZYfQ5HLADEUti9tU5bWe2EYB2Mh2ykohfnbkZsuUt19MRtuqz3P5j4ZYa7gLXPUSG59LUj3MfZw56fQhxaE",
  "key38": "28LQKM2VN2rMP67SkvpjRZAEfAXwxPtemZSmCTq6eWePqd9E28EXiRB3aSCu3yLnkfRSM3zWYzar64dyoyje695s",
  "key39": "aNJh6jteFwysZedmfch1tmTr3SLguES88b7mZVtGd8p1sZ9vXifkx7U3vNY1j6DNFtWxq7qyQMqF6BCaVeXdndM",
  "key40": "26r6NmBTQsYFF4oKfzmmb1a3VUv5V4bf3Nvs7NGDh2QpfEGXJayvZe52SUfKe8A3JTLTXtYAQWZGhzfqvjXk4UJT",
  "key41": "3MiPrieYNgkLWW8GsfJXudkkK9RyjmnpUtdZ12ycafEbnbjqTwZ2PZvTXhhX3AJeKagAt5Ed32n9v95hG3g8tqGs",
  "key42": "2uZAkg4GiuzDtp3QXGhFWmwkxKNnAvPzScHNCs7ZXrwSkvuDxRKNdTHU1YyQE23rSogfUrFz3VjPqMezwjgETqnF",
  "key43": "2wWyDuGVkbX8py4CLQcqeJ9ugY3U8F6x9F51o54EjxFpeZxSWsUy7Yri4qe7qH1DpX3HJmR6jo6wEQoxKUr2doNf",
  "key44": "5J8H88yXfHfgXkz7Q4Mo4VtqDjzPYuaSbdT2eEdXhEmP3HK8ZdqX1QoUsemn67LK3pJoYXUmqrfUWCcooPv3snRu",
  "key45": "3WyruqsX3hdk5dyTYKBFtpjKXaxMEjj9upUyQRJyrMwBMPkcEjvJK2jz7N2hBT6zN9MZWrXQKxY423feBVChngQj",
  "key46": "5cqUu9Yee8FUAhLxioYHig2YjGrCqpcDYvuNH5ejgg2VsvsdWpQ45tSXh5anSgzDXYEM83P6C3Cyhe5suP9NgiM2",
  "key47": "3L5kyTgHUJDA5yWq4j98Rvy9reh7puxyZ6HiGp8dPN5136uPwdvBCtxVXtP1G4FRWc3hoP2kuHwi7ijcvK39pmjP",
  "key48": "38KyknU34ByNLuFbxcmBaT5JirEggsLn5VY1yMKTtYWsY59VT3YEkaGxAxgw5F1RrZef3gExfdPemYop1NkZ9gAB",
  "key49": "CE3Kc5DhA3QFRca8UKwrR6Ex8uE4orCLPe7Ecj7kGUj89tpaVpb6sdNCwe3rgCSfGWuAcpF1wvpCmZcnyiKW7Lm"
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
