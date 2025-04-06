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
    "3SVBL3bauGMfsAkZTwwk6FcJfBdCPN5EUUCEixc5bghQBzCkLHUCGMBcycBydyJs6ADiRNDB317SSMzuqM4io115"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtuSkNC3nS1Dqr5U2ENi5Xm5tJpBMktsLqT2oijTS4Cx6LD68QjgrQoeZ3pXP1rUqfCUS13iENpUzeRKyZzRALZ",
  "key1": "p9LBi9Ke6DzhgxxCEzaWjn7p2SaEo5YQAncAwdfD42H6FH5NZ8D7mWDnnCWDFfu9SpZL3crh6LNnDM5qVFi9Rix",
  "key2": "2uYChJycCm7bepXTEbGnGwoEXkBVbku14rVMfFoTQmHz6Wffj4KTeB1WMT9v1JfQpH72W8AFkuJfkj9LPQMinjaV",
  "key3": "2yMB6nEzzBLeduSxa4aGFb3558k8KCbMo2KZtqcVHM9CPoeRVWcQv19Uyh8LRiM16n46XzrDKzBBYWB8RW1gBSig",
  "key4": "5Qj6HqhLSD9mGkxgEECQyf9bMG3ywQ2YSW7RwAxtq2yjRzh73TWPFWN32GvhH74HKoriyXkzwbEpkwSjPsAk9Jd2",
  "key5": "2YTpwrLVwhJoP78J4LPNzfVCZECSCKCeNPp2az2TrEpatFSVZtg1MZCkyAXx8Ntb7i88S6o9aMU5qppy9JxtpTzF",
  "key6": "74gPzwNaXmbwaGyey3HwcSvGTvvXWyr55r3uU1Ni9hF3htQ5Gp6qnRKCmULY784Gz2xEVwj8QeRUqTTCZXcRqSc",
  "key7": "3Wt84njLoQoHHtCmvMN828axbsp7ScwtMVryK5iV4uN2rrh8pPbQPDWbyouZVGF6mzjGU4FUcabUPFsLp6eqeAeE",
  "key8": "yvPFM2SBLRcmaxXjsSC644nxUJva9Yes7B8mbR2L65xFN9zXqZjaDFGfTmiMBg1UgjbQjNGkdxJSbVJhL4UanN5",
  "key9": "483kXPwgKM1youzpFHgYUYfyrfKoRqD4GH9DKbb488y2rZwEDbHq5qYLpDrM1xabUbWMimpyzQEdbd9FA2iBq9JV",
  "key10": "YMQwKXFB8YM4MTedsTX4uGywdnBKTujJ3P7fbZA6cZWXK73kTf2eiKhjr7BK9EyXLaN6oHUMCk4AV5fXcDbv1UA",
  "key11": "594sS3qredHXMHWpEeH3Wz6FNjLwmdhZGF5ajGrN2SH2Pp8XNhagBsjDLS1fPd8Aupxoque7VNDW58r4kksEBHE7",
  "key12": "4UEgVwsdvoyaX8vQ7yTEsPHUn9jA2Q5wwGMhQJSifnPpn9TAcx8JRwMmcZbHoGysuHah9KTM3ZhNMk3ESv775VFJ",
  "key13": "xWtivNMFWG6YTH2GaGARokaVDBsqzs75DW7nZPaD5YWqytjwD3JV6ycvRwQx4GZ9DSkCqzUeXB8TToCijfi1icA",
  "key14": "JMBsDavsXZwFfs74sKizQVfWphAGa3C2Y9kZiK7NAAzcrD7XtfMqj4SSSwLbqz9u45B1NAC9XDfV34T6GA8b4x8",
  "key15": "4EuJjEqheeL5vh87fxE7L6wFdzXnf9DzMZuSPoCMVvnx2spAGUMsmNzMPCDn4sm5YrYty5mS3naBJayCFuBgyPMM",
  "key16": "3EyK8sQ4od7cngXrW5dczrsqwb8wEMEkMsNLj9mgj7vfkGRPy6yUMm1AjVaEium575DLgwp9gBJPWWFiL763EWye",
  "key17": "4PCZ6tWbFXzXzsnAkrf9aXM27L3DDG41FL3P8qfvE7RjxfJmwjXkxvc3NANSKD7HVTXtYP9j4RTKJFeGvXNxJS8Q",
  "key18": "T4GJ1hcnBFj9mnkvJogxhp85A6gUNjKmuXkKGxYzzSLd257Az7uPx6JWopT6bs2jrRHSQ8PJUQHJGGPEnqzPX3t",
  "key19": "2RHW5Aa6uKqVEa3UvmrznAjhLiLbDagJoQpZi2MvKpn6N5Xo6v8upbshjUC9NZudRsupEhy2pRoGu2H8FGttbd35",
  "key20": "5gdGsrJJL1Yuv8hWrYQPaisPtWgpCCSVcAtaUBYS6wMQLJ7JDHpQ7ZGN4r7YjSw4kDPEeXuqWrXyf2Qy2Q4p1EfR",
  "key21": "3poVb5vD5pxPwzsABFdkNFifSpSnpUr57R8eLBGQxpYuWQZA4xPer9vShzJeEcqKL3MDac6eeqi7mTCwkxkNHJcv",
  "key22": "4vfRZjjLFyCbTH6SKHQL1rXB7m5b9Cj2SqxLMi8LEDtVwdnpXFQ7yFKM52vTh64TuMQ2FQz5NKkwCyrPpmw3rZMZ",
  "key23": "2QjpCb5yKPNxQLvVAWdgbGGuQsG8x5ELA2B5vZ2jXz4vfRPe3GdGgw4CeCQfGHMGHj2iZ3LY4QZmGbciFNuPoYfZ",
  "key24": "5KV28FyBgHwBJzutSyT1xzN37zm1aPRw4AGF9KY8AbMKN4v6HYc4opWdSLYVXNbKhWBUD7RqjSQQviwbvHiFSZXU",
  "key25": "5FBqCw1TNr4yXrmJ2MmsTHB24dBzZHaidiEfdqhMW8WEk9u2qc2FsWrTjP57Rs82i6z7RzJMbrCFB2m5EaVK5ib8",
  "key26": "2S8wYmNj2XjsM929hEgKGENtRL1PgLTvVAPE6AwhUwyGLHdjd3kZqibk6G8zhjcrk5wx7F8Ap2D1CanPTXxQEUJg",
  "key27": "3pmxZAvpArrriZrHjGTDc3avGM8Bn5SfcqS89v2f8edYZXCBkoFQa94R6M8kjrFHeC6YXh6kHJb9E7snA8FnS3im",
  "key28": "21jMbqFnWwqERSUTbgSgpaXqqWaLcXfdgKEscfbdHwiRXVcBc6ZtbYw1dS793Q6eQtkGyr4SHVAv7EnxhSkYR1zv",
  "key29": "hNxQfppVMMduibWFo4GZw4UnJAKNPRj9dPg8Wt1V1R22somtbLpynCAvYjqUa4VhoLVwNZCyBn7fWzgwrKciism",
  "key30": "3K3QBRAWSwWrRYuroN5oMo7Nfig3WpeVppaxX3RWoVg8G9R2HryELXJ4WLvvUWyArjPv8ZH6SXL9ZHL6ozDqR1Uu",
  "key31": "Fx7DyCpqXcqzNbH3aVLKaXkMCE56u6ixWrg9rDnjrhVFCv21fX8yaaxKgvWfnUStNw5WtZUsHYTWKJmLuCn1iif",
  "key32": "5F9ACefirUUnRs7x5bi4CQ7cK7LiKD8WJADwvdgbtQtYBB1Q4zgEdjYjm9HBi7diL83n1NnSBTbBSeou9jMnY9kx",
  "key33": "3TQvopjC9NF39B5D2UG7HQuSiY8GsYpBzpVYHzEU5zQb4Usr5UohKPWrQ8CseKnaAdNNkUuT9uNfkdqMSrtzFLyf",
  "key34": "2n8oDSRdDcKdf457p5wobYgRt3EfdnebQLEUMRVS3XcxQbBAMZxpjwYeru5kWw8xw4vFxQQF5ZzgyEj3yWqtSZUa",
  "key35": "uP5PctM7qxd6cgbB4AH4Z7gsvcbAU83XiarH7cTDfgj3R7MhbNMRxQANoD4eNQ34yoBd6enmcBxopyEyRg2Uto2",
  "key36": "4VrBFbKzNJcLD1QuQiduLreyfYvpfWd8r2TRx4oau5LCCrQgKf9aX77EotqxHxtvRsrVE25i4DdU4HKGWASDoz6D",
  "key37": "33xZ9ZqugbHfQqTbx6d3sNkL3hNs8p8EYzTHYLGKdAQqENdpRabpP4q7aVoVpPddBvHhnArqMPxFSQbwXatpbPxn",
  "key38": "53eYesp9yhZxjkQ5UFyHuKwcwBiwLTwTG36WeP7st28ikTQ3eKT7qMURhSAUYEyqbMWvPGhNqWuRS6DW43ccvvaj",
  "key39": "2GZZPSx9uCxPGgpPiXV9MD7Bwu6iGXQ8jYd7hsHBhiTuVoFdZaSpATWdFc6aMLGt4rZnzTBq7vEF1EQNgQGpccTS",
  "key40": "5FtYVLT684TDcoCY6TsWaynvWr3bE2gU52vi9hMwh9KbyKvjv3vyvJECJwQ9K6FRwETU2guhMYzhpMq1HtWRMfAj",
  "key41": "2grPmD842YvAf83p66st1ZPfsrvYtia7DEuX3HkDQgKaEGfQJyg2jMAhosKjgUPyfusmfgqsH7Biqosio9QeEfMH",
  "key42": "5B97kwY8uyXjnqZhRaTKzrWpAK1JkYkeAJi2UFmYG68Mmg1HQvZiZZAZLWmjvt54hM8obcpy7Gvqrx8eVy17DnSS",
  "key43": "2VkgvzDEjSAxJTeCF3vXFMtDBEYobVmeDP7zk8odT8uDbQeEwDyS3tErdko5W8rGX6UpSdbo8HE8Hawufsu6f42X",
  "key44": "5zoR1B2o4SNRNqLJZBdM5hZgxmg6fTfZkDCpZ4i1sUW9XG9YpQJUPhhLGNXZBxEgWLCcLtAtg2aViyn9wGbagDVm",
  "key45": "4v8k9vdMFnByEBEmHNz8UqEZzBzk6LR9NgE2wNc5xXbUqpXuEr8FB9GdagP5Ch9q9rtH4xRFqnNindJCA7TNvY5a",
  "key46": "5r8o8PQsAeiyzNuRADB8LhEv8hZtSpc5LEyfxqWyn5ZTdfZrj6oxPTgtVMuje4kE7EDGNT889pFfSKuFX6JEYxYw"
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
