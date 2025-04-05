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
    "2KEsNWbzignNxXq9bAoK9rad3Lgu5nvfZphsHnZxyU5WZDfa74KYz8eAmfYpck8fzCQWZbxYsESxJWn3Vq65JfGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5XcyaW4JUDxiRDBraguYUjJNpKCSFqsgFMQePQHNVRYMdnweG2HaWXRMuuzDknBYsVbzjogxTBwb2Y1jWQYwk4",
  "key1": "83uhLQBxTxWqF7TVJvf32J77YDXijLRuuyW42mze66jqoKZhQ4mVJp932hfeteTo1HvVk7gn5GjFPAYNntntPQa",
  "key2": "5Wy3dSt3LrvnkSqfQJrctGqUifAe9K9ERohUZBzq3F2Rnr8KfRzRnep1XgD3w5Eviy8awr8xgcPSB9dWEQsFuNi5",
  "key3": "21TLFQDPh3Ms8tkcfEWrsrSkqyxbfGtpewFHTAFyfdHoZmg5WuGCZ2EAgeD5qCNH4HEaC7nunazAJ9JwrwUhQyig",
  "key4": "67ShHfNWKh4LDM7rvhFPe9AShauMb9qJxCJDep5iEaWxVtmjGHNzpABuzVNBudEcz75kY8R9erHv8jJKSjJLGwtH",
  "key5": "scjXq3Pwbosut3FLBwgQejaDWu6weqBUNALXHc4rc4qowDUjjqWjJA8zRYEDEo8m4M6xMtwHkvJBYUVjmnhUJN5",
  "key6": "mPMdC8jpaSQRvdPY9KdY7TTBdCTEJKNoJJeqeS6tw7GgN5P9WDhpSCeGTBgxpRkKnBsHRbHtActnrtjBrP99UrJ",
  "key7": "5KM3892P9PayMgG46bt1oeN55xhwrk5ucHfhtU8M9KK4a3WtxEK2fBTs17mBmeFTsAY5zezHCfaU8UMp2aoAPh9P",
  "key8": "ozpLCa8RgZvEjYJyj8Q3cX3HDuCPnaRN2R5SRQj5Pfmu8P2MELvSjnXvoaoqwkZm9wCPwxfAE3JYtjga9hsCbgp",
  "key9": "129WZhWW7fhWQVhKrbK6mJYJLPe23sKUu25qWfpeU1rQv8mp1CtBDG6ZvqSEp9K2gQnSbHnxk7svSE9QpzgRUU2e",
  "key10": "4mKqTDDzQhcmzXgBSopMhNHcGaWnXkVKk5es4GfEA5QuFWCcGjXXr4Ncfuv4Vi4WEK4Zi45LQzUjyxU2dPUYZxDa",
  "key11": "2VtY6SNj99qL51JDbWHTMpb9GtKysaGgVXB5yPxZ7qeShpE96d9ZXTVAeCBYZK7sSmm7hYDJLFmmT6jUv638GSyn",
  "key12": "5g84fGcLCWuzfjUwSSQRNa2aF7kC4EGQD3GX6Kg7HRwnAxo1bQzutCqm7BQG2kEF8jvHYDt2qYbkWz2iTstzXSZN",
  "key13": "2yZrGyM3SYk8deJsQbt1jbknArmHqwui5iiZWW2ZmaDGXSJpK1jsQEABjgnwNsSNQQwEsPPrM7aruuhFE37Bg9rG",
  "key14": "bWSq1EKAzmFgcV82ZmEWJ9aGR3rn8BCZ1kvHEha766FLnAT4yKxP8BABPTep3FzPGy51pG3eJU6bAdGwRGJ8CTt",
  "key15": "4Q55pgWb2eZRDRCd4rnENaVCChuowY2fJYjNhzpCF1ZHME17xP6SbprVF4dWrE4YRK7BAPoZuQe8XoDviJ3uHyh2",
  "key16": "5QTHY3hNtqnnin1KL1pVQRAb8s4AHgvBXCasNRk79RrZy3iKACLeh2LWyqKNC43kYa6UmGjzShBm79LRrU37PoXi",
  "key17": "5vgPrGmT9jHafJHD5iJK2ZFHKYa9kXMjhG2wrP4y7YBnrqiwL4fQVAKd1GT25cHSonjkburbymWdWK4e6dNFig22",
  "key18": "3efBS6idZn82DPHQmUXMdV23V277Tw7a8vkpw6eVC9xCoS7MwecFvRHgpXrxq8CCvNBUoFmhsQxAWSso9ZxmQ6RG",
  "key19": "3HTxqCKTKj3HVquFm4AFkW9uKxThiuj3ZKz79s5hYTS1h68Cv8VgKZPKLEkrBHCtnCMY8T2jWWqWjXnmqDTw1FEW",
  "key20": "2KudEXEeS6uiUj7rY5JRdMAZGhyv8H6SzmJZLTk3YUauSbALBRx1n84xhJ8JpgW6man2ZUtZ4PvTgpiJeyd9nX81",
  "key21": "4Gg9QcmXWVeT2fFDvUpowcd3hkw4Q1HsYyQfq586Ze9jqHdRcN3vby7RmC4VkMbEf83WvTGus9ycKZf4Qzk2CzUC",
  "key22": "5UZpu27utP8BJnKCg2jFXXexhQ6iJAsbwaRkeYENuafh5eRcD11AxDRoVVmA3m5Ywe8ZvoGTXdSwWxzGUMQkm43E",
  "key23": "2HCc3AMcq9io2yLSZFqF3rSJGELaCSdqu2T1ZkXsUPisWZ8tQdxh4Xa57aawkhqPgpjAQV6aB4ujcQwk3PB479qv",
  "key24": "2wLgE7uphsQnaBWZYSTGzEF5hsRX766CHYLBSL8CMMhmC8VjyH8UnTPKFysBNofJDaZDhQGPbiiLUsQXVquKD6YR",
  "key25": "zRfzKnkJtjFhoRFqEfQCjBdhtA6tDo8qh4PcXFRVHGJzaa8Z2hBUoZSMXsomJ63RZc9gApXJNW8mTVZifSK2FXw",
  "key26": "5yhXyu1BodgUrCYVywBiD2TurtMYyDvN9K5h8ocVakB4EBmF7BHcwciD8dZ77XcHSzjVALJ9YqPvcTQwqeKWsxji",
  "key27": "5EV8i8QfK1hDsE4gTF9k5WwG9sRMzSg1WgnJwjZ9G6sYQFt1GfsczH9QBiyxbR8XzXojh38Q8JXR9rFgDr5HyhAL",
  "key28": "4AnG8XhYm1Es7YrLUFAa8ZqeenHmoAUe1TrDqGo8vsvq4W7iivKnKcR5roWue4QzC22yvtbLAk3thwDQnqLcWQ3a",
  "key29": "44mjfQKUAV8tCZW9MAG37XPmuboTZkbkeDxu1Ljo5VN2HDAidikoqkidTQ6WwT24QPF1DKTFURVavJ3nfaynmVvF",
  "key30": "3i9vUpmujmgr7wJtwjfMZ7dPjkWivv5i2UZiTaJctMhXzBWjUAiP4rGLZLDDEhLyEAWB2j9XJtAxabijWCLAjCgr"
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
