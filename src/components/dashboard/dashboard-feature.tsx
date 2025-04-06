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
    "2221mDmC7RARMZ4nFtyzAAhtFNSut8SyfuPXQdHYEtEArepEgDDTXpPuXy1UVjG3TY3hEjdwUzaiTyYWrT8eKQcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBqbkYU5M6zXzxC3WApZ95zgZWUDc8WH6XtUPL3fvWwyob9ACTy8nsPvLJ1VZNh5Q8pmftqZxksz2kNKQzG7wcz",
  "key1": "KH2xpziea9n1spRmZotLmtSMnPCKUJKfrJumuE2Rg1FnedrLw8sjcfzkTPqktgR2GcWRKvUPPqv7mCKoWb35MSo",
  "key2": "QbdqGJcEuWvV3ZZQnMT9Lu5vdKGYA7nhBhhNp1QpxBfdQrwDpz6nvbpX4DKiySfsY4PPCdg6womEZkc9Kq9BZLL",
  "key3": "2i42hPtDcupqdKMZLBiz5HKob5E5YJPDe1SCXDqnE73Nhzo8cq2GBqU7A6ZazUhg2cFD6eh5tyKhZQxEBHG6oYtq",
  "key4": "2qRL27x8uApxNMjQbqyWe8Eyc2TDk5QHpGSBtUDwR7XDYemWqvsQBKgXqzz2m7r9Nhp9CwQ5sAt8kP9yZhtHa3rK",
  "key5": "22sJ5hNkBH7KggaErZhrbj4awSDQUkxcgvSoXBc6FA4RmBWsBtsCiKAMVLEKV7LfYawm7idCfj2FUT2HuYvjD1Lj",
  "key6": "5xwqnWKXGLCLPE59rMGChn6R1kTGZVSTofsiZHL2eYfvH5MZHADMs8QPBxdKPwB7PnfHjPT8r2sNzFbynK4TrgtS",
  "key7": "2ukfk8M9b2CXkfk3zmmRmm3BUK9GNAfFWWVjDe849Y6fYx91TTwzxQ3Gg5mCtc7jLmX4UuTMDPJ6xqprqBpSQDpt",
  "key8": "4pFfTBV2Uqamikr3HvE5YcDE5iFWxTVyUhAsQoCbmRFnZ2iWQg2X2JBwgYNNjNm8mP5vcL3RVLNfkWEuLQMtSKne",
  "key9": "3PpAEmFugmdyXpZWFN8HEGx6AJhJ8SF7is4k2ADB8ZzF8iLwH5qGKjUGpyoWzi22NomHKYUSuppUMbMfpDiW1hks",
  "key10": "zEmifYHGzwetmAUsTDzRPCAxonM9qSFnhFSXQJTyyfSn2xDE2sEPUbT3v4zhkanwCQpVSJmEsxoJiWBpVizjbh5",
  "key11": "ahQ33uNER6bM37EhNQyVDFADdzwoGHwdDwcAhyDASnWNXgJcanC3NRHPvXiQrk3G5oQ6RYBNMTwnMSRzgbjsmSi",
  "key12": "52NBz8Vd3mAdH6cYTyMzNuSGgiu3TKYRRm4nvmJ72V5gnatN2qXfzA52YE6DTm1nFgTf4NAuoDAKMbv9oiN7LTBe",
  "key13": "SRiMfaPX4FDpwXdiZNgE73anpL97B2mj3NYnBhQC8J3CFvgwZo4cgSj5vn9xofQV4H8i5YXd8wQZuR34HoqFWQM",
  "key14": "38fxkyUitMdWsodAnS7Czgp9ALTqYsopt5ytD3c2cvryvdhPYK4N9G7SRF5N1aXcmh7K2FJuXQgsmZLPRP2mxV8v",
  "key15": "Hg9PMFgVKYJgDCwzNoMMEfqTqERd4hL4C8FiLSV19GmnwBScB2X2XchQp7qCzzaAQJGKRBvDckweNi8gEXhsmXU",
  "key16": "mizi3B3CGNAmACRyAa5fvhFDZXiv6W2GGBKCHi4hZJv3aiq1ctbgMjcrAu2PFFdyjySjKHbA9EBsqLye9Zw4Nok",
  "key17": "5bJGZ7CWywfGZ5rtkWENudsneBFwR8yoERfZc3x8vvEpgTV5pS4ZK7vV49nniMZJpr8dkrfkG2GCfLJvB5pd2juh",
  "key18": "54SRARnm5BEbU4PdzjJ7zsvZgHVySRu322bnGNSF2K1hHEYuWfgvHJLCcGAw3Rt9zNweS5ecUfhPCNctdRbs7ce1",
  "key19": "39khSzGXAwYMms5xDAdatLaVoUvv4nZ692cJYmPfV2GaetagLUNAyi1YyCxSZBSrD6AznDwtiLM2eWButKWqasZE",
  "key20": "3xj2ypnCugniYwemNsJcaSsTdtNjV4YUycqM94kQqWrAShgqj9448uai4h4hJA7hNCwVWeSXdiJjk4YDc36XSTCd",
  "key21": "4qwcH5m7GLjxm3tmTzqyWoeuZAeaXP1h4RZpa4B5tFAZfYHi4k6Pewg7JjfTBUe2sQY61su8G2BYh7DLxQb9ad9Y",
  "key22": "4thfxaZyXzNgpwhk6BcNbYvLs3G9QumMNLaJ51r8y3mb4EibRmY9V2WPW1Z88YwF34hPLUvMcqQAtBTuHqdhdjWi",
  "key23": "2odzq8ufERpVW24mHjaGcXW2xuTiCDixxWnvMx1bG8GEsptqKh4icMa33NPNDeyTGyJ6yDGAy9f6khbMajpey1KQ",
  "key24": "2YG9jnFPbiNfMHoN7yDvTrkNk9Krr6L7WeWXsF5oQTcP6GAMJCBWCeU6tMyiVPu3YcUF9pBGVRs2PNst4hPJ7jRS",
  "key25": "5QnCf49CnzXfpcz794Ey8Aqpe3LSg5cocK5aaGbLD59Ek9ucKLY6oASNgsKvQkMBHmzwAygnnxHHQuNtp2BWkHV1"
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
