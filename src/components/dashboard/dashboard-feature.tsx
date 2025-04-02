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
    "2vtEYfgJEFFR54JeY95wMBHKdoVeXZmA6pCv2bjuDq5oYJMKpmiTTM5tVhdrrodcSSEqzPZq5Ys5hg77p1p2Ckur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnHhyUvtRfAk4hm6aPaCoxtRZiCD8dNUpADxqzfJHzD35e8JAXuU8UP9nh4b5j6gavy5WHajAKhbzRqjJWA3bXP",
  "key1": "2ZK1VHWjn24bgLLEKKs5trhyvAnXVv4WVVpC4QhNS8EZtovLHUHvzrnRTrNUA1YxGfUHxRrMh99gbiYN9jibqceo",
  "key2": "21ta2p11TQea3NkwfjoJmk3r5oFxUhKrhXMkNDzLpHBjtkP5UPpXFdkRA5b8fGpWQEPYRvoedKwCcSkybu5VD7MV",
  "key3": "5xuSPESTkCtZRwqdxNuc7scc9mWRNoMghjYfu2uCX7Tc12sWHXziaMVSpiaMWtwsCmEPZdZBr1H1qvHwcrAd9cst",
  "key4": "2i78HsJ2UxRDXqv1aViuhrGqqrRG47kiPo2vUorXS75hEnbbG3gxxCeY7siWXQf73vQRu5cHpHD7A9khuCVtYiQ6",
  "key5": "5rkASZoB4ftWdFHecLLVWt5xHiV3dEG165KtYMqrQALL3sGCKvghJvRXDWMjUHTpxpZvpeYFy6XNDeBJ1XPYqZF4",
  "key6": "2iosuqe2HQDUoje8YzXA9mV3iBMUd4A9MEes9nushDybGWzCWvh9HhukZbR6Lv6UeMsHwfzKrQu5Yaecqpg2JcWq",
  "key7": "2NDsaAH5Cp2ajqR2cD6bBCUNcRVsZFgYT2pWHQyr6SYDg4x2MMtDCh5NPWVpau5kjcQhAcrRrLDboNNU3oDhzMXs",
  "key8": "5EAKJYTrQ3gUb8fbrVuHYRKgrBu4Y9k5dffNavLJQowAVP3eA86Q1WTZp7qPaWhnZd4DstgaRdmhwKiBrHjT4c9a",
  "key9": "5pxuijpx93MWMoouAa1WaRD4Cjftcw2EnSWvng4ZyFgTVpo4nZd5PM7Yqb5gyQ3mHwc5FCCprXqCfvFVydZepSjx",
  "key10": "2oS5eHZbSm8Eedoyc2HLt93g25THbnNR9Fmyjow8C2LYqYULwcRQ534ffHiKRXU2XdGxpHenfShDRJKskvoXMGtf",
  "key11": "42V4RzxqtXPvSJp3gSSqQMFy4ie6AU595qzbqzUpGtmtSjAWUWzQFA5nM1YPVHZkMbzWZaaJqWVVaAbVsnBB88Lh",
  "key12": "6kB4Wo8BpiU1BJD8SgZBz7ekZcwJRncJ6ccx8kqStQLCmAbST8GXakUiZWjUY8tbUAb23emtTWud8sVhtnLwpyV",
  "key13": "3m2Uaw12WcmxuiH1DKuiEpZVw1dBiAxub47XLuH2jsQZyfrPkgBGMuY4GPNa6fJdMQEyXnoyXYcM7dAb6K6o5BXn",
  "key14": "cerezosoARCfxG4isbs5PmfNNq7rVJmmkCYgwBWyAZRry9FtzErqxReVc7wxABC5CZrd8p18TXDHqmHimRB84c9",
  "key15": "52tbuff8FeAUjrw5rQAnwZh5ByYLgHv5JCvWbGC2MZsCPs4AVtaeHpMF8jJ5fwbAcBPZFhJANuDWAMHY25w4qQro",
  "key16": "3bU2GC4oo2HSA8X68BwA5Seh8u23BUvonBF2tAJqRKVQMXZMqi6GSDWyhDgyBD4gArGGQ3iwDf31xEVbZDU49E7R",
  "key17": "4uraixxN7Y5fMzqrfaF1B3F5YAzQfCkyK1ADN2UethyCXsmtaW3d4uJXRbkUCZTm6tEZpVBhZsUzNUbetAr4WXYL",
  "key18": "2gP9cuWDTPpoi4Yt7wdMottWUsiaQYfo3g2AQmVphGLWkNaiWUpPmLZ3s3AFVonpgfwngpRXu18UhYDVYGdpptAh",
  "key19": "49zY4CSzDApvp122rEaVpGC74Cv1jqdEa7hkUQxjt28SxKCRZv5uiuvXHyifwaFWHiZ4tuJ6rBLRLeGcCJPSYgnp",
  "key20": "2Mb6DBVTZfQXjCNRLeyBeS3TyQEBo12k6Jtdo1gs4K7KcjwfYifGg3Tunodv28URJfKSFVcYzw5xUpP4VWa3J8N7",
  "key21": "62UGxHiB7FCdeg8tczdztGbFAGMfRjuudyMSfFnWtLpZPk9naWnZ7UJRaoAQFUM4JtMcpFzDE6ucfSWApajpST89",
  "key22": "64jV9F567UcY8mVHNvrnk4vmjvqCU2mukwj6Su52WiULBnEYRp3vy4d5u2RvAqDcEyeAR7oDNgQsCFuePXya2fUR",
  "key23": "5ccH4YvR1eN8Rr8sRh3vPSrRAxTK2jYtoUUnCzq5ckLqNGgH5JK53L1JWmMiZJTdbJiu1y1hCtuEee9ZxwKnUwhd",
  "key24": "3aoo2rYgzLqBuqh5BYiMtjU3WgAhiSvTHGSxZLoYyb3QLucyYhCLTVuCHqtjFS7P3fHJnXE5XnXBvPqUnG6sALGp",
  "key25": "5vzr2xCHKzgoBjgW7kxck8RjjBbwvofiJLXY9UJDubKHkjAY3GVhusxnAh4pj8gXeDPi1Bsp1cCVhFPqxmT8Htey",
  "key26": "2gBfNevX3BKNsTeRKH71Da8n8SELeCed9KAGGhBCQqih6dUasin7bg3TcUXW6K56ztqm7nXnPN1KSPxbrTWLgQyV",
  "key27": "5ivxVRgtBqzCAZtgvZHTK8zchtzMqCtrKBrEwYo8SmKdCWepVTuF7pj4z3iN11pczEdKnba51rFN6a8MGWToeM32",
  "key28": "gT8haMKHzm1Gj1eSGoRb73Gxm1Zn9y35gjb25S8MQQCVE5EJ9KVC6WLrkAFwvjXTu6C79UNKsMXpAPRQkdbe4oV",
  "key29": "4cfM5L8UoJxTQZGXZtgoMmuJoSketgyPff9t6ZJr2Ad9ZmX4Sx1CGenVxrz3GbRL5vbwBXamvYGBzHbWAG6hAXmq",
  "key30": "5ygTDX3S9hEBqYtq9XuGRF1nC8wgaYrq341be8UeD5soJ6U4BGLqbbXMWzdvM6Ke98yFdzofCZQkrzoRiTAueDvo",
  "key31": "qmzWPa5SAy1LPwnjKdH2d5AnkbMrH2osLdLwaLYfB7Neom8JMYkXDm3TJynue8j8baYqk74TLq8sowTWQojozFm",
  "key32": "5zp4s726MhXe51oPRzj41hknMEUGmLsRX78kK8gWQbxFh6YhsSx8sBVM7xAfjW6cBKYPAhSAVA7ip2KSMHnhsNyQ",
  "key33": "2S1ccp88L8krMnct4dZtpq3Uo8bDaYqQujCqPMKHda7U9QkrotsW6cFiSiFNFWUQTCdPyvoTrccUjW9cgaiXcQFx",
  "key34": "5o2HApsb9xcU95uH2sFWsMGDaQzd7Q4McAsDukpwXSdoyJVkZh8PjXwtAhoLqJRj6Grmznvp9AZEEc19uoaZ8TPJ",
  "key35": "1kwnjMpNWeoWmxuVwfuhUnFAndT9Qoh2VJBcfHmD2awv8NZxoxGQStiDqr7xD2pDs8ywAvEbkPDkf5z1QNPF1XP",
  "key36": "2MttsRV8B7g6p26zQUdb4aC9vRccnVLvL7wPE9oDT8jVYgCRijbNS26MY5xVbvwPR4b9GispcPn2bFWvoio26tp6"
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
