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
    "4FarYgwpv4yKCkSR7MJF8gfxV6b9tHWxU1xKWKCxbGTjdJGhhfHmKCsEqQo46Gf3yoGiS21Mq7Xjpo2Hafxka7jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5symGL87vYhYoQJ1cCtod4D6HWJiDhy5LWyvQnBq9BSBj9HkF8ujmypu8z3qvxyKiECWjG5PdUfff4xgDeTpVrS9",
  "key1": "cA6VhEfSectmmdAXFCRZhFjbAtUTtomf8z3EjgVJHjjpQ7ms3n6xSCRLzzwJvpopsZQuuoJ5aw2aMXxxiiMkAc2",
  "key2": "5aMXMrX9t7F9QLwSCyXfEJqgCDe1fYczepPzzzVmbdy1cMYohGsCskAEek2GZPzzk3qfGJ6ZFBmmEHvFuF84pnme",
  "key3": "4vYBPbf7E4hJYKCbyGKpxophBZ5EPNfzy7KHE578hPurFvtnDRAEo4p2KtATSVoted3Lgg4JRM9fVk4xuP12YBwX",
  "key4": "4oyLDrrhBRMNzLRHediwGx5ARAynfrZTvgpc8YmDGq383reJ5erqHLZ9RwM7K7iEdoBWdWuK7kbYf9LD5DJzWu7T",
  "key5": "2d9AdfdcNUMWAh5kmTGVk84ae56q4uZLv1oPiFqNTQqu5K6Dbh1optkrx3qmTCVn45V2SthP7rnEio651TKTJPEg",
  "key6": "3AXgdihP6FSigmqBE2DD6wZFkmPYFkT8pTJcF9t3GmTobUr1MzXRHCjBy9s1uDHxJqNSrmv6GSaYcQUEteZDYgb6",
  "key7": "jxAJ7PDvyBmeMUGLBNu7Kk6WweBUJwu5k2AkijsMWFy2bdraM2e58Zdn87YXorSoEo65VN8y7JwXJexZYi7AYxP",
  "key8": "628ii8viZpkrMV5SStjK8G7oJGJNCumequvjcvFhiCWQxjEQf5UPN1xdFSjfJiXkQAjtgxXTFJUpHWk5TkcnRUQy",
  "key9": "64NiUMp9RsLkxVxJ9DDEuJcSRnXFaafcvDEdQyiNY6btMRz4M2g4oLzXnyJ1p4zLB7EFLNga2utHr8QuBpRnYsfP",
  "key10": "hRgH8ujdJuAJnpfDizgSPgiQ4XSrye5hPf6GnGvMaTuMmQDec7Hzaxo3eaJzZwxpw2GimpoAf6BdJR5fk4RkT47",
  "key11": "fGzsNtScTat5TxtnExNosV8K31DaM5PWXzyNK5hEqzdZCjC9p9PrubApstdkwWpfkq9qo6sNniUcVJE9JUuN5vY",
  "key12": "3pFiwKRyxDDNJjkobBMMfgYpNLmkCCDoTQKW8kiiiGX5gxNudvkAQHWzcSNW2RXmMfjYQFFGAwKjvDjeszpSic2H",
  "key13": "37nVhXMVdxB48GWdg6ofyGqR2YDxy85KmWr57PcxSLwvV4V3G4yLqjeWmWaZJ8RZtQKRWi53muHmGLTbQtSndmLK",
  "key14": "bKH4RRFScLHoCjbtQbBeW4XkWbs7dJQxKUmYcbHensKWydj5BwF4ziPzDL6GxkrHn7nKGi5XmZkF1MPGWLv7TJy",
  "key15": "4PUezY2p2YMCMV4scXyEtPrCB3JatGsepZdm1WtsjiyqaGeTaNHr4uXGGjiyysVeUBhnxRqZv7t7y7jDyJM2i1DQ",
  "key16": "5bimKy3TWsxcfW3H6JeZUJA7dwgTXekH2VtfJUFp2igfkrJ8o54okHNJ26hj1KBEh7BmBQQmACTWLEyChLPeGix9",
  "key17": "5W2rh9iR3P67wyhpHowoc87aEqtfeqcZsQaTaVXY6ruvBzXvydvm4z5n9kUQdvZ9XykbHjYnr1w8zgYiysE3oW7j",
  "key18": "2G4eEigkKoTFhSAjjdNuo8mbKfRVSxqy8S77otC1NDTRFCjt6w1731dhbQ9apfp85UK3i2xsEfi29hM3sd8mrwfQ",
  "key19": "c6wwkdsPVEXejKaG8kTqyJ81UM1S1bgXPnnoJTgarmdJ4uKGZkvWzGcmuTv5cqvnTWpDUb4Cxi9PU3689Gv15hQ",
  "key20": "3duW4uUfPqDgaKtwfj5KfBg6TDkSNvHstotEWdq2ixprhBLdnpRbJvqWxtu1oN4abjGHjSAvccS3m7WAhnLr5uhX",
  "key21": "3fswkJ4YSa3KQovGG278uGp9rHqp33VWoDCg5TXyiXiYcZrZyyZTJfWaWA7mHbjMmLcYDsgUUDfmLnqxHDZThy89",
  "key22": "5qpM5nLTKdyqiGLh5SXmx1ZiXHotFUkUdV79MicNpZmaQjVRGcvqwZrQc7MrMVQa4CF234uSNEYTUfARjxqkHYCM",
  "key23": "3HW289Dn5GmPWoe3RMPrqTGMDnYhokovYHCNmTB89tgqJWTXYHHsbxvFi2fXoRtX5cQ1gHpbdfeD4MuStTF1GRRM",
  "key24": "4ZiGpQsgc59M1P7vRoAgHCxB5XnKs9ZYqkxm9X9aBGRqtSJpJHFq2irArt21Tjdd3RLsgVhts3VLF3TGb4ExUnj3"
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
