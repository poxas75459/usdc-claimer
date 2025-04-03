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
    "5KgbYDNU4QGKvHDP6PZ2ngA9iXUbkwjfgkFBwyCGroZRmfkuuYiV3ci56SgwUtGT78ZKjE8yWeuMXCZ5KURG5rpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCW4Wb2XD2h3r1Jco4QCmaGNo71eN9HjbGbySWQLqgU7xYCR9tMuoCD5KyLmTbu2rPF7tDLEUWbSc3JrSp1nYoh",
  "key1": "DEbLzq4P7KQpShHpp5aRGWVf9cTSPUY68kcvv2J2RApBYcyhwibW5QCVdQ9QBjtqJ5zWhFp551AdXYERV1ZMXQq",
  "key2": "2SSMCRWp9imc5vBsWmVb1YbG4VEBkVMxBZaJ9oyFWKFZRAhgH4M2NZxn2ob9ZQVtWWnjtCLyKwWUL4VPthoezsxm",
  "key3": "3Bto3UBP9JSYnj7KkUdtnh47pTEGmhkSeEUEg8RzxwMuHVvDAQGo3PU93meAYhAg4vHRqbK3PkRY24kTZnitYVUa",
  "key4": "4KBZxf7uBbnV8cmz2zz8mza91WKhrEDSKijsordi4nXnPNNrvsSzVCpj8NZBbwGmuucfBMW1yqjJx5HZ6penSbnv",
  "key5": "4C761XRG4qsvXyxZKXZagAUPHFv8XGXW6Qd1o8m8eYURcMeJA1smWpB5iaogTgxsBVa8wxaEU82EKeLekp5w6EcX",
  "key6": "4ctT8551G9sHhw74o54ALbcFnEfvbwHdVXgXQwh4ZYufjgEUHF2vZCHUJARtBNk9UdCuHedQwKGcF6U7f1wFJP1w",
  "key7": "39ZQhkdCUWgnD5DpuBadUd9CayohgRb24hr2PeM3MBm1x1ZjJM3bd82UKBZTRe2f2XJsurWN5GRy5HC34WJGAA2i",
  "key8": "5Ps91vxRbdWFWKEndXaSmdeTx55FsYfycKRjZ1PkNGFtEYdb9zgLkRPLGcxSA7qviYq3miND7JD4novHbLf3AxzL",
  "key9": "3gjHVnR9DcQkrmPat5ZVqweR113AfSMsyDMrG2pBCmtQKRWwkVTXN3uVc6EFAEUs8gjpi28RiyH6N2u66bNJaqYY",
  "key10": "5kBN86FSsnNiz4csKk7U3tbC3TGs16L1GYgthX5WoUpTrE1hnKUsAfL49mzkjx2jhG1pELdCeWtx9URfqQSXzK4Y",
  "key11": "5yw3cvaPLgjAAqxj7ZLEMRUKXxAFVzLhqS4EhxcFWFGX7DbqcFUgZ3ufsEBB89ashjcKtofVyumYVQqcMwCnnAid",
  "key12": "QLLyZG9rw2w1rhs3FA1cbccM9C7MXTFUejC8bbgVSSnchCqQvN1QKum96GoXzuha8SpkYB5xry8EWHNSviytf19",
  "key13": "3z77J5uq9kbTFQaQfhY8ews4EbPhpqxiX1rhsnJFYZZ3s2evhuoZPYCEoG5pdp4xExd421VQqC25dvUYJ8VzqybN",
  "key14": "2zFzcDQTgeLgXXN3f2kuXMTJvyv2V4GHcWyMfQfizv5qb1MvmkkDKxcT6T4JdRkCFDNR1Cicx1WSbrzkWwD1SpEe",
  "key15": "x1LVqJKpv3bjBXtVoi2bsqfbm5gEhqDVv2b2pPtEWnu9xba4DwHDC5EdjN2Z7ejSm46kHDYUxDtKgR3m8LJZVCJ",
  "key16": "5tzCfMzXeiWSCfxedGVG9u84ewu5BWFi3vNZVxMsswH58EX8dGJnXUYfupgJa74TMJ9ekFjuxw2rh1LTwyWzfbX9",
  "key17": "4Fssc7wAzAiyZYywZXbuPUEsvg4Sc979Un7ksSU7KWPDNEn84tfhv6GqrZJNUd5YXLirwRZVdSyfhzwiT2xoPZwk",
  "key18": "3C2BD5LCkJoKxmLTc2VfJ1H5dhjjvJW5TgJRzpeJsFkjj75DVLusmoBGr2HHxQYP4PDusivZc3rb4jNCscEDxJ3",
  "key19": "2bzcFrLvB95xZFhWor2YzKq3Bn5XZJVy8uBfwePxx9QguvUa3YUxdDbuq5us9QC5RrrHzUbN2UKb9eqaxxah4P16",
  "key20": "5EgHx9ijx7n3PrAiqMCjoYNHYWoDJaLFeFWbcWR9Hgx96a2PvUGWARAcqCuQBDuiQGemX5AABnESQYKs9CbK6cAe",
  "key21": "aBvqJWWm4vsnXAyguDDuWMfj84EnrzsrHHra7S71tCS5KsnGEUM4vRh4pgdntN4F9LFj3n2QXVPfr1d5wyGa1id",
  "key22": "46k559Hqt7FHMz4Qot9uQELruNVpNKDFEc1t7oaysp1ZQNuv5kysWzAPmHhRk7CkRbvSZcY5hbJGFVenofAYx8a1",
  "key23": "3qs79iWPCUequ43c9M6Ri34XcoVVmtQYmrJA718FGYjg1zQasSuMiNm5rmJtozMf9b7p2hrUGvAkGCzzgzRz4VoY",
  "key24": "TiMnNpaUq5nWEjzFSGrPSMntKkvcFSAmAF6eLxx3CzYZmxygGx6E198D4hdRi46ism8CkaMnsqci2XFEa3KA8fH",
  "key25": "55SQwtDkV9rRp2ujPzhjwfPZBzyLpnR4QquuFpa13R7gT5sMvYDyN5GTTqAjHCNdZAS334Z4Wy6GX9ZSKjbnnXvW",
  "key26": "5unznEkXkxSshT6adem6VtJvoFeBdgGFdScehjk3Pm5SVXDijhemr8kC9qBaFvApRtDdufbpC2xEjSCAo9f4bV9i",
  "key27": "2BxAedVtZaasExDjeoeyS8PcV3jzvKYntVhVLvpD1Dve9LSVCXHxdF2YjVBqVbckgJXMg7VnbiSmYfigGDtTyiXf",
  "key28": "4PLzp5uSTsGvGvqrimpKq6HFcvyb7qQdG8Ktu8pXZAKEQt2Fd5TDd4nY4Xr8m4qys3BiJFXdXTSvYmtZaTa3oo33",
  "key29": "3AzuCBinZ8rt8QX426nustd47gwbbWeyJjBZ7JcK2QpWTa84kXHJsPkMh6hYzstZuXGbCuFtthojm1svzCb66xXZ",
  "key30": "29J14PVvQgPagtDxVjDCSAgczufNrb73LSe1G1oURRVpCrjwFzsSt3ceGjQHMXQ1WaU7ryzwapFLRz61FCAsYsc2",
  "key31": "5wz1Fcs14jMyqSL1Gx1x5HRYsocYWCShQTwMD5RRDuxuwi98airW2nVFpAVzmQ3RZvwVu1LRyUUJQWDzDKDJ6QWq",
  "key32": "5wvcguvxQ9m93wHtjFgxfA7z1jiKC7cw8m7s8uFxawe8VBmpPcLYMaQX4YuoPBb96QiYCbumYz6nyUWnD3VwTzp8",
  "key33": "NSBGyTp5SGP1wz4ecTRwYwtHj7fMGzsR4ZCzv1AdDwgRVxkLfbvNQx7rJx4sPpbXqM86B5o7HhecKzSg4e1Rkd5",
  "key34": "2Hoch53NYdwifXLbjjMEj4DHrtQqgLUAbLbYn6FTY3zz4tdLQW7pLNw7daP81i2ZEkMQtTh7aW2vzPfoCFXjSBdv",
  "key35": "uTDGYHcpNfpDpwKGv11rcjjTATsLm4V7WMp51YR9NpZfGd1XnKWvRdKVUWXJtuHGnq2pgKYRjvi6bDSTb8hxaco",
  "key36": "5STUWjWrDKZVaQEzv7HYNygDH5NMwxwGSKkSbrH7uRda6RWUd3LtT7hxmYNtsCrJA7ZjZdTPGWSsNBtrSYv2aCRT",
  "key37": "3WaEqjJXd5LjjWvH2Ycaxfyvh8mQ4yAKKVo25gMnjxCifuGfmz85YBJUyc1PkNRSABEYAxseW4UA91ZfcQ3tLL1G",
  "key38": "3o8MK4e8nWd4oaPbX9zEKhScusvNSGyP7KY3aypvhVVJP9p6J9CeFrZPSevWKGv1zLHcTtuFhjvkJPebopJ2wh7z",
  "key39": "5CVkhvEfRW7tByCFxfdGqdQCTJt1BJXSjve7EDTSD6xB3tYHBkUjsevTpyKi5To5jtHrAwseL883RXq4n3KvpCJc",
  "key40": "58ZjLxBxrbXz9JmgMg8fi9m6wfNQmSjmS3F6gDT4ZKXRJXW5gqGTV6q58sgjHr2U3Dy3AnkLJqcumd6zZCkKTC3Q",
  "key41": "jFCECSgsYWwU39s3z6o1gKT8NWdcmvwL1qJVsYfPhjn5GTY5VDbSquNrULMhPj7c1piBb2BNtXWbqb2Ci2cUNn3",
  "key42": "5eYAKHT2c9zFshG5UbES2CxpfMDygaLqhrpU97VrhEc5EWSejV77BawC2F2aYGhoenEFUGA4iNPBNEniDXuLnxAJ",
  "key43": "2x4pnRjm4CQnZJr5xZZmdWXTAKsW4GJ4qbjkeVfJWF6En4dgHDtqJ7EnTwm95jFWUnvebGeJTCxV7KcKNkcZDj2Z",
  "key44": "bVtUcxf8vvJFgkhQ38VaSmopx25pTZTuLeyNX1r4J2y6figZv6kz76NixMGbiLzg9PP4onexJUiLKVnF9gKutz8",
  "key45": "3nBHxidfMYEYHnLpBtsqXb1Mt74eL9nxcGXWPqK3yCdBgRPtu9fWaNiZVh6ohiuxKkrq2JgHVJWASXyFgVoiLEew",
  "key46": "5JkER53mxeXuVZPT4NQhA2AxZ65yifQXQKz3EVytjBt1n5FmGGz5nxmYuDhGjoM7URtHAzoU3kFJ1YoaTovZ3nh9",
  "key47": "cyJYzdphTMS6tFkrsdZAiTgD8aAKq8e1X8XDpEBXrguBpW8BJwKEr35ryTjynfCHiZu3q3GG7LWYVpzL5pyZcoj",
  "key48": "5HpnyRzBgBG9Y8oxBvUg5JAubuh1vZGDycJALU7cr1m3i3TGXG5ndNz7ruN6aJMzFZpfAcsqpYPx2L1puxQgL1hP"
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
