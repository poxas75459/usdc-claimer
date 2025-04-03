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
    "2Y4oKTE4T6e9TzS23oUC55AKfXRDndGRZRpjm53D823QM7jkGpNr9GuP6FnqWDmyckfBtjkZomS7VvSzDRyrKnCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czoeNMdF7Z4JNHzzPZGbgrDL1a3cUFH5HoEy143wHq6MnkmzYuVab6vsem5YYzS6weLg4aZVxkPjupjhqWkUnp6",
  "key1": "52neikLWpUvUBRv19cpfPSRfgxxEWvvKPDmPN66WZWLX3ohDw8xqDZEfV3R9MotUktNjqiJpxHc6rcVJ3TB2Y5dz",
  "key2": "Bojdv81F9JpkBVRvvmscDxcdQWQzWgcG4f7NUyyjGrBzv2PK8JAATVMQKwQe2D8iMtxEYtFw2KX3XtLKNH6fxez",
  "key3": "5uv2jrQymVVp3CDgt3KacdQXaWav9ZAFq6WXvzaizPQTvq3ab5oDGtrNkGHkuCuMqM5bkLEA2JJFowyDfBonNKbz",
  "key4": "cKVhyPmYt8bQDNwJmDkUJUL3HYjQbE2p42TaEwWr2T4xrC5pWHNmB4y7U5R5UDNAGwpV9JhGPpwsfx1FymUzXok",
  "key5": "2DSJiNfdgyUTZP81FfHF1Tf97SapGM7C3TCWe4xG5hsmqKEZmkbcFGkw9JZkZAMQVacDMCLadkXZM7FhVazXDCKi",
  "key6": "32u5UGHPwq2cA6vjzVur9F3WeCaqhFAPZA4XhtkDGfwpm1v8y74CRknNHvewem9j23KQDdvS1Zq4uU4ynQo8qAfL",
  "key7": "3Vy9t8LST5Xofe82dc4vGeQdX4VhXKhSJ6r44mGSNouuDWF5CAR2KgyN6iLLHPxUhgzhBpSCpz6mRp97Cstkii8a",
  "key8": "5J4qSvyhAudkSL9Np4jDQwqf7v9Q7jVEQSasfr37FAPEa9d71n6j1KJrN63R2WgYGV5WbK74ZVAYMp7UVMgQfD6c",
  "key9": "KLsAhoMjtAuusiNrxWYattxaNVgjpb6sTLVQcASGLsFokK9x1rToRM56brASLXCtoU25s3uFb3AzNmf11ucwtZf",
  "key10": "smMX3ouM9yS3m3ozyKyiy66JUnaZ1dikiAtmPvJGNHF9fTqWaGMJDor7K1mb7Gz6BmCYExJK2AAofhtruSSknEq",
  "key11": "vzEGXN3WW7DzyyA9z5ks2E3vgc9B2xnvZ93f5PUdXCvHbv4J6vWeqJvcnMAaX5sTW8knKp9xDcGQcW5sxJABRiP",
  "key12": "yp3Zk86iMHQWdJrrS96T3t5PYixy7u3YuTs6D4G6bbDo5nGcU1yYHg8XcHTaxZBopu2fL2KgzLGTFkhLNqsbbFd",
  "key13": "3MPqB5gaRfDnoKTiqdV9acU1SE1QK4NL8xQyWD1uQr9VTifp5ChyyCLonJJAVCyCVoLKj3c6q9QPA7mTkUkfeHdd",
  "key14": "3v2WgN2gzYqBWk9mXbvBNSqkMqKYKh73yP9Ts99FsBL81bWdow53cZ74eqzhKy9AsX1Bxxy7oBEve2mCwxFr4x1",
  "key15": "DkKNukMYWr6Dffj7NdjkNzGC6m6K1gRSnPKkJfZybRfcQYm4mGrmaUcKGYhMiDRMe3Ju6YUhAzfuTNrNbBmLX6V",
  "key16": "2zGWYjUpTsCaMiuPtkCLWdx4aPZW6yyJRKVaGgGJe2dkqFBWE1rJthpsgeE7rj8nkb9h3G2qD2vCRYDoPJVNR6Xg",
  "key17": "5s4e3fn5hoYB9hwLyqCHpUxHs5b26LbBRZGFkZXe19ahbMsbn16wbcdhCKeBEzpyoF9Cux4sxQ3YRyuQooqekvys",
  "key18": "4rq8gETqYWeHDJRjW4zZaNtSXqy6ifuuksCGUQp2rt4iB4Cvscf7ZEtBZDGvCH7GHhaPStajGHAHJQv4NJ9Smr7y",
  "key19": "2HK6N2HA5ZZvocZ3wWi3j5XxhLeancBsZJvqHY944VHJjp7ypNbZw61Gn8JZ862QfKT2iWFzvuYyt1k7SwTw3YZ3",
  "key20": "2r7tnZadMKZq8uiubmDReHr8dUHaQWP7SbuB7ba3G7h9AfBW1WkjFZn2z75v5d9Mv3WzTwLDyE72MaC9esCDUJFM",
  "key21": "65GpgWqmg5hgeQ7izVBEvhBYk2mg2uoek9J7wo15Y3YLcoJWwsfFVf7GchvSFd2u5CquARxnTEW7Q34XSarsFnL6",
  "key22": "xJLGXms3UvZJXWFvcNkfWKSmYBhJD3i7dYHMTVnYJonGLuUUMGbMBVFXsNMWr5RByqQz6krmxErjYMjgchBMC6a",
  "key23": "2aqjBncZUU9EsKoEKFx5su7pDzajJk7dJkv849zcrYF2s4SbuN5SpGT7SQdwDJ3LLy3WEqZN5urbD2u6fUMN3ueU",
  "key24": "3HvpASVd2YqdwN12uFqMMFzcs9NVdkezshsJNqSeDfH35ga7QS5jW43x1eJUK3BG5hPWqzweVQycrNUhndkpnUgA",
  "key25": "4aqJusY3ZwQhTwF3c7rxT5f7tczamGtgB5y4a91xAXBm4bkiXxaZuBePyPq9XEKpJH7siTwhQ7mu7Xc1qjayovTZ",
  "key26": "g23v6Zy1RbeTc8KRvkSLXnwKczrdEQ2eJGLwdYhs4VbUiUMhMrbpGR3qmCQbdfdQApeUJ6p8HkMGY4CXkr1DQNZ",
  "key27": "5YLyXy5EoBMMvWgH1Kzo8BcUkw8pxNcs7niX66cw9dvmK1FM9tSAwCDcR97t1Qj2PNPdmn8pNpf1wq2d9MEoDmj7",
  "key28": "3SfEh3nqNg1pAhWCNtgFWus64srQRYgbZAkE4G2ky8ZvWHqNBUKMfb4K5wVG1psisJaj3tKi3fnbW7f4KWE3ZTXa",
  "key29": "5VcSijKY2iyDfv2Y6W8CF4uFRKeKNSAGJRJwwDDKn1nzihAfhwz9GtufgkMXWdcp6RH96ocXgLVJ77FXHbd2AusP",
  "key30": "3d9QhtZTWZtxVBiwhAp7a9kvB6hCr3qVrfmkQBNPgWaX3xcxyo2fzVeE3dtoXdaPHQdTAYMHKzjcWKKQyvMuMiuk",
  "key31": "33VFDL54RzQaYJ3QXb7v9FwKWfgb4dWSqcYcY7a7hGFKY3FuwKfiWNf87DausYiPif18iS9xgzvhQxMVeRDMxjjj",
  "key32": "5majgMuQtYRoGz3iSvg9XwbzzxDmtu2BzLYDkLKcTp9M89YuoKuxRYUE6U3snodiVSuDjMaJyYKB585TDLc1ozSc",
  "key33": "5WqiT76HPBLAnv9RxdhetyBGGkRK8uTu7Arf26SwtxW7JNiYurRGaktjrxtcjyVD5NrfP3HS94UcTedJDde2Dc1i",
  "key34": "p2FprVsbHFvZjJuG85qb9BQCF9qV5VKgFaQpYBUVdRLNABt8FhLztacS8c46ARuSsyD3fKkVfasuafQAmxi7VDx"
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
