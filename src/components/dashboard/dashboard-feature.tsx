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
    "Kc8nXTBYjshPLVt5irpMg9C1baNU1W9tjKdCnLRgyNqbdDFJ4A7V4jnTZSAvWuT7er54mZx36keHEkXVz3pFioR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MYgtGjSrAZNrMc2XLyPSTRJG3CCpDXBodwNDXkEsTQP1WTJJqcqnsgwyqGtRQXmGSvcxxNueFsTV5WyotZLZMe",
  "key1": "4CYFUq3xSXoXWEFR4hyV9im1xxLFrdpkrNY3KPgnvEFA4bocKALq5jFgGg4ebemE8kkVWz4J7pjYE4etVhZM9QCc",
  "key2": "kSrRq3XePUmAwWw138dERDraRbZtWJtPrYtNii5iyXKQUMu3eU8ViGVQLMKYHMnz3zWCCfMuA7i8W4DPCHo1BGg",
  "key3": "4QSuhp87ZH8Ar4eUN7bP6LJPzRnAaxuybXMfrMTTAdSaVKJRzXj7U98fMSYmu517u72HBhf4Qip3hVLE1oxnr5H8",
  "key4": "5vTjJkjyP77EiB1CN1RAsySp2JWY23v8wB1dcQf1yZGUSPryGDHLLTaZTAwYHmTtiLGtwMXkBZumF5gG5vCNaEyY",
  "key5": "bY3ghFoHyUFBq2ChuUR5Adud6Vs8XPi7rCp12rScZ7kEE8NzAqDyYK7Y9aXTj7jDqyyquWpRmpbCDxMvXVeKKfD",
  "key6": "4XcTbyyE4uCaVvqiE7JWBnBku8f9CtcUS328xCdwcnJbV3jJJbNoSJG3rwzsLsYdtrKXViEEhPfJKDaEAj2L8szP",
  "key7": "2q5mP9RgzHvn2jrYKwMcyF8kNK3ZDbHVXyihN3hXF3cT4XAYPnWxbTgLpsMaEJL5WfmBs8ZPTFGUf5hpdLxnF86F",
  "key8": "2Z1593PCRbtTPz2quK5Ac6piAWwmEc87S4eLurmmpUm2maC6g3HZrpeAuCq3jGUCFi1Y9zMGziZawT2PHTc5WhRt",
  "key9": "5h5oy55pgJBTytG8jZ5BEdwqdgsu2nsfSwRs1r99WXJFDS6jeSwVA9rTXJtwtX1HnqbDV4ssKYnSKwdm6W1wWwwR",
  "key10": "5a76Pz3dGkHUjMzzsTyXkSgNFoQbDhudXfbs28RpK6ujPmMP6rgJuZrpowNWcKtC31G6oDoSVaQJ4RMxXS2M1Cbb",
  "key11": "67JPoB3g3P5EqW59vKHadwryNyeHnB6Rjw2Qps2VhFhmnjS3hEbyjkgH6Fy1SnBaZxETPeszfK5KgJi9oTR8BCin",
  "key12": "2HNCDGHWT7xCpZXb5J5uZdvuUm6JrvKtnh8TjPRo3yUENYXgAPWDmQFqWbvCk32Qnq2xnzVbLyw4171jhcuUdNmq",
  "key13": "h6aKEg9TCMPKmeH5shaYokSBMmGoXHFTaP6HAXYYwe99ksnHQ9wpYgDdNtFKrSZ3vQUvB3RSa8wBhxjBy2xQN3V",
  "key14": "3vuenynChyc8iwsGJSj8yxD3GftL2a1SZzRwgjWKHoc6NYqqoAXwPUDRirw1bBmrjNtAv8vJMD6mqapPq7C6sB2d",
  "key15": "5RsFwJqfoqMnX3hacnghR4HBPFptPPQgMZ8EBwL676UXFYMspEL1AK7AKGzof8iiN84MCCbC8aJ8R95M46LfZf2o",
  "key16": "4eqnwNozqb63f4J1EYQSQaUjDszWDEfwoV5bypkfdF9AnXSGrXZKeE52WsMnrNjmRc3PmJ7TYVj1VH2s5MEbEPDL",
  "key17": "46z6DhctFRGpBsN5g27CyXthre7nv7GAdcpVD95es3maWwDysQCTpG8TkKu1QBkkTavcXfxw7LDcfNnr3TjiRi3f",
  "key18": "Y2RKmooxXv5CR48eEa4BssoNaY7JYRUjNmgJkim7ik6fp2ikG21kSC23Hs8WBsKWoasH8XZU1dNFNmx8ayPaFHs",
  "key19": "4zyt8tENCjfZtLggVg262875PDkHQmTpuZjgiG8jFqvgT5JFoaBgiTWmmg7oCGceBVLY7aYLQDgEAYcE4cyz7EpD",
  "key20": "3qP7KVwKFzUSHgzyTFFUG7TxwTRXnYN13UBiXHu31sYhCoQA8UryBAnqVbKsmgBw9b2Fudb3KAzhtnqphRRzm6Et",
  "key21": "2XhJ3CEKD6wyZRSwZLW25e3Y96615c5sbCA69vTHJQV7kEB2vHkRB8k1F4Gxn2CyetDngKzG9DyrDr6bfBHyZVoC",
  "key22": "55Sof43AvsUP8Xjf7FkqBGAmdeECAGo3nYLVawTgtoSkJcM5bokfwnWWputXkgDJNAgrVMbWpA4bmREKnPYvY3wm",
  "key23": "3fgbwREe3FC1FHbEMXko7wAVQ5wqarzYH44R8Aff3YVkw3VD5DMGBwxxxSbxSikFdjUF8AaUZMrBDpSN5p2HTr1x",
  "key24": "iKvHSFi7Kgfu35oNwHBJmAujyiojDTj9v4M4cmdz4NkgpU382ysQcyzELg4C7zgwHXR4qWthuKpnNwMirHDEpfD",
  "key25": "2BFZacmxkYuSXn2gycuMh4uBDiSkCh5dQ6cYbxgYjHJiGimJL5P9VNZnVku82yuRoAob6NgMJV6o8MW6qFCsx9Z",
  "key26": "3p1L4GZ5pkJkvfkF3SwNiddT1Qf1jBg3HcUUq2s23WUtByJxoM3bpZWa5LDVZMpcPbm3ZLZrx92Lcza1x3GLeoM8",
  "key27": "pvcRenVqt3h2Rquvz36yzcDBhP1V2x1WD6fdntHL152nkkdDWw5bser5CoTyfGubza8HZdfWeYQduVwAatKmKTb",
  "key28": "tDgHY5QjG358uM7rDRZZXHVkX9ityx4Zz5LJWyXL8gcDGekMNm5WA8os3trtb98cEEcFUQ8cWpypgZXo3RWqw4s",
  "key29": "3Q6Y4PNQzdztQZLLqe9E1P5mbtJUUj5MBjPnt7cyN7vcn8JfH1UeLyGLyDRaYriYNiXEF7fPUJcTkcTEDMntNDt5",
  "key30": "2B8XWbFic5LdbtpMkL3W1XftTrvTVTCBUvUjfxinCPQMhLwEQ2uaHBcjCFJ19ewS1WzGdL14a2eBEko56i9MQe4g",
  "key31": "5NV5uQFxxt5dquVK7P7qbiVRDSBkwxYP9yFn9h7kNVhnWBsn2TLfwGQX4jnRNi7ZVCe8jdAhX66ceDau1aRSEEWM",
  "key32": "4dSPJyvaSjnVK76uEbTxzkq7HhiSWRsZbR4nRSbTF2LF7rvM9YeMH2EEpebqirgZfHeCbzBcfpHL8LDhR5oyuyzT",
  "key33": "655iX1zsRFptjz3xGmAm3LpoyWSFusfM27VZY7zXDkTifxnXsSaC9RFsojSgmaVUonqiK7EBiPTrSPhtZY9zjS5K",
  "key34": "3Ac46BRj6AacCg8xXga7yFr4rPKwAtXP3Mt2RGVH2xK7JpibHaNptR5keKSdN6a1hh5GKieNeaG92Gcyx5bXkQf3",
  "key35": "STfe9mAQNLTwVrUAcKQcxRXH6XwHVygZN5FBFwQrn4i2gYFWcGPJhwv1PXcd7wdQvs6vF8ffSZdKw8MCNVoWngG",
  "key36": "xi4BFdEBCyVyW6V7sNyudZtJiuMFUrvgZuY9nbF3G4wRgJuBHL9JeSc9eaanYmWbeVhT6cnA5DHvcvW5qwnnE2p",
  "key37": "tzUqatvvygiTf4WNMM2dNdHmHPG2A3dtLUdEnHEEf58Nf5F8UrNC7whihkf94r83a878xte6uaDKZwLiMuWUKZD",
  "key38": "it8f57G1pudQEpaSZp4naTu3Pm1azta4PngSGc1JxsA8q7H2oP2S9Q2RwJVvorXfdgmjJKpgkeX7X6MCfKAcV1c",
  "key39": "veRWeXcNpvnid53Hp5TRri2Tmd9xW3QpGy7NkkKTDFgvDYXgZW8YiVjQ4Cbsy3NGAhHFEEbz5HTEYYT2JeeCp9W"
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
