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
    "kMir7nEGR51AML5Ug4SHWZtYUSrGqybDcwGwmSPQVSQUYMcUsHAPRYBjhBn7aRmE44VLKJw73Vu9Jj5vE4q4XNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XS45AeRCVFyRSZgXzpYyGhhTYgccs9ZLXkHNAA9b5DFC8sJ2w2Cb2fwNmV7avWN8Y77tCq23aJ2Qk7B1MYURZ4",
  "key1": "66WZAHPP7Ej2bu1ategpp6DKcVee6WqbB9ZJEXcwCCnbbsge3dcsWEf6xCnZrBzNatBbksktbucesa6c1oU2VS2e",
  "key2": "36mVkc63iBxGQFrUfE8VdGquX2HPrHPiXxN6GtPZ4dSd2tAeLjJwXWaWR7tiydvfNmrRoTroaMqe6ABtaEsTR5P5",
  "key3": "4Zdyr9cswYsHSBDynwJsppGm2tVAAUAp4gktaNJbhTmJDviMbfw3CAxuc8jPDfRA6NxjgZGdRSXGi43E3QJFt2Ds",
  "key4": "Qqh85xhiTA447zUuZ1oLquVEkRgYbma4VVY2YMofPaW4XXscmhSwAnmKzhMEzHXnRrLTPnempsMd3vZZFi6A6Rr",
  "key5": "5nXTT1iNAQhDgpQ7USsu4rf5Vx8RXuBDokVSTPjTwVcgq46mwRsZWPSMYFSV4MFP7zgqDffet84f869gZL6BipJR",
  "key6": "4cqheA9gtQUWMaJrWHJz8mDwmtGdc61hAFs3Wm8CRtDqAE145upTYUvAW3PGzZXXAew5cQApvWrSY8zK2LFAjf9g",
  "key7": "3ybSYTaTgEGrZhhXKTXYoUh9Qdqc1jfPPEnCkNGtxvuCJ2mvo2r81JYyF1UoHDxApo6GCj9cD9aZJUgSx8EocQ3Z",
  "key8": "3jLd7q6XHv2qaM6KEzZm36WbgswCzrS5XinKRVqM4Z3PjaxhJ3KiZmJfDNZjSLK1HmMMPvRZ4nWS21prNhQpYDA",
  "key9": "WdgANmsnXr4GnwVP45bVjssuSNqAAt68m9XqzK4YR6oLkSzYXRMD2PdjML8PG7Jru7MUszhhaaJDc6zs4C6G1ti",
  "key10": "38MHf5aheqAGHRz6B6xiUHLqx81e7Yi9BEWx5Fc4dN52D8qptbWDch1S1nCKuAYznjmGkvwNrWA5GpznePHDBUMo",
  "key11": "57zKzFkuowerCY8xmyh4wJrKUqS6LuwutF6P4sG481FdoLKYw88ffWerLGqHHGuM7dzeqxrK8br4e7neCfvNRkFK",
  "key12": "4XdL9hu3HgtreeunYzmLYTTsMtGkAQpLPCvdZ3MTDgL6TVMq6omZ9MXxzxGZxx6BqGknf9wS6bnBnTUmp2owBKvC",
  "key13": "58mLB3Wh5Qq6i1qs5nFYZqed6QGGrDF6dNcjkw7L2RLU8A2x35ckdYWU6akrzxHopF7zXriW1whBUzwTTpCU96Qf",
  "key14": "3ZDRiFxcDf9BUup8KGxoRu72396y1z94iQtrgLxsHY2VBrM8eRuHaDoRgPm1SR54U1H8HtFiq2kuUyQB9RijBQ4w",
  "key15": "yDHpF4YUtFUYYyxudHpNe8mYw5wKDog4kZnntkHceomhTUmcHhyF9Sgc1iASqJk1XfvDePf5wyWMeGUjoMr8qFY",
  "key16": "4qMkybv9Nax3wy7axdzjsyKBW7VPfeqE5yCjd5Arn3jLsytyiyUUJKz1yPjFgkuaTKb8a9iGCGRR6xK6TyEoXzsi",
  "key17": "2kUmj3bLjgfZKofnjYLXL7BCuQ3BCHn8iLUZNovmFusb9thwYtizPtEKHzRdssHKas1wLF7bUKax5CuM3LMJFBnG",
  "key18": "4vFubq92XUJRazZREowLv7pSEtyWznfvPWTSysu8bVQdL6Zx7azyYQ48eBLfwLgvsrYVq6B8oLrhHMz5LdKVF55f",
  "key19": "3yRgdjaD9xNypwYpvCs1xZQ9NgsNJfnnLeEa7BBDr3uyQGhMcJDjzLjkM8xvGc6ERZhRaGJh7AWuAUfMXFTxZ7n2",
  "key20": "5UzbRbfwCc6xLy3YpZaY5mrk7VJXJBLffwWUvrNAipFcTNSSgNLdLfEtonouo9AV2qYcq16UhDUmp8XC1TXbtK6u",
  "key21": "3WZdaX3Bm7QmsTscKqnZS6Cmb2pFVmLo5Gah4jUtLuTLRcDG4fgQhsHGThR7f1EesCLjZuxPFPzTLX1hho2CXUVQ",
  "key22": "3SwKENR37Jxk7XJDey75L8Q5jFN6MmKRem4vNZdK6qv4pitcZSdcS8CtbfFU4QWvbREGcrgSEu4cNQjQWJiAtFFV",
  "key23": "3goNZzg8LirEgcqRFsWkH7nM8QDE35AvQL4sgYy6EDCNhU9juzfKss1oDJdMBPMLsi58b1XQ1fGeWhCBcoM932wA",
  "key24": "4PDcwFWgHfkMNbp7U9WTdRxbNu9vXy1LTKzeFcbRGiT87QM8zpScDcax7AaRhvcBYEh17jM3DbGfGt6T4mt8fwaH",
  "key25": "4Jc1NadmZSVJycVzgRvbbqFdDQofTLGo74nWFkxfsrFyCr2uxqJmc4or8ZMfhwnLL2o9kphZLbPPtfxU5a4MuAwL",
  "key26": "4qJhuKQsXYzXH612TGvjSjzJHzH4p9ZFhf2H1F72UqU7j25KdgEiyZ2wgE5BE4LjGnfARsiuPwN7NCSBAsFy8tHp",
  "key27": "Zp9EZTbxmTHnBAjEFBxYEXnbh725AA9XUge15Bw3XJARTKND9XGTxw7q7hcex8jhNxEB7xAaB5zhXTRE8beEvBm",
  "key28": "2cuwv8cPgbDAX3Gp9rArjYNZ2m7g5TqHTVvqqDvs7V9J89ksqwBVYukv9iuH4Ldmhch2XpHruzVvT9m2UtPQJosZ",
  "key29": "LP1Yx7Qe24HkU2TnRHLjz7dsGsenaJ8GBJDJ3emhV3iryDuBvn66ubGs288PNAXDuLAwEqKFkAZCaekQUJ9zFT6"
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
