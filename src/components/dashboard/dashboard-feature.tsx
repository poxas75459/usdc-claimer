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
    "2ii2MyGg8aWKGdEeWZM9TmcG2x9R16Gwc9gaEmFBV8z5fq5RFdLwd6ZVhwvGa1cYe3v8CQ1WoMurWLWYYf4m2E23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evioZ9YnNqkpymvQAqgoN2Q3CtWYcrEZqisaXG7RLwZREHnpipVPQjBbSBhGF15ygPGRUg6nffpxSNKfzrZ8WEG",
  "key1": "3CtvhhX7uAu8KVn1xo8XcWHi6xNN1YCCicGPSMh7pGQ6nXPdizi1YxpUzx4c77sYNwz5z9jbGgKpH9gt5NP78u9F",
  "key2": "ckQCvgq5Cn3qM5QvbyJQPARfUbrTnPhMFAUt8VrEfGVB9TUKb8DVwCKR9ZqVtavdKt7Vpc2ayVDB6uuJoZ4vhKd",
  "key3": "2fKYMHWZs28rBHLsRog1nqYX683qKYMUmeWWtTqoqwHxLj7nrYg4614TKUy3ydsqozQ1kmJM7pcKRsh76gJckJ88",
  "key4": "cHDqJsdVifssicCrqZg7DNRoP2qDtDBJfCwtr6pevTEFV9BkNegthxHeXdetXBmYef7WKjnnS7hucgdrKfPYLBr",
  "key5": "2W1ZPAJYyNKmV5agpHXnDGi5cwqqHa5418TnkbMye9Jyo9PsyS6HASdeu3w1iS5wYi1BbgB2D8PeHiPndKZWGqnL",
  "key6": "5nQogHRqZ4gGfjd3NAWKjsyStRARmXVqufsw9E6zohkUtY1qwfYkw84Lse597tpNT7hkBdXZXdQ6bqysc7J6by8D",
  "key7": "4AnyP2HVbnXnKe7wVhJS4eMwMzLWWuUpig7mSqfTdqjLfqLYob1uC8SDP8z2YYR5CcBKdxBrwjE688rHkHktg9H6",
  "key8": "3AakqRC4NpHE3MZPKVbpPWZAFRwKKgxhprCgQNEzUBkzX8dxp3k9XhvTKTgNGcYRcfDNKrCaRMUwBnmygDwPZ5n4",
  "key9": "5KWY24CUUfjoDNtiFonmhSHxr6LDUGdxy9h1UgXZAtiWd2aeqyk3fV5UcMH38ciPfQ4EjzYHFu4k2iEVGALsRC2U",
  "key10": "3YYrdyecsTFNSjrf6px9uQrNMNDZiV74cr8wEM8JbVXXEerXx9LU3HWczxj7kiQ5SE4NPeHeGDaADZ2347bPrt1Q",
  "key11": "4KUr19Pv8mgJPRMBH7ybFLe77F6yM6Unx2TZyu4NNao1N27uzum81SpKSkqQHDg714S5Jg42xfrec9ZvxHMyEPEg",
  "key12": "2dykyMrZHFwaJAjfd3bkiPg7yKSNuVncy6GQx2Jkmy8XV2459keoePC4Lvb26UjhbWqKbAVmPaHWoaWecSSms8cD",
  "key13": "3DErj5sVZMni2Wsv7y1yq6hou8ejEGwDXeHqdW6GyKhKVXsywVxcY2oZJvvYE8mK1aT3vSYvRatrnX6XrRgDWMh9",
  "key14": "jLGuQ85xe9d43fUkUQSq58uwuGmEgroLgsmvQ5xRAmQABi7jmqfWvph5jAKsCWbJX5Xw9PFFtMdHhuW798nMnAq",
  "key15": "K7YhefsWgvvjJd14uR4RhtEWCVhuAQTLhdYSDW6SRXyJNDQSgyDdVALqFKtAsLmqvWpmqyH4VwJvGKJR7hmXMSo",
  "key16": "3GuoWj7gLGdnysJYdxdZ4YGv9fvDgh3L4sMzLEsFrXXyDUPmVuKg3hzMHdzcT1gYjEYrqPLQzWvmzThtx3XLyJxM",
  "key17": "4ZneSuK5Q4qPFGq1FQDdGg46fgw7bzT3CVWC5LiFyb2WFawotdHjxzztU2ux1hBdhDKqBZsrVCXZa6jnYumhoiPz",
  "key18": "3djdvK5urMbZbfhUaqqF8xFwL23jzAmUDPv77xFYWdYXXVoncxGGEMcuhawWXPNN9i62hJgrXWUGBtkgjbeJvkph",
  "key19": "51kCi6AQ11ug7xRbS3v7Fb4CfcrprwFe1vKeDiBTZbigavHBkTuqBTi325DQjrwhNyHR8G5N2znLUddUgRp5cSq3",
  "key20": "52mtWhaCVedHtYBVZFMGn6aaQQHGiHiCEJqRR7uo6YztTboWbJDo4a6v7ebgQWBPijg9A1QrLETaiRSTBA1t6ABj",
  "key21": "5gqmFi3BsyomYLNxgf3jtXV8sAv9UqfjMyvbUQpsgTecF9bpt5BcjwvQ4UqwiwrVvHm1biJA9mNzmYpY8uX2jNMt",
  "key22": "4gHCcehMQ87nmCdcAvZRHzP4UcMjBmUDynqx8utRWKSQU6gKq7FjhuxR1TUShU9gHK5Rm64cDiYSv4JNTPC8DqoW",
  "key23": "5w5Mn96oksJjuSzM2wsypyUqb55iRtHAmRpaqGAPUfbCFeb1iHGitajm2Hn5ggj13NXAoiia6Pk3FTH8g3arRpSi",
  "key24": "2nicJJK5Mb6iF8meYeYS8XjkMfGXxU7i2edZ7WiZdtUTYCkfW951JcSSNbLvAQh3eRyTBo73ASVfoptWar4e97C7",
  "key25": "3iXY5pLxvTD2Mtcf77wFZU8pBvqcYSLBeCtPxXXszcLLhUhDKdaTEqBwsRZyP3qbtHSHyL68qqBtyX3zzB7GREYm",
  "key26": "49tUF155pp8CeokJqbBtyCeofrPQQB6KMCmqyuszbVGCZvAKZmrrdSwzZpF6ANMiLE1nXEtdZeuq2cS3b4bbbiv",
  "key27": "2iEC9L5cvyoFY7vPAqp1RgCp2e2iC2apphB3YZTnPAotcfaFS7U3LSD8aHjLguCJe6aYkoeR8suDqBRc5Gdeavf",
  "key28": "B1jwnRBzP7yECXrTDtqhApVKPCbwwXCxHQoSEske8B8FfW57Bt8HGBNvhieeg2ijityL5hKVagYDrd6VYsJbdLb",
  "key29": "4enJR8AtD178rvy2oPwYaLS1NaB5VoZ9oweeNoWgFtLFN6t9tZgDYZZ6vMxfbqaaAfRDYx1YoFwQSfThZRHsNJhP"
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
