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
    "2LThyzRfZGaEgpRHykqRFYYxFNQg2brx8XhY5keH5YoQEBouhVp35f6bNunj53rTGp5kKBRYf5pn8SPPB7qDDwjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x7Lkhrsn4o6SnYNx9y8FfsyoingToeEfuAhWBSbiLy7ZsyYr33FFZasNWxi4yYqe1mFCprcsUXN8NQJZ7LNgCVD",
  "key1": "52tRYTU2wnmYNZoB9r3abKmE762M6Zj4muuzFP5M1MwYz9jCUXzwpQkCrTawsm4YjNWZyFqS5m6bXkskrM5xrY9R",
  "key2": "2C4UNiAShVod6xRXkdu96N1NJvgLRYL1MuzNAG3iVFX5ZAHrzMBnWpmLzCMW68VA8ZKb3hM5kAwx7JrAoBeMhpaV",
  "key3": "5BhWTM5LnxDjvszKc2H5jFLtHwFjgBQK8Cr2hShXX2aeNHxajjbGBuu75ig279pdB7ybmGNchtdjtSTKxNm52LzH",
  "key4": "2dTtRsUco3rXKvwqUPYTjowZAHycqebwXqq8izR6GUAnsJDbRY2gG4hULJuk4pNM9SQX5M6TWqTEXaYvFE3mUfM",
  "key5": "5Cw5KZ3gYQvhWxnyZmCBkjXHDWP55TKTrWmGHdNgU8qzp2QTFP85xf2bbDjdLvhSPzJJeW21J2jYWbwe9QuhDhSx",
  "key6": "24Ve7a3kZ5aWYRtVKWRBzwsgVLMrrdrLJLV2wwyKjj8bRTQ2YSPv9bXyn88caUTLJy5fEQ68e3Pzg7NYQ524C3sw",
  "key7": "SbwY2Dwp92nDZkbiK6gCt6Jp8e1bqNhXfwnvFR15esLEQy3UJ7rwjRZugtBkoJ5cgD9btKpMb3YMCgQvKBXnKUG",
  "key8": "2PEUHYat4JvTFHbrfUR55kStWrW3tPci7HxQtceU4oVqZaSu93n15Ta6g4PnFQL6qBCFzWFmgpekEiPFJbQPUc5i",
  "key9": "5L4T3YzsjFWLFD2JjSvavzCrpAQZjr5SibRqurkT4tJ84i2rNGuui75HkEzhn2Y6oUEY82WvRLLN38RtDeztkhen",
  "key10": "2LNaRt6ZGvX6c6fAqFqchgXgr8xhv3WUXm1NvbuWJD3edRzakgPBvbfNsHF8csM5jEh1aRv3Dx9dGSJ9NKnhmbgH",
  "key11": "5iqwEkgXPmk4xcKev94eZyVKb5zpdEcPCzyj8fYqMeGUFe5iZj76bbGURDeyZQ68aKGebL9tbc6BPFHJrSpA2uMJ",
  "key12": "3ym4LhKrCZdsA8g4vtYPZM4kCHpccAxnariqRaL6FsWBrcew95QmhhxkY8UQZu82YYhxo6BkohihbELyqZEsGYBZ",
  "key13": "3VZFFXA71hgwCjimNVsWUYNVaAPiGBwatnxCh7uY7TASgEWHn6boDbnsYyr1PJTLZxBHEnsv2da5mdUSwsDng3jF",
  "key14": "37muaJaiygardiSApjJ66nicS8BjcPo7Wf1jfU5tgVonK7JvyvRmpo7CjRHaburSabxQivkSYp5S7HvWJPqKmKpT",
  "key15": "3k3fbSZ948Zwe3dgBgYYX4CwadsA1JfMn5Dkbvm5NKW5YCA7E9eRqHEwSJwsEECVA3THixRtod6dvXz2pwNEWjvB",
  "key16": "4g2RiTqj6CobHNUZFtsbPm2JEPgmwTyfed4smTBtaLafc7VBNUuYDbErAR1q9MdL4T5KuG8siyZLTE5kQxwZfEMF",
  "key17": "4dY969RFVLo9bgXtt7MdeNbLQZMB3HKZnSkbL5YEdo4NNPmUBPDgX66kFNefg8UBzbzZsddprQa4yhEiN6jd8ND2",
  "key18": "Qm81kzZ8R8rMkecvHYnNy2c5iX93tRsQzf3nTEMHST8m4K1KbJgduQdMuqXwCep4RDhKrFiRZSrFcJfVQYNWkCA",
  "key19": "23GgppRoHocRuAGXp8EtHNiG6wnnKV3jq7QavH9zTshf4BP4PRC1N7dNLtUuAr35cs1bHTzBPNWHYZSezwmttGvb",
  "key20": "2oVb3fKWY2eJqiAGU3H4kVrqexsYySYDQpMdxBL1KbCHt6FTboapTV5xeooFH4oytPgeZXrPwTdBZ1DEGJVS6TsC",
  "key21": "4DZisiPdnB8VjXxrWd71whwgAUWntARg2oNpNHGgPLnciG8gEHPiqMSvU46zqyTTjcG4g2kkFBvLFxZPiJJsxrux",
  "key22": "4U4QUFTqnz4a9f4uzazLWwPhRnnxqXwqFfKfFF2Ef5rSW8aaomkHr9cNzgwMxLC6Vy3tKE3ocbbE1RLaotEegLzE",
  "key23": "2k8dodjCQAZczzqHdng6gx6mEBZYDrmvEnqsy7FVXrZSmuF6L5wUex7V3bV8o2ZobgsKF4yjHo6zL2NXQc3675E6",
  "key24": "2DyXaoMX6F1biQt67mWKP7JTSTABjHkHMuWQgjhLda6MH29XvVZQxnvxDA2j9XemGsZ6CEs4GU5Wknp98b9DKgFg",
  "key25": "4mRZq6c2mXJFyuYrKaqG6YYRDSBx1L1ureyxQcSJGgCeQokwGhgFQGVCkQFE68p9q2YexnKAyzG8sVLJ4ZotGjx2",
  "key26": "3nybhXkgPLEZUU9tNpz1AHY5TRFjAwTL4Ffo9RLxUYJ9Nau67yJUNpLjBVKPpu2Tf7Em96fvGhS8K1JFGkXCSH8c",
  "key27": "3wEPzvpAXUdw2iESVrF8yV55hMdC4EqGR83Gfhbzgtjv7MBe8B6xxD5UdJKojShEr9mLpRvyfM6aGJjLmtqhV3As"
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
