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
    "4MsPVBWMWLGf6TANLbo4NP35ehDUKPxgzecv8YqFDNK6cM68QJJR6zRLUY64CMemoji4z7TZzM9pBSF9XC6pjgmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EykeojwsHyBV8rpBjqkf5GSsvDxwoMytX36vHo5EDvMMD422436p1tM8oJCfmdggL6BLu9Fx2A496fW3LUgJBnB",
  "key1": "5W5cu8RTHEdTxeP4ScxwFN9kL4kMGN4Jn4X7EJdjZnjgqnVwsTr8KU2ERJBD3hVhVkbWLbAqrwGR9pLZgVRPHyqm",
  "key2": "5vQAVRBWxaPLVUC3UAD4EADAvmQXiWJwmQhRxbs36tgyLY1ewzC9M1DYB1HRoFB7XFFtyuFfL6Gm9s1NscKvbcVu",
  "key3": "4nedaH7Mww6dYV9BuaLaUgACc7DTHdYy4vLcy536teYrDzTGzKthHeip6ShEabg1czhiTV6TfXDMH6DAHNohRDRn",
  "key4": "4sTXSJfskbBcVZnWGY2fDZJX5EfjkzMRHYMEXFJ7zFQRAmWx68qBewF23271PvfqXmTYWwKDDzVyFC6cXNG2R6x7",
  "key5": "53Gen9m2GfGXgLqksh4F8oeY8sA9Zd5scTY1TFLzKXVGuwsY5DYzEctRaqzBo692Suy7gW6nF24fZANMsHEzan5D",
  "key6": "3CjBn1X5cBnAvRxRZHmKyoB9EEXPcrMAdziSiUq5nrZhaYKzDS1iWVhq91UDTjfXa9zqrWmQ39WhRprRaE1QX8Fh",
  "key7": "41i14x4FCWxJgQKQ8F3Let7ALJWt14fMQeKnNouGadx9zUZn54dnLy4LNDrjirRbexBp4KBVVRJDrxTkyckSkVrE",
  "key8": "4kPSrgdi6sv2fS9jcAdGMsmE5qsccq4GZ4W5fceJJYVeqWvzddRfBAe15u9GM69smvchFJWMYPR6XpMFvh5ouXmd",
  "key9": "36PRSaLCB72THQUpKNx7q6kGiaYAT8R1CURSToNB9bpeiro14YUydmCSLej2FHjsrTunXffpLZGypUzBp4MBhiYY",
  "key10": "73kfot2Kz4iHAiPrTLEUa2MY5GUwFnbzmXkJawcpBtFMYF7DnLABChnr9VMHqE9hwzD9tL9y18Eu7ENpqQAnDLx",
  "key11": "5tMHVPPqAsniDeVZU6kqyYzkvvfmhKpevtQS9gZsK8eCjCHdyFhpyHBzGe192dxHLj5tKemtLridcbrKdDk6UmoX",
  "key12": "VCDnCR48JvK2Lm5jbXgRvMVFZAWEgC8f4Ex2s7LRv5c6RTjFRnCtY2rE9kBtatDanZmZEaDWC9wEz4f68goUyLB",
  "key13": "3pqBdYEZJK9rEKKM6ehtp6sxH1pi8LfYLjcfSjQjvNM2GEzspqnVsYopUrRW5FDBLHUgEaqAjEhMQQxMaaYrgkPt",
  "key14": "E7GcwzfTvX3b857AA9pLdcRbfajeAmE8hJ8h9emPHpKyEkY4knQ8cHwDn9FaySBR5NshygvyAfhBA9fWYgJCRxr",
  "key15": "4ZrnejfJSo5vEFcUgeuuTpJaP5ZJScVqrKTHT73jTNwxnKG7gBBmRnuRCCtUcQ3utQ5CUVhZeDHkDQ3JP2JhdP8F",
  "key16": "4ftKW3nqJrrp1YPhGgrxhD5nYetJoBGnngthw5iMwAMuU7VWZTspNo8fN2NiwAeLZaZqCB4zXbtCoRzUYYNuPRrh",
  "key17": "2Vd5S55bLk7AaLRcf5pSYhfrjy3WR8AqBRMKFcRFyjJprsY2WJSfELq78omZa51zmBjZZVakxWg3gESbUZeF1T3P",
  "key18": "3ikYfZj65ngXjhyZzb32BF3gyYWeo8Pc1czxzwcHotPmZSY9nrzzD14JWfSEVk45LQjkVPL92TuzK5wZVWADJGWP",
  "key19": "338rNakCA4dUXzrcekyiAXWoLAuT9iiAekn49dsqAFS5u55sqJsxfJyjp5PBC8HkCW4JbzdjudTmkRrst8myX1uC",
  "key20": "3hFDu2YFGZsFy57yhntuYPYN3aeGqktw7tefkRq2ar7SaKWqrML8TUDNqeSDtyiNrSjwQ26LfHyErQjYSveHZmhC",
  "key21": "31tn39RL6aXt8WzuFCiEdF7jSzxt75Hg8cGaKxSCFcPEjChwYhX9P8VJXMGKij6NhiNKS3cGwNd48YTMvurtnoYc",
  "key22": "2FZ5rf5pxUQA3fjFsTrP3hEGvmi99P2ZDgemQVvxqffgf9gyYeyyppZ5vjXBz7MiLANan6L1joma1L5T6zSf1pvW",
  "key23": "2d3QNa4mEwKEKQp9j3qNLXATvQaLTuAT9dheSdMgtYRtLBxETWYodYagmhNT5DmKhKLj1tbZ4tSEJxR257HwwW67",
  "key24": "45yEW8nqpAZKEcgrnDF8nVdrR14gLGRsoUV7r42ZvG4m73tRfg1z8cfb49BFHuYKN9dcNgP7kPKWxiUtjXcb4qgW",
  "key25": "T2hpLoG1xTWPLxCHjrksmv9UNQriD87tX2Qh9XoUDL77svNk19ERkThq2FuiududUURfD34fyBCKQSTLDQePaVp",
  "key26": "3XGCYz5hbsEJ8qa6u5Z6i8E8x62XNFW8nXm1f3V72ko2Lrc8MSHa4oJHHLmBfeSdk2gW9sPgtwgoB8k1iPa4wuXw",
  "key27": "3CoDhcgentrTnSCu7xWgYsZBZDLYehqWMD3qPURvHaRTsZFzdGBhSprF1rGhRQmXdV8o2xpS5eScbEqAcUacWbjW",
  "key28": "2mFtEpnsgU7Jiiir5FSTE2s6Shb39X7aboRbsfMZQeaKjp67VPdxUa1CSvgUtRTnY6WFbJwXWj7KCHSiyfg2R6ST",
  "key29": "3U7TTpdZEAWUrS3f6UcoEKKE48qaF1dmm6Gaz1pvCufEWVdKqVc4kWHcedzTWj1xiaRs3KvSdAuv6syDfP7YyRF5",
  "key30": "51fpZ5UDAJYP4ABpboKE9AbveUULaUsD2Dzav21kGbvcndjvYCEGVb46SN4senxGg4ajb8gBwR1QsZJtMGdhsUdp",
  "key31": "4AkuRrGA51VpeR6vfhgMJPipQQ8xbAUg3GQCiumryGjNMZevKpPpKkaWvkPS8i4XnY8iRZ5Nbe8nuzoS9rYiAaUD",
  "key32": "4Xv9xy3Kh5yCYAXB4XqbTiEtDL1TBcv7Wn7UXEC9Vk7geDWg7HEyHu9Z7HGSj2j7WFYWxPBS9MRWjARNSMsC91kS",
  "key33": "58iwGH68wEq2JRSTep8TzcZbvQZ3GYmqNF533iXRi5Usqvn26R2pLTjeCuL8AWFUeokbwoPqQTwCghdNqkWcq56m",
  "key34": "5rrxnj53jiWvANaYK1CYXbUowdcE1Z2wdFwvdZLnWfGDKW5Vfu88wpPUZwxsZVNcuEB2DTerGZgonPadhxWJrMzM",
  "key35": "41yNbWP9KbnjfTRPtUG4YaWm5on1dFeRascpEAojYpLHQntosLDE2iSHA3zXN3YB56WRzqmKdoQD8vVUDEddHNq5",
  "key36": "K15rSG2HZkYEwZu7fqtEBVtTT3ECEQJU31UMaN1q5YH2qD1xos8yukUFeECX2fAJz6cHKLEQ1tqUHYsmbXqXBAo",
  "key37": "38P6foVHgUDeh9WjZ9Qez7hMRJw3zzqPpGH6ggkMsAPdUene3pJ4WJ1Yu9vnVAtzs6A9GF4vJVB4ZpU99Eo5DJgq",
  "key38": "ndSw7ML2JYXawf8ysjsDFjFVtk8QKPzcHuDoRKMCMHeVtiYe7Vyka5mzAf6VCMA2Bs2u2ziiF42AR2UN9R1j5RD",
  "key39": "5rT4H9dXhsYhZgfVqxDMWm3wTogscWd5mkeKLjta1iG8qYAz19K85anvkf1DaepqrDusBjCe3Yf1dQKCJTUNyDA4",
  "key40": "2kDdPEGYWfqfTyf3MB2fwwC6Hy7DSs4aGtuNtbvG7K8VVTMPhoyjZ3t5Pu2bWvMKxgZsY8pG7sHnSyvFiYPaZaas",
  "key41": "NPyUzUKXQc3f4SjQCDhJ9QXSbjdLxzWr6TPiBqMmeJc2zcD9CZcFrFpSgmQaJ4PyoUcUVuTsv8tfHxT9nY8tpCK",
  "key42": "2GF2XDraEJkfhyXHQpvB38Krf8x4NoAZ9fYLTPxDCQdRkXNP57K1cPt1xk27PudfGbUghYrRKuXnN1cXjmkeeZHj",
  "key43": "4zcu4owVEuUTR3bKm4Yqzfmx2fXQzWxyyrf6rzzPuskZ7xXGHT2gUQRjF6hTji14Won1CsZxHM8y1Zz5YFiguJbJ",
  "key44": "uQvBAJHSHsNx4XSkwFkfLePNpPfeQhsxr52cXcCZPNvyiVp6acBwcvsCZjpPzTGc6zPM5trx5x9cFQsJfKciPes"
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
