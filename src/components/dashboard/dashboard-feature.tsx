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
    "4XnojpSVTz9fUUwm1hjqFbHMo3KFYGr3peQHVLshsNpaZNtQ98cVEcZCiyp8fLm2tPShRggoHPnjTZyhgh4kH3kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H695ZPuH46qrBnMnboMBnHedAcuA2LzoXuz1pGEpm426uK2NogsxD7HhduWn9f2GS4uysqaSVzdd3cQ8BSKprka",
  "key1": "2CuSpDuPaZ7meqQKJ9yRuPCDqpqff7QaiU8FqEb7bzE9Hk15gFja1bEPXfkhKzU4qwiD6brd7XcQjcX8ihFbd19w",
  "key2": "2oZCcMEXBtTqckiT2MhnDvgu6rzEcCECSgJZ9SqhiMGCWwr9itWibdUKfN61ekvb7G25x1E2edTG1xdy35QNqZh9",
  "key3": "3fYm5tNqxfbJa2Ev4ddNsdemXVnZJ1QMdzhwyHXuCvFsLRqFXAWsUxosn6J6MyQEddbksTVaJ4n7ZnPHo5P2zEqp",
  "key4": "33D4ejDffnDcXwhZ94rcWmZVz3qPsGaLRYCCvU9kK2jiPF3PPeZer1HN8Upk1rCu2KBuUCmYJ6qgTd9buM1Bknd5",
  "key5": "5yxNdT2mE2Gjr88fba4eC2Q69iWMtySMByd31pDZFJwSL63uoZr4KhBq1JeG3wGGpemW4GZS59da4inQYmRPin6L",
  "key6": "2VzqNtEbYd1UAPQm4fm49e4BLvcB4khwJSWeStDSViLQRnKdpxpRrok476dSJBzEpWD83UpSbYfF3NbCR6tee9z4",
  "key7": "2rNqYpMKwXeioyW1ufK1Q12jvdCHagszwfmaJzTMWMDY7bgs5X2wCNhWgkJ6GUmuBJ6cPVQDWV1guEqq2hwEPq1F",
  "key8": "44gV5EmBg9rQXTQQZvcEP96eja7431k1EY9gNBxTYx7XxMgkScciGcaJTYSwHGKT53MF1pD2AYQNBRfwyQ2gRSyk",
  "key9": "4h1My5Rwyt8NE8UvC55oo2Cf944spj8LNtrMNLRyhgH3q9CDdd5DYFznPYVBW5rrWNteVgkpGKzHC3FuJZWfXKWa",
  "key10": "3QabDxAcVaLPoYUTThncvqR9RSUaxRH85312KZKGNsRthdhNABvt8jdYVz1UmG5A6mmZC1R4P8RXfqpWAt45pt2x",
  "key11": "3455oHmy4BwjNc7WU9LESWfVbSfXrGzH1MW1ekSGzDK5Kp9iYWkpWEWG2vWTZvFBhFcgMXPCRmdug5UVEUbVJLHS",
  "key12": "2SXQ5hmH9VQSFpaB5gPtN2Sx22AvrcYqFDZ9aFiBEGEMFm7u1dy1Vw2npVcG2chgSXDsjAyPCgR2XqmkUrakNtqj",
  "key13": "5bQYjXuWHJjyZVnbuNRHtYA4ftG7RrPKUrD5ZAQAaBANgAUpsAxzMAJMU6Cg5chsuSJj7DBeakKkn4NrHcDy9bdJ",
  "key14": "2rRHwYAoGiCee1RFJLsvDr1DnKCJZ1n6cJ58PLHksUGAK9oBUaE5cYPajPnRPqv7Cye16d13uTfSDmTzgibRb3Eo",
  "key15": "4oEKbLKrktHQ7eVucYB2umRrtvWCcQYEarcuCU38nGNdNCdqRwfb9unJbNcZnVPJeReGvkMTKSLsWMFKpiEUqTrT",
  "key16": "EQvp8UvR54CegGLpdQVy1fyQZEBaZArTzSNvd5eWBdHm3YmciRyUtB2fsKZ78JGprPS3DXfyt9GyrKHg7aQLeaP",
  "key17": "584q2KGdf8N7jA3mVBAu9XMeeEW1h16gTSR5yC1eF7ECfaECjTUqU7yk7E1uhbNJs69s2kLr565Qde491LJTQhcH",
  "key18": "3SBJSuGpdc3e71vfSmV9kEDp8EsJniHXEFSMe5WVjgzFpHgAErZV4A5f7tbJNkpMLwPTeZJHQwBuBKq1ZZFkZmhp",
  "key19": "47PxfT3WxjSwtVFCKNVjebYDyGKKBj7HihttKXkzojuq8ttGYKpSgGToVFbhsPNtsDkEzMr6kMRbQdCfWTgLzkbN",
  "key20": "42VY2v7TW7tzqRT3fmuKbumuCQ3sPL4LNDRm4M9593csd8XiLHXQnQW2KpYNKA6X7AmTAk6f6WPCxMBiMM5Q7ekm",
  "key21": "3bbup2hq9VfWPLBJkop6vGHJftQjnqr6oq7onUGzkkjQcXXEKGetpf5JeoicuC28QPY7speUxWt2sddxXcuZaHLc",
  "key22": "3UynHko4AryBrgDtH2zRarNf1NdTqzXUCifBauVCh6HTaz2UwKLMfM2p8do16y3x8bucU8o2GNUupfVKeeyoLDkz",
  "key23": "465ZdqCZE4vNZA7ENhWEarKGF5Cue3nNEBjW885ikf4jxHxqpSyGNrnREiEzq5TJyqw7AbmNEfQXUjahxCvLgeuS",
  "key24": "4w7973dfnaypkuP9cX3wU5f297rnnW5AEEe9v5Xh6J7WJyBD2LtqE9DW72Y9vwRUeY1yUUMobhwNmSkieS8ttKY9",
  "key25": "2rGLnsKk8Jc7RLJBEpBTzdV4X3cdCaeDfW6YP2zjpbpZqXvt9s6ESv7Sf8egp51GwbeYXzSZLLxFa9mEBno3eNfs",
  "key26": "25NApJyGuGL3SeGHhmz91csHcMh4epoTb991d5fEFqyV6Ms7vAGNim2otojmNXKNSye7nuNMqHyVp8wCPebgDkR9",
  "key27": "3PfVCcoQNYGMCxHHSEfh3a2A9WzffCE5obSRgeV8iRxS2f651avTbgEwUSfE5bimcgdf33nm2DyGVMw2NX4t8gEg",
  "key28": "RQptJxFDG1ZzQRbzLBNy2VsTiCVY82kNU1pUyitCqkLeaDeagBneeHCxWiMwcrNRpTJLffRK5iPkkijjNURksd8",
  "key29": "2uLi8kkJDp9n5xGgrF4huy2Efs2Q9uuoRso8hMLi7fbxU3JZB7JuTphwyacx25jnDpyhoj1XjAritfsQBLQZqJGw",
  "key30": "45KRurUefBrdKmLFFY2LM4pCffWFxpDBpEJMwfKA9wxSvXj935h7AuJv3sXJaQwHGV1z6bGm9HmN5AGKMUJ4hYsg",
  "key31": "75h9DLDMVFGux33zyjvAY9rbWhL1ExWihUXurpXPBLp1osccHB1fGjv7MPseumz8VefGhrfVaay6sMmpURghFpG",
  "key32": "67X4LA5tx2PVupiACwH5Ji7rg1xhCkrJWBzuKxZ1yFvgUppitEJNU2qt7848kQRVJXqawq62SZ4v2V49vQsFd3br",
  "key33": "4rAhhKBo2JeT3YRFtxw3zUSnjNgvbN8YTZZ5jFAEKxTE6w4GC5b7wnqSJSnBEDxtFpB4uWV2gyVVnfGbDiSR3BCn",
  "key34": "5GXVVWYu9YsY447njNWouGHg2ShSoDnp4i84zTQLojEah6ySNeEAd6t5pAupd7Ce7wMsEuLiEmVDBA4yHF4TNW5V",
  "key35": "2H4pdnh4uCvZSosBMhWUgdsV6BPZbGvNyEQyiuqQTSKuaSLD2BHB4smWp5feqZkhi6kTD7CSpk29nM7t1svjyUnx",
  "key36": "2fXPxYuK1NWkTBZKM278vtze4MUv4oJJNXmyHFMiWEKvzq7mwzJRHZeH5EkUJL6k2ofuw9y7gXwZ7e169HNHjCaZ",
  "key37": "5vZgvcg1wsV7pLkbUeEb1qPVYLToYRBdoX92ZAedcwBQWmBvsi2BbuboszRhE3zCQ3HiLW29Y5yLNF7NHPN4XTSg",
  "key38": "3GJNfKDJABdui7LLixs4kLWncYW1TAtYEkouhjTf2GWKMjFEg3gHVbwJo2ECFndjYKSRZF5s18tcGE5JX14yykWR"
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
