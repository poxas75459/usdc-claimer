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
    "5pWdLwZeedTv9Ve8QcHKANtKTmxsip6TabAeXcBuBYEg5WSVdTNzY231Wdw324EefpZz8SQZ2aXA7AEXYXfwMqng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrQQwX89GiFhWocKgzLkxp3XDvcLXyk2eCSrSLYHsXZKNndr53WJ9e4c6BpXzgVaLuUBSmtWFiK1Lqk2H3Jk67V",
  "key1": "ZzjZmzbV3muJNAmdRecpMGFLo6q7ZHND6tWwFPQ4R9BupZTARxweMTJ7QkoCcBmWgFMYoi3ksoLAqJt639q4UNJ",
  "key2": "3v4DvgBndR69Hx2m8gSkU2twW6KHZsPBDahSQQDBHRuQvhD5ZNYez4CzTDhemqe7FWPnNQ2PANHYkU2LtQUbuBd9",
  "key3": "2otj76rMHqccFdLWbWqTEWn7u84QmLs2BFi1z5aBPxza1WHttyEzABuYTHHnoZsLwcMGcVvGFfVzGNBJWMQkh5ET",
  "key4": "EmW3vJKPgHgdK9r7oi7qxrtEr5enzwXHAW2VjFbkCZ25ipD21ebvNxhzVraWKQUVMZn3kW8aA8HGLACU8Rc252h",
  "key5": "2oM1PDybkvrzdRvto8HheERbZT6wxaW15GCtiDLGKURXjj22o4it1pN9CC1G8NyWbeUdKGMNfAuZf2qyVc8XRaiY",
  "key6": "foCDbRPkSH4yXZEbbJGknsUzWrmUvtLK3cPUQmLG4Xz4nAYagsCaKHitWQWdUARyghWTd14Tc5DUt1d4zLBsgwu",
  "key7": "4zUkAZpUvVCfutL2NSFCuUSRjzTKxtqtCXFgjB8VPaGVveFfZ5bbZgQXxoyyTLk9hDqp7Z7yM7QTMMigsZGbrjCq",
  "key8": "7UUopy48Lw2jjPW362XfA4nwe3UuFXtxPWUB1cX2f9dbQxgDwWfU6JJprQtsvJsT5nLrUeLxY7PCbRmmzJaE9ab",
  "key9": "2mzBeEdUj5CTwwu5qAXQh3uEQW31zGAhBahX55UB4BBY3LUvTopHxbhZLCPV3tL45CKgZaFdAVJ2YRTH17eL1PLS",
  "key10": "v1jcTSauzyBXUxTvzexHLWRYTeMCNULboxw4ADsxFNFecx3BKEp25HCFVB8ZwB8d1FtzAHonbqZ6YaqZijpCZ58",
  "key11": "2sFa1JN8sstospP8LpcqtiaLFFTG1iUkTw6vy8iQEGw4auJWkKe5tVczwHzUQPJyu94g8PqSd55fqmzG1oxNoYvQ",
  "key12": "3re1Rv99sbuxcuzYRxmzfUeVnrNUnVzjh4fXdWf6PJfTZ7nuuPK2vRdoypJa86AEYBN36q4KTzRM1gBiWWhX8Aj1",
  "key13": "3UVjCtiu4LaFNR6o6XFbADZ1hjunLV25ZtwfF8BQFVZDiRpWy8NGZTu2TmdV19p3LHecjKamLf5cjxxjBSPBw3pi",
  "key14": "JT385BWJLWh2vHYnZKxiyf7s3cnrGP8cTMbH4Eo6PwZXKLhR7FrLKPHYFGYnJZj2azjfquEv2bmViKDdwFXzdQ3",
  "key15": "3Y3ZchizvwTdVJVfsWJA7TgTnrx8yqoT1hkMWZvv6NFsB6NeJHWKVGbdcWWvhAVJgEh3pcrFvkSsvK7dVTf1oEzR",
  "key16": "YeU1HENawyE8unBkGotjdxCNgmg16nYpzVZDWxcpg9xeihjRwiAcdNdUT5Eo8yEeR4tW4iyxY6gswkwsAzRh9Mp",
  "key17": "5qmGEMnqfnuu33e65wCjGaXbTYzcxZdsHzQExbZcymxzEo5VbNZMv8YKxNU5Su4XaPLGNrweeQk7GgZ9gSfWmaNP",
  "key18": "3NshJtbaLNuUkSYLUdhAowiQTxtooVmTmF7L7eRv1c7gj7gz7qV4EWCnXTpT7WEfBiSV6pyprpAKMmRZdwHtb9MH",
  "key19": "2Gfnm9YuLGnGHoJJUdD3kwX7SdtyfbytmAfdtpPvP3nqmrmZofBSA3u6FqHiXRTgCkifvKLYpcs8Y59ncsKQEauT",
  "key20": "33CSpufGy9ijR7xguBr6tjQAdWoPUELtLFqHNEBgYB7SVbvdQRsnVFJCWu1kVFJ6v4RVFEKAqcRFksBfWLJHWFUY",
  "key21": "24xhLJn3juZ9E9zrUkecPqGfoiR1BKrusQgChocezi3c74zhof3N88VSxGXTuLwxhCbSGyvcrHCkwJQ9t6oh1PQn",
  "key22": "4TFkeop74bK4uWX4qr8Qbsqj8UkmXs9oCFVoMn9iDDiUDkJ7PiutSxobLm3RzFCYFERhYurXmHPwTyQzs19XmqzX",
  "key23": "sN378FzPsoDdjYgUr5v5YgGQ4UVpussRqJUP4qZks7f6Q23qJa8XaVra1Fmb6CPFzBwTiM8aku7MP75sjEp4C6L",
  "key24": "5yaF6wjtMev5RcGNEjTeHZhZd5dqBznvxjNPYEyJKjyc869HEum7jjYuLqtn1KLVjZScDzFjN5VGx6a6MdWAL6hV",
  "key25": "3gpQbNmZMjLZBdWTQ3owghCsAG9mnPi72hVAvVeEGSSBoHRsgApUJsWbVgVuetC1KCQrVgBuLqg6zKqEE5DbYYMY",
  "key26": "ucrNKbGG3tc6WszmasnLkMtbNLZya4a9SxfZbjHBwKY3CoYNipozpAyreWnR8A3Ty8JBmrHmadHJwvnFsLDe4W5",
  "key27": "3QkrH6FxbMEqCn5Pb7qV8wtqt1x6XgJS18rmfcTFy5yDFrRGoTRVdE4fKNqoLvsrS8zfGEsvgAyjxmbf76uQS1Wj",
  "key28": "2JTj7ngqFCc2MomtLiUQEXxUfY9yY1GkVk3R43WUW3MaEsUL7HxPcWWj4AdF9FFcdvVQEEpSmZ4ST33nWEV2yNno",
  "key29": "2k7uSJWQXReoEZdtELQTHSZYCZsYC65QcXkpget4LEGD8wzZrTSQQx1Y63gFe5v34NkRbuhCAHdfRUrbU6mV38AJ",
  "key30": "3acmXw1kmbrPbCk8za4CqMcy6WW727xnbGWNWMaacBDqUkt94iS7fFKRXbsi6hqW4ES3jUYqEfuJH8imgdGABfJU",
  "key31": "29DwiFPsUBiUrewnN3RSBqMm5LfEn85ZRiUSKajHmLV3GXvur5BpnVLMYVoa9o1wuV5Gt3bLecZnGFEeS9ivaHmQ",
  "key32": "2EZCy3Hq5AVx38jFtFoev2vNVu8J8uXgKs2bMgE5NRhKMui97nrzkjdSxHhPiojXzsDLGt69EzymebgW4UC6rj5e",
  "key33": "61DR4kJxjTLeRwX9z6BqefwgfKuMrhi5cP7RB7SUFcCQULtHX3yPyWvg1ofiV71tU6rBGq9RtvW7v4PP62HhkYh5",
  "key34": "qwi6eBiZpLubVLuj1CJpYS9eb3CG79eQMahyKiSWzTSsBPf7atUpw6CEo3M4LpmCJU1GGartfrNGAy1MkeQYFBD",
  "key35": "zU1G2TvnMvTpz525ZY2Dy23FYwBDPNPNLXJz1baba2eYKrNSM8soAjnddUSLqyUWQxuzN1bea376tfmcjDTiQSh",
  "key36": "3fuvRjNvKVkBMBBA7sNXv6dyY8tkXWURDVtGduFQgehwKgd26Uz9joZ8jMKFRUpK9C5cVztZJ1Ti1xfTkGDa3H6T",
  "key37": "4XjYhrPmujsfCv3KiqngoYC9RppLY9scmPTBcY4XkwTWEoxUDKqP8NWiP3jJ3s3xBzVZTr23sjb1Vzn4gQ521Wpv",
  "key38": "5rqsMez1CfnG3wpuDPouwjRRbpdULpk87pVakWwus6EFT4zA81AvVMvXziSgBAdCPR6HVLR3Dc7KVgFooB77rzGb",
  "key39": "3kirXPh3PDqPAyTL1dnfYSBZcQFAWbiSakMxw9FDF4yL3wQBgNWRBbymRQ28XPaRtjL1jr5R3C9JqmDJMGK8GhyP",
  "key40": "NkHEAdDvgE4Uv34pPBiLHvQTNdxBfvSSL2cjMNDZbLGwCg3GaFPNsFNxDJVrC24G5yvdsRTsJM79PwtC2UcVThN",
  "key41": "3eKzz1fxRNEM9Kz2z9odhXpccRhAPwjyN1GDjF39ubSYZ7rc5A3Env4R2Z5ZkV9mzA2g2Q52UmoJ7kSYbu4oZrTQ",
  "key42": "5fXBBFbWig75N7DezN4id8gc5vCXNmPQNMgHyXcnMvAdeHzkNzPh8P79wLjkh8UiBVPQwrv5EjESD1fBroGVQpgk",
  "key43": "3QXstgpuQ1r453UzSoTV7tXMW61PtWoozCNKZFUEJXXAuV82J3bUVNKBWQcJWmFfkG7Ke88sMDAnGrZPSmbY1BzF",
  "key44": "BL48ysPE9DERZakT4PDjdnaCKxumVR7mc2X5vDR8m5bMaMXBMrnS17pZbCgookPVCTH2MDUd4WmyqtdGSDYwCZa",
  "key45": "4iV3qBhASjjybsTUBdiYhSWkM6avVYxJC4FSgnUJeBLE5e2RQQ2FGj5A4Leuk2GcL5EmNX95RDBNnUZTGb7zXGQN",
  "key46": "4cVkHaNqwHnNUKJT8njSdRf2yWoUChFmFGAQyvzZXkXCLtSwvKbQjQ1bvCv5hQPVNhr3WNxUDXj4TiZp83mh8Gve",
  "key47": "2H18UB931rEoewpB1JLsFuQw85tvVaKQ9Q3THpZpufg2Wp1rAgRTCbnTQJWz9Gwpqd9x5EWPtoSRuJHEWwfTzURy",
  "key48": "56Zt55zM2bof2gYjLNd2acKphgecMRiNQPnA1EpUCvazZRF4pwD1QKEwDT75g9b8yjGhCQbtUwL92HAWXf81QDSK"
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
