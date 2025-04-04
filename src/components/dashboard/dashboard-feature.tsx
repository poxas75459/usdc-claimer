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
    "tgHhMVwCapNtitaHLnDwaTf5jEc5Q4s9Ld8YCiH8CtmTq39BiribBP9NULzEvcAhgECBtXXtVZ5QpkaH5NjVCjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iwLuqHAkC25FTqVRszzVPr8qmqBERG5yR3gsffUJQxiuPtmd7DiQnKuY26DVrvkcs3DjBmDFr1rqutu4TcdDhuv",
  "key1": "2XetdYdQqQurQdZ6TgvwZeVupBzU2KT7Y9nCz4Lw3qNZ3J2yyPGfNBMYSs8ZNBxXPwXPYjkauJZpyyBK8nXG9vzT",
  "key2": "JBwaZR8Xd3JHPpocYpnWtbubaaeGs7VBGTfWtb67WA7g575DWKkJnQw3bxE7R6A3TKVGss5JBfo3LH2t2C4ZwUc",
  "key3": "ECcLTpR2fFBUK8WpQ5fRD1kuEZ1F8wg9rTLZZG5eyQRQnsgZoE6WNenNbqbtRreZWePTSv5C6q3oedas66AjNDY",
  "key4": "5L3RccQ2Aoa4PXzDENwfrg2sPaZ22cuitNK8PH39CR8p14eGdF8eojGxjuqFdHaXYrxuLTssmEV8fFQyhFo9tXog",
  "key5": "4d3GMTTeGjCbishEF5k8ucKN4Hk1KFChrieGL3EfhzY9XDYesuGxzWYArfWzRL4XP7QDF3EkHWY7RQiF6HdTEKxK",
  "key6": "24YV3zz1pqoLoNjAoCjCoFBVzcqDkhfxmHuHeYEj1rBtyFindeZXvUHSZZoUttF3k3SowTZJLcD2kt6c6SYDdJyh",
  "key7": "5nif7RucH94FhPW2jAjXSKJQ7EZjviFp6TiJBUo6da9czUeZ9f8g6ZoawWymEBSfaFPAJ4RYe44zMZKMgxojdQum",
  "key8": "2SxunMD629rMdFdGY1BzF5WQfrvWCoL5FyJUsNx6EPKTRtiFvDEoY1dDCCgsh6UQn8CRdviL6HKYH7ytMaRcjByW",
  "key9": "2xBU9oNbQdVXeteeT8Qrn6pKUNzYyg6BiMJSMkadb8m3UJCUeHrCVXbLHAxoSeCgdVZyyoACbraZLBvHdbTzwsHi",
  "key10": "5xL3Dip2xVWP1uP2rqfnjkfrZhJWuNNxHejfip88kCmBkBPAuyCymj9wXhsCQTZYs9gtEXWzYpwdtXfVHvUgoTHm",
  "key11": "4hmNkarMM1QdSYLaABAQZcoktB58b1SGZ2G7kGM1zHJ4SzNoJ8Qv8iDTKvz7c8MnSTyjd9EdB3EsaxZ5EtqRvUkG",
  "key12": "4eKVxjVgN9bTUuEvtqymsTgRVxgWk8DBkUAzejZA2WxpDCJq4SUu9JMJNBeJUr8S3RxZrjWpG92437nkdsCGt6Bt",
  "key13": "3EFAwqhM9kqvWeMxLHUdj9JDgShFiPpaZD52HMhqqoxLPAtcYXeZiAQf6VSxGzumshaMoptXiKiXNp4NDY6WN81E",
  "key14": "3V4AC7Fk8oAj9jm35zgaZSSRjbLexkp3eJ7DnoogQBtD6XXcQwcmGsCABahkHevUMbJBGVVMyXsWnT12xekfR1dq",
  "key15": "3zoxh8cnSo28ezbcPpebEADaVdvgc8Ek9xHhZCSZDLm9Hfvkwz6bEDjC5iaze3oNNz9U2WDb5UQggzqiKLo8rkSq",
  "key16": "3oLfTAsbsCbVeEuDa5UwgnsBdfyYvLvMAFbSSNqpFpb7tYWtCGnUTXvdoc2kyGNGRAJR4V8ZScyqxrfJ2Sk1jxv8",
  "key17": "5LpDPF1KAUd7fSUdKpYQ5rGj1UwT7gZjKeQsq5UwhxpR1fKG61xWgAD9RSRPEj6qqnLQrRTcB56STayc17pzo6b3",
  "key18": "NDhT2u34JDUBsLvTkyixryxMjQeBEoR6Ptnqg6Cpkax7asGQnJgw9KD3jEFM61LYA8qkxrC1ZtctiENKtmAoSAH",
  "key19": "4ufQ8Ye8VVMVwtqvoPSj4JJWbENJYGYHuKzE7LD7fBWgYy3SifG5JYs3kNTkTDPmLNAagxX7Ehvp3e2BShSb7tdp",
  "key20": "54qqqkSbx7JzNEfK5V1GybxabDe3Qj55vss8CnP8YmuuZYR5NqKfbmbY1p24GsQtfRVoyPwDkH6zKNtZRv7nmgaF",
  "key21": "53DPddPWecf4A1cy8hBVM5kNfp3sSHkBJNpBxiyn4ENzWLvQrTRYTRjQGs7nL3FHdzoPdqnxrzGuGjsTovNVwg8C",
  "key22": "56kJ2oTdbSbZsgSfQyFNY1YAie28CeTVDpn4Zu1BiGCVTkQsgoMCPC6aPCwNHFZnAuiijKXJBQU3mS1ti8bLrb6x",
  "key23": "2XWc8zmLo6WF335KbBaW69qhHfVVRmw3wUWRGkPkJ6CnHBdZDFEBniofjfRGrecDC7PSABcV7L8JTaMBQZ1nh8Vv",
  "key24": "2im5rSZqSy2BPAkm1GtaCnJEQZ4Z9i5Sif3n2TUntfrEoMtfz8vFaqRcwQcSRmJCzTnMVGMkTaNqvQQZX6K2dN28",
  "key25": "483uk9JBoDhQHCAMHWFAte2q4ijtNHyscntFnSp8oQmfeoHXWghVfpHqcUriJqWhs4urpqnmfK8vTUgsgNWF92UQ",
  "key26": "4R2HLbV1bnVnfNLzjNuaj46E4hvF4jUKWA2ZyRvUqB12c52AuRmGk2SiG4DdiVptP6f7w6WxgZ3a3dC78pVToVgX",
  "key27": "oG35uULrAxw4aWChGVf8cJxADz1FoWHTjkDdxrjh4Pp1uyoXoCWWc7Ttvw8JqiBCDaXDxxaFUQ3Dq1MZPPFESeo",
  "key28": "2NrQGB93NW1CkkdQHVNbCLKNJshYvT4RELqWooqf8xHy6RVCgWGEWNb9g5VMJjErxcgwUZej3U4YWCkQ3bGiq4or",
  "key29": "4s2xK8CemmocNAYANXyFYVragcPzFKDTGPb3LFUR32dyEAKTJCxShHFmbo4qw6AMbmLTFtMBmbsFZnX6wF16pj62",
  "key30": "5MeZXsuWizX89B8jwHo5Xx1WKpqw9HC5S8CXDqGzzVDfGtH6K4gezZt3HLM9FefnxMmrC876dCsEgut97hgGLXJE",
  "key31": "GVpAeNMqZM6sHrCvvj8faZzxchG88rAznC82BDr1FR2SMn2GB41XjBVmuq8T1Pwc1pZ8vm2BTm6bVFAMR1YGeCu",
  "key32": "5cDGdZ2uv9utuVenNdUUnRoFwktF3n2Dyk58Zh9LGENvUobSkyDuYQtqzDe4XN3v4KWC5uY7Loug4UCyKARy4Qju",
  "key33": "3L84bAEhtyJURcYQg7AYgyHxr9MecVGLqpNHobfQthXbo2pEgAA696pWZa9XmXQrjLh5CDPRwxAepwDfXKzi41dX",
  "key34": "5od4YMVJ3inkKwa6Acy8fBHqVXWJLQEdxJRFYpqkX5nHeZDbkzpia8z7SFpTWc6uBV7t4bCbcj3Sd2vQ3XbuE2Dm",
  "key35": "3goiFyWp6fqMsKgzWG7JEbSaB3U5DJPPe25nSgivffK3LJsBxPbw3KM1WRxmpPk1y4RjtEb6pJFNSrJkGXY55joW",
  "key36": "w6vYdExhsZat949HFsDTkP5FpKRGB6X2k9qUGHZMQfAJxPHtrpMaBZ2Mv9y2xzhT93PCUCihj4uHLT4MiPEE8hv"
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
