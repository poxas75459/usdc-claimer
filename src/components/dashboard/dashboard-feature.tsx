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
    "Jh6jzFrq7rx9Ao6zja4K5mYPKGHBUP1vmfCjbBMKasPLJr1xGidMqT3gk99cHfiCWtgoiBkyk2FbT9ERaEtj3yR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S13wMiHjhPYf4giu64m78KQkC1RQETvNqJhjcVTMvRGzhVT9kf6KL4GXTQksz89WtPkAGwKNugLUeynrDJzYiht",
  "key1": "5pHXJJbFD6S7fLqYBddGbr5WZ8TubwmHHL6HePkD8wJCbjHN5Ax489wuYLK16aYM2yuGmvskrEja8tQ922d26yyQ",
  "key2": "2dmT6bvZ1vLAKswuBbfeiU7Yk68d5JVrzRDkAWiv8xU6RyGNy1zFxUBeK5EApAV58cvH7Kps4VzDkN8Bev5pXEzx",
  "key3": "62PW18G2Gqj4Jk2qdCQr4KKk8PxRY3beLRfawni5PyNQUnv7pshSdfhpiBUZ6j3Ud5f2yjCKBvTV7NYfLenPqXjX",
  "key4": "3vtoWYa2GsKt6BP8uyGRiShUmWy5uL5qfaFRUSH7UJ7YnzLRkfPqTYtSaDamBJytS8KmZEDFjW1W9UmBW8q2GK5N",
  "key5": "2xnfDX3JUMxhmnyQTrAfKmD5j62NQUufvWEnVcY3A6b8j2PMpL9Au8udNVUk85w5kfxqShacNmgazP5YvCLK7Wbi",
  "key6": "2UD2CkhYDCBm1wFE4gXtyEQRzzL2KaQ557gUeE5aJ86aQeSXNQfZZxC8auz8Z2o3MN23aRC4hQLi5CP8ZBbhhCST",
  "key7": "2Ngveo21fna4uu1LX86Cm5app4vpJe79LwZxradUVYqkDfQzmdGEVqWrrPBdq5rjxja23DKMDuGjqco8pyFx5NY4",
  "key8": "2ksPi2ZUU5sspwF4zXdJFY43avXbVUo68R6h881L9kKF2a1DnG4ab1L2zGLh9GB3wwFfLCHc67Lm2iw8QnwWuE8V",
  "key9": "5HQXqZpvhVPy2bxVh7Rso8oEug9kQJUbYrD2C5A81jgjvcAdW9VBbhgHHvBCmKy6y2hPyfHJQmacu8f6bXsnZ9rH",
  "key10": "64wGTuz8cvgVtMSGK9DGks1hrDHn888i7D4tf8NzdWjDhFojie625Vxb1mQkQiuCpRsEYAExjiWrWHDpbtP5gd9B",
  "key11": "ELojMTNeWETvJ2xDjyGc11jiYm56S3oVmNw3YM5MsxGzKbg7FN5sDFCDDVyJPJd2KwsAnxZftatv2xWbQ73ctf6",
  "key12": "39kV3f57aebjNrT8ehprgysnQoBL4NuAePXgy9gSGHHYmCzsXfhn18ddZb5KfPeEbsi1qHtXWKvHUjdrTKRoQGjK",
  "key13": "2DWNkMjj2tQpFEAzEEmPUFcwnDftY6j6Ve8VbCBGfA7knMryfWDWxv4KMZY4c8EWNuhiHFB9evnyCkXeSFbottna",
  "key14": "cKkb2KBRLLoS2ujX2rkaiYCo4uNo1N5BKWAVk8PDopuafRU5LP9D1U9zf9dhbBLciyWuE1nwQ2cYhvHWMFNQFsE",
  "key15": "5tpXBLiWwQQFkM6v3qrtgJAcK8R3WMVv4ycVpYvRNwcdEunXCXC1XU6zTxjkFQaPss9dVmHB69d8mdZKfoFNdbbd",
  "key16": "3H9Y9rvaEFGrEN6ZDpRRXYH6HC6xcxsrV1qUM7j4ERXKsTFnPgySk4ofxamK25hJFWDrs53EepKuBPnZp9g4P9at",
  "key17": "4inW7iZq43J8zrSqdtbkHSE7n8snnwJ2u6AvVWfqoKNrEkUzyJny2MqYSRnBTQaC43mLRgcSkvH15JTAJ8UpkbFh",
  "key18": "3u3PpE3ayiDQzHNXWByPKuzWUWEMRtPLs4rMYx3hSAkRUR3NJTgRjVQWYwjHTQHv3cufGCWsHGCBdd7sCXFgyKHd",
  "key19": "5USKmDAc7UN1EkpWfH9oYExunTE5JibWJHGUjUYB9o9bfjAafG19hhbDtaH9QYKKurVfQwWgai6KSw33yApDQnk8",
  "key20": "3XWsNjfs51NpJx6wxdLQTZ6tL4wKLZGha2buaHGZ1eoXN7Bn3Uw4yAAciF7gzkdE1Atqkfiy9B5HggAqD6VQyuJL",
  "key21": "3ZcxY7H5fSSRKtr9FeAzmT3KM2kX4DmyXaRhM3Df1jmfaYmkntydiqTAnYegGaxnhe7MBhYdnHcQ9wsu6yMWnHtL",
  "key22": "5kiqpBLEUnrGt3yyLXZuS2Kf9ApsYH8wBQ68kahoZrVGc7Avb2EXTMM3xr55SVYH4Wf4GMCmMNTdH34Retn9cf9Y",
  "key23": "5k3L5EVT9EWwp2PhNYiDELVuUG1BfLysKKi6jv12PUc4PZGkerjcGfaM3yMwAhYM1Uf1AW7ZSghYQohMaRnJVbyj",
  "key24": "31gmkHVj74LyyiEjjW8Azz1XskbgPwwccnRghrz2hvVmZ2eHzq9CGHL2PHPfrsz1M6GJggf5Hhn7DbY3ZoSS2Y13",
  "key25": "3bMPUyJ3Mx7xroRmVDpjWnd8hsXEGhkWePQZF9o3ZMgAqhvZaWzPTqdWVrVRnjyogYLvUbMiVjdU6G2TZM6pVAWB",
  "key26": "51FM2yDxcBM7mbLBxBWmtsY9CFa91xmdsaLcGNmgVSDzWsF4V4JEwdZd9iRg32HX4YyPqYaYsx3t3ko2JhfzPKtr",
  "key27": "3zzg7T2vmedzsV6aHs7sddx42o4j4qaGxyStkgFykNezCPhuwbwGTSqDEdcz5bmosJzEcY3Rj84hhdnpbBrZpjuP",
  "key28": "8j6Ao2KViyk3QUA4qG9TLkHcdoTA7e5efRU6jMFiv2cnV2JvKe4YrsCo3UQrQPwpPQ5VMKZarZdi6jcwNDHKCui",
  "key29": "4eEZZUene6kZy5KxYDzHv9wrtsikAmEQAj4ASFPTSd7XF8NB791AMUARed2utHDTZU2jpMPbF52prXMKVddPGTxD",
  "key30": "4a6Fxp48CcTF1gYdi5LSSYzEBaf7j1vuT7Ztjh9mJuELYGWnd6EKdG2t8qP9rbYMLZrFLgzR62gJqGUXbVZGGEC8",
  "key31": "5AAMRX5doEHyghzNRbsbgiTydsMJtMFabG3f6RCTKiHVQLGBGX6ZMYVahCL6yJFXjVqpXTnKpbXUJYzaFbfMnyjz",
  "key32": "4D63Xb4VBHsjf615jJVn2YrKY4qhLo7bUFg2EB9XeWUae1mfzJn33V927dc7H1iAaU5Vaurt1zfAPvhhgXHAQ2LG",
  "key33": "YxVk7LkLobCuNUZkTVrL5iLMWHvzt66jNDru7Sjt1DBighsp31sXbhz3rw9xwxbDYphbk8YXhg2fgHMkfb6t7ux",
  "key34": "2QBdV2XpThia2FVE9F3CJz3iRYTsEKFW7b2rZGhLqTvwD1Gekh5HQ6GZmszx8As3vYMsDhdK8ZTx4vehTobknkhZ",
  "key35": "UPEtd6JpDk7267MRJvvu2yd1FoxdJnaAyJWF6oc6cE71GqdiY4z8gX2wKuF5D7A6ikftLDdhHQX1c2U3ocymHtG",
  "key36": "2cYgdPkkETdzCSSMfYpxVjSUPp9uzdfxhRWvUgWsKrbcGcGn1HZFBGRDy7s61fz8ExCAAo81L5EnWVRLyuMap6y9",
  "key37": "4bgk3BZp1ok8Q34U1nUgQJQMzWsF1X5FbuFqATLe4FtgicPECbUjga4tbNbkF5nDy75ZwbDQy5SHFhgwwe9nzVeY",
  "key38": "3EeDhhEN2y9jRdm5WV5Pnz4jT6buFyEUENw1RAjyJxPNoq1YwKds5Z6gSGuzGYfpyDaQeyiAhnKzhsgRxoXwzLYc",
  "key39": "5S7PhqKZMnngTpeBv8xwYBHtJ2WU2cbrHCyBnFDeBuHwC4XV6iJXEi1CsG9F4LHKnFDrgdCHruBZYH7wtCrTHe7o",
  "key40": "3cFXJHcPb5bWtpiQc3GWvYDTVw1jfrDFWqVE1J6uEkqUEoHqGBpCqXEzzxTZmZNWq7uU74E8Eb5kY62qDCyn5ruR",
  "key41": "3mTiQ4ikywmxrQWG2HKb8vRbyiFRLvQPWXKqVLPZD1z3KjoZsx6dbDCVXfpFJkMVQPQDTdq6yY7xiV9V6iSdTrsd",
  "key42": "3THX9RNufw9WJkZiAyR1ZCUnRyBApMa1dzdP2ZvAn5QLM7DPrc4LSWUnWGxRWc1BNU3NfL71aQ3vCxp7m9t7eLd7"
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
