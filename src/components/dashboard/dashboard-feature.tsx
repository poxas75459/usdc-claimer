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
    "yFQh8zx3pZYFSUZm6uiAqtuic63fHTPvhcCrxrMLouotkLeTz8DZyeiiDL3YCU5wXMtVDhgF8v8TcV4EB3iWgsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZiCo6RwNpgS4vTCrWHLCCcrMFN1GcCBRdGj94oF4Jav7NeD9YR9DigXAx5Bp6jk14pjbtNwidVMY6enjXXAi8xL",
  "key1": "2dSQ5gffiX2FLHvqiVeiixW9g3EFPrDcQJULBykYQ48C4G6TK4jufNLjuZLMH6eSNoHFezWFqT7skj3gPECBw3s8",
  "key2": "4yLFtESAoyZ86YM1smnXfndiZF8KWsyMyhKwbGq2aqQhb3xaBooGRN9Dy7erHWJdxcEViiRfhRQHDAzfNwiizhDv",
  "key3": "2U2RDKC9vxR8UBVjUqfYLjmJyLXBEGSJ99qz1NEUfJTSd7e7x1PkeztsTLw2Z5qeE2bPENtpUc9zJXB6ZtgrnKT",
  "key4": "aEcTZbCXrcVT2k6zNy4MncKfFLyL4jjXKW6KWMZghCbS1NDL5zbSHowQ1ACTQSZu5AmC2x9crFsVLzYhhmAtniC",
  "key5": "4XdFwHHzmPVCdngCciKhyCa3ATvrsrs6oky8Fxt7MGF4RahXbiE9ogBnLNYXcv6Zoc9ihUTGobXiBoGm5esrPP9h",
  "key6": "LfxzjwZkEoqXmyCziDDMDs7N7gJfMSQiePvR4Kjjs1Kg73jy71zne8wHVBAQ6s1aqAYRvE4itcYcuuwQ49kfwb8",
  "key7": "3j3RivGDerHhJZeannLwNB2CTCsHEa8P3Ywy7G2KStLd3aSepKk3NusSxBoKwcA6Rd81hfJHEYTDEmYFQ2442vFb",
  "key8": "5PMU7NTjW7PNSFta8Uuz3k3QJTamC8LHLsg413RA19VPdBNrX4157oj1DtjwGsTSFFWUY4uqMUYdQaMii8XmmoD4",
  "key9": "4yXmFEYQKtSHKP7i7a8HbDv8ezbz6earD69gNHuJRiC4869yKyhdL2e7qxXtoDMMXCjJ8Fa7CxLCWUshhsAB8FXs",
  "key10": "3n8jGj8rPvZcqk9SFnjNoLJLNSHag59ceJzf6u7TcmKaE9EdKJv2haaGy8auP5ZDfKsK3NurykRk9BSot9k9Gcnk",
  "key11": "4LH9h7RUJe1PHjxDA4dNWVauy4eApzPaQGLAxBzDVzDEXwg2Fa2zEXEx5dfk9yrASyDDmAcWcWW6wsfzdB9b6Wjt",
  "key12": "2M1gDHZkKrKN1r4SMgKCXvbfLC6eqd7x3EnTnQLFJLqJ7DNL8MAfaE1rDhKU3J1EpBEP36fLjDCseVrjY1KNQzLF",
  "key13": "4rXDWj63hfXVhqgSdsKi5H7N4kzMA772SHEbk51agEoWZXzh52MkdR7U2VV4N6KNmKVoARrFkqp78hfZeeWfiRBQ",
  "key14": "sDCTLzRUwLZ9SH8vkpwjrWAAabSsYZiGruLCRPMweXPioE8giiwoL55oDAwYMhXpjRoMfoy2vLVVLejkpBMPavk",
  "key15": "wfNY636LDtjwuqCpfWZLBR3HUaUb8FBLXcSKyeyCFcN9gTFLuDDNdWjoZTco8Gak7P93irfHf5Giu72FGMttUAD",
  "key16": "4NmDx5LsLpdHrPZsa7NUCgkbPFLiHtdiyxzxrZJxuAvjygdn6W7Mjzro2RWnVwBkeArA63SyEyLc2kKQTGXcdeP1",
  "key17": "5PrqVzrn6623ABWgtg5SeRKDEd4mtC4HZPBaydACCj8HBzXqNxcvWApWXMxfPLxny7GKTtNbp6LX9eNRBEVzxAwv",
  "key18": "2EPeFfGATPkYZqGvhgwksc2PUfQ71UzY5Wb9Bf9EL8vZQu1cEuYxo22RJuEiXNJP3L8kx1TLbhprMLBMVpNDsA36",
  "key19": "4CasuYPiG9RWXjP1aiifC9TARLXCMK9Zp7sebA7pxrV3Y1f15tfjkxgqEykBVcWXputuS5EysiU9wwGzx8YVgJJx",
  "key20": "Gtaf8zRNdq9RZjpLCfuTJXBLuo4ypbuWjoRYwKcbY7pAAMac1z8X9mUPG78iDzz7PHx6EA1HVmmvaGYovG5R3Bq",
  "key21": "5Xn7uxaLJNGzawNHLATS8RKGkxYdKWkinN54GJJFUaJMF9Z4Wjkrp45NY2qSEcrzHoz82KhWdBvSpFUNagcA6mXK",
  "key22": "5nYyh2haR2GrPqwZKapm3Xu5UXxarNC8NWX8BUuyXQGeZKbvnvHhJ9TrssiVgWH7zZmvJ6DdNabBSjdTZb8g3LtC",
  "key23": "5vtSsQFnmovSg3T6KeiSHsvog6juP1AbhM6CExLcVKKCKMptHWufv4rWLQAWXBsAVa2WGN5c4ibtHfWZPx9qc2PL",
  "key24": "3xt49R5gsi3Rdq8EDdhJqZA4J8gQPrPwirC7VDmJRPQJecD5fhTzmxBpTxwsmv4tCHzbTpcK44b55kXwLwqBHsgt",
  "key25": "anhKgCqQCe1UCiLYQvTAVh95mHt5gSuyDptkoJxsq5oKLrtSvMHNxMLPD6pr95LDxWTAEpsZ8y6ay6sNbpcKRa6",
  "key26": "4WGbJ4ndvzSCugMz5DCxhFWcV9aXQSQvw9mmmHAhzXHsFGpThni2F89bvzMrD8XQbWNqQGDyMqCEQyKmrzP2JzaK",
  "key27": "F7H6rDPRxJQD4CvcZywRFmuDwSCg1AdQUtSvUpNmwbzsXJS8MnwkSccu7LnuaSrC2r2fsdnP7hDhcL7QGuhp4AW",
  "key28": "4Xk6DU9mjmieznHqvKCXKKJrEqYAtaryiYGKJYMhMVuDKMgXE1cmBGsBFdrqkwjV8VHUkshMafPht6HSF6uR2tuT",
  "key29": "LKvfNubidp3vubwYRpzzwuxyTCuDRv7MuR9o7kTaK49JMZRczSpP1BG3RHzSYTLHFNTTfJXhKYoQxaXN8v4nBpg",
  "key30": "22LSfcAsp1Pcv9vL7VPM8d6cpZAKafRMPxX8KDABccFJHfqRmq1gYGNf9aNTeHMVeKr25eGXNdx1m7Gi6dBtvfET",
  "key31": "24nY348qjnRTSJTkwpRdepxbFLnYCeJfB3VxGebDXUh4xjkepLNV2BSWNxbuXYvtW47b4dDpeehpxSAa4HwjfxLD",
  "key32": "2btF8vKa3eUBeANfRrw7eM1tHaHekGNBGxFEcf4Ax7VfyNrEscvw5MmgAftpKvMqGbSgUCvpARgN1JSiqeQKCaBx",
  "key33": "4JqkTXo63yjSk55yT1YZpfz4GHKGruB9KvcsreT5WXPS9VWchabU21EtPRryfiXyn5qsz5V2UHy3128FNo5cVGyB",
  "key34": "3oRW8Ft6icLqtK62fLGTEr23n1R2gxtDgWb6BeeTzxM9vDHsbHJc92xwaCqa7cSg8HiMxgKhgYK4a6om1WzaGdzg"
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
