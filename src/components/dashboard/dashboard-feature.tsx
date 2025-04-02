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
    "48n8pktpw6zduJyxnW42pyt39JNUteZE2y9Hv7by7Wwh1xgBwbRT9tFCgCLSPxiRVPRZH4bH34G31cPx2AC4Gmph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSVghoaMwcq7h7NfJ2AkoNUdy3xFHkRZr2VHXXq37ngJbhyQjMRWSumTaWtCHxzvRWsQaHpkoATAPF4uA5LZVnx",
  "key1": "64rw4BRgrRa6JGwdXGmW4J1H38MYbmuUJoaEUXw4SJYWu3rC3L6PX2e5hVQX58X9XeT4ADDCZXvV1AwuxpjQT7MU",
  "key2": "Aochs9x59TEAcZc2QN71Xj8jhtzoXWGcKbHs45M3rjHCHvmif4yYiDdgzp8zAFMZffkRgLMBs9BzSe5YNUyka6S",
  "key3": "3kRD4vh85eZmgyXtq7s7P5yndkrR5X2WimDcMD4PAKm6ufuPoPkgLmZbmfBcbs4exm8YPKuTrUwQTFqHZ9BM9TPC",
  "key4": "JQtJkzxuXJzzopXf7xJ6BN49WGwewm5PpdsfAWZALwhJfxBDbdhmGWP768w2Fb1yCnThTXhpAxeJAvWx13a7DZK",
  "key5": "2o6XvUSRjRz31Cj2MaGDA13CSmMtarMJdEZAsZNGBuhGwVPJ1sfyG6psAMpW7dQUz7La3KkQ53WBUke3yhN7FYKr",
  "key6": "4Kncxi78xfsLoZHQ412qcATR3akdFY5nuJ2nzgtZ47ZrT8CjvDPyZcJe4qZSqHbdD8tnw6x2dosmAzz3ViTyKHC",
  "key7": "3oT5SBioeBMFqPXVtdgKgwYu74p5v2QLCcfaCHTPsjca6TkcXgsp6hn9YCx7LfgjnGKuRdP3uLH1yD4qCEM8gvT4",
  "key8": "4qrFr15mqhAr1kptCzrfVefF5jYzm7iMp9HutfS4W4aks5EtyuKzsPU575VHYMtUaGDfueh8xEnTMHkUDYKoxjGt",
  "key9": "2qw49dnfE6dwznKDa4MWtRwaAMgUnbWsSLbvK5QMs5AKhVipuX5HS9jY3sDNK65Q2eeAL5E9dEYBE3RcjEnoBzWp",
  "key10": "jdb8j9sv4zAEYRWE885X52cGA77ZkuKZxLJi2xpcuqGGKTpgJGGrmsQun3gqHhudk2XFT2nN5eEayZuYnqQV6en",
  "key11": "652A9suVfXTYeGzNNqzpSVZ63XgKGBz5oFnaECs99vaXC6kukRECKjck3CUbD8qmAMQm8bamxsWEXcAqMVcxt4vW",
  "key12": "34Eapoftmkd26TCXGaHL4ZAk3DTM6tp7FRgKydN91YKLJeGWr68r3EgmhHwcrob1WddeH1Hck66bVz12YKjJo9kc",
  "key13": "5qiLMvkyDjCvTJQqmtFteVuQRtBe7db7VzzbfBzoSuGUfrCcZesK6TgXVFiJ7D9ySnJx6xHmi9Eeo1oV1qqp2zoM",
  "key14": "DVWRcDX1WWZujjAUwANgTCWXgfTTyzo1XKeKpBgw7xvWdz9vMHKbFFQYpfNNARf7NG72XtGSKsrx1m5qoqXK44v",
  "key15": "5Q1h2Qz1Wv6kpXbj1DqiGrSMS8hkqEWmPD9Jb9x4ZPLrJBZ3Jk1MsmayQ7Ysu9exhM8b7A9p3HKokZ5iyqeWqLUw",
  "key16": "5xLKiRRERgMH5NoepvaR9ro48qPGejHhffxKkiPMBEWwPtWoQjhHPKCEjxohQ27kUCTX8jD4mbFu3XZWgmwq6uVK",
  "key17": "5kyBnveT2b6vSAkrt2XstDZMYHCkgZTXXaexHfJGo2NCW8T2LJXCicyfCnRwMG4AavG7LJBVRtCYqEE179uEnKGP",
  "key18": "5BpkCz4vqiMcUXBpsuoJoNoaF8mhPgAW5yxyNis4rno1YEuF1sMf6pH7oeazdZDHjLHttcwLj1ATnDYoGSqi2zV4",
  "key19": "4NZpYjrjF3Qc2W29yBs1hdsSbwVSP8urxH3XBYNfg7EW1LT9RNL61NVF5ceJDogTQb4m13Kbz5SF4CGCpWMZTKau",
  "key20": "H7CJexHKJWjQFdotSsvvqbhURSgEMNMheaCjBGKaFZA1fL9TSFXLwU1UpkuEGEuMnPV29MkpDF8vJgHGgofx5CS",
  "key21": "4PbwCz81vp9nfNNQsrNbrhNashVMpoojv7tax128rSkwpfnpvF5RmfFGnWhiTTNLEkxGGVWE3NH7xXAq2EshHSdX",
  "key22": "3fCTn4hkE2M2kj71HSZdM2owhXDoeJwiFx6Rb8MvQmTBnsmJdcLum6jiCQnty5BmDRVafZnSp85nBaDobQdaBDkR",
  "key23": "2LLQvMKm2fgdEvecx5zp9q4Y6nvvg3joF2H2EobktyMZ3isTBaWJttGw2Vc8bHw7UMSjZrSF7Y8EZVa2apgcAejW",
  "key24": "2wTiuSvndyvE5UYCAFCdk35iwwph5PDUPwfUk55hJmRRP8oqaGUzC4vqT6jTSmtjVx5v1THtwxVERJnv2ongvu4e",
  "key25": "4446SU3H4vmKosEF1sV8BpWVfA6Xx3eyAdFbRRfXFK4HUPCDLRtBY3xm5LxWZwdjXyBF2EKA6vwEBvrhhy6NnHxq",
  "key26": "368RzL2iJBSu1qUyth5DCwRzdapWQKepxoxSAEhp3p1MZKq1cuxrMFjLfbghVpW7fHXFoAWhVpucqc7PscZJZeTJ",
  "key27": "zvFBdTwSgLuJbpNVtQWNPucm6upS6tBwDMS25seUBGKaKPERrutmoVJgYLZmAicZDKNvxEvNYtukjsB9cjCFKZ5",
  "key28": "5YtMzjjRmRMd28Kc8qjgdMzFNKHZySvnXL6knFULTMctHWvNmAVg6AJsHtGncUwJC1fQC4pueJhzsNq6xBZ4jP3d",
  "key29": "54xZipT8BsufExKBGXNLKaU7xyEk6r6JAMScW3VUm6NpCeKijtj6PtXXVFdtLPPgtRtq9QvtgvQmLA3DxsYFo3vF",
  "key30": "62yHkoWBG3sR1LZT5FKS4k8XwiqKGBTdJqGrQsfPgynB3gnmHVqoXaoYFqovJCKcDaqds4MGMiLTCWbBLLpT7Kwz",
  "key31": "62b3qE6wF8dezN9adjsoW74EK6G9wGTVgFieXtmyMFeBipCHdeCnDRcBCMfhTPYrvENfFFRJcLbP1SysMyv6YzL7",
  "key32": "4s2QFfDjPQ4Z588xzXcerAmLZA4NGiEZPF7NcY4kQKx781Acy1TefJrDXPs7sdKAH9mStxPtN4KHeHQ9XimJRvd3",
  "key33": "3nEqBBEwwbbpjAkfWYVMc5M8GVg113Bm8BkyYoebh2KrQUiDj7NzDad37FFuJy9BXgvMm192V3R1AmCL2zBrLqJ9",
  "key34": "4bWMLjD1U8ekTZmnkEtbsv1rNWrjWbJhZonHyAoaZWXBZ2RiaKmVZoDHJQCtmmAqyBxTeGys8D5xCPLt27bQZ2Xb",
  "key35": "3HLCK4HjsyZ6bxr8vS8UP6m6NvVnt6nnz7vkNfsHvNG4kLtLfT13Q9NGeysRFtQ7sRoWRB7q5FDzmaqCsL1EYHFH",
  "key36": "63wt4Z5pTLXMXiEcmtF4BKvrH1X1AG94wAE49x9LNKfY4QAPft9k79HsVtBQUCytUbrzVYrUkiLmMRVRUcBcaBVR",
  "key37": "5QcfW1KxAues9ACCeMgMf3sGhaXQV4nUyMK2rrCundCJjWY5xxKgiK2tKG4hXGWSFjRNVWeZggpyJP5gYYnWYKTK",
  "key38": "28p5jTnMjgWp94c83mdxkgbuApoG7BY6WFcrufTezXi5UAfSY5TUYmgbCRDN7HDRYewccST6SbTgoVfLFY6RqPFr",
  "key39": "MNomwBQTE7zxjK2VAYGfkA8ZyRWRgP6rVsApzcsijgLxpF22GC7bGoHqo1MDkvPne4hWSeavYg2NFRDs9JGayyb",
  "key40": "21PgW1xpRMyoKFHqXXq8fAHHpFQqY8bU4kXWcmZ6CtbVdtDWCEwSCaFsZBZJbpiWUuW6kyoq4rLGQ2payhEaNWfM",
  "key41": "4KGg7GM284LqNSXgVWEu8WoZRZ7cSDtBpqKCAQuWAW5zC1c4XvftqAzpwqKv2XaD9Zir63qihP8c7CPw1XRXny7E",
  "key42": "2BxYVbPLGLgmXg9hogsmeJDTGhDt7H5isFeuAjktT2BrfGQRD499Dj19j4oTLMWJefEKajp2Thap125jG9TPoC5L",
  "key43": "3DyK255TMyagc3dDL7eUC3ifqA4acqbJW7bYExrbwXVqVecxp422FhtMcArwiMSJPT3CL9c9sfH7F6XuKUPPyKym",
  "key44": "4uLMcY4q5AtbJFheC785wSsFVCUwMVquJTyZkZwDWFAqA33JxxsX8UXqXGTeqLjEimJQnKGtWrYuG8k9ycNRn8Qw",
  "key45": "2qChTz7hJXuZnxxwLbG4RgruFVTmmwRfiWrq8ccEQm4wXCdnAzf3UHXtFmVWtxVwprepcKDVPMEKEQSqoePXagik"
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
