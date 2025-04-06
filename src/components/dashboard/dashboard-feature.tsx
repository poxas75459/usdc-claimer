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
    "4X6wXSaC7xUCdmg1ZdUXiMWtuLntmE2ymLiPVid2yXXUC4tUro3nxRGsLJFwS7VadBaQGZNhnJg2mp8jzbK1vsof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrShkFboziq74zCkAbKN1nJ98ruoPHFEnHK5T3YjSuTdXP8ABjMwYfAeSiUQgbWiovx7QU38kpC2STizRq3pasT",
  "key1": "48ijT6UjJBJbmjz4rjQ4V76VkhVycueDyY2aSJqGZWV7vsNQJJ1w3WVLrHuzZxMRqgtem3gVJxvZdaM9CmEzeXzy",
  "key2": "WNXegDCBgXskFDkdJGcr79nDa3Y4XLuQmyGw3jbPFjdbuJC9FreeoWoErehgZBzNtXRjnpwix7ZWVDKxWoGecrT",
  "key3": "2jmF7iDfzzKhxoruSseg2qrm5LmFPixtXmC9oD4N3xMvy51U8stmdsQKBSYQzPeWjK7rX8np2er1CcUntXPHQzon",
  "key4": "2g7WbG9ZwA9YphB2NuCKNdFEXDh5LEsXJbv6jj8jbn9RtekS3is7jE9xog81osrcmXaX5MbFKbN2Stmh3GArJ37C",
  "key5": "5xzBWTqfqSd7aYCa5uJ2E6JGqyYc7zvEEp7BUFq1jy6vbegzpFumpFb7rvWz5mt4f8smAxViGnD8kco81TQAs9ec",
  "key6": "5hkSMmFwHdhBa94tQp2abfUhDtxujF7N6xVAknLixHhWyeAg59dTfbv8wbo4jhpCkf7upgRMo8V6v3ySEWYiDovJ",
  "key7": "3xsKX6HFnghWrN2gjgPWuVVxe6ULT9GyAndZSxrDDHXdUznQ7saWciZCJzU3CguX3Hvyvn9hyFHSoWa6UbwX8TYJ",
  "key8": "5dhGp8crbejCJTM3zrpsMHBPvHCaqdzqcNjE5277hRQPaK7MpU8y69hBw7cUDAJwDLVwPoTriKUENVCBNDvaHx4P",
  "key9": "52tmGmwAjruzDmQYYXkQ1vbJ9KiJnTYZmBBD6b1egJ4DXWeH45m9s4wBeZSXWZVE9byVvrqSivq8bhkFbLyjHqM1",
  "key10": "QZXrkiaeCRXxZ62jjE6TWaCM2ZRABkcPvK6iXLCGcmRsjLVdq8Ycwy5xyuLmJewycJVKvtAS8XxHHeNSUzzZkJZ",
  "key11": "27sv3kAuuxmbHR52XS9W99VUcF8EDbrTbtozSvLjWi4KoiWgseKXBWNQmCD1p3DhkwtFEyxLVK3kZRDPPKkb4h8R",
  "key12": "4s5Jg6uk8ySk1jQWsspYYqrpo3icTBAAuaY1xXsuBdeX81r69S3qpa7fFdNLTMRecLY5M3ZCdaojWN8pe3be6y1C",
  "key13": "5RyyJj2HtjnYZ4ypDcjqfVb9VfwdeiyPHQyieCvJWsSG8dYxTndjMGysSfzqkoVzmNSMo5XM2nfA1Jgvn6txakPH",
  "key14": "2iR52FHKx5kwExCktxvGEzyTkJcC57CCv3Fe5KN85oxAuwwXKrrRdqLb4gD56tJ9yiQirVcgHb8KrXBmsUkrCHqo",
  "key15": "5aMNJpTHTtmEgx7ChzGGTkuJhATE6FVC5osq5bES99PWdmK2ryd9b9xd4zeVT2QCDY3o3iyuCdBxYis2ePN6qquc",
  "key16": "52SdiSRWRHdiJhfpRiA7xUzhnw91vRirZpnVskV4wiicXZPLCsoxEfKB4zaxbtdmjZ7k7BF6v5BEZMStoKu33KQN",
  "key17": "5bmKPdXQrvSzaMotEyLtgZgXNF3Pphr9zQdy9AvsaCVNSCnxE3RXofJzW3NcxX1EFQb6jpwiwRuB9gzEkJedrfKW",
  "key18": "2vZtYohiYSs5SfE8MgFJAAUJw1YzNWJNXFbEeVXJuxwYWhWXixSJYZaV3MKLthE7CqDQ3cjyDDRYUvL9WwdmcBgq",
  "key19": "VKeRWTa17Pw6zJ7ew8Tb6wmENxnv6sQE7UwG7H723z1Zxxm9mtgV6Ad6KxGQz1DjKhQWc7PoJyS3XEmHsJMnRVn",
  "key20": "447BNLVdky1AzaCEjJPXjWZQJWK8hNNwk2oodQC7X1GG6ctNwMbUsqdSabikGQpugopdRuZK5V6a6TsHsoNVNhVf",
  "key21": "3p1VFuq5nnsHXW7cBR7oQDMa74km6Sbwx6td3WbaXSAYLXvmMEKdg4hFherpr9U8vNR2jsDkQb1QHNHegHHXoKHj",
  "key22": "58B2JeUNGz9kHj3NhqVqxCkMo53Pgj6qUoVLoEMFXQ1emZaYB5QfjQBgBVnr7PzXeyiEAwJgGAYo3WVmgs6vcPrC",
  "key23": "4gL8d6S66tyrr3QAexWzi1fPhwMuvYJmFYQXQDKPmAWEfXKmXg8L93qq3BR5tXXtEa3uZRqKyC7zyUaLdiB2corw",
  "key24": "5hTcwCxW6ue3shw594Bg2ExiGVhRokPB3Ay22qs2SM3uiVs8uChPfu93ituWiXb2dTjjo4oPZx6A8bAzNzC7MUsd",
  "key25": "3mf7gevKWJxqFtKG9auZzWKWyknwt9rmdVyRRC8S1wWS82x5qbpaKmQXZgebbCyagNmCw6CmA38SFxRHXryN6iCh",
  "key26": "4UBFwFEKngqgygbGtyAxra7CwX6NazwLs4zNSZAncD2GFYqh616s3yBVsDzzFQiNEMN3fZGWVWXGwMntxh6Ge8rF",
  "key27": "4U7FKH7BbeQTdndga4KB8rpWhptbFxgsQzEQK3PKF7H7wbQKhqhn7D1CdHNUd5Qw5fzmudwWJ38vtVQnxKNcV6nV",
  "key28": "5BzbJ967khMs76TqvFw5MVW7wWB2VfVMiEiAv5PvMnwPz3kPcbWdqgNyy9AGvn6UUZzf246TVC9dBV4eFP7atnzG",
  "key29": "5SdvTjYCXWvAYubmrxuQjxHbxGLJ1Hg9QSPMvy9vJZaeLQeFTQPfVvtrk7mzQchPc7vgrPghjCiLMYnTRo9NpbZA",
  "key30": "PzTRMJpaPcufL14dno8VEZat3podAPdx5Yj1wQF6Nok8VQuy42devWG27rRwDakGHxb8VXHt5zbYadFoAtgCBqR",
  "key31": "4AadXyd2cFRCkHoeK9t6Aa8cQmgu7fXkr5RrJxVjXVKHT89aCz9yyhW2AnxYah9YGYLDtZ88AL4EXbVryunNCnWu",
  "key32": "5XGi8iJTguedZ13BC2pcsK9jNN8oitpbUvT616HaPqsixkshCoFor6drUqMMcirKecMqYLxnK6uXDSBJmgFZKi1",
  "key33": "5ehSuq22dZay2wDPuA4N93ycf7kk3cZ5bkb5iFn2kGDHqBq4rUtV5zLtuXPZ99SUQFAgsejtofZt8ALD27ifx5Sn",
  "key34": "4aaX1r1NftAZmtUEMEArwvpD1F41ZpEJawWGj7ArrMHV113ibMp4eLMiavGVw5qyqQtz53aWL8YP8Nb3RBCYH2NU",
  "key35": "2yDPDgXB6gthMadLCusNpkTK8YXzpNNpTtV4FYEMw3w7jGdpFHBH6txs2zVui35w7Zn7iH12pNNy6YdBJsZAJVGf",
  "key36": "2nksaFguYLsogXn9tj12RvpP5AJC73wW8FLX62vPj55b2Yd12zNb7Cki6NnSYG6x5JFsYigGHKHjMGL9XHoYvrkR",
  "key37": "23JQq3S9NLm8iLrKBSBj24TmQfUtzCDEw1NmSyQ4KLWac77evsu7ccactBABUjMUCd2gSkEqXxBV7HX6oshgtw6M",
  "key38": "2yq9BaNwsSUTikWkg8sVLRnWKaDihTE6dnP6C9ifs9vQnbVqHvvYzs5KFK6qjVuLNP5fvH6HjWb7qAit8V7vGDrn",
  "key39": "3TtzdTVLWEPW25hwBYWrGxDMsXnKRh9wTqjvDseioNHmMpGNFUrGoZPhFgPJQP2shuopPutN4zhHkt86mL3XxcEX",
  "key40": "U9yUXryHUyFQajPoRarQW53B9NJ86PSZkC1n8HFaTsfucoNix3QcawsRurTrc1pzphbNVcjkVkajDMxsY8BCtqe",
  "key41": "62B7Kd1g4Pen34eqHDK4Y5sinPmaFd13VzpXrnym8Ai21Aeruqa2zz8aRdWGvVZfeB4A4WJfEENc4z18u754YmeM",
  "key42": "4YtdcrMa6bZ9YmhzSyWJFNjfju2ebksPoxCsgks9oZWwooNhWTVZychQW7usgayaV7jVrdud3byPgoc8JvjHRJrx",
  "key43": "4KyRgXMkNA5sV1zTq3pvT8A9MuNjkzZw1ipHTQwRDKCKpfHg1NxGrKppCsXFrsbomZn3vU7G43kKvWKqi3nFv28r",
  "key44": "5hKJxL31v1t6ue4HRKRLXJV65qX9hGVY5LbKkkh6PjVGuM1qaa2zgqWvKwDdWGmkw7TckF4TEB2gFcVGBjDmiHUu",
  "key45": "vsCwP4sjDWTr8p4j99aV2j5sj2X1My2ZCZjzNn8zpqfbjXP1p59wkmw6J6wpoj1S7qqYuotHnrojeuqgzRp4L89",
  "key46": "qjxpbPJxgz6LLUNBicRZ8NPqLr5dWRHwvB8aePhrY6UzthbizwcmmFAQR9vq8UqLmZq2SmGL6ApsP9Z2WH6rhm5"
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
