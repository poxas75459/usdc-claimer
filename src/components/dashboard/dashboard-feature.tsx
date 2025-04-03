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
    "4RtT7v6FsCeFbss1QauW7axZr3mThgxiwZyurxhPxCKieLTq8Kp9HJNDWqLq1MC7Gx8tjE88uXe6DosjrHVy3EX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZ35PuRim6zRkYyqzRCagFS2jwFXk1rZUVfuyGwfZn9zrceNVepoLgT4ss7Vfqv6eiYHXKfTeNAHtdWUzHe4KBy",
  "key1": "5Uv8U7b7rAuq28bzamSRTWGHtDTTD57URHLNzsHdyBiz27o4yDRpwCpK9QQiqVQorz13ujYKdn9H9idhSPtW9pe2",
  "key2": "5pVeKDW7VgJkrTmE4Ua1xtQ47AmgfBW37Awx4Zofm2UhUuHRHM6ZP4Xo4QciT9M11F6qWWqXDTSNK4bCKGe35cxK",
  "key3": "26kecshDyGQD3Av1HFHwf3dbVjhDCNzbLZsc3MGmzxPL1CGXojDUr7dC62HSd7CktQ3aWBbv13G9vMi79Eo6SwgF",
  "key4": "3UzYM5mNuyEkX2AKyuNDMCDnf7rCEyUS11kYBp7UiCEjTBwc2ZieypUvZ7EEq4kJWQnEkUVsvMs9vtbcPWVsUZJ7",
  "key5": "4XBdVQx2CGfRkY8j9efAoM2bDDT8XLv88QGrLLrpYxb7ViXywMCTPQ65cFg676CCtHBtuXHmYzS9atTQm3aixcFT",
  "key6": "xYDCKT3uebDMoanebZzqYshWHoW9pvQStjXgsPW4GYJCvjp6esEEHiazWUJkJotUbxPzTxpYshVDK4p5MRtzGX1",
  "key7": "65TiCt1gL8kA8C3jinTaggwC5L54FotbmZjyLhnaCsJcXdDVX6D2pErNQSNWWmXAWf5UnGn16mHwLUeVeRSub6kA",
  "key8": "UQoGmDf5iEu4Y5JSpahq2ez81dNUJudQTkDhLFBKDLTxTabduAZhkr9r7uTLjEzsYVdfVtYwhVGzfHUe79dcnKS",
  "key9": "bzcSLnMAy3KjFxvPPKmtDvnx3KFQgwBvufhijBrG7UB4VQgxsuZJgWqo6B4zHjL8UbHiYvnu9cRyqCjw3iU256T",
  "key10": "33A8EewBa2AsnuqBwP3vbHFSLQnRJFF72xtDVwArt5QDuY6LLx7bWWnjD2PLYNeqFj6qa6PvNd7x5SieAPSDgaDM",
  "key11": "2ZxdroSqKdskKYcmLJgZboQt9ya8Ej7Mw5sgMMTobTPKLaZcPAxyUgCqGe9RxqJL5EUUbjC75p7BtVQT1JwvLFYc",
  "key12": "juDkJ75fXkm2SVGgRsdnpp8zccfmQym2NvVGAuNGfKyQaPUD5KkmwLQa2NRP83ADT36hzhPADMSTtoK34J2UWEQ",
  "key13": "4rtK8UVJCgxrkfcdnmA2oWCQPeJ1CyB1Kv3GXYdsLqEBuRFVTstpY56W8sfhSgmuukBCiYPF2WMMtozDbRxmoNAP",
  "key14": "2xR2V9p3dLYa7vACTi3iXWFrPxkUzUDb9TDFRJvSr9ZUwrYqDVCxBpFfnX5QUjCBpcoDwzqN2tqW52eX4BaTAL4d",
  "key15": "2qeDoJTAUQ34B8jY61CLmKprSX1fPYjF1B788SVcyDTYePjh8rfRswFFVdjWmrEYwnCGbNP4LgvdzCVqfRLkyjtX",
  "key16": "4o9ZdBG7SoGb6CcjDBj2knMK1PXEp44aWi89pWs1gq5QQj56ePnDDciTw48mTYB6jo2PtpgeBdCz2VwhPNYf8cXa",
  "key17": "3w1GhrkWFZhvc5Qpn4KWHzGjWkByUGyyMd4KtC71kJeyr41PpU48MARUEvbFfJyx6vMaeE4Him7ALwRgm6JpX5dw",
  "key18": "5AMY4dJS4aLtSxY8EscTUq6rSn55LQ4xmHYajutTAgWSDsvFgdHZ6yenwA9Qi4uZxJG7ib88q4UCc3VdSRTHWSoh",
  "key19": "3nqP7W5Vdi6Mj4CabYdUJsPqTXNsBDgjrKeKnAhBdqkuKtRinGDJJGLQ7gYUekMfiNhzsx5jEzmJcBWW5SFLAYkb",
  "key20": "DgBjjmgnMtNsHGMwTBAXtRwF67wmkeZiMhnjBQNssfgX3CKLM1y7bwsZyPfazJHtz7NZqWUts2yH5Vi9LfUZMF7",
  "key21": "3zDRVcb1NUkseXT6WdKJyhCLrcfbQYUtdtRShh2sUtu3ZvNe6MeD2EVC8pMYmf35DMnbqKCNJnC5a2JQgiy7tUA5",
  "key22": "35wiZVshwrVdokWCKDpmoUhBvnfWs4wwzhp6oXs92RCis5r3kfSKx65xEUUqJDGJ24sCW9mPJqA79oh83GcN37mZ",
  "key23": "28gsbXoFUzkGLGGv64r7mCAS1Njx9oA6MUcwyeGZHQa14m3wESJZKMozjGmeqPUVz2PGFxwEaJV39VfLgcxg9p8R",
  "key24": "4ovNbyhk1rusY59TC82xgLMhxC2JoQoxSZkNzC4C6MkPwRxEUfNxPwbZour9xfHiSaYc4X7QRnbWptFX31eRc3ef",
  "key25": "3YwxUNsfKxpzQae74EXjn6vD644g648MzkVYReomNGyWrGHJBtiPNJve77b6XgWr4GxJUbpnPoLKoAbfxfTm9uyu",
  "key26": "62WNFYD7Sjyu8FkgupnwkW6BEeayXKRnPgL1qy8oDrgAPNATXeUR4kYVSbatzR4CtEUFWmpqNesfS1gZcL2Krq9J",
  "key27": "31scXwBawmPz3qadaES6iXodNM1dFo12QJfzJT21H97jZDH81vJgRoSbQj497GFAuyUizqDCWMYpXCFtPKVKZHwM",
  "key28": "3GQ4YWZumUEfVFvQPbnUSuNddyR5WCjEpabr1zJ3YqvyogHKrgLPSr4rMwNNipQqMidvbeRp6u6ZYExBBvPQuSGj",
  "key29": "4LdL7nkZxWJNJXYxBtGTccKgaMHBWCfPPySC98f6WuZuVhoWsm6ToxY2yNbgHjsviifztzbDkL8WDLWxySJL9tz9",
  "key30": "5usvFMRGy4G2JiK6hnfauKUm5fJ4cXEFpdecvSer6ST38ua1gpT6Msmzj7YrxyfjvdhdV5qYEv8yfgAXCnpg4i15",
  "key31": "bBFr78KwZfo3L7NcNhvMH3mPMDQ2mUzqXHGoNKP2oDdbzmBUST4F1439cE4Yn4yvTAecbNjFqeJnTPa8gh2D69Z",
  "key32": "5SMdTCMPD4o6WToamjHK4NN2WcFYCMMp8cAFbGtxpQU93AVNb3WjkSsb2vawKERhyfNWMjbGgWKE96yDFa4ebtAc",
  "key33": "43duBK3v7bDAUwcdx7HhqJXAjS1aaSVmLz3TzGPBcEVTyKH7JXN93oFtmYPxux4DkkXiZMkEBNTTZmE9LMAHJPzf",
  "key34": "3fWL49nrWcQ7VNRPGFkg4XdvuT4Yoazu5LZ9qZEHU738VswdiRWtsiVqGQJmWiXe28k3viPxGnzPnvf2MK2rFe4U",
  "key35": "3gWMmPse6FzefLQc13dBsMJMYwbF97iLxGHddjysVqak1rVQ7ncVJSpk42bWuz8haSMherxRGfUbvYG6HkuGZWzT",
  "key36": "5Sx89KQusyEpzgifRAEyic2EdYv8RUAMGaLTvy526sHkoGdo39jfewEPFZecXb4MB1tHvMopgkReK5j86sRzXa6h",
  "key37": "eYUJhyvBTB9f4T49AMHwTfax2oE2uAhRX1Qxh4nr4YvD1x7dDa2dJ8Uq5kv1x5PkTxZWT9DXT2TqtdtR5AX7Xjy",
  "key38": "4Ae978C1JoxMSMzisK6E4RW2UG2UaFpfiFPZCmmCqn5vJUsYX1xpiMoaCtVuaazpoLSMBBYZVFndrR3U7ydRVTf6",
  "key39": "459HBepWHwk7joG7mh92A6oz2grxitEghr2ughc9o9ykTrUo1xzijq6zGJZxUiSZNHUQyH4e28FAKEbkya4ASGhF",
  "key40": "a1PdapiuuXBxUhT9ro4VkreGJGrVNx5M4DRoC6rFLQQXURQFUa7L9SQw1ovgnqQoCPy16qZdCDFFjTJRLkBL8xq",
  "key41": "5XpejUmstLTb8Y6CjKorSY6V6JQfxHiRmrDtuv8R5pndn68V7rqUbNAQoQRKvBXQ3tZwHQH2kEorvtxCC54ngXxy",
  "key42": "4DtDQigmWCTpHyGEpjkLd3DeKoDxAR9jhPFewTTEzQZ84BspK35LUSx2u1kgrGtJcU8FWKntnHxs2FDrLVFLEGQn",
  "key43": "2MkrvewxJ3Z5t4R6J397nTZhQfsHcGK1QqyVr48cekFhGE1eNCThGdFA36icNZjpAJmApQdkPMy6JY6sCkkaZYeW",
  "key44": "2KVS4B32Hby8xx96EzSePNjxi2CMagRWnMTdC6WmrXMXzqUV2Ny8J3nkAwJrmdf4N1v7EpbcVWNaWqzSuEtKF9zv",
  "key45": "2Bhuh5Kc6iEcwn53TZKfG5uYnTWPoEw9gqv2zoEtsqPGd3PdD3tDBkfmzHxoaxUYCE185J7tDxURfDe4AoBT4mui",
  "key46": "Gz9xPdUiMTmmvaUFMcvmDyMuPYoEbcLQF8yhEBT2mDoBTQfLByF8Sd5ZMQ1ruBtaWFcKLDa7TWoJRkxa5bR2hwq",
  "key47": "5nGfhiTvAyy73HFzP2GLEX8f9QDk2iEvKxpcsDQbnTJwGvmDiWsuxDaBjSjKHjo96L28T1pFd7gcuzpVvMnrBed8",
  "key48": "4Vn8rRYQNz9KxQEgv8rTkVTHv95AZNA6c3JzGzPeK8J2wD5K2JeEP8XgvUanMXWvbCoo39uHKPwCtQ9TZyXkLGG5",
  "key49": "4AhH3tCrJXbmktEukJM18KHXE84NoQq9kE3McxE8DvRypC9nw179wMv1cArEnKNv9qseeuWmfam7ZVbYkaLfKdAA"
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
