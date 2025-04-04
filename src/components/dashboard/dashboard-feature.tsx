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
    "1k6b9f9y285hQwEDu73uFuSMZTX5TvSchuHMyMS6miRoEpoQJp4hc4a8UNKqu1ysyHk4JQo87b8AKf5p2Jw3ZMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95bAm1yt5B6Bsfs9Y5AhiRrJ7HnDprshHuMdXohYm3W54XGsvvk3LGUHQj15LRbQ9oWhadTPWxQvHWvVX4KEqXE",
  "key1": "51XQiKqTXgnx6Kc8vPmLrQxCfQJjWbocX6WCu3G6dY6TM1ieoAvFjeoZvd4a8FcddfseDu2XB1YzWAfGznbgNVdM",
  "key2": "2BvTLHiVNxqevHWJjZGdDhNepqu1t4BKChBEezTh4iZxgLc4gcbKYFK75U6RSa4bSuMgFSWFsNSLgDpz8KuvxBL6",
  "key3": "BpbYrLPQUsjdFZy5RoEWCgysD6yBx2ZgipN7H3NBuX8NmgX8U6c7HSp3EowTEtpEhxuV2xf88LvhQw6zTGmxhas",
  "key4": "3fNkLqEzXsTGoCRQux7p2qTiBzKdqUvQUuGUAstjvpJnVZUm6vzwaviKJCDRs6hP4hJqrLAKnaByJAbmz8AdR7EN",
  "key5": "58Bt1As2U8FuH5CksmaXnL6w3UD1kEFEossxUvxZueYKLg1AtZxmvjVoj1gAhLZREYuLjaR2BVGP3Tx9ixtaDrSV",
  "key6": "3sBRE3LS4jCpJgr1uT1x1ainDjMrqJGg2RFfcprikYQVE4VWYSPMVtZxBQuXT9QeZJPTi4r7hWbBYvdyYyEFqhGB",
  "key7": "tbZTnq1zepJCEvvwtGfuhcgkfM3xwamYNbLZhfkaWXrpoAGmptMkMEYmgDUS7Gpcy9E1fM5PVSco31VQDNZAXwQ",
  "key8": "okDe6MpT8tYGk8pyEop4vs5cy96XrEm59sVnAEtZFVJd2vru8zPuKTTbUztK2jQVtm1AQiVMz4Lu2gMGwa5Wi8n",
  "key9": "2gKbnztKZgTcC8qK4n19NtVzzGYz3mgaWPAuJRNLepKrrwhLJpYs8DkKvbRdsdwrce58zvQgM4y4tCP3opBu3qSw",
  "key10": "5T6nuQB7FAawTLbTUew9GbWuBGvhJ3MiQbcnyKRkfsCqr5KvfEM2Ad4kGRUuGKtCiwoeRZmw9eo8UsmmvmtxKW12",
  "key11": "swppqhcNacrWGDBZ31pZhESeqg3NPajkH4qqKERkMjD1htTtQAdzb1zTCGDWtmDyRsZhh5BkcbZqL8aM5CFD8Cg",
  "key12": "3TcVm5iy85xE1ghhMUNm7oV2X5EAmJjf8ZHeXinUnRBcXLAw9BJuswF8XrT7Dc4eUwoKL7uesrAY2pSa6aUwnn3c",
  "key13": "3RjMn6q6gAzxkkKcZu4UeG8wmYpv6efbCtn89kcUMhRRz4RHAikMm8bQFpuVsxi1MxHH2Bb7FsqFJHGLxn2HedCn",
  "key14": "3NH1HFKqGef8ca9ZbyGf75MhoNmXYbzjCw1xtymgUSXe9hD9XL6wpKq6RD9dawF9wCjojzKSoWYjeBAsLKKA5bdd",
  "key15": "3N1UpkATCNKRvGGWbfFThPsDf7ASaBreowATrRokfgaYefD4umeh3hWbzcmPdxNT73NZ5Ns2KnchdqYhE398uBQs",
  "key16": "2Gg2NA4YgaeRD4vsrRAUy9GmFFXDNGwF4YyqHTWfvJ7zVriVZj3LyMCbMpvSZPtMzxTh1sgZoQwPAF2ZQfPwks8d",
  "key17": "4J1gF2eN71pC1rz2hLgMAKz4ieP7PuVhiWZvCXxmasMqKqCPfWJPa2nx4pa4PiKvcM73TDKJ2xbRvzRnd4Vzwpja",
  "key18": "2UAHzRLeXJzyZXcCSB9mqYMKA6GvdtyTHQqE6UvVm9TedGAEkBQgPeg1TocHGBZBQafPCuLKgo9FgGjRL5TpvKxd",
  "key19": "53qKVh4CavXe1DPACtUphtWwgphCFXDUYidxGdUdbaEq3gqoJY2SFsP2qRjqaB2UNqZFHqBdA8iQZMt8sWCoBxsr",
  "key20": "23sBxMrC4EHGNJvGsHDzngw29ZbBMKHs9WT4ZXzM5mn91tBqPUJxrwktLBXzWkBvERZ4DRZjpnCRNxQqqwc5S4Ts",
  "key21": "2BPaJJgUiEnDVPBNTgTQoyxuRg9tzeYx4gssxWBHgLUNPWoAfdkdxxLYMcGSXL9XNNszsZYEACgqijppoQotdd9A",
  "key22": "5TvRPWyVZGrrqxdGoE5Uhq5NxRJh4oWE5tsXbAeckTs3Zq5iW3EKmnrXpEt3ZGCQshvsJSLzYryJ6kMAqaD2sEK1",
  "key23": "3Md5uyw4m8ZENXrZ1qRiPzWb2iyBy1xR5X46vM4vmpYSUEtaEsPFNkP4xmwECR93Cy6iFdbFHfP7ehpBJb6baDf1",
  "key24": "4ZcKjZme6DwzmYzppuEVXiE115EgDRBeEQwSivHr3UQXR54aQ1otzs5UrcdcLqAh3xDekZmoefv68hTpLiXL3LPN",
  "key25": "kDRwYnNStZCaWApdgAnjGv3yCHAvSLF7hmDD5ZYLJ3baFPGLGKgkDSefV5fSFCDNJmbPQkz8pvA6FJf2fjRSFh7",
  "key26": "1211tvzxEkhsMYMV1SXZVK6WGSA9ixtkZKJaWiZp1aq46HFgge383A4xQCqgFN5PenHKybmq3Wkno3BRc2Fw3z8k",
  "key27": "5K4ZZA83o2SsfBgxi5LdGgufdf7F7qkdP9jM2q1EApmXiKgZy5zEy1faZ4HrbNhEbNkdiyCt5wGmHifS8BHt4SSa",
  "key28": "61mLWwpYmKkUvoT6nb9xicd3RzVN4PsGLXpGkpcSN8xj89Skv4Deu3X5FW4N68xZqzpwtbQMghHvcHcH8BHxAcAe",
  "key29": "4K16zesWNNCwQW5GS3ghNRokWM6C5PQ68XqAagpy2rEPr4qPpuwePE8wrdfortfAxxoRwSHSc3nEobm3s7VFUQpr",
  "key30": "3oQMNDHW4fMBLPKEjHdy1ZAk42mXTSHFutAQNKKaQoCTExzxqPJdqsCAstTCFkajMQ5KtZjcfWusGAGiwyjUjhM6",
  "key31": "fhr3LK9n2wTJspsD5Pk3xojDazLg15RBsaneRUvf75EQYKFjbK9Ugki28L5BwEtfYveFej7bJRDGX5R16ivQkcg",
  "key32": "2tM78LKN2QEcVwymm4tgxhRDQJaic2T7e5MqVeifwH49gYfSpBZTp5tBCcMjC3kia27Y1AwDNrb3xg3ziuuHvjC4",
  "key33": "XhwGEutEC49q5yx8FHqfuEjkiU7QAVGHszQ7wUNqjVBKvfBvxAX7LgD4jjWr5nyUx8bt8c3EgB8FmMtjgTywUBi",
  "key34": "2SNkwzNpkRPBo7tPV9ZnzLm5haePtLLP1987VwTbSUByqAXtJVWZd5ts3D7fp9BTQ6AXDQ4s2XLnqAzG2MSQAK8z",
  "key35": "5wYN8QTP1C1x5zpzCFhGMyR9MjoPJrXHPVbDUMF2ZYqSRn9JyVy3ECFeRGnEzW4yYNZPu7TCvKTEFFRWzqGTVQX2",
  "key36": "3RkRjRTqNS29WHWeLUzvb1K9osTHwsmr9kLGAXj5nRSg7U6GShSeJ7YGen7zJ3rQw4bg1e6kYb62qcCfXaLL3RAa",
  "key37": "Z6A6pranf4PCdskxaBHmfNwJHJiQPT7gH3JFnktkkSAjVfGFF7YJnxKEfuM4vCsNDnPXFLd4NMy7yvrPGKaKQGH",
  "key38": "yfjxqtvLfJPcgqypLkFZP7s4z7cmRE3iaibLmHuJX4AHtj3mYRHtYERRSjfwGwHWtYuJJoAhLcAJ6mfYt83yFyA",
  "key39": "2rSjWGDyvs2s9zH5PZfU9bbhR3N72bNWy1zYQfzaDUY457MKxwqBp2dQn66wahwQf3hFZCetsad8DntwRiDEnTnG",
  "key40": "3oQXnWi9kuocxJtd6iD9Zb9JgiyP8g92QdxX1XNjzoTeGGXMuQhMTUjyWpHc8wuRPkaNiqmyt4fDTnYnLx3AmjY3",
  "key41": "27o7MY4HaAAeXiuWxAJAhhmNtVD9Xm3hRy1ppLzSHtEFNqogfWn18pbHcXjZzbvoGCoLxXMhXU8SLiJPQqbattG7",
  "key42": "3PUMnftYTj1qAtNPD15QqUEeUJ2VBXFq435PrzmXVZDYA4eRRLBCX7WGc47kZgMacmSRfGqXyxBU6WunPW26cVof",
  "key43": "5yb8oVE7ydLsEiYPk96ABnHQN3wKQ4Ahcf6t35ah1gcMYCNiGfJZBTUZriSLs94guVWksYPFUhZUk9vGVjAXTrcw",
  "key44": "3rMYMncp8hGxLvtxxpGrj8fCeWRaiipz2g7TCBdKVZvVr6cG32cZbntYGknnWeUQuBdpLDbhnbbgYbP2cy4YVDCx",
  "key45": "4RVhY46UGXR1GEbVjTBUrGdwD8zXTTP8jtouiYx2hHwfQmD71iYuifsbqVKEMJwoLLBBH8xm4TEUkyBsR3ABjKi8",
  "key46": "34gYz48c2PcSsuXVPXoNLt3wfoZoNoLyPJMEDyJPmcXLuBgwVX47mVg1oqPYjGF6TGL21iV7dFDb7qvRKDmnLAAD",
  "key47": "5AXqsEGtNrBToh7JG89CdRMpRiZCb8ncysF6tCWAZYnQp3Wnp8PEwVP7rfh1gBbH7XXbgmApmfuipXmTgc2kkEvt",
  "key48": "S5tayjjxwXUesA7rDYpZzCucTpy9ASAg3Xw5Ryv1DForZBQCuoevxVWw7vpGmiKxC4sody3tXm8Ymv8jbQfYF4p",
  "key49": "2QPstDPz19mLszqmgNkD7ymWRdNS4zAkW4J8XRp3E4sNJ13ouUjA8j9tbW45sec1YmeLDebvJrnkCtbry4RQHtQm"
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
