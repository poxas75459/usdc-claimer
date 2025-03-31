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
    "2fSRECpmcGYkE7H2YTRwSW5kRcETuPjJPAVjmaV5X9iNGMsVnE7R3pp9tWbiM4JM4c6UDVJjZRy1BKjShH7DiCvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1Zg9wgFhy9NR3D47RURMDJTFWYFma5W2NVkBErJvcL9D77JzGk3gUQQeJ3rtgafFujDvn2wjyuQbc6Q1CSQPC4",
  "key1": "4AH9wVc7rvfUuD1kZwUp1vebJYDSbHUnbp8DEMgy6AachUSswHvHSmQYDNypyXd83nu3cR9ZB7EaPwn4EQUrQmQo",
  "key2": "66SL2U413pDw3bkNPhzSpSfnfXTcmij63T7kaGe8GABex4k8zxqpb37R8jL7aD5ckZeE7kPJj7ZpWi618kRXJQ38",
  "key3": "4B8XKMCnXcw8e7Dj6ZgDcHFzjkfLdeRcyac5a6Q3PFZHegDMrhCBBhLJJ24rYjt4giA146xXbVZ9tyCgKRCvN6US",
  "key4": "3moUw4mSAqRq3D3m4xCbYJoYEcLYhUpcN6QUwyXx6gg8C54k4uhoJU8mRaRiPdEkjw1zai8hdmTXaTT9ejsoTc2g",
  "key5": "3QLrpSaYTKgHKotnWiJzAq8AUy8jC59fTiNyYwhMqmkjCd2oJEt415Bpg9WqDKokJ65z63N8b1PeMit79GhjrSsY",
  "key6": "tNbCF5kn8Ss3TtcWYGPLMmywRa1XHiLLKoKtxhcD8XiuNRNeoFR7sgrL4heH7Bae2N2ZaQwMRWmA9cayDC6cm7W",
  "key7": "4dFq5poojTYB4hn87GAdwzy5rvo9AZsp3jd7C9mhSivv5fA6TaBBiZ2grt38AUSkbQuMuPBggMfZvSPErhMFMys7",
  "key8": "4gzNrwTmiHTsVyEcqpDaVhvaQb9AfcK7LuejPNKMaPJ1rMdoaibtJ77SqkKjdEm3dkEZ3Zw4vXtMi54tyy6TYHa7",
  "key9": "uyuoPmxQ6V94X5UPS9SnC8tmZ3d8edjiFbmyNAkCrKFD5rVGiYVeDpYdPgPdtxSrqwte3pu6NXufrafRe98RsDj",
  "key10": "ye1jUBcZsBuGLinLvzz1BTZppMQRSXPZ7B4dfyhLWkAW6usxBdaWYmFa8UY8XZZU2c8dGvC1cnahykDpK4xeeiQ",
  "key11": "2ho4fUXUbToc186jo3rqtHtMiSrrYqdoEMfJyJo7qyT4KbA2c1CMzRWvAtQsF4rrgWkqmJdwJRmCcddSZGATCUGq",
  "key12": "3ko4fNjXoe3EbweVMeqk9VCVkxw7JcHqi2zKPT4CYmoV4A8kS148o4YSaVkoewWs8jYdeVmfYJpWmCtMbpeCK89J",
  "key13": "4JJoeKem3epbfMe9WgHWvNHSL9mRrTcKiUvgEPRWfr14EzTA7KuYeaNNLDLXs62RbV3Zr6xuQe8irWmWKht2Mc86",
  "key14": "eLACh7tAAjrMmrn9FZMMU7P5RqtR24icRe7PjEWN5KbfSuEbdPeTyxhxF1vKwgB7W3LEG7QR9NfAvCVd8Qhfd1h",
  "key15": "377f1p58eavUGAcut2rQ5fXx8zyAAhq6Cva6dz36nbAu7wGjPUyYHkFD47WHpReJibPEssjZEgAcppw4j21RAvHo",
  "key16": "56UbnCrmKKZn5vQk6QsxqwwhRV77Nh2bJE6efJdVxbL6nNt4TqW71weYvfqYvs2uL4ca1tRafRLWxEUw6EQzccEi",
  "key17": "8gNPYMq2UQauDcsHqTWB6aiYAK2SkhNEa5R8m4MPuykAMvG9pbvLR5E4DjaBevXTPSdxVacXMG9uUEUX4yaM48L",
  "key18": "4G5JZseuNhNqwKaktAwzUfRTcFsCUftpS89hH5wqcFV1bmuiVDvJwDEZ6ArjFcgtzSyfme2f91GpkTwyJ6GsdRmW",
  "key19": "5pZ81ax4n72dbRFsizX3oQXLXpREaxYUMfjwjxxZskEirG2Kca1T2GgV1FYYDBHyNWokzw1o3sd5G97DHiF3WQ9V",
  "key20": "tkaSUobfvskL23QK8d57XGR1yJau54ugbfZJekaUUe7s9QsTzsLbAdkuGq174nuzLgQVmpsrtqiua5tMr4b318A",
  "key21": "3K8avhSAELQ1Mzx7kXRjoKaf1HkQoYdLXMSGDyASPApfo8ppi6vTzGT7YFTuXFHnbxaZa8T2ggegnQz3ciWJ2n1B",
  "key22": "UwmZ3qfEEwwueNcHjAiudTnsa8uVMUtGeABswa3Qfh6JyCzBWZ4do8bjm79Xm3Lvfg1spCpPA3WpXG2Y1S5Xb1M",
  "key23": "5rLAtHGmBpzq2V15i1FiP3en4trJCERpJg9mUtZJQFqoFtvB3mFPJJfUJYgQTfuZYVeL44mmUcotRpqLxiVrShXv",
  "key24": "2sg31PCUqeU2aaxAKiuzb5HNZxiFDtkUx8eBddrbDyxDY45CT1bqLpqjpfcVsRHHvSeMQRSCJsW8iAaJK8Sg16aJ",
  "key25": "4nVyd31U1fRwtK8wQp3gkcXPSRYLHV7MeDZvt7DGD74hhYXYVuiw8Q1mCxAVyhcHSzxfhmcjmQDVhZc83f9gKmuc",
  "key26": "4gcQ2NodCxFYx4sAGb6co3i8gxF7zMZukr8ZirGJF5Ebyr8h6nBzfBBdq1AWtaZrJrhRKHNtizxuLzXmsUySHFb3",
  "key27": "3gMQ8nvLv63DMLLbywukvRRyV5htp3ZMFR4ngZQgmD2oPN57BfNGbiBmbDgJuu4iGcHvQnDVz3rLXy3YmeaHE4bw",
  "key28": "4bQiHDPQoEwkErVNW8rCmTWe2561KBiybjua5uYn1KCyjHaHK3UGSHmR6pdssyqWWmGyxTdDHZswbm2ezJrpwqAt",
  "key29": "22qyPUAx6xVbdkxZaEPmxLGeXi7XzhHBiCpMHFEC6aUCkdrXBjx31woauFxhDZ7k97zNwNaHPRfvYpJYDe8bAywk",
  "key30": "5EGGthapjydQcKystS8SfsvUKtZixsJV9HGJtmX9GVaku8SZmqMY4PC7xzQAuBMeVgeQzJ86FFDC9Lx385XvEPGy",
  "key31": "2Jr3W1BgmLznFTYk5CHBk6RC3u2iRTdMcKo5eF7CXRQTySxrpDyTjgGbX4nrxrw8ShnZLKJhe9nQ4D4Ro6hpJS1R",
  "key32": "5w3Zx3R8WjcZtyGQvQ8RWsLrZKtLJF7ZbLLv7Rxx1EdZUenC7ydmybTWmPKPhBHquKUti7abmMzXYCw4duTcgYKi",
  "key33": "64XZUR7joStYBaYfLoTRn3NN5Wz8tazqTNKPtkArT2GkukNgQA84XWb2mupd8Q1opYEzeYXpwSuWCtAYqo1ieL7T",
  "key34": "4HSAXyispsyMUJRb2PfqdP5Erj7N4J2pQmFbHwNZnQR1UoRbboryoBAK2B6ZPwcS1X1nPsWwzFMcQEByt2RdDxKz",
  "key35": "4AiYk4jXMHygMRzasQRA5WxMxVdyykHrFeCh8pfndxYCmucGtkvKt9hdc4UtitDPRdhfShYhP8zECX9ZLKrK7UQ3",
  "key36": "5qnuX1eB2yZKGrfYEtf42P5rSbhAVUuZ6PAGJmgGN6iUNb1w636ua7pxZmaoZmBpFLpafq23teJk4Vzvqiwxj7ax",
  "key37": "4BRoWeaRS6PKkgHnAiHWoucJsbLz2MJN4BCAUfHzqgZY6DHoZERovY68kYRsAicBS4MtqHR8mS51Fqr5bxDw1zp3",
  "key38": "54A6FcKU9Q9vfzKBYZ8PfCbp5pCLLog7PYCT96V7snnqbyru5yXscLRd8enkKE7NLEoDfdo7aiBe9uNfDtCNtoTd",
  "key39": "3sCVkf8ewbaDRoiTr3PVnoyn4WxbuphDqjzNXWhUoe1Fes3FbTqg18FmBTL4GiRzrmEzJ54gksBtLz8sMgZBrzmZ",
  "key40": "2sunrUAf7BFaZyfo3vhRQPkpFgAccpxRcYKE8Fdc1AxboJwswVt4qbPAi1vbj5Q4CGoxDFsrmQERWSwdAKyzzo8L",
  "key41": "5D8G4rPCm1mfJpMsQrk1jHrLd8VQSzCvEiSehXfqAbynQRdnCxcHSnZV8S1DmvnZuNwS6yZhpRervYMR1qbvVCMJ",
  "key42": "3gs4CuBPDJbpXe6GqhGBt6XxQTMKgrUEn8hKTk92Tppiq3n4x2HCQhi9LHgkG66YqLSHSFzmvaNRPQqLDwVhgqbj",
  "key43": "3i7Y6Fr394WLBqwAnkntSxiR19UivP3LJ8VVee779QzXLgZk1tCgcnK1tyKDZheZi19vT1fzq2BHx4Q2DJvJSzR8",
  "key44": "2VdgB9bQqxLz2ah5syRqBY9Eo2ikeXZdPXEZeuXtW2aikY5J1zR6yJcTNsd2haHM8WRxgDb76bpLggrnNWmG5sx2",
  "key45": "4KAQV6XHjbaxB5wD5idnb5skJyzqhkuczTAeBSPTWAHNTkWkZxei4H2B6BxCJwVNVKHsLg7psHtRgcaTitw9Uwzs",
  "key46": "Ssg5iw6rmY2APSHVe58o6Pcf569h8XbpVLdKAihZfGDqhmNCiotAXmKw6EqqRFokTEHspHFjJQ4PiVE7Etz6dCf",
  "key47": "4mVhYxBinidumLzYJhr1TJWSAvhHx7snWJZFRzj113GDL7VsY6ywoWyea7Arj1uaJwL6ppzg3fMojgqKAVLvZC1E"
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
