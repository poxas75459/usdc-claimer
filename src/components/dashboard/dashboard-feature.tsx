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
    "4dWz7LxyUv91bZoVCX8HsUffztuN49jD1wphanA33JATpBijDN5cLSHuXduQE17af9rKsxvo1PboVF5z7Lg5wWuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWdR8oAaPfDQqZg8z8Lxzpa8wPcKSQmnq6hj1UcgnRLmRXFj1jcnQS3pvDM6dvXhDvRuL7xT7P5J775WfSeQfKC",
  "key1": "4Ni2dPesAxgDuokjyhXTuwh15jaEs8Sf48jqWdRTjTxXJMppY3FLStR36SrR78HxGJJYBUsEQjUhoW3FQPJrPvVV",
  "key2": "J71PWBdMYW4ShrDFsP7tD8yS2BaaRsrLJnzockgwYmpGCrx3p3QZ7mTEjsoJJGREucnSHzp1mzGWGLMHqmTPBdF",
  "key3": "2HqT3zhy2BfVNnEAgznF7cLBnqFSMg5v6W5iLpf99hk7HtwmBkJUm43k1YxqG9KVJ2fgccfKbKHyt7UvgaAgBEo",
  "key4": "5rFiiwXyZTRj7WiS7KU9VpGygE9HfERXT5oshz36DaubnSbR8JT2NRXQkcJPW91GygcqE91JDhaqMwmxN2yjuamW",
  "key5": "449mnUTz8w8pFuvMj5eYnpJpMeE2yJZFnjdc4xTv57xuzSdbsK2cqpSfpHbC8dzmF4KS2heb3UkVFNdAsMpTdPnc",
  "key6": "bRFwCixw12n56MiMQp4WYVkR4zEofET1BJt5HtsMzSi5PzxLNfqaCfZtcV4mnF95D8cPMGkSWPss6teLhZ8mmfc",
  "key7": "2r7N2Xe8AHoFjZVNyNJm4NNgCtbejSGdN7BDgcJQQmMDwVXkPAjjrizQq9WdisoZgq41uTtkUk6Dgju3SVeVFpiR",
  "key8": "5rpCPNJucAxYMLiPrxcHoD9kKNL2xanEKRtYJYfHjvCaF4baEEqc2RtZaMptvnb6cUFTqxFp1a6eaiDZeZpABhg5",
  "key9": "28nRu9bYps4ts9BMEp2Bn8PJBGkRSVRwMt8cVfi6tk2awAvMeF3Fk2aB2HbfCa1wNZrfGK76joxkifbtkAt1pTYu",
  "key10": "5ZgyeX4fHWrpFjpL85WcXU3wCUaTjxd2XZUbXmTwu2b4umJrCZVg72MY35PycFCjj41z3vcgPPmMz7XbgsKdcjxY",
  "key11": "2g4Hnt6NLvHAViy5h2nCphR6SDe2ZJiLzJaA8nHzUrfuAPgiyhEzouYpDa9zbVxoGjMzkQ5SQ3cujV8DgD7Ts5yC",
  "key12": "3DecGYSG71ff5BqAZ7jvHszcgXx23iUULxNQzRwAAqLBaXtXgsYEsUeAaMgvzPe3KzjcZ1mExuQwSf1cGwJDsguv",
  "key13": "CX6xU2R8oob8ntNV5ZSKUYGzATaUMHLdZFX2QMKdkBFPuuXjEwpGXjhDfG6hMmjbGsQ87ZkPYySndzRddD4AQL7",
  "key14": "4nRtbnnzE5k7P6AT9CotN1AQn83kvE9uMqeXpyhWJfRiLzh6pMvrMD8rfkJJWrRGeffTRSq3d3b1eMyrywwyMpzi",
  "key15": "2oXkpz9UthT4Nkavx1cueo9TDofh1AhyYdD4WiqhxUWBPtzDWuZkG48ALPrmD3Vutzt7wVw2tCucz4w7kN9FXdRx",
  "key16": "RoWRbSmV4cryd8Z7b8FY2qGJTYRQe9Pg6ZF3xCwHTBq8sXeqvB3TXH5y5nMdoPua9YrfGHo3Ypc1jRT5mfJx6Jg",
  "key17": "U8xFDnSzLgtJbGCLJ8K46ZTMxV9LQf4Cq5KdhDLB4D9bTZydTcieso8wV8FzAtzfMPs9hVZL9ANctovUPsr6Dch",
  "key18": "4bcayVJfdsynmH43eMfsndJGmJNRueyvv7hQsx6HBQtj4qgZneaoUBhfCUTEzaqhcZ9gvkv8G3FYBSqPvPWABKSx",
  "key19": "2PHNUVRodY4o2TqoTNDzpSMphT8UaJkJKxFb7CChBs6V8ShQvWPraKKFkeGGVdCPJejPLgSCsnnWsADpE3CXvxPj",
  "key20": "kNusQ9bUbMV4HUFVi9eskEabCyXUJ4fgzNdAUfGV8izjYB5w7f3aFTzNKEJ9Q91fqTziWvLAxfXg55zm6eXsYio",
  "key21": "5MhGdvTHhupKND4HqUrzu1KBruNJinvbaxkVqgHnbmDEQu6m4zTj6P6GFg53V8vuJorv6FY6abGaJiWL65YQVnfj",
  "key22": "2Q3TDzsH8dPW3edQCGY4R8itmBwnQpKG4bsUK5id25TG5CnCXHwkq7CkrtZ2FZAWFauNxEKrHPcfgn1qyGfBhgQ2",
  "key23": "3sqhJWiLYQs8TWzTmhNqvKNDnTZ7o6CasoXUSBnzQcoMfdfZWG4AXkxxSuLpYg11FQC3rafwG5PDtdiL9wykBxEB",
  "key24": "9283iiWpa3fgqq6rUZb4oBSV94RBSioKbStR9WCYepL6PmeXVwrBjk1St5tXkZQaHk8rKmccvM4UGjnsNyHa4tc"
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
