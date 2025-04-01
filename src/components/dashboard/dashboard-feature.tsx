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
    "3mwh5v2HwiELh7LbfPnu37GFCWehFbqFAhgBcH5hJJS3uDndvnq2yPMfQRiwVKwxoQaKkRfPoyKKiruXq3dQVmac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWhxS2aoc2psjjkQSQ1Z9Sv1f4vF7ZmuCMY9KniXAzjnSfWA3o6ZtZeyeHoPeUhKWyDZkznenb8Ps8uCa5pgdoW",
  "key1": "3nTmjqs7cPYJPikGGvV9e3wpFTjUk21vduHPeyauRy4aqCz5T98rPzvVPqntVsaeEQA9mKpLnpFeRoZzwLTAfdV3",
  "key2": "5UCXhpCuL7vPRXRmkVzgKb1pZUzUxzumeL7ZMZHvBJNXtF9aizZP4mBc9p1UUUobgzKZr39XyBxMenNyaLh1t7z7",
  "key3": "5FobbGoHaaSHuPJZbkhCPNxnZ9DqwCT2e7u6NfR21iY4ppvQWhWuNFNqdxi19j7vW6fae8RC71qDkA1TPzsYiBV8",
  "key4": "374KhBfjtYHQG3GcL1Kf3q5YKwF1FGAwiWAS1z7LB5wHq2KX3PT6oUJ239xDFAmT6Qwkn9dRD6L4G5H19yX3uys7",
  "key5": "cJVttpmDj6TGfWw6pdc8iku2TRfuzN58y8UZUYAZMwu1hrZis6Ma5AkQwEWzLGPShr1sH4hnyNeKyzkKdFF1qLV",
  "key6": "5knDU1xvfn9V3xVMNbvEXRNU7Vt3gaUBUZvQPmdd7DWScHXK89XsoggyxwioNBSBQEorkn6JjomFLPReCJuBSgLP",
  "key7": "5sCkws2p9iakEipbTpwxEoQeVQ6nFaGuCWfrEHA1f9NBZzcQayeFqb76CVUanWD5nTR2cPzxY5KmobFy6vjReBBc",
  "key8": "2Li6wVbfnR9kxXber5Jc9PezMLY1UyYT8mxtnK3UGX1Ts3STiGw5r95URjt8j1zkcj1Pmp3p2DUDpR7Pchf2bkTD",
  "key9": "3MHXVQpTVtNrt48wYUSchsvynTM2H6Sx1k7osNgaLeF1Lan3LnFiAfa4T5gYhQ4wug7o5yQaRwjQ5kJwbrXquNED",
  "key10": "2rrmhGEjRTj5s6jwiuZYPezF6wdVNQpjrXFEKC2KUrQ7waaChd1rdnR5qBB9iSxRgJcp5hwiHzXzf99pCL7uvRRQ",
  "key11": "44qZntVThYM7UifckQmq8owusB5b831Ckdp6Axsq9Px8PTTwESnxu7kNpaHkegBUackL6E2q73xZfXZMQqfYr9tn",
  "key12": "2j3xnQCN4fQ62KBJ2NrzgrcNTXGo4iaWKhGwY1wGc1CfQXm4SKy9iF5HKTmEXfSKmPdcWcYnDGqwrqwhdCZfNH5W",
  "key13": "2kuyvB3gngZi1FaorRrvnRisrUAwR7rSsmQZxZnmm7hBQ3H8GctyfJscXXsVnbVnUzxpe2zwsdYdEnYGyuvEM8DK",
  "key14": "5kdAbhMkNeY93bW22UvG1sm7vZXK8vDaRWxPW4RaDKXQAs5bqu7PoVe7KsxxCbDHj5o3bKF8dcPKKpVm6NbATs6i",
  "key15": "32Xi77hLXhPLAsPsSG4NZvHTAUDSunKP5JAGpquuUzQUSL6ZZPe9H9y3Ln8eCDz8rSxBUFwEKWT7vdNmQZQ1rjza",
  "key16": "4pt6iMUWqeUKmmVmJJVToEMPZW1z8nzw5ouvH8zjzTFd9ED4B1UURmPMerN4M1U4vXLQ56Y9ZJUiam4DVJF1fdKs",
  "key17": "GwTFpvmoos5wJEhAEhgkmmk5kGoeyWseu7W6KCtcrSTXfDEDAzEPXiuKio8n453PC9h8pTs4zuuVYUDYgFAbiW7",
  "key18": "4jzWTgurmWLCZCa7nRA26CkpxysEtMrM3tdnmmzPTR61EQqgNNbxUxceUJZsPcshpVq7VaSSsLBqQuuCawdwV2mQ",
  "key19": "41gNFaTcsgnUU9AW2mYWJV31vFPvRAKzGuGCyVyTKpDes9cjCQj9hMF1q13TfSWh13VL2c4d22HrwwyCRSKYoP6T",
  "key20": "4pTsEE7fbXeR5FRUgkUH5CPRMQdPjRxmepncsHdDSbMR715uFVXJr7jLeAXqC73GgggZLQ1g3ZyefuXSpw1hhaNj",
  "key21": "5DCWZsyKjG79MxTmNoQDbVyBjCJDCSMKkzPbjQb7qMZoopUQuc8uQScJ6UfMMQrKGuv62WJgN7UbDptWdMNwUv7S",
  "key22": "32ehXUFpyzyU158t9oHN1w5UUdYGb2AWgWKEtPbgv5CktxfifGjBeMXPbuE3PTo4UZydFHRAWVvKXJdSRmcasybr",
  "key23": "2UidLeokAyNUpta7F8ToHtrgkbJ3iaRHqcFBquukTmCH2RHcbyu2HRqrVskABLNN97J28qPYdHxNMw47pattuLBd",
  "key24": "XtNZPk18kGmBDtUt1pcJX1G7bYVTbD4YNZXmsXMpN1n7yYQLiMGbqCwmRQuJtk59wRYk9V8A3XuCxULpSCyjVcN",
  "key25": "mdqyiD47d1V7aumSRipwXQhdgNJrwHBJX4az4UvUCbE2WnEtn1Tzk6g1CfXDm5ELb833HZ1Q1XsGDqpFPj3Vfgw",
  "key26": "2jRrfN4grymQ4QY4Rcvz3PsCbgCtzerAGQdYTRCEweQDuh12bCEbafhYTYz7hef9tEG5Wdvbx4M7tSD2yzn2Tyyy",
  "key27": "mfn2ZyWD2F7vnn7A2j7R3EqJ9PpvBDrM6PDqfPdrs4Qo9RmgFFjBbz9N3fagJpTS4Te4gkqvGzn3AQ2PF5rzmUc",
  "key28": "4wnGGihj5A7Mt6HKPiDPmW63FW47femoRC4NVWNKLjmaTNB4CqK8zF1vPPKcmLmsGEv9Ch9uYTHbfxrwmaWJ8equ",
  "key29": "3DY1JZydd465gEZ3c2a7oMUkDYAwT28DZDUeSbERZezKDUooqCYndazTUxugJ4QEkrbjXTy9MB4DfWEGUef5LAaV",
  "key30": "2KeKuD6DPkuAykFvfVY9C4vQs123wP23eP6pkjh2yoRoJLsJ9hdkaGazeCCuUAEyjyhfnWoXD3airQLuCtDJtcJn",
  "key31": "Xf4yWdPnxY5oQG16rZLWxMTBDudJzg5gXVxzmR3f9c6DpsoEUk9cSUGsNNdxPopo4r1vqHjZGKSCbSU2R542mgK",
  "key32": "4Czx9Esm4oCmk4ncwKMEaeZdCeMnpQNJWiSfzAMaQJF6pHox8oDJ7iNAwgfo1JXdiatqe5EgKDC9dUhtnBCmrfdQ",
  "key33": "tnh1nGcud2TCdKz9xbsFPGD6QjRkqZWURoMmKr6NkFRZWg9ksWDEyLfcF1R2m43TbSRbb7H5ztziGDCV42rmNKc"
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
