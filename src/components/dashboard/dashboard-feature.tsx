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
    "418Xx8i1hhmCq8rqqEB7W63AghbT5j5MUHZGuBqaPggPM8qFD2oDoLTv9f79mRyYkcTs9Mk55UEMQ3eDdjqUsGub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qd2p4SgaNogbPpMzSJxHzzLfmGCJXE4k6JraFMjVpxytWS7NztbjqZL6DXGcLnDMVnrj7tpDVuncm5J7cjuwoux",
  "key1": "4wDnjXTwYE1m1DUtjDK2vS6th9E5D3f4AiW6xHzRSaDLtMVcuxwdcHMFejmdQrhtMarp4E8Zc97qy86FhQfe11Da",
  "key2": "2XguRZBXAhdAxGKFffMF2tRQLcqZSnJDbeKdXp7VLfpBr4hqJpehyqv8VLMyZW42JpbEStVz2xrDZcKfPzxZq9Pk",
  "key3": "55NRaV2XpvY3BaJLvtT4ojc6QYVN7GEMpSZhpoRdvodKubyKnDSsfuYs28AY3DAhKDC8FYoxSHWM1ZrFZAcifKhv",
  "key4": "2zyxeL8JcgnVAMJdYAp8kdFDLWVETgFrWKVi53MkhvjZQu6rF5jCn4zip3uiX3qNRRCGL9YiFqKYymLoJuMEhM4q",
  "key5": "5Hetwo9BxkLEP6huESG9zSnxUdsQ4oMMAEEh2D2vyuxGpY5dwc8ofvwEYH8UBvDFAqSi9N8FAf5bfmM19Twsq1FG",
  "key6": "5CWDMDNLXmUyoSz7vqqpceu2iGCEbkL7p4KhhXS1asZWCqdUnqndcZPGLSYMEczcmhBqWoFZiLZ5nJxowjdNXTQ3",
  "key7": "3SKxcyzBQNCnSVwj647TKvwRJvhx6d2fyfmius4gjsxt5NwkLBH5zdEu275ePjLYEjizrQ6G2BcW51Y7CPTEtz7f",
  "key8": "2gBAB5i1XibPJHTgWKwjP7KpnyvKeYE1Mh4HhHJzJbf9xC1mnQUmpyFGV1B7GC9VMwMzqWMnpsnvM8dMwJCfzE9Q",
  "key9": "aJRPtLzN94TFuZrsyjqzR8xpq1UcbJEKjSAjNCugL28Ubw2unwAu9A2BjqDTDtXbLnhxw7UHH4VbfyL3BevUbGC",
  "key10": "3LpPSQ4Pt8z78C3ipbDxNw854d9XGtWoPbULaKVuHHcxxNKVF5tSCHfy8A7urvdMtwPozmnLPJDqThyGqzu5cDU7",
  "key11": "5nfEm2D4CdspX1ZCWqMSk5MqsMdWDis6YN4qSaHU17rVSY6gNnfi3hWrbSYJtUhPuNdee5jU29DF1FqdcLg5ZYaC",
  "key12": "5m7eEjwNvqe1nHX3VKJhbm24w5CooUv1aco2g57tZ3oTkQrAyeTJm8LggFRmmDmexF1RU147d1nQmCe33XiDiBeh",
  "key13": "57i42ay9JSKoPrEpiu1t33c8iSFECPPPsTsSXtSwoLSKNtLjGYuwvXtKGgQNgiT67y4Np2xKnMjsGQzESQY8SQ2v",
  "key14": "3wSyE58W95V9XzQJyQpfDMQZ4jeubELyut5UttpsedKzPYb1PF549HTdz6MVSHrZivFDqdDcJok8ufxbce9rVhTu",
  "key15": "5yuJNPmEmKwWgTBRLfFW2diejGargVUYmf5wsvw4TPwpMnvFKTPqyco84ZxgNcbHygqSySXKRnhgSxPUozV1Ut6U",
  "key16": "5s7qMvHg2oxV5WdULyVqK7pjZmtPx5Pv3ufw1kjYVr2D9usZiq6oEsPn7yYb9xQQNURmHy135nXF2RcYZpcreiBj",
  "key17": "skmTMKN5dNzqxWxkJNPYiiBBqPLSeyKsMXVnebxjMkbSchapbC9LxkRgw9d1d5nkVjtNrftpMRJdhVs5fDbAAob",
  "key18": "5C1A5H3rMTachuqSTY69Xgpqf7FNZSEx4vLVUWeEyPnxZbg4uv4wTvStXxiD79KvMKfXCj7kd8Jjz1Tkfzo7chwV",
  "key19": "26MwEabQy78X4CR5GJssdgmLf1iAeu7S9E1stjzy8fEnaoETAVoFqkGRsesqPDNy8twNAnvSJvhiSZBVAQKzFS3d",
  "key20": "42BDzZrpy4kKKUk2aAsMssUAbzAbwQyXbvmXPcTRWA1fR9jT8G3o3YTvVH1zYCpT1x3aotBy39Xow2iskrtZyBWp",
  "key21": "5vzN9JU1iejGxFLRxZKq6D3c6THpDQJQysFrLWK1HpkHNrg9SDNCg76ft6SEujMbKi4tsp7AUMi3Bm5fo9R6s6QW",
  "key22": "33F656LZUuYVtiKoQ2BQgJSD2nXHdKsY3dgZoak2tviVjuyVwiW8pDV2GuF6NkAwswyntNM3vQNRgzQv7PLFe9io",
  "key23": "2Dp1nx7m234ynuFUsHBPnukPP98XYVZe17cpNXX3VGH97snRrUBgvQBkU3Nyr9Tncb2DPLVKum8mJo1i1AARD1XC",
  "key24": "2wMAroALsYbiaqr69YnjTgbHjs6RuMTagKEvEAsYFx7NKQjKSWYTv7YCbREKkTSvcNomV6zdRJ5ouxBVNXhEcEjz",
  "key25": "39k17MaLaEhMhotnMPKfAGGoL8ShWgmQHCYUJ2A959cCBMVWtcUzxczaWGDcsA3ffncfwJA9WhA1ThaEPERdnjeA",
  "key26": "3Z2amZ1RqeQD9u33WsjDs52L9S1fe5JodFmT2DvWQcDRNsCaUthfd6KBfmYihjBDSBNnQcUqUQFgDZW11zA4Yh16",
  "key27": "3By3sEYEWwKGVMBiiPpPFeYjKfVtvBycafSAuL935mCTY33CncDhob5czDmvUvrYc2HmvMwohEzqDicGtWdSYLHK",
  "key28": "26tL7R4ZsUR2kTCn5SqhGZ3E1yKB9jTfr6GoWe96LYLFhuV8FHnkHyp1R4yYQhuiQeDSWrydRtCTsMZDEieVLzkh",
  "key29": "pydx3pVu1eXjbH1JwsPxBEzjAGViyTTiGWjSfjhzw4npWwwmxVNDUR5Y6rAhVQc6tLd2Gj1Voz2MtGuwhUss54c",
  "key30": "244mi6s61YmRZznW4ZiBo4yYvP9P5kQNz9itF3vnuCyLt9e8CunTgMPJw3DF8XFRT647qx8hjYxVYz3Pg8mNtuxJ",
  "key31": "2V33zQHPtrQDYut3hj7t9GAFduw9jgKm9EgB6CFeoncqzaLXFM2Zdy7XiigpnAXRa8rTbMKjLLv8m9sHkF1of13V",
  "key32": "4ssL9LhmHgsfG1V1eoz1516cyxN3GMaLx4uGbWJbXcEq198Ajt79RYELTCS8Cgy8xTguZ4SYLC7SuYvDXXB8k4WP",
  "key33": "3DXvowi98ENmtz2YqzPALR6H2XAyh7uAUm6rZDCxCtXsmWz7okeMUfdeFntRayyo7RA98W5PEhDLDH9px3pnaACN",
  "key34": "ukwAQcBdRKvXyNBoZUNcY3kkttqQ2WUBP3Fq5Su4rTxrfCdRRRW21UoA9YzzgfgcPkWn7wpQdNwCPWc7hiXbqAe",
  "key35": "quhP6fvVKmDMzHsECqZ3QMiGDW197fiEfrSS4xK2tr3gakrd1rJ4qmDYSfj1A5w7C6Pa6uJQvqEuPrhAWMvvPfE",
  "key36": "5AwG6XdnrfPYBtkpyryjz6BuHQUrrUmWejU91joy19FNoUoMjoQE1b4M3MFCRVbL6YVz8frLxF638pVTczwtzPFf",
  "key37": "mFVZx6kUnfMmMVHhKwuY6vwQFysCYxJwzQJTx1grKzqZfd9zkaQcrYpPERfNWuD8BaubyEjeoVtM6oAEKQJKDxS",
  "key38": "3LwWPNhrVuJUbxL29NzLSfZVgR4g6wQ7tUSn1RcBgJGDC7ZuiYgppKQzhZrosd63NcjbTjGGp5rQ25MG37xeVzsy",
  "key39": "5PKeR1Bw5Xk7BuzdNmKuYoMasq2BQWfTzuKghyv3m4R8jHKQy8NFkZhMzSfE42a1ckRntCqLiFvXCMRrCjUaLXxE",
  "key40": "5eYtKTHUBpVyYruqpvpXaS8G4Ne2ePn5vR9eH2ewZMrQcYXwwL8xNzWqDmxQ36wuirq8qxn1cvdy72wN9dWjFbKS",
  "key41": "3gwb11BjnWPnVwZsb1szTCP9qzRFaSYcXATN2JEDCfvWRUaB7axcgvagJxHwVsq5peEk6ojaBifLKYy1eXWki8mP",
  "key42": "5nSm5PjtAe2bTKCywuUb399bzvoCD4XCwUEhvzgnpUza5NArKqQdxThoStGT1ceY3m23DaQBMKiLXVbbc4grytV8"
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
