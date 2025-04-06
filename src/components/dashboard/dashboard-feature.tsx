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
    "KRPYHQPHf3VE4bSQZGDA4VGbH3NZkZhgiG5cR232XiS9Dx19GTVmYrQRi5XdeJvDV76V4AEBttFuXgyjWqjPVTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tm2BFW2LGjzk38BkMrGT6LutXw4DnLuKaPh37ETJi54qFvWVoaCKMobEb9t8xFaV9E8cFSEcdN4g7jBctQjXTpp",
  "key1": "4ocSmiYif4HnhxNSDdjUVyWVywXYpdCMWQfuwVZnBoDSG77tv3SBdMCrWPLWgqpeLMGEBb4ckh7oNHMjtut2Wqht",
  "key2": "4u8q2d6hPM9NDWKP2EJSfCmeYnPzPej1EaM6HLviZT6hftP3A9JVfxG1igYKrc2FwmcHRjHYJSdPCMp8parytXsJ",
  "key3": "jqqJQwEuPHyxJXUD47U7V6XehfePotemktZQdrz64RSvCLv4uXpcWaKs3d9SjVoZH4GDphXeaG3xWgM7Zzqf5vq",
  "key4": "wC4V6EhhJz3HiXopQsQgac98cXcr82KkBgcsNCxBDCNYgAyzvJFeDaXtt76nmiULb5rbqohnwe28MUvmz7ZL3dL",
  "key5": "3e2kgrxtzVYN2YpaSKunQhSQC67bnW9EHbrpjxFNs2GPL8HQBTSqjCqdLCXLQ1tW4WaiT129MVqLs863W5dRNAeK",
  "key6": "fH5He2AkgTEUGAXnyL8sTGNksLCc6ZtPYjdjK7P85ypJ21orAxX3tL35SB1cHotfDD41s1TScXDGYv8DBpER5Sz",
  "key7": "Qm8DNgHXChaZmvWkaXrQ4Dw26D5yT6N4iQKfRWqLCroBGbyugqMjWBMh9CoUnvgfcdf5yYyki3xRGvn4nPH7o7V",
  "key8": "4fEvyMbG6QJR9UgJeWtQdti8DuXUKb9kteuYapCf2jihB8tQirEemsxBSWtJN81NihUGZ3e1SLzFt5m3AY28ZGDL",
  "key9": "5wR5uz1oKxhxhmqU7R33vhHXBqNcvbbHFEpYmh1WSkdBtYNUvMPLAsr4DrdjiVbN1XTgQRoWpsmQf5YNQx8rE3h9",
  "key10": "23Dk2VNeeQK6H4wZMwWEecUmGBhxg2XwtZjEFmFEau9u37fwZpquxZN5r65NjmXT2tQfTufV3HqCeCK8bfezUsb3",
  "key11": "3Hyivo5ZumupaKab5C3qBUAYPWSxiRLsovmGJQCWHBncgeHK5gaHSvSJLBn8je9ZRXkiYRhGwbzEEKDg2cwNEsnE",
  "key12": "AvRAjtaAje5qjbvjXDXgYV1xGduqXfMtZ6W6NJFzN7ikzrzQe6UFuu4eMzDqjhon429QAGmVH4goJyu8wb8VPPv",
  "key13": "MN4sQxcSVYKrT3LPAzYHHDCSwNWoDufbpqb9zWQBGfqnWkE2WZJteAmQsPfE6FWhcuSwEXnmjFW1pcnWnyJffX5",
  "key14": "6637F2AU89pT3BLBtCZSoTFqz9fiUMXio3miU6wk9j5ddtndErq4hdSV7Xi2W9Vg46hdKfmsFShRxRAfjKKQqyA",
  "key15": "2EeKGAfTaNcwXjj6xeBsQYsJzs13R9yFbjYfvhboRnhwZFWoy2qX6xgfrButM2TyoKLJNMFsutxUU3HEn39brmZm",
  "key16": "4cGy5cd3gmFV2yac5kFfS9RrzDVyMXuYE8JceJEfmBh5QHdiG5pN8LYk8zrxz5tsZonWNAX51eD8jkQABbeyHDM1",
  "key17": "FPCJvNh1TQ9heHERqynoYJfU7c78Pa41Vj9RbxyCNm9GrqyRm4p5VH33A7TWb4qkjTDpaAa64QKFCkGm2nFBzor",
  "key18": "4tMmv6GFBip8r1Hp8GMYxipWqTCXpxTLeetv3wM2muPw9yRhEFNkvSE5PU5evUiEAEK2YCcQ7Kur8dtL7bErpsum",
  "key19": "2ADQs3pF8gLHMjt4AeZB3Z2sKoC9VM79Y2i6tVXuTYeqPCd4SgbdrbRBy4ti6zJQpx527YuoumTvCdLPoJx4uVQ7",
  "key20": "2iwUctedabT8wCjAtYuedRRUsm5hPRHLhvV251bxQzZJgEPvpyHetKcnUr7jJcZHS8Z3sQDhW8tBF7QFqgW8w3Qr",
  "key21": "2g1U49syBEMqRLmPQ1sWKKWuWUMQiwJr95MTC6GVt1AerPU4MgZq2VyAiukwHVEvG3zgi6xYAXyuAg2NvwZvXSVQ",
  "key22": "mUW2vkPX7mGRtw6CSB7LaWWPnC3K5sRKRYaED43Q5ky2krQ3vfsfmP2v95wGMit1YHsMD6GNkUEN32wpkVeqVkN",
  "key23": "2E1ahFqWPDdnT1FYhAKcLRrCZLegpHxfdqbDGinQfo8Dh2hErALxPsxu2wG5KjkZaDo4cwqd2jRgyupSwvDBC9ua",
  "key24": "4XgQxGrtKg6yBKDNo7Yjhox6o9x4TQmcL2fisyWu1D9zxJkfP5BNTpqrwgAxvNEZRA26pVByQJA5V4D4Yu3nGmor",
  "key25": "3epUYfWuBhnTLChXvWqBeSf1m1Ftx39jySZqm5g7qjsovrrJL8rUUoNfwNkGukzme5JbAgoSoXxt6VPxZY5obD4Q",
  "key26": "4Q6jGnVGRZvEYeaagCfuAJ1sybStHJBJYDCGNxHTpt1yuk3nBSYJUBYHhkeq9qtwUePbR4JCydff3VD6YoCajhuv",
  "key27": "3NVR4vnyFzwHBpTTSBwM2tW2EnmCgpBJBfG9fWXyk7vygVn88N29vskqFzzrNKQckQaM6BwgQD2XzQtmyuGjUSSH",
  "key28": "5vYRPd2kttRyvUNxiTKCWGzcUPtBx42NDUgMK7X2kirgxDtyQgi5726GPjXrVaq7o73HDqc9A8mjBp6ttpBNftkY",
  "key29": "2ek1zeWcL6Qf1N3QffkGkiTmDTK5eHkh1ctpPjEZGhfCs6N7Gs24SQejmzGXZjVvicX8VxV4CvLwFJtXZdXizZa5",
  "key30": "5RcbKWubdQywzr4pMbYYyDcYTv4vgkw7ubzVUTzrcEN1s2ruvGvLPe1yQTAnfz9PbFW6Z7GV8KmEoyiruMKgUSw5",
  "key31": "5viGNvvqxJ6ZUnVVca58Y4FzDdLiAzgNoT1tSuR1bCURhJve2GXXTnVxKhqfBnzGuCHi7pH3R9AqPoniExmK8ZdW",
  "key32": "5gMQT6QjhKdBxMByeq3TgWCqs1bb5RvBhmiTWwSMzBchF6x3dAk1WFMGYBZ7ph2gnZwGJh8fDWKR4Jh2Sgcw4SzJ",
  "key33": "289PrNoHiU4JtVLGm8shWdbbDPZSTiTKpb8WJJNGwLnx6hJ1DaxA8x9jGn3DqLzReFuUZ5b1VaUEFcbpuojhrR4p",
  "key34": "5s6NF275GxeSR1yeDpMmfTNYGYMcwrFxZgfFj6jMW9YEyGeYR6AtvNHxzpm8HusYgeL36LV1QCHfsTYhCd9P5QU5",
  "key35": "mUV2zYUX3eBau7T1mq3tnmv6UiAjLVxwgmqdoyiCwPWGnsv3qm3MKv7yUNrnS9DUS21wEouXgzYxG2THgeT21gz",
  "key36": "5qLbBDFAnhcEHezzpyz1AeikmMydCuBkNUv4ESJAPaBwhRZz2VMbt4LBZPPUyQL4H2L2R6eZB8VPaZXXQXywNb33",
  "key37": "5p4rDXLodXD6s5U5d3LvqCyLb57x1YK7HjbYNtnwep54DpVocrXrmSvU3xdzvFUepak8wbK88gQicpXEY1p1yt9m",
  "key38": "4EpK14NdArDx3PiNPKPjD37oYrBpHiFxJuqMGvyDgfTZEYV6uZCb9GRpjLnhCks2sKmvU8NQ6tQ7vusKQenonVET"
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
