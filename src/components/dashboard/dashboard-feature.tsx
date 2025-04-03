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
    "3iv1YcxhdLDkGBqb6UzrEd5JnDJ8Viw8yYcUa163PymTdJt3jeH4qSrB2iiytQLLEzuxSEavLYGgcJwpQSzvgE2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7aYdeETQ27hqtEiqdcj8TfeRpfa7j6qg4tXg4YAa1L4ySUhybjQRVsfpd3ZjTqE99aeS9E441N13rQNjFE1FCR",
  "key1": "3bAgGSKYCjjAtPkqAwbF7hhvAGK238eQw2D6GTFco9DHG4MfsWfqrcMeE5iBkdu9Keb6co2FWMCUUF8ZUjpVzyCV",
  "key2": "NS7vjpFFGdtd6wAS6fpGJmnCQTq5CCAURCwMfS6DAC4GjLjYvVDSdLi3pfTKYWJDFVjZoY14Yyed35qyebqAY85",
  "key3": "46vWSLLQ5h8jLFjYAo7S18xgitc4xT3A1QCWgsmQRrgbDnnMUtUXtKJEsPjynXJzvkXXSauwTVd5sXCQzN59afcJ",
  "key4": "2QR7vEEtTMFcAa2QrdWmFUAKKEwPPT4sxgsXDAh75MpJjMiTQKjkKPX1jUrhLSFHCopyTaP5kex5Z41JHMZKuBXc",
  "key5": "2NttRcxH7k9XNnUUsBUXTpGuQeuazN5MTVbgJQTRpKejYQrFLDEU9ANA9NKxzRizVxhgXnZJUMq8XjpUXkfH9HJB",
  "key6": "5BXgU1ZDGScaALbAKKj5wjicGCPCvrw57tEXuhHev5qRw9C394m4PadodsLNUFBxm1iYkpjpHPFoiJYdjqjdtiDA",
  "key7": "3829woCAvBctQXVXTR2mArthymcGREYqNfMzkgcDxUD2mUFTLkVH2AWepgzadgssE5GoEfMtkYSjFAYhYGLdvuX9",
  "key8": "2k1rUJbqSuuugEedv3BGA4CxdCYS8XEs2TweaDrdZHzRqJqCQcteu2hXYvtjSXnpWwXmK33SvWT8QTZQaXrJ9m55",
  "key9": "5x4mm4e6BRqeb45ouvV7im5WKUrC8xwFgtuAecyFHF2M9vBsXpo377gLWGSSRBr4pfUvsudm7zF5X4rpua9jtkRr",
  "key10": "jJ3b92x8jVLHeHrTzojeRB2ufjSye1sGdUmivMezTPKvKvumu2KVfJHcsYH25Lu9hokB7X5E6jeNs8GpdmFw32v",
  "key11": "3Pb9EB6ED5PHzs3QFkgaW8E5dkzHx1SuSpgW18KVS7NWLeyYVaKyephzzaHFYhFUSitXZqpL5CDYJ4hhUxX6ymut",
  "key12": "2jPNrfoRt6Mc1mykEw9Gp5potPgt64vKbpiwSKdE2crk2WaWHwP5didX4gX6KWDXPeSpymS3zt6Zi8ckG3V565L5",
  "key13": "5FuRSRMLJf4gTzUFHx7yJC4Nbg7gHFvbDGkkdFkWg9fiwGcmfvJWdpEKJbBnzU16e4s9RjhWFCMMYvf7Azx4vnxA",
  "key14": "6ccTXJKYcRXAccwDd1TdN66MyRDAgkSQHiw2vgCTzZT2iAejvtbJaUb6KCWSASnw45u4EK9HTqpnbSu73F4a6Tg",
  "key15": "3wfXcCMzMaGnNz1Rv13NcgKrABub7vX4SCGr8gK5KNMqhCTq6jMx7cwY5AUEW2G9h5A2pNHt3DT4gE87H5bYfFwk",
  "key16": "4qMRUuk4gecj2dTyNTQ2DCcxVFX3cAT5rmAXV1z7pDa2WzhUxsEznbTUDpzoD3dXbo3nSge6HUq8cdWa56nyny2a",
  "key17": "2MMmTCY5DvdLVoCTYNgQfY6Msq4DYbUsrjEFm9vyyTxzXjYos3Z7mg9RhrbdC6ceLCmjKYrnWmZTEiKMJjii2ceh",
  "key18": "2u9mwjW8YuvW2fhG4DoDMn4saA9iAAwmqrujtnEfsEjWFrLyCSmDM3SxPQ6AoaAVQBqdaqRTqvdRZgoxjiKB9xPB",
  "key19": "53upBUNRXJNULUxgsAQpMGUryvNVndNBvgRXKMBkR3VzzaVdjXNARq4eEQnaeaU9rUjCpRMLnrnAWzdPiwroEyoS",
  "key20": "twz8V1PtJr5oSY5hVuAGRQjx5xrm5f1P6V7sPw94cWgEhHcrxyx9toVWNFF9vGEEgV5PUAtYShW4kUumN3c3iMC",
  "key21": "3Wro5z7okbf16ga1ZZYQXnSicZmYQ6Ye584Qrywn8RvYzD3rPysXJodyvjBn2DfNMtC1SmjYnaZWHpR7nrJNkzMM",
  "key22": "5d9hqA2Ro9bW99H3BxBpkb1GoJgoH7M52QcToAEL3BmfYeo21eqHsjq14KwjGpwvGcuzhHibRWGVrbcNoDeyFmLL",
  "key23": "3bMymzF58ZVAofXWKWazV6PeZ7EnM5VyXKZv2W5KGcU6sGf112ESdM4eKCZS5LhUUWURjThrK4HrFb4wr3nFqfyf",
  "key24": "BPZp8VAybNQNiFzpBbzkk6SdABXUqpbWZEDJibDUTDtbYbn11wpsKpy6d3rXjyGt9b7m3E15j2FaWCpPgP3Wxj6",
  "key25": "thJSbzGrDAHmJTgAca8GaYkJTSHZdqrWojEbq1gYRXCnJGgnHLXq6XBDZubS7UPTxtriNS8XWiHPCh9fjLwHEaM",
  "key26": "3orL7hkZqiDgAH21TmvdLFwVM7eynz4C1NnqanowXVDFoxymCsMAB2PaoLij9TLjuU8iqmVP7DsJTQmfVZdw1hSU",
  "key27": "2cDYYr67s8dU4S4URbnhigbnXGxuB8NwWZnDyEmcARQk1zGztgdhmMAyZW4kpAPLPqoufUtWMmpkTdZ8KoTJHCTJ",
  "key28": "5sbywk9QmrBYcJwK5nSSk1LQCTz8KtTigijEjjFZvAZLyB52UfqXgTuz2XLpNyvGYu3AuyM6nkHvq8rEciFbwYTu",
  "key29": "24rLEs8jsoXXnR3P2xvwaczcLYqy7oKKCjuCkDya8W7Mounv6m9CsRUCzLiaTshJBUk8igWgySCwSyKPeYXn1bJk",
  "key30": "5dwPc7CwVBXTJZc6TYj875Mh8K4dePV4dRYbQ6ts3qnUz8mppnUnvYzvFt2oB96PQGo1F3f6r9mC6SqxgXXh7Hm6",
  "key31": "2GtsV8QAu5paJc3WXD74wseH7HwDd2nyPocytXEY2KrDrXdoyTGrS66FYL8zTdcHHkjRMs24ddp1HNUWKStsaGWZ",
  "key32": "2BhsgLSrFG7nQfK2KnX2bPtQrxsP1NNr78ZCQdP1nJ5aD6wSbnmXNf1ESNzv7vWpZv64hUjmyRDT3TaguaKpQ6hJ",
  "key33": "3mkeQXL9B8hWeDRZDCNRMdqhNg5CsQqqMpnhFNUPqyKkwymP4UEiB5iNG7YCM168xBbkoXuFSJuxejEmXsuUoZXW",
  "key34": "2NucDJRDvA58NHbRsQ1prGvbjh1Snyo6ZTsCCCuhURGsGaCHLTxVgRNtekiBvJQc79yKsu2SdNAubu5jGwx6ygJM",
  "key35": "2V4LsNRaE3onkB3TiG2nhabJmrx8szoy1k1JdhiVTnakudccL2xdCAcRhxVLrMAxpxhpJr7EWnWEJjsv2yZ1kP19",
  "key36": "4u6eN7ttwyyFWA74p2sSvc2wCFJJxieSD9FV42GwE7CEvELL6gQQhnXXUdrjmZBvSUDxqcgbpjoTkrr7eBMUiSQR",
  "key37": "58XutXywi3HjaFqcHSj9kJxrNF1Q3tuWmgGjd3MKSxLT9iYAmNmtd2g5YchWXLE7ZGMv7tYJ49NhNgNc1GZySeC5",
  "key38": "5aESqrm9dKvzPu4Ht5eRKKEYAiHs958tTvcD9iTEtqB7Du2XtAZHhc5yrbA3LFvfJfjmBfvdH9MEvLyK441msNCC",
  "key39": "BTFnbYYQZ5tvMEru46Vp7UQsZaRSTt5KqngwoAhdkdw2ft7i6i86xmYAcChWQFNJmsXafnhFHYvpiLqm5mBZN1x",
  "key40": "SGPzbTLf81zFNT9gi5PvVTwoXXQPqsPXAhw9gk2uwa8QiHiKS1Tg16ciBmZmUbTx2vxszrW1Kbk65d689EhLzNn",
  "key41": "5bcxARWymRrTDHQmPJ1wtLEv8EBFQsLKa9BgX9JWrf9rvh9HQ2utqYRsUnEB4jNq38Ws283oZkrxPXwjPTMwF3Xh",
  "key42": "5ZykYUbjMBSgL329rCjdfniT5tQDXZZYVQi7xz4QGRYiDrmEQnQMWyxmjTxr1skSrqJ47GDfdn4AX3fZxE6HByRR",
  "key43": "5HPkeWvAvWARGPKSjLbmatEv9SLJppdZuBvzRLzPVNKa1r8msembFfsmoUpkqB3x5s9XZYAANWbRQJgXtLeJdsnX",
  "key44": "34skVjZpA34nbyLusXMzmFeJM8czLBp8mvcwJ99fiVPCpGVWyxpvyH2tUEip6g96arpHXFoGRUQXak2GJQKS1kvQ",
  "key45": "42G8XdCyy57Cozwern1tfd9DAjXZjzWmFHGfanEEQ974v9wKi3o2utY6hw2KW8U2ZYKEd8U6waPPhsJ1uz5h2RNN",
  "key46": "48k4K6tVRvnFaBWeVJPNrgFzYSNYoxAtYEfuuYZFy9nPh6L9eWLe26mfMZeDrhgTcn8sqoGkQwLQZnRkLqoX65Bu",
  "key47": "2v2fBAEBu5a39iq36h6ho2d1N1WAQwtNVcBrJmpJxL1b1bG9TUPAobKjCMYU5GGaVJ7Qg7BLz4G5ACedjCmYiXPG"
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
