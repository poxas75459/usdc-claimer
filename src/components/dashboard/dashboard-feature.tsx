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
    "4KuyfJYsctTWPPov4uv3PNL83ScH86eHsoM2HcdU8sCfT4EgdSZhkHfSNUSDUBuUtfA2QoLZ1U8Wo6V64qfKEVJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Ag7Wgu5qC5VCVQZKCv37huqUmESMieByZawarHaqgtrrxEe8mV1dbsiNtboN3TwNsMdyHy4kiXmWm7gzvyKhbz",
  "key1": "dj5ptp2Bjr8KrvVEtQ3HjP7N2qCdnbVDQxRgCCpf5C3pg7sqa3YynXEwLqJSefSY7navfad6855E6sia7fBhstz",
  "key2": "51gr26Xq6igjDeJBQ9ErkyrZwX4thVGpQCBsoLN9qrTCVBBkUmppCKGt6DAUJhEuWqPcTembWCTX9QdeqQHxb3Zt",
  "key3": "2aN55NRzfSzxYdR923Y1QaR8p5NXTJTtsQ72tGBYvqKPFVRWkNS1xoJWoipYNz7cMVb6vPNcdAy7TK9zZiFcjix7",
  "key4": "htLkSj3tawkZYXQ3dK99eUrk3ty9PqnUT5pRT5SX6PQ5T4ZjEfBVue5gHr9U9shX9v1SGEiFDhFzfzgsEKM6FM3",
  "key5": "4UQxbWtJm1QUF44TU2FB83Qe4aBDchK6iqmvHxFoK5vgiq1tm97ZVVJYVAEr7bGpsJeMFKB19P8qwMpSJJH2n7Sk",
  "key6": "21PJDyN1D1csbn7V5RKvcKXV2qMSsRnrN8zSwRdUn9hXCpUzwPvGrMnKP3DrMmThumm7b9LiApx5BJM8pnMVWdvE",
  "key7": "47DcAaHFaWSnNEzcYdB319BCchF4inUbSTvfb31E576CUWquoUfg1gasdMhizJCBd7MgN7m8MaWrn9vjQ3uwFnJV",
  "key8": "62S3uJ2QbDZmsAbyeLh2uxKN5md5jzGXUFKvZCvn1UKwr5SiD6GXKyqNNxT7kpS9SjVuwdQUdSjMnASVwPiqwdUd",
  "key9": "3x8R7fVk2z8w9urnLEFQSJEm3QcZY2Nw6CQHQG9KME7HuLbYGvagbdr3LnPneco7mVj3pe9o1qExAA6BswQfjuJ1",
  "key10": "4KPXrhQZHwgxvPppKHdHzUMgowQN9NJ1R2eenXn4py9diYyD9RE82eQX6KCZtiqHaUShzjJKLMsj7Lx6fwdxMpDF",
  "key11": "37goUwaJhreXV6BCR5GxP2STWkDz8493DoHrLraXabrEegGMf9RZP3rvDxkmLHhCBXdqEdU7ruCWUhgVJPropRNU",
  "key12": "54aKWA9VD16dkyySFXz69An8vaRJJ5dp72rfeLTNZMhhARgpcPTf5VHskLXtdHCh6dYpCiefxMphV5DnNWFF69nr",
  "key13": "5bhSSEeCr3sVZ2rQeThYBKaShmLQjNVom5qfHTSczbhMAWZru2nqatzpX5f2ALrtqKtEy6Mfq8zEVHbrQdNNCyhf",
  "key14": "4mfUtKKJB6TUz6u4Hi7odAXAihar8aRromVGbegSNZ4MSVuBQ4G19ehahBQQ4xnPNFsVVEeYEjb1cvvchu1mi9pa",
  "key15": "1HTfPnSXf5AvewxRM5uDvxAqCGPfqT4XpV7FcugxEHJRF3kbTxrD44fsy8aprxxmBGhX2PCB3aJksYigZbnBpMi",
  "key16": "3yWT3wNrubEveKBw4i5yvxuh6s6b3MtDPZFSZHPZVJN3j22NQjDFjqkLSmVZy6ckQfRzyquFNt3KtJCFR9vbiGZG",
  "key17": "2ZDssU1Zmq64YKsC9y2ksUqAaEzDhtDPuN8BQ7gaAUHLjjaSVmqy6oiw23UWgF5kkRiKyeouSUHw8JhSTh79GuDi",
  "key18": "3zvw6fkMvkMARYtHttz1yTCXx7EUG1ESipKQjJwkfWA9Qe3U9vjq4jPHqBDqoZR49AsHU3mgK9Ncr61xN3N8GYTD",
  "key19": "4h1AcxYmtzW5Dz1Jr1be2KqUP6kn48dN998aNXQVMcVm2T3wqXXeqvh4x4ynpD7Q964YaSWRZymFYCP7abr1LHoa",
  "key20": "h8Z75sVd5zT6ZdMEzBRtFaAZKdFgE8XjRMxF5M6utWhbSQMx2aHughbAVEJLiCXHLAY3BKMPX3xc48XUdNUV13S",
  "key21": "Ks4amLDr8xrGJPmRbQ3842UVqZoDQmgr6ybgmjkC1xAUwGRZqBoLUPB6X8dM6fR96PywcvVNXRgkvu4kd8mZbhp",
  "key22": "4HDMGPLKNdamBKgzhMdiM16zVMM4UthxtjmSbW9tFcidYNh5Qr3JzENz65c8Ep3HDLfx4jF9Hn1uX8hih52eh3VT",
  "key23": "49m3ZQSBNvy63PT5vcHLp6DL8TuCoajUzHnwfic9mXmZ9m2fqe5bmKDo9GLXbKKiqQvGoUxK1yFnGBJ9kmsjZUaV",
  "key24": "2T1kJpCVGV6LSQL6trVXmx2USEnnBW6dW5eCbwiBUacpms1LJnWVfUkcefG6YwwftnzbocX1Bzk13oBh8TqnXmzt",
  "key25": "2vemfspHSfZv9fP8cU6gK3kuz6g8r1fpEyQPVBdgvs6dMDY4rxqBCfnkDaDMVGLTpkvU3vvFMrCD1NFUfE1o5eCW",
  "key26": "3HBCb9PJmbbGgEYC5Ft9nXZrjJxdUPhSAVA9AZLRUHmC7JhDLkukXSMG6FrJeYZcfsGJE84mNWWA5F13r3DGtRQb",
  "key27": "4W9usoBktTmDiBnA2VU8CTwUf6r5ygADVQc5eXPeagPtxArPVA2oeQ9BHmsvusuRXaRkfTnm38bnQuNn5hpcxWSF",
  "key28": "2BxSYeNPHRKi5SDG6RxKtjjaqWirNkLj39XQz8PqGRhW1rCnVyngnoYk3feVJkjsMTo7VvALGp23KyReXiYUDxsA",
  "key29": "pgf5H49zgG6i4pFiXbQA8eDwa9Nsgr4F7AxCW3vBm2K63trPtjWu2yMUWdzZXB7vxAwEmowzDULumtafiEkkYTB",
  "key30": "2fqvtejDHW4iZtdGyD6oZy8n4Pbafu8uZjoAcNBQZDT3B4LaWyoZepvuFzUQW2n9tkVp8dPuMUMsY1eK8phooMrG",
  "key31": "5n9dMPJy6NxAL6F4HdrEjLWxnTJKZAYyNtRq1GWMgiR7HbgMaDCDf35cwNToH9HbU1dRHu84XyKPKUohNLsTSfg6",
  "key32": "2zWwXgqjHJH5DB6ZV87JeTJjsEZ4PuQkNB7TXDZjKtLve83WDDsrvwKVrXo5LJ5TgUWmyxUDN3EjvWgp8P339Mti",
  "key33": "5aRyGAwqfGvvJbrYiniPycLFJQbWeiwLNUJzyycjqa4jSqyBx5uPHzPR3UHZ3TVxcqiSkmXm3Y77Z6Za9AaTufuc",
  "key34": "2vvjLFjc4VZfxVKEQ9DQhVFffEz4cvRSHwQGibPaY33qcx2rEDfQiPeymeZR3PUmhEFyy91KkdbHwGaS3TYSsTU5",
  "key35": "4aXB3dQe2RLE63FRxhtVvWuQJDN5iv3orDCLiuHgZHKvhMwCmZLpEFbtzHQeMUUmkV7HDhgFw8sF9dgnbomF2ZrH",
  "key36": "5b3Nr4ULVGUqavaWJkYUxo41yAC1H3GNFpAFpB6kdegfRJfB36eCsYwC5Vvz8Z5csNXE5ctttuQQqDojAaGugkGs",
  "key37": "HEYdacjMjyoCHmF1G36RwJS52bY8SVDV7qSdcfLNSe4Ti71KcKyFNdgEJnAaWdAJ2RGg1zX2uTgq1o5GUawvXKk",
  "key38": "2ySGPTfWUshd6nASSwED6zN27hdJZC4HotxB7PBkaq7dMCQ9Graw995cPbimZ262pCz2RwPbCiGLMSoxac6RUKFi",
  "key39": "4Np2CwV4q5Lrisd5gfcjmYsQTWGh8gQTeZwkQ5dYWo3f8WdkSepN4BpYKjMSbv9HCZPsVMYYfnaKv1FitNWmhM2w",
  "key40": "32jLQsRVtSqjaNpXs6dDvozR41BUyDb8fqrHAoWCHaedPYe8wvzquAa3HXVoHuoU2AEFjJVoiacm6HD53YaAL5KH",
  "key41": "2akXz2GYNfnLgQJWFMTaVwJ7Tsx5LwDHX9Jt1RC9N6Ka9GVv6nrNRfedFci8AYkHsMwcQaNcePMykoHPXN7QUdHw",
  "key42": "5HhmH55WXzvFQTKZFSzABQkHfnLeT9kYKABUvDpzxegUaB1M1oEwvnWNF2cb61QJF6rTK9Hc5kZaankZFfAc3rMG",
  "key43": "3Rm2UeetCKNfQ5nJymTetAdJb2sRPnQBXspkk9hbED69Mx1uKofVfHDCermpKBbi8ZQXNxCC2jJhrLVU5D45HPx1",
  "key44": "iNa6muDPbm7c9bNpue3xPnCQpPWHFsM68Znjnd7ojV5W5px55gAbdge8wZ41ipi8NAEyC7cpUXjRvfaKKDZEi7X"
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
