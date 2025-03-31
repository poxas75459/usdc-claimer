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
    "4WHwMCysmtEa8kzwf2adUU25XmZrs9Y8R4RhWjp71erU6YLbSDC1GrXTC8wZZtxaZ5FLR12qvbsPjxrUKeQnLAe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqhCr6ZPSXx4j7fbP6ZmG5cfvSJ2cpAzBkGw2o2mZZKJs9J7sjr4v2YdpNWVoYq5Y4nXyULmd82T89knpWTXaDe",
  "key1": "2XD4PctGo8pi2cbGMFGvqLH5JjVdK8PVHRBKmihvDHKetRB76SLh3zHXYavj2gRXibnDVgwutDiccuNPm6z3BzgJ",
  "key2": "3qzSJggYmUVgBuCWbAW3qQVXX22W2pLi1saW6BJ9bGb8zarCf2aufGL4oJbEYDnJ3QT7GsiJDr6sgP27inUcsy1B",
  "key3": "4Vqz147LDdnvZnaWyV57uruExAzbnUuem8vyQ9SWTmuqj6gcQmgs7g6X6deuDXPPkbmJzc6QewTjQHDPQTiLDr1R",
  "key4": "4HPbHijEVTqiYUQkQ1GXxicB4XKSA14jNgusE4HGtiF8jpyHDXVxs4KiS3XCSNHcefvrNYCSpfRAXoQ66ncAep1q",
  "key5": "3aAxVWXFbJjkFwhE2YPcg7VVG8E3uTB7Kfb9DtGRNmjMQ9JjgbNK63af8hdxJKgQ5Bi4eowWWhXnDihjnYab36zk",
  "key6": "5Hx7tQk3y5k3FRZ3AwNqxJK9vAJhkfENuEYAzQ1MMCeQrnXgXjwLkW2xvskLaHZqKM9ntCwHhkAVHTBweVGpKUzj",
  "key7": "3xfr9JhF3PTh9W88DJR7W2ELSKZAXcxomf6pYJQpKhpLvNeg67SZ3jvjR63sFrQiTVMUKraaMHB8HwH7H1k73K85",
  "key8": "pTrsJ23Xj87pfniikYzcSVh5WRrup3kNJEjQUo2N4Y6vQZ5VPqqk3dyGupN1CV9GjYgYCGJdTJChFNf2xwScsPu",
  "key9": "3bW9efN5RRYM11zPfyBpmWxdKqtWyNBoenH2kAAPAgBRgcFdUyddRtkj4iQFVkuAZei6nXeHFVeZntRHKHbKx2Sf",
  "key10": "3Pc9CXXn7876rZrtip8w6EwMP7nfmgrPgYWLvfBZW42WMcT7BJP1kyRkPdMi9AsUqDmWfqGqvhDgPr39eh9qswX4",
  "key11": "2CY8G7BSe9X8rb2stFzLd5yfgBCYkpuDjebLxY4XM69shijx65AtZJGAwZaDdEt8jpwoz7UCN4No7qxy57zvjTXz",
  "key12": "62EfUTNAJoNdwQ1mA8Qgr2TPF6WeEZCdha8p9oSYjHAgcmLofjMzEbGm1H2G5gZJQ7EWVeVqDVn5C2dHcqQYEpWA",
  "key13": "HH2i4rJmVxbxeUWhppu2ViYbygfqJpTNghTxM3ajfsa6x1MyiFVtiH3uR5aBMfSpCBRzku2FV3R7bkqiGEfSWZW",
  "key14": "37rdrtTsvmPo4918Hce8fjtbkEPf92Mrv3tj5pEDEPL4d3eWfeEAc1LcbE9UhoXX2vWRUhfCPop1iQnbNT68oKFd",
  "key15": "swUMrj2drSGgbZgKbCZ7J47sTvCth3HBKnG9c6KfqUVLsh3xp71pCg327jHmWQD3u3ttVNtFhtASe1HsFqCvC6D",
  "key16": "4u76rkbY5US1ssTKgqhyUWxdJ1BUKzXWAEweP9TqXSpXEUFUNrwSGLVwDfjug8SpAqg5MLT7msWNeNPBv2WhBZeS",
  "key17": "2Rf24ZN7JVeLKo2R4ThAV1b8xN7Zi48fDVxeFv1VUV94fXBGvNPMwLv6JsRUfpa9r4AepYLUhWLR54Ffgr45dYqU",
  "key18": "SVRVigJVRyMfgGo2JWuHiv2FcqrjGrpbArqKEC8XdNorN3AoP17B1QHFepPHR4YefZPnyAe5ShAdVToB4q3UTQZ",
  "key19": "2B4G1CywBf5jSvHvDceCgg7JGBKBwiXqPH486gcbPwkrHKWCzdhyVY6hh6ikGiPYTZy6X9cjBoKQFi6RbgYSfnrV",
  "key20": "55H6afZGSVypJCAfghTc3f23zAwEHMecqUN4BvdXWcy9D1p3RcwDbY32vv8pJxBo4vfAV4LQqezeTMxqVNHpsJPV",
  "key21": "3cTMvAwJ16KXzkLZ6rR2ErRYtgcXJmcuRCrPgW48p1rg4dkw2k6vHrBQNuMWgvcgXKQ51Q3kmWm8QxxFK3VvNAxm",
  "key22": "vkqUkPMAtbjmWCRhdDf2Z67x43vVsZdUWYmGVmr24UH9tJ8m74E94TLGZqFeBD5YQJo97cDPuM7T4WWAchusexn",
  "key23": "2kzodr9hEbDQarhZUx4RVELL4B1iYnbnExKLUKdgAe1LWTf7TM9B1umUiBrMY3ZBf9wvcBJTkjoV8RezMvSxKh8E",
  "key24": "3jEnrDSGvRzDMkqYKwW1bs8QoLPp1gNHvT3NhuPL8TibJz4chLS7VTMfwWK2LR6W2UXDRGBSr5cmhkkdfFUs6a3n",
  "key25": "3Lp1SgN8E5gTmsWCaSpiGmzEfN1bNDwp7mBtfkm7uisZqVXELUDSLtVXGCtELP2H3GeJbSNpMM4QE45BxTqRQVKE",
  "key26": "jwV4jgRa6GeBpBD3nauBRkmupdRg5s2ZVV2v4rqAxWzwkCAmmfKf3ys9m312Gm1FENzXjbM1KiyKKonuJhPasKs",
  "key27": "Re8cA9JyYnt7nGbkpFt5Gyd7rNjkb2zVHvqvbGqpeta2zTba3KwGHEk4FbUxiwrHc5u5vBxiAkAcc2YCeaem6ko",
  "key28": "tsnoXH7PegGd6SVn23rXusqd7XgRbXKfh6WEp9Yj3vRgSdm49yLXKUzKnNZhLy9fj43cdQoU4AzWm2NNkGizVUW",
  "key29": "4De2GTUxAXe2YtaaygaxebeGvtay8beT9L3JdJQz4U15kL1t5c2326K5LJ3qLafyuq2qxNFZBjLPCSEbUnyBW2gZ",
  "key30": "2LVwvvH3sLhdT4u75BFeE4prU5TTqexkZnyU8yWdG89tZEJFbbRL6UUMMeTJGvTnSVmAz1usLzw5wPQfUayhSid2",
  "key31": "2VdscmABuiGBrLkYXYz7AkzvyLzpzotjnqxjKTpSshNaLxWAeaJGgSum8YscFSfi5JLf7YF8JCHek5mb3ytHbYcN",
  "key32": "5tBxRQcQe8tW21iqxS1TNT5uCQDJxdL7rrP5c8byCCF9EHgsS29Z3akePBVpaPtS9KM24fiHxYYbfapP8QgeG5je",
  "key33": "5uXsuMmd5XT8CfL4YsoQu1qbQotDSC5CeLs6aFFnqS3BpXWE5K7rZDyfs9sWD3RvMvegydo1Ztcx2QwG5f6ip7Dw",
  "key34": "2iZiJ36BcoC28YJPJnT6vVBvf8osAPiJWEtsgzemJG3z3m3pBxFnGZJYcq4bQNDHPYkAkT8BYJSojpmMLQ3RA7A4",
  "key35": "ZNYdSpvAhwtV749bbnv1zNZR9ZhFq57MTxNV7EfgeSccREmABRPAswKTNubNwZEEUKauaUAG6FM41ZJBkPQc5Nt"
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
