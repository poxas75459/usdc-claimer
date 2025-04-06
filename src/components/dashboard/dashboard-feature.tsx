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
    "4xX4zzko89m1jPScj8J9rStnzJ6bVa7ymAGimL3iq9Aqmm8VUt7SusGChCY3AGY3Rv3XTZDjywfFQhAE3t1JaGeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nz6r6VdYrUnE7f6tNPr6vrTXCrqkigg4Rkzr5FqgiTmbuVE8hr55aNN8Fn85pJWkfKk7JsdZkUjqvWVHEGH8WAH",
  "key1": "4wBA5sX391XHaM8rVAYzN4dexyuS3cNxbRaF3Sx976FbVci8E8qe39X2NH3otRJQFS9Jp7uu2q6ALMNcrq2uYXCx",
  "key2": "2AwRmxm3Q1om3jki8rCajzUKx6pgUeLooLtEtwMPqusT6XaTALbsoU8mWunySpjfvwNWaf6EhCEmqVfQEYX97ZVA",
  "key3": "527V8Qi1DxpUhCEvxKtzG1aPqEwGkgkc2snEmYzyTTKiieNkxqgtdWiEbfu9Gm42bxD7SWBSuyZkycsYnQRTMSHo",
  "key4": "v3h8mgpUiSo5BGmaTct3Ght1BbEDWznhEvxcAb7TR7EZMjYfFvwikUaTwv2odRuQ76MtVH8QMtqwgDDWYD1DT6G",
  "key5": "8TwB6H6bMY7f6mApM9np8mkAe5WJb9uuUQpTmNbUuFTtdqZGtnqnsLxvxRPDvfTDEJcjwyjPSQXowJgeeMFgx4o",
  "key6": "JhygLqqXvr5T6FdxN6Yv3U7JLGWhwuMH4wroErwdswfzyWTGuiCXF3RrBBetc7XrYNghjzVTKyz4FLZpuum2aiN",
  "key7": "5HgNX4s382rPckwWhjqbq5yNaVnXrdxq9HUa1h2TJfJTWToJqp9bUu1EQxnU44fUkQznAqGeTs8kNi258urrr41c",
  "key8": "5USX5kBJfzmc96Egxjb1PWivhNf4HNed1aPZ87GVQrDc7oUHQaQqssw3kHnsQu5bA7w2zf77NwUCjvVbQZNDTRTT",
  "key9": "nRn65EST1u4WmreUnehFdbgBMygveH1q2SzLQmXr1zyR51MSj1cqC1PeMF6CennsJsUJPXFZq8sGn2yBa3jcdSo",
  "key10": "Uk4UDA3cgLGwzMHfEspVyoCXdBmpDtAFzxPNvJGLksBuAx5izgBT25uAAk5h5Ad9U5yvfuM5jPciRLuVshS9sq5",
  "key11": "5TcXE5NDeE3JPACvsjDBdfFAyBqyDLh9J4yBZDU1hW214of6zgfH2d9oSpiJsSzhxeaXQcR1JFtVnXj7RbXt1jAk",
  "key12": "638WJSZ8hWHnj6jXPJ7DdTgHMk7LJ1ZBamfzhTjHPgzFbjAjr7tnTVwmFESF1tFXDreFTPxFQ4mj7vzcuA9kRnSF",
  "key13": "3LkuWnVwG2AgstfdtQK8tfdc5ADr4NLfepRk4miuAztQeHr7zP4h3VPSDc8sMXybJR6LDL2Kq1sS2nxonaJSAi86",
  "key14": "3iifx5mtzcGPcUwxyqmavBVikPfCpXXJgt1n988V7UzxSozhKw3jpe6sUZK7BnLUPmDjxDo53s9FpmdeBYoDScdj",
  "key15": "4YoRuzg36NhKX3PT14RGLavXwnbv9TJYUcKWmRxvqeYxDm2iPP7p3JYYVbYUcQnPp56ET6iDrwe9rncWysQeA1gq",
  "key16": "61otGXJinTUKCydk4thUFrbPRCJAecCx5wqyVmoHh2CqYdXMHMRLZANMNzz1CADgiZcz1pUwkSyfBshbmL9enE6y",
  "key17": "4FkMTzBbUXe7PxtVBrvUzqQoVTKqrWRnezjsE1rkaSfcRjLpew8as8UJ7jxY4z6uyfEG3GSacx2QjYEHPQiB72D1",
  "key18": "o7jWn4jB7e8eya7MEmJGq3wx2P9BVgKkNPm69etJMftDZsmKgufXPjGmqhywoRtV7mSepuDSCxskcvVVxzVcoLj",
  "key19": "5Nt8bxpqtYfeEHT5jBaarhnzpCgxwCNVRL33tqcMiu4poHF5wServbJsnQ8tbW7NwtvkRYcpxC9HKRn4QqjQKzAa",
  "key20": "4NQiRHK6cinvLtmpPA7pCWW6m2VgK1sv8mLep8zJoasKG54ZJPYZHAj7zVcrpih8x1kAgj7x7Kq4PYchYM4zj6sF",
  "key21": "2Jh9mjRrgDx6G9P9AKTKJAwZGVgsseSDJNrh4E8hPs358ZLAX4MUo3j2mBs5JZe75gKKXAHR4QmWjQhdK5hTv19F",
  "key22": "3jYWdfL4YV4KTvQTn31Vnm9QeuZHLiocoRF9A53qkGz2xnhXw3Th77BYcMTAmiYDVjWLiW5FueYnsi46X6CLjqiY",
  "key23": "3VPcG8TXBHz9hzPRBFNY5CGanfN8KwtyqQNt83tPaKYhnz21n7eG1zehDUPuj2o9D12QkszndzLeQ9LR7vZ9QoWy",
  "key24": "51wt9LVQdDb9fKD5zTD9PrqL2QmaEqBYsQLToVw8XPcbd5kRnbiVjeDCn9sdc3ivZSrLcs7FMvUx1jM3aSQn9WXh",
  "key25": "56kDwjdtBc3TrkxdV59mJSc42HGxs8AbwZCUgLCtor9hEn9hr7EEFbH5tDwhpS128C4fe63KE9kvQaZJbWpMQqyJ",
  "key26": "4bmcXnqHha6wwbvxh3As3eJBmJWh8gZZYmFJ8uqkjgasqRKNvJJYj1PNgzv2hgaCTzZQdpqa3PHFEDYi3BefPhTX",
  "key27": "2FdcspXMVQ2GA69fpogia2mdR8kS8L5bptYBFW3jVKLHzVbdaYHkeAiFUPc4hoGgdEtFCxdsJPE9WYDUxxTzMmiX",
  "key28": "4MgXUy1k8x8WTqzfyTbbN2ywZorzT5fCATJpJ3fCRiyMd1jPaD8eh7tMea7wuYa4B4m9shVVqFjpYiZHG7aaFHDi",
  "key29": "4aBUHedWMoCkqYTRr2MkhbmUTPXNHWDGRGaTwaUjsTS3YqiV7xuoo635qddbZ42pqmgzpDQ8EBZ9NVoSmqw6Hfhg",
  "key30": "FjZpSQKHdnYzGrvVHGYHs2fVCkcHgbonDnZnnqpxq4XbvypHLumdkcabeJz47jUR9FJMh35Dj7dJrSDek3sgkVV",
  "key31": "4wJyFXyFNroWwLtyNmiYRe8aFXGYLq2mKvZgDV1t56bofpJJsM2gGBwhdxjDyEi964SjKgwrH656B2GS8RS8F81E",
  "key32": "JqJGhUXLXpnKqafDedvvrT6N84rdkCwXnSDa928LW7DAhdijA8uHTa8dcmFoiurUXtv4Vf6jvL6gDwGL5sgZHSC",
  "key33": "3vg4UsFT3zuTkuv4czkn176jykugCHCWmnBjBqHKVmxaUAhTYkGchUZdo2S86sowgzPn1KD7fWS3eK7QjdWVb32B",
  "key34": "4GtwJrz3awnydchfBH4qHBp7BFSPFEPUTaVA3pTMeCipumo5j6k5a8Eu8pi7LQ6HQAKPnHoQSpuPyascY1wG9xQA",
  "key35": "4ps9euBG3nU99nSZCGxg7QdcKMRoxLrtAMPTkthPN7wSmcf8c4xh8mSQJkSk2RecjWNr3g2RxzhW9khtFcp4UUgh",
  "key36": "5CU5ebSXRGJ7faYZFF3twRntzmEeM85BmEW7SApfS5eULXVN21vMTthtuJVVHvcUuLeqDpe75oNA52gMtmuCBoAp",
  "key37": "3QWFXYmt68MU3pSXSGRrY9hMuhBSgUDNq3A2RYcthUv9a4nCF9Ba1DWZLZAGYz2vup3iXQA9Fw7wifa1gRjerGNm"
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
