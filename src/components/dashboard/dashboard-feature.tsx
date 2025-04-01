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
    "4fpwvPZzFBVwiR6HkUPuK2rtHmdLAWBJ5vPTsfA2zNMCrAHCqaKbnPxqPy2n5cZr4KrgQkHNCGLNuTPpUkrshNgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2XwTx9pNAV98jCUAmXAm3hsjxoNezzvdPiQERj27JQBxKWPSaEzF9jNCRcezb3RksveG3NcsJ1WzwDaQZQB8uP",
  "key1": "2NjuQ5QLEkMm9TdJ84EU88Umikomb5Dtxhe8MaH8dtd5FvaPP3H13RESuJuNzbAMvLMkt7btpnC5eABxvGDqQruK",
  "key2": "2awAgriqPuJLWJWV3GDZ8i6EBnwHSkFR8tWQKSTkq3bPrwFBepKomweKaMUdbyKnN3gcVbxYiW81HnPGURp9cTGm",
  "key3": "3aHocyfCnS83dfWrikV3YNbn5w5dcTcHTJtJ8xpiBYx81xCqN1q74sBwtVLTKQT9WXYhAZ7FVGZsbB7kCju3bs4v",
  "key4": "5zF5EubNwx8sSJ6eJx5uaX6DgWnUqGDxrGEKFXJw2Sc3vZQYNwMXkVTFAn4rpvte1ooC6YKoHyfzpVns2q4wVbcg",
  "key5": "3gwUW8wKF1kTybTdN5Absqtwru7HeyXtvB9vW1qikhCUjJeyg1iB11cvRhQxMMz6iY78qwiNdKB6o7ciWe6uxv5p",
  "key6": "2xp8mhhn1XuAo1TdoNNRdishQKDS2Tq7HWbLN1NmUrQdgrkgPcrTPPjui1ch8VtKZ9KKRs51T9FNmpCrKk2sSefp",
  "key7": "67bzqSbaMvy1QPAXXZ4nR3eqta2F5QkSJqmmX4MMzcS9GQB26TEfeVa44KxisWTi52ZWGCSrkvy6DNa1Cqymv3HZ",
  "key8": "jdv8UDEsfGcVEaGUD2Kn5ZvbDDnt1MovgxAwkdDnNnfydvn5UZbggnak7NQCM4CUMn6rUGrj4RLhn8cFYowtXoA",
  "key9": "2CNAMz1o2GUxUfkUkF3an4tZ8byQYrdXWwFx454hZ2nQYNU8EM2jUtSJHB2efEWD2QWwHcZjz25sk4eTkXyn1Bcg",
  "key10": "3LpMN237dCNJT1oxJa4hTzFxe9VFJC11NUyqmUGYEZmDcXwRJogj9LahpfR7ywbMEdoZ2vQnKLzPFZGP8jJDM78X",
  "key11": "3wUfFM1fxoeWZZ4HMThUt8kqE8kHXCogzTAkR2asxTGUKvghkZnJvyvcJEjoEhY2xK5SzHKzWXtDZ8f8F9aVSHcb",
  "key12": "nD2reRGjYfiLi6iKYHvLjT2CEA7E5b9EnAGcsKxsjpY3EWg7xTpUcHLQzBPYfYSNTSixAUmkmE357KmWbjfeFST",
  "key13": "57A9nH23qmd7CNP7iy6o4ycVDzCgayRPGJDKKQjFo8TUDfUPETF4GsagvrUmMQr5s3YpnEmcotP8YYi6a4SAwE46",
  "key14": "23C6mBaA5Kwf4qQncogyRfuFVLCCYPSYd5nGoLuu23bsiHADnyoakke5zSuNfU1YwG7o7JYFrFgzV5ozA3RsDANL",
  "key15": "rhj8k86D23erToL4mEkdWEEoRLRHC9atyBYPhKZx9qcdD3y4RaTsUyPLhbykscoxYdAnfUEfHx4yZycBJTWsR6i",
  "key16": "2YzNzkdBwXc4Qu4WvuLy3NfM4g2NZc9qMEQMwjgNLKGv4McyLDLPMWNBsN8gh7gZBgpuv8SnvP2D4tHGhEUdVy9R",
  "key17": "5fBep2eGiuyqKWaMSJcVFMf8F8cUZUPMzrHtTqTdTWwXj6fT4k3vj5XqotH1w7VigzkfzEQhXrm38u6FpL69DPpq",
  "key18": "5yJChyBpxyJxcBARjZAJH7EEvVE26yeqBCVHWQNNJKvC5yX7ZxDj1Zw3bJhFHoQew3QnBYnu8hmP4D7KnAqKKsmC",
  "key19": "3N5p7JwsKdWbJd84wSAH9wi2Xvnq449hqcGbJ3QAAcxYigMUjPfwSymPoE7Ry1S8UkyfojqGyfC1nGiq7Zrgcyaz",
  "key20": "37nQjz3v2yue87Y3mAA6F9HCr4fhQuz5WwqnaYN8w1dZB1tq6NqwwjHav9XXe98cXqcxC6W2zN7SYYJ8efW9Hkdz",
  "key21": "5cco1Pots4MBfnnsMvRzqnpimiKG4u8UoTTeG3hYDwSeofhH63iBiP6cxZ57LmXVJ9NrHh4d4oXxiDtrar7Q2C5N",
  "key22": "3HeBZPmztTBdLjyYHdqHpXFNmmGA3twzTazim997WzXNVntwXjoLPhQuPb6TqTrs3Dtc35XErvMdBhqiFMMQMMMd",
  "key23": "4cQmHZZRzsHp78VZwgawu4Kpz2LaRP3GjcQJhBWkYRnVrncWuuonF9crErzmyHsAHoepTK6PnZLxE1mJTx52L5FK",
  "key24": "7ndh6QBtt9kNNirD2pcw2ZonHGzbyw3vX9NYBNTWC2KNBaHrJXBnnFRht8mdCABavBJJimUGi28RDyYazC1bPa9",
  "key25": "4BeZfUd5C6VseG8Ag1C7TasxX2ZUBqXXGzmBDv1dHfZTNcmJCYkFweVTSFdT4ad2Z2CEAvr5eE23r4NvU4VNZLEP",
  "key26": "JTcb2s4MkQDnJpE3UnzS4f7Zt5Q9P7c7J2NWHhwhPvTjUyGQ1B8YzQDZoHBYsqMXtSJ1Fvi5jocNZo8RMmDyTS3",
  "key27": "3UTvdBUDrF5WJGWANQuNzoVCVLrUskNarWEjFk8qdrECw4rtgMywpjLb3U1tkLXdLTpptdo2fqmKRSCuV5WtBzzU",
  "key28": "NoQ1T5dMGUqt1qDyPhCZGVrRJ6YkxBzvF1FDb9i6oq4ks5fWRj1HUsgz4FE6LqcniLwpnx7SjnVh3HnfK3WYLn7",
  "key29": "4nmKSJtTL2HkKyPRvjNA2TS5akzbLKf5JapgXA4W4AUATuZiGasf9S1QHJnC29H9N7mJzFu9fv9BBDoHehjoWRCR",
  "key30": "2CiEzFZrGT2T8Gp29MDRo4EKjnCw9jFNuiYuDKvcKp9FCS2LTS4kjPGAXTMoW2AteQcbzsrX7cJMAn6bYujLrqiy",
  "key31": "2SGyZKN4XfTg5in3FkXQEb7HhLCR3VR7RpmE41wy1Tby8KGwy7pHpTonnHnPx32Njo4KFUEKdEGj4ucw5yhW7wm8",
  "key32": "4Cjvhjy2wV9JgUJeEYkyCvbYxW67eNaGCGXCppRtaGC6BkLe3A8MNoC4g9K9XJee7Tpmo85GWoRu69Q9usZg2yMX",
  "key33": "4ANMHpPNMdRXaXoC3rEkyFQMxAipdPrTkoFiVcttiSWh63DhwVj51xJ8Gze8tcicxJ5BL4ffDEeEd5ioXR6BceL3",
  "key34": "Ufx6Dr6EKkYd5hUv1cCCcP5kmytjBU9Gx1gcQuHCYowfyhwLNykra7mvKvJPLTVVxgNHKKQx1vP6TGo5ef6DXbG",
  "key35": "i8pnawd4jwbH318bDAaJSDN9U6gPhbgf6GYSVfk5RVxVXHciJ41WUYM13oKpu3VjPZ1siHjEMYDA31sV6SWSxyb",
  "key36": "3xck7VYsaG1MMYPV2UoayAGP53jyKwcT8QaDAuW8MudZddP6yAuGdEysRZcXszMHTB2MhQR5GYK87S3fxrhC8Xg2",
  "key37": "MnDJ14MmF3jFEigWxrdVxvKoWyR5kTyoF9Rmtf8YjGwqkLSWaPvLV9aGNJ8sappeuS3LRYFTTFVgQvR1P9RRXhg",
  "key38": "52qSNSXN7Vz8wBsG2KC7NEL87XxG6Hvj1HDTEfqkrzHNn9mNuMpE7pFDywrd3rjNku6dz4jfWSuozBgakPQe8APR",
  "key39": "BPREf5EVA6H41snFDB1Yw6C2gLvDLWnMvUE2EeKFNhCvfeCpwCkzNBT5NAxV7ahohDLiqY8wEuGFKL36woQW1vY",
  "key40": "Fhj3VpgK4yopNXibVkcx3vgtRBeAGpBfAyBxrkQeBh3953YbvmPTtB7MeFCzoKksxJSHqg9h3PxrT4yhDv4cxvg"
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
