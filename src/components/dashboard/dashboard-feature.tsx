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
    "5uKnewSbbF39w4shJFyz6Q9rwRKqarLicnhq14C6kMi7tYTq4ReSbmFvC3zs6ApTPyVDhopBRqCZfSfb6aA4Qdu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mBbotYYhD7Szo6AHEC6jsM712oQotXR4BsQ917fDGaTBE8KToCE3jrAyjkkWu96uGd7DQS6yChCvuivKJGJgKY",
  "key1": "24hrsHHGFHb3SdeZg6bRW71umX3TScdP1fyEwtg5B9zFAiuY7aEMF1AVWZs1M7T5g6rP2yfUYBQsHQt11Z96MndU",
  "key2": "5HeenxC1awfXL5xbtQaNxa5paphAFoL9Nxwm8Bxt8CN9XKKXEkBczJHFTmCwTbK361QMx4SaPFgurWwMZRK5bF1w",
  "key3": "5M7rZ2aE4m2ChjYPvZXUg8kcYDfimcR5AD5QuvCCNFG9YKTDAEc51h4FX6WxVknMoBz1r8jHtD8BUKJuUBPhY42T",
  "key4": "7mXULsJYL9Rv12wVpR5W3s2LH8uHm9gDohdxyLPzXwbT3askBd3WgUJ4o91YyvjVwToTFyuzz3fibB4wsTHbyNA",
  "key5": "5rWjwJxsuVZUkiKeNoewKkrNDAhRNr2Z3jEX2NdCrDxUvMNPqQsV69dth4PchkPYMBHuiGaeXp8TFWJkwwjLu8n",
  "key6": "QMs4j4M5PX4FMbPHiXGBRksC6KroLmywhaPL4qR8bVFscoMAnYrVu7dg8nU8i34LvspD5gsgMgizSCeiyuaqUiM",
  "key7": "3CnmJb5qRYjS9dwgSLJiTo5EgC63PSM8GXMqzpZ6MBtLfYDjqdV3yqkN8VLnYswWq488WizZoEVeNVbBakRAArts",
  "key8": "3VjPYiDXc13iWChwoxQzLTpCvSockSx9saxAvbvuhgoGBgLReYdUAviXLaifZnZBvS72CnZrW9TFaAwKZajdfzj4",
  "key9": "BWxaQ8rBFMADZytssCHWpggopM9a4yVafZw64eAy25RQKhi2vfTztkS7YGjg1qAJyg4CBDeV3AeogpeSEqa18f7",
  "key10": "WjaiaTL45sDUeV4961fTJYoQo6fZtJfB1xVgSe13GQFQW3fqZn6ud6PjhbkJvZAGa3qdpvps26nNs9S4kYfFkt2",
  "key11": "3YuhdCbFTGZKPBnzsfNGf7T1YQ3SHZseuWTka8BKGLtBpfnncTJMqdk3MUUiExsBpcbRA2XruYUUqeeh2xcpVUEX",
  "key12": "xeWYMwfD2tXXAAj1XTjGWCdquzpX7CJAenCRNuEUBFroFk8aRftRbRBseJUE3nhxoFFjZmgXkuyRFQ3Sohzfujb",
  "key13": "3NznChuFN3wQa3m5AJgZ12tBUuiwAXPgzuaoPxrWRV7NiYLdT6LGu7srsLosjgz7kq8C3QH6oUGCkqPETddAPoNn",
  "key14": "64x5gG8bdR1haMqGC5p3aVn4LZAy75JE7349qR5nQwscbHTwB6XmxhFEepbaSdPTLedhAoijrzQQezRfFBz2y4aa",
  "key15": "3SutpJ52g9pGzqS9ja3A6srTHrh41xwnjg5Yjis9LP7RMCgeaCRJGCjamAuND2a4KLL8mjzbg3Ptv43hJZzBf8f6",
  "key16": "jL7RfkyiUgqQxku21KzEenZCsVvoEVYqGk7HkznpzQW28WrzLwMy9cqNsvxXGKDDvhkhcRcvygYyuTk1j4NVZXP",
  "key17": "4mRuxbLH5fce224NBNZw3xGW27HM65YfQYiubXHpn2XLBS5TQNtGkbRUTiWkAXoNe3vBTyJZuqTe3L8tLMqAAHya",
  "key18": "3TrNeVzs2sQ4JPuVxWGuKKJc9UBhLT25sQwVTAAw2Mim53iSKbybpntho5MihytUgs9MsbeRXQSEt9PMGiWbKeGS",
  "key19": "2ibEvKUgkeYZC72GQ57bEfFSVeHioy6eDwpGPXa24rRE54bK61oBRCAdGZoxSkcL6YuditkofqLshtPE5gCEiJqS",
  "key20": "52wz3L3vGMrH4pbXGvcpWFNK2gTJ1AEH4i8gMFBcAJi8sLiccSWY7P2W136uEoUVFxqVycnnGvjmtcsWmxR5kovs",
  "key21": "5VMq9P2g3qygeUZ9avZ8ixyyeuAV7fKRhjd6RqaFwPAKtm2T3SMWbKqme7Cmg1Vf1M8Tq7nrwwDVNyWmix6HUe74",
  "key22": "4vWvgwN8TGW94z9Mm48gKYPcKfZifUMx27FuwTvbZDZwByyqy2Mfc8BHb2XinMhyXscbY6x2K49QTTngbzSqVt2e",
  "key23": "5Uax9NULRPLuUBMz5N6AiejkwTBQU6XWGfqXm19Mbqk5Ba5LtjagC6cgM31vX8tbC6McA1Vn9i6J3MpVNJY514sc",
  "key24": "2KKBVtwZ35jza8A3nGBgtKQDHi8FnN6UNhM9GuSvdFAMM6XY4Sai5AUa8eisS4XvRrsej7CSdYZY1d7rxwfxCVjX",
  "key25": "3fRzBznnuuacoP6QCc9jZGi8P6pLNb5B7FLn7vpTRkUyzrLTWcKx9HKdP3uQbxUrqbeQcMjrH2ue4XNRVHKFFNfL",
  "key26": "34LbT8Chxo8xqDY4D5gXh7LVJ9CxgaFnKYSGNLNa6r1QfcLu1spnh9KD45ChLuQFZaZCKz38Q7fUnEa2upLYmKZC",
  "key27": "5p8T8wEVjfwoQVVFR9U5GJ1hEMRXUXQc47dM8CEMaWFBuGy7TAshPfSSh8Ndt4Jo52Hde2dxjNHHTj7xLXE3YrYy",
  "key28": "hhxtdTH8C58GtpeiKVoBPX1su1sTVNAvRTJEJLdEFZfTnLeYqg2Mx45AKv5gWZLQoW1tUsYT26ejVGChcMJs3xW",
  "key29": "5HjsLVMFQGYeCB5E13JusM8a7uiMdn2BoiX8hykgLamawV67zzCRP1YuPpor5PnghpjJbCRzj56P4mW34Z8H8yn8",
  "key30": "58gX2xgUfa6U7ofP8XN1gkida5eLg9e84PGMiVbeCoHzjEv3cLwsufcrZA3z4UPsn9PUs1X2SQCkvi5dUfW6nAsk",
  "key31": "6719YCWKufVToGacgAzExwBAq78yhnLNFCn6gpTfxa8AzLd6viEyhVspEHGAo9tFBtE69HLFn7hWJqhoRxfVmq3y",
  "key32": "3aRFcVUWuNYrNeEUm9S7Cb63ihuTEgHJhGbwk54UKEhsQk5ctKUx8iq8fHyemLAuXn5AAD7UWFerWer98zGx1eXG",
  "key33": "2sNwpcHz9fvCAp2z6w6tjw4LQ7nvhmQ9bXcDgcE7VTDfcnVmABim6Ktg8Kjqb1ie6LKfczvKpJC5xwRTYnXqnxnv",
  "key34": "3XCHAZzkiRnX4VQzLXScfPbUPW3GdnbfqRS2gN9aDpZ9JWsRDKPttgRfqyPQQGbuBph9ziA67oF7o6JYDFT1w1dG",
  "key35": "XmbVu5bwvGoyziHLzq8gEVMYURYDVChS32GhSCobCFL1zZhmRVxTPixTGZoao3kCj8FcupRDPvXAj5dMpp5P7mp",
  "key36": "5xC9ttsgtrbfPS5pjWafWN184XF2k7DcgH9FCuKcmLfGBATLeqRTPH9eJZZUt1nWUvurvApGDZZUBM4EbGwXoMiq",
  "key37": "2oAV3vMKRaTH728vZtLZu5RUxvKfQeSapz9j5Hjhg1bAsBBKxeDJhAYLS9qwU8WQUdntUC3iGCrbLNL4c2aFXgaT",
  "key38": "2PVcNPpsMSx9fgmMoV3JkBEaf22JgjycMMyxh4TTypcdrspuVm7wqwVcmuT8GKUShLTWRv9AeZR2SgtaGcWjxa3o",
  "key39": "nzi5AyjDsUAJQJRsHancFbNQ95yfseGTyfUAMkTJPwk6Q4LAAec3kDwRq6ipKnK7HzhiwdDv68eyf2D98jkHoHK",
  "key40": "5PjHRjb43HKSXxcP8gi8NCzjQqaoSTNQBXwKKr3F85Qkzx67ZRZXq4wSecGf4VNsK1EViDxupcyk2JdFKwCbz7n9",
  "key41": "duA7ewcNt6FMLwL8hVhrT7myp7yTE5Vn6DEV8MuXk4bpLitcsTnAtaM7uGPYpdH5vudSm3aknWfnHXF4JSqN8Lv"
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
