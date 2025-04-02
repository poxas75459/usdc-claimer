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
    "rs4ji4jdgmJPKr5kX2jVuyuNoPipi1KRgPUa4A3EwyDXh82gfjfULv148qS9eCg8cGFU4dUV332DbJnyFrdrqyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345CwaNX6o7gjgnHkqGTWhZkunWVtuDXyuWbhmAraSqvPUMPVPwd8c9ZJncEf4N4XfkjAC3sEDiZjvBhjmamMzQM",
  "key1": "5U4j7f5P3ao8LXXdUW73MbeALC5RqW8n26GBgAHuduNBCzAeDsD1sMPuLZzKUm3WPMBTuSFdS6DoLmcSQbW5ATgK",
  "key2": "2fJ39NXvM1Ptdsi2wophryzGA9EbYr7f3RU369BVFoJz7nAg4b7vC8wEPaRamCaHvj3PBmho1zDZqPtET6pU4qs",
  "key3": "3vKtU2SbVciGEt5S6rqQ9P8e3uLQVSFci9XaQvfC3sEXcKTsKPXdL5h1X1ndNvbiMEDTJ6uziQEtkArfQ1gxGZyJ",
  "key4": "2TjMpSUyAyRGDxQs8tdXAExmdYpzrphgb1AVQy3aZQZwYVDYCmd1wxN9RLU7uvdv9yxSWkegPBaABUEx8yGV7kCw",
  "key5": "42HS8JPB2uj1ht6cqAban4jtu1dt23URMV5GBv4SgHooLMZuZGG8o49KmcteuiYqFUJNxVjANP67EMiQzu79taL2",
  "key6": "xbgWd9phFhJqw6mY9CZyfFD4Uxzhhyruk3dAJhMjErCRfKFjiyivQ1fPFio3Hm7NpL1drA9JHcoZaTcaNAT2eSg",
  "key7": "58Nq1QAYTpfPiHLiQ1pusdowp34Luf21ytKpKAKYjkRrzfQ2jJEdW5WJMASdh5hJ8aLwYswahNDo9SaAvwbLwQEK",
  "key8": "ofVK3hygZCnNoPTPSrqhjjNghsc1P5HzKzSvvpALgjWT1XWbAbvUCpShUBD1NffkCosbMzDx1ckN7Ab5Xro2zPJ",
  "key9": "4r5wyC22N66Ue8SfY8JTq3gePSzVzoHz5ySThwJPpdX6egkqgeADcgzxQyWTpwjQ4nNE5z2KdnA5MFESKG8fXthK",
  "key10": "3scoAGgFkkeYdpPdzQbbjhfzbkT6ZPv1bAE2TZVF5kAuGSx5CePQNAauc4Pb7osycbRiNWaEKNCg7MuuzN1Tzkda",
  "key11": "3ZLCPNZZn7mxeiZSt2o3GwDrkMbdmayaeVqaHJeG7WYmiPWBKZHzRoxj9Kex5Fhk1wKX81rYKnyEd5s81C98CRR4",
  "key12": "4a2Rf1wr2Yjm95NkXkZd2W3L1oNxsh3fqPk9aTu2SKUjMNKJRLtYNXx76PzxExFznoi6oQjeAih7Y6QgN7VAfbKN",
  "key13": "3E7WCVtEczuXkUyWgAAYgcN59eTwQKJHH6V1A6KMysceABRGP42AhYTw1L2hCY4h8tqD13snzr4QrcdN2SJvszUv",
  "key14": "3w3t7HJu9DVnWhramFVpLQMxikhvGZJbZpTWN1UfyvUBqCkr71J1GDXPx8o2Ldop2YtUYvvWMKYixuS6hmZWBzTE",
  "key15": "5J5Fc6yt8Lb66DdTiHuALYxzWq2AwmeydV6mWRzv6ZnBFa5Ft4wq1eedxXcueYZ9hCR1tNZ6wvqrkfH68jeYBq7c",
  "key16": "4hYatDdQQuP1ofyiLFHVa4ztpU6DDHvZdsrLof5GCksH2Ykm63wogq9CPDW17EuDDyEmpVyyC6nuBdTd2dNdQiN6",
  "key17": "5eS3s4tZDzzav3NohnfiRKFS3g85gTyoeUHkuCSMZ49op6m1pGbE4nAyRPK4RBayvJPzTNHdCJcZZyfGnEfxtjW6",
  "key18": "26Y6QkXLPnTCXv8E33dXNA21EJhQ8GHfDGh6jeHoNA57StwoBDeYQz2GdZGGtA56i5nvNxVFqgBWDKEZdvpC9A7Y",
  "key19": "dUQtAC8hJxysKeJ7BfnBvo74ujMfVCw3moCaQzjWkooaFDo1U7xDSdPS3qpCH8zhm9VNNjzc9rvuoEkkrSMupKs",
  "key20": "4JNfLDSMZnxXEMiWSs9gmHYMMQL3N4btAHbA2hGi5dxQD8LuSQCPt1jo3VSQ6hQQLBWkD9N8NPZyjZaeLbSfbDQo",
  "key21": "4vw2HTSQAQ1g1yK4jzprtXc1pKekn4uxpFtq9k8uSZjXSPftj8knuszXMnRzsFM6ckaU7AUCoGwF15Di9hCmVHD2",
  "key22": "3X5TkJbEHMWknxSeMfdHxNV68GCVKqHKPYwkLGNxwdmtW45GfnqSw4yjyWupggmSfuE4T19nnbKoixfLbb92FVQi",
  "key23": "4pJqR2tpBAtMTdzq3fGtZ9hLjXn56wHgo57iNTGPT5pHJhzQ3Rra7LxrZsJ3j5wH8Z2qW7Zd4CQoJzDJtVexDJKD",
  "key24": "41xQ9JvEh3Sq5tojq9v9T6gkbzaGj9eFq2JwRsP779CvU6uZ5YFnCwhsKbAULVaxhpAC8osxk17f9ZchnctBbYrw",
  "key25": "4X2U92Nai3BtS7eCRY9BWxywxTpvq3Ra583zkJg3utsNmtSecEL43KBFapGaq459ga8qTKUkantGRDDD7krzbuWt",
  "key26": "qLsX6o7puZzwjUpdMFz9MfvDbsLyhBMFqye2nxQBWHSjnRMio8XXeKoXEXDhs4GhhBFYVFvmQANcem2pZafHw84",
  "key27": "26iy6quiT7hhJVmReRpmdaQKd5RpnZqQt6ce4DpC8ijnvuwD4fQRKp8PiSMdcHpiAHHcWHQW5ZHQUaeTvGaujSti",
  "key28": "2vrLNqr52njvXu79tkmiFqzGkuvPfsgkQZfwu9mWoL8RAJnAsZyGSEr68KfiB2sT8zcVU2uHwY8fnx39DjESMP4b",
  "key29": "5vg9sG881ecHRiEAwumnTqGEVAMBDZyjtUhfm49G5XLmytD9Rf5sjeggsqHeVH2st72KUyuem83abzMnyRRcfk62",
  "key30": "5ForTVE5qTjVSC7WUirGiE8dsSfQ66YPzR3uvhXUWRm5sQCVGTWxg5p2csVGYzMJkPGJoXKtVMbFsJ6dbKvu6Qtu"
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
