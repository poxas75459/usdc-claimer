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
    "2dMFQECfzxTHNVrDaCh1Wqj9BKt6S3ZtN4mzjq17mty9M2vaenkdVZmgBrnrDCvFj9xQBbicrUrTZXnZY2hsnpyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLE6PVR7kfLG6jFgjUk7mivkxVGaUcSexrDzyiuJRR1sY1MVzQ3NHW8M25Mk17QU1WGEJaNRBn4m4S7ifDtnfT3",
  "key1": "aNWCpDKFKzfaSERCRczoEPFERqHotoF1KYxmQfxqcckVBDqHSKGDDtWCn7qNwRS5TJBvqeSuM4cHYoexcKSfS5g",
  "key2": "59qfJriRipXD7RChyH6nd6KjkXTa3nNwefUFppccJiCecTbvk2EaW7WSsoXGEA61hXWQJu6siKTk4HoFg3ULi7BE",
  "key3": "67MkDZJRx186fheCV2PSiAG6Laq2JKmWF4EBAyR67MLGqT4pZ5CmcptQK2Gm4ks7A8F1xpSznTrvLYD3ZxnaKcbN",
  "key4": "2a4qBEM6gY98uAiryBCTYdUrWYHfohXaxtnQphj4CZpqm5ahmjtyz4qtnx3WqrQNzgsqWQrCKEAgQnqVBYogJFcn",
  "key5": "552VELE1FtKwVBFojLdD1772nN46zniEwWEVTE2QgDToq8CBgVSDvLAs9CCnxxSc7K2czjPyK27QhL1wZzLc7nLi",
  "key6": "4a4v5ErmKkrjTfUT8wxPSwDvNvmuq1NXGnWGNPydJPkJre5AcLVBSuH14ncPD76z8jSVc59KAZJrvLLwjWKXXm8e",
  "key7": "3G5VaZBJfYuv3rsXrXdYL7zzBrjH7JnDUWTaibuTwazSgHJdQLCt7vmBYRCCZuM6MjQag5V7HumSoUc8uwooz4ph",
  "key8": "5BmXMnAo3uRqEYNN2PSCagRZP4YfCXbdWb4Q59JfyUWSLUMVXoUxDJTqYz6WtMMChx3kGYVUigbjb2XxEUdTnMeD",
  "key9": "5n3JfnYkGkKKoxX6K1ayrkSp6oh3kysG8D4AUQBvKCE9a1gEMC51XCkVRyCUqnWiKkLQhK7rLUkvjygdiBq8Wd8S",
  "key10": "5nJjm6f3g3ZeiKigLpoYEb7hSpYz6okrT7hBhtdu42iWYUyV6432jVG7DHZPNdvbZQphD8iNFGwUBRTcZSkWqW5x",
  "key11": "3XQT4WybXZHrxruTqerzcUC2UwYEwuZFBSmfSGKqCGL1WPBaECukVTJipKkv7fGfGZrnvWV4GkCsa6mnjAWKhFDX",
  "key12": "2csYerNuzABcb6BoYc4y3h5j5hqeakipdhVXkJ5GjYRsbvEtGWUmLjfNGJUaE2dyaLMctVSW6FpUyD4dFZMtwds3",
  "key13": "4YN57hiBk8ekag3CsWYqiJwwbenMK68job73sDVfcWVGuqV92ioDA8U1qAGmmDanFA396wYQQ2dFXRTVqGawNMcF",
  "key14": "uwyAGti3v45yd25noSGvyre41uDwt5NQeCL4N4bvEkhY91G39oFWrkyvsfPeg6nZNwCcHGoWcA3NWJ1VisLgCRx",
  "key15": "2zMCm2CPucJb88krqRECtdpKv4Yx6VvoGbfVxnd7FfhB67SEvxy7U1iuPcQbKXYZyg7zmbjMTDzMDRKEA2UHcYEk",
  "key16": "2QRyZdpVoxuB3yRgBQ3VoT51ZyJE9dF6JM2KA7RDbYNDpdGByEY1fDnHxyrveRZL9dohSQEbmv2puUnRk45KmTWg",
  "key17": "4SRjyRLAGGbZC3JHpMhxnmFziPXY2w9xHQzL5kciLmgm4cqsWDYGnz18ttU8Z55766rq8731GE8UZpa6nh3KqWBR",
  "key18": "5HEZ1LkGQKoutUBFGVSepoUvn7gQnwM6Gy382LHkAjHCSZXS5Rzr8rajdNZYRYwCTuhHN3N6hb9r6VgXiajuRxtY",
  "key19": "2GvwCvxSAhgLPxiYwW1xmvCEFW5p2SG47eb2xaPtnq39kphNyHfqVVuUNyqSGwxnYfSXSSmJUqJCHUQdCTZtxmwD",
  "key20": "qbjiEACbYw4ycAJARLYKzDorCApjUxiuidS15bfkjF9ZKuHEjNtHRouWRqEGhEHMJv8pso6u1vf17zA5dKx6orK",
  "key21": "5QCWBCTo6MREC5gQn9CHDpiZG4WA4fEKbMnerwyChtXXJEoXfVst9KmY9xiWBxiicBMhSrWB7SrbgvJnTZR3q475",
  "key22": "4rHf33EwcfqhqdiSm3p5nUpAoZ1x4TWAzc7rwY1n1QpZqnmunioupNkqMMY9hunMZghPj3HzvDcs8iWy6iFs7VZH",
  "key23": "s3sXQx67XFqjp4hoT4Dffe7yef7bXjCx2M2FCqQfniLCfpxMt41xL1ow1qGikSmP9QdCcE3e2PPmfrSVs9RF19M",
  "key24": "46kpjNZWABfZQxkXMUoMf6SXxcaVDnvmqBCXStkvpbP4XAsZ6MV8yNWHAPTUKo9QD1iDTBNYpsVgfZDgqTqw3u6F",
  "key25": "2M5gMrLwXGN8FbMbCnSuqrGyimXNZ4jXwWX6rLpM77pwvja26TNji4J8BCuSTjdGND8KMPn9abdSpGHfS4WYnj52",
  "key26": "3RLGERhPToR2bMGDvkWt7rEiiELjuTd5JyGKudK1wcv24aRNMx82hRK1YU14JSQF1CKmiP3z49AD4mk6LnqPuGgX",
  "key27": "4oShMicUvEkNhvKS3b7eqP6uiygKBmvVt85eWiQ3BJCYLk9mCGnqePAc25gcEZyxVeNTq6YwsMwVDW9k9Dr5nRWE",
  "key28": "254LmdnpkStGYEvj9aqucsAGvTUoHtiBozCCmsNxtsTYwU5Q9qdRYn2tFcc3DWz1cmkW8z6eN2JsMGdMALSQYpzo"
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
