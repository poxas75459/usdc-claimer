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
    "3vWPVUKxc4RuJTButmFbV8QKVajX1vE4FEcP2DcV9tm4QajcnXXFv4XBFLCY6ZzcCFLZNVx2G51aTHZTTS8BthyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeMjPJf29uU9gwJpKKMMVcw6FViuQqZZrd2H3i4dYnV2tY1gUahnJghwoTKiWfbVNmuTu4RubNoXdE9dyj9jJZ2",
  "key1": "3HK7ndwasDebBQpRBuwyV3EBAL8Zv7y6N5Ymh5cFHr4PvFRnTunmu4MSkB2D7EbTeYEqYtASBNZCpuE7ebxtNvzv",
  "key2": "5LATmtGSUTULo31D1APWyyB7J4gD1JDJJsFVo3Lh5vhAuaHZpRUBa3qDU4W8UYUbEENNh7JctvvECSAeuRuMunY2",
  "key3": "4Fjj4EzKdNii54QYUqLs4pbtMuksA5CEVaMkgmCtnZL3TJEVpFrkKNEu5swHS3JYtbVDVsBCpE8HRENdXdUxBB2N",
  "key4": "5yJW75ET6rJSJsvcqmXmSjGCzAJqvpMgDgvUNGWvBtHvbcbUov6f93UeSHK7N2n6NjAKLJSNu8gYr2YPqKo7r7jD",
  "key5": "vzreb39cGSqJTAd3kZfYCHDfCn3MKV6ZoWkepHfGDGZ96k6ZaJMDDWXEoLuQjVKopkT4YLfqyPS92usf71rciRw",
  "key6": "4YhbvsqF8YWx5N7fKZ9SFDqYaG8mCv1A1rNWEZ8VVoSwRovnq69hWVGGqNqGE5yo4NYtrjtpbc5eokWtaLLHfF3r",
  "key7": "21XSdf92VTDDuzcEvNoA18UwdT7dEM89cHLcyxSgGyj1uovFPAGiF81bgvmAzmLuHQYRkCKMhVc68ecCEoDpCjQL",
  "key8": "2nGWbAm1PPDgokd6XjiZeSzWkSUY4JG38zKQdQSnUNE2jsf2ocxiqAx5Y6DPVKpDKtY8ufx23NrmGmMQDB3zhogL",
  "key9": "Ebx36gd19qBtRmDfUmJGNK4ZgoGU55gsVe4fAiKqC2J2yWT4TPc4HwVoZvMWPFuPnea431XiuNibdGpU3UBaSrk",
  "key10": "2afQSRxabmy9GjPvjapcXLVoBfwz3dVshMjDQ7Whf3PW1YarJ7mMNUqV5Yg5awZhtAqGjdTeETJv8xqeaGiJ2z2E",
  "key11": "3dEp3RLQSuE5KjFFxJceHMKJPQj1sa8o3F2DqyVX3SD3A33H6gsoYC3pEEPUURofgsQ7svYe58RcrXN64umCGX4f",
  "key12": "fsBHcXx746zXDBs9jiu1MnzJYvxL5gSpmpGUBKuEkMarwTWhjqJ5Q2zeeRgfccaMxJWrq5XUXb2afVWQrV7R6um",
  "key13": "NnMHa9ZkWnpTfxJfwtfSTF8AgLaQDMhDS63ieTTGEtWy5tHr1EieQ237cHq54W1oauHBP7KgmSCEYB2MJxA8o6R",
  "key14": "4tagz52ZZj12Tuj8R1SaNNvUENu2WTYbzt97BhvZYbBfDR7KLwJRBvqWLHvaUcQpJmg1zj6MBTL53cuwVLymTC79",
  "key15": "qv3oWg5e6bF9EPN4g9uGJb3N7kJUYX6SuSEwvdVnvrMwtydJNRfV7xBpPjGhZryeuxvYhcPuJxeP8Bm5PhMK7xW",
  "key16": "5SxLVg7xDZP1h9wa1HGa5pdKrpjd19o8nWrYhoqsYkmtnHN5TcUmC9KVFpH1grVZnUacXWeZPL7GbDUkJy3FcBoh",
  "key17": "3kob8D3cw2KL85kuJ58ZV8MyRiMj43rWWxh8nf5cux5qQDX8fr1xKKGF8LDqoYz5SYJ2yx7A98irbgHeWL4MhHs8",
  "key18": "5HQ6sDnyyCq4KkPUkvq3XozyLsXMBfDn7iBcqbyPMJaQB3S6hXyozWPwSKq6xfw1qFgmgKmE3PqjZL7oKE1MDCoD",
  "key19": "4yugeLpeGuyhVFeJhuHWq1k3uXewDHXcxjDjZZBbeupAnYfabBv48hzwgEzKvbHmoiAGkQVedmwNUAELV8i46D75",
  "key20": "32J2eqhAgmuwKbfnEwPYTxzGe6N1o8CG7vcwfReUGFAADLFgMjK4thNGQUTgXKZgsvU3jeFHzP2da46TbM2qCcAX",
  "key21": "4gRbsLwTgFMPQr85pLVLeVBETh7jYgdydmyZxxAbGZYncVtLwon1acVthTFiphCKgwBZRQ7hqsv4gbhAhmtUhUc4",
  "key22": "3kJmbTCwZN5SgwhxUKutmR4vGSz2ZHQ7SqLom7QgUsqqEMjfMpDLWZYrsPMnA5USA6MHs4cPjyGGAVMVi4C6aWcu",
  "key23": "ZbLSHEdUHbc8GAkmT6TsvQ4BZz6NfkqVrbnPBdYWhdWgYNzJgRn2PNjdfq1sKoTPsb7qoqni14BipB3ePXe9i4b",
  "key24": "2xXY9NA1VJyZ88Rsnqajyq68hFNkAwHVGkdas1EAaj9njMGTn7MTFLuwX3ELRUh2aGQk4avD7aPztsBPWfbx6MmW",
  "key25": "2fX2UR1pRmxa4ZChDBmDrWr77HexiZ1XbuqKNV9nEGFJVLQGTWud59eAkrPuXika66uCqjBvyrhL2hN6W4pn98pc",
  "key26": "15AxpRxzxRSPdmt9L5Q9KgEFRxZcpbtPQQizQA7k8J4Yghwbhmw8RmJFFRoXzY9ZjoyTbrCvjm2WMgqChkJzKht",
  "key27": "WM9EY5faAjpp1NXJDpYpbBY4AcUcFkSqVaQqbFbwBARjPahqEQZ1gAWCnDVHtHub795mfVgavqhsgYqSVKMy4G5",
  "key28": "2UBf8x3GmcnKuCaeDprhxXkRx6cvbvgZC7bJUjx8qQcqeiEfaiz7DBN8sZzUNHzcMnCk5AQqkaUrCzipCKKgFAL2",
  "key29": "RCKpiTA4nGntsCjb9wsqL8rLUz6Q79zWfxQpBezxFDcKuXVTUn58P1vuNN3htV75oHDNv8UyVQ8Wrawmaqs54KG",
  "key30": "6MvEAjYUBE5EjTQN5phiegDAPSakGht3eKkcC4VqjFG2sR8N3tS7enkus9oepBsrnAVwUcc4x9vDiUxDVq2Yqs9",
  "key31": "3bSGPS6vkTizU2SDHZ8hFGY38hg1iPnpz9YrbyFiXmoYMGdQbnJVsyH7wGeRk1i4zCCPo5VLfu2awt8p3P4VZdQK",
  "key32": "acS2asguKLEaESM2m2ju8rrbjDRQX6xz7v5T34kDctBmwLBjFurWV77WHXiutxJSbQ4xHEqpRHGHjaoXWaSi379",
  "key33": "4CC6MSJHJuRTDhRWaSV6p5AL1wza1hTqoQ2Hc3GxPRo1RWPRfyr2NXjnGUsunpCmeX3yj4ggbXj4Zt7PENhkY3kz",
  "key34": "3wy13YxpXsUwkSqCF27GdEYK6pcpXSttvRETYxbvXLjv5NH9xMngvkbaQhZz2DvrzKeDqS3fiGg8yVCCK8Lrr3cE",
  "key35": "U8wjCcnH5ZD7uvLanqP6M3QX1qyB7k5haZjTs1jsVryAAwg9F8d6Us3wXtryUtDztTbGei14fkQhWWyeTMB9amd",
  "key36": "JtnpiJWxJ8Ws4JSy7Y6HyAoNAcH41g62ccrPMne8CUjDbumqU1m63JuM92PYfbZkGyM3xX8reStVTAY9jnVJh1Q",
  "key37": "5BGkoshr9o2s6dPGQXxkWPXuNrWFX4hMqFhCUbcJN5YBtwAVqF2aXXycwLw3X1rGH1JUKppeYdqG7Ygc92WFDBBt"
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
