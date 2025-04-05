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
    "4pUvxta4y7Vd2uRa3SJUcQRxbJDC55STMxirQ7SWHzhYjBYK1ZdY7XqK46ZAL6uDLsdN3GEWP1DVnw395N5zQHxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W46SpnyT7ZnyF8pC3acsDLBTL68quYgGzBpzggrBiVS9c89acgwzDrZRZE3UkHHB3axvgRdBD6WguB8CwEp9WFg",
  "key1": "46yDnFCK6SofeE3q7C8rm8DPwEHSKk2GRwDYnioD6vJppLv24zeCXYRsTdy5cq4o8yBuJDw5wFhg4BRRKy6NyZZN",
  "key2": "EZCozYyQCwPDGHJb4v9pPodn34S4y94XMbnQyNmJEVFd6bFgC3uNCJx4aVSB5LZE5UQAVvThHiLkuDGaXdnBkQh",
  "key3": "3A8zZkZY4jYWmJmEZW6Z7p3RMapWf1HBkVcaK83a83ZmZBKhTgCoDCgoEUxibNqsJQKnLXz3x5kPe5q3ohahHwNb",
  "key4": "4LTRcBrDYp2e1wjbhczQVj5pBF23Lnr8TVYMm5uM45Z68JtPvfjUGKQoBPoG9GzpzJEaE8bSTFkCiELajfw1APTi",
  "key5": "YQvhYPkhT362Bv75bAvF3D579tSU2k61Exxax6jkr1GCnkW26Aqnh4cBo1RD6QYEkbpTAJ4aDnj6ZQYrMqXkZLj",
  "key6": "5s1MLeNaP5hwM4bvPghXvYLtE3VAYUhjFn7a8H4AuLoDpbBSYHriW11Cb7oB6eo79G76gNDACTf9NHGV8mH3MEHr",
  "key7": "5WABqHosmwYxWo66cryte26QcegnDJ49fQ7sKXfJ1Vq3zLjyuNrnNvTMBLp8oEhxikxVL9qGskvV1pcUzcL1StnT",
  "key8": "61vPr7LvZtUz18VaM3xBZiSB3VhGg4yctyaDGGHJFYQ9t4mHGQcwwByzn7q16qahySvrMdfSh5Xvn4cSNL9mM8co",
  "key9": "DygRjWWa886mBCWA6ChMTLBVeUDaDkkRXZcZMFhPaNaoCjJaiYGZ4uReeLXTvKgzLTn5p6CnhAx3DB11tsftyxH",
  "key10": "3GEAAnPw13ZfeDRRhSNSoYZAGLf1NC8FVG2YRc5V75f8nBG38SC8h22YCGHG5z7nQSTnRUmhd1prktaks5V4f8Ku",
  "key11": "3MTabKhgWpvpeAqcaJ9fzfA4GcpDyudyTVbVXko6Wtm2WPRQZHYVVkvEe843Tm1CjgDHqPh2CbfqeMXSsnbBRLmn",
  "key12": "2u773vHb2jv9MDXtbvKU6dygUARa9KT2SX7QguWHYBT1fsGEDTc7Eokd7pNngTssPXyq1uCnoK38XjHcn77oc7j9",
  "key13": "54onxTjMUr5jMYgZPnfnA5HwprB9m1kvoEmZ13tvtqntYmCpAnWPVgq1eE339yPtNVXgqzwW6wS7DNxtJeNLxHq8",
  "key14": "2bTLTAxNFTSa1MgcKBgNvsZE1DHX55WkCW8LM5AKR2oTkfqDuBfNK7sVT8hGovcyMQP2CC22tZNu4RRAz1zwc5df",
  "key15": "T4CqTdm5JKPgYmj21v99FXwDm2A13fV1KrFHPUoYp6yc7pCj4nB1ETTGRByCD1T23qbjPyYoZziqaedXXv5j6sj",
  "key16": "21xm6XvDe4wisQ6N69y3dRT21zPBJYiNHvBE82iQoufnmJoCjbZHGFZsqd1cHrf98FKkKW9y4BvukZh1QHjPJoKu",
  "key17": "2c62cvvyZgvWPDS7J2TypJHknYdjPywwaSgtMNi3kb1FmprvvjfzmRsmeXnmRT7VhrJHabn1QzaR6k7QiWJsRCur",
  "key18": "2x2maUbuhsTAo2m8tTf3KzqxSJjHzYJhzQancxv7Nd8MKKYeY1memkomPRNFrVbHvfwoBFS4eCZuA2FgkK6NSGxF",
  "key19": "Sbe9WY4DGG9AtjU7JRZSrGVnriCScDxRMe3Fefc7jWrkfK7zfktFMrY6qWpUu2qMfRmFsXaFCayQ2ZUApYog95y",
  "key20": "2DqS4U53cnrznbVv74SuY9MdSwykKcGcFYb5pLSKAbe8zchBnfuRg1VvUw2yWD9hCYMH1ZWZ6Mht37hS4LWPDaZ1",
  "key21": "4air6PwXEUD2eC9ciGGNmpHpSMnRBKQttoxPrNvVkqx227ymphT3y2aonXivh73ZC5boUwBsZXSdKdkwVPjfwzK5",
  "key22": "4FhTgiCKm1QBSTPvZ1DNCMqEaYEndSD2zo3iFFCdtJjwPER8pKz83w8BpWF7gYKwo6an7puFBvqY33dUdUntDZnt",
  "key23": "5qWziZzoZQ6fBayMqka4Jw17NykLgB9SfNpvgVKSwWgwvt3ULV6DCBYFAhLe7h92E1VtcWvfkQiYCKo9Q4N3tLit",
  "key24": "4xWMnHL7JwqDxpPWgod7BAWvkrytdTVJothHN773PTmZU1F1G9RdLXvCaD7PR4zcpXoTCEpyByZEwv71mCoDxzkT"
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
