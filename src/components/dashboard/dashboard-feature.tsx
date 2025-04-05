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
    "orudkjosjfo7ERSjX5EcqACt4PbPwV1s2tixBV1AijhssQKdCtSm5RZH9kp6bmEULFHACnBqXWU2hAQmWZq6Lhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wrnCDnDjRdzbgTWupoWjJ1FGAg9zMSxDJtWMrMNyThsK6AWkhiBXdthAW96cD6zqGe8bUZ3vjzaef7B5eh28ZA",
  "key1": "5QbyeK3LxMzfoWdGzAs5A1d9YAjTLqPNaKFGv8d5wSmAZD6bhckKNZqBbAv9YUj9TkwCgZozZ8qkd1Cd5WrZNMbf",
  "key2": "5MHBENYtLMdE8dgbbZbwbrwhzHFkQD6Ua4TvpJwY1JGZQttJ3qwNSkVWFgiSxGDkwRfdDxXyJFUyrYr7CLoprBnr",
  "key3": "2JR5W28dWXUBHsiPkn992VpcW3QWjJZpTm1FnPG4nyrLARG4PZozwkHgMipsKi6iqEStbK8Xc2JXhdqd68miWdyB",
  "key4": "goTi4eqLAeGD9ExchTuftb9UiSNAooQ7FioQMwupMxmeyAAghUbN4L6FKLPexBY5oBseC6BXthLv846gCT4fPeu",
  "key5": "3a2sYFRe9w98JhxzX1cawacDhRFRD44EsUaBBsodUvD215pTrDxLkifHrmkZYU2ir92QxXrsZMqJLBwqEcjcuUcg",
  "key6": "23jGBCzxpTHRMhbBg4G8zCXcTuM7atXUhZ7V8N3xxLX2EoRg8dtWeaAbbFZ3fCbiriEVETg6SdWEjZTtVgTDwBFt",
  "key7": "2wcWVdcjoKxi1CPxBcpgk9ofVvbofdABd9ke3wE8wo3Rs75c69A6UfkBqgDq4rvnfNPMwDrreT9GzNs7tu1ng21J",
  "key8": "TuGniAQjgQpQrLjUNgFT7J3mvfPEUPkUDR9subKGN9iJyAmUyEErPim5JPRQ6GeQxcFnACmZfXsoNjQuQh8g99M",
  "key9": "44T5M5WSJG54iFAtNjkMX32vnKWkrT9fsgV6fWBtSy89fRvjeiPGXxTT7Eeb1MdZHLxRrgUwJEs222dh9d1HQbcX",
  "key10": "5b3GhAgTofQgUV4H3dcBrLvoPq8YkHFDkTUEAXQ5zkPjmUCoSHibLCUm3wbBwH6Qvn1TimkzHWvi3qeYzUQ58H6c",
  "key11": "4v38xRkbbgumt4L5kY2aspGqGyPoDaXPrVmEsYXUPQEAjTVwjeYP3xiH6fXu9iezYsYaWXrNbvSpGgjjhmSCrZk8",
  "key12": "bZXfoy2x3wSGLyp74a6T25ZsJ3DfSLdkJgyAzbnJTYVwFv88DN1tXZUtjPWvRUvexarXCQKe9SP6nNW1mytpgon",
  "key13": "5uFft46L5nDez7y6RhsoWJ5pbQ8va1ZDCMrtorPJjsbFJ8pJzMthfHqgpcFC6XsfVYgaL5rapQPc727vD6gUiEfe",
  "key14": "2juXgSNrP4cgU3rzUqXG8RShaVXKy3wLpBZFAkfD661GAKGy5atvM45uhpDocGbE243CX8NBvk3f3QsgYbfyY5BY",
  "key15": "4XSjLtNBivgxwihCno7qao8uxad8TL51yqYHobFxyTsmBAN4cshJm4UXE1JXZMe3C27hpBqwrCuD3kjBEQin1A81",
  "key16": "3NSsJJgP44n1Q3hwxfpEniremXzguAPMnTsifVGB5JCRfCyC7xAhDxVhDTvuYrEXnXja7zGnP1C54VgM2Vwyjak3",
  "key17": "PWxcBQYQnh3bN4uzXtg8jzvCsXAQepGXHRTxnKNvDg9aMUNT67eTp38Wf5r4Vmx9CpMzSGCEmKd75nPeY87Ks7f",
  "key18": "wquBXGWtHNdUUrh4LAYBa4zc12ZDxSPJU3LzaxziE5zGsQzJa7VwebwpywBfctUnU2KL58NwGGV5qirjfEe26tZ",
  "key19": "2M2UwgKofRCGB3abwZM9sZ2jAr4wR8LvGvqwDbpVBKfdyG6n3iFdauWBdVFXyJSGh3FR176e3sn77sMGaXfZeqUB",
  "key20": "5Erw6oz253jkxc1CYAHhoMgW951n9EPj8pc3AL5fnVf1UBmpeYxmiqsQVGnXmvuXPFCccuykaekqvVWWFtdai2u4",
  "key21": "2Ar6h9aMjCahy1HArRxrrWJkftaeVRp3HYWtXb9GSWy6yjH4wFhyoBAReperUJGkHYFQfPUSL1KM8qdGk6idADSG",
  "key22": "WvSXQmk6CAhTufLjVreZ9tdmtUNs923rsohghSSZNjc94vRLTCwoTUkP1gb13AtG1Wx5bpukCHPaxYwqk8GXw3a",
  "key23": "3i7Rx7dRs2PwhbECWYHvzNayCKLNk83BLVQDzbY19dnncNv66XnS7vUXLXsgwg6JqoDsvxRxgyXYGUnk6BJa6Fem",
  "key24": "62di9vyU283CsPNbRo5udMigbVuHczHHuerUuEaTgCLznmYVzVSxCQQLP97EBTrdiyAGgPHU4cNhg6CfoNd5GEdA",
  "key25": "4n3Ne1QTELekcGpyBT3V3mpzna1JZxCGAcXn3FEVzbsSxCjGzAWutBXtAgxgEZGkCzPtA37gxm5iS9KQUT1y4P1q",
  "key26": "23qXyqKCiySkRwB6KhuUkpZQ5WVFA9vJTiPtsFLBE7XYFsxm6CX6xBLgtAC6Yb59d1AYxkk1qtGnXsBVsN5P7yp9",
  "key27": "2GddECnq6pLg9zEMRV1nCBHQBDCDERsC9drfK2eNve9QpJfGRP4dYiG3vsiXqKLAoThYVbfFfKdUF6bxURUToFec",
  "key28": "5pw4wqExMbgJ7sFgFSHpNQTrJTXbvcC9hzpHxbnezuoToCHyc94yATaA7rX43Pt3jihZ9Mc1kHyp9yp2a5tnufAM",
  "key29": "4doCSnGYCQS3c7AjcQdSxeGugZBzgiviSGja4syxkCDpCSFjZhFwRpKKx8xAd96jXWzt99jCdhCUjFb5x7g6Yfwu",
  "key30": "5UUqPjso6omFzyrs1EDGktFxiYgzQgW7WghZ2iC8xJRcGBwKXqsKjdLnkA1QPLrx3yGUZsqXVAxB1YR1ucKu8Bkv",
  "key31": "fdMjSLxtq3v5YzmJPsdVFwspP4Vwv4Puwp85vW5kA4Yp2pYgHfCcWAfproD2JnNmd1ukbGu11MLGWs8H866HZPW",
  "key32": "5Nas5iUUHjjbvRxQy6Ey6hvxEkDdafNpEbaeDH9nAqAvZ8Z5gdCxy6qumMkDRYJJRdDdqXebiHFSdhpTKYUV59yw",
  "key33": "FTRFvbSMyCAVmDmV4DeVT9XrDTKCBtrNsoz6JYc7cULoQCiQyWoD52p9VzpgUVpYKFd7GazijMV8EEZvvTdtiqe",
  "key34": "3D8AVjx63HSfxpkuQMan9CWmRADp8gfpuAmjnkU42wVe3BkMRh6WQj6pgAc4WY9629CgH4YxVKNdfVvoyio8Cud5",
  "key35": "3mHfraxzwugkvXNnZf5Zf1gkKtQQdE5pUpLPMGhqmY795ePcJtR6XFYQytStY9pyKfFY8j7NMNs9wyLruaBFrdYz",
  "key36": "2RqJeRXUdw6PTZZemdPnyCzSgLSGGcSGMN1n9xjHb4GeXTEeXxMzgiiW93EbvdkSEQzBHQR6CjY8P3r3D2hiitU4",
  "key37": "3VqXBVZSP83nisvmmDou6DaHhh9QEdTW6rJGt9WFx3mLxSNDPyyyikC8k567GDVvjEbpNt9qY292NLdUH57kn9oj",
  "key38": "3kJayhVufyr8xj875r1U1RNRpdBC9trcVHECgazLyHRx8puPFbepoT5auDGrH16szsBw4ua3R9YrUjjnryEbguE4",
  "key39": "5BYbkcoDRwx7FPzVnYMbjkX4jSdEBEVsoYSVW6LkAtL8kg3713ZBPpFBvwz55PKL4Stny9DJVzv3yaPF5ubYr8yn",
  "key40": "3gkRki669d5fYxaUpAVT4ra9wc3bJqoHq7m9YN8RUU8QpCYjiZDwuMiFBuwsBqxjjHZXAxGFrC7t1q8vCbwwMnae"
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
