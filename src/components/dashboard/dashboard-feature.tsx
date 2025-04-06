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
    "4hrXkCkgoANGabbE2sMVAV4Kt1xHqmWUJViTT7D6Dgeve8x6K68Wy8Jc4yjhhdB9dLkgzD9aRLCrbHgVcU7qM19V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjskhTY4rMda5Gy57q34uR5vXzUvuTzpCpHCFUQ193zgwyN1xF2vYNokgW2t8QVzTJtD1E2uYQgWe4HySrDbzEc",
  "key1": "3siJsa2irsoSW9kLv2qGP18YfVWx4nbyPLirtdJhBRrhhziqk3nPST59NjLPUBQCFzYqoBrkUGedB9eYA6gaJ66Y",
  "key2": "5CJVCfLovcB4p7Gk5tccbSyTbwQJSw6C3WdHNJhTqtDq8a7349K7p8MDhWwivHARWt8BK1eg4AWW38ZquXoMWJbM",
  "key3": "55LmxBTf3j6FVyERR8rephTaUXQfX4x7czkfsct8rtSDj4eS37hhD2A5GVCAydZLnwHSjBXS4EpRqXqoeBwJwvWU",
  "key4": "31KxinefmuYqWzDgTmNYo9zMwQmh4vEWmJRmSUQBZ5is7PxMoxF9bWfB3N6y4mXP12NjmEDUjeMWWEfcdqNnzUru",
  "key5": "5qNanzQFFVsiQSLQSji61JPfHetdbdw9SyBYsBCZzFA2PxfYFttXNcBAgVnfH1zHt44mvFYcXFmHyscMT6prPBdW",
  "key6": "3MNzv9XXYzaQUPU7qaFHn8Vq4JeGsrb6QFKi2MRBHswtwZA51PeQotJAZJb7hPmNccRxjHRsB5cia1miKNupgy7a",
  "key7": "14fiiWrsZVhWWwiMykmm6Z3dVWEdQhPu4mb2KeEFf6akU6Jkc9e6in4FV11uTeSpMSXUfXJHBiSgrfEhFF3Grn9",
  "key8": "3AyCwt2t6VB9QtFKUjL8bkHmGg3UTYy2UoAqbiSSGNjdvUNgTXFtPGsLapJC7w5tVUk7NarRvP4cVv9dMamM11GU",
  "key9": "5e6G8ixZhyK2x7BsutoBLTig9JwseFM7FbKueKdNvSqcUns8qxRg4jaqS65kWyQowjBkvpNQY6Yr5oWKvGuFMAtQ",
  "key10": "55UJc3uqjmzLMkLL2xNN9mRnJLfLjRGuCBkCmMVJT3MbZPb87M8PUH38GNosW9Bfj1eBzUgp9fkYAiB3gQVCdpMH",
  "key11": "5rcCfjQsvBdfRu1B42MLctz1KVSPaBZ4MMxKMMtrxmS1xdEHSPWoH79iU6no1C9LADhAqXhaYFY6Gd8Mzz6cMYfz",
  "key12": "2efafQJLfxRa22LWZdTpBuxEiLjF5MsWpc3K4RNBVqQ2CzGw4CW7puKi6LP8ewfeX1mXEQxpSMNnQpSpaXULbdVi",
  "key13": "35KaQviVZajFd8kZM1jKd46sdNRQMAh8n1R9VmNmg5X3SAdRvSoQjaH5y9bc4tQLQwf7KAKFrNPQrYbkTRcYmroW",
  "key14": "3uHoYQEKD5qZrX33ymofQkMcBe2FCPQSHwsGmj595JhxFM3F61B2D56k63apw4m6bzLR3Rw5RuWRi4QRDRZRo7At",
  "key15": "pSgAmyJ8R3GqYPkX33G1G3akEn98iN5eSwEGCeQHwhLuiwSRczZFpQXTLiUTxicieaFiNUue7tEpVFyEqAnnD4R",
  "key16": "5Gn6mLa7cJJfkB2gcwb8Wuw3QrH3J1J6F355D6wyi6Uwy9DGYJjrhtdosdKp3Gwuk2v3CfGU7ByeV5TQDAcLNkvg",
  "key17": "2t43nz2E8FsFQk7XjuwsYdENKbu8GbdGGWStxiCFR7S3eRZPoeen8tTydTg3sCGb7Dn2BtyebPvLEwMtjfUbkaRy",
  "key18": "iL2VhYhuwGpYByxXZFSV3cA6aKmQFQiaWcmw8hedPWatQ36Ucsn3bWahSNmxu2U2JpagoobpnysQzZ3LJS5955q",
  "key19": "4kUj3SgppiyYwdrx5wx21tw741N465wvjTwdivi7FpkGqVbnt1m2i5czGcQFBdYdR8PbShdFD1BcNY5DUr4e7xTv",
  "key20": "5cDapwUBgLHqALHGDXQvVxH51kChER3vmPZKBmxtFHTAN4nZfhPz1FmHJvpqyTgQstRBQh88azn1zTAGXgSRAW5e",
  "key21": "27VzpE9tigAsMLf2rrCjNYVpG6VeC9fUSDgBij3zxFiZCVtfsoNXrTZfW49bJTWArzwCjbcQ8ZEcLoYFWfvcV7Yt",
  "key22": "2fogazTfFiqtTth5k3cDrj31zUVNPswcZqhb3TvojQmASuDjUFgLKaRMKVgpKg5Uipsq8aV2RyJSpe1PHz4ZZLW4",
  "key23": "399UXudub63KtRN5a1sMGJsLgHP2WEzv7Q6HZX9VyZGtKBkDF2m8X6VMDzREZx7Af5xRHG5PtxHQHX4eN5s3pQkn",
  "key24": "2nWQf3jcSFJQho5vCC7hUw2hrTFEe3G21qbpDZXP7M3Y2DzqVUHMLtFvCWrbQoKv1qY91RjQZpHfh23D7ix4E4K9",
  "key25": "UVT3skyLnMSLU8PMBPsUgTh67qrnDi2w6pwPokQNe7oSRkL38dFKZae49zi8FE1JyNiJiLUvkt9PFkET9EiDCcT",
  "key26": "2NxGFuxKEsikGnBQA2EdMjpd6gYfU8VcwcSmwQazdP9eE6MSbbDyMvGbQ6eFiK8JKjExiGatcZvVUECsJ6CuWA9R",
  "key27": "4UfgcBMVNbMoywQ9xuUK2z5UjSNfG9A4VRDTzZiB1xtAq6asSRMupxfFGH9jc1nhSkRTK73cYCbBBqJjfGxXKjS4",
  "key28": "avpFxiJGTEKyTWeFH4NVjdHPJektGKnFfMyw1FtXRMqftMSjsqQ8nuCqQAvLyF9hZ7tQCNc8ErrMX4KGPgFa2U3",
  "key29": "3RqNyTCg1mHicRWMZiiJQhhXvULMynxvFRuiZbirBstdXThmWb55NrodKSykK1g7JoXjvFLQ9JRK7bSpT8MCEFkK",
  "key30": "3o75cQPQdsiVhCtn2YhF2Vcjs7G498iTQACKWfzR4kMYGDjSuE3dmxBgKCwqizLMrxiGqc9xh1prZQPuYwAQxHoT",
  "key31": "2sU3nqnKC73DTcbcGv7eiHq7uaQhHAZCzNvt9zQw3QhXZt2AwsRUUdu5NMDuqwNK6JfLnjnniWtx4PQTi8uRbSKG",
  "key32": "4AGNVBni27VgxRZpua674pF4D9NbUKrgoSFTBWnhDD9J1k3HwC5SChZfwUQxyovfJJi2wZUUhA8vnKLdephvrqgf",
  "key33": "5cunCfsgXVdNGHWGr96mV4HHhUxTjSH1WhL7n87sGygNZj76yUBHqiZWMquMeLpD6sBTo38GZG3RFiBfEWGhZxR7",
  "key34": "5qHSWaeRqtygtgMzvDtXzPHHoS7RghhfX67cqMyDo98Mwu7Nz5RFgAA9hdncTRC9yun3t4VCWrsA9YMXq4gCA5qo",
  "key35": "4awoorVBxQT9hEQ48eHGCwwite8KfHJ3ptMYgPQUFwaqs3xXrc5sj6vyWF1MizCSeZfn8f1we5LqUPLCSX7B8JVP",
  "key36": "311v3eetRWZQgFm8r6unA29K4ZyufLtU2bG3bduKmSp17RJNVExRBiLajCxwEBwJmYwXpmF5eng1nqquc3tV7P37",
  "key37": "2fzQdmwfFJruUwH6gDov8SCeVTDvLapPciNsUJkxmx3G8ybz62BDVuRgXdXjjksUAA4K1DRFtXWJoCEtAxC8GS3f",
  "key38": "212qfYgmZimDAGrt7D4526TiRuB1AkBLdVxj5Fhk2tqYzgHfuHTnL5zfWF7rtuncRGDDJAKRNQuBY2VR9WpLjmED",
  "key39": "66VKRbwDhK4phHLRGEeZ7DPKsu3gQtmJDwKGYodaPnnSWA2LFurRmJUXMr4LjCLmZaBKquZmGMT4Ku42G5uR1Nv4",
  "key40": "4Bx74rDsjK6CsKPTHdiHBr6YiYWMjeMA4d9diRi5sATsMGPrawBh6odxBDCa6U1CLNS3xNPTAA26MkUwSnXY7C3Q",
  "key41": "2oBn14EKGBwPoFaJ2PmUckj97vSXNUz34bT4tg1njdpKv6x4gsgvbFBrgQQnGkGFERk7pPDFsH3vpZUBbMRaKVyC",
  "key42": "5B3ApuKNhbfJfuSvoJQxd435yRdgB9JebkNxbrhKoSXsnioeYaB6FU8M7KmRxLDJrYpyhk4xHHb2L2UK9zjR1GbU",
  "key43": "3dZVv2ykpwJqebpH1epwyGosjcoCcvp3RGXLq76i8dM18r44jDA3pPk3965qVtPvtkLHRu7Z7BVepHc1UKvz5Aqc",
  "key44": "3gRMfLQaDMCHcJmQQJ44LWJKzCcMmHkMDpCQoTM9zjdKPbnRF9CZ1nCo7oyRWkR6JmBsg4v2xXeJuiN1qnyY9QqE",
  "key45": "2RTAHgvWrvygQBSzyKZ76BXnrUbEjPmsdwbdWPiWZG2F5YvGUT9dTvrthSbarE8QLQFPcYGqX3VoAGXVAB6tQAE2",
  "key46": "5G2kQj2NSLVB8RAsHttT9vchsWrLUoeVEtnxLXoXd6WxmZCjAEf3Yjtw4tZUDJTvc4Un9FtGz32eFhGtPAa7ouh3",
  "key47": "64btxqjYgKaJL999FDNzyyDBx4r8jELVqSHhkdutnsW9B7yn5JbyALqyJwb6BtAzPuy4LzedzW9m4mUQccy7yvZB",
  "key48": "zArhr6dNVYNpezU3RgkZvGtLFCnMfDBhht4vgqQQq3RrKkFhv685rYf3Zk1xfQ7YKMJAy8rjH7ehFz3i3yncvMy"
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
