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
    "5gfGSuW3ezS9pnaxcVpwQ36ACLr4kEj4Hdq9PPG43qDXHVMayjtihatc3muox4CzaL1fsgjrrQHi3vTsTL95qNtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52uW3uKnm75m1VnBA73LeYs7kADrCWEPA4sT2UhjyvibsZvuA7NXgRuW72AejaWez8uPbGC1487maMXT24RffDWM",
  "key1": "2CPzbXkEFV41CE7o913czEbeozFYR1DAdYLEXqCj7RWXMViguipy2N9piS8v16Rm8LPsttjaQtGSk9Rmc1wCRD4e",
  "key2": "4Qw6duU6dNWqyxzwT1oGHe8ur87ry1twMXyHbsVMudvypetBXKXWBAZeL8aLP9J8wtEZpAfiu4xedNDxsuHMSVov",
  "key3": "35kTVgpnPVWFEihoo8ejv4GfU3uoREm937WU2tSHwz4Fi97wyoksGmoGMN7FhA8D3fa7q24fiSPrf7srf5LeVDZw",
  "key4": "5MKWAwKgKNy3yRXSktgaNFciE9z1Lb9hvfqcBXhoV1Q6weTPYY77LULQyJqQdSkjkNPcw6YsYxnLRqSr1aidKdHk",
  "key5": "65A3vLUzSrRCy1KrWsfrKcBd43uoQXoW2g4r3hwXdYCQR6R1qswU8fycv9SF1yqLaUyumgWLuo2CkvRpHPPSgv2H",
  "key6": "5zt1pobDV5xtLoHME8GeiS3jKvSNPm5og4gWPzGd2zewn5sCxJ5yyDJwfUBDe3UirWfVwgZp6ZDGXkr2Qz1uL3EV",
  "key7": "4ojEuKqnrTtJ54z581Arw5Baw2E3qJMn6KFVqgZ3MwXCnhZpw7F4P2FtMqNGT7ntFRE64x2ekqGtFP8Jxy2C8JDk",
  "key8": "23poTAdMgdwYzknqqu9bT9UhBXB4cA26LSsqHKXghumAvfuvqNBvMKhr4XvkuJmAPuozzNdgSefDMHoncdja67Xr",
  "key9": "2gotVq2y6v49s3imhZ4jBokg7ha4y8Bx6yVab8X8pqrbQfp1FNJqLiDenXU3NzmtjmWVSJrVJMrgAJjTmqhHN6Wp",
  "key10": "5nnLxNWw2Ps6YiN1VjUtjd7eGTp5ECZHUPrMX4gj2r6zuhgk1QJi1zLJcZjPLcsYHHiBzDQMVVMBvVQ8sU84xzCd",
  "key11": "3fcMA1FDkiguF1x5hTkfFhpRTqXfTRnjSrVMsPPz5Fu4S7sZTHHMQ3HerX7RakAXRy1qnxCjKhftxmFzK3eqbo7L",
  "key12": "4TUBzAPMzfiUWo8NTEaCWNXsGSRQ2GSHfBzDv8H2DTijdjGodSwwVdXraPhzEdks7Dd7CPPDRWmnxueGuRYVuNL7",
  "key13": "2decpxdgjAfxoD4zvwguAiuV3aRaVgzN53irnPssZknHftiAJWh6jyuDiw9W5ZWpwCQNQXMFmnjRDCP5aMPLDrdz",
  "key14": "4JCD4RgSkuXXdjBXSTeyvSsUM5LjzP5zgZ1zJfyEBAA4XtSgk3TTwPou3abtZkDRqhxAWNzeXmjfnS3gVRUaaSWk",
  "key15": "49r9eVskYWDKgj8JGCgAqgJEtUBeoZymGwCsuV1XzN2quKb9duQodn8CWp1KxJNTu2X63wrsRz3uZpBW19RMYSNj",
  "key16": "596rRzPFLeBcWKV8AdVqfz9xFCSGUbGnYnqVesxsxgoiYQthq1dionHAENaPuvNQa64NLXziA4iGpmVKhYFkujjF",
  "key17": "2Xt8AEskqsxQQyBbeJoAi7FzYTeKvRZsR1J16XKDmGpH6nzgB4L1MmR4JP5kzgK1UzqxtRNu1xmyuVuD5HcyxzGv",
  "key18": "4fHQeA7YEnU6y5KZdnZFFVzpJTe1ECQVYTv3rDAx8u68d4CF4JH8fBkJK1U3gRBQfzcJaHyT2dxysNUMgBGP5Hxf",
  "key19": "rtMohEkVMZrKc8Wrb1Usd81k2nVgNquMsuT5aCLpK58fWtZVrNtffHSoyCddoAcLwepBXEppLQXdzqdR6fuqmv2",
  "key20": "3MyPb64peLN4bzNXb4anZ5tGCQzxQCsNzrQmbgfggZoaGs12Qe5FghJCxsb3RMMj2VqnpgY6vVzWrR61eHE8av6C",
  "key21": "3s4tMJB4b2xYVjwCJzTSK7wex5F97g5EqUaGsfD6dywkPBuRC4m44pCRF9dv3UVjaSZPE4vi4wgmKUJDGkVT7a3S",
  "key22": "pFxuFa46RC4fDE98XQ58dQFNGbhopgH93ZW8WaY6owczXsCL7bby2EG2iUZjcoN5mDDVvHxqditL7fBh77sWCYo",
  "key23": "cAULExL1rAxAPQnw7HqraA6JC9CFSMVPpbDc63nXHroU9bLQtfNebLSgZCe3b7D4pVrjUrKyHvPgEZUyTryAJkb",
  "key24": "3wrNF9arFivxWRf6qv7Qd6bMX3vY6EAXCrtQeFrs8izA3WuHJakuRgAJLw5jiBKNF8xCnDWZqxvxZYYysxVNX7QS",
  "key25": "4qvteyws9Jc4YtHJ9NoULVmEPVuDj6o9RF6jRpMmgtURymHP39qcZ3ZRRqp37s9ghJEgcsosANzdmL4xWUdFcrsq",
  "key26": "3RbdbkqgDoT9XPWQqF7KgjvnXnfQkE2MZ2iNfm8uC7p7tYHw3WMvTjPg8yz6A56UEyaK2QCkWtaeyyJccLpQpW8q",
  "key27": "5XLQqYvwFjx6z3TKiTdRX52jcSwxHaZQjUW4Q7RHLuP1Pv46mjZqVLoRvb4MrrK2QFpkCET54Qb44PsrzHiWtqYb",
  "key28": "rmk73jzE1QP7fjsg4mtfkT3GpFYjAvXkjvyZGLW6MoTUAHUQBagzdXFAB82sX1huPXJDza8BPfNMsAUycsQkzua",
  "key29": "38Hy8HYY4hcjwN12n1vk4DYN157WcYpxj7zdvc7wXm9SjMHCwv1x4tvz6wXuVb239UjzfE7pYFDkg76Z3mEwz1dU",
  "key30": "29DrbpLmo7jvz48tR8CMfXPvV8xwvJWdNBrW7Je2SB9YWK6kgqzxLhfG3p1rikYZWimi3TEJz5KbZJLRPMExyiss",
  "key31": "2qGy9x3oJ2yQiD1V65xFqzz3jjkKPs4XVEaTU7DeHmHEY3LpuVuizSvpz9v5vPDxadrtsThQTPNmNxD54Gv3zTLy",
  "key32": "L3vRpDpqxc62KdZfe997f3B3NPtJ5jLsvatbtmd7hQ6Nv6NNnkPZD5FPjKpv6DHHAfntFq5zPUBSFifAy1EUH7S",
  "key33": "22XzaDu7Dp9tSKGuBYHi47jbftxS2cG3gXivVTZxcEFbS5uGGFCntFMQnePk1uKV8ou6dMgXkhKPbbxTwXAbgcwF",
  "key34": "44zLtYmCu9nwNX6mKW2ojtUHEpqLnL8XKV3ALHLCMYUV7Y2Ly4SSM7T2TAto4X7NcDF4yf7PdeYebCsKRcCQRSTB",
  "key35": "ybM3C8jipr9GbLewt7Lx1Sf6NvmkvErJ4Y9m9HKLvr8bJUmJroyY9PGC5tAbChHx5JqrSCWank7GhbkA6m9s1EK",
  "key36": "2asshcP6zXVgAecAbtyvErGz2jYr24mtW11GDYuJZbpHy6JLtnSX9KLTKWxYv3NJ5xx9moUL9LwWrW66u7e6rkX7",
  "key37": "u86FvBbkGvhqiMPEvrt9dnKVyA9i5QMdcXbnQ26CpdG83dvr6ofZHUuNAn1gt5mvYbZ3Janbju964BDqD8suNjG",
  "key38": "6kWLJhkzcpg3Cy1WTK6sFQioxvb3RdL4Y3QfDD2WSz5ei7z2mTe5dU1syCVka7PE7mZiw3CZKxoqAJvYp1gQzLT",
  "key39": "4ooXwXcKMLDZFM55wjwUtTHgP2RMDhVcj7g91f4o9ewYwjE9NVrqFNpW2ADv4ZdoUxbS4N8wmC1fQvTQktRf5KrV",
  "key40": "4eXjqbgUqTEsLgLZHtDZe5ZzanKS6QvKMJvUdvTQhTiRRDA6tmHgjxhCzniMrAvzxKcnnUdvW5CSdqPairnYpVLT",
  "key41": "5m1FyUjhcpipectpf2oMDeEQiuFogg8WhQYhqqtsN4WMPwubWuo58mGVYh6qNoD38djiF1Hoa8xiqHM1DWT5hYwz",
  "key42": "5FpCXXjEJLBPeDTM7QH6mFi5712XvbsRtSu1wBU51FiDewMpvKBG7dQNqyXzW4epfoiUFtYfgWT35m9aeXKBMYsA",
  "key43": "4WWsfpXDT9MqouWPuZbwY1z7mcXh2ukrdxt4uc8hVWspm1zXcddL3xcAL2UEDExjmvFfGbducvnKa1oEVLWVZfVF",
  "key44": "4k4ytRrvkJtW2x4C9oCs8cGV3sCcXM9RNPGeHPxDvXRwZx14zBpE5x84zYUe7zHf46yKkHLwifWZXoUtmryEj6JA"
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
