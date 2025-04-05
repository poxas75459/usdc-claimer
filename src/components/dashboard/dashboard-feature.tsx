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
    "2uLKek1Lkz1QVVBpBy8kMouhimbkfvH4iqngfJFkCf3uLGmoFM1VZ1B2zGVTXRHxavmChBjbEmidLFe1EEhjzEff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJk1tEKoX1qKzCskZWCu4dsjS6rfCVp8nJQDQHhttwyVW8m32sQqwFeBZjvBCcrLHBHkEVFi4a4jLRhzbt9RHVf",
  "key1": "4t5BBxTZHrk3KT5GvBsDWwo8qiRRxPwSsZR6EcQBpNZcmLPPAqjBtjdi6eZgjpfzixPsQ1ghdhC9RdoTUqDXFP9p",
  "key2": "48RNZQ5Zq98NR35TAcNaqVW8FEkYgTZF5qXuyeNbfTQCVH1sq7zDGSRXPGiAdmmtskXT9By4MzTN9m2mpjJVK5i1",
  "key3": "4MdUKB4xWV5YfFZy1DuQAzvF64xxxCkFRDqx6upjjHRQoG76nR7UApe3ouSRZpgCC7MERWHeKbYHDYkBznviWvSC",
  "key4": "4PUPoLtBtXCDtNYRCVBvMSe1hM2PmoqmPNujxtMC4i7iCfxHePEsPs3Aqi1rD21zuiD1msy3YXhDTrUur7LanUax",
  "key5": "63GR8AmMndGzaUWLYYz1wwRbuzetjmx54PzE7RfEvDYrtdwYbJUUHb8maUEvUmqXaCLyDgQJYL5mgGBMiAYY8zHm",
  "key6": "4ZPrAixfYsKSpX46wUgTtocfeJLC9CRaafhx3M9KXD6hMag1ZFWGkcnegPCBD4rhS3Eaz6VGJB2CQeFMW5aW5v6M",
  "key7": "4SXY5YD5k1i4gyMDKkYTkYhXbhprpuG6DrCXQcLGAqyLeczyKrGdLeWmaC6G1uWkemMhDZZ2PQesHXLURTbJhpni",
  "key8": "39k3uGPe4Mb18nvashMgc71ixJxrzBMKWAG9xYpZiTWdNGsEZQZQ61JinGbkpGcVWcAymVkib5MMVyzwJ2t2k9Tt",
  "key9": "4RFRVBQZPDvxEn8SXyCMeiC53nQRR3vW1NCLFhVX6pmcjd7cNdKw2jqzHqmfz3PXPEYzUMr4pCe53dReDyo8YG6A",
  "key10": "43wjAyCN6a8BEfYQaAS7BNoGFhTSSQ2bPbeVeXZiSHX1b6WmVSC72XA6U4tyCZY34EBTQZec27JD25ja4AZtkHzH",
  "key11": "8bFN5venxQMKYaPQUJFSWZu8LRk2bQZo1ZDYzrcs1C1wvUFP7CwJxXEpYbMJ58mUyrP7MHJYsNSRZ4UjqsdDyTR",
  "key12": "2WKaJzXbVmeJd3ubNv7iL6y2MG6Pk8M3D91DywKGEr9R5wpYU3YVF1rssyPmYRxKjNFF8Qtezosm3NGT8HAPULNM",
  "key13": "39Tgm9tua5DhTeo5wCHkmu6qAcPYqn6mNgtujPk41Tcjxe2VG3o6xjCtHs9cNJGstp9wbQpBaHT5KmYqkkh3PsCo",
  "key14": "24gnQwvvTf8KfY3zPsc3EG8g7j7pEqJcRvvahLXdVNv1DgEiRN8s9dppYFLNzMY2g31eJJg7fG32uyw6pa9nGJ1u",
  "key15": "4GXFYbqZDSMUDeW5z6NvN7UaDivRsLXSo5TbeWJW38FPgVbpHuUMfGfAa4UuDbFiNs9wvxBzk2fNAN6UXpudGyGT",
  "key16": "21AciFqiQEdy5raBsYNpotiqsBKQWCY2mxJeaSXA7hAReGjFFYzdeUDytpeowNPCRb5wEYectpGf6dRKdHYiA8vx",
  "key17": "4JuicrTgSvv4DRzdxhxktb9SNicsiEjJ1wZMNvbeEVNYUSoHvekyAGA9JFc5eWkQjqA7xTR4TMemfvjn5BgrMJWA",
  "key18": "b66ShxAtEcFJJ61YFurjP8NovhqFb8CQodUrbmXb1bHQUgPjbK7bJgQVGgbrTYTS6VKYyXh68crGtnE2yHEGgEm",
  "key19": "fW4kGwvuFyGW7t8JuYV5xxZD6LNkeKwzjbYx1U6A67JWxXhnCDhsQH51uWui6VEsXCDKAoKgmvoAHsxZJFnR1z1",
  "key20": "5G7XurHXALj7ohEeySK3e4KtU5DQo1byVLiHuMjCrxRCGfCUWD93Xxh4yMutFGauLaf3H5nVuDFirtYGH4xdq8eC",
  "key21": "5S213cV3teKbVfuhzpfT2ByK5H5kStisD6EY21SoUNGuVtF7vnbefWFKMb6HJu1JHzL7nW2XUu4VPvRNDw23K4Qz",
  "key22": "2oGjrANszJK26cmzW37c3K1H5j3dgtqEzfuT1RDK5DW9naF4Et3GjV5iSzZmJMg9WmYfiby6W7TvWzKvoRZ5nD5c",
  "key23": "4T3N4nK4NvMrin5EfqusjFe5itDHsh5Q1N8i6Qw8AA3CCkrktzrnKrJbbFQB6J1cGVmRqb8vTsgXMgtNmgyz2uDw",
  "key24": "fzaA3A8L9ePX8oCcR7dvNeKYdUJQ1DHdwP2QS2AEoCpTNAWCxytHaXCN2dHqUTssRTLvoojbqY6BKE5jr7w87td",
  "key25": "5UeVSWzdu3Tazoziu8owyLHJw2QQ7DdFgM1qvoAoXFvU9LE3QTKBFnBb8ghgthfSmXkvxgDyqaJEGPgNSyGgmCrA",
  "key26": "4PBhm1xLikFoNcKhnFwPV3RvKhFUCQa2Kkwu6jiwfuh8vfQAhX4zCTyUWYF5yXxhyGDsZzbciM16Vz6Ar7baEGeT",
  "key27": "8i2R67s4MwRZG6GUs3cwDTxHap8B5Gkx3N72DG798WLHXnaHjwECGbuHduYuQYW4QydWqNiB621bbpae2NQqysy",
  "key28": "43J52sMcdvZuBJAGgUAgvEhQYKkuJHmmdQGaQr2bpqFo7jy4jeMa8mwnPWpAh4C1tZuMgfUKpopvKpBmiTnMVRWx",
  "key29": "2mnLpxcaN3dq3kRNxZrJNTZcPhmxB8owM85jmLRTfsRNaHrHQ3i1wuZAZ9wWwb2Rqfk1hXqyCAKw1ECxEA5th3Mp",
  "key30": "3KbUujL3qYTDkF2TUycxCurQpigqBBBHFjwPS1ZBV5oGyV1WKo17SLeWdL3GehBfv4NGTsSo4kruoN4gCbgZttcd",
  "key31": "2NxJ5rjL9fecBMXTTwxGC8xh49i1RqQc7EHa2WiTiaRMGTLUCkf64inbBjRhBfyAWEPWawbwuooP5J4EiBZNUjQv",
  "key32": "2e7DrDUf8XUNNXoMCjWHgFfkgBCjJ3jrmRX1hBsAFQyjFHdfkQWS1oL6qpxVTT1ZUZrTFvX8gvCaDkm3VtmxVRew",
  "key33": "2o14wbuUMZhjNTu2tTxMgbj7w2UZykJ67u8y3ViX4ApfQx4zdpYdCjHj9atCQQA34fVWMpyR7KGoc4rcnPos1dAT",
  "key34": "4K4Db8Az4BUEy5SV17a5Yuj82A8F7jYyQNG36TQhuWZvLSKiW1JJ5CttTDseNvFfJNoFY6JwQfw3fRAZ6AmGkupv",
  "key35": "5vuMcT9KmdC4KyN6T86PMjsPoZMR8pVsZTPV6vkBDvFnyFoyno4H9mpvXpErLAnWNt9nKYpXX8DLQZjwMUpEr72S",
  "key36": "aPHgso6eivJHExTjYW4e52udMXMUX14c1tL1opi576A1yUAR1deQ4XpamgNYqmRzBjm4x4BPSwwVFVTcn4MyF7g",
  "key37": "3psQbp1Yy6poM664uKtYfrzySsffjK5s79iLf4DpLeMFAku6yj8SdWHpQqQJM7EBQZeVVjVkVpyZ3xoAdeLih4R3",
  "key38": "5MuQozouYtXbWihfXvvtfvAYkhutZxGy1BVsao3GNjEaBfn28kzhUCdm4SyyxmgaDBQFskrsKuKtjJRZeB5uy1C3",
  "key39": "3bMjWYTm6ZWfUJKWsWYJqyvpLgm76SEem4dpNGKHTYHG6iJrEsJ4h7bc4qvqwQ7WjukrDCtrKxFfxp1LqUD2PM8p",
  "key40": "2yM6jtDvbhV5MqvjSrJBhGaJ2KR2DzUbnqYR5QHPGyGFk2MHqQ9j185cpyDNUzggTBqhpVYSRXnTEMjoV1ak74Tm",
  "key41": "3XUQ3nEqkF6YdRuqKVh4mJ6vKiQxRp4sKNxC7TinvRGNMYT2qQmG72X3fUAuu8M36bhEyWoq8hBqHcDcyZ6yTKKQ",
  "key42": "2SwzZ1qZfPTnrq4d2gGger91yYY7KucnPLkf3earzae5ZGB3pJr6jVixWUMwTsEY8FpDPcrp6qo4JKkYTigDrhj9",
  "key43": "5ZryN9VL1ri38yQ24VCvU4qHjhhc3nBwf2ntny4nf5mniexKFkhu1vGUCZ11PsQovQNjPWeJDpUU1ou9y3QvLFhm",
  "key44": "4GivtMTaq1eU19nBs6Q5LeymQecY12ake5BwTZMmKEDrWLoNWG44tWUYVtAUxgNhydSEhB7nbk615v9kUvMdvsx3",
  "key45": "58Qibi4gTc7M6Jw6CEW7ii284XSat8bbsbL2kL1tCYcypaHGnk12zBEfpg4GSXeGVastd4zAUx26HJvcXRBGWqfR",
  "key46": "4jvqEgXVeJex5VuMhjsfqYRBmyiRyBXUCYZ3Q1qmzWHRdVb21ePTS8TqaiRQxdshPd18wLcupeJGtQK4EEuyRrz7"
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
