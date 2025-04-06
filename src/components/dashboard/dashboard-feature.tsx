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
    "fw42t9f2n6zg2TAyVJJkLBcviNxuZ7gjdvK2fgAguVyWVpA5BcgnrCQF5vSKDjhgWCbhg2goUVJZRbrMkEmTQTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wJpJUA7p4NE7912v5PNFsKfQhBqECVhvNUz2sWCh3NHy1zHe6KXGLMkRrb29bY12aUJw38EbFjVGeiCTedNr1",
  "key1": "66CDnkbpLncRWqPk7vuuAv18DYmf4tVDeUqjwDaLNKkeaH7U2WTRcjdBoYWH69rp6w2w81i5mfHG6PMrKVqDHyn5",
  "key2": "4LzK5PgimXHiE9o28P5MDGTaNeuq7YDMDNXRiRWz5UHJxrZieXpNkXNq1cyL4vdYRK1e9VJsUBKLv3coeuTc1qtr",
  "key3": "2fNvZakzJLLi5sTQoedZdxFmiWSs2p8QmpkHeWWHzK4ZiwV4i3F61bMTnWyJxkY2kxiovNRyd31xVnG891FBdFXP",
  "key4": "3dVcnXsAPm8JBSUyNaxJZixpXi9xNd5V9h6xenM5JiH6D6sXG2b46o6kbk3G31WTF6G9YrFJxcAkvWpqrDHpqgm9",
  "key5": "5oD1oZYVHTiP7WsHDmKWkVsnWeHF3iMWsrWHDMpRcmgYKf4Zi4fPpvev8mHJpZVRdmtZPzcmD1j31NqyxnG6gWvV",
  "key6": "adcr2vwpNkj7gj3vYj71JNBe9t9YrzmqkqkSGXrKLPUSRLtKpMCUvsgffEPHS4EwYj4ZTUj4tqCwaogMmYJpzr2",
  "key7": "ZA34r6yRizSc7VWhAYJBtyXZDTYbHr9SKCUjMa2i7nLxwYg9ZuWKfR8oXFXeUomi35KgmCjgpstMZ883U3T5Bf4",
  "key8": "42gwkiuKgtrdhvcPbTAe4k27NDFF9HovjgBqK3FRfDagtAeNM76TJmZwMiHxRBoXBLj52tnfbCutGkt9eMr4Ybnu",
  "key9": "cSRXArZVBDmDGgtf8m6hgQh2WmqkjrQ6MCyEWnKPSmDNbe7H67hDjGdK9z7GMoqwYWVnsEQPXDt9vP1jGjNyxS5",
  "key10": "2UZu1TRYpcT2Jkz6q1qAYTxtfVLzaf8yjv8TzjFTvXirWw31NcHaja4MTfvkMEd9cGLnthNhAwADBMDAkjhwXwj1",
  "key11": "3ZDFepjXhSc7emT9ov19SgKygL2awocm5WipqadPGvCE5YtkoQNXpEVgfwKwqhuy69LSq5dp7z9yBE5q56aCaXNm",
  "key12": "3PbEwCz7wPg9XTn8PThTTtbkGALCcYRrcknh5qun7oN53DC3rrBVX8n1uWFpYxUF3yFn6da7wtyxdPYKcUn62txR",
  "key13": "2RhEGkRMJLq14JmD1QoyuFDdWgq1jqHP3wD7uCKxVxzZ8pz8deb6EggpN6Y6DXuEPD48vdXaTkuMuN2U6CZ1Ed3J",
  "key14": "JNMTGcY5nGJBRNvMLW264KEG6SXg5X8qEmVVAhPMkyxndp3poVY9qYU6fMfPK8Z9g4Qj8PrSFTF7qv5mSeWQ5XW",
  "key15": "4szfx4KHNSTL2z6ESTuTTjBwBdAZWfENqePfBWX17Mz45mRemUjsHcPoitbV1WnWFVtzSiEYZGrGqdYXtprusCwg",
  "key16": "3D9haABAjdUgY1Cs1ZsNdGmZdUsjutKre9cmPhR8L1CUgDn4rwoPcN8kB5WwsZwWNXWL4BQ2RZY57QaP9hnCY2tB",
  "key17": "2HHqFRgrcUdeeKXwvShpmx9Lo2Yy2q7MNu3pyRc4tQD8NGfyduwE2DMMZhbKXuobLvoAnHbguQjQ5rCsGGgGHd1Q",
  "key18": "DvaCmC4ohJxmfnF6XsjeAtDcNAytAiUoyGRqT7sEfxcwqVrGtjqzReM4gbGv8fKkqYLS4LH6NsRRQ5RUxhjZjFE",
  "key19": "5KXVYUnCqLSRWR9fzvbsipG293RRyxFKYccVqFF9oazxUzcBhCEoZY5Qdyh6hmc7cXC8P5ghDT5ZNtMpXp5VyHAm",
  "key20": "37dorFDzrrT3FrDzeXC9EUWBg2Bc3GdkBi4EdVcNvSGADouPQ5gRHpSGEwFQ3UpzgG3haVSY43PmehMTpTQ1qqbp",
  "key21": "3Kj4Jb21s2yYAG7Ajsb8QkG8vUTbycou38z1EHc4TnpaBzW8d1TENYP8vWT7WUjLCGMmK6AKycPpCtBnHF6AyZGT",
  "key22": "5bgDgx3i8RewLbgyqW4LxHvCQrKqAVqAGzU9U7u7qjHPKMmZscLuqrMW5ps7Evfonu2F2wnmb94KSK7pxmQAdjbs",
  "key23": "3FDEiH13ZitYLQMBw6ojHMcKakf2NQybbweMyhKgoCsaRsiJFg28LTYxaAc9kQPp9A6viLdNx2RMuFYR9Ex2XYGD",
  "key24": "2eu8FpBdFU2yMN3x6fa7tD3Lj2Mo25tukWqf4p6yizK7Y5MfEHSr7GubufxbmkPEjzWurxvPJfGbBwQMTfueYFoh",
  "key25": "3bkcmkfcJq4c81Utbd6TcM8zs7wCvGBFLPHUd2Vy49JA3m91AR47M3cD8VHnR53mz5VSSuPDuvLUeE6ukiBYXENT",
  "key26": "5MFhZ7CFjxTZ9gjvBaQUP2DKfuTfYnGS9oycZkBSRELFiUL6ymx8NCs7KEVfDPd2KUk1ZtbpDNBaxnneRXhA3tfW",
  "key27": "V2PLTQUpyjGpuAFK8wjExpx91qWgxt3awDnstnBMMt41bhRxuWTAhgwrPrhWrrubNVgDmEw4iWDtpc7HbEtEzxe",
  "key28": "26K7673bGmbej2A12XSzS8BazW4GP27UDfWdeErG1w99UtuzbWP5nzQd6DBPQQnVa2KD7VPZEihTfJPxcZf48tqf",
  "key29": "Rnq1V3hKBBWJuGrxwcoc6oVPPyZtZbsPgJXNmeyb5cGrzmcyc1tFBtRCwPoM8q7W9qai3Efr5dGUGzowrcVHp5R",
  "key30": "5yr9z68BtAM9pB8wxxp8NGWEEoiyESAUoaKHhs7jBUUqu6whHGeqNwXEhmpSrgtrGxouM8yZnC76meH9tzGenZG9"
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
