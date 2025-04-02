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
    "5tMs54n5V1jqVsWFpwy7bUAoA4xd6BiGSYWCPREYga7bdEWUcgehii7NzGRdAQz7wgKUVocdWv1Qz6wAjCfHAAo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfiEYK4NzQr8i3E4GJP4o3nZF7KSuv6oxb6Fkemd8VE3PVpB2EYXXpvuJJZUTafzbm6gmzWPaGgBuH1w5RvfMyw",
  "key1": "4ooShmVNYVtg4SDR4fhL2V8o4KZD5EdAVhcwH32DUHAMkkdHSe2TRupJx5veDMuj6YVbp3AZ7asegP9dUoaCkSCL",
  "key2": "3tNvhWJD4cXqcrZzkjfjCQHToeLLgjcvhwy8xBbksoUF5fS1uFnSbRMBvMTR2WxQwZhP5NAnXeLuWxfSXYUCKt8o",
  "key3": "4zzw5DJaK1K4QEQ4LVsch2EYNqqNH6aMe48HSZRsSJbsvdiRcqnWZcCB8vvKMpXjEgsAkfftkB7GhNpUNJ4LKwG4",
  "key4": "4CJ7tS8PHtwqzGnJVWSvhbL3ndbQVW41SsMgCSUNiET6yE6Gxkp6p2nyox6ym9XYXGrAzHcj9QYucx8s3jkwLmk3",
  "key5": "tAjbzeHbGTnwQwjNorQJi74ZwY6Ljop8zZXfz9hxrX8ZYXoTM3ymiAEQfFRCmdeiTYzpgXrNHhh1hhwmxJTwqzo",
  "key6": "3en14LMzAKZW2wTW69Hv5trgqRG98gQDtevccpRkptEFatUM6TMy86TxuXdEuBT6oZi8T2aPtfge5Fp9TwsJ5hes",
  "key7": "JGVWfPywPatXKvXwh4jaygvW6dXGP2MtnL1UDJEni2t651xkRKJ1ZW32L8VLryMXotQfmzJ1pk4oPB9KBputpSA",
  "key8": "hvbqRoafNfVqJi9DcR7Uf3TyHxko2tUC3YGJkiPEUZnSU7Cr6JqeTtjWojzZDgrJVznx1H2En2Q8zgstZ3V4xRo",
  "key9": "2dvttfm1DuLhc1sAtwWcsBFgWR8w83FyqHCWnMheuLB8hK6DrbC9RbEHU9MUaYERcJhZWBvy7LV8UpnAMhQwiWm4",
  "key10": "3wDTWXDtv1iW9EYs7QNyT5ZZCMafqEbLjPSMZMcnptpSo8RJvQmTuKw6AHNkQ9DYUAMNdZYd6eYsBuP415XNYyRZ",
  "key11": "59D4bLhjV812R94R3zgvWx3P2AMLH7t1qqQ2W3mzusJxhnQ7Rck4oSAMkB7uwbB2YtxZqwZVoZt4SzF6m499kwCT",
  "key12": "3dBibChDLAt2UbV2HdfRCvE8GGiWrSTJ1XmNa94uvPPAoG8GiNCdwv5uLCpFxWob3VxatNcjFdWYwgc2U2H8dv3n",
  "key13": "ArAoKaVxQBZkreBB62gjtmaNG7Yp4rLZodWpR2t1jUy71Ze1DiTKgthybcgpBPTk2rsjibLavzHN3A3Sf82ZsUx",
  "key14": "4jyucw2u1hs5xGy693gCGTGzrrK76EXibVwJnTJPCdP7iFPoxH9qdwwdSxYfcUzbb4S6D34eibxzGxMTA8nFppGL",
  "key15": "5veFXMA5Hz8gPqmaGjvkkN2FN8NPcxE3XxGVHcDh5BfQ6VosLVk8eBEx2LjYvQiHkdYaWY5bGWicF8i7P5XKWAcD",
  "key16": "2vW4UjSPYQxetoeF1F2VPCP8uB5adkyRkwM1P1wRRrzVXk4At6x49wguWKhXQ46b7A7yBfWGrYyT9stJq7tr6HUW",
  "key17": "4KH8j7LqovK9aFafWjkUTwtfXc9v7g7yF9QxkT7ob1B8sRuUXphWyyi4trNTEpbFMtnRBk7UVjCPerRQ5ioNHKyx",
  "key18": "4HDPE9mb8YqoyUB5zoQ8jiFFug3EkUdWtWYEScTkxBsgD9ruNVkwu61JQU9XRNcbJNWv4Urv4BNBtPyjk9GwByzZ",
  "key19": "4DGtZN7DCic1n1wWPGdMDsMeXW9wGTnXt2HvMgHcfYMzDK1XJ5iKjKpJrjD2xMq9t8YsXr5xBS7RmhPsV7qhXauv",
  "key20": "2u5UWuttVmHRiHdTuP6ZkTyDVkXLtjJyub7BGFJk7JwS9rMy4udoCDqESAvrVpTPLtQDpuSJYJNryD3hmESTyq9n",
  "key21": "iKGAaMHzrvuRuKbK56C5N1GqCe8Y2bKsfRk2DxBXtFQwTvb4o673oCeNj1C3r9kTcyg6Dn3YBDoN22xogPBAUSr",
  "key22": "5wAsiY1KZnGbkYDnq5eKX8s8MoNDcqi68bEuh8wyE9ahR9K1ajyd9uqGyAxPKHqNd4xentaXniED4aduEvzqRNLf",
  "key23": "nDWS4gXJXFrECwVwgESipkgkQiSMaGFwwtRyqbdWRU8qQKW5ggDsP74m8ipjpo7MmLXLJ1iKtTPYZu6gvw854ws",
  "key24": "46hAqyCdr8WACHmNBd18Xa7Hxaq4yjCe55kpGnnNjZcEbA1qTj6L8Zm39k7LV1X6feqS948WCSLMQnyh2fFwVqhL",
  "key25": "38spHsqr7MHdnjBfdEbSMv8mTBrpfZ9TSbj49aNBHk7FDBhkz7Zsm129h6Q9wc2HyA174PQTPJTLtrHDwo5cye4m"
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
