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
    "gwdd8wkAW7hq4sF4egZFPDi4FqVACb8oPWyQvGqFPqBPLqxyL51fb8HFzBn6fx3bKvHpLUjQwzQ1jxs1D7hvc4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwajoXXDQQEfTrjr8BMe695qh1SsDCvU3mxcG4U4CoYCAoSa7Yy5opm1P8UiXVMoAWspBcuGhcCrsVP8d8gqWkh",
  "key1": "noPXtvTkpydpN7thdgNETLM6wtS2voSWreMrhP36q5qUPFLp3zcdq2H15S5EwtNhynsoH4zXggy2CjknLNcrCWU",
  "key2": "MK2Yebxo1XPTUKShJsNi8YED3qScrWFBExPuK9Dg9m2rtNe6tMV6B8cR7tnypCckxPh7MfUweDgMgJeerK8keQ4",
  "key3": "5nrrFqZMKqGpKT2rNSKNSe8SvXsULXKsxdZyR3BucQ2Sanh2juUP4rffZcNTtiJGNtLAmRfmV94MbwgzFyhAQAga",
  "key4": "EkPJ4kamw2BwqkgyLJ6ifC2TjdZExM9n6XNnLWh6a68HpCFvrg6DBaod1ENAFH88vBg3tw7T1jXRN5swdPDVz5h",
  "key5": "64QybkumczyVFeVKytnHzua6GyFSLFfC9vSnayieQWSyafvEFoG9Qpev3CjEgkhGjfhM7DGzSSH6ZF41ToMHPEfn",
  "key6": "c8dXrT5ahAjnsN3SawyXdDgSiRYfeR4DzUZ3yvJ9RwD5mb58BoZt2hfi7faJD14nwhFenaA8eWNywCaP3UEtAQT",
  "key7": "46CYw9Sb736AntfKqxhiJQCGVj9HGRThc8yM4DmQD8G9otAWkZoiHdbnYyPnF5h7kWsjUqAFbazR3qZSzQkcAzc2",
  "key8": "2mykSXgF1uz5PGgPE9NjQSiVZ8B9m86STUeg6geFzhkwwMZJm2i26NwWT6RiqJvRpkaji5t4ZQdNt8iWsJaNWH43",
  "key9": "3dpWxTD5RNSDDUccpAiA9rPtCe7abGcqkRW98aPNGVtF3PrnwZ97Z2mCV1gT8T6q7NnNbDHQWEdh6Ed7RSGhYPdN",
  "key10": "25it9aRUHaEbXTxKRaBU7c97DxKzVtFVcFJSvzkoELQMUU2ZhSrthV4MSJFPD9aL5S1UpcXr2pewowjN2RUmTX8n",
  "key11": "5C5J4Vk1DWd28mgnCvKKrJzcXBAPhtPJeXcTJi4dJVvtLEd8GUXrwNU4BKnu598GTrKptYwA2BEaCpMVdY6iGXf2",
  "key12": "49gcLD14YYfE9xiUgPgQPhHtxK6K9GD6ctXurjZAjjnkjKxrRJkQCUEyKAb1RRWZUhgCcTbZYvqGCumxG8EENUHT",
  "key13": "nmEbVVfRv49vJZGPjqxmhpg5mea7JuxxziwBs6nQbs4HybQ9hJuQBrFNYveK7JBxKmAcrKPrvViXpzR6cA8J4NZ",
  "key14": "3Vgo4iGdHeuKhoNFuxAigrrX2UMTZE53qJVA9EnyQ7DtDDewsjRYuewm64wUtPYC5eBeqYjJtBrnwz7YdXGfCvh1",
  "key15": "53Jni86juax2KchyTLeZAmY8esGEvgEE21hRf52ZkhcoXudiPYkZwcKsDsDMGPnamDaUKNU7kGrYSBysQsCAuSUC",
  "key16": "4oUYXwnQ1z5MBFsVJDipWuquJE3JupJvPcQoSC3czzHQtGwR7J4q1eVYi3KoK6DBiV8ArVDKH4k1uHhmpFVQ6PuG",
  "key17": "3tfku5PNwEctYLWTbcPNUEVmUVfXXKksmhRqLBXh3MLw4wYbnaiWycsLrPpnsLVrmEWFEfiumNJHqZKLYYXv5Ggp",
  "key18": "tZE2aog3S4CkEmsCnge4wnczkaB9K7exKvNiY4TyZComucrHMjiUjQWniWJisck2Mfx9Cq3Q5Xffq5nfmxqEcmB",
  "key19": "5VKTS3vBVBRP53tkxXhmt1JUnewUbiFZU5dBMXZ5B7ayTdDssiTwendG74VXFUVAmEUneu4XJwCrsd7YHyMzQKVQ",
  "key20": "KKxVdmKx9F1fEMr9LhCjJqN5GXkqVpMUK1vGu7sdXwqSzy96MWyFdTWuC9GiW9t3nyHBAXny8uHMci51yfCQEG2",
  "key21": "66btDhdEfS4kcdZzxUacyX166B357PDRP123unbvi3cr3mGeU3UcNxaddmxKgmLAmpUukrqFyS9NdWSXERi3EvZT",
  "key22": "5U8T7zWR8kM92B5bT6pGZARQd6rzPxxWN5r45BTg1PWd86yN2xUA54ZJUDngdUbepUK5mwAkJbs92MMBgPH88j11",
  "key23": "3516tjJXmJpJKdGUX5ZAJHc1UGqmzTghbyCcZnevisULZRhQZrERQHf4PAzANu2vwEHFotTcRC5Duj8LjrbVMN91",
  "key24": "2bZSQiRpbDJokUy2xT7i1SjdqTSiUG5xqERxwToRZSUwMVcX4hTdSygrJXMfR2dWF6LCpgVg4x2S1ABU9UxqsrcD",
  "key25": "4QEM8qS4Jt2hi8sxMU6e6c9u4MFXQsBwEZmDndQ7nzg97uZ19YjbFcLEMbXdwejUuRH731jmXBezFUF6NbG7JApr",
  "key26": "4RmzCrDMvQpSNZjKnPw9kfjTx8NchD1T2gF3rhcinpqTLkcyy7DwBdAKBwUP9pSKpFbh8bR4Stxqv7L2SZcHhaL4",
  "key27": "3MaQkcoYXhhzjH3PnUStVF1H46qdaQmrdMYAjFC5LkuUKCMes7jMf4mkLjwTuL6Ee7ocn3MWtzqmhLgnhpWPVGNp",
  "key28": "35pXdwUD3amP1LBbYdigE1dUJTJtBhaWLJe2S6sjEar393iiczf3cBx64Re6nmEFLhoLdF1g4X8Eg4MYCo8phS2b",
  "key29": "3G2h6cjRQMm7Maqz2UniFbs2XUEiTgvT7bQgDy5JeZBuWt5ApFFW1b3JEY6NpaX6MQgw5PHAcNYYJijSBFufo5po",
  "key30": "2UvtrqVeVcXfbi7CFE2XZqyjxyW2q6zqxhG33j3BTRikcD1yrcbXucm3Rb3Xxja5jsNZHs5JfoCfTJ1UqCAoDYTb",
  "key31": "5nSTDHs7yMg6tHcJvUvzPN22qiQaqP8ipjhv4z4xEeNK7qDxPWEhGXNuy7wdWHfCEFwmFU1GDdz8NfUjqLh9acs7",
  "key32": "5iavgZHmJwVTRvKKz4ziDyB282x3TVQVtRNxJPoAMYtHENhyhePqm4f5cdQvP1keNsodZ2JHYiYLWN9NA7KyQDp6",
  "key33": "s43kFmL67sqoHNpuVYuv4En1zCRLooucCBaP8LgQC9RB3FwXfcWHYAevFkXQwij6REwvt7C5NnD3wu3QR8L4Xoa",
  "key34": "3DfZfV9PyA9PP3CDZ37c1kwrAYUxCTadeyVXWpC4p9USGEJrsU3GxNXcJSVhEvhWjL2sE2mR4wMpW1jvAD4jiCYC",
  "key35": "2HW9MF1FmjkDkiw419AuYeiJGGvZXNjVHjv3ZTcKXPhvAC1VjtDzRWa1cyRZqGTDmpDQVceTzvSF5ePocKR3YyWN",
  "key36": "4zFdoBEJXrQ74fca1RNsiN7347GUNLuAM9qa7EsDkUdLj2TyGhb7mJRmM6BaQzeETDuv16nguePZZ6vs4Nh3pedw",
  "key37": "Mi6kWeXtqUSJLCEiFeSz75CdB9bwvKwmsWLwC1LV6FL6YHmzMbHq3JXPaEYcK1c8xb8UkkaP13rArLoquRVRKT6",
  "key38": "2QMKAXS3RKhhacMQABvQsMDf2H33GJRkakucxDXEy269cv7h57zXLVF4SwCSm5WMmVUrstM5L1Qg8CQj6X4uiukG",
  "key39": "3dKx4ixR63miMJ3DxrVVau223B8o3wx3ni7JfGAoeNNkfzFhTTQSkZFC7B9rtURcmEjYkvdAksXKsaHbgw9ZEhRC",
  "key40": "3Zz5jPy1wKZWMouetg2iYoTpvzCnjEY3b9Zazjru7omMq5RygtrgXyv9kaCF1PoMWGzP6szprsFKG1yj2TWLY8qe"
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
