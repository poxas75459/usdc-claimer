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
    "5KaW2x6czGgT9d1pLEAQNxSfpcrDcGFjZrYqUKFWpcfS1A1YjfdG3rUzMBUkND9JDfojEJZce7FTPKrpZ4MpCkKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abcqybAy8KebVdVdAL2WkYdoZLBdTiJxXEEfnMy1QcoJcegpKvgDq5msSM9hMkN6wrDnnkPWdptsvc5Zqyyfw37",
  "key1": "5X8n3Hx15jssXSGbS9UAaxsEjC5oMKefZLz8sNpFKpLehnW94Ww33YvnnZBc2rqLkXrb4n7WNHB8UWnUuUzXF7YX",
  "key2": "3g1EK9ACmmYCcPpHBhax5nFQjPczNgnBa7t417gsW45YjNvTaASz7SHQsQbbZt3FvY5rUakUbDYsPsuxvoXBp6bH",
  "key3": "3PmFZJEF3ZWLfDSGdfNDQiXbnUyrnCRJb61H8tJGYn6iZdn3BMPHs8bYZfwR59jCCh9hP2hGSGq5yS2i7wJAghuf",
  "key4": "31coerLJkKiammS1ZKXvMoHGG9SPVV2rnNqgstqTQpks9Wnhf3P5bRRhZWWy4Do2RzumQWsAiwF5PMT8uebFBzap",
  "key5": "2g7bfF8LnkK4zTm9WATiYpTYw3GYpNW1UwvCNdXYkHbshHCdvGHKbzQwKef53VufapzhoXwywXVPCdp7q6ZFZarE",
  "key6": "F6WU6ysc7mDZbvePZvyeR6cdu2KNaQi1utxqYoavkHAe2LhuePehEz4YycXEtdwpjNJ4oUB61ZwcW1f8wT3Bbvk",
  "key7": "i71Sg5HY9wd9MFBbNfccLGp4VAX3AUPhg5CDYqKMHPZ2iW4j6EJZMAQG74VPKdmu2UHGxbqtFqWG7j3RcqNMkV9",
  "key8": "3qXw1kWRWV8eK5EFVnPcdPHgQkEKTGQ7Lshug9Y8gGh86oGX29iDJE3iJQc47eV5c1Jp1tcmLR9u3Cb6pBJ3PcuX",
  "key9": "2HYU1CEdWBa7M8xGtbZCBmf1bpt7rVzjjcXiaHvos12bhUT8CR69CdYVGsVtEnuZjurFNQNeiSiMUYSrTCen2ybn",
  "key10": "3UFTfqAuRAMbRqXAt1JWXJWfkwqp9LjHVyf6Qm9huNn9jPn7d35tm79VKHtM8SGkurZgPGhDVJL36Y5CeT3UDk2x",
  "key11": "33CjZfzNAp8bGeM39GbHT7kkpVsqcic5Ckjmm3abqznLoWkn1hKTvMi2fZ8qj21gmv9f2GUhj6e73nA7LptxfkSV",
  "key12": "67eTjjxqehHD8ntkxmdbZSEK5a8QMKgn21BHSsuc7zDAZUfHBXn1zezgKXeeDykuFAYdYe3MdRTPCfUfkwTyBWtg",
  "key13": "4fWcWq6F77vB4bZUFkwD4bHF9WHWijdo4f3KvzQyN1e1xL5NAtveieKTBjNUToqaVJwBA54GWBzbd9trsDCy2mtD",
  "key14": "4SBrn1kF1LxM1pPtyULFTei2qZCXBT6vhaKx5PQBUyFJgRafXvXekP7bAXsV9LKCoBpgYaT13FG27ifKKXY74fZe",
  "key15": "3wDgcqdoU97gzZxV7Lqx1Qb3P8N9FXCN2fjpFvcubtVDNn9NYDjCPYhJU3BSg6KEU36iGL9qTdWHyUp37mLfuRLD",
  "key16": "3pCFkPB41QWu1pSnyyzDXggqMyZn1TXwXfVBdGyA2g8i1MhwAH4zcGvHuyDYzdvBm7jLFYuBDRWj1dxiUWwLXgDT",
  "key17": "22o781sYRqArjiQatgvg2La5hjWBLuU4MncEZGGeAbFbqdtzTaECHycEPqmohuHc2G3UsvuabmUPu9Jc5Ve1ZYeM",
  "key18": "otUqeqLM2NduHwkZUHKACf6AvYen6FS3Z8f1BAr3VSc7o7pdhFDcDFHBQL1e73JmJnEbTjVm4hr4gWUwzJMpHk2",
  "key19": "3bU5Aj97t5gE9MfDTcaAMTxtxtvG4w9ogro91PgB62WrHiBo3jLkNrY26znK45Zg8mt99RCqM1n4m276D5ieE53d",
  "key20": "4zCbsgUTrMLBaGk5Rt2SJCGWpkrTyEYyNLXwLoS37iqQnK3Se7aG9mc98TQ4zW12e5B3j8J8s24ujmpwFiPGVEKn",
  "key21": "2r9vkwkJWFUMXp5beJSS1GWziZNXST9S2o44H5mm4acmdaavwMuSroiCYswbUQp78HaHAdmprirRLrCrFBFF6wh5",
  "key22": "4wqqxqPvgiPn3HusGRFeXcSYJHJ22ocVwQa9Txwr3UAxazkx4wkifBsjidn5rt2iUNvWijNFUJih44eqaVVrH5CF",
  "key23": "3K7HYTXHtCmo7rqsHnoBt8zJ232conWQGsQa7i8xnm5c8fQssdiGWooDUscCNc4a8qooT6Dbv1Y5fZR2hSbdCwQj",
  "key24": "5zVgJqeMVZfUHpQBXB8ALB2tmBasi9R3aUeMWdCPbyVHpG3uzc28Gp5USawnZd8RSNQyiRrqJDJVFgt4S4nPPXXN"
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
