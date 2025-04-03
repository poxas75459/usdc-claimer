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
    "5mKVKLDe2AaKttxLgG6bZ4ZQRXYRFcm7ns5g6hXQeV99TvNtNerGPEQUARLspXj4xstz91mLQut6z58tuKYbB8Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkSSDtk2Ndv2VdZoaf2GRrGhmaAcdohHHdFHWh9tArADzLsb4DGJSmKywCKe7bfuMX5kM2rSvC9tpULZBqYuxg9",
  "key1": "5htTF5DfKBUyqrGWcHo2paZsipMBgfhRMxMA6rBkRNcvjxN3ThjN9p3f3Bg4Kur7xs3SBm3W6Zom4GaLXMA2BVYi",
  "key2": "2d1gVttkRAFcRiohTDHeoMDnWk1AbUX3L21v5rXYqLFbohHmKZiJPePbWSWZjRo6dBR6JUaF7Ww9NzrNCGdmqVH2",
  "key3": "67Hur6tyyYvNFeC8TvP22wG2gqpGsBKQwNFg37Hto1t69vYCAwcFdMx2DLQ5gabTPZQxt1odhkfwxBTkZLfXbphy",
  "key4": "eqUhq1CFyCj7GHcFTeKJe8MUVRnW21kFBM5FjpXLAMSdo25TXRZ9cPaJYryYp39eycxu8ciKjZeVkyrwZWvamPC",
  "key5": "5yu1Pd4cR8nejFnmVmQm8bZCjfaT5Ddu44SGmZ2p7ghKLQdseM3ndEKddc1GxjpwrmdzsWB1rpS4emYAdf6qtANB",
  "key6": "2qRPKZ7wZCqq6eKaTiV1CHMpcAzUQEpbHeadLoCHUbXep723d4QiLEqt4Yh4ivV2r1kUuvMhUSpWQbXxJ9QeBkzx",
  "key7": "4uaMEiRfz6HCAWm2kG76n6PaU3JREoU6LX7abWQHpj9gZ2E634jFGTipzsW1xjzL694HVBPqbyyrTxyWS2Co2VKT",
  "key8": "XyjPPv41T1aBDvForLZd3YxUFS1x5fphD8HmpuYocx1AZh2xtKruQsRcZ4H7xuK7Y73Wn3MBckUQ5LWDRu4TZk8",
  "key9": "4rQaEXmJjDsqLRt4w64XVWjGBVw5wHvBxzhXRHoq2Pk6gkG8MeLUZxF4svwUDo5STW5x5b56dizpR74f7ShHPn4p",
  "key10": "FDXw4SA3SDuG6eUXFh73DZTDMB2yqyBAJzBHeSa2TQumbhXNcjUTFcQuNiWLtUQZ7cDL3nowjL7ueYzMqGPQf5b",
  "key11": "3BuLL5e1BwznvWHjkxN8PKrCq2hH4G1XqKUR1zwpbnqt7y5d7vrrXnYgrojSN4pgVofAQg8NxCH9NmHjNAwuiwAt",
  "key12": "2wi4i6LVrDCzXot1EYc2eoNtEHZjyZ7u9XN3q4WiUZDnQWDn9T36UcxZEv9g85dc3x9SthRSmNjyTgUrDPHdERth",
  "key13": "5VCbx4dXN5HxbmybjDtEmQaAztJHReg9q8GeNtdn7yGgj1pDEjGpcwEtjuWYtN2u8q5itu2hZ7UPK4xVkrTptA3R",
  "key14": "4dDEGpBnK9Uo6TLHeHaSTrTUqNsCu2etPuHfFCGgLK7m2G4YHvhFWE691h86vxERVDj9gRsouczYZewZdGwc3BKS",
  "key15": "5rBSbLipEot95ysBdPReV1KooBWc1Gy2E5oY5uzYaRTFV1psxpVPy8buS1DoPP33sGRciRLkFJwdo73BFtwSep25",
  "key16": "2FmiH4iwWiiKL6wfCopUhELVgsx5puofLKL9QVTiuZnb1nRafmpkbEAdNfFwh7mWZ5wn4RRMr3t7eFz8oKbeTQg3",
  "key17": "4qumNsmQvUi7BYYZ4byuTJv5wGJMqZ5JQks1a9iw11n6VrCgSzwM5fsV9R47s5b9FbawTQfj4PjUYXRjrsV2wTX7",
  "key18": "354K8dPisz62HPhP7ney6dDnhoobqNt1fsfpWWtqhtT6KRTwLxziZudmiNUZ5qCTZFfFUwPAsgsmmQNSZ4sNT73A",
  "key19": "4zkkLj77eDyKBXSjaHrAfBhRJLY7Fp4kqdCPsNZZCLu52wQZDS5ibDdoiwENKuzU4wBUStEpxJHaurPmhqHon5Mf",
  "key20": "4b8wZgWcR46uhwwvfsA8kaRNWooXp2Gts2Luqs5df3ujKiLmwRaXKbZvxxLnJfGs15FjcESGmvnWB29kNW4b3QdD",
  "key21": "cDfXFg6k5G46Q2iE6bVuGDZCDDUux9DeQXEtihMExwMUpCuvv5sLJh3M8Mads9MYCsWfRksUU7aXDM5zsCwbBya",
  "key22": "5dpsHdsGoVmxPu7NCBvqfqdjBg4FcKhc2DFTXGAFyRqaG45JxqQHpfFcUtXQD5D4bofB5DWmPyNDELcZ3nshigGa",
  "key23": "8Z2uS2jNxRxj7FdSCEBEfwCFgPGvvk5oxJJzAS4ytY6i9tuQvx1o8G2GkZThko32G6eSV3yteo2KnaoiotGcHsC",
  "key24": "5UY5MAMk5SumnAc1oUQk6gw7iuEYRYRE88Ra2TZ8SJof8jPvKFYBoCexsXu5ZVURKJZFDdTC14zRBs9W6eWWfsvc",
  "key25": "28dWSVHdoLyEW7sQjmvQRWMqeGY6bdp2QC4vRKmgmi1ecW2AVQynsBZybbnTBDAr1fabweznPPkDehAzkG9iaacA",
  "key26": "3WzX3KTRMJrHVBH4RQTcW7LFKVsMqZbiYFFrMuDZcRGfv9dJuj58oKiyYYteVBB8sM64icR1Tu5GoJNmF27P5Atk",
  "key27": "2p952N1xsC7sn8pzMCqHjobQbzSHDAopcgFUxUE14SSUihqPJwEciumgK2GPuH9r4zsYo6CeZCobeJt6ajftyq11",
  "key28": "4j4gdJo4u1tdtBsGmY6TfQrqjPNHqhnwn2SWdHW629rKhFwwQxugaeyoBPdVpfUPiduUk34NcXmzMJLobjvLW2Tb",
  "key29": "2RnDiW6EiHJdXDWCrjzFjoiSq9gqpu1SUZLA3UU6GeXvjkRRqpBnp4juMZSkt2Vp55YMRtHs49jBpTSH4KYu8YMD",
  "key30": "5Qno6zne48KJF31RWdwnrYbHJk2dXoy6Rm6WiWunhccRzffKygXPNeCP1uXbtjsU6GE962Vz2HNLEDASikcrTuxi",
  "key31": "4qnQykAwWaFwZ5vXea5wjLkSmPBY8qMaHYzyPHfGproxc5ZoxnWVZ3qLVixynPqnscLVj6QuKLQg9p1i1jNqVbEs",
  "key32": "5zrazBUyMyeAvFWSshwyzSutgnEM1UjhDvGa1S7B6P8SVdQWqDEyqw33BafoZdE1We5bGhSDhCEe3N1FE6AvQeXq",
  "key33": "42oX7PLiRFYwNf5bjuDQDkjv62pkrxM4cDRyE1udm1iY8DYfVteRYVdS38GxgXj3U31nmvzPnNE1ANZb8FZtNm6j",
  "key34": "3ZocfJQTnWczhed3A8CnXEdiD1CcRybYmKmSVLbUwx59AZ6joPYdhEGMcxV74CjJdGS1KU4z5WXLkAcwfXE62Jdj",
  "key35": "4t1Grj9CkFukSEfteupXzhL1toWArXwdnfUVk2ntK2fhPAFKRGgbsZKUU3uYR1pcdp9KRX17stStRRNUNMkvfJGa",
  "key36": "pp4nAhWaSJsVcb8EYqQPow2FhgmTDasXFvPRnEzeKTKergnmgWRcyW74qGo9iSdaGLiJmuYexzKfpaAJyBbDBSS",
  "key37": "W9xHUququkR2ibcpBCd4TiVLPq6DD1qa1XYCqwdvfdWMRBJ2ZC9UdwCiyPowCNAcboMu41hcqboPh5eg9TwYrXY",
  "key38": "3sf7878LQtKHwAX8yi7qvEnCJBt9jxSg6mrXPQRGWNJ5MkvtgkweL9r1gSQ84uBcmBLvMDxZuiEC6B5Sr4RzrBXr",
  "key39": "388UcwGbp2skm2FSoH2BKtdw1gU6gdHHYQvhQeFAofujegmmMG7MLihZeCy7gdEMiMv5oEkRjDTzuy4Af7vGdFUw",
  "key40": "5rYavszsgpdAxgEoVKYcwrxvSuahdq1i2RmsF86prTVN6qfoDSuvMoZaDmz7UsVD8VvEv4ANNrgeMmb7gEkdCbAA",
  "key41": "3EjcoECsAxXA2LjTwKPzbd7gxZoN5hxrQrKp4DoK6Wt3bYvgDp3Q43gMXvtp1LfditJoTTR5cVUfcRmNz6BvGiwk",
  "key42": "5BDjk94Xpjr1RYw7sjTTQK5QsBxFfvrgSihKTG5LtQfv9X6sNeWMvAdXW618cySiMsHPtrDmN4i2n5DFnk2PKvWG",
  "key43": "TVBBBM7roD2TvKZ8jwdWfSdE4B3F6RnCRef6LVG5SBaTpBh2pDiaGyJf1iMLa5UUKsoR85CvaYQzFHxnXXGPQZB"
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
