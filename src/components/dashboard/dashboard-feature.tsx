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
    "4tKtQAv8pdHozx77Jk5DpKD3Fnu2W4uCQp2JPtDU1Esf8mgQPVPHHyjxxyEpNVVnsxP4BpJBS816u1CKm3JXxBum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VNX6hJPYxhXi6R8E59bA1G9txgLuFgjCD6hy5ueY6UYNjJMeGZujocYLPb5G8EADV733QocPYLpc8U312pd7td",
  "key1": "5NdeQV584zBahe43tmzDxSg9idZXexHTcUmZR7o5aUhaArLfevsVSVteZWq8exSTd4UEPFnciMzzDMdkRmkLvEd1",
  "key2": "5RQyLnWXQmW9vTog3ziRrjz6gNKUZk6jJJm8BWecdLBfdcH8RMgd9nyDnyqtrcjUu1eYYNHKW1oRkSsjeaqGoF9K",
  "key3": "5rqmzbLRAaEeE3nixjUXbCdwKtRcVoVre5Zo8UMnfbDqFMV96u1Q6qhRa44NML8AeiofC3aT3Jd96ZRhVQPsh7Zs",
  "key4": "CWYZAwdXw69o2Fnp1GBo5AH6mBpKibrKpvxdF8KU2TYZj62CyYyzHscPRwJnVycZPMS14FQJaC4CRSqo5BtgWwM",
  "key5": "5kB8Yo8ZGdy3USrCog5caz6bhMEZMQBqgDnUEPXZ88zJdB3mhJrb4sBH2RUNthCrzxfTBHA3B9KYG613Xkw9wYr3",
  "key6": "3rWdhWoP2b8zF4DqtGBUHd4P9Fn7w7TAAQEFjEMtJZxA4eTKGNGDUUqEYxJQqDP1Hq2eg335zQxJ8SWPSEQ16hUU",
  "key7": "4h1UTwtzTBjxPnut9khartaNNDJnQRfc1V5PHTVtFPLrUhGMcXxDsvJS2TPRTiVJcpWZefhmFWskx2fK7NbBUhsS",
  "key8": "28uC8aExnW7WJ2FqJaVTwqg7D7HQZxpY2PiJmYk2vGZvU8TKNeRjPDtS4BzLPFduKX11HyhVb43msFVnnHiu4inN",
  "key9": "27Trhg7Wui3womYhrtUrduyGH9J4T1p9STwgPiqkPBd2QSd4Lwh6mdinSDzdp9AWx3Ln3fHpZccJNTcb5L5h1JeJ",
  "key10": "3xAZt8p4FHFTtvPZzhJKuzDM9pV5i1BtPuKAQyES9GGKGcyVM9EwKRJo5WX6K8VvpzCMiN19awJCfSbQzBhAuE7T",
  "key11": "4QooqBrvabA9hCoWe8Lq7NG4G1vhbutbbcHVFtwXkquY5hWJhCPQYuvCvoSZCwDTxrHhofRvEcuqydG75aLdLv37",
  "key12": "3EeLrTBU8h2Sy2L6WTKg1aqKvpNKmHDjXYahwfYxZHShcMMB2YdJFZgN393mcTrSq81dzUqgd5DnPc7yBT55SSe5",
  "key13": "4xkGmrYtmtaqdLkPmVLP5hX6UWLKhyStXfLiKrb1cSJbwCAhfnx6JqM2VUzvJf4uSw5LXegMoe6NyDRyhypxacSH",
  "key14": "3NAjNUDJGwcn287qru1Xq1dQufjTRK6qL6TRT12ftZBofudYKYmYgYgNtLqzeJhN7VBELmFmmUm2UsqbJX9bb2jR",
  "key15": "3Y2ZENqMPk4mMcVrjwWdbqojv8bKBbRkCXRFG6pn7shgnLLVtE2XeBTeo2UReqz8nCJ89MsDXDaCXsc9E5QnxpjT",
  "key16": "4ymkWtrVjsksquk69fEMWN8Ba1dQEqty7XQ7iYiNTtzaEfeYgmrqkb6xBG2z6X43e85mFeicq5rVR4pETxrhKys6",
  "key17": "3hetPdyU5bFtpdj2vsF9hFC5L4FNVNTPALW3FH7SafbtFswUh75d4DYXSoZuyWpjwahM4AZuyrhexVYN9rAiGAco",
  "key18": "4okHyvwca8GUpJaoPnSVMLjH6vWCDTyQHWhMczg2vJGWMDEFA24aTG7cNAkrCvVXPJyVvSVuTDEVBYzmqdgk9c6p",
  "key19": "re1Y8iUquJs5pWMBDZXg7YB8WAkr8jXYXFv2ZX1ESwJRrXvGdaa3o8ZKEp1NjyCkDSmmBMru8xJGgYdeTu2r46f",
  "key20": "43GWn4PWDLtLX4YFuHXFka6LKj3mvaZgb1MpNWZ7eyLHfNVrNDfWwBNtnxn5pA1g1vfHnXNDXai812JReVbzdV97",
  "key21": "3AF1hL9SHkF9fT5B3Dw6QDWKkAJmjo7EBUB9quPESgYEujerAp94piaWq8QwpSQeLi81RJrA5GK47UsiPXgEmQxM",
  "key22": "4qsXgxFQ5F1MkZve2DmPKZXZy2x9vpVkYRZ4MkjUppcDhv5q47zbCxWUQkXFjpwYhRvKuJKVBGZsHcP7fZ2ZEMb",
  "key23": "uqi8zaHGPUgpa1SrMvzQXEkrZ7zzQ5ToE8ds1NYADyRYYt9iuDF6jPW5hhLUEamaqX7FcEcFGFqRTbXdBN4AF7G",
  "key24": "sKjL5fmZ7zHJGZF4p6sxQ45PBjwVWJj4qqnzhZVzA4D6WboaY5TmwQ1on6pw5pXUw3hJdHMEXvUmsTnLXZ4AxZx",
  "key25": "3k9VaAibZVoThtZxWqyNdsMnpucr7HdxJibpVn1XH5SAxuFC3DnSZAKzaeKU6BKBNPxwzSksLtvwPXhzfTGCVH7D",
  "key26": "2ykywWy81JNXbKas2oCyTR3BSpkeav6NkqYTV8rwCeeiAkGZWNL3dbWAgapALrG3Arxz2y57mAbCqYjU3ZTDZipS"
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
