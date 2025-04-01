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
    "5iEtqG3WoRrJWJLbh4ZmcpQxYSXSEPEYmT1tKrkPbiVDjdgLa7eXF8HLm76fUyQizqonn9tPqrA3YvierSenfkb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmbNgZ15NpraPiFsUo8Y1zFRog7KthvLHhur2LiLBfrHyZDALirh5KpELFcVjUiEQedmjMcNbofEANaJptowmMM",
  "key1": "3A8NuHFPn6LFrmLNvaYvtCHN2pMZMFwFquZ3VGAQFLF3G9hJiBpq8Z3Kk8THRq9bVmtBXrTzVYEwEKb6e11bMchC",
  "key2": "3efZk35CQJsMWCzmRXPV9eZXkLnjJCx5dTvD4NWUVZ4B9zwpoc41rBYs8gZA1eRSpCm89pkToLZKvTp8oF8bq3Gm",
  "key3": "4gNtJa3CG3FHCQ1ZUi2ojWz5syF3ciem733PS2zoWnGZLeL1fd45jaJFGaRsqA4BeiPBoPXSFNZhNY6rjzzKUCS7",
  "key4": "5zZ5euoZebRBbtCYsQEZthK9rRit6DmbCLeHUixWq8jxK5jE4jZ6mWHtSEcW8Xrcarvu6jz8PNg9uwCpPAgspYFL",
  "key5": "3TwZfKSiUvekYbXnxsA7mei9vUXmiTe171mdJwWkEjCcDcP8csbmY3YFSMnejTYG3gDd3BtZiPNuuWhj8fJ53nuw",
  "key6": "3hSH8oNjqVnqVPgvh2xXo4GNpgvuGZUiseZcCTg2hPFd7WhBxjrZyHMiLs31fEYRSw2q7P9p5n27hFpGZMZhkpd4",
  "key7": "dSHc3Xw2RS1LnBxRfBf1iQ8Jwia4ftGt1mqyy8rzbxPLaU8ckPdFtKhTVzvC58QXK686hTKbzXo5vEgTsGMkjv4",
  "key8": "4zbVA6aXirBBFdDpnCmgGS7tv3YpYjhqNCnbk93N9xsf6HxTJ34mYhZAGmL4LD7njEM8jnBgCphERHnLTD8UhPPf",
  "key9": "23y7pE6PM7roFCsNQtWCG7nhqzY69Dw3P8xBP7gpAV8boAgAcpFtCNejBTFPW5qvDXDNWz19Zfa16h9UUBf25dLB",
  "key10": "mxJS7rQM6v9YGnNSdmiJQJ4ZAr6kAGBBEepEB2YqPFGuKt4xahdhaXUp4VMHFwPqmEyczoN8sfSxgfv66y6tFeZ",
  "key11": "zmLJdSrcDYakq8J9XDHkGB3uRLHmur55HGjkWXSfNp6kmensiex9C44W5VJQj3mhGGKN7XyYmKstDzy1GBbSYqf",
  "key12": "Q3GTDLYeTn1t1BaWFCSqL99qsjs6t1KhE3GhDk74goPMr2nNDuxRNj4pJKJmVNHFegp47nPjf3ukmtLsYVW1dvL",
  "key13": "2WWws1xYGMamNUoq5atkkLAxwZZdkcsnK8a8wGsFiQ3USGny4BXUMzHRW6acwAU7qzFXKWknBK4JPvpNqcaQWEPR",
  "key14": "4uo9gC1VHT6hn5rrgdtwUhSoiKQYbVysdvchBSA186cQQPQAUYLeWmJn7jbdDn5SLVmDgfiVW5A11tzprKscSWXr",
  "key15": "48gvZ17KWgzRX3b58qxmd3LqCj1Fgtcn1is933rMez4fbCXjVNjQieCStvLa7wB2aJffu1BgAka19J4QRkSKAp1g",
  "key16": "gQf3yat7FPiUpzGJDExxGUewg1TUn1vcR7ZjYT7x7NEnoXT1h9F5hLGkQFC3FN9tuGAccBTzFxKrka4HzmBRx5n",
  "key17": "7b8wmkLwQvWu9wjVmsLAsbBE9i5yJnoYw8GhxMonKUPy6Lw1ipDTBD5P94PrGCJb7rVztV6evFMWRC9Wyrn9id9",
  "key18": "5cFdKUvq71B3vZtiqJ7YPJUuGXbDCmuNKXptMFHDeQiTNubuEwK6AZZyGqWuVWtHSQB1zG92eX38tKQJUx7n44sJ",
  "key19": "514NMrSriNm7vrHMivfep1vNc4SJYPPfLS75MdLa46PxQACgyMN9EnHexP3zT29VL6G48vtorxgufjwcmG1asEDa",
  "key20": "3SqLFhUxor3UwLLRAH3uYYf5SmgN4fMg5QRMuVNuhrGurg8ALiZZm5DMoZjjEKhtGb9cPvFxDTVxzveEMUGtRLP6",
  "key21": "2t1LM8f13vHd1kUPNVzVM5EEaDiW4Nj8UtKRpJCdvGQMhKkT5ChERwvNjGFRgfX2jQw7yW4H54hyrpK9tfqrU8T1",
  "key22": "mt1ZxBjvFaiaKhR9xN52op35wNYNWkTW2T5UpHtEAyrhrmLjcTLVEcRMoQmwJtXeuCg4ZDk6iUCnf12xjyHfrGA",
  "key23": "4k3ahVvHTc3j6WSMQes63fjiVp4sHXGgitVVd1dq4fHu8oDFT7gZ7MCzwu42qaDXuEfbM7fYn988KwUNh4J8jVDF",
  "key24": "2JRQ2SVoc4767hDSPy8QYBTCiS5HwDC14Kopd2rXx87DMJBvtBLdYxGgf9HQbDfSrQzwzBZNhP6jkigP3S1P3eth",
  "key25": "58SsnddPePmwFuzPGapaxgCGdhiJPTbmJ9iE433k8k2sza3sJ6Jm3P61w5f1L3gRfWzDCaBqZRX3VzQMyTJe2iih",
  "key26": "2fdxZbRHjJs98NozpUfbj9yU8G1MnGgTVMkznk2TjJYdNzivabfkUTkjH1oSMkfzmSUMQB1g3MazD3Mme8MPoGAD",
  "key27": "z7aqDqzyzTNDFRc2Lqa9efoDcCeaXh14BQNcfD7V1hm3DEfs36UfQ2eNjdr9WiDFD1SxiPWLxG7mJo4L5XNo9rR",
  "key28": "4zTuNaENwqpjHhn7tH2rtaXCepGyz8dxAhW9L8ZsCfSGPWSwEucKDjUuLY46PVEchZ4WhSvFLBJwyuYHmQmfqVUq",
  "key29": "MTiVd8dGnxtANSwLKxMTmb2P1TKtFiGgBDqa1LKR8jg1QKpRkWLoBgSNbRrHLxAh9KqYkA5FAprVuSfii9icuwt",
  "key30": "3QF9PX8hfGbaQpte7f4p7V2kCByo32pFyPCQDV8Rb18VsswWGLPspdRHPeqoHPhf1S26eJKesGuKD6Bac796Heqo",
  "key31": "4C2rPDcA4atpTjvLrxLSvYzjyxuAdPRPvzQ17oU6tdyLZX7SfeEemEB7ZhwMaSDkpXjVYDBRi6ARwMPxR5kNroU9",
  "key32": "2WGMQfGtXKrCupMx8f235M8xpDY22KJ1v8QDCHZtB7zeqJewhWiZi167PmwFh9Wkpcnp6foxL8rAzhd4BNWFkbHH",
  "key33": "2LzkdjuMGZSTCTVVas1eucfL2KHNXCav1Ni4msFyye1AvsrVV3yTYhK8fHMYtHUodESwzJtaocUJkv4bcr6j14jE",
  "key34": "cRgED717urdrfeGvQhrHumg8fD8qSRhUnUMWXpmYF9nGdZ45T2wpapfoc8nMBFnhn1S8WiycLndVULN7oEWd983",
  "key35": "4uWXXknDdoTZqwaWwDWyy2vtNNwXwhsfyYMzt5qbz6LfUe6aMrMv6MhjgnLD4xbWzxjyQYkWqhkvemkQWZJXEaVU",
  "key36": "4uxZBzt1q1ZgTPcFhcBFFwBTt837TBKn2Cx1A6igDVurjufTGiuPfMWvbGroBobWzqWQs3qyFded6PQSP5uTCPvd",
  "key37": "wfeQuEVp2SkVaNv8NN6TT1ciWYXoxeZmFPyVVBp2Yz2UB1Rw1GtqpT4cmzdsjax1Vd2Ah9rRGPuxY2qgoYx7yS6",
  "key38": "2CuqxBaTJ28bx5i1jjuyfnKDtd9amp9kgJV1cg7JqhPcsdDQU7ADsWgoaBT8WGqyGRzfajSemTNLDVkeLveUrJHn",
  "key39": "36oPPZN3v8VskbmBHzV2erRTcNrLpsTrhhFy6d1BAn388sgG8pQFiZQe2KoT2CY4CdDZhP7s68v2BxfQpFzZKwRG"
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
