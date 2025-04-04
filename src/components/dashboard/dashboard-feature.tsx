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
    "62UhmVyAXwt5wCd1cHRRLEesJvpXTfbxCqHsrcRr9pnNCkccPWhfWA6pAAmuH1LpM63PWai1mRTB9cKpumzSm1ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUBeN63B2gqL3aRaxdEfWM9YMxhsHfoRNP5zEhAvyfwz27EZrQ4H3pwT8hXHSPhuizU2Q9y1FuJiEogEabj4qYm",
  "key1": "33P4NbxZHZu1qc91pjj8Ze966eKsLsCr5XHxHgyHrqgE5NheaUjcHkmL8SRpbgRe3rGCMK187eP9DcCyVDjj7Y2U",
  "key2": "5TgfCnarWQk6tr6GdjR2Vrs4nruAJQ1cDy2Yvzn14KQsJfw4FWqmiQ6k79x9wsztcN6SVH6vWp2NF55SgnUnrVFU",
  "key3": "29r4v5E3Z7tkzK6zJHSA8XaQoqEBkYPiedMV2sFyiX7La1h9UXKdKfDByQoZWyGaadyBCC9xkbb3pom5GpCDWinW",
  "key4": "pXc33xiKkkYX1JjdqoT8ohFjtZNCe3UoPMRgSvMHNDLKgM6aBz8BRwfeJ4uu42deJuagrRrFNXsYC8S2U4dZ93T",
  "key5": "2uisyvzy58151RegNjVm3ah5q4ZnEjJ1UkpJ7Uk8SKs8xhTUuckRndEGM8TVEhhE6MEKWCRNEWcoXYg1t4gPWoLv",
  "key6": "4eDm2e99GrjnQ8nXj2EL4FF2mbhdNXVna53WyEqwECQfGhtrymTxY7KDa9vQ69bUDzcuui51yFtYgbvFxJL1Yb52",
  "key7": "3tkTiN2jehv3WCngpwF2XXKUiFSfzNtcG4dScHdz3QwwgVWP6oSVGrWtY9Z68hFqa7P1tuHJP1PTMsGwnEVYmpv9",
  "key8": "XpsVeovx8NkZy9g3wQgMNukLYodbXh1KSGACRxuyFjVNmjVD552oJpz8Akq4KM76fdCL5by679au255fA5DsEWh",
  "key9": "5nbKyMD7D1MaWX2vK2F7oPwy4r1zNdSCHBwQgQQkEQ41ywwGgoko6kE2hjsaUfFRAh328T3xXjERhVQLF3injeP7",
  "key10": "4oVdDenRK4rEn6UZEFcC5fbbgdvvNzeqLKpnxDau7VpdbHdiEJXsrvRibhKqFsVgXCgkx9bPfQe2RJmJYY8gCd49",
  "key11": "2pXozCKrFbmSQgysCapYUavXy47SbEWdYbx275s6efSYweKgkKzckYjvKA2ieBN3ewMrok8xXrc3xhwmCSLc1FqX",
  "key12": "9V28mStSZ8eAYbdZy3VazVYPvLSX5AfvXGgoeXBnXuziGjX35zgUnwq6MLiPETR1itNbLNDUVPCQ48uxwCfNCtn",
  "key13": "2v7qrwSDvsxcvPYktf6KEoH8BoaBG2pn8QHgrRUa9mjSiMF1Q28ARWm59W65CW5HhQfYE66cU9mQDRdMZnpJ6Hwd",
  "key14": "54QPkNaEPWfb3WvzBNEhnzE6RJF52YxdKPM7yoSBJQNmM2DBiN3jzgixd55eQ4wYq5auLPp7JMCPQrWjumyvy1HA",
  "key15": "3abMHz42oeNjNZKaeGCiZpQz3FgjXBCZd4mibgiAM9Gy7UGQFDkwgFNRWzKAE9quJe1bjMHJwpgBGHEJ6dhiEeYD",
  "key16": "3rJHM9Fwe7CiEEtbewxpdu2mF95PuoUgfsfNT9pZc44cHg3Ti7Lq5ui5B9vMbna5EPizZRAdmJTESdEZMjDy34wv",
  "key17": "3s256hZvM5ZjvkfxLAnDQRjKSEmDuH3dZjaD7f9ZYy2B9pJzxvGcELr3MBoTzYDxt6yCxqJYJYbwtBVS3yWqpg3n",
  "key18": "4eMeP3XwsUrJGoUHZDUWRyiTcFx7s5z1jxburxUYR8QLhrp1cwDkVTnDsBquBUbREqymr5JQMe6D7i85qUEzcuYm",
  "key19": "3V3Le3GUVZBwcohTVmoGtZhLKPduytpKJ5wLugoPnjV2v5Z5a7r8MjtuFwYT4PQFGLzN56qa3SgZ84HFUGK9aFLc",
  "key20": "5V63SnJU277Zfe6cmnxfYpBJZziNnL5Jx1uZPyWzemsHBV7BiV8kqWnCNKWL7AAVHandU5ZsVBZwgGbkm8vfycmQ",
  "key21": "9T2Eh8sTGhb5WdwLkLHzRHTTyMP5LgytXQppt5JfYEGpyPqqHnTra9vf3TH21zzK9M7UAZKeJBXjeNU5WCqWXCG",
  "key22": "2rrYZpYZnYC9rwDfQVnKQZACaPQxiszFLjo8W7sS6Sir5m99uV2jDKQixuEww2Mpuos27JK2N7o9p3xWp3upZpLa",
  "key23": "3vaoqsmG5d76RfP8dLH46z5KJ3Er1hKPHLnP9xafJ7hGcojf3MYgEPf8ZbccaL7dYnmUSs8C6BStevFrLAuMFdGm",
  "key24": "2DBXB1P6AFTWPx3WLqknXGQ7h4oQcxfq5JgTqW9L1SgFXd4116v8RQfr17r59zJRET3XZuTpC8pjxfzB9jtPaR4A",
  "key25": "4fUcxeoMfKsc1Ynf9DJsRvMBTNst2yPzc9VRrrjgUHbnzNGNc2af77g7ko1qUm1zjkepfatWBR4FNyzDUnopJhuu",
  "key26": "BeDdNA9BBsSjY33ReCQw9gjdb2i3AcumwBqGSp1fA6FUprqX4c7YFQ5cuptSZ5TM1p27Q25BWc7GakDeU4ubGSh",
  "key27": "3H3D6B5YrsBfesQ4y2gexQVKPnWrerJaACwE8kfw7m61Gf7YEgU9wmKjEcKQRcp73v9mWu2T4v5q9U9WnR2AUQT7",
  "key28": "3yx42bPxknGRL3wzDMj1Bn8uzqWDau72v8XxMxPm1sUL8QQTKJFYM3MzmhiViYSzAuiJ7JinvAw1aDUWtq8CMkh6",
  "key29": "2jZ9Vb9shT4XUsRzXWacGKdqdfmLLShDLmV3XFtzJV8D9WAmCbFbk28Z4c5ixiNKVoJNGBNA2nH413ntaqs8FJqU",
  "key30": "58w7WUFgdtiwfGAobsBTJJxQ8fkK7AQnBYxEfRCsfACwka6XJEy194LKkw3uWEALXuoNhBN4G22pQebgycuHSpow",
  "key31": "5MQvDCT53uFmHnLbQNNiKTMsqiXyxJu5Jp3kvYBWD7sk7gUFRuaVXj7XuxZ5VbPr6FGBELokc8Jrcj3H7LtjsJgL",
  "key32": "2dipx9AMxtruYnzQuZAfE22Ur79upCbLguhTo3JnTkFBTCi1dGcDUDMxAuaq7tAkPfNP2MgcsbQiF8FsrRzanVzs",
  "key33": "3VajFnT3ioH6RTt87rj9LDvDFAAoQKB9QuGgRDtntdRfT4ZZWa1geAENqiFB1yuyb9YgDhBVFB1uJhiaw8BaFTPx",
  "key34": "3UAGqQHuRLo7CCue6faZqPTFH5aDLqz2jtqqVmZ9TjFwdmqjR5Y9Rhwm8HfUKaRBzFyr3zFXbVXtJqQgG2XWFog8",
  "key35": "2N8rov26RGnGE3RtYQzB982TDviKeLrs1PxSAg39M45r6ebp4XQ1spX3Xv3fav4kNkrkRQa2inDuDpBm3a5pBxvy",
  "key36": "2hWUw7CPeKMLpZAVWCoVsAujXiqog7bEzwWW3C4kEvdhQ5sjFvTzuZHGypmBqd6vaMvbDYB6XJFSZb8W9irHRT5g",
  "key37": "scy16SmfScvYq3TLcQftc55EKTpUJnGikpkQDA1GkSFYC5BMYJarQHPBeYKv3p6JbUBbfWarxRszworU2dv997u",
  "key38": "2E9xhBkMBsa5k4Dx6smhB7V2gPDJ2tqwC1FuFFFsmCghYxhfPfu9JWrxePhFhCDAbZvx7AFY9PLeENk5j14HYDXC",
  "key39": "3fXWkQuNbwjqtch9Lu4mdWwbA5Ho1SrWh15cGjorMkaBNB3AwV6M9YsCsgnszAq5b8qXtEBjnKFaaaruXLCQw7o5",
  "key40": "3smziJqCcpUTWy2mHQFenWK3MZHFWUWo9KHUFkviHvVJMhVHfQQ8qb7qeteikYNixpxWTutvCQjGPU1kHDV4kdR3",
  "key41": "5ZX1HfGMYmpxpjkFMgdFbN45rDmYCXrRtUjdKWpq8iTdc5Dv2aoq32Es6YTdep9tt8RhLd5BD96uhZQ1ssJezv5t",
  "key42": "3NWRKMfqrespNRQkE1SkbpfXZrYkiEKjQWXwwKBZ1ca9nQi5bPzErP7b1DmnBWCkWHDem9VYY1ZmXAvunBrSnxV1",
  "key43": "56dxQ6YZYA55uEecdhkBZMeDkiEYkkz8ZwbXChhEX3kQ3pFVpb4f2LFBqLzaaYrY4WPtwNbewMRKucgaZBcY1CLb",
  "key44": "TdXwuj32Yg55LaEAGifWFeyyLAvQgyi5s1EkoR5hN8LSvQsnghDAsKGJi4vSnmgucCwDqw2Tr5vCRMWkJCSh7yt"
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
