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
    "3kRVQTfQYrEeMPemCycMfUow3KAy7XEfEvrzQF6JgYRte8qBvYcV5UQXxiMnA7k6UQ7b4ezdr1Sjc5hFPfSCgtM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ewhf9jXFBAvpXsTe7eT1U7mt6VhXDN6nghqZMjoC4j7kUZJyYqV55chw94cGmQBKnqApM7NMWh5jxDUr5Dt5mWK",
  "key1": "3qWKFAtSZkcWhoGtsowEZbDCKr1M4fK8bbegu1HsD5EJ8V8HKA4HTHQedTHN5gi45PG7oU5Hsjjjpm2byqZM5gR1",
  "key2": "2aSw8LWEKSD1ngg2Cq8nruXF4pGHcxCD3eSv4Kdhahp8iQS3MtggiCDVRsZXhEivfKPoZxs248iay45F5BurY8DM",
  "key3": "5fWkSqyEZWgF8QiRAR2RNuMTAtXsYYCJKfAqf5De1LT1LSncQcKo35idZpijx2bMvhGBy2fEczSbeaGKX217GGE8",
  "key4": "5tEcPWuYSeRDJ6xUYZnFSq9RT7E3KPxHHwd2iNkbxa7zoBoxoLqPLhd7gmteiGjhect8gBkBouzp4MCkpE8QxwYA",
  "key5": "3otwTQ8E64tgobcJ61ckuRc95C7EPh5Nay4aXD6QVqAGYrPVA1Z9ErA2neQvuDaaDDSo5RP9x42oLAEqyRXrZNTe",
  "key6": "4ZrHeMiXjsNewQMjGvvM1G39bsm3Xig7VtZsnbpyEFbjBetfhNWR8wBVo5jTSGTxdw3sXR7CVG2subAs2WWYVmoq",
  "key7": "3cFsz7cvSagZTy8pTywL6iWe2uztkaPbP8PJnFf8MtrtT4oz8DKSQZ3V64n9jVZKHb2zJLBeSwM11XwLW9uaU4CV",
  "key8": "48Y2DSGmseCPux9eFMSWXj8XMunV5gbpBpUAkRCzDnyLK3HjyVG6a5NmkQjDwgvs4mT1bvLc9ckakDApnmeoEyNP",
  "key9": "4vjA71C87nHV3KYtmnkcyczz9ZxUpePwvWWkFDb4VU2wxwSgeso4FWiriAw6JJgg4HeFmBZfu5t98kJX4qWRfrmP",
  "key10": "5vgqZt4GsQjKYWnVVFABcfkvbTEjRfgHustjZK1j6pUmE8XVmF3pa8QXcYcvbWEecxcEJ83qsXJzPSB2uZ6pp8eg",
  "key11": "2tREMAWhNJ4EzuCHniRuaqfRp1rUayHh1UQAqAiuiog9urF2zhB7uAT4DBhyQ7CSZEeuZj6HNBxodB736zkahAsR",
  "key12": "2HDf4X9xeAUAsgoekzd8sXaapQNbJVRgbCxnxKYGbzwygQCFGsKeUkTfyy4QphDeSM8vV3q187UrpnPqiSaYSK8h",
  "key13": "3EEdwN1QiBswDvBrsAX1DcaNRTyxVVKTQkgKDvAJMZNoPWxMdpwjbL9rkoNKn67o3wT4uNTy6eGkVABnyoni3AT6",
  "key14": "4RKphNQU8zh4Sgqgw9pGbFrdJqxzmmjS26yoy3vEEH9HbmRFKwR18zA6ALFaeAnFegLVJu12aMzsQ8TZrexNbRdd",
  "key15": "3PPeBfM83aU3gu2Me29zgsRvGiiX89daj7qNFwHLsjbDLTG4ZcpJZryTtWsS1aKP1czrMY31HHijifmnboSp618E",
  "key16": "Mzx5p4ysX7y3ib19qeFENTEbTWHD46QbauqZf6NT1RkoQKCS1725RYgDVkLy9DdjmDEywSc7kFshPwi2911zJSR",
  "key17": "2PPbFyNAJ7GCnf9ckyUZ2KCTu6XcDDiARDnF22ywYW9stixn7qjyMj8nftTWDwtwyVZUm1RGvdxy7UBnvFHGnfg6",
  "key18": "VgmE5RDfiJ3PdXk8opbP3U2BRJVefvnp6GF94y5wXsVYCBsgf6hNT5tDLcAoLMjm9XoyRxB9hKS94QMTMysgd6n",
  "key19": "HsPGEzRp5WSPDJV8HCPUNQ8cRYtvD3CgSdiPyNu5eoBruaNFYGH57FQVg1qPheQhqAXcj9NRNiJPBqBy5soFggD",
  "key20": "5RWhUoJJcbQQraV3Enu2EXrGEpm4wHU4DmjKYZxHW16zgx3m1Frqdi1ZiMhSFkCZVfC4QVvHTctetABZh8rBsbDw",
  "key21": "5mfhHVxC733rnZ6GAVqmB936EXaiSv6PXXGPHeMKrD9H6XuyTkaUssNsYkLvDkVHz9gPQXg1BwQNA2Y4muksNvLr",
  "key22": "4n8JeTNquMpar1LuFB5gKpMoYPDL5ta2eYjDn56fBqvqd6AMVFKG8xminEV6pkitRYDqN37AVBxu8uNFxMGXKk82",
  "key23": "5MDVhMTjRL72L93vCjrWPtnJ3eywN1vrwByZptFitiEvnqqcdNP3AxrG6MEkPMA9fPQeRzD5n81fY9G88AssTcAj",
  "key24": "3ysjTxJEqQfsMhVB2NchMGyMwtCF4S1GkRy2Td127Q2FjaFH3tkDkMVuKHVsxtDfvevFXyNtdeMTZjTm4LEK4poV",
  "key25": "gvYDoFAe6ZkdsR4QXvPH4uPkPDjKdH5Y8tVdxfV844HbniyVmu4TPW2VXYskA92dWVaGSea7BiDzcGi5WvH2kgd",
  "key26": "5RhtPwHvkMp5LM7XHmMsh2S6Lq2SgAvAceCTErxCJJZi8c8Pqu2DJTzRpKKrfiLkMUJWBCFERPqk6QZjrBQrS4gB",
  "key27": "4YZTiM5v3kKXQohDtfc2Sror2ULo1urL39CJxZC7xdwYaHfHrmqGb8TcGuHw4LbRwo2tTad6E1zSaMAo9LK5SYML",
  "key28": "32opZju5Xg8PkiiLkNVXTF8UxNb4vhaUip8dWd9fj5LYgTAzKDChywcuMtfhB8baapwrMc7tFG39ToFNcCKsMfs8",
  "key29": "3WD54HW93ZdUgBypquAWbCcc1LBcTRZobXnNHMBpWoMeUyAa2qoSK6vNKhBxHz3t3qUUsgEKq7MxdpC5W3vNMLS1",
  "key30": "5YvQSV1gsi8VRC5XH4pGoufU7fEhgZrrFJjqaHL4LZZKxbukXyccPDXfd6JF8VSmNESFuAiqmtVmrjEdqyvKcWDX",
  "key31": "2kKhz7vwJqYEVfLGdH3rsraMMdKv2xZvQ93a5SAJJVDZCNqwR8yi7HKhkkggmD4MpZhpM4TqeZ7Z2eVWizFvkh1n",
  "key32": "5byHtxwqDipJT2zgQrMHAVk62nXFge2w8J46Cwx9iw4Hw8nntXEVJC6RykVT9HtLJ2G4zDWd4ewHLmZnrw4UhQpa",
  "key33": "4WZg5FTK3EhxrRnDAdmVuhCd5EXGL2f1GyUYasChpKUNcD99HAdeCfyoNi3ci1Q6KCGLNjJf8M8zMg3A9e5qSyoz",
  "key34": "3axtaMqQxLA15LTe7mp4kqqF6e41HvfP4S7FGsfiEzeST1KbjhMTL17LjGUpVeVS7z3PAKD45ct4kQBmpr41YYF2"
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
