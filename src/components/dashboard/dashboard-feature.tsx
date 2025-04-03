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
    "64U5KfwchKmeMLEBAeNeVATuk19W2mj5Yn1qFoePG3eg6KcYg4DnHUfw1RzUTkjuE6mS3v7L2EAr58EFAtn64iQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mtk2AJnkiBv6DZmxtAovz92YG4nYBsGTq1wjiTdDtKBZdTpgUcEcnR2XgsXbfPYSUoDdmsbA1p3vSdHaHGurXwJ",
  "key1": "48Zn8NJkesVvDsAc1T92AbJVDkSYNdLC9n5qykavKxVbj1G4MAMFcymM784TXv9DLGE3kfHJRD1MxTE5htuZQaXP",
  "key2": "4ysND85Mc4ad3uAE1AcSxhRJaErGPrKzPhYMFK486erH6uHgsQxzvZtHqyw7GevMYjHLeENwcW4XsRiCBtCYQPkg",
  "key3": "47gpoaoGWvkFwrNLkLXNmbb6KEhgf1cCoKdoMBNA4Tvhiwtn6YWT3yzbtztqtkrhYDCYx488Nb38zU6meQn9VNGv",
  "key4": "2piQrTvvNk8huZ6x4eqs1z9nu1ppDPTtrrdVDuedJfKstVbbYAJfxnemdrxmTWN8YdshzgdCspfzQLKEx7G4fUAo",
  "key5": "5R6W1LeYM9BXvEkgSAoBRsDy4BtLsimNHLhVBCngHgKaayCfsvfY5e1xMVuQhUVNvtMqCZ3HVggHpoctrkNTAS2u",
  "key6": "5uZtbX1bhkQyiFFigTvXVgDAxa7AGVWhcow3EumgVV9Q57q9zsRvK84saDXr6JnkmhU9kynFhS2jsyMdXmRTM6aN",
  "key7": "wBsySb16ju1mfiMdYwXiGDUNbS1AEjBtXCfs4xU3agZVriXoeEPhobh3V6vNpi8mqjQBbpz69TnigA6wmjdFqoT",
  "key8": "3LYEWRVBwtVTAs6pF6esDEzozUiFFzPFPg9fKP3PA1unpdsx6En9kA3hMW543PSrWDuU7TcqoQ7isaF7zeHSV1mB",
  "key9": "3bmSgvWhHAkCU7zoiARFnc9SX63gqbYJt1Uh3dyWrHpeuznT678n3oNc9qn61kLmtp91C3rrVRcvZv2wy2aBWWxk",
  "key10": "5HNKwfJ8XitqAHAPMh4DqQSackZyB8jWMcLoEnBa3SjLsWWRop7cniez6GhpR74yYdy25NVm2TUEe3odqYCz8ww8",
  "key11": "3yVRFEmVTQC1JSviREqq1NosXaVreSLfrengaJojEWg9BdidaBGQtyonynGyrAktqXV5iiMBqb2bNdEhSW27iJs9",
  "key12": "2XhdwtP5oRyzESe57wLe6S8iju13hsVZcAuUWVWQii5zYthzFE5jePi7t7fYP3dF8d6xBFrmrfQc2uDYcnCEdZJK",
  "key13": "4booos5Udgw9kCEGLMQ8fn7NVMPbcVQqDwfVGBUZ5kXHqGmC91cna6eRTKScnryWAaMPmiP1hbEiusZJ4mY3N5Xd",
  "key14": "2LxhR89jHt3xTh5MZutRx4nQoaKXdciw5UQnPvRnQQ4qXSk6G6RYcFTk1WQ3qpaozZMJ9sF4EHCmobQr2VjYbRXx",
  "key15": "3kBBC5FJkQfsy8FQ9MELsjDM4kMWmQxzRYjPiBh8keDBVeVp6TifgYum6c2BFFC3K4MoG2TbF37hErgt281SYBh6",
  "key16": "VxnkRi3nv9rBoc4nUuxqzqD9crqutccFGKMx9tM8iRj7wgJ6hQ47PuPtSE8PKpG9XycvxpEbKTERk3HrFXFzcds",
  "key17": "2QbqyhDj6G1ZkxFHBbPChcjEoLh8NC7BvLkyxSUopek6fzL7RMh2aE5GXhxLE3BditfWskAgyuwfHwTGYXD8m3mP",
  "key18": "5m2BwysLj4csudvMW8RjDzjh3mkUafkoxoF4tU9vuarW1NLSB6FfArofYYgkBinE7Sir9fkGXqwpvXaCTZzejr99",
  "key19": "ir6xLZ6XTiJpe9s9WK8H3ao6xqmtNgDQwj1M2vJBT7sQ1q66Lcfou9Cp3E2ysnCcqAcTZtgXfxwjZmwMzhdJTEp",
  "key20": "5VY9BV9ePBkEeQFpWyJSj7U7dvG9FN6XLV7EZTfYxaLSVoYEmrKMVurkALUEzpJBnCQhm5XEtaATkNLc4Eun11nD",
  "key21": "5gedohruTDFakvHm5NheKXNxbhTh9AshPwuBKs9STT9TVuXqrE7BaSZiXEn2PfBiVtf7c4UcJgUJoHYuzrjoBopi",
  "key22": "5Ky5Gdo6LW2ejAQqJ18H8jLw7UwiapMgJn3D88XD5eYtdvcJMNwnHU5uEoV4YJbSWDAvEGm896xF6REoUqzKfNup",
  "key23": "3THrce3kus9HbbvEi2jWEWfsSiUE2hyB2jKHWL4Mo3cf2FGJWRCxfyJ2uW1YxmAbNBcjKdJaSGwVrHtLEsgRcn8U",
  "key24": "2xxaqot781KFBhd1J9DSmZ3HWqS4HuXtQtMiamsDyxdccBesEeNg8wDwA6ySaN2T3XQ9L5f4eGGdCc81c5KGUDkJ",
  "key25": "4iMxHGwRjxGCS5cKsodoL2MQeAsdaqgP4bEzcjwsvHRWgFVamo7jL1dj1E9HNupr9W48ogRAH3oz2XxFb3SLufqW",
  "key26": "5doUtCkqvxnGcswGBWY1WEpAmsw5ZsxtoypqciYkoWJCuVvBf9fNXkeuPM3dfe8V3chBsAXeMDyzwSCLmo7aQcMV",
  "key27": "5hv1yZx8o5CaByAchmG5gxLzWH5jQABgtpHb56ZYG87UEhVhEoAm9D4tk8cTun3TQYBajngZe5m7JXz9qJrfCMhD",
  "key28": "FXsK2uSw44AHAXTkKEHUvCAW6eJDdffRfhcVTazg9C5Gc4VSTsGebRJKokmUnhi4GrAGYNoAkxrrXreCnuB5Nnm",
  "key29": "57L1ME277w5YngyjsEb4yq3m14BCmsB2UatvugaFgpRAndFAsDX3y9nmGGcXhBSuueAn9A6UkVBVwa1FnZwvw299",
  "key30": "2rXL2UHgCTXA3ThwV924DQfAQACpoanHwHRbic7c4bxer2seiKsZRC3BHLc43nMZAQY6SqpGgbayEiCbYdBwgnyk",
  "key31": "5yhxJsaHWJzHsB8DiezLXscQKozQq7ZbvviQFKpHRhoaxpzFvfy8xvtvPWncwfnwoEUuYhzrBA3h4YUv8ZRW9NGp",
  "key32": "5QfDLtdVgmgT78QstohemSPt5aBRUY8cUAYoQZywZKPsnLvgUuLwPVByJ4pCrCHD6E2RPT7TzrpBchWg5jKmY9LA",
  "key33": "5mYs4yerek1EsWz52YXmQ76B62hM77XVWi2MXcYcVzXEDw567myt1YWTAKhqWPtUMVNVH344vQacMxeT67ZH64te",
  "key34": "pUFxWwhzrFVjdGM6H58zn2PKpRVdmTLccEVqzGdpv4HhPbtid9disQR2NW6mi4nEmorQPQTxcX9BjaBKNJ2Ctsh",
  "key35": "2HYu2N3m8j7pUhJY5hpPc3jVqKEZacuszxndScT4iW7SjvTLJjNJp4vf5ThQs9JJvtPf5pB1tC7ERXxYMN7AsYST",
  "key36": "ZyGsfsfwnt31hAYsMoLhGZaAJEpsEH3uGyozTjejehyHqjbTdq7sBughYxSV5PMomvmEYD75rx6Dmm5EZDbcwmz",
  "key37": "RQziYsfGtPjh3V3s7tDbCVzDxJJfzjeCFK1x4rHZSrobE81BuNnQFHm2JE2RwoMD8wkNyQCrMgMVy3nQuELZYT9",
  "key38": "4VjtiqujiaNVZk9pPcGxcx3TPzqcuKHh7bv2meqWT1vcmkDE3X36xZSRdCTeQweEcAUNxGqsRi4B1kS81yzc9zZD",
  "key39": "5rqdkDYZuhEKtiCBtGkquAwM7z4jdmfUNxKNPJVePfWrSGgn2GCWFD72jhL5GmhRFUMCbD9S617Z3Y5geyfxKANz",
  "key40": "5pb5UM3iccVrFtWhQrLkEgFTKAwqjgHws8o7kdYjyGVA4akaGw2M9EEdSebrmUNNqkWF3iN4AAB37eioqhqWeWwc",
  "key41": "eBPEozBZe38X3Syw3nXeAehF6pF7LD6ZCibVvSbbjxPNZuNurA1hxCYhbgbiEAAtBVyJrLTh2u7K4vZTXQuy7i4",
  "key42": "59cwbzA6BAf5i7miTKh9cr8i3t2vC9f7gsDi9VEFXGi6wN9wN98p9oGTgR8LGJ2ELAwmijLm86hCPxwiSL1A59HD",
  "key43": "5iZLWLqQgj1LYHVxPsDfevESeYYjk3YMaXnfC4ehUqoTbcRDfv9cmnK85bar6amz7yYShdGXhtXULPuKjo3cKHon",
  "key44": "yLCUEg8YGcz14HMZdhDkbkctqKp7qpe9AtrL3oFd1qMLupAR7BMkKefLV3EdsWMZXgWzPS4XYiK2FzLHy8wYZ4Z",
  "key45": "3c9WBRehGUnp7AEDUaDXKeH2ajyrBWzN7e5zXWRMfy6EvLaCL5KzzxKTQJuPAKoKpKhmbRpkvGetJzbmMhE1KvbH",
  "key46": "BzzY7VuTS45Hpr1Bg2PCMuqYhNG6KeaXcy7ffTvh8NxwCNCYQr6k8PciFZdzMaFqfo5yUQgsDrnzREh6GMJWDUr",
  "key47": "4q8HzcYiG7W3XCvqHJkxZq1UHqYHJmT1jV84Yht7hKoArttAmW89oT8xqKrcuoRS4KQcurQSKMusHsUZAvtNFQfZ",
  "key48": "W6p35YUcmnpfyAYcWa4t8S44c9SKzvzH7dbDH8MkL9hMj9WZHnrxnHo7XRZixPHJbi7nuWwSi7577bdzK5TH7dY",
  "key49": "4ZB8sKpPzdyGammiXsm4XRjrT3AA29vjvyiouXwNQzDpdhVL9byCrJjyJEXZAV7uFBcsU9sHAk2uU1duKPgEd7Ty"
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
