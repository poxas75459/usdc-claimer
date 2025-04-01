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
    "4BenYHcWndpu3KdqYoKjh8udF3NDDPCY9BCEPgvtBXnZx8EjBd66CLj9hrbz62uvNK4DHcHW7Dv9mtLDKBD6Bart"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hk161V7BsGjVYSSNubkLgphF6SAtFGWdkJVMC29JT8LdLSpQdnuALm33P5aDosaSXBdNqeBC9iVBUX5yjGHaXD3",
  "key1": "2uUckJ6WgUqmi12pWCR2TrXoYXYnUGcFKuWxtaGDjpXDotEHupDCkmaqGsfv1wEDmBNc3A3dRT2yKydBreVihN2b",
  "key2": "5z69vcCRnoGMmYuRhDACsJd7vBsaPcSxG5XfC8iyymjWqevBvd5gMuEgRAZogZ9u7Vu77JawZPHG9hazjaKuDewW",
  "key3": "2T8n2AJSZ2UqC77mRzEDsofAC3Cvf7h8AfFaKh9oA5t1JJsuBGaFfDH9mFAZLunsQMpar3MU36QGtrWqujm381UG",
  "key4": "4Y5DHjhfviA5zfw7amu81dmErYmnM6aqXwh1Vpium19Dbs45CXDigUrVGDDLBVC1AgyU9nFwfowm3wh93cfcoW7y",
  "key5": "44jRGnBPfsn6eEErMmjFX1nymYfLdczdmMn1C4HKG2yE6S1Wb3CVGy7kFNah5XWb4V2KDnCQWHd46bDdp4KQFRYY",
  "key6": "4EPKyr5ifJgJA4rnFrkmkrpCLwaRwkDjasidZdYnCQPF4m9MKd35pHVxqdP6SBxUwKa3ARoTxFY65Sp5j3Nq8vHA",
  "key7": "213P9PVVrS5jEa5TcdqVq9ro33pZ3b22vs7ELctLayYXnVdii3kwGvDP7gCNpdkWQQ721Gxb4TaRPoz1HVbY58Lh",
  "key8": "2fZDPpKnfaS879aT2KdD1HeurjtKD3YGfjTuw7ckR7LX7WkSb6xz33jXpCny2z7qfpRzGuTkyvJEpiP1evnDZmZh",
  "key9": "5RbJFtembb5XAB6yHiaJrwaGpWtMsj5J3ZcXoBQecG8AGhZui6Vv5WPwLFDn9tT3Z8KmSr3fU79ruUopEn1b5wpR",
  "key10": "5V46YX3snQLJYqZMbBkB6nJfnz3axTuNBcfbouJPucz8SbzoHaKsqN5PmpXyzdyh32tPZTX1DssPdAoDjxwxYbJg",
  "key11": "KLnQfgrTDBdCtNKEfaLskiGrkhi3Dn5KNH9Xp4DJXzK3psDP2fcbXFpvpa3MJoicc6aQukvu68zoJbS7odooJ14",
  "key12": "4sfbqj48MpQjHMV9D5iCNLwDVuxtnwC3T8cMfopMcXkQkJrJhpdhwvdnjFWaCNDzgUCsFRYr6oiLutrKWiNhTvoo",
  "key13": "2cjJ5msFD4VsHzEjuDXgAKkRS4VzNE49uyHMnMymYUFKejb7Cuit8okJuPyHYQnYZKvndsvY7GdC19stAyTd7AFr",
  "key14": "q37EAGbfW17TBosuTLkwfJToae9hmq2RizMDTD9PAferWyZobJndQ2tvcHuNYJujLocseTJrK6KW6sVPP4k4L4j",
  "key15": "3wNdQx3hcqTD1WWEPor7oAzELYqjXskvhhM11hYA5r5dANMmSGkVwAWJUb5yZrMaTtjzeeN3PZXJsE6vVm38cYM",
  "key16": "2J9xmuUfRtFAi8fx4co4V8m961gG4jnPpDKxRGkA2u1idSZm3spUU8MoZTYbZuAaoY3akPiBQS1oGUzfkpsiHEkc",
  "key17": "EjT4pedos7i2sxPg74xpxLXuEBP9Vq6Mpn9payRFScATNontTJQCY9w3J7gxjWLtARzaTV91VZMTTqndKJzanhp",
  "key18": "4daYd7t7XKUeNVp4gW9s4ze24jqtfh8hmmjUKCnEzc9gKfNUuzMvwKsDJxuT9H9jwhmXU5KWt377h2QgH9r2tbYV",
  "key19": "5ZG73S4B39zPCCvn2nrpcrjapvN2E7U3kRhf7FKqTw7dRBqDdXUVvJTuBMnD71qwTeYEjodMKimjwPHywGboseQS",
  "key20": "4qak27L6ZxraiJoPQj5gTpyRHhGT6MUd6crkb2LRrKsjvKMGD9WAkLhyzknCAgEdmPrBGykLPQYPktPA9UNQbHgN",
  "key21": "4v5a2UQcA1rENejzccYUaKeBGz5LSF8rDFWEA7WzPxa5jxP42WuXNT17KVYEHFhGMtUvxsb5n79c2bCeaAh3VgTU",
  "key22": "5MURjLGXQ9138bLANzeiioz65fvYYQ8NR7WQFRz96AP2oWMGCoTSNBiF3yZCDkWJPaSzww3nZA5Y73kuDaFiGAue",
  "key23": "2UjKHKvZ2uPEtMjZRbcFBjcRFaZqr3e6LSneB5BHL7tdwkxYBWAcDxqYPDLd8enHxv2hBqtBygYrKR45yKoFU3hU",
  "key24": "3W5LMs1KwAopmWexa4DHz7GNr74VQZK2BAG1ze76aRgmFCbBZqNWmSpEz4WZzejR2qhaxBb4sskc1ou7mhqnwFZY",
  "key25": "45A55QHS4tKkXErmc91STfNGuuRi5bieivvQJykbbVLn7nnzFXJPkUk1pzrMWtSLAuiwx4o2UEisVwDhxaqviv4E",
  "key26": "N9QtaDRKddFrfNrdSZQyfFz2S6D7BqH6TyrMEPucx5T45Xc2BmK1hJY8m8VGQ5vVp1wCVswPAWhwEWVaR9xa6nc",
  "key27": "51sBpsvyKuMvBNNYDvWJSj2qfC6QU1uAr1PWQ9tVhJr9qM4pf4pAUYC42qLDepw7kMq49wzPtuyZQeXe4vV4ZePK",
  "key28": "2hs24tWLwAEXSgoUbBosrWvqEZVjMzfXnZ3iThLY5ndKW5PsLFXiYr8zcLzLiyX2dzXddbnFXQnax7btdG8T5efZ",
  "key29": "TtzpmZq4RnnGnt6uepsi6WZMnfhxirymThKVpXKJ3cuSV5KyxbiXNBGc4mMvfgrz2usXrtWwybVjQH7nXLhwU1d",
  "key30": "5djTPX9eSamKjsANpY2nt6xvTDgZc9zA9FDyjZiLXycQR4rn4F1SEUQuW3Q5YbrroNT976KpxukCxb7ros7JBto",
  "key31": "2qBdNMGFJujgMrYxdvujXCMGrq6xa5ReMGSE2Mu8jJxF1ySkGsTphA1M4R2px5yihx4LfubMy7LAo8iwsw7EBuSq",
  "key32": "5pyGuxvma8TaxFCzuKd8LmBB2HCFLPLhyCT859oX1YabX73qzXy5tZYcKKvVUy74V5jFBSFptz8LQEniBBx1chms",
  "key33": "Vnq2C1DbKK1FUp9q6J59TepfWunu8zcxsG3LFnEEgkb4f9CiHPtV3Mrggr7eivgbpNtbbUznaRaKrj175RLMNP3",
  "key34": "5nshCJTDbgnYWAh752LiVCQbQ6Jy2WaY6sA7S94MwyA3XgDDMuFGWk8zZAoh6V4sZYjixfTKA2W4ZgYCfufVy4KR",
  "key35": "5QxnX1JTXLjnk2qxDW6gk75d8uNcfLaHK3tgMhXp9B4Qi4ZQGrV2aR3KSQnuN2FubvF3m5AtteFAwNTsiqXBCewu",
  "key36": "4HTc5JaRH5ogkAquTPDJRd7zfB67YFsfuRv8Ev81HJQwFjNRhGePsLtSQWPJNAntdKrojuRSVisVd4CKecsY6odr",
  "key37": "5fMDrSk5q8kAvLARAP9m5qaUeMiTg8VVJ6KLQzP9Zieig6b6zSeSRKnfLcEMb9kibjiprWAYtjAdVjeLCXYFnojt",
  "key38": "3XroHnwy93QoB7VzPBC44HFaWpuuq1SyfchLDX3nrCuYzaEeMjepmnmdigPMmePv9Sqto99qnc7Kv6L9c24H182G",
  "key39": "4swxRH3wQh5uKPmVGktMUQoh75tfQXFVweAdPXyJTQJzuo9KzVHRNT1eSXt2Gp2ikipiMEMJ164skGtCLh8fZfeb",
  "key40": "3k15Wz74qmauFEYxAgxYHGw15LGQfBX3dFddiDyQ8djLTunzeoS5K96nkCw59G9gXao11qWEac5N7ej2nBvDGKcx"
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
