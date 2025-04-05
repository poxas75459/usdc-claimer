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
    "52VkDQju6bJCy6U9gEVBhMx5qQkm2p7DcHeA5hrweSH5HTGvF9PG5W1bZn81fNyRFytcrxgvfLdpwATxFMw3hqWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJrHAZoTzK7nGv2PogCgaRodRB4BHjwLGJwGJ3Dmgz849TL3dNvFwewkJrLrk7ATfyC1aJFJNieYnMXnuwHWatz",
  "key1": "2J2NPYVY1grH3CmWu3gUPbeGf74Seyz6715i15PZ5KEK2ArSKTX9up7WTb6iEN2nGoDr4Vu7sTLCpCeV1vPDgzhQ",
  "key2": "3N8rfL8Ao4E9kvRf2QFqNesnmAvzjzpH3kLFgt7Sq4eXkeQTaNL5k5pY1A2sUjZGHUUWJ68o8zsDqxtGRVR2dwbt",
  "key3": "4E4szB345JMAEYfmaEtNzvxSaGnBujbQg1qQFAhJfhcpPUMZyLFFVRRs7N5XGnu9grWxZgmHPADPaZaqGJ4caWnC",
  "key4": "23k4NkheZ96vY2atYEu5S5kay8W5ysrNDiu64rk3qQojqEwiwwzqr8Z7iAd7jJg2CicCoco8gYPYkriwfak45Xjk",
  "key5": "3jmGhYxGyKozQpfNGFu9otgYNEXmjq6kzswnEkQEEzachPuENkNnC5jcT4RsickxzvNgZqrEPYhk2S8KoQ4sFGHv",
  "key6": "34vn2FeU32raPoe5Fx7ypuu9FLbHWry8hXb27mXjKY18d7XiZgxhDzQVtrrQznSdLBNjJzDmAYTTybddBAyaL8rq",
  "key7": "5Y41uW1Es57k2S6NY4XKJUrgsPEqgRJEGeKAvZ36Yuipfyh33W4uQncissfG411RLWmYKwbY3459LQEgLUkxyemv",
  "key8": "2B81XZt37T5FExAtrQH8QafbpTZ7JDaxEQ1WYiRrAkD1HaUtBr92HX4yo27Ld8S1kqfPwfeoVAYNuPcUTnL4V7dH",
  "key9": "59Ac8odPAYsHDGaRbzuEXLdheMohE1fEbFx6tTNjNdjYeH5GkcfX5pwCsq2hReFrEDnfk2GouBDrhCCmKoziyMoa",
  "key10": "4YqGfPLAS5PDkmwYxtWU7uDW9pBYijdLCNZ8bLN19VwiQfQnfBZo8jXL4FBGQg1bRegpt3jsSqy12Qa47uCZWBwa",
  "key11": "t1ePWoiqAu8FuCpWwLiT4uC6dRxETmPFQYakRMKiKBSLqJnBBauNfQK62QR3zKGEkGyTbyE2AM3rPKXR56hSksT",
  "key12": "4WGuUH2NsyKEsQHGVYyN2ekNpgfkZiYjCjj13Jonh1pRAgwGYtDyf24aqtmoaqFkDrouW2iZC1ybP86yjHjp48Ph",
  "key13": "3mAdtgyhnkBeMjmTp18s1Wix3R4zbsDAxR2FgXMQ2EtGCE4v75TTnpMc568GxvaihRRtzo721rDBHRz7zAJydeS8",
  "key14": "5eWvnt8yoMsEHujosvwFE7Ky4GWSrLcWveJQ9QZvkqjux6ZMDGcgbsyXbMqxNFU88rULqY52o9t217ZBniTnhF1P",
  "key15": "4Jr7HYN9n12ocL3Yc2FL9HWg6YKRWuKJAaSLzz9t4eYJYGmMBxrKEFfhs9LvrBaXpZnpTdbTVBTZCPHTg9v7hHNb",
  "key16": "4q8gFirx5yLrUF4KTtwZwzP5kd6iHc6864z1qFmhs6p9tar8HK79xssm3mXiqXQQQNzSgTU8vkuLduHdqFfQwKfK",
  "key17": "egxQJGSGmoKzSZW2Wt3C5k5rKZ5fU6Wgzj8T1XkwDPnuZaPnjf9g88YUhxDfQr2vb7Cgr8nUNk33cVjioUzAFve",
  "key18": "5KMPUQd7CLfJRxXP8ZrmCxYKLViA3BUYSNwzn3BTYrh6EtKWQCRgwE5zwDFJyTDF4q3dstSUZdjGGitfktRNM1Nw",
  "key19": "2MmBW2pLdP9QiG7aeU5g6PGkv7RHPBDVZGoUoHhhHjbsdJexjGTMSyrreHcTHjTMcZQ7KJtnm5ajMdZ2TrJBNrWD",
  "key20": "usvQv19PNJ2gCibQ8MK59ZpfYMindvfbMWbhbTwbnwbdwyRWTG7AGJEjaqoBQhHEYoH6ArBfvjqGkM41dAGLKsL",
  "key21": "2rRHNn75cZma6uJokRjXnjXEiSiajqW18d86FRtnv3xPtirxper7UxsrhSknjkmV3U6Che4RE3GdJm7ZTJoLmods",
  "key22": "2BcV8YAYbAA4VVhjd3rQKdcbtvbL3yfS71UEfUw7pPXQCGiJUwuWG2bGkibi8wdocbwGzxomkoAaDpCQ2iSytX7j",
  "key23": "2RY6NHtgd56ia1p57rC2N7Qu22DnUKvhtkVRQWhDtkWo1hjXUHo4CcGdFyBV3p5E4TwazAf1mbuDBUCKmAwTMia7",
  "key24": "Z7ecziJoinBW48u5S7jMp4Ziu9DrZYUjmpCGV1SM8MnY2u3QKDhAMptPKk6rYsqKzecR4X5iS6brwQhok32Gs3f",
  "key25": "3WUGeNeSxM8vDuEA1QNsUTBvDYk6LFQLyTJS4z6FrFA6tBKHiHiAhemm31nWUw5h58SJC5znZZ3uTuFvdd7xuKu1",
  "key26": "22vTZva3ARVM3XTw3Li4KupBUJjdzjmNrRrr5VrNEypQCYfAtX8ZcpE4F3xGxa8oEctLuTznms1CnrMBACXxH1aP",
  "key27": "fky3fbGftQR95Nndz8KMHytEQDUM76x4mjQKDZzT8kuEUpGqkX82Q65dYeCyaycnxCSsGrazUW1MexvqUZTZd9M",
  "key28": "2G25eWQfJSn2fe7cEKqdwMRSdrZcWuwcGY1Lw3be2zoWTDcvvL8ozMk9Eei18pkSA6xgQ8M915CsKw9htPzcZoXs",
  "key29": "4f5M6hDGD9xG6pkd4rZUABCnUMLcvW1kY29qSiVJxXupTRU9x756KViaFkHiWgTS7pwng61eiUgMx7qP1uNnPhE7",
  "key30": "j7wLvCwnXXL1hcPhDkEXTqQk47eRZ2jZZoarcCwqt4KQXpmDHq7qjYnnohevrGFmCdnPE9h3YVVKaJTWNL92Qfq",
  "key31": "5Z8cAx7uhnXcAU1b5HsVtBLBSAN4QNRFLLFUtfz8vKMkv4pD6kQe6JaLFmVUsfBUHAhHaEi58znBrCDkXzdf3zXs",
  "key32": "2VEBpUyLYjFEC7hZ4pwDc6pw4GgjcmH4zzYfyMeBmrszsACSnFpRsT9BXXzZ5i5iWDcSKzmeLASgSyMzMajYBG3B",
  "key33": "3HZWWK46gsTrqzmX2RGHbAoW7uEQrEbJR7ahuEcfLfBwUk4CHSgA9TFMRKxWR96KFsiXqZzsZsyeYjVuk7WXEguS",
  "key34": "2WsU7LjeX3TSXuj3F4DSe1jkgiweh2VK3Wc6LpNK6XXqFajz2QLEtj8yG7AZQSDwQrYYpCWMe6cccrySuEVhuAMg",
  "key35": "Nue9ABdqgMiL8nZ3jQS6dMzY3exQsqJdSUmXLoZv8vYtVBZVPYk3kcqJaKvvbzb38Ty3LSoHwTmYiRNHcPpZhGK",
  "key36": "4PizwDA4dsj3UzgYinrrtxoUsss817nB9R7m9qHmUyEockcvdTLPjgz3MAuSb3sVWt9mC9CkFvj11JjYQ8TFsAVe",
  "key37": "4qrqbTYKwD5G3fzj34WyNKkciU4pHv2q5RmpsHgsyqydi4X5a9vcJW89qAPwQHESvEULypGSUURevxNpFJnTyanQ",
  "key38": "3jZrf2w4MpYWbdVmEfHhoqkZKtL6zGznk9Ktx1N5zRUWQtmrqJ5obknY1YpopFjK2xnd2RaS8AHbFHPvmEGF3pJY",
  "key39": "4SaGcDLwt7iqZxZNsj6LV9kiKS9aMunjrrE8tywYFktGi5Y3wohkbGtSQLbCZj7JcV9eAQrUxKAdJbzZgyHm3Gcu",
  "key40": "2bphMeiUxJhXkRkRjQUqxSb5JVb9dCy687pwgTwmgqT6H8iS8raQAs9Cb7CMe6ggELrKL5gNf21i1QLL3eV9e1Ks",
  "key41": "983CazXMKwheHKCszFFTffk3QuU9d8z5Tkd2jqL833jTRd8prsYj1VwTMzezyQ2s4gjudLEchLYWgxzPkEomSZs",
  "key42": "4cp8TeAcAPDVJ9Fxbi3Gs44RQNmXTF6bzsZDnizc8au3Mi37cgNH4pVyck3wfgVz9nJipkEUW9WdgSZ9KgP3d4ET",
  "key43": "24n71boKWbZ7H8RFSMsTxwnGphvrTnBuML4mCo5Lf71JKQQSKfXREKAgvLgdpKeDF4t5RAaSbWERsdshYfne1rip"
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
