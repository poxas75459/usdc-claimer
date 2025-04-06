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
    "WoYe66FET9twRbeo3VcRtwbw4EvLBtYmcCwZ2oPLZ1kDu4rtryS3wQx3kDXakAM5WJ7bYozLBL9HR6EN1Qgj1ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9KYnpWjTXEG1qCtw1MSMM3KhocUghQZ7DEWmm7RkE2UbZgafSkjHVZYf68pgAzK65G2DYrvgo4CvvnjdJPScdr",
  "key1": "31MKY2y5QDbJRsNw3qo5c9c5J5aZVRHLWjQxQ7GKuZ2z6p63xhHG4xuza2LKQ5yK9Lh81cjJorEjVzbFE8KPLvVb",
  "key2": "62gvzNkByiNLFjLpjouRDSnvoJfBHKBviDhmW4RPjG3Pr1bmgDH4ezx6zsgZRGKMEr9HvYxwpR5H275XLAYSKYvP",
  "key3": "2EdkXViMYsGpZHYq118rqsFt3YutwG6pYkoHcSnC9gfhnwSmP1oVQQnCV1r4ruKxAwiDrRZf5oFCMW4H93Vhx32h",
  "key4": "Z7pQG5dKvNchLbU8US6hoTG86U4GtkdkCqQo7fodL1NkHvQG4DcQNfU5KN1wvw3WDYNZURCdBcj8LDdWFMqqMRY",
  "key5": "5Z6M7wptzQ4d8Xx5grK8CPXS11WLafhSytu8STkdcD1tdPvKjSTLCRPFq4pkYAFGnrHdNNrXUztRTV1fSDmezUcz",
  "key6": "5D6e4HFaJM76rEoAimfx8GoR6BkP2YEuJra8mmDajEMurBc7RjBoKEXyq5e4jPGgFF8YjY44axTJEa9X2aepUKxJ",
  "key7": "jDXuGEsFswTeb7HUhkYznYGGaFDarou4KCd8Ph8SLDTA7jXwibSbtCDY3xK2YfMPR91bGq4z97X1b6LTV1gUrTk",
  "key8": "eTvYtnyrkLKit5R4rvftEHQZQr53jZZs1MT4HeX6AbgN3uvTA88e6yWzqb7gNLzKmyaCBJzUAcxUpqgiu4rCvf8",
  "key9": "5fxtzCPfaduCtu5JMxh2JJ9eWR8No1uF8iVcRrPQZQCJtc4KNdmgLMrvxXxqYjv2qDcVN1gHW3fTWyHEN8wfzuDv",
  "key10": "5u9T2zmQv5NWnwDUMUuVuFmDufT5d4dWvAruQm5mV87Xz4pwEc1mnEBXTvNxXKGH7ab69rTdWi271DkkWFguwnvS",
  "key11": "4sMB9gERyvCnGJJF6hCXwj1sHQPakXERWcVgWWEigYJ3U9uAdr675BZNqzxgQKBY85yfyG1kbGcEvxXy9rDMfE71",
  "key12": "RF47DFEfQaVucdufZa31hNAJW233DVhPChocRCi69ebBpn5sj7r77gArm7G16MwXy4rzvaK8K6MXg3TGNSSGvvg",
  "key13": "5s4NuSvaAP2z25WZJZmUjuhw1yCWKGZRWFpoVpzjLYVgM5E1ew2a793hZkJ7BuNBx6d6xSmrShQcdt28mWDU3pED",
  "key14": "4zw4E8EVk2VmzFDrdSRcGiNUoJYtQfi2Q4kGWEUvARHvcR7c5sTWX519TucoBcJExKPEi1AsHkVZTfDJvBhhd7vt",
  "key15": "UEWbFaAFHk6z461jBbxvN6K49ZuCMCKjarjZ5LHHv4YmzWVyHgH2XmoYyx5yZzg2jzjJwmay8rFNrD73eqeWcfZ",
  "key16": "RztX3Sk6YkuAu5B1rmhBkjzVVSZgVvL82Pbt7RN7CKeLMTjs5HKYxqmoBKWK6pqcrQ8i5xyFfPGFZg35ophTyDj",
  "key17": "41ih45FrQEovMZKx658LuNS3seLCAkc3DnjkSGDAuYh8CMXVTeUyTq8am3aFWftT9udWSHA3YTxCgmHgXnLXWg18",
  "key18": "5m5pTdJu5jsZTiZsCz4aGUMBXHQiraUwaJd8e2vocuY2WRiN4mj9oTxM155dH3BDAqtQcskDHkMJJRPJRuziDg7g",
  "key19": "4X5VJrKfm6fDqRWaWrmZ6o6fz6w5XfYoCr1HV2WTQo6PbATtzPaVcaHShieT1QrZFnJzWE7ycVzovagZdVDbDcdS",
  "key20": "5gZ8bQfmzEbdpwkUYZCnZwxpm3qR4TwL4wjq5dgfqeEfeCzHXEF1b7Dx6G8q65ccBZCfWgozhvyqn5vApUZVYqK7",
  "key21": "5K9EntE9nySbmtqdh5qgb3dqULrdDJqrrdzHaqv8XH3prJeQ5yC2xvMu76ntHA5gTfuRmStapvz7qg5mUf4TQWxQ",
  "key22": "26PtCMeMov1Y68ZjYZX6EeTmJutRQrvPmYL9Fwqd8dJfJTzy1F9EjzmAd2wMhoBPN8kkpbt9mw2GxUokLE52b1xt",
  "key23": "2MC8iT8DBT5SUtkoXRQoXVy4h3zsmzqoNfjxciEqGseLd69KCLihNNZi4oSrgyNJu6ZUXNoqBsPjGoHVynQui35J",
  "key24": "2j25vg5eVLHzqwditdArdBrUGnKdNsdctf6mPFEF2ew2nnjzpeyExCQUeP4ZkoJ2FYQrfU3GTA84eemKksizdnQf",
  "key25": "3jxcUkJ85HniXGQqfxZEf2gurcRp85VchEJx41qGQuwTvye3Q4uDJWeScChkhxkCpNoqjEuMu9sZJMXGtmn5vMKk",
  "key26": "Yx1xDrLN4jXpN4EeANvvdJa3sCgn3KdkuEFQYxip6VZJyvEGvDNgaNCRguxfyRkRSWQ4gvD4hyoZpQs72qTaTc9",
  "key27": "5JhMiYbJ9QCfHkd2EG5AwiPQfTSKDuJ4qvHVVGpwFjGafFAThKHzM9qnxdbNA2xVbKQa75Ci764iZbzFDcdfq1c1",
  "key28": "5iKddv7uBXbAvDiGLPtJDzhVC2WHNi3gDoev2ZMZ91UXEzM9V5yRHibDjVLhbTEHyHxPyyC79t7M1RzhXXyLMgHV",
  "key29": "67dAhNzq7qB1nqvGEzVvAs6di5tAL4CLdsnKGcRZMaBmyzPe6LjJ27KKEP89qMq1iKP75m9N6EXihHKqUrEKwwWR",
  "key30": "5SAFx3gGR2Czwii5HSF2eYgGd7qjsgbbLnV3pdt8NNG8vdusEeL1tJHS4jr9CiaGuSoi3zzYmbU3Jb5yDDYqUGLA",
  "key31": "5jzMvkZPQ3X3ky8R57UzqAnXogx1dowFMDCJ9f7HzZ1TxshLPAEgo2zDMjXm2MZCrrPZXxSx77W5aoNNhRcisLjY",
  "key32": "5eJ1A9aTzLx2ex4RUYkroUULoAVvwNUSAYuF7FzkCWsq41KN9xNVKE9D8YxaBgKQVGnAfN3xMYDtcn2LHtgGkPh1",
  "key33": "5CTMtt3D7Qziqn6pDuHqYgh5R8MUzVyQiQwXcV8inxy4myMJ7cBLWUsJfjuMcCcdH1JmksQmAjX5Pps77NqXdH7w",
  "key34": "2Hiy9DXKkBgMunDHcV1hwYnZ4pvxX3vNnufMtCrygD4VSpHHFNZBLtZ9ayeRRDcNaJCsPKPwYaiomNRvy3ddD2b3",
  "key35": "NwJEUGoCs4mJFPqSkBu81UtXCVXhyn9VqHhVMfH9SPTZb85aRuEwrs4fT9VoSDN6ngX7X28vAhHpzkoKmG9MMav",
  "key36": "4fMQa3VUBrJyCEVyLHAeqMDNhydRoB3XvLwgLS62wqGxNX1EPghQ6gxeoN2NKDczMVS9APMNSpwcQEFHcG1oz6o3",
  "key37": "3FGEZbfPDqtopfoEMim78cLKBttcs6Lmm6y4EjhwHHcyiJ8GcUrqDS3E8Z838nnGAu9L82q9NVCaJ5SBvTuyeSSX",
  "key38": "5s6HUp5sb9G1PwrVeEzm9us3HbmVtPYpwnBekTKfHFu5aSWEfAzoKkDgHtkBfD7mfC4ovXUW7BFuir3ZBNX7tyG6",
  "key39": "F6WP31DyGhf3BX2SwXR39zYJ6ypSLht6mMFRJbKpbyb5cWzjKeCsAdTbFdsCfnYjm3SmWJJh1eFhx44NJWpfBe8",
  "key40": "5KHWUuwSJ4Ztn2u2teLGz3KCKDMpHnbgrRUkFy62AZihLTvyTSwkftQXdyu7Z18qaEjqfJZ6K2a4NfUpz6EsLrM6",
  "key41": "3mhZh17CrcGxLAajnfRKhTZDN5KYtopggaPrWNWa8XP7X2eb5GLfcYwDws1YvxxAcJwHGkYNcaK4Dv7tRu53rm7Z",
  "key42": "4XhWjUHWHCvBVkxqfcjfECSqyVQgSG1a8XEmCSrWUb7uTH1HxsSbTy6vhX6bp4NLmAEKpWyUibYYM4p4AvX8hzBZ",
  "key43": "4yzQYw9FCay3myCf8LP4pbyoutxmtA4otFac1KrJDvdcxUwWr7dm88VNKy6acmyXzgNAmCUoTc1Zj76skqEazyjY",
  "key44": "4mEH1cffJUDxQH1UXumoGg8rtUtMAHQp7kNBTm42pSsdhmt6dPyjbFkf138iPMdD67L4Bh9Cb7bBoYMzVL8hXMKb",
  "key45": "9LfyEhxgzTC3VmjQiBdeb5oPApGBukJU298bU6eRaQR4BpcLZ38AvEgG9rGBfjRLf83GPPRtQVRuXQ9WxKPb2f4"
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
