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
    "4emSQWR31aycyUbTbf4mUWtECQR1McmfVoj5GN3G5cySgQpm3xxmXRRtRPytAiSVPJ11ekuUCYR3GncQDydShi6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQxy3DGvK9zEeKir3MpE8oziZ3wtV2SAH3SdiTUKj1es7yL7iZzpCfKs9Jy2i3GaDTD9SPAGp7JZgpsBUwTL5xq",
  "key1": "XpgLbPBjREWnEUrLbWeV3pw8JU2eSMkKy6p88cae1CpS3jCfc8jccKfhWe4a8UYt7S7e9S42M1KUAZDokQ1RQry",
  "key2": "JB63aZ9PwPBmTWhqdynYYSw5FSHAWrGr8AcxsRnTe8Ln4ybkXR6eP1sKXpuaocYLWJVn5KGUGi1oX2okBtRbZ1A",
  "key3": "LoLaX2SHtbmodRR5j5iSYS27zCoz1WSYUjcc7gBkkaVpDkYcAxyuqM5Lp6MchyQWVyJSztXMssxScfhVUuZWYic",
  "key4": "voUSCGvGFHhyF5i7aPJT6LCVynRbY6gxLgCjkNhHo7YdogjNubnXcPZjoUAGJHa6WH84bDhijAQvGMBUpgw46Ji",
  "key5": "Fi6yrsSFRjdMkHqMKiZXVVyd5rFThcqSenxm1U7h9K7TaLFcFFmVgc9WUGUKS8xTJ6XZjrbKCauWiU3VT6TwNkJ",
  "key6": "3a7TSiG5MfPb8JkJGC8KAEuUD7SXghjeNVKtGuaDwujLyrfu2h7HnNgemzuzyksqwqQ7e9q8eFkh5UxPSKdHR7kM",
  "key7": "2BqWBWfrtPHEFZ9S3UoMbqYELmkU6EfzpxwcEwWwnwSQu3fifSAHbFkdB9Cs8GBHZSAsWW1tFQnnYWu2V8iaWyUJ",
  "key8": "5DKj6GXCFmfKSpJ4jvKocR12baLdVA2NqGvyXpkoCRaPtocGi5YGWPyv7vxM2PAewHVcfMSDgMN6nbULgQ9FFkfJ",
  "key9": "28w7faAwQiTz1z1sXmWi9AQrtVYtuU6WPCUCWKCabLpGBUN9Sc6bbXTzNqeUtpYRR7tCTaH7WchJZoYLvK1EC2HG",
  "key10": "2fg2DvKWtzbpuvFWaxdbrnoaMhrs6cshVZmjUTBa1U9bEVFnSEiqJwZENpoPh55LS3eJwgEVsGn7UmspkYok59cC",
  "key11": "3mbumPWPWUB6a9KSS6azXVXzy373sTfRoA3CUVRKik9SLHYiZNmnntbAkTSKrwSWGp18tqK2RCKti87vAL3NUwrP",
  "key12": "2ixVwdKTTucqfWtRHFyZ2ZjW5NjyhM3G89ZLZPKgJPexhXLtzAF99x3AcY6wyGrzS4kkvRFAL6EwNuZ9GFjffJ5c",
  "key13": "FFYZ96CWMT5u7KFc5SJpEhJxo6rEKwrL45yDZMWh42KQtr73YzZBLtyKrZJL2V4ynaEj1JWEP59uw1f9myi2kX5",
  "key14": "27VtJPnXysL1E9zw41WRoNED2orJKzdRFgSbqFaeJAApoiCUPzkVy7NBHEZFceQ8VpMPKgbWD88j6Y1LH2PsqSCV",
  "key15": "zCpW8GfP9rrVQeAcgVqDiY9WZDgFEBugvea5BRx6crTNQkkSK4SmtahJ5SMUNd4Cm8YQ4swpCseTenTjWMF1fg8",
  "key16": "3MNAyWmSWqihmd9b4LBrn2oFaTnPdZcq4EF7RiyjYV9uVp82oBJCZumZhfw9S3DMmqPVPjxLqsMvXzxrYnCoDTso",
  "key17": "4RboEkwyacr4cNv29zzq1DNcW26qrC6UeLvnMmQKzdk5avt3Ue8H6dLWU3Dv47zY3pvQa7VJuvpSa3aBv9T3v4ww",
  "key18": "2tXxcBpW8nKfTdYkGp5i7abcdXVJAUgZzjNLbuHWH1huQz4yECSZafbDzbbY5yZsugAcj2sCA6Qp3RqQbQMALSTT",
  "key19": "v2KF9vzdnpBAmL4FSBtPpN4NT42QxycMRR7dSHpCLVA7GNNFCoXS7FW1DDQQhbdovjqx3CiW3gfvwCptdJrqoBq",
  "key20": "4H6xmRd9ZxUYve67vSkzsdDCL6g6nZMYiqQpeLa6GWEadJBC6bRfKhoVkzUnchTQNwFg1F2XYNcKNia4tYengg3b",
  "key21": "4kfZkVBtzxyrxrbyPaZituzPMe8Cd3ypa5CrGT4gBVjNUgwz8KhAi2eqMeREVtussXMkH6SQefk4AHZsuVrrCSeM",
  "key22": "5xCZKH9muNDS8kTrudPQrZ8jZ2UuWKSk55YsyB8ockt9uCDvN6FnpSs9E6LzbwdZ9ES6yBXBUd11jTLMRWAoMpSL",
  "key23": "4VzdYuA1CWTxEtECLfDKpuAZg7roQZo7oKM9SVssUL7KxzsBpcd1n5UKH6i28sbnFBizDhGSL8n1gaajyEBXTcsq",
  "key24": "3MKjzs1gWdxk8966pSADhj7fFbVZf73LA9X4fszyaSVBbserzxG5Jvng6beVPRmwhGTkwDjd3B3NnWt4W6PSDMuG",
  "key25": "4d17atM3Sw52vgUCo5qEPaLdQHg5RfW8SNiHTUj9ghfdwdyP5xh4rXPeDFtkZP12WgjvNzrzGcKpgvB8QPoFhMAT",
  "key26": "5Fj8HuqjHZZXKEYYYXnixELkiyy7nxxtmukRc9fq5Rh5TUWWRdpRaG7gSTKqEXzy6EUFAJSBT3mMpXzTEaoLoWk5",
  "key27": "4owxzd1Embk7PJ23U6WuSWAUHapbAg5gQRBSv3N2uUN2Fjq3XiJ9AneUS9ejmEmAY34t3wav4MsNJWJimSDnyiwx",
  "key28": "2QqRjowg4mvcawL6SQ8xxK4CBHH3jYHBW55yoBNrFUnoTyzNuVUD2FcAfg6pkzboicT16SXYzWnyu4GddFWqCYx9",
  "key29": "4woNFJi9rxr8i9ZFvCXoxGGiedwdh49AbnbXrnmonFqgmamCELBuuZNy74pY9S3uHVWJLKnKLJ3bKA1gSeoHAzq2",
  "key30": "4Vq8GLJHiJoc9DZK9wFbaFaeYyCWi9wB4a2fVHaRGNorgwakLrNgXcdsCJSZQ8kewacmSg2axXunYtm2Xi3GxGuE",
  "key31": "5jfM3qFEaUuXJgUtxLxJ3gWkcputG3d3dQcwNA2R5FhF7XT4A9GvFjBypdt9KxUaYi9HE7sjx6ukQWvm6soUxpS8",
  "key32": "4cx6BJ8kjqjdhRLpAee9STmU9iZFhDGsrn9dXEeXFfwKnqtbz6ubzZ7okKWXfE8UiLbw8yJn7EsjaJgEyeTeafiL",
  "key33": "5vjujV4gs2ENERuvVs7oA3VSjGMxGNhPWkG4ieS4dhXz9ASy7vp5sS5bznrW7G98cQWJxHHwrdX9GXBz2DVbQnhv",
  "key34": "5895TELVxnrxg45Ce2e1eDug8F4vpoGE6T1ZpqKms6TvXD2YNz5PH9t91s4QT95uNPKWpD8gnU7ZDbXNyPSgw7Kd",
  "key35": "3Mqg7fZA1WnSwhEKXeHJ1tmu6aeXa845skfXBijSG1YEfGG4PV9poqnBvuZvBqChuwvFib7ePhWhhrjyV8YjfBBS",
  "key36": "3Jnx3CNAqPjnB7Ayfh7rtkr1rBnKxZ7vJeSNywUqM58XGbtLx8e6gcokr5rTNPQxxYu4kvwrnnaeBG7kNCExZLwF",
  "key37": "4aLWzED6FVyQ5jjeB3HHWVQV8KwVG196AC9Hh1Ra4nTnyqhDaqpx3R1VzZtXGoCPVamagbmWRytN6hEnFC6HSz3J",
  "key38": "3uo7dvEDATifG7KMidF24mABpjzUJdXGRucvww3TBWv5NnxBmZ9umhf8HWz4obbLiYx3cEWj6BL9TDh5KfW2s79p",
  "key39": "5zoEMazXFMvpPvpXi86SzxK8Y1nQ4QwApsmBN3vgcB8vnLojhcxLXSmPBKxRafm97AfmDrC8FrmBNhYvzMFUcC1f",
  "key40": "4o31CTvtm8eTmAxtq5d2GVP7g8o6aWGnXYiS74XJmrWxMByYRJ5ENGbDENQrDBfPXucSxkynukVYp9RS7qqpbbss",
  "key41": "45tyrgiTHz26ou5XFhRDYnaGVj7JyVSGxN3GhsbM8zwriBW2CPjyMbjN97ZgN5LDT4Gr7f3TkfgZNvXykWALbw1F",
  "key42": "gwc1sAYT1i8GDkXGB43J5PRUqQNP2f3qdgmgNxN4b366iSQZ6L34XqMmF4qHrEfvyif5eG9Td5yW1ufcfRYmuv5",
  "key43": "5ysVAWpiwdpJYThaVY358NqiPWuBq9siyBaZ1NtG4XMxx1sCbkjaD5U1vpDY1xAB5zkCm7iREsrXgSC6QFgfnXyg",
  "key44": "4KS9eWi7V1s7cFqL9NrTJQPP8CKXtZEDzf8pSZesCptgj2i8Yr1gCmh8E9PHEXgMxXZhyygpbfNLitmFnSFt7YQK",
  "key45": "K1KVb2Su9ojjHaSmBW3uG4GLTanQHx4kLbrSxxz8Re4zBpCMi9ZVBpcceUWJNPAd6S2Kcd35ocQbYd6hvGgfj58",
  "key46": "5jqLfFNd94rZGjxpFEj8peuDeQPAQ676G7MGTd8U84Fczyx1fFobf8qGXiSfyV6UWr2uMfpDpc2V1nwJSQsCbmcD",
  "key47": "5Q2NgmjdK9rY8qE5vp8RQfyK3Z4Q2MtSbWujwmi9DRx7gqKvKNpgcGTe15TmxAY9LzvhLB8ozvAhtJ4ogt1DSf1Z"
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
