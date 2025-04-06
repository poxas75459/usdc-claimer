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
    "56LcwWtFXF4r5vqmkMmWR1p99qBM42SDMz5F2XwE7KUqEmPCa99AvUEdWi4kFg31KLABDu5FWgKajZGmKXUxCJAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1kCdmo5ziXV16Bztt1uwtQgb41ZbcwPyAFUDSoGSRDQe4BHgcHKgJefzK3f4ttvKYVum8D5uwQMAc8xwPwESDF",
  "key1": "5kf5TDh9pgnWPbuZAzx47LdRL56tYc9kMZ6pBjW77yXG6N9rzvZwkv8cmxSxG8xs37wJ8vyAhhyxDfktgDg1TRFj",
  "key2": "4o9gfHTgLsd9mm61sMhE7UmQ7fJXQjX32554166BettQi7ckDD3SxRkNQ8P8TfWQ5jDZEXZ5yZdNrhvzdFJJN9YD",
  "key3": "2FBppPbJosKNHPKTRkj6WUPWYDE9nfRzqebDaJ2REtuniEKiQN7ubsh3V7mS2n75ereuxktNii7Kj57BHFdc67HP",
  "key4": "FZ7hYme8kBY7SXv9DKHFV4tqs6GxZwJgLJhG5JFPSMzTyX9CyqAfPv43Msi3U5q4kvEmYPfNon19P6jXHzRGeKC",
  "key5": "HyX4a2VK9o8vW1AaJye4RcirvPEfeuPm1eiad1GqJaXAFo6CZNBfKPw4E1GsWaiLKdKR4popT7XtpubMUQGy2fp",
  "key6": "BKQT24PFZJUvMD1z1MG4PzkdoPxHD6avMrz8fWnhFiZzbyttRDS424YB7H4ofXzYPWpmRKBMaFtw2hZQE5msdcF",
  "key7": "228MBCzLJxsUDDqarFec1FVXJWysybzBury2RCbRTXZ66QLmVgGB6GVCEEtztY4tp7MMivqQxpK6x8UHi3fhYrfJ",
  "key8": "2ixNvCxRQ1BqKVbJj9Pj96yzUj2LGkjRWSWMGtvG7Xws5YHz4qaqEyHGQAiHcqqGSSF6ii5qbtjMAopPtdmTbxQn",
  "key9": "24yykuCeKzKQ1KQzgHnkzXzg4TnEJaE8gbqyZ49iKcE2MMwZcbdrSANuAKkMwLyrLkbxDSicxh69soQGZQ9oSGrf",
  "key10": "4AQGSBXFoQLYFSavGowbuq1mUFcV4Gh1BJnSpusntDkae87p9nTsxeQKzRXUpE8RXkbSVmoHpBcoWp7yYRJL1wGk",
  "key11": "2E8Cg2W8FvAsTcvLmJJkmCHKayjgNweh8pDAmRg73mmUXCzfRqx6UntcWq3w1mvfVzhYUwj3kZYgBWAnxFyHd5fj",
  "key12": "2sE5ns1T1b5CAabcM6mPp31YLUndvKYydP8N671ECnFSddGfbPkNC39U77pVVC8k2E755LKM3kLC2WTDyNvzLGb3",
  "key13": "5ZDgJL7JA1xkyzSP4AQpyL383qSzQtzzfXHGKhv4ouM81n2bag82ZLmUjz9hYyCbxJddMZd1EPKVT41ti5zYic1T",
  "key14": "2gmmB5truPXAzixBdw3NhgkEnTLpr2wKFWn8jj8Bmwv21Mh16PfCLw7iWfLxKrGKmMbUA733Naf2hwkUMj1haVa6",
  "key15": "8PtR2u39UqLjnWXY2YJC94AZ8UeA3iUX2nD2JfTpG7JjVBtS1mAkUXDDhqTbBGkmwjfXxx2r7DCtJYZb1AGmQzi",
  "key16": "3JW2FZJVoooCTMmux6Un8orn7WU24jEnzYJEXTfehmV9Ra6KptMHFXeXbAPqSuDmXqD2thNYR41ucGWuN295JxX3",
  "key17": "3s2DMxUSYWykaeTfRM4qCxTRFdTEpN46qPuPfMnE5QNwxYLjR2PpM3HYzSoRUzMPo2A1cyjNWHe6YHgfeWxrAaA9",
  "key18": "4ZqKwiKMLfvctcuUenT6S63GUi7TUBZ5RJRKUEtY6s7PDZPuHDzqcuaA2cxbLmt4CAYXntryx5Ltng39Qpw871zP",
  "key19": "4oMJdWRZA9wR1sUHvAtWoNKw9NZYhVGt99nW4tDSiAGosf1nEAdmTHTzr8ndPvrFCBjjMbFhvrkTjXwNkvCHARrg",
  "key20": "5wsUbRtkSDT48mkrbtiTdFGSpz7XM6qcmg26cHx3HMECrYfRh5k3Qy7HGZcyDPHWLnAGTJoBFeDkS7WLA1GLtY8S",
  "key21": "4uEpncNHMhj1UdnJWEpyw9ARWfnuU3fzkgN3QK6Mvz4wRFE3eaFg4RPnbPuKxCsvMmA6YUQrbgGLPSiwNLrjX7vA",
  "key22": "DG73RRQQtp1ih91joL7XqRAWpZGm9A4G8fFVWkccubZ8vqSemECqrUR7d4H2hWWt6DvHEpAEJSjHqZEDbcZD5WB",
  "key23": "3g5RknmnkH7sVK2mz1xmkiVZooy8e7oQ5P2sjCMxGhk3QFuFbHSFtBXuZQaZyFa5XJWwA3TFehp7LrCf3XL43q3v",
  "key24": "3TQQ98h9jM7Ahmve8oN7DcC9YFeGpuM9ezXBKZtoo9qhHAee6FpGTKURprSmvd7VBTqVa5ytmSpddWfh7EaQQdC9",
  "key25": "2PtXWe9DJr56GHkgpGEk2wThu6bF4scdfnq4vTdiKoAmjWx9FkfebKZav9gPS2AB4uuN79pP6PL9hEuHYm4b56Ru",
  "key26": "BqsvSQQKZLsL6kncwurHjwpYjUnhjZ3Kun9qK6XXGKsAiQ8NNSZtGMGHjwxt9MjDkXffUzMtaJG73mUbuwRdEJ6",
  "key27": "4TcSfdMzgiLYp1KhmgGFjBcwDkLjqdZeh6gZ8vX1uoBU5RCzzpAgGAh5sw1LDm5s2akBG3NcETScbrnvwX26MmA7",
  "key28": "3zDgVq6LwauRmXsSPYH9LM8trLuP8a89bqLxmvhtyt7ATiNSHN193P7HiQ6b7XA88X4UMN9dBqoRn7oVVnRojozd",
  "key29": "3WvwFebXFmNCnmr4wWYL5skgRnz6yUoLqqg6WnZA9pTEMgfbBpHgT1Memmf7ueAEagHbHA6tSruo2h1R8arVuLdi",
  "key30": "5WbPvLiHYYmtWbZQbYhpE66rp2qMtvQLjSBnvBRcKKNPEaBhyQG9R6cK56dFx9E4w7zG2fq1Exuk9itEzF8W9R7W",
  "key31": "4rZsNF5d6c1zCXtccx3NMyswqi1TMFowrEPMf7S27edaxxbSDVGGuxud4ovJwKsVqW1YsEtX1NK2XL4uVTHs4o6v",
  "key32": "2spQS1mZTWhAyxBEqyGTwhqf4crUwbvE12kshuXJ7ChPdu9huK5jMEK8GdK9fAE35mPxdNqbqwvjQYb4teZPSwZY",
  "key33": "58Vk1U89ermju9VaLdGayY6Ee5N32dW36nKgSMQMdwBnTFvs7Bira1yvxDhUm8RpWT7W66hkX7J1nY6YEx3YHgWb",
  "key34": "2xxaJT37wKYfJs9ZzUaWo7eS7vALQLXViVQWxpCtgnVw7yMWTf367vvWcHMj7scjGA1MkLpbRYRE9FXQVWQSbLkb",
  "key35": "E1H3hCNjk2DrCcG1g6LYYvndH3n97rmuCJi3iNM51DBEDDcSdV7r5vtStZAJ731osoeofiqbQurZNtrbtpBfNT1",
  "key36": "21DyuzmGkDa9RSjsh3N2UL1Y1Unh3b7U8TpmSGKXyX58cu4HbCS8ZM3zRDKfzTDrb4eshHEMzQJxZ1Eh8MDuipZ7",
  "key37": "3iBuf12sC6qth137JAGEBZ9mNaNvcAjmL6HArLeUUuhdv29u8j4iu8bcS9nCjWTPu4u127f6qaqjuKGVastcDUbH",
  "key38": "4hziAUCep6TWmEb8oqQo6ESruxtFwkfwH1biQeB6EDEGsWCyGAmDveWKtUHr89SmFfzNmqcJaEVRA21XipQeDWjj",
  "key39": "CHL1M3MNzfULyBhKi3uRhforUbqbYLwGXpi1wgd9ZmqTPCkJYker8qJQtuw17BjREqHrPPkQMaw6Yo21wou9ePE",
  "key40": "3vo5VGydUqdpdew8B21diQPsiLki64NkUwB2vrF5edrUFxYiri2aqzccA18k4LhjPV2EA6i6Xyx9UFeNQWxw2kSj",
  "key41": "2tZbcGVuDFaKBQfBXunCgn67KHFhtUoBv38nWTJWYjDRrE4emjPbB34kQJ35GuAnQKtw4RY6HhnpQKQe8Jux34M6",
  "key42": "4ZQRfTELgjQd9v2HDrDWMFTBQJrA5xbkHh1ueuhadXdeyrYKoPdq2n9hFX9cwAWVrvWzX4V6T3SQo1oPgWqTWWPR",
  "key43": "9ebcC4oGdwhMmyHvZ43MHzSPjx9kEW886TsYEJUfYZfqgUvW9igHv65h9FxNeEoyWjjZF8utTWpGpPZqGxZaxkq"
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
