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
    "4sTEeUydMqfzz9Hf8LWRQaDcH6t7n6xSDfXAKAJKC77GmsCZv8QsVxJPuwxM1GrH1qZ28i6YP38NazenPFg7uK5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqJkn4wuSj21HYjeXH8A3rYEuQ1EgwnuDTGSNSToRMFsWvBSeBVabFb3MTrF3LubF2yHCRrSTY6ab76xFHZeXPv",
  "key1": "43e8KMi1PSSStjLBug8CkztyCx5YGmRaAxzshSBSRJdjmH83VBYTsC25Ln9H1afpPiovrwj3mFRCvvwR9stD7Lxj",
  "key2": "2wFkeoMr2L2j1f9twoiH6ukSAbTfj9KFSsuLnS4buktyTmPJBkLA9sccLMxZLo526dZSTLxS5jqcSBQ971mTmHew",
  "key3": "4B1qkFCkd26cZnxS4EEBaJo8wMVWuunvcdZ7A1A1tAvi96dr8Tp4NA3wrD1fzmvULtNczqo5re3Dy6drzYRzJnj8",
  "key4": "5x19McmKZKAp27THLBd87ziwQx4P8Jk57X5gfZUKSNLXkGN7JCp4amPRQv2ecVm5EK8n3hbxV4XB9fgahYFZhj2x",
  "key5": "zayC473brEmZvne8hu4gYAANuB1uoxv2TuxueGv6x6ZsTZWjk8kaZ2EeRL2kSdMQNoMKCC5C6WmzxSTGLokKXnf",
  "key6": "47YSeopM1zT7J7QaCHCAQi7dZSQMa7bfMXhf1UxGzHFj4RvibLvirL99hz9e6tJVXj1KEq5fz1DaHT8wyZt4ettk",
  "key7": "5FvnV4ubvVdD9tnUDhJyKN9gF3iQRuVeQ7yJeMvZmu4T2yk3s9stLqUSpC1hFuGvasrwKG6BtHJCp5qLE3ZxHy4z",
  "key8": "2bWeuYS4icHygZUboquj86PqDNUvkrRyky7m9N5s7ZNGH3jjyna1dEtj6b7HDgp7AxxLc22NMUDVftXXe5pWqJxB",
  "key9": "5nqXAaeGodjjJ4vDMLwwtBr9LhGaTcNtMWJSVHWkV2Y7vaYye2AXjJdFuc7smJmkS516jgsSPPVTrfboAcfZKYXr",
  "key10": "5Kf6qDwY2DohoKB1CttbjBhatB7d2eszZCQhWPCo2gQiwD9KYG6QLqPeG2wYcUEiALvLzTyyhtk6mVchZExLzfC5",
  "key11": "5aqgLhDUpwaQCzSsx56EHAv7Cs24J2HWFxcey8tEbrSiK1Ag9PAfupwveg6FQrju8WuNPT5U4B4sgdBR7VMmFgTV",
  "key12": "5r3yX7hxfY5BjkaYiamkcVQVRLvMgfWMhGvEvjVYmrcwAhwop9bXi4CJeDyFpCVy52KhdUXzBbYNJ6giM9pXTGex",
  "key13": "4GYYCLg7fN4ingR7FJ1GdcpJV7mLPsVgq4kcihyEgZCc2q5J36HPQARkbEg9eGM4GUP6e7VXWgdVSZ8yFJRSbxMF",
  "key14": "3EyFZQbY8HKHME56FpaBo1tyHmMdTw2rTHPStxab7yM3kv5HQbnik1bcY87QQf7fQcyqc8f5pkKS7nL2t6SrLMbP",
  "key15": "5XWZpSNwbWFLu3VHw6jNDiPgrwLK4EZ4LbgoKHLsrBMsdpPfcvekS3n4hdyndBFFWaERvQEndp8voyeDRr8TKwWm",
  "key16": "2d7mKfbQCp8gcQkZqXUcFWx9f3SPSjCrGpbFhYtjcaDRh6zEce1BwHNE3sY3o1fcjnGFa7vANNRhravUvEjGsSo2",
  "key17": "GBDSXGmTtVp5SPbDDfyVkF11oJid2duLFzjbvPpHU9YGh1oMYW1wYF1YZHGeYWEWRPFuUAvMqseLF6wd2hCMveJ",
  "key18": "56nVGKBkWqykvis2Q232QHMh8z1zjS8WsV1QiEtdf2t3hBZxefPUrrg8EKPC1s3ygZfFBsQruYhDUmSPCsH5Gzhb",
  "key19": "3ijmFeKDEyt3iUV2vg5e8hT68k79YZVV6vtG9mDsy7XP4FsnDcTsok3xCcuqN9a5YeY4zsEnbC432ThquGAwU4M1",
  "key20": "4y8zksEP2DAfWSnPbxXKsNKaSPjB5TaZG5dbLp5JGpWqwjUCNT9GzUWW3E5Txrbuawibr9PEwbk4e87dzx5XQeNW",
  "key21": "2cncQqeucGqbFTVmPb6eLQutQUxkffVaNEWXSyFebRB1NR1xjvy8HJ6XMHAGKh14NFJfDd3QToz49mQfA5ZCeVEy",
  "key22": "4KvxxU71Hqp9he7SLhbKg4C427YHnfXesH3mt84o8o7KS7DU2DREn1ynWuxxyFYHP1dDU1tidDrKRpq2EaYiaXkQ",
  "key23": "4KwB8bbP5BeWssaqxce1UpcKuZJQywWiP3GNtZJmZ3vbxuakfUjjjtwoDr5fSMxWzpkP661GqmNW6JL9NNRbkGbE",
  "key24": "2z3ZJUa8tQUYgQELQpL4h97FnrojCv5FQpUaccZYW3vvzxp5q3nLxJLUyU7n7aBxsshXVjyL7L3q2Qz9Z4sG3XTd",
  "key25": "RMWahPfWoFjf2uay5ZYirgDbsm7wVPmp7y5hhtQzHKUiHzzt6234fDgsp57M1VAnRBhjydhtjd7SfxL5rDLktSd",
  "key26": "5vCsxRM6Q9q7Z5fZq1MYu6EUNxuzHp7wVVyA3V8oAqi3t5Fa7xBpYAVaC2gL1i3qc8RSwsapktAgCTufLNu7xQyL",
  "key27": "4vasxPQJcKzZzn3m3ewZJJ7G7mnRmLJ9t5w5bPturzA436H1uY4hUuege8Brm3zNUzCrTGCSXzDyBMYb7b1iqKKK",
  "key28": "vRXr9quMJxgNFCT9rCHDTvUKZ3hqdamKkYjCFFA6vZco8dqP7GnsV35cob9j2o6Zy1cRS5AkTk96Adx6QdfrEei",
  "key29": "4d4dWM4W2W6geY3HZGQ146Qbmiaj8YbUHJvqjsdbExWKVkZH5ytdGN2bnWtNY8CjJEiHEnqTdWxCqwdqt3uGc1Rt",
  "key30": "3PJRzeYZWjQM1QpuRWtDza2DUieSt88grw7fF4ZtSiTRV32sDeVa8jMPxfhQZce476C22Fj6PFQbBPLV9ScMp4F4",
  "key31": "5wCqoFx6PDpZCvdaB4X1eUvqgaRZkvdf44kaydNS89wDsinHkwJ1Ux9aQa98xGWd9WT3j81vi2CVwkYRn7CZaBFX"
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
