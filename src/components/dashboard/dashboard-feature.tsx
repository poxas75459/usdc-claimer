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
    "xdZzhWwGoXZESxbJ1MPbnYnowXWfagY8BYTbjABoyh3tUiE84hEsHnZvvpsrozz1jf84kKCtCRGvQerKndhM8QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKBUDJQb2N1i8KfjDKNNMoXkw3wcYfCbwTaLDCE4cuxJjB1QSyyCoRtmXcpsowcYpSkRNsc6354U9mUVkJgzCD5",
  "key1": "5XBKtnvr7KJvB2soQeDfqt3pfa7SySjxTB89THKBhUQNGGpskboMKoLdq4kkjS2QsAppFYKyQoKPxghzBj13VCn4",
  "key2": "3nqdseLGRwo2tuihYNX4mQeZjpNWezkENanPB91qdfr8uw5CadPW7HhSZCqMt8VfcGyHFAJGLV2tbnq7amJ9udYZ",
  "key3": "3nVh76Qg1fRZUvNEbaACyJmjaCFAassNQWPzGBweA1Qk1uuvZRw4Yc4Tv3Uo9BbpqK7sv9JDCFCcXPdppS9G8cqh",
  "key4": "5tBw8k2KsXduegGVYTCjz9v1pbs9CGm7d99DKsomRMjzJW1iHJQN5gRGk8AZReWEQKxjP3sipjhJdtc6Gbi5Pmgn",
  "key5": "FUAwH6d2f6Pk6jsgvsZd64ErmLSyNLrsQAenFZEpatnCX65QDgtXJyNeZnhXga2yLDGXM6RqWgrNeP1zcQjc7dT",
  "key6": "2ug8RA7GzYHkHnK5nZaoP1KGkmq43oNszVgw3HrFHHfAMo27CXJwQj4s46qKe1hgkv1afkCgez95kW8eYaLnQ8sU",
  "key7": "5CKxZqXqybkrS99NPhJfGPjdEx6vVpwPjLjLYkXcQx6sPzcZ2ieEG5xWGjhrABE3seARbMTi73BMkcJn1ifdzCR2",
  "key8": "4Jz2rb2QvX9DsMnLGSNB9Pv5uHLzQSnqSQoiNgEfwYNRs3bBNDd5T2uCxvT3tmQxDffZTZy2GnX5sgJx7X3GQ45C",
  "key9": "4fAGojQwxhvBdRLXo3deaXUGXkqea82jBt8d4j3WVuLVSSPn8L1JcPibhFYxqyaCndwvop5Q34DCKaQ3YZpJPNpS",
  "key10": "4QA91vgEXrTo5pB9w434NUjdD7qre8CPshw3uJm6j4P5gT17825e7GCZBGVs2FmYQSCon59GNxiWPwcVbA3UdmN",
  "key11": "2kjC2cLHUDUd69MUXhqvnyyKKuNGEhEhVZS6ZoiDSqjwVmZs9fg8c6jAQQ19kHah1QD2UPJru6XjBaHbMH85ZYQK",
  "key12": "iv5qwyGFJvGnx17QHJCoPpbv3ncjTAYX1MRhPytALYuR5s5LSc9oVtKhv9jRUazeGjhEvoBDEubTt7M4Tokqtce",
  "key13": "BGsLXJuEuyxLaihCEABFeqELMkbXWvQrF7em4TwkuohdfvQGX29eQEuqdjRpn1cYyEqjJBjTmj99a84FoGzKaR4",
  "key14": "V35AoMLvrJF8PqmWA49szsRhZXSj727j4CGiqgzKuEiXAu9w6YJwToE9K9nZvragzfvPxeLQyfvmN2f82zBn3o8",
  "key15": "CX4rtSGqyBJPpS63b8eRJBRS9X92vqny4qP9abBkCkuB5zpNeXxJFTq5Hm8PvemucTMJDBat2fUsXDtHwEwCRe4",
  "key16": "4gMRwxj4VRM8YrEwzL6rH374316NBZGEB95iyT5fTimWp4toXDmSmNDGJzi1vLikwWfjsYt5QUYLAfz8NPMW4yrE",
  "key17": "4gAGrS2xMAGoe4626LEKPDNtdWgQ1fz4abnFKoCZByvaDxFGWC6FcVMewXdtTzfQHD5THLHKpJh6zPeZiYyHZ9d5",
  "key18": "65cB1w2cLvdCpNCycts4KqLif66gvVESY5wXMhDqpzZcgK3dDC9sUU6BesAQreK7o5mfSG4A4rgPd6H7seoaPzyr",
  "key19": "3gAsQ9yJ9cweYndy2fGymKfAFA38JoM6f5RoR7M35r7jUMKLB93B9XAfPo91aHw9tzhMfWY4RfJVXoyjVYqRqoX9",
  "key20": "35m5fGNEVbRkvhTfSbQwjvHkwf6STuwmnqBr6QTpkRxxWf8JMauqcH6JrQEEhQjP4KkJ4RRMKTtPhfYKcDkiQHcA",
  "key21": "2UTiDKJffhTaUwKT7XpYaHkUPTWuyy4MU8VzHiezcPX8RjK8WNNZ8uMvjD8kxfNZFNBNyjE4LZpyS7vLrum6Wq8i",
  "key22": "SSoYGn6Rf2gqNQfjMCeivsqJJ52RtE2rTiNCryv83oD3bTPhM4N6NTkuoEKSfKbQBvqCUEqiE5XTfZhZ8PBZzxa",
  "key23": "gJivuMSPbHUR4CWzxR2y8QcuxNDGbwzeP2UckjyHfUqjDpsuYyjTQgQGkHUSg7PGWaSZy4fuu5T3YsT8wiCXuZ8",
  "key24": "36VTstHQMkaEkF4H3PwJXC61Yys6QnnXtRpXT6YbHTXV9GcWmHEJgkqMVguRdWvYyQYdJkungQQjJ1bDe1utPw3g",
  "key25": "4a3cAAPgi9yGruzPrFeD4d7AGcTu2D414EpKqBVQqgKFgTxSd8e8wJh71RiSnf8gJKsNSjRDG1XFCdwKf585nhyo"
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
