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
    "ZvUA7qNvq1sne9Jz3QwV7V8QZx7DYKz3vaog4gvH8rQZBZXiWy32YxiBxhbMdULAQwiVRMPuXP3tPTeV9QfTgvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6xoT1SqsKvjH75UR38mPHqA4tNDxbApoi4uvUSeVHAMBpYzcSHu1snkXtwmNo7mDqJn5rZyWzRg9ZDucGzoLwa",
  "key1": "42Fqxre3F4yzdRrxCuDDtCSa6vdjzTmFYFCvcqm1ShMembF8WiHLjb1awDoRvoWxPCeZwDXs5xaN3mGC3vhESsTv",
  "key2": "21gGbJEkuYhWDFu5LK1oBrSos3WieXLLTyJEgcW7Rrn15bu6Ho5o9PBJQyYokWucWf9iUxobfukT9eoQoswJ3j8K",
  "key3": "qEayAcbFwHamb3hDF1MMEKz5DKeBd9hwbbLP2FxHoq33qaUzCNwVLc45nBPabzEAwBuhbokVP2tojD5fxDixTAy",
  "key4": "2Ypog1rthN9SwKFoPsPPCK6pJNPkrWrNRJXBgLE6MenPZqUGYDsL48MMTvZFEfYuQvohYngtpvuL1s574tsLiujS",
  "key5": "3akGqw6WFwNiLaWmUgV38JwGFcyQRw4gqyDpzAjPfVGKXGZnYpe2fPg8FE2AudEx5AwBCKs5TjHUTq6QkVTH1TRq",
  "key6": "44vrgTKa6BSYaaaQRQ6DFJb9zNJ7GDbsALhbWBSkkYHEq7fKLx8xx97TjZk5FL1TiduhvfcAzp58zitEhmVAGBB1",
  "key7": "4oaTdWaZTmEpPmfG2UGjASUrTb6tEtdsNVEVB2xzekyyJAYe8cm5KWNTZwgn67HMLkif6Gz2TWhWiv87rNN37n9N",
  "key8": "2VRM3CwwTqtA1DqdqcEqeV6fsmmuj8sBefNPWKtWisR6Q4RYSUG1agekQYHgPLJZuCfwsUW2KVRtTFopd1Jrb61L",
  "key9": "2eQNth18dcbqeaybVuhC7AgfMnnwapStk4GM3bSpkgknwSJWufhXpjgQmZ6EE3iqVsetCRgf7o59d9MvKfKkChJQ",
  "key10": "3zdDZKppEx17X3wJFDBce1YdER36VQg27HPWA4nRbkQT2g3B8EsvocdVqWrJaVbiM58bEgGCU5scNrB39Ay6A6x",
  "key11": "3AZ1ZQpt2VT8998DGxhFXgShLcrgQtKsT4VwhsYxuaAeJBrYMjq4zCAVxHnczHDJW3EBZz71Va7BMa7B79DoY44A",
  "key12": "5GxHYnhzrtxwhiXhsa2BKKd9mUQLSXUKFckJshTaUTYNvhUpvAg53LexBPT4ckvQSqqt57eBk7B6WTKeqdoC3XsA",
  "key13": "3YDqFBNZSRYckHBAGpXhCx2UxwimYZTv95sHpmTSvC7mNmWafHS8Z4cZiasmC1WjC9yHFqnUXAucHGv2ieSPLRmA",
  "key14": "nafvGbjK6MxN2tQUkez8ECZftLLxg8U5YSXC8E7NCfCQmnN2eCuGq1YW3nCHZnVNjjZUq92dgssfQwgt4b4bscf",
  "key15": "5o15mSpnEAwdqSxt6oTxGptNQdTnPRF2QjxXvbPd6NKfzioD93dDTuEwgCH3gCxriSwvQiL23NgZPt4FvHM6SPTE",
  "key16": "QHNwjpcqM1ZsoBu4LzFiVSYVif6Lv3BeRagBrc7LvzBYwZLQH1UrFY7UVF9huewLWwedrRxVw5x9QZbM42FGZ88",
  "key17": "bcfrUwZrPu5GxscnN6s4JVwSMq8YToH2HK8uck5tAUnBPDwsXTKqQJo5hFMxBT36zVXMeAU1VYNRyVivr9aa8zf",
  "key18": "2gNqc3tUB3a2QMDtkAXGV5ZvZJK8UB4vSeHGQ6zY73E8sGUgG8Aa8gLf2JFhuTeg69Y3BC13j23Fy514fpmTerpB",
  "key19": "2mK8qUvWbWhMYeJCtRFgGSGNLrha9hhfGs7dzzmd4koHiCSWdbdGPYBd1hneckyim3FmJ2G3aGszr72hfXeNo99A",
  "key20": "TjLQMtYeoNTLpDZQip1fcyQFS2o6fHbsqZmgskD13jk2jiGEUJ7Zu6Wcy4JTJAFnLbL3E3M3Z8u868bgzPuCZcU",
  "key21": "2gC9iWAV7eSE3cpLKEiDAxkBDN6cxe7rTmH4HfwFxzqzDAJGnF3XtowzHEQBkLVDbXrR5i5JbbgFLqM7s3CZLbhb",
  "key22": "2Bn1CMT2ixmBiHw6D8TFTmkEhRm8V22KEBPx5xUCSMH2kvFcnJM7fTpxq1VD1qqw2hUTuhpdwhrE2357pMPKRCA6",
  "key23": "4MrEfJc3GmAyfdaoyaxrZBWJLqWmQ9B7AvgHNMCVGpJqA2iaUPbgYNaEtPycDWw6yRPsXVoYGwJNNbjJp9eNgGie",
  "key24": "4DexFZDopPB4zfhtHD5yQq7gZYuZmLE774S8mrC2QoxLXtLpzZ6zYSR5nsYxqwcF9B5SCvyXMHKr2y1HyWwouR4j",
  "key25": "5mvw69qvy8UmSk3ZqX3Q2rac6kkMYspnRcwdhWJRKccdNH9vARY93EA5RThJF2aQ9WCd54DyaRtNVfwdAriesASR",
  "key26": "2GGnVTSnfYzhE6ygCCftMNYCjGjsPEBMsQRST1f55QMgTynRmuBEWuaqHqEy4vtuaKSARaecCqerv27MLXdCqSGa",
  "key27": "5C47xcMt4CDpBz3T38Ng3L1CNnBWL4ZvVEnSV2EVPUZepwmJB7GqqtrdYPLkQ2GY8jUUrktT3fDYLauHCz34WZZP",
  "key28": "5Hf6CEjrVAihr7K5tzdkiJpBKQxMesuZX8Y1hTHNzXMyRe4FJUGU5ozCEJT3SToBbPmK92sp3mJVXmJ7CEZf1uux",
  "key29": "UmvSwDcayMeQungSS8BYrSr154QoviQWESBceGQuBojvSjAsX7PfLRLFx8vkkS9ENofz9pv39aW2VMJBrRMHYKE",
  "key30": "3ZEp4pTEGqznWsatFP46xWkw4CsSGLzppozCfWkD9kL2d63YG3jLExayRozAA7smX7KaqY7xTMYLmL7iA4ugEFTP",
  "key31": "49HnkRuDixchDdti6Kn1osi239eAEfUtN8N4tZaExQtx4DgkD5biteQPJ3NUBfeCVSrqTPMydTy4a6hetsorzj85",
  "key32": "3NxNhiWV8sgDYx7iLoNamdSrKwv9YmSuCtqR6VrE48ewiTTaLH4yQm4ENTVpndRb5Yi8brZjmSAVxfVjzyQnC5aG",
  "key33": "3uKXx14Lxo3VFCHv7EA13dZ6dhP3LrzjrGHvzdC7Sjz9iv9a3pe1zM8ZmP18NcGoFSSsf3vi8xKcNEmPSj8Sg32a",
  "key34": "2jEGXEF5gRWZ2oL2horixpG4GhiLMcLG6Cv8bDBDiGjyDMYYFzTvzwdmcXCNG3BGstTGB1myC1Ffy3fxVKdCAdY2",
  "key35": "V5Qf2mZohtveHpzEzf7VEwCj5WCYLGLxKG8exPr451MVqs1ipw6uiESiRc2vevUuekZdxZNweF9Amr54hzA4mqm",
  "key36": "4PqKArQ1oQu6afBHJvx6cd8pN7ihU6tj4HDUAHvHWktEddJiWpRfxkASQmquNgRS6qjyQgdot7pYF7CRhhCQbAdP"
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
