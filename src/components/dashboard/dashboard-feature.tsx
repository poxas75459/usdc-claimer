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
    "65GKNM45EMgByWmmkyB6HV9fy5r3Vo7aVZQgbjqzaJY9VM2WA9xnfegccF38t3eDejgqbGVXYnr392fxtbk1euh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocrnqkSarKUisdePh1MpbfkprZVscaM493i67dSZwWFJR3XHbXdZbdoWR7uP22u4aHwREmSAC7FL61cV1QJQWWt",
  "key1": "34ib78w5JTsdsGMsLpawH12wG54q1qscSC9KFrzTnNuy1VJ5QeS6jKTtA8MrZ8RcSde5oyuXg2ae2BoSjT3RhhG4",
  "key2": "4rE7uRoDRBsnxKuHgaibmKGuQ9mEzw7fBREdHS952RFyXMsxTacgWvqrZXXE9kAvwF4KVkjUypJf2wMZ8WQExUL7",
  "key3": "3nderMeh5AeYE9s3nGzfKRJC1xgC1F2czWPdNfFmTKHi7UKNMmdpUATSvaZVBjH27NcuHsFKJnVB9K1f2j1a2Quz",
  "key4": "35FzgixxnRgaVhsfj7hMjgupnMZCkcAfHiLPz3akbBJSn6HpuLh7SbM8DjaA4JJxRoQ4CQSyfxgadFfbf9wkPakZ",
  "key5": "4NR9KSP53p2e5nU9UcKzWSgEBqNhXTmcvJiPaorU2yAAgPEotZMPL4vWhW7gsWFLEF1PhJtxMWTJZLQ1x8G8tKC3",
  "key6": "ExcQ4U8E92fQTGNtyiumYjFxZxqNNTtKAFvDurVfGoRpH8yfojNinbSG39LjzmnNHxVmiutQ56iYC87qieCiU3s",
  "key7": "6Ny39isvEsQm3YbvxfYMPoQjeahqptUhkuwk8ibKMwdDjsASrrrvrQSVYPzkWczWndvbRiPcGjXkQUSMukDCyC2",
  "key8": "nDwEBa8ozns8WSg4nUsmy8khu3K7ZAedpbWXPPRxTFYDJQR6NpFv9WL8oMJJwG8j3qBqeXx4EB5nRezdyFkH9dE",
  "key9": "4wRhp6SgpJfQxJyTS72Kmb5Y5ZQr1nWJCLBh6f5cuydqSTpAzoy6GLqxTcFhkCKZN352yJDMEuVpGmni3iYnhD8D",
  "key10": "29DggU6HbTxNy315ejKrce9k9qKPUh2i6rTPjiV7NGYHWeKDDWo7mtZLVLsRpVdh4v25nN8W3f7vgUHxtxJGmXFV",
  "key11": "2ZegcnHiHPmR4gFHXJ5hsgmwQ7hiiEPZonQzhqqB9ciUHnMo9sQaRDWCsw2scxttVN4xw6SMSaVpy6cR4KcNAxYL",
  "key12": "mStNrLWyUAZJrRspR3cAQ4VwoocFLWgoJzWEE8JggFNqhqp3eju12qsgopH5yZ8KHtybcUWKbx1Q58TRxfEZxN7",
  "key13": "nPHfRqG8n4F8maXvkZ6q5ReeGu4FWctL7EJRM5QzrosWe4DrJ1NXk9HG3j3MN8Yeow2kcBmLXumYf4BXfN6C16h",
  "key14": "YA4iyyLRLBWpbujB7J98QTYMjnH9RiXpCjSqkxXqRhySMjF2nwJHpttQ9EvrXsi7umjAg2dre5BuYNZDbXL4TEW",
  "key15": "5EFWVsqA3RzV1vWDHLBJqVftJTuka8TujekkjyuHqQFtiAyTXikamr6J8gWGPVKJaWRk1boKjfcQ2cVTcdxZfiCd",
  "key16": "2U171ddCouJe4SwQLmnoufu8xLj3hKj7cYTe6WjTwNkfMhs5GvDoWU9ZAE3J5jAkFwLAmtf53Uy17vKqhSxNdHkS",
  "key17": "2KuRL1K4fNxLowG8SM2TvmsYoeKBdxDPVWhfs7t2m5YrvPBQrrbYXw68kFxwXMmjA2Db2zxhMRpkUZthPESmqBGj",
  "key18": "5odhFP6qivZwwbWcBXCCTnMtWueWgsgjTWh6J1fSJ3s32YHsfVsKxahQLoVQgZjmebZ3KeHaMq3Ln93p9dN1ZDxb",
  "key19": "4dNpkf82sDbJEKHXmqvQbDLi4pmv7T3VGbbKpAqLR9Bjj2ED4MfvfGrdVFKGyRQBSjiEZkCmqRnfHBW9NaABhTYk",
  "key20": "2wBn3pJjXZTTP1V2ioeWVugts6QnmXaKWiN5ui4FCfkiPxqv72Pbc85ombLWtjFTcSRVKGeUfAS3yN69LXVvc6RR",
  "key21": "3mjg6QmjUZAFdeFd79gpXWtTLooQ1cyx911owb5ZzQT2jwYgYFdbuQSpUtT9MxnA3s1gtEEsgqyDDWrNGnAvWfF4",
  "key22": "3Agw1rSJSZcvZR5he7T4zgGNmUTHMYfBUQMG19kzUwdGzPLQ1TH9PRdFbaji8r4RQbsHvtkpk5QiFN2zF7Wki44G",
  "key23": "58MJDUGsSVprV5KJ9FwtrkisS1CdQPTcZtwrZ3PQYPZnw9KwV5Cyp5Nwb8pcHh365o7Rf2oCh97ixwuR37YCSt1U",
  "key24": "3YVxGboXUiV4R3E17oHnVjVMdqGBgHphtvQfY5Vx2g3VA2MrbE55h5tSfNVuUmAhpAi9Bg4q5aS3AsLUDR99UDin",
  "key25": "sWcekaY2utBKWZFFhL39XqGs1DC99Um9i52Rj3xXw3n4zxiiaMR8db8D43Z4mCrd6ACBrwC6H1Wp8imjj198TCZ",
  "key26": "63EgZuec2cvUH5pfaxpkuf4F92M1evYhe1jVBsFDDT8Bd2xnf6gRYVx6ijuZxoYL8pT1XBtrodkNxnHR3YEPbUyJ",
  "key27": "5Poe26iX5iMbdZqQr98N9qT7dvf1kTgcW8wTQLQYXLaQE76WhQ9r7oju5kDHfHmv1MmSBZ5S3s81otB7vDvP7qyM",
  "key28": "643fHTDcDHkrKDHA35bQ7KwPLaegZLLsYWs6zQRviSpyjZZhtsnQW3iNMyfgoECExcTKL77AXDSNNxJsvHtry3fQ",
  "key29": "4GR3esDEis8YD7EA6QCg3FV2nAfmdWSdAxqoj4CPzyLDnVZDDWzAasVuDKs7GMJ9sZfjpjQ8hiaTqaQwWPzQRLD1",
  "key30": "22BVzN5WuVajaqAgY5X7DNHQjUjWbcLiv9XeyDY3xdWFDigyH3CxFWoSpv8mFzt8bBbXy9B2aY3B3Rs1Tcr2UVem",
  "key31": "2i1apRcYUE91qLHJiy4VimYt2P6gxCh92UuaMAqB96mwa5hmW5NAmJutaVJDmTGK5Ve35H6P28D9pFK2CB7JJguS",
  "key32": "3a9HzNkh4fZ7jVLkxCSwaCGuNF5sAxukouW2g2VsDtUq3ogqf4eRRmQ97y1h74f9C7FZktZsMVGnHqAeQA67n3QK",
  "key33": "4RaxvyVUVcnYQsQU6gdEauvAPzLUNRuA9mPWeVEGQbkoEMJ1MXmUjoXBo4mBJzQvsJaxWfuVWQpLM91KmfPssGAr",
  "key34": "5f1p9z4N4ZN4R5bJsif7UcPKpwij9CgD9c3Pmxk1LVpbHmioTyGZuvXh2CDdWqyT8FsQznoCA5PomFu5KJhMbA5c",
  "key35": "3ykAwGLnS4mg5diBRYJnvCMuvJY11omQdWshocwXvC37BaDMfng6ji5XqbsnejEe46hHYGmANsTBpH9yVgUgpS9y",
  "key36": "3gNH8zpg9xMshPqBPWsV73UdzhHp1m9xRp2TiaduDd3WKz1BHxPCukQEinMN35apGY6Tx1EoxoePWqMduprgaAju",
  "key37": "4evkq5zmMWYrBdV9NWuJ8j6ezPTxnzWeRyk2q5SVsdY48W2wKmBRgoQRTcvCp8PSMK3DaH9Qb6qSmSQWP55zo6Jq",
  "key38": "3yszmgiLFThL8KNGvQNrL18GMFa79LLCEgidgLEuXfNo6Prd46gbWVvhSfG1Q92tnzb3iat7LaygprGqsBbYqa9F",
  "key39": "4mf4LTHzAC2qd3WhsZdYKCNkcy9xMxkkH6pPybHjsKaApvB9DfEbeR6VGYag11RHRWKWEzVXqWxh3YQ4Pya8s66t",
  "key40": "28eZk7Gak2z8xyowTbB5E4wdT2v2Pox96ECXDNEa9rxKyGMK4UBYCqPUgKcadkdYYkqVCvC6udKxdFhojzkoNH7A",
  "key41": "fJLxxnd1xRrmyhZecFxhq5skwrz3smw288rXDD5bysVk5Nt6ncpyV9hLRnXB2fQHTtrf6fbkDMSB27STF6rrsH5",
  "key42": "EmGuWDHim6QmcCmPEQGLUw4Ps6J4kzM4g3h3bDjRaPaUPvdz9Ko79fKNUHnKAau9mn7BtZ6EzkrgegmUHXMstew",
  "key43": "5KXwGdW5wKU5rjAhbTSmExGLyk2QYmm5CikndD1t7MmNMzohkqYvfmWP2QxUHuYXcEUtc9vCp5MqW3SPzLBYcvQH",
  "key44": "3KsMe8TRZPCn9VdNyy1hKWotkHcdVqEtkNQBuYSRTNr5ywXdVHeatEEueiYPCM2cJ2xzdfvc3kPRM5BeJLKr7wGm",
  "key45": "3f6Tj1BvsLvJMYETeLMTu7LB23gxCtCExNfY8iquznWR54MxQwgCaoAQQTuFoVWmEDTH7gCTCncUdQYQdx1pmEmh"
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
