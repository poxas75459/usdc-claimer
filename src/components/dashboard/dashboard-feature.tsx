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
    "Rjg59tbtNq88S7puta4jyPkFRgeCgCvh4Q4wXQQRM1o49UuHrdnJ1PPs3eigrXs5g19RZdsQ3Lt4AnEDn771F1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNPWnvZEMnHYMpUUjMzu1K5AGkYockkZoZutMnrVjCqnfpd7bnXwCkWq5DdCN4W531WdZCisPeZymdMq92CaqtY",
  "key1": "8BVKTaBkGsdsFrhjV6g5dBcREUBikhouygMhrbHtA5uehzFZuZz62J1J2U1zF9KApQVnXrgN5vwjPa4dXgG2iza",
  "key2": "4KJXqCSeatHp1Rjg7rSFqriqs4nZASWY4hc9PGPCr5TKkc4ys8hLtp5AFkTPZUTXyJTurBvKvWZxs5WknqXhiGkN",
  "key3": "36qn62DR9DGca4CA4V5eggpjqGaZmo5pDyKgXbKB98LmZ7Pq2MGdwbXeSVdFUTZRJ3xpwT973px5uGAU67qpW5FC",
  "key4": "4baJjV5z7cc6nppuGQJpnNQN4uNTf9qrRe7aNBZVsqd72hMv6Q1FyzwTzqNWNTJRhb5STrQKoAMAkujACD2EahoT",
  "key5": "3kB4PWpkuQP6eWK5ixtPCDeoxGTw9RrmUZurgAqa8xofsNUZzh3UiPKvVe5Y7Tip1puF8NWiiPdiZrzFhX4DFhea",
  "key6": "iBF4AfMVuETmuRLBunALeBYByZvp3fTJGFkqaP2tVcZPcefx74HMuy5qYL6CNhm5QFSK817J8Lk4HwuNJCSpgcf",
  "key7": "56M2HZzJJCipAYsscwy1Ft6RCKq5up8fAJXZtYxDGwmkQrbdCkECLUD8Pz1cBJQk6bHDu8n24MWVg145h3Enyh4G",
  "key8": "3DeB34uJZJD7CxCo3SB9bFBCDsEiDjtRjMwwKoZjyNdjtGx2D5srqvMXkzLPP16ZJJqR8DE3tLDz5LCwrVt5FAd5",
  "key9": "44rxrXLbxpAtRPDSFw6VSjckR7SmXbvbGkGHayqv3XPrfMfC2T6CbZuT2Mcq3P5nz3oeFKfnfkbes5VDpow5zRae",
  "key10": "2e3xP6NyNWM3jau3EZaBsoyQgkvHjvEmYh7e9HuNLmCGJRKhwwS1K2HYQorB66PjhFGfGF4vzGEwwmQ82nUVBEbZ",
  "key11": "RaA37RpHV2yeBj9SBTpBFd5g1CVx3XgV6asiw1o9MfD8iwmU4vERuV1JpQuj5AWYmBxK3FTZ9Hn34dpXJU3LCuT",
  "key12": "5SzguKh9WFEpWF9LFX19ZoujQ3cZFQhy7sGbCEgnpig2ff5xZFswcWUV347uF6X9VSYtTr49TLVFcsvbBU4n2uEs",
  "key13": "5Jb9vKQ8zBGKmSSaWwiErBpX14uqUMk3yBd5o9JZRbKM2YnpqwR6YaDpx85oRWbFjsUzEtXiMyEsZoVfu6FLpgC3",
  "key14": "pDWidCcrJNnZk3GBDmaLkot117R27PknePDueAUt65f2hmjNmgHFkBCNiXcDXJrjbguK4fXyzuHBQxaGBPkiNEM",
  "key15": "5RtEp8y7vbBtTVEFKjNuaYPwmcjwALuwtwfnjP8ViZzqTy3SqrRZDKAedzdfDytsdnCXxQzyKVEyGCjgkpdVMEJM",
  "key16": "5Akt8gFofY8sGRdhohUgpRQBKsxQpanBaCx9SZYwhBaAzaYZNCQvuSggxextuPinTsMBd62uU2ga1ZGa8pDqcJhX",
  "key17": "2HWm1CfoS1Rqmm9PnY8jVdotNXmcj8KW8n23RH824eNyfWT8EfS2Jqsmwxn6rChhyqWtAA1P1aLcT5a8nFjnyTfD",
  "key18": "5iZJHUrRik62KrDScVwwpRT8HFHWDgAroRUiaZyZ5Txf8mBLhNtiaZrwAotjVcPGHTjsXsrYSSNkJtfUTwVAtH6Z",
  "key19": "3g6sGMHrPwsW44zi6ba3R8R3sqFBAcoM7prMd9FnA95AQhg8sRCHK2Xvr7ZzfNwzgrGeigDZ6jTPk2srCodVJSLb",
  "key20": "vGc6TP7GwndGnADRnrrmfoNu36NvW71pPBGRhNH2Ctnfz7dpopcAEoSaHoZ3xrbrcVzzgw5b8VZxoXP2VgoKh3T",
  "key21": "3ycbNpGcMHbfVnRx4Vk6xEq2tECVQzKqQzVG6xDjrbvXt5eoYTUmJeTKZ5XWsFfu1aTqWhmC3jiXiALV5Q84mPFK",
  "key22": "4pja7YEfaM8ygjf9xKwhP6cf5TMiK2Btvve1LStSvgfzKUQFeAW79zx7uDJdihfaLByDLJ5qePQR6znztf7JMpz8",
  "key23": "4rBL6ToLJZNyxKRzVjtzMZSqwW6vJvv18a1os1d2hCzKUuv1QBgnUDY8CJPFrpATFvYLzn169pXY46m2H9NU2pZh",
  "key24": "4ff42U9HVqi7TBMSshBDFVYCqyTQpn7bz1VbzJmyZt2h7J64efVRiKTaEnMXAvZ2vp6LJT6hpHeaNGhgmswWJuKZ",
  "key25": "4gLbAaSNb1bJDy6eC4UembrKF1YEgAb7xMk7AA78hWVDyhLGK8rn2PEr812KXUs2y7nhBkE4SN9z3o6smW7D22T8",
  "key26": "2VeypenPrggD1evr4x4u1c4WGmeSn9ngt5wemQvETuLR4ZUn3By9rTjotwkdFNC9JSm5ubwxXqB4VSx6Dwd6SjaU",
  "key27": "2WWb58mHVxm3MA37h4eLuC4tpYxSm1qgDf4qhazhmB2kuJh71Ve4BWapn1SDwxJwRkuU5cumuyCbCABYPMjuyTFt",
  "key28": "46rDG69R2DMemKwmeahxRofuEXU9b4prN115PETEa3o6XDjhs5DEZp3yo3MPFLaHwVK72DTYyKq9ei4bNM67eYvi",
  "key29": "uWTrae2krSUMDB8SDgpby77SgFwxq1vottnB2Q579nBH7uaJ9Ff5cif2X5EZGjyYcgMofumkfyP3Ltw8Wd3Ehim",
  "key30": "4QT3tUmhfnbKctzkT6QZxZAx1z4x8U9cyXCgdDsKvXuR573b4suw3VAgRKy4cFwpK4cCr8xzLPbwWgmVSApUfAz2",
  "key31": "5RyqDg1ZW3qnNChGGJMxWZG6P9Q97pxewvrjAdagD2XSQFjjScNzuV76L21mnvoSxJHYa4kuvTRY7S3xBEWFitiN",
  "key32": "2vNEzAErhZMsajpX5zCSUKk6NDBEGSAikQEZxgKtCw5N3RaraWhsugg7srJgBR8BeayrawUdostA3tc4Wp8tqn92",
  "key33": "5Gg5BPmq6846L5TtxWpBz4LeKQyif95nEFBmh6q2nyg6RMiGss1fkTqXiF6NhzEG3k2QvUfn8LK21rVseYC5AQFw",
  "key34": "5a36GU2q7igjVdmELon5gyJyvB65gQV8G6Z8ww4HwmztKGrYWnfxrb9Fqw6h8xT8dPaaSQKaBA4ihPHLYH1zkmXr",
  "key35": "2y9JFo7N85ew6fxPMwrTmSHSAGwJ2AEFVutnVPCN8kUCZtK2ncmvELSuXLu9LfHSLPnsnF6dxc5qq6QyPRwx1aN2",
  "key36": "2YJ5qHhbmHqtDpecmABvqz1Zxfrib8ZNCMhy1JaogmNkgor3T3ZBJv9JfjuEgCC8c1FYqd3X4nuhw2UySe4ZH9uB",
  "key37": "392HkvfsvG2bUtthadZhksdPZgjmwkasd1V1TDZSHtPqoTmSYWtAwDWUtvreYMTEsU7LpWN3VqLhjR4Es1DEbSi2",
  "key38": "3nB4uwXS1AJE28V2MpJVuLsVjk7dBinbZ9T9qDPAteHt56DY5yqdZQjNcH5BmGbtdNY7NLRp5mC9Z2pKtno47AKg",
  "key39": "2VvPYrZYjj4NF8RfPU3oEvfwx7FWJrZmUH1g6p9WiCjcVbHYn3go7epCzj8gTv4YXp6UVQzg1vjsPiUUgPqmtKac",
  "key40": "hCQAjNEy8gwWtcwuihvQNZ5R6b28A2jRkQzq2Xz8hr2jDCHMPAjrSgf6Z2KRqx8hPNTMf9F9qe3tbfqqmb36CE3",
  "key41": "UbhN1VLfM83cnkKAcG5zreQ5dfHTxjkh5aVfse18UY1yDrtp5cWAjiLux7Nxs3sLKmGTksq5WS8DxjpdgXS3v28",
  "key42": "54zZNEVpB4L4Qa88aQnDdea1fWKHNg2d6gZWz7EoUzT5fNQo8PQb9vFpYxPbXivw6wGkWxmfmNCutfBGB1K9o7AA",
  "key43": "27KCfgS9tjQTtNX94stM48wiUhgpK3bwcrZFaiTz5CZqoNcp6h3ESUWDe7egcL8SMsw1vf99WB2cpfr6sW3BcL14",
  "key44": "24EPANZ5x4SzUEX6sVhUWMBzGKQz7uCaHaWHpg1jCXwKSanJEjk6c2hmxYFBX1zGgbbrYkZTYrc22h46C7a8MiA3",
  "key45": "3zt4V4ApNLSTQt68j2YvGd4LHfg1TW9JTNbdn7Fu27jgUaDhgnpaDdw1uWUbcszMjZmh9SCBs43MB6bZ2FuD8mQD",
  "key46": "47uYjkix8viC1xX8hXtt7ZP919nyXTkKAaftCm6hCxswNrLaQ4jnjivfVe2wXL9Tps2Lm6WYkF3Tf8tYo8feHkhW",
  "key47": "4PVzzuH7CrgAdLTmMYukm24vEcVMneqr9mYhSJuqMJzthtgwssoURPbfXbYVMTJNGnDgBEEc3KNJCvdUnv92pyB2"
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
