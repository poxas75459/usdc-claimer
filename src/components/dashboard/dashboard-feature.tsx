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
    "2STbYqf51RKV9UCzqLd8iPB3TLrccmzGERTBGLoieHj3KVZ7RbfEjtGMdX5TKaUaUZkED8s5xqzgYD1gULYxkb46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4biobRc55JFcPAoeR19F7BYudYVVHMbZQvdGcXd2cBctFZV3L3zrfLESCwkuREzsaaDDUwkiPGcut81197kLG97x",
  "key1": "53RZdMTXCDqscvYVTLYAKNPA8PZ4tSBp8akZatfvDa6kCXpGJKSbsaRp3iLhbgtQKf71CS7W6Nm9KFrzyK5kj6CZ",
  "key2": "3qGTWqp1zqTRKig8DSMAmhaBVX2uWF4Tu8N7SAvqTWEUJGKY4KMXUyCiabtMVgvMaC5wFZMMkvbWdZhdoJDDgaUh",
  "key3": "4jaidU6bT1ea5qY1NPMRGrfWa8X7Rfx4ySYuSB2c5z2Gr2mqMvhzZC7CJXK96zN6Apz8jc7kMgToJSDhMA5JwHWP",
  "key4": "2fqJC53WscyV6KYywzbGnuWiZCn2Z4Fr6GTzXJhPjiUuVnm4HBCKejSU3xezVsz3DHKmiPpYpDLRETiPxwj2b3xS",
  "key5": "25u7yaZ4QncEVmYPLEiTKzoRzqWqxJQcenpv1s8Mddtuapjs2xUpDe4nb91zmUwp3Dit8oZS5pz9xoqARAJnZm2j",
  "key6": "4GucQDcWFMQqZkeXLaa41eNbLegQuY7XaLgQuNUeycFXMJMnbvd69xqh65atvErwevfUZqNo52rZMSP39pahKM4",
  "key7": "2QrRFbMaKP6W9cAGtfYYbReRrU9rzNKJDdNj7DqguvDz4HvzFCLCWbw6ctutU3deqpS4YqeGya4becVDbZvpB5xE",
  "key8": "UWB63GvFqh3ewLkKMbTfbWVNsDT4MBuisVr7QxPuMS9fkifDQBqVLeUAvYH7gCtLDM1N1Cb8eY1BBH1hzpRF8nW",
  "key9": "31JiHLEBwbrG7zkMTY2Hu46m9WaKyS64bQrnemRjrXDYPPKac8FEMgQaX1mrPFaH6g4Xpx4gzcPCyidHLYBb8prj",
  "key10": "5oob4wETk6LgUFkvFuGqyGiefH8XtDymyrqTRA26tnQCwxf5ZbTKuKbgT1r66QXUXmG6nju7gP8uT5THvWWVAue1",
  "key11": "4ZEMXuGzZE7vd78rcLnJu28F7fxnKgdjPCWrEycty3uZA2PbKyUjKT35MUpj4kwDj9vm3aqx98uyD1rtUrwidCXj",
  "key12": "35ygj89XqxNU2nZ9i7KUWvUjxt7bnzNQVsiBn4HbW6MDyjYurxbNWeYqpKTiHoq5rm2TW4wNgd1w9PbDLHVUb9Tk",
  "key13": "5jxLGGRZkmiCjPo7hRnRYTYsqYLmT32Eqg5r26gv5CsuBAJ2zQPr9TM8D6QXMvPqSe7wVFvRocNpV1mdg4Lzw17C",
  "key14": "WH7LKR3wp8whSryFoE17LTBcrKkaN5Kju233SdZtX96xFosP5j8BfLU5P97jkywkKqYU6VZMRmQbhQx3QF5dfvx",
  "key15": "3LqTokrNdENq4PkV5zK52Sk4DEz979G1T9ZQWtSX8L8FQB3TrF37HaNy6Y4v8ca17ZWyeo3rL7EpjUA4sCw6aYna",
  "key16": "5sBLhV9WaJdQUgRE3hbUg2FAA8XuLHiC4CLjue5rR8Y1wUCiHbooksD5BX9tX8KaLy9t8Gf3DNinARoVoQcZ7JvX",
  "key17": "JXtkqqH7U8oB2iDwfXQPxNi32Fh4ThSsn7sxG9rs8v4KbtipyGUrSDfawnHNcLgZoDoUbpkP5A5jPPXAxWz9iCZ",
  "key18": "4W5q96Fuh7yBeAs7yDi7zW7NduMS7Xnjo76EyPSfWNSRgeRxP4tA4WY3KEBB458zEHgq8qwJNbKMm5kpCjZeA51c",
  "key19": "4pkrR1ZVEr155TmrcmbLC3XL9L1iUehHVcjzvCp2JBWbZnd1EfTT3idASSZWSDS27eNLU7BDhKFrUHFNLtc3wbhA",
  "key20": "4t7ttNgGX9HRQ5LsXCgd27Hf3ycLkFEYpg2AD1HKPiBjA8EVZqLkiTSqZpadzDT7E1EDtf8uU2sJrs8igCJM7yny",
  "key21": "4zjtpKapRYDyuQQ7M3SvaiE6C3qJUjcSDVmsJBwe9VV12NLb2WyLTH4Jq1QfJWvvrdM4BGRdAvBqtNfjpHomYBMT",
  "key22": "23bn6jqpE5LnPLF5AgT5gJTPLiUMB4gAW8xsaSjkMN1HNmj6y3B1oyv69PaaebEoTLXqNJXGVQsKQZqJYgGKup1N",
  "key23": "Xi6LSdK65MjwZ796umYcmT5BXa4DEbDx6Wzn9vT2CDspHvX9EXdC9RK275eTFC42QFwh8Ta9bN2LixngUdMiHaH",
  "key24": "63tWLMHwTXJxoJrW15kYKEskpVzQ97thSafhtdgNe3ED51h9Xv3NzP4p8mGF4khw2vkYmQWdemXE2hYGtBR6BkeQ",
  "key25": "4r6cJe51BCsMF1M4eUrxFtijL9ZvA4aXx9cxSFCwsfveVmscQeXgWzfioSJKCK1moyC5F725KGfW3TKDFso89EL2"
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
