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
    "4tWyYgTqr3gcvJxX6FAfMSc8oCj5B8cRwWCBoEmWdkzkyXpXyFzZ3KCEAvhpQYJ9jShat4BrGg6zuJN4kqPLDc6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqVmc1jmedq4cBDrwDmw6eaDeCcRHQUmUq1eEzTLJpFYHVHQQb4FCdRHZY1huT3ZzmDWAdM9AHG587n1S1LGLyJ",
  "key1": "2s5mk5Cv7KPtURWi2XeXLHEHRbLh8q365xffhcujrTVmXGwCgXu1JbWb9S2M9A2TBnUNwigJzX9XmjJsFeUkFJ26",
  "key2": "4ipdEcKBVWM4bi29Ytv8jkwoJHaFGT6gEESVY8xRN8x22LjA5HNfvWJRxDQhn8cSen8pzvDyvo865ZooWrY6vb1B",
  "key3": "2fHgHTwYgEfqVNBXuKp4ER7qJz3pRDhRqNbQGdhZ8j4cyy244r7hKtg9xUhZPpxHL3aBupk6gtMwztdyBBc85MuB",
  "key4": "3w6Sry3GWNq19eGFYrzyEK8JeVqREoo79BNxpZigXiSdeyKYkr1DD2sr2k92F3ZWXkvW2BK7T9WSxmGvGscH8GGE",
  "key5": "3m1aK31rFPTo7m9bzFQYgMwn4t7uxfe3AGczDvj2YjMirwwuoETdedX58MRYttNieZPTTdY4ZFEAb7NkKCnk2wKD",
  "key6": "4mS8vJHGspChrNtVccjFhcsH4BY1VN6Vr7LMLZQo89eVkSF5kcJtYwahXpw2GEA3E6CDYre3eu97cy5YtjjHLMLe",
  "key7": "27Xo2YgUoBPz85yHNvTZM3NHcYVGJcR1axZVQ5ibBdyjFkPdNbW84C5K6JyYQADnKFQx6ZgqJauHm1FJV5kV3A6q",
  "key8": "XLQZKaoUwcxSFJHV8toyKykd8RZ35y4airzTmeckwgJmq89pFRpvw6AJvHqkTtwqW4JVFSznzdaT8zxGiCRTDr2",
  "key9": "3kXgHzHVCw4uaJWXB5qEBPk4niQ3LswZZSsYyRoU4KaPxMPSPwQ6qRzw6caLXEGY7mAsJY429jzMh8adQW3LcHyZ",
  "key10": "4uGqxp1hud3xDUQV7KTmTFbM2Xo9TuvfehE56fWVSFvWHPySjT4hrxo5b4AXx6WmxgSp7WDQLc163B2TZ2BFhcbc",
  "key11": "462j878h46VDxtWCoRrYNr6Eoxt5fFMQqr1bACeeKQMeEB3jQpC79rAxqpWfk1TiKM5ddwyRzLsML7ELyMFfjqy5",
  "key12": "udzTxyKqjoj2K8B7xYJVPPjGbJ2vAfyYpWtJeuw9XijCJMj8DJDyFBVppZqPHFG5sZQsTz2znwWset98oprc3v2",
  "key13": "2T12wJKsWrdZK9P82x4UJMKy749nPwZbuZCZXeAUKhvTgfCnsgqpHow65Xcgj4j6jPMP7DETnaLMDaRfM5WPH6RR",
  "key14": "5H4zW1y8eDk6U68JCjfzi6FHdF9bpcydzV6kdo4UDFSVJveSMRAUrhnUr8cb58BnofrCjdCy6CRYG4Tk1cTkhar",
  "key15": "24oyEAiEojwSxDUrNPM3c2TsZ2pwqSYeKgtFVfAeukNA37NqojNxx86UScXzFk6Am6TJhYUof9FY3aevqhJvaFcZ",
  "key16": "3qirPviYgUM6bVJATV6zC3ZNea7LnUDWaGG32Li2pmX9wwTagbo2iTsgg7Cgtg5V7bT2CvpRMv5r46kjZ19d6TPe",
  "key17": "5mx9m6cTPpX92eiUr2arCbYsRAZeN4BuiihE1ieL7w7Uk13Aqd4mDZWSVfPKSCNQoDzUWvL1kHzDK2uFatRQCw1u",
  "key18": "61GfAJs1pdipmwjRHC9JVgsk7YkvZsGmLEcCmphuenTkm9CikAVGkPsnEcPysjesGd2nMeCYdrVkBwrVSemfnuyR",
  "key19": "41vHSdTAgYGqsB8MTBX9utufVcxXXDNKajbiD8y4hoq8RTk94mCrGGZN29FFXLdMuFqxNP6NYmn4i4CNYk5sz8Sn",
  "key20": "HpVSUbsXECbvxfbjh3zrzE1jrhqtMU9BMUGQQqAgekY9Ejt5ebCmdox8SpH42WrYmUPuFtm9GB37DoCTxmYMiuy",
  "key21": "4sQucsdT1jo4poGDBg3gMW8e7kSXqvbGy7yjpj1sDV5eznQgzNVGdGr4tnYva1qLof1GZrbEpSod9oL8uotdW9gC",
  "key22": "2eHKdEqKjV9Zp7FW7Rpe14VqDZdRCPkYHjmopDQFhRMGxnbahY2N29CXfCoprG134F5heptw56UiR7NpcEXHh6jR",
  "key23": "3o431n59AVd2Lj5UHA3Dz4t46TsKdto51TdEzEqZA5y6oqotMzdaAzHksX2bqFY4xStoH6dHMF3qb5dDfRm9vWPm",
  "key24": "5avLy7ajDAjEfScUkxLNQpgKXCJSxYbjG7tRaPuggWXN5j8wezXZ466R3ys8i8dosuciiTRcNmddbf3MZbbXyAyJ",
  "key25": "4GcTL7YfZshVcmCeKqjjKEQtfY5cLosL8hEUxDNFSexPFKbBCqGv1a4pe8rdHiBH3dWRi9QaEFvMH6hastWJxiae",
  "key26": "3RTCWS6bCMwGwfsmcbYqKEF352yEVVXTtRD2uxTVPvKGMeJaK8eqkv9pNXyRmuuUsdD2mEUyb8KHo5Bp8mvhq4mt",
  "key27": "RdMHW7FKosYPANCPALrJtd3EAN4WSuDnaDDyD4m1X5fyWBnw7hKxGZ1MxzawFnyqcmfcsSbVKr2F89XHn7TqmP8",
  "key28": "4xwYkwh9LZscwetLiqKx9JXmfrirPHFsMVXvCYYsnvVmAVfVbHcERZCNCUd7fyhHydi76hyqpwL7BdioSJLWKbSs",
  "key29": "3syHRQEn2Vsxq5YKPDd7SXp5YpybnMSohromrAVE6NT8vNLbR3UAaYG8QJ5MBTKbDuSc7yDWpe9Yn8wrafZfHaZN",
  "key30": "3dskstWQi6rRJPV7bhuPWsBn4h6yNBZemLSSFu1XnoghFo8J9nKBxRjMsLLRnXvv1kxGogu4k9vF92XBSm4AfaeQ",
  "key31": "2GvHP16SficMxa3NDNGGRNnwwfHHYMbauZJGNYLaFzqvoN5eNf4LGzbZx153idzBKUSgmYJPVPwNHorSuZBvdwZ5",
  "key32": "4R4gPSekhkszHARikbdatHMNxWPZa8N3mGgupitFpNHJup8pmyihSMTEeAJsmR115fzaB9d3gewd4bSXs9CqeLQS",
  "key33": "56EqhD4M2daox8xHLxNuNA61v273mpiJSa2LvcJPV74qkDmsGdpfEtcVX81SQoHxYxseDcDWXxX1NqNwszziPvxr",
  "key34": "3EP8SGaKkbypwfxJFWGUvMhcCSgVssEH12tKb5wQYqz1gPdVekv4c9qVDzSwTsYxCpSCrv2YEXGQNQ9GTfk8dunK",
  "key35": "2JtSkNPai1JW4hCfmYcRsmf8jfhHZoCXRc7gABxbLYY9wn5QyL8aaF6rgU8mPp6R8FbzTEz8KM1jkxfZgoiLno4x",
  "key36": "3FoHuaBKPkdYKUPxSnhJtmuqXRPCYotLUE3PeYaKxdtRSBUk6SXhDDWS4Yr1jzG1hCgPkhL3jto9QDGSXDM1SRyL",
  "key37": "2fUTZadknhoLdjB2rJdJreooSZtq7SNfzAzVuLGXXup3gY2KuhNqLwNihyzWxqv1XymAfMCiCDN5enZBsMVSWF5d",
  "key38": "4ruxmsw9xBUpabVCPDo7aFDCkJcUoj3P36d8q9s9i2xqjHPqNKTaFSNs3VELPpouwDwNx2Mf2UPSEEusFK99WRw8",
  "key39": "59Qv7GYKKYPtv7C8JY756MYdqPVKH7af395kGmsrfn26axQdpVVNqZrjh41CXuTk2uEPhBRrBYaar5TefrrKfffj",
  "key40": "5NHZVqUdcSPG3c7DCCdrc6khH9sXewvUezvtNEnCiFoFyBcPnWdUQUjjGtzmcos59a2oxBe9bnmaKFwdvSQdzM9F",
  "key41": "34oQUSvJTjDMKxTBfN5sXbKEi2Rmk8rVNpLQcV1pUj4jJDDpXHjGpn3D58W8XoRqdwpY6j1hKzUM8Z5dSGJuTVAc",
  "key42": "5iKiKorGsuis1Q6bjnZKvy2qAJx9xGwiQsHN8XmZ4fpoDDLUCjHPywh1TispJWwxtkWVxite4kLuMXq1ijwjJQwm",
  "key43": "5rC7PJrd8tKy7ik6YZZDBrWYycR4kz5zB7fyS8zV8phYoAhgk9Se6DeBGrPSsSG6X4wEpX3FHNgstyzavzH7SW4y",
  "key44": "CnP46sFkzycg2uRBDGHv66GWu7RhZ8i8k9cc6djhxJWsK2KnctTuZzkxNSCbXHREYk3WpURs3APJXpWMd3qvTVt",
  "key45": "5L2LpQcwH1BB22iVLnyLf4Hzj3Fz1VQtqcw69P5x9h7Xs9QEbwn2xyMfjpkcJzBFTxeYeYsW7uXYhtDJtjnzLDTn",
  "key46": "2pEmHcVV5nfoMzfiCxBr6ffU58c8KueXZy9SLrX4PG8dwpJg7eHq9KrnosZ42n2bZHYn2DEEDZ34KhssHszvTYkN",
  "key47": "3xZBWUhG6ucGRAToWrkEkCom1RxPmvBG5tn7oxyrDGuGfPujtKZKkzKHAFdkaGutJXcA9h2jXTaBgvbQANykxsoS",
  "key48": "3nwmNpv4gWtuxeL3dBw9n8yiU466LqwF2d796qmncMiDpfaoLK2t2LyibUw9xamttc7ee1Pa4FGNTuonBDKChPUy",
  "key49": "5gowi5ZJtWck4iyEWgitPKM4tPfvL4jQDDSDcmPGcGUvUQS5phmUajdiyVRvAHqDnCmUSsgoKuChfUwtXMYLrCFK"
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
