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
    "3Bnts8MaLD1zTWChTMZMRbvcXvZMSNCCRPVsWLssHzhNHvEzRbYgqaZEo3u7yFHTpAQSEtSwbgBsovnR7KD2M1di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwmoQ5UXV1MNijZWcSU1ByXfSmK5Phon9SoC2pMt8HEuA2Q7KWU16474XDfnSfedG4bXp8Rpj6mr4Rrg13CStCk",
  "key1": "G4TS7dAnpvGnCqJj9ypfKxWtEhT7RsL2Lffx2MrwwWByZSf8tij35C3pxHKfrkRdSNDJtcr6C49AjP2t5YPanV6",
  "key2": "zK9JABN4csDv7NgUmshowZB651HWZHmQUxHduZ4eLdZXKoxjatUfyi5iRVAb728VJwopDgGCgdfxFxnUfGeRxS4",
  "key3": "5pPrikWqntR6EYPGhXt6YwAxR5Djjjim18craQg2STPRmog5EPc6As4vDxSFsxnUVD79v3YTAgcvsDq8Df75dp3B",
  "key4": "4v4pv55Hiuzbs2bQMwsyAF1qsz2Mh9uVmjYRLDkYXByiVthDhakhc8G8bZ1LCCq8GwxRVTdderPzy3BeHscYCusV",
  "key5": "4mGDyE6SiSgiFUVQe561Y4RGjQ6mXmzPHnmxgBmTkgsXo3zWGfVW5MvMMtU1WWyyfnDFv9qZHoXTg1PnUiuJbSpX",
  "key6": "2ntYFqpoT7424pQa3w6eXFddvyQTDn2LbdMKXooSSpKkQCcqwQSABBT4UTD6XxrUsBerC4K1mfuD9VTvfb9isMPy",
  "key7": "2ot4XPaJvwUNhkW5fQ2EjujibhNvYYeie4GQmZU4xCmkPafh9FbMmjBoBJmD6ibK7G6uv6r1c8bRDHBfphR8JYSy",
  "key8": "5J8h1zc3DmSnWh4xBuZJwQNcvXEJWWZFCGEDcDYuxyPW2EQqkt7j9NucFzYLsbZrmYyyaUbYyBL2TwFy5oZ6Wpg8",
  "key9": "4zie1uPNNWoDHF7pfKGfsvA97fiDx1Sm21wxXC3YbinyaNuY2DLovxa4HJansJupRsDMDX2Ad7jW2qdUoDjD13SN",
  "key10": "3AVZdCJSJcUrShMgB85tKB62gDe1vXr5raDTh4gCHKdMXSvrxiZ899oL9Q6ZAU5YubwEhqJ2RYTs67Q9Mg624sgP",
  "key11": "3rMVFwoR7HUxqzJzMzRvi8fqCYzMH4eGA7ZVfkaQCVsNWi2L3VhiFesDPxggmgYwpBNedw6J8rUv1poZZPTub9BC",
  "key12": "571AwhyMdsbsuJkp3XgSPFA3wjGcKv89sZoE4a5wyuMwyRBDH3SqFV62iXo6d7LPhhDDTiZQKcLrp8AqcUmBP9Wt",
  "key13": "DeHdtpmZm3Z89Sh4x384YxBSQocHR6eZpQgqRMimFuZsvSvydDwkS52FKgwSBxmL3B2nDbJyX6rvmWoWZfUJes1",
  "key14": "4h8sbyL4kBbbj8muo9QJH9Nj72qxRBPUS8HLZS8MVw2fo2z5FwhieSuuJWsVb42ctxepXG4LbFS1VwrinAoxLKr",
  "key15": "sz5TLVsxyvoTo1B1ENymzN446BjdmzKk6qS1q6T1mS4GoZDLuF1PeZDJDgXfgb1f28kwAeic321qi4dfLhcGQwc",
  "key16": "mZsjqWMLbgxxGWNzTRCfQ2nVpxNN58MDW1vtizf3mjZp93kUSUbMroxDrMzHrdQjweteWKXiQVccHz9zMD8T59U",
  "key17": "2NmatbDiAbkp6iUuNdZ4mzEcbvtyQdXyS8xjxJZhWQoi1KhKrtLUJunxEXtTb48hkJTkkNUiWu9rKMfXBuibEmGv",
  "key18": "5XZgZ4EspAwDTux2swkwNcfwLcARHh6scfqm3q1PHMsqTyX9Z3pUVW4JcosQ8YMmwbzCvGB7FbJ8QDcTgC7YBZR",
  "key19": "3gWQPP1gXqRU5wuSXe65Wk4SUoJb3mBFpUNsBT3yXdnVYBCxnQ2SE9LVz3YtDQBaF5S4tpVQXoPZKRuH4jVGPF6h",
  "key20": "2P6ewxMWUorQNeRpUYjaUTWvdapgQi7LA4zyQ6LfQFRJ8ACQbQSSyG5mxnAw1jV8iZYEegMJC9owkKBcqpzbfy4U",
  "key21": "2Sy1ecmDEbqYeA2TeRmJjGZjtusg1cfiBWepybMbpZRBUov18khGe4rcs8y9DMxmaMDWLbWnSKUsRs84Ctp4Ur7w",
  "key22": "4zsWC91Z7Mzre3DuBK3RkH6QG8veyYW4c7Vn6nEBVaGeAe87C3xV3mrqnBLyo6bRLLuhoNufXTNtj2bkJXWZzxsW",
  "key23": "392o6QpupLDXi2cKhkY4v8CnQCz5awqcJQgZ8S7EqHAbRUt7XXkn716QUHfB2uqPcUAJgiXrju1fAGswjWzqKzwB",
  "key24": "4wGeVQ6FRujkMewDkVaDx8cdLxj6d2Bjrac2jnKTF72j1F1L7Jw8eor6qxWabVWBj8aYPg3mGUQ1N5LXGeuM7j7j",
  "key25": "3JyTTMfX1epDU5oM8Wz53rJSpgPNQuoj2gMRLaCd4JAVWGiX1Sjytyc7cPPY942VuWjYKfnQZPqGQtvF1RTEpLFJ",
  "key26": "5ZbrWBt6smdg9fnRM1Nhs2XATHGgJmRPU4r7xHNQp61ab3NDg4PJCBFxpSARej8HeQXmed7QsUiE8E5FbgxMpjaL",
  "key27": "4W4qzPRC3KbToqskbBpqsaC7WThmhYVtbjrNUwMiLMtZcU6brQzwDRqeE6P2i82SKvVPY75hYtNmDGht9LhAu6K",
  "key28": "5YV9m51og8JPPJoxQh3LUCCo86EjRHfExDyP9zzzdy8HVMmRNQSKae5mdfE87G3U1HV2DHn2xTE4NsPaP9n23LQC",
  "key29": "3aGANxjvFZp3kSmsNc2K8CsJ9j3Tcw57dwadgZ1XrDujTjmYavVZrXxiFwD1CSKSQUyLcXt3BFnwbdxZcWPjEcnw",
  "key30": "3kraFYJBorkJSFKvHBqCHAJXsxGLAViS9nGaT8gdvCuKSxVy5wSkooeu2j3XV9xyc4krsVtWVmrhCsAfL71T3hwj",
  "key31": "4pbuSEdRq2TuKbZnc5F1MwsRMJTPPPqTYLJK8ceWFEZ6AGBfLj3FiarbaxnY2kfwqY7QKug3dM2Q2uA3oujHBRdk",
  "key32": "54akmFz1hmE12SAxy4KPn9TPWMH6Xhs5rrNTDQgGePbxxPxWYGZTES91fpvkM2XdQmEjSXpPfmGbLfKMmSzQCp1M",
  "key33": "ui8qpLjBytoU859sopRYsKmiwf2TetKTWxPkBz2JY7oUTyt8yH8W6W8LWbz4A2h2pnxj6vmTXTvkEoHHUkLEbur"
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
