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
    "4fsDzGvbiYLJZ6NB6YjyVKHxi5z5iVQKkxmYF2vyJhTuCqqamNm7DiJtW5ucKfB2SCoWA291ockzTZQdVmyVHrXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXpdAf4cjGffUxC9EH1emMAg7hb3o6usj7JXaQvXZqgQFHdnHkiZyCbdMX1EXTppbddhfgzMPP8uBqqZZfHnURA",
  "key1": "CQL5uUDh9RAHAqBZzKRCe8cBdCPtv8VR4kdsciaFKXPbp7ucYZeDE9wCb8KxbzYzAoJM8EmbEKaH3oRaNL5yZQx",
  "key2": "47dSD8JZCKu4P9THkyoo68tJrqTDj2CGFBaRs2MKv5p3s1DspzrXX2r2aVT8jVXBDuzvW7EhX9rDNVr5YHjG8vQL",
  "key3": "57KGFBTZm2EPEyAXGQpXvUjDLoVPZ3W6hdbRVNVUY5JXqmVk79emruS9T6hLDQihK7Hvr8Cxv6QczrpdGG3QFzP4",
  "key4": "55sYv2g1Vop8CQT14MLvtDDSzkbVqYfiXr4xKGqS3xxpvsrmKTJvb6ntXnbxHnTVCExEPjnyN5v7KzzDbdPmurru",
  "key5": "46QugwtRYGcj1g19eST8PZYYEwtLa7dD8TJKymQAZk1m5FoU3gWYNfTkw9RuvaAf4RY6afH8yDfMPyUhrPmE4hcK",
  "key6": "4qu9AVLZj3inxRcot5KnVVBEZVAaUWXcW9EFgi171yLfbhsr8SM9QwTz3VFVdAfibiUzJQCb6ptGM4Tm9knDfSMB",
  "key7": "596ASRswPmKsBohXJVKe7wd9e3J7rb4f7FE35ShuZUDWWcUDvYr4Ai3tHq4iuQSUppKASGmSJv6v3TFoCEPzRiUC",
  "key8": "3xw9T7XpYwEAydLDB4w3rcA3dSztMT5RbWJybL5rgUJmDCzsJEBwMM59PwnooVswPHEmvXKu6Ds8M7UeDyyseMjH",
  "key9": "615pDWFSF4ddWezAtffshWU6NJU4BzCBpxMqbs6c96DSjyJ9rYyYYpSjUSJQBidg6KVCoLEi5dv6RHNBgVK2uoux",
  "key10": "2YsRYdJRzoKS18uSYbkVQfNHdmP3Sv32HAq5MDWJca2Gis9JJqnkY97odCvxo9je191M1anW7tFcmepjhgkexv7N",
  "key11": "A1Jb5BaioiqLRJ4TVBrkDpinyb5qg1MnGiK6PzmaGhqUHQLEZcjTSj8VrQhrQSatXV8ya3WwvykShEm3uNNwfKV",
  "key12": "3wuJjMxkpPx1n7BFEg8AwPbppRr7j8kb9fNzrrJo1fMmTv2EhWMWUU9jXFLQu5kCqp5X3gSL2iHq5qzk2QHbxB55",
  "key13": "4PZgcrVbfwxyaKf67BZN9f1YUdZVCUuqMJmAqWXYvU5qX5aVnTSPD6iyTfTBn639WkNwtpCoFQ26ygDF9U1dGNGo",
  "key14": "3xfBVUUeqs1e8J3cZ6rg8wZzBjx6obkkw7bdmuHaCgsMakBokAyrLvu5rfUXfDrBbb8z5Ze1Zyfbkca4YYPcuKug",
  "key15": "5JefuuVPogEE3QXrdxyeCfi7ExJhXPQ8i7L5rCYppdPbnj7nHd5shQNje6e2jpYcQgTShV315orJ4gjcqWC8qT5W",
  "key16": "4rijdW5BVrXYDyCXhgZ7Cpc882vfKDZN4BhGpr3T2bTfYJNdnoTHaJezvLbfjPr767M42i4eUohdX1g54ceECY4v",
  "key17": "4sEyFHjQbvaZAsbWS1biXJMjKh89RQaVcSdY4yDYxjLmRYBetC6cBGjyNSdt2CaRwUmUg5QMRcGTtjuzqFYunfEF",
  "key18": "5m2ihw9GZi2uwvwdETziku2ugbL4YTNL9qCCSiEnn1jhKX81JQs89BDbeUe1RGzMTHqw2hpADsMXyXHABJAovke",
  "key19": "57HUrDhkN1anaQSctFifE2MnUB7Mnw5AGYZrhJyWYCTERove3fVUNpEpgZgp841AWCnBxdJYEkvznrYLCWU4kHtG",
  "key20": "593UBWoR2LGXM1TRHiwDx5ymHhPdkQXyGwe6DfPHTtkuefxoWokDsY9BK35g2KjE63c3S2BCXXVbM28wPbR8b5LP",
  "key21": "2TEKqgHRAabwFPVU8z5DWjPhFwUVfWQbg5oDtCfB8to9HoDrwMSmej9pQ3doMzfP8AhTD7bzT8HJJzWgvrZv5bvG",
  "key22": "4dpdzE77LhBsCjPQ1eEAkYZo6KEjr2CCQ83DvDkdKCqrJQ19ycoPJPtJ2NCmJYsnHf2h1bXuRTk54bPjr62F7oDX",
  "key23": "2xWQeCYJLpGSC6yg8AxLhwhPm2kXwQTcU9ZgyBB3qNMpP8cgGYqHgEUh95pX5MkdFmzRmVeoZB7nSPy7tke9C9Q3",
  "key24": "47HPP4aXUuTeZtL2AvyzLs2CBGZNy3fsfwMZ4u1oqeAMcHqs4uveSjCyqDin6bumdMixA2LW4edrWGqdLnNwLF4K",
  "key25": "5m9h8HL2rMW5WuiZJdRLEVGj5GP2eR2B3JiHxzvQMi56z7KU9RDMDMkTsS3LdqZspXg9zyrZZiz5pWcm3F5esMSL",
  "key26": "5QwYHGUAQKCNw53qC1NfqYk3F3LupbKv61xQ9PBq3vqWbZxr6tckwtdjENLcDof7EqFYPKggDtCnE1Jvw3ap6HVy",
  "key27": "2cUVy4TLazsHp7hHRzNf6CBAk92je3qBKhsBZETMznc3ynoWcRR9Z2Udga7Fcpc2AMFKHepWy5E68UDfUJkYBWU8",
  "key28": "4zscs87BR5Jd72Mq266kGeTGJy9UyHtccFgBgXGnqgX8B8Vgdw57ZFyza7ktcRbNCYtYSfamucCp4iHCcRxaDUDh",
  "key29": "NLjno3TLFgbW2sR1F9dJAMLPM5LS5L5qSpWR4eCTgBR96n541K4Jm7D9VCb21zuoCp2jwjLTHqApHLansCQL1qx",
  "key30": "KRPKw37stLTj6XFTc2AMDnGzPLr4UPPfzq5tQWaZVoq6gReHs7JVwEU42mpAxbFG7upbnjRS5qetAn8WMwq5K7f",
  "key31": "593aaV3BBcCVsui8CEnjdLLy4gRefNJcKnLZssRevMJc8xyQfgQJiYKXkfryniMDZk3MZhNk7MWY3zM52UcvbipT",
  "key32": "4yd9Ee41k9fr5YSnbmqY8Ci9qhR9vCDfh4sVYB12QyroYQxGhFTwdK87VC8SAMUJfnBoNZKZVkWBxv6ZfwTraw6b",
  "key33": "49cEjevJnGkVXyXZR3LXXY6uNgP8CQH1J3ConAzhcJe6sX1RUhCXXHqJghhMJdqVd8MQkn49XSYvcRdkGyW3xLUk",
  "key34": "2ugaqPVpkNm2s4jw5t3tfvcVETvNnSM37ABorS9UveefwDcJzo9vKscgpiAxRK7WBL3Sazf6YuRyiAzUkoRmG6HW",
  "key35": "2ctChJ4QdfPyC8tWPsnaG7M16MkBXe3Tj9GTbCxJyftz8SetmbtpnTpCTuSEv9U9BUbC7oK9t52jHu9taJtg1Foa",
  "key36": "5vgGNep6CyGZNDLPe5qw6JGFqMDt3f1gL7DMKgCxmBrBCq4BJmcXP3466NrjiZuHEHU9m6PuFjTgz1zCQbPhmmSG",
  "key37": "2DeQSLhguzW9GYoxn9mU2ZXmvW8kkY7uodJUisCPcXjxfWa2AzbV4KVKMETF3EjeEXfLTbYCNwkwVSuhVMdVgygS",
  "key38": "5mLditfeGAZDhbuG6hn4XzRcjMp6uZJHw1U3wYYhnpKtsQytenz6qN8x1Us8bpPeorD5CesFXoEL5q6pDqA12Yqy",
  "key39": "2rH9WTooicZV1zqWREiZP3EBdovL1SkGHpoVp2W2vjf63ouE6i9BKXjWxYyUYiVyMT3SmJVUZPM6tNEetNYPDWQY",
  "key40": "4kphdSwcYDoBEu7BksAHbArx5Lq7CF16wUZX5QrXkvdA1HPJZKPwa8pafJUD8NFtJZiAkqv8GjdtiEAQU5Scmcgi",
  "key41": "3sPRixrskgGx2qrws87onD9pKspKGpJ3E5h1gpFUPCKM7oFGaAxwdG4cZLz31KZVebnCUazNXBHtzTo4mhddta9h",
  "key42": "4ZauxSrWd2ZnHYdwF3MucxcDHnDGK5bW7YiPAVpn6JdhQFgmmTKNFV677gXyj8WAmpsGc8qEevJYryawaKA2Gvc8",
  "key43": "3svqms5UQ5ATQ5LqpyzduwAMT911M3mpogNWiAFKhskxDBxJAP3LULkR6VnHgAJYDbxBhi6bmwfB72qsxphPZA1j",
  "key44": "4CHvHeTKxgJLKTp1bUGT3QsQ5SFiqTdas6Vk19JbwFR8DJArdqj4FjG9LGpsR2G4oT4PGxh9SQ6Y6aLSThrB52iA",
  "key45": "4UZQtKM1Yfnamp3gaj5Tk3Z2eMzPXeCjFKPBkVmWwSyeL156FWpNhbJBfjYED2fjwZP6eKbQ9NiZuHeUcTDKV88u",
  "key46": "A19oYHL6B6hU3LiDztgBHkoX56qCKLKm5Z68w3m3rerdbGqZS2Ggpn2qDndKSuy4whTBUdzhCYsFtPafCwCfQFz",
  "key47": "445Qp6wcfkd6R6UQQvWjLUshcpVU5sC9aR14DH9xvFmJqSxPhJP55mVnz4vpaZE36FFLfcFhcK8WTBWwmHAxiUKD",
  "key48": "Fy7bzyD9Bj59fZ97uFfjfErCzfJsTu5HB1zpJYys7Z4gN1Js7bnKFXGyTkQxujvEbMAyQzAv1mQewPrY9FQehho"
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
