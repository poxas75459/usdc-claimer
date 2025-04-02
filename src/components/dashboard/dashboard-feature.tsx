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
    "2uSU5Znu51DZmHa6xHJphpxoxtRJN1apzwcVtLUyWjuhCPqTTRz55Vqx55Mt5oC3pW4PAenf6EnGaRMPSy9qmUTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VULoAoLy5D4GS8LCNhsEQHENFN77k61bbknpi1UfrkxCR81Fkx3BeDHpkpvZCY1QU3dEdikvWB4UTPTqgYx6exw",
  "key1": "3wnvTAU5jFgKcKuufSzojsjVivnJGAfbPB4bigzhJoKp6j1DSfuX6RjkJP8TjZ61c494zfLCC4tWV71fQxMear83",
  "key2": "4j7Mhn877irFBgdnpJq8byJUxaftnFDpnYozqzcjWPFSzyHQdgFhuHZZMmFy7WmrULGgb1nuZDNShZEPFUma169j",
  "key3": "3Eu5rPuGnnpAHzjgxPWMFE1rbjE4MP3XqmJcT18X1xHZSGCQ2khK2KHQguAEmXadeE7ZnKfgfxVwU8jzT5A6Hk6n",
  "key4": "4xbnd52NDbNSBFhG8PAzF7Fhj7TbASw2QgYkr6C2YyH2kRBgHBawuZxc5Q9Uy3ntZhErFNBtZxE9XT3dFzEuwUEY",
  "key5": "5g9H7ji48jQQdjoM2riSm7hEHSE9VR1kVNFMhpZySyh7ySuuUtmRqu6AsMU3nQGabYjZzrawLsDQHw29akYt8Cg2",
  "key6": "35VKBoEwBvTYwsZ8HC4HnvJkFfS4SFekxWjbrYoedX8oy4LkShBipUcuJLK9RvLndasjtEoAB586yWAQPCJm7PVu",
  "key7": "HKWN6JcQ5WP8Po6tpnJx4RWisP3Jf9zFzSg6JYmZZ34JwhubGqnKYHJoodWsmgoH181ELUmChVQqk9Pz1iMpMSx",
  "key8": "3MswPxWqyzAkzkcckVGVxTTkGV2tCQeAdyi2eRTYSxetx775M7Cvm5QJ6chaRZhUncnU4y7dNnNyLyRfrWmfGhjD",
  "key9": "5p9CoqjRSN8erJi8j7o5HrtqKZ9NwkkPdtHRYJPBKFPz8PEqC5UeU95mfhaHkWRMRjminhBJb9v7aBGSBwyoDuit",
  "key10": "4hV5xhih8sgeg9o7RJUVAtvo7P9TsrEqR6LVTEHkzhYMEVLjPoh7iPNTGcwZjU5ovSE8qiEfrsbk7eW4KdEV3vbT",
  "key11": "5V1TK6nJkaNixLqTPVjVi9QE5MuNEJ1ntfTgTPLtDYTLjjChz96AYxk2Q4Hk5WMsgV673aV9FBF1k63qWLiC2QZK",
  "key12": "5vxHrXUpyiBEVwWcyQsDKSw6pKCxeWYU42m3op3tSgBycRE86gb114y8fSQGcuV2RTh6JRj9zAxcxXVYuKuD5c6R",
  "key13": "4kfmTCZKzfiTfYLJabJCby3gHPgizs63jx63brhHukVWWp1E1oekKPa6FzNmnK3TXnWQsobCutT9fk6wFGMYz4s6",
  "key14": "37JFNELHVtpfBmVvGDnGm7XPJrQPS6nuxnqYE4DNNN2XH5SyuJPQwmEcMw85GxtMiV4jTPRYPNLpz6Bw18okrtVX",
  "key15": "2qUWWE2bA65dKqZwfwHQVY1hkpBnJGxNPseR68a18BecwowzBsxFfhPXLUNzFszaSUaMtEEs5bjDYWmhZ8GiKNjX",
  "key16": "yp9kHNwVuJj1CUTomkFpNuu6g4a7cLqAiHq6CxRusKwKQfh7Qqr1CmC1KHN4fxREX3zRck1NAQWZXLKK6EgqQUS",
  "key17": "3PbY9LKtSqTZRUGsjV3HwFNWPLiJBbz4MWjHB7Jg7HH786L6zzeaTwg5mjZd2YULz7eK3ttApYLrC7m3Yy7Ry7t5",
  "key18": "jMZUSqQpmwwQMHc63yTK5umajs4u8ZNfUgvY8xz2yzCopTtRaEkVN5YznRd89dXZPP9SCJBNn4c3MzwwbFtnpwK",
  "key19": "3L4ZoocwGcdM5Hx34pwSMCZqk5vUZ191zquf9zzGUcdomQYBu2511YE83GPeV5Cy8VKRj2MZy1hpitiQALhrJrZw",
  "key20": "4Hh63sdnZq8PWX4bFUyVRhgBBXKJASUcW5tzsMyPz4Zqu5aibg1AF7dJdnqxsHc8H4JX9PL3aSEAdw39rBrU1bW9",
  "key21": "qYqufnvp7hNUNgwj8Hi6ZiDC8bHZKretoRXPPLhLn2bXMsComzLTitUWhCnXiWV7FAazDPPtwhmL4hV1PVJ1aX6",
  "key22": "3b1KNeufkbkSKj62FLZEGBzfFytv2NPjpbC4PAQL1y3B8RnA3WbFonjqvpuriY54mygBvMW6a6xyaZgL2qjiv1Us",
  "key23": "4QvMNbYLuQhh4McvyF8oEe4jEqVeNxmT3wisos2Hc78PjzKmF6LGtsHcaCG9X7JCDS96XE7NkMdKSWp2yyPx7erz",
  "key24": "5baKB8jC3ZHaA8zkZH4ShdXz18ftVWiNoEav3qTA91Whcf5FiH4g2sWUknu1bqhSMkTjmB3BRcW3y6VXUexpPyXX",
  "key25": "2AcNZfMMc52fYC3wMvo8e53xr6uE8GULMHhwz5oBLuZ6byoRLpfynThP2f1hnDdfeEKkXAHBcynVSmLZu5KkYPfC",
  "key26": "4vKo3HXaEqSpKL3LmTbcZVPUW7k8vueFpA5h7yfSdqrc4cpbPc2ifKmP2DT6B1aTAGWwcaRR7oE8X72quoU8GUsS",
  "key27": "62pCAUafuGkbMmTbJdMhfETH78pWuNgacmPggc3AvCz5c3yso5vCPc1ULdgnXm2YHJbYaWFV2SjvkySiCk9o9CUm",
  "key28": "45mM8CciUPbYfNYV6zJMPAmAajQydqKRcgzLWxUPEoMYERN9UEdehwWEFbkqNV2HDrE3LEo7FBpZQrDt4MMDUHCb",
  "key29": "2RypYZwUsdDLfowwNaA9DFhvb6TFg66QA5Zc22rbJNbxPXymj27XYRwvv8bFCTMANghW7u35X9Su6yZdw51L6Dxo",
  "key30": "2CZhiHihJdhwf1P4EVaZjn5PSARgYeDPXzmhaxG6SqCaW11v5YquiPeBMYyTjUh9Xj5yg7v27hd3qun39HdYaQ4N",
  "key31": "21sM4UqWykErqTAkstBbv7n5YH7iaQBDnKjSf11XferdFoRgqJgfHwWZdZAaCt7LVssfEhLYcXP4hjguCdAkrzH3",
  "key32": "2N5gD4K5YHnUVoKmkYzHUoMxoMP5VMgQCzsW77ANPmAfu8zEavQFixSbx52jPjeLwLXo8brCu37VWiLe2nP8cirM",
  "key33": "4ma21F54qScbX3vpomHBpnL7q1ayHAgB7pDgQFjnjppvCcerH6hgHBxsGizoXsuX9gqdyUtDqbqUMhJfHfTQuK1M",
  "key34": "9oeaZZXvj33FkD1Hep9oiufThsbPLhYsjMLgpPkSvLfcWG9GM5mJsLm5i3YtsRU2LPfVJXVjyMGGmqmojvEUpME",
  "key35": "3AY6Y8WtzhokVbVykFQ5zEVPe9iyCjbRmaAGDpRNuDj9jcsWi7YXbzRgSJPG75RJsvsXC2SfxuSUHbXpNEBRg4eM",
  "key36": "3FmFW6fAkyuKmswaavpWNBzHx83hjWj49C5oEfwGgos7YU4cRxQZr7X8wjXtZd6E5XGXwcxnSWyDkGNZApF2H4Sy",
  "key37": "3eWNKszuHbouDpbMpSvJiffUYpJDqHaC3hMQvFhNF6pjKEYWtFunFDkBybEDj4RS86HHZRvb7vCZTk2a7ui18GbZ"
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
