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
    "XzJSqBAQ6hs6sum5WRBpk5zsNR1whSwqTg29XFZsMaaMaipPf2zznd35Q6VGxrR4SEcAV1f5gGoJ7rnJv5RJ3Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDzoTJG1SKjfaFdVsBQUKFCGLmcioFzzuQn3vHaWzVWoZVn9frKP2BCFp9kwcMHAuM43jBBpxvZJuWr3YuJftR4",
  "key1": "3B7u7cdnEhecKpJyzmC27JnwhgmKqPgaboGR3iRZDYSyKQHaVsaHCx8xyJpfhmZyqeTAw7iMMSB2piS4oxdkn6pY",
  "key2": "3ELVe4kbvxGhBN7KYirnTkBvyNx6taYGG6AN1aB89DtKsekvPrJbAgQ6ApQUfrRkpHxtYMr8ViJSUiUCj6NKWszt",
  "key3": "44rnaaszQhkQmQB7aaq9g4tptCvJBqw8Tw2KMbaaPLsPNC91PKSEeE9iMEfSW3c33M3EtLwXi24YsKUZtjS8N1NK",
  "key4": "3gt8sTJgKbCzYpddjyZe3Vj2dhNNQ9KC6a3zhEV1Qe7ymJ2UWDS5GUrnWMrKa5mkb9HupaUNnRVuYjCM5aGv74Sf",
  "key5": "4jAUUgFxBMr1cDmKgxW5DE9Tbdbkyx8EDd8WnqcrLFCQ4YR2GGdhQmn7tFSBz3DAZTdcChvJHSVThy359iSUuswy",
  "key6": "468diXkURQQjqNPPuKdmbJxsvnXvx5za4hbTCxAh7jKktySCgj8sRn5BMerWFgBjDrWnLeRixLCc9oSTYKdHZWzE",
  "key7": "3EAw2jTHoFZEgCMEyZ3QEqybJbzuZFRUjytkkkv8BKzAmg2Up5Y8q2ztVtRSFSpWjVjRFqvBfhfZosbNzDXut6PM",
  "key8": "87YvZkuA9hn4VYEpjVv7J6NhZdxt2ojUd13WXSQxbj9vFD91auMawnmtmUKM3gtFfJdUmBDZGz7uKEuRWrrVuup",
  "key9": "2qWmq4WmgkVvgNPjt3EAwReuab8Kcbidb43EuHzWPMuEvLTshUWgWJvdDcpgnrLk6EZWaGQ2pmNUSKCzJcdyKjMn",
  "key10": "3wrMGB6ueSqFUYMq8R27H8R5VCFVUbaP8pmxsnoeDSvUSFdQj9mEVnPgLw6dXnZvTzzp9jxp7fmJGFwJcndPg3F5",
  "key11": "rvH6jws1tpaRbbeZuqopzhGkAGmHTNAeY1wa3goh952vWuYxvFxWucGEVd34nKgvzkf3sW1ns9EvFfK3PBhF6QK",
  "key12": "5Atv3F3Uj5YPUZPLekGYR6LbPwoed4et6NncHQhHhsSdAvhszts8wbCuhYN4ht8jc4BHutW51TXCjxz38t5C9pgj",
  "key13": "5xscGXWTdHbita8PNQmyzYvDo8g6FxCz7fuhuATrNPTTknuJshZUuwLAJvapmGgo3cS2be413wnsmKaCBa8854Lr",
  "key14": "51izWkCFH9YLXQWL8FtZ5aVSbATERLKgm6xmeg6TFPeQeLoaL9VEVuVjGKRavuZuDsTycNUa7BWJe2veN8tuDzku",
  "key15": "AcsG3hBJ2ETGmKfRcN4oj957PHG7LywUJa91cXiWjpgiDAm1HZ2stm7uBV1UT51d3FJXbkh9Jim2KNnZYQ3TmgD",
  "key16": "5b17ZjhPvVLztqqTUQ1rR14GVxaRgKxomdrLSrGo4m5wPtVT2exEv4MH7Kp9qyk4xYhwq9KvCuLxyoSFBZWTeZk6",
  "key17": "2UQfia2nDxczCQncCKbxL8YXGXvyfivkeG31VNF1tUAjr3E36dezd9XXS3itTRUBCry4NSRKqXuEJCdYdBe8W2U7",
  "key18": "2XXFSwDu9A93HpYh3ojvhL929L4TVsXnEWEHdM8V1zGPHq1wT4xuyYQhtb36anp71pkTnzoUea7TojJKP4ayUScU",
  "key19": "5dv4BGBpBP3QZCT8xy2hvuErRw57qeHmgGyBDNTii2sXjtw29RrPHCPMhGZfr5FPPHiXJkKr8HGLzo98snVYdEXm",
  "key20": "58EU8waoAD6F96dV4kPJv8L9ZjeJtCoM2BCUy3jzVA66igvtzmGpmhdnbeKUidD16jZG8WKf3rhCiRET2dbzaay8",
  "key21": "61wePq8LH2bSndHrG68qeXxSttezYqgtkKVdoZ5fmsqqgG2wi98C1zJxHZ6kEBRoorDfYjZyeRMk5jfJjyTtg3CN",
  "key22": "316YrQG2p6eXydJE6pVjbpDrQPtGtutWCF213cN9Qc3QSRyg5as9HjXoFPypwDAcKoKpLhk5rNwHG6BXctiqkk3t",
  "key23": "2oKdY1Q9ro48wQdKiXmNwtzLPPtueAHjQ1BLHFjV13ur6n1NdoK96R3QeC8yuaq9i5hYuvY99RHAzTZgQv3s681Z",
  "key24": "3426e6NEDUEYL51TdGbfdsuB42Jxw7tv2PHFSgGX2hhEJGXLHS6xCuwdRyt1V4qnRKQrJSkkwGjsNrYrZkzkiuFb",
  "key25": "5KbUAFbaVLbJwNWvowwhjqgb8jXptas4DAUQbZschU5dkbLifrczstGnzDDYvp1XfPaCQhR4P2YKLbuLKjuYAYMS",
  "key26": "4NESbtpGeLTVhxvq3FBrNFWuz3kW4EgiL9CbU6tNYjfzhKkGqaZFbEdt8HNhzcpgKwp1gRDdsJ4pZKAtj6HofPEe",
  "key27": "4f17VBU9SUZcpgfBy46AvKe1BbynE9NJLAyFxmRHXjLEAiViWg3WDZnjSPt3JaBzUodb8GE4kLku8wRsBRnALcgz",
  "key28": "2wkWxf8TDtbaJRY2VPJP4FD3QZArKaHznbmUbR7Rd8EDHSzNdeN7uFkajjwNHTNcLUGJKFUHenZKLBFxddkAA4JE"
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
