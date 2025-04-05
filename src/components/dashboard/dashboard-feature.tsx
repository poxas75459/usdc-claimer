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
    "3nTDf2oMj5xErgxtRSeB4jW3Y7SMss5kw7zNPcjUgXRLgK9HEzTeuKGqxQXCATdmsSNQyQtWtVKAQafYtDpHbPM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hH1E7okPzvX5WB8sSYr5sS95rRrPzxPrYrCmWTdU7Dwc1EEJjbqQMnrawuc2k5HAuT7xoesRT2GAsmXUGutn6hg",
  "key1": "Br17H6qav3imhkE5zadNpAivfz9JYWsMjoFW29VgQ7a5sMREGLawRT9EApsou3WwSUyPuFWrK4UGCKWTkozN6uJ",
  "key2": "49hE9EB2bAGkYFGmtRp8sCAQuEpS82CsATQZEww3wV4vKVRPzv51XuxXmkZk72FfMkT1GrHysH6Dx2ooVetDNAi6",
  "key3": "4b2cMbPLggXpX3Gbv1HvPv8iRSx47TKwM3zNNa3pz3jmXNiS1rBdxEhKKbQGrmAtaYtKn1GbtFgLcwjpRpWte68g",
  "key4": "5mhua86y8Ed4JF4VMNjQMbiQCX29BmvTA81f9BNoR8wLNQaXgSpHhJKrYJkopLapwMiN73iRGwa3aBcSFGQZFfTs",
  "key5": "5bpCNejH2zQe1TeEFoLTDaZEmhCRp3C9FmmJvdwAAUhmP2eVdm9RejwtcGHfo6cEX77vWcnvW7bBRYwz2XvmMejE",
  "key6": "3Z1WQ5sdGGxRdqEDpPGBXcVibD7tp1JqNqxyQUUuqweDuJorK8KpsY4g6cX65FmQsJc72jKZoSRQSdtYnZQEgTt8",
  "key7": "jdsmeWNR1uQWFXy9BEzfzJ3cinfPg6NiqBXxP223yc53gyw3PEfWhf5rxWcfWF1GHUULCBFvx2QkuWHjkd3XoXJ",
  "key8": "5QAqSH4hUoLUcnLHPaxSzwYBZ3jnggqMyzWdUCyJKa9SgNKDNGFgrCoUDhQDxsutA55RPfNEbNCJidz2yP1vVsZz",
  "key9": "2mPYrHPnjgh4fk1SWBEHH2b4jxeBvkGp3eFXMGuSSZd4P9hDEu4XuNhff75cm9LBJHFFQqCvSmQid67SdBwgszdW",
  "key10": "4SmLzo7nXiw5V5GrrAfHN2yKLt4jDPPjGPfDWHrcBsMUM1NArHyLs1CMpwT7Y7A6HfEaNVGzHEr5uKpxuVqCpxnW",
  "key11": "3NJoNcq5Bgtnjmou29TMha3T93HUUmYfUYKp4XcZbEqESrL8SPvYSPizW31zJTBuz17WD5RtqFxYtufEZAtvxbKJ",
  "key12": "4T8jLw6X8gbowxuugyzh6bQ8FUsYmD1hD73MaqMAcBsaUkK1imUmkZjciRuQfkUfhPbWnd4CEiDjWJR9ykCPGC81",
  "key13": "vWZvf6Th9oHq2SNnxPjrRWTwUvL16pzbiti7kMcWaobNeF1UHNbL9A5yE3szwde1eS32oLrKUNKwbrH5Ha8Q4Vc",
  "key14": "5qX1iMvsr8uSuAcapcYucCXT1VBdv73VLyYYRZXsYXzyoV576nGCBzEByNbYSxkyd5NHEyyZyJyiqLaE2tYXherP",
  "key15": "9x89prdzyowiSErR8TmQuTCif2WD41Ddnd8wpbCiLNxjKvVnmCzD4sPJY1xxki8NFkFtrXvwNZSnmT8PNMzPcy1",
  "key16": "36xPAYNHJf6YLHtVa76cH8NxVMxGXogUg2oBH89ReHXmAbhMvDnUNMdY4dHVKCveD49cuXqB2DhvAiL5wxfdn9jr",
  "key17": "4Wn2REfaxLBrjN7dwtzNF4RKBDmeCgmwHLkQkAGBRVJyTsbWDezozuGzoyp7wkNBMJbyHzK9WzxB5hpZT5qJ5MGd",
  "key18": "3DC3Yk8uCbYihKnTbDuDTk8CsN6nMeHjNGxPjvAJWp1GHiqojSeXCczdQ83EpxaJ3h4j8M1yea8FHGnxKKfDChHQ",
  "key19": "5LzEabreb4isKzVv4JtSz5CKSjzxAB2AQqdt4YEUT3i7eTDybzmNWSqhFjgreGM7LbwexTf3oc7FF8Ln4HFqtsJY",
  "key20": "2L34h2isDLKMJvsm2ggDPVEVcL3ZDZ2xaZU5G2emYTn1dygEaGkws9Xdkxj7g8De2foMAp8ncdgniwo1UMEdsEaM",
  "key21": "8MRp5ZASuwvzBLoWqWtfNaUR3197A4HRyMSNj9ERjYGe3qfm3sSfhrBdVxFDyDwNBwVAz1H5rY6x3DQw2XPFzcd",
  "key22": "YezPd2HFPEFMqXRHhf8zQr97jPR9JpCDmh4pVzoRvvy4hPdGxm3xuHPAMqqKVk4RsrHpcV1F4sQQktEiQsZ4Mgv",
  "key23": "4iM7rVHtEkj4ZVwLwT6sLxGZK8v83MYS7fttdtRxBzkj7t5zFp9rtSUC67VguoKgu7Fk3rcvxJQcAhAtiPPjGaU6",
  "key24": "5sueVifbii1AhFiD84BtrgpZ35q3TrRtag7zcXVxLB9UyS74SZ5qnc7GeAgmT1ob51cGmdoukBNSafdqMzPyXEz",
  "key25": "3BZ14WLQ6Q8d1WqX2tZrMHgQ2VzydC2H35YLg3MbnQKKLWTejfzKhRZwN6Covfp6NqJ4kWqKCGwRHLUHGPPLumgD",
  "key26": "4tGmmywPTLgbKTyeMsmvmbavrdv63aWZcGgE8Qpu8itM51GC9gb2GZmjUSA9VmA2wexnUeSEPAEX5gRLf4YZutKe",
  "key27": "F7kJwjFK8Ye7Fi3h8jVFDSjinSVtSnMf3VthiTfB915hwwJcK6ZRXRVr5B3rsyvfkhQfXstLtEA734rF595zPu8",
  "key28": "4ZiKDoidAvqwgRR1aeP9AjBKEPCeVJgKXfvMvHBPM8itWxtCi3XRVxCFhJtZggUE7Ex75Qh6oiKKfTS87Lgi2C8R",
  "key29": "WcN2Zbuy1SZEEaNtAbXCkxyC9Sgj8dUbU6Kub7EBVz9utNmc5oJsRvEXWXYB9D1LnZmVXR7syD1xMqQzxCzY3dR",
  "key30": "34nTx7kvPN5puXs8D1a5pKgCC3b3mXj2Prin3E7MBMyzVkHRZLUFLt4j2rBtVFnjxkvwcaaCSBjbfJ5ScnS5w8Hw"
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
