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
    "2vjF6U1Bgjohdis7aKFqUK94WyTnWXT299XM4bj9DUpLdbPE5s4ENrmo8pxZEGPp8NyDjH4bZqTefCdaG3Yf5WNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QhbACHeranWtaz5kcTsdXShAksaKVJSU8AibA76bW2WvTqwABZuWKmz3ZMgZykSpDUCSPVvQk9ZQqgEXteXjM2Q",
  "key1": "3HxVJJbQkXDd5stViQdxusVgbrAU3HPPJoHgtWCEtzoLghbkryt8TYog7p1UA4r5cpHZ5XBCnCmmjnuT8mCEpijD",
  "key2": "5s75TjYDQ4p3ZsFrrEceKyFksoY6VaEUvEjXxpz947Ph87qCoDJFYo5X23wnKAk3BxiMV6836FNPEjkCn1zzMiT9",
  "key3": "5d7H7CagAvMmJSwMt4zLvqmhhqdFRyWW5LKn5N1BQNGRMTMLeiVCPjkH4iD4ubYwZJxXWq7zKfay1eL6ZykWXQsR",
  "key4": "25VKLMAMe97vdjrwvAPfgYqpnpuEF9YYd1fTedMyFpLEEVy2QVkESASTzRpHK2VecgsrRVByyjGp8oKy7paQoVop",
  "key5": "genaG7H8Ksva2FSGA5KcTxMZiFArZtwgS8MAobGxzWgo7WJBAeqHFmZdYyK3SK1gCxg3mzYkDfYgTwmvWrekbDc",
  "key6": "5EJxgenAsK7NBtmBrWYK4hj7uWJkwXXqxBMzQreCjaztB9wjy79jEoTBgGkU8znFpLjAeubtUiKb1NbueybdXwor",
  "key7": "4UkKugbJ98DuxZ22z2dvJoVnFch1nMvw4vHZ5nU6sQWajrL8FbNA8xXh117xBbktYmfS9jYVUwSwBMFgVkvzYJF7",
  "key8": "3tzgPSZbEtQDqzLgFE7Sqmo2DD1xxeYdajXe34eWBCTZMsrPyz9GTfQGVVER7tvTjC5uodXdWm4ZmZHGk5BGZZQx",
  "key9": "4AT4T2TN8CMoBjNrrRtj9ghArVvU6a8WCNYSBZb5iYoGsXzk9LzeYJowhfmazXvk2HoCcdV1eoC7mtp9sQuqi6m6",
  "key10": "2rF4NXDSSmequ4tL5MjyRt5spSqfn2iQRA93SnX6o35mutqqepVGLbx6vbyiXmtBmJKhQmZBTQdVZZDAzPKMbpPC",
  "key11": "2QkWcZB5j9FzE7qx2Yj4LFKd1EbGtZ469Ve6rQa6E2BTb6cr2LFMiy5PwDzAAxWpaDpKcysJ52N3sqKFSamhwCrg",
  "key12": "3oKN51zsZFHJaaXBqP1nBgvrv2omLXMiMvDwvPNX6YDmbXtbqrY2Ad8sQqMUPzt3U7LZpK2bD6E8LHjWF4zvS4qR",
  "key13": "4ZC8E7kvRQjYC2LYuNASpdVcAgQhRYxzEfbNhR9RictxYyFByTyx8UQqyDFC338pbAuzjo8ZMu9YrCAxP8SNgP9D",
  "key14": "4vKi4aAbN88kBc1Bzobe4qsnu6A2khmXnwDkAFojT81fWkwAEqQwpMWFi17ZEAVCyGpXoJuB9pUM4Yke3G5XFCqv",
  "key15": "2AuAQdaZbP8SY4upn55kY7Lr3hQT2VLR55pedQMFnbXmKcu9TAUdEjPgMQh5wtAVtDhsf2QYrGbN1Wbhx1nqvMwP",
  "key16": "5PbbQffDTKXH8UR5vGeTCiVNEzCsnmgXLS2hgr4MQRHtbJnz9T5H4HTaBsMFnr1vdfiZrMVC32JsE7WopjgVmwJq",
  "key17": "3z9fY76gZzrBSNArPQtt4zL67aw8929w2HcQk6sJid3sHR7n8CxSiwLQSYybyjweShV5eE2BL6j5r8LBKdrsu2dn",
  "key18": "5nB4ufb9EM3xj9thKtQpzTpqAHGPGKwytBBt8uYbNosFPMxyp5s3V2rBsETPe56pBdY1ecTjv2rEFS7UGpEFFCCe",
  "key19": "56w6H5b31oomnRcrbXgLpPjJT9JZoYgzX1vuGhwPYgpU6xSi37trkTXiju28wibMWW6HpSNTjtukPXTnMPLyhzTV",
  "key20": "xAdmCnu5qrw4XKY9qeStC9CsjgJ4rpgSYiRqGqnS24UkchrLhqezPKRRTa8KGiuqXDZAxnnwquMgLXpPK7b3D6k",
  "key21": "6P9xYTAsWQcdzJ6qaTDditKSkBDXjnhhvamCoP451Ad1kdeHoeBzMFCGyfdotykeS7kkBmAo2pNxKrcX1hDxvg5",
  "key22": "45W7UmzseophuU7dWVMpvXV3oMHNQBDtkKyjoDSkZ4fUkfCN68gGmLRiJhhhNv3dmu94hfubKwGAwGS6CyY7TgPV",
  "key23": "4DDPx29Pnu1QhUiBDjc3sMEyPqQyK6EyJBwKy9F6ghemQ9b5bJDimSjjrRYz96Wu9viaZuBUcawWQoC3VsHH3C3f",
  "key24": "5zjXaqN7TXezP7hraXXGzRB8Hzyaykh3XXDofwVdYFLwF5zBjnmwAaZ6TCrFLURy2grjibgesbK1opfARGyb5VXq",
  "key25": "5mdbk6n7vmTxx1Py4N2mgELaMJc41krbhRSo96hT31bBdDsLcrP8ZN9iiNpdRyDS8igqEYPMZcN8fL5jswe8RWgu",
  "key26": "VA4brViCvLqxp9ubzhQj9XEY1ptNgxqtjkfUxiGAZ64cmQUqESSn43WfxhpWAwkRMmM7oQxTs1txhitPPzeF3ja",
  "key27": "64pUPjbL5KooYoStCLyNUUu63wCftugiVSBZjPaixtigZ3tEfjaGUwVn46jNxUMzLBUe5PxVcpsDRpWUGUtymDmT",
  "key28": "2wPyuy5XJxLuRgBaiTTU2qt9s274ZAuDRNjdnqn48Rj1N5ErhxfN57uY7Qg5L6jNSbabp5EUbfmt5H7p9RRggNxz",
  "key29": "4WWxwXpiLW21XmoWWhePcr2wsLVnnjU5tggiGmvk5hQNMCdZNLXv8xUGXbta5yomdM1HumHAxDXVGemNEincYkbV",
  "key30": "2bJwGsMWq8wCCZdcPdyck8ma57GjvDAshR5kr2tj1BUbK2beLrxdeEPMeH79RgJry9TJ8wDaFSDcyGBZ2T71JUYy",
  "key31": "BfCunc8uNDhS7gGofebK19S3SxjYQtyETVMn1kB8ejoH7SUn8HGpx4qQPup5VC3s1pCS3Vjr5xLTuPT7BhmmXbM",
  "key32": "nqTpeaLRr9CTvm5TiNd2GiqAShRbgCWW4vvE8hjBCZZsRtm1LCZKnQBs8cwj2V1tYujkxjTZwqfKyjB2YvS9AZA",
  "key33": "w28LNWCug8n5YbPYVpBzNaNnkn3r3V6k8xzmjP3dCWVyrNtarpq8Mnudb1TiJx2Rt3sNzUos3bRV7xtnugP7Gba",
  "key34": "4m2aBMxLdQxySZtPCbCHvaee5kTxfvfPKU5aBZ546oSaepLvfRpEpAn6tTGzLuqCLKMt7GSoFKDjDvQnxJC7x2Cq",
  "key35": "5VAt33HhaiDPQJDtDdwE876K3zDWPDkvDHnUnm217fqYWomZfx1PQ9smeeQHpVzBWWNFuLkEY7NsrYHUcLPjVkvC",
  "key36": "3dEdHDTL1rUbogXvz1564Z6KqnkLcaMPc1hqc5NsJ1L1eoUAPV6fm5AcZPp2QVeZhA1zLpwVnkWk58fSCwKqm7KH",
  "key37": "5cm325g8Y5YCTtLG1KfthLvmn426rA2ZzTfzHsHTus9qFifDCCpt6kqAuDvk1FGkc9ubYeWGeNsK3JmkHYGcy6VS",
  "key38": "516j9R71zXdKfKNbMiRj66PqL1wysHqSdqcob8b2DAUpe1NkdzrW7kTzvJpemf6hiZU9xK24RpWCS2kpiLhXSHb1",
  "key39": "4LiUz7xXLYh6u36zAZwftUM5snpnGQfSEurH3iRg3sqd9VbqJLmMaTKbmLaA5F91rD4i6AkFHNq2SMagrkJHwVwB",
  "key40": "3fSpbo4EwTXrJzU6zYViiTHVGbuzCEW9CoTiQvyGmb8H9ZJKYyZ7KP3JsuhmeZ3iN9j4mzcJnxbvQbrHf8bxLWvN",
  "key41": "2JPrP5ML99Tn8Hj1WBePxih1YAjWC4rFNkosiFZoNsBdw81ufjsFQWhrCpghTwNjYS4sbBAc6a1MtHBvzFar8gL7",
  "key42": "4Y1raqgfHc7abtZZpbmffY2CQZXL7Vkqi1AHTdzCDqokLubKHiRjYAcyny1mR5ZwYsp7VGmrqCTPMSit5bSbe6di",
  "key43": "3G2onWj76Zt6WaRrvBFE4sniCPPEM22Aj9FN1KZ3KHmpRPPpw5ejqVdLvh5sHYrzGypPKxQrKMUdFQLxiR6KvDUo",
  "key44": "5sy2BxZfEGZGVnHcyD9RCmsG3m5ByXxb3r4W9EtPRsV8sJSjNkgPhMQyf7CHTyv3mcF9Y8sjHiuFin9KVpvo7MxZ"
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
