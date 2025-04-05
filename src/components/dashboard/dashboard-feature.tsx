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
    "2kkZCZpWF8DAMX5wXbM1KDt2gc7B6Xaa6RwMXD2HoQa95BVMrae3TovHrcYd7DE18VvT3sW1zVy4B4czui7MzRh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5toxWkhuME8PMzp4WsYcJsFGUjUbNjFsCyHXN58DpkvGWiHwYLgg5b4ZCSTnZEHKxcrBUxL34kcSDSJZnCY8fFaq",
  "key1": "33UKtFGLymsja5iEXCFPB8YAjd5SvyCkQPPpKhp7fZtamq6vnHk558SmaoPVM6PkXk14wmagvXvoz2ku7otARgmF",
  "key2": "41czDAYGWFFYAi7EZUqwPcoAMoMN3exS2Ui4s6u4jiXydpYMPCza5ATwK29T8Pb2dbSyHZZ6LcDWd1VSDpgGaHVZ",
  "key3": "4oxSfM9NCi8axzFRorzhqnMKhLk2aUXuesSLAQLZjq1AyyesX5Forc6t59Z3fEtaDKMh44rwEog45woTCpxPFiZ9",
  "key4": "2wc9W3GdJtF31z9jt4ewtER3k35zRCUhYxGWGXUrZVRUSFoQvQ8JPPV6fr4gUk9VskCHtsXY7CdjVa9i5fHdo8ZT",
  "key5": "2jT2tWCDxFw2zSVerZgQ3vqoEZ34meSXTwXV5sVfmjru16nWupoZta1kvdVzzEAbs6pYaqLPp8uWX38tfgwpLwoU",
  "key6": "5gk8nMGw56CggyTXBVHFfAKmW9ZpXRiqUKVsRU7Fa9VRECMNmAAPBjpacjqLWd96nLThDasNUXZ8fAvNhnc3mMty",
  "key7": "24pCgG7zHhGk8Jm2SSkzXeW5zL6hwC8HEedwqDzUuant7f4eNt2zqTfAFYuRwoUSWTBMycpWBd5J5AxfV9j87vEM",
  "key8": "2qtKbhLUM27bB9H4UtrkW9gkBgUYjw63oXYHn3Ty7dz5rK8d7jyQLcqUmUy7w9nT3ADxUXSoGdZk81BFxWLnA29N",
  "key9": "2ip5ByKYqPeAsUYsP1wTWWs4uGu6Cc9aWeiwyiC5dxXPy8EL5YPZ8bTNJyq8FQeFzB16pXYB9JMmXZ6JPgfSMtvs",
  "key10": "3ZY2yGV9G9MnSxbc7MvA2b6Z2LzASxcjyKSHRvPXX9JMJkfem6tEdHCM4T2TiakvdZFMLvAqANXbVo7c113VpvFG",
  "key11": "5MC7RE6gpJuKaH6HwdGtoNxhe3sUgWVbiBKB3J7wvKYfssQ6qTRUKY5n55uuQdMcau2Qg4oM3EcXmLUf1fX8RTxx",
  "key12": "5Pb2RZq8xzxTwQ4pFy6bkFFmb4PSbtKrhSh2gBNfR2hAvnZJTzTsAvBPfL2DzdBUK59fSsSvU92toTGLh4sWe5wh",
  "key13": "5JqsrXNvmp6m4tYC8CztzqyRhsYZoNxoiAjgkubhCyh4KUL6NZA4td5njRXFSMsEc9x4DAVjbiekSbLmM7Kz8DDX",
  "key14": "QFxbQ3MzY8UqoM2PJsQWDmJDgJvZv5XYcsfRJkTjkCp41X5VdQAJbmcmhN9qacQ6qsombok2skiCn6HUv59r98x",
  "key15": "3CGZoWgRfuH1TVPT8fiZ529JceTtaG69WfH18etUnxPbUkwBgTsRM95NVneetaKP9buARH9pgj7zRDdbqRHCuBt9",
  "key16": "2jByDTHtxx5tVpjGSWxTCSWZ3acBq4zAwbCrsbixtDEvB7R5gaa2a44SrFJ2aRSM7JLTnZNbxGnDdFt3X9wxj3nT",
  "key17": "25Z5hQthfX4ddCQyUdY6CNwrkzmzMJDMPqZ7eoXvcFJhJ1VUmhebv1obxEb3MVBryzNAJvv5AQpGjZwidJCKyeMU",
  "key18": "5ECBfWhxkqbk8TABDa3PucaXGmfoznXD4ZHcXraodGvYzmpRCeo1ZSp4VdWF9TN8MTCDHrCGHfopF48Mc6s8XY1r",
  "key19": "36USmDTqFNByJTtVKbQyJHyypKCom5TqH7FQvRMZJs2Vy6vZwXSuKS1vurVkLZTRRcQQ2GSZXrsEKAvFrvTAHYAM",
  "key20": "3tTEM8oNkXiZCRvCZDQdgdcEf2U4MkcGZL1waSQv46RhAgfjnaou2DigjmLS6CeQTRLzWdy3nHzqVoFePJYZYeRV",
  "key21": "4q7c5UMmm1ZtzQPXUMVw3KD56NArWdDsnfVYWwNt3xVwh23vfYcbhdDinvK2sYYTknq9qr3PnMTLeJC77Pdp1zjp",
  "key22": "4aeKxxk9fdCYEemokRwHkpf37CKV6Vzkkdaw91ZAXqLGtDxaF4wBDxNmHAxuRdD4FUaM18KkRtsW7NJVwS5ZiTMu",
  "key23": "65w69eiJDPqvUCCstGN7KCvmWfa29RkpSP2v2V2KkuLHPcGmH56nsTrHiiCYL4XDkZqbZcMxNwZBrdhogbmeySqa",
  "key24": "32dsBBgvHc5hhhVh6sRcHBSoT9nc7kVn3ZPtDGEvqCrTAzwpxXY3ybmnvWfzvX7ZUFFMG4KQFBkJ9Zz1Ja2BNnp8",
  "key25": "25cxjVgp8Z8p9gzFnfU7wfSjYvyUA5R2smQKVCxT2J8WScubjKovp5vvsXrAJFWLcZhQxHx5eU6pRLogqJvHaQVh",
  "key26": "5Wh5NeB3pAarpW7rS7ttm4LeRwLi1yjFRTBaz9FjB3zkBFKDDyUeNA6Hj27iB4EocA5ztCNzQ1W8iAdyiWDDXTdk",
  "key27": "4DbkV9L2ZB49ckCBZ3Yx4Mh79MFRnU2LsjW5G4tcBz3XMGbmr2pLDwmWs7RsPDg78vhomp7Z3yBbvyVumskDXBTN",
  "key28": "4gkDezGPKRV9NPhDmsTAjoMEx3Si75bZj3wcQgtngUq7qSNbBfGx8dphZjg82ix157H2EvzyqB2Z3cvwt32zYhXW",
  "key29": "29Mo4UGkjwBLJt21F1gWvJx9AENMSP9oJwnDbWa8LaHLhkNRAiAJepBrp6SjzKBeECVVT6CCWrK1rLSqYrHZMBS9",
  "key30": "fApy6vNUHrR19Sj2xBt396LAoFh8tZuZz5xfeT3mDpvFa9Us832GBsHdB1RL8thwuQUrQqx5dVx1kwJpsmNkuGp",
  "key31": "42bGidfNxbzu3wSzVHWnymtQvzJQJh2khsamH9CPn4i3kzrJfekBBpJHReksuwyxHoszssU4TAtUcXkknm4EEwHd",
  "key32": "mYCDVBytLkv9dCxYo2ckbwiZsPaYoR3GjDnLDSTBzAGmYnDZEfzXCiYS7SxJrjXKmZbfuMGPfKYoTvgJLd3qxMg"
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
