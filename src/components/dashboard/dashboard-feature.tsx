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
    "4wNKoU1p98kyhY3DVK3tWewCGCrxvZ24tgUs6f8tiARACTS7pYUyM8bX7dRc9jzi2pLXjbVuAShMtXSrC6kidgTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wSSYTsWVHukaXzDXY6s5FSdbbLLoDeowuFxiMT2gvetZ8xhwGwwAGUTePmfBpY8kXhGceZBF8363tEGFUiCu96",
  "key1": "5tVfjWGQ5SHboFqcDcyKvJZcJsDPDYcid1jrP7c4ApTSAyJ56C3CtpB1xJoXGQgZ3US5Au5ZH3LW91Xp2Z8PVGJb",
  "key2": "4Q3NpwhWTxjxwVHQyzhfrTLWXSuUQg55UKKReC4Qh4EzV59t96H78mYZZvwBGuMwYJuyk9tEkEYFE2ywe7WGAVnQ",
  "key3": "5ok8gkXrQgvAmebraxDkow2CPWsrf8DPpBWBrtbsjWeRiayzqpcYLShh4m48sGwirEWANY7K4uTLfQwYkZ7frsmQ",
  "key4": "4P9BS3tyqW8kRPsnuNaVUx44UNKoyXt6S7nrJsozP1mgd1ruX6aNVUQwG1oAPE6TA6xWp7K6iuw22qUJrMwygdwr",
  "key5": "kKnJ4gwaQSEM73sipUEtziCQDdn8FmW2DB5MxFXeGb2RcYgpikF2v7kGdpAKeeKd5DvJi2uTDzvfWXYdPXPzpYT",
  "key6": "5JqgDyfMF6mqaRG3j7sArF8iMTj7iSjys7V9wsFi9zqbD7pMGmbypuyiUfRoWdSLwcZrQz6xW19aBmXYMkaN4BVk",
  "key7": "4Ba6rSovFy2FwhYU2xVUQHAJLxPwfXrhBnpoJVzq3ASR1bTmkmSSyaKNiejPfdHhUeEttxypLvKb3HfsMP85Tszj",
  "key8": "46tiYSgFpEQNUp7osmCNcRtfQjVKg9tf6zv19EgSmi1X2MiWcPmeNSMvvicYZz81fqN1NdqW93RT2JmtTZWC3tun",
  "key9": "4XtQ3VziBYpYwfDvNkzfHeJ4HSEBtip38qiMLMbGut8a5xer6JEsHM3nj4o5B9uDh9EHzwZPvQtrRw5VnJPpvgGE",
  "key10": "4grdeKJpjaBYX1yRPLZ8JezHi4ewugQz5TcnQwaguvMZFkr3rHwuk7fBaunuNKnhdZcQUhpGzAxUWezLxrmYLUax",
  "key11": "6748LcNA2MMSSj9tTcYWMJTvFUAmPKVBqDLzdnaTEATEH7qhj3pwco4QgaawkKai88Amx8Jaq8PAszJDZZwJfraZ",
  "key12": "2zrxxbsq5uyrME1mvZYrEZWkXdNopAABjdMp2DQtihUWceWU57e2R3hVcMt7YNtRjdTvaRV3uCogh5Mue9B2JQz",
  "key13": "EqgnJpVRnLr2WpTKrYGBFBUo65rqzQnFUP69qWDnJJ2adWwFg1cFe9fLBkiGzjiJJFrbvj8x9nWXuhat2c6YKGm",
  "key14": "3dkJTNY2ACRF1ZUrjkM1EBwGiffxTmdLXM8cwV6YRBBeSzZxZ5DxWLPskKxeA51QZk7uZi24nTacMGjTrwYhu6n2",
  "key15": "224qK1S8cn4b7554ZrKintWppk2VkxQ275dbnmKKxx1X9MvyuhkpZwxirrYnjW5gQvW6G6QDmB7ChzRpyNy6p5pw",
  "key16": "2WPpaZH4JY695cExnTZnCtaUxbtvh69jgExikLRoCfYLipP9uqzH2nXL5KbSVCtM8cmVyYxDKbEURLzfahdGwpPF",
  "key17": "3D6vk7hCij5tATEcSvTZ7E8SXqi2QVdfSTT3meCwzdKcsrPo8rc9Hj3kWLcLyrtawS7MsHFfw2inewgSjHcuvtG",
  "key18": "5DTNByfYbNShCTLqXAM4N8bpp2PwiFco6qsUhDUoSSLe9TsYUTgm3gbgroqZBeDAdFnLYbHTho8mMJPRyLbYtAz1",
  "key19": "2tsk4PsaxnTGGR4XocX4bqApbWBiXQFSbj4GR7QJgZboXhsmaYaaUnHBqGxkEdm6idgP1D9V639YVhnq8CQDEYEj",
  "key20": "4W68pWvXDK4wQooJtsVaJj4BVS3S5QXhtAQbxk77RgStV41Qh3wLmwsoRcJJhvcjxSm7sdAYLwDL8ZjwB19Axutd",
  "key21": "wEgDgRFUuhb7SKJseVB4FiMa5tM3716HSsqBVm6MPCXtFEyAWacnivRZyyP5ffjsaPovmiF4VqpQRt59Jz7DnXo",
  "key22": "wjRw7fJjmxKaVeE5B7fQmBhaZgyiibG7FR74wtvhwj8FGyEowRWM6139jdC8n5XQzmaFLTVtw1dWE2NApTBsTaJ",
  "key23": "34n4hCApCYEZ6MyEE5pZ2a2WfJgKjRupQHX63nvqRw6sn38Lk1Hgq4y7fQjsFB6bEyeyPvKKNXLomAcfWhEDiZAe",
  "key24": "2Vzh2Qg2nCjX8izn7KLKPuAYvp5R2GFuoJaMsuCAViSDV2SbzrztHs2ikzsuH7pYLm5AByp34xhB8auUd42j1Ukf",
  "key25": "25rytw8tmwbdu5XhtqzGV4GXgXeZysEEqWv1ngnaLk3MhBGaAfHrFwNLE2n994BkgAyd4K3xzzVgj18gWoc64s2Y",
  "key26": "4mEhLrWFeLvLVhVwKxebmmGRHZ8bEgDyYrkEdTbdURxdem6KU92d2N7uAr6v1CfRqHJqPBLKZjYSd2tMBbkU9MSM",
  "key27": "3i2QBjKXCHcYqdrQfpaMePLPwbgdfzH3gg16F7WKv72WodumArMAFfXuu8jGyV5SAwdM8DTNWcjjPYdXesED8E9W",
  "key28": "5Q8u2Q5AfXhdj7aQ7xM1zQu4Q7Yko1mCMuegf1mGFqiYiXn61pidELYjJ57cmqJrnwPYfEBcP3qj6mmJYSnseHXV",
  "key29": "XkeXi9udgUddjFdzsXngCvCTE2ad5W6gYR8tWKaBGJSVSscHwEuHoXfvptfNNzvGRDtPiLekCe6q2pHGgpjTVCY",
  "key30": "3X15cB2HBnxoK75jbeKKoJMSWjvkLBLEdRSLvESKBs83dxDERio3QkQbWbu4NNkedrcPzRE43hsjSBnTNqcztMPX",
  "key31": "5ew7dixbRwiCs3ShYB74nhvj2uTo9DjDQbo2bCv9JmxgjahgntJ6UW1eLngicQQQxJV3wJcCT1tsRqvmpFNtofsf",
  "key32": "2zpMJd3vugmHABH82wo1SCbQR8RpGQ178TEsgA3xVr3BKL7j4FPFXZNsSEh57Dba51wGpb7z9dMBkAwn5sbWa58v",
  "key33": "2MfRtABoggoi9asbfbWjGQ99wQC1LUdiprFrGvA33qdbdBQjZyBc9bMumcL7Y7HXxifNoheQSvgdXSmGWPg2Yehu",
  "key34": "3VRkD3SDQscBkVcKkjEL1mvXL44x62LGvaxDrmGxDjpDiRVnE4D1kt6f7xiyNodC4gePNavbH5SMVMrSfRBd9yYt",
  "key35": "2R3bXUMEbuHVrrjD4eKB97hKYzUUP7frCtCFUihPUeuYB7LKUVfUga8VJMcgEN2URhAWHaqemuUJaqcqi2GJTGw",
  "key36": "2Z37wKygPrEPLts4wf8F9kgK5goWtV2qtThuzat7kp3Gv3VjTEbC9BSSzFsf4acjYGD1mQGEDXsmspSkrR5T19wH",
  "key37": "3vyvf6x8LAQP7gk5FM6DTt4TGwTD2YrmjB2zDVHVW6U5RNjPQn8pnNVMjXkVzUBJ45VLAeWMKEvMThPCvbQoMpDQ",
  "key38": "5SbU8ZKi39vpMrBVGBVtJzaSwRUhYjETsjbXJjKCimscq7dXCHNXHXHGChMefMCKG8bqHNSr87RtwkKW8ghBPpfU",
  "key39": "1wAX1JzFV2PRJDcYbmxdU8L4eVigk5ptRGnc7XdRtYT4XLGKts3FBwWfiz7QDVssTZAzwMbbsbNdMgHGLxEtFGh"
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
