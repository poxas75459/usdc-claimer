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
    "2NVexEgSEX9iTrDTrPacFeQjeqFffi9fub7hfQadobdAfLyCGg9XMdf5HaQvt28GGWaFcX4fMrb5wgyW1vLAMxgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWLiKExjEANmU9uS88rA4JyDocPKW1etkTzem6HNzjTQMkrZ86wguN6Tsnqu1Cc3tX1HrSZBqh9bau2LiKyADuj",
  "key1": "31G9MzJ9V2vEXDZNM6EEUb5EmbbdG28DExpnHZP18b3T9bJ99k268ftntoHfUUnG2nvzbhqftQGLodgodom29Dk3",
  "key2": "5239vHTuBiTGXrcygGxqd4FifcA5qPifxzBnDU7bNuwKVqN84f2vYLEwizWTgEp8tNe34MGtnQjDjYvNmDdDVnQm",
  "key3": "4jN3C9gGVEfMU9ck66nQUohMwWhJT2gnBjBe5MkotAnnf9EwwVWmm3v18smHXTsT8XpihayMTX6FkcMCQWcyAwma",
  "key4": "3DBZc5f2SWCTxrXi14foQBDWZyZb7wuc46kq3A9ucvGShtgtnDVcnvCzSaY8CxAnWpDAoSHwmy3qaJFMXzsQ3H1S",
  "key5": "3UbyMuwYH6vJxTjyQBPQucc7XseVkBGP3i6fgVntwD67dg3n5ZK8peUDYnD9DJhi7aRrmoA8qggbneVLcr2Cwm72",
  "key6": "2jkQky2mHtvv17tLiTHv2enGUXA3K6aEdV2teYoCwJsiT4Tz7kt9uhvQtCpbMq43yAKCNvcL65QUP7q9tJa5SLQd",
  "key7": "5oERKGSPaiEWZGmzTDi2VpcK1wWJHrpT9KoPG4nHNLsTQHZ7Qk6r3PoHUkicRnCYhwVCEEyL8jeymiZBAp2cC472",
  "key8": "3UL92N5a1WotoctRMYPKpwHiuVt6bCeVXc8SqxeyGvgKjs5gHszLv9MwL2YFaakDMP8iPKyhBEcosq9iGQ8VC4XK",
  "key9": "5zW6E63NYNNf8rbu1V11HsqdABeAM2fpKeG1sMR4h31QTWHq6JgJqvBDuLqMsqKNku2ogkLEuxGhCHQof1nkawUu",
  "key10": "2krsmjYPQACj1dz8869zk8xEMubuMmBfFVaj9ZCNp8vUeD8ZcF5pqYo2UFgUzk5BQiUuNMvobgyRNx5ucZgaTB3e",
  "key11": "vm2sgndEre9oinH3LntBccgRb4qx21MTgspiRr2gqjNNR3zoRexr73Gd6SkwrCc1wAAPKh5k5drB47L6iTUUEet",
  "key12": "3j3zhW8mWGWqrchnS5M4svENhjPCrPbyDhAsM8w3zTgM3fUaGbNWpDWqiJG4zN72Qa7VN7He7NUhnd4Bdvh53vvT",
  "key13": "446DffNqJz5614jcRraeU8fzmShKM9b7qKEx1yU6vKLFrtL7LK7hoFy9XTUKomRsauP7vFLE1gpv8MPSQPBYAYtv",
  "key14": "4EDYco1zcchdxBVcWRiUuQ7asn2ggiNLwbhmsgnWeRjTezKo5cwV5WhuQYssGDZnbT6XqyGhAaoYWFFm58sHJG53",
  "key15": "3RLTFxUsNEfJpLdrV26Jx1TryJNJKsL3xvJgFiRJ6pca6zeTokgGX6gTnkGhCvVodVVp9f2j7LUQ4wmVEV6CR3RJ",
  "key16": "4fVYELajdveahxrpUeadQ5KUewd72kXCKfpxjuHY3LYn1oobNpXFQxPPL9AFEP9BvMFaPYH8x2xRpbMbnruDdEZV",
  "key17": "3Jo3zZKDGBCeeYmW5wZj5qnN1UYuDLVqxGkjw1GmyNiiZ2isEDo18HgRzMkkdfMWmZHibpUJmeCGr3NRaSB9HHge",
  "key18": "27su5vqfJJjjKWw8WWVc8dsmeMhtjhkjSA8c6qGMJ8u77SfKLVootPkCD766JnXsJTMubCB8swKa3GUQM1sCUdNY",
  "key19": "2rkV14ncvZtDm7LmsojWbfMLg2KKUzEUDXk2QVDHSWRhziqabZUPbajzoGGsPspCYn9Tf8Y9A9r8Cu25qbbquAxt",
  "key20": "4yAy5mga3cyN3th4zHjBemx2GLoBKg9P2FW2rDSLsDJwXx6L4nMW6m9KXinXVQKefE2GvSjJFWocaT14D7ATyWoM",
  "key21": "5V7tVvczkdRLk7xu5Y6eXDprGmMqgPBTMwYBtYEwufRwrfLKc9BvKQD1BdoQVDiUNGWvBPRcNWkj7dCMNgAdaxFa",
  "key22": "2cm2Fr5Xtni7bvgFHRKjyEgJFpiqnuUSVz6uN3mtLpAmVRrM1atCRNBZuoXHCKWT84sn8cJfE79hD4FGNLENwDZ2",
  "key23": "2z96SPiUBNSymXg3RZt4JtMiL8yZLxN85b9XAvAXmQ476uAoDhDVs1SCfFiuqG9HYuLkTdpGxRpmLMyrbNVfx75",
  "key24": "36c5rGRScwNZtcfEwBKrYq1DfXrBoiYqU2v8eAN4KHmFfuqfCXHdzN37TYkGy6TCayCatmcs1meUbc7NcRJtRDim",
  "key25": "4dT9E79aUtrJ4cQyGK24k24bFYs9diGRgR7ZmevnAAijcxwW6ibxrJbHtir2ntQFaWPd34vxGn5tTMEAUK1A7uXk",
  "key26": "5YKXTgkzVc1zpkGH4Kka4M2qaHJkp29o7jAZKHoutFC9NuPVpvrrMfPNbPiNkpFE52v4s5saErXrJjHFQ4zMQxpN",
  "key27": "33PqBxQa96G6AznjPbKC6ccCcF3StNXrHnKCVbDTQ9v4RYP8w99DgTxhGBfprFKYT5JjYkb2Tv1nRPcZ1QzCuyqb",
  "key28": "5SKx2JTMxUdw5czMtiQqt2vMY6n2tjGgiBNMyYctr4WLTjaTrVRx2R85FejeHVCe9F48HnuoE8LYJfUFseooYj3J",
  "key29": "4mogbNDYfxBRtKL4RJHsQ3EhPEJnWzQc6R3JUyaeep9e5ZWvTDPF9aRM5TmZqpEu1m8Z26VVgr9p8JVNMAay4cBt",
  "key30": "2RRJuv6Mf3jJuiPJvy9a7FJzNJyRG1hEB2nCHpx7MkJhBtxhec1vQAf8q3N8yp5e1KGNugtgNiub8saa5PUhUchP",
  "key31": "2WarBu8cLcz9SQK1KmU4qSaHMogUQXYXFkyp4bZMpbfziJU2E49vgJAp7KRKUuXM5zrsP4Y67GC4cK1NEkkUMXeX",
  "key32": "DvwRXQgWrKnLuxPHHStcSeomXyMgtg7GQ3pPQcssdGc31L26eC8cF1okDguUuH6EVXFuGfs4xGjebSpnERAT11m",
  "key33": "4MNTeDfm8tshb8RFJsmRV4wHpQvfkBfcMzhkzMHpBuda2jMqASjsqnjzD5sKtz3GVtdsJSeQybFg9F473wibxH8j",
  "key34": "UBwR4wm28GC1jGkHM5aMKe1gYPJb27LAamtDnZo1s4JTmuBQzzpsErJ5jMHqfnW43uQJjr7GS3xXyGmJdLG2krU",
  "key35": "4NG235rWxDjQhYybXW12Z5ciw9tcURK48s5WYdxFq2tsYSv8Lk95TPXxeUd3k9rrdWWr99dLihA72xZZNuDn8BWj",
  "key36": "4NRqegvCKGemxRLqsTPYrgU4GvFw3dBAT4RL9EZsyV4zp8ShGGvEXkPhhVxNkaHsgsM5CEVMDVSm3oA45c8GJg3k",
  "key37": "4vfULUqYo7rduyRWvDmCwDsYRPnYY9xqjgpocdumzAAtbu4mbAxVbTJqKHmnpHnjXWDfW8iN7mrdr3VZHE1gyHnB",
  "key38": "5HzdM5aXNGTrAoC2jPShqQhxskyjwzuLgRmHk5EhkvCiSdD7n2TJtLHqUyfS4es35CCEhjsGUY8gyESfu2nnmArS",
  "key39": "2eRM7ZjP6wdiUjuSjKc8SBy3N9h2abE7hKCyZN5Cf3a51DhSy89decGjB2U6CWG5TEy5LpZtUShgkbozLADYgste",
  "key40": "36EBWLAa7NNSTeKrPgACkwtG6JknEKaCHdEBf73Npy4qPdBoH14EBAfzi9Y1S5YF2QdKwzSR8CVrSFhkKVvJMKm9",
  "key41": "5XCJdcc9nb5hXHh4y2brEnimdvRaysTEjrNi7DmNcQTnemK2QXXM849dVzwFVVCKmL3sjANJLpKfwst6MGV3u2R4",
  "key42": "7YLft4s3MBeZn1iGM1tfhDLVBQyUds4mvGWEwH8ewqrsMRdLRo5NdFVbNZunR85qQMbzUgDyDTV8b9sWLW4FjvY",
  "key43": "3SEM8obDAPmGTpnsnD8mteuVk89LYyv1qq9zwvpefsVsyN7dSVPp2J45QiddAD1rJy6ukFRRkzd3rNC7rUWZeSsp",
  "key44": "247JSTueMkTFkoiAzQJLvfLKKRQCnmhWvL2urwcz6bRNF34cdwjKPZD2f59ijFZCLcGHRT4n6enbzV1uhWwfDD14",
  "key45": "wMn5M42tJaLa1F5cd3qhoybjy4hQVxjxd2JNLSTijRdyvQoisR544ueQiu8vJhsVwYrQEfH67T91vgQoo5ofsi1",
  "key46": "2EwQRSSKsRicqsmTCrfm2RVFBt2i4yRD9HXHc6iNFSLJFtSuBDHjoF7KwoFjbwd6KCxHJXFDA9jgc8GWPMMcjxE2",
  "key47": "zJLcDhn6d8FShHdLFi74oNnCFY4gY3gwchMCbQqf4gfAz7iwLLmujVXRbG6mkeUxNKfj4A27QCujfc2tDj9X5dT"
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
