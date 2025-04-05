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
    "W2wAJcdFNywE8CZhk3LpS8yoZKoYgvci9JQvhzw8EMjTMVrR9qLi4K1SuyPVWATV6KJh21wrotcH7uDkU6nr4Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLB3LxMFFJ5QquErf7KhrPutjS169GW5kqzFa3t9Xsb7HSZoHPM5XrAGsV66Bcfg2f2JKFRBdHsHBKdrWtLgipG",
  "key1": "2t82W8mSqVBdJ6LKepyn6pXMPZmoS5xwW3yNPG4GYGdRCsgdXGQngp1HMQGUbiq6vjVXbwafwZp9f19rdLfiqauE",
  "key2": "Q4ppvSw1ZpgQ8toHUuhN9PRXqgQ1ERJYy7BnnToyYwKCGrpsZSi4MhpkPuieCW5sKWKQrWJS3WVeaYVYdjqHJgB",
  "key3": "Aphw96ZZLiufrYTBRZnaF42f1gLkqKHfNBPZKRSajjkdryAW3YTmX63hghDuHVdcXdiXbLQ7BzNXnYRBgLPQ7eW",
  "key4": "4GEtZEhtrL2K9YzdYTD71AkS4ZjyipJxHpmDTnjQYHUnqgtd7ihbQCoKj8iDV7brnK83YcNiNrbdZ9sxZPQjFMCg",
  "key5": "42WBvSb7z9JB4HJiihTMqtMvUpNp7ByRXprTQiJtbYFqitCYjQvyA4osodadDVgTT4PNTnPXz6MjhNRGxr1rUp8M",
  "key6": "3ix8n98i1YtSmbb6rmuPKDf7Qpg2nt9FA7FqqAUmM5tT6rs5q8WYhQh2Ewc4iSzqvbi5gf1yQpS2cmeQxDssWj9o",
  "key7": "oNskcrzgo38wqEtAJRM4U3h4vcLXCCURTA3S3vJg1d5TNt1ANknZAEPfWTRj1BpDPGrD9wtGCr4SR1K1XWL6PAL",
  "key8": "fNCM4zAMkpGsBpxVE7Q8TUu9xw5WaVvNc6KL4cSCixEK7msqRUj5kuBCsT2D1ofignmQx26zMmP7CXPTRynNQ7j",
  "key9": "5CiMrNYSgwa9egb9zMGAWcdiYBASMWNenWhx3cqAeADLJZ7DJLPfPVrGXjiB3PAhYow8j9nJsr57UxtAp5tFdK7L",
  "key10": "5HeBdMp2rDp1jSiXvYxuJAAZ3HJubZJsY9C2PFqWP8bfm21KC1cZnfXY8C8rKsHbpFmiBDMWSyfYa9HBZTr8Rcfy",
  "key11": "7xDo3vPgJuP7g4U8KFBbKojPiZv27HmcUFnCcuCwNffNYpcKhXqPJFT6MK9q9oCKkE9xHYXRr21TFUpvMHTzJiZ",
  "key12": "vsPnQPAGfxd7koKyfjyNXG9NpeJ5iMwGFPYoQ6f2j8eEVWnZTUFm4apTzr8HxeZh5fbZ2VbJPvaZku28i61hZPP",
  "key13": "43aSUP1fJTeHFBJpbL53kfxSUJxJ9WqrHKJN5tUMvgA1w3Yp9cBh1aL9veCbHM4aJGBcU7aSx9KybX1X1EaNNs72",
  "key14": "3HrwKWriRhfbxQPNMZkXN4DtUueG1p4fdBrTP4JFeitMKuaPXRiYGXWGrYDp7ZbSCVN98rZ4ZGsqTqVBJJB3wDbk",
  "key15": "591jhcqmszQBxoCS5YfUSjjZdPvbxTYXeX1A8uvKjCPCHrGMeL6WrwspTBVKwMma4NkLv12BxkZiWJpcFaTVBNux",
  "key16": "21cXddAj42zJLePay4PQkQSqxNPCgznTMr8XuJFRpKWYmMSvxp5Tn2M3DvQ41S7Fhyxppp4S8iN7aEQzZbCxkrAK",
  "key17": "eosrQCqKbDMaHgMgDQCuvEnrKVLvZM77cjB3EuHatB4bXAMxMonqvU28AyxT28Y3kXCNqCgkKgfFAomu6T6atMU",
  "key18": "56QZP2GQbTxpFcnzm1VPbFz69ciRdmcG6xXb6a7geyx7GWhJk1gPuJLQFXP3RyKUYioPqwoUMLJxZZAza2gPA5Ex",
  "key19": "65TpDidWA1MVaCdwfh9dom5nyf43fwNUu378ep6hb5LuqsU2psqidunvxPwrjPXtUMLLhcd3ZodS11U54yduMgFD",
  "key20": "4K1buvRMosynuJzvQh981x78Qh3cEEQBtft6rhMmeA4FNJ7CWRuETnd7VU4CdjMTgWtL5Acx74b7BgeWHgXdFSov",
  "key21": "2kppw5rRmXpdAkSPz8ht4cYnVswemmM7MA9uPCHt4oVnbqtMdPbcmPvNuaymiqRPVFwVrm37acvaH3ZAynR7pgtx",
  "key22": "62dC4DbkBDMhzXw4dj5W5wQ3LzBiDG3ofnUQQqAzEBmhC5ZtpbxdW3w6uwmM9qhr8aSsdmukbGtJCzmHn9GTFnYk",
  "key23": "391N7BWf9ya5q5wCUTbHhhwZHwEMSDmjmLk5vEKxRuyqEJVTb26bcDnP59mEHmufPjqNhkNz1rS7nCHFMYoefVoQ",
  "key24": "5qKgfrkFZNnUzav8aFMmZ5fkgKcLaySy53G8WWJ4TrEwThiExTkuBWLJoSJ9iWqLe6SEaknf6hdc61AVhFvuM8ch",
  "key25": "3W5xH84Phb3KT5egYs1poApcnDbA5WDmHdpBYcPnWcGRryHXKXGnC9obyrzHcpoZFANFMcwpSBxjGB1FW3edLjAd",
  "key26": "3zMYn7eG8c42DjhRnB29WPm2LoQG61hDgwmsdcPv78HBoNmVvfrud5NX1pjE7KuAhCn3vMwM7QexZYL9V3JwkRuP",
  "key27": "sHtS6Y1m4iMknuiiPbTFdEUUyiG9pvaofBxA3ZRiXRN3EvW4EKhChyDmsG5KJWcwdf6Knpjngev2hYoAhX7aR16",
  "key28": "2vYp8vU8LbSGaVzKGi38GqcbyGJDHsQRk5eUCdNh1UiRsBsXBgQQ5VEL8jhqFwT9sBXqcrPC8yxmNkXYqUjUpvsv",
  "key29": "5YCkhvtSSeh2WvRVR4KTKiY68X4E6FA1DeZGsPM6GMrtB56JRZUaTZuvDZZHrdzRV17MxCVMYKrR8DXntUU84z9T",
  "key30": "4EVf7wDPUGXepSfssWguvXXEesNrFc9Q4isQunAGzbf5LSqSx3BSB2aGWzbkpeN8JUtSWesarT3mpjvdELg7BCf3",
  "key31": "2t9nLug1rkTbtjna3mBmqtWch6Lb5gUeZhZP1LBQEQ6dGRshH1whb2FEKaWJyuK7gmV8rYaYbexqJEZt6s9AEjrV",
  "key32": "2iM83A3jroVGBWfuNuvekTva2a3entqz2GKuZxchP4oXV4zn8muwzSs2AyJB7gyX7idZLrodrd57EbEX1nwxP4Bv",
  "key33": "5PLCFmh5837ch7T9oUVh1dqC1LPvUBdoMjBRbxaMseZu6kkYXnuC8WDzE2VXzBeS53noSmgzZWWphYjUNWvykMLN",
  "key34": "3Ue2tKHeigfqcLK1eZkrwGCAgQfWhgv4qrV6qKC62GpGoFgqf5yjCqwMc5P3SjYgdnfKqPFynzX61MUA3Fz2FXoN",
  "key35": "4vuCMecZG8FogCfwBPLqAnag2sKCURXFj62yJMymbcyErVQYVUfy7HTpxRDwAiBMyE5kiDqNBY1UrEeVohJzSBzz",
  "key36": "4qbaQ7hjeDvtcf3x1McfKEs1q3rQiyR2jzMpZBSVDP2q2RhnT2QkN19mYmrp4CPz69w3Ahz4AwEF7jPdPKKbDrDN",
  "key37": "474XdfUi5aT6PmJNZaEMmHcbcSvd8YFFRMN9ZdAJ4Yrk3sA7dwJWHi1Q2d8cN7GKiJ2dQVfevZHqjZazja1VGcPq",
  "key38": "4KW8DSzsGb8WUtKq6NWJp2Y5j1TnYi2YnyiuUL55TAoPrdQvXbcg4Jj78dU41hj4se4NwYw8f2mGPgNpmBzUe8M9",
  "key39": "5AnC4VGjp8kU3oaYH7AUehNgzBrRQqMRTShEpwZaJRsWBosJb8YpmFrYCwyBb38CGysH9vKeZ4LBidFvMnx8RZtW",
  "key40": "3qpbawjwmy2f1E2GMdx7F8XTGzqM6eEYjEswyEsSeg3c4zR1t1chPPgUBBnp1aVGkCzqH4sX1E3xPMzBcKXxbSbC",
  "key41": "4Y1WtyDma125cYM9sJCCPeStykRsZUQJMu4zzsJuk1w4LE8gWsKwPWrTfy6268wNChmktnBkqFMcpTdo75kdGYxj",
  "key42": "FnB8BUcXgCYWqAAy9tVhzW411qfJfxUYwKQyTKUxazWWKVWutAanweZwV1aJP1fZbiDeqGsLxmQmgdi6NHXW9VG",
  "key43": "3vTdTSrzaPyGKsLWHxHn8yApkqPJJWCMtd6kSMxsGWx4yauYhDK4jabKaCtmApnL3zx2xX2bU5Fhr2MGFVw4WH52"
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
