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
    "2XSfSZCn9nLWtJeaezJ6mZ67Kv4xmcfNVzSASqSni4azj2J9Xh4ZXicN2ebswezjxi21xvnpWu8qFUfRVPYjQno1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kx8kJ7tzx9gn6aD4PVM9sXK7qFT9e4Ex5rELx5AQ7uxDijqLCVVoKFaZR45TNzKGqgiBKZxCPZFfFpDRFhdPf7",
  "key1": "crjguy9UVVA6vYcHS9pFWuuD1tENtrzt7mJyx7S77aYbytpMWFMtyMiSQ4vC6TnaiB98WuzKfvWrAFWK3Akuh2Y",
  "key2": "5TkZvZNXtVHaYaPxjYKH6bs1Jx7RgJv2HDhJfgPXqRgZ8ggfLiA4rR5WBLRaPgFF42rCt2M8Hz3wLMPECFN3PPe",
  "key3": "4jF1u3p8LyXM6QpBx1P2tyxNpyqaH3F7hhMJbf6ndPx1q4TFSQvSwBvdeJr8mkopHXx4xTVxAxe5p8NdLUS3RviY",
  "key4": "33GgtBKrtaimsfh8F2hNLydz9YGzum9VJU5sWqmjx3zxJTNuoAgLSzBgb8U5kLHt7Rnr7HFCQk6bn8oanMmt27nH",
  "key5": "4npJhi3CjjkUtSy3jLiXWHBLS1BnLf4QBvxMEsV2CHuQ3Qqmg46L3MjaDY7KEJCNyQV736siwoTU9PpQ7m4tPHVH",
  "key6": "r6x18cnhvctXJp5S3FXGqbr7UCbkuTZ6zACUovWbpfZkf1aLMWJEeqkyCTEswi3MFkHuQGDmBBXaQP9fNacuJ9C",
  "key7": "2GSoX3HEBJFaYcXm1nib36qsdLi4TiCthgruVV4wquKTQ6TyoAHLCYLLwok4Uxan6iZB5ecsw8itb9YEt9DAU5u9",
  "key8": "4fqKbdNnuMJeXdm1fHGpb6fXEYrpYbUucF1QWVpDYsAFW6fPzLiVSigCDeUShabFQ7XxjcbxrERH8Bj5hDSvkt7k",
  "key9": "tXBSBpDcEV3HgacQHi5G8bnBhpxfK2heLbToKhTEzLPn8SGfmyDZSqCEhXaUJp9NWfAKFqpy2eEXyH49zw7oXn8",
  "key10": "4a94VJvtYsB9MhCMRi8k6UN3kAx6zC4U8CxA6wE4nEJ75Ut7hFhAgqG4UEXqdzEabp7GBnDdKDSi79dAWWVoiTyS",
  "key11": "2yWJs9awjCWPocFixCgAvSkTRmLZH4MVFNEmzQFPbtWzHdSB7QE9ZanKG6aJTFbQFS6XTK9a9zGWmfsCRRi7F5hT",
  "key12": "5ts9QaNLXgRvJSYr9LRUbzsHQzuM8qeBpKGojAwjUjgEKMC9rCveh2dbLGi7r8ms7ZestbV7YhQFEpKAa6Z6dA7E",
  "key13": "4HxsNM1MjiasfMBXsorNbe9uWV39VUcH8mF6KzZVysdgMEK832CiWX2VXD6FhpccvUUJaMUkkGyA53tvDoad8s3Z",
  "key14": "3zJgf2Jnz3YqEW4MGcuCNZE22gG1XeY6kiDBkbhSC3GuCwztDWxns2RidcFUrSuWnKqCKYrvFuGByVQjnPWbjeVj",
  "key15": "5BXcBMrbtnx52zsKSNTqbb3X8sp4bJBoFTGsbqZVzwb1Bmk8LKmN8oUY1c7gz6ksmGsaYuoBmnwo2bKwktFw1UYY",
  "key16": "5jJHcmg3evWGEkX22AD7Jyk2jNUwF5kdeDMPdMnB972DYPMBUGwc2icAu3jTcxYdzatv6tuZGxQhKsPr9nPDKNFi",
  "key17": "3AAE6b56GpjFpmoYaYspwvf2rCJ7nDDZ4eh1Ng7wVb7UxzVRfUv6ov2Q6DxP4gGQCe3RPNPjNAQGggLH2jBsCrfq",
  "key18": "PSJveB7BRoZrK2g46G6eLL3F5aEN31j2NYZykabnLBHQCnwPnNHCbkjgk1iTS8doXL2gQo3f7H8maab6dJ4d8Dd",
  "key19": "2CPoUMFp8pf9avtxTHGHWGvQTYtgwPt7AkTEShJu6YH6sLvn2PWyxJCT8iKMYvqjBiCtunSmCRPhdJfxjwgNtNL5",
  "key20": "QM4tczNskqPRBwk7dsqFR9e34eVQYvYwzb9iNXXgh4YXwsZJ3B58JvWRJLre3WfzXB4aQqpjRcTHs29pJrZkUqr",
  "key21": "2zQgvgJ9XhHWazVaMxA7HHts6754gkEDik82s4g2xznmnt2wQnjBAueMZ9Gxz76aB1jvrFFiMW4dD7HUXpDUtvTf",
  "key22": "5JzPPpbxT1Q37dbrhyz99YCRr6Ai3LtDugZFvSMohHHyJ7qJb5RUfjLA4ZhU6vYgTYV9w77Qwep1xFFGukxkcAqY",
  "key23": "4VhjsQLcHQ2YqDVbXMUh6jp7Da84hn1ZTf17ov25aJQYALKk3xHh49fZ2FtzFdrh8ufzpRqZzPZDzQgB18tkNwXr",
  "key24": "3sU3PvTHFNKW3jQsw3LTFxxQ1L9u6Wp3CL9fpP1AtmiSdDz7fLYTTpQ9ftpgv4EYrZ5gXBAicmcff46CmbsZVuC5",
  "key25": "2Xe1mDP6FnGgNAmmn6poEyK6CYink1C4qV4STFDUXe26PU6j1QsBHxndcnEJjFKUg7if4jbT6Rwv8JrL6Rn7vtwY",
  "key26": "25xqyTUcTwg845vJEGUjcrvouwEpHRWpSoBKQMJxju198c8cS7E3ayjBUokNriYiL41ssnSBC7hPssoBLkTqcjaG",
  "key27": "kSkNHPgGyD4vd4sdAge5UeYwC57Q56uXoqqZJsDPRvXFKqJuoCgcSiYCkFC4fBATVZ35A9RyfnEis7VbsPcf2Kb",
  "key28": "3ECzSpnktp48kiqLhoHiY8TwbTJfTSdt7Nj8xCtkU8DC3HKMmZRFJcJHwwXqjmMVTdhwBxXC3Qo4ocgUKWLZJhK5",
  "key29": "5u4eV1dWEinJUbPYBTusnccQKHyxM56PujiTVGhASA4LuYQHKJfNrUdPb7EptMNRi1VcLh5vEmK9X4fL7qtgvrX8",
  "key30": "5kL2QyW1RNLs11zwW3oGTtn7hPw99bU7ctLTLkd3UZT7q8ZdyhQazk3WmtBqM8BZTKf9vG8zwdGCHscCL1mDKaQk",
  "key31": "4FMxg1ScFZ4ohETN8hTyqPfP1r2wmSwyJjuLR4DCp7KoUA2oLRcs7bvAMwt61BebzoH86oj9UDCE9NHHcfRfGdhB",
  "key32": "5FAw3c9mntDwvJ96CZAyn4ce5NYWRL9tYdKNAHPE2rb7VJd9WY221h1Liqa6SJKzKvUL7ef1aNHKYYi6epjs73hB",
  "key33": "2pT6M4e4tYU1FNsnHEP1zULDu832Z9rmKz6zysJEzAvGoGT58jcP98JPB8GSVyFVV2KDDsN66dhKNP2vUWxXqKBE",
  "key34": "2fvtVfJigUwjBhDX4LCtmuErch9NPgfYR1yt6t8kDSAh7jawppUqzYAgQzjppYaVuVufePnCCGzHSB2WebTQuiAi",
  "key35": "2Yw58ik4kNXoFcGTYdARoJnrN4xiugRV1MEpk5jicQtZUBGGyv63EPzU9oLHCjrUud2rXPF1wVEvd6kDeSAnkr1E",
  "key36": "5CAt7oYjxNPh28uDrFyW5bV3NPxxyUbN8bLRmKvXyjbYZExznfMjo7kKjEVQ5qd5nh2KyUTCdFiybB7T31BKZ4Ns",
  "key37": "1pdoBJJtHhRnPU2BDejFZFgRvDtVKJKKnNvWcoMyBLybpcy4JSDy6VaWqsR4mREFQVC4DFQhL1X4SpQVSRiuTSx",
  "key38": "5Mt26xoN3761seHRVQrrMyD8ygMbSKCXz1nk9fbndBPysz2RDXX98dCyCPc3okBm7Wa84SQ24YsUzgXoQ7AV9Ghu",
  "key39": "5yERr4t8xNDEKYfnPzm1gwK3RXX4QKj2jmSvdZJVyUB6eacDdQ69HSn2RZ36cem7p1V1cjD1CfLPjWsKAmtRDzNW"
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
