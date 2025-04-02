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
    "64vacfEJJGVB4yeBb3z5kD2cQUfm74d5EPVMzbCi5R118WGdDpzdd1RQoyy2xsoPrC6PhoEHTiT221PTzCmkVn7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xT9tiqGMrUVbXKNKkp2GRt71YqG8rF3EYBT84adw4RtLKnfAMUUx9P3ogMYAiPM643MquvCSXruYLyezuqCu2GX",
  "key1": "4kUYSBktPfaTkUu3woNa9cqtevz4xwm9qrLYHiW4veYWzmWW6ht5zSxirzn37mgVvzLeicpYo6LvYo4HWutDqb2j",
  "key2": "3WQf7TCCSAc4PHKDBBUKz6JVzhKhxkhD7u8YhhDCNG59Spyvwsnz8Z4g2SbQ6c5rCbzUC5w25i4h7NRtC96eHYeu",
  "key3": "jEPYQZE1PsXTaXEkB9d4deM3hWjYn7De89ZwJwgr4gwPT7zWURn1nwKr3YSq3eKg3xUFmvgu1oiY3pmqYjEhbGr",
  "key4": "4KQtpo6K8a3ubRP34gttVyrkSZhztusF1HA9uMTNXWFdMFkzZXY4fzL9P1KidbzJdNBzMgnatbUpeC8cXFpL8wez",
  "key5": "2JkP1rSkoD8p6gkTsZHn3d2FYJVANMWGThDxAKd3zQ5Tp9ffPsBWDErn9yCkyh25urg6TmsTwr2dmKiVpeaLsrP6",
  "key6": "b4xWVkUddYLhwJeJnV7EQ4m7VUSLALBMTRktLAJjDP8giNcsM5xJCgAEbdr8DSajBRXsMbHpjDFcvLwku7gWo2g",
  "key7": "4hAyqSP5new4pqi3RyeCmsGhA1yCvo9ZvPPVdY4Xdsvyx157ZBbZknBvkDtXnSJBx7xSJADbF4v7pqrjkvpPRNnJ",
  "key8": "4UioAXTmpNMc1U6ZWG5WD644VT2suv5r6SEEZkYPKxY67xHQXNh1kLhvC8jC6D4s4TxXZCzCMnDLy1vEsqkSPY8T",
  "key9": "2dVn68DsdLZ53DgoSbmZegSch5KWwxgpzZ5PpriFiGfWMZrLt4GVjfsQ7HYwvVFyt3CCHd6pQ5bD59SD1RiP8jCA",
  "key10": "ZqgzNWzZiwFTRgteoy9YXrbu2mERDxxgx2G8iwdjoL6U7tjEJkpVtbFajtTSFmPcaCtHwGFqWpaRSrmzdUsEG1v",
  "key11": "zNejUejfVwjRZFSJcTwdJfivRzFva3w86VUEetNGXcKjLKTBjrYDUd93jok6fZKkUPoJqXxZ5FHPrLJ2JD3LkgQ",
  "key12": "2mejmUE3ZMtJZWsEccxDaVcFMWnUfFhgebhWHv8YQmS9fURB3uq9VkpZD6a5WMkSjXYywfsu4LnGngq18V8V8eRN",
  "key13": "59FidbGFn6jM1dDMbjfxUyRqZW6ZBSMVmG6Xia6MKdyRkeHwFZgKvEsMDpJMMAnC9EUJQmULNpAkK2WYYp9K3m8u",
  "key14": "5zEPDFWJ4sunHD2P2YVLVTzASv66pjKXYbWPndVLffBmULJzBtKMUfsTQhkhtnA3wQaU1ynbSZsmMFLqYfXS4j7h",
  "key15": "nf6uEPv1ZqC3LGmkF9QzUMJCBDQKV6XvJQzR1i5oM3eEX7rv1jzbe4UufYhkgAcr6Xe7eykRfbjeTsKXkxkx26a",
  "key16": "4YXgRywoGiH6sUTScKwSNiiR5vZ92r4366REKEbhYkx7DbMGPjRG8SXfAr7R8RdMHVDHKrKRPHKMURHNSq8itXt5",
  "key17": "57aXRkmADRZbvSxUkT8w9Vux1Xed3wzLWfeobpvxBNzCGbnsnmPbMEppVNKjVwxF1WKqi6DZM98RJZMKHtCwq68S",
  "key18": "39c98AVKbQYvquL8JZqBHyzBQTWiSWvbGrejaBTxkhqQqjJUzL4bqhjGrkM3bjJbVQDUrmJjsUpGCmF6A7RLX1iP",
  "key19": "2C3Lwagpsz1as9rJfHpFoT2f26zPExrABdiHm2tkYEfPUumiFPBw81TseoHeBjEkYF3qQG6ajdc9ZWjUdTBy6BvY",
  "key20": "5akQRSrigea6zAb68e9q6DL2bpxirwTVE3yrZ7yiyiNGVjucLHL59RB7nWf4o5Ld2SWuWVYjtrYj1dEEMPdU4rEM",
  "key21": "46aXFLsnCbKjuwcYmd6bo1RKfB83NMK5ra32FH5ha35s3JM6nrpeoCgGWpVbSHs67JYftnqyuBrp54RwkAKf8eMR",
  "key22": "2V1MdztvXgSgo9GZXuBK2ui8WBWbQDTeuqU6itsbi27GaXJtLYcH9sYUGrexL1t2CKcasa4WWqmRdQ3NhLa3E1XY",
  "key23": "J8YiVKWf8ihcpi8LEKURxo8LVeUSYh87LuLhov2pAtMChbnWnJATqdK8fYaxGhPfwNWrCSR2qgkvB39xS3NMBCM",
  "key24": "3hfVhSSGpMUKGHWjSt7jUcEDrxJ6HtHE8r1dPQQdYiSL2z3NpfwdTZperWmDghn7xwRHQVeuxJqBMWr7ntoTkNQK",
  "key25": "3mZ1ASzsrZjWz7UaJGweCNKFfVQWgXcJnVs7NKKaBQFoe3jzSCXmEZzgJcEBoZyF4NwKXtmKRFRnQbHxjXbNQt7r",
  "key26": "62GsxBzcNeRoeJjJKRzmsDEtoXejLhVxmpRiSCX1sPnmGWMucgfNcm7X9NSn74tYuib8hnJQTjXZZ4WQL2fAonhQ",
  "key27": "5tZFH1NE21G3kUqA8BKAH54y5F7RAaTheJz8NLYyVQoos49mX1M4ourt8X7HLtFzH5qTVYJP6JgxUpVKjfmD3uNL",
  "key28": "4JAGrwexuW8ygd3EnLE7t28wtR3DX1Qd5LH7DBu5xxSvwHgMGkdZRCuTNiEoXvygk5J3xLcweySF2auWPyGFW22v",
  "key29": "7CnSTFEUBDMMfLHpHZcrqWhmegntk8ZDsUKUhA6RpAXD2BsAJz5ShXwok6A78hWWh3ngpNZskVx7zx2jBiVGESr",
  "key30": "4L78djrY9FxHwsRSZLq2h2Hc6AvMP1ppHK7hrjH7PPKrYBSVCHhwjyj32WyqKVwussySr8M9WQFeFb9gp5aP5Zef",
  "key31": "hUgD2ggd7GNTeSZHVvKVEP3Y2z8xQCg1188A4CrGdkChy8GCqA7GktWWfST355MZ5NLmPSVsVwX1AvqW5YJTevh",
  "key32": "HRjsw7nzjgQYGqagPAGTrSixEeuAy6mRgFpjzAnuGGtDF4ouEBxCRQhiVsLqmXPfrazN46xMeQfGUz6WXF56W8t",
  "key33": "261RNJ4Mz8cFpkoBNKacRTwqUuRJ7vhUrZJKtTyYuX6zXsYqjoZuWmhjGPBUUHPDusjwjfdxVvFH5Bt5amZtTrPk",
  "key34": "49Gytd1PsWCZ1Q1n6UoRoqEwNNgj9zNvzmJdDo4wAY2u8iKJnb7XAp22i2gri6hhJrdJ1ECH674GXujRdSPfEsLU",
  "key35": "41Gw5PthP79ZdNLeEkMiLVVuuQSAQNx2MqcD1rNL8qyaN72BUsXr13fFL8M6wtrqcFAZ4QpJLYJcpxqbBJYo8zSH",
  "key36": "5r6Jrn8S5Q4chEk6hQfXrHGUykSmE16DpjW6Yoezetk8XHyaiffVoRchvHxtqL9MVKrtm3Lapg8uoeX75C8a3YoJ",
  "key37": "2qQmKM7Kd7hW1gmabN4qyJoWWDvTzTt8KhHmBHjqbPZx3gAm3U2wH9h4sUXPHKcvpAv83Tiqj9HgdxjGSN9utJqD",
  "key38": "4HtkfmBKQDvwQ17MypR9L7xR2Q54hF5icDHyHnX8YC86gqRJVSzUyCo5xdkCXJaqQf7eqN4MrHgk2Ltqsf6jRUaJ"
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
