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
    "2Y525o8QJrZV7huF1cvaLgFdidy7K7yZJCbX19ZAXhdz88UYk4YiC5cKZbPszXwAACtuv6S2VS14tJPAatFFiqJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41L49TtGgY1omtzMdNGwScYEsbSL5tqPWhum26X32RRcJcvTDD5b7s47MEefg4ChTYN7qcY9s4BiMVNXdGepgYo1",
  "key1": "dis2JUuRPJep8cgydKpTVG2vEttZPGKs9QYXckCuYLfPvUnWzmroJpgpQAeDG5PWQr748bk6FRcSkpZDZ4e8RNk",
  "key2": "5B7ffhjw2Cguq3yiaz2XgM49X8CDd1iTswNu7K5PFBUZYi3dozC2GJSaBLApK9MjCDRwLRYhC5jcvS3rY4RCEpjr",
  "key3": "2qdSqft81w99sJ5vpssHXUFhBHTfca7C6Q8jTsc5S6FjgnPaJzT9ayj3u5JjRg18qj6N3FqQzJjf3J2iBefe9PXa",
  "key4": "4zhymVHz4EsvtbjXvDFYgMyLJUT5Y3oezvUHzLiZxJtzsg1yjRb7tyg2xBxVnczrBXTFW3WAVHd6X7nj2TsjzFKh",
  "key5": "2ru8popuJfzy9CvHgLYmGtMGwKga9CdMmSTKbFV7pHq2MyhcMgNj1XhUKPTZAht2T6EfHy9zWiRUkaYQkHPngsRu",
  "key6": "4Pi5D1FTGidwzEt7tAaYzMt8EXeLxWqMVjpKuAwh7pvRp9edceKE4dRmGJ5p2WNzzRAUnBS6QrS2bvKHGghWgZbz",
  "key7": "4Lzdc2r84eC4xpUCqwtJqsubESdDMZtj3jhr431it1piHeNw78w8HynhmunGvxYHYia12MgXXAHVWYtRBmb2N97Y",
  "key8": "4ArTbJUua7rZrGt7xsJWrnvsBzpfACNhBTupE8XQSotFmsDQMag1CLC1zZsbvi8MhY43fF66iGjyL4qnpXWAHsYp",
  "key9": "51sCdnEUCfGvjYhiNiTq8JovTkmge3MdzLfAbg5xKLnFQNyNiLMbUvG3tRgSJDnY6sSuqkEHLNbVMYsDcafi9jQj",
  "key10": "43ZmBUW74h1HCF4hmjxAkM7THZU2BaNK4iM4VUyXMQd4RDK6i3vZmPR4yLcFJjuyNoDir9hC5qSCb4h2PzDXQDL8",
  "key11": "2AUD76xLQhFeCKyLWson76Kce9ykiGfJYFmJDkBLHfUBDNBmkCY7nh3WsbQdscmQ9SZAGpzqXhh5qiqPgCgQQvtQ",
  "key12": "5i5jXBwBdENPbkEBUhoRfNo7V5E5xD8cFJVUmpqMvC3twf97RDQPyUQ4VcwKc8ZTXB9819DR723mCjzcYKGcsKsC",
  "key13": "hFVJ4hwgMPXm4VwXhTzWUM8RRQwLn95dzAcT6u3QxzeyShyiJaao4EK6Jk49z2wdZystBh85YFvbn8j1KBUFL4a",
  "key14": "4tSG3XfPYEsU5zifs58smhRrXsGzrffiyEjt8zw2o6HBjLWejN2wQQjcCYw7fPLYt1Faj6gfCKvEk1VM5WW4mmwv",
  "key15": "K2zAfR1muVAaFeM82UYi1Ph4Ngx1bTB1xpuFFWyWdShnHGpRwXhW5ipAKis6V7iXKgXdg6g4Af6F6mhLEQ6KQrQ",
  "key16": "2LUEqRKQRnyvArzZsnCM6bBme1GaJ1MGDtYDU2okJddiPyR51Kdan6hcUnKqZqSTE2vZQ6bV4hFNj24T7s9Fq6n2",
  "key17": "4wiXTBN3s6DsajkrjcuUKECTBLJPNybgAP3ZyAnMf2vnmF8TzncfpViUTYuSSBCEmXaKFnYRZgSBL79Ke8Uczif9",
  "key18": "3nUARdL59DaV5zcqmpR8ZcjEKrc4Ab3xdwHqw8phV8XuyKdumia7GLK3Tp1vtyFNxkZmUVcwXvweMeMQJNmq2ZEN",
  "key19": "33JAK3dXTvgkctV6AwuuG3VmZzWf4ErqZJwsgqmj4oHCccYTxCCsd79KB8FDeDYYePEr9Ex722MXScz6onRSEfyz",
  "key20": "3bXs2NXPuwPr29594KYLCRYcUWstaeF5YEzfie7GBr8f6doV7eLzwbgyecWw4Do4wHbnaxA9NianxXyVE3AzdNWN",
  "key21": "4YQaWJmBaV7tYKk34b4CLodggNq8nMUMcXhrcYRV77CjZeQp9Gr9TKqQG5UF8Hh33qyqep85isjXkx5MbJYSm49V",
  "key22": "2aErT2mV73JQwp2vGXRZ8otdoYdsxm5JBZeRUDfxoNEXdPw4dpLopXs2PP149cg8WNrF2Tg3nP92iJAfuQkdbJFy",
  "key23": "42SccZH7Q8viATSGPbBwC1UR7BQNWHXQ4gc3wwTiG4vWRBeaH8yvLGAoUUcHBZHAxPXaNKdNA7an5s2Gv6vU5cjf",
  "key24": "2KcRk8SLVLgAoHqx6LiVfFJ2aWVJSBaYKEPsvR7ZwuUTgPXrdtzo9wWsXFM33HccxTUcTP4L8jm2nNs5whSLKnDW",
  "key25": "4CbqHSUkmdiLjuW724hBbvLyDXuSBTQeiZJHRkRjr6gzE1TB4A1x6eN3siWiU1HZ94cQf4ir8jAq5bxjiR9TFGaF",
  "key26": "52nXf4CjvbiKeK2Ca2gLbLMmNNYgCPkzJunShmK1wmFv4wQV2KFP72QLFB5EUGHrxwypHfU4E34AYJyS2vhUdKhz",
  "key27": "Aps49uv1QaHQGxC5tpAnA1w1FV6oo8MERQuDk4Ezwcb9TC3KMBayNDjYoNqqGGFMpSWADgsJqYKMysLz7AVYfYi",
  "key28": "5tGEkSUvb6T4UCd6Rhvx6oL2FpbWjwUAxL8kJjTyPbGFVeN2ogDSockUwtpz5RHMxMwB3edSbCV3MEBCaKsgMEA",
  "key29": "GVCmiU5NvzH8rLKMPdUTBWn2CbkXUqoR3rDoLvVZofm3iaU8BX8VR411Faf9A5GL3gG34wL62F3koEePoWNWHuQ",
  "key30": "3sBaWSti1dwJE2w4EtdzhvKyT4qho8SqVj16MkVrcj1M378bkw1jqrCq8jzXEKeDoQthqVk4yrVnoSnKfa6VSVyY",
  "key31": "34vbHCgjwxXfvnfkZb1oZAd9zHpGv5XQni3Jc8nzu6whYRcEHZPVTekCdXjxNF4gqRJ7b6PG96Rpo7wnujNcFXiJ",
  "key32": "4kTkqnTaXHM5FvXuXmdVCMHKw5BX3scPk5s4xXXbLUG5r5XHrq5MHGtN4zM6qakq4ZQLwsr2CRw4HZz7d5ZvMWjo"
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
