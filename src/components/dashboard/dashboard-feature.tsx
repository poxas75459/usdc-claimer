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
    "4Ub4U1cBujWHauSLvywZY4tznqcedTFFycu5NtmfxN7ypbycL7kppUJ6vrScm7zy4bR2KyBk5dkowiUUnaF6UXTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EyxZH9gzbFfzRiKgk5ZTd5i4pcbFUeSfyVdjF1xwKTpAeAuySUZgZ2XCEXcZTVejSjaEY1459XBPp19PUWo9Cp",
  "key1": "eKST2XfoUrJKrbDNBpkqamRXiC3EWm2uPrFYP8HyffzGg5QRey8Ht7vu6PHNYXEg1FbWHWBu8k8k7dnXePXPCfm",
  "key2": "5zwJi2WCh4g5D1pzvSYggPHfJ68amZeLwjQTebJfWo1Bc3jHyYigzJwYUuMNHFhQHXyU3JFDcTNJbAFhLgX3b1mH",
  "key3": "41C5CxPhr86tP9vxCa5DpLmbNQJDDsy9o93v3AXXapjjZqVudnCUGWKo4VniYrvoxsWBK9KwRKiu892i9f3yvyxF",
  "key4": "2LSNLFs3hoj86L8cxfjuN16o4gTKis3b4v78PfU3XvdFFfDcsKFSjq3V2DiEw44h8r3aTGmUtowbRybqXRXToQaw",
  "key5": "3MZ6oDUPFM9L1Z6aFSeFFWnipr3pxS6AL45ah9d2Nwe1jU3TCaEYgZPxBpPEfBor9uj9XvR6CQQp9LqzPYx9Q53",
  "key6": "4tvvwPHZuiVy2zvxTSb1LgnMuxjR7iw684e7LtWwjZoFWVSyv5eaQWuZqZNLK4Fpr9yTKpnBop3zQaYuLXiVCD7T",
  "key7": "ATKCypniVrN7rrP1mvXbZucCUjeEsU9KvqmwC3pJokJvrqLTQN4oDKW7EvRVUCipHEiE6Cq299JUHGurg528ZZD",
  "key8": "cCo4pXQ12xXne1kz9i4bA3zb8Er1a5Su1kg25LpbkPhQaokPLPjMn1RTjuu43wZnLomR6oMkCGghr4sFtaCZa3x",
  "key9": "2stjteCpoduN84LnwKPt3qiKmMjGv81StYY3UZJezkYnTPPyT1XNVvKcqD84DjARaM7c7zo2BySyxKMXLxhDfxNs",
  "key10": "58hXnZQDkKBCgA7Sf7wMoCChdiu8uSNKpwgsDvqE1k6GEp9Yiw1684RpQUfceP41NskUCxCTVmzo5uJ6Wvk2et5s",
  "key11": "5cLRE869JzADTjQsqCS7nXa9WYPJ35TC5n6GZRiXXbkDR4cQS18qT49szVaMtiE3kiVYEZb51iuEuooyo2YT3CW",
  "key12": "4qzKt2Cnctq2ZAY18aUdpokU6UdUaRXp2GGuE5f6SF3vqRs3rQE8aWe8Egv4HPTn8xsz1Zf2Y66JUUaGTz3VVqrU",
  "key13": "4PDyZKXeCmBEbGW4ePvDwXH219F611S2PUNhpGncDgCFkektBfCNt8eVMAwzzjPKsRiPjD2PhHAdmQjrDL2ScX5w",
  "key14": "5fdopR4EMJ6iz4B4inarUVa87xdgFpqBFaxE51LmUUkxuRBzmvoFgDt1HPrWV9PUecd3rV1AdazgqBNqzeXpVaje",
  "key15": "4Ri9faHM7oXsUPh5a82qXzM4WzsWPfAiBsZsKcpKGTp323Dy5n8FadRpYaUVPpvWzrhRF5QdVXdBr95cHBmXdCz3",
  "key16": "5xeeY5L9vxA63kHJn5N9Xfi8TCW8sXz22DS3x76CF5Wa8mFtsotoQT2NMRAZ9eL4GeUPxbRLtB9o5aipfkzMenp7",
  "key17": "vN3nzKgE41TpDtnYUHgTPWy7NLNzsoPvgzFXroKpsemSeMcv31gvJv4TbUqzNrAMYofdbsTGb6B9yAh7UmTaf7B",
  "key18": "2Nf24aE7seFwosMSiytUU9Gs7iKqqbP1KSt91NFyWFLgBBzGuWqJjp5nJ9SED9YkEtKY4dPoVCSQ47HgCC1Jnx7B",
  "key19": "ae1SZmfUaWnGaTfVsiEHuspN2VYt2fwZEutS9oSUtvhiNjaZFRL6DafvM6m1rX31gfyAfoLenZAgeZwUa5DC7yM",
  "key20": "66MuFH3cwKBubbqRkrjZEpavVtjSBnZC7rcGs3cJooCriQgtYeiAXbFv3MhAcR7jwGjbnK79PuWsoJWGSpAcT5yr",
  "key21": "29fxBFfKWbKiGBGkoB4xR6NtuRhBGdQLprrp7RX3VuZJ9CF5EV4iyj6p7xbtAUQmrLB6kxb9HfJmqxMJsGBViUpD",
  "key22": "wF2X5we5pB4zi6FsudCFEhFazp3Udkm3g4DiYXBT5P2RxJ5dewKWHf86E2S5PWMmNFG63Tp3bRnZMFF5bXYJwDU",
  "key23": "5grtt6kq6qym5TLQ2a3j3HvUbps2k4Wp2c3egYArdnM1UDqSgGmiWSrGQrELK8rm8umRQkaPm2e2V7yvuG59zHNJ",
  "key24": "4hDjwmvBtPwMtJs2d3EMxtTKA3RZ5Ek9XNJXY4SoLxEYNscHyzUKxQwMS57dFLDJDWYBH5CY2oxMpLMCf8EmCY8D",
  "key25": "35hsGeui5RkS6oUsHhdqoF4JhdYunGKp5wqKMvBKGUf4ope3DX5aEkzfJydkRFcYMdXMXphitptrbs2rnLytGQ3j",
  "key26": "3yMHB1Qra7nrNVKiKvUXsW5pynkyoadR7ZJf6pe3ktLnMACyzixswC2FfSPC4oC68zPQ4ZJvMDaeRoo5PyGeA2ES",
  "key27": "2M1Lx1YFG23C9Sr867E397qQFwjdZcJob5tusvzTfyp9Hpav3yrnyN7c1PtkjyZxdKZRmtdxt2LdN4wQU2wVXCQF",
  "key28": "64TKgNx5mki4xLSLM7YhJxnWgQiutZMswEt2XTCJACNuUsSQC4vxSxaS45gpfnEnkrkQ1anEtPCYZSv3bF2eBmAG",
  "key29": "5wgW1myJFZ3xNteaTgGQt2D52EqAsiqBCs7TvADv4nr2NhGjs1RSxRVdw62oG3Whv7BSKWWj8hoss2eLDgB8m22b",
  "key30": "1MzzyQnG1QF9vGfxoG8zXqc4kZ4WXmyMfmo63mDr55Hkgnqm4hrW3UrUBL3xhdFFDigkuyAA9opDgcm9aNiaxnh",
  "key31": "4252o2W5FeKfg9g8hTaBcuVddemftnY3DVfFK3MDtNjMtkWXYuWvNcYBBt8AJmkZL6UgDFmYmmF3bn3adRpV4X4w",
  "key32": "2P4MWtX3XyHiNytimNUDKp3CwC8A4zUgVGYdzm4BzXmt8Uqu8WBAwV7wTTQPf1uRTagvyyhicmYuokWUjMzb6cYF",
  "key33": "5mCwzbTJJbfZAcJ7qZKyPUtusoa6FRnrq6dxwBGwBojwPJZmkwFF2mfmUtHYwzn28aoB7g7ZqkNX45GDngZi8CiK",
  "key34": "5PugbH7obZMENmxNcdSiS7kmPzHJ5aTtaT91gMkVi7WPtq4ixUVpLf6NFAQuo7BUHFGRxm4DzJ24vmHZhYCgb4yT",
  "key35": "2hSh87ToydBFwf9gyAXC9VgqWoMnyFtKdrsuPFdT5goMAtkTUoMNpGgTFK1yXc2dWajq8M61WcKbQV5UCjDz4Zc5",
  "key36": "5WU6iAmZSimr6eWKsxrwezuFqLrqf1XvJzpzFXxbuZTjZsz896gswWCtaNa2NpPWu5bkppgHXXwoAP2XJc8kCNzi",
  "key37": "2vzNViKTNbQVW51oHW3xN2PZuyQUa2Fxea3d6SpwANarAZaZ3Z6jV8kJoVkUAodeqm336yQf8dFyUjschschmoMp",
  "key38": "2t7bPtQLrxweDkVf2in877VACB6zZopx9W2x6AjQGJgtb9ELqtEwCH3oM2dKznuyfTx8WdAqRwiCPVZpUZabroz5",
  "key39": "3xqXR4npkgmK48VpoH1gy9Xx1H9JpKXS49essMxmxu54qNW5dK5cXASWRMbQd2y153C25DR22ZnBnx3GW5TXCQdx",
  "key40": "5YN518DZhjB84QTKmtRmWnoyMJFWJApXsFYHKmnkHv4TCZrgLbp42vZ6eQbkBzry6vB9q5DRe3hxHTYhJPKCCfnw",
  "key41": "62KKgx6a9ydNNKyuXRUo8KmKZdo4z3Q4wK3S5kdDm2gUi1UETJzqVNV654bZ7j8MfTttTwksxuhXSC2UmEaKu6WB",
  "key42": "FTFSosTTTo98LE7pZokxt1JGYft3NiQz6RWWjneKDZgsxPGhbaNwibzZ3MYcousYEtSDypubtNMHn7Lgjy5XjJS",
  "key43": "3Kg3sjtknJRkSFLVH9AKiz5U8YDw7d6Q4PRCVXuvpbLUS7qZ1PKY7jWdmA4QLKy3zGatP3mAA2ujv2pX7oSjnDjH",
  "key44": "4CS5w1WjCtempywL8vuLwgcN9EFoRtGgh8cFz32hEoTqFykbT4Ax7ukFckBKjAcgeCT5wy3rZU45jn8ckCVMMQAW",
  "key45": "35kn7sA8co8PfN54xWYdxkRtHEvqaGCR2QWRPHWXzHsJdcRhgFZv4LuhoSdYmFH8XDYrFC1rQxyr3nj5xhJL9YLj",
  "key46": "R14iQsqWzjFddutrwz5kwmQiWATmVcvzXgoNgH3MqXM9kgasi49UzLr2uC49MhiuTFzfbBvTipnJDA6Bn6H48BM",
  "key47": "5wMYPMhFAA6bmtggoHW86NoiamD8RJexvmaaY6bwEqsvHL9ZRqewyetw9QsZ82aWWq8LFc24sj3urmsj2QQMwXud"
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
