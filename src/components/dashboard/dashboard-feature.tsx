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
    "5Mzu6h1kBpvgojVtN7HhcgnmpJHEqs6AJhr3NMsrH9di92d29JkhdtEx4guDTz5eQ7U4bqReJH8Fcb722bHQDNMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chJjjQfC6QPBD2S88FY4hDhRC2G7Fxd5jyPWDX5fRkwr3CuYoVYEjzaXqkCPNLZo69Ydr5MBmABM7BqYpB1p7bx",
  "key1": "5NAz4NPmWAqMmEvzbF4ziGbeVKZYnWyFGoYK9XqmJJrMv5aNvFBXDGHr7B53sCBJ6tjzBpigNnEyEmUKB7wyYxfR",
  "key2": "XsFFenWUHYQWqy1ZTgkgwywn8nnrYoZXU3SchGtoiSQLYKPNbeNoTmGhwLNMAtB6Kgt215XtBJtArKuWjowpzzP",
  "key3": "4p2chSHpTYYdrqhWPsh8AX49gMgn6dHuyBxvhppZa4k72MTHmAbBhrqcZwNkp5j2RSZ6qcG3ULu3DCyqNUCFLSF8",
  "key4": "n2D8yWXFT5zfQnyz3G7xsz1dZFN32Dkb5vUAtwRmavrnMx64KnUWM3PhaEHNFioc8DbvosbPy1g45Z7m4YUg9D5",
  "key5": "3D6Wk8CeGJjjsivReUbHryW2UEbo1LZMLFCbJaSG4nAvYFH8TnTiVG5bu7qQ3MPZNq8iKzeNAo8oXshnnBhHySAj",
  "key6": "4vpFY5zM2WxxqaQ3XmdprNVzvRAtXgK4b2NEW19uwiCCgQ7frqoLJWmLWt8mUVvnGtiuMS1FCJ2wSExAT5ctTvyb",
  "key7": "4NwnUKH9cAUPH9kHEz2dRCfMs2njk83BuNYrRtRYakP6n5ykrwnPzMUw4eMK9fYmcQ6wZ4Lu6jQLsW1Gujuow1eq",
  "key8": "614nb5tz5TDWyjvxReKWjj3UjaoFzqkbMn5CJNSreXGU19FCgvJmhMeeZPZxHY9KLnJTqBQUbH9UFcMMxMPuETFJ",
  "key9": "3nLmia4p1mraysGQzXYEsVxr6m1Zf3AKpPVoaVTvC99WHnAdpU7vihvSCJjfaHfK8VPaf5aJHQRC2amtw6PbpdfL",
  "key10": "3taC7v2wTfgx98yf6YFrmpa5MNK2kS2xLFwLNkDXXAhaeKzRkH2JRtoMkRkYH9WyFU3nKjp7SPgqgKZ9cXwUpv8D",
  "key11": "4bfKx3pccCuCtC5s6KtJ8hw5WQYu2g5upsXEoeUG1GqScPUcU4uSq1JFkC6nxVJiegdZWhk7F8LNqDKewZFF45Mp",
  "key12": "4BFoFBHHNEj8ks8qEXUEXdLRqzMuXfrV97ME6eFqWH6JB426XRzTYFR3XkMUGFtqfy2z9P2gZwMTrq9u6SfDciY5",
  "key13": "5ZFwoDDqEQTuzX1SojTom4aNLpJdssfD1MaN9UHHekFUftBRz5pSvPMon4pJXSvUEs7kuoAFxHFw57BWT3SVYp84",
  "key14": "4zxzHLo4fBiLGUWntuy5fSqX4sRRcaaTwa6yxD5xmpPL4YE5HAAiDvxhVAXnjeNpcDJY6NyVBnnx5H9Zvy1iNvoS",
  "key15": "65UnsXeq9SxFydJDyGNLFgruaSi7gJXk8VMgAvvujGGTywwABb3TQk48hEnxVSFMoWZabbL3ZA2JYre3MRtYhfYQ",
  "key16": "2gW6zvkvxMFALivDtXMQLDAVqA8c4roEY49k8mUoLhkGH2Qx7NhxowydZU7x3UbRXKwFcQE5mT5x14fw1XtfMk31",
  "key17": "49KGQGs8dVHnt3yW6e9zvrP3gepeQGbyV3bTMRrAERLWs2G2Jdm3P8LsSdZ4JkDfvDH2STyaAkSpt1xmK4dBNvSD",
  "key18": "3hibEAKnMZddxeMadStZ1jFmTS87CbG7bT4HwcxS6CKPqXmzHjgazPCXM56m5uukffxrfB15EEFJ6XxWB2RcHWeX",
  "key19": "3rriL2YnQ2jTBnKDvLEWiZZN2QakHJsz5C6uAKtpAtgABg7sJ2Uyz5GGKnkVN9sphJwKD5WXLmqdxW9zcdPd551Q",
  "key20": "5UZWPZ7wjiRAqBejLoXzjowZsDteLhqomG1eLRxzvMTmpNLVBeH2qevS2YcSjRpazhkML6BeQ8jt7oykARf7vsVV",
  "key21": "5LCVcCnFSQAmTtCpBrpSapdyEpdi6K7u8MaDznm7r25wnbG6rxeUDs3aBmwgSBihi6EnfyeqdZSsA2KjJsXzck6H",
  "key22": "35NPQPw7ANBtv6Zt3VzzZecgHUc6DWzdDVVLCpejUNGF9AmQYnoZp175ESYkXbtSRkxNHjJcUT6DwPRwhUasG98u",
  "key23": "9dDmxFBSJ17dLCjvbqv3sphL8EChmf4poD8eFGcuXAGgM9KPxXfrgzk2moskmdwca13ELst2pzEGXVg9aGQuScp",
  "key24": "667CafQ4Hz8CZ7WEBhNvWrBvhRfT4g5mfYiHtgUCoNG4E4gzuQySZYwZMKNPAjd6buCuUim9Zp9ibAfpMLRSGoxm",
  "key25": "3gw1JVq7y214NLuDBreLp6VLWp6Bgxq263qbXheRtoivkCc8E3qNJS33z3rDNeqgTKNLrxz1fR9bbmLehXXAh4Jr",
  "key26": "2D92ss6q2rWZH98f2HvokyFJVKwULqCz8X3ZT2DNrwuzcodtSEYLxDWjHMUxB5PbV4ZxanBMqeiFHqwyWsbDvuGx",
  "key27": "5t7f146wPg8A9BuZpcLiBegTTDaq8e1DzWDApnUxmkUzqRUUDbweHWHE9GR8t9CSinBSyGdoUotJCVcuv7zHn4R2",
  "key28": "xe5NAYK4mHnZq2ZDphmnGWH8YgAkXaTxwajWZQd3AnJwn53Gay6RFrgzChXTsv6UK2sTYjXyVt1zoRZ6cbqzBgw",
  "key29": "zbDrzMCPBU9Pt74U6V4MU8StGwHzcZPhVNT69QkZ3j3wRqa9nFGVw2PNP162Nyu1z8tju1jZ8ZncNLGgBNFGN8D",
  "key30": "5VyyeCpSAsp9bpUFo6WACG9MgiE63PquEMvsFbVedGkpkm3cqW9Mq6EmkSz7n3kfNJstVciRtDK1pkKJMhBNJGpp"
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
