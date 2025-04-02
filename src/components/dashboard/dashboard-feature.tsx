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
    "2Ztcfkpfg64nXPCGRUaPoYsHBNNttXQyKg21MnDsiNDiyerdf7EsMzqLuvQZE2qUxbKmM9VcsRR7pNwZNDsR6uxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUKTYPVDhNjF6GXBMw3YHLPRpUaSaHGT8CYAoEeMYVRixQwWzgfTRVCts2ZasQPBYcHrWcBUrPKtAzQXmziP461",
  "key1": "2QFmnBgPy7fcqpfSvshyqkYjJUSfLsm9EEU2ncMyrmicyc2dfTDJSjF7XBq2ZKY7u3C9iUKiiNZRFTgjJWS4e65h",
  "key2": "3BhhruPdj2YNHiFCkwGnXfgPQAvAdntmmuNKtAtH91gHfswszZNcQdpRCwSovnF1JMvunW9QyrCpHmWtAwCz6RXi",
  "key3": "EDAWRYQNA9M2EoSjCt6EyXsWaZj7HRqsXoQCvaP7MNbiz7ohwn8hgNJJDJX4eNe66znmhSw38Uv6UuSxbQAURy8",
  "key4": "1KvRWRe2yBVXVYCkmyLH9VGHYvGrwrZTFbNDGduKZQP4TZfWjN8vWXXGw1J4SrpNj4QsmCkNXLyqjP1APmcxy9F",
  "key5": "4aikhQL9YnsjFFN2kRhb8nbVbrwhFsYdre9aG1xqVqaGhXrKbGfi732eEJHn29upP3iLrqjR6JjBKhK3SEwHcitG",
  "key6": "8NRojwevN3Q8SHwER15bixACN4ZLkq5ccYEEWT2MMkNMsV52MqeR1bCqWARo87SM9G3v3bFSh4DuBGLFmTwx3io",
  "key7": "372KCR8gT52o6ituTLs67jYCJhUWsvhjgqgwqjjtGRsBYcyAyzmPgofL58Y1sgBqY1mN7a8hbWv3UqiDGX21EBUd",
  "key8": "5wrMhHLGnMTQL8Yr76jVWf8qExA4tSkZXCwoiEgKCCmQmehu7DmTGYPftdMFUrkD6BuNqR5yDw8kjCztx7dzCJjm",
  "key9": "oxToydugkDyKRn1nZip3BejXhBJFTGSJUA9JSsZJNT71tArYdAQHtXvaxXgZpmHFy7p4NK1RXGjWR86Uj1TSrmk",
  "key10": "L7NbFdr5FMizf9Xojvfc3qtJFWbM32MkWKqUjv8ThVmjYwsqFPADDVb1MLmFPzuGAtLwsNfmvW9MXprhsvdWCmF",
  "key11": "4gLwEBLWZwt52oGpDfDDm92ky3wGDkxU1Qkyi6SoznxjVY4AoVczF4Lu3YyoF7QZg7wrvn71ATyi9HL5ztePjPV2",
  "key12": "3PMufkA9hdTSEMbDhyzns5FvHX8xr7bFdKxUwirne7Ecy9szDZD9VYYqyBQQdJWhUUxhYGAqSv6AypxxBrJebbut",
  "key13": "4p67zoqpqZzuzUE8jA2XmiENQmyoWVSVCrjkMw8uHvSSw5gZyMV9hFMGYEd3yXpk7bP4nLTrQJWVHE5bS4TcmkA9",
  "key14": "4NXdFy54mi51xfbpan9yZYcaMuKA2k3WTymsA7xmurTsv4xjD7NzQ1eGExf4FJjfj2w7Pd8kcruQp7AhFHdh9XQx",
  "key15": "8YfAqpjG8dfc9cGmjt1ADCYcpUrjqE6scP7PKfJUUmWEb6n3ZfbzABSxdev8yHEDjo4qeSeoceMCiDvsQTnLtqT",
  "key16": "2wX47H5zUF4mg9BuMZoYpVC1Qn8SLBowj5d3sTFKeBKTsnyo5FyhsMabdgpXcg7LZLuZ9reCxjQBX5cxN1fH9D1U",
  "key17": "m5azYnqW48Ld37NxUQ7WAMruEp5LpszpitcFGziC2vxPPwq6ety9JQnTWfZCPfQzr4ABCLMkw6f35y2oU1gE8nf",
  "key18": "4FN8aMhXC5zUpQqAHqZnDSCA28tfw6RX1saGW63Ghwu9eUvatXsDcoQt66Uhxk7f8n59xx9H4chBW4s9jqtMrimL",
  "key19": "257bQVvoT62oYnfQZ32YMVgXHdC4kRZPG3He1JoJQCVDenuhfQLHped9ezQC4ppvsZFSXCQUWBT2Tfdkk9C7hhH2",
  "key20": "2Efe5fGc3b8X7KGQviyWBATY7LUzwf6GzFueST3DPNfM95H9WQLNHUYPzUMvKMvCT8As9CXKYpDUgQ9taXqW4KtJ",
  "key21": "3R1BrcHPmCqtU24JR9TnoPdXBf4Wp3Le39uqW9LMa3vxMi8ymDizmiSFGoJDcmBYbHUypw3Wo9RAZ1ks4rxYL9WR",
  "key22": "2dvvNaoP8rsnXwue53xdL9MhvbZ9LBkWxxP6oHAHse793cej9wxLVm7PGjLo2n3K3g7VibsEmPj1CXCa4nMXK2me",
  "key23": "5EnGNrnGXM8e4p7g8RTZ3TBiVNjsLgV7gCDbkKmMDDtmRJfHHym9WxiM37wYcvhFDLRA6qcvqgdpAcq4uW5VaTty",
  "key24": "33yrrjYF9nJtFEsK3wBBneDCk2nKWvPPVh2BhYtUx2SGcDwg2hzRRtZRyGtn9aPpjoW2c2WTKHGdusVmPuwZRUPx",
  "key25": "5zftdeYGr6k71aPfDdPBw3E5CDHkfPY98ScP5NWZTD1uCYZZ9ePq9vc8QyHFDnppHvCfSJxjFcsmW8HKxVnJ8L2K",
  "key26": "3efszgEfTWDQWknb4hzm41fTFpwRkkH89iodytRELSDNhyA8numNGmorBCWox9HUo7hGgJS91uaysG5UkpnAyz6w",
  "key27": "FijN32WFDtfMUd474RLAs7KJLqPWUiVVjqxmZxyL3T2v75RprTrNydUtxGW9NftRsBPLARpnNdhxi9awXQuuBbi",
  "key28": "2AhG59wyrWGDCJasuCchEaRNBmKS8YJejrSMz3B3utEs5LhJcnutQfAd4hT2ZtJrWzb3n5vSfXtLhrYhNrUZqj8g",
  "key29": "qrfAfAkNLyb3bHzkEyr6UCZGHPmyKfWczWbZ9P8JHyUW9bSzuB1woARm12759p7Xx7DiLLcvXaiC9LQeLgxUXPk",
  "key30": "56g5U1qLDxYoc4kB2TPC6BFMHT5fcv1V3bPvhJr2xDJzWL2gfjCmWsSMwoEYc5xgxtMtf8E3To82dxu56FXRYvU5",
  "key31": "4oD3DRSNu8SPwTkGieh3AvnGbmGfsW5JDrgS2nnL4oX3n92Vb9xDVAR9vrbHJa2XhFvjP7YztLoBY3e1Z6VnyDtX",
  "key32": "3gbV6yPWWm7mfUj4mtwpEaFzozBC3WqTRDTvFqFP5nqcy6Q3kJ4d5Qook7XDoLKmi9AA8akKHi391KphBT1LdqP2",
  "key33": "4JxZGUNw5JPYjgHeXEucXEWkfnRrXk21hGvG5f6Yct56rgHytEw7Jkvd7Kug5HSCGeuQHaLbY5nrokNbtJ7zLLiK",
  "key34": "2Q3yfAcEsoqEHCQmtdSmbgjnrTMAzqXk12prNUFf1x9XSvDqgbPGu2zmnqYYDZQVi3mPTKs31yisZUP5BTsFeNVP",
  "key35": "37FBeJYEb59uhjT9GRHuwHoU84KApRj8p3b7bW5c8VzoJfxtCCp5CXncDKiJ9U6e6JxTr411E1wuaLsbS1pBufWK",
  "key36": "39nvavrF7ex5i8dydB4D6rGYjEHgzFsxdgiC2fFvo2Lgjn3jTCS8M5UPehNTvizPqKmoeeQcm6JyNhE43QULsPfX"
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
