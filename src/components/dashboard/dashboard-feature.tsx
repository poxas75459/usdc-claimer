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
    "5zuSvJGnHFm6mevxKrDLpiebmVnqWz6x5pqa9tJNsyYWoooh5RHKad5CNjw7gJ9izweLiEURUiii99zH4mn3ZncE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Tbjdo4Ntvxc9WMGmTcsn4SLzpDp3bhTcGg1qcaGezr7buZaroJmNnojjbXB3BvyQLyD3TKPuFCeo5XTbKRaa1c",
  "key1": "48NE6cSNgaW7sbUJ7nHHvv42YiafHkLsUcXdBmYW3bWiy4rnguFQdY7X9yZtWukmv9wgEpiTa8JUBA8A34WYK9xZ",
  "key2": "58FoJC6MLigXTtJynqKC8U9aaNU6GPLc4LLDxdAcRdxrdE5MnQKSuEF7rFd7iS3Rfsb2Br754d4eLfLJccQ5c9AU",
  "key3": "5x18FajTZJmT3u93oFYjTR4gmaKuAxEoG9KYEcFWQ8NRbk9k3rgVpbtLU1QNtSoVEd9xcZTKobjfHmknJngEztqM",
  "key4": "34VinTShAFmXR9yr368ZxKZkCZ2yj6mE3KQR3qSFdq8KkFgF44s2SiHFuYzyEhpUZKYdxtY3t6L3fsZEbA6dN8w7",
  "key5": "2q5Lr3yQkQpZDyjgwn5yueF7jtW9AwHjknBzBw564mCR6d2TkYrUACXXvB2LEdyFx6Sp69MiDb5x1sBRevZ1nf9M",
  "key6": "3QnS229hY6EzYSby3AYRiwkRDE2gzuH2yWFtFF8u8iC8GCXUiJ66UNhN5C1tZnrkK8tqUurRo7DyX3BBqUk9N7cH",
  "key7": "4RBj957h9r3N6pfnJWTdTsJzuUY7RzGByM1DuXLiMM3wB2r7mt8RJLrr6MQXnbRjhDqyTMupM7mRgyeV74koZzEg",
  "key8": "3DaR7vaHz5sTqNQDnho371jo3uaz6oXR4iCxcp4bSSk5jP6xgxmwNXRarUxJYEdwBACh1of9DykRZCfD7kjd3PoV",
  "key9": "5iw8bysY9v9sboR8hkQvgiNQvsQof7XuwmYQuBFPmodwYV7kSx2FNRxGTUqTdEjFLnR5xrHEKMFN2RHDDcxENrHs",
  "key10": "5xzDXnCCGaG8W63Jm2JqWgLx5KPb5KCQNTp7xEHryCoCEMzmfgvgTwff4tDht1tcYUNo8HjWVAeJhU6A1WCtT7vL",
  "key11": "5YBozZcspdUXVJj5EHzPWaMcYZK7PbYQMypTt3UxBn7j1jQas6EpEiJ3tNhCbaRQvcHVWG6qLzWGebo5vFEQibxk",
  "key12": "yE2WdmgrKpcaF9UZZ3s1rpRCiuzXe9Ng9BJwst8xHNsybMWtJMpxBTUyCoC37YepgP2dRmqX8ZnkxG4dmoBuMrV",
  "key13": "674uSbCaxRsP6CSYhToyrGxhccHVA98X5WDziSCQdEp6yWtpAToDQhPQ2wuZWfBszCDpCavLi1PoHK274mBdRGYh",
  "key14": "4P87mvcHicjD9JJr3XHnuHD9YCFgyEBFBfUxVghWsFuYqG8W8rBCyqJ1AbcB2qKCw5ojbK7UxMHpo2J7JM78znq",
  "key15": "2sSMYgPFzNZqqjGbzWYZVmgvCxrPUYba78N2rVwcmaoZFJJQ9avUkxoYv6CFp4SD8qn7bZUZTGzeffor3rQxp6fj",
  "key16": "zKxgxaXyNmGSLaXtz2UYDG6qCLFnPkmzrSUd6Kv9HC1XBvpomWqd7r6iuZPDZXCuJ9KW7WLUFLULjfCYt7wwsVR",
  "key17": "2ou8t3fQMFRaALLo8gR7vipxTPfV2ZDBBuvTcTBMgp7SL82jyGGvHpyqaTqT1TTf1NQodiuqbRSJeJFh96xWjfRY",
  "key18": "2vs1dJery1iCSVXXUdRn2s7NJGhkbYX3VMr2qo3BPhpCirGaTww3kaoyihakr18YazrdQ17FRXZbLat5TgPdSpAZ",
  "key19": "2jFGr1PDRJ8MYac7u1y3ajhcTG3yVHiHcWnzCL5UctnvUkmvzfB4GBZBAkuMd3w4J9FrvbgWex5dQGoWGwT2SXSd",
  "key20": "2BmhQvi7BsCxsWJA8ZxahEM46JxQTMdJssQFMnt6LS1DgJGD2KHYMkJNMcfbhdBCe4fAKihF9qA46Y57YKvf4Cxb",
  "key21": "7Fw5WNxCvt6drKu9kTZhtQ9vK1hUCwCKhrgYMJedeXNQE36uZAXbDdSZmveofLdj2uBJQo1TE9LzkwugmTTmxDs",
  "key22": "qfALwdh6vGDqWWb9KxTS7p3awfB5cRHnURbxtMYfFh3dafr1FGP37YmNKd46847HuZN7E4xjh58oEJaybk2srpu",
  "key23": "59mheDsgBxYJ7WYHegoY6giPfafzdXXB71z6JYPM3kbnP49ACV8Fndjjyqpv813XV4ArzuwdAXJ2GMxAAZTSH5BB",
  "key24": "3MnKpwtShHTj2jv7fykuAnNYCT5UxkNHSMsTPBZRQgkPHUD8Zz2SzjGjXW7t9A2Mj1kcSkM8JjhvCBKK7oDnfpaP",
  "key25": "66C5PrbGZoaCkrFHxhufBXwEXFvssGvaHydGqBXnKpDiH8eXYLE4b68Jcz2AiZ4UMNmZUUM5nxgUcpUwsnESiMiN",
  "key26": "3AnA7vD41xop6R9wEqj8rRGwJCjgLhWE8WNzjYFD2Zw1Uaj71L3FJ8tukPwtPrB3taCQ32vUAHSVhHrUCbG9HoQm",
  "key27": "3bzVJQheZYv7sabCr5Pw1PZXQRWBLJufagdoxao6GX2VrPpvapzGx15yr4oAPCtu2LTbavjRkvuVgVbPHdNUmWsC",
  "key28": "4xJgihzpnwhKwHc1N77nX3HaYGu9mRjr81ooxQJyAoUhb4fRZsv2y3UGCWLhqWumxyw9zZxZQFqRKJeTR8eVgGk1",
  "key29": "5Qi7zw7cuWy1FPopNWBZ8H5aBU4PK2M4gMjjqF1Dv5Gwx9opwXoBToEn1WLHoGhSCAhXLzW1Yu45vs5Td2Y1cP5T",
  "key30": "F227gx6hZN9gQwW9peWekSGuWot8X6hL31sjfKHKkyAh9vXpFrcVL5YJz9NJoRmn7Zocgy7beTNgxjKMQvTTm3H",
  "key31": "zAqvqqVLxvQbrCDrnsL5bVW38mQhnygKgGi4fgJkgZAAgznt2KJK3WYmFLLdTf9mV87ZWLVzCmuwNJste3K74hL",
  "key32": "3Pjt7J8qAijeRmaeCGUqMi3RcaEq8wsYGqRJn85f2XPPmNBrve2a2v8cmxrhNyFGBqfafwV3zThX4sTNTUsW1deJ",
  "key33": "3b6cZU9VVe8qaC6drGXkXq7iksQ43fuYMZFJmbsRfgp9nTqgCKBuKyVb45HL1qxTtkWEQTUTY7Fhfg5frtNcxFaP",
  "key34": "3BL3BxwvzN3sppFU18S64ovxAE2wtqf7JBmmx2gVNhNVXL75nHWyET7o2QnDPdMumJhCj75Fn6EhDLbSZXUXWXP2",
  "key35": "4AU3VDpmiMjCVQ7GP3NgHCidXWyUAJ3D1aAGcNGVRtvcLEznghBNVTTKZoVS5Ya8yei2njRZewkiWKgzZroLawaG",
  "key36": "2ZHnDs5BdyQkaNMXG6iV1HZUiSN3nrfxXhdzWNeJghK9iQdb5BXiawAxUy66vkS6s7qAnrkdPykK66zG9t8qDri3",
  "key37": "2mtivcVTMjvZ89LAQpbtSDj3Gdr7MASr2sajsAicKzNVjovgedeYxkm2fHAKw9GfS3Tmd9jPQ824LQ5XG1KphvGc",
  "key38": "k1buWJrEhzmZdViwdab8RJ7gwafes88PLAJ9EVG6MCSoRNRunTVc5fLsnXsHsG1WhnuJ1KyjmGPJ9QpfDvALQpR"
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
