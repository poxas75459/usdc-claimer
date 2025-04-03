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
    "ndWy6JUiwdBPCfrdSyqRdtQ3QyMNswJNUUkAXZMdfG6hv7LXzCXsLaPjLTCKAcausvRky7EuvCcG5eMi13dFEcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXFdWtw8RqAGuB2xo78u3NywUD6exjcP6uLbiX9CKVv5aXvscgUzmDFR5z6XfAaH6y3gu8RssPyx9PDeKwfYsdz",
  "key1": "Uu6ShHt1VooYiysERau4neupP22wnyjKk3eJap13Ehrw4LzxmGfh2oGPV6ayYcWByS6gFMsSvfkZUjKHjFGdk1w",
  "key2": "aXj9t4LDyrUFtV184S7QyhnioHAjS4ttrBdHeR9EVWZBSNmpDaY43uyusmPGCPQoDJe7zkhVLvHUt82jU5BRDMF",
  "key3": "5j9VNsosEiseBKBSPEdD3FkjMveYshimAtf2BofgMVw9KxWZ89SDtadtPZ5gVZASYoSRzDMncqAstoHokkCk67si",
  "key4": "yyJ9ABD2ZxKbYPt8yUAvSo3nbxxLSU6bSk5NA3ojTKLFiP161jV2T9YcYbvvGKgGcJihZsW9DZG5XRCiukU9Lju",
  "key5": "5kR1g2RNY7Wqrhqw7B7JmhemHBzsYgzmCDDUizNWuEjGCsPg5UHECmmAGriNXnydphwWj8jBcAvjh356vJrrD1SJ",
  "key6": "22bpGvK8XViSuDdrxAqJ8iTUfA6FSsVo4sbpStriCAvHfs1nvdWDiXJK3JHngepWb24tsJNDyTFqBVCtccUukRkm",
  "key7": "RYrbGvUZjfBZUpFhXCYJaETNpa6JkjoANJUxw6RwxwXkoVZvFGwStbjWkkfJRCEMopPY6TabbxeGQ5pfZgRARsm",
  "key8": "4eimfE5S5jahbDNZb25PfemJmAHofaJubZD1wyHFUcHhvte4eKvxdpKNKnAxzT2zFDDuWLNH7yqiwiU2x2ognKJh",
  "key9": "2QaMzJ1L4yj72mSopb1NKa3oqa1gEtmmK8fJZ7UUSPydiWnuBsv3RCJEzuG1Wphw36Z2E71jDukxfMSr9RbRJrFm",
  "key10": "5nVQpKbPdNbmvj9Rs7cxYracDMJ6cKyEr4D5TFUtQEsVNBxQbTyjKu1x6mqfnH9mhR261g7qXfPjQMLfCiPdYM61",
  "key11": "5UvfLbrHQEwVksjsg9ScyjR4VtdBnECWh7aYhsykKg1MAxBbmSKizjgRz32wbEZ35NfamJmt2mf7eU3CC43vgTSC",
  "key12": "2nPu3JX7hXGjKWqeEmiCUVJPxWzPaU169D4kCJomELpxzNpTXgSWBbU6UjKEsnyQpWbgF6bgfgFDkfRXEC2BvbvB",
  "key13": "GX4FVMYd77nnVoidg2KTAW7Yq2HEE4GE7TbD2rEKbsyc8EYxY9R7qRLmV9DVmohAXsW2gTeZZLamH1a24wrsQP2",
  "key14": "4XQfDP91tVXAAE6jBb1JAHGx2sUz2dVYZUYwgLzdcixvxGqBP8ZdW3BgNkiAH3gUkD3yeHJ3XT4srxahjbbsMyNk",
  "key15": "3C5JAnBDQ5cRh1tePWaz85jm7n1dyYfMXY4MezmDdkarAMZDxuuvUPZdT1725MUpWjvDUZVbEJ5H1v6Qcn1cVra9",
  "key16": "XVQuQoZQKJ7oi12Ee9sVHYqoXNTT78fqkFRWG16YsjMq649BXJTnqRLLzevopreMGjkz21qpPy7s9EkzD8SUtpJ",
  "key17": "2VSRziT1YYbri2yDAmdiBn9zDEGf835b3PUUwcax5ZPhq4wsySKxWDpcAt8rcyJoqsDQoJQXHtSQRohmHEDdYkB5",
  "key18": "4qgGDHtBXSQcutDzE3bJh3DPyNzrT6EcwSiorXqpta96edRoWUt94vwseLs4Wdyrn6Bkuxud9Cokm42FAvd3uffM",
  "key19": "3YWU2GW3WVqAMAb3WgXDqJWQP17T6TGfaVYp8QeWossMDaMPRLDNLYeNU8JthwdGXvNJHCcVKxmrU83AsySveF6q",
  "key20": "5MWjTGx3GQthp2sDPevsnSrxxfFYtWF1YEDyCxiF69kK9zBMmTAmPztc5TteK6EYguaYzPNZJZjhXdQxhLjHTY2U",
  "key21": "3kDNJups3CDmnxRSoTBJf6ePwNv3CJMxQkydsEQuTdkN7VkeNn7DFH5P5VqhEXnAa68vEC1NLLixrYqafcCqwQHu",
  "key22": "pAQ12NevDTCSkNZqpEcLJnRE3DCCF3mYQoueRBevAspSCwsvTFcVmBwor9xzLa45oVSiNPRNm8uXnfahQjxyMeN",
  "key23": "49ACTQZ32RfYsKzUkBRucJxjYgN41kjEvMYyTr57m88iqDRdMvU22cHFUdCWTNoaaGxHt8MwrUcaRwVjqyXZMpZG",
  "key24": "fUC9tqU8YZL1DXaHVNc2waSkyHBCvcZQpmkF6whYcm5cm6yGuwRq9Lpo9AzwGXGFt6MtXS1YAxr4gCn32rpcpFa",
  "key25": "58q7EE8GwsJomBrKUsp1dpDveAyW2HboC6YZ1orFnb922iD7WdhYvvmLXAfRZMxHuT6gE4ihT6FQ8Ejq5qCXSi9",
  "key26": "Mbu3QMLDRWPpxHxwD95MrfFfC4LiSFxCGCabVoecnQBrZwpd1Nkh4XijZhRz5ZZHBSUcjNpJTSeKx74vLindHiv",
  "key27": "5UppsZbeCrT31nMWxgs1LDYsupW6H19hqqR1x2nXN9pbjYRC3LcUwdsgDtLZ7qLted7tRbHZi4cU14nbUjf1Nx65",
  "key28": "5B2LWp7oiZbJMbe3FLZefF9UoQvi5W113U3Kh5VHYerNQKeLq7ptHUAEJA9w7ahwjfoT12X1XKgy3Tu5rGtHMQLL",
  "key29": "4nmxvjgwBwfM9RRgpc8v1kRxnVwjAqfJ4QHu48UHBeEzYfMAzKwoBwzm2Abc9r8rU5u1yuregPj6TiZyYjn9ffvY",
  "key30": "3viHMY9nhf6A3gop4YHLDmEjpNmvUT1ZNun6qFxvQYoC8Wu4BZdiXSv55L66YpfmXCw7rVs9XAqKz6GV7cPoAn3q",
  "key31": "5yVKFBhW4dQc6eGo6kf2LbS2RYRmd1k111vMZtyJz6LrMfnSuMKXXFBYSxxSubmQEPc2RBKzJnFwLgZm1juk6uSS",
  "key32": "hBVVsa8AjyyR37LMh2CDmbQtbrbjfqt3ziZ7uedSoXNb9dM3LKxE4h1HwqVuuhWqVLqjZHLjmQRrjw9UVZ787XD",
  "key33": "bEcVLBa1MbtNpoYjcFLBne8Mb5sNbVtivNV4o2gEkJYJgWSaSX2VKAAfq19DXWcpdzdBtJGU48ghpYUWcsAo9Pq"
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
