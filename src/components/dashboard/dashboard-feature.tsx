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
    "3yZGQFpuMeu14JmMhezAkYTDifxJ9zRevC2tDHWRtz1upA7cVrwnZVoeZqhPP8sSbMATeffYYnabi5XNgVT97Dnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scqen8sE2Poqb3RamxXrW2FahAiWwLrBwzxNjCwqs7WgiwuAvGauvbV33X7WtxHRwRmJdbpziUgBUFGPaG5dUPm",
  "key1": "4MTNo17wcaniZWfkUw9M1Gv1JWpR8K75AhS4kNef9AP4riMUs7XpJPtuLqS8aZuUxipKZkMLqZedYkFqAVwFEzJU",
  "key2": "wirLKEtvVMt26XJrZAP7Q5hP7X5YjdTc1wZRNQaDGw2sHq8x7H2hrPMqLTVHWK5C2yv5HiT8pGzRpYLmabYAHVB",
  "key3": "5pTjkbyzA3WWDLuaJoXLuwD6ymHwLdu2eFQhT2pnzsJfuTNFFHTRZyoDjtbBgYLcFWZjf9FTCQopquGwRxPxSxcJ",
  "key4": "38JsfouFYbTCXVFMqXBSQr9X1svWe9QDLv5G8aTBtzFvjxN6fUw8VRs8ubeMFZDA6cpJ3MqYXe25kx6ootwCnpnK",
  "key5": "3nc6n6uJrn2dqBKQ8GQWwZDbi4CYqbkkakCTym2xBLmhuv2ykoMxAXTuPkXgAdzh9PbQu3d21vaWBRZ7E6gagXo8",
  "key6": "3xzXMF7EZ46CpKPVdasubG7JufZLGSX6B2bigUW3u1Rizennz7PbwztYErxmwRxTHDVnwfGd7JHw8gur7fD4upKT",
  "key7": "4S5MWstuLoRNcCdXc5XiSesoWNydphaAq7HKHnuJYNGpgSQGV6qzuVxKvQV4JesbD2yMk885ac5x4n3auqawR6NK",
  "key8": "4ry4qGcwoNi4yDgX18ju2Q3Dv5k8MJ59xbgVUk9eHpimS8wkmwqBvNzt5WpfMtxZuLvyrZTdk4ufVFNK3bgvy6Wx",
  "key9": "2urWT2FkvwYKs3iJ1osokJMaKKvLrEmKEpP5e5JK7hMZAFSmqD8XyY4A9ZX5Za9wYRbxyQQCbhA6GCMiUfPccAoR",
  "key10": "37iLNmJ3yYL5ck2uNqWa2FiJjnbJM7WiqW9HEdFT2zbJofd7HLbc6WFfnWjc6MEVfkoaPb4yPzTRuGpF2hhcJHdW",
  "key11": "3sNpt5NFGE93xJexVd4tjVjsPyU9pVddgAvtXHueyWQ3kuz9rCzEcKPRNHRTtBK6vVjbxr3RBVbwbpPgA1VesjiN",
  "key12": "2ZZHoXLKQNRXnheoUF71jKupS2pjT2ZyUzzAXKFize3R2LddPfJYWV19asxrZnea4baVPvBy1dqf4ZNC4SyYH6yV",
  "key13": "2hEmzcjdFPW9TicS3Cgr18n24b8vkMQUVWwRt7gpr2MLXPamJE8hMZZNqmSCgR1EE3zHqAC3an8N16E8vwzp7uKU",
  "key14": "CGMFwZBNE8ZQa2URmWwm9Kgc9R5iXFxRRauBh8hKu45XhYxGhJpaeRjp9oU3xMpSXwbd1i9dpALNkE9Jpx6g479",
  "key15": "4Dcs9HfQHzsR78qL4DfniTSpoxRx5CQEEXkQ166ojn6r5DYagYtPaSA7dB8PVz2ik74AGZoDn8pRTqknNGnbHBwm",
  "key16": "4JX7ctfqgiHFK1ryt2ysgSKG15h9T33xiDccF5Efpm6ZN7FjvLm2VYxvGsKSzKRP1zptdFNgMgrTu66DmZrcLTkD",
  "key17": "dqNyNw3acyXAfW2bXdGDznx59oq2GuieHZMtwLHrda8vi5LdncLU8AafabiUaMY44zc2qT4EZszVV9kErcfFC6D",
  "key18": "citGj4hgT3arufsYdXi5sBAZX3FYnA3UAWkMcJnZjUjTK6ke6MK78Wo4ND5UkFTj6Ap7XkRk3rF3vBbfWmFqJJc",
  "key19": "66VJqAdWfP7sLJmW4M6hoZ9edn8CPtb2vqEvS7kmarMY5ekebkiZvKAhZqX2mD8U5kwg4sG3MFQBoeP2Yq7nzzYK",
  "key20": "3zUMTFKpUCkQD9xeJogKiUmuUZuhYdgakLKCc4dDbuCSMJHFtdG1PddQXFXs18mADXT9koCGq9er9DE62PkAjLhm",
  "key21": "2BAytxx946fZhYrhoaN3kahRbyJUau2bnTVt34gP1aL8DriBEMvE7hxjDAUXH8pAzjbwHPXu2StJ8bJXHiB2U67P",
  "key22": "28FFxkxULnpohExJb1MYZYTG6qowN26mjk73v99h2Cy5SyKN4mmYmNfquyzKKJHZQnL7HP985MRfSeGXMW5V5b7M",
  "key23": "65iSgZ5Zv24oJXerxjC2b2qAAZsVu4tAdq18gM1RCic56V7d2CEwyizwsrGTZvivQqePc1ygzpxHunc8y9X5Bxij",
  "key24": "52F9oJ7AhEvonL2kT6e2i1HNiA7jFkTK5mpJwxkbvQffjMhEPE8nMQWj1MML3YVA3ScAF9XpYdpX1sJnD2cDYzE2",
  "key25": "41Z1Hs5qyTxSrx8B1dEo1tiakGvQM2cxEpSRXMxSQ2A38V2wyDK9R8nSAxZEz2gVmujsRGf8t1gH19Q3GqG38bmF",
  "key26": "5YbNqHfZfoBJaHrouUnDoNACB2BUVxS7ba2XVHDi7oL9W8z7fWpFE42p18G1qdcW7gVUWeMk7mVDuXG3dQ2bRDRB",
  "key27": "J43nRhokYQgReiFDTXyKXcATKrSpSU2Vzi3CM4ggnrvwyB9UsZBujXmjmeeBuFHnBj1713FDFg9wo7smN94y9iW",
  "key28": "62qtPjt93pmFkfco7LJWhWr151p1NByfEgodP1rADvPCthWpTw1iGySMaGqXWmf47zYPrp8zf1immGsQqZmNFkUL",
  "key29": "3NqRVsNfu4ephaBPs2EqDmwwWPhdN1sCBaz1yqCfiPDuvGGANHdL2hWAhiLYkqL4AYz5ZA8VrEyDTbsJKu7R4tSF",
  "key30": "39nkVnsVPLyriGsZSzWvWYwvX6KaXj9pb1XUF3jBPNEVuBLxzfc3LWZPG5jQR3CnQ6fUkGB5n9aa6XtvfmvgpvaW",
  "key31": "rQmt2ZpVBKo4v28c9AbhMpbyZeXnrMPu7Qfnao77yeQb9JR97VtTgpwKbtN8dvYysvE3pGaxMcWCZTy9f9Gfc45",
  "key32": "5szze9YhWZa6RaRfyDvzdRbFpsScniY2twUjwzLfc8Q9tJgyApF2URN92QsbuFPwDgfLQkiyGgXxno9BBTPM4X73",
  "key33": "4hVyjh6j6JkvfbiSBpDcpJA9Hm4ouM6h6C55rkM5t8uiEmce88hdsnLsE5Dz7WP5Cm4p2PhctvybYuromFLJL3pw",
  "key34": "gMUhC7opWAmnfirMywd86xCq5U2UBfXPAP4Ynm3KzdPYWxBPVt2WrUGbwVdebiQRfSo8HW6uzz885Wg1fkHaKgf",
  "key35": "4oVdMCgQCK1P6bGCMdvpcguV5L82ciRtGo8smucB16AoJNuqtALBVqvtf7cZG7r6znHjHDPTG5TKdycLRPHGURXy",
  "key36": "3UVwV6jAzbNuc689uBAVRnWV9fcqwGVgW9jk55Ww8jLXF73vmWJy1h5cJRhLCQqRwniYpNQfEsHxNa1iSoM1TZRE",
  "key37": "QxS9qv6ByPMracTdPwdmA56nzanvVZWwcW8bFchen2HfQxaN9rvqPeakbqnfJqMx975hKdA5kEPsojtFzWiUFCB",
  "key38": "4WCU37P2jhPTCrQx7UFzex5U1bt9mmDwKSD6i2BdSojynXZnrcMaziXQCYU5offo9QTVhfkn1NNzynSHCWwugyBJ",
  "key39": "3gA6fU2tdyeeACL4sW7BxhtUGxQ43camHyCxB5wiyoHS916vx7ya93RdY7LcfFyhS5fi59jNZSCpSXF3m7hnK7rC",
  "key40": "rMpYELbFHhVxjyoP54wFHWwRDNhdFm5LSRNTUAJqzV3yG2cNwmi2bQ5ooAkHJF5wzTVeMkp3b5zfQaFQiZyohU6",
  "key41": "5JWzYvzU4vXHEyiV7GVwmQDn6Zni2ikbNiKAHpT7E5uoeHWj3J3R8XiQ6uANJGNCy9VTFgtCUEgB7LpKNXWapSyB",
  "key42": "5MMasvn1hE9d5TJ2C3nuVS9zKYxFjFQX6ZSKpwDNmJZ48qY5TFhTNXrdoZ9Dq4LJdTmr423Vg2zokzW3JRS2UNdD",
  "key43": "2sLqZttpZm4oy5GddBkcBE6NTDCrmA6Fh4cdyp4DN3x5A8WEKSdM7uqfZnANp7y4TgeaRUoBVKjR4JEw4Wf1YJPV",
  "key44": "56RqDFRWkdySF72S5iGMgvx9yJ5HTmBRZXgFJb9SLyQ9wZXRk2QECWJ2PFaVH9ffau5VnGZGNkGUnqcRZonqcsXb",
  "key45": "Q6DCXYy6BMmNsmaZQrXRRSxTbVNxG1KxV7qo7RZnVaNWF7BsR1YZB19H8LtiL2YsEz7AG9RUiQUjUWwv3xf3Qhx",
  "key46": "4mgQpiexzS2tXjfVEAwzCwhcjti38bfv1hh5dZ1TaFF1gKufggsTtv163FmNYEsjCabPzFbEFrs6cBVDpXTi1oFv"
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
