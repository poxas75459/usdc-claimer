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
    "4toKqtax2corqka22xnboZaunjErz1fJjE8cWYjaXRE26XZGRA6mb4ihqMe9viFeZCa2mVM8hHasv2EXabMh7E9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WwtVGuPNoMbPMx627mBnU1dgdvVdzvZHL6vxKSqUgkavGaa86Y5AB2Z9mLv6BhmNgHymVbozaBp6DavMeqaBsG",
  "key1": "3wLpiWpecPoTAZnCftnB4C3Lb8iuczAf18jnH22i9PNnLtPzoSgyaXvRQWY65RkqEAbkKweKfefEsPjVTf7w1PrT",
  "key2": "8xnMNAhTyW7mkHWfkCkvoZMtmvXyPQQWHhtMaiv9cXmjUJTSgNVqBLZPrHakmYFN4jpjufZRe6ob8gDipVm7cjA",
  "key3": "3DrQBCyjWVTL8WonSE9A6QgZfJuWSqPHvXsN2W4FhQz33UMUJBeM8earTA1c9aGX6JXWQ4NQh3vDje8DshuECX8q",
  "key4": "3GoEs1mLUF6qRo1ZHy2btQnwzFdMUFAkpQiFJn3YUpQ1TQnbEek3aeiVDevcCngBDVJs8wCU1sPTwS1kJcoXQt91",
  "key5": "3h1XokZPqya19MawJs6aPBeEC4uzGeVhCUD7T1cY9LLkT4hDgxuUBEPCYJxa5MkfEn6F5Jxo8bbGSGysHpmZ9fZc",
  "key6": "5npYLDN6bX2iqdGrcms5fZHfEiuJ4CDEboAjyYNyiD9S15fzaHtjabe6XJwfFHknJY5xt73b53da6pZaTKfmaXkx",
  "key7": "3jUz7ydWTi2x1SeybLk2STAzom8HaeUyj3WHQH4bUtsgF7oUeczc27MW4imcoZ2w8ex4okF7AD4qRMvFhyVCCALe",
  "key8": "72q7wFKW97rtwo9AxF3zGe4fMT9aRynNC2Qn3D26NreSc3bWy5Cjt917JfATAr6p6hmgtxsaoUzu43aK1sjGMgi",
  "key9": "2bcsqacicGmdHA7To5dTF81UDfpBA8zevqFZ29tT9vxEp41mEbEAZDFicNMpw54BN3yksF51DuxtLRL9QNuFgqak",
  "key10": "5fCMq3D6vpAecgLbZ9kE841rLQRASidouYwGcJM7P3CJwBSfP8DLCyhmt9V8WaKDbWknBiMBaMyxRV1ZyT91kifd",
  "key11": "RVnMuuuPM4He9hVus2axwycURafszYZXsH9ri9ogfdRQ8QbQPYiyxj6y3Y7rYbqaA11Zh9P6CM3XN7MV4o83mmN",
  "key12": "5DK1cH6V87RCHDUGzYQq8BsQmm1s6YHg1A1VGhCMAASrVvxYUJ8qoNyhH4YCxriuJTsrQNEKsP6hJpDNDHvc84XT",
  "key13": "5T5PJkVG5fPGXwwyuThmCvBxcLBDzLcWG5Lao1w8zipN3EnXedWbHWjXtYhGsaxWdp1hYUUseKbRJTSATSZpJivt",
  "key14": "2RqcgpQkJ55MFv1rKBnJfKtvfyrqBFwBEzKMURrTYe8A6ySaCcLiQ2qj5uAQrHyGtdCqzzXn5yLpoETMwBDkzyaW",
  "key15": "5ZA7ZuQGAWcr8LqDegaupUYaXFrXiYSHpLDTdQa4pifHXhcpgcM1GQummdmMDByiifHVgdrbne67WfzdmvuJ8EjY",
  "key16": "2tWeLb1yj47tVowP1T1m1Q3z6RTRCUC7rcBYu4Cq5iNKR7FeD5TCn7EPjz8i45MhpEc7j58wSeuVpGoY9KrSa1ck",
  "key17": "2btqHrJ346kcLtUger6qczH5YS12tfwfipKgsJ9YpAvNhFRqJd7vPpdHBq65PaK5vvKz3JMYjGbXwvgn4S6G63S",
  "key18": "4cfRwc1kvwZHv9g91NMWPo7J5322m5VG8SvMWnKZ6bVYAy3WK74byA9XhT1Uib9qujkytFGoLYL2Z2SNEjXd5Yen",
  "key19": "5dgqVDiHB5rHfT5Wus8N8T6jri8D9yNVSLNd5E1eQrLh7u3S4SAqSWpfR1ZFAThwqDFmD9SiwTniNUy4yDFZykno",
  "key20": "4KkWYZYWq8DNp3PYpUt4SdHBH7FfGQEuA4CPxLsSfeuaFTT2K39YPVNnnYGRek6NdUYcNdV6kD3HDePxticzUxnZ",
  "key21": "5bGCACK6Y6Vnce9txbgxXUZUecUVo21jmZ29ngTgKd1KaAP83g5yRSjA82JtaSFSkyuXHxCDJwAfM6S3F8qqfmnh",
  "key22": "x98ros9dt27LYBx3yRkhWEa15sP6HfCbb11wXuBo2PiR7mJQjVbNpxFMzQvTHThRzawFVxea9Yrd2ciBsg9JKum",
  "key23": "3Ft4Ykev827pgUYf6Bax9eRyMoBsVbphsj62Usj9EyBiBsfPcHsjrWYAzvNAkpfj2LFpSfbA2BSgNqfLu3srEBmv",
  "key24": "GotGcpxRwu5Hwa1DnXvY7Jn2s8T35dzm3AGvRRz6jwq2BGkQZdAkUag54R9P5enZ3AT1c7M2YHj1zXDnbfm65P3",
  "key25": "5XWEV1ttNhn5rmSCsLpHqVVs5sJDGkGGrURq5QKsKa4Xzq1n4ypT5g97e6YoGzuotKUprPqd8B1BNgnZkq3xFsZY",
  "key26": "3dazBUK61HNVJudS7iHjhugJXg1GDtwm2o6mSSRzq4X225eQ7kiSYwEqoCivQteRyB1fFSui97ZDYAy17CrTgM65",
  "key27": "2yyXHh5RBer1nFSp4eo1nHbMdRHaxsbJRUbL1PQcHvtktvG4QggQUeQJYw2ZGBJTq2p4bzDKndLrtdt8QvHkvy6c",
  "key28": "5vPq24bMFuBfMsabdQkRszzY8LMr5dEcG3yWPgGfVxxtCX5SYqCm7Vi2CXVLv9cgT31NKCpPRXwT6MYvnanta2UX",
  "key29": "56vGgdUZLowec8DqQek7EaQNJx6vcDmxiFHXCbsyiVfRxhaV6g6jLonvvk4JqfwytvGYcWAa3UxkcujF1HeJKpCg",
  "key30": "5SN8CwhdZQQ2twXQbnvtYRuz8UgkZfhsDxJk52e1KzEPHF4GNcYFpry161dgHFEbW894A1tVoTb5iYiu1QfP7FsE",
  "key31": "3e32FkvevZHP4rabhYgC15vUgL9WJwR8gpsg1b43jLZuPTkNNQiPs1h73c4PWjXXPPwNWMBBmXqbFvVkTjABY7yi",
  "key32": "6ahGQUAmZ84K6T2RRrjK5qKfPXQZXRpDkjKRhQfjwyx3fmqMFpmyc12AZehSRLamScutZK5cv7bSitt4C2SDBs6",
  "key33": "c547VJBa5GaNoMPediJNS5iZApQf7Vc6pzQ2izCnKUrbBSVdYYVrpm7JQkhdYqXhoX7MVENjLRjTY1C6BqS5mfU",
  "key34": "4uqoALa2sHthMRtUYU5MN42oGeytgPxcejwvouahdg7yCjAAoetCcKjm8mgzqLR92Y6WdAkj8rTFNq3gur617PeG",
  "key35": "26cx5WTGGoDJdcAKPv9cr368qfAwCa66sk8ZnxmXx5eWWwSQAo8C24fLKhG6WdDABp3BSn8utPztbEKKyZZRw2xf",
  "key36": "5Jge5HpfApAg5SNk9WDy2ia6eD7GNcDykK7nomx9BHkbe1YMctzo3wdh5QmUL1nfA76Wu4c9tnzTG2mKMet543zm",
  "key37": "3E5KckERNRi8pWkvb9A7NMYRrJYfYHtJQ7KZB1hoXEQZKKGvezr2h1y9zzXvnJii9RqdJ81TrRNW22HnJgVyUWeV",
  "key38": "4YDq6MQ354tKHoV6nALd1RFjYSkjufa5sqG4M9x726NnQEHP8WBMvpLz4YqVANKStwNG4e4D4dmtmteNadAjRfTV",
  "key39": "36heuv5z6hDJsd8VtjbMU1ePfbiRyDs2kp4aMV5touZq4mcxHwWfQQvwZqzfiWbm72KgUCRPYirHTMQgcDqZuKLs",
  "key40": "5myTFTT9LUJzMLoPtVsX9t4CmFSDgX2NXwGFH9YTA5jYRWjyzT6y9qJktxbog3C3K3D5cbyiGNCFdGDM9dRRX7Th",
  "key41": "5Ucwkv8kT2ZGtStiHGoVUEvQBXzonKU2aeJDkMhaYCb2pkubikPrRvDgdgo6SF7R7AMZvYFPHmEzeVrVbWnikJLV",
  "key42": "5K7MwA7GEwkuUuoGsEvJkHrT3w9RR3hcNVXjU1TobTZR5eT5ZLfsKp57xs1rzLajTHXmkF584SPE5s5zob1QuooW"
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
