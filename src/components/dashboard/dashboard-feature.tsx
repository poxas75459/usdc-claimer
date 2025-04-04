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
    "Gcz7Vcut4mLwpq43TRPnXJBiq737jWCSBsJf5MbcbH6KVockYwWJygGaoApeXKHdiAfDW7gYkYFwdzh4fr2QaY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vpTa1eZ69ExSuqXnvCBuynSn7FDGmeNAXFYMZoU7pjfACgn2Riovg3LkfrTMKzx7mKp55PnTqa5BgfM7LkzJLn",
  "key1": "26HK4MKvzcQp3AdGPgRSK38ohN7ukAcdBDhx4FeJstagxohK7Pq6sTVC22qiLvBxCtVkBB2Fp29SJXdXrW3vt38Z",
  "key2": "31jGrqaFkmRKBim2pzHV6jU3zxMFCjomFerxNRUSSWz4gZcNsrxTLKE3UiL7VAmF1qsVHrpg7dZbBMy8PccTymwA",
  "key3": "oGj7XnFqJHebP9qbRxo2VJ8HKXzyXoTH13J3kNUWA6LFpvjzh8qpdRykvudqxrMYyQTi6qFGGPyYuiwhvkxbv4v",
  "key4": "ywj4QFY5wDAPeuveZvzfbdGrmxRpneGsvCqjGqezmEAnTvB957geQaUPpTZzLDUV1CdWfnoCF3HbEs4JZDfgtSz",
  "key5": "4uecREHu9RR7acgne49nMKweqogUmJe6vwmGZzdntvFyrYHRcCGbMC1JhvAwVHUJq9VtAvxzUYE8pjnnFJ7vbk8s",
  "key6": "3yN2S3f3gR2KMYpjNyB3u83YqmECfvJFV6pnhoECaCMHawQBYkuRLZnFwhYmNsA8Zq3yA5Fg376sfTftH7ayBa22",
  "key7": "4JsJ84ocJbGrsEiEUoMRQ5jvtQ7pRctHRMbuknGiNXXbx1bL1qiaCh51TTUdxcDgaGzjXqEwncLY2GWmidfX9QfN",
  "key8": "5it85eSXWSwu9dre1T6Hv2iF4HoAZAB5g1R1nmNRpLPGD8Uy8Ra91eviXxZvySwtmFRvVfgjzYHigYS6wVk5tE9c",
  "key9": "4Z85YcxasCatx4Gi3FoCg7ntsTFMsTL4FGuTjL2US6Bfdpfhp4YNLp6xpibar9t1942TVGsiYWheVyDr79ynC9k7",
  "key10": "5CUGYt2fnx18dy494f1bJxwfnY7YJeqkPfNHzEnPsSyZByV3ujwpkbB2HDT5Nnd7fLxhAzSytSPCGT4wfEcjzBLN",
  "key11": "5pP7a31nixdiawHhaJ4pxeMgJmiVmLMTQdJuXzVL5hFUkb8uDXx6vWTsEjWuGwAwpEjQvqnu2pagaNggeqTYECBj",
  "key12": "zfCqsH7HJzGh8NdZq1btTKiZ21JnRHW1MJS95cVPYcjk888GSob5JRtWRio2fPzg75sc3CLpxvR5UaZ1oKCArD9",
  "key13": "4q6LRHe5vGrmXsuAJ1irmGMjf8UjXKUzQ8EZnSU4DMYrt1yD61xUHvRSRugMLonRVMM4tPtQ9N6YwyjEcGHojbdB",
  "key14": "4zCTF7g4nkcmEWa9DVDz3eNGyg7QCu4UpHK9BSThRoFGRynze2tpq9VVow4xAAtCY5m16gXa1iN6MfNFAy3JXACT",
  "key15": "4ncFuggYQEDBAiemgjRiC2LxpEyaVKjQ6HF92pm3CzGbYKFCDhY71891LnKWrZcUo2WpDgpMUTyxqMvd5QWL8uxK",
  "key16": "2vmjuPwjZEPoqRmCa9fEneSqfn5w7baEpuhmvxikQUxkiwqoGu38hXZq2AMpJ2Ymhj89aLca55KTqJLqkzsQdmwM",
  "key17": "3dCivUL4NBzvqv9k3wcSvCG4z8dREd3YwZHyFaKQ3odNtjuuR21erq4AtZCbxzodcmq9fMkbT2HoTw7Sqe8L6H3k",
  "key18": "GyPJ777KcdmADyKWU5W3gYxA9hvt3EirEpf933nhfz8or8PZz7xAKUfCWPbWMVTdP7njUVTLafbMZ5DBXrUNvHx",
  "key19": "24r83GXNJJryaokVsNe5pXF8dPztMxv3QoybHwH5UpdwiPFVMLzwVdPwVwd9eMhchByykDgF5bZimk5vf8GjSs5h",
  "key20": "5isRXjSR7PMc2AYr9fLdenwBX7zg82oCsG4RJSKa6MneCHeunuqBsgBXRV9Fue9sHDB7BmW7WxQeTqtVdc65sVUP",
  "key21": "5U5EGMrzjT6yuQKzwaBQHym9JWaXTvaLrFdi5gsGfx5JWiynw5PDZZgBEJsyiGgbM318rgicthin2uaX3j7BtCWz",
  "key22": "2sm74mHa4UznD1Hi7N9K5bgxt87XYRjka1Gh8dWvagSjtwhVfhvpVrQCuCT37o18gJY2uqdVzJKrUPwjgT9m8DXg",
  "key23": "3vBXY7poL8ce2fcwYMaHkcfk5jsKoXvF875BtoeKR32vsBczM3gYZSZTzH65Pwxoz6eJfMFTyejGvCmbdSFJMUAF",
  "key24": "a1K1E3QXiW9bmuTy3xNrWoCunGb9uucgxtNcLkM2TEY7NFS83AtmoVf53gsM1SC9EgaPptfjiYK6J1QjZk73fXT",
  "key25": "3r1fGHBCCjHnREkLJmBmeYVTxLaBG9tPfGrFLuDBmq3wnGaHtTU1223g8L6soLjDsLrcnxQdnfKhSEfv9oA4qx2s"
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
