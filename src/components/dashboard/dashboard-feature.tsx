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
    "5fYpVRosRfHaJUxtf2dBrvPLkwTTm6hKoSaaCkEFqRivdt1CoTdpsxhMK2APXDZ1s6pkyNyCBE3XoJSZh2bm1CPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxzcZ8PzwQU5BSFQLA36QAt816TUht3wMWDZc5aZLFT5W8UNKZDUweTPa8ATXFawHUTnA8eLo9vmJLcthrY1V5",
  "key1": "3PLtYc6Bn8SgSzDhF2ryq8jcccDespKeMTa5pMPs1pmaSbSL6DrkDTNxRZozyE881dywrSgzLD7FfibqJiPSLAG2",
  "key2": "2wZtxVsvV3f5DZKF3nuyGWrjrRur4hynbZAr815eejzF8YBMrcR4He19i55xfVuTjMjFwoMiocGHwfuJHvZA46jx",
  "key3": "4khnk83YR6T7N3qhD9rVrvJUdF78u3RQm1jLiYksaPs2T6XHftCkM2L5b1sdutrqYi7RPi8ACe6bXVgTZMdUbqA6",
  "key4": "2Nmqx3LyAGoRSvkRSpSuHorfuMWXTr7pNrtCtcVXjbHsiiQFBhyKDFxtv52ZvrW6wkwDCNPc6i4h3HHn1ghJzPSx",
  "key5": "57ANKKA4JJi8chkkVqhJEmqnqKNJqRisK1GD7a5WjkBJR65MWkvU8pgn6h1xWcuyZNo7Uq5PUdGwFTiPpCAUYUr4",
  "key6": "212HMouXxjj52C8sE5R9MwPjfCkMiJRxcxTjRmKzaZsea6qoCqnZH22DTRwMuTjDVHAFty59Bin979nTC2dNPHsf",
  "key7": "4HTcyV4fLFcXtu3qRheSoRvDhFzCaMPF8RDymoAKrAo62W6cJt8e8sAkE9N1LqT4ht41sY3id5dU26n8HobfEr98",
  "key8": "4uptCn5PbMbs2cR5mfUrnA3RZ27KBdzEBVLRcTzBcNy8xZM4Y9sVcfBNVHC6ysyfiPEwXDjRKUXnhxNxRFa31xDa",
  "key9": "3hsh3T6bXMmhUf5MqDPPB7Y7ip79TCKxj8Z5U6h2NwoXVNYkKGVyiva9yojZdVArh4eDZ7yPCwMoQBdfT4XtrAzo",
  "key10": "22qxfzNH5t6tAMraw7zaLc7faykZ1PzAKH1vn29wUaNN2AAcBtnKvdsmFEEJZEL299pikPErrtVvNq2E2P75Lw8R",
  "key11": "3abcfBaTg71AsYbW7qivokBVYQheDb8xXgeX4qmLVoCFGwDEToQPqK6dkx92p9ju5nMryewBShzFMB9j8pZ4Mdqc",
  "key12": "CrhwMLZ9hafQytNTpHnrUyDa85hToLgmeKQbLXYotUkRsuHZbX4YKRs2ymZtgJGPNMLuz5T7J7WNYqZJYFmpPu9",
  "key13": "2HwMz4jeQFPUzLFJDYkQTP2JZMiBwcfdWK8cpC6py9D1QJSVSWmeoeNCfa9du8n7r4uxHC6BjvLM2x8XBuHTfhvp",
  "key14": "67JBYx8VnrZBMBxKzxNYEMh48moZ77v8Pds755epucGYcjbAcAm7MQsQcqjk4Nzrt8Pkvae2cfqDE7CmgyZSPTxr",
  "key15": "3HBDxJSXuRULvy7Q7HF3tj27MSuZo935gtEXpNC1UTzmAVxGS4A6y3yEHd7WKnBBNVqQJBvsfLXoFp8mNUdRPtuH",
  "key16": "3EcBZ3t7odfJfAZowKBpnpUNAB6avgGbLzVd3sRYx7VQouPrqx6VnGo4fa6GBJQapwer89zYGTWVpPZ56DLYFdYt",
  "key17": "4obvy4AcbkCR9zTHyhWEutGYbaTFeNwiRx4XxN6Jx889cr2XBzAtiVYzKxurvTQFDk1pHBox1WEo87x7beVNdRiZ",
  "key18": "242JSSfEWD71AbVTkC71nxSDX2BKGKSQiCK5BsMNzEZpHUSoLVR3jg7mEYZ2zsJteF8hQ8fVS5yZaLnZECc7U9tf",
  "key19": "31yvwuRRr7dEwTSnC81p1B7Gb7B68uNihCvLNg68gtuyKr5SFxYMLocsiRz3ezsymqPHJYGtnpNmeWx8wQMfn41c",
  "key20": "3Q7PEp1DZb5H8tGiHdTirfasychrYAvPVfPeD9Y2G5wY2pcCZTBBnsV2j8dmYJ931nieh9ffLqHdFm3m2Kukw71d",
  "key21": "4xgsZjmtEcysisBvu6c5ZEiuKvPogsR4ajsRhXLasWrxmq9kiAMNTPd625MFTaVFyw6i3quRAJACRvUzLqdnZxix",
  "key22": "kNbeSaSvfCwDLQHaXH737QgEJYDdbV1AT2yFLBEjNx7Mj9aDqT8MZQoX6hkhzyhffvYN7LKaZp3siQ9D1Mwf9zs",
  "key23": "n3QWrX34LzJqimQuy2UYjFKB3fAtCo2bEG5oki28eudKNcuvJD3pt1EfStom3VVpKqEi84MLjr1j2VLD6Z2DvkA",
  "key24": "2pC8RG5iqDYm9SJLRzrsQiH6g1Wd1cgMJujrPpG6TRfWB2anRi2QgrVB8RYYEgEuzhzfzc1ej6xoPhG8BmECnvH2",
  "key25": "4mNz9fQ5QD9Jjc6YvbuDipssiXXrK76MoesUqTyrNymW9Mgi4FMGaFoAUQ5fxsZTXtq3amJJi4uH9uhBk2LLC5PZ",
  "key26": "3xTYXmJD3RWoDK9MYSvSmYRU2FjcLC8kS32Qy1qeMFq2MqWyAFVo6XiZo4xR13hP1s5qnvYAMqyjqMt99XbSWa7u",
  "key27": "3TX3UvLtL4PgPh4yXN3t14jza1DWMWQLZRTibaJuZbzVzcP7LyfXbxvs7jwgj43Qw5yquomeuCJeBQYzz5aLepfG",
  "key28": "2XxdcvvKyw8jt4rNkX5qzh5Mp2jiVSTKGnSBSMnt8c1cZ6WnsXPDDsSBokPGuHBgeHrb1uhhENvx8LGXYFXmedpY",
  "key29": "3qBwgbtQYPi7uPMkQqYNm95P1GDzEym9bKAwhjDnsTkjFgeFyoM2oDj3UKSJQ75iYpGbxVudj5cpQAvYtjjdrWn1",
  "key30": "2FLMCmFfTQWDSTZnUG6jP2xfzSfLxLntdFWq6c1j6hK2j5SFxyzvBoH4B8CfUFL1V9RU8cSwPWpVjRdx3NMDa4jD",
  "key31": "5tVqKmmTtrYvN3K1vNgUmjFhpU6EcACRHn8XPZhQkjguR7Qq6dRjCDvoCueZT29hcgGF1nyKd5g7DrFXhacQ3geq",
  "key32": "2ADPDFdxFmJVKREA7ya3tDL4aVwkTnbLaXttxfkCnpLKSUypx4x5DUjmEQjHnengHpn2ApLfaS5oUoLfYN1Fo9S5",
  "key33": "63A9s2KyopwGKiS919yA1yxmMEtSM4N9KYirJGhdK9W7RCjEgWsRaFxZVbY9yNPs8soLM767hTYwc95v19JGHCJK",
  "key34": "5Q8a9ckzQ91GCJi4Ut8USuN8jFY2SLCnSBgpUw4J3dQKTYrKaRm8K8BFGRth3dTcdBZZgnZka5Hd2wqvCbDwzjt4",
  "key35": "27QViFSryGPLoo7SJpQLmdwpPAUrdpw9xG3mNNHRNHYqkSyNzHSucyMV82S7sZfugCtAn35ogNGFSbC7RvneUTbm",
  "key36": "2Lm7A7mqhoqRJV1r5JMHHFSWSzZBcRD2PXch1L1SpWM4GhcYnVjBemhAnnVwi93BpWRXVrJMXs8p7CBQJeYwGXVh",
  "key37": "qZFPwTu5yyd5RS1b2dNK5LEY9yzvi4BdmPhLjosfN1zBPQUgQMBQ4uzeJr3KWg5ntFV1YsUt6mgHknvERKdrSbL",
  "key38": "RjVoKjgSneytnua5jZZZubSUnV7PqB5y3CcYgQxEC8j3JntoV8ztWPGX9ooz43tBKa3n8L4izaMDCVKa1ZrtYBw",
  "key39": "41FUgwjTkXqmMwWnfCmRhVw97h3RYSMHhoYhA7DH14xFuZM3hBPekpUaKCyuQAMcnJSWcxftgQRnaKo6X1FfpPLS",
  "key40": "3e3kjLZXAPGGMPaJrFEKfUeNio9qih6TBwAhJ9DYUwkSvYhXqvmGR42d933NdkTSPG6SdWLCX6XUKVq9XRpg5fqa",
  "key41": "5XmTwFo12j1EkoYyqgJae1sgPJgmKdS7XTnLGBKxNWckvbADTLGaWj2mS1GjsSWfuSoCBvJL7KsMEiz9HQmcFFuG",
  "key42": "3omrozGXBWoJaFXRW9duPkBRjv3RCHba1Qo5QPPcDS4ckcegMU34DqxMMgVD5mAb1UvSTNcdoen2pjKbuxcJXpi7",
  "key43": "HNjefiLS414erBZ1UkVx7912b62rSQHE76ozD9XCi6KrspQjQVPs68GY2EsN7LGUqKqADUqh1gvxAeYvKFAXUYy",
  "key44": "4ymdaEmxyvyvRUFVSxFhBtaep1h3vB3rKXAs53snXUiFDUaSHf7SW3JUEZP7fV6icbFd6m5iUbbMXMggxBPrfVYu",
  "key45": "2sMVtoitNrgtUykks8Fa92PsQohTqt1jM3fcusoc9DseZqNoD9rSoTBdF89KrHqpquXjWh7E7P8eACuahfQgNJLo",
  "key46": "36YJMrZW1QEyWkDLwsvyk7VZGFaAkxSbQYeBN5xxX1XgwaWRd1gdKXTYhaiiXMmKAojGa4wRrXqcx4sQYZNyM8d1",
  "key47": "44fo8AmuGC9HzJJexhZXL8hHAzCyzfzrTmc9rn4d35x5k6mjyvpfAWoAXoAiASRsQQkwiV5iBbHG24k8o9wRjDXa",
  "key48": "3bfLQMnKfAhagLe6n5Y3c3pymQnfFmbEamRFG8kyppzN731rqkGSk7reqnfkppYkV2gbkpSSVsFYDTN3PCFhn6Uu"
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
