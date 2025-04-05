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
    "yF2Z3o97Viz2wEnfuBnqH9RHzobQN2ZUzWL3Jajf6vPnpkiWoPnBar2K5xfwLLes39tZSzH8bUQgbJ4QWbMw4ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDfuRwz4sa9yJ8UY9fAYTufq2Mo7bgPR5dVRUp4tvVdZMgHmLVu3ir9uzbkb3PiDkRQacmiUUvk9T54SPXXM2R4",
  "key1": "58Z98hV4rJs9rdghdsodrTQfMYtkLTknYkicTQwau1AkoZC1MrdmXTtMXcUa6p795gDTuZGRFiU9Mps1RStZopcf",
  "key2": "2D673PFd5PC3Juu4msYsr28TrxmAgfhTs3JhYnr2CsAj4cxgZA8tJaPFUxfx2MKefcFeGRa3o6qjWdJTfsKkTvB4",
  "key3": "38Hg9GpCPQN1i4qLEsnfzscY2VqcgsQLhSjW4dV31H4wSthMgnbmJ5bLEUr7F2dfpVUADDpU9TJdmNb6u3BS7t2h",
  "key4": "367oac9qt6EXWR6q2UHSTPju12RDDow95LvtQtEYabrZLiKjw6XdfDvZiULE5qhxqVG8GUjEp1rhA7foLoAp9Kxi",
  "key5": "2EULXobMrQa6nujwf171mXAUzcZDM4gku7KukwB93ZzFrXURrYTzWmmJsXVxL7PpejpCCQEpst1H2oMiHAysUGnP",
  "key6": "39yteEVKdZ1tNgQxRehbXcT7APQ1MjyqMPzNwchj1e2Dz29XANHdt4EaE8S71wC4Jn7LU6dtQ14ea1dan45y8qwX",
  "key7": "eLZbq2gRG8VaFDfYwaNKjA93m8Us8G3PLoJST85vcdLkqgoZtrdKiPVg74mjHPRcL9EiiVgypo7iv7DwYrxQiVc",
  "key8": "HgVPBcTm9DtUQyxsXk8FdHTr8se4hUPFo2pLBpWTNt5hjynRFDwRyFuQCSn4V7TRzH43mL8JoX35Fmmz5tHohyA",
  "key9": "QsugkJX6mNyNv5qV3ZgeDtReap2HcTag8aSerR2mJvZ2BvZwnMuzC4d6ZtT4UVao6ba3sTgkXcYS8DDn5cfkigx",
  "key10": "3toubn2QcGwmgkhKJeE3EZ1gnojeXSFR3P73usJDLmqCnReVFks9wgZHCDuQeZJYRCA61wPW8m49KmkdYeHL6pn6",
  "key11": "4H8YrshUjJfzRhwDjWse6a1kczn2AwSqKbkiWTSgtqkqbsWidRyaJfHpoqms3NzAUJ3F6Us3kmWtqd7dnay3FpWW",
  "key12": "4RMeXCH8TVx4pDUytWG5BCYcyMSj1m9ZCMXsaP19qgyXjSFWzuqNs8tX7e3t9umLQ8Jj5Vtpg8Ss183sHNZfUmY9",
  "key13": "37o6EVza2TwkFbVvdzC7gfb5igs7xm5yHAaZV4GgbmX6SqHCJqM4ArUpYBsjwcyxDtPX2h4s8vvV7Shiaup3NNwU",
  "key14": "5RdtPfgD6v6zhQpQNnDoGpuMorUYbHU1y8rDzhka8NCGgaQzrnoQdqdEXShgSfyPN7BAiHtRq9vpu5GoRfvpHnDq",
  "key15": "28hVYt4VnMAfr2yV1Mfwx1aBDTy9edhkfQQKUbDvJD5TrhMqGtCfeFe5d1z65Wmu9vVCepxPNHy6j66t982QDPhp",
  "key16": "26sRogPUzXZtapx3Es3KVxNiPYML984owEj5ApwMZkRq3v5HzG6J3njf6be5Fq3kzhruHgjuVzWSJH26scwRLmt4",
  "key17": "5LfwNBZkTFWWCfFjJw4qULGbuZkPkA1F9gMrYuAD6ukNEFgo4Yckp3ovxuuNY5SfzUqFjVce9iQ7LwdWMwT3yKHJ",
  "key18": "34HMEZWmLKuonmTPajk6nAHLZotdpi5F1NhoXiaLKfeMJYp22UXiNCqPBvLJy819LkwLjijqtjwMKJJM5zCFgVCz",
  "key19": "2tcrE8K8A7NLDYbPn7BZ5JiN3ayWahZEjbSKiAWL3dy7CFq1d5xWNJRfYt5hYTuxxTaXkWE2uGCnEJ7VubKHUjjd",
  "key20": "61oaQ4L1Rzn5bgJLb1gjQYnQGsbYYbLdT8XKfLbvqiZaE5K37qeWhe8zQKuDDMPMFGNcisTrWCTUFZSWzn5zCpNp",
  "key21": "2A1ZcsRwMq4SEN1ievS1G6spUm86mVYXsAj58eYZrQESbRweEs9V7t3kJmFGzkUNGc6YWfAWWkRwdQbf1x36YzYm",
  "key22": "5NzWUQ7JMAvxcUhN1i5xdrACv1UjSzb4iwsvi9H45wS5kj9WhriAVuS9x7w88sCTJ2ELdttCtrZAEguQCjMmxTAH",
  "key23": "2kY4wKSoQLPKD8vpaRZm5Dc2857YY5Ds82ky6XjARVanTq4ZBmXLwW8UPsAhpEDKgCoAAAF5sGQFef58ppPHDtPX",
  "key24": "63Ckm1FjFGePJr6VSusX7pWgV68aEnkRQ6NBWeWRz15WAMxNWwBVGw5PXpR9Z3te3KpW3MhrGEKA5x3WTBCra8zH",
  "key25": "4CqGPmHyu1Pvk7Dy7XdGghAVxHoP2R5wo974Vi54ZSLWn7CDnpcwpFf21gf7AkEgueA4bCWkxcCoWNh4TvVr4mpT",
  "key26": "CYVNjefJPWRpmEkL9QStFDjnRybPnw2MQLJa2TZixeyJTJnNXa19BtbiroesA3T785bXWqfAeveDknGDVpvy4p6",
  "key27": "2SUs2TPPDBesFZaq9dtRSwFXM1JqLwD7ACVYKw1dxjgoQoVkhUCT23sxXvU6wwnWU1XDuA3yvH1qGk55nLAuY98j",
  "key28": "4v8BebjHuchytkESUorGS3Gnxi5dA1h4Zp3EfP7Wnk37KAp9znTZLZfEaoGZsDRBaU4RwB8Rs8DUoworny3Qqw4s",
  "key29": "4K7zWTQjQB5RgEU5hRfDkE29kLPP9r7GKetXVGwvQbZy31vZQjENkgS6A841CdVSiJT2p849X76tq9Hwh1Fpt5mx",
  "key30": "4L3ybZuLZ25Q4pyywzZM48e4G7PNzdCLUyKh6BmjZqtAu7jfgXkBm1z2AQrL5H4PTR1NJzUSkSsAb2BBtbaT7doT",
  "key31": "4KpBURR7gW7PTm6dkTiUim8JoptTeBzPFGgXzWCwPoasmFyoQxtDY82pmbXn6sgSC6DcGTjWAe8NMXzhAgWPuAmv",
  "key32": "nQsxgQgUDFeEjdXx9hjRkDB9gG8gDC3ARPgfcEAH2oTRN9PpmkyFuXZ6BsQUaDiHfDWYYfi3AWtKxSnn4EBr1qL",
  "key33": "3oifFjFKnJKfmzSGaUBgh9wH5diWZtFrtiLiDbhdCUYgyGqDMWqfgXfVyqoq4PAFgUmtzM1ruDX6yAkVUAuKEvN8",
  "key34": "2zhq1bDJ7j1kYRaktWuHtQeezQKJWq5uUFGnyGxjoesKpQmWyFDjF3LQQ3euVr8bGzt3szkwxnJX6q4FdrK57UXt",
  "key35": "471RCmaHtYXmptHzz5AVtMREHehc6SmHGeRng5yNjW3Rz8dZS2HkqdQpb3cS1n3YWRJ69NPwnTMYzaHCJBSJ2KuC",
  "key36": "5vkrLFF8Sk6t4L3jvLmT3KYxJGC8qaFm3FFrH8CkTTrxLAryKT5NVQkXgdbrC2u2y6Mm6rYyTccd4z8cJHQfGP5e",
  "key37": "3qcA75jnX3ncPHad7YfCshitg2dsxo9MWuKCTMQSmm76FcZSpmaNyg7pLrW86GEbejEsxpjvMqncemP5DXE52qEa",
  "key38": "4ywmBfpnmBcDVQXHQzv5xqLpGGF6MaXB3F8hVVdG46Q64EZb6eNqBW4sbRLGimTAEW6rT97p9gvhvC9hR8f73KJB",
  "key39": "5boEQPBLXCHv5eCTqxABD1H6xNmSWy4UPyLwA9PRJZg4ciwu6NKmEBu9FN324HiMAdY7Az4yr34eVzCWLRry8hoE",
  "key40": "3CeLAScWzWRzwLGakoB42QzbNB4u3tCqE6k982oYTC3wb8HDRM1p6X5fSG9aqAkbQn4uTFgALk3z4HGUTaCwyUvd",
  "key41": "57E6gbQDrRYsZkwczWn4UG4AzhjqsYb5KZHgArJmVpajRpaAwiu1zgoAn35ZuAniBuwK9PfA3XJS1NjnCb8ySHfY",
  "key42": "5oJm29WJQbNqiofiNxq3JYDF9HW8mVYdqhbrHxVgXnT7HxBihRzZZG4JyXfRZxceW6PZn1MCxWseA99d5wg9APoP",
  "key43": "63mSRFde8RsVBVPUURmT6c1UfrYFEZrC6o8xdwDd9gUVzYQN4Ym25HUsrw2EAjxkDMUvEhzd3GqavdnPmxJHx3Sm",
  "key44": "45epZnnmJw6PCKrboaa49qYzC7Lti4Gtah4at7trdiv18J7zjX2iH5uR7A2YL1kMjFdTPWmQSfkZDCPLZ8PzcGT3",
  "key45": "5P1QM4QVxwFdXA92U9dhbsskXjM3iH3d3LG33Y77s13rYY3xb7o2rk9Nz6bBpVQhYdFVr5ecsqPprKziz37wcjTZ",
  "key46": "55cNVQjnZcQeJFigVLA4TCBX4hizePjfjPiFyQbnD7frWaFNuunaeVs9Jnpfm9CsCvVHsJFNTta1kMRPVmj2f28x",
  "key47": "27KoRc88mamWGPT2pEc2Evy8CASdsjKoS82HFW3uBe37cnZd5KonDmA78fZsdWBD1LqGESpWMWd2hrkJNZbEJbca",
  "key48": "2i4fM1Yzwj5CNuhMAikSQ2Hbaiq8C7wUVoGbQDcxB7ZvZfg6aWdcXPjHRuCf7gCGxaJ1jdVb342kmYd8SsFZauEs"
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
