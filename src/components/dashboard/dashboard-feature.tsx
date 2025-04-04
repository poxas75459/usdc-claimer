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
    "26GCuBYGjZFsM9s77qWF3uAYKFz2BLoiFbyLVJigrrapuK83BCKhWYs3P5TBhD5K8ZhE3yjetpv9GUEFDcRLXTZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FiXuWRFk6BN8Xw6kY8S5fwhzZd9CiwVR9qmTrmNjBk5nHaGD8jGiQSMBuBoWwZGa5QWQMi32AvKvRG5MkN8WPij",
  "key1": "5ERkZk3ksHZvBiLu9FEz2L6PV82R2x5F59bg4mwNT6najq1P5pVYbWSvXHJihNa8LoVFiaJdsVuad4FUuCrYZ1CT",
  "key2": "5kMgjJ1N8Xc1wjAUNYQKwy81f4nZWFNDSCd4PzEwdFhPHDLVDQ1oa2no4EUZmii2Y56cKkQ4B8soJy3tb1VRjR7a",
  "key3": "5qUD5nudcJMGqaEzQsgEbzrQ9pJARxHKLFCsCr6FZju41GNMReuX587yd6FPJA1SvkgTigzXcDmkezKPKphyoMJX",
  "key4": "5yFTNCD5MeNWfZ6FD6YR98UwRGEoHHM69HFaux7UiToZqTWMiniidBQHhhLHQxCFAVYyiSRWDBb2WGDJJZH1aoFH",
  "key5": "3C79YihcbzmyuE6NNdKswqEHNuhTcc43DyJZGLFZCJ9qRRVNwXSFUhE3w1hxTcsAraJEt49vXiqgFyyBiFtQ1AYt",
  "key6": "61vPF3Nb9uxVK9sqGXZQG4A1SP1zSgMc4aViPD3rr3ih5Q2wPCqWDQqzhDFzxXUBtCyqqtZLzWXqJJALS5kQ34oR",
  "key7": "2FYwMmg5MSxL1FbM1Wvy16NMvhQkgFJL4TH4zWzJeUWptWvfRaYqRYGZhN4yRGwSiScuCBoGG6VG3RNZw8cYRj9N",
  "key8": "659xoJLa6wxxp8bkdjcdigm9awuzeDk66E1JsM8dgxHW4BZbdcDjMxVjkpnUb7LXRKeroZnBoCoTVRWsbMvwGJeR",
  "key9": "5FrFaNkYcjmC2GMojwJZNvAu1f5yXj4kcSrpiQQdu6RysvFtb5ZBqJpss3j3wSdEUXwQKrAftY9NiEf8BYxFajyM",
  "key10": "4FSDiNEdDnf8CUbV7Rg4FRD3j3BAxHPSEx1nx4xYaMuwiwPjJrtkJ9skCcyBsGKDWEnZN6snDH1QrqHv7PDKhLuL",
  "key11": "4cAxDqwMekJMniaBteeamDY7Fhy3s8djWPj3eGKRAbeXi1C3R3Q8bgCKMHixdqJs9eNe4v9U51ZtRAbn1EYnodFk",
  "key12": "5aDRVa3sDQWz4MXgfahz5iCrRnMPqbKNoMgijEM37SGuEaduEbznWKooNtka7oE7xg3aQXDvf79bNG13X5GnCtdV",
  "key13": "39jwhbJXmV6wCPLcRDRNsPuxpTXEtky5VnSGhFjAaY8JL3YcYaprhf5sRERF1Tx273ar29FSbDzx1wr6JXSYDbyn",
  "key14": "7L57f4h5XzkSCQEq9SQCnLWLRrTEyHGYdqugY2BAFxeVH8ozZTQVAw5SYYUhv7HdiVZKKmFmGj4xupYhyArX3au",
  "key15": "62ybKHiv4azG5ra4r8GwD67kiBYaqRaaYu2ogbat1W5SHxotZNo3ZSkREnndteJYXCAvKFXMeixBzztVX1oT42Uy",
  "key16": "3USg7VdrkXrGRbJPtEhyPvEyWyWiaETEuY2ZmfmcmNKZaPXEgtaHLARDzXPp37TvvftDAc3MnzvDXeVNzxFxhvgo",
  "key17": "2Q2fTPNfzMsKEgfw1Kyktf2vWxxEqMc6BYAUoThmeLCvbK5e2UojVaaukcv6Fi2RVuXeLaXxmVhuHu88WJ8Uqb1Q",
  "key18": "3UZ7ib7CvtT2Aa99yk4WpRmoNhYN1pfbPMXemZxsWaucw9GZP3c84YRWp2WNYJjwbapiSw8PQRj2Tp67BXA6G9FH",
  "key19": "3HtCUyNPhWS1ivLgf44k9fe5q6yuhbxkiiACLDBsQC5L4UkD4y13PgQmR6GKzbt4ejpzuKwa2LzQTMMRDCXsCii1",
  "key20": "3qtXD3y53ok9hwUDEaqH6yGCJfYCV9RjfQ1VdfZ1ap2EAdpQtAukU31jXJ3aphWpPh2sagm9sRUNWcYU2dePTWJz",
  "key21": "2A4ukVJNmWxyyRhryXZEDXLBtWtpov4qSkZguVnTJLe6sx741Na6Y3UhkfSgyrnVuSs8bg1hR7AaAnZ6f6zdM2zz",
  "key22": "BccKLKwnvu7PAttto4TejEQN9Z3m4FLjC3WzeU6UZUvZCdH4iRAPLqdf9ozRY2HnRRMG1iYoRM1KcGDmWosKd7R",
  "key23": "5j1uYZxt753kerAsmcSFLfgAd8uFGxqJpGYk38chG78ggEedTKGf6FpmGowgrwh3nFf6xf4Wm21mPYnxbiEco1CC",
  "key24": "2ENTYy5kUzeoh7o9suSxAQipzZc5Lta3XYJr4GF92A6B3vqBVTMtoBRTDtJ7ia63abaHxUAMDyvwcxNgnZmHufrm",
  "key25": "2GdevpAEDYzaLUs1xdzkSt4MKbp9Sn6A1YgteFUAAeh6zLCawmgcnj5TN3eXQGQ5mZEghtb57ShuYejbxiGggRE1",
  "key26": "p7Wgj3pNoEVsppGPzMncfHhMRCxXGq5girETDbogQJqFQ6LLVaraaRdWzkLfTqRrRqyjEKUepbtYx6Q9UyBJmLb",
  "key27": "5tmm2yZ6fpsWUmDrY9Ys6Ne2sDeQEyUddEjdLjaLW5jS5xrjB9R8EyMDnrniJW5UnQM2FJEEkBfRxpvAiavc1TDn"
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
