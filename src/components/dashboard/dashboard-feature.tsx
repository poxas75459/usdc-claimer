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
    "ZAA51x17bt3JNfYcpsqHzvNR9JfLvieLPfV9zwpAWCcNDVNrBCT2Sj4SirqeAsMLY99Yo4WUkx6JTAuiHYbP7Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBTfmctNKTr7QbA87yCD7aFZEE6AViMmradviZjbMLaXPoDDt9HUuP6aRbsaCZ2J7nn3p8V5ZFNQPwXocc1G1iV",
  "key1": "3eFxCwykCxHVvdQ2wDoSUbk5naZLtQFK5cFJv9ugz5Xfo8yxVGwVe1jNTmHwf2tYo8F9dbSLBcTVZp5F8Z8McqpD",
  "key2": "349i9GNYEg69GtzSCdnfetEHXZt6pvL1poZCz7ZMuAxUTy4zaZr4aeqxSniqyJwVNLCiR4LYw86uw2q1Ji4MuKe4",
  "key3": "5kWvDNd2Bb9sPAHGHokAnayibC1Mhvdi1tkub4pc4hyEGxocbUrb8wxtu661r4typwg8dbZFaNEJitD9m7qJoyoK",
  "key4": "2bTQJPdVTbvbQS6YNiZUgbhWqV9ztcAKou6H2TFnHnxRKSsGfYBcrawSCv9yMnHrG4RYfQphdvvVd764vZPWZ4Ax",
  "key5": "4xchQEd5jKoBgMHTYktDvHZc1pddaeeUQpGJYbg7PqDR7sycuXkC2FrZCVrEhjXhoYnihrtH2WtrUXK766otAY3B",
  "key6": "61Cux4vaTn6S3adJ9NPqbbnRquFfZ57v5FSAWrMYfHwRQEvhrjyA3sxRtBpfTEdvCmfiGPj8Y5LEC5J9m8oJdm7p",
  "key7": "9meRt26Fp9dPuoWLwwDKE3TrEcsYAHiHmRzo9QoosF9XAkfFwFPSyAdWAV7y3SAqqJ7gF2ZDeNN1G1XiKQNcf5y",
  "key8": "29DN7ajQizu1NvBtrH3rwaYRnH452secGpPQNHKDg9PJpHScfYUeepi4ax9vNVwDNT3vsBPb3r311hERwv61idfK",
  "key9": "QZybAq2xQSnoTuRmvswhQ9W3B3bqNA5CqmWLTmhq9xCda5uYKWyqB6uxtHPAeGWxEHycQCph3hmwqo7K6AwtBC9",
  "key10": "pujn9mAK7Fe5PuTYrax2PDaBuabEHwDYjFAjKtsbx9htNtmvTNWszqu1wUmMQagNnaWEXTugNLgCELug7KLiHmR",
  "key11": "5LdBKYcoLZLqSeXXLxM8zy7QAAayGQSkX5CyhFWNdFDE7amfCCC3WzLSSLo2vzwURKALeXg7uvQcyut935wjQATh",
  "key12": "5sSZQF5mQiUEh1XJWdvubLUWQhte2LDSaQNnaMqkiZJ3PUqKa1PQajVTYKZFivbtjCKwGiAxgCTgmfSbGpPWSPGU",
  "key13": "5VU3JWvrpXJCRvdU5EcSE2GLoUHH9HVmvMGT1eq99e4bg1szDe5FeBG86WDwEnaEcRrTtCFYzCQpcxyD5jmdq2wa",
  "key14": "2dyMjnUdvS76ijKxdG3GEf3mXjXhpqo7Wui6mYNGXMGtADWUMGkMmYFXiaaWKz4Qu7rxdaEx2YhEc97iyKPEfmpP",
  "key15": "4q5Zr3kwL9ZYuZL1BpbrsPVRCNXtS5T7nFQJuT9w6LkJuqvKCwnPVMbsMMHAeDx3kEXbU6mQnkt37Ag2Pb9cx4sd",
  "key16": "3XDVLNYFzKGJKE89MWH97e1hGm4mk35trvcz4P1jGG63hTP2FCAdaDzBENWVTr27bsmauZE8fyuuRa81kFgU1JsX",
  "key17": "2JoPrsjf1AjURHeBm1FC2kB4UaehPg96Ryrmq4vLSfg5KpKdhgG8WzTcpVQKSkZQJKLyE6phX5YQbRF72Rczpz5S",
  "key18": "3vHS8Gj2uD3vA93hjzzfV9qYZeoNtTzePLcGQ9i3RajexKA8hppXoFW7WXvWm7RDBm5Zt8VPxcikY6PCitYTfriZ",
  "key19": "42axt9vjiRrSTXShrMXXaR38qow3MzwWWHAomAfYWKb6gfqXTVQzezxaUFMM4L6eQWfCyMVQjokmCw9VaogsU3c3",
  "key20": "TLcMsSfZVnp7KBXPHzxGqPZz6EpSYKjtZ3XJ75i9uAFXa2yLedkNE1kGvVfbje2C9zhqfnTmmynE5H5b1wxngXQ",
  "key21": "5rWiyJZHi9iwNcQAJLA66yjKdvcEpc8WVLwvemxu5oQ3A1hUfTBnfUg7Xo4w39EfLsw4CCYZNmfVxvF5dETwxVwR",
  "key22": "5ZVJ6zNFydbLhHDtGj4tUSAWZ37pWGSyifmhmyc6Mf5UDvZzkC4niZuKcoypsXHtnwp3rV1mfVn8KESMkjRN4u4w",
  "key23": "2zXrkLcVMjdDTqWaaFZzdwVFosePo1yN5EuqSPG3iUn5fYdpNbnswRRtnQ63FHgNMaJniTMi8HvJ1TMJofxemWn4",
  "key24": "4V8N2CfbhxxxUSyqiEXWTYhrvFGPYHEz4Eb1LuNKXdhRz6tyKK85CWuvhrH7yJR7QE9EHUxHEpXP4YNLYYQuMTYT",
  "key25": "2mSaPw1FuE8pibu5Ka4GLgLYajyv7CYch8zXrJV3XKXKFBgoBCabnZDCAgc3ftjVMcQjTZmTLrKHh5DwEwscQfGV",
  "key26": "3qQoaGq1otQ6FEZcKiWxSR4tu9DJs1rDQziC177Lhsag5dZerRGMcR8rtCqHKJe5PMYGo3hkwQLBwiFS9CNgmEhe",
  "key27": "3QJr8cFMndFgvm9MZaQrAGFHLUf6qxSyPJZgsEtYkvSry9AMQnku6j4DMyRJucnXCDi2Rbsenishrd2mpz7hQhLh",
  "key28": "3dcUzZJTHscwjc2CPnzbWN5Akt1myNEXuCoYexSv77C5H3VEfw2qY8eAy3r6UmqzTNwH3NAaUknKyjwXTnUD98jJ",
  "key29": "5sUWSsnrfYd7LjbHXyRrp2QMSPVJYLZddAFDPpRiH6bTgqEbgJKm4dwaRdNhXPyJYcTKx73ms4nnDGVeHfSHLHSh",
  "key30": "3QXWjfwzdYKjZdGZLaZkaRcjdoMTGKwiGLojiKJtQ1c2VvXbyEVGG3hGtYQ1AQCyNXzaLwAvAL7imrnwM5eAV42M",
  "key31": "4TScSw3kDvUdDWZLzvjhfgdnTVSPNfr2nraFM2bkY1xqwPNQJhaWmwxJ1Fv1HVD5P8wuY6itrGttV729tM6JK4fk",
  "key32": "5t7LQrRhgrD9yNeXKmfh7dmWLBzkA4wPx82zvfBvUZt7D4r6qmDeBwkkVrE58DMcuFBn1rMUZf4xSEs1Zir3pWD6",
  "key33": "4BSvfyeW4oz2L2FmSPeaojEn7hvjSZ9MSeHiN25yWvUixR6pXoBdmNMhbXGbuDo1Muqqo1aZ16cB6Zj5ojJTE3SS",
  "key34": "4WRNXqGo2FoQQTAoaSoiNNSMg32umjNQXg2VMg3tx5TKRrLQEFhQNMiVYDHfCx5E5ky9VVUJFPVtdjJtdsD34H37",
  "key35": "29m1UTxMtZvgiNqJiFYUcrtYmMBfkTsD3KAhVnt7sf6YmhZ2sTa9LZaFr1X91mWZDy161Ud1iYi8NxzLU6rnEjWp",
  "key36": "2BGauzHmSKemFPnbiFgTZMqbu1zxH4N6iG85V7j1yefttEwssJi7K9VCFpJ1ouXf3fiTLWTHdh49JfYjR8bWr839",
  "key37": "4SYm5muKwZjW37wktHqjLgGvEthPGPB6mdbi2fJ1QH5VmJyMWLeybEDfG9BPFQehDG4ULT5gzjG2xgEAmceG7Sa4",
  "key38": "2aQqpSFadboVXzd9JhK9i2zhiXxkJBbrEB7wjTXfxhC3kNvAJmhy9Vx7npgTmRnDm6RTr1DEn8Reg1zRh8uLmTt3",
  "key39": "H7Co5H45woCE4Go4s9iGqkwzQx4yF9qMH7oBbhrxKHsf54s55cbXhXXhcXyKJExxe8CmA8gLMVFYmahuPB67pph",
  "key40": "4nWdCNC2rXgNuLGEqNQCLuq69yF14mDXFVgpiZx77LZNGNmNZ7ft4J3nbGMfRUnSFL2GDSuRhDbi93FSWbSvsx4w",
  "key41": "fs4SvnPegS32kftGFjUPHdSDBh9goDZvKaWqc3hhMEpda3XEnWwbqEGGM1fVbEeWQKNQVicVQ6D8DHKNefrNv9Y",
  "key42": "4p7zVYuvrL7Vgucvt81X46HqRHeC7nYcDat3KzjReWdaLxcrUHrMhfpUQ4WYRKcw7HZmumxR7g8osZafpinYaw7t",
  "key43": "4FJEEocJFZeT3AJzPhUCvvpWS58zFinGSsy7U3jxXVabSsZ9M99EfVcjv4bGYoYCYLPeZNNqGNBF45vkTgWjjRKt",
  "key44": "2J7YXXGQ6AcH9VzuL5T6RPAw9HaXbjb3VfRUHkoiSXVNxoUCcwUU6BnBGoUAkymLEsekyk8ctKMRyMWznf3n8zd4",
  "key45": "zzNxxf7crYqMv2HSHhAMKhUVCTKS61mfXGtk5m6RJUgpkZKfgLwijYRJqHGpizjD2G31M8vMbfaoYKyNaZwE5Fh",
  "key46": "3GmuRd4SXkFLjwa5LFnFSNPQjGYnDFCz2cm8rcta8ZSwBJrfJTnApZZiDW56qdEafvcSkPMH4mQQ1F3ZUd8exYqG",
  "key47": "4RkSvtWmvDTjLDr2p8cZfiEmwKeRxyAWPjmQJ1JnUjkbrSgmHcHysguV6iG3m72Lz5nJyxLjjVfSSQLcddhgLqy4"
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
