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
    "5Vd8XmpwjTQQx2RYQB7zUymYL4RcMaQGT6HrMuXo3Gj5DL5Hx6MvXtT5XJVMCMxAW3tmhAUkdPezVR5tEYVrxgYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iTKqUrhN912nwFfsLtXUgAjsEtvwM8KFGxKKDAQShBJPoD1V472n2PTi82vqzk4w7KNvDC7GkDFFCZ4NpkZBcrv",
  "key1": "2yCfF9noPYQcYyonLx41G4JPGCh1WqfoD8nwXjfEcUqLNRGeSZtWm1tSPjxAdZvrqeLvKhYbnZ9zRyZ4SkYWUJ1J",
  "key2": "3ZTMhTeCqx24QBvVwsVkAVqqmSckcCXyfP65sJhngcx48kzmGyWHby5qtd4c5cMqsfahEcQbm2y4UqyAigSHHWaG",
  "key3": "4oUsFwsipwkUTAEH2aFMewT59hK5a8SLYmZ4NmwjaKBZyCeF1Y72eBNaCqLZz1oFyjXyD8KPbnEncSrNzvsxHt1u",
  "key4": "oBBby25P4rxngYhW49e7igeA3U53p5nnq9CtkcCkpxMfN5ZwSbiFtrrJ18jPX61FMKUcQhBwyr2EpHcUf9HayQc",
  "key5": "CMo39r6RPLJmVXaHTgLSEPuGzxRyHHabtkKfGp6cye42XTCo4T89ixJAUNfjx7GvMhdEDikUvAt1WaKYwWEVsW7",
  "key6": "jo22UWUcTaiNr6nguNzZTs4NDkbFL3UJa4AntRLnn1cAftmTQUHcY2NgkVgRYdRzivpXcPTEc6oMJ7WkMt3bNfW",
  "key7": "2L6gT5LZy7K7avbPEjjSpS8EEjGQWutWAaS3LnbGAoTL3vVw4XvBuuEkd5w7msgrmpBJ8ApGPgZYhuxkCddHH5Jt",
  "key8": "4BKEMvm8J3qvK75eDnCWAyw1cq5wyvPwX5PWFhZBt2Yp1sdZFUQZn5zyi84kAk7kHaQDV85gbFfbkzzCFV7VutvM",
  "key9": "5hmzGLaYwWPHdgPmUn274nrE5BUbAwWA7j5DwABxAYC5qhi5omk5Cys4B3SBzie3d3HPuRzBFYHjbCSnpbKB8mWq",
  "key10": "CLJSteBXKLFSeiwmXUh7RMMCVrYRq5yNEUf5WNbefzJZBi1v7WKSfAwV6X2HaH9CPN1M5e1JX7VcKpAwZ4NNSxy",
  "key11": "4FV1pvNrU4id1sshkGLFHvyEXxexJSekU75AgNK9iKu7PFRQ6MUNLL5UyVMbbcynVtvtQZ2hUxHTCnwKiJzteMuy",
  "key12": "419jRyGRA2RSxdDCguXLVnHDDD3XjUPVfNxjCJ4eSUZvftzsChrhJmnSKDivf1xd1tzFVP6Dy7TTsG4orxsJ33ht",
  "key13": "5rYnNP6jFh5876ECD95HMhZPPDqxKg1uiTfxwEStTDMbXwULSYzdVRd2Fwcvis9iWx4djoZtHKTiu2JSho6ooAL",
  "key14": "5RJLHWEc42n7ZrLKZ12kg6zRxFUmywcQFD35taCrtEdw39oowDNBqnXXMFsHq9C1EWNbqUjzb51s4dbttJ7MAyYt",
  "key15": "43Jx3mrvsizgR8FiqiL39hxnZ6CkRDq1pHwrxZ5Vjbf7ys96DFUnk4E5VRVuaH3UBGYj4UChgV1VrNWMQCABC158",
  "key16": "2eURGF5VgnL94t6nSpLX1yPhnHMKsSpjWEKRb8fvGemnK5nrRpaGqyYHFaM5ShWcizPkjC8CCLzmYCm5Bs2aMqaD",
  "key17": "3Y5y1GCkAXGGWBq8TuxxVAtbYP4xC6vFpdcyehJBDb8S83jDNPQtJvwWxCvFbEq2VxnJhuVjWaEkpSg5hpCu6at5",
  "key18": "28HdFw7B3MomzswdehbvKWsEKeYGtZ6KTdFYtZqEiti5iazQeXxAEMbnf264vC4FsMskUJBgKWs1m8iKVRQLmPnh",
  "key19": "5szVh3NWqHS9L927XaVZkD5fXC2tQz97mNE9JwZ8m8BYw8kiTiZsy9dF3eZMFrMBqNvwRTYt4YiFzzLdkhVQg9mn",
  "key20": "32VRMCAr1XAdjHQHu6Xt4oGxqCw3AB9rH7UtkxYG4rZnZbvYeRE93w2FW7mu2cYVCCuNKJUFdYCoPpLjqBNBQ8AS",
  "key21": "5VsN843zZ5tMZDw2nzrEX6GPiT6xJaxPZ239jw3jogUmU9MyCj4yPK3Qt5bg6VBvmF648KFbHocf2A4xhNvs18Up",
  "key22": "2YjQnQX22WVZyMRaYgDo4Rkp4Uzx8WscneTF1ETe46qpXmJFHJrhisg5kLEmgsMNsTQ1zGBGtCZp2pyTiSVUVzoF",
  "key23": "23bYwciWbX61Bq8ffkPMd8bgv9t9ZqM1p7AzBCBLFtZSVFPxTCrs7qTmDGpiZdkRn473gruWGb94siBhmGKbTykR",
  "key24": "3zNcab9PmBzNt5epfHwPVRV12kip2re1U5Cf5Hd1YopSSbeqLMBkgCnKEVKBX6696Q1DtBHCw3VVNos2Zd9Qe5z6",
  "key25": "3FosKoGWwnrPed5o3rqwjpfd21uSLCo1ntni1b8UsvAtDBuM9fQT9UbVfWCzFfU7HxSoz3zWvVQC846groLukYjE",
  "key26": "5bBRK8XWamnAbyBod2CeJpCkhzSP8CfALi2Anhic6rvL7vVUSBsMeTRFdnwWPWtCgSutDMMN7HDTtPLDY7GuWVTF",
  "key27": "4fZPqhsCG99D5ipbuDPvYRCzZNdXqe8ZXbSzLyuuNER7LCjquurVVCuE4H1adpi8wD9nesydGPPttuZiPHfFcjb9",
  "key28": "eDbKCZjxfBTYbawaCekaHXg2SSkyhoX1sqHJAFmHSFFWDanZbnj1yg6SBfA1pGJFu5GdrfXFVNrxYiWLqFkWb6C",
  "key29": "3JrGRNPLFeASoy9rfnkcFWAribPgqTxtgLqzSMyWGbywmwzxpXM8ay9v3gX6vz8VLtYwyuLbK8UBrgsfQY4ADLQ6",
  "key30": "24pH62688MwzyM3MGYqG4aF9wJKnwdbV5caTzu6Z6CpaCMGxr1UuicsWSxYhVocETMQm4SZ4gZqucU7toFueD5dR",
  "key31": "5H1DugyrL9kc4b8GCqY8QsXicPdtT2KwxGUfQfyJS8z1gT5XvP4gwL83fekZpdxbyyaE7UCJwd5KJoZtqWLF7dmY",
  "key32": "5A6ZRx59vhiNDFh6WxVhFf8nPRdKC2wm256QCgbnhSL3t1wubPCEtjGjZhESXve3y8LPgZL5kLaZYZp2bxCxGHoV",
  "key33": "4Wno3YWQG1DYGKBpy7ccmPv72SdU92M9iremuojviDk3RFg8uKbfpBAQNfv9rJ6E1ZEVQZnwTZyKgXzX3UaB1nEs",
  "key34": "ZhiigMmpUA5ZWmxP82jL9H3M1vjnF1uP6SWAbZaZt46WqGrSi7twsPCNNSzkXEPrTdgEPQgN7xZA1D5xZ6SpyGa",
  "key35": "KP5aauUKyrcFQi9WrSEPN9wf3Q775At3PPhd6gnXJR6EgX3nBMQLv8jxnhxsmX3uBRnvWdXjZyVajY9CVSRwsYx",
  "key36": "Uvfxcf8yqH2wFbsH2jnsTXZEqStC72DWhuskDDW9PpLDtV1NDnbVTY1xzuRe3iVBDMAfZJ73y1w4vFFyafNvKMz",
  "key37": "3twzwFQFCRz5xf3yDDQh2JFHEuTqmbMceSs6v5wbbMaQ8GXBJfHhCKQszXircFaeUvHKZegYHCQmFJdWydE8cXwq",
  "key38": "4dAJjCUjEaBfdvqR6MfXN7iGGTdQs1TozE82YU74dLJWMuDG5JX4jmUDYcvyt7etPgaCZVLQojcLkyyFxo8LE8nz",
  "key39": "yMfA55ukhvn68MkBQriDDAPsRDgakELBpbMqmtr53t2hWX7UuroKQb2sWLuUXQ7FLbrs9HzpWExXagxZRKbfGmN",
  "key40": "4qU87xhxxDkH911YYAdF3CT9rAHfmNGeunZmyZ9ybSvNJUkXijSzVzM39zm8bDvSrcgiFLwG5yS28U7xqWQqcXfT",
  "key41": "3gDyC7xxKAACXHwmGm59QDyUYon2q6nEtS4Vni7mUC4TnPJckYLBE6dewkLK6N17uZPFxe1KszWVrersqMYDLj3N",
  "key42": "791PeTNR8u85qTfeY4ZSgX9HknwbkJtVh5qpSPUdwvDLCfqSfXi8ghmPryF8T3RkME8eGdDGz8FdkHoKmU63PB5",
  "key43": "3tPzPk7cZHTyuqAGQ7eNgmTR6KsgzWpB7hRe6Rfq1urCjACKXaAHtUQUJHTDus32xW9n4oPv1G92Xgr1AsyBbRSR",
  "key44": "61jARD54jGmGvmajQpuRT4faBSvXiPc2HgkXZd1px1QhFDptJtYKBAyg4ejkf9s6pAGJSwZgf2coVuN9bAF1Fue8",
  "key45": "3Eh31VYft3eetew8JenB9uU485zpfwjoriL555ahrjzfGXPaiRSjQYTv7D51rRDPE99NFfj9zxAc5ibCZ3sKxWJ6",
  "key46": "hjb4tP7jWz8Ht1y4U9NyYySJN59dMWmSG2aTKiSVgurAZeysUAsTdXz8FZjnVi3AFDqCKK3au7hPJPQGqvC7iHK"
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
