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
    "tsBjcjFfS9R8ytxFSrzNqgXWEGzz4vP4j37j8SarJKsmrSuWxkhc8xyurgyV9e3yXRtbLjHmAekY78EWscnrZWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnTHJkJBED7s6KGPVu1LNEzAQo4jm41UXz4nuK27GHkXpFx7CyHW46DUMe2VT6qmX7ZcmJLmKFhTUZYd6Xetros",
  "key1": "aEmKxqsEZGddMF1WvwwmniywpQgoGp1WyhxLCWpAY5N9LmcG3a8XCgmme7PVU9LRMAXm7Jy6EWwtypzaRQzTCsu",
  "key2": "4jEFDsDmfQhD3HwH8XriaHhdwARjcyYP7ju69zMjxXshFfvfmhjGYB16HWdBzbDHfLSENZyvAusBhYoqNibVwua3",
  "key3": "3LgHz3ZkmpJBYrLYS8NKgxcjMFkAPwiWkSyJCDK7aQegSgtG3wGh4Q7aAbWshEDzRq3yc39tFye44NyDUsmyYUqm",
  "key4": "2hW5CD2CwEZpcZaBQCLLqbVfrzjZry6tw4G5duqXWtE5zzPgZUhY2syTZLAmiXzHqnn5FbsMtyodjsPbYzTo4DM9",
  "key5": "5szgj8RaQ4piSz6fWfykfkgVkYz7KLd8Chbp3GPSmDpwc24Zm3K7xFGCi6P9Fo16sYnZmiYWvmrAcmdsUqbxquK5",
  "key6": "44xBuVVMk1Ev5t7JH5kHwudNqLmWtWscJdZRyrt7CGVWzpfhg2SvpLaUAkyAvZkiTySkRUsriyR4QcRcFHh7c6cT",
  "key7": "3TknqUzH9vbYrYYvrHQ3y3cvwX7uReGSXbeG6unwCDcCEWjBhG1R7otQn8214AUnV5VDp2Wq2X5yQMLQvYjuqSGs",
  "key8": "3MrnBH5CkPJzMikubngTtqzM2FU3EzpFsN2YP1EttL5hb4VkZXEj9EjW8F4rZ1pNUzVZoBZtHMpNbe3an5AWBxkF",
  "key9": "5BKphh5foX5ipwmEnejAjE62AMWT9MzNYzBmFCNKM2usRHZPAXLwNkFapMSsLFxRU6E5CcgVwMh2kyh5MrG9tLyx",
  "key10": "5LMbzJuuJfieee7xZNMbRGMMtB4CNHB7FEJuUQD8ZcX37kjr8t83n2N9gVZzVW2MNBfTh3PQ3aZjVcrJ98LiGpKL",
  "key11": "3KVFnXAoHoutdjcSUpyBhcfPG3GYsFGNX1dQU4Ry4QKu9FRcw9KK8SHTXMdzCQQ4PfD6fAPbiepqtAtqNzNQa2eb",
  "key12": "2QHg6ajaSukWoziAqgX7tp9dQHiiZ3VEGKpmCQHJZKSCP7TgRBkZd1AAFvrjLWKLeWAoeQhba5yWZ8bwsWAa7j1D",
  "key13": "3ynaQUj6MR22juXiC1i8mBH6SQ8ghaEerNsxMeA1NgyfSiAPQAVgn7dWu4c9FKGuCCHdPbzBv9ciaiZgo5oHQU9Y",
  "key14": "2CH6hNKGRCihseYWjYhvDUYA2gxPaqz5wSH5ece1TctuqBH3M6B2bosgsuT6EKk6w5jycAttnxAzUFM9nWmmPhdz",
  "key15": "5w8ARzg8USPzY54WZmm4GmcgDWi8nCitU921ubMYVf3q7uqLrX8EtiyJr4LwP524nRefbmsQ9mfN9WX7wnNDN18F",
  "key16": "5A5CfX3U666xq4obRUza5nLeorFfk9vjfyfr9Nqhfc6xuhyh6JFCNyJfYaxLhqBZLuCD9qyw2SktpnWF2rWTm7AF",
  "key17": "PkK2nS43uh8gJYfrRkFBENARjfwKqYXpDmEWkiFqxKcyEKo3vt8SRB17Tqh3AsHqyszQuqLRtyyY4Vf5xFhuWAC",
  "key18": "5PGYpisHhHnyzpgw1EK1xoUJMbM5FqL9RYrnk9QaHJSWRJVu1Sy55qQZySu46ukATM9iEhnJytJq3kdxJFpk6CQh",
  "key19": "XNmDhwdmjQ9xh29tfdSi9hdmV3Ct9MCC2Bs44efvmTrW2T3KifLsKhj1Boe1zrinNCMFUiN64AEWf7SEjE7VpVT",
  "key20": "EugFrh6PLeaFVW4SpNXb7aeQWpfVQ7wXJR1WTaqdvTQCadNua2VAGkwTK1qtSoWUb8yAMvXFzBZx7z4JAVbXzqT",
  "key21": "39mHLEoAdKBvoQ11rqG86UH6bp3oteZdE74t65v5ZmCTkazj19jhnQVAwVU6hUQbp3hSf25Wm8nJ1yPGoq8psqXx",
  "key22": "42skghyfhizb9PWquWoPhXwQehBr97tiAeLecfdq26GB4KGunzNusQWpxYB9QnmGjTDDPgLFXxetWNWghTpZSD94",
  "key23": "2hYeztSpASxcs4C7XLAEbEQMF9vqc6qAGJUNTXqY2Q8issuZXLCTCm1pGmtQXj3imXCrhsjerht7CWMvFLBxiBCN",
  "key24": "5wUhbZP62CUHDERBQunrzQVFwL1RsUUeSsJR1cRm3G5ec5s3WDEYZFWzpPps8H1W2zqaf5mjyn95e6ihAmDkByoy",
  "key25": "4HLYkdWdoCMWjkQDk6nprTU6iQDGEzs6kSMb4exX8zAvzTExwGg71qCKyDbQ6m87Bs2cy8hSSjWVq7hgq9fpr8XQ",
  "key26": "2pMVPbxEseMMWrCfHn98RPP3ggVomE3Wkk7PBrg7jaFD2LcyXVpRYnMSSWVkJdUmH8awqMQZQpebBHyr7Dr5bAwL",
  "key27": "bjjd1UKDywZCXBsuAGN8BjNwxumrzw41NvUxJfGTrdby6tu76pKsTq6XmbnNSxkEepkCtpDo7apvWmmdkcd3XGu",
  "key28": "4ZL8arCb6hJxU7swDCF28ujbGbiSSJns77gAxVeU6oe6V4r6jfaEWpgzzNiMBc6ajvk5NdLQ3trQwkmYCSEcUKi",
  "key29": "4SNFEPaX1sBJcYq9SzT3dRWSKqAiAjWcTFgv1DV6oxpR7gLPGGiyvtjdwYg2euUh2ADV6tAq5BUfabVu3Bxo1nQC",
  "key30": "rX6skG74ruqh4grcqMCEdnQY62kQQ9o3EY1A6tgeAwQH9LzLLcZxAQbskn33QtKVMaDA4SMonJo45NitnR5YgPm",
  "key31": "49cdtQik4nT67Ch2gnvzsSL2jSP9bzkSL5ev81iXJDi4bU3L7Nja1z7eZPDeTJ8RxnLZjwhc8WyrKg2ZBFpqUXJb",
  "key32": "EfuTSadjU5HetM2PtxFZzzfZkfcUXUF6UtVP1zUJASyL9G4DyDots3yfaMKi7wkNV2K9TjW9p79gLxQeYtuLwzC",
  "key33": "4hEooT5Q8mDhx1eLSBz8Gnn6jVkg3BaGuKtpvCuRMR5Mba5jSpiXjTnQJ23LCsLpBovNYUf3vp4pRDJUtXXovBzk",
  "key34": "2VCJLUB3XgXkMoAQvbEnKpv3whZTMjv1qR8Ueih8rJxSuRwXXegE8Kbf9NchawxFowrpRvgtfKTyvYjaF4TpSUMM",
  "key35": "2Lu8nvL2ZisNzjdYPXNj6TMeTR9oUe1RTWdWuFvUnAkgWCDo3jKZQbG3eWSpqubd54hT5XJFxxFLCpQC62u4FDrc",
  "key36": "5K6SSdtPQ1njqxHy1an6Vqrn9vRqz56stKweVdBpKRf5irCQRvQpRKPmSH8F9aSzhcJpezNH76gwAKeJLiRrmZ4R",
  "key37": "2AJHzYMqLWc8VQKtpWQp4dPXusPsrF3yjQLwTTGBZzxRY6XnCCkEiYDJb5GBCymqZKzMDA6M3Kd84J2gFUDVLjv1",
  "key38": "2qENSSbsfZ4zAQfLPFqXSP99r2pn5MxRp32dmKbZAxaxTCQuanBebMR6ByCt8oCSR7apfzgtt4tgH6XEnsSxr9nW",
  "key39": "3VqCDtr2oECrwWBPxAreBQHiuqJWpGZUyiKXrvZvLjzouGDWU372dsgCbNrdJ5MDSfNc26hQuZhVEbeGd8nzRW2s",
  "key40": "5eckQfXxojWpxUjiVtKkwPxSJCAJgC9xJiRaoEXXRMnX6E8myjanoFP1VmZVANGM8fuMGqVcCZGtJzQhXLipGopD",
  "key41": "5rvrFRS3azdF78zzU3jPAxokDprsNG7CM8xzExcsPLc5Rhc5NwrJReeuCZ6HDic1cARxZhkfw3635T4xEfgW2RgA"
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
