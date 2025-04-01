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
    "4A6yKpZyEfJR4dKCQq67ZuToJNYDMEcxmQP7E5gU1NDhf1FcvWCdnN1NHHqzp9mAi5gwNP5GqHEV7p4msmhrVmJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SaY99MWdkYxhKer3tVfKzHBFVh1RgDjjGbHsNCmoYfLLwaH8y8dJkScSPU8s1nfD4NRwMxb7QNCRt31qo26N8Ww",
  "key1": "2PaVPCX5fHbBzkhEdvZPsk2nTw61eikU8caE1KAti5CV4WhYzBeZSUHFakWmdLg8ZN3rnbfHn4vFCS3yyUGpMajv",
  "key2": "2Y4wLV77sKc5QZSyC36S9NET3q6Y1ok2HifxnCKfxGXpsfbTyKRtvz7Dfjr5qeJ3yPmLTRhMXoHMbnFLyj7LB3zM",
  "key3": "2JgewdnMiioTcNqm2dxyBTqoLfK6kChJpfpJSYzmfAkk5neULyQhmccSoivXzuum29ZMb3VZuqxz1BFvQheaZh1J",
  "key4": "48yTNupYXG596U8HNUhQgWmMVUBUqrAPQWnSWTagg3uoZ4PbGRreQQgkj4KVJ9BW1vqJDATsHtoQj3QMqnjC1wc2",
  "key5": "32XUV3tn2abzu5hZYEKnqVnLgpZagid4vgDFSTjJ4qiQDQUs41TT5NYyjLesnh8ktLaVG4K533AdV2eDJdwrJbhd",
  "key6": "4vM4GZxxuRimuqRuYLkmJ4xL8ihcZrji85oKQxuonbmvnRo2wtW5HWsf5A8nAh6tzWVX78uvPMT6vruBSEJuLzGF",
  "key7": "3vxjVuXdx9CaoEMQeesBzN8iyaoTBwUeojLL55Ags5WHXL7ELEXtrp19bgcMUzBErcvC4kCMehshE7exLwKHYTTJ",
  "key8": "45dPzVTepxKVuPwypouWqziJxmMV5rrgnmweoY4xhcFG1bzhJXqPRzGJLXs9QAMvSBPJEw7aVUbPiU3ibvaRxhwC",
  "key9": "3rf5Hz6r3FkqkpEEDpYTSN67wQ55HFfEGHgP1ZHgMSG8euNNvyy4XRsbnmb34KquzjzMqMH3gNPjhbQv8CPMXA1o",
  "key10": "3D432R362h8nbuRDmcofe1BcW2CTBoFXFmRVhrDxT43koZhf7dhX4cF5Jqh45bLM6eftKsaWSMVfUqdSEE4V5hVg",
  "key11": "5GTqm5oQ1VfXBr3yLtFFKmN2GgR8wXnrkDsR9iKmTnREYeJAcGQb1kudduwxmVoscDUwHHD9wttq6Po4Zb8wepAH",
  "key12": "3BNvKAAdGVxVTCRG47p8VcReTFTGipX7iFiviAi6HenedQv15QeEvJkCdESDvF6ADuJh6JjrpmdKeKDegixSB3ep",
  "key13": "45TRVpDrjErsSsx1X2W2VyUHwJwVeBQwBgXrtZ4f1YWgB2dbqC1eyFLMQKr5s2LprvvKKnNjxR2EBiLRkGtm38ej",
  "key14": "27QNVy33i38jKZ6Bk7U6Y9J33EuLnkeKi7zM8zoM2RWWKhFSspYZ87Hnu5XXtVW2piDwRar8NsmhsPVgdDv4XGAL",
  "key15": "RMUQh6aDixti8KtQXoXb5obP6Ky498CRi94h8ZJTj3eqWT4MpPm3CxyVm3B4A6CsHMtbhdwBXps9sewTGdmJnjz",
  "key16": "57YJHrdEFfD8cteW7auqkxTfchFtjyrQmtyX3GXjjma9QSr6WQQtLGBRNPK6fKxXgp2pm1xnMVtWpFycr7UUoywR",
  "key17": "3VsyvFkznC8DiA66DuXCzeLXFJiymW6AZ5bPGeaVzEVuSHWVEXCgpQGDSvrndPkGzmasU1gu9QfEZSv78wxTqLSS",
  "key18": "LF6aiKpLS8a5rxG19sb9Ny6zdK7sPUMBH1SScp3uVzC2Dd2W7nFjoFWS1fBBcStw6iWVouPg3WsCzm47U83EXkU",
  "key19": "2q6Z1awFuUz8Pu5YkMCnhBHGB4GCSHHgYQ2HbCAMLhmHq7dCkxiUmaTNSxSv281E2dh1m4ztwyt56AaAagyNbD2T",
  "key20": "5V9VYdQyB2ZSuqWF5YCySwVfhWhenfDCwcfLaaXeQWYa1FehLxGnAE175fyAEzGuTjSdqD7FGMnUY4cBMM4NAnXT",
  "key21": "2stdtzmJq7v66PY2PdY23QkyqfzeMfbrVULMjX1eN1TMb69UHVFg2E2E4mx2gTjDAxL9947Kw4kEDt3QGPpGMLW4",
  "key22": "2pqi52D9cZsfDcyREwQB2VuEiSnT6eZdGKwC42gECdiCDCYam5yjciSTWHLtBEfDAKenk4xkPJzojfWfyDuE3ojz",
  "key23": "AfuSX5yPtyrRWx5PWxaCVwJWiD6PM5TUgcLEPkrkRUz2Mp4jpu6Sk9ppmZwLAM8XijnzdF4W2ro8xcPpHxHTc7j",
  "key24": "4FcqpLdfb8dPfehjYyuz3RSrEKMNwkV5wPAyH4aepMafMJCLJ4sG1iVq28bRbvbX4CGbNquKyzmp4jh2TyWzwHg6",
  "key25": "2NRKoKRntLno4uZKUgSmSS8kMMrr2Mgn8yJoVGYYzB2bvdP7r6fYuSJDvntrYdfKfudz8VQVuduHgwERdHoTvFRr",
  "key26": "3kMwRu6DgsyLfaUMSkx5dQrz6sczu32UfkrxjhqMMy9HVszNjCWkF2u5Dzdcy4uVVsypZSiyVbR39QWaMprWNheL",
  "key27": "4GegMPq33LyBDUvZ9X2dEZyqZvC8syF7PUCT2CgqLTdXAvq2deEH5HBk55bCYdHG3JrSTQTqE9CeyJ1T7JaowbAE",
  "key28": "3bwKUVYF195wYDM2bUrZAWL9tcot2gX5UUzSka2JejQGkaFCZ6UNzhhY4aw9vZLBybYSg13E4FGrNk3mrXnaHUJp",
  "key29": "35vW2YTmDS2rKhuh9ENCsJxyaGg4KHGL1ykNXgTbSX8DTUxd2N9eJe4syK6URtc4rPqrreu4diWnBdhToEZYuQD4",
  "key30": "4zHnPdyrS3d4dbHxH5ddBQCbjjASaz4DiHg8jxFGQWrg5Ke9CVduiaHd4DuYSh5FRLHiA2XnG18e4FWY9VAgQqHb",
  "key31": "KrM17dGToHnBnb89MmwEvtd7P3UkbGVyN8vg7FKoDby2S4yxk5Y8PatoS3Gp8e6n7m8Jyuamh2DwegcUtakveFY",
  "key32": "21XR6t82FmoM4MJsgVKnHfNbqds7CNZ4TMXF9KJkUEW7TDFYzqivgeUryFcbxuzZ1FnLxY5jmKxaj2QBPdeYYRE6",
  "key33": "4GwVvuZ3SpC4GK94dddD4bcTtBq8YdKS2jqAHJppN8seiKopJzoyLWuUS2fqfNSjwfnFnYu6Tqh7fhbBWQYu5V5G",
  "key34": "5aotNnzCDyKTYrNH8sTvSFLHCosWMhWYLSws5a2PkkY2Merfw6PzHxGs1J2GYM8NKHrWD8kWGRaZa4uHe3s6UxP6",
  "key35": "34YryvUaYK4FP1uqGawRGYD1UMoYKeCBFcNiYerfSUSefxxxUXUMAYutmfsWrghHbbVyCtoGxrukZEi7Duz9ddnP",
  "key36": "2DMCXwr5NCU1LrgrEs1KTRR61PJkACDXNrYLgJqDgNSdVwkH45e7DwzwPYUnQCu7kXjfuEzub4bgBMDer5XvohPy",
  "key37": "64siKSYus5KY7PJuSKzC4NkAKHxHX2bqg5tFfXQj9TSD6KWsyCF6N7CPHDbN4ehtpTSQmdbxEBH54YXLtPR5PeXK",
  "key38": "5xpYthnfRE6ycAXrE6gAB64c9MbMEAGuYQ1cQ6LMzS9DqLLoRUGnGyTCM6Wxusp3eYspxNXXN3YBQZssJsQbqnzb",
  "key39": "3vSgtnrUj9aNzQD1KC9nJ4bVybUGH1M4RukxrLusnoq7HLp9WL4yooLomxqYrjJWYkkkyfaz1rmLSHxDtm6Y8j4Q",
  "key40": "hvSikhvnSaqUYXjzGdKBSEVAvhLgxgKbwpiydv2xhSe56WMh2eJnTFQdcfFtWzRc1nSsQ7ku3aPUMiVuQjJGYwP"
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
