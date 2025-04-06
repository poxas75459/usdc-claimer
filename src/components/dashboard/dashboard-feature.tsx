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
    "SJQ9DAYeCWcNRQLhn3Lqfgn2rPJL3P867WN55JsVafDEcSDMSThrJrpxPNL2bymYJveFh6BZoJEMw7og46uXrur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BjDfCWdaR82PY23997mXMhGKiGdPswNTAXbztXgGHXEWG1bsoaM4PT8VXUcYZD5sSbgzF9zGxiKQS6Y4XZoQieo",
  "key1": "5XPqBQh6fWoo12CHToPk63FYT2kjgg51xaqsaofd1QoRvxsbkQRr5ygyhovp6f23Fc3BPaWLssY7D6Ey1Svsi1ac",
  "key2": "4WnDuWoKLJwmzYTTPeUYVKNKUaQJhzYGBs65NLriq9STttYwV14wQZMwesxqgCwxZvNAXwy48FbCNoj1EUUAB5tY",
  "key3": "Hm6KMziTM1eV5sSFbc5fQX6aRMZLCBRr64DMn59p1N6wp5zf6Xzj5UBmw7Ns7yj1okCdaVzqa8zqfEg5JevChgc",
  "key4": "2kaWXV7dNg7Q9MmBcyR5EqJ2Qan2y6K1Ydx9TdvKaK689cXao2SXSuCWWktbzdsP6n1y2zgYjBC6kPkFgc9k9W58",
  "key5": "4z61jWecDsS1bKXkco5xFvsDjv6h9YUuaGM7z2rJQF3Fq5dJefnFdf1UHFidjr5u47FLGLJL9Xotv82nWqtbB4Ed",
  "key6": "2pQMDy6zqqj2jKD447TBWkyY8UJfxBSxGdgiowsaqGYEYLua6jFBdzDSBYDiHT6qAeTA3HgNed9W5LDbZ1ZCgMU2",
  "key7": "4vMyDQaCCw9hrpcC6QwxYJVggWaQF3oqim2fk6X5UrJ3rHjWnAKpm53xd3ctaLTHPndUXvkKSqB8XV69XQ3rbfa5",
  "key8": "2FhTKpbGbVqi5mqEbnx7aEtuZjZNh2m5FaooXi6pFDENgkmkotuHz9QRjTYJUCYacoVrW9Kra7WMxUoGXxji5UEv",
  "key9": "52SRbxBLpBuUks9zh2TkzoNSMLQFNFcmrLhDEuKUHSbiSgcGmJGJG4oTVdN2pLNrZtqo643PkpkuxGhwbHkuSSDm",
  "key10": "3RxD5rF9L3xpDeXo3XCEcFUfibygKbZYAokuJkRksKW61QXYcFmEv5yVyMPu325Smn9HLyBiqJA7JFwdyezccXiZ",
  "key11": "2X22rMSDQxbryK6qe3t4mPNSyr1gpnMFUKbFWQ3ujMKWmvckGrD1Vw7qbaqRapoRfDR1hvm8FNekuNETkW2D7Esj",
  "key12": "5qeziR2zEs1fnnvKR97YvPgmpzsxY5hTGoh7sVpr6euHwQad7qwPA1kHaNDtx8ZxGJdsuGqEJRSdbVceaGXDvDLQ",
  "key13": "4My4MVaisTGCunkVuZP4iXnsbAgabiQFzs746xEz14bVHbKbqoBDb7bfYTQU9Y4tYnMqDFaedvCUcSz9gPQrjHyc",
  "key14": "3s8kGrFk8hL5kdsE2whF6Fviombbrn4krnhZHvogszMgCkJRxjzFYu33j9qvtWjKr8pc9Ew1LTTBz4PVpUTN55jg",
  "key15": "rDyAMb8jJs56cUKtTvodWT3D75ZkzA5sqvxgdePuxdPeoicNbmqM4m3eFYWsgiVu3GLoe419Kv3ypDsvCDz3Wes",
  "key16": "4HSxq3ae8KZfkfD5WYHmTmsyd8FSPpjw9QTSUpGUQoL4u6GvReLKBfpSopWgyvGx9ykm7VizWBhx7Mns75zJspK9",
  "key17": "55NUfiv9XULKqJNrXhv9Bb6nSQn5DsttSE7TU3ecnbYzHB1rqFwRXawQUXMUw6a5e7DWCNZHrmzzp8thd3Pq2SQS",
  "key18": "3PPR6p2Fprpbiz7y8XnBLvYMWfXJ9cwQ9UW4UHB5RMqTvwAf5CvAYnJjzsXNs1geUfY34fety8anMz6CnaPomnoG",
  "key19": "4MhDP7WB1SD2DyZSZzuX8YBCT2i5xAvcijnDHJYc3KmXjwsjYXbD5p8bi8KRnXMSDDhPxtTnk4AYF5mXadB8VJ9k",
  "key20": "392RqfaejN86CTuCgp3Jd86bqGriC5qUo6qjQHCsaaEKVrT9AoZ9adMWRA9ckHoHH9244eYh4dWF7SwcG1cfvycw",
  "key21": "B72DFy1i6PzEd8CunWegps8vXzEeCxtjucYjpJPYJLH9a6yamqkSrNYjjYHonXVW5AFru1n9YMeNnZ12osWKVjz",
  "key22": "2UoeBng78ADr3U7jUFtAx9yv4ARHQGScXwPe49rTKqAigVVL856WYDWwnb4pFsD3evevZFAYG1ocSViAEmkZF2C8",
  "key23": "govbjVkdFPnc6XBPv2URCoBCs9DcWBiiiHAZY1J4PHEJfDfiGqJ3rhhR8bVzjLGJPm2KuKDCtSswTkEFA7djRCw",
  "key24": "2fzBm92EopKYwoeZ65gCAvLAq5B8usCX3CxbboVpVtHGAmG6rv11MFCbrUr5dvaYsxvmNtxKB2357pC33woiXh2o",
  "key25": "4YDUHueCQd7s797kNWWgGQ4bq9dWX42s3RU71L7y3QHg1Dftj5dcEnzp57wakfqatvoWqVQMXg6a1JAQvbQ3oHue",
  "key26": "5GooUy5HD9AE11cYLN79NQFrgpHH78nC4QvrhFNev2k12uG8CSNJnMJwDxQXrZVYRDagFkbDKCen6Lqax3zSfU7f",
  "key27": "3hnGiP1cwXMk6iL65DmJ8vmHZ6kYPTrwMwHw7XVXwnoEzxKVAjJeSjALrJ9f6oKSMMwre7iroVkSJLdH51gxLmn4",
  "key28": "3h2kXRNqmULxrsLzxDSTd5zjfJNNRi7t54RaDEAS5z4URhzqdrh3gCz5av4qhnwkbEQHEYS41P7nTE91EeEU1aY2",
  "key29": "5EUk2KrW1awz5BqM64MutfZshHQm9bjtkE7YkBRvTiqGySWYvLzGEQM5cJJh6NffwWTSDroqezq8ULwtEjcWwyDP",
  "key30": "4d3P8dVBtSAYhKMSvMMjwPHmCrv7MNB8P693UhhSoxtC5bAPdH32UZwtgWM5yteXcFVPjCBvhytSpJ2NTNyoaHGG",
  "key31": "3VhxjPJH9BEYrbd7AuHPDdPLCrzfbTp1PyzJaN6N2sGDWmsJTQ5HNpA7KgvJTBkqnnF1oFUD1eyH7rGZkb25pCNp",
  "key32": "2WQWWZHmUJ6UUFdQ3kYpRpLYPCyG1rRmuqpwrRnpB3JaK2tjciTU6xcQdG21axmz5kGBJVMQrzALyYTQHyb7gKuy",
  "key33": "5XZYb7fWbBvooMcKfE6fxfMFTZXzww7u3Z5uqViAzfKAjPbrfcAuJtRvj25C1bzDsJdmUYmTJAe1qLnjp12hxXV6",
  "key34": "465dR9EXvJRNAeTuoCPnwXpHGnE6mCuRZa76EfhGXHzYdVvgWkB9AKToQPRUnSE88eGszpjXAvQKsBA5b1FGYD6C",
  "key35": "4pihR32UWrucbZbByFnWNiGBUzDNkTNjwpvggyUn6j5kbqYT71dT1wXsxNorZVhT8bqAwx2kB2NAAF922BnBN1ng",
  "key36": "3EN8nEQFJVL74URD6vqs8AhbggYkDH6BL7k2MSwdBffpFGuNMhm4uTqCk1J1Aq1ZByAGjJ7a3sAwdodafqSNoSv6",
  "key37": "3rtmUdcZHCF3Y9v5HwipbUrFcXa3xzFAjR2sNL8LnShHQBPogCUnYrjpx7BFRe2dhBoUAq1sBSuKhmGYiZqcYsKL",
  "key38": "3jw7qLVDBq66ec65Ysq1JL1DFpfWitdKjCECtFNR9AtGWNg6pE8sGeQkRanjmmQj9B6DFJF8qmo8sPMH9oGFMLjT",
  "key39": "4PtSCLngnQAHVnoWnw7FcvYLnUVGx5WKRmvVSyZtRXf2GMAnuUp3twtbFbw81mwYbCqqkCKfF9unTxjaDkcMXtGq",
  "key40": "qe3d53bgm7VTZB7zo7mTUmfx15DdVW1PRL3vj2EvuwSmHVoYvWLdANTvD7dofpbCsJUTA943vPZBKQEz1dMQtcj",
  "key41": "3Jsp1mRBwdTvLLfr4Dao91MADWcSZ6SgWc3U3cWLEg56VcNxMrgrqjTEZbf1uvuaeD85U7eQDCpw2FyrKtLLaoAJ",
  "key42": "5kz4Mik7ikJQAsQ6K4qNxDGxuSDqBWSsbpXXaSmMcxYk279J5nsjsLJPgGDHj7oeD9FSMNwHMCsvJqX4D8K9rwKk",
  "key43": "2DYuDkmprxP2qBcFV9oztp9pf6zparTuvxwcYQE13oDpZiEZA7rWqSRYVhuYv6BxLbmVtpyDEi1wh8hov4U1QAD4",
  "key44": "3qXsiTPuacDNAN5LoNYLK71QLyQbngJjXhSSPECPwijiqRFovD8TRF72Rbpbtvtv2fuxzAs3ZwtMbiBFUPaA9M3D"
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
