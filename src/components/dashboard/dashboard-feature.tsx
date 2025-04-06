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
    "2ZwuL9k8gRRjLVikZXvv1HSXCeTNbLpBHUdoxjbrAmqoDuucsrRFf5RVMhM1nCo6uVTQjLiM9TiZMscrSSMGyWKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uaZ1dhkVv3CxMTQB1Emr2d6AcMD5M3D6nMBuQKJAifELQbupGn3R3ZqRHSEcofySgaMSkhwyJfzjNUjg1RoiDDe",
  "key1": "4AZm97UXF38jtFwWZX27kKcmaQyJwdr1G99T3VYRjdQP4LrBmVcEwSjt9auEgDazWZnvpFtxm6fKk63XEG8z4hBK",
  "key2": "3MViRfMPtqSv4K4fftBBBLJVoxFZsdeAE46LrVpZiG7n7Z6SheVEvkM6p1eGmEDmkQvt33NpcBJeDtg9sbsoV2AX",
  "key3": "2GktM47sCsoe8VRZLjFLF1MQ8cbsFvvsiWscAYoYRVSGyYJsZ8D4rH2wUxESmhSBALEgWYiegCB4BLH3R1rvcjHA",
  "key4": "3BnXnf34Uf1tkrqoXUmPbMMuvyBQGkuLgMsZgsiwGAGkx4cbkCH48tbMyyKob2dENnK6YujKwPREDQYaocRPaFh1",
  "key5": "59XsmioRM6wTzAdwbp4sCffn4HivaSKKf5DpLzMXwD1HUDsiyAWJbtBHuQ3x2BknEtDxHq5cjnRPjvgjmmRm25mT",
  "key6": "bU7zKqYKinSLNdF1Zcue8mAp9DR198yD2wm3whc9qcv5YxsDQzfgrJe3FvMBpAXMEmmSuT7b5K8z5Xqevky8LNr",
  "key7": "3v6JLwXrRDLsDX9Tq3CB3XBnPAkxNBHiU7z3NT51UgnA3vPHNqNxrXcT2UgrRspacb16vDpqU6Yejg2ZdXZ1wVvU",
  "key8": "2y1GxC926ifHHNU56CsGLDyAgyVVNuGF8aikms2FJNojtNCiwE7kPSgAKGoSBCzMUd3Tcm7SuxfDZHNvxPznoigs",
  "key9": "X6ZMN6LgBtMP5TLmuP94BqwTU1pFDfefgktoNPb5f3ejoJFk1KqCTT3vzEDahHozwEbTjroy26DY9vJom5pqjq3",
  "key10": "21HM4bzC7eyqwbgQZfv3bb7yvaoMHhePnGTNpathhqBXGucuiCg8rNmN4SeNZH7hUsjFCynR2NAEUYduXhLxKPy2",
  "key11": "2Y18DbGgynkfT3dhWxLtwLtVQC8h2M9GEB2KQBweFBdtcTJXrhog8K6qo1EGbBSqPKWzoXAVenf8kddP64jwdkvn",
  "key12": "2pW48b1CkN3MJSkJrZQZmgWhUy4J8mUv8vigb2Ru9Ft5WwASC8ZaK6jnSXCnfsPLp9KnXzRhLLkTcXXGL69Zgt22",
  "key13": "3JVpfd4X6eErZ2TZcpQK1aACjEZtmYyTybK2f7GJH9MXUAoPpVH4fkM669EneP7yAbVGJkEpxVCeuvDHCN8wBSUr",
  "key14": "5eaZp9CUKmo2sWdUAw5fwEHyrnQKtVWmY2uCik1gURXk9XkNRYEoAXzsKg2cckb2zgrsQC5EF8pCEoNw671ehBoG",
  "key15": "5YeUdXiEoPUDu7XCH1a53qBHHyn8QnpHQYpz2hCe9Q5G1SVB4AvhcXDzrDMFWKRhryvnzjFmJrmoxSNA3rtSKwp",
  "key16": "4JMwviTj4d6KMVfKewAhnADUKinzG5JdPcxEvHTvKTjkfc5v5dqdXLF9KQYY9njT7QMY5izzQH6GcgQo1agZVXxb",
  "key17": "2W9SdLFRvjYNYWRAL2K749TAGJcKwdQfcWNNSNFRAmB1quByq7B3RdJAuXmHbDMfMYGfPK5c1cKumY3xXZBcqepE",
  "key18": "3dggpvQkEBiUAyGjHKRcMqWzjE8QjAz4qE7ucmgmahfZX2X593xMbrbdkawJ1Q7uyF6rMtd4r7ofuRLfkobEZJiL",
  "key19": "3EBXQnEUTpYosM1Z99AkExiaTvReprYMyCRCSFxLCd6rYmBQ3XDPSsiJhgSbjK9F7utVbvTXKuaXMnk22SdmN2oS",
  "key20": "5ppRgi9txBuciLfd26cVwm8MwuXVB5HbHUHywL2i2trZYfsEMpFe2GRM6i6dgdgxbfV52k4W18hbSnqayMJCYN1Z",
  "key21": "46uDwTD4PczuCaB4QHrf7HQ6Cqn2s2wjHoen4BoScN86M3HuAZXVL9RBMvkKxxkHX8RTQ5MY1jKkvULAMN4peTZb",
  "key22": "3nCxwmnpEVjgSaN4ErEY3tNnH2jvfzGwU6nsVyppAZoCsRdWJVh1723pKKia1QAkPcbTMGfufBHNexipMfbVdVMd",
  "key23": "3Ss8AXo41PYaCAeBubJwgodtvNoT2h8CgCJW4BjPRSKZ3ZPWsd2pWmS7ZXFv6f4HSMH4bzV55NqxUCTeBMZt9Z4s",
  "key24": "vUsCshMGBrJ39qBwREZBMzs7aP8tjbNNoMeFhYCFdNA6JoANEDXHgxAHsu2MtUY561wxmtLnPsZLp7itQ1HhnaQ",
  "key25": "38s3YADBdxnDEGwoT4v96mnvcK8zhjGa1Efh1pXtEdyu51nFdQXaooaw4EW1CL42VtK9jr9bjk71VZ1t58hYpKc1",
  "key26": "3dTYDqhUbagUp9L3sKFejnnD98kYhmj6KF3rr9tCXpeyqw2bxwf4Y4mU2LJt7pVDYxYjwfrYkd2fBL5zSu5QsUHU",
  "key27": "2o22z2HCUiHaivJbKDSZYhaWAiC7EE9wGaPsUAq3b26PQszrvJvMzyxgTe8jbyJwtjNeD6pUj7TBqqMJxiTEdf8G",
  "key28": "2DjKTBnSBxrFs31w8NsYzVA1SptpEsz1ZwEM6g55cgXxJcpHfgoPH5ioBXRRELE6vrrpN5eUTkrkXKzDensX4a7m",
  "key29": "2fDHwBD4RpsdWE7WR7dJTwpYUFaNmWhpK6BaGJ7o5w6iWXEygQhrJbjZAKJXZjiaAScX5rDWKGBk72F2RtG8jB7L",
  "key30": "5A3mDWqjoc4Pp6WzbzkmBgGrNJmWb8vMGL4KJMWyZzbSFA5Jw5KNYTZNRMUoMj2mtk2Ypb6SBfsQ7ufMq8aogE71",
  "key31": "4n1LJJpuU9MDDSKvDWNHRY1RSsoppEhrC2zgeUfbefhjBu1VnEzZ94rGNMUCWyHZNGvGZmPQ8ELf598G6J6pHmbu",
  "key32": "3QBYYyCd3obHgkoissGtD6Xqa3Qi32gCnSbL6saaaMyvQBZMuyaQ86JKi2MhWzhkyKLd1CmVTNuengHiCTFigNpC",
  "key33": "3aaZoQJcEQgkL6s3zJoyD2RmJv497p3gzgT16ifD5Dur4EAK4yHmjMsJm6U6L48CMSu744qEGF82A4C9vW2prFjM",
  "key34": "vZBC7CsDsTssycbAzin9EH4PtjVc7C1N1XbZw3nMb4q8NCCx2zkVCQMjbMUx7Nd6BcwzS99WdREUWCQtSXxWKKv",
  "key35": "4tiwQh1k53PH4vZUmFYvkcHmdCMLNQD6u3rQJW1Y34Xrph5bXELB48Nftb3wYG3q9reFGBu1CARNusdD44EX8ze1",
  "key36": "5MEUDGx4fCkxEntMygWGU1tqvwRbvtf8ygvouYgJYuYEG8Znnx47WqFoR1oSRr4aaC6oLucosmKeU6WFkvMPXgy7"
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
