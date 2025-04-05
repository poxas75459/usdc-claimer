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
    "2h32WWa6rpN1i1PoVS3XQYy2Zd4ctWgTmvitCACsLoGQ3QmF1w6CmySs5qZU9w5W6SaBv9W2FaWWf9AqAdVnj9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tuNLTmfGxnFWXLEfgnUqbgVtxtgNNtMBjrfDK1S9Z1zubjcf7Y5BuV1g7dF8LtrJL5W248eX44DTMssUUYKMHgD",
  "key1": "4udvDg5b8bpuC2QaYvGoyaWoSo3P1FzzbEmhjM9JT3VoNwaowxCM6ggYwUmQnqcVAxa82NAKckL1xxorkQhWruAf",
  "key2": "uXns6vwpPx1HjgrV6UAwrP8Hiydhj79PECnQurcYvvKoUHg4B2HP133LnMgAe4q2P5HysNEmy1zTMdYpezBQKDU",
  "key3": "wDr6LabdFyUnm8pMSpwogvXemJku2oQbLG35wcrAPTwmZJapDJuKSYk9mskVV5kH7ff7u6mJnjnGjRqxnbc84LU",
  "key4": "Cowt6AyswjUoc6rq5HztVPdeEEoCb7XZGPSpTmmnaYmkR3NXVywqq31gKjGTTFnhykHjCJq89W9CbR5nvAopzwE",
  "key5": "2chK2HmBkadT9ygJFTDUFTfGuhj99b8VB84bzfFJFkA11SSeoDdrov3o9jtxe65J213qw81WLByZbfiF86s6c9Si",
  "key6": "2i9nceLSu34CXSAM8YR6GnwajXeTvWRofWhP9omwKHGWH64FDR5w4qa7MTVK4131TzxHS8x6rMHU6ZXfn8iyqBe1",
  "key7": "56HHBvQH8DgCH132DBagN9iBTR6nmnwRyzyrpSDayZ3SG2GPRCGhaodyTfGAUdncSBwsU9WLdRC24E6ZRyzAZiGV",
  "key8": "45Wn6xp4oddhHzB9bV6XevmAmVKJDGjGLPDgtmzYMZCtF9rD1Ke73BMjmT8PtLU9jWXNK11F5Q6X2Bfo4m9knLE6",
  "key9": "2J4Kmodm7QuR8CYizLRDBKZbNFQQ28Uvy9bjSJXE4SyR86PGht3ZbxkNFkA4FcQ4UeJtUX1yYVCB2ZUM6ujRhM1e",
  "key10": "5XmqAequvZF4kobTJijnbQMcuVddtyAEbZo8NzBWZauYjdgnKTshMFcZn3Y7QHoGD3Fj88Qpp6TRPm2mW1egKG7z",
  "key11": "3gmzuU1Q7s421NcBAvfB51tADbEnsMChyUvipefbAwry5BryXnLARENbJt5JzyJwGCZxnbVAQmCmeL9yH9Be8JAa",
  "key12": "2YmNXPivj18seMrG69RR5TavjV2Wwv6qKBtk6TqxC1bMLoEB4QLNbwVx1s3yyFUc8x6hmgoTL66cmZWu29LKxY6J",
  "key13": "3YW5ZofkzSWT8GNysET3GTCuLEw4i5ZkPjrdzJpVmSynre4RpEKSRzru5ABmzgU2hHuxnYZhXwSLDvn9YeoTJexU",
  "key14": "32KXz7eSW3ui8cQimywAQTfdi66PFQ2Z7qqsuYgvL5qxHMfh2SKehP6Bk5vBQR8VQv7DwE3bhbYDNvdyWEWqMeBE",
  "key15": "5Up1mLfSyySJaW1GyeJuchoraGbz16g8h24gJbZ2wJHp5R9HviBbREEwMUoKLfxKWXRFCbE9Ce2Si73GjAkesSfC",
  "key16": "JoTKwLc4bv5kg2Wpsj65PS1q2HpRFNS4qn9PSrUbhaH5BgyUmLEUXSzZQvZF6BxgGtGHvp1QKsEHf12JGh33k9j",
  "key17": "ZFdCuR1ZtaoGnauDbQzXv3oSqqNMiXqP12GmxoRwQ7SamjEKE6beppkUWWJU6KfTSVJF2K8A4cq3tNFXkD1tpCq",
  "key18": "39GTzHbdmqZLgBgQGEMAvXRvk7izMtfHKuJTiyEnF91BxMoBm9NxrdtGcseQbQXeTCc8BMFCDjgrsDpdouYdfCSJ",
  "key19": "exzLTn5q6GULBfpfXoSoXu6LcbN7C4mSKbPgDVTeqGDRPsV4j5h5JdUNGZN4oRy1d7XEQ6oW2C2eY9gc1374P5P",
  "key20": "3jqiWHFrXSWSgLHo7vfVnesQ1XCYimnm66s5rD8y92XuZGgy1sgowUwnYZx1SwVCwjgBgaSSBPYaVtoDJi8dSNNu",
  "key21": "2sYjKS1gBH4rScavoibFhQRpaQTUw9uFVGiYpNQi1XEbF7nTviSnyC7RLVHscuDs2SLAga9KCZzvE2xLz4Fob217",
  "key22": "WCyizUYY7R2RQyBEtPvC6ETmtwfCCrHVt8vfxGqU87DVvy8m9cTMh4gQELpwo2Cxvhkt4Kxu44EoGMv3RLvn55x",
  "key23": "5oKEgsQNQsQgjVVHyqG4vgfbwJwvXympcLUBmQ1mZRqsCm5yXyeBUxbzEix5FmsSHLHJSYH5ueoDEbnVP6T4UmJP",
  "key24": "4VvVyRAnJ4P8o93fzRuE2u4syq7qF2MTiTFATou8biaTrnaGVus73ohgCMyR4ugb3nf37F1rUfBtSk5J73BoWBFo",
  "key25": "2crTdJw8Qq9AGh5yyq3iiLReWRPLTjdkhm8J2D2EE9NN1Cj3nchjuP2rqVRn6wozcvRtYavhjWXt6YWDBtDfngyu",
  "key26": "4atKrTE83ETbYJ9A188AQKfnF1jQSSjbHe54j5sDF5oQvjkS1wcW2CGQgv2pf4rbkcNcYGifZ1ju25vmeXWBHoiH",
  "key27": "2fvfhoJxcqw4nK8eH4jgXrDn3WerodkMuTeYgAndkrt1LbaaJUkXgd8pA4jHxYF5omvu8m6B4RmjTS7qJVPGYLH7"
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
