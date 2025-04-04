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
    "5WcegK641L2Yvrdeduz4AbZQLSJWjd87Je2AYkDaYSeZEXpyr281x5hRYfgHMNH9XBjSsZAMbJGVgCSiqSy7udEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65PQSu9XfBGzPV1gbBRpBe1C93eeRpNz6atYWQzUYgWFEhPVeH4DYnzFcqHkSdBGVMQTMjn6fJabScXGsMjZ5mZi",
  "key1": "TVtmmZ1RtZfkhWcBWzA6wFHi9co3aYNzm41ycrrwzrF1MpJgm8WfHsGTEp2K8vscH8aEifypqtdqjEjigEEhFzc",
  "key2": "4F9FypLvpoFn7KfRXZ8y2SufXTjhLxti8Nv4BPETbVHDNkJf5fE2ygCufagwBoRkvgrzTVwP7PPMF1fE4d6WGqS",
  "key3": "3PnRvfHvV651zk5XtbJ5pJ5osEEFcSAt31bMPbgcWedjYFn89betHmv4gYbQaYRcS7iMVmK9V3gsg7Ztdk25W1R5",
  "key4": "5d9FQho844yPR9yzTRZYYiwKHwBggFzGaN1PKqTjKf2FUMFh9FyL389BJcWWnwyru4Tgz4WqKcffnpzLSGj4z2xs",
  "key5": "5wZmQyagxiNAc9F8zWwbCY8jyBXYBN58s9pvFUL1Jfvi5ypBbPG1mWJ7h2PhmmN5GFtLdJpHy3ktjdbZJWqZUKf2",
  "key6": "48mqYCNKhnMGWRtfMWodC7D69rAitzjBr8LWdKTZR88XporJdwaQR3g5GLzTD4A4D7i6rSK2qU3n7biDHH5CUWdv",
  "key7": "58F5NeYZeSuNSsDWPuMwWJQMLK9YXTJuWN5jAwQB2WqWQaxaTz6iSe2WxGWJj3oWBjsx7WEEX7xAu4WmTqyQZzdC",
  "key8": "kVnBVJEatctbYpFxdLfgrUEN2Jxj5DPFG6pCgwaxUTNjvAp6d1hHDJbwAaBGpigHExKbCpa98ykJqMUpH9pNbQu",
  "key9": "2U9Av6VPU8oKeGKsGLM5WkwmgDuJgNjrWnH77YxkZG4nQghGBGfFu84BJ73HSSDoS9VzsfUh5x8Cqe2tiqapBPid",
  "key10": "4Pkt3HeaDEunHNFvcVU8peWMxVz8NqdD5AaCrpj9GL1g8oDCUwu4Vx7XCnbQ2iSGDXrgQNtLNKWWETNiwx3VhwUV",
  "key11": "26K7umUQY9k87TQ3X9qe6VDLsjVayooU9f73DjniAMoVDfbw1AVe6b3uVZZyYtNWwwEkuRyhMomAUmT5wNNnDMn8",
  "key12": "gmEGjCzDKUK1vjuMxQSjVHxfLpj9s6SH1xNiUrs51BN4D6vJt7RUVjZPSvghCxxCuoFFtUufkBwqBPeJFF12yWG",
  "key13": "5Y9PY7mp9t291MSNXQNLgdnjcB1nRt2Jd2nYrDBTDcn7LgtdUsYw51uyDaPo3cB8ByNaiADg2dDs9xuqRBRjJg7Y",
  "key14": "4aTupeRgxCjw1SLNGSiMaF2jsL3HExJVR8BP4efvJ1FhMPafQuhh1MUBjruKdYfwXP7u7GzXXy3Df7dSARMKx1uJ",
  "key15": "53ELHU2MLqgewozqEKNkeiUidP3eyopHuFokhBok6ZiYmPTRb9z9NhJaWB2JcqwefnpDUiRz7s2BHxddN5qD9qm1",
  "key16": "5iJtm34QczaLxtbqDA3zajP8EuoXQA29hi6WyyGhYitWZugpjziXQv22PtvzDenr4mh97iFERcoUjgjcYLqM7YBa",
  "key17": "3CXi4qM64JskvdD2P1Tps98eUcuYXWh2ofGprLuQQwkjmJk7HNUm66Pareo1K9qWvejwsbuUfnmu9qdC2hfPfEQX",
  "key18": "5JnY5a79Ef6jd27UXfYBvmqmJNRa2JZyb21mt73VAALGmhif5BUYKtE5coKeo4B87Hq4tXXDkSADXTL8NcvaNWLD",
  "key19": "3BU8f33yug2oB1i3FnShKKZmU4vCsVzFLf3TzysocWo2DLXEbZxias73V1XEvh7CZ875QqNheSHFUUMcz8GzZDvm",
  "key20": "5ceZP989axD7f6zDAeJdPctQXdMoQrDMjpTuk5g2io34nJabr8qxLSaLNwKkeThMQ1kHjSJRHeRCzEmyD7cANKir",
  "key21": "2MBmMHumZKUimjkbnBuAsov1GvKSdtKQgaSn1kBeEeMAdUicdh6WNnuEqBNp66SNeptxeoe4sM29WjFTLgLM2HYt",
  "key22": "46TDbvv62c7iGR9bg5C2G2sZYqrxMv6hqNCCfscq1fauQk42LsVHCcEZubu5rPZJbpefABGaGMZx2U9PQ6kk6qY8",
  "key23": "2c1htnxBY2PwosSY992227xMg8Ub7gNJLGCdiX3uvZPp5kGQUttTMh3iTMif3yBLDBopSZk2SRyKjrgpkaofJ57B",
  "key24": "23WaxnJ6CkS4NAeH8pfsZMGu7A2LSTR5AnaC9Lfz44PFHgCh6R996V3x9xgEqhZ628ZFg7FvzqTUv7aRCak5GNMv",
  "key25": "zV6NMRaitsow1BDfxnC2SqHZGLnyZUpKZkqwWWT1RKVqDLfh8o9msm8rR517wkkHccM68M8vQ1sfYjGFimXER2Q",
  "key26": "5kQyvEAe7B7W2C77mkYRzTTTxihz9ptZbYh51w2dBrT5qnYGEN9pL51ZC7T1KuPh3tFsHf9JyH2tE2BzJw6Ndo1L"
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
