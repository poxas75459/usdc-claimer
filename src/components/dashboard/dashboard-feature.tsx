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
    "3SoPxchK8kGMAw5DUuG6T9FZY51UCErxLnxybvhiZh1ukZKLFLw4TX3HB7BmnCL6Eg3qP7je16SsBvrPoYHfEhod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBhFCvzQH3szH3msyDmT7BNQdAdRdM3Xep6jsWjiizFgurf9S7FqEJiWeFbhz93sxkGkRmUaxwE8KUgHSEQ7Crd",
  "key1": "3KGxDpZUqtwguV8MVcQumbgE3pL6ih9ktQVNoF1v8E1gphGJXHmP7y3D5iKSu3LNKoEd1su83EpoceySBBAz118c",
  "key2": "4J9Q1QRxYR7ZTYgE41o7KE3STkrEkicCtbC4Ez1kATKxNsFuLqhwrDY5u6Vg4iJjRMaTdbyUyQThLRdBD6PJ6VFS",
  "key3": "5wdgpHgCffJVtEvLRXcx4enXLEqz4wrQWv8GZWqXQHtBs3XPNfnqPkLAojRH1ZCDKvx7vFHrwdpuwnBErEg7CPta",
  "key4": "3rA8BhMCk5wUL6eJH9MDtZ5LRg8tBjh2zsnzA1uVBqsZ5PDqH4AMqzmHEx4gJQxRAJVTZ3P1DfGCW8ssvC1c5vVQ",
  "key5": "BYNSCpceMJfrE9Q7NuTM8sNbeCXoWvr2LkrQFaMNyz12efNGgF1QzPGzSpvR8aGtXFMJPwLxUwzYcsdQjdgGD2A",
  "key6": "2dk7ztZnapvrx6Xa84LKX8FWDCx15ApSECMB9VgfQu9gqo3EL9B8mftWxnnwwh2wQJYZVSTaZHU6UAz1ASFpcFfU",
  "key7": "2UQF51kCYzSYo99amaaTp4XHewEHtpy2q7gChSS9PDqav8uypib9iQmDjdf6MUj6Sr5zadextLkV9QJxPh3VAZMz",
  "key8": "E8XhS49ivSdTdvXV8kkhj3gnXvSTcLA2YS7DKuEnbZ3Juh4RV4p1oYeawXVStp3RYomYMSj2eoTYdwFsccUiWid",
  "key9": "2qqveeqV9P1tdQFLw23rcpxWvRAgwR5NUyrtSmBWVJnCM8bnt5HRDhdC2UYsLxews3SgBPccJkHsQYAMqwgzkfMh",
  "key10": "5BLYsss6gdygKknG9MqZWFnSs9EENHGEa5ESTfm4EeSDnYjSZJMmb62zBZUMHqPaEMDXZy4eTqWL98UjDmhkXbRi",
  "key11": "USA4vydFUWAcUtUtRtexXGK2EMRJezY36RSb42TMJzzxm8EY33uVsGijGLAANndZncbJgc5sPdwZ2uKWLtKRFyQ",
  "key12": "2D4cvQiAdH4Bvaw6dp6sDiypCAh9Uefvb9krb53v174uecBVg6WkmiNt2dimjYKMjL3dZWXQSnLsEcC41BQuPaS",
  "key13": "4qByznue6yWGreTZCvQSGZjWJQqqnSKJzUPqBU2QyvTpBXdbyf5QhmkDsQfTm5H4daQ9eW4DafMGUeNsGbnUuBrg",
  "key14": "2J8161SsTkJYDJ4smrQoB3U9P4PecuB7rLYPh5ac8PEmEvMvS9yUmehF6u6zjpWdabYN8d6MAJTopt1Xa7auqJoc",
  "key15": "qgq4qWMibYBDBPF23L9w1hPySUaADu6i9iUvZudyHJuiGYzCBNW9UWcA7Xt8BPeRjJeU7pC1eWSo5Lubkv3jhmU",
  "key16": "2w8eo6x5DDP1e3DNbt2Hg2H7RKCFRvPURqaXavS1FekUccjWWyatxW3PpfLYqrRBwH7JfMSyoemHiLM7rameZ2XZ",
  "key17": "LrqGJ3n5Kf5BxgAmHUWAwbn92R9xT4hSwr4XmmiwatFRbvD6rYmpcGDRTFntj5L7PSAToyE4YRJf9WVMgbrqoih",
  "key18": "3nfkh2BAdA3CeTpeghceYEuvywX2FDLgPBQneNm4mkfGGkJVBpH4Gav2emefTqH3vEKtZuKepHzq1Zc72tFWBWn3",
  "key19": "2V6MCTPmj7dLtwyECeFvkqP2i61oxRUNYHYh7HUbnBaAcuvpjaf1EeFez5ZLwU5qf4MrsoLkTyujrVgrBWqSMygh",
  "key20": "PUKUZ4CqKgviBAcNxdP4jdv15neDEWiRPqxQkVAUaNfdHZLeYz4Nw3h3HAUfz5zfbxF55poRkxai5tQ5DErNJtD",
  "key21": "2ND4wqWodJjC2tgNXCjnpLivpDh5a4RyVVEzs5NvMy55PKBbtTdgTxSPYQVTrCyXoqXpEX2xYn3QaEVKgAjd1xez",
  "key22": "3LPpbCMrQYwnxipPXxvbeUeqF2H89o7EL47VAyCMDdytKV39bhhiZBmEWi7WV1FiVDFkpQbdrmFEYc8dD1ryM7Lg",
  "key23": "3HuD4yGgtJNdLN1Erbkft6NkgmdwpMUc5yqv7cNh83asuhhCKLUUBCHpsoqYZi9nEgw6VG7GNVYyHSVafQJtzj2M",
  "key24": "5U5gtki3MCVwynM9AxZC1MpgoTrDucKHmobbUZbdKfR4o6rvqvR5WnqdynfA6wBVCryJfi5jmitzNeDGtzGGiUoU",
  "key25": "5D3DuY6J3Vk6z5mDajnme8WAkJmS9bthur9ZS2BedHRxb8q1ps96utUBbp2bm98NDL7BtM2tkRWKM1rJptYzQped",
  "key26": "3XWsQCH2VyfqijdxJaxASw9JYGumxnJv7awBgfgSpWto43vJ8HGvEE8GYLtcCbsSCvyiY4R9hiGUSV2VCiPnpNBm",
  "key27": "CEndBSGErRJGLZ4pmJ6czNHTZuLdeTnkQXUPdLEC8GkundunBM7JS7kVG7WVijDCHsDwBPd7dsxks6weLHhCfgj",
  "key28": "VdGptJohVndygj7n9KLjvnBk5HwCKqwR6CYAUVZPhSp8FUuZjYDpFrxGGkg76dkMk1ciStWiftFNYvmQWRQFnQa",
  "key29": "4jG6iQyt73QiJsHzN18hyKaJHprLfLmpQDqA2p3AXa7ay4zJ4kDGBBrDfxHYQoqByHN8NQXcvdHa5JYJ8gzBVYyP",
  "key30": "5ZaZB1bn841BUmqFbscxVEm2vKAzn7bJ6K4A5rvaFoTAy2gYLVyXgJx3yvgtYx7nERFSaMT4DmCCzL6Y73kiiJfp",
  "key31": "5FCYGfL64v2oAzmWxa4usAh2i7kR1G9KJNR5qJ69qPgYTCcW6VJ9g7aHr98MEsTNwsAU82jUibLQVdV9KP336Wv5",
  "key32": "4LYoNL9kSLgmVdBT7idjpFP45G44mniQdrcyXNrJiC4W6RrPwaS264gBbmgo25a6KqkJvdbAcZRadq3vJN2tQHaP",
  "key33": "HUeD1WFeB6rmiKvZKEYR8pJm9ZhqiCSN2MyFaMpo4nyUacActadTQNMNXuGtzbyXft9WT5WN82BHNR4R4WUSjev",
  "key34": "5PFJJMqN85f4cv93JdF8jWqDkU32JiwmELTjRmG5EviNy5U1o22rQyZBKogKZ5HCSuPA9td4eVzp4YrMWm3FXxe3",
  "key35": "2ceL1rXNAAjKku8ZHxR9aLyYnKtdh93rSa1Q3jdm8rCn7kGv77QVE4tiiVrZ2D8DCXFKhoeGRq315qMPaShdSz3s",
  "key36": "2tskjtiUsuXKdcr9xq47wFvoam6Rjni9G1b2GWUKMbX7uKni26VkLDjMNQzemJKsdQQpnvd6XSHTL8GqBtWLKEze",
  "key37": "8a91m3dPMgH88EHmy4eMGjLwvfTarmBFNTX9Q8h7jFMcB9mWg8o6CDHjiUkatnEZLkR53nRj7jLNJ9kBeHfygRF",
  "key38": "4ZBXTJ4ij1XV8oKf2Lv2dZL161BNcDhWEDLRrQuZ7q4o4QzpG28A5mLwHSSLFQxZpE1r3M8Gdnk43kza5PDLv13e",
  "key39": "ZSSQYDbP4WPZaQ1fovmUsE5mUKhxt1k8CBqPjKtVRgZozg4WTZAYhEMgKj4CDSBrSojz3mNGpGc1CFNJwnyufDL",
  "key40": "Lw8Logma35crWfUbq69iSfq4ZHpWsVqDD6Xg1hAb2u17bA7WR5DzeDve6TXzwg3zRwjcbKG6ULhPii8RMHfd6ey",
  "key41": "4Zep7DFNpc5WdXNngcASCbuKyRVTn5wSXavwVAoHTe3uipwHkfu8cHsdMAMFTFZVKFRvhiq1gZ2Xj2yWonyXiPpE",
  "key42": "5SvV6o2GYvikySPYAga5h3XddfPJn2n5RKCoV9f3qKCXVpGESULUpzFyMz9Mw4Rfd275srLD35QopjcgXLhDPpp9",
  "key43": "3pjQ3exYypUaj1NaYf69uK8Lpz6v24YnLRX2njfRydH9634Mft9ymWy9LC4xeWmd13aUzfuhfZKk7BicDA6s2amk",
  "key44": "5tjyXc7EEGER746DSVkijLFbhWWpEjmmDynAtfPpC3a5Sgs6JNRTPE8Xbrmt6CbrNAtFpratPodggg75jt3MNrbS",
  "key45": "2ZDRf6yvec6vJisGdAAZuoLvYB2muiNiJRtWPMGtDXvv9Sg7arwqMrvumChYdxx3rtgKTSDx3ZsjMhELHk8u8Xuh",
  "key46": "1rVwkdEyFA9k5z8Qnrhv5FE6JrJcxke4r64FXGwh4fB525UxGFUN85nM5BGtet5Me7XRrqyYPSVqPYFGpTGVnJ4",
  "key47": "56j4MqJP4XkygmF98iEkiq3Pk8NTVqa3MAA7evP1kY62hQrYNzXEcn5jjZyRgZHHPV4ezBwwbwh8BmQyo75NQrYT"
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
