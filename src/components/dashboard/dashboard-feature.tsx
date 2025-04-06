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
    "fCQnnrEYasWwFZwgcYfTxZnQ6GpuXaEHTnsiDML1WnXUiyMXXUxvzaHg9fZ5kLjPEAhdvgVZKv5VNpt2cHtn98R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1jJy2qXcv56M9RSmdYGZjkSkJhMaXPCzFV4zJjbhwDfKQDn2ntm7T4zy88HJxGqv6n6ESazMGofr7nV7DqQxne",
  "key1": "58jEH9dnWZyWizWpXNaRjU7Z45Tu84c49oKAZySm2dFkvtd6GUyv52ztB3eatGyDHqp883tWq65ReTnPNZvNnUR5",
  "key2": "5noQr7TevP2pxQ1VQyW6LAjiB8cjhLaySZn1W63gabNBM3mYrdaJkgQKtU3dF7VwMm7rvNcD6bNZVDdZKMyipSEq",
  "key3": "41yrghgdjTT9arTKh4AFwYzajRyubT4XT7e18Xkzh8mVJ9Bem63SZS65otBxb21iroeH4oPNgrf9N4YLcuFLjeGK",
  "key4": "2PgRhLcmoh9KFf4rACGAdpgT21RuiUuRcqcLZHnL2pFwt17ht1Hw56QsH7jNiskZtjcqVqzJe77QcRxh3DYvAqiP",
  "key5": "4AgRr2jK2BxWmrUCEVaLF7RvUHfiHVkWySqZp5CKqcvfjmX1ktVEUqoi7f7qnzM7hfKWquhbjaE74RR8pzDdJtFd",
  "key6": "CiNXqPQmu7te2V8jTSXkNMCXzhEhfEeEng7S8oYsGDNbQv3GJE2SSuoJ1P49s58po2ebD3QJgc4hgCuAM9wQ7m7",
  "key7": "NHRsCbiBcAYcP5t3vrPSbVJ4hVhyiPWYkYv1BnTvrxxRZg34kWuXviDBLN3USgTv94WEEdX5sbzsYdmBwJRWhdV",
  "key8": "4bwJbyc1nTDjHdqfD9btHyCmKgpsmHCvLbJwkZgNEqPXCWeECagL7tzoBSbqhRE6dHh8KoLkHghdYDX3S44phz9k",
  "key9": "kBGtVA9khgyBFkKGmWby48Q4aTscMTJq6ZhpmLLPh3DCtCAcSKn1b7joBNj2Z9fkzHGtiGC2e2abqkjBaoWwwT2",
  "key10": "3sDPxt6q635S2WhUQuaUGY6gBhNKzjExmYjteuAF3RkcY8Bi6XNVibJJRkraFdYpWGbA1nqpz3CxjdRcw91KuRuX",
  "key11": "54Nw468u4UcVRtSBspaVteTLghdXAXRPCzTp3jdyNAfqoduB5QXHswh6LQfvNFayhmnPVvcmmBGFESo85Hv8WG2V",
  "key12": "cmpbbKY2Cy59Q68h6UDkmxsM49kjTHxScFNHHFmhzAqA9mQ3zU24LKbgkPutzScpTcrPDaNHikoyuDVxCLtiCrZ",
  "key13": "4j8aQC4RLcnPh9YctyHVgFXDhRCX3xsarRKgSf7F3aX6ffj4S7ZQPtBf4quK37tDSYMgbv2YfAdC9afXkiYqfLbs",
  "key14": "5U4kd8n9VLd7S5WrreKeN5V46rKZuL891gsbMxs8ukDc6jh2kQP99wDbn2DT3So85ZozGLGqdsdRWPANEjMv1CAH",
  "key15": "4GdE73kUf5v3kPj9ZQz4LnmqhpKArBBaPhS5F2Yoo5fUE5U4gC11Ew3gd6w6sAydYfud6uSsBuv87YXqM6DDfXyu",
  "key16": "2fzPEgm9AvLp1crG51WVt76EjCm5e6f1pvmErQ6BXSxWMpzwciJhvKZ6Efmm9TP3jj4x2skhKC6vXTr9Mc4rumLK",
  "key17": "3zpVdnn8S83oSvNBxcV2J7DHmcVQCZBbTEFNM7Y7Wxu6rSbJdLkVhK64YvPgYjFEejyE3QPnBCRNz2EEZ5wBKGJM",
  "key18": "4XoWMG1XXjC1vjGMYDaYDo3f774LPkzB297Xq8qz5hSXKuqGQkPwnGMR1SUjwbU5ZXiutJbAAjrspo2aauM58P94",
  "key19": "P2dfCNjwZn9qjDv9SppThsxeYWpcqaodhBqXT9Cb9bq8BPJ9aA8vdpdK2cqMyAG9MXfLVktLVh1KQwmn4pAV9sr",
  "key20": "66NJxpGi8HvaREjKKyDg3Y2jkUbceXdppRqD3BSKYmPJVHB77pCY1axDV8krr6TccKJ1mMaz1SDfr1uHPUUU61XA",
  "key21": "2isZVDMrbQ13L7WVzASgfmNhm499aZzkDDLVL9QEvGMJfDTsVYNjrdV7hPdXhusFb6eKYHpmY1uJkKQB2vyzD7RV",
  "key22": "4y12rkgmXDxgrn1V1pkytREgFjt3FcL3fh6aU1ToDwHd3pHkAo8xYDb7DFCc7NN8hSWprvrvrFr5Ur697ntV3kGa",
  "key23": "3tszhNB4h8KuV3EkDgarKZ6165kwLz6fCqZRybFp3AFAmodYbq2Ya9JDmkh9BwqpDhafgNzqgu8Nr92Tz5qMXsuw",
  "key24": "679zMUfcuhc4gfjZw8dtnzYQUyZEimhhFp74sRExVgrJvvba8k48sK6BCQUVrvrcqrGkHiJ19CyCHbja9G3KKbWf",
  "key25": "5ZxMKjynRQCGWL8RSBhbUnqdh5wBzvAYiyt18k94H9r5GoVAi9zhBHWVvkF5TBTrudgQkqpxbQoJGeTTUhyEjHEV",
  "key26": "5QVBrwAErSTEcSNYiQBA3uBtWMva97h4NMQwngnEVv15Ek4sfPHnc2zPSu31qMAqdAtB4yVwBdDgJqiVVDxwKZvm",
  "key27": "5v4kUPwZLA1GCL2QfkLkLx3TFwV9y8v3RDmDMfbBXsvcfLsFqT3CTJrz7NdBoJJw5KVJnBgBt7RvLLc5QTJXoxYb",
  "key28": "2Y8N6Vdg8dvpsQFZpTuWjJm5vqgre5E5upf3SXRx1vbWQZh7KtjaRQkhgfAwQhv9ao47ijtctuU1CWM1PEKYK2ZE",
  "key29": "5jeRXMYgrpirTMJnvY55c3nKJXoe4umRzmSVR2K1AcN15i579MzZsWYMaJSYXH61d4XV2e1WUv6QsvfRhN5v8zjr",
  "key30": "5rXZJHK974ffPgQuV2NXKPqvxQGYN28YQkbqhNjv2qrhMn8cS8jYrPCVPWgt48MHcU1n8JcDoh8HNjrQ1uiY9jVi",
  "key31": "2914bBpGbLUydeyovg6upZ4RD4LBUnH3Z6Qo3x5RNAScbymobfwMuXRgUazSZXi5pgikQ2dytFW1y9aUMptNiJK7",
  "key32": "epdLTbJ9WyRUxwnSVjr7uru5KJzVuHaUafeCtepZ6cXGQUCF1pDsQPEnWP2dTvhmY347UtCfF2gcem1wimbCwXU",
  "key33": "3DUvY6fyaUhNLmp8i93PiHiQG5bWW24WyKcXZNrcPvDj1JHCT2kbGhVkifKyYLHEgQVZEQLXWwmjYmJxMzYYhbcq",
  "key34": "5GMmbWW4Jd3gcQVJQNwmwyEvY4RW6MJeBhgRy2XzRF3ihZf9Rq8HsXsbWdw8TKvSjmKuinem5XmV9AMnd6FA8L3Q",
  "key35": "5tQ7PUcBUQQ197R7J74CBrhxR7tDDCn4YeQ7UsBgCMVfXkproQehN4SqaasioK6SC8yWodUMBG9JpnUGqEaaS9rp",
  "key36": "huJjAszKcXoj7dv3tYTg3TK7ejN4Z3va98BaN9KX7NrmfT3N5RTJwwkUb4LgiqskdtVq2NaBtScnNLfRNWWxQqU",
  "key37": "4uqsWHEkTkWxsyqLP815U62d2txQ4xEYLvFzGk2rDv8xhHssHeTydYog7qaG3RUreR38nVJqDX3EYj6bduQoCbuN",
  "key38": "inNMRBu21nK6D7P7DeoiqLYprdz5rHHkj2Sek8iheKg3ae6wdPFPAKvMG5QrAez84JWwiJgLv4RtJF3nDPzYQvM",
  "key39": "Wx93VN9wnWasGGBonydHsXet6P84tDy9MXuG3FVZTzqVVQJtuVV5A7ovKi4XRJwUiJZtoW9VAMRwcEaJug5ymgC",
  "key40": "39ScnFk33oncLX79iJCJruPQYfPzG9wb3RyBECNdyhYNnqRwuWV6fnWu6MsgW4ZVghzwkv1EebmzYPzpi3xbXZMB",
  "key41": "4xpPuZ55hEHz88Vqo7MKR5WLyu8sJttFm7tmZkvZCGpJigQw117Fcr44rMuxGmGN3TFDuULhahRUr8DXZjB6XLig",
  "key42": "2QGeLwsTpJzzSttTMrZ13rQsKrhMJ2312fPjwbWUBQPwTo1tvBQJGmbLhRkqMpVdn2MosdJYrKuztEpAmGsjvWWZ",
  "key43": "5SVXmv9ddES8XxMf62xhW1YqoGJ835wiyzZ5juzbKCXDGGCQFjHg9sPyEzUsqQM3CaxSSgzwRdHXztvEZAy82SER",
  "key44": "36LhwtcAfk69ebTCXx5AwP436n4pH8qESdKYFVntPouMbo7eixuHbBa1GXaJkeSzB7YBNy86K1ePe9d8DPyzfB7r"
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
