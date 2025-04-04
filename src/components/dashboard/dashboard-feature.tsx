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
    "5S2SzRmbUfuVkBBeGGCgzsfN8iBVrzm7tiCAFzRNhVGeHPdPyZKcWdPRJ3esiJxVBGttXny5DaM7rpz3QwrSKiwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtPTE9JB2Ns4ze3fUWuhYVa5VS41UohHtKy89jNkGV3XiPGT817qpaJq9d9Q8AeBdUFMKPuDc1UT3QNvtuKpeiN",
  "key1": "3wT8b8MczqHo1htCFcUs5WaccKKA66LeY36vJTe7CYp2dAeHdXXG4nxcLmArKNtnfQY5Xp9qScS8cetc9hpAsL1t",
  "key2": "24mrVeesSWWTANkXVUn3x4LHAwUvsmfP3hncgGbC1z3VsvNQeBMtqh3uyNQL8yNFJTxhdvd6wJjedT2gKKPT2LbL",
  "key3": "4v99yrBqDwc65pWjUFHnw52EmWhzN4ccUtcFdPuBUmcphNdfBoTy1UT9QEgrtYHk9tYW5m9ZCAoAZzKK932En1S7",
  "key4": "62LoR8WufVenejfnWGYwio94a9QnMSaxtyWPpjZSy7P4PNe5Z3vfejBd6v9bEqVFwGYv8Brvrzm8i6aQAH7UQNQz",
  "key5": "8SKck3nKWjh98SbLgewk4FGBLozNRNohK6vj49piBuQpewkv8pCogFpP27QBmetgJAY4sq9vet11e2yvRujXipZ",
  "key6": "3oaDZVGp5f6NNSH9z2bsM2xmGPL6i8LTN7naMKLnXiZLRZtSzM7nPkAikpmXtp7it5gjyfkgrCHtAYp7x1sHo3h7",
  "key7": "2dw8Gp7f1CoNAe7s7NK1M77y5rV3GHq8m5YEMxjLyQrPTxySpSQgUnnJYdL6MHXuP5h8Y7ZvSbFvUpaUMa9eVnEf",
  "key8": "39YgjBY3evEkXYbYiVAQwuej5VMLzbWvU29t1mL4anWxU2mjs7JbPmBNd5oVuNiT253iJcNw4SnB5HsfJURMABsU",
  "key9": "5h3EomDuHAJyY8sFNiaB7DVZKpvDzNJ75kedi344kUCCGz3oC1HYEWXPcUpHKoKZ14uZifP8RJricNgpqVwU5GtA",
  "key10": "5EtsxqfP8SD6QkFosj5xBYb69qNZ3fgx54X24MQTMFoJnsHTk7UsJjCvdZfFhvc9rYf19TJmY4EDxTRJWUhnz37e",
  "key11": "3La77AP2rBsKNY67kWKTw1exzjJVaKbw31gW57Y7hKoBaezmrc5WyFmbJSp5eU8n57K6DNChNEVtx6KSbm4W6fnp",
  "key12": "vgaVrJjtiNMGJVuSi2sE4Me8mmu9mAVtwjRQyjUKaoHc3cXLCwYP53S83fPmPA6nJJyD83Foi1xKULArsFwagzo",
  "key13": "3DhvG8TBvCXvUwLXMpDJdnjFXpdRB2WH6UHDALwQgeKS5fnXiW4y2gce97VTDAC8tC2c9rz4UoiSiESfBrwbhVqr",
  "key14": "4nkWd6FY8ymAB1TnRtY1PnpgTjcQgMdkPDgc9awp7ejkqU9eyPrzzYxiCXUzYzZeALcwWsaJpk3hyiBRd2YHxFTt",
  "key15": "2xgucb2guu2EVEX2ey6gNRDiT4jAkKdHx3qfWUDwQXLkh5W2tsBcVfYxfvboMdJVCfw2umkRNZoRh3FpAeFuRY5m",
  "key16": "sFaUN1n7rwjgWkLpuTvp24ZG4kraYnDiDva3w8jvqP6Rnj2DP5x1EsrQRhVG8Ldcb4obfBPPGZNFVthcVpHLWza",
  "key17": "3oVzB2dXQJq89KYAY7r1BbscjJ3w3qVpbvzfTQYVbHHcT3hgruEw575rmhhHacXLUEcSY3oWeEokj9XPtLNug86c",
  "key18": "4RccXESBnDVS2PA4obp6dKW8mEZB2EqwHRoo8ZcmXXxdPtnY5BNAZxcbA6BkK6qAsYyQ3ixvrUc6nZqXQ7jnCkxE",
  "key19": "587Dm8BhoJkcFnSYBgB3kq3zTb225fbmhTWSoeDje2UyHigEdSKQ4DFW2s6NozLYeru7Hs1AzVJh6N5nxiXwBN1P",
  "key20": "dxVD7kThdbdofyCsCSUxYpCoP4yA98o3b91crt2ES3ihhAzWZY9GhgTvngYWvpnJiZGMBhqWGvsBFnVDqpivaKj",
  "key21": "44XzgiWPP1bHDybfgJBQbiuLQQGJJMx8k3kgvKcVtNLStjZyvRMx6LJCf6wa4z7MPxhDKc7y8fAJq68pKrUdNgzT",
  "key22": "5UCXodGVccrsoexJHQD2JkNMxTmw3EEUVsD7HnP9zZ54vgBdu8Jka5WPNoqiWK8aQeQAWxjGqQKivjP8EEMax3bs",
  "key23": "2ATsNZEhgiT3DWhBAdoGVqz8eYAvoTiY5ueC3HbhWZLWP4hr8EzL3YbFjHSAUK8nkA5nmq9EP1zReL2HdoHdyTGS",
  "key24": "4XvtivcLTiZTWs4kww5iBvfj7YC7h9C4i8qXNgERPPc3oha1iFrd2ufV1vfhB3hFFX4hAcTA2oYWm4ybmhYzyR1C",
  "key25": "3yKCvw3HKbzprfGvtMX6gH85bu9xejEPtSyeKkzdz32HTcfSvDM3Lfqg11H9bAuWYTV8PuCaVnK9RvqrhjJRveeY",
  "key26": "2BLZWwFtAHjD9nUv7PPGjsPPUm119FUM3GjbjbD6AY8Y9gFiUoJ7aj5at7LCXjKVZxe9ssfLNT6PHXjvR9Fb8xdf",
  "key27": "39bCgv28WQA1RNULD35oGVpLSdNu7LXWo7gRW2uYvs4d6a59QApPoZT4VJrsVnGp6PEnqB1syNKWwGqmXEcrRVn2",
  "key28": "2ELZD7N43uPYcW3rRmP7k6Nm4VMknxn7ZZwg8HDH1HNKonuhB4iBsXpvJW1D5qYcnZ8qXsyinVkTc1zg4p8QEou1",
  "key29": "5BWto4pNrY5umCxdkEpuctiPshAByBFCZvqSEf11D89x8avPnk13TEzw4yAhLUVrteeRnL6QbBSheARTAJ81NvUR",
  "key30": "3eb3usxhRwQR8Yg6ajvHWVHc3GAFRVegjuCmCbRMHa7PsmQ26DtPAS1pV8SCF8Xn3gYRjMA3c5jmuxBvoXbgvBmJ",
  "key31": "3W7fj9UBobgiRndwbfJwpW5DJCXRUHYdtdgzik3PeDquXVKzed3KgVwGvsw6Z4iCZWZ4ZpTJZSprw4SojzvswdMf",
  "key32": "2qzbdemAdeofa9QWGShkzvVsWn6rDBtneNVG7UUsiwGaMu5UQTCLdUmUMWnPhHQHpzinYHDZfkYuqukm6VZG4hUW",
  "key33": "44EMKgBcoxsUUtHtUcxrsSZKvC6bHx13dFASfUsGD6TNgpyj7B8Gfr8SH9o8kQzHYUbHdGe47KXYrArJzTjnuAaa",
  "key34": "3MaWB4rwoTg7z2d6UDqaSPSmS17kQ96iGVVE85BfEqqW9EGox8vjSyfrdahh3gHGAgGtiJuMeMWgKAaw72ffLzbd",
  "key35": "3PWg7N2AFvnBdRaLxuYxMQGXymkHJrGZj6H6VDUPyTuKeKDkfmFkkjBUVx9v9yNtduX7iYsgfjfKy4ctQ9Qh5qdw",
  "key36": "3uNpdn3VbW2bcpkbSPzNtj1SwPZbXd7XHzZKpm3jXiaLsdpmNe3zfFJVM6kJPAyW9kgz7RiVTeRGoQ2iZ7FBahc",
  "key37": "3LcdbUXDNocS6KVuhimTutPUjDALduTX7awfqvVN5JDD9iaxZFMnsM5xSvJKNtbsW5ny8sJon5oKqkVDmWE5a7vA",
  "key38": "2NdSacfoKJ5mypEAAi6s6pNHVurcqgwAR8UxwKR6zoetfeywJXrqnjmHsKCndevJQTmypdrJQgTLAexXELvt61MP",
  "key39": "3CsDJV2L5iQwodr7GwAZLE1ScmSgVyZXZmnsJMATizQUadrmev1Dr38Gq8XLBPbyYrzuREXcBaq9WyEzKSRG3L21",
  "key40": "26CHRJCe8yaap1PhQCwxnLXur2rUNV32szkHKTMZiHbDofjrKSTx65pikX9YbEtprVaWnuBSeKTmYubm4hbacq9z",
  "key41": "4QeFyaWNZuHSQYRQBaGHBuKK3kb811EpRQNDgDwWdsMRsVrZTuKcMYLMfhAXjqACYFnaKvuepwfei31fEoWoXtoc",
  "key42": "5MvyPEtLPW6WQ4NugNYxXGZuThicAsThhgZatUkRsBjw3mLxGXappdg8k7BhcZ38nanxQREMUYRRRVpgopLu39vF",
  "key43": "33ynrnxEf5qJ8yxi3XLBH3JwUXcMag1X3HvKYE43De8StxCpjHSi5cB3THSN5kz7H6UaTyZvhRtKy43jSV7RvNZx",
  "key44": "4rxSdCLYkj1sMm3PCjCTFYTeMUDKic7gtoP3TWU5QrregE8Auyd72Z5APQSxSUhTkjJ1NEaEFNQ6GnrGKhXDcWbq",
  "key45": "2Mxe4Caf7kfBJmpdQQtpy12emNW5HcAmjCsw1eaYR9e27PwVbS67pwuiYyY4DGTmb8HQJdtjQRpjxvJ5qxmm6R1t",
  "key46": "5rgvHV8WiDtrMHbebPSHhYYZUrU4tG176E5KLWWZVXXaswpfqE3NHLyBd9sReeSC2UkXGCcrn7qPhEWTEycTk98U",
  "key47": "wGgZeZ6Ta9RJAjVxdj7be8LfgvbpwY6d25UUmrjVmBNt9e1PpN52RB6Nixf4c6RrJVfHFh5qvfdkSiAne7reDYQ",
  "key48": "4c51tcRGFYJvG1XThrSijfiWVNPhkA5kbuMdunY4BoTocF24w6FSMqsYA17253JTnJwGsTWuMekQTjhmUPvJegSR",
  "key49": "5MsURdSVjuZXWV3k4x1NTPLN3o8Ybg95xEanLL2YosVcn5LRhRvdewr5Sz1hREQQQuG5M3gkMF3ePNLFg6aSe8Yy"
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
