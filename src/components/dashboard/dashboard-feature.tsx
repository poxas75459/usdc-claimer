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
    "8ox3X7pVNaXnL7eiqy92aJRaKiasdCrsrnv171EygJ5NGeZBLLpJGS6Wytgt4W79bjPmZm33sU22A2hDtQirnby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kd6Yf69Dvn8xmdekenMRZCGzPNpmbncwPqynALM3ZKWUqa4CKh4wrZMJg5kKZ3FmxvmTbv5oztRdoFTyo5RZziV",
  "key1": "vQVkaq4hVoit8QucE2D1oshfWXB2qzWBDLVPmYy7hXozpfQbnUFT6AoGr8U3kzvzqj6TH9HAsEfNqtFM8qycfYw",
  "key2": "GS5fyndxi2FQa143myBBUnA4G6QAxEGLda49HqXqSiN1YEEQJkMx2uxmSGKDNtvtLwSWgrrVftsWGsJvxtvqDQW",
  "key3": "53cNA4hmVBz5ea8XbDgGx5ERxbGWuUxguLc88mUp6oevJZUtmkbojP5Nt737a13rJXusG7XNqVEpCDinNoqqjQQR",
  "key4": "2dQNyAJMHdtUGUiAnHvYFvJCKRJ9Qe5BjRaDhtXMkosaxTAiyMqWkZq7CuS1Vf6zUjczxrhLv3P9bg9ci1YPQoKt",
  "key5": "3eatEzQ8ELvtaH4an5siZvwTXrevVTKwDfVxwLVufLuXMCYWkbu2eArCiiNY87Q5pZmSXmo2qSiZJixsizJwUceB",
  "key6": "pHcpLMDpjGyKYo4Mb79ZtvUxFD6V14qiY5NtkfRNaWETWHXtDB98oQnZn7XLBXorSTvtMuaDgSQptCAL4MrVEEp",
  "key7": "vbHRCr3c1EZPwBiVc6N3KL93bV9EsMTWHaX4cuP92YkDJdtB6sFD76Y55Gdh9BBkqmYqNuN3sDfkgj5GFdXMMLU",
  "key8": "2DS4MhAhpaRzoLBNnkSGXsmZYVtAVxX7QkbuZMmWKMJAqm8HFB9stJE7NexYvbQZjnhySWS1a8jpQ93EHnRF1jVH",
  "key9": "BWrjfBKPgNJPYFz3yy7SAS6JZnZxSd7A9PwMprYQmGTutKt3WV8fJcEXvTyCwG2MwBmfTBAnXGv1CSPzvVnednM",
  "key10": "2hewxyyo6UNdsAGnJh9wytnaygAE5aKzmkdk4VJRjRPUFwxx3PJznku6eVJSkDZTw3FAgu5mEDW29EYQwtmCxJP1",
  "key11": "5nGorghYJN5AfKEtcmA7owGF4qYFnCmgiaiL3f7M9zQk591E9soNf5VsGNdUnbP7LNfU2QYfyG3YfCUzdNYn7iXc",
  "key12": "3YcSXUzZfZSF7k9ZhXihZn7cxk75mWDy8WqoCtfQTPMw48EQZAP4i9s6T8yaa6Mi8HfxWgu3E8v3fgbNBN4oyTH4",
  "key13": "K16a4SM6hn9zrccP2onvQQo1YvCuRov96rjjhDMwhtVx23aDa1Vv4KF9Zb94TC9bKta6DtUa9JxpkQTs68giZt7",
  "key14": "5WfNCHLmcqMT4NqTaZfZfMwCvJ1sg7WHzAKBo7RcehbwrTsuS4k5bnqpXYGiZdvuBocZeZe541tX8fSgrusMbKMm",
  "key15": "2C5VV7G22aqzYHRA2mKXkvZtHRCaoxsP3LGYTZkwEXu4qCvmmc9Ya6gxAsobJdfzkZiicjUoD8nF1UXQPekQLH5u",
  "key16": "5GPgb7tvwD8doNPmrtiffVBCYk1LBrXTKm6bDeF5amMJfH51hDD1PwunPrcCXurGobcVB2Ljqne5dEQGDHc5wBMC",
  "key17": "4zGDZuquvt9zTPsa1cbcABWuNBYefHuFrb7im9hnYfFxVAtW7Rhaxf39rPZNdxYh9DC2szC4zGWE9e6WMw8XGfu7",
  "key18": "wD5bwR5qdWvUUpY5tB3opX4DWBGqcxZv1PAiT23TWZUbxDACVKkHoVQ4P8VxcFMMdCHLQLyeyN7jGvR9zxTRjUh",
  "key19": "euFsTdv88zN1XjmWRbAwzFVMMsM1PbgkmKFArZnjh5ZtLY4AsuXocsexrWXjuFUWnhBXif3E9kPF1ki3z1CyUc7",
  "key20": "4oo3tMB9eVDVrxeAMDP4REWQbmc7DxYLjja3CnNGZoagdKDwRWTk8RQ2C92Fbwvzzuu22toAQAmghDZ4uSnTnaTo",
  "key21": "5XyLUsbdPgNFoo32nBW8ToeVkD5xvRgkkjVRic24mvUvJym4Uj9sv219fSgZygaxrCCenvx2LoFuHMj8XmRrcr4V",
  "key22": "5zduXfGjzEXJQaF8TTe5Nzj8KRNikEZxezBu55UrcmQs22iu2GudoA9Fye2gufHkiSNyRtLP14efQ7eY3ga8N7JC",
  "key23": "47P62KXsMTzNaQ4CePdVqapyGMVoAYvSaTpnqUAV8rLCP4CSLF8F3ZxbfbhCvxa51uUyCWmZZ8N1Cd3oUS1k4AC",
  "key24": "56h3MY5sEwuehVwq6vpogEyM9chLZ2xLZ32SbQM6NYtijpjWyZhDqQAhEirv5X9ddHgR5HnRVahJCxzF4bMJBxYf",
  "key25": "251TUmDyHAAMQkFoFBw1CwyuC8qSNbru5BYq5tU1AJZ1WqSyXDJz3xQUBU2L8X5phYTepo1vBnRX3Zh8XFzyafRZ",
  "key26": "23MVMC8GQdNxZpyxHiRE979RY42C4gzYnkE4cVixbiEZ79ipKt3Kc9enX75wGRAmpLzwPz9MjA2jsyV1e59VHFnh",
  "key27": "2AXYXqqhTC4UmhVbKZhKbb2q1AH72ujB3FUXgVv5BDBT6aVACug48FwSFbuAnNYU2PEjjQejpuBeCqbGSvvnrDSe",
  "key28": "4KUoS4xJzB5EwfRLDcxRxfmaTUcFSFymRnfLdjFRFh2dZhu2RTgesJdUZiRpEBhJA1F2fQcuQQGaFrcjUarSqQMa",
  "key29": "2vfbRmgot8jPPK9y6NFFwknkkdqZZXrpVPWppCyeB5Eb8gXoVE7mWXa8GfH6vp32dzTD9odfuxqgpkzfCRhgL1DQ",
  "key30": "2PU63gjyU6MVbNsvTg57xy83UY9aBVp1G5YwivMawriSQKoe9f3LkkXBNotpYrgkPgUqR1Jh4BdEBFsaoZdbuj7s",
  "key31": "29rYr8eCtcN41p5s74YSpAHZSDupRZfYSxoPrS1s3tnMLAxXha26niLiVSUYXADwxf64CBaK4mRb7aHuKU9N3SJa",
  "key32": "pETaaBM6bFSaqETxPxQyfUCiuJFgnsfSA3vK9K8UV6Le8vUcx4ot22BFFshPjyZDdz2ypnAoNsseqhAkLJMVw6w",
  "key33": "4xFuKYqXQi8kCaTqW8kskg5TTJJh9BZvx9gaZQfGGhGMQURCmRt58K6b4MtEX5MfPznrzJUEzwsu53udeDrz4rgE",
  "key34": "jTe9x7uFdNPBai8BEecLCt1mstujErjn9FFsM1H9cPUe6jZCU5PEsvA3Y4cvSuCT19ya4zg2rn6JCMpBsuWK6ei",
  "key35": "36kWngDux4N9rhyXrVHtjejRiZTBnMoa2ivFG32AdsQzk3QgFq2YN9RjaVT3gswPPGYZSkZER6e9xVhLnoG5iNZt",
  "key36": "pTbeHg6Xx5peMnKFoqoHko2nbjAMAtB63c9T8qQ2umeJi2EDMCrYLVUrvVxg36VV5srGUCS3vXhKTU8SxksrPs8",
  "key37": "au7JjvZvfxwb1sHJ9UHi9hYAXKtshHrDxBywcPpiCgLT88AtoWyBaZ41RALLmnBA4DmD5rZKHc73hMkF6bpNXAJ",
  "key38": "3tpTvGDwkU21WeATEgRKzU9K6SYUmpTVRKqX2qWtArKGqzFK8qWvgAAUmpnnM8rPzsZsgLbEwg9455uW9hrb3bf8",
  "key39": "5GRw9uBRtngdo2MmC59GMBTiSz3UvZXYKzUqE6nXnSr5q2LQgctPb2KZR7XUkdjzhEoDi4xMGtveBqRrCpoju4EX",
  "key40": "tmy9RR5q74hUiDXWXkrGdrWTMpaCcwo76fGhWT1fWZbkKwgn2Vqm5VCGn8wim92XVroXbj9wBp8mfeCNRdeFX3V",
  "key41": "4K3mZDPXfh5XpneSgbaV7BoXSuXvN1CDSNxzmHn2MmyTPoBJe7bsdpAfSiYP7CnKRsb48edHjHtLUW1TQz6L8uHB",
  "key42": "2yWeHcGmzvAAwKr67tnYRj3qfjA7Hh5sAXgHyAZovEovyCkDsPR51mShGCp7C6v1e2wc6MoeC3oKk4DB5aL8tp5e",
  "key43": "4jovZJ4f4TTXMt2Z8K8bTZUjob8iTn9vfTHLrwcRit7o7SgQ7w8yj38yjVwTaHCSQbpXXR8EBDrZxxCeauJYQDSg",
  "key44": "5HvmLsAYsEJpxuvRdmffSwnudeaqSB9BJkX1Dz9NB7XyJsRErEXF2YebJmsAcGhtSweYLSK2Y6CLmaeVrKXxUkBT",
  "key45": "2FkNsSTqHx4zpkXrhg9pPehyu76UtKaUWUrh2JjmpRrym8t6PD7REuTJz7LxE8Jqe539oKubBE9wEfUpeLgsDSW7",
  "key46": "5XhhKv7e1vNsFc4uuvovvYvPan5arsd9eV2CntM9VckeBLijAVEe4RB7dnKwJhJrcR5RnQvcqsj7arHJSLZuY5qZ",
  "key47": "54dnkpbvJXnhTk8YhSUnb9Jsa1XG6iS848wHsVRo4p14PX7A4hpKj2hVAByc9PoNnPix7JpgH2NMFK4y4jC8EBYm",
  "key48": "5kNFfKRV8GvedDrYTom5u78dGtnyRhawhD1EG5PDUCxW4fpGEY1479P8187bmQP1Jt6x36MZbQhz7f7L8KJEUMbW",
  "key49": "ivfjz59pExbN6vpW1Em8F2kZ62AZg9nE3udepNCRp52JiJcdXWVq9gZEcGE9iGFf2vs38KjSY7wE3wEoMpD5LEh"
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
