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
    "6V2XR7rcmHdFSu4noD2fvFAQ4ZUd4k6k8UePUB4a8QWrisScK2PEcw57XJRdtGr2oq9Khcm1zy5nB5rTMmEe9Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfePDHaLKLzNT1G96m8FFjhHRxceePv7Jf1aFGmEVsUvbz3YK2LoLgFz1Uas5wSXzdsLQaa6f1zznpgSiiDunZp",
  "key1": "i6wdNH5CYumoD38nWRmA9wywshTA2UbX38iDg3PRxzK8YGQDx4MXak2ixAFy3JzHFq8CgjjVhzDUeBhDRxPo8S9",
  "key2": "3nuiEGcKycY71EBHLUxbWKT5TGJuRVgAq3m65S4fpjVTASN84r8DrkiQjrYfvxqrQxBGNnSmXSzVXXQ2ZXzJ35dd",
  "key3": "2Uxf13NbuUvMZRXkkLb2MHjvVtktZkrMPwu9HjRVAk8DQCcVSjS1EgTQ7ozNAh9ci3VNTJjAnRswdx2LF3MKT91o",
  "key4": "474jMAkC7KnudRCMy5jL8XnYexQhUkwpShoAU9qf3zG58hkp6u9nDtAXYEf5iHcC5Q5XbaUWncmNPi2AFaqYvfK8",
  "key5": "qn4xaRtHdXvotgirZeDbp1c42K93rt5LbJFNxZ3rRzSwe9NAt2zzigV1jTcdPL1fAPEb74cgsKpeqcutoWWHmKA",
  "key6": "MmyB1BqXF3uix9fgnDNU1Yhcn2ZSfixehvLdh7WVrNBL2yBZqhgbCGTPSjEYQNgqBvFWshMzhHvUc3QEWYTiX74",
  "key7": "2iZFeFXZTgr7eHGFt5R99oMQYqQLTzx4N6Be9u9d4i9e2QFgh45vRjrRcz86CxE1SkvzscXUsdQE88X6y13BmtuD",
  "key8": "2cB8EzPcc5rWuamZJqNTS4wvHgNkgmoqYLidf1rPyqH9TYBQhiKU3UPmkSrMwGSQWXCqCkKQBDvzEfLJmPn6aXhy",
  "key9": "2qP9gbnH2nZgi1bNMVTx2GS83tv3KsRyQxL6yADtTUs9XZJEKb3JRXg8e4HsXPH7XJpmf5v6frrds89MKE4UM59R",
  "key10": "61fvSgbMSsNfGnRZQg3qXDLK8WJEVK5w1Z5Es75h5mtCRnPgKDdqJgeR8TSw6hFVnLg7qcXHFg2b576oqoMEY9he",
  "key11": "4yGb68xya1hFhvNnxz8jygTTM5SZQdDUjiixVDM4cpcdZhQwtLPr8ewGKtfWRZNxpDR1EoT6mqcy2FjTHgYkgd7e",
  "key12": "4JwAZ4i1rEZsAoEyN7k9fRGtiJNRyYtNLR2RrxRyZxM1qPchXYzjHLnpkbbvQeR9PfGkMb866T9inNy7A2C27B8E",
  "key13": "2Mm8ViZBoGYcuLh9c19a5PAvZXn2VS2Wabepm3MG55ETKKYtqcPtnPWC5VbwYhmv6Xgq9FEkuqPq7VJZ5oECPZRk",
  "key14": "2ovqxv2cvWLgmjSJnxzhw7QAT7HmtuCkeJdyWuhgNarh3NXNbRwiE69AX4tTN1vwLuBt3pZ8f8o2tE1CyUv8iHgc",
  "key15": "5aTYatKW4HZuNSVHNLyyhpNWpC5rfVA1wbLpQ6AKN1qGGaTant7Vi96dSZBsCspCx1FE4T7iTvz79z94VVaBe7Rf",
  "key16": "SpS5Jswhidx8gdJGs4UdMeyxJ7MoLrmyNeXkXKc4Z7FXX3vn8zep1HNE2ARKMuqf3RmGKobHybMDT2dNjcfAM94",
  "key17": "55d1kLpqDFkxfw9AdWMHu24giaewTNybZPVC3xvTqwg8dEa4V9V6zRAtXz6KFwh4pwQKrZYB4Ews9BKA39Unb4Lw",
  "key18": "4HA9u4CjK2ojKMoXCF9vF2ob2SoKhkti55fb1EqMJ5FrMqzBze8T3B3PhF5iBpxw5DmryNAmTpW7i3pxP7mnWwCY",
  "key19": "Hjgk1iW7Ze4QcDgW1KEV5AMhQcPSgRtSTzxNm4QYGxuYWibBRUzPT1ohmXfDVhhfbE9tzZGqN1uUkr6o5xMxueP",
  "key20": "5B8gp5irWGK6azGQPmHQ4zhVLqaZQ8QLkmPMkfK2k2BHhdxsNmEqycos38b7xHrAx73nbXzh23WDXC94AqvsS69L",
  "key21": "aFVqXfb2QEnXCvdMU1YXFkX9FjXanXcegEN4oy1hKaFiwgbC1Sbh8bHaWdAhPXAdX8T7jxeyofmGex4KfxKCTYP",
  "key22": "XFHL5qa7KhbBUQ4VQR5JUppPPoprweHnw6agZcJR8nMZLTCSgPoMBZh8tUPMwSTd8PC4XaYdVURQvhMajcQoDjX",
  "key23": "4xZr5W4hx4uZ7NBkGRU6BTwAah6K5seU7oCKiWnBriQzXR7kJJDJ72G4GbpDSZJvHgbfSwTXdjVZgGeFKkAXKzgP",
  "key24": "By3VkqtiqAEFp8giU5gfqvw1wnSY563pG8Cs7mHhm3ExSmESq8DsznrjQKZ6Yxfn6VPe9GaSQK1suqpJFvQ9zbP",
  "key25": "EaxvJede6dzhLQXpz4NH6y7AYh5WeBJaTn8A87CTSEdx7QB9P7BFbtGTLagHqBd48Rs6WpGwbnAS1bDpZUsNws7",
  "key26": "hhWJUtnZYThALMToKsRVYCnRUixtQV7BZnVvtN7Xe4qmdwmNPMDpSpwpmJQp8QE9juZy5Lrske2Rm4GoAspZmzu"
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
