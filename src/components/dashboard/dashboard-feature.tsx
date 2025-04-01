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
    "3VadWKLvdTPSevU6j6EpXUphT1U7ZWoczZqyoYbfAoQTQFxZZGakCX8GZmCmCoVJMCjN2U7nKGXVBonaYieKWGFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAWgJ2PMbNoxNFYbzApvQgyWC9w2sqTCca3txWp1hBqqywxB2MoPiUdAf4w9iZw9RoQPJVMVvfFNjUe1u3dGW1G",
  "key1": "5FSKJsf4k75oAPH8DUARgYiQquifUeoeE8RqadHPsF3avtJ44h3nUT7FHxJGHi54QrUhKjEjbURVpuEtucHyvQjj",
  "key2": "KT6x7TQiu89xz7PxEXKzDJEemY6kABhAxrg1TkABeHR9TgHe9qrfZZwBucuNUouki6SaY7PMYMQkHCiHjzCBkjy",
  "key3": "o3zgrKyAF3iQxu6Pjt3z6kBQWsYdX2ZEVPsXYYwiqRcZftQv4K6ye69Y7fDg741iFYfncXG66jf8LhFbizYnXwM",
  "key4": "2H9zcM75EmrW6hGahqwBAU8j38sgctBWZ4d8XPBEEoVre3mUgiVbT1gWQV6ybuifceyYDoiVbaw6zdv3M9jbC5j6",
  "key5": "5eXGdR6EeNvrJo1Ej6HKwxSwgYx41spDHmjCSXAVAMjYv6CSfibS4ifieHEbE7Eid82qK6PF5Y8kpLPQdBbdquoT",
  "key6": "4ryaagzcN7AogmbdVkxdMcPnDzPVFHXmsVJ7f4RA6tGgkdt7qibtrNRz8n4UrcsVQ21d5qzkp6yt5ELiq7AhPqnV",
  "key7": "46tFg4WxHiZijPFZAPC8BLpgAuXba3fWevs8fm2b69ZfxAXkDPTmXJZkhNeCZH73b2hAyjGG619iZGXSMQMZqvB2",
  "key8": "4QZHFiLDTz6V2WiSrUD5nt8nirzzUJ7aRdh7FiMPexZA5cyAL2SfimZPaEm18KUZSkpt1aA5JtsqwYKeQVTtDERA",
  "key9": "36Mg5WeQ6xVUEP9RQh3cdS5sv49aH2vPqYN6EhXSk9RdBewZX19mhbHZfJxSCTFr8Wpo76pbb9LMpCN7o1Ax5L5f",
  "key10": "374AXgWKexeajcYZs7jbV7Cpaigh7c16EfVrd4GaHYeqvw31FQpBnYrLELPe37xJudin7SD2qESfBpTgDj9HZN9t",
  "key11": "48Cw6HXDRS2LVK5E2GKVKVxLd51ECvWNM71SvVZDgRmqBypE7UV7ELmioB1gpSnW7d1SpxbdEZHx7UrWx9rRvjKt",
  "key12": "2a5vFxaBmNU8n4J48sAzwXSMStdXZpxBZS3sPBcQgH4m2hRXjTBNbnGBGRuXdiVRf9ByJRUk2Vk1wxNd1C5tUTBs",
  "key13": "3xKaQCSmf93J2jcXnUcFrrHJXKtGBJspr135Zsp6SANHiGvcb4gyk79U9UY9dz26EvyZcnXJFWL9h97yMFEwJP6L",
  "key14": "4wQ1uXeJjjL87ZFzeJJT7Tpv11d3ASHnkyGu9KrsLXe2N8Vbao4nSKxGGegppuAdXZSdnt7e1HJ6bDzo1wQyd8dW",
  "key15": "2oJf5UawL8fShb3HsrJpyfRApZDqqDs4q5iZJKrT8JQrRqew3SLWZVuz8H2BiBMK2zW6WwX8CvJqvoF2qtiCWMES",
  "key16": "4sMebWUjBBXwYvVMqmvebGz3SB7zRvAKr1Fukde3wciPFvQrSqa18fCJLkNwngY5q2YJRyrm6CaaEy8HCrCR6oW4",
  "key17": "2vMGWF81KK8ZZ6PGTeTsTstdYFAJ3WNCW58hZaturWCHhXk1PmMVNJVYeq5E7PFpckSKuMdhSUQGHUhGE2oGJvtm",
  "key18": "5aHuXmyJwDtX6G4EqhXTJcgbMBow8ZnBqDrEP7FT42CY9c8AC8wfqeNXqj4HDxqw7bWMUjiDGe6vrD6MsKr1mDeK",
  "key19": "31K4E22NZ7qz2pH1KvZvn9d73FWrohN4HbUPRQRpQV8LjJH9xz77vq6CdZxgFML37qMTAusV1qVcUBVyPuiQbqhU",
  "key20": "5YnzkMGs6thBeVyb6oVJ1RRRzwQx9B9DmKmWS5DskQZ6vyfav1LDi1QqYFKkCNcurLDSCyzfDmmaTWndkjtgCDyp",
  "key21": "3cNpuzANpdJRQnL6Yn8Q8V1fgkT271h842dKUHRGruzrbE2n6xAM5cur5WxkkzrAdm98q8eYHDGxfYD59rMgU9ib",
  "key22": "jhvaWYFKaXMr54wCsARpikvbuZjm8YbphTDT8aYCqxTqkWFTCf2tdcen5XPHQxYQX31PGUgQ9zhxpDN1EVkxHet",
  "key23": "5nihgMpa2EhE1rM5C3juJug3KZ83mmAJf3YZiovwpqAsrQEk59mbS8L7rVjg1E8zD5hudd3uuXiXJCdyW6ZWrGpt",
  "key24": "4SgxqJMDBhNbTfC2ksCgjYLxktSdGrKkAdUWj8ykBStzjPYS8UpDHAk5eehLdcr5oakwzLKCDQdRUs3Apq4FAVnQ",
  "key25": "5S9Zjkd3udmH3r253adrr23d7NyWVMeQMLpgNKS3GCeWGMT5ZBBph7zdHdHhrFU7Dazf8W5eQbogfCx6EF9n3RGx",
  "key26": "61b4sHUtwpFBJ3jbovtVHkyz4Wz13KTGVEzJCcHGuV22QscKfs48qCY5GJArFCvPP8kqrRUDzyV69L7WgN9Z48e3",
  "key27": "giX9WaUD5Qeu26xFFeU8SVcHaJNFUCrmh8N4Jhuwpc5h6RWZhC8kaV1QJuKQ9CawbqczawhhK8DkwJViLzarcFQ",
  "key28": "5HN1VeucGFxe5PthTwHwfU8sCozzAnFwDRA4hpP3hxQTWdpj5YHoXh7QQX6g9qptsyV1PtppE4BSTHcQ64xJ4mmR",
  "key29": "5KJSNHjkeh8jNC2Gvg9ipDnNZNdhGJSdfKo5pNr8okRAzY3E9uyMiqwvveDupUnEDAxGfjTFXq8ArgCYcG3CYZ3v",
  "key30": "4pyRrYSW4EwmApYXqjpHTNevpfGH9QBWDBJFAz2fymc1GpCXzAEQ6DBo4coD5P95PPYVja5TMMYLQ8AY5Tbx2AM1",
  "key31": "2Y1YtMPCE7mFxoojHWDTq5KNFGHWvEMjCianoSTEo1SyhrENan4uj98cMLjGiKgsTpvkAeKsGfGcixomw6vvD8rW",
  "key32": "3YrVC65ysukHy4UsXAY7Uixcx4nuiAPNJCCUpFXbwesWHdunLNkEd3nFDUdZqsUfavp5BK43Er9ztPFjxESpqXoa",
  "key33": "4mxsSw5k57b8vGDrpuoX2xypmVms2XT9Rp3jDPctdg5rtuuCWLjtDrdEwvL37WjBsvq7CZ2xwR71gASXrQ2BMvSH",
  "key34": "3CvYfXWniA913FsPMpcLGYj5rhm8c9LCfBkDGH8qbBZkeESjd9yUiDM2fjjFbEhU8wsPkJgH4TYAsicF4QJQfEDX",
  "key35": "4vURZpeKpNyUpro9rNvABC9PtsDjTsfVA8kGPr8tJgr7KS8WBfG3fQkG9yCyJ8XsNNd8M4s1evfoDocRA3foLeW1",
  "key36": "2MzWhW8aWM5CsB2h5fpRSBmgWEXYMvfVMD5L9b5bRieRetu4gMf8VMejrihBbHGxCubhKQGjUNuaXSiELjLDBsgz",
  "key37": "48eyaEvfaitPdXf8hYehYbMTxemx8jYfMxkRtzZLfMW6hjn1jgcQvDJ4Qj6FTq2rLb2bdzCHqvKsJDeeRNX7ACLX",
  "key38": "QQxLjWTRSQLgxHmLjR3UFrjER3EHQdy4ZDbBVp6vYhnWcN1xsYaCwvFYEFvX6rWz1xw2KBziF17AjXCPdNE7Yre"
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
