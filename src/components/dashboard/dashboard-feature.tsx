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
    "3gM9J3XyM2jrh3LZEWR4vsSd48g9ANdB6AAAbzwHEfzJoh2chF2Et1CfKCq41FbjWEHtAjPf2hHJjLd5XpW8Yuf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3g3bTUuP4ndaGy7PfMMLNC6vxVN98Ji5AYec1ypFyN2mALU23m2EvMMMGEm7sYKn1AkidgntkpubKUXwTfFPtA",
  "key1": "ByWtPNf9Y4t2Lx8sfz3T199oBCeHsrTTbt2CmBniGQZjcZ8YH9rs4RkrpBPAYCKmAvt98dmHvstJb6mLmqyemrF",
  "key2": "4chotsBx2hiMPSvex2pho1399iFc9aex1kJnzEnzcgSj8Bu5ChBnTJQXxi1upQnKWWUUXnx44caWZAJLx32ztn8o",
  "key3": "fNuxMFgcSSdy5BRX7gBHzTFqcLeam6gzLs9gwodehyrL42A9addtsh9zYpjv4aE32PB88Da2LHqSEDSfNHuFTe2",
  "key4": "4MYVYwWnsAJvL1jicCYM8mu8XYVZkZ9iWp3eQAbBQnJRT32f2CARRmVVp9LDk1gmJW1JaJuDWzT5anLd4tT6xVFR",
  "key5": "62Jo4mCVdFipHqDybso9EiGV8YfAqh3n1H6cxdpHkHRZDfgfzAf3KJYeqhCexzEr6cja6JFvuwPBFZKCGsZTuKLz",
  "key6": "4sdQFquvAkvX7t2LpptSvQWfoPmPF72Cc5ZAJSa6aqUcMjGi81Rw7nHUtzyVhAEseHtH7j6fsfLkhnLaY2yxSrQX",
  "key7": "66g1j55ZSTjQJVCU7W9RtwMVBfGcxzTbBgJEU2Y16iqxmmkGZhGEFSXUVoQ58fZtzGvjakasNRLZs1Evp51TzUQu",
  "key8": "4Cz15FLbsd2UGD4c3d25CzBSdNYjkGJCwXAhhdZptA2z3cCDfttucTpcaza2ZQSkcZnfMgRu35hdm52d3SS8gXHF",
  "key9": "4hNFwxpEuERhtrRTsgoeTBQRd8to7T21ZhTwf7c12RVUpfLgS5ibSHTQpE4StgwFeeRZmwsZ9CX318qA1SSo81nR",
  "key10": "3uYovG3zt3dsZuHVq6ajQNLQPok1wibWFYWoZbQN9egQBMpaf1tqtfjYJJJiPvP3hd2AZB9qxfqobUKFUtDMA6KA",
  "key11": "3pNYnDuPRfUarnqxGYUfFL3bHy4c3aJv4m8chyA4Cg6bPELXZBLSML2xPHaQUajW44ut7t8pGQgFSUmE4FqjMByc",
  "key12": "4JVXFfmbQXgYbrf552xw5FinQAqAZocPVcGCwNGm1JXDBQpRR3i9buY4WLaYpeiEN2FAscxgXTtjUC7NY9Vvr7sb",
  "key13": "5ATDJ1uj2Ae1b7Xtfm44aS4nxyNwvbm2yyvo5KLKnJexMdnuzPyyACAB8tSkgfnvt6JYQfRaPeXYbkv9AygzoXN",
  "key14": "5VErraEfhPrAQpTkw2jP3XFmSWs9Vhs17qu5tZWHVLPTnMg7LbkaRHayaUhv6ZTbCQfa7Cjg9Cx3DTXyzc5wmzdM",
  "key15": "3kAgjjQCERNyDwg5imkrexKFfuKGDBgkmDhKZAm67A1hGQuiV9RUkiDruTPbFx6CpGKxUFTWwoNQExWKX4tmvenE",
  "key16": "21rDxDXsWkmH9Lasvo9sqPWQ6ENB9aVdfDqDNzuWDCT647qftCaNucduqLNhUv5TMd3QASaRpHUty8r8Q3RHb6bj",
  "key17": "26UkTirndfk6JAMCxgFMxtfNDFrxW3ebdjhn85K5LDzvoiSSnVgnWU5hYaxrnpgiUp9vFgiaQZXMcbovQjZy8FnE",
  "key18": "3Zf8V7c77UNL9jhGnVnarhYHLjiqFgfVUv7Y7suP365hxCQ1ejCjzaLvLtoaBLtKyAJVxZWqDGsMoghJox17Jsv",
  "key19": "3NbGLMevxvUjj3ZBb8E8qQcCHtaMTdd87a8RHT9Qim6FZE3m6Qojk7gUxpFm7vxKJ6WFYXuJT697qFTnf9LTnib2",
  "key20": "54oyXT58m7b6wSAiDoD7NVPW5Br77KFWPR2ozrwHJcPK4HU4ReszZJ1uMc3DDRSFohFDJBgoasZ7K8VZVW5CV3Hs",
  "key21": "3vPZmdiWU7HvHrZp53Q4vi1xdrjwJykaQgHb71kFKz7YBnD3yDrY26cuWPEUiM8ptqSFPcA1xtrhv3fv5HxVqXHs",
  "key22": "4b4HjQfgjPhVrd4DHkbLtmcrrGysMPEJSFFmawa7EQSrihrQK7dKBS5WsA6P7SQf9czDex8fPGhHyCj2zxTQqGyA",
  "key23": "5mU8qH4CUqRverFPFeTreL8ZYTPinq5SU1uomykVb3J5RCuzJvzDWrjQRFN8qn2q8jDJArLr1Q948Uw8ivR958ow",
  "key24": "5FurixkViwDY6aWJAJYeWbMLG49TW1dCFzX2uyN9vnQivWDhTcb5BS1UE6ktfqgbfBdnSUazuT3MbvkaXimWwQo6",
  "key25": "3eGtuL1nqtsCkx9jte3p3dDvNSwSGF3SpCzcGtbs9Teo4fJ5JmnFnDS8eKdh85Lc9B6rWCzJSodNhHZ172TT9JH9",
  "key26": "5xu7TZRnF34ZTUgBgSkVe5Ha9dUh3Zqywrbe6nYUAHdNkSp1zJnY8LqZg1MKKdnKdnoE4iV44MAprE4s2vg4a27c",
  "key27": "7gaY7ewad9UWCwxSTSvo1aBxTHPzUtJsTKyMewtQQYfnY6dg9f3FZGRm6nKUdiZqZSBmi5WMj1ZMgpY4G1BJD1q",
  "key28": "5SUg1Jam8a53xtzADFd5dd7JnnXrUAHnS9nkape1HsDM23zZcS8hwJ6KxTHetrLoxUrh9uCeWdWoSXPYQZxcgxfG",
  "key29": "3KUdcyuxfkKgadCCYf1svMXbieAPuE5WfPiX3y5U2yRjXPSqJTE3G2HJPjGTjnqCjK6MaC1ETKiPnxpWYnzgW3Kj",
  "key30": "MoweEszTmuL8JLiHMjtgNmHzHJtf89YBM3GfQvabxV3ZcnbwABgsLb36DN38CzpA9gYWG6XxV5wqNxb2T3wBtZW",
  "key31": "4cRbEwG1HVECWQnGdvwJAifZ7WDTXRZpPK99LMA1d16abSDfka7G1FmdihNMbPmcAShAjK9Pkg3z6peVKcyZaQYz",
  "key32": "Z9DY6ZM15qRNUhsTEQFU3tRT73pEafKx74Lsaq9gQLPNwnNVkeRso9fpeNqgpKdnBvjK8uu6wKDu7bLuZ3vVos1",
  "key33": "5VobtZcieiQ6qUhJvXHBN6ehZZpvj5Q2xi4SdR5XAjp44EzQp8pqRmqddSS2p2PVxkHmHNLyqKBdnfiRkq9VLVbs",
  "key34": "54PbpFkYYiRwYYtYKHaeQXDvC48L1f8NewjVpvSa4MLBuWjGFMAdTbLdkHs5FhZxdVSTZsuymKbu6vfYTE6Czhrv",
  "key35": "4kP3sknvSt7qakyvahw463afBUN9hAkAd1TbnQXt7ZRAnL2BgF1AWsyVWcjcvDN1FK97mxXxf3myo4BnYbLa3H4p",
  "key36": "4HaC9De2jjFjeoYE5TD7ESnZiFQdCxT8EgPgNYTYQoExBTFn3T2YqS3sD4MMfuRGs68EDfMTCSqNDxe4tV1yrNRR",
  "key37": "4H3Ri5uin1LKxiXJUavU1gTQKey8MmpwuFpaYWGiqi3h8F3kNsK9GuFtpE2Vp2o47qAWr7j8VykVKCKhoHGhj7m2",
  "key38": "5FwHU6F8v9ojB7CjJXVLPUA4G6rWLaWjEv2cFh4jBRK3gxRcHuDxv6rqdmdKx7xC8D78VeWvNZd8wHHQ2Mp9LJq7",
  "key39": "63v6ejrVVnSz9cNWDZygWJymU3SfkfS17dijLgdrLNURFwgTiqSNoaKryq5v8zPH2Zav5Pr2nxzrLBUmJcZK9s5w",
  "key40": "3UWJK7CbVWhWqWNxDAcnvP5JbUPNqheCY2ZMcJ3SjQLU94XCMCX3gaQUX5FrD8JfAXGcBRAJinSEL5S44n9AFcT2",
  "key41": "3nTdLusxqKSkRiz3d8iVoJdooQHirDWi2QC1nZUcttJ1cVNhWVnF9pWvswA9fNxYeKRpRBrejVpFjApLE5RgscnU",
  "key42": "4B13k3JK7BnLh5o92TMMGoVn9nAAu9dxfr495vhA5j7LMrdB4ix3136MLuWruwQ3cLgsbew2qYT3tMJkTpij3dRv",
  "key43": "3J2Rd56jh7XTTndrLkaYDVQXaLqvJAmxHiQxZyjRQ3aKMoKQSngPzYaf42AWnb7B6x1A3AzS3g15Mhp2HeFVJCzL",
  "key44": "4KH5wy9shJ28jX9UNw38UUz3Z5uAWVEwqXaAPg7i5mdoGri3JkAGxnt7xD9LZQs4iP8yTXf6EpPW3LWJwLky15X5",
  "key45": "ot9iJxrn8PEVBupyHsjkHpvekVMCjoVuKGgGMXqeyU9Kx7DuxvHTTz91TJLKvf6trtoRCfoWSPFdzEUnbBpAVBH",
  "key46": "5jFkGxiae42CFRW9VYZr8J9KPpZt8rP2LbTxS2AgdmEMpA6ZTskW1TNfJVpsES2EeWMVA7dabVVwM69NySJScCkb",
  "key47": "3sDemMmFh36RNgGe1nmydXnRUxfMwDkKfoiX5v2rBxBYFzHUNx6Yhz2ScEk7uky5JnHVAup8ck7r6LBfHXmwzp1k",
  "key48": "5Ry1efbetwboYgknDC9syTrhz3tCnupufktUnsyafU8Q3wkQAbXsBm9EoyhnF679adhYGT58Rm3iyBCdU3eJeGwB",
  "key49": "2QvdH71s2quwqVMijqux1YbQMgFMJ7C6VPs3ThCWqgC1aTYNk9GinPahHyZ4qu5zFwyNJRcJAcoXm1q3gDVwLB4d"
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
