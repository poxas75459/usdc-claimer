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
    "5Np35T8yTPZ3HL1AwGW16PLSHsuMETtCFQF6uyDd21MQokFvjTubTmMofLf24Sfm7Hp1XSij3ApBvqDXHDZxqGGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aa84gzUHXQs9n9Z2Qbsahtc2sgeEAXAeGbSbZhM7pqKbWKh3sNUnKvundfikRUWKmyJbSf3TiqAxLTmh2JP1ZTP",
  "key1": "5PmfFaPcobnysWvCNqfoipxMkgFkuHNgVeVqT1sVc9WjatvXzVeJrdZu4NiYYjwu2KAYkwXDA7mxa9FZJwgLAZWQ",
  "key2": "3AWsFnZTZCseDWc9GL16DzSYiQtxpqL7PhCk9z9rqBu3PodZbA84ap9Z8uRYSy7wcCi6PAYt5Byo1Xhm9QqtYa7m",
  "key3": "5oCndCRoJ1ZgFXSPr32xeYn5Fa6e1qvXNShn9ZhNTGSSfL8GauzxJZCf5WfhJBuBmhFpYQyQ2SQVmLj5xBbkYxDq",
  "key4": "4bw5okaxtyj6YNPQNGX3meaJejztAJS2Z8DN6AcTngLSYUDHpQbF4AePUUrjLrwSc3meyKYDvMo44Q28Sv5DSDtt",
  "key5": "4p4seQWQGVuLQssx5VZxUrs4JH6i6qaTaa6c6mddnJmh67hSFfNMs1etMMahCUB3kZdM4EAbA3dZufSb4nzFvrqM",
  "key6": "2CX2ozQNpzMYFgZZXMVbG5rBaSwtTNEKGYmo46MCjrbYzEfv5oLJckd9iavN6mL4thfE63s8WdWPk3Mx1vGJo6AL",
  "key7": "3TgxVo2d4dzfN3ckL7CTTQhVsT2bf94GcfEb4kvbGxMjZmZRbhNTDhL3XEXWNANwrw77pSx25g9R16nQmqwkuD3B",
  "key8": "3NiurBdhvW2HpCQ8dvN3N9sF6RvkrnsadSMs8hZb9zXQVyqw9dLQohVMwPNMt6N1QeXS12VsrcG7ip1Gy3bUhR5c",
  "key9": "3vA5TaWcGSooxLDWDFwYNoNDWgDcizfQbAFmdPwZFnmHEEDRRzwuHgz8g5QdTboHwEdHTog8TaFYk1P3EtS7vEbZ",
  "key10": "2zZPpPwrKo5jVoJSRwtGMoU8mtFFcdh9pZ66JS3KqziL15CjvHMo2z4RePxercTiaKxHpWCK8HUCxWZGRokibfws",
  "key11": "5ryudRE4Y2pAafutESpb1EcvVZcrUZqLc1F5sFZvJq8LEJyPweefoNwmHbk7E3UPkdz1naWDqHVFtNF3QFC7RXwN",
  "key12": "jQqmc1avTXVpNoWQW4QC6vKPTn3tztDYuL5RcwdBF9QA1xusuzoQzC5AxpwYEtVXaJD3ftjKPxncPe4gfmN2QtT",
  "key13": "5EhgzYJ6Y567yuNoSe9kfjnQEmQpCyZVdGUyQQMqioBD6muCzRigRXQKoq1EUjJu9xvywYdvgirWWi7Q9KE8QLBu",
  "key14": "61yAW7Rh7nRuThUt3j8LQj3WPaMFUZCWP4BrMPTrcuTyRt2huukcn6PnwQCjrz2X2pAKi2y47GDfgKUK6k5cRGHE",
  "key15": "y8ejV7EvnxrGsLE3N7sEGajnroQ9ogiMLMdp3aeeUKDqrizYrXuTag6n4FqH2J32e9QyJq2fjVtu6E6pJf21CTH",
  "key16": "3U8gfLuXw5RxKTMRJMig9MaPKyN5bT9BeHBWcJ6MMSK21hMdm5WtmHWGqCz1Gb88fMTz5xoReBV5YkyrYHYVF4Mz",
  "key17": "2zS73C7iGXAGrdx5s9VVcZNSWzuqKCChK1ugCbeUQHyt1HWJjn6ntBedP4yi9fPcxFepJoeHBTrNAEmZC7RjwuCP",
  "key18": "3QiMwkGYBpchZirmptwDWLnTJnf65wn3Q6kP8Q8NR95wSCXZGdnGXnMLGoSxy5pngvKBDDWhqhzNozQQgvxGjUqa",
  "key19": "3tkig8dhV6P6XwDtQLyJF5grqpj6KKrai6QzprrhEYfwPMUc5nwPmgGqy89oHY872wxAfC9dSyotFEJiy7q7yH8o",
  "key20": "3reW1LueSSNFpZw4CwrU36yeWFQHndv7C9hphUep6V6gxZLEJZCVJcarLcumi5PUkBEYPS7Ukv34yML4wzEcnd5d",
  "key21": "5yTD4LiTAwdwqLLNFWg1GyM2uRqev1WNZQJEbk4JA7A4wy1LxPFqqkPzWQqcd8ZXjpFSp33Z7XzQd6m4NziUUtg8",
  "key22": "3WsUGRZjXx3nSXR8AB35K311NCMTaG6kEsLw7TZt2hyE1TQYEtKWaHTVFeg2D2YKAvF95Rjyn21rip2rrtqD79MM",
  "key23": "3vRsYMbvo5Fed8aCAvyCQ3Zd2yUwc9PygTuVJvqUrYShf29QVjN4rBRS3okj3Num42ut93DE3xvTu7VbDt1hqs1z",
  "key24": "2Fq7mNWmx5FE7egVqJN8Epiw84HPozhAa116WEtQzMiZZjuQR3mQCGF5oh41qydMAgszXLaf8yV7Ugi3jnf6FKbr",
  "key25": "StZAHCWjQmxMzsC6A6YMKB89G9nr6JwRdV2ALC7q828KURV7o1C9Dsth9oQ4RceGgGftVUGFbhsYezwH2iVeY86",
  "key26": "3CbD4DuSdUvHMERpGEWFXdJBVZigT6N6kiNNDiB78EKpuKJ2jUBEKjAyJyw3iiE8sifPADa4AovhsJojQVuTtTzH",
  "key27": "nn7yeJ8SqhqiJ2YGPWdekSbypRNoMBf4VzWwJBbzJkgas9s9kKsa9mdfVctKHVvfd7C79yPzBg3AQv2nz1nVsdB",
  "key28": "bQ7drRx1ytaP596fM1HWnL2xP15W4AyGnXPGzUBpEJaWLhNXrohB7DvtfXquQn8P4yasbkRFURkpTS6H7G1yjzo",
  "key29": "2xQV2sPXx7dHtZocLKDMcbib37EjqQWovLbfgqy2SZnruXbxCkCz3Yb7e6zYPQHQWPTx2scbYg5ebE917KFFDmPE",
  "key30": "4f8eDk5TSiQsTD4yBm3ENpdkgZ4zFTpaNxXxApenDXQzWzsTeXoQRCgc5rUvtDgT8Se1Q123JQQNaqn26mf9XXMQ",
  "key31": "3evBTHNE8WzhHm9sZH5A9YaQTvJm6F57qTMsH1FDe6sShRrRxCMwxejmQzYukqiqw2SDgR4YCgYRXZj4nB26qxTm"
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
