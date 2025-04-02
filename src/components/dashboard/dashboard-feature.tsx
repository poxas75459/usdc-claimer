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
    "5MwqChdDAzLUFeR2FWZFuepHuY6UX9WMKSwaenxnVGRxpencH2H1KyGpqxMVi1PhF3Pm1BnFXneUQQSHgXB4ehRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1RPEvo6CUdmajgSAQNkGTRXoPWPb6LksPS7VdUDJNCnLLzsBKMb1Df6f5MnWSKp3P4RNg15AgyQHzYDfPvWR3v",
  "key1": "kdzEPaKf1CtAoYHf5BsRX7K5G4UrN8MjJaPSw15dtzkKxo5JEjkxDcnizDez7HrQCoWgXTyC21QUXjv8XxpH2Zp",
  "key2": "25s6iAV2pNRpHTtkFCXPvoJQtcg5rFmQGHDvZwvrexFMmfxoAN4YK6zT9ZBMD5YYkhfnn3KMKEdRSj2oAu8tKLRg",
  "key3": "5mEdnKerxDA8aWYhDVfhKSREE199R5w24cFEgkP34nGM1jW8TezzxTH9dtk3DbzFe9AtSs1NxKdGvUBDVp1QJsRU",
  "key4": "4MJY6Tobp7oirqmT1oEq1qomwLcGpLA8DuKKW3P9YVNc1crLvo8D1YGBhowxRWCsjYhcL86M12GcecAnoDk4JKc3",
  "key5": "4ZymV1h126FZnPfKSS3ErHiAghG5W4Jy9yJ8gQjwbN4PSn2mhAfduxn5zpg649Xh936BFpKNNhYtJZAtfhX3prbS",
  "key6": "fZ7PRDUGcyiwSVj65kPdM1TTahcaXXUmcn8fxPkS1AM2KTEELm1CpbujtqDkmqEdbP3csmZ4mNYtFQdY9omCLE2",
  "key7": "3XRwEj5K6Ngdk5LcyWHXCPB9W3D7uT1hU1mrLo9B6iw94kDubdMwL9zTqvoMGGdrwjWRiEovEonwvFHeMttrw9ss",
  "key8": "3vZLPDD1qiKtwnWd9ZnTVqpgmmvqqSE52217Ai2cjEy6LjqC7kQd1Q4tg3t8Xz8eBengyH35VxW3CC8Y45KJJ8fM",
  "key9": "3XyNBBidyRN1KNZkJB8FerUUBUt3H3p5f7FYtZFgq7hSHxZyomLWXVHRxzFDdZD2FcPAX64ZY4WQtQbzfhJNYYZr",
  "key10": "34ftGkNje2ZDv4vRYynr8cMoUsZv4xKz7eo2SNnjJC9FdYwbpevcudx5KVTYto3NqK8PeuW6fwXPWetzx5hBSZyM",
  "key11": "5Pv86TWAWPVTVTtN8ZYukReGcmKnJSqXDA2p9az32Yagxo7qWWbrGdt8nzMz5RxjZ36C65zkwmEvL6rqFXLUguRi",
  "key12": "gHG28nFCwNzh4ZqnWpbsshGPdpUSbqxRHZT5m6UYYL46m4XFtTwMgQsdNxKsJkmZiN7kD8cCTqZnBbpV8ZgmyFH",
  "key13": "4wnVUtxQ7BaFTFUMm8WxiBbYRzSRuASEbq5Cz82mpzcXRbJAt9xaZvpXcX3LLHgKXYRy8MjLMUJo6X7jqorCXHhq",
  "key14": "2a6JNcB41drgtHDsUUg9QBgPvNmpP9RWAqz266YDGHgyjogy5fkdo9aZjVVwBMQpK3x31UNMzDBeWa6pDotdsnUk",
  "key15": "Taa6t4QZXeV7nVhdxSeStdw3p71tZyEfbkczCXRwiPywMvZsGzuHCJKMYCewdh4PycnAxSkxQgQA1MjTdMMyAdK",
  "key16": "K3NwMxETutPHuZpYBBTeAtgVXX5sFJEfsStkhXYzYg1Ee4A8WPx6oCMaDvADU5b8GKdGug25igPoY6Aoxm6JGnw",
  "key17": "3zJAWods6pnZws3PrQ8Bp5P3nto81iZzbU4k3GKiRwv5xdceWWBrZDTguUDy5PCGPbSMsDYRsRwd1n7VXJDyPkBa",
  "key18": "efeFixqwXhvqNEXU1kDJ5yRw7N9UG9kYrHd7hNKusekRXpmfAG2Yak7waFL15PqfMHe6CfqbiDfsu2kaCPMGny3",
  "key19": "2ZNgrQMrA91XjtsFL6o4nSxH8ACMADt3tb1NVA9PtoyRUjeTUm62k6hD68oUfvkS6zhgUtg7vb8GSdG8Btt7W38b",
  "key20": "2MojuiA7E3h35N7qmREak6QFMgRyCaSjRgw1EtRALTcvNpANqdHa7mSEDhnYobh1TgAMbkAnKxEnSxKVyEimC4SX",
  "key21": "4zHwU1vNKZSEmuebNDJM3aD54JzV1fSpHpmPXHvLUCTdbAu4PPtvJp4YBKoM2Mn3gWdNruxcdp6iChRw4uv72q1M",
  "key22": "3nj8FPs22WnGYDEqkqS3Y95FrXN1WBbJi6ZEBmviH2aeSc5tdpNhMTJPJb3niAki1go8kH4eo7raoAyTiprA32xF",
  "key23": "4sWz2iZbxWB2KAkWnEnC9pMVe4Y4zSwh7pcUJwA91NiWnwi3KNYKeixxaU4j4ETVy3HC1s15kcvAdcCnjf5nEYSV",
  "key24": "3YRY54eRfUK5DWVP2dXzF2hxmZBQkJQyUTkSaYxsU2mYsKqzfyko3pY8e7o9Mtz9nxT8dnuqH6R4eD3wvCQp6PpM",
  "key25": "4y3M1xvrmae4e8mQw5JXpXnFgoFUvZVtggBBSELBL4txHtQj4Cyy78VdauQVqo4XTMzHEAf4SSVEessvnuTwp1P4",
  "key26": "5XzRXLmc8ycJmZ9ELCBjRo2xzkn978MmMj7ZzDAJs1qu3VSp1w9Ddh8Vo9uAv97hxuN7LSQr7jewqS1DAstGmwxJ",
  "key27": "25fo9MjjsDTuZyaYUDNvSVXg3QzpqrrswJBJHXaUVuPPKmXKNANSzCiWjpPCTF6wiTSRvvCbv9HZgqUJkFfwomv8",
  "key28": "emLV9xXEvnVxLDEg4XTeL3fZqkMy15xDC1fyahK3FWkp5t4QZiw6eRGZgszaJmirMXiqcm5Cp8p8u3PfBJFx2VT",
  "key29": "4FR6PD97GXSxyUirBvxF9aav8auNh4CC4MZ67HPXir12DvGdudVZhkBDiLZ6CBqvZu8xxkkE7ajgstPcjZLrCVYx",
  "key30": "5zfDA9sMj4m8w4GSsQfzUQKn6RXZthpXGjc1jPtyyHYi6g86mct21goMKEAmaV38ZrZbSYdMwZWWYUvt2P4grbdp",
  "key31": "nRFtQxRwtsu2VJFEwGx8ebybZfEC4cRiBKLKBzescKxuA7oKhLxvVQKypAdkKToHqasnRDzvhqSUMKoNwhwQ1P2",
  "key32": "4T7gG1JRPuQ98e2JjaMHtkeDT9MaDYpQyYTFEvSVTBbZZ6B8b5sMSzhboGHuc86MeZEWAztpdr2TMFNzMXtTD716",
  "key33": "4vyG9orGReAKvMEUHmkZ8QCPNf9uXjVJHQZxzmRsW4PgpTa1YR5wcqqt355hcbBQ7wx3VCfBDJ25JYPUiMWVV19m",
  "key34": "3ifsBSJoQyktpBSR7m27nf8HK4UVZfCfN72HZFi8tPGEnAMh4TvfhMRiN9cGtpet5SwjZNfJnJcR6xdVwFUXkzrZ",
  "key35": "4q9V3scxzavXWXCNkzQWdwTvMCMbh3LkPjPNMfPbShQ9G7u9NPdzDopeEjp5pegFLr2XttyKNjjAW1gLeDsNQdqM",
  "key36": "3Db3Q6U86Xum7aGKFhXMhtv26mhKniB5J13doHxXTroc6TaSYzfUo8F2aGoovddPC9esF7Ev8gTVWVoWNZHLfiHx",
  "key37": "CzTJDoMHTs4BftgNg1fYGfJ7JJXSubYkos41dXbLDGGUSHQvLHVdjDrzNGmvo2msQv4v66D3e15xRMYzTAWX9zw",
  "key38": "3FRm7GEZPmRitU19XZCDBSgmpMbdrshs6rejxL1dc6kYTRfbmdKjn9C1tj3yvxRzYNDmaCcZHc8XsEd8Piy3NE4f",
  "key39": "4w7w1ftb879zpLUWWuNkCfXSEfMtE71fcYVnAsm3pgJo1yEiero5kx6N39FPitfRejTe7MUDjYEVfBQhbbN8Thoe",
  "key40": "3v4NTKABqFPhDb7wXeQ6auS3xVQ6PwvVx49n1ivezhVMP2zWg75GDKBmCnbdKeV3KLgaptLDWCWF8rNfADidqH9b",
  "key41": "HthDB7jojdkXjyaob5LKnpQY8KFyAZcWCCfiM8dcCZbdZGgN64yMEELRs98YE87DXBRD7eZPVeJmviFTFwJzDy8",
  "key42": "4T2byDkzzrSthuQvNcDMwnhrkbEBNNCp5Fn3krJu8P4SoLPbQdZkUUKjEnJrVDSXby4phFVMTuYcvzLkxuMSiqEQ",
  "key43": "28pDRN9epSBqF6ZjhXfKWYq3N4uQQQMmodgamE4JKGyV99Lnu2jvAS3wVgHbDMPiRarR3hN68DUdjaziCzq8jyf9",
  "key44": "419KmyTYynoq5D96EvpyB4eqpzXRKCrDBpHCh1Nj9zimpDLW3ThaRKrj58rKbcVEtDZbkPy9x6Gx1bMd5HbkrA5M",
  "key45": "3CV5fbTbnmtJBZo9FVbkUaNHsjF5uBvJXAnfxivn34NRfZxEMUKPrStCWZhn6X7YENzzBRVJtocfsVyF3jKX7Ysh"
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
