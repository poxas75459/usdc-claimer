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
    "XMBRvz6fnfCUkrqdAHS2kjpkzZZzQkGv5XV2SfkJdeaTQMysQsG3wjup1vNvgHXvbrEEx8zRNSFwja4hut5mBAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgEgR4mjx4p1Ps6UwJN1rhhwLw2vjxhaJHEYbTV8qXmz8KggrZ1CHQUg8WMXaYgY4mxf5ULNABfHaq9Vgn9HyQn",
  "key1": "5GcMoVnLHE8Cj6Lkd3GVHeMjjFutZELhqG8ssx11DTiBwc3Ehnc8xKdfHr8JgJSCULeRJpxXuEe8eYSGuWShRQQh",
  "key2": "53fPdxDHyWE6GxADU38P68BRNVoDhJPYnGf9xRLU9BWPrmXYvxgsDjS1kHa3zgMQFfLbWbdwTsEW6Dc8YjCJned3",
  "key3": "L2Zagz9htQvFVZzHJjhiddsnPm7ABTmXx6ipGubmZmpqSA1AntTW2P2bUYvq4nhdq6oZDGA1fzV8QN2wqt4q7My",
  "key4": "3mY4xgDqdMQNvGfeivUtDneGyp8LZTG91uP4Uuk7ijVLsX3jNokMCxkbqEB1jPGjgzALBGyNx7jzEGGBx4JtXjL7",
  "key5": "5SphfMQvczBMGbAWP5gNCU1Dxpjz5aNVVRuVpMngbaT5CsCjpuqDCjQjq5hPgPycZNugH9z7YNTwDEYzzVfBAFFz",
  "key6": "59C3FJntALcoiLu4Mh6yqZUKkAvgqEZ8WKoSW18KkVqPAjtWzPEWa2yeLSGoDkb9Bsy6d49csS72EVHEcMewFF39",
  "key7": "2mAyp6jDegTcbjEdZYZyp4k6BgWTBZutzErwe8zdkFS9TKsukJcxpCCAPr6EfEQw23xKcb2xzWVsUuA5qJsWS1wy",
  "key8": "4Uh48GjCJ6NfD5mSgfgQ8zTLC5T4JwKWAUWtASRuvUsVfKv7CvaRagKJWTFm3WxV7sMdGCj6jp9RTaFWHTjrR2Dt",
  "key9": "VbTP12FdaHUrhduahzxdH8sDvBrxSrpJXWfcoPJCfMQL9g1VUESn3hFHgfdZAr7D1mHBECeyuydmKu5bmNzrpeF",
  "key10": "5qyT7w1ny2up6idV1TqVZF4u6JzJV3gHLYsWf6HGeMprjBziFQ1XTwZGMw5yLenHm7HgfCbL5f5WNc69DEnjcEHY",
  "key11": "4FaSpKY65X5saeWV7LvMNZATgDmPeqnG5f4RiA9ABVfsvkJLpTVpFtzgJBRAFfnrZZGYEaqN5rEBSxWuFecssc77",
  "key12": "5oycHXHCQfGjo2zP1hC9GoTQvNAyrFXxBZGiAE5WZc3ak1HHri2crPSkvCMEsaucZyve8DK9dA5B1b47rvXBPPrw",
  "key13": "43jnfhEQh9snbCcRWmDfX4B4whJfmXT1iCBbxcL71VfBB3mdpYPUcnVMNYAHiUfAPSo6QtAJsxAtMkvZpuELDbPv",
  "key14": "5BEKPZTyR6QXvryjYfgq3ZfE79eWjm2y8iKVrAevYtCcDbJSjXiBn8bah2HzXyjYRTLryJ6QUqYLFY2oix9Fyq9b",
  "key15": "3oBFS7rpqy87DB9uj3Pt5Cso568Fb8znjyg3vSPTEGSePnKrn1GuKb3gdtvTRBqLxsLi5MekE6DdGqUToK8Jy4xN",
  "key16": "4oUkNv2bUWTXgM1NxrNjMmjYDopZAdog7uvWLCN1oo9YpCzSh18a3yvg9Y96eZYhcjLBCFXDSLfp5ygGXhQqA971",
  "key17": "3Bu8FN8xvxWMDkEo4Eh54UoznGuKqtzizRuVs3Gpqc7zpRaR3zQZeUo7CwZioy3eG9AAagNhbHbQxAVWjhjHBcyK",
  "key18": "JLiFHeq7iGKAZVSpuvnxzdvCpXCppbvzweUje4hG5CrYFfypDm6z9BLpNht9UsqKEyuH8gwrZR3keSN25zQrK9j",
  "key19": "cjKAPKeF7TAKAZmbd3YEiGB4YtRB5Gox5aF7wRFrVa2Bci1vxXK9fxBwgpxbDUpbW5Qcnv8CjQwQoLDHtjZPcVa",
  "key20": "4Veey7fWSN8JDADYLT3eXac5yVtf1KGR3HSZsFCnASKuUj1SUxwc76447uQU3HUd6qaA2eYNM6o3kVHrJfWWAFbp",
  "key21": "5kEgzSjmh2KRX8S4k8oFYgnC2CfKCXeFua1SaJQZJb5JHrzzrTzkFoDzqmmeP7GoWsDpZCvx7zb9MsES9jFSEbPX",
  "key22": "33kzHRUTEdqU9KcnzPxpWNvpyEpsQKNMWbDAhRXhRo2Re17CDh8XFyd4bh61yKUW3m8WtBJJzKB8sdVDEseoiFdS",
  "key23": "4WuLL7C3ktvNAUU5JgPovidz77mmukocXMP7cYwzxPHazNoH7rRE3jodDNvu1pgdU7abihziquYpf9dv3EhWdE5J",
  "key24": "2D6JGTL8ePXJzEWuaTwMDubeTcaPcjyLMdcn9QEwDPd5RKuLDhbiouriA5id4sPuz17HRW765NGjuyHQk8eBFF1y",
  "key25": "3q2SJBjjskGdX9XZqGHjcexCpL8yu3zQfepUDEJYuqAM6c7MMzyqP2PAyL7qEumX9ErtoYXJReCP3od9TV8QZKwG"
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
