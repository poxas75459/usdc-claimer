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
    "29eGJri7orPs4p9pdUFoJkhVuAghiX2zSX2peEfRREXRBhqphYyWLLT9dFvYX7z3oykvGSZdHzLu2avX8fHS2gdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDT6DESZXAzn4YQCgofvaYTkzjTd1xTHHVj1CbYgFztUKN4CXNqWAMx2sj7gdEBWQRLT6PpArn5VuZ3fMtfcfG",
  "key1": "3icHcuQKmzeRxxqncmXTzjxFPmbBh6WirrhsdZYvcqFJxLzb48aHZfY8VjVRUTJ59Xd2XAGxDzV1k79vqNRpL3J9",
  "key2": "5F2reyxGAMqd7ahdWfHanc7nkKY2vueqL1SJHdVvqkVgsdwX2vrR9NsuVq7hdjvuSdzA3GMknmuW6MRf9Uor15aS",
  "key3": "4bQqsQWtNQfJEjerbBhZb3KvLdpNgpsWhGw2vKUwpHyECrEhdP2ELaorVEwxVu4HDhW2rxiUG4TfV1Bv8PhMhYuK",
  "key4": "22mPH2SKn4ti27UJusa3ApK2UtJfYfELspkKFBKncCVqQFCtsdBapgEg7oYtmeCS2GzcWdjMVnx5LsYMdd4uZZpi",
  "key5": "veMTacqZAuWQvAzdWxKap5km49tLzURcdyK5sohuJYBJRQS18cr6aNzKEFtKVCdoTrZh77JAPkhm4m3oNg2ZaKH",
  "key6": "3hgm8R9fx35AGWSbSrVvQEd3yoYE7BtYZ8P3EthW9idtZAqcE6gZCkowxpSaEVtSUF1qPUFANd12Ec8zzArtjhjK",
  "key7": "4STxN26Rskwj5dN3GFekR2Xy2Ru91dU17vqXKCispwYsKDBmf6fRAqmtokBMdEsNSsogP3oSm83rAaZxc56Zu6dE",
  "key8": "5SgBPgv6Amg3JCk6T9CvWLzVN7vuXkmCbDP5xr3KJ8WyP1qBwbYcn187mU2BA22QjQjy55HvBsrubbhW34GPJgXA",
  "key9": "31zxqV3sV5jz4GRDa9ZWpXipy5vebXeWUjTSindZ675ShNR8ZGpD2XbudNf7RMkcYv7Dgt5iZSHc76eCpQb77Vj3",
  "key10": "58AmpVigiXWPWmsDhJ8CThnz4cvZtgcqLPC4kreZZLVRZ86XWpd4dL3F72sm6DTjPuzdKk9j96cxtpS29Y3LqruB",
  "key11": "21q4eB3ofb3qspq2viVfWt56rh78Nt8xiBtQDoyrNYqEhk5hDbWVdzMPaC2MFbnxRfn2EDtYv41A4kmScngRgSKX",
  "key12": "3Y5ie7NVkBhy678M1Qy2v7ovCiEu58fvJf7r51gC2zcjLUXrSPtpn3ELkgMsdPEUsSHhkDNbbYdeRVX7rktPs5HD",
  "key13": "2u6151mq9bcmcCQgv5Kep55m9FgepcWtqxipw6BX9Qf2P5Ao9Zp2dZjwfTjn6tADCJcsfe8ngSGmjQqfhpECaPQY",
  "key14": "3TjoLA8ia3dVNw5qz4MCLMhyMU7jLhQrpfEURmmPwyDKF35Fozf1K64icXC1sbxEXcEpuy7YxAuHjDiVreLyR7Gi",
  "key15": "5sXmymn19W9WvywUw3dMZNDQM6y341HhqoYWgWLTREL8khvU5MW4wHiWt5QAsytBR6vA66qCG7ETSA4X9eoXsEEQ",
  "key16": "AEXfh7nPvWPYKU6dhGo29vao5YXy1jvmsPmGrrbkFdfZdG7ekN9pWwtjVMCgPGnjkx2W2skLnrEKbtXwofzkPwz",
  "key17": "3b92MjpBcBXifuYN42abrXrvYweKsd2LyPQZoJgJEwC9sDE5PGcEEQ7m7KUMVL7ncuj2ReKWDGufZrw5RGW4ZTJX",
  "key18": "3HHJ4iZvAdsRdFvBA9sWpfvfnmx6WKBCA22tUWr5MnQFp8jeLKrL5QBAivS389iEA5LMGs3wMQpThRy2zVWP4YY2",
  "key19": "yodMMr4x6YwbvEix2n9Ehj7fdM46HBnZkpWvieJZJA6iduxcgYhmzKheH8W92kihhh7hZpAryiYHUaTx32XKBf1",
  "key20": "2D8YYsKPrTX216x1ibhSeNX5Z6MUhC1bmQCTjJc7bu3tiKCVG9TuUybS7TBbeFbq4iXuZ6gi4ogUvpYnDWYpfATK",
  "key21": "4uhoDkz5PZDLVguqEKoTeYrN81LFuj3DjsWFtJePJiCyenphK3R8JJSvorepmgB78Fuk6MvNJ6jfH5UN2NBqACti",
  "key22": "5fBC42qNbVExrSvHvnqgHYNqmmtUHs1YgLDqVjgay3zQwq3kH1uuG9FV2jbscDGoKnnUdBUZ4PfKdhd2b14iTBLJ",
  "key23": "35TMzNGzGkmx2uHF4vqzmts9M4snuax9kdAeMf1UMUwjgYh9Fpn7xEADnz446y3tkBRobAm5NkZYNJu1tdTWWQXo",
  "key24": "63vr8vjdc5vBeECdgNK27EBSZbaWcvSS1bPHv3WsebA11D8ZzBJ12saCBUukVBoE58fAnQs3CBVUNEp8zbgNGkd8",
  "key25": "4cWiDLn3aQmBnZKkktasKqQ3KoZQ5NjEmw1nRsgbQXRhnKJyMPgABRcL6JGHw6Skrbn8XYMUFki7YdUffpE7QxBx",
  "key26": "4uXKbgU3jcqP3DRZ62Ykej8JDVjYmcVaCb6S2dkQpjGDU5MUvyxH9Enyq24MzcmGZbAnwPcrvYwtAtprtEQyeG9Z",
  "key27": "3NuPqvnKdhSz6t3H9VS75eNkZTyPrR2sNFxaKQ4kGjRrQgJTBE3QqLDGLCVU7EFgQ6MekhDDnvrApTiM7LsSeS4J",
  "key28": "4GVLqkmPoR8LvrHnru3QUz9ooPyzA6xJUvfrkP5kMHt6QFyiQAAczkhose3kt1V8V3s1K7M6h7gthntvjnLBdFxM",
  "key29": "65sVUpqcHNkCDQ97wd2uGVmnMk2WswtxKNo6f4d3UCgwN1n5CZW3GcpxxKP2MtmMrhLpjSCAPbDbs3dLyGxnSz7e",
  "key30": "XzapemFw7DTSNafvdtbcrPbTVPp4gXzVDEzyGYEABPHTr5Kv9fTuR3QMRuUCHZGaYbcTU4fmwPJdFX98gPDWs9q",
  "key31": "2aQnMzoiKcD6ACytaeobEaF3htYm3HweJEycDXMpnC82BfbpRBfYgR2eMxvkMnNuNUFjSboTuJ5nbffZdh9FNSS6",
  "key32": "58fbHqKAJbLb18P9AYJaqMkvPqo3ZqxPJVVG1jzX8FBymSm8xQZHoZv7emUpv1fHPz6ZabnYVPvrk1LetbU5EXGy",
  "key33": "5gChHihQgA7iQdXXiBoQ43Xy8aZy5nrssBsVBxX2p8LCYqLKJkj8ar66rRJSnzaGSd1MWUZ5SLzR11aLkcs6Aya1",
  "key34": "3QLgxhBxMCU7SwDp1SdqG68WXVySAsKpqRCS95wG2F4rwBGosvPstFr97UY8wC6uUjFzyMmySWjuHQwfinm1xse",
  "key35": "JxkL8F9bWJNDE7uW8hdrYdfSz1r5NdB1Rtke7AHg9BScPKqY8tHK8oQtVzgT1Cjmt1YujeKYLo2HVvuuVa47JBh",
  "key36": "2JmjToVdYb8uqWHUC753yPWLYynPzkvT8kbUWiYLTM7s6nztFGmiqBqmDTScRAiFZQgbD49WfNN8pNpxThVzM3d5",
  "key37": "4g1VTgU7N1FEDpjtRrgxscXjwitSTo8eFTZrMJnqkFohHCtigx95roeW2R1HdenQUXMKzqRAjPBrsdERZzwvXxoF",
  "key38": "dEGN9qLHwzvLvC9SXg6WQQHc6QiwdKZYHy45cUkVgHsbVUkDheWjsWQgwzGPnDopZS2gRxsCPmWK8556p9xi2EC",
  "key39": "8ETZUesYpJKhKt4NALrSoDS6fdYXJY29efJbx7eb7NwrXi63yK55QFhefdjvxrCqDv3zbM57P5H7QoXttjLTHD5"
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
