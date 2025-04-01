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
    "3Gd7jW51dkiYLQL9PfZWF3Sds4gAUbboNXA5TVZkSiAnbQzqJ9mh5ipTMLBKzcPSU3k27V7bektP1YXkW5DsfbdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WRd2uMMtP1RZiusajcLjCdfeXa3mvTjq2N4KBJUCkwjxbsh1WtvVBK6oXJuF8jYmmwdCEaU3rUy7ZLrJKpZoF3",
  "key1": "3eY5vFM49iG8UopAKFVoQ2fGhuxn6zNxMS5ermt2TQTLzYrcjmYYe5eGL39zTnFyx1dFikx4tBf6Ax6g1nST4Tdx",
  "key2": "5yjFmGYTBtRnaAPpXH1upzvpLt8sCH9wCyDFDduHxnhTmF1HCdYFb7tNkDesyB7ysZ1Ldy5PVJkeNZC3S3dhgjEU",
  "key3": "2SKH8k6PyWVx21Wk42E1UzpdDVoc6t9JNwTihSxpmxLi2YeQB8pydZKvPNAsRJzJk1G8Msgpqia1jw2doXZAEB95",
  "key4": "5qWnmx4Pi2MAjd6hn859tcrAozdrrE9sjkyQrmCPHiNVNUvDM7ups3HPECewYFmrho6vTLWB3nVwAjfSMP4x8d9k",
  "key5": "527sSab3CUHaxzdaxqwCysJiE3GBxWXjCao47wZXCPhup5u7hXJEgDFnB54AkUFWZr1Rufs79GPq7eN3VrtZ24Nx",
  "key6": "5EZAkPshZcRGzhkyThcQPE1rU2rJ7r9xAadHF9L4NcKDsipd8asiHJXid6ygKfRgHYUkWiWDEEsX2g8pv8F6kFch",
  "key7": "4KbcKYDrX9cqnxsuZa7Zu3mpJUeKK5DWBzLWcyAztD34KsDEwGjWLgfSw5ojFPiUzdAhF1auPBD1oMtHvxfVsW1a",
  "key8": "45crBGfokWiJCUNzXGzBHAHscnH47s3B3h4T1b4FH3AgEsqkuUC9wqcF7jxT99zi32bUKU5fPE4Xn6m8q9CSFMrY",
  "key9": "5oX5WwJ4xdLn13HdxHxuyewV23wEewKkquANhCFQLvjXX3HYjzQ5LYGQxWKnH4khx8obgvB9m392ddgQ3oZgDKWM",
  "key10": "5Y34etRgPoi2pZRzHVWdUTS81otVhZuWVKfzvxSEi9AdPdch8YtqhWFAvkBARRUK4kkAcbU3eVpFRscDw1JeYa8c",
  "key11": "2PnYa9N32MrGbML87MjwkzmvUH4sdtBqwePT4SmkcaLRUz2sMxyT8U1oo1cs8cvQmWJ7MaBihF3Go1bAnDDwYzXL",
  "key12": "ZSVMLpREBWqqKedMwbWyXjRGFdejx34kXDDZva38ohKLmwcVvNPCXZxucdCKkcHqDsuEqtBqo8LhhtG3cXrBnz3",
  "key13": "5F9sDVUedhCTiQfzHmrVLbYpX7kvApv6qhEArMnADCf7P2QtzuGZH8J1yV4WJEQG14CsqdCbmb2kLcsLPepMpe1a",
  "key14": "wcrcR5iRgdChRNdw48gsnf2QsRp2w13pX8ex3ULZRS4GLBunmJoymeYKJCUNfxnpCRLYUe3RqwFyYwfC2bxXkp6",
  "key15": "4RdzRG5h8MhXYZhEasHKqsYJsofNyGBMcUtuPmwEeLa7MBXTnfYGTQaSTJTmB21QcUfpjAECGwBqTMMBgU3oZQZx",
  "key16": "2jinT1bisbx2qeYhuF69cyTejA7K5zkmGimRA2jeibLBiUjwH1Yvw5QMdnFMhbyLVbJ1uFstBTx6vsB3yyvyt3Gu",
  "key17": "4TiEkxZSHS31kGFfzM2uL2uu3Y2uFtFLmy2iLBwa76kBPLRRRD3HsBBLQt8ijyj8Ayv62dDGWW55a28aezng8waK",
  "key18": "5H5pQBPbE5QBA2fHGQzaJMSujHe2Ed5MBp21kedjKce8u52EG94k21WZcFupzAgrGb6j2CXYkcPK4oPa3xy7v5nS",
  "key19": "58fXjE2B2as5nPrNc4PeqCKhgo64zWsQJ2P2rbFm2L7w3TLCxgnHXaD45C61KJgkoGSb2RLR3iXGRAtM4Udo4PGr",
  "key20": "2XqZn6MmJShfegTfWxDYLXgMMDEufcG24h2SYgpebyUhm16U3JR5scCMQ4YHuoKBATMmXbidbRYcGrwT9de26yjV",
  "key21": "42QiUYN6432LmRvztWovA6Te25xu3FHUQqn33zTKgAJfECWEnLAwLn6yKSi6fmEQnsA99Umzt1qQqUsDSTpJ6GMT",
  "key22": "57ianFfLtht9qG7nNqEd1subCTW4uAJrfCyTNzAS9szTtBgxmACbtT4fm8yTFCK4AGrnc8kmmswc3ynkvB3adDHr",
  "key23": "avcMuRFA3UhZ9RQK8AVXf98bGLwnBxYn2G7ZSosXAAQS2MHKKRopWpsLbAkaYLoggMxcV1MBBmKbDHFRJ1uNcS7",
  "key24": "3UAMx5CFMVrrFvJiwBpwLNNoK9CgT11G2iFtM9pZ5Qmt9Sqy2qNsJ4hi3GyiZdk46B7KjQtykP1aE26zY3C2ZWUD",
  "key25": "23enq2ESFz8jNxamgPA77LPhL8babckEkCnycex37tggFUUsUnMCCPqH5qBcLhEgXsX2KL1xPgCQQzCRydUpUxu4"
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
