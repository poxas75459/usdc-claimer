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
    "2MDuni3RJEP57G7psTEcqMBDeHiK8ghHWWZJw3zyewvJTjpvx2wZUskqu9YAqZu7j2NULSQkXZCKPxxLqWfZHBHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjpVb61XCNijkiqLmbUpoTcaYp91D1Qn4PkGLd7ddb8YxvJpZZEoZ68gsTJtHeXSWiDLX1tmP8CKZBBB5dnSYYv",
  "key1": "5HqQhxSGX1DRmBzd4A8ZQ9N7wdBzhBF1duynEDFaBdVg2DDFPUyQr8Bn8wdd7zooyZN8EMchihbxnu8HEnFL4dPA",
  "key2": "7MDtXvTHcfUKhomk8JVhj1BKcAU7niF4ZGTxtwR6dQvx64UdZ8xET992iSMT21p5WuiKSSABeZfFgqoCDkRbeHU",
  "key3": "5KkCoXA5sxbiB9uqdyPaPb472zCEvJvnYaSipDHpxw1trfc4ACVo77tn8kdaCWBTDAwVzsnzds9PnvQRBUPUrfzz",
  "key4": "4LAhrafEpnvEHHfD53APiefr3Pfiqpba2CbHfwgjoqZ3R3pn1UuwMLRkjYQbr3Uu2fpzywk9XkWdwhpGUUhTdYPd",
  "key5": "2jmbALRJVFkBuzJR6yAyGHfsErnFhMayNWG3uYZDeeDHPxKHgovqmZriWDU4wbG1D5F34pFiK7cgZ3Acoq6V8A42",
  "key6": "2aaBBPZ8nqVxcbLQfk27x1ttP1AHdQG99GFQK6qop7WFcN8SdznAFMPQ2PhRa98pADGy4zSNECyTwQxy5oXXUBxn",
  "key7": "4SLpNVbGdVT2YRUrKDJJPpTTrcAGtpK7JrBtSWFFkdrWNxkEgget72h5qq5yJ3NpHQuiogkGhprfqDSPbLLJkz7H",
  "key8": "5PD74p9LdCUKv8bMju4rVpaKBJih1dXUkoPv1fiXUYDnMckiYKzv8CyiAXzp7c9No4PZ99jv3judb4iDo3HrhUYX",
  "key9": "3S9er11Fw46BCJrtyCjcre6odxTkHczaEP73zmirQQqY8KoNFpBsrNLXmAkzv9vgpDGDXifdDewe3CNx8AEnkphH",
  "key10": "4AhZpek6BQV8WjJrQbjfCcFnGE1cvGXnis8CbdgceFQATimDyzKddCuLjRMWHpVfLPoKuQaMrq3f5hhQjNbRGnQ7",
  "key11": "3duRzyZp9EwwnCQK2zDdMWNNgHfCz4N3NpvsSdQukLphXmHq6zLcimSHByv7hGXY5yojCW8nNEsocZMU3KmkT6hu",
  "key12": "TnLswvxVPG2MVJCD5oDEzkGrHVmK42cY5oDnhCCVfKMzbM36fzoAQFdKKiQQVLScUdhn9EEP4RH6dvVzob9LkGZ",
  "key13": "3fjroQTm9sSLeAoGSUEUv1fZWSwNPQ1HrEPHbLzEwbjvM88cUzdnkthgQetavuPkMo7HNGbUv6ibQCts53rFjLUg",
  "key14": "TEBTuXQWbvutm8vXX78Ja3aGgpXXbR1DzzzXocp4GLvHowt86Go7ivdJok9Uoij4mPxBnjRajG2E7j3CFxtXsw3",
  "key15": "5Sfb5VbDsYLSZ99wDd4Z8zXG2YQooRt1ojJ1tH9yGE9G4LKeaKZhs5JTmJvPwaHTe4gXaFqTdu4aS5D7t3uGJcz3",
  "key16": "4fWhcQLeg9CMm5bf6Ezk5hwuYgc7CrCiGbF7BBuXaY1ZnyMR3EwA3Vgsnc2aRgmqtLpWLRKDWyQB5BjcPnreuyda",
  "key17": "4yQU3gvk85uqjKPha9pFJApwZ3dLjF6iQAKUMzqUYmtE7wBa5MvYgp8BqYzMsRLMUjowPuKSpH6HBbkFMSwU8Xmt",
  "key18": "3jYey6dU3jD2pAtoDJ1cakAeJztYijkdhzRKr7SykPEWUKsACmzkMtVLnyZLkxJEXEZwUGuU1uCRFXi9say5DNwM",
  "key19": "YXYiveYy6G3heNok255viJ4CXA4hqVjx5G2n1dEj1A5naAaRmxttSepNK8YC2UTWCTBvsjvpYs7AkjwKuoGoCCb",
  "key20": "2nESKJQSpgTd9yZG3o3LvKDRtsCWKcSFMa74xaM1CCFAWVjs5pCYCWTxCorFWFzizDQK5mAMUP1XrWZWpEbyHsuq",
  "key21": "3ZbnFSwHm5yWMkjKnVUX74KpQgLW7evLNj3MAAxoQuhZeWtHLHkzDkc7JHUFdKQRsPrzGzyN3CVJ1xttM7VdHErd",
  "key22": "5qEccYUcNaWgMz6M7xwCxDrVAZjHjZgNfKUMrsp6cMRvatbkju2hjEcg9aLto7Bbp7KdFeiVDtNqfTojJDE31zZe",
  "key23": "2ZCVmCeSBJ5hxFRkc8xy6dKDQvdbQzsq8JffNspNGTr2VhGTjcGaGh8apCwFHA72EBANbNRzZPhH8q7e1xfetq3q",
  "key24": "5EFgkZjpUjYB6cWzSACsWXdMf5oxCzeDLrT32cLPaZ2pxxLMngSE81K2PL4veas84HR9yTNdT9dC2NzJbnKNWDS9",
  "key25": "qrmWhTKhibGvH7XQsiB9hwZQqbrq76YSbd7bWUjXAKVfCGrt8yxgpMbATQZpEoiZHHQKAYR1H685gFtF48MDKcx",
  "key26": "553JMwbRWUdu3YG5JzQ4853a7tdMQ3VifX9WCFVP8sKCTKoVAnXkyHSTpwsk1UeRBfh1ogJjRx8SxpsQ2Bj3Q5ae",
  "key27": "4z4js2KKQfHo52WVH6cCds554LrBrZ4vCXwtq85goDKdx1rqE4iWREthL8cApCkg7cTUvEGSxHm2AJmJNdsgfKxz",
  "key28": "4cNAXnix1TbbCc6VjLeAFXu7TT7zu1J4vWAfJLtryATPNvgi1xJAsn9J6anRViB3VQPwbE71W5RjBHstHPordvBs",
  "key29": "29AGCHVHYKeYESZCwCxcVTqDWCJy2sgbSUp1SS8otTq1U3BSok8geGZsARLe2VL253oxDkwBZNix9pNPUaUo2dKp",
  "key30": "39h9JHmq6UjMXvA3FLAAEgjGdaFRf146yRGeCMu4Lk9C68nXcq2E9Bg5VXSreqaSnfCDkNcscCFkc9DuwhJEAkw5",
  "key31": "FHsXis1VYX44GXVyhrgKq4CxUVKyBm7ZB2u4bMUEhgTKHaRHJMcqEbMPkai3mPnRGqGF6ArREv14NnRYUke5uYn",
  "key32": "4pmuW9P84Vnx76r3W6ihgQN31k436fWDj12fSmcLuvhqcHaLMTcsnrcLL72aChJbBcS32Ymmb25CGeYfSjUZprGd",
  "key33": "2xSb2fc3jg64tGXiWevwwu5DAp9BvuRegm6GqmiNFqymMiisVy55KCbtkg4LBJmLs8Ub32gLeHYk2BdPjfNHyDw5",
  "key34": "5NLpFSoRsoXAwHTn9oZTo5yHA5Z3whhC8MbrHNo9fvzfqtQ38oiQKMwZoH4XEgvTi7qZS85vJyTvbXyRiEgVhFFN",
  "key35": "UDjoCjDAQQ41hmud87u7Pfvpzdhd7VhdK2be8SVmSAVoSyhrGgN3WfcVQV7WaW7irABn6F3t9ZFnBQBXq2DQu2E",
  "key36": "4CZApxP9UCVYLHmjbEsLDWPQZPEAVqq5x8Gf8ZPo7Jkja6WWbiPUFYgTqSb1DgHj9ztcK8UJRqyGHrRdSXAP64Tc",
  "key37": "ZEZpSQGR84SVLisQbqTUnZBdQmZ44CDeTHNbrsBqs6XBY2hbhjw6icV62DuXWRjAksgkhrE375aT98Q19jnTCn8",
  "key38": "3v1kwEgvLnQoy7RdgtYg1NbZXqXwoyN42RooRD1ELMkQ1QTugJBMUpAUyCxwiYwmYH654GqjjP6JDHUf5aMdAYhB",
  "key39": "5QWMXeqst5jcYTRc6J1dn5MzTzuHQvTcDd9hTyggS1evqT8HkbQY5PTpz6SXjaqxLBsZDAGtJVJmGAN8zWNhNoFn",
  "key40": "4iziL3quy7YaAXF339nMCKn6RP7hhuxUCQShMX1AAQpxXCrEU8iT46kbeAQE6cwx3thxv6agAzX538D5j7em3ZrP",
  "key41": "VgGquaxjfyq2gmWuQ5rfqvBfpH1r25NuoXFSPsDdZaRr2MANbdPUqsGeAzm5cbSWQcMnYr3vMFoTj5xgRWsWJqK",
  "key42": "5RK8UaePvSfUdXfyvAUg2d8ZA2owByinFLMpiXYAYbZYxuFZsbqd4YZHWY6FeYyBiCK8r4EumFi26LYZTePpjhYA",
  "key43": "59yKApbafLS2gwnZydn6Vs9ypXiWBh8h2nZNxBuLLko6rjMYbim1EG2451u8NCDGdXAELDSmbc37t1QxMhmy8VzT",
  "key44": "5wrdCuZxpvhyhe9CaXKHyeoNV6stqV5mAAFnCmqK4fNKVwHt8Cftfhfw6HMWxedS3rVtiMvi5AX3PZzgMQyRz61b",
  "key45": "4Vi7rYqXpKkVQoZf7KmX5oz3U5Dfk7PHsW3NRQKwX6mVSboSZWExFUFAoD2FGGmVjrcYCtpAiZZytTVF8srWNZF7",
  "key46": "5XYrKpMaWfPMUAsJHeHG7HoZrcxKqUxoBY9FobBhFeYV7MqDJnFU5Ehim8wFPDCZ2h7xKrkBxYcU1Ep22LBUe9bV"
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
