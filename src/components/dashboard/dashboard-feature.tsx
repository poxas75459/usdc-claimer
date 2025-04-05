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
    "32F7BGMCiL7nFNeiwVdVhQ2NSCSpaFAzwx3zpVUoGLXJSqjBiZeiH4PoigSE2RVVFz4dXDgwpHeJSB289V4ZaBoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Yk8upycqAqzQZmeTbfHRMetsLNjAhTjtFDyFjm4znFgf7537NGsd4gqYVDFtGJXuCfrhDw27DCtfHWFzZbz2UM",
  "key1": "5wDzE2gp9EzU2wgEAdr93H5gFXpuEzfiR4vo8SiiwgXgM2VGMdG9ky13CzqiFKYhvnfXis3vM6jBFEBgTSGunFMf",
  "key2": "49wft2PAqkkrLgTrykFPjZgBdPZ31FkNuYf4yKzaKTmC4CudCPCrE7frxkQrKou4VcMYpuyoGuUfmYV1fCVz2FAT",
  "key3": "3oNe17b13kofxz3m2YjjAnuPVBWJjZWEyu9ii6HK2EQm6QGwVvNdxgwz6iEs7nd7EdWqN3jAyYr9xtot1BarLfXJ",
  "key4": "27DWHUcSYgAtvM415tMYQSwGRyDPSRP5F73KZHYWuwjsWHAVfhUDFWH14w1tUuUXDba422eVJkAfZSt5fmnNKEp1",
  "key5": "5uSDkmpja826hp85cWScFxp2H8wLqDJvKEVvydUeFFyCzv3jnCr93eEPytxj9Lm41XSJwxRei2SxxTR4xdAiMGzQ",
  "key6": "4g2WWe6qj3qmCLrB8EoDX4LRaoACmMTeLVy9JWaT4pG84hdUR2ckSpUFc9bo3gq4HUM4GxYubTcB7zFrV1csDiJd",
  "key7": "MNbQ3gNXWnPixQHMhSbDhHHuodqeV5HqW9xrTMUEwJcRDHmmadfnbx5MmJ3BcardkLHELTk46Ebt1wYTuD8CLW8",
  "key8": "4bhbzZDvVksX5YCCSm9jiA6nk1Pv4eY7HPJmmK94cHLhqoTyLQBPzAbscCr9bCUyWBEbANZfvmGirdFahYUdKsyd",
  "key9": "2EGfGUt46YvqGiabLxNNNZfUNS5eHudSNUMCSZLKEKuXDXScvYQQ9Q4Pc6fHQ7N5hzyzKB55PcwZTL1ACcyNNXYM",
  "key10": "3jpmutKyfRLqX81mw8aMYozP5SRPd2Xs3s8WVx7ZS4UcBLpxQVaubJVvshSCh4GmxGBwkMrjxKvg9aqgEKNFSc7P",
  "key11": "1gRhFLKHhwBDNPzLztNKsSsgq8Qy2hXu8ucXrYbJmKdXgJj5RYEawtZgjStW68QNJnSygqoBA987QWmfMCQYsRj",
  "key12": "4ARFLhkzn81NFXxfnmhAhp9aFZXVtSecw7bKaXNuxso3NZboiQHnuiE1e5HTKBPe1GPNVectrzrEdSHPkaQrz48y",
  "key13": "tGNFSUWKN9evfExe8t66dUpt1Wsxq1JeAZcNtb3gmrNJcs9TYMGV1bHHgtB76rmiPZy9NUqLvXMJgjwLhFqX89h",
  "key14": "2NJRtghDGztEyB5ZxH4kCdMzNEFBBwDMzmqH39n2zPce2PknxxM3Dx7aRRPfrohVwSLpQ9JBtw1qJMR77Ysnp8RR",
  "key15": "24o6BtbBaUiYsp1h9AUYPN57B8yqKZB7HNrQWJcboTRtZYVpJ6cbc7FUqzCZp4PGfrr7HNHsSQP96dD2dsQxNdd1",
  "key16": "3Atz9bK1hooiyoHZ4euuK2CcxqRsqa3km8fdErJKzTnVpqYf2hxXxEYiJqPnHzhdkwxGZhRyg3RHuvGi6LwRhNWo",
  "key17": "36voHwFoedmGNWrMbAkk8sJekNWMB54Wz3jCEQw2RLFr2FceQHv41Eer4RW5qqPTLCUZXqYN5TSapYprthcDRHZt",
  "key18": "2nzNsjfwSzRsMWWZWRaYhvjWBhhG5RZwj6v4CRqZeuenbFgK3kvs8cSAy45N9JWYcG6VXWAguuvPNZWk96dtgXPp",
  "key19": "2mTSVWFH2ZxFL2qVAcPhjQkRaC9TqquKp8SQJRscqRAe12U6Bo18xP3zQC26SDYW9ebka9ZAxQVDnMbbTGUG7DCz",
  "key20": "5AwB91iY4WNWavmdVTCTnycDyRrw3AqcqZbAyRmexdUWpfHP4hcnTKZ1T2rRJjeNZgn72xbzDhBtwLigwWa2W8TS",
  "key21": "3vvSRcpqEvRb4dqHC3c4ioNeuwSxE2nUphetHQwpE9ssMVgzicqLr2tr4DiDMUcYkzyUdudc8puKJN6KASxfMKm5",
  "key22": "4TBTRGU6L7hjMs8BSKwcNhdy6pWWb3MAMftBfcNc1nN24rvGzmcVQfw7qGZFGXA9ykhDheU6wFevobDTzdKvKotF",
  "key23": "2TxNJ24zYoQd84eBBuGESyjexUqByLXfKsJCAEcoRAMyt7oTR9ZupMuHB9qPMirstkP8YhnsnQ72VYG4aKJ34u7y",
  "key24": "4VThqPHgxpxgPHkh1H7QpgFSoay5nEtsqWT3AkpLxJ2KjB6dg2Muk7eefiz5uhhq9ubFjcfomBDvBR9d1iBCYKd6",
  "key25": "4Zy41mCncizhwukeCfBsx43JcVPGnG2EeDn8XjhdA6H1UQNjLhVLG8TJQTVbQMYrXiTA3NQwsE7oMkxVjnLKnHwV",
  "key26": "3fnSo2adTgW3Pe8SF7nqpYNBjCUyPusSNbMRkzVas7ZgfGoUhypCdzJPV5MdUoV8qwwkpiZthEotteMzS9GAznAo",
  "key27": "AWZAt69jkUrfvVYQ3yua38PNM8xH3ejjxmza6nPUDjbE5BgqXQhPmaGJqgvrEPUtqoEiNt8F191ckN5Q9x4NfGQ",
  "key28": "8Z5xjK6MqrXZDEnvVJeu66jzKFjuiiy6WtRjMNx8Tmd6awLxQW4TPLnY4enQnAjksyQHaY9zA9Egqkg6rJgCpHb",
  "key29": "3HPyYGEFbsiEPN3zrpttiSzvEQUn2Dv6FhZZjcmcXw3cNnzBipTmVZjceBVUSsgfV4P9PFWLfRwYkQcC3rgMSYLe",
  "key30": "332qHP5J44n85CsXt9gAXwMtwZUmZiJjUQY8HghB2CHYYPGVwZvUA5ztTasbCN6zAJTNJUJykQKeFfa22z8v5Awy",
  "key31": "6yDpKKYnXiuZw7uN3HKZoNYWavs3vxQBAEcNuFVru9eDFQe9tJoKv6FRBuq9ppthJGYan7WVYc4oQtnodYhPmwt",
  "key32": "2DcZsNBvXPqV1cxms8aLhLCRmvyYhJBcFYiowNkz28SwDNfjZL7arhgppeZoUKUG5kvdHvNaAy1Airz1FdwCpdza",
  "key33": "2yRz1QbjWtSvaw1vDYVCuiHyjgD6wqXismitpeupWiVWge2wdWqtw5g8aPU2zbehYXvPjzyRM8eEb2mVUU7hpTf4",
  "key34": "4Boe2g4Z3QAaU92RCpLwHf27Tj3dfePBLaMWbhUCcdQT8mgRxMTm883GQr9rnz6tLhMjA4b1FupD4Wdvq4t7SQqZ",
  "key35": "5n2YKFd5zTzis1zxuBhAP2SgXHFoohaLxm5fogcXzKTUq64Q9AddpmyVvdZ8cM5VyfvQ21LcV5gxF8HTiHWDn3eA",
  "key36": "Y2SwGTy17vLE8sSZA27ZodGM2nVHqhmFpxwGtmSJ9Lkwg8qPhmSxuXPKSLSUZyqfasMeEfdDbFJRgduSrD2oNuS",
  "key37": "jbjz69Sgc83XDW8aokgjVdxTusdfMxQAsS6KWShPg3RjzZwYcW4u12V9TciwaTwKHvfRkcXtiMA4FvrWx2MfuHj",
  "key38": "2Dn1kynUbrH4CUrvprbF4n1EATHSJbVRJ5uj2MjjpnasGRLEhy8ZFHZL9B5vXfEvwuR1U76oaJ9Dzmh5zFnm5chV",
  "key39": "4HzcD9UdGEAb6RC9bdq9meq5yTdisTzwrb9rXpeXzs3bwoSfizd7L4PKhbB8TrN7b2opH2PMiGAYbyw2CY4kz8b5",
  "key40": "3xPgKdM7LhmxdaNNAArTV1NgvASLcs8cuqjV7fNR8gTfo4njGpehxUGNuEyL8WstipTKn1sgpK4Dy9B56RUq9wvB"
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
