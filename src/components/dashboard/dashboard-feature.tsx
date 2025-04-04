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
    "53s76GeGRtHzy9C9UFJAq19QdeCMY8NLz8cEXkN5eop18UMNeym8BAPQTaeCRfyfDXEWA5BBebTqveMzrTtrqiEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4JRqqSzv1Zv9WXUL7WbFh4fgv7wXFfc4cpMTwDaM5FHWK6hzoEtAfH6JEa3akDxAN4LmwMdi9u2ATPt4LyjqAB",
  "key1": "8cnTT7MtkQHhmYhAPKYMTrqigwBrsk4NDY9qsQrvj2hufy6bjT9o5G9B1d7veVaYfeKqQBuJUyf6AdGukiKa7Kf",
  "key2": "5qCRsf7Si7neUxakmropko2865XSkfXBS9fkJhkgVignXh3ys5oSWBeNfM4rXM7RaGSAz93jouh8i69iBC1B8F9E",
  "key3": "5yvaueQyRVtphMexUY45caXXrNnKVc84EV1qFjt7L4s6FDWH5VMsF8Zd36kxYsMj4BukC7mCftFMkNNJGFTFNuUk",
  "key4": "3EAbuXF64StMAgC9a6qmrH44Ux2pxWdUuRR3y9E6sNHpVAHbkEtmDZrU8Zg1Hf2A5MLPbfjBv4xswGxMxy2BWCn5",
  "key5": "63rfrgUQqbXSUP3u8t5DGYTRWE9gr8iZHnnViMKGAhpVn7aWu4E6Yn2w5voL1yxPBjtedASH8Bwoq8zNKqj8FgAV",
  "key6": "3y9KEVQ8SZs63JVhHFE2fvBq9U9EcW8EThnt9oktKH9aJuZ9jAUhKHxPhgvrrRoPMQTrBrPWjJdCAWBv5DC91U5T",
  "key7": "2P6Frgfn7wuaaghn6LVpBThST1oGTccGJmciESoBKbH9b59sLVUwCzNnJQVJbap8PXtDvMKAydo9Yu534sSWGpbE",
  "key8": "2VU7QdMkA279XXzugr17FMnG61M1nffC6bBS64RWvSg67cJTM7CfuDxoZ5HVgDVFrMvxfo9Yc4XzCz1CqBLgRBvV",
  "key9": "HTKoSg3A7noAJ8qDunt34ueRKYpM2Dzx4x52W24v1tk5sLiig6U2PsdkiGCNkzXvqHedb5dcJ7gSK9MemRwQkCG",
  "key10": "72W2wK488hNSrbSKfF8WyxKdbthhWk81mZQH8CRUaZZy5R1uycoRyRMTjzgnP33zsDsRnNLgvwGRJARcKn1jQcd",
  "key11": "3L83kGKogRZkFxKQqTm6VFZ6hEt9sWucX8gkJf12gYpUrpaqTxCymXjkLGNBpr1EKGEeEqNDMjio167boYWX9n7u",
  "key12": "2WciVvtNpUQni4gsDt8TKjoDqH6CMQjyabvxZEfjsENqmcnUoqzSwhhCyi1jz6X3dRkuL7vWMxVgpDLAVmsi4U7r",
  "key13": "3ycc1AD3ogqybpZpdPF7HuAp5k7pHxX1jHNge3f2qdrsWbKamsTB9gLRr4B1JbUAscBPkbp5957E75ZEmC13AaDZ",
  "key14": "3opzrjky7GJbSZWbsVYsC2BvAkRpBUE22PsjA4DznATb5tJVRFmRTqcSizqZnjiD5f9JKHkNkZRFqZZkmNorWob9",
  "key15": "5gie7f7hx7jcmaCSQ1KrFCkbyEKYofyBPpHNqsyecgTAqeNhC3faQYJdttByJFCLLkdnt3CGvnAaKi7K8cNV1tRj",
  "key16": "5uVEJeEy8ZUT7d6onX287QBzJVRrTnMRESDtVg2LpuiwWNtF9yTM1eSdiMFXEsAmbXAaQb9Pm9vQ8Vy6pmoGRfC1",
  "key17": "4ivsUrdMSBXpAyC7vYaPdDgX6rpzHYDMgN2nKhLGacRTKn5uUeLeDHBEhbDtu6DQebhxmsa2gZAkvyQkCjJv6VoG",
  "key18": "4T9PY8N2NfpefSdwiCR8Ew4MpKzSHt84jdiZBEcp9yeo9PztsPRcc56wYq4wTEQg8z6DyN2nmnUAtEWTmebtoTwi",
  "key19": "5tztYUtPgY3SAtCRJb3pSQXD5DK4qSof3MD9iA64eDs2iacfnbrkPvSJwwYLYYQfuEFZgwgt5pHpMNG4mFU8PdLa",
  "key20": "4AWKnJJxMecoBgvTcMi9Y7bNuMr5mPMLkeirtKaVUwNK7HydUdudLHwUQZCaPf7JdPvNye2SPFGxLPPpb3yTyLeR",
  "key21": "4zuke9VdhfkoGXZiB1tzqBF1WzgmwVcdJ15jnt98ktG6LVfBDFyb31GoCbVdGzHwRrWM5VJGBDzQPPxFw618ccdX",
  "key22": "4v9nXZw641A8qu55v1w5R7XesSTQ6oQeayYRvbkFBQUcED2Y1cr2Rj4WB7Pf4VGzKbkdmGRP4ZLcSFcbMgxfkrpK",
  "key23": "44rSM5bq2EeAVMzFoWh1RSvBWnP7FuLvTgrDFbxU3cVD8bhm9gjuQA3xvMUtu1q72xpVWW164PBfgC92dGBwPZs8",
  "key24": "3BQ9Wj3cynWH36YnaFqDzxRLK6FY53cFxNZzeYg4i2bWtMUGg2nchJ8CU1ibpkTXvMSaBjEqXrj9iJUt2ug6PDgB",
  "key25": "3C8KVc1D6pofMYc31rsMCcknTKqXKfy2qJiHfNjdpjyeUbnD4uYpnWcMKWWWNPcimdF378HAGUemWPxmaaETkAKw",
  "key26": "666jZrGdaFiTMahfZyNsTpepQegxtspa9ZEgvnuvCU3tLFvPMUhVqjSbFbY5pH7YrcqbRF5rNNuzUrbdRhtkR4KM",
  "key27": "2TB2Xm1rT3A13fBs2Ctbv3BmbLio7Y5AbJYfvZZZC8b1mNYwHZoHE9SPb6uPhUXpfXSP5NnND7qKttGzhrPP5csa",
  "key28": "2fxvEJeMgkn7RxMee2RHRRoB61amnuwrC12ZbznL3rTTyK3gBGkizs1zAp6ji7M5KWw2ocJaFRmH31qtDmuLyctP",
  "key29": "2H36MnhbYAhbhDBrPmsokECmRSvLTdJSL9zE8xfLPjwXhLhi7abkmRqBSEqpB88Zvh1aH71ccyqKMf1qY6Dzh1Fj",
  "key30": "2bQrssPbGUt4LFbEUfyhBnxWVDxiUu9GtS2xefu8fYCZ5uQ7oZFNFsumeVkk5cQ6W1H6fn1poQpy4t4qqieVKvt4",
  "key31": "4bQyEBoSq2XDzWGrRJr7MCjTzid168S6FD2aom1ULTyGQJoW2UcmNQbxS5qzKq4twT8DSZVGjAuxUaVSxWSg3Tzw",
  "key32": "4y7Nf17BSSX4jmFXF7y8TFnFRwX8yMFRtkC9DSFfMNSZKpLVGLtHf5BvPnnovL2ivKARfeTXbGTvaQoCzkktpYC3",
  "key33": "34NeM8gkm5Pv7Ndog1fRWqD64nnUjErmjHzzsdwBUJ1Dz2h8eUY8eJs7crGNRNX11xirHvBHRngdxHDjrHmsT9Ug",
  "key34": "5gbAHXeBiNC2D691TX2aQeMjB1whNGyZuuu6Hwb49ATs31QB5SHNTbXDdt7VzuGyRTrSzDMYUuCkq7kNEfeBZzHH",
  "key35": "HvYQKa95n6xKTCJyG2JQzu1hnVrMomUxMZxfD1yNZsUuQfWF5zijpvhoXzzZHMd7FmuMkcyKJJvLPfPUdNyVJ6C",
  "key36": "38dp7mYdKABd5CexsQzVDSbLknpQtUsnoKu13KEGZ4fPgJab74dXzLxpjy6NGDTrqUpQYcb8GMLQCm2q84hDyv22",
  "key37": "3dWXfma6B1gWfkx2rgrzSqhYgu18nSdUeuUcNGyXb7rmiHzQLztY7WFgiacfuA5wcpCJv4d6vDvVSdKD9AuXxXsh",
  "key38": "5yvHdxUi55Ezb4dB2mSkuq9BaLKuHa8sLnAnZTzDJ5Fmd5XcQoLKoxnyQfRbaF1czCfynqB1sHQYvLFAfbkgbR9E",
  "key39": "4RM8p2nypfX6G7hnGCTZHvZoZUrnQx9sSqN4Ai4mQDBiVsS5zkmnjs8DsSrHt52g73jpcrMVUmoUovoPdmFgB15a",
  "key40": "3duKJyCRmcw9NnKXP39pqZN68M33H6HaCR29ZTFVXm7sG4AS35uXiU2sewDsYgKRHBM7YhiWoM3WKTs18XK76F8F",
  "key41": "7Q5tfua2KLesA2nDe7AAp6Bf8LrUy1fW5mYkjYdubU18Zd9T8VVk4vrgWLG83R4L2AVXm9a1cUkADzkJyQmBaJa",
  "key42": "47Sszys9htoPSGg8eT9XSdqCstxAWBK6gEXNEmfFoRoi9Ug6SYXs4Cx2u8xi6iniJ47F37VkauNwX4z7D2rpjeLr"
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
