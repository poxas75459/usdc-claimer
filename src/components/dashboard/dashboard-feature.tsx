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
    "5EBeXrhKtJFVnj2qDSf7G8FZCCDHZEvFE8YkMv9227imNWjDfP8ktFVSWQnwXdFJWpyj7Fu2ioeZ7F9zARR3G5fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Z7nEMSGQRGuQ1E8iswXJgNr8aSkb5tBZtGGdHMBHitUNwfB9nDRhmHKjoqgoBovxJyaBnjjzcj7YfJ5vnXkHuB",
  "key1": "5C9ez4eDr8yqa9CFoAmVjs1mwfz8ykhsd97ebsuDGQECvGrqgMgrjMgsnBpn5XJmzcdTGMqg5KeHUP3f4kvb69d5",
  "key2": "2Kv7iEAwvwxXfexwknKhyFxh8zcWqXcFhLACxvZcghae7k8AhsMnuQakuCzHjWWHRAk9uRxsJgZHD1sHGFoQvCS7",
  "key3": "4sibC88WQ3SF9WjdX2L68A6W3VXNKyn4FRD1ceM4nUqMMtCjd86s5rNz5jh198uEWtgDxM7dCXygwY9wVEXiDyr7",
  "key4": "4FMzvzYNsHigq72pAwRpjc2cixrFp4pHr2wh39FeCFutrFaXXphgr9YUa84dmeSVvnyBoy5CvGMg3jFhiDi7sPWU",
  "key5": "2Wu2HMFfNWXMKGMchkfT3vdJeGXL9jpiKVUH7KqQnD1ZYjqnYj4samqAnkcE3UtvXton3Mg3kPc7Y9pvxVs8VZkJ",
  "key6": "5waLfq2KkH8LgHkDKZigUx6ibgdDkMBStzjorTUShKxoPcrbLzwwD1UBMgaFsEVMuDpJTpoRNUqLMkPyxgwGBHdL",
  "key7": "3e1mahsA5LVh5EvByQLBNpHAgiBBXhpjeRhyyvj2D9nxJd5TAZrynwHEJMPNEHAjdmKfn92q9TFwKnfyNRNFSLEC",
  "key8": "29iS5NKAJgXLJUdMRSkAfZxqZnt6zLN1gHiunKyRpGvZe8bzuxTipDcC49tr4Y6dneuSf5a9MPiQDCNEVmkjhRYg",
  "key9": "4nmvBh5uvVhtA5hP4aJLTKWrpYnB4RND4fGhsDvEsNuw4VXopATsuvckYCxBqMoM7w1o45PSQCTTSf5JmrECQ6uP",
  "key10": "3ZE5vEaxBZkDsFyYjmZ1bdAwkUhnjn8NyuXcb6SFqX4A7oQYF69ZqiTbi43RtTbFmbytQHdk2jzZcjpMPLbytPEv",
  "key11": "4f97Tkd94927RTT1jw4fN821mWGUjmGHTe3JTrKWvyMqWarLgSpHgr9uwExJHFvyCX2mRVekauKBakEFsJAEeMmm",
  "key12": "4iRY573wBtKY8c3aRfRcTo2XrsMbFjvTZMM9B952b8MexQA5nGgpkpWtKghxamEAM9eALpdfjML7hvTe2r9yjvrT",
  "key13": "WwudjVeXpzikrgs6SLKTa4DLoZzMMFNAy5ahkFy2rxLuqzq2y4uFh6GBV2KjN2PQzb51vdX8FuV8hfzmN4yZBKS",
  "key14": "2Bz5W8191qyxjqi5dAZSTqPcVpYWTuG3neL62ncrh7SJdj3RRjmhhUgqf9ZvnWzBA36Lf2AyYsg57awrvAL25Fis",
  "key15": "66vAiFpfzp3efcSyXWmRNghcSpxxDZDLBwynYTw2gjwtUrQoa3QVo16riNtvKEmWXqxkhQa9SgHecphwsADpZEW8",
  "key16": "4AZjYGUFRxXJBvdgGcCmwvAV8fgi9kqXjWUKNr3cXmAGs6m5d11NfTATMGwyTU617YprRcmokk2QEwYnrqQLt57Q",
  "key17": "2gTmhoETwxDZQVzJRTmgnCpaPydgbJWraMvzRPgQHvKPK7QEhrmnGtbfhgdJrGbjqCQivFbxoggCahzJ1UcRKoRe",
  "key18": "2DBS7Y9RKRSnnpmE5G5GJpQouucMJkE9DnXNTkGaNzSr67qpMEYEYcq8CMXVb9soFFfx1NWbjdTnmcM8Aa4h4rZR",
  "key19": "YuuQTox9sfcKKaLHj9prifuEXCqsErCKcSyHpAvby9Y5WRjjxXvDcwbKbFUQv7r8fsPEKrE1vhZyMvLcKYuRF24",
  "key20": "4s8dVEEzckufPeaHuprt2EbS9z6i8msXBm47SGDuxpFKdfSz8tdpD36qZdKiGedXrnzTbJTMc5NzgXKaRVekj5Ng",
  "key21": "5WAtMETBs93Eg2M3gR71Fm5WP36atzNbV6X64LFb4tyJJ9v3NFrSnWY3zkWfZs1UaL4SyhwRxQ2H6m9ZKqwWcF1b",
  "key22": "5K39zF8zTigx6DLx5J4u8qWDhkeqwJ9v9GziwaTejgx9PGzNe73fpdZjVkx3exFgJWS4jX5i4NpK2KiobKUH7mCy",
  "key23": "2Luj6AN4UJX2ihdXTzy23DaqXiDv984BNogRf7mra3jUm5JqKAgHjWVNY2x1pHe1ap1g4bMsvzrpRfFnjhFbtNBU",
  "key24": "5oMAApQnnwHsQX2Fu35MwYTMg66j43ZnBPWMjZ7TsRtbpwizTCxsBpeKLJbnKFHk6X4DQfENUFAG68evyWGddBG2",
  "key25": "NzU5mgtPE7FLhZ5S9VWhW2WR8fZ7XwE8pKMw8AmpGPJdmJBbT7UWgP46LzBajSv4hypshaNorsV6KXz2KBkqyuE",
  "key26": "4xKwkHG1W1KJi5WycLMhNgQmH1wELjyvvNdExVE75xgNWPj2wQcyyZYG9YhLzDBFZSHip2wWPzPjPsYwFNnx5aeG",
  "key27": "4cdyBFd5mat4Gmkbj2YLJdyLVsLuFRMT8TRTMGaSc1Gky6dHHB1U5CzRsAGoBPP4Hnj8PY4jwWbuNKVPATkWatx4",
  "key28": "ZoSjhyxtrJH2H2P4u5fxunYDwZibMdSmGHtdymmyvPLrq2ETTHy6qh9mbQr56S3FkdzKXoLKxLShFocCbSUhMnW",
  "key29": "8dQbHxEPchodsRPzfHyd5Ln2j1gYUArmjzXbWHrUdXvj84BbzV6dvNuqkuoF7JGFkW4pje3UFe89npd6tfh67c6"
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
