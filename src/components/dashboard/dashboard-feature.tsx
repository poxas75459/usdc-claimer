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
    "2kg2BpmQL556oMGr8Eotzfxx9ahWandyj8qkJQww41K31GEGWkyvwpFED3311c7bfaawknR6wiWj1df5Q8jF6wXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCq5yZ8aLeTjvhgZjrpJgy4GLhVAFCof1FUwqFv3Ctuvgj8GRohxTLs23sNSsp9VHattegbXbeWTV9PAKpn2tZG",
  "key1": "AfvdfXB1qr9GioU3qhXyrkPjvQ1UjfXro4WjTZx1moQWzNQUCG6ikshSNsuDCQ1LPKpMFqYFvzeZjK78XyjK8bR",
  "key2": "24pL8p588dWJqV3VLJXGgw1mF2RAiw2uJDmE7RvWDFwFwPez2tcHgtBGfDv5zwNoUAbCe2XNxhyXk3LDwE3VZX1K",
  "key3": "2M35YprgvUtUWcQc3kNYGKerKjsM9r7Q43RKCqQXxQRiBij1vDZcvMTfr8WzaLAGtrsp3AiPgH5aEfT7hRvz6oas",
  "key4": "3URMBsosYpEzhCiL77opVAEL7H7aUtCpcjTCBHkkAZLN6D4cJmGBo6QJp43HQ5kYYA7exS98FjWtPiKqP8pYr7qt",
  "key5": "5RJmp5wt9HeyfoLfZF124eM8bh6EiLpNrbov2AxuehLFKm1KN65YyofDQ3MpCTG4ksfKX6PeFi1qR4sPivC7UvdW",
  "key6": "3YfR9pqFMPP36spCA9joHNLzZGUihgxXD1MXX7ZNGpkRuDv6EVKtAU69TdCZhR6oYKGKBHpMVpECWyF7sQcy4coT",
  "key7": "2Rmbw1prLjm3MPmB7Yd69HToWiFYDy7gvvEDV2pgHLTZuC9fKK4nPCpcS3PAFxzhweqNQQHkxjJ4CvZL1FhRBJE7",
  "key8": "4ejdb4CCHaVcwuCXjjb39iCNXUXbejCtfqxZk7ihTtr7k3foKPNEB7NJBuTUNN4tpr7DF9fqqdAq1KPr2QKs2xE",
  "key9": "5qWewEDzhXs3bGJBNVhQ5VNBf3zrq6LaxHvfZGtCJtZpXhHHdVBPNB7SSPQGoptX7RVFtKsakDbYvHVqumq9LBzU",
  "key10": "5jxUBdNikwjaQbpU3DjSjoqy7ecvAcLmegY5J7L1U24W97ZEUH5Dhrhkhm2A7TzEdxsKP4ooJowLJVzDRBVfgGsH",
  "key11": "3CFuNGXNSDFseLKrjti4XDAwa95CRx2JAwnXHp6UreudjRGeAUNafmsaMfaECQHk46Y8B4jFbVeNoqCU1pbSeHZ7",
  "key12": "4qPqtZy1fYJgr8wVr4WVek5QLCsGrd3gFMPccpLptvPoCL85vFfV1zr24MtWyb7NmR7WUaMaUjYYRphwHYeqBs8x",
  "key13": "UgEQ6k34MPSZmcqLkyquPyBgCwhSjBqRAncrdGTs5JBVoLLqCaF2i46XumMwkm3adzwBkyKqr4fJ198twsWphu2",
  "key14": "29YRGWo8e1fTULkX7yRpLcWXYbjmzPTWKhZMfxMbLXG2AyyEwXNKQnx63ZBsVv2zriNrV9L2d2MQZbyQo6pGUZoQ",
  "key15": "5tDfw3mnxJWZ4L5qpZ9yWQqz6im3VYt8JqejF83x1SFggiyArC5MkYAZXfmMUEMQTY8YFC5PfrXYGJ8mUCwQpeTG",
  "key16": "2xdSRVYuWDLrBnK5DZK5G43z4uMS4UQ6FDUWQvJ19t8wqw5cdxv8NhfTjJHzH8X5L1keWAjLUvD56cTUNCej3hBm",
  "key17": "5gmZeg2oyN32DSuLsXqAxHKGRM5rBTHMLAC9srxgoWjTYEnGaNAXs1Vb3fyfnJQKrKVJQZu2ziAZjdoPGCJAWMeN",
  "key18": "5tKqssnqBLTh2emBDwh7syPeRU1MgWRWHReUAbmvFmZVj3bXFrECtLTusqucLJnMXqkGK9gCXjUeyKZL1j5SDAco",
  "key19": "2FiZB4NZLvJvpvUEWJQu5YwtJpcMpy9WtHQXhzveFGKjCZf2R8uN6fpRBbVMLNHzc7MG3jkaPfRYL4LC86AVa28k",
  "key20": "YvKi1PdK94SyHQTNhTmft4Q3DtBBu4bxmehPbGVhEsPzVc8cY1ztLEDTzvfXagcx33g43QThw4yEMyRibyDBk5i",
  "key21": "5xEW8mm1BrTkyGKsvwPo3sViq6W6LdsNRrznRdfTGLTyxBQZTcR8XthHsBMHGmQ47JohLq97V3zwwZVmit3kUaTT",
  "key22": "4rFVy6v3oYBTF1puepPHTmesc9Jh9BtUkswvGGA8Las24TVLEBq5AzUifonrUzDqSQVvQdftBG1t6EEFRAaWcPJu",
  "key23": "5ug4T2gEPvyErFLmUDwQn8JdR5a97NbGNCFg2gvGYGgPLkt2KLg5yKfc7ZfEfiNfMhPcSt7o9cKV3RAyinQ8YGH1",
  "key24": "5NoMkkWBFeJcze527w77tsHA55mMMPiZ8fkZ6HX5BBgXy5oQ1qLneZNVA66V6EgUwmR1WSsW3WQUaz4X1p5SKWGv",
  "key25": "67eGtEfpKNcUZT1HqyEtadxaSR37gWu8ENCRMnu87gdv1vFEAmKExVjmEv1ZyfoK9Gxngwmrv547Cp3ZBxuB599u",
  "key26": "5W5hw4rCvstVM5TKW52MXsWPFE4KtrQEJdyP52AebwdJaBXhh22S171C8e529HaHa4r2w4yAmUqK3vKfy7HfcwLT",
  "key27": "63uXwiLM4r8o6Mrje29bk8XyFNETPKubx2QMuYS747EDfoyq3uKz5ZAfufhiXS4ZgEBKuxsQ8Fb6oPZg63L7uvKH",
  "key28": "46uDXij8e7f1Pyrk2ruxG3D5ULD2NVSUHJNZaY6EpHru88v8BV9SagxScXZnat7GLxpsWDsHpaHwAZA37Duv7cj",
  "key29": "4MvzzEMhrrfHcjRsFCK2XMn7qHwEtVp81tp1AeJ5fJFpn7hekgLcBx8Y9SG2JZrNcHkte72hGZefuSN62zLxNNru",
  "key30": "eN4j25aqEYjUX4J8btgwvhB5uoeu4TaQxRLwU48rpFkrhbLQ3CDGb7yZ95KaZHgVQNmuTwkM4DfGbFFDPJqyHMQ"
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
