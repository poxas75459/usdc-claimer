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
    "3VypCWUkdhna5f5rDi8E3VNLyYvuEbfy3Msdv2xRUXUaVk8ZJM4MUZvCzn8fv6Cy1y5TFFST1EEQ5XxNTTJT16U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnK4HJ8cpzTA96S9dRjKRZghtw3398mRaoronvUsSfaqH9srQjm8BL3GmqVkseRDZGRTTqcUcsLXXMs1z9togQL",
  "key1": "5h8swDjeMUai822BMDYJ8CyTVEipouwSfzvF6wkNkG53ma6gCK1Ks8DSZxKTRNtWnmXJqdyBmaWqVN5HzBoGwjK5",
  "key2": "5V3jGAY5jBTu62kq5TZMTCYQMQD41eUpVzvNgWrmZyQkac4BXha2x5VaXoA4MCnkYLCbFVC841gVxGn4w5MwLeJb",
  "key3": "4XUN81TmHdmgwJ46Zd2JbnNq7Z5brwJAQRbvKYzxmzNUUUsBNuXeARmq1oyjKsGsxJs2vtZp3hLiTVe4gk2Gi1nz",
  "key4": "NRiAmHfMBMgkNkfqVCaEfLDXvjDWRsb8jocdCR8d3XnzNAaBLhVaUVDciiYZNkR3KgbKESMmRrDHako5QWH7wFe",
  "key5": "61C4cgBkvPZGjADiATUQfaQdv6a4yAAi5T3HgCo9VU8VCdx5hF25mJE1rG5aUvJm7beTvVcXXqkguBjnMLvLXTsT",
  "key6": "3mUMcxi1eRg7GbqCmgfg4X6KDAaoBkuNa7QrnGzdWTJJGbKFHcJKgXuxi5zV1NYjuqp5UHQxVf9REJcVzAGv86Jh",
  "key7": "F9KUxVoV96qjXFpvRKSZHCpUuzEuFUtEpooyVRzVaRqBx8XG6TKHbTgZkpbZDM3X9CUYn8XRUquR8guwnvXfXVJ",
  "key8": "3M64qwtppKu5ELF1bQ1TzjXTQ78BRuuHBy6BgAcmuRCRC3KxUP9XdDQnKAaWxuUbDtGvwHSYGVCpCeJuNcmB92Uu",
  "key9": "48nRhSC6qGnihWRw9YNBfSgGP5daofoBS1fVaUf4p2NSCZqzBWYUoMhkvuSrWbiYymPE9M4QVkyK529HTnz3CaAP",
  "key10": "5FqENg7A8MurgB1R8HM5rmvKfBrsCgX4j1k4XBHG2WC5ZP1L7ZSZvkDnDagY12BtKDSL2ChinbVdV7b4h4r8GCXD",
  "key11": "3pULrUNChB6czyG5nJfE4KAMtJeC54Xvm3CpqPoiKm4dQofrjLAvEz21UUPoZcbvhfB8XbKzynRi81HzhfBWREzV",
  "key12": "4s4GPwhEGgugGKYq3PhW7Rxr3mSjrfnDivZtb3TR8FSeio6GMMJdH1hdfpanUk9MVLT5jXkruYWyrGY8rMyRNFq5",
  "key13": "KD5Nnb3zeoSs4b1gaN8TJaCvZWxGikUWQCpA3x6e3zpLjNtMsZC9qs8VsKBmnYUgcyYcEv52vgskXYXC7JNxHmh",
  "key14": "52jP9mXitgkZKgUhUKaLbTogaGW8YE4ndDTUBkU1NX9wHWfLCPDjpzQdwe8p3WFGf9cnQMSvhXSbtxQRefWPyPLm",
  "key15": "2zWPAMWrvrebDS2T3VPiQey64i2NVN7DE93NLhCnBk3XfMpd13PFZAAjBVY2TEPf1TBpRXVf6Si1ot9bXBrafyby",
  "key16": "33hFdvtcWU9iV1J3xy5yZGWBVuj84fDjqt8GVAqnTmfgaZs6gahNMsy6vSEsVrm1HrmPqsQXYEVKEiv4LRPYPsA2",
  "key17": "3gpiQsgnPTcNs3nkA7PebHYTArdFdsEfZXGyeVD5JeevdzTb27BGZWJBovtux2brejek6jaBwC4aArr3rup8qpWY",
  "key18": "67GyKEsXJxPup53NuhfN7B6EvAqzpiyukVFpkujcxh1uEbLm9mnSdh3YEL6G9keP6nzeEM24gDRNHYDsBDyNVs9i",
  "key19": "K8QMTsfm19Co7DyVYRoky3ZGgrW9sd9P25U2XVhhbdM3Z4kAQhdREKgW9j7mdk6dqvauGxNPZ8vfFnqvhQmLpsj",
  "key20": "4w51mteowUzBSY7eU26Zcb2miAsmWnAeBvS9mqVRc8dRcC6Ro1xWyP3pYF1x7HFo1ffoSRGF6UTDCA6eh1LGZKJx",
  "key21": "4oYvjn8JWs42astusvZmvHiFxNSM3VCAPFD5jFhVcoFPbJnZZbsvWVadEoZWAYaMCRxckDQDnGdjNgW66HsGGrez",
  "key22": "2sfYQWJcWbm8VnpCLCXxfSTu3CJJWz1pU53TNoUGCXji4cGZ98YBzN2Uy5gP8tJadLYL2WTLK3HPDuacJd69iz9r",
  "key23": "2oSYjQvm9ZTQgZPe27zeXuckiKYUKTZPoWwKeS3c9Es5CPAxpkQvvQv29vSAYxT8GGWt8xqggjTc1xyfdJyzedPt",
  "key24": "55QbpqCg99C1chKQSyhX43RQsaJTLg5zyafQ92SJae5QgCknjAU6dTU4id98DPR1HEYe7ubGaCMrXSZEkW6Q8JoX",
  "key25": "5UHTX5uU2PLSJGbViiJ8AcgZnPMW8LicFoAfHuShZ2EZUD1QnwEBc9nPTfZdvfuwkWob8sJfcSmrEpsDJYcSD4Pg",
  "key26": "2mB1FxV3dcM1iMhAzLXQSiVEhjRzQ4hgxFLHVpc2Er2Dmqzpj55C74sgabu1c3hWb8EytpHiTBk3FXGqAdfkojyf",
  "key27": "5kyWc6iHGwjFEEFjfeEqHGzMjrykhG8MfZe9CpNLsDTGinUmWjfJMPVxZXuU686tEAKvfeucVg4zrheEgtSo8PVu",
  "key28": "44fwmZgniuZLMnv5ozF4qYuTriuNCCzgizu6iLHCz6R2YdRkRxvUUL7b1BQvNFcfcC7oEVvmNXVLkyER7JaFLXbn",
  "key29": "37yXsqk1W9fcrEiCiJ5e32YeKfzV4twoFYiHN53wy52rXHzbzBeDvsM5th6q9hDeB5L57necLrxMqRjTmQ35KfnL",
  "key30": "64ArM5RKYnjoAVH6y2oDteBiRjmPetY2ypPUjFiu5Qphp9F5WfM1emnMRkFa3ADKQnfnqBbUeKqmC3HxTKFwPAb4",
  "key31": "YqQu6sosxGQNtFNJ5xv5YPskmpxJoXd1rohy26weky3WWgk1apjXC9tCEshjFMAsFLekfkhpqh7HQTYmiWojcbF",
  "key32": "4k9KutvjWGPreVnCp7ZDVNfPg8SspNwM1TuJMPysXoicxr4cEY3JQMTWYUKFgbEQVUTFmiuizGpxWMFbv2Perwg1",
  "key33": "e8XPnvxPAo9ZpT2WWk6C4UNAXLAC8zb2dniZA9EmUeG546ZX7NTdCh3acy8aCjxu79t59rrpuUjNrbbFUG3wp38",
  "key34": "3QZzTk8v1DHgDJPGjFrUar3KnSZ4ppanz4q2ngrb1hzki3F1eT8DsyT6waCPU6Wcb7yiadXPowHJ3LVjCnciYJeb",
  "key35": "5odAmPEhhk6QyL7Tr1ZBmp4fgw6gFiA4P4yKSgzcJZ1skCvktgvZ96xJoMwwpRHup3UMRozK5Gn1LwF4LfgjT8B3",
  "key36": "5P5L8NxJTRjcH4rzoUMZZLiYDuQ2tGawFibbUKjEsQcvAAzrEJi8sbTH4as8oRY171exBTE6SAhGX5rjYTBKFBoW",
  "key37": "622UCWvSmbG95FRHCnH9Yu4dfRXXKY9Tmjq1Jfyf58wGR2QCBwHXJ8qqenxCLnj9GUYd4yg9fdYfzBCw645eTKZF",
  "key38": "511nGGPudZ9qhA484mGse3eT2QxaD5P7dvxZ4FXFp1Q1N2m5NM7L9iM24CGXf9FNbkQsYy7PHBUDAvAA2xiqucxC",
  "key39": "2WFhNbirQtgDAzKSF8Xn2GLMEKQt2tWbLapRX3x16cAzfvkAfbBfJwF7ujWuT61k7ysmpiNLXC8wEqmQfNaANXPK"
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
