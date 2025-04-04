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
    "4R8stuWUJ9z5BpWRLDHYpzJBNNo5S4iLTAjwjRZUE462v1FGhCKadcqRiss6bkEphYGmgoAkuMdrc6bTTmLksjuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuQz1dwv22zG7qvYEaSLy7Khn6E1na9QB7Rav9de4oiCbiNhoXchpuET1WawWExDTLuujLXRUnzZq1avjYDzJjA",
  "key1": "26G1mbRwJJqk9PbTGWGBM94ePWJgDQwP8Kt86SgoRCkqqdh9qBfeVBQEnHGwEhL6jodwx7cqL2avDqnPCHA5MKe5",
  "key2": "2HeZ18SpZqFqaG6PoozC3BMcyjaNWvVHM4c5d3cFzY3yMxH66EN1M9sMdf9CXZN23UiD8pX6pqoiFKdM1V8d77Bz",
  "key3": "3439axpt3aPGS5p2i2B1L55bPkWZbfkdWDQcCWxH6wcuz7x14hsnDD6D4Y6qcQi7axsCp9zthR2QaJvUUWn82cZP",
  "key4": "2Z1zNQYfM9oMn3aYTewqXmTxbKDUyQrrkZAXnBAAFTy9F1q4LVaUG72BXeigSB5L7D44GmBDXewg2zMZf39jkrTD",
  "key5": "5Yz4SsancFUoCXsr6SYAXgiGfpeH5HqGyNYjkALdcbNSNV5rkUCJBLGrt4QFphsM7Jd5WdbkWsnhbcp7vqMZqC69",
  "key6": "3UjrCDBPYKnEUPVVSP7FPwJNvjPApg5C7Mup9j2SpiwcCD1avtGzGNq3ZNGmstxTb4gruS6st7HeQM3pchwES9LT",
  "key7": "p8iLqNfTuzjDcjTJi4shybhooK1iDKFrnKTydwsN585PwMhoggGrwRS5szZHHbcCoXEfz8K8Xxi3UJDF4gtYiKL",
  "key8": "5jZ4YcWwNfDs65a9hUK9EtKMhyRdNRocDmPCbZZdsUR6Grye3PKqwqq3fS6jXMd1hoXzeb9SPVX1rTaS1uevQD2m",
  "key9": "3YdxkcvobGFTLKaW9ofQ8BYzkSyo72nMrU435J4Db6rSG3KQGuaVSgpz61mUXoAmMiU2QCUECM92X4ReHNVoXmGW",
  "key10": "2qToENUG39P4VuRSjYjYfLM8bPCDBPs6NZXMzFJHFxDFYHb39CKR4ZeZda6qPiwA9oLKtcAoNZRMyMUz92YTs1BH",
  "key11": "4j2zR4oZX2r38JPJExNWWM65ya1EzXQ9w8AXcttQUN2V5foMrUgYJRw69WRUw8ZrkgGaQ5wzNvHotJv6Z2bgEqVk",
  "key12": "5fnvNtE6KKgsp9mRahoUpHxJQC2Eo6x3nDMoGsdboNnFcFPV4SyMcAEPg9T5FQ5VUCdQzyG7orFKh5ENTGFPSkRR",
  "key13": "2TPRf7HfJoyE5wSgKkf2Xd14fDBB6fkyem62vnRpnvNsqhDMZEsHXvd7jMJMkvnmr5wc5EicdE3aatsu7VhoBoot",
  "key14": "3xwh6peBpBWqAtyuBbvA5Wnr9qTFokA7kzLvtAdtD3FNxzim7ExAiwGrVL5ixJmn5XnJSAXn6yuWQdLREzvEEMiB",
  "key15": "574Z5SZNVK6YBNFxnQuG8LTtZFQgAQwuZ1xBvCm18dkfgZ2xPdu7SkygZyWvvZQqSmchGU6RzreZwLUwLZiiSfsQ",
  "key16": "4PFHUtqr3Qvjpujv89zGEY67VUrddP2aqhwbSwgyPQfcCCk7Hdu5ZqWGqc2iotumXxPgoLrDQUs8nHmJMVyeYaPh",
  "key17": "erdt8Zx2LYtQfBP5zhhFdeVvLpheLdHsS9kscC9EEHuCeNPyjCRFdcS18YzuEGUTK1AndGxTZ7RyNjbLnauT1kD",
  "key18": "3jQzEUufuHn9F8Qgz1CK8rkjSVhHFoeb2o2khBEcWyZmTob8uHmccYwc16L6dSvZgjZDYmR5zpXzw6H2n1rRsXQY",
  "key19": "49bH3qabtfwVyFmLh4pYKMvpUsdHAZbNC4amgcRoxVvYGYp26zDPKhVFywvAneW5QPNdxjjrUDe4rDda3TzATD9U",
  "key20": "3fcu19vCtWe67sPNxNy6LmHX1tBpct3M7yaDi4PeKAR8q77mXH4xkgu54c8C9omdMVZweMqGt2pAuFNRMEdppeZM",
  "key21": "4n9idAVxc73Xuz5QnhahzADrqm4s9z58fBWvM9RWyDzMmuP3pBRwqG8BYdnP9Ftu3MxWUDa4mJDvXKquHCEcaW4o",
  "key22": "5JjAX71r9yLJ3NpTMbYXXcQLTNLdaRcujZWyiz8FfwfTmKn14nR9iQnSP9McXgsAKCq82McCgMhxoQycASnZSpep",
  "key23": "KfP5uBBvJP9kzq3CvXwoX3thqmETCFZn6bffr7DVvRMmcoPEjymnzTo9r9bkXpKFpqkWwKHcFgEy58pEnyfNqyk",
  "key24": "2noXBN4hHsjoJd48u261CZQ8iLdk26kKku5AePA4aXLweb3KL37cfpbsyb1H7nZBpBacKqDfnRPizRd1VVeZvWNL",
  "key25": "AXF6kznL2sv3fKjqQuwfVARM8fwA33vhejosckQ41Mcqxe1hvovZhDbu5CqnYTYyoUPQpTQ1C3LHjN9hE2wVYgP",
  "key26": "3VGM4eX84pW2Y5Jsb5fjXRornhEjJEU9pExE9rvusaZVGWUySwXMfriqBAJgTxYsXhYBoUnYy9Yz1KmtW37LPAkA",
  "key27": "5XyCjS1EHomoP6wGTAnnGK25WS8TTjX9rc2q1HSYRtjEFzMCgzvp2fKuQjN4Wbt36Dk4EVCkCaQoiiJxj9E64zdx",
  "key28": "3G5Hs1sZ4312Uu6eR4eZTe8mFGDdaQfNHWBc9qidNnx2qPNf5TG9VeZiH4V3rtYeFVU39sE5EhHivtkgzNWZUb1C",
  "key29": "4gQAQ11ULaphaHpqbemGfnWKf741UGJqC1gdfQybhfqZipZvMuEDA2wL9bfoF821AykUCx9rrqNQR9f9JeS68nF3",
  "key30": "4GPn6gF9rfzgV2tSDGFUAiBndWWuxkZWFfL1BZL5WBRNwrAcF7qWe3rdtmDMqpNxqfYCRR6gLwDbpLWrQyUs5ZJj",
  "key31": "4jPQXaPt6ZdcEgUfazSBkWBj4wZAy17RGw8hLwqEbCUF75SV1vL4z55W4wcnhJe1XJka6mvtKXoXvK5zVjSzZS6n",
  "key32": "5E73syamTkpMNRqx8bM5q9pDx7pZaGaqjSxKh33uY4sbm6G88jjS8MvC4emiLSjZk1KbRGJT8DYvUkPZrmUKFNG9",
  "key33": "hefVkxNhWp3wU4m4enbnScpM4jkLrTCtrsN7ncaHQXTaGZzcsrpExSpgj3XjUCiZySXnoWVMFK6Ae2erz4Z3YAK",
  "key34": "rw33MLs6RybdSkuymW7VoS5WvLs684GnfgJEBYYxu2r3K8ePw9rqr6SdN1sCqNgV5wWRoN21hpkNN4ihmz83KHh",
  "key35": "AmcDb9gv6M5DmA1NKtt51aM3wn4mkfZuA6GWjm6oeFbLTDhTQhCcpD5ms69XKHyYwCNak3fBcFnjVkrXe5rvGcb",
  "key36": "4PCTxRapd2AB1ACH7L8uUDdqYjqWdUzyi84XRktaQVyebJMrrd9e8AYKB5aFeBh7VxbTzNUnWV1LosVrPA4yqh35",
  "key37": "5QiR1J4wxDTChYCTSPqFmLFCev91i7TPQFLY3LgNuPeXs3Uj28RucSn8jJo3ugSZHfyi7C8EgwKZophmJPsKTcoT",
  "key38": "38AMmyWsM5wMr1QYdcPYj6rAkow9P73B6p4eAVvCbieTc768NZ5JMwBuFqGu6mvQELv1nPeFLaaZYr1rwVXhEjhn",
  "key39": "2hmXbKKugoxp2Z8DwRw2c9xc5gw7nK88aRs5HacSzF3AkRUQaCcrKAe5h7YPHKdyBsWTk9KdZKwGdNiccV7Sr9gv",
  "key40": "4huesg2cociGQqU5nQkGUtdAi9mvSCjjmhEDVkeQigAT8zaHm13t9eEnCqWnCffcLvrWrveCM9b77GF4YQFrM4an",
  "key41": "5mDPqa6gCbCHSuz6WbZpmAUGQ8fBurymk4xu2D6F9usFqW6URQfCX5azZ2DE7wkDjKE5U5BAbgbEJH2WNPVH7g6z",
  "key42": "4J1ix2mrCnhCPGjx2zqG2cTJvXQXb8T7anRPo2tarQDVVSbVhDC3SA4ubdZXFeN4Sg1jNHAGew3hDrZXKpF7J95K",
  "key43": "3DDqiaGB7EBZuT9kkwHAmFALajioNddWA5JuD2RuUKw2htdWSXdZHtcSs33rgVbHLSbzhaPLgjTKvqPQ1TiKViou",
  "key44": "5c1Wq2Dx9Rzru8rkas1QgB45qtzwi7Gkx8MHQWGa5n2MHJxFN1cZzgAkqJKcgM95YwGZBBmTXmY2nDR6sYw7Djjv",
  "key45": "4e1wqUFNyPr5pnXwWWhEpyiNX2VvWdRE4Sc5ynJMdnWZraQK7NnKKG7Q8xc1Bv338uqwM1vshttBinkAb2JruSAx"
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
