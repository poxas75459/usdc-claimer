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
    "3LmSW6zvxcAzCkvCZZveMNtdRHMkVF4MdMMrT1MMwHKePNV5VjH6ojw3db48Yomzj2snSWBf9W2ocq1Nuyx6avB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kf47AK1Zfm1fEmx3yA5BxZoHupDkUdw8d8C9SACuUw7jQ1yKCFgrLGrWcbw8EQZ7wozgzqkCmb3GwprZrrgHr1",
  "key1": "48b14Ra1ChTLne1rQeYbQuuz5aUU1fGMkNB7qSp3QpyzN4LzT99zJ99brgLNynNazTd2gA4y8vHXqVLCvwTsmzmx",
  "key2": "YEPBTkk3AuRog3oz5iDVo41RMfJT4hQn2z1N84JyGCj1oLkZQoWgZGoiiyg4umq6otNsvu5SrrrqLP6pK5hgxXG",
  "key3": "62aRG4vQHuFyatMZ7h3Q1eb1NkzikANf7hpPCoQQd86u4gYqqrtL64ETPTZFyNj8hfcaMQMKqwiiWBuMsfwpftXU",
  "key4": "2YDZgCvN4epdyqdTWW9vXjrpBq8rEeWicm63cV8wxMdmzRpZQoQ6mXWEedL86nyYwXZMUC5Rnh3vd8MqVEAbEFm",
  "key5": "2J2HPPH8uU43JuZsQ5fwfkFc2KLL8NLE4ztf9iuBepRxpswwngzpHfi1FN4mVqhn98wTafE3sDAvWDmFAVbBXCmW",
  "key6": "514ntRj39gj9xvTnDGERAAgCqpoTXN1ANKe8FB7Xc2rstwwhxtFFPaj9K9twjNeiZzLRLrt8JUyWPqSYxWkXbo4K",
  "key7": "2pzSivLbjNB7fqn9eFWgr9LmtoFB5Dou6B5eyL1aqntm8jJTGR5Wi8RFKGqd4g62HqxhKYGR1CM958Z1z17HjoZz",
  "key8": "4PGuH8m8BXttcPAY2SPuaYqn2KQYa8RiZbGzmVHkrYBVU11qj1tzDort47sTnywhKMLC81zJTPZoQ5tkHgshXYv3",
  "key9": "Rq82wEiXyAZ6CLcDtmZm63PeCpkBKvKcQYz4zkNB76C5oDUcwzRctjE9TzugF3HS3trEmhpU5gTVcniwiZvMTB3",
  "key10": "VbdJZYtEnRfhsmDgXjR2DF4Dhv9Zb559TzknZjgzEhj41RPUJPQp5tNpN7hsY8nQ5vyPnA4oyabsGr2UUhsasL2",
  "key11": "5rHD8rHrB1tTPJWvQGeGMTK2tgzCXa1PBWiYNUdpCZ1RJasvHdyJwcL4K5qqDhYYwVVgGYkQbLKwbRDz1s7NSZL5",
  "key12": "54qCm3oGKJg9vQxej3GaS56m5GqTjaWdJQon85GWW28MCzqnBobrBAizQ5wpV1mVMUuz4Rw4RATEojUy6BCAWaLe",
  "key13": "585WCNwifiW8sXqeerc1PMTiX4dyA7myCbdsShdy73PqEzgmAye9Pcng7rqdCPsnbkr6ieUyZtjidMXvXnPvCXv4",
  "key14": "5Jqcm8kq85ituGQieXdpq9PXsa5c2edb1Xenc14LQrMf8EXkvfL3YkK3nVs71Y1zfmu2Jz6aSXaXmEzBaCLACbEF",
  "key15": "UUe23f9A8ktCGtWgjPv73miAg9G7a3hNTDpvYoiveqDoG3KBdxbBwGqp4Bb2LXaCgoFyqVSwuQdBhNWGZR7j8iv",
  "key16": "4bz3paYYbUXUsxPZrfqXdGWKvwXRenU2mHKeoqAABdZue97QQNouTKe1DAgDJvgxtrSHZehRi7Dvt7HS4yz3yiPh",
  "key17": "5WtgJTWgicPLnrbyizLEY5v6tB8nLofod7k5F5G7ZKUwJmpjZ1u1cEwdQTvmKMesc9BK7KC9WbDKV9s2LwR3antM",
  "key18": "hXhmQCiRKjm33Dp1uwUgtsLKcCpeyoNjhDYbaCmy11KMzhposEGW6M3mn973nqNKPKex9hrRnRiuPakRABYNsxG",
  "key19": "4pv3EmwNrJaJrJoaC58ZazjgmoSEvi1yuukMnxt6aDfdr48uyoa435uDm11KaDTK3E4nLXygtKDgLJN99cZpAytP",
  "key20": "5LUSomrbpaM63dGxeDckfYFFBb3FTCmSxtCfHN3vNgsJYJSPHafhHFC71WEURv9cKFeu99i9ADqDF651QrLGUmtM",
  "key21": "2RWXok2MAywWnWA3TosHbAkGuFVqhaxj3A4xMUrEwZ29Umqhpq6Dg8Qp95rYXFh4a2C9WRgxi3PMghq3RTjGF3iT",
  "key22": "3xYxyN29WvUiSQo6tVu85LqQ31JPh3vmBBcBJsvw3sRskBdBGFAsHatyQBzjRKQ9DjZ6v3PPi77qLbjzpjv2tKTe",
  "key23": "3VSL4HSBs45LBCcvNDtASThD7HtdTpiVbNVXdiTUZoZ1vqAWyjJvPR1kasRFJdvULQhT7DheTF4GA3epFzzNwdCi",
  "key24": "owDbVFynLK7xTBWvWhGCV36Re4b7khRcB3HQxpw2aJ9QXx8VVafZf3uTQZM4aXpTvQr6yQjbiTUyTT7QuNeXimB",
  "key25": "4cDb5tdDvHgYuT4VCt91TMvujWCS7f1e9wBkn7sbuEZJCtR9Tpcsjv9pgkv5hhzbkCirpf45r4DUu8ouJ7fHTcp1",
  "key26": "5osuHQ9Fmbqp2FLkkqnUg5onHWWvRGopxuUTro9f3V9PfVifoHkuCasnuvsUqTPxhog98M8qoRUK2hDH2jDzJwpY",
  "key27": "5P4G7SA3Y9raygdzc8F1dt7aXeZ6vfuJkjfnfkin8eUGkDpx45xJLjw6ZwbC7TqXUnZtzZ4Yai2VsXRe472Nv9CL",
  "key28": "44qqMAhzE9aLrUpHmTQACdX67Py955xpwNrk3s2nPVdp2qscvYEszKqPAzMbivFQXaLeRVtHiJ6ypWCttsdgw2M4",
  "key29": "3CoSYsg3W91dW1ebGzLfcdqiVZtWpgJg3vFdiFYq4SDZgAUkZevEU6WRChjdRz99URQEiEVba2oisYN6unpTJYhd",
  "key30": "BuQdXpknK1vp7QEbh2zGJJJScQe2v2q9kFRNwzzxJCT9CHHL8S64VSYLES8ZC395xfRsEtwAXnw8saYn917EfUQ",
  "key31": "2MpKZGcNFoG16G7iKJFwEnuz4waxM5zHcjvN3fjNw8eWX5WScRbRmhFq2Msscr2vsnpeH5yPBsaJ5SNpPq6NRd8E",
  "key32": "2kd53p3evfSUF8b9yEHzQ1sd48WDr8NfgdDb5pWwKd9muShMaFr9vce8Uc8RiEvmXLk4itZ4SCMJmY11mcNyn3oe",
  "key33": "3gdZtdk89jjKenZC2Y1nP9VvAZhjzGLMgMxJrbjYC2ui6ZjQR1kjafxEfapu3zu3SgddXxCxcsdxbPjgaaAtuhn",
  "key34": "2MAbQTu7N6jS46z5tB2D2De6Rzr23jSR5R9eBSs29hPr5EHck7VjN7zeFaeTA6jPLA2BJYnKcXWj9YKQYagbDF7p",
  "key35": "4GSof39bKzfbTejUAaTNsZptpdPBDZhjCkLcBFKuuu1YxSzyBKBcfs8vEEiDm3NdCLrCkWoDNwTspRrpAYcKAerV",
  "key36": "592d8Hg5VuU5jJvNKPRns2qCsCkmZNFWQM9A3UubreYBaM5W7XNNkFjR3sqLqzvBixQdoFSjC2cBdB2XTJpyp6JA",
  "key37": "28hRao4iswBcvVAi8mF47L34ZBSAY9xpvbC82hSyREqBZCqx97gfiFvdFYriQXfjapJqrr7eAKtboeRE6epk84bh",
  "key38": "4SftTgfYe2UMrKNKyJpRsXWEgr1yDRaNnvbVfHpERNAQowgVApNFfqZQw5SLDA1xPQqP77FcF4Xd775CHG3F2uKc",
  "key39": "5C6SM6X13ANLPtmFyihKEHSJ1ETjZWTugLEw8Dsx2ChkxYcghTJJpS7NGBKu7EtrG5VJZcdNN9thTncqyQAkj9xw",
  "key40": "3711uSZLYfkEcCcRdNy3YVai5QFFE65K3wWdmXgynZBHsmZ786KXVUXNXFeGnTgicRZHJesJz3ydVo3RgZ9KUx7v",
  "key41": "38o3ixNhtcqFq8ocKTKebNnfnYpntbPR4AGn5gfw6yYCmxxfFGRi3VPchbpDeksk5exxWgppT4PJD2RcnyXH33ze",
  "key42": "5piN78nCbosrBBNk42Niu83ZugrtKBmkhBEs37tmbd4U6jeK9NC8KtLEjHabE2jDMvAsTBHfAVGZeRKyjn8Gs1ac",
  "key43": "5XRiySkMsHpK3HHbDqi5bx9dXBqMBxVsRhZfMSvmmmkspe1RgnCKErxKHkjHCPnfUUSjHDZVcd4HVWi9yHz5S3Tc",
  "key44": "E8ErsQWmwgbZZCDSgSqV8FsUBoGjDhLJAd6Bnxtr7KHbGGeHpSbNscSBs2QN5PuFsJuvkj69Wmn4eLibtzC7qsE",
  "key45": "G49g9tsaGnFPZn5nZvtAgvsWKhKhLiqBsAiW1nmVc2JdTeuGABECzNPqa41y1TVPCh5zfVPP8VKUzHESpPt3LFD",
  "key46": "3LNQuRxqJbrSKhhsyQ8RJGeWzZU5ouu4rh1212hdNxa2q6CdT93w6DnTBDEeVFJfEDTSVVmSCz3RX8zWHMZSxPdg",
  "key47": "5bo9wvDvoXLCmuQqq7qX7s8VAx7SSSprrTfhmEfPNAxfYVsLQMpdRR44NKxgn7f9SBiqytaUUDq5ceHcvuSNC5ej",
  "key48": "2LkpDqeCUsKEKc8vJZ5T8DeGPDB88utag7PuEKVdMDma5WQtd3Bdb19Xc6fW9dYytZJZX3YPB3bT6iZpU4fqSL5S",
  "key49": "2ZFCMZYEWfRcuNo7gWxdjNfiUBgt6A1XRWvAPzwWALg5NuAZTvBYhism1u5LkcPamtyT9wNNjRnZAu1ppYySKY5P"
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
