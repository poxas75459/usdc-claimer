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
    "4trnH7QHKoWKDwpz6MfoeffSrs7XVAWwn4uWEaCtkz3dxWx4A3EjLTdYx6b2PTCzgv7cu18PAyJqpiuGbFrYsAti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQURPwmxV1pC5iHdSMRLcqw1mW9kkH4GL2EoPtojuDPMwDgGtHAa49jBXHyMpANgD8ozsEDJ8jhkgPuqadqboRf",
  "key1": "3E7v9GCFhMDFTwnHffhZB2fTxJ1WZogtMKP9dz1GExZD5BzQJ6LX84JNKWgms9ygnnRdeVVHv9JM2AHLVmvXH16K",
  "key2": "5TR7UscE1WR9quVzpT2fy3qKTce8jCtJf9HzLfdWmP3zPU34GT8Tz8WGY1k6TUVSVGaWJ87xDy2aVUTSrhT8Nb5k",
  "key3": "5HeaCwaJaEhzKveBg1JDvS51a6B4azzHPYX2iwNSgdcgDai8uY9yYXk7GtdGSmV44XLLANjdWEMkah3XGa5mR117",
  "key4": "2noqkAzUY17SCz2gLbVh21TsVRkJyXyv17bFYumHJRzWGaCgaUEzHamWBchfyngJbkTJGZzrWUqLrcqgzy1eoDsS",
  "key5": "2MagLzhuQ2miKXYQX4CgVjnkyQoL2qMxtYdetoS36EQc4m96PkKufxHz3BU86CRvPanJ3Cv7K1n4yYX4qMeU3nGk",
  "key6": "2n6DUzcuGNvEqaVGbzAwNDiJrPV8KZy9WqSqb9556G3PxBbs8bzRfoqxhc2SuY8U8baUVdeDcaRXY1AEcuBZ3HYK",
  "key7": "2i1p7LUqXasaP7JSB9TsFj5Yf7DSP8sqAL9bKd3wDN8hGqfAFtBVu32tjPipennzNsNsJwyd1RABkHD8Qx372Ehv",
  "key8": "534kgaSwvjBo7NJE7AZmVxG8hPZ5tsZcjv4QLEkit4zjfFNMSNhukwp3t9yxDUXFR25hRRcBtSnxS9B5FsQuVxzt",
  "key9": "4XJXPf4HJ78vuwMmfzYkgDDZ74T1sAbWq11HF1foj3ZErpbMjrNNWKzdbRMkM8djNc8mztbJJV4E3aBpQyz4TTA4",
  "key10": "HMSuq2okuVe9ab1GZPDUVFa8DUDiGKyRtQMqg8tAa6BMb9GV1yznfTLr9bUbbNRKX5ZWgRjnmPeyHZbvgyaumjz",
  "key11": "3B1mHt8XoKddXYi14R6fbckXSvLyckTCTQJ5jKTMZAgjC4JKnWaYQZ2nbvmt8pgJNvw3CvEb1dfTtskaR3CvzcPg",
  "key12": "SGyFircSJsY9D5VUzfhpWRqVtQmNN2DRT4oNDK1UCLLnx6u35RP64e3SRSB2fBkWFCTYxDPk8qqWJCaJHNEskHL",
  "key13": "tu3gQqmEaoi8Xm929BMLiuhDdByZmrxqqjeWrmMZzMF1NsEugXCQNwfwRTBk7bXgEUvQr6jWG4L6zwu5S8HUJPL",
  "key14": "3KdkUusugS1ri75JX4a4MAdxsRdoYuLDpksdh5SG43ey2u7rWaywQuFRU21Gn7ebsf8gjrPzLtG43cpZFt9yWy7W",
  "key15": "mACoJW77wX28eS8RSsQDZWhzRycRx2nraUeLbWNcQ8sJb8Z2MN1bY12Lt16wBdGhHcB8vycpNZ9vALFyHaEEu1T",
  "key16": "5qsVd8psiBNacmgJivUjhJUArSUDB27DoipaFVy5gNm7GLu9WiRegTqWyCCKQ6rSVhw4t3xz45RzbRMp64nrLR1T",
  "key17": "5sQW5pNEyLisCvSzcKJKLSWtYMPSHGxZdi5Eo62sT98WGmpDwgvR325Z3wXgcGGEzzPV1jskPFYuDKhvZKUfthRS",
  "key18": "4MLHywky771BxxkzfxF5sfJRXH5sZmE4cq6WrtE6RuVtyusB9JavXZPs41wZQZYx2xmr898CPxcu7HBMmfSN56ZS",
  "key19": "NdFXmC863MYcQsFaWH2ZCxB9PG48mf47htHPYubJ3BpqWHwx6uofSwCcLWqkG52DNSnHH4HUd22AiHMa3ZxTXAT",
  "key20": "5EBWYpqwJB3wzUi5S7s5xvNYzk1wt1vzUjy4kFYXh146dNC15tp4dqceUTrEneQzGwWB8MhYoFf9uvic7mY7Lc5A",
  "key21": "5QHmzmzCU3jhNXw8LLaRhU4VqfURaoLMmcVgVDXZLS75RkHyfQp6hi7GqWZihvs2zcQdArgetaCnSBkEjDAuJ3gp",
  "key22": "66V7k5CrswQQxphc1dxzSG6EXbi1MSZyMWpRaj4Gs5KYkD3ttzziyz83rRyFQwPaGBHPcyAQ5mhMVBADV67Dk1kk",
  "key23": "5yfocFsCRc7BFaG6oPDyu2QEdPR4aJwvMC259vs7eYphv1mHHYuufskyy9WGrdtteeGVPDrkDpYrMrFV7Wt73QHq",
  "key24": "3rtPcU8W2cXTgKkHhacBKYKMpqmerMyciTCHKxTA3NvEAuBEXkAFJo3t1wiL715neF2Hq4j1wUUD4ckPfEZuWNP7",
  "key25": "5YvP4B7u7kFRMHSXJ8Zut2rvZwDYTxmHCX9JdgqpmaLysHFGBCUab1jwBNV7dE6h7y3bXBAxafqwyvPtAgAQJonD",
  "key26": "cirYCjgnaJPu1gWmDxKi7mBWJBPTTFump8XP22B7UzXzpKef6LTVNpoqf3eLc4ncXu3Qs1pvD1x4zbnNpjRRs21",
  "key27": "2Sh1xHgMPjqV9J52HrUnyr1x8T7qZq2gqa8BVnu1BYd8XiKMAGQL9CZzq4X7Bo1KxfMRSUaQPttNpFhhzVPPdN2R",
  "key28": "1e4BBhQQsKdgsSQQePtFBDkDQpCwUw81qkurmw3eBMHJpnLqeY4pGLscCfEfrjj9u6j8ViKAMSgrGuoXdgNCK9C",
  "key29": "44WPtpYvD7vVHTSkCxochaZ1PfVnnWXWKyt1x2qazfNQHUhrnRrLDCzy22B4oSFzvpT5DoRt4ZCF8ebJQodqJkYn",
  "key30": "3UfWBdXQj3KiKdLVi5imk6ayHTJzCtSGgiz1ke2YxgoBuv9QKzGiBfWkgTxhwVUeSg4GMigJZdf6oxKMG47oaU6D",
  "key31": "QQZexaLRh3h1b5HE41WHMipzYm49DCBs5igEmbctBo2VqvcuQhgaXEvAJqS2yaWRQgZoSesXPkSWF7L1o7VLsoP",
  "key32": "5SK37AS5MfdzH5depdQjsNwBYzd9MJcsjygrk6JnKyKP3PLkfRrUosEkPUd9N62ieSijqS3ybzAj8MqaADVWCwyR",
  "key33": "B9fsYTM5vmK1WwSGiBg8D3TFvJktZtfXyzzcQkVzE8yBqBbF2kZ61TDPvT3YJd4gJjbkzNUp55kLUhjyEoKpTQ8",
  "key34": "7h1RL7hkHdjukjbGW2KAVUcCCaJ5btdxBZvnNJSgTWL543dZDFMejCvbNGgvtC1edu6p4QTkqoS61AEg9x1RAEh",
  "key35": "21uhh7ZwroJHaiNbsQLbQ539hFUAYWRtchuTvsc7RKwKJmVbo8dH39YvFUTtHZGhQeiHniWipeVAr55m4TrtE8po",
  "key36": "i3cQmk79vgrwAUd5cmDAh9ZEUpgw226CyJhLdPzmveNQsm58Y1W9ForbqvhWmbyJyKHQSbQS52RdBpGMc2MdT12",
  "key37": "jARNWoEKyHGtD9hbgebAh5Efk6a2p7ji42bES5rC5tLpuSrW5zdVE3GMXmzicwTytf811NNP4HAoNn4NKa7D6bG",
  "key38": "4JD2Er6v4mJCTtSxTuvFpEkD3DPA6vDnDqnrgLJAMqWnLEyo4BJk8XKEK9bxV3aXuqu4GyXWZBq5AjTbYW4jR2Tf"
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
