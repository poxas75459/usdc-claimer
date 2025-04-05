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
    "62rmKpkRzgmuicpd7jswDCGvw9M7GBrsHMy3pX6tq7CgqpRNy7i7dYMQAwPAVSQ5Wknd9YVzLPa1opZPd7V3KVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rDBM9zSHSdbKq6YZ4u1e6XoysssXjDmDQwzEHkFzG5LGDJ31Dj9MqhJKjmwuABKa7XEC51UCGHCyJNfE3Vu93gW",
  "key1": "5FSNXCBBMz9S5DsgygeDSGrTp9nDDZ4CkveTkwjz4oVehn4zLAPoHtLDojG48NDSGStaEUPQxGRiezPvEGPUFuzR",
  "key2": "ZZaaBj8rMUqCxGBSKrf7FhEzTTWj3bf2eiHhNxyYDsmW5ds1ehKTpLqUf3t2euWAdk1oHvnbjK4tXQ5oxzLU4da",
  "key3": "5JkKVWE6YxMK5i72cmA9KCRNbJvSPfxqzcL1PvT3Vq1RxTjevjYUimDv62m4WzyHUSHMnKt75JxivH6MiaCsNt6j",
  "key4": "4GqX8PF3A46LHHyyVJVvUkELpQ4zFVQ3n79RCBAUWfemf4BW4x32LbPLwf53UBeddKuWp6aBQtdTb9YHgutpNtBM",
  "key5": "4J33CjMT63R1ZRXMWy769a3A6UJS94KhuVyohT9VhHabiv779CgmtpKo3x1H7QvRxN5Ke81HJi9WYf3ggUqMJauK",
  "key6": "3GvBDcp2pjzzi19yF2rUgFgDfpET8MHFfLMVYSVwr6oe9MMpQ99KzDubPkwLsVJX1WmVUBjTps6eXVBiqGzxzima",
  "key7": "2Ba1puY63LVuq6W2K8Wx5cdJ2Bceyak4wwuRv4keK8ZW6uWJbAbKekgridb2zyLJGMYhPdm2n9Jw46mXH9d4LtNP",
  "key8": "57MZDSwSsrnpXDLPKB24jtuKecEKyqcJFamqyucgrWeihS41p9yhGZaDyWjmfq1fNZs1aFEB3q7jznD5xi4wxDCR",
  "key9": "4gqhbEt2zXqfwYE2LLdYrB6XUYwWREiaVCHBCvVPsJHGiBMiN1qwLXESoKuoXYRvCz27zeGp45DoT1cWc8mPXXyY",
  "key10": "dF9Hmhk2HPyerYDYaWvv6VW8R9RMBgzCbTqVWZMyz5fpHypyNwWFdYEzJdEKqBQ57V7FsWtiorxaynnv4d3C2TD",
  "key11": "JPZi7bNyV8oqcF3iXx9dYPAzjE5vMJNvyGb32395psz4RZAUFAcxGPfzoxp3qyMcWHRs3oXqNPsV3G6dsnPKkHA",
  "key12": "2LA7Jmgqz75nMHihKoLfMUo1dZT5tWdV1nRia63hmdcRZL11AE94jjP2iB1Fo3Rog7UApoh4ZwMJMd2Cr2P7fjD3",
  "key13": "3EjrrWUGKNoZpdSKharY7BwHTtaKFn6wLzaAN7NhP6X5o5YpoqtuuCPbo18i1Lsqx3TwR46nx5aqiFG7CL7zWZxH",
  "key14": "3fTCUXxjeQjnLeYpwqsJGP8DdAkURiKi55Dena6qRgJhxMnHUSt3Cd3XKjpSgZTRPwSkh2sgshvAfGuCX4mzeRWQ",
  "key15": "BPqc85hh4ANstmdkSpMbruoaHFbse1t5cUu7oxpTdTPptBc6pd2STkXx6psZsznzgafTfBkuqU8Cc35gQco8HWx",
  "key16": "qXPAnS2gJc3RMM9AVv97btVcfKXrqxYKfbqAL7NZ27ibHBqFjCzckMaXZ8igjp3jW6ch3aAKhqHf9cTeGnWXjnw",
  "key17": "5qKYbT1C1Q42fC72eh1JQzwoUvRLSzq6XJVhDKzxYWKfCR88Eszp6v9RiN3SUBNSG5fZRJdRTPhs8NhB2e8Gbfin",
  "key18": "3etY9dCPRVS1VgiJQ7n3TQc7oXb5rRdSVu2joFEVSoxXS5oFGi7cV3boAz67wU7toWjrRvtZEc1XH5Ka6GZ6Phzv",
  "key19": "2vmcXxVWKBtkyK2VVgTYP8iusSoNp6JSGg2RYXehKLAnQkdHmBNsG3vLVKsBA7GLG35FNJAQz8inoqRTzRVRox2e",
  "key20": "2jvE47jxiQJLhp3UkaXbSXQhyx8GvJQqNtaaKaCCz9ip5HzxjiSwn2XmdLRsejV2Y7cm7YcT97FWF1C3x9XZQ9kF",
  "key21": "5Ehez4bAvRtVYz3bN3ipwSv89yohX1suKCBvdrtGSU4bep8DgxKTanukUYfgHWR5nJJXfgjFWeyNm35v2g7iNz56",
  "key22": "2XTpZTCGfiSxiN9xcjJ3jTLRtLBEaZ8aoqxZzKW6xpEP3a7JetzbQAvaDGZNRfUdieUZiJED1VXzTe8hJrtmWYLW",
  "key23": "3n3YbqgAcz4Kcje7MJdbFRDVie6grSdgnigbQoxndnaL6UN4rR9cyxAks8nxEY9Zgio3vi9JVy563YXfCg71jm1h",
  "key24": "5LUDCkofxxJGG96vVbYMk8b82qbn1mCT5qXk3tpRGhkbfAHxRPvbdg3ZeAVLPaP6aMzV5vEXhRktkRtokhqggNFf",
  "key25": "yUueDBcz5g8qbLT8cZQcbiavLqfi54g2xpE64aFsePLe9Mbm1uJJ6pNmk48E3pdRLDvmjqszReJazh5Hc5tRcV1",
  "key26": "pBia5Xp9NhEBf9V7Z5Fr6FMBBUiXw5iA5kUTsCxvAJFJZkdZM43bL7JuA7GZwLn54voAt8UkWZKGPS1PAv4HvEj",
  "key27": "43d2fSh74yJRAgX5YfmY9a5jojjzmhpoEcRm6Rn1hX4BfKEzzaKxmjE2xGu2JzigeUJpibftUkw2pRfw69kdYGnV",
  "key28": "4iyac9tzF6wzeWBnWR3x64PPpc3xZamD6ErtwQxzz52h9WPGsD2z17pyEzmi326i19zngqrom5bRETARuQFRPHww",
  "key29": "5ae2eUXcg7GaZCTZKwqy2HNsY298TXXaP6gDkQxDnD4NC51RKG9FURXriEoksTzuThPqszqJW3EW4Mt1kuBSCH5B",
  "key30": "tqAsceKKf1gdazDCrVpYeZWQBoBgUBKDfJs4rwaf4kff9MTnKWJJeKvvamBiYSps2yVaoqfaKdzf5Pwxj1ZrD6p",
  "key31": "5iYvFEYLTfdaGV8gX69riNdojzd8yXfcxaUUX7ytAzKmSMTE73mgovo8k7iTwizFkudZr5UkKifSZntprqnL3pU2",
  "key32": "5inuAatJtNwFyHT3mUsmpcWc8xq2dhCondCG9ZUqygupZLQ7WX9Gbs4Urqa5aHvoXK18uYJ6Yxj5La4HjHsX9Jpq",
  "key33": "2y1GzmuHpXzH5yLgpuLriFmNkPunLMpYgRPpgAPf5ho85AB5Jkc4TzgNdodKMocFGdDrCfcTvtLFFefkWxgC9CWe",
  "key34": "3xsYzWSekNw4krU3Tq9V6AtdzqSZb2ZcupVphopds67PnrFFMTYbudunDnMwB5V13g1oSbDazHvJCfzyaKfMyiEc",
  "key35": "5C2CPJXap4k5QUzSKvYDxK2jAPt1fs7Lr26w5NXvt1aUw51ZTbmjivJfo7gVMjMizqrajvWmibRiAWLmjnW23acT",
  "key36": "64cfWbZRiyx63NdT1cGK9K5FMwhuNuNxyDLimK42GQwES23qNUKbrsep51ka4NK5pUQETNWmz5QU3P3XNBWtgTrG",
  "key37": "5V48btQPw1hmheFDxUS6MsUS4YmBbr1NMpJBcL51XXVAgb1DPeixjKEg6XCpwxms2FScL7hhhJLXBSuUVEGwZXTB",
  "key38": "27CL7Up6XATKGeNjxaDFYGXUSLZy2zMNDeeeifAAZNztXxJeW9kBAeXXkexirERaiquKYsV6nCVbsVfxKU5ehrRw",
  "key39": "qKk8G4B3T3yiRg8VHaKoSn5iqmowchu29JyG6uGtk2Pw14HtHU1wBLeD6XQkgA8ENRQN5NXPEkCwaSj41pErYqy",
  "key40": "47KBW2DqgfLf77s8aCCdTUvLqM4adLnEGKS3DGRe4F87Ea7M6bWzRvns63pB7dHHE39zf2giN3tHGQFtnJixMuE2",
  "key41": "iGnkRNBpQRD6JXDiXSTf1mZacKXNwLfHe1ydrr2tVmVgndE91isjjibEi7qhytEPJ9ErFRSBG8ZvCAsconnErkE",
  "key42": "Qf2ttLgKU3uMh5SfMhg2SihgrZTEUSoccP8MNwX4EqZoa86n2nh7jev4Qw36crY4KDkAYxZFHtQyQgCGkEbv3H2",
  "key43": "v1Q1yhHFXEKNWMmEGTipcuJ4MvYYYn8Am8JX3ZVcDgAPcYQpgrBMJAX5XPfniEm5W9t3VwExrCYbf8LScMtbyqc"
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
