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
    "5VUZWQAFc9MV4sseSrqDgCJvBv7ktJqzn2huoD7PpQH5ju5zq6nQAYzukA8Gkxv56zqV1iqZMyj6qq8L1fkjWgEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGp16KWLwBncjmA9LBR8v1S1s8aHbzoeDYt27V59WhWdbfAJXJCcxdLAcJTgWYXhNeogZRXu3ipL5EXhp67guz3",
  "key1": "4XdGPYnKh7kUNVkfHpmh1bh5a69Dj67wuniCWt2TS2Axq65THoewAF6eYeJ4QapwFo2dqgES52XXHzPkhoHTPXuY",
  "key2": "J2pPsbB9X4Y8ygm3YAQ72855srN2D6PuHG9kY5Y2CgxQQ3KDKgv9RKNFd6CX7fsiMd7KQCwtNK6e3BRYF2GywjB",
  "key3": "2B2uNLdkKkRLBGNnYJMGSQdB2Q6CRT8CGNe8fpwitGwARPJwAeHa4qfyTkAv7JnU4zWDWuaxGXYzLuDmE9MZiTXS",
  "key4": "54E6DYQDfYKNgcG2z3eY7FzM9TvyoLhpaJZYoe5m6cHDj9UWp5VW8Hpq1gohkEi2mcUbVcq7y68dyXAi56epkr98",
  "key5": "yfz2iEveCSewoV7aDfNNKn5rjFY6BJx98bGEvb3httdDoiSDjBJharWw88H6V5xTWvtcTVBhCo47abCoQtD1aAJ",
  "key6": "2BGaTMkqP9xXakkRLpvn7kFGWSWy9gvakHNzjFn1aEBwquNrEy9NJmniKkV42iRLENPyQZSJ7Wv36vHntgJP5UkZ",
  "key7": "47JQ6YdoKRJeQWFDJt8xzcG2aKwr5XRZ4Yr7WZhcPNnFNnocbJJVN2kofLMBdM6gaiqzFLLgKmL5gdoxBqHUko2K",
  "key8": "4EewZNy7NPH69B7NovfKJXpo7boKeAAYCNQizAKeBBd1ZMbE4LGe9TqRyRKkYtwyN85kYfuXBhsuwGJEtQu4Ncgx",
  "key9": "3tHPHnmjivWSpj49LbZLLvhoeuKTuHVRTfiZ7ncZeyvnWafpBFkqMamrn91cNGPXVfZCAiD9cEs3WDNjUUrVJo9d",
  "key10": "65X1BgYMf7cDrYxNLnQdoFuJ3Ea7hpvmknNE3teoQyvgPh2iwnW6hL1VxMHWU96fWLZeAmjdypQnMQYvKtjbSZh5",
  "key11": "5DyQjgZi8zKqScfy261VEFrA9kKku9weSLEfeD7KhKytFQ53zpB6szF59UP7hrfE9P5iGFQtgam6nPb5eXWwo6WC",
  "key12": "456GdZPUKHzmd423Q45am3GZ7MxnmSVNerdA8jgZ5yyA4GghGaHNqMCtv3LpChMmq96VodQuNRSna2Rq3in4v6UJ",
  "key13": "3zMG6aaof6DfPLmvXWzs6XnTYVaFGvjn4SMm4pBNivEDGrCB1R7iBAuQbjP22ATd4N8jxAa6W3szPhP927g4MoAR",
  "key14": "67nV33zMiucUpAoExfqXaAkeS63YjzM9vZngLkcrzSvWoVxmB87Xam1wvzPiad3MtmDBEZrLnY365pBUWuuQEv7E",
  "key15": "4VMaaTgffR1eTpwB2HWQa29AdPF8DuzYrntdg4Szm4FdSAVxNHHB5FGZpdpcpUBuNn42gdqD3WoStdLqqZyt9gQm",
  "key16": "hhwfQKWTTJ3jAY2JFMWKUWnVtDcm6xViNrMX3KEYs3pfasqHzpuHrgHjYahQsYCCCZieYYUVH5fKMnE6XL5pJMr",
  "key17": "k9NZtFJcc2XeS44qRRVr3D69tgFqk6DpHZZF4Wv3rNaMznz6ofbL2kffPWQWKgRC1trNJpeQ2yxEv4xZE2njHdT",
  "key18": "22cKQjYaQSUW2YFbX5ffjohkcjwJqSj8hmfT7xsYmgFgfBJmchWyuZromiJb6hEL5bT1YMHFeCDJUXjaoYUtJhDv",
  "key19": "2oWP2vPYgzBAmX1z8qv8WkvLabFnWFGxriqMjUUfBfnoHJCSDdyR7YqnBfTUkuBoirW6WRvzdMiXYpbqh1jBrkCJ",
  "key20": "2Sx3mdvdASueDENmW4tp4xZuiW9N7SVLB5C2FmtYFgVX1K6PonMxEpnUH6zByXTXUo5m5g8JuxL3pt9s5F9dhxm9",
  "key21": "sEgdkjk6PfrirLf2CZGLvdMWai1RLx9ZPQJzVPSxPWGznzCxLM7HSoicUEHidTASsU29an8ZiGdVT7BFGUqpY23",
  "key22": "3trRaAJnfxhwCp4gzdcbtmXUGHNLRo1sSB91uCgbamS3GajKRRcbzCG1d12toTPsxZYDpm7ov979gJ6SrB4NMF3y",
  "key23": "3K4pqWuVXW4tGBx9p5ZyYUTCigGALfxNGMGDC6Mnn9QENsXbZ9rugQLyGbrohj9kAHapBongDiTznoVjm3AY9gGF",
  "key24": "2WhPark9vBzPeZXGRS4cz1Gp1hF8Hn6i1r3z8g3CHSLkiunhQCDRPSgjRL9HY8UdfpGydPfvWsHfe6dVUxkzW879",
  "key25": "637aQpwZMDB9EJQeHrkZxLJUcjQ2RpGJnzNk8B15fAuYuE2i88kiKPgn1qJ9rkwLboqEfD7ezyRv5HgmST6ZDYmn",
  "key26": "4ipvCCQkZtd2zzUTVb4HBixpEPPdYuHSznAWWASCUfVC5F2xNtM3n1nReSFC7VQFRAcFRdhtzcdaTZRu7ZM4mJKP",
  "key27": "2rSUmRdnxjWqqmcuxRiGcrhf6SgV3GxSgJ6uGoZqHWoypxpaufLRM1SaQh1rcX54dZUUA3tUpvV99em8T2Jc2sH",
  "key28": "2BsUW8VLbC57gMoJCyan9DgitvJHHYJE6qpFsCKdZgMkxT2vNusPpKhHLUMBefx2HEskxuj4T6khxLkvU4FQnJgQ",
  "key29": "4BRUp9TD5M5mUJc2qfVAfiFbDgAMMhKV9jXKdjrKbZ964aHS7ySctxCUv6DEDfRPmmLC59WoqUAy1BLBNF7wn3pe",
  "key30": "51iEZrT5sYfDAqDXPTCWmVf5MkWyyMymS5LUv1Ysw74Qhb9WcrUX7CnVdFnmv5VXjtdxcoKSbj81aRs33zGk3DKA",
  "key31": "KHn8TQ5tpZx9uPgPnRmTJNCcHv4thiy7gwrmCbpQ8poRt8ywcqxheHZPVVHdGtDST8BJc953bPVSC5mENh5sw7G",
  "key32": "6787981qb5k2eWtoWNSwxZZBBXV6Pb5ehfC79YWFRFhCjhE2HAMazTBtKfDJfDKJ26fST7LqfCMkBF24E7RP7BGJ",
  "key33": "4BwEa4dgnSBdmpr93LFr23Ao4nP15YwVUFzvHcJvs5eFpPfAsiYXg6gRw85zjE5VST7JPyW79GVjKYdhNyyhuxAq",
  "key34": "Xuq4DfKVUVGa4gBYxQJ6KCS6CxE9EecxDKd8C41BwqB6KyGkhMcvq2WhuQmQAbpfXBGo2TpTo4DcTjsDfspKHSz",
  "key35": "4n84w5tSZirwTLZMSe4e7cf323GnqDxsFSz8VWMHcwTQDavAskvC2rJmRMYvmXwyCBjKqoLnyM5GyfKUtFuWSxLo",
  "key36": "5NaTJgCUJ5wVbZL15BByYVc8FKpyemjuPhH3mUhYXH9SR1JJWUVpz6wQ863SxWgoX19GtmrnfxyPk9qQY1dXLG5Q",
  "key37": "4DN3WnnaTkQWD6ZX1kbE2Rq6FSgs6R7vSufgcfCpR3wM6XS2ruPvCzaLSsHnad9aDqwE9A5fM9fP4ydvubgbL3zx",
  "key38": "5uwnTsqMa3LWT8ytZr6ijJm5DsPRFAV1p1DySVhYPE3c8wLDCHGHeTfGLCUbQTEXL5hfjCLyChd4wuPKTDmLnZt9",
  "key39": "5X6bPwRvgvHi4ruArP1qiqSmgzxRwrHLsQogvQ5ntnxn8yhuSdRJsQcuYNEcurKAzUt5u4FSnAN6P47pcwdMjoR9",
  "key40": "53J2Z8VivsRgME1cieh6QD8NMDyCtpQow9jrD6sPkPZ1ashorfNnFPZ65fKGXhisGqKTzcF7eUBUq92Jwew4T2r2",
  "key41": "65tdR1d3ZFv8gF6mCTtq3oJuDshynmB5XLfQNUe4qGqnTXSBG6Z24mMr1p8Gat73iH9uZ68Dk5MW4qeKUqvCXHKd",
  "key42": "4FaeDnZbzMdAuBHCKBaqjsgLKX9kZ7WaoLdahzt3rRmgCpgSsceWazPCSKaLExLuwyZuzYFXyN65PYQ7vvhFzS9V",
  "key43": "4hG5fzS1GPL2tJzheSGVYW3ZDAtyfQw6zfuLrjM56nZyb6kdN9pW9LfwXrYy9iWkYWmyxzbP68pT1Jc7spRGANVq",
  "key44": "4MRPFNdvCQoTk9EZY5VWsaVDYSsznD7ujSXSAhNZbW7PNCv7KrSp212rRjcBnn4BzCCJ1zTzqq1Mz4KntbtbZgoG",
  "key45": "2bBazXQxTBPjzfBKRX89rhfBN6DomrbYh9EzYJL7Wh2FdAbnKstxBYzskCztrVCCnJ61hsWsx7Wh3Rn3CQd2mdqj",
  "key46": "3eDxJgQ42RyY4ui4evPSuFDPKQMMXpmDLsNL67hR5UmGfkhr1yVEgpodUeqp1T5H3f8tPCXN8nATkgEVyD2LyVqk",
  "key47": "iYTnpkBq7CWhxPmMns3XX4Ahh8QDaaDJp2uN6uX9wkCTEpV5LVsmCaHZgbPb4thy2dur3adB92Psej8xa7VwSmX"
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
