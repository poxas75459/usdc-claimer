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
    "4zWD5ieudjsJZjBR1k9A7KgAab8FXx3sxrAVrTmQsBFFU53pnv4DQRYZ6iGenrxeb9x6YqtMMDWketHy7YasjvWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JPGuBpUq3PxgF6tDrGUFSu9r4dkLaZWW9cGvfHxq9zBbcYyUw4X34xiS797gYYd6Z8L4eyLehEWJF874jNrRA4B",
  "key1": "45abFND6qjTSa21BEGYR7wYrYBK13RwYvWLUVAkyi6HAzqPBxwDsSzcMY9Wy2KuyrF8asyPg3UpoasydQnsUewbN",
  "key2": "2kHGsDGpJDWjx4u2ZKQF8qeRbW9s3h5bZVAVA5BtpHDhhDNY2cPYaVeFcgMUFCCf6qSYKv4YkCN8iodNg3DPt4pp",
  "key3": "5JHCgJR9Xs31yaqoRZY5fvoRjNYraTcRLWztPwGAF6oMWAMynuA5SS3wpz2gYDJQzHpYjFKkhY137gxV3mw7PaZt",
  "key4": "4da3coTxJJhmDFqQk7jZ9MTZ8csfytBwzC4GPVCrPjJ4MjZfVdFQwKPvQhxGYHmpnuZr4s6U6qGWkV5ddna6W61M",
  "key5": "3BWyz2VpaSpvi44e1c4qdj6RGNzQE8ph7rpKjQW9Y1t17Yj9EqWwtB1JFbqvZWa5WTACTSpaT8f2TEHBa9EA4pKd",
  "key6": "53VzD2Vg3EY4mZwS5k64c9MDT6UCr3u1bFHDJHLpQxV4BqMiAGxr6tZD19wK2nrVnhX4dkbQTGd6GKsctHEkP8B3",
  "key7": "5k3kXZS3Tu1V22W7i34dRYKmbBD3VxVxE4WbAV1vgQWw5THPMdLZUVUQMR6yWMc9yJotBrWPuaR1ovGFigzxzd2i",
  "key8": "2jbfPfGezSj1CSBnScLdFK35a1M5sd53upkf5kkM8WQZEgcgPZ1ZnkPy8kQrkTh2UzAW9JG7fqhXSrJFWkdgpmZc",
  "key9": "4iyDnJRA6j5DVC1dKjM14aEZnBq2YWoYW8tkVfMUdJ1pukWDUmNaCbB5NZX6xKYTL8AHADQuYhQm78tyCRTgwhPk",
  "key10": "4EX7Lev6dwHrShxaLq2ewFLTCT2DdiRQAWWDn1ibizygNzeeE3Evcx8rHumtPhBbyPL51kG16e9KWjNPBgnpbSBR",
  "key11": "5V2VoAWconUdXuuXmbWb6cS68woQm9ei7nvQpunBv8yVArbDTXe3KXmxqFtpRNwg54HvXz9JhwdoFR8Afdb6XSJR",
  "key12": "54M52yGfeGbXGCZC6skp6evZKTjXcZC15wysqkx9bDvoQM59CJYEtvKd3JhLfwNTF939ciU3BZVbfJFVsF5v7SVg",
  "key13": "3qPubvYtjmKVxLnFR9hQjaZ8TDsPRQn2C92vxVi5ufqvHdiZ4uQFUB4qHBz23DV1fFxaBnvMEmpx9otQR3m8G7SA",
  "key14": "3nFiEt6JKwm1gUjnUt1LEVdfQeshDctTzaPPUxiTmizA2ctB1oukKJA5GXCN8PhTpM5gyU8aLt1qdxdkhCbzkHxt",
  "key15": "4ckGbvPNVLTUsX9VgcNbhnq1YryFXDytt1jbuNTSATQrZfo7zyQjrWCev8q5msonfwH4pu2ibFvC9Gg8zhfeswNp",
  "key16": "5RPfCNUL5CV5Q6nrSqCVF2UMNtdYyEKok9X7kGYfoqNS7cTQW8Zc4nUsQiw9z2VzhtiDok3Rnzc4aMnKQSU1sUwb",
  "key17": "4yrexf8DVdR6wUxxEVLHgWGbY68fGuxZJDou2WeVgZKHWBdREU1TSc4ND35Fq4NRcXF7Dw2FaQZMhqNZvUbSKWot",
  "key18": "ywJzGz1Uk5hw2j61ywJs9nZJxnfy5zWmebudkMqPowFR5Waw4SMP8Lxbn7YCNwKLk4sDpfm8RUT4K79cYJPqXmg",
  "key19": "451hmnt9sKfokRqzasoW5cSEnxBVY4sUfUv4sTMznJZLFm4iXpBhD9uVrRbHWqg9WbxuvBVhGwvzcCRu7WWNXyMg",
  "key20": "4Ljo3aKWRqPb9VqzoJxHzsq7kHDjC1Ht4kf83xYyihbzBM3vZg4rpnKsLsp4eGdxyPNBhpY7N1faqGFcTsEx3Zjq",
  "key21": "275vAuL2uawtk2QoQEKGef2yJzRNYSbsmhMpomG26ZGTq8MCKf7tHndijQLQ3MQ2fUCBr97QNQ4xJ1GtSkz4WoCH",
  "key22": "3e73Wf4FY8TQ5jNpCbnGo5ULc12iUyXcHg46GCnUrLn3HwgaBUMeeBTBN1CGMeKsZqU4Woepzn2hReducrsy1acy",
  "key23": "5AizYd8xj4REKNtqVTkGAtn3zF4h5dfuW9w1DrKSYrVPFNre4WXmMxYT15Ri7ZV5MLg5Lvaa3LC5bvethpYd5KCo",
  "key24": "2NRU8hbwdDZ96fMKyQ2pHeobJFthrUQRzKsLCRfkjx5bdLCZwH4Mi6gBh6ajjNxq4jXPmpeRsHSxTBz7UcW9sTju",
  "key25": "4SB4nwpF77gC73NGF5xR1fNmGYSsTxtBuST4mKokPgoEhLuRTUZ1ZxhpxrV8xqJVtedmkk8yBpQFh8qGJSkGubZP",
  "key26": "4VMv9L4gpjQBvDXCCBERLKwhnoonRe7QiHSCedWTEJ8xLdGW45KRNx7ZTy82y9g1sqB14SWmibZbHbD7VD9Vz1fS",
  "key27": "3cYbZ1PzdAoM2VFmoFWfNykCj3MUen9wSH4mCb4Fz2AMgLZeZueQiL9emU52pgHoetVM1g3PtTD9EyxucLN4rUcm",
  "key28": "KCuwJ4WZvuj5XJJwnj8uHcdVB3uFRTxstmjp4hAUfC2ByGbHAqivNM7fCwBMFrSkZVU3t8NX3dWL7nPcbfuNwJ5",
  "key29": "39CotW1a27Cy7RfDf9J5iu7Bu1VSHxLiA39vWaS2B58WyWDbybtuYzhwn7iWBbgyh1nof8uSTfUKJ49Ws4rzooV1",
  "key30": "5ZhCYmh1M6FWiFRnr9fRYb2TV8NmDCrWZExcbjdn19SmukwcNFid1pRiYMPjZuErr3G6MnBuChJxdtYtBX56Kct3",
  "key31": "3ASZ9C2NXJYDJGQzYCvH898UNYZLofVxtDGcJq4vtcia5RomB9Gfqj5eBkCVuRohdFG87sshjLZrYrcNLofkgECm",
  "key32": "4EGRr9iBuofvYuF1LkrQwNraitXGYYaA96zgp7pJAw2UiaeDjt5r1vi3XkW3kUL5Z7gJvFV2WbfyJZqX1rrJS36w",
  "key33": "4jVRatHQfZoU6CEixU9xjNujoXQZdmLWEC22Kmkz5jVMb3TVgh5mCLEKQAhgMJGFHzBMeVH9T9ii9craV8t6daT2",
  "key34": "5aH1MSKB6XC8rUqUyRdx75FRu1gJhtoZeGeQxdQwhsyFg7wY9TgubiqvTktJVzYBodJ128MpFo6SRXXGbGGe7Xbc",
  "key35": "Pcivpq818rNBjCAYpBZwY4mFywZo5ohzR8Afkc4po8RmiW784DfVxU9iE1PJUbBYH4pmc1gdMCkRXBGfg2cB1ah",
  "key36": "2uFfKL3HC4WavdyWuLw3iHfR5JmnHwUuRr57uwqsYtDsEPuDMboAz5THScL1iphBcJ5ewWD2R7Pz3pwe492DjdBG",
  "key37": "3yhqNfLKqRDUkYhjiXKPxZRcsMYkR3Dpf1v7s4HScU9z6Kh6RZ9mAUXohhdJnXu7bSnukozSzvXMJUEwLML94THM"
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
