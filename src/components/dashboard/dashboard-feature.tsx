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
    "4xF4z79C7XQtQrBXTPGBCUM8kkRpSpQU1CVf9XyXQoLysKrifMNRCDxBQWmudHsYK9wJNWNiEcbLTEsT7ReQ2ysE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GaM1LW62Tr8xrp7tTLHj1FeiQ9Pn871EreEujRDGH2hV7sU8RF4qR1GJsL3FrLQRPJDypAa2J4zsb4XGPUSiADZ",
  "key1": "5kTpsdHexrtohB8zJuZBUjeU1oDXcmYYwMKVWWLmrBn7zw2NZpN6myNdzXMVuqZoXvoSqU8DAoHhBgYEp7i3AjXt",
  "key2": "2QS1SJZmZbhh2q7MAYzp6HvyckiBjutwfdfNwY1L6zy2wqE9xN7j2sAvWAtPqToGs57cRVbffSHo9QaWPbA3wVvu",
  "key3": "5kZewXKiagz36xE8dWVTqsxfd8gxKZp7Tr8Pw9ma9vHxX3enKx65fpeABA1QCZLWtrTz6cMtaE8goz2skb7o35Bj",
  "key4": "3QUQijEABDhqUVWdCeu3HMV8h9kCM8Fb5iAujjS7QibbPrmsi8RFpTSVYwxmoUKMz8aYUQzCn8N4hf8x2xfbBobo",
  "key5": "P4eNX47sga3yrrouGjYQ6f8Zyf32V8JjCntAWQN2dNL6uNao4eFJqKJcMqabepYvUFf6Z22UGq45uZjv2NsUjzm",
  "key6": "5RrfBXUyb7jkYxoes9pHJoR4dcqhFvuu59zLEPwXDwgGyLYyAva1UMKG3Za6Jmr6Cdffjpo2eNkFJ1iWJZoQ3Hgj",
  "key7": "5RGASfYQrvmo6JsZowZn453dnePTppWThY3wyrZKFLzsSn3ZGNFK734mAMcVrk93Xt2zSpqSuVswKmVUBoGYJUKw",
  "key8": "pyNiQQx9DmtqEoJ9Keov6jJzAf8tJ1FCi9fAKMHJPkuNaZhFNjjHYACYbJda17gkipe8truw7a7vddGHpK6iY7N",
  "key9": "5PaE5qtQuP8Pi7CNL4W5dUN9HJxQ1W8BtNm8hAu4mDGy7MZgoWVhNFBru896iMXQ3zYC5pndMRoystuuXt6neVXu",
  "key10": "QFpBuVvGaHQRNpbEFv8iWd5RHpRHU1BzwqEwsWcQhZNdUQ8iHXMRuXZic984seRMnskNhgDVQxkojwNfpopp3Xr",
  "key11": "5kABthCsPxGdnvpdvaiHMz9cMqDwLCwtrKwoVEVnVB34FhsPCgqxhZQqA7L1rHEuuBmYcvGNbYseeZPBavkyYkR8",
  "key12": "hMZr9yKf8h8YyS3dvJ9QPf7JYf94nrEKLKUJiEHSfwdXVuGg1bogRcJ6Ym9fC7tCqW8asRjaXcaczV7ejtYaxx9",
  "key13": "5c8hW9wZKtpD65QjT14QeqzgbvTR1DBLxQhomnveFzwuhFQ3fYx7oG9Q8iFByqtdLud59hXqodLZqAgLKyLN8vGb",
  "key14": "3bcXa8MZ9g9E86oNwbH5exuWbkEugVTBfH9zWasEveBwe67g66C1XQdefj3SKbQ372GzXRrKycCK37cZcHqvkiJK",
  "key15": "VcQEeocx4T9ozCGLqHVdgkwkqjvhxBqr2veRJJN8V9WiLP875c2P7822GBNZvEF2ErMzw5ZLHxRkbLJ8eQunaQm",
  "key16": "3ooz11gWTuih8KiWbkQTMjf4b8v4QNcW4F3Y55oXsG4p6WdLMh5vPyvcV3NvYBmkD2contovHaRcmRsbwoKLvu3R",
  "key17": "3ZyQJd5Sb8W8ck8NTk28ds7omCnCAraMgYtZLhWFU4YaZoGbQyuSPjgAmXkFThknnG4tUMMv4NvCaaz43PpwYQwq",
  "key18": "2ExLKJAubxkaMTGkecQf8T85ePsrbbjhZLzHeo6UzoDcMm22aa54XJrnnVDX2sKBrTAtN7hcFW957UwC3u1Z6tff",
  "key19": "3KDbmbNq2b7NnCkSzDpqzYemMFWdz8wYTPwLp1h3SKyHt49D9a8vbvsyA7AVm5C7KmRMwqniWbZwfdDD2cFePva7",
  "key20": "5mGNYkpkttuZMGrmqW3FHdxVHuLxRvRgmCq23SnQTi638ZsfbXJypBApngVdypidHrZc6VKWp7Zn3fyEtjcaDM6Z",
  "key21": "5QTSJg8pDWwDfNYf3QFKH7bkGcGSSWc8cLPN9Bfnt38rAFakKDc8EYpmzFM8w4go2rzKygyuTLkmfaVCnXH8znU9",
  "key22": "3utQ7bGv884BwDEmfFSaUg1q3a4cQzpWF4pxtecCcBTqfDU72AKfo4oFDjDhg1umcHCBUMdA6PLUWGwiFCoW9M5w",
  "key23": "4L3iQQMqpxuvtVCUC3TagsHTbwKmg9mp5btZmRzANhDwJ7MMnnHXDqLub1rHkKie1yUQ7rWjh7Jb9Fnts9HMHTke",
  "key24": "3XUi8WBSaBH3czVqJ3eE2SsHnaBzoC4HyoAuGSwKeRYt2mfCpXshnYWJDkY75LA57Y3Gz2HYCSyWo6G5KrQ6e3Bh",
  "key25": "2jceAU8jWMkengeRtMTYAFjNywaC9UgvQWY81uJLMh7MAMSnz8FFCM8JyszXsFG6FLToor7RSU2RzP6gVv6sDWxx",
  "key26": "5FEniF7Dj4tnPfY3d48Ur8njU83jfGeg4gySALhZRUVjtBhmjoj9QtJrDgedaRodMGfBCPYT77s2tRm5G1QSYnGf",
  "key27": "4CabbtkigZ3eTSpRmLYoEdCQ5xBky8E5HRGJpYuELEuUsrdfBX2oFP89zsYie124nmy77w1tTwj2wLS9JwNKNfJd",
  "key28": "sCjLBBHbxmFmbPUsWGQMt3NqrxPvULbniFhoR3gMznRyQto4jaEPgcvmmpH8g9y7PQX6e17nrduqs3fpbuiM5FT",
  "key29": "5hYvEVcM7WsHgCQh711Kp1hghDpkSycA62toA7QH1yLYg3TZcoPZSsvCDGM6AsCXbK4M46nS6dmx2pa56C5Bt446",
  "key30": "5mozSfZziU5UuGtmhNusctkjxRXUWMybaQWVNSCCcs71ovfnYMLXmyFTPynX2UR5sEBbh8wW2V3JoYSAWojPB8Ci",
  "key31": "5uVhFP3iE3swGrvHk5owM1b4DwdbpKNLdC8QaTwcW47p9tnwSavZ9wfThGmkKVuysn9EwbHwmC3NKtuhv5JTbzQy",
  "key32": "3TJ2pFDzQpfJ59WnVuYnYmHmxQZNzHjQQ9Nkz8HyovtPwa4Mw85gLb85zhWyuKWaxfZwDNhgNDUkqDXdPULmarwx",
  "key33": "3g1eRKYvFJ29ZeCXDHMcK5r5HpzaRYbccb9yeuRJAB5zebozBvP1pmWMQjHVmcY58yyGxbzFWUpfvm2Bdea7WAu9",
  "key34": "2WRgAaefGSPEfHk4LCExzCPgdfXbWz592QEtbfg1niuusuANmQKqdxY41bfKQssiCJw7hYp79Wjv5Uyxfmpiveiy",
  "key35": "2Aobts78Fu63dTeAdmkxv7L6qem1ccnERuoTTfnoN7zD4avviZtc5EkhL7TtXKd8D1r9Pexqqn8ggg12vJSdV3Ru",
  "key36": "27b9Lzr1oPZdhvHTxqZGXq9aX3HHTwx89j3awqqYZmAUkLmBnvioTzpiTWQMQ9bfHk2hvK7ra7uP8wx1Yq5d4eNg",
  "key37": "4YUjSfUMEzSkXn4A9Ne84joENMZji9xGfGsp3QUXouKP7Q678qARB6HpwSGpgdWTCRG7yLdujjLZMHCCANAwqFHj",
  "key38": "5vwa3uyvTmPrwq6pb6myh1uRWe6UwtSHqoacirQSike31w7KKvBWTLhzDhoWRrDKoGf6C8gMveFDBkch1mGeWoqL"
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
