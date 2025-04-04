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
    "29WgenKzn43qiJ4jhwnaaVXnvRr1KRkwUHHwA67D5EJKmZVWTMe5bKD3iGMhnVMxkiF88rSkhmp6WG23d7L5X9Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfL3mar6vaYm9bfaedYw9qjPQRZjBkMo2wbD29Ew9VvBHsPkJ82RWYPZ3YvKfQVtmaMU9rYsgBoL7VTUaWmV96B",
  "key1": "2nFUGrTwA7u3hfwYJ9vXDyrReTXZxc4y3D9eZyTLmJpjaNmUJaBVN5kJCvZVNtmKHym52aD1jGqN57SBP6sDiKLr",
  "key2": "2HjD7oUbswg53U4Y31AajxY9J2ftpUMfeEaysUt8ZUiefs1JPhpe8maQeZ2JHSyt3CnDnTThcfG44Cw8UxzzaUUG",
  "key3": "5btqs34PrkPxijYowbDTwHVQcq3rnY35ipWEN9P3k4EQgBqwhfrjSXBoA4ArFC8LcegpBfenxx1X4G5HAyvebc48",
  "key4": "5SQnRpUXjBNrGrUMHp184re9exKB2TKZcYM1ob8HWKmUj8GR9tHF4AWFh2sCdsgHSmrZ73zes5e59QX7iz4f6ory",
  "key5": "3LarmiynoabkqSiKMtvf1WXNji7HqKHuCRK5v5KH66ghYKEFEpSPiJR6zrG6jnmop1pQW3jHWfBRnxzm76koMVeX",
  "key6": "4pL4FpowWdBbSbbaUsSLFzB8hMGM1rg4iB8cKzYnx53XECZpgv7xe9XnW2qqDeh4BDDz76tyMH6q9kkC7x2DgPKv",
  "key7": "461RwM3NNabWC4GUDCiF4sed7oDRurX5HiJBD9oeroCP3Y9xxuhsbYAAU87xKVTbBE5TMAgtVUB9LDaFfDpRGeUh",
  "key8": "3YV715kRioAGsgrQc8Z6sbK7CbNcheFK1AusaNLzJbEkY3mH2MZrqdTPSktwfwxVUr7XrPooFiJi2MFaDpNMMqqH",
  "key9": "61EfkkuhjfwPY2E3DEKRMBkJsfk6L8rAdoG2tudC7H6doGus1QFPWByuBYFSPdQgTpYwupWhmFgPfke7vsQ7Cvgb",
  "key10": "2GwiuyBn8iNYDRhzj2ctCpAWq2BJb1CVcQJGSReXo4uNv2ayCt3QcXceQnzCyjkLYBgW4TwGmSMGpgsRvWvhjbje",
  "key11": "5YRqqds8efEdRPnW1uByyqpqYtifg8djYJ3chnfrhZWbCGak81n1eBnwpr7Kt419A63vJMUQwYHK5zG8RxBwvDcC",
  "key12": "4kTQ6VXL4aHmwNnrphK5dW46eCwD9Hu6N9FFLvr749hAjhTnW7q5xTp6oyyNW5CnnAJDYbH19YLowCk1Xa7Ncqa1",
  "key13": "4rT1b4AULcjLbrVmTtRMEFGZdd8j5m3K61vSaCPxTBiNq4aN5wxfcuJecxJoLqNVz4AcH9XXhMFTwXdwsxCj47Ra",
  "key14": "4SjiJSbXhoiG2jjH3g8DpGaqEM5rEBzfbrngnj1D37i2jik9BJuuV5wvjPayNoN2ibUcGnXdPpYFhVYD7wAq4PBn",
  "key15": "2TEFTmsJmNp1wVo1NCXJ3GcyznowJpBguBmatRZRz2yTY9uVR3dGUh6UdhHfqHvQvXERjTNnZVizvjBeMuuUu7yt",
  "key16": "4yWUBJupfHCJQPwL2FUZBANjnqxjumV8536xCVhjfKpXuUWjSWegPbydrsnjBFAMjVPBKeYb59reqziMUnKJZ8UT",
  "key17": "4hXpuzNguz44LkUPvHyFtfzszDzVoRrh5jZ8ZNKnhyxdrrA5qRpiNjwZttrfJv2psfo3n2p7EpMMnPDiremVB6Kx",
  "key18": "2Pp8bj2verxYddTMLDKVNGs7iXMCUB38n9U1WAnh28sduHSsnV18Kx1KpPuvLzTdNc7JpFxqSg5dpJQXVxZGcxUj",
  "key19": "2kV8bATpzTrW1y1y3Gg2FbP1h5yEq9UEswQ7LHLJqAnumXntschsK8xBsP6gLeu2WvySEBKzcJa9Ym6cmxtMYQS2",
  "key20": "5vkYfwarxEwe7nSu6BVeVNUUzzqAQY7RWvdrrqQkbDJZzJzUHVbtBjqWDE2E9Ezc7S2gWxhU2NsuiFQEuQAkCd57",
  "key21": "3FQCcsGGDXJ8t96yEkwQ1SSKDB3fcq4CMGwApnEU9ZjN6R1SVEtEDsj2yzAkC6JkfMwk4Ce5rS6rk8zQvVPQe6Mt",
  "key22": "2mazDC3EPLCVZhEG4ZmYZtbGsVwkzsCUeuuUXbtX11HUSR9o3aFN7acYxrwp4C92NcGtNLDXTzmjq5v1jjfCGSsq",
  "key23": "42i1LMNoWB7Nsw9JQ6HVyFKVVMu3fBbAYJ5kXc1WmBmjFemQRbiS4Rv4YTJyRRWx6qSQHPXoN6GjpVfsuMVgzYan",
  "key24": "2pxUTwT7PVStHLnBGDQpgZRiAHK8MSmbxCk5TKb5y4fFpoJAA8uzcbtBeH7hxbCnDrBj1vSfC7pXJRpDr1J6k4YG",
  "key25": "3fQY86tqLLMsj7c6J3icTkM6Y4gnjhnJeaNii2LYSfyLBmYF1DMuJJCim9CSwqyzh9M7hWryaEUEKUT6mx5ZbNQ3",
  "key26": "4K5H8nZwCjcBCiRb3xpped1UGWdZmiN4NJbcR4kG3GngiQe54sff42n3DixQEB6yRQ5PWB2dnLoMwSdCiRUVMnVQ",
  "key27": "3E3e2CAW7rEoNnfX4eXGZPNAqcKBMa5gG6ApktdSUex19A5WJbC8ijCY7cFVzLDMdJjSpDKjq5t6VbptBP1nkjm4",
  "key28": "oPVhugda8AAXaZiktGZjkndnKWYXfRgZRyPiY4n327mFTQvJ2wK2ZGcfYX9HFeH2nYiJ7i35yFYZuZs6mfKn6ZC",
  "key29": "4Rga6K9eHMpJuoiBkcPxzhdS7AFQvCAafSWJrq9fiCohFLhSFxrNrPQ6CLaS5vGKhkHANb9n5UWFroczBuhV78nY",
  "key30": "3LgWwNFRfQLD4Y34htHMDYcTvCc5PSnmXVaXZYAhZAtPh4FA2UKGsCA393fdS3ckypc4e22L6DiEbcDN2HUo3Wbr",
  "key31": "5YdxfbiTyypcxydsNxKBL3HyTLSzC9hTdUetLXWK1u71bnmfKa3UJqfiHZLEWZ5VHN6AWD5TrDVBWpDFxFDK9YM",
  "key32": "5mzKqXXm3tN1qqSb7Le5rfLkJvoV5BCaFqzLaoAKkctg3gdrZbGk3hoii8LZmoNGivjqmqYKKzkNAhWRDtzy5hN8",
  "key33": "2Wd3shAgsaay5i2FGPynWvo8uXyMWBHMisDcbJy5HXQu67vGcUUQfEQhXnpxdCQSHBAtYZxGaXRyTeXspjjC6pQN",
  "key34": "3dggkYsetb8YHZqhMLa6wkmWMcwbVQmdT3U194kgRyxZN8gbJ9mi2JzwMBNJ5cquyLUDcjEVq3jFZSDbMRZSbrwS",
  "key35": "5CEkbJzHdHYYRKa5Y7RBf9P9JWE7hhTNkVrBwwwctx5j6o9Qa61c1WRv24LNNEeLGH9fyfH9rkhtU2p4XYXN1D8q"
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
