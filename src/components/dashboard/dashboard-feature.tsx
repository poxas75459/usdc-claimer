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
    "ghJtu1XZC5pY9g27y7JcREfPzofiWQmDdkiNV2z2eQRt7oeeaW4vG93A9uvyLCyvg1aLnPmPK7L9QAVqkTf4W8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McHRN4vDdFcShuVZ5jCmjgZAG1AvqYenGhHbTtXd7GZvg6j7qZBom3QttzZPpKF3MJtie1dFnHsFhQ6ZwC1QrNd",
  "key1": "4cfC9bcbmasw8ckw4DwiG25SV1xsnyGhSwPYTNpqPCfk8zQNiNrqVydGnJrVuogRfUbxRxQXhsNNQL5ZnJZPt73V",
  "key2": "5RP5F8kNvKRoiEAvD1uKfT8GZXNRBNqMxLquYeagUDBEt3GF2h6qRNia3a6Cc7GsMGgggE9gVr9CvnrAVk1uFV1J",
  "key3": "RsK69hieUhfTUEnddyJejPfYY3pRqrZ1a2bLhXjbmFWYyeM9XH1uXDHaYZZhtHaHqtxUWEHiAMvf9YZKkZGKhFv",
  "key4": "454LtvTfhGfRLdPjg4Pk4Muys6RdaPY1AwQoCV3Qt2eN3mv7HUZHasNLrLh97Nu5TZbQhxYK7Bw37kpjgLyMkuy7",
  "key5": "2tvGBaZCDiftPfPDUXyB19J3qvthnieiJdfgGdZTouZL8XzV7eeEQwpLHpYqcnrj3ouA5oH4SXa5473o6FRbaKAC",
  "key6": "42PcfjLp3jEKxTe9Rve5bYQrvFzu1hyuLQkhGu1T13N2UmaddmdM937ousexUrYGdr3sJrq2d6kcUoEZGfwTYREf",
  "key7": "6pBXSqmgM3FkGprkTX4R37qvAv9DWpvYK1oqiCpqJNLD9rwjZD25mZ97as7eTHfBDa7ExL7cE9VUbftqX4w7QsF",
  "key8": "212LB4U8AJCfkocbtv6u2eEChbgDLTvSWVvE9Zoxxt3Ui7uvVCssXHgnqZG4ZTMT5Fees4UBRo5pkxtombFSgxy6",
  "key9": "2Y3tiX9dTvKvBnDsYh3KnL9NCeC9SsV8AtW68PBic5YZnZH4o3nZW1bDw36MsWZChhS2QNxfvqLvMQ9WcH54akFH",
  "key10": "3RG4CJwoBHFcuo5MCMjutuusxMbNwsohG7UXAMME5zksszGgtnhDHQXw9Sxo1dwmZDJkd7FsyVUL75KA7sCKTFiv",
  "key11": "48JsnST1M2vuZQ1ZkLvkfjui9GU7NfifrZ2XZbzSRb7eU9aNjTKm2zWuCoYMCY2Sqdno6KrpCXX2JquY1FeSTfbn",
  "key12": "39F4g2xXWboEuFTxNq9wALLbQyrUUb8eJkHtNWZWfpQCjAXoVygErAE6U5AmqWz6s36dquTzsAijyAnay4vg3S9C",
  "key13": "5yp1yCDbQk2hBsFTba4sQvbAxsTP6JQeUoj9AhRo87r51P3K2HgEX3jEnsg5FCXgwq6e6yC4hWsY7BdaCCNZkbJQ",
  "key14": "5xxryMnz65HgmBf9WBFS3exCsdbCyWfvX6ZRvQLLKbgfeuL6NFM9QDN9YZDKqus1XDHeokrweBzrhrMASBPXoYij",
  "key15": "gffeG1J7C9VTGxpJfLyRhpqEBNhxsyk8aVc6hDjrMQVpDjZYYvun4ecQDt6uya9h2Y6C9X6t2rejTbHhbBy74Kh",
  "key16": "HwtuPSJEfp1tLUiQQ4HV8jivSGhXqwwTUYJsFMX8NHnrqSSKYsLd81SGt1CyAyiDb8v1rW9eUBTPBSxwPkB9Nao",
  "key17": "3tXHSHJ9cJdevC4twJUQYR7gXN4ce3KkWRR2JyTwGoo2b5nyNgHWJZWDruqLbwTiFyeMLLf8tNiMW8snD8oBTuCT",
  "key18": "29Ti7cyyNG4gxosVNLrk8wAyKRvquzW4dZAf6rA8YsLYLFsLRipMLi5XYjHnxm77ST1zfzx6DAwhFC3fGreDNXJa",
  "key19": "3cbEhumvJwMTePyQLzaNTNKr6SxbrJGisBRxhkhViWwW19EoFdaD4iaZmAz7Zpz4aFTAXo9fo9fkquVvE47VwXNC",
  "key20": "5tJir5kuY4hGRkXkk2guGEncuRX2FZzq8DvBLHEVHuno1EtPEGn9v2Bwh2AU7vhajGqo9jkpGg4qYHTVugi5Ze93",
  "key21": "4aEqntwutb7vZLeJARrLna1Gmg1rt2WNLDmVCRFZGcYJoubnsWyQKAdFk7xeu5fFC8dtY8H6pViNbCuJJBV88ApZ",
  "key22": "5g1FTCRgpFVH55XDFgcvvYZgUvEBr4JV13sfRttXMbUsmx1gC2AJ7Ymfg2PQNZwCtLmJZfGaqwJRVa61jB6x3rQ9",
  "key23": "4dbPVknW1MPUqRo6ncG68jyYXc4LnxYxi4ry6NhXKqcHWEWV9K3gC5z5gkE92FPBiiC54M3i38H7AQgwWRBY6tUT",
  "key24": "56p1rgmMttz38u9SesGwSgcHTdv1jrKeYtLEFSrGR7ohzJsioqE3q8Uvm66yTVirftNQ3u3pby7rWiSbHUGq3548",
  "key25": "67FiN6sTrk6W2gJq5tcwCUwybCKwCeHHqQQvgHSConwvoJ9XthX5NwCmw6jo69RuoRTty9Xdce8K84pDmCMnqWAs",
  "key26": "5MmRjKBbgHNzz6E45RMPZEiBoKYgMBu2HPY42U2B4o3VshGJVs5fLK8f3GbTg7ztSh2U9cdLeiMXPhAEZazi4fke",
  "key27": "4Ae3khodNmKGDbVFoTAM49aBiEzTyBC8pif9me13GkMspBfGyBZ2QBpYFhsgWTTFFuzYzhyRQ7eriTjuztnYjCmM",
  "key28": "nMFqaKhoBEcu4e1E7CwRQsk7dqJbaZ6o3Gm4MTqA6H7pRETHCWqNxW1x1hTZVusZJPS7gMseDSuV1XqhTwBuZwt"
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
