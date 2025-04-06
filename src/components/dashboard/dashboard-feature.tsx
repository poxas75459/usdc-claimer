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
    "3qhtapraV5duiHDF82fRBmVQcNek5nK1Qok74W9YbEuGZ4Sv9uaxMafvpDepEBbMJ2ZLqjnEn27VFxFj3F8NbRnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Pqk9qS7i1BFBswvjKhdjjSAXMx5TPkSLUFDbAVMiYBAjqBdV1ZpFUZNtzt2n5dWEd2Vgt5wxfbcDMFaVbPaRtf",
  "key1": "J4mTkFpoGEYE7YAW9jTPfyMnbgFRcqfeDB6sFdhKz3mps9MRqCLr6Mi1PNUUhHctHvA4Hmf9Edq1x7TFY8PDJFo",
  "key2": "2KvKFpREkvYhqkhaKXRs9tYLXwkG9wtBWvJFLvL8ciThscTTpSzTTaDuZ9bbt1P9yf7UrDUZk24WUAArqAZUELSB",
  "key3": "3KvTxejpjD9CWf4NoqJbVDyKdApUKqWRanjeaN6yXLpt7UcKu3Wwcp2264QoRaQdh8jh53zqbJwH4HQrmpeb29Kc",
  "key4": "2AnPxFyGND41QdBC4NvhAu5QtRKATfBB8hfw6aDwAFpVybPanycK7rGaWuemLAzgfgPisxiXjZh78nVDQkbieJii",
  "key5": "5qMDuUrFpmjYPMsHH4mcDaZkhA2ppMskY4Ym8EGWxxcP44P8SDkmLxRLq9vGkMWGJYp9yPJvShYZBT64tkkftD2H",
  "key6": "4sHSJJ85k8QUtFLbfE3Ym9Nesq7wfWkYQWsQVaw4ZHkk9NmZFcHpwdoKDDtUfZ2SJmZW8QRyCyMnecWSghU3ZhxD",
  "key7": "2kdi6VoaMiKoQjQyVgh3FXMns1HgQy3Y6THb2yVzFqdsMZGRapVNCmLf1M7pWQuCa5YQZybQFBy41VuzJ25LMzAD",
  "key8": "5HgcPuQtXia3G9xQSXbjbSeRVbEqAYCwi1PYMH16Ua5oCgoCsm4FcttLbkbxeftXLoeXLed8fRL9UTUCsFTMQ4CR",
  "key9": "3AbCSSMzeHbmujBFsNsfmE4bV4eUJpNTQrXn6HByx3WevngPnjh8UhDECEwdHLxaffypvK2FHGKqrYjj6ECqwyVD",
  "key10": "4BHzEbWw1m6H9SmGEejbz39vpydZhzzHqQEqpF2kXc3pvntt9PsmndhYxckzt8JCSzf3vw89bvu1GTWQ5NgzbyfE",
  "key11": "24Hs1uaEChQmLPyTuHVCGMY5SMBm77zqSrvxAUSt7fBEhBNBQWQx9yoYnWVmM1qY2LKAn1JZmCfuDTHWq5BKpm9p",
  "key12": "4JzfdNZmRUa4xfgyxWUkpeGcfcnGE2eJv5kY9RdYsCLYNhUB379TU61px2gDS7UaRqnFH9dmeFCxWXNzL7h1xkLy",
  "key13": "4Rdk6ArmwFB3mxtgsHaPC4T1CtqgHH7C7i3JQugPp8mdsVTFrShqQQb7N7YTT12ANvcj3isWvPGudBjJShquuR6w",
  "key14": "4F8TtNzVtj8b7Uc8BuQMZF5sjtdarcweB6Vm7G9x3RZ6XnEWzMVBy6kwsJNcmf7YxzC9j7qyFreLFfNC4EX9SEdx",
  "key15": "41jYQH3M2J7SSQXhzekT8nwRkgVUwFg2ZBv4LupJrr6AZxG7yiSjPbuRmhUf5UVoRmqh5hwa3XAGjD1EuYsr6FFi",
  "key16": "5BN8hM9Nhte3snY1dNMcUCbHJjeGykHUJNGoryqzNFvpug9fizSTiNmuVSRvcLrPBLBHEYZZzb756shgsGTvS1zQ",
  "key17": "5enw5zizxQVoSuSoyeiqnUekzTkWUFNiJiT4TbbtNCMMG29pt7zbM9hzbb7NC5mR25vYy8JB1MEfdJWdP1rGDhv5",
  "key18": "58HudT7pcCtu8BXQqAhskJKdeBWwFcF6RDfKrKwvvxHXE2kuqkEQhrY4o5pc72U48XxJmLZPy3yHQ8s62wiofiQM",
  "key19": "2B4YNkPTLXJbw2rzREDubhmu4qsiSDT7RXcLsx94d3ED5X3fpgnqp3N26BQW453S4WY826HKiPexzDZLx9n3icup",
  "key20": "5sLydKr6MxSS8QdHX4DcituAYUVHxzQK883pDnpiZAivge5huEXdYC8sKsmtKjnQG62NMxGS6Pu6vEePa53UGwC4",
  "key21": "4w3BvtS5ih1MadxuBghPgZi2pRZiXTatoPpyuK7kbtV9PtjHmJfCaEc4ncQAX9wwzyNW4XQsnasa7FZR7xvCaSeS",
  "key22": "3U9sPdmaqkHE9wz6vFoRRvW7QnigZis8mb1czCXWwnKiz1inUcG2ap5p9sMB6GCXh34Yj8ikFmh4w1CwvJYrHrmN",
  "key23": "LNcpc61uwttCqrYVZQiLhjCuKHhKRqH3yYWoAEmPwzBcqsvobmvyCfPhDuN6vgh8ZbBX6ntqGsu8AyHYTZYHdMU",
  "key24": "47N9kyD4v5VB6MpFvueQmyRPWzSihTqyvCDkBocBcZRgRXYQf4Buqwz7TbWRTMeqnwPppkVZCxCQiFqjES4ma3Do",
  "key25": "Yu5kri4fQAYjpGt4YbruZrhTb63V7jHE5ERu17S4Rs34wZiUphcVebvetbkYVLt2s5iMcqKxNAwzdLGsZ3i7NH6",
  "key26": "4BzeZkgnbw5SrZLurgknByncpKtTGgpGbRhHNthJmuAfDBHs2byfgwjmoz69iBdrfVGFVJ5Qzuzra96q4k8897r5",
  "key27": "4P32GvrJY5Mqd7UpxQXQKJ2c6DtV5MeGW8txEq1X8uJH4XmuAgJko5odFb9CAcy9ktMUkuuWJLc71Pfaud9NHM3J",
  "key28": "2ZqU1f8zxWtgdfNK87qD4aRCyUtZqcsySD8RUX5BrCu5MFJ46VgGG3Bj5WyDWmXoxBQKY3SknZxzdTchrKgad931",
  "key29": "32vYJAP9VMr38PJ45ffngAHW14vrj3JMZtPC7REotuxrpxSYZhyRx2TBVwhkgFLmm6zAvkdc636uLq43P81Bw8Zp",
  "key30": "5DWvDXFeRNogfCvC7EGz11SiYY4hAugVKKoBcW7dfc5q2z6ugM3zUB6BXh9C23V5r8gvStEm9gTpCmB3btTZQuX2",
  "key31": "2o1YJpHQHWdXxgGwAp1rRdjWEpmxghrfNxxW5PTg4VQe3267vbjZgnhfDufkB6r37tyQGBtrxhVLTVozt6RCrBdh",
  "key32": "28qWrcMdBCrTnwktYYjcEd3E1Lbe7wwYfQ8CS1FCv8Wzw5gkRgkTNhLY6QNVABZGbrstrLs3zQRoacz2uhAZaVUo",
  "key33": "rZJiJNbAgJqjtuVMagL4vo9CvpiYvYEidM3aCX49H87vR6y7mwJfHrBziQV4u571owBYfwZnXAqzFqQCvrGCmMg",
  "key34": "5nUu2cHF5nv1YMua8esb38tUSSuHFmsCfXq7GmMx66mcMYHWYTQ23dQsmboDgJ1i7RhMqKUWpmpC6R6zQXuy1y7Q",
  "key35": "5cZaQy2GCgabx73qXESGTMvj3qCxsWocLeiXeaCVH3FZ5TY5yGsGgehKrGfEyw4DLXR5Skbm8oY6y1VL9h5LMeaE",
  "key36": "5vuHbS6GBksKLXicZypAGG2ws1wxnh9B48hV7MGoPndnfjybN1hGqRqn4jhuNpQmiFG3gTGcuhqRwSVmQQpwpuuj",
  "key37": "3apHxseCrkgdVgGkupqkjvA8rDhwvSyhLV8GfQgWFUbg19Dad8XZ5ddaZnznx7uikoxBpgFEC63ueBHpEVp9pPgz",
  "key38": "47WErHsrZz3NJ2b7FCqgrQDC15UX622ZpnP5H9g8hFsycGrdzDbNV687eVbdF1MXnEVVRHVm1ScSY3xYrDGV5wxQ",
  "key39": "2ys3QyN2nXgm1raZPrVfZBdrD1eJgkgpZBZxFhVLBNu8BgvuxEiJX2LWeLBxQmp29zsJGW6ZeWhpJonMSpfDkxSt",
  "key40": "3Dm8k9yWoSvccmntMq2o3Fq6U1XneWP1Hwy6MPPczhtRjxEvD6oNtnG185UtNxFGD7TycAfv7SEANGP33rz731gM",
  "key41": "3BV3Q3Gpouvr7GBMVkKDeEWk6q7LtCWSbC7NcwhSQFmvBSY3EhG2JZc5C3E7asfLBGyAqwFHnmYq71gFzxtUMBpU",
  "key42": "4Qn2Wv65KktHLLKmed2s6pd7DgZWRNSAPqsecPJx7Hyq4EkY1BmFHsp2q4Qb99TABw2E8dkr1XCAmyERD5hw8wq5",
  "key43": "3Ko3wzw8uBYFjE6siDjEWNgtfPbfoCvUPsWXDiqtaj2vnJABzYTpa7deAq34g6dJfRjPzwHUTVsSzLzwWxg6jwmm",
  "key44": "3PuEGHi2tF4JbM4G2PYUngCxJ6WLSJPNCrhy6euJWSXra715QTcwnzFUpD89uVfCuSKBVW1EGtpyPQv8Dno4bLF",
  "key45": "2aZgCDdSdaXMyE9hzJrj4TnUkGHwPGEonaeKWV4UaD1y3R5nL5YxaqXuB9VKG2d5WATyJS5NREzY3c8AhZzQTX9Z",
  "key46": "5zUV5fbLKJSQdnyfH5VCMUzwjAfNf6wqMUhCsKgdQneANU6nfk9wsaaRRn8nYyKSnbiXtXnZetJh2Nk6mkqfWwo2",
  "key47": "43nQqyd5RvBAkuz1cY1H6Ap4AJDERHdoLwSWYmcvyL71XdvcSwPQAeNF57XrhhhEKC2iYjZBFujwaNjoNF1jhssP"
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
