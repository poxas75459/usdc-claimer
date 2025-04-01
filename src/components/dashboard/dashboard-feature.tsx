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
    "i26MeCrq3216YMKKngKRrB16JLi7jcRAmAUqhe1RBGCh3HLEzijz8uvExADy1pAPuhxzgfs1H2JsPAstg6Cwmif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ButjuXWgq3ncJf1SqcEyDAJqvrX7JxEeS9h7LNrP3WMWfXpXXkCpzt9yJvdbCVnmcmgTVd4QErAwHVCLAmCk2fT",
  "key1": "3fvm436mzYGHfhrF1EV9wiNtNBXhdU4Ky7C6b9LrpJSWr1cvgBUQ8NsehQy3BtWQkWCV1z9VX2yXnx3kUGhaxbcx",
  "key2": "o2s9gDQLjbKj18aX6pEWxA8k8qUaXHzzycjUVcuquChuhmrzv58Ro4SZtsWX2uqJz1cDKLpiRajxf4QkR9LMoXe",
  "key3": "2kYb96vFS25d13DaaDq5agBDo9hAWTMdBRkYzX4EJaScrhA1uBLdZK7PH9uLxJ9oN9pAUvSxPTXP7AHtSBKUGYoH",
  "key4": "XGMhakniSD54xfUffJhQmPBhit77tBsT6csfWpYDqEn91evn6xVa9QkDqi7364fKjDTmTweQuPLGS1pncwVikP2",
  "key5": "2pUUrawabZCwvv5myaX49WKrniox1M8YqxAvArNYtnX9iz1qE5zwAHFj7pEiojENgRv5ip2gFWrt5HNDCgSRHHup",
  "key6": "4AHb52f3xcDQiLyUJ2hveWQ2ceCWhEvWxW9VmqA2J49AXnZPUtgFm1cnov3Pv9uhbDhu9k1qqF13uwSkwDjFfqZ6",
  "key7": "3uxpwvjvsXcmMtHMP21jNReckhxpuQjpxpUGPJsjEPmJKfxRC2981HWctPCJxJ6XMguJkTund6VJHHSmhfVJLzP9",
  "key8": "3ZLRcDfPVCUhuPizrfhZqt5YphK9xKnjnBk5s3smwcuYfwidRUYmba9rniP185CXWMrxfVrdQuwFUByUWHYbEDNa",
  "key9": "4Qz9V4HfJf2jXqP6JPuBBH2MXjpk2LcuKDJq4hUyvbfCxdzAHgqhE68jeuTmm5HiJjgL8LUpofscnzVCPCM95B3C",
  "key10": "5WyDAmAmwKFNc4fb2CFJrxBLhX8j54b8kaNU6ofCkL9EyYCYaJ1hd66o5KnJ5DapcQ5jTTjtCxzaLRyPqPifbWWT",
  "key11": "3uFvgL9r7FpvKtwYnrFW81JdZnzdY5keqKDeXc7hiAxKoUHjbmSuRAfs7TJngYhz72DE3rQw2MdQFW9ikXrwRN3t",
  "key12": "4K225zCBWqDZipBTa7MqMGZUBHi9pzAKWQ9FJ7LnTiH2hrqnZFszo4Zdq94811Veyf4xNCDgS6Lm9FkdP8SNpAee",
  "key13": "vtoDqkQBdfuE8iBWxuvDXQ21DRa52BLGQu6yn4wWsWVwtTg1uNpjoQkBr42enf6187hBJKFk4bPnnDQFAP3FNQg",
  "key14": "4Tgu8mEv3BFekVFth1nvJB5W4RUg9E6XPHwEmSREVRTr2DNN96wjQ5DQk1BLAygSKFqrt3GY7JiHqKgrPR9xRvmL",
  "key15": "3oRVnNtSECCNmGLYdcGjaTwm2n5ed9TGpQhdyhBVAGLnPtAXURygdA93TUhCSN8UTBu5tAGnzrnHFhNGEJ3HnrNd",
  "key16": "61LyqUGwHXnv7w8hyMBYYZNPKy5HPjizgZEfQBG6uSN2t4XCHmhGDmAgxupBdLefMSgnggxF9RHczQycc6Qthyc8",
  "key17": "2kRfYE9uiaQBrAKej5ykJtnZfDHkHmpGfydqCenYyqKnWsx7whgDP92UHQMju5bsWVRkrrdPyxW1v8Lowyyu4LkU",
  "key18": "5S5dmXx7sAuv9RSKFGftgWXSA5g3exu4yo1ZZFczsoaamE2MX44UhDHNLu4cGuivtSmyckswbSpxQbPxGMLsDdKY",
  "key19": "5YBngqBNaJQRVpJTarZFas6aukwRtLUG3eJ1JVL4fEuepyVHNpsiR24Xuwr826PoHL3ZZEbBq4hwfYUYF3FZgah9",
  "key20": "5ruvvV3ManVRD7C89abHfHSDny4z7Nq1YKvGjKPr1XHyvurPxkgEuJBL72onBDjnzVbAhD2PWFAesZXtVb2xu4Ye",
  "key21": "2ACcVH7UB5uYPc4qJEaepVQ9knd77GeGvd6wUqqGEvVGPbGnquF7BoJKSX7ja3NYKnP6MoZmzBJz3sjskubZyiRo",
  "key22": "54mgL9f4fuJVsvMkBr6z4U5nDnKaSZfXkX9Upth3g55gbqbkLX9E35zL2tD33zweTFhL46tVYH5LcSKSo7pCYW4F",
  "key23": "2hXnHURipi4it52ivM8KjSLTJx3eEd4R7mheMNErQV2zzFwer7Em7MWRv6zKgetpoH9oEQAUyV2m8o4rdsjJD7HF",
  "key24": "t8nufTi5jvqzrFaiWNcpqiyMB2fNFsVbi7FrGSbj4owjjTaPktwJ1QEJamowNDWjPJGcyWs7ywE4wAVmVGddEv6",
  "key25": "4eQEuWRJTvjVvrmUZpxbA4Gb8karhDvhrf5MjHCMRFhXJFQkG6Rvh4yMkz3VV9Ha3FQR2N9gnvp34BdcjVLQPg7f",
  "key26": "5iTD3SBfzYs89WrPpjus3mnX9HSGrY54Nb3gp1Ks6zwWCF8823xzv8xY1gsUDHWMnWg3SihtSv7ov5Bkx77QQANe",
  "key27": "5PpPem97jh2MfrRKLzwfV28Wf4H9Z19K7V8pUS1H3DT4So2fmYu7kB3GUMdSMcGV1gx4kD3NQFTf7L4tT8Nm2iyx",
  "key28": "5yamCFcLKvDwLFobuFGz5ymWdBiv8QwvS516aaJ6YsPQWZL3ef4TdUnvnaMFXZu7b77TiWuv1JeotBMKE51s2ENr",
  "key29": "4HmzMMyG5qkNwytRGPMdc7bjgyZ1nePZMNZP8TLhuBoHmPXm1LrLb9uPPgmLNgoSamr3yCCqq3oE92www9m22xDW",
  "key30": "5ozEbQH5vqCZFisqHchT2MKxb7RyWUR7strhySCJ7atxgdsRJ547nbaFiMfwFYx4j1yrqZxG2YUwTXw2hVsEtyVt",
  "key31": "1tALhJoXNJWZLH4vdvidjn8rrdG9xAQYJYzY2Fg55ejeU9o3A3vh4PkZGABbL5gTzcp8MvCiiMsRDGkwCjzKnfP",
  "key32": "3RgFm7gTp2svdr8Jvx8qvxnVwEu4Wh7fkM4sRM5KfP7cqXvXvGuCqBUYji8ZQPvSStU7hRbjfJ7D76iHaMSqmbbo",
  "key33": "2XjtNJjRuXaZpAS8qwbRAHVaTXSMzGCXU9WW2tQCckRMJkUd6HCfsNkUhvo7KBVLfaw9W3ZDDdCyjtgvJEAbw48c",
  "key34": "3XVMsrBxR4hqx74HwFwDPAYACtC76Q5e7UCLKrQRQAqT9dz8ymCad1eUZaCecDD9arweBSQ1Mb13txwTM8fNyEpZ",
  "key35": "26jHh1HRS2HpufyL2769PjMXYozMTbS39gWKy8RFMYxHEV2LWfR4AFiuQo1GMjiA2UnWaiyRyXM5gBfAfbakTtX7",
  "key36": "2RcQi3kNzpd7UaMndQxc8iG6jm45M4RmhJxELu4tQQ9oLU2yKoW1jcxWAB8EeBixi8NbxgLppEzRg5UXXxMJAUGs",
  "key37": "3rv6QiiwjsGkhHk4aySCGpLZS7wayG3Nrc6Nf6wbTSum88cz8Hc8ha5EyThEaEqurYW6z6BUto1erm9qAj4bYM4W"
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
