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
    "3p3aNbM8Dz23Ap2epuGCWKQLvact4g4qqdmNYpHfJNG3aXrjxDGKihe8JRVAKeuUgKX4EyUZaJoNnKnFAcDn4k47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJ9qhA5eF47sjxVM2YHpP61gFq5bNQabG2jLkP6NC5RkjAc5U4cRUrqVnWHiTEu2uXoAfxjrhchpGp3ANL5orUF",
  "key1": "2aw5ndTEkffJCkg4Q2F91Uh5FKVwWPznz7APNBcsu2HUYZJ7Q8Naqd1LVmDmT64tNzso7G4Wt3fu6pf1Sz4RAXm2",
  "key2": "5zDZv9Ubs5hQSRHiPgSKA3q3bjAVDiw183AWcRAGcn4aBstvT1CMxZi3wQNjfd2wDFFrRCvwon1vJGLWXwus5y4c",
  "key3": "M9u7KtrjzWbLjm29XQuHu72kjzKaZn8rcm8av3VaMZxDEe6qPPAGUoALqcTEoKQEzcSzCLFEacSUuTTwvrAHw8v",
  "key4": "21FFYmuQz5x1skBByeq5ivee13HZF2kTTNDmUhzMcXKxoB9mMvtwGiq7jcHDdRJFekSK7yCwchbLVTR5sLnJScPA",
  "key5": "49S6CB4exSVe4yBUyKb8Z657t33bRAyfgeagJH26woB8H4u3mCvF4oGUMEF9FwA6Zdq9eizm6zzwoZB7FtWaRZEv",
  "key6": "5yq25WywD6edQqgL9vaXdSWDUXv3Kn5obsVQK6QpCU8rPrU4ySbiXmciDfbsV8oGEAttWrk681iKkgV1aHhfSKTC",
  "key7": "rbg7vBhzcXgv66nzMKKvqXkpg2b682RKzaPouXZNG7ArKZxR5cvcLisCpQqZ1WG7yRXfGtpbWXCMLWQW6Py72dx",
  "key8": "VsgaBA7kLZUJpS6nSiHVT2G7Y9bGQ4YZpn45Bps7a6ZiaGgxu6MPLv5hqeXryNfgB17874aUu6x2ZNrJXH27xpu",
  "key9": "2e6ooAMAhr35wDaKTUTrrNpTP7DXtdTuDTtTLVrfiaJa9sFQC238oxawTvTuezqJNJDzqdRbDALDtRka4ru5HVW4",
  "key10": "2AiswX8rJravbXNiCvjNGdYaZD8vA9FJPVgbFCKbKszEb9b3qE8uHnduYP3Rq76yBDnf824L2Fqq1HgSFaxhanNy",
  "key11": "3PiT3hyFU19nUerk4Piyk2TM8Leg5ZrS5CibsJJFXzXr3Vizt7ZK8386MXDrDaUx6Z2Q3tthdRukmtHFwMfgiQct",
  "key12": "27v3SJAoqtywvn7fs1dupdoUSkVAAc9trJWx9EH9Q6TBeUUtntcpRNpCVcQFbgUnnPk7uiHrKzfDiAmWKp6YbMsn",
  "key13": "3txgaugjTUSJqpoDZExwLFyLuqLd9FCue1AZ6gjNdMVPhyLfyapUFZRqFRFy3U5kUR21nkEgCmMxPo6k9wqvEfKW",
  "key14": "rW9FtUZHYEAFLhsj1BoA9wpzm61p62t5KQKBzBc6KQBgzm4RAaYohraxySZbE9jfZJNCtpmMqiBpQS3AYgrenK3",
  "key15": "4Gfy7tMZJDiMEvYwRG4bxLApsD1bKN6BuW8DyGENvj32Bc4GVRUyXHxihGLUo5uSDQwfSxVMWwmDLzBtzqJdXD8L",
  "key16": "2VbxhWVH9eVCQqxiQNxvSLo4b7BM4DXpbftGAa5AtGcNkQPsHe7cSGTZijz2h6ZHcmsJUP8cjQKmB24aansjB9N7",
  "key17": "3Q6kcCJyX622KKLi3gjWGvzoTqHK1onzuprc4gXgHgYY5tVc2VvLodkDp6jB9R26PnwTssNKUsXPR9LhWyYkKxa8",
  "key18": "28a4mNne5eG3eZ4XJ3r57n7RXugLjszWLPZbDQmpDSWtH1etsBdJDJw7tn8yR7KYh11FwSHq7hB3jsZRyaX65cv6",
  "key19": "Vo5TYEo8w2jmdptEH7EVMjK8djCDJJ5UzrbAq3x2V64iECzy2q4Z3RA3BbknQmXUUdjSnpAhyQRLkC944nxzGYx",
  "key20": "2uX9RJzkt28ySjbMBU1Sp8twU9SufojNh3rD5DzT1jjNUYMJZU6cAu8ZCD47dwZxUXwHwm8k19B11Jx2svHCqALs",
  "key21": "4XokAdZLb5FKtBmUE3fpnfF7n2PnbuV8cq1WuUkAojqtq3RG4csLnnGxiDFvpyWzqXw3Zg6hHSkrxrAfTft1YLds",
  "key22": "t2SFVNxtJMVVgmyp6nGzqRHtsE6wKcYPkkWJijAqXZfX28vXRmiwGjXbwKNkZwZhwqg8CCBw8F73XamuvaTKwM8",
  "key23": "5PWSnHW8oe7UqKtj52KvnPLJLU6mfgBP2i3WCovLGu3Xs3rchH7sNjJXP9bRC6sW6DwiFd92NDV9ZnaP4SmvUFTA",
  "key24": "5Gq4Djukbt5veMB3p8BAZkYtzMraF33Q23z4kya3wNUfFNm8qjujBHM1fdEY8tB1yhreRYhnpxwHyWRKY5UJpET2",
  "key25": "3S81J4z84NrPFetKMqvnE3waMrECUTD5KQWPKe5fvxDqwjAPWYzjEWZDD2qitejhhSa3wfAxdmECwHC9GXrcyFa7",
  "key26": "PJHjU1FjxBpM6r7veTK83RjTFkT154Z5XVH4zAvyapwhBk4yVrZVc3tyA2Nj6q8jPgb71xf4TC1nKwyYjcXBi7U",
  "key27": "3gcjR3eyyF6QBzkZtcsvsjTK5hDQNm9Ed4HHfFKDWTSVtQmRafNdJzJVKdPwrTASefN1UmEZzmpXTe5nUEiLPx5d"
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
