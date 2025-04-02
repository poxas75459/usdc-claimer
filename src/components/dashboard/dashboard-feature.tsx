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
    "2HB43FZsa6Sk5mFjtdjUEZoJ4Y4uB7qEHpLAzjQy4uHFcUbWub55pZgfk1o2SacFdq1E3C3GBa9VhCo36CXJu64t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wetmc1SuUDnbJfntpKKo9qZmLYNDYgsYXeqFBaNrEdvB1iWGfKx63pJSos5dfgn2gNeAW7YNsHmDLKK1V4vPrGD",
  "key1": "39wZFJFmL3hKfMU4TLZs4smmVyWao1eahrFiaqAzBvBR9qBccpd6nYSuXdqLD8TVEGhUQcXdqFPu9zHxiYrgzdnb",
  "key2": "5Bq8AfH24pFLejikXvkfyKCU8MA87aW2Jd8afxbMGFDYsdXFKwspocdAjWWriALsaXjU8Ues7U1GKkTCNusLG2F7",
  "key3": "2BZcAnUsiED1wJ5uVQvFL2g7zTGpJyizSiB5Rd1NJn2T7kCrNDoGAzCYBmv1H2n3HBW1dVvwvXeU9gS6K9eW3aCV",
  "key4": "3WorJ94tV8F2LJVZvjo1CtQgx2cPaLMz5t5vh1MBZaQCors4DFiNLU9XeU7WrcdFXryigpFPnCFB4EigExfSXiAJ",
  "key5": "Q6Hh8N9KAg6kB2w3U2G1qmpuSQrkUyujYB5rNHP9XCV8ABP13DEam8s6N8m6W8n1ivQixuwPFDeYB8XbMwmHqvg",
  "key6": "27ETjQNP3mRp1bf8rPefu2saYYQ5ivE5uAJ9iVbdcZNFcqDrn51LD4fLceT2nYCf9NU2tmiWpux67dKjKB5panaT",
  "key7": "3bZEwDKytgPFkBoJpSkewrKXJy7oCa2Jq1UjXSRvphkX84ShRL9TLAXaaSQiezzbFETZKHR4jpDMNYiDNZJp1cr3",
  "key8": "4KB6vV4mRkKoLCJq2hPCpw53UDcc9x81ax1a6FuWCh6oaYRDfLhiQtD42o16xqNfy7d5NnNoieLrxUB4CeCmN5aK",
  "key9": "DZXNNXEdRycZpGtReJi5ueBpLd1DZsy1eMh16BkhdQHTzoEAufL3cxPFLJFVXTPUDaWjaSDigotSzhDQgVTnm5c",
  "key10": "2CGVS3TQRU2vPo7suumAwV37tQB4o2o39UvrKrGPM9NQp1z3yyf8YHmvGUXdNkPYsLFLgtorthLToosaKbGeFTjF",
  "key11": "JYiiG7wahpK2m8ffEKgrDER75MadHzTkFFwGrMzany2MQ1P26TvX1VPgLKnRnMjRGhhhN7iLhH3sYjmzzwBrJaA",
  "key12": "5mC5EkGSyFbHSUGnv3VJaDNqrpSkiHBXHrF9meBuj7UizFwsYgZdrDxYkjSwpfsGtjJu7MTr6ZwyHjF6UzjDUVj7",
  "key13": "5Q77FJyvPbKXfUnCYBa8JcHqcuCodkVYMp49nAfDWYLqeC9UgUq1Tvpby7zAFdta2A9LURkuGme45ni2LuTnFEMH",
  "key14": "4FnzJt5C8us77dJzJekqNqAmFHB4hgY9o3MiiAzgwZG1zW6Hm8wd2erdEyAKV3XjFFAproKzCMmtgH74ikxp1Lbv",
  "key15": "CNiCrsdSUGWJGkMwp8t6LKiuca4LUXf8rcmSFqGVs6WqrvbF2bmRgaoyYKVnhcefCnUoWWp8SmwyFd4mmkSpk42",
  "key16": "5j2VGSdyippUQRPDfsBD3xJz48aXoUDPgUnP253yfCE46SPK6b8fSm6YUD92aMrK9vPrBmLjpnrwYenC7QeWmvhi",
  "key17": "2PjP5osusXAZgBotudL9e6zZG6MSbmKwMpAQH382gimZXGHzsnDp7UM6CgcFiXCTnXt9Cxjeo7oFke4vqyDhXiLq",
  "key18": "2Evy9oKCQ3x1kMuLJhMpUtMdqDW1fJFHzBCMP2Hpxk5NynTzbk25duKKo5qDunjDeZg9dtMcMhP5jjjjCwi9qJZu",
  "key19": "5jfXdC3AP5ruEHcqp9Qr6oGsY33C1V9tYh5dWHAbdAx7aTKY8Ncv6MYvLJj5hzg6gJyxcKXTip9oM6T9BYckd9d1",
  "key20": "ku9WvGrXumQyBsH9Hs2GuCzgnk3PsxW7r92pTwDnZr7dH7NovRDahMz8sBzdA7qJSYnMp7Nu7UumH4uATmVMnAo",
  "key21": "4QTv9bEqotZWMbUutQEYgNdXVppsz14QnzKQnb1KeURsgcfMe58GvbZ3kVoWVv3BgHDn4SPQbEPRZ38tHWeV3DD9",
  "key22": "2YtN72cy2mzF6nHMYUns2XGcaeTvSYHYk8EkwZ2u4MvmTcvF9fjisku3wzGknWjhwVg6h9bzXkgHibRqt1DRjw6",
  "key23": "23piJghuDXWQKrTxeaCdo92wS2AD4dWuT4pBRenc9UFykpBArMJ61K7p7zRNar7SbxKpCuKv3jsVjPiSQyNNCW6w",
  "key24": "KSYC4YMrjX1ogf27p9KPqnpPRTj5WN8dp4ibJAahq2HXvAHckZgvDsBL7TVUh1cshR5PyB53RWDVGPZHmoR2fjZ",
  "key25": "5K7XMxUqycwEHbVYE4uZzkKAx715W9hRJDqr8vAXp6gtVtpo3WzCBPA6HxjP1s5uiiod6bn5kv4JCTC8FW9cajjq",
  "key26": "2H93k93P8hAuQdJztK2u78kQL2vvXfiJnmQb2Pes1FpsBVXAgyjAyvR7HuM5ggKNj4unadDvBKCqFVXU9cUJJYAB",
  "key27": "5fWLHrgtzzJBXGFEHf8CFPvitZy2HkXh47cjMDvGsB8D85F8YPyoYS3kkp7EdB9e1j79gKd8zRLsreiFzv6LPR79",
  "key28": "4ZcE3LpihmkXWgnKprN4aB3bQ7aXsoRm7t4QXMpsazonw9T8sWSXD45aDqb7W1QPsKgSMXnRAT5cEtBqmJxGuz38",
  "key29": "2Hemci4vCAtMyc3TTkWuNd35F9Rf4A4EJVmaTEhzekaUMXH7pqBzgbva2iUXpFS6zqcTdCRvybP4RpZ43U1VWfLH",
  "key30": "4ynPCZcvCwnU1GgnBXcgR42k8Rji8c1qWgiYZC6dUTt84pQQDqeK7KRxmA2YyxDUcvcTexUjnRFqN2HvR9AkeYAm",
  "key31": "2BgBfqHFSgHfuuU21jFzf4goTEa3JzDxYcg2LiitSVtx7kPhjCj3zLdTZfH2cQAPW8Pi8Kg1kC4bY6YHQ9oJrkBz",
  "key32": "3eEnmsX46MyQkwHseVzX46zTLdBXiLsqcPTyfwzGMCTwHPcAjeTf67MW8x8cz4urejj1ZiNNEFdzsYWTqPgHYKqc",
  "key33": "5EwhHBZxcyU9JdA1w6odFJmpf7ZGzK1ZitRKYL5bUix6LR53PZQKojxpYunb8iV9Vs1o9V7x1neTZ6EE2ay2PDV9",
  "key34": "4Jisg5bQFnyKfTdiecGH24JorBiVdJGdpw2H7RKXp3qdNhBUtBEVyqHh5edRDhuSkqmtyyryj8o6RBMNBSgFrVEo",
  "key35": "Kcr8VpporDupjcVspyYY3MWK8B35HLJzHPPc3j5Xt9YjVw8ViVYJG7CxgnsipS6dFw3aqYyRQKCUXv6brJFxKy9",
  "key36": "2hgPCaEF1dKX3SLJnK4Sn1dytsXCNJ1sxXBVHWetGYgR4vmz2iDT7umDZAmHpBQqUgzX4fPNmmVBRNnCCBXGq2UQ",
  "key37": "3BynDfQu5A34kUxCA1XLtzqSHeVGhu2Un9XWzHgGNjbr1bUiuHD1EA2bo38C4BR5XRicJPgbTAgzLkB65H61aw4W",
  "key38": "5fq1RYchJdBzLEjPMAQo52pdYZVg3UprRpz9AgEG7Xze97We6tjpkXhzb25D4s3FndwA8im8Qvy1sneQ2sTjvSdY",
  "key39": "3vXTNCzedyngd6tugFiQ9nraN9oihZ8PoUuGnABZ5aNGPW4AKRs1SQv5ctuTqbQR2sqKf3qWSXnrRLxPrSCiLv9V",
  "key40": "47ibFyYX3yGjsVawkqYfw8zUuLZJ36twmogVfivYWrRuFesoEww3DRrE37moLedfpw2m84V8W7MviZme6JddHDbh",
  "key41": "5SATFuPw86CZzEy9c1JZ2xXwxVXBQRJyC81L6oNninCUCbHZL7wX75ohm957Tsuz7c8Y7ihh4wtUnDKsGTiHtUvy",
  "key42": "5YN3eSBQFQToZfsGnstGM5kCmZQCHxhVyZ8RmqLf17HVTnW1RvYouzUr3WgQKhEMKwAvHMnmRQ2NJXFP8TQhhc7n",
  "key43": "4vueiufjttfCWjX5ZitJkUiyysxxPCzN8uJmbN8gnmYDWXWaDpyn1ismuJ7T5EpP88XNsQ8tjJjVD5J3zAuCgrgW",
  "key44": "2cBbpDPPfNnBx6gKKQ7mVHrHiK7gZxWRW81SpAReZAeCSTJbmRsQmUhaJETtwoMphxrhJPwLWLMcbEHYSwtN7Z1L",
  "key45": "4vpCRxMELnExXHbvFC5HU2AbfoT23HQzkizSJQ3wsUsLtN2zEd2e2zKxJBXvJeYVcRVPYRArxmFxxGXQbgTdRBUG"
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
