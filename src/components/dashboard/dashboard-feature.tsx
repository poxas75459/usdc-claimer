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
    "eevkUtSe53yTkzGR8zJ6MZ4XfLytmXBVbaimCdiBGryof6tTZLxXHkwLJ5MxWguTXoQUaZn4ie8TiMghFnpDXqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYvPY9sCsjs2U6ZgmF7NXGxu3YnqYtoYAwQKJFsAPrBtVhg1mXRKCWqiEoSXC4uLA6VHKYjrYMZkrTjGcUZw8aN",
  "key1": "bv5jz4kC6sfZXd1n8iauJovB7pLpjiUoqCHEHEwuTzjrXFCkjRos1byyXuWjcPGkDaU5H4pvzgFiqR1QNW2WKxX",
  "key2": "2SK4fC3fHWE6prDkWLExTr67NbfgakBbejxZA42JhEyZH48wVddnbGtPhVCrxvFpRsYFodTFjrgECJCvuivhy69E",
  "key3": "2N578J5VqqnJ6eZ6aGR7nzE3gwuRv34BCyQyfaDAJWnGMTB98Euit9XjcANNJzpjhrXUXfP18XTV6xwT2ySgaaBE",
  "key4": "3tpgneUGAwg3RS2AnkLfhrGnkp79vA8K2aAHwphnDHihFUGqmRqgjpoDWAWmXNhRGRi9VLyAThU1ULeMMCy75Qx1",
  "key5": "5iiq8tCYFRuY92cPQm15Qqzw1epuUWSZCTPuNcizjdR6eMkJp6PNyiMszVLWwUZwGC44hTT92vy8S6NgMNbVcAKt",
  "key6": "4RqH2Yq9aGtqZuvfaj3uptphqFzFW8WDkUu5eLdhPkFWxnn2wkfWx6vMjavRG81HCb3S91aoPcv1EvAdRvcx8F8c",
  "key7": "48wAMQSVmRyoy6X8hEywGXPuAWk3TE4j1JcbspnGgKc9BcKZmGJRKYTV27y19kQkaUmT6UpbLCywURCnsnrB84bn",
  "key8": "21gYgGyzExcwEWsyPs3enwpRaw6Uo7GkhAik2fnPG6hcvJKJZFAxMuVGqS6DhuiDdX51BKHWeQkS4kT4P8C7tLqS",
  "key9": "21isNwcAeuUsmfHM5pqG3abmhs7tSyPmQKgy2JzmkWCwKrXFCUYktSfKUtsnqKaxXZzW8SNojUrt18SHtD53ZJDj",
  "key10": "2mnqSnj2MaZVj1mp51S1chSuow6FbM3TXAnL6AovaGhSdE14gjq7QsPcJFN3khy5rahgdh2WpbqVs7F8rVWe1cC5",
  "key11": "ByLRpafY83r4nwpfaFpRPoMMGyNUWj3d8L4BgP8LKJQ9r2V9VaW7bZKV47M6dgTvKWQ835tGvbZYgszyEKZqVkG",
  "key12": "2SU1t8cRnTsmsSgfQN1gv1Vi7omcC3eNe5StT5dKZW78ZNa4tBkiCWeJrbd6Vs2vhECg8jD5Dyuok2Gqid7Y6Uby",
  "key13": "3SUkcwprfoJwdUGgEbVPq4pbbNCcXP1GTbmNcxDLbV54gSEwaNm39xbiDGx1jSh9Fs9VFFFpEM2fDboZcjyU8PeB",
  "key14": "62jL8Y4mKanCKnTvF13e1A1dv9eRoHGqYd7aXUEA9bVhNXcYaiePUZak2qV2VBWPczsECHUoKgHqz5eVnZsPhEQX",
  "key15": "5YcwPhRgNFEGXQEEWZvHqbTVJZQ4HV1ec68LAHhJigMCiknPD3HLUcXpFRVFSc3RmhbX69jrjxGJYEKQAwzixxY8",
  "key16": "44BmgF4eU2GGbv9DMV8cHrfAQ74RhFzFV83nSjgfs9C1WyAkihmYzJXMxqVvQwbD5qQS6SLzjg3KckEGc4DAvu2Y",
  "key17": "QavZePqySeP64o6zY6kvVkgoQ5QD8ktv3dPYraFd48x21pdU5e2PEBYnG4tiJWW6aC8WvSd9xAFbDjnU6iJK4aR",
  "key18": "24q6nqu14KGxfP3jj9YpbHzfqR8SdXSy6DSPoxR76At9cnHTdLmRtgDpGY7oSK9fZm3aTiAd8hqJdXr379BqtiX9",
  "key19": "LgYLA2PCdCXruejFHhzHegYLqXwjxxDwPPr2Y64VB4yiHzUZCQfJ1VFoYzLNE575KgRvuew9rouDnMM4Nw5rH5y",
  "key20": "4WZE1wENQBQvvHVRRL2Swv5ma87sKRuB5kMCDFtbRXX39ct5m8uovFduuzVnkqChCfWYSqHjELn71zphBLWzPLRW",
  "key21": "2GPuPpqUauQMxKP4W3PLuuPZr4nR9mKKvqGnDqitX19ULG6a3kj9MzN6EjrLr38X2ZNUyA1rUFKpgL3ehsX5FM1j",
  "key22": "2tAkSptf8PhoticH5BPcYayqCRke27vteDiVnwwmoCy9Ud8haYNE7QvXnd6Jg4yzbE5ECCfZ7QqhfH93sHouTvkW",
  "key23": "45neQPc4o5C3i51r1qq9GPD9scSLdbKXr6N8TrvcRSrSAHu5NMEwMLScFhv4RfyM5ZttavMgaap4a82M9qnx6cPS",
  "key24": "4ghgiSxjH1mEKFNC6YrPrghf9UPAwGbhJRn9pk2dboR7ooiL4M4znjHjnSrW7h4qpg3LFxNvF2aKayQ1gtVu9fqP",
  "key25": "E9hExEwit26s1FkVna8Dv6pZnr1zAR2z6F1XXMboBFEenNiPFuoViU6Xgy4sXv8zoLWFHNEgHwQCn5oACbAch1L",
  "key26": "3gACwDdMu8XHAMiQnYdZMgCL5rF1T7Y788ntey2YoePmr3tGFbBWVkSSDbs33zbgAXJxqxBjCj6w5p3rtdd6i3No",
  "key27": "FNHyfYsHWr5eErDH2Mh4wjCjGLYoiHG2tpTJEg56SGGe3e4GrHkHYtvRTW1ekF7ohcXroJtKbCG86g9bWXy5Emj",
  "key28": "5hqZ6YXRxgx6Rm896hfhFXsFNTcUKEmsXqqbSGRhpvrKdAphxvSoFuHeyBr18rmaUv13SsUejCNnSt2RR689ckfG",
  "key29": "3FoamEYN1G24vUFjozNFCZ2qvGeGubuyXL7PBAC1FcixdTySQJTVR14crchKiUBwio2KwopTLLsd9Pt1MLSGsHox",
  "key30": "4VqVULxc81xBjzWNyLTjwt7UEwvxKD6HTTfdkCrfpq7tmeYzapq2rUsFy5VUeLqVJypbqQa3Fmzih9daejzPvpAZ",
  "key31": "4TLnHBp6rxKfBqFmCEZjEAkTyY3U5EbLvmq9KTEKqxvfVmytpiF7uHNmKexHFv29bHWFgGRcMQuP2BVRpTjjBTLa",
  "key32": "2ncmdojYgzYUuybrBvWo85he1dDK1qCpwVT1b5oZZJyr1f3caKAXQ7NJpFL92dDR83S3aCKDtZhwrGdBcQPuxQcg",
  "key33": "5uqB5HSk3GhSR5H7P7iRCqoWVHm34Wqvqd2u911Xo6wCznTF3QvqYQv3UCUQnLL6NHkTo7cNGmosk77iFMaSftZV",
  "key34": "4oqmeVjsjzpC9wxbrTBovjeGDTF3JLRrqpVmhye7H93j9q2gAA8kzzgupQhG7WGTTG77TXMuVR1e6gGPZPmvHGS1",
  "key35": "4FtEWnaBm1q3CCzJNLDyTvC6Esz6jrWXRkEh3EAKYRK2gP5mNGX8G9BYHnEQHB5tFMFPErCBL2zBTj2PFNaz9c3E",
  "key36": "4icep1NJ9ayspH5LKm6aJpynaKT3cTYkCkNpHas4PxYpxQvudHg5wMeytG6uL43hL1eveRbgubiPXAQc2DUr7rVn",
  "key37": "jydhEcfpLY3w57zMCfK1Z9W3xwokNQrN3vAuhLp16XVXJXmX9yUz7xK76BYPQFzMnk9t9kvQXHFdB2BUeaYJiQn",
  "key38": "rJdHympLUSgNFyB8PvqfJ6vJKzvNwuRn4TofhJyzumR32mJV3esEBBEn7978eEQpnZAqLUq9vzFoW5bBHjAh2od"
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
