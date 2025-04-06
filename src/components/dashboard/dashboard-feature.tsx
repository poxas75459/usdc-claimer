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
    "q5GPetBFJ1qGuDVt6PT7irahHUttYGqxgoX14RUfjhyJJcem6suuPhww1fK2gCwED1iBxrhtSBtDW9vBXXk4PYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CQ4RTruMzx5xtHu4YPfVSpDxiZfjJGEnAN6gitQ6aJQgJh6cEnNk2v2P9crNWknt3EdhvUbgRkZsDBgi5NfVxw",
  "key1": "2h45WVUfufMwHCX45NY8aCVzc3nFJmZMPG3BJxC3EriaCiymvoGH2HpwpK7mx4XXsRdSAEFx7LWt3JRykeBScjrf",
  "key2": "4GVpRaJgvNP1h75UoBEbmDG4WLngvK9ib8BfouF54kNR1TsvMhKjaAZiTQ9hj7oKuvZEwsDZnzxRqG2xeTKo1KPB",
  "key3": "5x3v58iQk57YV3r6riSqy5mLarwkMZhp8ercEpvpp8jpv9C9KJxAAHmVYreQdZVAgH4M1rsCfygbRW4q5VA7Lnji",
  "key4": "2sdFQoa1SrwWA2YKDfuC4T6htrawdDGYpbG5G2QTEfX9SeKkt7wJygdvRrXYHSeVBQswGZQrVjbptiGsULqTmRUj",
  "key5": "4rWHq3Fd9E7Utdm8XMcdxxLgCWuhtThA9Vyfodj5ZtFUVpzX443ZyNF8MRAvpV6XcUu5ZwXDeL4mxyU4hVR9agfr",
  "key6": "9TSjnTr3Y8sGRiZR8eTHEooyRBrGCYsqdpDhTe2AAthKHSfEiEiJYUX3WNCp89y4A3yx45pA6ZKv5DR79uEgo3j",
  "key7": "3p7xiQjKsobNEzz4ME2krsCYjhX674Dk5D2pcwGdf3CBEQZ3PN5MgCR5MhsQKyoW5pWKvdNSWPweLcGyzRiqEsyp",
  "key8": "5ijxhNYZS3vRJH4GRtpkUJRAXCCwDWnG29jYMvUn9RD8Jv1rCdhyzc1RqqWpjtunQsHdKBZ1jA296n1MSaEARbsv",
  "key9": "25N4rqvN161ESjQZzvqQVfdytTNEVMz1vNZZYVSCjSjJyoirCDdLv1XeoXYiDwZcFR1zap5TQ48PMEjFhCRPHcE2",
  "key10": "4batJ2RMoWHidiPRSDskFgzLCse14c9grEYwHYx7ycUJQhjzRHrtB93M4Tc74EDSuj1eYc5keSZLjArJ8gP6JMpt",
  "key11": "RSv8Z1FuynSfsYMNRVPxbzebckZajBG8p7x1zCdQP8w2WEMKQoFyPqpYfkfCmzaFJG1vN75LECNm2CwAfNhj7ez",
  "key12": "5pDnKWAonuCu5BsjnZ5FFmAK7BYKEXXZXjaCpgVDMRC4s6WDjLrvApmaZeZRPhSHtMxwXJVFenm46e5JhKjSa9KH",
  "key13": "4Uwh91hHzCqEB7w9eEEE41zmhhnAufMjYoCm3DMWz81w2YvBgsVbjM4zjKFiUWmYAfPskcpUbXTfz9JjeN8WjZyD",
  "key14": "4qLCr6xtrYdYbf58nK8QSMarCYvwiwfC5qeyiJWbNojYMQZoVvocPdKDMB6t9pxCnbMDRdCXfRyrMGspoy2rjanN",
  "key15": "2Gtmz1DZfYW2Vjqsod5x8iR5x2TBgE4oP8THeNiWtAtcjN1m6ofEXdEFu4U38NW5aHnrLJNnkMdLFTPFzAXeVTTt",
  "key16": "399gcw5a1XUxbF779F4tTs7r1j4LaUsPf7HXd7FVrXzE7FSwic4ZPW8v6UGd2BFUfwqWfGRT2tVA5HXJGcVe4U2g",
  "key17": "q15Cnj44HHN5E7zM3AZmHpqH2EoFk4RcVNuaWBpBLw4vugDZNPFyGLZFLTte4hfYSQzaRxXbNnXurfjZqFYsuSp",
  "key18": "5TikwuJFBSVYsbUunLJvrKWYRCa3EkHzCLVK3AVeYxH3oVAAvpamG21iHANYjY8cCNtijxpRnT7ij14NFxBaZ575",
  "key19": "4Gc3GgBG3HosPHmAPuQiGife87PyyzB7XPy7acgQrjasrtYQTHh1bh5qYBpB6RsHBEMPcJ1opHzMcC1z2Z97SJG6",
  "key20": "2jmGVJyze3yYFXr3PHwupzfbQw38qEk8BxxpduEtryn6FT44m2tb5UpdsSB9jEchPgL334XbjnwiporEvGioCddy",
  "key21": "492rq8MDJfTpK7jRfNk24fqgaa8yVRRa14NQaWk5BA9Kph8Q8kMTe9sdgVTmeKqqnXV2ta6ZU74W7aJxHhRSQbBg",
  "key22": "MBXRn2BH3iftxPc9SMQgUBjKB6hBo35VDqyib6LgiNAcppPQft72sA8TDmCnCBo2uH4kpBxwRrvmmh2qawLywmC",
  "key23": "4EqReytzaedSWvECkxq3c1ZrMe1CBFzDibeEX6vsAmGgoz4UqjGe6wm3XBLfZCwKBEdikfkAcDGHTXdueuz7diHV",
  "key24": "4qsWDYdwh4LWFHmb67KsTKNVmbLaGGiMM9LpN8Vt1qy1moMR98bVA2vX6LUTqTAn8YDYMBgjcDAjekxuZBRhHwKP",
  "key25": "WvYJhRSbANiTvptj6jtr8LWbt8qwwrRy6MJBosMcGTjHyM8udvb5LG9PBADLGEdxNX1qSjayK56JnCkCfTZMB4a",
  "key26": "3XyTRW4k4auYnHceodzi2SEBX4qTEJFh76gmGcsiGZEyZHqei6ngS5UACAczXX5Fjvoq9qLfRiTGjFZeeHDapxf2",
  "key27": "4qapmir1FUMb32x6jUXjeMHSVSR2JVGD7xpWXK8NKa7T2p8x6TLX33MqQjwS6iWxEiuUWjE78i3UAwKwVdfSSWNK",
  "key28": "3CckJTzyx8N5GuSZUbQWMnnVu89WwTADJdnos7YHzSKLDRq44KXF3GrfJfPB7eQ2ik8BmqrKXSHn1bUWTm8g62aF",
  "key29": "3R1ugWcrbzCAC3hxixeMKEy5dLkpcvrco8DXrRMqvGDpSrsCJMG5hhpDMgzxT3apZg3beXYRn8goquqpAn6dRPit",
  "key30": "xZSgKRFT42ZVTAiuPmAsFpiaSUB1YcjZxx3qN6BZjcmox5KgzrNLb9miJFy8MZqeAXzaEhpXRCMwXBvg6u3HFVG",
  "key31": "3DDHS3wEcMM6oBibroKhWFk6Hddjr6QjjECjfd1xdpXAT9u5P84Jt2AxptXaq348vW2DyzFHZnZJ2iYNnZYoYvGu",
  "key32": "9bctj76wZxDcJ3WE3RXHYDCLoVDruTUcuDzZ1rLLtRgAt1hcduouaDSeyRYonwx2uDVNc8syio1QfTockPvVsRw",
  "key33": "4tw2pvuWQVxzNLjJnEDVewZfSH3AhX99jkdz2RvFL2QCbPdn5iZG35aW9DfazHKP2wsa9aYjDyui18GiB4FQ72Pa",
  "key34": "2yWkCCmWDCKG5KospHt71CNK3sRa1oc9PyTYbtuAySijiDCuKDrM44kPT6fWtoUqJ4fGDFGTrnvLo9Hpxk9DC119"
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
