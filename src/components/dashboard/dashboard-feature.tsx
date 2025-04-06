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
    "x1DmT7d5QfT4YPmfENJyWpU7X2D43wodmK4CyWu3xdf13rMsUaAKD9oFcY4ssuRYFEqJx4Nv4C8puXvy87WwMQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wBxK2Hw9N79N9rjTKCWiUMVi2tfkPpPJ4UukU81whG6vgg4s5D9EA8nMpsU6G3Nc9pG44BwigAYNPtCetVYBRvM",
  "key1": "5J8Qov9LwQJVZxyttfXhcQXC1Vu1ASn1YxbgMURNNxzDEhXvWr6YeQ9j5wuk3d4rxNcZNNN8LFkGJ5nCPZgHBZog",
  "key2": "22hNUSHRT3XVMSnYQoVrRRjCAerFXDb4Fddd6uPWSrsfSCmbP7vKtz3mN9ESrxXC8fZ8iCAspmLaYbZaUdxDgqx2",
  "key3": "2dttJeNZsQJisjXDtitSZcVyFHkjyEEU9tz36ctJnvYZUQ1b5o3LeXpmw6vZ1QuysT5Zv58gUHZwur2SAktf7Tfp",
  "key4": "BUH26QrMd2jVDD6uPyVEzyemUrmAujaDJod4kTyUdyzubhw3NjdoRVBFc4VCtm8ZsPBM7Y3wPbfkvEpfAzyyJ7n",
  "key5": "hxrSzgYuir61gNUWf2qX48Aaw8J2rwQZBGM4eFwToimDw4Jy8xP637fkrSLzEu6gvkKnQ64cKT1fLRC4XRbWwrS",
  "key6": "4b2iMi9qUNxVVQyfsnfVJ1gAusJJXjwysKQk14mT6PgLRreuSZv46uDidBTx1oEjRrQgEeyxeju7rBwhJbfLBCeG",
  "key7": "4GcPxFF2CVsxSHooY9GyWXVvBeVQ1Lw5Eue8XzNNjwKAGff2S42NzSvHxMA4v4rDmvLJRyMtRYsiHjjXcvAdGXSM",
  "key8": "6252Xxjqpaw7RRfCn7miJrAj1SVFQMNVLVMQsDxjtU7zD1qW7XSpofHftBxG6ZU1X1vdhu2xzQBKXEfKwkGxV6tJ",
  "key9": "62mWY32Qm55mZtvaqn2x4ycMbpmoY3XLCyMuAUXKzfiMenDS4QaG9x3Zo93SBvLmrfrzGLQMetj9fdLtrEZVTGkC",
  "key10": "2jNNRtrrcXRZQU5iU93seM1TZag6kk7BhxLZDnLRVfMP6iJeVZH7YiFCXjy9e5tXXYtaRxndHUBx3hZskB6P7gBo",
  "key11": "445WPgPW3AcXYJjH8WNymuJPCVMXa39RVrZzdcEHwrrQDnQM1RWqrHd2YQaxwcHn6DCF2MYEMDkYNdiBFtNSFhVr",
  "key12": "3souiqx8mDfcGnBGMyJD2ieya8HQ17pLYdNyoxcqMQgWnNFbQYRkk2RjLC6NupHWhBvM9x2FaVb5VXxPDHNqLp4H",
  "key13": "3k7Usuhpd1TLBh3NU6GBw3jaaq9RgUSWQ8qPCZ6Uud2YXWjLp26Vy7Zb2AEXq4fP3ipWsPDSTgfSN7RP3GFKtSKx",
  "key14": "5dxZ6e4r6H4FR2qEXafAWuoM7QCHHCz72hzZySi2JW3pFsLzNax7o19K9VVo3EQaeDoJdrzhy7u1e5wUmv3run3Y",
  "key15": "23U2nTw4AmMS2YwP48RDqDEjQ7qPfa4dgEW4H52hXbuBu9F5p5mwtpdweTX8BXf2dsC77t6JL3FWAnbv1vhSXGQZ",
  "key16": "rzwpyJtr3qEHvoYAiszqhp9w1i8jvWTwFikAStdUL4sk1CqPH6pRZAVeRVR3iknJwuHe7PTB3nhDw3FEV6xzVQ7",
  "key17": "2JThqUudNEjGXx9URrbdM4Uj46wK8329QYmV8ZQUJo3oiAPHtTbsKYkzpGwiWFSXqyzJQNtd44NpSpTizb945ncQ",
  "key18": "59bB6HAxx5GhB3F3a4GKtKFRoV7NRrvPt9AUB57EvkMa1ueeey22VS7sP1xYrzQeVN9cArwYw85ZBEwg9cf3En5i",
  "key19": "3Gw4KoyWTHaXbnUQzJdQRCqKAbYTGwnkon5feNGJbAQSooTPvCNN2sgjoNY7i2aXNT1Yb5iMUH91R5Xy25ohexWi",
  "key20": "9whjeSg9zBbJsP1WiXBe8jYh5e6tZAMtxZDsLEPncTyDiaZeRZFodsudauysWbeFiP1eSwmAuU9SQ7V1Znh4enP",
  "key21": "5sAitqGdUt2SqiTGVQyu6VR8t3Gcc3gQzogDa14TiddfGpSz5T2M19mmFJcn6V1ExPHcdzgwuohRmSUgppvxvbKw",
  "key22": "uQiPNNqbTTc79eX1gaCm4Gdf3ijK2FPXi9nQC19RFT9Dfa7kjc1YDxCk4fzf9fagDm3cc8TjykT5NEhd5MKxBUE",
  "key23": "64rnxusUnxKpP9SN9RMX8W4BY3ZXe9yYsKqpcnwj37QCqyNkEGvT1d1Q6nMzfAGvP2iwGscXqrrsBabyGWxxXanN",
  "key24": "59GHPAqhrtuU7ZobKNyf9GUXLymd39Dxq3FDfawh2nhrUWjVXe7RkXFRGULQFmYnr9e4Gj4EDeNTCYqhgyPHPxee",
  "key25": "7TXk5S4qLt1MX4F9oZnXkYgQGkn38EjUNKL83Ns2XeX7JhFf5WtgMhC7J1t5KSFFfRMQDKpZvGcMnNfe2j9mW95",
  "key26": "2CG2x295BCog6W1UBXFHTCEVkG68KLP25Bawsw1Sw9cS5PewhyNFPkJApn6RQ682v8cQbAM9awMTgZ7xGQMXY1V",
  "key27": "2Eu6RHvhYBG4dZvV2oJcidXSHWJYxJV54XLnjk6SnX6otxvKLgQatr3CfSAoL2qtJnXepKuEeLJmLCnAHWg3Pxvb",
  "key28": "5PvrMztWoFLb5q1TeL84FLSvMnrJ1ArafzjpYYa4gq6GiGxbn2EGGX5QvdvxHecLgja8xDAXpQ2dYuuPZ9vAGcV1",
  "key29": "2mPCToNPMRgMGsbFwmd2y5qsNqKTEcihmqDcNDNHNkPE6rt8nPQ1CqhjiSmKXuaGT6DEKrUUCi5qohkG747ER4AP",
  "key30": "FQj8jkktEtL5P7vNxopKwZJh1gQQGrtQ1iKUAjb9qkMVjzFgBbpFcgud3BdygYSSH8KX4V2HZ84NfDViX3eGPfk",
  "key31": "5TbdDTQ7tZW5cR2iGCws2K5ZqoUq2X36GMhCQB6B9nsjrXt75bTQjXWntNtVJDmjg1jPL2URi6SNorFfcijmEDX7",
  "key32": "ppdvat31SZoz7Mn9Neg2ZiEESyePkdD2QhoNREYZB4yawS84tLATQe4Um2HkTc7NY4HGawdx88ktHipJrg8FvdA",
  "key33": "czwRQp7jXyM2mWNNde8xCVnutusbEpL5Pr5FoPEifmH6WCZMHfSLKyDTVJfzK9GEbU4wQK3kZLFDBrzeF7VrS1U",
  "key34": "3rk6oZYJQSqW55vyyy5s7nyCQma961QJ2tUNMk7GSpUXy7HE2oSjnW2zUdfsDuTFaWHmJFNHrf2CRVhb6qdS35Zv",
  "key35": "3A9ofxQ8tmnB7Ys9LHnTaon1dmXUm2pUuLkGnqnLSz9UjfWziis975ZXWiow3vvHQRZFEmhugYPEiV5aUsSrciXu",
  "key36": "wNbFyV2MCtCBMAx6RwQT5Y18PgcfebDDhjyzjQNDFoht9X1jM7ugu7Zr6NS4L4WynDimFcx8jVgmq49vo5csDmo",
  "key37": "59jLLBuJH3e8Hj947kTYXDgDsDgZwJVpShU3ZCYGdL52aMniLiux7t3mDx8oub7L8FcUruXb4EiytPq9J3u6WfpK"
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
