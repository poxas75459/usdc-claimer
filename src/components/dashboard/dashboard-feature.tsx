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
    "5ZfDxPWyMj9QMBz1CYsBuNpzCG1kAXXv4nJVAXMAWUMQMhMqt9MwGQJ7XFhejjjsGMnh9n1mSz9tryqsSxKdjFq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ggN3KtC6RbRBUC5kCWgUnvxjTiTEKd4fej96BU6VneH8yk6WJVbQkdMoR29bnbEAyLfB1HezR6L1LGhmQmPGUN",
  "key1": "2MvnNcBHq7j1TCVaFmE4qJq6YAkpHHRVz8V6cGHi9qWpk489JRbGzw66jM7aFrfr64yXbBKqXEoZhCf7wK5XwX1i",
  "key2": "K9y5yPdyo2oyDDRs3uNDKDvAkQyN8aZS6vABB8oY7GiyjSoDDka1oCF3Escp9qC2rBEZSTGdjBKyxDrHEQhgueU",
  "key3": "1236jmyW6D5YHFfSHywje9XBKcnJ3TGFbkTP3262c3ZXwebuXo7SA4QRzCWRvAkTviouguw7i1T3am57YtKNGdQu",
  "key4": "S4dRVQXag4r5rK8nztiZigy58fKp2v2HSQjxi8aDURAZgr6ZV8jE3xBSk88ygVSuV7UsKUbqRZrW5Fmm7zxnVdw",
  "key5": "3DH7V6VWwR3iSXJweq1auMXbhqVL8UuSJXH5JymvVn16A67mwWVFM4H7i3zLToS7aUC6waRrWhY4DmvYUynH5bxz",
  "key6": "DVzZyM7ozDsJVqqbSzbQuBd56XXNY4u96E5ABBUefm8XUJTyTvytYyKpGWyiWv38N3Eeu4D98Fv6mE2ABxC1FWD",
  "key7": "2RBuAL2eWafccZRg9mUZSTGy2CQzfNtW4Zr8RVb6r26dvPqnisSRZN9msYad7QWrkpEYxzfVLAf5ZmSL5BuJ78o4",
  "key8": "4aWb81b9wiRxq9NgQaj8DUTpuEDgnEBhTvRRnhbTWvvQ6jJKJk3gig6rLhWoS46o14cpLrXzzJXL5AoSWhHLQy79",
  "key9": "5zxWaGcXpUFusZHZRHecMULDZ83KLLjm4vKnGomnmBxrWEc5KcJLNEXjWHHGDhTyxka6WNL2tSXdL2fEH9bLUDP9",
  "key10": "4enK9KQ1JaR17tVcAr6sMradg4BJfbFt5zfXfoZFxQvFEMozpk3b3WxCwwDVUJw4X1Yv3kpFWvXD6DUu6nwJTdTq",
  "key11": "uKGZ3yDaQik82zQofGGQqgQ36C2eUSBHZ11j7aEHpD2j9dzhhAocBodoxLGBbmYt7YnqYEgik3Zbkk8HQoby9pZ",
  "key12": "3DS3cW6Nrf3ZZncaMgWDrEJKy3H5Jzsdwu3geVzqPh4d7mHwFjaZJqQUjojodtCTHEGtJY9JqdRPpFjr2jVBaqu9",
  "key13": "581jxnGQFicTd5qrivqYeAXQSsbYks8ZdeeH47LwkpYKitMWGmBr2uWsaPmQ4ynYRhVMCRdzNiNEp6B6iNhhTQpA",
  "key14": "3vkiU3WbvR2adjNemhSinno8LG212tbtcDmYz16WUxbzm4exvNqn3KUagsJUFNWGvAjLyT2x18FhREQ4FcQr4vu9",
  "key15": "2JhLM777mdut6aTuV4NwbHMxU2n3AceMBMcdpRFH7jacSPrVEuy3eUYSZNamEqRDLhn51dwTuAcAUnhXzUfjVpfN",
  "key16": "5dnXRE7rvtPqn6EiuonCBatbt5eov5HKy9EDnuJTFAh6ajfCdbPdAXF7raQEdPZbF3ZXTTpyLP1H96gDBKZ8XtQF",
  "key17": "4e7sMpfonPjTkYt8oFHU56fX6Tq8oj4m5ugW7yZkExmJsUzXsgUW7u4bBKhGcSvyAi2orCieJJTEoNVNyGXgDXiA",
  "key18": "GFGTWY8PNXZC2uzjC9hUDcZssWvQFNyR3vBPoW7agcBbqv9G78X4QpmkEi9vK69nEuXakZUvvdTpGSiQouR9ewT",
  "key19": "4n26sCNW74kiQiUYaK9UP8qubCVGteDp2atkMrRgzB43569vm8BZhVt6Tn9DfKDBm5q1aH1JUbzk62qdjUApAHs7",
  "key20": "ZL3PS3KZFwU7PKhHC8gvwYPiRNG185CiCen7irxmYzbh8KWXu79kfftCsFKv5zJZbCdd9cYkXjq333FJZL9z2ph",
  "key21": "5fWrmo9PzywX45sRtoFuKW4KR9stDgBcfexjVQiFyPR83mpiQZLayZmVtvAPLX9B47TaVgwBdqcUaig9naFvKpkL",
  "key22": "2xHBWNRsmzEawn88QZ78MSQjBgPdjCvV9ZTLr2V8rkbio8ukAxDHsWtihtdar6an7s36enQMHeou6wAnKEdDZqGW",
  "key23": "Wr9QSDUGbaYhidYUETaopyB3zwKufyokSSejNaV1iysQrK1tgoBffJLvrNx87BQdSGH9afUCYoCwohVnqoDQWt8",
  "key24": "3aMXqBcF6CfnShqMnzCJF3uFEangTQeFJpmZ1fuBVKEJ1AzqvHPdpM93sPwTKn1QMwZA7SW5r9YJMF3TyQ6Ffsyi",
  "key25": "4hunKtFJXXz3hK4ttBeVPrTnP4dXSro4naPSKKBSFayaoTGCNFSUny77nighv9bns28471ZdGKSdcnbhqMLs9HqB",
  "key26": "53unQ36a6HqV2GnapnKhvJ9Jb7NhoEh42p1vTcqu5WGN25ZnTm16uGRLJhoP7MXzCUCUFKBevzMs93cEhFy3g59u",
  "key27": "5wsbtjuvdaDzEESPxEiXnVa16SS1YJoEM6QnfvQybzzkXEhernz8CJFf4fVowteJT1oKibd2PzXjcBzAqDXnewTz",
  "key28": "5eLUg6VweWKMQz3TkZdskWAuzgvHgHRyKT39byLTLuGgY22EnPWf7hf7ZfEn3XmKdtEE81DYUPPHAMjLLLtzwXKk",
  "key29": "5fQMcHKAQe4oRbUDjuvLMVwe4CV7nHhs3VbM68PfmqLsZsqRMRXztgHgeNomW8scik31Ek3jhoRA1EPG1MDhW94i"
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
