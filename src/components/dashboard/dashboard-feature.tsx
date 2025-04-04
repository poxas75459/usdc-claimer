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
    "5BFWZ2CuePedc9YVWUf6YYvGzVXXDXi56kp7nxnudrasqhJzMGBP1wMrzZtsRhaNT6s6ZzXMeFhDY6HUr6sdQ2qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nacgywdEYRgMk6EZ54bAttgvEWiAVqmy6EmpaUJeKRgWcH9rb4Yy3hLVP2yCv1vERhw9QmeBxDUkkycVq1Z4VYf",
  "key1": "3D5e9kearVReNYrsALdysCBoD93oBVh3tiLxJmKhEcvRJ7TwJM6WXZqx9uKvvpKj2W17ZRiTFLUZ9GNX4iWnfsrC",
  "key2": "4abKBNyyByhTVy9gYEZBwfj7nMGGEunwcT5Yrm3Arvhh4PpwhCXKnbJ3H6q84xzqbxAL3stuvkAMARfjU8zeY3AH",
  "key3": "3HGYQRTHNaHQnVmiAham8qBchjDCffdb9unfwVZavqiGUWuzvBCZk6e9WGtPh9npuHtQZciqQEvuoEzUGojWx7XY",
  "key4": "5sy5JdkeyegGtwRxkJz6HP5eATpFF24bwqK1oXyaCMEUnW2W8EsY9Nmo6GthAstKU8Dwpf63qBPGETkm4RbNRTgc",
  "key5": "4iRutHrXmSCUyVyUND69z4KDneKfymNZz8CkvAKxrJV7yFU5UKDFkwds53y6vt9ZboEWaKuXa9dS2iq11LK5BzWV",
  "key6": "yxWfdTAsr4DwThZqvZw4jxoZQiionKDAoSReFf2jeSgnoo4ij8TgYPbuqe7H8mePzYEtvFyTyccJzcD53g6HT2m",
  "key7": "5CuQUWe6bMueFeWbUosAJuTEURzzghq1QkLs8ds84jbhe7tVfCs3ku9SsC6wzDVjZpkCo41o9gMG6S2N1Kg9ycSs",
  "key8": "5nZx1xfje9WGoVJHVtnHS1XhX4HNKKD4EBbWjMCedVV1oada9LYx7CxeQgr5YMcvu5UjExTXdrzxUgACci8joB5P",
  "key9": "3vji8wWQfXz7c82DTCKxeUCqUotHS3HfbM6dSyjfasFxtGrb87BATmYNwzrj2u5L6T4u5fNHrzxZXdmxrcNeWU76",
  "key10": "34SKkqciyQbgE56yuKrgtNigXK6X4niEP4Az4tGYXyjDL1zDN9NrfvFWtwMBbq8KoS6A96LdCENUgmG4xG7T7yfG",
  "key11": "CU2QxPa2JB7RGxhVcQ6VQieUYS1gZ2EwNYcqgiQ7Gr2h2oBLhG5PDWbiwTwDAhv2jKQvBLcryBXQ4dDtpwjMhFb",
  "key12": "3uEU6ff9hiV5SXwZUVVVd8NUnNtNKWgaEfJnQXCFtWDJJqN7nH2uPNnXZbwHL5k3GmgMNTSZRqeWzkhAVeHCQREh",
  "key13": "M8hkZuYsRq2v2WiLbRxMPYkzS3qd4fys8d7MFGaw96F3dsrttPfEVuPvc7appMDYbfB1joYzHiZrM9ST7aQUTM2",
  "key14": "2v9LqhTdpYQejnPFyxAf68KgVEVzJ6TZ42BWgLhVnGnvXtbdAs5ffEKj7dyTEYq7Wzu9aDkbWxRwstyw4UnNiCvM",
  "key15": "5yqKa3xPxn2PaAaUDap2cMPwVnpTEgzkbz5RBFPDKtGiCt8zGmeyRcYEz19gGE158E5u9tYdaCDdLjV22VfbYqj5",
  "key16": "5sYwvx5hewxqLhPyEX4nqaSJtYGJPciTgscPFDLEDGPNpWz6TeC5kGXf5hE4Rg3MwRGJ5jjZuAMdAsm8p2gM6Dfk",
  "key17": "5NRje8sJhh1T2khkZUA2tqVdJnGouyjmsxd4nBb7DC3MmS58bPmNAiDitsDumKtPVrTaeAwoHbb4YysQqjkjoquL",
  "key18": "5ajgckupkC2oPE5BjQ2x2cJVdcqjdetXzGKKUysFujUbcfAS3V347TuN3K4JBB8Vdgy2gm7mwQFQapNph6RJ3X7W",
  "key19": "2WB81xt7c5HZkd8h9NFpWR4i9Wc2ce94XrutJEeXKfKxZKAQC5wS1aW57uV9RX4QTnpijp6HadTDCP6mNjVRF8k9",
  "key20": "3XZyZhnZoKtRj5KvMwMTyPnCUpoeqtLBS3ccd49VVN1g9GshTj5Z9688pUXjgfx1FXJuAhq4fN5MDa18EuUSCyaW",
  "key21": "rEf2MgqUxQ8vuPAQgvm1w3kqk9GhbCfs29tTGKcJS7YBJY55VMX8geLYbPJs4BXMTwooeqMz2k32ErNC8jd5Wk1",
  "key22": "5qLSPDQ3F8npqHFzz1b267Zz4YfadQ9CztpKRfid54HcRkxkqCHeHqNg8V3bbkqSsQ5VtrMWfqdLj2XD8756f5Lv",
  "key23": "2hikSvFGBdmxXkDmszEPBX1s9AgVtLcwGfUMX16LCUr5TmwubQznLkynogVCZ45mDigAz9CS5DEh8FhegXkzz1uG",
  "key24": "4fkRT7oQBCw8phNpT1jykjfa341HS6fxq1RHR54G3ypzsfUiERAUChpeZppeKjYuPdQw5yqzTT9y5nfZhu7W1vsg",
  "key25": "3ST6GLXDrH5tcTNv8mQRJQGUL4LB9itskMi7HFtEPLpnjbo2fW9FJzCPxb6iUaMVAqf1Vc7PbJ3VsFQ53E5XiTg9",
  "key26": "4yrBcsqxfqkGZUsevn9R7F3i8SS9PFAqVYj4NdAJQ8s6ZFEYDm5iApWcRxz4DYxPwUXf77acj1DLfMQSyrafndD8",
  "key27": "4bWi8Mb8jQWDEDzdKeF4PYRmcyFQbsVsXVtJMY5uyCm3wLM8pgWGAFKaVV8TatMQ6xE553hTitV319DJDgnmz4Gx",
  "key28": "KND8d1pHgSM4txb543iXqS2kzt6q3r2LT5FTqCFEW6ptkWjZfqvtxWqD2e5i2SZVKP4y3mvrBT3PSpxNc4nhn6L",
  "key29": "2KeX9ULE8sUwPjB9dFSq4DU1rGLkXryHLi11XH5HHDJitse7pZbCqBwTW5YJSvuXhZKAMz6dPve7a56euUTFDd68",
  "key30": "5EwkGeGi6tBaTbTrE1bufKXPGu2xJHJTJEWJzRbATFVZZAPxfAiAwCudQ9GZFPTns6ZT7W4D7crwDvFJY4LgHkRt",
  "key31": "4vZ6Qd2apKpRy4Gx2MJr8FoDiLGawgjDkZJzor5mEzsqYcQ9efGmQ7t6SdzHfLiGnK7yNjMUTxcjNQo6sL7M4ZXw",
  "key32": "3xB771GmCr8JZXXwLRjuLu4vuxaCZwmmKvwCmRst2UTJrYnowiQX3GLW4oLgoFH8sd8knqDKzBqsx2h76zQo3dBU",
  "key33": "5HzcptvUFqByYT98hshwomrsCBFy9eKaAxsFHn2G5Wx5YZqsfs1gsup4H1UbcPVeCaXCFYhCihPzzBriLPugGNfx",
  "key34": "4yCjAU5NNHZQ29v2pRuWw3kWCVE3669xSnvQxnxuZbukZZicPnmbR6ckqrMSGySax8JmfZjLC5WkFusAvKgNgLuz"
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
