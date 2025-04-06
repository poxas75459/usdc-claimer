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
    "4sVEwVFfcmUY65d13myzTqqrgKcDxkSaAFdCzaCZAd97NgFX1owr8BWpHZh1A4aAE7UYhAEAtgYjoMbq9zFVwxXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mqjg1PsNnGmHKFRvfsi1gDovxoz6H6HjdPf9DcXeRhRCoEe54y7eNyTDT14fAGVtrd8gKzfsDSkqLbX4nCmShwb",
  "key1": "4pZKywrsGzUfa8tKQ1sPJLeMxhWtuppjxspTHqbn17b6Au5L2dV9gTkYJVkRYY2K44x2N6LJH7rxFbg8T8gMm1UQ",
  "key2": "3ee6Z1qidwWtgV8Gt881w8FbU14ccoTBewoSiHtEyj1vRxa853u7joQGBZe3p7NCLyZ5kuutze2qx4coQK15F7fT",
  "key3": "34RZoa8oSGvzAodcziUjPsbUArJoMdwHHp7c1Qxw1XrsV16kUyRiznyaxjqP1cNPPzeGi43vozciyctbq5L97kSe",
  "key4": "2xVc6SkjFjmfmMsLG5Nr1yQoTgF1hRTHRG4VEbpQTAJVBMooABy6LogBbbWnhpWE1oR9qY6pBdyUqMRzux8TQPPq",
  "key5": "4gok66uf4MycDeQRtSGNGWg27JLzLZgEB3BmjBV2eHuyp1skMz5vz2R7qEfkiihiQQ1sZtY6pJVM4Nfa2fBy9Qij",
  "key6": "2dSMfsF8ZrEJEmL3Et47ZhZtNp2438YkUAxAcs2WCQkGBPnVxWFqpQ927ufX1TmrmALiUB4bSkyUybr8CwMcD3A5",
  "key7": "3chK1uWXdt9GzJ5VDHWt7hYvJNUSeBf2QsMoZ4kh99U115FTaRHMiq4Vo7kMo4TjBPu4W8xmpEWknQFne8qoj3ca",
  "key8": "45UCvxshgj74xZtK2SXg8qS9vkRCu3FEhuF111BqoTPbNwpe3jiZRGk1kaaz6WSC42hkA1RFKYKqDzjt9Xx466Rx",
  "key9": "5CajeW4WTqDLSkbYBV9G9e8tbHZUJi5pisawnLVWH9Nf3YUUKoFUFZPFyCV4GTCdsPUEGaT3Tx1CA5KDBKGVCLfN",
  "key10": "bY363wTpjcMjqJmrHwm4cDdgPxvUb9WhzrstkEtTwFThkR7VLi3S15hVxgDxoJnvPFnGHkcfe3ktPFwVYUby31f",
  "key11": "5bo6ek2mRVD3cUCVqKzysJ2R2pb9nuVnuj9rQP99uctHKrMxTUrigyUvoWhr15kq1vpiDuin5YqNwYN4G9GUtmeH",
  "key12": "5oPmaW7kjBvpY85RfSW7gYjJfL4WmhTm3jcQrXdwdkNM2mke23avvdc56pbmxcvSD6JCx3M6KzDtgxtT6TStwzqQ",
  "key13": "4SsKQCT4kQ39AqATjNtXtoJKijMvjQokDfBCkRVVMFghDeJkbCmzx81rqrCc3rnQ2kNvW3vMjt2TMxaLbY1jezJC",
  "key14": "3skQsxqMgS8Vnzo9inc9RKZj4gADPnJPDADGi9yiwHyPBMYUUhef4pEX5wvJkf6WSpgFNzRcF4WRBzQecqLnK3TX",
  "key15": "3qqAMwkNNYDFhRBA63RknYhcdJYAnpSr5AnHAbx4KcBZTZBjfC7fttQ3jjwyEPHM2BKeXW4K4GrcM1W5mNYHqhgv",
  "key16": "5HMBHCc1oS93Vcc7SwHdN6DHhqB7NgYA8DAo8PbXnM8vA611W3dyQboJ17cHAnZ84RRkGZ4Uv14udR7vPRBhaZw2",
  "key17": "4nbbziptevpTPEWDLYe2S4yQ9qeoiVEtnsiewSsSE2S7kC1wspkhPYkcBLyMKC4DbG9vfa7UMYgEngSma1DkGfFy",
  "key18": "3K4miY3hDdCkHZcQjBqpdwGyeBJs7vpRE6TqTK2QY4Lp5xvAAfuxjm6wg5rz3VedaJb8hxDCnrtQ8WeNKYNRVLC6",
  "key19": "5cDwNGZ5G2Ji1FNSvCEmhuJbB5NBCkpMNS4SigCve1MdmYWCsWMEmaM5vQf2m8cUK4WnBtcTbXnh29LRWX7UVi26",
  "key20": "2w9QAA5ouK41MUCzEhUat49xcusLGdmR9AK5cqSgZe3yvfq8PjeLT4PYpgyUTZHdxntHVUfkW2LcsU24DaCJouCm",
  "key21": "sn4vf8B5TbYhryp51exK77pRXpN8fVpNpgcPF37CBe8zXG6yjsywswvRsDoLyYzUF9qNyeRvRBe6yCSgPkViUKs",
  "key22": "4PamFESbguTreQb29CrQjaAiUeffr7KYVcpxaBqZZGmapHaNiMxLYJRUPF6DNq4PPv2PdNiZbibR6T6eWoCd11cp",
  "key23": "QjLLzfz6B9wwT91ic37fh8bY8y7fBumquxYWBmNJys5ormP5fYe3Bm2DHtgPpkXwDLdA3dDP1AsnZUhDRTFbZJV",
  "key24": "ExjsTrwCnKMfWT8ACovTJL36i7HRvnrm8DJ9VRdixKAcYXGV7BVoXqp5xWribeqmBcZdykW6Gf82p4cEtfCfrLf",
  "key25": "ZcwnJuiAYtJzC26QQNs11NjJ3cpTubCQXn5YeDYWPQXmmTkPhwCfyj9vBTcjjqm1zXY6wZmKetaEmzjpfsKzgds"
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
