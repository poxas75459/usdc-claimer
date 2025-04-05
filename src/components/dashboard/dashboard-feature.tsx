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
    "22Uku3oDt7qM2T8Yqz1xTPja4YntNPM7focAmEs2p7zjxt9CmrC8jKcn5f8uU4QfPXKTJ7UnNu9MEmDkU2PajiKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J1WgEeRdRS7SFbCNg6DfioBdFzNRFCePcbY8j9K9ogBaWfXiaYCkXhZwnTnqMP98QL21d3AdpzTSsjXYQWy7Pjv",
  "key1": "2kVpBRbeVxkmhNZixwMEvj7NUwKzD6Kv8ktnQBxAPnj8tRXsafEHYkGs7pWU3n1saQfEo9io1ywcuvNbwp4ygHbG",
  "key2": "24hzPmWU9Gxgz9PBHzboPhqR5HnYNwaEW2eGJcdPEmdU7KeHJRQ4aL6giNoctBvs4MYnhLvhESJ3ekAxunURTQ3i",
  "key3": "3efyNxBX8Sd6qwVF1HvDU3d4vkAMTYm9uUq4EXtFw92H8RV24uJ3irJPFsbM5Fw4TWqzjAiaQB3wsP3VLZuHZW5j",
  "key4": "2uapVSLkjC1UavLrefkQ3eb6cwLMHweWphJUrLT7XDsCgrmHERfNbKfRNxxsf25Y1jU4FLnstZTw51vCPp9UAbvY",
  "key5": "2vNLMkvAHh1Z8FrTwLsdnTAycZjRJjbys5HfqbFZCm2PWwqgf6V1CbNdsZJ44ujg6kjgGtRggc9kBo7kxAQwsKFQ",
  "key6": "4f27dbHQS34QHhyHbeEzx8vNhqY2K7rwGdhBamcwd8YQj5WBKVE4p46s48NrYkKMpBuQbHaWGWXRCJRE9meLcCsX",
  "key7": "ZFgq91iD6JPQvC281BQYLW6dR6wafQHT96LnZA4mTtEnio52EoyxZpSukotrAP8jMDKxvJEfkbA5dHsvmwaSDtc",
  "key8": "59AjA4Vkhkrs11HJq2tS4Tu6wUNxQQi2dCiNzgbmeEfqHJposbM5YaMCqG1aBR6Pmq5XDp9mrAysWSM3okPEqwzS",
  "key9": "hDGLVAdXscdzwap3kuCcCLYYd6zuyosfNTSzjk72V5nToP4m61c9nt7Y6HgCnNRimAy1y7U4f85theLP9L9ZYfi",
  "key10": "4CkLUP6J65atuuEeK8zjAae62wxZH4zqvqw9dtzg96j5nnoTqGYnRPBM7t3dh29esHtoj7YVzVqCkbBGoiTd4ns8",
  "key11": "4xzMCSqxkh54fsxdmkwUNBB8ccJ2gpLJGw9KHQ7mwhmeeNP8ESsyQjKYQCdV1MAdyx6YSDUrz5Pe4rSymSUzaMZf",
  "key12": "5o98K66DnkuEXcsBoeSh6LaUys9xhoWeBXm8QZDdMP4pDNf9y23S87D9QNBgfjiz69QUe6fDYtdKgNQbGYDQgWrS",
  "key13": "GfcFKx5WTmAKWkgV2K6k9TQhNAXEpRbXSQS9u82bfKUg8WpP9DvDE3HSUspjx37VmpMxqAVApt9u3oD1GbmyHtz",
  "key14": "2Uk5MpcpCmC9H6F15HwBFRxBZfqcSopufZbuMuRVYmK8co3bMJiUTfW5Mc4BtFP9Nz7YvyqEjxfyq5eMBQbhywaq",
  "key15": "YmkwmBtP6HK2KWGdXSPsDXejVgAzat5uFH8ZQDW4DZ67AAcMpPjzT5Fzy9AHGoEKnL2br3osPqnphHkSXW9FgkX",
  "key16": "59uu5Q5wWTHdup2ZF4gexCvLypgvQxChvsr1hfXHY3XTFcv4yWw4uYNTPoAvp7WYixzYVwJ1s46wZzq46KpmPXko",
  "key17": "2EHqSuyiuUcZ5zgRapsJLRYKqKE3aBY1ZcvmeKBBAHM3ed6dLXYD4UEnZTUgLmobpU5wHTcpZfMjzZBwCFQ3rqyS",
  "key18": "2GFSdsp6xV8zdPiTC6UohU347q4MZW6PXVMsDm18zEMZA2YeWEv1jJuvJ2dXCm57x4FuPMybQtJ4K1FSHSN3corj",
  "key19": "46QdxFXGtJeMap2EtWtZX19VqybF6bGg6u7MPkN6CWFQP67Y747zrj7hJS36ZajJhun9hTNEBaoBXz5JWEGDRpGc",
  "key20": "3JfQUYPWXzdd7FH3ae7reC2AozJsR9MXhkuFPWAdvNA39AJRCpi8zo3VPf221HEF6e66AuvnNLbUXVqeDstnmFe3",
  "key21": "5qz5mLx2dhB548gRTcTjJoma1N8ZdccqBfLS24nGE22pYEJBncCE79Esq1xeL3p8xtVRmCzdNy7byxsJo6NYSzrv",
  "key22": "5qPcAtJTy1FYBwokNgxWg8CYRjEaKnp5UvngE1CKYFmdDPyPATEieCVpy83ooWMKMtGtGBMsqsEMerVPpCi39eEa",
  "key23": "51LdNkct6KaFqY47s9i5dNQevRPZ4GCNBnmh1Ju1sA2TPT2ppmze37y2g4vQ1EEQCCNPcuaZZPYznsC3PugvYupp",
  "key24": "2peSEwkGrZ49ZaQRrrKK8nkaxMbQ8quGuRzQ82mxxUTGX3n3xETxkADzmvTCz241Vdgk1cDi2XBrVBYbbVDbvs4r",
  "key25": "54zPW6xFHcNpu26DiJD1qyXg3pP676DYMsnGn7gmMJCSkpenueXStqkzp41UKgnVhdZthdVXSWQLS6YcRULN5U9u",
  "key26": "123ctdTi5Aatn1kCdjuo5u44Kzo3JNm6SrSP4Qpxj9hAq9gdCCF8ZwvwFgsihR6eyhURqSsanEYPVc8muKh97oAg",
  "key27": "4Xvr951KCq5yijgmeuYynUVm9hjiWxg7eGd8dqW297vsG9kNH6ng3sXWGLTAv5jhnw3tbZsXw7iCy6PDcwE7o41s",
  "key28": "4ZggJXRoz9pahrkKL7eH7x83UnzPZCobS1aNwoJJr9QvvBbdAokXSjKhYCx9JWiQqf4TiEdPmjS2gPPD3Yqpz9c9",
  "key29": "3mHy6fzFCRJDgqX2x6vWEfcUfkW3YehRJHF4NFkwPkNgjAYLjoYxyxTypUmkNDSS3LGwBwwktUgwNpBhTYLGNXw1",
  "key30": "3JWAcv2izAPMbZXQPRSo5SLDDZEQ9N8RTCgBh74n3m3RynZWfcRks5yXypgb8ctFmizvmG34mbrcUT2AFUk7jytA",
  "key31": "3iXUowbLbf9wjebvbLUvnL34cdVFYqSmUAwpzLbxXHcgSLoBE9oPB3KSXsrHdZeGfKnbFWdsNatkvtU2iJ8MJZEs",
  "key32": "3wjc2G7ZxAGmB9pLFfTHyQBaq3vjQ12RWhTuWtVA9ifQqdERcDkgB6pgMmP5ehQzWPocU68eCXcsnJE2sbK4dBad",
  "key33": "3DuRDu2pyRTxuYTXEtdvscTNCXYJBPtYVDoCTmHJJozfu1tjmeTSzWgxko6FCCMT3AFcg4oekT9Hd72T8ipUuobm",
  "key34": "5FFqtx1iTAVB1tREAmVqVEZuc9ReTjBYpxTyyFJT65Vf9KhtDQQaxYzVzi8X77VTs8Q71yXnHQFGevDxyGPvLSQ4",
  "key35": "g9LcZhhyYec1nXee1CrVhuabcq4kBemBLCGtMfopxAdjmieofM5oRgy81uNWWRqANpb315wPrh6oSESMaG4bLgr",
  "key36": "4kgqYiDx3KTKKqMjLBPYZtfpHrRAp9w1FMsFcbhtnaVjakXXmreK1rbkeNQDTMgx4mMYPszTBiLGvp4ZX5RS8Hs9",
  "key37": "2svWR51xKzeDefsL8CQWVVGLzcvZ2eoQTkHoKNewVANXJ4A9U5rrawnwvaJoW7cvRXp81eFP5simrNfQkH6rYz8D",
  "key38": "2Ld3K8SEKk1hPzrk89vWrBiUbWcztWrjGb1FSNUnHpo6VKoPHnFPpasZwfqYcWdDPe5faSsu7WSLpMprtRnc9783",
  "key39": "3aH7Q2JA7UWTY5dAZSDwXCukXcow1goJGaTKC4C3avzmYBvjiPu8uv1c1jh2PB2Usx8xtsJQw8D2hM6HgqKLCuUY",
  "key40": "6evNnYdDUT1nR5ozTCuoutzNNWpoNhc7VuSnGvt5apwANDBeBhrhmGUq3377d1bNgRx5xDT4Q7wbY4QhbXGDzSK",
  "key41": "2N6D419m2pyUze7zJHbmr9oQ3XRVVhaTZ4UX1abFn8UnaFHvpUheA6T9YxvYbceSRFKH65U4YmNeqriXkXUrH5Dc",
  "key42": "5UC2MRLynFXt7KKRx4x6NTEMydzmcwcRLboyzHYmGW494NC9dkAqiThwqcuaeSgjwEJWiUQ6BzUfsw6YYvCDCd84",
  "key43": "iq6GQAF46sYaD8hVtK7wNUR7dHVayjFhx4Zj3gd1BEwPtXQm5LeekwThuuyDH5ebyGxsEodQdQ5mEE3XQjABFqA",
  "key44": "3sBdCwn9TpXS8NyNJehddtHpwtSnbUPrchzNkHjrfPbjj6JDu2AtdT5zcuunvYqswJhR3QQoHf6eUcYteyF3KgvN",
  "key45": "6aqBkDSfjy6iVbzTjKtQNPWCDBXqcxsoh8sw9qVqWdXr9kp3TyaZuMQaupV95L86PCWBDTnvcdswPxsVkYBAk5K",
  "key46": "2syooy6dyBkeZ4wtxMDXBUQdVRaxdqXyTkuxgGU3HLnHXrnGdRQuHTcAP7kBJUaSy9zqpnwED72aLsYTk44CXNxq",
  "key47": "4U3naA675PgLL32p3b8tP86zMsvZrPJFzhL5qnWmqNeRCu2mt5bQdo139d8sYpnWhN21A6BHDfzGFtw6FYwAJ3nY",
  "key48": "2CgEKnLG4WBrc8f81uGSXWDMaDhz4ZpnndB5ppSPQKSnWe6BphtBMAFeHKDWoKnmcsVAGCxPjGH8SAYY4TepRSyD"
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
