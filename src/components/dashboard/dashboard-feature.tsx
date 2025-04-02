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
    "2q2KVBrwxQ6wcSdQRY9N7bt9VHyW1hkVqUmgs5vAwgeBQwnhwm9JTqY3rEyBnU1dRWawep3Wb1sjvysHFw4rPpas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d69t4f4z1EWQQ4GabXrosmjBewfwyjotB7fFbqKmsWek4fK2zJ9LN7Lf1EdQ6biy9L4nyBANRy3qyaRMSyDisy9",
  "key1": "2cB433grXdMJenG1HKXnTsaW8AMFv1oa1MVqvSmecmZiig9pvSN9MYc3juYx5Q2qs1RmbESZ9EjzuyoHYLiuzfPg",
  "key2": "54K4xUgZGS5cosZAMoiumzRw1bZCCAK1s7APDSjdhmiygqMGMotjNRw3pg8EYfZeyPy1ktCUQ9BJCT4y1g8y5Myt",
  "key3": "2nWakDVMK4q8aZfPhSJp6FvrdJqXUngcGv9ooQTvMTvso1Ac3HSwo712uoJs8D5uDCP33P7Gcou8mCAPAPwHwxmQ",
  "key4": "4SumJi23MVamAt4kQFwjnh7jdzwgEmkwiicEWsLWuTiyGLoHxfVAbjztU6SJzmnigmMAaqc6fimdResSf9i35DEw",
  "key5": "3sSE9WqLVA6qexF8XMKELbaVdAWiD7vUPnLvxWGyuRyXvMZZUMttmCbJFB6J1n7AbkUphXE5H42FHNqsXDyXCkDd",
  "key6": "4JprsTUGW3ukh4L7ePfQ6RDQBMHzeJ97VHYK9VWGFfj1mVqc9Fa9ueKvwc5tBauet3hQo86sfkWGG8NmWt4yxupk",
  "key7": "3ejGLGZZY6drcMyHRwdNABXbpack2Pwk94oRkca4jFD5WcM6RTVnnfGmmSqd5eyachvg9cXozUVDS9dXHp4PsfHK",
  "key8": "2fNJUQRxdgTD6emyjXCSD4oxhsrWDWpV3b7oHydutZnG6qj49sgZBSbSfSbHMbvupoMpy82tUtvPySFXYvQXYLBf",
  "key9": "5XDmgUoy9Ke7njWjrEmHtYqNaHKeodvikQH88WXXwY5FfhiRYBdnFZFzVszDEefVRGsg4FZRkKaox4Yzc9grAKHa",
  "key10": "264E37S1J5nHvfjAMtBPgbd66dc6A2LdN4Ykdc67En8JG1XR1upP21naY5VesTrVP19inFxP5KvR6XibWZxMiXha",
  "key11": "4QLmEW12vCQqLAMxNsufKeqzkKn1oek75i74Wud2Ku1L14ikmo96uprZHC6xJ1bMXFDknVJdrUB8YoCNKhNcsVFZ",
  "key12": "2bvqyk8WNMvVg3Z3ZRvU4Ty6KETMJ1UeShBX4QZJvfXPdM5w2PApvj7iAkRXS4DZJ2drbDPgc9Ddk4mo3cba4uXg",
  "key13": "2inQPpPpY8CLHWKw3WjK3HD1HrYr65HPQnrMoJwDc2iEa5TcWQiBPDvErAvAZ3E1j5vfKxYvoUEmFxLJXFT8ipbZ",
  "key14": "wpGuY84DLJptwnXHwiq87h2Wz919P3TrWt67fes8gj7LR3fdz3BN3HT87ZPBW9rZWYBeNDRxUrz8oFrSBH74cUw",
  "key15": "45Qr8RTHyBqXkJ4vPDo1D3gYQTyZhDnNuafEMaFp8WzY3NhfLvtm2YDxxTPVcqkAJa7qKLHsXoBckTq5Bnthah1Z",
  "key16": "5fxwHWULeosDFNu4CwhC2Qp4piH18ZqzqqHtNX5fVVuZejRBpzS4DBDR5TEAsotQ3h2VVRWkXwJnREUG7ZKVsPK4",
  "key17": "4QKV6JuZcJCbYG891RK2FhiFMd5i9sckXJezmddntEE6wpZHez7DJxhwGWixFRaeFwz8mFVkuc3PagAC2k3v4bbh",
  "key18": "4qGdZiR7d3sLftZ97FvEmrJuQ5fU6Q5V5eAnDdDgGLdeFspjVpLFNJJSYLDZ14YtLLhhDufFpX5nXrPgUwkKq71K",
  "key19": "4QDzVV17iJUqK8aw9wkNbRUNeQcGD7E3U3Ws25Pfr4ApHVnx2nBnBX6Fj7z8JyLuTYVhH6NiB7nyid66vMwYGhAF",
  "key20": "5iM9RqeyVHMv1pG575DPtte3i7t1yuin3TfyX1BPib397F8AH48xjSpZu1ez9AwiJi5vb1SVhkC3m9zUtnU8fjZ7",
  "key21": "46EXQoSMmaq68KnDZfE1x4jbguVksD24TyaNHcno4ieMGbfHRY61o4Vh8vhznABJ47WkAT5ot7oppPJtCi5SoksS",
  "key22": "K7MSdqud13tVDwtiKZVQ8mX2KccrdZiAqyTBbikqD32VPRhL2PYRausQk7dsNi4yvoZAPb3X8iLKKWvL2akMCAy",
  "key23": "5qb1jay4QgQsBnnHoNums9HznyYK35wvgp4uBQNyRt4MCMKNriY2g4vABLhq6SD7yLArKhRojVkW1Rd5Em4AD6Qu",
  "key24": "yHHeMduPhxvc742n4gEeBJHGqR2YzuVPxESzjoQLixMXe8SYHmQg3oYiFnUuZiHWs5TqkifWKwt7hakpmoLLSQQ",
  "key25": "5cHFaEd4XT8vbnLgfsJ9SM2FWtFsCUswwAGWJYwb2KB63JBPQQEBccyo2mLDSv3VN2muSy7tU6kDKwawc2ha1GJ5",
  "key26": "3xxhVDuY2KyusysQh7AapFBpnRXKderf7KWSLbDLM6yrA5ZpyMZ6RegPbpvD7jGhqnuF8KicyKgBsVWoqrh2a5eF",
  "key27": "3QALdhHuympoxRfn9qxy5RAfvtpwgDvNfNWgnwRN27PzQPwdJbJkCdcoFRSkxc97PUnfFDko7wVs87xdfAQ9EVoD",
  "key28": "3gApK1xP81VhE55UW4uGK3cG7Yuq3bTY8rKPsu4Ldh7DiHwWk3vEkE9aw5zF2r7BhmviRABis6uaN34W8RReRc3j",
  "key29": "59hsxmsp6uCJgwqCgeCJxnhQf3wis3bDQdwPf7XnN9341RQtUiryLugZ7zpyrJr3z6X55dAytLbhcXwDuFs53KEJ",
  "key30": "3vSUSmmvUZHHB6jhq7wp2AWPkoUkQzpiJni69mVJwt5vZM74nTcnt7KJzSXmSdYspffGpDrC4937nG47dcMhWGHw",
  "key31": "MpLM9epPiSYC2xky68cTgyDWAcqNce8KEdUcwyEHTmEkmZeK5BVHPph6qr7anTzMTFTQkzAbdPYFHbG9j77pkGQ",
  "key32": "569TUkTCgPUGZWnMfgSFjNDdyUps4skQHubEr3WTYzpAYyWdmumMf65c2QyH2vGLvg8v1bvXzkSwH96o7hXuW3Bx",
  "key33": "3D2CTH7HD7BskouPkgkFxemfHt9x54HSHeBYUWewHjL53dBRpZbj5zXL45jexfgvAhVivLNzQxBp4dWNkFFHqe9a",
  "key34": "425bMXSTmnWsrAaz2n6hsexvb3pdJDdY4fb98gHhbLR99FtoiUaVX7VffKMWiiiP9Rk2FBhtir41zWxpboyTBv6",
  "key35": "5cnqvmEsdPQ4aZ3RWATRtH4QwCZq5fnVvhRVts4CgSrVAvE9h66X4k3QFsHhX3xPmjRpkxEmwbr75wFJTmBG8JLK",
  "key36": "47PsLZ7fMqbBpzi7nYHFqWbksLKhTHdazRr7qYSk4Whp63dvXi8RQk8XbfCz7efXkGRj8HcWs5LomDBCBsgBZdcV",
  "key37": "3iHtQB6Azk79o5dh69AMFHF2TD1cw3Aw11g5Sc6cAtdsjGMmh3TDZznRv5vgA2kzfrppbC5zDCqbD8QNUqZMXH4t",
  "key38": "GZMzXvsCsBgydgJFyWv5EssqmF4uYr6YVLRyun98Yc1MZDAcpEBwCAiGKoe7TiVthx5Q6hvwLQ5pg2UV2ofQcc1",
  "key39": "5ohbA7ETpWPwx888zYBfXrpsiRDyL3peKk8Q9GXpfcsSj1YCoRsbP766Fmz9oS41WSxRK6nUtc2FwgYNYXUkKVTP",
  "key40": "2wKEpGKEpPqPbA9K8xsqdMV9kryCzwtB4diZ2gZjorp4kJso1mEpGu1EZ7BqVvcWvQ2N4thLD5nmWtoVyCdLd3iu",
  "key41": "4UY3uY6DtKZx2kXQqwXhMAsyJyJbYf426JsRy2ZARMhAi9uC9LmqSm2mwaFscpjQpEtYhicA8dspHbKxymC7EBoS",
  "key42": "5qMpS8DJY1rcp3g9ZCHpiTzy6cFqcFde3KBwEuNwfgrdszsJLCJmpnSwdKrknDYitaoUTK2bLzTYEeGc1Hpq2DM2"
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
