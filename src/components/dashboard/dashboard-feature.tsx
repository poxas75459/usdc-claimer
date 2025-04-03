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
    "33HjzV21PiWiHnieGbm9S6fSXEfkn3bcbH4eTo2LhGcJ8ezvvJDDSEh6NxxXrnK89XJSqpr3NQEabsZLeoH1GBo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2YmntCQxzurUR6ZvK4jQV46kaDHderced8ssj2JENUTNs1GHmz7ruYy5kMwYHRL9pBLM7NvwkKPRC4h6Qz4AVn",
  "key1": "2JDytRsADyTKjpiLuYMpxCmgcNfTnwnZRio6r9tFm4MunCmX2x9WQ28CmqqHJNvW5bo9gSSrzUhnyH6K6LceWu7i",
  "key2": "4fqHfWUASg4uCGY7ZHNvh4EEZmZLWNAH7doih2UcURGvnaqX1hwj3qTcDpyVqqx6TJi8NnBnUHafpBdu4zEZ6YMr",
  "key3": "65FHgo5yr9xmu7g2WQLdc2UhNMuRbgZCZFqtM1xnnnCg3nqkRwGh358yZPw4W5fMvkYJux6DHnx1WrRhK8SMeWZj",
  "key4": "9tVNLaXLRyAbE2saAVof6L6zciFA8Kk9eGFAp6EGj9vLumA8EEj3BjU5z4wJTr5H21Zjcpc133gV8Xmnp9K3USr",
  "key5": "34vBuzSCSzntFM2qxYTQ1ufMYoPa3yR1DKnYqji14YsJn52RjuwiMv4JKDLZyL2TsaJK9KDrVdcMDTiVouHpJkHE",
  "key6": "4vreqm7qMAQyySjCpasjQKLQaaXCS2zqDg8YFHZfdXfsYQq6Miakjv5kr8E72VSaRx4cuA6vX9erd6u1JpBdAntR",
  "key7": "3KtJ2j13pU6k1Zdi2dQmjtchr4NGPNWj4MeZsSLfRtRi2C9Es2kQF69UdB7a4EHfoqgARcZUXYgDFR9wRX2FsCVC",
  "key8": "5ZNDYyJxgQXeGKTc7x2GSW2sBDf5K6uCCzPsp5QcLGTnvJXDxR6CApCBP4zX7rBVGUfziJ5n4MKGNLAw26hL4Bkm",
  "key9": "zWmt8Rh3P8cYUw1rJEryah7p3r5zWFJfcypQa4pxdKJKDbHrMYzkyXUzydbi7W2hUHmUHyLNt1mz7PeQ1qsyJZb",
  "key10": "3TJZkPj7UPLmPVJg7t4qgm2sggNGngoXsveZqeF9ckRgTAVAgELZndyref3fsxARNkkaPRcjb2EgEZDgTbTQNHSh",
  "key11": "63A6ofBRpS97HE3pSth19f1taixDT96oKargAGk8UcsoEMc77JWjPa42QBfyyLFsdeJaRDjtxSuFeAu8ogCwHJg6",
  "key12": "2X6RAtpxbibYRcJk1tziCgnWRgNYKdAdZ2WZXRa4tizDtK2JhFcY2PqV3pw8GpSr6dbnG738PTWrqZnLEKHuGbM9",
  "key13": "b9C2hbGv634eL35kbHKeSVKy7NdvM12LMBrkJjsYPPkfKfZN5E73fvv8LrJWBXHGgL9fJKCuwvAF2wrpvt3pR2i",
  "key14": "5gbHxP5DgsNen6Fgb5AdsHrKYcTGV7d8rUkfzNfQnYUnz1xj6bzWumjYhttcYkhLXkLWs1Y1QPsiyB2JUUebQxbb",
  "key15": "5VQBuMriYmP4iA5R5enXNZJTiTFA9pXLj2BNmFVBbDyHV2ajqB17szUCvxVDLx4d69e2mVvpbbGUmG7G8YDgbEGy",
  "key16": "4kckcNyrbkWfdFdMpGjepaXch7oGDVPwjCfH55y4eYUuFLHAdSYid7EjaJH1WuYEEzQxJAcWweG94H8jhMbD4qSf",
  "key17": "5ZBkB4CUCdFndVfXvsaVd8RRGLATVwYbsu2UHbuxhbKf1cZvr6ftYEXPWTeKEQgGAJtqDBiL53X8oJrecCpUnXF7",
  "key18": "54igPxR2AwCzw3wwu3LUPA9wniCJY7NGgs476LjLRV3cp5imVPK5DK6agcb3pB7nYaeWU8XLdu57JrrMnAVKW9J7",
  "key19": "EH8QbFKp8uwSJhe53xjZkYjk9RExCYuZC5fcAJo8KapeoAcCuYpgvDQ3NRS9CHn2FpqChqFuQ7J9HWcuH2j5Sx6",
  "key20": "3GBx2d21GR1eL4rnhCKUbfFH62cLJtLLAKnBzDndQD9ZEPbHvapGD21ibDGKMMmgZUrAjnpxA6kG2jcFA3mqKTfS",
  "key21": "5kwGLuf81aqnAgyase7AEXMnVA9ui38Pfk9TrfE3CdTng7J7FZorCNUtL787hPW8pmugmpLRkEZv2SnjN3skp5LW",
  "key22": "q4mMeobgNHeH5su5qJSqHjFqJq6ugC9A1oSSfVyYpCkHCWwA5J1ayVHUQC5Cs87gXsze484hFA5gic4yuFcTnCS",
  "key23": "47ktBWy5MKMJXZhjJ1pamndZLkJVj4yUqNJ9p3JBiXQCatiuayDcyBK3DNR5RtxHXCsyKQMCmU1scQ3pouugnbbj",
  "key24": "4MrH1tBr1erM8m1Ewh9Ae1oqFsgwGtBLL2CUenHT9VEasFW8HAt635TdXuysp2ToxqUQ9M41s9d5q2CEP97hdodf",
  "key25": "Yx45Ktm5dLYwwHrmRCzwh1sAbV3PBpLxrsSarGY8sHrw9gfefWtvxpvYErFxo2C65dt99DqMWae3yk35rPYkmfJ",
  "key26": "3aZgsfytGqmXZFehQNyMYNEAUsViBPdySJUicLNgQfZjc2FtoScN55Sfa5gavYqgjZGQ37ArC9VPrzipRc7gMsQd",
  "key27": "5ksinH6iRYnwpcDRYXVCkTLxpfSLGYS3rqRjdHi2xEjFctn7MPwvfHBBhwFaoWbqjNT9YLrBecjiGqeT1A2SrWmf",
  "key28": "gG6wDDAKti4cYBTsMTGCMSHcUfZbnnTrCmYGqitAxVt2PNBUpR4waZgtUVWMbwtfRcL26Dmydeopo1HKFCbV2fQ",
  "key29": "2s5GPy2SiarepREy86rgh2c6KR3ezSjA82nT3tACC1QtH6BagtBzaswAh9CMZk14YXkds9dKH9MKEeGkgu23cYxG",
  "key30": "2qEgHTW8nMsvWmcePaapdNTJ1nAnsbqV7CE3mnrXn37wga1sr9fs1aTybbR232auixeEyBGYAxHB5Zi7NVNEzUGc",
  "key31": "2bdD4DyGGaWQ1yb9vQFZLhbfqFNxSazcdUMBJt5EUB748FkkEXU314vT7Csp8eXnKkLMuqN85Ky2p4ZgbZje76Xg",
  "key32": "3cmT1ADpc7cxzVeARgX2pYobcz5vejtyoN8P8KqvgM9TSMRcmKb9YXYVtKPnwHCDxv5XwyBDK5kGkgJ7bVKXbbev",
  "key33": "BGifACK5iuqTnBxiyxPGsTYCqfxvffM71B4PGrL4p41L2CY4oQPm3zk8BeBFigZ6rhUUXvb2z6eiFBNpZXKPET3",
  "key34": "BCMuc5agE7P3aUx8i35t9b4o8c3rhvCefeYPG6XnSqHcA75cgrFh9HBSJB6vN26nByikvJxoF5989VUHUXFGQhh",
  "key35": "2DRMBYrRyNgLwHCoUQntjrSkqKkeDqPwFukdKVai5JYvKx3wERxrmtrJTBKvfjAMS7deA5HW7E5B2E1SsWQHvckK",
  "key36": "4AytMz7PumBQGah8qKkKevh5gmzaMvggVPYtTQsopjPHxLMazMzQTpb584vfRuVD71DEohErQk9VDydjaEEYZapN",
  "key37": "3im7unYca8JwupjH3NCSEEofiT5dLAv4CsQQ3pXxR2BVJ1q1khadbEMNuW8PoiXXy6Gn4XX9UrtAigkBTy2JwWEx",
  "key38": "4oxHA4aivieGbmzEA6So84rKVX7HfMRPcGWDtvjXVGh9PJWKhgZpLUxCNzH4sb9odbDhz7sXkrvG6C1EnZ53ZnqT",
  "key39": "2gMu7CdspKvgj3EtQjBCQMGEKnGp7sxyyHvTjxrNRYocUuxAt5wAw6c8RHmnCudn3mDFN8CAY1z7RBUsGVo8zkkE",
  "key40": "mh3Aqp94UUFS2nNCiiHWN5mn19KGHFrk2bhKzwa1Sid7e6ipvuUmZuGmXKUsPexG2kF8XDC3Y7AkGVZxjDiiire",
  "key41": "5t6u8i9VB4cT25a2ziJ5qRJGAkhZ2C8zwN6En2sj2a7d6NcuMHE5WB7UEkTdSptcJ7rX5J4nbxjHe3c4egJR5eQn",
  "key42": "5uJG9BJEjNw2Lf1jL9K4SBPXp6ZAW61X3csY3LTv5i1EL9TeadPZTU7TM28nK9VZRzpf2umh6hJ8tCSFAWnstrf8",
  "key43": "5QrRsPm7Ui7PmsmkuTDewePEdi6wWcEKJhoGLU2Nv7KKMwDfeXbgiAyiY3zbEJNwKoSWhYn88zLrRbj99BRKYGt4",
  "key44": "4rPc7QveetW7gPqFj2WhRKHJYzkB5ZrD89ezF9Az2C7A3YGcN12Sv5Licpkoj7AkUrUXGYfgd4ChRw5WuRsDXkxH",
  "key45": "4iqPN1YSvqmcENTTnhbbBEBKsKfQJZrSi6jAyMeNGK7EewfJpRH85QJADVRhZpgtWFSVNsP8246yPDudu1smUDV6",
  "key46": "2uR99wrLCpHhA7E1ncRGzNza3ziYhRmtepJFd3PrG2SMcEAGMqoTXRa3dJPXh32iqMTKRfptFEufSsnXdEyueNNs",
  "key47": "3oELfoM9CG4P4UvCcKCFrZr2cWbgg2ErZSh61AQpSjuvZ9FEEW36H4krLf1GvpVRE5RwRbcvC9EZoPBuAB3ern4c",
  "key48": "3t84YEFwkdUdxYzNhyKaYXrKUaAcERASM18CUCmZ6EW1AQWNLKKmNA1mf8R8LYT3c8xXKVR6Dpy8drWELo5cHAzo",
  "key49": "4scdTodgPYPS14uQKubVVWsB4iMwbzsipmp3XN12z7jeHvKeCCr2SzbyN4kUByo6JGaYsEN3f5dqaLRkqE9k8vY8"
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
