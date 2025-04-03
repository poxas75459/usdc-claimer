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
    "5Y1qruFNcDyykHqtjXWAem5ZgZinUk5mG6tUhhTiUbSbernF5ioiaUYuWd97k3pjuasqrfgvD5MZoJzzuspdRyGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6Ew3LQMPjFzjWAcBXmxpVf99TKQfXz8uZcKZcQib9C8NtsFqPW8C83hjcWDPcvgpFU2KTky4UUYa4p3dQvqnR8",
  "key1": "2hjpmKXGyWhJcrDmwPaSXvytC8WjVqo9dRh8SyCyo8uherVC4zNCiaXrozXvupSAYYi2pz4WhR3FCSRNFETKVFJ9",
  "key2": "5h57xVsoRvr88BX5tDkRPqYG6bmhspL7uib7dSXVrbK4PEEeAVySxbQ3Lv5uxFrKxTxpmpWFxE2H7i1eMHZneavK",
  "key3": "5nHy22LkeJL4noYeA2UCUbJPiF8z4FFnPaLBhoG122HPijfbVsj6FyQvzZjp3yjuqzdK9cWECDmx4JcWRWjmM76q",
  "key4": "4V6MaEotfU36ZojeRsBNZLMg3JpgRhhdCUB6twXK5tUbiMz4F68YwuTiPMGhWmLWYQvugdAUZKg2JaB9MkZ6YgGW",
  "key5": "5HLrUoTdUKC3NtEpho9D4aanXUuyNCVLoAcHCEZFWgnLrnujbHsMfmRP6jWt3DbgcYoDjubDemx12SCcxrrDkB6Y",
  "key6": "2JwKGnb93yp811aVkFVX6u5mfNnCfP97CyXYUPsXfYTyVs5YbZ8fNmNqDiFk1rPxmyybfZCKD2iyi3bfLoqvgjoL",
  "key7": "5mAw3a1vN9ZevakzGRrgw6WADkJLgCrbZChQUaYj8VPFMtk86xrLPnAAmJ7ns3odVz9FhAvKSM2Gg2BpzNQsJaSM",
  "key8": "2S4Q3qhGmhE3jg2Pcb6WeqnScET4cNNzZuY5wzg6gQuJDToGL6YEMijbKAoaUyHkDHpgN76VXyWPLr9TB2LurqRR",
  "key9": "5kGRsy6e9iq4cGRpaJtKHHTfznMd51vsXs2jRMhhHEENES9mNypGcxz1wn1Fspct1XTjhzjgrvPUgJk39bzXtPju",
  "key10": "213x7GBGKGa7ciHeTBobVLzDaVWZ9KVQQDK4xA8XHNdXGzbDhJifTrfmMhc9SwSpx3XALptLiija6RqqNnKEFreC",
  "key11": "4nJyMvfTqDFUCwNpuYboRPWjt3WBS93M7mKnmubtTckweRPaikZCp7KUEQPb679GMo65FThzV6AoZv9TswgwiPBj",
  "key12": "2PAt5bhhPmnuQVn8nyr96WAuMqQFNxCHMQJvVJfoVdS53D5bubwPJCsJ2QBNX46XQp6jCcKbNEjQ6LYXKhs6VESQ",
  "key13": "4e3fMVx6CrsRUksDkWqWaVbC5bDFTKDwqjkJj7DMQRkbkhpCt7y5KNzxZBQWDpgFXLrCtKT5GcD9RidPx2xbskgH",
  "key14": "3oi84DZZ8Ya2C7pTdtsP4Uh8YG1egUXKBeapkpxEVZSNGpud7rD6FXMyxmSCeHcBQo2RCu6fzhtDzQCWkePnf6jU",
  "key15": "22AP4CKJumkVZommDuXQUyZFBoaexwppGVu51uP4keE8yZwSFnoawNuTNxK83ghz3GPhV5qrxxS81YKvpiTWA3qz",
  "key16": "2RxfSn65RQ4KPFseJFvB8CsmFfcJNQcaG4MEzXNmUrPqSutB45hpgRiwmFUE7HJA2RNAsnMFbHFRsuJypb45kpjR",
  "key17": "54vWsig7ZTfkKoPRJrWRt7ojUygLZGJBEZPS5qdGrKRJRGjaHGz7k7N6gy9GuuNWGhnMHYpQvAh85eNCJ6bCcrBs",
  "key18": "3oBGKWg3Abu1RGbyoTYRmGsrcpPqXua5aWCkkv3u3Rv4xTE5JizRJXcNHNgvsnV94Vmg6johxbr77LZeAMEpxS71",
  "key19": "YUAeJfmNYgTPLsHbFRTmmBKo4kwzdovVhCX5U5LRVkzs9nf2UEahXRnaH9LxaSfTSmsVMYUdcJoDy4bi3BjNtDh",
  "key20": "53sG1M2piNKddZaMSLEJpzPWG1o9Mi524svPjJApKExkD4rq5igBMrywHekVKDZ8N39cyv7YK83BkSkQMLAjJcN3",
  "key21": "4nHnQqk8yaQMUSZVscNwu9miUyjBmxZ6EoJVQFKLsPvhDwB2kQsqKixs3TLJiGScuebCkRcTYTaw7ADxdNvWHpvm",
  "key22": "2NizSVqiA6sqM8G7RoUcH4Nvh7tyjoVfgahGr15puE3JotnS1VocbfxL3MyRBxCgsGeiyW9vcmSKYSBx1fExZ31a",
  "key23": "2TZqv3qHYyddQo2Y2tFJtJwJJh2Eyi9AnG9UNF7fwPU113WAqH7p714YkPvs9mGnmDB3D5VDSsQgMT8zmxoP1Q54",
  "key24": "313C8SjCGXqqJJZMR5mbPacCEFyMebiSHW8n5JCBYLGeD1XSoarqeVjRGFJh4FR2iydXnTJRLe3dkoq73H4u8PN",
  "key25": "4if6XuDxquXfTXdhB4RN8gvpSqS99rctLjmuMgaU3s9GBH72Xg2NvXVY46x1QKCSxnNGKdvbw5MXLTnasZsfZap5",
  "key26": "2XMU5gmxndMm3exd31Xz3mfLh17krNDLqVQPBe4veuCPvcd24C7nLoyBQP3VE3G49jiwiNnLQra273nCFNiHiUb7",
  "key27": "269fUJAAmfyn4ZCDfY7chpDKpZmum1smYaqP1evBy9s1AdLpaYG7HTfHLKqsjfUcaMQXSpjm7U6MBQr8d2hxQJHv",
  "key28": "34Ese7ToZMKikJhWe2hET9JhcJdGb4WPEjYQcRSfGAHwVBKQaUmPdSiVUhjRG2exNm8ySie5Jh6rGRBTX5nruryR",
  "key29": "4CPa2ZZ94DCz5VmhqJB9bTWidrPmqeztmRujyrQerUpiJkRV7FFUp3wX7VGSDB3h7UDC9XY2dk3u2GcNyzibRECg",
  "key30": "2nfA8zu4hVmYNZfbUDXNetyGbkyZbBADp9223GdYH7hbXNmgeBahjKGEnTATqauYfXZZQCmnJAF6YkaxBVoA2tkZ",
  "key31": "2u8mZJtCUz2QUv5jvSqrNUGRQmcN6wQYQ4YeWUCLYSG1z66gvy2qd5YEBbQTLAfoAZ7SMHHqQybhBCtRd1sFdGF9",
  "key32": "5c8e5A3awxmGrJfQshUipkuTi3rLGHqh3qjqSH14Cm232ChU7cdE29oz2PCj5UqUDJvF85tmLPLEbpuejE8Kx4Sw",
  "key33": "4dXCTZif8kSA2YiN14QFEKVKRrxYFXZK9nEZGt294jyPQCv1sRikiVghgvsXCXyoMa64NcPwvexa2NE9TRkVidxH",
  "key34": "3Hru88roZshHHk8AgtBkLfDugyrgdRajUmZRemMbos6RwSarRCqMaY4rBZh3wHQUJTAxyQJkGBi9uNqSn8h1AmwP",
  "key35": "4dfKzHfiYny1TcLigCtEH64MQkjRUuz98d8xCdV2Rajp28N61q7cxhnS3wwE8oriA52gwfqKLuTAg7iPkMEPvNLZ",
  "key36": "519yZ7uPo35yU8Y2E3JM8SSZXybVjqibZhJeqk4U1DHtHW1k7fiNHo3XRADgT62ESBhjLuVr8C8Q4QQhtX5E5zSm",
  "key37": "7ZEVVqUftHyHWyXGjTtjykZSLU7xdrwDWfe2M8TytXTJDb1cy9QwHqGoSVEwwMzzAao87PBY1MkUYnhtFCSx9Ng",
  "key38": "uFLg1jpxkvJki7grHwNEU9xu7w783H32GD7p2rRhh5eUn6iHCxZVNToeJt97zSRWNNEHoRwri4KGKqWj6MgmDHj",
  "key39": "4a7z9oRjpPRsedkF6s7vtG8Qs2BLpjrSvHM1gk3xDzPu3UD4TrSVtg6TZAs64qSdFSuSxwTyjX4AmtCooo5bNWLD",
  "key40": "4TXjxR9k4NbUtY5U8kDsX51eDEYhes3z2F57L1GUgphWbD1FP2YgC86f1MSSTgxFzQFoTmZ8gKQVANssAF2WPnsB",
  "key41": "5UgAnDKA74CnqhWHHz9S4wxaNmtFZwoYbrLKrXvRmrN2yBbHq8zWV9QF5spZzLGbnghHsZi6BtiALhoFczvVLaZL",
  "key42": "129ZcPmrGWZFAfjUfkBM24d9Qc2MSe5gbXf91WYNqVpEX4W8PwprEotBBVZMtXB3BqBD5MjynYT1rx8HH6ksQRvN",
  "key43": "5MJvKBAJK3sVuKezi3J7vAAVtBX7zANMFqN1gGzgLHUYjmZokYRnujp4G6Lm4o5DsmUNTLokWbPRVY9x1jAi6R1k",
  "key44": "3t12QZuwVsChe9vsxpMwMnTqZMqPaVaFnktRvaLv4xfuvwWXXdZHUf7b6CVgPVdpVXTFPqpeje8zSYAgFQzPoFcp",
  "key45": "4AQNNmjV1yqLTpJ7SsaCYxxkFpHS6jnNFrMG8bEkNJV966cFvK9rnwswVmCFsmanvMc87c7xizFYE9BKVzeVPYJQ"
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
