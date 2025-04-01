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
    "2qgqDPuc4EGEG4wfC4eD81gJpQd7HMnAwLeSXrJquL6K2m1dkCZKoB9Aobm4WhQixF4546ezoZn6Vw1L3reiZzuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDYVfLaMYUs6B5Bu6W1p5eXkAhVhTg5z5Sfns3vF8QpFZ1DtNuM974wjvffkapd3DYynzbvxdgZ58yNimDhyEdm",
  "key1": "3h1azJomLifZrjQrGZfTdit2FbFq5Bfd7MyyqA1txrHi3DwxKkh6eVrkbd9JVdRzsg8ZigKAmXkNoH9Lf67mKhoT",
  "key2": "4FPhTC68NwBtbFxtGJH5JgK3GU4jP7pvVDxCgU7JHizy55jtembuJRQp2LHLEfxA9Fxu2fxG69HpouUc6yBhEBKC",
  "key3": "rZTLf7R9A4HYBNfcJM9CxsQ7DSRnsgZzGsWHdk1bg8WQBFT2x67B2NWbhXHF22gLxpNEaMPcDxTEnfLS3Vp7EPQ",
  "key4": "2DRHM1igxrooZN9zNMKTbTGmLbySYE1Sscprz7topCM6dKkpD8SqAS6TA7niAMo8WXxsWMCG78rYRzs4DJqKEEmX",
  "key5": "4xWBdxgBs6MoQRih1K6NVr8gPc6qDZYRfqYYZ9oUAqrRnhD7vqjJN77tgaaiMUzG1EWtU9VPM61JfE5jCwfvKoP6",
  "key6": "5147g24ZbmeoCZXqkbyCmYbRi6mgd4zGxKRyruT7LJPfRCdLGMJryUtJJczDnGRU8zipaBjDxWqWkP4myDFDj4uQ",
  "key7": "a9qqLbWMRLBRQwbjYPA2R5zezjuSRWMrur18ZghPzBxdfx1ykbGKYgTesPrEYZ6dUgGtX8KGECNSVset1thpKpv",
  "key8": "5T6pqzersmSyydjuyKKb65h14wnWoZNvVpXgYUkKHQRACu74pykeP9Bhkc5Jq2cSNhwHgGqybEj5tHRKxNiZJgaG",
  "key9": "wMFk6vBxa5zaqp6496PkNAGk97cKV5Bvb3NucU12E5VNXeP1aqbHnQcAeFCWHjZbE6MT7i7ukV4sY9AVe4Cy3CD",
  "key10": "3p5DWJfKhL56tNGPj8Yi4jv7CDuetHHuVUhhQmE2qRswEnHHNwHGDH6ZCtcqRs4XweF5MmRsYvWm2XjFNjxxm4h2",
  "key11": "3GpSDvYPZPUXJABXjnDJ9RJYEX96iUF7ue1YBvQaNMubd9etGw1iuGqdyED5o9op5Vfmqd98JR87PUGWCueirJNA",
  "key12": "3k9rRPQzQNJAzYQiAurZyhSqE9w5ekCwLbefNqb53Y1kXdGWNQa2Quf2jAm5M5ffXo8dv8ftqMA7dRtUS2LG6qb3",
  "key13": "2kmFw58GxRy7yap2d7qKgWZB8XuWcFU8hsLuDTsaQCe646sALkE4fBzoykJbuwsnNXbK2kfTFYUMzpqsyD3y3jYX",
  "key14": "4n2D98PyMLvU87CRSENCjim3zVZDi9aVxyMVCpSALsCZLFX3x2LbAWeyEqa1aiimZwxcnMdiaYNW2AfSn86LQrLK",
  "key15": "2pZA22iYWc4bnJMwJLvaZEAm796BQLWJw5j3bMnyEnqoA9bC9AxtbGW6WsNfrLXb13Esfd4YNjMvqPSzDBqLtoyX",
  "key16": "3j3pJnmz4JuNzQc7xs1XiR8ZETYyGdz35vA9VsD72pxWWpxHttQn3n5ayjfPSRcNTizeHT83EmCmDmBy9suVq2N9",
  "key17": "3goDT3fGgrrAixYFyum3kF9Pb6gHoyv2S9yhLSyzbKQJdftUAh4musnZGxP67HmetWesbCMgxFQ4uKRLATa27PHE",
  "key18": "3yAkd3iwVADuDBhgkHbagdGZKfbMx8kDGjn6naGi9MGqHzHcANmRxkZGK5crnyULLE6C59B96VErGrpodLWtX67y",
  "key19": "4peV2MU2aP3oiG3SFys5kQ1NpvQ6Sr5PijSd9kCLQcasEpWTm8A7fXwr2zq7trZHRxmJhcgtvB2sgozPTJZ8Cmta",
  "key20": "39yRpC5RGbnh1AyH2qTcaDjT4vxj1aPD5kGiqzxtuowzfyp5r1QSq4UdEcGAtEdUiQ1njBWB9EQBJy9L1kv1jEK4",
  "key21": "4KrZgHa3WUMThGDXpeN2NwTTeeHfYDLAFausdrfFyq5DrLVSCmejDHmam5c6Fih7JtU4GY2ZQ6ySATmLXtAATspk",
  "key22": "353syX7jAyDVmSG5m6R2b1LSfxzjDgwEBYRNc6ypJJkwPAperQuSCV66Dtb9MHaQi5hugGwR1gYuTMLjo7XcaNXC",
  "key23": "1Du6BbP1TXY6iC27sqVDDvPTUyV5Wb8z1teEVs4nN12P3QDBcB8JmHendjANd1uQx9DJCkXyFypGjVCQFW87jNB",
  "key24": "zwZuFN1mFfYYhPwBov9drxtuW7HVmUdbSVyWGJ9fgPRxdZu9fE67zZSipzXubZgjHDogPKNeh7kCMHydKVob24g",
  "key25": "4B9zZhhxV3h5qFPuY69AuD7KaGAEQbM9feZGkPYjsUcprhR4L22tgaXG8hr1Gf27peG1ivaVzp5jzyo1RUmz5tgz",
  "key26": "4xjKgLmJX6p7d22NVnrgd8Xe7WoxYRVetjXjSXWDGnX8r5QDTg9PgPFbJTYyem7warEm6DY2ENKrYNxkEN29LAch",
  "key27": "5zyxKpSU3FbGL9jNpyigQu19du3E7Um4Rfm7KniAFv7rTYdPfPyfVbQdaNU4AdEWmgyDqw5jUGLAprXRhguebNJm",
  "key28": "34h6JWJtjQxpoJvKoSYCmJFSzek1U4Ho6McS1JZoCwnACwcJvGJnouw8GcYeM2u228v7uUtUEKYpXFVWscKJDtta",
  "key29": "3LVhrs928bpwchDeLUJ4W6T2JxREGsCapEYyodUaupb3GqjSCNSa5FAFEpPHQDLhieaHc5B5mYqdeLP7euhqoepF",
  "key30": "2WZU6pBehBg3Mu1Nx8usccvAdoVA5AdqJNy5mySSFreW7NsrUmXZGuTQf5htDaw5pVvx3mWgmVEprohp2D8UHo5z",
  "key31": "3aVDvjzjaEgU38enQYpDBGW8G8PZY6BiAoQVPCUkPii4ycFwa1dih9RDpXaGsei7C926eSQYgmyeybL5z7WEAs75",
  "key32": "2egJ9EstgKLSbWcpEusoapFgWcpq5HaTS3YPjXifQKJ4VXH7i3f6rhn3idfaPNJtBKWVptdgLRpVFJJEfLdwZhRg",
  "key33": "4uVTCnyMKjfS8R9tMiytdH2oyPu7ZPfNhkqVdDZCRr8z2Q9j8mb3Qr88BAaNNNaqXUJgdorD8dYmtFz2PgQBU8Ve",
  "key34": "46gGWceAwxUpiYCsLLsEn2h1Nft1pRPuZtcpmArrGh7AK2WteuouLquhnPrjorvXS6ehfV91ThC8Ez7vbhSCxPj2",
  "key35": "pKSJAbwYDDWgPxiqC6GbSvnDJ44kpCdX8B2Hn7UaFU4Sxo5xioc3TF1oHjCqMJbeYRV1j4BiP6D5AUttEDdCqbd",
  "key36": "31WJk4XKhwRDBFhekRAH7Jc9gDr5XXjAsYmVVntdgUevcRtTByWvsLKZhk23wWsGypJUVXr7kN4bYMvBJNLj3yQB",
  "key37": "2oYWx378iSMAnYht3jYZj7T1eAQrospF8hJWGbWNXwJsNfztjySknpgH2AFpMWzmeynspaSaQq9kNyZzaJjLf8Wu",
  "key38": "5c7kk5pbvWHyaNhqmLJV69xdjiTHpyZ1cuNu9d3k5XBX2G39ZbXpDSZk1se8uimniC3pjsUMw6crCnPDoV66rAEa",
  "key39": "3kMVLsyWWjyFfCvepqjgpWfj6MLn98PTzkdwKoqRZqYNDeGhBjGYbAZHSL7jv8Xxi5U6rRumRzJxmH5U96VLQYKq",
  "key40": "3szxUyeUCywy8x2ErysT5dbEQNWGdMzX3WpagHoMH2ckCSecJHtz2Gn6cRwhZ2rYN86bdgMuXKq85Av3GHi8x1eL",
  "key41": "3uxDpmnXM4Pm2CPqzQSBE5G1YZNLrdPZfCzSVKi6VHPmKL58dWPiR9znKDWYAEittVXhEBrKKYpUShctP3WQQHtU",
  "key42": "5eCP6UD9nHiVRcmHYV1eh8wMopF2smwLiRBsXPXhtBnY6xWNG5FcMvDHCiSW1qBuZBgmEkpF1S81gKDr53U8hFpW"
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
