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
    "Wu19b8Dgo8XeC1m9u2vmwTcPEBx2rvwBX5ioLy2tVNKH4YdaoTPx3V823mSH2X1zRT2t6wLQnLJbspGzmTtr7sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUizs9ZobDPFr5Bnqz8T3LHEuSFxVJZZnJDnZ99NHwrgkaQ4QUg8QQRwCa6xygXVCx9BykFuq2zNb8oDkFT9aRY",
  "key1": "2BvMoYw7V5k5xT3V4yseac6i3SVznabvCU4bAFKwc4UN1us2BD8gP5ga7iVRwvML82wgLMabGSNvJU7Leq7gbK4N",
  "key2": "578R4DVx7T8UtuFVRj7rSgD5PaZwrLKnayCFPR3XCsPcuawSZwNQfGMcDQXBjfb3eTftHaBHivEVaMhTQkmNSN2q",
  "key3": "5hnqtQQq1qKZg3KPufMpgGAr7vEybrow5nMzwbcx8UfYvKNMbmzx9sETsLSj2dbXN2ZrhQ721D36EkXkk3idH8vk",
  "key4": "vPvhJwgk6UchJoPcB7KDUYjoxfz1hv8EeLR8FViuFs15g7ef5qxgGa4xfGsmtehVdGQrsEwK3BEk1QpRtno2jQV",
  "key5": "46zB84c2BNpujqZWSMRGhZcAViZPnuHHBwKsQggQgo6USzACsY9djLFUgVhvtozGs486qExdJN9LPLbX4w5HfoCg",
  "key6": "UqYsrkD7nHXhMB8HxzUStk7J8o6xf9aH9aKfKGvz1UePNekbiC6xa3H9RwaT3pLV5Rv2ps78PKYPLy9VcDGmNHx",
  "key7": "2xCrzAXN1SK7hXGSgms46zNEAmC6vjNuVfmNjCuBSypqXLKwvTSe4gc2FrQ7EjzMYfTQdi91FayP6m7qBGbjNNwq",
  "key8": "2gboSKi3koKehAsvhbo8CF7KPgdajSLWn9cY6U7BZe5RGQpaBC3y9y9dnovtYVzw7Jp9jC2V3t5RzWnprjKhofQF",
  "key9": "7sNJHyuvYmUG6yvQcc7W4iKVCNvwvYKvNPXMNQmSUu1yXYGk73BC5P7q1urFZrBg1bETLL3YeQEQCbjoccW1iMk",
  "key10": "3NE1TcJf8bqBBMnRXQg9Qo93uaw7TNR1bbxv3sCfp7VD67mfZB2WEfEw3tuyF262m3qDLJjamwuTtZfYpPKgpUFw",
  "key11": "ZjSRcn2TrB1y9ykvmtxjKZSwXZAwoBjSBSaJMgSnTtenZb3XGpdAsEdtB6F9cExopeMZvFTSzd1miiWX6DKEnHC",
  "key12": "5tTcCz6PqG3zWUfTjrf44KDLVokcMP9G6SiXXWP6uWmxX4rqeQUjCqHtjo3VePb3Q9WXjwUYTYiWKp2XdmQeepQ8",
  "key13": "5DcXQ9EAJBjzYD5BhJGEf9sHLi6dSFsHi6EWTdBk45V6DrYasKfFgTiV3cJhq8DjAx57zYBY9CMrEUvzsaMahyYL",
  "key14": "5esjYoHMCCsGnez1B8uiELCTokeswuzSNdGeYJ6HfXf7vAqheZMEcst7HmXeBaDXkmdmTovBr5F8oeDMMP1oR1Ad",
  "key15": "5wW5xXEsxxShJEvq88KfgvTV8Gf3Xq9wv7U3otRvwmCcd8PbgSRWAgAHAA6JNfw8SFVhFttiKEmnhQR5PemKHDAE",
  "key16": "sgJjqMcxYL1dPCioJAf7PgWCB5qpWJH4CnQ3EAUfgnKxpQK3sJjDGfxy4A85g7fWucpVWiaLGL2uskxoAn412NT",
  "key17": "44ZnQ151aVdj7oXbd3etysHD648a5sHsn85ePpSCs5ps8JyHeJ9ymH8c1F6hwAszSw9vH4f9KJyfgd97kz9pWX9g",
  "key18": "3Et66oXPm6LU1Ji6tuEtgchc7fW8Mwe8ggkWz4wqQXQzoWw952YzFDJEd2qZgH6uW88gLuUFswNdptZ1dAuhd8Yk",
  "key19": "2MRdSrTAXdpBELqGez7RSNwhemNnpbgU86V9TGQCe4nbyZJHzfSUDH24woK9xp4TMPog4378fXimr4JzL9U4upcw",
  "key20": "3uVetywc8NJVhbRzRFuMyKksjDAaEGu8dMe6xNGzmyrcPD8MtyohgrLYHe7AoPDS3Vjuz23dXAEBL8678NNZNSo3",
  "key21": "5AP5tUzZpp894KJ8zKBd62rGiDWP9YzVk3JuPKR1T437mn2TURERVuXBgwsPySCqTK3EqWfnjeeevbCDCpreP2fV",
  "key22": "3e6y64a6pSAAkxkBRF1W5b6PRHzVC7dKHkY9jstcu547eyVUJhwHgr4iELhRqoeovj8N2ZuAaVziv5twtvRQ8XoZ",
  "key23": "jjk9uAfrSEt78aY64ALKuYajEsnnMa7dEnUyTL2A3TCYLQ6UXfe9MponVHEEQ5DcuT2JzVUBEq3qYAPX9GJxPZg",
  "key24": "ie4zV87fTbtBasWoBKy2eHgtbbnSs5gf82LbWFgjizHDgzg4hc9TCKZkXcsEXW1eyoXinNqcVuFEjAuqQHVGbMk",
  "key25": "3BVfSguKQbBWvRvPDtVGn9cB35Wzb8r2pY6fuNQBoH7iBjfmjPGJELtdkbPQkeU5RQ3bQ5AfuHDRrNWaLf7v9AZn",
  "key26": "2jyFrv5STgkyfaywhnGnFhAssD3k4nht6Keg2iYvcvLKuf8yx8NcC15z87ifYaM64G5yCu19iTukzgWwHc4Vce5R",
  "key27": "3gtTv7fBSrPFSRWaSZUoKEkZHeYW2Acf8B2DCW5kJywByn7ZVSf8cF5SYQwdhiqXFq4RL357zMqmibyGSBFNxm1m",
  "key28": "2kkvMxJwYPMdsNKpTCgKj14W1Mm6MvDdVqFoHW4yp9j2YUMjsUyQ7p8qTS9rKpYvnbCWab2tgcCbA7tuVcwqCEy7",
  "key29": "LsXLYo7EEPBtTSjxx3naQDw8xw9SmVBVwMsRoWUcU5X635sSKdPnkZ21x1nyMiPgb5n3N7TnDq6aqACRGV4GNNN",
  "key30": "UeLZn75j9pSuxAq9QMBRo8DaBLP1WK7vq4LCaCV9ip2Ns9m3mMyxoQydS7QoCNLH1Kf4rhXQjuFiSpXeQe9YBFR",
  "key31": "43V2yQyk6vxGpEFhM7NYc7Htap1FcCDidJXVygt88u9WfAexhPtvzrWUmJgijFAmQEqTcVtX3E4J5U5D3CeCMVx8",
  "key32": "37wuCDUVtuYBPbzCAUjEaHGexeytfqEp6SSPAtukAmzzUwDh4mMpgBqqdHzJgwp1RkTxsD7HehkZ9VLqFFWgfwz7",
  "key33": "3jmRWu911ZN9TLpbTWmGvFfxTahNt6gMQuZqKbqg7qoh71px9CXYy6DNZ4UvGUuhqFgKcJNkiUwYWfwFTMb9uSmb",
  "key34": "2K9BdsLx72WEz9KC5XqEBi3iefz26SxRB5nWL144vwcfouWfLU3VAJcWFwAApY5VgQ765V85zm8ajdyff5yARgdt",
  "key35": "29dSCzDKNjZyGhcL52PiVw5rysAf3DfiJLr7VxWyw8ABhjd7Jd5GuWLPFjk4kU4QzBecB1fHPHQpJi3JQBKYo5ir",
  "key36": "2N11xPXPtSHERrinMus7RdQbG7rjAVdptUbEAAfAQ8rRHBRab55t2RjNLZVTee1aoEHH67m9AJRyMfgPe42yqEEc",
  "key37": "3rGudMRdiECeEwhSB6cUDCc7JweaL4tz2QrVbtaVmh7TCLZFyPhxt7ojezTjZSyJXy3Cy3Lp9LNj8yLhETSxuRZS",
  "key38": "4nNVc1bLyPUakuoqy3jVknuUUQKE97KSP9JYj92vnqTzm1kK6UzeKg4eivipqtfnH39T9Dvd9wCaX8cYJ1tL24aD",
  "key39": "5EieMSEcZs94PricekDDbQqCQNs6C1BHGJGR6cTdUN8PgfUeokCx7NFoRtLFARGsoaQ6dxf9dQufSQkCR1B2fpDA",
  "key40": "26QaHxS3mV688C2N7Wn6hCDNf3s18wXXTqfGuyPQrpBz81YdRd6wvYfUVgmzB5ons7kY4fRSv7pZivtFAxSGrGns",
  "key41": "5Gq929c9tyvBGQFSVDnAJAk5tP2kAbvrsZzUSKtHnEM6yhFcAfwwPafXDiMHm4Jhk5oTJWgVzbRu2igrteqYQcTN",
  "key42": "2NJrntzhRVrKmPE2G4fMDKWAhz65VbPjUgtwqrv1N8D5ccYVx5HCxokh9QpQsjKMCcys3CL3Pu88psqY7GFfEHnG",
  "key43": "3GsS4hqC7NLYqVpK5AWq6aE2A1HK4p1QeQN7mxuh64f9GJEdSzo8SFzi65ZWqRWtpWKZkd729XDScnVXH9K4Es6Z",
  "key44": "2otG7Sf4EKsfSU48emTM8T5QNwasGmy9UyeoxuZLkvkQzwC2otSp76cfAqQ1c777iqdLn3GjYiWA5eAaFg3mm6Rx"
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
