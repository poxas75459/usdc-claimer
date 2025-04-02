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
    "3haSSgvUbrnLa6wyWG6QYoWfdRib2uG6CfGbQ8wRXK1E6zKhjoFW2xVb3BEvgKEKvxBNywd48SYZK1MZ5Y8uoAar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QK1epvZu3RSic3D9cPCqfCtjB9tRTJVjfRRf8juShoS5nevMpZxNfXxkNBqfEphUKyrkocaTK59zTCprrWUZkp",
  "key1": "5J6eAjZrqxUEcfQnZhTQ4i9ekkxp7jvYj7Tg79je1p37Et2GetkepM3tbo2bhqWBaKWa9jnFKF3YoTpWW7tRgBcd",
  "key2": "2xMywkbSANv3GKXzst38csYJNYPnh9e1nvubdQEfheLPxmycvAr13WsXteN4pT46WFWmHT4sFWyAvVoGK737Amf1",
  "key3": "2PcqFPHs9E73Bd9NhCcR6Q3SYQvhRhGrU6bGwvQs2DfALaCq4KitZUyFkCWTePkeqwLHaFNxAuA74PcF578GSZgy",
  "key4": "4J9RcSauoiLseFE3RBMMoqe9NrPjkZtfMHd1BeyrT2vyS147BHyhEUyRCDxevwYe5Tfkuww7rLYvZVrn4BhQyctt",
  "key5": "uHAyxjCwxpjCghohVxR9BcTKAAUvPHpw3s7qibB3R8cs2m2QGuan1p6VgrH4JRbmJY8NChzkB94HkvohNHtisnQ",
  "key6": "28uc2PZuQoypwn7Zw7Zuh8SifH6UX26GgsH5BahGxBe2Ab7EuAQ1UyUDszWAwDeyxveGMALHcLLTHcNnoAhBSbX2",
  "key7": "2aVoPhvzLTEdc6SJrg9fA7q9d4tZP1LeumL7dRNS5QsLtwoUuLEzUF8yxhEkJXdXKd1Lh963CyXRQhJrQ14TEWX3",
  "key8": "5iBSsDcfoAFkC1HTscwG6chvjHmVd8krJ9YCvCssio1GJ7VEHgcPePdF8dVMLyhHDjvCQ7eTySDHoWwQZnJiJ2SZ",
  "key9": "7sJAo8wGwsAPSbgYd87P9DyG9brKh1F78n7PAv9PMyCyNJoeVWz7Xy2vq6dCu7JcR7EWxYoNxEUQNDXrbD9QATP",
  "key10": "2GgmJ2M73JVLAe2aM6D5zaNNzFovW2bVxZrSQY6tKDQnVozgnuN2UH8Peo5H2wYD7J5sxCbjjkgTb1oUY5MSY2Rq",
  "key11": "4v7FGZJQDYxjT7aADW8NgqJZDFf3DYVYzQfGK2WLBzvhC6eRYBSfKmDBkBtvDRfCs2NzUS1viv9SsgimUNAPcoi",
  "key12": "29AudKuNinqfBQN9daTURKNAXC32UwhRvGonk3wnZfMD4QYDcTkcLpewuqE9zu54fmciUztrxtnY2uXYQT75bpnR",
  "key13": "3TFdSsxcQnKnCqixFDTmEFVyRmDd63XzaayURdyp4LDkAypYEoU9xXCwRiaRS2M23mtdauLfFiZcQcnW9UErPswB",
  "key14": "2TxpEqmpVq9v6Hk1MLepq6ChmKG5XjjMdQV14XwcTKqTg95wwf4MtaP1YHuASx2D8CVkNcYftwBuGvtJg92vr9WK",
  "key15": "4ax1Mynpyzdr2WCmGZP4WCs4WFYPS3ixnpgAiWWngyvoJ4n9qpHoaCWPeTVH9wDNfaguuLCCCWADQjterxNNVksJ",
  "key16": "3nLnyweocZs7otVctgzKL7VQo1SxMqVfdATpPXVJ7H9fkqmrEeracVfQnnSoC11f4Nv8YcXfnByH9oEWhGomrWxe",
  "key17": "4G7tbj4gA3hKgd9moyrWL43W8UoDn284X2FsqmQyo73YSAKuZcBhGM9hwHQoRAksPBXBeHFjvJaNtDm4F2gLZQGo",
  "key18": "3j5bR8A4XziVSvNeDkxVvnfASPphP6bi1yArXuRp1RudE4mHopdXCM4mPQQUMkDCQznYpXYpssPuBPLHYjed8Ewo",
  "key19": "4cNVRj7Xhw2PoCFYoY3HWTek3X892TAxq7KBmpcZfSco7N6Y2DjJypZagbMRun53PX2M23ZEPQTjjvFq1KxpCV7u",
  "key20": "3JQa77EdsLuGCtHSixciYHdpa6UP4DAodNCfMFaj1TzDcxnCUVWAF3gT4joowrjoe227JX5ew9H6qR3uCq3caRgC",
  "key21": "4rhDkDoaf6qxDEAqAQ1MSg3RRt12QMVjSazxWFcY4bUSLoWqpX7QVTWwsWSgVnxtvERb4UKD4LjrthKnoH5USCTK",
  "key22": "4VudjVeLwTdzyEqZ8BpmPzjGSrf7LNLZnk6MEAGB7KPd9DtJuT1V2Wm1JQ3Mxws9vA6pUAAwoKLBD5wCrZcmmi56",
  "key23": "3K4HVB9pHp9QWSPeo2AMetPEoiQsxJnPJ4kEqgVWSbD21spfa6AjYu8mJn2ANprUaaeQidDhFMXhYYJospGEmfdE",
  "key24": "5UehiyEKL4fBpaYoJ3DGZ5wcKredqipieusBGBM3HTtsLTSnXTHJ219gGDsPvUWQGvExs2Bo9q8nuybNKJo583Vm",
  "key25": "4ipk5JeemCkWwwdPzu5xkKsauNrgojfwfan2oXos94pgaGqShDGX1pqzPnjeJdeJHANybxYTz7ssNoJ6eBGsLFT7",
  "key26": "5VHNizbYZF8uAmC764TQrxSTr3vaKZTpcW9ybGqcEXgoo4WBPuapDQ4L7KFdwaQ1sbqjFzxfEZszPgp1cXzAzEcY",
  "key27": "2KsAqwkjvFxjYf2PoLwoCHvKA5PcLuug1KpibcSnGqQNf1Dut7pNA1WgfKgQjgw7Ufh7XAeJ82tr8W6ZSfAogRas",
  "key28": "3amcnsLTNiN6uU1D5aHJHjkNgbGNcyctVDYo6kCjuoymjJQA8qeyQSrpU5SgScnGCQcdMCCCpK9tBSu46G3CbCph",
  "key29": "432nVEkwLmWhPC7t7hNDRUS8uP2wNYZXT6u9R3ZwHNdWZjH34TTEtpmH3jydgfkEWKhVQwn2QkkNttDMGYgmrUzo",
  "key30": "26JYL7ZwTM8FD7a14wQ4NvhNmf7QfpVcVheM93afK8oeqdHuNZ5QvCFiSsS6mEM1w9iWRW5bBBovDjo3VJux1QAx",
  "key31": "4Tjpm9ysgHFqfjuF1jpYoDKHNUaxzLvY1QNBEeBgb8hqufCXKfCTwgRDPd5kaAUcGPFWkfrRPe7nekWJ93i2stn9",
  "key32": "4vndDg7xz7cobmZnatdGruYrLv1fmWXWMm2GB9oWRs7pYaQ94eF5zB9wHwbpwE7NYsk8thpVoCqdCQhdRZTnEVv2",
  "key33": "3U6v1ZwKaVWNMEd5aA6XhWgg4VKMJa5KUeX28pJRBiZ8Gb5mQVFNyi5cmyWMyYPVE16PLAJCMnoq324avsXGu4tR",
  "key34": "3w2G2GHhrNCdWJXpPvjDcTmG5f8p2FrVS2XFeFYdAn2u6R3tCTkJaWJ6GBwHyZwyoppAak5ykDH9x2HRmbHgpJig",
  "key35": "w3B6MyvxSDZsvwrNMGJ1BBUTw6ziNeVxtSrMDsNCMXAnczsMZUQA871qa2b1xv8GydBQU6zjZqrduCwno1ie15r",
  "key36": "5C6QTqrb6t6RUtXc37L6wUuypJ7fjmQRFRR2wrFQffsx45nsJCo79hCZy8DkaCPHrzSgNt6UrAuqjnogE3UvEaZU",
  "key37": "5fNZGx6WGFjLqYHRKVQo2kDcPKichPZ64n86dswiFgcQMDf8KqT8TyhrHBxwRmWU1ges9Dz9YjbSQLH1ckxhGVg9",
  "key38": "3Fi2KkAtUz1LhWeP9KRkAo3AUZrmKcvQM28QKxyMJDygb8upBQqZM4z5QZxvZ4igxZT48Sghygdt8FSpUpKWkQ1S"
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
