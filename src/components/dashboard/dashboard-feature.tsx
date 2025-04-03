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
    "4uov3nS1DqbSFPNyVdMVAq88MoowD6fWhdksXNo8ng75TcfpGRnR3kC3Cu9NrbxfFMQLpXN5hpRoMEgnAyRBC6Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgaSk5W9dJP44cjEL3YMFvMguWPhRJPdcmKe55KyBJ5c7VhzJB9BPiSLxDP37pywnmqECgj2jfePnEkkau5F9iJ",
  "key1": "3kQA2jEPLLzagVVzkY8PuyU5xLxm1YW4UwbroCLp9uRBy99haAPBs9JYFxKRgBKHkdHBnJTyRx8qgoVi8xGb6XZc",
  "key2": "3gETt8PiSz5mhfSA4Ubvv3u8sPHGZLpGQAipPsVjvvYWS8K2hqe5zueMrU3HF6u6xt65DzUndmbakZHvs9LD4Eoq",
  "key3": "5N9tG1PTzxcEFCeNcBk4neTnxLmaCsp262hQ78gaKi5ZtjjKLntE15F8e2kmMNkigkEuMRgYr9YHwWiUmcHXLPk",
  "key4": "2Kn7YSeNwHMSjnKfEoReB8uoAYtHugKFq6xzZy9WRwwEs3vCmi94EFLMQdHZ7RVmzSXrqWqVFrfAL6oHkEgTTzzE",
  "key5": "3An81rUeQrxNVdc5Ve2qe31J4RytSaz7YuZfc3BE8Nu3944vKpXyR5u3z783L75MVA8E1bAdkiBJ98c56cCpvESy",
  "key6": "EATrhogsd8XBmY4Xpb4nCWNg7GSqjEwFrdR8PdWQwLp3Zwu9wg1BrQuwt1wb8ZRHrev1itV4cSdX7mxkugQz12b",
  "key7": "51J34BdKa85DbPzZ9Jj8SdiUBnDN2cbJsgV8qHsLX1jCbVnmKc3LWWNgVydmTnYnw8xg6NLfH13icxj6dZD8rhcB",
  "key8": "shKyEp5zW5LeChnvyWMF3VyodvTxr3Esh2NsLc1gMx3YQ7f2BWdCuZ6vQuHxYUSJXRtVRBjceZzf8Zmf1tXZ2ka",
  "key9": "4VPcpMRRT9E56hKVJfVmn3ceYVZhBx3xozgnQv7s9TRv3zmwEntKizGtrZESreAFgKhTX7oiYEn1fxPpjrbivWDf",
  "key10": "hewXgxJu9nJetoDhRKycg4sz4fkguxh4shm3REQewj39BK8RSvQ1aNNDWPcchVFyVtHh753CFFnrBNdoFcynpD1",
  "key11": "4YeZy2hszqJdo4gLVzsrodEKYkK7E2QjVGWrrLS9bvJSD1n7eQtLGsKsictHrKguLGaLJgUws62orzZovKUEK67X",
  "key12": "4cChkMWGy57B6Y1E1YctJ7p1e5cR6agWX9aTvMpaRJAMQw2passfsLeBFu8FBhGgNKqAjbLeu1WCoWjxxcZeWEsf",
  "key13": "5KpoiSsL87yojmLH72G2LXch3zTRFyxs4ufF9qGSsSUHbzgPFHBuP24Buot41zSoS4LFLvEBRLuZgi8nysrmHeFU",
  "key14": "5U8CNAcZo7pRxp3xi7QND279aLjgA3BJkWY3vgF6iuZueYpfgJkDdqFS65x7zxJHEVQSS7CQ3p6JCCjAAeLtA9hP",
  "key15": "2tacPg7guQQu3nFKApfBSQK4o1gEnXVNDT2riajHptUMk8pPkHcFNvSbxM778cv11vnoiobXsCVGfenR8W3eU9v8",
  "key16": "3hi8VBJahy1KNNXjFRXvSUiWww2jfW7GTwjEdi2X85rUetnRBtdfmDsnEbR8SF9SmqoZCQT1LncgbHFfT472fu8H",
  "key17": "5VqTTYH7jM9upxWpk9SAu9dFcSSUxsSkRybNGRzvqr6w8MS7X9d6MJ75KSWJZGwbRCrXY9Q1s6HrssZMs3vxF6FB",
  "key18": "2qk6nxVNQkHdPQ1PoSTxPe3B8x9AM6TGNGLa97PqhqtMpfRFMchMN5RtHVA47RxTVqwiT5zMgjWCi4ACHi8qQY27",
  "key19": "2BYb3dhhMKApTYybEuQxUCLagMd9RhDiVpnyLMKmHjV5Rz4q7kUu8eevH1QyhMgGJ9wJkyYW8jAt9o4jVU6cv3Fv",
  "key20": "39zFDiEesnXbjTLbeRfV6BcrLYSzRKTYQbiopDtf8ZbpTkATCdN3qztSWjCjKw3sLgMb11NL9p7FdadcpYdbQkhm",
  "key21": "46UkZpELC85czSNd627iX3VjUb5KZEvsdTp3LKZnwyjykXzNrGd9D8rj3cW4ccxyVhR7Mkozf5q7gSPyYA3BnRkG",
  "key22": "3VpZh5jKjA26Tag57tiGyoDjj2iNhc4MkXQbkNpvPD2J8SsfTVNYqNa8vNRRt7DbbHBfun4o58RxmLWU9yNEwVLK",
  "key23": "3QQnhHhKyJh1uVA3zaG1j175cCGaiLxhsSx46FNeuQgt8tuigS6wtCmyaqw2bbtWkXG9M7XyZ3CfRAcbAdrCqksd",
  "key24": "4ioG5uZdK183DnuovNSVZHS9pDSzUGY8ZXkCPCXZ9CPErLthBBjQNYtBMv7XjKBs1EuAsdCneK32gkFU4t8QYV9R",
  "key25": "4S9yzuyNychbnjqMuRe1DCvwi6KzTcuWnRpT99bQdej7cQ7uLWy2cQ4gJGMv6mvMhXGCM9UHK5njGXYQkGYpTC5m",
  "key26": "4suCozukCtzn8dbuZcs7WWJYxN6Rs2mYqd34x7bf72JQckoVNoHpuTW59wWCHeCuRRPViABG2yPPDUaKwL5MYoUL",
  "key27": "3LVXxwXDRr4ieB6oRTfkB8uRvEaukbTkNbn1k7CvLuuoEcFcr857eLPyf5vmtYraRcyNJuuk43557Y46RWT9geTw",
  "key28": "2NmDzXUJP7W8sMVWTL1RdRLGM97MQjF7GJo5b9NVFSadD7c6HUNS4TdpSGjdiSriDWDNxZxL4MeVbePMJhZWeXsf",
  "key29": "4ivNr46DHhfS6QZ5uHuGerMXSZDrZ4V8aFBDvTBiygyzWbcRL4Fcj5tFBGtERQNJ7gKHTgH5yiz4furZX6sxbQ94",
  "key30": "5eDtbYcWQZeizLZHkhGvBGWKP8qNE7tUBjeu3rhFFA1GxSVQMAdWNWZQQKUuMYJQyxBPzr9oGF82oPkECNtVGvGr",
  "key31": "2Gnpmh1wy7iQygaFDxY9CY7G26q3BuKWqkeuhbJEW6WvY3F642gUxmZaZxD98V4DAS7dWVUJ912zkhgxBwrnqzdu",
  "key32": "3SNw6rxFcMfALm5ByutEfPEsySDrqjMazNLwQipggRrGw8UzG51Fsn9ufR2YpPmsbkhxykwUaTs3eAoQMNfKfsef",
  "key33": "4GcKKuPYX5GgzWyfi4RFn31qoCTk5z1LTdyoXXwiuizkep1EPhZoKxDU5MR4CPkfR4CpMGRtQnJ1jrxb117i1rHe"
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
