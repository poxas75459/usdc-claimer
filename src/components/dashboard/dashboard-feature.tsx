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
    "3PhaxA2hLCTxWg2yXnYE82brQLpEz9mdWf5z29S8ZhUofzST2qHBPFi1YiRcC7jkdFubhjkt4oFNUZ3rPbEgnh3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnEgMgHT4EXwDhyyLxLoPJxb597eY9VX4cJzc76L7cHT4vPrjkK7y9w8oXqn6A1SUVsDx8ejdB1oQY5qMRqnqqn",
  "key1": "3xUBUESguvPDtDaLPXEZm26tvGP7W8hCSsjhi889p1BVR85639CJ65JDYHx7ENMtcueqwioUbBooYZkvjJfx1JqL",
  "key2": "4i6si7NiyAZacUog2YMdx9jGWUc3xYrSaESZgTVD4yFpJKwNyvH2HoE21vR7K3hCL8cSa9HWUKSTjoFA8meNys5n",
  "key3": "3dPmsPdeaCgdXEcUK3aSD7beupFNr3aeJKhs1i3Brc5UJSNnkLo53pme3hnygdyAXphf4628V44dEjgb4CdrJor5",
  "key4": "2jdNsqyJbWU7jZoiCysr9nXuMX9GsdsjqhRRMqftYC4HrYKC3jc6vLc6isyDygkqXUh946jx54G6RyR5T538ZkHn",
  "key5": "4K4GqYuz4Hi8pRDk1QtMD3dviDFFGSz9bW4phpHX1WsgS3awt6CcKW3pb7MPKi6kmuFXdsnPbd7b2zBY2bakmbV9",
  "key6": "5jqyouSDzqtqVtnyyVb2maXHK967A1xuX4sk1FucU4UqUHpnbtPSfc7GyP6L9F65Q1hXUZJcgeAP6UW52xN9cCYS",
  "key7": "xhuqpXKV8EUir2eyzCvUqYRMCU9ZRsCKrV4sXxm9jxCyoqiYrTPtZ1YtwRQ4oCFXVdEGnkMB8EdZsyLw7AsPHLR",
  "key8": "2HhRaLuLcqj2ZPdccfczAQnBqUMXFb2yBEE5g2TNSpckCtf1PTwSq6TA6TqvuAJUKjTgDCcNvoApuFG5jmFpqmJg",
  "key9": "2a6NpEtTWtV9L9YeMdUkYfA8q3qtR6bVjJEH1zN3sgudp8c2HJKRRTcYvHRwhno9qXe7Hm56QkVr55k8xfDFU2Hg",
  "key10": "fVquiRPhcw5wVJAySfua2GmQDhdGvpamd81BvrSsDQ1fX9G97otcPWwV2myb5J4u2JLLxbyyTz8gJMRsaNJYu2L",
  "key11": "4A7NuDnBuMVs4TLqWAFC8Re6LQFuPXqCBQwhovXq6nFEvkzoXdhHafHPJiAHUK4v1JhuRqufBTqL2R2YSPoPwc2C",
  "key12": "P1xzqAdDen6ewoGT1wGPFpdo8LCPN8BvSccDJgTgsk8k8vZEm3UURgCo19rMuDxwgnyWVt1CJETE1HRDUCbQsBo",
  "key13": "2uLkyRQn7eGF2BTvvhU4zPiCXHYkgobji5MuvxQVzzrDXgWf5bnAfxiWQsi6CBx3TyVhSgiZeHVhF6m8yb1WtUjA",
  "key14": "5hJpMb6fcb84xBXznXYcN6ULgvT33gVKZrWx8ZsbQ9biB1nz7V23NNswei2t64iVdH5LYmJrEJcGdXRxUHuPoD3C",
  "key15": "2cS7HeVxE8jqxBT8BANj8GxBsxK4WTbbD4wqZ8u1WFSjEsKo5o24gVMMXoaWFnzYEdLmfL2QvSafxWkqfxN5gcMJ",
  "key16": "3DV1vDDhEdysMxL6f9MjXwDB3TkypZRrF51pQLUfFLwX2djGZLMG9YxjuLwYBLBAjbiUieuwNU8FXiwdZpxYrE9b",
  "key17": "2dMEce5gWWAKYs3GJnZ7Ya8pSSaQ4yXW8L7koDa9T9t46fuXGUFfsGmuh99dpu33b6swWyV6K6Xs4vWWekv27ivD",
  "key18": "5Xup7fzhuzAfqawPKfx9jhAZCuZ38Aab2T1ncvFXYnkWmQKDSno3Qwos939MYecMXJ3Aa3dVg4fVkTowaci95zoQ",
  "key19": "4XY8rxMpvQWxnKjbnh1i85jmC43VDYWhceLbYNj2szfx7uBBJSmb4VzbPAZpX4gbhbq3GDRw2gGxZi9KcryzVWDx",
  "key20": "3RSCeijH1xC7ddsBLEjexEZf5FedeAWyVTKPSoRVaXFLyHUAv1F3zRzkraRgvjqGom3qq2MmdppQ8U2P1dDh2gbz",
  "key21": "4WdbudcfaAJvaQZuvj4HryDieTFsKtTdJioistP4cBGdKMjiRRAFVUEmNZxvzSsSdd5HYaoHd4GHExiZ1jzS2R99",
  "key22": "P3wrMTkZmqmSyX2tDaG5vfThbrE1LwjbdLUwCx6H8AE8HNcgMwWYgMfBgxgRmRqd9WwfZPHRXGsdYCmmfyJAfx8",
  "key23": "5nyEPkx9vYtPepqLheHyhFsa5ivpVgd24KfoqJb3S5bG5m8Y4Sh3ypMAR5SQxv6FJaTi1rw1RJ5Y5V8TNpE1KR8U",
  "key24": "5eK1BYfnun9ATVhCWVn2QdNATVn7vMYSBpgfsJJMEgc4c2XYPofNVKG8w2v4onkUVjSiq5ifwP2ykDYceJBg375x",
  "key25": "5idrCCmTS8KaQwBSd338mKznitmv9JvrB18R4A9Y1U7smdTGf866PSQg2Z83DRpvrpsi7rDM6D3bvfGJRiDT5Lkw",
  "key26": "5Ns8sZLu9ex2jQqzUFZTYA1DpyTaovTWtQGqiK8HntFm4D4YNnZZ5RRmRNjGiLUgbghU3Mywi3Qqq37fkED7obaM",
  "key27": "3miqd9tU4yjkeBuPvNLMCvLpbisMVJmMzZNXaip5vWKdntUyCmGMVGoPj9CzaBgVUJUmdaUrfT3oLSgZYhixayg4",
  "key28": "3CDhZ6WicPg15xq7XZxaBup1kHg27vXt2DMGq6KJNy2P8ndwe3BxWB8KPhcPpLyiJe4W9dC7vyqMZHQmG7XgPYiH",
  "key29": "5V92swFKkMpcQJHY4KpQJZt1Di6c9tjzfPTdwkTMRQDCiPkN2trghsp5ofcMJeYrCvS7izsAmKUvR4AmyyLta1NW",
  "key30": "65tivgQaK12L6uwJ8PP28sopbq3GKNsdzaFo2zQdvwb1GGVg9vt9n49tSBbnXcFBiRZihBUYBRmf2Jy3WEsW3w9X",
  "key31": "5Cdtd9wVN8dhN1MvJAWkVbXyKrDrCn7hdDrJoPb9ZGQteeFizKMKS9tGh9UsCsTKR1cvzSvSgEyGcPUHggQ5B6WV",
  "key32": "25wjz1qwfynKTstAjAFvtW8ua4wvN9g1orkrUG9JjQb7SSVETuMmDnRLHLauYxMFcH5j995FkqDaJC1RVEQdnKHR",
  "key33": "4hLTWWHw4eHdBvnAfffz8WENq3WyALatgzbkRfxLXWgP3KifyRUoexfoxrYg8DMbJuUWwPvRwRxsJpYyiCgcL3Z8",
  "key34": "5uRQXTXjkQLsov4eoE2BNh4kP1r6RbSGwVXQY5f6kE8RCNHwittPDGv7AoJAZfxCNp9hdHrt193HgzyU8sZzncRn",
  "key35": "5eUVnLsDoLuFdn5XB1gaiDagJ8USm4Ddn8btQRd7CKPyoMVKVoxudFcHd31eni1bCN3ooyb2iuY4QXDGVBfR1Pze",
  "key36": "3Hozkyb61dhU65rv3sPQojTnjw61NRWRvi9vzqqDPUJkybmZGTsqxKX2WTifjzwXvUmd7bNkLSm59dyDoPukwqSQ",
  "key37": "2Uaq7HFXp4KeqjyEK3e7V6UAtmmBDU7komLxXBBwDQf3ewkYNHrYFayPHuCEKiRawZKDtRiP7NjGf17MTFYZqYw8",
  "key38": "3fSDpV5sQpSREKPvYfTE1gEagdVdHHgkU2nKFnu2d3CmLe8u6Argv1QTo8S1FEZugSR1iP6px3zH4Z5yCQpXHf7b",
  "key39": "4NqPqPYvWvRKsATtzgdfJ2TDXzNxrXaGzrRZmLJGHVXR83a6ffF6qenEwDCGUuhczfBQwVLMPqCsdd93Y159eUQN",
  "key40": "4JEJ2tsMJhW3Vrt3rfmC6NShq4KhXtGhuDZrgZAhdzq2SFAy4b8BGmL8X1kC8cAWXj1XvvDyucpRQJnsXw5XLsSA"
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
