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
    "4dnDWiYFmkwqD3LCYcC4zpqHNWG2b23J1KDBrFGa62GUrFTUadxC4xyPUqWUDBjGASbcZVCuzoYfRV7xFaC7guWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZxGbifqD34mTFdKsuZuWN66th29mC6X9za817poFcAUcnUVcPYeytcSGPpAwoxDGAkG6hrgXVddkP452JKN86M",
  "key1": "3ei3q3AhLyLtfdn3drmRJTY3axMHBDBQgfEj8PxkhpLa1YSJHPJ1WKuvh5quUE5GKNugmZRCw5JziURsESwsMkgu",
  "key2": "VGt5XQXZGeK9A4P5rLFcacBEoZF64R4mKwMY8Y5jAyxNqWXWcidnLHF2eH7QnZJ6W3kVSmSariy5TZB1jdNJbVH",
  "key3": "2tSSGi787jntboqSSoSGqv4FJmRLWzXseYsDDmkq5Dx1fXAZ3sRNQToAoGssq1R1i4wcEzBrGBCz9tABdv8P9aQm",
  "key4": "3BTE9aXjZTMJQqsFNVKTH3ykm871E167ijGMuiAhW5jDcZbgojSxWQjXJkK1437KMWirvnjXzAeQZUJkcX2GeDRr",
  "key5": "4As8zERLD674mnzu74MKQ978Gqvb8T3v4rh8dVPwwmiTA3nwsYMcLBhz1vPqZrhY2NCCY9ePV5GMhCYpewRgbUT3",
  "key6": "2iifabZCf6g2MbopzwGvD5RYFPUGEE3KuTv6xjUJ3ZHLjhGKCeiaa2EAWBTVuS6ReN6f1ceirREQ7mW7tbr7iYtW",
  "key7": "3Cp6Pg3wPJVTnFPVq3AfLKLbX6Xb7gigu6SXvrHUgtTmhzn5eBRgM7q2gV9ctDzzAvBvsgJWbUV5WjuL1oucgdgV",
  "key8": "2KaavNWJPuUNTQMAVyhzkZH4fE6PVV6vN1vM6RimZv5LZ6eH5THA2NGLPrWaBnQ9qgfRdpYCEnJij7C5YnHiK26p",
  "key9": "5Dw9F2BsuViVdGzGTzMFw6bJJLtmD7rAq5sp218UCFKteFwDigNZKvaCFuxYsK49Fdk8Mmb2Cq7haQXU7UfkpArD",
  "key10": "22o4AUgzV5r1ai6MBCMEiepnX9kabKZtk8H4QUPKFxBUChwRYMuJrWfHi4SWgNLo9MhXv3hQHDxGy6zkRGcdHHMS",
  "key11": "52rAwJC4KHwtpGubENMfsqNSMi8aVXrPg6VJAPi7RFZR7NMG6uK6thAbAqvs2YJu7mmUbzQ7DY1damCJMG1JLxge",
  "key12": "4h3yGYPuwCQihS23VE1z9DJfc6aCCcuRBskY9dyXMDjgHR6LMpkWDph8qm5doqxASkyQ8QVDHR6MXj4aN7XZufLo",
  "key13": "4gQomJjWEnsfnXtVMdpwdyf4RSMAymsmRkW6DHtE3DYk7nFpUEv253yszpJCWHa2eHgRD1pQYYeWG7cV5Xo8FBZi",
  "key14": "ZNFrZpa7ByM5163Qzmhcr8gMGT8phZHA2hU8eaSxpwTfEABS8Hcda6WPvVa813dKzeASkh3qUmYJSrFQtitcVNg",
  "key15": "4tLf2UpAvaaDztmEfhxALyx2rSFggwQDfaybc9VZP6pzWXwdZC8ExcJZCWgXrakjvDiCB15YPe8sxpWwKorpJ22C",
  "key16": "5MJMgLtxvHhKbHWbWtBRdUjy4PhdDXryawN24jrwYRsJU9i46QnscAB9enL2NKjG4g1cD6QuR6yJiVmvusEwzjmp",
  "key17": "54V7eZuyYgiMDLzcao9XJjwjiCRM5QeNGWsgCgTGAVurvJ57GLJMWnKKZ5oT2rCWaQZFyqTZzpKGuGh4E6r4jxpD",
  "key18": "3qecm4F8AankXMfTdqCu5NYJ9Nj1rzoH6joehdBi4FTMBof7k1KMwxyFk8ZN1U4TJr1zDEPNjqKhF8iYF1sdrC67",
  "key19": "4GWBMgbvwtt6Kkiz61WqXT9mc8VMFSF57TaE75Num1FSqAVpJLRP81wxyWYqLXuW9aaYWYpfTDi3f5D2KbjzWjqq",
  "key20": "LD8kkTxrd88hkXuEzTLY2yWdqWSAHUXY9XhekAgKCRFzCqwfsVGuZLmbUddC3xc57A1QRSs2yMTdRoqK3emo5Bt",
  "key21": "2oRJjonybnJAoXDvhosZkLy6RNWpqMRWaXuGkX8wn1jVdMePd8EQQoFWfr8EF4maktE4b4RFUddCdea6YC1gt8N3",
  "key22": "H6Sm7Yk2wsHEJqx7B1u5yop3qTLj9LxnsNDoj1TtLwRxTULhcLGRhc8RLEhsNkQGYpUXvBCgjuD78y2cQgxMsgj",
  "key23": "58Mhw7GnHAJQr5C1qGRXGF5Pbq1Vf99byZtCM52HbdveGQpTdxWh6qgy5nbxu28fvFRCQ8uZA8mA5QrbmUbpDzF4",
  "key24": "3b2DotTEq7Q2XCeSK94VLCi983HpMyFynURRBNBgE8tPgK177drYEHe2tzPCXMkoEmABpRU9BNmjFmpthig4ASnP",
  "key25": "4hmPThRYudgqdCHvCwqWRuaTLo1PWazNz8d9PiX2oX8yB1fDixVWHn6bNxcNjTKMLbEHNqiLTUM9DBHa2WRM95Lv",
  "key26": "4hv83wpu3kKmk58gqdQSAaZDr8a6ef9mcAXZ7cDTxsargsZHj3UVTYFTdVzUwEac6BNUnEzfK8ufYBS1vDWbE3wm",
  "key27": "3BfcjccdDoMjyBoLQv35BeLbG9hu1vF3SaJUjyWFShc8kgLyjFjQDg3KHFDCzpP2jxA21wdy8VzRcv8CJDQAqzo",
  "key28": "56C6Krt1AQQJGwnFAcEo3minD68u7iRCBscJWH4JCk5vcyATeTnqmyAny1F7nao7VLHg7kAnJCg4JYSR8nvH9Wwf",
  "key29": "3geAUbjyWnVY2UAFHtDAKgcvhd9aTLpWhGB3crSj7KYhZi77gui4S3Yc6trc646YCDLW22waBwQFHe7g21do7D5s",
  "key30": "2ZieaF5UHAFSPbkh8io2PBRuyRixHwMyC5pce7hdpjqoSbnXxVR64VbvrKFQdpQmegHpnUSKcmjh2nBDbCdQxgdR",
  "key31": "4qK3LQiNzPvvdy4Zx63Pe5eArrvJo8HMWEwgS6LHgqyvk226CG6WSNR64niaFoAKgoBosgBv2xr9MHAyyXti4Zd4",
  "key32": "293y2dQq1jL3k9ekqNJyiRGivhL1svUrfes3Stth9hK9eytBtYmbLP22rPx7HtSx19E8jmPrrK6A8QB5kK1ZVDSs",
  "key33": "4tbQ17wM7Hwyb31665MwTpaLnPFQBVVvaL6XTVZjzL4U1eLweXrKDyBZeAAxBHYNdt1JRDRWYJMhuKA5bha9XfgU",
  "key34": "3XwQNQ5QUZTXWfLhYjEQBv4NYWp9ptCG4TKawS3ibBNE9eXSWL3ckRMxUs3RrrPtnx8DrhjPex9kj2NgtjM4kwVi",
  "key35": "TQgCokByBjsAtaDAerBZVtad9qnpBzjcCmWrZFHJxKMkX6YwrJ1o4LyoeyVP3LZXcFDUCZvSEm651Ja1FyhXDnA",
  "key36": "38vea1QFDeotiggPPopfdKyV5MpvUuro7Skns8noFfbNg6eUyW4utqB75GGt9NQZ2YFyZJm1hibECUqGKiLsFh86",
  "key37": "41zLzm5a5AYn5bzqyVrFSA1MDcaAUJAyy7FLNKX7uArWu6D9vJTooyKghmGZbotpCKDx5Cs1PiTJj5JduayASER2",
  "key38": "4KpVqBf8qMkSWeoFhxAnxrcttXWcQkLNeJPTXrZnNogUSxgH3jLyUkeLdQ5ipBgUDbMQ6dUgm51cCTfR2RckmDv2",
  "key39": "LadLdEgjCbGQHDjxd3gP2rkfX7aBFd8bCLXS5tpfuQWUEPKXWviR8cCY5P4uCwnt9BKfTd4iTPTZiW3qyrqoE6S",
  "key40": "525oq9eXwjvhVKfYBUQuumHN5NU1Wp1gSn7SWfRfoCaR2Y1HY8djbigSeJwVW4kFK8DerWLLfo2ws2uRZUZuk9EP",
  "key41": "26GMpDBFna8zDf8DqdXmSm4k7nCH4BFUwQ77fegmz8kgseeEeaDLn9dms5jZSCh5LBFZM23jotRK7S3DR4fSrNGC",
  "key42": "4EkhdgUDtWCsY8J2v1coik64wisygeDSUcYx5CifTL9znviKChPCfTiUrdhoJEh5cKhURSbj1mkEv6cwrZSCd8DA",
  "key43": "53Sohe9h3FLbRzpJxnZ1hE5wk3WXoEcc8gi4mAz68PTtamtHvAUv8wd2UPsHwUpAokQH8Gm8d3f6cfz1HjkPJx9a"
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
