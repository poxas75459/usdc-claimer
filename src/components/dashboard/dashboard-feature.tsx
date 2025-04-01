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
    "GSeBzZ5rMD5XRqpepqiB9c5oikP3Pw4BEDnz2fydnpvkop46UgjtaJeFJwZK6Xx6r5oSsYit93ZEbh6tW89kGzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672gdZH2T7YQn31qE5sx1h5YK3UMm1jeCd6nU1QRxY5j3hB6VkvLEFvDd5QK4EsNGYid18QKCA7Cg7v9bjZ9siN9",
  "key1": "2MRRXDGPi7Ht9HwW1WPdZrZQjVKTAUjH6VsSTCxA1H9H6UrkSELGGfBSPuemHXGjHKqVGkQDHV4sQYV3VYdanZDP",
  "key2": "5ihix271HmHJMYMev9Y6MAmM67otN6iTiHCYWD3kgg4uThBoik2Han4tWJD3hMQa733NmaapdrDgmVnK5rp2uyBa",
  "key3": "5fCf2AtwBe3NVHvENsxWTkRq16ZtZR4TrNGoN28Nk2tcWHNPVzYHicEB18cLRj2YECib7tZYhk8uxjzU8gTwqnU",
  "key4": "5S9AsHommaycrpv4AfC9ggNtUyZRmshovTqTeeNuUvmmb7UGwAuMXND4bHu3ZhLUiHdobHfo7Xc7yjFs1KdeeVd4",
  "key5": "4hCuvbNUJGP5evcJm9iQ5bbUYFQuktK1nPfjVgKv2sr6P3Bbb9Cq6idE5WBeRo6p7UozMfvDZ3evqQJicfg3cyp7",
  "key6": "4rBAM35GefPgphh3quwV43oCHU5KFoWxazrVrAEwxo1eiwRqfpeish1KgakWzJ92VN5jzfA4TBuNstqoqrwgPQuz",
  "key7": "3TvFxYck4mkLkVWhrghkzkPvUC7MuEAkTyf9YryN51D6Sq4RhnwY9JHW1G8eZWUw4yhc1DQyox9ibtBnY6odiDh7",
  "key8": "fwpnY8Kb6n9h8pdhJKMtTfkSDW85FWi2VuoGnXb4SzfuXzmbUDbgXjBW9yUf38XeVBQ9ejDnDVuTYKvCfvgzUdG",
  "key9": "VvQCp2VW7PCjD79r1tqCEaXBLcyndgjcg3YrPvPRvfMvVwzMeg5ZWmn85WPrvQr8Q6LWSAvwWyZYMpYP1fMLKvf",
  "key10": "5bSULzSYaNQDEr3rH776BarcWDkEJFo2vCccHADSW5aRZhWNxK3FUbDu14ym3ubB53xx5V4wuiigXrbtxvUaAktR",
  "key11": "2PhWhDe8N8FA4Au8yLrSDoXBwmunzHxQcDP1xsaqJdES68yy7xLi8wCh6MHZnjMJEUwEY9zPLQ7sgR3Taf1f4zJL",
  "key12": "3kHaJ6mx1ph6AttgjsMed7PqgsZ6KBtRALrqU3Z6MVL3TkWUewXhpcysGf2aSFj3LU4C84AFdFoeJWxPi19niJ3x",
  "key13": "5AXTeg9yE6Dvj4FMyWBs1mjRXeQh8GDFLCSPCaTsgCSEseM423iBEKQ3L4FTZX112c9JXXPHAqjzULx89uMrtCNZ",
  "key14": "5vggsWdiMAjwUoeKNkS3vVVKxkGUzDzE7GxvHRvRD1BHwsU5JiE4bnZNai8oFtq1k2KciuuJtejsatV7g4GSULrq",
  "key15": "veQLqwPHdFit23s4umGhX5GVACRUTCb9gUcLCstpTJufhaYAKKKw9BAeuMhPgqJaUMjFa4fjaFdfLYrKVZcu6zm",
  "key16": "22VtE9PWTkBVRp6fpHC3YCkLia4VwC8axrtbJe6yUhYvxzRGEZ1wYVoyancmAeFkzEVJ8ZXJAPYpFav4A4rwtUt1",
  "key17": "QQVErpFxEyzMMgh7a1zbhFkXFaCCSjexk8H5Uyz3ZZVCMMDQWqbKgc227vzdKrLW4K8jRwT8uQ4jTJWwpmARYbi",
  "key18": "2kSRVM1fjZ5NagY1Ew1MfQgvPrsTEGx11HuRmQFrXXdZNwHKx883bmzUbWSbFdW6ChB5YDS6jQfgAbedNzUc5Dv3",
  "key19": "2Jc2NZTxGNsbhAiGWC3ngmjjt1iDnia9erCWmwyusjM3SU5ZYbnPvwioikpY3yngAfaKHFJhVGUwTQdqRJuGz2on",
  "key20": "uzyGXoEkkRvZ94j5asRmGk1iEjDnrEXuj7NkXj5TfNKxXmqQHKSrUQMKXQDao3Vb21BnDiH7m1SU9diacxGGPWF",
  "key21": "23LvG1aDncK3MUJ8FK2kfGi5cTQ4SF21izSdZPEFMwWzVm3k7UHpRA1yseWNfmKNFavjJRPT9uqy6SNmQoR7vTAU",
  "key22": "56q95GqAH7DhxEhouhdpaqgwd8RvbjGBbGiaswsdigWPmpksZhW4JfC2zS4SnVwA5pwHZbu6kYuccaJAVZLiv1Kk",
  "key23": "36fY3j4h24fJiiHTUZz72e4dbYvFQzvzDvR5vudVv1AqHRncXxZ4bc6wXXT99DSsQBJsQSvnXvdY26JUUBahGAkV",
  "key24": "61au5o2a7TeSDf4N2UHp2Ww5Wqwxht6dQFD34BLobvs2ahMiXKRReuoRXBhAsSLnvLCR7TsJT2bJ5dr6F9mbR8vR",
  "key25": "2cPGT9iMLLPoaup8yPYY6giPXvVkEwH2pfXdptRNueKLspLQH3QyfQaswqEb9VC4aiTaXJRfa2rAVsbyZEdLkfKo",
  "key26": "5yfUvqsXq8LkXy7ZzJoXHjwvo3W6o8ReFHwYDtmuLbXkWvM1gmR8Fv75hqdYevWYQrotFfHc3XaTCijzQrfoiH7p",
  "key27": "4nwyZPS3kUf54nUgphtwExUAzp9LEoaZ1kk1WqUYCNmgHrpfEbz49rfYxsjzXCmwVJSzkEjFPPnz1xcUuzPKYnvT",
  "key28": "2FrwPVzrN7pq8QUF5j62abF7USmHdWTcyuivQe3NrsZGCiRVMdsu356WnRtGTAaCqK43vAgFaUeppYiCt1xmE2uc",
  "key29": "2UTegqwkkcnSx5sV42YHjVrRtoFaCgq1WduKDp4w4aNThB7rAjJuKLuDTBY7KnrME2ZGtm5ESEf5f1cutMxbCgxZ",
  "key30": "2h7s3VmJ9tLkhNtxquXRYe6UorTPEBXdi3a5ojG1dc5A3jpWFEQy76GtBXafeGyhLVZPpGN6wz1kUaoeS3biYGft",
  "key31": "S1GXcoD7HCQX5ctdr1dpihz6ZUUqZbpw1t5XFUmuSwekXn64e7vQpGqm2v6HyWdrc31e94AU7SjxqwNwFwopyYR",
  "key32": "2yy6Qoir5uy6VbAskvUuiwPLtaadzfBzKgShU1NvwL2sjyznaTvUH3DfU5KMLrj8TuP31Cwqax2QA2Nj8N4ypekw",
  "key33": "4B6VqywQ1dNtJT4Qo8qC1oq1VmK2AiCfcqzA3LJJBvERrNvXgmZWDU9jpknSjN2a1Ha5fbHacZTGxgBHJEpGeLjK",
  "key34": "3L7TXqcNncCsCwpyfwyeCKBkpkMViTpdBKj45mr8Fr8nVg3HySSg3xbGQiBbxki5fSyJoURCj1NKHfS9H2hKKacj",
  "key35": "129gigGgxVJXb471hAU7Pe1tWGCM3zhTXSpJR8Mv1Ngjsdu9Ak4QCkEaHTsMRC99bghCGsDUV8PXuNRdz5hGLHVp",
  "key36": "4CGMDRfJauj8SN5tfNqjwPjrMsAGACFbWfYBzHvGcsX1WPHqcPDQtbQmhiMHzKgQgL8xLU35KeXKKAqAFP9rsMhD",
  "key37": "5BJwobXoPTLw4JhGb6Z1GHXfFsFFSjKrL4YBcc6afCdfFFr2gSTuLdiaqryPMrj9kYTwsKHpzkT5AbmSbbTyMz3z",
  "key38": "3ENAGVTjiR6sddw8tsgNtyr8gc1MebkhQixv3fVH66aypty2UjqnWzNr1wy5KmxsqyCK8ybGB4bTnV1osCA2Vq7z",
  "key39": "4pDMksYp4F156Xf5gntyDk4kZVCTsZghQP2jgqEdqkR146VEke4HzRtia6SKQWnD71GqnP4VuCtHMBZxntpwWBJN",
  "key40": "4ro8aX2eYCjnRotYG9iLWd66asb21PoEoFxLmdqbZyPJDQGzHFKe2CgPnnamey2Hg7dPS7p2HqetWpz1jF2m2ehD",
  "key41": "4h8kqF7azSrfhHcDwDoYcEajtJr3CNLiseYuJT1BEMPxN34723LjP1LdVCimPGxQ7YcEMM1vkAvAGugJVYqRiYuN",
  "key42": "BRKpmREiW3z2D8KNsaxYw84HJk46ZcHkdH4PkEEUZfHeNVqjyUZWujP3oqyk11VCefBd3ZXLPR6pySZvQno4Jib",
  "key43": "4Y6EpQH4RVPFknQLJrrQAqViV78Up6QWxKSXm1qZNs211BWsh5sQj1BVPuPKhy391k5J6TxUSbmZRKkHN6qxjuk3",
  "key44": "4HLAfXsdvbEwb6CZYKq2NX24Cvu1mSefxygv6vc8n3q4RbZWxdCnvCu4AdxdwYdwVSgSXA5Cn6PowTVXFp7Gyo96",
  "key45": "4C3iZW7gGM6GmQpmGAX6YBWn2BsotWc6FwdyJ7ajw1dEsn96JjWGGXFW6N8nkfRVgRy3UDjRcoaGBWQuGCMGWEtp",
  "key46": "2PjnX1yfRcG5HztWfcrAYNJeY6KkgrTKx64u6JQTq88xpWXhVmQWXN5a6U1fDaLT3oG7nimdA3gdbrLHQhuTJWfX",
  "key47": "PvaEM4wpStid1s4oKovMieECsFTSFwBQKWQxAxYszpkvg7HC2JV9aTd7j7MBLKonP945d7YFANFoknWjMoHDy3Q",
  "key48": "5M3wL2gpqGEnuXLBZH5KmQn3Wo1yyZtLnvXRWoH3Uov2FYpAJkuFjfMKnvHnpRCmehen9RMsNqsJmHAUp2aapMC1",
  "key49": "5mDEVzgcK7tYjnDDNd7zmNvsq9MwYZ7DrzQ5mgKNs4oxyiUxsSsBL6Le5hPgfHspr2SQCXuAzLY2YyPDvmX5mdrU"
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
