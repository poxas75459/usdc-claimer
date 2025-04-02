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
    "47EVHn4VJeeiFHXt4NnxpptHXckapJTre1vp6i2dMfN5qLiBRZnzMkF7u2ixxX5Kpq7ZU9fHZSj8uPmW1aRan9tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwBLZXHrJyfFtjHTaiADR75R5swFrXEQsv7njYKMs6yZ2HTSqxbMV1NTgKtXVGnGpung9qftUhZexGquYGmktZV",
  "key1": "22cSdkMC3iKhhe6FpMQSCwEsPeyJP5RJaWS548cV3GxqU58HE8cqmSEwKYVsmsdYvhncnDxa2DEuPEAj4HxaUkdp",
  "key2": "2hPYc9ThoRfTnvmy7gWP34DFWZmwH3GLu9dc622b4u84oyy3x9VDbvKvrGcGv7YfbLV6971XznJRxW1dr8WKUKGU",
  "key3": "mitrFSeg12ya84tGyhYFH5cddPkFk23L1ED6Gh5diXSnuJypQeehZTDkjZafBn1P9skzGUg2kSurYhr2Cp5W5fu",
  "key4": "3K6RLiL7YaEJ9AXUZBDhaQZvWBneDaz6DB2qCy1smVMA8wCwxUQfNB6GZsnKkR8Gxy1DxAyxkev15zjY9eABaAxG",
  "key5": "2RfeJwpTHcD91599gsTXuauGn67jqDWVu1njwKaSzoQw2DvLsGoBvxGUouXhUZ7eUQZT1xMYY5KeXDgSiZhbxL58",
  "key6": "22m4Eh7idR17oAn9g1p9h15xxUevahsqhfzBF2hnxv5vV3S1niS28Qnw9dTL7XcYmDo5v6r1D2g2735F3VTLJqwf",
  "key7": "424Wu39e1SZVNKP5gaeyv1DAYvGQyqTRTZphicTfamC4p91S1k4dhYL27NHDHvroKNP6Z9hKo3xY8FfY5eYj1XRX",
  "key8": "4wairEi15U17a3V71Xj92MoC9yxwsTgFwDb4HPzXodzjRZaKD2Mq3jpvwHroMM9keQVevoZNYvZVTgFpgf98DqxT",
  "key9": "k8nuprRV2d4L1KxMHJPbwZRr1vzbhz8ZwDNxFEo9f2RxeCGo7xuZ5XAUUBMHEDKDeZiqyuyeA1qqvjAtLyFo63q",
  "key10": "CYZwB4eNazTAqZMgk4jxL8rXLKN24QGyraEyvNPgitcvRpqh9b4v5gkrodb69iAAyD9hND5uMN2NdxZypKtVhAs",
  "key11": "neLMfbztGpxbuS43a3n94c5yDjsuJjdKP8H5VhuLwtjBWgni9besb7Wvuc3zMkg5X6d5yEBaDmWP4SUiX72bwNM",
  "key12": "3q4U2vdMru8fRdRMrdDDbS6Lmer63XEtEnZQzwTqMnEmhSp4hGRcSn6dhJrXLaT5h6Po6rKEN2mC1C7zPV4aawPT",
  "key13": "2CrrCuHENgWfPzvfzRkf96MaQySmihm8EaHhT79q8VM42ucd4y7KWATmCbCDTvrARaFtA6pyG4hUXPZt41fT2bgH",
  "key14": "2xwhZA5AXmUVbLSqUWnP2uRAZyiy28q7yVUBFmKkcGkwgTuqfD5BzDcq6oWrY7goQEa2sE2wCueWNF6jr7ht3RFM",
  "key15": "5MVzJD9mNcC81YR9dXVBZW9TAAc5skZMTwLgXRxeEJcCy5m75U9BoQzuMeYt6tuBYcKaeks2WRUWuN9BYmMT4YqD",
  "key16": "553EdmqrpXzCxxtADyfJszY8UPFewDmuuDrDaz4oWXyZZmPGKnBYJL8px3mrKNjXxpBkPnhByNEVmq6rxEH2tVkj",
  "key17": "5Z1zosQiX7nCVbSzFvcqbTbm7VBZbXyUPqKNJPZngC5D7AjB4aRFp5fHZQdvzLgbchxdKiB83Wcdsw9YvPKYFGrj",
  "key18": "4RAmbFq1icEdfzWuaTtQ5Y1qLrV4gNNm6zpos27GAVY15ZL1Hnfsvsji4ssep4ivMScGGAKrqTB8U3kPjZiNydkC",
  "key19": "4qpQ2TpJFRsrup7xGzeYf2GEiT7gVex5AZtRGvw5dQSA5ePdZvo85TLnTXVzv5BM3Mgv9PqVRkF5UXpRCCoVD87q",
  "key20": "4U6vdifRAyyHzjJRJk1A9u6P5HWUzQBAPV8FFQ2nHRV3KTk3BhvJCNgBNiDABv1kzQJEkpJitFSJZCwVLQvHamMi",
  "key21": "55F38dYFcV8xA9gBauHYwMcQFBVUoh7DZA6ncj55ohSPQBffDXkSrzgKz5Ug4S5dpc8v5WTNazS43ELcxZn22at3",
  "key22": "3Z9HyPknuN2hkquVee5xyPq5gq8VEKPMeTH5yh5Ds2emCyykW9LBeW59qyEUhrv38FqEcsdWjLr1KKXefVMSqQF",
  "key23": "5asvEv5v1bppBW5pvq4XtDGtx7rg3816WZD2ufgg9Xhq6izo2BFigNx7oeNneoDuWiQ2EjMZZDGZ9KkgqxaSSYHF",
  "key24": "4M7s1nMjD2JqXSnDpjZECA3cU3qMbsFraWmc3tecDZECbEaL53nwS5J28rFd6K8Ff78XoECvM2vVDDqK4Hv8NdVB",
  "key25": "da2PymsgLKqyAtGAtFetZJLwJ74TVBd1AyTmfhK8VxE8jU5Ta81VVeQxMgeszXfY39SRmyHXmASSbvhGpvrobUi",
  "key26": "2AedAfDNEcAXAApDfET7bye3Cdvmdniq5yiYUzfQAT1WYjmgPQKZQSUofBovVW3QK1kRkwEV23thP1txZoJ8T62u",
  "key27": "vgnX1H11J5mfpaTc2NYDyVTzj8r5M3u7nXeNXtzAXjupWkhHKpV51BEUJAweYxVFaaNkX6CaSU3aTE7uJq1z2PS",
  "key28": "fKjPfSpZD3EuqMyz3H5v463r4mq3H8aCE4gGMw22dpECGKQRJmFj7mG3JBPB5FvoS9uPZRoPTtszjzLDKZRhP9B",
  "key29": "zF4RvSJ45t14tUaqGA9mD6UHAgyseEiTZMKxt1LRt7Ftp1ptxmQjpEZuYo1zviqHb1YnfKvhnVidVqNvABPkBPD",
  "key30": "k2wew4cdhP2Kvgqy7o4xKR1uaiWBCycyScMZ9XsAEiajZ6S8aud9vGZGwmrxsz4MFbmsbxxPrYSVuntJAbecUFN",
  "key31": "5XaFb9JHGKYS23RBb7NSs22ZNeaU5zaeBP7UpSnVGGzCY5bMVhjjCtnyHuEsw8XUScedKkLrrCYZWkcn7x9npkgF",
  "key32": "4uAavoUytZCNsGJVe57S912XNvwseuMAqLB7yWxkHGCc4trq6R1rNdFwm6nuJgefXDELPBmTdj1QYwx8rEGc1v7U",
  "key33": "2S1dhzWYDR9bApH5X4AcxZJgNMFe7a5Er7DMuD2WiXBmxhciBuomZK4x5XPnKpjY478J9EBVfW6zG3raiL1n38Go",
  "key34": "CH8UzAx1GrUrLZU4rUy1rRXf6Mawd8w7BkrADceab2viN6XQKXtHsQWBkPCGKitHGAGHLWzRvRivwCxZtgGHrHg",
  "key35": "4T8zvSUqQrReqX6ZNXCWTDgf3kY7DJdEuhJivYPd5HY7uXGBM8fJsLmVf8wShCMKbU9PhaJ9MmmtjtHdSD3yczoE",
  "key36": "c9vXsXzcdYzZS6ZgFKeJjNpzB9emd8Cay6SZXAH1M97DJadmtunAnVya9eejB7JmmNwSUQQiaqdZaMJPE8S6b8m",
  "key37": "3kCxVJHVKykcMQVFtLq7VhTFE9g8uyfbhMoBmriBu4izcfhpep9ZPKYkJCrfSAx46g4zy56Eafuk47dUN5zmFZvc",
  "key38": "2nQESGzMutbTQLAwNug9u9taq88F8gSQ3RSucxvYJ2WYzC6unceupKQ2YpbJDxy8wWv887FqA5XUZMrWjGFnVH3i",
  "key39": "4DDkT1jBMwnzmoadnCDTQ7VZBncipjKSoyEwEyaJRgb9drbvZeq5zoi2Uhzj2qrC61Pwh6Af8xZcQmiBvDbAcMaP",
  "key40": "62vuieqi8WAs7dZZ1kCmKsm5BwYFNE9pHyAw1DsaEyYc4Xco8DYNyjqRmo8UBkQ5WXV1xTfusJEmSvS6MS7gr3mB",
  "key41": "2ukdS4FxXRaav8a1Nis3u77ud51vMKbcwv4LrYtTB4ZP1gw7WqYEZXF2hvas66gUKmmYE7uSZzNCqE8wXHeNR87Q",
  "key42": "53NrNPXvvZhFeDRaensMyYkEwhp1rJQdwpkWQ8941jPnsr1cXYL643JPQ6HcDuJVsBxy4GG3znNHmprBX6dmR2Co",
  "key43": "51ijcNFpxC32roNPium5Q3jYb6HqYDRx8n6WwtY3jXyMWWtp4kebRYnVKoJb7Ddp3PziNnEeVcHh9i8v9kgPZKHa",
  "key44": "4GYW7BjPVX58sjunoU1D4wgm4iWZseNNbTrwB3Xu1LGkD96cCnsjiAnGSA2rUj3JgarAUq1DYchyETQCyhiSTbHT",
  "key45": "fLPXLN1vvREEPcRsEzEzMjYYETgNzxTxhf4AhtP9eRefG4MA33QhbPjFFp3dt3orz42EXcnRoQDoX36ScMpXbdt",
  "key46": "5tLrxphCEjizGTJDZy3VL7xGDnh34xRwMsRrsadmV7K9MRqvzjvmDmZbnS12xhdHCVHWobWWwerNTdPAcfxZxpWs",
  "key47": "4Wx4J7qys6BfrbRZosK2pARTQYefNfSuzThiRqJqqxHg4STAx8gafRXDWwUzC5bsJcQ8Es3fQsAkVTepsdW5v3Xj",
  "key48": "5CBxPvP1hzjXFMt94j9rUzVWsENJ3EN8nfE4SHnmZ7ixUA5LWx3aS6zy6u44RLt8HS6NjJiQB8Dd4V8JFzZQiK5g"
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
