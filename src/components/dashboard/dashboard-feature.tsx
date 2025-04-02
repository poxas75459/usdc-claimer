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
    "QonaLi3memsYPvkeNEtGho5XbCKr68hmUQdEWAu4DGzt5GG5CxKrdVEqcnqSLSPaKx99jinNqQNmpoBep3Daenh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEiF7hAvTEQWWVkpWu2vf2ykfv4a5pJSDGyMczDp2EYV85yuXVmZpn5uJbQyABAefvHRrpEc6dWQmtx4tNyhtQj",
  "key1": "3bGKuKqF7RPwhQyb6E6ScRuMa6ux4ifEMNgBKD6AD2AG85SrPRTDJ8VSu891zqpbto84iEHz2GVktzReGe2bdUKc",
  "key2": "5XM4nnNrpSxsK54VzerPo2oXV4zJoRZEitic7DGnaPGcQBX9SZrVnXozoPz4YPkQXkfR7J6t8FLZCAnWiRkTRHFr",
  "key3": "3civm7rH3ookFTbV8SEeJoVkrjeqp21ucefYZbUEjsnsu9E42wQP8MFoS3FMtrL9bXpRekPygKwFHzkAhb2Xx7Hp",
  "key4": "2pDMcAesiFsNLj6AsGRvDXSuTrBrAgjd8voyd5gQqSgADTnk8zxSvSUgiMhmShr8XqoXQMJH3NYPENKHsTA4sY2D",
  "key5": "3hEF6SoUcXUric4TzHsWoFT1VfSPbJNtUSPVW3qa2eWaJPHaQuTAexGKXeF5FbYkji4ZVDoCxcPh6fC9BUNbTnYY",
  "key6": "4fCn3QvHpYHY8yDkBG2s8qS5hNGG7ud4DTKsqHfKMoyYtxfzi9gRuV5MatuVisAiGcP6er4A8sYgbWq1xar1c823",
  "key7": "5wQQAQ1eLh2DqvMZeEQwgB2Xza2Vcg16zgVJq4ADNF9UPuDzoXwScnUw4MdiDH3Cs6cUtpANS9sUE8yBtgdnoxtN",
  "key8": "u9SGxbixbzQMT6ieoXfJ9toNciCZuGag17T5mLwAfhiP6NpHNqdchF1CoUhdn4wFVzJRaPue5fM413UmZxdgm4o",
  "key9": "5C88jrGNcAN67SCoEmStBzNzsmPomXPsFMHzifgzzip6wdmq4WQ5eNBSYrWxAzb14FtcbL88yU7p1VnoCGqj3Y3d",
  "key10": "2GY1HVZx6rNiWxgUS6M1Jx4aMBH8vnTiibfv4EzwHnw8sA814Ga7T6raa5LpH2VHViLyWppuJ1Qau21ZqFQ5SW9C",
  "key11": "5V64sWzzamK3eBkCvwhPvbMcMQb3ywiZopWLZHf6cm1VNRnLkRGVuGf4HPGiEuGBUVHKdb1WQJLQZCsM4jVHX6B",
  "key12": "3w7cM9zF2ASq62rZj3hEJei7EYUHzYakjSA6oQYjojujVW5YQWjkRm3KLnBNQHuXuEAThpQkypwwkCJHMJKnCZyy",
  "key13": "3ctQHXc6FmrR5cfr7UjHWQ9oe3RJgTdW1D1Uuk9462wMHPuRwE2FBSAxD3bNGFcsvn6WFnwXTeF14qR7Vvj9CD1T",
  "key14": "5UwscrTFFjNs3s8X3sz8X37L9WeRtM6ggxGHXFfPVs8ZZjdaCFfzKsYf8KtsmLWgZZWRkgv5RTVMte6DXab9Ys6V",
  "key15": "2hJ1nimN2rT2T9UqiDBayBKfTuy6XkwamzhBEyTsQeoA7FcDFZNS7a3vHhQKbahMqfzpRKq3B3RU2HrAXAXuiosN",
  "key16": "5AkhdaAihqbE7gvR6ub3yz3iqJ3vGEDLrT1TdqXgEhHegSWSMaRjpPD3X3aPWcP77DwPX94iWn4pHyW4X1cHSvHR",
  "key17": "4ofr74Q8t4sba484hkVJbHTfnfCpwM5WrBc4zoNx7HD7XAZYUmfbtYnYo8KLj9NnNWxFPDLceZjS6sX77Jq9qgkH",
  "key18": "3XNYm29rPoCZD1kgFdMy4N4is2VXerRjL5ULoojxKm8DCxEk8SZgTv47dTwcbg5sZpor9XjFHwTzcu4o1rEsHToL",
  "key19": "4TYLWtgT2qDp6coLKPvZJVhYcJ51ASn6HszBNyBH3aLVzitjf4Pyh29FaGjV6w5svF8MNmN8vSo8CGaXCvBNosqw",
  "key20": "3fMvqwDDomVGESQPGh6dwx1uVG1a6RPdNsPDcQZye646rJkLPD2t7tbRgcYenKVJxdw5suXzoV2waDmi3h6ALKRC",
  "key21": "5exwSVnA435Kp1Mr3hJep4DcegFq4GAaepuYrVWiMxqd15Wz2CZkBHSdCV1Je4bHSt3C2uNWEtqPN5DCnzsemZzR",
  "key22": "2ofiip2ihWhWYwMPYEWW6KTeo4zjNcmLySNmtEJrNbfGRyHC2rp4ygg5XdiJ2iM5bXEt7JBrHqrtDkeFNJ4Vo7TV",
  "key23": "APtRdX5g6PaCiRtAfBA7NXAQFb2ragRAuH7X5zTHjp911od8Uj5veUosvktpVCFUftmp8Pe9GonztS4mJA8VQ6B",
  "key24": "355nRboupYRUGjEuCzpu3G5BAZ4DrS2c181D1QYtsXFHXfBYxAExjB3nFXSd58LqxjmW15RF3kYDswrvqgDSeAsf",
  "key25": "3d1ahau33RHgCnziNPWvGgUfowrz75CnyhP5jshc3awv2ngq11wJUDJ7ppGTHXkqWTBWCy4fGkjHS2gwqYPeYGyh",
  "key26": "4zdr6jYPB8sCD5pVch6CYMqUvmUCfBXhWCQnrSZ6BJvsS75T486dQY3X1cr9cJ2VpURGQGFSn25tPbqZ31LrWH6Z",
  "key27": "4pUcjJ5sQvw47SqZrP2Bq9se9vgHfHiR2KYcBJG3bZ8DKoS9y5wBYjnTAaHS2DXp7u1wCo2wSThuUyUDsUibA9mR",
  "key28": "5SGqr1DjqraZJy4jYMQpo7waBDkzspHTMyZoVW6X9ySNn2kiZP9P266kh52vgZCA3QD9iu69dwqZEpRBJLM75AbK",
  "key29": "3rHM3tTYbPMDkrg12ZQzgx9tskVYLtG2z4RDSC9hqx9TFSMJCpU4ZU5eyFNq9nvqRfymkfVttVRNjzD6sTemZDf2",
  "key30": "65BKoEMPU8VBHidkzD4UKWnMs1tqWbPmR5JACyqcQDozL2V9Ko1f2MDGuS39wxMybqNUWkWMebvjG8xXhpC3b9hb",
  "key31": "4TUE3ZTufNggwjL7krynXQ6tqzzPib2XSKve66ARKXZxmdzWYvGPgwxKnfJTwmzhwhiPW8Eb7HMS3HbJYEWyqME2",
  "key32": "3n4pUgNzEtyvVKuWtUukHPoeM9kNbdyss66kVFKWWj4BEgNvBmuEeTY9CbLi62mN6mxDqps2DjPxdGhPwXoHcvNG",
  "key33": "7hhtJyiCy5FXUpDSV9PVcDxijk8DKYSjhNBr9DKHyJvzz2XAbLDHudQpCJ9KtSA21x6cMH6jUWfhJJYBCB5a3Nn",
  "key34": "5U76CqURHg1BJZUgn2bQBZ3XEe18SY4z2ExxgezHzSpMNWqFtzqd3HisDm582SVXvLpDoa4zeEv11PSEWBXtwQWk",
  "key35": "232YBJQ4Cy8z8673kbnazGbUfQv6WAKE4sSMasxrhYhrdRUYvFB4afwsKVsZyvEfxXASsCHtKQbDcR1S7fnXypDR",
  "key36": "3C5uYjWN4HtLsyQpbStZUvdWndxwY5SQGm7zrWcDwG5JMD8oePzmAUnrfNMXx41f2tXBvf7S5mJbm6gUbVcTS65h",
  "key37": "4iZzQY2Kz3Drhxa5ugABtptysEfNiCxnUAybaBVYf2ER63JBiaGHeNRQPDWM1RHsUjW5Kqyo54jw6WhKcqwrzP7q",
  "key38": "BgZPtToHu7weaPmjryv9gBo3R1HusBqAVLKrk7zGt53i8UVzLnPSkT8nmU2jAZQcroEb7rfwrzvzdpDEKZVQj8b",
  "key39": "58LbVmkBjLRUUkX1ccmknoogoAAbkbXGEScZUZq785xymBQZSU9dxzRESU53DnU7WPjvh55dqtm1RmU8jam5aofm",
  "key40": "3PCW9ghZRhcAkbcQArUjEYmwRqyzPcWTB81ReRBuR7hw6iyay7KoZtxYeg1bUVVgSHDUE3hnJudT7pEDdRDi8cEj",
  "key41": "5zYiAaEkrmMWgPDt4rFMEqX8gwNZNttSf1frindm9oSUigYUTPyvnGjg7aZuGNbozAXiR7x8XWJbZBJHmCZRLjhJ",
  "key42": "2cGVsWgVfpoi94Y3CW3r9H5CYspkStugqpqqckEGCyMaiJ1v5zAvgZE6ZGaMnUazZ17s5k7jbYD9H9FHEubQApRf",
  "key43": "46DXFhdLPpUTKxa3pQRn7RPbGrGLnKBK54gVhSaEcoRVVFGPFqK6TZtBioQnMnb5V6beWSEAHrEftAXs8guZ9BT",
  "key44": "XGYceXxZmmQxh1WsC5CqZefjoqZwpTrw3C2rASzkz83WZkrSJicrHbMxGwRXtz3yb4FsmGC14sEfUzvGzd1CVY1",
  "key45": "58AZC49Z22jAo92s6kKzVWmfPGdaL1DfL1nd2AF5PDYVz58MDg59yyjg4f6J2TSXF2V3zYsZ48Qi1L7LTUPFgoRy",
  "key46": "2ttA2n1ev5v9V3en4rrbu2VWw3D2hbqknW87RKNqBx82RXrB6KaBNSatukbBeSyYrU4m1Q3g8Ce3VXhkagmy91F8",
  "key47": "2pxgC8sNVGKLGsgaxkUaPDA46CQ3FDj1Nt87cbK9YKUCYPzGVEGLW2MDpakqfShpYJxUCLep1XtEQ2cZKtMm1KPM",
  "key48": "42ZfewMq9e3soRfHYMB6LUa3WCzDXEskEgCPo43vogkmB3sMhsmDJCtUYx7iCMXKeLB4AD26pWWKeugTFHJNK7cU",
  "key49": "2Vt9JCEAwQ9yLXmMNmrfGYjyKpZYoLh5qitLmad4EAjqYGY2RQBfv54a4bs262p3bXBEWJvkSi8ySSBJqTytsD19"
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
