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
    "54LrUcaciJkCnnetYHaQuiVtCMxVLPD72ThNY5Kdzt1XSTjQjatrMv6mK9kSiK41w3TgUFQYAZKkxijDo2dmW2pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1HWPAt69vEb1rf5Mn5zPVdhThrPMgtm17WYMFXTFFxr8mq9Vs5wRy7REb5oxkppiE4SQShSQBXLa6GYEr3eX1x",
  "key1": "28AewKPw4AAXhivpKYUhVWxT6S7bUzhwZYS4zfmM6Ve9p7CXkNBefTrbd6XTrxuh4J5zoRpdsqvsYW8TFCXUnL7c",
  "key2": "5Tz99618NpYuryDwVkEvtaQPVKLhxEDuL4qL5stjTt8ASCbamentYfdLVanmCRwXyixUBz5AVrbUctk8zRk5xNdt",
  "key3": "3S76oB4a9uuhY4jNghyoPU4BDj3mshCrcHWmgoy4yxjLsgS8P3cLXoSHtmdoEfrXTqQG3SKG7kqKkraDDY2KSUhs",
  "key4": "4RPQBAo8cR8NtC4iCjMKvNnqGnHP1U1JkatcucqsLCdP4NKSohH5NXee1wtjRm1uhfattMdhCcwFZYq2px3dDsHk",
  "key5": "2rc6KWJ97nZtUiF8VqQNx7JqGVJaDGWxWVeaFCkCYWXXwGm3bz3AAwqE4JRQQhBmQdunNqaiQCRRBcdtdrroqRTj",
  "key6": "4NyJLPtKFYWWkUJBJ6LZg9AFHL5Q2Pzzkj9KLDnz7SDZApTmmhH5uMuRQh4EkYcEbifdaY3jz5LYHWpsfmrLKetG",
  "key7": "5uDrPRAJRDg7pEcWUbqDFcW7v5XptMqqzVvAsJURqFSSsKyxobggwD112x1Kn5k7TFwM4bRAJxfNxysLbU74hhja",
  "key8": "43K8qj7PRmoSs8Ld3pCqFmBUmPgRTpDQpDriTkSfzRiMpYFj1eVvvFj24sSPu9WVeySwpWuHe6jAsQG2PWqzXgko",
  "key9": "oQtK5driCo3shkrJnADJM4SqspmU6TB356CzWFKyPdADL85eWSp7HMawZqwgoKgXEQUb7ZSAgbQxBTq1P924RUW",
  "key10": "3a2NNyxuJcZjojopbEJ384oqmgvm1fMRCjSMHRGdtWRTYsUVsN3iPg72kupyRh5fHwhdwzxRtfP9P3Aq7FUs3g7a",
  "key11": "4RK6hQZR5itSe6Yd9QQXUqJNtBfc5m9SFxcnou9Qk2wpoRYgNKtoiAcmGPMLYRfvFMyXrMun3UZJCHBjTTq8923M",
  "key12": "3NPQaM4Hgu7Mbr5QrQeBDtRu2vBxTuYBzYstNTeV1JdKATHyDMUHzT8x5cLxhj9c1yL5ia6mgQFXEUWSXZiFZCiz",
  "key13": "57np7PmJ1KLk2a2YU3Eeq8KYtCei3kFRK4b5gTFGZvHD5RZToZcbEy6kL2bMSwczPdH62qmbgfwDh9oFkYSGTZ4L",
  "key14": "31UNhpdsqzBhq8dUuH7EVTdUpX5LWrxC7Cp9hwLRoLXjdsFzr6KqWQLPAVNjvPYf2f1tSvPPKwGfbKopa6fxx9n",
  "key15": "4dmYivjPprjJ5VwnfqdbPdryqL2orrTNZxyMV4MqoKuPkg97SZKaTuxR3rVrAEoEqLVa1R8ejTVfM7ojWV3GLUPh",
  "key16": "4aawxWKF7zYgsBpLJPqThLCKXCY2SbeLW36AJoi5A3SnqaYa3FmHBpWjDJYBd3SwBrMmZrfFxVVJETYF6RKVXm8x",
  "key17": "Zi5jVBVdNm2yw9VB4jFHUzvuv4toi96m5hFrzDcM6Xgmzn9FnipdLKB73hgEWESh9p1TvAysCenijjmTQgau1Db",
  "key18": "2iEaPXMH1icd47BxE2xu5uVjdQKiy4wjhJNypb4Gek8Qk5AUuavyFm3qqSnzvy7sNToxR8FWKkjFRfT2gVQjPg36",
  "key19": "3mSK2MrbZSzVz3Qbr6XbyMPsadoNiQxhwzp9P5WazWeeffDb7fHEveUEVo1tBoqVKe3RCLvPNheGNKBWw3nU9mcc",
  "key20": "2JZEjBeQeZBhJWxeUQ5rqZt7DFviimft54LkuKznFK3cdApfJDdaGCuErtVgiQwMXhoeuuPoo7wUg2y1Lp6Dyod6",
  "key21": "3LEekXkAxLGv7SaTeLPQ5MRvwg5iZW7ro7pDQT9hFk3pTNbiEeTBPbM8R4bgRWdA1WHVBLdXvgb13fLUXoKkyofU",
  "key22": "2YqDN9Nw7XHJMoVUVmPPQTr1wzctqPud1bRqzppwMKyCY5tbBitJBcP8e1kcJCgc2TYwpzuQ37sHma8XNU7U3Eox",
  "key23": "4zCH9QwaMHSsNgaeZasbb3kPoqqwsziJkr7f14Dt7Qdffn45VbVgCmFZXasJYinRbSpxU4rt3Wd5QqZRWVwe2KMV",
  "key24": "3pEhMWwNzd539zheTzMgYwKftgU8RDmaxAvNkUk7SELmmPyyv9edLrt3mqc5To99dtAgWK5vMjWqHPuJ2BQ7J2Cf",
  "key25": "3aNssGZLSKNARJZHhFcXyWjWLFH4vHqDXJw5J4jhCxXPYCwpdgUZzW5kYcghweA8E86BwYZhyKNDVWqfxmrtd49h",
  "key26": "4a2js5Ug3E3Fj7t54wL4YGPRMZ2W3wkrJVG6ygTt6FNFWWyQysgk4KVmVExwPKfgNcyK2FJ8W4CHtV6KrciyJqbP",
  "key27": "AU5XAuxqN4feka9nv21PaDjV5BoEhXbD2DjaYSXQhgYQxXH9LALvwdjLXR2aJ97nhvs2feJtc51HSyfy9r94mX2",
  "key28": "4xTzfVuhik43mEBsGZntdWQ4NhfbRaGfFhjbEJ21A6NCDiskD2DxUGDayuiBqUVHbcRygVF5fLSmnNuspccHWm5Y",
  "key29": "4ygzZZnHCMQ4uoSdWx2M3Ea8HFp7vK138bnsXmuftSkeiuSNATnGQbrGTwJ33oJzNVKYQcrj9tvo8ocgc82R18pJ",
  "key30": "64xhnaqRkYQDdV97CvVPKgMyccBCzyQGrrmjdBxQ8AGjnAurYL5kfQXT1L6g2aTDUMiAQyg3bRWWPYqNWQ3GCrSq",
  "key31": "593hfjcDtNsFhShrWzsSAAuQSWgtzJz331vgwJw2M7np1bfHrYMD4z94aeUXVR7fdrdjP1PK1Utitj7jqCYXsW3h",
  "key32": "5UgrhXvuJrBs1uUdLQijLqzRBWaqdYYTcUTamaYinM9XWDb7fcHExc7gMv2zDyeow2n3yqTbUL7D3fHTroQi9WLJ",
  "key33": "4DHdVSa4Uzs9VKXb27CLvJ7j1CC2DZUn21RyyEov5vqXoiKW4mupyXZmN7DCEnX5iyR2r6zvzjBhpuoQr7WXy66",
  "key34": "3bes8xWeDEciPZbGD4ZbqHH96uF2v2X9gi75wFpdhLQapQQYMm7LYg7swV7rbmD3ub5MQfEXdqaPyutvHmVMPSmD",
  "key35": "4T8T23xAJjeCw4MTtF6RHojdnPDjvPBrdaFhaKwAevUDm2JWgkzkEVDnKJk6JHfUJ6H44ESA51Z9gzvrvKnh9iGu",
  "key36": "4Bo5D35JeyG6r3JZE4vx9ByPdwFzs7cDBq4275chGLw529t1rmvYJAATszYagBN98w1hHbfjM6Y3aD8PLaXFr5EV",
  "key37": "4HhGDXqD655JiDwLrwcy7sKwtpuT44d53U3iHtT7ygd6kno7X8DyiUzRJc4x2ARiHynW8DzEANXoisA8yVfBmXs6",
  "key38": "3VRnT5Va4fYCxzCfXGiUdwYzBV7AgwxXATtYrMwXsZgsAfwWGGXrKw6437vrBFVBcGu7L5JGEwLngkKP6T8EmC11",
  "key39": "3UstRzuBWaoQnRu8FXErBgVPAE3qhbrsZaJb811vgnMUkmPWqgBAQUaRqhMJEtkxsRp61ML8Ka9h6FGqEFGCJHnd",
  "key40": "3kEiheDRTjNaNap5wfscQPQ4vp2b2XSarp2jmXPdZvBjWpFwvAu1RyxbBcb9AG7K43Mo9gkK8oHRB8iJLttJGNdm"
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
