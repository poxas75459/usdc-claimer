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
    "5ChBLrGKRnZg6YPwKsXNeESv7UgHjqZvnQy6sn8kCLLgQYieSv34nPXgcPRD8KXdA1F5La1T8LYncKoL94oEEFVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GoXV8cLS7VhXCrcvpAFdcfS6rvC6xxfaV8pvrTDG53SttGonib6Q52UzWivNniYKZi7NuDx6wWjLhVjErpvfh4",
  "key1": "H591t7LBu4eAcv2L2iwMFQe7qFbeotgwngUT7mNowMRsbkjfYHAPbnchjq1zGahJYyxGhhoK4z9Qr2biW5RuJuG",
  "key2": "3L1R8jAukP6rWvdKcRSaa9ZhCXWevUxZft8MCUbcwQ3tfk1wZ54hWzAbS2dbDEwpTB85AYjQoFYhPtbSFSywPPwz",
  "key3": "4GBBGSF8TLpG72tQErwQYjL2HasMRv1ui5ZMzfvCynkc3mNNXGKahoJ4trbjpt8HV5PZ46ogqATwvSqTnFRukjF4",
  "key4": "5Xb7iqxK51NLKmgnYdfYTdndFxRU6HNMDxeRB25PyyeWnLbUecQs6iX4twG5xoh3xUtgZDyger8upY8i89W7MhtA",
  "key5": "64LQrA4njW74YudhDi76FBWDSaoqyJPzcBPVns2fLCxYZTor5h39k8iFnsphRPB2m7mvY99MpJ8hLMyHfAdFdWKr",
  "key6": "9eET2s4UTh1p6gpjKhfmJnDGD7ny5ox7JrbqyTeZwEmCECgFLy5QwRxZf7skwxdHx6TuRCfn83ZhkZ27bM54s6V",
  "key7": "286LoY9We5yDsuNA9cc28TMyJnxTqZRN7N9ED4dtF2to7TtQvSwEEgq7pfPL751yrKDUDKxKvGshJEk6YRm5tXPY",
  "key8": "3ACG5D23oSXEPdB8shnZJEPyMQCxA4MNRGbJmTgiDuQg3yWoLxFNG2VL4xdDE9a1zWGM6nrrsQDvK9riJSZon8cE",
  "key9": "4o2zyjv63F6VhEx7bS8atUFgcjVFjG6CWyD7fC1gXsEJBxE1WuiNKqJLuHw6ufWLKz3SuHTmv8UbXHY6WvTuENia",
  "key10": "4xzQ5i3WxKbpLK8GxUquNsopeLqPECaEpNv8ZmSavnkF4aJBrXkabSkfMQpAMeyf2mvG3KJCu5VcGgMf4Y9HXbRo",
  "key11": "4AK4KAnP9NYHJ37ctmk8eVDDKHRcD8XDuWYkyR3UMQvfbrCXoFQsDYtxHTdCnNfQn2DUpW3Wx7RFJpfapBEt1oQT",
  "key12": "3xmEF73jK3QdbSyA8gfqcZGDKxd4rRveHbnHfM3tgsunE2MqiefCVKPyc2t5t3SSgMuLmAD9ciEm1qe5Gq6mVvUm",
  "key13": "4NXchL21DD7a6pXwbcNuzV13HNS3MxnP2uL48b75nJ7zfNMSWejar5Xz4bkzEU6ouioKPAURvU7NJC2CVgWoz7xF",
  "key14": "2BaoWxx5CgGM4SwJw5GKNr1PEwpRqQoeT41b4S6HmzMvMu2bDDZnYX76GujViEb1HFXP5vGACEhFiW6tsFDVCzo5",
  "key15": "5uHMwjZvq5fvvUTe2VhvFJavtL2m5YSePM5egNeAJG6E5BiTaRzGbACbdZ7GAW4mmyU4x8J6KzintzdnQEmxfbN8",
  "key16": "mFRPGUHEdoFbSVSdD2Hmh4Rjv9ckri9PtkrWZvHK9hvNJHv9XUvUfNjwxvAA5BW6YQb4wydxSsHXsBPGvurpkAA",
  "key17": "9NzhQC8Jg1ab3yPPFa2QGhVTJ5KWYT7CVzTxncsJMgKNFezZ7qf7LKKVPnrjU1MNhKD4gbz38yAD1Woy8Fbuab7",
  "key18": "2mZu5EwuxfBG6ZkgPJfKg91gxYPh7CdQZH3yipSrCu81D5nJoAZuziDXfKe4RicE3AKDjQ5dRVAMwDyTz8WfM31T",
  "key19": "5nguLHmR8cEqLrmFqxRzhsQRpDvPXa5vSNn3YWYdQVpoN4yW1Fg2qmAip8vRJhZuW7YP455UiwMcSKpucHak6LXy",
  "key20": "4b1jLCJdj1UQB2Uch6n4HaZievsaMxoi9RAjaLXHdCJynQyg9rbp7q1sSGufSLt7Eri4wf2nAcYW7tnMpWhnunJW",
  "key21": "2ipZ4go287pTdMtQ23H4thHAsngFzuLFDWBabnKsudnSCgYyHrsmPWQbE8crCRhcFeUEV1v1NXYweJ6D7mhoXzZU",
  "key22": "2Z9c4UxhCto3rS7ErAWzvxN2FpxKadvC67JCmvHT64exyqj345kRsgwytihUHm1z3QisXcAohTK4chjg3eo3arQN",
  "key23": "45PKSfBtHGXbVMbMmBtir6XdFtuqPnbujtk4RaD3Y5GUGF1TVMb7U9LP6ai8fjJLkX2TtZgpQ3KDyYUJDTrRukfk",
  "key24": "p2i9WyAUTHbFnDEWJayyyNzkDk7YZVtvwirRxfeh6R7vF7W5GHQhXNe6GmYqmUsuwUAuz5QTW6A9mCfNutWcwnU",
  "key25": "3QrbNL1Jsi9k9Wf9VWfbLwpfUgAcz2tuCqfRyFtSk5df8g8rdmCyz3VqXQ9j9kDHfkT6jumUc1SAnUyXMknr4Hzv",
  "key26": "4jKWYh5jVBajuCZfqzjXuLxJbz5EqU1MQgahy9HkfEN2Lr3TUFiFYoq9svv2mzMq18QzcE92Z6a3RtJAqUvaLrMe",
  "key27": "5HqWjg5HqbTGFQAr2cc6HChCmzLVQ7KxhtqXohbZfdj2Z7U35drU3MjeFwL1X6nXvLqaYCZx2JNWE3pwpEUtHsPz",
  "key28": "4tojh2KCDUgK6UbXM5qHK5C77HSbXgDCNqbxxETG6UXwdb2JmgWYk3BfrQS6zaTwqWf8j86YBc8E2Zxh6WhQGJKy",
  "key29": "4vVKKGD4QgqondTugkqR4WfirrKTwEVYLbkK4sByFh8AWYzvKBfGd1u3RBVcZTGDgyRX1fCxprCJbMsBjeF9oR1k",
  "key30": "37M2i2263FAAcCbikXDZREqDx1pwQ43kRkaV2wcXN5pnvda6w9gbPQnihNCddRXeEqJ7umwkpLZgHpKgUJT6adcW",
  "key31": "2aXD3SgoxzupMVP1gkyn77G3HZT9srbx81ooP9sUHqk8YXmHJXKdmi2Z6GrUCCm5H1FHMBsYvyJFpdATCLopAMdG",
  "key32": "5sGzE6jrk1q2GJRFFSzLAUxVhzzUBuoDigDJa5HTn8btwe9BtrFFPynYhaTtCdaVc1gmm7V2V9s5326wnQ2nKWt4",
  "key33": "4SLyvdfyh27dHt5XzaFi7ebp2GCWrC4ebeboBPJThZz7mZrjXJ4J8pu7FvtVa2nWUB8R2XXcMvjk8PLftNrgX6eH",
  "key34": "3sLXbsHx74aiyooezZ9aNubdNcQeL1sRHymxk6PSFKxCLRrQt1nJq14zvjBSuXHXYS3QU9KPWagJmTcdiAMxeJAp"
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
