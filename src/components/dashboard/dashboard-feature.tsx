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
    "VfXLvTm9PDXs4RWdvV5mToLTuiALUx82iw8nfJM9GFKnxhVx8wi4WMHHH7VryNafAA93GvtZsRgTk5BuGaiPEZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34QTyvGAYuCjRdsZQmfPdw3sfXZEcwdq9ZQx9QSpCBudEnqqzTGJXhFtr3SiTS5tua7iXcrvTNpukfW2WbxmQ9ij",
  "key1": "3Gct5zHougSjpWf9tHdG71rAKT1UVc1rpnsMYgQFPXf4uXaHdZUiabHkKHUcTENvzCPVGnXLf2E5cQhB39S2dCXr",
  "key2": "1suw2N7taERtRfuqfBLq6ZqSGqkw1kVPnb4sNY8446PibjVANvBb4eSsdRx2sCvXh56wtbEgPPR7hWiJknii5tS",
  "key3": "2bc31sYM7uscFUMMkre5rL2BJdh4jdaxcGe7Z9Bz8T6DwZALFJbdLfqwD6cnuhMRNoQ5jTsGgysa33NMcUNc4Ey5",
  "key4": "3MbS9uFHQZCAbdMY9acgHU91guUcHyiFcHzsekDKoMBgs7zJjmfrcGbm5gJmvo1wAmAtpertReQyNSX6m7pVpRmN",
  "key5": "xxuwFHeD9RTJkRZCieFYCXrHr8VkNciTrMw3eFGMoQcx9GNi17nTmpb5SPtPZjAwqmJ1BY766Kr8N9qyYv5of2g",
  "key6": "gcrac4PR7ZsfKDr4wMUdQzjh7McJKF4bzZuMVFHiXGY3YGoRVpTdVfY3Ln22L3TvYdbLhSU4j8pJKJxJigQSGeh",
  "key7": "2bG7yiov3Qcm2A8acD91gGBshZMPM1gutSQyRXirq2av4vWsN6SaHWj1froWnywC5ndhc7ZC1wjSMQYHePHhBcGo",
  "key8": "3xpCphfamNL1hAwJt3MEzxA16sSqRs9avVsQ1YJ9pneq3L83WDPSBeTbThvKWXvUiYZCrsFQf2CLNctzj5pxv6nf",
  "key9": "3Yx2PuL7KE2TeuTm7FQTkZAv4q3EJbUQM93SuCFDREBqhEmiN7wN8iz1tsUP8QKJoLdX1UAAwPNzoq19CwCxUKwW",
  "key10": "434H8N4znroK7NrW52zX3ug6cd19fiDuboLzezpDhKNHoG2gUgdtUS3oB8ecPRUiwxRkggnXbwLfZaLrj6fbv2bS",
  "key11": "2rcriEYv7uo5uaR6g7fMvFYTeKNnrmNaPW9JWtFGL4osyqmnGDEM35XXFcjfUboKZE6c7b6JAWxLLf7S4M45cfGj",
  "key12": "3kzXCSuNsVww84bXwaghs1e7dkWj574zq1CoZvbnjBWpn4MJ1vf4g2xWZwoFqpBRy7aXA6H5qgv7XrLFLykbcTtc",
  "key13": "e2qykJgd4GPfw8KBaSrFFoeEHanZ5winYFHBJhd22P9kGRCn3AzMxWpDyWtSDwjY3U21G9boYzEsQ3JnqTkJQkK",
  "key14": "36du7rRwnqukQ5cNhWAexbt8ex1DiKdEHfvijDccgcrUPpdvEztpdwumTSMVwH9KRXofkF1t1MDx9TYFKd98H9sD",
  "key15": "5CGrP2jVGBkCHASXB8k5Q38hu8DAxt8sdHLYSmap5URXyoYp3UHCLkUj22dbDeaRLyrqnj8pS8Q39QXmg8MNM8Jv",
  "key16": "216UenAN6KuKzBotwkkTC5JA7FRB5YhZY5DKoCBx8NPZktvPV26mvc6Xi4W4MJiCGXqf789f68w2TbURBqdWwpce",
  "key17": "4yRJvoQddDBkueFrwPXxEmvm6sabaYgt3DPkzcLE7wwZbdy7wmGVGpbuBDttcH9DqT2hnJwuDM7YvgGb1aENAfpp",
  "key18": "MQgSYjtnWH37ir7Lwr9Ypi5ASdsmCwxDAQQedXSbe9PNsKzt1CAxHoQVFSkJrMyPzGwC3uWLZQdbU4jjfFxWj5K",
  "key19": "5RXZqU1zg7epWFaaC39cAL9kRyzg8SJBL21kdBwxbiTT1qZuHJ5x9xFeC7EW1c7doLTuRQwSDowRdd3iMtH7uV3f",
  "key20": "5xG1n8FH4YuZrZyCsQe41cRwymEqBv23n9Qt4ZoYEVgkhunn471LefcPtEAKt1hDny4tNveuCveEu22DMp31pYm1",
  "key21": "5trhL3stXGUbKDbNQaY94eoxmjPaN6UwTD3LDTKQAqgZDh9AD2cpkpJFTUdjZxMGuQXJ7wV3rY5wLACYVWJiVsmZ",
  "key22": "tgzdK1JorfKhEpX5Z8B49aL91zWcLr5AJybN7yXvWt2n9EstCb8LuEcrEFExBpvn9UkK5VzDh3TMJdG7esnP3mG",
  "key23": "4mLuZCiCyTMFPK9oGYXrF9W7fDcqouuPStVq1ARu3r1CY6h3SW14H3Kt6jXnWjXUhWTdfeKAtdbe7Z7xc4EuqmFA",
  "key24": "664e7xRgqxwCEYdXrq3b1xYBKnqNWvy7F1sRr6L1X83j9TazJdKNa3usq4GocTe8xX9PpfXj4MffGVeQd7ZCDKE5"
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
