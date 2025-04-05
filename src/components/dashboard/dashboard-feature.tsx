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
    "4hgRvbo7gr6BktQQPUzkuCsozFYv2hhH42orJQDi56yGZJCyuuKAizuRcZtH7RTCssVpncwe45iPNFyb32M3RXuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4t6hAFQ7e4P7PghyesiLUefspxj82P39BngoW6q2Cf6GgXazpu5u38vV5WgyLDJnHLWEVeZveQxczQ2w5tN8ku",
  "key1": "2Nw6C8ZSvsXodBzyfo11xAbVHGtXfcrCfWt4XdHWita5Ro1Y8P6sg9vYCyc6RU5Rgb1wujrwV2KjFhdzapYRmnoK",
  "key2": "yocTKvhLWUiv1cnGQS1BxyGj5uUeqDF17N97owwhANyXiGfjiRTFYf8SSUMhCbwZLibwUVcfY5MDHeCSWKhzBjw",
  "key3": "67TpiGpxKiLZVrvg8M6oXjyeZcqUYcqWU1EupYCSqVfohzaR4pmZHmxgrKgiao9VG64eKffCX4sPvBSoqGm2NBXj",
  "key4": "511EXmKtSR3XSBz9ocm8JXp8XMMJ9o8EGppzYkmJpK84672SaqmSij9wVBqzAhETs4Ld27TE3pKxEt41RDf7qwiY",
  "key5": "4HcXpYtuT6YhRCjE4UbZVqRjRNAXiGSjivbDnJ4hb8jphrkaM33Ds17Dzt1M2Gav4cubDwKrb8b4Mx7L6WcXyZ6a",
  "key6": "2crc6CMiD9yjyqx1bMjornm2ZDG4q6SJuS27GaDsKLhieYvRap8vH6yavSX5pQw75QsBtiFwyUtC3SoXg5aMxij8",
  "key7": "5McFPJ8pWDWc3cYTCwGYme7jJ6DEhFdTgkY7qmvuxqZyE9VYiYvjKv83y2v4zq24M2iUnZZkvBfUSYF1HQkvAWNF",
  "key8": "37UvGvgNt9JqJnLQvPp1qJKMK6QgdQQtYPFYKy5n9ZNMtVdF8ReN9pVufnZvanmDhrQgVc6MPz5EeYshoiCSuSkM",
  "key9": "3Q7YsqyGsefBku4CZMmVpLSxU1m6KyHup65RFthEx96c4MFXBWavcUYwM4skUPH3GKftTgJWJjBnDgkLdJ475oqN",
  "key10": "42ARtyG8mDqzy4KgwfXqpGDNRHjGuWKKffHZf7jGcwd7R4AHaL9EJNsYgP4V4pW6xZvpNBc1zPcTzK5kEFRVRBED",
  "key11": "5narw3N2xNkCnQD7KojHLUw1pxp2HEQncP6cco3JZXLXVVxQPhaTSBzCqzV1ChkrRjeiKQ47nyYRvDm1Q8M6iUmr",
  "key12": "3nuhL2yu1sjrgeYXrqnPKgKeSKypSH2mqKSynVHHcekAZJ5FybtrLy41Y4dvUaiDmBWD29n1mY6bBe2L4jJA8gxT",
  "key13": "4eiEwaPuqS5WK3BR7MHhKn4CPavRNaACbMpjVh3m1nvCk1uEQBisNogLDvtjmAsMWZYARYgyFTQM5Spvu1YUGpfA",
  "key14": "5yjVeoxJLbqe6mfmKpxMeM4WLq81oM29rVdfbxuzuEo5EUq6xyEgTCmh5EZW24bkm6ZNh38DH4hTf1siZ3cri8xp",
  "key15": "5rLcF8F3CM115JwzgBgwR81FzwacNRtnowBX3jk4JRpJUVAm9w8ym7nJcVodjjXvYLLqU1GsroQMnYvobYGb8bDA",
  "key16": "44eXkMbhxtTDBYgajVHgbng9d6V4ZAxJcBeP3KQhaMHw6FstGwbVFDBiTmrrvinjr1B7GCuUeB5WJ9fwhtsfbLry",
  "key17": "2RNG2cZDibus5zJzz7jQUM38r73huXuVTRbfTW5ikhWEhxRfYJotUVpd18ENhnJ1x9biw1HJDkNpxhhrATq3J2vE",
  "key18": "5BiPJKofFt8gPQp3kKTTBmoU4LmSzoBpFhLhEmudH4zBMnAbu4uWhKVNYWYPePbXKoLrnoRPdQmdJsVv1gBU3jpj",
  "key19": "2wTAU3kTDbkCTNh7QfgUM5uue2dKFAgrHnHkTUXFM1QmhSjUj77hAtXAQCjyy3yWCcCpM98Hig3qY6cQeDrQmdGV",
  "key20": "63MvPFSrYs1yqXTtXhKDDVyWZtyaJvyRftiS4BVGrmDWvG8njehUG9NvstKydRQL4EQnMvp46LVZy2QqejvVzqnd",
  "key21": "4sr5XK4PFErqghpwUjndbrnfFBC4Mab1QZa8u2X9KtzoANcwB35dmf5jZqR3JS3FegBr4peDMcSZJYkaBuXikutb",
  "key22": "4VvYxNs3BfudP68d2NyCM1UXj1oN3f1B1DspgxUVGmmYU9LkHn1JjkWegNGYxphpiAHHWHMxWro1fqEuTTk7rjQC",
  "key23": "3dagj64Cs9jdL3J5caL1qZVfyfb49rqAWuGRp21UtCH4xfVn3dUWSSTKCc3rgRdsxrhY7BQrfnSt8dYCbbUN22u4",
  "key24": "661DXaxwAvAt2yfaY9DBFzKYDRKRR8Z1CW9AQgkuuHJ2zcwg8aABE3LVrGmPuvzqjHUivi2cxKezFQ9LdeYutu4X",
  "key25": "333Cqudks5YU6ssnpBDH4Cq7YWeTB4e1CHFjAXMxkWkX7qDhjdftrPgxfJMX22g2oa48wbiuyxBXKaCv4j1MUN7Y",
  "key26": "2re7gyS2w176Ua5wGzZryFs8moguzzm2etMwxchagY7i4PSi8McM5XxhdaBEtDC35uDywmEAGW1NLxZKV3ncykHZ",
  "key27": "44JWB2ndvgzku1939YXm57huEeJNovVC9ZFsvd1CFURD3kuEQYq2BUi8b8ZTfG8MSgGdWGCxg4sK9QNubira6Zsw",
  "key28": "5kxv1Sj49TnzV5NuWSombCpb8YkK8AHZBEuHY7marZfAVa3MyuVCFEWxo79C2QhorENAuvRocH5JFt1JsBjP5Pan",
  "key29": "5SqqjJaFdrVhzhR4vzAzRmhvcZPKAU8m6hvcexHYGMTkawtKF2dkJUPVQBD2y3zrUD6EsmzVe9uzXV5WraFunHkk",
  "key30": "5DdmuRJhhtBqfTKvo6rGXapgY33useEFeeKwfn3JeRMavjEouHp4vsEzStsZvuDb81gqc5hdsmhia3fobFUR9Phv"
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
