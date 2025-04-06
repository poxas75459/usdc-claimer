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
    "42V2rTBgqzoQxUhJ5RVj7K6u49Ls42vj8iq9ReHqhv5YS3zfRo8ysGkNJn8kFa1uVwanvEBE96tKTH2Fj1YeZVjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1uJW5JEt4GnYgo3DHuZveNmi3QfRhpGcFz2QptxSqfFALqyb6aLQj6jhsjooizbxz5REK8xaT4rkbtQDmepwNe",
  "key1": "2mKUePGtXoUHbnBfx8iYbEej6ybhKgNNxtsth9nK2ZVLZsC9uekJMML3pghEkyDpub1mMvN5He54M5DKoUyKhdX9",
  "key2": "2dm3u34PmxY44rL31ReHgHGZjHcpDLKW48uqixTtCCTDGkNPiGTjAP7naX64eZQV9bCwz6C93vKuzfRsyjGnt7X3",
  "key3": "3si4fdVQR6N8bvNkuvooXQCdLbkrw8C3bwmTUcwUFsxYZjmR7gkv7VHTgGzhgv8qyBatHX9X69GYUmmB7mG84ukB",
  "key4": "36b3JVeAB7Tv76sFbvWWsCmHwT7MprxrySZ3L7xuuBeMy3fk9hUCgraU1JCSYhLdZkNb21rVEoxxTbSzicsTUvZR",
  "key5": "5qmj3r8nwfQViWoRKLoCYRnMAiLsLrm5AoE12YSYHSRiP3yeiXcWbxrSbtAHqRoJbHhedWTvndeQsa3CLWk2y2WK",
  "key6": "2ojFbDAuGFdeRQCw5h4MEtoGja92ABTzQXPYBNcuuZEf2ND7csZcpcv2g6uCGwvTpiqHishPUVMxVBujwpddLqXa",
  "key7": "3o2HmATqmZg33fUursNnsKRY7ToK5TrsDcYvorBaCEbhREoFsY4GZMJ1JBbCdFzsQ4eroszNj8J7ksDAVUTmp3VX",
  "key8": "3czqM8jrWMSjES6p9fRG2nThX2ZcgnYfCghRKdHAcRBWeGgkKiS7XNbLjNUJKCvmwJkSUyXkjJ7tKpxVpaxZGjgN",
  "key9": "5LpuE3QVwBU6TrxqiT4Tokc8JUuYLtsVNV766yJZ7JSD9t8hVohdqVkyu1wGMq2pFbDhddpugQmCvBGnHaTYztA7",
  "key10": "KVQnyZecT8nHQAyaaY67Kg1wChQBht31HvyHT6Fn4mzVSEVh6DCuDYC7KEtwwB58n6HvvG2bUy1CVjuQqKdZtcU",
  "key11": "52UYCAANpWoFAfGdetcCoCar23xKto5WEGvBUX6wfLrW5wRQLEutUMNTTxYtUdgLUsFiEavrp5obQ3Hv3gs8EMhM",
  "key12": "5EqbYbWmipcmNRNRuT4aR7pGghxLjM7bSkTMhiU7HyhmdHfMcZnYQYZAyWd2GYqigRsPqobTW9YHJtVUYy9zVb4k",
  "key13": "3GszyrBfAsixadhGh4GP5BoDkhqA4hzhNLEFyraCae412A2WRLQZ7vGTMGCetuCWfmXdHj9UgBQg45cPkzSwKPz7",
  "key14": "5gwxTdc7WGi33L3g1PPJhjV3JWWBmoCWKwooVwyR3B8GWcvK3Q1tkgitHcSiJF89XoBmaxzKbzw8B7fQGYQKdGYJ",
  "key15": "MNfzB6Qxrpemtnw27PjAaoWfHKhPgNdZjP1ujMhZwqfuWhB7HS6q7vDDZgq2x26TXG23n63HmuF3hop8J4KtorH",
  "key16": "2nupXe4gbNsqiBVCf2Zc96ADrVqQLtCtdTajEKpeUmg6P51MsWNQxRaSkWAY1B6Gg8YMj4twvJhUeprJWxTzWpJ7",
  "key17": "4sBigUBf5ySv2ELweyZimgpwv5eaeoQD96B44KAFCsPwjAnB3sxsPpAytXMMRGGwzMse6oZ9paZx8bb7pSkMQywP",
  "key18": "2kysZy3WZPDEv4nXKonWYhvAeeQ1sip6TxB6abWSheeipkaAbwv36amcbx9doWSShLfVnw86MXuL2zEKaNxZGsAQ",
  "key19": "5BVfj6dCNWddRRRDSuijG4y2bhC2WTFiDPgLHd8QpXBWZMMPogW3qyjryMfV3TFJu2crEJJ6nbmFh8aegnkEcaw5",
  "key20": "51GNofgyzqfSdu7ry9wXue4qdD4KefACTHkjBWFDJC6s665L2hv23b38pChoSRrgd6pnUqkWiG7EMJ9aQdzQ8kD4",
  "key21": "eFgVwRGz2vnLnpMSCCcCJ5dVzvYyw1QPCETiwMPy9vM6SySsHjPXx2V8vtbRdC7EyrmNp3EFSe3kENXmxdVN5st",
  "key22": "4FZGmYanJDxhVHuyzJg2k4TArbgVikk93P2VyUB6g6fFrMuVfkyo1CJT254P5UnVBYup7mwX4jChS6T5ujCi2f9F",
  "key23": "27nUeQM3KhkvppZ2ZvYBE4rSLF8hSgWe2cPtBR7Kix4TakTpB6pVyYFSMHYicxVrY969MZPbnizghpgnmghiHR3v",
  "key24": "5DBh6v5hqqEwr7nDnP5wM7Apq7c1D2JGiFxx1Edof5xqc7WrRxkN7SotB9DQd4uhWsgcKvTqznZdMA8ZP8C8duFw",
  "key25": "L7N6FeRL7udyUJdqthkZ8tJZ7c4RWBVaktDDNQZeV2t2snKsH2gENnrwiAEZVRyckjWASJuRZ3uNGf6DT7PMVJN",
  "key26": "5m5MUhs4YRwX5ReSwJcuMfLhqoXcWMsEvbKJGDND4ybeHr8oUxeaPL2R8WBp3nuBcMUKV5HdPaHFCKBEAfE5Yonh",
  "key27": "2Vnot9qG2JDhQDL4HB3f9UvxN2e38WJLvpK9mbZyJNNaQswCrys5KfryqR8RNgTn2QTCYX2tJeKN6tDDhS7d8Mc4",
  "key28": "55G1kQubbcrhpM5wxCCD2FXWX6vzopjp2HzhmbukTNuoxvoV98Hhv1eHKhgZB3X7Pkf1MzDRgLSz2pqfKNkKyKxK",
  "key29": "5JmrifKSPa98ZrtG1B84jAQtDZWzyKGGBgTVPLL4BGEKt6Zt9R1t9DUP2At6h4wMmXqQo4NuW7Ct8aEiBe3bnpAE",
  "key30": "HaSQTUxyqhBQjZEj5rE6skr56ckU7d2S3cTxuf11eJPUvgxGSmr1T1o3zMA9pbwpePmquAV4kJpj5q23zte163k",
  "key31": "3JrpCeh3WoDA1sRxwNT71p2rRzrGCrYYEysLuRFgoXrYHmgrXaVJtc5MbGXescy1jBc1p8DW2jMi2XELT6fntkGU",
  "key32": "2Gnttnha5R6THigAihvccH2XJDsfExKEiSNgKv31r7vQHdhocwJ4MUofAbJYhz7GUJuMCqZCLcx5NZKx9znDjGmh",
  "key33": "5exddgxV9heSge3jHsUSjADuAhrkYMz4Q7hcX7D58bg6degDsW8S1Hfe5pwrF3TrcjhWWQ8NRNaha3BDReeuoAWm",
  "key34": "5fRd1Qb2ZbboVivp1kma1AgjN4uvDncqxkt6GZvwQZGdDjH7xqbHYFsj7yY6rRR3MQeywgPFXC7xfb22NukvCLaB",
  "key35": "G12RinsDLEatuEQoC5fkPJvC1trviBPdsHCYdj5pJnkERgbWC8eCRPTaPjsoHHi2ADBQaQnMFs2VmnfpDvctN8Z"
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
