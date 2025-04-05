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
    "4KBSn2jsae8fCnn9hHxq4tsLJyezibsPtsw1kwiBi2wJzpW2Ct7AMr9LxA367nS57jyrmyePEUvmW1PwnzpFMty9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbcU5RJo3dEXdJKz6398Wg2JGWErkGAwpnwAN5cVMFRomhcyYHnuEGqGzMJfTuYiH9QQDEkkHBGQd56BcEJB34M",
  "key1": "NqLnDLyNwWw1o1vCAyZSvBCUPJpB5HdeT4LMqz4yAekefysiZX133FFeumKDLQampPq1a9CfRT3AqazoceFHY41",
  "key2": "5JCYQ3hBJx4Z44NHErEDvFaphtzFDHQYTK4jXEZ4y7TMGerNybGg9SRqFYnrm6KqiL9KGAEmZkwxGBKQVs2hd4yH",
  "key3": "4e1QeH2Nt13J9sk8Drb68q71s85smL4PKWZyiykE4xVHPp4CJDpdp49j3SCjPAaVYTkVM5yYwdMRyQpXFMrWkXEq",
  "key4": "2gQvf4G8L5WAXZdH6GqZZufhLMbSj3SHTTgXV9k2TEZWKKMvKZmn8NMPQ53R6HD9KvgpjTULRyakjMN1hK3PXatv",
  "key5": "4TMCxyt9MprJ7ZqTHyxGBf6U6uLmDjXw7q8VgtCgb3hi69gazh9ZCqWmB8K5n6bZbfUEnqygZEFxY6EJ2JfP68ek",
  "key6": "syA3fHjvFZKG1Py1AzFKhqPXbXcWLrukrLAEL5y2hGDtrVXdykzqBqokXuUQsTBdS5r4rzDyp5mt9s4rHVHUebW",
  "key7": "3wtf8M3KrvErQj1MVhuFGHvM4R4v3JYFCjQkg5JJnRTSFENvWLnW8k3H5D99r5qMQktHXqWJPNUuJCXRExLUYGiH",
  "key8": "iV8Q2UAR3yxhsQCu8sutd6BpZPSjaqdAoSwBYHm5mUNvhVqXhqfpSJg3mdgwkGMPpdpUEdccNn99ipXG9jd39LK",
  "key9": "3ZCAb4L36iXMtD2EWiYUhMV6fKV7eAPF2MsD8a3PPwKJDF3Mt2ZA5Rx6G8rmNseXN5dw9KaeKj1xUGxuJE9S5DkY",
  "key10": "Qmx4NhQ27Mghe8LpzBx3eJBTYmJABhHeecWEY61NndcPa2KkVo9PZvwHSnF78EPsY372p1jgwRy1bTuGzBt9koG",
  "key11": "3iet6Ro6k1aXyUgwqMaNUyh98EcNEzRbCpvjtquyC5iGjJqgwAJtepb8jB3mMvKMzZTHzDRXztp2U6pu7nH3NbAd",
  "key12": "2Jmg7ru7M7tTyCBYQMaoaseA4LfasHHMsYKfzoYfKoiGLahKRSMurVXBUCb8CVpo4Kt7trDABhm2d3SZwQAF3uh3",
  "key13": "x8mrSYLib8VZ1U9FLu8aeqGrWH3uKm8rMkXdNxHieNsHNU1qAHdLqTPMDgDWdguGRG25h2ghDD4mBxjbnerV9Wt",
  "key14": "iQJ1qjFh2PLgGKHK3jgQgLkph8bLdibcRAJ24H36JfWp64tUgXeDycR3xp7DKQKy3i8dP9ypboGp1iUwU3RxMqr",
  "key15": "52aHs8tVi1fW38vwSAAM4PNkjf9HbQcAwrDf9Pqmvks2kKQvLKqKVSEKqfbvz4EnLzGaPqsU4kpwGiwtytewrotE",
  "key16": "5LoUZiRWHbp8eG87rW2suem5Q1AHvX3BUJ75oo2NbUqi5mYHXRA76zafNDpmijMAhyxwjD4sqQR5affek5LwXkBt",
  "key17": "2gNgsE6y9QaY4Ek92N7vXLpr619wMxH52GZvtn9aNFv24b2jASQnD5h3uG1yCZYNh6JVTA42kePn1L2hqxUY5Vax",
  "key18": "LDuMMM45BKeti5L8a9gcmMwgb8h9UXY6AZuJheqCVJoWRprNoJrWphz4wtz9jQ21fSof9TYLZsCWGVsJGoPVtoQ",
  "key19": "4BTkJVhnCNYYKB7PDAUX9jwQbzH8zXHUYSKX8kc9E5Pz6uMLT31FjWNckGDPBnVx7SBoW88kkkZj4owDCkJeDG6p",
  "key20": "2D8cHjH8nC9yRBcqUktBsbQoKB5EtTMyaj7suNhyj5iCHYbVz8R7955buJUkgzKEsArgJXNaknD2yweTJ1eVqrLG",
  "key21": "5YGVsSiCgHR7jx5WtK839MeWkg6SZEJcjR6mYT1yKweRHjYwf2irZEhksCmAfsWnf2q7VmEXmsFJamXUnwSZCPRC",
  "key22": "4eqkfjUZ6TWsRAz6mnRJqLiV9iUmKA4ZfGHF8a9XVgLRzJPVBAyoxa54qv2SYDN7yQPRR88EcdNfHJMecfRUs5HW",
  "key23": "2mc99ugrJeJ5dZbQ9oCSRJqemFzLuV7g55WAWQMipqtF6xHkaAXLWc6NL6HfL3VmcUYkxkc8PwaSzzPMrezyGAeW",
  "key24": "35v6x9TTTLJqwEJnLJM8Y3U5ao1SfQa9hABAyfG4K1nth9ge99FFFh1ckXAJzQSPnBH3QnJ9UoZNyM2A2E3cVmxa",
  "key25": "38d1MuGPB3gENyDkWkGdubZkNXJKF8kCFBzSgws7eAS3aw9KQrDxVPjCJsFh3X7RMU3DqNcSqSnoiavJfrRg2eBv"
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
