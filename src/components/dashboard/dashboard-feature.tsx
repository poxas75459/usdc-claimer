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
    "2vSEdv2YhoRmKjaR7qjBuerN5bKGoRb2XZY7q865xibxifLDMwhCWRk8qmDth2pMAGSFiCmXCYueXjnC3JpQXDNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Se1RqSGdVzdHGAu6kb3QqNAMwCE2WCR7eX3qbZEPJRCr2dCYAXqSRsq56gYkJAoNKbpKeAr1vuALG6evNdxP9Fx",
  "key1": "3EGLq1eL75FzvvXSBsJZzyee9bXBzQxiUbUDfHWy7HJ5MCgFgY245SxKsgN21Gh6JSkXVQ1jSjpEFKG8zhQ25Y4x",
  "key2": "4MAGSnqxUzrw7STyweqBv7Ayk9CvgWdDhgJ19nDutMMWW4Dh5dFx5FH5JpUDDazaNmte8jxxRfrmBr2K8PahBvQ2",
  "key3": "55CaoEYk2ANv6AsQwmbkp1Y9h2guzbRxyJfHVVqGha2T5w1LV9e6M8LjXGhLfAFHVdN5n22wAQFh4dyk3mxQRSL",
  "key4": "5myNV5atjaovm1H7SDSg1bGJ2mazaiWoSUbJuW9xnyTPGKh3EmheqEi5JivgmKRxbEAZxacCigunJ3DskNToaaW3",
  "key5": "4HqdTb3hrChKYfbDsXY6TP4P1ywEFasbbJmCZuJVXADGahFVxs6g2GcJN8oYsT8R6AJAMXsSwoSQo2HNB2or48Rg",
  "key6": "5FrJgQTduhMDh2vJSNqToQEDBU2LVjPR5Rnc6rMaafZaSXd9Q45rXXxVrKSu2NX6FUHz3pZaEyiSgpCKYGGYeVQj",
  "key7": "3uS871tf15QTxWPTZn2dRmpBujP4ewKtaGBhnmBJVsuWmQuB1KZpcMQ7x6YRivFKbRAeJ1T3scT8qosY4oDPtBY9",
  "key8": "43Chb4z62DSrPvBqo9sgYyDTPmt4x6ATDdqEcE8H82a1Fdg55XaBw6yhnUwB4x5ChUyfXJgfgyina9AVTikDMTrj",
  "key9": "4gFD1uq7VSMJ3g2ydHLGn7x7szC49vB9KTBWHXgziRu4SYC9WNGCKnHmuJpe1vLxZ76Gr9Z7qoqobrFjWz4UtPQE",
  "key10": "5WjqWJWDgD5f5NgpJUfEoDU6mC1tYxSM9ETp1xtnFZjPHETko1NNGHhBLsH4C9SFouuT4UU4GxnwoMnSDYvfCTY",
  "key11": "61qBThZn9jDw9YyfUEh2cZ8bvi8zHdBw5TEzgihTR4HLbd9gknd6z9ahhK2fCG2pRZ7HDRUQMrDykyLQZ56RBZvf",
  "key12": "4fu69poRyjS6cqZRpxPJsYX2fW46h961D7XiEjjUCPJzQxhdYT2WrqtdR69JnEXZJb46RodyryC1Reke42CNhr5G",
  "key13": "5zYeXJTNZhN16qLQuhXmwLknvbA2KxY2URMspkA9Wb4u379wtWWhMwk97i5aGFZ5nxruB882pb9CvFKnfZmZKwJN",
  "key14": "4JWemLCJPUkPbVkUxa4Jj3qx5wPZXY42ABRq4wtj5cJhmM5xQQJNQTwwEJxi94ckdz16GPwDh1MPBN7vNQ4GrxRj",
  "key15": "5EZwZn2ED4xCd25TeY8WsnECmBeVeAauPD6W7syGRTPkVmBq5CUK8rzKrUoA9S8iMTkEmfc3z7AYCT2p3hEXYehT",
  "key16": "2LaSmrsGZGkihS4o9zrR3ZpEy7efgCpB8YpWTuD8WhjBpuSSVY6uA2p1ZFtoYAwwFnD4GHTxmF3jbgNfjH3gzWLx",
  "key17": "3UDm926m3G9i4QZy3VvHB5HNQzLtn2WhGYNuNFwLo3Vvvw9istCVqUWKAbYqf79f6fUEkKpQ54ZrBxeLmVdb1nBv",
  "key18": "3wV7aC6RMX7q7vAHzatXriZcrCRATTxJJWjQ1qzrMHNcEzsGzhxDo49vvkmJjDwFgRVYUQ9Ncd6Jt3Bu9HyoYwzW",
  "key19": "2GZsZ66vSY9EG7WxE5UNRW4v5VVwdm1rCQPaxhQzndRpyVx8iGh4pAXDVKSUZdPL3EVQDYpwXWhmPRhzRTBEvDK1",
  "key20": "2BfF7doHHGcf5paNrVaws2oLmgKp2CETXK37UxaZWRmoLRkfKpKYhqE8FHErsod2oVbV8wRfdQZj15jSbQZxgcm7",
  "key21": "2XWLMMvSHZ4vayo1DdqQLtLHJMFo3HwvREn1oBtnpFDipgyikQdeWMGr5ScFD5PpYowThBVySfodwijRs5PTCeAi",
  "key22": "59bGCgmFw75BEYvGTuCFgf4gxb9zpWzKV4BDeSPMV1274ZUsyK7zUmFJMUBbUDDZiLt9hB229kNq3PKdtY4qxecu",
  "key23": "5wMRFrPAufycZhNg3VVwYJWnyt8BZz6VPYNZfsUS2bmHYDE4UzL2XdD9cmVno54myqmidnjv8yoVQ6cL3ZTNfeEz",
  "key24": "21PhGgTADuGRxQpGR6YhGuoZWgTC65i1rKNyNhboStMoxFUA895pjLgkMqgiUB57byz41puLfVQbmjMmmCWmYtbf",
  "key25": "2gPwesAuaDvXFQnoNs91nb9soacv7qJAPa7ELzRKPwjwbxC4EkYDwVvnH5NHtVAfGHWReRmL71ojYwuruhgk8MCE",
  "key26": "4Ah5v6tCqAfNjBHZA4HGsvMnnSDxpT6ANJjghguRe73z5RnspxJnqLw2wwffeVATJCfATbB6EkM2f7Ydf4ds94Tk",
  "key27": "4FYRELLau8bos8yHao7voCZwpw3xPKMLUPujqFmVyuziCx1hYw1mL6jZL49XXQeb6crad5kh3zvA8FK47QMNM4Bm",
  "key28": "i52nDjsimabACqMxGGpr214Ms3EHJWskh6zgzPNJwi6WLh4gPJSNAbZqnQ7gsjDdiPvcnuuyZ56iAPb1C7ghsw5",
  "key29": "anQsZJjYT3A2F3GRW8PmHedc3Ng6r42juHqXhwxm4wrAos5NLiL6RnrA1qPCkHu5Abcdxn221aMMNRUDWiYV8Tz",
  "key30": "2zNnoxg7ev2YormKtapgfcxiV9z9dDPB7FmqBTiNrpVKgbZBtsd2pJPQrciU7nXbDJUMBiV9ZBdsXvCRPmAZamxM",
  "key31": "jvHp6rmEc1ppEspZESu75ZEUATcDN4T91h4uPPUn7KMiqVRktNsHPkNmaecVsix6XQoMUcihyfWoKAygw2bxdgn",
  "key32": "4SxpKCXSnR7btg81m896xjsAPLBz1nwMGszNihRLHZuW64F8HrhYvYjdRurwg7XuYEJwx9NREHKMLmYuhhRjcdxQ",
  "key33": "5dadxRpwFUW8RzCwydyFmGCPzqg8de4j27rg2m2iGd7GnycyZG8hmWJBYWuSjGeQt1GaRyQQBTdEF4TMMZML4kLP",
  "key34": "5a87GLomjNbPDbpwyWJgrsuwjHWg7oFVTNY7UbPSRm6MaB8LvDWu8hwWfadpbXtPEBKq3ssQinCSFmQAGBxzPSRw",
  "key35": "4hjMAFuwJpnsfVvB8ZDEJiHczTtpWbCq3jQ4Rfv6Eq8PFxWRW1dFjG9SGBBA4pgGAAVQmAoHcUx6WtKorXvqXyxE",
  "key36": "WTsAMxw3N6VY2TkQ5kKWpn2qn3MVUbJyUoQgqdUMT6hiDwTJYiZSsWkrtuiVffzpFsmCyYhZkP15QbnCgRrdVpw",
  "key37": "4n3WsD3GFu41GoPCF5iKEgG88bHtn87bKs93H8ykj1TqsfyhFuGmGFHVu8sdAeLAEkgPBKKGTNZvhimWoP6e5wZ3",
  "key38": "2z5YKTaa5kk5AACdqr7eyQta86NYL1VUT7ZrGbwHscwVSYwCYC1AqRix2P1scAyc7a2BanoSQLQu6fgRTNfTC3Ep",
  "key39": "46YmqsQqV5nsGz2XWhQ61wZ1JjpbR2rPsnuxWKm2arFRtLjncvrsiGYNicsg6cZhLFdxoPfqp3KkzZrjhgsUnyAi",
  "key40": "2vkHQiB4Wz3vjCS2ikz7gYmWkhpyZ6NQxLGYpqu4V64AWh7YmurgTGYUaeXLmnmF74BVixswP3QH3r8Qnsf8sGzn",
  "key41": "W57tmo4B7CbGTxTjmSsjL2t5J6mXZfauEaz1JyrBpQJvAVG3MJJ9dNR5z3T22bRXL1w3RugyE7Yryh5h8QjnNNu",
  "key42": "59g2d1vs3MNxm93zB73hNKNAu8pXEifrJENivBQo8JhgkDeGg6sWcrSKbkwvVKyowEM7MKqcQdjMC6ZKSEfQ5VVV"
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
