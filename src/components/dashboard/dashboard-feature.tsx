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
    "5Qj9ZUUQnaE4Whw7QpfozsQAg76VVtCDcRydLEZxY7hNP2AecCjaatrQ5EWXcCLaYSw2Smno2Gp5ECqaLNzQvwPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7D7jkyqzE2g1ELrVb6hMeraN19khTBwWtKvbgJpS4DPz4Sgk9B1mGQ1RpQ1CF29ah2Z8B6s3UPxiS3BAepc4i3R",
  "key1": "2PVNT2yt6bJ1Ts6Spvj6NwYbuDE3QdtkWa53r9JbVzyummqjrnxn6Mo6Z4TDhYQTJtGfUkL6dVse6gZ28qF1npqa",
  "key2": "2ZnJm9kbbVvhBQYzHWiP2FDpzZzrSrSAQp3exBSXt2Eyxv7dGDAqEzTYh3f1X7TsBEMVUiEHBEUfxB8bbE6uQehU",
  "key3": "2YRMKQHDfMdjmAa3MUtYR1biKJ67YMsMajx7tWz2mYufR9Lo3qbGZgdwGKAgDPZQrWfhsZoyC8dtbwKmnSHM4GeN",
  "key4": "4QX64gpc7rkSpDNgmxGm96J47WVGiNFSFkY7g2NNyfLUjsR7UuCZZpPiLdWndQXVdK2DWRiPieLnAmu69PmNQrS1",
  "key5": "2vYRKoKqzb6M4PKZN2h5GQ3jNwQHchwTcBXAPSrX85N2qG8h6NNwz4u3PykfEdRQv3Fkm6BbtrXsdqBBbqgaQNWF",
  "key6": "9k4VkfkNUrGoDzPw5BVqfMQ8adCxrPWnnt2Ck45zsY5tU9QNQYkYSazt19tbwSAxrFgphviDvk6Eo2nbrX2TQ86",
  "key7": "66RP7AV4XW8yeNP3retDMSzTrgKaGCJAppZQ8ajfr1xWd3f9QPdYoXz2g9ED9fBpWvUSQpdFpou34o687yvGwN8z",
  "key8": "4nUQA9a76ZXJFwbGRiY1WsrQtZeNyZcBXbM2AzqeeXxg7W3YA8LSnykvTGLjDDuUH2ubG2NddZK7bAYB744q8R3E",
  "key9": "3X74tfnDz39JhbANBvsxYYSNRAMczoWffxX9sNUPTzDR6dBLoaJKFrRskVEz8t8H7S7voVNGrYPzUckUAtn2N285",
  "key10": "4i1WZmNBh1qMfAq68Vd8k2yyeGjtsEgK9rcJa9x2imZ3fFEhGkygvmufab29tVtzHGTc2KdTHqVM9WNVfn2zxjdk",
  "key11": "65HnwQGAAGwu3W8Q9afZGqbZd3sFxNi52D4CfeFtq8Caxy93jksYFPRGkckUcjTCcFYFRP8ozEkjDJ1EcWTWAwXx",
  "key12": "2nPQR9izZkFm35RnQh7bfQ9HQLormxLsLeJ9EL6PbHuZYP4vuhrTfnukzRxysNc4xYWW9ryZMNKJCctDFwgKGn29",
  "key13": "6Agiph8zhrMAE7N7HNMrpvsMZrmKhFd5pd6L7C4eupBA62ZmKHNtPisr3StS8d9FmYpHccgW3yExi7PTwrcPi8v",
  "key14": "4ABRKyasz8pTBaCegZ35ijJhWiER53KfNYAgXof4opJUWtohETBMMVQMm1MjtCrYPyeE9L7sEud5undTekYryP2f",
  "key15": "4gFbhhqAbdX67vxjhiqGwNSw1jAtFhti6mS3C72tqVAeq95DLCzLFNjjeyNYypzKzSbsTDnZjfr8BKVM5inDL3P9",
  "key16": "gMZE69FWbZoP3G1xa8Yfx1P2pH9tFtVLELEnmDfjFqwjr3zWEBokQD5Lpwdr5DiHsAewCJFCqZps9gdqSDEViya",
  "key17": "5fSym6avW2NCWFkBgGfc8JhqbH38DXZHERjfbnw2SgFhwS7LEU7QfyHF47SBB6PtP6tGEQCTY9j1qpkAjGvBriBt",
  "key18": "4Kxvn8zGPSHryR8eRDSkGMYpJSWuh3CvLgPraPLsXkwHBfXjxUYxmE8PfCiTGnAHwuy36fiMCtXwN8FskKN1Ae8y",
  "key19": "2wQK5oqbNRFW18chci1vZrNatzxFBoawa6Xuj9gnPVUZKSZfNAFPBy7qn3MtzXFKHe8WhGTEpUkdvY4YXfZetqsb",
  "key20": "jy1gTJW2By9sxHQj44P7uTzkg5CCWNQQffmh9Yeypgtpk8eJ3ZcihGrBgQrar4FGhUWuJrbQmuAChLogT8FWDCm",
  "key21": "wd9Si4oSY3acKhNSBHZCVafh8dLQebF8nP8BWxyPkUiQcFFFwGpjPRJXZstqnyfyjfHLxQtHfzqNPb8UffvVLzu",
  "key22": "4CqBkxu5ThxECA8eTHzmmWNxVqNfcizJtBisGCgwhFnGmTF5CVXvP7ggh9prVZbQWJDWzjStaFvmCRo6qHPU7CY8",
  "key23": "3PHSohKwR3YaWDbpLG9s84Jb8kN64noHX2PdQHvugFRYSHnGsJfsLyUbGipBLsBDzDbxLHgFD5Tcoz6EEKq3CM3b",
  "key24": "3UQvRS3LMCjPPyndwFCy5M1iyKUGUjavyJd2tg1Vuq2jQXL4AY7rSoMHpvX7SML4HTR77tVjocDnGPYGTjPwGdJ5",
  "key25": "54xNvxz245aWbfXrXxeTvRiBVoAzozvp8HEgDCrjNrxVGwZsWCZffUejQGcxz9tUWiuEVNBYjdnX8k1qqf1ywBRR",
  "key26": "59SCczGfUsH9SSMZSWQFQuz6occn2R5zVrei3xmfqX4QajvtKijg3jLn3ixqUPS5TSL7ejFkZ2W3jUyj3tetQBpe",
  "key27": "4sfMWYW6mCbYuXuQpFohFXAgVYoFWeaKCmwx2uLQjVVxcNUJ2tBNJ643i3xcNjxckfiwsJ3HEikvmffFTEJiTtwQ",
  "key28": "25C1wddd7EtDceRY8vy5qqhAZJdBx3RWKcD1mUXLxHDxVgtQv5YYMhTwDdHDckXC7X194pVPcS5Acc8c5nB8euRG",
  "key29": "4QxpBj8vtvXZgWcmdBHkZtNW5CbfTx9e84gVpZDE9sEhhFNN72S9HtCNqV7MGfdkCviuuEJLD2n7GLLaQZKkMg4U",
  "key30": "5hA2V88gdiyBrgR6Y9S1AKQC6RMJNAQKVX9dGhUpmHwRGLZHMPct7KqMYq8wHJgmnXietgt1Sfz9yEds5oF9maQ2",
  "key31": "5RuU76d2XfhA9mHAZYJ3T3RRaNDQXj3BuWB1htWtUz2YmCk5wRoMiwN8XBgZsivqEqmbm7gayXcHGGPXEAQwYuar",
  "key32": "hLyvyhGrUCSRFdkGMxjpotMwgJ5qmPdb9VW5oR2k85hvNARuHFcwwPbnwnKk7SQbQRmevvus6UBb7veAQRvycwV",
  "key33": "4viq5Kj9Tnieka2DuxWiPVa3zrRv1SfqRsrsBopt2kEWZLeCQW6TxWJ7jywK7hrbPK5KhLTMNvX2PEqMvzYG61hc",
  "key34": "59nR5n3hJPQcTd5XuqtQbxUu3ABUbZH3acHcjiDDWLQZxgQXbftFBYcNxhYjVatkfeaT4CugNKekVLtcgqJwMYxj",
  "key35": "3Nwphuoq6hJ2fN85DkEfpLGEyv9QqTxHXGza3wThDYExcBsmqTCC8rTECAaCkNttXZZKqLhjK44qCUK2QNLW9qcR",
  "key36": "23ZAYXQfHJaZ41gdmTbVKabwDrVbbMRAstdkZtjJ8Urk8mxkn5g4F6izwsTfdusfgo4fd9tbtHD53idu28KhNQox",
  "key37": "2tvXWCyB9tWGfHDqTiCYvk6M8SXAAdDpGG57dz9jUEvkCcsizPsRTGApQhz8smsH2NebNavFGiv9YQQ2zFKP5UR9"
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
