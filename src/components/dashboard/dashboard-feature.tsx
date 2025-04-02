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
    "3RCv763AdvSrHBuZVDzM5Nt5hkR15K541fZryBbFMyjPrnhht1vMnTWECZimamVLfbMZpW1crS6rYk3ButgXJnGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tD4vMqnhx9MfF4tC7GeuPPQSsB1Xdw5tLU1B5HquZGiiHGfeXLwQoB398qvubM5P8W3TZHkCg7hyvWxKX1VHx82",
  "key1": "3u3FQUt3ASCTwCMm4w1XfEa4o1AEytZa7RDyHq1uCGQv3JJJtxeDw2NBwkf6RUedFSh68x8jkg2zN5Ku2qtKXN8k",
  "key2": "62vfTF8wH4A6gYR2AWzXzV5TTY2xZmpod6Z2SXSjFJ1E2uF6LAfCyvtnuZk8oiiG1E8hb3P272jYdA1qiaZP4WRf",
  "key3": "2AhUt2uGpf4Fjnf5mH38SNW1A3n6AWzukjW5NCmzwcTAn8VehBR7mTxf3a8dEFmsLs8es5qfZh3vpfWhw9EFq7pe",
  "key4": "3aJspmyJBM9xYsxM5KRS1kqv9fpipmHwrYxbA8QyinPuqNScAf1r2aCuvktHPEN8VLjj4SrzyWNJA8cC3QkEBegz",
  "key5": "45ttSQvmjqSiexfrhZyXHtvGBfhgJwaQZQcXuPDExNKofMrhgi9kBpV6RZnC2jW5A9KCnbyKCKBEiLkc2NsxgfYQ",
  "key6": "G6c2yRW1XAdEYMg5R4iszDhivMw7aLgbsUFCs8BHWz9P6DjPtfDYgPdbxwCtuKXvAP3acxVhW1bVRrYbs3sDoDD",
  "key7": "4TzyMCCKK6DHDHkR4nqiPMyrs2PbSDZEZG9rnmAYjUWNRvasoyvMt1gRKL6ePX2EUXssTyEkQRyFzm5TQ5PuDgoL",
  "key8": "4f4zpvGf8p93vTcm5sKgf2z7t2NHseQybxWcif3VjXkVMP691CMivWtJHJpW6JzHEpXRymk6SbAEzghJehBwd7Px",
  "key9": "4gTkwyni26VpbfUo97AKSqEtzmNg9UrzcQJbXQ72ep9VhCeYLnzWf9gx82fifjNhHG1dJkoGEu4YPEg8wi1cUyqm",
  "key10": "4HiZ8PdimhXZrqDNFHQgUnSTKkP2gTGpDZoAwU5dWLa6oeeFByd1zyqBWoe6tBsJSRUbu8SQbLakYvaRGuSmeAuN",
  "key11": "QX6sNehBwCdgaq56hUiEiGcoYKawysEt7x5xnKtvwQ7qQo1Bag33eL66VJCtkDtpNYLAHDfUMEPwSK9LApvzH27",
  "key12": "5q99eQhNWK5hAVpDwmQbdGvPraMr9yLG4BfcqQ95p5pYQkM2ot9q5LztUv4ZgkKYNy9Z7CSKiGAY1fgTcXrZ3om2",
  "key13": "3DFk4nKo7mr5BWN3kkCR5jv15KS3We7W3M8ooxVDtDZLzCPWwAEvQgiZu9WNbqZPGWsvQQujHj5ts8dT1uchPzR4",
  "key14": "3a86nWBxDCEztrJyM8Hvjwg1EqZmbvuq9y6ZStYusTxrkEthNFVhweMpHYkp9FnA7VfSH6SNshzkB9prmaZ7vma3",
  "key15": "2uZjWQ4RxLqEC9e3Z5j3YbzuuyUWGm6nHBHUXMy7aBF7skEDgya4YZwcnJ5pc1PsStEgwukRM76PnyHmXuEFwuvG",
  "key16": "5KiHwNzua9xsbtsGn3iX1ViaiXzQipT2aZaKvuqcpp7jaCY9Ca4b9GgNKCXwxSyJisxGkHJaeCzx6j3AHZHRhRtz",
  "key17": "2N2P9Pe6ZBk8Dx6YoQ2PZvaBYSzKk89o69znzUR2XMka6QFTnVoCHh6E94boXpACGUPfQ81QwKc6YamaX4VJCDdD",
  "key18": "5RpGJMjjF3rWJzDbwKowLgJxdA64qThARhdSMVqaJKGqgcPzds6i1YomARXjWFHpJJUf8B45rMWeXigDWEbik5zk",
  "key19": "2QMy2uRKSTH3UTZ8dNnuG4vW8z6cis33UizaastsDsFuoGTYYX236Fimf9pRQKjppJDfV1CR3nvecaGFwikBJTg3",
  "key20": "3YLx62KrsoKX48HqoL8SFD4zJBdQN31cRVnq974Jxpusj8RG5uPreNd7yM55AwrCSuUEhyHDLUKXN4LDhdwagEvo",
  "key21": "VDUv7upBTuxGJyprFLEju6zcnHaYueJgVDenYXYaNngFiQV3meEAG1ozne6JHhGFhammBPF1DzadDQozN1NuXwP",
  "key22": "4gYZPjvUcrJeXwVsJz2SdA7n9K5uWe9gjZiAZABS5y57VJwNtXJcppzayn5WLG9RSBehnHSShWWRYPagFxHQvX3R",
  "key23": "2cmTWuktTAzeWDKVhgaEBNA4FTYQjzShky7JQWKir8z3BK1SbKiTCBWqcwL3B9km74S3hcJfkvThomGtHbVpVuEF",
  "key24": "4Lu4JF6NukNKQY1ZCtpNd2dDBCdZ4bQBieqNXWGvE6kzbTsAKiwFaKtoMxycjxqXbPvGLwcMSrjbQffudQoyoQiz",
  "key25": "4ahk4WzTK39iT1KRybhNsf9SgBx1vr3ppdk6AQLvv6XU84jNaKPxBEWW29jBXRV6rrQEuThCGuxdDkMVMvoAmMsM",
  "key26": "4t8mquR4Y3GgSovxe5NCYGxLDsSJDAvntJPm9c3wB9GYfnFBwe2YGjknR1TXmJFr9ziKbR5PnJ1HDNt9VGh9W2U9",
  "key27": "22DaangdH3YrQXGvx3oDB3cJUnNwkJu2suSyAa1W3mrFMTLraWp7c2mFEi5xX1B1Nt9a7Lv6rmZ7jLMK9QSGzhNA",
  "key28": "NsYfh5A9Ey1xz79dgH6cqXKkDYmoy6YQRdBbyPhhwGF9YUpAdmvB5bpScVfud8Kpo8Qi7okGCe9HHwdDUHUP7kh",
  "key29": "2wJbKfaAepYQJd9QP1fXUcM1FiFkQy2CAczCL6PJTAZudF1JB36smStZKu8EHDbHeeAnNVUCi53iXA52iM4FPcMd",
  "key30": "f6EVaL4iZYGtHHFYQWnZS5kiB3RSs5WDBC9rwbuwf3VJ4hPmkEqfuZ1ujj7qwk9roCK7jNo4qJEiPk1dMeMzpxu",
  "key31": "67Th3DJUUgHCwvUTjzs7gC5DZgzUjRZEB5AGPDDkQXnKKRp7ZpokNkVRbBfw9nDdXJRr6ijCdJitHDZFpyhggFfT",
  "key32": "g6aKkWJodM8n8djgCLkTU5UWo282mKJwaLJHcgmjmxzKgiUj4D3uE3qgULuFnd6h2DpU839cWcsbL7CBFRiF6Yf",
  "key33": "67RkpZ2KGKA1NN1V6zFCP6Xn6rnXrmaqJ8HHiDyqqqCAP5k6BJQxZuZuAfPwsZBo74up9aty72mH2jaf3svWoi53",
  "key34": "4pB2tdLSm5bC1YvubqSNcv8SrSXKoh55MuoEMtdvEAYYWE5QRGRFNQw8e1CuoouGP9mjpcqLsvkc7aknzcmhQBwe",
  "key35": "5sYpmdUrwR7h5xCvc6XhzHZhW564MfHDQSgr1Bbt2y7afQfUh7B7o9s41qJZQS9UBaMybKS4CJSCctnPZKcLH6nf"
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
