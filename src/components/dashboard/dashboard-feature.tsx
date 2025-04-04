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
    "2iWELw5LUUzxbXQiCgokTBtscj4AwQopJ7Z8cKVaT1HfLkAovME3aTvMYAf95vpP1CusmkcZxU743c28rH6F4Q6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhvccZtUXZRTub8Xa4xbTPVH1C2x6UZzMWxopje89x799wvA22H2shGysb5Kb9ogLxBeK54nVhM15kb2WWGEZzm",
  "key1": "4aPJxUHwxU1ZpaqrGtX3hEd6Su62pE1yBDbtrU4gRBuoVfRXhsPHqEufGKPcaV4urdy4CNGZXQR2Abn7i3CjJ1r6",
  "key2": "XMfDWULvhW5mi2ACWiz9PuG2MdMtwSVefXWJs6YJ6BDZZSRSs1f2XvRLYQAzmVGiDXA89VNo9hudy67zoi24VWp",
  "key3": "5U9EQ4DHPMzYJzQfBCJUgqw9i2dpcFvGrbvmYsuJLu1St8JNNixRZHBKR5HYiyVkMVezEf5C3HC6DsBZYYKwKRKE",
  "key4": "5AoaAV2dQq5vYZkKGJrsNVySFW39Fk2g3iPmhXnKzbuNdQerLHGDTswFin3TCv4kTUpcKZsyZ7KhtxzjfGXNCAmu",
  "key5": "3w5fvj7JTEbwdjZUwrrGYduM1Dv44KdSJ5W3bedHqLr2n27o6zUknHbF87ko1EkX6MjhGKwbig8thjjwbD3D9rf4",
  "key6": "4en3Vwi6hJQybMYYHe4ZPVDDM9EkiJnHind1jcRXWotgHg4jM1EWZTYVH4cBmmgRLburVY4VQXA7d454njs4KkP6",
  "key7": "4FiqobHsGz3BMYMbzgPJNgE2NjKfQgwRGTrdzpn8dg4eyZUKVghqm1wxrDoPGkjTcrFP6uz7Z8zfyYNbyPAaNTbk",
  "key8": "341ZTmrQDjTuvguKVem725TKiiJGMJzcDnn6HaMXfZubTDBjNNfu88eWH7Nh1naNvtLsoGzMXvxCeF7VPD9gd1DQ",
  "key9": "4KsYR1iaygrL4gmnt8YC5PJXZSbu7MX17ooWTZp82tR755kCehbhnxNFJ4rJoaiqkHZwHwvT5RZz1YYjWL7Htc4W",
  "key10": "4cJwjQrMJmGH492xsQYRS6nfd1zWuxtcBnwdT3ivnDKvaxeQtKCAFYNHWwGMcbxPJxw6hgJfUE6SiJ8CfHiq3EGn",
  "key11": "3kG7nzT4Wn8U4BEiNzxP7XSEHR4eNX1ZiPptWUbLb54Zs8afJsFug7uUZa65JTBE8ukKeGozH2J2x3Ktw9FzKZQk",
  "key12": "3divssC2McNxmJdEEfP4npxHo4WWKrjTJTrZF56jXRPgxMpE7vqXLYcSEPkNefhaSGcn57nxDyLZ4Bv6GesQWit5",
  "key13": "5hdDkoFxUip8s1D8i7iKXDJRDkKWxk4K4xBRNBhR7HwcDpU5ZNqqh4bMBQoMuEk3JGycoYdoiqfM3hvp3camNxVL",
  "key14": "DB4aCpDwyi1hScycVYRwgckakDRgPTs3ZdhT6TWajPWFmKvPJrfVZypNV56TX4yo4RugxamwJiTXXTEpM6JLav1",
  "key15": "52d7zbiCMgY7bZRnv7tpZ1qPvBVmXQt1sCYnyLZXsmiQf5XMFgasssMWAMtGAHiCWyCxiYwVBmSatH6W7u3eeis",
  "key16": "2uuqm5HqTPtNLHJNNtErxTQ8HMg4wHXXyg5YqzquHDkTeAgg8q7BREL4GASgMqajCD3tquxy5f8KVU458canzbFA",
  "key17": "51EXN1VvrEK9NT1qrZXZkEHqbvhcC2JnAGTSTLbRyCEfisnbKA5M2nv25yaZPCKKq5LBVFd3KeuxRL7BtfmuZy65",
  "key18": "5qfUg9B5cciTGonpJzD3ougo2GwQCxD3yVtYRkbwK1KHeG6uWgM9BUYnfDGPL7ZmVHtRtqrVXWMn3wY7u5vRHcst",
  "key19": "ozoEEYnik9AzYPc1QfEvynyW1wWyRk3BZyVAgQgzkHG4m1vp68o9Aq2LbysTnah2cEr2Q1gETWWKfDQqGexBsET",
  "key20": "5Bnt2zEKDVvgEDmGuhKRLR8LHyADVDixbXwtHW6AKmoruXuco1BUt5TUKWZu1CmjXTyF1X2fxMAxYcY4Z5ADfGyq",
  "key21": "4xx5bkFAYtxccy9MYChkJXBQstnquMFhNGY8bfCJu8tNhjyUhPQy2sAGyiXhV3fgWFqkagEdHYEKMHvc5LeSTuUm",
  "key22": "YL2KsuujRAXMxmvcGjbn41KZMFFKJhReZg3WBt46f743qiCnYLqW5inQoEuZeH2Wq24o2DA7Pvy9YYxZpui3NE5",
  "key23": "iwWUzf5RnLyr42mdq9xEybBepMdJRcjpDePYL7XwxUH3Cp7Zmy4amrsiQ9hRmitzj5Ezb7KoToTXJmxJEond6qG",
  "key24": "4pM7voJaPfNeLEKN8Z4cS91tR2LAEFLBKRCLwUTkyJKkrUkQCQaJDFUZNhDvkhja6z2LAeo4Uaokm5fgobfBn3FV",
  "key25": "gYNqC18XCmxNSrnTGGGsRDbd4PbYNLe8dAS7dP72ADEsAPM8gjf6AdFJBcv3QBRjEockM3o1EW4PZzhiTc8c8eG",
  "key26": "23zUHSbQshSh13qfXzzFw6KT2mMn4PPYprMpDR4satxwuAVP4wsoiL3JXCqRnFhGvxYzEJSB4a4DsY1tkRUv81A6",
  "key27": "wFzVwhSak2yRPzyWzofL9jCM52pCs2xqM2tDtr9vZg3LcGSgCkJVNHTuJRkS68p6bK31ysJFpyBEzDaPfRN9XoG",
  "key28": "vxybEGrf4qvkRqWjgKE34RxqMNchTmgcSw2hoQs99HDBk5MEh2spYfd8owaviQH3Su4W7QUXD52e31zPuzAMdc5",
  "key29": "5vNDD8s3o2K1b7zYhWHfU7uvQ2ydHHE92pPXHNGFpzDYmnBG6WR6JzVj4Jh325w6qm8U7Z5AwgXv5niRKC2pFyn9",
  "key30": "3Vw3mqtkSkuL2preo6nZTyn4E67HmZtyf47a8wF1goBx7mpYe454AwACTyQF65YpKJKrh18gPo1cEFtqZ2R7hc2o",
  "key31": "W6SM1ZvgHXeGjtb7ndEKeXAUKtnKFR2NxR65nESVffQa3ArwgLzDkYdfS8HtTwSsP3nXqojMUpc9T7HSGPgCATJ",
  "key32": "31Kwed8qXPxfJqMrSjt6uBeebSoAYmRQCyp9qNTU3vbJo7L8rbJUS9UeCfwqQkBN6MRRAjoa3rR6kz44cm3s1nnk",
  "key33": "4YkjnvWJ9PW3XN7VgwsPfD7yXWaZCpoAuqqhtLi9Cre5xinw3QpmJCH1xngZtb9EhZGQZqRFTtdpgbzrEtQasGgd",
  "key34": "5SEex4vnyJfauZu8bBjKcwfc7ZFtDA9kELVg5CxLaVAjoMAC8uif8VHVK3KVeXupWFguXe3iPiFo4J2HmjVzxsk8",
  "key35": "bzGoesGDJ629WSApGsSXRM6fFPUC3enXVQzQcbi1pxu3TSsqhnYrTMBtRb5saQPvYywDyD8UsmjSWHWd5qbP8gj",
  "key36": "3gTY8jBADiuu1M4kKbmoSydhrnhB3CjdHxcLa1YdhnxaguAKzjDA2WMbPRZNeHChHMnsJBRLwRaoihyNTVfWWH3S"
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
