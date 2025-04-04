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
    "56ND11rRd1JiGDB68BzvP4iJBj554BefETLfjkP4TjQf8T8k884TPE7kSdYzioFinoqiFZuaGfv2rYo3xLXJagvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKWu1PGwGG4tJCg3DcCy2mpvDuQn86CGzKpSGWuwevr5g6xs7zy7VxvHV7z5jpDtyauM7uCeL3mZ2piYmyrSMXV",
  "key1": "3UHKgMcxrUE5Ve3P7NdDL3if1T4zGq5vqWzWWtSahDVbRyZ6rPZgz1mLLCVTA73YFAGxnGEmXHXb4hRo2NtpJBvg",
  "key2": "4phirqNS2wLq3SawArG96HZummq6Xypdy5dn2RTSe8srQqMLGpUXtFGe4aeLtmq9n2Dvr31UjU7VxGtPTnmyGro2",
  "key3": "2jNC55EJ5mFhK2YcruNgwoUyazDivu9patQn85omXfL3fuPnxtqAmWEZzPk2eY8zdTN1RQHKwHg8m89UyhGPiqrW",
  "key4": "63AB1i1Z4PZwD2nP1XeYDeEZs4mXJcy8fRALVPgSK7oGEBJaphvEz9rjxvfPza3FM1fPYJD8s5zLadGgcYMcGgfF",
  "key5": "uNyCjFd8hbCCP4vyZwuPLCckDeUEfpoSaXeMu5PiZkabYnaNGAMYyj3YzVgJDAoyAwD2ebw72ECwWWtDfxSsewU",
  "key6": "3EZDDFnx4Ezz5inJQkW6ZLmMUxmBCZDxwps1kGDV4W4HmhiE1N7VJCacUrr4hKML2kCwhtA8Gasoy8iwQy5HksL7",
  "key7": "A33dJRQRjugr9Kp3XYgpqd8FwpYuWKCA2qvPXyoPXxhmhbbN6EtoSG6UZmouJJFgFQtjzBGeNhNZmdfCYTRuQNH",
  "key8": "4en42HESoSJuDfCYHX3CwQcDi4g54TtP29VQ5s7qvhzywxDEzsF2i9Bm1jfGNZr2VmN4hJ4D7N8LXFhpf6W4wgNZ",
  "key9": "48GHBg1Hi5t7Avu2KtNwYNiJJwp5jrP9Gxa7farz26ZaACsiWhzcPmYqa8vjGJT7acEjCe4vWjdQ95vsYRr86J31",
  "key10": "3fhDQot2c3AJgNijjFypYcQkFgtKW38BNSCdojiREXY8d7StCw6NTiinPjkhfUhgWyXWjXbmTCt1NHFUYSueWMDL",
  "key11": "2fD6UmrQLCZmKDTdedVpptymyeXwz516fnfTc6EmdvrC4NQoQfNF5xANf5syTpwbtWRjhsQTWxhMfR2peU1tEbDF",
  "key12": "5futRfxgsWBCGKdWA8m7SBpo8WCPkdUoemvpaKLP5t9ZPhQhm5oFx8goFbLZFag1u7eDERjCUiJCxbjYK3XEhGyL",
  "key13": "5H5S9LTYKTskAP3usUDrcYV2eYk6pKB9jqW3zMT1HigzB1k4qX9yqhwABAF3f2bY9M7WzURxMfdftMe4BJkuoykB",
  "key14": "CXa3BjMRxegyc1YkPnFWviq44CwrP11nw7KWgZLRbGK7FmFWcfsXBjUCFu4kHQ3obwecSj2SoAcryp24nRxkVkR",
  "key15": "PW2MK3WsmDFGvQEgdebgxnWsh8a3sPpToUcGgnqaoW7aZTS5YC6tDJx7CWx4HPQvY7RAS2at1ivcB7aRJTmqhax",
  "key16": "3jJKhNX2ZDnzUXyMZf1tPrGP8DSWRMx81XFv2PUrxS2D1op5vxfUsQR3jM1VpUcRnnPjM78bPKCbRzYDnK8tnXe7",
  "key17": "4yxA3pWwfA6t1KPf3uaDBeZETSo1Q6DNJdT6H44vjPmaBLy5BEFR6njanx36uixxGNST3irGWsDByruB5g5qqnWy",
  "key18": "2DJgnduvhwwLMTSxC3ZJYV8KytENAbLxpfEaRcZQ9zWrkTPKqP9x2DA1jB8NfqcppP5WoJWHDhfUWoQ6ac5ehb1n",
  "key19": "4rAU4i5Qkfx1VgHJ8iit8WgHixn1GFavRCiEDF1AVm812LAY82uaVxvXwdSPwS6CaHo8ntnZiz1Zdu4sfxPgn3h6",
  "key20": "2KX2SpBFQPGRyonrDzhHBVN8tMu8W4cuiG65FkHtMPrbPDHqJWstnc9bPiQtRYoNJky8QaCw75QAr6YVQ6NGATu2",
  "key21": "MVdm7aG6ikZ2R2nHqBRuoV7PHMqvxaLVesqBH3AxgKPtjWGWJt4BALncEPGDqWzjdpvZX3gCtRsh9DNhkbXFAiz",
  "key22": "5m4qm8ZP1kZfX8NqpKApyWoVZzuNpX9DEvECN5ZrtaT5DvVpS1xAfuGvRXsBonayovYAhsiqjSrYhJ3NcLzMURbH",
  "key23": "44BqMcBYPo3vf4d3j3KR2HW7PbarsQp6NMBcWVvjs9H6qTDL1LktrczFzgdpHNduT92y5uecfzworXptLj9NhXiF",
  "key24": "4bFeJLZSqH6Cv1FDQXnqBdL5xL9CJ6eZkzf6SsSi21Px8EWJH9t76k6FixSB7ZohFJHAE5TP7kqc5gxgYzQwJvtP",
  "key25": "4tRbg1yV2uQKoFpdnvM1rAGAtqkN6UyDDLK5pG1Q2ULxXtpwrYXKo8sUmddSeroVPcGhvFTrgYdtV2P8MstWqXgc",
  "key26": "2p97QmXmiN6rYC6Hj26xwrKsiCGpVH8vzN6phQiHAg5bZZNSbPBZYHeaebVsZwm2iQ5bBbzZWkdc453mfUwpUYmc",
  "key27": "3R9XaqKwsy1vxB1HwM5GvDvg4SYuUJtEtNrNB99CU2QNnudCHgLA7YVX5M2jq4nMcYxbjsKhpWaMNXWadDY2ozjR",
  "key28": "kvxJA5uQbFuTupdjTHWeN8USyyKzTzRTRUU4SmoQt4p4mm2ZUMmnaFqdsvhSi4LAcG8865i2G3VAczKYnQJomDm",
  "key29": "2i6bRKiUae2AdGT2RcybGt53k5TYtdpXHCxT3Foit3dG3prNMXXCujpLLNyszff3FyGXSjXNMFiNGxWxD8xRNFEQ",
  "key30": "4AJTUpZ7vGLAzS3CHYRAqRVfv143a7JNAyYuxNRLt9fiyvciutycAW8ddHzykb33enw5TTQtZDCoQSbmNkRuD6FH",
  "key31": "56dN58rphymirsDWtdNcgHEZ79RTTED6bLQhhuMLyi7XvHf61mKS6WvK9jDnPazGvHkMLMcsabDXbr4NBqoqKbNd",
  "key32": "4ZJBa6nNCXAvGLRFekqyyMEwwydMVR7JX2zkQJqdV99ifJFK399YLA1AtxPc6ym7XJMUoz1prh345m8pJfet6Ls9",
  "key33": "538NZj3WFFze6zxbXNJZxYr6aCSTYkmHsTra7dwQYJuitY9sB5y8JRUVw3BSnqjg92GKGXRfJ1VCDf7S3CEH2J65",
  "key34": "4caz8Rtst5bAx3JqJetJGfxBxniGxwDDY3N6Tu4L2HdJT3U1HXFxhxncqHuMZqcrKySwMn814kdwAmkMECEp5vDa",
  "key35": "5tm1yiHFbQY7riVLvhivPaidHKhYr45FYm5DcBdLsya7fs1oiVaoerRHRS4uHxoCnyT6g4et2AG8ksPfej5NAwE8",
  "key36": "xZHXUKJCFiPdmL6Z5fhbGtgqZGNFw1Bc22N5Usiy3CyqXJRjeLRuLYvsGEFDTUpuyaA4BkUMHztvpiNTWAUjiYg",
  "key37": "qZuHyxcj8hvvMKJEgsGdCnNvtFnsrf1qmCGVxdp2N2BncZcCMkRtqFy1rDYDaFrCnqmWBGVPcYvaXdqq1ASXsTA",
  "key38": "3VBcjY5bjNdJ49wazp5SwgW9TC8v62HhDXWpxsWCYDGv4gQjopmQ7bxoeDRMjDH6H1pFUXmaw5Z1Hy82U57B83gF",
  "key39": "3yieLj6V1HthRNL9p55atUKcjtWM8zzPTA37yjSsjMA3P4XTX9b6poBJBGG4GCKeh7YJ1ka8n9w9CKGYrsBYPdo9",
  "key40": "3b5vYFuagG2AW6sCnGZsyzypUwZWhzPmjDDvFP7iYnA21ZQ62n5J2fXjDxvhTVpnS6gwRQe2VSXVYWj3dxKc2dLQ",
  "key41": "5UX8dQkDLQSZdPQq16vpeEpmmdShQtfMDvux3Gepca7fRxr9NHaYfzfniXbwwM92cc1bXJunb3o3KTLc9pCjndcn",
  "key42": "MGpLNMJuV2B1e1zMQhs7Cj3uSAHkSn1Ef7LeSuy1LtQnezpdsMLM5Nc2ZrYMShBasY1SUGR563biXWWS3CppyT3"
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
