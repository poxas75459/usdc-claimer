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
    "ShYGkCtXh6nbZnoLeBCZWHvZrDPj8dEA751kfcT3E2o9NJHqyydza4Ua6jTXdwJoHDEn3e4FRsxds9GhphxybTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fg3WG78yAJoWTgK9Mpe9tFaCM9Ka1Xv9bYLEwAFXAy29ToanFzd6PQaJW75gbt31MupRRZd6MWbBHK7zrX3v3SW",
  "key1": "58ZbhbmmZJV9A5bZWW5EeQeCqqjFdwmNKLLrjZJYGiY3gNsp1Wh9tpqiQEYQSJz5W1YRN3LgAu2XRqanWfq88j7m",
  "key2": "WABBuQTkp1y5zG5zp1Z2F3XQXqn5RKQoSCYnGKo1rvvfZVCS1netQMezzU5xqHVHSRtSbve4f7MtE3TrD5CXayh",
  "key3": "2AuVmuePrDu8bekemNAfwpcpDL7Lq5R57xk5ZPBqa9afxn9zHXLYMpuPznjX4mR3kkrGhbcPmfhAaeBVmwn63Ws1",
  "key4": "47MAzgUQrddprMgkywhEafEQedYsCnr2KLwqMH3YG8bXBEp7NenwWReV8ARcDqwbqT5BePgReFJjfBLtyckmM7ke",
  "key5": "4YQMNEXunCSH5YWQkDdUYH7J9vY38psVuYHufAtCCMD51zN8nH8KxMkvq6BJW4dTrhyzwbyvpMh9viFN5jyrNJM3",
  "key6": "syf2kGmrm6kDjrici47X5TVotombJbtVXTeMyAkQpKzFeXtrEvCJPvCabdRdaLnpubr8HJbchRpLgUjp3m4dZro",
  "key7": "4FbdkBnSVKZDLGvkjcEoQCbfc2v4bDLAcvEUuJuFNGQ87GfgYNBM7c2GkbAN59kHzKMDzcu2Xvs11xavV6Ar51Yk",
  "key8": "3kkXxkDfBr7KqxMZTd2hFYmtwr4hMFzPDNz3h9qAFPJPfaDz87WiuANVgyWtqDgXdkE1DZWTFk8tNQiuVWkAL3Xr",
  "key9": "3fHqRDHXwutCSSHYisKPfdA2uym2qfE5Pr4aUmgmCr4mLFsYGjZFi4irQMY9rzd6kXha6cwnz6eYVncdN5wqPRm3",
  "key10": "mvo8C4QbU5qeF9DLQZ8yt5tN9PedRdWyMCJA2WiHrJp6HpNZ31mrdui5S2fShHnGch8vamgtJWLBfq7Th78a9K2",
  "key11": "217CWm7tviXqX9hYKBpuPcowD2xXKdv3V8Lr7kWqsbeimBTKyra378Qi844LMWh6xVA1ZdB6iZgRkCBSN1t63sLf",
  "key12": "e82VHZ8VsLixUeSjSTDnBvguM5wJSVXzeR9kzZkDbuzkj3jHAuTWYBUZS3TXhpHPB6rM4b1CeyhJK3tpJwnoTmk",
  "key13": "4btUzDHahzboGf4AxRvD6CxaeFbmG6GVgYYDvA1wNSVekr7ZESZfCJMZrtZPkbPiVc4UqRX9joyvi4AQV9AzfmqW",
  "key14": "2zG9MjCVgYwDF7T23yLSktSWwtvxAvnmLedW5UoxS3jRTXNPcVHQaaJ7ND2ah3c9cnN9PaWEfZCJMEDH7NLqY42v",
  "key15": "dokZC35kuHH9oG7SoTYWsBgXv61mXsxXNdLoLpoQpJMcDb1ymd57fMVLaNUFjmANMbXtcW6it6nqTzrASk8zV75",
  "key16": "3LE2yp9AtRC9WwDD4qsj6iibLPtPz9Mu1x7mpqC26JmsCQmPdo4NJBSXjTHH7he28AQ6dn2NGg5ASjMryjGQGh8d",
  "key17": "vr5UBjYSpkwSwDEeUnuXS71YChCSgTKb5cFkkJzDD9L3DNGtqmdd643TZmjEWeXvASVKB2ZC21Brj9gXE5vjxq7",
  "key18": "6mYz4HvknCrEvVmszSgjL6gxUt7aghRdiU6ik6jZYYJ6vFcCTGdsEDqLUSHoHz8oYSdKDppXJG9BYjRwdwi48pw",
  "key19": "4G6qnPr9VYUopzGe2abENGxyvEsGD2MudobfYBpauX3zSwPP5F8feJZs7pAydbjTtbAV9pM273cGA5CbMydtatky",
  "key20": "5Xp9iuaR3sLjwR4FWapwkPS8QZJFpYSutLDyS7CEWWQ3cwxURng6eaaVBKoojakQXKDWLQWPc64FsZ6YJTXnHaZ7",
  "key21": "66dcjAR9s5PmarDfVEsDan3ycpSPbprjkvuE1xNwBEE1LhYWAVvicUrp1Jye6jo6Ww4C6gnFJQErw57VQkxQowzP",
  "key22": "4v2ycGFo5RfjGSgAjJHUtwLw9CYabYCeW3Fs8x3RsauYNuY47TfTsJdPSZ4cqPSoc2PVEpwznRDLFGWQ1CWy7NBp",
  "key23": "5Vxjxyr9WFyRi9P72VZCMdn1ZbkhHiHaCTwR4qeC1ig4atzKsfzDLyMXimnwxTYKz3mg9Yn5V6baVazHSKBDn8e3",
  "key24": "4Gb6vSLGNUgdokEHvYXXEt2p8mQ2WNb6BVHajN8okWVeR9wtYxtfZAxtd1yhS8e3GxZa6URNJwZ1Z78c24qExPEp",
  "key25": "2yFdvmXW7RqvL4vW19hvzMVTFQ3hPkpjY5RavK6m7fmoB96dvDDypPtokK5XBaiv1DtFb4QzGnHBBYdgVrospfQa",
  "key26": "4reJGA13TJmU7CYhm584bVNDzydVqF3AirNv5QtKSdq8eQXNmyxzcw6gXXFtmN16p4StVYXY7rcpMEx541ZrUzMn",
  "key27": "4N9uRDKuWGfhwPhCPczXeWmPQCuU3m7ifbE3m4PCUDhh5xDFuBG16qL6oAUv5fkJkfq9DdE7wVBdQ8zxt3SYQCGS",
  "key28": "5UFxdMb2hFc5Ns1AHai68rkFf6CLbVDdS5N6nmrzASjgcZUkbUFiiX2xRp57vxqMBD5yR4Gg9SrrFVncSXL9v5fK",
  "key29": "2NNKE4wbHZ3BnneeB8YaNxJN4RUpxWryrX35phD5xh2PzkfHq7eAaVGCNmtNR3ExwdiFDffR2roYKjR6Zzqgeyra",
  "key30": "hL9H3EBJq5sjoMBniYpP4NRJh2zfBHQ83HDdUr7WCSfUw2nnbTKYpZ7L3pgzF4Ma5iYLh6H2b2ywYTkQFXwMu5c",
  "key31": "2L2hzqE4BhrMfGJmARywg5MuY64vDWLt7KYMMw4dSJL7Hz9z3EfEbcVEPaTfk3miCnARR26NLwRhKVVsJPufkGic",
  "key32": "1VbQ7ySq1LDdsj5j6RKMGzgCvBenn1tpzFNZUFoDuXM9VNu8JEzruet2Mb8i7RepFChucdc47UEhx4A3kQijSiH",
  "key33": "5LrsKCb7rdSf4Z7uWth4GvNHgX8K8Pkrrv7g2acvwG26pWcsonNCxb1HHpjjbo3A8DVg1wMT8pVz3cpEVoKGKN4g",
  "key34": "VS4mLAjuXnkHifcEsPhBqeaYY9b199N3waEFwhGqeBADS4kEWuGymVxHiby84ZtunZD3JzRqGPGsPdBLihZB4qU",
  "key35": "29SrjZ9aZX64CGWxit7cCJJy9FMuMueD64g813kxemvJuemigS6DrH9DbhuQu3qqVzwce6yLLg4Gc1b8sfixiHVk",
  "key36": "4Vu8JtTcRYvr4XczkGSWYhpvW886TyJcE7C6QN4V86vFV39pzSjjKhdaDJscq6LmaVwMzuJH7qeSP5zDj2QPE17B",
  "key37": "4ChTp2DQGWwNGTL4eeJAGTF8ECAJapZ98TJAqCNtrMHm7nzKcHcgFXSo81axYGj3LZj8PDaTDRRJ2ncfeFe9wrDo",
  "key38": "3XmwMmsNch3BMT1WMxmhpgYkfCdYpHymw6jk2SEYaLF2dbwTpCGW4YiVn7vdgM2UPa7sechv2pFGE9S9SqEtNRfF",
  "key39": "J29cMLEagp5oJ3T3hVZzi6oaGQHq8yP1qAq34UPpBGHKzakynxGuPfeVCxANgFwuuRbB3m5RRKiCZjXNaqhFEu8",
  "key40": "5V4d2oTQfAGSkmA7643pY2iVZLvVnf6Uv3o2yPWbaeLJu17R8wLnBHFu82UB7LKCgnMEhcQjzEArL3PVWmvkMQfY",
  "key41": "vLv2jPALiZSMLCwmSXgV3HXfLCGMV4b8dZbsRi68Ep74x4coiMKEfnVaj5qu8vSxNVS5p3iY6KMX1UUTjh9khRv",
  "key42": "58CPRmB36nNyrTun37SekupEGhByu5EDYWSyHMMVwdQwJPvB1yipp6LdHL1xMp4qoi4QjKxFG2hWYgmHqqxR2vq6",
  "key43": "3WhoyFQo7pwwUmeVR227TRwcMKbehtqjakTVirVGx8RiTsKqDuB5SbjZPY56oNVDGKUQsUCZkLZdQekJGKMFv3mP",
  "key44": "5kc8Pw6oAN2yZVcq2gPDrFR53H9mhRRJP531svgyPwxj2Dmjwvdv9NSEJ7qsayiYQRwu9MKBiuRTHT98EmAi5TEt"
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
