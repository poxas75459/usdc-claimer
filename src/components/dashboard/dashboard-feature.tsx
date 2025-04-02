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
    "3Cp8oFtSeAqioymfbkdcufdmXuwjahZ7TnVmf3bcwmzAM3TKXDRd7eia9GxqG53mfrC9bLGBjbtbeDL1iEcMt9r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8T6LMd9yq5tAY6otnAu6LfHuNxe3ieypsat25W6r1p1n7iotd5WLR9pY8BrDWZhS8PTxAXb5tJ5kzahQKKwq3k",
  "key1": "4kaiQsbrMsg9QbBkq4JUETATQwo5yoZAWDF7x4SBrkvdNHgKZjyuRwxiysxtdn9r3qtGYx2HvGfzEEJhxXDBoyet",
  "key2": "4wigQyzSV21BZt2xqppR6vuQrUf6wyprYv7q9agk4v7RuZsRS9x1mB3TFTfKZQb3yz3wc7YXJ5qEbS2qN7R7tHHH",
  "key3": "23w1RpatAhqVLdwomj5VvRtjphASZUAbWKcdkkJ4z8NfnquzpKH5N1iQks7Yc9WqJFjpVWsQtwVXNPwAs8Tyqamh",
  "key4": "2iBJwTa4XuS1RZ5BkZFmieegUQwtGmeEbfhFytfGwbPQiNsA5PrMTp8z5ZgWg9q2HWv8yGV9WrNnwrXMRkWKHihQ",
  "key5": "4bnphu8esek6tnKBpX4VJtemLzDQWxjCGTMWEkMRMTLRAzFwyockz1ozYSX4oyTFV3kYyfWTeK5x8s474RkAsn91",
  "key6": "4xQ9ahNaTzQkcrpsEd3qnBA9fLu8PRTQAy95LBEtxpmmJXMjvD7nX3mZVeor6H8qTkNyFdaLWTUSzEPJnMme2Esh",
  "key7": "oRo9NXtRfwtBjaTX1BDwPoUBRFJst5zenXGrZpmixWCPC6SeumN19RdVHisvkY63NhEeQtknFFqWSRXWj9R694g",
  "key8": "XBgLUWr7Hao5xL5pjxdYUUUGvHvPTrG9fCuSJjzQUtvTUkK2FGteQX3QJf2huNJrj1F532PtS6U1MvABdzCjvtU",
  "key9": "5hWMmacA4Xx2sEV6K2EFTjummXa8qarStwXDWThtQbcEpBM6EwcDCEbXBXc78G3HGTSfxiBoQzqu7iKoqoHPEWwD",
  "key10": "7ZCqLuAU1QP3MiBZdDn2gKW6XWrwQnimZutgLxNsJUcqjyPNMVCugBu7E61oeCsFq7cG7b44wVCQwMFyW2GCH3S",
  "key11": "4vBJFLfczYPT119n5nRUSsean2MQXkhMZ2mwwmipUvPgrSnJMqJnuD6UXhotrusMbBQmazzFJ7Ceu5A6hHd3jcM",
  "key12": "4eEG8GvfLLQbj5pGCgkrVu1AYLQ7fSRAGv4QrrJ938GxB2hDXVRwDaFYnYpJoQmUR7thqs9WmCZAqo5YxNSxN9RF",
  "key13": "651ZQYS7guVFCgvr5eRZ3uc8mgxF4nfGK2iWiwKt4QsABat34N6mCnZqQqu1dqgA5pnCUzMLRwnokJnf5x2rpgdH",
  "key14": "3BvHp6xNBqSmu64sa8ZuSMHPg64EDs5uWWfkkj31vNPHuJCTbu79YLHoVv9nrXuyoGAyTiMbGAUWtbm16Aob11LV",
  "key15": "4SSTQTfASnm77AEWdNFLDMizgvjsQzT9tJWRcHFQxucYdYCUxYxYUhyCyR9SJPGqeTG1VNhdxrf2Li9pnMTPtAjg",
  "key16": "3QVzhA8y4zBeMb1QrSAoBZWUvEiW6QhmHxpyJRm8Uybg9pzYGN8UoyDz6beRf3mb2eeA8boeyDCCwYvJQneYFQXS",
  "key17": "4mZ2UgAffr5MFGH7jLYT4QNR1RT9mkBLLx8Dxo5SXgqmQbdcrKtWmdWjGAY9DKMknhkk5LGESFLW3rJwUUfiJ8L5",
  "key18": "4hA1obuk7AqdcL7JjjEpRVT3Tinzgt9KgL5N8gquKnS4BSpbwu77xeoo7HGAUKbSnbd9Ld3Tb5SGJhFJCe6KTuYh",
  "key19": "2a6mucXcYFMULfYhChZs9yz7dEQfFsZ6GdF4mdW618RocRWN2iqcDyBs9nx8YURgHWrjGUu9Ad1CfKw5sCoSk67b",
  "key20": "5PAq91DBzMcy75rbV1A94BnuDmWjWowBWwKGZoozB8UTSQ7PydUfS7b2AS1q6w3ggphBUzEKRC2zVzWKw3gbXHGF",
  "key21": "3nvHSJeXqzmLyeChgUDqzZvBcfXLtFGPeXAtsua13aYU96ZAZSkg7Ys11CzyfURPWggi47h1JMDsruiyWmha5QA4",
  "key22": "5Lhs2uaHuGVSopgo2n9a7piEpfo3k3bq8G2iwABxAKykJnFKDfmRRU8VQTMeak8FatfPWGQhB51AHpugCaojCAtJ",
  "key23": "63TDGwy87cCfszDcKUW6Bh3RPMAqZY2Xb6hKQchVpsYWaARCRzLrsUDk8YT2WUkH2WprbmLx8C8zYqr47RRUWP9k",
  "key24": "5oY9gwTZE7d3DVKFdJhoqDbFHKmQQXuBJyeNfcYKVjnoHxVPQmymnyUvm4fA8TZqCXUPADuyePmfADiz5cptYrbM",
  "key25": "3s9aYBYDHKXHK29RpdgTEnqKP9WpFQT8bYWzdK6EHrGBWTayMDSHNV3SRU1pw3H9ViuJbUMx17XapquRinuVQ625",
  "key26": "2CdDpmSFPjvzEnndxNZnTAVTvFYTNUf9oYHzzafgeJXTpxkRLcwjV4sDJPKsKJ9Lrc7fLo76fMjnA8YV4kP4eQgv",
  "key27": "5jrqjmS734XoxvVs4Qi3FVqNTGCdcrrvcA4vr7rX7p7nsMbRGEL6E3YKgUNjQtKt92FguQ3gKKEyzBr882vmCST6",
  "key28": "nEZFmXMM492FnnoDz6ZNCedi782rh4eMufyvThnPztvxraAJKtLqX9aiLunEF7gnFrREQ3ricS5dez2JYDZYu9S",
  "key29": "57AcKsvaU3CaLNYCV6J7QtesKoQF7Z5rSrT1kincQb2nughvRqM7LcayKnY93G4QQrMyNXsKgF7PjL5uhtbrqCXv",
  "key30": "3Ky46bXvNXDLExqsSVnUHhTRRKHAY8hv5Qjv55sS3eeoes3H1PomGncLdGXzhroYeNtBeYWqURkwUvYVqiYBmMxD",
  "key31": "3Z7Pe6g3bKTENT6Pvkg7vpAiNEJmjS8de6iaNufZz5G1btQePXNx7ZoHjJcfYBRJwpvETtCuTCfLyC3Fv3AnBw4Q",
  "key32": "LvpqkxiLCbP74R9JdbBci3McnoA6LvJc9MqG5ZzVK7iFt87bjjJHUTWsXoRvPdzktMJmaMykcKiQDjQpiru87TH"
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
