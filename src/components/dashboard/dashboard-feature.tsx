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
    "v4EZPw8aQRYxWK7kHCqmdAnu8LK6zG3tcCoQTTVwhhaFUdGQ6ZW49sNGLcgVm8GqWE5gv8S1SMtku4CSdoKegak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cePZ33JSp3uMpF6kJUhk2hHzJjXoJpN1LB6pQGMPqS6an8ieLTWKRRF8T1SWLP3e66JxXNCJp2DW6sghDt9qgYv",
  "key1": "4jecfpvp11FTRqQNot6TM2mwUNViMkCZam9cDBqrp9wf7cYBWCqP1fLiQSVJyGH1e6gSEm6vH8oJ5JGf5xwzus3h",
  "key2": "4M5WU7KohzRKqhkCEFnRFDCXubvdUegWKttH2tqex2WspyQYeG2ahEmhMLDGCNH9mCN1Qr1tKgyRG8wp4uuQbAn9",
  "key3": "5N5RVhUEoEs8ADvb6E2WEqA136T7YnfTSrNo3skFzKNfPvpGChf7g52oxjbgYsqmLQAteiAnNCEYgDLfEPCyLtj8",
  "key4": "5W8bGnBBDF3ZqWwGgNCuYsWBWwTLGKfx6znmzg3EBF41vUURqYRGzpugfudfXo6TCCVx5NtkeybquQvbeFcJoru6",
  "key5": "34sR4oL3AY6PuB8Gx6hFng8kKsziktRL8CVuAeANg28cMeP86R2N1pnrF2vCcypFbgFD8j7RQhFqQVe7rjjxTgc5",
  "key6": "2V4tagpnnLZ78ehC76aEspsD485mdKknEdLNT4ZUGmLW3wvvFDN3bqYb636Xi1n4vdXx71LynFLkXqFyYYJn7xoU",
  "key7": "2fGwk7mPwE8XYttNZ8vP7s4Xv5HVPiM1EJmUxfXKRBhKsNkUqgUXUJYK71cdzCFsYRDB1Lis82DMFj8q2pCNAT6S",
  "key8": "4xm4ZBPrXB5s3CC1U66CQGqk5Aurm9vtEi7xKXJThjq9euojx7anHGX3VGPr1LrGjcYh7eChcQnoTU2rNQUdaPmq",
  "key9": "27RHZrerjUqSku7MEcVbErZe8yvjNiV5rLKuaKKFYPRYwePBva4Qttp5aXxMAQbDdy8BJdTELxLZRCGci5ZcB31Z",
  "key10": "4ZgZHC9nS3RsguwPcJJMT1GotVjSYMUVLgki43GVbZMpTwkqfJt1GxZGU3fkYG4kJnc373v4H6DUmWsBgHuwJRGB",
  "key11": "3YAuit63ovFd8nCukf9QNsE6d1pv55YVh574BhsKE22WUVwP4pZoCRSdDU7LcNobUTHsJ7GY7UD6CS9DQ9w26oc3",
  "key12": "2fH6jcztHLqPQL3MJCZ7NcHi5bwPVF9W28PRxhZzpqfQmCpHcpEpdDCUJ8rqctKhHv3BMtERgrqTbEc1gif5Gsyq",
  "key13": "38B3pYF4jC45zDPCezXvUsBCuyVsgigkt8V2s5krTNpYvTdR9abjSrM5BxEanF2UehV1BFNDW18bUfkC6sk5Xd3E",
  "key14": "2eRsJ92ZkAs6gSbHpCdpgJb9UwrBZ26LuFKwrDvcGZgjCXfNiiL4ecmGdTafnk1gEqF4wXCJKpk2bFmQk9zdhJt3",
  "key15": "4F68J4sV1Ne5sYNubLcVdxxrMPn2Vd4dUjRp7mucs2bGhzJvXv2Qs7a42Cz8rDhJ3zniNc3SAFQZ6C5DVLgK6Ji4",
  "key16": "2X1Lz1UwMxaDhk4suywApdfU3dag7KAC7ffBMszD17ykbDhzaEZmP2M68Kgnoec74TmREzuowvjv5voF22ZbasKT",
  "key17": "2RbGUDW8Gcj48tsPCsipTQdiTvuTmrafP77CrGQoQCmr9zwW2ySQ6z3a7x81a5drpgxSaZYXehdXmzig8xfbugu2",
  "key18": "3ZnScW18bNrtK7y1xLDXDomWoQYC6LLxyCqJscra4KjS1z4tcUTEgUQbaTaPuk9FsvSgGwYMBuPyg2yfJYg4HEX2",
  "key19": "4FRKyiZX6zg1dNZ6CujB4b7EyKa3PMHfesVHS3gXbHMgy64TccbsPt7PWbU5oUn6bZqurX73do786aJPBwv9qF6U",
  "key20": "5wcduDKZdX2JoqzNXxTJY5svmnnMr8mji2PRgB8WMQJkwk7dbpQyHszoFZzotpftkcJKw2PufZ6TbvXZZCJTe9RJ",
  "key21": "5EXCP7Rn49mWiXwWiW3sdSpSMELD4YR9B3Swmu6YZMGBnrxyHgpZ2wWKb3me2MzLZTC58WnJvyYjGSarf3MzWuye",
  "key22": "5fLLDmGEiUb5JYeKsx7k3MjDNnQ5PcGR9b6dLBF4x9UMnTGhCTS7ibxwhTvhagcmEkFNxLTLvY2YrhgpLXBVHfUd",
  "key23": "34HLyE668YjPbXMnJdrzgeHmAgigcf7vCfJz2iNFBTSLPx47Ut48f8uP5Hsk8XEwv6XkkMXw4eQk24ykkRR16C4g",
  "key24": "3w9LHhk1fiSDot9K8iDU5wVuHiqctnkySXr4dEEhjqEuoiFpDyQn622grhqsoWbAEqPggivovvgxGFcTdycvhVH2",
  "key25": "2ARpTrXT3So8w9pbsQcYzeFgxMunXcdhDLNb8yUhSNZiZCMTNdrPg4vTPUsD3o68pZcvbqRwok2V6VmE6UsVuNRa",
  "key26": "33RqNrKhfoUrZuowThFCT2cS7pqh2R4iu5Z1psPqtbmKxhig3tBMEhfFAHxktFpvCbuRi6Ss35TbYY919NhbEbF3",
  "key27": "4J1PXrRj7QRfHG96iwSVzritNcQo3KbftjkwCXc4oaWj1LWdyCsA7PW5pdA4TyFXEupMgBFUm2xCKb3qsiDD33jS",
  "key28": "H99KVzeCixisHdkLEgfxHTsFCqJv9tEs4AVoe1cYGzBCBxAdRepsQ3YMRnQo6AQuU9EDdUGAwtJVuAD3gYp9omL",
  "key29": "4HBvCMSa8hMnniNQfJZij4qVc21tL3J5MfXQzCVV7TXwYm8znJncPveMvmeUhre3w3QK2vQZNrxS2X9NNcbCmXXa",
  "key30": "5QUHteLXZSr4gVHJtJTP4afARM5kYxYdVDBz7JjZtSqSQaobXU9sLH7ftfreV1CYixAQXEoxGLDDCg9thc6i8k2K",
  "key31": "3ef6ZgX3X3MwoywRVnFFbfbnn3xL7VZXtjJMMPiRthuQhu8uMDFdSjtueTYhhFrTFxXkV1uSueyutri5Cxj7LQp2",
  "key32": "44G5xFw1Z9c7NfWc9Hc5FuT86HGskuBfGv9jk4724oqmcyidz7W9h7cnpf21MYmLXg9TpCHf4WQCZAe4r16i4Pvp"
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
