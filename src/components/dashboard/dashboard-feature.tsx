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
    "5rh5dkrhv3je6R69tQoqWKzauoFjHWwD5DxUfQqm3sAnVATsfMR5kVNgRvYJ4k3Zob5mEPcCDFZZPMJWC8kgx1Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njQ7cjTDM94qbPjMFMMBdkDK5RvjigyGjKRN54VKy1EzZyn3LybJ7EKL6sbLz56oH3DXPK8JcdQmMEYkXUR48B8",
  "key1": "3T9YanUZjapKU9epw7SrgLRA5BDxp7ijJi9iMFxBi4MWqZrUKoYSPzRyBbjHNsTSrohDkrA7xcNG8dittTxYEeKe",
  "key2": "eNXgf6xzXNjJ8BL1CKaLF788fg7gKzvLtYpZVnGUyfvH2ozkqmdH637Mmznu4DH3rpbE2PB5JgdehZjHK31g6Bc",
  "key3": "3Gp3ygAK8H63xGAKkwLuXcVwFXLhasQsgRyaCZaXtA3mQGFu4oMcA6jgDL4z5eNTKbHeEVdeA9vq5Wn12nC4VJae",
  "key4": "o77mgz1LGhtjfJNWp4Ajv4hqp9kjtkkfava67Nc4dsSAuYDdqULPRj2QbAuzG62hEgnXinz6yghoUNRfMDc4kpR",
  "key5": "2vSckSs7fbpaHEEqQy9wK3KuzKvPoaPSsGkm7KFkXjJ9cUxSWN4ZbtGsphnN4djBaEnMGFqxaA3yYuLyawKQapPw",
  "key6": "ytxHHRQFeezF7XfHoRCGE39tJnXTByhCzRRpw8oDA6r4pR2jKTKWH9DEUuAJeopdEsgHmy85mZFEEkyEhx4MbaR",
  "key7": "5LfCh5NtRU3xU7vb2Y6fyzx98mn1yykaebqVcXhd9CFRafxwNxNyoKNnFjwtB8TVaMKdZzw8DYaqr2MQuUXhgCMW",
  "key8": "4XuLADDm2TYZ1z9BoDYpFBUVYg8jMWaaQXQpKj7yx275odYPNpDd4LesChvmRQ958PJR7wQ16ytLLMEubS6A8By4",
  "key9": "dGRH7FHvfdNc8yAEeSpTHftfLpKD6D25DP9JgbbLcNsWt4TEJxdDTbtqKv31tWq5JLQMHY1ceAPKgfJtnLw3GsJ",
  "key10": "61yi3Na9u1VsacECUWC9diNE9N1pu485MX34TgZ5aZ1n4r7276y9db495FH31xR9L8UrEDUUZoztcZr8LLm8MFKc",
  "key11": "2Uq4FouU1yLBb5525XZUqfszN9fHBDqQVKTusvdGeUvL9U7hWfxpU5wTD1DAkQs8YLh19gvK8EX6dpB3PnUAJY8Q",
  "key12": "5DiGX2mmLUsnwnvK8B6aHRtwtkoppLkWcUKGqLjFNHFh2yvLs39XVykKQw3nyr8ZcNPrEE8178v4hTDhUZoVu8Hi",
  "key13": "2HqeDuiVSAjikVzYkXboD6vvCRd9QExfhWLuc3xMuyGPUowvtUyRvThCPsK13D8Zhr2LCyexckoWk1vtEMyvLYPt",
  "key14": "5jmR9et4YG6QaJeiVz4oMBCW5JWYx6of9PJUQ7oHyvtgCaN922qohyKXEfrB3SnWP2sxkjfciLgQ4UWXtUTcKsje",
  "key15": "3ESLRwKZdCh5pFR9b1wrvzcMi3gQ23RNgPKj6j1NExMg1wtZjumUet7sdrAJmzKGTnUzFikfPzXnsb4Le5JAyCmj",
  "key16": "24yq9aVMiB2YY3GrCY9GbSrEj1NLFeohUeYzWnUmyTVYwpxnaSx77wd56YNZUxUWUvWtoNBzUd7e1WQNUEwWP9S9",
  "key17": "597x9iSqvpjtr8bn4HaaTWNHW97W8y2oitFQQyvvk7uF9MTHHz1dfPa78bcWNuB1vRTKP85NeDzZGrgoZSaKQWEf",
  "key18": "5yfqa39oUoBZJwaKXQYDjzYnx5aVzuuethwW74GsJqTQv7ajUbFWcdo1gMAVrdBJmKpKabMxCYCQYTpmwUjNWAwH",
  "key19": "5DuieXhNuL6RkpSC43PkeHMiuweM1fn4EcdRwK6f97UFmEc7zPz9jQcDYGx8n6rHyjNFhy1pFXCDLW8BrKv8bioj",
  "key20": "3KLgEszYQLq5aKiCB1iv1qT7XSNqMByRjQqTU4cANiWt62ELBadJir61VsX6E8zNQUEyJy1hLseegDzMXsp4KTJR",
  "key21": "3VxZGdEjnpi9P26KhLWJDue76tc3qsMLBWTc4rEUPpa6WSd1C5zsp4Mv2BcCP3kyH5NeWZmZRbWDWXEH2gqzDwi7",
  "key22": "UEej42YH42cHhQGSMW1cNF7UbXsB16SuCwMGmX9EQYokY5fMT7ixKYa5PFgDvFprL9mkzD6swZ3UGesA5pnHBqZ",
  "key23": "5dT4nDCrFKNPvLXgZzJaSuZ8v6D1zxE9yMEUyTW5LSzDUAYRz3u4YKGKmfxifpj3GCmgkuxCn2gfie1yWz4Bn6Q9",
  "key24": "2WSGz4si6wKWRC7bqcLzfHKeuDZXs1Mmjz5WJpoxcGYsKURxjTxGx3bZ5bqX5H7JEpZzdSEHDpVrjD9oqXY6QkHY",
  "key25": "46TbxtRXJkHwhdhjJKyTamiqE2ySocLqbPR9S7yNEXjpRxhXdMyAdhoC9voLU3Gy8p57qUrVyWbqTpvjAkUDX3nz",
  "key26": "4mwxFGbaXcDd1yVA12ukWypKzV9cw8TJ8tyupSBbvSyN96Ys6WWZMxeaK8eF38GBNM73s6QvYpTynHNfgXA5tZpw",
  "key27": "Tk2A6tEAXTuyBowZXrjuVc6o8mYAsgjXMTLzHe7RXjWA9rWVZhDksVsx6y33xprKo5Pxr65XCWdy2ZXdXSZHsFd",
  "key28": "5gDsg2ztFUMWTEAFScQaRgUiQJGQJicJjinroAoCWPNj79FXRhEna3Su43jNmokmKMgGRx8rovphEoh3g7zhgwiS",
  "key29": "23TGbaMTxGREapa2SH5hHBB1MCUhHPCtDxYJc9ExPhojXCmJdC7ZBHMYnBdfpJwHVxkNLHzKqW14vfXvrz88iPAT",
  "key30": "283cXKGNNCjkAzNvsRazZ3XWcynkTPtchoMf3pcqj8eJxGxinerbfKuyqU871f1vq3XTViVggLBguV7NNqPF24q3",
  "key31": "47YPbR3KVJLvign2kS2hq8yT2KA7mjXUHzTr6RD5g4qi6hWbJNoBaPthSKdnurzBAXiiRgVqE3VWWUZ4nT9qBZXa"
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
