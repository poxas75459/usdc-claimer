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
    "2dTfK3EyYiESsGAkAr22ZR7jGo5EimNqNLCpTVwTh2d5Yis2hkyZ7My5w6igg368f3MaZHM4GxvdSVZq6VPw5oka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcYSycZQUF453VV4d4JXu1Y5CAAZMmzVh3aCp4sfeva32h7NXnWzW3UF4dTw8fb59i5Z1EEAi3NAFn24DumoxfA",
  "key1": "588jDBrTGqvd49HBBUZ7xeQ7cwBU4fdjk3DZQVxU46S5uY9rZdQBj9ALRDjqndiZyCtDsxQykETGYfevnzgpJ8B7",
  "key2": "5q3mZxV14tWiK6re7Fvwvr8Q1B8tRRPgadcz5c9sVVMeeR2fnEfgR3vPUNoA43pHGimXMEdDNT7SKCo1GLBLY4Nm",
  "key3": "d6WU1LsLYzEoJa3Dq7ijseYhq7w8ct36ujkSnzDcNzUg51npYy7JZhv2MmruQ2nYFimExEd8mrfvJsoLJhsvjSX",
  "key4": "2iWNqfnCDqDJcUkF1Qjk8vSV57GrxvMmphnJNxudbpTrycJ93M876Aiq1uPvPSCh9fyCpaQegZEWy5n54tx1upbx",
  "key5": "5VgSUvtUyUieoD8sinxsuf6hQSwaFEmUxAZG1usHCLvwMStw1Gk2YGrNNiHCsoJyAge7ya1TvEyy1rPyedfLnoox",
  "key6": "5SJa4o1uxdak8MipUYW6FAGkPpgJ9ab4rupc58PGJfysPzAwcouDkCAufxpbAe8jWmUGWvPU6MqevrGoSEw9fXyT",
  "key7": "42h3TFsHTu6ZZCP2yHVtU2vXEqJwXTckeFBf38fVQziSH7cKrdz9PdeWChPUGBFnqw9vQ7Kp49cj1j3caL3un5Hr",
  "key8": "4DT9Pmx3sqzLumkQqExNsf61sH79Xq4aX19YWgcd2tDXMp4kzFhia6N7o1rJVfe2pV8RzUEPxidhWJJeGx3r787Z",
  "key9": "2Jc4Lmrcp27y4FPEQ5XiKRYtZ41HiPAZpBWppASLsmgQLt1Zx3cK53piWe6Zj4jB4G7TyX2Mwvihz1rbuQJmoGqd",
  "key10": "2hR3CZyjAHeAPiGAAqLESHsx6nvRgQR4FNovyhWSSxJAFNTodvD9YJzCFhq6MvfnPFKFFst5SVsZ3m6J96HMJKCw",
  "key11": "5HCCxcQ3ou1guo8ZxqK7rVEiCotowZuDazqWs6KLyrSxDKcy4CwgGfrbRQv8qDXecBAsBEctA44LvgTqWGCxR2FS",
  "key12": "62nMVHoKe21wEFEy5KDQPzkZYKpfNV1iPWLY5vGPP4XkqMU8RmXZkHPew1yMHdUTTh8PZBQcVKhvtUvoTnYpSRq6",
  "key13": "3Znc8Ajo7yqEgoYqMuS5GmJK5XGWP8SdFmc3oxHJUX8StBNqsCn94QU75eZC6mZnANBaMQP3ERbds5XumAJ5neZz",
  "key14": "676QB6ZXnR8cphyjC7zM76oEcwLvGFeyq8AQStsMY7Z4P81UKCehJERp384uAHX9dAEQd7t8VqaqQ8kWXr5axFQ9",
  "key15": "5y1aF5QWezcs9v7sYWkqBq4ug1nUk3GEPsCU6FRyWG7kEeRbRQMjAFinC1bVv9vP8e8R4Ww54m4aQtxHnCUbCLAU",
  "key16": "ij9BG6jKDRwG2yA71Z3gGX9VqLe3acGxcxmKHMBNPjC4oPQKcAejiEUsKmhLUvLLvCNJJPJPe3GFtDyvEuT4L68",
  "key17": "5Vsh4GAnCu2jabzMzGW9LkxgdCpUNk6UcDeohpXn1Tp6iSYZxvyFibdRDuzCvqnbktVxWX2EN4FBSgSA8KUNmYap",
  "key18": "5JpQAnNRUZdsk5Q7XKhGAUL26KuTKLrkWGg7fegyQCGBBvvJEqtUcq5h6uBNV1A4GGccCwfsUtxJUP2KjQkDDQzL",
  "key19": "5owWJTaqwFTGRasyjwnPGY2aSXtb1yfrxoqWxsJi8cjZkNoD5YGXeFJrNkP61vN5Aa5nUxygFNkyrSP7M5dQAEng",
  "key20": "5Wq2QbNyHCeFtxe5t8NhjtZ4PryqXSAGSFZNgsEfoPjJVyaAdKEgpi7eqvwPw5cP1quxFYhDE8zatFqUHnEHs7HW",
  "key21": "QvsVRyZpjYJNUfRVFQepyjGqFzcFwrPA2mXBF1rjsnMr79NZLgR6JrjCBNbmkxxsaaFaGEkWMqARhziHyDTEV49",
  "key22": "yphoLz3MvQSo1FktUukMbTb8cX12daKy3vsRDLQ19gYQP8gMmgF4jeEoSdcBug1tCvtz6w2bsatrtg4fuZbkeuL",
  "key23": "5VC5JCRiRPs9iMEi9sSVpoHTUTYq85tyHiiPJEDKcZ278Z9kuFTLeoGoNkazCBqhCAFnM2GVP2LSxCAE5YDpKjTN",
  "key24": "49Ba3YPM9iENAoCW6wKd8Nxah6JxNaT44Wn9sa5tA3ZfGdqzi9xGb8xBfwTf7suTfgxRUZEXT3hEhq32jmRXbBF",
  "key25": "29pbP8dCgWA262nLF2FzE9bdtoMDpXd5FQbtcuSSCqJTcXwN9WQKxpqr4KAZEP4RSWhMgMw8cDGgz7mAYpU4WxUz",
  "key26": "2VYCsfcimfyH2QNsLxFYT22JKXBYfHNGrKMq4xSEoN1vat1CQmQVGcckzVjzHmVhEAn5UDndq36xDojEVsDgBgH8",
  "key27": "4GrSLTvD7DEi2mnP1LCR7jfbkXQ3HqbGzFie3QLuZQyhoY7igahHD4dRjECU54nevMkJ4zBsFM93oLdoHG5VT82Z"
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
