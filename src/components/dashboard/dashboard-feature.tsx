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
    "5xXFcVoYGGpA6kpAdnbEEMxQtCDAYUMoSbbfxs8EQQV1VPNURtEhhKrh9ro7zZDCeKqyXm4c16Ps5jKo3W9r45Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPjRjepfiGx4nWV9tub2nJ8xakekKiWHnJgNNyUwwQ3k9VF5MvFzCur5Pu8fucUnFbJpujF7MjWZcL8ZqhWRj6T",
  "key1": "vbwmuUGTWsRmZ29SgA6tsxCS7pUnZs5xbEfV5vd8fKdweHRi8HKdbrhQCyC4gqAqaJUVCJWoqco2uTvcduk1nzw",
  "key2": "4hrRvSRwsopNVA73tQC4fUybT9eHCSEnAmgatNTMrmzzD3RWgnHXeETPzKtQpfgGEaR1VofWk9P8iZP7vuV5Ke2o",
  "key3": "2goHucxhQi5FsUzokEiB8o6F7pzS2dLuSrYtLicfPvbJz2NBG18ViYkhLbKDXMw7brKGtEoodJn76GFe6zCsZpTW",
  "key4": "4NWBe4SXVCRHEoy4tJ8ZUhSVEutucdDst7WYH3coUhos66wsYTQH1xrEYpqXXtZsqWj9MAPtVqUmi81mcuMMTMTy",
  "key5": "61togAaFiH4wsmq3pUtRG8K1RdDkVvjKwuGggDtC2aAZiDpkBfUyNMDK8DsdvZSzSjbejYY9YP9bCxvQosZMNhSC",
  "key6": "3pxwnFCV894gXWusyREYEaBKVh1qWhV5ZMYh2LpVEsXG7tvAvSZknkszjgNgFEShyNUurrz4xikVUUTfdraru8Tm",
  "key7": "25JeZhccQZsrFKN5AtGjmt2nBF6k6aqiLC9bMjkGUPHc38QzkpQryqoy4oniQtdzVUYD1ykcpfzGg4APHuJ2iPb1",
  "key8": "2SFfDrdCuG6c9KgQ5ptjtyyvyn21DpRUQhuPWkKsJ1mgGaEf5PriwAcR84mqNcrjHniYukxrserGsh1Tvk5ZN6av",
  "key9": "46uJXbB4wJ7AorHB3hjTJrvfVBxunJ7j6LpFtMx76PSqWbGXZHPEkt4VTZh4dYwPhxPWSwFbnbqgzbxVpacETWFZ",
  "key10": "3HFFAV7NvhE3aYZ4KgLrhMsLaSZ9Sy1Kx4fSAYJqaKYUhKDpCh6SWgsZSCDQcSkZKS874QdbAM2scwz5w3GVKBXD",
  "key11": "5fnHT2JSzUb8wT5NLmoFHwmsv7hgKERecbyLCR6MqVgEDrATYjkrWoDZtbeUgUgbqWmQwpxBhXSgv2T6asJa3kSp",
  "key12": "5ttRsBucR1NVD4o5NLxP51YU2zLTGsV77AtTeBH86f7RD1FFRJLvCXrjguhNK5idktkggbGGwUBdRBmGZsZRLtFL",
  "key13": "xYwqWiRfUtsu5MbCDsQx6noJQWGU4sCo6Hi3ALM3WuQ3GZar9dtzYTwCsg8WvUxz3368teVv6hyXBbZF9bgF5Bv",
  "key14": "4dKE3vmY9VVzBQXTNLwhKc6MRh7TF448viB59Cf9JwRXL549dKdTBdWwGfn5xLgwnjv8nCn8UJypStWquAtKaxic",
  "key15": "4ovkUQg1wbLs4h79dvVE6qJYpqHu1ppgJWvGf9J5UDG1y6DS5KEqfhvk2LEwZEj8FHXg9L1m4g1oXKZcFmQsqkoa",
  "key16": "4NF7J35duK5ZZqw8gMd5mNit59jZUkTJFNNp3LqMPk1TMeRZCM4GL7M1p58ZtPKtEG4FnFcQ6rwM7gCCZuzCRxAY",
  "key17": "8kttHz9U2iudhoi8TgvsJ28RySQ6Ttz5ALAQHrw3BdAVaayweCK7YjPSNTkopMamfSyu6KaH7PgoVpCST8wfAE6",
  "key18": "3Jc1tBbRX3RR28HtTCfCVRppqVx7ER6MiTLo2hH8HSApE6L5TpPUTLCxUpTaitwrE6iFisi954tSV3n8GJrHYj1z",
  "key19": "3gmjAXMTQ7Q1GWYVAD8gaFPbGGa3XGFKoinMmhAF58AqpRP1uYabe9kUwL9i5gFDyUW9svy5fhkJaoBn39eqrVy9",
  "key20": "3YLmWzFaMdpGZPMj3YgSkLXLvFSMgkm7UvusjW6gSnkmm7N2piubdqbagvg1sAd8jMNpCn57d3y4oSXAvCiDAdX6",
  "key21": "57hkboAt3fUkaTZRVETSLpqkhYzgYgqCL3uBMhBpF8e1GLUtAdo3RNvzx4FVaCg2tsKpKcdzybBBiV4BuGsHqdfG",
  "key22": "3tqWvuwqseRe4firxV9yrydch4GFp7tt5Lgo12QfrEitjugausFhzsY4Y39xwi6BKcjLMquCqzLhkmtsVm1KGmYK",
  "key23": "NkNnx1BQHk5HGwihSYmKZAAKmDLttibN16Ry2VX9qat1jeuZEQ9dqrp4mEXCYPTLzMTumg1LR7Gq5E5rQASv9gy",
  "key24": "DWQpxoEEtsjF78WYDYACYyg7YMvRkeXm13JyxV9iuBtiU4z2zis1mFWUFFCP9jRHFs91QWBhiP5widc7yXnzPit",
  "key25": "2HdddAtjosLbBvUCbVNT5QHoN3L6N3eFFHF5f4NqpCApkYXuWUciJUNncNb2ABwyeFPXutRJiVRDFi5CY5SyKuuB",
  "key26": "4Q5yPhEJnyLq6vhmtvx9xQzoQFp6xNGbw4rWcJbgvjqGLCCb85zXf6NAGVbaYPvdeqCwiuYg7Dabs4EF5tccGr8w",
  "key27": "3xCsfsLtaQwUH8m5tfp31is6qXrPnGdi7pTVgdQSbUVfj1yGqvrQ6nJG4WGa38YX5HjA5PSApP4sxfFdpdJUxeQb",
  "key28": "5iqHgzBq6VsFhE9qmVjqDR1jVTzdTpW9ujnsC1RgbWTNNcuUhhHZ31TtNY3erTZjSXMn2Nu8WwgfUmBKqvSbybzJ",
  "key29": "4JbFidV36efj2eoVPyq4HmMMPXQ3E1n6tPa6e3tH5gaMHZA8ykH6echCfYL8gQujWL29n2VBDmNNujSS2Rd8tNz4",
  "key30": "3AQuuQHf7GzLBsBFSEB5xfRq2MgGCYFo3FzUAHvUqKfpNYe6ABy5E5h5Q8hVDmivg54FbDesf1H7fLfvBgkCZqXM",
  "key31": "4Bfdwmg2dHWpYemqYWQj3WPVg93sF1zZCiDC8AYxQzC21fKiYmfuTc8R4B7ZdA8PAqn2jxa6jsZbwFvSFzgT2VgJ",
  "key32": "9dTCrt49WirjdEajZBSqw6J9qo5e2XioxnaVt9T3AuhGXkFYsGkcNTRqzdsbU255xjgUb89TyYGbFVTp4diGBwJ",
  "key33": "46XTEEfZJC24m3dUrFzUC5VHUFV1zhrT5wQmmP9Lr6hcrJa5TAxz4fXCLd2mGTGRoRZUwcL3SNgEbCvEY8cRKQqm",
  "key34": "5hqUbsmAu5YzV1J9CjWTVHtFTujsyyHmns6s82NWiFNQJLHMUe4waK2krLtG116gZ4FZq9xwsnuUwaBC2fmWC6Fq",
  "key35": "3P653xPcAGcqEnbTkfEkJ4fxx67LHitTKMuFgANdwLhGdMXhFLzY5SWpSqsGMWadZRjibRJM3tjh5j8FyBZ68WcR",
  "key36": "3ZZXaddjpR3DyYHBaYogwfTTfvL3H9H3AFPvFKTQGAPqtbzBqPthpsGn3QZgZWQhtfpJNkNtBQdK3xQGEENVSfLp",
  "key37": "3aGMfZAkVBCb3YwfFGCVjkPd6URz1PrHitiwzFdnp9Ec65AU39LL6MmpUjjyVNwScoiVY6NY4G318UVJowXKeGe8",
  "key38": "5Fvy2yE8WeBjnrSK76mm4QSGiFVj4xqm1XBLYr4o74Paqyr1ZWBFNZhV2SBodFcrNXdvENzRt8GqMZ4LPFc4Y3Ta",
  "key39": "5v1FRFFvdegQquEWg9NPy5bqqusGGXzKCP389Vymr98VM7NBKUiZLQhgcpUQijhoWvLcmftv4YSg1DVisYLXS7mg",
  "key40": "ZNcnEaMYZrdSb6Tfvkbb9kBMyfQP6W1eK5DfZzYkecNYGsV9BKKRJDG9bcPRnNrBzj4FCEjBwu3Hvf5LJQ6sJGc",
  "key41": "RMPaUUbvxcyrJBnnXjnG1mCEF13GAowyb8khro6ZJWshR8Kr11NnqbZ6NMQzJieDCRFiTFTZdoSxptSjEYHXvpd",
  "key42": "KmU8phqxxQfNVUiDkY2SPqux6reRANurWYNpBURotjRdib42FNkALpuZBoVMuWhRepmMHsQm1BvVyHrpU3Nkmqz",
  "key43": "5fmDK9YitGD3nMFp4Ekc9Q2N8bbBBc1XKzbWUZ3H51oncXJKq2nC5MyNxQAqDfELBZXzutu4XEZELLE6oCRpkUDm",
  "key44": "2Z5KXAVr3BzPb6xgpePowUW8Ab9VnuQQfDLKRxgDBMB7YiALnG4fLaDAd4FTgARZoLQcP3sEsykwXH3KmaYTsy2P",
  "key45": "5FtUGWPYnGxKXwUq7q2BfuP6HmGiFCWVW9vF53tG5bu71Ru5Fzc3cpYvW5eKCSMeMMhm3BnWbHWGX46yhkMx96Qh",
  "key46": "5YmhDgLRy1Vx9FHjx3rcWDEqrhg4N8KVmd1tLnFHmLGvcPH7Cb67gnNmfkPaGrqrwyG1BiLjUdx4jnEUohmsMbC8",
  "key47": "4FVygvBpgeiGLAgfzZWAjTSJWhUyUhoLZBELY4wB45FVExJZTpb9rWddZHHWQP9umL8FZep3h816QAyHXLccJrRW",
  "key48": "3LkKKyFspY4PBSzoxUFfPVynXryXZPsWhxWmdP1cbLPNx8zpFq2ht6FFP7X7WinQhfPdug9B2aPsQoi3gkJBKesx",
  "key49": "3Gw4pu7UszLqvq2y9XcRg77P7zq8VWdyC9ivqny76kCL1Uh3PEGKzYrpvLhkPAMEyLaGCyyWMnRjXQhftBfdAauQ"
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
