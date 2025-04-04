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
    "2LVVLgS9BPWZGG2H8rt5qF7pqPfXQbCFYgBAARqS4QDAJcHEGgiHB2JA2aAv5ozwEDXR4vhnXrqpo3J9Vq1o4z75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAvFt6KaYcddgXee8yqGg9TBrJbap7nKCpBtUREW8WqyRUorK2Df4NsqFnDXkjvvEJFkweGUTNJwrRSiiZtMagb",
  "key1": "XQT8b1T9DcNfNaQxU7pzfdCfJRRR8HVTZiSPfjjXRzFURsy1MdmR3YabzwzPsCz58WFQ3DTSUcDmGeACgJKGeVe",
  "key2": "47a3V7NrPUMBfxuhiPxXqP4sCuUSE5hHJ8ranB8rTXx4T8tcfcFZTaYjgfPcVKUwMzB7itFyCTQMQdXa3Y9iUPBR",
  "key3": "3gYD9GSxuaCqV8mFTJWkGpd8vUCuLZaXwtTbf452rjUu62bsTaQCM4TfdH55Kau7M7JoP8stoGdS4KD8jmBo4RM1",
  "key4": "33ddbtR79c942hbVkJNMUDQaR3FaY5ESgc22hN4mHcSa3qdn1Ngadyq6YSZpujeJFe8eFV8Ju22a6Qi68gUKmNHU",
  "key5": "ovqnDusi5dZEDwgPxwoMe8F5bm7ZmBvfkGB562DmeWdfZpqCdeXWmfBZAg8XGZ5MrwA5X8XApzePe9jNdNUpkSg",
  "key6": "3tq4ECSc66gkSvHMXvEb4UT9BdeLGRZ3v9JJrdJEu6JtC31YqrkAnhrqqLMsmJjoMSsdw7HhFDUKo8XGNaSBPh9D",
  "key7": "2Gm8Kenms9561pZu4YLESEq8PLXGRA3ebRsDsfwN7j7EnbxG6TbY7YiEgD2nPG4oJ8npaENQnab5i2EAheBo5B2j",
  "key8": "2JHz691pvsjknZ2irPvfermQkx9TMJ8vpkySJDPnygmFdqzMHwNU6FF29HzfAyDdhvNxHtHDgEkTWkHFx1r32Dcx",
  "key9": "LpzQZwk37J1x5Eyw7y1KvGKhukr3o5PoHP3tC48VYXXobGwGbkJd5ZAtVixpBPywPLnKz4hsukDMQbc8its31HX",
  "key10": "3P6sMWe4F7oCDBu4LsyHstGLT3TUWCx2uPnjFUAhNuAnkbiT5ViT4PcMDwmMbRH7YFVnRXnKkyqodWECSDj7gWhz",
  "key11": "5YCSkE3SonA6giqveRnvScoj5G4TrAahNPjd2C1DVQY1vZiGQiqsRJm32k3xKi54a8XiVA5iHxjDvGteXYwQZbeY",
  "key12": "BGMoLSUPP1MdULkFDDievieuydaM4SbsYyztWN2yRVJVnvAx572i2irYsdoiSBTwsj4sRaYE7U9uTg4KHHQz39e",
  "key13": "3VkAbfrLN2XqFWuntWH2JQRYoPaqZw9Pb2XMeeyRhjMkAxo5HHDjcZ5ZizhJUmPHiRW8QZkBQCwv9xpQZpsRny6B",
  "key14": "24QedCuMkn1D4qeS7gzMjUrGcdkrYa9FNigKUmqkShKFmy6ybTJjK5QjynmkzDUpBnXyhA6h1u1jmUuAhhYMe5mG",
  "key15": "c6DHU5A9E8UVd6LMEAQ8wNXN294mc75P9BR7FsD47mb92FheV9CNaJxgMDLNC5bC2iVy5PLqXfn5hPuEPBrAy7z",
  "key16": "hYisunDweyTnfLXn2NpiAvMvESYuDrre9EWeJSXiCP2A2kKmFrKE9kLyBBDoBwsWZz3rS6nGKHHhejK7ZKZYgCo",
  "key17": "3anrZZL5ujh3wv1tSfJhUrqPYaJNbj5Vgh4F4dU6ug49p6wxhEANEu3hdTXv9Q1rZnQVLgknLHCQj6tEFfSnjEh2",
  "key18": "2hRcPPB7VN4MJFC7sEuoSLb89bCG6nz3Ra4NNuPJoWLEdFKKVDMxeM8Qa8Q2Gq2PqDPEudPStTbp2LpWyp874Bq2",
  "key19": "yMSK3A5v2XeKjyP3ajvkP3PVc4xLHQG56hMwdzk5SjtixfqVppFVJgSXeeR5aMbp3en7e8hwxX1qkFAujtD2bE9",
  "key20": "3LeooYXUqh3Sdq6HDJ2pU2MzKx2PGouXNP3o7P5izKhCnR4WeGF4cQBDrgkn8iuXXQ8rh38WMmTV4vHqQRyajYpx",
  "key21": "2Z2hGph2TpnwMtULqN1AyJnMejg3ay4xSb5FagkVURoctUkc8VgC2boTQfmZqHxRmXRDLWzjiDz6UJDf4jhZKhLY",
  "key22": "5ZHdocBoHfY2HvTR4TZ4fvsN38AGjfwmACqUfWJQX2CKZryaKqLQV8ovx6b64RKSCGRNPoWbsYTfWgHgRRASVggn",
  "key23": "4UqzfFriPnRPQo3V8eCNr1pV1h3ninaNZyybbR2ZaetjW8FHxuuh2L9HYdk64uS3rKTfiop5U8btycM5M9gtotcu",
  "key24": "3gmbN17b75TEFes1NZs3PN9P81yikzKWWXZkWL6VbTFzoTXtqhKouNv2TjhcioVc1omAQWdMEt5vMAvrFPqf5yR2",
  "key25": "3pfQiS54RZhpuCGXJr8hjZTKJoUQ1dDZB2oCmootnbePcNNV4KJuifQsSxg9ZpUA7hmcN9CL15btG8Fqen6FFGhT",
  "key26": "2YsdxcykrVpvcZQHM5KuH1YvWVc2xTUoLhcwm3AAzL4bqMm2uJijmgRPsRARZpzoaWCLh2QcAzGrTSmMzA3WvXsb",
  "key27": "4stfULsUvjr5HqAHjHTiDufRrKWsUbR2mUNVtbdHSsfnMnM1SKJ7goxYfJN7w14u9Vn1qVWgnWURCjdswy9bNYzv",
  "key28": "4XyciFZ5PQSfmvPVJMpiWBhQvN7kizwV3ReCMikk8nRDq2pxgimb9g4ySFuMwWNzfmRVBLHB7bpKcEm6hGUXXCd7",
  "key29": "pfik43LPiS5N24UhpHa4djLcAswDxmZ4M2wXRbgRavvX8GTAjLGcgZH3kQyp51k58mAn45LMqsctQZy1vs6fogc",
  "key30": "3rD2hokFzJXKHpPoNAjo7E5qoGRQe1cEfjQS89EQfadnp9nKNXFsYJPDcgoM1uDVwGdNX1yXmurJcC8hFDJdTQ6J",
  "key31": "Si22Kb6XfifpuQzypr17LAFHPHtKzPjXyLjUtx4iBkn62eCsfJLZcQsEa2HMsQmtHkf9mWRCe6medJoX5dsunRn",
  "key32": "2r2PVunoey6ZPRJTZGzUVwVi2DKzFzG51ia1MzC5vDGQJDeea2BARSEcgDw5fp8TDZAHYowiDcXzaiiR4XhNqby1",
  "key33": "5pKpHSt7gBqow6Qnx8gmNqrvtQdXiLdaj4RndESbSuBrVqoRmuZ1xUoMAd1EKirfphGy5LqW8GcwL3zttNZ7zfLZ",
  "key34": "UGh3xcXQBEPfCzSdVx8z1hbcexasF6eoPdweKSCHygX3tErHKyFDHQzf1tsTrjctp9MgFZPjqjX5MontBEtAzvN",
  "key35": "48gM9wrhaKCr2ZFE98a2MnEBY9tVGbvPTfQgaQPcm31t7rpXTdTrNZvaasKCJHp1WN9nmNpTPjMcZuJS9qrqVM6G",
  "key36": "2qZg8scLZX7sfeVuwc7zR8AsQW24fkqsvVAMJrUFuQb1MPHsJZfpc93dKb11PDbp1Ti87j1xbnfJRxYPgqVgqRzq",
  "key37": "5XtjiTRBgfZKeKWr8biDzJvScFDZVF2Zv3f4LLvHh5VR3Br4kLapGBCUXYeH9u7LE75exb1yGL3VyjmyE2sNMnk1",
  "key38": "4v1RYJdnWvN8bTZBbKaeT6bFiDkRgccGs4RCh5qdGgGrxZeemkR8DewBLmvCJWm4xaAvYa3NmA38ZxfqSgq7F3nc",
  "key39": "3XS2UeawQP6cuWAtjFVtxwiPmwcxJ4hq5sTsdp9oJH1uinnVqy3wacumZZ3VfJVvd5CDbruTC84X8D74kfSjtyCf"
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
