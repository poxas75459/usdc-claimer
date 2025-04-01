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
    "5frazaa1rHtXj2rdoBsyuxgbB9JJYgk3wSEpmLKgnDrowWx3saDuBR6sZUQp3BqAhbriDLL6x2qQmgbPxmYgSFB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNoMgX16n8PvqNMmqPnG2GC4LWGjx3zeymfNTtehh1KgsnktHnwLoQjA4bpZsQpShaih2JygrS1mqvxWZWdRFqf",
  "key1": "2zstyBowfGjXLTjzvugffxrTXrNGknNniYnSQTipSvSuGqJGi1mW1RYZmwYnAiADHXduZzEb8D3kpqJxHVUFKBrQ",
  "key2": "642fg74UzVyAheN7GJxkFng8wpt5NuuqUG1AKfgpLbRGFxAKBahJWbbSxTZDbJ5czmbrEQz6JjjDn3i2ci4ddiQC",
  "key3": "2n1SDLwieCXLntprjo2L1k3syPvwuwBoJXubkCAeSQM6xbrSZbjBev8wDPJpzrPfcU2zb2nbYNFRpfG4ZURZg3RG",
  "key4": "FhtK8wB2c5t4RqvttqVJtoUSHMnRYzvvLs8TJTK218ZAvKFjTpqsThzN44rGmSoSWC8HJkpoVxaVWnTfP1SFqA3",
  "key5": "4z1Am8mTt9Goe8ZfkU5zHqjJz14g1Pc2eQeUryKFb7NfhP9sHHdCqWsRuCoRoTAcYtgEPJV294bXok96nsXjvfHj",
  "key6": "5bnwPqaeXn74jDUKcnYXivo7BA4w1GfvskHXjpten2F3Som2mV3aZ6gBE7sQAb4Qnw5R2s66qJAi7TerCuTTQqRF",
  "key7": "2ASbaDFgipLKppQXBeQdCLsghJTmSbDakDX9RskxEMqz5wkEFmcYi5PCy1sijyMfsRBSkBBKTrB3fuXsrxRxqUCs",
  "key8": "Kb7ZyV2Vg1NZ8zDh5FfLGxMdt55dumSf2Wurh6e7kZf1x3qC6Xk52jggKpGvKb8V5jZJiigq4wNc4QK6RxeY3gM",
  "key9": "48uHsVTxrtAVeLZ3c8ucjJwte5mLPE1u12BHZm4y2ZurLWwnknjzLHpRBXxFzZLpQoGsQmFV1ieAk2vmuFsJfPYK",
  "key10": "2wMCng64oJsYkDZQf4x4yZXkHCuwkFoEyNshEPPvqm6o9t4MZPcdf5UaSUV6JjVEvKxi3HcYVggqvkaTrzjb6R4v",
  "key11": "2cCAM3o5TnFQxJRurFHPgh8SoaNbnDLT3r7MyJWFyVvnp6nSBQ1ChcYCw56GG3Nn8Q2nE9CzZ1GMtMVFWtiAFiTW",
  "key12": "2w8W1rDeZnEdbBDi6UfYiqCp1iPfuVs3XhhrgKvQCGsXhxRjCoA2c2VtZouDhtHrgtY85UEUeFt3LwsTCa27esd9",
  "key13": "xpvsT8NiTUP5xhLEKMcte1bjCwDdGEu5PkacJHNG513WyZ9DmU4ayWex8nBSkWKZ32yU9MSFAy2CR1o4Z1VwRJQ",
  "key14": "5EfsKdgeK7ek7EQUQqeW5cehojNyr6j94nheTNJTpgcF2PPZyYNgotZiaye6gcLgEnehkJHGKywrJPAmhLAu2zsu",
  "key15": "3srixEYYzU1G6fvcjZRHg8YvFBg5d6qQEtaQurFVZTNcuuAFFKU5Eryx3dXPPwdXHCcZ73Nrf7Po19VSqkoQmQuQ",
  "key16": "5n1r6QsLp2c7R2xToVAYnTk11dzH1VpMQ7WSfrsvtcV5XDJGNW6P99g9HirRAaLtGZJb8LtMTZbzsHrWs2TUVE8o",
  "key17": "5soaeUwmugbzzSVUPZygr5DqzL55SSQnGUwrJ3yGqMPjSjDMbMGzZAX9e2X6wGKvrGRFBZBNaqbtcqGZwZ8g96Kq",
  "key18": "2mx5PzMrr9hB3YTFJJ9tVjny5DjcLWotQ2t4CLw4VjLQyxMGWcrwoxjFs5NADBV9QKLv8VCDcuACsT9qZJsepSQ5",
  "key19": "4QjhSMDgAPfG567BCstFSAufLV4we1MjBTPu89qAb1sMmVVmBvVQovKwpb3r6T7AQjsHPo71m6DCri59tJYjMqPJ",
  "key20": "29pdiDwwq1hGRQYNiuibTXNYvZZNi3o79fTa79VceVVTmdD3sknWxXH7WCp2kUcsdZHGey9SHSFp4kbNSirGSyA5",
  "key21": "21aURPZHPWiGfNppoJJNhCKLBLYPvUpZEt4XxuzXFMXgfsomMAXezksfiqPKAD9uZ7WZEubSdnUJsbhBjRXjJqKj",
  "key22": "b1XvapzKa1Lh8pU3oNKLCui1tUSUksKHVAMSGSEAGZLRnwjuPrvMuD2sCx9koad1qzfoDAhm8JrARggavtEQ8Hn",
  "key23": "4PsZNtKdUgT28ZbC25VucCEJQDbrdhSwjrTcWFzdYhVXgFuTqyZXVZgFHWGi1MLhizH2juPmBHsivkxv8SWjLaeP",
  "key24": "23qTgr4xCadarvKeFssTg9M8jRnvngkyHbqHZbmvL1FhnpXZ3v6Q7LUZU7asPruVwS15WAVhXFWmiYFtZNiK9mDp",
  "key25": "56ynydirc6hb1FPgxZyRvUKuNcKBUeSDz2nqyGMnEdXRHmMssziUEcUW7BgLW8CsgGwqpHjqSiNdTd2vS2bfpjSf",
  "key26": "359WaZYLe6p51pmPf1g7ipmby6FiG61uXKce8Ue5u9jewX1HVm1QDUAmBdyfJ2tsofXU8HCwYHmFqSNuUhqB4btJ",
  "key27": "2iqNjBTgLSyokKBCLdmc7w4ysQzyYRJKbEGfqQvknZYSn6UDbfbhCBoyzZXAzSVqSy9xKCf9WswgeZCfETxQUwyd",
  "key28": "Y1i9ixMDuDrthqxWjrYLMySSPXKHMSsXwJgbRyUnfkKmhkCryZsKwdB4TY82eJoQWXAEg2ikNUUBtKc2FUQnEkx",
  "key29": "5PfBMseX42XLZznrfdQh9ZbknvMXifhxor2F9gqsXNCSRLkLA45KmxNeYQcKHJgrWJqD2z3H4hfBEMKoBLpJBG2a",
  "key30": "5DRVSnZAVvfFAeiQootPrqfQVvpbvrNtFhA2gyKSmXPJbKSfCrFvcJodDDMEuSjdLeKQ2YsEYMeUEJVLmdnAiLzG",
  "key31": "2DEq8WjEAqh4Jyw8kTSwMQhYRtpHzdvimSTb83Px1iF7Mdzb7LjfF4ysn828QTtw5YZFiQnWptba4ZT2AVGSimy3",
  "key32": "2Fj455A6jqgh3nNT2W9ni2PZ1yXe3E4mKajyxfKR7CWkDUaqimvXGgXG6v7gtwF7ryMqSa4DW8CPQLUZTQLCwCvn",
  "key33": "2ffvc1SjkF9J6RC7tcxEX17VxDdcKvqhAozz8ce9uShc8TDRjYBx6DxLomyFjyDAkXFUgqEKsc6facYZ88hYzEnq",
  "key34": "5NNtwEi9UXXZj21H7A8hsSPDPNQquNCYAMyP7rfMfDuFGxZjLuX7BFHSyygWanLksw6QYcCTapAMusS5uwr536uz",
  "key35": "4Y5N5Fu5WqFeAztEVQYbs5L1JVWQtBMCezTCdTfYn3JeFbk5hctX8ZLeQKqVA7bMPo8AR788vcmMMhhdGororjRm",
  "key36": "24jpHQohdxzgasV9KryJVkZNg6vt7VcMQq3qUxQdVbGkyrFs57igGh9oeSPG5eUw4Qn5ohM8QthTRtfJUp8z3P88",
  "key37": "3BFj2HhbdZVzWGB84SURnTXx7p9VuKihDebZERubDe3FNQ5e3Ae3uEmaJ5cMsjyCqM9vFRoDFSyAe6bwHC3bdwmz",
  "key38": "62c3ZBgvnMXF1yeA1GHy4AoT9aBr233ABbHkkf494HY7q2ihnL8Avopi1FEx726atN4uEe2PPy8bPHMoLSrGXo4B",
  "key39": "5HVPkTdsdzEGX7UbyrUriAxwWiP37Adzhz9WdPFcrDJzAwcyXtoeCBACJqD2we2yYYMXyPqAccRQYtCim8ztRzWn",
  "key40": "5LXiZbCc55LuQ4su5B9ZrCLxpVNT7vRjrZXWKrnsnuqibSyVP1F4L1bCeCBYunzd5GACrZGdJ5AKKPYFehsZNzQS",
  "key41": "4YcNP7jEkkQ7xS3u8LMKEtWDE5kC3dpYzWNT3ADwPMa8denbTLnG4A7iu6N6e8zprDagXuabCdbDqEuXNb29kKWL",
  "key42": "2xAgwKFKJJvNHEFb16yhEEJnTzUHxYhGQe5hH77U5oSNKaKqmvaxPMeDqtSctnBPc9iMbyLhP2s2yJmcGjeHbHT2",
  "key43": "qo5xrm5byaZNbv5dSjJXYTAkJX6EeEG1vRUW6bMvUcSzSdXpiX8WcgrEyMeSABhYpfM7NXBn7Svj8Tzae9BjkMS"
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
