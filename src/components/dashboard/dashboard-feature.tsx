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
    "5976KkYqgur4YtjcDMjmVHVfNncEijK292uhAdEjGwdnMvwAXQZNU4TLCcBJbKmvXj9tEuHBzqepLVGcF6pfHKEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QdV3GDjguAfVjwbzqgwh7ZLpLok5NC7nZMFsqsvameqTBxS5dGEKGkVbp2eHC3PfUeotxuR4fBN8PqVinbit1w",
  "key1": "2qG3oAsaiQP85VBQ2xXeGSEZqhsebjz7JNGVRZJ5YVirArgWcANCJURE9BMoayGC1Wi4TDitvetFPZXdHiSfGQU7",
  "key2": "41W2Us6XoTmzFrHrzL24ueYiN1AxEDwBhdNeU2AChhdpUY2H6d6zaXxoxcAk6WyPGtjSkJFrvgZwhsvy5s4sJiRp",
  "key3": "2Q1Q1C5sUGm21FjUFNJAqK1NP4xHv6M7hRCqhyiGh6kzArZtn5Ax9QYGLaKdS23LHJXCr82X8jnXycTSxgmien1b",
  "key4": "4RpK19HovBqmX2TNYSpL1A75bSPMR8rEcntnojoL9gypD7ErtKSaJaxP4UFuJTB7F7qP4kqmbC5kGNKn7EswS9TH",
  "key5": "2q1RLpcGotbHqxSKjcqvjKELSmAjwyRfVq7w27idn9b88ar3PtFjdzQcDiKVhTsZovJawXKtr7D3k9X5xAV1be7X",
  "key6": "5LBqY5vwMuFAun87D4RM1Qbp547K9DYrCiHmh6LFzVYsWvZcmtQ3BHk5ruZMEwDk7UVjhXzf6dbV59Gk4ydb9ghA",
  "key7": "4NE5jdBzJpLZpZi4GijzebhEwo6prNMyRYpWyfensibq5qkqjDNdwPKPetBPRYs9JQAkUjw96khEuVNjkE1UiMjq",
  "key8": "Rz1nWi6JtYf4zerJUyLnvuK9FbZZL7DkbiSCB94kavDbHXwrTakYwytKkkSZDqHhpLqeSoeougxWUox6aiUL9Ht",
  "key9": "4P1s3fEMkwYKW18ciNqvp1rSkVfiuQmt3nedAZrJqfhe2vjBQ7gAXGxbJCv6FnRTyKFHuREUyiTx953i79WQFyf",
  "key10": "255oCGfdhRhKrhZHgUC5mUmf2XBdN3Fv4NJtfXiffMxDMTX4RvPSBxBvYCs7snw8Ptzh2ERyrfw5mfxrHKRoTBSd",
  "key11": "2BWUg4GAvUVpCD8jXK3br3KWKRyWC4za1qTn3wyQsP1ZAh6Do82e7xLniyBxajXFqtVzocoaz3GqxgX5mcqcmu2E",
  "key12": "YAqLEZw6vXMVkbgRktUHeYvH2iZu1Xwvrf6W5pyMqzsbP3hybYK5ZWioJdtCbRq7fYbNdjitQoayih9MX6eF4Au",
  "key13": "4n3M1NmXo2GgJKcuEkmZbz5s1eSM5X7mchrzRwZzHQHhAtvEX51EEFNuwFv4e8LJnrPV6hUpa5B3fKMvpkcuBL9x",
  "key14": "3JTL9arGG2ZgszSwXyQUXbhENRYkoFdLYTeb5AVzgLAqexq5hCpjSr9Xgq5EnNUrEARLXXQgPscDkhPHwX6Bv2Qw",
  "key15": "3Yv5iGjeeoe7xkqvtU4Z7Cs3Z6H8wzgN9R5BFPFAUdF2oDkvX393apqt7hTofHkk4femC7Xb7p2pNwVm4dLutY7n",
  "key16": "cnFUXgGVFwSUigGAaTeHdZPNmChb8SbZBp3Fw9iTmynTaRGuWioZR71FrJiuUTXVkqULuGcyW5KsP2iDaNuZuaF",
  "key17": "2Rk7FTPePQCrABRFiXpaiizot4pu5o4fN37M4vtTi1XPBWusEN9RG4AcYVEzN5Q1oHe9JrZzWFEemqhkST1CvSvw",
  "key18": "2DfTxCAt7uhNV7dtUdMtLvQCcyM1F9gCrmncjW4byEMue5D5Lp6cEgXR3AdjRnhuXFtS4htKjA192ozydykW6KSW",
  "key19": "3RbBD2VLrNG5KDpDqTDy18A5wwFBy1cPgZy3xjP4CGvy8khHWWNjbrepJ4LbnGf1XbjGXrYgHo75pDDCn58d8iQf",
  "key20": "5zVaPwWfxTmjTvN6SFgVeZgYjbocC1Aj3HvA3qDsearMZ9jkcpCE7Whm4GiJUnrHzHJpAKEMbxVXvMiqE3Ne3T7K",
  "key21": "vzU5mXqUDQa8R6BiQJfpnDhgtMyA2T7WLhTbtjzw7xEbDQXYmzfPjAdBfok6P6CKs99cZiUwDYBDExRXSpmtoNo",
  "key22": "4siG5MX57xsZwT4NhS1ijNxUkVWq6LSeRz4NEXa7aC3yAexgAJjBrL7PGj3s1QyDTUZNskaPsccY4KyxLS1NKxmo",
  "key23": "4p2Khzb4qryLGJzqGGUgQcBMfV4HK7vMKhN4t86Kq9LSkeNFkWT5MemJWNJCoePCTZYGMHWiA1Beh28k6w9ph7mL",
  "key24": "5BeR11Wwwu99FV9W5s9LbGNNKkmMQCKvS4GBhxwGudU7VA7fqvDnytbC8vfawxFwLTk2TNpVHatFxMSqYJaEtzdR",
  "key25": "4snMXBYRewkzDthq54ThohyPinexLonMbZAWb5ntzZ47LV9ABvd8QpGGupyeKiTxuhMY9z9U2RT1FzsK8PUvNpCB",
  "key26": "5PU1bXLtm3SMv9UpSojt6n5YPQjwGEuiF6bhUwnAHY2Bf6PqhHuan4CQeGSn5iRL96RCeigcs37KjqLaU6KF1bB9",
  "key27": "3SF914x6FW3hsVP3XGW7KbYrSdQkQDUgc35hhdqY4sLkPYc3W8M4n8yWjEYf5y6Eny6sQZzLhEeyqiJQ9yoPRnBU",
  "key28": "5DNbTNcgUu5yfcmKz836nbQA36zMRoZCYz9MqyNZPTDwMKdBDvAUWuSEhyJJGShfos8w8fsXK1U6MwptHsTaYvLH",
  "key29": "57dZp9NZwDqnGAjkqf1HP9FV6VmCSd1QbQKuBoEPQ9vQF75wJLxZkzKgTCH62sTRvyj3AUHibn6h7ydk1JX1NGmh",
  "key30": "2YdqMaCTsf7m8Q3FyL4ircmQqTo6gbiYvfQJMcSmbxmY3w9TvejVuHEZ12rrMRthcP97U5kE6fFBPgPn683pjdFj",
  "key31": "4kkoydJSjd1mzg9B8H9bfGiTF1FBm226W7R1PTS1gc7tDe2qHcjgKZ1PjUbtVwXohWeqCyPxcZgSNipPQwNgYYau"
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
