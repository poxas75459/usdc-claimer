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
    "279j5CgnKPuxpsmmNMQSg5ZqrmegzP7M7uxH7k5jEQzAqQ1jm5Z7orEPu3tkBwAqS2W3JuuFAGiZTFAteHctcLqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZR4wETA6qfBftRQ89KTdrVjNncruHMWQxnK2pRCzz8CCJnXufvHwpZnT4Jz2eLNa1J94AaPaeqjczofkzrwNh8T",
  "key1": "5oPxtJAcGZ78CNt9mShC6QWtAhnpNv4qRN782tBZFkzpkioDbGcHScEP79oW3n2Fn3yoX85KeaJmQeVJGjNb5XTd",
  "key2": "2BcsBHiKa8naZ1MsgCSjsfKkNLv6ydujHPhFoM1YESmvcpooxUfXGpykjbNqJbpr3hUkf7Aw2tnAWtPnkBYJE7Rs",
  "key3": "2m5nNSFV6NCDzKnbF1KeMy2yQ1ExytcxZ6SFyuwe22ti9jC6ZWecvBTukAxCJA7hkhrdpTu1UeWp1XdBQyXTi1V8",
  "key4": "5M5bXqrjV4fQWK5Z2e2vNVdom9W9imKhSWoSzWQAB81CgtgdtBxz3MxjxjYSNpE1htt8vngo1kxSL4fbK5xmyaBj",
  "key5": "4u4wDpgx9Bi6Qp1dqPeAacve6E32B67sAqX1qH3BqMi17BVBtikXSifUUVHxF4ak6urjQRUweVyHymsHPaihN1Fq",
  "key6": "5KNt8j7SkX3Z9aXv9QT3S7mwLCQqddMrxVMwfgEEpas3oAKCvc9SXrbct1Q7VfcM95gjf5JdZsjvzu44FC97UQZM",
  "key7": "4wsrN2VPyvePJVUtBpM7UVNZCB9WfhWiTdVjMzwdhZfEcHRNF85a4VVFqpSjc3pWcAkxcLPMn1z1xxnTcppfg8nE",
  "key8": "5wNLiLZs3WL95P5qY73H37Es18ki24Z4fhWY8zsWEKyYLFgHSXHkwSdx6ccQ4uSCYSsCZ95JZFXSWbSHnntVrZre",
  "key9": "34XemnSRdEMFWQoKGjXcfvnvwWNNydrU8edgtKteSjNy8rrCEWzkVu2m3in9SY32Gno3FVnTKd5o3aVAqEEX2pfn",
  "key10": "2sK1LwDM91a26qPBE32NxdUK4b3jMh6PFG4gWQLTe5YSoYvxHYkrWa9x9r3nSGSKh264ANNkKujbHM7VhpvBwmUb",
  "key11": "2GWG7X41txzwdzDC677YN7PJjVTyhPbnBCp74V85JrBZQbiXDwWDg9p1Fb4MatWS74v2PVwgwHyNNqhEyrsRghbN",
  "key12": "5usmxBQLcJYHf6SDtiuPCAcSBABzq3bWB4NxW32Et6toKNSQCvjWsjHyXPvpfieShmvizgJXJ2nodVbY8Tr9t9uK",
  "key13": "2fBt1FVGdHtgzVsEtvdZ4KDVA3MSkkEWDXCa3zuvUkgriFgd86DAZ6YW4X3jwSSZ5MugXg3TCYZS6a8NmqGkgwcK",
  "key14": "5WsHCB9SKfDFZbzrgAe26rm1DbFzDDafW2HehsPPTBrtfDfFHr6Faid9ypdwE3MJWEQrGQuxqLEhj6D5RJb4mfvd",
  "key15": "2nZRTkYnTNR9YU4YYaHA5hhEVa9Ku2WAvYTnvC2vLUxV1nXcS5uCHxzj2HgKhsuCzaKtYBGv7GWYG5PB9M2y2gqp",
  "key16": "3XXLQK78kKG9hX9bAmpXKK3gioCCTxGJ28XguCiBxtiLi388bLQkXb42f9ShTBuvG5rYmMt8EH7kfgx5NN5wHR7c",
  "key17": "PZfY7weAFgbLQ8WqSqm61ezoP84fPdoEyWsr3aP2wGfqVoGXcpEidfKy1S5Efqoa5oMCzQpRnwizzm37revJGXF",
  "key18": "2YwM7vECbsWLvZ1CcrzdH8J7Z5Qd5mfGdWUyfoGapZLBkGQGokQFTyn5zB7Xseu7ECKKE6eLxoYgeA46DhZWdHCB",
  "key19": "2e6NS75r4sF15DDcg4aP2Myo5yC8dFyKPKs1hbCwiBDj9QmqHviXji7oq5duVVwaNjnfadsQL88jCKSMuKDqQPjN",
  "key20": "KvJYW3zqiztYCAV3rdLGevMYKyepmympUyfMApp8QkV6J93gNdCqVECvMHtQbtNqsL3tAyyV2HvvgsG7k5Bdo5w",
  "key21": "pSEj4L5ePDrVXTF1HDSLGyDDBfkK2SScZpBcmuqhuFV8ARkoH7h5Qx8bSbUue2CNSD2Jf6SokNTxmRF9j6UWomb",
  "key22": "WP3v9wJvydttHwaUTJ3Wc3iQ4jFwo8hKqF1Zhqm3b1AcoeJMRRiP5knuZ3tmmrVTm68Wr3nozyXieijHNEyHQzu",
  "key23": "3M6FB15VukygA9jn3d5Tdkyx2Pvm7rR6Rt5bgqm8NKsPGP8HaJoeBgQjvPa2g9JDyWTBb5xCjEFrRZArtQs5sg7e",
  "key24": "5cyY5G3QxyCwr6t5sHZcVUURa26PXStjr4P39zULH1mYU5g7kKmoGk73tybwuYWxr8LmUdvZq421P9XHKP5PdsU7",
  "key25": "3trSenWaCD7seh42RM3rfRkAyWx9wHZPk7A4Q2Tcnm84VGgGnuPCNbTY8WrQ6m7qMbqFoDvq2dDS4wjfLLKaMkX4",
  "key26": "2xCBrCopftVBLfJMX2LSPCQMGEzWxqFDibKz7TEdzSnCnG54tJERo7ha7m16FFtHmoEhCSrsNmu75tFD5FN4uimG",
  "key27": "3uNxuqnPHSrFBqLMgsPjiPvAZba995mgfwnyDLQrZWBsDJgv3FSGQQNLMHtVXiSD4mNkMKwNjkMiMnotXT9het5m",
  "key28": "4YgVst98oeXwzZ6wh4tZEPhzFESPfuozEFMPjYhUQuwqc1wtRUZBmHxPf9VrYZpFRnv5hWMPK4yp3o4FtrP3NNcc",
  "key29": "26ogSYNRZ46ane67uUVXAcL8oM8acNm31jXhzqdyAgmN99pS5htzw57KAmNPvrn9xexzuSusKudwJxw1bEg6HzJs"
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
